export function slider() {
	let slideItemsCount = document.querySelectorAll(".slider .slide-item").length;
	document.querySelector(".slide-control.arrow-right").addEventListener("click", function(event) {
		document.querySelector(".slider").style.left += 400
	})
}