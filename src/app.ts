import "dotenv";
import { Application } from "oak";

const app = new Application();
app.use((ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
