const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");
// router modules map http requests to code aka controller functions

router.get("/new", postsCtrl.new);
router.post("/", postsCtrl.create);
router.get("/", postsCtrl.index);

module.exports = router;
