import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-profissional',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeProssionalComponent implements OnInit {

  name_profissional: string | null;

  constructor() {
    this.name_profissional = localStorage.getItem('name');
   }

  ngOnInit(): void {
  }

}
