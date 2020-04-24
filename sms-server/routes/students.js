const express = require('express');
const router = express.Router();

var database = require('./database.js')
router.get('/',function(req, res, next){

	var q = 'SELECT * FROM student';

	database.query(q, function(err,rows,fields){
		console.log(err)
		if (err) {
			Promise.resolve().then(function () {
				throw err;
			}).catch(next)
		}
		else{
			res.send(rows)
		}
	})
})
router.get('/details/:id',function(req,res, next){
	var q = `SELECT * FROM student WHERE Id = '${req.params.id}'`
	database.query(q, function(err,rows,fields){
		if (err) {
			Promise.resolve().then(function () {
				throw err;
			}).catch(next)
		}
		else{
			res.send(rows.length >0 ? rows[0]: {});
		}
		
	})
})
router.post('/insert',function(req, res, next){
	var q = `INSERT INTO student(Name,Department,RollNo,Year,Semester,DateOfAdmission) 
			VALUES('${req.body.Name}','${req.body.Department}','${req.body.RollNo}',
			'${req.body.Year}','${req.body.Semester}','${req.body.DateOfAdmission}');
			SELECT LAST_INSERT_ID();`
			console.log('===>>',q);
	database.query(q, function(err,rows,fields){
		if (err) {
			Promise.resolve().then(function () {
				throw err;
			}).catch(next)
		}
		else{
			res.send({'rows':rows,'fields':fields});
		}
		
	});
});
router.put('/update/:id',function(req,res, next){
	console.log(JSON.stringify(req.body));
	var q = `UPDATE student SET Name = '${req.body.Name}', 
			Year = '${req.body.Year}',  Department = '${req.body.Department}', 
			Semester = '${req.body.Semester}', 
			DateOfAdmission = '${req.body.DateOfAdmission}' 
			WHERE Id ='${req.params.id}'`;

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
router.delete('/delete/:id',function(req, res, next){
	var q = `DELETE FROM student WHERE Id = '${req.params.id}'`
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
router.get('/last/:id',function(req,res){
	var q = `SELECT * FROM student where Id = SELECT'${ LAST_INSERT_ID()}'` ;
	database.query(q, function(err,rows,fields){
		if (err) throw err;
		res.send(rows)
	})
})

module.exports = router;