const {loginUser, userregister} = require('../controller/usercontroller');

const express = require("express");
const router = express.Router();

router.post("/register", userregister);
router.post("/login", loginUser);

module.exports = router;