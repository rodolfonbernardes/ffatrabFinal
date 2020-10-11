import { Component, OnInit } from '@angular/core';
import {
  MoviesService,
  IMoviesResult,
  IMovieItem,
} from '../../services/movies.service';
import { MoviesStoreService } from '../../store/movies/movies-store.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  originalMovies: Array<IMovieItem>;
  moviesFilter = '';
  carregou: boolean = false;

  constructor(
    public moviesStore: MoviesStoreService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.getPopular().subscribe((moviesList: IMoviesResult) => {
      console.log(moviesList);
      this.moviesStore.setMovies(moviesList.results);
      this.originalMovies = moviesList.results;
      this.carregou = true;
      console.log(this.carregou);
    });
  }

  onMoviesFilter(valueFilter: string): void {
    this.moviesStore.setMovies(
      this.originalMovies.filter((m) =>
        m.title.toLowerCase().includes(valueFilter.toLowerCase())
      )
    );
  }
}
