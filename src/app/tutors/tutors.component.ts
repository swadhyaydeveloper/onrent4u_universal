import { Component, OnInit } from '@angular/core';
import { EnquiryHomeTutor } from '../models/EnquiryHomeTutor.model';
import { EnquirySchoolTutor } from '../models/EnquirySchoolTutor.model';
import { EnquiryCoachingTutor } from '../models/EnquiryCoachingTutor.model';
import { TutorService } from '../services/tutor.service'; 
import { Tutor } from '../models/tutor.model';


@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
  formerror=true
  enqhometut:EnquiryHomeTutor={}
  enqschooltut:EnquirySchoolTutor={}
  enqcoachingtut:EnquiryCoachingTutor={}
  tutor:Tutor={}
  demo:{date?:Date,name?:string,contact?:string}={}
  constructor(public tutorservice:TutorService) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  addEnqHomeTut(){
    if(this.enqhometut.name&&this.enqhometut.contact&&this.enqhometut.locality&&this.enqhometut.subjects){
      if(this.enqhometut.contact.length>=10){
        let now = new Date();
        this.enqhometut.date=now

        this.tutorservice.addHomeTutorEnquiry(this.enqhometut)
        this.enqhometut={}
        this.tutorservice.enquiryalert=false
        setTimeout(()=>{ this.tutorservice.enquiryalert=true }, 4000)
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
    
  }

  addEnqCoachingTut(){
    if(this.enqcoachingtut.contact&&this.enqcoachingtut.name&&this.enqcoachingtut.subjects&&this.enqcoachingtut.locality){
      if(this.enqcoachingtut.contact.length>=10){
        let now = new Date();
        this.enqcoachingtut.date=now
        this.tutorservice.addCoachingTutorEnquiry(this.enqcoachingtut)
        this.enqcoachingtut={}
        this.tutorservice.enquiryalert=false
        setTimeout(()=>{ this.tutorservice.enquiryalert=true }, 4000)
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }

  addEnqSchoolTut(){
    if(this.enqschooltut.name&&this.enqschooltut.contact&&this.enqschooltut.locality&&this.enqschooltut.subjects){
      if(this.enqschooltut.contact.length>=10){
        let now = new Date();
        this.enqschooltut.date=now
        this.tutorservice.addSchoolTutorEnquiry(this.enqschooltut)
        this.enqschooltut={}
        this.tutorservice.enquiryalert=false
        setTimeout(()=>{ this.tutorservice.enquiryalert=true }, 4000)
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }

  addTutor(){
    if(this.tutor.name&&this.tutor.contact&&this.tutor.subjects&&this.tutor.preferance&&this.tutor.experience){
      if(this.tutor.contact.length>=10){
        let now = new Date();
        this.tutor.date=now
        this.tutorservice.addTutor(this.tutor)
        this.tutor={}
        this.tutorservice.enquiryalert=false
        setTimeout(()=>{ this.tutorservice.enquiryalert=true }, 4000)
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }
  addDemo(){
    if(this.demo.name&&this.demo.contact){
      if(this.demo.contact.length>=10){
        let now = new Date();
        this.demo.date=now    
        this.tutorservice.addDemo(this.demo)
        this.demo={}
        this.tutorservice.enquiryalert=false
        setTimeout(()=>{ this.tutorservice.enquiryalert=true }, 4000)
      }
      else{
        this.formerror=false
        setTimeout(()=>{ this.formerror=true }, 4000)
      }
    }
    else{
      this.formerror=false
      setTimeout(()=>{ this.formerror=true }, 4000)
    }
  }

}
