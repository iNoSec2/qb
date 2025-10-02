import { _ as c, c as a, g as d, t as i, o as t } from '../assets/app-BjImoLrr.js';
const n = { props: { data: { required: true } } };
const l = ['checked'];
const o = { key: 1 };
function r(u, _, e, s, v, m) {
  t();
  return a('div', null, [
    e.data.type === 1
      ? (t(),
        a(
          'input',
          {
            key: 0,
            class: 'e-small e-primary centerCheckDisabled',
            type: 'checkbox',
            checked:
              e.data.validation_value == 1 || e.data.validation_value === true || e.data.validation_value === 'true',
            disabled: true,
          },
          null,
          8,
          l,
        ))
      : d('', true),
    e.data.type === 2 || e.data.type === 3 || e.data.type === 4
      ? (t(), a('div', o, i(e.data.validation_value), 1))
      : d('', true),
  ]);
}
const k = c(n, [
  ['render', r],
  ['__scopeId', 'data-v-3081a151'],
]);
export { k as v };
