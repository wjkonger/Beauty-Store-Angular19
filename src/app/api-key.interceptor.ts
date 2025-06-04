import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      'x-api-key': environment.apiKey
    }
  });
  return next(modifiedReq);
};
