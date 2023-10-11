import { Component, OnInit } from '@angular/core';
import { BemEstarService } from '../../../services/bem-estar/bem-estar.service';

@Component({
  selector: 'app-bem-estar',
  templateUrl: './bem-estar.component.html',
  styleUrls: ['./bem-estar.component.css']
})
export class BemEstarComponent implements OnInit {


  constructor(private service: BemEstarService) { }

  ngOnInit(): void {
  }

  nota!: number;
  observacao!: string;

  nivel(nota: number){
    this.nota = nota;
    console.log('escala', nota)
  }

  salvar(){

    if(!this.nota){
      return
    }

    const bemestar = {id_paciente: 1, nota: this.nota, observacao: this.observacao}

    this.service.salvarBemEstar(bemestar).subscribe({
      next: (res) => {
        console.log('res', res)
      },
      error: (error) => {
        console.log('error', error)
      }
    })
  }
}
