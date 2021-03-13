const Router = require('koa-router');
const albion = require('./albion-routes')

const router = new Router({
    prefix: '/api'
});

router.use(albion);

module.exports = router;