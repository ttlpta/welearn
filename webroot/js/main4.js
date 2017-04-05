/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
function append_params_to_url(e, t) {
    var n = e;
    n += n.indexOf("?") < 0 ? "?" : "&";
    var i = [];
    for (var r in t) i.push(r + "=" + t[r]);
    return n + i.join("&")
}

function open_link(e, t) {
    $(t).modal("hide"), window.open(e, "_blank")
}

function close_popup(e) {
    $(e).modal("hide")
}

function getIdYoutube(e) {
    var t = /youtube.*v=([\d\w-]+)/,
        n = e.match(t);
    return n && 11 == n[1].length ? n[1] : "error"
}

function modalImage(e) {
    var t = $(e).attr("src"),
        n = $(e)[0].naturalWidth,
        i = $(e)[0].naturalHeight;
    $("#modalImage .modal-body img").attr("src", t), $("#modalImage .modal-dialog").css({
        width: n,
        height: i
    }), $("#modalImage").modal("show")
}



function count_uni_select() {
    var e = 0;
    return $("#select-uni select").each(function() {
        "" != $(this).val() && $(this).is(":visible") && (e += 1)
    }), e
}

function showModalVideo() {
    $("#popup_video_intro").modal("show")
}

function gup(e, t) {
    t || (t = location.href), e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var n = "[\\?&]" + e + "=([^&#]*)",
        i = new RegExp(n),
        r = i.exec(t);
    return null == r ? null : r[1]
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        n = t.exec(location.search);
    return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
}
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = J.type(e);
            return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (J.isFunction(t)) return J.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return J.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (se.test(t)) return J.filter(t, e, n);
                t = J.filter(t, e)
            }
            return J.grep(e, function(e) {
                return V.call(t, e) >= 0 !== n
            })
        }

        function r(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function o(e) {
            var t = fe[e] = {};
            return J.each(e.match(he) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            Z.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), J.ready()
        }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = J.expando + s.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(we, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? J.parseJSON(n) : n
                    } catch (r) {}
                    ye.set(e, t, n)
                } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function d() {
            try {
                return Z.activeElement
            } catch (e) {}
        }

        function p(e, t) {
            return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function h(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function f(e) {
            var t = $e.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
        }

        function g(e, t) {
            var n, i, r, o, a, s, l, c;
            if (1 === t.nodeType) {
                if (ve.hasData(e) && (o = ve.access(e), a = ve.set(t, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; i > n; n++) J.event.add(t, r, c[r][n])
                }
                ye.hasData(e) && (s = ye.access(e), l = J.extend({}, s), ye.set(t, l))
            }
        }

        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Se.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function b(t, n) {
            var i, r = J(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
            return r.detach(), o
        }

        function w(e) {
            var t = Z,
                n = He[e];
            return n || (n = b(e, t), "none" !== n && n || (Fe = (Fe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Fe[0].contentDocument, t.write(), t.close(), n = b(e, t), Fe.detach()), He[e] = n), n
        }

        function _(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || ze(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)), je.test(a) && Ue.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function x(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function C(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ye.length; r--;)
                if (t = Ye[r] + n, t in e) return t;
            return i
        }

        function S(e, t, n) {
            var i = qe.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function k(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += J.css(e, n + xe[o], !0, r)), i ? ("content" === n && (a -= J.css(e, "padding" + xe[o], !0, r)), "margin" !== n && (a -= J.css(e, "border" + xe[o] + "Width", !0, r))) : (a += J.css(e, "padding" + xe[o], !0, r), "padding" !== n && (a += J.css(e, "border" + xe[o] + "Width", !0, r)));
            return a
        }

        function E(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ze(e),
                a = "border-box" === J.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = _(e, t, o), (0 > r || null == r) && (r = e.style[t]), je.test(r)) return r;
                i = a && (X.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + k(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function T(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ve.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (o[a] = ve.access(i, "olddisplay", w(i.nodeName)))) : (r = Ce(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : J.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function N(e, t, n, i, r) {
            return new N.prototype.init(e, t, n, i, r)
        }

        function A() {
            return setTimeout(function() {
                Xe = void 0
            }), Xe = J.now()
        }

        function R(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = xe[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function P(e, t, n) {
            for (var i, r = (nt[t] || []).concat(nt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function I(e, t, n) {
            var i, r, o, a, s, l, c, u, d = this,
                p = {},
                h = e.style,
                f = e.nodeType && Ce(e),
                m = ve.get(e, "fxshow");
            n.queue || (s = J._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, J.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = J.css(e, "display"), u = "none" === c ? ve.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === u && "none" === J.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], Qe.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    p[i] = m && m[i] || J.style(e, i)
                } else c = void 0;
            if (J.isEmptyObject(p)) "inline" === ("none" === c ? w(e.nodeName) : c) && (h.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = ve.access(e, "fxshow", {}), o && (m.hidden = !f), f ? J(e).show() : d.done(function() {
                    J(e).hide()
                }), d.done(function() {
                    var t;
                    ve.remove(e, "fxshow");
                    for (t in p) J.style(e, t, p[t])
                });
                for (i in p) a = P(f ? m[i] : 0, i, d), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function L(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function D(e, t, n) {
            var i, r, o = 0,
                a = tt.length,
                s = J.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Xe || A(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: J.extend({}, t),
                    opts: J.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Xe || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (L(u, c.opts.specialEasing); a > o; o++)
                if (i = tt[o].call(c, e, u, c.opts)) return i;
            return J.map(u, P, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function O(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(he) || [];
                if (J.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function $(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, J.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                a = e === bt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function M(e, t) {
            var n, i, r = J.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && J.extend(!0, e, i), e
        }

        function B(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    a || (a = r)
                }
                o = o || a
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function F(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a)
                    for (r in c)
                        if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function H(e, t, n, i) {
            var r;
            if (J.isArray(t)) J.each(t, function(t, r) {
                n || St.test(e) ? i(e, r) : H(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== J.type(t)) i(e, t);
            else
                for (r in t) H(e + "[" + r + "]", t[r], n, i)
        }

        function U(e) {
            return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var j = [],
            z = j.slice,
            W = j.concat,
            q = j.push,
            V = j.indexOf,
            G = {},
            K = G.toString,
            Y = G.hasOwnProperty,
            X = {},
            Z = e.document,
            Q = "2.1.4",
            J = function(e, t) {
                return new J.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            ie = function(e, t) {
                return t.toUpperCase()
            };
        J.fn = J.prototype = {
            jquery: Q,
            constructor: J,
            selector: "",
            length: 0,
            toArray: function() {
                return z.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
            },
            pushStack: function(e) {
                var t = J.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return J.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(J.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(z.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: q,
            sort: j.sort,
            splice: j.splice
        }, J.extend = J.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || J.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], i = e[t], a !== i && (c && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, a[t] = J.extend(c, o, i)) : void 0 !== i && (a[t] = i));
            return a
        }, J.extend({
            expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === J.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[K.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, ie)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e);
                if (i) {
                    if (s)
                        for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : q.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : V.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && l.push(r);
                return W.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = z.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(z.call(arguments)))
                }, r.guid = e.guid = e.guid || J.guid++, r) : void 0
            },
            now: Date.now,
            support: X
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            G["[object " + t + "]"] = t.toLowerCase()
        });
        var re =
            /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
            function(e) {
                function t(e, t, n, i) {
                    var r, o, a, s, l, c, d, h, f, m;
                    if ((t ? t.ownerDocument || t : H) !== I && P(t), t = t || I, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!i && D) {
                        if (11 !== s && (r = ye.exec(e)))
                            if (a = r[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (r[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = r[3]) && _.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (_.qsa && (!O || !O.test(e))) {
                            if (h = d = F, f = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = k(e), (d = t.getAttribute("id")) ? h = d.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                                f = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                            }
                            if (m) try {
                                return Q.apply(n, f.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return T(e.replace(le, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[F] = !0, e
                }

                function r(e) {
                    var t = I.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {}

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function h(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = j++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, l, c = [U, o];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if (l = t[F] || (t[F] = {}), (s = l[i]) && s[0] === U && s[1] === o) return c[2] = s[2];
                                    if (l[i] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function f(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                    return i
                }

                function g(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
                    return a
                }

                function v(e, t, n, r, o, a) {
                    return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, a)), i(function(i, a, s, l) {
                        var c, u, d, p = [],
                            h = [],
                            f = a.length,
                            v = i || m(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !i && t ? v : g(v, p, e, s, l),
                            b = n ? o || (i ? e : f || r) ? [] : a : y;
                        if (n && n(y, b, s, l), r)
                            for (c = g(b, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                    o(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, a, !0), c = h(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), u = [function(e, n, i) {
                            var r = !o && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                            return t = null, r
                        }]; r > s; s++)
                        if (n = x.relative[e[s].type]) u = [h(f(u), n)];
                        else {
                            if (n = x.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                                for (i = ++s; r > i && !x.relative[e[i].type]; i++);
                                return v(s > 1 && f(u), s > 1 && p(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                            }
                            u.push(n)
                        }
                    return f(u)
                }

                function b(e, n) {
                    var r = n.length > 0,
                        o = e.length > 0,
                        a = function(i, a, s, l, c) {
                            var u, d, p, h = 0,
                                f = "0",
                                m = i && [],
                                v = [],
                                y = N,
                                b = i || o && x.find.TAG("*", c),
                                w = U += null == y ? 1 : Math.random() || .1,
                                _ = b.length;
                            for (c && (N = a !== I && a); f !== _ && null != (u = b[f]); f++) {
                                if (o && u) {
                                    for (d = 0; p = e[d++];)
                                        if (p(u, a, s)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (U = w)
                                }
                                r && ((u = !p && u) && h--, i && m.push(u))
                            }
                            if (h += f, r && f !== h) {
                                for (d = 0; p = n[d++];) p(m, v, a, s);
                                if (i) {
                                    if (h > 0)
                                        for (; f--;) m[f] || v[f] || (v[f] = X.call(l));
                                    v = g(v)
                                }
                                Q.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                            }
                            return c && (U = w, N = y), m
                        };
                    return r ? i(a) : a
                }
                var w, _, x, C, S, k, E, T, N, A, R, P, I, L, D, O, $, M, B, F = "sizzle" + 1 * new Date,
                    H = e.document,
                    U = 0,
                    j = 0,
                    z = n(),
                    W = n(),
                    q = n(),
                    V = function(e, t) {
                        return e === t && (R = !0), 0
                    },
                    G = 1 << 31,
                    K = {}.hasOwnProperty,
                    Y = [],
                    X = Y.pop,
                    Z = Y.push,
                    Q = Y.push,
                    J = Y.slice,
                    ee = function(e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = ie.replace("w", "w#"),
                    oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                    ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ce = new RegExp("^" + ne + "*," + ne + "*"),
                    ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    pe = new RegExp(ae),
                    he = new RegExp("^" + re + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ae),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    me = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    we = /'|\\/g,
                    _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    xe = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    Ce = function() {
                        P()
                    };
                try {
                    Q.apply(Y = J.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
                } catch (Se) {
                    Q = {
                        apply: Y.length ? function(e, t) {
                            Z.apply(e, J.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                _ = t.support = {}, S = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, P = t.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : H;
                    return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), D = !S(i), _.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), _.getElementsByTagName = r(function(e) {
                        return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                    }), _.getElementsByClassName = ve.test(i.getElementsByClassName), _.getById = r(function(e) {
                        return L.appendChild(e).id = F, !i.getElementsByName || !i.getElementsByName(F).length
                    }), _.getById ? (x.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && D) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, x.filter.ID = function(e) {
                        var t = e.replace(_e, xe);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(e) {
                        var t = e.replace(_e, xe);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), x.find.TAG = _.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, x.find.CLASS = _.getElementsByClassName && function(e, t) {
                        return D ? t.getElementsByClassName(e) : void 0
                    }, $ = [], O = [], (_.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                        L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || O.push(".#.+[+~]")
                    }), r(function(e) {
                        var t = i.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (_.matchesSelector = ve.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                        _.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), $.push("!=", ae)
                    }), O = O.length && new RegExp(O.join("|")), $ = $.length && new RegExp($.join("|")), t = ve.test(L.compareDocumentPosition), B = t || ve.test(L.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = t ? function(e, t) {
                        if (e === t) return R = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && B(H, e) ? -1 : t === i || t.ownerDocument === H && B(H, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return R = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            l = [e],
                            c = [t];
                        if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                        if (o === s) return a(e, t);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (n = t; n = n.parentNode;) c.unshift(n);
                        for (; l[r] === c[r];) r++;
                        return r ? a(l[r], c[r]) : l[r] === H ? -1 : c[r] === H ? 1 : 0
                    }, i) : I
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== I && P(e), n = n.replace(de, "='$1']"), _.matchesSelector && D && (!$ || !$.test(n)) && (!O || !O.test(n))) try {
                        var i = M.call(e, n);
                        if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {}
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== I && P(e), B(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== I && P(e);
                    var n = x.attrHandle[t.toLowerCase()],
                        i = n && K.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                    return void 0 !== i ? i : _.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (R = !_.detectDuplicates, A = !_.sortStable && e.slice(0), e.sort(V), R) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return A = null, e
                }, C = t.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += C(t);
                    return n
                }, x = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(_e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(_e, xe).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, u, d, p, h, f, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (u = g[F] || (g[F] = {}), c = u[e] || [], h = c[0] === U && c[1], p = c[0] === U && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (p = h = 0) || f.pop();)
                                            if (1 === d.nodeType && ++p && d === t) {
                                                u[e] = [U, h, p];
                                                break
                                            }
                                    } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === U) p = c[1];
                                    else
                                        for (;
                                            (d = ++h && d && d[m] || (p = h = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[F] || (d[F] = {}))[e] = [U, p]), d !== t)););
                                    return p -= r, p === i || p % i === 0 && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = E(e.replace(le, "$1"));
                            return r[F] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return e = e.replace(_e, xe),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: i(function(e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, xe).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === L
                        },
                        focus: function(e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !x.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return me.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, x.pseudos.nth = x.pseudos.eq;
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[w] = s(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[w] = l(w);
                return d.prototype = x.filters = x.pseudos, x.setFilters = new d, k = t.tokenize = function(e, n) {
                    var i, r, o, a, s, l, c, u = W[e + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (s = e, l = [], c = x.preFilter; s;) {
                        (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }), s = s.slice(i.length));
                        for (a in x.filter) !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
                }, E = t.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = q[e + " "];
                    if (!o) {
                        for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[F] ? i.push(o) : r.push(o);
                        o = q(e, b(r, i)), o.selector = e
                    }
                    return o
                }, T = t.select = function(e, t, n, i) {
                    var r, o, a, s, l, c = "function" == typeof e && e,
                        d = !i && k(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && _.getById && 9 === t.nodeType && D && x.relative[o[1].type]) {
                            if (t = (x.find.ID(a.matches[0].replace(_e, xe), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !x.relative[s = a.type]);)
                            if ((l = x.find[s]) && (i = l(a.matches[0].replace(_e, xe), be.test(o[0].type) && u(t.parentNode) || t))) {
                                if (o.splice(r, 1), e = i.length && p(o), !e) return Q.apply(n, i), n;
                                break
                            }
                    }
                    return (c || E(e, d))(i, t, !D, n, be.test(e) && u(t.parentNode) || t), n
                }, _.sortStable = F.split("").sort(V).join("") === F, _.detectDuplicates = !!R, P(), _.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(I.createElement("div"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), _.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
        var oe = J.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            se = /^.[^:#\[\.,]*$/;
        J.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, J.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (J.contains(r[t], this)) return !0
                }));
                for (t = 0; n > t; t++) J.find(e, r[t], i);
                return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
            }
        });
        var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ue = J.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ae.test(n[1]) && J.isPlainObject(t))
                            for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return i = Z.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
            };
        ue.prototype = J.fn, le = J(Z);
        var de = /^(?:parents|prev(?:Until|All))/,
            pe = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.extend({
            dir: function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && J(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), J.fn.extend({
            has: function(e) {
                var t = J(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (J.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? J.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? V.call(J(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), J.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return J.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return J.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return J.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return J.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return J.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return J.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return J.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return J.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || J.merge([], e.childNodes)
            }
        }, function(e, t) {
            J.fn[e] = function(n, i) {
                var r = J.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (pe[e] || J.unique(r), de.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var he = /\S+/g,
            fe = {};
        J.Callbacks = function(e) {
            e = "string" == typeof e ? fe[e] || o(e) : J.extend({}, e);
            var t, n, i, r, a, s, l = [],
                c = !e.once && [],
                u = function(o) {
                    for (t = e.memory && o, n = !0, s = r || 0, r = 0, a = l.length, i = !0; l && a > s; s++)
                        if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function o(t) {
                                J.each(t, function(t, n) {
                                    var i = J.type(n);
                                    "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), i ? a = l.length : t && (r = n, u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return l && J.each(arguments, function(e, t) {
                            for (var n;
                                (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], a = 0, this
                    },
                    disable: function() {
                        return l = c = t = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, t || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, J.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return J.Deferred(function(n) {
                                J.each(t, function(t, o) {
                                    var a = J.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? J.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, J.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = z.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : J.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var me;
        J.fn.ready = function(e) {
            return J.ready.promise().done(e), this
        }, J.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? J.readyWait++ : J.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (me.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
            }
        }), J.ready.promise = function(t) {
            return me || (me = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
        }, J.ready.promise();
        var ge = J.access = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === J.type(n)) {
                r = !0;
                for (s in n) J.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, J.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(J(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        };
        J.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
            key: function(e) {
                if (!s.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = s.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, J.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, r = this.key(e),
                    o = this.cache[r];
                if ("string" == typeof t) o[t] = n;
                else if (J.isEmptyObject(o)) J.extend(this.cache[r], t);
                else
                    for (i in t) o[i] = t[i];
                return o
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, r, o = this.key(e),
                    a = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else {
                    J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(he) || [])), n = i.length;
                    for (; n--;) delete a[i[n]]
                }
            },
            hasData: function(e) {
                return !J.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var ve = new s,
            ye = new s,
            be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            we = /([A-Z])/g;
        J.extend({
            hasData: function(e) {
                return ye.hasData(e) || ve.hasData(e)
            },
            data: function(e, t, n) {
                return ye.access(e, t, n)
            },
            removeData: function(e, t) {
                ye.remove(e, t)
            },
            _data: function(e, t, n) {
                return ve.access(e, t, n)
            },
            _removeData: function(e, t) {
                ve.remove(e, t)
            }
        }), J.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(o, i, r[i])));
                        ve.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ye.set(this, e)
                }) : ge(this, function(t) {
                    var n, i = J.camelCase(e);
                    if (o && void 0 === t) {
                        if (n = ye.get(o, e), void 0 !== n) return n;
                        if (n = ye.get(o, i), void 0 !== n) return n;
                        if (n = l(o, i, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = ye.get(this, i);
                        ye.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ye.remove(this, e)
                })
            }
        }), J.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = J.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = J._queueHooks(e, t),
                    a = function() {
                        J.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ve.get(e, n) || ve.access(e, n, {
                    empty: J.Callbacks("once memory").add(function() {
                        ve.remove(e, [t + "queue", n])
                    })
                })
            }
        }), J.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = J.queue(this, e, t);
                    J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    J.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = J.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xe = ["Top", "Right", "Bottom", "Left"],
            Ce = function(e, t) {
                return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
            },
            Se = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = Z.createDocumentFragment(),
                t = e.appendChild(Z.createElement("div")),
                n = Z.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), X.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var ke = "undefined";
        X.focusinBubbles = "onfocusin" in e;
        var Ee = /^key/,
            Te = /^(?:mouse|pointer|contextmenu)|click/,
            Ne = /^(?:focusinfocus|focusoutblur)$/,
            Ae = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, h, f, m, g = ve.get(e);
                if (g)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return typeof J !== ke && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(he) || [""], c = t.length; c--;) s = Ae.exec(t[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h && (d = J.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = J.event.special[h] || {}, u = J.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && J.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, o), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, f, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[h] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, p, h, f, m, g = ve.hasData(e) && ve.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(he) || [""], c = t.length; c--;)
                        if (s = Ae.exec(t[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
                            for (d = J.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) u = p[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !p.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || J.removeEvent(e, h, g.handle), delete l[h])
                        } else
                            for (h in l) J.event.remove(e, h + t[c], n, i, !0);
                    J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, p = [i || Z],
                    h = Y.call(t, "type") ? t.type : t,
                    f = Y.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !Ne.test(h + J.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[J.expando] ? t : new J.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[h] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !J.isWindow(i)) {
                        for (l = d.delegateType || h, Ne.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                        s === (i.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || e)
                    }
                    for (o = 0;
                        (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || h, u = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && J.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = h, r || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !J.acceptData(i) || c && J.isFunction(i[h]) && !J.isWindow(i) && (s = i[c], s && (i[c] = null), J.event.triggered = h, i[h](), J.event.triggered = void 0,
                        s && (i[c] = s)), t.result
                }
            },
            dispatch: function(e) {
                e = J.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = z.call(arguments),
                    l = (ve.get(this, "events") || {})[e.type] || [],
                    c = J.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = J.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== e.type) {
                            for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[J.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Te.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new J.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== d() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return J.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = J.extend(new J.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, J.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, J.Event = function(e, t) {
            return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
        }, J.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            J.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), X.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                J.event.simulate(t, e.target, J.event.fix(e), !0)
            };
            J.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = ve.access(i, t);
                    r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = ve.access(i, t) - 1;
                    r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
                }
            }
        }), J.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = u;
                else if (!i) return this;
                return 1 === r && (o = i, i = function(e) {
                    return J().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                    J.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
                    J.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    J.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? J.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pe = /<([\w:]+)/,
            Ie = /<|&#?\w+;/,
            Le = /<(?:script|style|link)/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^$|\/(?:java|ecma)script/i,
            $e = /^true\/(.*)/,
            Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Be = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, J.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s = e.cloneNode(!0),
                    l = J.contains(e.ownerDocument, e);
                if (!(X.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                    for (a = v(s), o = v(e), i = 0, r = o.length; r > i; i++) y(o[i], a[i]);
                if (t)
                    if (n)
                        for (o = o || v(e), a = a || v(s), i = 0, r = o.length; r > i; i++) g(o[i], a[i]);
                    else g(e, s);
                return a = v(s, "script"), a.length > 0 && m(a, !l && v(e, "script")), s
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; h > p; p++)
                    if (r = e[p], r || 0 === r)
                        if ("object" === J.type(r)) J.merge(d, r.nodeType ? [r] : r);
                        else if (Ie.test(r)) {
                    for (o = o || u.appendChild(t.createElement("div")), a = (Pe.exec(r) || ["", ""])[1].toLowerCase(), s = Be[a] || Be._default, o.innerHTML = s[1] + r.replace(Re, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
                    J.merge(d, o.childNodes), o = u.firstChild, o.textContent = ""
                } else d.push(t.createTextNode(r));
                for (u.textContent = "", p = 0; r = d[p++];)
                    if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && m(o), n))
                        for (c = 0; r = o[c++];) Oe.test(r.type || "") && n.push(r);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, r, o = J.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (J.acceptData(n) && (r = n[ve.expando], r && (t = ve.cache[r]))) {
                        if (t.events)
                            for (i in t.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                        ve.cache[r] && delete ve.cache[r]
                    }
                    delete ye.cache[n[ye.expando]]
                }
            }
        }), J.fn.extend({
            text: function(e) {
                return ge(this, function(e) {
                    return void 0 === e ? J.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = p(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return J.clone(this, e, t)
                })
            },
            html: function(e) {
                return ge(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !Be[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Re, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = W.apply([], e);
                var n, i, r, o, a, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    p = e[0],
                    m = J.isFunction(p);
                if (m || c > 1 && "string" == typeof p && !X.checkClone && De.test(p)) return this.each(function(n) {
                    var i = u.eq(n);
                    m && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (r = J.map(v(n, "script"), h), o = r.length; c > l; l++) a = n, l !== d && (a = J.clone(a, !0, !0), o && J.merge(r, v(a, "script"))), t.call(this[l], a, l);
                    if (o)
                        for (s = r[r.length - 1].ownerDocument, J.map(r, f), l = 0; o > l; l++) a = r[l], Oe.test(a.type || "") && !ve.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(Me, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            J.fn[e] = function(e) {
                for (var n, i = [], r = J(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), J(r[a])[t](n), q.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Fe, He = {},
            Ue = /^margin/,
            je = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
            ze = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
            }
            var n, i, r = Z.documentElement,
                o = Z.createElement("div"),
                a = Z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && J.extend(X, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(Z.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), a.removeChild(n), t
                }
            }))
        }(), J.swap = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
        var We = /^(none|table(?!-c[ea]).+)/,
            qe = new RegExp("^(" + _e + ")(.*)$", "i"),
            Ve = new RegExp("^([+-])=(" + _e + ")", "i"),
            Ge = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ye = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = _(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = J.camelCase(t),
                        l = e.style;
                    return t = J.cssProps[s] || (J.cssProps[s] = C(l, s)), a = J.cssHooks[t] || J.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Ve.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || J.cssNumber[s] || (n += "px"), X.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = J.camelCase(t);
                return t = J.cssProps[s] || (J.cssProps[s] = C(e.style, s)), a = J.cssHooks[t] || J.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = _(e, t, i)), "normal" === r && t in Ke && (r = Ke[t]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
            }
        }), J.each(["height", "width"], function(e, t) {
            J.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? We.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ge, function() {
                        return E(e, t, i)
                    }) : E(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && ze(e);
                    return S(e, n, i ? k(e, t, i, "border-box" === J.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), J.cssHooks.marginRight = x(X.reliableMarginRight, function(e, t) {
            return t ? J.swap(e, {
                display: "inline-block"
            }, _, [e, "marginRight"]) : void 0
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            J.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + xe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, Ue.test(e) || (J.cssHooks[e + t].set = S)
        }), J.fn.extend({
            css: function(e, t) {
                return ge(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (J.isArray(t)) {
                        for (i = ze(e), r = t.length; r > a; a++) o[t[a]] = J.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return T(this, !0)
            },
            hide: function() {
                return T(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ce(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = N, N.prototype = {
            constructor: N,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }, N.prototype.init.prototype = N.prototype, N.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, J.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, J.fx = N.prototype.init, J.fx.step = {};
        var Xe, Ze, Qe = /^(?:toggle|show|hide)$/,
            Je = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
            et = /queueHooks$/,
            tt = [I],
            nt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = Je.exec(t),
                        o = r && r[3] || (J.cssNumber[e] ? "" : "px"),
                        a = (J.cssNumber[e] || "px" !== o && +i) && Je.exec(J.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, J.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        J.Animation = J.extend(D, {
                tweener: function(e, t) {
                    J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), J.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? J.extend({}, e) : {
                    complete: n || !n && t || J.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !J.isFunction(t) && t
                };
                return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
                }, i
            }, J.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ce).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = J.isEmptyObject(e),
                        o = J.speed(t, n, i),
                        a = function() {
                            var t = D(this, J.extend({}, e), o);
                            (r || ve.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = J.timers,
                            a = ve.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && et.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && J.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ve.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = J.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, J.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), J.each(["toggle", "show", "hide"], function(e, t) {
                var n = J.fn[t];
                J.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, r)
                }
            }), J.each({
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                J.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), J.timers = [], J.fx.tick = function() {
                var e, t = 0,
                    n = J.timers;
                for (Xe = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || J.fx.stop(), Xe = void 0
            }, J.fx.timer = function(e) {
                J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
            }, J.fx.interval = 13, J.fx.start = function() {
                Ze || (Ze = setInterval(J.fx.tick, J.fx.interval))
            }, J.fx.stop = function() {
                clearInterval(Ze), Ze = null
            }, J.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, J.fn.delay = function(e, t) {
                return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e = Z.createElement("input"),
                    t = Z.createElement("select"),
                    n = t.appendChild(Z.createElement("option"));
                e.type = "checkbox", X.checkOn = "" !== e.value, X.optSelected = n.selected, t.disabled = !0, X.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", X.radioValue = "t" === e.value
            }();
        var it, rt, ot = J.expr.attrHandle;
        J.fn.extend({
            attr: function(e, t) {
                return ge(this, J.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    J.removeAttr(this, e)
                })
            }
        }), J.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = J.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(he);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!X.radioValue && "radio" === t && J.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), rt = {
            set: function(e, t, n) {
                return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ot[t] || J.find.attr;
            ot[t] = function(e, t, i) {
                var r, o;
                return i || (o = ot[t], ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = o), r
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function(e, t) {
                return ge(this, J.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[J.propFix[e] || e]
                })
            }
        }), J.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, r = J.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), X.optSelected || (J.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            J.propFix[this.toLowerCase()] = this
        });
        var st = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = "string" == typeof e && e,
                    l = 0,
                    c = this.length;
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(he) || []; c > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = J.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                    l = 0,
                    c = this.length;
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(he) || []; c > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? J.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function(n) {
                    J(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = J(this), o = e.match(he) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var lt = /\r/g;
        J.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = J.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, J(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
                }
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = J.find.attr(e, "value");
                        return null != t ? t : J.trim(J.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === r) && (X.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                                if (t = J(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = J.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                set: function(e, t) {
                    return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
                }
            }, X.checkOn || (J.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            J.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), J.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var ct = J.now(),
            ut = /\?/;
        J.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, J.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (i) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
        };
        var dt = /#.*$/,
            pt = /([?&])_=[^&]*/,
            ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            mt = /^(?:GET|HEAD)$/,
            gt = /^\/\//,
            vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            yt = {},
            bt = {},
            wt = "*/".concat("*"),
            _t = e.location.href,
            xt = vt.exec(_t.toLowerCase()) || [];
        J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t,
                type: "GET",
                isLocal: ft.test(xt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": wt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? M(M(e, J.ajaxSettings), t) : M(J.ajaxSettings, e)
            },
            ajaxPrefilter: O(yt),
            ajaxTransport: O(bt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var l, u, v, y, w, x = t;
                    2 !== b && (b = 2, s && clearTimeout(s), i = void 0, o = a || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = B(d, _, n)), y = F(d, y, _, l), l ? (d.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (J.lastModified[r] = w), w = _.getResponseHeader("etag"), w && (J.etag[r] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, u = y.data, v = y.error, l = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || x) + "", l ? f.resolveWith(p, [u, x, _]) : f.rejectWith(p, [_, x, v]), _.statusCode(g), g = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [_, d, l ? u : v]), m.fireWith(p, [_, x]), c && (h.trigger("ajaxComplete", [_, d]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, l, c, u, d = J.ajaxSetup({}, t),
                    p = d.context || d,
                    h = d.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                    f = J.Deferred(),
                    m = J.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; t = ht.exec(o);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), n(0, t), this
                        }
                    };
                if (f.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || _t) + "").replace(dt, "").replace(gt, xt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(he) || [""], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === xt[1] && l[2] === xt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xt[3] || ("http:" === xt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), $(yt, d, t, _), 2 === b) return _;
                c = J.event && d.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !mt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ut.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = pt.test(r) ? r.replace(pt, "$1_=" + ct++) : r + (ut.test(r) ? "&" : "?") + "_=" + ct++)), d.ifModified && (J.lastModified[r] && _.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && _.setRequestHeader("If-None-Match", J.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) _.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(p, _, d) === !1 || 2 === b)) return _.abort();
                w = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[u](d[u]);
                if (i = $(bt, d, t, _)) {
                    _.readyState = 1, c && h.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        _.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, i.send(v, n)
                    } catch (x) {
                        if (!(2 > b)) throw x;
                        n(-1, x)
                    }
                } else n(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return J.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return J.get(e, void 0, t, "script")
            }
        }), J.each(["get", "post"], function(e, t) {
            J[t] = function(e, n, i, r) {
                return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), J._evalUrl = function(e) {
            return J.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, J.fn.extend({
            wrapAll: function(e) {
                var t;
                return J.isFunction(e) ? this.each(function(t) {
                    J(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return J.isFunction(e) ? this.each(function(t) {
                    J(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = J(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = J.isFunction(e);
                return this.each(function(n) {
                    J(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, J.expr.filters.visible = function(e) {
            return !J.expr.filters.hidden(e)
        };
        var Ct = /%20/g,
            St = /\[\]$/,
            kt = /\r?\n/g,
            Et = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;
        J.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) H(n, e[n], t, r);
            return i.join("&").replace(Ct, "+")
        }, J.fn.extend({
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = J.prop(this, "elements");
                    return e ? J.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !J(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !Se.test(e))
                }).map(function(e, t) {
                    var n = J(this).val();
                    return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        }), J.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var Nt = 0,
            At = {},
            Rt = {
                0: 200,
                1223: 204
            },
            Pt = J.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in At) At[e]()
        }), X.cors = !!Pt && "withCredentials" in Pt, X.ajax = Pt = !!Pt, J.ajaxTransport(function(e) {
            var t;
            return X.cors || Pt && !e.crossDomain ? {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++Nt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) o.setRequestHeader(r, n[r]);
                    t = function(e) {
                        return function() {
                            t && (delete At[a],
                                t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(Rt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), o.onerror = t("error"), t = At[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (s) {
                        if (t) throw s
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return J.globalEval(e), e
                }
            }
        }), J.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), J.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = J("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), Z.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var It = [],
            Lt = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = It.pop() || J.expando + "_" + ct++;
                return this[e] = !0, e
            }
        }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = t.jsonp !== !1 && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Lt, "$1" + r) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || J.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, It.push(r)), a && J.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), J.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Z;
            var i = ae.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
        };
        var Dt = J.fn.load;
        J.fn.load = function(e, t, n) {
            if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = J.trim(e.slice(s)), e = e.slice(0, s)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && J.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            J.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), J.expr.filters.animated = function(e) {
            return J.grep(J.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Ot = e.document.documentElement;
        J.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c, u = J.css(e, "position"),
                    d = J(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, J.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    J.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== ke && (r = i.getBoundingClientRect()), n = U(o), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - J.css(n, "marginTop", !0),
                        left: t.left - i.left - J.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Ot; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                    return e || Ot
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = "pageYOffset" === n;
            J.fn[t] = function(r) {
                return ge(this, function(t, r, o) {
                    var a = U(t);
                    return void 0 === o ? a ? a[n] : t[r] : void(a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
                }, t, r, arguments.length, null)
            }
        }), J.each(["top", "left"], function(e, t) {
            J.cssHooks[t] = x(X.pixelPosition, function(e, n) {
                return n ? (n = _(e, t), je.test(n) ? J(e).position()[t] + "px" : n) : void 0
            })
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            J.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                J.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return ge(this, function(t, n, i) {
                        var r;
                        return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? J.css(t, n, a) : J.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), J.fn.size = function() {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return J
        });
        var $t = e.jQuery,
            Mt = e.$;
        return J.noConflict = function(t) {
            return e.$ === J && (e.$ = Mt), t && e.jQuery === J && (e.jQuery = $t), J
        }, typeof t === ke && (e.jQuery = e.$ = J), J
    }), function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), r.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && e.data("remote") !== !1
            },
            handleRemote: function(i) {
                var r, o, a, s, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (a.push(u), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    return c = {
                        type: r || "GET",
                        data: a,
                        dataType: l,
                        beforeSend: function(e, r) {
                            return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r]) ? void i.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    }, s && (c.xhrFields = {
                        withCredentials: s
                    }), o && (c.url = o), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    o = i.data("method"),
                    a = i.attr("target"),
                    s = n.csrfToken(),
                    l = n.csrfParam(),
                    c = e('<form method="post" action="' + r + '"></form>'),
                    u = '<input name="_method" value="' + o + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                "undefined" != typeof e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    r = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        r = n.confirm(i)
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    t = n.fire(e, "confirm:complete", [r])
                }
                return r && t
            },
            blankInputs: function(t, n, i) {
                var r, o, a = e(),
                    s = n || "input,textarea",
                    l = t.find(s);
                return l.each(function() {
                    if (r = e(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        a = a.add(r)
                    }
                }), a.length ? a : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:enable-with") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:enable-with") && e.rails.enableElement(t)
            })
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(t) {
            var i = e(this),
                r = i.data("method"),
                o = i.data("params"),
                a = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (a && (!r || "GET" === r) && !o) return !0;
                var s = n.handleRemote(i);
                return s === !1 ? n.enableElement(i) : s.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return r ? (n.handleMethod(i), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return r === !1 ? n.enableFormElement(i) : r.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var r, o, a = e(this),
                s = n.isRemote(a);
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") === t && (r = n.blankInputs(a, n.requiredInputSelector, !1), r && n.fire(a, "ajax:aborted:required", [r]))) return n.stopEverything(i);
            if (s) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                o = r ? {
                    name: r,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    /*!
     * jQuery Cookie Plugin v1.3.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(e, t, n) {
        function i(e) {
            return e
        }

        function r(e) {
            return o(decodeURIComponent(e.replace(s, " ")))
        }

        function o(e) {
            return 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e
        }

        function a(e) {
            return l.json ? JSON.parse(e) : e
        }
        var s = /\+/g,
            l = e.cookie = function(o, s, c) {
                if (s !== n) {
                    if (c = e.extend({}, l.defaults, c), null === s && (c.expires = -1), "number" == typeof c.expires) {
                        var u = c.expires,
                            d = c.expires = new Date;
                        d.setDate(d.getDate() + u)
                    }
                    return s = l.json ? JSON.stringify(s) : String(s), t.cookie = [encodeURIComponent(o), "=", l.raw ? s : encodeURIComponent(s), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
                }
                for (var p = l.raw ? i : r, h = t.cookie.split("; "), f = o ? null : {}, m = 0, g = h.length; g > m; m++) {
                    var v = h[m].split("="),
                        y = p(v.shift()),
                        b = p(v.join("="));
                    if (o && o === y) {
                        f = a(b);
                        break
                    }
                    o || (f[y] = a(b))
                }
                return f
            };
        l.defaults = {}, e.removeCookie = function(t, n) {
            return null !== e.cookie(t) ? (e.cookie(t, null, n), !0) : !1
        }
    }(jQuery, document),
    /*!
     * jQuery Validation Plugin v1.14.0
     *
     * http://jqueryvalidation.org/
     *
     * Copyright (c) 2015 Jörn Zaefferer
     * Released under the MIT license
     */
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function(t) {
                    function i() {
                        var i, r;
                        return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), void 0 !== r ? r : !1) : !0
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                var t, n, i;
                return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function() {
                    t = n.element(this) && t, i = i.concat(n.errorList)
                }), n.errorList = i), t
            },
            rules: function(t, n) {
                var i, r, o, a, s, l, c = this[0];
                if (t) switch (i = e.data(c.form, "validator").settings, r = i.rules, o = e.validator.staticRules(c), t) {
                    case "add":
                        e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[c.name] = o, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, e.each(n.split(/\s/), function(t, n) {
                            l[n] = o[n], delete o[n], "required" === n && e(c).removeAttr("aria-required")
                        }), l) : (delete r[c.name], o)
                }
                return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c), a.required && (s = a.required, delete a.required, a = e.extend({
                    required: s
                }, a), e(c).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {
                    remote: s
                })), a
            }
        }), e.extend(e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + e(t).val())
            },
            filled: function(t) {
                return !!e.trim("" + e(t).val())
            },
            unchecked: function(t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function(t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function(t, n) {
            return 1 === arguments.length ? function() {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                    return n
                })
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e) {
                    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                },
                onfocusout: function(e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(t, n) {
                    var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
                },
                unhighlight: function(t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        var n = e.data(this.form, "validator"),
                            i = "on" + t.type.replace(/^validate/, ""),
                            r = n.settings;
                        r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.groups = {};
                    e.each(this.settings.groups, function(t, n) {
                        "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                            i[n] = t
                        })
                    }), n = this.settings.rules, e.each(n, function(t, i) {
                        n[t] = e.validator.normalizeRule(i)
                    }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    var n = this.clean(t),
                        i = this.validationTargetFor(n),
                        r = !0;
                    return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = e(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), e(t).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
                },
                showErrors: function(t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var n in t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                    var t, n = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    if (this.settings.unhighlight)
                        for (t = 0; n[t]; t++) this.settings.unhighlight.call(this, n[t], this.settings.errorClass, "");
                    else n.removeClass(this.settings.errorClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t, n = 0;
                    for (t in e) n++;
                    return n
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var n, i = e(t),
                        r = t.type;
                    return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && "undefined" != typeof t.validity ? t.validity.badInput ? !1 : i.val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, i, r, o = e(t).rules(),
                        a = e.map(o, function(e, t) {
                            return t
                        }).length,
                        s = !1,
                        l = this.elementValue(t);
                    for (i in o) {
                        r = {
                            method: i,
                            parameters: o[i]
                        };
                        try {
                            if (n = e.validator.methods[i].call(this, l, t, r.parameters), "dependency-mismatch" === n && 1 === a) {
                                s = !0;
                                continue
                            }
                            if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!n) return this.formatAndAdd(t, r), !1
                        } catch (c) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), c
                        }
                    }
                    if (!s) return this.objectLength(o) && this.successList.push(t), !0
                },
                customDataMessage: function(t, n) {
                    return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e];
                    return void 0
                },
                defaultMessage: function(t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, n) {
                    var i = this.defaultMessage(t, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: t,
                        method: n.method
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t, n;
                    for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, n) {
                    var i, r, o, a = this.errorsFor(t),
                        s = this.idOrName(t),
                        l = e(t).attr("aria-describedby");
                    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", s) : 0 === a.parents("label[for='" + s + "']").length && (o = a.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, e(t).attr("aria-describedby", l), r = this.groups[t.name], r && e.each(this.groups, function(t, n) {
                        n === r && e("[name='" + t + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                    }))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
                },
                errorsFor: function(t) {
                    var n = this.idOrName(t),
                        i = e(t).attr("aria-describedby"),
                        r = "label[for='" + n + "'], label[for='" + n + "'] *";
                    return i && (r = r + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function(t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function(e) {
                        return e
                    },
                    string: function(t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function(t, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                },
                destroy: function() {
                    this.resetForm(), e(this.currentForm).off(".validate").removeData("validator")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var n = {},
                    i = e(t).attr("class");
                return i && e.each(i.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            normalizeAttributeRule: function(e, t, n, i) {
                /min|max/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
            },
            attributeRules: function(t) {
                var n, i, r = {},
                    o = e(t),
                    a = t.getAttribute("type");
                for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, a, n, i);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(t) {
                var n, i, r = {},
                    o = e(t),
                    a = t.getAttribute("type");
                for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, n, i);
                return r
            },
            staticRules: function(t) {
                var n = {},
                    i = e.data(t.form, "validator");
                return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function(t, n) {
                return e.each(t, function(i, r) {
                    if (r === !1) return void delete t[i];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!e(r.depends, n.form).length;
                                break;
                            case "function":
                                o = r.depends.call(n, n)
                        }
                        o ? t[i] = void 0 !== r.param ? r.param : !0 : delete t[i]
                    }
                }), e.each(t, function(i, r) {
                    t[i] = e.isFunction(r) ? r(n) : r
                }), e.each(["minlength", "maxlength"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function() {
                    var n;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
                }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), function() {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function(t, n, i) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = e(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
                },
                email: function(e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                },
                url: function(e, t) {
                    // Copyright (c) 2010-2013 Diego Perini, MIT licensed
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function(e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var n, i, r = 0,
                        o = 0,
                        a = !1;
                    if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19) return !1;
                    for (n = e.length - 1; n >= 0; n--) i = e.charAt(n), o = parseInt(i, 10), a && (o *= 2) > 9 && (o -= 9), r += o, a = !a;
                    return r % 10 === 0
                },
                minlength: function(t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || r >= i
                },
                maxlength: function(t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || i >= r
                },
                rangelength: function(t, n, i) {
                    var r = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function(e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function(e, t, n) {
                    return this.optional(t) || n >= e
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                },
                equalTo: function(t, n, i) {
                    var r = e(i);
                    return this.settings.onfocusout && r.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                        e(n).valid()
                    }), t === r.val()
                },
                remote: function(t, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r, o, a = this.previousValue(n);
                    return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, i = "string" == typeof i && {
                        url: i
                    } || i, a.old === t ? a.valid : (a.old = t, r = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, {
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: r.currentForm,
                        success: function(i) {
                            var o, s, l, c = i === !0 || "true" === i;
                            r.settings.messages[n.name].remote = a.originalMessage, c ? (l = r.formSubmitted, r.prepareElement(n), r.formSubmitted = l, r.successList.push(n), delete r.invalid[n.name], r.showErrors()) : (o = {}, s = i || r.defaultMessage(n, "remote"), o[n.name] = a.message = e.isFunction(s) ? s(t) : s, r.invalid[n.name] = !0, r.showErrors(o)), a.valid = c, r.stopRequest(n, c)
                        }
                    }, i)), "pending")
                }
            }
        });
        var t, n = {};
        e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
            var r = e.port;
            "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
        }) : (t = e.ajax, e.ajax = function(i) {
            var r = ("mode" in i ? i : e.ajaxSettings).mode,
                o = ("port" in i ? i : e.ajaxSettings).port;
            return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
        })
    }),
    /*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
     * http://jqueryui.com
     * Includes: widget.js
     * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        /*!
         * jQuery UI Widget 1.11.4
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/jQuery.widget/
         */
        var t = 0,
            n = Array.prototype.slice;
        e.cleanData = function(t) {
            return function(n) {
                var i, r, o;
                for (o = 0; null != (r = n[o]); o++) try {
                    i = e._data(r, "events"), i && i.remove && e(r).triggerHandler("remove")
                } catch (a) {}
                t(n)
            }
        }(e.cleanData), e.widget = function(t, n, i) {
            var r, o, a, s, l = {},
                c = t.split(".")[0];
            return t = t.split(".")[1], r = c + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
                return !!e.data(t, r)
            }, e[c] = e[c] || {}, o = e[c][t], a = e[c][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
            }, e.extend(a, o, {
                version: i.version,
                _proto: e.extend({}, i),
                _childConstructors: []
            }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
                return e.isFunction(i) ? void(l[t] = function() {
                    var e = function() {
                            return n.prototype[t].apply(this, arguments)
                        },
                        r = function(e) {
                            return n.prototype[t].apply(this, e)
                        };
                    return function() {
                        var t, n = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                    }
                }()) : void(l[t] = i)
            }), a.prototype = e.widget.extend(s, {
                widgetEventPrefix: o ? s.widgetEventPrefix || t : t
            }, l, {
                constructor: a,
                namespace: c,
                widgetName: t,
                widgetFullName: r
            }), o ? (e.each(o._childConstructors, function(t, n) {
                var i = n.prototype;
                e.widget(i.namespace + "." + i.widgetName, a, n._proto)
            }), delete o._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a), a
        }, e.widget.extend = function(t) {
            for (var i, r, o = n.call(arguments, 1), a = 0, s = o.length; s > a; a++)
                for (i in o[a]) r = o[a][i], o[a].hasOwnProperty(i) && void 0 !== r && (e.isPlainObject(r) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], r) : e.widget.extend({}, r) : t[i] = r);
            return t
        }, e.widget.bridge = function(t, i) {
            var r = i.prototype.widgetFullName || t;
            e.fn[t] = function(o) {
                var a = "string" == typeof o,
                    s = n.call(arguments, 1),
                    l = this;
                return a ? this.each(function() {
                    var n, i = e.data(this, r);
                    return "instance" === o ? (l = i, !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, s), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                }) : (s.length && (o = e.widget.extend.apply(null, [o].concat(s))), this.each(function() {
                    var t = e.data(this, r);
                    t ? (t.option(o || {}), t._init && t._init()) : e.data(this, r, new i(o, this))
                })), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(n, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, n) {
                var i, r, o, a = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (a = {}, i = t.split("."), t = i.shift(), i.length) {
                        for (r = a[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                        if (t = i.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                        r[t] = n
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        a[t] = n
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(t, n, i) {
                var r, o = this;
                "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, a) {
                    function s() {
                        return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                    }
                    "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        u = l[2];
                    u ? r.delegate(u, c, s) : n.bind(c, s)
                })
            },
            _off: function(t, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function n() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, n, i) {
                var r, o, a = this.options[t];
                if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                    for (r in o) r in n || (n[r] = o[r]);
                return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, n) {
            e.Widget.prototype["_" + t] = function(i, r, o) {
                "string" == typeof r && (r = {
                    effect: r
                });
                var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
                r = r || {}, "number" == typeof r && (r = {
                    duration: r
                }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && e.effects.effect[s] ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function(n) {
                    e(this)[t](), o && o.call(i[0]), n()
                })
            }
        });
        e.widget
    }),
    /*
     * jQuery Iframe Transport Plugin
     * https://github.com/blueimp/jQuery-File-Upload
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * http://www.opensource.org/licenses/MIT
     */
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery)
    }(function(e) {
        "use strict";
        var t = 0;
        e.ajaxTransport("iframe", function(n) {
            if (n.async) {
                var i, r, o, a = n.initialIframeSrc || "javascript:false;";
                return {
                    send: function(s, l) {
                        i = e('<form style="display:none;"></form>'), i.attr("accept-charset", n.formAcceptCharset), o = /\?/.test(n.url) ? "&" : "?", "DELETE" === n.type ? (n.url = n.url + o + "_method=DELETE", n.type = "POST") : "PUT" === n.type ? (n.url = n.url + o + "_method=PUT", n.type = "POST") : "PATCH" === n.type && (n.url = n.url + o + "_method=PATCH", n.type = "POST"), t += 1, r = e('<iframe src="' + a + '" name="iframe-transport-' + t + '"></iframe>').bind("load", function() {
                            var t, o = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                            r.unbind("load").bind("load", function() {
                                var t;
                                try {
                                    if (t = r.contents(), !t.length || !t[0].firstChild) throw new Error
                                } catch (n) {
                                    t = void 0
                                }
                                l(200, "success", {
                                    iframe: t
                                }), e('<iframe src="' + a + '"></iframe>').appendTo(i), window.setTimeout(function() {
                                    i.remove()
                                }, 0)
                            }), i.prop("target", r.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function(t, n) {
                                e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(i)
                            }), n.fileInput && n.fileInput.length && "POST" === n.type && (t = n.fileInput.clone(), n.fileInput.after(function(e) {
                                return t[e]
                            }), n.paramName && n.fileInput.each(function(t) {
                                e(this).prop("name", o[t] || n.paramName)
                            }), i.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), n.fileInput.removeAttr("form")), i.submit(), t && t.length && n.fileInput.each(function(n, i) {
                                var r = e(t[n]);
                                e(i).prop("name", r.prop("name")).attr("form", r.attr("form")), r.replaceWith(i)
                            })
                        }), i.append(r).appendTo(document.body)
                    },
                    abort: function() {
                        r && r.unbind("load").prop("src", a), i && i.remove()
                    }
                }
            }
        }), e.ajaxSetup({
            converters: {
                "iframe text": function(t) {
                    return t && e(t[0].body).text()
                },
                "iframe json": function(t) {
                    return t && e.parseJSON(e(t[0].body).text())
                },
                "iframe html": function(t) {
                    return t && e(t[0].body).html()
                },
                "iframe xml": function(t) {
                    var n = t && t[0];
                    return n && e.isXMLDoc(n) ? n : e.parseXML(n.XMLDocument && n.XMLDocument.xml || e(n.body).html())
                },
                "iframe script": function(t) {
                    return t && e.globalEval(e(t[0].body).text())
                }
            }
        })
    }),
    /*
     * jQuery File Upload Plugin
     * https://github.com/blueimp/jQuery-File-Upload
     *
     * Copyright 2010, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * http://www.opensource.org/licenses/MIT
     */
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
    }(function(e) {
        "use strict";

        function t(t) {
            var n = "dragover" === t;
            return function(i) {
                i.dataTransfer = i.originalEvent && i.originalEvent.dataTransfer;
                var r = i.dataTransfer;
                r && -1 !== e.inArray("Files", r.types) && this._trigger(t, e.Event(t, {
                    delegatedEvent: i
                })) !== !1 && (i.preventDefault(), n && (r.dropEffect = "copy"))
            }
        }
        e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file">').prop("disabled")), e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), e.widget("blueimp.fileupload", {
            options: {
                dropZone: e(document),
                pasteZone: void 0,
                fileInput: void 0,
                replaceFileInput: !0,
                paramName: void 0,
                singleFileUploads: !0,
                limitMultiFileUploads: void 0,
                limitMultiFileUploadSize: void 0,
                limitMultiFileUploadSizeOverhead: 512,
                sequentialUploads: !1,
                limitConcurrentUploads: void 0,
                forceIframeTransport: !1,
                redirect: void 0,
                redirectParamName: void 0,
                postMessage: void 0,
                multipart: !0,
                maxChunkSize: void 0,
                uploadedBytes: void 0,
                recalculateProgress: !0,
                progressInterval: 100,
                bitrateInterval: 500,
                autoUpload: !0,
                messages: {
                    uploadedBytes: "Uploaded bytes exceed file size"
                },
                i18n: function(t, n) {
                    return t = this.messages[t] || t.toString(), n && e.each(n, function(e, n) {
                        t = t.replace("{" + e + "}", n)
                    }), t
                },
                formData: function(e) {
                    return e.serializeArray()
                },
                add: function(t, n) {
                    return t.isDefaultPrevented() ? !1 : void((n.autoUpload || n.autoUpload !== !1 && e(this).fileupload("option", "autoUpload")) && n.process().done(function() {
                        n.submit()
                    }))
                },
                processData: !1,
                contentType: !1,
                cache: !1,
                timeout: 0
            },
            _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
            _blobSlice: e.support.blobSlice && function() {
                var e = this.slice || this.webkitSlice || this.mozSlice;
                return e.apply(this, arguments)
            },
            _BitrateTimer: function() {
                this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(e, t, n) {
                    var i = e - this.timestamp;
                    return (!this.bitrate || !n || i > n) && (this.bitrate = (t - this.loaded) * (1e3 / i) * 8, this.loaded = t, this.timestamp = e), this.bitrate
                }
            },
            _isXHRUpload: function(t) {
                return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
            },
            _getFormData: function(t) {
                var n;
                return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (n = [], e.each(t.formData, function(e, t) {
                    n.push({
                        name: e,
                        value: t
                    })
                }), n) : []
            },
            _getTotal: function(t) {
                var n = 0;
                return e.each(t, function(e, t) {
                    n += t.size || 1
                }), n
            },
            _initProgressObject: function(t) {
                var n = {
                    loaded: 0,
                    total: 0,
                    bitrate: 0
                };
                t._progress ? e.extend(t._progress, n) : t._progress = n
            },
            _initResponseObject: function(e) {
                var t;
                if (e._response)
                    for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
                else e._response = {}
            },
            _onProgress: function(t, n) {
                if (t.lengthComputable) {
                    var i, r = Date.now ? Date.now() : (new Date).getTime();
                    if (n._time && n.progressInterval && r - n._time < n.progressInterval && t.loaded !== t.total) return;
                    n._time = r, i = Math.floor(t.loaded / t.total * (n.chunkSize || n._progress.total)) + (n.uploadedBytes || 0), this._progress.loaded += i - n._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(r, this._progress.loaded, n.bitrateInterval), n._progress.loaded = n.loaded = i, n._progress.bitrate = n.bitrate = n._bitrateTimer.getBitrate(r, i, n.bitrateInterval), this._trigger("progress", e.Event("progress", {
                        delegatedEvent: t
                    }), n), this._trigger("progressall", e.Event("progressall", {
                        delegatedEvent: t
                    }), this._progress)
                }
            },
            _initProgressListener: function(t) {
                var n = this,
                    i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
                i.upload && (e(i.upload).bind("progress", function(e) {
                    var i = e.originalEvent;
                    e.lengthComputable = i.lengthComputable, e.loaded = i.loaded, e.total = i.total, n._onProgress(e, t)
                }), t.xhr = function() {
                    return i
                })
            },
            _isInstanceOf: function(e, t) {
                return Object.prototype.toString.call(t) === "[object " + e + "]"
            },
            _initXHRData: function(t) {
                var n, i = this,
                    r = t.files[0],
                    o = t.multipart || !e.support.xhrFileUpload,
                    a = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
                t.headers = e.extend({}, t.headers), t.contentRange && (t.headers["Content-Range"] = t.contentRange), o && !t.blob && this._isInstanceOf("File", r) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(r.name) + '"'), o ? e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({
                    name: a,
                    value: t.blob
                }) : e.each(t.files, function(i, r) {
                    n.push({
                        name: "array" === e.type(t.paramName) && t.paramName[i] || a,
                        value: r
                    })
                })) : (i._isInstanceOf("FormData", t.formData) ? n = t.formData : (n = new FormData, e.each(this._getFormData(t), function(e, t) {
                    n.append(t.name, t.value)
                })), t.blob ? n.append(a, t.blob, r.name) : e.each(t.files, function(r, o) {
                    (i._isInstanceOf("File", o) || i._isInstanceOf("Blob", o)) && n.append("array" === e.type(t.paramName) && t.paramName[r] || a, o, o.uploadName || o.name)
                })), t.data = n) : (t.contentType = r.type || "application/octet-stream", t.data = t.blob || r), t.blob = null
            },
            _initIframeSettings: function(t) {
                var n = e("<a></a>").prop("href", t.url).prop("host");
                t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && n && n !== location.host && t.formData.push({
                    name: t.redirectParamName || "redirect",
                    value: t.redirect
                })
            },
            _initDataSettings: function(e) {
                this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
            },
            _getParamName: function(t) {
                var n = e(t.fileInput),
                    i = t.paramName;
                return i ? e.isArray(i) || (i = [i]) : (i = [], n.each(function() {
                    for (var t = e(this), n = t.prop("name") || "files[]", r = (t.prop("files") || [1]).length; r;) i.push(n), r -= 1
                }), i.length || (i = [n.prop("name") || "files[]"])), i
            },
            _initFormSettings: function(t) {
                t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))), t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(), "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
            },
            _getAJAXSettings: function(t) {
                var n = e.extend({}, this.options, t);
                return this._initFormSettings(n), this._initDataSettings(n), n
            },
            _getDeferredState: function(e) {
                return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
            },
            _enhancePromise: function(e) {
                return e.success = e.done, e.error = e.fail, e.complete = e.always, e
            },
            _getXHRPromise: function(t, n, i) {
                var r = e.Deferred(),
                    o = r.promise();
                return n = n || this.options.context || o, t === !0 ? r.resolveWith(n, i) : t === !1 && r.rejectWith(n, i), o.abort = r.promise, this._enhancePromise(o)
            },
            _addConvenienceMethods: function(t, n) {
                var i = this,
                    r = function(t) {
                        return e.Deferred().resolveWith(i, t).promise()
                    };
                n.process = function(t, o) {
                    return (t || o) && (n._processQueue = this._processQueue = (this._processQueue || r([this])).pipe(function() {
                        return n.errorThrown ? e.Deferred().rejectWith(i, [n]).promise() : r(arguments)
                    }).pipe(t, o)), this._processQueue || r([this])
                }, n.submit = function() {
                    return "pending" !== this.state() && (n.jqXHR = this.jqXHR = i._trigger("submit", e.Event("submit", {
                        delegatedEvent: t
                    }), this) !== !1 && i._onSend(t, this)), this.jqXHR || i._getXHRPromise()
                }, n.abort = function() {
                    return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", i._trigger("fail", null, this), i._getXHRPromise(!1))
                }, n.state = function() {
                    return this.jqXHR ? i._getDeferredState(this.jqXHR) : this._processQueue ? i._getDeferredState(this._processQueue) : void 0
                }, n.processing = function() {
                    return !this.jqXHR && this._processQueue && "pending" === i._getDeferredState(this._processQueue)
                }, n.progress = function() {
                    return this._progress
                }, n.response = function() {
                    return this._response
                }
            },
            _getUploadedBytes: function(e) {
                var t = e.getResponseHeader("Range"),
                    n = t && t.split("-"),
                    i = n && n.length > 1 && parseInt(n[1], 10);
                return i && i + 1
            },
            _chunkedUpload: function(t, n) {
                t.uploadedBytes = t.uploadedBytes || 0;
                var i, r, o = this,
                    a = t.files[0],
                    s = a.size,
                    l = t.uploadedBytes,
                    c = t.maxChunkSize || s,
                    u = this._blobSlice,
                    d = e.Deferred(),
                    p = d.promise();
                return this._isXHRUpload(t) && u && (l || s > c) && !t.data ? n ? !0 : l >= s ? (a.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", a.error])) : (r = function() {
                    var n = e.extend({}, t),
                        p = n._progress.loaded;
                    n.blob = u.call(a, l, l + c, a.type), n.chunkSize = n.blob.size, n.contentRange = "bytes " + l + "-" + (l + n.chunkSize - 1) + "/" + s, o._initXHRData(n), o._initProgressListener(n), i = (o._trigger("chunksend", null, n) !== !1 && e.ajax(n) || o._getXHRPromise(!1, n.context)).done(function(i, a, c) {
                        l = o._getUploadedBytes(c) || l + n.chunkSize, p + n.chunkSize - n._progress.loaded && o._onProgress(e.Event("progress", {
                            lengthComputable: !0,
                            loaded: l - n.uploadedBytes,
                            total: l - n.uploadedBytes
                        }), n), t.uploadedBytes = n.uploadedBytes = l, n.result = i, n.textStatus = a, n.jqXHR = c, o._trigger("chunkdone", null, n), o._trigger("chunkalways", null, n), s > l ? r() : d.resolveWith(n.context, [i, a, c])
                    }).fail(function(e, t, i) {
                        n.jqXHR = e, n.textStatus = t, n.errorThrown = i, o._trigger("chunkfail", null, n), o._trigger("chunkalways", null, n), d.rejectWith(n.context, [e, t, i])
                    })
                }, this._enhancePromise(p), p.abort = function() {
                    return i.abort()
                }, r(), p) : !1
            },
            _beforeSend: function(e, t) {
                0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
            },
            _onDone: function(t, n, i, r) {
                var o = r._progress.total,
                    a = r._response;
                r._progress.loaded < o && this._onProgress(e.Event("progress", {
                    lengthComputable: !0,
                    loaded: o,
                    total: o
                }), r), a.result = r.result = t, a.textStatus = r.textStatus = n, a.jqXHR = r.jqXHR = i, this._trigger("done", null, r)
            },
            _onFail: function(e, t, n, i) {
                var r = i._response;
                i.recalculateProgress && (this._progress.loaded -= i._progress.loaded, this._progress.total -= i._progress.total), r.jqXHR = i.jqXHR = e, r.textStatus = i.textStatus = t, r.errorThrown = i.errorThrown = n, this._trigger("fail", null, i)
            },
            _onAlways: function(e, t, n, i) {
                this._trigger("always", null, i)
            },
            _onSend: function(t, n) {
                n.submit || this._addConvenienceMethods(t, n);
                var i, r, o, a, s = this,
                    l = s._getAJAXSettings(n),
                    c = function() {
                        return s._sending += 1, l._bitrateTimer = new s._BitrateTimer, i = i || ((r || s._trigger("send", e.Event("send", {
                            delegatedEvent: t
                        }), l) === !1) && s._getXHRPromise(!1, l.context, r) || s._chunkedUpload(l) || e.ajax(l)).done(function(e, t, n) {
                            s._onDone(e, t, n, l)
                        }).fail(function(e, t, n) {
                            s._onFail(e, t, n, l)
                        }).always(function(e, t, n) {
                            if (s._onAlways(e, t, n, l), s._sending -= 1, s._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > s._sending)
                                for (var i = s._slots.shift(); i;) {
                                    if ("pending" === s._getDeferredState(i)) {
                                        i.resolve();
                                        break
                                    }
                                    i = s._slots.shift()
                                }
                            0 === s._active && s._trigger("stop")
                        })
                    };
                return this._beforeSend(t, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(), this._slots.push(o), a = o.pipe(c)) : (this._sequence = this._sequence.pipe(c, c), a = this._sequence), a.abort = function() {
                    return r = [void 0, "abort", "abort"], i ? i.abort() : (o && o.rejectWith(l.context, r), c())
                }, this._enhancePromise(a)) : c()
            },
            _onAdd: function(t, n) {
                var i, r, o, a, s = this,
                    l = !0,
                    c = e.extend({}, this.options, n),
                    u = n.files,
                    d = u.length,
                    p = c.limitMultiFileUploads,
                    h = c.limitMultiFileUploadSize,
                    f = c.limitMultiFileUploadSizeOverhead,
                    m = 0,
                    g = this._getParamName(c),
                    v = 0;
                if (!d) return !1;
                if (h && void 0 === u[0].size && (h = void 0), (c.singleFileUploads || p || h) && this._isXHRUpload(c))
                    if (c.singleFileUploads || h || !p)
                        if (!c.singleFileUploads && h)
                            for (o = [], i = [], a = 0; d > a; a += 1) m += u[a].size + f, (a + 1 === d || m + u[a + 1].size + f > h || p && a + 1 - v >= p) && (o.push(u.slice(v, a + 1)), r = g.slice(v, a + 1), r.length || (r = g), i.push(r), v = a + 1, m = 0);
                        else i = g;
                else
                    for (o = [], i = [], a = 0; d > a; a += p) o.push(u.slice(a, a + p)), r = g.slice(a, a + p), r.length || (r = g), i.push(r);
                else o = [u], i = [g];
                return n.originalFiles = u, e.each(o || u, function(r, a) {
                    var c = e.extend({}, n);
                    return c.files = o ? a : [a], c.paramName = i[r], s._initResponseObject(c), s._initProgressObject(c), s._addConvenienceMethods(t, c), l = s._trigger("add", e.Event("add", {
                        delegatedEvent: t
                    }), c)
                }), l
            },
            _replaceFileInput: function(t) {
                var n = t.fileInput,
                    i = n.clone(!0),
                    r = n.is(document.activeElement);
                t.fileInputClone = i, e("<form></form>").append(i)[0].reset(), n.after(i).detach(), r && i.focus(), e.cleanData(n.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(e, t) {
                    return t === n[0] ? i[0] : t
                }), n[0] === this.element[0] && (this.element = i)
            },
            _handleFileTreeEntry: function(t, n) {
                var i, r = this,
                    o = e.Deferred(),
                    a = function(e) {
                        e && !e.entry && (e.entry = t), o.resolve([e])
                    },
                    s = function(e) {
                        r._handleFileTreeEntries(e, n + t.name + "/").done(function(e) {
                            o.resolve(e)
                        }).fail(a)
                    },
                    l = function() {
                        i.readEntries(function(e) {
                            e.length ? (c = c.concat(e), l()) : s(c)
                        }, a)
                    },
                    c = [];
                return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, o.resolve(t._file)) : t.file(function(e) {
                    e.relativePath = n, o.resolve(e)
                }, a) : t.isDirectory ? (i = t.createReader(), l()) : o.resolve([]), o.promise()
            },
            _handleFileTreeEntries: function(t, n) {
                var i = this;
                return e.when.apply(e, e.map(t, function(e) {
                    return i._handleFileTreeEntry(e, n)
                })).pipe(function() {
                    return Array.prototype.concat.apply([], arguments)
                })
            },
            _getDroppedFiles: function(t) {
                t = t || {};
                var n = t.items;
                return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(e.map(n, function(e) {
                    var t;
                    return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
                })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
            },
            _getSingleFileInputFiles: function(t) {
                t = e(t);
                var n, i, r = t.prop("webkitEntries") || t.prop("entries");
                if (r && r.length) return this._handleFileTreeEntries(r);
                if (n = e.makeArray(t.prop("files")), n.length) void 0 === n[0].name && n[0].fileName && e.each(n, function(e, t) {
                    t.name = t.fileName, t.size = t.fileSize
                });
                else {
                    if (i = t.prop("value"), !i) return e.Deferred().resolve([]).promise();
                    n = [{
                        name: i.replace(/^.*\\/, "")
                    }]
                }
                return e.Deferred().resolve(n).promise()
            },
            _getFileInputFiles: function(t) {
                return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe(function() {
                    return Array.prototype.concat.apply([], arguments)
                }) : this._getSingleFileInputFiles(t)
            },
            _onChange: function(t) {
                var n = this,
                    i = {
                        fileInput: e(t.target),
                        form: e(t.target.form)
                    };
                this._getFileInputFiles(i.fileInput).always(function(r) {
                    i.files = r, n.options.replaceFileInput && n._replaceFileInput(i), n._trigger("change", e.Event("change", {
                        delegatedEvent: t
                    }), i) !== !1 && n._onAdd(t, i)
                })
            },
            _onPaste: function(t) {
                var n = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items,
                    i = {
                        files: []
                    };
                n && n.length && (e.each(n, function(e, t) {
                    var n = t.getAsFile && t.getAsFile();
                    n && i.files.push(n)
                }), this._trigger("paste", e.Event("paste", {
                    delegatedEvent: t
                }), i) !== !1 && this._onAdd(t, i))
            },
            _onDrop: function(t) {
                t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
                var n = this,
                    i = t.dataTransfer,
                    r = {};
                i && i.files && i.files.length && (t.preventDefault(), this._getDroppedFiles(i).always(function(i) {
                    r.files = i, n._trigger("drop", e.Event("drop", {
                        delegatedEvent: t
                    }), r) !== !1 && n._onAdd(t, r)
                }))
            },
            _onDragOver: t("dragover"),
            _onDragEnter: t("dragenter"),
            _onDragLeave: t("dragleave"),
            _initEventHandlers: function() {
                this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    dragenter: this._onDragEnter,
                    dragleave: this._onDragLeave
                }), this._on(this.options.pasteZone, {
                    paste: this._onPaste
                })), e.support.fileInput && this._on(this.options.fileInput, {
                    change: this._onChange
                })
            },
            _destroyEventHandlers: function() {
                this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
            },
            _setOption: function(t, n) {
                var i = -1 !== e.inArray(t, this._specialOptions);
                i && this._destroyEventHandlers(), this._super(t, n), i && (this._initSpecialOptions(), this._initEventHandlers())
            },
            _initSpecialOptions: function() {
                var t = this.options;
                void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
            },
            _getRegExp: function(e) {
                var t = e.split("/"),
                    n = t.pop();
                return t.shift(), new RegExp(t.join("/"), n)
            },
            _isRegExpOption: function(t, n) {
                return "url" !== t && "string" === e.type(n) && /^\/.*\/[igm]{0,3}$/.test(n)
            },
            _initDataAttributes: function() {
                var t = this,
                    n = this.options,
                    i = this.element.data();
                e.each(this.element[0].attributes, function(e, r) {
                    var o, a = r.name.toLowerCase();
                    /^data-/.test(a) && (a = a.slice(5).replace(/-[a-z]/g, function(e) {
                        return e.charAt(1).toUpperCase()
                    }), o = i[a], t._isRegExpOption(a, o) && (o = t._getRegExp(o)), n[a] = o)
                })
            },
            _create: function() {
                this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
            },
            active: function() {
                return this._active
            },
            progress: function() {
                return this._progress
            },
            add: function(t) {
                var n = this;
                t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                    t.files = e, n._onAdd(null, t)
                }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
            },
            send: function(t) {
                if (t && !this.options.disabled) {
                    if (t.fileInput && !t.files) {
                        var n, i, r = this,
                            o = e.Deferred(),
                            a = o.promise();
                        return a.abort = function() {
                            return i = !0, n ? n.abort() : (o.reject(null, "abort", "abort"), a)
                        }, this._getFileInputFiles(t.fileInput).always(function(e) {
                            if (!i) {
                                if (!e.length) return void o.reject();
                                t.files = e, n = r._onSend(null, t), n.then(function(e, t, n) {
                                    o.resolve(e, t, n)
                                }, function(e, t, n) {
                                    o.reject(e, t, n)
                                })
                            }
                        }), this._enhancePromise(a)
                    }
                    if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t)
                }
                return this._getXHRPromise(!1, t && t.context)
            }
        })
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e("#" === o ? [] : o);
        t && t.preventDefault(), a.length || (a = r.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.button"),
                o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function() {
            i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.carousel"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : a ? r[a]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var r = "prev" == e ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(t, r),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(s), o.addClass(s), r.one("bsTransitionEnd", function() {
                o.removeClass([t, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var r = function(n) {
        var i, r = e(this),
            o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = e.extend({}, o.data(), r.data()),
                s = r.attr("data-slide-to");
            s && (a.interval = !1), t.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.collapse"),
                o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = r, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : r.data();
        n.call(o, s)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(r).remove(), e(o).each(function() {
            var i = e(this),
                r = t(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = t(r),
                a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = t(i),
                    a = r.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + s);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery),
/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var r = e(this),
                o = r.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, a)), "string" == typeof t ? o[t](i) : a.show && o.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            r = i.attr("href"),
            o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, a, this)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (r || !/destroy|hide/.test(t)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var a = r[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (c) {
                var h = s,
                    f = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + p > f.bottom ? "top" : "top" == s && u.top - p < f.top ? "bottom" : "right" == s && u.right + d > f.width ? "left" : "left" == s && u.left - d < f.left ? "right" : s, o.removeClass(h).addClass(s)
            }
            var m = this.getCalculatedOffset(s, u, d, p);
            this.applyPlacement(m, s);
            var g = function() {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            p = d ? 2 * u.left - r + l : 2 * u.top - o + c,
            h = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][h], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
        }
        var r = this,
            o = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            a = i ? {
                top: 0,
                left: 0
            } : o ? null : t.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, r, s, l, a)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll,
                l = t.top + o - a.scroll + i;
            s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l)
        } else {
            var c = t.left - o,
                u = t.left + o + n;
            c < a.left ? r.left = a.left - c : u > a.right && (r.left = a.left + a.width - u)
        }
        return r
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.popover"),
                o = "object" == typeof t && t;
            (r || !/destroy|hide/.test(t)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                r = t.data("target") || t.attr("href"),
                o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + i, r]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = o[o.length - 1]) && this.activate(e);
        if (a && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--;) a != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, r) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var a = i.find("> .active"),
            s = r && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.affix"),
                o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : e - i >= r + a ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? r : o.top,
            c = s ? a : t;
        return null != n && n >= r ? "top" : null != i && l + c >= e - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var s = this.getState(a, t, r, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - o
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery),
function(e) {
    function t(e) {
        this.init(e)
    }
    t.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0,
        reverse: !1,
        lineCap: "butt",
        constructor: t,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0,
        arcFill: null,
        lastFrameValue: 0,
        init: function(t) {
            e.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw()
        },
        initWidget: function() {
            var t = this.canvas = this.canvas || e("<canvas>").prependTo(this.el)[0];
            t.width = this.size, t.height = this.size, this.ctx = t.getContext("2d")
        },
        initFill: function() {
            function t() {
                var t = e("<canvas>")[0];
                t.width = n.size, t.height = n.size, t.getContext("2d").drawImage(h, 0, 0, o, o), n.arcFill = n.ctx.createPattern(t, "no-repeat"), n.drawFrame(n.lastFrameValue)
            }
            var n = this,
                i = this.fill,
                r = this.ctx,
                o = this.size;
            if (!i) throw Error("The fill is not specified!");
            if (i.color && (this.arcFill = i.color), i.gradient) {
                var a = i.gradient;
                if (1 == a.length) this.arcFill = a[0];
                else if (a.length > 1) {
                    for (var s = i.gradientAngle || 0, l = i.gradientDirection || [o / 2 * (1 - Math.cos(s)), o / 2 * (1 + Math.sin(s)), o / 2 * (1 + Math.cos(s)), o / 2 * (1 - Math.sin(s))], c = r.createLinearGradient.apply(r, l), u = 0; u < a.length; u++) {
                        var d = a[u],
                            p = u / (a.length - 1);
                        e.isArray(d) && (p = d[1], d = d[0]), c.addColorStop(p, d)
                    }
                    this.arcFill = c
                }
            }
            if (i.image) {
                var h;
                i.image instanceof Image ? h = i.image : (h = new Image, h.src = i.image), h.complete ? t() : h.onload = t
            }
        },
        draw: function() {
            this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
        },
        drawFrame: function(e) {
            this.lastFrameValue = e, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(e), this.drawArc(e)
        },
        drawArc: function(e) {
            var t = this.ctx,
                n = this.radius,
                i = this.getThickness(),
                r = this.startAngle;
            t.save(), t.beginPath(), this.reverse ? t.arc(n, n, n - i / 2, r - 2 * Math.PI * e, r) : t.arc(n, n, n - i / 2, r, r + 2 * Math.PI * e), t.lineWidth = i, t.lineCap = this.lineCap, t.strokeStyle = this.arcFill, t.stroke(), t.restore()
        },
        drawEmptyArc: function(e) {
            var t = this.ctx,
                n = this.radius,
                i = this.getThickness(),
                r = this.startAngle;
            1 > e && (t.save(), t.beginPath(), 0 >= e ? t.arc(n, n, n - i / 2, 0, 2 * Math.PI) : this.reverse ? t.arc(n, n, n - i / 2, r, r - 2 * Math.PI * e) : t.arc(n, n, n - i / 2, r + 2 * Math.PI * e, r), t.lineWidth = i, t.strokeStyle = this.emptyFill, t.stroke(), t.restore())
        },
        drawAnimated: function(t) {
            var n = this,
                i = this.el,
                r = e(this.canvas);
            r.stop(!0, !1), i.trigger("circle-animation-start"), r.css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, e.extend({}, this.animation, {
                step: function(e) {
                    var r = n.animationStartValue * (1 - e) + t * e;
                    n.drawFrame(r), i.trigger("circle-animation-progress", [e, r])
                }
            })).promise().always(function() {
                i.trigger("circle-animation-end")
            })
        },
        getThickness: function() {
            return e.isNumeric(this.thickness) ? this.thickness : this.size / 14
        },
        getValue: function() {
            return this.value
        },
        setValue: function(e) {
            this.animation && (this.animationStartValue = this.lastFrameValue), this.value = e, this.draw()
        }
    }, e.circleProgress = {
        defaults: t.prototype
    }, e.easing.circleProgressEasing = function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    }, e.fn.circleProgress = function(n, i) {
        var r = "circle-progress",
            o = this.data(r);
        if ("widget" == n) {
            if (!o) throw Error('Calling "widget" method on not initialized instance is forbidden');
            return o.canvas
        }
        if ("value" == n) {
            if (!o) throw Error('Calling "value" method on not initialized instance is forbidden');
            if ("undefined" == typeof i) return o.getValue();
            var a = arguments[1];
            return this.each(function() {
                e(this).data(r).setValue(a)
            })
        }
        return this.each(function() {
            var i = e(this),
                o = i.data(r),
                a = e.isPlainObject(n) ? n : {};
            if (o) o.init(a);
            else {
                var s = e.extend({}, i.data());
                "string" == typeof s.fill && (s.fill = JSON.parse(s.fill)), "string" == typeof s.animation && (s.animation = JSON.parse(s.animation)), a = e.extend(s, a), a.el = i, o = new t(a), i.data(r, o)
            }
        })
    }
}(jQuery);
var IFrame = {
    load_with_id: function(e, t) {
        $("#" + e).contents().find("html").html(t), $("#" + e).css("height", document.getElementById(e).contentWindow.document.body.scrollHeight)
    }
};
/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
    var e, t, n, i, r, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        a = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, i;
            for (n in t) i = t[n], null == e[n] && (e[n] = i);
            return e
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e.prototype.createEvent = function(e, t, n, i) {
            var r;
            return null == t && (t = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, t, n, i)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = e) : r.eventName = e, r
        }, e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        }, e.prototype.addEvent = function(e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        }, e.prototype.removeEvent = function(e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
        }, e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
            var t, n, i, r, o;
            for (o = this.keys, t = i = 0, r = o.length; r > i; t = ++i)
                if (n = o[t], n === e) return this.values[t]
        }, e.prototype.set = function(e, t) {
            var n, i, r, o, a;
            for (a = this.keys, n = r = 0, o = a.length; o > r; n = ++r)
                if (i = a[n], i === e) return void(this.values[n] = t);
            return this.keys.push(e), this.values.push(t)
        }, e
    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), i = this.getComputedStyle || function(e) {
        return this.getPropertyValue = function(t) {
            var n;
            return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
                return t.toUpperCase()
            }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
        }, this
    }, r = /(\-([a-z]){1})/g, this.WOW = function() {
        function r(e) {
            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, r.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, r.prototype.start = function() {
            var t, n, i, r;
            if (this.stopped = !1, this.boxes = function() {
                    var e, n, i, r;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(t);
                    return r
                }.call(this), this.all = function() {
                    var e, n, i, r;
                    for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(t);
                    return r
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (r = this.boxes, n = 0, i = r.length; i > n; n++) t = r[n], this.applyStyle(t, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
                return function(t) {
                    var n, i, r, o, a;
                    for (a = [], n = 0, i = t.length; i > n; n++) o = t[n], a.push(function() {
                        var e, t, n, i;
                        for (n = o.addedNodes || [], i = [], e = 0, t = n.length; t > e; e++) r = n[e], i.push(this.doSync(r));
                        return i
                    }.call(e));
                    return a
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, r.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, r.prototype.sync = function() {
            return e.notSupported ? this.doSync(this.element) : void 0
        }, r.prototype.doSync = function(e) {
            var t, n, i, r, o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (e = e.parentNode || e, r = e.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; i > n; n++) t = r[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, r.prototype.show = function(e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
        }, r.prototype.applyStyle = function(e, t) {
            var n, i, r;
            return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
                return function() {
                    return o.customStyle(e, t, i, n, r)
                }
            }(this))
        }, r.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(e) {
                return window.requestAnimationFrame(e)
            } : function(e) {
                return e()
            }
        }(), r.prototype.resetStyle = function() {
            var e, t, n, i, r;
            for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.style.visibility = "visible");
            return r
        }, r.prototype.resetAnimation = function(e) {
            var t;
            return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement, t.className = t.className.replace(this.config.animateClass, "").trim()) : void 0
        }, r.prototype.customStyle = function(e, t, n, i, r) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                animationDuration: n
            }), i && this.vendorSet(e.style, {
                animationDelay: i
            }), r && this.vendorSet(e.style, {
                animationIterationCount: r
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e
        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
            var n, i, r, o;
            i = [];
            for (n in t) r = t[n], e["" + n] = r, i.push(function() {
                var t, i, a, s;
                for (a = this.vendors, s = [], t = 0, i = a.length; i > t; t++) o = a[t], s.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                return s
            }.call(this));
            return i
        }, r.prototype.vendorCSS = function(e, t) {
            var n, r, o, a, s, l;
            for (s = i(e), a = s.getPropertyCSSValue(t), o = this.vendors, n = 0, r = o.length; r > n; n++) l = o[n], a = a || s.getPropertyCSSValue("-" + l + "-" + t);
            return a
        }, r.prototype.animationName = function(e) {
            var t;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (n) {
                t = i(e).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }, r.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, r.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }, r.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, r.prototype.scrollCallback = function() {
            var e;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var t, n, i, r;
                for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++) e = i[t], e && (this.isVisible(e) ? this.show(e) : r.push(e));
                return r
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, r.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        }, r.prototype.isVisible = function(e) {
            var t, n, i, r, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, r >= i && t >= o
        }, r.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }, r.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, r
    }()
}).call(this), ! function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t[e] = n()
    }("jquery-scrollto", this, function() {
        var e, t, n;
        return e = t = window.jQuery || require("jquery"), t.propHooks.scrollTop = t.propHooks.scrollLeft = {
            get: function(e, t) {
                var n = null;
                return ("HTML" === e.tagName || "BODY" === e.tagName) && ("scrollLeft" === t ? n = window.scrollX : "scrollTop" === t && (n = window.scrollY)), null == n && (n = e[t]), n
            }
        }, t.Tween.propHooks.scrollTop = t.Tween.propHooks.scrollLeft = {
            get: function(e) {
                return t.propHooks.scrollTop.get(e.elem, e.prop)
            },
            set: function(e) {
                "HTML" === e.elem.tagName || "BODY" === e.elem.tagName ? (e.options.bodyScrollLeft = e.options.bodyScrollLeft || window.scrollX, e.options.bodyScrollTop = e.options.bodyScrollTop || window.scrollY, "scrollLeft" === e.prop ? e.options.bodyScrollLeft = Math.round(e.now) : "scrollTop" === e.prop && (e.options.bodyScrollTop = Math.round(e.now)), window.scrollTo(e.options.bodyScrollLeft, e.options.bodyScrollTop)) : e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, n = {
            config: {
                duration: 400,
                easing: "swing",
                callback: void 0,
                durationMode: "each",
                offsetTop: 0,
                offsetLeft: 0
            },
            configure: function(e) {
                return t.extend(n.config, e || {}), this
            },
            scroll: function(e, i) {
                var r, o, a, s, l, c, u, d, p, h, f, m, g, v, y, b, w, _;
                return r = e.pop(), o = r.$container, a = r.$target, c = o.prop("tagName"), s = t("<span/>").css({
                    position: "absolute",
                    top: "0px",
                    left: "0px"
                }), l = o.css("position"), o.css({
                    position: "relative"
                }), s.appendTo(o), f = s.offset().top, m = a.offset().top, g = m - f - parseInt(i.offsetTop, 10), v = s.offset().left, y = a.offset().left, b = y - v - parseInt(i.offsetLeft, 10), u = o.prop("scrollTop"), d = o.prop("scrollLeft"), s.remove(), o.css({
                    position: l
                }), w = {}, _ = function(t) {
                    return 0 === e.length ? "function" == typeof i.callback && i.callback() : n.scroll(e, i), !0
                }, i.onlyIfOutside && (p = u + o.height(), h = d + o.width(), g > u && p > g && (g = u), b > d && h > b && (b = d)), g !== u && (w.scrollTop = g), b !== d && (w.scrollLeft = b), o.prop("scrollHeight") === o.width() && delete w.scrollTop, o.prop("scrollWidth") === o.width() && delete w.scrollLeft, null != w.scrollTop || null != w.scrollLeft ? o.animate(w, {
                    duration: i.duration,
                    easing: i.easing,
                    complete: _
                }) : _(), !0
            },
            fn: function(e) {
                var i, r, o, a;
                i = [];
                var s = t(this);
                if (0 === s.length) return this;
                for (r = t.extend({}, n.config, e), o = s.parent(), a = o.get(0); 1 === o.length && a !== document.body && a !== document;) {
                    var l, c;
                    l = "visible" !== o.css("overflow-y") && a.scrollHeight !== a.clientHeight, c = "visible" !== o.css("overflow-x") && a.scrollWidth !== a.clientWidth, (l || c) && (i.push({
                        $container: o,
                        $target: s
                    }), s = o), o = o.parent(), a = o.get(0)
                }
                return i.push({
                    $container: t("html"),
                    $target: s
                }), "all" === r.durationMode && (r.duration /= i.length), n.scroll(i, r), this
            }
        }, t.ScrollTo = t.ScrollTo || n, t.fn.ScrollTo = t.fn.ScrollTo || n.fn, n
    }),
    /*!

     handlebars v4.0.5

    Copyright (C) 2011-2015 by Yehuda Katz

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

    @license
    */
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Handlebars = t() : e.Handlebars = t()
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function(e, t, n) {
            "use strict";

            function i() {
                var e = v();
                return e.compile = function(t, n) {
                    return u.compile(t, n, e)
                }, e.precompile = function(t, n) {
                    return u.precompile(t, n, e)
                }, e.AST = l["default"], e.Compiler = u.Compiler, e.JavaScriptCompiler = p["default"], e.Parser = c.parser, e.parse = c.parse, e
            }
            var r = n(1)["default"];
            t.__esModule = !0;
            var o = n(2),
                a = r(o),
                s = n(21),
                l = r(s),
                c = n(22),
                u = n(27),
                d = n(28),
                p = r(d),
                h = n(25),
                f = r(h),
                m = n(20),
                g = r(m),
                v = a["default"].create,
                y = i();
            y.create = i, g["default"](y), y.Visitor = f["default"], y["default"] = y, t["default"] = y, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            t["default"] = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }, t.__esModule = !0
        }, function(e, t, n) {
            "use strict";

            function i() {
                var e = new s.HandlebarsEnvironment;
                return h.extend(e, s), e.SafeString = c["default"], e.Exception = d["default"], e.Utils = h, e.escapeExpression = h.escapeExpression, e.VM = m, e.template = function(t) {
                    return m.template(t, e)
                }, e
            }
            var r = n(3)["default"],
                o = n(1)["default"];
            t.__esModule = !0;
            var a = n(4),
                s = r(a),
                l = n(18),
                c = o(l),
                u = n(6),
                d = o(u),
                p = n(5),
                h = r(p),
                f = n(19),
                m = r(f),
                g = n(20),
                v = o(g),
                y = i();
            y.create = i, v["default"](y), y["default"] = y, t["default"] = y, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            t["default"] = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t["default"] = e, t
            }, t.__esModule = !0
        }, function(e, t, n) {
            "use strict";

            function i(e, t, n) {
                this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, l.registerDefaultHelpers(this), c.registerDefaultDecorators(this)
            }
            var r = n(1)["default"];
            t.__esModule = !0, t.HandlebarsEnvironment = i;
            var o = n(5),
                a = n(6),
                s = r(a),
                l = n(7),
                c = n(15),
                u = n(17),
                d = r(u),
                p = "4.0.5";
            t.VERSION = p;
            var h = 7;
            t.COMPILER_REVISION = h;
            var f = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0"
            };
            t.REVISION_CHANGES = f;
            var m = "[object Object]";
            i.prototype = {
                constructor: i,
                logger: d["default"],
                log: d["default"].log,
                registerHelper: function(e, t) {
                    if (o.toString.call(e) === m) {
                        if (t) throw new s["default"]("Arg not supported with multiple helpers");
                        o.extend(this.helpers, e)
                    } else this.helpers[e] = t
                },
                unregisterHelper: function(e) {
                    delete this.helpers[e]
                },
                registerPartial: function(e, t) {
                    if (o.toString.call(e) === m) o.extend(this.partials, e);
                    else {
                        if ("undefined" == typeof t) throw new s["default"]('Attempting to register a partial called "' + e + '" as undefined');
                        this.partials[e] = t
                    }
                },
                unregisterPartial: function(e) {
                    delete this.partials[e]
                },
                registerDecorator: function(e, t) {
                    if (o.toString.call(e) === m) {
                        if (t) throw new s["default"]("Arg not supported with multiple decorators");
                        o.extend(this.decorators, e)
                    } else this.decorators[e] = t
                },
                unregisterDecorator: function(e) {
                    delete this.decorators[e]
                }
            };
            var g = d["default"].log;
            t.log = g, t.createFrame = o.createFrame, t.logger = d["default"]
        }, function(e, t) {
            "use strict";

            function n(e) {
                return u[e]
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++)
                    for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
                return e
            }

            function r(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            }

            function o(e) {
                if ("string" != typeof e) {
                    if (e && e.toHTML) return e.toHTML();
                    if (null == e) return "";
                    if (!e) return e + "";
                    e = "" + e
                }
                return p.test(e) ? e.replace(d, n) : e
            }

            function a(e) {
                return e || 0 === e ? m(e) && 0 === e.length ? !0 : !1 : !0
            }

            function s(e) {
                var t = i({}, e);
                return t._parent = e, t
            }

            function l(e, t) {
                return e.path = t, e
            }

            function c(e, t) {
                return (e ? e + "." : "") + t
            }
            t.__esModule = !0, t.extend = i, t.indexOf = r, t.escapeExpression = o, t.isEmpty = a, t.createFrame = s, t.blockParams = l, t.appendContextPath = c;
            var u = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                d = /[&<>"'`=]/g,
                p = /[&<>"'`=]/,
                h = Object.prototype.toString;
            t.toString = h;
            var f = function(e) {
                return "function" == typeof e
            };
            f(/x/) && (t.isFunction = f = function(e) {
                return "function" == typeof e && "[object Function]" === h.call(e)
            }), t.isFunction = f;
            var m = Array.isArray || function(e) {
                return e && "object" == typeof e ? "[object Array]" === h.call(e) : !1
            };
            t.isArray = m
        }, function(e, t) {
            "use strict";

            function n(e, t) {
                var r = t && t.loc,
                    o = void 0,
                    a = void 0;
                r && (o = r.start.line, a = r.start.column, e += " - " + o + ":" + a);
                for (var s = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++) this[i[l]] = s[i[l]];
                Error.captureStackTrace && Error.captureStackTrace(this, n), r && (this.lineNumber = o, this.column = a)
            }
            t.__esModule = !0;
            var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            n.prototype = new Error, t["default"] = n, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                a["default"](e), l["default"](e), u["default"](e), p["default"](e), f["default"](e), g["default"](e), y["default"](e)
            }
            var r = n(1)["default"];
            t.__esModule = !0, t.registerDefaultHelpers = i;
            var o = n(8),
                a = r(o),
                s = n(9),
                l = r(s),
                c = n(10),
                u = r(c),
                d = n(11),
                p = r(d),
                h = n(12),
                f = r(h),
                m = n(13),
                g = r(m),
                v = n(14),
                y = r(v)
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var i = n(5);
            t["default"] = function(e) {
                e.registerHelper("blockHelperMissing", function(t, n) {
                    var r = n.inverse,
                        o = n.fn;
                    if (t === !0) return o(this);
                    if (t === !1 || null == t) return r(this);
                    if (i.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this);
                    if (n.data && n.ids) {
                        var a = i.createFrame(n.data);
                        a.contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {
                            data: a
                        }
                    }
                    return o(t, n)
                })
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            var i = n(1)["default"];
            t.__esModule = !0;
            var r = n(5),
                o = n(6),
                a = i(o);
            t["default"] = function(e) {
                e.registerHelper("each", function(e, t) {
                    function n(t, n, o) {
                        c && (c.key = t, c.index = n, c.first = 0 === n, c.last = !!o, u && (c.contextPath = u + t)), l += i(e[t], {
                            data: c,
                            blockParams: r.blockParams([e[t], t], [u + t, null])
                        })
                    }
                    if (!t) throw new a["default"]("Must pass iterator to #each");
                    var i = t.fn,
                        o = t.inverse,
                        s = 0,
                        l = "",
                        c = void 0,
                        u = void 0;
                    if (t.data && t.ids && (u = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), r.isFunction(e) && (e = e.call(this)), t.data && (c = r.createFrame(t.data)), e && "object" == typeof e)
                        if (r.isArray(e))
                            for (var d = e.length; d > s; s++) s in e && n(s, s, s === e.length - 1);
                        else {
                            var p = void 0;
                            for (var h in e) e.hasOwnProperty(h) && (void 0 !== p && n(p, s - 1), p = h, s++);
                            void 0 !== p && n(p, s - 1, !0)
                        }
                    return 0 === s && (l = o(this)), l
                })
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            var i = n(1)["default"];
            t.__esModule = !0;
            var r = n(6),
                o = i(r);
            t["default"] = function(e) {
                e.registerHelper("helperMissing", function() {
                    if (1 === arguments.length) return void 0;
                    throw new o["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                })
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var i = n(5);
            t["default"] = function(e) {
                e.registerHelper("if", function(e, t) {
                    return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
                }), e.registerHelper("unless", function(t, n) {
                    return e.helpers["if"].call(this, t, {
                        fn: n.inverse,
                        inverse: n.fn,
                        hash: n.hash
                    })
                })
            }, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            t.__esModule = !0, t["default"] = function(e) {
                e.registerHelper("log", function() {
                    for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
                    var r = 1;
                    null != n.hash.level ? r = n.hash.level : n.data && null != n.data.level && (r = n.data.level), t[0] = r, e.log.apply(e, t)
                })
            }, e.exports = t["default"]
        }, function(e, t) {
            "use strict";
            t.__esModule = !0, t["default"] = function(e) {
                e.registerHelper("lookup", function(e, t) {
                    return e && e[t]
                })
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var i = n(5);
            t["default"] = function(e) {
                e.registerHelper("with", function(e, t) {
                    i.isFunction(e) && (e = e.call(this));
                    var n = t.fn;
                    if (i.isEmpty(e)) return t.inverse(this);
                    var r = t.data;
                    return t.data && t.ids && (r = i.createFrame(t.data), r.contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                        data: r,
                        blockParams: i.blockParams([e], [r && r.contextPath])
                    })
                })
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                a["default"](e)
            }
            var r = n(1)["default"];
            t.__esModule = !0, t.registerDefaultDecorators = i;
            var o = n(16),
                a = r(o)
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var i = n(5);
            t["default"] = function(e) {
                e.registerDecorator("inline", function(e, t, n, r) {
                    var o = e;
                    return t.partials || (t.partials = {}, o = function(r, o) {
                        var a = n.partials;
                        n.partials = i.extend({}, a, t.partials);
                        var s = e(r, o);
                        return n.partials = a, s
                    }), t.partials[r.args[0]] = r.fn, o
                })
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var i = n(5),
                r = {
                    methodMap: ["debug", "info", "warn", "error"],
                    level: "info",
                    lookupLevel: function(e) {
                        if ("string" == typeof e) {
                            var t = i.indexOf(r.methodMap, e.toLowerCase());
                            e = t >= 0 ? t : parseInt(e, 10)
                        }
                        return e
                    },
                    log: function(e) {
                        if (e = r.lookupLevel(e), "undefined" != typeof console && r.lookupLevel(r.level) <= e) {
                            var t = r.methodMap[e];
                            console[t] || (t = "log");
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; n > o; o++) i[o - 1] = arguments[o];
                            console[t].apply(console, i)
                        }
                    }
                };
            t["default"] = r, e.exports = t["default"]
        }, function(e, t) {
            "use strict";

            function n(e) {
                this.string = e
            }
            t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function() {
                return "" + this.string
            }, t["default"] = n, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                var t = e && e[0] || 1,
                    n = v.COMPILER_REVISION;
                if (t !== n) {
                    if (n > t) {
                        var i = v.REVISION_CHANGES[n],
                            r = v.REVISION_CHANGES[t];
                        throw new g["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + r + ").")
                    }
                    throw new g["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                }
            }

            function r(e, t) {
                function n(n, i, r) {
                    r.hash && (i = f.extend({}, i, r.hash), r.ids && (r.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, r);
                    var o = t.VM.invokePartial.call(this, n, i, r);
                    if (null == o && t.compile && (r.partials[r.name] = t.compile(n, e.compilerOptions, t), o = r.partials[r.name](i, r)), null != o) {
                        if (r.indent) {
                            for (var a = o.split("\n"), s = 0, l = a.length; l > s && (a[s] || s + 1 !== l); s++) a[s] = r.indent + a[s];
                            o = a.join("\n")
                        }
                        return o
                    }
                    throw new g["default"]("The partial " + r.name + " could not be compiled when running in runtime-only mode")
                }

                function i(t) {
                    function n(t) {
                        return "" + e.main(r, t, r.helpers, r.partials, a, l, s)
                    }
                    var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        a = o.data;
                    i._setup(o), !o.partial && e.useData && (a = c(t, a));
                    var s = void 0,
                        l = e.useBlockParams ? [] : void 0;
                    return e.useDepths && (s = o.depths ? t !== o.depths[0] ? [t].concat(o.depths) : o.depths : [t]), (n = u(e.main, n, r, o.depths || [], a, l))(t, o)
                }
                if (!t) throw new g["default"]("No environment passed to template");
                if (!e || !e.main) throw new g["default"]("Unknown template object: " + typeof e);
                e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
                var r = {
                    strict: function(e, t) {
                        if (!(t in e)) throw new g["default"]('"' + t + '" not defined in ' + e);
                        return e[t]
                    },
                    lookup: function(e, t) {
                        for (var n = e.length, i = 0; n > i; i++)
                            if (e[i] && null != e[i][t]) return e[i][t]
                    },
                    lambda: function(e, t) {
                        return "function" == typeof e ? e.call(t) : e
                    },
                    escapeExpression: f.escapeExpression,
                    invokePartial: n,
                    fn: function(t) {
                        var n = e[t];
                        return n.decorator = e[t + "_d"], n
                    },
                    programs: [],
                    program: function(e, t, n, i, r) {
                        var a = this.programs[e],
                            s = this.fn(e);
                        return t || r || i || n ? a = o(this, e, s, t, n, i, r) : a || (a = this.programs[e] = o(this, e, s)), a
                    },
                    data: function(e, t) {
                        for (; e && t--;) e = e._parent;
                        return e
                    },
                    merge: function(e, t) {
                        var n = e || t;
                        return e && t && e !== t && (n = f.extend({}, t, e)), n
                    },
                    noop: t.VM.noop,
                    compilerInfo: e.compiler
                };
                return i.isTop = !0, i._setup = function(n) {
                    n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (r.decorators = r.merge(n.decorators, t.decorators)))
                }, i._child = function(t, n, i, a) {
                    if (e.useBlockParams && !i) throw new g["default"]("must pass block params");
                    if (e.useDepths && !a) throw new g["default"]("must pass parent depths");
                    return o(r, t, e[t], n, 0, i, a)
                }, i
            }

            function o(e, t, n, i, r, o, a) {
                function s(t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        s = a;
                    return a && t !== a[0] && (s = [t].concat(a)), n(e, t, e.helpers, e.partials, r.data || i, o && [r.blockParams].concat(o), s)
                }
                return s = u(n, s, e, a, i, o), s.program = t, s.depth = a ? a.length : 0, s.blockParams = r || 0, s
            }

            function a(e, t, n) {
                return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
            }

            function s(e, t, n) {
                n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
                var i = void 0;
                if (n.fn && n.fn !== l && (n.data = v.createFrame(n.data), i = n.data["partial-block"] = n.fn, i.partials && (n.partials = f.extend({}, n.partials, i.partials))), void 0 === e && i && (e = i), void 0 === e) throw new g["default"]("The partial " + n.name + " could not be found");
                return e instanceof Function ? e(t, n) : void 0
            }

            function l() {
                return ""
            }

            function c(e, t) {
                return t && "root" in t || (t = t ? v.createFrame(t) : {}, t.root = e), t
            }

            function u(e, t, n, i, r, o) {
                if (e.decorator) {
                    var a = {};
                    t = e.decorator(t, a, n, i && i[0], r, o, i), f.extend(t, a)
                }
                return t
            }
            var d = n(3)["default"],
                p = n(1)["default"];
            t.__esModule = !0, t.checkRevision = i, t.template = r, t.wrapProgram = o, t.resolvePartial = a, t.invokePartial = s, t.noop = l;
            var h = n(5),
                f = d(h),
                m = n(6),
                g = p(m),
                v = n(4)
        }, function(e, t) {
            (function(n) {
                "use strict";
                t.__esModule = !0, t["default"] = function(e) {
                    var t = "undefined" != typeof n ? n : window,
                        i = t.Handlebars;
                    e.noConflict = function() {
                        return t.Handlebars === e && (t.Handlebars = i), e
                    }
                }, e.exports = t["default"]
            }).call(t, function() {
                return this
            }())
        }, function(e, t) {
            "use strict";
            t.__esModule = !0;
            var n = {
                helpers: {
                    helperExpression: function(e) {
                        return "SubExpression" === e.type || ("MustacheStatement" === e.type || "BlockStatement" === e.type) && !!(e.params && e.params.length || e.hash)
                    },
                    scopedId: function(e) {
                        return /^\.|this\b/.test(e.original)
                    },
                    simpleId: function(e) {
                        return 1 === e.parts.length && !n.helpers.scopedId(e) && !e.depth
                    }
                }
            };
            t["default"] = n, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if ("Program" === e.type) return e;
                s["default"].yy = h, h.locInfo = function(e) {
                    return new h.SourceLocation(t && t.srcName, e)
                };
                var n = new c["default"](t);
                return n.accept(s["default"].parse(e))
            }
            var r = n(1)["default"],
                o = n(3)["default"];
            t.__esModule = !0, t.parse = i;
            var a = n(23),
                s = r(a),
                l = n(24),
                c = r(l),
                u = n(26),
                d = o(u),
                p = n(5);
            t.parser = s["default"];
            var h = {};
            p.extend(h, d)
        }, function(e, t) {
            "use strict";
            var n = function() {
                function e() {
                    this.yy = {}
                }
                var t = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            root: 3,
                            program: 4,
                            EOF: 5,
                            program_repetition0: 6,
                            statement: 7,
                            mustache: 8,
                            block: 9,
                            rawBlock: 10,
                            partial: 11,
                            partialBlock: 12,
                            content: 13,
                            COMMENT: 14,
                            CONTENT: 15,
                            openRawBlock: 16,
                            rawBlock_repetition_plus0: 17,
                            END_RAW_BLOCK: 18,
                            OPEN_RAW_BLOCK: 19,
                            helperName: 20,
                            openRawBlock_repetition0: 21,
                            openRawBlock_option0: 22,
                            CLOSE_RAW_BLOCK: 23,
                            openBlock: 24,
                            block_option0: 25,
                            closeBlock: 26,
                            openInverse: 27,
                            block_option1: 28,
                            OPEN_BLOCK: 29,
                            openBlock_repetition0: 30,
                            openBlock_option0: 31,
                            openBlock_option1: 32,
                            CLOSE: 33,
                            OPEN_INVERSE: 34,
                            openInverse_repetition0: 35,
                            openInverse_option0: 36,
                            openInverse_option1: 37,
                            openInverseChain: 38,
                            OPEN_INVERSE_CHAIN: 39,
                            openInverseChain_repetition0: 40,
                            openInverseChain_option0: 41,
                            openInverseChain_option1: 42,
                            inverseAndProgram: 43,
                            INVERSE: 44,
                            inverseChain: 45,
                            inverseChain_option0: 46,
                            OPEN_ENDBLOCK: 47,
                            OPEN: 48,
                            mustache_repetition0: 49,
                            mustache_option0: 50,
                            OPEN_UNESCAPED: 51,
                            mustache_repetition1: 52,
                            mustache_option1: 53,
                            CLOSE_UNESCAPED: 54,
                            OPEN_PARTIAL: 55,
                            partialName: 56,
                            partial_repetition0: 57,
                            partial_option0: 58,
                            openPartialBlock: 59,
                            OPEN_PARTIAL_BLOCK: 60,
                            openPartialBlock_repetition0: 61,
                            openPartialBlock_option0: 62,
                            param: 63,
                            sexpr: 64,
                            OPEN_SEXPR: 65,
                            sexpr_repetition0: 66,
                            sexpr_option0: 67,
                            CLOSE_SEXPR: 68,
                            hash: 69,
                            hash_repetition_plus0: 70,
                            hashSegment: 71,
                            ID: 72,
                            EQUALS: 73,
                            blockParams: 74,
                            OPEN_BLOCK_PARAMS: 75,
                            blockParams_repetition_plus0: 76,
                            CLOSE_BLOCK_PARAMS: 77,
                            path: 78,
                            dataName: 79,
                            STRING: 80,
                            NUMBER: 81,
                            BOOLEAN: 82,
                            UNDEFINED: 83,
                            NULL: 84,
                            DATA: 85,
                            pathSegments: 86,
                            SEP: 87,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            5: "EOF",
                            14: "COMMENT",
                            15: "CONTENT",
                            18: "END_RAW_BLOCK",
                            19: "OPEN_RAW_BLOCK",
                            23: "CLOSE_RAW_BLOCK",
                            29: "OPEN_BLOCK",
                            33: "CLOSE",
                            34: "OPEN_INVERSE",
                            39: "OPEN_INVERSE_CHAIN",
                            44: "INVERSE",
                            47: "OPEN_ENDBLOCK",
                            48: "OPEN",
                            51: "OPEN_UNESCAPED",
                            54: "CLOSE_UNESCAPED",
                            55: "OPEN_PARTIAL",
                            60: "OPEN_PARTIAL_BLOCK",
                            65: "OPEN_SEXPR",
                            68: "CLOSE_SEXPR",
                            72: "ID",
                            73: "EQUALS",
                            75: "OPEN_BLOCK_PARAMS",
                            77: "CLOSE_BLOCK_PARAMS",
                            80: "STRING",
                            81: "NUMBER",
                            82: "BOOLEAN",
                            83: "UNDEFINED",
                            84: "NULL",
                            85: "DATA",
                            87: "SEP"
                        },
                        productions_: [0, [3, 2],
                            [4, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [7, 1],
                            [13, 1],
                            [10, 3],
                            [16, 5],
                            [9, 4],
                            [9, 4],
                            [24, 6],
                            [27, 6],
                            [38, 6],
                            [43, 2],
                            [45, 3],
                            [45, 1],
                            [26, 3],
                            [8, 5],
                            [8, 5],
                            [11, 5],
                            [12, 3],
                            [59, 5],
                            [63, 1],
                            [63, 1],
                            [64, 5],
                            [69, 1],
                            [71, 3],
                            [74, 3],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [20, 1],
                            [56, 1],
                            [56, 1],
                            [79, 2],
                            [78, 1],
                            [86, 3],
                            [86, 1],
                            [6, 0],
                            [6, 2],
                            [17, 1],
                            [17, 2],
                            [21, 0],
                            [21, 2],
                            [22, 0],
                            [22, 1],
                            [25, 0],
                            [25, 1],
                            [28, 0],
                            [28, 1],
                            [30, 0],
                            [30, 2],
                            [31, 0],
                            [31, 1],
                            [32, 0],
                            [32, 1],
                            [35, 0],
                            [35, 2],
                            [36, 0],
                            [36, 1],
                            [37, 0],
                            [37, 1],
                            [40, 0],
                            [40, 2],
                            [41, 0],
                            [41, 1],
                            [42, 0],
                            [42, 1],
                            [46, 0],
                            [46, 1],
                            [49, 0],
                            [49, 2],
                            [50, 0],
                            [50, 1],
                            [52, 0],
                            [52, 2],
                            [53, 0],
                            [53, 1],
                            [57, 0],
                            [57, 2],
                            [58, 0],
                            [58, 1],
                            [61, 0],
                            [61, 2],
                            [62, 0],
                            [62, 1],
                            [66, 0],
                            [66, 2],
                            [67, 0],
                            [67, 1],
                            [70, 1],
                            [70, 2],
                            [76, 1],
                            [76, 2]
                        ],
                        performAction: function(e, t, n, i, r, o, a) {
                            var s = o.length - 1;
                            switch (r) {
                                case 1:
                                    return o[s - 1];
                                case 2:
                                    this.$ = i.prepareProgram(o[s]);
                                    break;
                                case 3:
                                    this.$ = o[s];
                                    break;
                                case 4:
                                    this.$ = o[s];
                                    break;
                                case 5:
                                    this.$ = o[s];
                                    break;
                                case 6:
                                    this.$ = o[s];
                                    break;
                                case 7:
                                    this.$ = o[s];
                                    break;
                                case 8:
                                    this.$ = o[s];
                                    break;
                                case 9:
                                    this.$ = {
                                        type: "CommentStatement",
                                        value: i.stripComment(o[s]),
                                        strip: i.stripFlags(o[s], o[s]),
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 10:
                                    this.$ = {
                                        type: "ContentStatement",
                                        original: o[s],
                                        value: o[s],
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 11:
                                    this.$ = i.prepareRawBlock(o[s - 2], o[s - 1], o[s], this._$);
                                    break;
                                case 12:
                                    this.$ = {
                                        path: o[s - 3],
                                        params: o[s - 2],
                                        hash: o[s - 1]
                                    };
                                    break;
                                case 13:
                                    this.$ = i.prepareBlock(o[s - 3], o[s - 2], o[s - 1], o[s], !1, this._$);
                                    break;
                                case 14:
                                    this.$ = i.prepareBlock(o[s - 3], o[s - 2], o[s - 1], o[s], !0, this._$);
                                    break;
                                case 15:
                                    this.$ = {
                                        open: o[s - 5],
                                        path: o[s - 4],
                                        params: o[s - 3],
                                        hash: o[s - 2],
                                        blockParams: o[s - 1],
                                        strip: i.stripFlags(o[s - 5], o[s])
                                    };
                                    break;
                                case 16:
                                    this.$ = {
                                        path: o[s - 4],
                                        params: o[s - 3],
                                        hash: o[s - 2],
                                        blockParams: o[s - 1],
                                        strip: i.stripFlags(o[s - 5], o[s])
                                    };
                                    break;
                                case 17:
                                    this.$ = {
                                        path: o[s - 4],
                                        params: o[s - 3],
                                        hash: o[s - 2],
                                        blockParams: o[s - 1],
                                        strip: i.stripFlags(o[s - 5], o[s])
                                    };
                                    break;
                                case 18:
                                    this.$ = {
                                        strip: i.stripFlags(o[s - 1], o[s - 1]),
                                        program: o[s]
                                    };
                                    break;
                                case 19:
                                    var l = i.prepareBlock(o[s - 2], o[s - 1], o[s], o[s], !1, this._$),
                                        c = i.prepareProgram([l], o[s - 1].loc);
                                    c.chained = !0, this.$ = {
                                        strip: o[s - 2].strip,
                                        program: c,
                                        chain: !0
                                    };
                                    break;
                                case 20:
                                    this.$ = o[s];
                                    break;
                                case 21:
                                    this.$ = {
                                        path: o[s - 1],
                                        strip: i.stripFlags(o[s - 2], o[s])
                                    };
                                    break;
                                case 22:
                                    this.$ = i.prepareMustache(o[s - 3], o[s - 2], o[s - 1], o[s - 4], i.stripFlags(o[s - 4], o[s]), this._$);
                                    break;
                                case 23:
                                    this.$ = i.prepareMustache(o[s - 3], o[s - 2], o[s - 1], o[s - 4], i.stripFlags(o[s - 4], o[s]), this._$);
                                    break;
                                case 24:
                                    this.$ = {
                                        type: "PartialStatement",
                                        name: o[s - 3],
                                        params: o[s - 2],
                                        hash: o[s - 1],
                                        indent: "",
                                        strip: i.stripFlags(o[s - 4], o[s]),
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 25:
                                    this.$ = i.preparePartialBlock(o[s - 2], o[s - 1], o[s], this._$);
                                    break;
                                case 26:
                                    this.$ = {
                                        path: o[s - 3],
                                        params: o[s - 2],
                                        hash: o[s - 1],
                                        strip: i.stripFlags(o[s - 4], o[s])
                                    };
                                    break;
                                case 27:
                                    this.$ = o[s];
                                    break;
                                case 28:
                                    this.$ = o[s];
                                    break;
                                case 29:
                                    this.$ = {
                                        type: "SubExpression",
                                        path: o[s - 3],
                                        params: o[s - 2],
                                        hash: o[s - 1],
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 30:
                                    this.$ = {
                                        type: "Hash",
                                        pairs: o[s],
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 31:
                                    this.$ = {
                                        type: "HashPair",
                                        key: i.id(o[s - 2]),
                                        value: o[s],
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 32:
                                    this.$ = i.id(o[s - 1]);
                                    break;
                                case 33:
                                    this.$ = o[s];
                                    break;
                                case 34:
                                    this.$ = o[s];
                                    break;
                                case 35:
                                    this.$ = {
                                        type: "StringLiteral",
                                        value: o[s],
                                        original: o[s],
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 36:
                                    this.$ = {
                                        type: "NumberLiteral",
                                        value: Number(o[s]),
                                        original: Number(o[s]),
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 37:
                                    this.$ = {
                                        type: "BooleanLiteral",
                                        value: "true" === o[s],
                                        original: "true" === o[s],
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 38:
                                    this.$ = {
                                        type: "UndefinedLiteral",
                                        original: void 0,
                                        value: void 0,
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 39:
                                    this.$ = {
                                        type: "NullLiteral",
                                        original: null,
                                        value: null,
                                        loc: i.locInfo(this._$)
                                    };
                                    break;
                                case 40:
                                    this.$ = o[s];
                                    break;
                                case 41:
                                    this.$ = o[s];
                                    break;
                                case 42:
                                    this.$ = i.preparePath(!0, o[s], this._$);
                                    break;
                                case 43:
                                    this.$ = i.preparePath(!1, o[s], this._$);
                                    break;
                                case 44:
                                    o[s - 2].push({
                                        part: i.id(o[s]),
                                        original: o[s],
                                        separator: o[s - 1]
                                    }), this.$ = o[s - 2];
                                    break;
                                case 45:
                                    this.$ = [{
                                        part: i.id(o[s]),
                                        original: o[s]
                                    }];
                                    break;
                                case 46:
                                    this.$ = [];
                                    break;
                                case 47:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 48:
                                    this.$ = [o[s]];
                                    break;
                                case 49:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 50:
                                    this.$ = [];
                                    break;
                                case 51:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 58:
                                    this.$ = [];
                                    break;
                                case 59:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 64:
                                    this.$ = [];
                                    break;
                                case 65:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 70:
                                    this.$ = [];
                                    break;
                                case 71:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 78:
                                    this.$ = [];
                                    break;
                                case 79:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 82:
                                    this.$ = [];
                                    break;
                                case 83:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 86:
                                    this.$ = [];
                                    break;
                                case 87:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 90:
                                    this.$ = [];
                                    break;
                                case 91:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 94:
                                    this.$ = [];
                                    break;
                                case 95:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 98:
                                    this.$ = [o[s]];
                                    break;
                                case 99:
                                    o[s - 1].push(o[s]);
                                    break;
                                case 100:
                                    this.$ = [o[s]];
                                    break;
                                case 101:
                                    o[s - 1].push(o[s])
                            }
                        },
                        table: [{
                            3: 1,
                            4: 2,
                            5: [2, 46],
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            1: [3]
                        }, {
                            5: [1, 4]
                        }, {
                            5: [2, 2],
                            7: 5,
                            8: 6,
                            9: 7,
                            10: 8,
                            11: 9,
                            12: 10,
                            13: 11,
                            14: [1, 12],
                            15: [1, 20],
                            16: 17,
                            19: [1, 23],
                            24: 15,
                            27: 16,
                            29: [1, 21],
                            34: [1, 22],
                            39: [2, 2],
                            44: [2, 2],
                            47: [2, 2],
                            48: [1, 13],
                            51: [1, 14],
                            55: [1, 18],
                            59: 19,
                            60: [1, 24]
                        }, {
                            1: [2, 1]
                        }, {
                            5: [2, 47],
                            14: [2, 47],
                            15: [2, 47],
                            19: [2, 47],
                            29: [2, 47],
                            34: [2, 47],
                            39: [2, 47],
                            44: [2, 47],
                            47: [2, 47],
                            48: [2, 47],
                            51: [2, 47],
                            55: [2, 47],
                            60: [2, 47]
                        }, {
                            5: [2, 3],
                            14: [2, 3],
                            15: [2, 3],
                            19: [2, 3],
                            29: [2, 3],
                            34: [2, 3],
                            39: [2, 3],
                            44: [2, 3],
                            47: [2, 3],
                            48: [2, 3],
                            51: [2, 3],
                            55: [2, 3],
                            60: [2, 3]
                        }, {
                            5: [2, 4],
                            14: [2, 4],
                            15: [2, 4],
                            19: [2, 4],
                            29: [2, 4],
                            34: [2, 4],
                            39: [2, 4],
                            44: [2, 4],
                            47: [2, 4],
                            48: [2, 4],
                            51: [2, 4],
                            55: [2, 4],
                            60: [2, 4]
                        }, {
                            5: [2, 5],
                            14: [2, 5],
                            15: [2, 5],
                            19: [2, 5],
                            29: [2, 5],
                            34: [2, 5],
                            39: [2, 5],
                            44: [2, 5],
                            47: [2, 5],
                            48: [2, 5],
                            51: [2, 5],
                            55: [2, 5],
                            60: [2, 5]
                        }, {
                            5: [2, 6],
                            14: [2, 6],
                            15: [2, 6],
                            19: [2, 6],
                            29: [2, 6],
                            34: [2, 6],
                            39: [2, 6],
                            44: [2, 6],
                            47: [2, 6],
                            48: [2, 6],
                            51: [2, 6],
                            55: [2, 6],
                            60: [2, 6]
                        }, {
                            5: [2, 7],
                            14: [2, 7],
                            15: [2, 7],
                            19: [2, 7],
                            29: [2, 7],
                            34: [2, 7],
                            39: [2, 7],
                            44: [2, 7],
                            47: [2, 7],
                            48: [2, 7],
                            51: [2, 7],
                            55: [2, 7],
                            60: [2, 7]
                        }, {
                            5: [2, 8],
                            14: [2, 8],
                            15: [2, 8],
                            19: [2, 8],
                            29: [2, 8],
                            34: [2, 8],
                            39: [2, 8],
                            44: [2, 8],
                            47: [2, 8],
                            48: [2, 8],
                            51: [2, 8],
                            55: [2, 8],
                            60: [2, 8]
                        }, {
                            5: [2, 9],
                            14: [2, 9],
                            15: [2, 9],
                            19: [2, 9],
                            29: [2, 9],
                            34: [2, 9],
                            39: [2, 9],
                            44: [2, 9],
                            47: [2, 9],
                            48: [2, 9],
                            51: [2, 9],
                            55: [2, 9],
                            60: [2, 9]
                        }, {
                            20: 25,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 36,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            4: 37,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            39: [2, 46],
                            44: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            4: 38,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            44: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            13: 40,
                            15: [1, 20],
                            17: 39
                        }, {
                            20: 42,
                            56: 41,
                            64: 43,
                            65: [1, 44],
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            4: 45,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            5: [2, 10],
                            14: [2, 10],
                            15: [2, 10],
                            18: [2, 10],
                            19: [2, 10],
                            29: [2, 10],
                            34: [2, 10],
                            39: [2, 10],
                            44: [2, 10],
                            47: [2, 10],
                            48: [2, 10],
                            51: [2, 10],
                            55: [2, 10],
                            60: [2, 10]
                        }, {
                            20: 46,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 47,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 48,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 42,
                            56: 49,
                            64: 43,
                            65: [1, 44],
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            33: [2, 78],
                            49: 50,
                            65: [2, 78],
                            72: [2, 78],
                            80: [2, 78],
                            81: [2, 78],
                            82: [2, 78],
                            83: [2, 78],
                            84: [2, 78],
                            85: [2, 78]
                        }, {
                            23: [2, 33],
                            33: [2, 33],
                            54: [2, 33],
                            65: [2, 33],
                            68: [2, 33],
                            72: [2, 33],
                            75: [2, 33],
                            80: [2, 33],
                            81: [2, 33],
                            82: [2, 33],
                            83: [2, 33],
                            84: [2, 33],
                            85: [2, 33]
                        }, {
                            23: [2, 34],
                            33: [2, 34],
                            54: [2, 34],
                            65: [2, 34],
                            68: [2, 34],
                            72: [2, 34],
                            75: [2, 34],
                            80: [2, 34],
                            81: [2, 34],
                            82: [2, 34],
                            83: [2, 34],
                            84: [2, 34],
                            85: [2, 34]
                        }, {
                            23: [2, 35],
                            33: [2, 35],
                            54: [2, 35],
                            65: [2, 35],
                            68: [2, 35],
                            72: [2, 35],
                            75: [2, 35],
                            80: [2, 35],
                            81: [2, 35],
                            82: [2, 35],
                            83: [2, 35],
                            84: [2, 35],
                            85: [2, 35]
                        }, {
                            23: [2, 36],
                            33: [2, 36],
                            54: [2, 36],
                            65: [2, 36],
                            68: [2, 36],
                            72: [2, 36],
                            75: [2, 36],
                            80: [2, 36],
                            81: [2, 36],
                            82: [2, 36],
                            83: [2, 36],
                            84: [2, 36],
                            85: [2, 36]
                        }, {
                            23: [2, 37],
                            33: [2, 37],
                            54: [2, 37],
                            65: [2, 37],
                            68: [2, 37],
                            72: [2, 37],
                            75: [2, 37],
                            80: [2, 37],
                            81: [2, 37],
                            82: [2, 37],
                            83: [2, 37],
                            84: [2, 37],
                            85: [2, 37]
                        }, {
                            23: [2, 38],
                            33: [2, 38],
                            54: [2, 38],
                            65: [2, 38],
                            68: [2, 38],
                            72: [2, 38],
                            75: [2, 38],
                            80: [2, 38],
                            81: [2, 38],
                            82: [2, 38],
                            83: [2, 38],
                            84: [2, 38],
                            85: [2, 38]
                        }, {
                            23: [2, 39],
                            33: [2, 39],
                            54: [2, 39],
                            65: [2, 39],
                            68: [2, 39],
                            72: [2, 39],
                            75: [2, 39],
                            80: [2, 39],
                            81: [2, 39],
                            82: [2, 39],
                            83: [2, 39],
                            84: [2, 39],
                            85: [2, 39]
                        }, {
                            23: [2, 43],
                            33: [2, 43],
                            54: [2, 43],
                            65: [2, 43],
                            68: [2, 43],
                            72: [2, 43],
                            75: [2, 43],
                            80: [2, 43],
                            81: [2, 43],
                            82: [2, 43],
                            83: [2, 43],
                            84: [2, 43],
                            85: [2, 43],
                            87: [1, 51]
                        }, {
                            72: [1, 35],
                            86: 52
                        }, {
                            23: [2, 45],
                            33: [2, 45],
                            54: [2, 45],
                            65: [2, 45],
                            68: [2, 45],
                            72: [2, 45],
                            75: [2, 45],
                            80: [2, 45],
                            81: [2, 45],
                            82: [2, 45],
                            83: [2, 45],
                            84: [2, 45],
                            85: [2, 45],
                            87: [2, 45]
                        }, {
                            52: 53,
                            54: [2, 82],
                            65: [2, 82],
                            72: [2, 82],
                            80: [2, 82],
                            81: [2, 82],
                            82: [2, 82],
                            83: [2, 82],
                            84: [2, 82],
                            85: [2, 82]
                        }, {
                            25: 54,
                            38: 56,
                            39: [1, 58],
                            43: 57,
                            44: [1, 59],
                            45: 55,
                            47: [2, 54]
                        }, {
                            28: 60,
                            43: 61,
                            44: [1, 59],
                            47: [2, 56]
                        }, {
                            13: 63,
                            15: [1, 20],
                            18: [1, 62]
                        }, {
                            15: [2, 48],
                            18: [2, 48]
                        }, {
                            33: [2, 86],
                            57: 64,
                            65: [2, 86],
                            72: [2, 86],
                            80: [2, 86],
                            81: [2, 86],
                            82: [2, 86],
                            83: [2, 86],
                            84: [2, 86],
                            85: [2, 86]
                        }, {
                            33: [2, 40],
                            65: [2, 40],
                            72: [2, 40],
                            80: [2, 40],
                            81: [2, 40],
                            82: [2, 40],
                            83: [2, 40],
                            84: [2, 40],
                            85: [2, 40]
                        }, {
                            33: [2, 41],
                            65: [2, 41],
                            72: [2, 41],
                            80: [2, 41],
                            81: [2, 41],
                            82: [2, 41],
                            83: [2, 41],
                            84: [2, 41],
                            85: [2, 41]
                        }, {
                            20: 65,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            26: 66,
                            47: [1, 67]
                        }, {
                            30: 68,
                            33: [2, 58],
                            65: [2, 58],
                            72: [2, 58],
                            75: [2, 58],
                            80: [2, 58],
                            81: [2, 58],
                            82: [2, 58],
                            83: [2, 58],
                            84: [2, 58],
                            85: [2, 58]
                        }, {
                            33: [2, 64],
                            35: 69,
                            65: [2, 64],
                            72: [2, 64],
                            75: [2, 64],
                            80: [2, 64],
                            81: [2, 64],
                            82: [2, 64],
                            83: [2, 64],
                            84: [2, 64],
                            85: [2, 64]
                        }, {
                            21: 70,
                            23: [2, 50],
                            65: [2, 50],
                            72: [2, 50],
                            80: [2, 50],
                            81: [2, 50],
                            82: [2, 50],
                            83: [2, 50],
                            84: [2, 50],
                            85: [2, 50]
                        }, {
                            33: [2, 90],
                            61: 71,
                            65: [2, 90],
                            72: [2, 90],
                            80: [2, 90],
                            81: [2, 90],
                            82: [2, 90],
                            83: [2, 90],
                            84: [2, 90],
                            85: [2, 90]
                        }, {
                            20: 75,
                            33: [2, 80],
                            50: 72,
                            63: 73,
                            64: 76,
                            65: [1, 44],
                            69: 74,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            72: [1, 80]
                        }, {
                            23: [2, 42],
                            33: [2, 42],
                            54: [2, 42],
                            65: [2, 42],
                            68: [2, 42],
                            72: [2, 42],
                            75: [2, 42],
                            80: [2, 42],
                            81: [2, 42],
                            82: [2, 42],
                            83: [2, 42],
                            84: [2, 42],
                            85: [2, 42],
                            87: [1, 51]
                        }, {
                            20: 75,
                            53: 81,
                            54: [2, 84],
                            63: 82,
                            64: 76,
                            65: [1, 44],
                            69: 83,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            26: 84,
                            47: [1, 67]
                        }, {
                            47: [2, 55]
                        }, {
                            4: 85,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            39: [2, 46],
                            44: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            47: [2, 20]
                        }, {
                            20: 86,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            4: 87,
                            6: 3,
                            14: [2, 46],
                            15: [2, 46],
                            19: [2, 46],
                            29: [2, 46],
                            34: [2, 46],
                            47: [2, 46],
                            48: [2, 46],
                            51: [2, 46],
                            55: [2, 46],
                            60: [2, 46]
                        }, {
                            26: 88,
                            47: [1, 67]
                        }, {
                            47: [2, 57]
                        }, {
                            5: [2, 11],
                            14: [2, 11],
                            15: [2, 11],
                            19: [2, 11],
                            29: [2, 11],
                            34: [2, 11],
                            39: [2, 11],
                            44: [2, 11],
                            47: [2, 11],
                            48: [2, 11],
                            51: [2, 11],
                            55: [2, 11],
                            60: [2, 11]
                        }, {
                            15: [2, 49],
                            18: [2, 49]
                        }, {
                            20: 75,
                            33: [2, 88],
                            58: 89,
                            63: 90,
                            64: 76,
                            65: [1, 44],
                            69: 91,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            65: [2, 94],
                            66: 92,
                            68: [2, 94],
                            72: [2, 94],
                            80: [2, 94],
                            81: [2, 94],
                            82: [2, 94],
                            83: [2, 94],
                            84: [2, 94],
                            85: [2, 94]
                        }, {
                            5: [2, 25],
                            14: [2, 25],
                            15: [2, 25],
                            19: [2, 25],
                            29: [2, 25],
                            34: [2, 25],
                            39: [2, 25],
                            44: [2, 25],
                            47: [2, 25],
                            48: [2, 25],
                            51: [2, 25],
                            55: [2, 25],
                            60: [2, 25]
                        }, {
                            20: 93,
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 75,
                            31: 94,
                            33: [2, 60],
                            63: 95,
                            64: 76,
                            65: [1, 44],
                            69: 96,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            75: [2, 60],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 75,
                            33: [2, 66],
                            36: 97,
                            63: 98,
                            64: 76,
                            65: [1, 44],
                            69: 99,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            75: [2, 66],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 75,
                            22: 100,
                            23: [2, 52],
                            63: 101,
                            64: 76,
                            65: [1, 44],
                            69: 102,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            20: 75,
                            33: [2, 92],
                            62: 103,
                            63: 104,
                            64: 76,
                            65: [1, 44],
                            69: 105,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            33: [1, 106]
                        }, {
                            33: [2, 79],
                            65: [2, 79],
                            72: [2, 79],
                            80: [2, 79],
                            81: [2, 79],
                            82: [2, 79],
                            83: [2, 79],
                            84: [2, 79],
                            85: [2, 79]
                        }, {
                            33: [2, 81]
                        }, {
                            23: [2, 27],
                            33: [2, 27],
                            54: [2, 27],
                            65: [2, 27],
                            68: [2, 27],
                            72: [2, 27],
                            75: [2, 27],
                            80: [2, 27],
                            81: [2, 27],
                            82: [2, 27],
                            83: [2, 27],
                            84: [2, 27],
                            85: [2, 27]
                        }, {
                            23: [2, 28],
                            33: [2, 28],
                            54: [2, 28],
                            65: [2, 28],
                            68: [2, 28],
                            72: [2, 28],
                            75: [2, 28],
                            80: [2, 28],
                            81: [2, 28],
                            82: [2, 28],
                            83: [2, 28],
                            84: [2, 28],
                            85: [2, 28]
                        }, {
                            23: [2, 30],
                            33: [2, 30],
                            54: [2, 30],
                            68: [2, 30],
                            71: 107,
                            72: [1, 108],
                            75: [2, 30]
                        }, {
                            23: [2, 98],
                            33: [2, 98],
                            54: [2, 98],
                            68: [2, 98],
                            72: [2, 98],
                            75: [2, 98]
                        }, {
                            23: [2, 45],
                            33: [2, 45],
                            54: [2, 45],
                            65: [2, 45],
                            68: [2, 45],
                            72: [2, 45],
                            73: [1, 109],
                            75: [2, 45],
                            80: [2, 45],
                            81: [2, 45],
                            82: [2, 45],
                            83: [2, 45],
                            84: [2, 45],
                            85: [2, 45],
                            87: [2, 45]
                        }, {
                            23: [2, 44],
                            33: [2, 44],
                            54: [2, 44],
                            65: [2, 44],
                            68: [2, 44],
                            72: [2, 44],
                            75: [2, 44],
                            80: [2, 44],
                            81: [2, 44],
                            82: [2, 44],
                            83: [2, 44],
                            84: [2, 44],
                            85: [2, 44],
                            87: [2, 44]
                        }, {
                            54: [1, 110]
                        }, {
                            54: [2, 83],
                            65: [2, 83],
                            72: [2, 83],
                            80: [2, 83],
                            81: [2, 83],
                            82: [2, 83],
                            83: [2, 83],
                            84: [2, 83],
                            85: [2, 83]
                        }, {
                            54: [2, 85]
                        }, {
                            5: [2, 13],
                            14: [2, 13],
                            15: [2, 13],
                            19: [2, 13],
                            29: [2, 13],
                            34: [2, 13],
                            39: [2, 13],
                            44: [2, 13],
                            47: [2, 13],
                            48: [2, 13],
                            51: [2, 13],
                            55: [2, 13],
                            60: [2, 13]
                        }, {
                            38: 56,
                            39: [1, 58],
                            43: 57,
                            44: [1, 59],
                            45: 112,
                            46: 111,
                            47: [2, 76]
                        }, {
                            33: [2, 70],
                            40: 113,
                            65: [2, 70],
                            72: [2, 70],
                            75: [2, 70],
                            80: [2, 70],
                            81: [2, 70],
                            82: [2, 70],
                            83: [2, 70],
                            84: [2, 70],
                            85: [2, 70]
                        }, {
                            47: [2, 18]
                        }, {
                            5: [2, 14],
                            14: [2, 14],
                            15: [2, 14],
                            19: [2, 14],
                            29: [2, 14],
                            34: [2, 14],
                            39: [2, 14],
                            44: [2, 14],
                            47: [2, 14],
                            48: [2, 14],
                            51: [2, 14],
                            55: [2, 14],
                            60: [2, 14]
                        }, {
                            33: [1, 114]
                        }, {
                            33: [2, 87],
                            65: [2, 87],
                            72: [2, 87],
                            80: [2, 87],
                            81: [2, 87],
                            82: [2, 87],
                            83: [2, 87],
                            84: [2, 87],
                            85: [2, 87]
                        }, {
                            33: [2, 89]
                        }, {
                            20: 75,
                            63: 116,
                            64: 76,
                            65: [1, 44],
                            67: 115,
                            68: [2, 96],
                            69: 117,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            33: [1, 118]
                        }, {
                            32: 119,
                            33: [2, 62],
                            74: 120,
                            75: [1, 121]
                        }, {
                            33: [2, 59],
                            65: [2, 59],
                            72: [2, 59],
                            75: [2, 59],
                            80: [2, 59],
                            81: [2, 59],
                            82: [2, 59],
                            83: [2, 59],
                            84: [2, 59],
                            85: [2, 59]
                        }, {
                            33: [2, 61],
                            75: [2, 61]
                        }, {
                            33: [2, 68],
                            37: 122,
                            74: 123,
                            75: [1, 121]
                        }, {
                            33: [2, 65],
                            65: [2, 65],
                            72: [2, 65],
                            75: [2, 65],
                            80: [2, 65],
                            81: [2, 65],
                            82: [2, 65],
                            83: [2, 65],
                            84: [2, 65],
                            85: [2, 65]
                        }, {
                            33: [2, 67],
                            75: [2, 67]
                        }, {
                            23: [1, 124]
                        }, {
                            23: [2, 51],
                            65: [2, 51],
                            72: [2, 51],
                            80: [2, 51],
                            81: [2, 51],
                            82: [2, 51],
                            83: [2, 51],
                            84: [2, 51],
                            85: [2, 51]
                        }, {
                            23: [2, 53]
                        }, {
                            33: [1, 125]
                        }, {
                            33: [2, 91],
                            65: [2, 91],
                            72: [2, 91],
                            80: [2, 91],
                            81: [2, 91],
                            82: [2, 91],
                            83: [2, 91],
                            84: [2, 91],
                            85: [2, 91]
                        }, {
                            33: [2, 93]
                        }, {
                            5: [2, 22],
                            14: [2, 22],
                            15: [2, 22],
                            19: [2, 22],
                            29: [2, 22],
                            34: [2, 22],
                            39: [2, 22],
                            44: [2, 22],
                            47: [2, 22],
                            48: [2, 22],
                            51: [2, 22],
                            55: [2, 22],
                            60: [2, 22]
                        }, {
                            23: [2, 99],
                            33: [2, 99],
                            54: [2, 99],
                            68: [2, 99],
                            72: [2, 99],
                            75: [2, 99]
                        }, {
                            73: [1, 109]
                        }, {
                            20: 75,
                            63: 126,
                            64: 76,
                            65: [1, 44],
                            72: [1, 35],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            5: [2, 23],
                            14: [2, 23],
                            15: [2, 23],
                            19: [2, 23],
                            29: [2, 23],
                            34: [2, 23],
                            39: [2, 23],
                            44: [2, 23],
                            47: [2, 23],
                            48: [2, 23],
                            51: [2, 23],
                            55: [2, 23],
                            60: [2, 23]
                        }, {
                            47: [2, 19]
                        }, {
                            47: [2, 77]
                        }, {
                            20: 75,
                            33: [2, 72],
                            41: 127,
                            63: 128,
                            64: 76,
                            65: [1, 44],
                            69: 129,
                            70: 77,
                            71: 78,
                            72: [1, 79],
                            75: [2, 72],
                            78: 26,
                            79: 27,
                            80: [1, 28],
                            81: [1, 29],
                            82: [1, 30],
                            83: [1, 31],
                            84: [1, 32],
                            85: [1, 34],
                            86: 33
                        }, {
                            5: [2, 24],
                            14: [2, 24],
                            15: [2, 24],
                            19: [2, 24],
                            29: [2, 24],
                            34: [2, 24],
                            39: [2, 24],
                            44: [2, 24],
                            47: [2, 24],
                            48: [2, 24],
                            51: [2, 24],
                            55: [2, 24],
                            60: [2, 24]
                        }, {
                            68: [1, 130]
                        }, {
                            65: [2, 95],
                            68: [2, 95],
                            72: [2, 95],
                            80: [2, 95],
                            81: [2, 95],
                            82: [2, 95],
                            83: [2, 95],
                            84: [2, 95],
                            85: [2, 95]
                        }, {
                            68: [2, 97]
                        }, {
                            5: [2, 21],
                            14: [2, 21],
                            15: [2, 21],
                            19: [2, 21],
                            29: [2, 21],
                            34: [2, 21],
                            39: [2, 21],
                            44: [2, 21],
                            47: [2, 21],
                            48: [2, 21],
                            51: [2, 21],
                            55: [2, 21],
                            60: [2, 21]
                        }, {
                            33: [1, 131]
                        }, {
                            33: [2, 63]
                        }, {
                            72: [1, 133],
                            76: 132
                        }, {
                            33: [1, 134]
                        }, {
                            33: [2, 69]
                        }, {
                            15: [2, 12]
                        }, {
                            14: [2, 26],
                            15: [2, 26],
                            19: [2, 26],
                            29: [2, 26],
                            34: [2, 26],
                            47: [2, 26],
                            48: [2, 26],
                            51: [2, 26],
                            55: [2, 26],
                            60: [2, 26]
                        }, {
                            23: [2, 31],
                            33: [2, 31],
                            54: [2, 31],
                            68: [2, 31],
                            72: [2, 31],
                            75: [2, 31]
                        }, {
                            33: [2, 74],
                            42: 135,
                            74: 136,
                            75: [1, 121]
                        }, {
                            33: [2, 71],
                            65: [2, 71],
                            72: [2, 71],
                            75: [2, 71],
                            80: [2, 71],
                            81: [2, 71],
                            82: [2, 71],
                            83: [2, 71],
                            84: [2, 71],
                            85: [2, 71]
                        }, {
                            33: [2, 73],
                            75: [2, 73]
                        }, {
                            23: [2, 29],
                            33: [2, 29],
                            54: [2, 29],
                            65: [2, 29],
                            68: [2, 29],
                            72: [2, 29],
                            75: [2, 29],
                            80: [2, 29],
                            81: [2, 29],
                            82: [2, 29],
                            83: [2, 29],
                            84: [2, 29],
                            85: [2, 29]
                        }, {
                            14: [2, 15],
                            15: [2, 15],
                            19: [2, 15],
                            29: [2, 15],
                            34: [2, 15],
                            39: [2, 15],
                            44: [2, 15],
                            47: [2, 15],
                            48: [2, 15],
                            51: [2, 15],
                            55: [2, 15],
                            60: [2, 15]
                        }, {
                            72: [1, 138],
                            77: [1, 137]
                        }, {
                            72: [2, 100],
                            77: [2, 100]
                        }, {
                            14: [2, 16],
                            15: [2, 16],
                            19: [2, 16],
                            29: [2, 16],
                            34: [2, 16],
                            44: [2, 16],
                            47: [2, 16],
                            48: [2, 16],
                            51: [2, 16],
                            55: [2, 16],
                            60: [2, 16]
                        }, {
                            33: [1, 139]
                        }, {
                            33: [2, 75]
                        }, {
                            33: [2, 32]
                        }, {
                            72: [2, 101],
                            77: [2, 101]
                        }, {
                            14: [2, 17],
                            15: [2, 17],
                            19: [2, 17],
                            29: [2, 17],
                            34: [2, 17],
                            39: [2, 17],
                            44: [2, 17],
                            47: [2, 17],
                            48: [2, 17],
                            51: [2, 17],
                            55: [2, 17],
                            60: [2, 17]
                        }],
                        defaultActions: {
                            4: [2, 1],
                            55: [2, 55],
                            57: [2, 20],
                            61: [2, 57],
                            74: [2, 81],
                            83: [2, 85],
                            87: [2, 18],
                            91: [2, 89],
                            102: [2, 53],
                            105: [2, 93],
                            111: [2, 19],
                            112: [2, 77],
                            117: [2, 97],
                            120: [2, 63],
                            123: [2, 69],
                            124: [2, 12],
                            136: [2, 75],
                            137: [2, 32]
                        },
                        parseError: function(e, t) {
                            throw new Error(e)
                        },
                        parse: function(e) {
                            function t() {
                                var e;
                                return e = n.lexer.lex() || 1, "number" != typeof e && (e = n.symbols_[e] || e), e
                            }
                            var n = this,
                                i = [0],
                                r = [null],
                                o = [],
                                a = this.table,
                                s = "",
                                l = 0,
                                c = 0,
                                u = 0;
                            this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var d = this.lexer.yylloc;
                            o.push(d);
                            var p = this.lexer.options && this.lexer.options.ranges;
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var h, f, m, g, v, y, b, w, _, x = {};;) {
                                if (m = i[i.length - 1], this.defaultActions[m] ? g = this.defaultActions[m] : ((null === h || "undefined" == typeof h) && (h = t()), g = a[m] && a[m][h]), "undefined" == typeof g || !g.length || !g[0]) {
                                    var C = "";
                                    if (!u) {
                                        _ = [];
                                        for (y in a[m]) this.terminals_[y] && y > 2 && _.push("'" + this.terminals_[y] + "'");
                                        C = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + _.join(", ") + ", got '" + (this.terminals_[h] || h) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == h ? "end of input" : "'" + (this.terminals_[h] || h) + "'"), this.parseError(C, {
                                            text: this.lexer.match,
                                            token: this.terminals_[h] || h,
                                            line: this.lexer.yylineno,
                                            loc: d,
                                            expected: _
                                        })
                                    }
                                }
                                if (g[0] instanceof Array && g.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + h);
                                switch (g[0]) {
                                    case 1:
                                        i.push(h), r.push(this.lexer.yytext), o.push(this.lexer.yylloc), i.push(g[1]), h = null, f ? (h = f, f = null) : (c = this.lexer.yyleng, s = this.lexer.yytext, l = this.lexer.yylineno, d = this.lexer.yylloc, u > 0 && u--);
                                        break;
                                    case 2:
                                        if (b = this.productions_[g[1]][1], x.$ = r[r.length - b], x._$ = {
                                                first_line: o[o.length - (b || 1)].first_line,
                                                last_line: o[o.length - 1].last_line,
                                                first_column: o[o.length - (b || 1)].first_column,
                                                last_column: o[o.length - 1].last_column
                                            }, p && (x._$.range = [o[o.length - (b || 1)].range[0], o[o.length - 1].range[1]]), v = this.performAction.call(x, s, c, l, this.yy, g[1], r, o), "undefined" != typeof v) return v;
                                        b && (i = i.slice(0, -1 * b * 2), r = r.slice(0, -1 * b), o = o.slice(0, -1 * b)), i.push(this.productions_[g[1]][0]), r.push(x.$), o.push(x._$), w = a[i[i.length - 2]][i[i.length - 1]], i.push(w);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    n = function() {
                        var e = {
                            EOF: 1,
                            parseError: function(e, t) {
                                if (!this.yy.parser) throw new Error(e);
                                this.yy.parser.parseError(e, t)
                            },
                            setInput: function(e) {
                                return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var e = this._input[0];
                                this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
                                var t = e.match(/(?:\r\n?|\n).*/g);
                                return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                            },
                            unput: function(e) {
                                var t = e.length,
                                    n = e.split(/(?:\r\n?|\n)/g);
                                this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                                var i = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                                var r = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - t
                                }, this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - t]), this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            less: function(e) {
                                this.unput(this.match.slice(e))
                            },
                            pastInput: function() {
                                var e = this.matched.substr(0, this.matched.length - this.match.length);
                                return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var e = this.match;
                                return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var e = this.pastInput(),
                                    t = new Array(e.length + 1).join("-");
                                return e + this.upcomingInput() + "\n" + t + "^"
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var e, t, n, i, r;
                                this._more || (this.yytext = "", this.match = "");
                                for (var o = this._currentRules(), a = 0; a < o.length && (n = this._input.match(this.rules[o[a]]), !n || t && !(n[0].length > t[0].length) || (t = n, i = a, this.options.flex)); a++);
                                return t ? (r = t[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[i], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e ? e : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var e = this.next();
                                return "undefined" != typeof e ? e : this.lex()
                            },
                            begin: function(e) {
                                this.conditionStack.push(e)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            topState: function() {
                                return this.conditionStack[this.conditionStack.length - 2]
                            },
                            pushState: function(e) {
                                this.begin(e)
                            }
                        };
                        return e.options = {}, e.performAction = function(e, t, n, i) {
                            function r(e, n) {
                                return t.yytext = t.yytext.substr(e, t.yyleng - n)
                            }
                            switch (n) {
                                case 0:
                                    if ("\\\\" === t.yytext.slice(-2) ? (r(0, 1), this.begin("mu")) : "\\" === t.yytext.slice(-1) ? (r(0, 1), this.begin("emu")) : this.begin("mu"), t.yytext) return 15;
                                    break;
                                case 1:
                                    return 15;
                                case 2:
                                    return this.popState(), 15;
                                case 3:
                                    return this.begin("raw"), 15;
                                case 4:
                                    return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (t.yytext = t.yytext.substr(5, t.yyleng - 9), "END_RAW_BLOCK");
                                case 5:
                                    return 15;
                                case 6:
                                    return this.popState(), 14;
                                case 7:
                                    return 65;
                                case 8:
                                    return 68;
                                case 9:
                                    return 19;
                                case 10:
                                    return this.popState(), this.begin("raw"), 23;
                                case 11:
                                    return 55;
                                case 12:
                                    return 60;
                                case 13:
                                    return 29;
                                case 14:
                                    return 47;
                                case 15:
                                    return this.popState(), 44;
                                case 16:
                                    return this.popState(), 44;
                                case 17:
                                    return 34;
                                case 18:
                                    return 39;
                                case 19:
                                    return 51;
                                case 20:
                                    return 48;
                                case 21:
                                    this.unput(t.yytext), this.popState(), this.begin("com");
                                    break;
                                case 22:
                                    return this.popState(), 14;
                                case 23:
                                    return 48;
                                case 24:
                                    return 73;
                                case 25:
                                    return 72;
                                case 26:
                                    return 72;
                                case 27:
                                    return 87;
                                case 28:
                                    break;
                                case 29:
                                    return this.popState(), 54;
                                case 30:
                                    return this.popState(), 33;
                                case 31:
                                    return t.yytext = r(1, 2).replace(/\\"/g, '"'), 80;
                                case 32:
                                    return t.yytext = r(1, 2).replace(/\\'/g, "'"), 80;
                                case 33:
                                    return 85;
                                case 34:
                                    return 82;
                                case 35:
                                    return 82;
                                case 36:
                                    return 83;
                                case 37:
                                    return 84;
                                case 38:
                                    return 81;
                                case 39:
                                    return 75;
                                case 40:
                                    return 77;
                                case 41:
                                    return 72;
                                case 42:
                                    return t.yytext = t.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                                case 43:
                                    return "INVALID";
                                case 44:
                                    return 5
                            }
                        }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {
                            mu: {
                                rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                                inclusive: !1
                            },
                            emu: {
                                rules: [2],
                                inclusive: !1
                            },
                            com: {
                                rules: [6],
                                inclusive: !1
                            },
                            raw: {
                                rules: [3, 4, 5],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [0, 1, 44],
                                inclusive: !0
                            }
                        }, e
                    }();
                return t.lexer = n, e.prototype = t, t.Parser = e, new e
            }();
            t.__esModule = !0, t["default"] = n
        }, function(e, t, n) {
            "use strict";

            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                this.options = e
            }

            function r(e, t, n) {
                void 0 === t && (t = e.length);
                var i = e[t - 1],
                    r = e[t - 2];
                return i ? "ContentStatement" === i.type ? (r || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : n
            }

            function o(e, t, n) {
                void 0 === t && (t = -1);
                var i = e[t + 1],
                    r = e[t + 2];
                return i ? "ContentStatement" === i.type ? (r || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : n
            }

            function a(e, t, n) {
                var i = e[null == t ? 0 : t + 1];
                if (i && "ContentStatement" === i.type && (n || !i.rightStripped)) {
                    var r = i.value;
                    i.value = i.value.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""), i.rightStripped = i.value !== r
                }
            }

            function s(e, t, n) {
                var i = e[null == t ? e.length - 1 : t - 1];
                if (i && "ContentStatement" === i.type && (n || !i.leftStripped)) {
                    var r = i.value;
                    return i.value = i.value.replace(n ? /\s+$/ : /[ \t]+$/, ""), i.leftStripped = i.value !== r, i.leftStripped
                }
            }
            var l = n(1)["default"];
            t.__esModule = !0;
            var c = n(25),
                u = l(c);
            i.prototype = new u["default"], i.prototype.Program = function(e) {
                var t = !this.options.ignoreStandalone,
                    n = !this.isRootSeen;
                this.isRootSeen = !0;
                for (var i = e.body, l = 0, c = i.length; c > l; l++) {
                    var u = i[l],
                        d = this.accept(u);
                    if (d) {
                        var p = r(i, l, n),
                            h = o(i, l, n),
                            f = d.openStandalone && p,
                            m = d.closeStandalone && h,
                            g = d.inlineStandalone && p && h;
                        d.close && a(i, l, !0), d.open && s(i, l, !0), t && g && (a(i, l), s(i, l) && "PartialStatement" === u.type && (u.indent = /([ \t]+$)/.exec(i[l - 1].original)[1])), t && f && (a((u.program || u.inverse).body), s(i, l)), t && m && (a(i, l), s((u.inverse || u.program).body))
                    }
                }
                return e
            }, i.prototype.BlockStatement = i.prototype.DecoratorBlock = i.prototype.PartialBlockStatement = function(e) {
                this.accept(e.program), this.accept(e.inverse);
                var t = e.program || e.inverse,
                    n = e.program && e.inverse,
                    i = n,
                    l = n;
                if (n && n.chained)
                    for (i = n.body[0].program; l.chained;) l = l.body[l.body.length - 1].program;
                var c = {
                    open: e.openStrip.open,
                    close: e.closeStrip.close,
                    openStandalone: o(t.body),
                    closeStandalone: r((i || t).body)
                };
                if (e.openStrip.close && a(t.body, null, !0), n) {
                    var u = e.inverseStrip;
                    u.open && s(t.body, null, !0), u.close && a(i.body, null, !0), e.closeStrip.open && s(l.body, null, !0), !this.options.ignoreStandalone && r(t.body) && o(i.body) && (s(t.body), a(i.body))
                } else e.closeStrip.open && s(t.body, null, !0);
                return c
            }, i.prototype.Decorator = i.prototype.MustacheStatement = function(e) {
                return e.strip
            }, i.prototype.PartialStatement = i.prototype.CommentStatement = function(e) {
                var t = e.strip || {};
                return {
                    inlineStandalone: !0,
                    open: t.open,
                    close: t.close
                }
            }, t["default"] = i, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i() {
                this.parents = []
            }

            function r(e) {
                this.acceptRequired(e, "path"), this.acceptArray(e.params), this.acceptKey(e, "hash")
            }

            function o(e) {
                r.call(this, e), this.acceptKey(e, "program"), this.acceptKey(e, "inverse")
            }

            function a(e) {
                this.acceptRequired(e, "name"), this.acceptArray(e.params), this.acceptKey(e, "hash")
            }
            var s = n(1)["default"];
            t.__esModule = !0;
            var l = n(6),
                c = s(l);
            i.prototype = {
                constructor: i,
                mutating: !1,
                acceptKey: function(e, t) {
                    var n = this.accept(e[t]);
                    if (this.mutating) {
                        if (n && !i.prototype[n.type]) throw new c["default"]('Unexpected node type "' + n.type + '" found when accepting ' + t + " on " + e.type);
                        e[t] = n
                    }
                },
                acceptRequired: function(e, t) {
                    if (this.acceptKey(e, t), !e[t]) throw new c["default"](e.type + " requires " + t)
                },
                acceptArray: function(e) {
                    for (var t = 0, n = e.length; n > t; t++) this.acceptKey(e, t), e[t] || (e.splice(t, 1), t--, n--)
                },
                accept: function(e) {
                    if (e) {
                        if (!this[e.type]) throw new c["default"]("Unknown type: " + e.type, e);
                        this.current && this.parents.unshift(this.current), this.current = e;
                        var t = this[e.type](e);
                        return this.current = this.parents.shift(), !this.mutating || t ? t : t !== !1 ? e : void 0
                    }
                },
                Program: function(e) {
                    this.acceptArray(e.body)
                },
                MustacheStatement: r,
                Decorator: r,
                BlockStatement: o,
                DecoratorBlock: o,
                PartialStatement: a,
                PartialBlockStatement: function(e) {
                    a.call(this, e), this.acceptKey(e, "program")
                },
                ContentStatement: function() {},
                CommentStatement: function() {},
                SubExpression: r,
                PathExpression: function() {},
                StringLiteral: function() {},
                NumberLiteral: function() {},
                BooleanLiteral: function() {},
                UndefinedLiteral: function() {},
                NullLiteral: function() {},
                Hash: function(e) {
                    this.acceptArray(e.pairs)
                },
                HashPair: function(e) {
                    this.acceptRequired(e, "value")
                }
            }, t["default"] = i, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (t = t.path ? t.path.original : t, e.path.original !== t) {
                    var n = {
                        loc: e.path.loc
                    };
                    throw new g["default"](e.path.original + " doesn't match " + t, n)
                }
            }

            function r(e, t) {
                this.source = e, this.start = {
                    line: t.first_line,
                    column: t.first_column
                }, this.end = {
                    line: t.last_line,
                    column: t.last_column
                }
            }

            function o(e) {
                return /^\[.*\]$/.test(e) ? e.substr(1, e.length - 2) : e
            }

            function a(e, t) {
                return {
                    open: "~" === e.charAt(2),
                    close: "~" === t.charAt(t.length - 3)
                }
            }

            function s(e) {
                return e.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "")
            }

            function l(e, t, n) {
                n = this.locInfo(n);
                for (var i = e ? "@" : "", r = [], o = 0, a = "", s = 0, l = t.length; l > s; s++) {
                    var c = t[s].part,
                        u = t[s].original !== c;
                    if (i += (t[s].separator || "") + c, u || ".." !== c && "." !== c && "this" !== c) r.push(c);
                    else {
                        if (r.length > 0) throw new g["default"]("Invalid path: " + i, {
                            loc: n
                        });
                        ".." === c && (o++, a += "../")
                    }
                }
                return {
                    type: "PathExpression",
                    data: e,
                    depth: o,
                    parts: r,
                    original: i,
                    loc: n
                }
            }

            function c(e, t, n, i, r, o) {
                var a = i.charAt(3) || i.charAt(2),
                    s = "{" !== a && "&" !== a,
                    l = /\*/.test(i);
                return {
                    type: l ? "Decorator" : "MustacheStatement",
                    path: e,
                    params: t,
                    hash: n,
                    escaped: s,
                    strip: r,
                    loc: this.locInfo(o)
                }
            }

            function u(e, t, n, r) {
                i(e, n), r = this.locInfo(r);
                var o = {
                    type: "Program",
                    body: t,
                    strip: {},
                    loc: r
                };
                return {
                    type: "BlockStatement",
                    path: e.path,
                    params: e.params,
                    hash: e.hash,
                    program: o,
                    openStrip: {},
                    inverseStrip: {},
                    closeStrip: {},
                    loc: r
                }
            }

            function d(e, t, n, r, o, a) {
                r && r.path && i(e, r);
                var s = /\*/.test(e.open);
                t.blockParams = e.blockParams;
                var l = void 0,
                    c = void 0;
                if (n) {
                    if (s) throw new g["default"]("Unexpected inverse block on decorator", n);
                    n.chain && (n.program.body[0].closeStrip = r.strip), c = n.strip, l = n.program
                }
                return o && (o = l, l = t, t = o), {
                    type: s ? "DecoratorBlock" : "BlockStatement",
                    path: e.path,
                    params: e.params,
                    hash: e.hash,
                    program: t,
                    inverse: l,
                    openStrip: e.strip,
                    inverseStrip: c,
                    closeStrip: r && r.strip,
                    loc: this.locInfo(a)
                }
            }

            function p(e, t) {
                if (!t && e.length) {
                    var n = e[0].loc,
                        i = e[e.length - 1].loc;
                    n && i && (t = {
                        source: n.source,
                        start: {
                            line: n.start.line,
                            column: n.start.column
                        },
                        end: {
                            line: i.end.line,
                            column: i.end.column
                        }
                    })
                }
                return {
                    type: "Program",
                    body: e,
                    strip: {},
                    loc: t
                }
            }

            function h(e, t, n, r) {
                return i(e, n), {
                    type: "PartialBlockStatement",
                    name: e.path,
                    params: e.params,
                    hash: e.hash,
                    program: t,
                    openStrip: e.strip,
                    closeStrip: n && n.strip,
                    loc: this.locInfo(r)
                }
            }
            var f = n(1)["default"];
            t.__esModule = !0, t.SourceLocation = r, t.id = o, t.stripFlags = a, t.stripComment = s, t.preparePath = l, t.prepareMustache = c, t.prepareRawBlock = u, t.prepareBlock = d, t.prepareProgram = p, t.preparePartialBlock = h;
            var m = n(6),
                g = f(m)
        }, function(e, t, n) {
            "use strict";

            function i() {}

            function r(e, t, n) {
                if (null == e || "string" != typeof e && "Program" !== e.type) throw new u["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
                t = t || {}, "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
                var i = n.parse(e, t),
                    r = (new n.Compiler).compile(i, t);
                return (new n.JavaScriptCompiler).compile(r, t)
            }

            function o(e, t, n) {
                function i() {
                    var i = n.parse(e, t),
                        r = (new n.Compiler).compile(i, t),
                        o = (new n.JavaScriptCompiler).compile(r, t, void 0, !0);
                    return n.template(o)
                }

                function r(e, t) {
                    return o || (o = i()), o.call(this, e, t)
                }
                if (void 0 === t && (t = {}), null == e || "string" != typeof e && "Program" !== e.type) throw new u["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
                "data" in t || (t.data = !0), t.compat && (t.useDepths = !0);
                var o = void 0;
                return r._setup = function(e) {
                    return o || (o = i()), o._setup(e)
                }, r._child = function(e, t, n, r) {
                    return o || (o = i()), o._child(e, t, n, r)
                }, r
            }

            function a(e, t) {
                if (e === t) return !0;
                if (d.isArray(e) && d.isArray(t) && e.length === t.length) {
                    for (var n = 0; n < e.length; n++)
                        if (!a(e[n], t[n])) return !1;
                    return !0
                }
            }

            function s(e) {
                if (!e.path.parts) {
                    var t = e.path;
                    e.path = {
                        type: "PathExpression",
                        data: !1,
                        depth: 0,
                        parts: [t.original + ""],
                        original: t.original + "",
                        loc: t.loc
                    }
                }
            }
            var l = n(1)["default"];
            t.__esModule = !0, t.Compiler = i, t.precompile = r, t.compile = o;
            var c = n(6),
                u = l(c),
                d = n(5),
                p = n(21),
                h = l(p),
                f = [].slice;
            i.prototype = {
                compiler: i,
                equals: function(e) {
                    var t = this.opcodes.length;
                    if (e.opcodes.length !== t) return !1;
                    for (var n = 0; t > n; n++) {
                        var i = this.opcodes[n],
                            r = e.opcodes[n];
                        if (i.opcode !== r.opcode || !a(i.args, r.args)) return !1
                    }
                    t = this.children.length;
                    for (var n = 0; t > n; n++)
                        if (!this.children[n].equals(e.children[n])) return !1;
                    return !0
                },
                guid: 0,
                compile: function(e, t) {
                    this.sourceNode = [], this.opcodes = [], this.children = [], this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds, t.blockParams = t.blockParams || [];
                    var n = t.knownHelpers;
                    if (t.knownHelpers = {
                            helperMissing: !0,
                            blockHelperMissing: !0,
                            each: !0,
                            "if": !0,
                            unless: !0,
                            "with": !0,
                            log: !0,
                            lookup: !0
                        }, n)
                        for (var i in n) i in n && (t.knownHelpers[i] = n[i]);
                    return this.accept(e)
                },
                compileProgram: function(e) {
                    var t = new this.compiler,
                        n = t.compile(e, this.options),
                        i = this.guid++;
                    return this.usePartial = this.usePartial || n.usePartial, this.children[i] = n, this.useDepths = this.useDepths || n.useDepths, i
                },
                accept: function(e) {
                    if (!this[e.type]) throw new u["default"]("Unknown type: " + e.type, e);
                    this.sourceNode.unshift(e);
                    var t = this[e.type](e);
                    return this.sourceNode.shift(), t
                },
                Program: function(e) {
                    this.options.blockParams.unshift(e.blockParams);
                    for (var t = e.body, n = t.length, i = 0; n > i; i++) this.accept(t[i]);
                    return this.options.blockParams.shift(), this.isSimple = 1 === n, this.blockParams = e.blockParams ? e.blockParams.length : 0, this
                },
                BlockStatement: function(e) {
                    s(e);
                    var t = e.program,
                        n = e.inverse;
                    t = t && this.compileProgram(t), n = n && this.compileProgram(n);
                    var i = this.classifySexpr(e);
                    "helper" === i ? this.helperSexpr(e, t, n) : "simple" === i ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original)) : (this.ambiguousSexpr(e, t, n), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
                },
                DecoratorBlock: function(e) {
                    var t = e.program && this.compileProgram(e.program),
                        n = this.setupFullMustacheParams(e, t, void 0),
                        i = e.path;
                    this.useDecorators = !0, this.opcode("registerDecorator", n.length, i.original)
                },
                PartialStatement: function(e) {
                    this.usePartial = !0;
                    var t = e.program;
                    t && (t = this.compileProgram(e.program));
                    var n = e.params;
                    if (n.length > 1) throw new u["default"]("Unsupported number of partial arguments: " + n.length, e);
                    n.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : n.push({
                        type: "PathExpression",
                        parts: [],
                        depth: 0
                    }));
                    var i = e.name.original,
                        r = "SubExpression" === e.name.type;
                    r && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, !0);
                    var o = e.indent || "";
                    this.options.preventIndent && o && (this.opcode("appendContent", o), o = ""), this.opcode("invokePartial", r, i, o), this.opcode("append")
                },
                PartialBlockStatement: function(e) {
                    this.PartialStatement(e)
                },
                MustacheStatement: function(e) {
                    this.SubExpression(e), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                },
                Decorator: function(e) {
                    this.DecoratorBlock(e)
                },
                ContentStatement: function(e) {
                    e.value && this.opcode("appendContent", e.value)
                },
                CommentStatement: function() {},
                SubExpression: function(e) {
                    s(e);
                    var t = this.classifySexpr(e);
                    "simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e)
                },
                ambiguousSexpr: function(e, t, n) {
                    var i = e.path,
                        r = i.parts[0],
                        o = null != t || null != n;
                    this.opcode("getContext", i.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), i.strict = !0, this.accept(i), this.opcode("invokeAmbiguous", r, o)
                },
                simpleSexpr: function(e) {
                    var t = e.path;
                    t.strict = !0, this.accept(t), this.opcode("resolvePossibleLambda")
                },
                helperSexpr: function(e, t, n) {
                    var i = this.setupFullMustacheParams(e, t, n),
                        r = e.path,
                        o = r.parts[0];
                    if (this.options.knownHelpers[o]) this.opcode("invokeKnownHelper", i.length, o);
                    else {
                        if (this.options.knownHelpersOnly) throw new u["default"]("You specified knownHelpersOnly, but used the unknown helper " + o, e);
                        r.strict = !0, r.falsy = !0, this.accept(r), this.opcode("invokeHelper", i.length, r.original, h["default"].helpers.simpleId(r))
                    }
                },
                PathExpression: function(e) {
                    this.addDepth(e.depth), this.opcode("getContext", e.depth);
                    var t = e.parts[0],
                        n = h["default"].helpers.scopedId(e),
                        i = !e.depth && !n && this.blockParamIndex(t);
                    i ? this.opcode("lookupBlockParam", i, e.parts) : t ? e.data ? (this.options.data = !0, this.opcode("lookupData", e.depth, e.parts, e.strict)) : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, n) : this.opcode("pushContext")
                },
                StringLiteral: function(e) {
                    this.opcode("pushString", e.value)
                },
                NumberLiteral: function(e) {
                    this.opcode("pushLiteral", e.value)
                },
                BooleanLiteral: function(e) {
                    this.opcode("pushLiteral", e.value)
                },
                UndefinedLiteral: function() {
                    this.opcode("pushLiteral", "undefined")
                },
                NullLiteral: function() {
                    this.opcode("pushLiteral", "null")
                },
                Hash: function(e) {
                    var t = e.pairs,
                        n = 0,
                        i = t.length;
                    for (this.opcode("pushHash"); i > n; n++) this.pushParam(t[n].value);
                    for (; n--;) this.opcode("assignToHash", t[n].key);
                    this.opcode("popHash")
                },
                opcode: function(e) {
                    this.opcodes.push({
                        opcode: e,
                        args: f.call(arguments, 1),
                        loc: this.sourceNode[0].loc
                    })
                },
                addDepth: function(e) {
                    e && (this.useDepths = !0)
                },
                classifySexpr: function(e) {
                    var t = h["default"].helpers.simpleId(e.path),
                        n = t && !!this.blockParamIndex(e.path.parts[0]),
                        i = !n && h["default"].helpers.helperExpression(e),
                        r = !n && (i || t);
                    if (r && !i) {
                        var o = e.path.parts[0],
                            a = this.options;
                        a.knownHelpers[o] ? i = !0 : a.knownHelpersOnly && (r = !1)
                    }
                    return i ? "helper" : r ? "ambiguous" : "simple"
                },
                pushParams: function(e) {
                    for (var t = 0, n = e.length; n > t; t++) this.pushParam(e[t])
                },
                pushParam: function(e) {
                    var t = null != e.value ? e.value : e.original || "";
                    if (this.stringParams) t.replace && (t = t.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", t, e.type), "SubExpression" === e.type && this.accept(e);
                    else {
                        if (this.trackIds) {
                            var n = void 0;
                            if (!e.parts || h["default"].helpers.scopedId(e) || e.depth || (n = this.blockParamIndex(e.parts[0])), n) {
                                var i = e.parts.slice(1).join(".");
                                this.opcode("pushId", "BlockParam", n, i)
                            } else t = e.original || t, t.replace && (t = t.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", e.type, t)
                        }
                        this.accept(e)
                    }
                },
                setupFullMustacheParams: function(e, t, n, i) {
                    var r = e.params;
                    return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", i), r
                },
                blockParamIndex: function(e) {
                    for (var t = 0, n = this.options.blockParams.length; n > t; t++) {
                        var i = this.options.blockParams[t],
                            r = i && d.indexOf(i, e);
                        if (i && r >= 0) return [t, r]
                    }
                }
            }
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                this.value = e
            }

            function r() {}

            function o(e, t, n, i) {
                var r = t.popStack(),
                    o = 0,
                    a = n.length;
                for (e && a--; a > o; o++) r = t.nameLookup(r, n[o], i);
                return e ? [t.aliasable("container.strict"), "(", r, ", ", t.quotedString(n[o]), ")"] : r
            }
            var a = n(1)["default"];
            t.__esModule = !0;
            var s = n(4),
                l = n(6),
                c = a(l),
                u = n(5),
                d = n(29),
                p = a(d);
            r.prototype = {
                    nameLookup: function(e, t) {
                        return r.isValidJavaScriptVariableName(t) ? [e, ".", t] : [e, "[", JSON.stringify(t), "]"]
                    },
                    depthedLookup: function(e) {
                        return [this.aliasable("container.lookup"), '(depths, "', e, '")']
                    },
                    compilerInfo: function() {
                        var e = s.COMPILER_REVISION,
                            t = s.REVISION_CHANGES[e];
                        return [e, t]
                    },
                    appendToBuffer: function(e, t, n) {
                        return u.isArray(e) || (e = [e]), e = this.source.wrap(e, t), this.environment.isSimple ? ["return ", e, ";"] : n ? ["buffer += ", e, ";"] : (e.appendToBuffer = !0, e)
                    },
                    initializeBuffer: function() {
                        return this.quotedString("")
                    },
                    compile: function(e, t, n, i) {
                        this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !i, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                            decorators: [],
                            programs: [],
                            environments: []
                        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
                            list: []
                        }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.useDepths || e.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || e.useBlockParams;
                        var r = e.opcodes,
                            o = void 0,
                            a = void 0,
                            s = void 0,
                            l = void 0;
                        for (s = 0, l = r.length; l > s; s++) o = r[s], this.source.currentLocation = o.loc, a = a || o.loc, this[o.opcode].apply(this, o.args);
                        if (this.source.currentLocation = a, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new c["default"]("Compile completed with content left on stack");
                        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), i ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                        var u = this.createFunctionContext(i);
                        if (this.isChild) return u;
                        var d = {
                            compiler: this.compilerInfo(),
                            main: u
                        };
                        this.decorators && (d.main_d = this.decorators, d.useDecorators = !0);
                        var p = this.context,
                            h = p.programs,
                            f = p.decorators;
                        for (s = 0, l = h.length; l > s; s++) h[s] && (d[s] = h[s], f[s] && (d[s + "_d"] = f[s], d.useDecorators = !0));
                        return this.environment.usePartial && (d.usePartial = !0), this.options.data && (d.useData = !0), this.useDepths && (d.useDepths = !0), this.useBlockParams && (d.useBlockParams = !0), this.options.compat && (d.compat = !0), i ? d.compilerOptions = this.options : (d.compiler = JSON.stringify(d.compiler), this.source.currentLocation = {
                            start: {
                                line: 1,
                                column: 0
                            }
                        }, d = this.objectLiteral(d), t.srcName ? (d = d.toStringWithSourceMap({
                            file: t.destName
                        }), d.map = d.map && d.map.toString()) : d = d.toString()), d
                    },
                    preamble: function() {
                        this.lastContext = 0, this.source = new p["default"](this.options.srcName), this.decorators = new p["default"](this.options.srcName)
                    },
                    createFunctionContext: function(e) {
                        var t = "",
                            n = this.stackVars.concat(this.registers.list);
                        n.length > 0 && (t += ", " + n.join(", "));
                        var i = 0;
                        for (var r in this.aliases) {
                            var o = this.aliases[r];
                            this.aliases.hasOwnProperty(r) && o.children && o.referenceCount > 1 && (t += ", alias" + ++i + "=" + r, o.children[0] = "alias" + i)
                        }
                        var a = ["container", "depth0", "helpers", "partials", "data"];
                        (this.useBlockParams || this.useDepths) && a.push("blockParams"), this.useDepths && a.push("depths");
                        var s = this.mergeSource(t);
                        return e ? (a.push(s), Function.apply(this, a)) : this.source.wrap(["function(", a.join(","), ") {\n  ", s, "}"])
                    },
                    mergeSource: function(e) {
                        var t = this.environment.isSimple,
                            n = !this.forceBuffer,
                            i = void 0,
                            r = void 0,
                            o = void 0,
                            a = void 0;
                        return this.source.each(function(e) {
                            e.appendToBuffer ? (o ? e.prepend("  + ") : o = e, a = e) : (o && (r ? o.prepend("buffer += ") : i = !0, a.add(";"), o = a = void 0), r = !0, t || (n = !1))
                        }), n ? o ? (o.prepend("return "), a.add(";")) : r || this.source.push('return "";') : (e += ", buffer = " + (i ? "" : this.initializeBuffer()), o ? (o.prepend("return buffer + "), a.add(";")) : this.source.push("return buffer;")), e && this.source.prepend("var " + e.substring(2) + (i ? "" : ";\n")), this.source.merge()
                    },
                    blockValue: function(e) {
                        var t = this.aliasable("helpers.blockHelperMissing"),
                            n = [this.contextName(0)];
                        this.setupHelperArgs(e, 0, n);
                        var i = this.popStack();
                        n.splice(1, 0, i), this.push(this.source.functionCall(t, "call", n))
                    },
                    ambiguousBlockValue: function() {
                        var e = this.aliasable("helpers.blockHelperMissing"),
                            t = [this.contextName(0)];
                        this.setupHelperArgs("", 0, t, !0), this.flushInline();
                        var n = this.topStack();
                        t.splice(1, 0, n), this.pushSource(["if (!", this.lastHelper, ") { ", n, " = ", this.source.functionCall(e, "call", t), "}"])
                    },
                    appendContent: function(e) {
                        this.pendingContent ? e = this.pendingContent + e : this.pendingLocation = this.source.currentLocation, this.pendingContent = e
                    },
                    append: function() {
                        if (this.isInline()) this.replaceStack(function(e) {
                            return [" != null ? ", e, ' : ""']
                        }), this.pushSource(this.appendToBuffer(this.popStack()));
                        else {
                            var e = this.popStack();
                            this.pushSource(["if (", e, " != null) { ", this.appendToBuffer(e, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                        }
                    },
                    appendEscaped: function() {
                        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
                    },
                    getContext: function(e) {
                        this.lastContext = e
                    },
                    pushContext: function() {
                        this.pushStackLiteral(this.contextName(this.lastContext))
                    },
                    lookupOnContext: function(e, t, n, i) {
                        var r = 0;
                        i || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(e[r++])), this.resolvePath("context", e, r, t, n)
                    },
                    lookupBlockParam: function(e, t) {
                        this.useBlockParams = !0, this.push(["blockParams[", e[0], "][", e[1], "]"]), this.resolvePath("context", t, 1)
                    },
                    lookupData: function(e, t, n) {
                        e ? this.pushStackLiteral("container.data(data, " + e + ")") : this.pushStackLiteral("data"), this.resolvePath("data", t, 0, !0, n)
                    },
                    resolvePath: function(e, t, n, i, r) {
                        var a = this;
                        if (this.options.strict || this.options.assumeObjects) return void this.push(o(this.options.strict && r, this, t, e));
                        for (var s = t.length; s > n; n++) this.replaceStack(function(r) {
                            var o = a.nameLookup(r, t[n], e);
                            return i ? [" && ", o] : [" != null ? ", o, " : ", r]
                        })
                    },
                    resolvePossibleLambda: function() {
                        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
                    },
                    pushStringParam: function(e, t) {
                        this.pushContext(), this.pushString(t), "SubExpression" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e))
                    },
                    emptyHash: function(e) {
                        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(e ? "undefined" : "{}")
                    },
                    pushHash: function() {
                        this.hash && this.hashes.push(this.hash), this.hash = {
                            values: [],
                            types: [],
                            contexts: [],
                            ids: []
                        }
                    },
                    popHash: function() {
                        var e = this.hash;
                        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(e.ids)), this.stringParams && (this.push(this.objectLiteral(e.contexts)), this.push(this.objectLiteral(e.types))), this.push(this.objectLiteral(e.values))
                    },
                    pushString: function(e) {
                        this.pushStackLiteral(this.quotedString(e))
                    },
                    pushLiteral: function(e) {
                        this.pushStackLiteral(e)
                    },
                    pushProgram: function(e) {
                        null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
                    },
                    registerDecorator: function(e, t) {
                        var n = this.nameLookup("decorators", t, "decorator"),
                            i = this.setupHelperArgs(t, e);
                        this.decorators.push(["fn = ", this.decorators.functionCall(n, "", ["fn", "props", "container", i]), " || fn;"])
                    },
                    invokeHelper: function(e, t, n) {
                        var i = this.popStack(),
                            r = this.setupHelper(e, t),
                            o = n ? [r.name, " || "] : "",
                            a = ["("].concat(o, i);
                        this.options.strict || a.push(" || ", this.aliasable("helpers.helperMissing")), a.push(")"), this.push(this.source.functionCall(a, "call", r.callParams))
                    },
                    invokeKnownHelper: function(e, t) {
                        var n = this.setupHelper(e, t);
                        this.push(this.source.functionCall(n.name, "call", n.callParams))
                    },
                    invokeAmbiguous: function(e, t) {
                        this.useRegister("helper");
                        var n = this.popStack();
                        this.emptyHash();
                        var i = this.setupHelper(0, e, t),
                            r = this.lastHelper = this.nameLookup("helpers", e, "helper"),
                            o = ["(", "(helper = ", r, " || ", n, ")"];
                        this.options.strict || (o[0] = "(helper = ", o.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", o, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"])
                    },
                    invokePartial: function(e, t, n) {
                        var i = [],
                            r = this.setupParams(t, 1, i);
                        e && (t = this.popStack(), delete r.name), n && (r.indent = JSON.stringify(n)), r.helpers = "helpers", r.partials = "partials", r.decorators = "container.decorators", e ? i.unshift(t) : i.unshift(this.nameLookup("partials", t, "partial")), this.options.compat && (r.depths = "depths"), r = this.objectLiteral(r), i.push(r), this.push(this.source.functionCall("container.invokePartial", "", i))
                    },
                    assignToHash: function(e) {
                        var t = this.popStack(),
                            n = void 0,
                            i = void 0,
                            r = void 0;
                        this.trackIds && (r = this.popStack()), this.stringParams && (i = this.popStack(), n = this.popStack());
                        var o = this.hash;
                        n && (o.contexts[e] = n), i && (o.types[e] = i), r && (o.ids[e] = r), o.values[e] = t
                    },
                    pushId: function(e, t, n) {
                        "BlockParam" === e ? this.pushStackLiteral("blockParams[" + t[0] + "].path[" + t[1] + "]" + (n ? " + " + JSON.stringify("." + n) : "")) : "PathExpression" === e ? this.pushString(t) : "SubExpression" === e ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
                    },
                    compiler: r,
                    compileChildren: function(e, t) {
                        for (var n = e.children, i = void 0, r = void 0, o = 0, a = n.length; a > o; o++) {
                            i = n[o], r = new this.compiler;
                            var s = this.matchExistingProgram(i);
                            null == s ? (this.context.programs.push(""), s = this.context.programs.length, i.index = s, i.name = "program" + s, this.context.programs[s] = r.compile(i, t, this.context, !this.precompile), this.context.decorators[s] = r.decorators, this.context.environments[s] = i, this.useDepths = this.useDepths || r.useDepths, this.useBlockParams = this.useBlockParams || r.useBlockParams) : (i.index = s, i.name = "program" + s, this.useDepths = this.useDepths || i.useDepths, this.useBlockParams = this.useBlockParams || i.useBlockParams)
                        }
                    },
                    matchExistingProgram: function(e) {
                        for (var t = 0, n = this.context.environments.length; n > t; t++) {
                            var i = this.context.environments[t];
                            if (i && i.equals(e)) return t
                        }
                    },
                    programExpression: function(e) {
                        var t = this.environment.children[e],
                            n = [t.index, "data", t.blockParams];
                        return (this.useBlockParams || this.useDepths) && n.push("blockParams"),
                            this.useDepths && n.push("depths"), "container.program(" + n.join(", ") + ")"
                    },
                    useRegister: function(e) {
                        this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
                    },
                    push: function(e) {
                        return e instanceof i || (e = this.source.wrap(e)), this.inlineStack.push(e), e
                    },
                    pushStackLiteral: function(e) {
                        this.push(new i(e))
                    },
                    pushSource: function(e) {
                        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), e && this.source.push(e)
                    },
                    replaceStack: function(e) {
                        var t = ["("],
                            n = void 0,
                            r = void 0,
                            o = void 0;
                        if (!this.isInline()) throw new c["default"]("replaceStack on non-inline");
                        var a = this.popStack(!0);
                        if (a instanceof i) n = [a.value], t = ["(", n], o = !0;
                        else {
                            r = !0;
                            var s = this.incrStack();
                            t = ["((", this.push(s), " = ", a, ")"], n = this.topStack()
                        }
                        var l = e.call(this, n);
                        o || this.popStack(), r && this.stackSlot--, this.push(t.concat(l, ")"))
                    },
                    incrStack: function() {
                        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
                    },
                    topStackName: function() {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function() {
                        var e = this.inlineStack;
                        this.inlineStack = [];
                        for (var t = 0, n = e.length; n > t; t++) {
                            var r = e[t];
                            if (r instanceof i) this.compileStack.push(r);
                            else {
                                var o = this.incrStack();
                                this.pushSource([o, " = ", r, ";"]), this.compileStack.push(o)
                            }
                        }
                    },
                    isInline: function() {
                        return this.inlineStack.length
                    },
                    popStack: function(e) {
                        var t = this.isInline(),
                            n = (t ? this.inlineStack : this.compileStack).pop();
                        if (!e && n instanceof i) return n.value;
                        if (!t) {
                            if (!this.stackSlot) throw new c["default"]("Invalid stack pop");
                            this.stackSlot--
                        }
                        return n
                    },
                    topStack: function() {
                        var e = this.isInline() ? this.inlineStack : this.compileStack,
                            t = e[e.length - 1];
                        return t instanceof i ? t.value : t
                    },
                    contextName: function(e) {
                        return this.useDepths && e ? "depths[" + e + "]" : "depth" + e
                    },
                    quotedString: function(e) {
                        return this.source.quotedString(e)
                    },
                    objectLiteral: function(e) {
                        return this.source.objectLiteral(e)
                    },
                    aliasable: function(e) {
                        var t = this.aliases[e];
                        return t ? (t.referenceCount++, t) : (t = this.aliases[e] = this.source.wrap(e), t.aliasable = !0, t.referenceCount = 1, t)
                    },
                    setupHelper: function(e, t, n) {
                        var i = [],
                            r = this.setupHelperArgs(t, e, i, n),
                            o = this.nameLookup("helpers", t, "helper"),
                            a = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : {}");
                        return {
                            params: i,
                            paramsInit: r,
                            name: o,
                            callParams: [a].concat(i)
                        }
                    },
                    setupParams: function(e, t, n) {
                        var i = {},
                            r = [],
                            o = [],
                            a = [],
                            s = !n,
                            l = void 0;
                        s && (n = []), i.name = this.quotedString(e), i.hash = this.popStack(), this.trackIds && (i.hashIds = this.popStack()), this.stringParams && (i.hashTypes = this.popStack(), i.hashContexts = this.popStack());
                        var c = this.popStack(),
                            u = this.popStack();
                        (u || c) && (i.fn = u || "container.noop", i.inverse = c || "container.noop");
                        for (var d = t; d--;) l = this.popStack(), n[d] = l, this.trackIds && (a[d] = this.popStack()), this.stringParams && (o[d] = this.popStack(), r[d] = this.popStack());
                        return s && (i.args = this.source.generateArray(n)), this.trackIds && (i.ids = this.source.generateArray(a)), this.stringParams && (i.types = this.source.generateArray(o), i.contexts = this.source.generateArray(r)), this.options.data && (i.data = "data"), this.useBlockParams && (i.blockParams = "blockParams"), i
                    },
                    setupHelperArgs: function(e, t, n, i) {
                        var r = this.setupParams(e, t, n);
                        return r = this.objectLiteral(r), i ? (this.useRegister("options"), n.push("options"), ["options=", r]) : n ? (n.push(r), "") : r
                    }
                },
                function() {
                    for (var e = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), t = r.RESERVED_WORDS = {}, n = 0, i = e.length; i > n; n++) t[e[n]] = !0
                }(), r.isValidJavaScriptVariableName = function(e) {
                    return !r.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
                }, t["default"] = r, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e, t, n) {
                if (o.isArray(e)) {
                    for (var i = [], r = 0, a = e.length; a > r; r++) i.push(t.wrap(e[r], n));
                    return i
                }
                return "boolean" == typeof e || "number" == typeof e ? e + "" : e
            }

            function r(e) {
                this.srcFile = e, this.source = []
            }
            t.__esModule = !0;
            var o = n(5),
                a = void 0;
            try {} catch (s) {}
            a || (a = function(e, t, n, i) {
                this.src = "", i && this.add(i)
            }, a.prototype = {
                add: function(e) {
                    o.isArray(e) && (e = e.join("")), this.src += e
                },
                prepend: function(e) {
                    o.isArray(e) && (e = e.join("")), this.src = e + this.src
                },
                toStringWithSourceMap: function() {
                    return {
                        code: this.toString()
                    }
                },
                toString: function() {
                    return this.src
                }
            }), r.prototype = {
                isEmpty: function() {
                    return !this.source.length
                },
                prepend: function(e, t) {
                    this.source.unshift(this.wrap(e, t))
                },
                push: function(e, t) {
                    this.source.push(this.wrap(e, t))
                },
                merge: function() {
                    var e = this.empty();
                    return this.each(function(t) {
                        e.add(["  ", t, "\n"])
                    }), e
                },
                each: function(e) {
                    for (var t = 0, n = this.source.length; n > t; t++) e(this.source[t])
                },
                empty: function() {
                    var e = this.currentLocation || {
                        start: {}
                    };
                    return new a(e.start.line, e.start.column, this.srcFile)
                },
                wrap: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
                        start: {}
                    } : arguments[1];
                    return e instanceof a ? e : (e = i(e, this, t), new a(t.start.line, t.start.column, this.srcFile, e))
                },
                functionCall: function(e, t, n) {
                    return n = this.generateList(n), this.wrap([e, t ? "." + t + "(" : "(", n, ")"])
                },
                quotedString: function(e) {
                    return '"' + (e + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
                },
                objectLiteral: function(e) {
                    var t = [];
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = i(e[n], this);
                            "undefined" !== r && t.push([this.quotedString(n), ":", r])
                        }
                    var o = this.generateList(t);
                    return o.prepend("{"), o.add("}"), o
                },
                generateList: function(e) {
                    for (var t = this.empty(), n = 0, r = e.length; r > n; n++) n && t.add(","), t.add(i(e[n], this));
                    return t
                },
                generateArray: function(e) {
                    var t = this.generateList(e);
                    return t.prepend("["), t.add("]"), t
                }
            }, t["default"] = r, e.exports = t["default"]
        }])
    });
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            n = _self.Prism = {
                util: {
                    encode: function(e) {
                        return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function(e) {
                        var t = n.util.type(e);
                        switch (t) {
                            case "Object":
                                var i = {};
                                for (var r in e) e.hasOwnProperty(r) && (i[r] = n.util.clone(e[r]));
                                return i;
                            case "Array":
                                return e.map && e.map(function(e) {
                                    return n.util.clone(e)
                                })
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var i = n.util.clone(n.languages[e]);
                        for (var r in t) i[r] = t[r];
                        return i
                    },
                    insertBefore: function(e, t, i, r) {
                        r = r || n.languages;
                        var o = r[e];
                        if (2 == arguments.length) {
                            i = arguments[1];
                            for (var a in i) i.hasOwnProperty(a) && (o[a] = i[a]);
                            return o
                        }
                        var s = {};
                        for (var l in o)
                            if (o.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                s[l] = o[l]
                            }
                        return n.languages.DFS(n.languages, function(t, n) {
                            n === r[e] && t != e && (this[t] = s)
                        }), r[e] = s
                    },
                    DFS: function(e, t, i, r) {
                        r = r || {};
                        for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r)))
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    var i = {
                        callback: t,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", i);
                    for (var r, o = i.elements || document.querySelectorAll(i.selector), a = 0; r = o[a++];) n.highlightElement(r, e === !0, i.callback)
                },
                highlightElement: function(t, i, r) {
                    for (var o, a, s = t; s && !e.test(s.className);) s = s.parentNode;
                    s && (o = (s.className.match(e) || [, ""])[1].toLowerCase(), a = n.languages[o]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, s = t.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var l = t.textContent,
                        c = {
                            element: t,
                            language: o,
                            grammar: a,
                            code: l
                        };
                    if (n.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return void n.hooks.run("complete", c);
                    if (n.hooks.run("before-highlight", c), i && _self.Worker) {
                        var u = new Worker(n.filename);
                        u.onmessage = function(e) {
                            c.highlightedCode = e.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                        }, u.postMessage(JSON.stringify({
                            language: c.language,
                            code: c.code,
                            immediateClose: !0
                        }))
                    } else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                },
                highlight: function(e, t, r) {
                    var o = n.tokenize(e, t);
                    return i.stringify(n.util.encode(o), r)
                },
                tokenize: function(e, t) {
                    var i = n.Token,
                        r = [e],
                        o = t.rest;
                    if (o) {
                        for (var a in o) t[a] = o[a];
                        delete t.rest
                    }
                    e: for (var a in t)
                        if (t.hasOwnProperty(a) && t[a]) {
                            var s = t[a];
                            s = "Array" === n.util.type(s) ? s : [s];
                            for (var l = 0; l < s.length; ++l) {
                                var c = s[l],
                                    u = c.inside,
                                    d = !!c.lookbehind,
                                    p = !!c.greedy,
                                    h = 0,
                                    f = c.alias;
                                if (p && !c.pattern.global) {
                                    var m = c.pattern.toString().match(/[imuy]*$/)[0];
                                    c.pattern = RegExp(c.pattern.source, m + "g")
                                }
                                c = c.pattern || c;
                                for (var g = 0, v = 0; g < r.length; v += (r[g].matchedStr || r[g]).length, ++g) {
                                    var y = r[g];
                                    if (r.length > e.length) break e;
                                    if (!(y instanceof i)) {
                                        c.lastIndex = 0;
                                        var b = c.exec(y),
                                            w = 1;
                                        if (!b && p && g != r.length - 1) {
                                            if (c.lastIndex = v, b = c.exec(e), !b) break;
                                            for (var _ = b.index + (d ? b[1].length : 0), x = b.index + b[0].length, C = g, S = v, k = r.length; k > C && x > S; ++C) S += (r[C].matchedStr || r[C]).length, _ >= S && (++g, v = S);
                                            if (r[g] instanceof i || r[C - 1].greedy) continue;
                                            w = C - g, y = e.slice(v, S), b.index -= v
                                        }
                                        if (b) {
                                            d && (h = b[1].length);
                                            var _ = b.index + h,
                                                b = b[0].slice(h),
                                                x = _ + b.length,
                                                E = y.slice(0, _),
                                                T = y.slice(x),
                                                N = [g, w];
                                            E && N.push(E);
                                            var A = new i(a, u ? n.tokenize(b, u) : b, f, b, p);
                                            N.push(A), T && N.push(T), Array.prototype.splice.apply(r, N)
                                        }
                                    }
                                }
                            }
                        }
                    return r
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var i = n.hooks.all;
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    run: function(e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length)
                            for (var r, o = 0; r = i[o++];) r(t)
                    }
                }
            },
            i = n.Token = function(e, t, n, i, r) {
                this.type = e, this.content = t, this.alias = n, this.matchedStr = i || null, this.greedy = !!r
            };
        if (i.stringify = function(e, t, r) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function(n) {
                    return i.stringify(n, t, e)
                }).join("");
                var o = {
                    type: e.type,
                    content: i.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if ("comment" == o.type && (o.attributes.spellcheck = "true"), e.alias) {
                    var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(o.classes, a)
                }
                n.hooks.run("wrap", o);
                var s = "";
                for (var l in o.attributes) s += (s ? " " : "") + l + '="' + (o.attributes[l] || "") + '"';
                return "<" + o.tag + ' class="' + o.classes.join(" ") + '" ' + s + ">" + o.content + "</" + o.tag + ">"
            }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                i = t.language,
                r = t.code,
                o = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[i], i)), o && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /[=>"']/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript, Prism.languages.abap = {
    comment: /^\*.*/m,
    string: /(`|')(\\?.)*?\1/m,
    "string-template": {
        pattern: /(\||\})(\\?.)*?(?=\||\{)/,
        lookbehind: !0,
        alias: "string"
    },
    "eol-comment": {
        pattern: /(^|\s)".*/m,
        lookbehind: !0,
        alias: "comment"
    },
    keyword: {
        pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
        lookbehind: !0
    },
    number: /\b\d+\b/,
    operator: {
        pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
        lookbehind: !0
    },
    "string-operator": {
        pattern: /(\s)&&?(?=\s)/,
        lookbehind: !0,
        alias: "keyword"
    },
    "token-operator": [{
        pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
        lookbehind: !0,
        alias: "punctuation"
    }, {
        pattern: /[|{}]/,
        alias: "punctuation"
    }],
    punctuation: /[,.:()]/
}, Prism.languages.actionscript = Prism.languages.extend("javascript", {
    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
}), Prism.languages.actionscript["class-name"].alias = "function", Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", {
    xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\\1|\\?(?!\1)[\w\W])*\2)*\s*\/?>/,
        lookbehind: !0,
        inside: {
            rest: Prism.languages.markup
        }
    }
}), Prism.languages.ada = {
    comment: /--.*/,
    string: /"(?:""|[^"\r\f\n])*"/i,
    number: [{
        pattern: /\b[0-9](?:_?[0-9])*#[0-9A-F](?:_?[0-9A-F])*(?:\.[0-9A-F](?:_?[0-9A-F])*)?#(?:E[+-]?[0-9](?:_?[0-9])*)?/i
    }, {
        pattern: /\b[0-9](?:_?[0-9])*(?:\.[0-9](?:_?[0-9])*)?(?:E[+-]?[0-9](?:_?[0-9])*)?\b/i
    }],
    "attr-name": /\b'\w+/i,
    keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
    "boolean": /\b(?:true|false)\b/i,
    operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
    punctuation: /\.\.?|[,;():]/,
    "char": /'.'/,
    variable: /\b[a-z](?:[_a-z\d])*\b/i
}, Prism.languages.apacheconf = {
    comment: /#.*/,
    "directive-inline": {
        pattern: /^(\s*)\b(AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
        lookbehind: !0,
        alias: "property"
    },
    "directive-block": {
        pattern: /<\/?\b(AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
        inside: {
            "directive-block": {
                pattern: /^<\/?\w+/,
                inside: {
                    punctuation: /^<\/?/
                },
                alias: "tag"
            },
            "directive-block-parameter": {
                pattern: /.*[^>]/,
                inside: {
                    punctuation: /:/,
                    string: {
                        pattern: /("|').*\1/,
                        inside: {
                            variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/
                        }
                    }
                },
                alias: "attr-value"
            },
            punctuation: />/
        },
        alias: "tag"
    },
    "directive-flags": {
        pattern: /\[(\w,?)+\]/,
        alias: "keyword"
    },
    string: {
        pattern: /("|').*\1/,
        inside: {
            variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/
        }
    },
    variable: /(\$|%)\{?(\w\.?(\+|\-|:)?)+\}?/,
    regex: /\^?.*\$|\^.*\$?/
}, Prism.languages.apl = {
    comment: /(?:\u235d|#[! ]).*$/m,
    string: /'(?:[^'\r\n]|'')*'/,
    number: /\xaf?(?:\d*\.?\d+(?:e[+\xaf]?\d+)?|\xaf|\u221e)(?:j\xaf?(?:\d*\.?\d+(?:e[\+\xaf]?\d+)?|\xaf|\u221e))?/i,
    statement: /:[A-Z][a-z][A-Za-z]*\b/,
    "system-function": {
        pattern: /\u2395[A-Z]+/i,
        alias: "function"
    },
    constant: /[\u236c\u233e#\u2395\u235e]/,
    "function": /[-+\xd7\xf7\u2308\u230a\u2223|\u2373?*\u235f\u25cb!\u2339<\u2264=>\u2265\u2260\u2261\u2262\u220a\u2377\u222a\u2229~\u2228\u2227\u2371\u2372\u2374,\u236a\u233d\u2296\u2349\u2191\u2193\u2282\u2283\u2337\u234b\u2352\u22a4\u22a5\u2355\u234e\u22a3\u22a2\u2341\u2342\u2248\u236f\u2197\xa4\u2192]/,
    "monadic-operator": {
        pattern: /[\\\/\u233f\u2340\xa8\u2368\u2336&\u2225]/,
        alias: "operator"
    },
    "dyadic-operator": {
        pattern: /[.\u2363\u2360\u2364\u2218\u2338]/,
        alias: "operator"
    },
    assignment: {
        pattern: /\u2190/,
        alias: "keyword"
    },
    punctuation: /[\[;\]()\u25c7\u22c4]/,
    dfn: {
        pattern: /[{}\u237a\u2375\u2376\u2379\u2207\u236b:]/,
        alias: "builtin"
    }
}, Prism.languages.applescript = {
    comment: [/\(\*(?:\(\*[\w\W]*?\*\)|[\w\W])*?\*\)/, /--.+/, /#.+/],
    string: /"(?:\\?.)*?"/,
    number: /\b-?\d*\.?\d+([Ee]-?\d+)?\b/,
    operator: [/[&=\u2260\u2264\u2265*+\-\/\xf7^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/],
    keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
    "class": {
        pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
        alias: "builtin"
    },
    punctuation: /[{}():,\xac\xab\xbb\u300a\u300b]/
}, ! function(e) {
    var t = {
        pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
        lookbehind: !0,
        inside: {
            quoted: {
                pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
                inside: {
                    punctuation: /^[$`]|[$`]$/
                }
            },
            interpreted: {
                pattern: /'(?:[^'\\]|\\.)*'/,
                inside: {
                    punctuation: /^'|'$/
                }
            },
            string: /"(?:[^"\\]|\\.)*"/,
            variable: /\w+(?==)/,
            punctuation: /^\[|\]$|,/,
            operator: /=/,
            "attr-value": /(?!^\s+$).+/
        }
    };
    e.languages.asciidoc = {
        "comment-block": {
            pattern: /^(\/{4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1/m,
            alias: "comment"
        },
        table: {
            pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
            inside: {
                specifiers: {
                    pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
                    alias: "attr-value"
                },
                punctuation: {
                    pattern: /(^|[^\\])[|!]=*/,
                    lookbehind: !0
                }
            }
        },
        "passthrough-block": {
            pattern: /^(\+{4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1$/m,
            inside: {
                punctuation: /^\++|\++$/
            }
        },
        "literal-block": {
            pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1$/m,
            inside: {
                punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
            }
        },
        "other-block": {
            pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?\1$/m,
            inside: {
                punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
            }
        },
        "list-punctuation": {
            pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
            lookbehind: !0,
            alias: "punctuation"
        },
        "list-label": {
            pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
            lookbehind: !0,
            alias: "symbol"
        },
        "indented-block": {
            pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
            lookbehind: !0
        },
        comment: /^\/\/.*/m,
        title: {
            pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
            alias: "important",
            inside: {
                punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
            }
        },
        "attribute-entry": {
            pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
            alias: "tag"
        },
        attributes: t,
        hr: {
            pattern: /^'{3,}$/m,
            alias: "punctuation"
        },
        "page-break": {
            pattern: /^<{3,}$/m,
            alias: "punctuation"
        },
        admonition: {
            pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
            alias: "keyword"
        },
        callout: [{
            pattern: /(^[ \t]*)<?\d*>/m,
            lookbehind: !0,
            alias: "symbol"
        }, {
            pattern: /<\d+>/,
            alias: "symbol"
        }],
        macro: {
            pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
            inside: {
                "function": /^[a-z\d-]+(?=:)/,
                punctuation: /^::?/,
                attributes: {
                    pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                    inside: t.inside
                }
            }
        },
        inline: {
            pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?: ['`]|.)+?(?:(?:\r?\n|\r)(?: ['`]|.)+?)*['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
            lookbehind: !0,
            inside: {
                attributes: t,
                url: {
                    pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                    inside: {
                        punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
                    }
                },
                "attribute-ref": {
                    pattern: /^\{.+\}$/,
                    inside: {
                        variable: {
                            pattern: /(^\{)[a-z\d,+_-]+/,
                            lookbehind: !0
                        },
                        operator: /^[=?!#%@$]|!(?=[:}])/,
                        punctuation: /^\{|\}$|::?/
                    }
                },
                italic: {
                    pattern: /^(['_])[\s\S]+\1$/,
                    inside: {
                        punctuation: /^(?:''?|__?)|(?:''?|__?)$/
                    }
                },
                bold: {
                    pattern: /^\*[\s\S]+\*$/,
                    inside: {
                        punctuation: /^\*\*?|\*\*?$/
                    }
                },
                punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
            }
        },
        replacement: {
            pattern: /\((?:C|TM|R)\)/,
            alias: "builtin"
        },
        entity: /&#?[\da-z]{1,8};/i,
        "line-continuation": {
            pattern: /(^| )\+$/m,
            lookbehind: !0,
            alias: "punctuation"
        }
    }, t.inside.interpreted.inside.rest = {
        macro: e.languages.asciidoc.macro,
        inline: e.languages.asciidoc.inline,
        replacement: e.languages.asciidoc.replacement,
        entity: e.languages.asciidoc.entity
    }, e.languages.asciidoc["passthrough-block"].inside.rest = {
        macro: e.languages.asciidoc.macro
    }, e.languages.asciidoc["literal-block"].inside.rest = {
        callout: e.languages.asciidoc.callout
    }, e.languages.asciidoc.table.inside.rest = {
        "comment-block": e.languages.asciidoc["comment-block"],
        "passthrough-block": e.languages.asciidoc["passthrough-block"],
        "literal-block": e.languages.asciidoc["literal-block"],
        "other-block": e.languages.asciidoc["other-block"],
        "list-punctuation": e.languages.asciidoc["list-punctuation"],
        "indented-block": e.languages.asciidoc["indented-block"],
        comment: e.languages.asciidoc.comment,
        title: e.languages.asciidoc.title,
        "attribute-entry": e.languages.asciidoc["attribute-entry"],
        attributes: e.languages.asciidoc.attributes,
        hr: e.languages.asciidoc.hr,
        "page-break": e.languages.asciidoc["page-break"],
        admonition: e.languages.asciidoc.admonition,
        "list-label": e.languages.asciidoc["list-label"],
        callout: e.languages.asciidoc.callout,
        macro: e.languages.asciidoc.macro,
        inline: e.languages.asciidoc.inline,
        replacement: e.languages.asciidoc.replacement,
        entity: e.languages.asciidoc.entity,
        "line-continuation": e.languages.asciidoc["line-continuation"]
    }, e.languages.asciidoc["other-block"].inside.rest = {
        table: e.languages.asciidoc.table,
        "list-punctuation": e.languages.asciidoc["list-punctuation"],
        "indented-block": e.languages.asciidoc["indented-block"],
        comment: e.languages.asciidoc.comment,
        "attribute-entry": e.languages.asciidoc["attribute-entry"],
        attributes: e.languages.asciidoc.attributes,
        hr: e.languages.asciidoc.hr,
        "page-break": e.languages.asciidoc["page-break"],
        admonition: e.languages.asciidoc.admonition,
        "list-label": e.languages.asciidoc["list-label"],
        macro: e.languages.asciidoc.macro,
        inline: e.languages.asciidoc.inline,
        replacement: e.languages.asciidoc.replacement,
        entity: e.languages.asciidoc.entity,
        "line-continuation": e.languages.asciidoc["line-continuation"]
    }, e.languages.asciidoc.title.inside.rest = {
        macro: e.languages.asciidoc.macro,
        inline: e.languages.asciidoc.inline,
        replacement: e.languages.asciidoc.replacement,
        entity: e.languages.asciidoc.entity
    }, e.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    })
}(Prism), Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive tag": {
        pattern: /<%\s*@.*%>/i,
        inside: {
            "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
            rest: Prism.languages.markup.tag.inside
        }
    },
    "directive tag": {
        pattern: /<%.*%>/i,
        inside: {
            "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
            rest: Prism.languages.csharp
        }
    }
}), Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, Prism.languages.insertBefore("inside", "punctuation", {
    "directive tag": Prism.languages.aspnet["directive tag"]
}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {
    "asp comment": /<%--[\w\W]*?--%>/
}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp script": {
        pattern: /(<script(?=.*runat=['"]?server['"]?)[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.csharp || {}
    }
}), Prism.languages.autoit = {
    comment: [/;.*/, {
        pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
        lookbehind: !0
    }],
    url: {
        pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
        lookbehind: !0
    },
    string: {
        pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
        inside: {
            variable: /([%$@])\w+\1/
        }
    },
    directive: {
        pattern: /(^\s*)#\w+/m,
        lookbehind: !0,
        alias: "keyword"
    },
    "function": /\b\w+(?=\()/,
    variable: /[$@]\w+/,
    keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    "boolean": /\b(?:True|False)\b/i,
    operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
    punctuation: /[\[\]().,:]/
}, Prism.languages.autohotkey = {
    comment: {
        pattern: /(^[^";\n]*("[^"\n]*?"[^"\n]*?)*)(;.*$|^\s*\/\*[\s\S]*\n\*\/)/m,
        lookbehind: !0
    },
    string: /"(([^"\n\r]|"")*)"/m,
    "function": /[^\(\); \t,\n\+\*\-=\?>:\\\/<&%\[\]]+?(?=\()/m,
    tag: /^[ \t]*[^\s:]+?(?=:(?:[^:]|$))/m,
    variable: /%\w+%/,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    operator: /\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,
    punctuation: /[\{}[\]\(\):,]/,
    "boolean": /\b(true|false)\b/,
    selector: /\b(AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,
    constant: /\b(a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_formatfloat|a_formatinteger|a_gui|a_guievent|a_guicontrol|a_guicontrolevent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|programfiles|a_programfiles|a_programs|a_programscommon|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel)\b/i,
    builtin: /\b(abs|acos|asc|asin|atan|ceil|chr|class|cos|dllcall|exp|fileexist|Fileopen|floor|il_add|il_create|il_destroy|instr|substr|isfunc|islabel|IsObject|ln|log|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|onmessage|numget|numput|registercallback|regexmatch|regexreplace|round|sin|tan|sqrt|strlen|sb_seticon|sb_setparts|sb_settext|strsplit|tv_add|tv_delete|tv_getchild|tv_getcount|tv_getnext|tv_get|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__New|__Call|__Get|__Set)\b/i,
    symbol: /\b(alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,
    important: /#\b(AllowSameLineComments|ClipboardTimeout|CommentFlag|ErrorStdOut|EscapeChar|HotkeyInterval|HotkeyModifierTimeout|Hotstring|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Include|IncludeAgain|InstallKeybdHook|InstallMouseHook|KeyHistory|LTrim|MaxHotkeysPerInterval|MaxMem|MaxThreads|MaxThreadsBuffer|MaxThreadsPerHotkey|NoEnv|NoTrayIcon|Persistent|SingleInstance|UseHook|WinActivateForce)\b/i,
    keyword: /\b(Abort|AboveNormal|Add|ahk_class|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Region|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|TryAgain|Type|UnCheck|underline|Unicode|Unlock|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i
}, ! function(e) {
    var t = {
        variable: [{
            pattern: /\$?\(\([\w\W]+?\)\)/,
            inside: {
                variable: [{
                    pattern: /(^\$\(\([\w\W]+)\)\)/,
                    lookbehind: !0
                }, /^\$\(\(/],
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            inside: {
                variable: /^\$\(|^`|\)$|`$/
            }
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
    };
    e.languages.bash = {
        shebang: {
            pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
            alias: "important"
        },
        comment: {
            pattern: /(^|[^"{\\])#.*/,
            lookbehind: !0
        },
        string: [{
            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, {
            pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
            greedy: !0,
            inside: t
        }],
        variable: t.variable,
        "function": {
            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        "boolean": {
            pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var n = t.variable[1].inside;
    n["function"] = e.languages.bash["function"], n.keyword = e.languages.bash.keyword, n["boolean"] = e.languages.bash["boolean"], n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation
}(Prism), Prism.languages.basic = {
    string: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
    comment: {
        pattern: /(?:!|REM\b).+/i,
        inside: {
            keyword: /^REM/i
        }
    },
    number: /(?:\b|\B[.-])(?:\d+\.?\d*)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    "function": /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
}, ! function(e) {
    var t = /%%?[~:\w]+%?|!\S+!/,
        n = {
            pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
            alias: "attr-name",
            inside: {
                punctuation: /:/
            }
        },
        i = /"[^"]*"/,
        r = /(?:\b|-)\d+\b/;
    e.languages.batch = {
        comment: [/^::.*/m, {
            pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0
        }],
        label: {
            pattern: /^:.*/m,
            alias: "property"
        },
        command: [{
            pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
            lookbehind: !0,
            inside: {
                keyword: /^for\b|\b(?:in|do)\b/i,
                string: i,
                parameter: n,
                variable: t,
                number: r,
                punctuation: /[()',]/
            }
        }, {
            pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
            lookbehind: !0,
            inside: {
                keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
                string: i,
                parameter: n,
                variable: t,
                number: r,
                operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
            }
        }, {
            pattern: /((?:^|[&()])[ \t]*)else\b/im,
            lookbehind: !0,
            inside: {
                keyword: /^else\b/i
            }
        }, {
            pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            inside: {
                keyword: /^set\b/i,
                string: i,
                parameter: n,
                variable: [t, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
                number: r,
                operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
                punctuation: /[()',]/
            }
        }, {
            pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            inside: {
                keyword: /^\w+\b/i,
                string: i,
                parameter: n,
                label: {
                    pattern: /(^\s*):\S+/m,
                    lookbehind: !0,
                    alias: "property"
                },
                variable: t,
                number: r,
                operator: /\^/
            }
        }],
        operator: /[&@]/,
        punctuation: /[()']/
    }
}(Prism), Prism.languages.c = Prism.languages.extend("clike", {
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
        lookbehind: !0,
        alias: "property",
        inside: {
            string: {
                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
                lookbehind: !0
            },
            directive: {
                pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    },
    constant: /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
}), delete Prism.languages.c["class-name"], delete Prism.languages.c["boolean"], Prism.languages.brainfuck = {
    pointer: {
        pattern: /<|>/,
        alias: "keyword"
    },
    increment: {
        pattern: /\+/,
        alias: "inserted"
    },
    decrement: {
        pattern: /-/,
        alias: "deleted"
    },
    branching: {
        pattern: /\[|\]/,
        alias: "important"
    },
    operator: /[.,]/,
    comment: /\S+/
}, Prism.languages.bro = {
    comment: {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: !0,
        inside: {
            italic: /\b(TODO|FIXME|XXX)\b/
        }
    },
    string: {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "boolean": /\b(T|F)\b/,
    "function": {
        pattern: /(?:function|hook|event) [a-zA-Z0-9_]+(::[a-zA-Z0-9_]+)?/,
        inside: {
            keyword: /^(?:function|hook|event)/
        }
    },
    variable: {
        pattern: /(?:global|local) [a-zA-Z0-9_]+/i,
        inside: {
            keyword: /(?:global|local)/
        }
    },
    builtin: /(@(load(-(sigs|plugin))?|unload|prefixes|ifn?def|else|(end)?if|DIR|FILENAME))|(&?(redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,
    constant: {
        pattern: /const [a-zA-Z0-9_]+/i,
        inside: {
            keyword: /const/
        }
    },
    keyword: /\b(break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.bison = Prism.languages.extend("c", {}), Prism.languages.insertBefore("bison", "comment", {
    bison: {
        pattern: /^[\s\S]*?%%[\s\S]*?%%/,
        inside: {
            c: {
                pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
                inside: {
                    delimiter: {
                        pattern: /^%?\{|%?\}$/,
                        alias: "punctuation"
                    },
                    "bison-variable": {
                        pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
                        alias: "variable",
                        inside: {
                            punctuation: /<|>/
                        }
                    },
                    rest: Prism.languages.c
                }
            },
            comment: Prism.languages.c.comment,
            string: Prism.languages.c.string,
            property: /\S+(?=:)/,
            keyword: /%\w+/,
            number: {
                pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
                lookbehind: !0
            },
            punctuation: /%[%?]|[|:;\[\]<>]/
        }
    }
}), Prism.languages.csharp = Prism.languages.extend("clike", {
    keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
    string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
    number: /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
}), Prism.languages.insertBefore("csharp", "keyword", {
    "generic-method": {
        pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
        alias: "function",
        inside: {
            keyword: Prism.languages.csharp.keyword,
            punctuation: /[<>(),.:]/
        }
    },
    preprocessor: {
        pattern: /(^\s*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {
            directive: {
                pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }
}), Prism.languages.cpp = Prism.languages.extend("c", {
    keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    "boolean": /\b(true|false)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
}), Prism.languages.insertBefore("cpp", "keyword", {
    "class-name": {
        pattern: /(class\s+)[a-z0-9_]+/i,
        lookbehind: !0
    }
}), ! function(e) {
    var t = /#(?!\{).+/,
        n = {
            pattern: /#\{[^}]+\}/,
            alias: "variable"
        };
    e.languages.coffeescript = e.languages.extend("javascript", {
        comment: t,
        string: [{
            pattern: /'(?:\\?[^\\])*?'/,
            greedy: !0
        }, {
            pattern: /"(?:\\?[^\\])*?"/,
            greedy: !0,
            inside: {
                interpolation: n
            }
        }],
        keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
        }
    }), e.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
        },
        "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
                comment: t,
                interpolation: n
            }
        }
    }), e.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
            pattern: /`(?:\\?[\s\S])*?`/,
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                },
                rest: e.languages.javascript
            }
        },
        "multiline-string": [{
            pattern: /'''[\s\S]*?'''/,
            greedy: !0,
            alias: "string"
        }, {
            pattern: /"""[\s\S]*?"""/,
            greedy: !0,
            alias: "string",
            inside: {
                interpolation: n
            }
        }]
    }), e.languages.insertBefore("coffeescript", "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/
    }), delete e.languages.coffeescript["template-string"]
}(Prism), ! function(e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: /#(?!\{[^\r\n]*?\}).*/,
        keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
    });
    var t = {
        pattern: /#\{[^}]+\}/,
        inside: {
            delimiter: {
                pattern: /^#\{|\}$/,
                alias: "tag"
            },
            rest: e.util.clone(e.languages.ruby)
        }
    };
    e.languages.insertBefore("ruby", "keyword", {
        regex: [{
            pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
            inside: {
                interpolation: t
            }
        }, {
            pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0
        }],
        variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
        symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
    }), e.languages.insertBefore("ruby", "number", {
        builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
        constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
    }), e.languages.ruby.string = [{
        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
        inside: {
            interpolation: t
        }
    }, {
        pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
        inside: {
            interpolation: t
        }
    }]
}(Prism), Prism.languages.css.selector = {
    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
    inside: {
        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        "pseudo-class": /:[-\w]+(?:\(.*\))?/,
        "class": /\.[-:\.\w]+/,
        id: /#[-:\.\w]+/,
        attribute: /\[[^\]]+\]/
    }
}, Prism.languages.insertBefore("css", "function", {
    hexcode: /#[\da-f]{3,6}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%\.]+/
}), Prism.languages.d = Prism.languages.extend("clike", {
    string: [/\b[rx]"(\\.|[^\\"])*"[cwd]?/, /\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/, /\bq"([_a-zA-Z][_a-zA-Z\d]*)(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\1"/, /\bq"(.)[\s\S]*?\1"/, /'(?:\\'|\\?[^']+)'/, /(["`])(\\.|(?!\1)[^\\])*\1[cwd]?/],
    number: [/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]*/i, {
        pattern: /((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]*/i,
        lookbehind: !0
    }],
    keyword: /\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,
    operator: /\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/
}), Prism.languages.d.comment = [/^\s*#!.+/, {
    pattern: /(^|[^\\])\/\+(?:\/\+[\w\W]*?\+\/|[\w\W])*?\+\//,
    lookbehind: !0
}].concat(Prism.languages.d.comment), Prism.languages.insertBefore("d", "comment", {
    "token-string": {
        pattern: /\bq\{(?:|\{[^}]*\}|[^}])*\}/,
        alias: "string"
    }
}), Prism.languages.insertBefore("d", "keyword", {
    property: /\B@\w*/
}), Prism.languages.insertBefore("d", "function", {
    register: {
        pattern: /\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,
        alias: "variable"
    }
}), Prism.languages.dart = Prism.languages.extend("clike", {
    string: [/r?("""|''')[\s\S]*?\1/, /r?("|')(\\?.)*?\1/],
    keyword: [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/],
    operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
}), Prism.languages.insertBefore("dart", "function", {
    metadata: {
        pattern: /@\w+/,
        alias: "symbol"
    }
}), Prism.languages.diff = {
    coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
    deleted: /^[-<].*$/m,
    inserted: /^[+>].*$/m,
    diff: {
        pattern: /^!(?!!).+$/m,
        alias: "important"
    }
}, Prism.languages.docker = {
    keyword: {
        pattern: /(^\s*)(?:ONBUILD|FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|COPY|VOLUME|USER|WORKDIR|CMD|LABEL|ENTRYPOINT)(?=\s)/im,
        lookbehind: !0
    },
    string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,
    comment: /#.*/,
    punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
}, Prism.languages.eiffel = {
    string: [/"([^[]*)\[[\s\S]+?\]\1"/, /"([^{]*)\{[\s\S]+?\}\1"/, /"(?:%\s+%|%"|.)*?"/],
    comment: /--.*/,
    "char": /'(?:%'|.)+?'/,
    keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
    "boolean": /\b(?:True|False)\b/i,
    number: [/\b0[xcb][\da-f](?:_*[\da-f])*\b/i, /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/],
    punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
    operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
}, Prism.languages.elixir = {
    comment: {
        pattern: /(^|[^#])#(?![{#]).*/m,
        lookbehind: !0
    },
    regex: /~[rR](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|[^}])+\}|<(?:\\>|[^>])+>)[uismxfr]*/,
    string: [{
        pattern: /~[cCsSwW](?:("""|'''|[\/|"'])(?:\\.|(?!\1)[^\\])+\1|\((?:\\\)|[^)])+\)|\[(?:\\\]|[^\]])+\]|\{(?:\\\}|#\{[^}]+\}|[^}])+\}|<(?:\\>|[^>])+>)[csa]?/,
        inside: {}
    }, {
        pattern: /("""|''')[\s\S]*?\1/,
        inside: {}
    }, {
        pattern: /("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        inside: {}
    }],
    atom: {
        pattern: /(^|[^:]):\w+/,
        lookbehind: !0,
        alias: "symbol"
    },
    "attr-name": /\w+:(?!:)/,
    capture: {
        pattern: /(^|[^&])&(?:[^&\s\d()][^\s()]*|(?=\())/,
        lookbehind: !0,
        alias: "function"
    },
    argument: {
        pattern: /(^|[^&])&\d+/,
        lookbehind: !0,
        alias: "variable"
    },
    attribute: {
        pattern: /@[\S]+/,
        alias: "variable"
    },
    number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,
    keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|exception|impl|module|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|require|rescue|try|unless|use|when)\b/,
    "boolean": /\b(?:true|false|nil)\b/,
    operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, {
        pattern: /([^<])<(?!<)/,
        lookbehind: !0
    }, {
        pattern: /([^>])>(?!>)/,
        lookbehind: !0
    }],
    punctuation: /<<|>>|[.,%\[\]{}()]/
}, Prism.languages.elixir.string.forEach(function(e) {
    e.inside = {
        interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "punctuation"
                },
                rest: Prism.util.clone(Prism.languages.elixir)
            }
        }
    }
}), Prism.languages.erlang = {
    comment: /%.+/,
    string: /"(?:\\?.)*?"/,
    "quoted-function": {
        pattern: /'(?:\\.|[^'\\])+'(?=\()/,
        alias: "function"
    },
    "quoted-atom": {
        pattern: /'(?:\\.|[^'\\])+'/,
        alias: "atom"
    },
    "boolean": /\b(?:true|false)\b/,
    keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
    number: [/\$\\?./, /\d+#[a-z0-9]+/i, /(?:\b|-)\d*\.?\d+([Ee][+-]?\d+)?\b/],
    "function": /\b[a-z][\w@]*(?=\()/,
    variable: {
        pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
        lookbehind: !0
    },
    operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, {
        pattern: /(^|[^<])<(?!<)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^>])>(?!>)/,
        lookbehind: !0
    }],
    atom: /\b[a-z][\w@]*/,
    punctuation: /[()[\]{}:;,.#|]|<<|>>/
}, Prism.languages.fsharp = Prism.languages.extend("clike", {
    comment: [{
        pattern: /(^|[^\\])\(\*[\w\W]*?\*\)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
    string: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\\1|\\?(?!\1)[\s\S])*\1)B?/,
    number: [/\b-?0x[\da-fA-F]+(un|lf|LF)?\b/, /\b-?0b[01]+(y|uy)?\b/, /\b-?(\d*\.?\d+|\d+\.)([fFmM]|[eE][+-]?\d+)?\b/, /\b-?\d+(y|uy|s|us|l|u|ul|L|UL|I)?\b/]
}), Prism.languages.insertBefore("fsharp", "keyword", {
    preprocessor: {
        pattern: /^[^\r\n\S]*#.*/m,
        alias: "property",
        inside: {
            directive: {
                pattern: /(\s*#)\b(else|endif|if|light|line|nowarn)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }
}), Prism.languages.fortran = {
    "quoted-number": {
        pattern: /[BOZ](['"])[A-F0-9]+\1/i,
        alias: "number"
    },
    string: {
        pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:\s*!.+(?:\r\n?|\n))?|(?!\1).)*(?:\1|&)/,
        inside: {
            comment: {
                pattern: /(&(?:\r\n?|\n)\s*)!.*/,
                lookbehind: !0
            }
        }
    },
    comment: /!.*/,
    "boolean": /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
    number: /(?:\b|[+-])(?:\d+(?:\.\d*)?|\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
    keyword: [/\b(?:INTEGER|REAL|DOUBLE ?PRECISION|COMPLEX|CHARACTER|LOGICAL)\b/i, /\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i, /\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i, /\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEWHERE|ELSEIF|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],
    operator: [/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.(?:EQ|NE|LT|LE|GT|GE|NOT|AND|OR|EQV|NEQV)\.|\.[A-Z]+\./i, {
        pattern: /(^|(?!\().)\/(?!\))/,
        lookbehind: !0
    }],
    punctuation: /\(\/|\/\)|[(),;:&]/
}, Prism.languages.gherkin = {
    pystring: {
        pattern: /("""|''')[\s\S]+?\1/,
        alias: "string"
    },
    comment: {
        pattern: /((^|\r?\n|\r)[ \t]*)#.*/,
        lookbehind: !0
    },
    tag: {
        pattern: /((^|\r?\n|\r)[ \t]*)@\S*/,
        lookbehind: !0
    },
    feature: {
        pattern: /((^|\r?\n|\r)[ \t]*)(Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Caracter\xedstica|Egenskab|Egenskap|Eiginleiki|Feature|F\u012b\u010da|Fitur|Fonctionnalit\xe9|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Func\u0163ionalitate|Func\u021bionalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalit\u0101te|Funkcionalnost|Funkcja|Funksie|Funktionalit\xe4t|Funktionalit\xe9it|Funzionalit\xe0|Hwaet|Hw\xe6t|Jellemz\u0151|Karakteristik|laH|Lastnost|Mak|Mogucnost|Mogu\u0107nost|Moznosti|Mo\u017enosti|OH HAI|Omadus|Ominaisuus|Osobina|\xd6zellik|perbogh|poQbogh malja'|Potrzeba biznesowa|Po\u017eadavek|Po\u017eiadavka|Pretty much|Qap|Qu'meH 'ut|Savyb\u0117|T\xednh n\u0103ng|Trajto|Vermo\xeb|Vlastnos\u0165|W\u0142a\u015bciwo\u015b\u0107|Zna\u010dilnost|\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1|\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1|\u041c\u043e\u0433\u0443\u045b\u043d\u043e\u0441\u0442|\u041c\u04e9\u043c\u043a\u0438\u043d\u043b\u0435\u043a|\u041e\u0441\u043e\u0431\u0438\u043d\u0430|\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e|\u04ae\u0437\u0435\u043d\u0447\u04d9\u043b\u0435\u043a\u043b\u0435\u043b\u0435\u043a|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442|\u0424\u0443\u043d\u043a\u0446\u0438\u044f|\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b|\u05ea\u05db\u05d5\u05e0\u05d4|\u062e\u0627\u0635\u064a\u0629|\u062e\u0635\u0648\u0635\u06cc\u062a|\u0635\u0644\u0627\u062d\u06cc\u062a|\u06a9\u0627\u0631\u0648\u0628\u0627\u0631 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a|\u0648\u0650\u06cc\u0698\u06af\u06cc|\u0930\u0942\u092a \u0932\u0947\u0916|\u0a16\u0a3e\u0a38\u0a40\u0a05\u0a24|\u0a28\u0a15\u0a36 \u0a28\u0a41\u0a39\u0a3e\u0a30|\u0a2e\u0a41\u0a39\u0a3e\u0a02\u0a26\u0a30\u0a3e|\u0c17\u0c41\u0c23\u0c2e\u0c41|\u0cb9\u0cc6\u0c9a\u0ccd\u0c9a\u0cb3|\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e32\u0e07\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08|\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16|\u0e42\u0e04\u0e23\u0e07\u0e2b\u0e25\u0e31\u0e01|\uae30\ub2a5|\u30d5\u30a3\u30fc\u30c1\u30e3|\u529f\u80fd|\u6a5f\u80fd):([^:]+(?:\r?\n|\r|$))*/,
        lookbehind: !0,
        inside: {
            important: {
                pattern: /(:)[^\r\n]+/,
                lookbehind: !0
            },
            keyword: /[^:\r\n]+:/
        }
    },
    scenario: {
        pattern: /((^|\r?\n|\r)[ \t]*)(Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|\xc6r|Agtergrond|All y'all|Antecedentes|Antecedents|Atbur\xf0ar\xe1s|Atbur\xf0ar\xe1sir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|B\u1ed1i c\u1ea3nh|Cefndir|Cenario|Cen\xe1rio|Cenario de Fundo|Cen\xe1rio de Fundo|Cenarios|Cen\xe1rios|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|D\xe6mi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delinea\xe7\xe3o do Cen\xe1rio|Dis is what went down|D\u1eef li\u1ec7u|Dyagram senaryo|Dyagram Senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cen\xe1rio|Examples|EXAMPLZ|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgat\xf3k\xf6nyv|Forgat\xf3k\xf6nyv v\xe1zlat|Fundo|Ge\xe7mi\u015f|ghantoH|Grundlage|Hannergrond|H\xe1tt\xe9r|Heave to|Istorik|Juhtumid|Keadaan|Khung k\u1ecbch b\u1ea3n|Khung t\xecnh hu\u1ed1ng|K\u1ecbch b\u1ea3n|Koncept|Konsep skenario|Kont\xe8ks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut|lut chovnatlh|lutmey|L\xfdsing Atbur\xf0ar\xe1sar|L\xfdsing D\xe6ma|Menggariskan Senario|MISHUN|MISHUN SRSLY|mo'|N\xe1\u010drt Scen\xe1ra|N\xe1\u010drt Sc\xe9n\xe1\u0159e|N\xe1\u010drt Scen\xe1ru|Oris scenarija|\xd6rnekler|Osnova|Osnova Scen\xe1ra|Osnova sc\xe9n\xe1\u0159e|Osnutek|Ozadje|Paraugs|Pavyzd\u017eiai|P\xe9ld\xe1k|Piem\u0113ri|Plan du sc\xe9nario|Plan du Sc\xe9nario|Plan senaryo|Plan Senaryo|Plang vum Szenario|Pozad\xed|Pozadie|Pozadina|Pr\xedklady|P\u0159\xedklady|Primer|Primeri|Primjeri|Przyk\u0142ady|Raamstsenaarium|Reckon it's like|Rerefons|Scen\xe1r|Sc\xe9n\xe1\u0159|Scenarie|Scenarij|Scenarijai|Scenarijaus \u0161ablonas|Scenariji|Scen\u0101rijs|Scen\u0101rijs p\u0113c parauga|Scenarijus|Scenario|Sc\xe9nario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se \xf0e|Se the|Se \xfee|Senario|Senaryo|Senaryo deskripsyon|Senaryo Deskripsyon|Senaryo tasla\u011f\u0131|Shiver me timbers|Situ\u0101cija|Situai|Situasie|Situasie Uiteensetting|Skenario|Skenario konsep|Skica|Structura scenariu|Structur\u0103 scenariu|Struktura scenarija|Stsenaarium|Swa|Swa hwaer swa|Swa hw\xe6r swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|T\xecnh hu\u1ed1ng|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo\-ho\-ho|You'll wanna|Za\u0142o\u017cenia|\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1|\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03b1|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf|\u03a5\u03c0\u03cc\u03b2\u03b1\u03b8\u03c1\u03bf|\u041a\u0435\u0440\u0435\u0448|\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442|\u041a\u043e\u043d\u0446\u0435\u043f\u0442|\u041c\u0438\u0441\u0430\u043b\u043b\u0430\u0440|\u041c\u0438\u0441\u043e\u043b\u043b\u0430\u0440|\u041e\u0441\u043d\u043e\u0432\u0430|\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0430|\u041f\u043e\u0437\u0430\u0434\u0438\u043d\u0430|\u041f\u0440\u0435\u0434\u0438\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438|\u041f\u0440\u0438\u043c\u0435\u0440|\u041f\u0440\u0438\u043c\u0435\u0440\u0438|\u041f\u0440\u0438\u043c\u0435\u0440\u044b|\u0420\u0430\u043c\u043a\u0430 \u043d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u043a\u0438\u0446\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0430|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u044e|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0441\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439\u043d\u044b\u04a3 \u0442\u04e9\u0437\u0435\u043b\u0435\u0448\u0435|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0438|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u043e|\u0421\u0446\u0435\u043d\u0430\u0440\u0456\u0439|\u0422\u0430\u0440\u0438\u0445|\u04ae\u0440\u043d\u04d9\u043a\u043b\u04d9\u0440|\u05d3\u05d5\u05d2\u05de\u05d0\u05d5\u05ea|\u05e8\u05e7\u05e2|\u05ea\u05d1\u05e0\u05d9\u05ea \u05ea\u05e8\u05d7\u05d9\u05e9|\u05ea\u05e8\u05d7\u05d9\u05e9|\u0627\u0644\u062e\u0644\u0641\u064a\u0629|\u0627\u0644\u06af\u0648\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648|\u0627\u0645\u062b\u0644\u0629|\u067e\u0633 \u0645\u0646\u0638\u0631|\u0632\u0645\u06cc\u0646\u0647|\u0633\u0646\u0627\u0631\u06cc\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648|\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0645\u062e\u0637\u0637|\u0645\u062b\u0627\u0644\u06cc\u06ba|\u0645\u0646\u0638\u0631 \u0646\u0627\u0645\u06d2 \u06a9\u0627 \u062e\u0627\u06a9\u06c1|\u0645\u0646\u0638\u0631\u0646\u0627\u0645\u06c1|\u0646\u0645\u0648\u0646\u0647 \u0647\u0627|\u0909\u0926\u093e\u0939\u0930\u0923|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f \u0930\u0942\u092a\u0930\u0947\u0916\u093e|\u092a\u0943\u0937\u094d\u0920\u092d\u0942\u092e\u093f|\u0a09\u0a26\u0a3e\u0a39\u0a30\u0a28\u0a3e\u0a02|\u0a2a\u0a1f\u0a15\u0a25\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a22\u0a3e\u0a02\u0a1a\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a30\u0a42\u0a2a \u0a30\u0a47\u0a16\u0a3e|\u0a2a\u0a3f\u0a1b\u0a4b\u0a15\u0a5c|\u0c09\u0c26\u0c3e\u0c39\u0c30\u0c23\u0c32\u0c41|\u0c15\u0c25\u0c28\u0c02|\u0c28\u0c47\u0c2a\u0c25\u0c4d\u0c2f\u0c02|\u0c38\u0c28\u0c4d\u0c28\u0c3f\u0c35\u0c47\u0c36\u0c02|\u0c89\u0ca6\u0cbe\u0cb9\u0cb0\u0ca3\u0cc6\u0c97\u0cb3\u0cc1|\u0c95\u0ca5\u0cbe\u0cb8\u0cbe\u0cb0\u0cbe\u0c82\u0cb6|\u0cb5\u0cbf\u0cb5\u0cb0\u0ca3\u0cc6|\u0cb9\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6\u0cb2\u0cc6|\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14|\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\ubc30\uacbd|\uc2dc\ub098\ub9ac\uc624|\uc2dc\ub098\ub9ac\uc624 \uac1c\uc694|\uc608|\u30b5\u30f3\u30d7\u30eb|\u30b7\u30ca\u30ea\u30aa|\u30b7\u30ca\u30ea\u30aa\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8|\u30c6\u30f3\u30d7\u30ec|\u4f8b|\u4f8b\u5b50|\u5267\u672c|\u5267\u672c\u5927\u7eb2|\u5287\u672c|\u5287\u672c\u5927\u7db1|\u573a\u666f|\u573a\u666f\u5927\u7eb2|\u5834\u666f|\u5834\u666f\u5927\u7db1|\u80cc\u666f):[^:\r\n]*/,
        lookbehind: !0,
        inside: {
            important: {
                pattern: /(:)[^\r\n]*/,
                lookbehind: !0
            },
            keyword: /[^:\r\n]+:/
        }
    },
    "table-body": {
        pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)+/,
        lookbehind: !0,
        inside: {
            outline: {
                pattern: /<[^>]+?>/,
                alias: "variable"
            },
            td: {
                pattern: /\s*[^\s|][^|]*/,
                alias: "string"
            },
            punctuation: /\|/
        }
    },
    "table-head": {
        pattern: /((?:\r?\n|\r)[ \t]*\|.+\|[^\r\n]*)/,
        inside: {
            th: {
                pattern: /\s*[^\s|][^|]*/,
                alias: "variable"
            },
            punctuation: /\|/
        }
    },
    atrule: {
        pattern: /((?:\r?\n|\r)[ \t]+)('ach|'a|'ej|7|a|A tak\xe9|A taktie\u017e|A tie\u017e|A z\xe1rove\u0148|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|At\xe8s|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Bi\u1ebft|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|C\xe2nd|Cando|Cand|Ce|Cuando|\u010ce|\xd0a \xf0e|\xd0a|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Da\u0163i fiind|Da\u021bi fiind|Dato|DEN|Den youse gotta|Dengan|De|Diberi|Diyelim ki|Donada|Donat|Donita\u0135o|Do|Dun|Duota|\xd0urh|Eeldades|Ef|E\u011fer ki|Entao|Ent\xe3o|Ent\xf3n|Entonces|En|Epi|E|\xc9s|Etant donn\xe9e|Etant donn\xe9|Et|\xc9tant donn\xe9es|\xc9tant donn\xe9e|\xc9tant donn\xe9|Etant donn\xe9es|Etant donn\xe9s|\xc9tant donn\xe9s|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Je\u015bli|Je\u017celi|Kadar|Kada|Kad|Kai|Kaj|Kdy\u017e|Ke\u010f|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|L\xe8 sa a|L\xe8|Logo|Lorsqu'<|Lorsque|m\xe4|Maar|Mais|Maj\u0105c|Majd|Maka|Manawa|Mas|Ma|Menawa|Men|Mutta|Nalikaning|Nalika|Nanging|N\xe5r|N\xe4r|Nato|Nh\u01b0ng|Niin|Njuk|O zaman|Og|Och|Oletetaan|Onda|Ond|Oraz|Pak|Pero|Per\xf2|Podano|Pokia\u013e|Pokud|Potem|Potom|Privzeto|Pryd|qaSDI'|Quando|Quand|Quan|S\xe5|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|\u015ei|\u0218i|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Th\xec|Thurh|Toda|Too right|ugeholl|Und|Un|V\xe0|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za p\u0159edpokladu|Zadani|Zadano|Zadan|Zadate|Zadato|Zak\u0142adaj\u0105c|Zaradi|Zatati|\xdea \xfee|\xdea|\xde\xe1|\xdeegar|\xdeurh|\u0391\u03bb\u03bb\u03ac|\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5|\u039a\u03b1\u03b9|\u038c\u03c4\u03b1\u03bd|\u03a4\u03cc\u03c4\u03b5|\u0410 \u0442\u0430\u043a\u043e\u0436|\u0410\u0433\u0430\u0440|\u0410\u043b\u0435|\u0410\u043b\u0438|\u0410\u043c\u043c\u043e|\u0410|\u04d8\u0433\u04d9\u0440|\u04d8\u0439\u0442\u0438\u043a|\u04d8\u043c\u043c\u0430|\u0411\u0438\u0440\u043e\u043a|\u0412\u0430|\u0412\u04d9|\u0414\u0430\u0434\u0435\u043d\u043e|\u0414\u0430\u043d\u043e|\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c|\u0415\u0441\u043b\u0438|\u0417\u0430\u0434\u0430\u0442\u0435|\u0417\u0430\u0434\u0430\u0442\u0438|\u0417\u0430\u0434\u0430\u0442\u043e|\u0418|\u0406|\u041a \u0442\u043e\u043c\u0443 \u0436\u0435|\u041a\u0430\u0434\u0430|\u041a\u0430\u0434|\u041a\u043e\u0433\u0430\u0442\u043e|\u041a\u043e\u0433\u0434\u0430|\u041a\u043e\u043b\u0438|\u041b\u04d9\u043a\u0438\u043d|\u041b\u0435\u043a\u0438\u043d|\u041d\u04d9\u0442\u0438\u0497\u04d9\u0434\u04d9|\u041d\u0435\u0445\u0430\u0439|\u041d\u043e|\u041e\u043d\u0434\u0430|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0449\u043e|\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e|\u041f\u0443\u0441\u0442\u044c|\u0422\u0430\u043a\u0436\u0435|\u0422\u0430|\u0422\u043e\u0433\u0434\u0430|\u0422\u043e\u0434\u0456|\u0422\u043e|\u0423\u043d\u0434\u0430|\u04ba\u04d9\u043c|\u042f\u043a\u0449\u043e|\u05d0\u05d1\u05dc|\u05d0\u05d6\u05d9|\u05d0\u05d6|\u05d1\u05d4\u05d9\u05e0\u05ea\u05df|\u05d5\u05d2\u05dd|\u05db\u05d0\u05e9\u05e8|\u0622\u0646\u06af\u0627\u0647|\u0627\u0630\u0627\u064b|\u0627\u06af\u0631|\u0627\u0645\u0627|\u0627\u0648\u0631|\u0628\u0627 \u0641\u0631\u0636|\u0628\u0627\u0644\u0641\u0631\u0636|\u0628\u0641\u0631\u0636|\u067e\u06be\u0631|\u062a\u0628|\u062b\u0645|\u062c\u0628|\u0639\u0646\u062f\u0645\u0627|\u0641\u0631\u0636 \u06a9\u06cc\u0627|\u0644\u0643\u0646|\u0644\u06cc\u06a9\u0646|\u0645\u062a\u0649|\u0647\u0646\u06af\u0627\u0645\u06cc|\u0648|\u0905\u0917\u0930|\u0914\u0930|\u0915\u0926\u093e|\u0915\u093f\u0928\u094d\u0924\u0941|\u091a\u0942\u0902\u0915\u093f|\u091c\u092c|\u0924\u0925\u093e|\u0924\u0926\u093e|\u0924\u092c|\u092a\u0930\u0928\u094d\u0924\u0941|\u092a\u0930|\u092f\u0926\u093f|\u0a05\u0a24\u0a47|\u0a1c\u0a26\u0a4b\u0a02|\u0a1c\u0a3f\u0a35\u0a47\u0a02 \u0a15\u0a3f|\u0a1c\u0a47\u0a15\u0a30|\u0a24\u0a26|\u0a2a\u0a30|\u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41|\u0c08 \u0c2a\u0c30\u0c3f\u0c38\u0c4d\u0c25\u0c3f\u0c24\u0c3f\u0c32\u0c4b|\u0c15\u0c3e\u0c28\u0c3f|\u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c2c\u0c21\u0c3f\u0c28\u0c26\u0c3f|\u0c2e\u0c30\u0c3f\u0c2f\u0c41|\u0c86\u0ca6\u0cb0\u0cc6|\u0ca8\u0c82\u0ca4\u0cb0|\u0ca8\u0cbf\u0cd5\u0ca1\u0cbf\u0ca6|\u0cae\u0ca4\u0ccd\u0ca4\u0cc1|\u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1|\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e2b\u0e49|\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19|\u0e41\u0e15\u0e48|\u0e40\u0e21\u0e37\u0e48\u0e2d|\u0e41\u0e25\u0e30|\uadf8\ub7ec\uba74<|\uadf8\ub9ac\uace0<|\ub2e8<|\ub9cc\uc57d<|\ub9cc\uc77c<|\uba3c\uc800<|\uc870\uac74<|\ud558\uc9c0\ub9cc<|\u304b\u3064<|\u3057\u304b\u3057<|\u305f\u3060\u3057<|\u306a\u3089\u3070<|\u3082\u3057<|\u4e26\u4e14<|\u4f46\u3057<|\u4f46\u662f<|\u5047\u5982<|\u5047\u5b9a<|\u5047\u8a2d<|\u5047\u8bbe<|\u524d\u63d0<|\u540c\u65f6<|\u540c\u6642<|\u5e76\u4e14<|\u5f53<|\u7576<|\u800c\u4e14<|\u90a3\u4e48<|\u90a3\u9ebc<)(?=[ \t]+)/,
        lookbehind: !0
    },
    string: {
        pattern: /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/,
        inside: {
            outline: {
                pattern: /<[^>]+?>/,
                alias: "variable"
            }
        }
    },
    outline: {
        pattern: /<[^>]+?>/,
        alias: "variable"
    }
}, Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-\u2013].*/m,
    inserted: /^\+.*/m,
    string: /("|')(\\?.)*?\1/m,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s(--|-)\w+/m
        }
    },
    coord: /^@@.*@@$/m,
    commit_sha1: /^commit \w{40}$/m
}, Prism.languages.glsl = Prism.languages.extend("clike", {
    comment: [/\/\*[\w\W]*?\*\//, /\/\/(?:\\(?:\r\n|[\s\S])|.)*/],
    number: /\b(?:0x[\da-f]+|(?:\.\d+|\d+\.?\d*)(?:e[+-]?\d+)?)[ulf]*\b/i,
    keyword: /\b(?:attribute|const|uniform|varying|buffer|shared|coherent|volatile|restrict|readonly|writeonly|atomic_uint|layout|centroid|flat|smooth|noperspective|patch|sample|break|continue|do|for|while|switch|case|default|if|else|subroutine|in|out|inout|float|double|int|void|bool|true|false|invariant|precise|discard|return|d?mat[234](?:x[234])?|[ibdu]?vec[234]|uint|lowp|mediump|highp|precision|[iu]?sampler[123]D|[iu]?samplerCube|sampler[12]DShadow|samplerCubeShadow|[iu]?sampler[12]DArray|sampler[12]DArrayShadow|[iu]?sampler2DRect|sampler2DRectShadow|[iu]?samplerBuffer|[iu]?sampler2DMS(?:Array)?|[iu]?samplerCubeArray|samplerCubeArrayShadow|[iu]?image[123]D|[iu]?image2DRect|[iu]?imageCube|[iu]?imageBuffer|[iu]?image[12]DArray|[iu]?imageCubeArray|[iu]?image2DMS(?:Array)?|struct|common|partition|active|asm|class|union|enum|typedef|template|this|resource|goto|inline|noinline|public|static|extern|external|interface|long|short|half|fixed|unsigned|superp|input|output|hvec[234]|fvec[234]|sampler3DRect|filter|sizeof|cast|namespace|using)\b/
}), Prism.languages.insertBefore("glsl", "comment", {
    preprocessor: {
        pattern: /(^[ \t]*)#(?:(?:define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\b)?/m,
        lookbehind: !0,
        alias: "builtin"
    }
}), Prism.languages.go = Prism.languages.extend("clike", {
    keyword: /\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,
    "boolean": /\b(_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,
    string: /("|'|`)(\\?.|\r|\n)*?\1/
}), delete Prism.languages.go["class-name"], Prism.languages.graphql = {
    comment: /#.*/,
    string: {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
    "boolean": /\b(?:true|false)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
    },
    "attr-name": /[a-z_]\w*(?=\s*:)/i,
    keyword: [{
        pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.\.\.\s*)on\b/,
        lookbehind: !0
    }, /\b(?:query|fragment|mutation)\b/],
    operator: /!|=|\.{3}/,
    punctuation: /[!(){}\[\]:=,]/
}, Prism.languages.groovy = Prism.languages.extend("clike", {
    keyword: /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,
    string: [{
        pattern: /("""|''')[\W\w]*?\1|(\$\/)(\$\/\$|[\W\w])*?\/\$/,
        greedy: !0
    }, {
        pattern: /("|'|\/)(?:\\?.)*?\1/,
        greedy: !0
    }],
    number: /\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?[\d]+)?)[glidf]?\b/i,
    operator: {
        pattern: /(^|[^.])(~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.{1,2}(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,
        lookbehind: !0
    },
    punctuation: /\.+|[{}[\];(),:$]/
}), Prism.languages.insertBefore("groovy", "string", {
    shebang: {
        pattern: /#!.+/,
        alias: "comment"
    }
}), Prism.languages.insertBefore("groovy", "punctuation", {
    "spock-block": /\b(setup|given|when|then|and|cleanup|expect|where):/
}), Prism.languages.insertBefore("groovy", "function", {
    annotation: {
        alias: "punctuation",
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0
    }
}), Prism.hooks.add("wrap", function(e) {
    if ("groovy" === e.language && "string" === e.type) {
        var t = e.content[0];
        if ("'" != t) {
            var n = /([^\\])(\$(\{.*?\}|[\w\.]+))/;
            "$" === t && (n = /([^\$])(\$(\{.*?\}|[\w\.]+))/), e.content = e.content.replace(/&amp;/g, "&").replace(/&lt;/g, "<"), e.content = Prism.highlight(e.content, {
                expression: {
                    pattern: n,
                    lookbehind: !0,
                    inside: Prism.languages.groovy
                }
            }), e.classes.push("/" === t ? "regex" : "gstring")
        }
    }
}), ! function(e) {
    e.languages.haml = {
        "multiline-comment": {
            pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*((?:\r?\n|\r)\2[\t ]+.+)*/,
            lookbehind: !0,
            alias: "comment"
        },
        "multiline-code": [{
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*((?:\r?\n|\r)\2[\t ]+.*,[\t ]*)*((?:\r?\n|\r)\2[\t ]+.+)/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        }, {
            pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*((?:\r?\n|\r)\2[\t ]+.*\|[\t ]*)*/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        }],
        filter: {
            pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+((?:\r?\n|\r)(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/,
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                }
            }
        },
        markup: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.markup
            }
        },
        doctype: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,
            lookbehind: !0
        },
        tag: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^}])+\}|\[[^\]]+\])*[\/<>]*/,
            lookbehind: !0,
            inside: {
                attributes: [{
                    pattern: /(^|[^#])\{(?:\{[^}]+\}|[^}])+\}/,
                    lookbehind: !0,
                    inside: {
                        rest: e.languages.ruby
                    }
                }, {
                    pattern: /\([^)]+\)/,
                    inside: {
                        "attr-value": {
                            pattern: /(=\s*)(?:"(?:\\?.)*?"|[^)\s]+)/,
                            lookbehind: !0
                        },
                        "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/,
                        punctuation: /[=(),]/
                    }
                }, {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        rest: e.languages.ruby
                    }
                }],
                punctuation: /[<>]/
            }
        },
        code: {
            pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,
            lookbehind: !0,
            inside: {
                rest: e.languages.ruby
            }
        },
        interpolation: {
            pattern: /#\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^#\{|\}$/,
                    alias: "punctuation"
                },
                rest: e.languages.ruby
            }
        },
        punctuation: {
            pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,
            lookbehind: !0
        }
    };
    for (var t = "((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r)(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+", n = ["css", {
            filter: "coffee",
            language: "coffeescript"
        }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], i = {}, r = 0, o = n.length; o > r; r++) {
        var a = n[r];
        a = "string" == typeof a ? {
            filter: a,
            language: a
        } : a, e.languages[a.language] && (i["filter-" + a.filter] = {
            pattern: RegExp(t.replace("{{filter_name}}", a.filter)),
            lookbehind: !0,
            inside: {
                "filter-name": {
                    pattern: /^:[\w-]+/,
                    alias: "variable"
                },
                rest: e.languages[a.language]
            }
        })
    }
    e.languages.insertBefore("haml", "filter", i)
}(Prism), ! function(e) {
    var t = /\{\{\{[\w\W]+?\}\}\}|\{\{[\w\W]+?\}\}/g;
    e.languages.handlebars = e.languages.extend("markup", {
        handlebars: {
            pattern: t,
            inside: {
                delimiter: {
                    pattern: /^\{\{\{?|\}\}\}?$/i,
                    alias: "punctuation"
                },
                string: /(["'])(\\?.)*?\1/,
                number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/,
                "boolean": /\b(true|false)\b/,
                block: {
                    pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                brackets: {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        punctuation: /\[|\]/,
                        variable: /[\w\W]+/
                    }
                },
                punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
                variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
            }
        }
    }), e.languages.insertBefore("handlebars", "tag", {
        "handlebars-comment": {
            pattern: /\{\{![\w\W]*?\}\}/,
            alias: ["handlebars", "comment"]
        }
    }), e.hooks.add("before-highlight", function(e) {
        "handlebars" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(t, function(t) {
            return e.tokenStack.push(t), "___HANDLEBARS" + e.tokenStack.length + "___"
        }))
    }), e.hooks.add("before-insert", function(e) {
        "handlebars" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), e.hooks.add("after-highlight", function(t) {
        if ("handlebars" === t.language) {
            for (var n, i = 0; n = t.tokenStack[i]; i++) t.highlightedCode = t.highlightedCode.replace("___HANDLEBARS" + (i + 1) + "___", e.highlight(n, t.grammar, "handlebars").replace(/\$/g, "$$$$"));
            t.element.innerHTML = t.highlightedCode
        }
    })
}(Prism), Prism.languages.haskell = {
    comment: {
        pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\w\W]*?-})/m,
        lookbehind: !0
    },
    "char": /'([^\\']|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
    string: {
        pattern: /"([^\\"]|\\([abfnrtv\\"'&]|\^[A-Z@[\]\^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
        greedy: !0
    },
    keyword: /\b(case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    import_statement: {
        pattern: /(\r?\n|\r|^)\s*import\s+(qualified\s+)?([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*(\s+as\s+([A-Z][_a-zA-Z0-9']*)(\.[A-Z][_a-zA-Z0-9']*)*)?(\s+hiding\b)?/m,
        inside: {
            keyword: /\b(import|qualified|as|hiding)\b/
        }
    },
    builtin: /\b(abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
    number: /\b(\d+(\.\d+)?(e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
    operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*`/,
    hvariable: /\b([A-Z][_a-zA-Z0-9']*\.)*[_a-z][_a-zA-Z0-9']*\b/,
    constant: /\b([A-Z][_a-zA-Z0-9']*\.)*[A-Z][_a-zA-Z0-9']*\b/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.haxe = Prism.languages.extend("clike", {
    string: {
        pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        inside: {
            interpolation: {
                pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
                lookbehind: !0,
                inside: {
                    interpolation: {
                        pattern: /^\$\w*/,
                        alias: "variable"
                    }
                }
            }
        }
    },
    keyword: /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
    operator: /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
}), Prism.languages.insertBefore("haxe", "class-name", {
    regex: {
        pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/
    }
}), Prism.languages.insertBefore("haxe", "keyword", {
    preprocessor: {
        pattern: /#\w+/,
        alias: "builtin"
    },
    metadata: {
        pattern: /@:?\w+/,
        alias: "symbol"
    },
    reification: {
        pattern: /\$(?:\w+|(?=\{))/,
        alias: "variable"
    }
}), Prism.languages.haxe.string.inside.interpolation.inside.rest = Prism.util.clone(Prism.languages.haxe), delete Prism.languages.haxe["class-name"], Prism.languages.http = {
    "request-line": {
        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,
        inside: {
            property: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
            "attr-name": /:\w+/
        }
    },
    "response-status": {
        pattern: /^HTTP\/1.[01] [0-9]+.*/m,
        inside: {
            property: {
                pattern: /(^HTTP\/1.[01] )[0-9]+.*/i,
                lookbehind: !0
            }
        }
    },
    "header-name": {
        pattern: /^[\w-]+:(?=.)/m,
        alias: "keyword"
    }
};
var httpLanguages = {
    "application/json": Prism.languages.javascript,
    "application/xml": Prism.languages.markup,
    "text/xml": Prism.languages.markup,
    "text/html": Prism.languages.markup
};
for (var contentType in httpLanguages)
    if (httpLanguages[contentType]) {
        var options = {};
        options[contentType] = {
            pattern: new RegExp("(content-type:\\s*" + contentType + "[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*", "i"),
            lookbehind: !0,
            inside: {
                rest: httpLanguages[contentType]
            }
        }, Prism.languages.insertBefore("http", "header-name", options)
    }
Prism.languages.icon = {
        comment: /#.*/,
        string: /(["'])(?:(?!\1)[^\\\r\n]|\\.|_(?:\r?\n|\r))*\1/,
        number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
        "builtin-keyword": {
            pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
            alias: "variable"
        },
        directive: {
            pattern: /\$\w+/,
            alias: "builtin"
        },
        keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
        "function": /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
        operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
        punctuation: /[\[\](){},;]/
    }, Prism.languages.inform7 = {
        string: {
            pattern: /"[^"]*"/,
            inside: {
                substitution: {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        delimiter: {
                            pattern: /\[|\]/,
                            alias: "punctuation"
                        }
                    }
                }
            }
        },
        comment: /\[[^\]]+\]/,
        title: {
            pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
            alias: "important"
        },
        number: {
            pattern: /(^|[^-])(?:(?:\b|-)\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
            lookbehind: !0
        },
        verb: {
            pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
            lookbehind: !0,
            alias: "operator"
        },
        keyword: {
            pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
            lookbehind: !0
        },
        property: {
            pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
            lookbehind: !0,
            alias: "symbol"
        },
        position: {
            pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
            lookbehind: !0,
            alias: "keyword"
        },
        type: {
            pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
            lookbehind: !0,
            alias: "variable"
        },
        punctuation: /[.,:;(){}]/
    }, Prism.languages.inform7.string.inside.substitution.inside.rest = Prism.util.clone(Prism.languages.inform7), Prism.languages.inform7.string.inside.substitution.inside.rest.text = {
        pattern: /\S(?:\s*\S)*/,
        alias: "comment"
    }, Prism.languages.ini = {
        comment: /^[ \t]*;.*$/m,
        important: /\[.*?\]/,
        constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
        "attr-value": {
            pattern: /=.*/,
            inside: {
                punctuation: /^[=]/
            }
        }
    }, Prism.languages.j = {
        comment: /\bNB\..*/,
        string: /'(?:''|[^'\r\n])*'/,
        keyword: /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
        verb: {
            pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[\^?]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
            alias: "keyword"
        },
        number: /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_(?!\.))/,
        adverb: {
            pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
            alias: "builtin"
        },
        operator: /[=a][.:]|_\./,
        conjunction: {
            pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
            alias: "variable"
        },
        punctuation: /[()]/
    }, ! function(e) {
        e.languages.jade = {
            comment: {
                pattern: /(^([\t ]*))\/\/.*((?:\r?\n|\r)\2[\t ]+.+)*/m,
                lookbehind: !0
            },
            "multiline-script": {
                pattern: /(^([\t ]*)script\b.*\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.javascript
                }
            },
            filter: {
                pattern: /(^([\t ]*)):.+((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                lookbehind: !0,
                inside: {
                    "filter-name": {
                        pattern: /^:[\w-]+/,
                        alias: "variable"
                    }
                }
            },
            "multiline-plain-text": {
                pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)((?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
                lookbehind: !0
            },
            markup: {
                pattern: /(^[\t ]*)<.+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.markup
                }
            },
            doctype: {
                pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
                lookbehind: !0
            },
            "flow-control": {
                pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
                lookbehind: !0,
                inside: {
                    each: {
                        pattern: /^each .+? in\b/,
                        inside: {
                            keyword: /\b(?:each|in)\b/,
                            punctuation: /,/
                        }
                    },
                    branch: {
                        pattern: /^(?:if|unless|else|case|when|default|while)\b/,
                        alias: "keyword"
                    },
                    rest: e.languages.javascript
                }
            },
            keyword: {
                pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
                lookbehind: !0
            },
            mixin: [{
                pattern: /(^[\t ]*)mixin .+/m,
                lookbehind: !0,
                inside: {
                    keyword: /^mixin/,
                    "function": /\w+(?=\s*\(|\s*$)/,
                    punctuation: /[(),.]/
                }
            }, {
                pattern: /(^[\t ]*)\+.+/m,
                lookbehind: !0,
                inside: {
                    name: {
                        pattern: /^\+\w+/,
                        alias: "function"
                    },
                    rest: e.languages.javascript
                }
            }],
            script: {
                pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.javascript
                }
            },
            "plain-text": {
                pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
                lookbehind: !0
            },
            tag: {
                pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
                lookbehind: !0,
                inside: {
                    attributes: [{
                        pattern: /&[^(]+\([^)]+\)/,
                        inside: {
                            rest: e.languages.javascript
                        }
                    }, {
                        pattern: /\([^)]+\)/,
                        inside: {
                            "attr-value": {
                                pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                                lookbehind: !0,
                                inside: {
                                    rest: e.languages.javascript
                                }
                            },
                            "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
                            punctuation: /[!=(),]+/
                        }
                    }],
                    punctuation: /:/
                }
            },
            code: [{
                pattern: /(^[\t ]*(?:-|!?=)).+/m,
                lookbehind: !0,
                inside: {
                    rest: e.languages.javascript
                }
            }],
            punctuation: /[.\-!=|]+/
        };
        for (var t = "(^([\\t ]*)):{{filter_name}}((?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+", n = [{
                filter: "atpl",
                language: "twig"
            }, {
                filter: "coffee",
                language: "coffeescript"
            }, "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", {
                filter: "sass",
                language: "scss"
            }, "stylus", "swig"], i = {}, r = 0, o = n.length; o > r; r++) {
            var a = n[r];
            a = "string" == typeof a ? {
                filter: a,
                language: a
            } : a, e.languages[a.language] && (i["filter-" + a.filter] = {
                pattern: RegExp(t.replace("{{filter_name}}", a.filter), "m"),
                lookbehind: !0,
                inside: {
                    "filter-name": {
                        pattern: /^:[\w-]+/,
                        alias: "variable"
                    },
                    rest: e.languages[a.language]
                }
            })
        }
        e.languages.insertBefore("jade", "filter", i)
    }(Prism), Prism.languages.java = Prism.languages.extend("clike", {
        keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
        number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
        operator: {
            pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
            lookbehind: !0
        }
    }), Prism.languages.insertBefore("java", "function", {
        annotation: {
            alias: "punctuation",
            pattern: /(^|[^.])@\w+/,
            lookbehind: !0
        }
    }), Prism.languages.json = {
        property: /".*?"(?=\s*:)/gi,
        string: /"(?!:)(\\?[^"])*?"(?!:)/g,
        number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
        punctuation: /[{}[\]);,]/g,
        operator: /:/g,
        "boolean": /\b(true|false)\b/gi,
        "null": /\bnull\b/gi
    }, Prism.languages.jsonp = Prism.languages.json, Prism.languages.julia = {
        comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0
        },
        string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,
        keyword: /\b(abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|let|local|macro|module|print|println|quote|return|try|type|typealias|using|while)\b/,
        "boolean": /\b(true|false)\b/,
        number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?\b/i,
        operator: /\+=?|-=?|\*=?|\/[\/=]?|\\=?|\^=?|%=?|\xf7=?|!=?=?|&=?|\|[=>]?|\$=?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265]/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.keyman = {
        comment: /\bc\s.*/i,
        "function": /\[\s*((CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*([TKU]_[a-z0-9_?]+|".+?"|'.+?')\s*\]/i,
        string: /("|')((?!\1).)*\1/,
        bold: [/&(baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i, /\b(bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i],
        keyword: /\b(any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
        atrule: /\b(ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
        number: /\b(U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
        operator: /[+>\\,()]/,
        tag: /\$(keyman|kmfl|weaver|keymanweb|keymanonly):/i
    }, ! function(e) {
        e.languages.kotlin = e.languages.extend("clike", {
            keyword: {
                pattern: /(^|[^.])\b(?:abstract|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|else|enum|final|finally|for|fun|get|if|import|in|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|out|override|package|private|protected|public|reified|return|sealed|set|super|tailrec|this|throw|to|try|val|var|when|where|while)\b/,
                lookbehind: !0
            },
            "function": [/\w+(?=\s*\()/, {
                pattern: /(\.)\w+(?=\s*\{)/,
                lookbehind: !0
            }],
            number: /\b(?:0[bx][\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?[fFL]?)\b/,
            operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
        }), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", {
            "raw-string": {
                pattern: /(["'])\1\1[\s\S]*?\1{3}/,
                alias: "string"
            }
        }), e.languages.insertBefore("kotlin", "keyword", {
            annotation: {
                pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                alias: "builtin"
            }
        }), e.languages.insertBefore("kotlin", "function", {
            label: {
                pattern: /\w+@|@\w+/,
                alias: "symbol"
            }
        });
        var t = [{
            pattern: /\$\{[^}]+\}/,
            inside: {
                delimiter: {
                    pattern: /^\$\{|\}$/,
                    alias: "variable"
                },
                rest: e.util.clone(e.languages.kotlin)
            }
        }, {
            pattern: /\$\w+/,
            alias: "variable"
        }];
        e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = {
            interpolation: t
        }
    }(Prism), ! function(e) {
        var t = /\\([^a-z()[\]]|[a-z\*]+)/i,
            n = {
                "equation-command": {
                    pattern: t,
                    alias: "regex"
                }
            };
        e.languages.latex = {
            comment: /%.*/m,
            cdata: {
                pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
                lookbehind: !0
            },
            equation: [{
                pattern: /\$(?:\\?[\w\W])*?\$|\\\((?:\\?[\w\W])*?\\\)|\\\[(?:\\?[\w\W])*?\\\]/,
                inside: n,
                alias: "string"
            }, {
                pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})([\w\W]*?)(?=\\end\{\2\})/,
                lookbehind: !0,
                inside: n,
                alias: "string"
            }],
            keyword: {
                pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
                lookbehind: !0
            },
            url: {
                pattern: /(\\url\{)[^}]+(?=\})/,
                lookbehind: !0
            },
            headline: {
                pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
                lookbehind: !0,
                alias: "class-name"
            },
            "function": {
                pattern: t,
                alias: "selector"
            },
            punctuation: /[[\]{}&]/
        }
    }(Prism), Prism.languages.less = Prism.languages.extend("css", {
        comment: [/\/\*[\w\W]*?\*\//, {
            pattern: /(^|[^\\])\/\/.*/,
            lookbehind: !0
        }],
        atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: {
                punctuation: /[:()]/
            }
        },
        selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: {
                variable: /@+[\w-]+/
            }
        },
        property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
        punctuation: /[{}();:,]/,
        operator: /[+\-*\/]/
    }), Prism.languages.insertBefore("less", "punctuation", {
        "function": Prism.languages.less["function"]
    }), Prism.languages.insertBefore("less", "property", {
        variable: [{
            pattern: /@[\w-]+\s*:/,
            inside: {
                punctuation: /:/
            }
        }, /@@?[\w-]+/],
        "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: "function"
        }
    }), Prism.languages.livescript = {
        "interpolated-string": {
            pattern: /("""|")(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: !0,
            inside: {
                variable: {
                    pattern: /(^|[^\\])#[a-z_](?:-?[a-z]|\d)*/m,
                    lookbehind: !0
                },
                interpolation: {
                    pattern: /(^|[^\\])#\{[^}]+\}/m,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^#\{|\}$/,
                            alias: "variable"
                        }
                    }
                },
                string: /[\s\S]+/
            }
        },
        comment: [{
            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: [{
            pattern: /('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,
            greedy: !0
        }, {
            pattern: /<\[[\s\S]*?\]>/,
            greedy: !0
        }, /\\[^\s,;\])}]+/],
        regex: [{
            pattern: /\/\/(\[.+?]|\\.|(?!\/\/)[^\\])+\/\/[gimyu]{0,5}/,
            greedy: !0,
            inside: {
                comment: {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0
                }
            }
        }, {
            pattern: /\/(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}/,
            greedy: !0
        }],
        keyword: {
            pattern: /(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,
            lookbehind: !0
        },
        "keyword-operator": {
            pattern: /(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?:nt| not)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,
            lookbehind: !0,
            alias: "operator"
        },
        "boolean": {
            pattern: /(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,
            lookbehind: !0
        },
        argument: {
            pattern: /(^|(?!\.&\.)[^&])&(?!&)\d*/m,
            lookbehind: !0,
            alias: "variable"
        },
        number: /\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,
        identifier: /[a-z_](?:-?[a-z]|\d)*/i,
        operator: [{
            pattern: /( )\.(?= )/,
            lookbehind: !0
        }, /\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],
        punctuation: /[(){}\[\]|.,:;`]/
    }, Prism.languages.livescript["interpolated-string"].inside.interpolation.inside.rest = Prism.languages.livescript, Prism.languages.lolcode = {
        comment: [/\bOBTW\s+[\s\S]*?\s+TLDR\b/, /\bBTW.+/],
        string: {
            pattern: /"(?::.|[^"])*"/,
            inside: {
                variable: /:\{[^}]+\}/,
                symbol: [/:\([a-f\d]+\)/i, /:\[[^\]]+\]/, /:[)>o":]/]
            }
        },
        number: /(-|\b)\d*\.?\d+/,
        symbol: {
            pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
            lookbehind: !0,
            inside: {
                keyword: /A(?=\s)/
            }
        },
        label: {
            pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
            lookbehind: !0,
            alias: "string"
        },
        "function": {
            pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
            lookbehind: !0
        },
        keyword: [{
            pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
            lookbehind: !0
        }, /'Z(?=\s|,|$)/],
        "boolean": {
            pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,
            lookbehind: !0
        },
        variable: {
            pattern: /(^|\s)IT(?=\s|,|$)/,
            lookbehind: !0
        },
        operator: {
            pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
            lookbehind: !0
        },
        punctuation: /\.{3}|\u2026|,|!/
    }, Prism.languages.lua = {
        comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
        string: {
            pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: !0
        },
        number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
        keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
        "function": /(?!\d)\w+(?=\s*(?:[({]))/,
        operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {
            pattern: /(^|[^.])\.\.(?!\.)/,
            lookbehind: !0
        }],
        punctuation: /[\[\](){},;]|\.+|:+/
    }, Prism.languages.makefile = {
        comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|.)*/,
            lookbehind: !0
        },
        string: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
        symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: {
                variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
            }
        },
        variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
        keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
            pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
            lookbehind: !0
        }],
        operator: /(?:::|[?:+!])?=|[|@]/,
        punctuation: /[:;(){}]/
    }, Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        code: [{
            pattern: /^(?: {4}|\t).+/m,
            alias: "keyword"
        }, {
            pattern: /``.+?``|`[^`\n]+`/,
            alias: "keyword"
        }],
        title: [{
            pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
            alias: "important",
            inside: {
                punctuation: /==+$|--+$/
            }
        }, {
            pattern: /(^\s*)#+.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
                punctuation: /^#+|#+$/
            }
        }],
        hr: {
            pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            inside: {
                punctuation: /^\*\*|^__|\*\*$|__$/
            }
        },
        italic: {
            pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
            lookbehind: !0,
            inside: {
                punctuation: /^[*_]|[*_]$/
            }
        },
        url: {
            pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
            inside: {
                variable: {
                    pattern: /(!?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                string: {
                    pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
                }
            }
        }
    }), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold), Prism.languages.matlab = {
        string: /\B'(?:''|[^'\n])*'/,
        comment: [/%\{[\s\S]*?\}%/, /%.+/],
        number: /\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,
        keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
        "function": /(?!\d)\w+(?=\s*\()/,
        operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
        punctuation: /\.{3}|[.,;\[\](){}!]/
    }, Prism.languages.mel = {
        comment: /\/\/.*/,
        code: {
            pattern: /`(?:\\.|[^\\`\r\n])*`/,
            alias: "italic",
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                }
            }
        },
        string: /"(?:\\.|[^\\"\r\n])*"/,
        variable: /\$\w+/,
        number: /(?:\b|-)(?:0x[\da-fA-F]+|\d+\.?\d*)/,
        flag: {
            pattern: /-[^\d\W]\w*/,
            alias: "operator"
        },
        keyword: /\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,
        "function": /\w+(?=\()|\b(?:about|abs|addAttr|addAttributeEditorNodeHelp|addDynamic|addNewShelfTab|addPP|addPanelCategory|addPrefixToName|advanceToNextDrivenKey|affectedNet|affects|aimConstraint|air|alias|aliasAttr|align|alignCtx|alignCurve|alignSurface|allViewFit|ambientLight|angle|angleBetween|animCone|animCurveEditor|animDisplay|animView|annotate|appendStringArray|applicationName|applyAttrPreset|applyTake|arcLenDimContext|arcLengthDimension|arclen|arrayMapper|art3dPaintCtx|artAttrCtx|artAttrPaintVertexCtx|artAttrSkinPaintCtx|artAttrTool|artBuildPaintMenu|artFluidAttrCtx|artPuttyCtx|artSelectCtx|artSetPaintCtx|artUserPaintCtx|assignCommand|assignInputDevice|assignViewportFactories|attachCurve|attachDeviceAttr|attachSurface|attrColorSliderGrp|attrCompatibility|attrControlGrp|attrEnumOptionMenu|attrEnumOptionMenuGrp|attrFieldGrp|attrFieldSliderGrp|attrNavigationControlGrp|attrPresetEditWin|attributeExists|attributeInfo|attributeMenu|attributeQuery|autoKeyframe|autoPlace|bakeClip|bakeFluidShading|bakePartialHistory|bakeResults|bakeSimulation|basename|basenameEx|batchRender|bessel|bevel|bevelPlus|binMembership|bindSkin|blend2|blendShape|blendShapeEditor|blendShapePanel|blendTwoAttr|blindDataType|boneLattice|boundary|boxDollyCtx|boxZoomCtx|bufferCurve|buildBookmarkMenu|buildKeyframeMenu|button|buttonManip|CBG|cacheFile|cacheFileCombine|cacheFileMerge|cacheFileTrack|camera|cameraView|canCreateManip|canvas|capitalizeString|catch|catchQuiet|ceil|changeSubdivComponentDisplayLevel|changeSubdivRegion|channelBox|character|characterMap|characterOutlineEditor|characterize|chdir|checkBox|checkBoxGrp|checkDefaultRenderGlobals|choice|circle|circularFillet|clamp|clear|clearCache|clip|clipEditor|clipEditorCurrentTimeCtx|clipSchedule|clipSchedulerOutliner|clipTrimBefore|closeCurve|closeSurface|cluster|cmdFileOutput|cmdScrollFieldExecuter|cmdScrollFieldReporter|cmdShell|coarsenSubdivSelectionList|collision|color|colorAtPoint|colorEditor|colorIndex|colorIndexSliderGrp|colorSliderButtonGrp|colorSliderGrp|columnLayout|commandEcho|commandLine|commandPort|compactHairSystem|componentEditor|compositingInterop|computePolysetVolume|condition|cone|confirmDialog|connectAttr|connectControl|connectDynamic|connectJoint|connectionInfo|constrain|constrainValue|constructionHistory|container|containsMultibyte|contextInfo|control|convertFromOldLayers|convertIffToPsd|convertLightmap|convertSolidTx|convertTessellation|convertUnit|copyArray|copyFlexor|copyKey|copySkinWeights|cos|cpButton|cpCache|cpClothSet|cpCollision|cpConstraint|cpConvClothToMesh|cpForces|cpGetSolverAttr|cpPanel|cpProperty|cpRigidCollisionFilter|cpSeam|cpSetEdit|cpSetSolverAttr|cpSolver|cpSolverTypes|cpTool|cpUpdateClothUVs|createDisplayLayer|createDrawCtx|createEditor|createLayeredPsdFile|createMotionField|createNewShelf|createNode|createRenderLayer|createSubdivRegion|cross|crossProduct|ctxAbort|ctxCompletion|ctxEditMode|ctxTraverse|currentCtx|currentTime|currentTimeCtx|currentUnit|curve|curveAddPtCtx|curveCVCtx|curveEPCtx|curveEditorCtx|curveIntersect|curveMoveEPCtx|curveOnSurface|curveSketchCtx|cutKey|cycleCheck|cylinder|dagPose|date|defaultLightListCheckBox|defaultNavigation|defineDataServer|defineVirtualDevice|deformer|deg_to_rad|delete|deleteAttr|deleteShadingGroupsAndMaterials|deleteShelfTab|deleteUI|deleteUnusedBrushes|delrandstr|detachCurve|detachDeviceAttr|detachSurface|deviceEditor|devicePanel|dgInfo|dgdirty|dgeval|dgtimer|dimWhen|directKeyCtx|directionalLight|dirmap|dirname|disable|disconnectAttr|disconnectJoint|diskCache|displacementToPoly|displayAffected|displayColor|displayCull|displayLevelOfDetail|displayPref|displayRGBColor|displaySmoothness|displayStats|displayString|displaySurface|distanceDimContext|distanceDimension|doBlur|dolly|dollyCtx|dopeSheetEditor|dot|dotProduct|doubleProfileBirailSurface|drag|dragAttrContext|draggerContext|dropoffLocator|duplicate|duplicateCurve|duplicateSurface|dynCache|dynControl|dynExport|dynExpression|dynGlobals|dynPaintEditor|dynParticleCtx|dynPref|dynRelEdPanel|dynRelEditor|dynamicLoad|editAttrLimits|editDisplayLayerGlobals|editDisplayLayerMembers|editRenderLayerAdjustment|editRenderLayerGlobals|editRenderLayerMembers|editor|editorTemplate|effector|emit|emitter|enableDevice|encodeString|endString|endsWith|env|equivalent|equivalentTol|erf|error|eval|evalDeferred|evalEcho|event|exactWorldBoundingBox|exclusiveLightCheckBox|exec|executeForEachObject|exists|exp|expression|expressionEditorListen|extendCurve|extendSurface|extrude|fcheck|fclose|feof|fflush|fgetline|fgetword|file|fileBrowserDialog|fileDialog|fileExtension|fileInfo|filetest|filletCurve|filter|filterCurve|filterExpand|filterStudioImport|findAllIntersections|findAnimCurves|findKeyframe|findMenuItem|findRelatedSkinCluster|finder|firstParentOf|fitBspline|flexor|floatEq|floatField|floatFieldGrp|floatScrollBar|floatSlider|floatSlider2|floatSliderButtonGrp|floatSliderGrp|floor|flow|fluidCacheInfo|fluidEmitter|fluidVoxelInfo|flushUndo|fmod|fontDialog|fopen|formLayout|format|fprint|frameLayout|fread|freeFormFillet|frewind|fromNativePath|fwrite|gamma|gauss|geometryConstraint|getApplicationVersionAsFloat|getAttr|getClassification|getDefaultBrush|getFileList|getFluidAttr|getInputDeviceRange|getMayaPanelTypes|getModifiers|getPanel|getParticleAttr|getPluginResource|getenv|getpid|glRender|glRenderEditor|globalStitch|gmatch|goal|gotoBindPose|grabColor|gradientControl|gradientControlNoAttr|graphDollyCtx|graphSelectContext|graphTrackCtx|gravity|grid|gridLayout|group|groupObjectsByName|HfAddAttractorToAS|HfAssignAS|HfBuildEqualMap|HfBuildFurFiles|HfBuildFurImages|HfCancelAFR|HfConnectASToHF|HfCreateAttractor|HfDeleteAS|HfEditAS|HfPerformCreateAS|HfRemoveAttractorFromAS|HfSelectAttached|HfSelectAttractors|HfUnAssignAS|hardenPointCurve|hardware|hardwareRenderPanel|headsUpDisplay|headsUpMessage|help|helpLine|hermite|hide|hilite|hitTest|hotBox|hotkey|hotkeyCheck|hsv_to_rgb|hudButton|hudSlider|hudSliderButton|hwReflectionMap|hwRender|hwRenderLoad|hyperGraph|hyperPanel|hyperShade|hypot|iconTextButton|iconTextCheckBox|iconTextRadioButton|iconTextRadioCollection|iconTextScrollList|iconTextStaticLabel|ikHandle|ikHandleCtx|ikHandleDisplayScale|ikSolver|ikSplineHandleCtx|ikSystem|ikSystemInfo|ikfkDisplayMethod|illustratorCurves|image|imfPlugins|inheritTransform|insertJoint|insertJointCtx|insertKeyCtx|insertKnotCurve|insertKnotSurface|instance|instanceable|instancer|intField|intFieldGrp|intScrollBar|intSlider|intSliderGrp|interToUI|internalVar|intersect|iprEngine|isAnimCurve|isConnected|isDirty|isParentOf|isSameObject|isTrue|isValidObjectName|isValidString|isValidUiName|isolateSelect|itemFilter|itemFilterAttr|itemFilterRender|itemFilterType|joint|jointCluster|jointCtx|jointDisplayScale|jointLattice|keyTangent|keyframe|keyframeOutliner|keyframeRegionCurrentTimeCtx|keyframeRegionDirectKeyCtx|keyframeRegionDollyCtx|keyframeRegionInsertKeyCtx|keyframeRegionMoveKeyCtx|keyframeRegionScaleKeyCtx|keyframeRegionSelectKeyCtx|keyframeRegionSetKeyCtx|keyframeRegionTrackCtx|keyframeStats|lassoContext|lattice|latticeDeformKeyCtx|launch|launchImageEditor|layerButton|layeredShaderPort|layeredTexturePort|layout|layoutDialog|lightList|lightListEditor|lightListPanel|lightlink|lineIntersection|linearPrecision|linstep|listAnimatable|listAttr|listCameras|listConnections|listDeviceAttachments|listHistory|listInputDeviceAxes|listInputDeviceButtons|listInputDevices|listMenuAnnotation|listNodeTypes|listPanelCategories|listRelatives|listSets|listTransforms|listUnselected|listerEditor|loadFluid|loadNewShelf|loadPlugin|loadPluginLanguageResources|loadPrefObjects|localizedPanelLabel|lockNode|loft|log|longNameOf|lookThru|ls|lsThroughFilter|lsType|lsUI|Mayatomr|mag|makeIdentity|makeLive|makePaintable|makeRoll|makeSingleSurface|makeTubeOn|makebot|manipMoveContext|manipMoveLimitsCtx|manipOptions|manipRotateContext|manipRotateLimitsCtx|manipScaleContext|manipScaleLimitsCtx|marker|match|max|memory|menu|menuBarLayout|menuEditor|menuItem|menuItemToShelf|menuSet|menuSetPref|messageLine|min|minimizeApp|mirrorJoint|modelCurrentTimeCtx|modelEditor|modelPanel|mouse|movIn|movOut|move|moveIKtoFK|moveKeyCtx|moveVertexAlongDirection|multiProfileBirailSurface|mute|nParticle|nameCommand|nameField|namespace|namespaceInfo|newPanelItems|newton|nodeCast|nodeIconButton|nodeOutliner|nodePreset|nodeType|noise|nonLinear|normalConstraint|normalize|nurbsBoolean|nurbsCopyUVSet|nurbsCube|nurbsEditUV|nurbsPlane|nurbsSelect|nurbsSquare|nurbsToPoly|nurbsToPolygonsPref|nurbsToSubdiv|nurbsToSubdivPref|nurbsUVSet|nurbsViewDirectionVector|objExists|objectCenter|objectLayer|objectType|objectTypeUI|obsoleteProc|oceanNurbsPreviewPlane|offsetCurve|offsetCurveOnSurface|offsetSurface|openGLExtension|openMayaPref|optionMenu|optionMenuGrp|optionVar|orbit|orbitCtx|orientConstraint|outlinerEditor|outlinerPanel|overrideModifier|paintEffectsDisplay|pairBlend|palettePort|paneLayout|panel|panelConfiguration|panelHistory|paramDimContext|paramDimension|paramLocator|parent|parentConstraint|particle|particleExists|particleInstancer|particleRenderInfo|partition|pasteKey|pathAnimation|pause|pclose|percent|performanceOptions|pfxstrokes|pickWalk|picture|pixelMove|planarSrf|plane|play|playbackOptions|playblast|plugAttr|plugNode|pluginInfo|pluginResourceUtil|pointConstraint|pointCurveConstraint|pointLight|pointMatrixMult|pointOnCurve|pointOnSurface|pointPosition|poleVectorConstraint|polyAppend|polyAppendFacetCtx|polyAppendVertex|polyAutoProjection|polyAverageNormal|polyAverageVertex|polyBevel|polyBlendColor|polyBlindData|polyBoolOp|polyBridgeEdge|polyCacheMonitor|polyCheck|polyChipOff|polyClipboard|polyCloseBorder|polyCollapseEdge|polyCollapseFacet|polyColorBlindData|polyColorDel|polyColorPerVertex|polyColorSet|polyCompare|polyCone|polyCopyUV|polyCrease|polyCreaseCtx|polyCreateFacet|polyCreateFacetCtx|polyCube|polyCut|polyCutCtx|polyCylinder|polyCylindricalProjection|polyDelEdge|polyDelFacet|polyDelVertex|polyDuplicateAndConnect|polyDuplicateEdge|polyEditUV|polyEditUVShell|polyEvaluate|polyExtrudeEdge|polyExtrudeFacet|polyExtrudeVertex|polyFlipEdge|polyFlipUV|polyForceUV|polyGeoSampler|polyHelix|polyInfo|polyInstallAction|polyLayoutUV|polyListComponentConversion|polyMapCut|polyMapDel|polyMapSew|polyMapSewMove|polyMergeEdge|polyMergeEdgeCtx|polyMergeFacet|polyMergeFacetCtx|polyMergeUV|polyMergeVertex|polyMirrorFace|polyMoveEdge|polyMoveFacet|polyMoveFacetUV|polyMoveUV|polyMoveVertex|polyNormal|polyNormalPerVertex|polyNormalizeUV|polyOptUvs|polyOptions|polyOutput|polyPipe|polyPlanarProjection|polyPlane|polyPlatonicSolid|polyPoke|polyPrimitive|polyPrism|polyProjection|polyPyramid|polyQuad|polyQueryBlindData|polyReduce|polySelect|polySelectConstraint|polySelectConstraintMonitor|polySelectCtx|polySelectEditCtx|polySeparate|polySetToFaceNormal|polySewEdge|polyShortestPathCtx|polySmooth|polySoftEdge|polySphere|polySphericalProjection|polySplit|polySplitCtx|polySplitEdge|polySplitRing|polySplitVertex|polyStraightenUVBorder|polySubdivideEdge|polySubdivideFacet|polyToSubdiv|polyTorus|polyTransfer|polyTriangulate|polyUVSet|polyUnite|polyWedgeFace|popen|popupMenu|pose|pow|preloadRefEd|print|progressBar|progressWindow|projFileViewer|projectCurve|projectTangent|projectionContext|projectionManip|promptDialog|propModCtx|propMove|psdChannelOutliner|psdEditTextureFile|psdExport|psdTextureFile|putenv|pwd|python|querySubdiv|quit|rad_to_deg|radial|radioButton|radioButtonGrp|radioCollection|radioMenuItemCollection|rampColorPort|rand|randomizeFollicles|randstate|rangeControl|readTake|rebuildCurve|rebuildSurface|recordAttr|recordDevice|redo|reference|referenceEdit|referenceQuery|refineSubdivSelectionList|refresh|refreshAE|registerPluginResource|rehash|reloadImage|removeJoint|removeMultiInstance|removePanelCategory|rename|renameAttr|renameSelectionList|renameUI|render|renderGlobalsNode|renderInfo|renderLayerButton|renderLayerParent|renderLayerPostProcess|renderLayerUnparent|renderManip|renderPartition|renderQualityNode|renderSettings|renderThumbnailUpdate|renderWindowEditor|renderWindowSelectContext|renderer|reorder|reorderDeformers|requires|reroot|resampleFluid|resetAE|resetPfxToPolyCamera|resetTool|resolutionNode|retarget|reverseCurve|reverseSurface|revolve|rgb_to_hsv|rigidBody|rigidSolver|roll|rollCtx|rootOf|rot|rotate|rotationInterpolation|roundConstantRadius|rowColumnLayout|rowLayout|runTimeCommand|runup|sampleImage|saveAllShelves|saveAttrPreset|saveFluid|saveImage|saveInitialState|saveMenu|savePrefObjects|savePrefs|saveShelf|saveToolSettings|scale|scaleBrushBrightness|scaleComponents|scaleConstraint|scaleKey|scaleKeyCtx|sceneEditor|sceneUIReplacement|scmh|scriptCtx|scriptEditorInfo|scriptJob|scriptNode|scriptTable|scriptToShelf|scriptedPanel|scriptedPanelType|scrollField|scrollLayout|sculpt|searchPathArray|seed|selLoadSettings|select|selectContext|selectCurveCV|selectKey|selectKeyCtx|selectKeyframeRegionCtx|selectMode|selectPref|selectPriority|selectType|selectedNodes|selectionConnection|separator|setAttr|setAttrEnumResource|setAttrMapping|setAttrNiceNameResource|setConstraintRestPosition|setDefaultShadingGroup|setDrivenKeyframe|setDynamic|setEditCtx|setEditor|setFluidAttr|setFocus|setInfinity|setInputDeviceMapping|setKeyCtx|setKeyPath|setKeyframe|setKeyframeBlendshapeTargetWts|setMenuMode|setNodeNiceNameResource|setNodeTypeFlag|setParent|setParticleAttr|setPfxToPolyCamera|setPluginResource|setProject|setStampDensity|setStartupMessage|setState|setToolTo|setUITemplate|setXformManip|sets|shadingConnection|shadingGeometryRelCtx|shadingLightRelCtx|shadingNetworkCompare|shadingNode|shapeCompare|shelfButton|shelfLayout|shelfTabLayout|shellField|shortNameOf|showHelp|showHidden|showManipCtx|showSelectionInTitle|showShadingGroupAttrEditor|showWindow|sign|simplify|sin|singleProfileBirailSurface|size|sizeBytes|skinCluster|skinPercent|smoothCurve|smoothTangentSurface|smoothstep|snap2to2|snapKey|snapMode|snapTogetherCtx|snapshot|soft|softMod|softModCtx|sort|sound|soundControl|source|spaceLocator|sphere|sphrand|spotLight|spotLightPreviewPort|spreadSheetEditor|spring|sqrt|squareSurface|srtContext|stackTrace|startString|startsWith|stitchAndExplodeShell|stitchSurface|stitchSurfacePoints|strcmp|stringArrayCatenate|stringArrayContains|stringArrayCount|stringArrayInsertAtIndex|stringArrayIntersector|stringArrayRemove|stringArrayRemoveAtIndex|stringArrayRemoveDuplicates|stringArrayRemoveExact|stringArrayToString|stringToStringArray|strip|stripPrefixFromName|stroke|subdAutoProjection|subdCleanTopology|subdCollapse|subdDuplicateAndConnect|subdEditUV|subdListComponentConversion|subdMapCut|subdMapSewMove|subdMatchTopology|subdMirror|subdToBlind|subdToPoly|subdTransferUVsToCache|subdiv|subdivCrease|subdivDisplaySmoothness|substitute|substituteAllString|substituteGeometry|substring|surface|surfaceSampler|surfaceShaderList|swatchDisplayPort|switchTable|symbolButton|symbolCheckBox|sysFile|system|tabLayout|tan|tangentConstraint|texLatticeDeformContext|texManipContext|texMoveContext|texMoveUVShellContext|texRotateContext|texScaleContext|texSelectContext|texSelectShortestPathCtx|texSmudgeUVContext|texWinToolCtx|text|textCurves|textField|textFieldButtonGrp|textFieldGrp|textManip|textScrollList|textToShelf|textureDisplacePlane|textureHairColor|texturePlacementContext|textureWindow|threadCount|threePointArcCtx|timeControl|timePort|timerX|toNativePath|toggle|toggleAxis|toggleWindowVisibility|tokenize|tokenizeList|tolerance|tolower|toolButton|toolCollection|toolDropped|toolHasOptions|toolPropertyWindow|torus|toupper|trace|track|trackCtx|transferAttributes|transformCompare|transformLimits|translator|trim|trunc|truncateFluidCache|truncateHairCache|tumble|tumbleCtx|turbulence|twoPointArcCtx|uiRes|uiTemplate|unassignInputDevice|undo|undoInfo|ungroup|uniform|unit|unloadPlugin|untangleUV|untitledFileName|untrim|upAxis|updateAE|userCtx|uvLink|uvSnapshot|validateShelfName|vectorize|view2dToolCtx|viewCamera|viewClipPlane|viewFit|viewHeadOn|viewLookAt|viewManip|viewPlace|viewSet|visor|volumeAxis|vortex|waitCursor|warning|webBrowser|webBrowserPrefs|whatIs|window|windowPref|wire|wireContext|workspace|wrinkle|wrinkleContext|writeTake|xbmLangPathList|xform)\b/,
        operator: [/\+[+=]?|-[-=]?|&&|\|\||[<>]=|[*\/!=]=?|[%^]/, {
            pattern: /(^|[^<])<(?!<)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^>])>(?!>)/,
            lookbehind: !0
        }],
        punctuation: /<<|>>|[.,:;?\[\](){}]/
    }, Prism.languages.mel.code.inside.rest = Prism.util.clone(Prism.languages.mel), Prism.languages.mizar = {
        comment: /::.+/,
        keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
        parameter: {
            pattern: /\$(?:10|\d)/,
            alias: "variable"
        },
        variable: /\w+(?=:)/,
        number: /(?:\b|-)\d+\b/,
        operator: /\.\.\.|->|&|\.?=/,
        punctuation: /\(#|#\)|[,:;\[\](){}]/
    }, Prism.languages.monkey = {
        string: /"[^"\r\n]*"/,
        comment: [/^#Rem\s+[\s\S]*?^#End/im, /'.+/],
        preprocessor: {
            pattern: /(^[ \t]*)#.+/m,
            lookbehind: !0,
            alias: "comment"
        },
        "function": /\w+(?=\()/,
        "type-char": {
            pattern: /(\w)[?%#$]/,
            lookbehind: !0,
            alias: "variable"
        },
        number: {
            pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+((?!\.\.)\.\d*)?|\$[\da-f]+)/i,
            lookbehind: !0
        },
        keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
        operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
        punctuation: /[.,:;()\[\]]/
    }, Prism.languages.nasm = {
        comment: /;.*$/m,
        string: /("|'|`)(\\?.)*?\1/m,
        label: {
            pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
            lookbehind: !0,
            alias: "function"
        },
        keyword: [/\[?BITS (16|32|64)\]?/m, {
            pattern: /(^\s*)section\s*[a-zA-Z\.]+:?/im,
            lookbehind: !0
        }, /(?:extern|global)[^;\r\n]*/im, /(?:CPU|FLOAT|DEFAULT).*$/m],
        register: {
            pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(bp|sp|si|di)|[cdefgs]s)\b/i,
            alias: "variable"
        },
        number: /(\b|-|(?=\$))(0[hx][\da-f]*\.?[\da-f]+(p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(\.?e[+-]?\d+)?[dt]?)\b/i,
        operator: /[\[\]*+\-\/%<>=&|$!]/
    }, Prism.languages.nginx = Prism.languages.extend("clike", {
        comment: {
            pattern: /(^|[^"{\\])#.*/,
            lookbehind: !0
        },
        keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i
    }), Prism.languages.insertBefore("nginx", "keyword", {
        variable: /\$[a-z_]+/i
    }), Prism.languages.nim = {
        comment: /#.*/,
        string: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
        number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
        keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
        "function": {
            pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
            inside: {
                operator: /\*$/
            }
        },
        ignore: {
            pattern: /`[^`\r\n]+`/,
            inside: {
                punctuation: /`/
            }
        },
        operator: {
            pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
            lookbehind: !0
        },
        punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
    }, Prism.languages.nix = {
        comment: /\/\*[\s\S]*?\*\/|#.*/,
        string: {
            pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
            inside: {
                interpolation: {
                    pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
                    lookbehind: !0,
                    inside: {
                        antiquotation: {
                            pattern: /^\$(?=\{)/,
                            alias: "variable"
                        }
                    }
                }
            }
        },
        url: [/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/, {
            pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
            lookbehind: !0
        }],
        antiquotation: {
            pattern: /\$(?=\{)/,
            alias: "variable"
        },
        number: /\b\d+\b/,
        keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
        "function": /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
        "boolean": /\b(?:true|false)\b/,
        operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
        punctuation: /[{}()[\].,:;]/
    }, Prism.languages.nix.string.inside.interpolation.inside.rest = Prism.util.clone(Prism.languages.nix), Prism.languages.nsis = {
        comment: {
            pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|[#;].*)/,
            lookbehind: !0
        },
        string: /("|')(\\?.)*?\1/,
        keyword: /\b(Abort|Add(BrandingImage|Size)|AdvSplash|Allow(RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(Font|Gradient|Image)|BrandingText|BringToFront|Call(InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(Directory|Font|ShortCut)|Delete(INISec|INIStr|RegKey|RegValue)?|Detail(Print|sButtonText)|Dialer|Dir(Text|Var|Verify)|EnableWindow|Enum(RegKey|RegValue)|Exch|Exec(Shell|Wait)?|ExpandEnvStrings|File(BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(Close|First|Next|Window)|FlushINI|Get(CurInstType|CurrentAddress|DlgItem|DLLVersion(Local)?|ErrorLevel|FileTime(Local)?|FullPathName|Function(Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(ButtonText|Colors|Dir(RegKey)?)|InstProgressFlags|Inst(Type(GetText|SetText)?)|Int(CmpU?|Fmt|Op)|IsWindow|Lang(DLL|String)|License(BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(Set|Text)|Manifest(DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(Dialogs|Exec)|NSISdl|OutFile|Page(Callbacks)?|Pop|Push|Quit|Read(EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(AutoClose|BrandingImage|Compress|Compressor(DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(InstDetails|UninstDetails|Window)|Silent(Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(INIStr|RegBin|RegDWORD|RegExpandStr|RegStr|Uninstaller)|XPStyle)\b/,
        property: /\b(admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(CR|CU|DD|LM|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,
        variable: /\$[({]?[-_\w]+[)}]?/i,
        number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
        operator: /--?|\+\+?|<=?|>=?|==?=?|&&?|\|?\||[?*\/~^%]/,
        punctuation: /[{}[\];(),.:]/,
        important: /!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)\b/i
    }, Prism.languages.objectivec = Prism.languages.extend("c", {
        keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
        string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
    }), Prism.languages.ocaml = {
        comment: /\(\*[\s\S]*?\*\)/,
        string: [/"(?:\\.|[^\\\r\n"])*"/, /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i],
        number: /\b-?(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
        type: {
            pattern: /\B['`][a-z\d_]*/i,
            alias: "variable"
        },
        directive: {
            pattern: /\B#[a-z\d_]+/i,
            alias: "function"
        },
        keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
        "boolean": /\b(?:false|true)\b/,
        operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&\*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
        punctuation: /[(){}\[\]|_.,:;]/
    }, Prism.languages.oz = {
        comment: /\/\*[\s\S]*?\*\/|%.*/,
        string: /"(?:[^"\\]|\\[\s\S])*"/,
        atom: {
            pattern: /'(?:[^'\\]|\\.)*'/,
            alias: "builtin"
        },
        keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
        "function": [/[a-z][A-Za-z\d]*(?=\()/, {
            pattern: /(\{)[A-Z][A-Za-z\d]*/,
            lookbehind: !0
        }],
        number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
        variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
        "attr-name": /\w+(?=:)/,
        operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
        punctuation: /[\[\](){}.:;?]/
    }, Prism.languages.parigp = {
        comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
        string: /"(?:[^"\\]|\\.)*"/,
        keyword: function() {
            var e = ["breakpoint", "break", "dbg_down", "dbg_err", "dbg_up", "dbg_x", "forcomposite", "fordiv", "forell", "forpart", "forprime", "forstep", "forsubgroup", "forvec", "for", "iferr", "if", "local", "my", "next", "return", "until", "while"];
            return e = e.map(function(e) {
                return e.split("").join(" *")
            }).join("|"), RegExp("\\b(?:" + e + ")\\b")
        }(),
        "function": /\w[\w ]*?(?= *\()/,
        number: {
            pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
            lookbehind: !0
        },
        operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
        punctuation: /[\[\]{}().,:;|]/
    }, Prism.languages.parser = Prism.languages.extend("markup", {
        keyword: {
            pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
            lookbehind: !0
        },
        variable: {
            pattern: /(^|[^^])\B\$(?:\w+|(?=[.\{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: !0,
            inside: {
                punctuation: /\.|:+/
            }
        },
        "function": {
            pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
            lookbehind: !0,
            inside: {
                keyword: {
                    pattern: /(^@)(?:GET_|SET_)/,
                    lookbehind: !0
                },
                punctuation: /\.|:+/
            }
        },
        escape: {
            pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
            alias: "builtin"
        },
        punctuation: /[\[\](){};]/
    }), Prism.languages.insertBefore("parser", "keyword", {
        "parser-comment": {
            pattern: /(\s)#.*/,
            lookbehind: !0,
            alias: "comment"
        },
        expression: {
            pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
            lookbehind: !0,
            inside: {
                string: {
                    pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
                    lookbehind: !0
                },
                keyword: Prism.languages.parser.keyword,
                variable: Prism.languages.parser.variable,
                "function": Prism.languages.parser["function"],
                "boolean": /\b(?:true|false)\b/,
                number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
                escape: Prism.languages.parser.escape,
                operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
                punctuation: Prism.languages.parser.punctuation
            }
        }
    }), Prism.languages.insertBefore("inside", "punctuation", {
        expression: Prism.languages.parser.expression,
        keyword: Prism.languages.parser.keyword,
        variable: Prism.languages.parser.variable,
        "function": Prism.languages.parser["function"],
        escape: Prism.languages.parser.escape,
        "parser-punctuation": {
            pattern: Prism.languages.parser.punctuation,
            alias: "punctuation"
        }
    }, Prism.languages.parser.tag.inside["attr-value"]), Prism.languages.pascal = {
        comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
        string: /(?:'(?:''|[^'\r\n])*'|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
        keyword: [{
            pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
            lookbehind: !0
        }, {
            pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
            lookbehind: !0
        }, {
            pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
            lookbehind: !0
        }, {
            pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
            lookbehind: !0
        }],
        number: [/[+-]?(?:[&%]\d+|\$[a-f\d]+)/i, /([+-]|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
        operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i, {
            pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
            lookbehind: !0
        }],
        punctuation: /\(\.|\.\)|[()\[\]:;,.]/
    }, Prism.languages.perl = {
        comment: [{
            pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\$])#.*/,
            lookbehind: !0
        }],
        string: [/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/, /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\1/, /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, /("|`)(?:[^\\]|\\[\s\S])*?\1/, /'(?:[^'\\\r\n]|\\.)*'/],
        regex: [/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[msixpodualngc]*/, /\b(?:m|qr)\s+([a-zA-Z0-9])(?:[^\\]|\\.)*?\1[msixpodualngc]*/, /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/, /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/, /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/, /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
            lookbehind: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:[^\\]|\\[\s\S])*?\2(?:[^\\]|\\[\s\S])*?\2[msixpodualngcer]*/,
            lookbehind: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
            lookbehind: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
            lookbehind: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
            lookbehind: !0
        }, {
            pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
            lookbehind: !0
        }, /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],
        variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
        filehandle: {
            pattern: /<(?![<=])\S*>|\b_\b/,
            alias: "symbol"
        },
        vstring: {
            pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/,
            alias: "string"
        },
        "function": {
            pattern: /sub [a-z0-9_]+/i,
            inside: {
                keyword: /sub/
            }
        },
        keyword: /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
        number: /\b-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)\b/,
        operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
        punctuation: /[{}[\];(),:]/
    }, Prism.languages.php = Prism.languages.extend("clike", {
        keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
            lookbehind: !0,
            greedy: !0
        }
    }), Prism.languages.insertBefore("php", "class-name", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }), Prism.languages.insertBefore("php", "keyword", {
        delimiter: /\?>|<\?(?:php)?/i,
        variable: /\$\w+\b/i,
        "package": {
            pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }
    }), Prism.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
        "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
            return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
        }))
    }), Prism.hooks.add("before-insert", function(e) {
        "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
    }), Prism.hooks.add("after-highlight", function(e) {
        if ("php" === e.language) {
            for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php").replace(/\$/g, "$$$$"));
            e.element.innerHTML = e.highlightedCode
        }
    }), Prism.hooks.add("wrap", function(e) {
        "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
    }), Prism.languages.insertBefore("php", "comment", {
        markup: {
            pattern: /<[^?]\/?(.*?)>/,
            inside: Prism.languages.markup
        },
        php: /\{\{\{PHP[0-9]+\}\}\}/
    })), Prism.languages.insertBefore("php", "variable", {
        "this": /\$this\b/,
        global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
        scope: {
            pattern: /\b[\w\\]+::/,
            inside: {
                keyword: /(static|self|parent)/,
                punctuation: /(::|\\)/
            }
        }
    }), Prism.languages.powershell = {
        comment: [{
            pattern: /(^|[^`])<#[\w\W]*?#>/,
            lookbehind: !0
        }, {
            pattern: /(^|[^`])#.*/,
            lookbehind: !0
        }],
        string: [{
            pattern: /"(`?[\w\W])*?"/,
            greedy: !0,
            inside: {
                "function": {
                    pattern: /[^`]\$\(.*?\)/,
                    inside: {}
                }
            }
        }, {
            pattern: /'([^']|'')*'/,
            greedy: !0
        }],
        namespace: /\[[a-z][\w\W]*?\]/i,
        "boolean": /\$(true|false)\b/i,
        variable: /\$\w+\b/i,
        "function": [/\b(Add-(Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(Csv|Json|StringData)|Convert-Path|ConvertTo-(Csv|Html|Json|Xml)|Copy-(Item|ItemProperty)|Debug-Process|Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(Custom|List|Table|Wide)|Get-(Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(Command|Object)|Move-(Item|ItemProperty)|New-(Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(Job|PSSession)|Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(Computer|Service)|Restore-Computer|Resume-(Job|Service)|Save-Help|Select-(Object|String|Xml)|Send-MailMessage|Set-(Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(Job|Process|Service|Sleep|Transaction)|Stop-(Computer|Job|Process|Service)|Suspend-(Job|Service)|Tee-Object|Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(Event|PSSessionConfiguration)|Update-(FormatData|Help|List|TypeData)|Use-Transaction|Wait-(Event|Job|Process)|Where-Object|Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i, /\b(ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
        keyword: /\b(Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
            pattern: /(\W?)(!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(and|x?or)|(Not)?(Like|Match|Contains|In)|Replace|Join|is(Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
        },
        punctuation: /[|{}[\];(),.]/
    }, Prism.languages.powershell.string[0].inside["boolean"] = Prism.languages.powershell["boolean"], Prism.languages.powershell.string[0].inside.variable = Prism.languages.powershell.variable, Prism.languages.powershell.string[0].inside["function"].inside = Prism.util.clone(Prism.languages.powershell), Prism.languages.processing = Prism.languages.extend("clike", {
        keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
        operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
    }), Prism.languages.insertBefore("processing", "number", {
        constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
        type: {
            pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z][A-Za-z\d_]*)\b/,
            alias: "variable"
        }
    }), Prism.languages.processing["function"].pattern = /[a-z0-9_]+(?=\s*\()/i, Prism.languages.processing["class-name"].alias = "variable", Prism.languages.prolog = {
        comment: [/%.+/, /\/\*[\s\S]*?\*\//],
        string: /(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        builtin: /\b(?:fx|fy|xf[xy]?|yfx?)\b/,
        variable: /\b[A-Z_]\w*/,
        "function": /\b[a-z]\w*(?:(?=\()|\/\d+)/,
        number: /\b\d+\.?\d*/,
        operator: /[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,
        punctuation: /[(){}\[\],]/
    }, Prism.languages.properties = {
        comment: /^[ \t]*[#!].*$/m,
        "attr-value": {
            pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|.)+/m,
            lookbehind: !0
        },
        "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[ =:]| )/m,
        punctuation: /[=:]/
    }, Prism.languages.protobuf = Prism.languages.extend("clike", {
        keyword: /\b(package|import|message|enum)\b/,
        builtin: /\b(required|repeated|optional|reserved)\b/,
        primitive: {
            pattern: /\b(double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes)\b/,
            alias: "symbol"
        }
    }), ! function(e) {
        e.languages.puppet = {
            heredoc: [{
                pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                lookbehind: !0,
                alias: "string",
                inside: {
                    punctuation: /(?=\S).*\S(?= *$)/
                }
            }, {
                pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r))*?[ \t]*\|?[ \t]*-?[ \t]*\2/,
                lookbehind: !0,
                alias: "string",
                inside: {
                    punctuation: /(?=\S).*\S(?= *$)/
                }
            }, {
                pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
                alias: "string",
                inside: {
                    punctuation: {
                        pattern: /(\().+?(?=\))/,
                        lookbehind: !0
                    }
                }
            }],
            "multiline-comment": {
                pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                lookbehind: !0,
                alias: "comment"
            },
            regex: {
                pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
                lookbehind: !0,
                inside: {
                    "extended-regex": {
                        pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
                        inside: {
                            comment: /#.*/
                        }
                    }
                }
            },
            comment: {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0
            },
            string: {
                pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|(?!\1)[^\\]|\\[\s\S])*\1/,
                inside: {
                    "double-quoted": {
                        pattern: /^"[\s\S]*"$/,
                        inside: {}
                    }
                }
            },
            variable: {
                pattern: /\$(?:::)?\w+(?:::\w+)*/,
                inside: {
                    punctuation: /::/
                }
            },
            "attr-name": /(?:\w+|\*)(?=\s*=>)/,
            "function": [{
                pattern: /(\.)(?!\d)\w+/,
                lookbehind: !0
            }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],
            number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
            "boolean": /\b(?:true|false)\b/,
            keyword: /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
            datatype: {
                pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
                alias: "symbol"
            },
            operator: /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
            punctuation: /[\[\]{}().,;]|:+/
        };
        var t = [{
            pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
            lookbehind: !0,
            inside: {
                "short-variable": {
                    pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
                    lookbehind: !0,
                    alias: "variable",
                    inside: {
                        punctuation: /::/
                    }
                },
                delimiter: {
                    pattern: /^\$/,
                    alias: "variable"
                },
                rest: e.util.clone(e.languages.puppet)
            }
        }, {
            pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
            lookbehind: !0,
            alias: "variable",
            inside: {
                punctuation: /::/
            }
        }];
        e.languages.puppet.heredoc[0].inside.interpolation = t, e.languages.puppet.string.inside["double-quoted"].inside.interpolation = t
    }(Prism), ! function(e) {
        e.languages.pure = {
            "inline-lang": {
                pattern: /%<[\s\S]+?%>/,
                inside: {
                    lang: {
                        pattern: /(^%< *)-\*-.+?-\*-/,
                        lookbehind: !0,
                        alias: "comment"
                    },
                    delimiter: {
                        pattern: /^%<.*|%>$/,
                        alias: "punctuation"
                    }
                }
            },
            comment: [{
                pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                lookbehind: !0
            }, {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: !0
            }, /#!.+/],
            string: /"(?:\\.|[^"\\\r\n])*"/,
            number: {
                pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
                lookbehind: !0
            },
            keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
            "function": /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
            special: {
                pattern: /\b__[a-z]+__\b/i,
                alias: "builtin"
            },
            operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
            punctuation: /[(){}\[\];,|]/
        };
        var t = ["c", {
                lang: "c++",
                alias: "cpp"
            }, "fortran", "ats", "dsp"],
            n = "%< *-\\*- *{lang}\\d* *-\\*-[\\s\\S]+?%>";
        t.forEach(function(t) {
            var i = t;
            if ("string" != typeof t && (i = t.alias, t = t.lang), e.languages[i]) {
                var r = {};
                r["inline-lang-" + i] = {
                    pattern: RegExp(n.replace("{lang}", t.replace(/([.+*?\/\\(){}\[\]])/g, "\\$1")), "i"),
                    inside: e.util.clone(e.languages.pure["inline-lang"].inside)
                }, r["inline-lang-" + i].inside.rest = e.util.clone(e.languages[i]), e.languages.insertBefore("pure", "inline-lang", r)
            }
        }), e.languages.c && (e.languages.pure["inline-lang"].inside.rest = e.util.clone(e.languages.c))
    }(Prism), Prism.languages.python = {
        "triple-quoted-string": {
            pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
            alias: "string"
        },
        comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0
        },
        string: {
            pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
            greedy: !0
        },
        "function": {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
            lookbehind: !0
        },
        "class-name": {
            pattern: /(\bclass\s+)[a-z0-9_]+/i,
            lookbehind: !0
        },
        keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
        "boolean": /\b(?:True|False)\b/,
        number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
        operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.q = {
        string: /"(?:\\.|[^"\\\r\n])*"/,
        comment: [{
            pattern: /([\t )\]}])\/.*/,
            lookbehind: !0
        }, {
            pattern: /(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,
            lookbehind: !0
        }, /^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m, /^#!.+/m],
        symbol: /`(?::\S+|[\w.]*)/,
        datetime: {
            pattern: /0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,
            alias: "number"
        },
        number: /\b-?(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\da-fA-F]+|\d+\.?\d*(?:e[+-]?\d+)?[hjfeb]?)/,
        keyword: /\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,
        adverb: {
            pattern: /['\/\\]:?|\beach\b/,
            alias: "function"
        },
        verb: {
            pattern: /(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?_~=|$&#@^]):?/,
            alias: "operator"
        },
        punctuation: /[(){}\[\];.]/
    }, Prism.languages.qore = Prism.languages.extend("clike", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:\/\/|#).*)/,
            lookbehind: !0
        },
        string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\])*\1/,
        variable: /\$(?!\d)\w+\b/,
        keyword: /\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,
        number: /\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,
        "boolean": /\b(?:true|false)\b/i,
        operator: {
            pattern: /(^|[^\.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,
            lookbehind: !0
        },
        "function": /\$?\b(?!\d)\w+(?=\()/
    }), Prism.languages.r = {
        comment: /#.*/,
        string: /(['"])(?:\\?.)*?\1/,
        "percent-operator": {
            pattern: /%[^%\s]*%/,
            alias: "operator"
        },
        "boolean": /\b(?:TRUE|FALSE)\b/,
        ellipsis: /\.\.(?:\.|\d+)/,
        number: [/\b(?:NaN|Inf)\b/, /\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]?\d+)?[iL]?\b/],
        keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
        operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
        punctuation: /[(){}\[\],;]/
    }, ! function(e) {
        var t = e.util.clone(e.languages.javascript);
        e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;
        var n = e.util.clone(e.languages.jsx);
        delete n.punctuation, n = e.languages.insertBefore("jsx", "operator", {
            punctuation: /=(?={)|[{}[\];(),.:]/
        }, {
            jsx: n
        }), e.languages.insertBefore("inside", "attr-value", {
            script: {
                pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
                inside: n,
                alias: "language-javascript"
            }
        }, e.languages.jsx.tag)
    }(Prism), Prism.languages.rest = {
        table: [{
            pattern: /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
            lookbehind: !0,
            inside: {
                punctuation: /\||(?:\+[=-]+)+\+/
            }
        }, {
            pattern: /(\s*)(?:=+ +)+=+((?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,
            lookbehind: !0,
            inside: {
                punctuation: /[=-]+/
            }
        }],
        "substitution-def": {
            pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
            lookbehind: !0,
            inside: {
                substitution: {
                    pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
                    alias: "attr-value",
                    inside: {
                        punctuation: /^\||\|$/
                    }
                },
                directive: {
                    pattern: /( +)[^:]+::/,
                    lookbehind: !0,
                    alias: "function",
                    inside: {
                        punctuation: /::$/
                    }
                }
            }
        },
        "link-target": [{
            pattern: /(^\s*\.\. )\[[^\]]+\]/m,
            lookbehind: !0,
            alias: "string",
            inside: {
                punctuation: /^\[|\]$/
            }
        }, {
            pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
            lookbehind: !0,
            alias: "string",
            inside: {
                punctuation: /^_|:$/
            }
        }],
        directive: {
            pattern: /(^\s*\.\. )[^:]+::/m,
            lookbehind: !0,
            alias: "function",
            inside: {
                punctuation: /::$/
            }
        },
        comment: {
            pattern: /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
            lookbehind: !0
        },
        title: [{
            pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
            inside: {
                punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                important: /.+/
            }
        }, {
            pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
            lookbehind: !0,
            inside: {
                punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
                important: /.+/
            }
        }],
        hr: {
            pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
            lookbehind: !0,
            alias: "punctuation"
        },
        field: {
            pattern: /(^\s*):[^:\r\n]+:(?= )/m,
            lookbehind: !0,
            alias: "attr-name"
        },
        "command-line-option": {
            pattern: /(^\s*)(?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:\-\-|\/)[a-z\d-]+)(?:[ =](?:[a-z][a-z\d_-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
            lookbehind: !0,
            alias: "symbol"
        },
        "literal-block": {
            pattern: /::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,
            inside: {
                "literal-block-punctuation": {
                    pattern: /^::/,
                    alias: "punctuation"
                }
            }
        },
        "quoted-literal-block": {
            pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
            inside: {
                "literal-block-punctuation": {
                    pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
                    alias: "punctuation"
                }
            }
        },
        "list-bullet": {
            pattern: /(^\s*)(?:[*+\-\u2022\u2023\u2043]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
            lookbehind: !0,
            alias: "punctuation"
        },
        "doctest-block": {
            pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
            lookbehind: !0,
            inside: {
                punctuation: /^>>>/
            }
        },
        inline: [{
            pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
            lookbehind: !0,
            inside: {
                bold: {
                    pattern: /(^\*\*).+(?=\*\*$)/,
                    lookbehind: !0
                },
                italic: {
                    pattern: /(^\*).+(?=\*$)/,
                    lookbehind: !0
                },
                "inline-literal": {
                    pattern: /(^``).+(?=``$)/,
                    lookbehind: !0,
                    alias: "symbol"
                },
                role: {
                    pattern: /^:[^:]+:|:[^:]+:$/,
                    alias: "function",
                    inside: {
                        punctuation: /^:|:$/
                    }
                },
                "interpreted-text": {
                    pattern: /(^`).+(?=`$)/,
                    lookbehind: !0,
                    alias: "attr-value"
                },
                substitution: {
                    pattern: /(^\|).+(?=\|$)/,
                    lookbehind: !0,
                    alias: "attr-value"
                },
                punctuation: /\*\*?|``?|\|/
            }
        }],
        link: [{
            pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
            alias: "string",
            inside: {
                punctuation: /^\[|\]_$/
            }
        }, {
            pattern: /(?:\b[a-z\d](?:[_.:+]?[a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
            alias: "string",
            inside: {
                punctuation: /^_?`|`$|`?_?_$/
            }
        }],
        punctuation: {
            pattern: /(^\s*)(?:\|(?= |$)|(?:---?|\u2014|\.\.|__)(?= )|\.\.$)/m,
            lookbehind: !0
        }
    }, Prism.languages.rip = {
        comment: /#.*/,
        keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
        builtin: /@|\bSystem\b/,
        "boolean": /\b(?:true|false)\b/,
        date: /\b\d{4}-\d{2}-\d{2}\b/,
        time: /\b\d{2}:\d{2}:\d{2}\b/,
        datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
        character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
        regex: {
            pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
            lookbehind: !0
        },
        symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
        string: /("|')(\\?.)*?\1/,
        number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
        punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
        reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
    }, Prism.languages.roboconf = {
        comment: /#.*/,
        keyword: {
            pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
            lookbehind: !0
        },
        component: {
            pattern: /[\w-]+(?=[ \t]*\{)/,
            alias: "variable"
        },
        property: /[\w.-]+(?=[ \t]*:)/,
        value: {
            pattern: /(=[ \t]*)[^,;]+/,
            lookbehind: !0,
            alias: "attr-value"
        },
        optional: {
            pattern: /\(optional\)/,
            alias: "builtin"
        },
        wildcard: {
            pattern: /(\.)\*/,
            lookbehind: !0,
            alias: "operator"
        },
        punctuation: /[{},.;:=]/
    }, ! function(e) {
        e.languages.crystal = e.languages.extend("ruby", {
            keyword: [/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|self|sizeof|struct|super|then|type|typeof|union|unless|until|when|while|with|yield|__DIR__|__FILE__|__LINE__)\b/, {
                pattern: /(\.\s*)(?:is_a|responds_to)\?/,
                lookbehind: !0
            }],
            number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[0-9a-fA-F_]*[0-9a-fA-F]|(?:[0-9](?:[0-9_]*[0-9])?)(?:\.[0-9_]*[0-9])?(?:[eE][+-]?[0-9_]*[0-9])?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
        });
        var t = e.util.clone(e.languages.crystal);
        e.languages.insertBefore("crystal", "string", {
            attribute: {
                pattern: /@\[.+?\]/,
                alias: "attr-name",
                inside: {
                    delimiter: {
                        pattern: /^@\[|\]$/,
                        alias: "tag"
                    },
                    rest: t
                }
            },
            expansion: [{
                pattern: /\{\{.+?\}\}/,
                inside: {
                    delimiter: {
                        pattern: /^\{\{|\}\}$/,
                        alias: "tag"
                    },
                    rest: t
                }
            }, {
                pattern: /\{%.+?%\}/,
                inside: {
                    delimiter: {
                        pattern: /^\{%|%\}$/,
                        alias: "tag"
                    },
                    rest: t
                }
            }]
        })
    }(Prism), Prism.languages.rust = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0
        }],
        string: [/b?r(#*)"(?:\\?.)*?"\1/, /b?("|')(?:\\?.)*?\1/],
        keyword: /\b(?:abstract|alignof|as|be|box|break|const|continue|crate|do|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|struct|super|true|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,
        attribute: {
            pattern: /#!?\[.+?\]/,
            alias: "attr-name"
        },
        "function": [/[a-z0-9_]+(?=\s*\()/i, /[a-z0-9_]+!(?=\s*\(|\[)/i],
        "macro-rules": {
            pattern: /[a-z0-9_]+!/i,
            alias: "function"
        },
        number: /\b-?(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
        "closure-params": {
            pattern: /\|[^|]*\|(?=\s*[{-])/,
            inside: {
                punctuation: /[\|:,]/,
                operator: /[&*]/
            }
        },
        punctuation: /[{}[\];(),:]|\.+|->/,
        operator: /[-+*\/%!^=]=?|@|&[&=]?|\|[|=]?|<<?=?|>>?=?/
    }, Prism.languages.sas = {
        datalines: {
            pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
            alias: "string",
            inside: {
                keyword: {
                    pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
                    lookbehind: !0
                },
                punctuation: /;/
            }
        },
        comment: [{
            pattern: /(^\s*|;\s*)\*.*;/m,
            lookbehind: !0
        }, /\/\*[\s\S]+?\*\//],
        datetime: {
            pattern: /'[^']+'(?:dt?|t)\b/i,
            alias: "number"
        },
        string: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
        keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then)\b/i,
        number: /(?:\B-|\b)(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
        operator: /\*\*?|\|\|?|!!?|\xa6\xa6?|<[>=]?|>[<=]?|[-+\/=&]|[~\xac^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
        punctuation: /[$%@.(){}\[\];,\\]/
    }, ! function(e) {
        e.languages.sass = e.languages.extend("css", {
            comment: {
                pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
                lookbehind: !0
            }
        }), e.languages.insertBefore("sass", "atrule", {
            "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: {
                    atrule: /(?:@[\w-]+|[+=])/m
                }
            }
        }), delete e.languages.sass.atrule;
        var t = /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,
            n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
                pattern: /(\s+)-(?=\s)/,
                lookbehind: !0
            }];
        e.languages.insertBefore("sass", "property", {
            "variable-line": {
                pattern: /^[ \t]*\$.+/m,
                inside: {
                    punctuation: /:/,
                    variable: t,
                    operator: n
                }
            },
            "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                inside: {
                    property: [/[^:\s]+(?=\s*:)/, {
                        pattern: /(:)[^:\s]+/,
                        lookbehind: !0
                    }],
                    punctuation: /:/,
                    variable: t,
                    operator: n,
                    important: e.languages.sass.important
                }
            }
        }), delete e.languages.sass.property, delete e.languages.sass.important, delete e.languages.sass.selector, e.languages.insertBefore("sass", "punctuation", {
            selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0
            }
        })
    }(Prism), Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
            inside: {
                parent: {
                    pattern: /&/,
                    alias: "important"
                },
                placeholder: /%[-_\w]+/,
                variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.scss.property = {
        pattern: /(?:[\w-]|\$[-_\w]+|#\{\$[-_\w]+\})+(?=\s*:)/i,
        inside: {
            variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
        }
    }, Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-_\w]+|#\{\$[-_\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-_\w]+/,
            alias: "selector"
        },
        statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword"
        },
        "boolean": /\b(?:true|false)\b/,
        "null": /\bnull\b/,
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss), Prism.languages.scala = Prism.languages.extend("java", {
        keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
        string: [{
            pattern: /"""[\W\w]*?"""/,
            greedy: !0
        }, {
            pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
            greedy: !0
        }],
        builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
        number: /\b(?:0x[\da-f]*\.?[\da-f]+|\d*\.?\d+e?\d*[dfl]?)\b/i,
        symbol: /'[^\d\s\\]\w*/
    }), delete Prism.languages.scala["class-name"], delete Prism.languages.scala["function"], Prism.languages.scheme = {
        comment: /;.*/,
        string: /"(?:[^"\\\r\n]|\\.)*?"|'[^('\s]*/,
        keyword: {
            pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)/,
            lookbehind: !0
        },
        builtin: {
            pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)/,
            lookbehind: !0
        },
        number: {
            pattern: /(\s|\))[-+]?[0-9]*\.?[0-9]+(?:\s*[-+]\s*[0-9]*\.?[0-9]+i)?\b/,
            lookbehind: !0
        },
        "boolean": /#[tf]/,
        operator: {
            pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)/,
            lookbehind: !0
        },
        "function": {
            pattern: /(\()[^\s()]*(?=\s)/,
            lookbehind: !0
        },
        punctuation: /[()]/
    }, Prism.languages.smalltalk = {
        comment: /"(?:""|[^"])+"/,
        string: /'(?:''|[^'])+'/,
        symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
        "block-arguments": {
            pattern: /(\[\s*):[^\[|]*?\|/,
            lookbehind: !0,
            inside: {
                variable: /:[\da-z]+/i,
                punctuation: /\|/
            }
        },
        "temporary-variables": {
            pattern: /\|[^|]+\|/,
            inside: {
                variable: /[\da-z]+/i,
                punctuation: /\|/
            }
        },
        keyword: /\b(?:nil|true|false|self|super|new)\b/,
        character: {
            pattern: /\$./,
            alias: "string"
        },
        number: [/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/, /(?:\B-|\b)\d+(?:\.\d+)?(?:e-?\d+)?/],
        operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
        punctuation: /[.;:?\[\](){}]/
    }, ! function(e) {
        var t = /\{\*[\w\W]+?\*\}|\{[\w\W]+?\}/g,
            n = "{literal}",
            i = "{/literal}",
            r = !1;
        e.languages.smarty = e.languages.extend("markup", {
            smarty: {
                pattern: t,
                inside: {
                    delimiter: {
                        pattern: /^\{|\}$/i,
                        alias: "punctuation"
                    },
                    string: /(["'])(?:\\?.)*?\1/,
                    number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][-+]?\d+)?)\b/,
                    variable: [/\$(?!\d)\w+/, /#(?!\d)\w+#/, {
                        pattern: /(\.|->)(?!\d)\w+/,
                        lookbehind: !0
                    }, {
                        pattern: /(\[)(?!\d)\w+(?=\])/,
                        lookbehind: !0
                    }],
                    "function": [{
                        pattern: /(\|\s*)@?(?!\d)\w+/,
                        lookbehind: !0
                    }, /^\/?(?!\d)\w+/, /(?!\d)\w+(?=\()/],
                    "attr-name": {
                        pattern: /\w+\s*=\s*(?:(?!\d)\w+)?/,
                        inside: {
                            variable: {
                                pattern: /(=\s*)(?!\d)\w+/,
                                lookbehind: !0
                            },
                            operator: /=/
                        }
                    },
                    punctuation: [/[\[\]().,:`]|\->/],
                    operator: [/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/, /\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/, /\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],
                    keyword: /\b(?:false|off|on|no|true|yes)\b/
                }
            }
        }), e.languages.insertBefore("smarty", "tag", {
            "smarty-comment": {
                pattern: /\{\*[\w\W]*?\*\}/,
                alias: ["smarty", "comment"]
            }
        }), e.hooks.add("before-highlight", function(e) {
            "smarty" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(t, function(t) {
                return t === i && (r = !1), r ? t : (t === n && (r = !0), e.tokenStack.push(t), "___SMARTY" + e.tokenStack.length + "___")
            }))
        }), e.hooks.add("before-insert", function(e) {
            "smarty" === e.language && (e.code = e.backupCode, delete e.backupCode)
        }), e.hooks.add("after-highlight", function(t) {
            if ("smarty" === t.language) {
                for (var n, i = 0; n = t.tokenStack[i]; i++) t.highlightedCode = t.highlightedCode.replace("___SMARTY" + (i + 1) + "___", e.highlight(n, t.grammar, "smarty").replace(/\$/g, "$$$$"));
                t.element.innerHTML = t.highlightedCode
            }
        })
    }(Prism), Prism.languages.sql = {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0
        },
        string: {
            pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,
            lookbehind: !0
        },
        variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
        "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
        keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
        "boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
        number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
        operator: /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
        punctuation: /[;[\]()`,.]/
    }, ! function(e) {
        var t = {
            url: /url\((["']?).*?\1\)/i,
            string: /("|')(?:[^\\\r\n]|\\(?:\r\n|[\s\S]))*?\1/,
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
                pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            "boolean": /\b(?:true|false)\b/,
            operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
            punctuation: /[{}()\[\];:,]/
        };
        t.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: e.util.clone(t)
        }, t.func = {
            pattern: /[\w-]+\([^)]*\).*/,
            inside: {
                "function": /^[^(]+/,
                rest: e.util.clone(t)
            }
        }, e.languages.stylus = {
            comment: {
                pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*)/,
                lookbehind: !0
            },
            "atrule-declaration": {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: {
                    atrule: /^@[\w-]+/,
                    rest: t
                }
            },
            "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: {
                    variable: /^\S+/,
                    rest: t
                }
            },
            statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: {
                    keyword: /^\S+/,
                    rest: t
                }
            },
            "property-declaration": {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                    property: {
                        pattern: /^[^\s:]+/,
                        inside: {
                            interpolation: t.interpolation
                        }
                    },
                    rest: t
                }
            },
            selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                    interpolation: t.interpolation,
                    punctuation: /[{},]/
                }
            },
            func: t.func,
            string: t.string,
            interpolation: t.interpolation,
            punctuation: /[{}()\[\];:.]/
        }
    }(Prism), Prism.languages.swift = Prism.languages.extend("clike", {
        string: {
            pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                    inside: {
                        delimiter: {
                            pattern: /^\\\(|\)$/,
                            alias: "variable"
                        }
                    }
                }
            }
        },
        keyword: /\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
        number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
        constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
        atrule: /@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
        builtin: /\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
    }), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.util.clone(Prism.languages.swift), Prism.languages.tcl = {
        comment: {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0
        },
        string: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
        variable: [{
            pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/,
            lookbehind: !0
        }, {
            pattern: /(\$){[^}]+}/,
            lookbehind: !0
        }, {
            pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*[a-zA-Z0-9_]+/m,
            lookbehind: !0
        }],
        "function": {
            pattern: /(^\s*proc[ \t]+)[^\s]+/m,
            lookbehind: !0
        },
        builtin: [{
            pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
            lookbehind: !0
        }, /\b(elseif|else)\b/],
        scope: {
            pattern: /(^\s*)(global|upvar|variable)\b/m,
            lookbehind: !0,
            alias: "constant"
        },
        keyword: {
            pattern: /(^\s*|\[)(after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
            lookbehind: !0
        },
        operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
        punctuation: /[{}()\[\]]/
    }, ! function(e) {
        var t = "(?:\\([^|)]+\\)|\\[[^\\]]+\\]|\\{[^}]+\\})+",
            n = {
                css: {
                    pattern: /\{[^}]+\}/,
                    inside: {
                        rest: e.languages.css
                    }
                },
                "class-id": {
                    pattern: /(\()[^)]+(?=\))/,
                    lookbehind: !0,
                    alias: "attr-value"
                },
                lang: {
                    pattern: /(\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    alias: "attr-value"
                },
                punctuation: /[\\\/]\d+|\S/
            };
        e.languages.textile = e.languages.extend("markup", {
            phrase: {
                pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
                lookbehind: !0,
                inside: {
                    "block-tag": {
                        pattern: RegExp("^[a-z]\\w*(?:" + t + "|[<>=()])*\\."),
                        inside: {
                            modifier: {
                                pattern: RegExp("(^[a-z]\\w*)(?:" + t + "|[<>=()])+(?=\\.)"),
                                lookbehind: !0,
                                inside: e.util.clone(n)
                            },
                            tag: /^[a-z]\w*/,
                            punctuation: /\.$/
                        }
                    },
                    list: {
                        pattern: RegExp("^[*#]+(?:" + t + ")?\\s+.+", "m"),
                        inside: {
                            modifier: {
                                pattern: RegExp("(^[*#]+)" + t),
                                lookbehind: !0,
                                inside: e.util.clone(n)
                            },
                            punctuation: /^[*#]+/
                        }
                    },
                    table: {
                        pattern: RegExp("^(?:(?:" + t + "|[<>=()^~])+\\.\\s*)?(?:\\|(?:(?:" + t + "|[<>=()^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|", "m"),
                        inside: {
                            modifier: {
                                pattern: RegExp("(^|\\|(?:\\r?\\n|\\r)?)(?:" + t + "|[<>=()^~_]|[\\\\/]\\d+)+(?=\\.)"),
                                lookbehind: !0,
                                inside: e.util.clone(n)
                            },
                            punctuation: /\||^\./
                        }
                    },
                    inline: {
                        pattern: RegExp("(\\*\\*|__|\\?\\?|[*_%@+\\-^~])(?:" + t + ")?.+?\\1"),
                        inside: {
                            bold: {
                                pattern: RegExp("((^\\*\\*?)(?:" + t + ")?).+?(?=\\2)"),
                                lookbehind: !0
                            },
                            italic: {
                                pattern: RegExp("((^__?)(?:" + t + ")?).+?(?=\\2)"),
                                lookbehind: !0
                            },
                            cite: {
                                pattern: RegExp("(^\\?\\?(?:" + t + ")?).+?(?=\\?\\?)"),
                                lookbehind: !0,
                                alias: "string"
                            },
                            code: {
                                pattern: RegExp("(^@(?:" + t + ")?).+?(?=@)"),
                                lookbehind: !0,
                                alias: "keyword"
                            },
                            inserted: {
                                pattern: RegExp("(^\\+(?:" + t + ")?).+?(?=\\+)"),
                                lookbehind: !0
                            },
                            deleted: {
                                pattern: RegExp("(^-(?:" + t + ")?).+?(?=-)"),
                                lookbehind: !0
                            },
                            span: {
                                pattern: RegExp("(^%(?:" + t + ")?).+?(?=%)"),
                                lookbehind: !0
                            },
                            modifier: {
                                pattern: RegExp("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])" + t),
                                lookbehind: !0,
                                inside: e.util.clone(n)
                            },
                            punctuation: /[*_%?@+\-^~]+/
                        }
                    },
                    "link-ref": {
                        pattern: /^\[[^\]]+\]\S+$/m,
                        inside: {
                            string: {
                                pattern: /(\[)[^\]]+(?=\])/,
                                lookbehind: !0
                            },
                            url: {
                                pattern: /(\])\S+$/,
                                lookbehind: !0
                            },
                            punctuation: /[\[\]]/
                        }
                    },
                    link: {
                        pattern: RegExp('"(?:' + t + ')?[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                        inside: {
                            text: {
                                pattern: RegExp('(^"(?:' + t + ')?)[^"]+(?=")'),
                                lookbehind: !0
                            },
                            modifier: {
                                pattern: RegExp('(^")' + t),
                                lookbehind: !0,
                                inside: e.util.clone(n)
                            },
                            url: {
                                pattern: /(:).+/,
                                lookbehind: !0
                            },
                            punctuation: /[":]/
                        }
                    },
                    image: {
                        pattern: RegExp("!(?:" + t + "|[<>=()])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),
                        inside: {
                            source: {
                                pattern: RegExp("(^!(?:" + t + "|[<>=()])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),
                                lookbehind: !0,
                                alias: "url"
                            },
                            modifier: {
                                pattern: RegExp("(^!)(?:" + t + "|[<>=()])+"),
                                lookbehind: !0,
                                inside: e.util.clone(n)
                            },
                            url: {
                                pattern: /(:).+/,
                                lookbehind: !0
                            },
                            punctuation: /[!:]/
                        }
                    },
                    footnote: {
                        pattern: /\b\[\d+\]/,
                        alias: "comment",
                        inside: {
                            punctuation: /\[|\]/
                        }
                    },
                    acronym: {
                        pattern: /\b[A-Z\d]+\([^)]+\)/,
                        inside: {
                            comment: {
                                pattern: /(\()[^)]+(?=\))/,
                                lookbehind: !0
                            },
                            punctuation: /[()]/
                        }
                    },
                    mark: {
                        pattern: /\b\((TM|R|C)\)/,
                        alias: "comment",
                        inside: {
                            punctuation: /[()]/
                        }
                    }
                }
            }
        });
        var i = {
            inline: e.util.clone(e.languages.textile.phrase.inside.inline),
            link: e.util.clone(e.languages.textile.phrase.inside.link),
            image: e.util.clone(e.languages.textile.phrase.inside.image),
            footnote: e.util.clone(e.languages.textile.phrase.inside.footnote),
            acronym: e.util.clone(e.languages.textile.phrase.inside.acronym),
            mark: e.util.clone(e.languages.textile.phrase.inside.mark)
        };
        e.languages.textile.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, e.languages.textile.phrase.inside.inline.inside.bold.inside = i, e.languages.textile.phrase.inside.inline.inside.italic.inside = i, e.languages.textile.phrase.inside.inline.inside.inserted.inside = i, e.languages.textile.phrase.inside.inline.inside.deleted.inside = i, e.languages.textile.phrase.inside.inline.inside.span.inside = i, e.languages.textile.phrase.inside.table.inside.inline = i.inline, e.languages.textile.phrase.inside.table.inside.link = i.link, e.languages.textile.phrase.inside.table.inside.image = i.image, e.languages.textile.phrase.inside.table.inside.footnote = i.footnote, e.languages.textile.phrase.inside.table.inside.acronym = i.acronym, e.languages.textile.phrase.inside.table.inside.mark = i.mark
    }(Prism), Prism.languages.twig = {
        comment: /\{#[\s\S]*?#\}/,
        tag: {
            pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
            inside: {
                ld: {
                    pattern: /^(?:\{\{\-?|\{%\-?\s*\w+)/,
                    inside: {
                        punctuation: /^(?:\{\{|\{%)\-?/,
                        keyword: /\w+/
                    }
                },
                rd: {
                    pattern: /\-?(?:%\}|\}\})$/,
                    inside: {
                        punctuation: /.*/
                    }
                },
                string: {
                    pattern: /("|')(?:\\?.)*?\1/,
                    inside: {
                        punctuation: /^['"]|['"]$/
                    }
                },
                keyword: /\b(?:even|if|odd)\b/,
                "boolean": /\b(?:true|false|null)\b/,
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+([Ee][-+]?\d+)?)\b/,
                operator: [{
                    pattern: /(\s)(?:and|b\-and|b\-xor|b\-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
                    lookbehind: !0
                }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],
                property: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/,
                punctuation: /[()\[\]{}:.,]/
            }
        },
        other: {
            pattern: /\S(?:[\s\S]*\S)?/,
            inside: Prism.languages.markup
        }
    }, Prism.languages.typescript = Prism.languages.extend("javascript", {
        keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/
    }), Prism.languages.verilog = {
        comment: /\/\/.*|\/\*[\w\W]*?\*\//,
        string: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        property: /\B\$\w+\b/,
        constant: /\B`\w+\b/,
        "function": /[a-z\d_]+(?=\()/i,
        keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
        important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
        number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
        operator: /[-+{}^~%*\/?=!<>&|]+/,
        punctuation: /[[\];(),.:]/
    }, Prism.languages.vhdl = {
        comment: /--.+/,
        "vhdl-vectors": {
            pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
            alias: "number"
        },
        "quoted-function": {
            pattern: /"\S+?"(?=\()/,
            alias: "function"
        },
        string: /"(?:[^\\\r\n]|\\?(?:\r\n|[\s\S]))*?"/,
        constant: /\b(?:use|library)\b/i,
        keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
        "boolean": /\b(?:true|false)\b/i,
        "function": /[a-z0-9_]+(?=\()/i,
        number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
        operator: /[<>]=?|:=|[-+*\/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.vim = {
        string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
        comment: /".*/,
        "function": /\w+(?=\()/,
        keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
        builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
        number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
        operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
        punctuation: /[{}[\](),;:]/
    }, Prism.languages.wiki = Prism.languages.extend("markup", {
        "block-comment": {
            pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
            lookbehind: !0,
            alias: "comment"
        },
        heading: {
            pattern: /^(=+).+?\1/m,
            inside: {
                punctuation: /^=+|=+$/,
                important: /.+/
            }
        },
        emphasis: {
            pattern: /('{2,5}).+?\1/,
            inside: {
                "bold italic": {
                    pattern: /(''''').+?(?=\1)/,
                    lookbehind: !0
                },
                bold: {
                    pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
                    lookbehind: !0
                },
                italic: {
                    pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
                    lookbehind: !0
                },
                punctuation: /^''+|''+$/
            }
        },
        hr: {
            pattern: /^-{4,}/m,
            alias: "punctuation"
        },
        url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
        variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?}}/],
        symbol: [/^#redirect/im, /~{3,5}/],
        "table-tag": {
            pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
            lookbehind: !0,
            inside: {
                "table-bar": {
                    pattern: /\|$/,
                    alias: "punctuation"
                },
                rest: Prism.languages.markup.tag.inside
            }
        },
        punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
    }), Prism.languages.insertBefore("wiki", "tag", {
        nowiki: {
            pattern: /<(nowiki|pre|source)\b[\w\W]*?>[\w\W]*?<\/\1>/i,
            inside: {
                tag: {
                    pattern: /<(?:nowiki|pre|source)\b[\w\W]*?>|<\/(?:nowiki|pre|source)>/i,
                    inside: Prism.languages.markup.tag.inside
                }
            }
        }
    }), Prism.languages.yaml = {
        scalar: {
            pattern: /([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*($|,|]|}))/m,
            lookbehind: !0,
            alias: "number"
        },
        "boolean": {
            pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important"
        },
        "null": {
            pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: "important"
        },
        string: {
            pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(?=[ \t]*($|,|]|}))/m,
            lookbehind: !0
        },
        number: {
            pattern: /([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\da-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0
        },
        tag: /![^\s]+/,
        important: /[&*][\w]+/,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }, ! function() {
        function e(e, t) {
            return Array.prototype.slice.call((t || document).querySelectorAll(e))
        }

        function t(e, t) {
            return t = " " + t + " ", (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t) > -1
        }

        function n(e, n, i) {
            for (var o, a = n.replace(/\s+/g, "").split(","), s = +e.getAttribute("data-line-offset") || 0, l = r() ? parseInt : parseFloat, c = l(getComputedStyle(e).lineHeight), u = 0; o = a[u++];) {
                o = o.split("-");
                var d = +o[0],
                    p = +o[1] || d,
                    h = document.createElement("div");
                h.textContent = Array(p - d + 2).join(" \n"), h.className = (i || "") + " line-highlight", t(e, "line-numbers") || (h.setAttribute("data-start", d), p > d && h.setAttribute("data-end", p)), h.style.top = (d - s - 1) * c + "px", t(e, "line-numbers") ? e.appendChild(h) : (e.querySelector("code") || e).appendChild(h)
            }
        }

        function i() {
            var t = location.hash.slice(1);
            e(".temporary.line-highlight").forEach(function(e) {
                e.parentNode.removeChild(e)
            });
            var i = (t.match(/\.([\d,-]+)$/) || [, ""])[1];
            if (i && !document.getElementById(t)) {
                var r = t.slice(0, t.lastIndexOf(".")),
                    o = document.getElementById(r);
                o && (o.hasAttribute("data-line") || o.setAttribute("data-line", ""), n(o, i, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView())
            }
        }
        if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
            var r = function() {
                    var e;
                    return function() {
                        if ("undefined" == typeof e) {
                            var t = document.createElement("div");
                            t.style.fontSize = "13px", t.style.lineHeight = "1.5", t.style.padding = 0, t.style.border = 0, t.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(t), e = 38 === t.offsetHeight, document.body.removeChild(t)
                        }
                        return e
                    }
                }(),
                o = 0;
            Prism.hooks.add("complete", function(t) {
                var r = t.element.parentNode,
                    a = r && r.getAttribute("data-line");
                r && a && /pre/i.test(r.nodeName) && (clearTimeout(o), e(".line-highlight", r).forEach(function(e) {
                    e.parentNode.removeChild(e)
                }), n(r, a), o = setTimeout(i, 1))
            }), window.addEventListener && window.addEventListener("hashchange", i)
        }
    }(),
    

$(document).ready(function() {
        $(".carousel").carousel({
            interval: 1e4
        }), $(".link-exist-account").click(function(e) {
            e.preventDefault(), $(".wrapper-register").fadeOut(), $(".wrapper-login").fadeIn()
        }), $(".link-dont-account").click(function(e) {
            e.preventDefault(), $(".wrapper-login").fadeOut(), $(".wrapper-register").fadeIn()
        })
    }), page_review = 1,
    function(e) {
        function t(e, t, n) {
            var i, r, o, a, s = e,
                l = setInterval(function() {
                    return --s < 0 ? (n ? n() : null, void clearInterval(l)) : (i = parseInt(s / 60 / 60 / 24, 10), r = parseInt(s / 60 / 60 % 24, 10), o = parseInt(s / 60 % 60, 10), a = parseInt(s % 60, 10), i = 10 > i ? "0" + i : i, r = 10 > r ? "0" + r : r, o = 10 > o ? "0" + o : o, a = 10 > a ? "0" + a : a, void t(i, r, o, a))
                }, 1e3)
        }
        if (e(document).ready(function() {
                function t(e) {
                    e.preventDefault(), e.stopPropagation(), FB.ui({
                        method: "share",
                        href: window.location.origin + window.location.pathname
                    }, function(e) {})
                }

                e("#facebook-share-button").click(t)
            }), tag = e("#sale-expired-time")[0]) {
            stop_time = new Date(Number(tag.value)).getTime();
            var n = e("#countdown-day")[0],
                i = e("#countdown-hour")[0],
                r = e("#countdown-minute")[0],
                o = e("#countdown-second")[0];
            t((stop_time - Date.now()) / 1e3, function(e, t, a, s) {
                n.textContent = e, i.textContent = t, r.textContent = a, o.textContent = s
            }, function() {
                alert("H\u1ebft th\u1eddi gian sale")
            })
        }
        var a = function(t) {
            for (var n = e(".menu-fixed .nav-pills a"), i = n.length - 1; i >= 0; i--) {
                var r = e(n[i]).attr("href"),
                    o = (e(r).offset() || {
                        top: NaN
                    }).top;
                if (t >= o - 100) return r
            }
        };
        e.fn.setActive = function() {
            this.click(function() {
                e(".active").removeClass("active"), e(this).addClass("active")
            })
        }, 0 != e(".detail").length && (e(document).documentScroll(), e(".menu-fixed li").setActive()), e(".show-form").click(function() {
            e(".tele-sales").css("display", "none"), e(".tele-sales-extend").css("display", "block"), e(".name-input").focus()
        }), e(".hide-form").click(function() {
            e(".tele-sales-extend").css("display", "none"), e(".tele-sales").css("display", "block")
        }), e(".send-form-support-detail").click(function() {
            var t = e(".course_id").val(),
                n = e(".course_name").val(),
                i = e(".user_id").val(),
                r = e(".user_email").val(),
                o = e(".name-input").val(),
                a = e(".mobile-input").val(),
                s = {
                    course_id: t,
                    course_name: n,
                    user_id: i,
                    email: r,
                    name: o,
                    mobile: a,
                    type: "course_page_support",
                    msg: o + " c\u1ea7n h\u1ed7 tr\u1ee3 t\u1ea1i kh\xf3a h\u1ecdc " + n
                },
                l = "//" + window.location.host + "/courses/api/send_form-support_detail",
                c = e.ajax({
                    url: l,
                    type: "post",
                    data: s
                });
            c.done(function(t, n, i) {
                e(".tele-sales-content").css("display", "none"), e(".support-online-payment-form .success").css("display", "block")
            }), c.fail(function(e, t, n) {})
        }), e(".load-more-reviews").click(function() {
            page_review += 1;
            var t = e(this).parent().find(e(".course_alias_name")).val(),
                n = (e(this).parent().find(e(".total_reviews_page")).val(), "//" + window.location.host + "/courses/" + t + "/load_more_review");
            params = {
                page: page_review
            };
            var i = e.ajax({
                url: n,
                type: "post",
                data: params
            });
            i.done(function(t, n, i) {
                e("#more_review").append(t), (0 == t.length || page_discussion >= total_discussions_page) && e(".load-more-reviews").css("display", "none")
            }), i.fail(function(e, t, n) {})
        })
    }(jQuery), $(document).ready(function() {
        function e(e, t, n) {
            return t = t || "\u0111", n = n || ",", e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n) + t
        }
        var t = $("#refresh"),
            n = t.val();
        if (void 0 != n && ("yes" == n ? location.reload(!0) : t.val("yes")), $(".wishlist-button").click(function() {
                var e = $(".course_id").val(),
                    t = {
                        course_id: e
                    };
                $(".wishlist-button").hasClass("wishlisted") ? $(".wishlist-button").removeClass("wishlisted") : $(".wishlist-button").addClass("wishlisted");
                var n = "//" + window.location.host + "/home/my-course/update_wishlist";
                $.ajax({
                    type: "GET",
                    url: n,
                    data: t,
                    success: function(e) {}
                })
            }), $(".btn-submit-report").click(function() {
                var e = $(".course_id").val(),
                    t = $(".txt-report-content").val(),
                    n = "other";
                if ("" != t) {
                    var i = {
                            type: n,
                            course_id: e,
                            content: t
                        },
                        r = "//" + window.location.host + "/support/send_report";
                    $.ajax({
                        type: "POST",
                        url: r,
                        data: i,
                        success: function(e) {
                            $(".txt-report-content").val("")
                        }
                    })
                }
            }), $(".submit-cod-code").on("click", function() {
                var e = $($(this).parent()).parent();
                $(".txtNoti").css("display", "none");
                var t = $(e).find("input[type=text]"),
                    n = t.val(),
                    i = t.attr("payment_id");
                if ("" == n.trim()) return void t.focus();
                if ("" != i.trim()) {
                    var r = {
                            cod_code: n
                        },
                        o = "/home/payment/cod/" + i + "/import_code";
                    $.ajax({
                        type: "POST",
                        url: o,
                        data: r,
                        success: function(e, t, n) {
                            $(".txtNoti").text(n.responseJSON.message), $(".txtNoti").css("display", "block"), setTimeout(function() {
                                location.reload()
                            }, 3e3)
                        },
                        complete: function(e, t) {
                            $(".txtNoti").text(e.responseJSON.message), $(".txtNoti").css("display", "block")
                        }
                    })
                }
            }), $(".load-more").click(function() {
                "none" == $("#long-description-container").css("display") ? ($("#long-description-container").css("display", "block"), $("#short-description-container").css("display", "none"), $(this).text("Thu g\u1ecdn")) : ($("#long-description-container").css("display", "none"), $("#short-description-container").css("display", "block"), $(this).text("Xem chi ti\u1ebft"))
            }), 1 == $(".load-more-curiculumn").length)
            for (i = 24; i < $(".curiculum").length; i++) $(".curiculum").eq(i).css("display", "none");
        if ($(".load-more-curiculumn").click(function() {
                $(".curiculum").css("display", "block"), $(".load-more-curiculumn").css("display", "none")
            }), 1 == $(".link-text.load-more-instructor-profile").length)
            for (i = 5; i < $("h5.information-text").length; i++) $("h5.information-text").eq(i).css("display", "none");
        $(".link-text.load-more-instructor-profile").click(function() {
            $("h5.information-text").css("display", "block"), $(".link-text.load-more-instructor-profile").css("display", "none")
        }), $(".es_template_detail_url").attr("href", localStorage.getItem("es_template_url")), $(".cart-button").click(function() {
            var t = $(".course_alias_name").val(),
                n = "/cart/" + t + "/add";
            $.ajax({
                type: "POST",
                url: n,
                success: function(t, n, i) {
                    $("#cartModal").find($(".course_id")).val(t.course.course_id), $("#cartModal").find($(".course_title")).text(t.course.course_name), $("#cartModal").find($(".course_author")).text(t.course.author), $("#cartModal").find($(".carts_total")).text("Gi\u1ecf h\xe0ng c\u1ee7a t\xf4i (" + t.carts_count + " Kho\xe1 h\u1ecdc)"), $("#cartModal").find($(".total_price-number")).text(e(t.carts_cost)), $(".cart_count").text(t.carts_count), $("#cartModal").find($(".course_image")).find($("img")).attr("src", t.course.intro_image), $("#cartModal").modal("show"), 1 == t.carts_count && 1 != t.course_exist && $(".cart-notification-button").append('<span class="badge cart_count">1</span>'), 1 != t.course_exist && ($(".emty-carts-notice").css("display", "none"), $(".cart-dropdown-notification").append('<div class="row no-margin courses"> <div class="course"><div class="course_image"><img src="' + t.course.intro_image + '" alt=""></div><div class="course_info"><div class="course_title">' + t.course.course_name + '</div><div class="course_price">' + e(t.course.final_price) + '</div></div><div class="remove_course"><input type="hidden" class="course_id" value="' + t.course.course_id + '"><button class="close">\xd7</button></div></div> <div class="row no-margin total_price"><div class="col-xs-6 no-padding"><div class="total_price_text">T\u1ed5ng ti\u1ec1n</div></div><div class="col-xs-6 no-padding"><div class="total_price_number">' + e(t.carts_cost) + '</div></div></div> <div class="row no-margin purchase"><a href="/cart">\u0110\u1eb7t mua kho\xe1 h\u1ecdc</a></div></div>')), $("#cartModal").on("hide.bs.modal", function(e) {
                        window.location.reload()
                    })
                },
                complete: function(e, t) {
                    $("#cartModal").modal("show")
                }
            })
        })
    }),
    function(e) {
        String.prototype.htmlEncode = function() {
            return String(this).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }, e.fn.fullScreen = function() {
            this.click(function() {
                if (e(this).hasClass("rotate")) {
                    e(this).removeClass("rotate");
                    var t = e(".lecture").width(),
                        n = 0,
                        i = 0;
                    t > 1200 ? (n = 75, i = 25) : t > 992 ? (n = 66.66666666666666, i = 33.33333333333334) : t > 776 && (n = 58.333333333333336, i = 41.666666666666664), e(".lecture-player").animate({
                        width: n + "%"
                    }, 500), e(".lecture-container").css("display", "block"), e(window).bind("resize", function() {
                        e(".lecture-player").attr("style", ""), e(window).unbind("resize")
                    })
                } else e(this).addClass("rotate"), e(".lecture-player").animate({
                    width: "100%"
                }, 500), e(".lecture-container").css("display", "none")
            })
        }, e.fn.fullScreenDiscustionAbTest = function() {
            this.click(function() {
                if (tab = e(this).attr("tab"), e(".lecture-player").hasClass("fullscreen")) {
                    window.innerWidth <= 768 && e(".lecture-player").addClass("hide"), window.innerWidth > 768 && window.innerWidth <= 1024 && (e(".group-center").addClass("md-3-768"), e(".group-center").find("button span").hide(), e(".lecture-player-footer").find(".next").addClass("md-6-768")), "document" == tab ? (e("#lecture-tab-list").addClass("active in"), e(".document-header").removeClass("hide")) : "discussion" == tab && (e("#lecture-tab-discussion").addClass("active in"), e(".discussion-header").removeClass("hide"));
                    var t = e(".lecture").width(),
                        n = 0,
                        i = 0;
                    t > 1200 ? (n = 66, i = 25) : t > 992 ? (n = 66.66666666666666, i = 33.33333333333334) : t > 776 && (n = 58.333333333333336, i = 41.666666666666664), e(".lecture-player").animate({
                        width: n + "%"
                    }, 500), e(".lecture-player").removeClass("fullscreen"), e(".lecture-container").css("display", "block"), e(window).bind("resize", function() {
                        e(".lecture-player").attr("style", ""), e(window).unbind("resize")
                    })
                } else e("#lecture-tab-discussion, #lecture-tab-list").removeClass("active in"), e(".document-header, .discussion-header").addClass("hide"), "document" == tab ? (e("#lecture-tab-list").addClass("active in"), e(".document-header").removeClass("hide")) : "discussion" == tab && (e("#lecture-tab-discussion").addClass("active in"), e(".discussion-header").removeClass("hide"))
            })
        }, e.fn.closeTabContent = function() {
            this.click(function() {
                e(".lecture-player").animate({
                    width: "100%"
                }, 500), window.innerWidth <= 768 && e(".lecture-player").removeClass("hide"), window.innerWidth > 768 && window.innerWidth <= 1024 && (e(".group-center").removeClass("md-3-768"), e(".group-center").find("button span").show(), e(".lecture-player-footer").find(".next").removeClass("md-6-768")), e(".lecture-player").addClass("fullscreen"), e("#lecture-tab-discussion, #lecture-tab-list").removeClass("active in"), e(".document-header, .discussion-header").addClass("hide")
            })
        }, e(".full-screen").fullScreen(), e(".document-btn, .discussion-btn").fullScreenDiscustionAbTest(), e(".course-ab-test-discussion .fa-times").closeTabContent(), e(".lecture-discussion-submit").click(function() {
            e(this).text("\u0110ang g\u1eedi..."), e(this).addClass("disabled"), e(this).prop("disabled", !0);
            var t = e(".course_id").val(),
                n = e(".discussion-title").val(),
                i = e(".discussion-content").val().htmlEncode(),
                r = e(".lecture_id").val();
            if (void 0 == n || "" == n.trim()) return e(".discussion-title").focus(), void e(".discussion-noti").text("\u0110i\u1ec1n n\u1ed9i dung tr\u01b0\u1edbc khi g\u1eedi ph\u1ea3n h\u1ed3i!");
            if (void 0 == i || "" == i.trim()) return e(".discussion-content").focus(), void e(".discussion-noti").text("\u0110i\u1ec1n n\u1ed9i dung tr\u01b0\u1edbc khi g\u1eedi ph\u1ea3n h\u1ed3i!");
            var o = {
                    title: n,
                    description: i,
                    curriculum_id: r
                },
                a = "/courses/" + t + "/add_discussion";
            e.ajax({
                type: "POST",
                url: a,
                data: o,
                success: function(t) {
                    e(".lecture-discussion-submit").text("\u0110\u0103ng th\u1ea3o lu\u1eadn"), e(".lecture-discussion-submit").removeClass("disabled"), e(".lecture-discussion-submit").prop("disabled", !1), e(".discussion-title").val(""), e(".discussion-content").val(""), e(".discussion-noti").text("\u0110\u0103ng th\xe0nh c\xf4ng, th\u1ea3o lu\u1eadn c\u1ee7a b\u1ea1n \u0111ang ch\u1edd duy\u1ec7t!"), e(".discussion-noti").show(0).delay(3500).hide(0)
                }
            })
        }), e(".comment-submit").click(function() {
            tinyMCE.triggerSave();
            var t = this,
                n = e(".course_id").val(),
                i = e(this).attr("discussion_id"),
                r = e(this).parent().find(".comment-content"),
                o = {
                    parent_discussion: i,
                    description: r.val()
                },
                a = "//" + window.location.host + "/courses/" + n + "/add_discussion";
            e.ajax({
                type: "POST",
                url: a,
                data: o,
                success: function(n) {
                    var i = n;
                    r.val(""), console.log(i);
                    var o = "<div class='row child-item no-margin'><div class='col-md-12 col-lg-12 no-padding child-item-main'><ul class='child-item-title'><li class='bold' style='list-style: none'>" + i.name + "</li></ul><div class='row no-margin child-item-content'><div class='row no-margin cleanslate'>" + i.description + "</div></div></div></div>";
                    e(t).parent().parent().parent().prepend(o)
                }
            })
        }), e(".note-item").click(function(t) {
            var n = e(this).children(".edit-text"),
                i = e.trim(e(this).children("span").html());
            n.removeClass("disable"), n.focus(), n.val(i)
        }), e(".edit-text").blur(function(t) {
            e(this).addClass("disable")
        }), e(".edit-text").keypress(function(t) {
            if (13 == t.keyCode) {
                var n = e(this),
                    i = e(this).prev(".note-id").val(),
                    r = e(this).val(),
                    o = e(".owned_course_id").val(),
                    a = e(".owned_lecture_id").val(),
                    s = {
                        note_id: i,
                        owned_course_id: o,
                        owned_lecture_id: a,
                        content: r
                    },
                    l = "//" + window.location.host + "/users/update_note";
                e.ajax({
                    type: "POST",
                    url: l,
                    data: s,
                    success: function(e) {
                        n.prev().prev("span").html(r)
                    }
                }), e(this).addClass("disable")
            }
        }), e(".input-note-content").bind("keypress", function(t) {
            if (13 === t.which) {
                var n = e(".input-note-content").val(),
                    i = e(".owned_course_id").val(),
                    r = e(".owned_lecture_id").val(),
                    o = {
                        content: n,
                        owned_course_id: i,
                        owned_lecture_id: r
                    };
                e(".input-note-content").val("");
                var a = "//" + window.location.host + "/users/create_note";
                e.ajax({
                    type: "POST",
                    url: a,
                    data: o,
                    success: function(t) {
                        var n = t;
                        console.log(n);
                        var i = "<li class='row'><div class='time pull-left'><div class='time-content'>" + n.time + "</div></div><div class='note-item pull-left'><span>" + n.content + "</span><input class='note-id' type='hidden' value='" + n._id + "'></div><a class='note-delete' href='#'>x</a></li>";
                        e(".list-note").append(i)
                    }
                })
            }
        }), e(".note-delete").click(function(t) {
            t.preventDefault();
            var n = e(this).prev(".note-item").children(".note-id").val(),
                i = e(".owned_course_id").val(),
                r = e(".owned_lecture_id").val(),
                o = {
                    note_id: n,
                    owned_course_id: i,
                    owned_lecture_id: r
                },
                a = "//" + window.location.host + "/users/delete_note";
            e.ajax({
                type: "POST",
                url: a,
                data: o,
                success: function(t) {
                    e("input[value=" + n + "]").parent().parent().remove()
                }
            })
        }), "0" == e.cookie("autoplay") ? (e("#autoplay").prop("checked", !1), e.cookie("autoplay", "0")) : (e("#autoplay").prop("checked", !0), e.cookie("autoplay", "1")), e.fn.markAsHandle = function() {
            this.click(function() {
                var t = e(this).attr("data-url");
                if (void 0 != t) {
                    t = JSON.parse(t);
                    var n = "",
                        i = "";
                    e(this).hasClass("completed") ? (e(this).attr("data-original-title", "\u0110\xe1nh d\u1ea5u ho\xe0n th\xe0nh"), e(this).removeClass("completed"), e(".list-lecture-container .active").find(".status-container").removeClass("completed").addClass("none"), i = "mark_as_incomplete") : (e(this).attr("data-original-title", "\u0110\xe1nh d\u1ea5u ch\u01b0a ho\xe0n th\xe0nh"), e(this).addClass("completed"), e(".list-lecture-container .active").find(".status-container").removeClass("none").addClass("completed"), i = "mark_as_completed"), n = "/courses/" + t.alias_name + "/" + i + "/" + t.lecture_index, e.ajax({
                        type: "GET",
                        url: n
                    })
                }
            })
        }, e(".mark-as").markAsHandle();
        var t = function() {
            -1 != location.search.indexOf("m_i=") && e("a[href=#lecture-tab-discussion]").click()
        };
        t(), e.fn.autoPlaySetting = function() {
            this.click(function() {
                e(this).prop("checked") ? e.cookie("autoplay", "1") : (e(this).prop("checked", !1), e.cookie("autoplay", "0"))
            })
        }, e("#autoplay").autoPlaySetting(), e("#alert_banning").modal("show")
    }(jQuery), $(document).ready(function() {
        $(".paginate-discussion-button").click(function() {
            course_alias_name = $(".course_alias_name").val(), discussion_index = $(".discussion-index").val(), "previous" == $(this).data("paginate") ? discussion_index = parseInt(discussion_index) - 10 : discussion_index = parseInt(discussion_index) + 10, params = {
                discussion_index: discussion_index
            };
            var e = "//" + window.location.host + "/courses/" + course_alias_name + "/paginated_discussions_api";
            $.ajax({
                type: "POST",
                url: e,
                data: params,
                success: function(e) {
                    $(".paginated-discussion").html(e).fadeIn(), $(".discussion-item-reply").discussionItemReply()
                }
            })
        }), $(".learning .add-comment").click(function() {
            var e = $(".add-comment-container");
            e.hasClass("open") ? (e.css("display", "none"), e.removeClass("open")) : (e.addClass("open"), e.css("display", "block"))
        }), $(".close-add-comment").click(function() {
            $(".learning .add-comment").trigger("click")
        }), $("#close-send-comment").click(function() {
            $("#comment-dropdown").fadeOut(225), $("#comment-dropdown").removeClass("active")
        }), $("#send-comment").click(function() {
            var e = $(".course-id").val(),
                t = $("#comment-title").val(),
                n = $("#comment-content").val();
            if ("" == t.trim()) return void $("#comment-title").focus();
            if ("" == n) return void $("#comment-content").focus();
            var i = {
                    title: t,
                    description: n
                },
                r = "//" + window.location.host + "/courses/" + e + "/add_discussion";
            $.ajax({
                type: "POST",
                url: r,
                data: i,
                success: function(e) {
                    var t = $.parseJSON(JSON.stringify(e)),
                        n = '<div class="col s12 no-padding cm-item"> <div class="row cm-item-header no-margin"> <ul class="no-margin"> <li> <i class="small material-icons no-padding">face</i> </li> <li> <p class="left" style="font-weight: 500; color: #353535">' + t.email + '</p> <p class="left" style="font-weight: 500; color: #335d82; font-size: 12px; margin-left: 5px"> \u0111\xe3 \u0111\u0103ng m\u1ed9t th\u1ea3o lu\u1eadn</p> </li> <li></li> </li> </ul> </div> <div class="row cm-item-content"> <p class="no-margin" style="font-size: 18px; font-weight: 500; color: #59657D">' + t.title + '</p> <p style="margin: 0px 0px 0px 0px">' + t.description + "</p> </div> </div>";
                    $(".lecture-comment-list").prepend(n), $("#comment-dropdown").fadeOut(225), $("#comment-dropdown").removeClass("active")
                }
            })
        }), $("#search-comment").on("input", function() {
            var e = $(this).val();
            if (console.log(e), "" != e.trim()) {
                var t = $(".discussion-item");
                t.each(function() {
                    var t = $(this),
                        n = !1;
                    t.find(".discussion-item-main").each(function() {
                        $(this).text().toLowerCase().indexOf(e.toLowerCase()) > 0 && (n = !0)
                    }), n ? (t.attr("style", "display: block"), $(".search-notice").attr("style", "display: none")) : (t.attr("style", "display: none"), $(".search-notice").attr("style", "display: block"))
                })
            } else {
                $(".search-notice").attr("style", "display: none");
                var t = $(".discussion-item");
                t.each(function() {
                    $(this).attr("style", "display: block")
                })
            }
        }), $.fn.discussionItemReply = function() {
            return this.on("click", function() {
                var e = $(this).parent().find(".list-children");
                null != e && (e.hasClass("expand") ? (e.fadeOut(), e.removeClass("expand"), e.addClass("collapsed")) : (e.fadeIn(), e.addClass("expand"), $(".current_editor").removeClass("current_editor"), e.find(".comment-content").addClass("current_editor")))
            }), this
        }, $.fn.notiItemReply = function() {
            return this.on("click", function() {
                var e = $(this).parent().find(".list-children");
                null != e && (e.hasClass("expand") ? (e.fadeOut(), e.removeClass("expand"), e.addClass("collapsed")) : (e.fadeIn(), e.addClass("expand")))
            }), this
        }, $(".discussion-item-reply").discussionItemReply(), $(".noti-item-reply").notiItemReply(), $(".learning_tab").on("click", function() {
            var e = $(this).attr("val"),
                t = $(this).parent().find(".progress").children(),
                n = function(e) {
                    $(".progress-actived").removeClass("progress-actived"), $(e).addClass("progress-actived"), $(e).fadeIn()
                },
                i = function(e, t) {
                    $(".tab-actived").removeClass("tab-actived"), $(e).removeClass("collapsed"), $(e).addClass("expand"), $(e).fadeIn(), $(t).fadeOut(), $(t).removeClass("expand"), $(t).addClass("collapsed")
                },
                r = $(this),
                o = {
                    discussion: function() {
                        n(t[0]), i(".discussion", ".noti"), r.addClass("tab-actived")
                    },
                    noti: function() {
                        n(t[1]), i(".noti", ".discussion"), r.addClass("tab-actived")
                    },
                    student: function() {},
                    "default": function() {
                        n(t[0]), i(".discussion", ".noti")
                    }
                };
            e in o == 0 && (e = "default"), o[e]()
        }), $(".btn-add-announcement").click(function() {
            var e = $(".an-title").val();
            if ("" == e) return alert("phai nhap truong tieu de"), $(".an-title").focus(), !1;
            var t = $(".an-description").val();
            if ("" == t) return alert("nhap truong noi dung thong bao"), $(".an-description").focus(), !1;
            var n = $(".course_id").val();
            params = {
                title: e,
                description: t,
                course_id: n
            };
            var i = "//" + window.location.host + "/courses/" + n + "/add_announcement";
            $.ajax({
                type: "POST",
                url: i,
                data: params,
                success: function(e) {
                    console.log(e)
                }
            }), location.reload()
        }), $(".child-announcement").click(function(e) {
            var t = $(this),
                n = t.prev(".child-announcement-desciption").val();
            if ("" == n) return alert("ban phai nhap noi dung binh luan"), t.prev(".child-announcement-desciption").focus(), !1;
            var i = t.prev().prev().val(),
                r = $(".course_id").val();
            params = {
                course_id: r,
                description: n,
                parent_announcement_id: i
            };
            var o = "//" + window.location.host + "/courses/" + r + "/add_child_announcement";
            $.ajax({
                type: "POST",
                url: o,
                data: params,
                success: function(e) {
                    console.log(e), t.parent().parent().parent().before(e), t.prev().val("")
                }
            })
        }), $(".get-certificate").click(function() {
            course_id = $(".course_id").val(), user_id = $(".user_id").val(), params = {
                course_id: course_id,
                user_id: user_id
            };
            var e = "//" + window.location.host + "/certificate/create_certificate";
            $.ajax({
                type: "POST",
                url: e,
                data: params,
                success: function(e) {
                    window.location = "/certificate/" + e.data
                }
            })
        }), $(".circle-progress").circleProgress({
            size: 50
        })
    }),
    function(e) {
        var t = null,
            n = function() {
                e(".rating-popup").remove(), e(".rating-popup-background").remove(), e("#rating-title").val(""), e("#rating-content").val("")
            };
        e.fn.ratingPopup = function() {
            this.click(function() {
                n()
            })
        }, e.fn.sendRatingHandle = function() {
            this.click(function() {
                var i = e("#rating-title").val(),
                    r = e("#rating-content").val(),
                    o = e(e(".rating-popup")[0]).find(".rated").length,
                    a = t.attr("course_id"),
                    s = {
                        title: i,
                        description: r,
                        rate: o
                    },
                    l = "//" + window.location.host + "/courses/" + a + "/rating";
                e.ajax({
                    type: "POST",
                    url: l,
                    data: s,
                    success: function(e) {
                        n()
                    }
                })
            })
        }, e.fn.ratingOpenPopup = function() {
            this.click(function() {
                for (var n = "<div class='rating-popup-background'></div>", i = "<div class='col-xs-12 col-sm-8 col-md-6 col-lg-4 no-padding rating-popup'> <div class='row rating-popup-title'> <span>\u0110\xe1nh gi\xe1 kho\xe1 h\u1ecdc</span> <i class='fa fa-times rating-popup-close'></i> </div> <div class='row rating-popup-main'> <div class='row no-margin'> <span>\u0110\xe1nh gi\xe1 :</span> <ul class='no-padding rating'>", r = e(this).attr("data-rate"), o = e(this).attr("data-title"), a = e(this).attr("data-description"), s = 1; 5 >= s; s++) i += r >= s ? "<li> <i class='fa fa-star star rated' val='" + s + "'></i> </li>" : "<li> <i class='fa fa-star star' val='" + s + "'></i> </li>";
                return i += "</ul> </div> <div class='row no-margin'> <input name='star' type='hidden' value='5'><input class='form-control' id='rating-title' placeholder='Ti\xeau \u0111\u1ec1'> <textarea class='form-control' id='rating-content' placeholder='N\u1ed9i dung'></textarea> <button class='btn btn-primary' id='rating-submit'>\u0110\xe1nh gi\xe1</button> </div> </div> </div> ", e("body").append(n), e("body").append(i), e(".rating-popup").fadeIn(), e("#rating-title").val(o), e("#rating-content").val(a), e(".rating-popup .rating-popup-close").ratingPopup(), t = e(this), e(".rating-popup .star").moveOnStar(), e("#rating-submit").sendRatingHandle(), !1
            })
        }, e(".rating-active").ratingOpenPopup(), e.fn.moveOnStar = function() {
            this.on("click", function() {
                if (null != t) {
                    var n = parseInt(e(this).attr("val")),
                        i = e(t);
                    i.push(e(".rating-popup")), e("input[name=star]").val(n), i.each(function() {
                        var t = e(this).find(".star");
                        0 != t.length && t.each(function() {
                            parseInt(e(this).attr("val")) <= n ? e(this).addClass("rated") : e(this).removeClass("rated")
                        })
                    })
                }
            })
        }
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            var t = e(window).width();
            1200 > t && t >= 1024 && e(".course-card-item").each(function() {
                parseInt(e(".course-card-item").attr("index")) >= 2 && e(this).hide()
            })
        });
        var t = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                n = t.exec(location.search);
            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        };
        e.fn.changeFilter = function() {
            this.change(function() {
                var t = e(this);
                e(".filter input[type=checkbox]").each(function() {
                    var n = e(this).attr("name"),
                        i = e(this).attr("value");
                    n == t.attr("name") && t.attr("value") != i && e(this).removeAttr("checked")
                }), e("#filter-form").submit()
            })
        }, e(".filter input[type=checkbox]").changeFilter();
        var n = t("budget"),
            i = t("feature"),
            r = t("level"),
            o = t("q");
        "" != o && (e("#search-input").attr("name", "q"), e("#search-input").val(o)), e(".filter input[type=checkbox]").each(function() {
            var t = e(this).attr("value");
            (t == n || t == i || t == r) && e(this).attr("checked", "checked")
        });
        var a = 0;
        e(".pre-card").click(function(t) {
            t.preventDefault();
            var n = e("#courses_slider .category-inner"),
                i = parseInt(n.css("left"));
            a > 0 && n.stop(!0, !0).animate({
                left: 281 + i + "px"
            }, 300, function() {
                a--
            })
        }), e(".next-card").click(function(t) {
            t.preventDefault();
            var n = e("#courses_slider .category-inner"),
                i = n.find(".course-card-item").length;
            i - 3 > a && (a++, n.stop(!0, !0).animate({
                left: "-" + 281 * a + "px"
            }, 300))
        })
    }(jQuery),
    function(e) {
        var t = function(e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                    n = t.exec(location.search);
                return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            },
            n = t("ordering");
        if ("" != n.trim()) {
            e("#sorting").val(n);
            var i = e(".courses-sorting-select[value=" + n + "]");
            e(".courses-sorting-selected").html(i.text() + '<b class="caret"></b>')
        }
        e.fn.coursesSortingSelect = function() {
            this.click(function() {
                e("#sorting").val(e(this).attr("value")), e("#sorting-form").submit()
            })
        }, e(".courses-sorting-select").coursesSortingSelect()
    }(jQuery),
    function(e) {
        e.fn.selectPageHandle = function() {
            this.click(function() {
                var t = e(this).attr("val");
                "" != t.trim() && (e("#page").val(t), e("#pagi-form").submit())
            })
        }, e(".pagination .page").selectPageHandle(), "undefined" != typeof e(".carousel1") && e(".carousel1").carousel({
            interval: 5e3
        })
    }(jQuery),
    function(e) {
        e.fn.selectCardHandle = function() {
            this.click(function() {
                e(".phone-cards .selected").removeClass("selected"), e(this).addClass("selected"), e(".card-id").val(e(this).attr("val"))
            })
        }, e(".select-card").selectCardHandle();
        var t = e(".bk-message").text();
        e(".bk-message").text(t.replace("Pin Field", "M\xe3 s\u1ed1 th\u1ebb"))
    }(jQuery), $(document).ready(function() {
        var e = $(".row.payment-content.active");
        e.length > 0 && $("html, body").animate({
                scrollTop: e.offset().top
            }, 1e3), $("#list-provider li").on("click", function() {
                var e = $(this).attr("val");
                $("#card-id").val(e), $(".active-provider").removeClass("active-provider"), $(this).addClass("active-provider")
            }),
            $.fn.selectmethod = function() {
                this.click(function() {
                    $(".selected").removeClass("selected"), $(this).addClass("selected")
                })
            }, $(".select-card").selectmethod(), $(".send-form-support").click(function() {
                var e = $(".course_id").val(),
                    t = $(".course_name").val(),
                    n = $(".user_id").val(),
                    i = $(".user_email").val(),
                    r = $(".name-input").val(),
                    o = $(".mobile-input").val(),
                    a = $(".type-input").val(),
                    s = $(".source").val(),
                    l = $(".source_url").val(),
                    c = $(".coupon").val(),
                    u = null;
                if (0 == r.length) u = "H\xe3y nh\u1eadp t\xean c\u1ee7a b\u1ea1n \u0111\u1ec3 ch\xfang t\xf4i c\xf3 th\u1ec3 li\xean h\u1ec7";
                else if (0 == o.length) u = "H\xe3y nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\u1ec3 ch\xfang t\xf4i c\xf3 th\u1ec3 li\xean h\u1ec7 v\u1edbi b\u1ea1n";
                else if (o.length < 9) u = "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\xfang, vui l\xf2ng ki\u1ec3m tra l\u1ea1i";
                else {
                    var d = /^([0-9\(\)\/\+ \-]*)$/;
                    o.match(d) || (u = "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng h\u1ee3p l\u1ec7, vui l\xf2ng ki\u1ec3m tra l\u1ea1i")
                }
                if (u) return $("#payment-support-form > #validate-message").text(u), void $("#payment-support-form > #validate-message").css("display", "block");
                $("#payment-support-form > #validate-message").css("display", "none");
                var p = {
                        course_id: e,
                        course_name: t,
                        user_id: n,
                        email: i,
                        name: r,
                        mobile: o,
                        type: a,
                        source: s,
                        source_url: l,
                        coupon: c,
                        msg: r + " c\u1ea7n h\u1ed7 tr\u1ee3 t\u1ea1i kh\xf3a h\u1ecdc " + t
                    },
                    h = "//" + window.location.host + "/courses/api/send_form-support_detail",
                    f = $.ajax({
                        url: h,
                        type: "post",
                        data: p
                    });
                f.done(function(e, t, n) {
                    "c3_transfer" == a ? $("#transfer_support_success_modal").modal("show") : $("#support_success_modal").modal("show")
                }), f.fail(function(e, t, n) {
                    $("#support_fail_modal").modal("show")
                })
            }), $(".btn-cod").click(function() {
                var e = $(".course_id").val();
                Spymaster.track({
                    category: "L7b",
                    behavior: "click",
                    target: e,
                    extras: {
                        payment_method: "cod"
                    }
                })
            }), $(".btn-transfer").click(function() {
                var e = $(".course_id").val();
                Spymaster.track({
                    category: "L7b",
                    behavior: "click",
                    target: e,
                    extras: {
                        payment_method: "transfer"
                    }
                })
            }), $(".btn-card").click(function() {
                var e = $(".course_id").val();
                Spymaster.track({
                    category: "L7b",
                    behavior: "click",
                    target: e,
                    extras: {
                        payment_method: "card"
                    }
                })
            }), $(".btn-cih").click(function() {
                var e = $(".course_id").val();
                Spymaster.track({
                    category: "L7b",
                    behavior: "click",
                    target: e,
                    extras: {
                        payment_method: "cih"
                    }
                })
            })
    }),
    function(e) {
        "use strict";
        e.fn.sliderDropdown = function() {
            function t(e) {
                e.animate({
                    "margin-left": "-" + e.width() + "px"
                }, {
                    duration: i,
                    done: function() {
                        r.parent().removeClass("open")
                    }
                }), e.removeClass("open")
            }

            function n(e) {
                e.animate({
                    "margin-left": "0px"
                }, {
                    duration: i,
                    done: function() {
                        r.parent().addClass("open"), r.parent().find(".dropdown-backdrop").click(function() {
                            t(e)
                        })
                    }
                })
            }
            var i = 200,
                r = this,
                o = "true" === r.attr("data-fixed");
            return o && (r.parent().on({
                "shown.bs.dropdown": function() {
                    this.closable = !1
                },
                click: function() {
                    this.closable = !0
                },
                "hide.bs.dropdown": function() {
                    return this.closable
                }
            }), r.click()), r.click(function(i) {
                var o = e(e(this).attr("data-dropdown-container"));
                r = e(i.target).parent(), r.parent().on({
                    "hide.bs.dropdown": function() {
                        "none" === r.parent().css("display") && t(o)
                    }
                });
                var a = r.parent().attr("class").indexOf("open") >= 0;
                a ? t(o) : n(o)
            }), this
        }
    }(jQuery);
var getUrlParameter = function(e) {
    var t, n, i = decodeURIComponent(window.location.search.substring(1)),
        r = i.split("&");
    for (n = 0; n < r.length; n++)
        if (t = r[n].split("="), t[0] === e) return void 0 === t[1] ? !0 : t[1]
};
$(document).ready(function() {
        var e = getUrlParameter("cod_email_login");
        e && $(".btn-login").click(), $(".show-all").click(function(e) {
            e.preventDefault();
            var t = $(this).parent().next().next(".list-course-card"),
                n = $("body").hasClass("es-template") ? "590px" : "295px";
            console.log("Height:" + n), "visible" == t.css("overflow") ? ($(this).html("Xem t\u1ea5t c\u1ea3 <i class='fa fa-plus-circle'></i>"), t.css({
                height: n,
                overflow: "hidden"
            })) : ($(this).html("Thu g\u1ecdn <i class='fa fa-minus-circle'></i>"), t.css({
                height: "auto",
                overflow: "visible"
            }))
        }), $(".show-all-wrap a.btn").click(function(e) {
            e.preventDefault();
            var t = $(this).parent().parent().find(".list-course-card-no-collapse");
            "visible" == t.css("overflow") ? ($(this).html("Xem th\xeam c\xe1c kh\xf3a h\u1ecdc kh\xe1c <i class='fa fa-plus-circle'></i>"), t.css({
                height: "1180px",
                overflow: "hidden"
            })) : ($(this).html("Thu g\u1ecdn <i class='fa fa-minus-circle'></i>"), t.css({
                height: "auto",
                overflow: "visible"
            }))
        }), $(".es-template .img-wrap").hover(function() {
            $(this).find("img").addClass("zoom")
        }, function() {
            $(this).find("img").removeClass("zoom")
        }), $("#popup_cross_sell").modal("show"), $("#popup_video_intro").modal("show")
    }),
    function(e) {
        function t(e, t, n) {
            var i, r, o = e,
                a = setInterval(function() {
                    return --o < 0 ? (n ? n() : null, void clearInterval(a)) : (hours = parseInt(o / 60 / 60, 10), i = parseInt(o / 60 % 60, 10), r = parseInt(o % 60, 10), hours = hours > 0 ? hours < 10 ? "0" + hours : hours : "", i = 10 > i ? "0" + i : i, r = 10 > r ? "0" + r : r, void(t.textContent = (hours.length > 0 ? hours + ":" : "") + i + ":" + r))
                }, 1e3)
        }(tag = e("#preview_expired_time_alway_unique")[0]) && (stop_time = new Date(parseInt(tag.value)).getTime(), t((stop_time - Date.now()) / 1e3, e("#remain-preview-time")[0], function() {
            e("#disable_preview_modal").modal("show")
        }))
    }(jQuery),
    function(e) {
        if (e.fn.wishlist = function() {
                this.click(function() {
                    var t = e(this).attr("val"),
                        n = {
                            course_id: t
                        };
                    e(this).hasClass("wishlisted") ? (e(this).removeClass("wishlisted"), e(".btn-wishlist").find(".fa-heart").addClass("remove_animate")) : (e(this).addClass("wishlisted"), e(".btn-wishlist").find(".fa-heart").addClass("add_animate"));
                    var i = "//" + window.location.host + "/home/my-course/update_wishlist";
                    e.ajax({
                        type: "GET",
                        url: i,
                        data: n,
                        success: function(t) {
                            setTimeout(function() {
                                e(".btn-wishlist").find(".fa-heart").removeClass("add_animate"), e(".btn-wishlist").find(".fa-heart").removeClass("remove_animate")
                            }, 2e3)
                        }
                    })
                })
            }, window.location.hash) {
            var t = window.location.hash.substring(1);
            "wishlist" == t && (e("#learning-tab").removeClass("active"), e("#wishlist-tab").addClass("active"), e("#myCourse-studying").removeClass("active"), e("#myCourse-studying").removeClass("in"), e("#myCourse-favorite").addClass("active"), e("#myCourse-favorite").addClass("in"))
        }
        e(".wishlist-heart").wishlist()
    }(jQuery),
    function(e) {
        "use strict";
        e("#modalBanner").modal("show"), e("#close-modal-banner").click(function() {
            e("#modalBanner").modal("hide")
        })
    }(jQuery), $(document).ready(function() {
        function e(e, t) {
            var n = e;
            n += n.indexOf("?") < 0 ? "?" : "&";
            var i = [];
            for (var r in t) i.push(r + "=" + t[r]);
            return n + i.join("&")
        }


        var i = $(".cross_sell_uni_course_c2")[0],
            r = ($(".cross_sell_uni_course_c3")[0], $(".cross_sell_link")[0]);

        var o = $(".banner-container");
        void 0 != o && o.each(function() {
            var t = "";
            t = $(this).hasClass("header") ? $(this).find("a.btn").attr("href") : $(this).find("a").attr("href");
            var n = "",
                i = $(this).data("code"),
                r = {
                    behavior: "impressed",
                    target: t,
                    extras: {}
                };

        });
        var a = $(".cross_sell_native_course_c1.payment")[0],
            s = $(".cross_sell_native_course_c1.not_payment")[0],
            l = $(".cross_sell_native_course_c2")[0];




        var d = $(".noti-count"),
            p = function(e) {
                var t = $(".notification-list"),
                    n = "",
                    i = /href=\"(.*cs_code=EL9U5)/;
                if ("c0" == e)
                    for (var r = 0; d > r; r++) {
                        var o = t[r];
                        void 0 != o && (n += o.innerHTML)
                    } else n = $(".notifications-container").html();
                var a = n.match(i);
                return null != a && void 0 != a[1] ? a[1] : null
            };

        if ($(".notification-button").click(function() {
                
            }), $(".receive-information").click(function() {
                $("input[name=is_subscribe_native]").prop("checked") ? $("input[name=is_subscribe_native]").prop("checked", !1) : $("input[name=is_subscribe_native]").prop("checked", !0)
            }), void 0 != r) {
            var m = $(r).find("a.l8"),
                g = $(r).find("a.c1");
            if (0 != m.length) {
                var v = m.attr("href");
                t(v, "ExxN1.2")
            }
            if (0 != g.length) {
                var v = g.attr("href");
                t(v, "ExxN1.1")
            }
        }
        $(window).scroll(function() {
            var e = 50;
            $(window).scrollTop() >= e && $("#banner_voucher").addClass("banner-voucher"), $(window).scrollTop() < e && $("#banner_voucher").removeClass("banner-voucher")
        })
    }), $(document).ready(function() {
        $("#change-password-form").validate({
            rules: {
                "user[current_password]": {
                    required: !0
                },
                "user[password]": {
                    required: !0,
                    minlength: 6
                },
                "user[password_confirmation]": {
                    required: !0,
                    equalTo: "#user_password"
                }
            },
            messages: {
                "user[current_password]": "Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u hi\u1ec7n t\u1ea1i",
                "user[password_confirmation]": {
                    required: "Vui l\xf2ng x\xe1c nh\u1eadn l\u1ea1i m\u1eadt kh\u1ea9u",
                    equalTo: "X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang"
                },
                "user[password]": {
                    minlength: "M\u1eadt kh\u1ea9u c\u1ea7n \xedt nh\u1ea5t 6 k\xed t\u1ef1",
                    required: "Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u m\u1edbi"
                }
            }
        })
    }),
    function() {
        "undefined" != typeof jw_should_load && jw_should_load && setup_jwplayer(jw_video_container, jw_video_url, jw_media_id, !1, !1, 0)
    }(), $(document).ready(function() {
        $("#forgot-password-button").click(function() {
            $("#login-modal").modal("hide")
        }), $(".reset-password-button").click(function(e) {
            var t = $("#email-reset").val(),
                n = "/users/forgot_password?email=" + t,
                i = {
                    email: t
                };
            $.ajax({
                url: n,
                type: "post",
                data: i,
                success: function(e) {
                    $(".forgot-password-content").css("display", "none"), $(".forgot-password-content-success").css("display", "block")
                },
                error: function(e) {
                    $(".show_msg").html(e.responseJSON.message), $(".show_msg").css("display", "block")
                }
            })
        }), $(".login").click(function() {
            $("#fogot-password-dialog").modal("hide")
        })
    }),
    function(e) {
        String.prototype.format = function() {
            var e = this;
            for (var t in arguments) e = e.replace("{" + t + "}", arguments[t]);
            return e
        };
        var t, n, i = {
                question: "<div class='row answer-item' answer-index = '{0}'> <span>{1}</span> </div> ",
                note: "<div class='row note-item'> <span>{0}</span> </div>",
                result: "<ul answer-index='{0}' class='assessment-item result-go-to-answer'><li class='assessment-first'>C\xe2u h\u1ecfi s\u1ed1 {6}</li> <li class='assessment-two {1}'> <i class='fa {2}'></i> <span>{3}</span> </li> <li class='assessment-tree'> <i class='fa fa-check-circle true'></i> <span class='true'>{4}</span> <i class='fa fa-times false'></i> <span class='false'>{5}</span> <i class='pull-right fa fa-chevron-right'></i> </li> </ul>"
            },
            r = 0,
            o = !1,
            a = [],
            s = function() {
                e("#loading").css("display", "block")
            },
            l = function() {
                e("#loading").css("display", "none")
            },
            c = function() {
                if (void 0 == t) return console.error("B\xe0i h\u1ecdc bi r\u1ed7ng!"), !1;
                e(".assessment-answers").html("");
                var a = t.assessments[r],
                    s = "";
                if (void 0 == a) return void console.error("C\xe2u h\u1ecfi b\u1ecb r\u1ed7ng!");
                var l = 0;
                e.each(a.answers, function() {
                    s += i.question.format(l, this.answer), l++
                }), void 0 != a.audio && "" != a.audio.trim() ? (e("#audio-player").fadeIn(), jwplayer("audio-player").setup({
                    skin: "glow",
                    file: a.audio,
                    width: "100%",
                    height: "40px",
                    ga: {}
                })) : e("#audio-player").css("display", "none"), e(".quiz-progress-title").text("{0}/{1}".format(r + 1, t.assessments.length)), e(".assessment-question span").text(a.question), e(".assessment-answers").html(s), e(".answer-item").selectAnswerHandle(), o ? (e(".btn-submit-assessment").addClass("bt-next"), e(".btn-submit-assessment").attr("level", "2"), r >= t.assessments.length - 1 && e(".btn-submit-assessment").attr("level", "3"), r >= t.assessments.length - 1 ? e(".btn-submit-assessment").text("Ho\xe0n t\u1ea5t") : e(".btn-submit-assessment").text("C\xe2u h\u1ecfi ti\u1ebfp theo"), d(n.answer_results[r].answer, a)) : (e(".btn-submit-assessment").removeClass("bt-submit bt-next"), e(".btn-submit-assessment").attr("level", "0"), e(".btn-submit-assessment").text("X\xe1c nh\u1eadn"))
            },
            u = function(t) {
                console.log(t), e(".score-title").text(t.score), e(".number-true").text("Tr\u1ea3 l\u1eddi \u0111\xfang: " + t.correct_answer_count), e(".number-wrong").text("Tr\u1ea3 l\u1eddi sai: " + t.incorrect_answer_count), e(".number-skip").text("B\u1ecf qua: " + t.skip_answer_count), e(".number-avg").text("\u0110i\u1ec3m trung b\xecnh: " + t.average_score), e(".number-students").text("T\u1ed5ng h\u1ecdc vi\xean( " + t.num_student + " )"), e(".score-draw").circleProgress({
                    value: t.score / 100,
                    size: 80,
                    fill: {
                        color: "#38b34a"
                    }
                });
                var n = "fa-check-circle",
                    r = "fa-times",
                    o = "",
                    a = 0;
                e.each(t.answer_results, function() {
                    var e = "",
                        t = "";
                    this.result ? (e = n, t = "\u0110\xfang") : (e = r, t = "Sai"), o += i.result.format(a, this.result, e, t, this.user_correct, this.user_incorrect, a + 1), a++
                }), e(".assessment-items").html(o), e(".result-go-to-answer").resultGotoAnswerHandle()
            },
            d = function(t, n) {
                for (var r = n.correct_answers.length, o = 0; r > o; o++) n.correct_answers[o] = parseInt(n.correct_answers[o]);
                var a = t.concat(n.correct_answers);
                e(".answer-item").each(function() {
                    var t = parseInt(e(this).attr("answer-index")); - 1 != a.indexOf(t) && (e(this).after(i.note.format(n.answers[t].note)), -1 != n.correct_answers.indexOf(t) ? e(this).addClass("answer-item-correct") : e(this).addClass("answer-item-wrong"))
                })
            };
        e.fn.goToAnswerHandle = function() {
            this.click(function() {
                r = parseInt(e(this).attr("answer-index")), c()
            })
        }, e.fn.resultGotoAnswerHandle = function() {
            this.click(function() {
                r = parseInt(e(this).attr("answer-index")), e(".btn-quiz").trigger("click"), e(".btn-back-result").css("display", "block"), o = !0, c(), a = []
            })
        }, e.fn.selectAnswerHandle = function() {
            this.click(function() {
                o || (e(this).hasClass("answer-item-selected") ? e(this).removeClass("answer-item-selected") : e(this).addClass("answer-item-selected"), 0 == e(".answer-item-selected").length ? (e(".btn-submit-assessment").removeClass("bt-submit"), e(".btn-submit-assessment").attr("level", "0")) : (e(".btn-submit-assessment").addClass("bt-submit"), e(".btn-submit-assessment").attr("level", "1")))
            })
        }, e.fn.submitAnswerHandle = function() {
            this.click(function() {
                e(".note-item").remove();
                var n = e(this).attr("level");
                if ("0" != n)
                    if ("1" == n) {
                        var i = t.assessments[r],
                            u = [],
                            p = !1;
                        e(".answer-item-selected").each(function() {
                            var t = parseInt(e(this).attr("answer-index"));
                            u.push(t)
                        }), u.toString() == i.correct_answers.toString() && (p = !0), a.push({
                            assessment_id: i._id._id,
                            answer: u,
                            check_answer: p
                        }), d(u, i), e(".btn-submit-assessment").removeClass("bt-submit"), e(".btn-submit-assessment").addClass("bt-next"), e(".btn-submit-assessment").attr("level", "2"), r >= t.assessments.length - 1 ? (e(".btn-submit-assessment").text("Ho\xe0n t\u1ea5t"), e(".btn-submit-assessment").attr("level", "3")) : e(".btn-submit-assessment").text("C\xe2u h\u1ecfi ti\u1ebfp theo")
                    } else if ("2" == n) r++, c();
                else if ("3" == n) {
                    if (o) return void e(".btn-result").trigger("click");
                    if (0 == a.length) return void console.error("B\u1ea1n kh\xf4ng c\xf3 c\xe2u tr\u1ea3 l\u1eddi");
                    course_id = e("#course-id").val(), quiz_id = t._id, params = {
                        quiz_id: quiz_id,
                        results: JSON.stringify(a)
                    }, s(), finish = e.ajax({
                        url: "/courses/" + course_id + "/finish_quiz",
                        type: "post",
                        data: params
                    }), finish.done(function(t, n, i) {
                        e(".btn-result").trigger("click"), l()
                    }), finish.fail(function(e, t, n) {
                        console.error("fail"), l()
                    })
                }
            })
        }, e.fn.startQuizHandle = function() {
            this.click(function() {
                t = JSON.parse(e("#quiz-data").val()), o = !1, a = [], e(".quiz-intro").css("display", "none"), e(".quiz-result").css("display", "none"), e(".btn-back-result").css("display", "none"), e(".assessment").css("display", "block"), c()
            })
        }, e.fn.resultQuizHandle = function() {
            this.click(function() {
                s(), t = JSON.parse(e("#quiz-data").val());
                var i = e("#course-id").val(),
                    r = t._id;
                result_request = e.ajax({
                    url: "/courses/" + i + "/last_finish_quiz",
                    type: "get",
                    data: {
                        quiz_id: r
                    }
                }), result_request.done(function(t, i, r) {
                    e("#quiz-result").val(JSON.stringify(t)), n = t, u(t), l()
                }), result_request.fail(function(e, t, n) {
                    l()
                }), e(".quiz-intro").css("display", "none"), e(".assessment").css("display", "none"), e(".quiz-result").css("display", "block")
            })
        }, e(".btn-quiz").startQuizHandle(), e(".btn-result").resultQuizHandle(), e(".btn-back-result").resultQuizHandle(), e(".btn-submit-assessment").submitAnswerHandle(), e(".go-to-answer").goToAnswerHandle()
    }(jQuery), $(document).ready(function() {
        $("#edit__avatar").fileupload({
            url: "//static.edumall.vn/api/users/edit_avatar",
            type: "POST",
            forceIframeTransport: !0,
            dataType: "json",
            complete: function(e, t) {
                location.reload()
            }
        }).on("fileuploadadd", function(e, t) {
            var n = t.originalFiles[0],
                i = "thumbnail_" + n.name,
                r = $("#current__user").text(),
                o = {
                    file_name: i,
                    current_user: r
                };
            t.formData = o
        })
    }), $(document).ready(function() {
        if ($(".toggle-faq").click(function(e) {
                return e.preventDefault(), $(this).find(".fa-chevron-right").hasClass("rotate") ? $(this).find(".fa-chevron-right").removeClass("rotate") : $(this).find(".fa-chevron-right").addClass("rotate"), $(this).parent().find(".faq-answer").stop(!0, !0).slideToggle(), !1
            }), $("#faq_search_form").submit(function() {
                return !1
            }), window.location.href.indexOf("#faq_no") > -1) {
            var e = window.location.href,
                t = e.split("#"),
                n = t[1];
            document.getElementById(n).click()
        }
    }),
    function(e) {
        e.fn.handleThumbnail = function() {
            e(this).click(function() {
                var t = "https://www.youtube.com/embed/bQHnUnIHezc?modestbranding=0&amp;rel=0&amp;showinfo=0;autoplay=1";
                e(".uni-player").attr("src", t), e(this).remove()
            })
        }, e(".video-thumbnail").handleThumbnail()
    }(jQuery), $(document).ready(function() {
        var e = document.getElementById("home_slider");
        e && swipeDetect(e, function(e) {
            "left" == e ? $("#home_slider").carousel("next") : "right" == e && $("#home_slider").carousel("prev")
        }), $(".list-categories a").click(function(e) {
            return e.preventDefault(), $(".list-categories li").removeClass("active"), $(this).parent().addClass("active"), $(".course_element").addClass("hide"), $("#wrap_" + $(this).attr("data-slug")).removeClass("hide"), !1
        }), $(".btn_register_with_social").click(function(e) {
            e.preventDefault();
            var t = $(this).closest(".modal-content"),
                n = $(this).attr("data-toggle");
            return "undefined" == typeof n || "show" == n ? (t.find(".login_with_social").addClass("show"), t.find(".login_with_email").addClass("has_social"), $(this).attr("data-toggle", "hide"), $(this).text("\u0110\u0103ng nh\u1eadp b\u1eb1ng Email")) : (t.find(".login_with_social").removeClass("show"), t.find(".login_with_email").removeClass("has_social"), $(this).attr("data-toggle", "show"), $(this).text("\u0110\u0103ng nh\u1eadp b\u1eb1ng m\u1ea1ng x\xe3 h\u1ed9i")), !1
        }), $(".show-social-link").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("data-toggle");
            "undefined" == typeof t || "down" == t ? ($(this).parent().find(".social-area").stop(!0, !0).slideDown(), $(this).attr("data-toggle", "up")) : ($(this).parent().find(".social-area").stop(!0, !0).slideUp(), $(this).attr("data-toggle", "down"))
        }), $("#newsModal").on("shown.bs.modal", function(e) {
            var t = $(e.relatedTarget).attr("data-modal-type"),
                n = $(e.relatedTarget).attr("data-modal-title"),
                i = $(e.relatedTarget).attr("data-modal-source");
            ("text" == t || "image" == t) && $(this).addClass("modal-text"), $(this).find(".modal-header p strong").text(n), "text" == t ? $(this).find(".modal-body").html('<iframe name="' + n + '" title="' + n + '" width="100%" height="100%" src="' + i + '" frameborder="0"></iframe>') : "video" == t ? $(this).find(".modal-body").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + i + '?autoplay=1" frameborder="0" allowfullscreen></iframe>') : "image" == t ? ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html('<img width="100%" height="auto" src="' + i + '"/>')) : "text-news-e27" == t ? ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html("<p>After 16 gruelling weeks of developing ideas, only 12 startups out of 36 survived to pitch in front of 30 Vietnamese and regional investors</p><p>By Bobby Liu 17 Nov, 2014</p><img src='https://d1h69ey09xg1xv.cloudfront.net/wp-content/uploads/2014/11/IMG_2225-720x618.jpg' width='100%'><p style='margin-top: 10px'><i>\u201cThe greatest failure is in not trying.\u201d</i></p><p>These wise words aptly describe the original batch of 36 founders/startups of Hanoi\u2019s Topica Founder Institute Class 3 cohort.</p><p>The founders iterated, pivoted, validated, and tested their ideas in front of more than 50 mentors and advisors over a period of 16 weeks. At the end, only 12 founders survived the ordeal, and graduated on October 29, 2014, and in the process, earned the right to pitch in front of more than 30 investors from Vietnam and the region. The graduation event was held at Hub.IT.</p><p>The 12 startups were:</p><p>UpLevo: A platform that provides effective design application for sole-proprietors to create and design collaterals.</p><p>Antoree: A startup that connects tutors and students on an Airbnb-type platform.</p><p>iMap: A startup that builds digital maps, software and solutions based on geographic information system (GIS) to create platforms, tools to help users see, understand, ask questions and display various types of data on the map.</p><p>TinyGuu: A startup that builds tools for parents to track and manage the online content their kids access.</p><p>Morbling: A mobile gaming studio with titles such as Ninja Escape and soon to be released Hellgate.</p><p>ZinMed: A platform that provides healthcare solutions and connects with doctors across the country through its services and applications.</p><p>hiSella: A SaaS platform designed to help Facebook merchants boost up business performances by providing an e-commerce website and a set of supportive tools.</p><p>9mix: A social networking platform for all things fashion.</p><p>Beeketing: A marketing platform that helps online sellers create marketing campaigns effectively through automation.</p><p>KlassJoy: A mobile app for collaboration and data visualisation for kindergartens.</p><p>NextTopEvent: An online platform that enables users to book tickets and get information about events.</p><p>vLance: A marketplace for hiring freelancers easily and efficiently, ala freelancer.com, but with a unique services like escrow account, tools for managing projects, and communication tools for collaborating.</p><p>The winning startups</p><p>The quality of graduates this year was the highest yet, with four of the 12 founders \u2014 Antoree, Morbling, vLance, UpLevo \u2014 obtaining funding even before graduating.</p><p>For the record, TOPICA Founder Institute is Vietnam\u2019s only accelerator whose graduates have raised multi-million dollar funding. Some illustrious alumni include:</p><p>Appota (TFI Batch 1): Appotarecently raised investment rounds of series A and B, becoming the \u201cMost Disruptive\u201d of the 500 graduates of the Founder Institute Global 2012 and currently has more than 100 employees</p><p>HSP Yton (TFI Batch 2): HSP Yton recently called for the largest Series A Vietnam from SMS (Japanese), and currently has more than 100 employees.M</p><p>My take</p><p>Having heard all 12 startups and mentoring them in a couple of sessions, I was very impressed on how far they had come in the final pitch. They were receptive to ideas and suggestions put forth by mentors and advisors, and they came to realise certain key points in their businesses.</p><p>The fact that all 12 founders came together and helped each other out despite their own workload impressed me the most. This is perhaps the most gratifying experience I\u2019ve had, seeing camaraderie in action.</p><p>Also Read: This startup promises to make your trip through Vietnam a breeze</p><p>While all the 12 ideas had merits in their own spheres, some came about as my favourites:</p><p>hiSella: What stood out for me was the solid team behind this startup and the fact it\u2019s geared towards an ever-increasing marketplace of f-commerce sellers. Its focus on the importance of localisation won\u2019t hurt hiSella\u2019s ambition of scaling either.</p><p>iMap: Another startup that pivots from its original business. While it isn\u2019t highly scalable, this startup will have its hands full just to completely roll out its services in Vietnam. The upside is the mapping technology that can be used in emerging countries neighbouring Vietnam.</p><p>Beeketing: Beyond a Mailchimp type application, it has also other analytics and data mining tools to assist users.</p><p>Impressed investors</p><p>More than 30 venture capitalists and angels were present, and generally were quite impressed with the startups.</p><p>Ng Sai Kit of Captii said, \u201cBeing my first time in Hanoi and listening to the startups, I was pleasantly surprised at the quality of ideas presented. A couple of the startups are definitely investable and we\u2019ll be contacting them shortly.\u201d</p><p>On the potential of Vietnam being an important startup ecosystem, Koichi Saito of IMJ Investment Partners said, \u201cThere\u2019s no doubt that Vietnam is on the radar of investors from the region. We\u2019re glad to be one of the earlier ones coming here. It is a young market with lots to improve, but all indications are pointing in the right direction.\u201d</p><p>Also Read: Will Vietnam be Southeast Asia\u2019s newest freelancing star?</p><p>Further reinforcing Saito\u2019s opinion, Truong of IDG Ventures Vietnam quipped, \u201cBeing an early mover in startups investment, we have been on the forefront of this growth. The initial years were tough but the recent two to three years have been very exciting for us. The future is certainly very bright.\u201d</p><p>The views expressed here are of the author, and e27 may not necessarily subscribe to them.</p><p>e27 invites members from Asia\u2019s tech industry and startup community to share their honest opinions and expert knowledge with our readers. If you are interested to share your point of view, please send us an email to writers[at]e27[dot]co</p><p><b>Theo: <a href='https://e27.co/meet-the-graduating-startups-of-topica-founder-institutes-3rd-cohort-20141117/' target='_blank'>e27.co</a></b></p>")) : "text-news-tech-asia" == t ? ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html("<img src='https://d1h69ey09xg1xv.cloudfront.net/wp-content/uploads/2014/11/IMG_2224.jpg' width='100%'><p style='margin-top: 10px'>Last week, we reported that the Vietnamese government had incubated nine startups under the auspices of the Ministry of Science and Technology. This month, Topica\u2019s Founder\u2019s Institute, an accelerator based out of Vietnam\u2019s capital Hanoi, is announcing its latest batch of twelve startups.</p><p>For those following Vietnam closely, new batches of startups are a ray of hope for Vietnam, which currently suffers from an existential crisis. To date, Founder\u2019s Institute has produced quite a number of startups, the most notable of which is Appota, which raised a series B round this April.</p><p>he good news for this batch of twelve is that three of the startups have already raised a round of funding. We\u2019ll let you read through the list first and let\u2019s see if you can guess who the three are. Answer\u2019s at the bottom.</p><p>Here\u2019s Topica\u2019s Founder\u2019s Institute third batch in full:</p><p>NextTopEvent \u2013 An event ticketing service that would compete with Ticketbox.vn. Interestingly enough, there is another startup in the government batch announced last month with a similar idea. It seems many startups are following Ticketbox\u2019s success.</p><p>9mix \u2013 Currently, this is a mobile app for women to share their favorite latest fashion items. Don\u2019t get any ideas guys, it\u2019s not panties. It\u2019s dresses and shirts and stuff.</p><p>KlassJoy \u2013 This is a mobile app (unreleased) for childhood education. It allows students, teachers, and parents to interact with each other over mobile app.</p><p>vLance \u2013 This is a platform for freelancers to connect with potential employers. There are a few other startups in this space including Freelancerviet.</p><p>TinyGuu \u2013 This one might be a little creepy. It\u2019s a tool for parents to manage and track the online content that kids are looking at.</p><p>ZinMed \u2013 Although the main site is already up, and it appears to be a quasi-WebMD for Vietnam, this startup is also working specifically on mobile apps for people to keep track of their health.</p><p>UpLevo \u2013 This one\u2019s almost like a branding consultancy firm for small businesses. Customers buy a full branding kit from the company for $29 and can create their own own branded and marketing materials.</p><p>Morbling \u2013 This one\u2019s a mobile and games studio. Some of their artwork is pretty sweet. The company is now focusing on making even prettier 3D games for mobile. Sorry iOS folks, all their games are on Android.</p><p>HiSella \u2013 This relatively established company is already an expert in building custom CMSes and is now pushing into working on building custom ecommerce sites for clients.</p><p>iMap \u2013 This company is quite broad, but focuses exclusively on location data. The broad side of this company is that it builds custom location solutions for both consumers and for businesses.</p><p>Antoree \u2013 This is another education startup that has built a platform to bring tutors in touch with students online.</p><p>Beeketing \u2013 This startup describes itself as a marketing automation tool for online sellers. It basically tracks buyer behavior and upsells or resells to them based on the Beeketing system.</p><p>\u2026</p><p>Scroll down to find out who the lucky three startups are!</p><p>\u2026</p><img src='https://d1h69ey09xg1xv.cloudfront.net/wp-content/uploads/2014/11/IMG_2225-720x618.jpg' style='margin-top: 10px; margin-bottom: 10px' width='100%'><p>\u2026</p><p>Alright\u2026made any guesses yet? So, the three are vLance, UpLevo, and Morbling. Congrats to the three startups that already managed to raise a round before graduating from the program.</p><p>ABOUT ANH-MINH</p><p>Editor and Writer focused on technology, startups, and Asia. Cofounder of Startup.vn, SHIELD, and member of Global Shapers and Thousand Network.</p><p><b>Theo: <a href='https://www.techinasia.com/founders-institute-vietnam-batch-three' target='_blank'>www.techinasia.com</a></b></p>")) : "text-news-forbes" == t ? ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html("<p>My last week in Vietnam in Ho Chi Minh City was markedly different from my week in Hanoi in ways I did not expect. A spirit of entrepreneurship and optimism about the future of education in Vietnam has been palpable.</p><p>I met with several entrepreneurs in Ho Chi Minh City. While I also met some entrepreneurs in Hanoi, they had mostly created new private schools. Here the entrepreneurs with whom I met are creating a variety of companies, including online learning providers, after-school programs, and an open education resource platform.</p><p>Perhaps the clearest example of launching a successful education disruption among my meetings, Topica offered an inspiring view into the power of online learning to expand rapidly higher education access in Vietnam. As its founder, Pham Minh Tuan, said, disruption is the only hope for Vietnam to provide the higher education capacity that the country needs, and online learning that leverages professionals in the work as its teachers is the only chance to close the gap between the academy and the workforce\u2014a gap that has been talked about in Vietnam for decades. Topica employs a Pearson PSO -0.71% Embanet-type model of partnering with existing universities to create online degree offerings, generally for working adults, a classic area of nonconsumption. Today it has five local university partners and serves 15,000 students with its 300 teachers. It also has a partnership with a university in the Philippines and is building a larger presence throughout Southeast Asia. Finally, Topica appears to be developing high-quality programs, as its retention and graduation metrics rank it in the same range as the top four online programs in the United States.</p><p>A second area ripe for innovation in the country exists in the after-school market. I visited a few after-school centers in my two weeks, including Everest Education, RISE, and the Yola Institute, all in Ho Chi Minh City and targeting different segments of the after-school market.</p><p>The team at Everest Education has two centers that are geared to helping students prepare for an international education by offering them test prep and English and math tutoring. They have developed a curriculum that focuses on inspiring students to help them develop skills in critical thinking, creativity, communication, and collaboration. I spent a lot of time during the week with the founding team and leadership\u2014Tony Ngo, Don Le, and Hieu Le\u2014as they set up several meetings for me in Vietnam. I gave a workshop to the staff on disruptive innovation and blended learning, and what struck me was how much the team is focused not just on delivering education for a small population that wants to study overseas, but also on transforming education across the country to make it more personalized and mastery-based by leveraging blended learning. The innovations that they make in the years ahead will be worth watching.</p><img src='http://blogs-images.forbes.com/michaelhorn/files/2014/03/Everest-Education.jpg' style='margin-top:10px; margin-bottom:10px' width='100%'><p><i>Conducting a workshop for the team at Everest Education on disruptive innovation and blended learning. Photo by Tracy Kim Horn.</i></p><p>The Yola Institute founders with whom I met tried initially to launch an online learning company aimed at English language learning, but it did not take off because of poor infrastructure and the consumers were not ready, they concluded. Instead, in 2009 they launched the first of their now three centers to serve students preparing for standardized tests, like the SAT. Yola\u2019s program is not simply test prep, however, as the team is building a unique curriculum that helps students build the technical skills for the test; indirect technical skills in the form of general knowledge and self-learning techniques; and nontechnical skills in the form of character development, motivation, and determination. Their new textbooks that they are unveiling are built not only to inspire students, but also to inspire teachers to teach, as the teachers will continually learn from it as well and not \u201cdeliver\u201d a pre-baked lesson, they said.</p><img src='http://blogs-images.forbes.com/michaelhorn/files/2014/03/Yola-e1393848105494.jpg' style='margin-top:10px; margin-bottom:10px' width='100%'><p><i>Duy Phan, CFO of Yola Institute, showing off the modular desks he and his team designed that allow Yola to create a variety of arrangements for individual and group learning. Photo by Michael B. Horn</i></p><p>RISE utilizes technology and a server-based English curriculum in an innovative model for Asia that uses no native English speakers to provide students with an immersive English education in other subjects at roughly $7 an hour. The center was alive with spirit and 5- and 6-year olds speaking fluent English. Many of those students had entered with no English skills. The center is growing fast, as it now serves over 200 students with a curriculum designed to serve students through age 15.</p><img src='http://blogs-images.forbes.com/michaelhorn/files/2014/03/Rise.jpg' zstyle='margin-top:10px; margin-bottom:10px' width='100%'><p><i>A classroom at RISE, an English and life skills learning program. Photo by Michael B. Horn</i></p><p>RISE is working in another big area of nonconsumption: English language learning. Particularly in rural public schools but in all schools, finding competent English teachers\u2014let alone native English speakers\u2014is challenging. Yet Vietnam is making a big push for the population to master English to make an even bigger impact in the global business world. While in Ho Chi Minh City, I met up with Jacob Stiglitz, whose company Rockit is seeking to help fill this gap with its online learning language solution.</p><img src='http://blogs-images.forbes.com/michaelhorn/files/2014/03/Stiglitz.jpeg' style='margin-top:10px; margin-bottom:10px' width='100%'><p><i>Jacob Stiglitz, founder of Rockit, and Michael B. Horn. Photo by Tracy Kim Horn</i></p><p>Lastly, I met with Kien Pham, who started the Vietnam Foundation in 2008 to create Vietnam Open Education Resources (VOER), which, according to Kien, has made Vietnam the second ranked country in OER behind the United States. With over 20,000 one-hour modules online from college professors around the country, VOER attracts 40,000 unique visitors per day, he said. The platform allows people to quickly snap together modules to create new textbooks at a price of $2.50, significantly lower than a typical textbook at $100. The textbooks offer an \u201cedited by\u201d credential to whomever snaps them together, which can offer young, time-strapped professors prestige, Kien said. Over the last two years, the team has built a new platform, called Hanoi Spring, that Kien predicts will begin to revolutionize the OER world\u2014and education more generally\u2014in Vietnam.</p><p>The entrepreneurs with whom I met in Vietnam were not only working in the education space. With organizations like the Global Shapers\u2014a collection of young professionals in Ho Chi Minh City supported by the World Economic Forum\u2014seeking to boost entrepreneurship, there is an emerging dynamism in Vietnam focused on doing well by doing good for the country. The entrepreneurs face tough obstacles, including a variety of regulatory hurdles, but with a patient, long-term view of the challenges, the entrepreneurs seem up to the task.</p><p><i>Correction: This article originally stated that Kien Pham started the Red Square Foundation in 2006. He started the Vietnam Foundation in 2008. The article also said originally that there were 20 million one-hour modules. There are over 20,000.</i></p><p><b>Theo: <a href='http://www.forbes.com/sites/michaelhorn/2014/03/03/entrepreneurs-seek-to-transform-education-in-vietnam/#d770bef272f1' target='_blank'>http://www.forbes.com/</a></b></p>")) : "text-news-vn-express" == t ? ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html('<div id="left_calculator"><div class="fck_detail width_common"><p class="Normal">D\xf9 ch\u1ec9 k\xe9o d\xe0i trong h\u01a1n 10 ph\xfat nh\u01b0ng b\xe0i gi\u1ea3ng c\u1ee7a Ph\xf3 th\u1ee7 t\u01b0\u1edbng Nguy\u1ec5n Thi\u1ec7n Nh\xe2n \u0111\xe3 l\xf4i cu\u1ed1n c\xe1c h\u1ecdc vi\xean tr\u1ef1c tuy\u1ebfn c\u0169ng nh\u01b0 c\xe1c gi\u1ea3ng vi\xean c\u1ee7a ch\u01b0\u01a1ng tr\xecnh. Theo c\u1ef1u B\u1ed9 tr\u01b0\u1edfng Gi\xe1o d\u1ee5c, ph\u1ea7n tr\u1ea3 l\u1eddi n\xe0y \u0111\u01b0\u1ee3c \xf4ng \u0111\xfac k\u1ebft sau 1,5 n\u0103m nghi\xean c\u1ee9u t\xecnh h\xecnh kh\u1ee7ng ho\u1ea3ng c\u1ee7a M\u1ef9.</p><table align="center" border="0" cellpadding="3" cellspacing="0" style="width: 100%;"></table><p class="Normal">M\u1edf \u0111\u1ea7u b\xe0i gi\u1ea3ng, Ph\xf3 th\u1ee7 t\u01b0\u1edbng cho r\u1eb1ng, nguy\xean nh\xe2n g\xe2y ra kh\u1ee7ng ho\u1ea3ng \u0111\u1ea7u ti\xean ch\xednh l\xe0 t\xecnh tr\u1ea1ng suy gi\u1ea3m li\xean t\u1ee5c ti\u1ebft ki\u1ec7m qu\u1ed1c gia b\u1edfi trong v\xf2ng 40 n\u0103m ti\u1ebft ki\u1ec7m c\xe1 nh\xe2n \u1edf M\u1ef9 gi\u1ea3m t\u1eeb 11% xu\u1ed1ng c\xf2n 0%.</p><p class="Normal">"\u1ede Vi\u1ec7t Nam, theo th\u1ed1ng k\xea, t\u1ef7 l\u1ec7 ti\u1ebft ki\u1ec7m c\xf2n kh\xe1 cao. V\u1ec1 m\u1eb7t kinh t\u1ebf ch\u01b0a th\u1ea5y v\u1ea5n \u0111\u1ec1 l\u1edbn nh\u01b0ng nh\xecn t\u1eeb h\xe0nh vi th\xec c\u0169ng kh\xe1 lo. C\xe1c n\u01b0\u1edbc kh\xe1c sang th\u1ea5y m\xecnh c\xf3 2 \u0111i\u1ec7n tho\u1ea1i di \u0111\u1ed9ng h\u1ecd ng\u1ea1c nhi\xean l\u1eafm v\xe0 di d\u1ed9ng c\u1ee7a m\xecnh \u0111\u1ec1u m\u1edbi h\u01a1n c\u1ee7a h\u1ecd. Nhi\u1ec1u khi ng\u1ed3i trong ph\xf2ng h\u1ecdp, nhi\u1ec7t \u0111\u1ed9 ch\xfang ta \u0111\u1ec3 r\u1ea5t th\u1ea5p, kho\u1ea3ng 22-23 \u0111\u1ed9 C", \xf4ng n\xf3i.</p><p class="Normal">So s\xe1nh v\u1edbi Nh\u1eadt B\u1ea3n, Ph\xf3 th\u1ee7 t\u01b0\u1edbng cho bi\u1ebft, t\u1ea5t c\u1ea3 ph\xf2ng h\u1ecdp, ph\xf2ng l\xe0m vi\u1ec7c c\u1ee7a Ch\xednh ph\u1ee7 kh\xf4ng \u0111\u1ec3 nhi\u1ec7t \u0111\u1ed9 d\u01b0\u1edbi 26 \u0111\u1ed9 C, c\xf2n Qu\u1ed1c h\u1ed9i g\u01b0\u01a1ng m\u1eabu \u0111\u1ec3 m\u1ee9c 27 \u0111\u1ed9 C. Do \u0111\u01b0\u1ee3c d\u1ea1y n\xean tr\u1ebb em n\u01b0\u1edbc n\xe0y c\u0169ng r\u1ea5t c\xf3 \xfd th\u1ee9c ti\u1ebft ki\u1ec7m n\u0103ng l\u01b0\u1ee3ng.</p><p class="Normal">Cho r\u1eb1ng, n\u1ec1n kinh t\u1ebf M\u1ef9 b\u1ecb kh\u1ee7ng ho\u1ea3ng m\u1ed9t ph\u1ea7n l\xe0 do th\xe2m h\u1ee5t ngo\u1ea1i th\u01b0\u01a1ng, \xf4ng ph\xe2n t\xedch, tr\u01b0\u1edbc khi kh\u1ee7ng ho\u1ea3ng, n\u1ee3 c\u1ee7a M\u1ef9 g\u1ea7n b\u1eb1ng 100% GDP. \u0110\xe2y ch\xednh l\xe0 d\u1ea5u hi\u1ec7u v\u1ec1 m\u1eb7t ki\u1ec3m so\xe1t b\u1edfi l\u1ebd ra ph\u1ea3i c\xf3 c\u1ea3nh b\xe1o s\u1edbm h\u01a1n. "B\xe0i h\u1ecdc \u1edf \u0111\xe2y l\xe0 d\xf9 thu nh\u1eadp \u0111\u1ea7u ng\u01b0\u1eddi cao nh\u01b0ng ph\u1ea3i gi\xe1m s\xe1t v\u1ea5n \u0111\u1ec1 nh\u1eadp si\xeau v\xe0 c\xf3 c\xe1ch th\u1ee9c khuy\u1ebfn kh\xedch doanh nghi\u1ec7p xu\u1ea5t kh\u1ea9u", \xf4ng Nh\xe2n gi\u1ea3ng.</p><p class="Normal">Sau khi \u0111\u1ec1 c\u1eadp t\u1edbi kho\u1ea3n vay n\u01b0\u1edbc ngo\xe0i c\u1ee7a M\u1ef9 t\u0103ng t\u1eeb h\u01a1n 100 t\u1ef7 USD (1997) l\xean 800 t\u1ef7 USD (2007) khi\u1ebfn n\u01b0\u1edbc n\xe0y l\xe2m v\xe0o kh\u1ee7ng ho\u1ea3ng, Ph\xf3 th\u1ee7 t\u01b0\u1edbng kh\u1eb3ng \u0111\u1ecbnh: "N\u1ee3 n\u01b0\u1edbc ngo\xe0i c\u1ee7a Vi\u1ec7t Nam v\u1eabn n\u1eb1m trong ng\u01b0\u1ee1ng an to\xe0n. C\xe1ch \u0111\xe2y 4 ng\xe0y, Th\u1ee7 t\u01b0\u1edbng c\u0169ng ch\u1ee7 tr\xec cu\u1ed9c h\u1ecdp v\u1ec1 d\u1ef1 ki\u1ebfn di\u1ec5n bi\u1ebfn vay n\u1ee3 c\u1ee7a ch\xfang ta t\u1eeb nay \u0111\u1ebfn n\u0103m 2020 v\xe0 nh\u1eefng n\u0103m sau \u0111\xf3. \u0110\xe2y l\xe0 v\u1ea5n \u0111\u1ec1 Ch\xednh ph\u1ee7 r\u1ea5t quan t\xe2m".</p><table align="center" border="0" cellpadding="3" cellspacing="0" style="width: 100%;"><tbody><tr><td><img src="http://l.f29.img.vnecdn.net/2013/07/11/Giang-vien-1373531847_500x0.jpg" alt="Giang-vien-1373531847_500x0.jpg" data-width="490" data-pwidth="470.40625" style="width: 100%; margin-bottom: 10px"></td></tr><tr><td><p class="Image">Ph\xf3 th\u1ee7 t\u01b0\u1edbng Nguy\u1ec5n Thi\u1ec7n Nh\xe2n nh\u1eadn t\xe0i kho\u1ea3n gi\u1ea3ng vi\xean danh d\u1ef1. \u1ea2nh: <em>C\xf4ng Minh.</em></p></td></tr></tbody></table><p class="Normal">Nguy\xean nh\xe2n cu\u1ed1i c\xf9ng d\u1eabn t\u1edbi kh\u1ee7ng ho\u1ea3ng c\u1ee7a M\u1ef9 ch\xednh l\xe0 th\u1ecb tr\u01b0\u1eddng t\xe0i ch\xednh ph\xe1t tri\u1ec3n quy m\xf4 l\u1edbn nh\u01b0ng l\u1ea1i \u0111\u01b0\u1ee3c gi\xe1m s\xe1t, \u0111\xe1nh gi\xe1 r\u1ee7i ro thi\u1ebfu kh\xe1ch quan. Theo Ph\xf3 th\u1ee7 t\u01b0\u1edbng, b\xe0i h\u1ecdc \u1edf \u0111\xe2y ch\xednh l\xe0 mu\u1ed1n \u0111\xe1nh gi\xe1 r\u1ee7i ro c\u1ee7a m\u1ed9t qu\u1ed1c gia, kh\xf4ng ch\u1ec9 \u0111\u1ec3 ng\u01b0\u1eddi n\u01b0\u1edbc ngo\xe0i \u0111\xe1nh gi\xe1 m\xe0 ch\xednh m\xecnh ph\u1ea3i \u0111\xe1nh gi\xe1 v\xe0 \u0111\u1ee7 \u0111\u1ed9 tin c\u1eady.</p><p class="Normal">"Ng\xe0nh ng\xe2n h\xe0ng Vi\u1ec7t Nam c\u0169ng \u0111ang tri\u1ec3n khai \u0111\u1ec1 \xe1n x\xe2y d\u1ef1ng c\xe1c c\xf4ng ty \u0111\xe1nh gi\xe1 c\u1ee7a ch\xednh ch\xfang ta v\xe0 c\xf3 s\u1ef1 h\u1ed7 tr\u1ee3 c\u1ee7a c\xe1c c\xf4ng ty n\u01b0\u1edbc ngo\xe0i. Ch\xfang ta l\xe0 n\u01b0\u1edbc m\u1edbi tham gia th\u1ecb tr\u01b0\u1eddng t\xe0i ch\xednh n\xean vi\u1ec7c \u0111\xe1nh gi\xe1 r\u1ee7i ro, c\u1ea3nh b\xe1o s\u1edbm r\u1ea5t quan tr\u1ecdng", \xf4ng nh\u1ea5n m\u1ea1nh.</p><p class="Normal">B\xe0i gi\u1ea3ng k\u1ebft th\xfac b\u1eb1ng tr\xe0ng ph\xe1o tay c\u1ee7a c\xe1c h\u1ecdc vi\xean tr\u1ef1c tuy\u1ebfn, gi\u1ea3ng vi\xean, l\xe3nh \u0111\u1ea1o B\u1ed9 GD&amp;\u0110T... \u0110\u1ec3 c\xe1c h\u1ecdc vi\xean c\xf3 nhi\u1ec1u c\u01a1 h\u1ed9i \u0111\u01b0\u1ee3c trao \u0111\u1ed5i, h\u1ecdc h\u1ecfi h\u01a1n n\u1eefa, Vi\u1ec7n tr\u01b0\u1edfng Vi\u1ec7n \u0110H M\u1edf H\xe0 N\u1ed9i L\xea V\u0103n Thanh \u0111\xe3 trao t\xe0i kho\u1ea3n "Gi\u1ea3ng vi\xean tr\u1ef1c tuy\u1ebfn danh d\u1ef1" - nguyenthiennhan.gv - cho Ph\xf3 th\u1ee7 t\u01b0\u1edbng Nguy\u1ec5n Thi\u1ec7n Nh\xe2n. Sau bu\u1ed5i h\u1ecdc n\xe0y, c\xe1c h\u1ecdc vi\xean c\u1ee7a ch\u01b0\u01a1ng tr\xecnh c\xf3 th\u1ec3 \u0111\u1eb7t c\xe2u h\u1ecfi \u0111\u1ec3 "th\u1ea7y" Nguy\u1ec5n Thi\u1ec7n Nh\xe2n tr\u1ea3 l\u1eddi tr\u1ef1c tuy\u1ebfn.</p><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td bgcolor="#e4e4c9"><p style="padding: 5px">Kh\u1edfi \u0111\u1ed9ng t\u1eeb th\xe1ng 3/2009, ch\u01b0\u01a1ng tr\xecnh C\u1eed nh\xe2n tr\u1ef1c tuy\u1ebfn TOPICA - gi\u1ea3ng d\u1ea1y qua h\u1ec7 th\u1ed1ng m\xf4 ph\u1ecfng 3D - \u0111\xe3 thu h\xfat \u0111\u01b0\u1ee3c 2.300 h\u1ecdc vi\xean theo h\u1ecdc c\xe1c ng\xe0nh Qu\u1ea3n tr\u1ecb kinh doanh, K\u1ebf to\xe1n, T\xe0i ch\xednh Ng\xe2n h\xe0ng v\xe0 k\u1ef9 s\u01b0 Tin h\u1ecdc. Ngo\xe0i c\xe1c gi\u1ea3ng vi\xean l\xfd thuy\u1ebft, ch\u01b0\u01a1ng tr\xecnh \u0111\xe3 thu h\xfat 250 gi\u1ea3ng vi\xean \u0111ang l\xe0m vi\u1ec7c t\u1ea1i c\xe1c doanh nghi\u1ec7p \u0111\u1ec3 t\u0103ng c\u01b0\u1eddng th\u1ef1c t\u1ebf l\xe0m vi\u1ec7c cho c\xe1c h\u1ecdc vi\xean.</p></td></tr></tbody></table><p align="right" class="Normal" style="margin-top: 10px;""><b>Ti\u1ebfn D\u0169ng</b></p><p><b>Theo: <a href=\'http://vnexpress.net/tin-tuc/giao-duc/pho-thu-tuong-giang-bai-truc-tuyen-2178654.html\' target=\'_blank\'>http://vnexpress.net/</a></b></p></div>')) : "text-news-vn-net" == t ? ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html('<p><b>V\u1edbi 10 n\u0103m kinh nghi\u1ec7m trong \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn, TOPICA kh\xf4ng ch\u1ec9 g\xf3p ph\u1ea7n ph\xe1t tri\u1ec3n xu h\u01b0\u1edbng \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn (E-learning) \u1edf Vi\u1ec7t Nam m\xe0 c\xf2n l\xe0 \u0111\u01a1n v\u1ecb ti\xean phong xu\u1ea5t kh\u1ea9u c\xf4ng ngh\u1ec7 E-learning \u0111\u1ed9c quy\u1ec1n ra th\u1ebf gi\u1edbi.</b></p><p>\u0110\xe2y l\xe0 nh\u1eefng th\xf4ng tin do \u0111\u1ea1i di\u1ec7n T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA - \u0111\u01a1n v\u1ecb \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn c\xf3 uy t\xedn h\xe0ng \u0111\u1ea7u \u0110\xf4ng Nam \xc1 - chia s\u1ebb t\u1ea1i H\u1ed9i th\u1ea3o \u201cC\xf4ng ngh\u1ec7 th\xf4ng tin (CNTT) v\xe0 t\u01b0\u01a1ng lai gi\xe1o d\u1ee5c \u0111\xe0o t\u1ea1o\u201d. H\u1ed9i th\u1ea3o n\u1eb1m trong khu\xf4n kh\u1ed5 ch\u01b0\u01a1ng tr\xecnh Smart.Edu 2014 do Hi\u1ec7p h\u1ed9i Ph\u1ea7n m\u1ec1m v\xe0 D\u1ecbch v\u1ee5 CNNT Vi\u1ec7t Nam - VINASA tri\u1ec3n khai c\xf9ng.</p><p>Smart.Edu 2014 gi\u1edbi thi\u1ec7u nh\u1eefng gi\u1ea3i ph\xe1p c\xf4ng ngh\u1ec7 ti\xean ti\u1ebfn \u0111\xe3 v\xe0 \u0111ang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng hi\u1ec7u qu\u1ea3 t\u1ea1i c\xe1c c\u01a1 s\u1edf \u0111\xe0o t\u1ea1o trong n\u01b0\u1edbc v\xe0 qu\u1ed1c t\u1ebf. </p><p>\u0110\u1ea1i bi\u1ec3u tham d\u1ef1 H\u1ed9i th\u1ea3o \u0111\u01b0\u1ee3c l\u1eafng nghe v\xe0 tr\u1ea3i nghi\u1ec7m c\xe1c gi\u1ea3i ph\xe1p CNTT trong gi\xe1o d\u1ee5c nh\u01b0: M\xf4 h\xecnh gi\xe1o d\u1ee5c tr\u1ef1c tuy\u1ebfn c\u1ee7a T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA; Gi\u1ea3i ph\xe1p tr\u01b0\u1eddng h\u1ecdc c\u1ee7a c\xf4ng ty Samsung v\xe0 H\u1ec7 sinh th\xe1i qu\u1ea3n l\xfd tr\u01b0\u1eddng h\u1ecdc theo m\xf4 h\xecnh \u0111i\u1ec7n to\xe1n \u0111\xe1m m\xe2y c\u1ee7a c\xf4ng ty MISA.</p><img src="http://imgs.vietnamnet.vn/Images/vnn/2014/08/18/16/20140818163707-to1.jpg" style="margin-bottom: 10px;width:100%" /><p style="background-color: #e5e5e5;color: #333333;font-size: 13px;font-style: italic;padding: 8px;">Ch\u01b0\u01a1ng tr\xecnh Smart.Edu 2014 gi\u1edbi thi\u1ec7u nhi\u1ec1u gi\u1ea3i ph\xe1p CNTT trong gi\xe1o d\u1ee5c</p><p>T\u1ea1i h\u1ed9i th\u1ea3o, xu h\u01b0\u1edbng E-learning \u0111\u01b0\u1ee3c nh\u1eafc \u0111\u1ebfn nh\u01b0 m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c \u0111\xe0o t\u1ea1o hi\u1ec7n \u0111\u1ea1i d\u1ef1a tr\xean c\xf4ng ngh\u1ec7 th\xf4ng tin. M\u1ed9t s\u1ed1 h\xecnh th\u1ee9c \u0111\xe0o t\u1ea1o b\u1eb1ng E-learning ch\u1ee7 y\u1ebfu nh\u01b0: \u0111\xe0o t\u1ea1o d\u1ef1a tr\xean c\xf4ng ngh\u1ec7 (TBT - Technology-Based training), \u0111\xe0o t\u1ea1o d\u1ef1a tr\xean m\xe1y t\xednh (CBT - Computer-Based Training), \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn (Online Learning/Training). </p><p>\u0110\xe2y l\xe0 xu h\u01b0\u1edbng \u0111\u01b0\u1ee3c nh\u1eadn \u0111\u1ecbnh \u0111ang \u201cb\xf9ng n\u1ed5\u201d \u01a1\u0309 ca\u0301c n\u01b0\u01a1\u0301c \u0110\xf4ng Nam A\u0301 nh\u01b0 Singapore, Malaysia, Th\xe1i Lan, Vi\u1ec7t Nam... </p><p>\u1ede Vi\u1ec7t Nam, TOPICA l\xe0 \u0111\u01a1n v\u1ecb duy nh\u1ea5t cung c\u1ea5p h\u1ea1 t\u1ea7ng \u0111\xe0o t\u1ea1o C\u1eed nh\xe2n tr\u1ef1c tuy\u1ebfn cho nhi\u1ec1u tr\u01b0\u1eddng \u0110H nh\u1ea5t \u0110\xf4ng Nam \xc1, v\u1edbi 5 \u0111\u1ed1i t\xe1c t\u1ea1i Vi\u1ec7t Nam v\xe0 1 \u0111\u1ed1i t\xe1c l\u1edbn nh\u1ea5t Philippines. \u0110\u1ebfn nay, \u0111\xe2y c\u0169ng l\xe0 \u0111\u01a1n v\u1ecb duy nh\u1ea5t \u1edf \u0110\xf4ng Nam \xc1 cung c\u1ea5p ch\u01b0\u01a1ng tr\xecnh \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn cho tr\xecnh \u0111\u1ed9 \u0111\u1ea1i h\u1ecdc.</p><img src="http://imgs.vietnamnet.vn/Images/vnn/2014/08/18/16/20140818163707-to2.jpg" style="margin-bottom: 10px;width:100%"/><p style="background-color: #e5e5e5;color: #333333;font-size: 13px;font-style: italic;padding: 8px;">Ths. \u0110\u1eb7ng Th\u1ecb Thuy Thu\u1ef3 chia s\u1ebb v\u1ec1 E-learning nh\u01b0 xu th\u1ebf Harvard t\u1ea1i Vi\u1ec7t Nam</p><p>Chia s\u1ebb t\u1ea1i H\u1ed9i th\u1ea3o, Ths. \u0110\u1eb7ng Th\u1ecb Thuy Thu\u1ef3 - Ph\xf3 Gi\xe1m \u0111\u1ed1c T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA kh\u1ed1i Mi\u1ec1n Nam - c\u0169ng \u0111\u01b0a ra gi\u1ea3i ph\xe1p CNTT \u1ee9ng d\u1ee5ng trong \u0111\xe0o t\u1ea1o theo ph\u01b0\u01a1ng th\u1ee9c E-learning t\u1ea1i Vi\u1ec7t Nam c\u0169ng nh\u01b0 nh\u1eefng xu th\u1ebf E-learning tr\xean th\u1ebf gi\u1edbi hi\u1ec7n nay. </p><p>B\xe0 Th\xf9y cho bi\u1ebft: \u201cPh\u01b0\u01a1ng ph\xe1p E-learning \u0111\xe3 \u0111\u01b0\u1ee3c Harvard, Maryland v\xe0 h\xe0ng tr\u0103m \u0110H M\u1ef9 \xe1p d\u1ee5ng th\xe0nh c\xf4ng. T\u1ea1i Vi\u1ec7t Nam, v\u1edbi 10 n\u0103m kinh nghi\u1ec7m trong \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn, TOPICA l\xe0 \u0111\u01a1n v\u1ecb ti\xean phong xu\u1ea5t kh\u1ea9u c\xf4ng ngh\u1ec7 E-learning \u0111\u1ed9c quy\u1ec1n ra th\u1ebf gi\u1edbi.</p><p>Th\xe1ng 06/2014 TOPICA k\xed h\u1ee3p \u0111\u1ed3ng cung c\u1ea5p h\u1ec7 th\u1ed1ng ph\u1ea7n m\u1ec1m ph\u1ee5c v\u1ee5 gi\xe1o d\u1ee5c c\xf9ng quy tr\xecnh v\u1eadn h\xe0nh, ph\u01b0\u01a1ng ph\xe1p x\xe2y d\u1ef1ng gi\xe1o tr\xecnh \u0111a ph\u01b0\u01a1ng ti\u1ec7n v\xe0 tri\u1ec3n khai \u0111\xe0o t\u1ea1o cho \u0110\u1ea1i h\u1ecdc AMA (\u0110H l\u1edbn nh\u1ea5t Philippines)\u201d.</p><p>H\u01a1n n\u1eefa, h\u1ecdc vi\xean c\xf2n c\xf3 c\u01a1 h\u1ed9i luy\u1ec7n n\xf3i qua Google Glass \u0111\u1ea7u ti\xean tr\xean th\u1ebf gi\u1edbi, l\u01b0\u1edbt Mobile l\u1ea5y b\u1eb1ng \u0111\u1ea1i h\u1ecdc, xem Topica TV ch\u1ecdn b\xe0i gi\u1ea3ng hay, bay l\u01b0\u1ee3n, mua b\xe1n trong Topica 3D h\u1ecdc Kinh t\u1ebf Vi m\xf4. TOPICA ph\u1ea5n \u0111\u1ea5u lu\xf4n \u0111i \u0111\u1ea7u \u0110\xf4ng Nam \xc1 v\u1ec1 c\xf4ng ngh\u1ec7 trong \u0111\xe0o t\u1ea1o v\xe0 kh\xf4ng ng\u1eebng \u0111\xf3n \u0111\u1ea7u nh\u1eefng xu th\u1ebf E-learning tr\xean th\u1ebf gi\u1edbi.</p><img src="http://imgs.vietnamnet.vn/Images/vnn/2014/08/18/16/20140818163707-to3.jpg" style="margin-bottom: 10px;width:100%" /><p style="background-color: #e5e5e5;color: #333333;font-size: 13px;font-style: italic;padding: 8px;text-align:center">TOPICA mong mu\u1ed1n g\xf3p ph\u1ea7n \u0111\u01b0a gi\xe1o d\u1ee5c Vi\u1ec7t Nam tr\u1edf th\xe0nh n\u1ec1n gi\xe1o d\u1ee5c ti\xeau bi\u1ec3u trong khu v\u1ef1c</p><table style="background-color: #d9e6f0;border-color: #cc6633;border-style: dashed;border-width: thin;color: #333;margin-top: 5px;padding: 5px;" width="100%" align="center" class="quote center"><tbody style="background: none;border: 0;font-size: 100%;margin: 0;outline: 0;padding: 0;vertical-align: baseline;"><tr><td style="border: none;padding: 10px;"><span><strong>C\xe1c ch\u01b0\u01a1ng tr\xecnh \u0111\xe0o t\u1ea1o c\u1ee7a TOPICA bao g\u1ed3m: <br></strong><br>- TOPICA Uni - cung c\u1ea5p c\xf4ng ngh\u1ec7 v\xe0 d\u1ecbch v\u1ee5 h\u1ed7 tr\u1ee3 C\u1eed nh\xe2n tr\u1ef1c tuy\u1ebfn h\u1ee3p t\xe1c v\u1edbi 5 \u0110H h\xe0ng \u0111\u1ea7u t\u1ea1i Vi\u1ec7t Nam v\xe0 \u0110H l\u1edbn nh\u1ea5t Philippines. Hi\u1ec7n ch\u01b0\u01a1ng tr\xecnh \u0111\xe3 c\xf3 1600 c\u1ef1u sinh vi\xean th\u0103ng ti\u1ebfn, th\xe0nh \u0111\u1ea1t v\xe0 1000 doanh nh\xe2n tham gia gi\u1ea3ng d\u1ea1y. <br><br>- TopMito - Luy\u1ec7n n\xf3i ti\u1ebfng Anh tr\u1ef1c tuy\u1ebfn \u0111\u1ea7u ti\xean tr\xean th\u1ebf gi\u1edbi v\u1edbi Google Glass. <br><br>- TOPICA Founder Institute - Accelerator \u0111\u1ea7u ti\xean \u1edf VN c\xf3 startup g\u1ecdi v\u1ed1n h\xe0ng tri\u1ec7u USD, chi nh\xe1nh m\u1ea1ng l\u01b0\u1edbi Silicon Valley ho\u1ea1t \u0111\u1ed9ng t\u1ea1i 41 n\u01b0\u1edbc. <br><br>- CASEC: ch\u1ee9ng ch\u1ec9 Ti\u1ebfng Anh qu\u1ed1c t\u1ebf. TOPICA hi\u1ec7n nay c\xf3 h\u01a1n 350 nh\xe2n vi\xean, 200 c\u1ed9ng t\xe1c vi\xean v\xe0 h\u01a1n 1000 gi\u1ea3ng vi\xean t\u1ea1i H\xe0 N\u1ed9i, TP.HCM, \u0110\xe0 N\u1eb5ng v\xe0 Manila. <br><br>TOPICA t\u1eebng nh\u1eadn 8 gi\u1ea3i th\u01b0\u1edfng qu\u1ed1c t\u1ebf t\u1eeb World Economic Forum, World Bank, Stockholm Challenge\u2026</span></td></tr></tbody></table><p style="margin-top: 10x"><strong><p>V\u0169 Minh</p></strong></p><p><b>Theo: <a href=\'http://vietnamnet.vn/vn/giao-duc/193058/tien-phong-day-manh-xu-huong-e-learning-o-viet-nam.html\' target=\'_blank\'>http://vietnamnet.vn/</a></b></p>')) : "text-news-dan-tri" == t && ($(this).find(".modal-content").css({
                "padding-bottom": "20px"
            }), $(this).find(".modal-body").css({
                overflow: "scroll",
                "overflow-x": "hidden"
            }), $(this).find(".modal-body").html('<p style="color: #5f5f5f;font-weight: 700;font-size:18px">Ng\xe0y 7/9, t\u1ea1i H\u1ed9i ngh\u1ecb Chuy\xean \u0111\u1ec1 Kinh t\u1ebf to\xe0n c\u1ea7u 2014 (GES), \u0111\u1ea1i di\u1ec7n Vi\u1ec7t Nam duy nh\u1ea5t chia s\u1ebb v\u1ec1 E-learning, Ti\u1ebfn s\u0129 Ph\u1ea1m Minh Tu\u1ea5n - Ng\u01b0\u1eddi s\xe1ng l\u1eadp T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA \u0111\xe3 c\xf3 ph\u1ea7n chia s\u1ebb th\xe0nh c\xf4ng, thu h\xfat s\u1ef1 ch\xfa \xfd c\u1ee7a \u0111\xf4ng \u0111\u1ea3o \u0111\u1ea1i bi\u1ec3u.</p><p>H\u1ed9i ngh\u1ecb Chuy\xean \u0111\u1ec1 Kinh t\u1ebf to\xe0n c\u1ea7u 2014 (GES) \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c b\u1edfi h\u1ecdc vi\u1ec7n Kiel (\u0110\u1ee9c) c\xf9ng c\xe1c t\u1eadp \u0111o\xe0n h\xe0ng \u0111\u1ea7u th\u1ebf gi\u1edbi, di\u1ec5n ra t\u1ea1i Kh\xe1ch s\u1ea1n Shangri-La, Kuala Lumpur, Malaysia t\u1eeb ng\xe0y 6/9 \u0111\u1ebfn 8/9/2014. Ti\u1ebfn s\u0129 Ph\u1ea1m Minh Tu\u1ea5n l\xe0 m\u1ed9t trong hai \u0111\u1ea1i bi\u1ec3u Vi\u1ec7t Nam \u0111\u1ea7u ti\xean \u0111\u01b0\u1ee3c m\u1eddi l\xe0m di\u1ec5n gi\u1ea3 t\u1ea1i H\u1ed9i ngh\u1ecb n\xe0y.</p><p>GES 2014 c\xf3 s\u1ef1 tham gia c\u1ee7a h\u01a1n 700 \u0111\u1ea1i bi\u1ec3u, trong \u0111\xf3 c\xf3 21 b\u1ed9 tr\u01b0\u1edfng, c\xf9ng nhi\u1ec1u l\xe3nh \u0111\u1ea1o c\xe1c t\u1eadp \u0111o\xe0n l\u1edbn v\xe0 \u0111\u1ea1i di\u1ec7n c\xe1c h\xe3ng th\xf4ng t\u1ea5n tr\xean to\xe0n th\u1ebf gi\u1edbi. B\xean c\u1ea1nh \u0111\xf3, H\u1ed9i ngh\u1ecb c\xf2n c\xf3 s\u1ef1 g\xf3p m\u1eb7t c\u1ee7a 4 \u0111\u1ea1i bi\u1ec3u t\u1eebng nh\u1eadn gi\u1ea3i Nobel, \u0111\u1ea1i di\u1ec7n 20 tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc (\u0110H) l\u1edbn nh\u01b0: Stanford, Maryland, Columbia\u2026, c\xf9ng c\xe1c t\u1ed5 ch\u1ee9c x\xe3 h\u1ed9i v\xe0 c\u1ed9ng \u0111\u1ed3ng.</p><img src="https://dantri4.vcmedia.vn/gLC4WLlnU8F79RboyWSp/Image/2014/09/Chon_Toan-canh-ges-2014-5728c.jpg" style="margin-bottom: 10px;width:100%"><span style="font-size: 14px;">GES 2014 c\xf3 s\u1ef1 tham gia c\u1ee7a h\u01a1n 700 \u0111\u1ea1i bi\u1ec3u \u0111\u1ebfn t\u1eeb h\u01a1n 30 qu\u1ed1c gia</span><p>Ch\u1ee7 \u0111\u1ec1 ch\xednh c\u1ee7a GES 2014 l\xe0 \u201cT\xe1i c\u1ea5u tr\xfac n\u1ec1n kinh t\u1ebf v\xe0 thay \u0111\u1ed5i x\xe3 h\u1ed9i\u201d v\u1edbi 46 phi\xean th\u1ea3o lu\u1eadn. N\u1ed9i dung ch\u1ee7 y\u1ebfu s\u1ebd xoay quanh gi\u1ea3i ph\xe1p cho nh\u1eefng v\u1ea5n \u0111\u1ec1 m\xe0 th\u1ebf gi\u1edbi g\u1eb7p ph\u1ea3i do t\u1ed1c \u0111\u1ed9 t\u0103ng tr\u01b0\u1edfng nhanh ch\xf3ng c\u1ee7a khoa h\u1ecdc \u2013 c\xf4ng ngh\u1ec7, s\u1ef1 bi\u1ebfn \u0111\u1ed5i x\xe3 h\u1ed9i v\xe0 thay \u0111\u1ed5i tr\u1eadt t\u1ef1 kinh t\u1ebf to\xe0n c\u1ea7u.</p><img src="https://dantri4.vcmedia.vn/gLC4WLlnU8F79RboyWSp/Image/2014/09/Chon_session-5728c.jpg" style="margin-bottom: 10px;width:100%"><span style="10px;">Ch\u1ee7 \u0111\u1ec1 ch\xednh c\u1ee7a GES 2014 l\xe0 \u201cT\xe1i c\u1ea5u tr\xfac n\u1ec1n kinh t\u1ebf v\xe0 thay \u0111\u1ed5i x\xe3 h\u1ed9i\u201d</span><p>T\u1ea1i s\u1ef1 ki\u1ec7n n\xe0y, Ti\u1ebfn s\u0129 Ph\u1ea1m Minh Tu\u1ea5n c\xf9ng C\u1ef1u B\u1ed9 tr\u01b0\u1edfng Lao \u0110\u1ed9ng Th\u1ee5y \u0110i\u1ec3n v\xe0 Ch\xe1nh v\u0103n ph\xf2ng B\u1ed9 Gi\xe1o d\u1ee5c Malaysia th\u1ea3o lu\u1eadn v\u1ec1 s\u1ef1 thay \u0111\u1ed5i c\u1ee7a gi\xe1o d\u1ee5c trong k\u1ef7 nguy\xean s\u1ed1.</p><img src="https://dantri4.vcmedia.vn/gLC4WLlnU8F79RboyWSp/Image/2014/09/Chon_TS-Pham-Minh-Tuan-5728c.jpg" style="margin-bottom: 10px;width:100%"><span>Ti\u1ebfn s\u0129 Ph\u1ea1m Minh Tu\u1ea5n - Ch\u1ee7 t\u1ecbch H\u0110QT T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA chia s\u1ebb t\u1ea1i GES 2014</span><p>V\u1edbi t\u01b0 c\xe1ch l\xe0 \u0111\u1ea1i di\u1ec7n T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA - \u0111\u01a1n v\u1ecb duy nh\u1ea5t c\u1ee7a \u0110\xf4ng Nam \xc1 cung c\u1ea5p c\xf4ng ngh\u1ec7 v\xe0 d\u1ecbch v\u1ee5 c\u1eed nh\xe2n tr\u1ef1c tuy\u1ebfn ch\u1ea5t l\u01b0\u1ee3ng cao cho c\xe1c tr\u01b0\u1eddng \u0110H; Ti\u1ebfn s\u0129 Ph\u1ea1m Minh Tu\u1ea5n \u0111\xe3 ph\xe1t bi\u1ec3u v\u1ec1 t\xe1c \u0111\u1ed9ng c\u1ee7a E-Learning t\u1edbi n\u1ec1n gi\xe1o d\u1ee5c c\u1ee7a c\xe1c n\u01b0\u1edbc \u0110\xf4ng Nam \xc1. Ph\u1ea7n chia s\u1ebb c\u1ee7a Ti\u1ebfn s\u0129 Tu\u1ea5n thu h\xfat \u0111\xf4ng \u0111\u1ea3o s\u1ef1 quan t\xe2m t\u1eeb ph\xeda \u0111\u1ea1i bi\u1ec3u.</p><p>\xd4ng Tu\u1ea5n cho bi\u1ebft, kho\u1ea3ng 2 n\u0103m tr\u1edf l\u1ea1i \u0111\xe2y, h\xe0ng tr\u0103m tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc h\xe0ng \u0111\u1ea7u tr\xean th\u1ebf gi\u1edbi \u0111\u1ec1u t\u1eadp trung ph\xe1t tri\u1ec3n m\u1ea1nh E-Learning, trong \u0111\xf3 c\xf3 c\xe1c tr\u01b0\u1eddng \u0111\u01b0a ra nhi\u1ec1u kho\xe1 h\u1ecdc m\u1edf \u0111\u1ea1i tr\xe0 (MOOC) nh\u01b0 Harvard, Stanford, v\xe0 nhi\u1ec1u tr\u01b0\u1eddng kh\xe1c \u0111\u01b0a ra c\xe1c ch\u01b0\u01a1ng tr\xecnh E-Learning c\u1ea5p b\u1eb1ng c\u1eed nh\xe2n, th\u1ea1c s\u0129, nh\u01b0 Berkeley, Georgia Tech, Maryland\u2026 E-Learning h\u1ee9a h\u1eb9n \u0111em l\u1ea1i c\u01a1 h\u1ed9i h\u1ecdc t\u1eadp ch\u1ea5t l\u01b0\u1ee3ng cao, chi ph\xed h\u1ee3p l\xfd cho sinh vi\xean to\xe0n c\u1ea7u, trong \u0111\xf3 c\xf3 c\xe1c n\u01b0\u1edbc \u0111ang ph\xe1t tri\u1ec3n. Th\xe1ch th\u1ee9c l\u1edbn nh\u1ea5t \u0111\u1ed1i v\u1edbi c\xe1c tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc \u1edf \u0110\xf4ng Nam \xc1 l\xe0 l\xe0m sao x\xe2y d\u1ef1ng c\xe1c h\u1ec7 th\u1ed1ng c\xf4ng ngh\u1ec7, \u0111\u1ed9i ng\u0169 gi\u1ea3ng vi\xean b\u1ea3n \u0111\u1ecba, h\u1ed7 tr\u1ee3 h\u1ecdc vi\xean, v\xe0 t\u1eadn d\u1ee5ng c\xe1c b\xe0i gi\u1ea3ng m\u1edf c\u1ee7a c\xe1c tr\u01b0\u1eddng \u0110H M\u1ef9 \u0111\u1ec3 b\u1ea3n \u0111\u1ecba ho\xe1, \u0111\u01b0a v\xe0o gi\u1ea3ng d\u1ea1y m\xe0 duy tr\xec \u0111\u01b0\u1ee3c t\u1ef7 l\u1ec7 gi\u1eef ch\xe2n v\xe0 hi\u1ec7u qu\u1ea3 h\u1ecdc t\u1eadp cao.</p><p>Theo Gi\xe1o s\u01b0 Edward Lazear, GS. Nh\xe2n l\u1ef1c v\xe0 Kinh t\u1ebf, \u0110H Stanford, ng\u01b0\u1eddi t\u1eebng \u0111\u1ea1t gi\u1ea3i Adam Smith: \u0110\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn \u0111\xe3 hi\u1ec7n di\u1ec7n t\u1eeb r\u1ea5t l\xe2u. T\u1ea1i tr\u01b0\u1eddng t\xf4i gi\u1ea3ng d\u1ea1y, \u0110H Stanford \u0111\xe3 d\xf9ng \u0111\xe0o t\u1ea1o tr\u1ef1c tuy\u1ebfn cho gi\u1ea3ng d\u1ea1y c\xe1c ng\xe0nh k\u1ef9 thu\u1eadt kho\u1ea3ng 20 n\u0103m nay. Tr\u01b0\u1eddng kinh doanh c\u1ee7a Stanford c\u0169ng \u0111ang b\u1eaft \u0111\u1ea7u tham gia, c\xe1c \u0111\u01a1n v\u1ecb kh\xe1c c\u0169ng b\u1eaft \u0111\u1ea7u tham gia. N\xf3 l\xe0 v\u1ea5n \u0111\u1ec1 m\u1ee9c \u0111\u1ed9 lan t\u1ecfa, xu th\u1ebf n\xe0y \u0111\xe3 b\u1eaft \u0111\u1ea7u, n\xf3 s\u1ebd lan t\u1ecfa \u0111\u1ebfn \u0111\xe2u ch\xfang ta s\u1ebd \u0111\u01b0\u1ee3c ch\u1ee9ng ki\u1ebfn trong th\u1eadp k\u1ef7 t\u1edbi. T\xf4i kh\xf4ng h\u1ec1 nghi ng\u1edd g\xec l\xe0 E-learning s\u1ebd l\xe0 m\u1ed9t s\u1ee9c m\u1ea1nh t\xedch c\u1ef1c, v\xe0 n\xf3 s\u1ebd c\u1ea5t c\xe1nh.</p><p>Trong bu\u1ed5i th\u1ea3o lu\u1eadn, c\xe1c \u0111\u1ea1i bi\u1ec3u tham d\u1ef1 th\u1ef1c s\u1ef1 \u1ea5n t\u01b0\u1ee3ng, khi TOPICA l\xe0 \u0111\u01a1n v\u1ecb \u0111\u1ea7u ti\xean c\u1ee7a Vi\u1ec7t Nam xu\u1ea5t kh\u1ea9u c\xf4ng ngh\u1ec7 E-learning ra n\u01b0\u1edbc ngo\xe0i, cho \u0111\u1ed1i t\xe1c AMA University - \u0110H l\u1edbn nh\u1ea5t Philippines v\u1edbi 300.000 sinh vi\xean. Cho \u0111\u1ebfn nay TOPICA c\u0169ng l\xe0 \u0111\u01a1n v\u1ecb duy nh\u1ea5t \u1edf \u0110\xf4ng Nam \xc1 cung c\u1ea5p c\xf4ng ngh\u1ec7 v\xe0 d\u1ecbch v\u1ee5 \u0111\u1ed3ng b\u1ed9 cho ch\u01b0\u01a1ng tr\xecnh C\u1eed nh\xe2n tr\u1ef1c tuy\u1ebfn c\u1ee7a c\xe1c tr\u01b0\u1eddng \u0110H. TOPICA c\xf2n cung c\u1ea5p Topmito, ch\u01b0\u01a1ng tr\xecnh \u0111\u1ea7u ti\xean tr\xean th\u1ebf gi\u1edbi cho ph\xe9p luy\u1ec7n n\xf3i ti\u1ebfng Anh qua Google Glass v\xe0 m\xe1y t\xednh, \u0111i\u1ec7n tho\u1ea1i di \u0111\u1ed9ng; v\xe0 Casec, h\u1ec7 th\u1ed1ng \u0111\xe1nh gi\xe1 n\u0103ng l\u1ef1c Ti\u1ebfng Anh \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng d\u1ef1a tr\xean nh\u1eefng nghi\xean c\u1ee9u c\u1ee7a Hi\u1ec7p h\u1ed9i \u0111\xe1nh gi\xe1 n\u0103ng l\u1ef1c Ti\u1ebfng Anh (STEP) v\xe0 \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi Vi\u1ec7n \u0111o l\u01b0\u1eddng gi\xe1o d\u1ee5c Nh\u1eadt B\u1ea3n (JIEM). TOPICA Founder Institute l\xe0 ch\u01b0\u01a1ng tr\xecnh \u01b0\u01a1m t\u1ea1o kh\u1edfi nghi\u1ec7p \u0111\u1ea7u ti\xean \u1edf Vi\u1ec7t Nam c\xf3 c\xe1c startup g\u1ecdi v\u1ed1n th\xe0nh c\xf4ng h\xe0ng tri\u1ec7u USD nh\u01b0 Appota, HSP Yton.</p><p>\u0110\u01b0\u1ee3c bi\u1ebft, TOPICA hi\u1ec7n c\xf3 \u0111\u1ed9i ng\u0169 400 nh\xe2n vi\xean, 1100 gi\u1ea3ng vi\xean v\xe0 100 c\u1ed9ng t\xe1c vi\xean. M\xf4i tr\u01b0\u1eddng l\xe0m vi\u1ec7c TOPICA khuy\u1ebfn kh\xedch tinh th\u1ea7n \u201c\u0110\u01b0\u1ee3c l\xe0m vua, thua l\xe0m hi\u1ec7p s\u0129\u201d \u0111\u1ec3 c\xf3 th\u1ec3 \u0111\u01b0a nh\u1eefng c\xf4ng ngh\u1ec7 v\xe0 ph\u01b0\u01a1ng ph\xe1p m\u1edbi nh\u1ea5t v\xe0o \xe1p d\u1ee5ng. H\u01a1n 1000 qu\u1ea3n l\xfd, chuy\xean gia \u0111\u1ebfn t\u1eeb c\xe1c doanh nghi\u1ec7p, t\u1ed5 ch\u1ee9c \u0111\xe3 tham gia gi\u1ea3ng d\u1ea1y, \u0111\xf3ng g\xf3p r\u1ea5t c\u1ee5 th\u1ec3 v\xe0o vi\u1ec7c \u201cg\u1eafn k\u1ebft doanh nghi\u1ec7p v\u1edbi nh\xe0 tr\u01b0\u1eddng\u201d. C\xf3 gi\u1ea3ng vi\xean l\xe0 l\xe3nh \u0111\u1ea1o ng\xe2n h\xe0ng r\u1ea5t b\u1eadn r\u1ed9n, nh\u01b0ng v\u1eabn d\xe0nh h\u01a1n 800 gi\u1edd m\u1ed9t n\u0103m \u0111\u1ec3 gi\u1ea3ng d\u1ea1y online, t\u1ee9c l\xe0 g\u1ea7n 3 gi\u1edd m\u1ed9t ng\xe0y, v\xe0 tr\u1ea3 l\u1eddi h\xe0ng ng\xe0n c\xe2u h\u1ecfi c\u1ee7a sinh vi\xean.</p><p>V\u1ec1 l\xfd do m\u1eddi TOPICA chia s\u1ebb t\u1ea1i GES 2014, th\xe0nh vi\xean Ban t\u1ed5 ch\u1ee9c, Ti\u1ebfn s\u0129 J\xf6rg Dr\xe4ger, \u0111\u1ed3ng th\u1eddi l\xe0 th\xe0nh vi\xean Ban Gi\xe1m \u0111\u1ed1c T\u1eadp \u0111o\xe0n Bertelsmann Stiftung, \u0110\u1ee9c, cho bi\u1ebft: Ch\xfang t\xf4i \u0111ang t\xecm ki\u1ebfm nh\u1eefng \u0111\u01a1n v\u1ecb c\xf3 kinh nghi\u1ec7m v\xe0 th\xe0nh c\xf4ng trong l\u0129nh v\u1ef1c gi\xe1o d\u1ee5c \u1edf Ch\xe2u \xc1. \u0110\xf3 l\xe0 l\xfd do t\u1ea1i sao ch\xfang t\xf4i t\xecm \u0111\u1ebfn TOPICA. T\xf4i ngh\u0129 r\u1eb1ng ch\xfang t\xf4i c\xf3 th\u1ec3 h\u1ecdc h\u1ecfi t\u1eeb TOPICA c\xe1ch m\u1edf r\u1ed9ng gi\xe1o d\u1ee5c trong m\xf4i tr\u01b0\u1eddng nh\u01b0 Vi\u1ec7t Nam, nh\u01b0 Philippines, v\xe0 c\xf3 th\u1ec3 l\xe0 c\u1ea3 \u1ea4n \u0110\u1ed9, n\u01a1i m\xe0 kh\u1ea3 n\u0103ng ti\u1ebfp c\u1eadn, chi ph\xed l\xe0 v\u1ea5n \u0111\u1ec3 v\xe0 ch\xfang t\xf4i c\u1ea7n \u0111\u01b0a gi\xe1o d\u1ee5c ch\u1ea5t l\u01b0\u1ee3ng cao ti\u1ebfp c\u1eadn v\u1edbi \u0111\xf4ng \u0111\u1ea3o ng\u01b0\u1eddi d\xe2n. Qua bu\u1ed5i th\u1ea3o lu\u1eadn ng\xe0y h\xf4m nay, Ban t\u1ed5 ch\u1ee9c th\u1ef1c s\u1ef1 \u1ea5n t\u01b0\u1ee3ng v\u1edbi nh\u1eefng g\xec TOPICA \u0111ang l\xe0m.</p><table class="" style="border-collapse: collapse;border: solid 1px #000;padding: 2%;box-sizing: border-box;"><tbody><tr><td style="border-collapse: collapse;border: solid 1px #000;padding: 2%;box-sizing: border-box;"><p><span><strong>Th\xf4ng tin th\xeam v\u1ec1 TS. Ph\u1ea1m Minh Tu\u1ea5n</strong></span></p><p><span>Ch\u1ee7 t\u1ecbch H\u0110QT &amp; T\u1ed5ng gi\xe1m \u0111\u1ed1c, T\u1ed5 h\u1ee3p C\xf4ng ngh\u1ec7 Gi\xe1o d\u1ee5c TOPICA (TOPICA Edtech Group)</span></p><p><span>L\xe3nh \u0111\u1ea1o tr\u1ebb to\xe0n c\u1ea7u 2012 (YGL), Di\u1ec5n \u0111\xe0n Kinh t\u1ebf Th\u1ebf gi\u1edbi (WEF)</span></p><p><span>\u1ee6y vi\xean Ban ch\u1ec9 \u0111\u1ea1o M\u1ea1ng l\u01b0\u1edbi \u01af\u01a1m t\u1ea1o Doanh nghi\u1ec7p Ch\xe2u \xc1 Th\xe1i B\xecnh D\u01b0\u01a1ng (APIN)</span></p><p><span>\u1ee6y vi\xean \u1ee6y ban Trung \u01b0\u01a1ng H\u1ed9i Li\xean hi\u1ec7p Thanh ni\xean Vi\u1ec7t Nam</span></p><p><span>Nguy\xean Tr\u01b0\u1edfng khoa T\xe0i ch\xednh Ng\xe2n h\xe0ng, \u0110H M\u1edf HN; Ph\xf3 Vi\u1ec7n tr\u01b0\u1edfng Vi\u1ec7n Ti\xean ti\u1ebfn KHCN, \u0110H B\xe1ch Khoa HN</span></p><p><span>Nguy\xean H\u1ecdc gi\u1ea3 Th\u1ec9nh gi\u1ea3ng Cao c\u1ea5p, \u0110\u1ea1i h\u1ecdc California San Diego (UCSD)</span></p><p><span>Nguy\xean Ch\u1ee7 t\u1ecbch H\u0110QT, Noi.vn</span></p><p><span>T\u1eebng gi\u1eef c\xe1c v\u1ecb tr\xed t\u1ea1i T\u1eadp \u0111o\xe0n t\u01b0 v\u1ea5n chi\u1ebfn l\u01b0\u1ee3c McKinsey (Budapest), Qu\u1ef9 \u0111\u1ea7u t\u01b0 m\u1ea1o hi\u1ec3m Extramedia (New York,Singapore), C\xf4ng ty ph\u1ea7n m\u1ec1m Integra (Budapest)</span></p><p><span>Ti\u1ebfn s\u0129 Qu\u1ea3n tr\u1ecb th\xf4ng tin v\xe0 Th\u1ea1c s\u0129 Tin h\u1ecdc, \u0110H K\u1ef9 thu\u1eadt &amp; Kinh t\u1ebf Budapest (BUTE)</span></p><p><span>Th\u1ea1c s\u0129 Qu\u1ea3n tr\u1ecb kinh doanh, \u0110H New York (NYU)</span></p></td></tr></tbody></table><p style="text-align:right;margin-top: 10px"><b>PV</b></p><p><b>Theo: <a href=\'http://dantri.com.vn/kinh-doanh/e-learning-viet-nam-toa-sang-tai-hoi-nghi-kinh-te-toan-cau-ges-2014-1410689029.htm\' target=\'_blank\'>http://dantri.com.vn/</a></b></p>'));
        }), $("#newsModal").on("hide.bs.modal", function(e) {
            $(this).find(".modal-header p strong").text(""), $(this).find(".modal-body").html(""), $(this).removeClass("modal-text"), $(this).find(".modal-content").removeAttr("style"), $(this).find(".modal-body").removeAttr("style")
        }), $(".featured-courses-sm a").click(function(e) {
            e.preventDefault()
        })
    }), $(window).scroll(function() {
        var e = $(".home-slider").height();
        $(this).scrollTop() >= e ? ($("#sticky_header").removeClass("hide"), $("#sticky_header").stop(!0).animate({
            top: "0px"
        }, 200)) : ($("#sticky_header").addClass("hide"), $("#sticky_header").css({
            top: "-70px"
        }))
    }), page_discussion = 1,

    function(e) {
        var t = function(e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                    n = t.exec(location.search);
                return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            },
            n = t("ordering");
        if ("" != n.trim()) {
            e("#my-filter").val(n);
            var i = e(".my-fillter-select[value=" + n + "]");
            e(".my-courses-fillter-selected").html(i.text() + '<b class="caret"></b>')
        }
        e.fn.coursesSortingSelect = function() {
            this.click(function() {
                e("#my-filter").val(e(this).attr("value")), e("#my-filter-form").submit()
            })
        }, e(".my-fillter-select").coursesSortingSelect()
    }(jQuery), $(document).ready(function() {
        setTimeout(function() {
            $(".search-dropdown .dropdown-toggle").click(function() {
                $('.search-dropdown .search-box input[name="q"]').focus()
            })
        }, 3e3)
    }), $(document).ready(function() {
        $("#recive_info, #receive_info_uni").change(function() {
            $(this).prop("checked") ? $(".info-cod").show(300) : $(".info-cod").hide(300)
        }), $("#native_cod7").change(function() {
            $(this).prop("checked") ? ($(".info-cod#native").show(300), $("#uni_cod7").prop("checked") && $("#congviec_uni").hide()) : ($(".info-cod#native").hide(300), $("#uni_cod7").prop("checked") && $("#congviec_uni").show()), count = count_uni_select(), $("#select_count_uni").html(count + "/3")
        }), $("#uni_cod7").change(function() {
            $(this).prop("checked") ? $("#native_cod7").prop("checked") ? ($("#congviec_uni").hide(), $(".info-cod#uni").show(300)) : ($("#congviec_uni").show(), $(".info-cod#uni").show(300)) : $(".info-cod#uni").hide(300)
        }), $(".submit-learning").click(function() {
            $("#learning").submit()
        }), $("label#select-uni select").each(function() {
            $(this).change(function() {
                var e = 0;
                $("label#select-uni select").each(function() {
                    this.value.length > 0 && (e += 1)
                }), 3 == e ? $(".star-uni").css("color", "red") : $(".star-uni").css("color", "#810c15"), $("#uni_cod7").prop("checked") ? ($("#select_count_uni").html(e + "/3"), $(".star-uni").css("color", "red")) : ($("#select_count_native").html(e + "/2"), $(".star-uni").css("color", "red"))
            })
        }), $("label#select-native select").each(function() {
            $(this).change(function() {
                var e = 0;
                $("label#select-native select").each(function() {
                    this.value.length > 0 && (e += 1)
                }), 2 == e ? $(".star-native").css("color", "red") : $(".star-native").css("color", "#810c15"), $("#select_count_native").html(e + "/2"), $(".star-native").css("color", "red")
            })
        }), $("label#select select").each(function() {
            $(this).change(function() {
                var e = 0;
                $("label#select select").each(function() {
                    this.value.length > 0 && (e += 1)
                }), 3 == e ? $(".fa-star").css("color", "red") : $(".fa-star").css("color", "#810c15"), $("#select_count").html(e + "/3")
            })
        }), $(".btn-activate").on("click", function() {
            $.ajax({
                beforeSend: function() {
                    $("#wait").css("display", "block")
                },
                complete: function() {}
            })
        })
    }), $(document).ready(function() {
        $(".search-form").on("submit", function(e) {
            e.preventDefault(), e.stopPropagation();
            var t = $(this).find(".course-search").val();
            t.length >= 2 && (processed_input = t.split(" ").join("-"), window.location.href = window.location.origin + "/search/" + processed_input)
        })
    }), page = 1, $(document).ready(function() {
        $("#flux").scroll(function() {
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                page += 1;
                var e = {
                        page: page
                    },
                    t = "//" + window.location.host + "/notification/load_more",
                    n = $.ajax({
                        url: t,
                        type: "post",
                        data: e
                    });
                n.done(function(e, t, n) {
                    console.log(e), $("#noti-first").append(e)
                }), n.fail(function(e, t, n) {})
            }
        })
    }), $(window).load(function() {
        for (var e = function(e, t) {
                t.src = e.src
            }, t = $(".image-lazier img"), n = t.length, i = 0; n > i; i++) {
            var r = t[i],
                o = new Image;
            o.src = r.getAttribute("data-source"), o.onload = e(o, r)
        }
    }), $(function() {
        var e = !1;
        $(window).scroll(function() {
            var t = 400;
            $(window).scrollTop() >= t && 0 == e && (e = !0, $(".banner-side-left,.banner-side-right").animate({
                opacity: "1"
            })), $(window).scrollTop() < t && 1 == e && (e = !1, $(".banner-side-left,.banner-side-right").animate({
                opacity: "0"
            }))
        })
    }), $(document).ready(function() {
        $(".remove_course").click(function() {
            course_id = $(this).find($(".course_id")).val();
            var e = "/cart/" + course_id + "/remove_session_course";
            $.ajax({
                type: "POST",
                url: e,
                success: function(e, t, n) {
                    window.location.reload()
                },
                complete: function(e, t) {
                    window.location.reload()
                }
            })
        })
    }), $(document).ready(function() {
        $(".home_page #books-search-txt").focus(function(e) {
            $(".list-category > li.dropdown > .dropdown-menu").css({
                display: "block"
            })
        });
        var e = function() {
                var e = 0;
                return function(t, n) {
                    clearTimeout(e), e = setTimeout(t, n)
                }
            }(),
            t = function() {
                $(".list-category > li.dropdown > .dropdown-menu").css({
                    display: "none"
                }), 0 == $("#books-search-results").length ? $("#atc-search").append('<div id="books-search-results"><p class="loading">\u0110ang t\xecm ki\u1ebfm...</p></div>') : $("#books-search-results").html('<p class="loading">\u0110ang t\xecm ki\u1ebfm...</p>')
            },
            n = $("#books-search-txt").attr("search_api");
        $("#books-search-txt").keyup(function(i) {
            var r = $.trim($(this).val());
            r.length > 0 && (t(), e(function() {
                $.ajax({
                    url: n,
                    type: "GET",
                    data: {
                        term: r
                    },
                    success: function(e) {
                        if (0 == e.search.length) $("#books-search-results").html('<p class="empty">Kh\xf4ng t\xecm th\u1ea5y k\u1ebft qu\u1ea3 v\u1edbi t\u1eeb kh\xf3a "' + r + '"</p>');
                        else {
                            for (var t = "", n = 0; n < e.search.length; n++) {
                                var i = e.search[n];
                                t += '<li class="item clearfix" data-src="' + i.alias_name + '">                                <a href="' + i.alias_name + '?utm_source=search_autocomplete">                                  <div class="pull-left img_course">                                    <img src="' + i.image + '">                                  </div>                                  <div class="info">                                    <p class="course_title">' + i.name + '</p>                                    <p class="course_author">' + i.user_name + "</p>                                  </div>                                </a>                              </li>"
                            }
                            var o = "<ul>" + t + "</ul>";
                            5 == e.search.length && (o += '<a href="/search/' + r + '" class="full-search">Xem t\u1ea5t c\u1ea3 k\u1ebft qu\u1ea3 v\u1edbi t\u1eeb kh\xf3a "' + r + '"</a>'), $("#books-search-results").html(o)
                        }
                    },
                    error: function(e) {
                        $("#books-search-results").remove(), console.log(e.message)
                    }
                })
            }))
        })
    }), $(document).click(function(e) {
        $(e.target).closest("#books-search-results").length || $("#books-search-results").remove();
        var t = $(e.target).closest(".list-category > li.dropdown > .dropdown-menu").length,
            n = "books-search-txt" == $(e.target).attr("id");
        t || n || $(".list-category > li.dropdown > .dropdown-menu").css({
            display: "none"
        })
    }), $(document).ready(function() {
        $("#lectures-mobile").click(function() {
            $(".lectures-mobile").hasClass("animated fadeInLeft") ? ($(".lectures-mobile").hide(300).removeClass("animated fadeInLeft"), $(".content").show()) : ($(".lectures-mobile").show().addClass("animated fadeInLeft"), $(".content").hide())
        })
    });

