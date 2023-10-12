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

  constructor(
    private service: SharedService,
    private router: Router) { }

  ngOnInit(): void {
  }

  clickMe() {
    this.isExpanded = !this.isExpanded;
    this.service.sendClickEvent(this.isExpanded);
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('tipo');

    this.router.navigate(['login/profissional']);
  }
}
