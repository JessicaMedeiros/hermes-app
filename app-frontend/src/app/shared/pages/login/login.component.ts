import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  spinner = false;
  formLogin!: FormGroup;
  isAdmin: any;
  hide = true;
  user: any;
  message!: any;
  isLoggedIn: boolean = false;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  REST_API!: string;
  mobile!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _location: Location,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
  ) { }



  ngOnInit(): void {
    this.spinner = true;

    console.log('location.origin', location.origin)
    console.log('this._location.origin;', this._location, window.location)

    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })


    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        this.mobile = state.matches? false : true;
      });


    this.spinner = false;
  }

  capslockOn!: boolean;
  getErrorMessage() {
    if (this.username.hasError('required') || this.password.hasError('required')) {
      return 'Campo não pode ser vazio';
    }

    return this.username.hasError('username') ? 'Not a valid email' : '';
  }

  @HostListener('window:click', ['$event']) onClick(event: any) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capslockOn = true;
    } else {
      this.capslockOn = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: any) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capslockOn = true;
    } else {
      this.capslockOn = false;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: any) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      this.capslockOn = true;
    } else {
      this.capslockOn = false;
    }
  }

  login() {
    this.spinner = true;
    const form = this.formLogin.value;

    let username = this.formLogin.value.username;
    const password = this.formLogin.value.password;
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    if (username) {
      username = username.trim();
    }


    if(username === "paciente" && password === "123456"){

      localStorage.setItem('id', '1');
      localStorage.setItem('username', username);
      localStorage.setItem('name', 'Paciente 01');
      localStorage.setItem('tipo', 'paciente');

      this.router.navigate(['paciente/home'])
    }


    this.message = "Crendeciais erradas"

  }


  moduloProfissional(){
    this.router.navigate(['login/profissional'])
  }
}
