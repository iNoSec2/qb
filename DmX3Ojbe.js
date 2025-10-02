import {
  _ as w,
  k as V,
  E as p,
  c as n,
  f as g,
  g as s,
  d as m,
  v as c,
  a as h,
  r,
  o as d,
} from '../assets/app-BjImoLrr.js';
import { c as S } from './DvWiUwH6.js';
import { d as k } from './Brc4hCJ1.js';
const E = {
  mixins: [V, S, k],
  props: {
    data: { required: true },
    type: { required: true },
    editedData: { required: true },
    inputChanged: { required: false },
    isEditableValue: {
      required: false,
      default() {
        return false;
      },
    },
    isEditablePermission: {
      required: false,
      default() {
        return true;
      },
    },
    updateGrid: {
      required: false,
      default() {
        return true;
      },
    },
    supplementaryData: {
      required: false,
      default() {
        return {
          dataSource: [],
          fields: {
            text: 'text',
            value: 'value',
          },
          placeholder: '',
          showClearButton: false,
          rawDataSource: false,
        };
      },
    },
  },
  data() {
    return {
      previousData: null,
      dropdownTreeId: UUID.generate(),
    };
  },
  mounted() {
    this.previousData = this.data[this.editedData];
  },
  computed: {
    dropdownTreeValue() {
      return this.supplementaryData.allowMultiSelection
        ? this.data[this.editedData]
        : this.data[this.editedData]
          ? [this.data[this.editedData]]
          : [];
    },
    isVisible() {
      return this.supplementaryData && this.supplementaryData.isVisible
        ? this.data[this.supplementaryData.isVisible]
        : true;
    },
    dataSource() {
      if (this.supplementaryData.store)
        if (this.supplementaryData.store[this.supplementaryData.dataSource]) {
          let a = this.supplementaryData.store[this.supplementaryData.dataSource];
          return this.supplementaryData.subDataSource
            ? this.supplementaryData.store[this.supplementaryData.dataSource][
                this.data[this.supplementaryData.subDataSource]
              ]
            : this.supplementaryData.store[this.supplementaryData.dataSource];
        } else return [];
      else
        return this.data[this.supplementaryData.dataSource]
          ? this.data[this.supplementaryData.dataSource]
          : this.supplementaryData.rawDataSource
            ? this.supplementaryData.dataSource
            : [];
    },
    dropdowntreeFields() {
      return this.type === 'dropdowntree'
        ? {
            dataSource: this.dataSource,
            value: this.supplementaryData.fields.value,
            text: this.supplementaryData.fields.text,
            parentValue: this.supplementaryData.fields.parentValue,
            hasChildren: this.supplementaryData.fields.hasChildren,
            iconCss: this.supplementaryData.fields.iconCss,
          }
        : {};
    },
  },
  methods: {
    sendInputChanged(a) {
      if (a && a.element && a.element.id === this.dropdownTreeId) {
        this.supplementaryData.allowMultiSelection
          ? a.value && a.value.length
            ? (this.data[this.editedData] = a.value)
            : (this.data[this.editedData] = null)
          : (this.data[this.editedData] = a.value[0]);
      }
      if (this.previousData != this.data[this.editedData]) {
        let t = this.data[this.editedData];
        switch (this.type) {
          case 'integer':
            let u = parseInt(t);
            {
              if (u < 0) {
                u = 0;
              }
              this.data[this.editedData] = u;
              t = u;
            }
            break;
          case 'float':
            t = parseFloat(t);
            break;
          case 'text':
            t = t.trim();
            break;
        }
        let e = { ...this.data };
        delete e.column;
        delete e.foreignKeyData;
        delete e.propsToPass;
        delete e.passDataToProps;
        delete e.componentToCreate;
        delete e.index;
        let o = {
          fullData: e,
          newEditedData: t,
          editedData: this.editedData,
          previousData: this.previousData,
        };
        if (this.updateGrid) {
          p.$emit('updateGridDataFromEditableColumns', o);
          this.$emit('updateGridDataFromEditableColumns', o);
        }
        if (this.inputChanged) {
          this.inputChanged(o);
        }
      }
    },
    filteringType(a) {
      this.filterCombobox(a, this.dataSource, this.supplementaryData.fields.text);
    },
  },
};
const v = ['disabled'];
const x = ['disabled'];
const _ = {
  key: 3,
  style: { width: '100%' },
};
const T = {
  key: 4,
  style: { width: '100%' },
};
const B = { key: 5 };
const I = { key: 6 };
function P(a, t, e, o, u, l) {
  const D = r('ejs-checkbox');
  const f = r('ejs-dropdownlist');
  const b = r('ejs-dropdowntree');
  const y = r('ejs-datetimepicker');
  const C = r('ejs-combobox');
  d();
  return n('div', null, [
    e.type === 'boolean' && this.isVisible
      ? (d(),
        g(
          D,
          {
            key: 0,
            cssClass: 'e-small e-primary centerCheck',
            modelValue: e.data[e.editedData],
            'onUpdate:modelValue': t[0] || (t[0] = (i) => (e.data[e.editedData] = i)),
            modelModifiers: { lazy: true },
            checked: e.data[e.editedData],
            disabled: !e.isEditablePermission || (e.isEditableValue && !e.data[e.isEditableValue]),
            indeterminate: e.data[e.editedData] === 'indeterminate',
            onChange: l.sendInputChanged,
          },
          null,
          8,
          ['modelValue', 'checked', 'disabled', 'indeterminate', 'onChange'],
        ))
      : s('', true),
    (e.type === 'integer' || e.type === 'float') && this.isVisible
      ? m(
          (d(),
          n(
            'input',
            {
              key: 1,
              class: 'e-input inputNumberWithoutArray',
              style: { width: '100%' },
              type: 'number',
              'onUpdate:modelValue': t[1] || (t[1] = (i) => (e.data[e.editedData] = i)),
              disabled: !e.isEditablePermission || (e.isEditableValue && !e.data[e.isEditableValue]),
              min: '1',
              step: '1',
              onBlur: t[2] || (t[2] = (...i) => l.sendInputChanged && l.sendInputChanged(...i)),
            },
            null,
            40,
            v,
          )),
          [[c, e.data[e.editedData]]],
        )
      : s('', true),
    e.type === 'text' && this.isVisible
      ? m(
          (d(),
          n(
            'input',
            {
              key: 2,
              class: 'e-input',
              style: { width: '100%' },
              type: 'text',
              'onUpdate:modelValue': t[3] || (t[3] = (i) => (e.data[e.editedData] = i)),
              disabled: !e.isEditablePermission || (e.isEditableValue && !e.data[e.isEditableValue]),
              onChange: t[4] || (t[4] = (...i) => l.sendInputChanged && l.sendInputChanged(...i)),
            },
            null,
            40,
            x,
          )),
          [[c, e.data[e.editedData]]],
        )
      : s('', true),
    e.type === 'list' && this.isVisible
      ? (d(),
        n('div', _, [
          h(
            f,
            {
              ref: 'comboboxType',
              dataSource: l.dataSource,
              fields: e.supplementaryData.fields,
              modelValue: e.data[e.editedData],
              'onUpdate:modelValue': t[5] || (t[5] = (i) => (e.data[e.editedData] = i)),
              modelModifiers: { lazy: true },
              enabled: e.isEditablePermission && (!e.isEditableValue || e.data[e.isEditableValue]),
              placeholder: e.supplementaryData.placeholder,
              autofill: true,
              allowFiltering: true,
              popupWidth: 'fit-content',
              onFiltering: l.filteringType,
              showClearButton: e.supplementaryData.showClearButton,
              allowCustom: false,
              onChange: l.sendInputChanged,
            },
            null,
            8,
            [
              'dataSource',
              'fields',
              'modelValue',
              'enabled',
              'placeholder',
              'onFiltering',
              'showClearButton',
              'onChange',
            ],
          ),
        ]))
      : s('', true),
    e.type === 'dropdowntree' && this.isVisible
      ? (d(),
        n('div', T, [
          h(
            b,
            {
              id: u.dropdownTreeId,
              fields: l.dropdowntreeFields,
              value: l.dropdownTreeValue,
              showCheckBox: false,
              showClearButton: e.supplementaryData.showClearButton,
              showSelectAll: false,
              allowMultiSelection: e.supplementaryData.allowMultiSelection,
              enabled: e.isEditablePermission && (!e.isEditableValue || e.data[e.isEditableValue]),
              mode: 'Delimiter',
              popupHeight: '400px',
              popupWidth: 'fit-content',
              allowFiltering: true,
              filterType: 'contains',
              filterBarPlaceholder: e.supplementaryData.placeholder,
              placeholder: e.supplementaryData.placeholder,
              changeOnBlur: true,
              onChange: l.sendInputChanged,
            },
            null,
            8,
            [
              'id',
              'fields',
              'value',
              'showClearButton',
              'allowMultiSelection',
              'enabled',
              'filterBarPlaceholder',
              'placeholder',
              'onChange',
            ],
          ),
        ]))
      : s('', true),
    e.type === 'datetime'
      ? (d(),
        n('div', B, [
          h(
            y,
            {
              modelValue: e.data[e.editedData],
              'onUpdate:modelValue': t[6] || (t[6] = (i) => (e.data[e.editedData] = i)),
              modelModifiers: { lazy: true },
              enabled: e.isEditablePermission && (!e.isEditableValue || e.data[e.isEditableValue]),
              enableMask: true,
              maskPlaceholder: a.maskPlaceholderValue,
              timeFormat: a.userTimeFormatSyncfusion(),
              showClearButton: false,
              step: '5',
              onChange: l.sendInputChanged,
              format: a.userDateTimeFormatSyncfusion(),
            },
            null,
            8,
            ['modelValue', 'enabled', 'maskPlaceholder', 'timeFormat', 'onChange', 'format'],
          ),
        ]))
      : s('', true),
    e.type === 'combobox'
      ? (d(),
        n('div', I, [
          h(
            C,
            {
              modelValue: e.data[e.editedData],
              'onUpdate:modelValue': t[7] || (t[7] = (i) => (e.data[e.editedData] = i)),
              dataSource: l.dataSource,
              onChange: l.sendInputChanged,
              placeholder: e.supplementaryData.placeholder,
              autocomplete: false,
              autofill: true,
              allowCustom: true,
              popupWidth: 'fit-content',
            },
            null,
            8,
            ['modelValue', 'dataSource', 'onChange', 'placeholder'],
          ),
        ]))
      : s('', true),
  ]);
}
const q = w(E, [
  ['render', P],
  ['__scopeId', 'data-v-43900b54'],
]);
export { q as e };
