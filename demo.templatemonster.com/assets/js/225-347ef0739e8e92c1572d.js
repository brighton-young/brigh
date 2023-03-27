/*! For license information please see 225-347ef0739e8e92c1572d.js.LICENSE.txt */
"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [225, 682], {
        682: (t, e, r) => {
            r.d(e, {
                r: () => s
            });
            var n = r(5980),
                a = r(5191);
            const o = {
                productAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            t.isIntersecting && ((0, n.y)((0, a.c)("impressionSent", t.target.dataset)), e.unobserve(t.target), r.push(t.target.dataset))
                        })), r
                    }
                },
                authorNavigation: {
                    options: {
                        rootMargin: "-10% 0% -85% 0%"
                    },
                    callback: function(t) {
                        var e = document.querySelector(".floating-bar-tabs"),
                            r = document.querySelector(".author-tabs");
                        t.forEach((function(t) {
                            var n = t.target.querySelector(".anchor").id;
                            "author-intro" === n && (t.isIntersecting ? r.classList.remove("author-tabs_shadow") : r.classList.add("author-tabs_shadow")), t.isIntersecting && e.querySelectorAll(".floating-bar-tabs-link").forEach((function(t) {
                                t.getAttribute("href") === "#".concat(n) || t.getAttribute("data-href") === "#".concat(n) ? t.classList.add("floating-bar-tabs-link_active") : t.classList.remove("floating-bar-tabs-link_active")
                            }))
                        }))
                    }
                },
                productNavBar: {
                    options: {
                        rootMargin: "-8% 0% -85% 0%"
                    },
                    callback: function(t) {
                        var e = document.querySelectorAll(".product-nav-bar-tabs-link"),
                            r = document.querySelector(".floating-bar");
                        t.forEach((function(t) {
                            var n = t.target.querySelector(".anchor").id;
                            "tab-intro" === n && t.isIntersecting && r.classList.remove("floating-bar_visible"), t.isIntersecting && e.forEach((function(t) {
                                t.getAttribute("href") === "#".concat(n) || t.getAttribute("data-href") === "#".concat(n) ? (t.classList.add("product-nav-bar-tabs-link_active"), "tab-intro" !== n && r.classList.add("floating-bar_visible")) : t.classList.remove("product-nav-bar-tabs-link_active")
                            }))
                        }))
                    }
                },
                serviceNavBar: {},
                promotionAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            t.isIntersecting && ((0, n.y)((0, a.c)("promotionView", t.target.dataset)), e.unobserve(t.target), r.push(t.target.dataset))
                        })), r
                    }
                },
                trackEventAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            t.isIntersecting && ((0, n.y)((0, a.c)("trackEvent", t.target.dataset)), e.unobserve(t.target), r.push(t.target.dataset))
                        })), r
                    }
                },
                hideProductLicenseDropdown: {
                    options: {
                        threshold: [1]
                    },
                    callback: function(t, e) {
                        t.forEach((function(t) {
                            if (!t.isIntersecting) {
                                var e = t.target.querySelector(".cart-modal-license-button_active"),
                                    r = t.target.querySelector(".cart-modal-license-container_active");
                                e && e.classList.add("cart-modal-license-button_hidden-dropdown"), r && r.classList.add("cart-modal-license-container_hidden-dropdown")
                            }
                        }))
                    }
                },
                recommendedServicesAnalytics: {
                    options: {
                        threshold: [.2]
                    },
                    callback: function(t, e) {
                        var r = [];
                        return t.forEach((function(t) {
                            if (t.isIntersecting) {
                                var o = t.target.dataset;
                                (0, n.y)((0, a.c)("impressionSentServices", o)), (0, n.y)((0, a.c)("cartOffer", {
                                    eventAction: "View",
                                    eventLabel: "".concat(o.id, " - ").concat(o.position, " - ").concat(o.type)
                                })), e.unobserve(t.target), r.push(t.target.dataset)
                            }
                        })), r
                    }
                }
            };

            function c(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return i(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    s = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        s = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function s(t) {
                var e = JSON.parse(t.getAttribute("data-visibility-observer")),
                    r = t.querySelectorAll(e.selector),
                    n = o[e.preset],
                    a = n.callback,
                    i = n.options;
                if (r.length && a && i) {
                    var s, l = new IntersectionObserver(a, i),
                        u = c(r);
                    try {
                        for (u.s(); !(s = u.n()).done;) {
                            var d = s.value;
                            l.observe(d)
                        }
                    } catch (t) {
                        u.e(t)
                    } finally {
                        u.f()
                    }
                }
            }(0, r(3081).Fi)((function() {
                document.querySelectorAll("[data-visibility-observer]").forEach((function(t) {
                    return s(t)
                }))
            }))
        },
        1740: (t, e, r) => {
            r.r(e), r.d(e, {
                default: () => f
            });
            var n = r(4234),
                a = (r(8568), r(6943)),
                o = r(5980),
                c = r(5191),
                i = r(7312);

            function s(t) {
                let e, r;
                return e = new i.Z({
                    props: {
                        cartTranslations: t[0],
                        cartItems: t[1]
                    }
                }), e.$on("closeCartModal", t[4]), {
                    c() {
                        (0, n.YCL)(e.$$.fragment)
                    },
                    m(t, a) {
                        (0, n.yef)(e, t, a), r = !0
                    },
                    p(t, r) {
                        const n = {};
                        1 & r && (n.cartTranslations = t[0]), 2 & r && (n.cartItems = t[1]), e.$set(n)
                    },
                    i(t) {
                        r || ((0, n.Ui)(e.$$.fragment, t), r = !0)
                    },
                    o(t) {
                        (0, n.etI)(e.$$.fragment, t), r = !1
                    },
                    d(t) {
                        (0, n.vpE)(e, t)
                    }
                }
            }

            function l(t) {
                let e, r, a, o, c, i, l = t[2] && s(t);
                return {
                    c() {
                        e = (0, n.bGB)("div"), r = (0, n.DhX)(), l && l.c(), a = (0, n.cSb)(), (0, n.Ljt)(e, "class", "cart-button-modal-opener")
                    },
                    m(s, u) {
                        (0, n.$Tr)(s, e, u), (0, n.$Tr)(s, r, u), l && l.m(s, u), (0, n.$Tr)(s, a, u), o = !0, c || (i = (0, n.oLt)(e, "click", t[3]), c = !0)
                    },
                    p(t, [e]) {
                        t[2] ? l ? (l.p(t, e), 4 & e && (0, n.Ui)(l, 1)) : (l = s(t), l.c(), (0, n.Ui)(l, 1), l.m(a.parentNode, a)) : l && ((0, n.dvw)(), (0, n.etI)(l, 1, 1, (() => {
                            l = null
                        })), (0, n.gbL)())
                    },
                    i(t) {
                        o || ((0, n.Ui)(l), o = !0)
                    },
                    o(t) {
                        (0, n.etI)(l), o = !1
                    },
                    d(t) {
                        t && (0, n.ogt)(e), t && (0, n.ogt)(r), l && l.d(t), t && (0, n.ogt)(a), c = !1, i()
                    }
                }
            }

            function u(t, e, r) {
                let i, s, l;
                (0, n.FIv)(t, a.Z, (t => r(5, l = t)));
                let {
                    cartTranslations: u
                } = e;
                return t.$$set = t => {
                    "cartTranslations" in t && r(0, u = t.cartTranslations)
                }, t.$$.update = () => {
                    32 & t.$$.dirty && r(2, i = l.isCartModalOpen), 32 & t.$$.dirty && r(1, s = l.cartModal.items)
                }, [u, s, i, function() {
                    a.Z.setIsCartModalOpen(!0), (0, o.y)((0, c.c)("openCartPopup", {
                        label: "Open cart"
                    }))
                }, function() {
                    a.Z.setIsCartModalOpen(!1)
                }, l]
            }
            class d extends n.f_C {
                constructor(t) {
                    super(), (0, n.S1n)(this, t, u, l, n.N8, {
                        cartTranslations: 0
                    })
                }
            }
            const f = d
        },
        3992: t => {
            t.exports = '<svg viewBox="0 0 11 11"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.082 1.596L9.373.89 5.485 4.78 1.596.888l-.707.707 3.89 3.89-3.89 3.888.707.707 3.89-3.889 3.888 3.89.707-.708-3.889-3.889 3.89-3.889z"/></svg>'
        }
    }
]);