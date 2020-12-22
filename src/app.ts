import { Application, config } from "../deps.ts";
import api from "./api/index.ts";
import { errorHandler, logger, notFound } from "./middlewares/index.ts";

const { PORT } = config();
const app = new Application();

app.use(logger.logger);
app.use(logger.responseTime);

api.forEach((router) => {
  app.use(router.routes(), router.allowedMethods());
});

app.use(errorHandler.errorHandler);
app.use(notFound);

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

await app.listen({ port: parseInt(PORT) });
