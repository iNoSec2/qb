import {
  _ as h,
  c as w,
  b as t,
  a as e,
  d as G,
  f as p,
  g as j,
  r as i,
  w as r,
  X as D,
  t as m,
  o as a,
} from '../assets/app-BjImoLrr.js';
import { d as k } from './CbXSr5JG.js';
import { d as A } from './K5eRDqOT.js';
import { d as y } from './ZS-VIFna.js';
import { b as F } from './DLTsfmSW.js';
import { l as L } from './Dn5fY4-b.js';
import { a as B } from './Cm0M57tU.js';
import { r as P } from './DBeq470h.js';
import { G as S } from './DAT3ioSq.js';
/* empty css                    */
import './nNzkQ-aO.js';
import './BWJp0flw.js';
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './CKKuZvVl.js';
import './JzGXi_4H.js';
import './CUvLZwvz.js';
/* empty css        */
import './Nw-Fho2_.js';
import './DvWiUwH6.js';
import './CHw12MFN.js';
import './sKBcFuym.js';
import './CqZ4Ys_5.js';
import './DrOYtW4t.js';
import './BzXjulcJ.js';
const C = {
  mixins: [A, y],
  components: {
    GridLogs: S,
    appAddAddresse: k,
    appGridMenu: F,
    appLovGrid: L,
    addButton: B,
    refreshButton: P,
  },
  data() {
    return {
      routeGrid: '/administration/addresses/grid',
      routeLovGrid: '/administration/addresses/valueLists',
      typeObject: 'addresses',
      showDialog: false,
      objectPermission: 'addresses',
      isFinish: false,
      pctLoading: 0,
    };
  },
};
const N = { id: 'target' };
const O = {
  class: 'navbar navbar-expand-lg navbar-light bg-dark',
  id: 'toolbar',
};
const R = { class: 'ps-4' };
const V = { class: 'collapse navbar-collapse' };
const J = { class: 'titreRoute' };
function T(o, s, E, M, n, X) {
  const u = i('grid-logs');
  const d = i('router-link');
  const l = i('ejs-tooltip');
  const c = i('app-grid-menu');
  const _ = i('app-lov-grid');
  const f = i('refresh-button');
  const g = i('add-button');
  const b = i('app-addAddresse');
  const v = i('router-view');
  a();
  return w('div', N, [
    t('nav', O, [
      e(u),
      t('div', null, [
        e(
          l,
          {
            content: o.trans.get('__JSON__.main.grid.toolbar.import'),
            animation: o.default_SF_Props.animationTooltip,
          },
          {
            default: r(() => [
              o.can('import', n.objectPermission)
                ? (a(),
                  p(
                    d,
                    {
                      key: 0,
                      to: '/administration/addresses/import',
                    },
                    {
                      default: r(() => [
                        ...(s[0] || (s[0] = [t('span', { class: 'sf-icon-document-upload' }, null, -1)])),
                      ]),
                      _: 1,
                    },
                  ))
                : (a(),
                  p(
                    d,
                    {
                      key: 1,
                      class: 'disabled-link',
                      to: '#',
                    },
                    {
                      default: r(() => [
                        ...(s[1] || (s[1] = [t('span', { class: 'sf-icon-document-upload' }, null, -1)])),
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
      ]),
      e(c, { 'route-grid': n.routeGrid }, null, 8, ['route-grid']),
      e(
        _,
        {
          'route-lov': n.routeLovGrid,
          showAllow: o.can('show', n.objectPermission),
        },
        null,
        8,
        ['route-lov', 'showAllow'],
      ),
      t('div', R, [
        e(
          l,
          {
            content: o.trans.get('__JSON__.main.grid.toolbar.map'),
            animation: o.default_SF_Props.animationTooltip,
          },
          {
            default: r(() => [
              e(
                d,
                { to: '/administration/addresses/map' },
                {
                  default: r(() => [...(s[2] || (s[2] = [t('span', { class: 'sf-icon-maps--04' }, null, -1)]))]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
      e(
        f,
        {
          'is-finish': n.isFinish,
          'type-object': n.typeObject,
        },
        null,
        8,
        ['is-finish', 'type-object'],
      ),
      e(g, { 'show-add': o.can('create', n.objectPermission) }, null, 8, ['show-add']),
      G(t('span', { class: 'mt-1 ms-4 mb-2 badge bg-warning' }, m(n.pctLoading) + '% ', 513), [[D, !n.isFinish]]),
      n.showDialog
        ? (a(),
          p(
            b,
            {
              key: 0,
              onClose: o.hideDialog,
            },
            null,
            8,
            ['onClose'],
          ))
        : j('', true),
      t('div', V, [
        s[3] || (s[3] = t('ul', { class: 'navbar-nav me-auto mt-2 mt-lg-0' }, null, -1)),
        t('h5', J, m(o.nameRoute), 1),
      ]),
    ]),
    t('div', null, [
      s[4] || (s[4] = t('div', { id: 'spinnerFiles' }, null, -1)),
      e(
        v,
        {
          contentData: o.contentData,
          contentDataGrid: o.contentDataGrid,
          spinner: o.spinner,
          mode: o.mode,
        },
        null,
        8,
        ['contentData', 'contentDataGrid', 'spinner', 'mode'],
      ),
    ]),
  ]);
}
const go = h(C, [['render', T]]);
export { go as default };
