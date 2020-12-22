import { Router } from "../../../../deps.ts";
import { bookController } from "../controllers/index.ts";

const router = new Router({ prefix: "/api/v1" });

router.get("/book", bookController.getDetailBook);
router.post("/book", bookController.createBook);

export default router;
