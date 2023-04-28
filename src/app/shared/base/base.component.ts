import { Observable, catchError } from 'rxjs';
import { ApiNameSpace } from 'src/app/model/api.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent<T extends any> implements OnInit {

  loading = true;
  paramsConfig: ApiNameSpace.Params = {
    url: '',
    params: {},
    body: {}

  }
  private _responseService: any;
  public get getResponseService(): any {
    return this._responseService;
  }
  public set setResponseService(value: any) {
    this._responseService = value;
  }
  constructor(
    protected readonly apiService: ApiService<T>
  ){
  }

  ngOnInit(): void {

  }

  getRequest(): void{

    this.apiService.getService(this.paramsConfig).subscribe({
      next: (response: any) => {
        this.setResponseService = response;
        this.loading = false;
      },
      error: () => {this.loading = false},
      complete: () => {}
    })
  }

  postRequest(): Observable<any> {
    return this.apiService.postService(this.paramsConfig).pipe(
      tap(response => {
        this.setResponseService = response;
        this.loading = false;
      }),
      catchError(error => {
        this.loading = false;
        throw error;
      })
    );
  }



  isFormInvalid(form: FormGroup): boolean{
    if (form.invalid){
      form.markAllAsTouched();
    for (const key in form.controls){
      form.controls[key].markAsDirty();
    }
    return true;
    }
    return false;
  }


}
