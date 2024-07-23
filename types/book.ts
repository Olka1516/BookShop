export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  price: number;
  amount: number;
  image: string;
  category: string;
  star: number;
}

export interface AddBook {
  title: string;
  description: string;
  author: string;
  price: number | null;
  amount: number | null;
  image: null | File;
  category: string;
}


