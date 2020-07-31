// === Burger Handler =====================================================================
	if($('.burger').length>0) {
		$('.burger').click(function(e) {
			let _ = this;

			console.log(_.querySelector('span:nth-child(1)'))

			let classNameElem = this.dataset.activel;
			let menu = document.querySelector(`.${classNameElem}`);
			
			if(classNameElem == 'menu-header') {
				handlerMenu(e);
			}

			if(classNameElem == 'tabs-material') {
				burgerBtnAnimation();
			}

			function burgerBtnAnimation() {
				_.querySelector('span:nth-child(1)').classList.toggle('first');
				_.querySelector('span:nth-child(2)').classList.toggle('second');
				_.querySelector('span:nth-child(3)').classList.toggle('third');
				_.querySelector('span:nth-child(4)').classList.toggle('fourth');
				// $('.burger span:nth-child(1)').toggleClass('first');
				// $('.burger span:nth-child(2)').toggleClass('second');
				// $('.burger span:nth-child(3)').toggleClass('third');
				// $('.burger span:nth-child(4)').toggleClass('fourth');
			
				$('.' + classNameElem).slideToggle(300);
			}
			//$('.burger').click(handlerMenu);

			function handlerMenu(e) {
				if(e.target.closest('.burger-wrap')) {
					if(menu.classList.contains('open')) {
						closeMenu();
					} else {
						openMenu();
					}
				} 
			}

			function closeMenu(e) {
				menu.classList.remove('open');

				$('.burger span:nth-child(1)').removeClass('first');
				$('.burger span:nth-child(2)').removeClass('second');
				$('.burger span:nth-child(3)').removeClass('third');
				$('.burger span:nth-child(4)').removeClass('fourth');
			}

			function openMenu(e) {
				menu.classList.add('open');

				$('.burger span:nth-child(1)').addClass('first');
				$('.burger span:nth-child(2)').addClass('second');
				$('.burger span:nth-child(3)').addClass('third');
				$('.burger span:nth-child(4)').addClass('fourth');
			}

			menu.addEventListener('swiped-left', () => {
				closeMenu();
			});

			document.body.addEventListener('click', (e) => {
				if(!e.target.closest('.burger-wrap') && !e.target.closest('.menu-header')) {
					closeMenu();
				}
			})
		})
	}

// === Burger Handler =====================================================================	