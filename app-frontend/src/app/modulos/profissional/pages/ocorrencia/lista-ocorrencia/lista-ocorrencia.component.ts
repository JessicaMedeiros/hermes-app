import { Component, OnInit } from '@angular/core';
import { GerenciarOcorrenciaService } from '../../../services/gerenciar-ocorrencia.service';

@Component({
  selector: 'app-lista-ocorrencia',
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.css']
})
export class ListaOcorrenciaComponent implements OnInit {

  dados: any = [];
  loading = true;
  colunas = ['nota', 'data_ocorrencia', 'hora_ocorrencia', 'sintomas', 'data', 'ativa', 'analisar']

  constructor(private service: GerenciarOcorrenciaService) { }

  ngOnInit(): void {
    this.service.listaOcorrencia().subscribe({
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
