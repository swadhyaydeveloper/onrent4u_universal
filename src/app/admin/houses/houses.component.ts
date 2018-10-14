import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {RentalService} from '../../services/rental.service';
import { Rental } from '../../models/rental.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public properties:Rental[]=[]
  constructor(public db: AngularFirestore,public rentalservice:RentalService) { }

  ngOnInit() {
    this.getProperties()

  }

  getProperties(){
    this.rentalservice.getRental().subscribe(data=>this.properties=data)
  }
  delProperty(id:string,image:string,locality:string){
    let locstatus=0
    let count=0
    this.rentalservice.delRental(id,image)
    for(let property of this.properties){
      if(property.locality==locality){
        count++
      }
      if(count==1){
        for(let localit of this.rentalservice.localities){
          if(locality==localit.locality){
            this.db.collection('localities').doc(localit.id).delete()
          }
        }
      }
    }
    
  }

}
