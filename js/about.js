import { getData } from "./request.js";

const queryString = window.location.search;

const query = new URLSearchParams(queryString);
const id = query.get("id");

const discount = document.querySelector(".discount");
const prodImg = document.querySelector(".product-img");
const prodOldPrice = document.querySelector(".old-price");
const prodCurPrice = document.querySelector(".current-price");
const prodTitle = document.querySelector(".title");
const prodRating = document.querySelector(".rating-num");
const btn = document.getElementById("btn");

const updateUI = (prod) => {
  prodImg.src = prod.thumbnail;
  discount.textContent = `- ${prod.discountPercentage}%`;
  prodOldPrice.textContent = `$${prod.price}`;
  prodTitle.textContent = prod.title;
  const curPriceFixed = (prod.price / 100) * (100 - prod.discountPercentage);

  prodCurPrice.textContent = `$${curPriceFixed.toFixed(2)}`;
  prodRating.textContent = prod.rating;
};

getData(`https://dummyjson.com/products/${id}`)
  .then((product) => updateUI(product))
  .catch((error) => console.log(error));
