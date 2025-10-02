import { E as c, a5 as l, a4 as n, bW as r } from '../assets/app-BjImoLrr.js';
import { b as o } from './DrOYtW4t.js';
import { i as g } from './BWJp0flw.js';
const m = {
  mixins: [g],
  props: {
    contentData: { required: true },
    contentDataGrid: { required: true },
    spinner: { required: true },
    getFrom: { required: false },
    object: { required: false },
    mode: { default: 'default' },
    showButton: {
      required: false,
      default() {
        return true;
      },
    },
    numberFilesMax: {
      required: false,
      default: 9999,
    },
  },
  components: { appModeButtons: o },
  data() {
    return {
      type: [],
      pageSize: 12,
      pageCount: 5,
      pageData: [],
      currentPageNumber: 1,
      resultData: [],
      categoryResult: [],
      valueCompany: null,
      valueService: null,
      multiselectComp: null,
      isOpening: false,
      fields: {
        value: 'idValue',
        text: 'lbl',
      },
    };
  },
  created() {
    this.searchMultiselect();
  },
  methods: {
    searchMultiselect() {
      let e = '';
      switch (this.getFrom) {
        case 'panelRight':
          e = 'images';
          break;
        case 'poiable':
          e = 'poiable';
          break;
        default:
          e = this.typeObject;
          break;
      }
      axios.get('api/filters/' + e).then((t) => {
        if (t.status == 200) {
          this.type = t.data.filters;
        }
      });
    },
    onInputKeyup(e) {
      if (
        e.code === 'Tab' ||
        e.code === 'Escape' ||
        e.code === 'ShiftLeft' ||
        (e.code === 'Backspace' && this.emptyData)
      )
        return;
      let t = e.target.value;
      if (!t) {
        t = document.getElementById('search_Card').value;
      }
      t.length === 0 ? (this.emptyData = true) : (this.emptyData = false);
      if (this.typeObject == 'files') return this.filterExtension();
      if (this.typeObject == 'tags') return this.filterType();
      if (this.typeObject == 'users') return this.filterUser();
      if (this.typeObject == 'projects') return this.filterProject();
      if (this.typeObject == 'items') return this.filterItem();
      if (this.typeObject == 'companies') return this.filterCompany();
    },
    filterCompany() {
      let e = [];
      let t = this;
      this.categoryResult = [];
      if (this.searchEle.value.length > 0) {
        let s = new r('login', 'Contains', this.searchEle.value, true)
          .or('code', 'Contains', this.searchEle.value, true)
          .or('designation', 'Contains', this.searchEle.value, true);
        let i = new l(
          this.multiselectComp.value === null || this.multiselectComp.value.length === 0
            ? this.contentDataGrid
            : this.categoryResult,
        ).executeLocal(new n().where(s));
        i.length === 0
          ? (e = [])
          : ((this.categoryResult = []),
            i.forEach(function (a) {
              t.categoryResult.push(a);
            }),
            (e = this.categoryResult));
        this.$refs.paging.ej2Instances.totalRecordsCount = e.length;
      }
      if (
        (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
        this.searchEle.value.length === 0
      ) {
        this.$refs.paging.ej2Instances.totalRecordsCount = this.contentDataGrid.length;
        e = this.contentDataGrid.slice(0, this.pageSize);
      }
      this.resultData = e;
      this.pageData = e.slice(0, this.pageSize);
    },
    filterUser() {
      let e = [];
      let t = this;
      this.categoryResult = [];
      if (this.multiselectComp.value !== null && this.multiselectComp.value.length > 0) {
        let s = [];
        if (this.valueCompany) {
          this.valueService
            ? (s = new l(this.contentDataGrid).executeLocal(
                new n()
                  .where('company.id', 'equal', this.valueCompany, true)
                  .where('service.id', 'equal', this.valueService, true),
              ))
            : (s = new l(this.contentDataGrid).executeLocal(
                new n().where('company.id', 'equal', this.valueCompany, true),
              ));
        }
        this.categoryResult.push(...s);
        e = this.categoryResult;
        this.$refs.paging.ej2Instances.totalRecordsCount = e.length;
      }
      if (this.searchEle.value.length > 0) {
        let s = new r('login', 'Contains', this.searchEle.value, true)
          .or('firstname', 'Contains', this.searchEle.value, true)
          .or('lastname', 'Contains', this.searchEle.value, true);
        let i = new l(
          this.multiselectComp.value === null || this.multiselectComp.value.length === 0
            ? this.contentDataGrid
            : this.categoryResult,
        ).executeLocal(new n().where(s));
        i.length === 0
          ? (e = [])
          : ((this.categoryResult = []),
            i.forEach(function (a) {
              t.categoryResult.push(a);
            }),
            (e = this.categoryResult));
        this.$refs.paging.ej2Instances.totalRecordsCount = e.length;
      }
      if (
        (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
        this.searchEle.value.length === 0
      ) {
        this.$refs.paging.ej2Instances.totalRecordsCount = this.contentDataGrid.length;
        e = this.contentDataGrid.slice(0, this.pageSize);
      }
      this.resultData = e;
      this.pageData = e.slice(0, this.pageSize);
    },
    filterItem() {
      let e = [];
      let t = this;
      this.categoryResult = [];
      if (this.searchEle.value.length > 0) {
        let s = new r('description', 'Contains', this.searchEle.value, true)
          .or('code', 'Contains', this.searchEle.value, true)
          .or('designation', 'Contains', this.searchEle.value, true);
        let i = new l(
          this.multiselectComp.value === null || this.multiselectComp.value.length === 0
            ? this.contentDataGrid
            : this.categoryResult,
        ).executeLocal(new n().where(s));
        i.length === 0
          ? (e = [])
          : ((this.categoryResult = []),
            i.forEach(function (a) {
              t.categoryResult.push(a);
            }),
            (e = this.categoryResult));
        this.$refs.paging.ej2Instances.totalRecordsCount = e.length;
      }
      if (this.searchEle.value.length === 0) {
        this.$refs.paging.ej2Instances.totalRecordsCount = this.contentDataGrid.length;
        e = this.contentDataGrid.slice(0, this.pageSize);
      }
      this.resultData = e;
      this.pageData = e.slice(0, this.pageSize);
    },
    filterProject() {
      let e = [];
      let t = this;
      this.categoryResult = [];
      if (this.searchEle.value.length > 0) {
        let s = new r('name', 'Contains', this.searchEle.value, true).or(
          'description',
          'Contains',
          this.searchEle.value,
          true,
        );
        let i = new l(
          this.multiselectComp.value === null || this.multiselectComp.value.length === 0
            ? this.contentDataGrid
            : this.categoryResult,
        ).executeLocal(new n().where(s));
        i.length === 0
          ? (e = [])
          : ((this.categoryResult = []),
            i.forEach(function (a) {
              t.categoryResult.push(a);
            }),
            (e = this.categoryResult));
        this.$refs.paging.ej2Instances.totalRecordsCount = e.length;
      }
      if (this.searchEle.value.length === 0) {
        this.$refs.paging.ej2Instances.totalRecordsCount = this.contentDataGrid.length;
        e = this.contentDataGrid.slice(0, this.pageSize);
      }
      this.resultData = e;
      this.pageData = e.slice(0, this.pageSize);
    },
    filterType() {
      let e = this;
      let t = [];
      this.categoryResult = [];
      if (this.multiselectComp.value !== null && this.multiselectComp.value.length > 0) {
        this.multiselectComp.value.forEach(function (i) {
          new l(e.contentDataGrid).executeLocal(new n().where('category_id', 'equal', i, true)).forEach(function (h) {
            e.categoryResult.push(h);
          });
        });
        t = this.categoryResult;
        this.$refs.paging.ej2Instances.totalRecordsCount = t.length;
      }
      if (this.searchEle.value.length > 0) {
        let s = new r('designation', 'Contains', this.searchEle.value, true);
        s = s.or('code', 'Contains', this.searchEle.value, true);
        let i = new l(
          this.multiselectComp.value === null || this.multiselectComp.value.length === 0
            ? e.contentDataGrid
            : this.categoryResult,
        ).executeLocal(new n().where(s));
        i.length === 0
          ? (t = [])
          : ((this.categoryResult = []),
            i.forEach(function (a) {
              e.categoryResult.push(a);
            }),
            (t = this.categoryResult));
        this.$refs.paging.ej2Instances.totalRecordsCount = t.length;
      }
      if (
        (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
        this.searchEle.value.length === 0
      ) {
        this.$refs.paging.ej2Instances.totalRecordsCount = e.contentDataGrid.length;
        t = e.contentDataGrid.slice(0, this.pageSize);
      }
      this.pageData = t.slice(0, this.pageSize);
      this.resultData = t;
    },
    filterExtension() {
      let e = this;
      let t = [];
      this.categoryResult = [];
      if (this.multiselectComp.value !== null && this.multiselectComp.value.length > 0) {
        this.multiselectComp.value.forEach(function (i) {
          let a = new l(e.contentDataGrid).executeLocal(new n().where('extension', 'equal', i, true));
          if (a.length !== 0) {
            a.forEach(function (h) {
              e.categoryResult.push(h);
            });
          }
        });
        t = this.categoryResult;
        this.$refs.paging.ej2Instances.totalRecordsCount = t.length;
      }
      if (this.searchEle.value.length > 0) {
        let s = '';
        this.typeObject == 'files' ? (s = 'title') : (s = 'login');
        let i = new r(s, 'Contains', this.searchEle.value, true);
        let a = new l(
          this.multiselectComp.value === null || this.multiselectComp.value.length === 0
            ? e.contentDataGrid
            : this.categoryResult,
        ).executeLocal(new n().where(i));
        a.length === 0
          ? (t = [])
          : ((this.categoryResult = []),
            a.forEach(function (h) {
              e.categoryResult.push(h);
            }),
            (t = this.categoryResult));
        this.$refs.paging.ej2Instances.totalRecordsCount = t.length;
      }
      if (
        (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
        this.searchEle.value.length === 0
      ) {
        this.$refs.paging.ej2Instances.totalRecordsCount = e.contentDataGrid.length;
        t = e.contentDataGrid.slice(0, this.pageSize);
      }
      this.resultData = t;
      this.pageData = t.slice(0, this.pageSize);
    },
    actionDelete(e) {
      if (!e.has_use_cases) {
        axios.delete('api/' + this.typeObject + '/' + e.id).then((t) => {
          if (t.status == 204 || t.status == 200) {
            let s = true;
            if (t.status == 200) {
              s = t.data.deleted_at;
            }
            e.deleted_at = s;
            c.$emit('checkDeletePanel', {
              typeObject: this.typeObject,
              refObject: e.id,
            });
          }
        });
      }
    },
    actionRestore(e) {
      let t = { type: this.typeObject };
      axios.put('api/' + this.typeObject + '/' + e.id + '/restore', t).then((s) => {
        s.status == 200;
        e.deleted_at = null;
      });
    },
    actionDeleteGallery(e) {
      if (!e.has_use_cases) {
        axios
          .delete('api/' + this.typeObject + '/' + e.id)
          .then((t) => {
            if (t.status == 204 || t.status == 200) {
              let s = true;
              if (t.status == 200) {
                s = t.data.deleted_at;
              }
              let i = {
                id: e.id,
                date: s,
                typeObject: this.typeObject,
              };
              c.$emit('changeDeleted_at', i);
              c.$emit('checkDeletePanel', {
                typeObject: this.typeObject,
                refObject: e.id,
              });
              this.$nextTick(() => {
                this.filterType();
              });
            }
          })
          .catch((t) => {
            this.showCenterToast(this.trans.get('__JSON__.tag.toast.error.delete'), 'e-toast-danger');
          });
      }
    },
    actionRestoreGallery(e) {
      if (e.deleted_at) {
        axios
          .put('api/' + this.typeObject + '/' + e.id + '/restore', { type: this.typeObject })
          .then((t) => {
            t.status == 200;
            {
              let s = {
                id: e.id,
                date: null,
                typeObject: this.typeObject,
              };
              c.$emit('changeDeleted_at', s);
              this.$nextTick(() => {
                this.filterType();
              });
            }
          })
          .catch((t) => {
            this.showCenterToast(this.trans.get('__JSON__.tag.toast.error.restore'), 'e-toast-danger');
          });
      }
    },
    pagerChange(e) {
      this.currentPageNumber = e.currentPage;
      let t = this.pageSize;
      let s = (e.currentPage - 1) * this.pageSize;
      let i = this.pageSize + s;
      this.pageData =
        (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
        this.searchEle.value.length === 0
          ? this.contentDataGrid.slice(s, i)
          : this.resultData.slice(s, i);
    },
    pagerCreated(e) {
      this.pageData = this.contentDataGrid.slice(0, this.pageSize);
    },
    openPanel(e, t, s) {
      if (!this.isOpening) {
        this.isOpening = true;
        setTimeout(() => {
          let a = {
            panelDroite: true,
            typeObject: this.typeObject || s,
            refObjet: e,
          };
          c.$emit('showPanel', a);
          this.isOpening = false;
          this.$emit('close');
        }, 300);
      }
    },
    chooseMediaQuick(e) {
      if (this.getFrom == 'panelRight' || this.getFrom == 'poiable') {
        this.contentDataGrid
          .filter((a) => a.selected)
          .forEach((a) => {
            let h = this.contentDataGrid.findIndex((u) => u.id == a.id);
            a.selected = false;
            this.contentDataGrid.splice(h, 1, a);
          });
        let s = this.contentDataGrid.find((a) => a.id == e.id);
        let i = this.contentDataGrid.findIndex((a) => a.id == e.id);
        s.selected = true;
        this.contentDataGrid.splice(i, 1, s);
        this.$emit('quickSelection');
      }
    },
    chooseMedia(e) {
      if (this.getFrom == 'panelRight' || this.getFrom == 'poiable') {
        let t = this.contentDataGrid.find((i) => i.id == e.id);
        let s = this.contentDataGrid.findIndex((i) => i.id == e.id);
        if (t.selected) {
          t.selected = false;
          this.contentDataGrid.splice(s, 1, t);
        } else {
          let i = this.contentDataGrid.filter((a) => a.selected);
          i.length < this.numberFilesMax
            ? ((t.selected = true), this.contentDataGrid.splice(s, 1, t))
            : this.numberFilesMax == 1
              ? (i.forEach((a) => {
                  let h = this.contentDataGrid.findIndex((u) => u.id == a.id);
                  a.selected = false;
                  this.contentDataGrid.splice(h, 1, a);
                }),
                (t.selected = true),
                this.contentDataGrid.splice(s, 1, t))
              : this.showCenterToast(
                  this.trans.get('__JSON__.documentation.selection.toast.error.maxSelectionFile', {
                    number: this.numberFilesMax,
                  }),
                  'e-toast-danger',
                );
        }
      }
    },
  },
  computed: {
    totalRecordsCounts() {
      if (this.multiselectComp) {
        if (this.searchEle)
          return (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
            this.searchEle.value.length === 0
            ? this.contentDataGrid.length
            : this.resultData.length;
      } else return this.contentDataGrid.length;
    },
  },
  watch: {
    contentDataGrid: {
      deep: true,
      handler(e, t) {
        let s = (this.currentPageNumber - 1) * this.pageSize;
        let i = this.pageSize + s;
        this.pageData =
          (this.multiselectComp.value === null || this.multiselectComp.value.length === 0) &&
          this.searchEle.value.length === 0
            ? this.contentDataGrid.slice(s, i)
            : this.resultData.slice(s, i);
        if (this.$refs.paging && e && t && e.length !== t.length) {
          this.$refs.paging.ej2Instances.totalRecordsCount = this.pageData.length;
          this.$refs.paging.ej2Instances.currentPage = 1;
          if (this.typeObject == 'files' || this.typeObject == 'users') return this.filterExtension();
          if (this.typeObject == 'tags') return this.filterType();
        }
      },
    },
  },
  mounted() {
    this.emptyData = true;
    this.categoryResult = [];
    this.searchEle = document.getElementById('search_Card');
  },
};
export { m as g };
