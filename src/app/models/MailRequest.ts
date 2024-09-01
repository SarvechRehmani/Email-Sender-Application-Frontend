export interface MailRequest {
  to: string[];
  cc: string[];
  subject: string;
  htmlContent: string;
}
