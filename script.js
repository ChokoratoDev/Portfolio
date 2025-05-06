const arrow = document.querySelector(".arrow");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const form = document.querySelector("form");
const dataTab = document.querySelectorAll(".tab");
const formActionButton = document.querySelector("button.lets-talk");
const downloadButton = document.getElementById("downloadButton");
const gear = document.querySelector('.fa-gear');
const navLinks = document.querySelectorAll('.link')
const arrowLeft = document.querySelector('.fa-arrow-left');

gear.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {
	
	formDisplay();
	navBar();
	
	window.addEventListener('resize', () =>{
		if(window.matchMedia('(min-width: 1024px)').matches){
            arrow.style.display = 'block';
            arrowGestion();
        }else{
            arrow.style.display = 'none'
            window.onscroll = null; 
        }
	})
	
	const gear = document.querySelector('.fa-gear')
	
	// Gestion dl/ouverture du cv
	downloadButton.addEventListener("click", () => {

		arrowLeft.style.display = "none";
		gear.style.display = "inline-block";
		gear.classList.add('spin')
		
		// nouvel onglet
		const urlCV = "src/files/CVJP-BLANCHET3WA.pdf";
		setTimeout(() => {
			window.open(urlCV, "_blank");
			gear.classList.remove('spin')
			arrowLeft.style.display = "inline-block";
			gear.style.display = "none";
		}, 2000);

		// download
		const lien = document.createElement("a");
		lien.href = urlCV;
		lien.download = "CVJPBlanchet";
		lien.click();
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			const targetId = link.getAttribute('href').substring(1)
			const targetElement = document.getElementById(targetId);
			if(targetElement){
				navTo(targetElement)
			}
		})
	})
});

function arrowGestion(){
    window.onscroll = function () {
        if (window.scrollY >= 100){
            arrow.style.display = 'block'
            arrow.addEventListener('click', () =>{
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
                })
				
            })
        }else{
            arrow.style.display = 'none'
        }
    }   
} 

function navBar(){
	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		menu.classList.toggle("active");
		if (window.innerWidth <= 620) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		if (window.innerWidth <= 1024) {
			dataTab.forEach(e  => {
				e.addEventListener('click', () => {
					burger.classList.remove("active");
					menu.classList.remove("active");
				})
			})
		} else {
			document.body.style.overflow = 'auto';
		}
	});
}

function formDisplay(){
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
}





function navTo(element){
	const rect = element.getBoundingClientRect();
	const elementCenter = rect.top + rect.height / 2;
	const windowCenter = window.innerHeight / 2;
	const scrollingTo = window.scrollY + elementCenter - windowCenter;

	window.scrollTo({
		top : scrollingTo,
		behavior: 'smooth'
	});

}

