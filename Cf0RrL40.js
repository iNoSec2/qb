import {
  _ as f,
  c as _,
  a as n,
  w as r,
  r as m,
  o as h,
  b as o,
  t as a,
  d as O,
  v as w,
  e as l,
  f as k,
  g as b,
  F as C,
  h as T,
  E as c,
  i as v,
  s as H,
  D as N,
  j as L,
  n as y,
} from '../assets/app-BjImoLrr.js';
import { h as U } from './CKKuZvVl.js';
const E = {
  components: { headerTemplate: U },
  props: { token: { required: true } },
  data() {
    return {
      width: '600px',
      animationSettings: { effect: 'None' },
      code: '',
      tokenSecondAuth: this.token,
    };
  },
  methods: {
    restartSecondAuth() {
      axios
        .post('api/restartSecondAuth', { token: this.tokenSecondAuth })
        .then((t) => {
          this.tokenSecondAuth = t.data.tokenSecondAuth;
          this.showCenterToast(this.trans.get('__JSON__.main.content.secondAuthSentAgain'), 'e-toast-success');
        })
        .catch((t) => {
          let e = t.response.data.error;
          this.showCenterToast(t.response.data.error, 'e-toast-danger');
          if (t.response.data.hasOwnProperty('expired')) {
            this.onModalClose();
          }
        });
    },
    checkSecondAuth() {
      this.code && this.code !== ''
        ? axios
            .post('api/secondAuthLogin', {
              code: this.code,
              token: this.tokenSecondAuth,
            })
            .then((t) => {
              this.$emit('logged', t.data);
            })
            .catch((t) => {
              let e = t.response.data.error;
              this.showCenterToast(t.response.data.error, 'e-toast-danger');
              if (t.response.data.hasOwnProperty('expired')) {
                this.onModalClose();
              }
            })
        : this.showCenterToast(this.trans.get('__JSON__.main.content.pleaseEnterSecondAuthCode'), 'e-toast-info');
    },
    onModalClose() {
      this.$emit('close');
    },
  },
};
const x = { class: 'row' };
const D = { class: 'col-md-12' };
const J = { class: 'row' };
const M = { class: 'col-md-12' };
const K = { class: 'row' };
const P = { class: 'col-md-12' };
const j = {
  class: 'e-input-group data',
  style: { width: '200px' },
};
const V = { class: 'e-footer-content mt-4' };
function $(t, e, u, S, g, i) {
  const A = m('headerTemplate');
  const d = m('ejs-button');
  const p = m('ejs-dialog');
  h();
  return _('div', null, [
    n(
      p,
      {
        ref: 'modalEdition',
        visible: true,
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: g.animationSettings,
        close: i.onModalClose,
        allowDragging: true,
        width: g.width,
        isModal: true,
      },
      {
        headerTemplate: r(() => [n(A, { title: t.trans.get('__JSON__.main.content.secondAuth') }, null, 8, ['title'])]),
        templateContent: r(() => [
          o('div', x, [
            o('div', D, [
              o('div', J, [o('div', M, a(t.trans.get('__JSON__.main.content.enterSecondAuthCode')), 1)]),
              e[1] || (e[1] = o('br', null, null, -1)),
              o('div', K, [
                o('div', P, [
                  o('div', j, [
                    O(
                      o(
                        'input',
                        {
                          class: 'e-input mb-0',
                          type: 'text',
                          'onUpdate:modelValue': e[0] || (e[0] = (s) => (g.code = s)),
                        },
                        null,
                        512,
                      ),
                      [[w, g.code, void 0, { lazy: true }]],
                    ),
                  ]),
                ]),
              ]),
            ]),
            o('div', V, [
              o('span', null, [
                n(
                  d,
                  {
                    class: 'e-control e-btn sendButton',
                    style: {
                      background: 'green',
                      color: 'white',
                    },
                    onClick: i.restartSecondAuth,
                  },
                  {
                    default: r(() => [l(a(t.trans.get('__JSON__.main.modal.button.sendAgain')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                n(
                  d,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: i.onModalClose,
                  },
                  {
                    default: r(() => [l(a(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                n(
                  d,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: i.checkSecondAuth,
                  },
                  {
                    default: r(() => [l(a(t.trans.get('__JSON__.main.modal.button.continue')), 1)]),
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
const I = f(E, [['render', $]]);
const G = {
  components: { secondAuthPopup: I },
  data: function () {
    return {
      login: '',
      password: '',
      formObj: '',
      animation: { effect: 'zoom' },
      secondAuthToken: null,
      showSecondAuthPopup: false,
      dialogElement: false,
      googleAuthDisabled: this.mainStore.mixConfig.HAS_GOOGLE_OAUTH ? '' : 'disabled',
      azureAuthDisabled: this.mainStore.mixConfig.HAS_AZURE_OAUTH ? '' : 'disabled',
      keycloakAuthDisabled: this.mainStore.mixConfig.HAS_KEYCLOAK_OAUTH ? '' : 'disabled',
      oktaAuthDisabled: this.mainStore.mixConfig.HAS_OKTA_OAUTH ? '' : 'disabled',
      saml2AuthDisabled: this.mainStore.mixConfig.HAS_SAML2_OAUTH ? '' : 'disabled',
      googleAuthTranslation:
        this.mainStore.mixConfig.GOOGLE_OAUTH_TRANSLATION ?? this.trans.get('__JSON__.login.google'),
      azureAuthTranslation:
        this.mainStore.mixConfig.AZURE_OAUTH_TRANSLATION ?? this.trans.get('__JSON__.login.microsoft'),
      keycloakAuthTranslation:
        this.mainStore.mixConfig.KEYCLOAK_OAUTH_TRANSLATION ?? this.trans.get('__JSON__.login.keycloak'),
      oktaAuthTranslation: this.mainStore.mixConfig.OKTA_OAUTH_TRANSLATION ?? this.trans.get('__JSON__.login.okta'),
      saml2AuthTranslation: this.mainStore.mixConfig.SAML2_OAUTH_TRANSLATION ?? this.trans.get('__JSON__.login.saml2'),
      googleAuthHidden: !!(
        (this.mainStore.mixConfig.HAS_AZURE_OAUTH || this.mainStore.mixConfig.HAS_KEYCLOAK_OAUTH) &&
        !this.mainStore.mixConfig.HAS_GOOGLE_OAUTH
      ),
      azureAuthHidden: !!(
        (this.mainStore.mixConfig.HAS_GOOGLE_OAUTH || this.mainStore.mixConfig.HAS_KEYCLOAK_OAUTH) &&
        !this.mainStore.mixConfig.HAS_AZURE_OAUTH
      ),
      keycloakAuthHidden: !!(
        (this.mainStore.mixConfig.HAS_AZURE_OAUTH || this.mainStore.mixConfig.HAS_GOOGLE_OAUTH) &&
        !this.mainStore.mixConfig.HAS_KEYCLOAK_OAUTH
      ),
      oktaAuthHidden: !!(
        (this.mainStore.mixConfig.HAS_OKTA_OAUTH || this.mainStore.mixConfig.HAS_OKTA_OAUTH) &&
        !this.mainStore.mixConfig.HAS_OKTA_OAUTH
      ),
      saml2AuthHidden: !!(
        (this.mainStore.mixConfig.HAS_SAML2_OAUTH || this.mainStore.mixConfig.HAS_SAML2_OAUTH) &&
        !this.mainStore.mixConfig.HAS_SAML2_OAUTH
      ),
      connectionList: this.mainStore.mixConfig.CONNECTION_LIST ?? [],
    };
  },
  mounted: function () {
    this.$refs.login.$el.focus();
    this.formObj = new L('#form1', this.options);
    c.$on('secondAuthToken', this.secondAuthLogin);
    c.$on('passwordNeedUpdate', this.passwordNeedUpdate);
    c.$on('passwordValidationDateExpired', this.passwordValidationDateExpired);
    window.addEventListener('keypress', this.enterListener);
  },
  methods: {
    enterListener(t) {
      if (t.keyCode == '13') {
        this.onFormSubmit();
      }
    },
    connectionAuthDisabled(t) {
      switch (t) {
        case 'KeycloakOAuth':
          return this.keycloakAuthDisabled;
        case 'GoogleOAuth':
          return this.googleAuthDisabled;
        case 'AzureOAuth':
          return this.azureAuthDisabled;
        case 'OktaOAuth':
          return this.oktaAuthDisabled;
        case 'Saml2OAuth':
          return this.saml2AuthDisabled;
        default:
          return false;
      }
    },
    connectionIcon(t) {
      switch (t) {
        case 'KeycloakOAuth':
        case 'OktaOAuth':
        case 'Saml2OAuth':
          return 'sf-icon-login-01';
        case 'GoogleOAuth':
          return 'sf-icon-google';
        case 'AzureOAuth':
          return 'sf-icon-microsoft';
        default:
          return null;
      }
    },
    oauthClick(t, e, u) {
      switch ((u?.preventDefault(), e)) {
        case 'KeycloakOAuth':
          this.keycloakAuthDisabled = true;
          break;
        case 'GoogleOAuth':
          this.googleAuthDisabled = true;
          break;
        case 'AzureOAuth':
          this.azureAuthDisabled = true;
          break;
        case 'OktaOAuth':
          this.oktaAuthDisabled = true;
          break;
        case 'Saml2OAuth':
          this.saml2AuthDisabled = true;
          break;
        default:
          this.showCenterToast(this.trans.get('__JSON__.connection.toast.warning.test'), 'e-toast-warning');
          return;
      }
      this.oauthAxios(t);
    },
    oauthAxios(t) {
      this.showLoginSpinner();
      axios
        .get('oauth_connect/' + t)
        .then((e) => {
          let u = e.data.result;
          this.hideLoginSpinner();
          e.data.result === true || e.data.result === false
            ? e.data.result
              ? this.showCenterToast(this.trans.get('__JSON__.connection.toast.success.test'), 'e-toast-success')
              : this.showCenterToast(this.trans.get('__JSON__.connection.toast.warning.test'), 'e-toast-warning')
            : (location.href = e.data.result);
        })
        .catch((e) => {
          this.hideLoginSpinner();
          this.showCenterToast(this.trans.get('__JSON__.connection.toast.error.test'), 'e-toast-danger');
        });
    },
    secondAuthLogin(t) {
      this.secondAuthToken = t;
      this.showSecondAuthPopup = true;
    },
    passwordNeedUpdate() {
      this.showPopupMail(this.trans.get('__JSON__.main.content.passwordNeedUpdate'));
    },
    passwordValidationDateExpired() {
      this.showPopupMail(this.trans.get('__JSON__.main.content.passwordExpired'));
    },
    showPopupMail(t) {
      this.dialogElement = N.alert({
        title: this.trans.get('__JSON__.main.content.passwordRenewalNeeded'),
        content: t,
        okButton: {
          text: this.trans.get('__JSON__.main.modal.button.ok'),
          click: this.closePopup,
        },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' },
      });
    },
    closePopup() {
      if (this.dialogElement) {
        this.dialogElement.hide();
      }
    },
    closeSecondAuthPopup() {
      this.secondAuthToken = null;
      this.showSecondAuthPopup = false;
    },
    secondAuthLogged(t) {
      this.closeSecondAuthPopup();
      this.mainStore.secondAuthLogin({
        dataSource: t,
        router: this.$router,
        spinnerOn: this.showLoginSpinner,
        spinnerOff: this.hideLoginSpinner,
      });
    },
    showLoginSpinner() {
      H(document.getElementById('spinnerApp'));
    },
    hideLoginSpinner() {
      v(document.getElementById('spinnerApp'));
    },
    onFormSubmit: function () {
      if (this.formObj.validate()) {
        let e = {
          login: this.login,
          password: this.password,
        };
        this.formObj.element.reset();
        this.mainStore.login({
          dataSource: e,
          router: this.$router,
          spinnerOn: this.showLoginSpinner,
          spinnerOff: this.hideLoginSpinner,
        });
      }
    },
    forgotPassword() {
      this.$router.push({ name: 'Forgot password' });
    },
  },
  beforeUnmount() {
    c.$off('secondAuthToken', this.secondAuthLogin);
    c.$off('passwordNeedUpdate', this.passwordNeedUpdate);
    c.$off('passwordValidationDateExpired', this.passwordValidationDateExpired);
    window.removeEventListener('keypress', this.enterListener);
  },
};
const z = {
  class: 'col-lg-12 control-section form-support',
  style: { 'margin-top': '150px' },
};
const B = {
  class: 'control_wrapper e-card',
  id: 'control_wrapper',
};
const R = { class: 'e-card-stacked' };
const F = { class: 'e-card-content m-2' };
const q = { id: 'form1' };
const Z = { class: 'form-group pt-2 mt-2' };
const Y = { class: 'form-group pt-2' };
const Q = { class: 'd-flex' };
const W = { class: 'w-50' };
const X = {
  class: 'submitBtn mt-3',
  style: {
    display: 'flex',
    'justify-content': 'left',
  },
};
const tt = { class: 'w-50' };
const et = {
  class: 'submitBtn mt-3',
  style: {
    display: 'flex',
    'justify-content': 'right',
  },
};
const ot = { class: 'or-container mt-5 mb-3' };
const st = { class: 'or-label' };
const nt = {
  key: 0,
  class: 'd-flex justify-content-center',
};
const it = {
  key: 1,
  class: 'd-flex justify-content-center',
};
const at = ['hidden'];
const rt = ['hidden'];
const dt = ['hidden'];
const lt = ['hidden'];
const ut = ['hidden'];
function ht(t, e, u, S, g, i) {
  const A = m('ejs-textbox');
  const d = m('ejs-button');
  const p = m('second-auth-popup');
  h();
  return _('div', z, [
    o('div', B, [
      o('div', R, [
        o('div', F, [
          o('form', q, [
            e[5] ||
              (e[5] = o(
                'div',
                { class: 'form-title' },
                [
                  o('img', {
                    src: '/logoLogin',
                    id: 'login-logo',
                  }),
                ],
                -1,
              )),
            o('div', Z, [
              n(
                A,
                {
                  floatLabelType: 'Auto',
                  type: 'text',
                  id: 'login',
                  name: 'login',
                  'data-required-message': t.trans.get('__JSON__.user.content.loginMessage'),
                  required: '',
                  placeholder: t.trans.get('__JSON__.user.value.login'),
                  modelValue: t.login,
                  'onUpdate:modelValue': e[0] || (e[0] = (s) => (t.login = s)),
                  ref: 'login',
                  cssClass: 'd-block',
                  autocomplete: 'false',
                },
                null,
                8,
                ['data-required-message', 'placeholder', 'modelValue'],
              ),
              e[3] || (e[3] = o('div', { id: 'mailError' }, null, -1)),
            ]),
            o('div', Y, [
              n(
                A,
                {
                  floatLabelType: 'Auto',
                  type: 'password',
                  id: 'password',
                  name: 'password',
                  modelValue: t.password,
                  'onUpdate:modelValue': e[1] || (e[1] = (s) => (t.password = s)),
                  'data-required-message': t.trans.get('__JSON__.user.content.passwordMessage'),
                  required: '',
                  placeholder: t.trans.get('__JSON__.user.value.password'),
                  cssClass: 'd-block',
                  autocomplete: 'false',
                },
                null,
                8,
                ['modelValue', 'data-required-message', 'placeholder'],
              ),
              e[4] || (e[4] = o('div', { id: 'nameError' }, null, -1)),
            ]),
          ]),
          o('div', Q, [
            o('div', W, [
              o('div', X, [
                n(
                  d,
                  {
                    id: 'recupPassword',
                    cssClass: 'e-link e-small',
                    onClick: i.forgotPassword,
                  },
                  {
                    default: r(() => [l(a(t.trans.get('__JSON__.main.content.passwordForgot')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
              ]),
            ]),
            o('div', tt, [
              o('div', et, [
                o(
                  'button',
                  {
                    class: 'e-btn',
                    id: 'submit-btn',
                    onClick: e[2] || (e[2] = (...s) => i.onFormSubmit && i.onFormSubmit(...s)),
                  },
                  a(t.trans.get('__JSON__.main.content.signIn')),
                  1,
                ),
              ]),
            ]),
          ]),
          o('div', ot, [
            e[6] || (e[6] = o('div', { class: 'line-separator' }, null, -1)),
            o('div', st, a(t.trans.get('__JSON__.main.login.orSignIn')), 1),
            e[7] || (e[7] = o('div', { class: 'line-separator' }, null, -1)),
          ]),
          t.connectionList.length > 0
            ? (h(),
              _('div', nt, [
                (h(true),
                _(
                  C,
                  null,
                  T(
                    t.connectionList,
                    (s) => (
                      h(),
                      _(
                        'div',
                        {
                          class: 'w-50 text-center',
                          key: s.id,
                        },
                        [
                          n(
                            d,
                            {
                              cssClass: 'e-btn',
                              id: s.name,
                              onMousedown: (ct) => i.oauthClick(s.id, s.connection_type_code),
                              disabled: i.connectionAuthDisabled(s.connection_type_code),
                              formnovalidate: '',
                            },
                            {
                              default: r(() => [
                                o('i', { class: y(i.connectionIcon(s.connection_type_code)) }, null, 2),
                                l(' ' + a(s.parametersArray.translation), 1),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['id', 'onMousedown', 'disabled'],
                          ),
                        ],
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : (h(),
              _('div', it, [
                o(
                  'div',
                  {
                    class: 'w-50 text-center',
                    hidden: t.googleAuthHidden,
                  },
                  [
                    n(
                      d,
                      {
                        cssClass: 'e-btn',
                        id: 'oauthGoogle',
                        disabled: true,
                        formnovalidate: '',
                      },
                      {
                        default: r(() => [
                          e[8] || (e[8] = o('i', { class: 'sf-icon-google' }, null, -1)),
                          l(' ' + a(t.googleAuthTranslation), 1),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  8,
                  at,
                ),
                o(
                  'div',
                  {
                    class: 'w-50 text-center',
                    hidden: t.azureAuthHidden,
                  },
                  [
                    n(
                      d,
                      {
                        cssClass: 'e-btn',
                        id: 'oauthMicrosoft',
                        disabled: true,
                        formnovalidate: '',
                      },
                      {
                        default: r(() => [
                          e[9] || (e[9] = o('i', { class: 'sf-icon-microsoft' }, null, -1)),
                          l(' ' + a(t.azureAuthTranslation), 1),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  8,
                  rt,
                ),
                o(
                  'div',
                  {
                    class: 'w-50 text-center',
                    hidden: t.keycloakAuthHidden,
                  },
                  [
                    n(
                      d,
                      {
                        cssClass: 'e-btn',
                        id: 'oauthKeycloak',
                        disabled: true,
                        formnovalidate: '',
                      },
                      {
                        default: r(() => [
                          e[10] || (e[10] = o('i', { class: 'sf-icon-login-01' }, null, -1)),
                          l(' ' + a(t.keycloakAuthTranslation), 1),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  8,
                  dt,
                ),
                o(
                  'div',
                  {
                    class: 'w-50 text-center',
                    hidden: t.oktaAuthHidden,
                  },
                  [
                    n(
                      d,
                      {
                        cssClass: 'e-btn',
                        id: 'oauthOkta',
                        disabled: true,
                        formnovalidate: '',
                      },
                      {
                        default: r(() => [
                          e[11] || (e[11] = o('i', { class: 'sf-icon-login-01' }, null, -1)),
                          l(' ' + a(t.oktaAuthTranslation), 1),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  8,
                  lt,
                ),
                o(
                  'div',
                  {
                    class: 'w-50 text-center',
                    hidden: t.saml2AuthHidden,
                  },
                  [
                    n(
                      d,
                      {
                        cssClass: 'e-btn',
                        id: 'oauthSaml2',
                        disabled: true,
                        formnovalidate: '',
                      },
                      {
                        default: r(() => [
                          e[12] || (e[12] = o('i', { class: 'sf-icon-login-01' }, null, -1)),
                          l(' ' + a(t.saml2AuthTranslation), 1),
                        ]),
                        _: 1,
                      },
                    ),
                  ],
                  8,
                  ut,
                ),
              ])),
        ]),
      ]),
    ]),
    t.showSecondAuthPopup
      ? (h(),
        k(
          p,
          {
            key: 0,
            token: t.secondAuthToken,
            onClose: i.closeSecondAuthPopup,
            onLogged: i.secondAuthLogged,
          },
          null,
          8,
          ['token', 'onClose', 'onLogged'],
        ))
      : b('', true),
  ]);
}
const At = f(G, [
  ['render', ht],
  ['__scopeId', 'data-v-6108ce2c'],
]);
export { At as default };
