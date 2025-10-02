import { _ as d, k as C, c, g as n, $ as i, t as m, F as h, h as g, o as s, b as p } from '../assets/app-BjImoLrr.js';
const k = {
  mixins: [C],
  props: {
    manufacturer: { required: true },
    data: { required: true },
    manufacturerColor: { required: false },
    list: { required: true },
    listColor: { required: false },
  },
  data: function () {
    return { colorText: '' };
  },
  computed: {
    manufacturerName() {
      let e = this.data;
      return this.data.hasOwnProperty(this.manufacturer) && this.data[this.manufacturer]
        ? this.data[this.manufacturer]
        : '';
    },
    manufacturerBackgroundColor() {
      let e = this.data;
      if (this.data.hasOwnProperty(this.manufacturerColor) && this.data[this.manufacturerColor]) {
        let t = this.colorCalcul(this.data[this.manufacturerColor]);
        this.colorText = t?.colorText?.replace(/color|:|;/gim, '');
        return this.data[this.manufacturerColor];
      } else return '';
    },
    listConcat() {
      let e = this.data;
      let t = [];
      let o = [];
      if (this.data.hasOwnProperty(this.listColor) && this.data[this.listColor]) {
        t = this.data[this.listColor].split('%!');
      }
      if (this.data.hasOwnProperty(this.list) && this.data[this.list]) {
        o = this.data[this.list].split('%!');
      }
      let a = null;
      if (t.length) {
        a = [];
        let u = '';
        for (let r = 0; r < t.length; r++) {
          let l = this.colorCalcul(t[r]);
          t[r] != ''
            ? (l.colorText?.replace(/color|:|;/gim, ''),
              (u = l.colorText?.replace(/color|:|;/gim, '')),
              a.push({
                text: o[r],
                background: t[r],
                color: u,
              }),
              (u = ''))
            : a.push({
                text: o[r],
                background: '',
                color: '',
              });
        }
      }
      return (
        a ||
        (o.length
          ? ((a = []),
            o.forEach((u) => {
              a.push({
                text: u,
                background: '',
                color: '',
              });
            }),
            a)
          : '')
      );
    },
  },
};
const x = { key: 0 };
const b = { key: 1 };
function _(e, t, o, a, u, r) {
  s();
  return c('div', null, [
    r.manufacturerName && r.manufacturerName !== ''
      ? (s(),
        c(
          'span',
          {
            key: 0,
            style: i([
              { 'font-weight': 'bold' },
              {
                background: r.manufacturerBackgroundColor,
                color: e.colorText,
              },
            ]),
            class: 'colorCode colorTemp',
          },
          m(r.manufacturerName),
          5,
        ))
      : n('', true),
    (s(true),
    c(
      h,
      null,
      g(
        r.listConcat,
        (l, f) => (
          s(),
          c(
            h,
            null,
            [
              r.manufacturerName &&
              r.manufacturerName !== '' &&
              r.listConcat &&
              r.listConcat.length > 0 &&
              l.text !== ''
                ? (s(), c('span', x, ' | '))
                : n('', true),
              p(
                'span',
                {
                  style: i({
                    background: l.background,
                    color: l.color,
                  }),
                  class: 'colorCode colorTemp',
                },
                m(l.text),
                5,
              ),
              f !== r.listConcat.length - 1 ? (s(), c('span', b, ' | ')) : n('', true),
            ],
            64,
          )
        ),
      ),
      256,
    )),
  ]);
}
const N = d(k, [['render', _]]);
export { N as s };
