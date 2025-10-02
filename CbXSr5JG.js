import {
  _ as C,
  k as O,
  s as v,
  i as u,
  E as x,
  a6 as N,
  p as I,
  c as T,
  a as c,
  w as A,
  r as m,
  o as j,
  b as s,
  d as i,
  v as l,
  e as b,
  t as S,
} from '../assets/app-BjImoLrr.js';
import { a as J } from './nNzkQ-aO.js';
import { d as M } from './Nw-Fho2_.js';
import { c as k } from './DvWiUwH6.js';
import { h as B } from './CKKuZvVl.js';
import { a as V } from './CHw12MFN.js';
import { o as E } from './sKBcFuym.js';
const D = {
  mixins: [M, O, k, V, E],
  components: {
    app_map: J,
    headerTemplate: B,
  },
  data() {
    return {
      width: '1000px',
      dataAddresse: {
        code: '',
        designation: '',
        address1: '',
        address2: '',
        latitude: '',
        longitude: '',
        zipcode: '',
        city: '',
        country: '',
      },
      country: [],
      listAddress: [],
      fieldsAddress: {
        text: 'name',
        value: 'name',
      },
      timeOut: null,
      axiosCanceler: null,
      searchedText: '',
    };
  },
  mounted() {
    I({ target: document.getElementById('spinnerModalAdd') });
    v(document.getElementById('spinnerModalAdd'));
    axios
      .get('api/addresses/createData')
      .then((e) => {
        u(document.getElementById('spinnerModalAdd'));
        this.endLoading = true;
        this.country = e.data.countries;
      })
      .catch((e) => {
        console.error(e);
        u(document.getElementById(this.spinnerPanelId));
      });
  },
  methods: {
    filtering(e) {
      this.filterCombobox(e, this.country, 'name');
    },
    selectAddressCreate(e) {
      if (e.itemData) {
        this.dataAddresse.address1 = e.itemData.name;
        this.dataAddresse.latitude = e.itemData.lat;
        this.dataAddresse.longitude = e.itemData.lon;
        this.dataAddresse.zipcode = e.itemData.zipcode;
        this.dataAddresse.city = e.itemData.city;
        this.dataAddresse.country = e.itemData.country_id;
      }
    },
    searchAddressCreate(e) {
      e.text.length
        ? e.text !== this.searchedText && this.searchFullAddress(e.text)
        : ((this.listAddress = []),
          this.$refs.findAdress.ej2Instances.hidePopup(),
          this.$refs.findAdress.ej2Instances.hideSpinner(),
          this.axiosCanceler && (this.axiosCanceler(), (this.axiosCanceler = null)));
    },
    searchFullAddress(e) {
      this.searchedText = e;
      let t = this;
      this.$refs.findAdress.ej2Instances.showSpinner();
      if (this.axiosCanceler) {
        this.axiosCanceler();
        this.axiosCanceler = null;
      }
      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(function () {
        t.$refs.findAdress.ej2Instances.hidePopup();
        t.$refs.findAdress.ej2Instances.showSpinner();
        v(document.getElementById('spinnerModalAdd'));
        axios
          .get('https://nominatim.openstreetmap.org/search', {
            cancelToken: new N.CancelToken(function (h) {
              t.axiosCanceler = h;
            }),
            params: {
              q: e,
              format: 'json',
              limit: 5,
              addressdetails: 1,
              'accept-language': 'en',
            },
          })
          .then((p) => {
            let h = p.data;
            let d = [];
            h.forEach((n) => {
              let f = null;
              if (n.address && n.address.postcode) {
                f = n.address.postcode;
              }
              let r = null;
              let _ = null;
              let g = null;
              if (n.address) {
                let o = n.address;
                n.address.village
                  ? (r = n.address.village)
                  : n.address.town
                    ? (r = n.address.town)
                    : n.address.city
                      ? (r = n.address.city)
                      : n.address.state && (r = n.address.state);
                if (n.address.road) {
                  n.address.house_number ? (_ = n.address.house_number + ' ' + n.address.road) : (_ = n.address.road);
                }
                if (n.address.country_code) {
                  let y = n.address.country_code.toUpperCase();
                  let a = t.country.find((w) => w.code === y);
                  if (a) {
                    g = a.id;
                  }
                }
              }
              d.push({
                name: n.display_name,
                address: _,
                zipcode: f,
                city: r,
                country_id: g,
                lat: n.lat,
                lon: n.lon,
              });
            });
            t.axiosCanceler = null;
            t.listAddress = d;
            t.openPopupAdress();
          })
          .catch((p) => {
            console.error(p);
            t.$refs.findAdress.ej2Instances.hideSpinner();
            u(document.getElementById('spinnerModalAdd'));
            t.showCenterToast(t.trans.get('__JSON__.address.toast.error.getData'), 'e-toast-danger');
          });
      }, 1500);
    },
    openPopupAdress() {
      this.$nextTick(() => {
        u(document.getElementById('spinnerModalAdd'));
        this.$refs.findAdress.ej2Instances.hideSpinner();
        this.$refs.findAdress.ej2Instances.showPopup();
      });
    },
    saveCreate() {
      this.dataAddresse.code = this.dataAddresse.code.trim();
      if (this.validateStringLength(this.dataAddresse.code, this.trans.get('__JSON__.model.value.code'))) {
        this.dataAddresse.designation = this.dataAddresse.designation.trim();
        if (
          this.validateStringLength(this.dataAddresse.designation, this.trans.get('__JSON__.model.value.designation'))
        ) {
          if (!this.blockRequest) {
            this.blockRequest = true;
            v(document.getElementById('spinnerModalAdd'));
            axios
              .post('api/addresses', this.dataAddresse)
              .then((e) => {
                u(document.getElementById('spinnerModalAdd'));
                this.blockRequest = false;
                this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.creation'), 'e-toast-success');
                x.$emit('addObjectGrid', {
                  object: e.data.main.address,
                  type: 'addresses',
                });
                this.openNewObject(e.data.main.address.id, 'addresses');
                this.$emit('close', e.data.main.address);
              })
              .catch((e) => {
                u(document.getElementById('spinnerModalAdd'));
                this.blockRequest = false;
                this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.creation'), 'e-toast-danger');
              });
          }
        }
      }
    },
  },
  beforeUnmount() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
  },
};
const U = { class: 'container' };
const q = { class: 'row' };
const z = { class: 'col-md-6' };
const L = { class: 'row' };
const P = { class: 'col-md-12' };
const F = ['placeholder'];
const R = { class: 'row mt-3' };
const G = { class: 'col-md-12' };
const W = ['placeholder'];
const H = { class: 'row mt-3' };
const K = { class: 'col-md-12' };
const Q = ['placeholder'];
const X = { class: 'row mt-3' };
const Y = { class: 'col-md-12' };
const Z = ['placeholder'];
const $ = { class: 'row mt-3' };
const ee = { class: 'col-md-12' };
const se = ['placeholder'];
const te = { class: 'row mt-3' };
const de = { class: 'col-md-12' };
const oe = ['placeholder'];
const ae = { class: 'row mt-3' };
const ne = { class: 'col-md-12' };
const ie = { class: 'row mt-3' };
const le = { class: 'col-md-12' };
const re = ['placeholder'];
const ce = { class: 'row mt-3' };
const ue = { class: 'col-md-12' };
const me = ['placeholder'];
const pe = { class: 'col-md-6' };
const _e = { class: 'row' };
const he = { class: 'col-md-12' };
const fe = { class: 'row mt-3' };
const ge = { class: 'col-md-12' };
const Ae = { class: 'e-footer-content mt-4' };
function ye(e, t, p, h, d, n) {
  const f = m('headerTemplate');
  const r = m('qb-dropdownlist');
  const _ = m('ejs-combobox');
  const g = m('app_map');
  const o = m('ejs-button');
  const y = m('ejs-dialog');
  j();
  return T('div', null, [
    c(
      y,
      {
        header: 'headerTemplate',
        content: 'templateContent',
        width: d.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        close: e.closeModal,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: A(() => [
          c(f, { title: e.trans.get('__JSON__.address.content.newAddress') }, null, 8, ['title']),
        ]),
        templateContent: A(() => [
          s('div', null, [
            s('div', U, [
              t[8] || (t[8] = s('div', { id: 'spinnerModalAdd' }, null, -1)),
              s('div', q, [
                s('div', z, [
                  s('div', L, [
                    s('div', P, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[0] || (t[0] = (a) => (d.dataAddresse.code = a)),
                            placeholder: e.trans.get('__JSON__.model.value.code'),
                          },
                          null,
                          8,
                          F,
                        ),
                        [[l, d.dataAddresse.code]],
                      ),
                    ]),
                  ]),
                  s('div', R, [
                    s('div', G, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[1] || (t[1] = (a) => (d.dataAddresse.designation = a)),
                            placeholder: e.trans.get('__JSON__.model.value.designation'),
                          },
                          null,
                          8,
                          W,
                        ),
                        [[l, d.dataAddresse.designation]],
                      ),
                    ]),
                  ]),
                  s('div', H, [
                    s('div', K, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[2] || (t[2] = (a) => (d.dataAddresse.address1 = a)),
                            placeholder: e.trans.get('__JSON__.address.value.address1'),
                          },
                          null,
                          8,
                          Q,
                        ),
                        [[l, d.dataAddresse.address1]],
                      ),
                    ]),
                  ]),
                  s('div', X, [
                    s('div', Y, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[3] || (t[3] = (a) => (d.dataAddresse.address2 = a)),
                            placeholder: e.trans.get('__JSON__.address.value.address2'),
                          },
                          null,
                          8,
                          Z,
                        ),
                        [[l, d.dataAddresse.address2]],
                      ),
                    ]),
                  ]),
                  s('div', $, [
                    s('div', ee, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[4] || (t[4] = (a) => (d.dataAddresse.zipcode = a)),
                            placeholder: e.trans.get('__JSON__.address.value.zipcode'),
                          },
                          null,
                          8,
                          se,
                        ),
                        [[l, d.dataAddresse.zipcode]],
                      ),
                    ]),
                  ]),
                  s('div', te, [
                    s('div', de, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[5] || (t[5] = (a) => (d.dataAddresse.city = a)),
                            placeholder: e.trans.get('__JSON__.address.value.city'),
                          },
                          null,
                          8,
                          oe,
                        ),
                        [[l, d.dataAddresse.city]],
                      ),
                    ]),
                  ]),
                  s('div', ae, [
                    s('div', ne, [
                      c(
                        r,
                        {
                          dataSource: d.country,
                          vModel: d.dataAddresse.country,
                          modelToUpdate: 'dataAddresse.country',
                          placeholder: e.trans.get('__JSON__.address.content.selectCountry'),
                          select: e.selectValueList,
                        },
                        null,
                        8,
                        ['dataSource', 'vModel', 'placeholder', 'select'],
                      ),
                    ]),
                  ]),
                  s('div', ie, [
                    s('div', le, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[6] || (t[6] = (a) => (d.dataAddresse.latitude = a)),
                            placeholder: e.trans.get('__JSON__.address.content.selectLatitude'),
                          },
                          null,
                          8,
                          re,
                        ),
                        [[l, d.dataAddresse.latitude]],
                      ),
                    ]),
                  ]),
                  s('div', ce, [
                    s('div', ue, [
                      i(
                        s(
                          'input',
                          {
                            class: 'e-input mb-0',
                            type: 'text',
                            'onUpdate:modelValue': t[7] || (t[7] = (a) => (d.dataAddresse.longitude = a)),
                            placeholder: e.trans.get('__JSON__.address.content.selectLongitude'),
                          },
                          null,
                          8,
                          me,
                        ),
                        [[l, d.dataAddresse.longitude]],
                      ),
                    ]),
                  ]),
                ]),
                s('div', pe, [
                  s('div', _e, [
                    s('div', he, [
                      c(
                        _,
                        {
                          ref: 'findAdress',
                          dataSource: d.listAddress,
                          fields: d.fieldsAddress,
                          onSelect: n.selectAddressCreate,
                          placeholder: e.trans.get('__JSON__.address.content.findAddress'),
                          customValueSpecifier: n.searchAddressCreate,
                          autocomplete: false,
                          autofill: false,
                          allowCustom: true,
                          popupWidth: 'fit-content',
                        },
                        null,
                        8,
                        ['dataSource', 'fields', 'onSelect', 'placeholder', 'customValueSpecifier'],
                      ),
                    ]),
                  ]),
                  s('div', fe, [
                    s('div', ge, [
                      c(
                        g,
                        {
                          type: 'addresses',
                          'marker-settings': [d.dataAddresse],
                          height: '325',
                        },
                        null,
                        8,
                        ['marker-settings'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            s('div', Ae, [
              s('span', null, [
                c(
                  o,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: e.closeModal,
                  },
                  {
                    default: A(() => [b(S(e.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                c(
                  o,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: n.saveCreate,
                  },
                  {
                    default: A(() => [b(S(e.trans.get('__JSON__.main.modal.button.save')), 1)]),
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
const Ne = C(D, [['render', ye]]);
export { Ne as d };
