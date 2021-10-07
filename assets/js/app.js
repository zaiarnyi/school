function email_test(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};
var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}

// Получить цифры из строки
//parseInt(itemContactpagePhone.replace(/[^\d]/g, ''))

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
    if (support === true) {
        document.querySelector('html').classList.add('_webp');
    } else {
        document.querySelector('html').classList.add('_no-webp');
    }
});

function ibg() {
    if (isIE()) {
        let ibg = document.querySelectorAll('._ibg');
        for (var i = 0; i < ibg.length; i++) {
            if (
                ibg[i].querySelector('img') &&
                ibg[i].querySelector('img').getAttribute('src') != null
            ) {
                ibg[i].style.backgroundImage =
                    'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}
ibg();

window.addEventListener('load', function () {
    if (document.querySelector('.wrapper')) {
        setTimeout(function () {
            document.querySelector('.wrapper').classList.add('_loaded');
        }, 0);
    }
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
    const hsh = location.hash.replace('#', '');
    if (document.querySelector('.popup_' + hsh)) {
        popup_open(hsh);
    } else if (document.querySelector('div.' + hsh)) {
        _goto(document.querySelector('.' + hsh), 500, '');
    }
}
//=================
//Menu
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu != null) {
    let delay = 500;
    let menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        if (unlock) {
            body_lock(delay);
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        }
    });
}
function menu_close() {
    let iconMenu = document.querySelector('.icon-menu');
    let menuBody = document.querySelector('.menu__body');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}
//=================
//BodyLock
function body_lock(delay) {
    let body = document.querySelector('body');
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function body_lock_remove(delay) {
    let body = document.querySelector('body');
    if (unlock) {
        let lock_padding = document.querySelectorAll('._lp');
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove('_lock');
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
function body_lock_add(delay) {
    let body = document.querySelector('body');
    if (unlock) {
        let lock_padding = document.querySelectorAll('._lp');
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight =
                window.innerWidth -
                document.querySelector('.wrapper').offsetWidth +
                'px';
        }
        body.style.paddingRight =
            window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add('_lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//=================
// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
    for (let index = 0; index < title.length; index++) {
        let el = title[index];
        let txt = el.innerHTML;
        let txt_words = txt.replace('  ', ' ').split(' ');
        let new_title = '';
        for (let index = 0; index < txt_words.length; index++) {
            let txt_word = txt_words[index];
            let len = txt_word.length;
            new_title = new_title + '<p>';
            for (let index = 0; index < len; index++) {
                let it = txt_word.substr(index, 1);
                if (it == ' ') {
                    it = '&nbsp;';
                }
                new_title = new_title + '<span>' + it + '</span>';
            }
            el.innerHTML = new_title;
            new_title = new_title + '&nbsp;</p>';
        }
    }
}
//=================
//Tabs
let tabs = document.querySelectorAll('._tabs');
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll('._tabs-item');
    let tabs_blocks = tab.querySelectorAll('._tabs-block');
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener('click', function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            e.preventDefault();
        });
    }
}
//=================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например:
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
console.log(
    'design and code Front-End Developer Denis Zaiarnyi | CV - https://drive.google.com/open?id=1I7rolN4vWrqOlxqCvlakFqV97V5JHZLh',
);
// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (
        item,
        index,
        self,
    ) {
        return !item.dataset.spollers.split(',')[0];
    });
    // Инициализация обычных слойлеров
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    }

    // Получение слойлеров с медиа запросами
    const spollersMedia = Array.from(spollersArray).filter(function (
        item,
        index,
        self,
    ) {
        return item.dataset.spollers.split(',')[0];
    });

    // Инициализация слойлеров с медиа запросами
    if (spollersMedia.length > 0) {
        const breakpointsArray = [];
        spollersMedia.forEach((item) => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(',');
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Получаем уникальные брейкпоинты
        let mediaQueries = breakpointsArray.map(function (item) {
            return (
                '(' +
                item.type +
                '-width: ' +
                item.value +
                'px),' +
                item.value +
                ',' +
                item.type
            );
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        // Работаем с каждым брейкпоинтом
        mediaQueries.forEach((breakpoint) => {
            const paramsArray = breakpoint.split(',');
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            // Объекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });
            // Событие
            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }
    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach((spollersBlock) => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('_init');
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener('click', setSpollerAction);
            } else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener('click', setSpollerAction);
            }
        });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach((spollerTitle) => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute('tabindex');
                    if (!spollerTitle.classList.contains('_active')) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute('tabindex', '-1');
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller')
                ? el
                : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller')
                ? true
                : false;
            if (!spollersBlock.querySelectorAll('._slide').length) {
                if (oneSpoller && !spollerTitle.classList.contains('_active')) {
                    hideSpollersBody(spollersBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector(
            '[data-spoller]._active',
        );
        if (spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500);
        }
    }
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
    gallery_init();
}
function gallery_init() {
    for (let index = 0; index < gallery.length; index++) {
        const el = gallery[index];

        lightGallery(el, {
            counter: false,
            selector: 'a',
            download: false,
        });
    }
}
//=================
//DigiFormat
function digi(str) {
    var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
    if (digi_animate.length > 0) {
        for (let index = 0; index < digi_animate.length; index++) {
            const el = digi_animate[index];
            const el_to = parseInt(el.innerHTML.replace(' ', ''));
            if (!el.classList.contains('_done')) {
                digi_animate_value(el, 0, el_to, 1500);
            }
        }
    }
}
function digi_animate_value(el, start, end, duration) {
    var obj = el;
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - remaining * range);
        obj.innerHTML = digi(value);
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();

    el.classList.add('_done');
}
//=================
//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
    const el = popup_link[index];
    el.addEventListener('click', function (e) {
        if (unlock) {
            let item = el.getAttribute('href').replace('#', '');
            let video = el.getAttribute('data-video');
            popup_open(item, video);
        }
        e.preventDefault();
    });
}
for (let index = 0; index < popups.length; index++) {
    const popup = popups[index];
    popup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__body')) {
            popup_close(e.target.closest('.popup'));
        }
    });
}
function popup_open(item, video = '') {
    let activePopup = document.querySelectorAll('.popup._active');
    if (activePopup.length > 0) {
        popup_close('', false);
    }
    let curent_popup = document.querySelector('.popup_' + item);
    if (curent_popup && unlock) {
        if (video != '' && video != null) {
            let popup_video = document.querySelector('.popup_video');
            popup_video.querySelector('.popup__video').innerHTML =
                '<iframe #src="https://www.youtube.com/embed/' +
                video +
                '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        }
        if (!document.querySelector('.menu__body._active')) {
            body_lock_add(500);
        }
        curent_popup.classList.add('_active');
        history.pushState('', '', '#' + item);
    }
}
function popup_close(item, bodyUnlock = true) {
    if (unlock) {
        if (!item) {
            for (let index = 0; index < popups.length; index++) {
                const popup = popups[index];
                let video = popup.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                popup.classList.remove('_active');
            }
        } else {
            let video = item.querySelector('.popup__video');
            if (video) {
                video.innerHTML = '';
            }
            item.classList.remove('_active');
        }
        if (!document.querySelector('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
        history.pushState('', '', window.location.href.split('#')[0]);
    }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
    for (let index = 0; index < popup_close_icon.length; index++) {
        const el = popup_close_icon[index];
        el.addEventListener('click', function () {
            popup_close(el.closest('.popup'));
        });
    }
}
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        popup_close();
    }
});

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
};
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
};
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
};
//========================================
//Wrap
function _wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
    for (var i = 0; i < el.length; i++) {
        el[i].classList.remove(class_name);
    }
}
//========================================
//IsHidden
function _is_hidden(el) {
    return el.offsetParent === null;
}
// ShowMore Beta ========================
let moreBlocks = document.querySelectorAll('._more-block');
if (moreBlocks.length > 0) {
    let wrapper = document.querySelector('.wrapper');
    for (let index = 0; index < moreBlocks.length; index++) {
        const moreBlock = moreBlocks[index];
        let items = moreBlock.querySelectorAll('._more-item');
        if (items.length > 0) {
            let itemsMore = moreBlock.querySelector('._more-link');
            let itemsContent = moreBlock.querySelector('._more-content');
            let itemsView = itemsContent.getAttribute('data-view');
            if (
                getComputedStyle(itemsContent).getPropertyValue(
                    'transition-duration',
                ) === '0s'
            ) {
                itemsContent.style.cssText = 'transition-duration: 1ms';
            }
            itemsMore.addEventListener('click', function (e) {
                if (itemsMore.classList.contains('_active')) {
                    setSize();
                } else {
                    setSize('start');
                }
                itemsMore.classList.toggle('_active');
                e.preventDefault();
            });

            let isScrollStart;
            function setSize(type) {
                let resultHeight;
                let itemsContentHeight = 0;
                let itemsContentStartHeight = 0;

                for (let index = 0; index < items.length; index++) {
                    if (index < itemsView) {
                        itemsContentHeight += items[index].offsetHeight;
                    }
                    itemsContentStartHeight += items[index].offsetHeight;
                }
                resultHeight =
                    type === 'start' ? itemsContentStartHeight : itemsContentHeight;
                isScrollStart = window.innerWidth - wrapper.offsetWidth;
                itemsContent.style.height = `${resultHeight}px`;
            }

            itemsContent.addEventListener('transitionend', updateSize, false);

            function updateSize() {
                let isScrollEnd = window.innerWidth - wrapper.offsetWidth;
                if (
                    (isScrollStart === 0 && isScrollEnd > 0) ||
                    (isScrollStart > 0 && isScrollEnd === 0)
                ) {
                    if (itemsMore.classList.contains('_active')) {
                        setSize('start');
                    } else {
                        setSize();
                    }
                }
            }
            window.addEventListener('resize', function (e) {
                if (!itemsMore.classList.contains('_active')) {
                    setSize();
                } else {
                    setSize('start');
                }
            });
            setSize();
        }
    }
}
//==RATING======================================
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}
// Основная функция
function initRatings() {
    let ratingActive, ratingValue;
    // "Бегаем" по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    // Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    // Инициализайция переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    // Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    // Возможность указать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function (e) {
                // Обновление переменных
                initRatingVars(rating);
                // Обновление активных звезд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener('mouseleave', function (e) {
                // Обновление активных звезд
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function (e) {
                // Обновление переменных
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    // "Отправить" на сервер
                    setRatingValue(ratingItem.value, rating);
                } else {
                    // Отобразить указанную оцнку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }

    async function setRatingValue(value, rating) {
        if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');

            // Отправика данных (value) на сервер
            let response = await fetch('rating.json', {
                method: 'GET',

                //body: JSON.stringify({
                //	userRating: value
                //}),
                //headers: {
                //	'content-type': 'application/json'
                //}
            });
            if (response.ok) {
                const result = await response.json();

                // Получаем новый рейтинг
                const newRating = result.newRating;

                // Вывод нового среднего результата
                ratingValue.innerHTML = newRating;

                // Обновление активных звезд
                setRatingActiveWidth();

                rating.classList.remove('rating_sending');
            } else {
                alert('Ошибка');

                rating.classList.remove('rating_sending');
            }
        }
    }
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    };
}
function makeEaseInOut(timing) {
    return function (timeFraction) {
        if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
        else return (2 - timing(2 * (1 - timeFraction))) / 2;
    };
}
function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}
function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
;
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
    if (document.querySelector('.slider__button')) {
        sliderSHowNextSlide(mainSliderData);
    }

    if (document.querySelector('.news') && document.querySelector('.news__pagination')) {
        sliderSHowNextSlide(newsSliderData);
    }

});

