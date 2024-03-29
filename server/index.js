//import
import Koa from 'koa'
import moogonse from 'mongoose'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json'
import dbConfig from './dbs/dbConfig'
import passport from './interface/utils/passport'
import User from './interface/user/user'

import config from '../nuxt.config'
import consola from 'consola'
import {Nuxt, Builder} from 'nuxt'
import CityInterface from './interface/city'
import SearchInterface from './interface/search/search'
import TagBarInterface from './interface/tagbar/tagbar'
//Set Nuxt.js options
const app = new Koa()
config.dev = app.env !== 'production'

async function start(fn) {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  app.keys = ['mt', 'keyskeys']
  app.proxy = true
  app.use(session({
    key: 'mt',
    prefix: 'mt:uid',
    store: new Redis()
  }))
  app.use(bodyParser({
    extendTypes: ['json', 'form', 'text']
  }))
  app.use(json())

  moogonse.connect(dbConfig.mongod.connect, {
    userNewUrlParser: true
  })

  app.use(passport.initialize())
  app.use(passport.session())

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(User.routes).use(User.allowedMethods())
  app.use(CityInterface.routes()).use(CityInterface.allowedMethods())
  app.use(SearchInterface.routes()).use(SearchInterface.allowedMethods())
  app.use(TagBarInterface.routes()).use(TagBarInterface.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
