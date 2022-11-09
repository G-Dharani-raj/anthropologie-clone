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

		let name = document.createElement("p");
		name.innerText = product.name;

		let price = document.createElement("p");
		price.innerText = `$${product.price}.0`;

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
			quantity_order,
			total_price,
			remove_btn
		);

		document.querySelector("#cart").append(card);
	});
	document.getElementById("cart_total").innerText = cart_total;
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
