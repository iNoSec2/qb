import { _ as r, E as c, c as p, a as e, w as n, r as a, n as _, o as m, b as u } from '../assets/app-BjImoLrr.js';
const f = {
  name: 'addObject',
  props: { showAdd: { required: true } },
  methods: {
    openAddModal() {
      if (this.showAdd) {
        c.$emit('openModalAdd');
      }
    },
  },
};
function b(o, t, s, j, A, d) {
  const i = a('ejs-button');
  const l = a('ejs-tooltip');
  m();
  return p(
    'div',
    { class: _({ disabledIcon: !s.showAdd }) },
    [
      e(
        l,
        {
          content: o.trans.get('__JSON__.main.grid.toolbar.add'),
          animation: o.default_SF_Props.animationTooltip,
        },
        {
          default: n(() => [
            e(
              i,
              {
                ref: 'button',
                id: 'dialogbtn',
                onClick: d.openAddModal,
              },
              {
                default: n(() => [...(t[0] || (t[0] = [u('span', { class: 'sf-icon-addition- plus' }, null, -1)]))]),
                _: 1,
              },
              8,
              ['onClick'],
            ),
          ]),
          _: 1,
        },
        8,
        ['content', 'animation'],
      ),
    ],
    2,
  );
}
const w = r(f, [['render', b]]);
export { w as a };
