import { g as C } from './ZS-VIFna.js';
import { a as b } from './CUaIM54T.js';
import {
  _ as v,
  c as g,
  b as o,
  a as r,
  r as a,
  w as l,
  E as s,
  o as n,
  F as D,
  h as _,
  f as T,
} from '../assets/app-BjImoLrr.js';
import { h as y } from './CdNVB6Z5.js';
import './DrOYtW4t.js';
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
const N = {
  components: {
    actions: b,
    headerActions: y,
  },
  mixins: [C],
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.adressesGrid'),
      objectPermission: 'addresses',
      typeObject: 'addresses',
      items: [],
    };
  },
  mounted() {
    s.$on('colorChange', this.changeColorRow);
    s.$on('rowDeselected', this.deselectedRow);
  },
  beforeUnmount() {
    s.$off('colorChange', this.changeColorRow);
    s.$off('rowDeselected', this.deselectedRow);
  },
};
const E = { class: 'container-fluid' };
const O = { class: 'row' };
const R = { class: 'col-md-12' };
const B = { class: 'containerGridScrollable' };
const k = { class: 'wrapperGrid' };
const A = { class: 'navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3 ps-0 navbarGrid' };
const G = {
  id: 'contentGrid',
  class: 'pt-1',
};
const F = { class: 'wrapperGrid' };
function J(e, d, P, j, p, H) {
  const m = a('ejs-splitbutton');
  const c = a('app-modeButtons');
  const t = a('e-column');
  const f = a('e-columns');
  const u = a('headerActions');
  const S = a('actions');
  const h = a('ejs-grid');
  n();
  return g('div', null, [
    o('div', E, [
      o('div', O, [
        o('div', R, [
          o('div', B, [
            o('div', k, [
              o('nav', A, [
                r(
                  m,
                  {
                    items: p.items,
                    class: 'sf-icon-menu-interface-wf mr',
                    disabled: 'true',
                  },
                  null,
                  8,
                  ['items'],
                ),
                d[0] ||
                  (d[0] = o(
                    'div',
                    { class: 'collapse navbar-collapse' },
                    [o('ul', { class: 'navbar-nav me-auto mt-1 mt-lg-0' })],
                    -1,
                  )),
                r(
                  c,
                  {
                    dataGrid: e.contentData,
                    mode: e.mode,
                  },
                  null,
                  8,
                  ['dataGrid', 'mode'],
                ),
              ]),
              o('div', G, [
                o('div', F, [
                  r(
                    h,
                    {
                      id: 'GridAdresse',
                      enablePersistence: e.default_SF_Props.grid.enablePersistence,
                      dataSource: e.contentDataGrid,
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
                      filterSettings: e.filterSettingsWithExternalSearch('code'),
                      height: e.gridSettings.height,
                      pageSettings: e.gridSettings.pageSettings,
                      recordDoubleClick: e.recordDoubleClick,
                      rowDataBound: e.rowDataBound,
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
                    },
                    {
                      templateHeader: l(() => [
                        r(
                          u,
                          {
                            onMassDeleted: e.massDeleted,
                            objetType: 'addresses',
                            mode: e.mode,
                          },
                          null,
                          8,
                          ['onMassDeleted', 'mode'],
                        ),
                      ]),
                      templateActions: l(({ data: i }) => [
                        r(
                          S,
                          {
                            objetType: 'addresses',
                            mode: e.mode,
                            data: i,
                          },
                          null,
                          8,
                          ['mode', 'data'],
                        ),
                      ]),
                      default: l(() => [
                        r(f, null, {
                          default: l(() => [
                            r(t, {
                              field: 'actions',
                              headerTemplate: 'templateHeader',
                              template: 'templateActions',
                              clipMode: 'Clip',
                              allowResizing: false,
                              allowReordering: false,
                              lockColumn: true,
                              allowFiltering: false,
                              showInColumnChooser: false,
                              allowSorting: false,
                              textAlign: 'Center',
                            }),
                            r(t, {
                              type: 'checkbox',
                              textAlign: 'Center',
                              allowResizing: false,
                              allowReordering: false,
                              lockColumn: true,
                              allowFiltering: false,
                              showInColumnChooser: false,
                              field: 'checkbox',
                            }),
                            r(
                              t,
                              {
                                field: 'id',
                                isPrimaryKey: true,
                                headerText: e.trans.get('__JSON__.model.value.id'),
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.model.value.code'),
                                field: 'code',
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.model.value.designation'),
                                field: 'designation',
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.address.value.address1'),
                                field: 'address1',
                                visible: false,
                                filter: e.gridSettings.filterExcel,
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                              },
                              null,
                              8,
                              ['headerText', 'filter', 'sortComparer'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.address.value.address2'),
                                field: 'address2',
                                visible: false,
                                filter: e.gridSettings.filterExcel,
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                              },
                              null,
                              8,
                              ['headerText', 'filter', 'sortComparer'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.address.value.zipcode'),
                                field: 'zipcode',
                                visible: false,
                                filter: e.gridSettings.filterExcel,
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                              },
                              null,
                              8,
                              ['headerText', 'filter', 'sortComparer'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.address.value.city'),
                                field: 'city',
                                visible: false,
                                filter: e.gridSettings.filterExcel,
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                              },
                              null,
                              8,
                              ['headerText', 'filter', 'sortComparer'],
                            ),
                            r(
                              t,
                              {
                                headerText: e.trans.get('__JSON__.address.value.country'),
                                field: 'country_name',
                                filter: e.gridSettings.filterExcel,
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                              },
                              null,
                              8,
                              ['headerText', 'filter', 'sortComparer'],
                            ),
                            (n(true),
                            g(
                              D,
                              null,
                              _(
                                e.gridSettings.columnsLogs,
                                (i, w) => (
                                  n(),
                                  T(
                                    t,
                                    {
                                      key: w,
                                      field: i.field,
                                      type: i.type,
                                      headerText: i.headerText,
                                      filter: i.filter,
                                      format: i.format,
                                      visible: i.visible,
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
                      'enablePersistence',
                      'dataSource',
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
const L = v(N, [['render', J]]);
export { L as default };
