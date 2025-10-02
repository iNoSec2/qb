import { d as O } from './Nw-Fho2_.js';
import {
  _ as J,
  k as w,
  p as M,
  s as I,
  i as _,
  E as k,
  c as p,
  a as i,
  w as c,
  r as m,
  o as h,
  b as a,
  d as l,
  v as n,
  t as u,
  g as S,
  e as b,
} from '../assets/app-BjImoLrr.js';
import { c as C } from './DvWiUwH6.js';
import { h as V } from './CKKuZvVl.js';
import { a as q, q as U } from './CHw12MFN.js';
import { o as T } from './sKBcFuym.js';
const P = {
  components: {
    qbDropdownlist: U,
    headerTemplate: V,
  },
  mixins: [O, w, C, q, T],
  props: {
    dataItemProp: {
      required: false,
      default() {
        return {};
      },
    },
  },
  data() {
    let t = {
      code: '',
      designation: '',
      description: '',
      mtbf: null,
      mttr: null,
      weight: null,
      clutter: '',
      itemCat: null,
      status_id: null,
      conditioning: null,
      storage_unit: null,
      packaging_cat: null,
      manutention_cat: null,
      storage_cat: null,
      supply_unit: null,
      spare_part: false,
      item_type: 1,
      quantity_to_stock: null,
      quantity_reorder: null,
      shelf_life_months: null,
    };
    t = {
      ...t,
      ...this.dataItemProp,
    };
    return {
      objet: 'item',
      supplier: [],
      item_type: [],
      item_cat: [],
      status: [],
      conditioning: [],
      storage_unit: [],
      packaging_cat: [],
      manutention_cat: [],
      storage_cat: [],
      supply_unit: [],
      width: '1000px',
      idActive: null,
      idInactive: null,
      fieldsItemType: {
        text: 'name',
        value: 'value_id',
      },
      dataItem: t,
    };
  },
  computed: {
    showSparePart() {
      return this.dataItem.item_type === 1;
    },
  },
  methods: {
    valueStatus(t) {
      this.dataItem.status_id = t.value;
    },
    saveCreate() {
      this.dataItem.code = this.dataItem.code.trim();
      if (
        !this.validateStringLength(this.dataItem.code, this.trans.get('__JSON__.model.value.code'), 0) ||
        ((this.dataItem.designation = this.dataItem.designation.trim()),
        !this.validateStringLength(this.dataItem.designation, this.trans.get('__JSON__.model.value.designation'))) ||
        !this.inputControlePositif(
          '__JSON__.main.modal.toast.error.enterPositiveNumber',
          this.dataItem.weight,
          this.trans.get('__JSON__.items.value.weight'),
        ) ||
        !this.inputControlePositif(
          '__JSON__.main.modal.toast.error.enterPositiveNumber',
          this.dataItem.mtbf,
          this.trans.get('__JSON__.items.value.mtbf'),
        ) ||
        !this.inputControlePositif(
          '__JSON__.main.modal.toast.error.enterPositiveNumber',
          this.dataItem.mttr,
          this.trans.get('__JSON__.items.value.mttr'),
        ) ||
        !this.inputControlePositif(
          '__JSON__.main.modal.toast.error.enterPositiveNumber',
          this.dataItem.quantity_reorder,
          this.trans.get('__JSON__.model.item.quantity_reorder'),
        ) ||
        !this.inputControlePositif(
          '__JSON__.main.modal.toast.error.enterPositiveNumber',
          this.dataItem.shelf_life_months,
          this.trans.get('__JSON__.model.item.shelf_life_months'),
        ) ||
        !this.inputControlePositif(
          '__JSON__.main.modal.toast.error.enterPositiveNumber',
          this.dataItem.quantity_to_stock,
          this.trans.get('__JSON__.model.item.quantity_to_stock'),
        )
      )
        return;
      let t = { ...this.dataItem };
      if (!this.blockRequest) {
        this.blockRequest = true;
        I(document.getElementById('spinnerModalAdd'));
        axios
          .post('api/items', t)
          .then((o) => {
            this.blockRequest = false;
            _(document.getElementById('spinnerModalAdd'));
            if (o.status === 201) {
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
              k.$emit('addObjectGrid', {
                object: o.data.main.item,
                type: 'items',
              });
              this.$emit('objectCreated', o.data.main.item);
              this.openNewObject(o.data.main.item.id, 'items');
              this.closeModal();
            }
          })
          .catch((o) => {
            this.blockRequest = false;
            _(document.getElementById('spinnerModalAdd'));
            console.error(o);
          });
      }
    },
  },
  mounted() {
    M({ target: document.getElementById('spinnerModalAdd') });
    I(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/items/createData')
      .then((t) => {
        _(document.getElementById('spinnerModalAdd'));
        this.supplier = t.data.companies;
        this.item_type = t.data.item_type;
        this.item_cat = t.data.item_category;
        this.conditioning = t.data.conditioning;
        this.storage_unit = t.data.storage_unit;
        this.packaging_cat = t.data.packaging_category;
        this.manutention_cat = t.data.manutention_category;
        this.storage_cat = t.data.storage_category;
        this.supply_unit = t.data.supply_unit;
        t.data.status.forEach((o) => {
          if (o.code == 'active') {
            this.idActive = o.id;
            this.dataItem.status_id = o.id;
          }
          if (o.code == 'inactive') {
            this.idInactive = o.id;
          }
        });
      })
      .catch((t) => {
        _(document.getElementById('spinnerModalAdd'));
        console.error(t);
      });
  },
};
const j = { class: 'container mt-4' };
const A = { class: 'row' };
const B = { class: 'col-md-2' };
const E = ['placeholder'];
const L = { class: 'col-md-6' };
const D = ['placeholder'];
const R = { class: 'col-md-1' };
const F = { class: 'col-md-3' };
const G = { class: 'row mt-4' };
const z = { class: 'col-md-8' };
const H = ['placeholder'];
const K = { class: 'col-md-4' };
const Q = { class: 'row mt-4' };
const W = { class: 'col-md-4' };
const X = { class: 'col-md-4' };
const Y = { class: 'col-md-4' };
const Z = { class: 'row mt-4' };
const x = { class: 'col-md-4' };
const $ = { class: 'col-md-4' };
const tt = { class: 'col-md-4' };
const et = { class: 'row mt-4' };
const at = { class: 'col-md-4' };
const ot = { class: 'col-md-4' };
const st = ['placeholder'];
const it = { class: 'col-md-4' };
const lt = ['placeholder'];
const nt = { class: 'row mt-4' };
const dt = { class: 'col-md-4' };
const mt = ['placeholder'];
const rt = { class: 'col-md-4' };
const _t = ['placeholder'];
const ct = { class: 'col-md-4' };
const ut = ['placeholder'];
const pt = { class: 'row mt-4' };
const ht = { class: 'col-md-4' };
const gt = ['placeholder'];
const vt = { class: 'col-md-4' };
const It = ['placeholder'];
const St = {
  key: 0,
  class: 'col-md-2',
};
const bt = {
  key: 1,
  class: 'col-md-2',
};
const ft = { class: 'e-footer-content mt-4' };
function yt(t, o, Nt, Ot, e, r) {
  const f = m('headerTemplate');
  const g = m('ejs-radiobutton');
  const d = m('qb-dropdownlist');
  const y = m('ejs-switch');
  const v = m('ejs-button');
  const N = m('ejs-dialog');
  h();
  return p('div', null, [
    i(
      N,
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
        headerTemplate: c(() => [i(f, { title: t.trans.get('__JSON__.items.content.newItem') }, null, 8, ['title'])]),
        templateContent: c(() => [
          a('div', null, [
            a('div', j, [
              o[11] || (o[11] = a('div', { id: 'spinnerModalAdd' }, null, -1)),
              a('div', A, [
                a('div', B, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[0] || (o[0] = (s) => (e.dataItem.code = s)),
                        placeholder: t.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      E,
                    ),
                    [[n, e.dataItem.code]],
                  ),
                ]),
                a('div', L, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[1] || (o[1] = (s) => (e.dataItem.designation = s)),
                        placeholder: t.trans.get('__JSON__.model.value.designation'),
                      },
                      null,
                      8,
                      D,
                    ),
                    [[n, e.dataItem.designation]],
                  ),
                ]),
                a('span', R, u(t.trans.get('__JSON__.items.value.status')) + ' : ', 1),
                a('div', F, [
                  i(
                    g,
                    {
                      label: t.trans.get('__JSON__.items.content.active'),
                      cssClass: 'e-small',
                      name: 'status',
                      checked: 'true',
                      value: e.idActive,
                      onChange: r.valueStatus,
                    },
                    null,
                    8,
                    ['label', 'value', 'onChange'],
                  ),
                  i(
                    g,
                    {
                      label: t.trans.get('__JSON__.items.content.inactive'),
                      cssClass: 'e-small',
                      name: 'status',
                      value: e.idInactive,
                      onChange: r.valueStatus,
                    },
                    null,
                    8,
                    ['label', 'value', 'onChange'],
                  ),
                ]),
              ]),
              a('div', G, [
                a('div', z, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[2] || (o[2] = (s) => (e.dataItem.description = s)),
                        placeholder: t.trans.get('__JSON__.model.value.description'),
                      },
                      null,
                      8,
                      H,
                    ),
                    [[n, e.dataItem.description]],
                  ),
                ]),
                a('div', K, [
                  i(
                    d,
                    {
                      fields: e.fieldsItemType,
                      dataSource: e.item_type,
                      vModel: e.dataItem.item_type,
                      modelToUpdate: 'dataItem.item_type',
                      placeholder: t.trans.get('__JSON__.model.item.item_type'),
                      select: t.selectValueList,
                      nullable: false,
                    },
                    null,
                    8,
                    ['fields', 'dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              a('div', Q, [
                a('div', W, [
                  i(
                    d,
                    {
                      dataSource: e.item_cat,
                      vModel: e.dataItem.itemCat,
                      modelToUpdate: 'dataItem.itemCat',
                      placeholder: t.trans.get('__JSON__.items.content.item_category'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                a('div', X, [
                  i(
                    d,
                    {
                      dataSource: e.conditioning,
                      vModel: e.dataItem.conditioning,
                      modelToUpdate: 'dataItem.conditioning',
                      placeholder: t.trans.get('__JSON__.items.content.conditioning'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                a('div', Y, [
                  i(
                    d,
                    {
                      dataSource: e.storage_unit,
                      vModel: e.dataItem.conditioning,
                      modelToUpdate: 'dataItem.storage_unit',
                      placeholder: t.trans.get('__JSON__.items.content.storage_unit'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              a('div', Z, [
                a('div', x, [
                  i(
                    d,
                    {
                      dataSource: e.packaging_cat,
                      vModel: e.dataItem.packaging_cat,
                      modelToUpdate: 'dataItem.packaging_cat',
                      placeholder: t.trans.get('__JSON__.items.content.packaging_cat'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                a('div', $, [
                  i(
                    d,
                    {
                      dataSource: e.manutention_cat,
                      vModel: e.dataItem.manutention_cat,
                      modelToUpdate: 'dataItem.manutention_cat',
                      placeholder: t.trans.get('__JSON__.items.content.manutention_cat'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                a('div', tt, [
                  i(
                    d,
                    {
                      dataSource: e.storage_cat,
                      vModel: e.dataItem.storage_cat,
                      modelToUpdate: 'dataItem.storage_cat',
                      placeholder: t.trans.get('__JSON__.items.content.storage_cat'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
              ]),
              a('div', et, [
                a('div', at, [
                  i(
                    d,
                    {
                      dataSource: e.supply_unit,
                      vModel: e.dataItem.supply_unit,
                      modelToUpdate: 'dataItem.supply_unit',
                      placeholder: t.trans.get('__JSON__.items.content.supply_unit'),
                      select: t.selectValueList,
                    },
                    null,
                    8,
                    ['dataSource', 'vModel', 'placeholder', 'select'],
                  ),
                ]),
                a('div', ot, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        step: '0.5',
                        'onUpdate:modelValue': o[3] || (o[3] = (s) => (e.dataItem.mtbf = s)),
                        placeholder: t.trans.get('__JSON__.items.value.mtbf'),
                      },
                      null,
                      8,
                      st,
                    ),
                    [[n, e.dataItem.mtbf]],
                  ),
                ]),
                a('div', it, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        step: '0.5',
                        'onUpdate:modelValue': o[4] || (o[4] = (s) => (e.dataItem.mttr = s)),
                        placeholder: t.trans.get('__JSON__.items.value.mttr'),
                      },
                      null,
                      8,
                      lt,
                    ),
                    [[n, e.dataItem.mttr]],
                  ),
                ]),
              ]),
              a('div', nt, [
                a('div', dt, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        'onUpdate:modelValue': o[5] || (o[5] = (s) => (e.dataItem.weight = s)),
                        placeholder: t.trans.get('__JSON__.items.value.weight'),
                      },
                      null,
                      8,
                      mt,
                    ),
                    [[n, e.dataItem.weight]],
                  ),
                ]),
                a('div', rt, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[6] || (o[6] = (s) => (e.dataItem.clutter = s)),
                        placeholder: t.trans.get('__JSON__.items.value.clutter'),
                      },
                      null,
                      8,
                      _t,
                    ),
                    [[n, e.dataItem.clutter]],
                  ),
                ]),
                a('div', ct, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        'onUpdate:modelValue': o[7] || (o[7] = (s) => (e.dataItem.quantity_to_stock = s)),
                        placeholder: t.trans.get('__JSON__.model.item.quantity_to_stock'),
                      },
                      null,
                      8,
                      ut,
                    ),
                    [[n, e.dataItem.quantity_to_stock]],
                  ),
                ]),
              ]),
              a('div', pt, [
                a('div', ht, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        'onUpdate:modelValue': o[8] || (o[8] = (s) => (e.dataItem.quantity_reorder = s)),
                        placeholder: t.trans.get('__JSON__.model.item.quantity_reorder'),
                      },
                      null,
                      8,
                      gt,
                    ),
                    [[n, e.dataItem.quantity_reorder]],
                  ),
                ]),
                a('div', vt, [
                  l(
                    a(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'number',
                        min: '0',
                        'onUpdate:modelValue': o[9] || (o[9] = (s) => (e.dataItem.shelf_life_months = s)),
                        placeholder: t.trans.get('__JSON__.model.item.shelf_life_months'),
                      },
                      null,
                      8,
                      It,
                    ),
                    [[n, e.dataItem.shelf_life_months]],
                  ),
                ]),
                r.showSparePart
                  ? (h(), p('span', St, u(t.trans.get('__JSON__.model.item.spare_part')) + ' : ', 1))
                  : S('', true),
                r.showSparePart
                  ? (h(),
                    p('div', bt, [
                      i(
                        y,
                        {
                          ref: 'toggleSwitch',
                          checked: e.dataItem.spare_part,
                          modelValue: e.dataItem.spare_part,
                          'onUpdate:modelValue': o[10] || (o[10] = (s) => (e.dataItem.spare_part = s)),
                        },
                        null,
                        8,
                        ['checked', 'modelValue'],
                      ),
                    ]))
                  : S('', true),
              ]),
              a('div', ft, [
                a('span', null, [
                  i(
                    v,
                    {
                      class: 'e-control e-btn sendButton',
                      onClick: t.closeModal,
                    },
                    {
                      default: c(() => [b(u(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                      _: 1,
                    },
                    8,
                    ['onClick'],
                  ),
                  i(
                    v,
                    {
                      cssClass: 'e-info',
                      class: 'e-control e-btn e-primary sendButton',
                      onClick: r.saveCreate,
                    },
                    {
                      default: c(() => [b(u(t.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const qt = J(P, [['render', yt]]);
export { qt as d };
