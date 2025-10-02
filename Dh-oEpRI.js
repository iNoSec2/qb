import b from './JzGXi_4H.js';
import {
  _ as S,
  D as v,
  c as p,
  b as r,
  f,
  g as m,
  a as n,
  w as o,
  r as c,
  o as h,
  n as _,
  e as A,
  t as R,
} from '../assets/app-BjImoLrr.js';
import { g as k } from './D_eyCAsX.js';
import { e as y } from './DmX3Ojbe.js';
import { h as O } from './CKKuZvVl.js';
import { M as J } from './CFn9I8-1.js';
const q = {
  props: { data: { required: true } },
  data: function () {
    return { dialogElement: null };
  },
  methods: {
    deleteReservation() {
      if (this.can('delete', 'reservations')) {
        this.$emit('deleteReservation', this.data);
      }
    },
    validateReservation() {
      if (this.can('validate', 'reservations')) {
        this.data.quantity_reserved !== this.data.quantity_required
          ? (this.dialogElement = v.confirm({
              title: this.trans.get('__JSON__.reservation.content.confirmationValidationTitle'),
              content: this.trans.get('__JSON__.reservation.content.confirmationValidationContent'),
              okButton: {
                text: this.trans.get('__JSON__.main.modal.button.yes'),
                click: this.confirmValidateReservation,
              },
              cancelButton: {
                text: this.trans.get('__JSON__.main.modal.button.cancel'),
                click: this.cancelClick,
              },
              showCloseIcon: true,
              closeOnEscape: true,
              animationSettings: { effect: 'Zoom' },
            }))
          : this.confirmValidateReservation();
      }
    },
    cancelClick() {
      try {
        if (this.dialogElement) {
          this.dialogElement.hide();
        }
      } catch {}
    },
    confirmValidateReservation() {
      this.cancelClick();
      this.$emit('validateReservation', this.data);
      this.$refs.validateReservationTooltip.ej2Instances.destroy();
    },
    fillReservation() {
      if (this.can('assets', 'reservations')) {
        this.$emit('fillReservation', this.data);
        this.$refs.fillReservationTooltip.ej2Instances.destroy();
      }
    },
    createPurchaseRequest() {
      if (this.can('create', 'purchaseRequests')) {
        this.$emit('createPurchaseRequests', this.data);
        this.$refs.createPurchaseRequestTooltip.ej2Instances.destroy();
      }
    },
    cancelMovement() {
      if (this.can('cancel', 'reservations')) {
        this.$emit('cancelReservation', this.data);
      }
    },
  },
};
const E = { class: 'gridActions' };
const F = { class: 'd-flex' };
const B = { class: 'me-2' };
function M(e, t, i, u, l, s) {
  const d = c('ejs-tooltip');
  h();
  return p('div', E, [
    r('div', F, [
      r('div', B, [
        n(
          d,
          {
            content: e.trans.get('__JSON__.model.action.delete'),
            position: 'TopCenter',
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: o(() => [
              r(
                'span',
                {
                  class: _([
                    'sf-icon-garbage-wf clickableIconGrid',
                    e.can('delete', 'reservations') ? '' : 'e-disabled',
                  ]),
                  onClick: t[0] || (t[0] = (...a) => s.deleteReservation && s.deleteReservation(...a)),
                },
                null,
                2,
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
      i.data.status_code === 'validated'
        ? (h(),
          f(
            d,
            {
              key: 0,
              class: 'text-truncate me-2',
              openDelay: '400',
              content: e.trans.get('__JSON__.reservation.content.cancelMovement'),
              animation: e.default_SF_Props.animationTooltip,
            },
            {
              default: o(() => [
                r(
                  'span',
                  {
                    class: _([
                      'sf-icon-cross-close clickableIconGrid',
                      e.can('cancel', 'reservations') ? '' : 'e-disabled',
                    ]),
                    onClick: t[1] || (t[1] = (...a) => s.cancelMovement && s.cancelMovement(...a)),
                  },
                  null,
                  2,
                ),
              ]),
              _: 1,
            },
            8,
            ['content', 'animation'],
          ))
        : m('', true),
      i.data.status_code !== 'validated'
        ? (h(),
          f(
            d,
            {
              key: 1,
              ref: 'fillReservationTooltip',
              class: 'text-truncate me-2',
              openDelay: '400',
              content: e.trans.get('__JSON__.reservation.content.fillReservation'),
              animation: e.default_SF_Props.animationTooltip,
            },
            {
              default: o(() => [
                r(
                  'span',
                  {
                    class: _([
                      'sf-icon-skew-wf clickableIconGrid',
                      i.data.quantity_available > 0 && e.can('assets', 'reservations') ? '' : 'e-disabled',
                    ]),
                    onClick: t[2] || (t[2] = (...a) => s.fillReservation && s.fillReservation(...a)),
                  },
                  null,
                  2,
                ),
              ]),
              _: 1,
            },
            8,
            ['content', 'animation'],
          ))
        : m('', true),
      i.data.status_code !== 'validated'
        ? (h(),
          f(
            d,
            {
              key: 2,
              ref: 'validateReservationTooltip',
              class: 'text-truncate me-2',
              openDelay: '400',
              content: e.trans.get('__JSON__.reservation.content.validateReservation'),
              animation: e.default_SF_Props.animationTooltip,
            },
            {
              default: o(() => [
                r(
                  'span',
                  {
                    class: _([
                      'sf-icon-check-01 clickableIconGrid',
                      e.can('validate', 'reservations') ? '' : 'e-disabled',
                    ]),
                    onClick: t[3] || (t[3] = (...a) => s.validateReservation && s.validateReservation(...a)),
                  },
                  null,
                  2,
                ),
              ]),
              _: 1,
            },
            8,
            ['content', 'animation'],
          ))
        : m('', true),
      i.data.quantity_available < i.data.quantity_required - i.data.quantity_reserved &&
      !i.data.purchase_request_id &&
      i.data.status_code !== 'validated'
        ? (h(),
          f(
            d,
            {
              key: 3,
              ref: 'createPurchaseRequestTooltip',
              class: 'text-truncate me-2',
              openDelay: '400',
              content: e.trans.get('__JSON__.reservation.content.createPurchaseRequest'),
              animation: e.default_SF_Props.animationTooltip,
            },
            {
              default: o(() => [
                r(
                  'span',
                  {
                    class: _([
                      'sf-icon-voucher1-wf clickableIconGrid',
                      e.can('create', 'purchaseRequests') ? '' : 'e-disabled',
                    ]),
                    onClick: t[4] || (t[4] = (...a) => s.createPurchaseRequest && s.createPurchaseRequest(...a)),
                  },
                  null,
                  2,
                ),
              ]),
              _: 1,
            },
            8,
            ['content', 'animation'],
          ))
        : m('', true),
    ]),
  ]);
}
const P = S(q, [['render', M]]);
const I = {
  mixins: [k],
  components: {
    editableColumnTemplate: y,
    headerTemplate: O,
  },
  props: { reservationId: { required: true } },
  data() {
    let e = this;
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalDistributeAssets'),
      animationSettings: { effect: 'None' },
      promptWidth: '1300px',
      promptHeight: '800px',
      listAssets: [],
      supplementaryDataEditableDestination: {
        showClearButton: true,
        placeholder: e.trans.get('__JSON__.reservation.value.destination'),
        dataSource: 'destinationAvailables',
        fields: {
          text: 'destination_name',
          value: 'destination_id',
          parentValue: 'destination_parentValue',
          hasChildren: 'destination_hasChildren',
          iconCss: 'destination_iconCss',
        },
      },
      supplementaryDataEditableDestinationAssetRemoved: {
        showClearButton: true,
        isVisible: 'removed_destination_visible',
        placeholder: e.trans.get('__JSON__.reservation.value.destination_asset_removed'),
        store: e.gridData,
        dataSource: 'destination_reservation_list',
        fields: {
          text: 'destination_name',
          value: 'destination_id',
        },
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    dataBoundOverride() {
      this.dataBound();
      this.$refs.grid.autoFitColumns();
    },
    closeModal() {
      this.$emit('close', false);
    },
    updateDestinationPreUpdate(e) {
      const u = this.listAssets
        .find((l) => l.asset_id === e.fullData.asset_id)
        ?.destinationAvailables?.find((l) => l.destination_id === e.fullData.destination_id)?.item?.id;
      if (e.fullData.asset_item_id === u) {
        this.updateDestinationArgs = e;
        this.confirmReplace();
        return;
      }
      e.fullData.destination_id
        ? e.fullData.destination_id.includes('ASSET_')
          ? ((this.updateDestinationArgs = e),
            (this.dialogElement = v.confirm({
              title: this.trans.get('__JSON__.assets.content.replaceOrAddNomenclatureTitle'),
              content: this.trans.get('__JSON__.assets.content.replaceOrAddNomenclatureContent'),
              okButton: {
                text: this.trans.get('__JSON__.assets.action.replace'),
                click: this.confirmReplace,
              },
              cancelButton: {
                text: this.trans.get('__JSON__.assets.action.addNomenclature'),
                click: this.confirmAddNomenclature,
              },
              showCloseIcon: true,
              closeOnEscape: true,
              animationSettings: { effect: 'Zoom' },
            })))
          : this.updateDestination(e)
        : this.updateDestination(e);
    },
    closeDialogElement() {
      if (this.dialogElement)
        try {
          this.dialogElement.hide();
        } catch {}
    },
    confirmReplace() {
      this.closeDialogElement();
      if (this.updateDestinationArgs) {
        this.updateDestinationArgs.fullData.movementTypeForAssetName = this.trans.get(
          '__JSON__.assets.content.replaceAsset',
        );
        this.updateDestinationArgs.fullData.movementTypeForAsset = 'replaceAsset';
        this.updateDestinationArgs.fullData.removed_destination_visible = true;
        this.updateDestination(this.updateDestinationArgs);
      }
    },
    confirmAddNomenclature() {
      this.closeDialogElement();
      if (this.updateDestinationArgs) {
        this.updateDestinationArgs.fullData.movementTypeForAssetName = this.trans.get(
          '__JSON__.assets.content.addNomenclatureToAsset',
        );
        this.updateDestinationArgs.fullData.movementTypeForAsset = 'addNomenclatureToAsset';
        this.updateDestinationArgs.fullData.removed_destination_visible = false;
        this.updateDestination(this.updateDestinationArgs);
      }
    },
    updateDestination(e) {
      if (e.fullData && e.fullData.asset_id && e.editedData) {
        if (e.editedData === 'destination_id') {
          e.fullData.destination_id
            ? ((e.fullData.destination_name = e.fullData.destinationAvailables.find(
                (i) => i.destination_id === e.fullData.destination_id,
              ).destination_name),
              e.fullData.destination_id.includes('TAG_NODE_') &&
                ((e.fullData.movementTypeForAssetName = this.trans.get('__JSON__.assets.content.addNomenclatureToTag')),
                (e.fullData.movementTypeForAsset = 'putBelow'),
                (e.fullData.removed_destination_visible = false)),
              e.fullData.destination_id.includes('STOCK_') &&
                ((e.fullData.movementTypeForAssetName = this.trans.get('__JSON__.assets.content.sendAssetToStock')),
                (e.fullData.movementTypeForAsset = 'putInside'),
                (e.fullData.removed_destination_visible = false)))
            : ((e.fullData.destination_name = ''),
              (e.fullData.removed_destination_visible = false),
              (e.fullData.movementTypeForAssetName = ''),
              (e.fullData.movementTypeForAsset = null));
        }
        if (e.editedData === 'removed_destination_id') {
          e.fullData.removed_destination_id
            ? (e.fullData.destination_name = this.gridData.destination_reservation_list.find(
                (i) => i.destination_id === e.fullData.removed_destination_id,
              ).destination_name)
            : (e.fullData.destination_name = '');
        }
        let t = this.listAssets.findIndex((i) => i.asset_id === e.fullData.asset_id);
        this.listAssets.splice(t, 1, e.fullData);
        this.listAssets = [...this.listAssets];
      }
    },
    validateReservation() {
      if (this.listAssets.find((t) => !t.destination_id)) {
        this.showCenterToast(this.trans.get('__JSON__.reservation.toast.info.fillDestination'), 'e-toast-info');
        return;
      }
      if (
        this.listAssets.find(
          (t) =>
            t.destination_id &&
            t.destination_id.includes('ASSET_') &&
            t.movementTypeForAsset === 'replaceAsset' &&
            !t.removed_destination_id,
        )
      ) {
        this.showCenterToast(this.trans.get('__JSON__.reservation.toast.info.fillDestinationRemoved'), 'e-toast-info');
        return;
      }
      let e = this.listAssets.filter((t) => t.destination_id.includes('ASSET_')).map((t) => t.destination_id);
      if ([...new Set(e)].length !== e.length) {
        this.showCenterToast(this.trans.get('__JSON__.reservation.toast.error.cannotHaveSameAsset'), 'e-toast-info');
        return;
      }
      this.$refs.grid.showSpinner();
      axios
        .post('api/reservations/' + this.reservationId + '/validate', { assetData: this.listAssets })
        .then((t) => {
          t.data.restockData && t.data.restockData.restock
            ? ((this.restockData = t.data.restockData),
              (this.dialogElement = v.confirm({
                title: this.trans.get('__JSON__.stocks.content.restockItemsTitle'),
                content: this.trans.get('__JSON__.stocks.content.restockItemsContent', {
                  itemCode: this.restockData.item_code,
                }),
                okButton: {
                  text: this.trans.get('__JSON__.main.modal.button.yes'),
                  click: this.confirmRestockStock,
                },
                cancelButton: {
                  text: this.trans.get('__JSON__.main.modal.button.no'),
                  click: this.closeRestockDialog,
                },
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' },
              })))
            : (this.$refs.grid.hideSpinner(), this.$emit('close', true));
        })
        .catch((t) => {
          this.$refs.grid.hideSpinner();
          console.error(t);
        });
    },
    confirmRestockStock() {
      if (this.restockData) {
        this.closeRestockDialog();
        this.$refs.grid.showSpinner();
        axios
          .post('api/purchaseRequests/createPurchaseRequestFromItem', {
            item_id: this.restockData.item_id,
            quantity: this.restockData.quantity,
          })
          .then((e) => {
            this.$refs.grid.hideSpinner();
            this.$emit('close', true);
          })
          .catch((e) => {
            this.$refs.grid.hideSpinner();
            this.$emit('close', true);
          });
      }
    },
    closeRestockDialog() {
      this.$refs.grid.hideSpinner();
      if (this.dialogElement)
        try {
          this.dialogElement.hide();
        } catch {}
    },
    getData() {
      axios
        .get('api/reservations/' + this.reservationId + '/validation')
        .then((e) => {
          this.gridData.setDestinationReservations(e.data.assetRemovedDestinationStocks);
          this.$nextTick(() => {
            this.listAssets = e.data.assetsAdded;
          });
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
const $ = { class: 'e-footer-content mt-4' };
function V(e, t, i, u, l, s) {
  const d = c('headerTemplate');
  const a = c('e-column');
  const w = c('e-columns');
  const D = c('editableColumnTemplate');
  const T = c('ejs-grid');
  const C = c('ejs-button');
  const N = c('ejs-dialog');
  h();
  return p('div', null, [
    n(
      N,
      {
        ref: 'modalAddFile',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: l.animationSettings,
        showCloseIcon: true,
        close: s.closeModal,
        width: l.promptWidth,
        height: l.promptHeight,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: o(() => [
          n(d, { title: e.trans.get('__JSON__.reservation.content.validation') }, null, 8, ['title']),
        ]),
        templateContent: o(() => [
          r('div', null, [
            r('div', null, [
              n(
                T,
                {
                  dataSource: l.listAssets,
                  id: 'modalDistributeAssets',
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
                  dataBound: s.dataBoundOverride,
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
                  templateEditableDestination: o(({ data: g }) => [
                    n(
                      D,
                      {
                        data: g,
                        type: 'dropdowntree',
                        editedData: 'destination_id',
                        inputChanged: s.updateDestinationPreUpdate,
                        updateGrid: false,
                        supplementaryData: l.supplementaryDataEditableDestination,
                      },
                      null,
                      8,
                      ['data', 'inputChanged', 'supplementaryData'],
                    ),
                  ]),
                  templateEditableDestinationAssetRemoved: o(({ data: g }) => [
                    n(
                      D,
                      {
                        data: g,
                        type: 'list',
                        editedData: 'removed_destination_id',
                        inputChanged: s.updateDestination,
                        updateGrid: false,
                        supplementaryData: l.supplementaryDataEditableDestinationAssetRemoved,
                      },
                      null,
                      8,
                      ['data', 'inputChanged', 'supplementaryData'],
                    ),
                  ]),
                  default: o(() => [
                    n(w, null, {
                      default: o(() => [
                        n(
                          a,
                          {
                            field: 'asset_id',
                            headerText: e.trans.get('__JSON__.model.value.id'),
                            isPrimaryKey: true,
                            type: 'number',
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        n(
                          a,
                          {
                            field: 'code',
                            headerText: e.trans.get('__JSON__.model.value.code'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        n(
                          a,
                          {
                            field: 'designation',
                            headerText: e.trans.get('__JSON__.model.value.designation'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        n(
                          a,
                          {
                            field: 'stock_designation',
                            headerText: e.trans.get('__JSON__.stocks.value.stock'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        n(
                          a,
                          {
                            field: 'asset_serial_number',
                            headerText: e.trans.get('__JSON__.model.asset.serial_number'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        n(
                          a,
                          {
                            field: 'movementTypeForAssetName',
                            headerText: e.trans.get('__JSON__.model.asset.movementTypeForAsset'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        n(
                          a,
                          {
                            field: 'destination_name',
                            headerText: e.trans.get('__JSON__.reservation.value.destination'),
                            template: 'templateEditableDestination',
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        n(
                          a,
                          {
                            field: 'destination_asset_removed_name',
                            headerText: e.trans.get('__JSON__.reservation.value.destination_asset_removed'),
                            template: 'templateEditableDestinationAssetRemoved',
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
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
            r('div', $, [
              r('span', null, [
                n(
                  C,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: s.closeModal,
                  },
                  {
                    default: o(() => [A(R(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                n(
                  C,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: s.validateReservation,
                  },
                  {
                    default: o(() => [A(R(e.trans.get('__JSON__.main.modal.button.validate')), 1)]),
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
const j = S(I, [['render', V]]);
const x = {
  props: { data: { required: true } },
  methods: {
    deleteAssetReservation() {
      if (this.can('assets', 'reservations')) {
        this.$emit('deleteAssetReservation', this.data);
      }
    },
  },
};
const G = { class: 'gridActions' };
const H = { class: 'd-flex' };
const W = { class: 'me-2' };
function z(e, t, i, u, l, s) {
  const d = c('ejs-tooltip');
  h();
  return p('div', G, [
    r('div', H, [
      r('div', W, [
        n(
          d,
          {
            content: e.trans.get('__JSON__.model.action.delete'),
            position: 'TopCenter',
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: o(() => [
              i.data.is_editable
                ? (h(),
                  p(
                    'span',
                    {
                      key: 0,
                      class: _([
                        'sf-icon-garbage-wf clickableIconGrid',
                        e.can('assets', 'reservations') ? '' : 'e-disabled',
                      ]),
                      onClick: t[0] || (t[0] = (...a) => s.deleteAssetReservation && s.deleteAssetReservation(...a)),
                    },
                    null,
                    2,
                  ))
                : m('', true),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
    ]),
  ]);
}
const U = S(x, [['render', z]]);
const ee = {
  components: {
    ActionReservationChild: U,
    ModalDistributeAssets: j,
    ModalEditAssets: J,
    actionReservation: P,
    colorValue: b,
  },
  props: {
    uuid: {
      required: false,
      default() {
        return UUID.generate();
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.reservationsGrid'),
      showModalSelectAsset: false,
      showModalAssetDistribution: false,
      reservationSelected: null,
      supplementaryData: {},
      listAssets: [],
      childGridSettings: {
        queryString: 'reservation_id',
        columns: [
          {
            field: 'actions',
            headerText: '',
            allowResizing: false,
            allowReordering: false,
            lockColumn: true,
            allowFiltering: false,
            showInColumnChooser: false,
            allowSorting: false,
            template: 'templateChildActions',
          },
          {
            field: 'id',
            headerText: this.trans.get('__JSON__.model.value.id'),
            isPrimaryKey: true,
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
            field: 'quantity',
            headerText: this.trans.get('__JSON__.assets.value.quantity'),
          },
          {
            field: 'price',
            headerText: this.trans.get('__JSON__.assets.value.price'),
          },
          {
            field: 'serial_number',
            headerText: this.trans.get('__JSON__.model.value.serial_number'),
          },
          {
            field: 'storage_location',
            headerText: this.trans.get('__JSON__.assets.value.storage_location'),
          },
        ],
        load: function () {
          this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData.id;
        },
      },
    };
  },
  methods: {
    deleteAssetReservation(e) {
      if (e) {
        axios
          .delete('api/reservations/' + e.reservation_id + '/asset/' + e.id)
          .then((t) => {
            this.getReservations();
          })
          .catch((t) => {
            console.error(t);
            this.showCenterToast(this.trans.get('__JSON__.task.toast.error.removeReservation'), 'e-toast-danger');
          });
      }
    },
    deleteReservation(e) {
      if (e) {
        axios
          .delete('api/reservations/' + e.id)
          .then((t) => {
            this.getReservations();
          })
          .catch((t) => {
            console.error(t);
            this.showCenterToast(this.trans.get('__JSON__.task.toast.error.removeReservation'), 'e-toast-danger');
          });
      }
    },
    validateReservation(e) {
      if (e) {
        this.reservationSelected = e.id;
        this.showModalAssetDistribution = true;
      }
    },
    closeModalAssetDistribution(e = false) {
      this.showModalAssetDistribution = false;
      if (e) {
        this.getReservations();
      }
    },
    fillReservation(e) {
      if (e) {
        this.reservationSelected = e.id;
        this.supplementaryData.maxQuantity = e.quantity_required - e.quantity_reserved;
        axios
          .get('api/reservations/' + e.id + '/assetsForReservation')
          .then((t) => {
            this.listAssets = t.data.assets;
            this.supplementaryData.autoSelect = t.data.selectedAssets;
            this.showModalSelectAsset = true;
          })
          .catch((t) => {
            console.error(t);
            this.showCenterToast(
              this.trans.get('__JSON__.reservation.toast.error.getAssetForReservation'),
              'e-toast-danger',
            );
          });
      }
    },
    closeModalSelectAsset(e) {
      this.showModalSelectAsset = false;
      if (e && this.reservationSelected) {
        axios
          .post('api/reservations/' + this.reservationSelected + '/addAssets', { assets: e })
          .then((t) => {
            this.getReservations();
          })
          .catch((t) => {
            console.error(t);
            this.showCenterToast(
              this.trans.get('__JSON__.reservation.toast.error.addAssetToReservation'),
              'e-toast-danger',
            );
          });
      }
    },
    createPurchaseRequests(e) {
      if (e) {
        this.$refs.grid.showSpinner();
        axios
          .post('api/reservations/' + e.id + '/createPurchaseRequest', {})
          .then((t) => {
            this.$refs.grid.hideSpinner();
            this.showCenterToast(
              this.trans.get('__JSON__.reservation.toast.success.createPurchaseRequest'),
              'e-toast-success',
            );
            this.getReservations();
          })
          .catch((t) => {
            this.$refs.grid.hideSpinner();
            console.error(t);
            this.showCenterToast(
              this.trans.get('__JSON__.reservation.toast.error.createPurchaseRequest'),
              'e-toast-danger',
            );
          });
      }
    },
    cancelReservation(e) {
      if (e) {
        this.$refs.grid.showSpinner();
        axios
          .put('api/reservations/' + e.id + '/cancelReservation', {})
          .then((t) => {
            this.$refs.grid.hideSpinner();
            this.showCenterToast(
              this.trans.get('__JSON__.reservation.toast.success.cancelMovement'),
              'e-toast-success',
            );
            this.getReservations();
          })
          .catch((t) => {
            this.$refs.grid.hideSpinner();
            console.error(t);
          });
      }
    },
    onDetailDataBound(e) {
      this.$refs.grid.showSpinner();
      axios
        .get('api/reservations/' + e.data.id + '/assets')
        .then((t) => {
          this.$refs.grid.hideSpinner();
          let i = t.data.assets;
          i.forEach((u) => {
            u.is_editable = e.data.status_code !== 'validated';
          });
          this.setChildDataSource(e, i);
        })
        .catch((t) => {
          this.$refs.grid.hideSpinner();
          console.error(t);
        });
    },
    rowDataBoundOverride(e) {
      if (!e.data.quantity_reserved) {
        e.row.querySelector('td').innerHTML = ' ';
        e.row.querySelector('td').classList.add('arrowDeactivated');
      }
    },
  },
};
export { ee as r };
