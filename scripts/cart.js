//import navbar and footer

import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";

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

		let category = document.createElement("p");
		category.innerText = product.category;

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
			category,
			quantity_order,
			total_price,
			remove_btn
		);

		document.querySelector("#cart").append(card);
	});
	document.getElementById("cart_total").innerText = cart_total;
	localStorage.setItem("subtotal", cart_total);
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
/* added functionality to sign in sign up */

document.querySelector("#right").addEventListener("click", code);
document.querySelector("#emailid").addEventListener("click", code);
document.querySelector("#emailid1").addEventListener("click", code);
document.querySelector("#signupsignin").addEventListener("click", code);
document.querySelector("#mobilenumber").addEventListener("click", numbersignin);
document
	.querySelector("#mobilenumber1")
	.addEventListener("click", numbersignin);
document
	.querySelector("#createanaccount")
	.addEventListener("click", signuppage);
document
	.querySelector("#createanaccount1")
	.addEventListener("click", signuppage);
document.querySelector("#nextemail").addEventListener("click", signinemail);
document
	.querySelector("#nextmobilenumber")
	.addEventListener("click", signinnumber);
document
	.querySelector("#signinbuttonnumber")
	.addEventListener("click", signinbuttonnumber);
document
	.querySelector("#signinbuttonemail")
	.addEventListener("click", signinbuttonemail);
document
	.querySelector("#nextsignuppage")
	.addEventListener("click", userdetails);
let signemail = document.getElementById("signin_signup_form");
let signnumber = document.getElementById("signinnumber");
let signup = document.getElementById("signuppage");
let signinemails = document.getElementById("signinemailpage");
let signinnumbers = document.getElementById("signinnumberpage");
let container1 = document.getElementById("cart");

/*deleted console.log */

/* delete console.log */
function code() {
	/* removed footer_div */

	container1.style.position = "sticky";
	container1.style.overflow = "hidden";
	container1.style.filter = "blur(1px)";
	signemail.style.display = "block";
	signnumber.style.display = "none";
	signup.style.display = "none";
	signinemails.style.display = "none";
	signinnumbers.style.display = "none";
}
function numbersignin() {
	/* removed footer_div */

	container1.style.position = "sticky";
	container1.style.overflow = "hidden";
	container1.style.filter = "blur(1px)";
	signemail.style.display = "none";
	signnumber.style.display = "block";
	signup.style.display = "none";
	signinemails.style.display = "none";
	signinnumbers.style.display = "none";
}

function signuppage() {
	/* removed footer_div */

	container1.style.position = "sticky";
	container1.style.overflow = "hidden";
	container1.style.filter = "blur(1px)";
	signemail.style.display = "none";
	signnumber.style.display = "none";
	signup.style.display = "block";
	signinemails.style.display = "none";
	signinnumbers.style.display = "none";
}

