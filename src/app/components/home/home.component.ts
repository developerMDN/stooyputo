import { SpotyfiService } from './../service/spotyfi.service';
import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  message: string;

  constructor(private service: SpotyfiService) { }

  ngOnInit() {

    this.loading = true;

    this.service.getNewReleases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
      this.message = null;
    }, (error) => {
      this.loading = false;
      this.message = error.error.error.message;
    });
  }

}
