import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Tarefa } from "../domain/model/tarefa";

@Injectable({
  providedIn: "root",
})
export class TarefasService {
  private baseUrl = environment.apiUrl;
  private url = `${this.baseUrl}/tarefas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url);
  }
}
