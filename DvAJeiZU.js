import { h as y } from './CKKuZvVl.js';
import {
  _ as V,
  k as N,
  p as O,
  s as J,
  i as f,
  c,
  a as r,
  w as p,
  r as _,
  o as d,
  b as i,
  g as a,
  f as S,
  t as h,
  e as g,
} from '../assets/app-BjImoLrr.js';
import { d as R } from './DF3-5v4V.js';
import { P as w } from './BpLTBrfQ.js';
import { q as M, a as q } from './CHw12MFN.js';
const B = {
  mixins: [N, R, q],
  components: {
    qbDropdownlist: M,
    ProjectSelector: w,
    headerTemplate: y,
  },
  props: {
    objectClass: { required: true },
    objects: { required: true },
  },
  data() {
    return {
      animationSettings: { effect: 'None' },
      promptWidth: '600px',
      isVisible: true,
      addAgents: true,
      addDocumentation: true,
      addItems: true,
      addEvents: true,
      limitByProject: false,
      addFinishedAndValidated: true,
      addFrequency: true,
      addEquipmentList: true,
      projectSelectedIds: null,
      listStatus: [],
      endLoading: false,
      status_ids: [],
      fieldsStatus: {
        value: 'id',
        text: 'name',
      },
    };
  },
  computed: {
    headerTitle() {
      switch (this.objectClass) {
        case 'tasks':
          return this.trans.get('__JSON__.report.content.createReportTaskTitle');
        case 'instructions':
          return this.trans.get('__JSON__.report.content.createReportInstructionTitle');
        case 'movements':
          return this.trans.get('__JSON__.report.content.createReportMovementTitle');
        case 'docreviews':
          return this.trans.get('__JSON__.report.content.createReportDocreviewTitle');
      }
      return null;
    },
    reportContent() {
      switch (this.objectClass) {
        case 'tasks':
          if (this.objects.length > 1) return this.trans.get('__JSON__.report.content.createReportTaskContent');
          break;
        case 'instructions':
          if (this.objects.length > 1) return this.trans.get('__JSON__.report.content.createReportInstructionContent');
          break;
        case 'movements':
          return this.objects.length > 1
            ? this.trans.get('__JSON__.report.content.createReportMovementContent')
            : this.trans.get('__JSON__.report.content.createReportMovementContentConfirmation');
        case 'docreviews':
          if (this.objects.length > 1) return this.trans.get('__JSON__.report.content.createReportDocreviewContent');
          break;
      }
      return null;
    },
  },
  methods: {
    closeModal() {
      this.$refs.modalSelectReport ? this.$refs.modalSelectReport.hide() : this.onModalClose();
    },
    onModalClose() {
      this.$emit('close');
    },
    updateProjectsSelected(s) {
      this.projectSelectedIds = s;
    },
    multiplePDFSelected() {
      this.createReport(true);
    },
    onePDFSelected() {
      this.createReport(false);
    },
    createReport(s) {
      let t = this.userDateFormat(new Date());
      let o = '';
      switch (this.objectClass) {
        case 'tasks':
          if (s) o = this.trans.get('__JSON__.report.content.taskReport') + ' - ' + t + '.zip';
          else if (this.objects.length === 1) {
            let n = this.objects[0];
            o = this.objects[0].code + ' - ' + this.objects[0].designation + ' - ' + this.objects[0].id + '.pdf';
          } else o = this.trans.get('__JSON__.report.content.taskReport') + ' - ' + t + '.pdf';
          break;
        case 'instructions':
          if (s) o = this.trans.get('__JSON__.report.content.instructionReport') + ' - ' + t + '.zip';
          else if (this.objects.length === 1) {
            let n = this.objects[0];
            o = this.objects[0].code + ' - ' + this.objects[0].title + ' - ' + this.objects[0].id + '.pdf';
          } else o = this.trans.get('__JSON__.report.content.instructionReport') + ' - ' + t + '.pdf';
          break;
        case 'movements':
          if (s) o = this.trans.get('__JSON__.report.content.movementReport') + ' - ' + t + '.zip';
          else if (this.objects.length === 1) {
            let n = this.objects[0];
            o = this.objects[0].code + ' - ' + this.objects[0].id + '.pdf';
          } else o = this.trans.get('__JSON__.report.content.movementReport') + ' - ' + t + '.pdf';
          break;
        case 'docreviews':
          if (s) o = this.trans.get('__JSON__.report.content.docreviewReport') + ' - ' + t + '.zip';
          else if (this.objects.length === 1) {
            let n = this.objects[0];
            o = this.objects[0].code + ' - ' + this.objects[0].id + '.pdf';
          } else o = this.trans.get('__JSON__.report.content.docreviewReport') + ' - ' + t + '.pdf';
          break;
      }
      axios
        .post('api/reports/pdfReport', {
          ids: this.objects.map((n) => n.id),
          objectClass: this.objectClass,
          multiplePdfs: s,
          withs: {
            agents: this.addAgents,
            documentation: this.addDocumentation,
            items: this.addItems,
            events: this.addEvents,
            limitByProject: this.limitByProject,
            addFinishedAndValidated: this.addFinishedAndValidated,
            addFrequency: this.addFrequency,
            addEquipmentList: this.addEquipmentList,
            projectIds: this.limitByProject ? this.projectSelectedIds : null,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            status_ids: this.status_ids,
          },
          filename: o,
        })
        .then((n) => {
          this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.info.downloadPreparation'), 'e-toast-info');
        })
        .catch((n) => {
          console.error(n);
        });
      this.closeModal();
    },
  },
  mounted() {
    if (this.objectClass === 'docreviews') {
      O({ target: document.getElementById('spinnerModalReport') });
      J(document.getElementById('spinnerModalReport'));
      axios
        .get('api/events/createData')
        .then((s) => {
          f(document.getElementById('spinnerModalReport'));
          this.listStatus = s.data.status;
          this.endLoading = true;
        })
        .catch((s) => {
          f(document.getElementById('spinnerModalReport'));
          console.error(s);
        });
    }
  },
};
const I = {
  key: 0,
  class: 'row col-md-12',
};
const E = { class: 'col-md-4' };
const P = { class: 'col-md-4' };
const F = { class: 'col-md-4' };
const T = { class: 'row col-md-12' };
const D = {
  key: 0,
  class: 'col-md-4',
};
const A = {
  key: 1,
  class: 'col-md-4',
};
const z = {
  key: 2,
  class: 'col-md-4',
};
const L = {
  key: 3,
  class: 'col-md-4',
};
const U = {
  key: 4,
  class: 'col-md-4',
};
const W = {
  key: 5,
  class: 'row mt-2',
};
const Z = { class: 'col-md-6' };
const x = { class: 'col-md-4' };
const G = {
  key: 1,
  class: 'mt-2',
};
const H = { class: 'e-footer-content mt-4' };
function K(s, t, o, n, e, m) {
  const j = _('headerTemplate');
  const u = _('ejs-checkbox');
  const k = _('ejs-multiselect');
  const v = _('project-selector');
  const b = _('ejs-button');
  const C = _('ejs-dialog');
  d();
  return c('div', null, [
    r(
      C,
      {
        ref: 'modalSelectReport',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: e.animationSettings,
        showCloseIcon: true,
        close: m.onModalClose,
        width: e.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: p(() => [r(j, { title: m.headerTitle }, null, 8, ['title'])]),
        templateContent: p(() => [
          i('div', null, [
            t[9] || (t[9] = i('div', { id: 'spinnerModalReport' }, null, -1)),
            o.objectClass === 'tasks' || o.objectClass === 'instructions'
              ? (d(),
                c('div', I, [
                  i('div', E, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addDocumentation,
                        'onUpdate:modelValue': t[0] || (t[0] = (l) => (e.addDocumentation = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addDocumentation,
                        label: s.trans.get('__JSON__.report.content.addDocumentation'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]),
                  i('div', P, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addItems,
                        'onUpdate:modelValue': t[1] || (t[1] = (l) => (e.addItems = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addItems,
                        label: s.trans.get('__JSON__.report.content.addItems'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]),
                  i('div', F, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addFrequency,
                        'onUpdate:modelValue': t[2] || (t[2] = (l) => (e.addFrequency = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addFrequency,
                        label: s.trans.get('__JSON__.report.content.addFrequency'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]),
                ]))
              : a('', true),
            i('div', T, [
              o.objectClass === 'instructions'
                ? (d(),
                  c('div', D, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addAgents,
                        'onUpdate:modelValue': t[3] || (t[3] = (l) => (e.addAgents = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addAgents,
                        label: s.trans.get('__JSON__.report.content.addAgents'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]))
                : a('', true),
              o.objectClass === 'instructions'
                ? (d(),
                  c('div', A, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addEquipmentList,
                        'onUpdate:modelValue': t[4] || (t[4] = (l) => (e.addEquipmentList = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addEquipmentList,
                        label: s.trans.get('__JSON__.report.content.addEquipmentList'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]))
                : a('', true),
              o.objectClass === 'tasks'
                ? (d(),
                  c('div', z, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addFinishedAndValidated,
                        'onUpdate:modelValue': t[5] || (t[5] = (l) => (e.addFinishedAndValidated = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addFinishedAndValidated,
                        label: s.trans.get('__JSON__.report.content.addFinishedAndValidated'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]))
                : a('', true),
              o.objectClass === 'docreviews'
                ? (d(),
                  c('div', L, [
                    r(
                      u,
                      {
                        cssClass: 'e-small e-primary mt-2',
                        modelValue: e.addEvents,
                        'onUpdate:modelValue': t[6] || (t[6] = (l) => (e.addEvents = l)),
                        modelModifiers: { lazy: true },
                        checked: e.addEvents,
                        label: s.trans.get('__JSON__.report.content.addEvents'),
                      },
                      null,
                      8,
                      ['modelValue', 'checked', 'label'],
                    ),
                  ]))
                : a('', true),
              o.objectClass === 'docreviews'
                ? (d(),
                  c('div', U, [
                    e.endLoading && e.addEvents
                      ? (d(),
                        S(
                          k,
                          {
                            key: 0,
                            modelValue: e.status_ids,
                            'onUpdate:modelValue': t[7] || (t[7] = (l) => (e.status_ids = l)),
                            placeholder: s.trans.get('__JSON__.model.value.status'),
                            mode: 'CheckBox',
                            dataSource: e.listStatus,
                            fields: e.fieldsStatus,
                          },
                          null,
                          8,
                          ['modelValue', 'placeholder', 'dataSource', 'fields'],
                        ))
                      : a('', true),
                  ]))
                : a('', true),
              o.objectClass === 'instructions'
                ? (d(),
                  c('div', W, [
                    i('div', Z, [
                      r(
                        v,
                        {
                          objectType: 'tasks',
                          objectId: 'all',
                          'direct-update': false,
                          onProjectSelected: m.updateProjectsSelected,
                          selectIfUnique: true,
                        },
                        null,
                        8,
                        ['onProjectSelected'],
                      ),
                    ]),
                    i('div', x, [
                      r(
                        u,
                        {
                          cssClass: 'e-small e-primary mt-2',
                          modelValue: e.limitByProject,
                          'onUpdate:modelValue': t[8] || (t[8] = (l) => (e.limitByProject = l)),
                          modelModifiers: { lazy: true },
                          checked: e.limitByProject,
                          label: s.trans.get('__JSON__.report.content.limitByProject'),
                        },
                        null,
                        8,
                        ['modelValue', 'checked', 'label'],
                      ),
                    ]),
                  ]))
                : a('', true),
            ]),
            m.reportContent ? (d(), c('div', G, h(m.reportContent), 1)) : a('', true),
            i('div', H, [
              i('span', null, [
                r(
                  b,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: m.closeModal,
                  },
                  {
                    default: p(() => [g(h(s.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                o.objects.length > 1
                  ? (d(),
                    S(
                      b,
                      {
                        key: 0,
                        cssClass: 'e-info',
                        class: 'e-control e-btn e-primary sendButton',
                        onClick: m.multiplePDFSelected,
                      },
                      {
                        default: p(() => [g(h(s.trans.get('__JSON__.report.content.multiplePdfs')), 1)]),
                        _: 1,
                      },
                      8,
                      ['onClick'],
                    ))
                  : a('', true),
                r(
                  b,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: m.onePDFSelected,
                  },
                  {
                    default: p(() => [
                      g(
                        h(
                          o.objects.length > 1
                            ? s.trans.get('__JSON__.report.content.onePdf')
                            : s.trans.get('__JSON__.report.content.createReport'),
                        ),
                        1,
                      ),
                    ]),
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
const te = V(B, [['render', K]]);
export { te as M };
