// import { StorageService } from './../../services/storage.service';
import { ContantUri } from './../../utils/contantUri';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { LoginNameModel } from 'src/app/model/login.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent<LoginNameModel.Login> implements OnInit {

  // value!: string;
  formLogin: FormGroup = new FormGroup({});
  isLoginValid = false;


  override set setResponseService({request_token}: LoginNameModel.Login){
    sessionStorage.setItem('requestToken', request_token);
    sessionStorage.setItem('loginFag', 'true');

    this.isLoginValid = true;
    this.router.navigate(['populares']);

  }

  constructor(
    private fb: FormBuilder,
    protected override readonly apiService: ApiService<LoginNameModel.Login>,
    private router: Router,
    public miMensaje: ToastrService
  ){
    super(apiService);
  }

  override ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }


  login(){
    if(this.isFormInvalid(this.formLogin)) return;

    const { username, password} = this.formLogin.value;

    const body = {
      username,
      password,
      request_token: sessionStorage.getItem('requestToken')
    }

    this.paramsConfig.url = ContantUri.validateWithlogin;
    this.paramsConfig.params = {api_key: ContantUri.apiKey};
    this.paramsConfig.body = body;

    this.postRequest().subscribe({
      next: response => {
        if(response.success) {
          this.miMensaje.success('Inicio de sesión exitoso.');
        } else {
          this.miMensaje.error('Inicio de sesión inválido.');
        }
      },
      error: () => {
        this.miMensaje.error('Inicio de sesión inválido.');
      }
    });
  }

}
