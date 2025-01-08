import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderLayoutComponent} from './shared/header-layout/header-layout.component';
import {FormsModule} from '@angular/forms';
import {CartComponent} from './cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderLayoutComponent,
    FormsModule,
   CartComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

}
