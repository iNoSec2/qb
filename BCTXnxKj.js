import {
  _ as S,
  k,
  p as I,
  s as u,
  i as d,
  E as C,
  c as N,
  a as s,
  w as a,
  r as n,
  o as O,
  b as t,
  d as _,
  v as p,
  e as h,
  t as v,
} from '../assets/app-BjImoLrr.js';
import { c as M } from './DvWiUwH6.js';
import { h as B } from './CKKuZvVl.js';
import { d as L } from './Nw-Fho2_.js';
import { P as y } from './BpLTBrfQ.js';
import { t as J } from './DZOApFs4.js';
import { a as q } from './CHw12MFN.js';
import { o as E } from './sKBcFuym.js';
const T = {
  mixins: [L, k, M, q, E],
  components: {
    textareaQB: J,
    ProjectSelector: y,
    headerTemplate: B,
  },
  props: {
    fromEvents: {
      required: false,
      default() {
        return false;
      },
    },
    projectIdLinked: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      docreview: {
        code: '',
        designation: '',
        comment: '',
        object_id: this.object ? this.object.id : null,
        object_type: this.object ? this.object.model : null,
        status_id: null,
        project_id: this.projectIdLinked && this.projectIdLinked !== 'all' ? this.projectIdLinked : null,
      },
      width: '750px',
      allowFiltering: true,
      listStatus: [],
    };
  },
  methods: {
    updateProjectsSelected(e) {
      this.docreview.project_id = e.length > 0 ? e[0] : null;
    },
    saveCreateDocreview() {
      if (this.docreview.code) {
        this.docreview.code = this.docreview.code.trim();
      }
      if (
        !!this.validateStringLength(this.docreview.code, this.trans.get('__JSON__.model.value.code'), 0) &&
        ((this.docreview.designation = this.docreview.designation.trim()),
        !!this.validateStringLength(this.docreview.designation, this.trans.get('__JSON__.model.value.designation')))
      ) {
        if (!this.docreview.status_id) {
          this.showCenterToast(
            this.trans.get('__JSON__.main.modal.toast.error.requiredObject', {
              object: this.trans.get('__JSON__.pattern.value.status'),
            }),
            'e-toast-danger',
          );
          return;
        }
        if (!this.docreview.project_id) {
          this.showCenterToast(
            this.trans.get('__JSON__.main.modal.toast.error.requiredObject', {
              object: this.trans.get('__JSON__.model.name.projects'),
            }),
            'e-toast-danger',
          );
          return;
        }
        if (!this.blockRequest) {
          this.blockRequest = true;
          u(document.getElementById('spinnerModalAdd'));
          axios
            .post('api/docreviews', this.docreview)
            .then((e) => {
              this.blockRequest = false;
              d(document.getElementById('spinnerModalAdd'));
              C.$emit('addObjectGrid', {
                object: e.data.main.docreview,
                type: 'docreviews',
              });
              if (this.fromEvents) {
                this.$emit('selectedDocreview', [e.data.main.docreview]);
              }
              this.openNewObject(e.data.main.docreview.id, 'docreviews');
              this.closeModal();
            })
            .catch((e) => {
              this.blockRequest = false;
              console.error(e);
              d(document.getElementById('spinnerModalAdd'));
            });
        }
      }
    },
    updateComment(e) {
      this.docreview.comment = e;
    },
  },
  mounted() {
    if (this.projectIdLinked && this.projectIdLinked !== 'all') {
      this.docreview.project_id = this.projectIdLinked;
    }
    this.$refs.createDocreview.show();
    I({ target: document.getElementById('spinnerModalAdd') });
    u(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/docreviews/createData')
      .then((e) => {
        d(document.getElementById('spinnerModalAdd'));
        this.listStatus = e.data.status.filter((o) => o.code != 'archived');
      })
      .catch((e) => {
        d(document.getElementById('spinnerModalAddTask'));
        console.error(e);
      });
  },
};
const D = { class: 'container mt-4' };
const A = { class: 'row' };
const P = { class: 'col-md-4' };
const V = ['placeholder'];
const U = { class: 'col-md-4' };
const R = ['placeholder'];
const F = { class: 'col-md-4' };
const Q = { class: 'row' };
const x = { class: 'col-md-12' };
const G = { class: 'e-footer-content mt-4' };
function z(e, o, r, H, i, l) {
  const w = n('headerTemplate');
  const g = n('qb-dropdownlist');
  const b = n('project-selector');
  const j = n('textareaQB');
  const m = n('ejs-button');
  const f = n('ejs-dialog');
  O();
  return N('div', null, [
    s(
      f,
      {
        ref: 'createDocreview',
        header: 'headerTemplate',
        content: 'templateContent',
        width: i.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        close: e.closeModal,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: a(() => [
          s(w, { title: e.trans.get('__JSON__.docreview.content.newDocreview') }, null, 8, ['title']),
        ]),
        templateContent: a(() => [
          t('div', null, [
            t('div', D, [
              o[2] || (o[2] = t('div', { id: 'spinnerModalAdd' }, null, -1)),
              t('div', A, [
                t('div', P, [
                  _(
                    t(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[0] || (o[0] = (c) => (i.docreview.code = c)),
                        placeholder: e.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      V,
                    ),
                    [[p, i.docreview.code]],
                  ),
                ]),
                t('div', U, [
                  _(
                    t(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[1] || (o[1] = (c) => (i.docreview.designation = c)),
                        placeholder: e.trans.get('__JSON__.model.value.designation'),
                      },
                      null,
                      8,
                      R,
                    ),
                    [[p, i.docreview.designation]],
                  ),
                ]),
                t('div', F, [
                  s(
                    g,
                    {
                      dataSource: i.listStatus,
                      vModel: i.docreview.status_id,
                      modelToUpdate: 'docreview.status_id',
                      placeholder: e.trans.get('__JSON__.model.value.status'),
                      select: e.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              t('div', Q, [
                t('div', x, [
                  s(
                    b,
                    {
                      'project-limit': 1,
                      objectType: 'docreviews',
                      objectId: 'all',
                      'direct-update': false,
                      onProjectSelected: l.updateProjectsSelected,
                      enabled: !r.projectIdLinked,
                      projectIdsSelected: r.projectIdLinked ? [r.projectIdLinked] : [],
                      selectIfUnique: true,
                    },
                    null,
                    8,
                    ['onProjectSelected', 'enabled', 'projectIdsSelected'],
                  ),
                ]),
              ]),
              s(
                j,
                {
                  fullLine: true,
                  placeholder: e.trans.get('__JSON__.docreview.content.enterComment'),
                  comment: i.docreview.comment,
                  label: e.trans.get('__JSON__.docreview.value.comment'),
                  objectPermission: 'docreviews',
                  onUpdateComment: l.updateComment,
                },
                null,
                8,
                ['placeholder', 'comment', 'label', 'onUpdateComment'],
              ),
            ]),
            t('div', G, [
              t('span', null, [
                s(
                  m,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: a(() => [h(v(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                s(
                  m,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: l.saveCreateDocreview,
                  },
                  {
                    default: a(() => [h(v(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const oe = S(T, [['render', z]]);
export { oe as d };
