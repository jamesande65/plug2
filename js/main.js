$(document).ready(function(){
	//calls functions
	toggleSearch();
	scrollToTop();
	mobileMenu();
});

$(window).on('load', function () {
	//calls functions
});

$(window).on('resize', function () {
	//calls functions
});

// $(window).load(function() {
// 	//calls functions
// });

$(window).scroll(function() {
	//calls functions
	toggleScrollToTop();
	handleHeaderOnScroll();
});

//FUNCTIONS

// Search panel toggle
function toggleSearch() {
	let searchToggleButton = $('.js-search-toggle-button');
	let search = $('.js-search');

	searchToggleButton.on('click', function() {
		search.toggleClass('active');
	})
}

// Scroll to top button show/hide
function toggleScrollToTop() {
	let scrollHeight = $(document).height();
	let scrollPosition = $(window).height() + $(window).scrollTop();
	if (scrollPosition >= scrollHeight - 100) {
		$('.js-scroll-top').addClass('active');
	} else {
		$('.js-scroll-top').removeClass('active');
	}
}

function scrollToTop() {
	let scrollToTopButton = $('.js-scroll-top');
	scrollToTopButton.on('click', function() {
		scrollToTopButton.hasClass('active') ?
		$("html, body").animate({ scrollTop: 0 }, 500) :
		null;
	});
};

function handleHeaderOnScroll() {
	if (window.scrollY >= 80) {
		$('.js-header').addClass('active');
	} else {
		$('.js-header').removeClass('active');
	}
}

function mobileMenu() {
	let mobileMenuButton = $('.js-mobile-menu-toggle');
	let mobileMenu = $('.js-mobile-menu');
	mobileMenuButton.on('click', function() {
		mobileMenu.toggleClass('active');
	})
}