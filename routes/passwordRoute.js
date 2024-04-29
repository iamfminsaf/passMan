const Router = require("express").Router();
const {
  getPasswords,
  newPassword,
  updatePassword,
  deletePassword,
} = require("../controllers/passwordController");

Router.route("/").get(getPasswords);
Router.route("/").post(newPassword);
Router.route("/:id").put(updatePassword);
Router.route("/:id").delete(deletePassword);

module.exports = Router;
