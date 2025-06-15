export interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  paymentMethod: 'left' | 'right' | '';
  checkbox: boolean;
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string | undefined;
}