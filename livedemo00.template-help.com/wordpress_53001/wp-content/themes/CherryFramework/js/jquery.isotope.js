(function(m, f) {
    var E = m.document,
        l = m.Modernizr,
        t = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        y = ["Moz", "Webkit", "O", "Ms"],
        q = function(a) {
            var b = E.documentElement.style,
                c;
            if ("string" === typeof b[a]) return a;
            a = t(a);
            for (var d = 0, e = y.length; d < e; d++)
                if (c = y[d] + a, "string" === typeof b[c]) return c
        },
        u = q("transform"),
        z = q("transitionProperty"),
        r = {
            csstransforms: function() {
                return !!u
            },
            csstransforms3d: function() {
                var a = !!q("perspective");
                if (a) {
                    var a = "@media (" + " -o- -moz- -ms- -webkit- -khtml- ".split(" ").join("transform-3d),(") +
                        "modernizr)",
                        b = f("<style>" + a + "{#modernizr{height:3px}}</style>").appendTo("head"),
                        c = f('<div id="modernizr" />').appendTo("html"),
                        a = 3 === c.height();
                    c.remove();
                    b.remove()
                }
                return a
            },
            csstransitions: function() {
                return !!z
            }
        },
        n;
    if (l)
        for (n in r) l.hasOwnProperty(n) || l.addTest(n, r[n]);
    else {
        var l = m.Modernizr = {
                _version: "1.6ish: miniModernizr for Isotope"
            },
            v = " ",
            w;
        for (n in r) w = r[n](), l[n] = w, v += " " + (w ? "" : "no-") + n;
        f("html").addClass(v)
    }
    if (l.csstransforms) {
        var F = l.csstransforms3d ? {
                translate: function(a) {
                    return "translate3d(" +
                        a[0] + "px, " + a[1] + "px, 0) "
                },
                scale: function(a) {
                    return "scale3d(" + a + ", " + a + ", 1) "
                }
            } : {
                translate: function(a) {
                    return "translate(" + a[0] + "px, " + a[1] + "px) "
                },
                scale: function(a) {
                    return "scale(" + a + ") "
                }
            },
            A = function(a, b, c) {
                var d = f.data(a, "isoTransform") || {},
                    e = {},
                    g, h = {};
                e[b] = c;
                f.extend(d, e);
                for (g in d) b = d[g], h[g] = F[g](b);
                g = (h.translate || "") + (h.scale || "");
                f.data(a, "isoTransform", d);
                a.style[u] = g
            };
        f.cssNumber.scale = !0;
        f.cssHooks.scale = {
            set: function(a, b) {
                A(a, "scale", b)
            },
            get: function(a) {
                return (a = f.data(a, "isoTransform")) && a.scale ? a.scale : 1
            }
        };
        f.fx.step.scale = function(a) {
            f.cssHooks.scale.set(a.elem, a.now + a.unit)
        };
        f.cssNumber.translate = !0;
        f.cssHooks.translate = {
            set: function(a, b) {
                A(a, "translate", b)
            },
            get: function(a) {
                return (a = f.data(a, "isoTransform")) && a.translate ? a.translate : [0, 0]
            }
        }
    }
    var B, C;
    l.csstransitions && (B = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[z], C = q("transitionDuration"));
    var s = f.event,
        G = f.event.handle ? "handle" : "dispatch",
        x;
    s.special.smartresize = {
        setup: function() {
            f(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            f(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize";
            x && clearTimeout(x);
            x = setTimeout(function() {
                s[G].apply(c, d)
            }, "execAsap" === b ? 0 : 100)
        }
    };
    f.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    };
    f.Isotope = function(a, b, c) {
        this.element = f(b);
        this._create(a);
        this._init(c)
    };
    var H = ["width", "height"],
        D = f(m);
    f.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: 0.001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    };
    f.Isotope.prototype = {
        _create: function(a) {
            this.options = f.extend({}, f.Isotope.settings, a);
            this.styleQueue = [];
            this.elemCount = 0;
            a = this.element[0].style;
            this.originalStyle = {};
            var b = H.slice(0),
                c;
            for (c in this.options.containerStyle) b.push(c);
            for (var d = 0, e = b.length; d < e; d++) c = b[d], this.originalStyle[c] = a[c] || "";
            this.element.css(this.options.containerStyle);
            this._updateAnimationEngine();
            this._updateUsingTransforms();
            this.options.getSortData = f.extend(this.options.getSortData, {
                "original-order": function(a, c) {
                    c.elemCount++;
                    return c.elemCount
                },
                random: function() {
                    return Math.random()
                }
            });
            this.reloadItems();
            this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var g = this;
            setTimeout(function() {
                g.element.addClass(g.options.containerClass)
            }, 0);
            this.options.resizable && D.bind("smartresize.isotope", function() {
                g.resize()
            });
            this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector;
            a = b ? a.filter(b).add(a.find(b)) : a;
            b = {
                position: "absolute"
            };
            a = a.filter(function(a, b) {
                return 1 === b.nodeType
            });
            this.usingTransforms && (b.left = 0, b.top = 0);
            a.css(b).addClass(this.options.itemClass);
            this.updateSortData(a, !0);
            return a
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms);
            this._sort();
            this.reLayout(a)
        },
        option: function(a) {
            if (f.isPlainObject(a)) {
                this.options = f.extend(!0, this.options, a);
                for (var b in a)
                    if (a = "_update" + t(b), this[a]) this[a]()
            }
        },
        _updateAnimationEngine: function() {
            var a;
            switch (this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "")) {
                case "css":
                case "none":
                    a = !1;
                    break;
                case "jquery":
                    a = !0;
                    break;
                default:
                    a = !l.csstransitions
            }
            this.isUsingJQueryAnimation = a;
            this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && l.csstransforms && l.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale);
            this.getPositionStyles = a ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = "" === this.options.filter ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
                d = "." + c,
                e = a.filter(d),
                g = e;
            "*" !== b && (g = e.filter(b), d = a.not(d).not(b).addClass(c), this.styleQueue.push({
                $el: d,
                style: this.options.hiddenStyle
            }));
            this.styleQueue.push({
                $el: g,
                style: this.options.visibleStyle
            });
            g.removeClass(c);
            return a.filter(b)
        },
        updateSortData: function(a, b) {
            var c = this,
                d = this.options.getSortData,
                e, g;
            a.each(function() {
                e = f(this);
                g = {};
                for (var a in d) g[a] = !b && "original-order" === a ? f.data(this, "isotope-sort-data")[a] : d[a](e, c);
                f.data(this, "isotope-sort-data", g)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
                b = this._getSorter,
                c = this.options.sortAscending ? 1 : -1;
            this.$filteredAtoms.sort(function(d, e) {
                var g = b(d, a),
                    f = b(e, a);
                g === f && "original-order" !== a && (g = b(d, "original-order"), f = b(e, "original-order"));
                return (g > f ? 1 : g < f ? -1 : 0) * c
            })
        },
        _getSorter: function(a, b) {
            return f.data(a, "isotope-sort-data")[b]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left);
            c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            });
            this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            this.options.resizesContainer && (c = this["_" + c + "GetContainerSize"](), this.styleQueue.push({
                $el: this.element,
                style: c
            }));
            this._processStyleQueue(a, b);
            this.isLaidOut = !0
        },
        _processStyleQueue: function(a, b) {
            var c = !this.isLaidOut ? "css" : this.isUsingJQueryAnimation ? "animate" : "css",
                d = this.options.animationOptions,
                e = this.options.onLayout,
                g, h, k, j;
            h = function(a, b) {
                b.$el[c](b.style, d)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) h = function(a, b) {
                g = b.$el.hasClass("no-transition") ? "css" : c;
                b.$el[g](b.style, d)
            };
            else if (b || e || d.complete) {
                var m = !1,
                    n = [b, e, d.complete],
                    q = this;
                k = !0;
                j = function() {
                    if (!m) {
                        for (var b, c = 0, d = n.length; c < d; c++) b = n[c], "function" === typeof b && b.call(q.element, a, q);
                        m = !0
                    }
                };
                if (this.isUsingJQueryAnimation && "animate" === c) d.complete = j, k = !1;
                else if (l.csstransitions) {
                    for (var e = 0, p = this.styleQueue[0], p = p && p.$el; !p || !p.length;) {
                        p = this.styleQueue[e++];
                        if (!p) return;
                        p = p.$el
                    }
                    0 < parseFloat(getComputedStyle(p[0])[C]) && (h = function(a, b) {
                        b.$el[c](b.style, d).one(B, j)
                    }, k = !1)
                }
            }
            f.each(this.styleQueue, h);
            k && j();
            this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"]();
            this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c);
            b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                a = c._filter(a);
                c._addHideAppended(a);
                c._sort();
                c.reLayout();
                c._revealAppended(a, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a);
                c.layout(a);
                c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a);
            a.addClass("no-transition");
            this._isInserting = !0;
            this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition");
                c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                });
                c._isInserting = !1;
                c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a);
            this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this,
                d = function() {
                    a.remove();
                    b && b.call(c.element)
                };
            a.filter(":not(." + this.options.hiddenClass +
                ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms);
            this.options.sortBy = "random";
            this._sort();
            this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms,
                b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "";
                b.top = "";
                b.left = "";
                b.opacity = "";
                a && (b[u] = "")
            });
            var c = this.element[0].style,
                d;
            for (d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope");
            D.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rowHeight" : "columnWidth",
                d = a ? "height" : "width";
            a = a ? "rows" : "cols";
            var e = this.element[d](),
                d = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + t(d)](!0) || e,
                e = Math.floor(e / d),
                e = Math.max(e, 1);
            this[b][a] = e;
            this[b][c] = d
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rows" : "cols",
                d = this[b][c];
            this._getSegments(a);
            return this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {};
            this._getSegments();
            var a = this.masonry.cols;
            for (this.masonry.colYs = []; a--;) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var b = this,
                c = b.masonry;
            a.each(function() {
                var a = f(this),
                    e = Math.ceil(a.outerWidth(!0) / c.columnWidth),
                    e = Math.min(e, c.cols);
                if (1 === e) b._masonryPlaceBrick(a, c.colYs);
                else {
                    var g = c.cols + 1 - e,
                        h = [],
                        k, j;
                    for (j = 0; j < g; j++) k = c.colYs.slice(j, j + e), h[j] = Math.max.apply(Math, k);
                    b._masonryPlaceBrick(a, h)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            this._pushPosition(a, this.masonry.columnWidth * d, c);
            c += a.outerHeight(!0);
            f = this.masonry.cols + 1 - f;
            for (e = 0; e < f; e++) this.masonry.colYs[d + e] = c
        },
        _masonryGetContainerSize: function() {
            return {
                height: Math.max.apply(Math, this.masonry.colYs)
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var b = this,
                c = this.element.width(),
                d = this.fitRows;
            a.each(function() {
                var a = f(this),
                    g = a.outerWidth(!0),
                    h = a.outerHeight(!0);
                0 !== d.x && g + d.x > c && (d.x = 0, d.y = d.height);
                b._pushPosition(a, d.x, d.y);
                d.height = Math.max(d.y + h, d.height);
                d.x += g
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            };
            this._getSegments();
            this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var b = this,
                c = this.cellsByRow;
            a.each(function() {
                var a = f(this),
                    e = Math.floor(c.index / c.cols),
                    g = (c.index % c.cols + 0.5) * c.columnWidth - a.outerWidth(!0) / 2,
                    e = (e + 0.5) * c.rowHeight - a.outerHeight(!0) / 2;
                b._pushPosition(a, g, e);
                c.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var b = this;
            a.each(function() {
                var a = f(this);
                b._pushPosition(a, 0, b.straightDown.y);
                b.straightDown.y += a.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {};
            this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; a--;) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var b = this,
                c = b.masonryHorizontal;
            a.each(function() {
                var a = f(this),
                    e = Math.ceil(a.outerHeight(!0) / c.rowHeight),
                    e = Math.min(e, c.rows);
                if (1 === e) b._masonryHorizontalPlaceBrick(a, c.rowXs);
                else {
                    var g = c.rows + 1 - e,
                        h = [],
                        k, j;
                    for (j = 0; j < g; j++) k = c.rowXs.slice(j, j + e), h[j] = Math.max.apply(Math, k);
                    b._masonryHorizontalPlaceBrick(a, h)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            this._pushPosition(a, c, this.masonryHorizontal.rowHeight * d);
            c += a.outerWidth(!0);
            f = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; e < f; e++) this.masonryHorizontal.rowXs[d + e] = c
        },
        _masonryHorizontalGetContainerSize: function() {
            return {
                width: Math.max.apply(Math, this.masonryHorizontal.rowXs)
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var b = this,
                c = this.element.height(),
                d = this.fitColumns;
            a.each(function() {
                var a = f(this),
                    g = a.outerWidth(!0),
                    h = a.outerHeight(!0);
                0 !== d.y && h + d.y > c && (d.x = d.width, d.y = 0);
                b._pushPosition(a, d.x, d.y);
                d.width = Math.max(d.x + g, d.width);
                d.y += h
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            };
            this._getSegments();
            this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var b = this,
                c = this.cellsByColumn;
            a.each(function() {
                var a = f(this),
                    e = c.index % c.rows,
                    g = (Math.floor(c.index / c.rows) + 0.5) * c.columnWidth - a.outerWidth(!0) / 2,
                    e = (e + 0.5) * c.rowHeight - a.outerHeight(!0) / 2;
                b._pushPosition(a, g, e);
                c.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var b = this;
            a.each(function() {
                var a = f(this);
                b._pushPosition(a, b.straightAcross.x, 0);
                b.straightAcross.x += a.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    };
    f.fn.imagesLoaded = function(a) {
        function b() {
            a.call(d, e)
        }

        function c(a) {
            a = a.target;
            a.src !== h && -1 === f.inArray(a, k) && (k.push(a), 0 >= --g && (setTimeout(b), e.unbind(".imagesLoaded", c)))
        }
        var d = this,
            e = d.find("img").add(d.filter("img")),
            g = e.length,
            h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            k = [];
        g || b();
        e.bind("load.imagesLoaded error.imagesLoaded", c).each(function() {
            var a = this.src;
            this.src = h;
            this.src = a
        });
        return d
    };
    f.fn.isotope = function(a, b) {
        if ("string" === typeof a) {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var b = f.data(this, "isotope");
                b ? !f.isFunction(b[a]) || "_" === a.charAt(0) ? m.console && m.console.error("no such method '" + a + "' for isotope instance") : b[a].apply(b, c) : m.console && m.console.error("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'")
            })
        } else this.each(function() {
            var c = f.data(this, "isotope");
            c ? (c.option(a), c._init(b)) : f.data(this, "isotope", new f.Isotope(a, this, b))
        });
        return this
    }
})(window, jQuery);