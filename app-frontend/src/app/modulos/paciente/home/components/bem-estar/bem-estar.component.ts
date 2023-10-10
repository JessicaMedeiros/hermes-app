import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-estar',
  templateUrl: './bem-estar.component.html',
  styleUrls: ['./bem-estar.component.css']
})
export class BemEstarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  nota!: number;
  observacao!: string;

  nivel(nota: number){
    this.nota = nota;
    console.log('escala', nota)
  }

}
