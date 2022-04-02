import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { HeaderComponent } from './admin/layout/block/header/header.component';
import { FooterComponent } from './admin/layout/block/footer/footer.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { ProductsComponent } from './admin/pages/products/products.component';
import { OrdersComponent } from './admin/pages/orders/orders.component';
import { LoginComponent } from './admin/pages/auth/login/login.component';
import { RegisterComponent } from './admin/pages/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './admin/pages/home/home.component';
import { HighlightDirective } from './directive/highlight.directive';
import { InfoPipe } from './pipes/info.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    ProductsComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HighlightDirective,
    InfoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
