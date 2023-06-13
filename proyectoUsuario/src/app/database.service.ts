import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  URL="http://localhost:3000"

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/usuarios'); // Reemplaza 'API_URL' con la URL de tu API
  }

  obtener_Materias() {
    return this.http.get<HomeComponent[]>(this.URL+'/usuarios');
  }
}
