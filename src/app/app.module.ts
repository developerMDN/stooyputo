import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';

// Shared Components:
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AlertErrorComponent } from './components/shared/alert-error/alert-error.component';

// Routes:
import { ROUTES } from './app.route';
import { RouterModule } from '@angular/router';

// Services:
import { SpotyfiService } from './components/service/spotyfi.service';

// Pipes:
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    TopTracksComponent,
    DomseguroPipe,
    AlertErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [
    SpotyfiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
