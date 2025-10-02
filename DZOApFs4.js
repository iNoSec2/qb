import {
  _ as o,
  k as m,
  c as d,
  g as u,
  b as n,
  t as c,
  d as f,
  v as x,
  n as h,
  o as r,
} from '../assets/app-BjImoLrr.js';
const b = {
  mixins: [m],
  props: {
    comment: { required: true },
    objectPermission: { required: true },
    fullLine: {
      required: false,
      default() {
        return false;
      },
    },
    disabled: {
      required: false,
      default() {
        return false;
      },
    },
    label: { required: false },
    placeholder: { required: false },
  },
  data() {
    return { commentData: this.comment };
  },
  mounted() {
    this.$nextTick(() => {
      this.updateTextArea();
    });
  },
  methods: {
    update() {
      this.$emit('updateComment', this.commentData);
    },
  },
};
const p = { class: 'card-text row mb-1' };
const _ = {
  key: 0,
  class: 'text_descriptif col-md-4 col-lg-4 col-xs-6 mt-2',
  style: { 'min-width': '75px' },
};
const q = ['disabled', 'placeholder'];
function v(l, t, e, y, s, i) {
  r();
  return d('div', p, [
    !e.fullLine && e.label ? (r(), d('span', _, c(e.label), 1)) : u('', true),
    n(
      'div',
      {
        class: h(!e.fullLine && e.label ? 'data col-md-7 col-xs-6' : 'col-md-12'),
        style: { 'min-width': '150px' },
      },
      [
        f(
          n(
            'textarea',
            {
              ref: 'textarea',
              'onUpdate:modelValue': t[0] || (t[0] = (a) => (s.commentData = a)),
              onChange: t[1] || (t[1] = (...a) => i.update && i.update(...a)),
              onInput: t[2] || (t[2] = (...a) => l.updateTextArea && l.updateTextArea(...a)),
              disabled: !l.can('update', e.objectPermission) || e.disabled,
              class: 'e-multi-line-input mt-2',
              style: {
                width: '100%',
                'min-height': '50px',
              },
              placeholder: e.placeholder ?? e.label,
            },
            null,
            40,
            q,
          ),
          [[x, s.commentData, void 0, { lazy: true }]],
        ),
      ],
      2,
    ),
  ]);
}
const g = o(b, [['render', v]]);
export { g as t };
