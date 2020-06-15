const express = require('express');
const router = express.Router();

var database = require('./database.js');

router.get('/',function(req,res,next){
    
    var q = `SELECT teachers.TeacherName , teachers.TeacherId , subjects.SubjectName,Subjects.SubjectId,teacherconfiguration.ConfigurationId,teacherconfiguration.CreatedDate FROM teachers 
             RIGHT JOIN teacherconfiguration ON
             teachers.TeacherId=teacherConfiguration.TeacherId
             LEFT JOIN subjects ON
             subjects.SubjectId = teacherconfiguration.SubjectId;`
    console.log(q)
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
router.post('/insert',function(req,res,next){
    var q =`INSERT into teacherconfiguration(SubjectId,TeacherId) VALUES('${req.body.SubjectId}','${req.body.TeacherId}');`
    console.log(q)
    database.query(q,function(err,rows){
        console.log(err)
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
router.put('/update/:id',function(req,res,next){
    var q = `UPDATE teacherconfiguration SET TeacherId = '${req.body.TeacherId}',
                                             SubjectId = '${req.body.SubjectId}'
                                             Where ConfigurationId = '${req.params.id}';`
    console.log(q);
    database.query(q,function(err,rows){
        console.log(err)
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
router.delete('/delete/:id',function(req,res,next){
    var q = `DELETE FROM teacherconfiguration WHERE ConfigurationId = '${req.params.id}'`
    console.log(q);
      database.query(q,function(err,rows){
          console.log(err)
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

