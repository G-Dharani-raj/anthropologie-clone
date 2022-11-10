const products = document.querySelector("#products");
const sort_price = document.querySelector("#sort");
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
const init_load = async () => {
	let keyword = localStorage.getItem("selection");
	let res = await fetch(
		`https://damp-journey-38779.herokuapp.com/${keyword}`
	);

	let data = await res.json();

	append(data);
};

const append = (data) => {
	products.innerHTML = "";
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
		products.append(card);
	});
};

init_load();

const all_products = document.querySelector("#all_products");
all_products.onclick = () => {
	localStorage.setItem("selection", "products");
	init_load();
	sort_price.selectedIndex = null;
};

const dress = document.querySelector("#dress");
dress.onclick = () => {
	localStorage.setItem("selection", "dress");
	init_load();
	sort_price.selectedIndex = null;
};

const shoes = document.querySelector("#shoes");
shoes.onclick = () => {
	localStorage.setItem("selection", "shoes");
	init_load();
	sort_price.selectedIndex = null;
};

const clothing = document.querySelector("#clothing");
clothing.onclick = () => {
	localStorage.setItem("selection", "clothing");
	init_load();
	sort_price.selectedIndex = null;
};

sort_price.onchange = () => {
	let value = sort_price.value;
	sort_fn(value);
};

const sort_fn = async (value) => {
	let current_selection = localStorage.getItem("selection");
	let res = await fetch(
		`https://damp-journey-38779.herokuapp.com/${current_selection}?_sort=price&_order=${value}`
	);
	let data = await res.json();
	append(data);
};

const details = (element) => {
	localStorage.setItem("selected_product", JSON.stringify(element));
	window.location = "full_details.html";
};
const add_to_cart = (element) => {
	cart_items.push([element, 1]);
	localStorage.setItem("cart_items", JSON.stringify(cart_items));
};
