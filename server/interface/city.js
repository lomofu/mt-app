import Router from 'koa-router';

const router = new Router({
  prefix:'/city'
})

router.get('/citylist',async (ctx) => {
  ctx.body = ['北京', '珠海'];
})

export default router
