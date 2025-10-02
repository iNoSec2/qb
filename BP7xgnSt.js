import {
  s as v,
  i as M,
  E as j,
  _ as S,
  c as u,
  d as _,
  b as n,
  g as T,
  v as b,
  F as L,
  h as N,
  Y as A,
  n as V,
  o as r,
  k as F,
  p as q,
  a6 as U,
  a as c,
  w as h,
  r as m,
  e as y,
  t as O,
  f as w,
} from '../assets/app-BjImoLrr.js';
import { c as x } from './DvWiUwH6.js';
import { h as J } from './CKKuZvVl.js';
import { d as P } from './Nw-Fho2_.js';
import { a as D } from './CHw12MFN.js';
import { o as B } from './sKBcFuym.js';
const E = {
  data() {
    return { weightLetters: [[]] };
  },
  methods: {
    weight(e, t) {
      if (this.weightLetters.length && t < this.weightLetters[0].length) {
        for (let o = 0; o < this.weightLetters.length; o++)
          if (e === this.weightLetters[o][0]) return this.weightLetters[o][t];
      }
      return 0;
    },
    sum(e) {
      let t = 0;
      if (this.weightLetters.length && e < this.weightLetters[0].length)
        for (let o = 0; o < this.weightLetters.length; o++) t += this.weightLetters[o][e];
      return t;
    },
    styledTag(e) {
      let t = '';
      let o = 0;
      let l = 0;
      let a = 0;
      if (e && e !== '')
        for (let i = 0; i < e.length; i++) {
          if (this.weightLetters.length === 0) {
            t += '<span>' + e[i].toUpperCase() + '</span>';
            continue;
          }
          let s = this.weight(e[i].toUpperCase(), i + 1);
          let f = this.sum(i + 1);
          let p = s / f;
          let g = '';
          p > 0.05 ? ((g = 'yes'), o++) : p > 0 && p <= 0.5 ? ((g = 'perhaps'), a++) : ((g = 'no'), l++);
          t += '<span class="span-char-match-' + g + '">' + e[i].toUpperCase() + '</span>';
        }
      return {
        matchNo: l,
        matchPerhaps: a,
        matchYes: o,
        styledTagText: t,
      };
    },
    getWeightData(e = null, t = null) {
      v(document.getElementById('spinnerModalAdd'));
      axios
        .get('api/tags/weight')
        .then((o) => {
          M(document.getElementById('spinnerModalAdd'));
          this.weightLetters = o.data.weight;
          if (typeof e == 'function') {
            e(o);
          }
        })
        .catch((o) => {
          M(document.getElementById('spinnerModalAdd'));
          if (typeof t == 'function') {
            t(o);
          }
          j.$emit('newToastCentralPanels', {
            title: this.trans.get('__JSON__.viewer.toast.error.tagWeight'),
            content: '',
            classToast: 'e-toast-danger',
          });
        });
    },
  },
};
const I = {
  emits: ['keyupAppend', 'changeAppend'],
  props: {
    nameList: { required: true },
    vModel: { required: true },
    modelToUpdate: { required: true },
    list: { required: true },
    placeholder: { required: false },
    enabled: {
      required: false,
      default() {
        return true;
      },
    },
    nullable: {
      required: false,
      default() {
        return false;
      },
    },
    keyup: { required: false },
    change: { required: false },
  },
  data() {
    return {
      vModelForChild: this.vModel,
      isFocus: false,
    };
  },
  watch: {
    vModel() {
      this.vModelForChild = this.vModel;
    },
  },
  methods: {
    emptyVmodel() {
      this.vModelForChild = '';
      this.keyup(this.modelToUpdate, this.vModelForChild);
      this.$emit('keyupAppend');
    },
    keyupData(e) {
      this.keyup(this.modelToUpdate, this.vModelForChild);
      this.$emit('keyupAppend');
    },
    changeData(e) {
      this.change(this.modelToUpdate, this.vModelForChild);
      this.$emit('changeAppend');
    },
  },
};
const W = ['list', 'disabled', 'placeholder'];
const K = ['id'];
const R = ['value'];
function Y(e, t, o, l, a, i) {
  r();
  return u(
    'span',
    {
      class: V([
        'e-input-group e-control-wrapper e-ddl',
        {
          'e-input-focus': a.isFocus,
          'e-icon-anim': a.isFocus,
        },
      ]),
      style: { width: '100%' },
      onFocusin: t[4] || (t[4] = (s) => (a.isFocus = true)),
      onFocusout: t[5] || (t[5] = (s) => (a.isFocus = false)),
    },
    [
      _(
        n(
          'input',
          {
            list: o.nameList,
            'onUpdate:modelValue': t[0] || (t[0] = (s) => (a.vModelForChild = s)),
            onKeyup: t[1] || (t[1] = (...s) => i.keyupData && i.keyupData(...s)),
            onChange: t[2] || (t[2] = (...s) => i.changeData && i.changeData(...s)),
            disabled: !o.enabled,
            class: 'e-control e-combobox e-lib e-input e-keyboard',
            placeholder: o.placeholder,
          },
          null,
          40,
          W,
        ),
        [[b, a.vModelForChild]],
      ),
      n(
        'datalist',
        { id: o.nameList },
        [
          (r(true),
          u(
            L,
            null,
            N(
              o.list,
              (s) => (
                r(),
                u(
                  'option',
                  {
                    key: s,
                    value: s,
                  },
                  null,
                  8,
                  R,
                )
              ),
            ),
            128,
          )),
        ],
        8,
        K,
      ),
      o.nullable && a.isFocus && a.vModelForChild.length
        ? (r(),
          u(
            'span',
            {
              key: 0,
              onMousedown: t[3] || (t[3] = A((...s) => i.emptyVmodel && i.emptyVmodel(...s), ['prevent'])),
              class: 'e-clear-icon',
              'aria-label': 'close',
              role: 'button',
            },
            null,
            32,
          ))
        : T('', true),
    ],
    34,
  );
}
const H = S(I, [['render', Y]]);
const z = {
  components: { qbCombobox: H },
  methods: {
    updateValueCombobox(e, t) {
      let o = e.split('.');
      let l = this;
      let a = null;
      o.forEach((i, s) => {
        s < o.length - 1 ? (l = l[i]) : (a = i);
      });
      l[a] = t;
    },
    keyupValueCombobox(e, t) {
      this.updateValueCombobox(e, t);
    },
    changeValueCombobox(e, t) {
      this.updateValueCombobox(e, t);
    },
  },
};
const G = {
  mixins: [P, F, x, D, z, E, B],
  components: { headerTemplate: J },
  props: {
    dataTagMain: {
      required: false,
      default: function () {
        return {
          code: '',
          designation: '',
          client_code: '',
          client_designation: '',
          pid: '',
          lcn: '',
          alc: '',
          category: '',
          criticality: '',
          location_id: '',
        };
      },
    },
  },
  data() {
    return {
      dataTagMainObject: { ...this.dataTagMain },
      iconeAddTag: true,
      width: '750px',
      fieldsLocation: {
        text: 'full_text',
        value: 'id',
      },
      category: [],
      criticality: [],
      locations: [],
      patterns: [],
      allowFiltering: true,
      tooltipCode: null,
      correspCodePattern: null,
      codes_tags: [],
      designations_tags: [],
      axiosCanceler: null,
    };
  },
  methods: {
    changeCodeTag() {
      this.getLastTagSearch(this.dataTagMainObject.code, 'code');
      this.calculWeightTagCode();
    },
    changeDesignationTag() {
      this.getLastTagSearch(this.dataTagMainObject.designation, 'designation');
    },
    getLastTagSearch(e, t) {
      if (e == '' || e.length <= 3) return;
      if (this.axiosCanceler) {
        this.axiosCanceler();
        this.axiosCanceler = null;
      }
      let o = this;
      axios
        .get('api/tags/autocomplete/' + t + '/' + e, {
          cancelToken: new U.CancelToken(function (a) {
            o.axiosCanceler = a;
          }),
        })
        .then((l) => {
          if (t === 'code') {
            this.codes_tags = l.data;
          }
          if (t === 'designation') {
            this.designations_tags = l.data;
          }
        })
        .catch((l) => {});
    },
    calculWeightTagCode() {
      this.dataTagMainObject.code = this.dataTagMainObject.code.toUpperCase().replace('<', '').replace('>', '');
      let e = this.styledTag(this.dataTagMainObject.code);
      this.tooltipCode = e.styledTagText;
      this.correspCodePattern = this.isCodeMatchingAnyPattern();
    },
    isCodeMatchingAnyPattern() {
      return !this.dataTagMainObject.code || !this.patterns.length
        ? null
        : this.patterns.some((e) => {
            const t = e.regex.match(/^\/(.+)\/([gimsuy]*)$/);
            return t ? new RegExp(t[1], t[2]).test(this.dataTagMainObject.code) : null;
          });
    },
    saveCreateTag() {
      this.dataTagMainObject.code = this.dataTagMainObject.code.trim();
      if (this.validateStringLength(this.dataTagMainObject.code, this.trans.get('__JSON__.model.value.code'))) {
        this.dataTagMainObject.designation = this.dataTagMainObject.designation.trim();
        if (
          this.validateStringLength(
            this.dataTagMainObject.designation,
            this.trans.get('__JSON__.model.value.designation'),
          )
        ) {
          if (!this.blockRequest) {
            this.blockRequest = true;
            v(document.getElementById('spinnerModalAdd'));
            axios
              .post('api/tags', this.dataTagMainObject)
              .then((e) => {
                this.blockRequest = false;
                M(document.getElementById('spinnerModalAdd'));
                if (e.status == 201) {
                  j.$emit('addObjectGrid', {
                    object: e.data.main.tag,
                    type: 'tags',
                  });
                  this.$emit('objectCreated', e.data.main.tag);
                  this.openNewObject(e.data.main.tag.id, 'tags');
                  this.closeModal();
                }
              })
              .catch((e) => {
                this.blockRequest = false;
                console.error(e);
                M(document.getElementById('spinnerModalAdd'));
              });
          }
        }
      }
    },
  },
  mounted() {
    this.$refs.createTag.show();
    q({ target: document.getElementById('spinnerModalAdd') });
    v(document.getElementById('spinnerModalAdd'));
    axios.get('api/tags/createData').then((e) => {
      this.locations = e.data.locations;
      this.category = e.data.category;
      this.criticality = e.data.criticality;
      this.patterns = e.data.patterns;
      this.codes_tags = e.data.codes_tags;
      this.designations_tags = e.data.designations_tags;
    });
    this.getWeightData();
  },
};
const Q = {
  key: 2,
  class: 'tooltipSyncfusion-inline',
};
const X = { key: 0 };
const Z = ['innerHTML'];
const $ = { class: 'container mt-4' };
const ee = { class: 'row' };
const te = { class: 'col-md-4' };
const ae = { class: 'col-md-4' };
const oe = { class: 'col-md-4' };
const ne = { class: 'row mt-4' };
const ie = { class: 'col-md-4' };
const se = ['placeholder'];
const le = { class: 'col-md-4' };
const de = ['placeholder'];
const ce = { class: 'col-md-4' };
const re = ['placeholder'];
const ge = { class: 'row mt-4' };
const he = { class: 'col-md-4' };
const ue = { class: 'col-md-4' };
const pe = { class: 'col-md-4' };
const me = ['placeholder'];
const _e = { class: 'row mt-4' };
const be = { class: 'col-md-4' };
const Te = ['placeholder'];
const Me = { class: 'e-footer-content mt-4' };
function fe(e, t, o, l, a, i) {
  const s = m('ejs-tooltip');
  const f = m('headerTemplate');
  const p = m('qb-combobox');
  const g = m('qb-dropdownlist');
  const C = m('ejs-button');
  const k = m('ejs-dialog');
  r();
  return u('div', null, [
    c(
      k,
      {
        ref: 'createTag',
        header: 'headerTemplate',
        content: 'templateContent',
        width: a.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        close: e.closeModal,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: h(() => [
          c(
            f,
            { title: e.trans.get('__JSON__.tag.content.newTag') },
            {
              previous: h(() => [
                a.correspCodePattern !== null && !a.correspCodePattern
                  ? (r(),
                    w(
                      s,
                      {
                        key: 0,
                        content: this.trans.get('__JSON__.main.content.codeNotInPattern'),
                        position: 'TopCenter',
                        animation: e.default_SF_Props.animationTooltip,
                        class: 'tooltipSyncfusion-inline',
                      },
                      {
                        default: h(() => [
                          ...(t[5] || (t[5] = [n('span', { class: 'sf-icon-warning pointer badge-red' }, null, -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content', 'animation'],
                    ))
                  : T('', true),
                a.correspCodePattern !== null && a.correspCodePattern
                  ? (r(),
                    w(
                      s,
                      {
                        key: 1,
                        content: this.trans.get('__JSON__.main.content.codeInPattern'),
                        position: 'TopCenter',
                        animation: e.default_SF_Props.animationTooltip,
                        class: 'tooltipSyncfusion-inline',
                      },
                      {
                        default: h(() => [
                          ...(t[6] ||
                            (t[6] = [n('span', { class: 'sf-icon-check-01 pointer badge-green' }, null, -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content', 'animation'],
                    ))
                  : T('', true),
                a.correspCodePattern === null ? (r(), u('div', Q)) : T('', true),
              ]),
              after: h(() => [
                a.tooltipCode
                  ? (r(),
                    u('span', X, [t[7] || (t[7] = y(' : ', -1)), n('span', { innerHTML: a.tooltipCode }, null, 8, Z)]))
                  : T('', true),
              ]),
              _: 1,
            },
            8,
            ['title'],
          ),
        ]),
        templateContent: h(() => [
          n('div', null, [
            n('div', $, [
              t[8] || (t[8] = n('div', { id: 'spinnerModalAdd' }, null, -1)),
              n('div', ee, [
                n('div', te, [
                  c(
                    p,
                    {
                      list: a.codes_tags,
                      vModel: a.dataTagMainObject.code,
                      'name-list': 'codes_tags',
                      placeholder: e.trans.get('__JSON__.model.value.code'),
                      modelToUpdate: 'dataTagMainObject.code',
                      keyup: e.keyupValueCombobox,
                      change: e.changeValueCombobox,
                      nullable: true,
                      onKeyupAppend: i.changeCodeTag,
                      onChangeAppend: i.changeCodeTag,
                    },
                    null,
                    8,
                    ['list', 'vModel', 'placeholder', 'keyup', 'change', 'onKeyupAppend', 'onChangeAppend'],
                  ),
                ]),
                n('div', ae, [
                  c(
                    p,
                    {
                      list: a.designations_tags,
                      vModel: a.dataTagMainObject.designation,
                      'name-list': 'designations_tags',
                      placeholder: e.trans.get('__JSON__.model.value.designation'),
                      modelToUpdate: 'dataTagMainObject.designation',
                      keyup: e.keyupValueCombobox,
                      change: e.changeValueCombobox,
                      nullable: true,
                      onKeyupAppend: i.changeDesignationTag,
                      onChangeAppend: i.changeDesignationTag,
                    },
                    null,
                    8,
                    ['list', 'vModel', 'placeholder', 'keyup', 'change', 'onKeyupAppend', 'onChangeAppend'],
                  ),
                ]),
                n('div', oe, [
                  c(
                    g,
                    {
                      fields: a.fieldsLocation,
                      dataSource: a.locations,
                      vModel: a.dataTagMainObject.location_id,
                      modelToUpdate: 'dataTagMainObject.location_id',
                      placeholder: e.trans.get('__JSON__.location.content.selectLocation'),
                      select: e.selectValueList,
                    },
                    null,
                    8,
                    ['fields', 'dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              n('div', ne, [
                n('div', ie, [
                  _(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[0] || (t[0] = (d) => (a.dataTagMainObject.pid = d)),
                        placeholder: e.trans.get('__JSON__.tag.value.p&id'),
                      },
                      null,
                      8,
                      se,
                    ),
                    [[b, a.dataTagMainObject.pid]],
                  ),
                ]),
                n('div', le, [
                  _(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[1] || (t[1] = (d) => (a.dataTagMainObject.lcn = d)),
                        placeholder: e.trans.get('__JSON__.tag.value.lcn'),
                      },
                      null,
                      8,
                      de,
                    ),
                    [[b, a.dataTagMainObject.lcn]],
                  ),
                ]),
                n('div', ce, [
                  _(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[2] || (t[2] = (d) => (a.dataTagMainObject.alc = d)),
                        placeholder: e.trans.get('__JSON__.tag.value.alc'),
                      },
                      null,
                      8,
                      re,
                    ),
                    [[b, a.dataTagMainObject.alc]],
                  ),
                ]),
              ]),
              n('div', ge, [
                n('div', he, [
                  c(
                    g,
                    {
                      dataSource: a.category,
                      vModel: a.dataTagMainObject.category,
                      modelToUpdate: 'dataTagMainObject.category',
                      placeholder: e.trans.get('__JSON__.tag.content.selectCategory'),
                      select: e.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                n('div', ue, [
                  c(
                    g,
                    {
                      dataSource: a.criticality,
                      vModel: a.dataTagMainObject.criticality,
                      modelToUpdate: 'dataTagMainObject.criticality',
                      placeholder: e.trans.get('__JSON__.tag.content.selectCriticality'),
                      select: e.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                n('div', pe, [
                  _(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[3] || (t[3] = (d) => (a.dataTagMainObject.client_code = d)),
                        placeholder: e.trans.get('__JSON__.model.value.client_code'),
                      },
                      null,
                      8,
                      me,
                    ),
                    [[b, a.dataTagMainObject.client_code]],
                  ),
                ]),
              ]),
              n('div', _e, [
                n('div', be, [
                  _(
                    n(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': t[4] || (t[4] = (d) => (a.dataTagMainObject.client_designation = d)),
                        placeholder: e.trans.get('__JSON__.model.value.client_designation'),
                      },
                      null,
                      8,
                      Te,
                    ),
                    [[b, a.dataTagMainObject.client_designation]],
                  ),
                ]),
              ]),
            ]),
            n('div', Me, [
              n('span', null, [
                c(
                  C,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: h(() => [y(O(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                c(
                  C,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: i.saveCreateTag,
                  },
                  {
                    default: h(() => [y(O(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const Se = S(G, [
  ['render', fe],
  ['__scopeId', 'data-v-dcb8059a'],
]);
export { E as c, Se as d };