window.addEventListener('load', () => {
    if (window.innerWidth >= 992 && document.querySelector('.word-map')) {
        fetch(`wp-json/wp/v2/partnership?per_page=15&status=publish`)
            .then(res => res.json())
            .then(res => {
                if (res && res.length) {
                    wordMap(res);
                }
            });
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

//Events on word map
function wordMap(content) {
    const object = document.querySelector('object'),
        svgDocument = object.contentDocument,
        map = svgDocument.querySelector('#map'),
        listMenu = document.querySelectorAll('.info-word__list li'),
        infoDescr = document.querySelector('.word-map__info'),
        textPartnership = infoDescr.querySelector('.word-map__text');


    //Active first item and add text
    Array.from(listMenu)[0].classList.add('active');
    textPartnership.textContent = content[0].content.rendered.replace(/<[/]?p>/g, '').trim();

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
            textPartnership.style.cssText =
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
                elem = infoDescr.querySelector('.word-map__country');

            if (!e.currentTarget.classList.contains('active')) {
                listMenu.forEach((item) => item.classList.remove('active'));
                e.currentTarget.classList.add('active');

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

            elem.style.cssText =
                'transform:translate(8%,0);opacity:0;visibility:hidden;';
            textPartnership.style.cssText = 'transform:translate(-8%,0);opacity:0;visibility:hidden;';

            if (!check) {
                const currentCountry = listMenu[0].dataset.country,
                    mapId = map.querySelector(`#${currentCountry}`),
                    title = listMenu[0].textContent,
                    img = countryPicture(currentCountry, title);

                listMenu[0].classList.add('active');
                mapId.classList.add('click');
                elem.addEventListener('transitionend', () => {
                    elem.querySelector('img').remove();
                    elem.append(img);
                    elem.querySelector('span').textContent = title;
                    textPartnership.textContent = content[0].content.rendered.replace(/<[/]?p>/g, '').trim();
                    elem.style.cssText =
                        'transform:translate(0,0);opacity:1;visibility:visible;';
                    textPartnership.style.cssText = 'transform:translate(0,0);opacity:1;visibility:visible;';
                });
            } else {
                elem.addEventListener('transitionend', () => {
                    elem.querySelector('img').remove();
                    elem.append(img);
                    elem.querySelector('span').textContent = title;
                    const textContent = content.filter(item=> item.title.rendered === title);
                    textPartnership.textContent = textContent[0].content.rendered.replace(/<[/]?p>/g, '').trim();
                    elem.style.cssText =
                        'transform:translate(0,0);opacity:1;visibility:visible;';
                    textPartnership.style.cssText = 'transform:translate(0,0);opacity:1;visibility:visible;';
                });
            }
        });

        //hide cursore pointer
        hideCursore(item);
    });

    //Карта
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

            elem.style.cssText =
                'transform:translate(8%,0);opacity:0;visibility:hidden;';
            textPartnership.style.cssText = 'transform:translate(-8%,0);opacity:0;visibility:hidden;';
            if (!check) {
                const currentCountry = listMenu[0].dataset.country,
                    mapId = map.querySelector(`#${currentCountry}`),
                    title = listMenu[0].textContent,
                    img = countryPicture(currentCountry, title);

                elem.addEventListener('transitionend', () => {
                    listMenu[0].classList.add('active');
                    mapId.classList.add('click');
                    elem.querySelector('img').remove();
                    elem.append(img);
                    elem.querySelector('span').textContent = title;
                    textPartnership.textContent = content[0].content.rendered.replace(/<[/]?p>/g, '').trim();
                    elem.style.cssText =
                        'transform:translate(0,0);opacity:1;visibility:visible;';
                    textPartnership.style.cssText = 'transform:translate(0,0);opacity:1;visibility:visible;';
                });
            } else {
                elem.addEventListener('transitionend', () => {
                    elem.querySelector('img').remove();
                    elem.append(img);
                    elem.querySelector('span').textContent = title;
                    const textContent = content.filter(item=> item.title.rendered === title);
                    textPartnership.textContent = textContent[0].content.rendered.replace(/<[/]?p>/g, '').trim();
                    elem.style.cssText =
                        'transform:translate(0,0);opacity:1;visibility:visible;';
                    textPartnership.style.cssText = 'transform:translate(0,0);opacity:1;visibility:visible;';
                });
            }
        });
    });

    function countryPicture(name, title) {
        const img = document.createElement('img');
        img.src = `wp-content/themes/school/assets/img/country/${name.toUpperCase()}.svg`;
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
;
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
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
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
;
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";


function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();;
//let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
let forms = document.querySelectorAll('form');
if (forms.length > 0) {
    for (let index = 0; index < forms.length; index++) {
        const el = forms[index];
        el.addEventListener('submit', form_submit);
    }
}
async function form_submit(e) {
    let btn = e.target;
    let form = btn.closest('form');
    let error = form_validate(form);
    if (error == 0) {
        let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
        let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
        const message = form.getAttribute('data-message');
        const ajax = form.getAttribute('data-ajax');

        //SendForm
        if (ajax) {
            e.preventDefault();
            let formData = new FormData(form);
            form.classList.add('_sending');
            let response = await fetch(formAction, {
                method: formMethod,
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.classList.remove('_sending');
                if (message) {
                    popup_open(message + '-message');
                }
                form_clean(form);
            } else {
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        }
        // If test
        if (form.hasAttribute('data-test')) {
            e.preventDefault();
            if (message) {
                popup_open(message + '-message');
            }
            form_clean(form);
        }
    } else {
        let form_error = form.querySelectorAll('._error');
        if (form_error && form.classList.contains('_goto-error')) {
            _goto(form_error[0], 1000, 50);
        }
        e.preventDefault();
    }
}
function form_validate(form) {
    let error = 0;
    let form_req = form.querySelectorAll('._req');
    if (form_req.length > 0) {
        for (let index = 0; index < form_req.length; index++) {
            const el = form_req[index];
            if (!_is_hidden(el)) {
                error += form_validate_input(el);
            }
        }
    }
    return error;
}
function form_validate_input(input) {
    let error = 0;
    let input_g_value = input.getAttribute('data-value');

    if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
        if (input.value != input_g_value) {
            let em = input.value.replace(" ", "");
            input.value = em;
        }
        if (email_test(input) || input.value == input_g_value) {
            form_add_error(input);
            error++;
        } else {
            form_remove_error(input);
        }
    } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
        form_add_error(input);
        error++;
    } else {
        if (input.value == '' || input.value == input_g_value) {
            form_add_error(input);
            error++;
        } else {
            form_remove_error(input);
        }
    }
    return error;
}
function form_add_error(input) {
    input.classList.add('_error');
    input.parentElement.classList.add('_error');

    let input_error = input.parentElement.querySelector('.form__error');
    if (input_error) {
        input.parentElement.removeChild(input_error);
    }
    let input_error_text = input.getAttribute('data-error');
    if (input_error_text && input_error_text != '') {
        input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
    }
}
function form_remove_error(input) {
    input.classList.remove('_error');
    input.parentElement.classList.remove('_error');

    let input_error = input.parentElement.querySelector('.form__error');
    if (input_error) {
        input.parentElement.removeChild(input_error);
    }
}
function form_clean(form) {
    let inputs = form.querySelectorAll('input,textarea');
    for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove('_focus');
        el.classList.remove('_focus');
        el.value = el.getAttribute('data-value');
    }
    let checkboxes = form.querySelectorAll('.checkbox__input');
    if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes[index];
            checkbox.checked = false;
        }
    }
    let selects = form.querySelectorAll('select');
    if (selects.length > 0) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_default_value = select.getAttribute('data-default');
            select.value = select_default_value;
            select_item(select);
        }
    }
}


