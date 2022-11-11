// Code here
import { navbar } from "/components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "/components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();
/* added functionality to sign in sign up */
document.querySelector("#right").addEventListener("click", code);
document.querySelector("#emailid").addEventListener("click", code);
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
	.addEventListener("click", signinnumberprocess);
document
	.querySelector("#signinbuttonemail")
	.addEventListener("click", signinemailprocess);
document
	.querySelector("#nextsignuppage")
	.addEventListener("click", userdetails);
let signemail = document.getElementById("signin_signup_form");
let signnumber = document.getElementById("signinnumber");
let signup = document.getElementById("signuppage");
let signinemails = document.getElementById("signinemailpage");
let signinnumbers = document.getElementById("signinnumberpage");
let container1 = document.getElementById("container");
function code() {
	footer_div.style.display = "none";
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
	footer_div.style.display = "none";
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
	footer_div.style.display = "none";
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
	footer_div.style.display = "none";
	container1.style.position = "sticky";
	container1.style.overflow = "hidden";
	container1.style.filter = "blur(1px)";
	signemail.style.display = "none";
	signnumber.style.display = "none";
	signup.style.display = "none";
	signinemails.style.display = "block";
	signinnumbers.style.display = "none";
}
function signinnumber() {
	footer_div.style.display = "none";
	container1.style.position = "sticky";
	container1.style.overflow = "hidden";
	container1.style.filter = "blur(1px)";
	signemail.style.display = "none";
	signnumber.style.display = "none";
	signup.style.display = "none";
	signinemails.style.display = "none";
	signinnumbers.style.display = "block";
}
function userdetails() {}
function signinemailprocess() {}
function signinnumberprocess() {}
/*adding functionality end */
// >>>>>>> a4c56bca597b2bbd11e0d2c2b268a7571ca92d72

// slider functionality
let data = [
	{
		id: 1,
		name: "The Marais Chiffon Maxi Dress: Shine Edition",
		price: 220,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130916210121_048_b14?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130916210121_048_b2?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 2,
		name: "By Anthropologie Plissé Halter Dress",
		price: 220,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130370060100_096_b?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130370060100_096_b2?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 3,
		name: "The Somerset Maxi Dress: Velvet Edition",
		price: 180,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130916210109_038_b16?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130916210109_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 4,
		name: "By Anthropologie Mock-Neck Velvet Mini Dress",
		price: 180,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130370060103_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130370060103_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 5,
		name: "The Somerset Maxi Dress",
		price: 170,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130370060072_046_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130370060072_046_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 6,
		name: "The Marais Printed Chiffon Maxi Dress",
		price: 180,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_018_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 7,
		name: "By Anthropologie Ruffled Tunic Dress",
		price: 148,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130264840021_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130264840021_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 8,
		name: "Dhruv Kapoor Smocked Dress",
		price: 198,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130615360010_060_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130615360010_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 9,
		name: "Hutch Velvet Wrap Dress",
		price: 198,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130464030202_074_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130464030202_074_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 10,
		name: "Verb by Pallavi Singhee Smocked Corset Dress",
		price: 298,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
];
let data2 = [
	{
		id: 1,
		name: "Tiled Margot Monogram Mug",
		category: "home",
		image: "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b2?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 2,
		name: "Bundled Up Monogram Mug",
		category: "home",
		image: "https://images.urbndata.com/is/image/Anthropologie/63711766_000_b10?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/63711766_000_b2?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 3,
		name: "Capri Blue Volcano Gold Jar Candle",
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/76124908_014_a?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/76124908_014_b2?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 4,
		name: "Snowcap Reactive-Glazed Monogram Mug",
		image: "https://images.urbndata.com/is/image/Anthropologie/69568343_901_b15?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/69568343_901_b10?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 5,
		name: "Capri Blue Capiz Jar Candle",
		price: 170,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b14?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 6,
		name: "The Marais Printed Chiffon Maxi Dress",
		price: 180,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_018_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130916210042_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 7,
		name: "By Anthropologie Ruffled Tunic Dress",
		price: 148,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130264840021_009_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130264840021_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
	{
		id: 8,
		name: "Bundled Up Monogram Mug",
		category: "home",
		image: "https://images.urbndata.com/is/image/Anthropologie/63711766_000_b10?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/63711766_000_b2?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 9,
		name: "Snowglobe Candle",
		price: 198,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/78149390_037_b14?$an-category$&qlt=80&fit=constrain",
		image2: "https://images.urbndata.com/is/image/Anthropologie/78149390_037_b10?$an-category$&qlt=80&fit=constrain",
	},
	{
		id: 10,
		name: "Verb by Pallavi Singhee Smocked Corset Dress",
		price: 298,
		category: "dress",
		image: "https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
		image2: "https://images.urbndata.com/is/image/Anthropologie/4130456940045_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
	},
];

const slider = (data, where) => {
	data.forEach((element) => {
		let div = document.createElement("div");

		let img = document.createElement("img");
		img.src = element.image;

		let p = document.createElement("p");
		p.innerText = element.name;

		div.append(img, p);
		div.onmouseover = () => {
			img.src = element.image2;
			p.style.color = "#167A92";
		};
		div.onmouseout = () => {
			img.src = element.image;
			p.style.color = "gray";
		};

		where.append(div);
	});
};

slider(data, document.getElementById("sliderAlsoLike"));
slider(data2, document.getElementById("sliderViewed"));

//slider functionality ends here!

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
const cart = document.querySelector("#cart-navbar-btn");
cart.onclick = () => {
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
