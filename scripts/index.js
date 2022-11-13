// Code here
import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

/*removed*/
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

// added functionality to sign in sign up 


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
	let container1=document.getElementById("container")
   
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
img.setAttribute("id","routetodash")
img.style.width="8%"
img.style.pointerEvents="none"
let div1=document.createElement("div")
div1.setAttribute("class","dropdown")
div1.style.paddingTop="0px"
let  a=document.createElement("a")
a.setAttribute("href","userdashboard.html")
a.setAttribute("class","dropdownbtn")
a.innerText=JSON.parse(localStorage.getItem("displayusername"));
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
document.getElementById("signin_signup_popup").innerHTML=""

}else{
	document.getElementById("anchor_a").href="index.html"
}
let cart_show_btn=JSON.parse(localStorage.getItem("cart_show_btn"))||0
if(cart_show_btn>0){
	document.getElementById("dropup_content").style.display="block"
	document.getElementById("addingnumber").innerText=cart_show_btn

}

if("unsuccessfull"==JSON.parse(localStorage.getItem("signin"))){
	document.getElementById("signin").innerText="Sign in"
}
const leave=document.getElementById("leavesignin")
leave.onclick=()=>{
	alert("sign out successfull")
	localStorage.setItem("signin",JSON.stringify("unsuccessfull"))
	document.getElementById("signin").innerText="Sign in"
	window.location="index.html"

}


/* modify added updated data */
/*adding functionality end */

