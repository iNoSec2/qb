import { _ as u, k as d, c as p, b as i, $ as n, t as m, o as h } from '../assets/app-BjImoLrr.js';
/* empty css                    */
const f = {
  mixins: [d],
  props: {
    colorObjectName: { required: true },
    data: { required: true },
  },
  data: function () {
    return {
      colorText: '',
      colorBadge: '',
      valueName: '',
    };
  },
  computed: {
    colorValue() {
      let o = this.colorObjectName.split('.');
      let e = this.data;
      for (let a = 0; a < o.length - 1; a++) {
        let r = o[a];
        let s = parseInt(o[a]);
        if (isNaN(s))
          if (e.hasOwnProperty(o[a])) e = e[o[a]];
          else break;
        else if (Array.isArray(e) && e.length > s) e = e[s];
        else break;
      }
      let l = o[o.length - 1];
      let t = o[o.length - 1] + '_name';
      let c = o[o.length - 1] + '_color';
      if (e.hasOwnProperty(t) && e[t]) {
        this.valueName = e[t];
        let a = this.colorCalcul(e[c]);
        this.colorText = a.colorText;
        this.colorBadge = a.colorBadge;
      } else {
        this.valueName = '';
        this.colorText = '';
        this.colorBadge = '';
      }
    },
  },
  mounted() {
    this.colorValue;
  },
};
function N(o, e, l, t, c, a) {
  h();
  return p('div', null, [
    i(
      'div',
      {
        style: n(o.colorBadge),
        class: 'colorCode colorTemp',
      },
      [i('span', { style: n(o.colorText) }, m(o.valueName), 5)],
      4,
    ),
  ]);
}
const y = u(f, [['render', N]]);
export { y as default };
