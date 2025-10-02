import { _, c as u, a as d, w as t, r as l, o as e, f as r, b as i } from '../assets/app-BjImoLrr.js';
const p = {
  props: {
    routeLov: { required: true },
    showAllow: { required: true },
  },
};
const f = { class: 'ps-4' };
function m(s, o, n, k, w, v) {
  const a = l('router-link');
  const c = l('ejs-tooltip');
  e();
  return u('div', f, [
    d(
      c,
      {
        content: s.trans.get('__JSON__.main.grid.toolbar.valueList'),
        animation: s.default_SF_Props.animationTooltip,
      },
      {
        default: t(() => [
          n.showAllow
            ? (e(),
              r(
                a,
                {
                  key: 0,
                  to: n.routeLov,
                },
                {
                  default: t(() => [...(o[0] || (o[0] = [i('span', { class: 'sf-icon-black-list-wf' }, null, -1)]))]),
                  _: 1,
                },
                8,
                ['to'],
              ))
            : (e(),
              r(
                a,
                {
                  key: 1,
                  class: 'disabled-link',
                  to: '#',
                },
                {
                  default: t(() => [...(o[1] || (o[1] = [i('span', { class: 'sf-icon-black-list-wf' }, null, -1)]))]),
                  _: 1,
                },
              )),
        ]),
        _: 1,
      },
      8,
      ['content', 'animation'],
    ),
  ]);
}
const B = _(p, [['render', m]]);
export { B as l };
