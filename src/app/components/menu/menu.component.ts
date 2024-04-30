import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   menuData:any;

   constructor(private menuService: CommonService){}

   ngOnInit(): void {
    this.getAllMenuItems();
  }

  getAllMenuItems(): void {
    this.menuService.getMenu().subscribe(
      (data) => {
        this.menuData = data.menu;
      },
      (error) => {
        console.error('Error fetching menu items:', error);
      }
    );
  }
}
