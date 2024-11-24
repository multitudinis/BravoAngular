import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "../domain/model/cliente";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private baseUrl = environment.apiUrl;
  private url = `${this.baseUrl}/clientes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  create(input?: any): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, input);
  }
}
