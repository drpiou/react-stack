import F, { createContext as Wa, useCallback as Ka, useContext as Ha } from "react";
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qa = typeof Ve == "object" && Ve && Ve.Object === Object && Ve, la = qa, Ya = la, Va = typeof self == "object" && self && self.Object === Object && self, Ja = Ya || Va || Function("return this")(), K = Ja, Xa = K, Za = Xa.Symbol, tr = Za, dt = tr, pa = Object.prototype, Qa = pa.hasOwnProperty, en = pa.toString, ze = dt ? dt.toStringTag : void 0;
function rn(e) {
  var t = Qa.call(e, ze), a = e[ze];
  try {
    e[ze] = void 0;
    var o = !0;
  } catch {
  }
  var u = en.call(e);
  return o && (t ? e[ze] = a : delete e[ze]), u;
}
var tn = rn, an = Object.prototype, nn = an.toString;
function on(e) {
  return nn.call(e);
}
var sn = on, ht = tr, un = tn, cn = sn, fn = "[object Null]", ln = "[object Undefined]", _t = ht ? ht.toStringTag : void 0;
function pn(e) {
  return e == null ? e === void 0 ? ln : fn : _t && _t in Object(e) ? un(e) : cn(e);
}
var nt = pn;
function vn(e) {
  return e != null && typeof e == "object";
}
var va = vn, yn = Function.prototype, dn = yn.toString;
dn.call(Object);
var hn = nt, _n = va, gn = "[object Arguments]";
function bn(e) {
  return _n(e) && hn(e) == gn;
}
var mn = bn, gt = mn, $n = va, ya = Object.prototype, Tn = ya.hasOwnProperty, Sn = ya.propertyIsEnumerable;
gt(function() {
  return arguments;
}());
var Qe = { exports: {} };
function wn() {
  return !1;
}
var On = wn;
(function(e, t) {
  var a = K, o = On, u = t && !t.nodeType && t, s = u && !0 && e && !e.nodeType && e, l = s && s.exports === u, d = l ? a.Buffer : void 0, p = d ? d.isBuffer : void 0, _ = p || o;
  e.exports = _;
})(Qe, Qe.exports);
var Hr = { exports: {} };
(function(e, t) {
  var a = la, o = t && !t.nodeType && t, u = o && !0 && e && !e.nodeType && e, s = u && u.exports === o, l = s && a.process, d = function() {
    try {
      var p = u && u.require && u.require("util").types;
      return p || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = d;
})(Hr, Hr.exports);
var bt = Hr.exports;
bt && bt.isTypedArray;
Qe.exports;
function En(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var da = En, Cn = nt, Pn = da, Rn = "[object AsyncFunction]", jn = "[object Function]", An = "[object GeneratorFunction]", xn = "[object Proxy]";
function In(e) {
  if (!Pn(e))
    return !1;
  var t = Cn(e);
  return t == jn || t == An || t == Rn || t == xn;
}
var Dn = In;
function Fn() {
  this.__data__ = [], this.size = 0;
}
var kn = Fn;
function Mn(e, t) {
  return e === t || e !== e && t !== t;
}
var Ln = Mn, Nn = Ln;
function Gn(e, t) {
  for (var a = e.length; a--; )
    if (Nn(e[a][0], t))
      return a;
  return -1;
}
var ar = Gn, Un = ar, zn = Array.prototype, Bn = zn.splice;
function Wn(e) {
  var t = this.__data__, a = Un(t, e);
  if (a < 0)
    return !1;
  var o = t.length - 1;
  return a == o ? t.pop() : Bn.call(t, a, 1), --this.size, !0;
}
var Kn = Wn, Hn = ar;
function qn(e) {
  var t = this.__data__, a = Hn(t, e);
  return a < 0 ? void 0 : t[a][1];
}
var Yn = qn, Vn = ar;
function Jn(e) {
  return Vn(this.__data__, e) > -1;
}
var Xn = Jn, Zn = ar;
function Qn(e, t) {
  var a = this.__data__, o = Zn(a, e);
  return o < 0 ? (++this.size, a.push([e, t])) : a[o][1] = t, this;
}
var eo = Qn, ro = kn, to = Kn, ao = Yn, no = Xn, oo = eo;
function se(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
se.prototype.clear = ro;
se.prototype.delete = to;
se.prototype.get = ao;
se.prototype.has = no;
se.prototype.set = oo;
var io = se, so = K, uo = so["__core-js_shared__"], co = uo, zr = co, mt = function() {
  var e = /[^.]+$/.exec(zr && zr.keys && zr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fo(e) {
  return !!mt && mt in e;
}
var lo = fo, po = Function.prototype, vo = po.toString;
function yo(e) {
  if (e != null) {
    try {
      return vo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ha = yo, ho = Dn, _o = lo, go = da, bo = ha, mo = /[\\^$.*+?()[\]{}|]/g, $o = /^\[object .+?Constructor\]$/, To = Function.prototype, So = Object.prototype, wo = To.toString, Oo = So.hasOwnProperty, Eo = RegExp(
  "^" + wo.call(Oo).replace(mo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Co(e) {
  if (!go(e) || _o(e))
    return !1;
  var t = ho(e) ? Eo : $o;
  return t.test(bo(e));
}
var Po = Co;
function Ro(e, t) {
  return e == null ? void 0 : e[t];
}
var jo = Ro, Ao = Po, xo = jo;
function Io(e, t) {
  var a = xo(e, t);
  return Ao(a) ? a : void 0;
}
var ue = Io, Do = ue, Fo = K, ko = Do(Fo, "Map"), _a = ko, Mo = ue, Lo = Mo(Object, "create"), nr = Lo, $t = nr;
function No() {
  this.__data__ = $t ? $t(null) : {}, this.size = 0;
}
var Go = No;
function Uo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zo = Uo, Bo = nr, Wo = "__lodash_hash_undefined__", Ko = Object.prototype, Ho = Ko.hasOwnProperty;
function qo(e) {
  var t = this.__data__;
  if (Bo) {
    var a = t[e];
    return a === Wo ? void 0 : a;
  }
  return Ho.call(t, e) ? t[e] : void 0;
}
var Yo = qo, Vo = nr, Jo = Object.prototype, Xo = Jo.hasOwnProperty;
function Zo(e) {
  var t = this.__data__;
  return Vo ? t[e] !== void 0 : Xo.call(t, e);
}
var Qo = Zo, ei = nr, ri = "__lodash_hash_undefined__";
function ti(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = ei && t === void 0 ? ri : t, this;
}
var ai = ti, ni = Go, oi = zo, ii = Yo, si = Qo, ui = ai;
function ce(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ce.prototype.clear = ni;
ce.prototype.delete = oi;
ce.prototype.get = ii;
ce.prototype.has = si;
ce.prototype.set = ui;
var ci = ce, Tt = ci, fi = io, li = _a;
function pi() {
  this.size = 0, this.__data__ = {
    hash: new Tt(),
    map: new (li || fi)(),
    string: new Tt()
  };
}
var vi = pi;
function yi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var di = yi, hi = di;
function _i(e, t) {
  var a = e.__data__;
  return hi(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
var or = _i, gi = or;
function bi(e) {
  var t = gi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var mi = bi, $i = or;
function Ti(e) {
  return $i(this, e).get(e);
}
var Si = Ti, wi = or;
function Oi(e) {
  return wi(this, e).has(e);
}
var Ei = Oi, Ci = or;
function Pi(e, t) {
  var a = Ci(this, e), o = a.size;
  return a.set(e, t), this.size += a.size == o ? 0 : 1, this;
}
var Ri = Pi, ji = vi, Ai = mi, xi = Si, Ii = Ei, Di = Ri;
function fe(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fe.prototype.clear = ji;
fe.prototype.delete = Ai;
fe.prototype.get = xi;
fe.prototype.has = Ii;
fe.prototype.set = Di;
var Fi = fe, ki = K;
ki.Uint8Array;
var St = tr, wt = St ? St.prototype : void 0;
wt && wt.valueOf;
var Mi = ue, Li = K, Ni = Mi(Li, "DataView"), Gi = Ni, Ui = ue, zi = K, Bi = Ui(zi, "Promise"), Wi = Bi, Ki = ue, Hi = K, qi = Ki(Hi, "Set"), Yi = qi, Vi = ue, Ji = K, Xi = Vi(Ji, "WeakMap"), Zi = Xi, qr = Gi, Yr = _a, Vr = Wi, Jr = Yi, Xr = Zi, ga = nt, le = ha, Ot = "[object Map]", Qi = "[object Object]", Et = "[object Promise]", Ct = "[object Set]", Pt = "[object WeakMap]", Rt = "[object DataView]", es = le(qr), rs = le(Yr), ts = le(Vr), as = le(Jr), ns = le(Xr), ie = ga;
(qr && ie(new qr(new ArrayBuffer(1))) != Rt || Yr && ie(new Yr()) != Ot || Vr && ie(Vr.resolve()) != Et || Jr && ie(new Jr()) != Ct || Xr && ie(new Xr()) != Pt) && (ie = function(e) {
  var t = ga(e), a = t == Qi ? e.constructor : void 0, o = a ? le(a) : "";
  if (o)
    switch (o) {
      case es:
        return Rt;
      case rs:
        return Ot;
      case ts:
        return Et;
      case as:
        return Ct;
      case ns:
        return Pt;
    }
  return t;
});
Qe.exports;
var ba = Fi, os = "Expected a function";
function ot(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(os);
  var a = function() {
    var o = arguments, u = t ? t.apply(this, o) : o[0], s = a.cache;
    if (s.has(u))
      return s.get(u);
    var l = e.apply(this, o);
    return a.cache = s.set(u, l) || s, l;
  };
  return a.cache = new (ot.Cache || ba)(), a;
}
ot.Cache = ba;
var is = ot, ss = is, us = 500;
function cs(e) {
  var t = ss(e, function(o) {
    return a.size === us && a.clear(), o;
  }), a = t.cache;
  return t;
}
var fs = cs, ls = fs, ps = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vs = /\\(\\)?/g;
ls(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ps, function(a, o, u, s) {
    t.push(u ? s.replace(vs, "$1") : o || a);
  }), t;
});
var jt = tr, At = jt ? jt.prototype : void 0;
At && At.toString;
var ma = { exports: {} }, Be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function ys() {
  if (xt)
    return Be;
  xt = 1;
  var e = F, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, p, _) {
    var g, S = {}, T = null, P = null;
    _ !== void 0 && (T = "" + _), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (P = p.ref);
    for (g in p)
      o.call(p, g) && !s.hasOwnProperty(g) && (S[g] = p[g]);
    if (d && d.defaultProps)
      for (g in p = d.defaultProps, p)
        S[g] === void 0 && (S[g] = p[g]);
    return { $$typeof: t, type: d, key: T, ref: P, props: S, _owner: u.current };
  }
  return Be.Fragment = a, Be.jsx = l, Be.jsxs = l, Be;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function ds() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), R = Symbol.iterator, x = "@@iterator";
    function I(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = R && r[R] || r[x];
      return typeof n == "function" ? n : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
          i[c - 1] = arguments[c];
        Y("error", r, i);
      }
    }
    function Y(r, n, i) {
      {
        var c = C.ReactDebugCurrentFrame, y = c.getStackAddendum();
        y !== "" && (n += "%s", i = i.concat([y]));
        var h = i.map(function(v) {
          return String(v);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, h);
      }
    }
    var V = !1, J = !1, pr = !1, vr = !1, yr = !1, ge;
    ge = Symbol.for("react.module.reference");
    function dr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === s || yr || r === u || r === _ || r === g || vr || r === P || V || J || pr || typeof r == "object" && r !== null && (r.$$typeof === T || r.$$typeof === S || r.$$typeof === l || r.$$typeof === d || r.$$typeof === p || r.$$typeof === ge || r.getModuleId !== void 0));
    }
    function hr(r, n, i) {
      var c = r.displayName;
      if (c)
        return c;
      var y = n.displayName || n.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function be(r) {
      return r.displayName || "Context";
    }
    function j(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case u:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            var n = r;
            return be(n) + ".Consumer";
          case l:
            var i = r;
            return be(i._context) + ".Provider";
          case p:
            return hr(r, r.render, "ForwardRef");
          case S:
            var c = r.displayName || null;
            return c !== null ? c : j(r.type) || "Memo";
          case T: {
            var y = r, h = y._payload, v = y._init;
            try {
              return j(v(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, L = 0, me, $e, Te, Se, we, Oe, Ee;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function _r() {
      {
        if (L === 0) {
          me = console.log, $e = console.info, Te = console.warn, Se = console.error, we = console.group, Oe = console.groupCollapsed, Ee = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        L++;
      }
    }
    function gr() {
      {
        if (L--, L === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, r, {
              value: me
            }),
            info: D({}, r, {
              value: $e
            }),
            warn: D({}, r, {
              value: Te
            }),
            error: D({}, r, {
              value: Se
            }),
            group: D({}, r, {
              value: we
            }),
            groupCollapsed: D({}, r, {
              value: Oe
            }),
            groupEnd: D({}, r, {
              value: Ee
            })
          });
        }
        L < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = C.ReactCurrentDispatcher, Z;
    function G(r, n, i) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (y) {
            var c = y.stack.trim().match(/\n( *(at )?)/);
            Z = c && c[1] || "";
          }
        return `
` + Z + r;
      }
    }
    var Q = !1, U;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      U = new br();
    }
    function Pe(r, n) {
      if (!r || Q)
        return "";
      {
        var i = U.get(r);
        if (i !== void 0)
          return i;
      }
      var c;
      Q = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = X.current, X.current = null, _r();
      try {
        if (n) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (A) {
              c = A;
            }
            Reflect.construct(r, [], v);
          } else {
            try {
              v.call();
            } catch (A) {
              c = A;
            }
            r.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            c = A;
          }
          r();
        }
      } catch (A) {
        if (A && c && typeof A.stack == "string") {
          for (var f = A.stack.split(`
`), w = c.stack.split(`
`), m = f.length - 1, $ = w.length - 1; m >= 1 && $ >= 0 && f[m] !== w[$]; )
            $--;
          for (; m >= 1 && $ >= 0; m--, $--)
            if (f[m] !== w[$]) {
              if (m !== 1 || $ !== 1)
                do
                  if (m--, $--, $ < 0 || f[m] !== w[$]) {
                    var O = `
` + f[m].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && U.set(r, O), O;
                  }
                while (m >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = h, gr(), Error.prepareStackTrace = y;
      }
      var M = r ? r.displayName || r.name : "", Ue = M ? G(M) : "";
      return typeof r == "function" && U.set(r, Ue), Ue;
    }
    function mr(r, n, i) {
      return Pe(r, !1);
    }
    function $r(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function z(r, n, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Pe(r, $r(r));
      if (typeof r == "string")
        return G(r);
      switch (r) {
        case _:
          return G("Suspense");
        case g:
          return G("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            return mr(r.render);
          case S:
            return z(r.type, n, i);
          case T: {
            var c = r, y = c._payload, h = c._init;
            try {
              return z(h(y), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, Re = {}, je = C.ReactDebugCurrentFrame;
    function W(r) {
      if (r) {
        var n = r._owner, i = z(r.type, r._source, n ? n.type : null);
        je.setExtraStackFrame(i);
      } else
        je.setExtraStackFrame(null);
    }
    function Tr(r, n, i, c, y) {
      {
        var h = Function.call.bind(B);
        for (var v in r)
          if (h(r, v)) {
            var f = void 0;
            try {
              if (typeof r[v] != "function") {
                var w = Error((c || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              f = r[v](n, v, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              f = m;
            }
            f && !(f instanceof Error) && (W(y), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, v, typeof f), W(null)), f instanceof Error && !(f.message in Re) && (Re[f.message] = !0, W(y), b("Failed %s type: %s", i, f.message), W(null));
          }
      }
    }
    var Sr = Array.isArray;
    function ee(r) {
      return Sr(r);
    }
    function wr(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function Or(r) {
      try {
        return Ae(r), !1;
      } catch {
        return !0;
      }
    }
    function Ae(r) {
      return "" + r;
    }
    function xe(r) {
      if (Or(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(r)), Ae(r);
    }
    var N = C.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, re;
    re = {};
    function Cr(r) {
      if (B.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Pr(r) {
      if (B.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Rr(r, n) {
      if (typeof r.ref == "string" && N.current && n && N.current.stateNode !== n) {
        var i = j(N.current.type);
        re[i] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(N.current.type), r.ref), re[i] = !0);
      }
    }
    function jr(r, n) {
      {
        var i = function() {
          Ie || (Ie = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Ar(r, n) {
      {
        var i = function() {
          De || (De = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var xr = function(r, n, i, c, y, h, v) {
      var f = {
        $$typeof: t,
        type: r,
        key: n,
        ref: i,
        props: v,
        _owner: h
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Ir(r, n, i, c, y) {
      {
        var h, v = {}, f = null, w = null;
        i !== void 0 && (xe(i), f = "" + i), Pr(n) && (xe(n.key), f = "" + n.key), Cr(n) && (w = n.ref, Rr(n, y));
        for (h in n)
          B.call(n, h) && !Er.hasOwnProperty(h) && (v[h] = n[h]);
        if (r && r.defaultProps) {
          var m = r.defaultProps;
          for (h in m)
            v[h] === void 0 && (v[h] = m[h]);
        }
        if (f || w) {
          var $ = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          f && jr(v, $), w && Ar(v, $);
        }
        return xr(r, f, w, y, c, N.current, v);
      }
    }
    var te = C.ReactCurrentOwner, Fe = C.ReactDebugCurrentFrame;
    function k(r) {
      if (r) {
        var n = r._owner, i = z(r.type, r._source, n ? n.type : null);
        Fe.setExtraStackFrame(i);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ne(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function ke() {
      {
        if (te.current) {
          var r = j(te.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Dr(r) {
      {
        if (r !== void 0) {
          var n = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Fr(r) {
      {
        var n = ke();
        if (!n) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Le(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Fr(n);
        if (Me[i])
          return;
        Me[i] = !0;
        var c = "";
        r && r._owner && r._owner !== te.current && (c = " It was passed a child from " + j(r._owner.type) + "."), k(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), k(null);
      }
    }
    function Ne(r, n) {
      {
        if (typeof r != "object")
          return;
        if (ee(r))
          for (var i = 0; i < r.length; i++) {
            var c = r[i];
            ne(c) && Le(c, n);
          }
        else if (ne(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var y = I(r);
          if (typeof y == "function" && y !== r.entries)
            for (var h = y.call(r), v; !(v = h.next()).done; )
              ne(v.value) && Le(v.value, n);
        }
      }
    }
    function kr(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === p || n.$$typeof === S))
          i = n.propTypes;
        else
          return;
        if (i) {
          var c = j(n);
          Tr(i, r.props, "prop", c, r);
        } else if (n.PropTypes !== void 0 && !ae) {
          ae = !0;
          var y = j(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(r) {
      {
        for (var n = Object.keys(r.props), i = 0; i < n.length; i++) {
          var c = n[i];
          if (c !== "children" && c !== "key") {
            k(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), k(null);
            break;
          }
        }
        r.ref !== null && (k(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Ge(r, n, i, c, y, h) {
      {
        var v = dr(r);
        if (!v) {
          var f = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = Dr(y);
          w ? f += w : f += ke();
          var m;
          r === null ? m = "null" : ee(r) ? m = "array" : r !== void 0 && r.$$typeof === t ? (m = "<" + (j(r.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : m = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, f);
        }
        var $ = Ir(r, n, i, y, h);
        if ($ == null)
          return $;
        if (v) {
          var O = n.children;
          if (O !== void 0)
            if (c)
              if (ee(O)) {
                for (var M = 0; M < O.length; M++)
                  Ne(O[M], r);
                Object.freeze && Object.freeze(O);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(O, r);
        }
        return r === o ? Mr($) : kr($), $;
      }
    }
    function Lr(r, n, i) {
      return Ge(r, n, i, !0);
    }
    function Nr(r, n, i) {
      return Ge(r, n, i, !1);
    }
    var Gr = Nr, Ur = Lr;
    Je.Fragment = o, Je.jsx = Gr, Je.jsxs = Ur;
  }()), Je;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ys() : e.exports = ds();
})(ma);
ma.exports.jsx;
const hs = () => {
  const e = F.useRef(!1);
  return F.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, _s = (e) => {
  const t = F.useRef(e);
  t.current = e, F.useEffect(() => () => {
    t.current();
  }, []);
}, gs = (e) => {
  const t = hs(), [a, o] = F.useState(e), u = F.useCallback(
    (s) => {
      t.current && o(s);
    },
    [t]
  );
  return [a, u];
}, bs = () => {
  const e = F.useRef(), t = F.useCallback((u, s) => {
    e.current = setTimeout(u, s);
  }, []), a = F.useCallback(() => {
    e.current && clearTimeout(e.current);
  }, []), o = F.useCallback(
    (u, s) => {
      a(), t(u, s);
    },
    [a, t]
  );
  return _s(() => {
    a();
  }), F.useMemo(
    () => ({
      set: t,
      reset: o,
      clear: a
    }),
    [a, o, t]
  );
};
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ms(e, t) {
  for (var a = -1, o = e == null ? 0 : e.length, u = 0, s = []; ++a < o; ) {
    var l = e[a];
    t(l, a, e) && (s[u++] = l);
  }
  return s;
}
var $a = ms;
function $s(e) {
  return function(t, a, o) {
    for (var u = -1, s = Object(t), l = o(t), d = l.length; d--; ) {
      var p = l[e ? d : ++u];
      if (a(s[p], p, s) === !1)
        break;
    }
    return t;
  };
}
var Ts = $s, Ss = Ts, ws = Ss(), Os = ws;
function Es(e, t) {
  for (var a = -1, o = Array(e); ++a < e; )
    o[a] = t(a);
  return o;
}
var Cs = Es, Ps = typeof Xe == "object" && Xe && Xe.Object === Object && Xe, Ta = Ps, Rs = Ta, js = typeof self == "object" && self && self.Object === Object && self, As = Rs || js || Function("return this")(), H = As, xs = H, Is = xs.Symbol, ir = Is, Dt = ir, Sa = Object.prototype, Ds = Sa.hasOwnProperty, Fs = Sa.toString, We = Dt ? Dt.toStringTag : void 0;
function ks(e) {
  var t = Ds.call(e, We), a = e[We];
  try {
    e[We] = void 0;
    var o = !0;
  } catch {
  }
  var u = Fs.call(e);
  return o && (t ? e[We] = a : delete e[We]), u;
}
var Ms = ks, Ls = Object.prototype, Ns = Ls.toString;
function Gs(e) {
  return Ns.call(e);
}
var Us = Gs, Ft = ir, zs = Ms, Bs = Us, Ws = "[object Null]", Ks = "[object Undefined]", kt = Ft ? Ft.toStringTag : void 0;
function Hs(e) {
  return e == null ? e === void 0 ? Ks : Ws : kt && kt in Object(e) ? zs(e) : Bs(e);
}
var qe = Hs;
function qs(e) {
  return e != null && typeof e == "object";
}
var Ye = qs, Ys = qe, Vs = Ye, Js = "[object Arguments]";
function Xs(e) {
  return Vs(e) && Ys(e) == Js;
}
var Zs = Xs, Mt = Zs, Qs = Ye, wa = Object.prototype, eu = wa.hasOwnProperty, ru = wa.propertyIsEnumerable, tu = Mt(function() {
  return arguments;
}()) ? Mt : function(e) {
  return Qs(e) && eu.call(e, "callee") && !ru.call(e, "callee");
}, Oa = tu, au = Array.isArray, q = au, er = { exports: {} };
function nu() {
  return !1;
}
var ou = nu;
(function(e, t) {
  var a = H, o = ou, u = t && !t.nodeType && t, s = u && !0 && e && !e.nodeType && e, l = s && s.exports === u, d = l ? a.Buffer : void 0, p = d ? d.isBuffer : void 0, _ = p || o;
  e.exports = _;
})(er, er.exports);
var iu = 9007199254740991, su = /^(?:0|[1-9]\d*)$/;
function uu(e, t) {
  var a = typeof e;
  return t = t == null ? iu : t, !!t && (a == "number" || a != "symbol" && su.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ea = uu, cu = 9007199254740991;
function fu(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cu;
}
var it = fu, lu = qe, pu = it, vu = Ye, yu = "[object Arguments]", du = "[object Array]", hu = "[object Boolean]", _u = "[object Date]", gu = "[object Error]", bu = "[object Function]", mu = "[object Map]", $u = "[object Number]", Tu = "[object Object]", Su = "[object RegExp]", wu = "[object Set]", Ou = "[object String]", Eu = "[object WeakMap]", Cu = "[object ArrayBuffer]", Pu = "[object DataView]", Ru = "[object Float32Array]", ju = "[object Float64Array]", Au = "[object Int8Array]", xu = "[object Int16Array]", Iu = "[object Int32Array]", Du = "[object Uint8Array]", Fu = "[object Uint8ClampedArray]", ku = "[object Uint16Array]", Mu = "[object Uint32Array]", E = {};
E[Ru] = E[ju] = E[Au] = E[xu] = E[Iu] = E[Du] = E[Fu] = E[ku] = E[Mu] = !0;
E[yu] = E[du] = E[Cu] = E[hu] = E[Pu] = E[_u] = E[gu] = E[bu] = E[mu] = E[$u] = E[Tu] = E[Su] = E[wu] = E[Ou] = E[Eu] = !1;
function Lu(e) {
  return vu(e) && pu(e.length) && !!E[lu(e)];
}
var Nu = Lu;
function Gu(e) {
  return function(t) {
    return e(t);
  };
}
var Uu = Gu, Zr = { exports: {} };
(function(e, t) {
  var a = Ta, o = t && !t.nodeType && t, u = o && !0 && e && !e.nodeType && e, s = u && u.exports === o, l = s && a.process, d = function() {
    try {
      var p = u && u.require && u.require("util").types;
      return p || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = d;
})(Zr, Zr.exports);
var zu = Nu, Bu = Uu, Lt = Zr.exports, Nt = Lt && Lt.isTypedArray, Wu = Nt ? Bu(Nt) : zu, Ca = Wu, Ku = Cs, Hu = Oa, qu = q, Yu = er.exports, Vu = Ea, Ju = Ca, Xu = Object.prototype, Zu = Xu.hasOwnProperty;
function Qu(e, t) {
  var a = qu(e), o = !a && Hu(e), u = !a && !o && Yu(e), s = !a && !o && !u && Ju(e), l = a || o || u || s, d = l ? Ku(e.length, String) : [], p = d.length;
  for (var _ in e)
    (t || Zu.call(e, _)) && !(l && (_ == "length" || u && (_ == "offset" || _ == "parent") || s && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || Vu(_, p))) && d.push(_);
  return d;
}
var ec = Qu, rc = Object.prototype;
function tc(e) {
  var t = e && e.constructor, a = typeof t == "function" && t.prototype || rc;
  return e === a;
}
var ac = tc;
function nc(e, t) {
  return function(a) {
    return e(t(a));
  };
}
var oc = nc, ic = oc, sc = ic(Object.keys, Object), uc = sc, cc = ac, fc = uc, lc = Object.prototype, pc = lc.hasOwnProperty;
function vc(e) {
  if (!cc(e))
    return fc(e);
  var t = [];
  for (var a in Object(e))
    pc.call(e, a) && a != "constructor" && t.push(a);
  return t;
}
var yc = vc;
function dc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var st = dc, hc = qe, _c = st, gc = "[object AsyncFunction]", bc = "[object Function]", mc = "[object GeneratorFunction]", $c = "[object Proxy]";
function Tc(e) {
  if (!_c(e))
    return !1;
  var t = hc(e);
  return t == bc || t == mc || t == gc || t == $c;
}
var Pa = Tc, Sc = Pa, wc = it;
function Oc(e) {
  return e != null && wc(e.length) && !Sc(e);
}
var Ra = Oc, Ec = ec, Cc = yc, Pc = Ra;
function Rc(e) {
  return Pc(e) ? Ec(e) : Cc(e);
}
var ut = Rc, jc = Os, Ac = ut;
function xc(e, t) {
  return e && jc(e, t, Ac);
}
var Ic = xc, Dc = Ra;
function Fc(e, t) {
  return function(a, o) {
    if (a == null)
      return a;
    if (!Dc(a))
      return e(a, o);
    for (var u = a.length, s = t ? u : -1, l = Object(a); (t ? s-- : ++s < u) && o(l[s], s, l) !== !1; )
      ;
    return a;
  };
}
var kc = Fc, Mc = Ic, Lc = kc, Nc = Lc(Mc), Gc = Nc, Uc = Gc;
function zc(e, t) {
  var a = [];
  return Uc(e, function(o, u, s) {
    t(o, u, s) && a.push(o);
  }), a;
}
var Bc = zc;
function Wc() {
  this.__data__ = [], this.size = 0;
}
var Kc = Wc;
function Hc(e, t) {
  return e === t || e !== e && t !== t;
}
var ja = Hc, qc = ja;
function Yc(e, t) {
  for (var a = e.length; a--; )
    if (qc(e[a][0], t))
      return a;
  return -1;
}
var sr = Yc, Vc = sr, Jc = Array.prototype, Xc = Jc.splice;
function Zc(e) {
  var t = this.__data__, a = Vc(t, e);
  if (a < 0)
    return !1;
  var o = t.length - 1;
  return a == o ? t.pop() : Xc.call(t, a, 1), --this.size, !0;
}
var Qc = Zc, ef = sr;
function rf(e) {
  var t = this.__data__, a = ef(t, e);
  return a < 0 ? void 0 : t[a][1];
}
var tf = rf, af = sr;
function nf(e) {
  return af(this.__data__, e) > -1;
}
var of = nf, sf = sr;
function uf(e, t) {
  var a = this.__data__, o = sf(a, e);
  return o < 0 ? (++this.size, a.push([e, t])) : a[o][1] = t, this;
}
var cf = uf, ff = Kc, lf = Qc, pf = tf, vf = of, yf = cf;
function pe(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
pe.prototype.clear = ff;
pe.prototype.delete = lf;
pe.prototype.get = pf;
pe.prototype.has = vf;
pe.prototype.set = yf;
var ur = pe, df = ur;
function hf() {
  this.__data__ = new df(), this.size = 0;
}
var _f = hf;
function gf(e) {
  var t = this.__data__, a = t.delete(e);
  return this.size = t.size, a;
}
var bf = gf;
function mf(e) {
  return this.__data__.get(e);
}
var $f = mf;
function Tf(e) {
  return this.__data__.has(e);
}
var Sf = Tf, wf = H, Of = wf["__core-js_shared__"], Ef = Of, Br = Ef, Gt = function() {
  var e = /[^.]+$/.exec(Br && Br.keys && Br.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cf(e) {
  return !!Gt && Gt in e;
}
var Pf = Cf, Rf = Function.prototype, jf = Rf.toString;
function Af(e) {
  if (e != null) {
    try {
      return jf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Aa = Af, xf = Pa, If = Pf, Df = st, Ff = Aa, kf = /[\\^$.*+?()[\]{}|]/g, Mf = /^\[object .+?Constructor\]$/, Lf = Function.prototype, Nf = Object.prototype, Gf = Lf.toString, Uf = Nf.hasOwnProperty, zf = RegExp(
  "^" + Gf.call(Uf).replace(kf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bf(e) {
  if (!Df(e) || If(e))
    return !1;
  var t = xf(e) ? zf : Mf;
  return t.test(Ff(e));
}
var Wf = Bf;
function Kf(e, t) {
  return e == null ? void 0 : e[t];
}
var Hf = Kf, qf = Wf, Yf = Hf;
function Vf(e, t) {
  var a = Yf(e, t);
  return qf(a) ? a : void 0;
}
var ve = Vf, Jf = ve, Xf = H, Zf = Jf(Xf, "Map"), ct = Zf, Qf = ve, el = Qf(Object, "create"), cr = el, Ut = cr;
function rl() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
var tl = rl;
function al(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nl = al, ol = cr, il = "__lodash_hash_undefined__", sl = Object.prototype, ul = sl.hasOwnProperty;
function cl(e) {
  var t = this.__data__;
  if (ol) {
    var a = t[e];
    return a === il ? void 0 : a;
  }
  return ul.call(t, e) ? t[e] : void 0;
}
var fl = cl, ll = cr, pl = Object.prototype, vl = pl.hasOwnProperty;
function yl(e) {
  var t = this.__data__;
  return ll ? t[e] !== void 0 : vl.call(t, e);
}
var dl = yl, hl = cr, _l = "__lodash_hash_undefined__";
function gl(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = hl && t === void 0 ? _l : t, this;
}
var bl = gl, ml = tl, $l = nl, Tl = fl, Sl = dl, wl = bl;
function ye(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ye.prototype.clear = ml;
ye.prototype.delete = $l;
ye.prototype.get = Tl;
ye.prototype.has = Sl;
ye.prototype.set = wl;
var Ol = ye, zt = Ol, El = ur, Cl = ct;
function Pl() {
  this.size = 0, this.__data__ = {
    hash: new zt(),
    map: new (Cl || El)(),
    string: new zt()
  };
}
var Rl = Pl;
function jl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Al = jl, xl = Al;
function Il(e, t) {
  var a = e.__data__;
  return xl(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
var fr = Il, Dl = fr;
function Fl(e) {
  var t = Dl(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var kl = Fl, Ml = fr;
function Ll(e) {
  return Ml(this, e).get(e);
}
var Nl = Ll, Gl = fr;
function Ul(e) {
  return Gl(this, e).has(e);
}
var zl = Ul, Bl = fr;
function Wl(e, t) {
  var a = Bl(this, e), o = a.size;
  return a.set(e, t), this.size += a.size == o ? 0 : 1, this;
}
var Kl = Wl, Hl = Rl, ql = kl, Yl = Nl, Vl = zl, Jl = Kl;
function de(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = Hl;
de.prototype.delete = ql;
de.prototype.get = Yl;
de.prototype.has = Vl;
de.prototype.set = Jl;
var ft = de, Xl = ur, Zl = ct, Ql = ft, ep = 200;
function rp(e, t) {
  var a = this.__data__;
  if (a instanceof Xl) {
    var o = a.__data__;
    if (!Zl || o.length < ep - 1)
      return o.push([e, t]), this.size = ++a.size, this;
    a = this.__data__ = new Ql(o);
  }
  return a.set(e, t), this.size = a.size, this;
}
var tp = rp, ap = ur, np = _f, op = bf, ip = $f, sp = Sf, up = tp;
function he(e) {
  var t = this.__data__ = new ap(e);
  this.size = t.size;
}
he.prototype.clear = np;
he.prototype.delete = op;
he.prototype.get = ip;
he.prototype.has = sp;
he.prototype.set = up;
var xa = he, cp = "__lodash_hash_undefined__";
function fp(e) {
  return this.__data__.set(e, cp), this;
}
var lp = fp;
function pp(e) {
  return this.__data__.has(e);
}
var vp = pp, yp = ft, dp = lp, hp = vp;
function rr(e) {
  var t = -1, a = e == null ? 0 : e.length;
  for (this.__data__ = new yp(); ++t < a; )
    this.add(e[t]);
}
rr.prototype.add = rr.prototype.push = dp;
rr.prototype.has = hp;
var _p = rr;
function gp(e, t) {
  for (var a = -1, o = e == null ? 0 : e.length; ++a < o; )
    if (t(e[a], a, e))
      return !0;
  return !1;
}
var bp = gp;
function mp(e, t) {
  return e.has(t);
}
var $p = mp, Tp = _p, Sp = bp, wp = $p, Op = 1, Ep = 2;
function Cp(e, t, a, o, u, s) {
  var l = a & Op, d = e.length, p = t.length;
  if (d != p && !(l && p > d))
    return !1;
  var _ = s.get(e), g = s.get(t);
  if (_ && g)
    return _ == t && g == e;
  var S = -1, T = !0, P = a & Ep ? new Tp() : void 0;
  for (s.set(e, t), s.set(t, e); ++S < d; ) {
    var R = e[S], x = t[S];
    if (o)
      var I = l ? o(x, R, S, t, e, s) : o(R, x, S, e, t, s);
    if (I !== void 0) {
      if (I)
        continue;
      T = !1;
      break;
    }
    if (P) {
      if (!Sp(t, function(C, b) {
        if (!wp(P, b) && (R === C || u(R, C, a, o, s)))
          return P.push(b);
      })) {
        T = !1;
        break;
      }
    } else if (!(R === x || u(R, x, a, o, s))) {
      T = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), T;
}
var Ia = Cp, Pp = H, Rp = Pp.Uint8Array, jp = Rp;
function Ap(e) {
  var t = -1, a = Array(e.size);
  return e.forEach(function(o, u) {
    a[++t] = [u, o];
  }), a;
}
var xp = Ap;
function Ip(e) {
  var t = -1, a = Array(e.size);
  return e.forEach(function(o) {
    a[++t] = o;
  }), a;
}
var Dp = Ip, Bt = ir, Wt = jp, Fp = ja, kp = Ia, Mp = xp, Lp = Dp, Np = 1, Gp = 2, Up = "[object Boolean]", zp = "[object Date]", Bp = "[object Error]", Wp = "[object Map]", Kp = "[object Number]", Hp = "[object RegExp]", qp = "[object Set]", Yp = "[object String]", Vp = "[object Symbol]", Jp = "[object ArrayBuffer]", Xp = "[object DataView]", Kt = Bt ? Bt.prototype : void 0, Wr = Kt ? Kt.valueOf : void 0;
function Zp(e, t, a, o, u, s, l) {
  switch (a) {
    case Xp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Jp:
      return !(e.byteLength != t.byteLength || !s(new Wt(e), new Wt(t)));
    case Up:
    case zp:
    case Kp:
      return Fp(+e, +t);
    case Bp:
      return e.name == t.name && e.message == t.message;
    case Hp:
    case Yp:
      return e == t + "";
    case Wp:
      var d = Mp;
    case qp:
      var p = o & Np;
      if (d || (d = Lp), e.size != t.size && !p)
        return !1;
      var _ = l.get(e);
      if (_)
        return _ == t;
      o |= Gp, l.set(e, t);
      var g = kp(d(e), d(t), o, u, s, l);
      return l.delete(e), g;
    case Vp:
      if (Wr)
        return Wr.call(e) == Wr.call(t);
  }
  return !1;
}
var Qp = Zp;
function ev(e, t) {
  for (var a = -1, o = t.length, u = e.length; ++a < o; )
    e[u + a] = t[a];
  return e;
}
var rv = ev, tv = rv, av = q;
function nv(e, t, a) {
  var o = t(e);
  return av(e) ? o : tv(o, a(e));
}
var ov = nv;
function iv() {
  return [];
}
var sv = iv, uv = $a, cv = sv, fv = Object.prototype, lv = fv.propertyIsEnumerable, Ht = Object.getOwnPropertySymbols, pv = Ht ? function(e) {
  return e == null ? [] : (e = Object(e), uv(Ht(e), function(t) {
    return lv.call(e, t);
  }));
} : cv, vv = pv, yv = ov, dv = vv, hv = ut;
function _v(e) {
  return yv(e, hv, dv);
}
var gv = _v, qt = gv, bv = 1, mv = Object.prototype, $v = mv.hasOwnProperty;
function Tv(e, t, a, o, u, s) {
  var l = a & bv, d = qt(e), p = d.length, _ = qt(t), g = _.length;
  if (p != g && !l)
    return !1;
  for (var S = p; S--; ) {
    var T = d[S];
    if (!(l ? T in t : $v.call(t, T)))
      return !1;
  }
  var P = s.get(e), R = s.get(t);
  if (P && R)
    return P == t && R == e;
  var x = !0;
  s.set(e, t), s.set(t, e);
  for (var I = l; ++S < p; ) {
    T = d[S];
    var C = e[T], b = t[T];
    if (o)
      var Y = l ? o(b, C, T, t, e, s) : o(C, b, T, e, t, s);
    if (!(Y === void 0 ? C === b || u(C, b, a, o, s) : Y)) {
      x = !1;
      break;
    }
    I || (I = T == "constructor");
  }
  if (x && !I) {
    var V = e.constructor, J = t.constructor;
    V != J && "constructor" in e && "constructor" in t && !(typeof V == "function" && V instanceof V && typeof J == "function" && J instanceof J) && (x = !1);
  }
  return s.delete(e), s.delete(t), x;
}
var Sv = Tv, wv = ve, Ov = H, Ev = wv(Ov, "DataView"), Cv = Ev, Pv = ve, Rv = H, jv = Pv(Rv, "Promise"), Av = jv, xv = ve, Iv = H, Dv = xv(Iv, "Set"), Fv = Dv, kv = ve, Mv = H, Lv = kv(Mv, "WeakMap"), Nv = Lv, Qr = Cv, et = ct, rt = Av, tt = Fv, at = Nv, Da = qe, _e = Aa, Yt = "[object Map]", Gv = "[object Object]", Vt = "[object Promise]", Jt = "[object Set]", Xt = "[object WeakMap]", Zt = "[object DataView]", Uv = _e(Qr), zv = _e(et), Bv = _e(rt), Wv = _e(tt), Kv = _e(at), oe = Da;
(Qr && oe(new Qr(new ArrayBuffer(1))) != Zt || et && oe(new et()) != Yt || rt && oe(rt.resolve()) != Vt || tt && oe(new tt()) != Jt || at && oe(new at()) != Xt) && (oe = function(e) {
  var t = Da(e), a = t == Gv ? e.constructor : void 0, o = a ? _e(a) : "";
  if (o)
    switch (o) {
      case Uv:
        return Zt;
      case zv:
        return Yt;
      case Bv:
        return Vt;
      case Wv:
        return Jt;
      case Kv:
        return Xt;
    }
  return t;
});
var Hv = oe, Kr = xa, qv = Ia, Yv = Qp, Vv = Sv, Qt = Hv, ea = q, ra = er.exports, Jv = Ca, Xv = 1, ta = "[object Arguments]", aa = "[object Array]", Ze = "[object Object]", Zv = Object.prototype, na = Zv.hasOwnProperty;
function Qv(e, t, a, o, u, s) {
  var l = ea(e), d = ea(t), p = l ? aa : Qt(e), _ = d ? aa : Qt(t);
  p = p == ta ? Ze : p, _ = _ == ta ? Ze : _;
  var g = p == Ze, S = _ == Ze, T = p == _;
  if (T && ra(e)) {
    if (!ra(t))
      return !1;
    l = !0, g = !1;
  }
  if (T && !g)
    return s || (s = new Kr()), l || Jv(e) ? qv(e, t, a, o, u, s) : Yv(e, t, p, a, o, u, s);
  if (!(a & Xv)) {
    var P = g && na.call(e, "__wrapped__"), R = S && na.call(t, "__wrapped__");
    if (P || R) {
      var x = P ? e.value() : e, I = R ? t.value() : t;
      return s || (s = new Kr()), u(x, I, a, o, s);
    }
  }
  return T ? (s || (s = new Kr()), Vv(e, t, a, o, u, s)) : !1;
}
var ey = Qv, ry = ey, oa = Ye;
function Fa(e, t, a, o, u) {
  return e === t ? !0 : e == null || t == null || !oa(e) && !oa(t) ? e !== e && t !== t : ry(e, t, a, o, Fa, u);
}
var ka = Fa, ty = xa, ay = ka, ny = 1, oy = 2;
function iy(e, t, a, o) {
  var u = a.length, s = u, l = !o;
  if (e == null)
    return !s;
  for (e = Object(e); u--; ) {
    var d = a[u];
    if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e))
      return !1;
  }
  for (; ++u < s; ) {
    d = a[u];
    var p = d[0], _ = e[p], g = d[1];
    if (l && d[2]) {
      if (_ === void 0 && !(p in e))
        return !1;
    } else {
      var S = new ty();
      if (o)
        var T = o(_, g, p, e, t, S);
      if (!(T === void 0 ? ay(g, _, ny | oy, o, S) : T))
        return !1;
    }
  }
  return !0;
}
var sy = iy, uy = st;
function cy(e) {
  return e === e && !uy(e);
}
var Ma = cy, fy = Ma, ly = ut;
function py(e) {
  for (var t = ly(e), a = t.length; a--; ) {
    var o = t[a], u = e[o];
    t[a] = [o, u, fy(u)];
  }
  return t;
}
var vy = py;
function yy(e, t) {
  return function(a) {
    return a == null ? !1 : a[e] === t && (t !== void 0 || e in Object(a));
  };
}
var La = yy, dy = sy, hy = vy, _y = La;
function gy(e) {
  var t = hy(e);
  return t.length == 1 && t[0][2] ? _y(t[0][0], t[0][1]) : function(a) {
    return a === e || dy(a, e, t);
  };
}
var by = gy, my = qe, $y = Ye, Ty = "[object Symbol]";
function Sy(e) {
  return typeof e == "symbol" || $y(e) && my(e) == Ty;
}
var lt = Sy, wy = q, Oy = lt, Ey = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cy = /^\w*$/;
function Py(e, t) {
  if (wy(e))
    return !1;
  var a = typeof e;
  return a == "number" || a == "symbol" || a == "boolean" || e == null || Oy(e) ? !0 : Cy.test(e) || !Ey.test(e) || t != null && e in Object(t);
}
var pt = Py, Na = ft, Ry = "Expected a function";
function vt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ry);
  var a = function() {
    var o = arguments, u = t ? t.apply(this, o) : o[0], s = a.cache;
    if (s.has(u))
      return s.get(u);
    var l = e.apply(this, o);
    return a.cache = s.set(u, l) || s, l;
  };
  return a.cache = new (vt.Cache || Na)(), a;
}
vt.Cache = Na;
var jy = vt, Ay = jy, xy = 500;
function Iy(e) {
  var t = Ay(e, function(o) {
    return a.size === xy && a.clear(), o;
  }), a = t.cache;
  return t;
}
var Dy = Iy, Fy = Dy, ky = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, My = /\\(\\)?/g, Ly = Fy(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ky, function(a, o, u, s) {
    t.push(u ? s.replace(My, "$1") : o || a);
  }), t;
}), Ny = Ly;
function Gy(e, t) {
  for (var a = -1, o = e == null ? 0 : e.length, u = Array(o); ++a < o; )
    u[a] = t(e[a], a, e);
  return u;
}
var Uy = Gy, ia = ir, zy = Uy, By = q, Wy = lt, Ky = 1 / 0, sa = ia ? ia.prototype : void 0, ua = sa ? sa.toString : void 0;
function Ga(e) {
  if (typeof e == "string")
    return e;
  if (By(e))
    return zy(e, Ga) + "";
  if (Wy(e))
    return ua ? ua.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ky ? "-0" : t;
}
var Hy = Ga, qy = Hy;
function Yy(e) {
  return e == null ? "" : qy(e);
}
var Ua = Yy, Vy = q, Jy = pt, Xy = Ny, Zy = Ua;
function Qy(e, t) {
  return Vy(e) ? e : Jy(e, t) ? [e] : Xy(Zy(e));
}
var za = Qy, ed = lt, rd = 1 / 0;
function td(e) {
  if (typeof e == "string" || ed(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -rd ? "-0" : t;
}
var lr = td, ad = za, nd = lr;
function od(e, t) {
  t = ad(t, e);
  for (var a = 0, o = t.length; e != null && a < o; )
    e = e[nd(t[a++])];
  return a && a == o ? e : void 0;
}
var Ba = od, id = Ba;
function sd(e, t, a) {
  var o = e == null ? void 0 : id(e, t);
  return o === void 0 ? a : o;
}
var ud = sd;
function cd(e, t) {
  return e != null && t in Object(e);
}
var fd = cd, ld = za, pd = Oa, vd = q, yd = Ea, dd = it, hd = lr;
function _d(e, t, a) {
  t = ld(t, e);
  for (var o = -1, u = t.length, s = !1; ++o < u; ) {
    var l = hd(t[o]);
    if (!(s = e != null && a(e, l)))
      break;
    e = e[l];
  }
  return s || ++o != u ? s : (u = e == null ? 0 : e.length, !!u && dd(u) && yd(l, u) && (vd(e) || pd(e)));
}
var gd = _d, bd = fd, md = gd;
function $d(e, t) {
  return e != null && md(e, t, bd);
}
var Td = $d, Sd = ka, wd = ud, Od = Td, Ed = pt, Cd = Ma, Pd = La, Rd = lr, jd = 1, Ad = 2;
function xd(e, t) {
  return Ed(e) && Cd(t) ? Pd(Rd(e), t) : function(a) {
    var o = wd(a, e);
    return o === void 0 && o === t ? Od(a, e) : Sd(t, o, jd | Ad);
  };
}
var Id = xd;
function Dd(e) {
  return e;
}
var Fd = Dd;
function kd(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Md = kd, Ld = Ba;
function Nd(e) {
  return function(t) {
    return Ld(t, e);
  };
}
var Gd = Nd, Ud = Md, zd = Gd, Bd = pt, Wd = lr;
function Kd(e) {
  return Bd(e) ? Ud(Wd(e)) : zd(e);
}
var Hd = Kd, qd = by, Yd = Id, Vd = Fd, Jd = q, Xd = Hd;
function Zd(e) {
  return typeof e == "function" ? e : e == null ? Vd : typeof e == "object" ? Jd(e) ? Yd(e[0], e[1]) : qd(e) : Xd(e);
}
var Qd = Zd, eh = $a, rh = Bc, th = Qd, ah = q;
function nh(e, t) {
  var a = ah(e) ? eh : rh;
  return a(e, th(t));
}
var oh = nh, ih = Ua, sh = 0;
function uh(e) {
  var t = ++sh;
  return ih(e) + t;
}
var ch = uh, yt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function fh() {
  if (ca)
    return Ke;
  ca = 1;
  var e = F, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, p, _) {
    var g, S = {}, T = null, P = null;
    _ !== void 0 && (T = "" + _), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (P = p.ref);
    for (g in p)
      o.call(p, g) && !s.hasOwnProperty(g) && (S[g] = p[g]);
    if (d && d.defaultProps)
      for (g in p = d.defaultProps, p)
        S[g] === void 0 && (S[g] = p[g]);
    return { $$typeof: t, type: d, key: T, ref: P, props: S, _owner: u.current };
  }
  return Ke.Fragment = a, Ke.jsx = l, Ke.jsxs = l, Ke;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function lh() {
  return fa || (fa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), R = Symbol.iterator, x = "@@iterator";
    function I(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = R && r[R] || r[x];
      return typeof n == "function" ? n : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
          i[c - 1] = arguments[c];
        Y("error", r, i);
      }
    }
    function Y(r, n, i) {
      {
        var c = C.ReactDebugCurrentFrame, y = c.getStackAddendum();
        y !== "" && (n += "%s", i = i.concat([y]));
        var h = i.map(function(v) {
          return String(v);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, h);
      }
    }
    var V = !1, J = !1, pr = !1, vr = !1, yr = !1, ge;
    ge = Symbol.for("react.module.reference");
    function dr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === s || yr || r === u || r === _ || r === g || vr || r === P || V || J || pr || typeof r == "object" && r !== null && (r.$$typeof === T || r.$$typeof === S || r.$$typeof === l || r.$$typeof === d || r.$$typeof === p || r.$$typeof === ge || r.getModuleId !== void 0));
    }
    function hr(r, n, i) {
      var c = r.displayName;
      if (c)
        return c;
      var y = n.displayName || n.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function be(r) {
      return r.displayName || "Context";
    }
    function j(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case u:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            var n = r;
            return be(n) + ".Consumer";
          case l:
            var i = r;
            return be(i._context) + ".Provider";
          case p:
            return hr(r, r.render, "ForwardRef");
          case S:
            var c = r.displayName || null;
            return c !== null ? c : j(r.type) || "Memo";
          case T: {
            var y = r, h = y._payload, v = y._init;
            try {
              return j(v(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, L = 0, me, $e, Te, Se, we, Oe, Ee;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function _r() {
      {
        if (L === 0) {
          me = console.log, $e = console.info, Te = console.warn, Se = console.error, we = console.group, Oe = console.groupCollapsed, Ee = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        L++;
      }
    }
    function gr() {
      {
        if (L--, L === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, r, {
              value: me
            }),
            info: D({}, r, {
              value: $e
            }),
            warn: D({}, r, {
              value: Te
            }),
            error: D({}, r, {
              value: Se
            }),
            group: D({}, r, {
              value: we
            }),
            groupCollapsed: D({}, r, {
              value: Oe
            }),
            groupEnd: D({}, r, {
              value: Ee
            })
          });
        }
        L < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = C.ReactCurrentDispatcher, Z;
    function G(r, n, i) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (y) {
            var c = y.stack.trim().match(/\n( *(at )?)/);
            Z = c && c[1] || "";
          }
        return `
` + Z + r;
      }
    }
    var Q = !1, U;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      U = new br();
    }
    function Pe(r, n) {
      if (!r || Q)
        return "";
      {
        var i = U.get(r);
        if (i !== void 0)
          return i;
      }
      var c;
      Q = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = X.current, X.current = null, _r();
      try {
        if (n) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (A) {
              c = A;
            }
            Reflect.construct(r, [], v);
          } else {
            try {
              v.call();
            } catch (A) {
              c = A;
            }
            r.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            c = A;
          }
          r();
        }
      } catch (A) {
        if (A && c && typeof A.stack == "string") {
          for (var f = A.stack.split(`
`), w = c.stack.split(`
`), m = f.length - 1, $ = w.length - 1; m >= 1 && $ >= 0 && f[m] !== w[$]; )
            $--;
          for (; m >= 1 && $ >= 0; m--, $--)
            if (f[m] !== w[$]) {
              if (m !== 1 || $ !== 1)
                do
                  if (m--, $--, $ < 0 || f[m] !== w[$]) {
                    var O = `
` + f[m].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && U.set(r, O), O;
                  }
                while (m >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = h, gr(), Error.prepareStackTrace = y;
      }
      var M = r ? r.displayName || r.name : "", Ue = M ? G(M) : "";
      return typeof r == "function" && U.set(r, Ue), Ue;
    }
    function mr(r, n, i) {
      return Pe(r, !1);
    }
    function $r(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function z(r, n, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Pe(r, $r(r));
      if (typeof r == "string")
        return G(r);
      switch (r) {
        case _:
          return G("Suspense");
        case g:
          return G("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            return mr(r.render);
          case S:
            return z(r.type, n, i);
          case T: {
            var c = r, y = c._payload, h = c._init;
            try {
              return z(h(y), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, Re = {}, je = C.ReactDebugCurrentFrame;
    function W(r) {
      if (r) {
        var n = r._owner, i = z(r.type, r._source, n ? n.type : null);
        je.setExtraStackFrame(i);
      } else
        je.setExtraStackFrame(null);
    }
    function Tr(r, n, i, c, y) {
      {
        var h = Function.call.bind(B);
        for (var v in r)
          if (h(r, v)) {
            var f = void 0;
            try {
              if (typeof r[v] != "function") {
                var w = Error((c || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              f = r[v](n, v, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              f = m;
            }
            f && !(f instanceof Error) && (W(y), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, v, typeof f), W(null)), f instanceof Error && !(f.message in Re) && (Re[f.message] = !0, W(y), b("Failed %s type: %s", i, f.message), W(null));
          }
      }
    }
    var Sr = Array.isArray;
    function ee(r) {
      return Sr(r);
    }
    function wr(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function Or(r) {
      try {
        return Ae(r), !1;
      } catch {
        return !0;
      }
    }
    function Ae(r) {
      return "" + r;
    }
    function xe(r) {
      if (Or(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(r)), Ae(r);
    }
    var N = C.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De, re;
    re = {};
    function Cr(r) {
      if (B.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Pr(r) {
      if (B.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Rr(r, n) {
      if (typeof r.ref == "string" && N.current && n && N.current.stateNode !== n) {
        var i = j(N.current.type);
        re[i] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(N.current.type), r.ref), re[i] = !0);
      }
    }
    function jr(r, n) {
      {
        var i = function() {
          Ie || (Ie = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Ar(r, n) {
      {
        var i = function() {
          De || (De = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var xr = function(r, n, i, c, y, h, v) {
      var f = {
        $$typeof: t,
        type: r,
        key: n,
        ref: i,
        props: v,
        _owner: h
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Ir(r, n, i, c, y) {
      {
        var h, v = {}, f = null, w = null;
        i !== void 0 && (xe(i), f = "" + i), Pr(n) && (xe(n.key), f = "" + n.key), Cr(n) && (w = n.ref, Rr(n, y));
        for (h in n)
          B.call(n, h) && !Er.hasOwnProperty(h) && (v[h] = n[h]);
        if (r && r.defaultProps) {
          var m = r.defaultProps;
          for (h in m)
            v[h] === void 0 && (v[h] = m[h]);
        }
        if (f || w) {
          var $ = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          f && jr(v, $), w && Ar(v, $);
        }
        return xr(r, f, w, y, c, N.current, v);
      }
    }
    var te = C.ReactCurrentOwner, Fe = C.ReactDebugCurrentFrame;
    function k(r) {
      if (r) {
        var n = r._owner, i = z(r.type, r._source, n ? n.type : null);
        Fe.setExtraStackFrame(i);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function ne(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function ke() {
      {
        if (te.current) {
          var r = j(te.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Dr(r) {
      {
        if (r !== void 0) {
          var n = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Fr(r) {
      {
        var n = ke();
        if (!n) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Le(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Fr(n);
        if (Me[i])
          return;
        Me[i] = !0;
        var c = "";
        r && r._owner && r._owner !== te.current && (c = " It was passed a child from " + j(r._owner.type) + "."), k(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), k(null);
      }
    }
    function Ne(r, n) {
      {
        if (typeof r != "object")
          return;
        if (ee(r))
          for (var i = 0; i < r.length; i++) {
            var c = r[i];
            ne(c) && Le(c, n);
          }
        else if (ne(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var y = I(r);
          if (typeof y == "function" && y !== r.entries)
            for (var h = y.call(r), v; !(v = h.next()).done; )
              ne(v.value) && Le(v.value, n);
        }
      }
    }
    function kr(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === p || n.$$typeof === S))
          i = n.propTypes;
        else
          return;
        if (i) {
          var c = j(n);
          Tr(i, r.props, "prop", c, r);
        } else if (n.PropTypes !== void 0 && !ae) {
          ae = !0;
          var y = j(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(r) {
      {
        for (var n = Object.keys(r.props), i = 0; i < n.length; i++) {
          var c = n[i];
          if (c !== "children" && c !== "key") {
            k(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), k(null);
            break;
          }
        }
        r.ref !== null && (k(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Ge(r, n, i, c, y, h) {
      {
        var v = dr(r);
        if (!v) {
          var f = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = Dr(y);
          w ? f += w : f += ke();
          var m;
          r === null ? m = "null" : ee(r) ? m = "array" : r !== void 0 && r.$$typeof === t ? (m = "<" + (j(r.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : m = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, f);
        }
        var $ = Ir(r, n, i, y, h);
        if ($ == null)
          return $;
        if (v) {
          var O = n.children;
          if (O !== void 0)
            if (c)
              if (ee(O)) {
                for (var M = 0; M < O.length; M++)
                  Ne(O[M], r);
                Object.freeze && Object.freeze(O);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(O, r);
        }
        return r === o ? Mr($) : kr($), $;
      }
    }
    function Lr(r, n, i) {
      return Ge(r, n, i, !0);
    }
    function Nr(r, n, i) {
      return Ge(r, n, i, !1);
    }
    var Gr = Nr, Ur = Lr;
    He.Fragment = o, He.jsx = Gr, He.jsxs = Ur;
  }()), He;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = fh() : e.exports = lh();
})(yt);
const ph = yt.exports.jsx, vh = yt.exports.jsxs, dh = (e, t) => {
  const a = Wa({
    show: () => ({
      hide: () => {
      }
    })
  });
  return [() => {
    const s = Ha(a);
    if (s === void 0)
      throw new Error("Couldn't find a context object. Is your component inside StackProvider?");
    return s;
  }, (s) => {
    const {
      defaultDuration: l,
      children: d
    } = s, p = bs(), [_, g] = gs([]), S = Ka((T) => {
      var I, C;
      const P = ch("stack-item:"), R = {
        ...T,
        id: P
      };
      g((b) => [...b, R]);
      const x = () => {
        g((b) => oh(b, (Y) => Y.id !== P));
      };
      return R.duration !== 0 && p.set(x, (C = (I = R.duration) != null ? I : l) != null ? C : t.defaultDuration), {
        hide: x
      };
    }, [l, g, p]);
    return /* @__PURE__ */ vh(a.Provider, {
      value: {
        show: S
      },
      children: [d, /* @__PURE__ */ ph(e, {
        stack: _
      })]
    });
  }];
};
export {
  dh as createStackContext
};
