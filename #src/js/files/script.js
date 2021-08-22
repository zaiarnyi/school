document.addEventListener('DOMContentLoaded', () => {
	toggleSearch();
	clearSearchField();

	const mainSliderData = {
		slides: '.slider__item',
		nextBtn: '.slider__pagination_next',
		prevBtn: '.slider__pagination_prev',
	};

	const newsSliderData = {
		slides: '.news__slide',
		nextBtn: '.news__arrow_next',
		prevBtn: '.news__arrow_prev',
	};
	sliderSHowNextSlide(mainSliderData);
	if (document.querySelector('.news')) {
		sliderSHowNextSlide(newsSliderData);
	}
});
//Show/Hide Search filed
function toggleSearch() {
	const menuSearch = document.querySelector('.menu__search'),
		btnSearch = menuSearch.querySelector('.search-menu__button'),
		fieldSearch = menuSearch.querySelector('.search-menu__field');

	btnSearch.addEventListener('click', () => {
		fieldSearch.classList.toggle('active');
		btnSearch.classList.toggle('active');
	});

	document.body.addEventListener('click', (e) => {
		const path = e.path || (e.composedPath && e.composedPath());
		if (!path.includes(menuSearch)) {
			fieldSearch.classList.remove('active');
			btnSearch.classList.remove('active');
		}
	});
}
//Clear  Search field
function clearSearchField() {
	const input = document.querySelector('.field-search__input'),
		btn = document.querySelector('.field-search__button');

	btn.addEventListener('click', () => {
		input.value = '';
	});
}

//Hover for slider
function sliderSHowNextSlide(data) {
	let nextBtn = document.querySelector(data.nextBtn),
		nextArrow = window.getComputedStyle(nextBtn).backgroundImage,
		prevBtn = document.querySelector(data.prevBtn),
		prevArrow = window.getComputedStyle(prevBtn).backgroundImage,
		slides = document.querySelectorAll(data.slides),
		widthDevice = window.innerWidth,
		count = 0,
		viewSlide =
			widthDevice >= 1268
				? 4
				: widthDevice >= 992
				? 3
				: widthDevice >= 768
				? 3
				: widthDevice >= 320
				? 2
				: 0;

	prevBtn.addEventListener('mouseenter', (e) => {
		if (!e.target.classList.contains('swiper-button-disabled')) {
			const prevSlide = document.querySelector('.swiper-slide-prev img'),
				imageSrc = prevSlide.src;
			e.target.classList.add('active');
			e.target.style.backgroundImage = `url(${imageSrc})`;
			e.target.title = `${prevSlide.alt}`;
		}
	});
	prevBtn.addEventListener('mouseleave', (e) => {
		e.target.classList.remove('active');
		e.target.style.backgroundImage = prevArrow;
	});
	prevBtn.addEventListener('click', (e) => {
		if (e.target.classList.contains('swiper-button-disabled')) {
			count = 0;
			e.target.classList.remove('active');
			e.target.style.backgroundImage = prevArrow;
		} else {
			const prevSlide = document.querySelector('.swiper-slide-prev img'),
				imageSrc = prevSlide.src;
			e.target.classList.add('active');
			e.target.style.backgroundImage = `url(${imageSrc})`;
			e.target.title = `${prevSlide.alt}`;
		}
	});

	nextBtn.addEventListener('mouseenter', (e) => {
		if (!nextBtn.classList.contains('swiper-button-disabled')) {
			const next = slides[viewSlide + count];
			const imgSrc = next.querySelector('img').src;
			e.target.classList.add('active');
			e.target.style.backgroundImage = `url(${imgSrc})`;
			e.target.title = `${next.querySelector('img').alt}`;
		}
	});
	nextBtn.addEventListener('mouseleave', (e) => {
		e.target.classList.remove('active');
		e.target.style.backgroundImage = nextArrow;
	});
	nextBtn.addEventListener('click', (e) => {
		count += 1;
		if (e.target.classList.contains('swiper-button-disabled')) {
			e.target.classList.remove('active');
			e.target.style.backgroundImage = nextArrow;
		} else {
			const next = slides[viewSlide + count];
			const imgSrc = next.querySelector('img').src;
			e.target.classList.add('active');
			e.target.style.backgroundImage = `url(${imgSrc})`;
			e.target.title = `${next.querySelector('img').alt}`;
		}
	});
}
