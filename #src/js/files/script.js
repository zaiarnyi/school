document.addEventListener('DOMContentLoaded', () => {
	toogleSearch();
	clearSearchField();
});
//Show/Hide Search filed
function toogleSearch() {
	const menuSeacrh = document.querySelector('.menu__search'),
		btnSearch = menuSeacrh.querySelector('.search-menu__button'),
		fieldSearch = menuSeacrh.querySelector('.search-menu__field');

	btnSearch.addEventListener('click', () => {
		fieldSearch.classList.toggle('active');
		btnSearch.classList.toggle('active');
	});

	document.body.addEventListener('click', (e) => {
		const path = e.path || (e.composedPath && e.composedPath());
		if (!path.includes(menuSeacrh)) {
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
