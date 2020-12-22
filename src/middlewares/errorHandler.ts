// deno-lint-ignore-file
import { isHttpError, Status } from "../../deps.ts";

export default {
  errorHandler: async (ctx: any, next: () => Promise<void>) => {
    try {
      await next();
    } catch (err) {
      console.log(err.status);
      if (isHttpError(err)) {
        switch (err.status) {
          case Status.NotFound:
            break;
          default:
            console.log(err.message);
        }
      } else {
        // rethrow if you can't handle the error
        throw err;
      }
    }
  },
};
