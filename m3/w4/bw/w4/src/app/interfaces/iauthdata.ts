import { User } from "./user";

export interface IAuthdata {
  email: string;
  password: string;
}
export interface IResponseData {
  accessToken:string;
  user:User;
}
