import { g as T } from './D_eyCAsX.js';
import { e as A } from './DmX3Ojbe.js';
import { h as M } from './CKKuZvVl.js';
import {
  _ as N,
  p as k,
  s as E,
  i as c,
  D as q,
  c as O,
  a as i,
  w as s,
  r as p,
  o as d,
  b as h,
  f as m,
  g,
  e as S,
  t as _,
} from '../assets/app-BjImoLrr.js';
const B = {
  mixins: [T],
  components: {
    editableColumnTemplate: A,
    headerTemplate: M,
  },
  props: {
    listAssets: { required: true },
    canCancelMovement: {
      required: false,
      default() {
        return false;
      },
    },
    typeEdit: {
      required: false,
      default() {
        return 'default';
      },
    },
    supplementaryData: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalEditAssets'),
      animationSettings: { effect: 'None' },
      promptWidth: '1200px',
      promptHeight: '800px',
      dialogElement: null,
      listAssetToEdit: [],
      storage_locations: [],
      suppliers: [],
    };
  },
  methods: {
    cancelModal() {
      if (this.canCancelMovement) {
        let e = [];
        e = this.listAssets.map((l) => l.id);
        axios({
          method: 'delete',
          url: 'api/movements/deleteMovementsFromAssets',
          data: { assetIds: e },
        })
          .then((l) => {
            this.$emit('close');
          })
          .catch((l) => {
            this.$emit('close');
            this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.delete'), 'e-toast-danger');
          });
      } else this.$emit('close');
    },
    closeModal() {
      switch (this.typeEdit) {
        case 'reservation':
          this.listAssets.find((e) => e.quantityToMove && e.quantity_reserved)
            ? (this.dialogElement = q.confirm({
                title: this.trans.get('__JSON__.main.content.confirmation'),
                content: this.trans.get('__JSON__.reservation.content.assetReservedSelected'),
                okButton: {
                  text: this.trans.get('__JSON__.main.modal.button.yes'),
                  click: this.closeAndSendData,
                },
                cancelButton: {
                  text: this.trans.get('__JSON__.main.modal.button.no'),
                  click: this.closeDialogElement,
                },
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' },
              }))
            : this.closeAndSendData();
          break;
        case 'movement':
          this.closeAndSendData();
          break;
        case 'default':
        default:
          this.$emit('close');
          break;
      }
    },
    closeDialogElement() {
      if (this.dialogElement) {
        this.dialogElement.hide();
      }
    },
    closeAndSendData() {
      this.closeDialogElement();
      this.$emit(
        'close',
        this.listAssets
          .filter((e) => e.quantityToMove)
          .map((e) => ({
            id: e.id,
            quantityToMove: e.quantityToMove,
            storage_location: e.storage_location,
          })),
      );
    },
    updateAssets(e) {
      switch (this.typeEdit) {
        case 'movement':
          if (e.fullData && e.editedData) {
            if (e.fullData.quantityToMove > e.fullData.quantity) {
              e.fullData.quantityToMove = e.fullData.quantity;
              e.newEditedData = e.fullData.quantityToMove;
            }
            if (e.fullData.quantityToMove <= 0 || !e.fullData.quantityToMove) {
              e.fullData.quantityToMove = 0;
              e.newEditedData = e.fullData.quantityToMove;
            }
            this.updateGridDataFromEditableColumns(e);
          }
          break;
        case 'reservation':
          if (e.fullData && e.editedData) {
            if (e.fullData.quantityToMove > e.fullData.quantity) {
              e.fullData.quantityToMove = e.fullData.quantity;
              e.newEditedData = e.fullData.quantityToMove;
            }
            if (e.fullData.quantityToMove < 0) {
              e.fullData.quantityToMove = 0;
              e.newEditedData = e.fullData.quantityToMove;
            }
            this.updateGridDataFromEditableColumns(e);
          }
          break;
        case 'default':
        case 'inventory':
        default:
          if (e.fullData && e.editedData) {
            this.updateGridDataFromEditableColumns(e);
            E(document.getElementById('spinnerModalEditAsset'));
            axios
              .put('api/assets/' + e.fullData.id, e.fullData)
              .then((l) => {
                c(document.getElementById('spinnerModalEditAsset'));
                this.createData();
              })
              .catch((l) => {
                c(document.getElementById('spinnerModalEditAsset'));
                console.error(l);
              });
          }
          break;
      }
    },
    updateGridDataFromEditableColumns(e) {
      let l = this.listAssets.find((o) => o.id === e.fullData.id && o.api_prefix == e.fullData.api_prefix);
      let t = this.listAssets.findIndex((o) => o.id === e.fullData.id && o.api_prefix == e.fullData.api_prefix);
      if (l && t != -1) {
        l[e.editedData] = e.newEditedData;
        if (e.editedData === 'supplier_id' && l.price === null && l.supplier_id) {
          let o = this.suppliers[e.fullData.item_id];
          if (this.suppliers[e.fullData.item_id]) {
            let u = this.suppliers[e.fullData.item_id].find((r) => r.supplier_id === e.fullData.supplier_id);
            if (u) {
              e.fullData.price = u.supplier_price;
              l.price = e.fullData.price;
            }
          }
        }
        this.listAssets.splice(t, 1, l);
      }
    },
    createData() {
      if (this.listAssets.length > 0) {
        E(document.getElementById('spinnerModalEditAsset'));
        axios
          .get('api/assets/' + this.listAssets[0].id + '/createData')
          .then((e) => {
            this.storage_locations = e.data.storage_locations;
            this.suppliers = e.data.suppliers;
            c(document.getElementById('spinnerModalEditAsset'));
          })
          .catch((e) => {
            c(document.getElementById('spinnerModalEditAsset'));
            console.error(e);
          });
      }
    },
  },
  watch: {
    listAssets: {
      deep: true,
      immediate: true,
      handler() {
        this.listAssetToEdit = [...this.listAssets];
      },
    },
  },
  mounted() {
    k({ target: document.getElementById('spinnerModalEditAsset') });
    this.createData();
  },
};
const P = { class: 'e-footer-content mt-4' };
function J(e, l, t, o, u, r) {
  const b = p('headerTemplate');
  const n = p('e-column');
  const C = p('e-columns');
  const f = p('editable-column-template');
  const D = p('editableColumnTemplate');
  const v = p('ejs-grid');
  const y = p('ejs-button');
  const w = p('ejs-dialog');
  d();
  return O('div', null, [
    i(
      w,
      {
        ref: 'modalAddFile',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: u.animationSettings,
        showCloseIcon: true,
        close: r.cancelModal,
        width: u.promptWidth,
        height: u.promptHeight,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: s(() => [
          i(b, { title: e.trans.get('__JSON__.purchaseRequest.content.assetsList') }, null, 8, ['title']),
        ]),
        templateContent: s(() => [
          h('div', null, [
            l[0] || (l[0] = h('div', { id: 'spinnerModalEditAsset' }, null, -1)),
            h('div', null, [
              i(
                v,
                {
                  dataSource: u.listAssetToEdit,
                  id: 'modalEditAssets',
                  enablePersistence: false,
                  created: e.onGridCreate,
                  ref: e.gridSettings.ref,
                  actionBegin: e.actionBegin,
                  actionComplete: e.actionComplete,
                  allowExcelExport: e.gridSettings.allowExcelExport,
                  allowFiltering: e.gridSettings.allowFiltering,
                  allowPaging: e.gridSettings.allowPaging,
                  allowReordering: e.gridSettings.allowReordering,
                  allowResizing: e.gridSettings.allowResizing,
                  allowRowDragAndDrop: e.gridSettings.allowRowDragAndDrop,
                  allowSelection: false,
                  allowSorting: e.gridSettings.allowSorting,
                  clipMode: e.gridSettings.clipMode,
                  dataBound: e.dataBound,
                  enableHover: e.gridSettings.enableHover,
                  filterSettings: e.gridSettings.filterSettings,
                  height: e.gridSettings.height,
                  pageSettings: e.gridSettings.pageSettingsModal,
                  rowDragStart: e.rowDragStart,
                  rowDropSettings: e.gridSettings.rowDropSettings,
                  rowHeight: e.gridSettings.rowHeight,
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: e.gridSettings.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  templateEditableCode: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: 'text',
                        'edited-data': 'code',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission:
                          e.can('update', 'assets') && (t.typeEdit === 'default' || t.typeEdit === 'inventory'),
                        data: a,
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data'],
                    ),
                  ]),
                  templateEditableDesignation: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: 'text',
                        'edited-data': 'designation',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission:
                          e.can('update', 'assets') && (t.typeEdit === 'default' || t.typeEdit === 'inventory'),
                        data: a,
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data'],
                    ),
                  ]),
                  templateEditableStorageLocation: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: 'combobox',
                        'edited-data': 'storage_location',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission:
                          e.can('update', 'assets') && (t.typeEdit === 'reservation' || t.typeEdit === 'default'),
                        data: a,
                        supplementaryData: {
                          placeholder: e.trans.get('__JSON__.model.value.storage_location'),
                          dataSource: u.storage_locations,
                          rawDataSource: true,
                        },
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data', 'supplementaryData'],
                    ),
                  ]),
                  templateEditableSupplier: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: 'list',
                        'edited-data': 'supplier_id',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission: e.can('update', 'assets') && t.typeEdit !== 'reservation',
                        data: a,
                        supplementaryData: {
                          dataSource: this.suppliers[a.item_id],
                          fields: {
                            text: 'supplier_name',
                            value: 'supplier_id',
                          },
                          rawDataSource: true,
                          showClearButton: true,
                        },
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data', 'supplementaryData'],
                    ),
                  ]),
                  templateEditableExpirationDate: s(({ data: a }) => [
                    i(
                      D,
                      {
                        isEditablePermission:
                          e.can('update', 'assets') && (t.typeEdit === 'reservation' || t.typeEdit === 'default'),
                        type: 'datetime',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        'edited-data': 'expiration_date',
                        data: a,
                      },
                      null,
                      8,
                      ['isEditablePermission', 'inputChanged', 'data'],
                    ),
                  ]),
                  templateEditableQuantity: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: a.item_type === 2 ? 'float' : 'integer',
                        'edited-data': 'quantityToMove',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission: e.can('update', 'assets'),
                        data: a,
                      },
                      null,
                      8,
                      ['type', 'inputChanged', 'isEditablePermission', 'data'],
                    ),
                  ]),
                  templateEditablePrice: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: 'float',
                        'edited-data': 'price',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission: e.can('update', 'assets') && t.typeEdit !== 'reservation',
                        data: a,
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data'],
                    ),
                  ]),
                  templateEditableSerialNumber: s(({ data: a }) => [
                    i(
                      f,
                      {
                        type: 'text',
                        'edited-data': 'serial_number',
                        inputChanged: r.updateAssets,
                        updateGrid: false,
                        isEditablePermission: e.can('update', 'assets') && t.typeEdit !== 'reservation',
                        data: a,
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data'],
                    ),
                  ]),
                  default: s(() => [
                    i(C, null, {
                      default: s(() => [
                        i(
                          n,
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
                        i(
                          n,
                          {
                            field: 'code',
                            template: 'templateEditableCode',
                            headerText: e.trans.get('__JSON__.model.value.code'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        i(
                          n,
                          {
                            field: 'designation',
                            template: 'templateEditableDesignation',
                            headerText: e.trans.get('__JSON__.model.value.designation'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        i(
                          n,
                          {
                            field: 'quantity',
                            headerText: e.trans.get('__JSON__.assets.value.quantity'),
                            type: 'number',
                            filter: e.gridSettings.filterExcel,
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        t.typeEdit == 'reservation'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 0,
                                field: 'quantity_reserved',
                                headerText: e.trans.get('__JSON__.reservation.value.quantity_reserved'),
                                type: 'number',
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'movement' || t.typeEdit == 'inventory' || t.typeEdit == 'reservation'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 1,
                                field: 'quantityToMove',
                                template: 'templateEditableQuantity',
                                headerText: e.trans.get('__JSON__.assets.value.quantityToMove'),
                                type: 'number',
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'default' || t.typeEdit == 'inventory' || t.typeEdit == 'reservation'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 2,
                                field: 'supplier',
                                template: 'templateEditableSupplier',
                                headerText: e.trans.get('__JSON__.model.asset.supplier'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'default' || t.typeEdit == 'inventory' || t.typeEdit == 'reservation'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 3,
                                field: 'price',
                                template: 'templateEditablePrice',
                                headerText: e.trans.get('__JSON__.assets.value.price'),
                                type: 'number',
                                filter: e.gridSettings.filterExcel,
                              },
                              null,
                              8,
                              ['headerText', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'default' || t.typeEdit == 'inventory' || t.typeEdit == 'reservation'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 4,
                                field: 'serial_number',
                                template: 'templateEditableSerialNumber',
                                headerText: e.trans.get('__JSON__.model.value.serial_number'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'inventory' || t.typeEdit == 'reservation'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 5,
                                field: 'storage_location',
                                headerText: e.trans.get('__JSON__.assets.value.storage_location'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'movement' || t.typeEdit == 'default'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 6,
                                field: 'storage_location',
                                template: 'templateEditableStorageLocation',
                                headerText: e.trans.get('__JSON__.assets.value.storage_location'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ))
                          : g('', true),
                        t.typeEdit == 'movement' || t.typeEdit == 'default'
                          ? (d(),
                            m(
                              n,
                              {
                                key: 7,
                                field: 'expiration_date',
                                template: 'templateEditableExpirationDate',
                                headerText: e.trans.get('__JSON__.assets.value.expiration_date'),
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'sortComparer', 'filter'],
                            ))
                          : g('', true),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                [
                  'dataSource',
                  'created',
                  'actionBegin',
                  'actionComplete',
                  'allowExcelExport',
                  'allowFiltering',
                  'allowPaging',
                  'allowReordering',
                  'allowResizing',
                  'allowRowDragAndDrop',
                  'allowSorting',
                  'clipMode',
                  'dataBound',
                  'enableHover',
                  'filterSettings',
                  'height',
                  'pageSettings',
                  'rowDragStart',
                  'rowDropSettings',
                  'rowHeight',
                  'searchSettings',
                  'selectionSettings',
                  'showColumnChooser',
                  'toolbar',
                  'toolbarClick',
                ],
              ),
            ]),
            h('div', P, [
              h('span', null, [
                i(
                  y,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: r.cancelModal,
                  },
                  {
                    default: s(() => [S(_(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                i(
                  y,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: r.closeModal,
                  },
                  {
                    default: s(() => [S(_(e.trans.get('__JSON__.main.modal.button.continue')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ['animationSettings', 'close', 'width', 'height'],
    ),
  ]);
}
const W = N(B, [['render', J]]);
export { W as M };
