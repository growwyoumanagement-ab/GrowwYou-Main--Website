(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 970065, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(647163);

    function r({
        className: e,
        ...r
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card",
            className: (0, i.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", e),
            ...r
        })
    }

    function n({
        className: e,
        ...r
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-header",
            className: (0, i.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
            ...r
        })
    }

    function s({
        className: e,
        ...r
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-title",
            className: (0, i.cn)("leading-none font-semibold", e),
            ...r
        })
    }

    function a({
        className: e,
        ...r
    }) {
        return (0, t.jsx)("div", {
            "data-slot": "card-content",
            className: (0, i.cn)("px-6", e),
            ...r
        })
    }
    e.s(["Card", () => r, "CardContent", () => a, "CardHeader", () => n, "CardTitle", () => s])
}, 915751, e => {
    "use strict";
    e.i(247167);
    var t = e.i(843476),
        i = e.i(970065),
        r = e.i(647163);

    function n({
        className: e,
        type: i,
        ...n
    }) {
        return (0, t.jsx)("input", {
            type: i,
            "data-slot": "input",
            className: (0, r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e),
            ...n
        })
    }

    function s({
        className: e,
        ...i
    }) {
        return (0, t.jsx)("textarea", {
            "data-slot": "textarea",
            className: (0, r.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
            ...i
        })
    }
    var a = e.i(167881),
        o = e.i(271645);
    e.i(174080);
    var l = e.i(991918),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, i) => {
            let r = (0, l.createSlot)(`Primitive.${i}`),
                n = o.forwardRef((e, n) => {
                    let {
                        asChild: s,
                        ...a
                    } = e;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(s ? r : i, { ...a,
                        ref: n
                    })
                });
            return n.displayName = `Primitive.${i}`, { ...e,
                [i]: n
            }
        }, {}),
        c = o.forwardRef((e, i) => (0, t.jsx)(u.label, { ...e,
            ref: i,
            onMouseDown: t => {
                t.target.closest("button, input, select, textarea") || (e.onMouseDown ? .(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
            }
        }));

    function d({
        className: e,
        ...i
    }) {
        return (0, t.jsx)(c, {
            "data-slot": "label",
            className: (0, r.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
            ...i
        })
    }
    c.displayName = "Label";
    class h {
        constructor(e = 0, t = "Network Error") {
            this.status = e, this.text = t
        }
    }
    let p = {
            origin: "https://api.emailjs.com",
            blockHeadless: !1,
            storageProvider: (() => {
                if ("undefined" != typeof localStorage) return {
                    get: e => Promise.resolve(localStorage.getItem(e)),
                    set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
                    remove: e => Promise.resolve(localStorage.removeItem(e))
                }
            })()
        },
        m = e => e ? "string" == typeof e ? {
            publicKey: e
        } : "[object Object]" === e.toString() ? e : {} : {},
        f = async (e, t, i = {}) => {
            let r = await fetch(p.origin + e, {
                    method: "POST",
                    headers: i,
                    body: t
                }),
                n = await r.text(),
                s = new h(r.status, n);
            if (r.ok) return s;
            throw s
        },
        A = (e, t, i) => {
            if (!e || "string" != typeof e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
            if (!t || "string" != typeof t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
            if (!i || "string" != typeof i) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
        },
        g = e => e.webdriver || !e.languages || 0 === e.languages.length,
        v = () => new h(451, "Unavailable For Headless Browser"),
        y = (e, t) => {
            let i;
            if (!e.list ? .length || !e.watchVariable) return !1;
            var r = e.list,
                n = e.watchVariable;
            if (!Array.isArray(r)) throw "The BlockList list has to be an array";
            if ("string" != typeof n) throw "The BlockList watchVariable has to be a string";
            let s = (i = e.watchVariable, t instanceof FormData ? t.get(i) : t[i]);
            return "string" == typeof s && e.list.includes(s)
        },
        b = () => new h(403, "Forbidden"),
        x = async (e, t, i) => {
            let r = Number(await i.get(e) || 0);
            return t - Date.now() + r
        },
        w = async (e, t, i) => {
            if (!t.throttle || !i) return !1;
            var r = t.throttle,
                n = t.id;
            if ("number" != typeof r || r < 0) throw "The LimitRate throttle has to be a positive number";
            if (n && "string" != typeof n) throw "The LimitRate ID has to be a non-empty string";
            let s = t.id || e;
            return await x(s, t.throttle, i) > 0 || (await i.set(s, Date.now().toString()), !1)
        },
        k = () => new h(429, "Too Many Requests"),
        T = async (e, t, i, r) => {
            let n = m(r),
                s = n.publicKey || p.publicKey,
                a = n.blockHeadless || p.blockHeadless,
                o = p.storageProvider || n.storageProvider,
                l = { ...p.blockList,
                    ...n.blockList
                },
                u = { ...p.limitRate,
                    ...n.limitRate
                };
            if (a && g(navigator)) return Promise.reject(v());
            let c = "string" == typeof i ? document.querySelector(i) : i;
            A(s, e, t);
            if (!c || "FORM" !== c.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
            let d = new FormData(c);
            return y(l, d) ? Promise.reject(b()) : await w(location.pathname, u, o) ? Promise.reject(k()) : (d.append("lib_version", "4.4.1"), d.append("service_id", e), d.append("template_id", t), d.append("user_id", s), f("/api/v1.0/email/send-form", d))
        };
    var P = e.i(522016);

    function S() {
        let [e, r] = (0, o.useState)(!1), [l, u] = (0, o.useState)(""), c = (0, o.useRef)(null);
        return (0, t.jsx)("section", {
            id: "contact",
            className: "py-32",
            children: (0, t.jsxs)("div", {
                className: "mx-auto max-w-4xl px-4 lg:px-0",
                children: [(0, t.jsx)("h1", {
                    className: "mb-12 text-center text-4xl font-semibold lg:text-5xl",
                    children: "Contact Us"
                }), (0, t.jsxs)("div", {
                    className: "grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0",
                    children: [(0, t.jsx)("div", {
                        className: "flex flex-col justify-between space-y-8 p-6 sm:p-12",
                        children: (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("h2", {
                                className: "mb-3 text-lg font-semibold",
                                children: "Office Contact"
                            }), (0, t.jsx)(P.default, {
                                href: "mailto:info@altreon.tech",
                                className: "text-lg text-blue-600 hover:underline dark:text-blue-400",
                                children: "info@altreon.tech"
                            }), (0, t.jsx)("p", {
                                className: "mt-3 text-sm",
                                children: "+91 9992932517"
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "flex flex-col justify-between space-y-8 p-6 sm:p-12",
                        children: (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("h3", {
                                className: "mb-3 text-lg font-semibold",
                                children: "Project Manager"
                            }), (0, t.jsx)(P.default, {
                                href: "mailto:contact.altreontech@gmail.com",
                                className: "text-lg text-blue-600 hover:underline dark:text-blue-400",
                                children: "contact.altreontech@gmail.com"
                            }), (0, t.jsx)("p", {
                                className: "mt-3 text-sm",
                                children: "+91 9992932517"
                            })]
                        })
                    })]
                }), (0, t.jsx)("div", {
                    className: "h-2 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"
                }), (0, t.jsx)("form", {
                    ref: c,
                    onSubmit: e => {
                        e.preventDefault(), c.current && (r(!0), u(""), T("service_p3ydpi3", "template_38awadh", c.current, {
                            publicKey: "VFySiO0_-UoDaB7VT"
                        }).then(() => {
                            u("Message sent successfully!"), c.current ? .reset()
                        }, () => {
                            u("Failed to send message. Please try again.")
                        }).finally(() => {
                            r(!1)
                        }))
                    },
                    className: "border px-4 py-12 lg:px-0 lg:py-24",
                    children: (0, t.jsxs)(i.Card, {
                        className: "mx-auto max-w-lg p-8",
                        children: [(0, t.jsx)("h3", {
                            className: "text-xl font-semibold",
                            children: "Let's get you to the right place"
                        }), (0, t.jsx)("p", {
                            className: "text-sm",
                            children: "Reach out to our team! We're eager to learn more about how you plan to make your presence over internet."
                        }), (0, t.jsx)("hr", {}), l && (0, t.jsx)("div", {
                            className: `mt-4 p-3 rounded ${l.includes("successfully")?"bg-green-100 text-green-700 border border-green-300":"bg-red-100 text-red-700 border border-red-300"}`,
                            children: l
                        }), (0, t.jsxs)("div", {
                            className: "**:[&>label]:block mt-8 space-y-6 *:space-y-3",
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsx)(d, {
                                    htmlFor: "name",
                                    className: "space-y-2",
                                    children: "Full name"
                                }), (0, t.jsx)(n, {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    required: !0
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)(d, {
                                    htmlFor: "email",
                                    className: "space-y-2",
                                    children: "Email"
                                }), (0, t.jsx)(n, {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    required: !0
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)(d, {
                                    htmlFor: "country",
                                    className: "space-y-2",
                                    children: "Country"
                                }), (0, t.jsx)(n, {
                                    type: "text",
                                    id: "country",
                                    name: "country",
                                    required: !0
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)(d, {
                                    htmlFor: "msg",
                                    className: "space-y-2",
                                    children: "Tell us your Requirements"
                                }), (0, t.jsx)(s, {
                                    id: "msg",
                                    name: "message",
                                    rows: 3
                                })]
                            }), (0, t.jsx)(a.Button, {
                                type: "submit",
                                disabled: e,
                                className: "cursor-pointer",
                                children: e ? "Sending..." : "Submit"
                            })]
                        })]
                    })
                })]
            })
        })
    }
    e.s(["default", () => S], 915751)
}, 934620, e => {
    "use strict";
    var t = e.i(271645),
        i = globalThis ? .document ? t.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", () => i])
}, 39045, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(271645);

    function r(e, n = []) {
        let s = [],
            a = () => {
                let t = s.map(e => i.createContext(e));
                return function(r) {
                    let n = r ? .[e] || t;
                    return i.useMemo(() => ({
                        [`__scope${e}`]: { ...r,
                            [e]: n
                        }
                    }), [r, n])
                }
            };
        return a.scopeName = e, [function(r, n) {
            let a = i.createContext(n),
                o = s.length;
            s = [...s, n];
            let l = r => {
                let {
                    scope: n,
                    children: s,
                    ...l
                } = r, u = n ? .[e] ? .[o] || a, c = i.useMemo(() => l, Object.values(l));
                return (0, t.jsx)(u.Provider, {
                    value: c,
                    children: s
                })
            };
            return l.displayName = r + "Provider", [l, function(t, s) {
                let l = s ? .[e] ? .[o] || a,
                    u = i.useContext(l);
                if (u) return u;
                if (void 0 !== n) return n;
                throw Error(`\`${t}\` must be used within \`${r}\``)
            }]
        }, function(...e) {
            let t = e[0];
            if (1 === e.length) return t;
            let r = () => {
                let r = e.map(e => ({
                    useScope: e(),
                    scopeName: e.scopeName
                }));
                return function(e) {
                    let n = r.reduce((t, {
                        useScope: i,
                        scopeName: r
                    }) => {
                        let n = i(e)[`__scope${r}`];
                        return { ...t,
                            ...n
                        }
                    }, {});
                    return i.useMemo(() => ({
                        [`__scope${t.scopeName}`]: n
                    }), [n])
                }
            };
            return r.scopeName = t.scopeName, r
        }(a, ...n)]
    }
    var n = e.i(820783);

    function s(e) {
        var r;
        let s, a = (r = e, (s = i.forwardRef((e, t) => {
                let {
                    children: r,
                    ...s
                } = e;
                if (i.isValidElement(r)) {
                    var a;
                    let e, o, l = (a = r, (o = (e = Object.getOwnPropertyDescriptor(a.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (o = (e = Object.getOwnPropertyDescriptor(a, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref),
                        u = function(e, t) {
                            let i = { ...t
                            };
                            for (let r in t) {
                                let n = e[r],
                                    s = t[r];
                                /^on[A-Z]/.test(r) ? n && s ? i[r] = (...e) => {
                                    let t = s(...e);
                                    return n(...e), t
                                } : n && (i[r] = n) : "style" === r ? i[r] = { ...n,
                                    ...s
                                } : "className" === r && (i[r] = [n, s].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...i
                            }
                        }(s, r.props);
                    return r.type !== i.Fragment && (u.ref = t ? (0, n.composeRefs)(t, l) : l), i.cloneElement(r, u)
                }
                return i.Children.count(r) > 1 ? i.Children.only(null) : null
            })).displayName = `${r}.SlotClone`, s),
            l = i.forwardRef((e, r) => {
                let {
                    children: n,
                    ...s
                } = e, l = i.Children.toArray(n), u = l.find(o);
                if (u) {
                    let e = u.props.children,
                        n = l.map(t => t !== u ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                    return (0, t.jsx)(a, { ...s,
                        ref: r,
                        children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
                    })
                }
                return (0, t.jsx)(a, { ...s,
                    ref: r,
                    children: n
                })
            });
        return l.displayName = `${e}.Slot`, l
    }
    var a = Symbol("radix.slottable");

    function o(e) {
        return i.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === a
    }
    var l = new WeakMap;

    function u(e, t) {
        var i, r;
        let n, s, a;
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let o = (i = e, r = t, n = i.length, (a = (s = c(r)) >= 0 ? s : n + s) < 0 || a >= n ? -1 : a);
        return -1 === o ? void 0 : e[o]
    }

    function c(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
    }

    function d(e, t, {
        checkForDefaultPrevented: i = !0
    } = {}) {
        return function(r) {
            if (e ? .(r), !1 === i || !r.defaultPrevented) return t ? .(r)
        }
    }(class e extends Map {#
        e;
        constructor(e) {
            super(e), this.#e = [...super.keys()], l.set(this, !0)
        }
        set(e, t) {
            return l.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
        }
        insert(e, t, i) {
            let r, n = this.has(t),
                s = this.#e.length,
                a = c(e),
                o = a >= 0 ? a : s + a,
                l = o < 0 || o >= s ? -1 : o;
            if (l === this.size || n && l === this.size - 1 || -1 === l) return this.set(t, i), this;
            let u = this.size + +!n;
            a < 0 && o++;
            let d = [...this.#e],
                h = !1;
            for (let e = o; e < u; e++)
                if (o === e) {
                    let s = d[e];
                    d[e] === t && (s = d[e + 1]), n && this.delete(t), r = this.get(s), this.set(t, i)
                } else {
                    h || d[e - 1] !== t || (h = !0);
                    let i = d[h ? e : e - 1],
                        n = r;
                    r = this.get(i), this.delete(i), this.set(i, n)
                }
            return this
        }
        with(t, i, r) {
            let n = new e(this);
            return n.insert(t, i, r), n
        }
        before(e) {
            let t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
        }
        setBefore(e, t, i) {
            let r = this.#e.indexOf(e);
            return -1 === r ? this : this.insert(r, t, i)
        }
        after(e) {
            let t = this.#e.indexOf(e);
            if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1)) return this.entryAt(t)
        }
        setAfter(e, t, i) {
            let r = this.#e.indexOf(e);
            return -1 === r ? this : this.insert(r + 1, t, i)
        }
        first() {
            return this.entryAt(0)
        }
        last() {
            return this.entryAt(-1)
        }
        clear() {
            return this.#e = [], super.clear()
        }
        delete(e) {
            let t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1), t
        }
        deleteAt(e) {
            let t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
        }
        at(e) {
            let t = u(this.#e, e);
            if (void 0 !== t) return this.get(t)
        }
        entryAt(e) {
            let t = u(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
        }
        indexOf(e) {
            return this.#e.indexOf(e)
        }
        keyAt(e) {
            return u(this.#e, e)
        }
        from(e, t) {
            let i = this.indexOf(e);
            if (-1 === i) return;
            let r = i + t;
            return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r)
        }
        keyFrom(e, t) {
            let i = this.indexOf(e);
            if (-1 === i) return;
            let r = i + t;
            return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r)
        }
        find(e, t) {
            let i = 0;
            for (let r of this) {
                if (Reflect.apply(e, t, [r, i, this])) return r;
                i++
            }
        }
        findIndex(e, t) {
            let i = 0;
            for (let r of this) {
                if (Reflect.apply(e, t, [r, i, this])) return i;
                i++
            }
            return -1
        }
        filter(t, i) {
            let r = [],
                n = 0;
            for (let e of this) Reflect.apply(t, i, [e, n, this]) && r.push(e), n++;
            return new e(r)
        }
        map(t, i) {
            let r = [],
                n = 0;
            for (let e of this) r.push([e[0], Reflect.apply(t, i, [e, n, this])]), n++;
            return new e(r)
        }
        reduce(...e) {
            let [t, i] = e, r = 0, n = i ? ? this.at(0);
            for (let i of this) n = 0 === r && 1 === e.length ? i : Reflect.apply(t, this, [n, i, r, this]), r++;
            return n
        }
        reduceRight(...e) {
            let [t, i] = e, r = i ? ? this.at(-1);
            for (let i = this.size - 1; i >= 0; i--) {
                let n = this.at(i);
                r = i === this.size - 1 && 1 === e.length ? n : Reflect.apply(t, this, [r, n, i, this])
            }
            return r
        }
        toSorted(t) {
            return new e([...this.entries()].sort(t))
        }
        toReversed() {
            let t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
                let i = this.keyAt(e),
                    r = this.get(i);
                t.set(i, r)
            }
            return t
        }
        toSpliced(...t) {
            let i = [...this.entries()];
            return i.splice(...t), new e(i)
        }
        slice(t, i) {
            let r = new e,
                n = this.size - 1;
            if (void 0 === t) return r;
            t < 0 && (t += this.size), void 0 !== i && i > 0 && (n = i - 1);
            for (let e = t; e <= n; e++) {
                let t = this.keyAt(e),
                    i = this.get(t);
                r.set(t, i)
            }
            return r
        }
        every(e, t) {
            let i = 0;
            for (let r of this) {
                if (!Reflect.apply(e, t, [r, i, this])) return !1;
                i++
            }
            return !0
        }
        some(e, t) {
            let i = 0;
            for (let r of this) {
                if (Reflect.apply(e, t, [r, i, this])) return !0;
                i++
            }
            return !1
        }
    }), "undefined" != typeof window && window.document && window.document.createElement;
    var h = e.i(934620);
    i[" useEffectEvent ".trim().toString()], i[" useInsertionEffect ".trim().toString()];
    var p = i[" useInsertionEffect ".trim().toString()] || h.useLayoutEffect;

    function m({
        prop: e,
        defaultProp: t,
        onChange: r = () => {},
        caller: n
    }) {
        let [s, a, o] = function({
            defaultProp: e,
            onChange: t
        }) {
            let [r, n] = i.useState(e), s = i.useRef(r), a = i.useRef(t);
            return p(() => {
                a.current = t
            }, [t]), i.useEffect(() => {
                s.current !== r && (a.current ? .(r), s.current = r)
            }, [r, s]), [r, n, a]
        }({
            defaultProp: t,
            onChange: r
        }), l = void 0 !== e, u = l ? e : s; {
            let t = i.useRef(void 0 !== e);
            i.useEffect(() => {
                let e = t.current;
                if (e !== l) {
                    let t = l ? "controlled" : "uncontrolled";
                    console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                }
                t.current = l
            }, [l, n])
        }
        return [u, i.useCallback(t => {
            if (l) {
                let i = "function" == typeof t ? t(e) : t;
                i !== e && o.current ? .(i)
            } else a(t)
        }, [l, e, a, o])]
    }
    Symbol("RADIX:SYNC_STATE"), e.i(174080);
    var f = Symbol("radix.slottable");

    function A(e) {
        return i.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
    }
    var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
            var s, a;
            let o, l, u, c = (a = s = `Primitive.${r}`, (o = i.forwardRef((e, t) => {
                    let {
                        children: r,
                        ...s
                    } = e;
                    if (i.isValidElement(r)) {
                        var a;
                        let e, o, l = (a = r, (o = (e = Object.getOwnPropertyDescriptor(a.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? a.ref : (o = (e = Object.getOwnPropertyDescriptor(a, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? a.props.ref : a.props.ref || a.ref),
                            u = function(e, t) {
                                let i = { ...t
                                };
                                for (let r in t) {
                                    let n = e[r],
                                        s = t[r];
                                    /^on[A-Z]/.test(r) ? n && s ? i[r] = (...e) => {
                                        let t = s(...e);
                                        return n(...e), t
                                    } : n && (i[r] = n) : "style" === r ? i[r] = { ...n,
                                        ...s
                                    } : "className" === r && (i[r] = [n, s].filter(Boolean).join(" "))
                                }
                                return { ...e,
                                    ...i
                                }
                            }(s, r.props);
                        return r.type !== i.Fragment && (u.ref = t ? (0, n.composeRefs)(t, l) : l), i.cloneElement(r, u)
                    }
                    return i.Children.count(r) > 1 ? i.Children.only(null) : null
                })).displayName = `${a}.SlotClone`, l = o, (u = i.forwardRef((e, r) => {
                    let {
                        children: n,
                        ...s
                    } = e, a = i.Children.toArray(n), o = a.find(A);
                    if (o) {
                        let e = o.props.children,
                            n = a.map(t => t !== o ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                        return (0, t.jsx)(l, { ...s,
                            ref: r,
                            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, t.jsx)(l, { ...s,
                        ref: r,
                        children: n
                    })
                })).displayName = `${s}.Slot`, u),
                d = i.forwardRef((e, i) => {
                    let {
                        asChild: n,
                        ...s
                    } = e;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(n ? c : r, { ...s,
                        ref: i
                    })
                });
            return d.displayName = `Primitive.${r}`, { ...e,
                [r]: d
            }
        }, {}),
        v = e => {
            var t;
            let r, s, {
                    present: a,
                    children: o
                } = e,
                l = function(e) {
                    var t, r;
                    let [n, s] = i.useState(), a = i.useRef(null), o = i.useRef(e), l = i.useRef("none"), [u, c] = (t = e ? "mounted" : "unmounted", r = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, i.useReducer((e, t) => r[e][t] ? ? e, t));
                    return i.useEffect(() => {
                        let e = y(a.current);
                        l.current = "mounted" === u ? e : "none"
                    }, [u]), (0, h.useLayoutEffect)(() => {
                        let t = a.current,
                            i = o.current;
                        if (i !== e) {
                            let r = l.current,
                                n = y(t);
                            e ? c("MOUNT") : "none" === n || t ? .display === "none" ? c("UNMOUNT") : i && r !== n ? c("ANIMATION_OUT") : c("UNMOUNT"), o.current = e
                        }
                    }, [e, c]), (0, h.useLayoutEffect)(() => {
                        if (n) {
                            let e, t = n.ownerDocument.defaultView ? ? window,
                                i = i => {
                                    let r = y(a.current).includes(CSS.escape(i.animationName));
                                    if (i.target === n && r && (c("ANIMATION_END"), !o.current)) {
                                        let i = n.style.animationFillMode;
                                        n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
                                            "forwards" === n.style.animationFillMode && (n.style.animationFillMode = i)
                                        })
                                    }
                                },
                                r = e => {
                                    e.target === n && (l.current = y(a.current))
                                };
                            return n.addEventListener("animationstart", r), n.addEventListener("animationcancel", i), n.addEventListener("animationend", i), () => {
                                t.clearTimeout(e), n.removeEventListener("animationstart", r), n.removeEventListener("animationcancel", i), n.removeEventListener("animationend", i)
                            }
                        }
                        c("ANIMATION_END")
                    }, [n, c]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(u),
                        ref: i.useCallback(e => {
                            a.current = e ? getComputedStyle(e) : null, s(e)
                        }, [])
                    }
                }(a),
                u = "function" == typeof o ? o({
                    present: l.isPresent
                }) : i.Children.only(o),
                c = (0, n.useComposedRefs)(l.ref, (t = u, (s = (r = Object.getOwnPropertyDescriptor(t.props, "ref") ? .get) && "isReactWarning" in r && r.isReactWarning) ? t.ref : (s = (r = Object.getOwnPropertyDescriptor(t, "ref") ? .get) && "isReactWarning" in r && r.isReactWarning) ? t.props.ref : t.props.ref || t.ref));
            return "function" == typeof o || l.isPresent ? i.cloneElement(u, {
                ref: c
            }) : null
        };

    function y(e) {
        return e ? .animationName || "none"
    }
    v.displayName = "Presence";
    var b = i[" useId ".trim().toString()] || (() => void 0),
        x = 0;

    function w(e) {
        let [t, r] = i.useState(b());
        return (0, h.useLayoutEffect)(() => {
            e || r(e => e ? ? String(x++))
        }, [e]), e || (t ? `radix-${t}` : "")
    }
    var k = "Collapsible",
        [T, P] = r(k),
        [S, j] = T(k),
        C = i.forwardRef((e, r) => {
            let {
                __scopeCollapsible: n,
                open: s,
                defaultOpen: a,
                disabled: o,
                onOpenChange: l,
                ...u
            } = e, [c, d] = m({
                prop: s,
                defaultProp: a ? ? !1,
                onChange: l,
                caller: k
            });
            return (0, t.jsx)(S, {
                scope: n,
                disabled: o,
                contentId: w(),
                open: c,
                onOpenToggle: i.useCallback(() => d(e => !e), [d]),
                children: (0, t.jsx)(g.div, {
                    "data-state": D(c),
                    "data-disabled": o ? "" : void 0,
                    ...u,
                    ref: r
                })
            })
        });
    C.displayName = k;
    var E = "CollapsibleTrigger",
        M = i.forwardRef((e, i) => {
            let {
                __scopeCollapsible: r,
                ...n
            } = e, s = j(E, r);
            return (0, t.jsx)(g.button, {
                type: "button",
                "aria-controls": s.contentId,
                "aria-expanded": s.open || !1,
                "data-state": D(s.open),
                "data-disabled": s.disabled ? "" : void 0,
                disabled: s.disabled,
                ...n,
                ref: i,
                onClick: d(e.onClick, s.onOpenToggle)
            })
        });
    M.displayName = E;
    var R = "CollapsibleContent",
        V = i.forwardRef((e, i) => {
            let {
                forceMount: r,
                ...n
            } = e, s = j(R, e.__scopeCollapsible);
            return (0, t.jsx)(v, {
                present: r || s.open,
                children: ({
                    present: e
                }) => (0, t.jsx)(N, { ...n,
                    ref: i,
                    present: e
                })
            })
        });
    V.displayName = R;
    var N = i.forwardRef((e, r) => {
        let {
            __scopeCollapsible: s,
            present: a,
            children: o,
            ...l
        } = e, u = j(R, s), [c, d] = i.useState(a), p = i.useRef(null), m = (0, n.useComposedRefs)(r, p), f = i.useRef(0), A = f.current, v = i.useRef(0), y = v.current, b = u.open || c, x = i.useRef(b), w = i.useRef(void 0);
        return i.useEffect(() => {
            let e = requestAnimationFrame(() => x.current = !1);
            return () => cancelAnimationFrame(e)
        }, []), (0, h.useLayoutEffect)(() => {
            let e = p.current;
            if (e) {
                w.current = w.current || {
                    transitionDuration: e.style.transitionDuration,
                    animationName: e.style.animationName
                }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                let t = e.getBoundingClientRect();
                f.current = t.height, v.current = t.width, x.current || (e.style.transitionDuration = w.current.transitionDuration, e.style.animationName = w.current.animationName), d(a)
            }
        }, [u.open, a]), (0, t.jsx)(g.div, {
            "data-state": D(u.open),
            "data-disabled": u.disabled ? "" : void 0,
            id: u.contentId,
            hidden: !b,
            ...l,
            ref: m,
            style: {
                "--radix-collapsible-content-height": A ? `${A}px` : void 0,
                "--radix-collapsible-content-width": y ? `${y}px` : void 0,
                ...e.style
            },
            children: b && o
        })
    });

    function D(e) {
        return e ? "open" : "closed"
    }
    var q = i.createContext(void 0),
        L = "Accordion",
        O = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [F, I, z] = function(e) {
            let a = e + "CollectionProvider",
                [o, l] = r(a),
                [u, c] = o(a, {
                    collectionRef: {
                        current: null
                    },
                    itemMap: new Map
                }),
                d = e => {
                    let {
                        scope: r,
                        children: n
                    } = e, s = i.default.useRef(null), a = i.default.useRef(new Map).current;
                    return (0, t.jsx)(u, {
                        scope: r,
                        itemMap: a,
                        collectionRef: s,
                        children: n
                    })
                };
            d.displayName = a;
            let h = e + "CollectionSlot",
                p = s(h),
                m = i.default.forwardRef((e, i) => {
                    let {
                        scope: r,
                        children: s
                    } = e, a = c(h, r), o = (0, n.useComposedRefs)(i, a.collectionRef);
                    return (0, t.jsx)(p, {
                        ref: o,
                        children: s
                    })
                });
            m.displayName = h;
            let f = e + "CollectionItemSlot",
                A = "data-radix-collection-item",
                g = s(f),
                v = i.default.forwardRef((e, r) => {
                    let {
                        scope: s,
                        children: a,
                        ...o
                    } = e, l = i.default.useRef(null), u = (0, n.useComposedRefs)(r, l), d = c(f, s);
                    return i.default.useEffect(() => (d.itemMap.set(l, {
                        ref: l,
                        ...o
                    }), () => void d.itemMap.delete(l))), (0, t.jsx)(g, { ...{
                            [A]: ""
                        },
                        ref: u,
                        children: a
                    })
                });
            return v.displayName = f, [{
                Provider: d,
                Slot: m,
                ItemSlot: v
            }, function(t) {
                let r = c(e + "CollectionConsumer", t);
                return i.default.useCallback(() => {
                    let e = r.collectionRef.current;
                    if (!e) return [];
                    let t = Array.from(e.querySelectorAll(`[${A}]`));
                    return Array.from(r.itemMap.values()).sort((e, i) => t.indexOf(e.ref.current) - t.indexOf(i.ref.current))
                }, [r.collectionRef, r.itemMap])
            }, l]
        }(L),
        [B, $] = r(L, [z, P]),
        U = P(),
        W = i.default.forwardRef((e, i) => {
            let {
                type: r,
                ...n
            } = e;
            return (0, t.jsx)(F.Provider, {
                scope: e.__scopeAccordion,
                children: "multiple" === r ? (0, t.jsx)(G, { ...n,
                    ref: i
                }) : (0, t.jsx)(K, { ...n,
                    ref: i
                })
            })
        });
    W.displayName = L;
    var [_, H] = B(L), [Y, X] = B(L, {
        collapsible: !1
    }), K = i.default.forwardRef((e, r) => {
        let {
            value: n,
            defaultValue: s,
            onValueChange: a = () => {},
            collapsible: o = !1,
            ...l
        } = e, [u, c] = m({
            prop: n,
            defaultProp: s ? ? "",
            onChange: a,
            caller: L
        });
        return (0, t.jsx)(_, {
            scope: e.__scopeAccordion,
            value: i.default.useMemo(() => u ? [u] : [], [u]),
            onItemOpen: c,
            onItemClose: i.default.useCallback(() => o && c(""), [o, c]),
            children: (0, t.jsx)(Y, {
                scope: e.__scopeAccordion,
                collapsible: o,
                children: (0, t.jsx)(Q, { ...l,
                    ref: r
                })
            })
        })
    }), G = i.default.forwardRef((e, r) => {
        let {
            value: n,
            defaultValue: s,
            onValueChange: a = () => {},
            ...o
        } = e, [l, u] = m({
            prop: n,
            defaultProp: s ? ? [],
            onChange: a,
            caller: L
        }), c = i.default.useCallback(e => u((t = []) => [...t, e]), [u]), d = i.default.useCallback(e => u((t = []) => t.filter(t => t !== e)), [u]);
        return (0, t.jsx)(_, {
            scope: e.__scopeAccordion,
            value: l,
            onItemOpen: c,
            onItemClose: d,
            children: (0, t.jsx)(Y, {
                scope: e.__scopeAccordion,
                collapsible: !0,
                children: (0, t.jsx)(Q, { ...o,
                    ref: r
                })
            })
        })
    }), [Z, J] = B(L), Q = i.default.forwardRef((e, r) => {
        let s, {
                __scopeAccordion: a,
                disabled: o,
                dir: l,
                orientation: u = "vertical",
                ...c
            } = e,
            h = i.default.useRef(null),
            p = (0, n.useComposedRefs)(h, r),
            m = I(a),
            f = "ltr" === (s = i.useContext(q), l || s || "ltr"),
            A = d(e.onKeyDown, e => {
                if (!O.includes(e.key)) return;
                let t = e.target,
                    i = m().filter(e => !e.ref.current ? .disabled),
                    r = i.findIndex(e => e.ref.current === t),
                    n = i.length;
                if (-1 === r) return;
                e.preventDefault();
                let s = r,
                    a = n - 1,
                    o = () => {
                        (s = r + 1) > a && (s = 0)
                    },
                    l = () => {
                        (s = r - 1) < 0 && (s = a)
                    };
                switch (e.key) {
                    case "Home":
                        s = 0;
                        break;
                    case "End":
                        s = a;
                        break;
                    case "ArrowRight":
                        "horizontal" === u && (f ? o() : l());
                        break;
                    case "ArrowDown":
                        "vertical" === u && o();
                        break;
                    case "ArrowLeft":
                        "horizontal" === u && (f ? l() : o());
                        break;
                    case "ArrowUp":
                        "vertical" === u && l()
                }
                let c = s % n;
                i[c].ref.current ? .focus()
            });
        return (0, t.jsx)(Z, {
            scope: a,
            disabled: o,
            direction: l,
            orientation: u,
            children: (0, t.jsx)(F.Slot, {
                scope: a,
                children: (0, t.jsx)(g.div, { ...c,
                    "data-orientation": u,
                    ref: p,
                    onKeyDown: o ? void 0 : A
                })
            })
        })
    }), ee = "AccordionItem", [et, ei] = B(ee), er = i.default.forwardRef((e, i) => {
        let {
            __scopeAccordion: r,
            value: n,
            ...s
        } = e, a = J(ee, r), o = H(ee, r), l = U(r), u = w(), c = n && o.value.includes(n) || !1, d = a.disabled || e.disabled;
        return (0, t.jsx)(et, {
            scope: r,
            open: c,
            disabled: d,
            triggerId: u,
            children: (0, t.jsx)(C, {
                "data-orientation": a.orientation,
                "data-state": ec(c),
                ...l,
                ...s,
                ref: i,
                disabled: d,
                open: c,
                onOpenChange: e => {
                    e ? o.onItemOpen(n) : o.onItemClose(n)
                }
            })
        })
    });
    er.displayName = ee;
    var en = "AccordionHeader",
        es = i.default.forwardRef((e, i) => {
            let {
                __scopeAccordion: r,
                ...n
            } = e, s = J(L, r), a = ei(en, r);
            return (0, t.jsx)(g.h3, {
                "data-orientation": s.orientation,
                "data-state": ec(a.open),
                "data-disabled": a.disabled ? "" : void 0,
                ...n,
                ref: i
            })
        });
    es.displayName = en;
    var ea = "AccordionTrigger",
        eo = i.default.forwardRef((e, i) => {
            let {
                __scopeAccordion: r,
                ...n
            } = e, s = J(L, r), a = ei(ea, r), o = X(ea, r), l = U(r);
            return (0, t.jsx)(F.ItemSlot, {
                scope: r,
                children: (0, t.jsx)(M, {
                    "aria-disabled": a.open && !o.collapsible || void 0,
                    "data-orientation": s.orientation,
                    id: a.triggerId,
                    ...l,
                    ...n,
                    ref: i
                })
            })
        });
    eo.displayName = ea;
    var el = "AccordionContent",
        eu = i.default.forwardRef((e, i) => {
            let {
                __scopeAccordion: r,
                ...n
            } = e, s = J(L, r), a = ei(el, r), o = U(r);
            return (0, t.jsx)(V, {
                role: "region",
                "aria-labelledby": a.triggerId,
                "data-orientation": s.orientation,
                ...o,
                ...n,
                ref: i,
                style: {
                    "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                    "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    ...e.style
                }
            })
        });

    function ec(e) {
        return e ? "open" : "closed"
    }
    eu.displayName = el;
    var ed = e.i(631171),
        ed = ed,
        eh = e.i(647163);

    function ep({ ...e
    }) {
        return (0, t.jsx)(W, {
            "data-slot": "accordion",
            ...e
        })
    }

    function em({
        className: e,
        ...i
    }) {
        return (0, t.jsx)(er, {
            "data-slot": "accordion-item",
            className: (0, eh.cn)("border-b last:border-b-0", e),
            ...i
        })
    }

    function ef({
        className: e,
        children: i,
        ...r
    }) {
        return (0, t.jsx)(es, {
            className: "flex",
            children: (0, t.jsxs)(eo, {
                "data-slot": "accordion-trigger",
                className: (0, eh.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", e),
                ...r,
                children: [i, (0, t.jsx)(ed.default, {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                })]
            })
        })
    }

    function eA({
        className: e,
        children: i,
        ...r
    }) {
        return (0, t.jsx)(eu, {
            "data-slot": "accordion-content",
            className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
            ...r,
            children: (0, t.jsx)("div", {
                className: (0, eh.cn)("pt-0 pb-4", e),
                children: i
            })
        })
    }
    let eg = {
        "a-arrow-down": () => e.A(457399),
        "a-arrow-up": () => e.A(328888),
        "a-large-small": () => e.A(456620),
        accessibility: () => e.A(878391),
        activity: () => e.A(896689),
        "air-vent": () => e.A(763865),
        airplay: () => e.A(599714),
        "alarm-clock-check": () => e.A(311630),
        "alarm-check": () => e.A(311630),
        "alarm-clock-minus": () => e.A(38728),
        "alarm-minus": () => e.A(38728),
        "alarm-clock-off": () => e.A(450020),
        "alarm-clock-plus": () => e.A(108621),
        "alarm-plus": () => e.A(108621),
        "alarm-clock": () => e.A(573081),
        "alarm-smoke": () => e.A(454501),
        album: () => e.A(102640),
        "align-center-horizontal": () => e.A(223691),
        "align-center-vertical": () => e.A(711116),
        "align-end-horizontal": () => e.A(770200),
        "align-end-vertical": () => e.A(432492),
        "align-horizontal-distribute-center": () => e.A(884622),
        "align-horizontal-distribute-end": () => e.A(406001),
        "align-horizontal-distribute-start": () => e.A(188736),
        "align-horizontal-justify-center": () => e.A(24759),
        "align-horizontal-justify-end": () => e.A(910753),
        "align-horizontal-justify-start": () => e.A(835571),
        "align-horizontal-space-around": () => e.A(107665),
        "align-horizontal-space-between": () => e.A(979221),
        "align-start-horizontal": () => e.A(957468),
        "align-start-vertical": () => e.A(533046),
        "align-vertical-distribute-center": () => e.A(385751),
        "align-vertical-distribute-end": () => e.A(919853),
        "align-vertical-distribute-start": () => e.A(214665),
        "align-vertical-justify-center": () => e.A(435777),
        "align-vertical-justify-end": () => e.A(891091),
        "align-vertical-justify-start": () => e.A(14003),
        "align-vertical-space-around": () => e.A(121192),
        "align-vertical-space-between": () => e.A(369253),
        ambulance: () => e.A(146975),
        ampersand: () => e.A(692710),
        ampersands: () => e.A(318378),
        amphora: () => e.A(369798),
        anchor: () => e.A(932241),
        angry: () => e.A(705942),
        annoyed: () => e.A(671911),
        antenna: () => e.A(786099),
        anvil: () => e.A(16456),
        aperture: () => e.A(654368),
        "app-window-mac": () => e.A(279583),
        "app-window": () => e.A(638262),
        apple: () => e.A(995987),
        "archive-restore": () => e.A(818965),
        "archive-x": () => e.A(572698),
        archive: () => e.A(918870),
        armchair: () => e.A(669799),
        "arrow-big-down-dash": () => e.A(644816),
        "arrow-big-down": () => e.A(324019),
        "arrow-big-left-dash": () => e.A(771091),
        "arrow-big-left": () => e.A(156872),
        "arrow-big-right-dash": () => e.A(21741),
        "arrow-big-right": () => e.A(92994),
        "arrow-big-up-dash": () => e.A(851883),
        "arrow-big-up": () => e.A(435522),
        "arrow-down-0-1": () => e.A(893068),
        "arrow-down-01": () => e.A(893068),
        "arrow-down-1-0": () => e.A(819405),
        "arrow-down-10": () => e.A(819405),
        "arrow-down-a-z": () => e.A(480190),
        "arrow-down-az": () => e.A(480190),
        "arrow-down-from-line": () => e.A(269152),
        "arrow-down-left": () => e.A(295323),
        "arrow-down-narrow-wide": () => e.A(575567),
        "arrow-down-right": () => e.A(630353),
        "arrow-down-to-dot": () => e.A(898243),
        "arrow-down-to-line": () => e.A(697616),
        "arrow-down-up": () => e.A(466007),
        "arrow-down-wide-narrow": () => e.A(313240),
        "sort-desc": () => e.A(313240),
        "arrow-down-z-a": () => e.A(770942),
        "arrow-down-za": () => e.A(770942),
        "arrow-down": () => e.A(889033),
        "arrow-left-from-line": () => e.A(983732),
        "arrow-left-right": () => e.A(671611),
        "arrow-left-to-line": () => e.A(106524),
        "arrow-left": () => e.A(939759),
        "arrow-right-from-line": () => e.A(110308),
        "arrow-right-left": () => e.A(417363),
        "arrow-right-to-line": () => e.A(224762),
        "arrow-right": () => e.A(565133),
        "arrow-up-0-1": () => e.A(465e3),
        "arrow-up-01": () => e.A(465e3),
        "arrow-up-1-0": () => e.A(830316),
        "arrow-up-10": () => e.A(830316),
        "arrow-up-a-z": () => e.A(682350),
        "arrow-up-az": () => e.A(682350),
        "arrow-up-down": () => e.A(680266),
        "arrow-up-from-dot": () => e.A(842119),
        "arrow-up-from-line": () => e.A(226649),
        "arrow-up-left": () => e.A(698103),
        "arrow-up-narrow-wide": () => e.A(655209),
        "sort-asc": () => e.A(655209),
        "arrow-up-right": () => e.A(344919),
        "arrow-up-to-line": () => e.A(606430),
        "arrow-up-wide-narrow": () => e.A(7915),
        "arrow-up-z-a": () => e.A(833799),
        "arrow-up-za": () => e.A(833799),
        "arrow-up": () => e.A(746079),
        "arrows-up-from-line": () => e.A(587613),
        asterisk: () => e.A(662972),
        "at-sign": () => e.A(523423),
        atom: () => e.A(406235),
        "audio-lines": () => e.A(12725),
        "audio-waveform": () => e.A(284227),
        award: () => e.A(888920),
        axe: () => e.A(283381),
        "axis-3d": () => e.A(966830),
        "axis-3-d": () => e.A(966830),
        baby: () => e.A(979930),
        backpack: () => e.A(901573),
        "badge-alert": () => e.A(677198),
        "badge-cent": () => e.A(731269),
        "badge-check": () => e.A(815880),
        verified: () => e.A(815880),
        "badge-dollar-sign": () => e.A(58556),
        "badge-euro": () => e.A(248180),
        "badge-indian-rupee": () => e.A(228608),
        "badge-info": () => e.A(790131),
        "badge-japanese-yen": () => e.A(202523),
        "badge-minus": () => e.A(932407),
        "badge-percent": () => e.A(537927),
        "badge-plus": () => e.A(478969),
        "badge-pound-sterling": () => e.A(271971),
        "badge-question-mark": () => e.A(351978),
        "badge-help": () => e.A(351978),
        "badge-russian-ruble": () => e.A(853908),
        "badge-swiss-franc": () => e.A(528877),
        "badge-turkish-lira": () => e.A(983397),
        "badge-x": () => e.A(746094),
        badge: () => e.A(619196),
        "baggage-claim": () => e.A(520163),
        ban: () => e.A(310397),
        banana: () => e.A(988398),
        bandage: () => e.A(633129),
        "banknote-arrow-down": () => e.A(535302),
        "banknote-arrow-up": () => e.A(903583),
        "banknote-x": () => e.A(631590),
        banknote: () => e.A(635275),
        barcode: () => e.A(985934),
        barrel: () => e.A(475460),
        baseline: () => e.A(676172),
        bath: () => e.A(494950),
        "battery-charging": () => e.A(287643),
        "battery-full": () => e.A(517560),
        "battery-low": () => e.A(94528),
        "battery-medium": () => e.A(37473),
        "battery-plus": () => e.A(886198),
        "battery-warning": () => e.A(813929),
        battery: () => e.A(468798),
        beaker: () => e.A(425800),
        "bean-off": () => e.A(270977),
        bean: () => e.A(374369),
        "bed-double": () => e.A(714518),
        "bed-single": () => e.A(502545),
        bed: () => e.A(897486),
        beef: () => e.A(275611),
        "beer-off": () => e.A(149114),
        beer: () => e.A(351919),
        "bell-dot": () => e.A(2750),
        "bell-electric": () => e.A(226052),
        "bell-minus": () => e.A(766513),
        "bell-off": () => e.A(688377),
        "bell-plus": () => e.A(476205),
        "bell-ring": () => e.A(836910),
        bell: () => e.A(15427),
        "between-horizontal-end": () => e.A(652708),
        "between-horizonal-end": () => e.A(652708),
        "between-horizontal-start": () => e.A(818276),
        "between-horizonal-start": () => e.A(818276),
        "between-vertical-end": () => e.A(295229),
        "between-vertical-start": () => e.A(255470),
        "biceps-flexed": () => e.A(481659),
        bike: () => e.A(4911),
        binary: () => e.A(231749),
        binoculars: () => e.A(262173),
        biohazard: () => e.A(915482),
        bird: () => e.A(413559),
        birdhouse: () => e.A(380986),
        bitcoin: () => e.A(153282),
        blend: () => e.A(252052),
        blinds: () => e.A(150859),
        blocks: () => e.A(421419),
        "bluetooth-connected": () => e.A(584644),
        "bluetooth-off": () => e.A(582571),
        "bluetooth-searching": () => e.A(448446),
        bluetooth: () => e.A(768726),
        bold: () => e.A(225157),
        bolt: () => e.A(212834),
        bomb: () => e.A(730630),
        bone: () => e.A(331793),
        "book-a": () => e.A(506893),
        "book-alert": () => e.A(476147),
        "book-audio": () => e.A(831061),
        "book-check": () => e.A(686214),
        "book-copy": () => e.A(127677),
        "book-dashed": () => e.A(862110),
        "book-template": () => e.A(862110),
        "book-down": () => e.A(96802),
        "book-headphones": () => e.A(68284),
        "book-heart": () => e.A(323086),
        "book-image": () => e.A(610106),
        "book-key": () => e.A(817550),
        "book-lock": () => e.A(595746),
        "book-marked": () => e.A(385131),
        "book-minus": () => e.A(51497),
        "book-open-check": () => e.A(983835),
        "book-open-text": () => e.A(731018),
        "book-open": () => e.A(769869),
        "book-plus": () => e.A(173132),
        "book-text": () => e.A(858752),
        "book-type": () => e.A(412012),
        "book-up-2": () => e.A(645658),
        "book-up": () => e.A(155573),
        "book-user": () => e.A(856487),
        "book-x": () => e.A(604384),
        book: () => e.A(291868),
        "bookmark-check": () => e.A(375868),
        "bookmark-minus": () => e.A(978224),
        "bookmark-plus": () => e.A(177690),
        "bookmark-x": () => e.A(277004),
        bookmark: () => e.A(313272),
        "boom-box": () => e.A(25931),
        "bot-message-square": () => e.A(232697),
        "bot-off": () => e.A(807730),
        bot: () => e.A(459962),
        "bottle-wine": () => e.A(25692),
        "bow-arrow": () => e.A(337275),
        box: () => e.A(465077),
        boxes: () => e.A(99148),
        braces: () => e.A(147906),
        "curly-braces": () => e.A(147906),
        brackets: () => e.A(348107),
        "brain-circuit": () => e.A(520132),
        "brain-cog": () => e.A(523304),
        brain: () => e.A(578213),
        "brick-wall-fire": () => e.A(534402),
        "brick-wall-shield": () => e.A(727892),
        "brick-wall": () => e.A(934203),
        "briefcase-business": () => e.A(541315),
        "briefcase-conveyor-belt": () => e.A(661950),
        "briefcase-medical": () => e.A(713960),
        briefcase: () => e.A(154649),
        "bring-to-front": () => e.A(465550),
        "brush-cleaning": () => e.A(468036),
        brush: () => e.A(288060),
        bubbles: () => e.A(131909),
        "bug-off": () => e.A(511329),
        "bug-play": () => e.A(410046),
        bug: () => e.A(481350),
        "building-2": () => e.A(10925),
        building: () => e.A(436134),
        "bus-front": () => e.A(327520),
        bus: () => e.A(254634),
        "cable-car": () => e.A(549799),
        cable: () => e.A(746767),
        "cake-slice": () => e.A(254e3),
        cake: () => e.A(577854),
        calculator: () => e.A(275521),
        "calendar-1": () => e.A(384240),
        "calendar-arrow-down": () => e.A(830858),
        "calendar-arrow-up": () => e.A(106140),
        "calendar-check-2": () => e.A(53671),
        "calendar-check": () => e.A(577882),
        "calendar-clock": () => e.A(935493),
        "calendar-cog": () => e.A(310202),
        "calendar-days": () => e.A(409498),
        "calendar-fold": () => e.A(493255),
        "calendar-heart": () => e.A(451319),
        "calendar-minus-2": () => e.A(397492),
        "calendar-minus": () => e.A(238173),
        "calendar-off": () => e.A(154521),
        "calendar-plus-2": () => e.A(338554),
        "calendar-plus": () => e.A(380635),
        "calendar-range": () => e.A(741366),
        "calendar-search": () => e.A(22135),
        "calendar-sync": () => e.A(375998),
        "calendar-x-2": () => e.A(648201),
        "calendar-x": () => e.A(842857),
        calendar: () => e.A(680064),
        calendars: () => e.A(444713),
        "camera-off": () => e.A(90670),
        camera: () => e.A(464368),
        "candy-cane": () => e.A(745710),
        "candy-off": () => e.A(900015),
        candy: () => e.A(23014),
        cannabis: () => e.A(118943),
        "captions-off": () => e.A(814181),
        captions: () => e.A(679985),
        subtitles: () => e.A(679985),
        "car-front": () => e.A(308416),
        "car-taxi-front": () => e.A(371854),
        car: () => e.A(458801),
        caravan: () => e.A(578776),
        "card-sim": () => e.A(342832),
        carrot: () => e.A(677109),
        "case-lower": () => e.A(219556),
        "case-sensitive": () => e.A(886724),
        "case-upper": () => e.A(589508),
        "cassette-tape": () => e.A(439767),
        cast: () => e.A(497904),
        castle: () => e.A(688458),
        cat: () => e.A(813853),
        cctv: () => e.A(534647),
        "chart-area": () => e.A(908705),
        "area-chart": () => e.A(908705),
        "chart-bar-big": () => e.A(425895),
        "bar-chart-horizontal-big": () => e.A(425895),
        "chart-bar-decreasing": () => e.A(631483),
        "chart-bar-increasing": () => e.A(86321),
        "chart-bar-stacked": () => e.A(418581),
        "chart-bar": () => e.A(270530),
        "bar-chart-horizontal": () => e.A(270530),
        "chart-candlestick": () => e.A(60261),
        "candlestick-chart": () => e.A(60261),
        "chart-column-big": () => e.A(671882),
        "bar-chart-big": () => e.A(671882),
        "chart-column-decreasing": () => e.A(325759),
        "chart-column-increasing": () => e.A(558782),
        "bar-chart-4": () => e.A(558782),
        "chart-column-stacked": () => e.A(120046),
        "chart-column": () => e.A(633293),
        "bar-chart-3": () => e.A(633293),
        "chart-gantt": () => e.A(867065),
        "chart-line": () => e.A(961436),
        "line-chart": () => e.A(961436),
        "chart-network": () => e.A(753143),
        "chart-no-axes-column-decreasing": () => e.A(199270),
        "chart-no-axes-column-increasing": () => e.A(441932),
        "bar-chart": () => e.A(441932),
        "chart-no-axes-column": () => e.A(819327),
        "bar-chart-2": () => e.A(819327),
        "chart-no-axes-combined": () => e.A(502303),
        "chart-no-axes-gantt": () => e.A(672334),
        "gantt-chart": () => e.A(672334),
        "chart-pie": () => e.A(139332),
        "pie-chart": () => e.A(139332),
        "chart-scatter": () => e.A(337999),
        "scatter-chart": () => e.A(337999),
        "chart-spline": () => e.A(290682),
        "check-check": () => e.A(102708),
        "check-line": () => e.A(354710),
        check: () => e.A(695208),
        "chef-hat": () => e.A(644197),
        cherry: () => e.A(411473),
        "chess-bishop": () => e.A(600120),
        "chess-king": () => e.A(266691),
        "chess-knight": () => e.A(982302),
        "chess-pawn": () => e.A(91882),
        "chess-queen": () => e.A(87307),
        "chess-rook": () => e.A(978265),
        "chevron-down": () => e.A(913688),
        "chevron-first": () => e.A(93332),
        "chevron-last": () => e.A(613613),
        "chevron-left": () => e.A(633820),
        "chevron-right": () => e.A(442220),
        "chevron-up": () => e.A(256855),
        "chevrons-down-up": () => e.A(730462),
        "chevrons-down": () => e.A(385495),
        "chevrons-left-right-ellipsis": () => e.A(757856),
        "chevrons-left-right": () => e.A(491415),
        "chevrons-left": () => e.A(390376),
        "chevrons-right-left": () => e.A(11102),
        "chevrons-right": () => e.A(834090),
        "chevrons-up-down": () => e.A(513251),
        "chevrons-up": () => e.A(394810),
        chromium: () => e.A(897669),
        chrome: () => e.A(897669),
        church: () => e.A(749159),
        "cigarette-off": () => e.A(599728),
        cigarette: () => e.A(694844),
        "circle-alert": () => e.A(46522),
        "alert-circle": () => e.A(46522),
        "circle-arrow-down": () => e.A(616403),
        "arrow-down-circle": () => e.A(616403),
        "circle-arrow-left": () => e.A(859557),
        "arrow-left-circle": () => e.A(859557),
        "circle-arrow-out-down-left": () => e.A(908388),
        "arrow-down-left-from-circle": () => e.A(908388),
        "circle-arrow-out-down-right": () => e.A(847116),
        "arrow-down-right-from-circle": () => e.A(847116),
        "circle-arrow-out-up-left": () => e.A(374795),
        "arrow-up-left-from-circle": () => e.A(374795),
        "circle-arrow-out-up-right": () => e.A(40377),
        "arrow-up-right-from-circle": () => e.A(40377),
        "circle-arrow-right": () => e.A(712270),
        "arrow-right-circle": () => e.A(712270),
        "circle-arrow-up": () => e.A(955008),
        "arrow-up-circle": () => e.A(955008),
        "circle-check-big": () => e.A(542484),
        "check-circle": () => e.A(542484),
        "circle-check": () => e.A(324603),
        "check-circle-2": () => e.A(324603),
        "circle-chevron-down": () => e.A(442263),
        "chevron-down-circle": () => e.A(442263),
        "circle-chevron-left": () => e.A(482564),
        "chevron-left-circle": () => e.A(482564),
        "circle-chevron-right": () => e.A(660263),
        "chevron-right-circle": () => e.A(660263),
        "circle-chevron-up": () => e.A(409529),
        "chevron-up-circle": () => e.A(409529),
        "circle-dashed": () => e.A(665227),
        "circle-divide": () => e.A(185907),
        "divide-circle": () => e.A(185907),
        "circle-dollar-sign": () => e.A(667478),
        "circle-dot-dashed": () => e.A(392001),
        "circle-dot": () => e.A(241111),
        "circle-ellipsis": () => e.A(415559),
        "circle-equal": () => e.A(19963),
        "circle-fading-arrow-up": () => e.A(251239),
        "circle-fading-plus": () => e.A(441873),
        "circle-gauge": () => e.A(381382),
        "gauge-circle": () => e.A(381382),
        "circle-minus": () => e.A(195133),
        "minus-circle": () => e.A(195133),
        "circle-off": () => e.A(346797),
        "circle-parking-off": () => e.A(930974),
        "parking-circle-off": () => e.A(930974),
        "circle-parking": () => e.A(434381),
        "parking-circle": () => e.A(434381),
        "circle-pause": () => e.A(144946),
        "pause-circle": () => e.A(144946),
        "circle-percent": () => e.A(598895),
        "percent-circle": () => e.A(598895),
        "circle-play": () => e.A(148974),
        "play-circle": () => e.A(148974),
        "circle-plus": () => e.A(512667),
        "plus-circle": () => e.A(512667),
        "circle-pound-sterling": () => e.A(6809),
        "circle-power": () => e.A(909375),
        "power-circle": () => e.A(909375),
        "circle-question-mark": () => e.A(7489),
        "help-circle": () => e.A(7489),
        "circle-help": () => e.A(7489),
        "circle-slash-2": () => e.A(480180),
        "circle-slashed": () => e.A(480180),
        "circle-slash": () => e.A(498359),
        "circle-small": () => e.A(487867),
        "circle-star": () => e.A(625801),
        "circle-stop": () => e.A(789186),
        "stop-circle": () => e.A(789186),
        "circle-user-round": () => e.A(68023),
        "user-circle-2": () => e.A(68023),
        "circle-user": () => e.A(47189),
        "user-circle": () => e.A(47189),
        "circle-x": () => e.A(951667),
        "x-circle": () => e.A(951667),
        circle: () => e.A(919498),
        "circuit-board": () => e.A(749265),
        citrus: () => e.A(297940),
        clapperboard: () => e.A(553125),
        "clipboard-check": () => e.A(637724),
        "clipboard-clock": () => e.A(670376),
        "clipboard-copy": () => e.A(117207),
        "clipboard-list": () => e.A(923064),
        "clipboard-minus": () => e.A(334135),
        "clipboard-paste": () => e.A(758631),
        "clipboard-pen-line": () => e.A(211527),
        "clipboard-signature": () => e.A(211527),
        "clipboard-pen": () => e.A(313153),
        "clipboard-edit": () => e.A(313153),
        "clipboard-plus": () => e.A(960288),
        "clipboard-type": () => e.A(629863),
        "clipboard-x": () => e.A(23484),
        clipboard: () => e.A(904855),
        "clock-1": () => e.A(501199),
        "clock-10": () => e.A(440843),
        "clock-11": () => e.A(743838),
        "clock-12": () => e.A(956473),
        "clock-2": () => e.A(553875),
        "clock-3": () => e.A(856955),
        "clock-4": () => e.A(296025),
        "clock-5": () => e.A(306896),
        "clock-6": () => e.A(447041),
        "clock-7": () => e.A(728295),
        "clock-8": () => e.A(948086),
        "clock-9": () => e.A(537779),
        "clock-alert": () => e.A(167991),
        "clock-arrow-down": () => e.A(204949),
        "clock-arrow-up": () => e.A(684011),
        "clock-check": () => e.A(755435),
        "clock-fading": () => e.A(865210),
        "clock-plus": () => e.A(510953),
        clock: () => e.A(461650),
        "closed-caption": () => e.A(253858),
        "cloud-alert": () => e.A(319843),
        "cloud-check": () => e.A(338288),
        "cloud-cog": () => e.A(822443),
        "cloud-download": () => e.A(132919),
        "download-cloud": () => e.A(132919),
        "cloud-drizzle": () => e.A(227673),
        "cloud-fog": () => e.A(876592),
        "cloud-hail": () => e.A(494575),
        "cloud-lightning": () => e.A(346817),
        "cloud-moon-rain": () => e.A(185954),
        "cloud-moon": () => e.A(772829),
        "cloud-off": () => e.A(75245),
        "cloud-rain-wind": () => e.A(522508),
        "cloud-rain": () => e.A(64295),
        "cloud-snow": () => e.A(584939),
        "cloud-sun-rain": () => e.A(872067),
        "cloud-sun": () => e.A(989283),
        "cloud-upload": () => e.A(784015),
        "upload-cloud": () => e.A(784015),
        cloud: () => e.A(435519),
        cloudy: () => e.A(850715),
        clover: () => e.A(469584),
        club: () => e.A(272768),
        "code-xml": () => e.A(870803),
        "code-2": () => e.A(870803),
        code: () => e.A(173566),
        codepen: () => e.A(434703),
        codesandbox: () => e.A(687058),
        coffee: () => e.A(540048),
        cog: () => e.A(391394),
        coins: () => e.A(669250),
        "columns-2": () => e.A(635562),
        columns: () => e.A(635562),
        "columns-3-cog": () => e.A(212399),
        "columns-settings": () => e.A(212399),
        "table-config": () => e.A(212399),
        "columns-3": () => e.A(447085),
        "panels-left-right": () => e.A(447085),
        "columns-4": () => e.A(861141),
        combine: () => e.A(452476),
        command: () => e.A(868356),
        compass: () => e.A(677278),
        component: () => e.A(763445),
        computer: () => e.A(35566),
        "concierge-bell": () => e.A(379068),
        cone: () => e.A(939815),
        construction: () => e.A(836900),
        "contact-round": () => e.A(436655),
        "contact-2": () => e.A(436655),
        contact: () => e.A(986172),
        container: () => e.A(622243),
        contrast: () => e.A(820711),
        cookie: () => e.A(86482),
        "cooking-pot": () => e.A(316741),
        "copy-check": () => e.A(274372),
        "copy-minus": () => e.A(456394),
        "copy-plus": () => e.A(933876),
        "copy-slash": () => e.A(492967),
        "copy-x": () => e.A(702748),
        copy: () => e.A(343533),
        copyleft: () => e.A(844901),
        copyright: () => e.A(228588),
        "corner-down-left": () => e.A(14417),
        "corner-down-right": () => e.A(474769),
        "corner-left-down": () => e.A(436342),
        "corner-left-up": () => e.A(320449),
        "corner-right-down": () => e.A(206807),
        "corner-right-up": () => e.A(959013),
        "corner-up-left": () => e.A(912332),
        "corner-up-right": () => e.A(30461),
        cpu: () => e.A(535417),
        "creative-commons": () => e.A(91338),
        "credit-card": () => e.A(918687),
        croissant: () => e.A(188868),
        crop: () => e.A(894651),
        cross: () => e.A(478508),
        crosshair: () => e.A(387116),
        crown: () => e.A(632678),
        cuboid: () => e.A(509161),
        "cup-soda": () => e.A(825229),
        currency: () => e.A(844440),
        cylinder: () => e.A(940481),
        dam: () => e.A(881127),
        "database-backup": () => e.A(800696),
        "database-zap": () => e.A(683583),
        database: () => e.A(620360),
        "decimals-arrow-left": () => e.A(380656),
        "decimals-arrow-right": () => e.A(333471),
        delete: () => e.A(627066),
        dessert: () => e.A(477525),
        diameter: () => e.A(863479),
        "diamond-minus": () => e.A(809127),
        "diamond-percent": () => e.A(489560),
        "percent-diamond": () => e.A(489560),
        "diamond-plus": () => e.A(839952),
        diamond: () => e.A(205015),
        "dice-1": () => e.A(330962),
        "dice-2": () => e.A(769986),
        "dice-3": () => e.A(46457),
        "dice-4": () => e.A(477820),
        "dice-5": () => e.A(960980),
        "dice-6": () => e.A(797026),
        dices: () => e.A(496205),
        diff: () => e.A(148778),
        "disc-2": () => e.A(569466),
        "disc-3": () => e.A(25923),
        "disc-album": () => e.A(944565),
        disc: () => e.A(865559),
        divide: () => e.A(685777),
        "dna-off": () => e.A(813429),
        dna: () => e.A(510553),
        dock: () => e.A(921622),
        dog: () => e.A(623461),
        "dollar-sign": () => e.A(331687),
        donut: () => e.A(353737),
        "door-closed-locked": () => e.A(442766),
        "door-closed": () => e.A(417926),
        "door-open": () => e.A(764771),
        dot: () => e.A(598763),
        download: () => e.A(695647),
        "drafting-compass": () => e.A(913519),
        drama: () => e.A(583358),
        dribbble: () => e.A(624052),
        drill: () => e.A(170286),
        drone: () => e.A(712841),
        "droplet-off": () => e.A(728883),
        droplet: () => e.A(482105),
        droplets: () => e.A(391308),
        drum: () => e.A(545301),
        drumstick: () => e.A(423677),
        dumbbell: () => e.A(961844),
        "ear-off": () => e.A(689021),
        ear: () => e.A(64557),
        "earth-lock": () => e.A(210686),
        earth: () => e.A(320298),
        "globe-2": () => e.A(320298),
        eclipse: () => e.A(232382),
        "egg-fried": () => e.A(521393),
        "egg-off": () => e.A(475927),
        egg: () => e.A(549629),
        "ellipsis-vertical": () => e.A(342748),
        "more-vertical": () => e.A(342748),
        ellipsis: () => e.A(654162),
        "more-horizontal": () => e.A(654162),
        "equal-approximately": () => e.A(280013),
        "equal-not": () => e.A(547006),
        equal: () => e.A(525702),
        eraser: () => e.A(673909),
        "ethernet-port": () => e.A(782757),
        euro: () => e.A(25117),
        "ev-charger": () => e.A(548488),
        expand: () => e.A(581014),
        "external-link": () => e.A(580545),
        "eye-closed": () => e.A(108256),
        "eye-off": () => e.A(44886),
        eye: () => e.A(485118),
        facebook: () => e.A(742370),
        factory: () => e.A(310396),
        fan: () => e.A(531291),
        "fast-forward": () => e.A(798477),
        feather: () => e.A(797746),
        fence: () => e.A(14250),
        "ferris-wheel": () => e.A(1064),
        figma: () => e.A(946512),
        "file-archive": () => e.A(268347),
        "file-axis-3d": () => e.A(754658),
        "file-axis-3-d": () => e.A(754658),
        "file-badge": () => e.A(65887),
        "file-badge-2": () => e.A(65887),
        "file-box": () => e.A(503474),
        "file-braces-corner": () => e.A(940939),
        "file-json-2": () => e.A(940939),
        "file-braces": () => e.A(80280),
        "file-json": () => e.A(80280),
        "file-chart-column-increasing": () => e.A(560383),
        "file-bar-chart": () => e.A(560383),
        "file-chart-column": () => e.A(76435),
        "file-bar-chart-2": () => e.A(76435),
        "file-chart-line": () => e.A(934621),
        "file-line-chart": () => e.A(934621),
        "file-chart-pie": () => e.A(574750),
        "file-pie-chart": () => e.A(574750),
        "file-check-corner": () => e.A(845291),
        "file-check-2": () => e.A(845291),
        "file-check": () => e.A(639620),
        "file-clock": () => e.A(625467),
        "file-code-corner": () => e.A(594737),
        "file-code-2": () => e.A(594737),
        "file-code": () => e.A(354872),
        "file-cog": () => e.A(367964),
        "file-cog-2": () => e.A(367964),
        "file-diff": () => e.A(365810),
        "file-digit": () => e.A(965283),
        "file-down": () => e.A(375025),
        "file-exclamation-point": () => e.A(362152),
        "file-warning": () => e.A(362152),
        "file-headphone": () => e.A(385919),
        "file-audio": () => e.A(385919),
        "file-audio-2": () => e.A(385919),
        "file-heart": () => e.A(188038),
        "file-image": () => e.A(934557),
        "file-input": () => e.A(853854),
        "file-key": () => e.A(14820),
        "file-key-2": () => e.A(14820),
        "file-lock": () => e.A(84626),
        "file-lock-2": () => e.A(84626),
        "file-minus-corner": () => e.A(489919),
        "file-minus-2": () => e.A(489919),
        "file-minus": () => e.A(844749),
        "file-music": () => e.A(277963),
        "file-output": () => e.A(800232),
        "file-pen-line": () => e.A(791828),
        "file-signature": () => e.A(791828),
        "file-pen": () => e.A(20330),
        "file-edit": () => e.A(20330),
        "file-play": () => e.A(212521),
        "file-video": () => e.A(212521),
        "file-plus-corner": () => e.A(86479),
        "file-plus-2": () => e.A(86479),
        "file-plus": () => e.A(346881),
        "file-question-mark": () => e.A(902128),
        "file-question": () => e.A(902128),
        "file-scan": () => e.A(264167),
        "file-search-corner": () => e.A(958312),
        "file-search-2": () => e.A(958312),
        "file-search": () => e.A(17181),
        "file-signal": () => e.A(201258),
        "file-volume-2": () => e.A(201258),
        "file-sliders": () => e.A(867799),
        "file-spreadsheet": () => e.A(549759),
        "file-stack": () => e.A(719087),
        "file-symlink": () => e.A(13175),
        "file-terminal": () => e.A(608963),
        "file-text": () => e.A(222763),
        "file-type-corner": () => e.A(784308),
        "file-type-2": () => e.A(784308),
        "file-type": () => e.A(143927),
        "file-up": () => e.A(616681),
        "file-user": () => e.A(385472),
        "file-video-camera": () => e.A(55793),
        "file-video-2": () => e.A(55793),
        "file-volume": () => e.A(25744),
        "file-x-corner": () => e.A(193456),
        "file-x-2": () => e.A(193456),
        "file-x": () => e.A(485399),
        file: () => e.A(906049),
        files: () => e.A(726439),
        film: () => e.A(960538),
        "fingerprint-pattern": () => e.A(632299),
        fingerprint: () => e.A(632299),
        "fire-extinguisher": () => e.A(706738),
        "fish-off": () => e.A(846378),
        "fish-symbol": () => e.A(89356),
        fish: () => e.A(672602),
        "flag-off": () => e.A(743775),
        "flag-triangle-left": () => e.A(216595),
        "flag-triangle-right": () => e.A(743427),
        flag: () => e.A(101847),
        "flame-kindling": () => e.A(722924),
        flame: () => e.A(753512),
        "flashlight-off": () => e.A(153825),
        flashlight: () => e.A(843595),
        "flask-conical-off": () => e.A(691874),
        "flask-conical": () => e.A(828390),
        "flask-round": () => e.A(335920),
        "flip-horizontal-2": () => e.A(164066),
        "flip-horizontal": () => e.A(963932),
        "flip-vertical-2": () => e.A(75733),
        "flip-vertical": () => e.A(91639),
        "flower-2": () => e.A(576324),
        flower: () => e.A(624771),
        focus: () => e.A(806296),
        "fold-horizontal": () => e.A(227349),
        "fold-vertical": () => e.A(189223),
        "folder-archive": () => e.A(252756),
        "folder-check": () => e.A(152758),
        "folder-clock": () => e.A(767955),
        "folder-closed": () => e.A(623636),
        "folder-code": () => e.A(483077),
        "folder-cog": () => e.A(417438),
        "folder-cog-2": () => e.A(417438),
        "folder-dot": () => e.A(66708),
        "folder-down": () => e.A(233355),
        "folder-git-2": () => e.A(958523),
        "folder-git": () => e.A(602755),
        "folder-heart": () => e.A(267264),
        "folder-input": () => e.A(998706),
        "folder-kanban": () => e.A(959736),
        "folder-key": () => e.A(890779),
        "folder-lock": () => e.A(40843),
        "folder-minus": () => e.A(204162),
        "folder-open-dot": () => e.A(38410),
        "folder-open": () => e.A(959557),
        "folder-output": () => e.A(805160),
        "folder-pen": () => e.A(731905),
        "folder-edit": () => e.A(731905),
        "folder-plus": () => e.A(655689),
        "folder-root": () => e.A(185021),
        "folder-search-2": () => e.A(202702),
        "folder-search": () => e.A(563021),
        "folder-symlink": () => e.A(530690),
        "folder-sync": () => e.A(12603),
        "folder-tree": () => e.A(498176),
        "folder-up": () => e.A(11564),
        "folder-x": () => e.A(306833),
        folder: () => e.A(174890),
        folders: () => e.A(359376),
        footprints: () => e.A(693654),
        forklift: () => e.A(325556),
        forward: () => e.A(628805),
        frame: () => e.A(405999),
        framer: () => e.A(438202),
        frown: () => e.A(544301),
        fuel: () => e.A(241363),
        fullscreen: () => e.A(509727),
        "funnel-plus": () => e.A(365725),
        "funnel-x": () => e.A(208199),
        "filter-x": () => e.A(208199),
        funnel: () => e.A(72036),
        filter: () => e.A(72036),
        "gallery-horizontal-end": () => e.A(222054),
        "gallery-horizontal": () => e.A(885833),
        "gallery-thumbnails": () => e.A(886119),
        "gallery-vertical-end": () => e.A(365113),
        "gallery-vertical": () => e.A(615405),
        "gamepad-2": () => e.A(536356),
        "gamepad-directional": () => e.A(934506),
        gamepad: () => e.A(572306),
        gauge: () => e.A(385074),
        gavel: () => e.A(369204),
        gem: () => e.A(265527),
        "georgian-lari": () => e.A(419043),
        ghost: () => e.A(72579),
        gift: () => e.A(973502),
        "git-branch-minus": () => e.A(81485),
        "git-branch-plus": () => e.A(933065),
        "git-branch": () => e.A(628098),
        "git-commit-horizontal": () => e.A(31019),
        "git-commit": () => e.A(31019),
        "git-commit-vertical": () => e.A(859415),
        "git-compare-arrows": () => e.A(122984),
        "git-compare": () => e.A(476626),
        "git-fork": () => e.A(90534),
        "git-graph": () => e.A(431442),
        "git-merge": () => e.A(631414),
        "git-pull-request-arrow": () => e.A(656216),
        "git-pull-request-closed": () => e.A(475369),
        "git-pull-request-create-arrow": () => e.A(232895),
        "git-pull-request-create": () => e.A(102554),
        "git-pull-request-draft": () => e.A(8739),
        "git-pull-request": () => e.A(848497),
        github: () => e.A(27738),
        gitlab: () => e.A(101653),
        "glass-water": () => e.A(628263),
        glasses: () => e.A(250603),
        "globe-lock": () => e.A(543856),
        globe: () => e.A(677282),
        goal: () => e.A(533741),
        gpu: () => e.A(892741),
        "graduation-cap": () => e.A(689169),
        grape: () => e.A(656824),
        "grid-2x2-check": () => e.A(155270),
        "grid-2-x-2-check": () => e.A(155270),
        "grid-2x2-plus": () => e.A(337154),
        "grid-2-x-2-plus": () => e.A(337154),
        "grid-2x2-x": () => e.A(820718),
        "grid-2-x-2-x": () => e.A(820718),
        "grid-2x2": () => e.A(726748),
        "grid-2-x-2": () => e.A(726748),
        "grid-3x2": () => e.A(184070),
        "grid-3x3": () => e.A(595558),
        grid: () => e.A(595558),
        "grid-3-x-3": () => e.A(595558),
        "grip-horizontal": () => e.A(695103),
        "grip-vertical": () => e.A(892055),
        grip: () => e.A(910534),
        group: () => e.A(726294),
        guitar: () => e.A(271496),
        ham: () => e.A(704595),
        hamburger: () => e.A(892953),
        hammer: () => e.A(128406),
        "hand-coins": () => e.A(287046),
        "hand-fist": () => e.A(392978),
        "hand-grab": () => e.A(851906),
        grab: () => e.A(851906),
        "hand-heart": () => e.A(835869),
        "hand-helping": () => e.A(118860),
        "helping-hand": () => e.A(118860),
        "hand-metal": () => e.A(388226),
        "hand-platter": () => e.A(318847),
        hand: () => e.A(858283),
        handbag: () => e.A(515242),
        handshake: () => e.A(912414),
        "hard-drive-download": () => e.A(302720),
        "hard-drive-upload": () => e.A(47281),
        "hard-drive": () => e.A(994724),
        "hard-hat": () => e.A(734789),
        hash: () => e.A(807956),
        "hat-glasses": () => e.A(42783),
        haze: () => e.A(320124),
        "hdmi-port": () => e.A(132984),
        "heading-1": () => e.A(747010),
        "heading-2": () => e.A(121713),
        "heading-3": () => e.A(902586),
        "heading-4": () => e.A(916235),
        "heading-5": () => e.A(885100),
        "heading-6": () => e.A(757943),
        heading: () => e.A(810867),
        "headphone-off": () => e.A(846074),
        headphones: () => e.A(685868),
        headset: () => e.A(846935),
        "heart-crack": () => e.A(743032),
        "heart-handshake": () => e.A(101967),
        "heart-minus": () => e.A(367331),
        "heart-off": () => e.A(218776),
        "heart-plus": () => e.A(379606),
        "heart-pulse": () => e.A(593321),
        heart: () => e.A(725376),
        heater: () => e.A(355810),
        helicopter: () => e.A(336936),
        hexagon: () => e.A(650285),
        highlighter: () => e.A(322208),
        history: () => e.A(608717),
        "hop-off": () => e.A(350209),
        hop: () => e.A(620625),
        hospital: () => e.A(621883),
        hotel: () => e.A(555779),
        hourglass: () => e.A(534954),
        "house-heart": () => e.A(657956),
        "house-plug": () => e.A(958566),
        "house-plus": () => e.A(537031),
        "house-wifi": () => e.A(349213),
        house: () => e.A(388671),
        home: () => e.A(388671),
        "ice-cream-bowl": () => e.A(354073),
        "ice-cream-2": () => e.A(354073),
        "ice-cream-cone": () => e.A(470808),
        "ice-cream": () => e.A(470808),
        "id-card-lanyard": () => e.A(341239),
        "id-card": () => e.A(61103),
        "image-down": () => e.A(211972),
        "image-minus": () => e.A(197505),
        "image-off": () => e.A(351543),
        "image-play": () => e.A(159584),
        "image-plus": () => e.A(159970),
        "image-up": () => e.A(973899),
        "image-upscale": () => e.A(206534),
        image: () => e.A(788691),
        images: () => e.A(796653),
        import: () => e.A(954960),
        inbox: () => e.A(620876),
        "indian-rupee": () => e.A(650360),
        infinity: () => e.A(400507),
        info: () => e.A(431098),
        "inspection-panel": () => e.A(296030),
        instagram: () => e.A(443372),
        italic: () => e.A(422945),
        "iteration-ccw": () => e.A(822602),
        "iteration-cw": () => e.A(715486),
        "japanese-yen": () => e.A(202519),
        joystick: () => e.A(233913),
        kanban: () => e.A(323479),
        kayak: () => e.A(35967),
        "key-round": () => e.A(168013),
        "key-square": () => e.A(368397),
        key: () => e.A(370182),
        "keyboard-music": () => e.A(303362),
        "keyboard-off": () => e.A(190348),
        keyboard: () => e.A(558123),
        "lamp-ceiling": () => e.A(666995),
        "lamp-desk": () => e.A(731555),
        "lamp-floor": () => e.A(389161),
        "lamp-wall-down": () => e.A(444683),
        "lamp-wall-up": () => e.A(623072),
        lamp: () => e.A(870822),
        "land-plot": () => e.A(167309),
        landmark: () => e.A(798621),
        languages: () => e.A(462554),
        "laptop-minimal-check": () => e.A(37476),
        "laptop-minimal": () => e.A(19633),
        "laptop-2": () => e.A(19633),
        laptop: () => e.A(589286),
        "lasso-select": () => e.A(499364),
        lasso: () => e.A(597265),
        laugh: () => e.A(742278),
        "layers-2": () => e.A(383085),
        layers: () => e.A(832878),
        "layers-3": () => e.A(832878),
        "layout-dashboard": () => e.A(946596),
        "layout-grid": () => e.A(27337),
        "layout-list": () => e.A(93617),
        "layout-panel-left": () => e.A(82857),
        "layout-panel-top": () => e.A(251330),
        "layout-template": () => e.A(244579),
        leaf: () => e.A(51707),
        "leafy-green": () => e.A(578139),
        lectern: () => e.A(295327),
        "library-big": () => e.A(714159),
        library: () => e.A(531169),
        "life-buoy": () => e.A(718731),
        ligature: () => e.A(14609),
        "lightbulb-off": () => e.A(320744),
        lightbulb: () => e.A(327820),
        "line-squiggle": () => e.A(286411),
        "link-2-off": () => e.A(872081),
        "link-2": () => e.A(889703),
        link: () => e.A(968619),
        linkedin: () => e.A(26112),
        "list-check": () => e.A(104113),
        "list-checks": () => e.A(255583),
        "list-chevrons-down-up": () => e.A(536050),
        "list-chevrons-up-down": () => e.A(104047),
        "list-collapse": () => e.A(997122),
        "list-end": () => e.A(341475),
        "list-filter-plus": () => e.A(935),
        "list-filter": () => e.A(741477),
        "list-indent-decrease": () => e.A(70282),
        outdent: () => e.A(70282),
        "indent-decrease": () => e.A(70282),
        "list-indent-increase": () => e.A(718086),
        indent: () => e.A(718086),
        "indent-increase": () => e.A(718086),
        "list-minus": () => e.A(220147),
        "list-music": () => e.A(912167),
        "list-ordered": () => e.A(107648),
        "list-plus": () => e.A(460005),
        "list-restart": () => e.A(784079),
        "list-start": () => e.A(302691),
        "list-todo": () => e.A(889231),
        "list-tree": () => e.A(24245),
        "list-video": () => e.A(603153),
        "list-x": () => e.A(190193),
        list: () => e.A(282582),
        "loader-circle": () => e.A(809878),
        "loader-2": () => e.A(809878),
        "loader-pinwheel": () => e.A(129908),
        loader: () => e.A(280181),
        "locate-fixed": () => e.A(388573),
        "locate-off": () => e.A(591338),
        locate: () => e.A(760452),
        "lock-keyhole-open": () => e.A(509283),
        "unlock-keyhole": () => e.A(509283),
        "lock-keyhole": () => e.A(177625),
        "lock-open": () => e.A(595314),
        unlock: () => e.A(595314),
        lock: () => e.A(258701),
        "log-in": () => e.A(262903),
        "log-out": () => e.A(532546),
        logs: () => e.A(462858),
        lollipop: () => e.A(457850),
        luggage: () => e.A(835865),
        magnet: () => e.A(332089),
        "mail-check": () => e.A(346299),
        "mail-minus": () => e.A(643523),
        "mail-open": () => e.A(321387),
        "mail-plus": () => e.A(103504),
        "mail-question-mark": () => e.A(440470),
        "mail-question": () => e.A(440470),
        "mail-search": () => e.A(237241),
        "mail-warning": () => e.A(791210),
        "mail-x": () => e.A(104234),
        mail: () => e.A(116482),
        mailbox: () => e.A(766561),
        mails: () => e.A(17091),
        "map-minus": () => e.A(571144),
        "map-pin-check-inside": () => e.A(309806),
        "map-pin-check": () => e.A(655017),
        "map-pin-house": () => e.A(101683),
        "map-pin-minus-inside": () => e.A(348491),
        "map-pin-minus": () => e.A(849067),
        "map-pin-off": () => e.A(890281),
        "map-pin-pen": () => e.A(57500),
        "location-edit": () => e.A(57500),
        "map-pin-plus-inside": () => e.A(823346),
        "map-pin-plus": () => e.A(991761),
        "map-pin-x-inside": () => e.A(141683),
        "map-pin-x": () => e.A(458249),
        "map-pin": () => e.A(829327),
        "map-pinned": () => e.A(541485),
        "map-plus": () => e.A(935089),
        map: () => e.A(866699),
        "mars-stroke": () => e.A(774081),
        mars: () => e.A(508530),
        martini: () => e.A(273721),
        "maximize-2": () => e.A(135236),
        maximize: () => e.A(110381),
        medal: () => e.A(841301),
        "megaphone-off": () => e.A(164177),
        megaphone: () => e.A(216063),
        meh: () => e.A(604333),
        "memory-stick": () => e.A(959621),
        menu: () => e.A(397015),
        merge: () => e.A(815419),
        "message-circle-code": () => e.A(193219),
        "message-circle-dashed": () => e.A(64009),
        "message-circle-heart": () => e.A(470217),
        "message-circle-more": () => e.A(916303),
        "message-circle-off": () => e.A(28484),
        "message-circle-plus": () => e.A(718836),
        "message-circle-question-mark": () => e.A(993176),
        "message-circle-question": () => e.A(993176),
        "message-circle-reply": () => e.A(214105),
        "message-circle-warning": () => e.A(955251),
        "message-circle-x": () => e.A(453262),
        "message-circle": () => e.A(297294),
        "message-square-code": () => e.A(369293),
        "message-square-dashed": () => e.A(413714),
        "message-square-diff": () => e.A(309173),
        "message-square-dot": () => e.A(900258),
        "message-square-heart": () => e.A(131922),
        "message-square-lock": () => e.A(361889),
        "message-square-more": () => e.A(65626),
        "message-square-off": () => e.A(398233),
        "message-square-plus": () => e.A(687977),
        "message-square-quote": () => e.A(53611),
        "message-square-reply": () => e.A(120991),
        "message-square-share": () => e.A(257790),
        "message-square-text": () => e.A(93391),
        "message-square-warning": () => e.A(189487),
        "message-square-x": () => e.A(263118),
        "message-square": () => e.A(911456),
        "messages-square": () => e.A(632359),
        "mic-off": () => e.A(959946),
        "mic-vocal": () => e.A(590402),
        "mic-2": () => e.A(590402),
        mic: () => e.A(103312),
        microchip: () => e.A(622502),
        microscope: () => e.A(776164),
        microwave: () => e.A(403694),
        milestone: () => e.A(169290),
        "milk-off": () => e.A(452158),
        milk: () => e.A(412037),
        "minimize-2": () => e.A(773017),
        minimize: () => e.A(124437),
        minus: () => e.A(851387),
        "monitor-check": () => e.A(108062),
        "monitor-cloud": () => e.A(226113),
        "monitor-cog": () => e.A(244363),
        "monitor-dot": () => e.A(756951),
        "monitor-down": () => e.A(589752),
        "monitor-off": () => e.A(601120),
        "monitor-pause": () => e.A(575374),
        "monitor-play": () => e.A(205078),
        "monitor-smartphone": () => e.A(417741),
        "monitor-speaker": () => e.A(652697),
        "monitor-stop": () => e.A(6465),
        "monitor-up": () => e.A(892808),
        "monitor-x": () => e.A(234463),
        monitor: () => e.A(308632),
        "moon-star": () => e.A(452798),
        moon: () => e.A(555190),
        motorbike: () => e.A(448772),
        "mountain-snow": () => e.A(636195),
        mountain: () => e.A(209237),
        "mouse-off": () => e.A(948262),
        "mouse-pointer-2-off": () => e.A(63548),
        "mouse-pointer-2": () => e.A(928490),
        "mouse-pointer-ban": () => e.A(477629),
        "mouse-pointer-click": () => e.A(497416),
        "mouse-pointer": () => e.A(697082),
        mouse: () => e.A(504810),
        "move-3d": () => e.A(952390),
        "move-3-d": () => e.A(952390),
        "move-diagonal-2": () => e.A(906454),
        "move-diagonal": () => e.A(341715),
        "move-down-left": () => e.A(116230),
        "move-down-right": () => e.A(870838),
        "move-down": () => e.A(796926),
        "move-horizontal": () => e.A(24775),
        "move-left": () => e.A(3991),
        "move-right": () => e.A(90432),
        "move-up-left": () => e.A(428001),
        "move-up-right": () => e.A(95700),
        "move-up": () => e.A(16114),
        "move-vertical": () => e.A(74102),
        move: () => e.A(69222),
        "music-2": () => e.A(902319),
        "music-3": () => e.A(134359),
        "music-4": () => e.A(882987),
        music: () => e.A(789334),
        "navigation-2-off": () => e.A(706162),
        "navigation-2": () => e.A(113858),
        "navigation-off": () => e.A(200242),
        navigation: () => e.A(324211),
        network: () => e.A(229262),
        newspaper: () => e.A(416659),
        nfc: () => e.A(426864),
        "non-binary": () => e.A(609308),
        "notebook-pen": () => e.A(329937),
        "notebook-tabs": () => e.A(874343),
        "notebook-text": () => e.A(180705),
        notebook: () => e.A(398257),
        "notepad-text-dashed": () => e.A(142128),
        "notepad-text": () => e.A(984703),
        "nut-off": () => e.A(319638),
        nut: () => e.A(728413),
        "octagon-alert": () => e.A(872274),
        "alert-octagon": () => e.A(872274),
        "octagon-minus": () => e.A(310814),
        "octagon-pause": () => e.A(558051),
        "pause-octagon": () => e.A(558051),
        "octagon-x": () => e.A(766267),
        "x-octagon": () => e.A(766267),
        octagon: () => e.A(681267),
        omega: () => e.A(798302),
        option: () => e.A(407917),
        orbit: () => e.A(947583),
        origami: () => e.A(222248),
        "package-2": () => e.A(591876),
        "package-check": () => e.A(778520),
        "package-minus": () => e.A(191643),
        "package-open": () => e.A(228298),
        "package-plus": () => e.A(316916),
        "package-search": () => e.A(204926),
        "package-x": () => e.A(410208),
        package: () => e.A(778254),
        "paint-bucket": () => e.A(515166),
        "paint-roller": () => e.A(777987),
        "paintbrush-vertical": () => e.A(587499),
        "paintbrush-2": () => e.A(587499),
        paintbrush: () => e.A(752204),
        palette: () => e.A(183247),
        panda: () => e.A(279901),
        "panel-bottom-close": () => e.A(790909),
        "panel-bottom-dashed": () => e.A(912620),
        "panel-bottom-inactive": () => e.A(912620),
        "panel-bottom-open": () => e.A(263955),
        "panel-bottom": () => e.A(621674),
        "panel-left-close": () => e.A(60948),
        "sidebar-close": () => e.A(60948),
        "panel-left-dashed": () => e.A(79386),
        "panel-left-inactive": () => e.A(79386),
        "panel-left-open": () => e.A(426035),
        "sidebar-open": () => e.A(426035),
        "panel-left-right-dashed": () => e.A(403603),
        "panel-left": () => e.A(500260),
        sidebar: () => e.A(500260),
        "panel-right-close": () => e.A(944102),
        "panel-right-dashed": () => e.A(746156),
        "panel-right-inactive": () => e.A(746156),
        "panel-right-open": () => e.A(414626),
        "panel-right": () => e.A(276374),
        "panel-top-bottom-dashed": () => e.A(380662),
        "panel-top-close": () => e.A(551215),
        "panel-top-dashed": () => e.A(154101),
        "panel-top-inactive": () => e.A(154101),
        "panel-top-open": () => e.A(646047),
        "panel-top": () => e.A(231781),
        "panels-left-bottom": () => e.A(169048),
        "panels-right-bottom": () => e.A(299010),
        "panels-top-left": () => e.A(986802),
        layout: () => e.A(986802),
        paperclip: () => e.A(449568),
        parentheses: () => e.A(599238),
        "parking-meter": () => e.A(964612),
        "party-popper": () => e.A(556596),
        pause: () => e.A(591103),
        "paw-print": () => e.A(287537),
        "pc-case": () => e.A(752300),
        "pen-line": () => e.A(340829),
        "edit-3": () => e.A(340829),
        "pen-off": () => e.A(173667),
        "pen-tool": () => e.A(439944),
        pen: () => e.A(287036),
        "edit-2": () => e.A(287036),
        "pencil-line": () => e.A(971458),
        "pencil-off": () => e.A(754683),
        "pencil-ruler": () => e.A(882542),
        pencil: () => e.A(914893),
        pentagon: () => e.A(271512),
        percent: () => e.A(343142),
        "person-standing": () => e.A(999836),
        "philippine-peso": () => e.A(681988),
        "phone-call": () => e.A(88005),
        "phone-forwarded": () => e.A(761609),
        "phone-incoming": () => e.A(293541),
        "phone-missed": () => e.A(618391),
        "phone-off": () => e.A(93312),
        "phone-outgoing": () => e.A(18986),
        phone: () => e.A(849394),
        pi: () => e.A(369648),
        piano: () => e.A(407863),
        pickaxe: () => e.A(277732),
        "picture-in-picture-2": () => e.A(883384),
        "picture-in-picture": () => e.A(58929),
        "piggy-bank": () => e.A(217416),
        "pilcrow-left": () => e.A(809813),
        "pilcrow-right": () => e.A(831904),
        pilcrow: () => e.A(146072),
        "pill-bottle": () => e.A(870158),
        pill: () => e.A(35827),
        "pin-off": () => e.A(297752),
        pin: () => e.A(585334),
        pipette: () => e.A(995030),
        pizza: () => e.A(552193),
        "plane-landing": () => e.A(853776),
        "plane-takeoff": () => e.A(816018),
        plane: () => e.A(524312),
        play: () => e.A(669249),
        "plug-2": () => e.A(622628),
        "plug-zap": () => e.A(651842),
        "plug-zap-2": () => e.A(651842),
        plug: () => e.A(247736),
        plus: () => e.A(210023),
        "pocket-knife": () => e.A(464161),
        pocket: () => e.A(348627),
        podcast: () => e.A(928512),
        "pointer-off": () => e.A(511681),
        pointer: () => e.A(769524),
        popcorn: () => e.A(877939),
        popsicle: () => e.A(818044),
        "pound-sterling": () => e.A(532122),
        "power-off": () => e.A(456960),
        power: () => e.A(583278),
        presentation: () => e.A(457161),
        "printer-check": () => e.A(321770),
        printer: () => e.A(486868),
        projector: () => e.A(784948),
        proportions: () => e.A(956615),
        puzzle: () => e.A(257175),
        pyramid: () => e.A(725133),
        "qr-code": () => e.A(501007),
        quote: () => e.A(316713),
        rabbit: () => e.A(936868),
        radar: () => e.A(337257),
        radiation: () => e.A(436926),
        radical: () => e.A(961597),
        "radio-receiver": () => e.A(971105),
        "radio-tower": () => e.A(428169),
        radio: () => e.A(78321),
        radius: () => e.A(812473),
        "rail-symbol": () => e.A(954731),
        rainbow: () => e.A(406081),
        rat: () => e.A(94692),
        ratio: () => e.A(986444),
        "receipt-cent": () => e.A(774220),
        "receipt-euro": () => e.A(735527),
        "receipt-indian-rupee": () => e.A(510936),
        "receipt-japanese-yen": () => e.A(529225),
        "receipt-pound-sterling": () => e.A(450102),
        "receipt-russian-ruble": () => e.A(663256),
        "receipt-swiss-franc": () => e.A(148376),
        "receipt-text": () => e.A(392867),
        "receipt-turkish-lira": () => e.A(46082),
        receipt: () => e.A(471690),
        "rectangle-circle": () => e.A(437513),
        "rectangle-ellipsis": () => e.A(813164),
        "form-input": () => e.A(813164),
        "rectangle-goggles": () => e.A(114045),
        "rectangle-horizontal": () => e.A(472629),
        "rectangle-vertical": () => e.A(210185),
        recycle: () => e.A(6720),
        "redo-2": () => e.A(263590),
        "redo-dot": () => e.A(653203),
        redo: () => e.A(316484),
        "refresh-ccw-dot": () => e.A(256411),
        "refresh-ccw": () => e.A(231938),
        "refresh-cw-off": () => e.A(68713),
        "refresh-cw": () => e.A(396848),
        refrigerator: () => e.A(621687),
        regex: () => e.A(700965),
        "remove-formatting": () => e.A(107556),
        "repeat-1": () => e.A(957478),
        "repeat-2": () => e.A(227279),
        repeat: () => e.A(873061),
        "replace-all": () => e.A(739776),
        replace: () => e.A(736383),
        "reply-all": () => e.A(891430),
        reply: () => e.A(879471),
        rewind: () => e.A(722219),
        ribbon: () => e.A(132761),
        rocket: () => e.A(397346),
        "rocking-chair": () => e.A(932477),
        "roller-coaster": () => e.A(791381),
        rose: () => e.A(710536),
        "rotate-3d": () => e.A(496137),
        "rotate-3-d": () => e.A(496137),
        "rotate-ccw-key": () => e.A(453255),
        "rotate-ccw-square": () => e.A(339625),
        "rotate-ccw": () => e.A(64850),
        "rotate-cw-square": () => e.A(133313),
        "rotate-cw": () => e.A(438583),
        "route-off": () => e.A(389602),
        route: () => e.A(923522),
        router: () => e.A(807980),
        "rows-2": () => e.A(569596),
        rows: () => e.A(569596),
        "rows-3": () => e.A(522471),
        "panels-top-bottom": () => e.A(522471),
        "rows-4": () => e.A(907454),
        rss: () => e.A(767427),
        "ruler-dimension-line": () => e.A(307734),
        ruler: () => e.A(344796),
        "russian-ruble": () => e.A(756779),
        sailboat: () => e.A(743408),
        salad: () => e.A(585158),
        sandwich: () => e.A(213119),
        "satellite-dish": () => e.A(735730),
        satellite: () => e.A(317703),
        "saudi-riyal": () => e.A(545114),
        "save-all": () => e.A(476211),
        "save-off": () => e.A(981726),
        save: () => e.A(473107),
        "scale-3d": () => e.A(774821),
        "scale-3-d": () => e.A(774821),
        scale: () => e.A(610367),
        scaling: () => e.A(311353),
        "scan-barcode": () => e.A(411268),
        "scan-eye": () => e.A(114283),
        "scan-face": () => e.A(967056),
        "scan-heart": () => e.A(986681),
        "scan-line": () => e.A(977807),
        "scan-qr-code": () => e.A(298326),
        "scan-search": () => e.A(276202),
        "scan-text": () => e.A(491804),
        scan: () => e.A(448101),
        school: () => e.A(29804),
        "scissors-line-dashed": () => e.A(31685),
        scissors: () => e.A(639870),
        "screen-share-off": () => e.A(87177),
        "screen-share": () => e.A(819559),
        "scroll-text": () => e.A(48949),
        scroll: () => e.A(222560),
        "search-check": () => e.A(571480),
        "search-code": () => e.A(658623),
        "search-slash": () => e.A(39476),
        "search-x": () => e.A(669519),
        search: () => e.A(587345),
        section: () => e.A(587464),
        "send-horizontal": () => e.A(391648),
        "send-horizonal": () => e.A(391648),
        "send-to-back": () => e.A(746622),
        send: () => e.A(511062),
        "separator-horizontal": () => e.A(165143),
        "separator-vertical": () => e.A(845019),
        "server-cog": () => e.A(861759),
        "server-crash": () => e.A(879403),
        "server-off": () => e.A(34793),
        server: () => e.A(515661),
        "settings-2": () => e.A(813919),
        settings: () => e.A(539957),
        shapes: () => e.A(993196),
        "share-2": () => e.A(773579),
        share: () => e.A(493145),
        sheet: () => e.A(716066),
        shell: () => e.A(818010),
        "shield-alert": () => e.A(915898),
        "shield-ban": () => e.A(446022),
        "shield-check": () => e.A(746113),
        "shield-ellipsis": () => e.A(271982),
        "shield-half": () => e.A(736018),
        "shield-minus": () => e.A(390756),
        "shield-off": () => e.A(222209),
        "shield-plus": () => e.A(581174),
        "shield-question-mark": () => e.A(331356),
        "shield-question": () => e.A(331356),
        "shield-user": () => e.A(32593),
        "shield-x": () => e.A(809223),
        "shield-close": () => e.A(809223),
        shield: () => e.A(110078),
        "ship-wheel": () => e.A(790291),
        ship: () => e.A(929061),
        shirt: () => e.A(86601),
        "shopping-bag": () => e.A(850134),
        "shopping-basket": () => e.A(689699),
        "shopping-cart": () => e.A(169978),
        shovel: () => e.A(370902),
        "shower-head": () => e.A(986618),
        shredder: () => e.A(786169),
        shrimp: () => e.A(63780),
        shrink: () => e.A(33932),
        shrub: () => e.A(512822),
        shuffle: () => e.A(928184),
        sigma: () => e.A(347602),
        "signal-high": () => e.A(829237),
        "signal-low": () => e.A(338765),
        "signal-medium": () => e.A(81293),
        "signal-zero": () => e.A(557828),
        signal: () => e.A(275437),
        signature: () => e.A(628229),
        "signpost-big": () => e.A(459296),
        signpost: () => e.A(868505),
        siren: () => e.A(241439),
        "skip-back": () => e.A(656462),
        "skip-forward": () => e.A(332732),
        skull: () => e.A(934125),
        slack: () => e.A(896848),
        slash: () => e.A(113864),
        slice: () => e.A(844323),
        "sliders-horizontal": () => e.A(755589),
        "sliders-vertical": () => e.A(405050),
        sliders: () => e.A(405050),
        "smartphone-charging": () => e.A(112094),
        "smartphone-nfc": () => e.A(852715),
        smartphone: () => e.A(186667),
        "smile-plus": () => e.A(812989),
        smile: () => e.A(42739),
        snail: () => e.A(423588),
        snowflake: () => e.A(274930),
        "soap-dispenser-droplet": () => e.A(502615),
        sofa: () => e.A(222343),
        "solar-panel": () => e.A(886646),
        soup: () => e.A(95470),
        space: () => e.A(943132),
        spade: () => e.A(211486),
        sparkle: () => e.A(787652),
        sparkles: () => e.A(864038),
        stars: () => e.A(864038),
        speaker: () => e.A(149343),
        speech: () => e.A(721341),
        "spell-check-2": () => e.A(974645),
        "spell-check": () => e.A(242606),
        "spline-pointer": () => e.A(790206),
        spline: () => e.A(188170),
        split: () => e.A(515925),
        spool: () => e.A(234834),
        spotlight: () => e.A(499369),
        "spray-can": () => e.A(921451),
        sprout: () => e.A(705808),
        "square-activity": () => e.A(316067),
        "activity-square": () => e.A(316067),
        "square-arrow-down-left": () => e.A(869668),
        "arrow-down-left-square": () => e.A(869668),
        "square-arrow-down-right": () => e.A(785197),
        "arrow-down-right-square": () => e.A(785197),
        "square-arrow-down": () => e.A(321119),
        "arrow-down-square": () => e.A(321119),
        "square-arrow-left": () => e.A(638389),
        "arrow-left-square": () => e.A(638389),
        "square-arrow-out-down-left": () => e.A(871204),
        "arrow-down-left-from-square": () => e.A(871204),
        "square-arrow-out-down-right": () => e.A(373700),
        "arrow-down-right-from-square": () => e.A(373700),
        "square-arrow-out-up-left": () => e.A(98787),
        "arrow-up-left-from-square": () => e.A(98787),
        "square-arrow-out-up-right": () => e.A(237739),
        "arrow-up-right-from-square": () => e.A(237739),
        "square-arrow-right": () => e.A(895917),
        "arrow-right-square": () => e.A(895917),
        "square-arrow-up-left": () => e.A(80960),
        "arrow-up-left-square": () => e.A(80960),
        "square-arrow-up-right": () => e.A(225358),
        "arrow-up-right-square": () => e.A(225358),
        "square-arrow-up": () => e.A(503968),
        "arrow-up-square": () => e.A(503968),
        "square-asterisk": () => e.A(26933),
        "asterisk-square": () => e.A(26933),
        "square-bottom-dashed-scissors": () => e.A(682590),
        "scissors-square-dashed-bottom": () => e.A(682590),
        "square-chart-gantt": () => e.A(812396),
        "gantt-chart-square": () => e.A(812396),
        "square-gantt-chart": () => e.A(812396),
        "square-check-big": () => e.A(472024),
        "check-square": () => e.A(472024),
        "square-check": () => e.A(348967),
        "check-square-2": () => e.A(348967),
        "square-chevron-down": () => e.A(319671),
        "chevron-down-square": () => e.A(319671),
        "square-chevron-left": () => e.A(583461),
        "chevron-left-square": () => e.A(583461),
        "square-chevron-right": () => e.A(208369),
        "chevron-right-square": () => e.A(208369),
        "square-chevron-up": () => e.A(651266),
        "chevron-up-square": () => e.A(651266),
        "square-code": () => e.A(66478),
        "code-square": () => e.A(66478),
        "square-dashed-bottom-code": () => e.A(657428),
        "square-dashed-bottom": () => e.A(254390),
        "square-dashed-kanban": () => e.A(40540),
        "kanban-square-dashed": () => e.A(40540),
        "square-dashed-mouse-pointer": () => e.A(597254),
        "mouse-pointer-square-dashed": () => e.A(597254),
        "square-dashed-top-solid": () => e.A(785275),
        "square-dashed": () => e.A(759999),
        "box-select": () => e.A(759999),
        "square-divide": () => e.A(109101),
        "divide-square": () => e.A(109101),
        "square-dot": () => e.A(273354),
        "dot-square": () => e.A(273354),
        "square-equal": () => e.A(148530),
        "equal-square": () => e.A(148530),
        "square-function": () => e.A(588588),
        "function-square": () => e.A(588588),
        "square-kanban": () => e.A(716070),
        "kanban-square": () => e.A(716070),
        "square-library": () => e.A(383322),
        "library-square": () => e.A(383322),
        "square-m": () => e.A(850822),
        "m-square": () => e.A(850822),
        "square-menu": () => e.A(551047),
        "menu-square": () => e.A(551047),
        "square-minus": () => e.A(922225),
        "minus-square": () => e.A(922225),
        "square-mouse-pointer": () => e.A(221452),
        inspect: () => e.A(221452),
        "square-parking-off": () => e.A(663327),
        "parking-square-off": () => e.A(663327),
        "square-parking": () => e.A(433267),
        "parking-square": () => e.A(433267),
        "square-pause": () => e.A(279911),
        "square-pen": () => e.A(775450),
        "pen-box": () => e.A(775450),
        edit: () => e.A(775450),
        "pen-square": () => e.A(775450),
        "square-percent": () => e.A(815998),
        "percent-square": () => e.A(815998),
        "square-pi": () => e.A(31535),
        "pi-square": () => e.A(31535),
        "square-pilcrow": () => e.A(592781),
        "pilcrow-square": () => e.A(592781),
        "square-play": () => e.A(499851),
        "play-square": () => e.A(499851),
        "square-plus": () => e.A(190195),
        "plus-square": () => e.A(190195),
        "square-power": () => e.A(230782),
        "power-square": () => e.A(230782),
        "square-radical": () => e.A(271728),
        "square-round-corner": () => e.A(161509),
        "square-scissors": () => e.A(331707),
        "scissors-square": () => e.A(331707),
        "square-sigma": () => e.A(400051),
        "sigma-square": () => e.A(400051),
        "square-slash": () => e.A(755044),
        "slash-square": () => e.A(755044),
        "square-split-horizontal": () => e.A(534506),
        "split-square-horizontal": () => e.A(534506),
        "square-split-vertical": () => e.A(872870),
        "split-square-vertical": () => e.A(872870),
        "square-square": () => e.A(220027),
        "square-stack": () => e.A(809665),
        "square-star": () => e.A(294963),
        "square-stop": () => e.A(569555),
        "square-terminal": () => e.A(926189),
        "terminal-square": () => e.A(926189),
        "square-user-round": () => e.A(481139),
        "user-square-2": () => e.A(481139),
        "square-user": () => e.A(411436),
        "user-square": () => e.A(411436),
        "square-x": () => e.A(932961),
        "x-square": () => e.A(932961),
        square: () => e.A(928067),
        "squares-exclude": () => e.A(543260),
        "squares-intersect": () => e.A(108769),
        "squares-subtract": () => e.A(492870),
        "squares-unite": () => e.A(819728),
        "squircle-dashed": () => e.A(395447),
        squircle: () => e.A(771347),
        squirrel: () => e.A(284668),
        stamp: () => e.A(67336),
        "star-half": () => e.A(761720),
        "star-off": () => e.A(222615),
        star: () => e.A(785376),
        "step-back": () => e.A(923284),
        "step-forward": () => e.A(242204),
        stethoscope: () => e.A(996606),
        sticker: () => e.A(129821),
        "sticky-note": () => e.A(818785),
        store: () => e.A(641081),
        "stretch-horizontal": () => e.A(101464),
        "stretch-vertical": () => e.A(291175),
        strikethrough: () => e.A(638095),
        subscript: () => e.A(923075),
        "sun-dim": () => e.A(13025),
        "sun-medium": () => e.A(143346),
        "sun-moon": () => e.A(187019),
        "sun-snow": () => e.A(779850),
        sun: () => e.A(766306),
        sunrise: () => e.A(425067),
        sunset: () => e.A(153067),
        superscript: () => e.A(485747),
        "swatch-book": () => e.A(891833),
        "swiss-franc": () => e.A(892645),
        "switch-camera": () => e.A(89992),
        sword: () => e.A(950378),
        swords: () => e.A(853492),
        syringe: () => e.A(402499),
        "table-2": () => e.A(879540),
        "table-cells-merge": () => e.A(459303),
        "table-cells-split": () => e.A(450321),
        "table-columns-split": () => e.A(538803),
        "table-of-contents": () => e.A(955585),
        "table-properties": () => e.A(450090),
        "table-rows-split": () => e.A(629027),
        table: () => e.A(410787),
        "tablet-smartphone": () => e.A(127513),
        tablet: () => e.A(822986),
        tablets: () => e.A(231748),
        tag: () => e.A(662536),
        tags: () => e.A(902713),
        "tally-1": () => e.A(701495),
        "tally-2": () => e.A(256341),
        "tally-3": () => e.A(667578),
        "tally-4": () => e.A(77451),
        "tally-5": () => e.A(911246),
        tangent: () => e.A(915515),
        target: () => e.A(931195),
        telescope: () => e.A(545963),
        "tent-tree": () => e.A(163466),
        tent: () => e.A(350611),
        terminal: () => e.A(50042),
        "test-tube-diagonal": () => e.A(567412),
        "test-tube-2": () => e.A(567412),
        "test-tube": () => e.A(368219),
        "test-tubes": () => e.A(472087),
        "text-align-center": () => e.A(786485),
        "align-center": () => e.A(786485),
        "text-align-end": () => e.A(249068),
        "align-right": () => e.A(249068),
        "text-align-justify": () => e.A(6689),
        "align-justify": () => e.A(6689),
        "text-align-start": () => e.A(735710),
        text: () => e.A(735710),
        "align-left": () => e.A(735710),
        "text-cursor-input": () => e.A(695323),
        "text-cursor": () => e.A(871046),
        "text-initial": () => e.A(116132),
        "letter-text": () => e.A(116132),
        "text-quote": () => e.A(201382),
        "text-search": () => e.A(86783),
        "text-select": () => e.A(95662),
        "text-selection": () => e.A(95662),
        "text-wrap": () => e.A(322142),
        "wrap-text": () => e.A(322142),
        theater: () => e.A(932306),
        "thermometer-snowflake": () => e.A(117199),
        "thermometer-sun": () => e.A(396587),
        thermometer: () => e.A(427388),
        "thumbs-down": () => e.A(255189),
        "thumbs-up": () => e.A(920278),
        "ticket-check": () => e.A(571471),
        "ticket-minus": () => e.A(28444),
        "ticket-percent": () => e.A(994468),
        "ticket-plus": () => e.A(926400),
        "ticket-slash": () => e.A(700196),
        "ticket-x": () => e.A(816436),
        ticket: () => e.A(798130),
        "tickets-plane": () => e.A(176587),
        tickets: () => e.A(940080),
        "timer-off": () => e.A(525495),
        "timer-reset": () => e.A(111620),
        timer: () => e.A(5825),
        "toggle-left": () => e.A(554818),
        "toggle-right": () => e.A(785225),
        toilet: () => e.A(911108),
        "tool-case": () => e.A(248565),
        tornado: () => e.A(189918),
        torus: () => e.A(443904),
        "touchpad-off": () => e.A(246275),
        touchpad: () => e.A(110291),
        "tower-control": () => e.A(660423),
        "toy-brick": () => e.A(992314),
        tractor: () => e.A(431200),
        "traffic-cone": () => e.A(703874),
        "train-front-tunnel": () => e.A(795294),
        "train-front": () => e.A(40185),
        "train-track": () => e.A(878658),
        "tram-front": () => e.A(104455),
        train: () => e.A(104455),
        transgender: () => e.A(683124),
        "trash-2": () => e.A(650244),
        trash: () => e.A(39715),
        "tree-deciduous": () => e.A(424771),
        "tree-palm": () => e.A(272155),
        palmtree: () => e.A(272155),
        "tree-pine": () => e.A(565044),
        trees: () => e.A(919562),
        trello: () => e.A(561645),
        "trending-down": () => e.A(184005),
        "trending-up-down": () => e.A(457896),
        "trending-up": () => e.A(274356),
        "triangle-alert": () => e.A(161159),
        "alert-triangle": () => e.A(161159),
        "triangle-dashed": () => e.A(901594),
        "triangle-right": () => e.A(544675),
        triangle: () => e.A(991742),
        trophy: () => e.A(307797),
        "truck-electric": () => e.A(837995),
        truck: () => e.A(522065),
        "turkish-lira": () => e.A(337497),
        turntable: () => e.A(767049),
        turtle: () => e.A(837160),
        "tv-minimal-play": () => e.A(296371),
        "tv-minimal": () => e.A(504940),
        "tv-2": () => e.A(504940),
        tv: () => e.A(653519),
        twitch: () => e.A(646256),
        twitter: () => e.A(4214),
        "type-outline": () => e.A(227312),
        type: () => e.A(915218),
        "umbrella-off": () => e.A(21402),
        umbrella: () => e.A(606221),
        underline: () => e.A(992686),
        "undo-2": () => e.A(586337),
        "undo-dot": () => e.A(667213),
        undo: () => e.A(909107),
        "unfold-horizontal": () => e.A(359368),
        "unfold-vertical": () => e.A(124365),
        ungroup: () => e.A(206894),
        university: () => e.A(549844),
        "school-2": () => e.A(549844),
        "unlink-2": () => e.A(94896),
        unlink: () => e.A(21251),
        unplug: () => e.A(153828),
        upload: () => e.A(640792),
        usb: () => e.A(226552),
        "user-check": () => e.A(517619),
        "user-cog": () => e.A(49068),
        "user-lock": () => e.A(460262),
        "user-minus": () => e.A(59564),
        "user-pen": () => e.A(583522),
        "user-plus": () => e.A(73998),
        "user-round-check": () => e.A(840634),
        "user-check-2": () => e.A(840634),
        "user-round-cog": () => e.A(12422),
        "user-cog-2": () => e.A(12422),
        "user-round-minus": () => e.A(157546),
        "user-minus-2": () => e.A(157546),
        "user-round-pen": () => e.A(236300),
        "user-round-plus": () => e.A(811581),
        "user-plus-2": () => e.A(811581),
        "user-round-search": () => e.A(550117),
        "user-round-x": () => e.A(299403),
        "user-x-2": () => e.A(299403),
        "user-round": () => e.A(409479),
        "user-2": () => e.A(409479),
        "user-search": () => e.A(354429),
        "user-star": () => e.A(865541),
        "user-x": () => e.A(422047),
        user: () => e.A(148977),
        "users-round": () => e.A(80282),
        "users-2": () => e.A(80282),
        users: () => e.A(651346),
        "utensils-crossed": () => e.A(500403),
        "fork-knife-crossed": () => e.A(500403),
        utensils: () => e.A(499974),
        "fork-knife": () => e.A(499974),
        "utility-pole": () => e.A(850452),
        variable: () => e.A(586161),
        vault: () => e.A(885933),
        "vector-square": () => e.A(434009),
        vegan: () => e.A(32720),
        "venetian-mask": () => e.A(729065),
        "venus-and-mars": () => e.A(206973),
        venus: () => e.A(240305),
        "vibrate-off": () => e.A(255990),
        vibrate: () => e.A(784112),
        "video-off": () => e.A(100537),
        video: () => e.A(551144),
        videotape: () => e.A(411079),
        view: () => e.A(533934),
        voicemail: () => e.A(96766),
        volleyball: () => e.A(534779),
        "volume-1": () => e.A(515621),
        "volume-2": () => e.A(57052),
        "volume-off": () => e.A(624229),
        "volume-x": () => e.A(214647),
        volume: () => e.A(611126),
        vote: () => e.A(976012),
        "wallet-cards": () => e.A(29851),
        "wallet-minimal": () => e.A(986343),
        "wallet-2": () => e.A(986343),
        wallet: () => e.A(768691),
        wallpaper: () => e.A(602486),
        "wand-sparkles": () => e.A(67700),
        "wand-2": () => e.A(67700),
        wand: () => e.A(42158),
        warehouse: () => e.A(570391),
        "washing-machine": () => e.A(595299),
        watch: () => e.A(940012),
        "waves-ladder": () => e.A(826932),
        waves: () => e.A(113520),
        waypoints: () => e.A(79834),
        webcam: () => e.A(246356),
        "webhook-off": () => e.A(596985),
        webhook: () => e.A(797450),
        weight: () => e.A(116733),
        "wheat-off": () => e.A(982083),
        wheat: () => e.A(238885),
        "whole-word": () => e.A(277478),
        "wifi-cog": () => e.A(674081),
        "wifi-high": () => e.A(34280),
        "wifi-low": () => e.A(746945),
        "wifi-off": () => e.A(215191),
        "wifi-pen": () => e.A(710778),
        "wifi-sync": () => e.A(524520),
        "wifi-zero": () => e.A(569054),
        wifi: () => e.A(275659),
        "wind-arrow-down": () => e.A(412738),
        wind: () => e.A(955838),
        "wine-off": () => e.A(446231),
        wine: () => e.A(747542),
        workflow: () => e.A(581498),
        worm: () => e.A(144248),
        wrench: () => e.A(982857),
        x: () => e.A(345051),
        youtube: () => e.A(26434),
        "zap-off": () => e.A(325588),
        zap: () => e.A(95763),
        "zoom-in": () => e.A(913052),
        "zoom-out": () => e.A(955755)
    };
    var ev = e.i(258541);
    async function ey(e) {
        if (!(e in eg)) throw Error("[lucide-react]: Name in Lucide DynamicIcon not found");
        return (await eg[e]()).__iconNode
    }
    Object.keys(eg);
    let eb = (0, i.forwardRef)(({
        name: e,
        fallback: t,
        ...r
    }, n) => {
        let [s, a] = (0, i.useState)();
        return ((0, i.useEffect)(() => {
            ey(e).then(a).catch(e => {
                console.error(e)
            })
        }, [e]), null == s) ? null == t ? null : (0, i.createElement)(t) : (0, i.createElement)(ev.default, {
            ref: n,
            ...r,
            iconNode: s
        })
    });
    var ex = e.i(522016);

    function ew() {
        return (0, t.jsx)("section", {
            id: "faqs",
            className: "bg-muted dark:bg-background py-20",
            children: (0, t.jsx)("div", {
                className: "mx-auto max-w-5xl px-4 md:px-6",
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col gap-10 md:flex-row md:gap-16",
                    children: [(0, t.jsx)("div", {
                        className: "md:w-1/3",
                        children: (0, t.jsxs)("div", {
                            className: "sticky top-20",
                            children: [(0, t.jsx)("h2", {
                                className: "mt-4 text-3xl font-bold",
                                children: "Frequently Asked Questions"
                            }), (0, t.jsxs)("p", {
                                className: "text-muted-foreground mt-4",
                                children: ["Can't find what you're looking for? Contact our", " ", (0, t.jsx)(ex.default, {
                                    href: "#contact",
                                    onClick: e => {
                                        e.preventDefault();
                                        let t = document.querySelector("#contact");
                                        t && t.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start"
                                        })
                                    },
                                    className: "text-primary font-medium hover:underline",
                                    children: "customer support team"
                                })]
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "md:w-2/3",
                        children: (0, t.jsx)(ep, {
                            type: "single",
                            collapsible: !0,
                            className: "w-full space-y-2",
                            children: [{
                                id: "item-1",
                                icon: "clock",
                                question: "What are your business hours?",
                                answer: "Our development and support team is available Monday through Friday from 9:00 AM to 8:00 PM EST. We also offer flexible consultation hours for international clients. Emergency support requests can be scheduled outside regular hours on demand."
                            }, {
                                id: "item-2",
                                icon: "credit-card",
                                question: "How do project payments work?",
                                answer: "We typically work on milestone-based payments or monthly retainers depending on project scope. Payment schedules are agreed upon in advance, and clients can make payments securely via credit card, bank transfer, or online payment gateways."
                            }, {
                                id: "item-3",
                                icon: "truck",
                                question: "How long does it take to complete a project?",
                                answer: "Project timelines vary depending on complexity and scope. Small projects can take 2–4 weeks, while larger custom solutions may take several months. We provide a detailed project plan and timeline during the proposal stage and keep clients updated throughout development."
                            }, {
                                id: "item-4",
                                icon: "globe",
                                question: "Do you offer global or remote support?",
                                answer: "Yes, we provide support and consultations for clients worldwide. Our team communicates via email, video calls, and chat, and we adjust working hours to accommodate clients in different time zones whenever possible."
                            }, {
                                id: "item-5",
                                icon: "package",
                                question: "How do I track project progress?",
                                answer: "Clients have access to a project management dashboard where they can track milestones, deliverables, and progress in real time. Regular status updates are also provided via email or video meetings according to the agreed schedule."
                            }].map(e => (0, t.jsxs)(em, {
                                value: e.id,
                                className: "bg-background shadow-xs rounded-lg border px-4 last:border-b",
                                children: [(0, t.jsx)(ef, {
                                    className: "cursor-pointer items-center py-5 hover:no-underline",
                                    children: (0, t.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, t.jsx)("div", {
                                            className: "flex size-6",
                                            children: (0, t.jsx)(eb, {
                                                name: e.icon,
                                                className: "m-auto size-4"
                                            })
                                        }), (0, t.jsx)("span", {
                                            className: "text-base",
                                            children: e.question
                                        })]
                                    })
                                }), (0, t.jsx)(eA, {
                                    className: "pb-5",
                                    children: (0, t.jsx)("div", {
                                        className: "px-9",
                                        children: (0, t.jsx)("p", {
                                            className: "text-base",
                                            children: e.answer
                                        })
                                    })
                                })]
                            }, e.id))
                        })
                    })]
                })
            })
        })
    }
    e.s(["default", () => ew], 39045)
}, 876841, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(522016);
    let r = [{
        title: "Features",
        href: "#technologies"
    }, {
        title: "Projects",
        href: "#projects"
    }, {
        title: "Testimonials",
        href: "#testimonials"
    }, {
        title: "Pricing",
        href: "#pricing"
    }, {
        title: "Help",
        href: "#contact"
    }, {
        title: "About",
        href: "#stats"
    }];

    function n() {
        return (0, t.jsx)("footer", {
            className: "py-16 md:py-32",
            children: (0, t.jsxs)("div", {
                className: "mx-auto max-w-5xl px-6",
                children: [(0, t.jsx)(i.default, {
                    href: "/",
                    "aria-label": "go home",
                    className: "mx-auto block size-fit",
                    children: (0, t.jsx)("span", {
                        className: "font-semibold text-xl text-white",
                        children: "Altreon"
                    })
                }), (0, t.jsx)("div", {
                    className: "my-8 flex flex-wrap justify-center gap-6 text-sm",
                    children: r.map((e, r) => (0, t.jsx)(i.default, {
                        href: e.href,
                        onClick: t => {
                            t.preventDefault();
                            let i = document.querySelector(e.href);
                            i && i.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })
                        },
                        className: "text-muted-foreground hover:text-primary block duration-150",
                        children: (0, t.jsx)("span", {
                            children: e.title
                        })
                    }, r))
                }), (0, t.jsxs)("div", {
                    className: "my-8 flex flex-wrap justify-center gap-6 text-sm",
                    children: [(0, t.jsx)(i.default, {
                        href: "https://x.com/AltreonTech",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "X/Twitter",
                        className: "text-muted-foreground hover:text-primary block",
                        children: (0, t.jsx)("svg", {
                            className: "size-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                            })
                        })
                    }), (0, t.jsx)(i.default, {
                        href: "https://www.linkedin.com/in/altreon-tech-0112a2395/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "LinkedIn",
                        className: "text-muted-foreground hover:text-primary block",
                        children: (0, t.jsx)("svg", {
                            className: "size-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                            })
                        })
                    }), (0, t.jsx)(i.default, {
                        href: "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Facebook",
                        className: "text-muted-foreground hover:text-primary block",
                        children: (0, t.jsx)("svg", {
                            className: "size-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                            })
                        })
                    }), (0, t.jsx)(i.default, {
                        href: "https://www.instagram.com/altreon_tech/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Instagram",
                        className: "text-muted-foreground hover:text-primary block",
                        children: (0, t.jsx)("svg", {
                            className: "size-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                            })
                        })
                    })]
                }), (0, t.jsxs)("span", {
                    className: "text-muted-foreground block text-center text-sm",
                    children: [" ", "© ", new Date().getFullYear(), " AltreonTech, All rights reserved"]
                })]
            })
        })
    }
    e.s(["default", () => n])
}, 231178, 947414, 674008, 821476, 772846, 737806, 464978, 846932, e => {
    "use strict";
    let t, i, r;
    var n, s = e.i(271645);
    let a = (0, s.createContext)({});

    function o(e) {
        let t = (0, s.useRef)(null);
        return null === t.current && (t.current = e()), t.current
    }
    e.s(["LayoutGroupContext", () => a], 231178), e.s(["useConstant", () => o], 947414);
    let l = "undefined" != typeof window,
        u = l ? s.useLayoutEffect : s.useEffect;
    e.s(["useIsomorphicLayoutEffect", () => u], 674008);
    let c = (0, s.createContext)(null);

    function d(e) {
        return "object" == typeof e && null !== e
    }

    function h(e) {
        return d(e) && "offsetHeight" in e
    }
    e.s(["PresenceContext", () => c], 821476), e.s(["isHTMLElement", () => h], 772846);
    let p = (0, s.createContext)({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });

    function m(e = !0) {
        let t = (0, s.useContext)(c);
        if (null === t) return [!0, null];
        let {
            isPresent: i,
            onExitComplete: r,
            register: n
        } = t, a = (0, s.useId)();
        (0, s.useEffect)(() => {
            if (e) return n(a)
        }, [e]);
        let o = (0, s.useCallback)(() => e && r && r(a), [a, r, e]);
        return !i && r ? [!1, o] : [!0]
    }
    e.s(["MotionConfigContext", () => p], 737806), e.s(["usePresence", () => m], 464978);
    let f = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        A = new Set(f),
        g = e => 180 * e / Math.PI,
        v = e => b(g(Math.atan2(e[1], e[0]))),
        y = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
            rotate: v,
            rotateZ: v,
            skewX: e => g(Math.atan(e[1])),
            skewY: e => g(Math.atan(e[2])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
        },
        b = e => ((e %= 360) < 0 && (e += 360), e),
        x = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        w = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        k = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: x,
            scaleY: w,
            scale: e => (x(e) + w(e)) / 2,
            rotateX: e => b(g(Math.atan2(e[6], e[5]))),
            rotateY: e => b(g(Math.atan2(-e[2], e[0]))),
            rotateZ: v,
            rotate: v,
            skewX: e => g(Math.atan(e[4])),
            skewY: e => g(Math.atan(e[1])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
        };

    function T(e) {
        return +!!e.includes("scale")
    }

    function P(e, t) {
        let i, r;
        if (!e || "none" === e) return T(t);
        let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) i = k, r = n;
        else {
            let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = y, r = t
        }
        if (!r) return T(t);
        let s = i[t],
            a = r[1].split(",").map(S);
        return "function" == typeof s ? s(a) : a[s]
    }

    function S(e) {
        return parseFloat(e.trim())
    }
    let j = e => t => "string" == typeof t && t.startsWith(e),
        C = j("--"),
        E = j("var(--"),
        M = e => !!E(e) && R.test(e.split("/*")[0].trim()),
        R = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

    function V({
        top: e,
        left: t,
        right: i,
        bottom: r
    }) {
        return {
            x: {
                min: t,
                max: i
            },
            y: {
                min: e,
                max: r
            }
        }
    }
    let N = (e, t, i) => e + (t - e) * i;

    function D(e) {
        return void 0 === e || 1 === e
    }

    function q({
        scale: e,
        scaleX: t,
        scaleY: i
    }) {
        return !D(e) || !D(t) || !D(i)
    }

    function L(e) {
        return q(e) || O(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function O(e) {
        var t, i;
        return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
    }

    function F(e, t, i, r, n) {
        return void 0 !== n && (e = r + n * (e - r)), r + i * (e - r) + t
    }

    function I(e, t = 0, i = 1, r, n) {
        e.min = F(e.min, t, i, r, n), e.max = F(e.max, t, i, r, n)
    }

    function z(e, {
        x: t,
        y: i
    }) {
        I(e.x, t.translate, t.scale, t.originPoint), I(e.y, i.translate, i.scale, i.originPoint)
    }

    function B(e, t) {
        e.min = e.min + t, e.max = e.max + t
    }

    function $(e, t, i, r, n = .5) {
        let s = N(e.min, e.max, n);
        I(e, t, i, s, r)
    }

    function U(e, t) {
        $(e.x, t.x, t.scaleX, t.scale, t.originX), $(e.y, t.y, t.scaleY, t.scale, t.originY)
    }

    function W(e, t) {
        return V(function(e, t) {
            if (!t) return e;
            let i = t({
                    x: e.left,
                    y: e.top
                }),
                r = t({
                    x: e.right,
                    y: e.bottom
                });
            return {
                top: i.y,
                left: i.x,
                bottom: r.y,
                right: r.x
            }
        }(e.getBoundingClientRect(), t))
    }
    let _ = new Set(["width", "height", "top", "left", "right", "bottom", ...f]),
        H = (e, t, i) => i > t ? t : i < e ? e : i,
        Y = {
            test: e => "number" == typeof e,
            parse: parseFloat,
            transform: e => e
        },
        X = { ...Y,
            transform: e => H(0, 1, e)
        },
        K = { ...Y,
            default: 1
        },
        G = e => ({
            test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => `${t}${e}`
        }),
        Z = G("deg"),
        J = G("%"),
        Q = G("px"),
        ee = G("vh"),
        et = G("vw"),
        ei = { ...J,
            parse: e => J.parse(e) / 100,
            transform: e => J.transform(100 * e)
        },
        er = e => t => t.test(e),
        en = [Y, Q, J, Z, et, ee, {
            test: e => "auto" === e,
            parse: e => e
        }],
        es = e => en.find(er(e));
    e.i(247167);
    let ea = () => {},
        eo = () => {},
        el = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eu = e => e === Y || e === Q,
        ec = new Set(["x", "y", "z"]),
        ed = f.filter(e => !ec.has(e)),
        eh = {
            width: ({
                x: e
            }, {
                paddingLeft: t = "0",
                paddingRight: i = "0"
            }) => e.max - e.min - parseFloat(t) - parseFloat(i),
            height: ({
                y: e
            }, {
                paddingTop: t = "0",
                paddingBottom: i = "0"
            }) => e.max - e.min - parseFloat(t) - parseFloat(i),
            top: (e, {
                top: t
            }) => parseFloat(t),
            left: (e, {
                left: t
            }) => parseFloat(t),
            bottom: ({
                y: e
            }, {
                top: t
            }) => parseFloat(t) + (e.max - e.min),
            right: ({
                x: e
            }, {
                left: t
            }) => parseFloat(t) + (e.max - e.min),
            x: (e, {
                transform: t
            }) => P(t, "x"),
            y: (e, {
                transform: t
            }) => P(t, "y")
        };
    eh.translateX = eh.x, eh.translateY = eh.y;
    let ep = e => e,
        em = {},
        ef = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

    function eA(e, t) {
        let i = !1,
            r = !0,
            n = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            s = () => i = !0,
            a = ef.reduce((e, i) => (e[i] = function(e, t) {
                let i = new Set,
                    r = new Set,
                    n = !1,
                    s = !1,
                    a = new WeakSet,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = 0;

                function u(t) {
                    a.has(t) && (c.schedule(t), e()), l++, t(o)
                }
                let c = {
                    schedule: (e, t = !1, s = !1) => {
                        let o = s && n ? i : r;
                        return t && a.add(e), o.has(e) || o.add(e), e
                    },
                    cancel: e => {
                        r.delete(e), a.delete(e)
                    },
                    process: e => {
                        if (o = e, n) {
                            s = !0;
                            return
                        }
                        n = !0, [i, r] = [r, i], i.forEach(u), t, l = 0, i.clear(), n = !1, s && (s = !1, c.process(e))
                    }
                };
                return c
            }(s, t ? i : void 0), e), {}),
            {
                setup: o,
                read: l,
                resolveKeyframes: u,
                preUpdate: c,
                update: d,
                preRender: h,
                render: p,
                postRender: m
            } = a,
            f = () => {
                let s = em.useManualTiming ? n.timestamp : performance.now();
                i = !1, em.useManualTiming || (n.delta = r ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, 40), 1)), n.timestamp = s, n.isProcessing = !0, o.process(n), l.process(n), u.process(n), c.process(n), d.process(n), h.process(n), p.process(n), m.process(n), n.isProcessing = !1, i && t && (r = !1, e(f))
            };
        return {
            schedule: ef.reduce((t, s) => {
                let o = a[s];
                return t[s] = (t, s = !1, a = !1) => (!i && (i = !0, r = !0, n.isProcessing || e(f)), o.schedule(t, s, a)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < ef.length; t++) a[ef[t]].cancel(e)
            },
            state: n,
            steps: a
        }
    }
    let {
        schedule: eg,
        cancel: ev,
        state: ey,
        steps: eb
    } = eA("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : ep, !0), ex = new Set, ew = !1, ek = !1, eT = !1;

    function eP() {
        if (ek) {
            let e = Array.from(ex).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                i = new Map;
            t.forEach(e => {
                let t, r = (t = [], ed.forEach(i => {
                    let r = e.getValue(i);
                    void 0 !== r && (t.push([i, r.get()]), r.set(+!!i.startsWith("scale")))
                }), t);
                r.length && (i.set(e, r), e.render())
            }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
                e.render();
                let t = i.get(e);
                t && t.forEach(([t, i]) => {
                    e.getValue(t) ? .set(i)
                })
            }), e.forEach(e => e.measureEndState()), e.forEach(e => {
                void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
            })
        }
        ek = !1, ew = !1, ex.forEach(e => e.complete(eT)), ex.clear()
    }

    function eS() {
        ex.forEach(e => {
            e.readKeyframes(), e.needsMeasurement && (ek = !0)
        })
    }
    class ej {
        constructor(e, t, i, r, n, s = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = i, this.motionValue = r, this.element = n, this.isAsync = s
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (ex.add(this), ew || (ew = !0, eg.read(eS), eg.resolveKeyframes(eP))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t,
                element: i,
                motionValue: r
            } = this;
            if (null === e[0]) {
                let n = r ? .get(),
                    s = e[e.length - 1];
                if (void 0 !== n) e[0] = n;
                else if (i && t) {
                    let r = i.readValue(t, s);
                    null != r && (e[0] = r)
                }
                void 0 === e[0] && (e[0] = s), r && void 0 === n && r.set(e[0])
            }
            for (let t = 1; t < e.length; t++) e[t] ? ? (e[t] = e[t - 1])
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), ex.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (ex.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    let eC = e => Math.round(1e5 * e) / 1e5,
        eE = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        eM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        eR = (e, t) => i => !!("string" == typeof i && eM.test(i) && i.startsWith(e) || t && null != i && Object.prototype.hasOwnProperty.call(i, t)),
        eV = (e, t, i) => r => {
            if ("string" != typeof r) return r;
            let [n, s, a, o] = r.match(eE);
            return {
                [e]: parseFloat(n),
                [t]: parseFloat(s),
                [i]: parseFloat(a),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        },
        eN = { ...Y,
            transform: e => Math.round(H(0, 255, e))
        },
        eD = {
            test: eR("rgb", "red"),
            parse: eV("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: i,
                alpha: r = 1
            }) => "rgba(" + eN.transform(e) + ", " + eN.transform(t) + ", " + eN.transform(i) + ", " + eC(X.transform(r)) + ")"
        },
        eq = {
            test: eR("#"),
            parse: function(e) {
                let t = "",
                    i = "",
                    r = "",
                    n = "";
                return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), r = e.substring(5, 7), n = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), r = e.substring(3, 4), n = e.substring(4, 5), t += t, i += i, r += r, n += n), {
                    red: parseInt(t, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(r, 16),
                    alpha: n ? parseInt(n, 16) / 255 : 1
                }
            },
            transform: eD.transform
        },
        eL = {
            test: eR("hsl", "hue"),
            parse: eV("hue", "saturation", "lightness"),
            transform: ({
                hue: e,
                saturation: t,
                lightness: i,
                alpha: r = 1
            }) => "hsla(" + Math.round(e) + ", " + J.transform(eC(t)) + ", " + J.transform(eC(i)) + ", " + eC(X.transform(r)) + ")"
        },
        eO = {
            test: e => eD.test(e) || eq.test(e) || eL.test(e),
            parse: e => eD.test(e) ? eD.parse(e) : eL.test(e) ? eL.parse(e) : eq.parse(e),
            transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? eD.transform(e) : eL.transform(e),
            getAnimatableNone: e => {
                let t = eO.parse(e);
                return t.alpha = 0, eO.transform(t)
            }
        },
        eF = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        eI = "number",
        ez = "color",
        eB = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function e$(e) {
        let t = e.toString(),
            i = [],
            r = {
                color: [],
                number: [],
                var: []
            },
            n = [],
            s = 0,
            a = t.replace(eB, e => (eO.test(e) ? (r.color.push(s), n.push(ez), i.push(eO.parse(e))) : e.startsWith("var(") ? (r.var.push(s), n.push("var"), i.push(e)) : (r.number.push(s), n.push(eI), i.push(parseFloat(e))), ++s, "${}")).split("${}");
        return {
            values: i,
            split: a,
            indexes: r,
            types: n
        }
    }

    function eU(e) {
        return e$(e).values
    }

    function eW(e) {
        let {
            split: t,
            types: i
        } = e$(e), r = t.length;
        return e => {
            let n = "";
            for (let s = 0; s < r; s++)
                if (n += t[s], void 0 !== e[s]) {
                    let t = i[s];
                    t === eI ? n += eC(e[s]) : t === ez ? n += eO.transform(e[s]) : n += e[s]
                }
            return n
        }
    }
    let e_ = e => "number" == typeof e ? 0 : eO.test(e) ? eO.getAnimatableNone(e) : e,
        eH = {
            test: function(e) {
                return isNaN(e) && "string" == typeof e && (e.match(eE) ? .length || 0) + (e.match(eF) ? .length || 0) > 0
            },
            parse: eU,
            createTransformer: eW,
            getAnimatableNone: function(e) {
                let t = eU(e);
                return eW(e)(t.map(e_))
            }
        },
        eY = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function eX(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = i.match(eE) || [];
        if (!r) return e;
        let n = i.replace(r, ""),
            s = +!!eY.has(t);
        return r !== i && (s *= 100), t + "(" + s + n + ")"
    }
    let eK = /\b([a-z-]*)\(.*?\)/gu,
        eG = { ...eH,
            getAnimatableNone: e => {
                let t = e.match(eK);
                return t ? t.map(eX).join(" ") : e
            }
        },
        eZ = { ...Y,
            transform: Math.round
        },
        eJ = {
            borderWidth: Q,
            borderTopWidth: Q,
            borderRightWidth: Q,
            borderBottomWidth: Q,
            borderLeftWidth: Q,
            borderRadius: Q,
            radius: Q,
            borderTopLeftRadius: Q,
            borderTopRightRadius: Q,
            borderBottomRightRadius: Q,
            borderBottomLeftRadius: Q,
            width: Q,
            maxWidth: Q,
            height: Q,
            maxHeight: Q,
            top: Q,
            right: Q,
            bottom: Q,
            left: Q,
            padding: Q,
            paddingTop: Q,
            paddingRight: Q,
            paddingBottom: Q,
            paddingLeft: Q,
            margin: Q,
            marginTop: Q,
            marginRight: Q,
            marginBottom: Q,
            marginLeft: Q,
            backgroundPositionX: Q,
            backgroundPositionY: Q,
            rotate: Z,
            rotateX: Z,
            rotateY: Z,
            rotateZ: Z,
            scale: K,
            scaleX: K,
            scaleY: K,
            scaleZ: K,
            skew: Z,
            skewX: Z,
            skewY: Z,
            distance: Q,
            translateX: Q,
            translateY: Q,
            translateZ: Q,
            x: Q,
            y: Q,
            z: Q,
            perspective: Q,
            transformPerspective: Q,
            opacity: X,
            originX: ei,
            originY: ei,
            originZ: Q,
            zIndex: eZ,
            fillOpacity: X,
            strokeOpacity: X,
            numOctaves: eZ
        },
        eQ = { ...eJ,
            color: eO,
            backgroundColor: eO,
            outlineColor: eO,
            fill: eO,
            stroke: eO,
            borderColor: eO,
            borderTopColor: eO,
            borderRightColor: eO,
            borderBottomColor: eO,
            borderLeftColor: eO,
            filter: eG,
            WebkitFilter: eG
        },
        e0 = e => eQ[e];

    function e1(e, t) {
        let i = e0(e);
        return i !== eG && (i = eH), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
    }
    let e2 = new Set(["auto", "none", "0"]);
    class e5 extends ej {
        constructor(e, t, i, r, n) {
            super(e, t, i, r, n, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                element: t,
                name: i
            } = this;
            if (!t || !t.current) return;
            super.readKeyframes();
            for (let i = 0; i < e.length; i++) {
                let r = e[i];
                if ("string" == typeof r && M(r = r.trim())) {
                    let n = function e(t, i, r = 1) {
                        eo(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                        let [n, s] = function(e) {
                            let t = el.exec(e);
                            if (!t) return [, ];
                            let [, i, r, n] = t;
                            return [`--${i??r}`, n]
                        }(t);
                        if (!n) return;
                        let a = window.getComputedStyle(i).getPropertyValue(n);
                        if (a) {
                            let e = a.trim();
                            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e) ? parseFloat(e) : e
                        }
                        return M(s) ? e(s, i, r + 1) : s
                    }(r, t.current);
                    void 0 !== n && (e[i] = n), i === e.length - 1 && (this.finalKeyframe = r)
                }
            }
            if (this.resolveNoneKeyframes(), !_.has(i) || 2 !== e.length) return;
            let [r, n] = e, s = es(r), a = es(n);
            if (s !== a)
                if (eu(s) && eu(a))
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        "string" == typeof i && (e[t] = parseFloat(i))
                    } else eh[i] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this, i = [];
            for (let t = 0; t < e.length; t++)(null === e[t] || function(e) {
                if ("number" == typeof e) return 0 === e;
                if (null === e) return !0;
                return "none" === e || "0" === e || /^0[^.\s]+$/u.test(e)
            }(e[t])) && i.push(t);
            i.length && function(e, t, i) {
                let r, n = 0;
                for (; n < e.length && !r;) {
                    let t = e[n];
                    "string" == typeof t && !e2.has(t) && e$(t).values.length && (r = e[n]), n++
                }
                if (r && i)
                    for (let n of t) e[n] = e1(i, r)
            }(e, i, t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: i
            } = this;
            if (!e || !e.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = eh[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            let r = t[t.length - 1];
            void 0 !== r && e.getValue(i, r).jump(r, !1)
        }
        measureEndState() {
            let {
                element: e,
                name: t,
                unresolvedKeyframes: i
            } = this;
            if (!e || !e.current) return;
            let r = e.getValue(t);
            r && r.jump(this.measuredOrigin, !1);
            let n = i.length - 1,
                s = i[n];
            i[n] = eh[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms ? .length && this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    let e3 = e => !!(e && e.getVelocity);

    function e8() {
        t = void 0
    }
    let e6 = {
        now: () => (void 0 === t && e6.set(ey.isProcessing || em.useManualTiming ? ey.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(e8)
        }
    };

    function e4(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }

    function e9(e, t) {
        let i = e.indexOf(t);
        i > -1 && e.splice(i, 1)
    }
    class e7 {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return e4(this.subscriptions, e), () => e9(this.subscriptions, e)
        }
        notify(e, t, i) {
            let r = this.subscriptions.length;
            if (r)
                if (1 === r) this.subscriptions[0](e, t, i);
                else
                    for (let n = 0; n < r; n++) {
                        let r = this.subscriptions[n];
                        r && r(e, t, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    class te {
        constructor(e, t = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                let t = e6.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                    for (let e of this.dependents) e.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e, this.updatedAt = e6.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, t) {
            this.events[e] || (this.events[e] = new e7);
            let i = this.events[e].add(t);
            return "change" === e ? () => {
                i(), eg.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : i
        }
        clearListeners() {
            for (let e in this.events) this.events[e].clear()
        }
        attach(e, t) {
            this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e) {
            this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e, t, i) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
        }
        jump(e, t = !0) {
            this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change ? .notify(this.current)
        }
        addDependent(e) {
            this.dependents || (this.dependents = new Set), this.dependents.add(e)
        }
        removeDependent(e) {
            this.dependents && this.dependents.delete(e)
        }
        get() {
            return r && r.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            var e;
            let t = e6.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
            let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return e = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * e : 0
        }
        start(e) {
            return this.stop(), new Promise(t => {
                this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }

    function tt(e, t) {
        return new te(e, t)
    }
    let ti = [...en, eO, eH],
        {
            schedule: tr
        } = eA(queueMicrotask, !1),
        tn = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        ts = {};
    for (let e in tn) ts[e] = {
        isEnabled: t => tn[e].some(e => !!t[e])
    };
    let ta = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        to = () => ({
            x: ta(),
            y: ta()
        }),
        tl = () => ({
            min: 0,
            max: 0
        }),
        tu = () => ({
            x: tl(),
            y: tl()
        }),
        tc = {
            current: null
        },
        td = {
            current: !1
        },
        th = new WeakMap;

    function tp(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start
    }

    function tm(e) {
        return "string" == typeof e || Array.isArray(e)
    }
    let tf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        tA = ["initial", ...tf];

    function tg(e) {
        return tp(e.animate) || tA.some(t => tm(e[t]))
    }

    function tv(e) {
        return !!(tg(e) || e.variants)
    }

    function ty(e) {
        let t = [{}, {}];
        return e ? .values.forEach((e, i) => {
            t[0][i] = e.get(), t[1][i] = e.getVelocity()
        }), t
    }

    function tb(e, t, i, r) {
        if ("function" == typeof t) {
            let [n, s] = ty(r);
            t = t(void 0 !== i ? i : e.custom, n, s)
        }
        if ("string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t) {
            let [n, s] = ty(r);
            t = t(void 0 !== i ? i : e.custom, n, s)
        }
        return t
    }
    let tx = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class tw {
        scrapeMotionValuesFromProps(e, t, i) {
            return {}
        }
        constructor({
            parent: e,
            props: t,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s
        }, a = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = ej, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let e = e6.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e, eg.render(this.render, !1, !0))
            };
            const {
                latestValues: o,
                renderState: l
            } = s;
            this.latestValues = o, this.baseTarget = { ...o
            }, this.initialValues = t.initial ? { ...o
            } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = a, this.blockInitialAnimation = !!n, this.isControllingVariants = tg(t), this.isVariantNode = tv(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            const {
                willChange: u,
                ...c
            } = this.scrapeMotionValuesFromProps(t, {}, this);
            for (const e in c) {
                const t = c[e];
                void 0 !== o[e] && e3(t) && t.set(o[e])
            }
        }
        mount(e) {
            this.current = e, th.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), td.current || function() {
                if (td.current = !0, l)
                    if (window.matchMedia) {
                        let e = window.matchMedia("(prefers-reduced-motion)"),
                            t = () => tc.current = e.matches;
                        e.addEventListener("change", t), t()
                    } else tc.current = !1
            }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || tc.current), this.parent ? .addChild(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
            for (let e in this.projection && this.projection.unmount(), ev(this.notifyUpdate), ev(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this), this.events) this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }
        addChild(e) {
            this.children.add(e), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(e)
        }
        removeChild(e) {
            this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e, t) {
            let i;
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            let r = A.has(e);
            r && this.onBindTransform && this.onBindTransform();
            let n = t.on("change", t => {
                this.latestValues[e] = t, this.props.onUpdate && eg.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                n(), i && i(), t.owner && t.stop()
            })
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in ts) {
                let t = ts[e];
                if (!t) continue;
                let {
                    isEnabled: i,
                    Feature: r
                } = t;
                if (!this.features[e] && r && i(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    let t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tu()
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let t = 0; t < tx.length; t++) {
                let i = tx[t];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let r = e["on" + i];
                r && (this.propEventSubscriptions[i] = this.on(i, r))
            }
            this.prevMotionValues = function(e, t, i) {
                for (let r in t) {
                    let n = t[r],
                        s = i[r];
                    if (e3(n)) e.addValue(r, n);
                    else if (e3(s)) e.addValue(r, tt(n, {
                        owner: e
                    }));
                    else if (s !== n)
                        if (e.hasValue(r)) {
                            let t = e.getValue(r);
                            !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n)
                        } else {
                            let t = e.getStaticValue(r);
                            e.addValue(r, tt(void 0 !== t ? t : n, {
                                owner: e
                            }))
                        }
                }
                for (let r in i) void 0 === t[r] && e.removeValue(r);
                return t
            }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
            let i = this.values.get(e);
            t !== i && (i && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let i = this.values.get(e);
            return void 0 === i && void 0 !== t && (i = tt(null === t ? void 0 : t, {
                owner: this
            }), this.addValue(e, i)), i
        }
        readValue(e, t) {
            let i = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ? ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
            if (null != i) {
                let r, n;
                if ("string" == typeof i && (r = i, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(r) || (n = i, /^0[^.\s]+$/u.test(n)))) i = parseFloat(i);
                else {
                    let r;
                    r = i, !ti.find(er(r)) && eH.test(t) && (i = e1(e, t))
                }
                this.setBaseTarget(e, e3(i) ? i.get() : i)
            }
            return e3(i) ? i.get() : i
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            let t, {
                initial: i
            } = this.props;
            if ("string" == typeof i || "object" == typeof i) {
                let r = tb(this.props, i, this.presenceContext ? .custom);
                r && (t = r[e])
            }
            if (i && void 0 !== t) return t;
            let r = this.getBaseTargetFromProps(this.props, e);
            return void 0 === r || e3(r) ? void 0 !== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : r
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new e7), this.events[e].add(t)
        }
        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
            tr.render(this.render)
        }
    }
    class tk extends tw {
        constructor() {
            super(...arguments), this.KeyframeResolver = e5
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            return e.style ? e.style[t] : void 0
        }
        removeValueFromRenderState(e, {
            vars: t,
            style: i
        }) {
            delete t[e], delete i[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: e
            } = this.props;
            e3(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
    let tT = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
        tP = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        tS = f.length;

    function tj(e, t, i) {
        let {
            style: r,
            vars: n,
            transformOrigin: s
        } = e, a = !1, o = !1;
        for (let e in t) {
            let i = t[e];
            if (A.has(e)) {
                a = !0;
                continue
            }
            if (C(e)) {
                n[e] = i;
                continue
            } {
                let t = tT(i, eJ[e]);
                e.startsWith("origin") ? (o = !0, s[e] = t) : r[e] = t
            }
        }
        if (!t.transform && (a || i ? r.transform = function(e, t, i) {
                let r = "",
                    n = !0;
                for (let s = 0; s < tS; s++) {
                    let a = f[s],
                        o = e[a];
                    if (void 0 === o) continue;
                    let l = !0;
                    if (!(l = "number" == typeof o ? o === +!!a.startsWith("scale") : 0 === parseFloat(o)) || i) {
                        let e = tT(o, eJ[a]);
                        if (!l) {
                            n = !1;
                            let t = tP[a] || a;
                            r += `${t}(${e}) `
                        }
                        i && (t[a] = e)
                    }
                }
                return r = r.trim(), i ? r = i(t, n ? "" : r) : n && (r = "none"), r
            }(t, e.transform, i) : r.transform && (r.transform = "none")), o) {
            let {
                originX: e = "50%",
                originY: t = "50%",
                originZ: i = 0
            } = s;
            r.transformOrigin = `${e} ${t} ${i}`
        }
    }

    function tC(e, {
        style: t,
        vars: i
    }, r, n) {
        let s, a = e.style;
        for (s in t) a[s] = t[s];
        for (s in n ? .applyProjectionStyles(a, r), i) a.setProperty(s, i[s])
    }
    let tE = {};

    function tM(e, {
        layout: t,
        layoutId: i
    }) {
        return A.has(e) || e.startsWith("origin") || (t || void 0 !== i) && (!!tE[e] || "opacity" === e)
    }

    function tR(e, t, i) {
        let {
            style: r
        } = e, n = {};
        for (let s in r)(e3(r[s]) || t.style && e3(t.style[s]) || tM(s, e) || i ? .getValue(s) ? .liveStyle !== void 0) && (n[s] = r[s]);
        return n
    }
    class tV extends tk {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = tC
        }
        readValueFromInstance(e, t) {
            if (A.has(t)) return this.projection ? .isProjecting ? T(t) : ((e, t) => {
                let {
                    transform: i = "none"
                } = getComputedStyle(e);
                return P(i, t)
            })(e, t); {
                let i = window.getComputedStyle(e),
                    r = (C(t) ? i.getPropertyValue(t) : i[t]) || 0;
                return "string" == typeof r ? r.trim() : r
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return W(e, t)
        }
        build(e, t, i) {
            tj(e, t, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return tR(e, t, i)
        }
    }
    let tN = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        tD = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        tq = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };

    function tL(e, {
        attrX: t,
        attrY: i,
        attrScale: r,
        pathLength: n,
        pathSpacing: s = 1,
        pathOffset: a = 0,
        ...o
    }, l, u, c) {
        if (tj(e, o, u), l) {
            e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
            return
        }
        e.attrs = e.style, e.style = {};
        let {
            attrs: d,
            style: h
        } = e;
        d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ? ? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = c ? .transformBox ? ? "fill-box", delete d.transformBox), void 0 !== t && (d.x = t), void 0 !== i && (d.y = i), void 0 !== r && (d.scale = r), void 0 !== n && function(e, t, i = 1, r = 0, n = !0) {
            e.pathLength = 1;
            let s = n ? tD : tq;
            e[s.offset] = Q.transform(-r);
            let a = Q.transform(t),
                o = Q.transform(i);
            e[s.array] = `${a} ${o}`
        }(d, n, s, a, !1)
    }
    let tO = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        tF = e => "string" == typeof e && "svg" === e.toLowerCase();

    function tI(e, t, i) {
        let r = tR(e, t, i);
        for (let i in e)(e3(e[i]) || e3(t[i])) && (r[-1 !== f.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i]);
        return r
    }
    class tz extends tk {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tu
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, t) {
            if (A.has(t)) {
                let e = e0(t);
                return e && e.default || 0
            }
            return t = tO.has(t) ? t : tN(t), e.getAttribute(t)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return tI(e, t, i)
        }
        build(e, t, i) {
            tL(e, t, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(e, t, i, r) {
            for (let i in tC(e, t, void 0, r), t.attrs) e.setAttribute(tO.has(i) ? i : tN(i), t.attrs[i])
        }
        mount(e) {
            this.isSVGTag = tF(e.tagName), super.mount(e)
        }
    }
    let tB = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function t$(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (tB.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1
    }
    var tU = e.i(843476);
    let tW = (0, s.createContext)({
            strict: !1
        }),
        t_ = (0, s.createContext)({});

    function tH(e) {
        return Array.isArray(e) ? e.join(" ") : e
    }
    let tY = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function tX(e, t, i) {
        for (let r in t) e3(t[r]) || tM(r, i) || (e[r] = t[r])
    }
    let tK = () => ({ ...tY(),
            attrs: {}
        }),
        tG = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

    function tZ(e) {
        return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tG.has(e)
    }
    let tJ = e => !tZ(e);
    try {
        n = (() => {
            let e = Error("Cannot find module '@emotion/is-prop-valid'");
            throw e.code = "MODULE_NOT_FOUND", e
        })().default, "function" == typeof n && (tJ = e => e.startsWith("on") ? !tZ(e) : n(e))
    } catch {}

    function tQ(e) {
        return e3(e) ? e.get() : e
    }
    let t0 = e => (t, i) => {
            let r = (0, s.useContext)(t_),
                n = (0, s.useContext)(c),
                a = () => (function({
                    scrapeMotionValuesFromProps: e,
                    createRenderState: t
                }, i, r, n) {
                    return {
                        latestValues: function(e, t, i, r) {
                            let n = {},
                                s = r(e, {});
                            for (let e in s) n[e] = tQ(s[e]);
                            let {
                                initial: a,
                                animate: o
                            } = e, l = tg(e), u = tv(e);
                            t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === o && (o = t.animate));
                            let c = !!i && !1 === i.initial,
                                d = (c = c || !1 === a) ? o : a;
                            if (d && "boolean" != typeof d && !tp(d)) {
                                let t = Array.isArray(d) ? d : [d];
                                for (let i = 0; i < t.length; i++) {
                                    let r = tb(e, t[i]);
                                    if (r) {
                                        let {
                                            transitionEnd: e,
                                            transition: t,
                                            ...i
                                        } = r;
                                        for (let e in i) {
                                            let t = i[e];
                                            if (Array.isArray(t)) {
                                                let e = c ? t.length - 1 : 0;
                                                t = t[e]
                                            }
                                            null !== t && (n[e] = t)
                                        }
                                        for (let t in e) n[t] = e[t]
                                    }
                                }
                            }
                            return n
                        }(i, r, n, e),
                        renderState: t()
                    }
                })(e, t, r, n);
            return i ? a() : o(a)
        },
        t1 = t0({
            scrapeMotionValuesFromProps: tR,
            createRenderState: tY
        }),
        t2 = t0({
            scrapeMotionValuesFromProps: tI,
            createRenderState: tK
        }),
        t5 = Symbol.for("motionComponentSymbol");

    function t3(e) {
        return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
    }
    let t8 = "data-" + tN("framerAppearId"),
        t6 = (0, s.createContext)({});

    function t4(e, {
        forwardMotionProps: t = !1
    } = {}, i, r) {
        i && function(e) {
            for (let t in e) ts[t] = { ...ts[t],
                ...e[t]
            }
        }(i);
        let n = t$(e) ? t2 : t1;

        function o(i, o) {
            var d;
            let h, m = { ...(0, s.useContext)(p),
                    ...i,
                    layoutId: function({
                        layoutId: e
                    }) {
                        let t = (0, s.useContext)(a).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(i)
                },
                {
                    isStatic: f
                } = m,
                A = function(e) {
                    let {
                        initial: t,
                        animate: i
                    } = function(e, t) {
                        if (tg(e)) {
                            let {
                                initial: t,
                                animate: i
                            } = e;
                            return {
                                initial: !1 === t || tm(t) ? t : void 0,
                                animate: tm(i) ? i : void 0
                            }
                        }
                        return !1 !== e.inherit ? t : {}
                    }(e, (0, s.useContext)(t_));
                    return (0, s.useMemo)(() => ({
                        initial: t,
                        animate: i
                    }), [tH(t), tH(i)])
                }(i),
                g = n(i, f);
            if (!f && l) {
                (0, s.useContext)(tW).strict;
                let t = function(e) {
                    let {
                        drag: t,
                        layout: i
                    } = ts;
                    if (!t && !i) return {};
                    let r = { ...t,
                        ...i
                    };
                    return {
                        MeasureLayout: t ? .isEnabled(e) || i ? .isEnabled(e) ? r.MeasureLayout : void 0,
                        ProjectionNode: r.ProjectionNode
                    }
                }(m);
                h = t.MeasureLayout, A.visualElement = function(e, t, i, r, n) {
                    let {
                        visualElement: a
                    } = (0, s.useContext)(t_), o = (0, s.useContext)(tW), l = (0, s.useContext)(c), d = (0, s.useContext)(p).reducedMotion, h = (0, s.useRef)(null);
                    r = r || o.renderer, !h.current && r && (h.current = r(e, {
                        visualState: t,
                        parent: a,
                        props: i,
                        presenceContext: l,
                        blockInitialAnimation: !!l && !1 === l.initial,
                        reducedMotionConfig: d
                    }));
                    let m = h.current,
                        f = (0, s.useContext)(t6);
                    m && !m.projection && n && ("html" === m.type || "svg" === m.type) && function(e, t, i, r) {
                        let {
                            layoutId: n,
                            layout: s,
                            drag: a,
                            dragConstraints: o,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutCrossfade: c
                        } = t;
                        e.projection = new i(e.latestValues, t["data-framer-portal-id"] ? void 0 : function e(t) {
                            if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                        }(e.parent)), e.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!a || o && t3(o),
                            visualElement: e,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: u
                        })
                    }(h.current, i, n, f);
                    let A = (0, s.useRef)(!1);
                    (0, s.useInsertionEffect)(() => {
                        m && A.current && m.update(i, l)
                    });
                    let g = i[t8],
                        v = (0, s.useRef)(!!g && !window.MotionHandoffIsComplete ? .(g) && window.MotionHasOptimisedAnimation ? .(g));
                    return u(() => {
                        m && (A.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges())
                    }), (0, s.useEffect)(() => {
                        m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete ? .(g)
                        }), v.current = !1), m.enteringChildren = void 0)
                    }), m
                }(e, g, m, r, t.ProjectionNode)
            }
            return (0, tU.jsxs)(t_.Provider, {
                value: A,
                children: [h && A.visualElement ? (0, tU.jsx)(h, {
                    visualElement: A.visualElement,
                    ...m
                }) : null, function(e, t, i, {
                    latestValues: r
                }, n, a = !1) {
                    let o = (t$(e) ? function(e, t, i, r) {
                            let n = (0, s.useMemo)(() => {
                                let i = tK();
                                return tL(i, t, tF(r), e.transformTemplate, e.style), { ...i.attrs,
                                    style: { ...i.style
                                    }
                                }
                            }, [t]);
                            if (e.style) {
                                let t = {};
                                tX(t, e.style, e), n.style = { ...t,
                                    ...n.style
                                }
                            }
                            return n
                        } : function(e, t) {
                            let i, r, n = {},
                                a = (i = e.style || {}, tX(r = {}, i, e), Object.assign(r, function({
                                    transformTemplate: e
                                }, t) {
                                    return (0, s.useMemo)(() => {
                                        let i = tY();
                                        return tj(i, t, e), Object.assign({}, i.vars, i.style)
                                    }, [t])
                                }(e, t)), r);
                            return e.drag && !1 !== e.dragListener && (n.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = a, n
                        })(t, r, n, e),
                        l = function(e, t, i) {
                            let r = {};
                            for (let n in e)("values" !== n || "object" != typeof e.values) && (tJ(n) || !0 === i && tZ(n) || !t && !tZ(n) || e.draggable && n.startsWith("onDrag")) && (r[n] = e[n]);
                            return r
                        }(t, "string" == typeof e, a),
                        u = e !== s.Fragment ? { ...l,
                            ...o,
                            ref: i
                        } : {},
                        {
                            children: c
                        } = t,
                        d = (0, s.useMemo)(() => e3(c) ? c.get() : c, [c]);
                    return (0, s.createElement)(e, { ...u,
                        children: d
                    })
                }(e, i, (d = A.visualElement, (0, s.useCallback)(e => {
                    e && g.onMount && g.onMount(e), d && (e ? d.mount(e) : d.unmount()), o && ("function" == typeof o ? o(e) : t3(o) && (o.current = e))
                }, [d])), g, f, t)]
            })
        }
        o.displayName = `motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;
        let d = (0, s.forwardRef)(o);
        return d[t5] = e, d
    }

    function t9(e, t, i) {
        let r = e.getProps();
        return tb(r, t, void 0 !== i ? i : r.custom, e)
    }

    function t7(e, t) {
        return e ? .[t] ? ? e ? .default ? ? e
    }
    let ie = e => Array.isArray(e);

    function it(e, t) {
        let i = e.getValue("willChange");
        if (e3(i) && i.add) return i.add(t);
        if (!i && em.WillChange) {
            let i = new em.WillChange("auto");
            e.addValue("willChange", i), i.add(t)
        }
    }

    function ii(e) {
        e.duration = 0, e.type = "keyframes"
    }
    let ir = (e, t) => i => t(e(i)),
        is = (...e) => e.reduce(ir),
        ia = e => 1e3 * e,
        io = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        };

    function il(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
    }

    function iu(e, t) {
        return i => i > 0 ? t : e
    }
    let ic = (e, t, i) => {
            let r = e * e,
                n = i * (t * t - r) + r;
            return n < 0 ? 0 : Math.sqrt(n)
        },
        id = [eq, eD, eL];

    function ih(e) {
        let t = id.find(t => t.test(e));
        if (ea(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let i = t.parse(e);
        return t === eL && (i = function({
            hue: e,
            saturation: t,
            lightness: i,
            alpha: r
        }) {
            e /= 360, i /= 100;
            let n = 0,
                s = 0,
                a = 0;
            if (t /= 100) {
                let r = i < .5 ? i * (1 + t) : i + t - i * t,
                    o = 2 * i - r;
                n = il(o, r, e + 1 / 3), s = il(o, r, e), a = il(o, r, e - 1 / 3)
            } else n = s = a = i;
            return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: r
            }
        }(i)), i
    }
    let ip = (e, t) => {
            let i = ih(e),
                r = ih(t);
            if (!i || !r) return iu(e, t);
            let n = { ...i
            };
            return e => (n.red = ic(i.red, r.red, e), n.green = ic(i.green, r.green, e), n.blue = ic(i.blue, r.blue, e), n.alpha = N(i.alpha, r.alpha, e), eD.transform(n))
        },
        im = new Set(["none", "hidden"]);

    function iA(e, t) {
        return i => N(e, t, i)
    }

    function ig(e) {
        return "number" == typeof e ? iA : "string" == typeof e ? M(e) ? iu : eO.test(e) ? ip : ib : Array.isArray(e) ? iv : "object" == typeof e ? eO.test(e) ? ip : iy : iu
    }

    function iv(e, t) {
        let i = [...e],
            r = i.length,
            n = e.map((e, i) => ig(e)(e, t[i]));
        return e => {
            for (let t = 0; t < r; t++) i[t] = n[t](e);
            return i
        }
    }

    function iy(e, t) {
        let i = { ...e,
                ...t
            },
            r = {};
        for (let n in i) void 0 !== e[n] && void 0 !== t[n] && (r[n] = ig(e[n])(e[n], t[n]));
        return e => {
            for (let t in r) i[t] = r[t](e);
            return i
        }
    }
    let ib = (e, t) => {
        let i = eH.createTransformer(t),
            r = e$(e),
            n = e$(t);
        if (!(r.indexes.var.length === n.indexes.var.length && r.indexes.color.length === n.indexes.color.length && r.indexes.number.length >= n.indexes.number.length)) return ea(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), iu(e, t);
        if (im.has(e) && !n.values.length || im.has(t) && !r.values.length) return im.has(e) ? i => i <= 0 ? e : t : i => i >= 1 ? t : e;
        return is(iv(function(e, t) {
            let i = [],
                r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let n = 0; n < t.values.length; n++) {
                let s = t.types[n],
                    a = e.indexes[s][r[s]],
                    o = e.values[a] ? ? 0;
                i[n] = o, r[s]++
            }
            return i
        }(r, n), n.values), i)
    };

    function ix(e, t, i) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof i ? N(e, t, i) : ig(e)(e, t)
    }
    let iw = e => {
            let t = ({
                timestamp: t
            }) => e(t);
            return {
                start: (e = !0) => eg.update(t, e),
                stop: () => ev(t),
                now: () => ey.isProcessing ? ey.timestamp : e6.now()
            }
        },
        ik = (e, t, i = 10) => {
            let r = "",
                n = Math.max(Math.round(t / i), 2);
            for (let t = 0; t < n; t++) r += Math.round(1e4 * e(t / (n - 1))) / 1e4 + ", ";
            return `linear(${r.substring(0,r.length-2)})`
        };

    function iT(e) {
        let t = 0,
            i = e.next(t);
        for (; !i.done && t < 2e4;) t += 50, i = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
    }

    function iP(e, t, i) {
        var r, n;
        let s = Math.max(t - 5, 0);
        return r = i - e(s), (n = t - s) ? 1e3 / n * r : 0
    }
    let iS = .01,
        ij = 2,
        iC = .005,
        iE = .5;

    function iM(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    let iR = ["duration", "bounce"],
        iV = ["stiffness", "damping", "mass"];

    function iN(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function iD(e = .3, t = .3) {
        let i, r = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: t
            } : e,
            {
                restSpeed: n,
                restDelta: s
            } = r,
            a = r.keyframes[0],
            o = r.keyframes[r.keyframes.length - 1],
            l = {
                done: !1,
                value: a
            },
            {
                stiffness: u,
                damping: c,
                mass: d,
                duration: h,
                velocity: p,
                isResolvedFromDuration: m
            } = function(e) {
                let t = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!iN(e, iV) && iN(e, iR))
                    if (e.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * e.visualDuration),
                            r = i * i,
                            n = 2 * H(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(r);
                        t = { ...t,
                            mass: 1,
                            stiffness: r,
                            damping: n
                        }
                    } else {
                        let i = function({
                            duration: e = 800,
                            bounce: t = .3,
                            velocity: i = 0,
                            mass: r = 1
                        }) {
                            let n, s;
                            ea(e <= ia(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let a = 1 - t;
                            a = H(.05, 1, a), e = H(.01, 10, e / 1e3), a < 1 ? (n = t => {
                                let r = t * a,
                                    n = r * e;
                                return .001 - (r - i) / iM(t, a) * Math.exp(-n)
                            }, s = t => {
                                let r = t * a * e,
                                    s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                                    o = Math.exp(-r),
                                    l = iM(Math.pow(t, 2), a);
                                return (r * i + i - s) * o * (-n(t) + .001 > 0 ? -1 : 1) / l
                            }) : (n = t => -.001 + Math.exp(-t * e) * ((t - i) * e + 1), s = t => e * e * (i - t) * Math.exp(-t * e));
                            let o = function(e, t, i) {
                                let r = i;
                                for (let i = 1; i < 12; i++) r -= e(r) / t(r);
                                return r
                            }(n, s, 5 / e);
                            if (e = ia(e), isNaN(o)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            }; {
                                let t = Math.pow(o, 2) * r;
                                return {
                                    stiffness: t,
                                    damping: 2 * a * Math.sqrt(r * t),
                                    duration: e
                                }
                            }
                        }(e);
                        (t = { ...t,
                            ...i,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                return t
            }({ ...r,
                velocity: -((r.velocity || 0) / 1e3)
            }),
            f = p || 0,
            A = c / (2 * Math.sqrt(u * d)),
            g = o - a,
            v = Math.sqrt(u / d) / 1e3,
            y = 5 > Math.abs(g);
        if (n || (n = y ? iS : ij), s || (s = y ? iC : iE), A < 1) {
            let e = iM(v, A);
            i = t => o - Math.exp(-A * v * t) * ((f + A * v * g) / e * Math.sin(e * t) + g * Math.cos(e * t))
        } else if (1 === A) i = e => o - Math.exp(-v * e) * (g + (f + v * g) * e);
        else {
            let e = v * Math.sqrt(A * A - 1);
            i = t => {
                let i = Math.exp(-A * v * t),
                    r = Math.min(e * t, 300);
                return o - i * ((f + A * v * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e
            }
        }
        let b = {
            calculatedDuration: m && h || null,
            next: e => {
                let t = i(e);
                if (m) l.done = e >= h;
                else {
                    let r = 0 === e ? f : 0;
                    A < 1 && (r = 0 === e ? ia(f) : iP(i, e, t));
                    let a = Math.abs(o - t) <= s;
                    l.done = Math.abs(r) <= n && a
                }
                return l.value = l.done ? o : t, l
            },
            toString: () => {
                let e = Math.min(iT(b), 2e4),
                    t = ik(t => b.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return b
    }

    function iq({
        keyframes: e,
        velocity: t = 0,
        power: i = .8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = .5,
        restSpeed: c
    }) {
        let d, h, p = e[0],
            m = {
                done: !1,
                value: p
            },
            f = i * t,
            A = p + f,
            g = void 0 === a ? A : a(A);
        g !== A && (f = g - p);
        let v = e => -f * Math.exp(-e / r),
            y = e => g + v(e),
            b = e => {
                let t = v(e),
                    i = y(e);
                m.done = Math.abs(t) <= u, m.value = m.done ? g : i
            },
            x = e => {
                let t;
                if (t = m.value, void 0 !== o && t < o || void 0 !== l && t > l) {
                    var i;
                    d = e, h = iD({
                        keyframes: [m.value, (i = m.value, void 0 === o ? l : void 0 === l || Math.abs(o - i) < Math.abs(l - i) ? o : l)],
                        velocity: iP(y, e, m.value),
                        damping: n,
                        stiffness: s,
                        restDelta: u,
                        restSpeed: c
                    })
                }
            };
        return x(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return (h || void 0 !== d || (t = !0, b(e), x(e)), void 0 !== d && e >= d) ? h.next(e - d) : (t || b(e), m)
            }
        }
    }
    iD.applyToOptions = e => {
        let t = function(e, t = 100, i) {
            let r = i({ ...e,
                    keyframes: [0, t]
                }),
                n = Math.min(iT(r), 2e4);
            return {
                type: "keyframes",
                ease: e => r.next(n * e).value / t,
                duration: n / 1e3
            }
        }(e, 100, iD);
        return e.ease = t.ease, e.duration = ia(t.duration), e.type = "keyframes", e
    };
    let iL = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

    function iO(e, t, i, r) {
        return e === t && i === r ? ep : n => 0 === n || 1 === n ? n : iL(function(e, t, i, r, n) {
            let s, a, o = 0;
            do(s = iL(a = t + (i - t) / 2, r, n) - e) > 0 ? i = a : t = a; while (Math.abs(s) > 1e-7 && ++o < 12) return a
        }(n, 0, 1, e, i), t, r)
    }
    let iF = iO(.42, 0, 1, 1),
        iI = iO(0, 0, .58, 1),
        iz = iO(.42, 0, .58, 1),
        iB = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        i$ = e => t => 1 - e(1 - t),
        iU = iO(.33, 1.53, .69, .99),
        iW = i$(iU),
        i_ = iB(iW),
        iH = e => (e *= 2) < 1 ? .5 * iW(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
        iY = e => 1 - Math.sin(Math.acos(e)),
        iX = i$(iY),
        iK = iB(iY),
        iG = e => Array.isArray(e) && "number" == typeof e[0],
        iZ = {
            linear: ep,
            easeIn: iF,
            easeInOut: iz,
            easeOut: iI,
            circIn: iY,
            circInOut: iK,
            circOut: iX,
            backIn: iW,
            backInOut: i_,
            backOut: iU,
            anticipate: iH
        },
        iJ = e => {
            if (iG(e)) {
                eo(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [t, i, r, n] = e;
                return iO(t, i, r, n)
            }
            return "string" == typeof e ? (eo(void 0 !== iZ[e], `Invalid easing type '${e}'`, "invalid-easing-type"), iZ[e]) : e
        },
        iQ = (e, t, i) => {
            let r = t - e;
            return 0 === r ? 1 : (i - e) / r
        };

    function i0({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: r = "easeInOut"
    }) {
        var n;
        let s, a = Array.isArray(r) && "number" != typeof r[0] ? r.map(iJ) : iJ(r),
            o = {
                done: !1,
                value: t[0]
            },
            l = function(e, t, {
                clamp: i = !0,
                ease: r,
                mixer: n
            } = {}) {
                let s = e.length;
                if (eo(s === t.length, "Both input and output ranges must be the same length", "range-length"), 1 === s) return () => t[0];
                if (2 === s && t[0] === t[1]) return () => t[1];
                let a = e[0] === e[1];
                e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
                let o = function(e, t, i) {
                        let r = [],
                            n = i || em.mix || ix,
                            s = e.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = n(e[i], e[i + 1]);
                            t && (s = is(Array.isArray(t) ? t[i] || ep : t, s)), r.push(s)
                        }
                        return r
                    }(t, r, n),
                    l = o.length,
                    u = i => {
                        if (a && i < e[0]) return t[0];
                        let r = 0;
                        if (l > 1)
                            for (; r < e.length - 2 && !(i < e[r + 1]); r++);
                        let n = iQ(e[r], e[r + 1], i);
                        return o[r](n)
                    };
                return i ? t => u(H(e[0], e[s - 1], t)) : u
            }((n = i && i.length === t.length ? i : (! function(e, t) {
                let i = e[e.length - 1];
                for (let r = 1; r <= t; r++) {
                    let n = iQ(0, t, r);
                    e.push(N(i, 1, n))
                }
            }(s = [0], t.length - 1), s), n.map(t => t * e)), t, {
                ease: Array.isArray(a) ? a : t.map(() => a || iz).splice(0, t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (o.value = l(t), o.done = t >= e, o)
        }
    }
    let i1 = e => null !== e;

    function i2(e, {
        repeat: t,
        repeatType: i = "loop"
    }, r, n = 1) {
        let s = e.filter(i1),
            a = n < 0 || t && "loop" !== i && t % 2 == 1 ? 0 : s.length - 1;
        return a && void 0 !== r ? r : s[a]
    }
    let i5 = {
        decay: iq,
        inertia: iq,
        tween: i0,
        keyframes: i0,
        spring: iD
    };

    function i3(e) {
        "string" == typeof e.type && (e.type = i5[e.type])
    }
    class i8 {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(e => {
                this.resolve = e
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
    }
    let i6 = e => e / 100;
    class i4 extends i8 {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== e6.now() && this.tick(e6.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
            }, io.mainThread++, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            i3(e);
            let {
                type: t = i0,
                repeat: i = 0,
                repeatDelay: r = 0,
                repeatType: n,
                velocity: s = 0
            } = e, {
                keyframes: a
            } = e, o = t || i0;
            o !== i0 && "number" != typeof a[0] && (this.mixKeyframes = is(i6, ix(a[0], a[1])), a = [0, 100]);
            let l = o({ ...e,
                keyframes: a
            });
            "mirror" === n && (this.mirroredGenerator = o({ ...e,
                keyframes: [...a].reverse(),
                velocity: -s
            })), null === l.calculatedDuration && (l.calculatedDuration = iT(l));
            let {
                calculatedDuration: u
            } = l;
            this.calculatedDuration = u, this.resolvedDuration = u + r, this.totalDuration = this.resolvedDuration * (i + 1) - r, this.generator = l
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
            let {
                generator: i,
                totalDuration: r,
                mixKeyframes: n,
                mirroredGenerator: s,
                resolvedDuration: a,
                calculatedDuration: o
            } = this;
            if (null === this.startTime) return i.next(0);
            let {
                delay: l = 0,
                keyframes: u,
                repeat: c,
                repeatType: d,
                repeatDelay: h,
                type: p,
                onUpdate: m,
                finalKeyframe: f
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let A = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
                g = this.playbackSpeed >= 0 ? A < 0 : A > r;
            this.currentTime = Math.max(A, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = r);
            let v = this.currentTime,
                y = i;
            if (c) {
                let e = Math.min(this.currentTime, r) / a,
                    t = Math.floor(e),
                    i = e % 1;
                !i && e >= 1 && (i = 1), 1 === i && t--, (t = Math.min(t, c + 1)) % 2 && ("reverse" === d ? (i = 1 - i, h && (i -= h / a)) : "mirror" === d && (y = s)), v = H(0, 1, i) * a
            }
            let b = g ? {
                done: !1,
                value: u[0]
            } : y.next(v);
            n && (b.value = n(b.value));
            let {
                done: x
            } = b;
            g || null === o || (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && x);
            return w && p !== iq && (b.value = i2(u, this.options, f, this.speed)), m && m(b.value), w && this.finish(), b
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
        get duration() {
            return this.calculatedDuration / 1e3
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + e / 1e3
        }
        get time() {
            return this.currentTime / 1e3
        }
        set time(e) {
            e = ia(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? .start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            this.updateTime(e6.now());
            let t = this.playbackSpeed !== e;
            this.playbackSpeed = e, t && (this.time = this.currentTime / 1e3)
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: e = iw,
                startTime: t
            } = this.options;
            this.driver || (this.driver = e(e => this.tick(e))), this.options.onPlay ? .();
            let i = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = t ? ? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(e6.now()), this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, io.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(e) {
            return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), e.observe(this)
        }
    }

    function i9(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
    }
    let i7 = i9(() => void 0 !== window.ScrollTimeline),
        re = {},
        rt = (i = i9(() => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (e) {
                return !1
            }
            return !0
        }), () => re.linearEasing ? ? i()),
        ri = ([e, t, i, r]) => `cubic-bezier(${e}, ${t}, ${i}, ${r})`,
        rr = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: ri([0, .65, .55, 1]),
            circOut: ri([.55, 0, 1, .45]),
            backIn: ri([.31, .01, .66, -.59]),
            backOut: ri([.33, 1.53, .69, .99])
        };

    function rn(e) {
        return "function" == typeof e && "applyToOptions" in e
    }
    class rs extends i8 {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
            const {
                element: t,
                name: i,
                keyframes: r,
                pseudoElement: n,
                allowFlatten: s = !1,
                finalKeyframe: a,
                onComplete: o
            } = e;
            this.isPseudoElement = !!n, this.allowFlatten = s, this.options = e, eo("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const l = function({
                type: e,
                ...t
            }) {
                return rn(e) && rt() ? e.applyToOptions(t) : (t.duration ? ? (t.duration = 300), t.ease ? ? (t.ease = "easeOut"), t)
            }(e);
            this.animation = function(e, t, i, {
                delay: r = 0,
                duration: n = 300,
                repeat: s = 0,
                repeatType: a = "loop",
                ease: o = "easeOut",
                times: l
            } = {}, u) {
                let c = {
                    [t]: i
                };
                l && (c.offset = l);
                let d = function e(t, i) {
                    if (t) return "function" == typeof t ? rt() ? ik(t, i) : "ease-out" : iG(t) ? ri(t) : Array.isArray(t) ? t.map(t => e(t, i) || rr.easeOut) : rr[t]
                }(o, n);
                Array.isArray(d) && (c.easing = d);
                let h = {
                    delay: r,
                    duration: n,
                    easing: Array.isArray(d) ? "linear" : d,
                    fill: "both",
                    iterations: s + 1,
                    direction: "reverse" === a ? "alternate" : "normal"
                };
                u && (h.pseudoElement = u);
                let p = e.animate(c, h);
                return p
            }(t, i, r, l, n), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !n) {
                    let e = i2(r, this.options, a, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(e) : i.startsWith("--") ? t.style.setProperty(i, e) : t.style[i] = e, this.animation.cancel()
                }
                o ? .(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish ? .()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (e) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: e
            } = this;
            "idle" !== e && "finished" !== e && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            this.isPseudoElement || this.animation.commitStyles ? .()
        }
        get duration() {
            return Number(this.animation.effect ? .getComputedTiming ? .().duration || 0) / 1e3
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + e / 1e3
        }
        get time() {
            return (Number(this.animation.currentTime) || 0) / 1e3
        }
        set time(e) {
            this.finishedTime = null, this.animation.currentTime = ia(e)
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(e) {
            e < 0 && (this.finishedTime = null), this.animation.playbackRate = e
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return Number(this.animation.startTime)
        }
        set startTime(e) {
            this.animation.startTime = e
        }
        attachTimeline({
            timeline: e,
            observe: t
        }) {
            return (this.allowFlatten && this.animation.effect ? .updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, e && i7()) ? (this.animation.timeline = e, ep) : t(this)
        }
    }
    let ra = {
        anticipate: iH,
        backInOut: i_,
        circInOut: iK
    };
    class ro extends rs {
        constructor(e) {
            ! function(e) {
                "string" == typeof e.ease && e.ease in ra && (e.ease = ra[e.ease])
            }(e), i3(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: t,
                onUpdate: i,
                onComplete: r,
                element: n,
                ...s
            } = this.options;
            if (!t) return;
            if (void 0 !== e) return void t.set(e);
            let a = new i4({ ...s,
                    autoplay: !1
                }),
                o = ia(this.finishedTime ? ? this.time);
            t.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10), a.stop()
        }
    }
    let rl = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eH.test(e) || "0" === e) && !e.startsWith("url(")),
        ru = new Set(["opacity", "clipPath", "filter", "transform"]),
        rc = i9(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class rd extends i8 {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: r = 0,
            repeatDelay: n = 0,
            repeatType: s = "loop",
            keyframes: a,
            name: o,
            motionValue: l,
            element: u,
            ...c
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
            }, this.createdAt = e6.now();
            const d = {
                    autoplay: e,
                    delay: t,
                    type: i,
                    repeat: r,
                    repeatDelay: n,
                    repeatType: s,
                    name: o,
                    motionValue: l,
                    element: u,
                    ...c
                },
                h = u ? .KeyframeResolver || ej;
            this.keyframeResolver = new h(a, (e, t, i) => this.onKeyframesResolved(e, t, d, !i), o, l, u), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(e, t, i, r) {
            this.keyframeResolver = void 0;
            let {
                name: n,
                type: s,
                velocity: a,
                delay: o,
                isHandoff: l,
                onUpdate: u
            } = i;
            this.resolvedAt = e6.now(), ! function(e, t, i, r) {
                let n = e[0];
                if (null === n) return !1;
                if ("display" === t || "visibility" === t) return !0;
                let s = e[e.length - 1],
                    a = rl(n, t),
                    o = rl(s, t);
                return ea(a === o, `You are trying to animate ${t} from "${n}" to "${s}". "${a?s:n}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t) return !0
                }(e) || ("spring" === i || rn(i)) && r)
            }(e, n, s, a) && ((em.instantAnimations || !o) && u ? .(i2(e, i, t)), e[0] = e[e.length - 1], ii(i), i.repeat = 0);
            let c = {
                    startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...i,
                    keyframes: e
                },
                d = !l && function(e) {
                    let {
                        motionValue: t,
                        name: i,
                        repeatDelay: r,
                        repeatType: n,
                        damping: s,
                        type: a
                    } = e;
                    if (!(t ? .owner ? .current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: o,
                        transformTemplate: l
                    } = t.owner.getProps();
                    return rc() && i && ru.has(i) && ("transform" !== i || !l) && !o && !r && "mirror" !== n && 0 !== s && "inertia" !== a
                }(c) ? new ro({ ...c,
                    element: c.motionValue.owner.current
                }) : new i4(c);
            d.finished.then(() => this.notifyFinished()).catch(ep), this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ? .resume(), eT = !0, eS(), eP(), eT = !1), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(e) {
            this.animation.time = e
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(e) {
            this.animation.speed = e
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(e) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
        }
    }
    let rh = e => null !== e,
        rp = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        rm = {
            type: "keyframes",
            duration: .8
        },
        rf = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        },
        rA = (e, t, i, r = {}, n, s) => a => {
            let o = t7(r, e) || {},
                l = o.delay || r.delay || 0,
                {
                    elapsed: u = 0
                } = r;
            u -= ia(l);
            let c = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...o,
                delay: -u,
                onUpdate: e => {
                    t.set(e), o.onUpdate && o.onUpdate(e)
                },
                onComplete: () => {
                    a(), o.onComplete && o.onComplete()
                },
                name: e,
                motionValue: t,
                element: s ? void 0 : n
            };
            ! function({
                when: e,
                delay: t,
                delayChildren: i,
                staggerChildren: r,
                staggerDirection: n,
                repeat: s,
                repeatType: a,
                repeatDelay: o,
                from: l,
                elapsed: u,
                ...c
            }) {
                return !!Object.keys(c).length
            }(o) && Object.assign(c, ((e, {
                keyframes: t
            }) => t.length > 2 ? rm : A.has(e) ? e.startsWith("scale") ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            } : rp : rf)(e, c)), c.duration && (c.duration = ia(c.duration)), c.repeatDelay && (c.repeatDelay = ia(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (ii(c), 0 === c.delay && (d = !0)), (em.instantAnimations || em.skipAnimations) && (d = !0, ii(c), c.delay = 0), c.allowFlatten = !o.type && !o.ease, d && !s && void 0 !== t.get()) {
                let e = function(e, {
                    repeat: t,
                    repeatType: i = "loop"
                }, r) {
                    let n = e.filter(rh),
                        s = t && "loop" !== i && t % 2 == 1 ? 0 : n.length - 1;
                    return n[s]
                }(c.keyframes, o);
                if (void 0 !== e) return void eg.update(() => {
                    c.onUpdate(e), c.onComplete()
                })
            }
            return o.isSync ? new i4(c) : new rd(c)
        };

    function rg(e, t, {
        delay: i = 0,
        transitionOverride: r,
        type: n
    } = {}) {
        let {
            transition: s = e.getDefaultTransition(),
            transitionEnd: a,
            ...o
        } = t;
        r && (s = r);
        let l = [],
            u = n && e.animationState && e.animationState.getState()[n];
        for (let t in o) {
            let r = e.getValue(t, e.latestValues[t] ? ? null),
                n = o[t];
            if (void 0 === n || u && function({
                    protectedKeys: e,
                    needsAnimating: t
                }, i) {
                    let r = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1, r
                }(u, t)) continue;
            let a = {
                    delay: i,
                    ...t7(s || {}, t)
                },
                c = r.get();
            if (void 0 !== c && !r.isAnimating && !Array.isArray(n) && n === c && !a.velocity) continue;
            let d = !1;
            if (window.MotionHandoffAnimation) {
                let i = e.props[t8];
                if (i) {
                    let e = window.MotionHandoffAnimation(i, t, eg);
                    null !== e && (a.startTime = e, d = !0)
                }
            }
            it(e, t), r.start(rA(t, r, n, e.shouldReduceMotion && _.has(t) ? {
                type: !1
            } : a, e, d));
            let h = r.animation;
            h && l.push(h)
        }
        return a && Promise.all(l).then(() => {
            eg.update(() => {
                a && function(e, t) {
                    let {
                        transitionEnd: i = {},
                        transition: r = {},
                        ...n
                    } = t9(e, t) || {};
                    for (let t in n = { ...n,
                            ...i
                        }) {
                        var s;
                        let i = ie(s = n[t]) ? s[s.length - 1] || 0 : s;
                        e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, tt(i))
                    }
                }(e, a)
            })
        }), l
    }

    function rv(e, t, i, r = 0, n = 1) {
        let s = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            a = e.size,
            o = (a - 1) * r;
        return "function" == typeof i ? i(s, a) : 1 === n ? s * r : o - s * r
    }

    function ry(e, t, i = {}) {
        let r = t9(e, t, "exit" === i.type ? e.presenceContext ? .custom : void 0),
            {
                transition: n = e.getDefaultTransition() || {}
            } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let s = r ? () => Promise.all(rg(e, r, i)) : () => Promise.resolve(),
            a = e.variantChildren && e.variantChildren.size ? (r = 0) => {
                let {
                    delayChildren: s = 0,
                    staggerChildren: a,
                    staggerDirection: o
                } = n;
                return function(e, t, i = 0, r = 0, n = 0, s = 1, a) {
                    let o = [];
                    for (let l of e.variantChildren) l.notify("AnimationStart", t), o.push(ry(l, t, { ...a,
                        delay: i + ("function" == typeof r ? 0 : r) + rv(e.variantChildren, l, r, n, s)
                    }).then(() => l.notify("AnimationComplete", t)));
                    return Promise.all(o)
                }(e, t, r, s, a, o, i)
            } : () => Promise.resolve(),
            {
                when: o
            } = n;
        if (!o) return Promise.all([s(), a(i.delay)]); {
            let [e, t] = "beforeChildren" === o ? [s, a] : [a, s];
            return e().then(() => t())
        }
    }

    function rb(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let r = 0; r < i; r++)
            if (t[r] !== e[r]) return !1;
        return !0
    }
    let rx = tA.length,
        rw = [...tf].reverse(),
        rk = tf.length;

    function rT(e = !1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function rP() {
        return {
            animate: rT(!0),
            whileInView: rT(),
            whileHover: rT(),
            whileTap: rT(),
            whileDrag: rT(),
            whileFocus: rT(),
            exit: rT()
        }
    }
    class rS {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }
    let rj = 0,
        rC = {
            x: !1,
            y: !1
        };

    function rE(e, t, i, r = {
        passive: !0
    }) {
        return e.addEventListener(t, i, r), () => e.removeEventListener(t, i)
    }
    let rM = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

    function rR(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }

    function rV(e, t, i, r) {
        return rE(e, t, e => rM(e) && i(e, rR(e)), r)
    }

    function rN(e) {
        return e.max - e.min
    }

    function rD(e, t, i, r = .5) {
        e.origin = r, e.originPoint = N(t.min, t.max, e.origin), e.scale = rN(i) / rN(t), e.translate = N(i.min, i.max, e.origin) - e.originPoint, (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
    }

    function rq(e, t, i, r) {
        rD(e.x, t.x, i.x, r ? r.originX : void 0), rD(e.y, t.y, i.y, r ? r.originY : void 0)
    }

    function rL(e, t, i) {
        e.min = i.min + t.min, e.max = e.min + rN(t)
    }

    function rO(e, t, i) {
        e.min = t.min - i.min, e.max = e.min + rN(t)
    }

    function rF(e, t, i) {
        rO(e.x, t.x, i.x), rO(e.y, t.y, i.y)
    }

    function rI(e) {
        return [e("x"), e("y")]
    }
    let rz = ({
            current: e
        }) => e ? e.ownerDocument.defaultView : null,
        rB = (e, t) => Math.abs(e - t);
    class r$ {
        constructor(e, t, {
            transformPagePoint: i,
            contextWindow: r = window,
            dragSnapToOrigin: n = !1,
            distanceThreshold: s = 3
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                    var e, t;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let i = r_(this.lastMoveEventInfo, this.history),
                        r = null !== this.startEvent,
                        n = (e = i.offset, t = {
                            x: 0,
                            y: 0
                        }, Math.sqrt(rB(e.x, t.x) ** 2 + rB(e.y, t.y) ** 2) >= this.distanceThreshold);
                    if (!r && !n) return;
                    let {
                        point: s
                    } = i, {
                        timestamp: a
                    } = ey;
                    this.history.push({ ...s,
                        timestamp: a
                    });
                    let {
                        onStart: o,
                        onMove: l
                    } = this.handlers;
                    r || (o && o(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                }, this.handlePointerMove = (e, t) => {
                    this.lastMoveEvent = e, this.lastMoveEventInfo = rU(t, this.transformPagePoint), eg.update(this.updatePoint, !0)
                }, this.handlePointerUp = (e, t) => {
                    this.end();
                    let {
                        onEnd: i,
                        onSessionEnd: r,
                        resumeAnimation: n
                    } = this.handlers;
                    if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let s = r_("pointercancel" === e.type ? this.lastMoveEventInfo : rU(t, this.transformPagePoint), this.history);
                    this.startEvent && i && i(e, s), r && r(e, s)
                }, !rM(e)) return;
            this.dragSnapToOrigin = n, this.handlers = t, this.transformPagePoint = i, this.distanceThreshold = s, this.contextWindow = r || window;
            const a = rU(rR(e), this.transformPagePoint),
                {
                    point: o
                } = a,
                {
                    timestamp: l
                } = ey;
            this.history = [{ ...o,
                timestamp: l
            }];
            const {
                onSessionStart: u
            } = t;
            u && u(e, r_(a, this.history)), this.removeListeners = is(rV(this.contextWindow, "pointermove", this.handlePointerMove), rV(this.contextWindow, "pointerup", this.handlePointerUp), rV(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(e) {
            this.handlers = e
        }
        end() {
            this.removeListeners && this.removeListeners(), ev(this.updatePoint)
        }
    }

    function rU(e, t) {
        return t ? {
            point: t(e.point)
        } : e
    }

    function rW(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }

    function r_({
        point: e
    }, t) {
        return {
            point: e,
            delta: rW(e, rH(t)),
            offset: rW(e, t[0]),
            velocity: function(e, t) {
                if (e.length < 2) return {
                    x: 0,
                    y: 0
                };
                let i = e.length - 1,
                    r = null,
                    n = rH(e);
                for (; i >= 0 && (r = e[i], !(n.timestamp - r.timestamp > ia(.1)));) i--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                let s = (n.timestamp - r.timestamp) / 1e3;
                if (0 === s) return {
                    x: 0,
                    y: 0
                };
                let a = {
                    x: (n.x - r.x) / s,
                    y: (n.y - r.y) / s
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }(t, .1)
        }
    }

    function rH(e) {
        return e[e.length - 1]
    }

    function rY(e, t, i) {
        return {
            min: void 0 !== t ? e.min + t : void 0,
            max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0
        }
    }

    function rX(e, t) {
        let i = t.min - e.min,
            r = t.max - e.max;
        return t.max - t.min < e.max - e.min && ([i, r] = [r, i]), {
            min: i,
            max: r
        }
    }

    function rK(e, t, i) {
        return {
            min: rG(e, t),
            max: rG(e, i)
        }
    }

    function rG(e, t) {
        return "number" == typeof e ? e : e[t] || 0
    }
    let rZ = new WeakMap;
    class rJ {
        constructor(e) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tu(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e
        }
        start(e, {
            snapToCursor: t = !1,
            distanceThreshold: i
        } = {}) {
            let {
                presenceContext: r
            } = this.visualElement;
            if (r && !1 === r.isPresent) return;
            let n = e => {
                    let {
                        dragSnapToOrigin: i
                    } = this.getProps();
                    i ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(rR(e).point)
                },
                s = (e, t) => {
                    let {
                        drag: i,
                        dragPropagation: r,
                        onDragStart: n
                    } = this.getProps();
                    if (i && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = function(e) {
                            if ("x" === e || "y" === e)
                                if (rC[e]) return null;
                                else return rC[e] = !0, () => {
                                    rC[e] = !1
                                };
                            return rC.x || rC.y ? null : (rC.x = rC.y = !0, () => {
                                rC.x = rC.y = !1
                            })
                        }(i), !this.openDragLock)) return;
                    this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rI(e => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (J.test(t)) {
                            let {
                                projection: i
                            } = this.visualElement;
                            if (i && i.layout) {
                                let r = i.layout.layoutBox[e];
                                r && (t = rN(r) * (parseFloat(t) / 100))
                            }
                        }
                        this.originPoint[e] = t
                    }), n && eg.postRender(() => n(e, t)), it(this.visualElement, "transform");
                    let {
                        animationState: s
                    } = this.visualElement;
                    s && s.setActive("whileDrag", !0)
                },
                a = (e, t) => {
                    this.latestPointerEvent = e, this.latestPanInfo = t;
                    let {
                        dragPropagation: i,
                        dragDirectionLock: r,
                        onDirectionLock: n,
                        onDrag: s
                    } = this.getProps();
                    if (!i && !this.openDragLock) return;
                    let {
                        offset: a
                    } = t;
                    if (r && null === this.currentDirection) {
                        this.currentDirection = function(e, t = 10) {
                            let i = null;
                            return Math.abs(e.y) > t ? i = "y" : Math.abs(e.x) > t && (i = "x"), i
                        }(a), null !== this.currentDirection && n && n(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), s && s(e, t)
                },
                o = (e, t) => {
                    this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                l = () => rI(e => "paused" === this.getAnimationState(e) && this.getAxisMotionValue(e).animation ? .play()),
                {
                    dragSnapToOrigin: u
                } = this.getProps();
            this.panSession = new r$(e, {
                onSessionStart: n,
                onStart: s,
                onMove: a,
                onSessionEnd: o,
                resumeAnimation: l
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: u,
                distanceThreshold: i,
                contextWindow: rz(this.visualElement)
            })
        }
        stop(e, t) {
            let i = e || this.latestPointerEvent,
                r = t || this.latestPanInfo,
                n = this.isDragging;
            if (this.cancel(), !n || !r || !i) return;
            let {
                velocity: s
            } = r;
            this.startAnimation(s);
            let {
                onDragEnd: a
            } = this.getProps();
            a && eg.postRender(() => a(i, r))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: e,
                animationState: t
            } = this.visualElement;
            e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
            let {
                dragPropagation: i
            } = this.getProps();
            !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1)
        }
        updateAxis(e, t, i) {
            let {
                drag: r
            } = this.getProps();
            if (!i || !rQ(e, r, this.currentDirection)) return;
            let n = this.getAxisMotionValue(e),
                s = this.originPoint[e] + i[e];
            this.constraints && this.constraints[e] && (s = function(e, {
                min: t,
                max: i
            }, r) {
                return void 0 !== t && e < t ? e = r ? N(t, e, r.min) : Math.max(e, t) : void 0 !== i && e > i && (e = r ? N(i, e, r.max) : Math.min(e, i)), e
            }(s, this.constraints[e], this.elastic[e])), n.set(s)
        }
        resolveConstraints() {
            let {
                dragConstraints: e,
                dragElastic: t
            } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, r = this.constraints;
            e && t3(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = function(e, {
                top: t,
                left: i,
                bottom: r,
                right: n
            }) {
                return {
                    x: rY(e.x, i, n),
                    y: rY(e.y, t, r)
                }
            }(i.layoutBox, e) : this.constraints = !1, this.elastic = function(e = .35) {
                return !1 === e ? e = 0 : !0 === e && (e = .35), {
                    x: rK(e, "left", "right"),
                    y: rK(e, "top", "bottom")
                }
            }(t), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && rI(e => {
                var t, r;
                let n;
                !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = (t = i.layoutBox[e], r = this.constraints[e], n = {}, void 0 !== r.min && (n.min = r.min - t.min), void 0 !== r.max && (n.max = r.max - t.min), n))
            })
        }
        resolveRefConstraints() {
            var e;
            let {
                dragConstraints: t,
                onMeasureDragConstraints: i
            } = this.getProps();
            if (!t || !t3(t)) return !1;
            let r = t.current;
            eo(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: n
            } = this.visualElement;
            if (!n || !n.layout) return !1;
            let s = function(e, t, i) {
                    let r = W(e, i),
                        {
                            scroll: n
                        } = t;
                    return n && (B(r.x, n.offset.x), B(r.y, n.offset.y)), r
                }(r, n.root, this.visualElement.getTransformPagePoint()),
                a = (e = n.layout.layoutBox, {
                    x: rX(e.x, s.x),
                    y: rX(e.y, s.y)
                });
            if (i) {
                let e = i(function({
                    x: e,
                    y: t
                }) {
                    return {
                        top: t.min,
                        right: e.max,
                        bottom: t.max,
                        left: e.min
                    }
                }(a));
                this.hasMutatedConstraints = !!e, e && (a = V(e))
            }
            return a
        }
        startAnimation(e) {
            let {
                drag: t,
                dragMomentum: i,
                dragElastic: r,
                dragTransition: n,
                dragSnapToOrigin: s,
                onDragTransitionEnd: a
            } = this.getProps(), o = this.constraints || {};
            return Promise.all(rI(a => {
                if (!rQ(a, t, this.currentDirection)) return;
                let l = o && o[a] || {};
                s && (l = {
                    min: 0,
                    max: 0
                });
                let u = {
                    type: "inertia",
                    velocity: i ? e[a] : 0,
                    bounceStiffness: r ? 200 : 1e6,
                    bounceDamping: r ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...n,
                    ...l
                };
                return this.startAxisValueAnimation(a, u)
            })).then(a)
        }
        startAxisValueAnimation(e, t) {
            let i = this.getAxisMotionValue(e);
            return it(this.visualElement, e), i.start(rA(e, i, 0, t, this.visualElement, !1))
        }
        stopAnimation() {
            rI(e => this.getAxisMotionValue(e).stop())
        }
        pauseAnimation() {
            rI(e => this.getAxisMotionValue(e).animation ? .pause())
        }
        getAnimationState(e) {
            return this.getAxisMotionValue(e).animation ? .state
        }
        getAxisMotionValue(e) {
            let t = `_drag${e.toUpperCase()}`,
                i = this.visualElement.getProps();
            return i[t] || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
        }
        snapToCursor(e) {
            rI(t => {
                let {
                    drag: i
                } = this.getProps();
                if (!rQ(t, i, this.currentDirection)) return;
                let {
                    projection: r
                } = this.visualElement, n = this.getAxisMotionValue(t);
                if (r && r.layout) {
                    let {
                        min: i,
                        max: s
                    } = r.layout.layoutBox[t];
                    n.set(e[t] - N(i, s, .5))
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: e,
                dragConstraints: t
            } = this.getProps(), {
                projection: i
            } = this.visualElement;
            if (!t3(t) || !i || !this.constraints) return;
            this.stopAnimation();
            let r = {
                x: 0,
                y: 0
            };
            rI(e => {
                let t = this.getAxisMotionValue(e);
                if (t && !1 !== this.constraints) {
                    var i, n;
                    let s, a, o, l = t.get();
                    r[e] = (i = {
                        min: l,
                        max: l
                    }, n = this.constraints[e], s = .5, a = rN(i), (o = rN(n)) > a ? s = iQ(n.min, n.max - a, i.min) : a > o && (s = iQ(i.min, i.max - o, n.min)), H(0, 1, s))
                }
            });
            let {
                transformTemplate: n
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), rI(t => {
                if (!rQ(t, e, null)) return;
                let i = this.getAxisMotionValue(t),
                    {
                        min: n,
                        max: s
                    } = this.constraints[t];
                i.set(N(n, s, r[t]))
            })
        }
        addListeners() {
            if (!this.visualElement.current) return;
            rZ.set(this.visualElement, this);
            let e = rV(this.visualElement.current, "pointerdown", e => {
                    let {
                        drag: t,
                        dragListener: i = !0
                    } = this.getProps();
                    t && i && this.start(e)
                }),
                t = () => {
                    let {
                        dragConstraints: e
                    } = this.getProps();
                    t3(e) && e.current && (this.constraints = this.resolveRefConstraints())
                },
                {
                    projection: i
                } = this.visualElement,
                r = i.addEventListener("measure", t);
            i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), eg.read(t);
            let n = rE(window, "resize", () => this.scalePositionWithinConstraints()),
                s = i.addEventListener("didUpdate", ({
                    delta: e,
                    hasLayoutChanged: t
                }) => {
                    this.isDragging && t && (rI(t => {
                        let i = this.getAxisMotionValue(t);
                        i && (this.originPoint[t] += e[t].translate, i.set(i.get() + e[t].translate))
                    }), this.visualElement.render())
                });
            return () => {
                n(), e(), r(), s && s()
            }
        }
        getProps() {
            let e = this.visualElement.getProps(),
                {
                    drag: t = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: r = !1,
                    dragConstraints: n = !1,
                    dragElastic: s = .35,
                    dragMomentum: a = !0
                } = e;
            return { ...e,
                drag: t,
                dragDirectionLock: i,
                dragPropagation: r,
                dragConstraints: n,
                dragElastic: s,
                dragMomentum: a
            }
        }
    }

    function rQ(e, t, i) {
        return (!0 === t || t === e) && (null === i || i === e)
    }
    let r0 = e => (t, i) => {
        e && eg.postRender(() => e(t, i))
    };
    var r1 = s;
    let r2 = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

    function r5(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
    }
    let r3 = {
            correct: (e, t) => {
                if (!t.target) return e;
                if ("string" == typeof e)
                    if (!Q.test(e)) return e;
                    else e = parseFloat(e);
                let i = r5(e, t.target.x),
                    r = r5(e, t.target.y);
                return `${i}% ${r}%`
            }
        },
        r8 = !1;
    class r6 extends r1.Component {
        componentDidMount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: i,
                layoutId: r
            } = this.props, {
                projection: n
            } = e;
            for (let e in r9) tE[e] = r9[e], C(e) && (tE[e].isCSSVariable = !0);
            n && (t.group && t.group.add(n), i && i.register && r && i.register(n), r8 && n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), n.setOptions({ ...n.options,
                onExitComplete: () => this.safeToRemove()
            })), r2.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(e) {
            let {
                layoutDependency: t,
                visualElement: i,
                drag: r,
                isPresent: n
            } = this.props, {
                projection: s
            } = i;
            return s && (s.isPresent = n, r8 = !0, r || e.layoutDependency !== t || void 0 === t || e.isPresent !== n ? s.willUpdate() : this.safeToRemove(), e.isPresent !== n && (n ? s.promote() : s.relegate() || eg.postRender(() => {
                let e = s.getStack();
                e && e.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                projection: e
            } = this.props.visualElement;
            e && (e.root.didUpdate(), tr.postRender(() => {
                !e.currentAnimation && e.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: i
            } = this.props, {
                projection: r
            } = e;
            r8 = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), i && i.deregister && i.deregister(r))
        }
        safeToRemove() {
            let {
                safeToRemove: e
            } = this.props;
            e && e()
        }
        render() {
            return null
        }
    }

    function r4(e) {
        let [t, i] = m(), r = (0, r1.useContext)(a);
        return (0, tU.jsx)(r6, { ...e,
            layoutGroup: r,
            switchLayoutGroup: (0, r1.useContext)(t6),
            isPresent: t,
            safeToRemove: i
        })
    }
    let r9 = {
        borderRadius: { ...r3,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: r3,
        borderTopRightRadius: r3,
        borderBottomLeftRadius: r3,
        borderBottomRightRadius: r3,
        boxShadow: {
            correct: (e, {
                treeScale: t,
                projectionDelta: i
            }) => {
                let r = eH.parse(e);
                if (r.length > 5) return e;
                let n = eH.createTransformer(e),
                    s = +("number" != typeof r[0]),
                    a = i.x.scale * t.x,
                    o = i.y.scale * t.y;
                r[0 + s] /= a, r[1 + s] /= o;
                let l = N(a, o, .5);
                return "number" == typeof r[2 + s] && (r[2 + s] /= l), "number" == typeof r[3 + s] && (r[3 + s] /= l), n(r)
            }
        }
    };

    function r7(e) {
        return d(e) && "ownerSVGElement" in e
    }
    let ne = (e, t) => e.depth - t.depth;
    class nt {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(e) {
            e4(this.children, e), this.isDirty = !0
        }
        remove(e) {
            e9(this.children, e), this.isDirty = !0
        }
        forEach(e) {
            this.isDirty && this.children.sort(ne), this.isDirty = !1, this.children.forEach(e)
        }
    }
    let ni = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nr = ni.length,
        nn = e => "string" == typeof e ? parseFloat(e) : e,
        ns = e => "number" == typeof e || Q.test(e);

    function na(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius
    }
    let no = nu(0, .5, iX),
        nl = nu(.5, .95, ep);

    function nu(e, t, i) {
        return r => r < e ? 0 : r > t ? 1 : i(iQ(e, t, r))
    }

    function nc(e, t) {
        e.min = t.min, e.max = t.max
    }

    function nd(e, t) {
        nc(e.x, t.x), nc(e.y, t.y)
    }

    function nh(e, t) {
        e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
    }

    function np(e, t, i, r, n) {
        return e -= t, e = r + 1 / i * (e - r), void 0 !== n && (e = r + 1 / n * (e - r)), e
    }

    function nm(e, t, [i, r, n], s, a) {
        ! function(e, t = 0, i = 1, r = .5, n, s = e, a = e) {
            if (J.test(t) && (t = parseFloat(t), t = N(a.min, a.max, t / 100) - a.min), "number" != typeof t) return;
            let o = N(s.min, s.max, r);
            e === s && (o -= t), e.min = np(e.min, t, i, o, n), e.max = np(e.max, t, i, o, n)
        }(e, t[i], t[r], t[n], t.scale, s, a)
    }
    let nf = ["x", "scaleX", "originX"],
        nA = ["y", "scaleY", "originY"];

    function ng(e, t, i, r) {
        nm(e.x, t, nf, i ? i.x : void 0, r ? r.x : void 0), nm(e.y, t, nA, i ? i.y : void 0, r ? r.y : void 0)
    }

    function nv(e) {
        return 0 === e.translate && 1 === e.scale
    }

    function ny(e) {
        return nv(e.x) && nv(e.y)
    }

    function nb(e, t) {
        return e.min === t.min && e.max === t.max
    }

    function nx(e, t) {
        return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
    }

    function nw(e, t) {
        return nx(e.x, t.x) && nx(e.y, t.y)
    }

    function nk(e) {
        return rN(e.x) / rN(e.y)
    }

    function nT(e, t) {
        return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
    }
    class nP {
        constructor() {
            this.members = []
        }
        add(e) {
            e4(this.members, e), e.scheduleRender()
        }
        remove(e) {
            if (e9(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                let e = this.members[this.members.length - 1];
                e && this.promote(e)
            }
        }
        relegate(e) {
            let t, i = this.members.findIndex(t => e === t);
            if (0 === i) return !1;
            for (let e = i; e >= 0; e--) {
                let i = this.members[e];
                if (!1 !== i.isPresent) {
                    t = i;
                    break
                }
            }
            return !!t && (this.promote(t), !0)
        }
        promote(e, t) {
            let i = this.lead;
            if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
                i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, t && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                let {
                    crossfade: r
                } = e.options;
                !1 === r && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(e => {
                let {
                    options: t,
                    resumingFrom: i
                } = e;
                t.onExitComplete && t.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
            })
        }
        scheduleRender() {
            this.members.forEach(e => {
                e.instance && e.scheduleRender(!1)
            })
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    let nS = ["", "X", "Y", "Z"],
        nj = 0;

    function nC(e, t, i, r) {
        let {
            latestValues: n
        } = t;
        n[e] && (i[e] = n[e], t.setStaticValue(e, 0), r && (r[e] = 0))
    }

    function nE({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n
    }) {
        return class {
            constructor(e = {}, i = t ? .()) {
                this.id = nj++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, this.nodes.forEach(nV), this.nodes.forEach(nI), this.nodes.forEach(nz), this.nodes.forEach(nN)
                }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                this.root === this && (this.nodes = new nt)
            }
            addEventListener(e, t) {
                return this.eventHandlers.has(e) || this.eventHandlers.set(e, new e7), this.eventHandlers.get(e).add(t)
            }
            notifyListeners(e, ...t) {
                let i = this.eventHandlers.get(e);
                i && i.notify(...t)
            }
            hasListeners(e) {
                return this.eventHandlers.has(e)
            }
            mount(t) {
                if (this.instance) return;
                this.isSVG = r7(t) && !(r7(t) && "svg" === t.tagName), this.instance = t;
                let {
                    layoutId: i,
                    layout: r,
                    visualElement: n
                } = this.options;
                if (n && !n.current && n.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || i) && (this.isLayoutDirty = !0), e) {
                    let i, r = 0,
                        n = () => this.root.updateBlockedByResize = !1;
                    eg.read(() => {
                        r = window.innerWidth
                    }), e(t, () => {
                        let e = window.innerWidth;
                        if (e !== r) {
                            let t, s;
                            r = e, this.root.updateBlockedByResize = !0, i && i(), t = e6.now(), s = ({
                                timestamp: e
                            }) => {
                                let i = e - t;
                                i >= 250 && (ev(s), n(i - 250))
                            }, eg.setup(s, !0), i = () => ev(s), r2.hasAnimatedSinceResize && (r2.hasAnimatedSinceResize = !1, this.nodes.forEach(nF))
                        }
                    })
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && n && (i || r) && this.addEventListener("didUpdate", ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeLayoutChanged: i,
                    layout: r
                }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0, this.relativeTarget = void 0;
                        return
                    }
                    let s = this.options.transition || n.getDefaultTransition() || nH,
                        {
                            onLayoutAnimationStart: a,
                            onLayoutAnimationComplete: o
                        } = n.getProps(),
                        l = !this.targetLayout || !nw(this.targetLayout, r),
                        u = !t && i;
                    if (this.options.layoutRoot || this.resumeFrom || u || t && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        let t = { ...t7(s, "layout"),
                            onPlay: a,
                            onComplete: o
                        };
                        (n.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, u)
                    } else t || nF(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = r
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                let e = this.getStack();
                e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ev(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(nB), this.animationId++)
            }
            getTransformTemplate() {
                let {
                    visualElement: e
                } = this.options;
                return e && e.getProps().transformTemplate
            }
            willUpdate(e = !0) {
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function e(t) {
                        if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
                        let {
                            visualElement: i
                        } = t.options;
                        if (!i) return;
                        let r = i.props[t8];
                        if (window.MotionHasOptimisedAnimation(r, "transform")) {
                            let {
                                layout: e,
                                layoutId: i
                            } = t.options;
                            window.MotionCancelOptimisedAnimation(r, "transform", eg, !(e || i))
                        }
                        let {
                            parent: n
                        } = t;
                        n && !n.hasCheckedOptimisedAppear && e(n)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let e = 0; e < this.path.length; e++) {
                    let t = this.path[e];
                    t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
                }
                let {
                    layoutId: t,
                    layout: i
                } = this.options;
                if (void 0 === t && !i) return;
                let r = this.getTransformTemplate();
                this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                    this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nq);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(nL);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(nO), this.nodes.forEach(nM), this.nodes.forEach(nR)) : this.nodes.forEach(nL), this.clearAllSnapshots();
                let e = e6.now();
                ey.delta = H(0, 1e3 / 60, e - ey.timestamp), ey.timestamp = e, ey.isProcessing = !0, eb.update.process(ey), eb.preRender.process(ey), eb.render.process(ey), ey.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, tr.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(nD), this.sharedNodes.forEach(n$)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, eg.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                eg.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || rN(this.snapshot.measuredBox.x) || rN(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                let e = this.layout;
                this.layout = this.measure(!1), this.layoutCorrected = tu(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                let {
                    visualElement: t
                } = this.options;
                t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
            }
            updateScroll(e = "measure") {
                let t = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
                    let t = r(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: t,
                        offset: i(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : t
                    }
                }
            }
            resetTransform() {
                if (!n) return;
                let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    t = this.projectionDelta && !ny(this.projectionDelta),
                    i = this.getTransformTemplate(),
                    r = i ? i(this.latestValues, "") : void 0,
                    s = r !== this.prevTransformTemplateValue;
                e && this.instance && (t || L(this.latestValues) || s) && (n(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure(e = !0) {
                var t;
                let i = this.measurePageBox(),
                    r = this.removeElementScroll(i);
                return e && (r = this.removeTransform(r)), nK((t = r).x), nK(t.y), {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: r,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                let {
                    visualElement: e
                } = this.options;
                if (!e) return tu();
                let t = e.measureViewportBox();
                if (!(this.scroll ? .wasRoot || this.path.some(nZ))) {
                    let {
                        scroll: e
                    } = this.root;
                    e && (B(t.x, e.offset.x), B(t.y, e.offset.y))
                }
                return t
            }
            removeElementScroll(e) {
                let t = tu();
                if (nd(t, e), this.scroll ? .wasRoot) return t;
                for (let i = 0; i < this.path.length; i++) {
                    let r = this.path[i],
                        {
                            scroll: n,
                            options: s
                        } = r;
                    r !== this.root && n && s.layoutScroll && (n.wasRoot && nd(t, e), B(t.x, n.offset.x), B(t.y, n.offset.y))
                }
                return t
            }
            applyTransform(e, t = !1) {
                let i = tu();
                nd(i, e);
                for (let e = 0; e < this.path.length; e++) {
                    let r = this.path[e];
                    !t && r.options.layoutScroll && r.scroll && r !== r.root && U(i, {
                        x: -r.scroll.offset.x,
                        y: -r.scroll.offset.y
                    }), L(r.latestValues) && U(i, r.latestValues)
                }
                return L(this.latestValues) && U(i, this.latestValues), i
            }
            removeTransform(e) {
                let t = tu();
                nd(t, e);
                for (let e = 0; e < this.path.length; e++) {
                    let i = this.path[e];
                    if (!i.instance || !L(i.latestValues)) continue;
                    q(i.latestValues) && i.updateSnapshot();
                    let r = tu();
                    nd(r, i.measurePageBox()), ng(t, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, r)
                }
                return L(this.latestValues) && ng(t, this.latestValues), t
            }
            setTargetDelta(e) {
                this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
            }
            setOptions(e) {
                this.options = { ...this.options,
                    ...e,
                    crossfade: void 0 === e.crossfade || e.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ey.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(e = !1) {
                let t = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
                let i = !!this.resumingFrom || this !== t;
                if (!(e || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: r,
                    layoutId: n
                } = this.options;
                if (this.layout && (r || n)) {
                    if (this.resolvedRelativeTargetAt = ey.timestamp, !this.targetDelta && !this.relativeTarget) {
                        let e = this.getClosestProjectingParent();
                        e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tu(), this.relativeTargetOrigin = tu(), rF(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), nd(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    if (this.relativeTarget || this.targetDelta) {
                        if (this.target || (this.target = tu(), this.targetWithTransforms = tu()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                            var s, a, o;
                            this.forceRelativeParentToResolveTarget(), s = this.target, a = this.relativeTarget, o = this.relativeParent.target, rL(s.x, a.x, o.x), rL(s.y, a.y, o.y)
                        } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nd(this.target, this.layout.layoutBox), z(this.target, this.targetDelta)) : nd(this.target, this.layout.layoutBox);
                        if (this.attemptToResolveRelativeTarget) {
                            this.attemptToResolveRelativeTarget = !1;
                            let e = this.getClosestProjectingParent();
                            e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tu(), this.relativeTargetOrigin = tu(), rF(this.relativeTargetOrigin, this.target, e.target), nd(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                    }
                }
            }
            getClosestProjectingParent() {
                if (!(!this.parent || q(this.parent.latestValues) || O(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            calcProjection() {
                let e = this.getLead(),
                    t = !!this.resumingFrom || this !== e,
                    i = !0;
                if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (i = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === ey.timestamp && (i = !1), i) return;
                let {
                    layout: r,
                    layoutId: n
                } = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || n)) return;
                nd(this.layoutCorrected, this.layout.layoutBox);
                let s = this.treeScale.x,
                    a = this.treeScale.y;
                ! function(e, t, i, r = !1) {
                    let n, s, a = i.length;
                    if (a) {
                        t.x = t.y = 1;
                        for (let o = 0; o < a; o++) {
                            s = (n = i[o]).projectionDelta;
                            let {
                                visualElement: a
                            } = n.options;
                            (!a || !a.props.style || "contents" !== a.props.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && U(e, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), s && (t.x *= s.x.scale, t.y *= s.y.scale, z(e, s)), r && L(n.latestValues) && U(e, n.latestValues))
                        }
                        t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
                    }
                }(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = tu());
                let {
                    target: o
                } = e;
                if (!o) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (nh(this.prevProjectionDelta.x, this.projectionDelta.x), nh(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), rq(this.projectionDelta, this.layoutCorrected, o, this.latestValues), this.treeScale.x === s && this.treeScale.y === a && nT(this.projectionDelta.x, this.prevProjectionDelta.x) && nT(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", o))
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(e = !0) {
                if (this.options.visualElement ? .scheduleRender(), e) {
                    let e = this.getStack();
                    e && e.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = to(), this.projectionDelta = to(), this.projectionDeltaWithTransform = to()
            }
            setAnimationOrigin(e, t = !1) {
                let i, r = this.snapshot,
                    n = r ? r.latestValues : {},
                    s = { ...this.latestValues
                    },
                    a = to();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                let o = tu(),
                    l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    u = this.getStack(),
                    c = !u || u.members.length <= 1,
                    d = !!(l && !c && !0 === this.options.crossfade && !this.path.some(n_));
                this.animationProgress = 0, this.mixTargetDelta = t => {
                    let r = t / 1e3;
                    if (nU(a.x, e.x, r), nU(a.y, e.y, r), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var u, h, p, m, f, A;
                        rF(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, f = o, A = r, nW(p.x, m.x, f.x, A), nW(p.y, m.y, f.y, A), i && (u = this.relativeTarget, h = i, nb(u.x, h.x) && nb(u.y, h.y)) && (this.isProjectionDirty = !1), i || (i = tu()), nd(i, this.relativeTarget)
                    }
                    l && (this.animationValues = s, function(e, t, i, r, n, s) {
                        n ? (e.opacity = N(0, i.opacity ? ? 1, no(r)), e.opacityExit = N(t.opacity ? ? 1, 0, nl(r))) : s && (e.opacity = N(t.opacity ? ? 1, i.opacity ? ? 1, r));
                        for (let n = 0; n < nr; n++) {
                            let s = `border${ni[n]}Radius`,
                                a = na(t, s),
                                o = na(i, s);
                            (void 0 !== a || void 0 !== o) && (a || (a = 0), o || (o = 0), 0 === a || 0 === o || ns(a) === ns(o) ? (e[s] = Math.max(N(nn(a), nn(o), r), 0), (J.test(o) || J.test(a)) && (e[s] += "%")) : e[s] = o)
                        }(t.rotate || i.rotate) && (e.rotate = N(t.rotate || 0, i.rotate || 0, r))
                    }(s, n, this.latestValues, r, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
                }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(e) {
                this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (ev(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = eg.update(() => {
                    var t, i, r;
                    let n;
                    r2.hasAnimatedSinceResize = !0, io.layout++, this.motionValue || (this.motionValue = tt(0)), this.currentAnimation = (t = this.motionValue, i = [0, 1e3], r = { ...e,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: t => {
                            this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                        },
                        onStop: () => {
                            io.layout--
                        },
                        onComplete: () => {
                            io.layout--, e.onComplete && e.onComplete(), this.completeAnimation()
                        }
                    }, (n = e3(t) ? t : tt(t)).start(rA("", n, i, r)), n.animation), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                let e = this.getStack();
                e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                let e = this.getLead(),
                    {
                        targetWithTransforms: t,
                        target: i,
                        layout: r,
                        latestValues: n
                    } = e;
                if (t && i && r) {
                    if (this !== e && this.layout && r && nG(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                        i = this.target || tu();
                        let t = rN(this.layout.layoutBox.x);
                        i.x.min = e.target.x.min, i.x.max = i.x.min + t;
                        let r = rN(this.layout.layoutBox.y);
                        i.y.min = e.target.y.min, i.y.max = i.y.min + r
                    }
                    nd(t, i), U(t, n), rq(this.projectionDeltaWithTransform, this.layoutCorrected, t, n)
                }
            }
            registerSharedNode(e, t) {
                this.sharedNodes.has(e) || this.sharedNodes.set(e, new nP), this.sharedNodes.get(e).add(t);
                let i = t.options.initialPromotionConfig;
                t.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(t) : void 0
                })
            }
            isLead() {
                let e = this.getStack();
                return !e || e.lead === this
            }
            getLead() {
                let {
                    layoutId: e
                } = this.options;
                return e && this.getStack() ? .lead || this
            }
            getPrevLead() {
                let {
                    layoutId: e
                } = this.options;
                return e ? this.getStack() ? .prevLead : void 0
            }
            getStack() {
                let {
                    layoutId: e
                } = this.options;
                if (e) return this.root.sharedNodes.get(e)
            }
            promote({
                needsReset: e,
                transition: t,
                preserveFollowOpacity: i
            } = {}) {
                let r = this.getStack();
                r && r.promote(this, i), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                    transition: t
                })
            }
            relegate() {
                let e = this.getStack();
                return !!e && e.relegate(this)
            }
            resetSkewAndRotation() {
                let {
                    visualElement: e
                } = this.options;
                if (!e) return;
                let t = !1,
                    {
                        latestValues: i
                    } = e;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (t = !0), !t) return;
                let r = {};
                i.z && nC("z", e, r, this.animationValues);
                for (let t = 0; t < nS.length; t++) nC(`rotate${nS[t]}`, e, r, this.animationValues), nC(`skew${nS[t]}`, e, r, this.animationValues);
                for (let t in e.render(), r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
                e.scheduleRender()
            }
            applyProjectionStyles(e, t) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) {
                    e.visibility = "hidden";
                    return
                }
                let i = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = tQ(t ? .pointerEvents) || "", e.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let r = this.getLead();
                if (!this.projectionDelta || !this.layout || !r.target) {
                    this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tQ(t ? .pointerEvents) || ""), this.hasProjected && !L(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1);
                    return
                }
                e.visibility = "";
                let n = r.animationValues || r.latestValues;
                this.applyTransformsToTarget();
                let s = function(e, t, i) {
                    let r = "",
                        n = e.x.translate / t.x,
                        s = e.y.translate / t.y,
                        a = i ? .z || 0;
                    if ((n || s || a) && (r = `translate3d(${n}px, ${s}px, ${a}px) `), (1 !== t.x || 1 !== t.y) && (r += `scale(${1/t.x}, ${1/t.y}) `), i) {
                        let {
                            transformPerspective: e,
                            rotate: t,
                            rotateX: n,
                            rotateY: s,
                            skewX: a,
                            skewY: o
                        } = i;
                        e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), n && (r += `rotateX(${n}deg) `), s && (r += `rotateY(${s}deg) `), a && (r += `skewX(${a}deg) `), o && (r += `skewY(${o}deg) `)
                    }
                    let o = e.x.scale * t.x,
                        l = e.y.scale * t.y;
                    return (1 !== o || 1 !== l) && (r += `scale(${o}, ${l})`), r || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, n);
                i && (s = i(n, s)), e.transform = s;
                let {
                    x: a,
                    y: o
                } = this.projectionDelta;
                for (let t in e.transformOrigin = `${100*a.origin}% ${100*o.origin}% 0`, r.animationValues ? e.opacity = r === this ? n.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : e.opacity = r === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, tE) {
                    if (void 0 === n[t]) continue;
                    let {
                        correct: i,
                        applyTo: a,
                        isCSSVariable: o
                    } = tE[t], l = "none" === s ? n[t] : i(n[t], r);
                    if (a) {
                        let t = a.length;
                        for (let i = 0; i < t; i++) e[a[i]] = l
                    } else o ? this.options.visualElement.renderState.vars[t] = l : e[t] = l
                }
                this.options.layoutId && (e.pointerEvents = r === this ? tQ(t ? .pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(e => e.currentAnimation ? .stop()), this.root.nodes.forEach(nq), this.root.sharedNodes.clear()
            }
        }
    }

    function nM(e) {
        e.updateLayout()
    }

    function nR(e) {
        let t = e.resumeFrom ? .snapshot || e.snapshot;
        if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
            let {
                layoutBox: i,
                measuredBox: r
            } = e.layout, {
                animationType: n
            } = e.options, s = t.source !== e.layout.source;
            "size" === n ? rI(e => {
                let r = s ? t.measuredBox[e] : t.layoutBox[e],
                    n = rN(r);
                r.min = i[e].min, r.max = r.min + n
            }) : nG(n, t.layoutBox, i) && rI(r => {
                let n = s ? t.measuredBox[r] : t.layoutBox[r],
                    a = rN(i[r]);
                n.max = n.min + a, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + a)
            });
            let a = to();
            rq(a, i, t.layoutBox);
            let o = to();
            s ? rq(o, e.applyTransform(r, !0), t.measuredBox) : rq(o, i, t.layoutBox);
            let l = !ny(a),
                u = !1;
            if (!e.resumeFrom) {
                let r = e.getClosestProjectingParent();
                if (r && !r.resumeFrom) {
                    let {
                        snapshot: n,
                        layout: s
                    } = r;
                    if (n && s) {
                        let a = tu();
                        rF(a, t.layoutBox, n.layoutBox);
                        let o = tu();
                        rF(o, i, s.layoutBox), nw(a, o) || (u = !0), r.options.layoutRoot && (e.relativeTarget = o, e.relativeTargetOrigin = a, e.relativeParent = r)
                    }
                }
            }
            e.notifyListeners("didUpdate", {
                layout: i,
                snapshot: t,
                delta: o,
                layoutDelta: a,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: u
            })
        } else if (e.isLead()) {
            let {
                onExitComplete: t
            } = e.options;
            t && t()
        }
        e.options.transition = void 0
    }

    function nV(e) {
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
    }

    function nN(e) {
        e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
    }

    function nD(e) {
        e.clearSnapshot()
    }

    function nq(e) {
        e.clearMeasurements()
    }

    function nL(e) {
        e.isLayoutDirty = !1
    }

    function nO(e) {
        let {
            visualElement: t
        } = e.options;
        t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
    }

    function nF(e) {
        e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
    }

    function nI(e) {
        e.resolveTargetDelta()
    }

    function nz(e) {
        e.calcProjection()
    }

    function nB(e) {
        e.resetSkewAndRotation()
    }

    function n$(e) {
        e.removeLeadSnapshot()
    }

    function nU(e, t, i) {
        e.translate = N(t.translate, 0, i), e.scale = N(t.scale, 1, i), e.origin = t.origin, e.originPoint = t.originPoint
    }

    function nW(e, t, i, r) {
        e.min = N(t.min, i.min, r), e.max = N(t.max, i.max, r)
    }

    function n_(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
    }
    let nH = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        nY = e => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
        nX = nY("applewebkit/") && !nY("chrome/") ? Math.round : ep;

    function nK(e) {
        e.min = nX(e.min), e.max = nX(e.max)
    }

    function nG(e, t, i) {
        return "position" === e || "preserve-aspect" === e && !(.2 >= Math.abs(nk(t) - nk(i)))
    }

    function nZ(e) {
        return e !== e.root && e.scroll ? .wasRoot
    }
    let nJ = nE({
            attachResizeListener: (e, t) => rE(e, "resize", t),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        }),
        nQ = {
            current: void 0
        },
        n0 = nE({
            measureScroll: e => ({
                x: e.scrollLeft,
                y: e.scrollTop
            }),
            defaultParent: () => {
                if (!nQ.current) {
                    let e = new nJ({});
                    e.mount(window), e.setOptions({
                        layoutScroll: !0
                    }), nQ.current = e
                }
                return nQ.current
            },
            resetTransform: (e, t) => {
                e.style.transform = void 0 !== t ? t : "none"
            },
            checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
        });

    function n1(e, t) {
        let i = function(e, t, i) {
                if (e instanceof EventTarget) return [e];
                if ("string" == typeof e) {
                    let t = document,
                        i = (void 0) ? ? t.querySelectorAll(e);
                    return i ? Array.from(i) : []
                }
                return Array.from(e)
            }(e),
            r = new AbortController;
        return [i, {
            passive: !0,
            ...t,
            signal: r.signal
        }, () => r.abort()]
    }

    function n2(e) {
        return !("touch" === e.pointerType || rC.x || rC.y)
    }

    function n5(e, t, i) {
        let {
            props: r
        } = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === i);
        let n = r["onHover" + i];
        n && eg.postRender(() => n(t, rR(t)))
    }
    let n3 = (e, t) => !!t && (e === t || n3(e, t.parentElement)),
        n8 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        n6 = new WeakSet;

    function n4(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function n9(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function n7(e) {
        return rM(e) && !(rC.x || rC.y)
    }

    function se(e, t, i) {
        let {
            props: r
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === i);
        let n = r["onTap" + ("End" === i ? "" : i)];
        n && eg.postRender(() => n(t, rR(t)))
    }
    let st = new WeakMap,
        si = new WeakMap,
        sr = e => {
            let t = st.get(e.target);
            t && t(e)
        },
        sn = e => {
            e.forEach(sr)
        },
        ss = {
            some: 0,
            all: 1
        },
        sa = function(e, t) {
            if ("undefined" == typeof Proxy) return t4;
            let i = new Map,
                r = (i, r) => t4(i, r, e, t);
            return new Proxy((e, t) => r(e, t), {
                get: (n, s) => "create" === s ? r : (i.has(s) || i.set(s, t4(s, void 0, e, t)), i.get(s))
            })
        }({
            animation: {
                Feature: class extends rS {
                    constructor(e) {
                        super(e), e.animationState || (e.animationState = function(e) {
                            let t = t => Promise.all(t.map(({
                                    animation: t,
                                    options: i
                                }) => (function(e, t, i = {}) {
                                    let r;
                                    if (e.notify("AnimationStart", t), Array.isArray(t)) r = Promise.all(t.map(t => ry(e, t, i)));
                                    else if ("string" == typeof t) r = ry(e, t, i);
                                    else {
                                        let n = "function" == typeof t ? t9(e, t, i.custom) : t;
                                        r = Promise.all(rg(e, n, i))
                                    }
                                    return r.then(() => {
                                        e.notify("AnimationComplete", t)
                                    })
                                })(e, t, i))),
                                i = rP(),
                                r = !0,
                                n = t => (i, r) => {
                                    let n = t9(e, r, "exit" === t ? e.presenceContext ? .custom : void 0);
                                    if (n) {
                                        let {
                                            transition: e,
                                            transitionEnd: t,
                                            ...r
                                        } = n;
                                        i = { ...i,
                                            ...r,
                                            ...t
                                        }
                                    }
                                    return i
                                };

                            function s(s) {
                                let {
                                    props: a
                                } = e, o = function e(t) {
                                    if (!t) return;
                                    if (!t.isControllingVariants) {
                                        let i = t.parent && e(t.parent) || {};
                                        return void 0 !== t.props.initial && (i.initial = t.props.initial), i
                                    }
                                    let i = {};
                                    for (let e = 0; e < rx; e++) {
                                        let r = tA[e],
                                            n = t.props[r];
                                        (tm(n) || !1 === n) && (i[r] = n)
                                    }
                                    return i
                                }(e.parent) || {}, l = [], u = new Set, c = {}, d = 1 / 0;
                                for (let t = 0; t < rk; t++) {
                                    var h, p;
                                    let m = rw[t],
                                        f = i[m],
                                        A = void 0 !== a[m] ? a[m] : o[m],
                                        g = tm(A),
                                        v = m === s ? f.isActive : null;
                                    !1 === v && (d = t);
                                    let y = A === o[m] && A !== a[m] && g;
                                    if (y && r && e.manuallyAnimateOnMount && (y = !1), f.protectedKeys = { ...c
                                        }, !f.isActive && null === v || !A && !f.prevProp || tp(A) || "boolean" == typeof A) continue;
                                    let b = (h = f.prevProp, "string" == typeof(p = A) ? p !== h : !!Array.isArray(p) && !rb(p, h)),
                                        x = b || m === s && f.isActive && !y && g || t > d && g,
                                        w = !1,
                                        k = Array.isArray(A) ? A : [A],
                                        T = k.reduce(n(m), {});
                                    !1 === v && (T = {});
                                    let {
                                        prevResolvedValues: P = {}
                                    } = f, S = { ...P,
                                        ...T
                                    }, j = t => {
                                        x = !0, u.has(t) && (w = !0, u.delete(t)), f.needsAnimating[t] = !0;
                                        let i = e.getValue(t);
                                        i && (i.liveStyle = !1)
                                    };
                                    for (let e in S) {
                                        let t = T[e],
                                            i = P[e];
                                        if (!c.hasOwnProperty(e))(ie(t) && ie(i) ? rb(t, i) : t === i) ? void 0 !== t && u.has(e) ? j(e) : f.protectedKeys[e] = !0 : null != t ? j(e) : u.add(e)
                                    }
                                    f.prevProp = A, f.prevResolvedValues = T, f.isActive && (c = { ...c,
                                        ...T
                                    }), r && e.blockInitialAnimation && (x = !1);
                                    let C = y && b,
                                        E = !C || w;
                                    x && E && l.push(...k.map(t => {
                                        let i = {
                                            type: m
                                        };
                                        if ("string" == typeof t && r && !C && e.manuallyAnimateOnMount && e.parent) {
                                            let {
                                                parent: r
                                            } = e, n = t9(r, t);
                                            if (r.enteringChildren && n) {
                                                let {
                                                    delayChildren: t
                                                } = n.transition || {};
                                                i.delay = rv(r.enteringChildren, e, t)
                                            }
                                        }
                                        return {
                                            animation: t,
                                            options: i
                                        }
                                    }))
                                }
                                if (u.size) {
                                    let t = {};
                                    if ("boolean" != typeof a.initial) {
                                        let i = t9(e, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                                        i && i.transition && (t.transition = i.transition)
                                    }
                                    u.forEach(i => {
                                        let r = e.getBaseTarget(i),
                                            n = e.getValue(i);
                                        n && (n.liveStyle = !0), t[i] = r ? ? null
                                    }), l.push({
                                        animation: t
                                    })
                                }
                                let m = !!l.length;
                                return r && (!1 === a.initial || a.initial === a.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(l) : Promise.resolve()
                            }
                            return {
                                animateChanges: s,
                                setActive: function(t, r) {
                                    if (i[t].isActive === r) return Promise.resolve();
                                    e.variantChildren ? .forEach(e => e.animationState ? .setActive(t, r)), i[t].isActive = r;
                                    let n = s(t);
                                    for (let e in i) i[e].protectedKeys = {};
                                    return n
                                },
                                setAnimateFunction: function(i) {
                                    t = i(e)
                                },
                                getState: () => i,
                                reset: () => {
                                    i = rP()
                                }
                            }
                        }(e))
                    }
                    updateAnimationControlsSubscription() {
                        let {
                            animate: e
                        } = this.node.getProps();
                        tp(e) && (this.unmountControls = e.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {
                            animate: e
                        } = this.node.getProps(), {
                            animate: t
                        } = this.node.prevProps || {};
                        e !== t && this.updateAnimationControlsSubscription()
                    }
                    unmount() {
                        this.node.animationState.reset(), this.unmountControls ? .()
                    }
                }
            },
            exit: {
                Feature: class extends rS {
                    constructor() {
                        super(...arguments), this.id = rj++
                    }
                    update() {
                        if (!this.node.presenceContext) return;
                        let {
                            isPresent: e,
                            onExitComplete: t
                        } = this.node.presenceContext, {
                            isPresent: i
                        } = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || e === i) return;
                        let r = this.node.animationState.setActive("exit", !e);
                        t && !e && r.then(() => {
                            t(this.id)
                        })
                    }
                    mount() {
                        let {
                            register: e,
                            onExitComplete: t
                        } = this.node.presenceContext || {};
                        t && t(this.id), e && (this.unmount = e(this.id))
                    }
                    unmount() {}
                }
            },
            inView: {
                Feature: class extends rS {
                    constructor() {
                        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                    }
                    startObserver() {
                        var e;
                        let t;
                        this.unmount();
                        let {
                            viewport: i = {}
                        } = this.node.getProps(), {
                            root: r,
                            margin: n,
                            amount: s = "some",
                            once: a
                        } = i, o = {
                            root: r ? r.current : void 0,
                            rootMargin: n,
                            threshold: "number" == typeof s ? s : ss[s]
                        }, l = e => {
                            let {
                                isIntersecting: t
                            } = e;
                            if (this.isInView === t || (this.isInView = t, a && !t && this.hasEnteredView)) return;
                            t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                            let {
                                onViewportEnter: i,
                                onViewportLeave: r
                            } = this.node.getProps(), n = t ? i : r;
                            n && n(e)
                        };
                        return e = this.node.current, t = function({
                            root: e,
                            ...t
                        }) {
                            let i = e || document;
                            si.has(i) || si.set(i, {});
                            let r = si.get(i),
                                n = JSON.stringify(t);
                            return r[n] || (r[n] = new IntersectionObserver(sn, {
                                root: e,
                                ...t
                            })), r[n]
                        }(o), st.set(e, l), t.observe(e), () => {
                            st.delete(e), t.unobserve(e)
                        }
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver) return;
                        let {
                            props: e,
                            prevProps: t
                        } = this.node;
                        ["amount", "margin", "root"].some(function({
                            viewport: e = {}
                        }, {
                            viewport: t = {}
                        } = {}) {
                            return i => e[i] !== t[i]
                        }(e, t)) && this.startObserver()
                    }
                    unmount() {}
                }
            },
            tap: {
                Feature: class extends rS {
                    mount() {
                        let {
                            current: e
                        } = this.node;
                        e && (this.unmount = function(e, t, i = {}) {
                            let [r, n, s] = n1(e, i), a = e => {
                                let r = e.currentTarget;
                                if (!n7(e)) return;
                                n6.add(r);
                                let s = t(r, e),
                                    a = (e, t) => {
                                        window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", l), n6.has(r) && n6.delete(r), n7(e) && "function" == typeof s && s(e, {
                                            success: t
                                        })
                                    },
                                    o = e => {
                                        a(e, r === window || r === document || i.useGlobalTarget || n3(r, e.target))
                                    },
                                    l = e => {
                                        a(e, !1)
                                    };
                                window.addEventListener("pointerup", o, n), window.addEventListener("pointercancel", l, n)
                            };
                            return r.forEach(e => {
                                ((i.useGlobalTarget ? window : e).addEventListener("pointerdown", a, n), h(e)) && (e.addEventListener("focus", e => ((e, t) => {
                                    let i = e.currentTarget;
                                    if (!i) return;
                                    let r = n4(() => {
                                        if (n6.has(i)) return;
                                        n9(i, "down");
                                        let e = n4(() => {
                                            n9(i, "up")
                                        });
                                        i.addEventListener("keyup", e, t), i.addEventListener("blur", () => n9(i, "cancel"), t)
                                    });
                                    i.addEventListener("keydown", r, t), i.addEventListener("blur", () => i.removeEventListener("keydown", r), t)
                                })(e, n)), n8.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                            }), s
                        }(e, (e, t) => (se(this.node, t, "Start"), (e, {
                            success: t
                        }) => se(this.node, e, t ? "End" : "Cancel")), {
                            useGlobalTarget: this.node.props.globalTapTarget
                        }))
                    }
                    unmount() {}
                }
            },
            focus: {
                Feature: class extends rS {
                    constructor() {
                        super(...arguments), this.isActive = !1
                    }
                    onFocus() {
                        let e = !1;
                        try {
                            e = this.node.current.matches(":focus-visible")
                        } catch (t) {
                            e = !0
                        }
                        e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                    }
                    mount() {
                        this.unmount = is(rE(this.node.current, "focus", () => this.onFocus()), rE(this.node.current, "blur", () => this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends rS {
                    mount() {
                        let {
                            current: e
                        } = this.node;
                        e && (this.unmount = function(e, t, i = {}) {
                            let [r, n, s] = n1(e, i), a = e => {
                                if (!n2(e)) return;
                                let {
                                    target: i
                                } = e, r = t(i, e);
                                if ("function" != typeof r || !i) return;
                                let s = e => {
                                    n2(e) && (r(e), i.removeEventListener("pointerleave", s))
                                };
                                i.addEventListener("pointerleave", s, n)
                            };
                            return r.forEach(e => {
                                e.addEventListener("pointerenter", a, n)
                            }), s
                        }(e, (e, t) => (n5(this.node, t, "Start"), e => n5(this.node, e, "End"))))
                    }
                    unmount() {}
                }
            },
            pan: {
                Feature: class extends rS {
                    constructor() {
                        super(...arguments), this.removePointerDownListener = ep
                    }
                    onPointerDown(e) {
                        this.session = new r$(e, this.createPanHandlers(), {
                            transformPagePoint: this.node.getTransformPagePoint(),
                            contextWindow: rz(this.node)
                        })
                    }
                    createPanHandlers() {
                        let {
                            onPanSessionStart: e,
                            onPanStart: t,
                            onPan: i,
                            onPanEnd: r
                        } = this.node.getProps();
                        return {
                            onSessionStart: r0(e),
                            onStart: r0(t),
                            onMove: i,
                            onEnd: (e, t) => {
                                delete this.session, r && eg.postRender(() => r(e, t))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = rV(this.node.current, "pointerdown", e => this.onPointerDown(e))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(), this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends rS {
                    constructor(e) {
                        super(e), this.removeGroupControls = ep, this.removeListeners = ep, this.controls = new rJ(e)
                    }
                    mount() {
                        let {
                            dragControls: e
                        } = this.node.getProps();
                        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ep
                    }
                    unmount() {
                        this.removeGroupControls(), this.removeListeners()
                    }
                },
                ProjectionNode: n0,
                MeasureLayout: r4
            },
            layout: {
                ProjectionNode: n0,
                MeasureLayout: r4
            }
        }, (e, t) => t$(e) ? new tz(t) : new tV(t, {
            allowProjection: e !== s.Fragment
        }));
    e.s(["motion", () => sa], 846932)
}, 211100, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(647163);
    e.i(247167);
    var r = e.i(271645),
        n = e.i(231178),
        s = e.i(947414),
        a = e.i(674008),
        o = e.i(821476),
        l = e.i(772846),
        u = r,
        c = e.i(737806);

    function d(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class h extends u.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                let e = t.offsetParent,
                    i = (0, l.isHTMLElement)(e) && e.offsetWidth || 0,
                    r = this.props.sizeRef.current;
                r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = i - r.width - r.left
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function p({
        children: e,
        isPresent: i,
        anchorX: n,
        root: s
    }) {
        let a = (0, u.useId)(),
            o = (0, u.useRef)(null),
            l = (0, u.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            }),
            {
                nonce: p
            } = (0, u.useContext)(c.MotionConfigContext),
            m = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let i = !1,
                            r = e.map(e => {
                                let r = d(e, t);
                                return i || "function" != typeof r || (i = !0), r
                            });
                        if (i) return () => {
                            for (let t = 0; t < r.length; t++) {
                                let i = r[t];
                                "function" == typeof i ? i() : d(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(o, e ? .ref);
        return (0, u.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: u,
                right: c
            } = l.current;
            if (i || !o.current || !e || !t) return;
            let d = "left" === n ? `left: ${u}` : `right: ${c}`;
            o.current.dataset.motionPopId = a;
            let h = document.createElement("style");
            p && (h.nonce = p);
            let m = s ? ? document.head;
            return m.appendChild(h), h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            top: ${r}px !important;
          }
        `), () => {
                m.contains(h) && m.removeChild(h)
            }
        }, [i]), (0, t.jsx)(h, {
            isPresent: i,
            childRef: o,
            sizeRef: l,
            children: u.cloneElement(e, {
                ref: m
            })
        })
    }
    let m = ({
        children: e,
        initial: i,
        isPresent: n,
        onExitComplete: a,
        custom: l,
        presenceAffectsLayout: u,
        mode: c,
        anchorX: d,
        root: h
    }) => {
        let m = (0, s.useConstant)(f),
            A = (0, r.useId)(),
            g = !0,
            v = (0, r.useMemo)(() => (g = !1, {
                id: A,
                initial: i,
                isPresent: n,
                custom: l,
                onExitComplete: e => {
                    for (let t of (m.set(e, !0), m.values()))
                        if (!t) return;
                    a && a()
                },
                register: e => (m.set(e, !1), () => m.delete(e))
            }), [n, m, a]);
        return u && g && (v = { ...v
        }), (0, r.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1))
        }, [n]), r.useEffect(() => {
            n || m.size || !a || a()
        }, [n]), "popLayout" === c && (e = (0, t.jsx)(p, {
            isPresent: n,
            anchorX: d,
            root: h,
            children: e
        })), (0, t.jsx)(o.PresenceContext.Provider, {
            value: v,
            children: e
        })
    };

    function f() {
        return new Map
    }
    var A = e.i(464978);
    let g = e => e.key || "";

    function v(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    let y = ({
        children: e,
        custom: i,
        initial: o = !0,
        onExitComplete: l,
        presenceAffectsLayout: u = !0,
        mode: c = "sync",
        propagate: d = !1,
        anchorX: h = "left",
        root: p
    }) => {
        let [f, y] = (0, A.usePresence)(d), b = (0, r.useMemo)(() => v(e), [e]), x = d && !f ? [] : b.map(g), w = (0, r.useRef)(!0), k = (0, r.useRef)(b), T = (0, s.useConstant)(() => new Map), [P, S] = (0, r.useState)(b), [j, C] = (0, r.useState)(b);
        (0, a.useIsomorphicLayoutEffect)(() => {
            w.current = !1, k.current = b;
            for (let e = 0; e < j.length; e++) {
                let t = g(j[e]);
                x.includes(t) ? T.delete(t) : !0 !== T.get(t) && T.set(t, !1)
            }
        }, [j, x.length, x.join("-")]);
        let E = [];
        if (b !== P) {
            let e = [...b];
            for (let t = 0; t < j.length; t++) {
                let i = j[t],
                    r = g(i);
                x.includes(r) || (e.splice(t, 0, i), E.push(i))
            }
            return "wait" === c && E.length && (e = E), C(v(e)), S(b), null
        }
        let {
            forceRender: M
        } = (0, r.useContext)(n.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: j.map(e => {
                let r = g(e),
                    n = (!d || !!f) && (b === j || x.includes(r));
                return (0, t.jsx)(m, {
                    isPresent: n,
                    initial: (!w.current || !!o) && void 0,
                    custom: i,
                    presenceAffectsLayout: u,
                    mode: c,
                    root: p,
                    onExitComplete: n ? void 0 : () => {
                        if (!T.has(r)) return;
                        T.set(r, !0);
                        let e = !0;
                        T.forEach(t => {
                            t || (e = !1)
                        }), e && (M ? .(), C(k.current), d && y ? .(), l && l())
                    },
                    anchorX: h,
                    children: e
                }, r)
            })
        })
    };
    var b = e.i(846932);
    let x = {
            char: .03,
            word: .05,
            line: .1
        },
        w = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .05
                }
            },
            exit: {
                transition: {
                    staggerChildren: .05,
                    staggerDirection: -1
                }
            }
        },
        k = {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            },
            exit: {
                opacity: 0
            }
        },
        T = {
            blur: {
                container: w,
                item: {
                    hidden: {
                        opacity: 0,
                        filter: "blur(12px)"
                    },
                    visible: {
                        opacity: 1,
                        filter: "blur(0px)"
                    },
                    exit: {
                        opacity: 0,
                        filter: "blur(12px)"
                    }
                }
            },
            "fade-in-blur": {
                container: w,
                item: {
                    hidden: {
                        opacity: 0,
                        y: 20,
                        filter: "blur(12px)"
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        filter: "blur(12px)"
                    }
                }
            },
            scale: {
                container: w,
                item: {
                    hidden: {
                        opacity: 0,
                        scale: 0
                    },
                    visible: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0
                    }
                }
            },
            fade: {
                container: w,
                item: {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    }
                }
            },
            slide: {
                container: w,
                item: {
                    hidden: {
                        opacity: 0,
                        y: 20
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 20
                    }
                }
            }
        },
        P = r.default.memo(({
            segment: e,
            variants: r,
            per: n,
            segmentWrapperClassName: s
        }) => {
            let a = "line" === n ? (0, t.jsx)(b.motion.span, {
                variants: r,
                className: "block",
                children: e
            }) : "word" === n ? (0, t.jsx)(b.motion.span, {
                "aria-hidden": "true",
                variants: r,
                className: "inline-block whitespace-pre",
                children: e
            }) : (0, t.jsx)(b.motion.span, {
                className: "inline-block whitespace-pre",
                children: e.split("").map((e, i) => (0, t.jsx)(b.motion.span, {
                    "aria-hidden": "true",
                    variants: r,
                    className: "inline-block whitespace-pre",
                    children: e
                }, `char-${i}`))
            });
            return s ? (0, t.jsx)("span", {
                className: (0, i.cn)("line" === n ? "block" : "inline-block", s),
                children: a
            }) : a
        });
    P.displayName = "AnimationComponent";
    let S = e => !!e && "object" == typeof e && "transition" in e,
        j = (e, t) => {
            if (!t) return e;
            let {
                exit: i,
                ...r
            } = t;
            return { ...e,
                visible: { ...e.visible,
                    transition: { ...S(e.visible) ? e.visible.transition : {},
                        ...r
                    }
                },
                exit: { ...e.exit,
                    transition: { ...S(e.exit) ? e.exit.transition : {},
                        ...r,
                        staggerDirection: -1
                    }
                }
            }
        };

    function C({
        children: e,
        per: i = "word",
        as: r = "p",
        variants: n,
        className: s,
        preset: a = "fade",
        delay: o = 0,
        speedReveal: l = 1,
        speedSegment: u = 1,
        trigger: c = !0,
        onAnimationComplete: d,
        onAnimationStart: h,
        segmentWrapperClassName: p,
        containerTransition: m,
        segmentTransition: f,
        style: A
    }) {
        let g = "line" === i ? e.split("\n") : e.split(/(\s+)/),
            v = b.motion[r],
            C = a ? T[a] : {
                container: w,
                item: k
            },
            E = x[i] / l,
            M = S(n ? .container ? .visible ? ? {}) ? n ? .container ? .visible.transition ? .staggerChildren : void 0,
            R = S(n ? .container ? .visible ? ? {}) ? n ? .container ? .visible.transition ? .delayChildren : void 0,
            V = {
                container: j(n ? .container || C.container, {
                    staggerChildren: M ? ? E,
                    delayChildren: R ? ? o,
                    ...m,
                    exit: {
                        staggerChildren: M ? ? E,
                        staggerDirection: -1
                    }
                }),
                item: j(n ? .item || C.item, {
                    duration: .3 / u,
                    ...f
                })
            };
        return (0, t.jsx)(y, {
            mode: "popLayout",
            children: c && (0, t.jsxs)(v, {
                initial: "hidden",
                animate: "visible",
                exit: "exit",
                variants: V.container,
                className: s,
                onAnimationComplete: d,
                onAnimationStart: h,
                style: A,
                children: ["line" !== i ? (0, t.jsx)("span", {
                    className: "sr-only",
                    children: e
                }) : null, g.map((e, r) => (0, t.jsx)(P, {
                    segment: e,
                    variants: V.item,
                    per: i,
                    segmentWrapperClassName: p
                }, `${i}-${r}-${e}`))]
            })
        })
    }
    e.s(["TextEffect", () => C], 211100)
}, 992615, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(846932),
        r = e.i(271645);
    let n = {
            visible: {
                transition: {
                    staggerChildren: .1
                }
            }
        },
        s = {
            opacity: 0
        },
        a = {
            opacity: 1
        },
        o = {
            fade: {},
            slide: {
                hidden: {
                    y: 20
                },
                visible: {
                    y: 0
                }
            },
            scale: {
                hidden: {
                    scale: .8
                },
                visible: {
                    scale: 1
                }
            },
            blur: {
                hidden: {
                    filter: "blur(4px)"
                },
                visible: {
                    filter: "blur(0px)"
                }
            },
            "blur-slide": {
                hidden: {
                    filter: "blur(4px)",
                    y: 20
                },
                visible: {
                    filter: "blur(0px)",
                    y: 0
                }
            },
            zoom: {
                hidden: {
                    scale: .5
                },
                visible: {
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }
                }
            },
            flip: {
                hidden: {
                    rotateX: -90
                },
                visible: {
                    rotateX: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }
                }
            },
            bounce: {
                hidden: {
                    y: -50
                },
                visible: {
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                    }
                }
            },
            rotate: {
                hidden: {
                    rotate: -180
                },
                visible: {
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }
                }
            },
            swing: {
                hidden: {
                    rotate: -10
                },
                visible: {
                    rotate: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 8
                    }
                }
            }
        },
        l = e => ({
            hidden: { ...s,
                ...e.hidden
            },
            visible: { ...a,
                ...e.visible
            }
        });

    function u({
        children: e,
        className: s,
        variants: a,
        preset: u,
        as: c = "div",
        asChild: d = "div"
    }) {
        let h = {
                item: l(u ? o[u] : {}),
                container: l(n)
            },
            p = a ? .container || h.container,
            m = a ? .item || h.item,
            f = r.default.useMemo(() => i.motion.create(c), [c]),
            A = r.default.useMemo(() => i.motion.create(d), [d]);
        return (0, t.jsx)(f, {
            initial: "hidden",
            animate: "visible",
            variants: p,
            className: s,
            children: r.default.Children.map(e, (e, i) => (0, t.jsx)(A, {
                variants: m,
                children: e
            }, i))
        })
    }
    e.s(["AnimatedGroup", () => u])
}, 794909, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return u
        }
    };
    for (var n in r) Object.defineProperty(i, n, {
        enumerable: !0,
        get: r[n]
    });
    let s = e.r(555682),
        a = e.r(908927),
        o = e.r(605500),
        l = s._(e.r(1948));

    function u(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return {
            props: t
        }
    }
    let c = o.Image
}, 657688, (e, t, i) => {
    t.exports = e.r(794909)
}, 508804, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(271645),
        r = e.i(970065),
        n = e.i(167881),
        s = e.i(522016),
        a = e.i(246349),
        a = a,
        o = e.i(657688);
    e.s(["default", 0, ({
        title: e,
        description: l,
        image: u,
        link: c
    }) => {
        let d = (0, i.useRef)(null),
            h = (0, i.useRef)(null),
            p = (0, i.useRef)(void 0),
            m = (0, i.useRef)({
                x: 0,
                y: 0
            });
        return (0, i.useEffect)(() => {
            let e, t, i, r = d.current,
                n = h.current;
            if (!r || !n) return;
            let s = () => {
                    var a, o;
                    let l, u, {
                        cardTransform: c,
                        imageTransform: d
                    } = (a = m.current.x, o = m.current.y, e || (t = (e = r.getBoundingClientRect()).left + e.width / 2, i = e.top + e.height / 2), l = a - t, {
                        cardTransform: {
                            rotateX: -(.035 * (u = o - i)),
                            rotateY: .035 * l,
                            scale: 1.025
                        },
                        imageTransform: {
                            rotateX: -(.025 * u),
                            rotateY: .025 * l,
                            scale: 1.05
                        }
                    });
                    r.style.transform = `perspective(1000px) rotateX(${c.rotateX}deg) rotateY(${c.rotateY}deg) scale3d(${c.scale}, ${c.scale}, ${c.scale})`, r.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.2)", n.style.transform = `perspective(1000px) rotateX(${d.rotateX}deg) rotateY(${d.rotateY}deg) scale3d(${d.scale}, ${d.scale}, ${d.scale})`, p.current = requestAnimationFrame(s)
                },
                a = e => {
                    m.current = {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                o = () => {
                    r.style.transition = "transform 0.2s ease, box-shadow 0.2s ease", n.style.transition = "transform 0.2s ease", s()
                },
                l = () => {
                    p.current && cancelAnimationFrame(p.current), r.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)", r.style.boxShadow = "none", r.style.transition = "transform 0.5s ease, box-shadow 0.5s ease", n.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)", n.style.transition = "transform 0.5s ease"
                };
            return r.addEventListener("mouseenter", o), r.addEventListener("mousemove", a), r.addEventListener("mouseleave", l), () => {
                p.current && cancelAnimationFrame(p.current), r.removeEventListener("mouseenter", o), r.removeEventListener("mousemove", a), r.removeEventListener("mouseleave", l)
            }
        }, []), (0, t.jsxs)(r.Card, {
            ref: d,
            children: [(0, t.jsx)(r.CardHeader, {
                children: (0, t.jsx)(r.CardTitle, {
                    children: e
                })
            }), (0, t.jsxs)(r.CardContent, {
                className: "flex flex-col flex-1 space-y-6 text-sm",
                children: [(0, t.jsx)(o.default, {
                    ref: h,
                    src: u || "https://via.placeholder.com/500",
                    alt: "Project_Image",
                    className: "object-cover object-center rounded-md",
                    width: 500,
                    height: 500,
                    preload: !0
                }), (0, t.jsx)("p", {
                    className: "line-clamp-5",
                    children: l
                }), (0, t.jsx)("div", {
                    className: "mt-auto flex gap-3 border-t border-dashed pt-6",
                    children: (0, t.jsx)(n.Button, {
                        asChild: !0,
                        variant: "default",
                        size: "sm",
                        className: "gap-1 pr-2 shadow-none hover:scale-105",
                        children: (0, t.jsxs)(s.default, {
                            href: c || "",
                            children: ["Learn More", (0, t.jsx)(a.default, {
                                className: "ml-0 !size-3.5 opacity-50"
                            })]
                        })
                    })
                })]
            })]
        })
    }], 508804)
}, 755838, (e, t, i) => {
    "use strict";
    var r = e.r(271645),
        n = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = r.useState,
        a = r.useEffect,
        o = r.useLayoutEffect,
        l = r.useDebugValue;

    function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !n(e, i)
        } catch (e) {
            return !0
        }
    }
    var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var i = t(),
            r = s({
                inst: {
                    value: i,
                    getSnapshot: t
                }
            }),
            n = r[0].inst,
            c = r[1];
        return o(function() {
            n.value = i, n.getSnapshot = t, u(n) && c({
                inst: n
            })
        }, [e, i, t]), a(function() {
            return u(n) && c({
                inst: n
            }), e(function() {
                u(n) && c({
                    inst: n
                })
            })
        }, [e]), l(i), i
    };
    i.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
}, 802239, (e, t, i) => {
    "use strict";
    t.exports = e.r(755838)
}, 63270, e => {
    "use strict";
    var t = e.i(843476),
        i = e.i(271645),
        r = e.i(934620);
    e.i(174080);
    var n = e.i(991918),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
            let s = (0, n.createSlot)(`Primitive.${r}`),
                a = i.forwardRef((e, i) => {
                    let {
                        asChild: n,
                        ...a
                    } = e;
                    return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, t.jsx)(n ? s : r, { ...a,
                        ref: i
                    })
                });
            return a.displayName = `Primitive.${r}`, { ...e,
                [r]: a
            }
        }, {}),
        a = e.i(802239);

    function o() {
        return () => {}
    }
    var l = "Avatar",
        [u, c] = function(e, r = []) {
            let n = [],
                s = () => {
                    let t = n.map(e => i.createContext(e));
                    return function(r) {
                        let n = r ? .[e] || t;
                        return i.useMemo(() => ({
                            [`__scope${e}`]: { ...r,
                                [e]: n
                            }
                        }), [r, n])
                    }
                };
            return s.scopeName = e, [function(r, s) {
                let a = i.createContext(s);
                a.displayName = r + "Context";
                let o = n.length;
                n = [...n, s];
                let l = r => {
                    let {
                        scope: n,
                        children: s,
                        ...l
                    } = r, u = n ? .[e] ? .[o] || a, c = i.useMemo(() => l, Object.values(l));
                    return (0, t.jsx)(u.Provider, {
                        value: c,
                        children: s
                    })
                };
                return l.displayName = r + "Provider", [l, function(t, n) {
                    let l = n ? .[e] ? .[o] || a,
                        u = i.useContext(l);
                    if (u) return u;
                    if (void 0 !== s) return s;
                    throw Error(`\`${t}\` must be used within \`${r}\``)
                }]
            }, function(...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let n = r.reduce((t, {
                            useScope: i,
                            scopeName: r
                        }) => {
                            let n = i(e)[`__scope${r}`];
                            return { ...t,
                                ...n
                            }
                        }, {});
                        return i.useMemo(() => ({
                            [`__scope${t.scopeName}`]: n
                        }), [n])
                    }
                };
                return r.scopeName = t.scopeName, r
            }(s, ...r)]
        }(l),
        [d, h] = u(l),
        p = i.forwardRef((e, r) => {
            let {
                __scopeAvatar: n,
                ...a
            } = e, [o, l] = i.useState("idle");
            return (0, t.jsx)(d, {
                scope: n,
                imageLoadingStatus: o,
                onImageLoadingStatusChange: l,
                children: (0, t.jsx)(s.span, { ...a,
                    ref: r
                })
            })
        });
    p.displayName = l;
    var m = "AvatarImage",
        f = i.forwardRef((e, n) => {
            var l;
            let u, {
                    __scopeAvatar: c,
                    src: d,
                    onLoadingStatusChange: p = () => {},
                    ...f
                } = e,
                A = h(m, c),
                g = function(e, {
                    referrerPolicy: t,
                    crossOrigin: n
                }) {
                    let s = (0, a.useSyncExternalStore)(o, () => !0, () => !1),
                        l = i.useRef(null),
                        u = s ? (l.current || (l.current = new window.Image), l.current) : null,
                        [c, d] = i.useState(() => v(u, e));
                    return (0, r.useLayoutEffect)(() => {
                        d(v(u, e))
                    }, [u, e]), (0, r.useLayoutEffect)(() => {
                        let e = e => () => {
                            d(e)
                        };
                        if (!u) return;
                        let i = e("loaded"),
                            r = e("error");
                        return u.addEventListener("load", i), u.addEventListener("error", r), t && (u.referrerPolicy = t), "string" == typeof n && (u.crossOrigin = n), () => {
                            u.removeEventListener("load", i), u.removeEventListener("error", r)
                        }
                    }, [u, n, t]), c
                }(d, f),
                y = (l = e => {
                    p(e), A.onImageLoadingStatusChange(e)
                }, u = i.useRef(l), i.useEffect(() => {
                    u.current = l
                }), i.useMemo(() => (...e) => u.current ? .(...e), []));
            return (0, r.useLayoutEffect)(() => {
                "idle" !== g && y(g)
            }, [g, y]), "loaded" === g ? (0, t.jsx)(s.img, { ...f,
                ref: n,
                src: d
            }) : null
        });
    f.displayName = m;
    var A = "AvatarFallback",
        g = i.forwardRef((e, r) => {
            let {
                __scopeAvatar: n,
                delayMs: a,
                ...o
            } = e, l = h(A, n), [u, c] = i.useState(void 0 === a);
            return i.useEffect(() => {
                if (void 0 !== a) {
                    let e = window.setTimeout(() => c(!0), a);
                    return () => window.clearTimeout(e)
                }
            }, [a]), u && "loaded" !== l.imageLoadingStatus ? (0, t.jsx)(s.span, { ...o,
                ref: r
            }) : null
        });

    function v(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
    }
    g.displayName = A;
    var y = e.i(647163);

    function b({
        className: e,
        ...i
    }) {
        return (0, t.jsx)(p, {
            "data-slot": "avatar",
            className: (0, y.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
            ...i
        })
    }

    function x({
        className: e,
        ...i
    }) {
        return (0, t.jsx)(f, {
            "data-slot": "avatar-image",
            className: (0, y.cn)("aspect-square size-full", e),
            ...i
        })
    }

    function w({
        className: e,
        ...i
    }) {
        return (0, t.jsx)(g, {
            "data-slot": "avatar-fallback",
            className: (0, y.cn)("bg-muted flex size-full items-center justify-center rounded-full", e),
            ...i
        })
    }
    e.s(["Avatar", () => b, "AvatarFallback", () => w, "AvatarImage", () => x], 63270)
}]);