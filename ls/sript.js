"use strict"


const swiper = new Swiper('.swiper', {
	// Optional parameters


	// If we need pagination


	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	mousewheel: {
		invert: true,
	},
	//сколько слайдов
	slaidesPerView: 2.5,
	//отступы
	spaceBetween: 20,

	//адаптивность
	breakpoints: {
		611: {
			slaidesPerView: 1,
			spaceBetween: 10,
		}

	}



});



const iconMenu = document.querySelector('.header__icon');
if (iconMenu) {
	const menuBody = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock'); //что бы не скролилось  
		iconMenu.classList.toggle('_active');  //делаем активную кнопку ( сама иконка добовляем клас activ) 
		menuBody.classList.toggle('_active');
	}
	)
}




class Rating {
	constructor(dom) {
		dom.innerHTML = '<svg width="110" height="20"></svg>';
		this.svg = dom.querySelector('svg');
		for (var i = 0; i < 5; i++)
			this.svg.innerHTML += `<polygon data-value="${i + 1}"
				transform="translate(${i * 22},0)" 
				points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
		this.svg.onclick = e => this.change(e);
		this.render();
	}

	change(e) {
		let value = e.target.dataset.value;
		value && (this.svg.parentNode.dataset.value = value);
		this.render();
	}

	render() {
		this.svg.querySelectorAll('polygon').forEach(star => {
			let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
			star.classList.toggle('active', on);
		});
	}
}

document.querySelectorAll('.rating').forEach(dom => new Rating(dom));