const router = require('express').Router();

router.get('/', (req,res)=> {
    res.send('you are looged in , this is your profile- ' +req.user.username)
})


module.exports = router;