import { Component, OnInit } from '@angular/core';
import { EnquirySchoolTutor } from '../../models/EnquirySchoolTutor.model';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-schooltutor',
  templateUrl: './schooltutor.component.html',
  styleUrls: ['./schooltutor.component.css']
})
export class SchooltutorComponent implements OnInit {
  enquiries:EnquirySchoolTutor[]
  constructor(public tutorservice:TutorService) { }

  ngOnInit() {
    this.tutorservice.getSchoolTutorEnquiries().subscribe(data=>this.enquiries=data)
  }
  deleteEnquiry(id:string){
    this.tutorservice.delSchool(id)
  }

}
