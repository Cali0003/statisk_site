const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

const listContainer = document.querySelector("main");

const fetchUrl = myCategory
  ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}`
  : "https://kea-alt-del.dk/t7/api/products";

function getProducts() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((products) => showProducts(products));
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <div class="product-card">
        <span class="sale-badge">${product.discount}</span>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
        <h2>${product.productdisplayname}</h2>
        <h3>${product.brandname}</h3>
        <p>${product.price} kr</p>
        <a href="product.html?id=${product.id}" class="knap">Se mere</a>
      </div>
    `;
  });
}

getProducts();
