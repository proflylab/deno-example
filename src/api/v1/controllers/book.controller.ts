import { RouterContext } from "../../../../deps.ts";

export default {
  createBook: (ctx: RouterContext) => {
    ctx.response.body = { message: "createBook" };
  },
  getDetailBook: (ctx: RouterContext) => {
    ctx.response.body = { message: "getDetailBook" };
  },
};
