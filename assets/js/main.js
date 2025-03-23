import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

AOS.init();
(function () {
    var A, M;
    A = window.jQuery, M = A(window), A.fn.stick_in_parent = function (t) {
        var w, _, i, o, x, e, P, V, F, C, z, I;
        for (null == t && (t = {}), I = t.sticky_class, x = t.inner_scrolling, z = t.recalc_every, C = t.parent, V = t.offset_top, P = t.spacer, _ = t.bottoming, null == V && (V = 0), null == C && (C = void 0), null == x && (x = !0), null == I && (I = "is_stuck"), w = A(document), null == _ && (_ = !0), F = function (t) {
            var i;
            return window.getComputedStyle ? (t = window.getComputedStyle(t[0]), i = parseFloat(t.getPropertyValue("width")) + parseFloat(t.getPropertyValue("margin-left")) + parseFloat(t.getPropertyValue("margin-right")), "border-box" !== t.getPropertyValue("box-sizing") && (i += parseFloat(t.getPropertyValue("border-left-width")) + parseFloat(t.getPropertyValue("border-right-width")) + parseFloat(t.getPropertyValue("padding-left")) + parseFloat(t.getPropertyValue("padding-right"))), i) : t.outerWidth(!0)
        }, i = function (s, r, n, l, a, c, p, u) {
            var d, t, f, g, h, k, y, m, i, b, v, e;
            if (!s.data("sticky_kit")) {
                if (s.data("sticky_kit", !0), h = w.height(), y = s.parent(), null != C && (y = y.closest(C)), !y.length) throw "failed to find stick parent";
                if (d = f = !1, (v = null != P ? P && s.closest(P) : A("<div />")) && v.css("position", s.css("position")), (m = function () {
                    var t, i, o;
                    if (!u && (h = w.height(), t = parseInt(y.css("border-top-width"), 10), i = parseInt(y.css("padding-top"), 10), r = parseInt(y.css("padding-bottom"), 10), n = y.offset().top + t + i, l = y.height(), f && (d = f = !1, null == P && (s.insertAfter(v), v.detach()), s.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(I), o = !0), a = s.offset().top - (parseInt(s.css("margin-top"), 10) || 0) - V, c = s.outerHeight(!0), p = s.css("float"), v && v.css({
                        width: F(s),
                        height: c,
                        display: s.css("display"),
                        "vertical-align": s.css("vertical-align"),
                        float: p
                    }), o)) return e()
                })(), c !== l) return g = void 0, k = V, b = z, e = function () {
                    var t, i, o, e;
                    if (!u && (o = !1, null != b && (--b <= 0 && (b = z, m(), o = !0)), o || w.height() === h || m(), o = M.scrollTop(), null != g && (i = o - g), g = o, f ? (_ && (e = l + n < o + c + k, d && !e && (d = !1, s.css({
                        position: "fixed",
                        bottom: "",
                        top: k
                    }).trigger("sticky_kit:unbottom"))), o < a && (f = !1, k = V, null == P && ("left" !== p && "right" !== p || s.insertAfter(v), v.detach()), t = {
                        position: "",
                        width: "",
                        top: ""
                    }, s.css(t).removeClass(I).trigger("sticky_kit:unstick")), x && ((t = M.height()) < c + V && !d && (k -= i, k = Math.max(t - c, k), k = Math.min(V, k), f && s.css({top: k + "px"})))) : a < o && (f = !0, (t = {
                        position: "fixed",
                        top: k
                    }).width = "border-box" === s.css("box-sizing") ? s.outerWidth() + "px" : s.width() + "px", s.css(t).addClass(I), null == P && (s.after(v), "left" !== p && "right" !== p || v.append(s)), s.trigger("sticky_kit:stick")), f && _ && (null == e && (e = l + n < o + c + k), !d && e))) return d = !0, "static" === y.css("position") && y.css({position: "relative"}), s.css({
                        position: "absolute",
                        bottom: r,
                        top: "auto"
                    }).trigger("sticky_kit:bottom")
                }, i = function () {
                    return m(), e()
                }, t = function () {
                    if (u = !0, M.off("touchmove", e), M.off("scroll", e), M.off("resize", i), A(document.body).off("sticky_kit:recalc", i), s.off("sticky_kit:detach", t), s.removeData("sticky_kit"), s.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    }), y.position("position", ""), f) return null == P && ("left" !== p && "right" !== p || s.insertAfter(v), v.remove()), s.removeClass(I)
                }, M.on("touchmove", e), M.on("scroll", e), M.on("resize", i), A(document.body).on("sticky_kit:recalc", i), s.on("sticky_kit:detach", t), setTimeout(e, 0)
            }
        }, o = 0, e = this.length; o < e; o++) t = this[o], i(A(t));
        return this
    }
}).call(this);
$(document).ready(function () {
    'use strict';
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

let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDark) {
    $('html').addClass('dark').attr('data-bs-theme', 'dark');
    $('#theme_icon').addClass('bi-sun');
} else {
    $('html').addClass('light').attr('data-bs-theme', 'light');
    $('#theme_icon').addClass('bi-moon');
}

$('#bs_theme_toggle').on('click', function () {
    if (isDark) {
        $('html').removeClass('dark').addClass('light').attr('data-bs-theme', 'light');
        $('#theme_icon').removeClass('bi-sun').addClass('bi-moon');
        localStorage.setItem('theme', 'light');
        isDark = false;
    } else {
        $('html').removeClass('light').addClass('dark').attr('data-bs-theme', 'dark');
        $('#theme_icon').removeClass('bi-moon').addClass('bi-sun');
        localStorage.setItem('theme', 'dark');
        isDark = true;
    }
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
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
            }
        });
    });


    function activeStickyKit() {
        const stickyColumns = $('.sticky-column');
        stickyColumns.stick_in_parent({
            parent: '.sticky-parent'
        });

        stickyColumns.on('sticky_kit:bottom', function () {
            $(this).parent().css('position', 'static');
        }).on('sticky_kit:unbottom', function () {
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
});