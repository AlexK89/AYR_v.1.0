var app = document.querySelectorAll('.popup .our_app-img img');
var arrow = document.querySelectorAll('.arrow');
var showPopup = document.querySelector('.show-popup img');
var journey = document.querySelector('.book_journey button');
var counter = 0;

journey.addEventListener('click', function (ev) {
	ev.stopPropagation();
	document.querySelector('.popup').classList.add("active");
});

showPopup.addEventListener('click', function (ev) {
	ev.stopPropagation();
	document.querySelector('.popup').classList.add("active");
});

// Arrows listener
arrow.forEach(function (item) {
	item.addEventListener('click', function (ev) {
		ev.stopPropagation();
		if (this.classList.contains('arrow_left')) {
			scrollLeft();
		}
		if (this.classList.contains('arrow_right')) {
			scrollRight();
		}
	})
});

// Left and right keys listener
document.addEventListener('keydown', function(event){
	if (event.keyCode == 37) {
		scrollLeft();
	}
	if (event.keyCode == 39) {
		scrollRight();
	}
});

// Slide left
function scrollLeft() {
	if (counter > 0) {
		app[counter].classList.remove("active_img");
		counter--;
		app[counter].classList.add("active_img");
	}
}

// Slide right
function scrollRight() {
	if (counter < 3) {
		app[counter].classList.remove("active_img");
		counter++;
		app[counter].classList.add("active_img");
	}
}

//Dropdown menu
var showMenu = document.querySelector('#show-menu');

showMenu.addEventListener('click', function (ev) {
	ev.stopPropagation();

	var menu = document.querySelector('.menu');

	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
	} else {
		menu.classList.add('active');
	}
});

//close popups when click outside
document.querySelector('body').addEventListener('click', function () {
	var activeClass = document.querySelectorAll('.active');

	activeClass.forEach(function (value) {
		value.classList.remove('active');
	});

	app[counter].classList.remove("active_img");
	counter = 0;
	app[counter].classList.add("active_img");
});