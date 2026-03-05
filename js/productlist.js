const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

const listContainer = document.querySelector(".product_list_container");

// min tilføjede knap
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");
// nye knapper til filtrering af køn
const filterWomenBtn = document.querySelector("#filterWomenBtn");
const showAllBtn = document.querySelector("#showAllBtn");

const fetchUrl = myCategory
  ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}`
  : "https://kea-alt-del.dk/t7/api/products";

function getProducts() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((products) => {
      //gemmer alle produkter i allProducts
      allProducts = products;
      showProducts(products);
    });
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <div class="product-card">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
        <h2>${product.productdisplayname}</h2>
        <h3>${product.brandname}</h3>
        <p>${product.price} kr</p>
        <a href="product.html?id=${product.id}" class="knap">Se mere</a>
      </div>
    `;
  });
}

// funktion der sorterer prisen, og listener på click til at sortere
function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}
// ny funktion der filtrerer køn
function filterByGender(targetGender) {
  const filtered = allProducts.filter(
    (product) =>
      (product.gender || "").toLowerCase() === targetGender.toLowerCase(),
  );
  showProducts(filtered);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);
// ny eventlistener der gør at knapperne virker med funktionen
filterWomenBtn.addEventListener("click", () => filterByGender("Women"));
showAllBtn.addEventListener("click", () => showProducts(allProducts));

getProducts();
