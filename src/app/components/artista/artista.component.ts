import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyfiService } from '../service/spotyfi.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  message: string;

  constructor(private router: ActivatedRoute, private spotify: SpotyfiService) {

    this.loading = true;

    this.router.params.subscribe(params => {
      this.getArtist(params.id);
    });
  }

  getArtist(id: string) {

    this.spotify.getArtist(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
      this.message = null;
    }, error => {
      this.loading = false;
      this.message = error.error.error.message;
    });
  }

}
