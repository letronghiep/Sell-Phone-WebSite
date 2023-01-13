const products = new Product();
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
