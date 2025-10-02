import { c as h } from './DvWiUwH6.js';
import { h as k } from './CKKuZvVl.js';
import { _ as S, c as f, a as o, w as l, r as c, o as g, b as s, e as r, t as d } from '../assets/app-BjImoLrr.js';
const b = {
  components: { headerTemplate: k },
  mixins: [h],
  props: {
    typeStock: {
      required: false,
      default() {
        return 'default';
      },
    },
  },
  data() {
    return {
      width: '400px',
      animationSettings: { effect: 'None' },
      stockSelected: null,
      stocks: [],
      fields: {
        text: 'designation',
        value: 'id',
      },
    };
  },
  mounted() {
    this.getStockData();
  },
  methods: {
    getStockData() {
      axios
        .get('api/stocks/type/' + this.typeStock)
        .then((e) => {
          this.stocks = e.data.stocks;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    filteringStock(e) {
      this.filterCombobox(e, this.stocks, 'designation');
    },
    closeModal() {
      this.$emit('close');
    },
    selectCart() {
      if (!this.stockSelected) {
        this.showCenterToast(this.trans.get('__JSON__.stocks.errors.selectStock'), 'e-toast-danger');
        return;
      }
      this.$emit('stockSelected', this.stockSelected);
    },
  },
};
const C = { class: 'container' };
const w = { class: 'row' };
const x = { class: 'e-footer-content mt-4' };
function N(e, a, v, T, t, n) {
  const m = c('headerTemplate');
  const _ = c('ejs-combobox');
  const i = c('ejs-button');
  const u = c('ejs-dialog');
  g();
  return f('div', null, [
    o(
      u,
      {
        ref: 'selectStockModal',
        header: 'headerTemplate',
        content: 'templateContent',
        width: t.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: t.animationSettings,
        close: n.closeModal,
        visible: true,
        isModal: true,
      },
      {
        headerTemplate: l(() => [
          o(m, { title: e.trans.get('__JSON__.stocks.content.selectStock') }, null, 8, ['title']),
        ]),
        templateContent: l(() => [
          s('div', null, [
            s('div', C, [
              s('div', w, [
                o(
                  _,
                  {
                    ref: 'comboboxEdit',
                    modelValue: t.stockSelected,
                    'onUpdate:modelValue': a[0] || (a[0] = (p) => (t.stockSelected = p)),
                    dataSource: t.stocks,
                    onFiltering: n.filteringStock,
                    fields: t.fields,
                    placeholder: e.trans.get('__JSON__.stocks.content.selectStock'),
                    autofill: true,
                    allowFiltering: false,
                    allowCustom: false,
                    width: '300px',
                    popupWidth: 'fit-content',
                  },
                  null,
                  8,
                  ['modelValue', 'dataSource', 'onFiltering', 'fields', 'placeholder'],
                ),
              ]),
            ]),
            s('div', x, [
              s('span', null, [
                o(
                  i,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: n.closeModal,
                  },
                  {
                    default: l(() => [r(d(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                o(
                  i,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: n.selectCart,
                  },
                  {
                    default: l(() => [r(d(e.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
      ['width', 'animationSettings', 'close'],
    ),
  ]);
}
const B = S(b, [['render', N]]);
export { B as S };
