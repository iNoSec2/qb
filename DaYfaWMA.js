import { _ as r, k as a, c as l, t as c, $ as s, o as p } from '../assets/app-BjImoLrr.js';
const i = {
  name: 'templateSupplier',
  mixins: [a],
  props: { data: { required: true } },
  computed: {
    colorText() {
      return this.colorCalcul(this.data.supplier_color).colorText.replace(/color|:|;/gim, '');
    },
  },
};
function n(o, u, e, d, m, t) {
  p();
  return l(
    'span',
    {
      style: s({
        background: e.data.supplier_color,
        color: t.colorText,
      }),
      class: 'colorCode colorTemp',
    },
    c(e.data.supplier ? e.data.supplier : e.data.supplier_name),
    5,
  );
}
const x = r(i, [['render', n]]);
export { x as t };
