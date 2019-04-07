const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/testAsync', async (ctx) => {
  global.console.log("nmsl", new Date().getTime())
  const a = await new Promise((resolve, reject) => {
    setTimeout(function() {
      global.console.log("nmsl", new Date().getTime())
      resolve('ab')
    }, 1000)
  })
  const b = await 12;
  ctx.body = {
    a,
    b
  }
})

module.exports = router
