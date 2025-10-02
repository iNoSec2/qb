import { c as i } from './DvWiUwH6.js';
import { _ as u, f as n, r as c, o as h } from '../assets/app-BjImoLrr.js';
const f = {
  mixins: [i],
  props: {
    dataSource: { required: true },
    vModel: { required: true },
    modelToUpdate: { required: true },
    select: { required: true },
    placeholder: { required: true },
    fields: {
      required: false,
      default() {
        return {
          text: 'name',
          value: 'id',
        };
      },
    },
    nullable: {
      required: false,
      default() {
        return true;
      },
    },
    selectDefaultUser: {
      required: false,
      default() {
        return false;
      },
    },
    selectFirstIfNullable: {
      required: false,
      default() {
        return true;
      },
    },
    enabled: {
      required: false,
      default() {
        return true;
      },
    },
    changeAtStart: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    return { vModelForChild: this.vModel };
  },
  mounted() {
    if (this.selectDefaultUser && !this.vModel) {
      this.select(this.modelToUpdate, JSON.parse(sessionStorage.getItem('user')).id);
    }
  },
  watch: {
    vModel() {
      this.vModelForChild = this.vModel;
    },
    dataSource() {
      if (
        this.selectFirstIfNullable &&
        !this.nullable &&
        !this.selectDefaultUser &&
        !this.vModel &&
        this.dataSource.length > 0 &&
        typeof this.dataSource[0].id < 'u'
      ) {
        this.select(this.modelToUpdate, this.dataSource[0].id);
      }
    },
  },
  methods: {
    filter(t) {
      this.filterCombobox(t, this.dataSource, this.fields.text);
    },
    selectData(t) {
      if (t.isInteracted || this.changeAtStart) {
        this.select(this.modelToUpdate, t.value);
        this.$emit('changeAppend');
      }
    },
  },
};
function m(t, a, e, s, l, r) {
  const o = c('ejs-dropdownlist');
  h();
  return n(
    o,
    {
      fields: e.fields,
      dataSource: e.dataSource,
      placeholder: e.placeholder,
      showClearButton: e.nullable,
      enabled: e.enabled,
      modelValue: l.vModelForChild,
      'onUpdate:modelValue': a[0] || (a[0] = (d) => (l.vModelForChild = d)),
      popupWidth: 'fit-content',
      onFiltering: r.filter,
      onChange: r.selectData,
      autofill: true,
      allowFiltering: true,
    },
    null,
    8,
    ['fields', 'dataSource', 'placeholder', 'showClearButton', 'enabled', 'modelValue', 'onFiltering', 'onChange'],
  );
}
const p = u(f, [['render', m]]);
const S = {
  components: { qbDropdownlist: p },
  methods: {
    selectValueList(t, a) {
      let e = t.split('.');
      let s = this;
      let l = null;
      e.forEach((r, o) => {
        o < e.length - 1 ? (s = s[r]) : (l = r);
      });
      s[l] = a;
    },
  },
};
export { S as a, p as q };
