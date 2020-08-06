import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {LojasComponent} from './lojas/lojas.component'
import {LojaDetailComponent} from './loja-detail/loja-detail.component'
import {MenuComponent} from './loja-detail/menu/menu.component'
import {ReviewsComponent} from './loja-detail/reviews/reviews.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {NotFoundComponent} from './not-found/not-found.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lojas', component: LojasComponent},
  {path: 'lojas/:id', component: LojaDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent}
]
