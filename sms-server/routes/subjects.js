const express = require('express');
const router = express.Router();

var database = require('./database.js');
router.get('/',function(req,res,next){

    var q = `SELECT * FROM subjects`
    console.log(q);
    database.query(q,function(err,rows){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send(rows)
        }
    })

})
router.post('/addSubjects',function(req,res,next){

    var q = `INSERT into subjects (SubjectName) VALUES ('${req.body.SubjectName}')`
    console.log(q);
    database.query(q,function(err,rows,fields){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send({'rows':rows,'fields':fields})
        }
    })
})
router.put('/update/:id',function(req,res,next){

    var q = `UPDATE subjects SET SubjectName =  '${req.body.SubjectName}'
    WHERE SubjectId ='${req.params.id}'`
    console.log(q);
    database.query(q,function(err,rows,fields){
        console.log(err)
        if(err){
            Promise.resolve().then(function(){
                throw err
            }).catch(next)
        }
        else{
            res.send({'rows':rows,'fields':fields})
        }
    })
})
router.delete('/delete/:id',function(req, res, next){
	var q = `DELETE FROM subjects WHERE SubjectId = '${req.params.id}'`
	console.log(q)
	database.query(q,function(err,rows,fields){
		if (err) {
			Promise.resolve().then(function () {
				throw err;
			}).catch(next)
		}
		else{
			res.send({'rows':rows,'fields':fields});
		}
	})
})
module.exports = router;
