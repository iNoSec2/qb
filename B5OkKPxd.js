import {
  _ as w,
  k as T,
  p as F,
  s as N,
  i as c,
  c as y,
  a as t,
  w as o,
  r as s,
  o as O,
  b as n,
  e as p,
  t as f,
} from '../assets/app-BjImoLrr.js';
import { m as v } from './zC887B9y.js';
import { g as M } from './D_eyCAsX.js';
import { h as E } from './CKKuZvVl.js';
import { s as J } from './SUr2wc-1.js';
import x from './JzGXi_4H.js';
const D = {
  mixins: [T, v, M],
  components: {
    colorValue: x,
    simpleImage: J,
    headerTemplate: E,
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalAddFiles'),
      listFiles: [],
      animationSettings: { effect: 'None' },
      promptWidth: '1000px',
      promptHeader: this.trans.get('__JSON__.docsheet.content.selectFile'),
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
          id: 'selectionToolbarModalAddFiles',
          text: translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }),
          disabled: true,
        },
      ],
      selectionModuleGrid: { persistSelectedData: [] },
    };
  },
  methods: {
    closeModal() {
      this.$refs.modalAddFile.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    rowSelectingCheck(e) {
      this.rowSelecting(e);
      if (this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length + 1 > this.numberFilesMax) {
        this.numberFilesMax == 1 &&
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length !== this.listFiles.length
          ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
          : ((e.cancel = true),
            this.showCenterToast(
              this.trans.get('__JSON__.documentation.selection.toast.error.maxSelectionFile', {
                number: this.numberFilesMax,
              }),
              'e-toast-danger',
            ));
      }
    },
    selectFiles() {
      let e = this.$refs.grid.getSelectedRecords();
      if (e.length) {
        this.checkFilesSelected(e);
      }
    },
  },
  watch: {
    'selectionModuleGrid.persistSelectedData': {
      deep: true,
      handler(e) {
        let l = this.$refs.grid.$el.querySelector('#selectionToolbarModalAddFiles');
        if (l && l.firstElementChild) {
          let r = l.firstElementChild;
          e
            ? (r.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: e.length }))
            : (r.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }));
        }
      },
    },
  },
  mounted() {
    F({ target: document.getElementById('spinnerModalAddFile') });
    if (this.$refs.grid) {
      let l = this.$refs.grid.$el.querySelector('#selectionToolbarModalAddFiles');
      if (l && l.firstElementChild) {
        let r = l.firstElementChild;
        l.firstElementChild.style.color = 'black';
        l.firstElementChild.style['font-size'] = '12px';
        this.selectionModuleGrid = this.$refs.grid.ej2Instances.selectionModule;
      }
    }
    N(document.getElementById('spinnerModalAddFile'));
    let e = 'allFiles';
    if (this.objectType === 'docsheets') {
      e = 'gridFileDocsheet';
    }
    if (this.objectType === 'docmod') {
      e = 'docmod/' + this.typeFile;
    }
    if (this.typeFile === 'images') {
      e = 'galleries/pictures';
    }
    if (this.objectType === 'interactive_files') {
      e = 'interactive_files/' + this.typeFile;
    }
    axios
      .get('api/files/' + e)
      .then((l) => {
        c(document.getElementById('spinnerModalAddFile'));
        if (l.status == 200) {
          l.data.forEach((r) => {
            switch (((r.humanSize = this.humanFileSize(r.size)), this.objectType)) {
              case 'docsheets':
                if (!this.idFilesSelected.includes(r.id)) {
                  this.listFiles.push(r);
                }
                break;
              default:
                if (!this.idFilesSelected.includes(r.id)) {
                  this.listFiles.push(r);
                }
                break;
            }
          });
          this.listFiles = [...this.listFiles];
        }
      })
      .catch((l) => {
        c(document.getElementById('spinnerModalAddFile'));
        this.showCenterToast(this.trans.get('__JSON__.file.toast.error.get'), 'e-toast-danger');
      });
  },
};
const k = { class: 'e-footer-content mt-4' };
function I(e, l, r, A, d, g) {
  const u = s('headerTemplate');
  const i = s('e-column');
  const S = s('e-columns');
  const _ = s('simpleImage');
  const m = s('colorValue');
  const C = s('ejs-grid');
  const h = s('ejs-button');
  const b = s('ejs-dialog');
  O();
  return y('div', null, [
    t(
      b,
      {
        ref: 'modalAddFile',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: d.animationSettings,
        showCloseIcon: true,
        close: g.onModalClose,
        width: d.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: o(() => [
          t(u, { title: e.trans.get('__JSON__.docsheet.content.selectFile') }, null, 8, ['title']),
        ]),
        templateContent: o(() => [
          n('div', null, [
            l[0] || (l[0] = n('div', { id: 'spinnerModalAddFile' }, null, -1)),
            n('div', null, [
              t(
                C,
                {
                  dataSource: d.listFiles,
                  id: 'modalAddFileGrid',
                  enablePersistence: false,
                  created: e.onGridCreate,
                  rowSelecting: g.rowSelectingCheck,
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
                  searchSettings: e.gridSettings.searchSettings,
                  selectionSettings: e.gridSettings.selectionSettings,
                  showColumnChooser: e.gridSettings.showColumnChooser,
                  toolbar: d.toolbar,
                  toolbarClick: e.toolbarClick,
                },
                {
                  templateImage: o(({ data: a }) => [
                    t(
                      _,
                      {
                        urlField: 'urlImage',
                        data: a,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateStatus: o(({ data: a }) => [
                    t(
                      m,
                      {
                        colorObjectName: 'docsheet_status',
                        data: a,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateType: o(({ data: a }) => [
                    t(
                      m,
                      {
                        colorObjectName: 'docsheet_type',
                        data: a,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  default: o(() => [
                    t(S, null, {
                      default: o(() => [
                        t(i, {
                          type: 'checkbox',
                          textAlign: 'Center',
                          allowResizing: false,
                          allowReordering: false,
                          allowFiltering: false,
                          showInColumnChooser: false,
                          field: 'checkbox',
                        }),
                        t(
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
                        t(
                          i,
                          {
                            allowResizing: false,
                            allowEditing: false,
                            allowFiltering: false,
                            allowSorting: false,
                            template: 'templateImage',
                            editTemplate: 'templateImage',
                            headerText: e.trans.get('__JSON__.nomenclatures.value.image'),
                            width: '102',
                            field: 'image',
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        t(
                          i,
                          {
                            field: 'title',
                            headerText: e.trans.get('__JSON__.file.value.title'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'code',
                            headerText: e.trans.get('__JSON__.file.value.code'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'extension',
                            headerText: e.trans.get('__JSON__.file.value.extension'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'humanSize',
                            headerText: e.trans.get('__JSON__.file.value.size'),
                            type: 'string',
                            allowFiltering: false,
                            sortComparer: e.sortComparerSize,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer'],
                        ),
                        t(
                          i,
                          {
                            field: 'origin_path',
                            headerText: e.trans.get('__JSON__.file.value.originPath'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            type: 'boolean',
                            displayAsCheckBox: 'true',
                            field: 'is_in_docsheet',
                            headerText: e.trans.get('__JSON__.file.value.isInDocsheet'),
                            filter: e.gridSettings.filterCheck,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'docsheet_id',
                            headerText: e.trans.get('__JSON__.file.value.idDocsheet'),
                            type: 'number',
                            filter: e.gridSettings.filterExcel,
                            visible: false,
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'docsheet_code',
                            headerText: e.trans.get('__JSON__.file.value.codeDocsheet'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                            visible: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'docsheet_designation',
                            headerText: e.trans.get('__JSON__.file.value.designationDocsheet'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterWithoutCheckbox,
                            visible: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'docsheet_status_name',
                            headerText: e.trans.get('__JSON__.file.value.statusDocsheet'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                            template: 'templateStatus',
                            visible: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'docsheet_type_name',
                            headerText: e.trans.get('__JSON__.file.value.typeDocsheet'),
                            type: 'string',
                            sortComparer: e.sortComparerNaturalOrder,
                            filter: e.gridSettings.filterExcel,
                            template: 'templateType',
                            visible: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        t(
                          i,
                          {
                            field: 'docsheet_version',
                            headerText: e.trans.get('__JSON__.file.value.versionDocsheet'),
                            type: 'number',
                            filter: e.gridSettings.filterExcel,
                            visible: false,
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
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
                  'rowSelecting',
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
                  'searchSettings',
                  'selectionSettings',
                  'showColumnChooser',
                  'toolbar',
                  'toolbarClick',
                ],
              ),
            ]),
            n('div', k, [
              n('span', null, [
                t(
                  h,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: g.closeModal,
                  },
                  {
                    default: o(() => [p(f(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                t(
                  h,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: g.selectFiles,
                  },
                  {
                    default: o(() => [p(f(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const W = w(D, [['render', I]]);
export { W as M };
