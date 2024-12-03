import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IActividad, IActividades } from 'src/app/interfaces/iactividades';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  getActividades():Observable<IActividades[]>{
    return this.httpclient.get<IActividades[]>(`${environment.apiUrl}/actividades`);
  }

  postActividades(newActividad: IActividad): Observable<IActividad>{
    return this.httpclient.post<IActividad>(`${environment.apiUrl}/actividades`, newActividad);
  }

  putActividades(actividad:any):Observable<IActividades>{
    return this.httpclient.put<IActividades>(`${environment.apiUrl}/actividades/${actividad.id}`, actividad);
  }

  deleteActividades(actividad:any):Observable<IActividades>{
    return this.httpclient.delete<IActividades>(`${environment.apiUrl}/actividades/${actividad.id}`);
  }

}
