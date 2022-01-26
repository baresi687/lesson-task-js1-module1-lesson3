const products = [
  {
    name: "Fancy Product",
    price: 40,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Cheap Product",
    price: 10,
    soldOut: true,
  },
];

const divContainer = document.querySelector(".container");

let html = "";
for (let i = 0; i < products.length; i++) {
  let prodName = products[i].name;
  let prodPrice = products[i].price ? products[i].price : "Price not available";
  let prodSouldOut = products[i].soldOut;
  console.log(products[i].soldOut);

  html += `
    <div>
    <h5>${prodName}</h5>
    <p>${prodPrice}</p>
    <p>${prodSouldOut}</p>
    </div>
    `;

  if (prodSouldOut) {
    prodName.style.color = "red";
  } else {
    prodName.style.color = "green";
  }
}

divContainer.innerHTML += html;
const divProducts = document.querySelectorAll(".container div");
for (let i = 0; i < divProducts.length; i++) {
  divProducts[i].classList.add("product");
}
