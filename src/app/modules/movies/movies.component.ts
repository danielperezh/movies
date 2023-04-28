import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModel } from 'src/app/model/movies.model';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ContantUri } from 'src/app/utils/contantUri';
import { MovieModel } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent extends BaseComponent<MoviesModel.MoviesResponse> implements OnInit{

  movies: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  imgBaseUrl = ContantUri.pathImg;
  override set setResponseService(val: MoviesModel.MoviesResponse){
    console.log(val);
    this.movies = val;
  }

  constructor(
    private readonly router: Router,
    protected override apiService: ApiService<MoviesModel.MoviesResponse>
  ){
    super(apiService);
  }

  override ngOnInit(): void {
    this.paramsConfig.url = ContantUri.popularMovies;
    this.paramsConfig.params.api_key = ContantUri.apiKey;
    this.getRequest();
  }

  seeDetail(id: number){
    this.router.navigate([`populares/detalle/${id}`]);
  }
}
