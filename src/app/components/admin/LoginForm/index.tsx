import { Layout } from "./Layout";
import { Header } from "./Header";
import { FormFields } from "./FormFields";
import { SubmitButton } from "./SubmitButton";
import { ErrorMessage } from "./ErrorMessage";
import { Form } from "./Form";

export const LoginForm = {
  Layout,
  Header,
  Form,
  FormFields,
  SubmitButton,
  ErrorMessage,
} as const;
