//import navbar and footer

import { navbar } from "/components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "/components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

// Done importing

const search_bar = document.querySelector("#search-box");
const search = document.querySelector("#category_select");
const results = document.querySelector("#results");
const sorting = document.querySelector("#sort_price");
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let timeout;
let init_query = localStorage.getItem("query");

search.onchange = () => {
	debounce();
};
sorting.onchange = () => {
	debounce();
};

const search_products = async () => {
	let search_term = document.querySelector("#search-box").value;
	if (init_query) {
		search_term = init_query;
		console.log(search_term, `first`);
		localStorage.setItem("query", null);
		init_query = null;
	} else if (init_query == null) {
		console.log(search_term, "second");
	}
	let search_category =
		document.querySelector("#category_select").value || "products";
	document.querySelector(
		"#current_category"
	).innerText = `Searching in ${search_category}`;
	let sort_select = sorting.value || "asc";
	let res = await fetch(
		`https://damp-journey-38779.herokuapp.com/${search_category}?name_like=${search_term}&_sort=price&_order=${sort_select}`
	);

	let data = await res.json();
	// console.log(data);
	if (data.length > 0) {
		append(data);
		sorting.selectedIndex = null;
	} else {
		results.innerText = "No results found";
	}
};

const append = (data) => {
	results.innerHTML = "";
	data.forEach((element) => {
		let card = document.createElement("div");
		card.setAttribute("class", "card");

		let image = document.createElement("img");
		image.src = element.image;
		image.onclick = () => {
			details(element);
		};

		let name = document.createElement("p");
		name.innerText = element.name;

		let price = document.createElement("p");
		price.innerText = `$${element.price}.0`;

		let cart_btn = document.createElement("button");
		cart_btn.innerText = "Add to cart";
		cart_btn.setAttribute("class", "cart_btn");
		cart_btn.onclick = () => {
			add_to_cart(element);
		};

		card.append(image, name, price, cart_btn);
		// card.onclick = () => {
		// 	details(element);
		// };
		results.append(card);
	});
};

const debounce = () => {
	if (timeout) {
		timeout = clearTimeout(timeout);
	}
	timeout = setTimeout(() => {
		search_products();
	}, 800);
};

search_bar.oninput = () => {
	debounce();
};
search_products();
const all_products = document.querySelector("#all_products");
all_products.onclick = () => {
	localStorage.setItem("selection", "products");
	window.location = "all_products.html";
};

const dress = document.querySelector("#dress");
dress.onclick = () => {
	localStorage.setItem("selection", "dress");
	window.location = "all_products.html";
};

const shoes = document.querySelector("#shoes");
shoes.onclick = () => {
	localStorage.setItem("selection", "shoes");
	window.location = "all_products.html";
};

const clothing = document.querySelector("#clothing");
clothing.onclick = () => {
	localStorage.setItem("selection", "clothing");
	window.location = "all_products.html";
};

const add_to_cart = (element) => {
	cart_items.push([element, 1]);
	localStorage.setItem("cart_items", JSON.stringify(cart_items));
};

const details = (element) => {
	localStorage.setItem("selected_product", JSON.stringify(element));
	window.location = "full_details.html";
};

// Switching between pages

const products_cat = document.querySelector("#products_cat");

products_cat.onclick = () => {
	localStorage.setItem("selection", "products");
	window.location = "all_products.html";
};

const dress_cat = document.querySelector("#dress_cat");

dress_cat.onclick = () => {
	localStorage.setItem("selection", "dress");
	window.location = "all_products.html";
};

const clothing_cat = document.querySelector("#clothing_cat");

clothing_cat.onclick = () => {
	localStorage.setItem("selection", "clothing");
	window.location = "all_products.html";
};

const shoes_cat = document.querySelector("#shoes_cat");

shoes_cat.onclick = () => {
	localStorage.setItem("selection", "shoes");
	window.location = "all_products.html";
};

const cart_navbar_btn = document.querySelector("#cart-navbar-btn");
cart_navbar_btn.onclick = () => {
	window.location = "cart.html";
};
//Page switching ends
