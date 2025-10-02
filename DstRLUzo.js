import {
  _ as u,
  E as d,
  c as m,
  b as S,
  o as g,
  a as o,
  w as c,
  r as a,
  g as p,
  F as b,
  k as T,
  f as w,
} from '../assets/app-BjImoLrr.js';
import { m as M, Z as v } from './CuxdB7hV.js';
import { g as G } from './D_eyCAsX.js';
const D = {
  props: { data: { required: true } },
  methods: {
    selectPrimary() {
      if (!this.data.primary) {
        d.$emit('changePrimaryCreateGridSelection', this.data.id);
      }
    },
  },
};
const I = {
  class: 'row',
  style: {
    display: 'flex',
    'justify-content': 'center',
  },
};
const N = ['checked'];
function R(e, t, r, f, s, i) {
  g();
  return m('div', I, [
    S(
      'input',
      {
        type: 'radio',
        onClick: t[0] || (t[0] = (...l) => i.selectPrimary && i.selectPrimary(...l)),
        checked: r.data.primary,
        style: { cursor: 'pointer' },
      },
      null,
      8,
      N,
    ),
  ]);
}
const z = u(D, [['render', R]]);
const j = {
  methods: {
    callMassUnlink() {
      d.$emit('unlinkMassFileModalGridSelection');
    },
  },
};
function E(e, t, r, f, s, i) {
  const l = a('ejs-tooltip');
  g();
  return m('div', null, [
    o(
      l,
      {
        content: e.trans.get('__JSON__.model.action.massUnlink'),
        position: 'TopCenter',
        animation: e.default_SF_Props.animationTooltip,
      },
      {
        default: c(() => [
          S('span', {
            class: 'sf-icon-unlink_01 iconeGrid',
            onClick: t[0] || (t[0] = (...h) => i.callMassUnlink && i.callMassUnlink(...h)),
            style: {
              cursor: 'pointer',
              'vertical-align': 'middle',
            },
          }),
        ]),
        _: 1,
      },
      8,
      ['content', 'animation'],
    ),
  ]);
}
const U = u(j, [['render', E]]);
const B = {
  props: {
    data: { required: true },
    showViewerPdf: {
      required: false,
      default() {
        return false;
      },
    },
  },
  emits: ['displayPdf'],
  methods: {
    callUnlink() {
      d.$emit('unlinkFileGridSelection', this.data.id);
    },
    displayPdf() {
      if (this.showViewerPdf) {
        this.$emit('displayPdf', this.data.id, this.data.title);
      }
    },
  },
};
function H(e, t, r, f, s, i) {
  g();
  return m(
    b,
    null,
    [
      S('span', {
        class: 'sf-icon-unlink_01 iconeGrid mx-1',
        onClick: t[0] || (t[0] = (...l) => i.callUnlink && i.callUnlink(...l)),
        style: { cursor: 'pointer' },
      }),
      r.showViewerPdf && r.data.extension === 'PDF'
        ? (g(),
          m('span', {
            key: 0,
            class: 'sf-icon-eye---05 iconeGrid mx-1',
            onClick: t[1] || (t[1] = (...l) => i.displayPdf && i.displayPdf(...l)),
            style: { cursor: 'pointer' },
          }))
        : p('', true),
    ],
    64,
  );
}
const O = u(B, [['render', H]]);
const V = {
  mixins: [T, G],
  components: {
    ZoneUploader: v,
    modalSelectionAddDocumentation: M,
    templatePrimary: z,
    templateHeaderIcon: U,
    templateIcon: O,
  },
  props: {
    objectType: { required: true },
    filePreselected: {
      required: false,
      default() {
        return [];
      },
    },
    fileIdsToAvoid: {
      required: false,
      default() {
        return [];
      },
    },
    showViewerPdf: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.gridSelectionFiles'),
      listFilesSelected: [],
      showModal: false,
      toolbar: [
        'Search',
        {
          id: 'addFilesToGrid',
          prefixIcon: 'sf-icon-addition- plus',
          tooltipText: this.trans.get('__JSON__.docsheet.content.selectFile'),
        },
        {
          id: 'descriptionToolbarFile',
          text: translate.get('__JSON__.main.grid.toolbar.files'),
          disabled: true,
        },
      ],
    };
  },
  methods: {
    displayPdf(e, t) {
      if (this.showViewerPdf) {
        this.$emit('displayPdf', e, t);
      }
    },
    changePrimary(e) {
      this.listFilesSelected.forEach((t) => {
        t.primary = t.id === e;
      });
      this.$refs.grid.refresh();
    },
    unlink(e) {
      this.listFilesSelected = this.listFilesSelected.filter((t) => t.id !== e);
    },
    fileSelection(e) {
      e.forEach((t) => {
        t.humanSize = this.humanFileSize(t.size);
      });
      this.listFilesSelected.push(...e);
      this.listFilesSelected = [...new Set(this.listFilesSelected)];
      this.showModal = false;
    },
    toolbarClick(e) {
      if (e.item.id === 'addFilesToGrid') {
        this.showModal = true;
      }
    },
    massUnlink() {
      let e = this.$refs.grid.getSelectedRecords().map((t) => t.id);
      this.listFilesSelected = this.listFilesSelected.filter((t) => !e.includes(t.id));
    },
  },
  watch: {
    listFilesSelected(e) {
      this.$emit('changeSelection', e);
    },
  },
  mounted() {
    this.fileSelection(this.filePreselected);
    d.$on('changePrimaryCreateGridSelection', this.changePrimary);
    d.$on('unlinkFileGridSelection', this.unlink);
    d.$on('unlinkMassFileModalGridSelection', this.massUnlink);
  },
  beforeUnmount() {
    d.$off('changePrimaryCreateGridSelection', this.changePrimary);
    d.$off('unlinkFileGridSelection', this.unlink);
    d.$off('unlinkMassFileModalGridSelection', this.massUnlink);
  },
};
function x(e, t, r, f, s, i) {
  const l = a('e-column');
  const h = a('e-columns');
  const y = a('templatePrimary');
  const F = a('templateHeaderIcon');
  const _ = a('templateIcon');
  const C = a('ejs-grid');
  const k = a('zone-uploader');
  const P = a('modal-selection-add-documentation');
  g();
  return m('div', null, [
    o(
      k,
      {
        onFileSelected: i.fileSelection,
        objectType: r.objectType,
        idFilesSelected: s.listFilesSelected.map((n) => n.id),
        extensionFileSelected: s.listFilesSelected.map((n) => n.extension),
        typeFile: 'all',
        enabled: e.can('upload', 'files'),
      },
      {
        dropZoneArea: c(() => [
          o(
            C,
            {
              dataSource: s.listFilesSelected,
              id: 'GridSelectionFile',
              enablePersistence: false,
              width: 'auto',
              ref: e.gridSettings.ref,
              actionBegin: e.actionBegin,
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
              rowSelecting: e.rowSelecting,
              searchSettings: e.gridSettings.searchSettings,
              selectionSettings: e.gridSettings.selectionSettings,
              showColumnChooser: e.gridSettings.showColumnChooser,
              toolbar: s.toolbar,
              toolbarClick: i.toolbarClick,
            },
            {
              templatePrimary: c(({ data: n }) => [o(y, { data: n }, null, 8, ['data'])]),
              templateHeaderIcon: c(() => [o(F)]),
              templateIcon: c(({ data: n }) => [
                o(
                  _,
                  {
                    data: n,
                    showViewerPdf: r.showViewerPdf,
                    onDisplayPdf: i.displayPdf,
                  },
                  null,
                  8,
                  ['data', 'showViewerPdf', 'onDisplayPdf'],
                ),
              ]),
              default: c(() => [
                o(h, null, {
                  default: c(() => [
                    r.objectType === 'docsheets'
                      ? (g(),
                        w(
                          l,
                          {
                            key: 0,
                            headerText: e.trans.get('__JSON__.file.value.primary'),
                            textAlign: 'Center',
                            field: 'primary',
                            template: 'templatePrimary',
                            allowResizing: false,
                            allowReordering: false,
                            allowFiltering: false,
                            allowSorting: false,
                            lockColumn: true,
                            showInColumnChooser: false,
                            width: '90',
                          },
                          null,
                          8,
                          ['headerText'],
                        ))
                      : p('', true),
                    o(
                      l,
                      {
                        field: 'actions',
                        headerTemplate: 'templateHeaderIcon',
                        template: 'templateIcon',
                        allowResizing: false,
                        allowFiltering: false,
                        allowSorting: false,
                        showInColumnChooser: false,
                        lockColumn: true,
                        textAlign: 'Center',
                        clipMode: 'Clip',
                        width: '40',
                      },
                      null,
                      8,
                      ['width'],
                    ),
                    o(
                      l,
                      {
                        field: 'checkbox',
                        type: 'checkbox',
                        textAlign: 'Center',
                        width: '60',
                        allowResizing: false,
                        allowReordering: false,
                        lockColumn: true,
                        allowFiltering: false,
                        showInColumnChooser: false,
                      },
                      null,
                      8,
                      ['width'],
                    ),
                    o(
                      l,
                      {
                        field: 'id',
                        headerText: e.trans.get('__JSON__.model.value.id'),
                        isPrimaryKey: true,
                        width: '80',
                        type: 'number',
                      },
                      null,
                      8,
                      ['headerText', 'width'],
                    ),
                    o(
                      l,
                      {
                        field: 'title',
                        headerText: e.trans.get('__JSON__.file.value.title'),
                        width: '200',
                        type: 'string',
                        filter: e.gridSettings.filterWithoutCheckbox,
                        sortComparer: e.sortComparerNaturalOrder,
                      },
                      null,
                      8,
                      ['headerText', 'filter', 'sortComparer'],
                    ),
                    o(
                      l,
                      {
                        field: 'extension',
                        headerText: e.trans.get('__JSON__.file.value.extension'),
                        type: 'string',
                        width: e.gridSettings.mediumWidth,
                        filter: e.gridSettings.filterExcel,
                        sortComparer: e.sortComparerNaturalOrder,
                      },
                      null,
                      8,
                      ['headerText', 'width', 'filter', 'sortComparer'],
                    ),
                    o(
                      l,
                      {
                        field: 'humanSize',
                        headerText: e.trans.get('__JSON__.file.value.size'),
                        type: 'string',
                        allowFiltering: false,
                        width: e.gridSettings.mediumWidth,
                        sortComparer: e.sortComparerSize,
                      },
                      null,
                      8,
                      ['headerText', 'width', 'sortComparer'],
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
              'actionBegin',
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
        _: 1,
      },
      8,
      ['onFileSelected', 'objectType', 'idFilesSelected', 'extensionFileSelected', 'enabled'],
    ),
    s.showModal
      ? (g(),
        w(
          P,
          {
            key: 0,
            onClose: t[0] || (t[0] = (n) => (s.showModal = false)),
            onFileSelected: i.fileSelection,
            objectType: r.objectType,
            idFilesSelected: s.listFilesSelected.map((n) => n.id).concat(r.fileIdsToAvoid),
            extensionFileSelected: s.listFilesSelected.map((n) => n.extension),
            typeFile: 'all',
          },
          null,
          8,
          ['onFileSelected', 'objectType', 'idFilesSelected', 'extensionFileSelected'],
        ))
      : p('', true),
  ]);
}
const q = u(V, [['render', x]]);
export { q as G, O as t };
