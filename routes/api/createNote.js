const router = require('express').Router();
const fs = require('fs');



  router.post('/',(req,res)=>{
    console.log(req.body)
    const userNotes = req.body;
    fs.readFile('db.json',(err,data)=>{
        if(err)throw err;
        dbData = JSON.parse(data);
        console.log(dbData);
        dbData = []
        dbData.push(userNotes);
        let number = 1;
            dbData.forEach((note,index)=>{
                note.id = number;
                number++;
                return dbData;
            });
        stringData = JSON.stringify(dbData);
        console.log(stringData);
        fs.writeFile('db.json',stringData,(err,data)=>{
            if(err)throw err;
        });
    });

    res.send('Create route');
});





module.exports = router;