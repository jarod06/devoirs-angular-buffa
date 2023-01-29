import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResponseResult } from './models';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const customReq = request.clone({
		});
		return next.handle(customReq)
		.pipe(
			tap(ev => {
				console.log(customReq);
			}),
			catchError(response => {
				let respResult = new ResponseResult(200, '');
				console.error(response);
				if (response instanceof HttpErrorResponse) {
					const err = response.message || JSON.stringify(response.error);
					respResult.statusCode = response.status;
					respResult.message = response.statusText || + " Details:" + err
				} else {
					respResult.statusCode = 400;
					respResult.message = response.message ? response.message : response.toString();
				}
				console.error(respResult.message);
				return throwError(respResult);
			})
			);
	}
}

export const ErrorInterceptorProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: ErrorInterceptor,
	multi: true,
};