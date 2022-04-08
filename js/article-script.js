// Search Bar Scroll Behavior
const searchBar = document.querySelector("form");
const offset = searchBar.getBoundingClientRect();
const menuButton = document.querySelector('.menu-button');
const smallMenu = document.querySelector('.small-nav');

// Scroll Up Button Functionality
const scrollUp = document.querySelector('.scroll-up');
scrollUp.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// Hides collapsed navigation menu when window width increases to 1150px or bigger
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1150) {
    if (smallMenu.getAttribute('style')) {
        smallMenu.removeAttribute('style');
    }
  }
});

// Toggle to make the collapsed navigation menu hide/appear when user selects menu button
menuButton.addEventListener('click', function () {
	if (smallMenu.getAttribute('style')) {
		smallMenu.removeAttribute('style');
	} else if (!smallMenu.getAttribute('style')) {
		smallMenu.style.display = 'block';
	}
});

// Functionality for Search Bar
function stickyPosition () {
	if (window.pageYOffset > offset.top) {
		searchBar.style.position = 'fixed';
		searchBar.style.top = 0;
	} else {
		searchBar.style.position = 'relative';
		searchBar.style.top = '';
	}
}

window.addEventListener('scroll', stickyPosition);

// Expandable Div Script
let expandContainer = document.querySelectorAll('.expand-container');
expandContainer = Array.from(expandContainer);

expandContainer.forEach((container) => {
	let expandContent = container.lastElementChild;
	expandContent.setAttribute('style', 'display:none;');
});

expandContainer.forEach((container) => {
	let expandButton = container.firstElementChild;
	let expandContent = container.lastElementChild;
	let expandButtonImg = expandButton.firstElementChild;

	expandButton.addEventListener('click', function () {
		if (!expandContent.getAttribute('style') === true) {
			expandButtonImg.setAttribute('src', './images/add-icon-white.png');
			expandButton.removeAttribute('style');
			expandContent.setAttribute('style', 'display:none;');
		} else if (!expandContent.getAttribute('style') === false) {
			expandButtonImg.setAttribute('src', './images/remove-icon-white.png');
			expandButton.setAttribute('style', 'border:2px solid #5a189a');
			expandContent.removeAttribute('style');
		}
	});
});
