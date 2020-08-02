var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
//if (isMobile.any()) {}
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
if(servicesPreiew) {
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

if(dotsOurProjects) {
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
}

// ==== // slider-our-projects =======================================================


// ==== cards-advantages hover =======================================================
if (isMobile.any()) {
	let cardsAdvantages = document.querySelectorAll('.cards-advantages');
	if(cardsAdvantages) {
		for(let card of cardsAdvantages) {
			let hoverBox = card.querySelector('.cards-advantages__hever-box');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - 118) + 'px)';
			hoverBox.setAttribute('data-position', 'down');
		}
		
		$('.cards-advantages').click(function(e) {
			let hoverBox = this.querySelector('.cards-advantages__hever-box');
			let height = hoverBox.offsetHeight;

			if(hoverBox.dataset.position == 'down') {
				hoverBox.style.transform = 'translateY(0px)';
				hoverBox.dataset.position = 'top';
			} else {
				hoverBox.style.transform = 'translateY(' + (height - 118) + 'px)';
				hoverBox.dataset.position = 'down';
			}
		});
	}
} else {
	let cardsAdvantages = document.querySelectorAll('.cards-advantages');
	if(cardsAdvantages) {
		for(let card of cardsAdvantages) {
			let hoverBox = card.querySelector('.cards-advantages__hever-box');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - 118) + 'px)';
		}

		$('.cards-advantages').hover(function(e){
			let hoverBox = this.querySelector('.cards-advantages__hever-box');
			hoverBox.style.transform = 'translateY(0px)';
			}, function(){
			let hoverBox = this.querySelector('.cards-advantages__hever-box');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - 118) + 'px)';
		})
	}
}


// ==== // cards-advantages hover =======================================================

// ==== cards-gallery hover =======================================================
if (isMobile.any()) {
	let cardsAdvantages = document.querySelectorAll('.cards-gallery');
	if(cardsAdvantages) {
		for(let card of cardsAdvantages) {
			let hoverBox = card.querySelector('.cards-gallery__hever-box');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - 112) + 'px)';
			hoverBox.setAttribute('data-position', 'down');
		}
		
		$('.cards-gallery').click(function(e) {
			let hoverBox = this.querySelector('.cards-gallery__hever-box');
			let height = hoverBox.offsetHeight;

			if(hoverBox.dataset.position == 'down') {
				hoverBox.style.transform = 'translateY(0px)';
				hoverBox.dataset.position = 'top';
			} else {
				hoverBox.style.transform = 'translateY(' + (height - 112) + 'px)';
				hoverBox.dataset.position = 'down';
			}
		});
	}
} else {
	let cardsAdvantages = document.querySelectorAll('.cards-gallery');
	if(cardsAdvantages) {
		for(let card of cardsAdvantages) {
			let hoverBox = card.querySelector('.cards-gallery__hever-box');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - 112) + 'px)';
		}

		$('.cards-gallery').hover(function(e){
			let hoverBox = this.querySelector('.cards-gallery__hever-box');
			hoverBox.style.transform = 'translateY(0px)';
			}, function(){
			let hoverBox = this.querySelector('.cards-gallery__hever-box');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - 112) + 'px)';
		})
	}
}


// ==== // cards-gallery hover =======================================================


// ==== tabs-material =======================================================
let tabsMaterial = document.querySelector('.tabs-material');

if(tabsMaterial) {
	tabsMaterial.onclick = function(e) {
		e.preventDefault();
	}
}

// ==== // tabs-material =======================================================

// ==== gallery-cards__load-mor-btn =======================================================
let galleryCardsLoadMorBtn = document.querySelector('.gallery-cards__load-mor-btn');

if(galleryCardsLoadMorBtn) {
	galleryCardsLoadMorBtn.onclick = function(e) {
		e.preventDefault();
	}
}

// ==== // gallery-cards__load-mor-btn =======================================================



// ==== accordion =======================================================
if ($('.accordion').length>0) {
	$.each($('.spoller.active'), function (index, val) {
		$(this).next().show();
	});
	$('body').on('click', '.spoller', function (event) {
		if ($(this).hasClass('mob') && !isMobile.any()) {
			return false;
		}

		if ($(this).parents('.one').length > 0) {
			$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
			$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
		}

		if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
			$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
				$(this).removeClass('active');
				$(this).next().slideUp(300);
			});
		}
		$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
			if ($(this).parent().find('.slick-slider').length > 0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
		});
		return false;
	});
}

// ==== // accordion =======================================================


