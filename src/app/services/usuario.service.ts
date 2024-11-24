import { Injectable } from "@angular/core";
import { Usuario } from "../domain/model/usuario";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private baseUrl = environment.apiUrl;
  private url = `${this.baseUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  create(input?: any): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, input);
  }
}
