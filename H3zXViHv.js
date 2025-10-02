import {
  _ as N,
  k as b,
  c as n,
  F as f,
  h as _,
  o as r,
  b as d,
  g as k,
  n as C,
  $ as g,
  t as x,
} from '../assets/app-BjImoLrr.js';
const y = {
  mixins: [b],
  props: {
    codeName: { required: true },
    designationName: { required: true },
    iconName: { required: true },
    background: { required: true },
    data: { required: true },
  },
  data: function () {
    return { backgroundAgent: '' };
  },
  computed: {
    agents() {
      let l = [];
      let t = this.data;
      if (
        this.codeName &&
        this.designationName &&
        this.iconName &&
        this.data.hasOwnProperty(this.codeName) &&
        this.data.hasOwnProperty(this.designationName) &&
        this.data.hasOwnProperty(this.iconName) &&
        this.data[this.codeName] &&
        this.data[this.designationName] &&
        this.data[this.iconName]
      ) {
        let i = this.data[this.codeName].split('%!');
        let m = this.data[this.designationName].split('%!');
        let c = this.data[this.iconName].split('%!');
        let o = null;
        if (this.background !== null && this.background != '') {
          o = this.data[this.background]?.split('%!');
        }
        for (let e = 0; e < i.length; e++) {
          let a = i[e];
          let s = m[e];
          if (s.includes('section.list.')) {
            s = this.trans.get('__JSON__.' + s);
          }
          if (a !== s || c[e] === 'sf-icon-users-wf') {
            a += ' ' + s;
          }
          let u = null;
          if (o) {
            u = this.colorCalcul(o[e]);
          }
          let p = u?.colorText?.replace(/background-color|color|:|;/gim, '');
          let h = u?.colorBadge?.replace(/background-color|color|:|;/gim, '');
          l.push({
            name: a,
            icon: c[e],
            backgroundAgent: o ? o[e] : '',
            textColor: p,
            badgeColor: h,
          });
        }
      }
      return l;
    },
  },
};
const q = { key: 0 };
function w(l, t, i, m, c, o) {
  r();
  return n('div', null, [
    (r(true),
    n(
      f,
      null,
      _(
        o.agents,
        (e, a) => (
          r(),
          n('span', null, [
            d(
              'span',
              {
                style: g('background:' + e.backgroundAgent),
                class: 'colorCode colorTemp',
              },
              [
                d(
                  'span',
                  {
                    style: g('color:' + e.textColor),
                    class: C(e.icon),
                  },
                  null,
                  6,
                ),
                d(
                  'span',
                  {
                    style: g('color:' + e.textColor),
                    class: 'agentText',
                  },
                  x(e.name),
                  5,
                ),
              ],
              4,
            ),
            a !== o.agents.length - 1 ? (r(), n('span', q, ' | ')) : k('', true),
          ])
        ),
      ),
      256,
    )),
  ]);
}
const T = N(y, [['render', w]]);
export { T as default };
