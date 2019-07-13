import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,
    HttpHeaders,
    HttpErrorResponse,
    HttpResponse} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, private router: Router) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.cookieService.get('token');
    const headers = new HttpHeaders({
          'Authorization': token
        });
    request = request.clone({
      headers: headers
    });
    return next.handle(request).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            if (this.router.url == '/login') {
                this.router.navigate(['/students']);
              }
          }
      },
      (error: HttpErrorResponse) => {
        if (this.router.url !== '/login' && (error.status === 401)) {
          this.router.navigate(['/login']);
        }
        
        
        return throwError(error);
      }));
    
  }
}