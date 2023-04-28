import { CabeceraComponent } from './../cabecera/cabecera.component';
import { NgModule } from '@angular/core';


import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    CabeceraComponent
  ],
  imports: [
    MoviesRoutingModule,
    CardModule,
    ButtonModule,
    CommonModule,
    TagModule,
    ProgressSpinnerModule,
    SpinnerModule,
    ToastrModule
  ],
  providers: [

  ],
})
export class MoviesModule { }
