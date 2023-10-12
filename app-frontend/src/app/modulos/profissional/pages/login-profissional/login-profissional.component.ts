import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpHeaders,  HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-login-profissional',
  templateUrl: './login-profissional.component.html',
  styleUrls: ['./login-profissional.component.css']
})
export class LoginProfissionalComponent implements OnInit {

  spinner = false;
  formLogin!: FormGroup;
  isAdmin: any;
  hide = true;
  user: any;;
  isLoggedIn: boolean = false;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  REST_API!: string;
  mobile!: boolean;
  messageError = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _location: Location,
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
    this.messageError = "";

    let username = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    if (username) {
      username = username.trim();
    }


    if((username === "profissional1" && password === "123456") || (username === "profissional2" && password === "123456")){

      var id = username === "profissional1"? '1' : '2';
      var name = username === "profissional1"? 'Profissional 01' : 'Profissional 02';

      localStorage.setItem('id', id);
      localStorage.setItem('username', username);
      localStorage.setItem('name', name);
      localStorage.setItem('tipo', 'profissional');

      this.router.navigate(['profissional/home'])
    }

    if(username === "administrador" && password === "123456"){

      localStorage.setItem('id', '1');
      localStorage.setItem('username', username);
      localStorage.setItem('name', 'Administrador');
      localStorage.setItem('tipo', 'admin');

      this.router.navigate(['profissional/home'])
    }


    this.messageError = "Crendeciais erradas"

  }


  moduloPaciente(){
    this.router.navigate(['login'])
  }
}
