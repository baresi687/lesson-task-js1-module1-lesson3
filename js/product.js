const product = {
  name: "Fancy Product",
  price: 99,
  onSale: true,
};

const container = document.querySelector(".container");

let prodName = product.name;
let prodPrice = product.price;
let prodSale = product.onSale;
let underLine = prodSale ? "underline" : "none";

container.innerHTML = `
<div>
<h4 style="text-decoration: ${underLine}">${prodName}</h4>
<p>${prodPrice}</p>
<p>${prodSale}</p>
</div>
`;

const divContent = document.querySelector(".container div");
divContent.classList.add("product");
console.log(divContent);
