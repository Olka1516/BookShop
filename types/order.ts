import type { Book } from "./book";

export interface Order {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  country: string;
  town: string;
  department: string;
  comment: string;
  orders: Book[];
}
