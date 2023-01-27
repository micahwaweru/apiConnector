const router = require('express').Router();
const fs = require('fs');


  router.get('/',(req,res)=>{
    fs.readFile('db.json',(err,data)=>{
        if(err)throw err;
        dbData=JSON.parse(data);
        //console.log(dbData)
        res.send(dbData);
    });
});

module.exports = router;