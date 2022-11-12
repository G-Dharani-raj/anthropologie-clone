//import navbar and footer

import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";

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
	let container1=document.getElementById("product")
	let container2=document.getElementById("trending_tab")
   
   /*deleted console.log */
   
	/* delete console.log */
	function code(){
	/*added foooter_div.style  container-2  removed footer_div*/

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
 /*added foooter_div.style  container-2  removed footer_div*/

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
/*added foooter_div.style  container-2  removed footer_div*/

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

/*added foooter_div.style  container-2  removed footer_div*/

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
 /*added foooter_div.style  container-2  removed footer_div*/

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
	document.getElementById("signin").innerText=""
    document.getElementById("right").innerHTML=""
	let path=document.getElementById("right")
	let img=document.createElement("img")
img.setAttribute("src","https://www.lifewatch.eu/wp-content/uploads/2021/07/user-icon.svg")
img.style.width="8%"
img.style.pointerEvents="none"
let div1=document.createElement("div")
div1.setAttribute("class","dropdown")
div1.style.paddingTop="0px"
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