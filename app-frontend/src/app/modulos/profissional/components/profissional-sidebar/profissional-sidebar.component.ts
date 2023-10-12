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
  admin: boolean | null;

  clickEventSubscription!: Subscription;
  clickEventSubscriptionFecharMenuMobile!: Subscription;

  panelOpenState = true;


  constructor(   public router: Router,
    private service: SharedService,) {
      this.admin = localStorage.getItem('tipo') == 'admin'? true : false;
     }

  ngOnInit(): void {
    this.clickEventSubscription = this.service.getClickEvent().subscribe((res) => {

      this.isExpanded = res;

    })

  }

  historicoOcorrencia(){
    this.router.navigate(['profissional/ocorrencias']);
  }

  inicial(){
    this.router.navigate(['profissional']);
  }

}
