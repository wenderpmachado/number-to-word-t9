export interface IAPIResponse<T> {
  statusCode: number;

  data?: T;
  error?: any;
  message?: string;
}
