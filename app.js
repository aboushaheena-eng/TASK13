// const products =[
//   {name:"Espresso" ,price:45},
//     {name:"Latte" ,price:65},
//     {name:"Croissant" ,price:40},
// ] ;
// ///
// const selectElement = document.getElementById("product");
// products.forEach(product => {
//   const option = document.createElement("option");

//   option.value = product.name.toLowerCase();
//   option.textContent = `${product.name} - ${product.price} EGP`;
//    selectElement.appendChild(option);
// });

////
const form = document.getElementById("form-order");
/// select quatity
const inputQuantity = document.getElementById("Quantity");
const errorQuantity = document.getElementById("error-quantity");
const equantity = inputQuantity.value;
//// showorder

const showOrder = document.getElementById("order-show");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.getElementById("name");
  const errorName = document.getElementById("error-name");
  const ename = inputName.value.trim();

  if (ename === "" || ename.length < 3) {
    errorName.innerText =
      "the name is required and must be at least 3 characters";
    errorName.classList.add("fail");
  } else {
    errorName.innerText = "";
    errorName.classList.remove("fail");
  }
  ///select phone
  const inputPhone = document.getElementById("phone");
  const errorPhone = document.getElementById("error-phone");
  const ephone = inputPhone.value;
  const phonePattern = /^01\d{9}$/;
  if (!phonePattern.test(ephone)) {
    errorPhone.innerText = "the phone must be 11 digits and strart 01";
    errorPhone.classList.add("fail");
  } else {
    errorPhone.innerText = "";
    errorPhone.classList.remove("fail");
  }
  /// select product
  const selectProduct = document.getElementById("product");
  const errorProduct = document.getElementById("error-product");
  const productOption = selectProduct.options[selectProduct.selectedIndex];
  const productName = selectProduct.value;
  console.log(selectProduct.options);
  const product = form.elements.product.value;

  if (product === "") {
    errorProduct.innerText = "you msut be select a productName please";
    errorProduct.classList.add("fail");
    return;
  }
  errorProduct.innerText = "";
  errorProduct.classList.remove("fail");

  const equantity = form.elements.Quantity.value;
  if (equantity < 1 || equantity > 10) {
    errorQuantity.innerText = "Quantity must be between 1 and 10.";
    errorQuantity.classList.add("fail");
    return;
  }
  errorQuantity.innerText = "";
  errorQuantity.classList.remove("fail");

  const Price = parseFloat(productOption.getAttribute("price"));

  let total = Price * equantity;

  if (equantity >= 3) {
    total *= 0.9;
  }

  const delivery_text = total > 200 ? "🎁 Free delivery included!" : "";

  showOrder.innerText = `Name:         ${ename}
      Phone:        ${ephone}
      productName:   ${productName} × ${equantity}
                            total ${total}
                            ${delivery_text}`;

  form.reset();
});