function signinemail() {
	/* added new userdata useremail */
	let userdata = JSON.parse(localStorage.getItem("userdata"));
	let useremail = userdata[0]["email"];

	if (document.getElementById("emailsignin").value == useremail) {
		/* removed footer_div */

		container1.style.position = "sticky";
		container1.style.overflow = "hidden";
		container1.style.filter = "blur(1px)";
		signemail.style.display = "none";
		signnumber.style.display = "none";
		signup.style.display = "none";
		signinemails.style.display = "block";
		signinnumbers.style.display = "none";
	} else {
		document.getElementById("signinemail").innerText =
			"Enter correct email";
		document.getElementById("signinemail").style.color = "red";
		document.getElementById("emailsignin").style.borderColor = "red";
	}
}
function signinnumber() {
	/* added new userdata usernumber */
	let userdata = JSON.parse(localStorage.getItem("userdata"));
	let usernumber = userdata[0]["mobile"];
	if (document.getElementById("enternumbersignin").value == usernumber) {
		/* removed footer_div */

		container1.style.position = "sticky";
		container1.style.overflow = "hidden";
		container1.style.filter = "blur(1px)";
		signemail.style.display = "none";
		signnumber.style.display = "none";
		signup.style.display = "none";
		signinemails.style.display = "none";
		signinnumbers.style.display = "block";
	} else {
		document.getElementById("numbersignin").innerText =
			"Enter correct number";
		document.getElementById("numbersignin").style.color = "red";
		document.getElementById("enternumbersignin").style.borderColor = "red";
	}
} /* updated below functionality */
function userdetails() {
	/* added arr variable */
	let arr = JSON.parse(localStorage.getItem("userdata")) || [];
	const reg_form = document.getElementById("signupform1");
	const emails = reg_form.emailsignup.value;
	const usernames = reg_form.namesignup.value;
	const mobiles = reg_form.mobilenumbersignup.value;
	const passwords = reg_form.passwordsignup.value;
	if (
		emails == emails.includes("@") ||
		usernames == "" ||
		mobiles == "" ||
		passwords == ""
	) {
		alert("sign Up unsuccessfull please enter details again");
	} else {
		let obj = {
			email: emails,
			username: usernames,
			mobile: mobiles,
			password: passwords,
		};
		arr.push(obj);
		localStorage.setItem("userdata", JSON.stringify(arr));
		alert("Sign Up successfully press sign in below button ");
	}
}
function signinbuttonemail() {
	/* added new userdata userpassword */
	let userdata = JSON.parse(localStorage.getItem("userdata"));
	let userpassword = userdata[0]["password"];

	if (document.getElementById("emailsigninpassword").value == userpassword) {
		alert("Sign in successfull");
		window.location = "userdashboard.html";
	} else {
		document.getElementById("emailsigninpassword").style.borderColor =
			"red";
		document.getElementById("emailsigninp").style.color = "red";
		document.getElementById("emailsigninp").innerText =
			"Enter correct password";
	}
}
function signinbuttonnumber() {
	/* added new userdata userpassword */
	let userdata = JSON.parse(localStorage.getItem("userdata"));
	let userpassword = userdata[0]["password"];

	if (
		document.getElementById("entersigninnumberpassword").value ==
		userpassword
	) {
		alert("Sign in successfull");
		window.location = "useddashboard.html";
	} else {
		document.getElementById("entersigninnumberpassword").style.borderColor =
			"red";
		document.getElementById("numbersigninp").innerText =
			"Enter corret password";
		document.getElementById("numbersigninp").style.color = "red";
	}
}
/* modify added updated data */
const success = JSON.parse(localStorage.getItem("signin"));
const nameshow = JSON.parse(localStorage.getItem("userdata"));
if (success == "successfull") {
	document.getElementById("anchor_a").href = "userdashboard.html";
	document.getElementById("signin").innerText = "";
	document.getElementById("right").innerHTML = "";
	let path = document.getElementById("right");
	let img = document.createElement("img");
	img.setAttribute(
		"src",
		"https://www.lifewatch.eu/wp-content/uploads/2021/07/user-icon.svg"
	);
	img.style.width = "8%";
	img.style.pointerEvents = "none";
	let div1 = document.createElement("div");
	div1.setAttribute("class", "dropdown");
	div1.style.paddingTop = "0px";
	let a = document.createElement("a");
	a.setAttribute("href", "userdashboard.html");
	a.setAttribute("class", "dropdownbtn");
	a.innerText = nameshow[0]["username"];
	a.style.textDecoration = "none";
	a.style.fontSize = "14px";
	a.style.color = "#167a92";
	let div2 = document.createElement("div");
	div2.setAttribute("class", "dropdown-content");
	div2.style.visibility = "visible";
	let a1 = document.createElement("a");
	a1.setAttribute("href", "userdashboard.hmtl");
	a1.innerText = "Dashboard";
	let a2 = document.createElement("a");
	a2.setAttribute("href", "index.html");
	a2.setAttribute("id", "leavesignin");
	a2.innerText = "signout";
	div2.append(a1, a2);
	div1.append(a, div2);
	path.append(img, div1);
} else {
	document.getElementById("anchor_a").href = "index.html";
}
document.querySelector("leavesignin").addEventListener("click", coder);
function coder() {
	alert("sign out successfull");
	localStorage.setItem("signin", JSON.stringify("unsuccessfull"));
	window.location = "index.html";
}
/* modify added updated data */

/*adding functionality end */
