import { Component, OnInit } from '@angular/core';

export interface CHAT {
  iniciado: string;
  id_chat: number;
  ativo: string;
}

const DATA: CHAT[] = [
  { id_chat: 5, iniciado: '12/10/2023 13:15',  ativo: 'ativo' },
  { id_chat: 4, iniciado: '02/09/2023 02:20', ativo: 'ativo' },
  { id_chat: 3, iniciado: '23/08/2023 02:20',  ativo: 'ativo' },
  { id_chat: 2, iniciado: '11/02/2022 02:21',  ativo: 'ativo' },
  { id_chat: 1, iniciado: '01/02/2020 02:20', ativo: 'ativo' },
];

@Component({
  selector: 'app-chat-em-andamento',
  templateUrl: './chat-em-andamento.component.html',
  styleUrls: ['./chat-em-andamento.component.css']
})
export class ChatEmAndamentoComponent implements OnInit {

  displayedColumns: string[] = ['id_chat', 'iniciado', 'ativo', 'analisar'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
