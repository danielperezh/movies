const baseUrl = 'https://api.themoviedb.org/3';
export class ContantUri {
  public static readonly apiKey = 'd230a65d7f754f2d7b897115d2bdde6c';
  public static readonly validateWithlogin = baseUrl + '/authentication/token/validate_with_login';
  public static readonly tokenNew = baseUrl + '/authentication/token/new';
  public static readonly popularMovies = baseUrl + '/movie/popular';
  public static readonly pathImg =  'https://image.tmdb.org/t/p/original';
  public static readonly movieDetail = baseUrl + '/movie';

}
