import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Rental} from '../models/rental.model';
import {RentalService} from '../services/rental.service'
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  @ViewChild('modtogbtn') modal:ElementRef
  formalert:boolean=true
  property:Rental={}
  localities
  loader:boolean
  properties : Rental[]=[];
  type=""
  bhk=""
  locality=""
  for=""
  constructor(public rentalservice :RentalService,public db: AngularFirestore) { 
    
  }
  ngOnInit() {
    this.rentalservice.alert=true
    let el: HTMLElement = this.modal.nativeElement as HTMLElement;
    el.click();
    
    this.db.collection('localities').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as {id?:string,locality:string};
        data.id=a.payload.doc.id;
        return data;
      });
    })).subscribe(data=>this.localities=data);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    /* this.rentalservice.getRental().subscribe(data=>this.properties=data) */   
    this.onChange() 
    
  }




  gettemp(){    
    if(!(this.locality=="")&&(this.type=="")&&(this.for=="")&&(this.bhk=="")){ 
  
      return this.db.collection('rental',ref=>ref.where('locality','==',this.locality));
    }
    if((this.locality=="")&&!(this.type=="")&&(this.for=="")&&(this.bhk=="")){  

      return this.db.collection('rental',ref=>ref.where('type','==',this.type));
    }
    if((this.locality=="")&&(this.type=="")&&!(this.for=="")&&(this.bhk=="")){
     
      return this.db.collection('rental',ref=>ref.where('for','==',this.for));
    }
    if((this.locality=="")&&(this.type=="")&&(this.for=="")&&!(this.bhk=="")){ 
  
      return this.db.collection('rental',ref=>ref.where('bhk','==',this.bhk));
    }
    if(!(this.locality=="")&&!(this.type=="")&&(this.for=="")&&(this.bhk=="")){  
  
      return this.db.collection('rental',ref=>ref.where('locality','==',this.locality).where('type','==',this.type));
    }
    if((this.locality=="")&&!(this.type=="")&&(this.for=="")&&!(this.bhk=="")){  
 
      return this.db.collection('rental',ref=>ref.where('type','==',this.type).where('bhk','==',this.bhk));
    }
    if((this.locality=="")&&!(this.type=="")&&!(this.for=="")&&(this.bhk=="")){    

      return this.db.collection('rental',ref=>ref.where('type','==',this.type).where('for','==',this.for));
    }
    if(!(this.locality=="")&&(this.type=="")&&(this.for=="")&&!(this.bhk=="")){

      return this.db.collection('rental',ref=>ref.where('locality','==',this.locality).where('bhk','==',this.bhk));
    }
    if(!(this.locality=="")&&(this.type=="")&&!(this.for=="")&&(this.bhk=="")){  
  
      return this.db.collection('rental',ref=>ref.where('locality','==',this.locality).where('for','==',this.for));
    }
    if((this.locality=="")&&(this.type=="")&&!(this.for=="")&&!(this.bhk=="")){  
 
      return this.db.collection('rental',ref=>ref.where('for','==',this.for).where('bhk','==',this.bhk));
    }
    if((this.locality=="")&&!(this.type=="")&&!(this.for=="")&&!(this.bhk=="")){   
  
      return this.db.collection('rental',ref=>ref.where('type','==',this.type).where('bhk','==',this.bhk).where('for','==',this.for));
    }
    if(!(this.locality=="")&&(this.type=="")&&!(this.for=="")&&!(this.bhk=="")){  

      return this.db.collection('rental',ref=>ref.where('locality','==',this.locality).where('bhk','==',this.bhk).where('for','==',this.for));
    }
    if(!(this.locality=="")&&!(this.type=="")&&(this.for=="")&&!(this.bhk=="")){ 
 
      return this.db.collection('rental',ref=>ref.where('type','==',this.type).where('bhk','==',this.bhk).where('locality','==',this.locality));
    }
    if(!(this.locality=="")&&!(this.type=="")&&!(this.for=="")&&(this.bhk=="")){ 

      return this.db.collection('rental',ref=>ref.where('type','==',this.type).where('locality','==',this.locality).where('for','==',this.for));
    }
    if(!(this.locality=="")&&!(this.type=="")&&!(this.for=="")&&!(this.bhk=="")){ 

      return this.db.collection('rental',ref=>ref.where('locality','==',this.locality).where('for','==',this.for).where('type','==',this.type).where('bhk','==',this.bhk));
    }

    return this.db.collection('rental');
  }
  onChange(){
    let tmp=this.gettemp()
    this.loader=true
    this
    this.rentalservice.getfilter(tmp).subscribe(data=>{this.properties=data;this.loader=false});


  }

  addrendpropenq(){
   if(this.property.name&&this.property.contact&&this.property.locality&&this.property.rent){
     if(this.property.contact.length>=10){
      let now = new Date();
      this.property.date=now
      this.rentalservice.addRentalrwndenq(this.property)
      this.property={}
      this.rentalservice.alert=false
      setTimeout(()=>{ this.rentalservice.alert=true }, 4000)
     }
     else{
       this.formalert=false
       setTimeout(()=>{ this.formalert=true }, 4000)
     }
   }
   else{
     this.formalert=false
     setTimeout(()=>{ this.formalert=true }, 4000)
   }
  }

  

}
