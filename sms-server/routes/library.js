const express = require('express');
const router = express.Router();

var database = require('./database.js')

router.get('/',function(req,res,next){
    var q = 'SELECT * FROM library';

    database.query(q,function(err,rows,fields){
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
 
router.post('/insert',function(req,res,next){
    var q = `INSERT INTO library(BookName,Author,NumberOfBooks)
            VALUES('${req.body.BookName}','${req.body.Author}','${req.body.NumberOfBooks}');
            SELECT LAST_INSERT_ID();`
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
router.put('/update/:id',function(req,res,next){
    var q = `UPDATE library SET BookName = '${req.body.BookName}',
                                Author = '${req.body.Author}', 
                                NumberOfBooks = '${req.body.NumberOfBooks}'
                                WHERE BookId = '${req.params.id}'`
    
    database.query(q,function(err,rows,fields) {
        if(err){
            Promise.resolve().then(function(){
                throw err;
            }).catch(next)
        }
        else{
            res.send({'rows':rows,'fields':fields});
        }
        
    })
    
})
router.delete('/delete/:id',function(req,res,next){
    var q = `DELETE from library WHERE BookId = '${req.params.id}'`
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
router.get('/details/:id',function(req,res, next){
	var q = `SELECT * FROM library WHERE BookId = '${req.params.id}'`
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
router.get('/search/:query',function(req,res,next){
    var q = `SELECT * FROM library WHERE BookName LIKE '%${req.params.query}%' OR Author LIKE '%${req.params.query}%' `
    database.query(q, function(err,rows,fields){
		if (err) {
			Promise.resolve().then(function () {
				throw err;
			}).catch(next)
		}
		else{
			res.send(rows);
		}
		
	})
})
module.exports = router