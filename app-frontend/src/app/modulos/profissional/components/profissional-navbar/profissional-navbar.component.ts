import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-profissional-navbar',
  templateUrl: './profissional-navbar.component.html',
  styleUrls: ['./profissional-navbar.component.css']
})
export class ProfissionalNavbarComponent implements OnInit {

  isExpanded = true;
  clickEventSubscription!: PushSubscription;

  constructor( private service: SharedService, private router: Router) { }

  ngOnInit(): void {
  }

  clickMe() {

    this.isExpanded = !this.isExpanded;
    console.log('----this.isExpanded', this.isExpanded)

    this.service.sendClickEvent(this.isExpanded);
  }

  logout(){
    this.router.navigate(['login/profissional']);
  }
}
