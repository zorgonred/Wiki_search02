import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // @ts-ignore
  private headers: HttpHeaders;

  private baseUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json';


  constructor(private http: HttpClient) {
    this.setDefaultHeader();

  }

  get(url: string) {
    return this.http.get(this.baseUrl + url, this.getRequestOptions()).pipe(
      map(res => {
        return res
      }),
      catchError((res: Response) => this.formatError(res))
    );
  }


  private getRequestOptions(): Object {
    return {headers: this.headers, observe: "response"};
  }


  private formatError(res: Response) {
    if (res && res.status != 200) {
      //show error message here

      console.log("error received");
      console.log(res.status > 200);
      console.log(res.status);

    }
    return throwError(res);
  }

  private setDefaultHeader() {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  }
}
