import { Component, OnInit, Input } from '@angular/core';
import {Rental} from '../../models/rental.model';
import {Enquiry} from '../../models/enquiry.model';
import {RentalService} from '../../services/rental.service'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
  @Input() property : Rental={}
  sto
  enquiry : Enquiry={}
  constructor(public rentalservice:RentalService,private storage:AngularFireStorage) { }

  ngOnInit() {
    this.sto=this.storage.ref(this.property.image).getDownloadURL()
  }
  addEnquiry(){
    let now = new Date();
    this.enquiry.date=now
    this.enquiry.id=this.property.id
    this.enquiry.owner=this.property.name
    this.enquiry.ownercontact=this.property.contact
    this.enquiry.status="null"
    console.log(this.enquiry.owner)
    this.rentalservice.addEnquiry(this.enquiry)
    this.rentalservice.alert=false;
    setTimeout(()=>{ this.rentalservice.alert=true }, 4000)
  }

}
