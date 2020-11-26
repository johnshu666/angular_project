import { ApiService } from './../api.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../profile.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent {
  @Input() profile: Profile;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private apiService: ApiService
  ) { }

  // tslint:disable-next-line: typedef
  toggleFavorite() {
    // authenciated user!

    this.isSubmitting = true;

    if (!this.profile.favorited) {
      return this.apiService.favorite(this.profile.id)
      .pipe(tap(
        data => {
        this.isSubmitting = false;
        this.toggle.emit(true);
      },
      err => this.isSubmitting = false
      ));
    } else {
      return this.apiService.unfavorite(this.profile.id);
    }
  }
}
