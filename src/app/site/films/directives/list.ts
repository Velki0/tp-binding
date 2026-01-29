import { Directive, Input, ElementRef } from '@angular/core';
import { Searchmovie } from '../services/searchmovie';

@Directive({
  selector: '[movieList]',
})
export class List {

  constructor(private el: ElementRef, private searchMovie: Searchmovie) { }

  @Input()
  public set movieList(data: any) {

    if (data.Search && data.Search.length > 0) {
      // Initialise un tableau pour stocker les détails des films
      let moviesWithDetails: any[] = [];
      let processedMovies = 0;

      // Pour chaque film, récupère ses détails
      data.Search.forEach((movie: any) => {
        this.searchMovie.getMovieDetails((details: any) => {
          moviesWithDetails.push(details);
          processedMovies++;

          // Quand tous les films ont été traités, affiche la liste
          if (processedMovies === data.Search.length) {
            this.renderMovieList(moviesWithDetails);
          }
        }, movie.imdbID);
      });
    } else {
      // Si aucun résultat ou erreur
      this.el.nativeElement.innerHTML = `<p>Aucun film trouvé.</p>`;
    }

  };

  private renderMovieList(movies: any[]): void {
    let temp = '<div class="movie-list-container">';
    movies.forEach((movie: any) => {
      temp += `
      <div class="movie-card">
        <h3>${movie.Title} (${movie.Year})</h3>
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Pas+d\'affiche'}"
             alt="Affiche de ${movie.Title}"
             class="movie-poster">
        <div class="movie-details">
          <p><strong>Réalisateur :</strong> ${movie.Director || 'Inconnu'}</p>
          <p><strong>Acteurs :</strong> ${movie.Actors || 'Inconnu'}</p>
          <p><strong>Genre :</strong> ${movie.Genre || 'Inconnu'}</p>
          <p><strong>Note :</strong> ${movie.imdbRating ? movie.imdbRating + '/10' : 'Non disponible'}</p>
          <p class="movie-plot"><strong>Résumé :</strong> ${movie.Plot || 'Non disponible'}</p>
        </div>
      </div>
    `;
    });
    temp += '</div>';
    this.el.nativeElement.innerHTML = temp;
  };


}
