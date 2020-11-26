import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {
  data: any[] = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // this.apiService.getInfo('').subscribe(x => console.log(x.data));
  }

}