//Placeholers
let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
    if (inputs.length > 0) {
        for (let index = 0; index < inputs.length; index++) {
            const input = inputs[index];
            const input_g_value = input.getAttribute('data-value');
            input_placeholder_add(input);
            if (input.value != '' && input.value != input_g_value) {
                input_focus_add(input);
            }
            input.addEventListener('focus', function (e) {
                if (input.value == input_g_value) {
                    input_focus_add(input);
                    input.value = '';
                }
                if (input.getAttribute('data-type') === "pass") {
                    if (input.parentElement.querySelector('._viewpass')) {
                        if (!input.parentElement.querySelector('._viewpass').classList.contains('_active')) {
                            input.setAttribute('type', 'password');
                        }
                    } else {
                        input.setAttribute('type', 'password');
                    }
                }
                if (input.classList.contains('_date')) {
                    /*
                    input.classList.add('_mask');
                    Inputmask("99.99.9999", {
                        //"placeholder": '',
                        clearIncomplete: true,
                        clearMaskOnLostFocus: true,
                        onincomplete: function () {
                            input_clear_mask(input, input_g_value);
                        }
                    }).mask(input);
                    */
                }
                if (input.classList.contains('_phone')) {
                    //'+7(999) 999 9999'
                    //'+38(999) 999 9999'
                    //'+375(99)999-99-99'
                    input.classList.add('_mask');
                    Inputmask("+375 (99) 9999999", {
                        //"placeholder": '',
                        clearIncomplete: true,
                        clearMaskOnLostFocus: true,
                        onincomplete: function () {
                            input_clear_mask(input, input_g_value);
                        }
                    }).mask(input);
                }
                if (input.classList.contains('_digital')) {
                    input.classList.add('_mask');
                    Inputmask("9{1,}", {
                        "placeholder": '',
                        clearIncomplete: true,
                        clearMaskOnLostFocus: true,
                        onincomplete: function () {
                            input_clear_mask(input, input_g_value);
                        }
                    }).mask(input);
                }
                form_remove_error(input);
            });
            input.addEventListener('blur', function (e) {
                if (input.value == '') {
                    input.value = input_g_value;
                    input_focus_remove(input);
                    if (input.classList.contains('_mask')) {
                        input_clear_mask(input, input_g_value);
                    }
                    if (input.getAttribute('data-type') === "pass") {
                        input.setAttribute('type', 'text');
                    }
                }
            });
            if (input.classList.contains('_date')) {
                const calendarItem = datepicker(input, {
                    customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                    customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                    overlayButton: 'Применить',
                    overlayPlaceholder: 'Год (4 цифры)',
                    startDay: 1,
                    formatter: (input, date, instance) => {
                        const value = date.toLocaleDateString()
                        input.value = value
                    },
                    onSelect: function (input, instance, date) {
                        input_focus_add(input.el);
                    }
                });
                const dataFrom = input.getAttribute('data-from');
                const dataTo = input.getAttribute('data-to');
                if (dataFrom) {
                    calendarItem.setMin(new Date(dataFrom));
                }
                if (dataTo) {
                    calendarItem.setMax(new Date(dataTo));
                }
            }
        }
    }
}
function input_placeholder_add(input) {
    const input_g_value = input.getAttribute('data-value');
    if (input.value == '' && input_g_value != '') {
        input.value = input_g_value;
    }
}
function input_focus_add(input) {
    input.classList.add('_focus');
    input.parentElement.classList.add('_focus');
}
function input_focus_remove(input) {
    input.classList.remove('_focus');
    input.parentElement.classList.remove('_focus');
}
function input_clear_mask(input, input_g_value) {
    input.inputmask.remove();
    input.value = input_g_value;
    input_focus_remove(input);
}

