import { M as k } from './zC887B9y.js';
import { d as A } from './Nw-Fho2_.js';
import {
  _ as N,
  k as B,
  p as j,
  s as u,
  i as r,
  E as V,
  c as m,
  a as s,
  f as O,
  g as E,
  w as d,
  r as i,
  o as c,
  b as o,
  d as _,
  v as h,
  e as g,
  t as C,
} from '../assets/app-BjImoLrr.js';
import { Z as T, m as J } from './CuxdB7hV.js';
import { A as F } from './xWacEG2R.js';
import { c as D } from './DvWiUwH6.js';
import { i as G } from './BWJp0flw.js';
import { h as q } from './CKKuZvVl.js';
import { a as x } from './CHw12MFN.js';
import { o as R } from './sKBcFuym.js';
const U = {
  mixins: [A, B, D, G, x, R],
  components: {
    AddressInput: F,
    ModalSelectionAddDocumentation: J,
    ZoneUploader: T,
    appModalGallery: k,
    headerTemplate: q,
  },
  data() {
    return {
      showModalGallery: false,
      urlImage: null,
      dataCie: {
        code: '',
        designation: '',
        relation: '',
        services: '',
        address: '',
        linkId: '',
        color: null,
      },
      relations: [],
      services: [],
      width: '750px',
      fieldsServices: {
        text: 'name',
        value: 'id',
      },
    };
  },
  methods: {
    changeColor(e) {
      if (this.dataCie.color !== e.currentValue.hex && e.previousValue.hex) {
        this.dataCie.color = e.currentValue.hex;
      }
    },
    filtering(e) {
      this.filterCombobox(e, this.relations, 'name');
    },
    addressChanged(e) {
      this.dataCie.address = e;
    },
    removeImage() {
      this.dataCie.linkId = '';
      this.urlImage = null;
    },
    saveCreate() {
      this.dataCie.code = this.dataCie.code.trim();
      if (this.validateStringLength(this.dataCie.code, this.trans.get('__JSON__.model.value.code'))) {
        this.dataCie.designation = this.dataCie.designation.trim();
        if (this.validateStringLength(this.dataCie.designation, this.trans.get('__JSON__.model.value.designation'))) {
          if (!this.blockRequest) {
            this.blockRequest = true;
            u(document.getElementById('spinnerModalAdd'));
            axios
              .post('api/companies', this.dataCie)
              .then((e) => {
                r(document.getElementById('spinnerModalAdd'));
                this.blockRequest = false;
                V.$emit('addObjectGrid', {
                  object: e.data.main.company,
                  type: 'companies',
                });
                this.openNewObject(e.data.main.company.id, 'companies');
                this.$emit('close', e.data.main.company);
              })
              .catch((e) => {
                r(document.getElementById('spinnerModalAdd'));
                this.blockRequest = false;
                this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.creation'), 'e-toast-danger');
              });
          }
        }
      }
    },
    fileSelection(e) {
      this.showModalGallery = false;
      if (Array.isArray(e) && e.length) {
        this.dataCie.linkId = e[0].id;
        this.urlImage = e[0].urlImage;
      }
    },
  },
  mounted() {
    j({ target: document.getElementById('spinnerModalAdd') });
    u(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/companies/createData')
      .then((e) => {
        r(document.getElementById('spinnerModalAdd'));
        this.services = e.data.services;
        this.relations = e.data.relations;
      })
      .catch((e) => {
        r(document.getElementById('spinnerModalAdd'));
        console.error(e);
      });
  },
};
const L = { class: 'container mt-4' };
const Z = { class: 'row' };
const z = { class: 'col-md-4' };
const H = { key: 0 };
const K = {
  key: 1,
  class: 'img-centered-wrapper',
};
const P = ['src'];
const Q = { class: 'col-md-8' };
const W = { class: 'row' };
const X = ['placeholder'];
const Y = { class: 'row mt-2' };
const $ = ['placeholder'];
const ee = { class: 'row mt-2' };
const te = { class: 'row mt-2' };
const oe = { class: 'row mt-2' };
const ae = { class: 'row mt-2' };
const ne = { class: 'e-footer-content mt-4' };
function se(e, a, ie, le, t, l) {
  const v = i('headerTemplate');
  const f = i('zone-uploader');
  const y = i('qb-dropdownlist');
  const S = i('ejs-multiselect');
  const b = i('address-input');
  const w = i('ejs-colorpicker');
  const p = i('ejs-button');
  const I = i('ejs-dialog');
  const M = i('modal-selection-add-documentation');
  c();
  return m('div', null, [
    s(
      I,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: t.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        close: e.closeModal,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: d(() => [
          s(v, { title: e.trans.get('__JSON__.company.content.newCompany') }, null, 8, ['title']),
        ]),
        templateContent: d(() => [
          o('div', null, [
            o('div', L, [
              a[8] || (a[8] = o('div', { id: 'spinnerModalAdd' }, null, -1)),
              o('div', Z, [
                o('div', z, [
                  s(
                    f,
                    {
                      onFileSelected: l.fileSelection,
                      objectType: 'companies',
                      typeFile: 'images',
                      'number-files-max': '1',
                      hasImage: t.urlImage,
                      enabled: e.can('upload', 'files'),
                    },
                    {
                      dropZoneArea: d(() => [
                        t.urlImage
                          ? (c(),
                            m('div', K, [
                              o('span', {
                                onClick: a[1] || (a[1] = (...n) => l.removeImage && l.removeImage(...n)),
                                class: 'cancelImageCompanyAdd sf-icon-cross-close ms-2',
                                style: { cursor: 'pointer' },
                              }),
                              o(
                                'img',
                                {
                                  src: t.urlImage,
                                  class: 'img-centered',
                                  onError: a[2] || (a[2] = (...n) => e.replaceByDefault && e.replaceByDefault(...n)),
                                  style: {
                                    color: '#191e2c',
                                    cursor: 'pointer',
                                  },
                                  onClick: a[3] || (a[3] = (n) => (t.showModalGallery = true)),
                                },
                                null,
                                40,
                                P,
                              ),
                            ]))
                          : (c(),
                            m('div', H, [
                              o('span', {
                                class: 'imageCompany sf-icon-picture_01',
                                style: {
                                  color: '#191e2c',
                                  cursor: 'pointer',
                                },
                                onClick: a[0] || (a[0] = (n) => (t.showModalGallery = true)),
                              }),
                            ])),
                      ]),
                      _: 1,
                    },
                    8,
                    ['onFileSelected', 'hasImage', 'enabled'],
                  ),
                ]),
                o('div', Q, [
                  o('div', W, [
                    _(
                      o(
                        'input',
                        {
                          class: 'e-input mb-0',
                          type: 'text',
                          'onUpdate:modelValue': a[4] || (a[4] = (n) => (t.dataCie.code = n)),
                          placeholder: e.trans.get('__JSON__.model.value.code'),
                        },
                        null,
                        8,
                        X,
                      ),
                      [[h, t.dataCie.code]],
                    ),
                  ]),
                  o('div', Y, [
                    _(
                      o(
                        'input',
                        {
                          class: 'e-input mb-0',
                          type: 'text',
                          'onUpdate:modelValue': a[5] || (a[5] = (n) => (t.dataCie.designation = n)),
                          placeholder: e.trans.get('__JSON__.model.value.designation'),
                        },
                        null,
                        8,
                        $,
                      ),
                      [[h, t.dataCie.designation]],
                    ),
                  ]),
                  o('div', ee, [
                    s(
                      y,
                      {
                        dataSource: t.relations,
                        vModel: t.dataCie.relation,
                        modelToUpdate: 'dataCie.relation',
                        placeholder: e.trans.get('__JSON__.company.content.selectCompanyRelation'),
                        select: e.selectValueList,
                      },
                      null,
                      8,
                      ['dataSource', 'vModel', 'placeholder', 'select'],
                    ),
                  ]),
                  o('div', te, [
                    s(
                      S,
                      {
                        dataSource: t.services,
                        fields: t.fieldsServices,
                        placeholder: e.trans.get('__JSON__.section.content.selectSections'),
                        modelValue: t.dataCie.services,
                        'onUpdate:modelValue': a[6] || (a[6] = (n) => (t.dataCie.services = n)),
                        allowFiltering: true,
                      },
                      null,
                      8,
                      ['dataSource', 'fields', 'placeholder', 'modelValue'],
                    ),
                  ]),
                  o('div', oe, [
                    s(
                      b,
                      {
                        dataInput: t.dataCie.address,
                        onChange: l.addressChanged,
                      },
                      null,
                      8,
                      ['dataInput', 'onChange'],
                    ),
                  ]),
                  o('div', ae, [
                    s(
                      w,
                      {
                        onChange: l.changeColor,
                        value: t.dataCie.color ? t.dataCie.color : '#ffffff00',
                        noColor: true,
                      },
                      null,
                      8,
                      ['onChange', 'value'],
                    ),
                  ]),
                ]),
              ]),
            ]),
            o('div', ne, [
              o('span', null, [
                s(
                  p,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: d(() => [g(C(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                s(
                  p,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: l.saveCreate,
                  },
                  {
                    default: d(() => [g(C(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
    t.showModalGallery
      ? (c(),
        O(
          M,
          {
            key: 0,
            onClose: a[7] || (a[7] = (n) => (t.showModalGallery = false)),
            onFileSelected: l.fileSelection,
            objectType: 'companies',
            typeFile: 'images',
            'number-files-max': '1',
          },
          null,
          8,
          ['onFileSelected'],
        ))
      : E('', true),
  ]);
}
const ve = N(U, [
  ['render', se],
  ['__scopeId', 'data-v-622f8279'],
]);
export { ve as d };
