import { d as l } from './K5eRDqOT.js';
import { d as c } from './ZS-VIFna.js';
import { b as u } from './DLTsfmSW.js';
import { l as b } from './Dn5fY4-b.js';
import { a as g } from './Cm0M57tU.js';
import { r as v } from './DBeq470h.js';
import { G as f } from './DAT3ioSq.js';
import { _ as h, c as _, b as t, a as s, d as G, r as n, X as D, t as i, o as w } from '../assets/app-BjImoLrr.js';
import './CqZ4Ys_5.js';
import './DrOYtW4t.js';
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
const j = {
  mixins: [c, l],
  components: {
    GridLogs: f,
    appGridMenu: u,
    appLovGrid: b,
    addButton: g,
    refreshButton: v,
  },
  data() {
    return {
      routeGrid: '/stock/reservations/grid',
      showDialog: false,
      typeObject: 'reservations',
      objectPermission: 'reservations',
      isFinish: false,
      pctLoading: 0,
    };
  },
};
const F = { id: 'target' };
const y = {
  class: 'navbar navbar-expand-lg navbar-light bg-dark',
  id: 'toolbar',
};
const R = { class: 'collapse navbar-collapse' };
const B = { class: 'titreRoute' };
function k(o, r, L, O, e, P) {
  const a = n('grid-logs');
  const p = n('app-grid-menu');
  const m = n('refresh-button');
  const d = n('router-view');
  w();
  return _('div', F, [
    t('nav', y, [
      s(a),
      s(p, { 'route-grid': e.routeGrid }, null, 8, ['route-grid']),
      s(
        m,
        {
          'is-finish': e.isFinish,
          'type-object': e.typeObject,
        },
        null,
        8,
        ['is-finish', 'type-object'],
      ),
      G(t('span', { class: 'mt-1 ms-4 mb-2 badge bg-warning' }, i(e.pctLoading) + '% ', 513), [[D, !e.isFinish]]),
      t('div', R, [
        r[0] || (r[0] = t('ul', { class: 'navbar-nav me-auto mt-2 mt-lg-0' }, null, -1)),
        t('h5', B, i(o.nameRoute), 1),
      ]),
    ]),
    t('div', null, [
      r[1] || (r[1] = t('div', { id: 'spinnerFiles' }, null, -1)),
      s(
        d,
        {
          contentData: o.contentData,
          contentDataGrid: o.contentDataGrid,
          spinner: o.spinner,
          getFrom: 'gallery',
          showDelete: o.can('delete', e.objectPermission),
          showRestore: o.can('restore', e.objectPermission),
          mode: o.mode,
        },
        null,
        8,
        ['contentData', 'contentDataGrid', 'spinner', 'showDelete', 'showRestore', 'mode'],
      ),
    ]),
  ]);
}
const W = h(j, [['render', k]]);
export { W as default };
