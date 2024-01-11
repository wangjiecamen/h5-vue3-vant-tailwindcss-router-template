const path = require('node:path')
const Koa = require('koa')
const Router = require('@koa/router')
const sendFile = require('koa-sendfile')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())
const router = new Router()

router.get('/*', async (ctx) => {
  await sendFile(ctx, path.join(__dirname, 'index.html'))
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(9000)
