const Router = require("koa-router")
const ctrl = require("../controllers").albion
const router = new Router()

router.get('/player', ctrl.getPlayerBasicInfo)

module.exports = router.routes()
