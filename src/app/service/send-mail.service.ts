import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './helper';

@Injectable({
  providedIn: 'root',
})
export class SendMailService {
  constructor(private http: HttpClient) {}

  public sendMail(mail: any) {
    return this.http.post(`${API_URL}/send`, mail);
  }
}
