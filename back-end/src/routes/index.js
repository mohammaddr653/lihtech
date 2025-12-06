//managing all routes
const express = require("express");
const router = express.Router();
const homeRouter = require("./home");

const error = require("./../middlewares/error");

router.use("/", homeRouter);

router.use(error);

module.exports = router;
