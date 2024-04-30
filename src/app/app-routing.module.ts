import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MonthlyComponent } from './components/offers/monthly/monthly.component';
import { TodayComponent } from './components/offers/today/today.component';
import { WeeklyComponent } from './components/offers/weekly/weekly.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'today', component: TodayComponent },
  { path: 'weekly', component: WeeklyComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: '/' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
