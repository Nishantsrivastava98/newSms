const express = require('express');
const router = express.Router();

var database = require('./database.js')

router.put('/update/:id',function(req, res, next){
    var q = `UPDATE librarycard SET ReturnDate = '${req.body.ReturnDate}'
            WHERE IssueId = '${req.params.id}';`
        database.query(q,function(err, rows, fields){
                if(err){
                    Promise.resolve().then(function(){
                        throw(err)
                    }).catch(next)
                }
                else{
                    res.send({'rows' : rows, 'fields' : fields});
                }
        })
})
router.post('/insert',function(req, res, next){
    var q = `INSERT into librarycard (StudentId,BookId)
            VALUES (${req.body.StudentId},${req.body.BookId});
            SELECT LAST_INSERT_ID();`
            console.log(q);
    database.query(q,function(err,rows,fields){
        if(err){
            Promise.resolve().then(function(){
                throw(err)
            }).catch(next)
        }
        else{
            res.send({'rows':rows,'fields':fields});
        }
    });
});
module.exports = router;