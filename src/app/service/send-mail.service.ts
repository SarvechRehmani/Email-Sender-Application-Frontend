import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './helper';
import { MailRequest } from '../models/MailRequest';

@Injectable({
  providedIn: 'root',
})
export class SendMailService {
  constructor(private http: HttpClient) {}

  public sendMail(mail: MailRequest) {
    return this.http.post(`${API_URL}/send`, mail);
  }
}
