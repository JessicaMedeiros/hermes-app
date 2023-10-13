import { Component, OnInit } from '@angular/core';

export interface CHAT {
  iniciado: string;
  id_chat: number;
  finalizado: string;
  ativo: string;
}

const DATA: CHAT[] = [
  { id_chat: 15, iniciado: '12/10/2023 13:15', finalizado: '12/10/2023 15:24', ativo: 'encerrado' },
  { id_chat: 14, iniciado: '02/09/2023 02:20', finalizado: '02/09/2020 06:44', ativo: 'encerrado' },
  { id_chat: 10, iniciado: '23/08/2023 02:20', finalizado: '23/08/2023 04:24', ativo: 'encerrado' },
  { id_chat: 7, iniciado: '11/02/2022 02:21', finalizado: '11/02/2022 02:25', ativo: 'encerrado' },
  { id_chat: 8, iniciado: '01/02/2020 02:20', finalizado: '01/02/2020 05:24', ativo: 'encerrado' },
  { id_chat: 9, iniciado: '12/10/2023 13:15', finalizado: '01/02/2020 05:24', ativo: 'encerrado' },
  { id_chat: 10, iniciado: '02/09/2023 02:20', finalizado: '02/09/2020 06:44', ativo: 'encerrado' },
];

@Component({
  selector: 'app-chat-encerrado',
  templateUrl: './chat-encerrado.component.html',
  styleUrls: ['./chat-encerrado.component.css']
})
export class ChatEncerradoComponent implements OnInit {

  displayedColumns: string[] = ['id_chat', 'iniciado', 'finalizado', 'ativo', 'analisar'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
