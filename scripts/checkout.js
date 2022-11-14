import { navbar } from "/components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
const submit=document.getElementById("ship-btn")
submit.onclick=()=>{
	window.location="payment.html"

}

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

function getData(event) {

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
	localStorage.setItem("customer_data_name",JSON.stringify(firstName))
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

// added functionality to sign in sign up 


document.querySelector("#right").addEventListener("click",code)
document.querySelector("#emailid").addEventListener("click",code)
document.querySelector("#emailid1").addEventListener("click",code)
document.querySelector("#signupsignin").addEventListener("click",code)
document.querySelector("#already-have").addEventListener("click",code)
document.querySelector("#signinbtnchk").addEventListener("click",coder)
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
	let container1=document.getElementById("form")
   
   //deleted console.log 
   
	// delete console.log */
	function code(){
	//removed foooter_div.style 
	

	container1.style.position="sticky"
	container1.style.overflow="hidden"
	container1.style.filter="blur(1px)"
	signemail.style.display="block"
	signnumber.style.display="none"
  signup.style.display="none"
  signinemails.style.display="none"
  signinnumbers.style.display="none"  
  

}
function coder(event){
	//removed foooter_div.style 
	event.preventDefault();

	container1.style.position="sticky"
	container1.style.overflow="hidden"
	container1.style.filter="blur(1px)"
	signemail.style.display="block"
	signnumber.style.display="none"
  signup.style.display="none"
  signinemails.style.display="none"
  signinnumbers.style.display="none"  
  

}
function numbersignin() {
 //removed foooter_div.style 
	
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
 //removed foooter_div.style 
	
container1.style.position = "sticky";
container1.style.overflow = "hidden";
container1.style.filter = "blur(1px)";
signemail.style.display = "none";
signnumber.style.display = "none";
signup.style.display = "block";
signinemails.style.display = "none";
signinnumbers.style.display = "none";
}

function signinemail(){
	/* added new userdata useremail */
	let userdata=JSON.parse(localStorage.getItem("userdata"))||[{email:0}]
	userdata.forEach((e)=>{
		if(e.email==0){
			document.getElementById("signinemail").innerText="Email not registered"
			document.getElementById("emailsignin").placeholder="create an account"
			document.getElementById("emailsignin").style.color="red"
			document.getElementById("signinemail").style.color="red"
			document.getElementById("emailsignin").style.borderColor="red"
			
		}	 else if(document.getElementById("emailsignin").value==e.email){
			container1.style.position="sticky"
			container1.style.overflow="hidden"
			container1.style.filter="blur(1px)"
			signemail.style.display="none"
			signnumber.style.display="none"
		  signup.style.display="none"
		  signinemails.style.display="block"
		  signinnumbers.style.display="none"
		}else{
			document.getElementById("signinemail").innerText="Enter correct email"
			document.getElementById("emailsignin").placeholder="Enter registered email"
		document.getElementById("signinemail").style.color="red"
		document.getElementById("emailsignin").style.borderColor="red"
		
		
		}
	})
	
	}
function signinnumber(){
	/* added new userdata usernumber */
	let userdata=JSON.parse(localStorage.getItem("userdata"))||[{mobile:0}]
	userdata.forEach((e)=>{
	
	
	if(e.mobile===0){
		document.getElementById("enternumbersignin").placeholder="create an account"
		document.getElementById("enternumbersignin").style.color="red"
		document.getElementById("numbersignin").innerText="Number Not Registered"
		document.getElementById("numbersignin").style.color="red"
		document.getElementById("enternumbersignin").style.borderColor="red"
		
	}
	else if(document.getElementById("enternumbersignin").value==e.mobile){
	 /*removed foooter_div.style */
	container1.style.position="sticky"
	container1.style.overflow="hidden"
	container1.style.filter="blur(1px)"
	signemail.style.display="none"
	signnumber.style.display="none"
	signup.style.display="none"
	signinemails.style.display="none"
	signinnumbers.style.display="block"
	}else{
	  document.getElementById("numbersignin").innerText="Enter correct number"
	document.getElementById("numbersignin").style.color="red"
	document.getElementById("enternumbersignin").placeholder="Enter register number"
	document.getElementById("enternumbersignin").style.borderColor="red"
	
	
	}})
	
	}/* updated below functionality */
function userdetails(){
/* added arr variable */
let arr=JSON.parse(localStorage.getItem("userdata"))||[];
let emails=document.getElementById("emailsignup").value 
let usernames=document.getElementById("namesignup").value 
let mobiles=document.getElementById("mobilenumbersignup").value 
let passwords=document.getElementById("passwordsignup").value 

 if(!emails.includes("@gmail.com")){
  document.getElementById("emailsignuppp11").innerText="Entered wrong email"
  document.getElementById("emailsignuppp11").style.color="red"
  document.getElementById("emailsignup").placeholder="Email must contain name@gmail.com"
  document.getElementById("emailsignup").style.borderColor="red"
} if(usernames==""){
	document.getElementById("usernamesignupp11").innerText="Entered empty username "
  document.getElementById("usernamesignupp11").style.color="red"
  document.getElementById("namesignup").placeholder="Username can't be empty"
  document.getElementById("namesignup").style.borderColor="red"

}  if(mobiles.length<9||mobiles.length==0){
	document.getElementById("mobilesignupp11").innerText="Entered wrong number"
	document.getElementById("mobilesignupp11").style.color="red"
	document.getElementById("mobilenumbersignup").placeholder="Number must be above 9 digits"
	document.getElementById("mobilenumbersignup").style.borderColor="red"
}if(passwords.length<4||passwords.length==0){
	document.getElementById("passwordsignupp11").innerText="Entered wrong password"
	document.getElementById("passwordsignupp11").style.color="red"
	document.getElementById("passwordsignup").placeholder="Password must be above 5 digits"
	document.getElementById("passwordsignup").style.borderColor="red"

}

else if(emails.includes("@gmail.com")&&usernames!=""&&mobiles.length>9&&passwords.length>4){
  let obj={
	email:emails,
	username:usernames,
	mobile:mobiles,
	password:passwords,
  }
  arr.push(obj)
  localStorage.setItem("userdata",JSON.stringify(arr))
  localStorage.setItem("signup",JSON.stringify("successful"))
alert("Sign Up successfully")
document.getElementById("signin").innerText="Sign in"
location.reload()

}
}
function signinbuttonemail(){
/* added new userdata userpassword */
let userdata=JSON.parse(localStorage.getItem("userdata"))
userdata.forEach((e)=>{


if(document.getElementById("emailsigninpassword").value==e.password){
localStorage.setItem("displayusername",JSON.stringify(e.username))	
alert("Sign in successfull")
localStorage.setItem("signin",JSON.stringify("successfull"))
location.reload()

}else{
document.getElementById("emailsigninpassword").style.borderColor="red"
document.getElementById("emailsigninpassword").placeholder="enter registered password"
document.getElementById("emailsigninp").style.color="red"
document.getElementById("emailsigninp").innerText="Enter correct password"
}
});


}
function signinbuttonnumber(){
/* added new userdata userpassword */
let userdata=JSON.parse(localStorage.getItem("userdata"))
userdata.forEach((e)=>{

if(document.getElementById("entersigninnumberpassword").value==e.password){
	localStorage.setItem("displayusername",JSON.stringify(e.username))	
alert("Sign in successfull")
localStorage.setItem("signin",JSON.stringify("successfull"))
location.reload()
}else{
document.getElementById("entersigninnumberpassword").style.borderColor="red"
document.getElementById("entersigninnumberpassword").placeholder="enter registered password"
document.getElementById("numbersigninp").innerText="Enter corret password"
document.getElementById("numbersigninp").style.color="red"
}
})

}
/* modify added updated data */
const success=JSON.parse(localStorage.getItem("signin"))
const nameshow=JSON.parse(localStorage.getItem("userdata"))
if(success=="successfull"){
	document.getElementById("anchor_a").href="index.html"
	document.getElementById("signin").innerText=JSON.parse(localStorage.getItem("displayusername"))
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
a.innerText=JSON.parse(localStorage.getItem("displayusername"))
a.style.textDecoration="none"
a.style.paddingTop="9px";
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
document.getElementById("signin_signup_form").innerHTML=""
document.getElementById("already-have").innerHTML=""



}else{
	document.getElementById("anchor_a").href="index.html"
}
let cart_show_btn=JSON.parse(localStorage.getItem("cart_show_btn"))||0
if(cart_show_btn>0){
	document.getElementById("dropup_content").style.display="block"
	document.getElementById("addingnumber").innerText=cart_show_btn
}if("successfull"==JSON.parse(localStorage.getItem("signup"))){
	document.getElementById("signin").innerText="Sign in"
}
if(document.getElementById("email").value.includes("@")){
	returncheck(1)
}
let ship_btn=document.getElementById("ship-btn")
ship_btn.addEventListener("click",returncheck)
let shipbtn=document.getElementById("shipButton")
shipbtn.addEventListener("click",returncheckr)
function returncheck(event){
	event.preventDefault();
	window.location="payment.html"
}function returncheckr(){
	window.location="payment.html"
}


const leave=document.getElementById("leavesignin")
leave.onclick=()=>{
	document.getElementById("signin_signup_popu").innerHTML=""
	alert("sign out successfull")
	localStorage.setItem("signin",JSON.stringify("unsuccessfull"))

	window.location="index.html"

}


if("unsuccessfull"==JSON.parse(localStorage.getItem("signin"))){
	document.getElementById("signin").innerText="Sign in"
}

/* modify added updated data */
/*adding functionality end */

