const router = require('express').Router();
const fs = require('fs');


router.get('/:id',(req,res)=>{
    var noteId = req.params.id - 1;
    console.log(`NoteId: ${noteId}`)
    fs.readFile('db.json',(err,data)=>{
        if(err)throw err;
        dbData=JSON.parse(data);
        var noteSel = dbData[noteId];
        console.log(`Note Selected: ${noteSel.chatMsg}`)
        res.send(noteSel);
    });
});


module.exports = router;