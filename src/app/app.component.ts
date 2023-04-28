import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ContantUri } from './utils/contantUri';
import { BaseComponent } from './shared/base/base.component';
import { LoginNameModel } from './model/login.model';
// import { StorageService } from './services/storage.service';
import { StorageNameSpace } from './model/storage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent<LoginNameModel.Login>{

  override set setResponseService({request_token}: LoginNameModel.Login){
    sessionStorage.setItem('requestToken', request_token);
    // this.storageService.setJsonValue(StorageNameSpace.Storage.RequestToken, request_token);

  }
  constructor(
    protected override readonly apiService: ApiService<LoginNameModel.Login>,
    // private readonly storageService: StorageService
  ){

    super(apiService);
    this.paramsConfig.url = ContantUri.tokenNew;
    this.paramsConfig.params.api_key = ContantUri.apiKey;
    this.getRequest();
  }
  title = 'movies';
}
