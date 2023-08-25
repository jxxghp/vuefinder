import { ref as L, watch as Re, inject as P, openBlock as _, createElementBlock as E, createElementVNode as p, unref as x, normalizeClass as ht, createTextVNode as st, toDisplayString as C, createCommentVNode as Z, createVNode as Mt, TransitionGroup as An, withCtx as q, Fragment as lt, renderList as kt, reactive as Le, onMounted as Dt, onUpdated as $n, withDirectives as Tt, vShow as Te, withModifiers as Wt, nextTick as ze, customRef as Ln, withKeys as ne, isRef as On, vModelText as oe, normalizeStyle as is, provide as jt, computed as Pn, createBlock as F, resolveDynamicComponent as Nn, renderSlot as Je } from "vue";
import de from "plupload";
var os;
const Oe = (os = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : os.getAttribute("content"), Pe = (r, { method: t = "get", params: s = {}, json: n = !0, signal: a = null }) => {
  const i = { method: t };
  if (i.signal = a, t == "get")
    r += "?" + new URLSearchParams(s);
  else {
    i.headers = {}, Oe && (i.headers["X-CSRF-Token"] = Oe);
    let d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
    i.body = d;
  }
  return fetch(r, i).then((d) => d.ok ? n ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function jn(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var n = r.get(t);
    n ? n.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var n = r.get(t);
    n && (s ? n.splice(n.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var n = r.get(t);
    n && n.slice().map(function(a) {
      a(s);
    }), (n = r.get("*")) && n.slice().map(function(a) {
      a(t, s);
    });
  } };
}
function Qe(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(t));
  Re(s, n);
  function n() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function a(m, l) {
    s.value = Object.assign({ ...s.value }, { [m]: l });
  }
  function i() {
    s.value = null;
  }
  return { getStore: (m, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(m) ? s.value[m] : l, setStore: a, clearStore: i };
}
const jr = L("");
function $t() {
  function r(t) {
    jr.value = t;
  }
  return { apiUrl: jr, setApiUrl: r };
}
const Rn = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, zn = {
  key: 0,
  class: "flex text-center"
}, Bn = ["aria-label"], Vn = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Hn = [
  Vn
], Un = ["aria-label"], Kn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Yn = [
  Kn
], Wn = ["aria-label"], Xn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Zn = [
  Xn
], qn = ["aria-label"], Fn = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), Gn = [
  Fn
], Jn = {
  key: 1,
  class: "flex text-center"
}, Qn = { class: "pl-2" }, to = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, eo = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ro = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), so = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), no = [
  ro,
  so
], oo = { class: "flex text-center items-center justify-end" }, io = ["aria-label"], ao = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, lo = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, co = {
  name: "VFToolbar"
}, uo = /* @__PURE__ */ Object.assign(co, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter");
    P("usePropDarkMode");
    const { getStore: s, setStore: n } = P("storage"), { t: a } = P("i18n"), i = L(s("viewport", "grid")), d = L([]);
    L(s("full-screen", !1));
    const m = L("");
    t.on("vf-search-query", ({ newQuery: f }) => {
      m.value = f;
    });
    const l = P("loadingState"), v = () => l.value;
    return t.on("vf-nodes-selected", (f) => {
      d.value = f;
    }), t.on("vf-view-toggle", (f) => {
      n("viewport", f), i.value = f;
    }), (f, b) => (_(), E("div", Rn, [
      m.value.length ? (_(), E("div", Jn, [
        p("div", Qn, [
          st(C(x(a)("Search results for")) + " ", 1),
          p("span", to, C(m.value), 1)
        ]),
        v() ? (_(), E("svg", eo, no)) : Z("", !0)
      ])) : (_(), E("div", zn, [
        p("div", {
          class: "mx-1.5 p-1",
          "aria-label": x(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: b[0] || (b[0] = (S) => x(t).emit("vf-modal-show", { type: "new-folder", items: d.value }))
        }, Hn, 8, Bn),
        p("div", {
          class: "mx-1.5 p-1",
          "aria-label": x(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: b[1] || (b[1] = (S) => d.value.length != 1 || x(t).emit("vf-modal-show", { type: "rename", items: d.value }))
        }, [
          (_(), E("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([d.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Yn, 2))
        ], 8, Un),
        p("div", {
          class: "mx-1.5 p-1",
          "aria-label": x(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: b[2] || (b[2] = (S) => !d.value.length || x(t).emit("vf-modal-show", { type: "delete", items: d.value }))
        }, [
          (_(), E("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Zn, 2))
        ], 8, Wn),
        p("div", {
          class: "mx-1.5 p-1",
          "aria-label": x(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: b[3] || (b[3] = (S) => x(t).emit("vf-modal-show", { type: "upload", items: d.value }))
        }, Gn, 8, qn)
      ])),
      p("div", oo, [
        p("div", {
          class: "mx-1.5 p-1",
          "aria-label": x(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b[4] || (b[4] = (S) => m.value.length || x(t).emit("vf-view-toggle", i.value == "list" ? "grid" : "list"))
        }, [
          (_(), E("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ht([m.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            i.value == "grid" ? (_(), E("path", ao)) : Z("", !0),
            i.value == "list" ? (_(), E("path", lo)) : Z("", !0)
          ], 2))
        ], 8, io)
      ])
    ]));
  }
});
var ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fo(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var as = { exports: {} };
(function(r, t) {
  (function(s, n) {
    r.exports = n();
  })(ho, function() {
    function s(c, u) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var g, o, h, y, w = [], D = !0, B = !1;
        try {
          if (h = (e = e.call(c)).next, u === 0) {
            if (Object(e) !== e)
              return;
            D = !1;
          } else
            for (; !(D = (g = h.call(e)).done) && (w.push(g.value), w.length !== u); D = !0)
              ;
        } catch (W) {
          B = !0, o = W;
        } finally {
          try {
            if (!D && e.return != null && (y = e.return(), Object(y) !== y))
              return;
          } finally {
            if (B)
              throw o;
          }
        }
        return w;
      }
    }
    function n(c, u) {
      var e = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(o) {
          return Object.getOwnPropertyDescriptor(c, o).enumerable;
        })), e.push.apply(e, g);
      }
      return e;
    }
    function a(c) {
      for (var u = 1; u < arguments.length; u++) {
        var e = arguments[u] != null ? arguments[u] : {};
        u % 2 ? n(Object(e), !0).forEach(function(g) {
          l(c, g, e[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(e)) : n(Object(e)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(e, g));
        });
      }
      return c;
    }
    function i(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var e = 0; e < u.length; e++) {
        var g = u[e];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, R(g.key), g);
      }
    }
    function m(c, u, e) {
      return u && d(c.prototype, u), e && d(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, e) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = e, c;
    }
    function v(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(u && u.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), u && b(c, u);
    }
    function f(c) {
      return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, f(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, o) {
        return g.__proto__ = o, g;
      }, b(c, u);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function O(c, u, e) {
      return S() ? O = Reflect.construct.bind() : O = function(o, h, y) {
        var w = [null];
        w.push.apply(w, h);
        var D = Function.bind.apply(o, w), B = new D();
        return y && b(B, y.prototype), B;
      }, O.apply(null, arguments);
    }
    function T(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function I(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return I = function(g) {
        if (g === null || !T(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, o);
        }
        function o() {
          return O(g, arguments, f(this).constructor);
        }
        return o.prototype = Object.create(g.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(o, g);
      }, I(c);
    }
    function M(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return M(c);
    }
    function z(c) {
      var u = S();
      return function() {
        var g = f(c), o;
        if (u) {
          var h = f(this).constructor;
          o = Reflect.construct(g, arguments, h);
        } else
          o = g.apply(this, arguments);
        return H(this, o);
      };
    }
    function j(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = f(c), c !== null); )
        ;
      return c;
    }
    function V() {
      return typeof Reflect < "u" && Reflect.get ? V = Reflect.get.bind() : V = function(u, e, g) {
        var o = j(u, e);
        if (o) {
          var h = Object.getOwnPropertyDescriptor(o, e);
          return h.get ? h.get.call(arguments.length < 3 ? u : g) : h.value;
        }
      }, V.apply(this, arguments);
    }
    function X(c, u) {
      return G(c) || s(c, u) || et(c, u) || pt();
    }
    function k(c) {
      return N(c) || nt(c) || et(c) || vt();
    }
    function N(c) {
      if (Array.isArray(c))
        return ct(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function nt(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function et(c, u) {
      if (c) {
        if (typeof c == "string")
          return ct(c, u);
        var e = Object.prototype.toString.call(c).slice(8, -1);
        if (e === "Object" && c.constructor && (e = c.constructor.name), e === "Map" || e === "Set")
          return Array.from(c);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return ct(c, u);
      }
    }
    function ct(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var e = 0, g = new Array(u); e < u; e++)
        g[e] = c[e];
      return g;
    }
    function vt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function gt(c, u) {
      var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!e) {
        if (Array.isArray(c) || (e = et(c)) || u && c && typeof c.length == "number") {
          e && (c = e);
          var g = 0, o = function() {
          };
          return {
            s: o,
            n: function() {
              return g >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[g++]
              };
            },
            e: function(D) {
              throw D;
            },
            f: o
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, w;
      return {
        s: function() {
          e = e.call(c);
        },
        n: function() {
          var D = e.next();
          return h = D.done, D;
        },
        e: function(D) {
          y = !0, w = D;
        },
        f: function() {
          try {
            !h && e.return != null && e.return();
          } finally {
            if (y)
              throw w;
          }
        }
      };
    }
    function A(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var e = c[Symbol.toPrimitive];
      if (e !== void 0) {
        var g = e.call(c, u || "default");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function R(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var $ = function(u, e, g) {
      var o = u.x, h = u.y, y = g.x, w = g.y, D = {
        "+": {
          x: o + y,
          y: h + w
        },
        "-": {
          x: o - y,
          y: h - w
        },
        "*": {
          x: o * y,
          y: h * w
        },
        "/": {
          x: o / y,
          y: h / w
        }
      };
      return D[e];
    }, tt = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: e,
        height: e
      };
    }, St = function(u) {
      return {
        x: u,
        y: u
      };
    }, bt = function(c, u) {
      var e = u;
      window.addEventListener("resize", e), window.addEventListener("scroll", e);
      var g = new MutationObserver(e);
      c.forEach(function(h, y) {
        g.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var o = function() {
        return dn(g, e);
      };
      return {
        observer: g,
        callback: e,
        cleanup: o
      };
    }, xe = function(c) {
      var u = Ce(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, ke = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ye = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, De = function(c, u) {
      var e;
      return function() {
        for (var g = arguments.length, o = new Array(g), h = 0; h < g; h++)
          o[h] = arguments[h];
        var y = function() {
          e = null, c.apply(void 0, o);
        };
        clearTimeout(e), e = setTimeout(y, u);
      };
    }, We = function() {
      var c, u, e, g;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((e = document.body) === null || e === void 0 ? void 0 : e.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Mr = function(c) {
      var u = function e(g) {
        var o, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (o = g[h]) === null || o === void 0 ? void 0 : o.parentNode;
        return y ? (g.push(y), h++, e(g, h)) : g;
      };
      return u([c]);
    }, Qs = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var e = c.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        bottom: e.bottom,
        right: e.right,
        width: (c.clientWidth || e.width) * u,
        height: (c.clientHeight || e.height) * u
      };
    }, Tr = function(c, u) {
      var e = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Nt(c).forEach(function(g) {
        var o = u.getRect(g);
        e.top = Math.min(e.top, o.top), e.left = Math.min(e.left, o.left), e.bottom = Math.max(e.bottom, o.bottom), e.right = Math.max(e.right, o.right);
      }), e.height = e.bottom - e.top, e.width = e.right - e.left, e;
    }, Ce = function(c) {
      return !c || c instanceof Document ? We() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : We().x,
        y: c.scrollTop >= 0 ? c.scrollTop : We().y
      };
    }, Ir = function(c) {
      var u = c.elementRect, e = c.containerRect, g = c.tolerance, o = g === void 0 ? {
        x: 0,
        y: 0
      } : g, h = [];
      return u.top - o.y < e.top && h.push("top"), u.left - o.x < e.left && h.push("left"), u.bottom + o.y > e.bottom && h.push("bottom"), u.right + o.y > e.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, tn = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, en = function(c) {
      var u = c.scrollAmount, e = c.initialPointerPos, g = c.pointerPos, o = {};
      return g.x > e.x - u.x ? (o.left = e.x - u.x, o.width = g.x - e.x + u.x) : (o.left = g.x, o.width = e.x - g.x - u.x), g.y > e.y - u.y ? (o.top = e.y - u.y, o.height = g.y - e.y + u.y) : (o.top = g.y, o.height = e.y - g.y - u.y), o;
    }, Ar = function(u) {
      var e = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return e;
      if (g.transform.indexOf("3d") >= 0) {
        var o = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (o && o.length) {
          var h, y = (h = o[1]) === null || h === void 0 ? void 0 : h.split(",");
          e.x = parseInt(y[12]) || 0, e.y = parseInt(y[13]) || 0;
        }
        return e;
      }
      var w = g.transform.trim().match(/matrix\((.*?)\)/);
      if (w && w.length) {
        var D, B = (D = w[1]) === null || D === void 0 ? void 0 : D.split(",");
        e.x = parseInt(B[4]) || 0, e.y = parseInt(B[5]) || 0;
      }
      return e;
    }, rn = function(u) {
      var e = u.style.transform;
      if (!e || e.indexOf("translate") < 0)
        return Ar(u);
      var g = {
        x: 0,
        y: 0
      }, o = e.trim().match(/translate[3dD]*?\(.*?\)/);
      if (o) {
        var h, y = (h = o[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var w, D = (w = y[1]) === null || w === void 0 ? void 0 : w.split(",");
          g.x = parseInt(D[0]) || 0, g.y = parseInt(D[1]) || 0;
        }
      }
      return !g.x && !g.x ? Ar(u) : g;
    }, sn = function(u) {
      var e = u.style, g = {
        x: parseInt(e.left) || 0,
        y: parseInt(e.top) || 0
      };
      if (!g.x && !g.x) {
        var o = window.getComputedStyle(u);
        return {
          x: parseInt(o.left) || 0,
          y: parseInt(o.top) || 0
        };
      }
      return g;
    }, nn = function(c, u) {
      return u ? rn(c) : sn(c);
    }, on = function(c) {
      var u = c.element, e = c.edges, g = c.elementRect, o = c.containerRect, h = c.elementPos, y = c.useTransform;
      e.includes("top") && le(u, {
        y: h.y + o.top - g.top,
        x: h.x
      }, y), e.includes("left") && le(u, {
        y: h.y,
        x: h.x + o.left - g.left
      }, y), e.includes("bottom") && le(u, {
        y: h.y + o.bottom - g.bottom,
        x: h.x
      }, y), e.includes("right") && le(u, {
        y: h.y,
        x: h.x + o.right - g.right
      }, y);
    }, $r = function(c) {
      var u = c.computedStyle, e = c.node, g = u.position, o = g === "absolute" || g === "relative" || g === "fixed";
      !(e instanceof Document) && !o && (e.style.position = "relative");
    }, an = function(c) {
      var u = c.shiftKey, e = c.keyboardDragSpeed, g = c.zoom, o = c.key, h = c.dragKeys, y = c.scrollDiff, w = c.canScroll, D = c.scrollCallback, B = {
        x: 0,
        y: 0
      }, W = u ? e * 4 * g : e * g;
      return h.left.includes(o) && (B.x = y.x || -W, !u && !y.x && w && D(["left"], e)), h.right.includes(o) && (B.x = y.x || W, !u && !y.x && w && D(["right"], e)), h.up.includes(o) && (B.y = y.y || -W, !u && !y.y && w && D(["top"], e)), h.down.includes(o) && (B.y = y.y || W, !u && !y.y && w && D(["bottom"], e)), B;
    }, ln = function(c) {
      var u = c.element, e = c.force, g = c.multiSelectionToggle, o = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !e || (o.has(u) ? g && o.delete(u) : o.add(u), u.classList.add(h));
    }, cn = function(c) {
      var u = c.element, e = c.force, g = c.SelectedSet, o = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !e)
        return !1;
      var y = g.has(u), w = o.has(u);
      y && !w ? g.delete(u) : !y && w && g.add(u), u.classList.remove(h);
    }, ae = function(u, e, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(e, '".'));
    }, Y = function(u, e, g, o) {
      if (e === void 0)
        return g ? l({}, u, o) : {};
      if (e === null)
        return l({}, u, null);
      var h = !0, y = !1, w = typeof o == "string";
      w && (h = typeof e == "string" || e instanceof String), w && !h && (y = !0, ae(u, "string"));
      var D = !Number.isNaN(o) && typeof o == "number";
      D && (h = !Number.isNaN(e) && typeof e == "number"), D && !h && (y = !0, ae(u, "number"));
      var B = Object.prototype.toString.call(o) === "[object Object]";
      B && (h = Object.prototype.toString.call(e) === "[object Object]"), B && !h && (y = !0, ae(u, "object"));
      var W = typeof o == "boolean";
      W && (h = typeof e == "boolean"), W && !h && (y = !0, ae(u, "boolean"));
      var it = Array.isArray(o);
      it && (h = Array.isArray(e)), it && !h && (y = !0, ae(u, "array"));
      var wt = y || g;
      return u === "dragKeys" && h ? l({}, u, Object.assign(o, e)) : u === "dragKeys" && !h ? wt ? l({}, u, o) : {} : (u === "dropZones" && h && new Set(e.map(function(_t) {
        return _t.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? l({}, u, e) : wt ? l({}, u, o) : {});
    }, un = function(c, u) {
      return a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a(a({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, Gt = function(c, u) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (e > 0) {
        var o = (c.right - c.left) * e, h = (c.bottom - c.top) * e;
        g = {
          left: c.left + o,
          right: c.right - o,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return g.left < u.right && // 1.
      g.right > u.left && // 2.
      g.top < u.bottom && // 3.
      g.bottom > u.top;
    }, Lr = function(c) {
      var u = c.element, e = c.posDirection, g = c.containerRect, o = c.useTransform, h = nn(u, o), y = $(h, "+", e);
      le(u, y, o);
      var w = u.getBoundingClientRect(), D = Ir({
        elementRect: w,
        containerRect: g
      });
      on({
        element: u,
        edges: D,
        elementRect: w,
        containerRect: g,
        elementPos: y,
        useTransform: o
      });
    }, dn = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, hn = function(c, u, e) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, o = c instanceof Document ? g || document.body : c, h = u.includes("top") && o.scrollTop > 0, y = u.includes("bottom") && o.scrollTop < o.scrollHeight, w = u.includes("left") && o.scrollLeft > 0, D = u.includes("right") && o.scrollLeft < o.scrollWidth;
        h && (o.scrollTop -= 1 * e), y && (o.scrollTop += 1 * e), w && (o.scrollLeft -= 1 * e), D && (o.scrollLeft += 1 * e);
      }
    }, le = function(c, u, e) {
      if (e) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, fn = function(c) {
      for (var u = c.subscribe, e = c.publish, g = c.Interaction, o = c.SelectedSet, h = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(it) {
              return it.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var it = h.getTarget();
              return a({}, it ? {
                dropTarget: it.toObject()
              } : {});
            }
          }
        ]
      }, w = function() {
        var it = X(B[D], 2), wt = it[0], _t = it[1];
        ["pre", !1].forEach(function(Ct) {
          return u(Ct ? "".concat(wt, ":").concat(Ct) : wt, function(ot) {
            return _t.forEach(function(mt) {
              return (!mt.condition || mt.condition(ot)) && e(Ct ? "".concat(Ct).concat(mt.name) : mt.name, a(a({
                items: o.elements,
                isDragging: g.isDragging
              }, ot), mt.extraData ? mt.extraData(ot) : {}));
            });
          });
        });
      }, D = 0, B = Object.entries(y); D < B.length; D++)
        w();
    }, Nt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Or = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, pn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(o) {
          e.reset(), e._node = o, $r({
            computedStyle: e.computedStyle,
            node: e._node
          }), setTimeout(function() {
            e.DS.PubSub.publish("Area:modified:pre", {
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              item: e
            });
          });
        }), l(this, "start", function() {
          e._observers = bt(e.parentNodes, De(function(o) {
            e.DS.PubSub.publish("Area:modified:pre", {
              event: o,
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              event: o,
              item: e
            });
          }, 60));
        }), l(this, "reset", function() {
          e._computedStyle = void 0, e._rect = void 0, e._computedBorder = void 0, e._parentNodes = void 0;
        }), l(this, "stop", function() {
          e._observers.cleanup(), e.reset();
        }), l(this, "scroll", function(o, h) {
          var y = {
            scroll_directions: o,
            scroll_multiplier: h
          };
          e.DS.PubSub.publish("Area:scroll:pre", y), hn(e._node, o, h), e.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(o) {
          var h = o.settings;
          e.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return m(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = Qs(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.HTMLNode);
        }
      }]), c;
    }(), gn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          e._dragKeys = {
            up: e.DS.stores.SettingsStore.s.dragKeys.up.map(function(o) {
              return o.toLowerCase();
            }),
            down: e.DS.stores.SettingsStore.s.dragKeys.down.map(function(o) {
              return o.toLowerCase();
            }),
            left: e.DS.stores.SettingsStore.s.dragKeys.left.map(function(o) {
              return o.toLowerCase();
            }),
            right: e.DS.stores.SettingsStore.s.dragKeys.right.map(function(o) {
              return o.toLowerCase();
            })
          }, e._dragKeysFlat = [].concat(k(e._dragKeys.up), k(e._dragKeys.down), k(e._dragKeys.left), k(e._dragKeys.right));
        }), l(this, "keyboardDrag", function(o) {
          var h = o.event, y = o.key, w = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(w) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var D = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], D), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var B = an({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: w,
              scrollCallback: e.DS.Area.scroll,
              scrollDiff: e._scrollDiff,
              canScroll: e.DS.stores.ScrollStore.canScroll,
              dragKeys: e._dragKeys
            });
            e.DS.stores.SettingsStore.s.dragAsBlock && (B = e.limitDirection(B)), e._elements.forEach(function(W) {
              return Lr({
                element: W,
                posDirection: B,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), l(this, "keyboardEnd", function(o) {
          var h = o.event, y = o.key, w = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(w) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: h,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), l(this, "start", function(o) {
          var h = o.isDragging, y = o.isDraggingKeyboard;
          !h || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Tr(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), l(this, "stop", function(o) {
          o != null && o.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), l(this, "update", function(o) {
          var h = o.isDragging, y = o.isDraggingKeyboard;
          if (!(!h || !e._elements.length || y || e.DS.continue)) {
            var w = $(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (w = e.limitDirection(w)), e._elements.forEach(function(D) {
              return Lr({
                element: D,
                posDirection: w,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(o) {
          var h = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, w = {
            top: h.top - e._selectionRect.top + y.y,
            left: h.left - e._selectionRect.left + y.x,
            bottom: h.bottom - e._selectionRect.bottom + y.y,
            right: h.right - e._selectionRect.right + y.x
          };
          return o.x === 0 && o.y === 0 || (o.y < 0 && (o.y = Math.max(o.y, w.top)), o.x < 0 && (o.x = Math.max(o.x, w.left)), o.y > 0 && (o.y = Math.min(o.y, w.bottom)), o.x > 0 && (o.x = Math.min(o.x, w.right)), e._selectionRect.top += o.y, e._selectionRect.bottom += o.y, e._selectionRect.left += o.x, e._selectionRect.right += o.x), o;
        }), l(this, "handleZIndex", function(o) {
          e._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + o ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var e = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? $(e, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = e, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var e = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? $(e, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = e, g;
        }
      }]), c;
    }(), mn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS, o = u.id, h = u.element, y = u.droppables;
        i(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(w) {
          if (!e.isDestroyed) {
            var D = e.droppables.filter(function(B) {
              return e.DS.SelectedSet.has(B);
            });
            D.length && (D.forEach(function(B) {
              B.classList[w]("".concat(e.Settings.droppableClass)), B.classList[w]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[w]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var w;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(e.Settings.droppedTargetClass), D.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(D) {
            return !e.DS.SelectedSet.has(D);
          }), (w = e._itemsDropped) !== null && w !== void 0 && w.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var w, D, B;
          e.isDestroyed || (e._itemsDropped = k(new Set([].concat(k(e._itemsDropped), k((w = e.droppables) === null || w === void 0 ? void 0 : w.filter(function(W) {
            return e.DS.SelectedSet.has(W);
          }))))), (D = e._itemsDropped) === null || D === void 0 || D.forEach(function(W) {
            W.classList.add("".concat(e.Settings.droppedTargetClass)), W.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (B = e._itemsDropped) !== null && B !== void 0 && B.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var w = !1;
          e.droppables.forEach(function(D) {
            e.itemsInside.includes(D) ? (D.classList.add("".concat(e.Settings.droppedInsideClass)), D.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), w = !0) : (D.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), D.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), w ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), l(this, "start", function(w) {
          var D = w.isDragging;
          !D || e.isDestroyed || e.setReadyClasses("add");
        }), l(this, "stop", function(w) {
          var D = w.isDragging;
          !D || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = o, this.element = h, y && (this.droppables = Nt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(w) {
          var D = w.settings;
          e.element && (e.element.classList.remove(D["dropZoneClass:pre"]), e.element.classList.add(D.dropZoneClass));
        }), this._observers = bt(this.parentNodes, De(function() {
          return e._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "destroy",
        value: function() {
          var e = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(e.Settings.droppedTargetClass)), g.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id)), g.classList.remove("".concat(e.Settings.droppableClass)), g.classList.remove("".concat(e.Settings.droppableClass, "-").concat(e.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var e = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return Gt(e.DS.SelectableSet.rects.get(g), e.rect, e.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return e._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(e) {
          this._droppables = e;
        }
      }]), c;
    }(), vn = /* @__PURE__ */ m(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(o) {
          var h = o.dropZones;
          h && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = h.map(function(y) {
            return new mn(a({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(w) {
              var D = e._zonesByDroppable.get(w);
              if (!(D != null && D.length))
                return e._zonesByDroppable.set(w, [y]);
              e._zonesByDroppable.set(w, k(new Set([].concat(k(D), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(o) {
          e._zones.forEach(function(h) {
            h !== o && h.handleNoDrop();
          }), o && o.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(o, h) {
          for (var y = h.x, w = h.y, D = 0, B = o.length; D < B; D++) {
            var W = e._zoneByElement.get(o[D]);
            if (W && Gt(W.rect, {
              left: y,
              right: y,
              top: w,
              bottom: w
            }, Math.min(e.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(o) {
          var h = o.isDragging;
          if (h) {
            var y = e.getTarget();
            e._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(o) {
          var h = e._zoneById.get(o);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(o, ")"));
        }), l(this, "getItemsInsideById", function(o, h) {
          var y = e._zoneById.get(o);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(o, ")"));
          var w = y.itemsInside;
          return h && y.handleItemsInsideClasses(), w;
        }), l(this, "getTarget", function(o) {
          var h;
          if ((h = e._zones) !== null && h !== void 0 && h.length) {
            var y = (o == null ? void 0 : o.x) || e.DS.stores.PointerStore.currentVal.x, w = (o == null ? void 0 : o.y) || e.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, w);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              D,
              {
                x: y,
                y: w
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(o) {
          var h = o.settings;
          return e.setDropZones(h);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), bn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return e.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          e.stop(), e.Settings.usePointerEvents ? e.DS.Area.HTMLNode.addEventListener("pointerdown", e.start, {
            passive: !1
          }) : e.DS.Area.HTMLNode.addEventListener("mousedown", e.start), e.DS.Area.HTMLNode.addEventListener("touchstart", e.start, {
            passive: !1
          }), e.DS.publish("Interaction:init", {});
        }), l(this, "start", function(o) {
          return e.DS.publish("Interaction:start:pre", {
            event: o,
            isDragging: e.isDragging
          });
        }), l(this, "_start", function(o) {
          o.type === "touchstart" && o.preventDefault(), e._canInteract(o) && (e.isInteracting = !0, e.isDragging = e.isDragEvent(o), e.DS.publish("Interaction:start", {
            event: o,
            isDragging: e.isDragging
          }), e.Settings.usePointerEvents ? (document.addEventListener("pointerup", e.reset), document.addEventListener("pointercancel", e.reset)) : document.addEventListener("mouseup", e.reset), document.addEventListener("touchend", e.reset));
        }), l(this, "isDragEvent", function(o) {
          var h = (
            /** @type {Element} */
            o.target.closest(".".concat(e.Settings.selectableClass))
          );
          return !e.Settings.draggability || e.DS.stores.KeyStore.isMultiSelectKeyPressed(o) || !h ? !1 : (e.Settings.immediateDrag && (e.DS.SelectedSet.size ? e.DS.SelectedSet.has(h) || (e.DS.SelectedSet.clear(), e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!e.DS.SelectedSet.has(h));
        }), l(this, "onClick", function(o) {
          var h = o.event;
          if (e._canInteract(h) && !(h.detail > 0)) {
            var y = e.DS, w = y.stores, D = w.PointerStore, B = w.KeyStore, W = y.SelectableSet, it = y.SelectedSet;
            D.start(h);
            var wt = (
              /** @type {any} */
              h.target
            );
            W.has(wt) && (B.isMultiSelectKeyPressed(h) || it.clear(), it.toggle(wt), e.reset());
          }
        }), l(this, "stop", function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.DS.Area.HTMLNode;
          e.isInteracting = !1, e.isDragging = !1, e.Settings.usePointerEvents ? (o.removeEventListener("pointerdown", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", e.reset), document.removeEventListener("pointercancel", e.reset)) : (o.removeEventListener("mousedown", e.start), document.removeEventListener("mouseup", e.reset)), o.removeEventListener("touchstart", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", e.reset);
        }), l(this, "update", function(o) {
          var h = o.event, y = o.scroll_directions, w = o.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: w,
            isDragging: e.isDragging
          });
        }), l(this, "reset", function(o) {
          return e.DS.publish("Interaction:end:pre", {
            event: o,
            isDragging: e.isDragging
          });
        }), l(this, "_reset", function(o) {
          var h = e.isDragging;
          e.stop(), e.init(), e.DS.publish("Interaction:end", {
            event: o,
            isDragging: h
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(o) {
          var h = o.settings;
          e.stop(h["area:pre"]), e.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(o) {
          var h = o.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(o) {
          var h = o.event;
          return e._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(o) {
          var h = o.event;
          return e._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return m(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(e) {
            var g = (
              /** @type {MouseEvent} */
              e.clientX === 0 && /** @type {MouseEvent} */
              e.clientY === 0 && /** @type {MouseEvent} */
              e.detail === 0 && e.target
            );
            return (
              /** @type {MouseEvent} */
              !(e.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              e.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                e.target
              ) || // fix outside elements issue
              !g && !this.DS.SelectorArea.isClicked(e))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), yn = /* @__PURE__ */ m(
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(o, h) {
          return Array.isArray(e.subscribers[o]) || (e.subscribers[o] = []), e.subscribers[o].push(h), e.subscribers[o].length - 1;
        }), l(this, "unsubscribe", function(o, h, y) {
          y >= 0 ? e.subscribers[o].splice(y, 1) : h && (e.subscribers[o] = e.subscribers[o].filter(function(w) {
            return w !== h;
          }));
        }), l(this, "publish", function(o, h) {
          Array.isArray(o) ? o.forEach(function(y) {
            return e._publish(y, h);
          }) : e._publish(o, h);
        }), l(this, "_publish", function(o, h) {
          var y = e.subscribers[o];
          Array.isArray(y) && (o.includes(":pre") ? e._handlePrePublish(y, h) : e._handlePublish(y, h));
        }), l(this, "_handlePublish", function(o, h) {
          for (var y = 0, w = o.length; y < w; y++) {
            if (e.DS.stopped)
              return;
            o[y](h);
          }
        }), l(this, "_handlePrePublish", function(o, h) {
          for (var y = o.length; y--; ) {
            if (e.DS.stopped)
              return;
            o[y](h);
          }
        }), this.DS = g;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), Sn = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = z(e);
      function e(g) {
        var o, h = g.DS;
        return i(this, e), o = u.call(this), l(M(o), "_rects", void 0), l(M(o), "_timeout", void 0), l(M(o), "init", function() {
          return Nt(o.Settings.selectables).forEach(function(y) {
            return o.add(y);
          });
        }), l(M(o), "clear", function() {
          return o.forEach(function(y) {
            return o.delete(y);
          });
        }), l(M(o), "_onClick", function(y) {
          return o.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(M(o), "_onPointer", function(y) {
          return o.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(M(o), "addAll", function(y) {
          return y.forEach(function(w) {
            return o.add(w);
          });
        }), l(M(o), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return o.delete(w);
          });
        }), l(M(o), "getRect", function(y) {
          return o._rects ? o.rects.get(y) : y.getBoundingClientRect();
        }), o.DS = h, o.Settings = h.stores.SettingsStore.s, o.DS.subscribe("Interaction:init", o.init), o.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          o.clear(), o.init();
        }), o.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var w = y.settings;
          o.forEach(function(D) {
            D.classList.remove(w["selectableClass:pre"]), D.classList.add(w.selectableClass);
          });
        }), o;
      }
      return m(e, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(o) {
            if (V(f(e.prototype), "has", this).call(this, o))
              return this;
            var h = {
              items: this.elements,
              item: o
            };
            return this.DS.publish("Selectable:added:pre", h), o.classList.add(this.Settings.selectableClass), o.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? o.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : o.addEventListener("mousedown", this._onPointer), o.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && $r({
              computedStyle: window.getComputedStyle(o),
              node: o
            }), V(f(e.prototype), "add", this).call(this, o), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(o) {
          if (!V(f(e.prototype), "has", this).call(this, o))
            return !0;
          var h = {
            items: this.elements,
            item: o
          };
          return this.DS.publish("Selectable:removed:pre", h), o.classList.remove(this.Settings.selectableClass), o.classList.remove(this.Settings.hoverClass), o.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? o.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : o.removeEventListener("mousedown", this._onPointer), o.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), V(f(e.prototype), "delete", this).call(this, o), this.DS.publish("Selectable:removed", h), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var o = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return o._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return o._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), e;
    }(/* @__PURE__ */ I(Set)), wn = /* @__PURE__ */ function(c) {
      v(e, c);
      var u = z(e);
      function e(g) {
        var o, h = g.DS;
        return i(this, e), o = u.call(this), l(M(o), "clear", function() {
          return o.forEach(function(y) {
            return o.delete(y);
          });
        }), l(M(o), "addAll", function(y) {
          return y.forEach(function(w) {
            return o.add(w);
          });
        }), l(M(o), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return o.delete(w);
          });
        }), o.DS = h, o;
      }
      return m(e, [{
        key: "add",
        value: function(o) {
          if (V(f(e.prototype), "has", this).call(this, o))
            return this;
          var h = {
            items: this.elements,
            item: o
          };
          return this.DS.publish("Selected:added:pre", h), V(f(e.prototype), "add", this).call(this, o), o.classList.add(this.DS.stores.SettingsStore.s.selectedClass), o.style.zIndex = "".concat((parseInt(o.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(o) {
          if (!V(f(e.prototype), "has", this).call(this, o))
            return !0;
          var h = {
            items: this.elements,
            item: o
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = V(f(e.prototype), "delete", this).call(this, o);
          return o.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), o.style.zIndex = "".concat((parseInt(o.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(o) {
            return this.has(o) ? this.delete(o) : this.add(o), o;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), e;
    }(/* @__PURE__ */ I(Set)), _n = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(o) {
          var h = o.event, y = o.isDragging;
          y || (e._storePrevious(h), e._handleInsideSelection(!0, h));
        }), l(this, "update", function(o) {
          var h = o.isDragging;
          h || e.DS.continue || e._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(o, h) {
          var y = e.DS, w = y.SelectableSet, D = y.SelectorArea, B = y.Selector, W = e.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && e.Settings.multiSelectToggling, it = e.Settings.selectionThreshold, wt = w.rects, _t = B.rect, Ct = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), mt = gt(wt), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Ee = X(ce.value, 2), ue = Ee[0], Me = Ee[1];
              D.isInside(ue, Me) && (Gt(Me, _t, it) ? Ct.set(ue, Me) : ot.set(ue, Me));
            }
          } catch (Xe) {
            mt.e(Xe);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Nr = e.filterSelected({
              select: Ct,
              unselect: ot,
              selectorRect: _t
            }), Tn = Nr.select, In = Nr.unselect;
            Tn.forEach(function(Xe, Ze) {
              return ln({
                element: Ze,
                force: o,
                multiSelectionToggle: W,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), In.forEach(function(Xe, Ze) {
              return cn({
                element: Ze,
                force: o,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass,
                PrevSelectedSet: e._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(o) {
          var h = o.select, y = o.unselect;
          return o.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(e) {
          var g = this.DS, o = g.stores.KeyStore, h = g.SelectedSet;
          o.isMultiSelectKeyPressed(e) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), xn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var o, h;
          e.HTMLNode && (o = e.DS.SelectorArea) !== null && o !== void 0 && o.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ye(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (h = e.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), l(this, "start", function(o) {
          var h = o.isDragging;
          if (!h) {
            var y = e.DS.stores.PointerStore, w = y.initialValArea;
            Or(e.HTMLNode, U(w, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), l(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), l(this, "update", function(o) {
          var h = o.isDragging;
          if (!(h || e.DS.continue)) {
            var y = e.DS.stores, w = y.ScrollStore, D = y.PointerStore, B = en({
              scrollAmount: w.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Or(e.HTMLNode, B), e._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(o) {
          var h = o.settings;
          e.HTMLNode.classList.remove(h["selectorClass:pre"]), e.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), kn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), l(this, "applyElements", function() {
          var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(o, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[h][y](e.HTMLNode);
        }), l(this, "updatePos", function() {
          e._rect = null;
          var o = e.DS.Area.rect, h = e.DS.Area.computedBorder, y = e.HTMLNode.style, w = "".concat(o.top + h.top, "px"), D = "".concat(o.left + h.left, "px"), B = "".concat(o.width, "px"), W = "".concat(o.height, "px");
          y.top !== w && (y.top = w), y.left !== D && (y.left = D), y.width !== B && (y.width = B), y.height !== W && (y.height = W);
        }), l(this, "stop", function(o) {
          e.stopAutoScroll(), o && e.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          e.currentEdges = [], e._scrollInterval = setInterval(function() {
            return e.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!e.DS.continue) {
            var o = e.DS, h = o.stores.PointerStore, y = o.Area;
            e.currentEdges = Ir({
              elementRect: U(h.currentVal),
              containerRect: e.rect,
              tolerance: e.DS.stores.SettingsStore.s.overflowTolerance
            }), e.currentEdges.length && y.scroll(e.currentEdges, e.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          e.currentEdges = [], clearInterval(e._scrollInterval);
        }), l(this, "isInside", function(o, h) {
          return e.DS.Area.HTMLNode.contains(o) && e.DS.stores.ScrollStore.canScroll ? !0 : Gt(e.rect, h || o.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = ke(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(o) {
          var h = o.settings;
          e.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), e.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          e.updatePos(), e.stopAutoScroll();
        });
      }
      return m(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(e) {
            var g = this.DS.stores.PointerStore, o = e ? g.getPointerPosition(e) : g.initialVal;
            return Gt({
              left: o.x,
              top: o.y,
              right: o.x,
              bottom: o.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Dn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", e.keydown), document.addEventListener("keyup", e.keyup), window.addEventListener("blur", e.reset);
        }), l(this, "keydown", function(o) {
          var h = o.key.toLowerCase();
          e.DS.publish("KeyStore:down:pre", {
            event: o,
            key: h
          }), e._currentValues.add(h), e.DS.publish("KeyStore:down", {
            event: o,
            key: h
          });
        }), l(this, "keyup", function(o) {
          var h = o.key.toLowerCase();
          e.DS.publish("KeyStore:up:pre", {
            event: o,
            key: h
          }), e._currentValues.delete(h), e.DS.publish("KeyStore:up", {
            event: o,
            key: h
          });
        }), l(this, "stop", function() {
          document.removeEventListener("keydown", e.keydown), document.removeEventListener("keyup", e.reset), window.removeEventListener("blur", e.reset), e.reset();
        }), l(this, "reset", function() {
          return e._currentValues.clear();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return m(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(e) {
            var g = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var o = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return o.includes(h.toLocaleLowerCase());
            }) || e && o.some(function(h) {
              return e[g._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), Cn = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(o) {
          return tn({
            event: e._normalizedEvent(o)
          });
        }), l(this, "update", function(o) {
          o && (e.DS.publish("PointerStore:updated:pre", {
            event: o
          }), e.currentVal = e.getPointerPosition(o), e._isMouseInteraction && e.DS.publish("PointerStore:updated", {
            event: o
          }));
        }), l(this, "stop", function() {
          e.Settings.usePointerEvents ? document.removeEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", e.update), document.removeEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return e._isMouseInteraction = !1;
          }, 100);
        }), l(this, "reset", function(o) {
          o && (e.currentVal = e.lastVal = e.getPointerPosition(o), e.stop(), e.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(o) {
          var h = o.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:end", function(o) {
          var h = o.event;
          return e.reset(h);
        });
      }
      return m(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(e) {
            e && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(e));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(e) {
            return "touches" in e && e.type !== "touchend" && (this._lastTouch = e), "touches" in e ? this._lastTouch.touches[0] : e;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._initialVal = e, this._initialValArea = e && $(e, "-", $(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._currentVal = e, this._currentValArea = e && $(e, "-", $(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._lastVal = e, this._lastValArea = e && $(e, "-", $(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), En = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        i(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "start", function() {
          e._currentVal = e._initialVal = Ce(e.DS.stores.SettingsStore.s.area), e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "update", function() {
          return e._currentVal = Ce(e.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          e.DS.stores.SettingsStore.s.area.removeEventListener("scroll", e.update), e._initialVal = {
            x: 0,
            y: 0
          }, e._canScroll = null;
        }), l(this, "reset", function() {
          e.stop(), e.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return e.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return e.reset();
        });
      }
      return m(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xe(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var e = $(this.currentVal, "-", this.initialVal), g = St(this.DS.stores.SettingsStore.s.zoom), o = $($(e, "*", g), "-", e);
          return {
            x: e.x + o.x,
            y: e.y + o.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Ce(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), Mn = /* @__PURE__ */ m(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(u) {
        var e = this, g = u.DS, o = u.settings;
        i(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(h) {
          var y = h.settings, w = h.init;
          return e.DS.publish("Settings:updated:pre", a({
            settings: y
          }, w ? {
            init: w
          } : {}));
        }), l(this, "_update", function(h) {
          for (var y = h.settings, w = h.init, D = un(y, w), B = function() {
            var _t, Ct = X(it[W], 2), ot = Ct[0], mt = Ct[1];
            ot in e._settings || Object.defineProperty(e.s, ot, {
              get: function() {
                return e._settings[ot];
              },
              set: function(ue) {
                return e.update({
                  settings: l({}, ot, ue)
                });
              }
            }), e._settings["".concat(ot, ":pre")] = e._settings[ot], e._settings[ot] = mt;
            var ce = {
              settings: (_t = {}, l(_t, ot, e._settings[ot]), l(_t, "".concat(ot, ":pre"), e._settings["".concat(ot, ":pre")]), _t)
            };
            e.DS.publish("Settings:updated", ce), e.DS.publish("Settings:updated:".concat(ot), ce);
          }, W = 0, it = Object.entries(D); W < it.length; W++)
            B();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: o,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Pr = /* @__PURE__ */ function() {
      function c(u) {
        var e = this;
        i(this, c), l(this, "continue", !1), l(this, "start", function() {
          e.stopped = !1, e.Interaction.init();
        }), l(this, "break", function() {
          return e.continue = !0;
        }), l(this, "setSettings", function(g) {
          return e.stores.SettingsStore.update({
            settings: g
          });
        }), l(this, "getSelection", function() {
          return e.SelectedSet.elements;
        }), l(this, "getSelectables", function() {
          return e.SelectableSet.elements;
        }), l(this, "getInitialCursorPosition", function() {
          return e.stores.PointerStore.initialVal;
        }), l(this, "getCurrentCursorPosition", function() {
          return e.stores.PointerStore.currentVal;
        }), l(this, "getPreviousCursorPosition", function() {
          return e.stores.PointerStore.lastVal;
        }), l(this, "getInitialCursorPositionArea", function() {
          return e.stores.PointerStore.initialValArea;
        }), l(this, "getCurrentCursorPositionArea", function() {
          return e.stores.PointerStore.currentValArea;
        }), l(this, "getPreviousCursorPositionArea", function() {
          return e.stores.PointerStore.lastValArea;
        }), l(this, "isMultiSelect", function(g) {
          return e.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), l(this, "isDragging", function() {
          return e.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(g) {
          var o;
          return (o = e.DropZones.getTarget(g)) === null || o === void 0 ? void 0 : o.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return e.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, o) {
          return e.DropZones.getItemsInsideById(g, o);
        }), this.PubSub = new yn({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new Mn({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Cn({
          DS: this
        }), this.stores.ScrollStore = new En({
          DS: this
        }), this.stores.KeyStore = new Dn({
          DS: this
        }), this.Area = new pn({
          DS: this
        }), this.Selector = new xn({
          DS: this
        }), this.SelectorArea = new kn({
          DS: this
        }), this.SelectableSet = new Sn({
          DS: this
        }), this.SelectedSet = new wn({
          DS: this
        }), this.Selection = new _n({
          DS: this
        }), this.Drag = new gn({
          DS: this
        }), this.DropZones = new vn({
          DS: this
        }), this.Interaction = new bn({
          DS: this
        }), fn({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return e.continue = !1;
        }), this.start();
      }
      return m(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            o && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(e), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), e && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Nt(e)), o || this.addSelectables(e), g && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Nt(e)), o && this.removeSelectables(e), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(e) {
          var g = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Nt(e).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(e, o, h) : g.addSelection(e, o, h);
          }), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(e, g, o), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), e && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(e, g, o) {
          var h = Nt(e);
          return this.SelectableSet.addAll(h), g && this.SelectedSet.addAll(h), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(e, g), this.addSelectables(e, o);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(e, g, o) {
          return this.SelectableSet.deleteAll(Nt(e)), g && this.removeSelection(e), o && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Pr.isCollision = Gt, Pr;
  });
})(as);
var po = as.exports;
const go = /* @__PURE__ */ fo(po), ls = (r, t, s, n, a) => (t = Math, s = t.log, n = 1024, a = s(r) / s(n) | 0, r / t.pow(n, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), cs = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), mo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, vo = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), bo = [
  vo
], yo = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, So = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), wo = [
  So
], _o = {
  name: "VFSortIcon"
}, Ie = /* @__PURE__ */ Object.assign(_o, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (_(), E("div", null, [
      r.direction == "down" ? (_(), E("svg", mo, bo)) : Z("", !0),
      r.direction == "up" ? (_(), E("svg", yo, wo)) : Z("", !0)
    ]));
  }
}), xo = ["onClick"], ko = {
  name: "VFToast.vue"
}, Do = /* @__PURE__ */ Object.assign(ko, {
  setup(r) {
    const t = P("emitter"), { getStore: s } = P("storage"), n = L(s("full-screen", !1)), a = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", i = L([]), d = (l) => {
      i.value.splice(l, 1);
    }, m = (l) => {
      let v = i.value.findIndex((f) => f.id === l);
      v !== -1 && d(v);
    };
    return t.on("vf-toast-clear", () => {
      i.value = [];
    }), t.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, i.value.push(l), setTimeout(() => {
        m(v);
      }, 5e3);
    }), (l, v) => (_(), E("div", {
      class: ht([n.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Mt(An, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: q(() => [
          (_(!0), E(lt, null, kt(i.value, (f, b) => (_(), E("div", {
            onClick: (S) => d(b),
            key: f,
            class: ht([a(f.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, C(f.label), 11, xo))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), qt = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Co } = $t(), tr = (r, t) => Co.value + "?" + qt({ q: "preview", adapter: r, path: t }), Ht = typeof window < "u", us = Ht && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ds = Ht && "IntersectionObserver" in window, hs = Ht && "classList" in document.createElement("p"), fs = Ht && window.devicePixelRatio > 1, Eo = {
  elements_selector: ".lazy",
  container: us || Ht ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, ps = (r) => Object.assign({}, Eo, r), Rr = function(r, t) {
  let s;
  const n = "LazyLoad::Initialized", a = new r(t);
  try {
    s = new CustomEvent(n, { detail: { instance: a } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(n, !1, !1, { instance: a });
  }
  window.dispatchEvent(s);
}, Mo = (r, t) => {
  if (t)
    if (!t.length)
      Rr(r, t);
    else
      for (let s = 0, n; n = t[s]; s += 1)
        Rr(r, n);
}, Pt = "src", hr = "srcset", fr = "sizes", gs = "poster", Se = "llOriginalAttrs", ms = "data", pr = "loading", vs = "loaded", bs = "applied", To = "entered", gr = "error", ys = "native", Ss = "data-", ws = "ll-status", ft = (r, t) => r.getAttribute(Ss + t), Io = (r, t, s) => {
  var n = Ss + t;
  if (s === null) {
    r.removeAttribute(n);
    return;
  }
  r.setAttribute(n, s);
}, we = (r) => ft(r, ws), Ft = (r, t) => Io(r, ws, t), Be = (r) => Ft(r, null), mr = (r) => we(r) === null, Ao = (r) => we(r) === pr, $o = (r) => we(r) === gr, vr = (r) => we(r) === ys, Lo = [pr, vs, bs, gr], Oo = (r) => Lo.indexOf(we(r)) >= 0, Ut = (r, t, s, n) => {
  if (r) {
    if (n !== void 0) {
      r(t, s, n);
      return;
    }
    if (s !== void 0) {
      r(t, s);
      return;
    }
    r(t);
  }
}, ie = (r, t) => {
  if (hs) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, Et = (r, t) => {
  if (hs) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Po = (r) => {
  r.llTempImage = document.createElement("IMG");
}, No = (r) => {
  delete r.llTempImage;
}, _s = (r) => r.llTempImage, Ve = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, jo = (r) => {
  r.disconnect();
}, Ro = (r, t, s) => {
  t.unobserve_entered && Ve(r, s);
}, br = (r, t) => {
  r && (r.loadingCount += t);
}, zo = (r) => {
  r && (r.toLoadCount -= 1);
}, xs = (r, t) => {
  r && (r.toLoadCount = t);
}, Bo = (r) => r.loadingCount > 0, Vo = (r) => r.toLoadCount > 0, ks = (r) => {
  let t = [];
  for (let s = 0, n; n = r.children[s]; s += 1)
    n.tagName === "SOURCE" && t.push(n);
  return t;
}, yr = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  ks(s).forEach(t);
}, Ds = (r, t) => {
  ks(r).forEach(t);
}, He = [Pt], Cs = [Pt, gs], ve = [Pt, hr, fr], Es = [ms], Ue = (r) => !!r[Se], Ms = (r) => r[Se], Ts = (r) => delete r[Se], se = (r, t) => {
  if (Ue(r))
    return;
  const s = {};
  t.forEach((n) => {
    s[n] = r.getAttribute(n);
  }), r[Se] = s;
}, Ho = (r) => {
  Ue(r) || (r[Se] = { backgroundImage: r.style.backgroundImage });
}, Uo = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Xt = (r, t) => {
  if (!Ue(r))
    return;
  const s = Ms(r);
  t.forEach((n) => {
    Uo(r, n, s[n]);
  });
}, Ko = (r) => {
  if (!Ue(r))
    return;
  const t = Ms(r);
  r.style.backgroundImage = t.backgroundImage;
}, Is = (r, t, s) => {
  ie(r, t.class_applied), Ft(r, bs), s && (t.unobserve_completed && Ve(r, t), Ut(t.callback_applied, r, s));
}, As = (r, t, s) => {
  ie(r, t.class_loading), Ft(r, pr), s && (br(s, 1), Ut(t.callback_loading, r, s));
}, Vt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, zr = (r, t) => {
  Vt(r, fr, ft(r, t.data_sizes)), Vt(r, hr, ft(r, t.data_srcset)), Vt(r, Pt, ft(r, t.data_src));
}, Yo = (r, t) => {
  yr(r, (s) => {
    se(s, ve), zr(s, t);
  }), se(r, ve), zr(r, t);
}, Wo = (r, t) => {
  se(r, He), Vt(r, Pt, ft(r, t.data_src));
}, Xo = (r, t) => {
  Ds(r, (s) => {
    se(s, He), Vt(s, Pt, ft(s, t.data_src));
  }), se(r, Cs), Vt(r, gs, ft(r, t.data_poster)), Vt(r, Pt, ft(r, t.data_src)), r.load();
}, Zo = (r, t) => {
  se(r, Es), Vt(r, ms, ft(r, t.data_src));
}, qo = (r, t, s) => {
  const n = ft(r, t.data_bg), a = ft(r, t.data_bg_hidpi), i = fs && a ? a : n;
  i && (r.style.backgroundImage = `url("${i}")`, _s(r).setAttribute(Pt, i), As(r, t, s));
}, Fo = (r, t, s) => {
  const n = ft(r, t.data_bg_multi), a = ft(r, t.data_bg_multi_hidpi), i = fs && a ? a : n;
  i && (r.style.backgroundImage = i, Is(r, t, s));
}, Go = (r, t, s) => {
  const n = ft(r, t.data_bg_set);
  if (!n)
    return;
  const a = n.split("|");
  let i = a.map((d) => `image-set(${d})`);
  r.style.backgroundImage = i.join(), r.style.backgroundImage === "" && (i = a.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = i.join()), Is(r, t, s);
}, $s = {
  IMG: Yo,
  IFRAME: Wo,
  VIDEO: Xo,
  OBJECT: Zo
}, Jo = (r, t) => {
  const s = $s[r.tagName];
  s && s(r, t);
}, Qo = (r, t, s) => {
  const n = $s[r.tagName];
  n && (n(r, t), As(r, t, s));
}, ti = ["IMG", "IFRAME", "VIDEO", "OBJECT"], ei = (r) => ti.indexOf(r.tagName) > -1, Ls = (r, t) => {
  t && !Bo(t) && !Vo(t) && Ut(r.callback_finish, t);
}, Br = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, ri = (r, t, s) => {
  r.removeEventListener(t, s);
}, Sr = (r) => !!r.llEvLisnrs, si = (r, t, s) => {
  Sr(r) || (r.llEvLisnrs = {});
  const n = r.tagName === "VIDEO" ? "loadeddata" : "load";
  Br(r, n, t), Br(r, "error", s);
}, er = (r) => {
  if (!Sr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const n = t[s];
    ri(r, s, n);
  }
  delete r.llEvLisnrs;
}, Os = (r, t, s) => {
  No(r), br(s, -1), zo(s), Et(r, t.class_loading), t.unobserve_completed && Ve(r, s);
}, ni = (r, t, s, n) => {
  const a = vr(t);
  Os(t, s, n), ie(t, s.class_loaded), Ft(t, vs), Ut(s.callback_loaded, t, n), a || Ls(s, n);
}, oi = (r, t, s, n) => {
  const a = vr(t);
  Os(t, s, n), ie(t, s.class_error), Ft(t, gr), Ut(s.callback_error, t, n), s.restore_on_error && Xt(t, ve), a || Ls(s, n);
}, wr = (r, t, s) => {
  const n = _s(r) || r;
  if (Sr(n))
    return;
  si(n, (d) => {
    ni(d, r, t, s), er(n);
  }, (d) => {
    oi(d, r, t, s), er(n);
  });
}, ii = (r, t, s) => {
  Po(r), wr(r, t, s), Ho(r), qo(r, t, s), Fo(r, t, s), Go(r, t, s);
}, ai = (r, t, s) => {
  wr(r, t, s), Qo(r, t, s);
}, _r = (r, t, s) => {
  ei(r) ? ai(r, t, s) : ii(r, t, s);
}, li = (r, t, s) => {
  r.setAttribute("loading", "lazy"), wr(r, t, s), Jo(r, t), Ft(r, ys);
}, Vr = (r) => {
  r.removeAttribute(Pt), r.removeAttribute(hr), r.removeAttribute(fr);
}, ci = (r) => {
  yr(r, (t) => {
    Vr(t);
  }), Vr(r);
}, Ps = (r) => {
  yr(r, (t) => {
    Xt(t, ve);
  }), Xt(r, ve);
}, ui = (r) => {
  Ds(r, (t) => {
    Xt(t, He);
  }), Xt(r, Cs), r.load();
}, di = (r) => {
  Xt(r, He);
}, hi = (r) => {
  Xt(r, Es);
}, fi = {
  IMG: Ps,
  IFRAME: di,
  VIDEO: ui,
  OBJECT: hi
}, pi = (r) => {
  const t = fi[r.tagName];
  if (!t) {
    Ko(r);
    return;
  }
  t(r);
}, gi = (r, t) => {
  mr(r) || vr(r) || (Et(r, t.class_entered), Et(r, t.class_exited), Et(r, t.class_applied), Et(r, t.class_loading), Et(r, t.class_loaded), Et(r, t.class_error));
}, mi = (r, t) => {
  pi(r), gi(r, t), Be(r), Ts(r);
}, vi = (r, t, s, n) => {
  s.cancel_on_exit && Ao(r) && r.tagName === "IMG" && (er(r), ci(r), Ps(r), Et(r, s.class_loading), br(n, -1), Be(r), Ut(s.callback_cancel, r, t, n));
}, bi = (r, t, s, n) => {
  const a = Oo(r);
  Ft(r, To), ie(r, s.class_entered), Et(r, s.class_exited), Ro(r, s, n), Ut(s.callback_enter, r, t, n), !a && _r(r, s, n);
}, yi = (r, t, s, n) => {
  mr(r) || (ie(r, s.class_exited), vi(r, t, s, n), Ut(s.callback_exit, r, t, n));
}, Si = ["IMG", "IFRAME", "VIDEO"], Ns = (r) => r.use_native && "loading" in HTMLImageElement.prototype, wi = (r, t, s) => {
  r.forEach((n) => {
    Si.indexOf(n.tagName) !== -1 && li(n, t, s);
  }), xs(s, 0);
}, _i = (r) => r.isIntersecting || r.intersectionRatio > 0, xi = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), ki = (r, t, s) => {
  r.forEach(
    (n) => _i(n) ? bi(n.target, n, t, s) : yi(n.target, n, t, s)
  );
}, Di = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, Ci = (r, t) => {
  jo(r), Di(r, t);
}, Ei = (r, t) => {
  !ds || Ns(r) || (t._observer = new IntersectionObserver((s) => {
    ki(s, r, t);
  }, xi(r)));
}, js = (r) => Array.prototype.slice.call(r), Ne = (r) => r.container.querySelectorAll(r.elements_selector), Mi = (r) => js(r).filter(mr), Ti = (r) => $o(r), Ii = (r) => js(r).filter(Ti), Hr = (r, t) => Mi(r || Ne(t)), Ai = (r, t) => {
  Ii(Ne(r)).forEach((n) => {
    Et(n, r.class_error), Be(n);
  }), t.update();
}, $i = (r, t) => {
  Ht && (t._onlineHandler = () => {
    Ai(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Li = (r) => {
  Ht && window.removeEventListener("online", r._onlineHandler);
}, _e = function(r, t) {
  const s = ps(r);
  this._settings = s, this.loadingCount = 0, Ei(s, this), $i(s, this), this.update(t);
};
_e.prototype = {
  update: function(r) {
    const t = this._settings, s = Hr(r, t);
    if (xs(this, s.length), us || !ds) {
      this.loadAll(s);
      return;
    }
    if (Ns(t)) {
      wi(s, t, this);
      return;
    }
    Ci(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Li(this), Ne(this._settings).forEach((r) => {
      Ts(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Hr(r, t).forEach((n) => {
      Ve(n, this), _r(n, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Ne(r).forEach((t) => {
      mi(t, r);
    });
  }
};
_e.load = (r, t) => {
  const s = ps(t);
  _r(r, s);
};
_e.resetStatus = (r) => {
  Be(r);
};
Ht && Mo(_e, window.lazyLoadOptions);
const Oi = { class: "relative flex-auto flex flex-col overflow-hidden" }, Pi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Ni = { class: "absolute" }, ji = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Ri = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, zi = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Bi = { class: "grid grid-cols-12 items-center" }, Vi = { class: "flex col-span-7 items-center" }, Hi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ui = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ki = [
  Ui
], Yi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Wi = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Xi = [
  Wi
], Zi = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, qi = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Fi = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Gi = { class: "grid grid-cols-12 items-center" }, Ji = { class: "flex col-span-7 items-center" }, Qi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ta = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ea = [
  ta
], ra = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, sa = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), na = [
  sa
], oa = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ia = { class: "col-span-2 text-center" }, aa = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, la = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ca = { class: "relative" }, ua = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, da = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ha = [
  da
], fa = ["data-src", "alt"], pa = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ga = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ma = [
  ga
], va = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, ba = { class: "break-all" }, ya = {
  name: "VFExplorer"
}, Sa = /* @__PURE__ */ Object.assign(ya, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { setStore: n, getStore: a } = P("storage"), i = P("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), m = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), f = L(0), b = L(null), { t: S } = P("i18n"), O = Math.floor(Math.random() * 2 ** 32), T = L(a("full-screen", !1)), I = new _e();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, T.value = !T.value, n("full-screen", T.value);
    });
    const M = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      M.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: A
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let H = null;
    const z = () => {
      H && clearTimeout(H);
    }, j = L(!0), V = (A) => {
      A.touches.length > 1 && (j.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), j.value = !j.value);
    }, X = (A) => {
      H = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(R);
      }, 500);
    }, k = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: A.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: A });
    }, N = Le({ active: !1, column: "", order: "" }), G = (A = !0) => {
      let R = [...t.data.files], $ = N.column, tt = N.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (St, bt) => typeof St == "string" && typeof bt == "string" ? St.toLowerCase().localeCompare(bt.toLowerCase()) : St < bt ? -1 : St > bt ? 1 : 0;
      return N.active && (R = R.slice().sort((St, bt) => U(St[$], bt[$]) * tt)), R;
    }, nt = (A) => {
      N.active && N.column == A ? (N.active = N.order == "asc", N.column = A, N.order = "desc") : (N.active = !0, N.column = A, N.order = "asc");
    }, et = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ct = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(et()));
    }, vt = (A, R) => {
      A.preventDefault();
      let $ = JSON.parse(A.dataTransfer.getData("items"));
      if ($.find((tt) => tt.storage != i.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: $, to: R } });
    }, pt = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find(($) => $ == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Dt(() => {
      b.value = new go({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => ze(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + O));
      })), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          f.value = b.value.getSelection().length, b.value.break();
        else {
          const $ = A.target.offsetWidth - A.offsetX, tt = A.target.offsetHeight - A.offsetY;
          $ < 15 && tt < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: $ }) => {
        s.emit("vf-nodes-selected", et()), f.value = b.value.getSelection().length;
      });
    }), $n(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), I.update();
    }), Dt(() => {
      Re(() => t.view, () => s.emit("vf-explorer-update"));
    }), (A, R) => (_(), E("div", Oi, [
      r.view == "list" || M.value.length ? (_(), E("div", Pi, [
        p("div", {
          onClick: R[0] || (R[0] = ($) => nt("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          st(C(x(S)("Name")) + " ", 1),
          Tt(Mt(Ie, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "basename"]
          ])
        ]),
        M.value.length ? Z("", !0) : (_(), E("div", {
          key: 0,
          onClick: R[1] || (R[1] = ($) => nt("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          st(C(x(S)("Size")) + " ", 1),
          Tt(Mt(Ie, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "file_size"]
          ])
        ])),
        M.value.length ? Z("", !0) : (_(), E("div", {
          key: 1,
          onClick: R[2] || (R[2] = ($) => nt("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          st(C(x(S)("Date")) + " ", 1),
          Tt(Mt(Ie, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "last_modified"]
          ])
        ])),
        M.value.length ? (_(), E("div", {
          key: 2,
          onClick: R[3] || (R[3] = ($) => nt("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          st(C(x(S)("Filepath")) + " ", 1),
          Tt(Mt(Ie, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Te, N.active && N.column == "path"]
          ])
        ])) : Z("", !0)
      ])) : Z("", !0),
      p("div", Ni, [
        p("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          ji,
          p("div", Ri, C(f.value), 1)
        ], 512)
      ]),
      p("div", {
        onTouchstart: V,
        onContextmenu: R[10] || (R[10] = Wt(($) => x(s).emit("vf-contextmenu-show", { event: $, area: l.value, items: et() }), ["self", "prevent"])),
        class: ht([T.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[300px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        M.value.length ? (_(!0), E(lt, { key: 0 }, kt(G(), ($, tt) => (_(), E("div", {
          onDblclick: (U) => k($),
          onTouchstart: R[4] || (R[4] = (U) => X(U)),
          onTouchend: R[5] || (R[5] = (U) => z()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: $ }), ["prevent"]),
          class: ht(["vf-item-" + x(O), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": $.type,
          "data-item": JSON.stringify($),
          "data-index": tt
        }, [
          p("div", Bi, [
            p("div", Vi, [
              $.type == "dir" ? (_(), E("svg", Hi, Ki)) : (_(), E("svg", Yi, Xi)),
              p("span", Zi, C($.basename), 1)
            ]),
            p("div", qi, C($.path), 1)
          ])
        ], 42, zi))), 256)) : Z("", !0),
        r.view == "list" && !M.value.length ? (_(!0), E(lt, { key: 1 }, kt(G(), ($, tt) => (_(), E("div", {
          draggable: "true",
          onDblclick: (U) => k($),
          onTouchstart: R[6] || (R[6] = (U) => X(U)),
          onTouchend: R[7] || (R[7] = (U) => z()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: $ }), ["prevent"]),
          onDragstart: (U) => ct(U),
          onDragover: (U) => pt(U, $),
          onDrop: (U) => vt(U, $),
          class: ht(["vf-item-" + x(O), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": $.type,
          "data-item": JSON.stringify($),
          "data-index": tt
        }, [
          p("div", Gi, [
            p("div", Ji, [
              $.type == "dir" ? (_(), E("svg", Qi, ea)) : (_(), E("svg", ra, na)),
              p("span", oa, C($.basename), 1)
            ]),
            p("div", ia, C($.file_size ? x(ls)($.file_size) : ""), 1),
            p("div", aa, C(x(cs)($.last_modified)), 1)
          ])
        ], 42, Fi))), 256)) : Z("", !0),
        r.view == "grid" && !M.value.length ? (_(!0), E(lt, { key: 2 }, kt(G(!1), ($, tt) => (_(), E("div", {
          draggable: "true",
          onDblclick: (U) => k($),
          onTouchstart: R[8] || (R[8] = (U) => X(U)),
          onTouchend: R[9] || (R[9] = (U) => z()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: $ }), ["prevent"]),
          onDragstart: (U) => ct(U),
          onDragover: (U) => pt(U, $),
          onDrop: (U) => vt(U, $),
          class: ht(["vf-item-" + x(O), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": $.type,
          "data-item": JSON.stringify($),
          "data-index": tt
        }, [
          p("div", null, [
            p("div", ca, [
              $.type == "dir" ? (_(), E("svg", ua, ha)) : ($.mime_type ?? "").startsWith("image") ? (_(), E("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(tr)(x(i).value, $.path),
                alt: $.basename
              }, null, 8, fa)) : (_(), E("svg", pa, ma)),
              !($.mime_type ?? "").startsWith("image") && $.type != "dir" ? (_(), E("div", va, C(d($.extension)), 1)) : Z("", !0)
            ]),
            p("span", ba, C(m($.basename)), 1)
          ])
        ], 42, la))), 256)) : Z("", !0)
      ], 34),
      Mt(Do)
    ]));
  }
}), wa = (r, t = 0, s = !1) => {
  let n;
  return (...a) => {
    s && !n && r(...a), clearTimeout(n), n = setTimeout(() => {
      r(...a);
    }, t);
  };
}, _a = (r, t, s) => {
  const n = L(r);
  return Ln((i, d) => ({
    get() {
      return i(), n.value;
    },
    set: wa(
      (m) => {
        n.value = m, d();
      },
      t,
      s
    )
  }));
}, xa = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, ka = ["aria-label"], Da = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Ca = [
  Da
], Ea = ["aria-label"], Ma = /* @__PURE__ */ p("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ta = [
  Ma
], Ia = ["aria-label"], Aa = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), $a = [
  Aa
], La = ["onClick"], Oa = /* @__PURE__ */ p("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Pa = [
  Oa
], Na = { class: "flex leading-5" }, ja = /* @__PURE__ */ p("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Ra = ["title", "onClick"], za = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ba = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), Va = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Ha = [
  Ba,
  Va
], Ua = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, Ka = /* @__PURE__ */ p("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Ya = /* @__PURE__ */ p("div", { class: "w-full" }, null, -1), Wa = ["onKeydown", "placeholder"], Xa = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Za = [
  Xa
], qa = {
  name: "VFBreadcrumb"
}, Fa = /* @__PURE__ */ Object.assign(qa, {
  props: {
    data: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), a = L(null), i = L([]), d = L(!1), m = L(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let z = [], j = [];
      a.value = t.data.dirname ?? n.value + "://", a.value.length == 0 && (i.value = []), a.value.replace(n.value + "://", "").split("/").forEach(function(V) {
        z.push(V), z.join("/") != "" && j.push({
          basename: V,
          name: V,
          path: n.value + "://" + z.join("/"),
          type: "dir"
        });
      }), j.length > 4 && (j = j.slice(-5), j[0].name = ".."), i.value = j;
    });
    const f = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      f();
    });
    const b = () => {
      d.value = !0, ze(() => m.value.focus());
    }, S = _a("", 400), O = () => v.value;
    Re(S, (z) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: z });
    });
    const T = () => i.value.length && !d.value, I = (z) => {
      z.preventDefault();
      let j = JSON.parse(z.dataTransfer.getData("items"));
      if (j.find((V) => V.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: j, to: i.value[i.value.length - 2] ?? { path: n.value + "://" } }
      });
    }, M = (z) => {
      z.preventDefault(), T() ? z.dataTransfer.dropEffect = "copy" : (z.dataTransfer.dropEffect = "none", z.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && f();
    };
    return (z, j) => (_(), E("div", xa, [
      p("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), E("svg", {
          onDragover: j[0] || (j[0] = (V) => M(V)),
          onDrop: j[1] || (j[1] = (V) => I(V)),
          onClick: j[2] || (j[2] = (V) => {
            var X;
            return !T() || x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((X = i.value[i.value.length - 2]) == null ? void 0 : X.path) ?? x(n) + "://" } });
          }),
          class: ht(["h-6 w-6 p-0.5 rounded", T() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ca, 34))
      ], 8, ka),
      O() ? (_(), E("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), E("svg", {
          onClick: j[4] || (j[4] = (V) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, $a))
      ], 8, Ia)) : (_(), E("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), E("svg", {
          onClick: j[3] || (j[3] = (V) => {
            x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ta))
      ], 8, Ea)),
      d.value ? (_(), E("div", Ua, [
        Ka,
        Ya,
        Tt(p("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: ne(f, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": j[6] || (j[6] = (V) => On(S) ? S.value = V : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, Wa), [
          [oe, x(S)]
        ]),
        (_(), E("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: f,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, Za))
      ])) : (_(), E("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Wt(b, ["self"])
      }, [
        (_(), E("svg", {
          onClick: j[5] || (j[5] = (V) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Pa)),
        p("div", Na, [
          (_(!0), E(lt, null, kt(i.value, (V, X) => (_(), E("div", { key: X }, [
            ja,
            p("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: V.basename,
              onClick: (k) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: V.path } })
            }, C(V.name), 9, Ra)
          ]))), 128))
        ]),
        O() ? (_(), E("svg", za, Ha)) : Z("", !0)
      ], 8, La))
    ]));
  }
}), Ga = ["onClick"], Ja = /* @__PURE__ */ p("span", { class: "px-1" }, null, -1), Qa = {
  name: "VFContextMenu"
}, tl = /* @__PURE__ */ Object.assign(Qa, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), n = L(null), { apiUrl: a } = $t(), i = Le({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = L([]);
    s.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: m } = P("i18n"), l = {
      newfolder: {
        title: () => m("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => m("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => m("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => m("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => m("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => m("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => m("Download"),
        action: () => {
          const S = a.value + "?" + qt({ q: "download", adapter: t.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      },
      archive: {
        title: () => m("Archive"),
        action: () => {
          s.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => m("Unarchive"),
        action: () => {
          s.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => m("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, f = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      f.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: O, items: T, target: I = null }) => {
      if (i.items = [], f.value)
        if (I)
          i.items.push(l.openDir), s.emit("vf-context-selected", [I]);
        else
          return;
      else
        !I && !f.value ? (i.items.push(l.refresh), i.items.push(l.newfolder), s.emit("vf-context-selected", [])) : T.length > 1 && T.some((M) => M.path === I.path) ? (i.items.push(l.refresh), i.items.push(l.archive), i.items.push(l.delete), s.emit("vf-context-selected", T)) : (I.type == "dir" ? i.items.push(l.open) : (i.items.push(l.preview), i.items.push(l.download)), i.items.push(l.rename), I.mime_type == "application/zip" ? i.items.push(l.unarchive) : i.items.push(l.archive), i.items.push(l.delete), s.emit("vf-context-selected", [I]));
      b(S, O);
    }), s.on("vf-contextmenu-hide", () => {
      i.active = !1;
    });
    const b = (S, O) => {
      i.active = !0, ze(() => {
        let T = O.getBoundingClientRect(), I = S.pageX, M = S.pageY, H = n.value.offsetHeight, z = n.value.offsetWidth;
        I = T.right - S.pageX + window.scrollX < z ? I - z : I, M = T.bottom - S.pageY + window.scrollY < H ? M - H : M, i.positions = {
          left: I + "px",
          top: M + "px"
        };
      });
    };
    return (S, O) => i.active ? (_(), E("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: n,
      style: is(i.positions)
    }, [
      (_(!0), E(lt, null, kt(i.items, (T) => (_(), E("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: T.title,
        onClick: (I) => v(T)
      }, [
        Ja,
        p("span", null, C(T.title()), 1)
      ], 8, Ga))), 128))
    ], 4)) : Z("", !0);
  }
}), el = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((n, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function rl(r) {
  const t = await el(/* @__PURE__ */ Object.assign({ "../locales/zh.json": () => import("./zh-ef407788.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function sl(r, t, s) {
  const { getStore: n, setStore: a } = Qe(r), i = L({}), d = (v) => {
    rl(v).then((f) => {
      i.value = f, a("locale", v), a("translations", f), s.emit("vf-toast-push", { label: "已设置语言为 " + v });
    }).catch((f) => {
      s.emit("vf-toast-push", { label: "选中的语言不支持！", type: "error" }), d("zh");
    });
  };
  n("locale") ? i.value = n("translations") : d(t);
  const m = (v, ...f) => f.length ? m(v = v.replace("%s", f.shift()), ...f) : v;
  function l(v, ...f) {
    return i.value.hasOwnProperty(v) ? m(i.value[v], ...f) : m(v, ...f);
  }
  return { t: l, changeLocale: d };
}
const nl = { class: "vuefinder" }, ol = /* @__PURE__ */ p("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), il = {
  name: "VueFinder"
}, al = /* @__PURE__ */ Object.assign(il, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    usePropDarkMode: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(r) {
    const t = r, s = jn(), { setStore: n, getStore: a } = Qe(t.id), i = L(a("adapter"));
    jt("emitter", s), jt("storage", Qe(t.id)), jt("postData", t.postData), jt("adapter", i), jt("maxFileSize", t.maxFileSize), jt("usePropDarkMode", t.usePropDarkMode);
    const d = sl(t.id, t.locale, s);
    jt("i18n", d);
    const { apiUrl: m, setApiUrl: l } = $t();
    l(t.url);
    const v = Le({ adapter: i.value, storages: [], dirname: ".", files: [] }), f = L(a("viewport", "grid")), b = t.usePropDarkMode ? Pn(() => t.dark) : L(localStorage.getItem("theme") === "dark");
    s.on("vf-darkMode-toggle", () => {
      b.value = !b.value, n("darkMode", b.value);
    });
    const S = L(!1);
    jt("loadingState", S);
    const O = L(a("full-screen", !1));
    s.on("vf-fullscreen-toggle", () => {
      O.value = !O.value, n("full-screen", O.value);
    }), s.on("vf-view-toggle", (H) => {
      f.value = H;
    });
    const T = Le({
      active: !1,
      type: "delete",
      data: {}
    });
    s.on("vf-modal-close", () => {
      T.active = !1;
    }), s.on("vf-modal-show", (H) => {
      T.active = !0, T.type = H.type, T.data = H;
    });
    const I = (H) => {
      Object.assign(v, H), s.emit("vf-nodes-selected", {}), s.emit("vf-explorer-update");
    };
    let M;
    return s.on("vf-fetch-abort", () => {
      M.abort(), S.value = !1;
    }), s.on("vf-fetch", ({ params: H, onSuccess: z = null, onError: j = null }) => {
      ["index", "search"].includes(H.q) && (M && M.abort(), S.value = !0), M = new AbortController();
      const V = M.signal;
      Pe(m.value, { params: H, signal: V }).then((X) => {
        i.value = X.adapter, ["index", "search"].includes(H.q) && (S.value = !1), s.emit("vf-modal-close"), I(X), z(X);
      }).catch((X) => {
        j && j(X);
      }).finally(() => {
      });
    }), s.on("vf-download", (H) => {
      document.getElementById("download_frame").src = H, s.emit("vf-modal-close");
    }), Dt(() => {
      s.emit("vf-fetch", { params: { q: "index", adapter: i.value } });
    }), (H, z) => (_(), E("div", nl, [
      p("div", {
        class: ht(x(b) ? "dark" : "")
      }, [
        p("div", {
          class: ht([O.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: is(O.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: z[0] || (z[0] = (j) => x(s).emit("vf-contextmenu-hide")),
          onTouchstart: z[1] || (z[1] = (j) => x(s).emit("vf-contextmenu-hide"))
        }, [
          Mt(uo, { data: v }, null, 8, ["data"]),
          Mt(Fa, { data: v }, null, 8, ["data"]),
          Mt(Sa, {
            view: f.value,
            data: v
          }, null, 8, ["view", "data"])
        ], 38),
        T.active ? (_(), F(Nn("v-f-modal-" + T.type), {
          key: 0,
          selection: T.data,
          current: v
        }, null, 8, ["selection", "current"])) : Z("", !0),
        Mt(tl, { current: v }, null, 8, ["current"]),
        ol
      ], 2)
    ]));
  }
}), ll = /* @__PURE__ */ p("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), cl = { class: "fixed z-10 inset-0 overflow-hidden" }, ul = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, dl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, hl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Lt = {
  __name: "ModalLayout",
  setup(r) {
    const t = P("emitter");
    return Dt(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, n) => (_(), E("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: n[1] || (n[1] = ne((a) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      ll,
      p("div", cl, [
        p("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: n[0] || (n[0] = Wt((a) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          p("div", ul, [
            p("div", dl, [
              Je(s.$slots, "default")
            ]),
            p("div", hl, [
              Je(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, fl = ["aria-label"], pl = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), gl = [
  pl
], ml = {
  name: "Message"
}, Ot = /* @__PURE__ */ Object.assign(ml, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var m;
    const { t: s } = P("i18n"), n = L(!1), a = L(null), i = L((m = a.value) == null ? void 0 : m.strMessage);
    Re(i, () => n.value = !1);
    const d = () => {
      t("hidden"), n.value = !0;
    };
    return (l, v) => (_(), E("div", null, [
      n.value ? Z("", !0) : (_(), E("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ht(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Je(l.$slots, "default"),
        p("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, gl, 8, fl)
      ], 2))
    ]));
  }
}), vl = { class: "sm:flex sm:items-start" }, bl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), yl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Sl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, wl = { class: "mt-2" }, _l = { class: "text-sm text-gray-500" }, xl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, kl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Dl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Cl = [
  Dl
], El = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ml = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Tl = [
  Ml
], Il = { class: "ml-1.5" }, Al = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, $l = {
  name: "VFModalDelete"
}, Ll = /* @__PURE__ */ Object.assign($l, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), i = L(t.selection.items), d = L(""), m = () => {
      i.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: l, type: v }) => ({ path: l, type: v })))
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Yes, Delete!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1),
        p("div", Al, C(x(a)("This action cannot be undone.")), 1)
      ]),
      default: q(() => [
        p("div", vl, [
          bl,
          p("div", yl, [
            p("h3", Sl, C(x(a)("Delete files")), 1),
            p("div", wl, [
              p("p", _l, C(x(a)("Are you sure you want to delete these files?")), 1),
              (_(!0), E(lt, null, kt(i.value, (f) => (_(), E("p", xl, [
                f.type == "dir" ? (_(), E("svg", kl, Cl)) : (_(), E("svg", El, Tl)),
                p("span", Il, C(f.basename), 1)
              ]))), 256)),
              d.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Ol = { class: "sm:flex sm:items-start" }, Pl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), Nl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, jl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Rl = { class: "mt-2" }, zl = { class: "text-sm text-gray-500" }, Bl = {
  name: "VFModalMessage"
}, Vl = /* @__PURE__ */ Object.assign(Bl, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = P("emitter"), { t: s } = P("i18n");
    return (n, a) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: a[0] || (a[0] = (i) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(s)("Close")), 1)
      ]),
      default: q(() => {
        var i, d;
        return [
          p("div", Ol, [
            Pl,
            p("div", Nl, [
              p("h3", jl, C(((i = r.selection) == null ? void 0 : i.title) ?? "Title"), 1),
              p("div", Rl, [
                p("p", zl, C(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), Hl = { class: "sm:flex sm:items-start" }, Ul = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Kl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Yl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Wl = { class: "mt-2" }, Xl = { class: "text-sm text-gray-500" }, Zl = ["onKeyup", "placeholder"], ql = {
  name: "VFModalNewFolder"
}, Fl = /* @__PURE__ */ Object.assign(ql, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), i = L(""), d = L(""), m = () => {
      i.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: n.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", Hl, [
          Ul,
          p("div", Kl, [
            p("h3", Yl, C(x(a)("New Folder")), 1),
            p("div", Wl, [
              p("p", Xl, C(x(a)("Create a new folder")), 1),
              Tt(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
                onKeyup: ne(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, Zl), [
                [oe, i.value]
              ]),
              d.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Gl = { class: "sm:flex sm:items-start" }, Jl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Ql = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, tc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ec = { class: "mt-2" }, rc = { class: "text-sm text-gray-500" }, sc = ["onKeyup", "placeholder"], nc = {
  name: "VFModalNewFile"
}, oc = /* @__PURE__ */ Object.assign(nc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), i = L(""), d = L(""), m = () => {
      i.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: n.value,
          path: t.current.dirname,
          name: i.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is created.", i.value) });
        },
        onError: (l) => {
          d.value = a(l.message);
        }
      });
    };
    return (l, v) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Create")), 1),
        p("button", {
          type: "button",
          onClick: v[2] || (v[2] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", Gl, [
          Jl,
          p("div", Ql, [
            p("h3", tc, C(x(a)("New File")), 1),
            p("div", ec, [
              p("p", rc, C(x(a)("Create a new file")), 1),
              Tt(p("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
                onKeyup: ne(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, sc), [
                [oe, i.value]
              ]),
              d.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: v[1] || (v[1] = (f) => d.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ic = { class: "flex" }, ac = ["aria-label"], lc = { class: "ml-auto mb-2" }, cc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, uc = { key: 1 }, dc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, n = L(""), a = L(""), i = L(null), d = L(!1), { apiUrl: m } = $t(), l = L(""), v = L(!1), { t: f } = P("i18n");
    Dt(() => {
      Pe(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then((T) => {
        n.value = T, t("load");
      });
    });
    const b = () => {
      d.value = !d.value, a.value = n.value, d.value == !0 && ze(() => {
        i.value.focus();
      });
    }, S = P("postData"), O = () => {
      l.value = "", v.value = !1, Pe(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((T) => {
        l.value = f("Updated."), n.value = T, t("load"), d.value = !d.value;
      }).catch((T) => {
        l.value = f(T.message), v.value = !0;
      });
    };
    return (T, I) => (_(), E(lt, null, [
      p("div", ic, [
        p("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, ac),
        p("div", lc, [
          d.value ? (_(), E("button", {
            key: 0,
            onClick: O,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, C(x(f)("Save")), 1)) : Z("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: I[0] || (I[0] = (M) => b())
          }, C(d.value ? x(f)("Cancel") : x(f)("Edit")), 1)
        ])
      ]),
      p("div", null, [
        d.value ? (_(), E("div", uc, [
          Tt(p("textarea", {
            ref_key: "editInput",
            ref: i,
            "onUpdate:modelValue": I[1] || (I[1] = (M) => a.value = M),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [oe, a.value]
          ])
        ])) : (_(), E("pre", cc, C(n.value), 1)),
        l.value.length ? (_(), F(Ot, {
          key: 2,
          onHidden: I[2] || (I[2] = (M) => l.value = ""),
          error: v.value
        }, {
          default: q(() => [
            st(C(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Z("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
function Ur(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), s.push.apply(s, n);
  }
  return s;
}
function Rs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(s), !0).forEach(function(n) {
      pc(r, n, s[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Ur(Object(s)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(s, n));
    });
  }
  return r;
}
function rr(r) {
  "@babel/helpers - typeof";
  return rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rr(r);
}
function hc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var n = t[s];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function fc(r, t, s) {
  return t && Kr(r.prototype, t), s && Kr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function pc(r, t, s) {
  return t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function zs(r) {
  return gc(r) || mc(r) || vc(r) || bc();
}
function gc(r) {
  if (Array.isArray(r))
    return sr(r);
}
function mc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function vc(r, t) {
  if (r) {
    if (typeof r == "string")
      return sr(r, t);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return sr(r, t);
  }
}
function sr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var s = 0, n = new Array(t); s < t; s++)
    n[s] = r[s];
  return n;
}
function bc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ke = typeof window < "u" && typeof window.document < "u", At = Ke ? window : {}, xr = Ke && At.document.documentElement ? "ontouchstart" in At.document.documentElement : !1, kr = Ke ? "PointerEvent" in At : !1, J = "cropper", Dr = "all", Bs = "crop", Vs = "move", Hs = "zoom", Kt = "e", Yt = "w", Jt = "s", Rt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", nr = "".concat(J, "-crop"), Yr = "".concat(J, "-disabled"), dt = "".concat(J, "-hidden"), Wr = "".concat(J, "-hide"), yc = "".concat(J, "-invisible"), je = "".concat(J, "-modal"), or = "".concat(J, "-move"), be = "".concat(J, "Action"), Ae = "".concat(J, "Preview"), Cr = "crop", Us = "move", Ks = "none", ir = "crop", ar = "cropend", lr = "cropmove", cr = "cropstart", Xr = "dblclick", Sc = xr ? "touchstart" : "mousedown", wc = xr ? "touchmove" : "mousemove", _c = xr ? "touchend touchcancel" : "mouseup", Zr = kr ? "pointerdown" : Sc, qr = kr ? "pointermove" : wc, Fr = kr ? "pointerup pointercancel" : _c, Gr = "ready", Jr = "resize", Qr = "wheel", ur = "zoom", ts = "image/jpeg", xc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, kc = /^data:/, Dc = /^data:image\/jpeg;base64,/, Cc = /^img|canvas$/i, Ys = 200, Ws = 100, es = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Cr,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Ys,
  minContainerHeight: Ws,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Ec = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Mc = Number.isNaN || At.isNaN;
function K(r) {
  return typeof r == "number" && !Mc(r);
}
var rs = function(t) {
  return t > 0 && t < 1 / 0;
};
function qe(r) {
  return typeof r > "u";
}
function Zt(r) {
  return rr(r) === "object" && r !== null;
}
var Tc = Object.prototype.hasOwnProperty;
function Qt(r) {
  if (!Zt(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && Tc.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ut(r) {
  return typeof r == "function";
}
var Ic = Array.prototype.slice;
function Xs(r) {
  return Array.from ? Array.from(r) : Ic.call(r);
}
function rt(r, t) {
  return r && ut(t) && (Array.isArray(r) || K(r.length) ? Xs(r).forEach(function(s, n) {
    t.call(r, s, n, r);
  }) : Zt(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
    n[a - 1] = arguments[a];
  return Zt(t) && n.length > 0 && n.forEach(function(i) {
    Zt(i) && Object.keys(i).forEach(function(d) {
      t[d] = i[d];
    });
  }), t;
}, Ac = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Ac.test(r) ? Math.round(r * t) / t : r;
}
var $c = /^width|height|left|top|marginLeft|marginTop$/;
function zt(r, t) {
  var s = r.style;
  rt(t, function(n, a) {
    $c.test(a) && K(n) && (n = "".concat(n, "px")), s[a] = n;
  });
}
function Lc(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(n) {
        at(n, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(t) < 0 && (r.className = "".concat(s, " ").concat(t)) : r.className = t;
  }
}
function It(r, t) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(s) {
        It(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function te(r, t, s) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(n) {
        te(n, t, s);
      });
      return;
    }
    s ? at(r, t) : It(r, t);
  }
}
var Oc = /([a-z\d])([A-Z])/g;
function Er(r) {
  return r.replace(Oc, "$1-$2").toLowerCase();
}
function dr(r, t) {
  return Zt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Er(t)));
}
function ye(r, t, s) {
  Zt(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Er(t)), s);
}
function Pc(r, t) {
  if (Zt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Er(t)));
}
var Zs = /\s\s*/, qs = function() {
  var r = !1;
  if (Ke) {
    var t = !1, s = function() {
    }, n = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(i) {
        t = i;
      }
    });
    At.addEventListener("test", s, n), At.removeEventListener("test", s, n);
  }
  return r;
}();
function xt(r, t, s) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  t.trim().split(Zs).forEach(function(i) {
    if (!qs) {
      var d = r.listeners;
      d && d[i] && d[i][s] && (a = d[i][s], delete d[i][s], Object.keys(d[i]).length === 0 && delete d[i], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(i, a, n);
  });
}
function yt(r, t, s) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = s;
  t.trim().split(Zs).forEach(function(i) {
    if (n.once && !qs) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      a = function() {
        delete m[i][s], r.removeEventListener(i, a, n);
        for (var v = arguments.length, f = new Array(v), b = 0; b < v; b++)
          f[b] = arguments[b];
        s.apply(r, f);
      }, m[i] || (m[i] = {}), m[i][s] && r.removeEventListener(i, m[i][s], n), m[i][s] = a, r.listeners = m;
    }
    r.addEventListener(i, a, n);
  });
}
function re(r, t, s) {
  var n;
  return ut(Event) && ut(CustomEvent) ? n = new CustomEvent(t, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, !0, !0, s)), r.dispatchEvent(n);
}
function Fs(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Fe = At.location, Nc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ss(r) {
  var t = r.match(Nc);
  return t !== null && (t[1] !== Fe.protocol || t[2] !== Fe.hostname || t[3] !== Fe.port);
}
function ns(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function me(r) {
  var t = r.rotate, s = r.scaleX, n = r.scaleY, a = r.translateX, i = r.translateY, d = [];
  K(a) && a !== 0 && d.push("translateX(".concat(a, "px)")), K(i) && i !== 0 && d.push("translateY(".concat(i, "px)")), K(t) && t !== 0 && d.push("rotate(".concat(t, "deg)")), K(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), K(n) && n !== 1 && d.push("scaleY(".concat(n, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function jc(r) {
  var t = Rs({}, r), s = 0;
  return rt(r, function(n, a) {
    delete t[a], rt(t, function(i) {
      var d = Math.abs(n.startX - i.startX), m = Math.abs(n.startY - i.startY), l = Math.abs(n.endX - i.endX), v = Math.abs(n.endY - i.endY), f = Math.sqrt(d * d + m * m), b = Math.sqrt(l * l + v * v), S = (b - f) / f;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function $e(r, t) {
  var s = r.pageX, n = r.pageY, a = {
    endX: s,
    endY: n
  };
  return t ? a : Rs({
    startX: s,
    startY: n
  }, a);
}
function Rc(r) {
  var t = 0, s = 0, n = 0;
  return rt(r, function(a) {
    var i = a.startX, d = a.startY;
    t += i, s += d, n += 1;
  }), t /= n, s /= n, {
    pageX: t,
    pageY: s
  };
}
function Bt(r) {
  var t = r.aspectRatio, s = r.height, n = r.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", i = rs(n), d = rs(s);
  if (i && d) {
    var m = s * t;
    a === "contain" && m > n || a === "cover" && m < n ? s = n / t : n = s * t;
  } else
    i ? s = n / t : d && (n = s * t);
  return {
    width: n,
    height: s
  };
}
function zc(r) {
  var t = r.width, s = r.height, n = r.degree;
  if (n = Math.abs(n) % 180, n === 90)
    return {
      width: s,
      height: t
    };
  var a = n % 90 * Math.PI / 180, i = Math.sin(a), d = Math.cos(a), m = t * d + s * i, l = t * i + s * d;
  return n > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function Bc(r, t, s, n) {
  var a = t.aspectRatio, i = t.naturalWidth, d = t.naturalHeight, m = t.rotate, l = m === void 0 ? 0 : m, v = t.scaleX, f = v === void 0 ? 1 : v, b = t.scaleY, S = b === void 0 ? 1 : b, O = s.aspectRatio, T = s.naturalWidth, I = s.naturalHeight, M = n.fillColor, H = M === void 0 ? "transparent" : M, z = n.imageSmoothingEnabled, j = z === void 0 ? !0 : z, V = n.imageSmoothingQuality, X = V === void 0 ? "low" : V, k = n.maxWidth, N = k === void 0 ? 1 / 0 : k, G = n.maxHeight, nt = G === void 0 ? 1 / 0 : G, et = n.minWidth, ct = et === void 0 ? 0 : et, vt = n.minHeight, pt = vt === void 0 ? 0 : vt, gt = document.createElement("canvas"), A = gt.getContext("2d"), R = Bt({
    aspectRatio: O,
    width: N,
    height: nt
  }), $ = Bt({
    aspectRatio: O,
    width: ct,
    height: pt
  }, "cover"), tt = Math.min(R.width, Math.max($.width, T)), U = Math.min(R.height, Math.max($.height, I)), St = Bt({
    aspectRatio: a,
    width: N,
    height: nt
  }), bt = Bt({
    aspectRatio: a,
    width: ct,
    height: pt
  }, "cover"), xe = Math.min(St.width, Math.max(bt.width, i)), ke = Math.min(St.height, Math.max(bt.height, d)), Ye = [-xe / 2, -ke / 2, xe, ke];
  return gt.width = ee(tt), gt.height = ee(U), A.fillStyle = H, A.fillRect(0, 0, tt, U), A.save(), A.translate(tt / 2, U / 2), A.rotate(l * Math.PI / 180), A.scale(f, S), A.imageSmoothingEnabled = j, A.imageSmoothingQuality = X, A.drawImage.apply(A, [r].concat(zs(Ye.map(function(De) {
    return Math.floor(ee(De));
  })))), A.restore(), gt;
}
var Gs = String.fromCharCode;
function Vc(r, t, s) {
  var n = "";
  s += t;
  for (var a = t; a < s; a += 1)
    n += Gs(r.getUint8(a));
  return n;
}
var Hc = /^data:.*,/;
function Uc(r) {
  var t = r.replace(Hc, ""), s = atob(t), n = new ArrayBuffer(s.length), a = new Uint8Array(n);
  return rt(a, function(i, d) {
    a[d] = s.charCodeAt(d);
  }), n;
}
function Kc(r, t) {
  for (var s = [], n = 8192, a = new Uint8Array(r); a.length > 0; )
    s.push(Gs.apply(null, Xs(a.subarray(0, n)))), a = a.subarray(n);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function Yc(r) {
  var t = new DataView(r), s;
  try {
    var n, a, i;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var d = t.byteLength, m = 2; m + 1 < d; ) {
        if (t.getUint8(m) === 255 && t.getUint8(m + 1) === 225) {
          a = m;
          break;
        }
        m += 1;
      }
    if (a) {
      var l = a + 4, v = a + 10;
      if (Vc(t, l, 4) === "Exif") {
        var f = t.getUint16(v);
        if (n = f === 18761, (n || f === 19789) && t.getUint16(v + 2, n) === 42) {
          var b = t.getUint32(v + 4, n);
          b >= 8 && (i = v + b);
        }
      }
    }
    if (i) {
      var S = t.getUint16(i, n), O, T;
      for (T = 0; T < S; T += 1)
        if (O = i + T * 12 + 2, t.getUint16(O, n) === 274) {
          O += 8, s = t.getUint16(O, n), t.setUint16(O, 1, n);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function Wc(r) {
  var t = 0, s = 1, n = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      n = -1;
      break;
    case 5:
      t = 90, n = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, s = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: s,
    scaleY: n
  };
}
var Xc = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, n = this.container, a = this.cropper, i = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    at(a, dt), It(t, dt);
    var m = {
      width: Math.max(n.offsetWidth, i >= 0 ? i : Ys),
      height: Math.max(n.offsetHeight, d >= 0 ? d : Ws)
    };
    this.containerData = m, zt(a, {
      width: m.width,
      height: m.height
    }), at(t, dt), It(a, dt);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, n = this.options.viewMode, a = Math.abs(s.rotate) % 180 === 90, i = a ? s.naturalHeight : s.naturalWidth, d = a ? s.naturalWidth : s.naturalHeight, m = i / d, l = t.width, v = t.height;
    t.height * m > t.width ? n === 3 ? l = t.height * m : v = t.width / m : n === 3 ? v = t.width / m : l = t.height * m;
    var f = {
      aspectRatio: m,
      naturalWidth: i,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = f, this.limited = n === 1 || n === 2, this.limitCanvas(!0, !0), f.width = Math.min(Math.max(f.width, f.minWidth), f.maxWidth), f.height = Math.min(Math.max(f.height, f.minHeight), f.maxHeight), f.left = (t.width - f.width) / 2, f.top = (t.height - f.height) / 2, f.oldLeft = f.left, f.oldTop = f.top, this.initialCanvasData = Q({}, f);
  },
  limitCanvas: function(t, s) {
    var n = this.options, a = this.containerData, i = this.canvasData, d = this.cropBoxData, m = n.viewMode, l = i.aspectRatio, v = this.cropped && d;
    if (t) {
      var f = Number(n.minCanvasWidth) || 0, b = Number(n.minCanvasHeight) || 0;
      m > 1 ? (f = Math.max(f, a.width), b = Math.max(b, a.height), m === 3 && (b * l > f ? f = b * l : b = f / l)) : m > 0 && (f ? f = Math.max(f, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (f = d.width, b = d.height, b * l > f ? f = b * l : b = f / l));
      var S = Bt({
        aspectRatio: l,
        width: f,
        height: b
      });
      f = S.width, b = S.height, i.minWidth = f, i.minHeight = b, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (v ? 0 : 1)) {
        var O = a.width - i.width, T = a.height - i.height;
        i.minLeft = Math.min(0, O), i.minTop = Math.min(0, T), i.maxLeft = Math.max(0, O), i.maxTop = Math.max(0, T), v && this.limited && (i.minLeft = Math.min(d.left, d.left + (d.width - i.width)), i.minTop = Math.min(d.top, d.top + (d.height - i.height)), i.maxLeft = d.left, i.maxTop = d.top, m === 2 && (i.width >= a.width && (i.minLeft = Math.min(0, O), i.maxLeft = Math.max(0, O)), i.height >= a.height && (i.minTop = Math.min(0, T), i.maxTop = Math.max(0, T))));
      } else
        i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = a.width, i.maxTop = a.height;
  },
  renderCanvas: function(t, s) {
    var n = this.canvasData, a = this.imageData;
    if (s) {
      var i = zc({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), d = i.width, m = i.height, l = n.width * (d / n.naturalWidth), v = n.height * (m / n.naturalHeight);
      n.left -= (l - n.width) / 2, n.top -= (v - n.height) / 2, n.width = l, n.height = v, n.aspectRatio = d / m, n.naturalWidth = d, n.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCanvas(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, zt(this.canvas, Q({
      width: n.width,
      height: n.height
    }, me({
      translateX: n.left,
      translateY: n.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, n = this.imageData, a = n.naturalWidth * (s.width / s.naturalWidth), i = n.naturalHeight * (s.height / s.naturalHeight);
    Q(n, {
      width: a,
      height: i,
      left: (s.width - a) / 2,
      top: (s.height - i) / 2
    }), zt(this.image, Q({
      width: n.width,
      height: n.height
    }, me(Q({
      translateX: n.left,
      translateY: n.top
    }, n)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, n = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, i = {
      width: s.width,
      height: s.height
    };
    n && (s.height * n > s.width ? i.height = i.width / n : i.width = i.height * n), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * a), i.height = Math.max(i.minHeight, i.height * a), i.left = s.left + (s.width - i.width) / 2, i.top = s.top + (s.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Q({}, i);
  },
  limitCropBox: function(t, s) {
    var n = this.options, a = this.containerData, i = this.canvasData, d = this.cropBoxData, m = this.limited, l = n.aspectRatio;
    if (t) {
      var v = Number(n.minCropBoxWidth) || 0, f = Number(n.minCropBoxHeight) || 0, b = m ? Math.min(a.width, i.width, i.width + i.left, a.width - i.left) : a.width, S = m ? Math.min(a.height, i.height, i.height + i.top, a.height - i.top) : a.height;
      v = Math.min(v, a.width), f = Math.min(f, a.height), l && (v && f ? f * l > v ? f = v / l : v = f * l : v ? f = v / l : f && (v = f * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(f, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, i.left), d.minTop = Math.max(0, i.top), d.maxLeft = Math.min(a.width, i.left + i.width) - d.width, d.maxTop = Math.min(a.height, i.top + i.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = a.width - d.width, d.maxTop = a.height - d.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, n = this.cropBoxData;
    (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCropBox(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, t.movable && t.cropBoxMovable && ye(this.face, be, n.width >= s.width && n.height >= s.height ? Vs : Dr), zt(this.cropBox, Q({
      width: n.width,
      height: n.height
    }, me({
      translateX: n.left,
      translateY: n.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), re(this.element, ir, this.getData());
  }
}, Zc = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, n = this.options.preview, a = s ? this.crossOriginUrl : this.url, i = t.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = a, d.alt = i, this.viewBox.appendChild(d), this.viewBoxImage = d, !!n) {
      var m = n;
      typeof n == "string" ? m = t.ownerDocument.querySelectorAll(n) : n.querySelector && (m = [n]), this.previews = m, rt(m, function(l) {
        var v = document.createElement("img");
        ye(l, Ae, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = a, v.alt = i, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    rt(this.previews, function(t) {
      var s = dr(t, Ae);
      zt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, Pc(t, Ae);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, n = this.cropBoxData, a = n.width, i = n.height, d = t.width, m = t.height, l = n.left - s.left - t.left, v = n.top - s.top - t.top;
    !this.cropped || this.disabled || (zt(this.viewBoxImage, Q({
      width: d,
      height: m
    }, me(Q({
      translateX: -l,
      translateY: -v
    }, t)))), rt(this.previews, function(f) {
      var b = dr(f, Ae), S = b.width, O = b.height, T = S, I = O, M = 1;
      a && (M = S / a, I = i * M), i && I > O && (M = O / i, T = a * M, I = O), zt(f, {
        width: T,
        height: I
      }), zt(f.getElementsByTagName("img")[0], Q({
        width: d * M,
        height: m * M
      }, me(Q({
        translateX: -l * M,
        translateY: -v * M
      }, t))));
    }));
  }
}, qc = {
  bind: function() {
    var t = this.element, s = this.options, n = this.cropper;
    ut(s.cropstart) && yt(t, cr, s.cropstart), ut(s.cropmove) && yt(t, lr, s.cropmove), ut(s.cropend) && yt(t, ar, s.cropend), ut(s.crop) && yt(t, ir, s.crop), ut(s.zoom) && yt(t, ur, s.zoom), yt(n, Zr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && yt(n, Qr, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && yt(n, Xr, this.onDblclick = this.dblclick.bind(this)), yt(t.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), yt(t.ownerDocument, Fr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && yt(window, Jr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, n = this.cropper;
    ut(s.cropstart) && xt(t, cr, s.cropstart), ut(s.cropmove) && xt(t, lr, s.cropmove), ut(s.cropend) && xt(t, ar, s.cropend), ut(s.crop) && xt(t, ir, s.crop), ut(s.zoom) && xt(t, ur, s.zoom), xt(n, Zr, this.onCropStart), s.zoomable && s.zoomOnWheel && xt(n, Qr, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && xt(n, Xr, this.onDblclick), xt(t.ownerDocument, qr, this.onCropMove), xt(t.ownerDocument, Fr, this.onCropEnd), s.responsive && xt(window, Jr, this.onResize);
  }
}, Fc = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, n = this.containerData, a = s.offsetWidth / n.width, i = s.offsetHeight / n.height, d = Math.abs(a - 1) > Math.abs(i - 1) ? a : i;
      if (d !== 1) {
        var m, l;
        t.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(rt(m, function(v, f) {
          m[f] = v * d;
        })), this.setCropBoxData(rt(l, function(v, f) {
          l[f] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ks || this.setDragMode(Lc(this.dragBox, nr) ? Us : Cr);
  },
  wheel: function(t) {
    var s = this, n = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * n, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, n = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (K(s) && s !== 1 || K(n) && n !== 0 || t.ctrlKey))) {
      var a = this.options, i = this.pointers, d;
      t.changedTouches ? rt(t.changedTouches, function(m) {
        i[m.identifier] = $e(m);
      }) : i[t.pointerId || 0] = $e(t), Object.keys(i).length > 1 && a.zoomable && a.zoomOnTouch ? d = Hs : d = dr(t.target, be), xc.test(d) && re(this.element, cr, {
        originalEvent: t,
        action: d
      }) !== !1 && (t.preventDefault(), this.action = d, this.cropping = !1, d === Bs && (this.cropping = !0, at(this.dragBox, je)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var n = this.pointers;
      t.preventDefault(), re(this.element, lr, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? rt(t.changedTouches, function(a) {
        Q(n[a.identifier] || {}, $e(a, !0));
      }) : Q(n[t.pointerId || 0] || {}, $e(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, n = this.pointers;
      t.changedTouches ? rt(t.changedTouches, function(a) {
        delete n[a.identifier];
      }) : delete n[t.pointerId || 0], s && (t.preventDefault(), Object.keys(n).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, je, this.cropped && this.options.modal)), re(this.element, ar, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, Gc = {
  change: function(t) {
    var s = this.options, n = this.canvasData, a = this.containerData, i = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, v = i.left, f = i.top, b = i.width, S = i.height, O = v + b, T = f + S, I = 0, M = 0, H = a.width, z = a.height, j = !0, V;
    !l && t.shiftKey && (l = b && S ? b / S : 1), this.limited && (I = i.minLeft, M = i.minTop, H = I + Math.min(a.width, n.width, n.left + n.width), z = M + Math.min(a.height, n.height, n.top + n.height));
    var X = d[Object.keys(d)[0]], k = {
      x: X.endX - X.startX,
      y: X.endY - X.startY
    }, N = function(nt) {
      switch (nt) {
        case Kt:
          O + k.x > H && (k.x = H - O);
          break;
        case Yt:
          v + k.x < I && (k.x = I - v);
          break;
        case Rt:
          f + k.y < M && (k.y = M - f);
          break;
        case Jt:
          T + k.y > z && (k.y = z - T);
          break;
      }
    };
    switch (m) {
      case Dr:
        v += k.x, f += k.y;
        break;
      case Kt:
        if (k.x >= 0 && (O >= H || l && (f <= M || T >= z))) {
          j = !1;
          break;
        }
        N(Kt), b += k.x, b < 0 && (m = Yt, b = -b, v -= b), l && (S = b / l, f += (i.height - S) / 2);
        break;
      case Rt:
        if (k.y <= 0 && (f <= M || l && (v <= I || O >= H))) {
          j = !1;
          break;
        }
        N(Rt), S -= k.y, f += k.y, S < 0 && (m = Jt, S = -S, f -= S), l && (b = S * l, v += (i.width - b) / 2);
        break;
      case Yt:
        if (k.x <= 0 && (v <= I || l && (f <= M || T >= z))) {
          j = !1;
          break;
        }
        N(Yt), b -= k.x, v += k.x, b < 0 && (m = Kt, b = -b, v -= b), l && (S = b / l, f += (i.height - S) / 2);
        break;
      case Jt:
        if (k.y >= 0 && (T >= z || l && (v <= I || O >= H))) {
          j = !1;
          break;
        }
        N(Jt), S += k.y, S < 0 && (m = Rt, S = -S, f -= S), l && (b = S * l, v += (i.width - b) / 2);
        break;
      case he:
        if (l) {
          if (k.y <= 0 && (f <= M || O >= H)) {
            j = !1;
            break;
          }
          N(Rt), S -= k.y, f += k.y, b = S * l;
        } else
          N(Rt), N(Kt), k.x >= 0 ? O < H ? b += k.x : k.y <= 0 && f <= M && (j = !1) : b += k.x, k.y <= 0 ? f > M && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (m = ge, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = fe, b = -b, v -= b) : S < 0 && (m = pe, S = -S, f -= S);
        break;
      case fe:
        if (l) {
          if (k.y <= 0 && (f <= M || v <= I)) {
            j = !1;
            break;
          }
          N(Rt), S -= k.y, f += k.y, b = S * l, v += i.width - b;
        } else
          N(Rt), N(Yt), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y <= 0 && f <= M && (j = !1) : (b -= k.x, v += k.x), k.y <= 0 ? f > M && (S -= k.y, f += k.y) : (S -= k.y, f += k.y);
        b < 0 && S < 0 ? (m = pe, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = he, b = -b, v -= b) : S < 0 && (m = ge, S = -S, f -= S);
        break;
      case ge:
        if (l) {
          if (k.x <= 0 && (v <= I || T >= z)) {
            j = !1;
            break;
          }
          N(Yt), b -= k.x, v += k.x, S = b / l;
        } else
          N(Jt), N(Yt), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y >= 0 && T >= z && (j = !1) : (b -= k.x, v += k.x), k.y >= 0 ? T < z && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (m = he, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = pe, b = -b, v -= b) : S < 0 && (m = fe, S = -S, f -= S);
        break;
      case pe:
        if (l) {
          if (k.x >= 0 && (O >= H || T >= z)) {
            j = !1;
            break;
          }
          N(Kt), b += k.x, S = b / l;
        } else
          N(Jt), N(Kt), k.x >= 0 ? O < H ? b += k.x : k.y >= 0 && T >= z && (j = !1) : b += k.x, k.y >= 0 ? T < z && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (m = fe, S = -S, b = -b, f -= S, v -= b) : b < 0 ? (m = ge, b = -b, v -= b) : S < 0 && (m = he, S = -S, f -= S);
        break;
      case Vs:
        this.move(k.x, k.y), j = !1;
        break;
      case Hs:
        this.zoom(jc(d), t), j = !1;
        break;
      case Bs:
        if (!k.x || !k.y) {
          j = !1;
          break;
        }
        V = Fs(this.cropper), v = X.startX - V.left, f = X.startY - V.top, b = i.minWidth, S = i.minHeight, k.x > 0 ? m = k.y > 0 ? pe : he : k.x < 0 && (v -= b, m = k.y > 0 ? ge : fe), k.y < 0 && (f -= S), this.cropped || (It(this.cropBox, dt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    j && (i.width = b, i.height = S, i.left = v, i.top = f, this.action = m, this.renderCropBox()), rt(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, Jc = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, je), It(this.cropBox, dt), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), It(this.dragBox, je), at(this.cropBox, dt)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), s ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, rt(this.previews, function(n) {
      n.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, It(this.cropper, Yr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Yr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[J] ? (t[J] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.canvasData, a = n.left, i = n.top;
    return this.moveTo(qe(t) ? t : a + Number(t), qe(s) ? s : i + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.canvasData, a = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(t) && (n.left = t, a = !0), K(s) && (n.top = s, a = !0), a && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, s) {
    var n = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(n.width * t / n.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, s, n) {
    var a = this.options, i = this.canvasData, d = i.width, m = i.height, l = i.naturalWidth, v = i.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var f = l * t, b = v * t;
      if (re(this.element, ur, {
        ratio: t,
        oldRatio: d / l,
        originalEvent: n
      }) === !1)
        return this;
      if (n) {
        var S = this.pointers, O = Fs(this.cropper), T = S && Object.keys(S).length ? Rc(S) : {
          pageX: n.pageX,
          pageY: n.pageY
        };
        i.left -= (f - d) * ((T.pageX - O.left - i.left) / d), i.top -= (b - m) * ((T.pageY - O.top - i.top) / m);
      } else
        Qt(s) && K(s.x) && K(s.y) ? (i.left -= (f - d) * ((s.x - i.left) / d), i.top -= (b - m) * ((s.y - i.top) / m)) : (i.left -= (f - d) / 2, i.top -= (b - m) / 2);
      i.width = f, i.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var s = this.imageData.scaleY;
    return this.scale(t, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.imageData, a = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(t) && (n.scaleX = t, a = !0), K(s) && (n.scaleY = s, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, n = this.imageData, a = this.canvasData, i = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: i.left - a.left,
        y: i.top - a.top,
        width: i.width,
        height: i.height
      };
      var m = n.width / n.naturalWidth;
      if (rt(d, function(f, b) {
        d[b] = f / m;
      }), t) {
        var l = Math.round(d.y + d.height), v = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = v - d.x, d.height = l - d.y;
      }
    } else
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (d.rotate = n.rotate || 0), s.scalable && (d.scaleX = n.scaleX || 1, d.scaleY = n.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(t) {
    var s = this.options, n = this.imageData, a = this.canvasData, i = {};
    if (this.ready && !this.disabled && Qt(t)) {
      var d = !1;
      s.rotatable && K(t.rotate) && t.rotate !== n.rotate && (n.rotate = t.rotate, d = !0), s.scalable && (K(t.scaleX) && t.scaleX !== n.scaleX && (n.scaleX = t.scaleX, d = !0), K(t.scaleY) && t.scaleY !== n.scaleY && (n.scaleY = t.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var m = n.width / n.naturalWidth;
      K(t.x) && (i.left = t.x * m + a.left), K(t.y) && (i.top = t.y * m + a.top), K(t.width) && (i.width = t.width * m), K(t.height) && (i.height = t.height * m), this.setCropBoxData(i);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var t = this.canvasData, s = {};
    return this.ready && rt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
      s[n] = t[n];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var s = this.canvasData, n = s.aspectRatio;
    return this.ready && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) ? (s.width = t.width, s.height = t.width / n) : K(t.height) && (s.height = t.height, s.width = t.height * n), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var s = this.cropBoxData, n = this.options.aspectRatio, a, i;
    return this.ready && this.cropped && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) && t.width !== s.width && (a = !0, s.width = t.width), K(t.height) && t.height !== s.height && (i = !0, s.height = t.height), n && (a ? s.height = s.width / n : i && (s.width = s.height * n)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, n = Bc(this.image, this.imageData, s, t);
    if (!this.cropped)
      return n;
    var a = this.getData(), i = a.x, d = a.y, m = a.width, l = a.height, v = n.width / Math.floor(s.naturalWidth);
    v !== 1 && (i *= v, d *= v, m *= v, l *= v);
    var f = m / l, b = Bt({
      aspectRatio: f,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Bt({
      aspectRatio: f,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), O = Bt({
      aspectRatio: f,
      width: t.width || (v !== 1 ? n.width : m),
      height: t.height || (v !== 1 ? n.height : l)
    }), T = O.width, I = O.height;
    T = Math.min(b.width, Math.max(S.width, T)), I = Math.min(b.height, Math.max(S.height, I));
    var M = document.createElement("canvas"), H = M.getContext("2d");
    M.width = ee(T), M.height = ee(I), H.fillStyle = t.fillColor || "transparent", H.fillRect(0, 0, T, I);
    var z = t.imageSmoothingEnabled, j = z === void 0 ? !0 : z, V = t.imageSmoothingQuality;
    H.imageSmoothingEnabled = j, V && (H.imageSmoothingQuality = V);
    var X = n.width, k = n.height, N = i, G = d, nt, et, ct, vt, pt, gt;
    N <= -m || N > X ? (N = 0, nt = 0, ct = 0, pt = 0) : N <= 0 ? (ct = -N, N = 0, nt = Math.min(X, m + N), pt = nt) : N <= X && (ct = 0, nt = Math.min(m, X - N), pt = nt), nt <= 0 || G <= -l || G > k ? (G = 0, et = 0, vt = 0, gt = 0) : G <= 0 ? (vt = -G, G = 0, et = Math.min(k, l + G), gt = et) : G <= k && (vt = 0, et = Math.min(l, k - G), gt = et);
    var A = [N, G, nt, et];
    if (pt > 0 && gt > 0) {
      var R = T / m;
      A.push(ct * R, vt * R, pt * R, gt * R);
    }
    return H.drawImage.apply(H, [n].concat(zs(A.map(function($) {
      return Math.floor(ee($));
    })))), M;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var s = this.options;
    return !this.disabled && !qe(t) && (s.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var s = this.options, n = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var i = t === Cr, d = s.movable && t === Us;
      t = i || d ? t : Ks, s.dragMode = t, ye(n, be, t), te(n, nr, i), te(n, or, d), s.cropBoxMovable || (ye(a, be, t), te(a, nr, i), te(a, or, d));
    }
    return this;
  }
}, Qc = At.Cropper, Js = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (hc(this, r), !t || !Cc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, es, Qt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return fc(r, [{
    key: "init",
    value: function() {
      var s = this.element, n = s.tagName.toLowerCase(), a;
      if (!s[J]) {
        if (s[J] = this, n === "img") {
          if (this.isImg = !0, a = s.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = s.src;
        } else
          n === "canvas" && window.HTMLCanvasElement && (a = s.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var n = this;
      if (s) {
        this.url = s, this.imageData = {};
        var a = this.element, i = this.options;
        if (!i.rotatable && !i.scalable && (i.checkOrientation = !1), !i.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (kc.test(s)) {
          Dc.test(s) ? this.read(Uc(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
          d.getResponseHeader("content-type") !== ts && d.abort();
        }, d.onload = function() {
          n.read(d.response);
        }, d.onloadend = function() {
          n.reloading = !1, n.xhr = null;
        }, i.checkCrossOrigin && ss(s) && a.crossOrigin && (s = ns(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = a.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var n = this.options, a = this.imageData, i = Yc(s), d = 0, m = 1, l = 1;
      if (i > 1) {
        this.url = Kc(s, ts);
        var v = Wc(i);
        d = v.rotate, m = v.scaleX, l = v.scaleY;
      }
      n.rotatable && (a.rotate = d), n.scalable && (a.scaleX = m, a.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, n = this.url, a = s.crossOrigin, i = n;
      this.options.checkCrossOrigin && ss(n) && (a || (a = "anonymous"), i = ns(n)), this.crossOrigin = a, this.crossOriginUrl = i;
      var d = document.createElement("img");
      a && (d.crossOrigin = a), d.src = i || n, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), at(d, Wr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, n = this.image;
      n.onload = null, n.onerror = null, this.sizing = !0;
      var a = At.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(At.navigator.userAgent), i = function(v, f) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: f,
          aspectRatio: v / f
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (n.naturalWidth && !a) {
        i(n.naturalWidth, n.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        i(d.width, d.height), a || m.removeChild(d);
      }, d.src = n.src, a || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(d));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, n = this.options, a = this.image, i = s.parentNode, d = document.createElement("div");
        d.innerHTML = Ec;
        var m = d.querySelector(".".concat(J, "-container")), l = m.querySelector(".".concat(J, "-canvas")), v = m.querySelector(".".concat(J, "-drag-box")), f = m.querySelector(".".concat(J, "-crop-box")), b = f.querySelector(".".concat(J, "-face"));
        this.container = i, this.cropper = m, this.canvas = l, this.dragBox = v, this.cropBox = f, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(a), at(s, dt), i.insertBefore(m, s.nextSibling), It(a, Wr), this.initPreview(), this.bind(), n.initialAspectRatio = Math.max(0, n.initialAspectRatio) || NaN, n.aspectRatio = Math.max(0, n.aspectRatio) || NaN, n.viewMode = Math.max(0, Math.min(3, Math.round(n.viewMode))) || 0, at(f, dt), n.guides || at(f.getElementsByClassName("".concat(J, "-dashed")), dt), n.center || at(f.getElementsByClassName("".concat(J, "-center")), dt), n.background && at(m, "".concat(J, "-bg")), n.highlight || at(b, yc), n.cropBoxMovable && (at(b, or), ye(b, be, Dr)), n.cropBoxResizable || (at(f.getElementsByClassName("".concat(J, "-line")), dt), at(f.getElementsByClassName("".concat(J, "-point")), dt)), this.render(), this.ready = !0, this.setDragMode(n.dragMode), n.autoCrop && this.crop(), this.setData(n.data), ut(n.ready) && yt(s, Gr, n.ready, {
          once: !0
        }), re(s, Gr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), It(this.element, dt);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Qc, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(es, Qt(s) && s);
    }
  }]), r;
}();
Q(Js.prototype, Xc, Zc, qc, Fc, Gc, Jc);
const tu = { class: "flex" }, eu = ["aria-label"], ru = { class: "ml-auto mb-2" }, su = { class: "w-full flex justify-center" }, nu = ["src"], ou = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { t: n } = P("i18n"), { apiUrl: a } = $t(), i = L(null), d = L(null), m = L(!1), l = L(""), v = L(!1), f = () => {
      m.value = !m.value, m.value ? d.value = new Js(i.value, {
        crop(O) {
        }
      }) : d.value.destroy();
    }, b = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (O) => {
          l.value = "", v.value = !1, Pe(a.value, {
            method: "POST",
            params: Object.assign(b, {
              q: "upload",
              adapter: s.selection.adapter,
              path: s.selection.item.path,
              file: O
            }),
            name: s.selection.item.basename,
            json: !1
          }).then((T) => {
            l.value = n("Updated."), i.value.src = tr(s.selection.adapter, s.selection.item.path), f(), t("load");
          }).catch((T) => {
            l.value = n(T.message), v.value = !0;
          });
        }
      );
    };
    return Dt(() => {
      t("load");
    }), (O, T) => (_(), E(lt, null, [
      p("div", tu, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, eu),
        p("div", ru, [
          m.value ? (_(), E("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, C(x(n)("Crop")), 1)) : Z("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: T[0] || (T[0] = (I) => f())
          }, C(m.value ? x(n)("Cancel") : x(n)("Edit")), 1)
        ])
      ]),
      p("div", su, [
        p("img", {
          ref_key: "image",
          ref: i,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(tr)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, nu)
      ]),
      l.value.length ? (_(), F(Ot, {
        key: 0,
        onHidden: T[1] || (T[1] = (I) => l.value = ""),
        error: v.value
      }, {
        default: q(() => [
          st(C(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Z("", !0)
    ], 64));
  }
}, iu = { class: "flex" }, au = ["aria-label"], lu = /* @__PURE__ */ p("div", null, null, -1), cu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    return Dt(() => {
      t("load");
    }), (s, n) => (_(), E(lt, null, [
      p("div", iu, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, C(r.selection.item.basename), 9, au)
      ]),
      lu
    ], 64));
  }
}, uu = ["aria-label"], du = {
  class: "w-full",
  preload: "",
  controls: ""
}, hu = ["src"], fu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: n } = $t(), a = () => n.value + "?" + qt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Dt(() => {
      t("load");
    }), (i, d) => (_(), E(lt, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, uu),
      p("div", null, [
        p("video", du, [
          p("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, hu),
          st(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, pu = ["aria-label"], gu = {
  class: "w-full",
  controls: ""
}, mu = ["src"], vu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: n } = $t(), a = () => n.value + "?" + qt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Dt(() => {
      t("load");
    }), (i, d) => (_(), E(lt, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, pu),
      p("div", null, [
        p("audio", gu, [
          p("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, mu),
          st(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, bu = ["aria-label"], yu = ["data"], Su = ["src"], wu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: n } = $t(), a = () => n.value + "?" + qt({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Dt(() => {
      t("load");
    }), (i, d) => (_(), E(lt, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, C(r.selection.item.basename), 9, bu),
      p("div", null, [
        p("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          p("iframe", {
            class: "border-0",
            src: a(),
            width: "100%",
            height: "100%"
          }, `\r
          <p>\r
            Your browser does not support PDFs.\r
            <a href="https://example.com/test.pdf">Download the PDF</a>\r
            .\r
          </p>\r
        `, 8, Su)
        ], 8, yu)
      ])
    ], 64));
  }
}, _u = { class: "sm:flex sm:items-start" }, xu = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, ku = { class: "text-gray-700 dark:text-gray-200 text-sm" }, Du = {
  key: 0,
  class: "flex leading-5"
}, Cu = /* @__PURE__ */ p("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ p("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ p("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Eu = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Mu = { class: "font-bold pl-2" }, Tu = { class: "font-bold pl-2" }, Iu = {
  name: "VFModalPreview"
}, Au = /* @__PURE__ */ Object.assign(Iu, {
  props: {
    selection: Object
  },
  setup(r) {
    const t = r, { apiUrl: s } = $t(), n = P("emitter"), { t: a } = P("i18n"), i = L(!1), d = (v) => i.value = v, m = (v) => (t.selection.item.mime_type ?? "").startsWith(v), l = () => {
      const v = s.value + "?" + qt({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      n.emit("vf-download", v);
    };
    return (v, f) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: f[6] || (f[6] = (b) => x(n).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Close")), 1),
        p("button", {
          type: "button",
          onClick: f[7] || (f[7] = (b) => l()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Download")), 1)
      ]),
      default: q(() => [
        p("div", _u, [
          p("div", xu, [
            p("div", null, [
              m("text") ? (_(), F(dc, {
                key: 0,
                selection: r.selection,
                onLoad: f[0] || (f[0] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("image") ? (_(), F(ou, {
                key: 1,
                selection: r.selection,
                onLoad: f[1] || (f[1] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("video") ? (_(), F(fu, {
                key: 2,
                selection: r.selection,
                onLoad: f[2] || (f[2] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("audio") ? (_(), F(vu, {
                key: 3,
                selection: r.selection,
                onLoad: f[3] || (f[3] = (b) => d(!0))
              }, null, 8, ["selection"])) : m("application/pdf") ? (_(), F(wu, {
                key: 4,
                selection: r.selection,
                onLoad: f[4] || (f[4] = (b) => d(!0))
              }, null, 8, ["selection"])) : (_(), F(cu, {
                key: 5,
                selection: r.selection,
                onLoad: f[5] || (f[5] = (b) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            p("div", ku, [
              i.value == !1 ? (_(), E("div", Du, [
                Cu,
                p("span", null, C(x(a)("Loading")), 1)
              ])) : Z("", !0)
            ])
          ])
        ]),
        p("div", Eu, [
          p("div", null, [
            p("span", Mu, C(x(a)("File Size")) + ": ", 1),
            st(C(x(ls)(r.selection.item.file_size)), 1)
          ]),
          p("div", null, [
            p("span", Tu, C(x(a)("Last Modified")) + ": ", 1),
            st(" " + C(x(cs)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), $u = { class: "sm:flex sm:items-start" }, Lu = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), Ou = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Pu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Nu = { class: "mt-2" }, ju = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, Ru = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, zu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Bu = [
  zu
], Vu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Hu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Uu = [
  Hu
], Ku = { class: "ml-1.5" }, Yu = ["onKeyup"], Wu = {
  name: "VFModalRename"
}, Xu = /* @__PURE__ */ Object.assign(Wu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), i = L(t.selection.items[0]), d = L(t.selection.items[0].basename), m = L(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: n.value,
          path: t.current.dirname,
          item: i.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("%s is renamed.", d.value) });
        },
        onError: (v) => {
          m.value = a(v.message);
        }
      });
    };
    return (v, f) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Rename")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", $u, [
          Lu,
          p("div", Ou, [
            p("h3", Pu, C(x(a)("Rename")), 1),
            p("div", Nu, [
              p("p", ju, [
                i.value.type == "dir" ? (_(), E("svg", Ru, Bu)) : (_(), E("svg", Vu, Uu)),
                p("span", Ku, C(i.value.basename), 1)
              ]),
              Tt(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => d.value = b),
                onKeyup: ne(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, Yu), [
                [oe, d.value]
              ]),
              m.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => m.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(m.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Zu = { class: "sm:flex sm:items-start" }, qu = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Fu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Gu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ju = { class: "mt-2" }, Qu = { class: "text-gray-500 mb-1" }, td = ["id"], ed = {
  key: 0,
  class: "py-2"
}, rd = ["disabled", "onClick"], sd = {
  name: "VFModalUpload"
}, nd = /* @__PURE__ */ Object.assign(sd, {
  props: {
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { apiUrl: n } = $t(), { t: a } = P("i18n"), i = P("maxFileSize"), d = L(null), m = L(null), l = L(null), v = L([]), f = L(""), b = L(!0), S = () => {
      f.value = "", d.value.start();
    }, O = P("postData");
    return Dt(() => {
      d.value = new de.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: i,
        multiple_queues: !0,
        file_data_name: "file",
        url: n.value + "?" + qt(Object.assign(O, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...Oe && { "X-CSRF-Token": Oe }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(T, I) {
            b.value = !1, de.each(I, function(M) {
              v.value.push({
                id: M.id,
                name: M.name,
                size: de.formatSize(M.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(T, I) {
            v.value[v.value.findIndex((M) => M.id == I.id)].percent = I.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function(T, I) {
            d.value.stop(), I.code == de.HTTP_ERROR ? f.value = a(JSON.parse(I.response).message) : I.code == de.FILE_SIZE_ERROR ? f.value = a("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [i]) : f.value = a(I.message);
          }
        }
      }), d.value.init();
    }), (T, I) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          disabled: b.value,
          onClick: Wt(S, ["prevent"]),
          type: "button",
          class: ht([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, C(x(a)("Upload")), 11, rd),
        p("button", {
          type: "button",
          onClick: I[1] || (I[1] = (M) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", Zu, [
          qu,
          p("div", Fu, [
            p("h3", Gu, C(x(a)("Upload files")), 1),
            p("div", Ju, [
              p("div", Qu, [
                (_(!0), E(lt, null, kt(v.value, (M) => (_(), E("div", null, [
                  p("div", {
                    id: M.id
                  }, [
                    st(C(M.name) + " ( " + C(M.size) + ") ", 1),
                    p("b", null, C(M.percent), 1)
                  ], 8, td)
                ]))), 256)),
                v.value.length ? Z("", !0) : (_(), E("div", ed, C(x(a)("No files selected!")), 1))
              ]),
              p("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: m
              }, [
                p("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, C(x(a)("Select Files")), 513)
              ], 512),
              f.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: I[0] || (I[0] = (M) => f.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(f.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), od = { class: "sm:flex sm:items-start" }, id = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), ad = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ld = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, cd = { class: "mt-2" }, ud = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, dd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, hd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), fd = [
  hd
], pd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, gd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), md = [
  gd
], vd = { class: "ml-1.5" }, bd = ["onKeyup", "placeholder"], yd = {
  name: "VFModalArchive"
}, Sd = /* @__PURE__ */ Object.assign(yd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), i = L(""), d = L(""), m = L(t.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(m.value.map(({ path: v, type: f }) => ({ path: v, type: f }))),
          name: i.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = a(v.message);
        }
      });
    };
    return (v, f) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Archive")), 1),
        p("button", {
          type: "button",
          onClick: f[2] || (f[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", od, [
          id,
          p("div", ad, [
            p("h3", ld, C(x(a)("Archive the files")), 1),
            p("div", cd, [
              (_(!0), E(lt, null, kt(m.value, (b) => (_(), E("p", ud, [
                b.type == "dir" ? (_(), E("svg", dd, fd)) : (_(), E("svg", pd, md)),
                p("span", vd, C(b.basename), 1)
              ]))), 256)),
              Tt(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (b) => i.value = b),
                onKeyup: ne(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, bd), [
                [oe, i.value]
              ]),
              d.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: f[1] || (f[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), wd = { class: "sm:flex sm:items-start" }, _d = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), xd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, kd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Dd = { class: "mt-2" }, Cd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ed = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Md = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Td = [
  Md
], Id = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ad = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), $d = [
  Ad
], Ld = { class: "ml-1.5" }, Od = { class: "my-1 text-sm text-gray-500" }, Pd = {
  name: "VFModalUnarchive"
}, Nd = /* @__PURE__ */ Object.assign(Pd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n");
    L("");
    const i = L(t.selection.items[0]), d = L(""), m = L([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: n.value,
          path: t.current.dirname,
          item: i.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (v) => {
          d.value = a(v.message);
        }
      });
    };
    return (v, f) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: l,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Unarchive")), 1),
        p("button", {
          type: "button",
          onClick: f[1] || (f[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(a)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", wd, [
          _d,
          p("div", xd, [
            p("h3", kd, C(x(a)("Unarchive")), 1),
            p("div", Dd, [
              (_(!0), E(lt, null, kt(m.value, (b) => (_(), E("p", Cd, [
                b.type == "dir" ? (_(), E("svg", Ed, Td)) : (_(), E("svg", Id, $d)),
                p("span", Ld, C(b.basename), 1)
              ]))), 256)),
              p("p", Od, C(x(a)("The archive will be unarchived at")) + " (" + C(r.current.dirname) + ")", 1),
              d.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: f[0] || (f[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), jd = { class: "sm:flex sm:items-start" }, Rd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), zd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Bd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Vd = { class: "mt-2" }, Hd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Ud = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Kd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Yd = [
  Kd
], Wd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Xd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Zd = [
  Xd
], qd = { class: "ml-1.5" }, Fd = { class: "text-sm text-gray-500 pb-1 pt-3" }, Gd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Jd = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Qd = { class: "ml-1.5 overflow-auto" }, th = {
  name: "VFModalMove"
}, eh = /* @__PURE__ */ Object.assign(th, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter"), { t: n } = P("i18n");
    P("storage");
    const a = P("adapter"), i = L(t.selection.items.from), d = L(""), m = () => {
      i.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: t.current.dirname,
          items: JSON.stringify(i.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: n("Files moved.", t.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = n(l.message);
        }
      });
    };
    return (l, v) => (_(), F(Lt, null, {
      buttons: q(() => [
        p("button", {
          type: "button",
          onClick: m,
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(n)("Yes, Move!")), 1),
        p("button", {
          type: "button",
          onClick: v[1] || (v[1] = (f) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, C(x(n)("Cancel")), 1)
      ]),
      default: q(() => [
        p("div", jd, [
          Rd,
          p("div", zd, [
            p("h3", Bd, C(x(n)("Move files")), 1),
            p("div", Vd, [
              (_(!0), E(lt, null, kt(i.value, (f) => (_(), E("p", Hd, [
                f.type == "dir" ? (_(), E("svg", Ud, Yd)) : (_(), E("svg", Wd, Zd)),
                p("span", qd, C(f.path), 1)
              ]))), 256)),
              p("p", Fd, C(x(n)("Are you sure you want to move these files?")), 1),
              p("p", Gd, [
                Jd,
                p("span", Qd, C(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (_(), F(Ot, {
                key: 0,
                onHidden: v[0] || (v[0] = (f) => d.value = ""),
                error: ""
              }, {
                default: q(() => [
                  st(C(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: Sd,
  ModalDelete: Ll,
  ModalMessage: Vl,
  ModalMove: eh,
  ModalNewFile: oc,
  ModalNewFolder: Fl,
  ModalPreview: Au,
  ModalRename: Xu,
  ModalUnarchive: Nd,
  ModalUpload: nd
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  VueFinder: al,
  ...rh
};
const oh = {
  install(r) {
    for (const t in Ge)
      if (Ge.hasOwnProperty(t)) {
        const s = Ge[t];
        r.component(s.name, s);
      }
  }
};
export {
  oh as default
};
