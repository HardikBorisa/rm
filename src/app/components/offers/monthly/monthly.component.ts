import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent {
  offerData:any;
 
  constructor(private offerService: CommonService){}

  ngOnInit(): void {
   this.getAllOffer();
 }

 getAllOffer(): void {
   this.offerService.getOffersByType('monthly').subscribe(
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
