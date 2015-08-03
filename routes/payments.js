var express = require('express');
var router = express.Router();

/* POST payment listing. */
// router.nofic('/payments/:id', function(req, res) {
//   res.send('respond with a resource');
// });

router.notification = function(res, req){
	console.log(req.body);
	res.status(200);
	res.send("payment response");
}

module.exports = router;
