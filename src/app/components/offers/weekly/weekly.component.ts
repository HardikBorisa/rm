import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent {
  offerData:any;

   constructor(private offerService: CommonService){}

   ngOnInit(): void {
    this.getAllOffer();
  }

  getAllOffer(): void {
    this.offerService.getOffersByType('weekly').subscribe(
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
