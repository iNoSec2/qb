import {
  _ as D,
  k as R,
  p as J,
  s as L,
  i as V,
  E as r,
  c as h,
  a as l,
  w as d,
  r as s,
  o as u,
  b as a,
  d as v,
  v as C,
  t as b,
  g as p,
  e as k,
  f as O,
  n as y,
  a5 as N,
  a4 as G,
} from '../assets/app-BjImoLrr.js';
import { g as j } from './ZS-VIFna.js';
import { b as P } from './DrOYtW4t.js';
import { h as I } from './CKKuZvVl.js';
import { d as F } from './Nw-Fho2_.js';
import { t as M, a as $ } from './B7kCs8tM.js';
/* empty css                    */
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
const A = {
  mixins: [R, F],
  components: { headerTemplate: I },
  props: ['object'],
  data() {
    return {
      keyLocale: '__JSON__.valueList.language.' + this.trans.locale,
      animationSettings: { effect: 'None' },
      dataValue: {
        code: null,
        fallbackName: null,
        name: null,
        value_list_id: null,
        color: null,
      },
      width: '750px',
      code: null,
      fr: null,
      en: null,
    };
  },
  methods: {
    changeColor(e) {
      this.dataValue.color = e.currentValue.hex;
    },
    toast(e, t) {
      this.showCenterToast(t, e);
    },
    saveCreate() {
      this.dataValue.code = this.dataValue.code.trim();
      if (this.validateStringLength(this.dataValue.code, this.trans.get('__JSON__.model.value.code'))) {
        this.dataValue.value_list_id = this.object.id;
        L(document.getElementById('spinnerCreateValue'));
        axios
          .post('api/values', this.dataValue)
          .then((e) => {
            V(document.getElementById('spinnerCreateValue'));
            r.$emit('reloadExtensionForUpload');
            r.$emit('addToValueList', [e.data.main.value]);
            this.closeModal();
          })
          .catch((e) => {
            console.error(e);
            V(document.getElementById('spinnerCreateValue'));
            this.showCenterToast(this.trans.get('__JSON__.value.errors.errorCreate'), 'e-toast-danger');
          });
      }
    },
  },
  computed: {
    localeIsEnglish() {
      return this.trans.locale === 'en';
    },
  },
  mounted() {
    this.$refs.createValue.show();
    J({ target: document.getElementById('spinnerCreateValue') });
  },
};
const q = { class: 'container mt-4' };
const z = { class: 'row' };
const H = { class: 'col-md-6' };
const W = ['placeholder'];
const U = { class: 'col-md-6' };
const K = {
  class: 'text_descriptif col-md-4 col-lg-4 col-xs-6 mt-2',
  style: { 'min-width': '75px' },
};
const Q = { class: 'row mt-4' };
const X = {
  key: 0,
  class: 'col-md-6',
};
const Y = ['placeholder'];
const Z = { class: 'col-md-6' };
const x = ['placeholder'];
const ee = { class: 'e-footer-content mt-4' };
function te(e, t, c, _, o, n) {
  const m = s('headerTemplate');
  const f = s('ejs-colorpicker');
  const i = s('ejs-button');
  const S = s('ejs-dialog');
  u();
  return h('div', null, [
    l(
      S,
      {
        ref: 'createValue',
        header: 'headerTemplate',
        content: 'templateContent',
        isModal: true,
        width: o.width,
        visible: false,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: o.animationSettings,
        close: e.closeModal,
      },
      {
        headerTemplate: d(() => [l(m, { title: e.trans.get('__JSON__.value.content.addValue') }, null, 8, ['title'])]),
        templateContent: d(() => [
          a('div', null, [
            t[3] || (t[3] = a('div', { id: 'spinnerCreateValue' }, null, -1)),
            a('div', q, [
              a('div', z, [
                a('div', H, [
                  v(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[0] || (t[0] = (g) => (o.dataValue.code = g)),
                        placeholder: e.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      W,
                    ),
                    [[C, o.dataValue.code]],
                  ),
                ]),
                a('div', U, [
                  a('span', K, b(e.trans.get('__JSON__.value.value.color')), 1),
                  l(
                    f,
                    {
                      class: 'col-md-4',
                      onChange: n.changeColor,
                      value: o.dataValue.color ? o.dataValue.color : '#ffffff00',
                    },
                    null,
                    8,
                    ['onChange', 'value'],
                  ),
                ]),
              ]),
              a('div', Q, [
                n.localeIsEnglish
                  ? p('', true)
                  : (u(),
                    h('div', X, [
                      v(
                        a(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            placeholder:
                              e.trans.get('__JSON__.model.value.designation') + '(' + e.trans.get(o.keyLocale) + ')',
                            'onUpdate:modelValue': t[1] || (t[1] = (g) => (o.dataValue.name = g)),
                          },
                          null,
                          8,
                          Y,
                        ),
                        [[C, o.dataValue.name]],
                      ),
                    ])),
                a('div', Z, [
                  v(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        placeholder:
                          e.trans.get('__JSON__.model.value.designation') +
                          '(' +
                          e.trans.get('__JSON__.valueList.language.en') +
                          ')',
                        'onUpdate:modelValue': t[2] || (t[2] = (g) => (o.dataValue.fallbackName = g)),
                      },
                      null,
                      8,
                      x,
                    ),
                    [[C, o.dataValue.fallbackName]],
                  ),
                ]),
              ]),
            ]),
            a('div', ee, [
              a('span', null, [
                l(
                  i,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: d(() => [k(b(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                l(
                  i,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: n.saveCreate,
                  },
                  {
                    default: d(() => [k(b(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
      ['width', 'animationSettings', 'close'],
    ),
  ]);
}
const ae = D(A, [['render', te]]);
const le = {
  mixins: [j],
  components: { appDialog: ae },
  props: {
    objetType: { required: true },
    data: { required: true },
  },
  data: function () {
    return {
      objectPermission: 'values',
      enable: '',
      deletedDisabed: '',
      restore: '',
      showDialog: false,
      object: null,
    };
  },
  computed: {
    classDelete: function () {
      this.data.editable == 0 && this.data.useCaseCount != 0
        ? (this.deletedDisabed = true)
        : this.data.deleted_at == null
          ? (this.enable = true)
          : (this.restore = true);
    },
  },
  methods: {
    actionDelete() {
      if (this.can('delete', this.objectPermission)) {
        this.deleted(this.objetType);
      }
    },
    actionRestore() {
      if (this.can('restore', this.objectPermission)) {
        this.restored(this.objetType);
      }
    },
    addValue() {
      if (this.can('create', this.objectPermission)) {
        this.object = this.data;
        this.showDialog = true;
      }
    },
  },
  mounted() {
    this.classDelete;
  },
};
const oe = { class: 'gridActions' };
const ie = {
  key: 0,
  class: 'd-flex',
};
const ne = {
  key: 0,
  class: 'me-2 row-disabled',
};
const se = {
  key: 1,
  class: 'd-flex',
};
function re(e, t, c, _, o, n) {
  const m = s('ejs-tooltip');
  const f = s('app-dialog');
  u();
  return h('div', oe, [
    c.objetType !== 'value_lists'
      ? (u(),
        h('div', ie, [
          e.deletedDisabed
            ? (u(),
              h('div', ne, [
                l(
                  m,
                  {
                    content: e.trans.get('__JSON__.model.action.delete'),
                    position: 'TopCenter',
                    animation: e.default_SF_Props.animationTooltip,
                  },
                  {
                    default: d(() => [
                      ...(t[4] || (t[4] = [a('span', { class: 'sf-icon-garbage-wf iconeGrid me-2' }, null, -1)])),
                    ]),
                    _: 1,
                  },
                  8,
                  ['content', 'animation'],
                ),
                t[5] || (t[5] = a('span', { class: 'sf-icon-garbage-wf iconeGrid me-2' }, null, -1)),
              ]))
            : p('', true),
          e.enable
            ? (u(),
              h(
                'div',
                {
                  key: 1,
                  class: 'me-2',
                  onClick: t[0] || (t[0] = (...i) => n.actionDelete && n.actionDelete(...i)),
                },
                [
                  l(
                    m,
                    {
                      content: e.trans.get('__JSON__.model.action.delete'),
                      position: 'TopCenter',
                      animation: e.default_SF_Props.animationTooltip,
                    },
                    {
                      default: d(() => [
                        a(
                          'span',
                          {
                            class: y([
                              'sf-icon-garbage-wf iconeGrid',
                              { disabledIcon: !e.can('delete', e.objectPermission) },
                            ]),
                            style: { cursor: 'pointer' },
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
                ],
              ))
            : p('', true),
          e.restore
            ? (u(),
              h(
                'div',
                {
                  key: 2,
                  class: 'me-2',
                  onClick: t[1] || (t[1] = (...i) => n.actionRestore && n.actionRestore(...i)),
                },
                [
                  l(
                    m,
                    {
                      content: e.trans.get('__JSON__.model.action.restore'),
                      position: 'TopCenter',
                      animation: e.default_SF_Props.animationTooltip,
                    },
                    {
                      default: d(() => [
                        a(
                          'span',
                          {
                            class: y([
                              'sf-icon-recover-deleted-item-wf iconeGrid',
                              { disabledIcon: !e.can('restore', e.objectPermission) },
                            ]),
                            style: { cursor: 'pointer' },
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
                ],
              ))
            : p('', true),
        ]))
      : (u(),
        h('div', se, [
          c.objetType === 'value_lists' && this.data.code !== 'pattern_type'
            ? (u(),
              h(
                'div',
                {
                  key: 0,
                  class: 'me-2',
                  onClick: t[3] || (t[3] = (...i) => n.addValue && n.addValue(...i)),
                },
                [
                  l(
                    m,
                    {
                      content: e.trans.get('__JSON__.model.action.add'),
                      position: 'TopCenter',
                      animation: e.default_SF_Props.animationTooltip,
                    },
                    {
                      default: d(() => [
                        a(
                          'span',
                          {
                            class: y([
                              'sf-icon-addition- iconeGrid',
                              { disabledIcon: !e.can('create', e.objectPermission) },
                            ]),
                            style: { cursor: 'pointer' },
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
                  e.showDialog
                    ? (u(),
                      O(
                        f,
                        {
                          key: 0,
                          object: e.object,
                          dataSelect: c.data,
                          onClose: t[2] || (t[2] = (i) => (e.showDialog = false)),
                        },
                        null,
                        8,
                        ['object', 'dataSelect'],
                      ))
                    : p('', true),
                ],
              ))
            : p('', true),
        ])),
  ]);
}
const de = D(le, [['render', re]]);
const ce = {
  mixins: [j],
  components: {
    appModeButtons: P,
    actions: de,
    actions_child: $,
    templateCode: M,
  },
  data() {
    let e = '__JSON__.valueList.language.' + this.trans.locale;
    let t = [
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
        visible: true,
        isPrimaryKey: true,
      },
      {
        headerText: this.trans.get('__JSON__.model.value.code'),
        field: 'code',
        filter: { type: 'Excel' },
        template: 'templateCode',
      },
      {
        field: 'fallbackName',
        filter: { type: 'Excel' },
        headerText:
          this.trans.get('__JSON__.model.value.designation') +
          '(' +
          this.trans.get('__JSON__.valueList.language.en') +
          ')',
      },
    ];
    if (this.trans.locale !== 'en') {
      t.push({
        field: 'name',
        filter: { type: 'Excel' },
        headerText: this.trans.get('__JSON__.model.value.designation') + '(' + this.trans.get(e) + ')',
      });
    }
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.valueListsGrid'),
      keyLocale: e,
      typeObject: 'value_lists',
      items: [],
      childGridSettings: {
        queryString: 'value_list_id',
        columns: t,
        load: function () {
          this.parentDetails.parentKeyFieldValue = this.parentDetails.parentRowData.id;
        },
      },
      contentDataGridOverride: [],
    };
  },
  watch: {
    contentDataGrid: {
      deep: true,
      handler() {
        this.contentDataGridOverride = [...this.contentData];
      },
    },
  },
  methods: {
    onDetailDataBound(e) {
      axios
        .get('api/value_lists/' + e.data.id)
        .then((t) => {
          let c = t.data.main.valueList.values;
          this.dataValue = this.limitValuesByMode(t.data.main.valueList.values);
          this.dataValue.forEach((_) => {
            _.value_list_code = e.data.code;
          });
          this.setChildDataSource(e, this.dataValue);
        })
        .catch((t) => {
          console.error(t);
        });
    },
    limitValuesByMode(e) {
      switch (this.mode) {
        case 'default':
          e = new N(e).executeLocal(new G().where('deleted_at', 'equal', null));
          break;
        case 'trash':
          e = new N(e).executeLocal(new G().where('deleted_at', 'notequal', null));
          break;
      }
      return e;
    },
    rowDataBoundOverride(e) {
      this.rowDataBound(e);
      if (e.data.useCaseCount == 0) {
        e.row.querySelector('td').innerHTML = ' ';
        e.row.querySelector('td').classList.add('arrowDeactivated');
      }
    },
    recordDoubleClickChild(e) {
      if (e.row.classList.contains('rowActive')) {
        let t = {
          panelDroite: true,
          refObjet: e.rowData.id,
          typeObject: 'values',
        };
        r.$emit('showPanel', t);
      }
    },
    valueChildGridDelete(e) {
      if (Array.isArray(e)) {
        e.forEach((t) => {
          let c = this.dataValue.findIndex((_) => _.id == t.idElementChildRow);
          if (c > -1) {
            this.dataValue.splice(c, 1);
          }
          this.deleteRecordChildGrid(t.idElementChildRow, t.parentRowId);
        });
      }
    },
    addValueChildGrid(e) {
      if (Array.isArray(e)) {
        e.forEach((t) => {
          this.dataValue.push(t);
          this.addRecordChildGrid(t, t.value_list_id);
        });
      }
    },
    updateValueChildGrid(e) {
      if ((e.deleted_at && this.mode === 'default') || (!e.deleted_at && this.mode === 'trash'))
        this.valueChildGridDelete([
          {
            idElementChildRow: e.id,
            parentRowId: e.value_list_id,
          },
        ]);
      else {
        let t = this.dataValue.findIndex((c) => c.id == e.id);
        this.dataValue.splice(t, 1, e);
        this.updateRecordChildGrid(e, e.id, e.value_list_id);
      }
    },
  },
  computed: {
    localeIsEnglish() {
      return this.trans.locale === 'en';
    },
  },
  mounted() {
    r.$on('colorChange', this.changeColorRow);
    r.$on('rowDeselected', this.deselectedRow);
    r.$on('addToValueList', this.addValueChildGrid);
    r.$on('updateValueGrid', this.updateValueChildGrid);
    r.$on('valueGridDelete', this.valueChildGridDelete);
  },
  beforeUnmount() {
    r.$off('colorChange', this.changeColorRow);
    r.$off('rowDeselected', this.deselectedRow);
    r.$off('addToValueList', this.addValueChildGrid);
    r.$off('updateValueGrid', this.updateValueChildGrid);
    r.$off('valueGridDelete', this.valueChildGridDelete);
  },
};
const ue = { class: 'container-fluid' };
const he = { class: 'row' };
const me = { class: 'col-md-12' };
const ge = { class: 'containerGridScrollable' };
const pe = { class: 'wrapperGrid' };
const _e = { class: 'navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3 ps-0 navbarGrid' };
const fe = {
  id: 'contentGrid',
  class: 'pt-1',
};
const we = { class: 'wrapperGrid' };
function Se(e, t, c, _, o, n) {
  const m = s('ejs-splitbutton');
  const f = s('app-modeButtons');
  const i = s('e-column');
  const S = s('e-columns');
  const g = s('actions');
  const T = s('actions_child');
  const B = s('templateCode');
  const E = s('ejs-grid');
  u();
  return h('div', null, [
    a('div', ue, [
      a('div', he, [
        a('div', me, [
          a('div', ge, [
            a('div', pe, [
              a('nav', _e, [
                l(
                  m,
                  {
                    items: o.items,
                    class: 'sf-icon-menu-interface-wf mr',
                    disabled: 'true',
                  },
                  null,
                  8,
                  ['items'],
                ),
                t[0] ||
                  (t[0] = a(
                    'div',
                    { class: 'collapse navbar-collapse' },
                    [a('ul', { class: 'navbar-nav me-auto mt-1 mt-lg-0' })],
                    -1,
                  )),
                l(
                  f,
                  {
                    dataGrid: e.contentData,
                    mode: e.mode,
                  },
                  null,
                  8,
                  ['dataGrid', 'mode'],
                ),
              ]),
              a('div', fe, [
                a('div', we, [
                  l(
                    E,
                    {
                      id: 'GridValueList',
                      dataSource: o.contentDataGridOverride,
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
                      filterSettings: e.gridSettings.filterSettings,
                      height: e.gridSettings.height,
                      pageSettings: e.gridSettings.pageSettings,
                      recordDoubleClick: e.recordDoubleClick,
                      rowDataBound: n.rowDataBoundOverride,
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
                      detailDataBound: n.onDetailDataBound,
                    },
                    {
                      templateActions: d(({ data: w }) => [
                        l(
                          g,
                          {
                            'objet-type': 'value_lists',
                            data: w,
                          },
                          null,
                          8,
                          ['data'],
                        ),
                      ]),
                      templateChildActions: d(({ data: w }) => [
                        l(
                          T,
                          {
                            objetApiPrefix: 'values',
                            data: w,
                          },
                          null,
                          8,
                          ['data'],
                        ),
                      ]),
                      templateCode: d(({ data: w }) => [
                        l(
                          B,
                          {
                            objetType: 'values',
                            data: w,
                          },
                          null,
                          8,
                          ['data'],
                        ),
                      ]),
                      default: d(() => [
                        l(S, null, {
                          default: d(() => [
                            l(
                              i,
                              {
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
                                width: e.gridSettings.smallWidth,
                              },
                              null,
                              8,
                              ['width'],
                            ),
                            l(
                              i,
                              {
                                type: 'checkbox',
                                textAlign: 'Center',
                                allowResizing: false,
                                allowReordering: false,
                                lockColumn: true,
                                allowFiltering: false,
                                showInColumnChooser: false,
                                field: 'checkbox',
                                width: e.gridSettings.extraSmallWidth,
                              },
                              null,
                              8,
                              ['width'],
                            ),
                            l(
                              i,
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
                              i,
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
                            n.localeIsEnglish
                              ? p('', true)
                              : (u(),
                                O(
                                  i,
                                  {
                                    key: 0,
                                    field: 'name',
                                    headerText:
                                      e.trans.get('__JSON__.model.value.designation') +
                                      '(' +
                                      e.trans.get(o.keyLocale) +
                                      ')',
                                    type: 'string',
                                    sortComparer: e.sortComparerNaturalOrder,
                                    filter: e.gridSettings.filterWithoutCheckbox,
                                  },
                                  null,
                                  8,
                                  ['headerText', 'sortComparer', 'filter'],
                                )),
                            l(
                              i,
                              {
                                field: 'fallbackName',
                                headerText:
                                  e.trans.get('__JSON__.model.value.designation') +
                                  '(' +
                                  e.trans.get('__JSON__.valueList.language.en') +
                                  ')',
                                visible: n.localeIsEnglish,
                                type: 'string',
                                sortComparer: e.sortComparerNaturalOrder,
                                filter: e.gridSettings.filterWithoutCheckbox,
                              },
                              null,
                              8,
                              ['headerText', 'visible', 'sortComparer', 'filter'],
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
const Ee = D(ce, [['render', Se]]);
export { Ee as default };
