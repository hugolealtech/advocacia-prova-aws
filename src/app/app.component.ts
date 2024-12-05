import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component'
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [
  
    AboutUsComponent, 
    CarousselComponent, 
    ContactFormComponent, 
    HeaderComponent, 
    MatSlideToggleModule,
    HomeComponent,
    FooterComponent,
    CardsComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prova-advocacia-aws';
}
