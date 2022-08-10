import Qe, { useState as Ha, useCallback as We, useRef as er, useMemo as pa, useEffect as rt, createContext as Va, useContext as Ja } from "react";
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xa = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, va = Xa, Za = va, Qa = typeof self == "object" && self && self.Object === Object && self, en = Za || Qa || Function("return this")(), Y = en, rn = Y, tn = rn.Symbol, rr = tn, vt = rr, da = Object.prototype, an = da.hasOwnProperty, nn = da.toString, ze = vt ? vt.toStringTag : void 0;
function on(e) {
  var t = an.call(e, ze), a = e[ze];
  try {
    e[ze] = void 0;
    var i = !0;
  } catch {
  }
  var u = nn.call(e);
  return i && (t ? e[ze] = a : delete e[ze]), u;
}
var sn = on, un = Object.prototype, cn = un.toString;
function fn(e) {
  return cn.call(e);
}
var ln = fn, dt = rr, pn = sn, vn = ln, dn = "[object Null]", yn = "[object Undefined]", yt = dt ? dt.toStringTag : void 0;
function hn(e) {
  return e == null ? e === void 0 ? yn : dn : yt && yt in Object(e) ? pn(e) : vn(e);
}
var tt = hn;
function _n(e) {
  return e != null && typeof e == "object";
}
var ya = _n, gn = tt, bn = ya, $n = "[object Arguments]";
function mn(e) {
  return bn(e) && gn(e) == $n;
}
var On = mn, ht = On, Tn = ya, ha = Object.prototype, wn = ha.hasOwnProperty, jn = ha.propertyIsEnumerable;
ht(function() {
  return arguments;
}());
var Je = { exports: {} };
function En() {
  return !1;
}
var Pn = En;
(function(e, t) {
  var a = Y, i = Pn, u = t && !t.nodeType && t, s = u && !0 && e && !e.nodeType && e, l = s && s.exports === u, f = l ? a.Buffer : void 0, p = f ? f.isBuffer : void 0, v = p || i;
  e.exports = v;
})(Je, Je.exports);
var Br = { exports: {} };
(function(e, t) {
  var a = va, i = t && !t.nodeType && t, u = i && !0 && e && !e.nodeType && e, s = u && u.exports === i, l = s && a.process, f = function() {
    try {
      var p = u && u.require && u.require("util").types;
      return p || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = f;
})(Br, Br.exports);
var _t = Br.exports;
_t && _t.isTypedArray;
Je.exports;
function Sn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var _a = Sn, Cn = tt, An = _a, Rn = "[object AsyncFunction]", xn = "[object Function]", In = "[object GeneratorFunction]", Dn = "[object Proxy]";
function kn(e) {
  if (!An(e))
    return !1;
  var t = Cn(e);
  return t == xn || t == In || t == Rn || t == Dn;
}
var Fn = kn;
function Ln() {
  this.__data__ = [], this.size = 0;
}
var Mn = Ln;
function Nn(e, t) {
  return e === t || e !== e && t !== t;
}
var Gn = Nn, Un = Gn;
function zn(e, t) {
  for (var a = e.length; a--; )
    if (Un(e[a][0], t))
      return a;
  return -1;
}
var tr = zn, Bn = tr, Wn = Array.prototype, qn = Wn.splice;
function Kn(e) {
  var t = this.__data__, a = Bn(t, e);
  if (a < 0)
    return !1;
  var i = t.length - 1;
  return a == i ? t.pop() : qn.call(t, a, 1), --this.size, !0;
}
var Yn = Kn, Hn = tr;
function Vn(e) {
  var t = this.__data__, a = Hn(t, e);
  return a < 0 ? void 0 : t[a][1];
}
var Jn = Vn, Xn = tr;
function Zn(e) {
  return Xn(this.__data__, e) > -1;
}
var Qn = Zn, ei = tr;
function ri(e, t) {
  var a = this.__data__, i = ei(a, e);
  return i < 0 ? (++this.size, a.push([e, t])) : a[i][1] = t, this;
}
var ti = ri, ai = Mn, ni = Yn, ii = Jn, oi = Qn, si = ti;
function ue(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ue.prototype.clear = ai;
ue.prototype.delete = ni;
ue.prototype.get = ii;
ue.prototype.has = oi;
ue.prototype.set = si;
var ui = ue, ci = Y, fi = ci["__core-js_shared__"], li = fi, Fr = li, gt = function() {
  var e = /[^.]+$/.exec(Fr && Fr.keys && Fr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pi(e) {
  return !!gt && gt in e;
}
var vi = pi, di = Function.prototype, yi = di.toString;
function hi(e) {
  if (e != null) {
    try {
      return yi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ga = hi, _i = Fn, gi = vi, bi = _a, $i = ga, mi = /[\\^$.*+?()[\]{}|]/g, Oi = /^\[object .+?Constructor\]$/, Ti = Function.prototype, wi = Object.prototype, ji = Ti.toString, Ei = wi.hasOwnProperty, Pi = RegExp(
  "^" + ji.call(Ei).replace(mi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Si(e) {
  if (!bi(e) || gi(e))
    return !1;
  var t = _i(e) ? Pi : Oi;
  return t.test($i(e));
}
var Ci = Si;
function Ai(e, t) {
  return e == null ? void 0 : e[t];
}
var Ri = Ai, xi = Ci, Ii = Ri;
function Di(e, t) {
  var a = Ii(e, t);
  return xi(a) ? a : void 0;
}
var ce = Di, ki = ce, Fi = Y, Li = ki(Fi, "Map"), ba = Li, Mi = ce, Ni = Mi(Object, "create"), ar = Ni, bt = ar;
function Gi() {
  this.__data__ = bt ? bt(null) : {}, this.size = 0;
}
var Ui = Gi;
function zi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Bi = zi, Wi = ar, qi = "__lodash_hash_undefined__", Ki = Object.prototype, Yi = Ki.hasOwnProperty;
function Hi(e) {
  var t = this.__data__;
  if (Wi) {
    var a = t[e];
    return a === qi ? void 0 : a;
  }
  return Yi.call(t, e) ? t[e] : void 0;
}
var Vi = Hi, Ji = ar, Xi = Object.prototype, Zi = Xi.hasOwnProperty;
function Qi(e) {
  var t = this.__data__;
  return Ji ? t[e] !== void 0 : Zi.call(t, e);
}
var eo = Qi, ro = ar, to = "__lodash_hash_undefined__";
function ao(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = ro && t === void 0 ? to : t, this;
}
var no = ao, io = Ui, oo = Bi, so = Vi, uo = eo, co = no;
function fe(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
fe.prototype.clear = io;
fe.prototype.delete = oo;
fe.prototype.get = so;
fe.prototype.has = uo;
fe.prototype.set = co;
var fo = fe, $t = fo, lo = ui, po = ba;
function vo() {
  this.size = 0, this.__data__ = {
    hash: new $t(),
    map: new (po || lo)(),
    string: new $t()
  };
}
var yo = vo;
function ho(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var _o = ho, go = _o;
function bo(e, t) {
  var a = e.__data__;
  return go(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
var nr = bo, $o = nr;
function mo(e) {
  var t = $o(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Oo = mo, To = nr;
function wo(e) {
  return To(this, e).get(e);
}
var jo = wo, Eo = nr;
function Po(e) {
  return Eo(this, e).has(e);
}
var So = Po, Co = nr;
function Ao(e, t) {
  var a = Co(this, e), i = a.size;
  return a.set(e, t), this.size += a.size == i ? 0 : 1, this;
}
var Ro = Ao, xo = yo, Io = Oo, Do = jo, ko = So, Fo = Ro;
function le(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
le.prototype.clear = xo;
le.prototype.delete = Io;
le.prototype.get = Do;
le.prototype.has = ko;
le.prototype.set = Fo;
var Lo = le, Mo = Y;
Mo.Uint8Array;
var mt = rr, Ot = mt ? mt.prototype : void 0;
Ot && Ot.valueOf;
var No = ce, Go = Y, Uo = No(Go, "DataView"), zo = Uo, Bo = ce, Wo = Y, qo = Bo(Wo, "Promise"), Ko = qo, Yo = ce, Ho = Y, Vo = Yo(Ho, "Set"), Jo = Vo, Xo = ce, Zo = Y, Qo = Xo(Zo, "WeakMap"), es = Qo, Wr = zo, qr = ba, Kr = Ko, Yr = Jo, Hr = es, $a = tt, pe = ga, Tt = "[object Map]", rs = "[object Object]", wt = "[object Promise]", jt = "[object Set]", Et = "[object WeakMap]", Pt = "[object DataView]", ts = pe(Wr), as = pe(qr), ns = pe(Kr), is = pe(Yr), os = pe(Hr), ie = $a;
(Wr && ie(new Wr(new ArrayBuffer(1))) != Pt || qr && ie(new qr()) != Tt || Kr && ie(Kr.resolve()) != wt || Yr && ie(new Yr()) != jt || Hr && ie(new Hr()) != Et) && (ie = function(e) {
  var t = $a(e), a = t == rs ? e.constructor : void 0, i = a ? pe(a) : "";
  if (i)
    switch (i) {
      case ts:
        return Pt;
      case as:
        return Tt;
      case ns:
        return wt;
      case is:
        return jt;
      case os:
        return Et;
    }
  return t;
});
Je.exports;
var ma = Lo, ss = "Expected a function";
function at(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ss);
  var a = function() {
    var i = arguments, u = t ? t.apply(this, i) : i[0], s = a.cache;
    if (s.has(u))
      return s.get(u);
    var l = e.apply(this, i);
    return a.cache = s.set(u, l) || s, l;
  };
  return a.cache = new (at.Cache || ma)(), a;
}
at.Cache = ma;
var us = at, cs = us, fs = 500;
function ls(e) {
  var t = cs(e, function(i) {
    return a.size === fs && a.clear(), i;
  }), a = t.cache;
  return t;
}
var ps = ls, vs = ps, ds = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ys = /\\(\\)?/g;
vs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ds, function(a, i, u, s) {
    t.push(u ? s.replace(ys, "$1") : i || a);
  }), t;
});
var St = rr, Ct = St ? St.prototype : void 0;
Ct && Ct.toString;
var Oa = { exports: {} }, oe = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Lr, At;
function Ta() {
  if (At)
    return Lr;
  At = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, f = 0; f < 10; f++)
        l["_" + String.fromCharCode(f)] = f;
      var p = Object.getOwnPropertyNames(l).map(function(y) {
        return l[y];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var v = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        v[y] = y;
      }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Lr = u() ? Object.assign : function(s, l) {
    for (var f, p = i(s), v, y = 1; y < arguments.length; y++) {
      f = Object(arguments[y]);
      for (var m in f)
        t.call(f, m) && (p[m] = f[m]);
      if (e) {
        v = e(f);
        for (var _ = 0; _ < v.length; _++)
          a.call(f, v[_]) && (p[v[_]] = f[v[_]]);
      }
    }
    return p;
  }, Lr;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function hs() {
  if (Rt)
    return oe;
  Rt = 1, Ta();
  var e = Qe, t = 60103;
  if (oe.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var a = Symbol.for;
    t = a("react.element"), oe.Fragment = a("react.fragment");
  }
  var i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, p, v) {
    var y, m = {}, _ = null, E = null;
    v !== void 0 && (_ = "" + v), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (y in p)
      u.call(p, y) && !s.hasOwnProperty(y) && (m[y] = p[y]);
    if (f && f.defaultProps)
      for (y in p = f.defaultProps, p)
        m[y] === void 0 && (m[y] = p[y]);
    return { $$typeof: t, type: f, key: _, ref: E, props: m, _owner: i.current };
  }
  return oe.jsx = l, oe.jsxs = l, oe;
}
var xt = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function _s() {
  return It || (It = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = Qe, a = Ta(), i = 60103, u = 60106;
      e.Fragment = 60107;
      var s = 60108, l = 60114, f = 60109, p = 60110, v = 60112, y = 60113, m = 60120, _ = 60115, E = 60116, P = 60121, C = 60122, I = 60117, D = 60129, k = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var $ = Symbol.for;
        i = $("react.element"), u = $("react.portal"), e.Fragment = $("react.fragment"), s = $("react.strict_mode"), l = $("react.profiler"), f = $("react.provider"), p = $("react.context"), v = $("react.forward_ref"), y = $("react.suspense"), m = $("react.suspense_list"), _ = $("react.memo"), E = $("react.lazy"), P = $("react.block"), C = $("react.server.block"), I = $("react.fundamental"), $("react.scope"), $("react.opaque.id"), D = $("react.debug_trace_mode"), $("react.offscreen"), k = $("react.legacy_hidden");
      }
      var F = typeof Symbol == "function" && Symbol.iterator, G = "@@iterator";
      function be(r) {
        if (r === null || typeof r != "object")
          return null;
        var n = F && r[F] || r[G];
        return typeof n == "function" ? n : null;
      }
      var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function j(r) {
        {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
            o[c - 1] = arguments[c];
          lr("error", r, o);
        }
      }
      function lr(r, n, o) {
        {
          var c = L.ReactDebugCurrentFrame, g = c.getStackAddendum();
          g !== "" && (n += "%s", o = o.concat([g]));
          var b = o.map(function(h) {
            return "" + h;
          });
          b.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, b);
        }
      }
      var pr = !1;
      function vr(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === e.Fragment || r === l || r === D || r === s || r === y || r === m || r === k || pr || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === _ || r.$$typeof === f || r.$$typeof === p || r.$$typeof === v || r.$$typeof === I || r.$$typeof === P || r[0] === C));
      }
      function dr(r, n, o) {
        var c = n.displayName || n.name || "";
        return r.displayName || (c !== "" ? o + "(" + c + ")" : o);
      }
      function $e(r) {
        return r.displayName || "Context";
      }
      function A(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && j("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case e.Fragment:
            return "Fragment";
          case u:
            return "Portal";
          case l:
            return "Profiler";
          case s:
            return "StrictMode";
          case y:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case p:
              var n = r;
              return $e(n) + ".Consumer";
            case f:
              var o = r;
              return $e(o._context) + ".Provider";
            case v:
              return dr(r, r.render, "ForwardRef");
            case _:
              return A(r.type);
            case P:
              return A(r._render);
            case E: {
              var c = r, g = c._payload, b = c._init;
              try {
                return A(b(g));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var U = 0, me, Oe, Te, we, je, Ee, Pe;
      function Se() {
      }
      Se.__reactDisabledLog = !0;
      function yr() {
        {
          if (U === 0) {
            me = console.log, Oe = console.info, Te = console.warn, we = console.error, je = console.group, Ee = console.groupCollapsed, Pe = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Se,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          U++;
        }
      }
      function hr() {
        {
          if (U--, U === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: a({}, r, {
                value: me
              }),
              info: a({}, r, {
                value: Oe
              }),
              warn: a({}, r, {
                value: Te
              }),
              error: a({}, r, {
                value: we
              }),
              group: a({}, r, {
                value: je
              }),
              groupCollapsed: a({}, r, {
                value: Ee
              }),
              groupEnd: a({}, r, {
                value: Pe
              })
            });
          }
          U < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var J = L.ReactCurrentDispatcher, X;
      function B(r, n, o) {
        {
          if (X === void 0)
            try {
              throw Error();
            } catch (g) {
              var c = g.stack.trim().match(/\n( *(at )?)/);
              X = c && c[1] || "";
            }
          return `
` + X + r;
        }
      }
      var Z = !1, W;
      {
        var _r = typeof WeakMap == "function" ? WeakMap : Map;
        W = new _r();
      }
      function Ce(r, n) {
        if (!r || Z)
          return "";
        {
          var o = W.get(r);
          if (o !== void 0)
            return o;
        }
        var c;
        Z = !0;
        var g = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var b;
        b = J.current, J.current = null, yr();
        try {
          if (n) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (x) {
                c = x;
              }
              Reflect.construct(r, [], h);
            } else {
              try {
                h.call();
              } catch (x) {
                c = x;
              }
              r.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              c = x;
            }
            r();
          }
        } catch (x) {
          if (x && c && typeof x.stack == "string") {
            for (var d = x.stack.split(`
`), w = c.stack.split(`
`), O = d.length - 1, T = w.length - 1; O >= 1 && T >= 0 && d[O] !== w[T]; )
              T--;
            for (; O >= 1 && T >= 0; O--, T--)
              if (d[O] !== w[T]) {
                if (O !== 1 || T !== 1)
                  do
                    if (O--, T--, T < 0 || d[O] !== w[T]) {
                      var R = `
` + d[O].replace(" at new ", " at ");
                      return typeof r == "function" && W.set(r, R), R;
                    }
                  while (O >= 1 && T >= 0);
                break;
              }
          }
        } finally {
          Z = !1, J.current = b, hr(), Error.prepareStackTrace = g;
        }
        var N = r ? r.displayName || r.name : "", Ue = N ? B(N) : "";
        return typeof r == "function" && W.set(r, Ue), Ue;
      }
      function Ae(r, n, o) {
        return Ce(r, !1);
      }
      function gr(r) {
        var n = r.prototype;
        return !!(n && n.isReactComponent);
      }
      function q(r, n, o) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Ce(r, gr(r));
        if (typeof r == "string")
          return B(r);
        switch (r) {
          case y:
            return B("Suspense");
          case m:
            return B("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case v:
              return Ae(r.render);
            case _:
              return q(r.type, n, o);
            case P:
              return Ae(r._render);
            case E: {
              var c = r, g = c._payload, b = c._init;
              try {
                return q(b(g), n, o);
              } catch {
              }
            }
          }
        return "";
      }
      var Re = {}, xe = L.ReactDebugCurrentFrame;
      function K(r) {
        if (r) {
          var n = r._owner, o = q(r.type, r._source, n ? n.type : null);
          xe.setExtraStackFrame(o);
        } else
          xe.setExtraStackFrame(null);
      }
      function br(r, n, o, c, g) {
        {
          var b = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var h in r)
            if (b(r, h)) {
              var d = void 0;
              try {
                if (typeof r[h] != "function") {
                  var w = Error((c || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw w.name = "Invariant Violation", w;
                }
                d = r[h](n, h, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                d = O;
              }
              d && !(d instanceof Error) && (K(g), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, h, typeof d), K(null)), d instanceof Error && !(d.message in Re) && (Re[d.message] = !0, K(g), j("Failed %s type: %s", o, d.message), K(null));
            }
        }
      }
      var z = L.ReactCurrentOwner, Q = Object.prototype.hasOwnProperty, $r = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ie, De, ee;
      ee = {};
      function mr(r) {
        if (Q.call(r, "ref")) {
          var n = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function Or(r) {
        if (Q.call(r, "key")) {
          var n = Object.getOwnPropertyDescriptor(r, "key").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Tr(r, n) {
        if (typeof r.ref == "string" && z.current && n && z.current.stateNode !== n) {
          var o = A(z.current.type);
          ee[o] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(z.current.type), r.ref), ee[o] = !0);
        }
      }
      function wr(r, n) {
        {
          var o = function() {
            Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
          };
          o.isReactWarning = !0, Object.defineProperty(r, "key", {
            get: o,
            configurable: !0
          });
        }
      }
      function jr(r, n) {
        {
          var o = function() {
            De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
          };
          o.isReactWarning = !0, Object.defineProperty(r, "ref", {
            get: o,
            configurable: !0
          });
        }
      }
      var Er = function(r, n, o, c, g, b, h) {
        var d = {
          $$typeof: i,
          type: r,
          key: n,
          ref: o,
          props: h,
          _owner: b
        };
        return d._store = {}, Object.defineProperty(d._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(d, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.defineProperty(d, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: g
        }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
      };
      function Pr(r, n, o, c, g) {
        {
          var b, h = {}, d = null, w = null;
          o !== void 0 && (d = "" + o), Or(n) && (d = "" + n.key), mr(n) && (w = n.ref, Tr(n, g));
          for (b in n)
            Q.call(n, b) && !$r.hasOwnProperty(b) && (h[b] = n[b]);
          if (r && r.defaultProps) {
            var O = r.defaultProps;
            for (b in O)
              h[b] === void 0 && (h[b] = O[b]);
          }
          if (d || w) {
            var T = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
            d && wr(h, T), w && jr(h, T);
          }
          return Er(r, d, w, g, c, z.current, h);
        }
      }
      var re = L.ReactCurrentOwner, ke = L.ReactDebugCurrentFrame;
      function M(r) {
        if (r) {
          var n = r._owner, o = q(r.type, r._source, n ? n.type : null);
          ke.setExtraStackFrame(o);
        } else
          ke.setExtraStackFrame(null);
      }
      var te;
      te = !1;
      function ae(r) {
        return typeof r == "object" && r !== null && r.$$typeof === i;
      }
      function Fe() {
        {
          if (re.current) {
            var r = A(re.current.type);
            if (r)
              return `

Check the render method of \`` + r + "`.";
          }
          return "";
        }
      }
      function Sr(r) {
        {
          if (r !== void 0) {
            var n = r.fileName.replace(/^.*[\\\/]/, ""), o = r.lineNumber;
            return `

Check your code at ` + n + ":" + o + ".";
          }
          return "";
        }
      }
      var Le = {};
      function Cr(r) {
        {
          var n = Fe();
          if (!n) {
            var o = typeof r == "string" ? r : r.displayName || r.name;
            o && (n = `

Check the top-level render call using <` + o + ">.");
          }
          return n;
        }
      }
      function Me(r, n) {
        {
          if (!r._store || r._store.validated || r.key != null)
            return;
          r._store.validated = !0;
          var o = Cr(n);
          if (Le[o])
            return;
          Le[o] = !0;
          var c = "";
          r && r._owner && r._owner !== re.current && (c = " It was passed a child from " + A(r._owner.type) + "."), M(r), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), M(null);
        }
      }
      function Ne(r, n) {
        {
          if (typeof r != "object")
            return;
          if (Array.isArray(r))
            for (var o = 0; o < r.length; o++) {
              var c = r[o];
              ae(c) && Me(c, n);
            }
          else if (ae(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var g = be(r);
            if (typeof g == "function" && g !== r.entries)
              for (var b = g.call(r), h; !(h = b.next()).done; )
                ae(h.value) && Me(h.value, n);
          }
        }
      }
      function Ar(r) {
        {
          var n = r.type;
          if (n == null || typeof n == "string")
            return;
          var o;
          if (typeof n == "function")
            o = n.propTypes;
          else if (typeof n == "object" && (n.$$typeof === v || n.$$typeof === _))
            o = n.propTypes;
          else
            return;
          if (o) {
            var c = A(n);
            br(o, r.props, "prop", c, r);
          } else if (n.PropTypes !== void 0 && !te) {
            te = !0;
            var g = A(n);
            j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
          }
          typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Rr(r) {
        {
          for (var n = Object.keys(r.props), o = 0; o < n.length; o++) {
            var c = n[o];
            if (c !== "children" && c !== "key") {
              M(r), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), M(null);
              break;
            }
          }
          r.ref !== null && (M(r), j("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
        }
      }
      function Ge(r, n, o, c, g, b) {
        {
          var h = vr(r);
          if (!h) {
            var d = "";
            (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var w = Sr(g);
            w ? d += w : d += Fe();
            var O;
            r === null ? O = "null" : Array.isArray(r) ? O = "array" : r !== void 0 && r.$$typeof === i ? (O = "<" + (A(r.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : O = typeof r, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, d);
          }
          var T = Pr(r, n, o, g, b);
          if (T == null)
            return T;
          if (h) {
            var R = n.children;
            if (R !== void 0)
              if (c)
                if (Array.isArray(R)) {
                  for (var N = 0; N < R.length; N++)
                    Ne(R[N], r);
                  Object.freeze && Object.freeze(R);
                } else
                  j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Ne(R, r);
          }
          return r === e.Fragment ? Rr(T) : Ar(T), T;
        }
      }
      function xr(r, n, o) {
        return Ge(r, n, o, !0);
      }
      function Ir(r, n, o) {
        return Ge(r, n, o, !1);
      }
      var Dr = Ir, kr = xr;
      e.jsx = Dr, e.jsxs = kr;
    }();
  }(xt)), xt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = hs() : e.exports = _s();
})(Oa);
Oa.exports.jsx;
const gs = () => {
  const e = er(!1);
  return rt(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, bs = (e) => {
  const t = er(e);
  t.current = e, rt(() => () => {
    t.current();
  }, []);
}, $s = (e) => {
  const t = gs(), [a, i] = Ha(e), u = We(
    (s) => {
      t.current && i(s);
    },
    [t]
  );
  return [a, u];
}, ms = () => {
  const e = er(), t = We((u, s) => {
    e.current = setTimeout(u, s);
  }, []), a = We(() => {
    e.current && clearTimeout(e.current);
  }, []), i = We(
    (u, s) => {
      a(), t(u, s);
    },
    [a, t]
  );
  return bs(() => {
    a();
  }), pa(
    () => ({
      set: t,
      reset: i,
      clear: a
    }),
    [a, i, t]
  );
};
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Os(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length, u = 0, s = []; ++a < i; ) {
    var l = e[a];
    t(l, a, e) && (s[u++] = l);
  }
  return s;
}
var wa = Os;
function Ts(e) {
  return function(t, a, i) {
    for (var u = -1, s = Object(t), l = i(t), f = l.length; f--; ) {
      var p = l[e ? f : ++u];
      if (a(s[p], p, s) === !1)
        break;
    }
    return t;
  };
}
var ws = Ts, js = ws, Es = js(), Ps = Es;
function Ss(e, t) {
  for (var a = -1, i = Array(e); ++a < e; )
    i[a] = t(a);
  return i;
}
var Cs = Ss, As = typeof He == "object" && He && He.Object === Object && He, ja = As, Rs = ja, xs = typeof self == "object" && self && self.Object === Object && self, Is = Rs || xs || Function("return this")(), H = Is, Ds = H, ks = Ds.Symbol, ir = ks, Dt = ir, Ea = Object.prototype, Fs = Ea.hasOwnProperty, Ls = Ea.toString, Be = Dt ? Dt.toStringTag : void 0;
function Ms(e) {
  var t = Fs.call(e, Be), a = e[Be];
  try {
    e[Be] = void 0;
    var i = !0;
  } catch {
  }
  var u = Ls.call(e);
  return i && (t ? e[Be] = a : delete e[Be]), u;
}
var Ns = Ms, Gs = Object.prototype, Us = Gs.toString;
function zs(e) {
  return Us.call(e);
}
var Bs = zs, kt = ir, Ws = Ns, qs = Bs, Ks = "[object Null]", Ys = "[object Undefined]", Ft = kt ? kt.toStringTag : void 0;
function Hs(e) {
  return e == null ? e === void 0 ? Ys : Ks : Ft && Ft in Object(e) ? Ws(e) : qs(e);
}
var qe = Hs;
function Vs(e) {
  return e != null && typeof e == "object";
}
var Ke = Vs, Js = qe, Xs = Ke, Zs = "[object Arguments]";
function Qs(e) {
  return Xs(e) && Js(e) == Zs;
}
var eu = Qs, Lt = eu, ru = Ke, Pa = Object.prototype, tu = Pa.hasOwnProperty, au = Pa.propertyIsEnumerable, nu = Lt(function() {
  return arguments;
}()) ? Lt : function(e) {
  return ru(e) && tu.call(e, "callee") && !au.call(e, "callee");
}, Sa = nu, iu = Array.isArray, V = iu, Xe = { exports: {} };
function ou() {
  return !1;
}
var su = ou;
(function(e, t) {
  var a = H, i = su, u = t && !t.nodeType && t, s = u && !0 && e && !e.nodeType && e, l = s && s.exports === u, f = l ? a.Buffer : void 0, p = f ? f.isBuffer : void 0, v = p || i;
  e.exports = v;
})(Xe, Xe.exports);
var uu = 9007199254740991, cu = /^(?:0|[1-9]\d*)$/;
function fu(e, t) {
  var a = typeof e;
  return t = t == null ? uu : t, !!t && (a == "number" || a != "symbol" && cu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ca = fu, lu = 9007199254740991;
function pu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lu;
}
var nt = pu, vu = qe, du = nt, yu = Ke, hu = "[object Arguments]", _u = "[object Array]", gu = "[object Boolean]", bu = "[object Date]", $u = "[object Error]", mu = "[object Function]", Ou = "[object Map]", Tu = "[object Number]", wu = "[object Object]", ju = "[object RegExp]", Eu = "[object Set]", Pu = "[object String]", Su = "[object WeakMap]", Cu = "[object ArrayBuffer]", Au = "[object DataView]", Ru = "[object Float32Array]", xu = "[object Float64Array]", Iu = "[object Int8Array]", Du = "[object Int16Array]", ku = "[object Int32Array]", Fu = "[object Uint8Array]", Lu = "[object Uint8ClampedArray]", Mu = "[object Uint16Array]", Nu = "[object Uint32Array]", S = {};
S[Ru] = S[xu] = S[Iu] = S[Du] = S[ku] = S[Fu] = S[Lu] = S[Mu] = S[Nu] = !0;
S[hu] = S[_u] = S[Cu] = S[gu] = S[Au] = S[bu] = S[$u] = S[mu] = S[Ou] = S[Tu] = S[wu] = S[ju] = S[Eu] = S[Pu] = S[Su] = !1;
function Gu(e) {
  return yu(e) && du(e.length) && !!S[vu(e)];
}
var Uu = Gu;
function zu(e) {
  return function(t) {
    return e(t);
  };
}
var Bu = zu, Vr = { exports: {} };
(function(e, t) {
  var a = ja, i = t && !t.nodeType && t, u = i && !0 && e && !e.nodeType && e, s = u && u.exports === i, l = s && a.process, f = function() {
    try {
      var p = u && u.require && u.require("util").types;
      return p || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = f;
})(Vr, Vr.exports);
var Wu = Uu, qu = Bu, Mt = Vr.exports, Nt = Mt && Mt.isTypedArray, Ku = Nt ? qu(Nt) : Wu, Aa = Ku, Yu = Cs, Hu = Sa, Vu = V, Ju = Xe.exports, Xu = Ca, Zu = Aa, Qu = Object.prototype, ec = Qu.hasOwnProperty;
function rc(e, t) {
  var a = Vu(e), i = !a && Hu(e), u = !a && !i && Ju(e), s = !a && !i && !u && Zu(e), l = a || i || u || s, f = l ? Yu(e.length, String) : [], p = f.length;
  for (var v in e)
    (t || ec.call(e, v)) && !(l && (v == "length" || u && (v == "offset" || v == "parent") || s && (v == "buffer" || v == "byteLength" || v == "byteOffset") || Xu(v, p))) && f.push(v);
  return f;
}
var tc = rc, ac = Object.prototype;
function nc(e) {
  var t = e && e.constructor, a = typeof t == "function" && t.prototype || ac;
  return e === a;
}
var ic = nc;
function oc(e, t) {
  return function(a) {
    return e(t(a));
  };
}
var sc = oc, uc = sc, cc = uc(Object.keys, Object), fc = cc, lc = ic, pc = fc, vc = Object.prototype, dc = vc.hasOwnProperty;
function yc(e) {
  if (!lc(e))
    return pc(e);
  var t = [];
  for (var a in Object(e))
    dc.call(e, a) && a != "constructor" && t.push(a);
  return t;
}
var hc = yc;
function _c(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var it = _c, gc = qe, bc = it, $c = "[object AsyncFunction]", mc = "[object Function]", Oc = "[object GeneratorFunction]", Tc = "[object Proxy]";
function wc(e) {
  if (!bc(e))
    return !1;
  var t = gc(e);
  return t == mc || t == Oc || t == $c || t == Tc;
}
var Ra = wc, jc = Ra, Ec = nt;
function Pc(e) {
  return e != null && Ec(e.length) && !jc(e);
}
var xa = Pc, Sc = tc, Cc = hc, Ac = xa;
function Rc(e) {
  return Ac(e) ? Sc(e) : Cc(e);
}
var ot = Rc, xc = Ps, Ic = ot;
function Dc(e, t) {
  return e && xc(e, t, Ic);
}
var kc = Dc, Fc = xa;
function Lc(e, t) {
  return function(a, i) {
    if (a == null)
      return a;
    if (!Fc(a))
      return e(a, i);
    for (var u = a.length, s = t ? u : -1, l = Object(a); (t ? s-- : ++s < u) && i(l[s], s, l) !== !1; )
      ;
    return a;
  };
}
var Mc = Lc, Nc = kc, Gc = Mc, Uc = Gc(Nc), zc = Uc, Bc = zc;
function Wc(e, t) {
  var a = [];
  return Bc(e, function(i, u, s) {
    t(i, u, s) && a.push(i);
  }), a;
}
var qc = Wc;
function Kc() {
  this.__data__ = [], this.size = 0;
}
var Yc = Kc;
function Hc(e, t) {
  return e === t || e !== e && t !== t;
}
var Ia = Hc, Vc = Ia;
function Jc(e, t) {
  for (var a = e.length; a--; )
    if (Vc(e[a][0], t))
      return a;
  return -1;
}
var or = Jc, Xc = or, Zc = Array.prototype, Qc = Zc.splice;
function ef(e) {
  var t = this.__data__, a = Xc(t, e);
  if (a < 0)
    return !1;
  var i = t.length - 1;
  return a == i ? t.pop() : Qc.call(t, a, 1), --this.size, !0;
}
var rf = ef, tf = or;
function af(e) {
  var t = this.__data__, a = tf(t, e);
  return a < 0 ? void 0 : t[a][1];
}
var nf = af, of = or;
function sf(e) {
  return of(this.__data__, e) > -1;
}
var uf = sf, cf = or;
function ff(e, t) {
  var a = this.__data__, i = cf(a, e);
  return i < 0 ? (++this.size, a.push([e, t])) : a[i][1] = t, this;
}
var lf = ff, pf = Yc, vf = rf, df = nf, yf = uf, hf = lf;
function ve(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ve.prototype.clear = pf;
ve.prototype.delete = vf;
ve.prototype.get = df;
ve.prototype.has = yf;
ve.prototype.set = hf;
var sr = ve, _f = sr;
function gf() {
  this.__data__ = new _f(), this.size = 0;
}
var bf = gf;
function $f(e) {
  var t = this.__data__, a = t.delete(e);
  return this.size = t.size, a;
}
var mf = $f;
function Of(e) {
  return this.__data__.get(e);
}
var Tf = Of;
function wf(e) {
  return this.__data__.has(e);
}
var jf = wf, Ef = H, Pf = Ef["__core-js_shared__"], Sf = Pf, Mr = Sf, Gt = function() {
  var e = /[^.]+$/.exec(Mr && Mr.keys && Mr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cf(e) {
  return !!Gt && Gt in e;
}
var Af = Cf, Rf = Function.prototype, xf = Rf.toString;
function If(e) {
  if (e != null) {
    try {
      return xf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Da = If, Df = Ra, kf = Af, Ff = it, Lf = Da, Mf = /[\\^$.*+?()[\]{}|]/g, Nf = /^\[object .+?Constructor\]$/, Gf = Function.prototype, Uf = Object.prototype, zf = Gf.toString, Bf = Uf.hasOwnProperty, Wf = RegExp(
  "^" + zf.call(Bf).replace(Mf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qf(e) {
  if (!Ff(e) || kf(e))
    return !1;
  var t = Df(e) ? Wf : Nf;
  return t.test(Lf(e));
}
var Kf = qf;
function Yf(e, t) {
  return e == null ? void 0 : e[t];
}
var Hf = Yf, Vf = Kf, Jf = Hf;
function Xf(e, t) {
  var a = Jf(e, t);
  return Vf(a) ? a : void 0;
}
var de = Xf, Zf = de, Qf = H, el = Zf(Qf, "Map"), st = el, rl = de, tl = rl(Object, "create"), ur = tl, Ut = ur;
function al() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
var nl = al;
function il(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ol = il, sl = ur, ul = "__lodash_hash_undefined__", cl = Object.prototype, fl = cl.hasOwnProperty;
function ll(e) {
  var t = this.__data__;
  if (sl) {
    var a = t[e];
    return a === ul ? void 0 : a;
  }
  return fl.call(t, e) ? t[e] : void 0;
}
var pl = ll, vl = ur, dl = Object.prototype, yl = dl.hasOwnProperty;
function hl(e) {
  var t = this.__data__;
  return vl ? t[e] !== void 0 : yl.call(t, e);
}
var _l = hl, gl = ur, bl = "__lodash_hash_undefined__";
function $l(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = gl && t === void 0 ? bl : t, this;
}
var ml = $l, Ol = nl, Tl = ol, wl = pl, jl = _l, El = ml;
function ye(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ye.prototype.clear = Ol;
ye.prototype.delete = Tl;
ye.prototype.get = wl;
ye.prototype.has = jl;
ye.prototype.set = El;
var Pl = ye, zt = Pl, Sl = sr, Cl = st;
function Al() {
  this.size = 0, this.__data__ = {
    hash: new zt(),
    map: new (Cl || Sl)(),
    string: new zt()
  };
}
var Rl = Al;
function xl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Il = xl, Dl = Il;
function kl(e, t) {
  var a = e.__data__;
  return Dl(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
var cr = kl, Fl = cr;
function Ll(e) {
  var t = Fl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ml = Ll, Nl = cr;
function Gl(e) {
  return Nl(this, e).get(e);
}
var Ul = Gl, zl = cr;
function Bl(e) {
  return zl(this, e).has(e);
}
var Wl = Bl, ql = cr;
function Kl(e, t) {
  var a = ql(this, e), i = a.size;
  return a.set(e, t), this.size += a.size == i ? 0 : 1, this;
}
var Yl = Kl, Hl = Rl, Vl = Ml, Jl = Ul, Xl = Wl, Zl = Yl;
function he(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
he.prototype.clear = Hl;
he.prototype.delete = Vl;
he.prototype.get = Jl;
he.prototype.has = Xl;
he.prototype.set = Zl;
var ut = he, Ql = sr, ep = st, rp = ut, tp = 200;
function ap(e, t) {
  var a = this.__data__;
  if (a instanceof Ql) {
    var i = a.__data__;
    if (!ep || i.length < tp - 1)
      return i.push([e, t]), this.size = ++a.size, this;
    a = this.__data__ = new rp(i);
  }
  return a.set(e, t), this.size = a.size, this;
}
var np = ap, ip = sr, op = bf, sp = mf, up = Tf, cp = jf, fp = np;
function _e(e) {
  var t = this.__data__ = new ip(e);
  this.size = t.size;
}
_e.prototype.clear = op;
_e.prototype.delete = sp;
_e.prototype.get = up;
_e.prototype.has = cp;
_e.prototype.set = fp;
var ka = _e, lp = "__lodash_hash_undefined__";
function pp(e) {
  return this.__data__.set(e, lp), this;
}
var vp = pp;
function dp(e) {
  return this.__data__.has(e);
}
var yp = dp, hp = ut, _p = vp, gp = yp;
function Ze(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.__data__ = new hp(); ++t < a; )
    this.add(e[t]);
}
Ze.prototype.add = Ze.prototype.push = _p;
Ze.prototype.has = gp;
var bp = Ze;
function $p(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i; )
    if (t(e[a], a, e))
      return !0;
  return !1;
}
var mp = $p;
function Op(e, t) {
  return e.has(t);
}
var Tp = Op, wp = bp, jp = mp, Ep = Tp, Pp = 1, Sp = 2;
function Cp(e, t, a, i, u, s) {
  var l = a & Pp, f = e.length, p = t.length;
  if (f != p && !(l && p > f))
    return !1;
  var v = s.get(e), y = s.get(t);
  if (v && y)
    return v == t && y == e;
  var m = -1, _ = !0, E = a & Sp ? new wp() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < f; ) {
    var P = e[m], C = t[m];
    if (i)
      var I = l ? i(C, P, m, t, e, s) : i(P, C, m, e, t, s);
    if (I !== void 0) {
      if (I)
        continue;
      _ = !1;
      break;
    }
    if (E) {
      if (!jp(t, function(D, k) {
        if (!Ep(E, k) && (P === D || u(P, D, a, i, s)))
          return E.push(k);
      })) {
        _ = !1;
        break;
      }
    } else if (!(P === C || u(P, C, a, i, s))) {
      _ = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), _;
}
var Fa = Cp, Ap = H, Rp = Ap.Uint8Array, xp = Rp;
function Ip(e) {
  var t = -1, a = Array(e.size);
  return e.forEach(function(i, u) {
    a[++t] = [u, i];
  }), a;
}
var Dp = Ip;
function kp(e) {
  var t = -1, a = Array(e.size);
  return e.forEach(function(i) {
    a[++t] = i;
  }), a;
}
var Fp = kp, Bt = ir, Wt = xp, Lp = Ia, Mp = Fa, Np = Dp, Gp = Fp, Up = 1, zp = 2, Bp = "[object Boolean]", Wp = "[object Date]", qp = "[object Error]", Kp = "[object Map]", Yp = "[object Number]", Hp = "[object RegExp]", Vp = "[object Set]", Jp = "[object String]", Xp = "[object Symbol]", Zp = "[object ArrayBuffer]", Qp = "[object DataView]", qt = Bt ? Bt.prototype : void 0, Nr = qt ? qt.valueOf : void 0;
function ev(e, t, a, i, u, s, l) {
  switch (a) {
    case Qp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Zp:
      return !(e.byteLength != t.byteLength || !s(new Wt(e), new Wt(t)));
    case Bp:
    case Wp:
    case Yp:
      return Lp(+e, +t);
    case qp:
      return e.name == t.name && e.message == t.message;
    case Hp:
    case Jp:
      return e == t + "";
    case Kp:
      var f = Np;
    case Vp:
      var p = i & Up;
      if (f || (f = Gp), e.size != t.size && !p)
        return !1;
      var v = l.get(e);
      if (v)
        return v == t;
      i |= zp, l.set(e, t);
      var y = Mp(f(e), f(t), i, u, s, l);
      return l.delete(e), y;
    case Xp:
      if (Nr)
        return Nr.call(e) == Nr.call(t);
  }
  return !1;
}
var rv = ev;
function tv(e, t) {
  for (var a = -1, i = t.length, u = e.length; ++a < i; )
    e[u + a] = t[a];
  return e;
}
var av = tv, nv = av, iv = V;
function ov(e, t, a) {
  var i = t(e);
  return iv(e) ? i : nv(i, a(e));
}
var sv = ov;
function uv() {
  return [];
}
var cv = uv, fv = wa, lv = cv, pv = Object.prototype, vv = pv.propertyIsEnumerable, Kt = Object.getOwnPropertySymbols, dv = Kt ? function(e) {
  return e == null ? [] : (e = Object(e), fv(Kt(e), function(t) {
    return vv.call(e, t);
  }));
} : lv, yv = dv, hv = sv, _v = yv, gv = ot;
function bv(e) {
  return hv(e, gv, _v);
}
var $v = bv, Yt = $v, mv = 1, Ov = Object.prototype, Tv = Ov.hasOwnProperty;
function wv(e, t, a, i, u, s) {
  var l = a & mv, f = Yt(e), p = f.length, v = Yt(t), y = v.length;
  if (p != y && !l)
    return !1;
  for (var m = p; m--; ) {
    var _ = f[m];
    if (!(l ? _ in t : Tv.call(t, _)))
      return !1;
  }
  var E = s.get(e), P = s.get(t);
  if (E && P)
    return E == t && P == e;
  var C = !0;
  s.set(e, t), s.set(t, e);
  for (var I = l; ++m < p; ) {
    _ = f[m];
    var D = e[_], k = t[_];
    if (i)
      var $ = l ? i(k, D, _, t, e, s) : i(D, k, _, e, t, s);
    if (!($ === void 0 ? D === k || u(D, k, a, i, s) : $)) {
      C = !1;
      break;
    }
    I || (I = _ == "constructor");
  }
  if (C && !I) {
    var F = e.constructor, G = t.constructor;
    F != G && "constructor" in e && "constructor" in t && !(typeof F == "function" && F instanceof F && typeof G == "function" && G instanceof G) && (C = !1);
  }
  return s.delete(e), s.delete(t), C;
}
var jv = wv, Ev = de, Pv = H, Sv = Ev(Pv, "DataView"), Cv = Sv, Av = de, Rv = H, xv = Av(Rv, "Promise"), Iv = xv, Dv = de, kv = H, Fv = Dv(kv, "Set"), Lv = Fv, Mv = de, Nv = H, Gv = Mv(Nv, "WeakMap"), Uv = Gv, Jr = Cv, Xr = st, Zr = Iv, Qr = Lv, et = Uv, La = qe, ge = Da, Ht = "[object Map]", zv = "[object Object]", Vt = "[object Promise]", Jt = "[object Set]", Xt = "[object WeakMap]", Zt = "[object DataView]", Bv = ge(Jr), Wv = ge(Xr), qv = ge(Zr), Kv = ge(Qr), Yv = ge(et), ne = La;
(Jr && ne(new Jr(new ArrayBuffer(1))) != Zt || Xr && ne(new Xr()) != Ht || Zr && ne(Zr.resolve()) != Vt || Qr && ne(new Qr()) != Jt || et && ne(new et()) != Xt) && (ne = function(e) {
  var t = La(e), a = t == zv ? e.constructor : void 0, i = a ? ge(a) : "";
  if (i)
    switch (i) {
      case Bv:
        return Zt;
      case Wv:
        return Ht;
      case qv:
        return Vt;
      case Kv:
        return Jt;
      case Yv:
        return Xt;
    }
  return t;
});
var Hv = ne, Gr = ka, Vv = Fa, Jv = rv, Xv = jv, Qt = Hv, ea = V, ra = Xe.exports, Zv = Aa, Qv = 1, ta = "[object Arguments]", aa = "[object Array]", Ve = "[object Object]", ed = Object.prototype, na = ed.hasOwnProperty;
function rd(e, t, a, i, u, s) {
  var l = ea(e), f = ea(t), p = l ? aa : Qt(e), v = f ? aa : Qt(t);
  p = p == ta ? Ve : p, v = v == ta ? Ve : v;
  var y = p == Ve, m = v == Ve, _ = p == v;
  if (_ && ra(e)) {
    if (!ra(t))
      return !1;
    l = !0, y = !1;
  }
  if (_ && !y)
    return s || (s = new Gr()), l || Zv(e) ? Vv(e, t, a, i, u, s) : Jv(e, t, p, a, i, u, s);
  if (!(a & Qv)) {
    var E = y && na.call(e, "__wrapped__"), P = m && na.call(t, "__wrapped__");
    if (E || P) {
      var C = E ? e.value() : e, I = P ? t.value() : t;
      return s || (s = new Gr()), u(C, I, a, i, s);
    }
  }
  return _ ? (s || (s = new Gr()), Xv(e, t, a, i, u, s)) : !1;
}
var td = rd, ad = td, ia = Ke;
function Ma(e, t, a, i, u) {
  return e === t ? !0 : e == null || t == null || !ia(e) && !ia(t) ? e !== e && t !== t : ad(e, t, a, i, Ma, u);
}
var Na = Ma, nd = ka, id = Na, od = 1, sd = 2;
function ud(e, t, a, i) {
  var u = a.length, s = u, l = !i;
  if (e == null)
    return !s;
  for (e = Object(e); u--; ) {
    var f = a[u];
    if (l && f[2] ? f[1] !== e[f[0]] : !(f[0] in e))
      return !1;
  }
  for (; ++u < s; ) {
    f = a[u];
    var p = f[0], v = e[p], y = f[1];
    if (l && f[2]) {
      if (v === void 0 && !(p in e))
        return !1;
    } else {
      var m = new nd();
      if (i)
        var _ = i(v, y, p, e, t, m);
      if (!(_ === void 0 ? id(y, v, od | sd, i, m) : _))
        return !1;
    }
  }
  return !0;
}
var cd = ud, fd = it;
function ld(e) {
  return e === e && !fd(e);
}
var Ga = ld, pd = Ga, vd = ot;
function dd(e) {
  for (var t = vd(e), a = t.length; a--; ) {
    var i = t[a], u = e[i];
    t[a] = [i, u, pd(u)];
  }
  return t;
}
var yd = dd;
function hd(e, t) {
  return function(a) {
    return a == null ? !1 : a[e] === t && (t !== void 0 || e in Object(a));
  };
}
var Ua = hd, _d = cd, gd = yd, bd = Ua;
function $d(e) {
  var t = gd(e);
  return t.length == 1 && t[0][2] ? bd(t[0][0], t[0][1]) : function(a) {
    return a === e || _d(a, e, t);
  };
}
var md = $d, Od = qe, Td = Ke, wd = "[object Symbol]";
function jd(e) {
  return typeof e == "symbol" || Td(e) && Od(e) == wd;
}
var ct = jd, Ed = V, Pd = ct, Sd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cd = /^\w*$/;
function Ad(e, t) {
  if (Ed(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || Pd(e) ? !0 : Cd.test(e) || !Sd.test(e) || t != null && e in Object(t);
}
var ft = Ad, za = ut, Rd = "Expected a function";
function lt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Rd);
  var a = function() {
    var i = arguments, u = t ? t.apply(this, i) : i[0], s = a.cache;
    if (s.has(u))
      return s.get(u);
    var l = e.apply(this, i);
    return a.cache = s.set(u, l) || s, l;
  };
  return a.cache = new (lt.Cache || za)(), a;
}
lt.Cache = za;
var xd = lt, Id = xd, Dd = 500;
function kd(e) {
  var t = Id(e, function(i) {
    return a.size === Dd && a.clear(), i;
  }), a = t.cache;
  return t;
}
var Fd = kd, Ld = Fd, Md = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nd = /\\(\\)?/g, Gd = Ld(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Md, function(a, i, u, s) {
    t.push(u ? s.replace(Nd, "$1") : i || a);
  }), t;
}), Ud = Gd;
function zd(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length, u = Array(i); ++a < i; )
    u[a] = t(e[a], a, e);
  return u;
}
var Bd = zd, oa = ir, Wd = Bd, qd = V, Kd = ct, Yd = 1 / 0, sa = oa ? oa.prototype : void 0, ua = sa ? sa.toString : void 0;
function Ba(e) {
  if (typeof e == "string")
    return e;
  if (qd(e))
    return Wd(e, Ba) + "";
  if (Kd(e))
    return ua ? ua.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Yd ? "-0" : t;
}
var Hd = Ba, Vd = Hd;
function Jd(e) {
  return e == null ? "" : Vd(e);
}
var Wa = Jd, Xd = V, Zd = ft, Qd = Ud, ey = Wa;
function ry(e, t) {
  return Xd(e) ? e : Zd(e, t) ? [e] : Qd(ey(e));
}
var qa = ry, ty = ct, ay = 1 / 0;
function ny(e) {
  if (typeof e == "string" || ty(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -ay ? "-0" : t;
}
var fr = ny, iy = qa, oy = fr;
function sy(e, t) {
  t = iy(t, e);
  for (var a = 0, i = t.length; e != null && a < i; )
    e = e[oy(t[a++])];
  return a && a == i ? e : void 0;
}
var Ka = sy, uy = Ka;
function cy(e, t, a) {
  var i = e == null ? void 0 : uy(e, t);
  return i === void 0 ? a : i;
}
var fy = cy;
function ly(e, t) {
  return e != null && t in Object(e);
}
var py = ly, vy = qa, dy = Sa, yy = V, hy = Ca, _y = nt, gy = fr;
function by(e, t, a) {
  t = vy(t, e);
  for (var i = -1, u = t.length, s = !1; ++i < u; ) {
    var l = gy(t[i]);
    if (!(s = e != null && a(e, l)))
      break;
    e = e[l];
  }
  return s || ++i != u ? s : (u = e == null ? 0 : e.length, !!u && _y(u) && hy(l, u) && (yy(e) || dy(e)));
}
var $y = by, my = py, Oy = $y;
function Ty(e, t) {
  return e != null && Oy(e, t, my);
}
var wy = Ty, jy = Na, Ey = fy, Py = wy, Sy = ft, Cy = Ga, Ay = Ua, Ry = fr, xy = 1, Iy = 2;
function Dy(e, t) {
  return Sy(e) && Cy(t) ? Ay(Ry(e), t) : function(a) {
    var i = Ey(a, e);
    return i === void 0 && i === t ? Py(a, e) : jy(t, i, xy | Iy);
  };
}
var ky = Dy;
function Fy(e) {
  return e;
}
var Ly = Fy;
function My(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Ny = My, Gy = Ka;
function Uy(e) {
  return function(t) {
    return Gy(t, e);
  };
}
var zy = Uy, By = Ny, Wy = zy, qy = ft, Ky = fr;
function Yy(e) {
  return qy(e) ? By(Ky(e)) : Wy(e);
}
var Hy = Yy, Vy = md, Jy = ky, Xy = Ly, Zy = V, Qy = Hy;
function eh(e) {
  return typeof e == "function" ? e : e == null ? Xy : typeof e == "object" ? Zy(e) ? Jy(e[0], e[1]) : Vy(e) : Qy(e);
}
var rh = eh, th = wa, ah = qc, nh = rh, ih = V;
function oh(e, t) {
  var a = ih(e) ? th : ah;
  return a(e, nh(t));
}
var sh = oh, uh = Wa, ch = 0;
function fh(e) {
  var t = ++ch;
  return uh(e) + t;
}
var lh = fh, pt = { exports: {} }, se = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ur, ca;
function Ya() {
  if (ca)
    return Ur;
  ca = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var l = {}, f = 0; f < 10; f++)
        l["_" + String.fromCharCode(f)] = f;
      var p = Object.getOwnPropertyNames(l).map(function(y) {
        return l[y];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var v = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        v[y] = y;
      }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ur = u() ? Object.assign : function(s, l) {
    for (var f, p = i(s), v, y = 1; y < arguments.length; y++) {
      f = Object(arguments[y]);
      for (var m in f)
        t.call(f, m) && (p[m] = f[m]);
      if (e) {
        v = e(f);
        for (var _ = 0; _ < v.length; _++)
          a.call(f, v[_]) && (p[v[_]] = f[v[_]]);
      }
    }
    return p;
  }, Ur;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function ph() {
  if (fa)
    return se;
  fa = 1, Ya();
  var e = Qe, t = 60103;
  if (se.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var a = Symbol.for;
    t = a("react.element"), se.Fragment = a("react.fragment");
  }
  var i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, p, v) {
    var y, m = {}, _ = null, E = null;
    v !== void 0 && (_ = "" + v), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (y in p)
      u.call(p, y) && !s.hasOwnProperty(y) && (m[y] = p[y]);
    if (f && f.defaultProps)
      for (y in p = f.defaultProps, p)
        m[y] === void 0 && (m[y] = p[y]);
    return { $$typeof: t, type: f, key: _, ref: E, props: m, _owner: i.current };
  }
  return se.jsx = l, se.jsxs = l, se;
}
var zr = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function vh() {
  return la || (la = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = Qe, a = Ya(), i = 60103, u = 60106;
      e.Fragment = 60107;
      var s = 60108, l = 60114, f = 60109, p = 60110, v = 60112, y = 60113, m = 60120, _ = 60115, E = 60116, P = 60121, C = 60122, I = 60117, D = 60129, k = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var $ = Symbol.for;
        i = $("react.element"), u = $("react.portal"), e.Fragment = $("react.fragment"), s = $("react.strict_mode"), l = $("react.profiler"), f = $("react.provider"), p = $("react.context"), v = $("react.forward_ref"), y = $("react.suspense"), m = $("react.suspense_list"), _ = $("react.memo"), E = $("react.lazy"), P = $("react.block"), C = $("react.server.block"), I = $("react.fundamental"), $("react.scope"), $("react.opaque.id"), D = $("react.debug_trace_mode"), $("react.offscreen"), k = $("react.legacy_hidden");
      }
      var F = typeof Symbol == "function" && Symbol.iterator, G = "@@iterator";
      function be(r) {
        if (r === null || typeof r != "object")
          return null;
        var n = F && r[F] || r[G];
        return typeof n == "function" ? n : null;
      }
      var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function j(r) {
        {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
            o[c - 1] = arguments[c];
          lr("error", r, o);
        }
      }
      function lr(r, n, o) {
        {
          var c = L.ReactDebugCurrentFrame, g = c.getStackAddendum();
          g !== "" && (n += "%s", o = o.concat([g]));
          var b = o.map(function(h) {
            return "" + h;
          });
          b.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, b);
        }
      }
      var pr = !1;
      function vr(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === e.Fragment || r === l || r === D || r === s || r === y || r === m || r === k || pr || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === _ || r.$$typeof === f || r.$$typeof === p || r.$$typeof === v || r.$$typeof === I || r.$$typeof === P || r[0] === C));
      }
      function dr(r, n, o) {
        var c = n.displayName || n.name || "";
        return r.displayName || (c !== "" ? o + "(" + c + ")" : o);
      }
      function $e(r) {
        return r.displayName || "Context";
      }
      function A(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && j("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case e.Fragment:
            return "Fragment";
          case u:
            return "Portal";
          case l:
            return "Profiler";
          case s:
            return "StrictMode";
          case y:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case p:
              var n = r;
              return $e(n) + ".Consumer";
            case f:
              var o = r;
              return $e(o._context) + ".Provider";
            case v:
              return dr(r, r.render, "ForwardRef");
            case _:
              return A(r.type);
            case P:
              return A(r._render);
            case E: {
              var c = r, g = c._payload, b = c._init;
              try {
                return A(b(g));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var U = 0, me, Oe, Te, we, je, Ee, Pe;
      function Se() {
      }
      Se.__reactDisabledLog = !0;
      function yr() {
        {
          if (U === 0) {
            me = console.log, Oe = console.info, Te = console.warn, we = console.error, je = console.group, Ee = console.groupCollapsed, Pe = console.groupEnd;
            var r = {
              configurable: !0,
              enumerable: !0,
              value: Se,
              writable: !0
            };
            Object.defineProperties(console, {
              info: r,
              log: r,
              warn: r,
              error: r,
              group: r,
              groupCollapsed: r,
              groupEnd: r
            });
          }
          U++;
        }
      }
      function hr() {
        {
          if (U--, U === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: a({}, r, {
                value: me
              }),
              info: a({}, r, {
                value: Oe
              }),
              warn: a({}, r, {
                value: Te
              }),
              error: a({}, r, {
                value: we
              }),
              group: a({}, r, {
                value: je
              }),
              groupCollapsed: a({}, r, {
                value: Ee
              }),
              groupEnd: a({}, r, {
                value: Pe
              })
            });
          }
          U < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var J = L.ReactCurrentDispatcher, X;
      function B(r, n, o) {
        {
          if (X === void 0)
            try {
              throw Error();
            } catch (g) {
              var c = g.stack.trim().match(/\n( *(at )?)/);
              X = c && c[1] || "";
            }
          return `
` + X + r;
        }
      }
      var Z = !1, W;
      {
        var _r = typeof WeakMap == "function" ? WeakMap : Map;
        W = new _r();
      }
      function Ce(r, n) {
        if (!r || Z)
          return "";
        {
          var o = W.get(r);
          if (o !== void 0)
            return o;
        }
        var c;
        Z = !0;
        var g = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var b;
        b = J.current, J.current = null, yr();
        try {
          if (n) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (x) {
                c = x;
              }
              Reflect.construct(r, [], h);
            } else {
              try {
                h.call();
              } catch (x) {
                c = x;
              }
              r.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              c = x;
            }
            r();
          }
        } catch (x) {
          if (x && c && typeof x.stack == "string") {
            for (var d = x.stack.split(`
`), w = c.stack.split(`
`), O = d.length - 1, T = w.length - 1; O >= 1 && T >= 0 && d[O] !== w[T]; )
              T--;
            for (; O >= 1 && T >= 0; O--, T--)
              if (d[O] !== w[T]) {
                if (O !== 1 || T !== 1)
                  do
                    if (O--, T--, T < 0 || d[O] !== w[T]) {
                      var R = `
` + d[O].replace(" at new ", " at ");
                      return typeof r == "function" && W.set(r, R), R;
                    }
                  while (O >= 1 && T >= 0);
                break;
              }
          }
        } finally {
          Z = !1, J.current = b, hr(), Error.prepareStackTrace = g;
        }
        var N = r ? r.displayName || r.name : "", Ue = N ? B(N) : "";
        return typeof r == "function" && W.set(r, Ue), Ue;
      }
      function Ae(r, n, o) {
        return Ce(r, !1);
      }
      function gr(r) {
        var n = r.prototype;
        return !!(n && n.isReactComponent);
      }
      function q(r, n, o) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Ce(r, gr(r));
        if (typeof r == "string")
          return B(r);
        switch (r) {
          case y:
            return B("Suspense");
          case m:
            return B("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case v:
              return Ae(r.render);
            case _:
              return q(r.type, n, o);
            case P:
              return Ae(r._render);
            case E: {
              var c = r, g = c._payload, b = c._init;
              try {
                return q(b(g), n, o);
              } catch {
              }
            }
          }
        return "";
      }
      var Re = {}, xe = L.ReactDebugCurrentFrame;
      function K(r) {
        if (r) {
          var n = r._owner, o = q(r.type, r._source, n ? n.type : null);
          xe.setExtraStackFrame(o);
        } else
          xe.setExtraStackFrame(null);
      }
      function br(r, n, o, c, g) {
        {
          var b = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var h in r)
            if (b(r, h)) {
              var d = void 0;
              try {
                if (typeof r[h] != "function") {
                  var w = Error((c || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw w.name = "Invariant Violation", w;
                }
                d = r[h](n, h, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                d = O;
              }
              d && !(d instanceof Error) && (K(g), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, h, typeof d), K(null)), d instanceof Error && !(d.message in Re) && (Re[d.message] = !0, K(g), j("Failed %s type: %s", o, d.message), K(null));
            }
        }
      }
      var z = L.ReactCurrentOwner, Q = Object.prototype.hasOwnProperty, $r = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ie, De, ee;
      ee = {};
      function mr(r) {
        if (Q.call(r, "ref")) {
          var n = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function Or(r) {
        if (Q.call(r, "key")) {
          var n = Object.getOwnPropertyDescriptor(r, "key").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Tr(r, n) {
        if (typeof r.ref == "string" && z.current && n && z.current.stateNode !== n) {
          var o = A(z.current.type);
          ee[o] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(z.current.type), r.ref), ee[o] = !0);
        }
      }
      function wr(r, n) {
        {
          var o = function() {
            Ie || (Ie = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
          };
          o.isReactWarning = !0, Object.defineProperty(r, "key", {
            get: o,
            configurable: !0
          });
        }
      }
      function jr(r, n) {
        {
          var o = function() {
            De || (De = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
          };
          o.isReactWarning = !0, Object.defineProperty(r, "ref", {
            get: o,
            configurable: !0
          });
        }
      }
      var Er = function(r, n, o, c, g, b, h) {
        var d = {
          $$typeof: i,
          type: r,
          key: n,
          ref: o,
          props: h,
          _owner: b
        };
        return d._store = {}, Object.defineProperty(d._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(d, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.defineProperty(d, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: g
        }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
      };
      function Pr(r, n, o, c, g) {
        {
          var b, h = {}, d = null, w = null;
          o !== void 0 && (d = "" + o), Or(n) && (d = "" + n.key), mr(n) && (w = n.ref, Tr(n, g));
          for (b in n)
            Q.call(n, b) && !$r.hasOwnProperty(b) && (h[b] = n[b]);
          if (r && r.defaultProps) {
            var O = r.defaultProps;
            for (b in O)
              h[b] === void 0 && (h[b] = O[b]);
          }
          if (d || w) {
            var T = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
            d && wr(h, T), w && jr(h, T);
          }
          return Er(r, d, w, g, c, z.current, h);
        }
      }
      var re = L.ReactCurrentOwner, ke = L.ReactDebugCurrentFrame;
      function M(r) {
        if (r) {
          var n = r._owner, o = q(r.type, r._source, n ? n.type : null);
          ke.setExtraStackFrame(o);
        } else
          ke.setExtraStackFrame(null);
      }
      var te;
      te = !1;
      function ae(r) {
        return typeof r == "object" && r !== null && r.$$typeof === i;
      }
      function Fe() {
        {
          if (re.current) {
            var r = A(re.current.type);
            if (r)
              return `

Check the render method of \`` + r + "`.";
          }
          return "";
        }
      }
      function Sr(r) {
        {
          if (r !== void 0) {
            var n = r.fileName.replace(/^.*[\\\/]/, ""), o = r.lineNumber;
            return `

Check your code at ` + n + ":" + o + ".";
          }
          return "";
        }
      }
      var Le = {};
      function Cr(r) {
        {
          var n = Fe();
          if (!n) {
            var o = typeof r == "string" ? r : r.displayName || r.name;
            o && (n = `

Check the top-level render call using <` + o + ">.");
          }
          return n;
        }
      }
      function Me(r, n) {
        {
          if (!r._store || r._store.validated || r.key != null)
            return;
          r._store.validated = !0;
          var o = Cr(n);
          if (Le[o])
            return;
          Le[o] = !0;
          var c = "";
          r && r._owner && r._owner !== re.current && (c = " It was passed a child from " + A(r._owner.type) + "."), M(r), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), M(null);
        }
      }
      function Ne(r, n) {
        {
          if (typeof r != "object")
            return;
          if (Array.isArray(r))
            for (var o = 0; o < r.length; o++) {
              var c = r[o];
              ae(c) && Me(c, n);
            }
          else if (ae(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var g = be(r);
            if (typeof g == "function" && g !== r.entries)
              for (var b = g.call(r), h; !(h = b.next()).done; )
                ae(h.value) && Me(h.value, n);
          }
        }
      }
      function Ar(r) {
        {
          var n = r.type;
          if (n == null || typeof n == "string")
            return;
          var o;
          if (typeof n == "function")
            o = n.propTypes;
          else if (typeof n == "object" && (n.$$typeof === v || n.$$typeof === _))
            o = n.propTypes;
          else
            return;
          if (o) {
            var c = A(n);
            br(o, r.props, "prop", c, r);
          } else if (n.PropTypes !== void 0 && !te) {
            te = !0;
            var g = A(n);
            j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
          }
          typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Rr(r) {
        {
          for (var n = Object.keys(r.props), o = 0; o < n.length; o++) {
            var c = n[o];
            if (c !== "children" && c !== "key") {
              M(r), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), M(null);
              break;
            }
          }
          r.ref !== null && (M(r), j("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
        }
      }
      function Ge(r, n, o, c, g, b) {
        {
          var h = vr(r);
          if (!h) {
            var d = "";
            (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var w = Sr(g);
            w ? d += w : d += Fe();
            var O;
            r === null ? O = "null" : Array.isArray(r) ? O = "array" : r !== void 0 && r.$$typeof === i ? (O = "<" + (A(r.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : O = typeof r, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, d);
          }
          var T = Pr(r, n, o, g, b);
          if (T == null)
            return T;
          if (h) {
            var R = n.children;
            if (R !== void 0)
              if (c)
                if (Array.isArray(R)) {
                  for (var N = 0; N < R.length; N++)
                    Ne(R[N], r);
                  Object.freeze && Object.freeze(R);
                } else
                  j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Ne(R, r);
          }
          return r === e.Fragment ? Rr(T) : Ar(T), T;
        }
      }
      function xr(r, n, o) {
        return Ge(r, n, o, !0);
      }
      function Ir(r, n, o) {
        return Ge(r, n, o, !1);
      }
      var Dr = Ir, kr = xr;
      e.jsx = Dr, e.jsxs = kr;
    }();
  }(zr)), zr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ph() : e.exports = vh();
})(pt);
const dh = pt.exports.jsx, yh = pt.exports.jsxs, _h = (e, t) => {
  const a = Va({
    show: () => ({
      hide: () => {
      }
    })
  });
  return [() => {
    const s = Ja(a);
    if (s === void 0)
      throw new Error("Couldn't find a context object. Is your component inside StackProvider?");
    return s;
  }, (s) => {
    const {
      defaultDuration: l,
      onRef: f,
      children: p
    } = s, v = ms(), y = er(f);
    y.current = f;
    const [m, _] = $s([]), E = We((C) => {
      var $, F;
      const I = lh("stack-item:"), D = {
        ...C,
        id: I
      };
      _((G) => [...G, D]);
      const k = () => {
        _((G) => sh(G, (be) => be.id !== I));
      };
      return D.duration !== 0 && v.set(k, (F = ($ = D.duration) != null ? $ : l) != null ? F : t.defaultDuration), {
        hide: k
      };
    }, [l, _, v]), P = pa(() => ({
      show: E
    }), [E]);
    return rt(() => {
      var C;
      (C = y.current) == null || C.call(y, P);
    }, [P]), /* @__PURE__ */ yh(a.Provider, {
      value: P,
      children: [p, /* @__PURE__ */ dh(e, {
        stack: m
      })]
    });
  }];
};
export {
  _h as createStackContext
};
