import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAuthedDirective } from '../show-authed.directive';


@NgModule({
  declarations: [
    ShowAuthedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowAuthedDirective
  ]
})
export class HeaderModule { }
