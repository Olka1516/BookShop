import { data } from "~/mocks/orders";

export default defineEventHandler((event) => {
  const id = event.context.params ? event.context.params.id : "0";
  return data[+id - 1];
});
