import { c as p } from './BzXjulcJ.js';
import {
  _ as f,
  c as r,
  b as s,
  g as b,
  a as n,
  w as o,
  r as u,
  F as m,
  h as y,
  o as i,
} from '../assets/app-BjImoLrr.js';
const F = {
  mixins: [p],
  name: 'baseGrid',
  props: {
    routeGrid: { required: true },
    content: {
      required: false,
      default() {
        return translate.get('__JSON__.main.grid.toolbar.grid');
      },
    },
    typeObject: { required: false },
  },
  computed: {
    dynamicTables() {
      let t = this.mainStore.dynamicTables;
      return this.mainStore.dynamicTables && this.mainStore.dynamicTables[this.typeObject]
        ? this.mainStore.dynamicTables[this.typeObject]
        : [];
    },
  },
};
const G = { class: 'ps-4' };
const T = { class: 'ps-4' };
function g(t, e, a, j, k, _) {
  const l = u('router-link');
  const c = u('ejs-tooltip');
  i();
  return r(
    m,
    null,
    [
      s('div', G, [
        n(
          c,
          {
            content: a.content,
            animation: t.default_SF_Props.animationTooltip,
          },
          {
            default: o(() => [
              n(
                l,
                { to: a.routeGrid },
                {
                  default: o(() => [...(e[0] || (e[0] = [s('span', { class: 'sf-icon-table' }, null, -1)]))]),
                  _: 1,
                },
                8,
                ['to'],
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
      t.isGridForCart
        ? b('', true)
        : (i(true),
          r(
            m,
            { key: 0 },
            y(
              _.dynamicTables,
              (d) => (
                i(),
                r('div', T, [
                  n(
                    c,
                    {
                      content: d,
                      animation: t.default_SF_Props.animationTooltip,
                    },
                    {
                      default: o(() => [
                        n(
                          l,
                          { to: a.routeGrid + '/' + d },
                          {
                            default: o(() => [...(e[1] || (e[1] = [s('span', { class: 'sf-icon-table' }, null, -1)]))]),
                            _: 1,
                          },
                          8,
                          ['to'],
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['content', 'animation'],
                  ),
                ])
              ),
            ),
            256,
          )),
    ],
    64,
  );
}
const N = f(F, [['render', g]]);
export { N as b };
