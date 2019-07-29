import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { IMovie } from './movie';
import { MovieType } from './movie-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  // //private _url: string = "http://www.omdbapi.com/?i=tt3896198&apikey=*took-that-out*";
  // constructor(private http: HttpClient) {}
  
  // getMovies(): Observable<IMovie[]> {
  //   return this.http.get<MovieType[]>(this._url);
  // }
}
