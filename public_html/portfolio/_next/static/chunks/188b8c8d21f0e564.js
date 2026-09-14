(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 207670, 647163, e => {
    "use strict";

    function t() {
        for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)(e = arguments[r]) && (t = function e(t) {
            var r, o, n = "";
            if ("string" == typeof t || "number" == typeof t) n += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var a = t.length;
                    for (r = 0; r < a; r++) t[r] && (o = e(t[r])) && (n && (n += " "), n += o)
                } else
                    for (o in t) t[o] && (n && (n += " "), n += o);
            return n
        }(e)) && (o && (o += " "), o += t);
        return o
    }
    e.s(["clsx", () => t], 207670);
    let r = (e = new Map, t = null, r) => ({
            nextPart: e,
            validators: t,
            classGroupId: r
        }),
        o = [],
        n = (e, t, r) => {
            if (0 == e.length - t) return r.classGroupId;
            let o = e[t],
                a = r.nextPart.get(o);
            if (a) {
                let r = n(e, t + 1, a);
                if (r) return r
            }
            let l = r.validators;
            if (null === l) return;
            let i = 0 === t ? e.join("-") : e.slice(t).join("-"),
                s = l.length;
            for (let e = 0; e < s; e++) {
                let t = l[e];
                if (t.validator(i)) return t.classGroupId
            }
        },
        a = (e, t) => {
            let o = r();
            for (let r in e) l(e[r], o, r, t);
            return o
        },
        l = (e, t, r, o) => {
            let n = e.length;
            for (let a = 0; a < n; a++) i(e[a], t, r, o)
        },
        i = (e, t, r, o) => {
            "string" == typeof e ? s(e, t, r) : "function" == typeof e ? c(e, t, r, o) : d(e, t, r, o)
        },
        s = (e, t, r) => {
            ("" === e ? t : u(t, e)).classGroupId = r
        },
        c = (e, t, r, o) => {
            f(e) ? l(e(o), t, r, o) : (null === t.validators && (t.validators = []), t.validators.push({
                classGroupId: r,
                validator: e
            }))
        },
        d = (e, t, r, o) => {
            let n = Object.entries(e),
                a = n.length;
            for (let e = 0; e < a; e++) {
                let [a, i] = n[e];
                l(i, u(t, a), r, o)
            }
        },
        u = (e, t) => {
            let o = e,
                n = t.split("-"),
                a = n.length;
            for (let e = 0; e < a; e++) {
                let t = n[e],
                    a = o.nextPart.get(t);
                a || (a = r(), o.nextPart.set(t, a)), o = a
            }
            return o
        },
        f = e => "isThemeGetter" in e && !0 === e.isThemeGetter,
        p = [],
        m = (e, t, r, o, n) => ({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: r,
            maybePostfixModifierPosition: o,
            isExternal: n
        }),
        g = /\s+/,
        b = e => {
            let t;
            if ("string" == typeof e) return e;
            let r = "";
            for (let o = 0; o < e.length; o++) e[o] && (t = b(e[o])) && (r && (r += " "), r += t);
            return r
        },
        h = [],
        y = e => {
            let t = t => t[e] || h;
            return t.isThemeGetter = !0, t
        },
        v = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        x = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        w = /^\d+\/\d+$/,
        k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        j = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        _ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        P = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        z = e => w.test(e),
        E = e => !!e && !Number.isNaN(Number(e)),
        C = e => !!e && Number.isInteger(Number(e)),
        S = e => e.endsWith("%") && E(e.slice(0, -1)),
        N = e => k.test(e),
        R = () => !0,
        M = e => j.test(e) && !_.test(e),
        I = () => !1,
        $ = e => O.test(e),
        T = e => P.test(e),
        A = e => !L(e) && !q(e),
        D = e => Y(e, er, I),
        L = e => v.test(e),
        U = e => Y(e, eo, M),
        F = e => Y(e, en, E),
        B = e => Y(e, ee, I),
        G = e => Y(e, et, T),
        W = e => Y(e, el, $),
        q = e => x.test(e),
        V = e => Z(e, eo),
        K = e => Z(e, ea),
        X = e => Z(e, ee),
        H = e => Z(e, er),
        Q = e => Z(e, et),
        J = e => Z(e, el, !0),
        Y = (e, t, r) => {
            let o = v.exec(e);
            return !!o && (o[1] ? t(o[1]) : r(o[2]))
        },
        Z = (e, t, r = !1) => {
            let o = x.exec(e);
            return !!o && (o[1] ? t(o[1]) : r)
        },
        ee = e => "position" === e || "percentage" === e,
        et = e => "image" === e || "url" === e,
        er = e => "length" === e || "size" === e || "bg-size" === e,
        eo = e => "length" === e,
        en = e => "number" === e,
        ea = e => "family-name" === e,
        el = e => "shadow" === e,
        ei = ((e, ...t) => {
            let r, l, i, s, c = e => {
                let t = l(e);
                if (t) return t;
                let o = ((e, t) => {
                    let {
                        parseClassName: r,
                        getClassGroupId: o,
                        getConflictingClassGroupIds: n,
                        sortModifiers: a
                    } = t, l = [], i = e.trim().split(g), s = "";
                    for (let e = i.length - 1; e >= 0; e -= 1) {
                        let t = i[e],
                            {
                                isExternal: c,
                                modifiers: d,
                                hasImportantModifier: u,
                                baseClassName: f,
                                maybePostfixModifierPosition: p
                            } = r(t);
                        if (c) {
                            s = t + (s.length > 0 ? " " + s : s);
                            continue
                        }
                        let m = !!p,
                            g = o(m ? f.substring(0, p) : f);
                        if (!g) {
                            if (!m || !(g = o(f))) {
                                s = t + (s.length > 0 ? " " + s : s);
                                continue
                            }
                            m = !1
                        }
                        let b = 0 === d.length ? "" : 1 === d.length ? d[0] : a(d).join(":"),
                            h = u ? b + "!" : b,
                            y = h + g;
                        if (l.indexOf(y) > -1) continue;
                        l.push(y);
                        let v = n(g, m);
                        for (let e = 0; e < v.length; ++e) {
                            let t = v[e];
                            l.push(h + t)
                        }
                        s = t + (s.length > 0 ? " " + s : s)
                    }
                    return s
                })(e, r);
                return i(e, o), o
            };
            return s = d => {
                var u;
                let f;
                return l = (r = {
                    cache: (e => {
                        if (e < 1) return {
                            get: () => void 0,
                            set: () => {}
                        };
                        let t = 0,
                            r = Object.create(null),
                            o = Object.create(null),
                            n = (n, a) => {
                                r[n] = a, ++t > e && (t = 0, o = r, r = Object.create(null))
                            };
                        return {
                            get(e) {
                                let t = r[e];
                                return void 0 !== t ? t : void 0 !== (t = o[e]) ? (n(e, t), t) : void 0
                            },
                            set(e, t) {
                                e in r ? r[e] = t : n(e, t)
                            }
                        }
                    })((u = t.reduce((e, t) => t(e), e())).cacheSize),
                    parseClassName: (e => {
                        let {
                            prefix: t,
                            experimentalParseClassName: r
                        } = e, o = e => {
                            let t, r = [],
                                o = 0,
                                n = 0,
                                a = 0,
                                l = e.length;
                            for (let i = 0; i < l; i++) {
                                let l = e[i];
                                if (0 === o && 0 === n) {
                                    if (":" === l) {
                                        r.push(e.slice(a, i)), a = i + 1;
                                        continue
                                    }
                                    if ("/" === l) {
                                        t = i;
                                        continue
                                    }
                                }
                                "[" === l ? o++ : "]" === l ? o-- : "(" === l ? n++ : ")" === l && n--
                            }
                            let i = 0 === r.length ? e : e.slice(a),
                                s = i,
                                c = !1;
                            return i.endsWith("!") ? (s = i.slice(0, -1), c = !0) : i.startsWith("!") && (s = i.slice(1), c = !0), m(r, c, s, t && t > a ? t - a : void 0)
                        };
                        if (t) {
                            let e = t + ":",
                                r = o;
                            o = t => t.startsWith(e) ? r(t.slice(e.length)) : m(p, !1, t, void 0, !0)
                        }
                        if (r) {
                            let e = o;
                            o = t => r({
                                className: t,
                                parseClassName: e
                            })
                        }
                        return o
                    })(u),
                    sortModifiers: (f = new Map, u.orderSensitiveModifiers.forEach((e, t) => {
                        f.set(e, 1e6 + t)
                    }), e => {
                        let t = [],
                            r = [];
                        for (let o = 0; o < e.length; o++) {
                            let n = e[o],
                                a = "[" === n[0],
                                l = f.has(n);
                            a || l ? (r.length > 0 && (r.sort(), t.push(...r), r = []), t.push(n)) : r.push(n)
                        }
                        return r.length > 0 && (r.sort(), t.push(...r)), t
                    }),
                    ...(e => {
                        let t = (e => {
                                let {
                                    theme: t,
                                    classGroups: r
                                } = e;
                                return a(r, t)
                            })(e),
                            {
                                conflictingClassGroups: r,
                                conflictingClassGroupModifiers: l
                            } = e;
                        return {
                            getClassGroupId: e => {
                                if (e.startsWith("[") && e.endsWith("]")) {
                                    var r;
                                    let t, o, n;
                                    return -1 === (r = e).slice(1, -1).indexOf(":") ? void 0 : (o = (t = r.slice(1, -1)).indexOf(":"), (n = t.slice(0, o)) ? "arbitrary.." + n : void 0)
                                }
                                let o = e.split("-"),
                                    a = +("" === o[0] && o.length > 1);
                                return n(o, a, t)
                            },
                            getConflictingClassGroupIds: (e, t) => {
                                if (t) {
                                    let t = l[e],
                                        n = r[e];
                                    if (t) {
                                        if (n) {
                                            let e = Array(n.length + t.length);
                                            for (let t = 0; t < n.length; t++) e[t] = n[t];
                                            for (let r = 0; r < t.length; r++) e[n.length + r] = t[r];
                                            return e
                                        }
                                        return t
                                    }
                                    return n || o
                                }
                                return r[e] || o
                            }
                        }
                    })(u)
                }).cache.get, i = r.cache.set, s = c, c(d)
            }, (...e) => s(((...e) => {
                let t, r, o = 0,
                    n = "";
                for (; o < e.length;)(t = e[o++]) && (r = b(t)) && (n && (n += " "), n += r);
                return n
            })(...e))
        })(() => {
            let e = y("color"),
                t = y("font"),
                r = y("text"),
                o = y("font-weight"),
                n = y("tracking"),
                a = y("leading"),
                l = y("breakpoint"),
                i = y("container"),
                s = y("spacing"),
                c = y("radius"),
                d = y("shadow"),
                u = y("inset-shadow"),
                f = y("text-shadow"),
                p = y("drop-shadow"),
                m = y("blur"),
                g = y("perspective"),
                b = y("aspect"),
                h = y("ease"),
                v = y("animate"),
                x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                w = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
                k = () => [...w(), q, L],
                j = () => ["auto", "hidden", "clip", "visible", "scroll"],
                _ = () => ["auto", "contain", "none"],
                O = () => [q, L, s],
                P = () => [z, "full", "auto", ...O()],
                M = () => [C, "none", "subgrid", q, L],
                I = () => ["auto", {
                    span: ["full", C, q, L]
                }, C, q, L],
                $ = () => [C, "auto", q, L],
                T = () => ["auto", "min", "max", "fr", q, L],
                Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
                Z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
                ee = () => ["auto", ...O()],
                et = () => [z, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()],
                er = () => [e, q, L],
                eo = () => [...w(), X, B, {
                    position: [q, L]
                }],
                en = () => ["no-repeat", {
                    repeat: ["", "x", "y", "space", "round"]
                }],
                ea = () => ["auto", "cover", "contain", H, D, {
                    size: [q, L]
                }],
                el = () => [S, V, U],
                ei = () => ["", "none", "full", c, q, L],
                es = () => ["", E, V, U],
                ec = () => ["solid", "dashed", "dotted", "double"],
                ed = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                eu = () => [E, S, X, B],
                ef = () => ["", "none", m, q, L],
                ep = () => ["none", E, q, L],
                em = () => ["none", E, q, L],
                eg = () => [E, q, L],
                eb = () => [z, "full", ...O()];
            return {
                cacheSize: 500,
                theme: {
                    animate: ["spin", "ping", "pulse", "bounce"],
                    aspect: ["video"],
                    blur: [N],
                    breakpoint: [N],
                    color: [R],
                    container: [N],
                    "drop-shadow": [N],
                    ease: ["in", "out", "in-out"],
                    font: [A],
                    "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                    "inset-shadow": [N],
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                    perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                    radius: [N],
                    shadow: [N],
                    spacing: ["px", E],
                    text: [N],
                    "text-shadow": [N],
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", z, L, q, b]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [E, L, q, i]
                    }],
                    "break-after": [{
                        "break-after": x()
                    }],
                    "break-before": [{
                        "break-before": x()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    sr: ["sr-only", "not-sr-only"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: k()
                    }],
                    overflow: [{
                        overflow: j()
                    }],
                    "overflow-x": [{
                        "overflow-x": j()
                    }],
                    "overflow-y": [{
                        "overflow-y": j()
                    }],
                    overscroll: [{
                        overscroll: _()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": _()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": _()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: P()
                    }],
                    "inset-x": [{
                        "inset-x": P()
                    }],
                    "inset-y": [{
                        "inset-y": P()
                    }],
                    start: [{
                        start: P()
                    }],
                    end: [{
                        end: P()
                    }],
                    top: [{
                        top: P()
                    }],
                    right: [{
                        right: P()
                    }],
                    bottom: [{
                        bottom: P()
                    }],
                    left: [{
                        left: P()
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: [C, "auto", q, L]
                    }],
                    basis: [{
                        basis: [z, "full", "auto", i, ...O()]
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["nowrap", "wrap", "wrap-reverse"]
                    }],
                    flex: [{
                        flex: [E, z, "auto", "initial", "none", L]
                    }],
                    grow: [{
                        grow: ["", E, q, L]
                    }],
                    shrink: [{
                        shrink: ["", E, q, L]
                    }],
                    order: [{
                        order: [C, "first", "last", "none", q, L]
                    }],
                    "grid-cols": [{
                        "grid-cols": M()
                    }],
                    "col-start-end": [{
                        col: I()
                    }],
                    "col-start": [{
                        "col-start": $()
                    }],
                    "col-end": [{
                        "col-end": $()
                    }],
                    "grid-rows": [{
                        "grid-rows": M()
                    }],
                    "row-start-end": [{
                        row: I()
                    }],
                    "row-start": [{
                        "row-start": $()
                    }],
                    "row-end": [{
                        "row-end": $()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": T()
                    }],
                    "auto-rows": [{
                        "auto-rows": T()
                    }],
                    gap: [{
                        gap: O()
                    }],
                    "gap-x": [{
                        "gap-x": O()
                    }],
                    "gap-y": [{
                        "gap-y": O()
                    }],
                    "justify-content": [{
                        justify: [...Y(), "normal"]
                    }],
                    "justify-items": [{
                        "justify-items": [...Z(), "normal"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", ...Z()]
                    }],
                    "align-content": [{
                        content: ["normal", ...Y()]
                    }],
                    "align-items": [{
                        items: [...Z(), {
                            baseline: ["", "last"]
                        }]
                    }],
                    "align-self": [{
                        self: ["auto", ...Z(), {
                            baseline: ["", "last"]
                        }]
                    }],
                    "place-content": [{
                        "place-content": Y()
                    }],
                    "place-items": [{
                        "place-items": [...Z(), "baseline"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", ...Z()]
                    }],
                    p: [{
                        p: O()
                    }],
                    px: [{
                        px: O()
                    }],
                    py: [{
                        py: O()
                    }],
                    ps: [{
                        ps: O()
                    }],
                    pe: [{
                        pe: O()
                    }],
                    pt: [{
                        pt: O()
                    }],
                    pr: [{
                        pr: O()
                    }],
                    pb: [{
                        pb: O()
                    }],
                    pl: [{
                        pl: O()
                    }],
                    m: [{
                        m: ee()
                    }],
                    mx: [{
                        mx: ee()
                    }],
                    my: [{
                        my: ee()
                    }],
                    ms: [{
                        ms: ee()
                    }],
                    me: [{
                        me: ee()
                    }],
                    mt: [{
                        mt: ee()
                    }],
                    mr: [{
                        mr: ee()
                    }],
                    mb: [{
                        mb: ee()
                    }],
                    ml: [{
                        ml: ee()
                    }],
                    "space-x": [{
                        "space-x": O()
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": O()
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    size: [{
                        size: et()
                    }],
                    w: [{
                        w: [i, "screen", ...et()]
                    }],
                    "min-w": [{
                        "min-w": [i, "screen", "none", ...et()]
                    }],
                    "max-w": [{
                        "max-w": [i, "screen", "none", "prose", {
                            screen: [l]
                        }, ...et()]
                    }],
                    h: [{
                        h: ["screen", "lh", ...et()]
                    }],
                    "min-h": [{
                        "min-h": ["screen", "lh", "none", ...et()]
                    }],
                    "max-h": [{
                        "max-h": ["screen", "lh", ...et()]
                    }],
                    "font-size": [{
                        text: ["base", r, V, U]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: [o, q, F]
                    }],
                    "font-stretch": [{
                        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", S, L]
                    }],
                    "font-family": [{
                        font: [K, L, t]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: [n, q, L]
                    }],
                    "line-clamp": [{
                        "line-clamp": [E, "none", q, F]
                    }],
                    leading: [{
                        leading: [a, ...O()]
                    }],
                    "list-image": [{
                        "list-image": ["none", q, L]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "list-style-type": [{
                        list: ["disc", "decimal", "none", q, L]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "placeholder-color": [{
                        placeholder: er()
                    }],
                    "text-color": [{
                        text: er()
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...ec(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: [E, "from-font", "auto", q, U]
                    }],
                    "text-decoration-color": [{
                        decoration: er()
                    }],
                    "underline-offset": [{
                        "underline-offset": [E, "auto", q, L]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: O()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, L]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    wrap: [{
                        wrap: ["break-word", "anywhere", "normal"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", q, L]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: eo()
                    }],
                    "bg-repeat": [{
                        bg: en()
                    }],
                    "bg-size": [{
                        bg: ea()
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            linear: [{
                                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, C, q, L],
                            radial: ["", q, L],
                            conic: [C, q, L]
                        }, Q, G]
                    }],
                    "bg-color": [{
                        bg: er()
                    }],
                    "gradient-from-pos": [{
                        from: el()
                    }],
                    "gradient-via-pos": [{
                        via: el()
                    }],
                    "gradient-to-pos": [{
                        to: el()
                    }],
                    "gradient-from": [{
                        from: er()
                    }],
                    "gradient-via": [{
                        via: er()
                    }],
                    "gradient-to": [{
                        to: er()
                    }],
                    rounded: [{
                        rounded: ei()
                    }],
                    "rounded-s": [{
                        "rounded-s": ei()
                    }],
                    "rounded-e": [{
                        "rounded-e": ei()
                    }],
                    "rounded-t": [{
                        "rounded-t": ei()
                    }],
                    "rounded-r": [{
                        "rounded-r": ei()
                    }],
                    "rounded-b": [{
                        "rounded-b": ei()
                    }],
                    "rounded-l": [{
                        "rounded-l": ei()
                    }],
                    "rounded-ss": [{
                        "rounded-ss": ei()
                    }],
                    "rounded-se": [{
                        "rounded-se": ei()
                    }],
                    "rounded-ee": [{
                        "rounded-ee": ei()
                    }],
                    "rounded-es": [{
                        "rounded-es": ei()
                    }],
                    "rounded-tl": [{
                        "rounded-tl": ei()
                    }],
                    "rounded-tr": [{
                        "rounded-tr": ei()
                    }],
                    "rounded-br": [{
                        "rounded-br": ei()
                    }],
                    "rounded-bl": [{
                        "rounded-bl": ei()
                    }],
                    "border-w": [{
                        border: es()
                    }],
                    "border-w-x": [{
                        "border-x": es()
                    }],
                    "border-w-y": [{
                        "border-y": es()
                    }],
                    "border-w-s": [{
                        "border-s": es()
                    }],
                    "border-w-e": [{
                        "border-e": es()
                    }],
                    "border-w-t": [{
                        "border-t": es()
                    }],
                    "border-w-r": [{
                        "border-r": es()
                    }],
                    "border-w-b": [{
                        "border-b": es()
                    }],
                    "border-w-l": [{
                        "border-l": es()
                    }],
                    "divide-x": [{
                        "divide-x": es()
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": es()
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "border-style": [{
                        border: [...ec(), "hidden", "none"]
                    }],
                    "divide-style": [{
                        divide: [...ec(), "hidden", "none"]
                    }],
                    "border-color": [{
                        border: er()
                    }],
                    "border-color-x": [{
                        "border-x": er()
                    }],
                    "border-color-y": [{
                        "border-y": er()
                    }],
                    "border-color-s": [{
                        "border-s": er()
                    }],
                    "border-color-e": [{
                        "border-e": er()
                    }],
                    "border-color-t": [{
                        "border-t": er()
                    }],
                    "border-color-r": [{
                        "border-r": er()
                    }],
                    "border-color-b": [{
                        "border-b": er()
                    }],
                    "border-color-l": [{
                        "border-l": er()
                    }],
                    "divide-color": [{
                        divide: er()
                    }],
                    "outline-style": [{
                        outline: [...ec(), "none", "hidden"]
                    }],
                    "outline-offset": [{
                        "outline-offset": [E, q, L]
                    }],
                    "outline-w": [{
                        outline: ["", E, V, U]
                    }],
                    "outline-color": [{
                        outline: er()
                    }],
                    shadow: [{
                        shadow: ["", "none", d, J, W]
                    }],
                    "shadow-color": [{
                        shadow: er()
                    }],
                    "inset-shadow": [{
                        "inset-shadow": ["none", u, J, W]
                    }],
                    "inset-shadow-color": [{
                        "inset-shadow": er()
                    }],
                    "ring-w": [{
                        ring: es()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: er()
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [E, U]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": er()
                    }],
                    "inset-ring-w": [{
                        "inset-ring": es()
                    }],
                    "inset-ring-color": [{
                        "inset-ring": er()
                    }],
                    "text-shadow": [{
                        "text-shadow": ["none", f, J, W]
                    }],
                    "text-shadow-color": [{
                        "text-shadow": er()
                    }],
                    opacity: [{
                        opacity: [E, q, L]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...ed(), "plus-darker", "plus-lighter"]
                    }],
                    "bg-blend": [{
                        "bg-blend": ed()
                    }],
                    "mask-clip": [{
                        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                    }, "mask-no-clip"],
                    "mask-composite": [{
                        mask: ["add", "subtract", "intersect", "exclude"]
                    }],
                    "mask-image-linear-pos": [{
                        "mask-linear": [E]
                    }],
                    "mask-image-linear-from-pos": [{
                        "mask-linear-from": eu()
                    }],
                    "mask-image-linear-to-pos": [{
                        "mask-linear-to": eu()
                    }],
                    "mask-image-linear-from-color": [{
                        "mask-linear-from": er()
                    }],
                    "mask-image-linear-to-color": [{
                        "mask-linear-to": er()
                    }],
                    "mask-image-t-from-pos": [{
                        "mask-t-from": eu()
                    }],
                    "mask-image-t-to-pos": [{
                        "mask-t-to": eu()
                    }],
                    "mask-image-t-from-color": [{
                        "mask-t-from": er()
                    }],
                    "mask-image-t-to-color": [{
                        "mask-t-to": er()
                    }],
                    "mask-image-r-from-pos": [{
                        "mask-r-from": eu()
                    }],
                    "mask-image-r-to-pos": [{
                        "mask-r-to": eu()
                    }],
                    "mask-image-r-from-color": [{
                        "mask-r-from": er()
                    }],
                    "mask-image-r-to-color": [{
                        "mask-r-to": er()
                    }],
                    "mask-image-b-from-pos": [{
                        "mask-b-from": eu()
                    }],
                    "mask-image-b-to-pos": [{
                        "mask-b-to": eu()
                    }],
                    "mask-image-b-from-color": [{
                        "mask-b-from": er()
                    }],
                    "mask-image-b-to-color": [{
                        "mask-b-to": er()
                    }],
                    "mask-image-l-from-pos": [{
                        "mask-l-from": eu()
                    }],
                    "mask-image-l-to-pos": [{
                        "mask-l-to": eu()
                    }],
                    "mask-image-l-from-color": [{
                        "mask-l-from": er()
                    }],
                    "mask-image-l-to-color": [{
                        "mask-l-to": er()
                    }],
                    "mask-image-x-from-pos": [{
                        "mask-x-from": eu()
                    }],
                    "mask-image-x-to-pos": [{
                        "mask-x-to": eu()
                    }],
                    "mask-image-x-from-color": [{
                        "mask-x-from": er()
                    }],
                    "mask-image-x-to-color": [{
                        "mask-x-to": er()
                    }],
                    "mask-image-y-from-pos": [{
                        "mask-y-from": eu()
                    }],
                    "mask-image-y-to-pos": [{
                        "mask-y-to": eu()
                    }],
                    "mask-image-y-from-color": [{
                        "mask-y-from": er()
                    }],
                    "mask-image-y-to-color": [{
                        "mask-y-to": er()
                    }],
                    "mask-image-radial": [{
                        "mask-radial": [q, L]
                    }],
                    "mask-image-radial-from-pos": [{
                        "mask-radial-from": eu()
                    }],
                    "mask-image-radial-to-pos": [{
                        "mask-radial-to": eu()
                    }],
                    "mask-image-radial-from-color": [{
                        "mask-radial-from": er()
                    }],
                    "mask-image-radial-to-color": [{
                        "mask-radial-to": er()
                    }],
                    "mask-image-radial-shape": [{
                        "mask-radial": ["circle", "ellipse"]
                    }],
                    "mask-image-radial-size": [{
                        "mask-radial": [{
                            closest: ["side", "corner"],
                            farthest: ["side", "corner"]
                        }]
                    }],
                    "mask-image-radial-pos": [{
                        "mask-radial-at": w()
                    }],
                    "mask-image-conic-pos": [{
                        "mask-conic": [E]
                    }],
                    "mask-image-conic-from-pos": [{
                        "mask-conic-from": eu()
                    }],
                    "mask-image-conic-to-pos": [{
                        "mask-conic-to": eu()
                    }],
                    "mask-image-conic-from-color": [{
                        "mask-conic-from": er()
                    }],
                    "mask-image-conic-to-color": [{
                        "mask-conic-to": er()
                    }],
                    "mask-mode": [{
                        mask: ["alpha", "luminance", "match"]
                    }],
                    "mask-origin": [{
                        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                    }],
                    "mask-position": [{
                        mask: eo()
                    }],
                    "mask-repeat": [{
                        mask: en()
                    }],
                    "mask-size": [{
                        mask: ea()
                    }],
                    "mask-type": [{
                        "mask-type": ["alpha", "luminance"]
                    }],
                    "mask-image": [{
                        mask: ["none", q, L]
                    }],
                    filter: [{
                        filter: ["", "none", q, L]
                    }],
                    blur: [{
                        blur: ef()
                    }],
                    brightness: [{
                        brightness: [E, q, L]
                    }],
                    contrast: [{
                        contrast: [E, q, L]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", p, J, W]
                    }],
                    "drop-shadow-color": [{
                        "drop-shadow": er()
                    }],
                    grayscale: [{
                        grayscale: ["", E, q, L]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [E, q, L]
                    }],
                    invert: [{
                        invert: ["", E, q, L]
                    }],
                    saturate: [{
                        saturate: [E, q, L]
                    }],
                    sepia: [{
                        sepia: ["", E, q, L]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none", q, L]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": ef()
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [E, q, L]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [E, q, L]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": ["", E, q, L]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [E, q, L]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": ["", E, q, L]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [E, q, L]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [E, q, L]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": ["", E, q, L]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": O()
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": O()
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": O()
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, L]
                    }],
                    "transition-behavior": [{
                        transition: ["normal", "discrete"]
                    }],
                    duration: [{
                        duration: [E, "initial", q, L]
                    }],
                    ease: [{
                        ease: ["linear", "initial", h, q, L]
                    }],
                    delay: [{
                        delay: [E, q, L]
                    }],
                    animate: [{
                        animate: ["none", v, q, L]
                    }],
                    backface: [{
                        backface: ["hidden", "visible"]
                    }],
                    perspective: [{
                        perspective: [g, q, L]
                    }],
                    "perspective-origin": [{
                        "perspective-origin": k()
                    }],
                    rotate: [{
                        rotate: ep()
                    }],
                    "rotate-x": [{
                        "rotate-x": ep()
                    }],
                    "rotate-y": [{
                        "rotate-y": ep()
                    }],
                    "rotate-z": [{
                        "rotate-z": ep()
                    }],
                    scale: [{
                        scale: em()
                    }],
                    "scale-x": [{
                        "scale-x": em()
                    }],
                    "scale-y": [{
                        "scale-y": em()
                    }],
                    "scale-z": [{
                        "scale-z": em()
                    }],
                    "scale-3d": ["scale-3d"],
                    skew: [{
                        skew: eg()
                    }],
                    "skew-x": [{
                        "skew-x": eg()
                    }],
                    "skew-y": [{
                        "skew-y": eg()
                    }],
                    transform: [{
                        transform: [q, L, "", "none", "gpu", "cpu"]
                    }],
                    "transform-origin": [{
                        origin: k()
                    }],
                    "transform-style": [{
                        transform: ["3d", "flat"]
                    }],
                    translate: [{
                        translate: eb()
                    }],
                    "translate-x": [{
                        "translate-x": eb()
                    }],
                    "translate-y": [{
                        "translate-y": eb()
                    }],
                    "translate-z": [{
                        "translate-z": eb()
                    }],
                    "translate-none": ["translate-none"],
                    accent: [{
                        accent: er()
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    "caret-color": [{
                        caret: er()
                    }],
                    "color-scheme": [{
                        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, L]
                    }],
                    "field-sizing": [{
                        "field-sizing": ["fixed", "content"]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["auto", "none"]
                    }],
                    resize: [{
                        resize: ["none", "", "y", "x"]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": O()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": O()
                    }],
                    "scroll-my": [{
                        "scroll-my": O()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": O()
                    }],
                    "scroll-me": [{
                        "scroll-me": O()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": O()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": O()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": O()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": O()
                    }],
                    "scroll-p": [{
                        "scroll-p": O()
                    }],
                    "scroll-px": [{
                        "scroll-px": O()
                    }],
                    "scroll-py": [{
                        "scroll-py": O()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": O()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": O()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": O()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": O()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": O()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": O()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", q, L]
                    }],
                    fill: [{
                        fill: ["none", ...er()]
                    }],
                    "stroke-w": [{
                        stroke: [E, V, U, F]
                    }],
                    stroke: [{
                        stroke: ["none", ...er()]
                    }],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    translate: ["translate-x", "translate-y", "translate-none"],
                    "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                },
                orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
            }
        });

    function es(...e) {
        return ei(t(e))
    }
    e.s(["cn", () => es], 647163)
}, 820783, e => {
    "use strict";
    var t = e.i(271645);

    function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }

    function o(...e) {
        return t => {
            let o = !1,
                n = e.map(e => {
                    let n = r(e, t);
                    return o || "function" != typeof n || (o = !0), n
                });
            if (o) return () => {
                for (let t = 0; t < n.length; t++) {
                    let o = n[t];
                    "function" == typeof o ? o() : r(e[t], null)
                }
            }
        }
    }

    function n(...e) {
        return t.useCallback(o(...e), e)
    }
    e.s(["composeRefs", () => o, "useComposedRefs", () => n])
}, 991918, e => {
    "use strict";
    var t = e.i(271645),
        r = e.i(820783),
        o = e.i(843476),
        n = Symbol.for("react.lazy"),
        a = t[" use ".trim().toString()];

    function l(e) {
        var t;
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === n && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t
    }

    function i(e) {
        var n;
        let i, s = (n = e, (i = t.forwardRef((e, o) => {
                let {
                    children: n,
                    ...i
                } = e;
                if (l(n) && "function" == typeof a && (n = a(n._payload)), t.isValidElement(n)) {
                    var s;
                    let e, a, l = (s = n, (a = (e = Object.getOwnPropertyDescriptor(s.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? s.ref : (a = (e = Object.getOwnPropertyDescriptor(s, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? s.props.ref : s.props.ref || s.ref),
                        c = function(e, t) {
                            let r = { ...t
                            };
                            for (let o in t) {
                                let n = e[o],
                                    a = t[o];
                                /^on[A-Z]/.test(o) ? n && a ? r[o] = (...e) => {
                                    let t = a(...e);
                                    return n(...e), t
                                } : n && (r[o] = n) : "style" === o ? r[o] = { ...n,
                                    ...a
                                } : "className" === o && (r[o] = [n, a].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...r
                            }
                        }(i, n.props);
                    return n.type !== t.Fragment && (c.ref = o ? (0, r.composeRefs)(o, l) : l), t.cloneElement(n, c)
                }
                return t.Children.count(n) > 1 ? t.Children.only(null) : null
            })).displayName = `${n}.SlotClone`, i),
            c = t.forwardRef((e, r) => {
                let {
                    children: n,
                    ...i
                } = e;
                l(n) && "function" == typeof a && (n = a(n._payload));
                let c = t.Children.toArray(n),
                    u = c.find(d);
                if (u) {
                    let e = u.props.children,
                        n = c.map(r => r !== u ? r : t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null);
                    return (0, o.jsx)(s, { ...i,
                        ref: r,
                        children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null
                    })
                }
                return (0, o.jsx)(s, { ...i,
                    ref: r,
                    children: n
                })
            });
        return c.displayName = `${e}.Slot`, c
    }
    var s = i("Slot"),
        c = Symbol("radix.slottable");

    function d(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
    }
    e.s(["Slot", () => s, "createSlot", () => i])
}, 167881, e => {
    "use strict";
    let t, r;
    var o = e.i(843476),
        n = e.i(991918),
        a = e.i(207670);
    let l = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
        i = a.clsx;
    var s = e.i(647163);
    let c = (t = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", r = {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }, e => {
        var o;
        if ((null == r ? void 0 : r.variants) == null) return i(t, null == e ? void 0 : e.class, null == e ? void 0 : e.className);
        let {
            variants: n,
            defaultVariants: a
        } = r, s = Object.keys(n).map(t => {
            let r = null == e ? void 0 : e[t],
                o = null == a ? void 0 : a[t];
            if (null === r) return null;
            let i = l(r) || l(o);
            return n[t][i]
        }), c = e && Object.entries(e).reduce((e, t) => {
            let [r, o] = t;
            return void 0 === o || (e[r] = o), e
        }, {});
        return i(t, s, null == r || null == (o = r.compoundVariants) ? void 0 : o.reduce((e, t) => {
            let {
                class: r,
                className: o,
                ...n
            } = t;
            return Object.entries(n).every(e => {
                let [t, r] = e;
                return Array.isArray(r) ? r.includes({ ...a,
                    ...c
                }[t]) : ({ ...a,
                    ...c
                })[t] === r
            }) ? [...e, r, o] : e
        }, []), null == e ? void 0 : e.class, null == e ? void 0 : e.className)
    });

    function d({
        className: e,
        variant: t,
        size: r,
        asChild: a = !1,
        ...l
    }) {
        let i = a ? n.Slot : "button";
        return (0, o.jsx)(i, {
            "data-slot": "button",
            className: (0, s.cn)(c({
                variant: t,
                size: r,
                className: e
            })),
            ...l
        })
    }
    e.s(["Button", () => d], 167881)
}, 998183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        assign: function() {
            return s
        },
        searchParamsToUrlQuery: function() {
            return a
        },
        urlQueryToSearchParams: function() {
            return i
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });

    function a(e) {
        let t = {};
        for (let [r, o] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = o : Array.isArray(e) ? e.push(o) : t[r] = [e, o]
        }
        return t
    }

    function l(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function i(e) {
        let t = new URLSearchParams;
        for (let [r, o] of Object.entries(e))
            if (Array.isArray(o))
                for (let e of o) t.append(r, l(e));
            else t.set(r, l(o));
        return t
    }

    function s(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, o] of r.entries()) e.append(t, o)
        }
        return e
    }
}, 195057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        formatUrl: function() {
            return i
        },
        formatWithValidation: function() {
            return c
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let a = e.r(190809)._(e.r(998183)),
        l = /https?|ftp|gopher|file/;

    function i(e) {
        let {
            auth: t,
            hostname: r
        } = e, o = e.protocol || "", n = e.pathname || "", i = e.hash || "", s = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), s && "object" == typeof s && (s = String(a.urlQueryToSearchParams(s)));
        let d = e.search || s && `?${s}` || "";
        return o && !o.endsWith(":") && (o += ":"), e.slashes || (!o || l.test(o)) && !1 !== c ? (c = "//" + (c || ""), n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""), i && "#" !== i[0] && (i = "#" + i), d && "?" !== d[0] && (d = "?" + d), n = n.replace(/[?#]/g, encodeURIComponent), d = d.replace("#", "%23"), `${o}${c}${n}${d}${i}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return i(e)
    }
}, 818581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let o = e.r(271645);

    function n(e, t) {
        let r = (0, o.useRef)(null),
            n = (0, o.useRef)(null);
        return (0, o.useCallback)(o => {
            if (null === o) {
                let e = r.current;
                e && (r.current = null, e());
                let t = n.current;
                t && (n.current = null, t())
            } else e && (r.current = a(e, o)), t && (n.current = a(t, o))
        }, [e, t])
    }

    function a(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 718967, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        DecodeError: function() {
            return h
        },
        MiddlewareNotFoundError: function() {
            return w
        },
        MissingStaticPage: function() {
            return x
        },
        NormalizeError: function() {
            return y
        },
        PageNotFoundError: function() {
            return v
        },
        SP: function() {
            return g
        },
        ST: function() {
            return b
        },
        WEB_VITALS: function() {
            return a
        },
        execOnce: function() {
            return l
        },
        getDisplayName: function() {
            return u
        },
        getLocationOrigin: function() {
            return c
        },
        getURL: function() {
            return d
        },
        isAbsoluteUrl: function() {
            return s
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return m
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return k
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function l(e) {
        let t, r = !1;
        return (...o) => (r || (r = !0, t = e(...o)), t)
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = e => i.test(e);

    function c() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function d() {
        let {
            href: e
        } = window.location, t = c();
        return e.substring(t.length)
    }

    function u(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function m(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await m(t.Component, t.ctx)
        } : {};
        let o = await e.getInitialProps(t);
        if (r && f(r)) return o;
        if (!o) throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return o
    }
    let g = "undefined" != typeof performance,
        b = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class h extends Error {}
    class y extends Error {}
    class v extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class x extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class w extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function k(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 573668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let o = e.r(718967),
        n = e.r(652817);

    function a(e) {
        if (!(0, o.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, o.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, n.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 284508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e => {}
}, 522016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return h
        },
        useLinkStatus: function() {
            return v
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let a = e.r(190809),
        l = e.r(843476),
        i = a._(e.r(271645)),
        s = e.r(195057),
        c = e.r(8372),
        d = e.r(818581),
        u = e.r(718967),
        f = e.r(405550);
    e.r(233525);
    let p = e.r(91949),
        m = e.r(573668),
        g = e.r(509396);

    function b(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e)
    }

    function h(t) {
        var r;
        let o, n, a, [s, h] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
            v = (0, i.useRef)(null),
            {
                href: x,
                as: w,
                children: k,
                prefetch: j = null,
                passHref: _,
                replace: O,
                shallow: P,
                scroll: z,
                onClick: E,
                onMouseEnter: C,
                onTouchStart: S,
                legacyBehavior: N = !1,
                onNavigate: R,
                ref: M,
                unstable_dynamicOnHover: I,
                ...$
            } = t;
        o = k, N && ("string" == typeof o || "number" == typeof o) && (o = (0, l.jsx)("a", {
            children: o
        }));
        let T = i.default.useContext(c.AppRouterContext),
            A = !1 !== j,
            D = !1 !== j ? null === (r = j) || "auto" === r ? g.FetchStrategy.PPR : g.FetchStrategy.Full : g.FetchStrategy.PPR,
            {
                href: L,
                as: U
            } = i.default.useMemo(() => {
                let e = b(x);
                return {
                    href: e,
                    as: w ? b(w) : e
                }
            }, [x, w]);
        if (N) {
            if (o ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            n = i.default.Children.only(o)
        }
        let F = N ? n && "object" == typeof n && n.ref : M,
            B = i.default.useCallback(e => (null !== T && (v.current = (0, p.mountLinkInstance)(e, L, T, D, A, h)), () => {
                v.current && ((0, p.unmountLinkForCurrentNavigation)(v.current), v.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [A, L, T, D, h]),
            G = {
                ref: (0, d.useMergedRef)(B, F),
                onClick(t) {
                    N || "function" != typeof E || E(t), N && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), !T || t.defaultPrevented || function(t, r, o, n, a, l, s) {
                        if ("undefined" != typeof window) {
                            let c, {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
                                a && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), s) {
                                let e = !1;
                                if (s({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: u
                            } = e.r(699781);
                            i.default.startTransition(() => {
                                u(o || r, a ? "replace" : "push", l ? ? !0, n.current)
                            })
                        }
                    }(t, L, U, v, O, z, R)
                },
                onMouseEnter(e) {
                    N || "function" != typeof C || C(e), N && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), T && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === I)
                },
                onTouchStart: function(e) {
                    N || "function" != typeof S || S(e), N && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), T && A && (0, p.onNavigationIntent)(e.currentTarget, !0 === I)
                }
            };
        return (0, u.isAbsoluteUrl)(U) ? G.href = U : N && !_ && ("a" !== n.type || "href" in n.props) || (G.href = (0, f.addBasePath)(U)), a = N ? i.default.cloneElement(n, G) : (0, l.jsx)("a", { ...$,
            ...G,
            children: o
        }), (0, l.jsx)(y.Provider, {
            value: s,
            children: a
        })
    }
    e.r(284508);
    let y = (0, i.createContext)(p.IDLE_LINK_STATUS),
        v = () => (0, i.useContext)(y);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 898879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(271645),
        n = "undefined" == typeof window,
        a = n ? () => {} : o.useLayoutEffect,
        l = n ? () => {} : o.useEffect;

    function i(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function i() {
            if (t && t.mountedInstances) {
                let e = o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), i()), a(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), a(() => (t && (t._pendingUpdate = i), () => {
            t && (t._pendingUpdate = i)
        })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 325633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return u
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let a = e.r(555682),
        l = e.r(190809),
        i = e.r(843476),
        s = l._(e.r(271645)),
        c = a._(e.r(898879)),
        d = e.r(742732);

    function u() {
        return [(0, i.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, i.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(233525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, o, n;
        return e.reduce(f, []).reverse().concat(u().reverse()).filter((t = new Set, r = new Set, o = new Set, n = {}, e => {
            let a = !0,
                l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                l = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? a = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? a = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) o.has(r) ? a = !1 : o.add(r);
                            else {
                                let t = e.props[r],
                                    o = n[r] || new Set;
                                ("name" !== r || !l) && o.has(t) ? a = !1 : (o.add(t), n[r] = o)
                            }
                    }
            }
            return a
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, s.useContext)(d.HeadManagerContext);
        return (0, i.jsx)(c.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 488143, (e, t, r) => {
    "use strict";

    function o({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: o,
        blurDataURL: n,
        objectFit: a
    }) {
        let l = r ? 40 * r : e,
            i = o ? 40 * o : t,
            s = l && i ? `viewBox='0 0 ${l} ${i}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}, 987690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var o = {
        VALID_LOADERS: function() {
            return a
        },
        imageConfigDefault: function() {
            return l
        }
    };
    for (var n in o) Object.defineProperty(r, n, {
        enumerable: !0,
        get: o[n]
    });
    let a = ["default", "imgix", "cloudinary", "akamai", "custom"],
        l = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 908927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return s
        }
    }), e.r(233525);
    let o = e.r(488143),
        n = e.r(987690),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function i(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function s({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: s = !1,
        preload: c = !1,
        loading: d,
        className: u,
        quality: f,
        width: p,
        height: m,
        fill: g = !1,
        style: b,
        overrideSrc: h,
        onLoad: y,
        onLoadingComplete: v,
        placeholder: x = "empty",
        blurDataURL: w,
        fetchPriority: k,
        decoding: j = "async",
        layout: _,
        objectFit: O,
        objectPosition: P,
        lazyBoundary: z,
        lazyRoot: E,
        ...C
    }, S) {
        var N;
        let R, M, I, {
                imgConf: $,
                showAltText: T,
                blurComplete: A,
                defaultLoader: D
            } = S,
            L = $ || n.imageConfigDefault;
        if ("allSizes" in L) R = L;
        else {
            let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
                t = L.deviceSizes.sort((e, t) => e - t),
                r = L.qualities ? .sort((e, t) => e - t);
            R = { ...L,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === D) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = C.loader || D;
        delete C.loader, delete C.srcSet;
        let F = "__next_img_default" in U;
        if (F) {
            if ("custom" === R.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: r,
                    ...o
                } = t;
                return e(o)
            }
        }
        if (_) {
            "fill" === _ && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[_];
            e && (b = { ...b,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[_];
            r && !t && (t = r)
        }
        let B = "",
            G = i(p),
            W = i(m);
        if ((N = e) && "object" == typeof N && (l(N) || void 0 !== N.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (M = t.blurWidth, I = t.blurHeight, w = w || t.blurDataURL, B = t.src, !g)
                if (G || W) {
                    if (G && !W) {
                        let e = G / t.width;
                        W = Math.round(t.height * e)
                    } else if (!G && W) {
                        let e = W / t.height;
                        G = Math.round(t.width * e)
                    }
                } else G = t.width, W = t.height
        }
        let q = !s && !c && ("lazy" === d || void 0 === d);
        (!(e = "string" == typeof e ? e : B) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, q = !1), R.unoptimized && (r = !0), F && !R.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let V = i(f),
            K = Object.assign(g ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: P
            } : {}, T ? {} : {
                color: "transparent"
            }, b),
            X = A || "empty" === x ? null : "blur" === x ? `url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:G,heightInt:W,blurWidth:M,blurHeight:I,blurDataURL:w||"",objectFit:K.objectFit})}")` : `url("${x}")`,
            H = a.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
            Q = X ? {
                backgroundSize: H,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X
            } : {},
            J = function({
                config: e,
                src: t,
                unoptimized: r,
                width: o,
                quality: n,
                sizes: a,
                loader: l
            }) {
                if (r) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: i,
                    kind: s
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, o) {
                    if (o) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(o);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, o, a), c = i.length - 1;
                return {
                    sizes: a || "w" !== s ? a : "100vw",
                    srcSet: i.map((r, o) => `${l({config:e,src:t,quality:n,width:r})} ${"w"===s?r:o+1}${s}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: n,
                        width: i[c]
                    })
                }
            }({
                config: R,
                src: e,
                unoptimized: r,
                width: G,
                quality: V,
                sizes: t,
                loader: U
            }),
            Y = q ? "lazy" : d;
        return {
            props: { ...C,
                loading: Y,
                fetchPriority: k,
                width: G,
                height: W,
                decoding: j,
                className: u,
                style: { ...K,
                    ...Q
                },
                sizes: J.sizes,
                srcSet: J.srcSet,
                src: h || J.src
            },
            meta: {
                unoptimized: r,
                preload: c || s,
                placeholder: x,
                fill: g
            }
        }
    }
}, 918556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let o = e.r(555682)._(e.r(271645)),
        n = e.r(987690),
        a = o.default.createContext(n.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let o = e.r(555682)._(e.r(271645)).default.createContext(null)
}, 670965, (e, t, r) => {
    "use strict";

    function o(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let o = e.r(670965);

    function n({
        config: e,
        src: t,
        width: r,
        quality: n
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, o.findClosestQuality)(n, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/_next/static/media/"),""}`
    }
    n.__next_img_default = !0;
    let a = n
}, 605500, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return x
        }
    });
    let o = e.r(555682),
        n = e.r(190809),
        a = e.r(843476),
        l = n._(e.r(271645)),
        i = o._(e.r(174080)),
        s = o._(e.r(325633)),
        c = e.r(908927),
        d = e.r(987690),
        u = e.r(918556);
    e.r(233525);
    let f = e.r(65856),
        p = o._(e.r(1948)),
        m = e.r(818581),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function b(e, t, r, o, n, a, l) {
        let i = e ? .src;
        e && e["data-loaded-src"] !== i && (e["data-loaded-src"] = i, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let o = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => o,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            o = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                o ? .current && o.current(e)
            }
        }))
    }

    function h(e) {
        return l.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, l.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: o,
        width: n,
        decoding: i,
        className: s,
        style: c,
        fetchPriority: d,
        placeholder: u,
        loading: f,
        unoptimized: p,
        fill: g,
        onLoadRef: y,
        onLoadingCompleteRef: v,
        setBlurComplete: x,
        setShowAltText: w,
        sizesInput: k,
        onLoad: j,
        onError: _,
        ...O
    }, P) => {
        let z = (0, l.useCallback)(e => {
                e && (_ && (e.src = e.src), e.complete && b(e, u, y, v, x, p, k))
            }, [e, u, y, v, x, _, p, k]),
            E = (0, m.useMergedRef)(P, z);
        return (0, a.jsx)("img", { ...O,
            ...h(d),
            loading: f,
            width: n,
            height: o,
            decoding: i,
            "data-nimg": g ? "fill" : "1",
            className: s,
            style: c,
            sizes: r,
            srcSet: t,
            src: e,
            ref: E,
            onLoad: e => {
                b(e.currentTarget, u, y, v, x, p, k)
            },
            onError: e => {
                w(!0), "empty" !== u && x(!0), _ && _(e)
            }
        })
    });

    function v({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...h(t.fetchPriority)
        };
        return e && i.default.preload ? (i.default.preload(t.src, r), null) : (0, a.jsx)(s.default, {
            children: (0, a.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let x = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(f.RouterContext),
            o = (0, l.useContext)(u.ImageConfigContext),
            n = (0, l.useMemo)(() => {
                let e = g || o || d.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "undefined" == typeof window ? o ? .localPatterns : e.localPatterns
                }
            }, [o]),
            {
                onLoad: i,
                onLoadingComplete: s
            } = e,
            m = (0, l.useRef)(i);
        (0, l.useEffect)(() => {
            m.current = i
        }, [i]);
        let b = (0, l.useRef)(s);
        (0, l.useEffect)(() => {
            b.current = s
        }, [s]);
        let [h, x] = (0, l.useState)(!1), [w, k] = (0, l.useState)(!1), {
            props: j,
            meta: _
        } = (0, c.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: h,
            showAltText: w
        });
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(y, { ...j,
                unoptimized: _.unoptimized,
                placeholder: _.placeholder,
                fill: _.fill,
                onLoadRef: m,
                onLoadingCompleteRef: b,
                setBlurComplete: x,
                setShowAltText: k,
                sizesInput: e.sizes,
                ref: t
            }), _.preload ? (0, a.jsx)(v, {
                isAppRouter: !r,
                imgAttributes: j
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 113293, e => {
    "use strict";
    var t = e.i(843476),
        r = e.i(522016),
        o = e.i(956477),
        o = o,
        n = e.i(841947),
        n = n,
        a = e.i(167881),
        l = e.i(271645),
        i = e.i(647163),
        s = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        },
        c = l.default.createContext && l.default.createContext(s),
        d = ["attr", "size", "title"];

    function u() {
        return (u = Object.assign.bind()).apply(this, arguments)
    }

    function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, o)
        }
        return r
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(r), !0).forEach(function(t) {
                var o, n, a;
                o = e, n = t, a = r[t], (n = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var o = r.call(e, t || "default");
                            if ("object" != typeof o) return o;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : t + ""
                }(n)) in o ? Object.defineProperty(o, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[n] = a
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function m(e) {
        var t = t => {
            var r, {
                    attr: o,
                    size: n,
                    title: a
                } = e,
                i = function(e, t) {
                    if (null == e) return {};
                    var r, o, n = function(e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var o in e)
                            if (Object.prototype.hasOwnProperty.call(e, o)) {
                                if (t.indexOf(o) >= 0) continue;
                                r[o] = e[o]
                            }
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (o = 0; o < a.length; o++) r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                    }
                    return n
                }(e, d),
                s = n || t.size || "1em";
            return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), l.default.createElement("svg", u({
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0"
            }, t.attr, o, i, {
                className: r,
                style: p(p({
                    color: e.color || t.color
                }, t.style), e.style),
                height: s,
                width: s,
                xmlns: "http://www.w3.org/2000/svg"
            }), a && l.default.createElement("title", null, a), e.children)
        };
        return void 0 !== c ? l.default.createElement(c.Consumer, null, e => t(e)) : t(s)
    }

    function g(e) {
        var t;
        return (t = {
            tag: "svg",
            attr: {
                viewBox: "0 0 512 512"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M464 384.39a32 32 0 0 1-13-2.77 15.77 15.77 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a15.77 15.77 0 0 1 2.71-1.54 32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32zM268 400H84a68.07 68.07 0 0 1-68-68V180a68.07 68.07 0 0 1 68-68h184.48A67.6 67.6 0 0 1 336 179.52V332a68.07 68.07 0 0 1-68 68z"
                },
                child: []
            }]
        }, e => l.default.createElement(m, u({
            attr: p({}, t.attr)
        }, e), function e(t) {
            return t && t.map((t, r) => l.default.createElement(t.tag, p({
                key: r
            }, t.attr), e(t.child)))
        }(t.child)))(e)
    }
    let b = [{
        name: "Projects",
        href: "/#projects"
    }, {
        name: "Testimonials",
        href: "/#testimonials"
    }, {
        name: "Pricing",
        href: "/#pricing"
    }, {
        name: "Contact Us",
        href: "/#contact"
    }];
    e.s(["HeroHeader", 0, () => {
        let [e, s] = l.default.useState(!1), [c, d] = l.default.useState(!1);
        return l.default.useEffect(() => {
            let e = () => {
                d(window.scrollY > 50)
            };
            return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
        }, []), (0, t.jsx)("header", {
            children: (0, t.jsx)("nav", {
                "data-state": e && "active",
                className: "fixed z-20 w-full px-2",
                children: (0, t.jsx)("div", {
                    className: (0, i.cn)("mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12", c && "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"),
                    children: (0, t.jsxs)("div", {
                        className: "relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4",
                        children: [(0, t.jsxs)("div", {
                            className: "flex w-full justify-between lg:w-auto",
                            children: [(0, t.jsx)(r.default, {
                                href: "/",
                                "aria-label": "home",
                                className: "flex items-center space-x-2",
                                children: (0, t.jsx)("span", {
                                    className: "font-semibold text-xl text-foreground",
                                    children: "Altreon"
                                })
                            }), (0, t.jsxs)("button", {
                                onClick: () => s(!e),
                                "aria-label": !0 == e ? "Close Menu" : "Open Menu",
                                className: "relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden",
                                children: [(0, t.jsx)(o.default, {
                                    className: "in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"
                                }), (0, t.jsx)(n.default, {
                                    className: "in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "absolute inset-0 m-auto hidden size-fit lg:block",
                            children: (0, t.jsx)("ul", {
                                className: "flex gap-8 text-sm",
                                children: b.map((e, o) => (0, t.jsx)("li", {
                                    children: (0, t.jsx)(r.default, {
                                        href: e.href,
                                        className: "text-muted-foreground hover:text-accent-foreground block duration-150",
                                        onClick: t => {
                                            if ("/" === window.location.pathname) {
                                                t.preventDefault();
                                                let r = document.querySelector(e.href.split("#")[1] ? "#" + e.href.split("#")[1] : e.href);
                                                r && r.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start"
                                                })
                                            }
                                        },
                                        children: (0, t.jsx)("span", {
                                            children: e.name
                                        })
                                    })
                                }, o))
                            })
                        }), (0, t.jsxs)("div", {
                            className: "bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                            children: [(0, t.jsx)("div", {
                                className: "lg:hidden",
                                children: (0, t.jsx)("ul", {
                                    className: "space-y-6 text-base",
                                    children: b.map((e, o) => (0, t.jsx)("li", {
                                        children: (0, t.jsx)(r.default, {
                                            href: e.href,
                                            className: "text-muted-foreground hover:text-accent-foreground block duration-150",
                                            onClick: t => {
                                                if ("/" === window.location.pathname) {
                                                    t.preventDefault();
                                                    let r = document.querySelector(e.href.split("#")[1] ? "#" + e.href.split("#")[1] : e.href);
                                                    r && r.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start"
                                                    })
                                                }
                                                s(!1)
                                            },
                                            children: (0, t.jsx)("span", {
                                                children: e.name
                                            })
                                        })
                                    }, o))
                                })
                            }), (0, t.jsx)("div", {
                                className: "flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit",
                                children: (0, t.jsxs)(a.Button, {
                                    size: "sm",
                                    className: (0, i.cn)("lg:inline-flex cursor-pointer"),
                                    children: [(0, t.jsx)(g, {
                                        className: "inline mr-1 size-4"
                                    }), (0, t.jsx)(r.default, {
                                        href: "https://calendar.app.google/qtT43PFug6tRbELLA",
                                        target: "blank",
                                        children: (0, t.jsx)("span", {
                                            className: "text-primary-foreground font-medium",
                                            children: "Book a Call"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        })
    }], 113293)
}]);