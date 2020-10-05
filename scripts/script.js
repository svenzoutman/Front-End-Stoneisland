// JavaScript Document

var deButton = document.querySelector("hamburger-menu");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("menu");
	hetFormulier.classList.toggle("menu");
}

deButton.addEventListener("click", doeFormNeerEnOp);