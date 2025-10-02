import { c as j } from './DvWiUwH6.js';
import { _ as u, c as r, g as h, b as m, t as l, f, n as d, r as p, o } from '../assets/app-BjImoLrr.js';
const b = {
  mixins: [j],
  props: {
    projectLimit: {
      required: false,
      default() {},
    },
    objectType: { required: true },
    objectId: { required: true },
    directUpdate: {
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
    projectIdsSelected: {
      required: false,
      default() {
        return [];
      },
    },
    selectIfUnique: {
      required: false,
      default() {
        return false;
      },
    },
    leftPanel: {
      required: false,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      endLoading: false,
      listProjects: [],
      objectProjectIds: [],
      fieldsProject: {
        value: 'id',
        text: 'text',
      },
    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    filtering(e) {
      this.filterCombobox(e, this.listProjects, 'text');
    },
    updateObjectProject() {
      this.directUpdate
        ? axios
            .put('api/' + this.objectType + '/' + this.objectId + '/projects', { project_ids: this.objectProjectIds })
            .then((e) => {
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.update'), 'e-toast-success');
              this.$emit('projectSelected', this.objectProjectIds);
            })
            .catch((e) => {
              console.error(e);
            })
        : this.$emit('projectSelected', this.objectProjectIds);
    },
    getProjects() {
      axios
        .get('api/' + this.objectType + '/' + this.objectId + '/projects')
        .then((e) => {
          this.listProjects = e.data.projects;
          this.projectIdsSelected.length
            ? (this.objectProjectIds = this.projectIdsSelected)
            : this.selectIfUnique && this.listProjects.length === 1
              ? ((this.objectProjectIds = [this.listProjects.find(() => true).id]),
                this.$emit('projectSelected', this.objectProjectIds))
              : (this.objectProjectIds = e.data.objectProjectIds);
          this.endLoading = true;
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
const P = {
  key: 0,
  class: 'text_descriptif col-md-4 col-lg-4 col-xs-6 mt-2',
  style: { 'min-width': '75px' },
};
const _ = { key: 1 };
function g(e, c, t, I, s, i) {
  const a = p('ejs-multiselect');
  o();
  return r(
    'div',
    { class: d(t.leftPanel ? 'card-text row mb-1' : '') },
    [
      t.leftPanel ? (o(), r('span', P, l(e.trans.get('__JSON__.model.value.projects')), 1)) : h('', true),
      m(
        'div',
        { class: d(t.leftPanel ? 'col-md-7 col-xs-6' : '') },
        [
          s.endLoading
            ? (o(),
              f(
                a,
                {
                  key: 0,
                  modelValue: s.objectProjectIds,
                  'onUpdate:modelValue': c[0] || (c[0] = (n) => (s.objectProjectIds = n)),
                  modelModifiers: { lazy: true },
                  dataSource: s.listProjects,
                  fields: s.fieldsProject,
                  enabled: e.can('update', t.objectType) && t.enabled,
                  placeholder: e.trans.get('__JSON__.model.content.selectProjects'),
                  mode: 'CheckBox',
                  popupWidth: 'fit-content',
                  showClearButton: false,
                  allowFiltering: true,
                  allowCustom: false,
                  maximumSelectionLength: t.projectLimit,
                  onChange: i.updateObjectProject,
                  onFiltering: i.filtering,
                },
                null,
                8,
                [
                  'modelValue',
                  'dataSource',
                  'fields',
                  'enabled',
                  'placeholder',
                  'maximumSelectionLength',
                  'onChange',
                  'onFiltering',
                ],
              ))
            : (o(), r('div', _, l(e.trans.get('__JSON__.main.content.loading')), 1)),
        ],
        2,
      ),
    ],
    2,
  );
}
const q = u(b, [['render', g]]);
export { q as P };
