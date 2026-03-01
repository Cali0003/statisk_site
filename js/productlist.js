const listURL = "https://kea-alt-del.dk/t7/api/products?limit=12";
const listContainer = document.querySelector("main");

function getProducts() {
  fetch(listURL).then((res) =>
    res.json().then((products) => showProducts(products)),
  );
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
    
  
       <div class="product-card">
                    <span class="sale-badge">${product.discount}</span>
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                    <h2 class="h1_card">${product.productdisplayname}</h2>
                    <h3>${product.brandname}</h3>
                    <p>${product.price} kr</p>
                    <a href="product.html" class="knap">Se mere</a>
                </div>
    `;
  });
}

getProducts();
