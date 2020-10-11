import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any = {};
  url: string;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.moviesService.getMovieByDetail(params.id).subscribe(result => {

        this.movieDetail = result;

        this.moviesService.getMovieByVideo(params.id).subscribe(result => {
          this.url = "http://youtube.com/watch?v=" + result.results[0].key;
        })
      });
    });
  }
}
