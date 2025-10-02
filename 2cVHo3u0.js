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
  _ as E,
  aL as M,
  k,
  p as T,
  s as u,
  i as r,
  E as C,
  aM as N,
  c as O,
  a as n,
  w as c,
  r as i,
  aN as I,
  o as R,
  b as t,
  d as p,
  v as h,
  e as v,
  t as g,
} from '../assets/app-BjImoLrr.js';
import { d as D } from './Nw-Fho2_.js';
import { G as F } from './DstRLUzo.js';
import { a as J } from './CHw12MFN.js';
import { g as P } from './D_eyCAsX.js';
import { c as q } from './DvWiUwH6.js';
import { d as B } from './Brc4hCJ1.js';
import { h as V } from './CKKuZvVl.js';
import { P as A } from './BpLTBrfQ.js';
import { o as L } from './sKBcFuym.js';
const U = {
  mixins: [D, k, P, q, B, J, L],
  props: {
    project_id: {
      required: false,
      default() {
        return null;
      },
    },
    model_type: {
      required: false,
      default() {
        return null;
      },
    },
    model_id: {
      required: false,
      default() {
        return null;
      },
    },
    model_name: {
      required: false,
      default() {
        return null;
      },
    },
    dateReport: {
      required: false,
      default() {
        return null;
      },
    },
  },
  components: {
    ProjectSelector: A,
    DocModuleEditor: M(
      N(() =>
        I(
          () => import('./BxIu9x40.js'),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
          ]),
        ),
      ),
    ),
    gridSelectionFiles: F,
    headerTemplate: V,
  },
  data() {
    let e = this.trans.get('__JSON__.events.content.newRequest');
    if (this.model_name) {
      e = this.trans.get('__JSON__.events.content.newEvent', { name: this.model_name });
    }
    return {
      event: {
        code: '',
        designation: '',
        discovered_at: null,
        discovered_by: null,
        status: null,
        type: null,
        project_id: null,
        description: '',
        object_id: this.model_id,
        object_type: this.model_type,
        filesId: [],
      },
      listFilesSelected: [],
      status: [],
      type: [],
      reporter: [],
      headerTitle: e,
      dateReported: this.dateReport ?? new Date(),
      fieldsReporter: {
        text: 'fullname',
        value: 'id',
      },
      width: '1000px',
      getDataWysiwyg: false,
    };
  },
  computed: {
    firstPositionsIds() {
      return this.model_type === 'Quickbrain\\Models\\Docsheet' ? { docsheets: [this.model_id] } : null;
    },
    parseContent() {
      return this.event.code + ' - ' + this.event.designation;
    },
  },
  methods: {
    updateProjectsSelected(e) {
      this.event.project_id = e.length > 0 ? e[0] : null;
    },
    changeSelection(e) {
      this.listFilesSelected = e;
    },
    saveCreate() {
      this.event.code = this.event.code.trim();
      if (
        !this.validateStringLength(this.event.code, this.trans.get('__JSON__.model.value.code'), 0) ||
        ((this.event.designation = this.event.designation.trim()),
        !this.validateStringLength(this.event.designation, this.trans.get('__JSON__.model.value.designation'))) ||
        (this.event.description &&
          ((this.event.description = this.event.description.trim()),
          !this.validateStringLength(
            this.event.description,
            this.trans.get('__JSON__.model.value.description'),
            0,
            4294967295,
          ))) ||
        !this.checkExist('__JSON__.main.modal.toast.error.enterStatus', this.event.status) ||
        !this.checkExist('__JSON__.main.modal.toast.error.enterType', this.event.type) ||
        !this.checkExist('__JSON__.main.modal.toast.error.enterDiscoverer', this.event.discovered_by)
      )
        return;
      this.event.discovered_at = this.dateReported.getTime();
      let e = { ...this.event };
      e.filesId = this.listFilesSelected.map((s) => s.id);
      if (!this.blockRequest) {
        this.blockRequest = true;
        u(document.getElementById('spinnerModalAddEvent'));
        axios
          .post('api/events', e)
          .then((s) => {
            this.blockRequest = false;
            r(document.getElementById('spinnerModalAddEvent'));
            if (s.status === 201) {
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
              C.$emit('addObjectGrid', {
                object: s.data.main.event,
                type: 'events',
              });
              if (this.event.project_id) {
                axios
                  .post('api/events/projects', {
                    project_ids: [this.event.project_id],
                    object_ids: [s.data.main.event.id],
                  })
                  .then((l) => {})
                  .catch((l) => {
                    console.error(l);
                  });
              }
              this.openNewObject(s.data.main.event.id, 'events');
              this.$emit('close', s.data.main.event);
            }
          })
          .catch((s) => {
            this.blockRequest = false;
            r(document.getElementById('spinnerModalAddEvent'));
            console.error(s);
          });
      }
    },
    getHtmlFromWysig() {
      this.getDataWysiwyg = true;
    },
    returnHtmlFromWysig(e) {
      this.event.description = e;
      this.getDataWysiwyg = false;
      this.saveCreate();
    },
  },
  mounted() {
    this.event.project_id = this.project_id;
    T({ target: document.getElementById('spinnerModalAddEvent') });
    u(document.getElementById('spinnerModalAddEvent'));
    axios
      .get('api/events/createData')
      .then((e) => {
        r(document.getElementById('spinnerModalAddEvent'));
        this.status = e.data.status;
        this.model_type
          ? this.model_type === 'Quickbrain\\Models\\Docsheet'
            ? (this.type = e.data.event_documentation_type)
            : (this.type = e.data.event_maintenance_type)
          : (this.type = e.data.request_type);
        this.reporter = e.data.users;
      })
      .catch((e) => {
        r(document.getElementById('spinnerModalAddEvent'));
        console.error(e);
      });
  },
  watch: {
    dateReported(e) {
      e instanceof Date ? (this.event.discovered_at = e.getTime()) : (this.event.discovered_at = null);
    },
  },
};
const W = { class: 'container' };
const H = { class: 'row' };
const G = { class: 'col-md-4' };
const Q = ['placeholder'];
const x = { class: 'col-md-4' };
const z = ['placeholder'];
const K = { class: 'col-md-4' };
const X = { class: 'row mt-4' };
const Y = { class: 'col-md-3' };
const Z = { class: 'col-md-3' };
const $ = { class: 'col-md-3' };
const ee = { class: 'col-md-3' };
const te = { class: 'row mt-4' };
const se = { class: 'col-md-12' };
const oe = { class: 'row mt-4' };
const ne = { class: 'col-md-12' };
const ie = { class: 'e-footer-content mt-4' };
function le(e, s, l, de, o, d) {
  const f = i('headerTemplate');
  const S = i('ejs-datetimepicker');
  const m = i('qb-dropdownlist');
  const y = i('project-selector');
  const b = i('doc-module-editor');
  const j = i('gridSelectionFiles');
  const _ = i('ejs-button');
  const w = i('ejs-dialog');
  R();
  return O('div', null, [
    n(
      w,
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
        headerTemplate: c(() => [n(f, { title: o.headerTitle }, null, 8, ['title'])]),
        templateContent: c(() => [
          t('div', null, [
            t('div', W, [
              s[3] || (s[3] = t('div', { id: 'spinnerModalAddEvent' }, null, -1)),
              t('div', H, [
                t('div', G, [
                  p(
                    t(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': s[0] || (s[0] = (a) => (o.event.code = a)),
                        placeholder: e.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      Q,
                    ),
                    [[h, o.event.code]],
                  ),
                ]),
                t('div', x, [
                  p(
                    t(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': s[1] || (s[1] = (a) => (o.event.designation = a)),
                        placeholder: e.trans.get('__JSON__.model.value.designation'),
                      },
                      null,
                      8,
                      z,
                    ),
                    [[h, o.event.designation]],
                  ),
                ]),
                t('div', K, [
                  n(
                    S,
                    {
                      modelValue: o.dateReported,
                      'onUpdate:modelValue': s[2] || (s[2] = (a) => (o.dateReported = a)),
                      placeholder: e.trans.get('__JSON__.events.content.selectDate'),
                      enableMask: true,
                      maskPlaceholder: e.maskPlaceholderValue,
                      timeFormat: e.userTimeFormatSyncfusion(),
                      showClearButton: false,
                      step: '5',
                      format: e.userDateTimeFormatSyncfusion(),
                    },
                    null,
                    8,
                    ['modelValue', 'placeholder', 'maskPlaceholder', 'timeFormat', 'format'],
                  ),
                ]),
              ]),
              t('div', X, [
                t('div', Y, [
                  n(
                    m,
                    {
                      fields: o.fieldsReporter,
                      dataSource: o.reporter,
                      vModel: o.event.discovered_by,
                      modelToUpdate: 'event.discovered_by',
                      placeholder: e.trans.get('__JSON__.events.content.selectReporter'),
                      selectDefaultUser: true,
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['fields', 'dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                t('div', Z, [
                  n(
                    m,
                    {
                      dataSource: o.type,
                      vModel: o.event.type,
                      modelToUpdate: 'event.type',
                      placeholder: e.trans.get('__JSON__.events.content.selectType'),
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                t('div', $, [
                  n(
                    m,
                    {
                      dataSource: o.status,
                      vModel: o.event.status,
                      modelToUpdate: 'event.status',
                      placeholder: e.trans.get('__JSON__.events.content.selectStatus'),
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                t('div', ee, [
                  n(
                    y,
                    {
                      'project-limit': 1,
                      objectType: 'events',
                      objectId: 'all',
                      'direct-update': false,
                      onProjectSelected: d.updateProjectsSelected,
                      enabled: !l.project_id,
                      projectIdsSelected: l.project_id ? [l.project_id] : [],
                      selectIfUnique: false,
                      leftPanel: false,
                    },
                    null,
                    8,
                    ['onProjectSelected', 'enabled', 'projectIdsSelected'],
                  ),
                ]),
              ]),
              t('div', te, [
                t('div', se, [
                  n(
                    b,
                    {
                      contentText: o.event.description,
                      parseContent: d.parseContent,
                      getContent: o.getDataWysiwyg,
                      'height-value': 300,
                      onReturnHtml: d.returnHtmlFromWysig,
                      firstPositionsIds: d.firstPositionsIds,
                    },
                    null,
                    8,
                    ['contentText', 'parseContent', 'getContent', 'onReturnHtml', 'firstPositionsIds'],
                  ),
                ]),
              ]),
              t('div', oe, [
                t('div', ne, [
                  n(
                    j,
                    {
                      'object-type': 'events',
                      onChangeSelection: d.changeSelection,
                    },
                    null,
                    8,
                    ['onChangeSelection'],
                  ),
                ]),
              ]),
            ]),
            t('div', ie, [
              t('span', null, [
                n(
                  _,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: c(() => [v(g(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                n(
                  _,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: d.getHtmlFromWysig,
                  },
                  {
                    default: c(() => [v(g(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const fe = E(U, [['render', le]]);
export { fe as m };
