import { Component, Input, OnInit } from '@angular/core';
import { Errors } from '../model/errors.model';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent  {
  formattedErrors: Array<string> = [];

  @Input()
    set errors(errorList: Errors) {
      console.log('errorList', errorList);
      this.formattedErrors = Object.keys(errorList.errors || { })
        .map(key => `${key} ${errorList.errors[key]}`);
    }
    get errorList() { return this.formattedErrors; }

}
