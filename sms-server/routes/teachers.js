const express = require('express');
const router = express.Router();

var database = require('./database.js');
router.get('/',function(req,res,next){

    var q = `SELECT * FROM teachers`
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
router.post('/addTeachers',function(req,res,next){

    var q = `INSERT into teachers (TeacherName,Degree,TeachingExperiance) VALUES ('${req.body.TeacherName}','${req.body.Degree}','${req.body.TeachingExperaince}')`
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

    var q = `UPDATE teachers SET TeacherName = '${req.body.TeacherName}',
                                Degree = '${req.body.Degree}',
                                TeachingExperiance='${req.body.TeachingExperiance}' 
             WHERE TeacherId ='${req.params.id}'`
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
	var q = `DELETE FROM teachers WHERE TeacherId = '${req.params.id}'`
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