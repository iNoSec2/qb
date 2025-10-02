const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/app-BjImoLrr.js', 'css/CMUvL9X7.css', 'css/CQE2eH-I.css']),
) => i.map((i) => d[i]);
import {
  h4 as U,
  h5 as H,
  h6 as T,
  h7 as V,
  aN as R,
  aL as k,
  h0 as J,
  h8 as re,
  h9 as q,
  ha as Ue,
  hb as N,
  hc as se,
  hd as fe,
  he as de,
  gg as He,
  _ as ce,
  k as we,
  p as Ve,
  s as qe,
  i as ye,
  f as z,
  w as y,
  r as j,
  o as d,
  b as r,
  a as c,
  n as P,
  E as K,
  c as u,
  e as me,
  t as b,
  hf as Ze,
  g as O,
  $ as We,
  hg as Se,
  F as G,
  h as xe,
} from '../assets/app-BjImoLrr.js';
import { i as $e } from './BWJp0flw.js';
import { g as Ce } from './D_eyCAsX.js';
import { h as je } from './CKKuZvVl.js';
import Ke from './JzGXi_4H.js';
import ke from './CUvLZwvz.js';
const he = (e, n) => {
  for (const t of Object.keys(n)) e.on(t, n[t]);
};
const De = (e) => {
  for (const n of Object.keys(e)) {
    const t = e[n];
    if (e[n] && F(e[n].cancel)) {
      e[n].cancel();
    }
  }
};
const Xe = (e) => (!e || typeof e.charAt != 'function' ? e : e.charAt(0).toUpperCase() + e.slice(1));
const F = (e) => typeof e == 'function';
const Z = (e, n, t) => {
  for (const s in t) {
    const a = 'set' + Xe(s);
    e[a]
      ? fe(
          () => t[s],
          (l, p) => {
            e[a](l, p);
          },
        )
      : n[a] &&
        fe(
          () => t[s],
          (l) => {
            n[a](l);
          },
        );
  }
};
const W = (e, n, t = {}) => {
  const s = { ...t };
  for (const a in e) {
    const l = n[a];
    const p = e[a];
    if (n[a]) {
      if (!(n[a] && n[a].custom === true)) {
        if (e[a] !== void 0) {
          s[a] = e[a];
        }
      }
    }
  }
  return s;
};
const X = (e) => {
  const n = {};
  const t = {};
  for (const s in e)
    if (s.startsWith('on') && !s.startsWith('onUpdate') && s !== 'onReady') {
      const a = s.slice(2).toLocaleLowerCase();
      n[a] = e[s];
    } else t[s] = e[s];
  return {
    listeners: n,
    attrs: t,
  };
};
const Qe = async (e) => {
  const n = await Promise.all([
    R(() => import('./FwKyrDym.js'), []),
    R(() => import('./BO07Z0pC.js'), []),
    R(() => import('./li_P-BMx.js'), []),
  ]);
  delete e.Default.prototype._getIconUrl;
  e.Default.mergeOptions({
    iconRetinaUrl: n[0].default,
    iconUrl: n[1].default,
    shadowUrl: n[2].default,
  });
};
const le = (e) => {
  const n = T((...s) => console.warn(`Method ${e} has been invoked without being replaced`));
  const t = (...s) => n.value(...s);
  t.wrapped = n;
  N(e, t);
  return t;
};
const ie = (e, n) => (e.wrapped.value = n);
const M =
  (typeof self == 'object' && self.self === self && self) ||
  (typeof global == 'object' && global.global === global && global) ||
  globalThis;
const B = (e) => {
  const n = q(e);
  if (n === void 0) throw new Error(`Attempt to inject ${e.description} before it was provided.`);
  return n;
};
const x = Symbol('useGlobalLeaflet');
const te = Symbol('addLayer');
const Oe = Symbol('removeLayer');
const Te = Symbol('registerControl');
const Ye = Symbol('registerLayerControl');
const Ae = Symbol('canSetParentHtml');
const Pe = Symbol('setParentHtml');
const Le = Symbol('setIcon');
const Re = Symbol('bindPopup');
const et = Symbol('bindTooltip');
const Be = Symbol('unbindPopup');
const tt = Symbol('unbindTooltip');
const oe = {
  options: {
    type: Object,
    default: () => ({}),
    custom: true,
  },
};
const ne = (e) => ({
  options: e.options,
  methods: {},
});
const Q = {
  ...oe,
  pane: { type: String },
  attribution: { type: String },
  name: {
    type: String,
    custom: true,
  },
  layerType: {
    type: String,
    custom: true,
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true,
  },
};
const Ie = (e, n, t) => {
  const s = B(te);
  const a = B(Oe);
  const { options: l, methods: p } = ne(e);
  const i = W(e, Q, l);
  const _ = () => s({ leafletObject: n.value });
  const m = () => a({ leafletObject: n.value });
  const g = {
    ...p,
    setAttribution(v) {
      m();
      n.value.options.attribution = v;
      if (e.visible) {
        _();
      }
    },
    setName() {
      m();
      if (e.visible) {
        _();
      }
    },
    setLayerType() {
      m();
      if (e.visible) {
        _();
      }
    },
    setVisible(v) {
      if (n.value) {
        v ? _() : m();
      }
    },
    bindPopup(v) {
      if (!n.value || !F(n.value.bindPopup)) {
        console.warn('Attempt to bind popup before bindPopup method available on layer.');
        return;
      }
      n.value.bindPopup(v);
    },
    bindTooltip(v) {
      if (!n.value || !F(n.value.bindTooltip)) {
        console.warn('Attempt to bind tooltip before bindTooltip method available on layer.');
        return;
      }
      n.value.bindTooltip(v);
    },
    unbindTooltip() {
      if (n.value) {
        if (F(n.value.closeTooltip)) {
          n.value.closeTooltip();
        }
        if (F(n.value.unbindTooltip)) {
          n.value.unbindTooltip();
        }
      }
    },
    unbindPopup() {
      if (n.value) {
        if (F(n.value.closePopup)) {
          n.value.closePopup();
        }
        if (F(n.value.unbindPopup)) {
          n.value.unbindPopup();
        }
      }
    },
    updateVisibleProp(v) {
      t.emit('update:visible', v);
    },
  };
  N(Re, g.bindPopup);
  N(et, g.bindTooltip);
  N(Be, g.unbindPopup);
  N(tt, g.unbindTooltip);
  de(() => {
    g.unbindPopup();
    g.unbindTooltip();
    m();
  });
  return {
    options: i,
    methods: g,
  };
};
const ot = (e, n) => {
  if (e && n.default) return H('div', { style: { display: 'none' } }, n.default());
};
const nt = {
  ...Q,
  interactive: {
    type: Boolean,
    default: void 0,
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0,
  },
};
const Ee = {
  ...nt,
  stroke: {
    type: Boolean,
    default: void 0,
  },
  color: { type: String },
  weight: { type: Number },
  opacity: { type: Number },
  lineCap: { type: String },
  lineJoin: { type: String },
  dashArray: { type: String },
  dashOffset: { type: String },
  fill: {
    type: Boolean,
    default: void 0,
  },
  fillColor: { type: String },
  fillOpacity: { type: Number },
  fillRule: { type: String },
  className: { type: String },
};
const st = {
  ...Ee,
  radius: { type: Number },
  latLng: {
    type: [Object, Array],
    required: true,
    custom: true,
  },
};
({ ...st });
const Y = {
  ...oe,
  position: { type: String },
};
const lt = (e, n) => {
  const { options: t, methods: s } = ne(e);
  const a = W(e, Y, t);
  const l = {
    ...s,
    setPosition(p) {
      if (n.value) {
        n.value.setPosition(p);
      }
    },
  };
  de(() => {
    if (n.value) {
      n.value.remove();
    }
  });
  return {
    options: a,
    methods: l,
  };
};
const it = (e) => (e.default ? H('div', { ref: 'root' }, e.default()) : null);
U({
  name: 'LControl',
  props: {
    ...Y,
    disableClickPropagation: {
      type: Boolean,
      custom: true,
      default: true,
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: true,
      default: false,
    },
  },
  setup(e, n) {
    const t = T();
    const s = T();
    const a = q(x);
    const l = B(Te);
    const { options: p, methods: i } = lt(e, t);
    V(async () => {
      const { Control: _, DomEvent: m } = a ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      const g = _.extend({
        onAdd() {
          return s.value;
        },
      });
      t.value = k(new g(p));
      Z(i, t.value, e);
      l({ leafletObject: t.value });
      if (e.disableClickPropagation && s.value) {
        m.disableClickPropagation(s.value);
      }
      if (e.disableScrollPropagation && s.value) {
        m.disableScrollPropagation(s.value);
      }
      J(() => n.emit('ready', t.value));
    });
    return {
      root: s,
      leafletObject: t,
    };
  },
  render() {
    return it(this.$slots);
  },
});
({ ...Y });
({ ...Y });
({ ...Y });
({ ...Y });
const Ne = { ...Q };
({ ...Ne });
({ ...Ne });
const pe = {
  ...Q,
  opacity: { type: Number },
  zIndex: { type: Number },
  tileSize: {
    type: [Number, Array, Object],
  },
  noWrap: {
    type: Boolean,
    default: void 0,
  },
  minZoom: { type: Number },
  maxZoom: { type: Number },
  className: { type: String },
};
const Me = (e, n, t) => {
  const { options: s, methods: a } = Ie(e, n, t);
  const l = W(e, pe, s);
  const p = {
    ...a,
    setTileComponent() {
      var i;
      if (!((i = n.value) == null)) {
        i.redraw();
      }
    },
  };
  de(() => {
    n.value.off();
  });
  return {
    options: l,
    methods: p,
  };
};
const at = (e, n, t, s) =>
  e.extend({
    initialize(a) {
      this.tileComponents = {};
      this.on('tileunload', this._unloadTile);
      t.setOptions(this, a);
    },
    createTile(a) {
      const l = this._tileCoordsToKey(a);
      this.tileComponents[l] = n.create('div');
      const p = H(
        {
          setup: s,
          props: ['coords'],
        },
        { coords: a },
      );
      He(p, this.tileComponents[l]);
      return this.tileComponents[l];
    },
    _unloadTile(a) {
      const l = this._tileCoordsToKey(a.coords);
      if (this.tileComponents[l]) {
        this.tileComponents[l].innerHTML = '';
        this.tileComponents[l] = void 0;
      }
    },
  });
