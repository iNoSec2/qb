import {
  _ as P,
  k as O,
  E as f,
  c as _,
  a as n,
  w as r,
  r as i,
  o as p,
  b as t,
  g as b,
  d as c,
  v as u,
  t as m,
  e as w,
  f as T,
  X as y,
} from '../assets/app-BjImoLrr.js';
import { d as D } from './K5eRDqOT.js';
import { d as J } from './ZS-VIFna.js';
import { d as V } from './Nw-Fho2_.js';
import { A as F } from './xWacEG2R.js';
import { h as G } from './CKKuZvVl.js';
import { o as L } from './sKBcFuym.js';
import { b as A } from './DLTsfmSW.js';
import { r as M } from './DBeq470h.js';
import { a as R } from './Cm0M57tU.js';
import { G as B } from './DAT3ioSq.js';
/* empty css                    */
import './CqZ4Ys_5.js';
import './DrOYtW4t.js';
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './BzXjulcJ.js';
import './JzGXi_4H.js';
import './CbXSr5JG.js';
import './nNzkQ-aO.js';
import './BWJp0flw.js';
import './CUvLZwvz.js';
/* empty css        */
import './DvWiUwH6.js';
import './CHw12MFN.js';
const q = {
  mixins: [V, O, L],
  components: {
    AddressInput: F,
    headerTemplate: G,
  },
  data() {
    return {
      width: '750px',
      dataProject: {
        name: '',
        code: '',
        description: '',
        address: '',
        withArbo: '',
        reference: '',
        libelle: '',
      },
      treeview: '',
      withTree: false,
      tabServices: [],
      valChecked: false,
    };
  },
  methods: {
    onModalClose() {
      this.$emit('close');
    },
    addressChanged(e) {
      this.dataProject.address = e;
    },
    changeWithTreeview: function (e) {
      this.withTree = !this.withTree;
      this.treeview = this.withTree;
      this.valChecked = !this.valChecked;
    },
    saveCreate() {
      this.dataProject.name = this.dataProject.name.trim();
      if (
        !this.validateStringLength(this.dataProject.name, this.trans.get('__JSON__.model.value.code')) ||
        ((this.dataProject.description = this.dataProject.description.trim()),
        !this.validateStringLength(this.dataProject.description, this.trans.get('__JSON__.model.value.designation')))
      )
        return;
      if (this.treeview == true) {
        this.dataProject.reference = this.dataProject.reference.trim();
        if (
          !this.validateStringLength(this.dataProject.reference, this.trans.get('__JSON__.model.value.code')) ||
          ((this.dataProject.libelle = this.dataProject.libelle.trim()),
          !this.validateStringLength(this.dataProject.libelle, this.trans.get('__JSON__.model.value.designation')))
        )
          return;
      } else {
        this.dataProject.reference = '';
        this.dataProject.libelle = '';
      }
      let e = {
        name: this.dataProject.name,
        description: this.dataProject.description,
        address: this.dataProject.address,
        withArbo: this.treeview || false,
        reference: this.dataProject.reference,
        libelle: this.dataProject.libelle,
      };
      if (!this.blockRequest) {
        this.blockRequest = true;
        axios
          .post('api/projects', e)
          .then((o) => {
            this.blockRequest = false;
            if (o.status == 201) {
              f.$emit('addObjectGrid', {
                object: o.data.original.main.project,
                type: 'projects',
              });
              this.onModalClose();
              f.$emit('updateNodeTreeview', []);
              this.openNewObject(o.data.original.main.project.id, 'projects');
            }
          })
          .catch((o) => {
            this.blockRequest = false;
            console.error(o);
          });
      }
    },
  },
};
const I = { class: 'container mt-4' };
const U = { class: 'row' };
const E = { class: 'col-md-4' };
const W = ['placeholder'];
const X = { class: 'col-md-8' };
const z = ['placeholder'];
const H = { class: 'row mt-4' };
const K = { class: 'col-md-6' };
const Q = {
  key: 0,
  class: 'row mt-4',
};
const Y = { class: 'col-md-4' };
const Z = {
  key: 1,
  class: 'row mt-4',
};
const $ = { class: 'col-md-4' };
const x = ['placeholder'];
const ee = { class: 'col-md-8' };
const te = ['placeholder'];
const oe = { class: 'e-footer-content mt-4' };
function se(e, o, C, S, s, l) {
  const g = i('headerTemplate');
  const j = i('address-input');
  const h = i('ejs-switch');
  const d = i('ejs-button');
  const v = i('ejs-dialog');
  p();
  return _('div', null, [
    n(
      v,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: s.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        visible: e.visible,
        isModal: e.isModal,
        close: l.onModalClose,
      },
      {
        headerTemplate: r(() => [
          n(g, { title: e.trans.get('__JSON__.project.content.newProject') }, null, 8, ['title']),
        ]),
        templateContent: r(() => [
          t('div', null, [
            t('div', I, [
              t('div', U, [
                t('div', E, [
                  c(
                    t(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[0] || (o[0] = (a) => (s.dataProject.name = a)),
                        placeholder: e.trans.get('__JSON__.project.value.name'),
                      },
                      null,
                      8,
                      W,
                    ),
                    [[u, s.dataProject.name]],
                  ),
                ]),
                t('div', X, [
                  c(
                    t(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[1] || (o[1] = (a) => (s.dataProject.description = a)),
                        placeholder: e.trans.get('__JSON__.project.value.description'),
                      },
                      null,
                      8,
                      z,
                    ),
                    [[u, s.dataProject.description]],
                  ),
                ]),
              ]),
              t('div', H, [
                t('div', K, [
                  n(
                    j,
                    {
                      dataInput: s.dataProject.address,
                      onChange: l.addressChanged,
                    },
                    null,
                    8,
                    ['dataInput', 'onChange'],
                  ),
                ]),
              ]),
              e.can('create', 'treeview')
                ? (p(),
                  _('div', Q, [
                    t('div', Y, [
                      t('label', null, m(e.trans.get('__JSON__.project.content.withTreeView')), 1),
                      n(
                        h,
                        {
                          ref: 'toggleSwitch',
                          checked: s.valChecked,
                          onChange: l.changeWithTreeview,
                          value: s.treeview,
                        },
                        null,
                        8,
                        ['checked', 'onChange', 'value'],
                      ),
                    ]),
                  ]))
                : b('', true),
              s.withTree && e.can('create', 'treeview')
                ? (p(),
                  _('div', Z, [
                    t('div', $, [
                      c(
                        t(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': o[2] || (o[2] = (a) => (s.dataProject.reference = a)),
                            placeholder: e.trans.get('__JSON__.model.useCase.code'),
                          },
                          null,
                          8,
                          x,
                        ),
                        [[u, s.dataProject.reference]],
                      ),
                    ]),
                    t('div', ee, [
                      c(
                        t(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': o[3] || (o[3] = (a) => (s.dataProject.libelle = a)),
                            placeholder: e.trans.get('__JSON__.model.useCase.designation'),
                          },
                          null,
                          8,
                          te,
                        ),
                        [[u, s.dataProject.libelle]],
                      ),
                    ]),
                  ]))
                : b('', true),
              o[4] || (o[4] = t('div', { class: 'row' }, null, -1)),
            ]),
            t('div', oe, [
              t('span', null, [
                n(
                  d,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: r(() => [w(m(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
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
                    onClick: l.saveCreate,
                  },
                  {
                    default: r(() => [w(m(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
      ['width', 'animationSettings', 'visible', 'isModal', 'close'],
    ),
  ]);
}
const ne = P(q, [['render', se]]);
const ie = {
  mixins: [D, J],
  components: {
    GridLogs: B,
    appAddProject: ne,
    appGridMenu: A,
    addButton: R,
    refreshButton: M,
  },
  data() {
    return {
      routeGrid: '/projects/grid',
      typeObject: 'projects',
      showDialog: false,
      objectPermission: 'projects',
      isFinish: false,
      pctLoading: 0,
    };
  },
};
const ae = {
  class: 'navbar navbar-expand-lg navbar-light bg-dark',
  id: 'toolbar',
};
const re = { class: 'ps-4' };
const le = { class: 'ps-4' };
const de = { class: 'collapse navbar-collapse' };
const ce = { class: 'titreRoute' };
function pe(e, o, C, S, s, l) {
  const g = i('grid-logs');
  const j = i('app-grid-menu');
  const h = i('router-link');
  const d = i('ejs-tooltip');
  const v = i('refresh-button');
  const a = i('add-button');
  const k = i('app-addProject');
  const N = i('router-view');
  p();
  return _('div', null, [
    t('nav', ae, [
      n(g),
      n(j, { 'route-grid': s.routeGrid }, null, 8, ['route-grid']),
      t('div', re, [
        n(
          d,
          {
            content: e.trans.get('__JSON__.main.grid.toolbar.gallery'),
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: r(() => [
              n(
                h,
                { to: '/projects/image' },
                {
                  default: r(() => [
                    ...(o[0] || (o[0] = [t('span', { class: 'sf-icon-view-small-icons' }, null, -1)])),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
      t('div', le, [
        n(
          d,
          {
            content: e.trans.get('__JSON__.main.grid.toolbar.map'),
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: r(() => [
              n(
                h,
                { to: '/projects/map' },
                {
                  default: r(() => [...(o[1] || (o[1] = [t('span', { class: 'sf-icon-maps--04' }, null, -1)]))]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
      n(
        v,
        {
          'is-finish': s.isFinish,
          'type-object': s.typeObject,
        },
        null,
        8,
        ['is-finish', 'type-object'],
      ),
      n(a, { 'show-add': e.can('create', s.objectPermission) }, null, 8, ['show-add']),
      c(t('span', { class: 'mt-1 ms-4 mb-2 badge bg-warning' }, m(s.pctLoading) + '% ', 513), [[y, !s.isFinish]]),
      s.showDialog
        ? (p(),
          T(
            k,
            {
              key: 0,
              onClose: e.hideDialog,
            },
            null,
            8,
            ['onClose'],
          ))
        : b('', true),
      t('div', de, [
        o[2] || (o[2] = t('ul', { class: 'navbar-nav me-auto mt-2 mt-lg-0' }, null, -1)),
        t('h5', ce, m(e.nameRoute), 1),
      ]),
    ]),
    t('div', null, [
      o[3] || (o[3] = t('div', { id: 'spinnerFiles' }, null, -1)),
      n(
        N,
        {
          contentData: e.contentData,
          contentDataGrid: e.contentDataGrid,
          spinner: e.spinner,
          contenteValueListAllowed: e.contenteValueListAllowed,
          getFrom: 'gallery',
          showDelete: e.can('delete', s.objectPermission),
          showRestore: e.can('restore', s.objectPermission),
          mode: e.mode,
        },
        null,
        8,
        ['contentData', 'contentDataGrid', 'spinner', 'contenteValueListAllowed', 'showDelete', 'showRestore', 'mode'],
      ),
    ]),
  ]);
}
const Be = P(ie, [['render', pe]]);
export { Be as default };
