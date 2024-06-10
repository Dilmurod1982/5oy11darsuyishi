import { getData } from "./request.js";

const tempProduct = document.getElementById("product-template");
const productsCard = document.getElementById("p-wrapper");

const updateUI = (products) => {
  products
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 12)
    .forEach((prod) => {
      const cloneTempProduct = tempProduct.content.cloneNode(true);

      const discount = cloneTempProduct.querySelector(".discount");
      const prodImg = cloneTempProduct.querySelector(".product-img");
      const prodOldPrice = cloneTempProduct.querySelector(".old-price");
      const prodCurPrice = cloneTempProduct.querySelector(".current-price");
      const prodTitle = cloneTempProduct.querySelector(".title");
      const prodRating = cloneTempProduct.querySelector(".rating-num");
      const btn = cloneTempProduct.getElementById("btn");

      prodImg.src = prod.thumbnail;
      discount.textContent = `- ${prod.discountPercentage}%`;
      prodOldPrice.textContent = `$${prod.price}`;
      prodTitle.textContent = prod.title;
      const curPriceFixed =
        (prod.price / 100) * (100 - prod.discountPercentage);

      prodCurPrice.textContent = `$${curPriceFixed.toFixed(2)}`;
      prodRating.textContent = prod.rating;
      btn.href = `./pages/about.html?id=${prod.id}`;

      productsCard.appendChild(cloneTempProduct);
    });
};

getData("https://dummyjson.com/products/?limit=194")
  .then((data) => {
    updateUI(data.products);
  })
  .catch((error) => {
    console.log(error);
  });
