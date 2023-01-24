import { Router } from "express";
import PostController from "../controllers/post.controller";
const route: Router = Router();

route.get("/posts/index", new PostController().index);
route.post("/posts/create", new PostController().create);
route.post("/posts/update/:id", new PostController().update);
route.post("/posts/delete/:id", new PostController().update);

export default route;
