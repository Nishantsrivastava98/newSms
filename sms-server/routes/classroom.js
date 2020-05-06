const express = require('express')
const router = express.Router()

var database = require('./database.js')

router.get('/',function(req,res,next){
    var q = `SELECT * FROM classroom`
    console.log(q)
    database.query(q,function(err,rows,fields){
        if(err){
            Promise.resolve().then(function(){
                throw(err)
            }).catch(next)
        }
        else{
            res.send(rows)
        }
    })
})
router.get('/students/:id',function(req,res,next){
    var q = `SELECT * FROM student WHERE CourseId = ${req.params.id}`
    console.log(q)
    database.query(q,function(err,rows){
        if(err){
            Promise.resolve().then(function(){
                throw err;
            }).catch(next)
        }
        else{
            res.send(rows)
        }
    })
})

module.exports = router;