import { Routes } from '@angular/router';
import { EmailSenderComponent } from './components/email-sender/email-sender.component';

export const routes: Routes = [
  {
    path: '',
    component: EmailSenderComponent,
    pathMatch: 'full',
  },
];
