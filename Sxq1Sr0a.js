import { _ as c, c as l, b as i, a as r, w as d, r as u, o as m, n as _, D as f } from '../assets/app-BjImoLrr.js';
const g = {
  props: {
    isChild: {
      required: false,
      default() {
        return true;
      },
    },
  },
  methods: {
    massDeletePurchaseRequest(t) {
      if (this.isChild) {
        let e = this.$el;
        for (; e && e.parentElement && !e.classList.contains('e-childgrid'); ) e = e.parentElement;
        if (e && e.classList.contains('e-childgrid')) {
          let n = this.getSyncfusionInstanceFromElement(e, 'getSelectedRecords');
          this.$emit('massDeletePurchaseRequestItem', n.getSelectedRecords());
        }
      } else this.$emit('massDeletePurchaseRequestItem');
    },
  },
};
const q = { class: 'gridActions' };
const R = { class: 'd-flex' };
const D = { class: 'me-2' };
function C(t, e, n, h, p, s) {
  const o = u('ejs-tooltip');
  m();
  return l('div', q, [
    i('div', R, [
      i('div', D, [
        r(
          o,
          {
            content: t.trans.get('__JSON__.model.action.massDelete'),
            position: 'TopCenter',
            animation: t.default_SF_Props.animationTooltip,
          },
          {
            default: d(() => [
              i(
                'span',
                {
                  class: _(['sf-icon-garbage-wf iconeGrid', t.can('update', 'purchaseRequests') ? '' : 'disabledIcon']),
                  onClick: e[0] || (e[0] = (...a) => s.massDeletePurchaseRequest && s.massDeletePurchaseRequest(...a)),
                  style: { cursor: 'pointer' },
                },
                null,
                2,
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
    ]),
  ]);
}
const b = c(g, [['render', C]]);
const P = {
  props: { data: { required: true } },
  computed: {
    canDelete() {
      return this.can('update', 'purchaseRequests') && this.data.is_editable;
    },
  },
  methods: {
    deletePurchaseRequestItem() {
      this.dialogElement = f.confirm({
        title: this.trans.get('__JSON__.main.content.confirmation'),
        content: this.trans.get('__JSON__.purchaseRequest.content.confirmationDeleteItem'),
        okButton: {
          text: this.trans.get('__JSON__.main.modal.button.yes'),
          click: this.confirmDelete,
        },
        cancelButton: {
          text: this.trans.get('__JSON__.main.modal.button.no'),
          click: this.cancelClick,
        },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' },
      });
    },
    confirmDelete() {
      this.closeDialog();
      this.$emit('removePurchaseRequestItem', [
        {
          id: this.data.id,
          purchase_request_id: this.data.purchase_request_id,
        },
      ]);
    },
    closeDialog() {
      if (this.dialogElement) {
        this.dialogElement.hide();
      }
    },
  },
};
const S = { class: 'gridActions' };
const $ = { class: 'd-flex' };
const I = { class: 'me-2' };
function v(t, e, n, h, p, s) {
  const o = u('ejs-tooltip');
  m();
  return l('div', S, [
    i('div', $, [
      i('div', I, [
        r(
          o,
          {
            content: t.trans.get('__JSON__.model.action.delete'),
            position: 'TopCenter',
            animation: t.default_SF_Props.animationTooltip,
          },
          {
            default: d(() => [
              i(
                'span',
                {
                  class: _(['sf-icon-garbage-wf iconeGrid', s.canDelete ? '' : 'disabledIcon']),
                  onClick: e[0] || (e[0] = (...a) => s.deletePurchaseRequestItem && s.deletePurchaseRequestItem(...a)),
                  style: { cursor: 'pointer' },
                },
                null,
                2,
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
    ]),
  ]);
}
const k = c(P, [['render', v]]);
export { k as A, b as H };
