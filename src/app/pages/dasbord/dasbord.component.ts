import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { NgxSpinnerService } from "ngx-spinner";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface Toon {
  id: number;
  name: string;
  episode:number;
  lastepisode:number;
  link:string;
  topicselector:string;

}
@Component({
  selector: 'app-dasbord',
  templateUrl: './dasbord.component.html',
  styleUrls: ['./dasbord.component.scss']
})
export class DasbordComponent implements OnInit {
  cartoon:Toon[];
  spinerShow:boolean = false;
  
  constructor(private dataService:DataService , private spinner: NgxSpinnerService,private modalService: NgbModal) { }

    ngOnInit():void{

      this.spinner.show();
    this.getData();

    }

  getData(){
    this.dataService.getdata()
     .subscribe(cartoon => this.cartoon = cartoon,err => console.log(err),()=>this.spinner.hide());
     
 }
  
update(id:number){
  this.dataService.update(id).subscribe();
  
}
open(content) {
  this.modalService.open(content);
}

}
