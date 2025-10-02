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
  _ as M,
  c as f,
  a,
  f as b,
  g as u,
  r as d,
  o as r,
  k as V,
  aL as I,
  s as S,
  i as p,
  E as A,
  p as E,
  aM as j,
  w as c,
  aN as B,
  b as s,
  n as C,
  d as m,
  v as _,
  e as w,
  t as P,
} from '../assets/app-BjImoLrr.js';
import { d as J } from './Nw-Fho2_.js';
import { G as x, t as R } from './DstRLUzo.js';
import { c as U } from './DvWiUwH6.js';
import { h as q } from './CKKuZvVl.js';
import { a as L } from './CHw12MFN.js';
import { d as W } from './BNlbYZgu.js';
import { o as G } from './sKBcFuym.js';
import { V as z } from './C3YRlhOp.js';
const K = {
  components: { ModalAddCie: W },
  props: { object_api_prefix: { required: true } },
  data() {
    return { showModal: false };
  },
  methods: {
    showModalObject() {
      this.showModal = true;
    },
    updateFromButton(e) {
      this.showModal = false;
      this.$emit('change', e.id);
    },
  },
};
function X(e, t, i, g, o, n) {
  const h = d('ejs-button');
  const D = d('modal-add-cie');
  r();
  return f('span', null, [
    a(
      h,
      {
        style: { 'border-radius': '50%' },
        cssClass: 'e-info ms-2',
        iconCss: 'e-icons e-plus-icon sf-icon-addition-',
        onClick: n.showModalObject,
      },
      null,
      8,
      ['onClick'],
    ),
    o.showModal && i.object_api_prefix === 'companies'
      ? (r(),
        b(
          D,
          {
            key: 0,
            onClose: n.updateFromButton,
            openRightPanelAfter: false,
          },
          null,
          8,
          ['onClose'],
        ))
      : u('', true),
  ]);
}
const Y = M(K, [['render', X]]);
const H = {
  components: {
    Pdf: z,
    templateIcon: R,
    ButtonAddObject: Y,
    gridSelectionFiles: x,
    DocModuleEditor: I(
      j(() =>
        B(
          () => import('./BxIu9x40.js'),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
          ]),
        ),
      ),
    ),
    headerTemplate: q,
  },
  mixins: [J, V, U, L, G],
  props: {
    dataDoc: {
      required: false,
      default() {
        return {
          code: '',
          designation: '',
          version: 0,
          revision: '',
          status: translate.get('__JSON__.valueList.status.draft'),
          type: '',
          client_status: '',
          supplier: '',
          comment: '',
        };
      },
    },
    listFileSelected: {
      required: false,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      getDataWysiwyg: false,
      listFilesSelected: [],
      objet: 'dochsheet',
      width: '1000px',
      allowFiltering: true,
      type: [],
      clientStatus: [],
      supplier: [],
      fieldsSupplier: {
        text: 'designation',
        value: 'id',
      },
      correspCodePattern: null,
      patterns: [],
      dataDocDuplicate: { ...this.dataDoc },
      dataViewer: null,
    };
  },
  watch: {
    dataDoc() {
      this.dataDocDuplicate = { ...this.dataDoc };
    },
  },
  mounted() {
    E({ target: document.getElementById('spinnerModalAdd') });
    this.getData();
  },
  methods: {
    cleanDataPdf() {
      this.dataViewer = null;
      this.width = '1000px';
    },
    displayPdf(e, t) {
      if (this.dataViewer) {
        this.dataViewer = null;
        setTimeout(() => {
          this.displayPdf(e, t);
        }, 100);
        return;
      }
      this.width = '1500px';
      this.dataViewer = {
        file: {
          id: e,
          title: t,
          has_textlayer: false,
          truePDF: true,
          uuid: UUID.generate(),
        },
        uuid: UUID.generate(),
      };
    },
    updateSuppliers(e) {
      this.dataDocDuplicate.supplier = e;
      this.getData();
    },
    getData() {
      S(document.getElementById('spinnerModalAdd'));
      axios
        .get('api/docsheets/createData')
        .then((e) => {
          p(document.getElementById('spinnerModalAdd'));
          this.type = e.data.type;
          this.clientStatus = e.data.clientStatus;
          this.supplier = e.data.companies;
          this.patterns = e.data.patterns;
          this.calculPatternCode();
        })
        .catch((e) => {
          p(document.getElementById('spinnerModalAdd'));
          console.error(e);
        });
    },
    calculPatternCode() {
      this.correspCodePattern = this.isCodeMatchingAnyPattern();
    },
    isCodeMatchingAnyPattern() {
      return !this.dataDocDuplicate.code || !this.patterns.length
        ? null
        : this.patterns.some((e) => {
            const t = e.regex.match(/^\/(.+)\/([gimsuy]*)$/);
            return t ? new RegExp(t[1], t[2]).test(this.dataDocDuplicate.code) : null;
          });
    },
    textContent(e) {
      if (e != '') {
        this.getDataWysiwyg = true;
        this.dataDocDuplicate.comment = e;
      }
    },
    filteringClientStatus(e) {
      this.filterCombobox(e, this.clientStatus, 'name');
    },
    filteringType(e) {
      this.filterCombobox(e, this.type, 'name');
    },
    filteringSupplier(e) {
      this.filterCombobox(e, this.supplier, 'designation');
    },
    changeSelection(e) {
      let t = ['DAWE', 'PDF', 'PANO'];
      if (!e.find((i) => i.primary)) {
        let i = false;
        e: for (let g of t)
          for (let o of e)
            if (o.extension === g) {
              o.primary = true;
              i = true;
              break e;
            }
        if (!i) {
          if (e.length) {
            e[0].primary = true;
          }
        }
      }
      this.listFilesSelected = e;
    },
    launchInspector() {
      if (!this.listFilesSelected.filter((t) => t.extension === 'PDF' && t.primary).length) {
        this.showCenterToast(this.trans.get('__JSON__.docsheet.toast.info.needPdfPrimary'), 'e-toast-info');
        return;
      }
      let e = this.listFilesSelected.find((t) => t.extension === 'PDF' && t.primary).id;
      S(document.getElementById('spinnerModalAdd'));
      axios
        .get(
          'api/docsheets/' + this.listFilesSelected.find((t) => t.extension === 'PDF' && t.primary).id + '/e-spector',
        )
        .then((t) => {
          p(document.getElementById('spinnerModalAdd'));
          let i = t.data;
          this.dataDocDuplicate.code = t.data.code;
          this.dataDocDuplicate.designation = t.data.designation;
          this.dataDocDuplicate.type = t.data.type;
          this.dataDocDuplicate.supplier = t.data.supplier;
          this.dataDocDuplicate.revision = t.data.revision;
        })
        .catch((t) => {
          console.error(t);
          p(document.getElementById('spinnerModalAdd'));
        });
    },
    saveCreate() {
      this.dataDocDuplicate.code = this.dataDocDuplicate.code.trim();
      if (
        !this.validateStringLength(this.dataDocDuplicate.code, this.trans.get('__JSON__.model.value.code')) ||
        ((this.dataDocDuplicate.designation = this.dataDocDuplicate.designation.trim()),
        !this.validateStringLength(
          this.dataDocDuplicate.designation,
          this.trans.get('__JSON__.model.value.designation'),
        ))
      )
        return;
      let e = this.listFilesSelected.find((i) => i.primary);
      if (e) {
        this.dataDocDuplicate.primary = e.id;
      }
      let t = { ...this.dataDocDuplicate };
      t.filesId = this.listFilesSelected.map((i) => i.id);
      t.status = 'Draft';
      if (!this.blockRequest) {
        this.blockRequest = true;
        S(document.getElementById('spinnerModalAdd'));
        axios
          .post('api/docsheets', t)
          .then((i) => {
            this.blockRequest = false;
            p(document.getElementById('spinnerModalAdd'));
            if (i.status === 201) {
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
              A.$emit('addObjectGrid', {
                object: i.data.main.docsheet,
                type: 'docsheets',
              });
              this.openNewObject(i.data.main.docsheet.id, 'docsheets');
              this.closeModal();
            }
            this.getDataWysiwyg = false;
          })
          .catch((i) => {
            this.blockRequest = false;
            this.getDataWysiwyg = false;
            p(document.getElementById('spinnerModalAdd'));
            console.error(i);
          });
      }
    },
  },
};
const Q = {
  key: 2,
  class: 'tooltipSyncfusion-inline',
};
const Z = { class: 'row' };
const $ = { class: 'row' };
const ee = { class: 'col-md-4' };
const te = ['placeholder'];
const oe = ['placeholder'];
const se = {
  key: 0,
  class: 'col-md-1 fitContent',
};
const ie = { class: 'row mt-2' };
const ae = { class: 'col-md-4' };
const ne = ['placeholder'];
const le = { class: 'col-md-4' };
const de = ['placeholder'];
const ce = { class: 'col-md-4' };
const re = ['placeholder'];
const pe = { class: 'row mt-2' };
const ue = { class: 'col-md-4' };
const he = { class: 'col-md-4' };
const me = { class: 'col-md-4' };
const _e = { class: 'row mt-2' };
const fe = { class: 'col-md-12' };
const ge = { class: 'row mt-2' };
const De = { class: 'col-md-12' };
const ye = {
  key: 0,
  class: 'col-md-5',
};
const ve = { class: 'container-pdf-viewer' };
const Se = { class: 'e-footer-content mt-2' };
function Ce(e, t, i, g, o, n) {
  const h = d('ejs-tooltip');
  const D = d('headerTemplate');
  const y = d('ejs-button');
  const v = d('qb-dropdownlist');
  const N = d('button-add-object');
  const O = d('DocModuleEditor');
  const k = d('gridSelectionFiles');
  const F = d('pdf');
  const T = d('ejs-dialog');
  r();
  return f('div', null, [
    a(
      T,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: o.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        close: e.closeModal,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: c(() => [
          a(
            D,
            { title: e.trans.get('__JSON__.docsheet.content.newDocsheet') },
            {
              previous: c(() => [
                o.correspCodePattern !== null && !o.correspCodePattern
                  ? (r(),
                    b(
                      h,
                      {
                        key: 0,
                        content: this.trans.get('__JSON__.main.content.codeNotInPattern'),
                        position: 'TopCenter',
                        animation: e.default_SF_Props.animationTooltip,
                        class: 'tooltipSyncfusion-inline',
                      },
                      {
                        default: c(() => [
                          ...(t[7] || (t[7] = [s('span', { class: 'sf-icon-warning pointer badge-red' }, null, -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content', 'animation'],
                    ))
                  : u('', true),
                o.correspCodePattern !== null && o.correspCodePattern
                  ? (r(),
                    b(
                      h,
                      {
                        key: 1,
                        content: this.trans.get('__JSON__.main.content.codeInPattern'),
                        position: 'TopCenter',
                        animation: e.default_SF_Props.animationTooltip,
                        class: 'tooltipSyncfusion-inline',
                      },
                      {
                        default: c(() => [
                          ...(t[8] ||
                            (t[8] = [s('span', { class: 'sf-icon-check-01 pointer badge-green' }, null, -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content', 'animation'],
                    ))
                  : u('', true),
                o.correspCodePattern === null ? (r(), f('div', Q)) : u('', true),
              ]),
              _: 1,
            },
            8,
            ['title'],
          ),
        ]),
        templateContent: c(() => [
          s('div', null, [
            s(
              'div',
              {
                class: C(['mt-2', o.dataViewer ? '' : 'container']),
              },
              [
                s('div', Z, [
                  s(
                    'div',
                    { class: C(o.dataViewer ? 'col-md-7' : 'col-md-12') },
                    [
                      t[9] || (t[9] = s('div', { id: 'spinnerModalAdd' }, null, -1)),
                      s('div', $, [
                        s('div', ee, [
                          m(
                            s(
                              'input',
                              {
                                class: 'e-input mb-0',
                                type: 'text',
                                'onUpdate:modelValue': t[0] || (t[0] = (l) => (o.dataDocDuplicate.code = l)),
                                placeholder: e.trans.get('__JSON__.model.value.code'),
                                onKeyup: t[1] || (t[1] = (...l) => n.calculPatternCode && n.calculPatternCode(...l)),
                              },
                              null,
                              40,
                              te,
                            ),
                            [[_, o.dataDocDuplicate.code]],
                          ),
                        ]),
                        s(
                          'div',
                          { class: C(e.can('show inspector', 'docsheets') ? 'col-md-7' : 'col-md-8') },
                          [
                            m(
                              s(
                                'input',
                                {
                                  class: 'e-input mb-0',
                                  type: 'text',
                                  'onUpdate:modelValue': t[2] || (t[2] = (l) => (o.dataDocDuplicate.designation = l)),
                                  placeholder: e.trans.get('__JSON__.model.value.designation'),
                                },
                                null,
                                8,
                                oe,
                              ),
                              [[_, o.dataDocDuplicate.designation]],
                            ),
                          ],
                          2,
                        ),
                        e.can('show inspector', 'docsheets')
                          ? (r(),
                            f('div', se, [
                              a(
                                h,
                                {
                                  content: e.trans.get('__JSON__.docsheet.content.extractFileMetadata'),
                                  animation: e.default_SF_Props.animationTooltip,
                                },
                                {
                                  default: c(() => [
                                    a(
                                      y,
                                      {
                                        iconCss: 'e-icons bigger-button-icon e-assistview-icon',
                                        cssClass: 'e-flat',
                                        onClick: n.launchInspector,
                                      },
                                      null,
                                      8,
                                      ['onClick'],
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['content', 'animation'],
                              ),
                            ]))
                          : u('', true),
                      ]),
                      s('div', ie, [
                        s('div', ae, [
                          m(
                            s(
                              'input',
                              {
                                class: 'e-input mb-0',
                                type: 'text',
                                disabled: '',
                                'onUpdate:modelValue': t[3] || (t[3] = (l) => (o.dataDocDuplicate.version = l)),
                                placeholder: e.trans.get('__JSON__.docsheet.value.version'),
                              },
                              null,
                              8,
                              ne,
                            ),
                            [[_, o.dataDocDuplicate.version]],
                          ),
                        ]),
                        s('div', le, [
                          m(
                            s(
                              'input',
                              {
                                class: 'e-input mb-0',
                                type: 'text',
                                'onUpdate:modelValue': t[4] || (t[4] = (l) => (o.dataDocDuplicate.status = l)),
                                placeholder: e.trans.get('__JSON__.docsheet.value.status'),
                                disabled: '',
                              },
                              null,
                              8,
                              de,
                            ),
                            [[_, o.dataDocDuplicate.status]],
                          ),
                        ]),
                        s('div', ce, [
                          m(
                            s(
                              'input',
                              {
                                class: 'e-input mb-0',
                                type: 'text',
                                'onUpdate:modelValue': t[5] || (t[5] = (l) => (o.dataDocDuplicate.revision = l)),
                                placeholder: e.trans.get('__JSON__.docsheet.value.revision'),
                              },
                              null,
                              8,
                              re,
                            ),
                            [[_, o.dataDocDuplicate.revision]],
                          ),
                        ]),
                      ]),
                      s('div', pe, [
                        s('div', ue, [
                          a(
                            v,
                            {
                              dataSource: o.clientStatus,
                              vModel: o.dataDocDuplicate.client_status,
                              modelToUpdate: 'dataDocDuplicate.client_status',
                              placeholder: e.trans.get('__JSON__.docsheet.content.selectClientStatus'),
                              select: e.selectValueList,
                            },
                            null,
                            8,
                            ['dataSource', 'vModel', 'placeholder', 'select'],
                          ),
                        ]),
                        s('div', he, [
                          a(
                            v,
                            {
                              dataSource: o.type,
                              vModel: o.dataDocDuplicate.type,
                              modelToUpdate: 'dataDocDuplicate.type',
                              placeholder: e.trans.get('__JSON__.docsheet.content.selectType'),
                              select: e.selectValueList,
                            },
                            null,
                            8,
                            ['dataSource', 'vModel', 'placeholder', 'select'],
                          ),
                        ]),
                        s('div', me, [
                          a(
                            v,
                            {
                              fields: o.fieldsSupplier,
                              dataSource: o.supplier,
                              vModel: o.dataDocDuplicate.supplier,
                              modelToUpdate: 'dataDocDuplicate.supplier',
                              placeholder: e.trans.get('__JSON__.docsheet.content.selectSupplier'),
                              select: e.selectValueList,
                              width: '85%',
                            },
                            null,
                            8,
                            ['fields', 'dataSource', 'vModel', 'placeholder', 'select'],
                          ),
                          a(
                            N,
                            {
                              object_api_prefix: 'companies',
                              onChange: n.updateSuppliers,
                            },
                            null,
                            8,
                            ['onChange'],
                          ),
                        ]),
                      ]),
                      s('div', _e, [
                        s('div', fe, [
                          a(
                            O,
                            {
                              onTextContent: n.textContent,
                              contentText: o.dataDocDuplicate.comment,
                              getContent: o.getDataWysiwyg,
                              class: 'e-multi-line-input mt-2',
                              style: { width: '100%' },
                              placeholder: e.trans.get('__JSON__.docsheet.content.enterComment'),
                            },
                            null,
                            8,
                            ['onTextContent', 'contentText', 'getContent', 'placeholder'],
                          ),
                        ]),
                      ]),
                      s('div', ge, [
                        s('div', De, [
                          a(
                            k,
                            {
                              'object-type': 'docsheets',
                              onChangeSelection: n.changeSelection,
                              'file-preselected': i.listFileSelected,
                              showViewerPdf: true,
                              onDisplayPdf: n.displayPdf,
                            },
                            null,
                            8,
                            ['onChangeSelection', 'file-preselected', 'onDisplayPdf'],
                          ),
                        ]),
                      ]),
                    ],
                    2,
                  ),
                  o.dataViewer
                    ? (r(),
                      f('div', ye, [
                        s('div', ve, [
                          s('span', {
                            class: 'sf-icon-cross-close btn-close-pdf',
                            onClick: t[6] || (t[6] = (...l) => n.cleanDataPdf && n.cleanDataPdf(...l)),
                          }),
                          a(
                            F,
                            {
                              'data-viewer': o.dataViewer,
                              settings: {
                                isCentralPanel: false,
                                isPopup: true,
                              },
                            },
                            null,
                            8,
                            ['data-viewer'],
                          ),
                        ]),
                      ]))
                    : u('', true),
                ]),
              ],
              2,
            ),
            s('div', Se, [
              s('span', null, [
                a(
                  y,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: c(() => [w(P(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                a(
                  y,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: n.saveCreate,
                  },
                  {
                    default: c(() => [w(P(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
      ['width', 'animationSettings', 'close', 'visible', 'isModal'],
    ),
  ]);
}
const Ve = M(H, [
  ['render', Ce],
  ['__scopeId', 'data-v-b65bc8fc'],
]);
export { Y as B, Ve as d };
