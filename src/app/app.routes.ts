import { Routes } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {DetailComponent} from './detail/detail.component';

export const routes: Routes = [
  {path: '', component: CartComponent},
  {path: 'detail/:id', component: DetailComponent}
];
