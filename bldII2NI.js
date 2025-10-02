const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'chunks/BxIu9x40.js',
      'assets/app-BjImoLrr.js',
      'css/CMUvL9X7.css',
      'css/CQE2eH-I.css',
      'chunks/zC887B9y.js',
      'chunks/CIZo99Uw.js',
      'chunks/CstnyyMp.js',
      'chunks/DrOYtW4t.js',
      'chunks/BWJp0flw.js',
      'chunks/D6qTVqbk.js',
      'css/B0XDC8dX.css',
      'chunks/CKKuZvVl.js',
      'chunks/DvWiUwH6.js',
      'chunks/B4PstBc0.js',
      'chunks/A0nBLeas.js',
      'chunks/CLQ8a77M.js',
      'chunks/D_eyCAsX.js',
      'chunks/DF3-5v4V.js',
      'chunks/BKAIn2gq.js',
      'chunks/DzLe_4Zq.js',
      'chunks/JzGXi_4H.js',
      'chunks/SUr2wc-1.js',
      'css/DzaC9e0n.css',
      'chunks/DmX3Ojbe.js',
      'chunks/Brc4hCJ1.js',
      'css/CO12GkGL.css',
      'css/DSsL4axz.css',
      'chunks/D9nDGEOM.js',
      'chunks/B5OkKPxd.js',
      'chunks/C3YRlhOp.js',
      'chunks/CUvLZwvz.js',
      'css/DBcRuDqZ.css',
      'css/6so2YfkR.css',
      'chunks/DEdfVzPD.js',
      'chunks/CeaU_JMC.js',
      'chunks/ZS-VIFna.js',
      'chunks/BzXjulcJ.js',
      'chunks/BCTXnxKj.js',
      'chunks/Nw-Fho2_.js',
      'chunks/BpLTBrfQ.js',
      'chunks/DZOApFs4.js',
      'chunks/CHw12MFN.js',
      'chunks/sKBcFuym.js',
      'chunks/H3zXViHv.js',
      'css/BdVarn6W.css',
      'css/wB8ZolIl.css',
    ]),
) => i.map((i) => d[i]);
import {
  _ as T,
  k as P,
  c as m,
  a as l,
  r as a,
  o as c,
  s as J,
  i as C,
  E as v,
  p as E,
  w as d,
  b as o,
  e as S,
  t as k,
  f as M,
  g,
  n as D,
  aL as z,
  aM as K,
  aN as X,
  d as j,
  v as A,
  X as N,
  Y,
} from '../assets/app-BjImoLrr.js';
import { d as Q } from './Nw-Fho2_.js';
import { M as R } from './BMaWf-ez.js';
import { g as F } from './D_eyCAsX.js';
import { c as Z } from './DvWiUwH6.js';
import { G as $ } from './DstRLUzo.js';
import { d as ee } from './Brc4hCJ1.js';
import { h as I } from './CKKuZvVl.js';
import { P as te } from './BpLTBrfQ.js';
import { a as se } from './CHw12MFN.js';
import le from './DEdfVzPD.js';
import { o as oe } from './sKBcFuym.js';
import ne from './JzGXi_4H.js';
const ie = {
  mixins: [P],
  props: {
    recurrenceData: {
      required: false,
      default: '',
    },
    frequencies: {
      required: false,
      default() {
        return ['none', 'daily', 'weekly', 'monthly', 'yearly'];
      },
    },
  },
  data() {
    let e = 1;
    let t = this.mainStore.schedulerParameters;
    if (this.mainStore.schedulerParameters) {
      e = this.mainStore.schedulerParameters.firstDayOfWeek;
    }
    return { firstDayOfWeek: e };
  },
  methods: {
    onChange: function (e) {
      this.$emit('changeRecurrenceData', e.value);
    },
  },
};
function ae(e, t, u, O, s, n) {
  const p = a('ejs-recurrenceeditor');
  c();
  return m('div', null, [
    l(
      p,
      {
        ref: 'recurrenceEditor',
        firstDayOfWeek: s.firstDayOfWeek,
        frequencies: u.frequencies,
        change: n.onChange,
        value: u.recurrenceData,
      },
      null,
      8,
      ['firstDayOfWeek', 'frequencies', 'change', 'value'],
    ),
  ]);
}
const re = T(ie, [['render', ae]]);
const de = {
  mixins: [F],
  components: {
    colorValue: ne,
    headerTemplate: I,
  },
  props: {
    object_type: { required: true },
    object_id: { required: true },
    return_value: {
      required: false,
      default() {
        return false;
      },
    },
    return_only_id: {
      required: false,
      default() {
        return true;
      },
    },
    numberSelectMax: {
      required: false,
      default: function () {
        return 500;
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalAddInstructions'),
      listInstructions: [],
      animationSettings: { effect: 'None' },
      promptWidth: '1000px',
      toolbar: [
        'Search',
        'ColumnChooser',
        {
          id: 'excelExport',
          prefixIcon: 'sf-icon--excel-export-',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.excelExport'),
        },
        {
          id: 'csvExport',
          prefixIcon: 'sf-icon-csv-export',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.csvExport'),
        },
        {
          id: 'resetFilter',
          prefixIcon: 'sf-icon-filter-05-wf',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.resetFilter'),
        },
        {
          id: 'autofitColumns',
          prefixIcon: 'sf-icon-arrow-expand',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.autofitColumns'),
        },
        {
          id: 'selectionToolbarModalSelectionInstruction',
          text: translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }),
          disabled: true,
        },
      ],
      selectionModuleGrid: { persistSelectedData: [] },
    };
  },
  watch: {
    'selectionModuleGrid.persistSelectedData': {
      deep: true,
      handler(e) {
        let t = this.$refs.grid.$el.querySelector('#selectionToolbarModalSelectionItem');
        if (t && t.firstElementChild) {
          let u = t.firstElementChild;
          e
            ? (u.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: e.length }))
            : (u.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }));
        }
      },
    },
  },
  mounted() {
    E({ target: document.getElementById('spinnerModalAddInstruction') });
    this.getData();
  },
  methods: {
    closeModal() {
      this.$refs.modalAddInstruction.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    rowSelectingCheck(e) {
      this.rowSelecting(e);
      if (this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length + 1 > this.numberSelectMax) {
        this.numberSelectMax == 1
          ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
          : ((e.cancel = true),
            this.showCenterToast(
              this.trans.get('__JSON__.agent.toast.error.maxSelection', { number: this.numberSelectMax }),
              'e-toast-danger',
            ));
      }
    },
    selectInstruction() {
      let e = this.$refs.grid.getSelectedRecords().map((t) => t.id);
      e.length
        ? this.return_value
          ? (this.return_only_id
              ? this.$emit('instructionSelected', e)
              : this.$emit('instructionSelected', this.$refs.grid.getSelectedRecords()),
            this.closeModal())
          : (J(document.getElementById('spinnerModalAddInstruction')),
            axios
              .post('api/' + this.object_type + '/' + this.object_id + '/addInstructions', { instructionIds: e })
              .then((t) => {
                C(document.getElementById(this.spinnerId));
                v.$emit('refreshInstructionsListPanel', {
                  object_id: this.object_id,
                  object_type: this.object_type,
                  instructions: t.data.instructions,
                });
                this.closeModal();
              })
              .catch((t) => {
                console.error(t);
                C(document.getElementById(this.spinnerId));
              }))
        : this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-danger');
    },
    getData() {
      J(document.getElementById('spinnerModalAddInstruction'));
      axios
        .get('api/instructions/' + this.object_type + '/' + this.object_id + '/forLink')
        .then((e) => {
          C(document.getElementById('spinnerModalAddInstruction'));
          this.listInstructions = e.data.instructions;
        })
        .catch((e) => {
          C(document.getElementById('spinnerModalAddInstruction'));
          this.showCenterToast(this.trans.get('__JSON__.instruction.toast.error.getData'), 'e-toast-danger');
          this.closeModal();
        });
    },
  },
};
const ce = { class: 'e-footer-content mt-4' };
function ue(e, t, u, O, s, n) {
  const p = a('headerTemplate');
  const r = a('e-column');
  const y = a('e-columns');
  const f = a('colorValue');
  const _ = a('ejs-grid');
  const b = a('ejs-button');
  const w = a('ejs-dialog');
  c();
  return m('div', null, [
    l(
      w,
      {
        ref: 'modalAddInstruction',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: s.animationSettings,
        showCloseIcon: true,
        close: n.onModalClose,
        width: s.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: d(() => [
          l(p, { title: e.trans.get('__JSON__.instruction.content.selectInstruction') }, null, 8, ['title']),
        ]),
        templateContent: d(() => [
          o('div', null, [
            t[0] || (t[0] = o('div', { id: 'spinnerModalAddInstruction' }, null, -1)),
            o('div', null, [
              l(
                _,
                {
                  dataSource: s.listInstructions,
                  id: 'modalAddInstructionGrid',
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
                  allowSelection: e.gridSettings.allowSelection,
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
                  rowSelecting: n.rowSelectingCheck,
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: s.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  templateOrigin: d(({ data: h }) => [
                    l(
                      f,
                      {
                        colorObjectName: 'origin',
                        data: h,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateType: d(({ data: h }) => [
                    l(
                      f,
                      {
                        colorObjectName: 'type',
                        data: h,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateTypology: d(({ data: h }) => [
                    l(
                      f,
                      {
                        colorObjectName: 'typology',
                        data: h,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateStatus: d(({ data: h }) => [
                    l(
                      f,
                      {
                        colorObjectName: 'status',
                        data: h,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateMaintenanceLevel: d(({ data: h }) => [
                    l(
                      f,
                      {
                        colorObjectName: 'maintenance_level',
                        data: h,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  default: d(() => [
                    l(y, null, {
                      default: d(() => [
                        l(r, {
                          type: 'checkbox',
                          textAlign: 'Center',
                          allowResizing: false,
                          allowReordering: false,
                          allowFiltering: false,
                          showInColumnChooser: false,
                          field: 'checkbox',
                        }),
                        l(
                          r,
                          {
                            field: 'id',
                            isPrimaryKey: true,
                            headerText: e.trans.get('__JSON__.model.useCase.id'),
                            type: 'string',
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        l(
                          r,
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
                        l(
                          r,
                          {
                            field: 'title',
                            headerText: e.trans.get('__JSON__.model.value.title'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'stop',
                            headerText: e.trans.get('__JSON__.model.value.stop'),
                            type: 'boolean',
                            displayAsCheckBox: 'true',
                            filter: e.gridSettings.filterCheck,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'duration',
                            headerText: e.trans.get('__JSON__.model.value.duration'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'verbose_frequency',
                            headerText: e.trans.get('__JSON__.model.value.frequency'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'recommended',
                            headerText: e.trans.get('__JSON__.model.instruction.recommended'),
                            type: 'boolean',
                            displayAsCheckBox: 'true',
                            filter: e.gridSettings.filterCheck,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'verbose_trigger_validation',
                            headerText: e.trans.get('__JSON__.model.value.verbose_trigger_validation'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'max_weight',
                            headerText: e.trans.get('__JSON__.model.value.max_weight'),
                            type: 'number',
                            filter: e.gridSettings.filterExcel,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'origin_name',
                            headerText: e.trans.get('__JSON__.model.value.origin'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                            template: 'templateOrigin',
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'type_name',
                            headerText: e.trans.get('__JSON__.model.value.type'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                            template: 'templateType',
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'typology_name',
                            headerText: e.trans.get('__JSON__.model.value.typology'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                            template: 'templateTypology',
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'status_name',
                            headerText: e.trans.get('__JSON__.model.value.status'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                            template: 'templateStatus',
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        l(
                          r,
                          {
                            field: 'speciality_names',
                            filter: e.gridSettings.filterExcel,
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            headerText: e.trans.get('__JSON__.model.value.speciality'),
                            width: e.gridSettings.extraLargeWidth,
                          },
                          null,
                          8,
                          ['filter', 'sortComparer', 'headerText', 'width'],
                        ),
                        l(
                          r,
                          {
                            field: 'certification_names',
                            filter: e.gridSettings.filterExcel,
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            headerText: e.trans.get('__JSON__.model.value.certification'),
                            width: e.gridSettings.extraLargeWidth,
                          },
                          null,
                          8,
                          ['filter', 'sortComparer', 'headerText', 'width'],
                        ),
                        l(
                          r,
                          {
                            field: 'maintenance_level_name',
                            headerText: e.trans.get('__JSON__.model.value.maintenance_level'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                            template: 'templateMaintenanceLevel',
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
                  'allowSelection',
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
                  'rowSelecting',
                  'searchSettings',
                  'selectionSettings',
                  'showColumnChooser',
                  'toolbar',
                  'toolbarClick',
                ],
              ),
            ]),
            o('div', ce, [
              o('span', null, [
                l(
                  b,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: n.closeModal,
                  },
                  {
                    default: d(() => [S(k(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                l(
                  b,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: n.selectInstruction,
                  },
                  {
                    default: d(() => [S(k(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
      ['animationSettings', 'close', 'width'],
    ),
  ]);
}
const me = T(de, [['render', ue]]);
const ge = {
  components: {
    ModalDynamicGrid: le,
    headerTemplate: I,
  },
  props: { titleModal: { required: false } },
  data() {
    return {
      width: '325px',
      animationSettings: { effect: 'None' },
      showTaskObjectModal: false,
      title: '',
      urlModal: null,
    };
  },
  computed: {
    taskables() {
      let e = [];
      if (this.can('show', 'assets')) {
        e.push('asset');
      }
      if (this.can('show', 'docsheets')) {
        e.push('docsheet');
      }
      if (this.can('show', 'events')) {
        e.push('event');
      }
      if (this.can('show', 'files')) {
        e.push('file');
      }
      if (this.can('show', 'locations')) {
        e.push('location');
      }
      if (this.can('show', 'tags')) {
        e.push('tag');
      }
      if (this.can('show', 'tasks')) {
        e.push('task');
      }
      return e;
    },
  },
  mounted() {
    E({ target: document.getElementById('spinnerModalSelectionTaskObject') });
  },
  methods: {
    modalClose() {
      this.$emit('close');
    },
    openTaskObjectModal(e) {
      this.title = this.trans.get('__JSON__.task.content.selectObjectTitle', {
        object: this.trans.get('__JSON__.model.name.' + e),
      });
      this.showTaskObjectModal = true;
      this.urlModal = 'api/dynamicRequests/tasks/object/' + e;
    },
    selectData(e) {
      this.$emit('selectTaskObject', e);
    },
  },
};
const pe = { class: 'container' };
const _e = {
  key: 0,
  class: 'row mt-3',
};
const he = {
  key: 1,
  class: 'row mt-3',
};
const fe = {
  key: 2,
  class: 'row mt-3',
};
const Se = {
  key: 3,
  class: 'row mt-3',
};
const ke = {
  key: 4,
  class: 'row mt-3',
};
const be = {
  key: 5,
  class: 'row mt-3',
};
const ye = {
  key: 6,
  class: 'row mt-3',
};
function we(e, t, u, O, s, n) {
  const p = a('headerTemplate');
  const r = a('ejs-button');
  const y = a('modal-dynamic-grid');
  const f = a('ejs-dialog');
  c();
  return m('div', null, [
    l(
      f,
      {
        ref: 'modalSelectionTaskObject',
        header: 'headerTemplate',
        content: 'templateContent',
        close: n.modalClose,
        animationSettings: s.animationSettings,
        isModal: true,
        showCloseIcon: true,
        allowDragging: true,
        width: s.width,
      },
      {
        headerTemplate: d(() => [
          l(p, { title: this.trans.get('__JSON__.task.selection.header') }, null, 8, ['title']),
        ]),
        templateContent: d(() => [
          o('div', null, [
            o('div', pe, [
              t[8] || (t[8] = o('div', { id: 'spinnerModalSelectionTaskObject' }, null, -1)),
              n.taskables.includes('asset')
                ? (c(),
                  m('div', _e, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-tasks',
                        cssClass: 'e-flat text-start',
                        onClick: t[0] || (t[0] = (_) => n.openTaskObjectModal('assets')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.asset')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
              n.taskables.includes('docsheet')
                ? (c(),
                  m('div', he, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-layer-13-wf',
                        cssClass: 'e-flat text-start',
                        onClick: t[1] || (t[1] = (_) => n.openTaskObjectModal('docsheets')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.docsheet')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
              n.taskables.includes('event')
                ? (c(),
                  m('div', fe, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-thunder-wf',
                        cssClass: 'e-flat text-start',
                        onClick: t[2] || (t[2] = (_) => n.openTaskObjectModal('events')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.event')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
              n.taskables.includes('file')
                ? (c(),
                  m('div', Se, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-document-wf',
                        cssClass: 'e-flat text-start',
                        onClick: t[3] || (t[3] = (_) => n.openTaskObjectModal('files')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.file')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
              n.taskables.includes('location')
                ? (c(),
                  m('div', ke, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-globe-wf-2',
                        cssClass: 'e-flat text-start',
                        onClick: t[4] || (t[4] = (_) => n.openTaskObjectModal('locations')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.location')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
              n.taskables.includes('tag')
                ? (c(),
                  m('div', be, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-box---01',
                        cssClass: 'e-flat text-start',
                        onClick: t[5] || (t[5] = (_) => n.openTaskObjectModal('tags')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.tag')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
              n.taskables.includes('task')
                ? (c(),
                  m('div', ye, [
                    l(
                      r,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-tasks',
                        cssClass: 'e-flat text-start',
                        onClick: t[6] || (t[6] = (_) => n.openTaskObjectModal('tasks')),
                      },
                      {
                        default: d(() => [S(k(e.trans.get('__JSON__.task.selection.task')), 1)]),
                        _: 1,
                      },
                    ),
                  ]))
                : g('', true),
            ]),
          ]),
          s.showTaskObjectModal
            ? (c(),
              M(
                y,
                {
                  key: 0,
                  onClose: t[7] || (t[7] = (_) => (s.showTaskObjectModal = false)),
                  onSelectData: n.selectData,
                  gridUrl: s.urlModal,
                  numberMax: 1,
                  header: s.title,
                },
                null,
                8,
                ['onSelectData', 'gridUrl', 'header'],
              ))
            : g('', true),
        ]),
        _: 1,
      },
      8,
      ['close', 'animationSettings', 'width'],
    ),
  ]);
}
const Ce = T(ge, [['render', we]]);
const ve = {
  props: { data: { required: true } },
  methods: {
    callUnlink() {
      v.$emit('unlinkAgentGridSelection', this.data.id);
    },
  },
};
const je = { class: 'gridActions' };
const Te = { class: 'd-flex' };
const Oe = { class: 'me-2' };
function Me(e, t, u, O, s, n) {
  const p = a('ejs-tooltip');
  c();
  return m('div', je, [
    o('div', Te, [
      o('div', Oe, [
        l(
          p,
          {
            content: e.trans.get('__JSON__.model.action.unlink'),
            position: 'TopCenter',
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: d(() => [
              o('span', {
                class: 'sf-icon-unlink_01 iconeGrid',
                onClick: t[0] || (t[0] = (...r) => n.callUnlink && n.callUnlink(...r)),
                style: { cursor: 'pointer' },
              }),
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
const Ne = T(ve, [['render', Me]]);
const De = {
  mixins: [F],
  components: {
    ModalSelectionAgent: R,
    templateActions: Ne,
  },
  props: {
    agentPreselected: {
      required: false,
      default: function () {
        return [];
      },
    },
    agentables: {
      required: false,
      default: function () {
        return ['company', 'service', 'user'];
      },
    },
    objectType: { required: true },
    numberSelectMax: {
      required: false,
      default: function () {
        return 500;
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.gridSelectionAgent'),
      listAgentSelected: [],
      showModal: false,
      toolbar: [
        'Search',
        {
          id: 'addAgentToGrid',
          prefixIcon: 'sf-icon-addition- plus',
          tooltipText: this.trans.get('__JSON__.agent.content.addAgent'),
        },
        {
          id: 'descriptionToolbarAgent',
          text: translate.get('__JSON__.main.grid.toolbar.agents'),
          disabled: true,
        },
      ],
    };
  },
  methods: {
    unlink(e) {
      this.listAgentSelected = this.listAgentSelected.filter((t) => t.id !== e);
    },
    agentSelection(e) {
      this.listAgentSelected.push(...e);
      this.listAgentSelected = [...new Set(this.listAgentSelected)];
    },
    toolbarClick(e) {
      if (e.item.id === 'addAgentToGrid') {
        this.showModal = true;
      }
    },
    massUnlink() {
      let e = this.$refs.grid.getSelectedRecords().map((t) => t.id);
      this.listAgentSelected = this.listAgentSelected.filter((t) => !e.includes(t.id));
    },
  },
  watch: {
    listAgentSelected(e) {
      this.$emit('changeSelection', e);
    },
  },
  mounted() {
    this.agentSelection(this.agentPreselected);
    v.$on('unlinkAgentGridSelection', this.unlink);
    v.$on('unlinkMassAgentModalGridSelection', this.massUnlink);
  },
  beforeUnmount() {
    v.$off('unlinkAgentGridSelection', this.unlink);
    v.$off('unlinkMassAgentModalGridSelection', this.massUnlink);
  },
};
function Je(e, t, u, O, s, n) {
  const p = a('e-column');
  const r = a('e-columns');
  const y = a('template-actions');
  const f = a('ejs-grid');
  const _ = a('modal-selection-agent');
  c();
  return m('div', null, [
    l(
      f,
      {
        dataSource: s.listAgentSelected,
        id: 'GridSelectionAgent',
        enablePersistence: false,
        ref: e.gridSettings.ref,
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
        filterSettings: e.gridSettings.filterSettings,
        height: e.gridSettings.height,
        pageSettings: e.gridSettings.pageSettings,
        rowDragStart: e.rowDragStart,
        rowDropSettings: e.gridSettings.rowDropSettings,
        rowHeight: e.gridSettings.rowHeight,
        rowSelecting: e.rowSelecting,
        searchSettings: e.gridSettings.searchSettings,
        selectionSettings: e.gridSettings.selectionSettings,
        showColumnChooser: e.gridSettings.showColumnChooser,
        toolbar: s.toolbar,
        toolbarClick: n.toolbarClick,
      },
      {
        templateHeader: d(() => [...(t[1] || (t[1] = []))]),
        templateActions: d(({ data: b }) => [l(y, { data: b }, null, 8, ['data'])]),
        templateIcon: d(({ data: b }) => [o('span', { class: D(b.node_icon) }, null, 2)]),
        default: d(() => [
          l(r, null, {
            default: d(() => [
              l(
                p,
                {
                  field: 'actions',
                  headerTemplate: 'templateHeader',
                  template: 'templateActions',
                  allowResizing: false,
                  allowReordering: false,
                  allowFiltering: false,
                  allowSorting: false,
                  showInColumnChooser: false,
                  lockColumn: true,
                  textAlign: 'Center',
                  clipMode: 'Clip',
                  width: e.gridSettings.smallWidth,
                },
                null,
                8,
                ['width'],
              ),
              l(
                p,
                {
                  field: 'checkbox',
                  type: 'checkbox',
                  textAlign: 'Center',
                  allowResizing: false,
                  allowReordering: false,
                  lockColumn: true,
                  allowFiltering: false,
                  showInColumnChooser: false,
                  width: e.gridSettings.smallWidth,
                },
                null,
                8,
                ['width'],
              ),
              l(
                p,
                {
                  template: 'templateIcon',
                  allowResizing: false,
                  allowFiltering: false,
                  allowSorting: false,
                  showInColumnChooser: false,
                  clipMode: 'Clip',
                  field: 'node_icon',
                  textAlign: 'Center',
                  headerText: '',
                  width: e.gridSettings.smallWidth,
                },
                null,
                8,
                ['width'],
              ),
              l(
                p,
                {
                  field: 'id',
                  headerText: e.trans.get('__JSON__.model.value.id'),
                  isPrimaryKey: true,
                  type: 'number',
                  width: e.gridSettings.smallWidth,
                },
                null,
                8,
                ['headerText', 'width'],
              ),
              l(
                p,
                {
                  field: 'name',
                  headerText: e.trans.get('__JSON__.model.value.name'),
                  type: 'string',
                  width: e.gridSettings.extraLargeWidth,
                  filter: e.gridSettings.filterExcel,
                  sortComparer: e.sortComparerNaturalOrder,
                },
                null,
                8,
                ['headerText', 'width', 'filter', 'sortComparer'],
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
        'rowDragStart',
        'rowDropSettings',
        'rowHeight',
        'rowSelecting',
        'searchSettings',
        'selectionSettings',
        'showColumnChooser',
        'toolbar',
        'toolbarClick',
      ],
    ),
    s.showModal
      ? (c(),
        M(
          _,
          {
            key: 0,
            onClose: t[0] || (t[0] = (b) => (s.showModal = false)),
            onAgentSelected: n.agentSelection,
            agentSelected: s.listAgentSelected,
            agentables: u.agentables,
            objectType: u.objectType,
            numberSelectMax: u.numberSelectMax,
          },
          null,
          8,
          ['onAgentSelected', 'agentSelected', 'agentables', 'objectType', 'numberSelectMax'],
        ))
      : g('', true),
  ]);
}
const Ae = T(De, [['render', Je]]);
const Ee = {
  mixins: [Q, P, Z, ee, se, oe],
  components: {
    ModalAddInstructions: me,
    ModalSelectionTaskObject: Ce,
    ProjectSelector: te,
    GridSelectionFiles: $,
    DocModuleEditor: z(
      K(() =>
        X(
          () => import('./BxIu9x40.js'),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
          ]),
        ),
      ),
    ),
    ModalSelectionAgent: R,
    GridSelectionAgents: Ae,
    recurrenceEditor: re,
    headerTemplate: I,
  },
  props: {
    object: {
      required: false,
      default() {
        return null;
      },
    },
    date: {
      required: false,
      default() {
        return null;
      },
    },
    emitData: {
      required: false,
      default() {
        return false;
      },
    },
    projectId: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    let e = new Date();
    let t = {
      start: '08:00',
      end: '17:00',
    };
    let u = this.mainStore.schedulerParameters;
    if (this.mainStore.schedulerParameters) {
      t.start = this.mainStore.schedulerParameters.workHours.start;
      t.end = this.mainStore.schedulerParameters.workHours.end;
    }
    e.setHours(...t.start.split(':'), 0, 0);
    return {
      task: {
        code: this.object && this.object.api_prefix === 'tasks' ? this.trans.get('__JSON__.task.content.autoCode') : '',
        designation: '',
        description: '',
        start_date: null,
        estimated_end_date: null,
        real_end_date: null,
        responsible_id: null,
        responsible_type: null,
        object_id: this.object ? this.object.id : null,
        object_type: this.object ? this.object.model : null,
        agents: [],
        type_id: null,
        status_id: null,
        priority_id: null,
        conformity_id: null,
        typology_id: null,
        maintenance_level_id: null,
        is_all_day: false,
        progress: null,
        project: this.object ? (this.object.project ?? null) : null,
        instruction_id: null,
        instruction_name: null,
      },
      responsible: {
        name: null,
        type: null,
        class: null,
        node_icon: null,
        id: null,
      },
      showModal: false,
      listPriority: [],
      listConformity: [],
      listTypology: [],
      listMaintenanceLevel: [],
      listStatus: [],
      listType: [],
      listSpeciality: [],
      listCertification: [],
      listFilesSelected: [],
      fieldsValues: {
        text: 'name',
        value: 'id',
      },
      width: '1000px',
      getDataWysiwyg: false,
      startDate: this.date ? this.date.start_date : e,
      estEndDate: this.date ? this.date.estimated_end_date : new Date(e.getTime() + 1800000),
      realEndDate: null,
      taskObject: {
        name: null,
        type: null,
        class: null,
        node_icon: null,
        id: null,
      },
      showModalTaskObject: false,
      showModalAddInstruction: false,
    };
  },
  computed: {
    parseContent() {
      return this.task.designation;
    },
    supplementaryData() {
      return this.task.object_type && this.task.object_id
        ? {
            type: 'docmod',
            for: 'tasks',
            limitedTo: {
              object_type: this.task.object_type,
              object_id: this.task.object_id,
            },
          }
        : {
            type: 'docmod',
            for: 'tasks',
          };
    },
  },
  methods: {
    openSelectInstruction() {
      if (!this.task.instruction_id || !this.task.instruction_name) {
        this.showModalAddInstruction = true;
      }
    },
    removeInstruction() {
      this.task.instruction_id = null;
      this.task.instruction_name = null;
    },
    instructionsSelected(e) {
      if (e.length) {
        this.task.instruction_id = e[0].id;
        this.task.instruction_name = e[0].node_designation;
      }
    },
    openSelectTaskObject() {
      if (!this.taskObject || (this.taskObject && !this.taskObject.id)) {
        this.showModalTaskObject = true;
      }
    },
    clearTaskObject() {
      this.taskObject = {
        name: null,
        type: null,
        class: null,
        node_icon: null,
        api_prefix: null,
        id: null,
      };
      this.task.object_type = null;
      this.task.object_id = null;
    },
    taskObjectSelection(e) {
      if (e.length) {
        this.taskObject = e[0];
        this.showModalTaskObject = false;
        this.task.object_type = this.taskObject.model;
        this.task.object_id = this.taskObject.id;
        if (this.taskObject.api_prefix === 'tasks') {
          this.task.code = null;
        }
      }
    },
    openSelectResponsible() {
      if (!this.responsible || (this.responsible && !this.responsible.id)) {
        this.showModal = true;
      }
    },
    clearResponsible() {
      this.responsible = {
        name: null,
        type: null,
        class: null,
        node_icon: null,
        id: null,
      };
    },
    responsibleSelection(e) {
      if (e.length) {
        this.responsible = e[0];
      }
    },
    changeSelection(e) {
      this.task.agents = e;
    },
    changeSelectionFiles(e) {
      this.listFilesSelected = e;
    },
    saveCreate() {
      this.startDate && this.startDate instanceof Date
        ? (this.task.start_date = this.startDate.getTime())
        : (this.task.start_date = null);
      this.estEndDate && this.estEndDate instanceof Date
        ? (this.task.estimated_end_date = this.estEndDate.getTime())
        : (this.task.estimated_end_date = null);
      this.realEndDate && this.realEndDate instanceof Date
        ? (this.task.real_end_date = this.realEndDate.getTime())
        : (this.task.real_end_date = null);
      this.responsible.id && this.responsible.type
        ? ((this.task.responsible_id = this.responsible.id), (this.task.responsible_type = this.responsible.class))
        : ((this.task.responsible_id = null), (this.task.responsible_type = null));
      if (
        !this.validateStringLength(this.task.designation, this.trans.get('__JSON__.model.value.designation')) ||
        !this.validateStringLength(
          this.task.description,
          this.trans.get('__JSON__.model.value.description'),
          0,
          4294967295,
        )
      )
        return;
      if (
        (this.task.estimated_end_date <= this.task.start_date || this.task.realEndDate <= this.task.start_date) &&
        this.task.start_date &&
        !this.task.estimated_end_date
      ) {
        this.showCenterToast(this.trans.get('__JSON__.task.toast.error.enterValidDateInterval'), 'e-toast-danger');
        return;
      }
      if (!this.task.responsible_id || !this.task.responsible_type) {
        this.showCenterToast(this.trans.get('__JSON__.task.toast.error.enterResponsible'), 'e-toast-danger');
        return;
      }
      if (!this.task.type_id) {
        this.showCenterToast(this.trans.get('__JSON__.task.toast.error.selectType'), 'e-toast-danger');
        return;
      }
      if (!this.task.status_id) {
        this.showCenterToast(this.trans.get('__JSON__.task.toast.error.selectStatus'), 'e-toast-danger');
        return;
      }
      if (!this.task.priority_id) {
        this.showCenterToast(this.trans.get('__JSON__.task.toast.error.selectPriority'), 'e-toast-danger');
        return;
      }
      if (this.progress && this.progress > 100) {
        this.progress = 100;
      }
      if (this.progress && this.progress < 0) {
        this.progress = 0;
      }
      let e = { ...this.task };
      e.filesId = this.listFilesSelected.map((t) => t.id);
      if (this.emitData) {
        this.$emit('taskData', e);
        return;
      }
      if (!this.blockRequest) {
        this.blockRequest = true;
        J(document.getElementById('spinnerModalAddTask'));
        axios
          .post('api/tasks', e)
          .then((t) => {
            this.blockRequest = false;
            C(document.getElementById('spinnerModalAddTask'));
            if (t.status === 201) {
              v.$emit('addObjectGrid', {
                object: t.data.main.task,
                type: 'tasks',
              });
              v.$emit('addTaskPanel', t.data.main.task);
              this.$emit('taskAdded', t.data.main.task);
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
              this.openNewObject(t.data.main.task.id, 'tasks');
              this.closeModal();
            }
          })
          .catch((t) => {
            this.blockRequest = false;
            C(document.getElementById('spinnerModalAddTask'));
            console.error(t);
          });
      }
    },
    getHtmlFromWysig() {
      this.getDataWysiwyg = true;
    },
    returnHtmlFromWysig(e) {
      this.task.description = e;
      this.getDataWysiwyg = false;
      this.saveCreate();
    },
    updateProjectsSelected(e) {
      this.task.project = e.length > 0 ? e[0] : null;
    },
  },
  mounted() {
    if (this.object) {
      this.taskObject = this.object;
    }
    E({ target: document.getElementById('spinnerModalAddTask') });
    J(document.getElementById('spinnerModalAddTask'));
    axios
      .get('api/tasks/createData')
      .then((e) => {
        C(document.getElementById('spinnerModalAddTask'));
        this.listStatus = e.data.status.filter((t) => t.code != 'archived');
        this.listType = e.data.type;
        this.listTypology = e.data.typology;
        this.listMaintenanceLevel = e.data.maintenanceLevel;
        this.listPriority = e.data.priority;
        this.listConformity = e.data.conformity;
        this.listSpeciality = e.data.speciality;
        this.listCertification = e.data.certification;
      })
      .catch((e) => {
        C(document.getElementById('spinnerModalAddTask'));
        console.error(e);
      });
  },
  watch: {
    'responsible.name': {
      handler(e) {
        if (!e) {
          let t = this;
          setTimeout(() => {
            t.responsible = {
              name: null,
              type: null,
              class: null,
              node_icon: null,
              id: null,
            };
          }, 200);
        }
      },
    },
  },
};
const Ie = { class: 'container' };
const Ve = { class: 'row' };
const Pe = { class: 'col-md-3' };
const Re = ['placeholder', 'disabled'];
const Fe = { class: 'col-md-3' };
const Be = ['placeholder'];
const qe = { class: 'col-md-3' };
const Ue = {
  class: 'e-input-group',
  style: { border: '0px' },
};
const We = { class: 'e-input-group e-control-wrapper e-valid-input' };
const He = ['placeholder', 'value'];
const Le = {
  key: 0,
  class: 'col-md-3',
};
const xe = {
  class: 'e-input-group',
  style: { border: '0px' },
};
const Ge = { class: 'e-input-in-wrap' };
const ze = {
  key: 1,
  class: 'col-md-3',
};
const Ke = {
  class: 'e-input-group',
  style: { border: '0px' },
};
const Xe = { class: 'e-input-group e-control-wrapper e-valid-input' };
const Ye = ['placeholder', 'value'];
const Qe = { class: 'row mt-1' };
const Ze = {
  class: 'col-md-3',
  style: {
    'align-items': 'center',
    display: 'flex',
  },
};
const $e = { class: 'col-md-3' };
const et = { class: 'col-md-3' };
const tt = {
  key: 0,
  class: 'col-md-3',
};
const st = { class: 'row mt-1' };
const lt = { class: 'col-md-3' };
const ot = { class: 'col-md-3' };
const nt = { class: 'col-md-3' };
const it = { class: 'col-md-3' };
const at = { class: 'row mt-1' };
const rt = { class: 'col-md-3' };
const dt = { class: 'col-md-3' };
const ct = { class: 'col-md-3' };
const ut = { class: 'col-md-3' };
const mt = { class: 'row mt-1' };
const gt = { class: 'col-md-3' };
const pt = ['placeholder'];
const _t = { class: 'col-md-3 d-flex' };
const ht = { class: 'col-md-3' };
const ft = { class: 'row mt-1' };
const St = { class: 'col-md-12' };
const kt = { class: 'row mt-1' };
const bt = { class: 'col-md-12' };
const yt = { class: 'row mt-1' };
const wt = { class: 'col-md-12' };
const Ct = { class: 'e-footer-content mt-1' };
function vt(e, t, u, O, s, n) {
  const p = a('headerTemplate');
  const r = a('ejs-tooltip');
  const y = a('ejs-textbox');
  const f = a('ejs-checkbox');
  const _ = a('ejs-datetimepicker');
  const b = a('ejs-datepicker');
  const w = a('qb-dropdownlist');
  const h = a('ejs-multiselect');
  const B = a('project-selector');
  const q = a('doc-module-editor');
  const U = a('grid-selection-agents');
  const W = a('grid-selection-files');
  const V = a('ejs-button');
  const H = a('modal-selection-agent');
  const L = a('modal-selection-task-object');
  const x = a('modal-add-instructions');
  const G = a('ejs-dialog');
  c();
  return m('div', null, [
    l(
      G,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: s.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        close: e.closeModal,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: d(() => [l(p, { title: e.trans.get('__JSON__.task.content.addTask') }, null, 8, ['title'])]),
        templateContent: d(() => [
          o('div', null, [
            o('div', Ie, [
              t[25] || (t[25] = o('div', { id: 'spinnerModalAddTask' }, null, -1)),
              o('div', Ve, [
                o('div', Pe, [
                  j(
                    o(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[0] || (t[0] = (i) => (s.task.code = i)),
                        placeholder: e.trans.get('__JSON__.model.value.code'),
                        disabled: s.taskObject ? s.taskObject.api_prefix === 'tasks' : false,
                      },
                      null,
                      8,
                      Re,
                    ),
                    [[A, s.task.code]],
                  ),
                ]),
                o('div', Fe, [
                  j(
                    o(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[1] || (t[1] = (i) => (s.task.designation = i)),
                        placeholder: e.trans.get('__JSON__.model.value.designation'),
                      },
                      null,
                      8,
                      Be,
                    ),
                    [[A, s.task.designation]],
                  ),
                ]),
                o('div', qe, [
                  l(
                    r,
                    {
                      content: s.responsible.name,
                      position: 'TopCenter',
                      animation: e.default_SF_Props.animationTooltip,
                    },
                    {
                      default: d(() => [
                        o('div', Ue, [
                          s.responsible.node_icon
                            ? (c(),
                              m(
                                'span',
                                {
                                  key: 0,
                                  class: D(['e-input-group-icon', s.responsible.node_icon]),
                                },
                                null,
                                2,
                              ))
                            : g('', true),
                          o('div', We, [
                            o(
                              'input',
                              {
                                onClick:
                                  t[2] || (t[2] = (...i) => n.openSelectResponsible && n.openSelectResponsible(...i)),
                                class: 'e-control e-textbox e-lib e-input',
                                type: 'text',
                                readonly: true,
                                placeholder: e.trans.get('__JSON__.task.content.selectResponsible'),
                                value: s.responsible.name,
                              },
                              null,
                              8,
                              He,
                            ),
                            s.responsible.name
                              ? (c(),
                                m('span', {
                                  key: 0,
                                  class: 'e-clear-icon',
                                  role: 'button',
                                  onClick: t[3] || (t[3] = (...i) => n.clearResponsible && n.clearResponsible(...i)),
                                }))
                              : g('', true),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ['content', 'animation'],
                  ),
                ]),
                u.object
                  ? (c(),
                    m('div', Le, [
                      l(
                        r,
                        {
                          content: u.object.name,
                          position: 'TopCenter',
                          animation: e.default_SF_Props.animationTooltip,
                        },
                        {
                          default: d(() => [
                            o('div', xe, [
                              u.object.node_icon
                                ? (c(),
                                  m(
                                    'span',
                                    {
                                      key: 0,
                                      class: D(['e-input-group-icon', u.object.node_icon]),
                                    },
                                    null,
                                    2,
                                  ))
                                : g('', true),
                              o('div', Ge, [
                                l(
                                  y,
                                  {
                                    floatLabelType: 'Never',
                                    showClearButton: false,
                                    placeholder: e.trans.get('__JSON__.task.content.selectObject'),
                                    modelValue: u.object.name,
                                    'onUpdate:modelValue': t[4] || (t[4] = (i) => (u.object.name = i)),
                                    readonly: true,
                                  },
                                  null,
                                  8,
                                  ['placeholder', 'modelValue'],
                                ),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ['content', 'animation'],
                      ),
                    ]))
                  : (c(),
                    m('div', ze, [
                      l(
                        r,
                        {
                          content: s.taskObject.name,
                          position: 'TopCenter',
                          animation: e.default_SF_Props.animationTooltip,
                        },
                        {
                          default: d(() => [
                            o('div', Ke, [
                              s.taskObject.node_icon
                                ? (c(),
                                  m(
                                    'span',
                                    {
                                      key: 0,
                                      class: D(['e-input-group-icon', s.taskObject.node_icon]),
                                    },
                                    null,
                                    2,
                                  ))
                                : g('', true),
                              o('div', Xe, [
                                o(
                                  'input',
                                  {
                                    onClick:
                                      t[5] || (t[5] = (...i) => n.openSelectTaskObject && n.openSelectTaskObject(...i)),
                                    class: 'e-control e-textbox e-lib e-input',
                                    type: 'text',
                                    readonly: true,
                                    placeholder: e.trans.get('__JSON__.task.content.selectObject'),
                                    value: s.taskObject.name,
                                  },
                                  null,
                                  8,
                                  Ye,
                                ),
                                s.taskObject.name
                                  ? (c(),
                                    m('span', {
                                      key: 0,
                                      class: 'e-clear-icon',
                                      role: 'button',
                                      onClick: t[6] || (t[6] = (...i) => n.clearTaskObject && n.clearTaskObject(...i)),
                                    }))
                                  : g('', true),
                              ]),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ['content', 'animation'],
                      ),
                    ])),
              ]),
              o('div', Qe, [
                o('div', Ze, [
                  l(
                    f,
                    {
                      label: e.trans.get('__JSON__.task.value.isAllDay'),
                      modelValue: s.task.is_all_day,
                      'onUpdate:modelValue': t[7] || (t[7] = (i) => (s.task.is_all_day = i)),
                      checked: s.task.is_all_day,
                    },
                    null,
                    8,
                    ['label', 'modelValue', 'checked'],
                  ),
                ]),
                o('div', $e, [
                  j(
                    o(
                      'div',
                      null,
                      [
                        l(
                          _,
                          {
                            modelValue: s.startDate,
                            'onUpdate:modelValue': t[8] || (t[8] = (i) => (s.startDate = i)),
                            placeholder: e.trans.get('__JSON__.task.content.selectStartDate'),
                            enableMask: true,
                            maskPlaceholder: e.maskPlaceholderValue,
                            timeFormat: e.userTimeFormatSyncfusion(),
                            showClearButton: true,
                            step: '5',
                            onCleared: t[9] || (t[9] = (i) => (s.startDate = null)),
                            format: e.userDateTimeFormatSyncfusion(),
                          },
                          null,
                          8,
                          ['modelValue', 'placeholder', 'maskPlaceholder', 'timeFormat', 'format'],
                        ),
                      ],
                      512,
                    ),
                    [[N, !s.task.is_all_day]],
                  ),
                  j(
                    o(
                      'div',
                      null,
                      [
                        l(
                          b,
                          {
                            modelValue: s.startDate,
                            'onUpdate:modelValue': t[10] || (t[10] = (i) => (s.startDate = i)),
                            placeholder: e.trans.get('__JSON__.task.content.selectStartDate'),
                            enableMask: true,
                            maskPlaceholder: e.maskPlaceholderValue,
                            showClearButton: true,
                            onCleared: t[11] || (t[11] = (i) => (s.startDate = null)),
                            format: e.userDateFormatSyncfusion(),
                          },
                          null,
                          8,
                          ['modelValue', 'placeholder', 'maskPlaceholder', 'format'],
                        ),
                      ],
                      512,
                    ),
                    [[N, s.task.is_all_day]],
                  ),
                ]),
                o('div', et, [
                  j(
                    o(
                      'div',
                      null,
                      [
                        l(
                          _,
                          {
                            modelValue: s.estEndDate,
                            'onUpdate:modelValue': t[12] || (t[12] = (i) => (s.estEndDate = i)),
                            placeholder: e.trans.get('__JSON__.task.content.selectEstimatedEndDate'),
                            enableMask: true,
                            maskPlaceholder: e.maskPlaceholderValue,
                            timeFormat: e.userTimeFormatSyncfusion(),
                            showClearButton: true,
                            step: '5',
                            onCleared: t[13] || (t[13] = (i) => (s.estEndDate = null)),
                            format: e.userDateTimeFormatSyncfusion(),
                          },
                          null,
                          8,
                          ['modelValue', 'placeholder', 'maskPlaceholder', 'timeFormat', 'format'],
                        ),
                      ],
                      512,
                    ),
                    [[N, !s.task.is_all_day]],
                  ),
                  j(
                    o(
                      'div',
                      null,
                      [
                        l(
                          b,
                          {
                            modelValue: s.estEndDate,
                            'onUpdate:modelValue': t[14] || (t[14] = (i) => (s.estEndDate = i)),
                            placeholder: e.trans.get('__JSON__.task.content.selectEstimatedEndDate'),
                            enableMask: true,
                            maskPlaceholder: e.maskPlaceholderValue,
                            showClearButton: true,
                            onCleared: t[15] || (t[15] = (i) => (s.estEndDate = null)),
                            format: e.userDateFormatSyncfusion(),
                          },
                          null,
                          8,
                          ['modelValue', 'placeholder', 'maskPlaceholder', 'format'],
                        ),
                      ],
                      512,
                    ),
                    [[N, s.task.is_all_day]],
                  ),
                ]),
                s.task.recurrence_rule
                  ? g('', true)
                  : (c(),
                    m('div', tt, [
                      l(
                        _,
                        {
                          modelValue: s.realEndDate,
                          'onUpdate:modelValue': t[16] || (t[16] = (i) => (s.realEndDate = i)),
                          placeholder: e.trans.get('__JSON__.task.content.selectRealEndDate'),
                          enableMask: true,
                          maskPlaceholder: e.maskPlaceholderValue,
                          timeFormat: e.userTimeFormatSyncfusion(),
                          step: '5',
                          onCleared: t[17] || (t[17] = (i) => (s.realEndDate = null)),
                          format: e.userDateTimeFormatSyncfusion(),
                        },
                        null,
                        8,
                        ['modelValue', 'placeholder', 'maskPlaceholder', 'timeFormat', 'format'],
                      ),
                    ])),
              ]),
              o('div', st, [
                o('div', lt, [
                  l(
                    w,
                    {
                      dataSource: s.listType,
                      vModel: s.task.type_id,
                      modelToUpdate: 'task.type_id',
                      placeholder: e.trans.get('__JSON__.task.value.type'),
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                o('div', ot, [
                  l(
                    w,
                    {
                      dataSource: s.listStatus,
                      vModel: s.task.status_id,
                      modelToUpdate: 'task.status_id',
                      placeholder: e.trans.get('__JSON__.task.value.status'),
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                o('div', nt, [
                  l(
                    w,
                    {
                      dataSource: s.listPriority,
                      vModel: s.task.priority_id,
                      modelToUpdate: 'task.priority_id',
                      placeholder: e.trans.get('__JSON__.task.value.priority'),
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                o('div', it, [
                  l(
                    w,
                    {
                      dataSource: s.listConformity,
                      vModel: s.task.conformity_id,
                      modelToUpdate: 'task.conformity_id',
                      placeholder: e.trans.get('__JSON__.task.value.conformity'),
                      select: e.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              o('div', at, [
                o('div', rt, [
                  l(
                    w,
                    {
                      dataSource: s.listTypology,
                      vModel: s.task.typology_id,
                      modelToUpdate: 'task.typology_id',
                      placeholder: e.trans.get('__JSON__.task.value.typology'),
                      select: e.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                o('div', dt, [
                  l(
                    w,
                    {
                      dataSource: s.listMaintenanceLevel,
                      vModel: s.task.maintenance_level_id,
                      modelToUpdate: 'task.maintenance_level_id',
                      placeholder: e.trans.get('__JSON__.task.value.maintenance_level'),
                      select: e.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                o('div', ct, [
                  l(
                    h,
                    {
                      dataSource: s.listSpeciality,
                      fields: s.fieldsValues,
                      placeholder: e.trans.get('__JSON__.model.value.speciality'),
                      modelValue: s.task.speciality_ids,
                      'onUpdate:modelValue': t[18] || (t[18] = (i) => (s.task.speciality_ids = i)),
                      allowFiltering: true,
                    },
                    null,
                    8,
                    ['dataSource', 'fields', 'placeholder', 'modelValue'],
                  ),
                ]),
                o('div', ut, [
                  l(
                    h,
                    {
                      dataSource: s.listCertification,
                      fields: s.fieldsValues,
                      placeholder: e.trans.get('__JSON__.model.value.certification'),
                      modelValue: s.task.certification_ids,
                      'onUpdate:modelValue': t[19] || (t[19] = (i) => (s.task.certification_ids = i)),
                      allowFiltering: true,
                    },
                    null,
                    8,
                    ['dataSource', 'fields', 'placeholder', 'modelValue'],
                  ),
                ]),
              ]),
              o('div', mt, [
                o('div', gt, [
                  j(
                    o(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        max: '100',
                        'onUpdate:modelValue': t[20] || (t[20] = (i) => (s.task.progress = i)),
                        placeholder: e.trans.get('__JSON__.model.task.progress'),
                      },
                      null,
                      8,
                      pt,
                    ),
                    [[A, s.task.progress]],
                  ),
                ]),
                o('div', _t, [
                  l(
                    y,
                    {
                      onClick: n.openSelectInstruction,
                      floatLabelType: 'Never',
                      showClearButton: false,
                      value: s.task.instruction_name,
                      placeholder: e.trans.get('__JSON__.instruction.content.selectInstruction'),
                      readonly: true,
                    },
                    null,
                    8,
                    ['onClick', 'value', 'placeholder'],
                  ),
                  s.task.instruction_id && s.task.instruction_name
                    ? (c(),
                      m('span', {
                        key: 0,
                        class: 'sf-icon-cross-close',
                        onClick:
                          t[21] ||
                          (t[21] = Y((...i) => n.removeInstruction && n.removeInstruction(...i), ['stop', 'prevent'])),
                        style: {
                          'font-size': '15px',
                          cursor: 'pointer',
                          display: 'flex',
                          'align-items': 'center',
                        },
                      }))
                    : g('', true),
                ]),
                o('div', ht, [
                  l(
                    B,
                    {
                      'project-limit': 1,
                      objectType: 'tasks',
                      objectId: u.projectId ?? 'all',
                      'direct-update': false,
                      onProjectSelected: n.updateProjectsSelected,
                      selectIfUnique: true,
                      leftPanel: false,
                    },
                    null,
                    8,
                    ['objectId', 'onProjectSelected'],
                  ),
                ]),
              ]),
              o('div', ft, [
                o('div', St, [
                  l(
                    q,
                    {
                      contentText: s.task.description,
                      parseContent: n.parseContent,
                      getContent: s.getDataWysiwyg,
                      'object-data': {
                        id: s.task.object_id,
                        type: s.task.object_type,
                      },
                      'supplementary-data': n.supplementaryData,
                      'height-value': 250,
                      onReturnHtml: n.returnHtmlFromWysig,
                    },
                    null,
                    8,
                    ['contentText', 'parseContent', 'getContent', 'object-data', 'supplementary-data', 'onReturnHtml'],
                  ),
                ]),
              ]),
              o('div', kt, [
                o('div', bt, [
                  l(
                    U,
                    {
                      agentPreselected: s.task.agents,
                      onChangeSelection: n.changeSelection,
                      objectType: 'tasks',
                    },
                    null,
                    8,
                    ['agentPreselected', 'onChangeSelection'],
                  ),
                ]),
              ]),
              o('div', yt, [
                o('div', wt, [
                  l(
                    W,
                    {
                      'object-type': 'tasks',
                      onChangeSelection: n.changeSelectionFiles,
                    },
                    null,
                    8,
                    ['onChangeSelection'],
                  ),
                ]),
              ]),
            ]),
            o('div', Ct, [
              o('span', null, [
                l(
                  V,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: d(() => [S(k(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                l(
                  V,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: n.getHtmlFromWysig,
                  },
                  {
                    default: d(() => [S(k(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
              ]),
            ]),
            s.showModal
              ? (c(),
                M(
                  H,
                  {
                    key: 0,
                    onClose: t[22] || (t[22] = (i) => (s.showModal = false)),
                    onAgentSelected: n.responsibleSelection,
                    agentSelected: [s.responsible],
                    objectType: 'tasks',
                    numberSelectMax: '1',
                  },
                  null,
                  8,
                  ['onAgentSelected', 'agentSelected'],
                ))
              : g('', true),
            s.showModalTaskObject
              ? (c(),
                M(
                  L,
                  {
                    key: 1,
                    onClose: t[23] || (t[23] = (i) => (s.showModalTaskObject = false)),
                    onSelectTaskObject: n.taskObjectSelection,
                    numberSelectMax: '1',
                  },
                  null,
                  8,
                  ['onSelectTaskObject'],
                ))
              : g('', true),
            s.showModalAddInstruction
              ? (c(),
                M(
                  x,
                  {
                    key: 2,
                    onClose: t[24] || (t[24] = (i) => (s.showModalAddInstruction = false)),
                    onInstructionSelected: n.instructionsSelected,
                    return_value: true,
                    numberSelectMax: '1',
                    object_type: 'tasks',
                    object_id: null,
                    return_only_id: false,
                  },
                  null,
                  8,
                  ['onInstructionSelected'],
                ))
              : g('', true),
          ]),
        ]),
        _: 1,
      },
      8,
      ['width', 'animationSettings', 'close', 'visible', 'isModal'],
    ),
  ]);
}
const Ft = T(Ee, [['render', vt]]);
export { Ft as M, re as R, Ce as a, me as b };