let scr_blocks = document.querySelectorAll('._scr-sector');
let scr_items = document.querySelectorAll('._scr-item');
let scr_fix_block = document.querySelectorAll('._side-wrapper');
let scr_min_height = 750;

let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener('scroll', scroll_scroll);
function scroll_scroll() {
    let src_value = (currentScroll = pageYOffset);
    let header = document.querySelector('header.header');
    if (header !== null) {
        if (src_value > 10) {
            header.classList.add('_scroll');
        } else {
            header.classList.remove('_scroll');
        }
    }
    if (scr_blocks.length > 0) {
        for (let index = 0; index < scr_blocks.length; index++) {
            let block = scr_blocks[index];
            let block_offset = offset(block).top;
            let block_height = block.offsetHeight;

            /*
            if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
                let scrProcent = (src_value - block_offset) / block_height * 100;
                scrParallax(block, scrProcent, block_height);
            }
            */

            if (
                pageYOffset > block_offset - window.innerHeight / 1.5 &&
                pageYOffset < block_offset + block_height - window.innerHeight / 5
            ) {
                block.classList.add('_scr-sector_active');
            } else {
                if (block.classList.contains('_scr-sector_active')) {
                    block.classList.remove('_scr-sector_active');
                }
            }
            if (
                pageYOffset > block_offset - window.innerHeight / 2 &&
                pageYOffset < block_offset + block_height - window.innerHeight / 5
            ) {
                if (!block.classList.contains('_scr-sector_current')) {
                    block.classList.add('_scr-sector_current');
                }
            } else {
                if (block.classList.contains('_scr-sector_current')) {
                    block.classList.remove('_scr-sector_current');
                }
            }
        }
    }
    if (scr_items.length > 0) {
        for (let index = 0; index < scr_items.length; index++) {
            let scr_item = scr_items[index];
            let scr_item_offset = offset(scr_item).top;
            let scr_item_height = scr_item.offsetHeight;

            let scr_item_point =
                window.innerHeight - (window.innerHeight - scr_item_height / 3);
            if (window.innerHeight > scr_item_height) {
                scr_item_point = window.innerHeight - scr_item_height / 3;
            }

            if (
                src_value > scr_item_offset - scr_item_point &&
                src_value < scr_item_offset + scr_item_height
            ) {
                scr_item.classList.add('_active');
                scroll_load_item(scr_item);
            } else {
                if (scr_item.classList.contains('achievements')) {
                } else {
                    scr_item.classList.remove('_active');
                }
            }
            if (src_value > scr_item_offset - window.innerHeight) {
                if (scr_item.querySelectorAll('._lazy').length > 0) {
                    scroll_lazy(scr_item);
                }
            }
        }
    }
    if (scr_fix_block.length > 0) {
        fix_block(scr_fix_block, src_value);
    }
    let custom_scroll_line = document.querySelector('._custom-scroll__line');
    if (custom_scroll_line) {
        let window_height = window.innerHeight;
        let content_height = document.querySelector('.wrapper').offsetHeight;
        let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
        let custom_scroll_line_height = custom_scroll_line.offsetHeight;
        custom_scroll_line.style.transform =
            'translateY(' +
            ((window_height - custom_scroll_line_height) / 100) * scr_procent +
            'px)';
    }
    if (src_value > scrollDirection) {
        // downscroll code
    } else {
        // upscroll code
    }
    scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
    //document.addEventListener("DOMContentLoaded", scroll_scroll);
    scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
}
function scroll_load_item(scr_item) {
    if (
        scr_item.classList.contains('_load-map') &&
        !scr_item.classList.contains('_loaded-map')
    ) {
        let map_item = document.getElementById('map');
        if (map_item) {
            scr_item.classList.add('_loaded-map');
            map();
        }
    }
}
function scrParallax(block, scrProcent, blockHeight) {
    let prlxItems = block.querySelectorAll('._prlx-item');
    if (prlxItems.length > 0) {
        for (let index = 0; index < prlxItems.length; index++) {
            const prlxItem = prlxItems[index];
            let prlxItemAttr = prlxItem.dataset.prlx ? prlxItem.dataset.prlx : 3;
            const prlxItemValue =
                -1 * (((blockHeight / 100) * scrProcent) / prlxItemAttr);
            prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
        }
    }
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
    disableScroll();
    window.addEventListener('wheel', full_scroll);

    let swiperScrolls = document.querySelectorAll('._swiper_scroll');

    if (swiperScrolls.length > 0) {
        for (let index = 0; index < swiperScrolls.length; index++) {
            const swiperScroll = swiperScrolls[index];
            swiperScroll.addEventListener('mouseenter', function (e) {
                window.removeEventListener('wheel', full_scroll);
            });
            swiperScroll.addEventListener('mouseleave', function (e) {
                window.addEventListener('wheel', full_scroll);
            });
        }
    }
}
function getPrevBlockPos(current_block_prev) {
    let viewport_height = window.innerHeight;
    let current_block_prev_height = current_block_prev.offsetHeight;
    let block_pos = offset(current_block_prev).top;

    if (current_block_prev_height >= viewport_height) {
        block_pos = block_pos + (current_block_prev_height - viewport_height);
    }
    return block_pos;
}
function full_scroll(e) {
    let viewport_height = window.innerHeight;
    if (viewport_height >= scr_min_height) {
        if (scrolling_full) {
            let current_block = document.querySelector(
                '._scr-sector._scr-sector_current',
            );
            let current_block_pos = offset(current_block).top;
            let current_block_height = current_block.offsetHeight;
            let current_block_next = current_block.nextElementSibling;
            let current_block_prev = current_block.previousElementSibling;
            if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
                if (current_block_height <= viewport_height) {
                    if (current_block_prev) {
                        full_scroll_to_sector(getPrevBlockPos(current_block_prev));
                    }
                } else {
                    enableScroll();
                    if (currentScroll <= current_block_pos) {
                        if (current_block_prev) {
                            full_scroll_to_sector(getPrevBlockPos(current_block_prev));
                        }
                    }
                }
            } else if (
                e.keyCode == 38 ||
                e.keyCode == 33 ||
                e.deltaX < 0 ||
                e.deltaY > 0
            ) {
                if (current_block_height <= viewport_height) {
                    if (current_block_next) {
                        let block_pos = offset(current_block_next).top;
                        full_scroll_to_sector(block_pos);
                    }
                } else {
                    enableScroll();
                    if (current_block_next) {
                        let block_pos = offset(current_block_next).top;
                        if (currentScroll >= block_pos - viewport_height) {
                            full_scroll_to_sector(block_pos);
                        }
                    }
                }
            }
        } else {
            disableScroll();
        }
    } else {
        enableScroll();
    }
}
function full_scroll_to_sector(pos) {
    disableScroll();
    scrolling_full = false;
    _goto(pos, 800);

    let scr_pause = 500;
    if (navigator.appVersion.indexOf('Mac') != -1) {
        scr_pause = 1000;
    }
    setTimeout(function () {
        scrolling_full = true;
    }, scr_pause);
}

