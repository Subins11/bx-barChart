import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BxBarChartService {

  constructor(private http:HttpClient) { }

private apiURL = 'http://localhost:3000/chartData';

getData() : Observable<any[]>{
return this.http.get<any[]>(this.apiURL)
} 



}
