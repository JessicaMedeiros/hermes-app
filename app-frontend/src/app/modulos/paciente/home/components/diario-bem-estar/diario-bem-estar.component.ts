import { Component, OnInit } from '@angular/core';
import { BemEstarService } from '../../../services/bem-estar/bem-estar.service';

@Component({
  selector: 'app-diario-bem-estar',
  templateUrl: './diario-bem-estar.component.html',
  styleUrls: ['./diario-bem-estar.component.css']
})
export class DiarioBemEstarComponent implements OnInit {

  dados: any = [];
  loading = true;
  colunas = ['nota', 'data', 'observacao']

  constructor(private service: BemEstarService) { }

  ngOnInit(): void {
    this.service.historicoDeBemEstar(1).subscribe({
      next: (res) => {
        console.log(res)
        this.dados = res;
        this.loading = false;
      }, error: (error) => {
        console.log('error', error)
      }
    })
  }

}
