import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestType, RequestURL, URLSERVICE } from 'src/models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public _headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
  ) { }

  setHeaders(): HttpHeaders {
    return this._headers.set("Content-Type", "application/json");
  }

  request(requestType: RequestType, requestURL: RequestURL, body?: any, query?: any): Promise<any> {

    const _header: HttpHeaders = this.setHeaders();

    return new Promise((resolve, reject) => {

      let info = URLSERVICE(requestURL);
      let request = new HttpRequest(requestType, info.url, body, { headers: _header });

      this.http.request(request).toPromise()
        .then((responseData: any) => {
          resolve(responseData)
        }).catch((errorResponseData) => {
          reject(errorResponseData)
        })
    });
  }

}
