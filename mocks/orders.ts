export const data: {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  country: string;
  town: string;
  department: string;
  comment: string;
  orders: {
    id: string;
    title: string;
    description: string;
    image: string;
    author: string;
    amount: number;
    price: number;
    category: string;
    star: number;
  }[];
}[] = [
  {
    firstname: "Olka",
    lastname: "Korolchuk",
    phone: "380984545327",
    email: "olka@gmail.com",
    country: "ukraine",
    town: "Uzhhorod",
    department: "Nova posta №7",
    comment: "lala lal",
    id: "1",
    orders: [
      {
        id: "1",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/1.jpg",
        author: "Black Pink",
        amount: 10,
        price: 10,
        category: "fairy",
        star: 4,
      },
      {
        id: "2",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/2.jpg",
        author: "Black Pink",
        amount: 11,
        price: 130,
        category: "fairy tile",
        star: 2,
      },
      {
        id: "3",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/3.jpg",
        author: "Black Pink",
        amount: 113,
        price: 190,
        category: "fairy",
        star: 3,
      },
      {
        id: "4",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/4.jpg",
        author: "Black Pink",
        amount: 156,
        price: 1670,
        category: "fairy tale",
        star: 5,
      },
    ],
  },
  {
    firstname: "Oleksii",
    lastname: "Holodniak",
    phone: "380984545327",
    email: "oleksii@gmail.com",
    country: "ukraine",
    town: "Uzhhorod",
    department: "Nova posta №7",
    comment: "kjhgfds frtghy",
    id: "2",
    orders: [
      {
        id: "1",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/1.jpg",
        author: "Black Pink",
        amount: 10,
        price: 10,
        category: "fairy",
        star: 4,
      },
      {
        id: "2",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/2.jpg",
        author: "Black Pink",
        amount: 11,
        price: 130,
        category: "fairy tile",
        star: 2,
      },
      {
        id: "3",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/3.jpg",
        author: "Black Pink",
        amount: 113,
        price: 190,
        category: "fairy",
        star: 3,
      },
      {
        id: "4",
        title: "Book",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
        image: "/temp/4.jpg",
        author: "Black Pink",
        amount: 156,
        price: 1670,
        category: "fairy tale",
        star: 5,
      },
    ],
  },
];
