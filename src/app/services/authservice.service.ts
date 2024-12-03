import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users, newUsuario } from '../interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpclient:HttpClient) { }

  GetAllUsers():Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }
  GetUserByUsername(usuario:any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${usuario}`);
  }
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  postUsuario(userNuevo:newUsuario):Observable<newUsuario>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios/`, userNuevo);
  }
}
