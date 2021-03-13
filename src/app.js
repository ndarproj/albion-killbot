require("dotenv").config();
const Koa = require("koa");
const routes = require("./routes");
const bodyParser = require("koa-bodyparser");
const errorMiddleware = require("./middleware/error-middleware");
const camelizeMiddleware = require("./middleware/camelize-middleware");
const parseResponseMiddleware = require("./middleware/parse-response-middleware");
const logger = require("koa-logger");
const db = require("./lib/db");
const mongoose = require("mongoose");

main();

async function main() {
  await db.connect();
  const app = new Koa();

  app.use(logger());
  app.use(
    bodyParser({
      enableTypes: ["json"],
    })
  );

  app.use(errorMiddleware);
  app.use(parseResponseMiddleware);
  app.use(camelizeMiddleware);
  app.use(routes.routes());
  app.use(routes.allowedMethods());

  const PORT = 3000;
  app.listen(PORT);
  console.log("Server is running at PORT:" + PORT);
}
