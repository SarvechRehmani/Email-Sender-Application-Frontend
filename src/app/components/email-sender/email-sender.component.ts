import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../service/send-mail.service';
import { HttpClientModule } from '@angular/common/http';
import { MailRequest } from '../../models/MailRequest';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { API_KEY_TINYMCE } from '../../service/helper';

@Component({
  selector: 'app-email-sender',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, EditorComponent],
  providers: [SendMailService], // Optional, if not using providedIn: 'root'
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css'],
})
export class EmailSenderComponent {
  constructor(
    private toast: ToastrService,
    private sendMailService: SendMailService
  ) {}

  api_key = API_KEY_TINYMCE;
  init: EditorComponent['init'] = {
    plugins: [
      // Core editing features
      'anchor',
      'autolink',
      'charmap',
      'codesample',
      'emoticons',
      'image',
      'link',
      'lists',
      'media',
      'searchreplace',
      'table',
      'visualblocks',
      'wordcount',
      // Your account includes a free trial of TinyMCE premium features
      // Try the most popular premium features until Sep 16, 2024:
      'checklist',
      'mediaembed',
      'casechange',
      'export',
      'formatpainter',
      'pageembed',
      'a11ychecker',
      'tinymcespellchecker',
      'permanentpen',
      'powerpaste',
      'advtable',
      'advcode',
      'editimage',
      'advtemplate',
      'mentions',
      'tinycomments',
      'tableofcontents',
      'footnotes',
      'mergetags',
      'autocorrect',
      'typography',
      'inlinecss',
      'markdown',
    ],
    toolbar:
      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
  };

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
