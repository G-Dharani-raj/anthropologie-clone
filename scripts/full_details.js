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
};
