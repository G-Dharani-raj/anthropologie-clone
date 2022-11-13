import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

const dash_a=document.getElementById("a")
dash_a.onclick=()=>{
	window.location = "all_products.html";
}
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
/* importing cart data */

let userdata=JSON.parse(localStorage.getItem("userdata"))
const username=userdata[0]["username"]

const useremail=userdata[0]["email"]
const usernumber=userdata[0]["mobile"]
document.getElementById("signin").innerText=username;
document.getElementById("dshms1").innerText=username;
document.getElementById("dshms2").innerText=useremail;
document.getElementById("dshms3").innerText=usernumber;

let init_cart=JSON.parse(localStorage.getItem("cart_items"))||[]
let cart_show_btn=JSON.parse(localStorage.getItem("cart_show_btn")) || 0;
const cart_display = (cart_items) => {
	document.getElementById("table").innerHTML=""
	cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
	if (cart_items.length == 0) {
		console.log("cart empty");
		document.getElementById("dshmtp11").innerText = "Your cart is empty";
       return
	}cart_items.forEach((element,index)=>{
		let quantity = element[1];
		let product = element[0];
		let tr = document.createElement("tr");
		tr.setAttribute("id","tr1")
		let td1=document.createElement("td")
		td1.setAttribute("id","td1")
		let img=document.createElement("img")
		img.src=product.image;
		img.onclick=()=>{
			details(product);
		}
		td1.append(img)
		let td2=document.createElement("td")
		td2.setAttribute("id","td2")
		td2.innerText=product.category
		let td3=document.createElement("td")
		td3.setAttribute("id","td3")
		td3.innerText=`${quantity}`;
		let td4=document.createElement("td")
		td4.setAttribute("id","td4")
		td4.innerText=product.name
		let td5=document.createElement("td")
		td5.innerText=`$${quantity * product.price}`;
		td5.setAttribute("id","td5")
		let td6=document.createElement("td")
		td6.setAttribute("id","td6")
		let remove_btn = document.createElement("button");
		remove_btn.innerText = "Remove item";
		remove_btn.onclick = () => {
			let cart_show_btn=JSON.parse(localStorage.getItem("cart_show_btn"))||0;
			let count =cart_show_btn-1
			display_number(count);
			remove_item_from_cart(element, index);
			
		};
		td6.append(remove_btn)
		tr.append(td1,td2,td3,td4,td5,td6)
		document.querySelector("#table").append(tr)
	});

}
cart_display(init_cart)

const remove_item_from_cart=(element,index)=>{
	let quantity_available = element[1];
	if (quantity_available == 1) {
		init_cart.splice(index, 1);
		localStorage.setItem("cart_items", JSON.stringify(init_cart));
		cart_display(init_cart);
	} else {
		for (let i = 0; i < init_cart.length; i++) {
			if (i == index) {
				quantity_available--;
				init_cart[i][1] = quantity_available;
				localStorage.setItem(
					"cart_items",
					JSON.stringify(init_cart)
				);
				cart_display(init_cart);
			}
		}
	}
};
const display_number=(count)=>{
	document.getElementById("addingnumber").innerText=count;
	if(count>0){
		document.getElementById("dropup_content").style.display="block"
	}else{
		document.getElementById("dropup_content").style.display="none"
	}
	localStorage.setItem("cart_show_btn",JSON.stringify(count))
	
}
/* added drop-down menu in user dashboard starts here*/
if(cart_show_btn>0){
	document.getElementById("addingnumber").innerText=cart_show_btn;
	document.getElementById("dropup_content").style.display="block"
}
const success=JSON.parse(localStorage.getItem("signin"))
const nameshow=JSON.parse(localStorage.getItem("userdata"))
if(success=="successfull"){
	document.getElementById("anchor_a").href="index.html"
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

/*ends here*/