export const fetchAll = () => {
  return fetch(`https://fakestoreapi.com/products`).then((res) => res.json());
};
export const fetchJewels = () => {
  return fetch(`https://fakestoreapi.com/products/category/jewelery`).then(
    (res) => res.json()
  );
};
export const fetchElex = () => {
  return fetch(`https://fakestoreapi.com/products/category/electronics`).then(
    (res) => res.json()
  );
};
export const fetchMens = () => {
  return fetch(
    `https://fakestoreapi.com/products/category/men's%20clothing`
  ).then((res) => res.json());
};
export const fetchWomens = () => {
  return fetch(
    `https://fakestoreapi.com/products/category/women's%20clothing`
  ).then((res) => res.json());
};
