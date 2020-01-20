import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AppComponent} from '../app.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private appComponent: AppComponent) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        this.appComponent.logout();
        location.reload(true);
      }

      const error = err.error.message || err.statusText;
      console.log(error);
      return throwError(error);
    }));
  }

}
