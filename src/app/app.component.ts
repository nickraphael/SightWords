import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

import { Words, IWord } from './words'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showLogo: Boolean = true;
  example1SwipeOptions: any;
  words: IWord[] = Words.allWords;

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  constructor() {
    this.example1SwipeOptions = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 5
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }


  viewWords() {
    this.showLogo = false;

  }

  settings() {

  }

}
