import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {
  offerData:any;
 
  constructor(private offerService: CommonService){}

  ngOnInit(): void {
   this.getAllOffer();
 }

 getAllOffer(): void {
   this.offerService.getOffersByType('today').subscribe(
     (data) => {
       console.log(data);
       
       this.offerData= data;
     },
     (error) => {
       console.error('Error fetching menu items:', error);
     }
   );
 }
}
