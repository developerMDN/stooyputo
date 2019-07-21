import { ActivatedRoute } from '@angular/router';
import { SpotyfiService } from './../service/spotyfi.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styles: []
})
export class TopTracksComponent {

  tracks: any[] = [];
  urlPlay = '';
  message: string;

  constructor(private spotify: SpotyfiService, private router: ActivatedRoute) {

    this.urlPlay = environment.urlPlay;
    this.router.params.subscribe(params => {
      this.getTopTrack(params.id);
    });
  }

  getTopTrack(id: string) {

    this.spotify.getTopTrack(id).subscribe(data => {
      this.tracks = data.tracks;
    }, (error) => {
      this.message = error.error.error.message;
    });
  }

}
