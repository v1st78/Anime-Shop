import { Request } from "express";

export type User = {
  id: number;
  email: string;
  password: string;
  role: string;
};

export interface UserRequest extends Request {
  user?: User;
}
