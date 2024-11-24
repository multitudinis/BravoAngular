import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Obra } from "../domain/model/obra";

@Injectable({
  providedIn: "root",
})
export class ObraService {
  private baseUrl = environment.apiUrl;
  private url = `${this.baseUrl}/obras`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Obra[]> {
    return this.http.get<Obra[]>(this.url);
  }

  create(input?: any): Observable<Obra> {
    return this.http.post<Obra>(this.url, input);
  }
}
