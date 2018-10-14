import { Component, OnInit } from '@angular/core';
import { Tutor } from '../../models/tutor.model';
import { TutorService } from '../../services/tutor.service';
@Component({
  selector: 'app-ourtutors',
  templateUrl: './ourtutors.component.html',
  styleUrls: ['./ourtutors.component.css']
})
export class OurtutorsComponent implements OnInit {

  tutors:Tutor[]=[]
  constructor(public tutorservice:TutorService) { 
  }

  ngOnInit() {
    this.tutorservice.getTutors().subscribe(data=>this.tutors=data);
  }
  deleteEnquiry(id:string){
    this.tutorservice.delTutor(id)
  }

}
