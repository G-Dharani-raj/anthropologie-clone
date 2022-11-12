//import navbar and footer

import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";

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

/* added functionality to sign in sign up */


document.querySelector("#right").addEventListener("click",code)
document.querySelector("#emailid").addEventListener("click",code)
document.querySelector("#emailid1").addEventListener("click",code)
document.querySelector("#signupsignin").addEventListener("click",code)
document.querySelector("#mobilenumber").addEventListener("click",numbersignin)
document.querySelector("#mobilenumber1").addEventListener("click",numbersignin)
document.querySelector("#createanaccount").addEventListener("click",signuppage)
document.querySelector("#createanaccount1").addEventListener("click",signuppage)
document.querySelector("#nextemail").addEventListener("click",signinemail)
document.querySelector("#nextmobilenumber").addEventListener("click",signinnumber)
document.querySelector("#signinbuttonnumber").addEventListener("click",signinbuttonnumber)
document.querySelector("#signinbuttonemail").addEventListener("click",signinbuttonemail)
document.querySelector("#nextsignuppage").addEventListener("click",userdetails)
let signemail=document.getElementById("signin_signup_form")
let signnumber=document.getElementById("signinnumber")
	let signup=document.getElementById("signuppage");
	let signinemails=document.getElementById("signinemailpage")
  let signinnumbers=document.getElementById("signinnumberpage")
	let container1=document.getElementById("categories")
	let container2=document.getElementById("results")
   
   /*deleted console.log */
   
	/* delete console.log */
	function code(){
	/*removed foooter_div added container-1 container-2 */

	container1.style.position="sticky"
	container1.style.filter="blur(1px)"
 container2.style.filter="blur(1px)"
	signemail.style.display="block"
	signnumber.style.display="none"
  signup.style.display="none"
  signinemails.style.display="none"
  signinnumbers.style.display="none"      

}
function numbersignin() {
 /*removed foooter_div added container-1 container-2 */
 container1.style.position="sticky"
 container1.style.filter="blur(1px)"
container2.style.filter="blur(1px)"
signemail.style.display = "none";
signnumber.style.display = "block";
signup.style.display = "none";
signinemails.style.display = "none";
signinnumbers.style.display = "none";
}
function signuppage() {
/*removed foooter_div added container-1 container-2 */

container1.style.position="sticky"
container1.style.filter="blur(1px)"
container2.style.filter="blur(1px)"
signemail.style.display = "none";
signnumber.style.display = "none";
signup.style.display = "block";
signinemails.style.display = "none";
signinnumbers.style.display = "none";
}
function signinemail(){
/* added new userdata useremail */
let userdata=JSON.parse(localStorage.getItem("userdata"))
let useremail=userdata[0]["email"]

if(document.getElementById("emailsignin").value==useremail){

/*removed foooter_div added container-1 container-2 */

container1.style.position="sticky"
container1.style.filter="blur(1px)"
container2.style.filter="blur(1px)"
	signemail.style.display="none"
	signnumber.style.display="none"
  signup.style.display="none"
  signinemails.style.display="block"
  signinnumbers.style.display="none"
}else{
document.getElementById("signinemail").innerText="Enter correct email"
document.getElementById("signinemail").style.color="red"
document.getElementById("emailsignin").style.borderColor="red"
}
}
function signinnumber(){
/* added new userdata usernumber */
let userdata=JSON.parse(localStorage.getItem("userdata"))
let usernumber=userdata[0]["mobile"]
if(document.getElementById("enternumbersignin").value==usernumber){
 /*removed foooter_div added container-1 container-2 */

 container1.style.position="sticky"
 container1.style.filter="blur(1px)"
container2.style.filter="blur(1px)"
signemail.style.display="none"
signnumber.style.display="none"
signup.style.display="none"
signinemails.style.display="none"
signinnumbers.style.display="block"
}else{
  document.getElementById("numbersignin").innerText="Enter correct number"
document.getElementById("numbersignin").style.color="red"
document.getElementById("enternumbersignin").style.borderColor="red"

}

}/* updated below functionality */
function userdetails(){
/* added arr variable */
let arr=JSON.parse(localStorage.getItem("userdata"))||[];
const reg_form=document.getElementById('signupform1')
const emails=reg_form.emailsignup.value
const usernames=reg_form.namesignup.value
const mobiles=reg_form.mobilenumbersignup.value
const passwords=reg_form.passwordsignup.value   
 if(emails==emails.includes('@')||usernames==""||mobiles==""||passwords==""){
  alert("sign Up unsuccessfull please enter details again")
}

else{
  let obj={
	email:emails,
	username:usernames,
	mobile:mobiles,
	password:passwords,
  }
  arr.push(obj)
  localStorage.setItem("userdata",JSON.stringify(arr))
alert("Sign Up successfully press sign in below button ")
}
}
function signinbuttonemail(){
/* added new userdata userpassword */
let userdata=JSON.parse(localStorage.getItem("userdata"))
let userpassword=userdata[0]["password"]
if(document.getElementById("emailsigninpassword").value==userpassword){
alert("Sign in successfull")
window.location="useddashboard.html"
}else{
document.getElementById("emailsigninpassword").style.borderColor="red"
document.getElementById("emailsigninp").style.color="red"
document.getElementById("emailsigninp").innerText="Enter correct password"
}

}
function signinbuttonnumber(){
/* added new userdata userpassword */
let userdata=JSON.parse(localStorage.getItem("userdata"))
let userpassword=userdata[0]["password"]

if(document.getElementById("entersigninnumberpassword").value==userpassword){
alert("Sign in successfull")
window.location="useddashboard.html"
let userdata=JSON.parse(localStorage.getItem("userdata"))
console.log("imrn")
}else{
document.getElementById("entersigninnumberpassword").style.borderColor="red"
document.getElementById("numbersigninp").innerText="Enter corret password"
document.getElementById("numbersigninp").style.color="red"
}

}
/* modify added updated data */
const success=JSON.parse(localStorage.getItem("signin"))
const nameshow=JSON.parse(localStorage.getItem("userdata"))
if(success=="successfull"){
	document.getElementById("anchor_a").href="userdashboard.html"
	document.getElementById("signin").innerText=nameshow[0]["username"]
    document.getElementById("right").innerHTML=""
	let path=document.getElementById("right")
	let img=document.createElement("img")
img.setAttribute("src","https://www.lifewatch.eu/wp-content/uploads/2021/07/user-icon.svg")
img.style.width="8%"
img.style.pointerEvents="none"
let div1=document.createElement("div")
div1.setAttribute("class","dropdown")
let  a=document.createElement("a")
a.setAttribute("href","userdashboard.html")
a.setAttribute("class","dropdownbtn")
a.innerText=nameshow[0]["username"]
a.style.textDecoration="none"
a.style.fontSize="14px"
a.style.color="#167a92"
let div2=document.createElement("div")
div2.setAttribute("class","dropdown-content")
div2.style.visibility="visible"
let a1=document.createElement('a')
a1.setAttribute("href","userdashboard.html")
a1.innerText="Dashboard"
let a2=document.createElement('a')
a2.setAttribute("href","index.html")
a2.setAttribute("id","leavesignin")
a2.innerText="signout"
div2.append(a1,a2)
div1.append(a,div2)
path.append(img,div1)
}else{
	document.getElementById("anchor_a").href="index.html"
}const leave=document.getElementById("leavesignin")
leave.onclick=()=>{
	alert("sign out successfull")
	localStorage.setItem("signin",JSON.stringify("unsuccessfull"))
	window.location="index.html"

}
/* modify added updated data */

/*adding functionality end */