const router = require("express").Router();
const postRoutes = require("../api/posts");

// Book routes
router.use("/post", postRoutes);

module.exports = router;
