import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoricoOcorrenciaService } from 'src/app/modulos/paciente/services/ocorrencia/historico-ocorrencia.service';

@Component({
  selector: 'app-informacao-ocorrencia',
  templateUrl: './informacao-ocorrencia.component.html',
  styleUrls: ['./informacao-ocorrencia.component.css']
})
export class InformacaoOcorrenciaComponent implements OnInit {

  id!: number | any;
  ocorrencia: any = [];

  constructor(private activatedRoute: ActivatedRoute, private service: HistoricoOcorrenciaService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id_ocorrencia' as any);

    this.service.buscarOcorrenciaPeloId(this.id).subscribe({
      next: (res) => {
        console.log('res', res);
        this.ocorrencia = res;
      }
    })
  }

}
