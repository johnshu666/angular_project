import { InfoListConfig } from './../model/info-list-config';
import { InfosService } from './../infos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../model/info';
@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent {
  @Input() limit: number;
  @Input()
    set config(config: InfoListConfig) {
      console.log('test in info-list', config);
      if (config) {
        this.query = config;
        this.runQuery();
      }
    }
  constructor(
    private infosService: InfosService
  ) { }
  query: InfoListConfig;
  results: Info[] = [];
  currentPage =  1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.results = [];
    if (this.limit) {
      // console.log('test1 in info-list', this.limit);
      this.query.filters.limit = this.limit;
      this.query.filters.offset = (this.limit * (this.currentPage - 1));
    }
    this.infosService.query(this.query)
      .subscribe(data => {
        this.results = data.infos;
        console.log('test in info-list', this.results);
      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        this.totalPages = Array.from(new Array(Math.ceil(data.infoCount / this.limit)), (val, index) => index + 1);
        console.log('test in totalpage', this.totalPages);
      });
  }
}
