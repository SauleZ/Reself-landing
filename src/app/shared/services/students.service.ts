import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  getStudentsList() {
    return this._http.get('http://localhost:3000/clients');
  }

  addStudentData(data: any) {
    return this._http.post('http://localhost:3000/clients', data);
  }

}
