//import navbar and footer

import { navbar } from "/components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "/components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

// Done importing

let initial_cart = JSON.parse(localStorage.getItem("cart_items")) || [];

const cart_display = (cart_items) => {
	let cart_total = 0;
	document.getElementById("cart").innerHTML = "";
	cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
	if (cart_items.length == 0) {
		console.log("cart empty");
		let msg = document.createElement("h1");
		msg.innerText = "Your Cart is empty";
		document.getElementById("cart").append(msg);
		document.getElementById("cart_total").innerText = cart_total;
		return;
	}

	cart_items.forEach((element, index) => {
		let quantity = element[1];
		let product = element[0];

		let card = document.createElement("div");
		card.setAttribute("class", "card");

		let image = document.createElement("img");
		image.src = product.image;
		image.onclick = () => {
			details(product);
		};

		let name = document.createElement("p");
		name.innerText = product.name;

		let price = document.createElement("p");
		price.innerText = `$${product.price}.0`;

		let quantity_order = document.createElement("p");
		quantity_order.innerText = `x${quantity}`;

		let total_price = document.createElement("p");
		total_price.innerText = `Total amount = $${quantity * product.price}.0`;
		cart_total += quantity * product.price;
		let remove_btn = document.createElement("button");
		remove_btn.innerText = "Remove from cart";
		remove_btn.onclick = () => {
			remove_item(element, index);
		};

		card.append(
			image,
			name,
			price,
			quantity_order,
			total_price,
			remove_btn
		);

		document.querySelector("#cart").append(card);
	});
	document.getElementById("cart_total").innerText = cart_total;
};

cart_display(initial_cart);

const remove_item = (element, index) => {
	let quantity_available = element[1];
	if (quantity_available == 1) {
		initial_cart.splice(index, 1);
		localStorage.setItem("cart_items", JSON.stringify(initial_cart));
		cart_display(initial_cart);
	} else {
		for (let i = 0; i < initial_cart.length; i++) {
			if (i == index) {
				quantity_available--;
				initial_cart[i][1] = quantity_available;
				localStorage.setItem(
					"cart_items",
					JSON.stringify(initial_cart)
				);
				cart_display(initial_cart);
			}
		}
	}
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

//search redirect

const search_bar = document.querySelector("#search-box");

search_bar.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		localStorage.setItem("query", search_bar.value);
		window.location = "search_page.html";
	}
});
