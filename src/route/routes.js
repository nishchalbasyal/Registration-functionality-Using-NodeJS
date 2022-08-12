const express = require('express');
const router = express.Router();
const {getData} = require("../controller/userController");

router.route('/').post(getData);

module.exports = router;

