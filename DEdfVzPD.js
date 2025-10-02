import { _ as f, k as _, c as g, a, w as r, r as i, o as h, b as l, e as s, t as m } from '../assets/app-BjImoLrr.js';
import { g as y } from './D_eyCAsX.js';
import { h as D } from './CKKuZvVl.js';
import { D as b } from './CeaU_JMC.js';
/* empty css                    */
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './ZS-VIFna.js';
import './DrOYtW4t.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
import './BCTXnxKj.js';
import './DvWiUwH6.js';
import './Nw-Fho2_.js';
import './BpLTBrfQ.js';
import './DZOApFs4.js';
import './CHw12MFN.js';
import './sKBcFuym.js';
import './H3zXViHv.js';
import './CUvLZwvz.js';
/* empty css        */
import './SUr2wc-1.js';
import './BWJp0flw.js';
import './A0nBLeas.js';
const C = {
  mixins: [_, y],
  components: {
    DynamicGrid: b,
    headerTemplate: D,
  },
  props: {
    dynamicRequestId: { required: false },
    gridUrl: { required: false },
    gridDatas: { required: false },
    supplementaryParamsUrl: {
      required: false,
      default() {
        return {};
      },
    },
    promptWidth: {
      required: false,
      default() {
        return '1000px';
      },
    },
    numberMax: {
      required: false,
      default() {
        return 500;
      },
    },
    header: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return { animationSettings: { effect: 'None' } };
  },
  methods: {
    closeModal() {
      this.$refs.modalDynamicGrid.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    selectData() {
      let t = this.$refs.dynamicGrid.callGridFunction('getSelectedRecords');
      if (t.length) {
        this.$emit('selectData', t);
      }
    },
  },
  mounted() {},
};
const q = { class: 'e-footer-content mt-4' };
function M(t, S, e, x, d, o) {
  const c = i('headerTemplate');
  const u = i('dynamic-grid');
  const n = i('ejs-button');
  const p = i('ejs-dialog');
  h();
  return g('div', null, [
    a(
      p,
      {
        ref: 'modalDynamicGrid',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: d.animationSettings,
        showCloseIcon: true,
        close: o.onModalClose,
        width: e.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: r(() => [a(c, { title: e.header }, null, 8, ['title'])]),
        templateContent: r(() => [
          a(
            u,
            {
              ref: 'dynamicGrid',
              dynamicRequestId: e.dynamicRequestId,
              gridUrl: e.gridUrl,
              supplementaryParamsUrl: e.supplementaryParamsUrl,
              gridDatas: e.gridDatas,
              showToolbar: false,
              numberMaxSelecting: e.numberMax,
              fromModal: true,
            },
            null,
            8,
            ['dynamicRequestId', 'gridUrl', 'supplementaryParamsUrl', 'gridDatas', 'numberMaxSelecting'],
          ),
          l('div', q, [
            l('span', null, [
              a(
                n,
                {
                  class: 'e-control e-btn sendButton',
                  onClick: o.closeModal,
                },
                {
                  default: r(() => [s(m(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                  _: 1,
                },
                8,
                ['onClick'],
              ),
              a(
                n,
                {
                  cssClass: 'e-info',
                  class: 'e-control e-btn e-primary sendButton',
                  onClick: o.selectData,
                },
                {
                  default: r(() => [s(m(t.trans.get('__JSON__.main.modal.button.select')), 1)]),
                  _: 1,
                },
                8,
                ['onClick'],
              ),
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
const Y = f(C, [['render', M]]);
export { Y as default };
