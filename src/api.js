export const fetchAll = () => {
  return fetch(`https://fakestoreapi.com/products`).then((res) => res.json())
};
