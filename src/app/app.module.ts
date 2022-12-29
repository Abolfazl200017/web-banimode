import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './header/navbar/navbar.component';
import { EventComponent } from './event/event.component';
import { OfferProductComponent } from './offer-product/offer-product.component';
import { ConvertToPersianPipe } from './convert-to-persian.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    EventComponent,
    OfferProductComponent,
    ConvertToPersianPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
