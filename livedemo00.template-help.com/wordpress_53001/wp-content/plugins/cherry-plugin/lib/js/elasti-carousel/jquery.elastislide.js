(function(j, c, l) {
    c.fn.touchwipe = function(a) {
        var b = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function() {},
            wipeRight: function() {},
            wipeUp: function() {},
            wipeDown: function() {},
            preventDefaultEvents: !0
        };
        a && c.extend(b, a);
        this.each(function() {
            function a() {
                this.removeEventListener("touchmove", c);
                d = null;
                k = !1
            }

            function c(h) {
                b.preventDefaultEvents && h.preventDefault();
                if (k) {
                    var f = d - h.touches[0].pageX;
                    h = e - h.touches[0].pageY;
                    Math.abs(f) >= b.min_move_x ? (a(), 0 < f ? b.wipeLeft() : b.wipeRight()) : Math.abs(h) >= b.min_move_y && (a(), 0 < h ? b.wipeDown() : b.wipeUp())
                }
            }

            function f(a) {
                1 == a.touches.length && (d = a.touches[0].pageX, e = a.touches[0].pageY, k = !0, this.addEventListener("touchmove", c, !1))
            }
            var d, e, k = !1;
            "ontouchstart" in document.documentElement && this.addEventListener("touchstart", f, !1)
        });
        return this
    };
    c.elastislide = function(a, b) {
        this.$el = c(b);
        this._init(a)
    };
    c.elastislide.defaults = {
        speed: 450,
        easing: "easeOutBack",
        imageW: 190,
        margin: 3,
        border: 2,
        minItems: 1,
        current: 0,
        onClick: function() {
            return !1
        }
    };
    c.elastislide.prototype = {
        _init: function(a) {
            this.options = c.extend(!0, {}, c.elastislide.defaults, a);
            this.$slider = this.$el.find("ul");
            this.$items = this.$slider.children("li");
            this.itemsCount = this.$items.length;
            this.$esCarousel = this.$slider.parent();
            this._validateOptions();
            this._configure();
            this._addControls();
            this._initEvents();
            this.$slider.show();
            this._slideToCurrent(!1)
        },
        _validateOptions: function() {
            0 > this.options.speed && (this.options.speed = 450);
            0 > this.options.margin && (this.options.margin = 4);
            0 > this.options.border && (this.options.border = 1);
            if (1 > this.options.minItems || this.options.minItems > this.itemsCount) this.options.minItems = 1;
            this.options.current > this.itemsCount - 1 && (this.options.current = 0)
        },
        _configure: function() {
            this.current = this.options.current;
            this.visibleWidth = this.$esCarousel.width();
            this.visibleWidth < this.options.minItems * (this.options.imageW + 2 * this.options.border) + (this.options.minItems - 1) * this.options.margin ? (this._setDim((this.visibleWidth - (this.options.minItems - 1) * this.options.margin) / this.options.minItems), this._setCurrentValues(), this.fitCount = this.options.minItems) : (this._setDim(), this._setCurrentValues());
            this.$slider.css({
                width: this.sliderW
            })
        },
        _setDim: function(a) {
            this.$items.css({
                marginRight: this.options.margin,
                width: a ? a : this.options.imageW + 2 * this.options.border
            }).children("a").css({
                borderWidth: this.options.border
            })
        },
        _setCurrentValues: function() {
            this.itemW = this.$items.outerWidth(!0);
            this.sliderW = this.itemW * this.itemsCount;
            this.visibleWidth = this.$esCarousel.width();
            this.fitCount = Math.floor(this.visibleWidth / this.itemW)
        },
        _addControls: function() {
            this.$navNext = c('<span class="es-nav-next">Next</span>');
            this.$navPrev = c('<span class="es-nav-prev">Previous</span>');
            c('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)
        },
        _toggleControls: function(a, b) {
            a && b ? 1 === b ? "right" === a ? this.$navNext.show() : this.$navPrev.show() : "right" === a ? this.$navNext.hide() : this.$navPrev.hide() : (this.current === this.itemsCount - 1 || this.fitCount >= this.itemsCount) && this.$navNext.hide()
        },
        _initEvents: function() {
            var a = this;
            c(j).bind("resize.elastislide", function() {
                a._setCurrentValues();
                a.visibleWidth < a.options.minItems * (a.options.imageW + 2 * a.options.border) + (a.options.minItems - 1) * a.options.margin ? (a._setDim((a.visibleWidth - (a.options.minItems - 1) * a.options.margin) / a.options.minItems), a._setCurrentValues(), a.fitCount = a.options.minItems) : (a._setDim(), a._setCurrentValues());
                a.$slider.css({
                    width: a.sliderW + 10
                });
                clearTimeout(a.resetTimeout);
                a.resetTimeout = setTimeout(function() {
                    a._slideToCurrent()
                }, 200)
            });
            this.$navNext.bind("click.elastislide", function() {
                a._slide("right")
            });
            this.$navPrev.bind("click.elastislide", function() {
                a._slide("left")
            });
            this.$items.bind("click.elastislide", function() {
                a.options.onClick(c(this))
            });
            a.$slider.touchwipe({
                wipeLeft: function() {
                    a._slide("right")
                },
                wipeRight: function() {
                    a._slide("left")
                }
            })
        },
        _slide: function(a, b, g, j) {
            if (this.$slider.is(":animated")) return !1;
            var f = parseFloat(this.$slider.css("margin-left"));
            if (b === l) {
                var d = this.fitCount * this.itemW;
                if (0 > d) return !1;
                if ("right" === a && this.sliderW - (Math.abs(f) + d) < this.visibleWidth) d = this.sliderW - (Math.abs(f) + this.visibleWidth) - this.options.margin, this._toggleControls("right", -1), this._toggleControls("left", 1);
                else if ("left" === a && 0 > Math.abs(f) - d) d = Math.abs(f), this._toggleControls("left", -1), this._toggleControls("right", 1);
                else {
                    var e;
                    "right" === a ? e = Math.abs(f) + this.options.margin + Math.abs(d) : e = Math.abs(f) - this.options.margin - Math.abs(d);
                    0 < e ? this._toggleControls("left", 1) : this._toggleControls("left", -1);
                    e < this.sliderW - this.visibleWidth ? this._toggleControls("right", 1) : this._toggleControls("right", -1)
                }
                "right" === a ? b = "-=" + d : b = "+=" + d
            } else e = Math.abs(b), Math.max(this.sliderW, this.visibleWidth) - e < this.visibleWidth && (b = -(Math.max(this.sliderW, this.visibleWidth) - this.visibleWidth), 0 !== b && (b += this.options.margin), this._toggleControls("right", -1), e = Math.abs(b)), 0 < e ? this._toggleControls("left", 1) : this._toggleControls("left", -1), Math.max(this.sliderW, this.visibleWidth) - this.visibleWidth > e + this.options.margin ? this._toggleControls("right", 1) : this._toggleControls("right", -1);
            c.fn.applyStyle = g === l ? c.fn.animate : c.fn.css;
            this.$slider.applyStyle({
                marginLeft: b
            }, c.extend(!0, [], {
                duration: this.options.speed,
                easing: this.options.easing,
                complete: function() {
                    j && j.call()
                }
            }))
        },
        _slideToCurrent: function(a) {
            this._slide("", -(this.current * this.itemW), a)
        },
        add: function(a, b) {
            this.$items = this.$items.add(a);
            this.itemsCount = this.$items.length;
            this._setDim();
            this._setCurrentValues();
            this.$slider.css({
                width: this.sliderW
            });
            this._slideToCurrent();
            b && b.call(a)
        },
        destroy: function(a) {
            this._destroy(a)
        },
        _destroy: function(a) {
            this.$el.unbind(".elastislide").removeData("elastislide");
            c(j).unbind(".elastislide");
            a && a.call()
        }
    };
    var m = function(a) {
        this.console && console.error(a)
    };
    c.fn.elastislide = function(a) {
        if ("string" === typeof a) {
            var b = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var g = c.data(this, "elastislide");
                g ? !c.isFunction(g[a]) || "_" === a.charAt(0) ? m("no such method '" + a + "' for elastislide instance") : g[a].apply(g, b) : m("cannot call methods on elastislide prior to initialization; attempted to call method '" + a + "'")
            })
        } else this.each(function() {
            c.data(this, "elastislide") || c.data(this, "elastislide", new c.elastislide(a, this))
        });
        return this
    }
})(window, jQuery);