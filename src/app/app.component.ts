import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';

import * as _ from 'underscore'

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
  words: IWord[] = [];

  blue: Boolean = true;
  red: Boolean = false;
  green: Boolean = false;
  orangered: Boolean = false;
  indigo: Boolean = false;
  pink: Boolean = false;
  purple: Boolean = false;
  lime: Boolean = false;
  aqua: Boolean = false;
  violet: Boolean = false;
  gold: Boolean = false;
  lemonChiffon : Boolean = false;



  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  constructor() {
    this.example1SwipeOptions = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 5
    };

    this.randomizeArray();
  }

  randomizeArray() {
    console.log("randomizeArray");

    this.words = [];

    let selectedWords: IWord[] = Words.allWords.filter((word: IWord) => {
      return this[word.colour];
    });

    for (var _i = 0; _i < 5; _i++) {
      this.words = this.words.concat(_.shuffle<IWord>(selectedWords));
    }
  }

}
