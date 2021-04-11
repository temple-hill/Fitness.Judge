export type TypeResponseError = { [key: string]: string[] };

export interface ResponseInterface {
  payload: Record<string, unknown>;
  errors?: TypeResponseError;
}

export interface FlashMessageInterface {
  type: 'success' | 'info' | 'danger';
  message: string;
}
