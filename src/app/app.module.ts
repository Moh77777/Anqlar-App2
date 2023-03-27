import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './creatcomponents/home/home.component';
import { PORTFOLIOComponent } from './creatcomponents/portfolio/portfolio.component';
import { ABOUTComponent } from './creatcomponents/about/about.component';
import { CONTACtComponent } from './creatcomponents/contact/contact.component';
import { NavbarComponent } from './creatcomponents/navbar/navbar.component';
import { FooterComponent } from './creatcomponents/footer/footer.component';
import { NotfoundComponent } from './creatcomponents/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PORTFOLIOComponent,
    ABOUTComponent,
    CONTACtComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
