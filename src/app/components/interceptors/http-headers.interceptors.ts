import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>
    {
        req=req.clone({
            setHeaders:{
                'x-rapidapi-key':'32f5f7b22bmsh978526d0ff5feb1p17cea5jsn58d584423ec4',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473',
            }
        });
        return next.handle(req);
    }
}