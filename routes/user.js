var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.post('/', function (req, res, next) {
	var user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password,
		email: req.body.email
	})
});


module.exports = router;