import {
  _ as b,
  c as v,
  b as o,
  a as s,
  d as L,
  r as n,
  w as r,
  X as D,
  t as p,
  E as a,
  o as l,
  f as m,
} from '../assets/app-BjImoLrr.js';
import { d as G } from './ZS-VIFna.js';
import { d as w } from './K5eRDqOT.js';
import { b as k } from './DLTsfmSW.js';
import { r as V } from './DBeq470h.js';
import { G as j } from './DAT3ioSq.js';
/* empty css                    */
import './DrOYtW4t.js';
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
import './CqZ4Ys_5.js';
const y = {
  mixins: [G, w],
  components: {
    GridLogs: j,
    appGridMenu: k,
    refreshButton: V,
  },
  data() {
    return {
      routeGrid: '/administration/valueLists/grid',
      typeObject: 'value_lists',
      objectPermission: 'value_lists',
      isFinish: false,
      pctLoading: 0,
    };
  },
  methods: {
    changeValueList(t) {
      let e = this.contentData.findIndex((d) => d.id === t.id);
      if (e >= 0) {
        if (t.created_at) {
          t.created_at = new Date(t.created_at);
        }
        if (t.updated_at) {
          t.updated_at = new Date(t.updated_at);
        }
        if (t.deleted_at) {
          t.deleted_at = new Date(t.deleted_at);
        }
        this.contentData.splice(e, 1, t);
        a.$emit('updateButtonsMode');
      }
    },
    onSelect(t) {
      switch (t.item.id) {
        case 'valueListsImport':
          this.$refs.menuToolbarValueLists.ej2Instances.refresh();
          let e = { name: t.item.id };
          {
            this.actionLogsStore.changeGridLogs(e);
            this.$router.push(e);
          }
          break;
      }
    },
  },
  mounted() {
    a.$on('mode', this.changeMode);
    a.$on('updateValueListGrid', this.changeValueList);
  },
  beforeUnmount() {
    a.$off('mode', this.changeMode);
    a.$off('updateValueListGrid', this.changeValueList);
  },
};
const F = {
  class: 'navbar navbar-expand-lg navbar-light bg-dark',
  id: 'toolbar',
};
const B = { class: 'collapse navbar-collapse' };
const S = { class: 'titreRoute' };
function $(t, e, d, M, i, E) {
  const c = n('grid-logs');
  const u = n('router-link');
  const _ = n('ejs-tooltip');
  const f = n('app-grid-menu');
  const g = n('refresh-button');
  const h = n('router-view');
  l();
  return v('div', null, [
    o('nav', F, [
      s(c),
      s(
        _,
        {
          content: t.trans.get('__JSON__.main.grid.toolbar.importValues'),
          animation: t.default_SF_Props.animationTooltip,
        },
        {
          default: r(() => [
            t.can('import', 'values')
              ? (l(),
                m(
                  u,
                  {
                    key: 0,
                    to: '/administration/valueLists/import',
                  },
                  {
                    default: r(() => [
                      ...(e[0] || (e[0] = [o('span', { class: 'sf-icon-document-upload' }, null, -1)])),
                    ]),
                    _: 1,
                  },
                ))
              : (l(),
                m(
                  u,
                  {
                    key: 1,
                    class: 'disabled-link',
                    to: '#',
                  },
                  {
                    default: r(() => [
                      ...(e[1] || (e[1] = [o('span', { class: 'sf-icon-document-upload' }, null, -1)])),
                    ]),
                    _: 1,
                  },
                )),
          ]),
          _: 1,
        },
        8,
        ['content', 'animation'],
      ),
      s(f, { 'route-grid': i.routeGrid }, null, 8, ['route-grid']),
      s(
        g,
        {
          'is-finish': i.isFinish,
          'type-object': i.typeObject,
        },
        null,
        8,
        ['is-finish', 'type-object'],
      ),
      L(o('span', { class: 'mt-1 ms-4 mb-2 badge bg-warning' }, p(i.pctLoading) + '% ', 513), [[D, !i.isFinish]]),
      o('div', B, [
        e[2] || (e[2] = o('ul', { class: 'navbar-nav me-auto mt-2 mt-lg-0' }, null, -1)),
        o('h5', S, p(t.nameRoute), 1),
      ]),
    ]),
    o('div', null, [
      e[3] || (e[3] = o('div', { id: 'spinnerFiles' }, null, -1)),
      s(
        h,
        {
          contentData: t.contentData,
          contentDataGrid: t.contentDataGrid,
          mode: t.mode,
        },
        null,
        8,
        ['contentData', 'contentDataGrid', 'mode'],
      ),
    ]),
  ]);
}
const K = b(y, [['render', $]]);
export { K as default };
