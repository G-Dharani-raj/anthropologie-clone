import { navbar } from "/components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

function shippingList(
	email,
	country,
	firstName,
	lastName,
	address1,
	address2,
	cityName,
	region,
	postcode,
	mobileNumber
) {
	this.email = email;
	this.country = country;
	this.firstName = firstName;
	this.lastName = lastName;
	this.address1 = address1;
	this.address2 = address2;
	this.cityName = cityName;
	this.region = region;
	this.postcode = postcode;
	this.mobileNumber = mobileNumber;
}

function getData() {
	let email = document.getElementById("email").value;
	let country = document.getElementById("country").value;
	let firstName = document.getElementById("first_name").value;
	let lastName = document.getElementById("last_name").value;
	let address1 = document.getElementById("address1").value;
	let address2 = document.getElementById("address2").value;
	let cityName = document.getElementById("city_name").value;
	let region = document.getElementById("region").value;
	let postcode = document.getElementById("postcode").value;
	let mobileNumber = document.getElementById("mobile_number").value;

	addList(
		email,
		country,
		firstName,
		lastName,
		address1,
		address2,
		cityName,
		region,
		postcode,
		mobileNumber
	);
}
let customerData = JSON.parse(localStorage.getItem("customer_data")) || [];
function addList(
	email,
	country,
	firstName,
	lastName,
	address1,
	address2,
	cityName,
	region,
	postcode,
	mobileNumber
) {
	let data = new shippingList(
		email,
		country,
		firstName,
		lastName,
		address1,
		address2,
		cityName,
		region,
		postcode,
		mobileNumber
	);
	customerData.push(data);
	localStorage.setItem("customer_data", JSON.stringify(customerData));
}

document
	.getElementById("shipButton")
	.addEventListener("click", function (event) {
		event.preventDefault();
		getData();
		window.location = "payment.html";
	});

// product data

let productData = Number(localStorage.getItem("subtotal")) || 0;

document.getElementById("subtotal").innerText = productData;
document.getElementById("shippingCharge").innerText = "100";
document.getElementById("tax").innerText = "18%";
document.getElementById("total").innerText =
	productData + productData * 0.18 + 100;

document.getElementById("promoCode").addEventListener("click", createButton);
function createButton(event) {
	event.preventDefault();

	let input = document.createElement("input");
	input.setAttribute("id", "promo");

	let btn = document.createElement("button");
	btn.innerText = "Apply Code";
	btn.setAttribute("id", "promoButton");

	div.append(input, btn);
	document
		.getElementById("promoButton")
		.addEventListener("click", checkPromo);
}

let count = 0;

function checkPromo(e) {
	e.preventDefault();

	let promo = document.getElementById("promo").value;
	count++;
	if (count == 1 && promo == "wostyle20") {
		subtotal = subtotal * 0.2;
		document.getElementById("subtotal").innerText = subtotal;
	} else if (count > 1 && promo != "wostyle20") {
		alert("Promo code is not applicable");
	} else if (count > 1 && promo == "wostyle20") {
		alert("Promo code already applied");
	}
}

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
