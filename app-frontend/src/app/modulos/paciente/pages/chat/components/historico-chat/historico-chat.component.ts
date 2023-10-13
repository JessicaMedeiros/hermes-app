import { Component, OnInit } from '@angular/core';

export interface CHAT {
  iniciado: string;
  id_chat: number;
  finalizado: string;
  ativo: string;
}

const DATA: CHAT[] = [
  { id_chat: 5, iniciado: '12/10/2023 13:15', finalizado: '12/10/2023 15:24', ativo: 'ativo' },
  { id_chat: 4, iniciado: '02/09/2023 02:20', finalizado: '02/09/2020 06:44', ativo: 'encerrado' },
  { id_chat: 3, iniciado: '23/08/2023 02:20', finalizado: '23/08/2023 04:24', ativo: 'encerrado' },
  { id_chat: 2, iniciado: '11/02/2022 02:21', finalizado: '11/02/2022 02:25', ativo: 'encerrado' },
  { id_chat: 1, iniciado: '01/02/2020 02:20', finalizado: '01/02/2020 05:24', ativo: 'encerrado' },
];

@Component({
  selector: 'app-historico-chat',
  templateUrl: './historico-chat.component.html',
  styleUrls: ['./historico-chat.component.css']
})
export class HistoricoChatComponent implements OnInit {

  displayedColumns: string[] = ['id_chat', 'iniciado', 'finalizado', 'ativo', 'analisar'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
