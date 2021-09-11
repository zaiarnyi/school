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
	showMoreListCountry();
});

window.addEventListener('load', () => {
	if (window.innerWidth >= 992 && document.querySelector('.word-map')) {
		wordMap();
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

//Show more country
function showMoreListCountry() {
	const country = document.querySelectorAll('.info-word__list li'),
		preParendElem = document.querySelector('.info-word');
	if (country.length > 10) {
		const div = document.createElement('div'),
			button = document.createElement('button');

		div.classList.add('info-word__show-more');
		button.classList.add('info-word__button');
		button.textContent = 'Показати ще';

		div.append(button);
		preParendElem.append(div);
		wordMap();
	}
}

//Events on word map
function wordMap() {
	const object = document.querySelector('object'),
		svgDocument = object.contentDocument,
		map = svgDocument.querySelector('#map'),
		listMenu = document.querySelectorAll('.info-word__list li'),
		infoDescr = document.querySelector('.word-map__info');

	//Список меню
	listMenu.forEach((item) => {
		//First show country
		if (item.classList.contains('active')) {
			const country = item.dataset.country,
				title = item.textContent,
				img = countryPicture(country, title),
				elem = infoDescr.querySelector('.word-map__country');

			elem.style.cssText =
				'transform:translate(0,0);opacity:1;visibility:visible;';
			elem.querySelector('span').textContent = title;
			elem.append(img);
		}

		//Mouse
		item.addEventListener('mouseenter', () => {
			const countryValue = item.dataset.country,
				currentMapCountry = map.querySelector(`#${countryValue}`);
			if (!currentMapCountry.classList.contains('active')) {
				currentMapCountry.classList.add('mouse');
			}
		});

		item.addEventListener('mouseleave', () => {
			const countryValue = item.dataset.country,
				currentMapCountry = map.querySelector(`#${countryValue}`);
			currentMapCountry.classList.remove('mouse');
		});

		//Click
		item.addEventListener('click', (e) => {
			const countryValue = item.dataset.country,
				currentMapCountry = map.querySelector(`#${countryValue}`),
				title = item.textContent,
				img = countryPicture(countryValue, title),
				elem = infoDescr.querySelector('.word-map__country'),
				textInfo = infoDescr.querySelector('.word-map__text');

			if (!e.currentTarget.classList.contains('active')) {
				listMenu.forEach((item) => item.classList.remove('active'));
				e.target.classList.add('active');

				[...map.children].forEach((item) => {
					item.classList.remove('click');
				});
				currentMapCountry.classList.add('click');
			} else {
				e.currentTarget.classList.remove('active');
				currentMapCountry.classList.remove('click');
			}

			const check = [...listMenu].some((name) =>
				name.classList.contains('active'),
			);
			if (!check) {
				const currentCountry = listMenu[0].dataset.country,
					mapId = map.querySelector(`#${currentCountry}`),
					title = listMenu[0].textContent,
					img = countryPicture(currentCountry, title);

				elem.style.cssText =
					'transform:translate(10%,0);opacity:0;visibility:hidden;';
				textInfo.style.cssText = 'opacity:0;visibility:hidden;';

				elem.addEventListener('transitionend', () => {
					listMenu[0].classList.add('active');
					mapId.classList.add('click');
					elem.querySelector('img').remove();
					elem.append(img);
					elem.querySelector('span').textContent = title;
					elem.style.cssText =
						'transform:translate(0,0);opacity:1;visibility:visible;';
					textInfo.style.cssText = 'opacity:1;visibility:visible;';
				});
			} else {
				elem.style.cssText =
					'transform:translate(10%,0);opacity:0;visibility:hidden;';
				textInfo.style.cssText = 'opacity:0;visibility:hidden;';

				elem.addEventListener('transitionend', () => {
					elem.style.cssText =
						'transform:translate(0,0);opacity:1;visibility:visible;';
					textInfo.style.cssText = 'opacity:1;visibility:visible;';
					elem.querySelector('img').remove();
					elem.append(img);
					elem.querySelector('span').textContent = title;
				});
			}
		});

		//hide cursore pointer
		hideCursore(item);
	});

	[...map.children].forEach((item) => {
		item.addEventListener('mouseenter', (e) => {
			const currentID = item.id,
				menuItem = document.querySelector(
					`.info-word__list li[data-country=${currentID}]`,
				);
			if (menuItem) {
				menuItem.classList.add('mouse');
				e.currentTarget.classList.add('mouse');
			}
		});
		item.addEventListener('mouseleave', (e) => {
			const currentID = item.id,
				menuItem = document.querySelector(
					`.info-word__list li[data-country=${currentID}]`,
				);
			if (menuItem && menuItem.classList.contains('mouse')) {
				menuItem.classList.remove('mouse');
				e.currentTarget.classList.remove('mouse');
			}
		});
		item.addEventListener('click', (e) => {
			const currentID = item.id,
				menuItem = document.querySelector(
					`.info-word__list li[data-country=${currentID}]`,
				),
				title = menuItem.textContent,
				img = countryPicture(currentID, title),
				elem = infoDescr.querySelector('.word-map__country');

			if (!e.currentTarget.classList.contains('click')) {
				[...map.children].forEach((item) => item.classList.remove('click'));
				listMenu.forEach((item) => item.classList.remove('active'));
				if (menuItem) {
					menuItem.classList.add('active');
					e.currentTarget.classList.add('click');
				}
			} else {
				e.currentTarget.classList.remove('click');
				menuItem.classList.remove('active');
			}

			const check = [...listMenu].some((name) =>
				name.classList.contains('active'),
			);

			if (!check) {
				const currentCountry = listMenu[0].dataset.country,
					mapId = map.querySelector(`#${currentCountry}`),
					title = listMenu[0].textContent,
					img = countryPicture(currentCountry, title);

				listMenu[0].classList.add('active');
				mapId.classList.add('click');
				elem.querySelector('img').remove();
				elem.append(img);
				elem.querySelector('span').textContent = title;
			} else {
				elem.querySelector('img').remove();
				elem.append(img);
				elem.querySelector('span').textContent = title;
			}
		});
	});

	function countryPicture(name, title) {
		const img = document.createElement('img');
		img.src = `img/country/${name.toUpperCase()}.svg`;
		img.setAttribute('alt', `Країна ${title}`);
		return img;
	}

	function hideCursore(item) {
		const id = item.dataset.country;
		if (map.querySelector(`#${id}`)) {
			const group = map.querySelector(`#${id}`);
			group.style.cursor = 'pointer';
		}
	}
}
