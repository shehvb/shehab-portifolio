import { ContactStatus } from "./state";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactState {
  status: ContactStatus;
  errorMessage: string | null;
}
