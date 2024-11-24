import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Token } from "../domain/model/token";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private baseUrl = environment.apiUrl;
  private url = `${this.baseUrl}/login`;

  constructor(private http: HttpClient) {}

  login(input?: any): Observable<Token> {
    return this.http.post<Token>(this.url, input);
  }
}
