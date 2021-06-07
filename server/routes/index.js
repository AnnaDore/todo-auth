const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
 // res.render('index');
 res.send("yooo")
});

module.exports = router;
