import { d as h } from './CbXSr5JG.js';
import { c as f } from './DvWiUwH6.js';
import { _ as m, c as C, b as a, f as d, g as n, a as g, r as s, o as t } from '../assets/app-BjImoLrr.js';
const _ = {
  props: {
    dataInput: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      dataModel: null,
      showCreateModel: false,
      dataSource: [],
    };
  },
  watch: {
    dataInput(e) {
      this.dataModel = e;
    },
  },
  methods: {
    inputChanged() {
      this.$emit('change', this.dataModel);
    },
    inputCreated(e) {
      this.showCreateModel = false;
      if (e) {
        this.dataModel = e.id;
        this.dataSource.push(e);
        this.inputChanged();
      }
    },
    showCreateInput() {
      this.showCreateModel = true;
    },
  },
};
const w = {
  mixins: [_, f],
  components: { ModalAddAdresse: h },
  data() {
    return {
      fieldsAddresses: {
        text: 'designation',
        value: 'id',
      },
    };
  },
  mounted() {
    this.$refs.addressInput.ej2Instances.showSpinner();
    axios
      .get('api/addresses')
      .then((e) => {
        this.$refs.addressInput.ej2Instances.hideSpinner();
        this.dataSource = e.data;
      })
      .catch((e) => {
        this.$refs.addressInput.ej2Instances.hideSpinner();
        console.error(e);
      });
  },
  methods: {
    filtering(e) {
      this.filterCombobox(e, this.dataSource, 'designation');
    },
  },
};
const I = {
  class: 'row',
  style: {
    display: 'flex',
    'align-items': 'center',
  },
};
const M = { class: 'col-md-10' };
const S = { class: 'col-md-2' };
function A(e, o, b, j, r, i) {
  const l = s('ejs-dropdownlist');
  const c = s('ejs-button');
  const u = s('modal-add-adresse');
  t();
  return C('div', I, [
    a('div', M, [
      g(
        l,
        {
          ref: 'addressInput',
          modelValue: e.dataModel,
          'onUpdate:modelValue': o[0] || (o[0] = (p) => (e.dataModel = p)),
          dataSource: e.dataSource,
          fields: r.fieldsAddresses,
          showClearButton: true,
          allowFiltering: true,
          onFiltering: i.filtering,
          onChange: e.inputChanged,
          placeholder: e.trans.get('__JSON__.address.content.selectAddress'),
          popupWidth: 'fit-content',
        },
        null,
        8,
        ['modelValue', 'dataSource', 'fields', 'onFiltering', 'onChange', 'placeholder'],
      ),
    ]),
    a('div', S, [
      e.can('create', 'addresses')
        ? (t(),
          d(
            c,
            {
              key: 0,
              cssClass: 'e-round e-info',
              iconCss: 'e-icons e-plus-icon sf-icon-addition-',
              onClick: e.showCreateInput,
            },
            null,
            8,
            ['onClick'],
          ))
        : n('', true),
    ]),
    e.can('create', 'addresses') && e.showCreateModel
      ? (t(),
        d(
          u,
          {
            key: 0,
            onClose: e.inputCreated,
            openRightPanelAfter: false,
          },
          null,
          8,
          ['onClose'],
        ))
      : n('', true),
  ]);
}
const v = m(w, [['render', A]]);
export { v as A, _ as d };
