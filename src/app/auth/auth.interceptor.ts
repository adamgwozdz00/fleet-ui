import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthUserSessionStorageService} from "./auth-user-session-storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly storage: AuthUserSessionStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const data = this.storage.load();
    const token = data.apiToken;

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });

      return next.handle(cloned);
    }

    return next.handle(req);
  }


}
