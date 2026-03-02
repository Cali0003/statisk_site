const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("hej", id);

const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
    <div>
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Produktbillede">
    </div>

    <div class="product-text">
    <h2>${data.productdisplayname}</h2>
    <p>${data.price} kr</p> 
    <p>Lagerstatus: ${data.soldout}</p> 
    <a href="product.html" class="knap_buy">Køb nu</a>
    </div>
  `;
}

getData();
