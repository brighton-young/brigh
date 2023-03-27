// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "158",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__dee"
            }],
            "tags": [{
                "function": "__asprv",
                "vtp_globalName": "google_optimize",
                "vtp_listenForMutations": false,
                "tag_id": 13
            }, {
                "function": "__asprv",
                "tag_id": 14
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": ["macro", 1]
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "optimize.callback"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1]
                ]
            ]
        },
        "runtime": []





    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        ea = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = ea,
        la = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Uk = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function() {},
        pa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        qa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ra = Array.isArray,
        sa = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ta = function(a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        xa = function(a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        ya = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Aa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ba = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ca = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Da = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ea = function() {
            return new Date(Date.now())
        },
        Fa = function() {
            return Ea().getTime()
        },
        ua = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ga = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ha = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ia = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        La = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ma = /^\w{1,9}$/,
        Oa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                Ma.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Qa = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Ra() {
        for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ta() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Sa, Ua;

    function Va(a) {
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Sa[m], Sa[n], Sa[p], Sa[q])
        }
        return b.join("")
    }

    function Wa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Ua[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Xa = {},
        Ya = function(a, b) {
            Xa[a] = Xa[a] || [];
            Xa[a][b] = !0
        },
        Za = function() {
            delete Xa.GA4_EVENT
        },
        $a = function(a) {
            var b = Xa[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Va(c.join("")).replace(/\.+$/, "")
        };
    var ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var bb, cb = function() {
        if (void 0 === bb) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                bb = a
            } else bb = a
        }
        return bb
    };
    var eb = function(a, b) {
        this.h = b === db ? a : ""
    };
    eb.prototype.toString = function() {
        return this.h + ""
    };
    var db = {};
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var gb, hb;
    a: {
        for (var ib = ["CLOSURE_FLAGS"], jb = ma, kb = 0; kb < ib.length; kb++)
            if (jb = jb[ib[kb]], null == jb) {
                hb = null;
                break a
            }
        hb = jb
    }
    var lb = hb && hb[610401301];
    gb = null != lb ? lb : !1;

    function mb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var nb, ob = ma.navigator;
    nb = ob ? ob.userAgentData || null : null;

    function pb(a) {
        return gb ? nb ? nb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function qb(a) {
        return -1 != mb().indexOf(a)
    };

    function rb() {
        return gb ? !!nb && 0 < nb.brands.length : !1
    }

    function sb() {
        return rb() ? !1 : qb("Opera")
    }

    function tb() {
        return qb("Firefox") || qb("FxiOS")
    }

    function ub() {
        return rb() ? pb("Chromium") : (qb("Chrome") || qb("CriOS")) && !(rb() ? 0 : qb("Edge")) || qb("Silk")
    };
    var vb = {},
        wb = function(a, b) {
            this.h = b === vb ? a : ""
        };
    wb.prototype.toString = function() {
        return this.h.toString()
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function xb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("");
            if ("style" === a.tagName.toLowerCase()) throw Error("");
        }
        a.innerHTML = b instanceof wb && b.constructor === wb ? b.h : "type_error:SafeHtml"
    };

    function yb(a) {
        var b = a = zb(a),
            c = cb(),
            d = c ? c.createHTML(b) : b;
        return new wb(d, vb)
    }

    function zb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        D = document,
        Ab = navigator,
        Bb = D.currentScript && D.currentScript.src,
        Cb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Db = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Eb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Fb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Gb(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Hb = function(a, b, c, d, e) {
            var f = D.createElement("script");
            Gb(f, d, Eb);
            f.type = "text/javascript";
            f.async = !0;
            var g, k = zb(a),
                m = cb(),
                n = m ? m.createScriptURL(k) : k;
            g = new eb(n, db);
            f.src = g instanceof eb && g.constructor === eb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Db(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = D.getElementsByTagName("script")[0] || D.body || D.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Ib = function() {
            if (Bb) {
                var a = Bb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Jb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                k = !1;
            g || (g = D.createElement("iframe"), k = !0);
            Gb(g, c, Fb);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (k) {
                var m = D.body && D.body.lastChild || D.body ||
                    D.head;
                m.parentNode.insertBefore(g, m)
            }
            Db(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Kb = function(a, b, c, d) {
            var e = new Image(1, 1);
            Gb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Lb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Mb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        F = function(a) {
            z.setTimeout(a, 0)
        },
        Nb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Ob = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Pb = function(a) {
            var b = D.createElement("div");
            xb(b, yb("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Qb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Rb = function(a) {
            var b;
            try {
                b = Ab.sendBeacon && Ab.sendBeacon(a)
            } catch (c) {
                Ya("TAGGING", 15)
            }
            b || Kb(a)
        },
        Sb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Tb = function() {
            var a = z.performance;
            if (a && pa(a.now)) return a.now()
        },
        Ub = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wb = function(a) {
            if (null == a) return String(a);
            var b = Vb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Xb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Yb = function(a) {
            if (!a || "object" != Wb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Xb(a, "constructor") && !Xb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Xb(a, b)
        },
        G = function(a, b) {
            var c = b || ("array" == Wb(a) ? [] : {}),
                d;
            for (d in a)
                if (Xb(a, d)) {
                    var e = a[d];
                    "array" == Wb(e) ? ("array" != Wb(c[d]) && (c[d] = []), c[d] = G(e, c[d])) : Yb(e) ? (Yb(c[d]) || (c[d] = {}), c[d] = G(e, c[d])) : c[d] = e
                }
            return c
        };
    var Zb = function(a) {
        if (void 0 === a || ra(a) || Yb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var $b = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Th: a("consent"),
            Pf: a("convert_case_to"),
            Qf: a("convert_false_to"),
            Rf: a("convert_null_to"),
            Sf: a("convert_true_to"),
            Tf: a("convert_undefined_to"),
            Ek: a("debug_mode_metadata"),
            Na: a("function"),
            We: a("instance_name"),
            Ki: a("live_only"),
            Li: a("malware_disabled"),
            Mi: a("metadata"),
            Pi: a("original_activity_id"),
            Ik: a("original_vendor_template_id"),
            Hk: a("once_on_load"),
            Oi: a("once_per_event"),
            Tg: a("once_per_load"),
            Kk: a("priority_override"),
            Lk: a("respected_consent_types"),
            Xg: a("setup_tags"),
            nb: a("tag_id"),
            dh: a("teardown_tags")
        }
    }();
    var vc;
    var wc = [],
        xc = [],
        yc = [],
        zc = [],
        Ac = [],
        Bc = {},
        Cc, Dc, Fc = function() {
            var a = Ec;
            Dc = Dc || a
        },
        Gc, Hc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Bc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.ih && d.ih(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.hh && (f.vtp_gtmCachedValues = d.hh);
            if (b) {
                if (null == b.name) {
                    var k;
                    a: {
                        var m = b.index;
                        if (null == m) k = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = wc[m];
                                    break;
                                case 1:
                                    n = zc[m];
                                    break;
                                default:
                                    k = "";
                                    break a
                            }
                            var p = n && n[$b.We];
                            k = p ? String(p) : ""
                        }
                    }
                    b.name = k
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : vc(c, f, b)
        },
        Jc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Ic(a[e], b, c));
            return d
        },
        Ic = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Ic(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = wc[f];
                        if (!g || b.rf(g)) return;
                        c[f] = !0;
                        var k =
                            String(g[$b.We]);
                        try {
                            var m = Jc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Hc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            Gc && (d = Gc.ej(d, m))
                        } catch (x) {
                            b.uh && b.uh(x, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Ic(a[n], b, c)] = Ic(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Ic(a[q], b, c);
                            Dc && (p = p || r === Dc.Pd);
                            d.push(r)
                        }
                        return Dc && p ? Dc.ij(d) : d.join("");
                    case "escape":
                        d = Ic(a[1], b, c);
                        if (Dc && ra(a[1]) && "macro" ===
                            a[1][0] && Dc.Ij(a)) return Dc.ck(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) ac[a[t]] && (d = ac[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!zc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            nh: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Kc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Kc = function(a, b, c) {
            try {
                return Cc(Jc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Nc = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Lc(a), f = 0; f < xc.length; f++) {
                var g = xc[f],
                    k = Mc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < zc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Mc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Lc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Kc(yc[c], a));
                return b[c]
            }
        };
    var Pc = {
        ej: function(a, b) {
            b[$b.Pf] && "string" === typeof a && (a = 1 == b[$b.Pf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty($b.Rf) && null === a && (a = b[$b.Rf]);
            b.hasOwnProperty($b.Tf) && void 0 === a && (a = b[$b.Tf]);
            b.hasOwnProperty($b.Sf) && !0 === a && (a = b[$b.Sf]);
            b.hasOwnProperty($b.Qf) && !1 === a && (a = b[$b.Qf]);
            return a
        }
    };
    var fd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function gd(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var hd = new ua;

    function id(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = hd.get(e);
            f || (f = new RegExp(b, d), hd.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    };
    var td = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function ud(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var wd = function(a) {
            return vd ? D.querySelectorAll(a) : null
        },
        xd = function(a, b) {
            if (!vd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!D.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yd = !1;
    if (D.querySelectorAll) try {
        var zd = D.querySelectorAll(":root");
        zd && 1 == zd.length && zd[0] == D.documentElement && (yd = !0)
    } catch (a) {}
    var vd = yd;
    var J = function(a) {
        Ya("GTM", a)
    };
    var N = {
            g: {
                H: "ad_storage",
                O: "analytics_storage",
                hd: "region",
                Kf: "consent_updated",
                Lf: "wait_for_update",
                Xh: "app_remove",
                Yh: "app_store_refund",
                Zh: "app_store_subscription_cancel",
                ai: "app_store_subscription_convert",
                bi: "app_store_subscription_renew",
                Uf: "add_payment_info",
                Vf: "add_shipping_info",
                ic: "add_to_cart",
                jc: "remove_from_cart",
                Wf: "view_cart",
                Jb: "begin_checkout",
                kc: "select_item",
                rb: "view_item_list",
                Kb: "select_promotion",
                sb: "view_promotion",
                Ba: "purchase",
                mc: "refund",
                Ca: "view_item",
                Xf: "add_to_wishlist",
                ci: "first_open",
                di: "first_visit",
                oa: "gtag.config",
                Da: "gtag.get",
                ei: "in_app_purchase",
                nc: "page_view",
                fi: "session_start",
                ue: "user_engagement",
                Lb: "gclid",
                ia: "ads_data_redaction",
                W: "allow_ad_personalization_signals",
                ve: "allow_custom_scripts",
                gi: "allow_display_features",
                kd: "allow_enhanced_conversions",
                fb: "allow_google_signals",
                ya: "allow_interest_groups",
                ld: "auid",
                hi: "auto_detection_enabled",
                tb: "aw_remarketing",
                we: "aw_remarketing_only",
                md: "discount",
                nd: "aw_feed_country",
                od: "aw_feed_language",
                ba: "items",
                pd: "aw_merchant_id",
                Yf: "aw_basket_type",
                qd: "campaign_content",
                rd: "campaign_id",
                sd: "campaign_medium",
                ud: "campaign_name",
                oc: "campaign",
                vd: "campaign_source",
                wd: "campaign_term",
                hb: "client_id",
                ii: "content_group",
                ji: "content_type",
                Ea: "conversion_cookie_prefix",
                qc: "conversion_id",
                qa: "conversion_linker",
                sc: "conversion_api",
                Ra: "cookie_domain",
                Fa: "cookie_expires",
                Sa: "cookie_flags",
                Mb: "cookie_name",
                xd: "cookie_path",
                Ka: "cookie_prefix",
                ub: "cookie_update",
                uc: "country",
                la: "currency",
                yd: "customer_lifetime_value",
                vc: "custom_map",
                ki: "debug_mode",
                Z: "developer_id",
                li: "disable_merchant_reported_purchases",
                mi: "dc_custom_params",
                ni: "dc_natural_search",
                xe: "dynamic_event_settings",
                oi: "affiliation",
                Zf: "checkout_option",
                ag: "checkout_step",
                ri: "coupon",
                ye: "item_list_name",
                ze: "list_name",
                si: "promotions",
                zd: "shipping",
                cg: "tax",
                Ad: "engagement_time_msec",
                wc: "enhanced_client_id",
                xc: "enhanced_conversions",
                dg: "enhanced_conversions_automatic_settings",
                Bd: "estimated_delivery_date",
                Ae: "euid_logged_in_state",
                Nb: "event_callback",
                Ob: "event_developer_id_string",
                eg: "event",
                Cd: "event_settings",
                Dd: "event_timeout",
                ui: "experiments",
                Be: "firebase_id",
                Ed: "first_party_collection",
                Fd: "_x_20",
                vb: "_x_19",
                fg: "fledge",
                gg: "flight_error_code",
                hg: "flight_error_message",
                ig: "gac_gclid",
                Gd: "gac_wbraid",
                jg: "gac_wbraid_multiple_conversions",
                Ce: "ga_restrict_domain",
                De: "ga_temp_client_id",
                kg: "gdpr_applies",
                lg: "geo_granularity",
                ib: "value_callback",
                Ta: "value_key",
                Fk: "google_ono",
                Ua: "google_signals",
                Hd: "google_tld",
                Id: "groups",
                mg: "gsa_experiment_id",
                ng: "iframe_state",
                Jd: "ignore_referrer",
                Ee: "internal_traffic_results",
                Kd: "is_legacy_loaded",
                og: "is_passthrough",
                La: "language",
                Fe: "legacy_developer_id_string",
                ra: "linker",
                Qb: "accept_incoming",
                wb: "decorate_forms",
                N: "domains",
                Rb: "url_position",
                pg: "method",
                yc: "new_customer",
                qg: "non_interaction",
                vi: "optimize_id",
                rg: "page_hostname",
                Sb: "page_path",
                za: "page_referrer",
                xb: "page_title",
                sg: "passengers",
                ug: "phone_conversion_callback",
                wi: "phone_conversion_country_code",
                vg: "phone_conversion_css_class",
                xi: "phone_conversion_ids",
                wg: "phone_conversion_number",
                xg: "phone_conversion_options",
                yg: "quantity",
                zc: "redact_device_info",
                Ge: "redact_enhanced_user_id",
                yi: "redact_ga_client_id",
                zi: "redact_user_id",
                Ld: "referral_exclusion_definition",
                yb: "restricted_data_processing",
                Ai: "retoken",
                zg: "screen_name",
                zb: "screen_resolution",
                Bi: "search_term",
                Ga: "send_page_view",
                Ab: "send_to",
                Ac: "session_duration",
                Md: "session_engaged",
                He: "session_engaged_time",
                jb: "session_id",
                Nd: "session_number",
                Bc: "delivery_postal_code",
                Bg: "temporary_client_id",
                Ie: "topmost_url",
                Ci: "tracking_id",
                Je: "traffic_type",
                Ma: "transaction_id",
                ma: "transport_url",
                Cg: "trip_type",
                Cc: "update",
                kb: "url_passthrough",
                Ke: "_user_agent_architecture",
                Le: "_user_agent_bitness",
                Me: "_user_agent_full_version_list",
                Ne: "_user_agent_mobile",
                Oe: "_user_agent_model",
                Pe: "_user_agent_platform",
                Qe: "_user_agent_platform_version",
                Re: "_user_agent_wow64",
                na: "user_data",
                Dg: "user_data_auto_latency",
                Eg: "user_data_auto_meta",
                Fg: "user_data_auto_multi",
                Gg: "user_data_auto_selectors",
                Hg: "user_data_auto_status",
                Se: "user_data_mode",
                Te: "user_data_settings",
                va: "user_id",
                Ha: "user_properties",
                Ig: "us_privacy_string",
                ja: "value",
                Od: "wbraid",
                Jg: "wbraid_multiple_conversions",
                Pg: "_host_name",
                Qg: "_in_page_command",
                Rg: "_is_passthrough_cid",
                Sg: "non_personalized_ads",
                Ic: "_sst_parameters",
                Qa: "conversion_label",
                sa: "page_location",
                Pb: "global_developer_id_string",
                Ag: "tc_privacy_string"
            }
        },
        Xd = {},
        Yd = Object.freeze((Xd[N.g.W] = 1, Xd[N.g.kd] = 1, Xd[N.g.fb] = 1, Xd[N.g.ba] = 1, Xd[N.g.Ra] = 1, Xd[N.g.Fa] = 1, Xd[N.g.Sa] = 1, Xd[N.g.Mb] = 1, Xd[N.g.xd] = 1, Xd[N.g.Ka] = 1, Xd[N.g.ub] =
            1, Xd[N.g.vc] = 1, Xd[N.g.Z] = 1, Xd[N.g.xe] = 1, Xd[N.g.Nb] = 1, Xd[N.g.Cd] = 1, Xd[N.g.Dd] = 1, Xd[N.g.Ed] = 1, Xd[N.g.Ce] = 1, Xd[N.g.Ua] = 1, Xd[N.g.Hd] = 1, Xd[N.g.Id] = 1, Xd[N.g.Ee] = 1, Xd[N.g.Kd] = 1, Xd[N.g.ra] = 1, Xd[N.g.Ge] = 1, Xd[N.g.Ld] = 1, Xd[N.g.yb] = 1, Xd[N.g.Ga] = 1, Xd[N.g.Ab] = 1, Xd[N.g.Ac] = 1, Xd[N.g.He] = 1, Xd[N.g.Bc] = 1, Xd[N.g.ma] = 1, Xd[N.g.Cc] = 1, Xd[N.g.Te] = 1, Xd[N.g.Ha] = 1, Xd[N.g.Ic] = 1, Xd));
    Object.freeze([N.g.sa, N.g.za, N.g.xb, N.g.La, N.g.zg, N.g.va, N.g.Be, N.g.ii]);
    var Zd = {},
        $d = Object.freeze((Zd[N.g.Xh] = 1, Zd[N.g.Yh] = 1, Zd[N.g.Zh] = 1, Zd[N.g.ai] = 1, Zd[N.g.bi] = 1, Zd[N.g.ci] = 1, Zd[N.g.di] = 1, Zd[N.g.ei] = 1, Zd[N.g.fi] = 1, Zd[N.g.ue] = 1, Zd)),
        ae = {},
        be = Object.freeze((ae[N.g.Uf] = 1, ae[N.g.Vf] = 1, ae[N.g.ic] = 1, ae[N.g.jc] = 1, ae[N.g.Wf] = 1, ae[N.g.Jb] = 1, ae[N.g.kc] = 1, ae[N.g.rb] = 1, ae[N.g.Kb] = 1, ae[N.g.sb] = 1, ae[N.g.Ba] = 1, ae[N.g.mc] = 1, ae[N.g.Ca] = 1, ae[N.g.Xf] = 1, ae)),
        ce = Object.freeze([N.g.W, N.g.fb, N.g.ub]),
        de = Object.freeze([].concat(ce)),
        ee = Object.freeze([N.g.Fa, N.g.Dd, N.g.Ac, N.g.He, N.g.Ad]),
        fe = Object.freeze([].concat(ee)),
        ge = {},
        he = (ge[N.g.H] = "1", ge[N.g.O] = "2", ge),
        ie = {},
        je = Object.freeze((ie[N.g.W] = 1, ie[N.g.kd] = 1, ie[N.g.ya] = 1, ie[N.g.tb] = 1, ie[N.g.we] = 1, ie[N.g.md] = 1, ie[N.g.nd] = 1, ie[N.g.od] = 1, ie[N.g.ba] = 1, ie[N.g.pd] = 1, ie[N.g.Ea] = 1, ie[N.g.qa] = 1, ie[N.g.Ra] = 1, ie[N.g.Fa] = 1, ie[N.g.Sa] = 1, ie[N.g.Ka] = 1, ie[N.g.la] = 1, ie[N.g.yd] = 1, ie[N.g.Z] = 1, ie[N.g.li] = 1, ie[N.g.xc] = 1, ie[N.g.Bd] = 1, ie[N.g.Be] = 1, ie[N.g.Ed] = 1, ie[N.g.Kd] = 1, ie[N.g.La] = 1, ie[N.g.yc] = 1, ie[N.g.sa] = 1, ie[N.g.za] = 1, ie[N.g.ug] = 1, ie[N.g.vg] = 1, ie[N.g.wg] =
            1, ie[N.g.xg] = 1, ie[N.g.yb] = 1, ie[N.g.Ga] = 1, ie[N.g.Ab] = 1, ie[N.g.Bc] = 1, ie[N.g.Ma] = 1, ie[N.g.ma] = 1, ie[N.g.Cc] = 1, ie[N.g.kb] = 1, ie[N.g.na] = 1, ie[N.g.va] = 1, ie[N.g.ja] = 1, ie));
    Object.freeze(N.g);
    var ke = {},
        le = z.google_tag_manager = z.google_tag_manager || {},
        me = Math.random();
    ke.Ze = "33m0";
    ke.Hc = Number("1") || 0;
    ke.ca = "dataLayer";
    ke.Vh = "";
    var ne = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        oe = {
            __paused: !0,
            __tg: !0
        },
        pe;
    for (pe in ne) ne.hasOwnProperty(pe) && (oe[pe] = !0);
    var qe = Ba(""),
        re, se = !1;
    re = se;
    var te, ue = !1;
    te = ue;
    var ve, we = !1;
    ve = we;
    var xe, ye = !1;
    ye = !0;
    xe = ye;
    ke.jd = "www.googletagmanager.com";
    var ze = "" + ke.jd + (re ? "/gtag/js" : "/gtm.js"),
        Ae = null,
        Be = null,
        Ce = {},
        De = {},
        Ee = {},
        Fe = function() {
            var a = le.sequence || 1;
            le.sequence = a + 1;
            return a
        };
    ke.Uh = "";
    var Ge = "";
    ke.Td = Ge;
    var He = new ua,
        Ie = {},
        Je = {},
        Me = {
            name: ke.ca,
            set: function(a, b) {
                G(La(a, b), Ie);
                Ke()
            },
            get: function(a) {
                return Le(a, 2)
            },
            reset: function() {
                He = new ua;
                Ie = {};
                Ke()
            }
        },
        Le = function(a, b) {
            return 2 != b ? He.get(a) : Ne(a)
        },
        Ne = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ie, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Oe = function(a, b) {
            Je.hasOwnProperty(a) || (He.set(a, b), G(La(a, b), Ie), Ke())
        },
        Ke = function(a) {
            l(Je, function(b, c) {
                He.set(b, c);
                G(La(b), Ie);
                G(La(b,
                    c), Ie);
                a && delete Je[b]
            })
        },
        Pe = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ne(a) : He.get(a);
            "array" === Wb(d) || "object" === Wb(d) ? c = G(d) : c = d;
            return c
        };
    var Qe = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Re = function(a) {
        Re[" "](a);
        return a
    };
    Re[" "] = function() {};
    var Te = function() {
        var a = Se,
            b = "pf";
        if (a.pf && a.hasOwnProperty(b)) return a.pf;
        var c = new a;
        return a.pf = c
    };
    var Se = function() {
        var a = {};
        this.h = function() {
            var b = Qe.h,
                c = Qe.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Qe.h] = !0
        }
    };
    var Ue = !1,
        Xe = !1,
        Ye = [];

    function Ze() {
        var a = Cb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: $e,
            update: af,
            declare: bf,
            addListener: cf,
            notifyListeners: df,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function bf(a, b, c, d, e) {
        var f = Ze();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            k = g[a] || {},
            m = k.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || n === e || (n === d ? m !== e : !n && !m)) {
            var p = {
                region: k.region,
                declare_region: n,
                declare: "granted" === b,
                initial: k.initial,
                update: k.update,
                quiet: k.quiet
            };
            if ("" !== d || !1 !== k.declare) g[a] = p
        }
    }

    function $e(a, b, c, d, e, f) {
        var g = Ze();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        Ya("TAGGING", 19);
        if (void 0 == b) Ya("TAGGING", 18);
        else {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        initial: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) k[a] =
                    r;
                q && z.setTimeout(function() {
                    k[a] === r && r.quiet && (r.quiet = !1, ef(a), df(), Ya("TAGGING", 2))
                }, f)
            }
        }
    }

    function af(a, b) {
        var c = Ze();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = ff(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = ff(c, a);
            f.quiet ? (f.quiet = !1, ef(a)) : g !== d && ef(a)
        }
    }

    function cf(a, b) {
        Ye.push({
            consentTypes: a,
            qj: b
        })
    }

    function ef(a) {
        for (var b = 0; b < Ye.length; ++b) {
            var c = Ye[b];
            ra(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.zh = !0)
        }
    }

    function df(a, b) {
        for (var c = 0; c < Ye.length; ++c) {
            var d = Ye[c];
            if (d.zh) {
                d.zh = !1;
                try {
                    d.qj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function ff(a, b) {
        var c = a.entries[b] || {},
            d = c.update;
        if (void 0 !== d) return d;
        d = c.initial;
        return void 0 !== d ? d : c.declare
    }
    var gf = function(a) {
            var b = Ze();
            b.accessedAny = !0;
            return ff(b, a)
        },
        hf = function(a) {
            var b = Ze();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        jf = function(a) {
            return (Ze().entries[a] || {}).declare
        },
        kf = function(a) {
            var b = Ze();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        lf = function() {
            if (!Te().h()) return !1;
            var a = Ze();
            a.accessedAny = !0;
            return a.active
        },
        mf = function() {
            var a = Ze();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        nf = function(a, b) {
            Ze().addListener(a, b)
        },
        of = function(a, b) {
            Ze().notifyListeners(a,
                b)
        },
        pf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!kf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                nf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        qf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === gf(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && nf(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };
    var rf = /:[0-9]+$/,
        sf = /^\d+\.fls\.doubleclick\.net$/,
        tf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        wf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = uf(a.protocol) || uf(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(rf, "").toLowerCase());
            return vf(a, b, c, d, e)
        },
        vf = function(a, b, c, d, e) {
            var f, g = uf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = xf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(rf, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || Ya("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = tf(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        uf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        xf = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        yf = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ya("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(rf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        zf = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = yf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Af = function(a) {
            var b = yf(z.location.href),
                c = wf(b, "host", !1);
            if (c && c.match(sf)) {
                var d = wf(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Bf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Cf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Df = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ef = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Ff(a) {
        return "null" !== a.origin
    };
    var If = function(a, b, c, d) {
            return Gf(d) ? Cf(a, String(b || Hf()), c) : []
        },
        Lf = function(a, b, c, d, e) {
            if (Gf(e)) {
                var f = Jf(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Kf(f, function(g) {
                        return g.Yd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Kf(f, function(g) {
                        return g.Vc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Mf(a, b, c, d) {
        var e = Hf(),
            f = window;
        Ff(f) && (f.document.cookie = a);
        var g = Hf();
        return e != g || void 0 != c && 0 <= If(b, g, !1, d).indexOf(c)
    }
    var Qf = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete g[u], t;
                g[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete g[u], t;
                g[u] = !0;
                return t + "; " + u
            }
            if (!Gf(c.Xa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Nf(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.Rk);
            f = d(f, "samesite",
                c.Sk);
            c.Tk && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Of(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Pf(q, c.path) && Mf(r, a, b, c.Xa)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Pf(m, c.path) ? 1 : Mf(f, a, b, c.Xa) ? 0 : 1
        },
        Rf = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Qf(a, b, c)
        };

    function Kf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Jf(a, b, c) {
        for (var d = [], e = If(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Yd: 1 * m[0] || 1,
                    Vc: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Nf = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Sf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Tf = /(^|\.)doubleclick\.net$/i,
        Pf = function(a, b) {
            return Tf.test(window.document.location.hostname) || "/" === b && Sf.test(a)
        },
        Hf = function() {
            return Ff(window) ? window.document.cookie : ""
        },
        Of = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Tf.test(e) || Sf.test(e) || a.push("none");
            return a
        },
        Gf = function(a) {
            if (!Te().h() || !a || !lf()) return !0;
            if (!kf(a)) return !1;
            var b = gf(a);
            return null == b ? !0 : !!b
        };
    var Uf = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Bf(a) & 2147483647) : String(b)
        },
        Vf = function(a) {
            return [Uf(a), Math.round(Fa() / 1E3)].join(".")
        },
        Yf = function(a, b, c, d, e) {
            var f = Wf(b);
            return Lf(a, f, Xf(c), d, e)
        },
        Zf = function(a, b, c, d) {
            var e = "" + Wf(c),
                f = Xf(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Wf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Xf = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function $f(a, b, c, d) {
        var e, f = Number(null != a.pb ? a.pb : void 0);
        0 !== f && (e = new Date((b || Fa()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Xa: d
        }
    };
    var ag;
    var eg = function() {
            var a = bg,
                b = cg,
                c = dg(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Lb(D, "mousedown", d);
                Lb(D, "keyup", d);
                Lb(D, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        fg = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            dg().decorators.push(f)
        },
        gg = function(a, b, c) {
            for (var d = dg().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== D.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ia(e, g.callback())
                }
            }
            return e
        };

    function dg() {
        var a = Cb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var hg = /(.*?)\*(.*?)\*(.*)/,
        ig = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        jg = /^(?:www\.|m\.|amp\.)+/,
        kg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function lg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var ng = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Va(String(d))))
            }
        var e = b.join("*");
        return ["1", mg(e), e].join("*")
    };

    function mg(a, b) {
        var c = [Ab.userAgent, (new Date).getTimezoneOffset(), Ab.userLanguage || Ab.language, Math.floor(Fa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = ag)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ag = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ag[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function og() {
        return function(a) {
            var b = yf(z.location.href),
                c = b.search.replace("?", ""),
                d = tf(c, "_gl", !0) || "";
            a.query = pg(d) || {};
            var e = wf(b, "fragment").match(lg("_gl"));
            a.fragment = pg(e && e[3] || "") || {}
        }
    }

    function qg(a, b) {
        var c = lg(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var rg = function(a, b) {
            b || (b = "_gl");
            var c = kg.exec(a);
            if (!c) return "";
            var d = c[1],
                e = qg(b, (c[2] || "").slice(1)),
                f = qg(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        sg = function(a) {
            var b = og(),
                c = dg();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ia(d, e.query), a && Ia(d, e.fragment));
            return d
        },
        pg = function(a) {
            try {
                var b = tg(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Wa(d[e + 1]);
                        c[f] = g
                    }
                    Ya("TAGGING", 6);
                    return c
                }
            } catch (k) {
                Ya("TAGGING",
                    8)
            }
        };

    function tg(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = hg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === mg(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Ya("TAGGING", 7)
            }
        }
    }

    function ug(a, b, c, d) {
        function e(p) {
            p = qg(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = kg.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function vg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = gg(b, 1, c),
            e = gg(b, 2, c),
            f = gg(b, 3, c);
        if (Ja(d)) {
            var g = ng(d);
            c ? wg("_gl", g, a) : xg("_gl", g, a, !1)
        }
        if (!c && Ja(e)) {
            var k = ng(e);
            xg("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        xg(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        wg(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && ug(n, p, q)
            }
    }

    function xg(a, b, c, d) {
        if (c.href) {
            var e = ug(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }

    function wg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = D.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = ug(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }

    function bg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || vg(e, e.hostname)
            }
        } catch (g) {}
    }

    function cg(a) {
        try {
            if (a.action) {
                var b = wf(yf(a.action), "host");
                vg(a, b)
            }
        } catch (c) {}
    }
    var yg = function(a, b, c, d) {
            eg();
            fg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        zg = function(a, b) {
            eg();
            fg(a, [vf(z.location, "host", !0)], b, !0, !0)
        },
        Ag = function() {
            var a = D.location.hostname,
                b = ig.exec(D.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(jg, ""),
                m = e.replace(jg, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        Bg = function(a, b) {
            return !1 === a ? !1 : a || b || Ag()
        };
    var Cg = {},
        Dg = function(a) {
            return void 0 == Cg[a] ? !1 : Cg[a]
        };
    var Eg = ["1"],
        Fg = {},
        Ng = {},
        Sg = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Og(a.prefix);
            if (!Fg[c])
                if (Pg(c, a.path, a.domain)) {
                    if (Dg("enable_auid_cross_domain")) {
                        var d = Ng[Og(a.prefix)];
                        Qg(a, d ? d.id : void 0, d ? d.uf : void 0)
                    }
                } else {
                    if (Dg("enable_auid_fl_iframe")) {
                        var e = Af("auiddc");
                        if (e) {
                            Ya("TAGGING", 17);
                            Fg[c] = e;
                            return
                        }
                    }
                    if (b) {
                        var f = Og(a.prefix),
                            g = Vf();
                        if (0 === Rg(f, g, a)) {
                            var k = Cb("google_tag_data", {});
                            k._gcl_au || (k._gcl_au = g)
                        }
                        Pg(c, a.path, a.domain)
                    }
                }
        };

    function Qg(a, b, c) {
        var d = Og(a.prefix),
            e = Fg[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(Fa() / 1E3)));
                    Rg(d, k, a, 1E3 * g)
                }
            }
        }
    }

    function Rg(a, b, c, d) {
        var e = Zf(b, "1", c.domain, c.path),
            f = $f(c, d);
        f.Xa = "ad_storage";
        return Rf(a, e, f)
    }

    function Pg(a, b, c) {
        var d = Yf(a, b, c, Eg, "ad_storage");
        if (!d) return !1;
        Tg(a, d);
        return !0
    }

    function Tg(a, b) {
        var c = b.split(".");
        5 === c.length ? (Fg[a] = c.slice(0, 2).join("."), Ng[a] = {
            id: c.slice(2, 4).join("."),
            uf: Number(c[4]) || 0
        }) : 3 === c.length ? Ng[a] = {
            id: c.slice(0, 2).join("."),
            uf: Number(c[2]) || 0
        } : Fg[a] = b
    }

    function Og(a) {
        return (a || "_gcl") + "_au"
    }

    function Ug(a) {
        lf() || a();
        pf(function() {
            gf("ad_storage") && a();
            qf(a, "ad_storage")
        }, ["ad_storage"])
    }

    function Vg(a) {
        var b = sg(!0),
            c = Og(a.prefix);
        Ug(function() {
            var d = b[c];
            if (d) {
                Tg(c, d);
                var e = 1E3 * Number(Fg[c].split(".")[1]);
                if (e) {
                    Ya("TAGGING", 16);
                    var f = $f(a, e);
                    f.Xa = "ad_storage";
                    var g = Zf(d, "1", a.domain, a.path);
                    Rf(c, g, f)
                }
            }
        })
    }

    function Wg(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = Og(d.prefix),
                g = {},
                k = Yf(f, d.path, d.domain, Eg, "ad_storage");
            if (!k) return g;
            g[f] = k;
            return g
        };
        Ug(function() {
            yg(e, a, b, c)
        })
    };
    var P = [];
    P[7] = !0;
    P[9] = !0;
    P[27] = !0;
    P[11] = !0;
    P[13] = !0;
    P[15] = !0;
    P[16] = !0;
    P[25] = !0;
    P[36] = !0;
    P[38] = !0;
    P[39] = !0;
    P[40] = !0;
    P[41] = !0;
    P[43] = !0;
    P[52] = !0;
    P[57] = !0;
    P[58] = !0;
    P[59] = !0;
    P[60] = !0;
    P[61] = !0;
    P[68] = !0;
    P[69] = !0;
    P[72] = !0;
    P[75] = !0;
    P[76] = !0;
    P[77] = !0;
    P[79] = !0;
    P[83] = !0;
    P[88] = !0;
    P[89] = !0;
    P[90] = !0;
    P[91] = !0;
    P[93] = !0;
    P[94] = !0;
    P[96] = !0;
    var Q = function(a) {
        return !!P[a]
    };
    var Yg = Xg();

    function Xg() {
        if (!Q(87)) return {};
        try {
            return JSON.parse(Wa(""))
        } catch (a) {
            return J(123), Ya("HEALTH", 2), {}
        }
    }
    var Zg = {
            gj: "",
            ik: "",
            Ej: "",
            rj: ""
        },
        $g = function() {
            var a;
            return Q(87) ? null != (a = Yg["0"]) ? a : "" : Zg.gj
        },
        ah = function() {
            var a;
            return Q(87) ? null != (a = Yg["1"]) ? a : "" : Zg.ik
        },
        bh = function() {
            var a = "";
            return a
        },
        ch = function() {
            var a = !1;
            return a
        };
    var dh, eh = !1,
        fh = function(a) {
            if (!eh) {
                eh = !0;
                dh = dh || {}
            }
            return dh[a]
        };
    var gh = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        hh = function(a) {
            if (D.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var k = g.indexOf("opacity(");
                    0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };

    function Nh() {}

    function Oh() {};

    function Ph(a) {
        for (var b = [], c = 0; c < Qh.length; c++) {
            var d = a(Qh[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Qh = [N.g.H, N.g.O],
        Rh = function(a) {
            for (var b = a[N.g.hd], c = Array.isArray(b) ? b : [b], d = {
                    bc: 0
                }; d.bc < c.length; d = {
                    bc: d.bc
                }, ++d.bc) l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.hd) {
                        var k = c[e.bc],
                            m = $g(),
                            n = ah();
                        Xe = !0;
                        Ue && Ya("TAGGING", 20);
                        Ze().declare(f, g, k, m, n)
                    }
                }
            }(d))
        },
        Sh = function(a) {
            var b = a[N.g.hd];
            b && J(40);
            var c = a[N.g.Lf];
            c && J(41);
            for (var d = ra(b) ? b : [b], e = {
                    cc: 0
                }; e.cc < d.length; e = {
                    cc: e.cc
                }, ++e.cc) l(a, function(f) {
                return function(g, k) {
                    if (g !== N.g.hd && g !== N.g.Lf) {
                        var m = d[f.cc],
                            n = Number(c),
                            p = $g(),
                            q = ah();
                        Ue = !0;
                        Xe && Ya("TAGGING", 20);
                        Ze().set(g, k, m, p, q, n)
                    }
                }
            }(e))
        },
        Th = function(a, b) {
            l(a, function(c, d) {
                Ue = !0;
                Xe && Ya("TAGGING", 20);
                Ze().update(c, d)
            }); of (b.eventId, b.priorityId)
        },
        Uh = function(a) {
            var b = gf(a);
            return void 0 != b ? b : !0
        },
        Vh = function() {
            return "G1" + Ph(gf)
        },
        Wh = function(a, b) {
            qf(a, b)
        },
        Xh = function(a, b) {
            pf(a, b)
        };
    var Yh = function() {
        le.dedupe_gclid || (le.dedupe_gclid = "" + Vf());
        return le.dedupe_gclid
    };
    var Zh = function() {
        var a = !1;
        return a
    };
    var S = {
            C: "GTM-P3B33MM",
            eb: ""
        },
        $h = {
            xh: "GTM-P3B33MM",
            yh: "GTM-P3B33MM"
        };
    S.Xe = Ba("");
    var ai = function() {
            return $h.xh ? $h.xh.split("|") : [S.C]
        },
        bi = function() {
            return $h.yh ? $h.yh.split("|") : []
        },
        ci = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        ei = function() {
            for (var a = di(), b = ai(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || qa(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = bi(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && J(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[S.eb] = 2
        },
        fi = function(a) {
            return !!di().container[a]
        },
        gi = function() {
            var a =
                di().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (qa(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        hi = function() {
            var a = {};
            l(di().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function di() {
        var a = le.tidr;
        a || (a = new ci, le.tidr = a);
        return a
    }
    var ii = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        ji = function(a) {
            var b = S.C.split("-")[0].toUpperCase(),
                c = {};
            c.jj = S.C;
            c.mk = ke.Hc;
            c.qk = ke.Ze;
            c.Sj = S.Xe ? 2 : 1;
            re ? (c.je = ii[b], c.je || (c.je = 0)) : c.je = xe ? 13 : 10;
            ve ? c.wf = 1 : Zh() ? c.wf = 2 : c.wf = 3;
            var d;
            var e = c.je,
                f = c.wf;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + ud(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Mk,
                k = 4 + d + (g ? "" + ud(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.qk;
            m = n && td.test(n) ?
                "" + ud(3, 2) + n : "";
            var p, q = c.mk;
            p = q ? "" + ud(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.jj;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + ud(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Sj || 0) + w
                }
            } else r = "";
            return k + m + p + r
        };

    function ki(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var li = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function mi() {
        return gb ? !!nb && !!nb.platform : !1
    }

    function ni() {
        return qb("iPhone") && !qb("iPod") && !qb("iPad")
    }

    function oi() {
        ni() || qb("iPad") || qb("iPod")
    };
    sb();
    rb() || qb("Trident") || qb("MSIE");
    qb("Edge");
    !qb("Gecko") || -1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") || qb("Trident") || qb("MSIE") || qb("Edge"); - 1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") && qb("Mobile");
    mi() || qb("Macintosh");
    mi() || qb("Windows");
    (mi() ? "Linux" === nb.platform : qb("Linux")) || mi() || qb("CrOS");
    var pi = ma.navigator || null;
    pi && (pi.appVersion || "").indexOf("X11");
    mi() || qb("Android");
    ni();
    qb("iPad");
    qb("iPod");
    oi();
    mb().toLowerCase().indexOf("kaios");
    var qi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var k = a.charCodeAt(e + f);
                    if (!k || 61 == k || 38 == k || 35 == k) return e
                }
                e += f + 1
            }
            return -1
        },
        ri = /#|$/,
        si = function(a, b) {
            var c = a.search(ri),
                d = qi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        ti = /[?&]($|#)/,
        ui = function(a, b, c) {
            for (var d, e = a.search(ri), f = 0, g, k = []; 0 <= (g = qi(a, f, b, e));) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(ti, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var vi = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Re(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        wi = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function xi() {
        if (!D.head) return null;
        var a = yi("META");
        D.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = 'A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
        return a
    }
    var zi = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : vi(z.top) ? 1 : 2
        },
        yi = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Ai(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = yi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = ab(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            li(e, "load", f);
            li(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ci = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            wi(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Bi(c, b)
        },
        Bi = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else Ai(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Di = function() {};
    var Ei = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Fi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.M = {};
            this.qb = 0;
            var c;
            this.V = null != (c = b.zk) ? c : 500;
            var d;
            this.I = null != (d = b.Nk) ? d : !1;
            this.B = null
        };
    la(Fi, Di);
    Fi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = Ef(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.V && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.V));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Ei(c), c.internalBlockOnErrors = b.I, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Gi(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Fi.prototype.removeEventListener = function(a) {
        a && a.listenerId && Gi(this, "removeEventListener", null, a.listenerId)
    };
    var Ii = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Hi(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Hi(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === k ? a.purpose && a.vendor ? Hi(a.purpose.legitimateInterests,
                b) && Hi(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Hi = function(a, b) {
            return !(!a || !a[b])
        },
        Gi = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Ji(a)) {
                Ki(a);
                var f = ++a.qb;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Ji = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ki = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, li(a.m, "message", a.B))
        },
        Li = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Ei(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Ci({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Mi = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Ni = ki('', 500);

    function Oi() {
        var a = le.tcf || {};
        return le.tcf = a
    }
    var Ui = function() {
        var a = Oi(),
            b = new Fi(z, {
                zk: -1
            });
        Pi(b) && Qi() && J(124);
        if (!Qi() && !a.active && Pi(b)) {
            a.active = !0;
            a.ee = {};
            Ri();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Si(a), Ti(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Mi) Mi.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                k;
                            for (k in Mi)
                                if (Mi.hasOwnProperty(k))
                                    if ("1" ===
                                        k) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Li(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Ii(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[k] = Ii(c, k, Mi[k]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.ee = d, Ti(a))
                    }
                })
            } catch (c) {
                Si(a), Ti(a)
            }
        }
    };

    function Si(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Ri() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Ni, a);
        Sh(b)
    }

    function Pi(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Ji(a) ? !0 : !1
    }
    var Qi = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function Ti(a) {
        var b = {},
            c = (b.ad_storage = a.ee["1"] ? "granted" : "denied", b);
        Th(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Vi()
        })
    }
    var Vi = function() {
            var a = Oi();
            return a.active ? a.tcString || "" : ""
        },
        Wi = function() {
            var a = Oi();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Xi = function(a) {
            if (!Mi.hasOwnProperty(String(a))) return !0;
            var b = Oi();
            return b.active && b.ee ? !!b.ee[String(a)] : !0
        };
    var Yi = function(a) {
            var b = String(a[$b.Na] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        Zi = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var $i = ["L", "S", "Y"],
        aj = ["S", "E"],
        bj = {
            sampleRate: "0.005000",
            Qh: "",
            Ph: Number("5"),
            Oh: Number("")
        },
        cj;
    if (!(cj = Zi)) {
        var dj = Math.random(),
            ej = bj.sampleRate;
        cj = dj < ej
    }
    var fj = cj,
        gj = "https://www.googletagmanager.com/a?id=" + S.C + "&cv=158",
        hj = {
            label: S.C + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function ij() {
        return [gj, "&v=3&t=t", "&pid=" + ta(), "&rv=" + ke.Ze].join("")
    }
    var jj = ij();

    function kj() {
        jj = ij()
    }
    var lj = {},
        mj = "",
        nj = "",
        oj = "",
        pj = "",
        qj = [],
        rj = "",
        sj = {},
        tj = !1,
        uj = {},
        vj = {},
        wj = {},
        xj = "",
        yj = void 0,
        zj = {},
        Rj = {},
        Sj = void 0,
        Tj = 5;
    0 < bj.Ph && (Tj = bj.Ph);
    var Uj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Jj: function() {
                    return c < a ? !1 : Fa() - d[c % a] < b
                },
                jk: function() {
                    var f = c++ % a;
                    d[f] = Fa()
                }
            }
        }(Tj, 1E3),
        Vj = 1E3,
        Wj = "";

    function Xj(a) {
        var b = yj;
        if (void 0 === b) return "";
        var c = $a("GTM"),
            d = $a("TAGGING"),
            e = $a("HEALTH"),
            f = jj,
            g = lj[b] ? "" : "&es=1",
            k = zj[b],
            m = Yj(b),
            n = Zj(),
            p = mj,
            q = nj,
            r = xj,
            t = ak(a),
            u = oj,
            v = pj,
            w;
        return [f, g, k, m, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, r, t, u, v, w, rj ? "&dl=" + encodeURIComponent(rj) : "", 0 < qj.length ? "&tdp=" + qj.join(".") : "", ke.Hc ?
            "&x=" + ke.Hc : "", "&z=0"
        ].join("")
    }

    function ck() {
        Sj && (z.clearTimeout(Sj), Sj = void 0);
        if (void 0 !== yj && (!lj[yj] || mj || nj))
            if (Rj[yj] || Uj.Jj() || 0 >= Vj--) J(1), Rj[yj] = !0;
            else {
                Uj.jk();
                var a = Xj(!0);
                Kb(a);
                if (pj || rj && 0 < qj.length) {
                    var b = a.replace("/a?", "/td?");
                    Kb(b)
                }
                lj[yj] = !0;
                rj = pj = oj = xj = nj = mj = "";
                qj = []
            }
    }

    function dk() {
        Sj || (Sj = z.setTimeout(ck, 500))
    }

    function ek(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function fk() {
        2022 <= Xj().length && ck()
    }

    function Zj() {
        return "&tc=" + zc.filter(function(a) {
            return a
        }).length
    }
    var hk = function(a, b) {
            if (fj && !Rj[a] && yj !== a) {
                ck();
                yj = a;
                oj = mj = "";
                zj[a] = "&e=" + ek(b) + "&eid=" + a;
                dk();
            }
        },
        ik = function(a, b, c, d) {
            if (fj && b) {
                var e = Yi(b),
                    f = c + e;
                if (!Rj[a]) {
                    a !== yj && (ck(), yj = a);
                    mj = mj ? mj + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g) throw Error("Error: No function name given for function call.");
                    var k = (Bc[g] ? "1" : "2") + e;
                    oj = oj ? oj + "." + k : "&ti=" + k;
                    dk();
                    fk()
                }
            }
        },
        jk = function(a, b, c) {
            if (fj && a && a[$b.nb]) {
                var d = b + "." + a[$b.nb];
                wj[d] = c;
                "html" == Yi(a) && Wj == d && (mj += ":" + Math.floor(c))
            }
        };

    function ak(a) {}

    function Yj(a) {}
    var qk = function(a, b, c) {
            if (fj && void 0 !== a && !Rj[a]) {
                a !== yj && (ck(), yj = a);
                var d = c + b;
                nj = nj ? nj + "." + d : "&epr=" + d;
                dk();
                fk()
            }
        },
        rk = function(a, b, c) {},
        bk = void 0;
    tb();
    ni() || qb("iPod");
    qb("iPad");
    !qb("Android") || ub() || tb() || sb() || qb("Silk");
    ub();
    !qb("Safari") || ub() || (rb() ? 0 : qb("Coast")) || sb() || (rb() ? 0 : qb("Edge")) || (rb() ? pb("Microsoft Edge") : qb("Edg/")) || (rb() ? pb("Opera") : qb("OPR")) || tb() || qb("Silk") || qb("Android") || oi();
    var sk = {},
        tk = null,
        uk = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!tk) {
                tk = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(k[m].split(""));
                    sk[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === tk[q] && (tk[q] = p)
                    }
                }
            }
            for (var r = sk[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    B = b[v + 2],
                    A = r[y >> 2],
                    C = r[(y & 3) << 4 | x >> 4],
                    H = r[(x & 15) << 2 | B >> 6],
                    I = r[B & 63];
                t[w++] = "" + A + C + H + I
            }
            var E = 0,
                K = u;
            switch (b.length - v) {
                case 2:
                    E = b[v + 1], K = r[(E & 15) << 2] || u;
                case 1:
                    var M = b[v];
                    t[w] = "" + r[M >> 2] + r[(M & 3) << 4 | E >> 4] + K + u
            }
            return t.join("")
        };
    var vk = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function wk() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function xk() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function yk() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function zk() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Ak() {
        if (!zk()) return null;
        var a = wk();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(vk).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var Gk = function(a) {
        for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Hf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function Hk(a, b) {
        var c = Gk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Hf] || (d[c[e].Hf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Hf].push(g)
            }
        }
        return d
    };
    var Ik = /^\w+$/,
        Jk = /^[\w-]+$/,
        Kk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Lk = function() {
            if (!Te().h() || !lf()) return !0;
            var a = gf("ad_storage");
            return null == a ? !0 : !!a
        },
        Mk = function(a, b) {
            kf("ad_storage") ? Lk() ? a() : qf(a, "ad_storage") : b ? Ya("TAGGING", 3) : pf(function() {
                Mk(a, !0)
            }, ["ad_storage"])
        },
        Ok = function(a) {
            return Nk(a).map(function(b) {
                return b.aa
            })
        },
        Nk = function(a) {
            var b = [];
            if (!Ff(z) || !D.cookie) return b;
            var c = If(a, D.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    cd: d.cd
                }, e++) {
                var f = Pk(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.cd = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = sa(b, function(q) {
                            return function(r) {
                                return r.aa === q.cd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Qk(p.labels, n || [])) : b.push({
                        version: k,
                        aa: d.cd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Rk(b)
        };

    function Qk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Sk(a) {
        return a && "string" == typeof a && a.match(Ik) ? a : "_gcl"
    }
    var Uk = function() {
            var a = yf(z.location.href),
                b = wf(a, "query", !1, void 0, "gclid"),
                c = wf(a, "query", !1, void 0, "gclsrc"),
                d = wf(a, "query", !1, void 0, "wbraid"),
                e = wf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || tf(f, "gclid");
                c = c || tf(f, "gclsrc");
                d = d || tf(f, "wbraid")
            }
            return Tk(b, c, e, d)
        },
        Tk = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Jk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Jk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Wk = function(a) {
            var b = Uk();
            Mk(function() {
                Vk(b, !1, a)
            })
        };

    function Vk(a, b, c, d, e) {
        function f(w, y) {
            var x = Xk(w, g);
            x && (Rf(x, y, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Sk(c.prefix);
        d = d || Fa();
        var k = $f(c, d, !0);
        k.Xa = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Xk("gb", g),
                t = !1;
            if (!b)
                for (var u = Nk(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Zk = function(a, b) {
            var c = sg(!0);
            Mk(function() {
                for (var d = Sk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Kk[f]) {
                        var g = Xk(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(Yk(k), Fa()),
                                n;
                            b: {
                                var p = m;
                                if (Ff(z))
                                    for (var q = If(g, D.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Yk(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = $f(b, m, !0);
                                t.Xa = "ad_storage";
                                Rf(g, k, t)
                            }
                        }
                    }
                }
                Vk(Tk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Xk = function(a, b) {
            var c = Kk[a];
            if (void 0 !== c) return b + c
        },
        Yk = function(a) {
            return 0 !== $k(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Pk(a) {
        var b = $k(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function $k(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Jk.test(a[2]) ? [] : a
    }
    var al = function(a, b, c, d, e) {
            if (ra(b) && Ff(z)) {
                var f = Sk(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = Xk(a[m], f);
                            if (n) {
                                var p = If(n, D.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                Mk(function() {
                    yg(g, b, c, d)
                })
            }
        },
        Rk = function(a) {
            return a.filter(function(b) {
                return Jk.test(b.aa)
            })
        },
        bl = function(a, b) {
            if (Ff(z)) {
                for (var c = Sk(b.prefix), d = {}, e = 0; e < a.length; e++) Kk[a[e]] && (d[a[e]] = Kk[a[e]]);
                Mk(function() {
                    l(d, function(f, g) {
                        var k = If(c + g, D.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            u) {
                            return Yk(u) - Yk(t)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = Yk(m),
                                p = 0 !== $k(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== $k(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Vk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function cl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var dl = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (lf()) {
                var c = Uk();
                if (cl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    zg(function() {
                        return d
                    }, 3);
                    zg(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        el = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Lk()) return e;
            var f = Nk(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var k = f[0],
                    m = f[0].timestamp,
                    n = [k.version, Math.round(m /
                        1E3), k.aa].concat(k.labels || [], [b]).join("."),
                    p = $f(c, m, !0);
                p.Xa = "ad_storage";
                Rf(a, n, p)
            }
            return e
        };

    function fl(a, b) {
        var c = Sk(b),
            d = Xk(a, c);
        if (!d) return 0;
        for (var e = Nk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function gl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var hl = function(a) {
        var b = Math.max(fl("aw", a), gl(Lk() ? Hk() : {}));
        return Math.max(fl("gb", a), gl(Lk() ? Hk("_gac_gb", !0) : {})) > b
    };
    var ml = /[A-Z]+/,
        nl = /\s/,
        ol = function(a) {
            if (h(a)) {
                a = Da(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (ml.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || nl.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            T: c + "-" + d[0],
                            K: d
                        }
                    }
                }
            }
        },
        ql = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = ol(a[c]);
                d && (b[d.id] = d)
            }
            pl(b);
            var e = [];
            l(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function pl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.T)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var rl = function(a, b, c, d) {
        var e = Ib(),
            f;
        if (1 === e) a: {
            var g = ze;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = D.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(k) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Dl = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = G(c.eventMetadata || {});
        this.J = !1
    };
    Dl.prototype.copyToHitData = function(a, b) {
        var c = R(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var El = function(a, b, c) {
        var d = fh(a.target.T);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Fl(a) {
        return {
            getDestinationId: function() {
                return a.target.T
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            abort: function() {
                a.J = !0
            },
            getFromEventContext: function(b) {
                return R(a.h,
                    b)
            },
            Qk: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var Zl = function(a, b, c, d, e, f, g, k, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.m = e;
            this.I = f;
            this.V = g;
            this.B = k;
            this.eventMetadata = m;
            this.R = n;
            this.P = p;
            this.F = q
        },
        R = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.m[b]) return a.m[b];
            fj && $l(a, a.I[b], a.V[b]) && (J(71), J(79));
            return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        am = function(a) {
            function b(g) {
                for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.m);
            b(a.I);
            if (fj)
                for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        J(71);
                        J(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        bm = function(a, b, c) {
            function d(m) {
                Yb(m) && l(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (fj) {
                var g = f,
                    k = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.V[b]), d(a.m[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || $l(a, e, k)) J(71), J(81);
                f = g;
                e = k
            }
            return f ? e : void 0
        },
        cm = function(a) {
            var b = [N.g.oc, N.g.qd, N.g.rd, N.g.sd, N.g.ud, N.g.vd, N.g.wd],
                c = {},
                d = !1,
                e = function(k) {
                    for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.m)) return c;
            e(a.I);
            if (fj) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.V);
                $l(a, c, f) && (J(71), J(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        $l = function(a, b, c) {
            if (!fj) return !1;
            try {
                if (b === c) return !1;
                var d = Wb(b);
                if (d !== Wb(c) || !(Yb(b) && Yb(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if ($l(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || $l(a, b[g], c[g])) return !0
                }
            } catch (k) {
                J(72)
            }
            return !1
        },
        dm = function(a, b) {
            this.Fi = a;
            this.Gi = b;
            this.I = {};
            this.Ng = {};
            this.h = {};
            this.M = {};
            this.m = {};
            this.Ec = {};
            this.B = {};
            this.hc = function() {};
            this.qb = function() {};
            this.V = !1
        },
        em = function(a, b) {
            a.I = b;
            return a
        },
        fm = function(a, b) {
            a.Ng = b;
            return a
        },
        gm = function(a, b) {
            a.h = b;
            return a
        },
        hm = function(a, b) {
            a.M = b;
            return a
        },
        im = function(a, b) {
            a.m = b;
            return a
        },
        jm = function(a,
            b) {
            a.Ec = b;
            return a
        },
        km = function(a, b) {
            a.B = b || {};
            return a
        },
        lm = function(a, b) {
            a.hc = b;
            return a
        },
        mm = function(a, b) {
            a.qb = b;
            return a
        },
        nm = function(a) {
            a.V = !0;
            return a
        },
        om = function(a) {
            return new Zl(a.Fi, a.Gi, a.I, a.Ng, a.h, a.M, a.m, a.Ec, a.B, a.hc, a.qb, a.V)
        };

    function tm() {
        return "attribution-reporting"
    }

    function um(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var vm = !1;

    function wm() {
        if (um("join-ad-interest-group") && pa(Ab.joinAdInterestGroup)) return !0;
        vm || (xi(), vm = !0);
        return um("join-ad-interest-group") && pa(Ab.joinAdInterestGroup)
    }

    function xm(a, b) {
        var c = void 0;
        try {
            c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Fa() - d) {
                Ya("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Ya("TAGGING", 10);
                return
            }
        } catch (e) {}
        Jb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Fa()
        }, c)
    }

    function ym() {
        return Q(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var zm = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Am = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Bm = /^\d+\.fls\.doubleclick\.net$/,
        Cm = /;gac=([^;?]+)/,
        Dm = /;gacgb=([^;?]+)/,
        Em = /;gclaw=([^;?]+)/,
        Fm = /;gclgb=([^;?]+)/;

    function Gm(a, b) {
        if (Bm.test(D.location.host)) {
            var c = D.location.href.match(b);
            return c && 2 == c.length && c[1].match(zm) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Hm = function(a, b, c) {
        var d = Lk() ? Hk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var k = el("_gac_gb_" + g, a, b, c);
            f = f || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + k.join(","))
        }
        return {
            uj: f ? e.join(";") : "",
            tj: Gm(d, Dm)
        }
    };

    function Im(a, b, c) {
        if (Bm.test(D.location.host)) {
            var d = D.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Am)) return [{
                aa: d[1]
            }]
        } else return Nk((a || "_gcl") + b);
        return []
    }
    var Jm = function(a) {
            return Im(a, "_aw", Em).map(function(b) {
                return b.aa
            }).join(".")
        },
        Km = function(a) {
            return Im(a, "_gb", Fm).map(function(b) {
                return b.aa
            }).join(".")
        },
        Lm = function(a, b) {
            var c = el((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Mm = function() {
        if (pa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var xn = {
        D: {
            Jf: "ads_conversion_hit",
            pe: "container_execute_start",
            Nf: "container_setup_end",
            qe: "container_setup_start",
            Mf: "container_execute_end",
            Of: "container_yield_end",
            se: "container_yield_start",
            Kg: "event_execute_end",
            Lg: "event_setup_end",
            Dc: "event_setup_start",
            Mg: "ga4_conversion_hit",
            Fc: "page_load",
            Jk: "pageview",
            lb: "snippet_load",
            Yg: "tag_callback_error",
            Zg: "tag_callback_failure",
            ah: "tag_callback_success",
            bh: "tag_execute_end",
            Ub: "tag_execute_start"
        }
    };
    var yn = !1,
        zn = "L S Y E TC HTC".split(" "),
        An = ["S", "E"],
        Bn = ["TS", "TE"];
    var bo = function(a) {},
        co = function(a) {},
        Cn = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var k = {};
            return k
        },
        Dn = function(a) {
            var b = !1;
            return b
        },
        En = function(a, b) {},
        eo = function() {
            var a = {};
            return a
        },
        Vn = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        fo = function() {},
        go = function(a, b, c) {},
        ho = function(a) {
            Ub() && Ub().mark(S.C +
                "_" + a + "_start")
        },
        io = function(a) {
            if (Ub()) {
                var b = Ub(),
                    c = S.C + "_" + a + "_start",
                    d = S.C + "_" + a + "_duration";
                b.measure(d, c);
                var e = Ub().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = le._p || {};
                void 0 === f[a] && (f[a] = e.duration, le._p = f);
                return e.duration
            }
        },
        jo = function() {
            var a = Cn("PAGEVIEW", S.C);
            if (Nn(a.entryName, "mark")[0]) {
                var b = Ub();
                b.clearMarks(a.entryName);
                b.clearMeasures("GTM-" + S.C + ":" + xn.D.Fc + ":to:PAGEVIEW")
            }
            var c = Cn(xn.D.Fc, S.C);
            Dn(a) && En(a, c)
        };
    var ko = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var lo = function(a, b, c) {
        var d = si(a, "fmt");
        if (b) {
            var e = si(a, "random"),
                f = si(a, "label") || "";
            if (!e) return !1;
            var g = uk(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!ko(g, b)) return !1
        }
        d && 4 != d && (a = ui(a, "rfmt", d));
        var k = ui(a, "fmt", 4);
        Hb(k, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, D.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Bo = function() {
            this.h = {}
        },
        Co = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Do = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Fo = function(a, b, c, d) {};

    function Ho(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return yf("" + c + b).href
        }
    }

    function Io() {
        return !!ke.Td && "SGTM_TOKEN" !== ke.Td.split("@@").join("")
    };
    var Ko = function(a, b, c, d) {
            if (!Jo() && !fi(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + ke.ca,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var k = Io();
                k && (f += "&sign=" + ke.Td);
                var m = te || ve ? Ho(b, e + f) : void 0;
                if (!m) {
                    var n = ke.jd + e;
                    k && Bb && g && (n = Bb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = rl("https://", "http://", n + f)
                }
                di().container[a] = {
                    state: 1,
                    context: d
                };
                Hb(m)
            }
        },
        Lo = function(a, b, c) {
            var d;
            if (d = !Jo()) {
                var e = di().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (gi()) di().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ke.ca + "&cx=c";
                    Io() && (f += "&sign=" + ke.Td);
                    var g = te || ve ? Ho(b, f) : void 0;
                    g || (g = rl("https://", "http://", ke.jd + f));
                    di().destination[a] = {
                        state: 1,
                        context: c
                    };
                    Hb(g)
                }
        };

    function Jo() {
        if (Zh()) {
            return !0
        }
        return !1
    };
    var Mo = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        No = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Oo = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Po = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        So = function(a) {
            var b = Le("gtm.allowlist") || Le("gtm.whitelist");
            b && J(9);
            re && (b = ["google", "gtagfl", "lcl", "zone"]);
            Qo() && (re ?
                J(116) : J(117), Ro && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ka(Ca(b), No),
                d = Le("gtm.blocklist") || Le("gtm.blacklist");
            d || (d = Le("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            Qo() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ca(d).indexOf("google") && J(2);
            var e = d && Ka(Ca(d), Oo),
                f = {};
            return function(g) {
                var k = g && g[$b.Na];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = De[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        J(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= e.indexOf(k);
                    if (t) r = t;
                    else {
                        var u = xa(e, m || []);
                        u && J(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = xa(e, Po));
                return f[k] = v
            }
        },
        Ro = !1;
    var Qo = function() {
        return Mo.test(z.location && z.location.hostname)
    };
    var To = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Uo = {},
        Vo = Object.freeze((Uo[N.g.Ga] = !0, Uo)),
        Wo = 0 <= D.location.search.indexOf("?gtm_diagnostics=") || 0 <= D.location.search.indexOf("&gtm_diagnostics="),
        Yo = function(a, b, c) {
            if (fj && "config" === a && !(1 < ol(b).K.length)) {
                var d, e = Cb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = G(c.I);
                G(c.h, f);
                var g = [],
                    k;
                for (k in d) {
                    var m = Xo(d[k], f);
                    m.length && (Wo && console.log(m), g.push(k))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        pj = pj ? pj + "!" + n : "&tdc=" + n
                    }
                    Ya("TAGGING",
                        To[D.readyState] || 14)
                }
                d[b] = f
            }
        };

    function Zo(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Xo(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Vo[q] : t
            },
            f;
        for (f in Zo(a, b)) {
            var g = (d ? d + "." : "") + f,
                k = e(f, a),
                m = e(f, b),
                n = "object" === Wb(k) || "array" === Wb(k),
                p = "object" === Wb(m) || "array" === Wb(m);
            if (n && p) Xo(k, m, c, g);
            else if (n || p || k !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var $o = !1,
        ap = 0,
        bp = [];

    function cp(a) {
        if (!$o) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                $o = !0;
                for (var e = 0; e < bp.length; e++) F(bp[e])
            }
            bp.push = function() {
                for (var f = 0; f < arguments.length; f++) F(arguments[f]);
                return 0
            }
        }
    }

    function dp() {
        if (!$o && 140 > ap) {
            ap++;
            try {
                D.documentElement.doScroll("left"), cp()
            } catch (a) {
                z.setTimeout(dp, 50)
            }
        }
    }
    var ep = function(a) {
        $o ? a() : bp.push(a)
    };
    var fp = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: S.C
        }
    };
    var hp = function(a, b) {
            this.h = !1;
            this.I = [];
            this.M = {
                tags: []
            };
            this.V = !1;
            this.m = this.B = 0;
            gp(this, a, b)
        },
        ip = function(a, b, c, d) {
            if (oe.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Yb(d) && (e = G(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        jp = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        kp = function(a) {
            if (!a.h) {
                for (var b = a.I, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.I.length = 0
            }
        },
        gp = function(a, b, c) {
            void 0 !== b && lp(a, b);
            c && z.setTimeout(function() {
                return kp(a)
            }, Number(c))
        },
        lp =
        function(a, b) {
            var c = Ha(function() {
                return F(function() {
                    b(S.C, a.M)
                })
            });
            a.h ? c() : a.I.push(c)
        },
        mp = function(a) {
            a.B++;
            return Ha(function() {
                a.m++;
                a.V && a.m >= a.B && kp(a)
            })
        },
        np = function(a) {
            a.V = !0;
            a.m >= a.B && kp(a)
        };
    var op = {},
        pp = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        qp = !1;
    var rp = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ea());
                z[b] = c
            }
            return z[b]
        },
        sp = function(a) {
            if (lf()) {
                var b = pp();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function tp() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var up = function(a) {
            if (op[a] || qp) return;
            var b = z[tp()];
            pa(b) && (b("provide", a, oa), op[a] = !0);
        },
        vp = function(a, b) {
            return function() {
                var c = pp(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function dq(a, b, c, d) {
        var e = zc[a],
            f = eq(a, b, c, d);
        if (!f) return null;
        var g = Ic(e[$b.Xg], c, []);
        if (g && g.length) {
            var k = g[0];
            f = dq(k.index, {
                R: f,
                P: 1 === k.nh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function eq(a, b, c, d) {
        function e() {
            if (f[$b.Li]) k();
            else {
                var w = Jc(f, c, []),
                    y = w[$b.Th];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Uh(y[x])) {
                            k();
                            return
                        }
                var B = ip(c.Bb, String(f[$b.Na]), Number(f[$b.nb]), w[$b.Mi]),
                    A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var E = Fa() - I;
                        ik(c.id, zc[a], "5", E);
                        jp(c.Bb, B, "success", E);
                        Q(70) && go(c, f, xn.D.ah);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var E = Fa() - I;
                        ik(c.id, zc[a], "6", E);
                        jp(c.Bb, B, "failure", E);
                        Q(70) && go(c, f, xn.D.Zg);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                ik(c.id, f, "1");
                var C = function() {
                    var E = Fa() - I;
                    ik(c.id, f, "7", E);
                    jp(c.Bb, B, "exception", E);
                    Q(70) && go(c, f, xn.D.Yg);
                    A || (A = !0, k())
                };
                if (Q(70)) {
                    var H = Cn(xn.D.Ub, S.C, c.id, Number(f[$b.nb]), c.name, Yi(f));
                    Dn(H)
                }
                var I = Fa();
                try {
                    Hc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
                Q(70) && go(c, f, xn.D.bh)
            }
        }
        var f = zc[a],
            g = b.R,
            k = b.P,
            m = b.terminate;
        if (c.rf(f)) return null;
        var n = Ic(f[$b.dh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = dq(p.index, {
                    R: g,
                    P: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.nh ? m : q
        }
        if (f[$b.Tg] || f[$b.Oi]) {
            var r = f[$b.Tg] ? Ac : c.xk,
                t = g,
                u = k;
            if (!r[a]) {
                e = Ha(e);
                var v = fq(a, r, e);
                g = v.R;
                k = v.P
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function fq(a, b, c) {
        var d = [],
            e = [];
        b[a] = gq(d, e, c);
        return {
            R: function() {
                b[a] = hq;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            P: function() {
                b[a] = iq;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function gq(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function hq(a) {
        a()
    }

    function iq(a, b) {
        b()
    };
    var kq = function(a, b) {
            return 1 === arguments.length ? jq("config", a) : jq("config", a, b)
        },
        lq = function(a, b, c) {
            c = c || {};
            c[N.g.Ab] = a;
            return jq("event", b, c)
        };

    function jq(a) {
        return arguments
    }
    var mq = function() {
        this.h = [];
        this.m = []
    };
    mq.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    mq.prototype.listen = function(a) {
        this.m.push(a)
    };
    mq.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    mq.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var oq = function(a, b, c) {
            nq().enqueue(a, b, c)
        },
        qq = function() {
            var a = pq;
            nq().listen(a)
        };

    function nq() {
        var a = le.mb;
        a || (a = new mq, le.mb = a);
        return a
    }
    var yq = function(a) {
            var b = le.zones;
            return b ? b.getIsAllowedFn(ai(), a) : function() {
                return !0
            }
        },
        zq = function(a) {
            var b = le.zones;
            return b ? b.isActive(ai(), a) : !0
        };
    var Cq = function(a, b) {
        for (var c = [], d = 0; d < zc.length; d++)
            if (a[d]) {
                var e = zc[d];
                var f = mp(b.Bb);
                try {
                    var g = dq(d, {
                        R: f,
                        P: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Bc[p];
                        m.call(k, {
                            Ih: n,
                            Ah: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Aq(d, b), f()
                } catch (t) {
                    f()
                }
            }
        c.sort(Bq);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 < c.length
    };

    function Bq(a, b) {
        var c, d = b.Ah,
            e = a.Ah;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ih,
                k = b.Ih;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function Aq(a, b) {
        if (fj) {
            var c = function(d) {
                var e = b.rf(zc[d]) ? "3" : "4",
                    f = Ic(zc[d][$b.Xg], b, []);
                f && f.length && c(f[0].index);
                ik(b.id, zc[d], e);
                var g = Ic(zc[d][$b.dh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Fq = !1,
        Dq;
    var Kq = function(a) {
        var b = Fa(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if (Q(70)) {
            var f = Cn(xn.D.Dc, S.C, c, void 0, e);
            Dn(f)
        }
        if ("gtm.js" === e) {
            if (Fq) return !1;
            Fq = !0;
        }
        var m, n = !1;
        if (zq(c)) m = yq(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            n = !0;
            m = yq(Number.MAX_SAFE_INTEGER)
        }
        hk(c,
            e);
        var p = a.eventCallback,
            q = a.eventTimeout,
            r = {
                id: c,
                priorityId: d,
                name: e,
                rf: So(m),
                xk: [],
                uh: function() {
                    J(6);
                    Ya("HEALTH", 0)
                },
                hh: Gq(),
                ih: Hq(c),
                Bb: new hp(function() {
                    if (Q(70)) {
                        var x = Cn(xn.D.Kg, S.C, c, void 0, e);
                        if (Dn(x)) {
                            var B = Cn(xn.D.Dc, S.C, c, void 0, e);
                            En(x, B)
                        }
                        if ("gtm.load" === e) {
                            var A = Cn(xn.D.Mf, S.C);
                            if (Dn(A)) {
                                var C = Cn(xn.D.pe, S.C);
                                En(A, C)
                            }
                            fo();
                        }
                    }
                    p && p.apply(p, [].slice.call(arguments, 0))
                }, q)
            },
            t = Nc(r);
        n && (t = Iq(t));
        if (Q(70)) {
            var u = Cn(xn.D.Lg, S.C, c, void 0, e);
            if (Dn(u)) {
                var v = Cn(xn.D.Dc, S.C, c, void 0, e);
                En(u, v)
            }
        }
        var w = Cq(t, r),
            y = !1;
        np(r.Bb);
        "gtm.js" !== e && "gtm.sync" !== e || up(S.C);
        return Jq(t, w) || y
    };

    function Hq(a) {
        return function(b) {
            fj && (Zb(b) || rk(a, "input", b))
        }
    }

    function Gq() {
        var a = {};
        a.event = Pe("event", 1);
        a.ecommerce = Pe("ecommerce", 1);
        a.gtm = Pe("gtm");
        a.eventModel = Pe("eventModel");
        return a
    }

    function Iq(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(zc[c][$b.Na]);
                if (ne[d] || void 0 !== zc[c][$b.Pi] || Ee[d]) b[c] = !0;
                Q(58) || 0 !== zc[c][$b.Na].indexOf("__ccd") && 0 !== zc[c][$b.Na].indexOf("__ogt") && "__set_product_settings" !== zc[c][$b.Na] || (b[c] = !0)
            }
        return b
    }

    function Jq(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && zc[c] && !oe[String(zc[c][$b.Na])]) return !0;
        return !1
    }
    var Mq = function(a, b, c, d) {
            Lq.push("event", [b, a], c, d)
        },
        Nq = function(a, b, c, d) {
            Lq.push("get", [a, b], c, d)
        },
        Oq = function() {
            this.status = 1;
            this.I = {};
            this.h = {};
            this.M = {};
            this.V = null;
            this.B = {};
            this.m = !1
        },
        Pq = function(a, b, c, d) {
            var e = Fa();
            this.type = a;
            this.m = e;
            this.X = b || "";
            this.h = c;
            this.messageContext = d
        },
        Qq = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        Rq = function(a, b) {
            var c = ol(b);
            return a.m[c.T] = a.m[c.T] || new Oq
        },
        Sq = function(a, b, c, d) {
            if (d.X) {
                var e = Rq(a, d.X),
                    f = e.V;
                if (f) {
                    var g = G(c),
                        k = G(e.I[d.X]),
                        m = G(e.B),
                        n = G(e.h),
                        p = G(a.B),
                        q = {};
                    if (fj) try {
                        q = G(Ie)
                    } catch (v) {
                        J(72)
                    }
                    var r = ol(d.X).prefix,
                        t = function(v) {
                            qk(d.messageContext.eventId, r, v);
                            var w = g[N.g.Nb];
                            w && F(w)
                        },
                        u = om(mm(lm(km(im(hm(jm(gm(fm(em(new dm(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2")
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3")
                            }
                        }));
                    try {
                        qk(d.messageContext.eventId, r, "1"), Yo(d.type, d.X, u), f(d.X, b, d.m, u)
                    } catch (v) {
                        qk(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Qq.prototype.register = function(a, b, c) {
        var d = Rq(this, a);
        3 !== d.status && (d.V = b, d.status = 3, c && (G(d.h, c), d.h = c), this.flush())
    };
    Qq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!ol(c)) return;
            if (c) {
                var e = ol(c);
                e && 1 === Rq(this, c).status && (Rq(this, c).status = 2, this.push("require", [{}], e.T, {}))
            }
            Rq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new Pq(a, c, b, d));
        d.deferrable || this.flush()
    };
    Qq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.X || Rq(this, f.X).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Rq(this, f.X);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.h[0], function(r, t) {
                            G(La(r, t), b.B)
                        });
                        break;
                    case "config":
                        g = Rq(this, f.X);
                        e.Za = {};
                        l(f.h[0], function(r) {
                            return function(t, u) {
                                G(La(t, u), r.Za)
                            }
                        }(e));
                        var k = !!e.Za[N.g.Cc];
                        delete e.Za[N.g.Cc];
                        var m = ol(f.X),
                            n = m.T === m.id;
                        k || (n ? g.B = {} : g.I[f.X] = {});
                        g.m && k || Sq(this, N.g.oa, e.Za, f);
                        g.m = !0;
                        n ? G(e.Za, g.B) : (G(e.Za, g.I[f.X]), J(70));
                        d = !0;
                        break;
                    case "event":
                        g = Rq(this, f.X);
                        e.bd = {};
                        l(f.h[0], function(r) {
                            return function(t, u) {
                                G(La(t, u), r.bd)
                            }
                        }(e));
                        Sq(this, f.h[1], e.bd, f);
                        break;
                    case "get":
                        g = Rq(this, f.X);
                        var p = {},
                            q = (p[N.g.Ta] = f.h[0], p[N.g.ib] = f.h[1], p);
                        Sq(this, N.g.Da, q, f)
                }
                this.h.shift();
                Tq(this, f)
            }
            e = {
                Za: e.Za,
                bd: e.bd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Tq = function(a, b) {
            if ("require" !== b.type)
                if (b.X)
                    for (var c = Rq(a, b.X).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.M)
                                for (var g = f.M[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        Uq = function(a, b) {
            var c = Lq,
                d = G(b);
            G(Rq(c, a).h, d);
            Rq(c, a).h = d
        },
        Lq = new Qq;
    var Vq = {},
        Wq = {},
        Xq = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    gd: d.gd,
                    dd: d.dd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.gd = ol(f), d.gd && (sa(bi(), function(p) {
                    return function(q) {
                        return p.gd.T === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = Vq[f] || [];
                    d.dd = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.dd[q] = !0
                        }
                    }(d));
                    for (var k = ai(), m = 0; m < k.length; m++)
                        if (d.dd[k[m]]) {
                            b = b.concat(bi());
                            break
                        }
                    var n = Wq[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Tj: b,
                Vj: c
            }
        },
        Yq = function(a) {
            l(Vq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Zq = function(a) {
            l(Wq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var $q = "HA GF G UA AW DC MC".split(" "),
        ar = !1,
        br = !1;

    function cr(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Fe()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var dr = {
            config: function(a, b) {
                var c = cr(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Yb(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = ol(a[1]);
                    if (e) {
                        hk(c.eventId, "gtag.config");
                        var f = e.T,
                            g = e.id !== f;
                        if (g ? -1 === bi().indexOf(f) : -1 === ai().indexOf(f)) {
                            if (!Q(61) || !d[N.g.Kd]) {
                                var k = d[N.g.ma] || Lq.B[N.g.ma];
                                g ? Lo(f, k, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : Ko(f, k, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (qe && !g && !d[N.g.Cc]) {
                                var m = br;
                                br = !0;
                                if (m) return
                            }
                            ar || J(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    Zq(e.id);
                                    var n = e.id,
                                        p = d[N.g.Id] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var r = Wq[p[q]] || [];
                                        Wq[p[q]] = r;
                                        0 > r.indexOf(n) && r.push(n)
                                    }
                                } else {
                                    Yq(e.id);
                                    var t = e.id,
                                        u = d[N.g.Id] || "default";
                                    u = u.toString().split(",");
                                    for (var v = 0; v < u.length; v++) {
                                        var w = Vq[u[v]] || [];
                                        Vq[u[v]] = w;
                                        0 > w.indexOf(t) && w.push(t)
                                    }
                                }
                            delete d[N.g.Id];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[N.g.Nb];
                            for (var x = g ? [e.id] : bi(), B = 0; B < x.length; B++) {
                                var A = G(b);
                                Lq.push("config", [d], x[B], A)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = cr(a, b),
                        d = a[1];
                    "default" === d ? Sh(a[2]) : "update" === d ? Th(a[2], c) : "declare" === d && b.fromContainerExecution && Rh(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Yb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = G(e), e[N.g.Nb] && (g.eventCallback = e[N.g.Nb]), e[N.g.Dd] &&
                        (g.eventTimeout = e[N.g.Dd]));
                    var k = cr(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[N.g.Ab];
                    void 0 === r && (r = Le(N.g.Ab, 2), void 0 === r && (r = "default"));
                    if (h(r) || ra(r)) {
                        var t = r.toString().replace(/\s+/g, "").split(","),
                            u = Xq(t),
                            v = u.Tj,
                            w = u.Vj;
                        if (w.length)
                            for (var y = q && q[N.g.ma] || Lq.B[N.g.ma], x = 0; x < w.length; x++) {
                                var B = ol(w[x]);
                                B && Lo(B.T, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p =
                            ql(v)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        hk(m, c);
                        for (var C = [], H = 0; H < A.length; H++) {
                            var I = A[H],
                                E = G(b);
                            if (-1 !== $q.indexOf(I.prefix)) {
                                var K = G(d),
                                    M = E.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                                E.eventMetadata = M;
                                delete K[N.g.Nb];
                                Mq(c, K, I.id, E)
                            }
                            C.push(I.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < A.length ? g.eventModel[N.g.Ab] = C.join() : delete g.eventModel[N.g.Ab];
                        ar || J(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && h(a[1]) && h(a[2]) &&
                    pa(a[3])) {
                    var c = ol(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        ar || J(43);
                        var f = Lq.B[N.g.ma];
                        if (!sa(bi(), function(k) {
                                return c.T === k
                            })) Lo(c.T, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== $q.indexOf(c.prefix)) {
                            cr(a, b);
                            var g = {};
                            Nh(G((g[N.g.Ta] = d, g[N.g.ib] = e, g)));
                            Nq(d, function(k) {
                                F(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    ar = !0;
                    var c = cr(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] =
                        d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Yb(a[1]) ? c = G(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Yb(a[2]) || ra(a[2]) ? c[a[1]] = G(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = cr(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    G(c);
                    var g = G(c);
                    Lq.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    Q(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        er = {
            policy: !0
        };
    var fr = function(a) {
            var b = z[ke.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        gr = function(a) {
            var b = z[ke.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var hr = !1,
        ir = [];

    function jr() {
        if (!hr) {
            hr = !0;
            for (var a = 0; a < ir.length; a++) F(ir[a])
        }
    }
    var kr = function(a) {
        hr ? F(a) : ir.push(a)
    };
    var tr = function() {
            try {
                var a, b;
                var m, n = S.C,
                    p = wd('script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]');
                m = p && 0 < p.length ? p[0] : null;
                b = m ? m.hasAttribute("gtm") ? "gtmo" : m.hasAttribute("async") ? "opta" : "opts" : "optu";
                b || (b = "gaoo");
                var q = mr(nr, m && m.src),
                    r = q.Xc,
                    t = q.Yc,
                    u = q.fe,
                    v = q.he,
                    w = q.ae,
                    y = q.ne,
                    x = q.Pc,
                    B = q.nf,
                    A = q.Oc;
                "h0" != x || or || (x = "h3");
                pr = {
                    Pc: x,
                    Oc: A,
                    sj: a,
                    Rj: b,
                    nf: B,
                    he: v,
                    ae: w,
                    ne: y,
                    fe: u,
                    Xc: r,
                    Yc: t,
                    qh: qr,
                    Jh: rr
                };
                sr(pr)
            } catch (C) {}
        },
        ur = function() {
            var a = z.gaData,
                b = 0,
                c = void 0;
            if (a)
                for (var d in a)
                    if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
                        b += a[d].hitcount;
                        var e = Number(a[d].first_hit);
                        e && (!c || e < c) && (c = e)
                    }
            return {
                rh: b,
                oh: c
            }
        },
        mr = function(a, b) {
            var c, d, e, f, g, k, m, n, p;
            var q = z.performance;
            if (q) {
                if (b) {
                    var r = q.getEntriesByName(b)[0];
                    if (r) {
                        var t = q.getEntriesByType("resource"),
                            u = 0;
                        t && 0 < t.length && (u = t[0].startTime);
                        f = Math.round(r.startTime - u);
                        g = Math.round(r.duration);
                        e = t.indexOf(r); - 1 === e && (e =
                            void 0);
                        k = Math.round(a - (r.startTime + r.duration))
                    }
                }
                var v = q.timing;
                if (v.domContentLoadedEventStart) {
                    var w = v.domContentLoadedEventStart - v.navigationStart;
                    w && (d = Math.round(a - w))
                }
                var y = q.getEntriesByType("paint").filter(function(C) {
                    return "first-contentful-paint" === C.name
                })[0];
                y && (c = Math.round(a - y.startTime))
            }
            var x = z[ke.ca].hide;
            if (x) {
                if (void 0 === x[S.C]) m = "h2";
                else {
                    var B = !1;
                    if (null === x.end)
                        for (var A in x)
                            if (x.hasOwnProperty(A) && A.startsWith(S.C) && !0 === x[A]) {
                                B = !0;
                                break
                            }
                    m = B ? "h0" : "h1"
                }
                x.start && !isNaN(x.start) &&
                    (q ? q.timing && (p = Math.round(a + q.timing.navigationStart - x.start)) : p = a - x.start);
                isNaN(x.timeout) || (n = x.timeout)
            }
            return {
                Xc: d,
                Yc: c,
                fe: e,
                he: f,
                ae: g,
                ne: k,
                Pc: m,
                nf: n,
                Oc: p
            }
        },
        sr = function(a, b) {
            b = void 0 === b ? "ol" : b;
            var c = function(e, f) {
                    null != f && (d += e + encodeURIComponent(f))
                },
                d = gj;
            c("&t=", b);
            c("&s=", a.Pc);
            c("&h=", a.Oc);
            c("&g=", a.sj);
            c("&p=", a.Rj);
            c("&o=", a.nf);
            c("&l=", function() {
                var e = Ae;
                return e ? lr - Aa(e) : void 0
            }());
            c("&q=", a.he);
            c("&f=", a.ae);
            c("&e=", a.ne);
            c("&i=", a.fe);
            c("&d=", a.Xc);
            c("&c=", a.Yc);
            c("&tr=", a.Bk);
            c("&jl=", a.Pj);
            c("&jf=", a.Nj);
            c("&ji=", a.Oj);
            c("&jq=", a.Qj);
            c("&jd=", a.Lj);
            c("&jx=", a.Mj);
            c("&hc=", a.qh);
            c("&fh=", a.Jh);
            d += "&sr=0.050000";
            c("&ps=", vr);
            c("&cb=", ta());
            Kb(d);
        },
        wr = !1,
        lr, nr, or, vr, pr, qr, rr;
    vr = Math.random(), wr = "0.050000" > vr;
    var xr = function() {
            if (!wr || lr) return;
            lr = Fa();
            nr = Tb() || lr;
            or = !!D.querySelector("body");
            var a = ur(),
                b = a.oh;
            qr = a.rh;
            rr = b ? lr - b : void 0;
            kr(tr);
        },
        zr = function(a) {
            var b = yr;
            if (!wr) return;
            try {
                var c = Fa(),
                    d = Tb() || c,
                    e = ur(),
                    f = e.rh,
                    g = e.oh,
                    k = g ? c - g : void 0;
                kr(function() {
                    var m = mr(d, b),
                        n = m.Xc,
                        p = m.Yc,
                        q = m.fe,
                        r = m.he,
                        t = m.ae,
                        u = m.ne,
                        v = m.Pc,
                        w = m.Oc,
                        y = G(pr || {});
                    G(a, y);
                    G({
                        Pc: v,
                        Oc: w,
                        Xc: n,
                        Yc: p,
                        Oj: q,
                        Qj: r,
                        Lj: t,
                        Mj: u,
                        qh: f,
                        Jh: k
                    }, y);
                    sr(y, "od")
                })
            } catch (m) {}
        };
    var Br = function(a) {
        if (Ar(a)) return a;
        this.h = a
    };
    Br.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Ar = function(a) {
        return !a || "object" !== Wb(a) || Yb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Br.prototype.getUntrustedMessageValue = Br.prototype.getUntrustedMessageValue;
    var Cr = 0,
        Dr = {},
        Er = [],
        Fr = [],
        Gr = !1,
        Hr = !1;

    function Ir(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Jr = function(a) {
            return z[ke.ca].push(a)
        },
        Kr = function(a, b) {
            var c = le[ke.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Lr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Oe(e), Oe(e, f))
        });
        Ae || (Ae = a["gtm.start"]);
        xr();
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Fe(), a["gtm.uniqueEventId"] = d, Oe("gtm.uniqueEventId", d));
        return Kq(a)
    }

    function Mr(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (ya(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Nr() {
        var a;
        if (Fr.length) a = Fr.shift();
        else if (Er.length) a = Er.shift();
        else return;
        var b;
        var c = a;
        if (Gr || !Mr(c.message)) b = c;
        else {
            Gr = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Fe());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Er.unshift(k, c);
            if (fj && S.C) {
                var m;
                if (S.Xe) {
                    var n = S.C,
                        p = di().destination[n];
                    m = p && p.context
                } else {
                    var q = S.C,
                        r = di().container[q];
                    m = r && r.context
                }
                var t = m,
                    u, v = yf(z.location.href);
                u = v.hostname + v.pathname;
                var w = t && t.fromContainerExecution,
                    y = t && t.source,
                    x = S.C,
                    B = S.eb,
                    A = S.Xe;
                rj || (rj = u);
                qj.push(x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (A ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function Or() {
        for (var a = !1, b; !Hr && (b = Nr());) {
            Hr = !0;
            delete Ie.eventModel;
            Ke();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Hr = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var k = f[g],
                            m = Le(k, 1);
                        if (ra(m) || Yb(m)) m = G(m);
                        Je[k] = m
                    }
                try {
                    if (pa(d)) try {
                        d.call(Me)
                    } catch (C) {} else if (ra(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = Le(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (C) {}
                        }
                    } else {
                        var u = void 0,
                            v = !1;
                        if (ya(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = dr[d[0]];
                                    if (w && (!e.fromContainerExecution || !er[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && J(101)
                        }
                        else u = d;
                        if (u) {
                            var y = Lr(u, e);
                            a = y || a;
                            v && y && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ke(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var B = Dr[String(x)] || [], A = 0; A < B.length; A++) Fr.push(Pr(B[A]));
                        B.length && Fr.sort(Ir);
                        delete Dr[String(x)];
                        x > Cr && (Cr = x)
                    }
                    Hr = !1
                }
            }
        }
        return !a
    }

    function Qr() {
        if (Q(70)) {
            var b = Cn(xn.D.pe, S.C);
            Dn(b);
            if (Rr()) {
                var c = Cn(xn.D.Of, S.C);
                if (Dn(c)) {
                    var d = Cn(xn.D.se, S.C);
                    En(c, d)
                }
            }
        }
        var e = Or();
        try {
            fr(S.C)
        } catch (f) {}
        return e
    }

    function pq(a) {
        if (Cr < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Dr[b] = Dr[b] || [];
            Dr[b].push(a)
        } else Fr.push(Pr(a)), Fr.sort(Ir), F(function() {
            Hr || Or()
        })
    }

    function Pr(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Sr = function() {
            function a(g) {
                var k = {};
                if (Ar(g)) {
                    var m = g;
                    g = Ar(m) ? m.getUntrustedMessageValue() : void 0;
                    k.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: k
                }
            }
            var b = Cb(ke.ca, []),
                c = le[ke.ca] = le[ke.ca] || {};
            !0 === c.pruned && J(83);
            Dr = nq().get();
            qq();
            ep(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            kr(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < le.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var k = 0; k < arguments.length; k++) g[k] = new Br(arguments[k])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(r) {
                    return a(r)
                });
                Er.push.apply(Er, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (J(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return Or() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            Er.push.apply(Er, e);
            if (Rr()) {
                if (Q(70)) {
                    var f = Cn(xn.D.se, S.C);
                    Dn(f)
                }
                F(Qr)
            }
        },
        Rr = function() {
            var a = !0;
            return a
        };

    function Tr(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Fa();
        return b < c + 3E5 && b > c - 9E5
    }

    function Ur(a) {
        return a && 0 === a.indexOf("pending:") ? Tr(a.substr(8)) : !1
    };
    var Ec = {};
    Ec.Pd = new String("undefined");
    var us = z.clearTimeout,
        vs = z.setTimeout,
        T = function(a, b, c, d) {
            if (Zh()) {
                b && F(b)
            } else return Hb(a, b, c, d)
        },
        ws = function() {
            return new Date
        },
        xs = function() {
            return z.location.href
        },
        ys = function(a) {
            return wf(yf(a), "fragment")
        },
        zs = function(a) {
            return xf(yf(a))
        },
        As = function(a, b) {
            return Le(a, b || 2)
        },
        Bs = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Jr(a)) : d = Jr(a);
            return d
        },
        Cs = function(a, b) {
            z[a] = b
        },
        U = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Ds = function(a, b, c) {
            return If(a, b, void 0 === c ? !0 : !!c)
        },
        Es = function(a, b, c) {
            return 0 === Rf(a, b, c)
        },
        Fs = function(a, b) {
            if (Zh()) {
                b && F(b)
            } else Jb(a, b)
        },
        Gs = function(a) {
            return !!as(a, "init", !1)
        },
        Hs = function(a) {
            Zr(a, "init", !0)
        },
        Is = function(a, b, c) {
            fj && (Zb(a) || rk(c, b, a))
        };

    var Ks = function(a) {
            if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
            var b = a.tagName.toUpperCase();
            return "SCRIPT" == b || "STYLE" == b || "LINK" == b
        },
        Ls = function(a, b, c) {
            try {
                null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
            } catch (d) {
                return d
            }
            return null
        },
        Ms = function(a, b, c) {
            var d = a.getAttribute(b);
            return Ls(a, b, c) ? 8 : function() {
                Ls(a, b, d)
            }
        },
        Ps = function(a, b, c) {
            var d, e, f = a.ownerDocument || a.document || document;
            c = (c || "").toLowerCase();
            "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" ==
                c ? (d = a, e = null) : (d = a.parentNode, e = a);
            if (!d || d == f) return {
                result: 1,
                Dj: []
            };
            var g = Ns(b, d);
            Os(g, "SCRIPT");
            Os(g, "NOSCRIPT");
            var k = [];
            if (g.firstChild)
                for (var m = g.firstChild; m;) {
                    var n = m.nextSibling;
                    k.push(m);
                    d.insertBefore(m, e);
                    m = n
                }
            var p = a.nextSibling;
            "replace" == c && d.removeChild(a);
            return {
                result: function() {
                    for (; 0 < k.length;) d.removeChild(k.pop());
                    "replace" == c && d.insertBefore(a, p)
                },
                Dj: k.slice()
            }
        },
        Qs = {
            SELECT: [1, '<select multiple="multiple">', "</select>"],
            FIELDSET: [1, "<fieldset>", "</fieldset>"],
            MAP: [1, "<map>",
                "</map>"
            ],
            OBJECT: [1, "<object>", "</object>"],
            TABLE: [1, "<table>", "</table>"],
            TBODY: [2, "<table><tbody>", "</tbody></table>"],
            COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
            TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
        },
        Ns = function(a, b) {
            var c = 0,
                d = "",
                e = "",
                f = Qs[b.tagName];
            null != f && (c = f[0], d = f[1], e = f[2]);
            var g = b.ownerDocument.createElement("div");
            xb(g, yb(d + (a || "") + e));
            for (var k = g; 0 < c;) {
                var m = k.firstChild;
                if (null == m.firstChild) return b.ownerDocument.createElement("div");
                k = m;
                c--
            }
            return k
        },
        Os =
        function(a, b) {
            for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
                var f = c[e];
                f.parentNode.removeChild(f);
                d.push(f)
            }
        },
        Rs = function(a) {
            var b = null,
                c = null;
            try {
                b = new Function("element", a)
            } catch (d) {
                c = d
            }
            return {
                jf: b,
                error: c
            }
        },
        Vs = function(a, b, c, d, e) {
            var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var k = Ss(g),
                    m = k.rules.length;
                k.insertRule(f, m);
                return function() {
                    k.deleteRule ? k.deleteRule(m) : k.removeRule(m);
                    k.insertRule("x {}", m)
                }
            }
            var n = Ts(f,
                g);
            Us(n, g);
            var p = n.parentNode;
            return function() {
                p.removeChild(n)
            }
        },
        Ws = null,
        Ss = function(a) {
            if (Ws) return Ws;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b];
                if (!c.href) {
                    var d = c.ownerNode;
                    if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return Ws = c
                }
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return Ws = a.styleSheets[0]
        },
        Ts = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        Us = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        },
        Xs = function(a, b, c, d) {
            if (a.style.setProperty) try {
                var e = a.style.getPropertyValue(b),
                    f = a.style.getPropertyPriority(b);
                a.style.setProperty(b, c, d ? "important" : "");
                return function() {
                    a.style.setProperty(b, "", f);
                    a.style.setProperty(b, e, f)
                }
            } catch (k) {}
            var g = a.style.cssText;
            a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
            return function() {
                a.style.cssText = g
            }
        },
        Zs = function(a, b, c, d) {
            if (Ks(a)) return 7;
            if (b) return Ys(a,
                b, d);
            if (c && c.parentNode) {
                var e = a.parentNode,
                    f = a.nextSibling;
                try {
                    c.parentNode.insertBefore(a, c.nextSibling)
                } catch (g) {
                    return 9
                }
                return function() {
                    e.insertBefore(a, f)
                }
            }
            return 4
        },
        Ys = function(a, b, c) {
            var d = a.parentNode,
                e = a.nextSibling;
            c = (c || "").toLowerCase();
            try {
                if ("bottom" == c) b.appendChild(a);
                else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
                else if ("before" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b);
                    else return 5;
                else if ("after" == c)
                    if (b.parentNode) b.parentNode.insertBefore(a, b.nextSibling);
                    else return 5
            } catch (f) {
                return 9
            }
            return function() {
                try {
                    d.insertBefore(a, e)
                } catch (f) {}
            }
        },
        $s = function(a, b, c) {
            if (0 <= b && b < a.childNodes.length) {
                var d = a.childNodes[b];
                if (null != d && d.nodeType == Node.TEXT_NODE) {
                    var e = d.nodeValue;
                    d.nodeValue = c;
                    return function() {
                        d.nodeValue = e
                    }
                }
                return 2
            }
            return 3
        },
        at = function(a, b, c, d) {
            c ? d = c.nextSibling : d && (c = d.previousSibling);
            if (null != c && c.nodeType == Node.TEXT_NODE) {
                var e = c.nodeValue;
                c.nodeValue += a;
                return function() {
                    c.nodeValue = e
                }
            }
            if (null != d && d.nodeType == Node.TEXT_NODE) {
                var f = d.nodeValue;
                d.nodeValue = a + d.nodeValue;
                return function() {
                    d.nodeValue = f
                }
            }
            var g = (b.ownerDocument || b.document || document).createTextNode(a);
            d ? b.insertBefore(g, d) : b.appendChild(g);
            return function() {
                b.removeChild(g)
            }
        },
        bt = function(a) {
            var b = document.createElement("a");
            a && (b.href = a);
            return b
        };

    function ft(a, b) {
        function c(g) {
            var k = yf(g),
                m = wf(k, "protocol"),
                n = wf(k, "host", !0),
                p = wf(k, "port"),
                q = wf(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function gt(a) {
        return ht(a) ? 1 : 0
    }

    function ht(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = G(a, {});
                G({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (gt(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < fd.length; g++) {
                            var k = fd[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return gd(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return id(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return ft(b, c)
        }
        return !1
    };
    ch();

    function Gt() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Ht = function() {
            var a = Gt();
            a.hid = a.hid || ta();
            return a.hid
        },
        It = function(a, b) {
            var c = Gt();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var du = function() {
            var a = !0;
            Xi(7) && Xi(9) && Xi(10) || (a = !1);
            return a
        },
        eu = function() {
            var a = !0;
            Xi(3) && Xi(4) || (a = !1);
            return a
        };
    var Fu = window,
        Gu = document,
        Hu = function(a) {
            var b = Fu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Fu["ga-disable-" + a]) return !0;
            try {
                var c = Fu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Cf("AMP_TOKEN", String(Gu.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Gu.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Pu(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Ha] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Zu = function(a, b) {};

    function Yu(a, b) {
        var c = function() {};
        return c
    }

    function $u(a, b, c) {};
    var ww = Yu;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var yw = encodeURI,
        X = encodeURIComponent,
        zw = function(a, b, c) {
            Kb(a, b, c)
        },
        Aw = function(a, b) {
            if (!a) return !1;
            var c = wf(yf(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Bw = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Ew = function(a) {
            if (!Cw[a]) {
                Cw[a] = !0;
                var b = z[a] || {};
                z[a] = b;
                var c = function(e) {
                        return Dw[e]
                    },
                    d = b.get;
                b.get = d ? function(e) {
                    return void 0 !== Dw[e] ? Dw[e] : d(e)
                } : c
            }
        },
        Hw = function(a, b) {
            Dw[a] = b;
            for (var c = Fw(a), d = 0; d < c.length; d++) Gw(c[d], a, b);
            c = Fw("");
            for (var e = 0; e < c.length; e++) Gw(c[e], a, b)
        },
        Gw = function(a, b, c) {
            try {
                a(c, b, S.C)
            } catch (d) {}
        },
        Fw = function(a) {
            Iw[a] = Iw[a] || [];
            return Iw[a]
        },
        Dw = {},
        Iw = {},
        Cw = {};
    var Jw = function() {
            z.gaData = z.gaData || {};
            return z.gaData
        },
        Kw = function(a, b) {
            b = void 0 === b ? !1 : b;
            z.gaData = z.gaData || {};
            var c = z.gaData,
                d = c.tracker_created;
            c.tracker_created = function(e) {
                b && a(e);
                d && pa(d) && d(e);
                b || a(e)
            }
        },
        Lw = function(a) {
            var b = z[tp()];
            try {
                if (pa(b) && pa(b.getAll)) return b.getAll().filter(function(c) {
                    return c.get("trackingId") === a
                })
            } catch (c) {}
            return []
        },
        Rw = function(a, b) {
            var c = Mw[a];
            if (c) F(function() {
                return b(c)
            });
            else {
                var d = Lw(a)[0];
                d ? (Mw[a] = d, Nw || (Nw = d), F(function() {
                    return b(d)
                })) : (Ow[a] || (Ow[a] = []), Ow[a].push(b), Pw || (Pw = !0, Kw(function(e) {
                    var f = e.get("trackingId");
                    if (Ow[f]) {
                        if (Qw[f]) {
                            Qw[f] = !1;
                            var g = z[tp()];
                            pa(g) && g("ga.require", "_" + S.C)
                        }
                        Nw || (Nw = e);
                        Mw[f] = e;
                        for (var k = Ow[f], m; void 0 !== (m = k.shift());) m(e);
                        Ow[f] = void 0
                    }
                })))
            }
        },
        Sw = function(a, b, c, d) {
            var e = z[tp()];
            if ("data" === b.hitType && c) {
                var f = z.gaData,
                    g = Number(f && f[d] && f[d].first_hit),
                    k = Fa();
                !isNaN(g) && k > g && (b.queueTime = Math.min(2E3, k + 100 - g))
            }
            try {
                var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
                e(m, b)
            } catch (n) {}
        },
        Mw = {},
        Ow = {},
        Qw = {},
        Nw, Pw = !1,
        Tw, Uw = function(a, b, c) {
            Rw(a, function(d) {
                F(function() {
                    Sw(d, b, c, a)
                })
            })
        },
        Vw = function() {
            var a = !1;
            Kw(function() {
                if (!a) {
                    var b = z[tp()];
                    pa(b) && (b("ga.require", "__" + S.C), a = !0)
                }
            }, !0)
        },
        Ww = function(a, b, c) {
            var d = Jw(),
                e = d[a] = d[a] || {};
            (e.pending_experiments = e.pending_experiments || {})[b] = c;
            e.experiments = e.experiments || {};
            e.experiments[b] = c
        },
        Xw = function(a) {
            var b = Jw()[a];
            return b ? b.hitcount || 0 : 0
        },
        ix = function(a, b, c, d, e, f) {
            Hw(b, c);
            var g = d;
            if (d) {
                var k = vf(z.location, "host");
                vf(yf(d), "host") === k && (d = "")
            }
            Kw(function(q) {
                q.set("referrer",
                    d ? d : void 0)
            }, !0);
            if (cx(a)) le.ga4_referrer_override = g, hx(a, b, c, e, f);
            else {
                Ww(a, b, c);
                for (var m = Lw(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
                if (0 < Xw(a)) {
                    var p = m[0];
                    p && Sw(p, {
                        hitType: "data"
                    }, !0, a)
                }
            }
        },
        cx = function(a) {
            return !!a && "G-" === a.substring(0, 2)
        },
        hx = function(a, b, c, d, e) {
            if (cx(a)) {
                var f = lq(a, "experiment_impression", {
                    experiment_id: b,
                    variant_id: c
                });
                oq(f, d, {
                    originatingEntity: e,
                    deferrable: !0
                })
            } else Ww(a, b, c), 0 < Xw(a) && Uw(a, {
                hitType: "data"
            }, !0)
        };

    var mx = function(a, b, c) {
            function d() {
                f || (f = !0, !0 !== jx && (jx = !1), kx(c), fr(e))
            }
            yr = a;
            var e = "GTM-P3B33MM_" + b,
                f = !1;
            gr(e);
            z.google_optimize = z.google_optimize || {};
            var g = z.google_optimize;
            g["GTM-P3B33MM"] = g["GTM-P3B33MM"] || {};
            g["GTM-P3B33MM"].optimize_dyn = function(m) {
                m.split(",").forEach(function(n) {
                    lx[n] = !0
                });
                jx = !0;
                d()
            };
            Hb(a, void 0, d);
            var k = z[ke.ca];
            z.setTimeout(function() {
                d()
            }, Number(k && k.hide && k.hide.timeout) || 1E4)
        },
        kx = function(a) {
            if (void 0 !== nx) {
                var b = nx - ox,
                    c, d;
                jx ? c = Fa() - nx : d = Fa() - nx;
                zr({
                    Bk: b,
                    Pj: c,
                    Nj: d
                })
            }
            lx.optimize_ready = !0;
            Jr({
                event: "opt.dyn"
            });
            Jr({
                event: "opt.js"
            });
            if (a && 0 < a.length) {
                var e = {};
                z[ke.ca].forEach(function(f) {
                    var g = f.event;
                    g && (e[g] = !0)
                });
                a.forEach(function(f) {
                    e[f] && Jr({
                        event: f
                    })
                })
            }
            F(function() {
                up("_" + S.C)
            })
        },
        px = function(a, b, c, d, e, f, g, k, m) {
            function n(w, y) {
                y && (t += "&" + w + "=" + encodeURIComponent(y))
            }
            ox = Fa();
            if (a || b || c) {
                var p = void 0;
                if (b) {
                    var q = Uk().aw;
                    q && (p = q[0])
                }
                if (f && (a || c || p)) {
                    var r = 1,
                        t, u = "GTM-P3B33MM_" + r++;
                    gr(u);
                    var v = function(w) {
                        Tw = w;
                        nx = Fa();
                        a || b ? (t = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=GTM-P3B33MM", a && n("cid", w), n("gclid",
                            p), g && (n("gtm_auth", ""), n("gtm_preview", "")), (g || a) && n("cb", String(Math.random())), mx(t, r++, e)) : kx(e);
                        fr(u)
                    };
                    cx(d) ? oq(jq("get", d, "client_id", v), k, {
                        originatingEntity: m,
                        deferrable: !0
                    }) : (Qw[d] = !0, Rw(d, function(w) {
                        return v(w.get("clientId"))
                    }))
                } else kx(e)
            }
        },
        lx = {},
        ox, nx, jx, yr;
    var qx = function(a, b) {
        this.Yd = a;
        this.Vc = b
    };
    qx.prototype.toString = function() {
        var a = "" + this.Yd;
        1 < this.Vc && (a = a + "-" + this.Vc);
        return a
    };
    var rx = function(a, b) {
        this.m = a;
        this.h = b
    };
    rx.prototype.toString = function() {
        return this.h + "." + this.m
    };
    var sx = function() {
            var a = Le("optimize.cookie_path", 2);
            return h(a) ? a : "/"
        },
        ux = function(a, b) {
            var c = new tx(a, b);
            c.Xj();
            return c
        },
        tx = function(a, b) {
            this.I = Math.floor(new Date / 864E5);
            this.B = a || "auto";
            this.h = b || sx();
            this.m = new qx(Wf(this.B), Xf(this.h));
            this.K = [];
            this.map = {}
        };
    aa = tx.prototype;
    aa.yj = function(a) {
        if (!a) return "";
        var b = this.kf(a);
        return b ? b.m : ""
    };
    aa.rk = function(a, b, c, d, e) {
        var f, g;
        f = void 0 === f ? 10 : f;
        g = void 0 === g ? 3E3 : g;
        if (!a) return !1;
        void 0 == b && (b = "");
        this.ke(a, new rx(b, c));
        this.Yi(e);
        return this.Ji(d,
            f, g)
    };
    aa.kf = function(a) {
        return this.map[a]
    };
    aa.wj = function() {
        for (var a = 0, b = 0; b < this.K.length; b++) "x" !== this.kf(this.K[b]).m[0] && a++;
        return a
    };
    aa.ke = function(a, b) {
        a && ("" === b.m ? this.Dh(a) : (this.map[a] || this.K.push(a), this.map[a] = b))
    };
    aa.wk = function(a) {
        for (var b = 0; b < a.length; b++) this.ke(a[b][0], a[b][1])
    };
    aa.Dh = function(a) {
        var b = this.K.indexOf(a);
        0 <= b && this.K.splice(b, 1);
        delete this.map[a]
    };
    aa.hk = function() {
        for (var a = [], b = 0; b < this.K.length; b++) {
            var c = this.K[b];
            this.map[c].h < this.I && a.push(c)
        }
        for (var d =
                0; d < a.length; d++) this.Dh(a[d])
    };
    aa.vj = function() {
        for (var a = [], b = 0; b < this.K.length; b++) {
            var c = this.K[b];
            a.push([c, this.map[c]])
        }
        return a
    };
    aa.nj = function() {
        for (var a = 0, b = 0; b < this.K.length; b++) a = Math.max(a, this.map[this.K[b]].h);
        return 864E5 * a
    };
    aa.toString = function() {
        if (0 == this.K.length) return "";
        for (var a = [], b = 0; b < this.K.length; b++) {
            var c = this.K[b];
            a.push(c + "." + this.map[c].toString())
        }
        return "GAX1." + this.m.toString() + "." + a.join("!")
    };
    aa.Ji = function(a, b, c) {
        var d = new Date;
        this.hk();
        var e = this.wj();
        if (e >
            b || e > (a || 10) && Hf().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
        d.setTime(this.nj());
        if ("auto" != this.B) return this.m = new qx(Wf(this.B), Xf(this.h)), 0 === Rf("_gaexp", this.toString(), {
            path: this.h,
            domain: this.B,
            expires: d
        });
        for (var f = Of(), g = 0; g < f.length; g++)
            if (this.m = new qx(Wf(f[g]), Xf(this.h)), 0 === Rf("_gaexp", this.toString(), {
                    path: this.h,
                    domain: f[g],
                    expires: d
                })) return !0;
        return !1
    };
    aa.Xj = function() {
        var a = Lf("_gaexp", this.m.Yd, this.m.Vc);
        if (a) {
            var b = this.Yj(a);
            b &&
                this.wk(b.vj())
        }
    };
    aa.Yj = function(a) {
        for (var b = new tx(this.B, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
            var e = c[d].split(".");
            if (3 == e.length) {
                if (isNaN(Number(e[1]))) return;
                b.ke(e[0], new rx(e[2], Number(e[1])))
            }
        }
        return b
    };
    aa.Yi = function(a) {
        a = a || {};
        var b = 0;
        a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.I - Aa(a[""]));
        for (var c = 0; c < this.K.length; c++) {
            var d = this.K[c];
            if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
                var e = this.kf(d);
                e.h = Aa(a[d]) + b;
                this.ke(d, e)
            }
        }
    };
    var zx = function() {
            vx = Fa();
            var a = wx;
            wx = [];
            for (var b = 0; b < a.length; b++) a[b]();
            xx && (xx.takeRecords(), wx.length || (xx && (xx.disconnect(), xx = null), yx && (z.clearTimeout(yx), yx = null)))
        },
        Bx = function() {
            var a = Fa() - vx;
            a >= Ax ? (yx && (z.clearTimeout(yx), yx = null), zx()) : yx || (yx = z.setTimeout(function() {
                zx();
                yx = null
            }, Ax - a))
        },
        Cx = function(a) {
            if (!z.MutationObserver) return !1;
            try {
                return xx || (xx = new MutationObserver(Bx), xx.observe(D.documentElement, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    characterData: !0
                }), vx = Fa()), wx.push(a), !0
            } catch (b) {
                return !1
            }
        },
        xx = null,
        wx = [],
        Ax = 0,
        vx = 0,
        yx = null;
    var Dx = function(a, b) {
            b && Cx(a) || z.setTimeout(a, 80)
        },
        Ex = function(a) {
            try {
                return wd(a)
            } catch (b) {
                return null
            }
        },
        Fx = function(a) {
            if ($o) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        },
        Gx = function(a, b) {
            for (var c = Ex(a.fa) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.Aa && !Fx(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        Hx = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        Ix = function(a, b) {
            a.gtmProgressiveApplied ||
                (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        Jx = function(a, b, c) {
            var d;
            var e = [];
            if (b.Ja)
                if (b.Ja.cf) d = [{
                    element: D.head
                }];
                else {
                    var f = Gx(b.Ja, b.id),
                        g = null;
                    b.me && (g = Gx(b.me, b.id + "-t"));
                    for (var k = 0; k < f.length; k++) {
                        var m = f[k],
                            n = void 0;
                        if (null != g && (n = g.length > k ? g[k] : null, !n && !$o && (null === b.me.da || b.gh + e.length < b.me.da))) break;
                        e.push({
                            element: m,
                            targetElement: n
                        })
                    }
                    d = e
                }
            else d = e;
            var p = d;
            if (!$o && b.Vi && (!a || null == b.Ja.da || b.Ja.da != b.Wd + p.length)) return !1;
            for (var q = 0; q < p.length; q++) {
                var r = p[q].element,
                    t = p[q].targetElement,
                    u = void 0;
                b.Wd++;
                Ix(r, b.id);
                t && (b.gh++, u = b.id + "-t", Ix(t, u));
                var v = b.Zi(r, t);
                pa(v) && b.Yb.push(v);
                b.Yb.push(Hx(r, b.id));
                t && u && b.Yb.push(Hx(t, u))
            }
            if (b.Ja.da && b.Ja.da == b.Wd || $o && (!c || b.Wd)) b.finished = !0;
            return !0
        },
        Kx = function(a) {
            for (var b = {}, c = 0; c < a.Ia.length; c++) {
                var d = a.Ia[c];
                if (!d.Ja.cf) {
                    var e = b[d.Ja.fa];
                    e || (e = b[d.Ja.fa] = Ex(d.Ja.fa) || []);
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.gtmProgressiveApplied && g.gtmProgressiveApplied[d.id] || (Ix(g, d.id), d.Yb.push(Hx(g, d.id)))
                    }
                }
            }
        },
        Lx = function(a) {
            if (!a.Ff) {
                for (var b =
                        a.Mc; b < a.Ia.length; b++) {
                    var c = a.Ia[b],
                        d = b == a.Mc;
                    if (!c.finished && !Jx(d, c, a.Rh && a.Lh)) break;
                    c.finished && d && a.Mc++
                }
                a.Ia.length > a.Mc ? (!a.pending && a.Rh && (a.pending = !0, Dx(function() {
                    a.pending = !1;
                    Lx(a)
                }, a.Lh)), $o || a.zf || (a.zf = function() {
                    F(function() {
                        Lx(a)
                    })
                }, Lb(D, "DOMContentLoaded", a.zf))) : Kx(a)
            }
        },
        Mx = {},
        Nx = {},
        Ox = void 0,
        Px = function(a, b, c, d) {
            var e = Ox;
            if (!vd || !e) return !1;
            var f = {
                id: e.id + ":" + e.Ia.length,
                Zi: b,
                Yb: [],
                Vi: c,
                Ja: a,
                Wd: 0,
                me: d || null,
                gh: 0,
                finished: !1
            };
            e.Ia.push(f);
            null === a ? (f.finished = !0, b(null)) : Lx(e);
            return !0
        },
        Qx = function(a) {
            var b = oa;
            try {
                b = Vs(a, "visibility", "hidden", !0)
            } catch (c) {}
            return function() {
                pa(b) && b.apply();
                b = null
            }
        },
        Rx = function(a, b, c, d) {
            var e = b;
            if (!$o && !a.cf) {
                var f = Qx(a.fa);
                bp.push(f);
                e = function(g, k) {
                    var m = b(g, k);
                    f();
                    return m
                }
            }
            return Px(a, e, c, d)
        };
    var Y = {
        o: {}
    };
    Y.o.dee = ["google"],
        function() {
            (function(a) {
                Y.__dee = a;
                Y.__dee.s = "dee";
                Y.__dee.isVendorTemplate = !0;
                Y.__dee.priorityOverride = 0;
                Y.__dee.isInfrastructure = !1
            })(function() {
                var a = !1;
                return a ? "gtm.sync" : "gtm.js"
            })
        }();
    Y.o.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.s = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0;
                Y.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();


    Y.o.asprv = ["google"],
        function() {
            function a() {
                Bs({
                    event: "optimize.domChange"
                });
                Cx(a)
            }(function(b) {
                Y.__asprv = b;
                Y.__asprv.s = "asprv";
                Y.__asprv.isVendorTemplate = !0;
                Y.__asprv.priorityOverride = 0;
                Y.__asprv.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_globalName,
                    d = !!b.vtp_listenForMutations,
                    e = As("eventModel");
                c && Ew(c);
                d && a();
                var f, g, k;
                e && (f = e.name || "", g = e.callback, k = e.remove);
                if (g && pa(g))
                    if (f = String(f), !0 !== k) {
                        var m = f,
                            n = g;
                        Fw(m).push(n);
                        if ("" !== m) void 0 !== Dw[m] && Gw(n, m, Dw[m]);
                        else
                            for (var p in Dw) void 0 !==
                                Dw[p] && Gw(n, p, Dw[p])
                    } else {
                        var q = g,
                            r = Fw(f),
                            t = r.indexOf(q);
                        0 <= t && r.splice(t, 1)
                    }
                b.vtp_gtmOnSuccess()
            })
        }();















    var Tx = {};
    Tx.dataLayer = Me;
    Tx.callback = function(a) {
        Ce.hasOwnProperty(a) && pa(Ce[a]) && Ce[a]();
        delete Ce[a]
    };
    Tx.bootstrap = 0;
    Tx._spx = !1;

    function Ux() {
        le[S.C] = le[S.C] || Tx;
        S.eb && (le["ctid_" + S.eb] = Tx);
        ei();
        gi() || l(hi(), function(a, b) {
            Lo(a, b.transportUrl, b.context);
            J(92)
        });
        Ia(De, Y.o);
        Gc = Pc
    }
    (function(a) {
        function b() {
            m = D.documentElement.getAttribute("data-tag-assistant-present");
            Tr(m) && (k = g.Di)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (D.referrer) {
                var d = yf(D.referrer);
                c = "cct.google" === vf(d, "host")
            }
            if (!c) {
                var e = If("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Hb("https://cct.google/taggy/agent.js"))
        }
        if (xe) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    re ? (v = "OGT", w = "GTAG") : xe && (w = v = "OPT");
                    var y = z["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        z["google.tagmanager.debugui2.queue"] = y, Hb("https://" + ke.jd + "/debug/bootstrap?id=" + S.C + "&src=" + w + "&cond=" + u + "&gtm=" + ji()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Bb,
                            containerProduct: v,
                            debug: !1,
                            id: S.C,
                            isGte: qe
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    ke.Uh && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Gk: 1,
                    Ei: 2,
                    Qi: 3,
                    Wh: 4,
                    Di: 5
                },
                k = void 0,
                m = void 0,
                n = wf(z.location, "query", !1, void 0, "gtm_debug");
            Tr(n) && (k = g.Ei);
            if (!k && D.referrer) {
                var p = yf(D.referrer);
                "tagassistant.google.com" === vf(p, "host") && (k = g.Qi)
            }
            if (!k) {
                var q =
                    If("__TAG_ASSISTANT");
                q.length && q[0].length && (k = g.Wh)
            }
            k || b();
            if (!k && Ur(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        k && Bb ? f(k) : a()
                    },
                    t = !1;
                Lb(D, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else k && Bb ? f(k) : a()
        }
    })(function() {
        var a = !1;
        a && ho("INIT");
        if (Q(70)) {
            var b =
                Cn(xn.D.qe, S.C);
            Dn(b)
        }
        Te().m();
        Ui();
        if (S.eb ? le["ctid_" + S.eb] : le[S.C]) {
            var c = le.zones;
            c && c.unregisterChild(ai());
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) wc.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) zc.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) yc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], t = {}, u = 0; u < r.length; u++) t[r[u][0]] = Array.prototype.slice.call(r[u], 1);
                xc.push(t)
            }
            Bc = Y;
            Cc = gt;
            Ux();
            Sr();
            $o = !1;
            ap = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) cp();
            else {
                Lb(D, "DOMContentLoaded", cp);
                Lb(D, "readystatechange", cp);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !z.frameElement
                    } catch (H) {}
                    v && dp()
                }
                Lb(z, "load", cp)
            }
            hr = !1;
            "complete" === D.readyState ? jr() : Lb(z, "load", jr);
            fj && z.setInterval(kj, 864E5);
            Jr({
                event: "gtm.js"
            });
            Ya("HEALTH", 1);
            Be = Fa();
            Tx.bootstrap = Be;
            if (a) {
                var B = io("INIT");
            }
            if (Q(70)) {
                var A = Cn(xn.D.Nf, S.C);
                if (Dn(A)) {
                    var C = Cn(xn.D.qe, S.C);
                    En(A, C)
                }
            }
        }
    });

})()