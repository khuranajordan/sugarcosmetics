import { header } from "./header.js";
let nav_div = document.getElementById("nav_id");
nav_div.innerHTML = header();

let searchBar = document.getElementById("searchParam");
document.getElementById("search-btn").addEventListener("click", async () => {
  let searchParam = searchBar.value;
  localStorage.setItem("search_term", searchParam);

  location.href = "product.html";
});
