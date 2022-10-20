(() => {
const burger = document.querySelector('.burger-btn');
const body = document.body;
const container = document.querySelector('.blokmenu__container');

burger.addEventListener('click', () => { openMenu() } );

function openMenu() {
	const overlay = document.createElement('div');
	const btnExit = document.createElement('div');
	overlay.classList.add('blokmenu__bigexit', 'js-closemenu');
	btnExit.classList.add('blokmenu__exit', 'js-closemenu');
	overlay.addEventListener('click', () => { closeMenu() });	
	btnExit.addEventListener('click', () => { closeMenu() });	
	container.append(overlay);
	document.querySelector('.blokmenu__wrapper').append(btnExit); 
	body.classList.add('mobilmenu');
}




function closeMenu() {
	body.classList.remove('mobilmenu');
	document.querySelectorAll('.js-closemenu').forEach(function(el) {
		el.remove();
	});
}



openMenu();

})();