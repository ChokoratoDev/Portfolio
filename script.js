document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".menu");
	const form = document.querySelector("form");
	const formActionButton = document.querySelector("button.lets-talk");

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		menu.classList.toggle("active");
	});

	form.style.display = "none";

	formActionButton.addEventListener("click", () => {
		if (form.classList.contains("active")) {
			form.classList.toggle("active");
			setTimeout(() => {
				form.style.display = "none";
			}, 400);
		} else {
			form.style.display = "block";
			form.offsetHeight;
			form.classList.add("active");
		}
	});
});
