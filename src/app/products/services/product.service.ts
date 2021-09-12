import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducts } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(environment.url_server);
  }
}
