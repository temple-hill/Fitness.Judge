import * as React from 'react';
import { AxiosResponse } from 'axios';

export interface FormErrors {
  [key: string]: { [key: string]: string[] };
}

export interface BaseContextInterface {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  errors: string[];
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  formErrors: FormErrors | undefined;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors | undefined>>;
  axiosWithHandleErrors: (axiosFunc: Promise<AxiosResponse<any>>) => Promise<any>;
  clearInfoAndErrors: () => void;
}

export const BaseContext = React.createContext<BaseContextInterface>({
  isLoading: false,
  setIsLoading: () => undefined,
  info: '',
  setInfo: () => undefined,
  errors: [],
  setErrors: () => undefined,
  formErrors: undefined,
  setFormErrors: () => undefined,
  axiosWithHandleErrors: () => new Promise((resolve) => resolve),
  clearInfoAndErrors: () => undefined,
});
