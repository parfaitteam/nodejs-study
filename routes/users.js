var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('user', {
        title: 'User Information',
        user:{
            userID: '1'
        }
    });
});
router.post('/Register', function(req, res, next) {
    res.render('register', {
        title: 'User Register',
        user:{
            userName: req.body.user_name,
            userEmail: req.body.user_email
        }
    });
});

router.get('/Register', function(req, res, next){

})

router.get('/Profile/:id', function(req, res, next){
    console.log(res.body);
    let userID = req.params.id;
    res.send("userID :" + userID + " Profile");
});
module.exports = router;
