import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-paciente-navbar',
  templateUrl: './paciente-navbar.component.html',
  styleUrls: ['./paciente-navbar.component.css']
})
export class PacienteNavbarComponent implements OnInit {

  isExpanded = true;
  clickEventSubscription!: PushSubscription;

  constructor( private service: SharedService) { }

  ngOnInit(): void {
  }

  clickMe() {

    this.isExpanded = !this.isExpanded;
    console.log('----this.isExpanded', this.isExpanded)

    this.service.sendClickEvent(this.isExpanded);
  }

}
