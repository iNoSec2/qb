import {
  _ as p,
  E as o,
  c as s,
  b as l,
  a as r,
  w as c,
  r as m,
  F as v,
  o as i,
  $ as u,
  t as b,
} from '../assets/app-BjImoLrr.js';
const C = {
  props: {
    objetApiPrefix: { required: true },
    data: { required: true },
  },
  computed: {
    canDeleteValue: function () {
      return (
        (!this.data.deleted_at || this.objetApiPrefix === 'allowed_list_values') &&
        !(
          !this.can('delete', this.objetApiPrefix) ||
          (this.objetApiPrefix === 'allowed_list_values' && this.data.hasUseCases) ||
          this.data.deletable === 0 ||
          (this.data.useCaseCount && this.data.useCaseCount !== 0)
        )
      );
    },
    canRestoreValue() {
      return this.data.deleted_at && this.objetApiPrefix === 'values' && this.can('restore', 'values');
    },
  },
  methods: {
    restoreValues() {
      if (this.can('restore', 'values')) {
        axios
          .put('api/values/' + this.data.id + '/restore', {})
          .then((e) => {
            if (
              this.data.list &&
              (this.data.list.code == 'denied_extension' || this.data.list.code == 'allowed_extension')
            ) {
              o.$emit('reloadExtensionForUpload');
            }
            o.$emit('updateValueGrid', e.data);
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
    deleteAllowedValues() {
      if (this.can('delete', this.objetApiPrefix)) {
        axios
          .delete('api/' + this.objetApiPrefix + '/' + this.data.id)
          .then((e) => {
            if (this.data.value_list_code == 'denied_extension' || this.data.value_list_code == 'allowed_extension') {
              o.$emit('reloadExtensionForUpload');
            }
            console.log(e);
            this.objetApiPrefix === 'allowed_list_values'
              ? o.$emit('valueGridDelete', [
                  {
                    idElementChildRow: e.data.value_id,
                    parentRowId: e.data.value_list_id,
                  },
                ])
              : o.$emit('updateValueGrid', e.data);
            o.$emit('checkDeletePanel', {
              typeObject: this.objetApiPrefix,
              refObject: this.data.id,
            });
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
  },
};
const g = { class: 'gridActions' };
const x = { class: 'd-flex' };
const w = {
  key: 1,
  class: 'me-2 row-disabled',
};
function j(e, t, _, h, f, a) {
  const d = m('ejs-tooltip');
  i();
  return s('div', g, [
    l('div', x, [
      a.canDeleteValue
        ? (i(),
          s(
            'div',
            {
              key: 0,
              style: { cursor: 'pointer' },
              class: 'me-2',
              onClick: t[0] || (t[0] = (...n) => a.deleteAllowedValues && a.deleteAllowedValues(...n)),
            },
            [
              r(
                d,
                {
                  content: e.trans.get('__JSON__.model.action.delete'),
                  position: 'TopCenter',
                  animation: e.default_SF_Props.animationTooltip,
                },
                {
                  default: c(() => [
                    ...(t[2] || (t[2] = [l('span', { class: 'sf-icon-garbage-wf iconeGrid' }, null, -1)])),
                  ]),
                  _: 1,
                },
                8,
                ['content', 'animation'],
              ),
            ],
          ))
        : (i(),
          s(
            v,
            { key: 1 },
            [
              a.canRestoreValue
                ? (i(),
                  s(
                    'div',
                    {
                      key: 0,
                      style: { cursor: 'pointer' },
                      class: 'me-2',
                      onClick: t[1] || (t[1] = (...n) => a.restoreValues && a.restoreValues(...n)),
                    },
                    [
                      r(
                        d,
                        {
                          content: e.trans.get('__JSON__.model.action.restore'),
                          position: 'TopCenter',
                          animation: e.default_SF_Props.animationTooltip,
                        },
                        {
                          default: c(() => [
                            ...(t[3] ||
                              (t[3] = [l('span', { class: 'sf-icon-recover-deleted-item-wf iconeGrid' }, null, -1)])),
                          ]),
                          _: 1,
                        },
                        8,
                        ['content', 'animation'],
                      ),
                    ],
                  ))
                : (i(),
                  s('div', w, [
                    r(
                      d,
                      {
                        content: e.trans.get('__JSON__.model.action.delete'),
                        position: 'TopCenter',
                        animation: e.default_SF_Props.animationTooltip,
                      },
                      {
                        default: c(() => [
                          ...(t[4] || (t[4] = [l('span', { class: 'sf-icon-garbage-wf iconeGrid me-2' }, null, -1)])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['content', 'animation'],
                    ),
                  ])),
            ],
            64,
          )),
    ]),
  ]);
}
const F = p(C, [['render', j]]);
const A = {
  props: {
    objetType: { required: false },
    data: { required: false },
  },
  data: function () {
    return {
      colorBadge: '',
      colorText: '',
      dataCode: '',
    };
  },
  computed: {
    code() {
      return this.data.code || this.data.value.code;
    },
  },
  methods: {
    colorNone() {
      this.objetType == 'allowed_list_values' ? (this.dataCode = this.data.value) : (this.dataCode = this.data);
      if (this.dataCode.color) {
        let e = this.dataCode.color;
        this.colorBadge = 'background-color:' + e;
        if (e.charAt(0) == '#') {
          e = e.substr(1);
        }
        0.2125 * parseInt('0X' + e.substring(0, 2)) +
          0.7154 * parseInt('0X' + e.substring(2, 4)) +
          0.0721 * parseInt('0X' + e.substring(4, 6)) <
        155
          ? (this.colorText = 'color:#FFFFFF')
          : (this.colorText = 'color:#000000');
      } else this.colorBadge = '';
    },
  },
  mounted() {
    this.colorNone();
  },
};
function V(e, t, _, h, f, a) {
  i();
  return s('div', null, [
    l(
      'div',
      {
        style: u(e.colorBadge),
        class: 'colorCode colorTemp',
      },
      [l('span', { style: u(e.colorText) }, b(a.code), 5)],
      4,
    ),
  ]);
}
const P = p(A, [['render', V]]);
export { F as a, P as t };