//ScrollOnClick (Navigation)
let link = document.querySelectorAll('._goto-block');
if (link) {
    let blocks = [];
    for (let index = 0; index < link.length; index++) {
        let el = link[index];
        let block_name = el.getAttribute('href').replace('#', '');
        if (block_name != '' && !~blocks.indexOf(block_name)) {
            blocks.push(block_name);
        }
        el.addEventListener('click', function (e) {
            if (document.querySelector('.menu__body._active')) {
                menu_close();
                body_lock_remove(500);
            }
            let target_block_class = el.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);
            _goto(target_block, 300);
            e.preventDefault();
        });
    }

    window.addEventListener('scroll', function (el) {
        let old_current_link = document.querySelectorAll('._goto-block._active');
        if (old_current_link) {
            for (let index = 0; index < old_current_link.length; index++) {
                let el = old_current_link[index];
                el.classList.remove('_active');
            }
        }
        for (let index = 0; index < blocks.length; index++) {
            let block = blocks[index];
            let block_item = document.querySelector('.' + block);
            if (block_item) {
                let block_offset = offset(block_item).top;
                let block_height = block_item.offsetHeight;
                if (
                    pageYOffset > block_offset - window.innerHeight / 3 &&
                    pageYOffset < block_offset + block_height - window.innerHeight / 3
                ) {
                    let current_links = document.querySelectorAll(
                        '._goto-block[href="#' + block + '"]',
                    );
                    for (let index = 0; index < current_links.length; index++) {
                        let current_link = current_links[index];
                        current_link.classList.add('_active');
                    }
                }
            }
        }
    });
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
    for (let index = 0; index < goto_links.length; index++) {
        let goto_link = goto_links[index];
        goto_link.addEventListener('click', function (e) {
            let target_block_class = goto_link.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);
            _goto(target_block, 300);
            e.preventDefault();
        });
    }
}
function _goto(target_block, speed, offset = 0) {
    let header = '';
    //OffsetHeader
    //if (window.innerWidth < 992) {
    //	header = 'header';
    //}
    let options = {
        speedAsDuration: true,
        speed: speed,
        header: header,
        offset: offset,
        easing: 'easeOutQuad',
    };
    let scr = new SmoothScroll();
    scr.animateScroll(target_block, '', options);
}

