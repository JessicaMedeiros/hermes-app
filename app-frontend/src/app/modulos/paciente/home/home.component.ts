import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome_paciente: string | null = ""

  constructor() {
    this.nome_paciente = localStorage.getItem('name')
  }

  ngOnInit(): void {
  }

}
