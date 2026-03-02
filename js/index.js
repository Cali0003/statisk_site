const listContainer = document.querySelector(".card-container");

const fetchUrl = `https://kea-alt-del.dk/t7/api/categories`;

function getCategories() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((category) => showCategories(category));
}

function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `
      
            <a href="productlist.html?category=${category.category}" class="card-forside">
                <h3>${category.category}</h3>
            </a>
    `;
  });
}

getCategories();
