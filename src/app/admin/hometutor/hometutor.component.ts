import { Component, OnInit } from '@angular/core';
import { EnquiryHomeTutor } from '../../models/EnquiryHomeTutor.model';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-hometutor',
  templateUrl: './hometutor.component.html',
  styleUrls: ['./hometutor.component.css']
})
export class HometutorComponent implements OnInit {
  enquiries:EnquiryHomeTutor[]
  constructor(public tutorservice:TutorService) { }

  ngOnInit() {
    this.tutorservice.getHomeTutorEnquiries().subscribe(data=>this.enquiries=data)
  }
  deleteEnquiry(id:string){
    this.tutorservice.delHome(id)
  }

}
