$(document).ready(function () {

    'use strict';
    AOS.init();
    document.querySelectorAll('.nav__item a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.nav__item a').forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        });
    });

    var isMobile = false;
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    } else {
        $('html').addClass('no-touch');
        isMobile = false;
    }


    $('.js-carousel-review').each(function () {
        var testimonialsCarousel = new Swiper('.js-carousel-review', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 300,
            grabCursor: true,
            watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            /*autoplay: {
          delay: 5000,
      },*/
            breakpoints: {
                580: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 1
                }
            }
        });
    });


    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
            .on('sticky_kit:bottom', function (e) {
                $(this).parent().css('position', 'static');
            })
            .on('sticky_kit:unbottom', function (e) {
                $(this).parent().css('position', 'relative');
            });
    }

    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    }

    var screen = 1200;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }

    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function () {
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));

    $('.js-btn-toggle').on('click', function (e) {
        $('.js-show').toggle('slow');
        e.preventDefault();
    });

    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();

        $backToTop.hide();

        $(window).scroll(function () {
            var windowScrollTop = $(window).scrollTop();
            if (windowScrollTop > $showBackTotop) {
                $backToTop.fadeIn('fast');
            } else {
                $backToTop.fadeOut('fast');
            }
        });

        $backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate({scrollTop: 0}, 'fast');
        });
    }

    scrollToTop();

    var $portfolioMasonry = $('.js-masonry').isotope({
        itemSelector: '.gallery-grid__item',
        layoutMode: 'fitRows',
        percentPosition: true,
        resizable: false,
        transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },
        masonry: {
            columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
});