import { Component, OnInit } from '@angular/core';
import { HistoricoOcorrenciaService } from 'src/app/modulos/paciente/services/ocorrencia/historico-ocorrencia.service';

@Component({
  selector: 'app-historico-ocorrencia',
  templateUrl: './historico-ocorrencia.component.html',
  styleUrls: ['./historico-ocorrencia.component.css']
})
export class HistoricoOcorrenciaComponent implements OnInit {

  dados: any = [];
  loading = true;
  colunas = ['nota', 'data_ocorrencia', 'hora_ocorrencia', 'sintomas', 'data', 'ativa', 'analisar']

  constructor(private service: HistoricoOcorrenciaService) { }

  ngOnInit(): void {
    this.service.historicoDeOcorrencias(1).subscribe({
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
