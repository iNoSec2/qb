import {
  _ as S,
  c,
  b as r,
  f as _,
  g as p,
  d as h,
  a as o,
  w as d,
  r as n,
  X as f,
  $ as O,
  o as s,
  E as m,
  F as B,
  h as P,
} from '../assets/app-BjImoLrr.js';
import { g as b } from './ZS-VIFna.js';
import { h as R } from './CdNVB6Z5.js';
import { d as A } from './BO3nq0Hp.js';
import { d as F } from './DF3-5v4V.js';
/* empty css                    */
import './DrOYtW4t.js';
import './D_eyCAsX.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
/* empty css        */
import './CKKuZvVl.js';
import './Nw-Fho2_.js';
import './sKBcFuym.js';
const J = {
  mixins: [b],
  components: { appDialogNode: A },
  props: { data: { required: true } },
  data: function () {
    return {
      projects: 'projects',
      enable: '',
      deletedDisabed: '',
      restore: '',
      showDialog: false,
      objectPermission: 'projects',
      idParent: null,
      type: null,
      titleModal: this.trans.get('__JSON__.treeView.content.newTreeView'),
    };
  },
  computed: {
    classDelete: function () {
      this.data.has_use_cases == true
        ? (this.deletedDisabed = true)
        : this.data.deleted_at == null
          ? (this.enable = true)
          : (this.restore = true);
    },
  },
  mounted() {
    this.classDelete;
  },
  methods: {
    openAddTree() {
      if ((this.deletedDisabed || this.enable) && this.can('create', 'treeview')) {
        this.idParent = -1 * this.data.id;
        this.type = this.data.model;
        this.showDialog = true;
      }
    },
    actionDelete() {
      this.deleted('projects');
    },
    actionRestore() {
      this.restored('projects');
    },
  },
};
const G = { class: 'gridActions' };
const E = { class: 'd-flex' };
const H = {
  key: 0,
  class: 'me-2 row-disabled',
};
function M(e, t, C, D, v, a) {
  const g = n('ejs-tooltip');
  const u = n('app-dialogNode');
  s();
  return c('div', G, [
    r('div', E, [
      e.deletedDisabed
        ? (s(),
          c('div', H, [
            o(
              g,
              {
                content: e.trans.get('__JSON__.model.action.delete'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: d(() => [
                  ...(t[4] || (t[4] = [r('span', { class: 'sf-icon-garbage-wf iconeGrid' }, null, -1)])),
                ]),
                _: 1,
              },
              8,
              ['content', 'animation'],
            ),
          ]))
        : p('', true),
      e.enable
        ? h(
            (s(),
            c(
              'div',
              {
                key: 1,
                class: 'me-2',
                onClick: t[0] || (t[0] = (...i) => a.actionDelete && a.actionDelete(...i)),
              },
              [
                o(
                  g,
                  {
                    content: e.trans.get('__JSON__.model.action.delete'),
                    position: 'TopCenter',
                    animation: e.default_SF_Props.animationTooltip,
                  },
                  {
                    default: d(() => [
                      ...(t[5] ||
                        (t[5] = [
                          r(
                            'span',
                            {
                              class: 'sf-icon-garbage-wf iconeGrid',
                              style: { cursor: 'pointer' },
                            },
                            null,
                            -1,
                          ),
                        ])),
                    ]),
                    _: 1,
                  },
                  8,
                  ['content', 'animation'],
                ),
              ],
              512,
            )),
            [[f, e.can('delete', e.objectPermission)]],
          )
        : p('', true),
      e.restore
        ? h(
            (s(),
            c(
              'div',
              {
                key: 2,
                class: 'me-2',
                onClick: t[1] || (t[1] = (...i) => a.actionRestore && a.actionRestore(...i)),
                style: { cursor: 'pointer' },
              },
              [
                o(
                  g,
                  {
                    content: e.trans.get('__JSON__.model.action.restore'),
                    position: 'TopCenter',
                    animation: e.default_SF_Props.animationTooltip,
                  },
                  {
                    default: d(() => [
                      ...(t[6] ||
                        (t[6] = [r('span', { class: 'sf-icon-recover-deleted-item-wf iconeGrid' }, null, -1)])),
                    ]),
                    _: 1,
                  },
                  8,
                  ['content', 'animation'],
                ),
              ],
              512,
            )),
            [[f, e.can('restore', e.objectPermission)]],
          )
        : p('', true),
      r(
        'div',
        {
          class: 'me-2',
          style: O((e.deletedDisabed || e.enable) && e.can('create', 'treeview') ? 'disabledIcon' : ''),
        },
        [
          o(
            g,
            {
              content: e.trans.get('__JSON__.model.action.addTree'),
              position: 'TopCenter',
              animation: e.default_SF_Props.animationTooltip,
            },
            {
              default: d(() => [
                r('span', {
                  class: 'sf-icon-addition- iconeGrid',
                  onClick: t[2] || (t[2] = (...i) => a.openAddTree && a.openAddTree(...i)),
                  style: { cursor: 'pointer' },
                }),
              ]),
              _: 1,
            },
            8,
            ['content', 'animation'],
          ),
        ],
        4,
      ),
    ]),
    e.showDialog
      ? (s(),
        _(
          u,
          {
            key: 0,
            idParent: e.idParent,
            type: e.type,
            title: e.titleModal,
            node: null,
            onClose: t[3] || (t[3] = (i) => (e.showDialog = false)),
            openRightPanelAfter: false,
          },
          null,
          8,
          ['idParent', 'type', 'title'],
        ))
      : p('', true),
  ]);
}
const w = S(J, [['render', M]]);
const V = {
  components: {
    actions: w,
    headerActions: R,
  },
  mixins: [b, F],
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.projectsGrid'),
      typeObject: 'projects',
      childGridSettings: {
        queryString: 'nodable_id',
        columns: [
          {
            field: 'id',
            isPrimaryKey: true,
            visible: false,
            showInColumnChooser: false,
            headerText: this.trans.get('__JSON__.model.value.id'),
          },
          {
            field: 'code',
            headerText: this.trans.get('__JSON__.model.value.code'),
          },
          {
            field: 'designation',
            headerText: this.trans.get('__JSON__.model.value.designation'),
          },
          {
            field: 'is_visible',
            type: 'boolean',
            displayAsCheckBox: true,
            headerText: this.trans.get('__JSON__.node.content.isVisible'),
            textAlign: 'Center',
          },
          {
            field: 'lcn_base',
            headerText: this.trans.get('__JSON__.lcn.content.base'),
          },
        ],
        load: function () {
          this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData.id;
        },
      },
    };
  },
  computed: {
    actions() {
      return w;
    },
    items() {
      let e = [];
      if (this.can('export floatlog', 'directory')) {
        e.push({
          text: this.trans.get('__JSON__.model.action.exportFloatlog'),
          id: 'exportFloatlog',
        });
      }
      return e;
    },
  },
  methods: {
    onSelect(e) {
      switch (e.item.id) {
        case 'exportFloatlog':
          this.downloadObject(
            'api/specialExports/exportFloatlog',
            'FloatlogDirectory.xlsx',
            this.trans.get('__JSON__.notification.content.getXlsx'),
            {},
            false,
          );
          break;
      }
    },
    onDetailDataBound(e) {
      axios.get('api/projects/' + e.data.id).then((t) => {
        if (t.data != '') {
          this.setChildDataSource(e, t.data.main.treeView);
        }
      });
    },
    rowDataBoundOverride(e) {
      this.rowDataBound(e);
      if (e.data.nodes_count == 0) {
        e.row.querySelector('td').innerHTML = ' ';
        e.row.querySelector('td').classList.add('arrowDeactivated');
      }
    },
  },
  mounted() {
    m.$on('colorChange', this.changeColorRow);
    m.$on('rowDeselected', this.deselectedRow);
  },
  beforeUnmount() {
    m.$off('colorChange', this.changeColorRow);
    m.$off('rowDeselected', this.deselectedRow);
  },
};
const $ = { class: 'container-fluid' };
const z = { class: 'row' };
const q = { class: 'col-md-12' };
const I = { class: 'containerGridScrollable' };
const K = { class: 'wrapperGrid' };
const X = { class: 'navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3 ps-0 navbarGrid' };
const U = {
  id: 'contentGrid',
  class: 'pt-1',
};
const W = { class: 'wrapperGrid' };
function Q(e, t, C, D, v, a) {
  const g = n('ejs-splitbutton');
  const u = n('app-modeButtons');
  const i = n('e-column');
  const y = n('e-columns');
  const T = n('headerActions');
  const N = n('actions');
  const j = n('ejs-grid');
  s();
  return c('div', null, [
    r('div', $, [
      r('div', z, [
        r('div', q, [
          r('div', I, [
            r('div', K, [
              r('nav', X, [
                o(
                  g,
                  {
                    items: a.items,
                    disabled: a.items.length === 0,
                    class: 'sf-icon-menu-interface-wf mr',
                    select: a.onSelect,
                  },
                  null,
                  8,
                  ['items', 'disabled', 'select'],
                ),
                t[0] ||
                  (t[0] = r(
                    'div',
                    { class: 'collapse navbar-collapse' },
                    [r('ul', { class: 'navbar-nav me-auto mt-1 mt-lg-0' })],
                    -1,
                  )),
                o(
                  u,
                  {
                    dataGrid: e.contentData,
                    mode: e.mode,
                  },
                  null,
                  8,
                  ['dataGrid', 'mode'],
                ),
              ]),
              r('div', U, [
                r('div', W, [
                  o(
                    j,
                    {
                      id: 'GridProject',
                      dataSource: e.contentDataGrid,
                      enablePersistence: e.default_SF_Props.grid.enablePersistence,
                      ref: e.gridSettings.ref,
                      actionBegin: e.actionBegin,
                      actionComplete: e.actionComplete,
                      allowExcelExport: e.gridSettings.allowExcelExport,
                      allowFiltering: e.gridSettings.allowFiltering,
                      allowPaging: e.gridSettings.allowPaging,
                      allowReordering: e.gridSettings.allowReordering,
                      allowResizing: e.gridSettings.allowResizing,
                      allowRowDragAndDrop: e.gridSettings.allowRowDragAndDrop,
                      allowSelection: e.gridSettings.allowSelection,
                      allowSorting: e.gridSettings.allowSorting,
                      clipMode: e.gridSettings.clipMode,
                      dataBound: e.dataBound,
                      enableHover: e.gridSettings.enableHover,
                      filterSettings: e.filterSettingsWithExternalSearch('name'),
                      height: e.gridSettings.height,
                      pageSettings: e.gridSettings.pageSettings,
                      recordDoubleClick: e.recordDoubleClick,
                      rowDataBound: a.rowDataBoundOverride,
                      rowDragStart: e.rowDragStart,
                      rowDropSettings: e.gridSettings.rowDropSettings,
                      rowHeight: e.gridSettings.rowHeight,
                      rowSelecting: e.rowSelecting,
                      rowSelected: e.rowSelected,
                      searchSettings: e.gridSettings.searchSettings,
                      selectionSettings: e.gridSettings.selectionSettings,
                      showColumnChooser: e.gridSettings.showColumnChooser,
                      toolbar: e.gridSettings.toolbar,
                      toolbarClick: e.toolbarClick,
                      childGrid: e.childGridDefault,
                      detailDataBound: a.onDetailDataBound,
                    },
                    {
                      templateHeader: d(() => [
                        o(
                          T,
                          {
                            onMassDeleted: e.massDeleted,
                            objetType: 'projects',
                            mode: e.mode,
                          },
                          null,
                          8,
                          ['onMassDeleted', 'mode'],
                        ),
                      ]),
                      templateActions: d(({ data: l }) => [o(N, { data: l }, null, 8, ['data'])]),
                      default: d(() => [
                        o(y, null, {
                          default: d(() => [
                            o(i, {
                              field: 'actions',
                              headerTemplate: 'templateHeader',
                              template: 'templateActions',
                              allowResizing: false,
                              allowReordering: false,
                              lockColumn: true,
                              allowFiltering: false,
                              clipMode: 'Clip',
                              showInColumnChooser: false,
                              allowSorting: false,
                            }),
                            o(i, {
                              field: 'checkbox',
                              type: 'checkbox',
                              textAlign: 'Center',
                              allowResizing: false,
                              allowReordering: false,
                              lockColumn: true,
                              allowFiltering: false,
                              showInColumnChooser: false,
                            }),
                            o(
                              i,
                              {
                                field: 'id',
                                headerText: e.trans.get('__JSON__.model.value.id'),
                                isPrimaryKey: true,
                                type: 'number',
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            o(
                              i,
                              {
                                field: 'name',
                                headerText: e.trans.get('__JSON__.project.value.name'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            o(
                              i,
                              {
                                field: 'description',
                                headerText: e.trans.get('__JSON__.project.value.description'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            o(
                              i,
                              {
                                headerText: e.trans.get('__JSON__.project.value.lcn_active'),
                                field: 'lcn_active',
                                type: 'boolean',
                                displayAsCheckBox: 'true',
                                filter: e.gridSettings.filterCheck,
                                textAlign: 'Center',
                              },
                              null,
                              8,
                              ['headerText', 'filter'],
                            ),
                            o(
                              i,
                              {
                                field: 'lcn_mask',
                                headerText: e.trans.get('__JSON__.project.value.lcn_mask'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            o(
                              i,
                              {
                                headerText: e.trans.get('__JSON__.project.value.lcn_need_recalculation'),
                                field: 'lcn_need_recalculation',
                                type: 'boolean',
                                displayAsCheckBox: 'true',
                                filter: e.gridSettings.filterCheck,
                                textAlign: 'Center',
                              },
                              null,
                              8,
                              ['headerText', 'filter'],
                            ),
                            o(
                              i,
                              {
                                field: 'comment',
                                headerText: e.trans.get('__JSON__.model.value.comment'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                visible: false,
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            (s(true),
                            c(
                              B,
                              null,
                              P(
                                e.gridSettings.columnsLogs,
                                (l, k) => (
                                  s(),
                                  _(
                                    i,
                                    {
                                      key: k,
                                      field: l.field,
                                      type: l.type,
                                      headerText: l.headerText,
                                      filter: l.filter,
                                      format: l.format,
                                      visible: l.visible,
                                    },
                                    null,
                                    8,
                                    ['field', 'type', 'headerText', 'filter', 'format', 'visible'],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    [
                      'dataSource',
                      'enablePersistence',
                      'actionBegin',
                      'actionComplete',
                      'allowExcelExport',
                      'allowFiltering',
                      'allowPaging',
                      'allowReordering',
                      'allowResizing',
                      'allowRowDragAndDrop',
                      'allowSelection',
                      'allowSorting',
                      'clipMode',
                      'dataBound',
                      'enableHover',
                      'filterSettings',
                      'height',
                      'pageSettings',
                      'recordDoubleClick',
                      'rowDataBound',
                      'rowDragStart',
                      'rowDropSettings',
                      'rowHeight',
                      'rowSelecting',
                      'rowSelected',
                      'searchSettings',
                      'selectionSettings',
                      'showColumnChooser',
                      'toolbar',
                      'toolbarClick',
                      'childGrid',
                      'detailDataBound',
                    ],
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ]);
}
const pe = S(V, [['render', Q]]);
export { pe as default };
