import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../service/send-mail.service';

@Component({
  selector: 'app-email-sender',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css'],
})
export class EmailSenderComponent {
  constructor(
    private toast: ToastrService,
    private sendMailService: SendMailService
  ) {}
  email: any = {
    to: [''],
    cc: [''],
    subject: '',
    message: '',
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
  submit() {
    this.sendMailService.sendMail(this.email).subscribe(
      (success: any) => {
        this.toast.success(
          'Mail has been successfully sand!',
          'Successfully Send'
        );
      },
      (error: any) => {}
    );
    console.log(this.email);
  }

  // Method to clear the form fields
  clear() {
    this.email = {
      to: [''],
      cc: [''],
      subject: '',
      message: '',
    };
  }
}
