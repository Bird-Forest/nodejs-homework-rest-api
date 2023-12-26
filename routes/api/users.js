const express = require("express");

const { validateBody, authenticate } = require("../../middleware");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/authUser");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/:_id/subscription",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.updateStatusUser
);

module.exports = router;