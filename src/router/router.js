const express = require("express");
const router = express.Router();
const api = require("../api/post");
const userApi = require("../api/userApi");
const mailApi =  require("../api/mailApi");

router.post("/createPost", api.createPost);
router.get("/getPosts", api.getPosts);
// router.get("/getType", api.getType);
// router.get("/getContent/:topic", api.getContent);
router.get("/getPostForUpdate/:topicId", api.getPost);
router.get("/getContentByTitle/:title", api.getContentByTitle);
router.put("/updatePost/:topicId", api.updatePost);
router.post("/sendMessage", mailApi.sendMessage);
router.post("/signup", userApi.signup);
router.post("/login", userApi.login);
router.post("/subscribe", userApi.login);

module.exports = router;
