import { NationsService } from './../services/nations.service';
import { NationData } from './../model/data';
import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent {

  arr: Data[]=[];

  constructor(private nationsService: NationsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.nationsService.getReport().subscribe((data: Data[]) => {
      this.arr = data;
      console.log(data);
    })

  }

  apidata = this.nationsService.getReport();

  dataview(apidata: string){
    return this.apidata;
  }


}
