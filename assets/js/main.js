var hamburguesa = document.getElementById("hamburguesa");

hamburguesa.addEventListener("click", encendido);

function encendido(){
	// document.getElementById("esconder").classList.add("ocultar");
	var menu = document.getElementsByTagName("ul")[0];
	menu.classList.toggle("ocultar");
};