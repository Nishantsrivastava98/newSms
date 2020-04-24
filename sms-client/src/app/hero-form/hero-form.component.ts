import { Component, OnInit } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit{
  constructor( ) { }


  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  student = {
    name: 'Nishant',
    age:20,
    email: ''
  };
 
  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() {
    alert("form Submitted");
    this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  get studentStr(){
    return JSON.stringify(this.student);
  };
  checkValue(data){
    console.log(data);
  }
}