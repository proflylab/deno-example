import { Status } from "../../deps.ts";

export default (
  // deno-lint-ignore no-explicit-any
  ctx: any,
) => {
  ctx.response.status = Status.NotFound;
  ctx.response.body = {
    status: Status.NotFound,
    message: "not found",
  };
};
