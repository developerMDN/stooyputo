import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../service/spotyfi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;
  message: string;

  constructor(private service: SpotyfiService) { }

  ngOnInit() {
  }

  buscarArtista(value: string) {
    this.loading = true;
    this.service.getArtists(value)
      .subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
        this.message = null;
      }, error => {
        this.loading = false;
        this.message = error.error.error.message;
      });
  }

}
