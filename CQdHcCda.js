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
  k as T,
  aL as O,
  p as V,
  s as g,
  i as c,
  E as S,
  aM as C,
  c as J,
  a as i,
  w as r,
  r as l,
  aN as k,
  o as L,
  b as n,
  d as u,
  v as m,
  t as _,
  e as b,
} from '../assets/app-BjImoLrr.js';
import { d as E } from './Nw-Fho2_.js';
import { c as B } from './DvWiUwH6.js';
import { h as A } from './CKKuZvVl.js';
import { a as F, q as U } from './CHw12MFN.js';
import { G as D } from './DstRLUzo.js';
import { o as q } from './sKBcFuym.js';
const R = {
  name: 'modalCreateInstruction',
  components: {
    GridSelectionFiles: D,
    qbDropdownlist: U,
    DocModuleEditor: O(
      C(() =>
        k(
          () => import('./BxIu9x40.js'),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
          ]),
        ),
      ),
    ),
    headerTemplate: A,
  },
  mixins: [E, T, B, F, q],
  props: {
    objectType: {
      required: false,
      default() {
        return null;
      },
    },
    objectId: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      origin: [],
      type: [],
      typology: [],
      speciality: [],
      certification: [],
      maintenanceLevel: [],
      status: [],
      families: [],
      duration: null,
      dataInstruction: {
        code: null,
        title: null,
        description: '',
        duration: null,
        periodicity: null,
        max_weight: null,
        stop: false,
        maintenance_stock: false,
        origin: null,
        type: null,
        typology: null,
        speciality_ids: [],
        certification_ids: [],
        maintenance_level: null,
        status: null,
        family: null,
      },
      fieldsType: {
        text: 'name',
        value: 'id',
      },
      width: '1000px',
      getDataWysiwyg: false,
      lastInstruction: null,
      listFilesSelected: [],
    };
  },
  computed: {
    parseContent() {
      return this.dataInstruction.title;
    },
    supplementaryData() {
      return this.objectId && this.objectType
        ? {
            type: 'docmod',
            for: 'instructions',
            limitedTo: {
              object_type: this.objectType,
              object_id: this.objectId,
            },
          }
        : {
            type: 'docmod',
            for: 'instructions',
          };
    },
  },
  watch: {
    duration: {
      handler() {
        const t = /[0-9]{0,6}:[0-5][0-9]:[0-5][0-9]/g;
        if (this.duration && this.duration.match(t)) {
          if (this.duration[0] === '-') {
            this.duration = this.dataInstruction.duration;
            return;
          }
          this.dataInstruction.duration = this.duration;
        } else this.duration = this.dataInstruction.duration;
      },
    },
  },
  methods: {
    changeSelectionFiles(t) {
      this.listFilesSelected = t;
    },
    getHtmlFromWysig() {
      this.getDataWysiwyg = true;
    },
    returnHtmlFromWysig(t) {
      this.dataInstruction.description = t;
      this.getDataWysiwyg = false;
      this.saveCreate();
    },
    saveCreate() {
      if (this.dataInstruction.code) {
        this.dataInstruction.code = this.dataInstruction.code.trim();
      }
      if (
        !this.validateStringLength(this.dataInstruction.code, this.trans.get('__JSON__.model.value.code'), 0) ||
        (this.dataInstruction.title && (this.dataInstruction.title = this.dataInstruction.title.trim()),
        !this.validateStringLength(this.dataInstruction.title, this.trans.get('__JSON__.model.value.title'))) ||
        (this.dataInstruction.max_weight &&
          !this.inputControlePositif(
            '__JSON__.main.modal.toast.error.enterPositiveNumber',
            this.dataInstruction.max_weight,
            this.trans.get('__JSON__.model.value.max_weight'),
          )) ||
        (this.dataInstruction.description &&
          ((this.dataInstruction.description = this.dataInstruction.description.trim()),
          !this.validateStringLength(
            this.dataInstruction.description,
            this.trans.get('__JSON__.model.value.description'),
            0,
            4294967295,
          )))
      )
        return;
      let t = { ...this.dataInstruction };
      if (this.objectType && this.objectId) {
        t.objectType = this.objectType;
        t.objectId = this.objectId;
      }
      t.filesId = this.listFilesSelected.map((o) => o.id);
      if (!this.blockRequest) {
        this.blockRequest = true;
        g(document.getElementById('spinnerModalAdd'));
        axios
          .post('api/instructions', t)
          .then((o) => {
            this.blockRequest = false;
            c(document.getElementById('spinnerModalAdd'));
            this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
            S.$emit('addObjectGrid', {
              object: o.data.main.instruction,
              type: 'instructions',
            });
            if (this.objectType && this.objectId) {
              S.$emit('addInstructionsListPanel', {
                object_id: this.objectId,
                object_type: this.objectType,
                instruction: o.data.main.instruction,
              });
              this.openNewObject(o.data.main.instruction.id, 'instructions');
            }
            this.$emit('close', o.data.main.instruction);
          })
          .catch((o) => {
            this.blockRequest = false;
            c(document.getElementById('spinnerModalAdd'));
            console.error(o);
          });
      }
    },
    incrementStringNumber(t) {
      const o = t.match(/(.*?)(\d+)$/);
      if (o) {
        const y = o[1];
        const p = o[2];
        const h = (parseInt(o[2]) + 1).toString().padStart(o[2].length, '0');
        return o[1] + h;
      } else return null;
    },
  },
  mounted() {
    V({ target: document.getElementById('spinnerModalAdd') });
    g(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/instructions/createData')
      .then((t) => {
        c(document.getElementById('spinnerModalAdd'));
        this.origin = t.data.origin;
        this.type = t.data.type;
        this.typology = t.data.typology;
        this.speciality = t.data.speciality;
        this.certification = t.data.certification;
        this.maintenanceLevel = t.data.maintenanceLevel;
        this.status = t.data.status;
        this.families = t.data.families;
      })
      .catch((t) => {
        c(document.getElementById('spinnerModalAdd'));
        console.error(t);
      });
    g(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/instructions/last')
      .then((t) => {
        c(document.getElementById('spinnerModalAdd'));
        this.lastInstruction = t.data;
        if (this.lastInstruction) {
          this.dataInstruction.code = this.incrementStringNumber(this.lastInstruction.code);
        }
      })
      .catch((t) => {
        c(document.getElementById('spinnerModalAdd'));
        console.error(t);
      });
  },
};
const W = { class: 'container mt-4' };
const H = { class: 'row' };
const P = { class: 'col-md-4' };
const G = ['placeholder'];
const z = { class: 'col-md-4' };
const K = ['placeholder'];
const Q = { class: 'col-md-4' };
const X = ['placeholder'];
const Y = { class: 'row mt-4' };
const Z = { class: 'col-md-4' };
const x = { class: 'col-md-4' };
const $ = { class: 'col-md-4' };
const tt = { class: 'row mt-4' };
const et = { class: 'col-md-4' };
const nt = { class: 'col-md-4' };
const ot = { class: 'col-md-4' };
const it = { class: 'row mt-4' };
const st = { class: 'col-md-4' };
const lt = { class: 'col-md-4' };
const at = ['placeholder'];
const dt = { class: 'col-md-4' };
const ct = { class: 'row mt-4' };
const rt = { class: 'col-md-1' };
const ut = { class: 'col-md-3' };
const mt = { class: 'col-md-2' };
const _t = { class: 'col-md-3' };
const pt = { class: 'row mt-4' };
const ht = { class: 'col-md-12' };
const gt = { class: 'row mt-4' };
const yt = { class: 'col-md-12' };
const vt = { class: 'e-footer-content mt-4' };
function It(t, o, y, p, e, a) {
  const h = l('headerTemplate');
  const d = l('qb-dropdownlist');
  const v = l('ejs-multiselect');
  const I = l('ejs-switch');
  const w = l('doc-module-editor');
  const N = l('grid-selection-files');
  const f = l('ejs-button');
  const j = l('ejs-dialog');
  L();
  return J('div', null, [
    i(
      j,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: e.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: t.animationSettings,
        close: t.closeModal,
        visible: t.visible,
        isModal: t.isModal,
      },
      {
        headerTemplate: r(() => [
          i(h, { title: t.trans.get('__JSON__.instruction.content.newInstruction') }, null, 8, ['title']),
        ]),
        templateContent: r(() => [
          n('div', null, [
            n('div', W, [
              o[8] || (o[8] = n('div', { id: 'spinnerModalAdd' }, null, -1)),
              n('div', H, [
                n('div', P, [
                  u(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[0] || (o[0] = (s) => (e.dataInstruction.code = s)),
                        placeholder: t.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      G,
                    ),
                    [[m, e.dataInstruction.code]],
                  ),
                ]),
                n('div', z, [
                  u(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[1] || (o[1] = (s) => (e.dataInstruction.title = s)),
                        placeholder: t.trans.get('__JSON__.model.value.title'),
                      },
                      null,
                      8,
                      K,
                    ),
                    [[m, e.dataInstruction.title]],
                  ),
                ]),
                n('div', Q, [
                  u(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[2] || (o[2] = (s) => (e.duration = s)),
                        placeholder: t.trans.get('__JSON__.instruction.value.duration'),
                      },
                      null,
                      8,
                      X,
                    ),
                    [[m, e.duration, void 0, { lazy: true }]],
                  ),
                ]),
              ]),
              n('div', Y, [
                n('div', Z, [
                  i(
                    d,
                    {
                      dataSource: e.origin,
                      vModel: e.dataInstruction.origin,
                      modelToUpdate: 'dataInstruction.origin',
                      placeholder: t.trans.get('__JSON__.model.value.origin'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                n('div', x, [
                  i(
                    d,
                    {
                      dataSource: e.type,
                      vModel: e.dataInstruction.type,
                      modelToUpdate: 'dataInstruction.type',
                      placeholder: t.trans.get('__JSON__.model.value.type'),
                      select: t.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                n('div', $, [
                  i(
                    d,
                    {
                      dataSource: e.typology,
                      vModel: e.dataInstruction.typology,
                      modelToUpdate: 'dataInstruction.typology',
                      placeholder: t.trans.get('__JSON__.model.value.typology'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              n('div', tt, [
                n('div', et, [
                  i(
                    v,
                    {
                      dataSource: e.speciality,
                      fields: e.fieldsType,
                      placeholder: t.trans.get('__JSON__.model.value.speciality'),
                      modelValue: e.dataInstruction.speciality_ids,
                      'onUpdate:modelValue': o[3] || (o[3] = (s) => (e.dataInstruction.speciality_ids = s)),
                      allowFiltering: true,
                    },
                    null,
                    8,
                    ['dataSource', 'fields', 'placeholder', 'modelValue'],
                  ),
                ]),
                n('div', nt, [
                  i(
                    v,
                    {
                      dataSource: e.certification,
                      fields: e.fieldsType,
                      placeholder: t.trans.get('__JSON__.model.value.certification'),
                      modelValue: e.dataInstruction.certification_ids,
                      'onUpdate:modelValue': o[4] || (o[4] = (s) => (e.dataInstruction.certification_ids = s)),
                      allowFiltering: true,
                    },
                    null,
                    8,
                    ['dataSource', 'fields', 'placeholder', 'modelValue'],
                  ),
                ]),
                n('div', ot, [
                  i(
                    d,
                    {
                      dataSource: e.maintenanceLevel,
                      vModel: e.dataInstruction.maintenance_level,
                      modelToUpdate: 'dataInstruction.maintenance_level',
                      placeholder: t.trans.get('__JSON__.model.value.maintenance_level'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              n('div', it, [
                n('div', st, [
                  i(
                    d,
                    {
                      dataSource: e.status,
                      vModel: e.dataInstruction.status,
                      modelToUpdate: 'dataInstruction.status',
                      placeholder: t.trans.get('__JSON__.model.value.status'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                n('div', lt, [
                  u(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        'onUpdate:modelValue': o[5] || (o[5] = (s) => (e.dataInstruction.max_weight = s)),
                        placeholder: t.trans.get('__JSON__.model.value.max_weight'),
                      },
                      null,
                      8,
                      at,
                    ),
                    [[m, e.dataInstruction.max_weight]],
                  ),
                ]),
                n('div', dt, [
                  i(
                    d,
                    {
                      dataSource: e.families,
                      vModel: e.dataInstruction.family,
                      modelToUpdate: 'dataInstruction.family',
                      placeholder: t.trans.get('__JSON__.model.value.family'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              n('div', ct, [
                n('span', rt, _(t.trans.get('__JSON__.model.value.stop')) + ' : ', 1),
                n('div', ut, [
                  i(
                    I,
                    {
                      checked: e.dataInstruction.stop,
                      modelValue: e.dataInstruction.stop,
                      'onUpdate:modelValue': o[6] || (o[6] = (s) => (e.dataInstruction.stop = s)),
                    },
                    null,
                    8,
                    ['checked', 'modelValue'],
                  ),
                ]),
                n('span', mt, _(t.trans.get('__JSON__.model.value.maintenance_stock')) + ' : ', 1),
                n('div', _t, [
                  i(
                    I,
                    {
                      checked: e.dataInstruction.maintenance_stock,
                      modelValue: e.dataInstruction.maintenance_stock,
                      'onUpdate:modelValue': o[7] || (o[7] = (s) => (e.dataInstruction.maintenance_stock = s)),
                    },
                    null,
                    8,
                    ['checked', 'modelValue'],
                  ),
                ]),
              ]),
              n('div', pt, [
                n('div', ht, [
                  i(
                    w,
                    {
                      contentText: e.dataInstruction.description,
                      parseContent: a.parseContent,
                      getContent: e.getDataWysiwyg,
                      'height-value': 300,
                      'supplementary-data': a.supplementaryData,
                      onReturnHtml: a.returnHtmlFromWysig,
                    },
                    null,
                    8,
                    ['contentText', 'parseContent', 'getContent', 'supplementary-data', 'onReturnHtml'],
                  ),
                ]),
              ]),
              n('div', gt, [
                n('div', yt, [
                  i(
                    N,
                    {
                      'object-type': 'tasks',
                      onChangeSelection: a.changeSelectionFiles,
                    },
                    null,
                    8,
                    ['onChangeSelection'],
                  ),
                ]),
              ]),
              n('div', vt, [
                n('span', null, [
                  i(
                    f,
                    {
                      class: 'e-control e-btn sendButton',
                      onClick: t.closeModal,
                    },
                    {
                      default: r(() => [b(_(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                      _: 1,
                    },
                    8,
                    ['onClick'],
                  ),
                  i(
                    f,
                    {
                      cssClass: 'e-info',
                      class: 'e-control e-btn e-primary sendButton',
                      onClick: a.getHtmlFromWysig,
                    },
                    {
                      default: r(() => [b(_(t.trans.get('__JSON__.main.modal.button.save')), 1)]),
                      _: 1,
                    },
                    8,
                    ['onClick'],
                  ),
                ]),
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
const Tt = M(R, [['render', It]]);
export { Tt as M };
