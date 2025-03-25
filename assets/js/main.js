import '../node_modules/jquery/dist/jquery.min.js';
import './renderData.js';
import '../node_modules/sticky-kit/dist/sticky-kit.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './theme-toggle.js';

AOS.init();

$(document).ready(function () {
    'use strict';

    const $navLinks = $('.nav__item a');
    const $stickyColumns = $('.sticky-column');
    const $backToTop = $('.back-to-top');
    const screenBreakpoint = 1200;

    $navLinks.on('click', function (e) {
        e.preventDefault();
        $navLinks.removeClass('active');
        $(this).addClass('active');

        const targetElement = document.getElementById(this.getAttribute('href').substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    });

    if ($('.js-carousel-review').length) {
        new Swiper('.js-carousel-review', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 300,
            loop: true,
            grabCursor: true,
            watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 }
            }
        });
    }

    function toggleStickyKit(enable) {
        if (enable) {
            $stickyColumns.stick_in_parent({ parent: '.sticky-parent' });
        } else {
            $stickyColumns.trigger('sticky_kit:detach');
        }
    }

    function checkStickyKit() {
        toggleStickyKit($(window).width() >= screenBreakpoint);
    }

    checkStickyKit();
    $(window).on('resize', debounce(checkStickyKit, 200));

    $('.js-btn-toggle').on('click', function (e) {
        e.preventDefault();
        $('.js-show').toggle('slow');
    });

    function scrollToTopHandler() {
        $backToTop.toggle($(window).scrollTop() > $(window).height());
    }

    $(window).on('scroll', scrollToTopHandler);
    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    scrollToTopHandler();
});

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
