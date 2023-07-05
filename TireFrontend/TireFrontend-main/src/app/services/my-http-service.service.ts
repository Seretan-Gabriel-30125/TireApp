import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { TyreCondition } from 'src/models/tyrecondition.model';

@Injectable({
  providedIn: 'root'
})
export class TyreService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);

  }

addTyreData(addData: TyreCondition): Observable<TyreCondition>{
  addData.id= '00000000-0000-0000-0000-000000000000';
  return this.http.post<TyreCondition>(this.baseApiUrl + '/api/Tyre',addData);
}

}