// ==== slider galleryDetails =======================================================

 $('.galleryDetails__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29"><g><g><path class="galleryDetails__arrows" fill="#fff" d="M.613 15.233a1.075 1.075 0 0 1 0-1.538l.414-.409v-.03h.03L14.473 0l1.556 1.538L4.17 13.256h30.906v2.175H3.926l12.103 11.96-1.556 1.537z"/></g></g></svg></span></div>',
  nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29"><g><g><path class="galleryDetails__arrows" fill="#fff" d="M34.764 15.233a1.075 1.075 0 0 0 0-1.538l-.414-.409v-.03h-.03L20.904 0l-1.556 1.538 11.859 11.718H.3v2.175h31.15L19.348 27.39l1.556 1.537z"/></g></g></svg></span></div>',
  vertical: true,	
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        swipe: false,
      }
    }
  ]
});
// ==== // slider galleryDetails =======================================================



// ==== scroll modificator =======================================================
const selectscrolloptions = (cursorwidth) => {
		var scs=100;
		var mss=50;
	if(isMobile.any()){
		scs=10; 
		mss=1;
	}
	var opt={
		cursorcolor:"#325364",
		cursorwidth,
		background: "",
		autohidemode:true,
		bouncescroll:false,
		cursorborderradius: "10px",
		scrollspeed:scs,
		mousescrollstep:mss,
		directionlockdeadzone:0,
		cursorborder: "1px solid #fff",
	};
	return opt;
}

if (!isMobile.any()) {
	$(function() {
   		 $("body").niceScroll(selectscrolloptions('12px'));
	})
}

$(function() {  
    $(".form__input_textarea").niceScroll(selectscrolloptions('6px'));
});
// ==== // scroll modificator =======================================================


// ==== slider galleryDetails-m =======================================================
if (!isMobile.any()) {
	let galleryDetailsM = document.querySelector('.galleryDetails-m');

	if(galleryDetailsM) {
			let galleryDetailsM__column_1 = document.querySelector('.galleryDetails-m__column_1');
			let infoGalleryDetailsM = document.querySelector('.info-galleryDetails-m');
			let footer = document.querySelector('.footer');
			let header = document.querySelector('.header');
			let galleryDetailsM__prev = document.querySelector('.galleryDetails-m__prev');
			let galleryDetailsM__next = document.querySelector('.galleryDetails-m__next');
			let galleryBox = document.querySelector('.galleryDetails-m__gellery-box');

			if(galleryBox.children.length <= 1) {
				galleryDetailsM__prev.style.display = 'none';
				galleryDetailsM__next.style.display = 'none';
			}
		
		window.addEventListener('scroll', function(e) {
			let footerPosition = (footer.getBoundingClientRect().top - document.documentElement.clientHeight);
			let footer_metrics = footer.getBoundingClientRect();
			let infoGalleryDetailsM_metrics = infoGalleryDetailsM.getBoundingClientRect();
			

			if(header.getBoundingClientRect().top < -header.getBoundingClientRect().height && footerPosition >= -100) {
				infoGalleryDetailsM.style.transform = 'translateY(' +  ((window.pageYOffset - header.getBoundingClientRect().height - 90) < 0 ? 0 : window.pageYOffset - header.getBoundingClientRect().height - 90) +'px)';
				galleryDetailsM__column_1.style.justifyContent = 'flex-start';
			}
			
			if(footer_metrics.top <= infoGalleryDetailsM_metrics.bottom && footerPosition < -100) {
				infoGalleryDetailsM.style.transform = 'translateY(0px)';
				galleryDetailsM__column_1.style.justifyContent = 'flex-end';
			}

			if(footerPosition <= 0) {			
				galleryDetailsM__prev.style.bottom = Math.abs(footerPosition) + 'px';
				galleryDetailsM__next.style.bottom = Math.abs(footerPosition) + 'px';
			} else {
				
				galleryDetailsM__prev.style.bottom = '0px';
				galleryDetailsM__next.style.bottom = '0px';
			}

			for(let item of galleryBox.children) {
				if(item.getBoundingClientRect().top <= (document.documentElement.clientHeight / 3) && item.getBoundingClientRect().top >= -((document.documentElement.clientHeight / 3) * 2 -90)) {
					item.classList.add('focus');

				} else {
					item.classList.remove('focus');
				}
			}
		});

		galleryDetailsM__next.addEventListener('click', function() {
			for(let item of galleryBox.children) {
				if(item.classList.contains("focus")) {
					
					if(item.nextElementSibling) {
						item.nextElementSibling.scrollIntoView({block: "center", behavior: "smooth"});
					}
				}
			}
		});

		galleryDetailsM__prev.addEventListener('click', function() {
			for(let item of galleryBox.children) {
				if(item.classList.contains("focus")) {
					if(item.previousElementSibling) {
						item.previousElementSibling.scrollIntoView({block: "center", behavior: "smooth"});
					}
				}
			}
		})

	}
} else {
	let galleryDetailsM__prev = document.querySelector('.galleryDetails-m__prev');
	let galleryDetailsM__next = document.querySelector('.galleryDetails-m__next');
	 galleryDetailsM__prev.style.display = 'none';
	 galleryDetailsM__next.style.display = 'none';
}

// ==== // slider galleryDetails-m =======================================================

});