import { Component, OnInit } from '@angular/core';
import {WeddingEnquiry} from '../../models/weddingenquiry.model';
import {WeddingService} from '../../services/wedding.service';

@Component({
  selector: 'app-eventenquiry',
  templateUrl: './eventenquiry.component.html',
  styleUrls: ['./eventenquiry.component.css']
})
export class EventenquiryComponent implements OnInit {

  enquiries:WeddingEnquiry[]=[]
  constructor(public weddingservice:WeddingService) { }

  ngOnInit() {
    this.weddingservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.weddingservice.delEnq(id)
  }

}
