import {
  _ as T,
  k as f,
  p as S,
  s as N,
  i as m,
  E as r,
  c as b,
  a as s,
  w as d,
  r as c,
  o as O,
  b as e,
  d as a,
  v as l,
  e as p,
  t as u,
} from '../assets/app-BjImoLrr.js';
import { h as y } from './CKKuZvVl.js';
import { d as C } from './Nw-Fho2_.js';
import { o as J } from './sKBcFuym.js';
const B = {
  mixins: [f, C, J],
  components: { headerTemplate: y },
  props: ['idParent', 'type', 'title'],
  data() {
    return {
      animationSettings: { effect: 'None' },
      width: '750px',
      dataTreeview: {
        reference: '',
        libelle: '',
        client_code: '',
        client_designation: '',
        id: null,
        parent_id: this.idParent ?? null,
        nodable_type: this.type ?? null,
        isStructureNode: true,
      },
      requestSend: false,
    };
  },
  methods: {
    addNode() {
      if (!this.requestSend) {
        this.dataTreeview.reference = this.dataTreeview.reference.trim();
        if (
          !this.validateStringLength(this.dataTreeview.reference, this.trans.get('__JSON__.model.value.code'), 0) ||
          ((this.dataTreeview.libelle = this.dataTreeview.libelle.trim()),
          !this.validateStringLength(this.dataTreeview.libelle, this.trans.get('__JSON__.model.value.designation'))) ||
          ((this.dataTreeview.client_code = this.dataTreeview.client_code.trim()),
          !this.validateStringLength(
            this.dataTreeview.client_code,
            this.trans.get('__JSON__.model.node.client_code'),
            0,
          )) ||
          ((this.dataTreeview.client_designation = this.dataTreeview.client_designation.trim()),
          !this.validateStringLength(
            this.dataTreeview.client_designation,
            this.trans.get('__JSON__.model.node.client_designation'),
            0,
          ))
        )
          return;
        this.requestSend = true;
        N(document.getElementById('spinnerAddNode'));
        axios
          .post('api/nodes', this.dataTreeview)
          .then((t) => {
            this.requestSend = false;
            m(document.getElementById('spinnerAddNode'));
            r.$emit('updateNodeTreeview', t.data.parentIds);
            r.$emit('refreshNodeGrid');
            r.$emit('getDataGrid', 'projects');
            this.openNewObject(t.data.nodeId, 'nodes');
            this.closeModal();
          })
          .catch(() => {
            this.requestSend = false;
            m(document.getElementById('spinnerAddNode'));
          });
      }
    },
  },
  mounted() {
    S({ target: document.getElementById('spinnerAddNode') });
  },
};
const j = { class: 'container mt-4' };
const k = { class: 'row' };
const E = { class: 'col-md-6' };
const I = ['placeholder'];
const V = { class: 'col-md-6' };
const A = ['placeholder'];
const q = { class: 'row' };
const M = { class: 'col-md-6 mt-2' };
const D = ['placeholder'];
const L = { class: 'col-md-6 mt-2' };
const U = ['placeholder'];
const x = { class: 'e-footer-content mt-4' };
function F(t, n, h, G, i, v) {
  const g = c('headerTemplate');
  const _ = c('ejs-button');
  const w = c('ejs-dialog');
  O();
  return b('div', null, [
    s(
      w,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: i.animationSettings,
        showCloseIcon: true,
        close: t.closeModal,
        width: i.width,
        allowDragging: true,
        isModal: true,
        visible: true,
      },
      {
        headerTemplate: d(() => [s(g, { title: h.title }, null, 8, ['title'])]),
        templateContent: d(() => [
          e('div', null, [
            e('div', j, [
              n[4] || (n[4] = e('div', { id: 'spinnerAddNode' }, null, -1)),
              e('div', k, [
                e('div', E, [
                  a(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        'onUpdate:modelValue': n[0] || (n[0] = (o) => (i.dataTreeview.reference = o)),
                        placeholder: t.trans.get('__JSON__.model.value.code'),
                      },
                      null,
                      8,
                      I,
                    ),
                    [[l, i.dataTreeview.reference]],
                  ),
                ]),
                e('div', V, [
                  a(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': n[1] || (n[1] = (o) => (i.dataTreeview.libelle = o)),
                        placeholder: t.trans.get('__JSON__.model.value.designation'),
                      },
                      null,
                      8,
                      A,
                    ),
                    [[l, i.dataTreeview.libelle]],
                  ),
                ]),
              ]),
              e('div', q, [
                e('div', M, [
                  a(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        'onUpdate:modelValue': n[2] || (n[2] = (o) => (i.dataTreeview.client_code = o)),
                        placeholder: t.trans.get('__JSON__.model.node.client_code'),
                      },
                      null,
                      8,
                      D,
                    ),
                    [[l, i.dataTreeview.client_code]],
                  ),
                ]),
                e('div', L, [
                  a(
                    e(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': n[3] || (n[3] = (o) => (i.dataTreeview.client_designation = o)),
                        placeholder: t.trans.get('__JSON__.model.node.client_designation'),
                      },
                      null,
                      8,
                      U,
                    ),
                    [[l, i.dataTreeview.client_designation]],
                  ),
                ]),
              ]),
            ]),
            e('div', x, [
              e('span', null, [
                s(
                  _,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: t.closeModal,
                  },
                  {
                    default: d(() => [p(u(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                s(
                  _,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: v.addNode,
                  },
                  {
                    default: d(() => [p(u(t.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const Q = T(B, [['render', F]]);
export { Q as d };
