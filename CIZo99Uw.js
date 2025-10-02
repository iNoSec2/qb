import { g as S } from './CstnyyMp.js';
import {
  _ as D,
  E as h,
  c as n,
  b as t,
  n as i,
  a as d,
  r,
  f as j,
  g as I,
  Z as O,
  F as B,
  h as $,
  a$ as F,
  o as a,
  d as p,
  w as m,
  t as u,
  X as b,
} from '../assets/app-BjImoLrr.js';
import { C as N } from './D6qTVqbk.js';
import './DrOYtW4t.js';
import './BWJp0flw.js';
const E = {
  mixins: [S],
  provide: { multiselect: [N] },
  data() {
    return {
      objectPermission: 'files',
      typeObject: 'files',
    };
  },
  mounted: function () {
    this.multiselectComp = this.getSyncfusionInstance('extension', 'tagging');
  },
  methods: {
    actionDeleteGallery(e) {
      if (!e.has_use_cases) {
        axios.delete('api/' + this.typeObject + '/' + e.id).then((s) => {
          if (s.status == 204 || s.status == 200) {
            let c = true;
            if (s.status == 200) {
              c = s.data.deleted_at;
            }
            h.$emit('changeDeleted_at', {
              id: e.id,
              date: c,
              typeObject: this.typeObject,
            });
            h.$emit('checkDeletePanel', {
              typeObject: this.typeObject,
              refObject: e.id,
            });
            this.$nextTick(() => {
              this.filterExtension();
            });
          }
        });
      }
    },
  },
};
const z = {
  class: 'container-fluid',
  id: 'gallery',
};
const P = { class: 'row' };
const R = { class: 'col-md-12' };
const G = { class: 'wrapper' };
const J = { class: 'e-toolbar-items e-tbar-pos' };
const K = {
  class: 'e-toolbar-left',
  style: {
    width: '300px',
    'margin-top': '5px',
    'margin-bottom': '5px',
  },
};
const T = { class: 'e-toolbar-right' };
const M = ['title'];
const V = {
  class: 'e-input-group e-search me-4',
  role: 'search',
};
const H = ['placeholder'];
const L = ['title'];
const q = { class: 'content pt-2' };
const Q = { style: { height: 'auto' } };
const X = { class: 'container-fluid' };
const Z = { class: 'row' };
const A = ['data-drag_index'];
const U = { class: 'card-deck' };
const W = {
  class: 'card me-1 ms-1 pt-2',
  style: { height: '310px' },
};
const Y = ['onClick', 'onDblclick'];
const x = ['src'];
const ee = ['onClick'];
const te = ['onDblclick'];
const oe = {
  key: 0,
  class: 'card-title text-truncate text-start mb-1',
  style: { 'font-size': '15px' },
};
const se = { key: 1 };
const ae = {
  key: 0,
  class: 'card-text text-start',
};
const ne = { key: 1 };
const le = { class: 'card-footer p-0' };
const ie = { class: 'float-end' };
const de = {
  key: 0,
  class: 'btn btn-xs btn-block mt-1 row-delete deleteButtonHover',
  role: 'button',
  id: 'tempDelete',
};
const re = ['onClick'];
const ce = {
  key: 1,
  class: 'btn btn-xs btn-block mt-1 row-restore deleteButtonHover',
  role: 'button',
  id: 'tempRestore',
};
const pe = ['onClick'];
const ue = { class: 'footer' };
const _e = { id: 'pagination' };
const ge = { class: 'row' };
const he = { class: 'col-md-12' };
function me(e, s, c, be, _, f) {
  const v = r('ejs-multiselect');
  const y = r('app-modeButtons');
  const g = r('ejs-tooltip');
  const k = r('ejs-pager');
  const C = F('draggable');
  a();
  return n('div', z, [
    t('div', P, [
      t('div', R, [
        t(
          'div',
          { class: i(e.getFrom === 'panelRight' || e.getFrom === 'poiable' ? 'scrollableModal' : 'scrollable') },
          [
            t('div', G, [
              t(
                'div',
                {
                  class: i([
                    'e-control e-toolbar e-lib e-keyboard',
                    e.getFrom === 'panelRight' || e.getFrom === 'poiable'
                      ? 'toolbar-file-panel-right'
                      : 'toolbar-file-main',
                  ]),
                  role: 'toolbar',
                  'aria-disabled': 'false',
                  'aria-haspopup': 'false',
                  'aria-orientation': 'horizontal',
                  tabindex: '0',
                },
                [
                  t('div', null, [
                    t('div', J, [
                      t('div', K, [
                        d(
                          v,
                          {
                            id: 'extension',
                            placeholder: e.trans.get('__JSON__.file.content.filterExtension'),
                            fields: e.fields,
                            tagging: e.filterExtension,
                            removed: e.filterExtension,
                            dataSource: e.type,
                            mode: e.mode,
                          },
                          null,
                          8,
                          ['placeholder', 'fields', 'tagging', 'removed', 'dataSource', 'mode'],
                        ),
                      ]),
                      s[3] ||
                        (s[3] = t(
                          'div',
                          {
                            class: 'e-toolbar-center',
                            style: { 'margin-left': '636.5px' },
                          },
                          null,
                          -1,
                        )),
                      t('div', T, [
                        t(
                          'div',
                          {
                            class: 'e-toolbar-item e-search-wrapper e-template',
                            'aria-disabled': 'false',
                            title: e.trans.get('__JSON__.model.action.search'),
                          },
                          [
                            t('div', V, [
                              t(
                                'input',
                                {
                                  class: 'e-input',
                                  style: { width: '300px' },
                                  type: 'text',
                                  required: '',
                                  id: 'search_Card',
                                  placeholder: e.trans.get('__JSON__.model.action.search'),
                                  autocomplete: 'off',
                                  onKeyup:
                                    s[0] ||
                                    (s[0] = O((...o) => e.onInputKeyup && e.onInputKeyup(...o), ['space', 'enter'])),
                                },
                                null,
                                40,
                                H,
                              ),
                              t(
                                'span',
                                {
                                  id: 'searchImg',
                                  class: 'e-input-group-icon sf-icon-search-wf',
                                  tabindex: '-1',
                                  title: e.trans.get('__JSON__.model.action.search'),
                                  'aria-label': 'search',
                                  onClick: s[1] || (s[1] = (...o) => e.onInputKeyup && e.onInputKeyup(...o)),
                                },
                                null,
                                8,
                                L,
                              ),
                            ]),
                            e.showButton
                              ? (a(),
                                j(
                                  y,
                                  {
                                    key: 0,
                                    dataGrid: e.contentData,
                                    mode: e.mode,
                                  },
                                  null,
                                  8,
                                  ['dataGrid', 'mode'],
                                ))
                              : I('', true),
                          ],
                          8,
                          M,
                        ),
                      ]),
                    ]),
                  ]),
                ],
                2,
              ),
              t('div', q, [
                t('div', Q, [
                  t('div', X, [
                    t('div', Z, [
                      (a(true),
                      n(
                        B,
                        null,
                        $(e.pageData, (o, w) =>
                          p(
                            (a(),
                            n(
                              'div',
                              {
                                class: 'col-lg-2 ps-0 pe-0 pb-2',
                                key: o.id,
                                'data-drag_index': w,
                                'data-drag_data_array': 'pageData',
                              },
                              [
                                t('div', U, [
                                  t('div', W, [
                                    t(
                                      'div',
                                      {
                                        class: 'img-centered-wrapper',
                                        onClick: (l) => e.chooseMedia(o),
                                        onDblclick: (l) => e.chooseMediaQuick(o),
                                      },
                                      [
                                        o.urlImage
                                          ? (a(),
                                            n(
                                              'img',
                                              {
                                                key: 0,
                                                src: o.urlImage,
                                                onError:
                                                  s[2] ||
                                                  (s[2] = (...l) => e.replaceByDefault && e.replaceByDefault(...l)),
                                                class: i([
                                                  { selectedImage: o.selected },
                                                  'card-img-top img-fluid img-centered imgGallery',
                                                ]),
                                              },
                                              null,
                                              42,
                                              x,
                                            ))
                                          : (a(),
                                            n(
                                              'div',
                                              {
                                                key: 1,
                                                class: i(['divImg img-fluid', { selectedImage: o.selected }]),
                                              },
                                              [
                                                t(
                                                  'span',
                                                  {
                                                    class: i(['iconeVide', o.icon]),
                                                    style: { color: '#191e2c' },
                                                  },
                                                  null,
                                                  2,
                                                ),
                                              ],
                                              2,
                                            )),
                                      ],
                                      40,
                                      Y,
                                    ),
                                    t(
                                      'div',
                                      {
                                        class: 'card-body pe-4 ps-4 p-3 mt-2',
                                        onClick: (l) => e.chooseMedia(o),
                                      },
                                      [
                                        d(
                                          g,
                                          {
                                            content: o.title,
                                            position: 'TopCenter',
                                            animation: e.default_SF_Props.animationTooltip,
                                            class: 'tooltipSyncfusion',
                                          },
                                          {
                                            default: m(() => [
                                              t(
                                                'h6',
                                                {
                                                  class: 'card-title text-truncate text-start mb-1',
                                                  onDblclick: (l) => e.openPanel(o.id),
                                                  style: {
                                                    color: '#0d83c0',
                                                    'font-size': '15px',
                                                    cursor: 'pointer',
                                                  },
                                                },
                                                u(o.title),
                                                41,
                                                te,
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['content', 'animation'],
                                        ),
                                        t('div', null, [
                                          o.extension
                                            ? (a(), n('h6', oe, u(o.extension), 1))
                                            : (a(), n('p', se, [...(s[4] || (s[4] = [t('br', null, null, -1)]))])),
                                        ]),
                                        s[5] || (s[5] = t('p', null, null, -1)),
                                        t('div', null, [
                                          o.created_at != null
                                            ? (a(), n('p', ae, u(o.created_at.toLocaleDateString()), 1))
                                            : (a(), n('br', ne)),
                                        ]),
                                      ],
                                      8,
                                      ee,
                                    ),
                                    t('div', le, [
                                      t('div', ie, [
                                        d(
                                          g,
                                          {
                                            content:
                                              o.deleted_at == null
                                                ? e.trans.get('__JSON__.model.action.destroy')
                                                : e.trans.get('__JSON__.model.action.restore'),
                                            position: 'TopCenter',
                                            animation: e.default_SF_Props.animationTooltip,
                                          },
                                          {
                                            default: m(() => [
                                              o.deleted_at == null
                                                ? (a(),
                                                  n('a', de, [
                                                    p(
                                                      t(
                                                        'span',
                                                        {
                                                          class: i([
                                                            'sf-icon-garbage-wf',
                                                            o.has_use_cases ? 'disabledIcon' : '',
                                                          ]),
                                                          onClick: (l) => f.actionDeleteGallery(o),
                                                        },
                                                        null,
                                                        10,
                                                        re,
                                                      ),
                                                      [[b, e.can('delete', _.objectPermission)]],
                                                    ),
                                                  ]))
                                                : (a(),
                                                  n('a', ce, [
                                                    p(
                                                      t(
                                                        'span',
                                                        {
                                                          id: 'restore',
                                                          class: 'sf-icon-recover-deleted-item-wf',
                                                          onClick: (l) => e.actionRestoreGallery(o),
                                                        },
                                                        null,
                                                        8,
                                                        pe,
                                                      ),
                                                      [[b, e.can('restore', _.objectPermission)]],
                                                    ),
                                                  ])),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['content', 'animation'],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ],
                              8,
                              A,
                            )),
                            [[C]],
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                ]),
              ]),
              t('div', ue, [
                t('div', _e, [
                  t('div', ge, [
                    t('div', he, [
                      d(
                        k,
                        {
                          ref: 'paging',
                          pageSize: e.pageSize,
                          created: e.pagerCreated,
                          click: e.pagerChange,
                          pageCount: e.pageCount,
                          totalRecordsCount: e.totalRecordsCounts,
                        },
                        null,
                        8,
                        ['pageSize', 'created', 'click', 'pageCount', 'totalRecordsCount'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ],
          2,
        ),
      ]),
    ]),
  ]);
}
const Se = D(E, [
  ['render', me],
  ['__scopeId', 'data-v-9e5040d4'],
]);
export { Se as default };
