google.maps.__gjsload__('infowindow', function(_) {
    var WI = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        NAa = function() {
            this.h = new _.x.Set
        },
        OAa = function(a, b) {
            if (1 === a.h.size) {
                var c = _.v(Array, "from").call(Array, _.v(a.h, "values").call(a.h))[0];
                c.Ck !== b.Ck && (c.set("map", null), a.h.delete(c))
            }
            a.h.add(b)
        },
        YI = function(a) {
            var b = this;
            this.C = this.G = null;
            this.H = this.J = !1;
            this.Zl = a.Zl;
            this.shouldFocus = a.shouldFocus;
            this.fa = document.createElement("div");
            this.fa.style.cursor = "default";
            this.fa.style.position = "absolute";
            this.fa.style.left = this.fa.style.top =
                "0";
            a.yg.floatPane.appendChild(this.fa);
            this.anchor = _.Cn("div", this.fa);
            this.D = _.Cn("div", this.anchor);
            this.h = _.Cn("div", this.D);
            this.h.setAttribute("role", "dialog");
            this.h.tabIndex = -1;
            this.N = _.Cn("div", this.D);
            this.j = _.Cn("div", this.h);
            _.Zta(this.fa);
            _.kn(this.h, "gm-style-iw");
            _.kn(this.anchor, "gm-style-iw-a");
            _.kn(this.D, "gm-style-iw-t");
            _.kn(this.N, "gm-style-iw-tc");
            _.kn(this.h, "gm-style-iw-c");
            _.kn(this.j, "gm-style-iw-d");
            _.Gi.h && !_.Gi.G && (a.Ob ? this.h.style.paddingLeft = "0" : this.h.style.paddingRight =
                "0", this.h.style.paddingBottom = "0", this.j.style.overflow = "scroll");
            XI(this, !1);
            _.bf(this.fa, "mousedown", _.Qe);
            _.bf(this.fa, "mouseup", _.Qe);
            _.bf(this.fa, "mousemove", _.Qe);
            _.bf(this.fa, "pointerdown", _.Qe);
            _.bf(this.fa, "pointerup", _.Qe);
            _.bf(this.fa, "pointermove", _.Qe);
            _.bf(this.fa, "dblclick", _.Qe);
            _.bf(this.fa, "click", _.Qe);
            _.bf(this.fa, "touchstart", _.Qe);
            _.bf(this.fa, "touchend", _.Qe);
            _.bf(this.fa, "touchmove", _.Qe);
            _.Sm(this.fa, "contextmenu", this, this.bz);
            _.Sm(this.fa, "wheel", this, _.Qe);
            _.Sm(this.fa,
                "mousewheel", this, _.Ne);
            _.Sm(this.fa, "MozMousePixelScroll", this, _.Ne);
            this.m = new _.Nq({
                Yh: new _.Q(8, 8),
                kj: new _.Hg(14, 14),
                offset: new _.Q(-6, -6),
                ownerElement: this.h
            });
            this.h.appendChild(this.m.element);
            _.bf(this.m.element, "click", function(c) {
                _.Qe(c);
                _.M(b, "closeclick");
                b.set("open", !1)
            });
            this.F = new _.mi(function() {
                !b.J && b.get("content") && b.get("visible") && (_.M(b, "domready"), b.J = !0)
            }, 0);
            this.K = _.bf(this.fa, "keydown", function(c) {
                "Escape" !== c.key && "Esc" !== c.key || !b.h.contains(document.activeElement) ||
                    (c.stopPropagation(), _.M(b, "closeclick"), b.set("open", !1))
            })
        },
        PAa = function(a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c == a.C) XI(a, b && a.get("position"));
            else {
                if (a.C) {
                    var d = a.C.parentNode;
                    d == a.j && d.removeChild(a.C)
                }
                c && (a.J = !1, a.j.appendChild(c));
                XI(a, b && a.get("position"));
                a.C = c;
                a.resize()
            }
        },
        QAa = function(a) {
            var b = a.get("pixelOffset") || new _.Hg(0, 0),
                c = new _.Hg(a.h.offsetWidth, a.h.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 >
                b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        XI = function(a, b) {
            a.fa.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? RAa(a) : a.H = !1
        },
        RAa = function(a) {
            !a.H && a.get("open") && a.get("visible") && a.get("position") && (_.M(a, "visible"), a.H = !0)
        },
        ZI = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = QAa(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.Bn(a.anchor, b);
                b = a.get("zIndex");
                _.Dn(a.fa, _.Od(b) ? b : e + 60);
                a.set("pixelBounds", _.pi(d,
                    e, f, c))
            }
        },
        SAa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                yg: a,
                Ob: _.hv.Ob(),
                Zl: c,
                shouldFocus: b
            };
            return new YI(b)
        },
        $I = function(a, b, c) {
            var d = this;
            this.model = a;
            this.isOpen = !0;
            this.h = this.C = this.va = null;
            this.j = [];
            var e = a.get("shouldFocus");
            this.D = SAa(b, e);
            var f = b.__gm;
            (e = b instanceof _.nf) && c ? c.then(function(l) {
                d.isOpen && (d.va = l, d.h = new _.RE(function(m) {
                    d.C = new _.iq(b, l, m, function() {});
                    l.Bb(d.C);
                    return d.C
                }), d.h.bindTo("latLngPosition", a, "position"), TAa(d))
            }) : (this.h = new _.RE,
                this.h.bindTo("latLngPosition", a, "position"), this.h.bindTo("center", f, "projectionCenterQ"), this.h.bindTo("zoom", f), this.h.bindTo("offset", f), this.h.bindTo("projection", b), this.h.bindTo("focus", b, "position"), TAa(this));
            this.F = e ? WI(a) ? "Ia" : "Id" : null;
            this.G = e ? WI(a) ? 148284 : 148285 : null;
            var g = new _.SE(["scale"], "visible", function(l) {
                return null == l || .3 <= l
            });
            this.h && g.bindTo("scale", this.h);
            var h = this.D;
            h.set("logAsInternal", WI(a));
            h.bindTo("ariaLabel", a);
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds",
                f, "pixelBounds");
            h.bindTo("disableAutoPan", a);
            h.bindTo("pendingFocus", a);
            h.bindTo("maxWidth", a);
            h.bindTo("minWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", g);
            this.m = new _.mi(function() {
                if (b instanceof _.nf)
                    if (d.va) {
                        var l = a.get("position");
                        l && _.ija(b, d.va, new _.Of(l), QAa(h))
                    } else c.then(function() {
                        d.m.start()
                    });
                else(l = h.get("pixelBounds")) ? _.M(f, "pantobounds", l) : d.m.start()
            }, 150);
            if (e) {
                var k = null;
                this.j.push(_.Tm(a, "position_changed", function() {
                    var l = a.get("position");
                    !l || a.get("disableAutoPan") || l.equals(k) || (d.m.start(), k = l)
                }))
            } else a.get("disableAutoPan") || this.m.start();
            h.set("open", !0);
            this.j.push(_.L(h, "domready", function() {
                a.trigger("domready")
            }));
            this.j.push(_.L(h, "visible", function() {
                a.trigger("visible")
            }));
            this.j.push(_.L(h, "closeclick", function() {
                a.close();
                a.trigger("closeclick")
            }));
            this.j.push(_.Tm(a, "pixelposition_changed", function() {
                UAa(d)
            }));
            this.F && _.P(b, this.F);
            this.G && _.O(b, this.G)
        },
        TAa = function(a) {
            a.h && a.j.push(_.Tm(a.h, "pixelposition_changed",
                function() {
                    UAa(a)
                }))
        },
        UAa = function(a) {
            var b = a.model.get("pixelPosition") || a.h && a.h.get("pixelPosition");
            a.D.set("position", b)
        },
        VAa = function(a, b, c) {
            return b instanceof _.nf ? new $I(a, b, c) : new $I(a, b)
        },
        WAa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new NAa);
            return a.get("IW_AUTO_CLOSER")
        };
    _.B(YI, _.N);
    _.n = YI.prototype;
    _.n.ariaLabel_changed = function() {
        var a = this.get("ariaLabel");
        a ? this.h.setAttribute("aria-label", a) : this.h.removeAttribute("aria-label")
    };
    _.n.open_changed = function() {
        PAa(this)
    };
    _.n.content_changed = function() {
        PAa(this)
    };
    _.n.pendingFocus_changed = function() {
        this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? _.Ji(this.h, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."), this.set("pendingFocus", !1))
    };
    _.n.dispose = function() {
        var a = this;
        setTimeout(function() {
            document.activeElement && document.activeElement !== document.body || (a.G && a.G !== document.body ? _.Ji(a.G, !0) || _.Ji(a.Zl, !0) : _.Ji(a.Zl, !0))
        });
        this.K && _.Te(this.K);
        this.fa.parentNode.removeChild(this.fa);
        this.F.stop();
        this.F.dispose()
    };
    _.n.getSize = function() {
        var a = this.get("layoutPixelBounds"),
            b = this.get("pixelOffset"),
            c = this.get("maxWidth") || 648,
            d = this.get("minWidth") || 0;
        if (!b) return null;
        a ? (b = a.ya - a.la - (11 + -b.height), a = a.Aa - a.xa - 6, 240 <= a && (a -= 120), 240 <= b && (b -= 120)) : (a = 648, b = 654);
        a = Math.min(a, c);
        a = Math.max(d, a);
        a = Math.max(0, a);
        b = Math.max(0, b);
        return {
            Nd: new _.Hg(a, b),
            minWidth: d
        }
    };
    _.n.pixelOffset_changed = function() {
        var a = this.get("pixelOffset") || new _.Hg(0, 0);
        this.D.style.right = _.Om(-a.width);
        this.D.style.bottom = _.Om(-a.height + 11);
        this.resize()
    };
    _.n.layoutPixelBounds_changed = function() {
        this.resize()
    };
    _.n.resize = function() {
        var a = this.getSize();
        if (a) {
            var b = a.Nd;
            a = a.minWidth;
            this.h.style.maxWidth = _.Om(b.width);
            this.h.style.maxHeight = _.Om(b.height);
            this.h.style.minWidth = _.Om(a);
            this.j.style.maxHeight = _.Gi.h ? _.Om(b.height - 18) : _.Om(b.height - 36);
            ZI(this);
            this.F.start()
        }
    };
    _.n.position_changed = function() {
        this.get("position") ? (ZI(this), XI(this, !!this.get("open"))) : XI(this, !1)
    };
    _.n.zIndex_changed = function() {
        ZI(this)
    };
    _.n.visible_changed = function() {
        this.fa.style.display = this.get("visible") ? "" : "none";
        this.F.start();
        if (this.get("visible")) {
            var a = this.m.element.style.display;
            this.m.element.style.display = "none";
            this.m.element.getBoundingClientRect();
            this.m.element.style.display = a;
            RAa(this)
        } else this.H = !1
    };
    _.n.bz = function(a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Ne(a) : _.Pe(a)
    };
    _.n.focus = function() {
        this.G = document.activeElement;
        var a;
        _.Gi.H && (a = this.j.getBoundingClientRect());
        if (this.get("disableAutoPan")) _.Ji(this.h, !0);
        else {
            var b = _.iha(this.j);
            if (b.length) {
                b = b[0];
                a = a || this.j.getBoundingClientRect();
                var c = b.getBoundingClientRect();
                _.Ji(c.bottom <= a.bottom && c.right <= a.right ? b : this.h, !0)
            } else _.Ji(this.m.element, !0)
        }
    };
    $I.prototype.close = function() {
        if (this.isOpen) {
            this.isOpen = !1;
            for (var a = _.A(this.j), b = a.next(); !b.done; b = a.next()) _.Te(b.value);
            this.j.length = 0;
            this.m.stop();
            this.m.dispose();
            this.va && this.C && this.va.nf(this.C);
            a = this.D;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.h && this.h.unbindAll()
        }
    };
    _.Me("infowindow", {
        Gv: function(a) {
            var b = null;
            _.Tm(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.Lq.h.delete(a), b.xz.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (b = {
                        xz: VAa(a, e, e instanceof _.nf ? f.h.then(function(g) {
                            return g.va
                        }) : void 0),
                        Lq: WAa(e)
                    }, OAa(b.Lq, a)) : _.ef(f, "panes_changed", d)
                }
            })
        }
    });
});