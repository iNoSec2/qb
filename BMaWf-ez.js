import { h as M } from './CKKuZvVl.js';
import {
  k as O,
  p as k,
  s as E,
  i as N,
  _ as y,
  c as _,
  a as t,
  w as r,
  r as l,
  o as S,
  b as a,
  e as u,
  t as p,
  f as T,
  g as b,
} from '../assets/app-BjImoLrr.js';
import { g as A } from './D_eyCAsX.js';
const v = {
  mixins: [O, A],
  props: {
    idSelected: {
      required: false,
      default: function () {
        return [];
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
      listAgent: [],
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
          id: 'selectionToolbarModalAddAgent',
          text: translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }),
          disabled: true,
        },
      ],
      selectionModuleGrid: { persistSelectedData: [] },
      spinnerModal: 'spinnerModalSelectionAgentChild',
      idGrid: 'gridSelectionAgent',
    };
  },
  mounted() {
    if (this.$refs.grid) {
      let e = this.$refs.grid.$el.querySelector('#selectionToolbarModalAddAgent');
      if (e && e.firstElementChild) {
        let i = e.firstElementChild;
        e.firstElementChild.style.color = 'black';
        e.firstElementChild.style['font-size'] = '12px';
        this.selectionModuleGrid = this.$refs.grid.ej2Instances.selectionModule;
      }
    }
    k({ target: document.getElementById(this.spinnerModal) });
    E(document.getElementById(this.spinnerModal));
    axios
      .get('api/' + this.selectionType + '/gridAgent')
      .then((e) => {
        N(document.getElementById(this.spinnerModal));
        let i = e.data.filter((n) => !this.idSelected.includes(n.id));
        let o = ['speciality', 'certification'];
        i.forEach((n) => {
          o.forEach((d) => {
            if (n[d + '_names'] && Array.isArray(n[d + '_names'])) {
              n[d + '_names'] = n[d + '_names'].join(' | ');
            }
          });
        });
        this.listAgent = i;
      })
      .catch((e) => {
        N(document.getElementById(this.spinnerModal));
        this.showCenterToast(this.trans.get('__JSON__.agent.toast.error.get'), 'e-toast-danger');
      });
  },
  watch: {
    'selectionModuleGrid.persistSelectedData': {
      deep: true,
      handler(e) {
        let i = this.$refs.grid.$el.querySelector('#selectionToolbarModalAddAgent');
        if (i && i.firstElementChild) {
          let o = i.firstElementChild;
          e
            ? (o.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: e.length }))
            : (o.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }));
        }
      },
    },
  },
  methods: {
    closeModal() {
      this.$refs.modalSelectionAgentChild.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    rowSelectingCheck(e) {
      this.rowSelecting(e);
      if (
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length + 1 >
        this.numberSelectMax - this.idSelected.length
      ) {
        this.numberSelectMax === 1 &&
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length !== this.idSelected.length
          ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
          : ((e.cancel = true),
            this.showCenterToast(
              this.trans.get('__JSON__.agent.toast.error.maxSelection', {
                number: this.numberSelectMax - this.idSelected.length,
              }),
              'e-toast-danger',
            ));
      }
    },
    selectAgent() {
      let i = [...this.$refs.grid.getSelectedRecords()];
      if (i.length) {
        this.checkAgentSelected(i);
      }
    },
    checkAgentSelected(e) {
      let i = this.numberSelectMax - this.idSelected.length;
      switch (this.selectionType) {
        case 'companies':
          e = e.map((o) => {
            let n = {};
            n.name = o.designation;
            n.type = 'companies';
            n.class = o.model;
            n.node_icon = o.node_icon;
            n.id = o.id;
            return n;
          });
          break;
        case 'services':
          e = e.map((o) => {
            let n = {};
            n.name = o.designation;
            n.type = 'services';
            n.class = o.model;
            n.node_icon = o.node_icon;
            n.id = o.id;
            return n;
          });
          break;
        case 'users':
          e = e.map((o) => {
            let n = {};
            n.name = o.lastname + ' ' + o.firstname;
            n.type = 'users';
            n.class = o.model;
            n.node_icon = o.node_icon;
            n.id = o.id;
            return n;
          });
          break;
      }
      e.length <= i
        ? this.$emit('agentSelected', e)
        : this.showCenterToast(
            this.trans.get('__JSON__.agent.toast.error.maxSelection', { number: i }),
            'e-toast-danger',
          );
    },
  },
};
const J = {
  mixins: [v],
  components: { headerTemplate: M },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.selectionCompany'),
      selectionType: 'companies',
    };
  },
};
const j = ['id'];
const D = { class: 'e-footer-content mt-4' };
function B(e, i, o, n, d, c) {
  const h = l('headerTemplate');
  const s = l('e-column');
  const f = l('e-columns');
  const w = l('ejs-grid');
  const m = l('ejs-button');
  const C = l('ejs-dialog');
  S();
  return _('div', null, [
    t(
      C,
      {
        ref: 'modalSelectionAgentChild',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: e.animationSettings,
        showCloseIcon: true,
        close: e.onModalClose,
        width: e.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: r(() => [
          t(h, { title: e.trans.get('__JSON__.agent.content.selectCompany') }, null, 8, ['title']),
        ]),
        templateContent: r(() => [
          a('div', null, [
            a('div', { id: e.spinnerModal }, null, 8, j),
            a('div', null, [
              t(
                w,
                {
                  id: e.idGrid,
                  dataSource: e.listAgent,
                  created: e.onGridCreate,
                  rowSelecting: e.rowSelectingCheck,
                  width: '100%',
                  ref: e.gridSettings.ref,
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
                  filterSettings: e.gridSettings.filterSettings,
                  pageSettings: e.gridSettings.pageSettingsModal,
                  rowDragStart: e.rowDragStart,
                  rowDropSettings: e.gridSettings.rowDropSettings,
                  rowHeight: e.gridSettings.rowHeight,
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: e.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  default: r(() => [
                    t(f, null, {
                      default: r(() => [
                        t(
                          s,
                          {
                            field: 'checkbox',
                            type: 'checkbox',
                            textAlign: 'Center',
                            allowResizing: false,
                            allowReordering: false,
                            allowFiltering: false,
                            showInColumnChooser: false,
                            width: e.gridSettings.smallWidth,
                          },
                          null,
                          8,
                          ['width'],
                        ),
                        t(
                          s,
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
                        t(
                          s,
                          {
                            field: 'code',
                            headerText: e.trans.get('__JSON__.model.value.code'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        t(
                          s,
                          {
                            field: 'designation',
                            headerText: e.trans.get('__JSON__.model.value.designation'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                [
                  'id',
                  'dataSource',
                  'created',
                  'rowSelecting',
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
            a('div', D, [
              a('span', null, [
                t(
                  m,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: r(() => [u(p(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                t(
                  m,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: e.selectAgent,
                  },
                  {
                    default: r(() => [u(p(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const R = y(J, [['render', B]]);
const I = {
  mixins: [v],
  components: { headerTemplate: M },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.selectionServices'),
      selectionType: 'services',
    };
  },
};
const F = ['id'];
const H = { class: 'e-footer-content mt-4' };
function $(e, i, o, n, d, c) {
  const h = l('headerTemplate');
  const s = l('e-column');
  const f = l('e-columns');
  const w = l('ejs-grid');
  const m = l('ejs-button');
  const C = l('ejs-dialog');
  S();
  return _('div', null, [
    t(
      C,
      {
        ref: 'modalSelectionAgentChild',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: e.animationSettings,
        showCloseIcon: true,
        close: e.onModalClose,
        width: e.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: r(() => [
          t(h, { title: e.trans.get('__JSON__.agent.content.selectServices') }, null, 8, ['title']),
        ]),
        templateContent: r(() => [
          a('div', null, [
            a('div', { id: e.spinnerModal }, null, 8, F),
            a('div', null, [
              t(
                w,
                {
                  id: e.idGrid,
                  dataSource: e.listAgent,
                  created: e.onGridCreate,
                  rowSelecting: e.rowSelectingCheck,
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
                  filterSettings: e.gridSettings.filterSettings,
                  pageSettings: e.gridSettings.pageSettingsModal,
                  rowDragStart: e.rowDragStart,
                  rowDropSettings: e.gridSettings.rowDropSettings,
                  rowHeight: e.gridSettings.rowHeight,
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: e.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  default: r(() => [
                    t(f, null, {
                      default: r(() => [
                        t(
                          s,
                          {
                            field: 'checkbox',
                            type: 'checkbox',
                            textAlign: 'Center',
                            allowResizing: false,
                            allowReordering: false,
                            allowFiltering: false,
                            showInColumnChooser: false,
                            width: e.gridSettings.smallWidth,
                          },
                          null,
                          8,
                          ['width'],
                        ),
                        t(
                          s,
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
                        t(
                          s,
                          {
                            field: 'code',
                            headerText: e.trans.get('__JSON__.model.value.code'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        t(
                          s,
                          {
                            field: 'designation',
                            headerText: e.trans.get('__JSON__.model.value.designation'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                [
                  'id',
                  'dataSource',
                  'created',
                  'rowSelecting',
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
            a('div', H, [
              a('span', null, [
                t(
                  m,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: r(() => [u(p(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                t(
                  m,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: e.selectAgent,
                  },
                  {
                    default: r(() => [u(p(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const z = y(I, [['render', $]]);
const P = {
  mixins: [v],
  components: { headerTemplate: M },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.selectionUsers'),
      selectionType: 'users',
    };
  },
};
const W = ['id'];
const q = { class: 'e-footer-content mt-4' };
function G(e, i, o, n, d, c) {
  const h = l('headerTemplate');
  const s = l('e-column');
  const f = l('e-columns');
  const w = l('ejs-grid');
  const m = l('ejs-button');
  const C = l('ejs-dialog');
  S();
  return _('div', null, [
    t(
      C,
      {
        ref: 'modalSelectionAgentChild',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: e.animationSettings,
        showCloseIcon: true,
        close: e.onModalClose,
        width: e.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: r(() => [
          t(h, { title: e.trans.get('__JSON__.agent.content.selectUsers') }, null, 8, ['title']),
        ]),
        templateContent: r(() => [
          a('div', null, [
            a('div', { id: e.spinnerModal }, null, 8, W),
            a('div', null, [
              t(
                w,
                {
                  id: e.idGrid,
                  dataSource: e.listAgent,
                  created: e.onGridCreate,
                  rowSelecting: e.rowSelectingCheck,
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
                  filterSettings: e.gridSettings.filterSettings,
                  pageSettings: e.gridSettings.pageSettingsModal,
                  rowDragStart: e.rowDragStart,
                  rowDropSettings: e.gridSettings.rowDropSettings,
                  rowHeight: e.gridSettings.rowHeight,
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: e.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  default: r(() => [
                    t(f, null, {
                      default: r(() => [
                        t(
                          s,
                          {
                            field: 'checkbox',
                            type: 'checkbox',
                            textAlign: 'Center',
                            allowResizing: false,
                            allowReordering: false,
                            allowFiltering: false,
                            showInColumnChooser: false,
                            width: e.gridSettings.smallWidth,
                          },
                          null,
                          8,
                          ['width'],
                        ),
                        t(
                          s,
                          {
                            field: 'id',
                            headerText: e.trans.get('__JSON__.model.value.id'),
                            isPrimaryKey: true,
                            type: 'number',
                            width: e.gridSettings.mediumWidth,
                          },
                          null,
                          8,
                          ['headerText', 'width'],
                        ),
                        t(
                          s,
                          {
                            field: 'firstname',
                            headerText: e.trans.get('__JSON__.user.value.firstName'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        t(
                          s,
                          {
                            field: 'lastname',
                            headerText: e.trans.get('__JSON__.user.value.lastName'),
                            type: 'string',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        t(
                          s,
                          {
                            field: 'company.designation',
                            headerText: e.trans.get('__JSON__.user.value.company'),
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                            type: 'string',
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        t(
                          s,
                          {
                            field: 'service.name',
                            headerText: e.trans.get('__JSON__.user.value.section'),
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                            type: 'string',
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        t(
                          s,
                          {
                            field: 'speciality_names',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                            type: 'string',
                            headerText: e.trans.get('__JSON__.model.value.speciality'),
                            width: e.gridSettings.extraLargeWidth,
                          },
                          null,
                          8,
                          ['filter', 'sortComparer', 'headerText', 'width'],
                        ),
                        t(
                          s,
                          {
                            field: 'certification_names',
                            filter: e.gridSettings.filterExcel,
                            sortComparer: e.sortComparerNaturalOrder,
                            type: 'string',
                            headerText: e.trans.get('__JSON__.model.value.certification'),
                            width: e.gridSettings.extraLargeWidth,
                          },
                          null,
                          8,
                          ['filter', 'sortComparer', 'headerText', 'width'],
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                [
                  'id',
                  'dataSource',
                  'created',
                  'rowSelecting',
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
            a('div', q, [
              a('span', null, [
                t(
                  m,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: r(() => [u(p(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                t(
                  m,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: e.selectAgent,
                  },
                  {
                    default: r(() => [u(p(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const U = y(P, [['render', G]]);
const K = {
  components: {
    selectionCompany: R,
    selectionServices: z,
    selectionUsers: U,
    headerTemplate: M,
  },
  props: {
    agentSelected: {
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
    objectType: { required: false },
    titleModal: { required: false },
    numberSelectMax: {
      required: false,
      default: function () {
        return 500;
      },
    },
  },
  computed: {
    titleOfModal() {
      return this.titleModal ? this.titleModal : this.trans.get('__JSON__.agent.selection.header');
    },
  },
  data() {
    return {
      width: '325px',
      animationSettings: { effect: 'None' },
      showCompanyModal: false,
      showServiceModal: false,
      showUserModal: false,
      title: '',
    };
  },
  mounted() {
    k({ target: document.getElementById('spinnerModalSelectionAgent') });
  },
  methods: {
    agentSelection(e) {
      this.$emit('agentSelected', e);
      this.showCompanyModal = false;
      this.showServiceModal = false;
      this.showUserModal = false;
      this.modalClose();
    },
    modalClose() {
      this.$emit('close');
    },
    openCompanyModal() {
      this.showCompanyModal = true;
    },
    openServiceModal() {
      this.showServiceModal = true;
    },
    openUserModal() {
      this.showUserModal = true;
    },
  },
};
const L = { class: 'container' };
const V = {
  key: 0,
  class: 'row mt-3',
};
const Q = {
  key: 1,
  class: 'row mt-3',
};
const X = {
  key: 2,
  class: 'row mt-3',
};
function Y(e, i, o, n, d, c) {
  const h = l('headerTemplate');
  const s = l('ejs-button');
  const f = l('selection-company');
  const w = l('selection-services');
  const m = l('selection-users');
  const C = l('ejs-dialog');
  S();
  return _('div', null, [
    t(
      C,
      {
        ref: 'modalSelectionAgent',
        header: 'headerTemplate',
        content: 'templateContent',
        close: c.modalClose,
        animationSettings: d.animationSettings,
        isModal: true,
        showCloseIcon: true,
        allowDragging: true,
        width: d.width,
      },
      {
        headerTemplate: r(() => [t(h, { title: c.titleOfModal }, null, 8, ['title'])]),
        templateContent: r(() => [
          a('div', null, [
            a('div', L, [
              i[3] || (i[3] = a('div', { id: 'spinnerModalSelectionAgent' }, null, -1)),
              o.agentables.includes('company')
                ? (S(),
                  _('div', V, [
                    t(
                      s,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-building',
                        cssClass: 'e-flat text-start',
                        onClick: c.openCompanyModal,
                      },
                      {
                        default: r(() => [u(p(e.trans.get('__JSON__.agent.selection.company')), 1)]),
                        _: 1,
                      },
                      8,
                      ['onClick'],
                    ),
                  ]))
                : b('', true),
              o.agentables.includes('service')
                ? (S(),
                  _('div', Q, [
                    t(
                      s,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-office',
                        cssClass: 'e-flat text-start',
                        onClick: c.openServiceModal,
                      },
                      {
                        default: r(() => [u(p(e.trans.get('__JSON__.agent.selection.service')), 1)]),
                        _: 1,
                      },
                      8,
                      ['onClick'],
                    ),
                  ]))
                : b('', true),
              o.agentables.includes('user')
                ? (S(),
                  _('div', X, [
                    t(
                      s,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-users-wf',
                        cssClass: 'e-flat text-start',
                        onClick: c.openUserModal,
                      },
                      {
                        default: r(() => [u(p(e.trans.get('__JSON__.agent.selection.user')), 1)]),
                        _: 1,
                      },
                      8,
                      ['onClick'],
                    ),
                  ]))
                : b('', true),
            ]),
          ]),
          d.showCompanyModal
            ? (S(),
              T(
                f,
                {
                  key: 0,
                  onClose: i[0] || (i[0] = (g) => (d.showCompanyModal = false)),
                  onAgentSelected: c.agentSelection,
                  objectType: o.objectType,
                  idSelected: o.agentSelected.filter((g) => g.type === 'companies').map((g) => g.id),
                  numberSelectMax: o.numberSelectMax,
                },
                null,
                8,
                ['onAgentSelected', 'objectType', 'idSelected', 'numberSelectMax'],
              ))
            : b('', true),
          d.showServiceModal
            ? (S(),
              T(
                w,
                {
                  key: 1,
                  onClose: i[1] || (i[1] = (g) => (d.showServiceModal = false)),
                  onAgentSelected: c.agentSelection,
                  objectType: o.objectType,
                  idSelected: o.agentSelected.filter((g) => g.type === 'services').map((g) => g.id),
                  numberSelectMax: o.numberSelectMax,
                },
                null,
                8,
                ['onAgentSelected', 'objectType', 'idSelected', 'numberSelectMax'],
              ))
            : b('', true),
          d.showUserModal
            ? (S(),
              T(
                m,
                {
                  key: 2,
                  onClose: i[2] || (i[2] = (g) => (d.showUserModal = false)),
                  onAgentSelected: c.agentSelection,
                  objectType: o.objectType,
                  idSelected: o.agentSelected.filter((g) => g.type === 'users').map((g) => g.id),
                  numberSelectMax: o.numberSelectMax,
                },
                null,
                8,
                ['onAgentSelected', 'objectType', 'idSelected', 'numberSelectMax'],
              ))
            : b('', true),
        ]),
        _: 1,
      },
      8,
      ['close', 'animationSettings', 'width'],
    ),
  ]);
}
const te = y(K, [['render', Y]]);
export { te as M };
