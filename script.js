const form = document.querySelector("#billForm");
const servInput = document.querySelector("#service");
const pricInput = document.querySelector("#price");
const ul = document.querySelector("#bill-list");
let totalChanged = 0;

function totalValAdd(value) {
  parsed = Number(value);
  // console.log(totalChanged, parsed);
  totalChanged += parsed;

  console.log(totalChanged);
  document.getElementById("total-spent").innerHTML = totalChanged;
}

function totalValSub(value) {
  console.log(value.querySelector("#price").innerHTML);
  // console.log(value);
  parsed = Number(value.querySelector("#price").innerHTML);
  // console.log(totalChanged, parsed);
  totalChanged -= parsed;

  console.log(totalChanged);
  document.getElementById("total-spent").innerHTML = totalChanged;
}

function onreset() {}

function createLi() {
  const div = document.createElement("div");
  div.className = "bill-element";
  const servSpan = document.createElement("span");
  servSpan.className = "Service";
  servSpan.textContent = servInput.value;
  const pricSpan = document.createElement("span");
  pricSpan.className = "Price";
  pricSpan.setAttribute("id", "price");
  pricSpan.textContent = pricInput.value;
  pricSpan.setAttribute("value", pricInput.value);
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "REMOVE";
  removeBtn.setAttribute(
    "onclick",
    "totalValSub(this.parentElement); deleteDiv(this);"
  );
  removeBtn.setAttribute("class", "remove-btn");

  div.appendChild(servSpan);
  div.appendChild(pricSpan);
  div.appendChild(removeBtn);

  return div;
}

function deleteDiv(e) {
  e.parentElement.remove();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const listelement = createLi();
  // console.log(listelement);
  ul.appendChild(listelement);
  totalValAdd(pricInput.value);

  const inputs = document.querySelectorAll("#service, #price");

  inputs.forEach((input) => {
    input.value = "";
  });
});

form.addEventListener("reset", (event) => {
  event.preventDefault();

  document.getElementById("bill-list").innerHTML = "";
  document.getElementById("total-spent").innerHTML = 0;
});

// this.getElementById('Price').innerHTML
