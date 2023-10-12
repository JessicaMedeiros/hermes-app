import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profissional-sidebar',
  templateUrl: './profissional-sidebar.component.html',
  styleUrls: ['./profissional-sidebar.component.css']
})
export class ProfissionalSidebarComponent implements OnInit {


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

  historicoOcorrencia(){
    this.router.navigate(['paciente/ocorrencia/historico']);
  }

  inicial(){
    this.router.navigate(['profissional']);
  }

  diarioBemEstar(){
    this.router.navigate(['paciente/bem-estar/diario']);
  }

  criarNovoChat(){
    this.router.navigate(['paciente/chat/novo']);
  }

  historicoChat(){
    this.router.navigate(['paciente/chat/historico']);
  }

  inicialEducativo(){
    this.router.navigate(['paciente/educativo']);
  }

  educativoVideos(){
    this.router.navigate(['paciente/educativo/lista-videos']);
  }
  educativoArtigos(){
    this.router.navigate(['paciente/educativo/lista-artigos']);
  }
}
