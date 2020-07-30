var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

@@include('forms.js');

$(document).ready(function() {
	@@include('burger.js');

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

// === stars handler ================================================================================
	let rating = document.querySelectorAll('.stars');

	if(rating.length) {
		for(let listStars of rating) {
			for(let star = 0; star < listStars.dataset.amountstars; star++) {
				listStars.children[star].lastChild.className = 'icon-star-full';
			}
		}
	}
// === // stars handler ================================================================================

// === services-preiew handler ===================================================================
let servicesPreiew = document.querySelector('.services-preiew');
let servicesItems = servicesPreiew.querySelectorAll('.item-services__inner');

if (isMobile.any()) {
	for(let servicesItem of servicesItems) {
		servicesItem.classList.add('mobile');
	} 
	servicesPreiew.addEventListener('click', function(e) {
		if(e.target.closest('.item-services__inner')) {
			e.target.closest('.item-services__inner').classList.toggle('open');
		}
	})
} 
// === // services-preiew handler ===================================================================


// ==== slider-our-projects =======================================================
	 $('.slider-our-projects').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  dots: true,
	  prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span><img src="img/arrows/arrow-left.svg" alt=""></span></div>',
	  nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span><img src="img/arrows/arrow-right.svg" alt=""></span></div>',
	  //asNavFor: '.dots-our-projects'
	});


let dotsOurProjects = document.querySelector('.dots-our-projects');
let projectSlider = document.querySelector('.slider-our-projects');
let sliderDots = projectSlider.querySelector('.slick-dots');
let sliderPrev = projectSlider.querySelector('.slick-prev');
let sliderNext = projectSlider.querySelector('.slick-next');
let prevBtn = document.querySelector('.slider-our-projects__btn_left');
let nextBtn = document.querySelector('.slider-our-projects__btn_right');

dotsOurProjects.addEventListener('click', function(e) {
	if(e.target.closest('.dots-our-projects__item')) {
		let dotsItem = e.target.closest('.dots-our-projects__item');
		let dotsNum = dotsItem.dataset.dots;
		let dotsSlide = sliderDots.children[dotsNum].firstElementChild;
		let event = new Event("click",{bubbles: true, cancelable: false});
		dotsSlide.dispatchEvent(event);
		dotsItem.classList.add('active');

		for(let item of dotsOurProjects.children) {
			if(item === dotsItem) {
				continue;
			}

			item.classList.remove('active');
		}

	}
})
prevBtn.onclick = function() {
	let event = new Event("click",{bubbles: true, cancelable: false});
	sliderPrev.dispatchEvent(event);
}
nextBtn.onclick = function() {
	let event = new Event("click",{bubbles: true, cancelable: false});
	sliderNext.dispatchEvent(event);
}

// ==== // slider-our-projects =======================================================
});