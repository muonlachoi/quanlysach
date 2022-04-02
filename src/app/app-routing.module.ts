import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { LoginComponent } from './admin/pages/auth/login/login.component';
import { RegisterComponent } from './admin/pages/auth/register/register.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { OrdersComponent } from './admin/pages/orders/orders.component';
import { ProductsComponent } from './admin/pages/products/products.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { AuthGuard } from './guard/auth.guard';
import { CheckLoginGuard } from './guard/check-login.guard';

const routes: Routes = [
  {
    redirectTo:'admin/home',
    path:'',
    pathMatch:'full'
  },
  {
    component:LoginComponent,
    canActivate:[CheckLoginGuard],
    path:'login'
  },{
    component:RegisterComponent,
    canActivate:[CheckLoginGuard],
    path:'register'
  },
  {
    component:AdminComponent,
    canActivate:[AuthGuard],
    path:'admin',
    children:[
      {
        component:ProductsComponent,
        canActivate:[AuthGuard],
        path:'products'
      },
      {
        component:HomeComponent,
        canActivate:[AuthGuard],
        path:'home'
      },{
        component:OrdersComponent,
        canActivate:[AuthGuard],
        path:'orders'
      },{
        component:UsersComponent,
        canActivate:[AuthGuard],
        path:'users'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
