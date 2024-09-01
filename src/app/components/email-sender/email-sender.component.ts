import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../service/send-mail.service';
import { HttpClientModule } from '@angular/common/http';
import { MailRequest } from '../../models/MailRequest';

@Component({
  selector: 'app-email-sender',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [SendMailService], // Optional, if not using providedIn: 'root'
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css'],
})
export class EmailSenderComponent {
  constructor(
    private toast: ToastrService,
    private sendMailService: SendMailService
  ) {}
  email: MailRequest = {
    to: [''],
    cc: [''],
    subject: '',
    htmlContent: '',
  };

  // Method to add a new To field
  addToField() {
    this.email.to.push('');
  }

  // Method to add a new CC field
  addCCField() {
    this.email.cc.push('');
  }

  // Method to handle the form submission
  submitButton = 'Send Mail';
  submit() {
    this.submitButton = 'Sending...';
    this.sendMailService.sendMail(this.email).subscribe(
      (success: any) => {
        this.submitButton = 'Send Mail';
        this.toast.success(
          'Mail has been successfully sand!',
          'Successfully Send'
        );
      },
      (error: any) => {
        this.submitButton = 'Send Mail';
        this.toast.error('Error in sending mail!', 'Error');
      }
    );
    console.log(this.email);
    this.clear();
  }

  // Method to clear the form fields
  clear() {
    this.email = {
      to: [''],
      cc: [''],
      subject: '',
      htmlContent: '',
    };
  }
}
