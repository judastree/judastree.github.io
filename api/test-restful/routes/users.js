var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var users = {
        "users": [
            {
                "name": "张三",
                "sex": "男",
                "age": "27"
            },
            {
                "name": "李四",
                "sex": "男",
                "age": "26"
            },
            {
                "name": "王红",
                "sex": "女",
                "age": "23"
            }]
    };
    res.send('respond with a resource');
});

module.exports = router;
