import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { HelpersService } from "../services/helpers.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private helper: HelpersService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.helper.isAuthenticated()) {
      const authReq = req.clone({
        headers: req.headers.set(
          "Authorization",
          `Bearer ${this.helper.token}`
        ),
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
