import { h as w } from './CKKuZvVl.js';
import {
  _ as u,
  c as h,
  a as i,
  w as r,
  r as l,
  o as g,
  b as t,
  t as d,
  d as f,
  b1 as C,
  e as p,
} from '../assets/app-BjImoLrr.js';
const v = {
  components: { headerTemplate: w },
  data() {
    return {
      width: '300px',
      animationSettings: { effect: 'None' },
      password: '',
      showPasswordClear: false,
    };
  },
  methods: {
    returnPassword() {
      this.password && this.password !== ''
        ? this.$emit('password', this.password)
        : this.showCenterToast(this.trans.get('__JSON__.main.content.pleaseEnterPassword'), 'e-toast-info');
    },
    cancelUpload() {
      this.$emit('close');
    },
    toggleTypeInput() {
      this.showPasswordClear = !this.showPasswordClear;
    },
    trimPassword() {
      this.password = this.password.trim();
    },
  },
};
const P = { class: 'row' };
const y = { class: 'col-md-12' };
const b = { class: 'row' };
const S = { class: 'col-md-12' };
const T = { class: 'row' };
const N = { class: 'col-md-12' };
const k = {
  class: 'e-input-group data',
  style: { width: '200px' },
};
const B = ['type'];
const J = { class: 'e-footer-content mt-4' };
function O(a, s, j, x, o, e) {
  const m = l('headerTemplate');
  const c = l('ejs-button');
  const _ = l('ejs-dialog');
  g();
  return h('div', null, [
    i(
      _,
      {
        ref: 'modalEdition',
        visible: true,
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: o.animationSettings,
        width: o.width,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: r(() => [i(m, { title: a.trans.get('__JSON__.main.content.zipSecured') }, null, 8, ['title'])]),
        templateContent: r(() => [
          t('div', P, [
            t('div', y, [
              t('div', b, [t('div', S, d(a.trans.get('__JSON__.main.content.enterZipPassword')), 1)]),
              s[3] || (s[3] = t('br', null, null, -1)),
              t('div', T, [
                t('div', N, [
                  t('div', k, [
                    f(
                      t(
                        'input',
                        {
                          class: 'e-input mb-0',
                          type: o.showPasswordClear ? 'text' : 'password',
                          'onUpdate:modelValue': s[0] || (s[0] = (n) => (o.password = n)),
                          onKeyup: s[1] || (s[1] = (...n) => e.trimPassword && e.trimPassword(...n)),
                        },
                        null,
                        40,
                        B,
                      ),
                      [[C, o.password]],
                    ),
                    t('span', {
                      class: 'mt-2 me-2 sf-icon-eye---05',
                      style: { cursor: 'pointer' },
                      onClick: s[2] || (s[2] = (...n) => e.toggleTypeInput && e.toggleTypeInput(...n)),
                    }),
                  ]),
                ]),
              ]),
            ]),
            t('div', J, [
              t('span', null, [
                i(
                  c,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.cancelUpload,
                  },
                  {
                    default: r(() => [p(d(a.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                i(
                  c,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: e.returnPassword,
                  },
                  {
                    default: r(() => [p(d(a.trans.get('__JSON__.main.modal.button.continue')), 1)]),
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
      ['animationSettings', 'width'],
    ),
  ]);
}
const E = u(v, [['render', O]]);
export { E as P };
