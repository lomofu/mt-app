import Router from 'koa-router'
import Redis from 'koa-redis'
import NodeEmail from 'nodemailer'
import User from '../../dbs/models/users'
import Passport from '../utils/passport'
import axios from '../utils/axios'

let router = new Router({
  prefix: '/users'
})


let Store = new Redis().client

router.post('/signup', async (ctx) => {
  const {
    username,
    password,
    email,
    code,
    phone
  } = ctx.request.body;

  if (code) {
    const saveCode = await Store.hget(`nodeemail:${username}`, 'code');
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');

    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  let user = await User.find({
    username
  })

  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已经被注册'
    }
    return
  }

  let newuser = await User.create({
    username,
    password,
    email,
    phone
  })

  if (newuser) {
    let res = await axios.post('/users/login', {username, password});
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }

})


router.post('/login', async (ctx, next) => {

  return Passport.authenticate('local', function (err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登陆成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: -1,
          msg: err
        }
      }
    }
  })(ctx, next)
})


router.post('/verify', async (ctx, next) => {

  let username = ctx.request.body.username;
  const saveExpire = await Store.hget(`nodeemail:${username}`, 'expire');
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，1分钟内1次 '
    }
    return false
  }

  let transporter = NodeEmail.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })

  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user:ctx.request.body.username
  }

  let mailOptions = {
    from:`"认证邮件"<${Email.smtp.user}>`,
    to:`"ko.email"`,
    subject: 'mt-注册码',
    html:`"您在注册码"，注册码是${ko.name}`
  }

  await transporter.sendMail(mailOptions,(error,info)=>{

    if (error){
      return window.console.log(error);
    } else {
      Store.hmset(`nodeemail:${ko.user}`,ko.code,'expire',ko.expire,'email',ko.email)
    }
  })
  ctx.body = {
    code: 0 ,
    msg: '验证码已发送，可能有延时，有效期1分钟'
  }

})


router.get('/exit',async (ctx)=>{
  await ctx.logout();
  if (!ctx.isAuthenticated()){
    code:0
  } else {
    code: -1
  }
})

router.get('/getUser',async (ctx)=>{
  if (ctx.isAuthenticated()){
    const {username,email} = ctx.session.passport.user
    ctx.body ={
      user:username,
      email
    }
  }else {
    ctx.body={
      user:'',
      email:''
    }
  }
})


export default router
