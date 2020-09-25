import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss']
})
export class CardviewComponent implements OnInit {
  @Input() name:string;
  @Input() ep:number;
  @Input() lastep:number;
  @Input() link:string;
  constructor() { }

  ngOnInit(): void {
  }

  openlink(url:string){
    window.open(url, "_blank");
  }
  
}
