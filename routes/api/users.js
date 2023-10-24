const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedin = require("../../config/ensureLoggedin");

router.get("/check-token", ensureLoggedin, usersCtrl.checkToken);
//Post /api/users
router.post("/", usersCtrl.create);

//POST /api/users/login
router.post("/login", usersCtrl.login);

module.exports = router;
