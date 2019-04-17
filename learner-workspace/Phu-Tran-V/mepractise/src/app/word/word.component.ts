import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  filterStatus = 'showAll';
  en = '';
  vn = '';
  isShownForm = false;
  word: {
    id: number,
    en: string,
    vn: string,
    memorized: boolean,
  };
  // arrWords = [this.word];
  arrWords = [
    { id: 1, en: 'action', vn: 'phu', memorized: true},
    { id: 2, en: 'action1', vn: 'phu1', memorized: false}
  ];
  constructor() { }

  ngOnInit() {
  }

  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.en,
      vn: this.vn,
      memorized: false
    });
    this.en = '';
    this.vn = '';
    this.isShownForm = false;
  }
  removeWord(id: number) {
    const index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean) {
    const conShowAll = this.filterStatus === 'showAll' ;
    const conMemorized = this.filterStatus === 'memorized' && memorized;
    const conNotlearn = this.filterStatus === 'notlearn' && !memorized ;
    return conShowAll || conMemorized || conNotlearn ;
  }
}
