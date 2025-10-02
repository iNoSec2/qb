import { _ as d, c as i, b as c, o as l } from '../assets/app-BjImoLrr.js';
const o = {
  props: {
    is_editable: { required: true },
    docsheet_id: {
      required: false,
      default() {
        return null;
      },
    },
    data: { required: true },
  },
  methods: {
    selectPrimary() {
      if (!this.data.primary) {
        this.$emit('changePrimary', {
          fileId: this.data.id,
          docsheetId: this.docsheet_id,
        });
      }
    },
  },
};
const n = {
  class: 'row',
  style: {
    display: 'flex',
    'justify-content': 'center',
  },
};
const u = ['disabled', 'checked'];
function m(a, e, t, _, h, r) {
  l();
  return i('div', n, [
    c(
      'input',
      {
        disabled: !a.can('update', 'docsheets') || !t.is_editable,
        type: 'radio',
        onClick: e[0] || (e[0] = (...s) => r.selectPrimary && r.selectPrimary(...s)),
        checked: t.data.primary,
      },
      null,
      8,
      u,
    ),
  ]);
}
const p = d(o, [['render', m]]);
export { p as t };
