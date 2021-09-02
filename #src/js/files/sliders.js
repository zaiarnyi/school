//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false,
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) {}

let slider_main = new Swiper('.slider__items', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	autoHeight: true,
	speed: 800,
	lazy: true,
	// Arrows
	navigation: {
		nextEl: '.slider__pagination.slider__pagination_next',
		prevEl: '.slider__pagination.slider__pagination_prev',
	},

	breakpoints: {
		320: {
			simulateTouch: true,
		},
		480: {},
		700: {},
		992: {},
		1024: {
			slidesPerView: 4,
			simulateTouch: false,
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	},
});
if (document.querySelector('.news')) {
	let slider_news = new Swiper('.news__slider', {
		observer: true,
		slidesPerView: 1,
		observeParents: true,
		autoHeight: true,
		speed: 800,
		lazy: true,

		// Arrows
		navigation: {
			nextEl: '.news__arrow.news__arrow_next',
			prevEl: '.news__arrow.news__arrow_prev',
		},

		breakpoints: {
			320: {
				simulateTouch: true,
				autoHeight: true,
				slidesPerView: 1,
			},
			550: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				simulateTouch: false,
			},
			1040: {
				slidesPerView: 4,
			},
		},

		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
	});
}
