$(document).ready(function(){
	//calls functions
	scrollToTop();
	mobileMenu();
	promoCodeCopy();

	$(window).scroll(function() {
		//calls functions
		toggleScrollToTop();
		handleHeaderOnScroll();
	});
});

//FUNCTIONS

// Scroll to top button show/hide
function toggleScrollToTop() {
	if (window.scrollY >= 80) {
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

	let mobileSubmenuButtons = $('.js-submenu-wrapper>a');
	mobileSubmenuButtons.length && mobileSubmenuButtons.each((index, item) => {
		$(item).on('click', e => {
			e.preventDefault();
			$(e.target).toggleClass('active');
		});
	});
}

function promoCodeCopy() {
	if ($('.js-promo-code-wrapper').length) {
		$('.js-promo-code-copy').on('click', function(e) {
			e.stopPropagation();
			let value = $(e.target.closest('.js-promo-code-wrapper')).find('.js-promo-code').text();

			var $temp = $("<input>");
				$("body").append($temp);
				$temp.val(value).select();
				document.execCommand("copy");
				$temp.remove();
			// console.log($(e.target.closest('.js-promo-code-wrapper')).find('.js-promo-code'));
		})
	}
}