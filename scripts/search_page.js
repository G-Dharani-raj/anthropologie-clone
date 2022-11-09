const search_bar = document.querySelector("#search_bar");
const search = document.querySelector("#category_select");
const results = document.querySelector("#results");
const sorting = document.querySelector("#sort_price");
let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let timeout;
search.onchange = () => {
	debounce();
};
sorting.onchange = () => {
	debounce();
};
const search_products = async () => {
	let search_term = document.querySelector("#search_bar").value;
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
	append(data);
	sorting.selectedIndex = null;
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
