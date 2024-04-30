import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = 'http://localhost:3000'; // Replace this with your API URL

  constructor(private http: HttpClient) { }

  // Get all menu items
  getMenu(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/menu/list');
  }

  getMenussByType(type: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menu/type/${type}`);
  }

  getOffer(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/offer');
  }

   // Get offers by type
   getOffersByType(type: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/offer/type/${type}`);
  }
}
