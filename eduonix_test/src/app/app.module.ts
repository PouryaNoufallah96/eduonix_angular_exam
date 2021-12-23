import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './pages/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesModule } from './pages/services/services.module';
import { PricingModule } from './pages/pricing/procing.module';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule,
    SharedModule,
    ServicesModule,
    PricingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
