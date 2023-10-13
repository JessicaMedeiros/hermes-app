import { Component, OnInit } from '@angular/core';

export interface CHAT {
  iniciado: string;
  id_chat: number;
  finalizado: string;
  ativo: string;
}

const DATA: CHAT[] = [
  { id_chat: 9, iniciado: '12/10/2023 13:15', finalizado: '', ativo: 'ativo' },
  { id_chat: 10, iniciado: '02/09/2023 02:20', finalizado: '', ativo: 'ativo' },
];

@Component({
  selector: 'app-novas-solicitacoes',
  templateUrl: './novas-solicitacoes.component.html',
  styleUrls: ['./novas-solicitacoes.component.css']
})
export class NovasSolicitacoesComponent implements OnInit {

  displayedColumns: string[] = ['id_chat', 'iniciado', 'finalizado', 'ativo', 'analisar'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
