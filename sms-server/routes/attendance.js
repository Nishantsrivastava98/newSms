const express = require('express')
const router = express.Router()

var database = require('./database.js');

router.get('/:id/:date', function (req, res, next) {
    // var q = `SELECT Attendance.AttendanceId,Attendance.Attendance, Attendance.Date, student.Id, student.Name,
    //  student.RollNo, student.CourseId FROM Attendance RIGHT JOIN student ON
    //   Attendance.StudentId = student.Id WHERE student.CourseId = '${req.params.id}'AND attendance.Date = '${req.params.date}'`;
    var CourseId = req.params.id;
    var date = req.params.date;
    var q = `SELECT * FROM student WHERE CourseId = '${CourseId}'`

    console.log(q);
    database.query(q, function (err, rows) {
        if (err) {
            Promise.resolve().then(function () {
                throw err;
            }).catch(next)
        }
        else {
            var students = rows;




            var q2 = `SELECT * FROM attendance WHERE CourseId = '${CourseId}' AND Date = '${req.params.date}'`;
            console.log(q);
            database.query(q2, function (err, rows1) {
                if (err) {
                    Promise.resolve().then(function () {
                        throw err;
                    }).catch(next)
                }
                else {
                    var attendance = rows1


                    var attendanceList = [];
                    for (let i = 0; i < students.length; i++) {
                        var std = {
                            StudentId: students[i].Id,

                            CourseId: students[i].CourseId,

                            RollNumber: students[i].RollNo,

                            Name: students[i].Name,

                            AttendanceId: null,

                            DateOfAttendance: null,

                            Attendance: false
                        };

                        for (let j = 0; j < attendance.length; j++) {
                            if (students[i].Id === attendance[j].StudentId) {

                                std.Attendance = attendance[j].Attendance ? true : false;
                                std.DateOfAttendance = attendance[j].Date;
                                std.AttendanceId = attendance[j].AttendanceId;
                            }


                        }
                        attendanceList.push(std);

                    }
                    res.send(attendanceList);
                }
            })


        }
    })
});



router.post('/giveAttendance/:id', function (req, res, next) {

    


    var a = '';
    var b ='';
    for (let i = 0; i < req.body.students.length; i++) {
        if (req.body.students[i].AttendanceId == null) {
            a += "('" + req.body.attendanceDate + "'," + req.body.students[i].StudentId + "," + req.body.students[i].CourseId + "," + req.body.students[i].Attendance + ")"
            if (i < req.body.students.length - 1) {
                a += ','
            }
        }
        else {
           b += `UPDATE attendance SET Attendance = ${req.body.students[i].Attendance }
            WHERE AttendanceId = ${req.body.students[i].AttendanceId};`
        }

    }

    
    q = '';
    if(a){
        q = `Insert into attendance (Date,StudentId,CourseId,Attendance)
        VALUES ${a};`
    }
    if(b){
        q = q + b;
    }
    
    console.log(q)
    database.query(q, function (err, rows) {
        if (err) {
            Promise.resolve().then(function () {
                throw err;
            }).catch(next)
        }
        else {
            res.send(rows)
        }
    })
});


module.exports = router;