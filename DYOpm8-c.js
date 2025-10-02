import { d as C } from './Nw-Fho2_.js';
import {
  _ as N,
  k as O,
  s as P,
  i as p,
  E as M,
  p as J,
  c as h,
  a as o,
  w as u,
  r as l,
  o as m,
  b as e,
  d,
  v as r,
  g as f,
  t as _,
  e as y,
} from '../assets/app-BjImoLrr.js';
import { c as A } from './DvWiUwH6.js';
import { h as T } from './CKKuZvVl.js';
import { a as E } from './CHw12MFN.js';
import { o as j } from './sKBcFuym.js';
const x = {
  mixins: [C, O, A, E, j],
  components: { headerTemplate: T },
  props: {
    typePatterns: { required: true },
    codePattern: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      dataPattern: {
        code: '',
        designation: '',
        pattern: '',
        prefix_pattern: '',
        suffix_pattern: '',
        status_id: '',
        type_id: null,
        launch_autolink: true,
      },
      listPatternType: [],
      width: '750px',
      idActive: null,
      idInactive: null,
      limitSave: false,
    };
  },
  mounted() {
    if (this.codePattern) {
      this.dataPattern.code = this.codePattern;
      this.dataPattern.designation = this.codePattern;
      this.dataPattern.pattern = this.codePattern;
    }
    J({ target: document.getElementById('spinnerModalAdd') });
    P(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/patterns/createData')
      .then((t) => {
        p(document.getElementById('spinnerModalAdd'));
        this.listPatternType = t.data.patternType;
        t.data.status.forEach((a) => {
          if (a.code == 'active') {
            this.idActive = a.id;
          }
          if (a.code == 'inactive') {
            this.idInactive = a.id;
          }
        });
      })
      .catch((t) => {
        p(document.getElementById('spinnerModalAdd'));
        console.error(t);
      });
  },
  methods: {
    changeAutolink() {
      this.dataPattern.launch_autolink = !this.dataPattern.launch_autolink;
    },
    filtering(t) {
      this.filterCombobox(t, this.types, 'code');
    },
    valueStatus(t) {
      this.dataPattern.status_id = t.value;
    },
    saveCreate() {
      this.dataPattern.code = this.dataPattern.code.trim();
      if (
        !this.validateStringLength(this.dataPattern.code, this.trans.get('__JSON__.model.value.code')) ||
        ((this.dataPattern.designation = this.dataPattern.designation.trim()),
        !this.validateStringLength(this.dataPattern.designation, this.trans.get('__JSON__.model.value.designation'))) ||
        (this.typePatterns === 'all' &&
          !this.checkExist('__JSON__.pattern.toast.error.selectType', this.dataPattern.type_id))
      )
        return;
      let t = '';
      this.typePatterns !== 'all'
        ? this.listPatternType.forEach((i) => {
            if (i.code === this.typePatterns) {
              t = i.id;
            }
          })
        : (t = this.dataPattern.type_id);
      let a = {
        code: this.dataPattern.code,
        designation: this.dataPattern.designation,
        pattern: this.dataPattern.pattern,
        prefix_pattern: this.dataPattern.prefix_pattern,
        suffix_pattern: this.dataPattern.suffix_pattern,
        status_id: this.dataPattern.status_id || this.idInactive,
        type_id: t,
        launch_autolink: this.dataPattern.launch_autolink,
      };
      if (!this.limitSave) {
        P(document.getElementById('spinnerModalAdd'));
        this.limitSave = true;
        axios
          .post('api/patterns', a)
          .then((i) => {
            p(document.getElementById('spinnerModalAdd'));
            this.limitSave = false;
            if (i.status == 201) {
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
              M.$emit('addObjectGrid', {
                object: i.data.original.main.pattern,
                type: 'patterns',
              });
              this.openNewObject(i.data.original.main.pattern.id, 'patterns');
              this.closeModal();
            }
          })
          .catch((i) => {
            p(document.getElementById('spinnerModalAdd'));
            this.limitSave = false;
          });
      }
    },
  },
};
const B = { class: 'container mt-4' };
const I = { class: 'row' };
const V = { class: 'col-md-6' };
const U = ['placeholder'];
const q = { class: 'col-md-6' };
const D = ['placeholder'];
const L = { class: 'card-text row mt-4' };
const F = { class: 'col-md-2' };
const G = { class: 'col-md-4' };
const z = {
  key: 0,
  class: 'col-md-6',
};
const H = { class: 'me-1' };
const K = { class: 'row mt-4' };
const Q = { class: 'col-md-2' };
const R = ['placeholder'];
const W = {
  class: 'col-md-3',
  style: { padding: '0' },
};
const X = ['placeholder'];
const Y = { class: 'col-md-2' };
const Z = ['placeholder'];
const $ = {
  key: 0,
  class: 'col-md-5',
};
const tt = { class: 'e-footer-content mt-4' };
function et(t, a, i, at, n, c) {
  const S = l('headerTemplate');
  const g = l('ejs-radiobutton');
  const b = l('ejs-switch');
  const k = l('qb-dropdownlist');
  const v = l('ejs-button');
  const w = l('ejs-dialog');
  m();
  return h('div', null, [
    o(
      w,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: n.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: t.animationSettings,
        close: t.closeModal,
        visible: t.visible,
        isModal: t.isModal,
      },
      {
        headerTemplate: u(() => [
          o(S, { title: t.trans.get('__JSON__.pattern.content.newPattern') }, null, 8, ['title']),
        ]),
        templateContent: u(() => [
          e('div', null, [
            e('div', B, [
              a[5] || (a[5] = e('div', { id: 'spinnerModalAdd' }, null, -1)),
              e('div', I, [
                e('div', V, [
                  d(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': a[0] || (a[0] = (s) => (n.dataPattern.code = s)),
                        placeholder: t.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      U,
                    ),
                    [[r, n.dataPattern.code]],
                  ),
                ]),
                e('div', q, [
                  d(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': a[1] || (a[1] = (s) => (n.dataPattern.designation = s)),
                        placeholder: t.trans.get('__JSON__.model.value.designation'),
                      },
                      null,
                      8,
                      D,
                    ),
                    [[r, n.dataPattern.designation]],
                  ),
                ]),
              ]),
              e('div', L, [
                e('span', F, _(t.trans.get('__JSON__.pattern.value.status')), 1),
                e('div', G, [
                  o(
                    g,
                    {
                      label: t.trans.get('__JSON__.pattern.content.active'),
                      cssClass: 'e-small me-2',
                      name: 'statusModal',
                      value: n.idActive,
                      onChange: c.valueStatus,
                    },
                    null,
                    8,
                    ['label', 'value', 'onChange'],
                  ),
                  o(
                    g,
                    {
                      label: t.trans.get('__JSON__.pattern.content.inactive'),
                      cssClass: 'e-small',
                      name: 'statusModal',
                      checked: true,
                      value: n.idInactive,
                      onChange: c.valueStatus,
                    },
                    null,
                    8,
                    ['label', 'value', 'onChange'],
                  ),
                ]),
                n.dataPattern.status_id == this.idActive
                  ? (m(),
                    h('div', z, [
                      e('label', H, _(t.trans.get('__JSON__.pattern.content.launchAutolink')), 1),
                      o(
                        b,
                        {
                          ref: 'toggleSwitch',
                          checked: n.dataPattern.launch_autolink,
                          value: n.dataPattern.launch_autolink,
                          onChange: c.changeAutolink,
                        },
                        null,
                        8,
                        ['checked', 'value', 'onChange'],
                      ),
                    ]))
                  : f('', true),
              ]),
              e('div', K, [
                e('div', Q, [
                  d(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        placeholder: t.trans.get('__JSON__.pattern.value.prefix'),
                        'onUpdate:modelValue': a[2] || (a[2] = (s) => (n.dataPattern.prefix_pattern = s)),
                      },
                      null,
                      8,
                      R,
                    ),
                    [[r, n.dataPattern.prefix_pattern]],
                  ),
                ]),
                e('div', W, [
                  d(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        placeholder: t.trans.get('__JSON__.pattern.value.pattern'),
                        'onUpdate:modelValue': a[3] || (a[3] = (s) => (n.dataPattern.pattern = s)),
                      },
                      null,
                      8,
                      X,
                    ),
                    [[r, n.dataPattern.pattern]],
                  ),
                ]),
                e('div', Y, [
                  d(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        placeholder: t.trans.get('__JSON__.pattern.value.suffix'),
                        'onUpdate:modelValue': a[4] || (a[4] = (s) => (n.dataPattern.suffix_pattern = s)),
                      },
                      null,
                      8,
                      Z,
                    ),
                    [[r, n.dataPattern.suffix_pattern]],
                  ),
                ]),
                this.typePatterns == 'all'
                  ? (m(),
                    h('div', $, [
                      o(
                        k,
                        {
                          dataSource: n.listPatternType,
                          vModel: n.dataPattern.type_id,
                          modelToUpdate: 'dataPattern.type_id',
                          placeholder: t.trans.get('__JSON__.pattern.content.selectPatternType'),
                          select: t.selectValueList,
                          nullable: true,
                        },
                        null,
                        8,
                        ['dataSource', 'vModel', 'placeholder', 'select'],
                      ),
                    ]))
                  : f('', true),
              ]),
              a[6] || (a[6] = e('div', { class: 'row' }, null, -1)),
            ]),
            e('div', tt, [
              e('span', null, [
                o(
                  v,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: t.closeModal,
                  },
                  {
                    default: u(() => [y(_(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                o(
                  v,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: c.saveCreate,
                  },
                  {
                    default: u(() => [y(_(t.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const rt = N(x, [['render', et]]);
export { rt as d };