//SameFunctions
function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function disableScroll() {
    if (window.addEventListener)
        // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    /*if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }*/
}

function fix_block(scr_fix_block, scr_value) {
    let window_width = parseInt(window.innerWidth);
    let window_height = parseInt(window.innerHeight);
    let header_height =
        parseInt(document.querySelector('header').offsetHeight) + 15;
    for (let index = 0; index < scr_fix_block.length; index++) {
        const block = scr_fix_block[index];
        let block_width = block.getAttribute('data-width');
        const item = block.querySelector('._side-block');
        if (!block_width) {
            block_width = 0;
        }
        if (window_width > block_width) {
            if (item.offsetHeight < window_height - (header_height + 30)) {
                if (scr_value > offset(block).top - (header_height + 15)) {
                    item.style.cssText =
                        'position:fixed;bottom:auto;top:' +
                        header_height +
                        'px;width:' +
                        block.offsetWidth +
                        'px;left:' +
                        offset(block).left +
                        'px;';
                } else {
                    gotoRelative(item);
                }
                if (
                    scr_value >
                    block.offsetHeight +
                    offset(block).top -
                    (item.offsetHeight + (header_height + 15))
                ) {
                    block.style.cssText = 'position:relative;';
                    item.style.cssText =
                        'position:absolute;bottom:0;top:auto;left:0px;width:100%';
                }
            } else {
                gotoRelative(item);
            }
        }
    }
    function gotoRelative(item) {
        item.style.cssText = 'position:relative;bottom:auto;top:0px;left:0px;';
    }
}
