(function(a) {
    a.fn.superfish = function(f) {
        var d = a.fn.superfish,
            e = d.c,
            g = a('<span class="' + e.arrowClass + '"> &#187;</span>'),
            k = function(c) {
                var b = a(this),
                    d = j(b);
                ("mouseenter" === c.type || "focusin" === c.type) && b.children("a").data("follow", !0);
                clearTimeout(d.sfTimer);
                b.showSuperfishUl().siblings().hideSuperfishUl()
            },
            l = function(c) {
                var b = a(this),
                    f = j(b),
                    e = d.op,
                    g = function() {
                        e.retainPath = -1 < a.inArray(b[0], e.$path);
                        b.hideSuperfishUl();
                        e.$path.length && 1 > b.parents("li." + e.hoverClass).length && (e.onIdle.call(), a.proxy(k, e.$path, c)())
                    };
                "mouseleave" !== c.type && "focusout" !== c.type ? g() : (clearTimeout(f.sfTimer), f.sfTimer = setTimeout(g, e.delay));
                ("mouseleave" === c.type || "focusout" === c.type) && b.children("a").data("follow", !1)
            },
            j = function(c) {
                c.hasClass(e.menuClass) && a.error("Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent");
                c = c.closest("." + e.menuClass)[0];
                d.op = d.o[c.serial];
                return c
            },
            m = function(c) {
                var b = a(this),
                    f = b.next("ul"),
                    b = b.data("follow");
                if (f.length && (d.op.useClick || !b)) c.preventDefault(), f.is(":visible") ? a.proxy(l, a(this).parent(), c)() : a.proxy(k, a(this).parent(), c)()
            };
        return this.addClass(e.menuClass).each(function() {
            var c = this.serial = d.o.length,
                b = a.extend({}, d.defaults, f),
                h = a(this),
                j = h.find("li:has(ul)");
            b.$path = h.find("li." + b.pathClass).slice(0, b.pathLevels).each(function() {
                a(this).addClass(b.hoverClass + " " + e.bcClass).filter("li:has(ul)").removeClass(b.pathClass)
            });
            d.o[c] = d.op = b;
            b.autoArrows && j.children("a").each(function() {
                a(this).addClass(e.anchorClass).append(g.clone())
            });
            d.op.useClick || (a.fn.hoverIntent && !d.op.disableHI ? h.hoverIntent(k, l, "li:has(ul)") : (h.on("mouseenter", "li:has(ul)", k), h.on("mouseleave", "li:has(ul)", l)));
            h.on("focusin", "li:has(ul)", k);
            h.on("focusout", "li:has(ul)", l);
            h.on("click", "a", m);
            j.not("." + e.bcClass).hideSuperfishUl();
            b.onInit.call(this)
        })
    };
    var g = a.fn.superfish;
    g.o = [];
    g.op = {};
    g.c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        arrowClass: "sf-sub-indicator"
    };
    g.defaults = {
        hoverClass: "sfHover",
        pathClass: "overideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        autoArrows: !0,
        disableHI: !1,
        useClick: !1,
        onInit: function() {},
        onBeforeShow: function() {},
        onShow: function() {},
        onHide: function() {},
        onIdle: function() {}
    };
    a.fn.extend({
        hideSuperfishUl: function() {
            var f = g.op,
                d = !0 === f.retainPath ? f.$path : "";
            f.retainPath = !1;
            var e = a("li." + f.hoverClass, this).add(this).not(d).find(">ul").stop(!0, !0).animate(f.animationOut, f.speedOut, function() {
                e = a(this);
                e.css("visibility", "hidden").parent().removeClass(f.hoverClass);
                f.onHide.call(e)
            });
            return this
        },
        showSuperfishUl: function() {
            var a = g.op,
                d = this.addClass(a.hoverClass).find(">ul:hidden").css("visibility", "visible");
            a.onBeforeShow.call(d);
            d.stop(!0, !0).animate(a.animation, a.speed, function() {
                a.onShow.call(d)
            });
            return this
        }
    })
})(jQuery);