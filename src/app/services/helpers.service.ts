import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from "../domain/model/usuario";
@Injectable({
  providedIn: "root",
})
export class HelpersService {
  private readonly JWT_TOKEN = "JWT_TOKEN_BRAVO";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN_BRAVO";
  private authenticationChanged = new BehaviorSubject<boolean>(true);
  private tokenStorageSubject = new BehaviorSubject(false);
  private userLogado?: string;

  constructor(private jwt: JwtHelperService) {
    try {
      window.addEventListener("storage", (e) => {
        if (e.key === this.JWT_TOKEN) {
          this.authenticationChanged.next(this.isAuthenticated());
          this.tokenStorageSubject.next(true);
        }
      });
    } catch (error) {}
  }

  public isAuthenticated(): boolean {
    return !(
      localStorage.getItem(this.JWT_TOKEN) === undefined ||
      localStorage.getItem(this.JWT_TOKEN) === null ||
      localStorage.getItem(this.JWT_TOKEN) === "null" ||
      localStorage.getItem(this.JWT_TOKEN) === "undefined" ||
      localStorage.getItem(this.JWT_TOKEN) === ""
    );
  }

  private userFromToken() {
    const token = this.jwt.decodeToken(this.token);
    console.log("========================================");
    console.log(token);
    console.log("========================================");

    /*if (token.primeiroAcesso == "False") token.primeiroAcesso = false;
    else if (token.primeiroAcesso == "True") token.primeiroAcesso = true;
    if (typeof token.id == "string") token.id = parseInt(token.id);*/
    //this.setUsuario(token);
  }

  public isAuthenticationChanged(): Observable<boolean> {
    return this.authenticationChanged.asObservable();
  }

  public logar(token: string, refresh: string) {
    // this.setUsuario(usuario);
    this.setStorageToken(token, refresh);
    this.authenticationChanged.next(this.isAuthenticated());
  }

  get token(): string {
    return (localStorage.getItem(this.JWT_TOKEN) ??
      localStorage.getItem(this.REFRESH_TOKEN))!;
  }

  public logout(): void {
    localStorage.clear();
    this.setUsuario("");
    this.authenticationChanged.next(this.isAuthenticated());
  }
  private setUsuario(user: string): void {
    this.userLogado = user;
  }
  private setStorageToken(token: string, refresh: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
    localStorage.setItem(this.REFRESH_TOKEN, refresh);
  }
}
