import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('profile') profile;

  constructor() { }

  ngOnInit(): void {
  }

  onTaggleFavorite(favorited: boolean) {
    this.profile['favorited'] = favorited;

    if (favorited) {
      this.profile['favoriteCount']++;
    } else {
      this.profile['favoriteCount']--;
    }
  }

}
