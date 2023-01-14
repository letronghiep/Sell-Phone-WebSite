const products = new Product();
const dropdownItems = document.querySelectorAll(".dropdown-item");
products.getProduct();
// products.renderProduct();
showMoreBtn.addEventListener("click", () => {
  products.getProduct();
});
// products.filterProduct();
const inputSearch = document.querySelector(".input-search");
inputSearch.addEventListener("input", function () {
  const value = inputSearch.value;
  // products.remove(products.getProduct)
  products.filterProduct(value);
});
const listDrop = Array.from(dropdownItems);
console.log(listDrop);
listDrop.forEach((item) => {
  item.addEventListener("click", (e) => {
    const value = e.target.textContent;
    console.log(value);
    products.filterProduct(value);
  });
});
