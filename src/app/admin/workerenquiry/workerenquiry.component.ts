import { Component, OnInit } from '@angular/core';
import {WorkerEnquiry} from '../../models/worker.model';
import {WorkerService} from '../../services/worker.service';

@Component({
  selector: 'app-workerenquiry',
  templateUrl: './workerenquiry.component.html',
  styleUrls: ['./workerenquiry.component.css']
})
export class WorkerenquiryComponent implements OnInit {
  enquiries:WorkerEnquiry[]=[]
  constructor(public workerservice:WorkerService) { }

  ngOnInit() {
    this.workerservice.getEnquiry().subscribe(data=>this.enquiries=data)
    
  }
  deleteEnquiry(id:string){
    this.workerservice.delEnq(id)
  }

}
