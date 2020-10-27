// JavaScript Document

let button = document.querySelector('header button')
let closeButton = document.querySelector('ul button')

function openMenu() {
	document.body.classList.toggle('toonMenu')
	document.body.classList.toggle('storelocator-hamburgermenu')
	document.body.classList.toggle('socialmedia-hamburgermenu')
}

button.addEventListener('click', openMenu)
closeButton.addEventListener('click', openMenu)


var buyButtons = document.querySelectorAll("button.buy");

for (i = 0; i < buyButtons.length; i++) {
	buyButtons[i].addEventListener("click", updateShoppingBagIcon);
}

function updateShoppingBagIcon() {
	
	let shoppingBagIconAmount = document.querySelector(".shopping-bag-icon span");
	
	let currentAmount = shoppingBagIconAmount.innerHTML;

	currentAmount = parseInt(currentAmount);
	
	let newAmount = currentAmount + 1;
	
	shoppingBagIconAmount.innerHTML = newAmount;
  }