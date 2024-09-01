import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-email-sender',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css'],
})
export class EmailSenderComponent {
  constructor(private toast: ToastrService) {}
  email: any = {
    to: [''],
    cc: [''],
    subject: '',
    message: '',
  };

  // Method to add a new To field
  addToField() {
    this.email.to.push('');
    this.toast.info('To field added successfully!', '');
  }

  // Method to add a new CC field
  addCCField() {
    this.email.cc.push('');
  }

  // Method to handle the form submission
  submit() {
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
