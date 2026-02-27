const id = 1528;
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
    <p>Pris: ${data.price} kr</p> 
    <p>På lager: ${data.soldout}</p> 
    </div>
  `;
}

getData();
