(function(a) {
    var d = a.event,
        b, c;
    b = d.special.debouncedresize = {
        setup: function() {
            a(this).on("resize", b.handler)
        },
        teardown: function() {
            a(this).off("resize", b.handler)
        },
        handler: function(a, f) {
            var g = this,
                h = arguments,
                e = function() {
                    a.type = "debouncedresize";
                    d.dispatch.apply(g, h)
                };
            c && clearTimeout(c);
            f ? e() : c = setTimeout(e, b.threshold)
        },
        threshold: 150
    }
})(jQuery);