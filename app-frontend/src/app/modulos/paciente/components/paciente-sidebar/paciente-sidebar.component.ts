import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-paciente-sidebar',
  templateUrl: './paciente-sidebar.component.html',
  styleUrls: ['./paciente-sidebar.component.css']
})
export class PacienteSidebarComponent implements OnInit {

  isExpanded = true;
  logado?: boolean;


  clickEventSubscription!: Subscription;
  clickEventSubscriptionFecharMenuMobile!: Subscription;

  panelOpenState = true;


  constructor(   public router: Router,
    private service: SharedService,) { }

  ngOnInit(): void {
    this.clickEventSubscription = this.service.getClickEvent().subscribe((res) => {

      this.isExpanded = res;

    })

  }


  criarOcorrencia() {
    this.router.navigate(['paciente/ocorrencia/nova']);
  }

  historicoOcorrencia(){
    this.router.navigate(['paciente/ocorrencia/historico']);
  }

  inicial(){
    this.router.navigate(['paciente']);
  }

}
