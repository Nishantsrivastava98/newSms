const express = require('express')
const router = express.Router()

var database = require('./database.js');

router.get('/:id/:date',function(req,res,next){
    var q = `SELECT Attendance.AttendanceId,Attendance.Attendance, Attendance.Date, student.Id, student.Name,
     student.RollNo, student.CourseId FROM Attendance RIGHT JOIN student ON
      Attendance.StudentId = student.Id WHERE student.CourseId = '${req.params.id}' AND attendance.Date = '${req.params.date}'OR ''`
      console.log(q);
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
});



router.post('/giveAttendance/:id',function(req,res,next){

  console.log(req.body);
   var a=''; 
   for (let i = 0; i < req.body.students.length; i++) {
       a+="('" + req.body.attendanceDate + "'," + req.body.students[i].Id + "," + req.body.students[i].CourseId +","+req.body.students[i].Attendance+")"
       if(i<req.body.students.length-1){
           a+=','
       }
       
   }    
   console.log(a);
    
    var q = `Insert into attendance (Date,StudentId,CourseId,Attendance)
            VALUES ${a}`
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
});


module.exports=router;