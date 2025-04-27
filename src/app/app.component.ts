import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesComponent } from "./components/features/features.component";
import { HeaderComponent } from "./components/header/header.component";
import { VinylListComponent } from "./components/vinyl-list/vinyl-list.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { CdListComponent } from "./components/cd-list/cd-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { VinylComponent } from "./components/vinyl/vinyl.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeaturesComponent, HeaderComponent, VinylListComponent, WelcomeComponent, CdListComponent, FooterComponent, VinylComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-shop';

  albumTitle: string = '';

  onSelected(albumTitle: string) {
    this.albumTitle = albumTitle;
  }
}