U({
  props: {
    ...pe,
    childRender: {
      type: Function,
      required: true,
    },
  },
  setup(e, n) {
    const t = T();
    const s = T(null);
    const a = T(false);
    const l = q(x);
    const p = B(te);
    const { options: i, methods: _ } = Me(e, t, n);
    V(async () => {
      const { GridLayer: m, DomUtil: g, Util: v } = l ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      const C = at(m, g, v, e.childRender);
      t.value = k(new C(i));
      const { listeners: o } = X(n.attrs);
      t.value.on(o);
      Z(_, t.value, e);
      p({
        ...e,
        ..._,
        leafletObject: t.value,
      });
      a.value = true;
      J(() => n.emit('ready', t.value));
    });
    return {
      root: s,
      ready: a,
      leafletObject: t,
    };
  },
  render() {
    return this.ready
      ? H('div', {
          style: { display: 'none' },
          ref: 'root',
        })
      : null;
  },
});
const _e = {
  iconUrl: { type: String },
  iconRetinaUrl: { type: String },
  iconSize: {
    type: [Object, Array],
  },
  iconAnchor: {
    type: [Object, Array],
  },
  popupAnchor: {
    type: [Object, Array],
  },
  tooltipAnchor: {
    type: [Object, Array],
  },
  shadowUrl: { type: String },
  shadowRetinaUrl: { type: String },
  shadowSize: {
    type: [Object, Array],
  },
  shadowAnchor: {
    type: [Object, Array],
  },
  bgPos: {
    type: [Object, Array],
  },
  className: { type: String },
};
U({
  name: 'LIcon',
  props: {
    ..._e,
    ...oe,
  },
  setup(e, n) {
    const t = T();
    const s = q(x);
    const a = B(Ae);
    const l = B(Pe);
    const p = B(Le);
    let i;
    let _;
    let m;
    let g;
    let v;
    const C = (I, S, D) => {
      const A = I && I.innerHTML;
      if (!S) {
        if (D && v && a()) {
          l(A);
        }
        return;
      }
      const { listeners: $ } = X(n.attrs);
      if (v) {
        _(v, $);
      }
      const { options: ae } = ne(e);
      const E = W(e, _e, ae);
      if (A) {
        E.html = A;
      }
      v = E.html ? m(E) : g(E);
      i(v, $);
      p(v);
    };
    const o = () => {
      J(() => C(t.value, true, false));
    };
    const L = () => {
      J(() => C(t.value, false, true));
    };
    const f = {
      setIconUrl: o,
      setIconRetinaUrl: o,
      setIconSize: o,
      setIconAnchor: o,
      setPopupAnchor: o,
      setTooltipAnchor: o,
      setShadowUrl: o,
      setShadowRetinaUrl: o,
      setShadowAnchor: o,
      setBgPos: o,
      setClassName: o,
      setHtml: o,
    };
    V(async () => {
      const { DomEvent: I, divIcon: S, icon: D } = s ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      i = I.on;
      _ = I.off;
      m = S;
      g = D;
      Z(f, {}, e);
      new MutationObserver(L).observe(t.value, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
      });
      o();
    });
    return { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return H('div', { ref: 'root' }, e);
  },
});
({ ...Q });
function ze(e, n, t) {
  var s;
  var a;
  var l;
  if (n === void 0) {
    n = 50;
  }
  if (t === void 0) {
    t = {};
  }
  var p = (s = t.isImmediate) != null && s;
  var i = (a = t.callback) != null && a;
  var _ = t.maxWait;
  var m = Date.now();
  var g = [];
  function v() {
    if (t.maxWait !== void 0) {
      var o = Date.now() - m;
      if (o + n >= t.maxWait) return t.maxWait - o;
    }
    return n;
  }
  var C = function () {
    var o = [].slice.call(arguments);
    var L = this;
    return new Promise(function (f, I) {
      var S = p && l === void 0;
      if (l !== void 0) {
        clearTimeout(l);
      }
      l = setTimeout(function () {
        l = void 0;
        m = Date.now();
        if (!p) {
          var A = e.apply(L, o);
          if (i) {
            i(A);
          }
          g.forEach(function ($) {
            return (0, $.resolve)(A);
          });
          g = [];
        }
      }, v());
      if (S) {
        var D = e.apply(L, o);
        if (i) {
          i(D);
        }
        return f(D);
      }
      g.push({
        resolve: f,
        reject: I,
      });
    });
  };
  C.cancel = function (o) {
    if (l !== void 0) {
      clearTimeout(l);
    }
    g.forEach(function (L) {
      return (0, L.reject)(o);
    });
    g = [];
  };
  return C;
}
const ve = {
  ...oe,
  center: {
    type: [Object, Array],
  },
  bounds: {
    type: [Array, Object],
  },
  maxBounds: {
    type: [Array, Object],
  },
  zoom: { type: Number },
  minZoom: { type: Number },
  maxZoom: { type: Number },
  paddingBottomRight: {
    type: [Object, Array],
  },
  paddingTopLeft: { type: Object },
  padding: { type: Object },
  worldCopyJump: {
    type: Boolean,
    default: void 0,
  },
  crs: {
    type: [String, Object],
  },
  maxBoundsViscosity: { type: Number },
  inertia: {
    type: Boolean,
    default: void 0,
  },
  inertiaDeceleration: { type: Number },
  inertiaMaxSpeed: { type: Number },
  easeLinearity: { type: Number },
  zoomAnimation: {
    type: Boolean,
    default: void 0,
  },
  zoomAnimationThreshold: { type: Number },
  fadeAnimation: {
    type: Boolean,
    default: void 0,
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0,
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0,
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: true,
    custom: true,
  },
};
const rt = U({
  inheritAttrs: false,
  emits: ['ready', 'update:zoom', 'update:center', 'update:bounds'],
  props: ve,
  setup(e, n) {
    const t = T();
    const s = Ue({
      ready: false,
      layersToAdd: [],
      layersInControl: [],
    });
    const { options: a } = ne(e);
    const l = W(e, ve, a);
    const { listeners: p, attrs: i } = X(n.attrs);
    const _ = le(te);
    const m = le(Oe);
    const g = le(Te);
    const v = le(Ye);
    N(x, e.useGlobalLeaflet);
    const C = se(() => {
      const S = {};
      if (e.noBlockingAnimations) {
        S.animate = false;
      }
      return S;
    });
    const o = se(() => {
      const S = C.value;
      if (e.padding) {
        S.padding = e.padding;
      }
      if (e.paddingTopLeft) {
        S.paddingTopLeft = e.paddingTopLeft;
      }
      if (e.paddingBottomRight) {
        S.paddingBottomRight = e.paddingBottomRight;
      }
      return S;
    });
    const L = {
      moveend: ze((S) => {
        if (s.leafletRef) {
          n.emit('update:zoom', s.leafletRef.getZoom());
          n.emit('update:center', s.leafletRef.getCenter());
          n.emit('update:bounds', s.leafletRef.getBounds());
        }
      }),
      overlayadd(S) {
        const D = s.layersInControl.find((A) => A.name === S.name);
        if (D) {
          D.updateVisibleProp(true);
        }
      },
      overlayremove(S) {
        const D = s.layersInControl.find((A) => A.name === S.name);
        if (D) {
          D.updateVisibleProp(false);
        }
      },
    };
    V(async () => {
      if (e.useGlobalLeaflet) {
        M.L = M.L || (await R(() => import('../assets/app-BjImoLrr.js').then((h) => h.l), __vite__mapDeps([0, 1, 2])));
      }
      const {
        map: S,
        CRS: D,
        Icon: A,
        latLngBounds: $,
        latLng: ae,
        stamp: E,
      } = e.useGlobalLeaflet ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      try {
        if (l.beforeMapMount) {
          await l.beforeMapMount();
        }
      } catch (h) {
        console.error(`The following error occurred running the provided beforeMapMount hook ${h.message}`);
      }
      await Qe(A);
      const Ge = typeof l.crs == 'string' ? D[l.crs] : l.crs;
      l.crs = Ge || D.EPSG3857;
      const ee = {
        addLayer(h) {
          if (h.layerType !== void 0) {
            s.layerControl === void 0
              ? s.layersToAdd.push(h)
              : s.layersInControl.find((w) => E(w.leafletObject) === E(h.leafletObject)) ||
                (s.layerControl.addLayer(h), s.layersInControl.push(h));
          }
          if (h.visible !== false) {
            s.leafletRef.addLayer(h.leafletObject);
          }
        },
        removeLayer(h) {
          if (h.layerType !== void 0) {
            s.layerControl === void 0
              ? (s.layersToAdd = s.layersToAdd.filter((w) => w.name !== h.name))
              : (s.layerControl.removeLayer(h.leafletObject),
                (s.layersInControl = s.layersInControl.filter((w) => E(w.leafletObject) !== E(h.leafletObject))));
          }
          s.leafletRef.removeLayer(h.leafletObject);
        },
        registerLayerControl(h) {
          s.layerControl = h;
          s.layersToAdd.forEach((w) => {
            s.layerControl.addLayer(w);
          });
          s.layersToAdd = [];
          g(h);
        },
        registerControl(h) {
          s.leafletRef.addControl(h.leafletObject);
        },
        setZoom(h) {
          const w = s.leafletRef.getZoom();
          if (h !== w) {
            s.leafletRef.setZoom(h, C.value);
          }
        },
        setCrs(h) {
          const w = s.leafletRef.getBounds();
          s.leafletRef.options.crs = h;
          s.leafletRef.fitBounds(w, {
            animate: false,
            padding: [0, 0],
          });
        },
        fitBounds(h) {
          s.leafletRef.fitBounds(h, o.value);
        },
        setBounds(h) {
          if (!h) return;
          const w = $(h);
          if (w.isValid() && !(s.lastSetBounds || s.leafletRef.getBounds()).equals(w, 0)) {
            s.lastSetBounds = w;
            s.leafletRef.fitBounds(w);
          }
        },
        setCenter(h) {
          if (h == null) return;
          const w = ae(h);
          const ge = s.lastSetCenter || s.leafletRef.getCenter();
          if (ge.lat !== w.lat || ge.lng !== w.lng) {
            s.lastSetCenter = w;
            s.leafletRef.panTo(w, C.value);
          }
        },
      };
      ie(_, ee.addLayer);
      ie(m, ee.removeLayer);
      ie(g, ee.registerControl);
      ie(v, ee.registerLayerControl);
      s.leafletRef = k(S(t.value, l));
      Z(ee, s.leafletRef, e);
      he(s.leafletRef, L);
      he(s.leafletRef, p);
      s.ready = true;
      J(() => n.emit('ready', s.leafletRef));
    });
    re(() => {
      De(L);
      if (s.leafletRef) {
        s.leafletRef.off();
        s.leafletRef.remove();
      }
    });
    const f = se(() => s.leafletRef);
    const I = se(() => s.ready);
    return {
      root: t,
      ready: I,
      leafletObject: f,
      attrs: i,
    };
  },
  render({ attrs: e }) {
    if (!e.style) {
      e.style = {};
    }
    if (!e.style.width) {
      e.style.width = '100%';
    }
    if (!e.style.height) {
      e.style.height = '100%';
    }
    return H(
      'div',
      {
        ...e,
        ref: 'root',
      },
      this.ready && this.$slots.default ? this.$slots.default() : {},
    );
  },
});
const dt = ['Symbol(Comment)', 'Symbol(Text)'];
const ct = ['LTooltip', 'LPopup'];
const Fe = {
  ...Q,
  draggable: {
    type: Boolean,
    default: void 0,
  },
  icon: { type: [Object] },
  zIndexOffset: { type: Number },
  latLng: {
    type: [Object, Array],
    custom: true,
    required: true,
  },
};
const pt = (e, n, t) => {
  const { options: s, methods: a } = Ie(e, n, t);
  const l = W(e, Fe, s);
  const p = {
    ...a,
    setDraggable(i) {
      if (n.value.dragging) {
        i ? n.value.dragging.enable() : n.value.dragging.disable();
      }
    },
    latLngSync(i) {
      t.emit('update:latLng', i.latlng);
      t.emit('update:lat-lng', i.latlng);
    },
    setLatLng(i) {
      if (i != null && n.value) {
        const _ = n.value.getLatLng();
        if (!_ || !_.equals(i)) {
          n.value.setLatLng(i);
        }
      }
    },
  };
  return {
    options: l,
    methods: p,
  };
};
const ut = (e, n) => {
  const t = n.slots.default && n.slots.default();
  return t && t.length && t.some(gt);
};
function gt(e) {
  return !(dt.includes(e.type.toString()) || ct.includes(e.type.name));
}
const ft = U({
  name: 'LMarker',
  props: Fe,
  setup(e, n) {
    const t = T();
    const s = T(false);
    const a = q(x);
    const l = B(te);
    N(Ae, () => {
      var m;
      return !!((m = t.value) != null && m.getElement());
    });
    N(Pe, (m) => {
      var g;
      var v;
      const C = F((g = t.value) == null ? void 0 : g.getElement) && ((v = t.value) == null ? void 0 : v.getElement());
      if (C) {
        C.innerHTML = m;
      }
    });
    N(Le, (m) => {
      var g;
      return ((g = t.value) == null ? void 0 : g.setIcon) && t.value.setIcon(m);
    });
    const { options: p, methods: i } = pt(e, t, n);
    const _ = { moveHandler: ze(i.latLngSync) };
    V(async () => {
      const { marker: m, divIcon: g } = a ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      if (ut(p, n)) {
        p.icon = g({ className: '' });
      }
      t.value = k(m(e.latLng, p));
      const { listeners: v } = X(n.attrs);
      t.value.on(v);
      t.value.on('move', _.moveHandler);
      Z(i, t.value, e);
      l({
        ...e,
        ...i,
        leafletObject: t.value,
      });
      s.value = true;
      J(() => n.emit('ready', t.value));
    });
    re(() => De(_));
    return {
      ready: s,
      leafletObject: t,
    };
  },
  render() {
    return ot(this.ready, this.$slots);
  },
});
const yt = {
  ...Ee,
  smoothFactor: { type: Number },
  noClip: {
    type: Boolean,
    default: void 0,
  },
  latLngs: {
    type: Array,
    required: true,
    custom: true,
  },
};
const be = { ...yt };
const Je = {
  ...oe,
  content: {
    type: String,
    default: null,
  },
};
const mt = (e, n) => {
  const { options: t, methods: s } = ne(e);
  const a = {
    ...s,
    setContent(l) {
      if (n.value && l !== null && l !== void 0) {
        n.value.setContent(l);
      }
    },
  };
  return {
    options: t,
    methods: a,
  };
};
const ht = (e) => (e.default ? H('div', { ref: 'root' }, e.default()) : null);
const _t = {
  ...Je,
  latLng: {
    type: [Object, Array],
    default: () => [],
  },
};
const vt = (e, n) => {
  const { options: t, methods: s } = mt(e, n);
  return {
    options: t,
    methods: s,
  };
};
const bt = U({
  name: 'LPopup',
  props: _t,
  setup(e, n) {
    const t = T();
    const s = T(null);
    const a = q(x);
    const l = B(Re);
    const p = B(Be);
    const { options: i, methods: _ } = vt(e, t);
    V(async () => {
      const { popup: m } = a ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      t.value = k(m(i));
      if (e.latLng !== void 0) {
        t.value.setLatLng(e.latLng);
      }
      Z(_, t.value, e);
      const { listeners: g } = X(n.attrs);
      t.value.on(g);
      t.value.setContent(e.content || s.value || '');
      l(t.value);
      J(() => n.emit('ready', t.value));
    });
    re(() => {
      p();
    });
    return {
      root: s,
      leafletObject: t,
    };
  },
  render() {
    return ht(this.$slots);
  },
});
({
  ...be,
  latLngs: { ...be.latLngs },
});
const ue = {
  ...pe,
  tms: {
    type: Boolean,
    default: void 0,
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => (typeof e == 'string' ? true : Array.isArray(e) ? e.every((n) => typeof n == 'string') : false),
  },
  detectRetina: {
    type: Boolean,
    default: void 0,
  },
  url: {
    type: String,
    required: true,
    custom: true,
  },
};
const wt = (e, n, t) => {
  const { options: s, methods: a } = Me(e, n, t);
  const l = W(e, ue, s);
  const p = { ...a };
  return {
    options: l,
    methods: p,
  };
};
const St = U({
  props: ue,
  setup(e, n) {
    const t = T();
    const s = q(x);
    const a = B(te);
    const { options: l, methods: p } = wt(e, t, n);
    V(async () => {
      const { tileLayer: i } = s ? M.L : await R(() => import('./C6uo2YWw.js'), []);
      t.value = k(i(e.url, l));
      const { listeners: _ } = X(n.attrs);
      t.value.on(_);
      Z(p, t.value, e);
      a({
        ...e,
        ...p,
        leafletObject: t.value,
      });
      J(() => n.emit('ready', t.value));
    });
    return { leafletObject: t };
  },
  render() {
    return null;
  },
});
({ ...Je });
({ ...ue });
const Ct = {
  mixins: [we, Ce],
  components: { headerTemplate: je },
  props: {
    addressId: {
      required: true,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      listAddressObjects: [],
      animationSettings: { effect: 'None' },
      promptWidth: '1000px',
      toolbar: [
        'Search',
        {
          id: 'selectionToolbarModalAddFiles',
          text: translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }),
          disabled: true,
        },
      ],
    };
  },
  methods: {
    onModalClose() {
      this.$emit('close');
    },
  },
  mounted() {
    Ve({ target: document.getElementById('spinnerModalAddressObject') });
    qe(document.getElementById('spinnerModalAddressObject'));
    axios
      .get('api/addresses/' + this.addressId + '/objects')
      .then((e) => {
        ye(document.getElementById('spinnerModalAddressObject'));
        let n = e.data.addresses;
        if (e.data.addresses.assets.length > 0) {
          e.data.addresses.assets.forEach((t) => {
            t.isNomenclature && t.parent_asset_id !== null
              ? this.listAddressObjects.push({
                  id: t.getparent.id,
                  node_icon: t.getparent.node_icon,
                  code: t.getparent.code,
                  designation: t.getparent.designation,
                  created_at: t.getparent.created_at,
                  deleted_at: t.getparent.deleted_at,
                })
              : this.listAddressObjects.push({
                  id: t.id,
                  node_icon: t.node_icon,
                  code: t.code,
                  designation: t.designation,
                  created_at: t.created_at,
                  deleted_at: t.deleted_at,
                });
          });
        }
        if (e.data.addresses.companies.length > 0) {
          e.data.addresses.companies.forEach((t) => {
            this.listAddressObjects.push({
              id: t.id,
              node_icon: t.node_icon,
              code: t.code,
              designation: t.designation,
              created_at: t.created_at,
              deleted_at: t.deleted_at,
            });
          });
        }
        if (e.data.addresses.projects.length > 0) {
          e.data.addresses.projects.forEach((t) => {
            this.listAddressObjects.push({
              id: t.id,
              node_icon: t.node_icon,
              code: t.node_reference,
              designation: t.node_designation,
              created_at: t.created_at,
              deleted_at: t.deleted_at,
            });
          });
        }
        if (e.data.addresses.tags.length > 0) {
          e.data.addresses.tags.forEach((t) => {
            this.listAddressObjects.push({
              id: t.id,
              node_icon: t.node_icon,
              code: t.code,
              designation: t.designation,
              created_at: t.created_at,
              deleted_at: t.deleted_at,
            });
          });
        }
        this.listAddressObjects.sort((t, s) => (t.id > s.id ? -1 : t.id < s.id ? 1 : 0));
        this.listAddressObjects = [...this.listAddressObjects];
      })
      .catch((e) => {
        ye(document.getElementById('spinnerModalAddressObject'));
        this.showCenterToast(this.trans.get('__JSON__.file.toast.error.get'), 'e-toast-danger');
      });
  },
};
function jt(e, n, t, s, a, l) {
  const p = j('headerTemplate');
  const i = j('e-column');
  const _ = j('e-columns');
  const m = j('ejs-grid');
  const g = j('ejs-dialog');
  d();
  return z(
    g,
    {
      ref: 'modalShowAdressObject',
      header: 'headerTemplate',
      content: 'templateContent',
      animationSettings: a.animationSettings,
      showCloseIcon: true,
      close: l.onModalClose,
      width: a.promptWidth,
      allowDragging: true,
      isModal: true,
    },
    {
      headerTemplate: y(() => [c(p, { title: e.trans.get('__JSON__.model.value.listObjects') }, null, 8, ['title'])]),
      templateContent: y(() => [
        r('div', null, [
          n[0] || (n[0] = r('div', { id: 'spinnerModalAddressObject' }, null, -1)),
          r('div', null, [
            c(
              m,
              {
                dataSource: a.listAddressObjects,
                id: 'gridAddressObjects',
                enablePersistence: false,
                created: e.onGridCreate,
                ref: e.gridSettings.ref,
                actionBegin: e.actionBegin,
                actionComplete: e.actionComplete,
                allowExcelExport: e.gridSettings.allowExcelExport,
                allowFiltering: e.gridSettings.allowFiltering,
                allowPaging: e.gridSettings.allowPaging,
                allowReordering: e.gridSettings.allowReordering,
                allowResizing: e.gridSettings.allowResizing,
                allowRowDragAndDrop: e.gridSettings.allowRowDragAndDrop,
                allowSelection: e.gridSettings.allowSelection,
                allowSorting: e.gridSettings.allowSorting,
                clipMode: e.gridSettings.clipMode,
                dataBound: e.dataBound,
                enableHover: e.gridSettings.enableHover,
                filterSettings: e.gridSettings.filterSettings,
                height: e.gridSettings.height,
                pageSettings: e.gridSettings.pageSettingsModal,
                rowDragStart: e.rowDragStart,
                rowDropSettings: e.gridSettings.rowDropSettings,
                rowHeight: e.gridSettings.rowHeight,
                searchSettings: e.gridSettings.searchSettings,
                selectionSettings: e.gridSettings.selectionSettings,
                showColumnChooser: e.gridSettings.showColumnChooser,
                toolbar: a.toolbar,
                toolbarClick: e.toolbarClick,
              },
              {
                templateIcon: y(({ data: v }) => [r('span', { class: P(v.node_icon) }, null, 2)]),
                default: y(() => [
                  c(_, null, {
                    default: y(() => [
                      c(
                        i,
                        {
                          field: 'id',
                          headerText: e.trans.get('__JSON__.model.value.id'),
                          type: 'number',
                          isPrimaryKey: true,
                          filter: e.gridSettings.filterExcel,
                        },
                        null,
                        8,
                        ['headerText', 'filter'],
                      ),
                      c(i, {
                        field: 'node_icon',
                        headerText: '',
                        template: 'templateIcon',
                        allowResizing: false,
                        allowReordering: false,
                        allowFiltering: false,
                        allowSorting: false,
                        showInColumnChooser: false,
                        clipMode: 'Clip',
                        textAlign: 'Center',
                      }),
                      c(
                        i,
                        {
                          field: 'code',
                          headerText: e.trans.get('__JSON__.model.value.code'),
                          type: 'string',
                          sortComparer: e.sortComparerNaturalOrder,
                          filter: e.gridSettings.filterExcel,
                        },
                        null,
                        8,
                        ['headerText', 'sortComparer', 'filter'],
                      ),
                      c(
                        i,
                        {
                          field: 'designation',
                          type: 'string',
                          sortComparer: e.sortComparerNaturalOrder,
                          headerText: e.trans.get('__JSON__.items.value.designation'),
                          width: e.gridSettings.extraLargeWidth,
                          filter: e.gridSettings.filterExcel,
                        },
                        null,
                        8,
                        ['sortComparer', 'headerText', 'width', 'filter'],
                      ),
                      c(
                        i,
                        {
                          field: 'created_at',
                          type: 'date',
                          headerText: e.trans.get('__JSON__.model.value.created'),
                          format: e.gridSettings.dateformat,
                        },
                        null,
                        8,
                        ['headerText', 'format'],
                      ),
                      c(
                        i,
                        {
                          field: 'deleted_at',
                          type: 'date',
                          sortComparer: e.sortComparerNaturalOrder,
                          headerText: e.trans.get('__JSON__.model.value.deleted'),
                          filter: e.gridSettings.filterExcel,
                        },
                        null,
                        8,
                        ['sortComparer', 'headerText', 'filter'],
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              [
                'dataSource',
                'created',
                'actionBegin',
                'actionComplete',
                'allowExcelExport',
                'allowFiltering',
                'allowPaging',
                'allowReordering',
                'allowResizing',
                'allowRowDragAndDrop',
                'allowSelection',
                'allowSorting',
                'clipMode',
                'dataBound',
                'enableHover',
                'filterSettings',
                'height',
                'pageSettings',
                'rowDragStart',
                'rowDropSettings',
                'rowHeight',
                'searchSettings',
                'selectionSettings',
                'showColumnChooser',
                'toolbar',
                'toolbarClick',
              ],
            ),
          ]),
        ]),
      ]),
      _: 1,
    },
    8,
    ['animationSettings', 'close', 'width'],
  );
}
const Dt = ce(Ct, [['render', jt]]);
const Ot = {
  mixins: [Ce, we],
  components: {
    polymorphismeColumn: ke,
    colorValue: Ke,
    headerTemplate: je,
  },
  props: {
    addressObjects: {
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalLinkTasks'),
      spinnerModal: 'spinnerModalLinkTask',
      listTasks: [],
      animationSettings: { effect: 'None' },
      promptWidth: '800px',
      toolbar: ['Search'],
      idGrid: 'gridLinkTasks',
    };
  },
  methods: {
    closeModal() {
      this.$refs.modalSelectionAgentChild.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    showPanel(e) {
      if (e.id) {
        K.$emit('showPanel', {
          panelDroite: true,
          refObjet: e.id,
          typeObject: e.type,
        });
      }
    },
    recordDoubleClickOverride(e) {
      this.recordDoubleClick(e);
      this.closeModal();
    },
  },
};
const Tt = ['id'];
const At = { class: 'e-footer-content mt-4' };
function Pt(e, n, t, s, a, l) {
  const p = j('headerTemplate');
  const i = j('e-column');
  const _ = j('e-columns');
  const m = j('ejs-grid');
  const g = j('ejs-button');
  const v = j('ejs-dialog');
  d();
  return u('div', null, [
    c(
      v,
      {
        ref: 'modalSelectionAgentChild',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: a.animationSettings,
        showCloseIcon: true,
        close: l.onModalClose,
        width: a.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: y(() => [c(p, { title: e.trans.get('__JSON__.address.modal.title') }, null, 8, ['title'])]),
        templateContent: y(() => [
          r('div', null, [
            r('div', { id: a.spinnerModal }, null, 8, Tt),
            r('div', null, [
              c(
                m,
                {
                  id: a.idGrid,
                  enablePersistence: false,
                  dataSource: t.addressObjects,
                  created: e.onGridCreate,
                  ref: e.gridSettings.ref,
                  actionBegin: e.actionBegin,
                  allowExcelExport: e.gridSettings.allowExcelExport,
                  allowFiltering: e.gridSettings.allowFiltering,
                  allowPaging: e.gridSettings.allowPaging,
                  allowReordering: e.gridSettings.allowReordering,
                  allowResizing: e.gridSettings.allowResizing,
                  allowRowDragAndDrop: e.gridSettings.allowRowDragAndDrop,
                  allowSelection: e.gridSettings.allowSelection,
                  allowSorting: e.gridSettings.allowSorting,
                  clipMode: e.gridSettings.clipMode,
                  dataBound: e.dataBound,
                  enableHover: e.gridSettings.enableHover,
                  filterSettings: e.gridSettings.filterSettings,
                  height: e.gridSettings.height,
                  pageSettings: e.gridSettings.pageSettingsModal,
                  recordDoubleClick: l.recordDoubleClickOverride,
                  rowDragStart: e.rowDragStart,
                  rowDropSettings: e.gridSettings.rowDropSettings,
                  rowHeight: e.gridSettings.rowHeight,
                  rowSelecting: e.rowSelecting,
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: a.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  templateIcon: y(({ data: C }) => [r('span', { class: P(C.node_icon) }, null, 2)]),
                  default: y(() => [
                    c(_, null, {
                      default: y(() => [
                        c(
                          i,
                          {
                            field: 'id',
                            headerText: e.trans.get('__JSON__.model.value.id'),
                            isPrimaryKey: true,
                            type: 'number',
                            allowResizing: false,
                            allowReordering: false,
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        c(i, {
                          field: 'node_icon',
                          headerText: '',
                          template: 'templateIcon',
                          allowResizing: false,
                          allowReordering: false,
                          allowFiltering: false,
                          allowSorting: false,
                          showInColumnChooser: false,
                          clipMode: 'Clip',
                          textAlign: 'Center',
                        }),
                        c(
                          i,
                          {
                            field: t.addressObjects[0]?.api_prefix === 'projects' ? 'name' : 'code',
                            headerText: e.trans.get('__JSON__.model.value.code'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                          },
                          null,
                          8,
                          ['field', 'headerText', 'sortComparer', 'filter'],
                        ),
                        c(
                          i,
                          {
                            field: t.addressObjects[0]?.api_prefix === 'projects' ? 'description' : 'designation',
                            headerText: e.trans.get('__JSON__.model.value.designation'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                          },
                          null,
                          8,
                          ['field', 'headerText', 'sortComparer', 'filter'],
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                [
                  'id',
                  'dataSource',
                  'created',
                  'actionBegin',
                  'allowExcelExport',
                  'allowFiltering',
                  'allowPaging',
                  'allowReordering',
                  'allowResizing',
                  'allowRowDragAndDrop',
                  'allowSelection',
                  'allowSorting',
                  'clipMode',
                  'dataBound',
                  'enableHover',
                  'filterSettings',
                  'height',
                  'pageSettings',
                  'recordDoubleClick',
                  'rowDragStart',
                  'rowDropSettings',
                  'rowHeight',
                  'rowSelecting',
                  'searchSettings',
                  'selectionSettings',
                  'showColumnChooser',
                  'toolbar',
                  'toolbarClick',
                ],
              ),
            ]),
            r('div', At, [
              r('span', null, [
                c(
                  g,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: l.closeModal,
                  },
                  {
                    default: y(() => [me(b(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                c(
                  g,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: e.linkTasks,
                  },
                  {
                    default: y(() => [me(b(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ['animationSettings', 'close', 'width'],
    ),
  ]);
}
const Lt = ce(Ot, [['render', Pt]]);
delete Se.Icon.Default.prototype._getIconUrl;
Se.Icon.Default.mergeOptions({
  iconRetinaUrl: 'css/images/marker-icon-2x.png',
  iconUrl: 'css/images/marker-icon.png',
  shadowUrl: 'css/images/marker-shadow.png',
});
const Rt = {
  components: {
    ModalShowAddressObjects: Lt,
    LMap: rt,
    LTileLayer: St,
    LMarker: ft,
    LPopup: bt,
    modalAddressObjects: Dt,
  },
  mixins: [$e],
  props: {
    markerSettings: {
      required: false,
      default: function () {
        return [];
      },
    },
    height: { required: true },
    type: { required: true },
  },
  data() {
    return {
      objects: this.trans.get('__JSON__.model.value.objects'),
      addressId: null,
      showModalList: false,
      showModalAddress: false,
      addressesModal: [],
      zoom:
        this.markerSettings.length === 1 && this.markerSettings[0].latitude && this.markerSettings[0].longitude
          ? 12
          : 2,
      url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
      mapOptions: {
        minZoom: 2,
        maxZoom: 18,
        worldCopyJump: true,
      },
      center:
        this.markerSettings.length === 1 && this.markerSettings[0].latitude && this.markerSettings[0].longitude
          ? [this.markerSettings[0].latitude, this.markerSettings[0].longitude]
          : [0, 0],
    };
  },
  computed: {
    styleHeight() {
      return 'height : ' + this.height + 'px';
    },
  },
  methods: {
    coordinates(e) {
      return !e.latitude || isNaN(e.latitude) || !e.longitude || isNaN(e.longitude)
        ? null
        : Ze.latLng(e.latitude, e.longitude);
    },
    onReady() {
      if (this.$refs.map && this.$refs.map.leafletObject) {
        this.$refs.map.leafletObject._onResize();
      }
    },
    showPanel(e) {
      if (e.id) {
        K.$emit('showPanel', {
          panelDroite: true,
          refObjet: e.id,
          typeObject: e.type,
        });
      }
    },
    showModalAddresses(e) {
      if (e.addresses) {
        this.addressesModal = e.addresses;
        this.showModalAddress = true;
      }
    },
    closeModalAddressObjects() {
      this.showModalList = false;
      this.addressId = null;
    },
    closeModalAddresses() {
      this.showModalAddress = false;
      this.addressesModal = [];
    },
  },
  mounted() {
    K.$on('updateMap', this.onReady);
    K.$on('needResizing', this.onReady);
  },
  beforeUnmount() {
    K.$off('updateMap', this.onReady);
    K.$off('needResizing', this.onReady);
  },
};
const Bt = { class: 'p-1 popupClass' };
const It = ['onDblclick'];
const Et = { class: 'popupContent text-center fw-bold' };
const Nt = { class: 'popupContent text-center fw-bold' };
const Mt = ['onDblclick'];
const zt = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const Ft = ['src'];
const Jt = { class: 'col-6' };
const Gt = { class: 'popupContent row text-vertical-center fw-bold' };
const Ut = { class: 'popupContent row text-vertical-center fw-bold' };
const Ht = ['onDblclick'];
const Vt = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const qt = ['src'];
const Zt = { class: 'col-6' };
const Wt = { class: 'popupContent row text-vertical-center fw-bold' };
const xt = { class: 'popupContent row text-vertical-center fw-bold' };
const $t = ['onDblclick'];
const Kt = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const kt = ['src'];
const Xt = { class: 'col-6' };
const Qt = { class: 'popupContent row text-vertical-center fw-bold' };
const Yt = { class: 'popupContent row text-vertical-center fw-bold' };
const eo = { class: 'popupContent row text-vertical-center fw-bold' };
const to = ['onDblclick'];
const oo = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const no = ['src'];
const so = { class: 'col-6' };
const lo = { class: 'popupContent row text-vertical-center fw-bold' };
const io = { class: 'popupContent row text-vertical-center fw-bold' };
const ao = ['onDblclick'];
const ro = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const co = ['src'];
const po = { class: 'col-6' };
const uo = { class: 'popupContent row text-vertical-center fw-bold' };
const go = { class: 'popupContent row text-vertical-center fw-bold' };
const fo = { class: 'popupContent row text-vertical-center fw-bold' };
const yo = ['onDblclick'];
const mo = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const ho = ['src'];
const _o = { class: 'col-6' };
const vo = { class: 'popupContent row text-vertical-center fw-bold' };
const bo = { class: 'popupContent row text-vertical-center fw-bold' };
const wo = ['onDblclick'];
const So = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const Co = ['src'];
const jo = { class: 'col-6' };
const Do = { class: 'popupContent row text-vertical-center fw-bold' };
const Oo = { class: 'popupContent row text-vertical-center fw-bold' };
const To = ['onDblclick'];
const Ao = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const Po = ['src'];
const Lo = { class: 'col-6' };
const Ro = { class: 'popupContent row text-vertical-center fw-bold' };
const Bo = { class: 'popupContent row text-vertical-center fw-bold' };
const Io = ['onDblclick'];
const Eo = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const No = ['src'];
const Mo = { class: 'col-6' };
const zo = { class: 'popupContent row text-vertical-center fw-bold' };
const Fo = { class: 'popupContent row text-vertical-center fw-bold' };
const Jo = ['onDblclick'];
const Go = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const Uo = ['src'];
const Ho = { class: 'col-6' };
const Vo = { class: 'popupContent row text-vertical-center fw-bold' };
const qo = { class: 'popupContent row text-vertical-center fw-bold' };
const Zo = ['onDblclick'];
const Wo = {
  class: 'col-6',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0',
  },
};
const xo = ['src'];
const $o = { class: 'col-6' };
const Ko = { class: 'popupContent row text-vertical-center fw-bold' };
function ko(e, n, t, s, a, l) {
  const p = j('l-tile-layer');
  const i = j('ejs-tooltip');
  const _ = j('l-popup');
  const m = j('l-marker');
  const g = j('l-map');
  const v = j('modalAddressObjects');
  const C = j('modal-show-address-objects');
  d();
  return u(
    'div',
    { style: We(l.styleHeight) },
    [
      c(
        g,
        {
          ref: 'map',
          zoom: a.zoom,
          options: a.mapOptions,
          center: a.center,
          onReady: l.onReady,
        },
        {
          default: y(() => [
            c(p, { url: a.url }, null, 8, ['url']),
            (d(true),
            u(
              G,
              null,
              xe(
                t.markerSettings,
                (o, L) => (
                  d(),
                  u(
                    G,
                    null,
                    [
                      l.coordinates(o)
                        ? (d(),
                          z(
                            m,
                            {
                              key: L,
                              'lat-lng': l.coordinates(o),
                            },
                            {
                              default: y(() => [
                                c(
                                  _,
                                  null,
                                  {
                                    default: y(() => [
                                      r('div', Bt, [
                                        t.type === 'addresses'
                                          ? (d(),
                                            u(
                                              'div',
                                              {
                                                key: 0,
                                                onDblclick: (f) =>
                                                  l.showPanel({
                                                    type: 'addresses',
                                                    id: o.id,
                                                  }),
                                              },
                                              [
                                                c(
                                                  i,
                                                  {
                                                    openDelay: '400',
                                                    content: o.designation,
                                                    animation: e.default_SF_Props.animationTooltip,
                                                  },
                                                  {
                                                    default: y(() => [r('div', Et, b(o.designation), 1)]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ['content', 'animation'],
                                                ),
                                                c(
                                                  i,
                                                  {
                                                    openDelay: '400',
                                                    content: o.city,
                                                    animation: e.default_SF_Props.animationTooltip,
                                                  },
                                                  {
                                                    default: y(() => [r('div', Nt, b(o.city), 1)]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ['content', 'animation'],
                                                ),
                                              ],
                                              40,
                                              It,
                                            ))
                                          : O('', true),
                                        t.type === 'companies' && o.companies
                                          ? (d(),
                                            u(
                                              G,
                                              { key: 1 },
                                              [
                                                o.companies.length === 1
                                                  ? (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showPanel({
                                                            type: 'companies',
                                                            id: o.companies[0].id,
                                                          }),
                                                      },
                                                      [
                                                        r('div', zt, [
                                                          o.companies[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.companies[0].urlImage,
                                                                  onError:
                                                                    n[0] ||
                                                                    (n[0] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                },
                                                                null,
                                                                40,
                                                                Ft,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.companies[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', Jt, [
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              content: o.companies[0].designation,
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r('div', Gt, b(o.companies[0].designation), 1),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', Ut, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      Mt,
                                                    ))
                                                  : (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 1,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showModalAddresses({ addresses: [...o.companies] }),
                                                      },
                                                      [
                                                        r('div', Vt, [
                                                          o.companies[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.companies[0].urlImage,
                                                                  onError:
                                                                    n[1] ||
                                                                    (n[1] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                  alt: '',
                                                                },
                                                                null,
                                                                40,
                                                                qt,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.companies[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', Zt, [
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content:
                                                                o.companies.length +
                                                                ' ' +
                                                                e.trans.get(
                                                                  '__JSON__.menu.' + o.companies[0].api_prefix,
                                                                ),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r(
                                                                  'div',
                                                                  Wt,
                                                                  b(
                                                                    o.companies.length +
                                                                      ' ' +
                                                                      e.trans.get(
                                                                        '__JSON__.menu.' + o.companies[0].api_prefix,
                                                                      ),
                                                                  ),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', xt, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      Ht,
                                                    )),
                                              ],
                                              64,
                                            ))
                                          : O('', true),
                                        t.type === 'projects' && o.projects && o.projects.length > 0
                                          ? (d(),
                                            u(
                                              G,
                                              { key: 2 },
                                              [
                                                o.projects.length === 1
                                                  ? (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showPanel({
                                                            type: 'projects',
                                                            id: o.projects[0].id,
                                                          }),
                                                      },
                                                      [
                                                        r('div', Kt, [
                                                          o.projects[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.projects[0].urlImage,
                                                                  onError:
                                                                    n[2] ||
                                                                    (n[2] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                },
                                                                null,
                                                                40,
                                                                kt,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.projects[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', Xt, [
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content: o.projects[0].name,
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r('div', Qt, b(o.projects[0].name), 1),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content: o.projects[0].description,
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r('div', Yt, b(o.projects[0].description), 1),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', eo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      $t,
                                                    ))
                                                  : (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 1,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showModalAddresses({ addresses: [...o.projects] }),
                                                      },
                                                      [
                                                        r('div', oo, [
                                                          o.projects[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.projects[0].urlImage,
                                                                  onError:
                                                                    n[3] ||
                                                                    (n[3] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                  alt: '',
                                                                },
                                                                null,
                                                                40,
                                                                no,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.projects[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', so, [
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content:
                                                                o.projects.length +
                                                                ' ' +
                                                                e.trans.get(
                                                                  '__JSON__.menu.' + o.projects[0].api_prefix,
                                                                ),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r(
                                                                  'div',
                                                                  lo,
                                                                  b(
                                                                    o.projects.length +
                                                                      ' ' +
                                                                      e.trans.get(
                                                                        '__JSON__.menu.' + o.projects[0].api_prefix,
                                                                      ),
                                                                  ),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', io, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      to,
                                                    )),
                                              ],
                                              64,
                                            ))
                                          : O('', true),
                                        t.type === 'tags' && o.tags
                                          ? (d(),
                                            u(
                                              G,
                                              { key: 3 },
                                              [
                                                o.tags.length === 1
                                                  ? (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showPanel({
                                                            type: 'tags',
                                                            id: o.tags[0].id,
                                                          }),
                                                      },
                                                      [
                                                        r('div', ro, [
                                                          o.tags[0] && o.tags[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.tags[0].urlImage,
                                                                  onError:
                                                                    n[4] ||
                                                                    (n[4] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                },
                                                                null,
                                                                40,
                                                                co,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.tags[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', po, [
                                                          o.tags.length > 0
                                                            ? (d(),
                                                              z(
                                                                i,
                                                                {
                                                                  key: 0,
                                                                  animation: e.default_SF_Props.animationTooltip,
                                                                  openDelay: '400',
                                                                  content: o.tags[0].code,
                                                                },
                                                                {
                                                                  default: y(() => [
                                                                    r('div', uo, b(o.tags[0].code), 1),
                                                                  ]),
                                                                  _: 2,
                                                                },
                                                                1032,
                                                                ['animation', 'content'],
                                                              ))
                                                            : O('', true),
                                                          o.tags.length > 0
                                                            ? (d(),
                                                              z(
                                                                i,
                                                                {
                                                                  key: 1,
                                                                  animation: e.default_SF_Props.animationTooltip,
                                                                  openDelay: '400',
                                                                  content: o.tags[0].designation,
                                                                },
                                                                {
                                                                  default: y(() => [
                                                                    r('div', go, b(o.tags[0].designation), 1),
                                                                  ]),
                                                                  _: 2,
                                                                },
                                                                1032,
                                                                ['animation', 'content'],
                                                              ))
                                                            : O('', true),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', fo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      ao,
                                                    ))
                                                  : (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 1,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showModalAddresses({ addresses: [...o.tags] }),
                                                      },
                                                      [
                                                        r('div', mo, [
                                                          o.tags[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.tags[0].urlImage,
                                                                  onError:
                                                                    n[5] ||
                                                                    (n[5] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                  alt: '',
                                                                },
                                                                null,
                                                                40,
                                                                ho,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.tags[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', _o, [
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content:
                                                                o.tags.length +
                                                                ' ' +
                                                                e.trans.get('__JSON__.menu.' + o.tags[0].api_prefix),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r(
                                                                  'div',
                                                                  vo,
                                                                  b(
                                                                    o.tags.length +
                                                                      ' ' +
                                                                      e.trans.get(
                                                                        '__JSON__.menu.' + o.tags[0].api_prefix,
                                                                      ),
                                                                  ),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', bo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      yo,
                                                    )),
                                              ],
                                              64,
                                            ))
                                          : O('', true),
                                        t.type === 'assets' && o.assets
                                          ? (d(),
                                            u(
                                              G,
                                              { key: 4 },
                                              [
                                                o.assets.length === 1
                                                  ? (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showPanel({
                                                            type: 'address',
                                                            id: o.assets[0].id,
                                                          }),
                                                      },
                                                      [
                                                        r('div', So, [
                                                          o.assets[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.assets[0].urlImage,
                                                                  onError:
                                                                    n[6] ||
                                                                    (n[6] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                },
                                                                null,
                                                                40,
                                                                Co,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.assets[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', jo, [
                                                          o.assets.length > 0
                                                            ? (d(),
                                                              z(
                                                                i,
                                                                {
                                                                  key: 0,
                                                                  animation: e.default_SF_Props.animationTooltip,
                                                                  openDelay: '400',
                                                                  content: o.assets[0].designation,
                                                                },
                                                                {
                                                                  default: y(() => [
                                                                    r('div', Do, b(o.assets[0].designation), 1),
                                                                  ]),
                                                                  _: 2,
                                                                },
                                                                1032,
                                                                ['animation', 'content'],
                                                              ))
                                                            : O('', true),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', Oo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      wo,
                                                    ))
                                                  : (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 1,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showModalAddresses({ addresses: [...o.assets] }),
                                                      },
                                                      [
                                                        r('div', Ao, [
                                                          o.assets[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.assets[0].urlImage,
                                                                  onError:
                                                                    n[7] ||
                                                                    (n[7] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                  alt: '',
                                                                },
                                                                null,
                                                                40,
                                                                Po,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.assets[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', Lo, [
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content:
                                                                o.assets.length +
                                                                ' ' +
                                                                e.trans.get('__JSON__.menu.' + o.assets[0].api_prefix),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r(
                                                                  'div',
                                                                  Ro,
                                                                  b(
                                                                    o.assets.length +
                                                                      ' ' +
                                                                      e.trans.get(
                                                                        '__JSON__.menu.' + o.assets[0].api_prefix,
                                                                      ),
                                                                  ),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', Bo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      To,
                                                    )),
                                              ],
                                              64,
                                            ))
                                          : O('', true),
                                        t.type === 'locations' && o.locations
                                          ? (d(),
                                            u(
                                              G,
                                              { key: 5 },
                                              [
                                                o.locations.length === 1
                                                  ? (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 0,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showPanel({
                                                            type: 'locations',
                                                            id: o.locations[0].id,
                                                          }),
                                                      },
                                                      [
                                                        r('div', Eo, [
                                                          o.locations[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.locations[0].urlImage,
                                                                  onError:
                                                                    n[8] ||
                                                                    (n[8] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                },
                                                                null,
                                                                40,
                                                                No,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.locations[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', Mo, [
                                                          o.locations.length > 0
                                                            ? (d(),
                                                              z(
                                                                i,
                                                                {
                                                                  key: 0,
                                                                  animation: e.default_SF_Props.animationTooltip,
                                                                  openDelay: '400',
                                                                  content: o.locations[0].designation,
                                                                },
                                                                {
                                                                  default: y(() => [
                                                                    r('div', zo, b(o.locations[0].designation), 1),
                                                                  ]),
                                                                  _: 2,
                                                                },
                                                                1032,
                                                                ['animation', 'content'],
                                                              ))
                                                            : O('', true),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', Fo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      Io,
                                                    ))
                                                  : (d(),
                                                    u(
                                                      'div',
                                                      {
                                                        key: 1,
                                                        class: 'row',
                                                        onDblclick: (f) =>
                                                          l.showModalAddresses({ addresses: [...o.locations] }),
                                                      },
                                                      [
                                                        r('div', Go, [
                                                          o.locations[0].urlImage
                                                            ? (d(),
                                                              u(
                                                                'img',
                                                                {
                                                                  key: 0,
                                                                  src: o.locations[0].urlImage,
                                                                  onError:
                                                                    n[9] ||
                                                                    (n[9] = (...f) =>
                                                                      e.replaceByDefault && e.replaceByDefault(...f)),
                                                                  class: 'imgGallery',
                                                                  alt: '',
                                                                },
                                                                null,
                                                                40,
                                                                Uo,
                                                              ))
                                                            : (d(),
                                                              u(
                                                                'span',
                                                                {
                                                                  key: 1,
                                                                  class: P([
                                                                    'text-vertical-center',
                                                                    o.assets[0].node_icon,
                                                                  ]),
                                                                  style: {
                                                                    color: '#191e2c',
                                                                    'font-size': '40px',
                                                                  },
                                                                },
                                                                null,
                                                                2,
                                                              )),
                                                        ]),
                                                        r('div', Ho, [
                                                          c(
                                                            i,
                                                            {
                                                              animation: e.default_SF_Props.animationTooltip,
                                                              openDelay: '400',
                                                              content:
                                                                o.locations.length +
                                                                ' ' +
                                                                e.trans.get(
                                                                  '__JSON__.menu.' + o.locations[0].api_prefix,
                                                                ),
                                                            },
                                                            {
                                                              default: y(() => [
                                                                r(
                                                                  'div',
                                                                  Vo,
                                                                  b(
                                                                    o.locations.length +
                                                                      ' ' +
                                                                      e.trans.get(
                                                                        '__JSON__.menu.' + o.locations[0].api_prefix,
                                                                      ),
                                                                  ),
                                                                  1,
                                                                ),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['animation', 'content'],
                                                          ),
                                                          c(
                                                            i,
                                                            {
                                                              openDelay: '400',
                                                              content: o.city,
                                                              animation: e.default_SF_Props.animationTooltip,
                                                            },
                                                            {
                                                              default: y(() => [r('div', qo, b(o.designation), 1)]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ['content', 'animation'],
                                                          ),
                                                        ]),
                                                      ],
                                                      40,
                                                      Jo,
                                                    )),
                                              ],
                                              64,
                                            ))
                                          : O('', true),
                                        t.type === 'files' && o
                                          ? (d(),
                                            u(
                                              'div',
                                              {
                                                key: 6,
                                                class: 'row',
                                                onDblclick: (f) =>
                                                  l.showPanel({
                                                    type: 'files',
                                                    id: o.id,
                                                  }),
                                              },
                                              [
                                                r('div', Wo, [
                                                  r(
                                                    'img',
                                                    {
                                                      src: o.urlImage,
                                                      onError:
                                                        n[10] ||
                                                        (n[10] = (...f) =>
                                                          e.replaceByDefault && e.replaceByDefault(...f)),
                                                      class: 'imgGallery',
                                                      alt: '',
                                                    },
                                                    null,
                                                    40,
                                                    xo,
                                                  ),
                                                ]),
                                                r('div', $o, [
                                                  c(
                                                    i,
                                                    {
                                                      openDelay: '400',
                                                      content: o.title,
                                                      animation: e.default_SF_Props.animationTooltip,
                                                    },
                                                    {
                                                      default: y(() => [r('div', Ko, b(o.title), 1)]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ['content', 'animation'],
                                                  ),
                                                ]),
                                              ],
                                              40,
                                              Zo,
                                            ))
                                          : O('', true),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['lat-lng'],
                          ))
                        : O('', true),
                    ],
                    64,
                  )
                ),
              ),
              256,
            )),
          ]),
          _: 1,
        },
        8,
        ['zoom', 'options', 'center', 'onReady'],
      ),
      a.showModalList
        ? (d(),
          z(
            v,
            {
              key: 0,
              addressId: a.addressId,
              onClose: l.closeModalAddressObjects,
            },
            null,
            8,
            ['addressId', 'onClose'],
          ))
        : O('', true),
      a.showModalAddress
        ? (d(),
          z(
            C,
            {
              key: 1,
              'address-objects': a.addressesModal,
              onClose: l.closeModalAddresses,
            },
            null,
            8,
            ['address-objects', 'onClose'],
          ))
        : O('', true),
    ],
    4,
  );
}
const nn = ce(Rt, [
  ['render', ko],
  ['__scopeId', 'data-v-909df007'],
]);
export { nn as a };
