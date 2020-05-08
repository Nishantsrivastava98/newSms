import { Injectable } from '@angular/core';
import { Observable }from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  attendanceUrl = '/api/attendance';
  getStudentAttendance(id,date) : Observable<any>{
    const url = `${this.attendanceUrl}/${id}/${date}`
    return this.http.get(url)
  }
  giveStudentAttendance(id,attendance) : Observable<any>{
    const url = `${this.attendanceUrl}/giveAttendance/${id}`
    return this.http.post(url,attendance)
  }

  constructor(private http : HttpClient) { }
}
