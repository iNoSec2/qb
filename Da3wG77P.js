import { g as y } from './ZS-VIFna.js';
import {
  _ as k,
  c as D,
  b as a,
  f as m,
  g as c,
  a as t,
  d as R,
  r as o,
  w as s,
  E as i,
  o as d,
  X as O,
} from '../assets/app-BjImoLrr.js';
import T from './CUvLZwvz.js';
import { r as N } from './Dh-oEpRI.js';
import './DrOYtW4t.js';
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
/* empty css                    */
/* empty css        */
import './DmX3Ojbe.js';
import './DvWiUwH6.js';
import './Brc4hCJ1.js';
import './CKKuZvVl.js';
import './CFn9I8-1.js';
const q = {
  components: { polymorphismeColumn: T },
  mixins: [y, N],
  data() {
    return { typeObject: 'reservations' };
  },
  computed: {
    items() {
      return [];
    },
  },
  mounted() {
    i.$on('rowDeselected', this.deselectedRow);
    i.$on('colorChange', this.changeColorRow);
  },
  beforeUnmount() {
    i.$off('rowDeselected', this.deselectedRow);
    i.$off('colorChange', this.changeColorRow);
  },
  methods: {
    onSelect(e) {
      e.item.id;
    },
    rowDataBoundOverride(e) {
      this.rowDataBound(e);
      if (!e.data.quantity_reserved) {
        e.row.querySelector('td').innerHTML = ' ';
        e.row.querySelector('td').classList.add('arrowDeactivated');
      }
    },
    recordDoubleClickOverride(e) {
      switch (true) {
        case e.column.field === 'item_id':
        case e.column.field === 'item_code':
        case e.column.field === 'item_designation':
          if (e.rowData && e.rowData.item_id) {
            i.$emit('showPanel', {
              panelDroite: true,
              refObjet: e.rowData.item_id,
              typeObject: 'items',
            });
          }
          break;
        case e.column.field === 'task_id':
        case e.column.field === 'task_code':
        case e.column.field === 'task_designation':
          if (e.rowData && e.rowData.task_id) {
            i.$emit('showPanel', {
              panelDroite: true,
              refObjet: e.rowData.task_id,
              typeObject: 'tasks',
            });
          }
          break;
        case e.column.field === 'purchase_request_code':
          if (e.rowData && e.rowData.purchase_request_id) {
            i.$emit('showPanel', {
              panelDroite: true,
              refObjet: e.rowData.purchase_request_id,
              typeObject: 'purchaseRequests',
            });
          }
          break;
      }
    },
    getReservations() {
      i.$emit('getDataGrid');
    },
  },
};
const B = { class: 'container-fluid' };
const j = { class: 'row' };
const G = { class: 'col-md-12' };
const J = { class: 'containerGridScrollable' };
const A = { class: 'wrapperGrid' };
const P = { class: 'navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3 ps-0 navbarGrid' };
const E = {
  id: 'contentGrid',
  class: 'pt-1',
};
const M = { class: 'wrapperGrid' };
function F(e, u, H, V, W, n) {
  const p = o('ejs-splitbutton');
  const g = o('app-modeButtons');
  const r = o('e-column');
  const h = o('e-columns');
  const f = o('actionReservation');
  const _ = o('polymorphisme-column');
  const v = o('colorValue');
  const w = o('action-reservation-child');
  const S = o('ejs-grid');
  const b = o('modal-edit-assets');
  const C = o('modal-distribute-assets');
  d();
  return D('div', null, [
    a('div', B, [
      a('div', j, [
        a('div', G, [
          a('div', J, [
            a('div', A, [
              a('nav', P, [
                t(
                  p,
                  {
                    items: n.items,
                    disabled: n.items.length === 0,
                    class: 'sf-icon-menu-interface-wf mr',
                    select: n.onSelect,
                  },
                  null,
                  8,
                  ['items', 'disabled', 'select'],
                ),
                u[0] ||
                  (u[0] = a(
                    'div',
                    { class: 'collapse navbar-collapse' },
                    [a('ul', { class: 'navbar-nav me-auto mt-1 mt-lg-0' })],
                    -1,
                  )),
                R(
                  t(
                    g,
                    {
                      dataGrid: e.contentData,
                      mode: e.mode,
                    },
                    null,
                    8,
                    ['dataGrid', 'mode'],
                  ),
                  [[O, false]],
                ),
              ]),
              a('div', E, [
                a('div', M, [
                  t(
                    S,
                    {
                      id: 'reservationGrid',
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
                      allowRowDragAndDrop: false,
                      allowSelection: e.gridSettings.allowSelection,
                      allowSorting: e.gridSettings.allowSorting,
                      clipMode: e.gridSettings.clipMode,
                      dataBound: e.dataBound,
                      enableHover: e.gridSettings.enableHover,
                      filterSettings: e.filterSettingsWithExternalSearch('code'),
                      height: e.gridSettings.height,
                      pageSettings: e.gridSettings.pageSettings,
                      recordDoubleClick: n.recordDoubleClickOverride,
                      rowDataBound: n.rowDataBoundOverride,
                      rowHeight: e.gridSettings.rowHeight,
                      rowSelecting: e.rowSelecting,
                      rowSelected: e.rowSelected,
                      searchSettings: e.gridSettings.searchSettings,
                      selectionSettings: e.gridSettings.selectionSettings,
                      showColumnChooser: e.gridSettings.showColumnChooser,
                      toolbar: e.gridSettings.toolbar,
                      toolbarClick: e.toolbarClick,
                      childGrid: e.childGridDefault,
                      detailDataBound: e.onDetailDataBound,
                    },
                    {
                      templateActions: s(({ data: l }) => [
                        t(
                          f,
                          {
                            data: l,
                            onCancelReservation: e.cancelReservation,
                            onCreatePurchaseRequests: e.createPurchaseRequests,
                            onDeleteReservation: e.deleteReservation,
                            onFillReservation: e.fillReservation,
                            onValidateReservation: e.validateReservation,
                          },
                          null,
                          8,
                          [
                            'data',
                            'onCancelReservation',
                            'onCreatePurchaseRequests',
                            'onDeleteReservation',
                            'onFillReservation',
                            'onValidateReservation',
                          ],
                        ),
                      ]),
                      templateTaskObject: s(({ data: l }) => [
                        t(
                          _,
                          {
                            polymorph: 'task_object',
                            data: l,
                          },
                          null,
                          8,
                          ['data'],
                        ),
                      ]),
                      templateStatus: s(({ data: l }) => [
                        t(
                          v,
                          {
                            colorObjectName: 'status',
                            data: l,
                          },
                          null,
                          8,
                          ['data'],
                        ),
                      ]),
                      templateChildActions: s(({ data: l }) => [
                        t(
                          w,
                          {
                            data: l,
                            onDeleteAssetReservation: e.deleteAssetReservation,
                          },
                          null,
                          8,
                          ['data', 'onDeleteAssetReservation'],
                        ),
                      ]),
                      default: s(() => [
                        t(h, null, {
                          default: s(() => [
                            t(r, {
                              field: 'actions',
                              headerText: '',
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
                            t(r, {
                              type: 'checkbox',
                              textAlign: 'Center',
                              allowResizing: false,
                              allowReordering: false,
                              lockColumn: true,
                              allowFiltering: false,
                              showInColumnChooser: false,
                              field: 'checkbox',
                            }),
                            t(
                              r,
                              {
                                field: 'id',
                                headerText: e.trans.get('__JSON__.model.value.id'),
                                isPrimaryKey: true,
                                type: 'number',
                                visible: false,
                                showInColumnChooser: false,
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            t(
                              r,
                              {
                                field: 'item_id',
                                headerText: e.trans.get('__JSON__.assets.value.item_id'),
                                type: 'number',
                                visible: false,
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            t(
                              r,
                              {
                                field: 'item_code',
                                headerText: e.trans.get('__JSON__.assets.value.item_code'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'item_designation',
                                headerText: e.trans.get('__JSON__.assets.value.item_designation'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'task_id',
                                headerText: e.trans.get('__JSON__.model.task.id'),
                                type: 'number',
                                visible: false,
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            t(
                              r,
                              {
                                field: 'task_code',
                                headerText: e.trans.get('__JSON__.reservation.value.task_code'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'task_designation',
                                headerText: e.trans.get('__JSON__.reservation.value.task_designation'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'task_object_name',
                                headerText: e.trans.get('__JSON__.reservation.value.task_object'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                                template: 'templateTaskObject',
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'quantity_required',
                                headerText: e.trans.get('__JSON__.reservation.value.quantity_required'),
                                filter: e.gridSettings.filterExcel,
                                type: 'number',
                              },
                              null,
                              8,
                              ['headerText', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'status_name',
                                headerText: e.trans.get('__JSON__.reservation.value.status'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterExcel,
                                template: 'templateStatus',
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'quantity_in_stock',
                                headerText: e.trans.get('__JSON__.reservation.value.quantity_in_stock'),
                                type: 'number',
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            t(
                              r,
                              {
                                field: 'quantity_available',
                                headerText: e.trans.get('__JSON__.reservation.value.quantity_available'),
                                type: 'number',
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            t(
                              r,
                              {
                                field: 'quantity_reserved',
                                headerText: e.trans.get('__JSON__.reservation.value.quantity_reserved'),
                                type: 'number',
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
                            t(
                              r,
                              {
                                field: 'purchase_request_code',
                                headerText: e.trans.get('__JSON__.reservation.value.purchase_request'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ),
                            t(
                              r,
                              {
                                field: 'quantity_commanded',
                                headerText: e.trans.get('__JSON__.reservation.value.quantity_commanded'),
                                type: 'number',
                              },
                              null,
                              8,
                              ['headerText'],
                            ),
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
    e.showModalSelectAsset
      ? (d(),
        m(
          b,
          {
            key: 0,
            'list-assets': e.listAssets,
            'type-edit': 'reservation',
            'supplementary-data': e.supplementaryData,
            onClose: e.closeModalSelectAsset,
          },
          null,
          8,
          ['list-assets', 'supplementary-data', 'onClose'],
        ))
      : c('', true),
    e.showModalAssetDistribution
      ? (d(),
        m(
          C,
          {
            key: 1,
            'reservation-id': e.reservationSelected,
            onClose: e.closeModalAssetDistribution,
          },
          null,
          8,
          ['reservation-id', 'onClose'],
        ))
      : c('', true),
  ]);
}
const se = k(q, [['render', F]]);
export { se as default };
