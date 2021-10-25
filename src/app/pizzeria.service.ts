import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

  constructor(private http:HttpClient) { }
getpizza():Observable<any>{



  }
}
