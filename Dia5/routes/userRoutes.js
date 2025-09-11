import {Router} from "express";

//La famosa vista...
export function buildUserRouter(UserController){
    const router = Router();
    router.put("/:userId", UserController.update.bind(UserController));
    router.get("/", UserController.list.bind(UserController));
    router.get("/:userId", UserController.get.bind(UserController));
    router.post("/", UserController.create.bind(UserController));
    router.delete("/:userId", UserController.delete.bind(UserController));


    return router;
}