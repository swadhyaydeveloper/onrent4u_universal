import { Component, OnInit } from '@angular/core';
import {PoolEnquiry} from '../../models/poolenquiry.model';
import {PoolService} from '../../services/pool.service';

@Component({
  selector: 'app-poolsenquiry',
  templateUrl: './poolsenquiry.component.html',
  styleUrls: ['./poolsenquiry.component.css']
})
export class PoolsenquiryComponent implements OnInit {

  enquiries:PoolEnquiry[]=[]
  constructor(public poolservice:PoolService) { }

  ngOnInit() {
    this.poolservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.poolservice.delEnq(id)
  }
}
