const express = require('express');
const router = express.Router();

router.get('/estudantes',(req,res)=>{
    res.send('lista de estudantes');
})


module.exports = router;