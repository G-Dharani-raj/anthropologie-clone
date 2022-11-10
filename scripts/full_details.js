//import navbar and footer

import { navbar } from "/components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "/components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

// Done importing

let selected_product = JSON.parse(localStorage.getItem("selected_product"));
const display_image = document.querySelector("#product_image");
const details = document.querySelector("#details");

let cart = JSON.parse(localStorage.getItem("cart_items")) || [];

const display_product = () => {
	let image = document.createElement("img");
	image.src = selected_product.image;

	display_image.append(image);

	let h1 = document.createElement("h1");
	h1.innerText = selected_product.name;

	let manufacturer = document.createElement("a");
	manufacturer.href = "";
	manufacturer.innerText = "By Anthropologie";

	let rating = document.createElement("p");
	let rating_value = Math.floor(Math.random() * 5 + 1);

	rating.innerText = `${rating_value}.0/5.0`;

	let price = document.createElement("p");
	price.style.fontSize = "20px";
	price.innerText = `$${selected_product.price}.0`;

	let fit = document.createElement("p");
	fit.style.fontSize = "15px";
	fit.innerText = "Fit*";

	let fit_div = document.createElement("div");
	let fit_size = document.createElement("p");
	fit_size.innerText = "Standard";

	fit_div.append(fit_size);

	let select_tag = document.createElement("select");
	select_tag.innerHTML = `<option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>`;
	select_tag.setAttribute("id", "amount_of_products");
	let basket_btn = document.createElement("button");
	basket_btn.innerText = "ADD TO BASKET";
	basket_btn.onclick = () => {
		add_to_cart(selected_product);
	};

	details.append(
		h1,
		manufacturer,
		rating,
		price,
		fit,
		fit_div,
		select_tag,
		basket_btn
	);
};
display_product();

const add_to_cart = () => {
	let quantity = document.querySelector("#amount_of_products").value;
	cart.push([selected_product, Number(quantity)]);
	localStorage.setItem("cart_items", JSON.stringify(cart));
	alert(`${selected_product.name} x${quantity} Have Been Added To Cart`);
};

// side bar recommendations only images
const recommendations = document.querySelector("#recommendations");

const load_recommendations = async () => {
	let array = new Array(5);
	for (let i = 0; i < 5; i++) {
		array[i] = Math.floor(Math.random() * 45 + 1);
	}
	let res = await fetch(
		`https://damp-journey-38779.herokuapp.com/products?id=${array[0]}&id=${array[1]}&id=${array[2]}&id=${array[3]}&id=${array[4]}`
	);

	let data = await res.json();

	data.forEach((element) => {
		let card = document.createElement("div");

		let image = document.createElement("img");
		image.src = element.image;

		card.append(image);
		card.onclick = () => {
			full_details(element);
		};

		recommendations.append(card);
	});
};

load_recommendations();

const trending = document.querySelector("#trending_tab");

const load_trending = async () => {
	let array = new Array(5);
	for (let i = 0; i < 5; i++) {
		array[i] = Math.floor(Math.random() * 45 + 1);
	}
	let res = await fetch(
		`https://damp-journey-38779.herokuapp.com/products?id=${array[0]}&id=${array[1]}&id=${array[2]}&id=${array[3]}&id=${array[4]}`
	);

	let data = await res.json();

	data.forEach((element) => {
		let card = document.createElement("div");

		let image = document.createElement("img");
		image.src = element.image;

		let price = document.createElement("p");
		price.innerText = `$${element.price}.0`;

		let name = document.createElement("p");
		name.innerText = element.name;

		card.append(image, name, price);

		card.onclick = () => {
			full_details(element);
		};

		trending.append(card);
	});
};

load_trending();

const full_details = (element) => {
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
