import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Searchmovie {

  constructor(private http: HttpClient) {}

  public search(action: any, title: string, year: number = 0): void {

    let y = year ? `&y=${year}` : '';
    this.http.get(`http://www.omdbapi.com/?apikey=b267f2ad&s=${title}${y}&plot=full`).subscribe((response: Object) => { action(response); });
    
  };

  public getMovieDetails(action: any, imdbID: string): void {

    this.http.get(`http://www.omdbapi.com/?apikey=b267f2ad&i=${imdbID}&plot=full`).subscribe((response: Object) => { action(response); });
    
  };
  
}
