const Router = require("express").Router;
const { body } = require("express-validator");
const userController = require("./../controllers/user-controller");
const postConroller = require("./../controllers/post-controller");
const router = new Router();
const authMiddleware = require("./../middlewares/auth-middleware");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/user/:id", authMiddleware, userController.getUserById);
router.get("/posts", authMiddleware, postConroller.getPosts);
router.get("/posts/:id", authMiddleware, postConroller.getPostsByUserId);
router.post("/create", authMiddleware, postConroller.createPost);

module.exports = router;
