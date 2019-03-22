import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistorysComponent} from './historys/historys.component';
import {ProfileComponent} from './profile/profile.component';
import {OrdersComponent} from './orders/orders.component';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ResolverDashboardService } from './resolver-dashboard.service';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'history',
        component: HistorysComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'dashboard',
        canDeactivate: [ CanDeactivateGuard ],
        component: DashboardComponent,
        resolve: {
          data: ResolverDashboardService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
