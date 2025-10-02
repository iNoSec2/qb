import {
  _ as h,
  k as n,
  E as u,
  c as a,
  g as c,
  b as m,
  $ as s,
  n as y,
  t as d,
  o as i,
} from '../assets/app-BjImoLrr.js';
/* empty css        */
/* empty css                    */
const _ = {
  mixins: [n],
  props: {
    polymorph: { required: true },
    canShowPanel: {
      required: false,
      default() {
        return true;
      },
    },
    data: { required: true },
  },
  data: function () {
    return {
      colorText: '',
      colorBadge: '',
    };
  },
  computed: {
    explodedPolymorph() {
      return this.polymorph.split('.');
    },
    lastPart() {
      return this.explodedPolymorph[this.explodedPolymorph.length - 1];
    },
    subValue() {
      let e = this.data;
      for (let r = 0; r < this.explodedPolymorph.length - 1; r++) {
        let t = this.explodedPolymorph[r];
        let l = parseInt(this.explodedPolymorph[r]);
        if (isNaN(l))
          if (e.hasOwnProperty(this.explodedPolymorph[r])) e = e[this.explodedPolymorph[r]];
          else break;
        else if (Array.isArray(e) && e.length > l) e = e[l];
        else break;
      }
      return e;
    },
    polymorph_id() {
      let e = this.lastPart + '_id';
      return this.subValue.hasOwnProperty(e) ? this.subValue[e] : null;
    },
    polymorph_api_prefix() {
      let e = this.lastPart + '_api_prefix';
      return this.subValue.hasOwnProperty(e) ? this.subValue[e] : null;
    },
    polymorph_name() {
      let e = this.lastPart + '_name';
      return this.subValue.hasOwnProperty(e) ? this.subValue[e] : '';
    },
    polymorph_icon() {
      let e = this.lastPart + '_node_icon';
      return this.subValue.hasOwnProperty(e) ? this.subValue[e] : '';
    },
    polymorph_color() {
      let e = this.lastPart + '_color';
      if (this.subValue.hasOwnProperty(e)) {
        let r = this.colorCalcul(this.subValue[e]);
        this.colorText = r.colorText.replace(/color|:|;/gim, '');
        this.colorBadge = r.colorBadge.replace(/background-color|color|:|;/gim, '');
        return this.subValue[e];
      } else return '';
    },
  },
  methods: {
    showRightPanel(e) {
      if (this.canShowPanel) {
        e.preventDefault();
        e.stopPropagation();
        if (this.polymorph_id && this.polymorph_api_prefix) {
          u.$emit('showPanel', {
            panelDroite: true,
            refObjet: this.polymorph_id,
            typeObject: this.polymorph_api_prefix,
          });
        }
      }
    },
  },
};
function f(e, r, t, l, b, o) {
  i();
  return a(
    'div',
    {
      class: 'd-flex colorStruc',
      style: s([
        {
          'line-height': 'normal',
          'flex-wrap': 'inherit',
          cursor: 'pointer',
        },
        t.canShowPanel && this.polymorph_id && this.polymorph_api_prefix ? 'cursor: pointer' : '',
        this.polymorph_color ? 'background:' + this.polymorph_color : '',
      ]),
      onDblclick: r[0] || (r[0] = (...p) => o.showRightPanel && o.showRightPanel(...p)),
    },
    [
      o.polymorph_id
        ? (i(),
          a(
            'span',
            {
              key: 0,
              class: y(['me-2', o.polymorph_icon]),
              style: s({ color: e.colorText }),
            },
            null,
            6,
          ))
        : c('', true),
      m('div', { style: s({ color: e.colorText }) }, d(o.polymorph_name), 5),
    ],
    36,
  );
}
const V = h(_, [['render', f]]);
export { V as default };
