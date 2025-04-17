/**
 * Type definition for contact form data.
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message?: string | null;
}
