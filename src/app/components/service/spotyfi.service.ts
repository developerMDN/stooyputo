import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  /*
  con este atributo no es necesario crear la referencia en el app.module.
  */
  providedIn: 'root'
})
export class SpotyfiService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      Authorization: environment.token
    });
  }
  /*
  en lugar de un magic string debemos usar un enum.
   */
  getQuery(op: string) {
    switch (op) {
      case 'release':
        return `${environment.urlSpotify}${environment.getRelease}`;
      case 'artists':
        return `${environment.urlSpotify}${environment.getArtists}`;
      case 'artist':
        return `${environment.urlSpotify}${environment.getArtist}`;
      case 'topTracks':
        return `${environment.urlSpotify}${environment.getTopTracks}`;
      default:
        break;
    }
  }

  getNewReleases() {

    return this.http.get(
      this.getQuery('release'), { headers: this.headers }
    )
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }

  getArtists(termino: string) {

    const getRequest = this.getQuery('artists').replace('termino', termino);

    return this.http.get(getRequest, { headers: this.headers })
      .pipe(map((data: any) => {
        return data.artists.items;
      }));
  }

  getArtist(id: string) {

    const getRequest = this.getQuery('artist').replace('id', id);

    console.log('getRequest: ', getRequest);

    return this.http.get(getRequest, { headers: this.headers })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getTopTrack(id: string) {

    const getRequest = this.getQuery('topTracks').replace('id', id);

    return this.http.get(getRequest, { headers: this.headers })
      .pipe(map((data: any) => {
        return data;
      }));

  }

}
