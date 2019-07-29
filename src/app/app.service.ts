

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs/index';


@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  uploadXmlFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    let httpOptions = { headers: headers};
    return this.httpClient.post('http://localhost:8080/employee/save' , formData, httpOptions).pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }

}
