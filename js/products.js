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
  let color = "green";
  color = prodSouldOut ? "red" : color;
  prodSouldOut = prodSouldOut ? "<b>Not in stock</b>" : "<b>in Stock</b>";

  html += `
    <div>
    <h5 style= "color: ${color}" >${prodName}</h5>
    <p>Price: ${prodPrice}</p>
    <p>${prodSouldOut}</p>
    </div>
    `;
}

divContainer.innerHTML += html;

const divProducts = document.querySelectorAll(".container div");
for (let i = 0; i < divProducts.length; i++) {
  divProducts[i].classList.add("product");
}
