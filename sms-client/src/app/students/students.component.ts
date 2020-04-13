import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../hero';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  heroes : Hero[];
	private heroesUrl = '/api/heroes';



  constructor( private http : HttpClient) { }

/** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}
  ngOnInit(): void {
  	 this.getHeroes()
  	 .subscribe(h => this.heroes = h)


  }

}
