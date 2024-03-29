(function(b) {
    b.fn.jflickrfeed = function(c, e) {
        c = b.extend(!0, {
            flickrbase: "//api.flickr.com/services/feeds/",
            feedapi: "photos_public.gne",
            limit: 20,
            qstrings: {
                lang: "en-us",
                format: "json",
                jsoncallback: "?"
            },
            cleanDescription: !0,
            useTemplate: !0,
            itemTemplate: "",
            itemCallback: function() {}
        }, c);
        var d = c.flickrbase + c.feedapi + "?",
            f = !0,
            g;
        for (g in c.qstrings) f || (d += "&"), d += g + "=" + c.qstrings[g], f = !1;
        return b(this).each(function() {
            var g = b(this),
                f = this;
            b.getJSON(d, function(d) {
                b.each(d.items, function(d, a) {
                    if (d < c.limit) {
                        if (c.cleanDescription) {
                            var b = /<p>(.*?)<\/p>/g,
                                e = a.description;
                            b.test(e) && (a.description = e.match(b)[2], void 0 != a.description && (a.description = a.description.replace("<p>", "").replace("</p>", "")))
                        }
                        a.image_s = a.media.m.replace("_m", "_s");
                        a.image_t = a.media.m.replace("_m", "_t");
                        a.image_m = a.media.m.replace("_m", "_m");
                        a.image = a.media.m.replace("_m", "");
                        a.image_b = a.media.m.replace("_m", "_b");
                        delete a.media;
                        if (c.useTemplate) {
                            var b = c.itemTemplate,
                                h;
                            for (h in a) b = b.replace(RegExp("{{" + h + "}}", "g"), a[h]);
                            g.append(b)
                        }
                        c.itemCallback.call(f, a)
                    }
                });
                b.isFunction(e) && e.call(f, d)
            })
        })
    }
})(jQuery);