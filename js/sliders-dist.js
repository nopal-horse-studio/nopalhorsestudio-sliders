!function(e) {
    var i, s, t, n, o, r, l = 10;
    sliders = {
        init: function() {
            sliders.Slider1(), sliders.Slider2(), sliders.Slider3(), sliders.Slider4(), sliders.Slider5(), 
            sliders.Slider6(), sliders.Slider7(), sliders.Slider8(), sliders.Slider9();
        },
        Slider1: function() {
            e("#slider-1").owlCarousel({
                loop: !0,
                margin: 10,
                nav: !1,
                dots: !1
            });
        },
        Slider2: function() {
            e("#slider-2").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider3: function() {
            e("#slider-3").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !1,
                dots: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider4: function() {
            e("#slider-4").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider5: function() {
            e("#slider-5").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !0,
                smartSpeed: 1e3,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider6: function() {
            e("#slider-6").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !0,
                smartSpeed: 1e3,
                animateOut: "lightSpeedOut",
                animateIn: "lightSpeedIn",
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider7: function() {
            e("#slider-7").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !0,
                smartSpeed: 1e3,
                animateOut: "slideOutRight",
                animateIn: "slideInLeft",
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider8: function() {
            e("#slider-8").owlCarousel({
                loop: !1,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !0,
                smartSpeed: 1e3,
                animateOut: "slideOutLeft",
                animateIn: "slideInLeft",
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        },
        Slider9: function() {
            function a(e) {
                t = e, d(), m();
            }
            function d() {
                i = e("<div>", {
                    id: "progress"
                }), s = e("<div>", {
                    id: "bar"
                }), i.append(s).prependTo(t);
            }
            function m() {
                r = 0, n = !1, o = setInterval(u, 10);
            }
            function u() {
                !1 === n && (r += 1 / l, TweenMax.to(s, .2, {
                    width: r + "%",
                    ease: Circ.easeOut
                }), r >= 100 && t.trigger("next.owl.carousel"));
            }
            function v() {
                n = !0;
            }
            function c() {
                clearTimeout(o), m();
            }
            var f = e("#slider-9");
            f.on("initialized.owl.carousel", function(i) {
                a(e(this));
            }), f.on("translated.owl.carousel", function(e) {
                c();
            }), f.on("drag.owl.carousel", function(e) {
                v();
            }), e("#slider-9 .item").on("mouseover", function() {
                n = !0;
            }), e("#slider-9 .item").on("mouseout", function() {
                n = !1;
            }), f.owlCarousel({
                loop: !0,
                margin: 0,
                nav: !0,
                navText: [ "", "" ],
                dots: !1,
                items: 1,
                animateIn: "slideInRight",
                animateOut: "slideOutLeft",
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1e3: {
                        items: 1
                    }
                }
            });
        }
    }, sliders.init();
}(jQuery);