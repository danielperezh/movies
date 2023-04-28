import { Component } from '@angular/core';
import { spinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: '<div class="overlay" *ngIf="isLoading$ | async" ><div class="lds-hourglass"></div></div>',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {

  isLoading$ = this.spinnerSvx.isLoading$;
  constructor(
    private spinnerSvx: spinnerService
  ){

  }

}
