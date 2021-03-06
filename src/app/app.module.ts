import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { KSSwiperModule } from 'angular2-swiper';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    KSSwiperContainer, 
    KSSwiperSlide
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
