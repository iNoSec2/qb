import { k as f, E as e, p as g, s as l, i as h } from '../assets/app-BjImoLrr.js';
import { g as m } from './CqZ4Ys_5.js';
const b = {
  mixins: [f, m],
  props: {
    menuType: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      contentDataGrid: [],
      isLoadingGrid: false,
      spinner: true,
      urlApi: '',
      contenteValueListAllowed: [],
      showDialog: false,
      previousObject: null,
    };
  },
  created() {
    this.contentData = [];
  },
  computed: {
    nameRoute() {
      return this.cartStore.cart_id
        ? this.trans.get('__JSON__.route.' + this.$route.name + 'Cart')
        : this.trans.get('__JSON__.route.' + this.$route.name);
    },
  },
  methods: {
    hideDialog() {
      this.showDialog = false;
    },
    changeModeValue(t) {
      this.mode = t;
    },
    changeDateDelete(t) {
      if (t.typeObject === this.typeObject) {
        this.changeDate(t);
      }
    },
    updateGridDataFromEditableColumns(t) {
      let a = this.contentData.find((i) => i.id === t.fullData.id && i.api_prefix == t.fullData.api_prefix);
      let o = this.contentData.findIndex((i) => i.id === t.fullData.id && i.api_prefix == t.fullData.api_prefix);
      if (a && o != -1) {
        a[t.editedData] = t.newEditedData;
        this.contentData.splice(o, 1, a);
        e.$emit('updateButtonsMode');
        e.$emit('updateCalendar');
      }
    },
    changeDataGrid(t) {
      if (t) {
        let a = this.contentData.find((i) => i.id === t.id && i.api_prefix == t.api_prefix);
        let o = this.contentData.findIndex((i) => i.id === t.id && i.api_prefix == t.api_prefix);
        if (o != -1) {
          if (a && a.cartQuantity) {
            t.cartQuantity = a.cartQuantity;
          }
          t = this.manageJsonGridData(t, this.typeObject, false);
          this.contentData.splice(o, 1, t);
          e.$emit('updateButtonsMode');
          e.$emit('updateCalendar');
        }
      }
    },
    addObjectDataGrid(t) {
      if (t && t.object && t.type === this.typeObject) {
        t = this.manageJsonGridData(t.object, this.typeObject, false);
        if (t) {
          this.contentData.unshift(t);
          e.$emit('updateButtonsMode');
          e.$emit('updateCalendar');
        }
      }
    },
    deleteObjectsFromGrid(t) {
      if (t && t.ids && t.type === this.typeObject) {
        t.ids.forEach((a) => {
          let o = this.contentData.findIndex((i) => i.id === a);
          if (o !== -1) {
            this.contentData.splice(o, 1);
            e.$emit('updateButtonsMode');
            e.$emit('updateCalendar');
          }
        });
      }
    },
    changeDateDeleteMasse(t) {
      if (t.length && t[0].typeObject === this.typeObject) {
        this.changeDateMasse(t);
      }
    },
    changeMode(t) {
      this.contentDataGrid = [...t];
    },
    dialogBtnClick: function () {
      if (this.can('create', this.objectPermission)) {
        this.showDialog = true;
      }
    },
    getDataGrid(t = 1, a = void 0) {
      if (this.isLoadingGrid) return;
      this.isLoadingGrid = true;
      l(document.getElementById('spinnerFiles'));
      if (t == 1) {
        this.contentData = [];
        this.contentDataGrid = [];
        if (this.$refs.grid) {
          this.$refs.grid.clearSelection();
        }
      }
      let o = 'api/' + this.typeObject + '/grid/' + t;
      let i = true;
      let c = null;
      switch (true) {
        case this.typeObject === 'patterns' && this.typePatterns !== 'all':
          {
            i = false;
            c = axios.get('api/' + this.typeObject + '/type', { params: { type: this.typePatterns } });
          }
          break;
        case this.typeObject === 'nodes' && !this.rootId:
          {
            h(document.getElementById('spinnerFiles'));
            this.isLoadingGrid = false;
            this.updateIsFinish(true);
          }
          return;
        case (this.typeObject === 'tasks' || this.typeObject === 'events') && this.status_ids === null:
          {
            h(document.getElementById('spinnerFiles'));
            this.isLoadingGrid = false;
            this.updateIsFinish(true);
          }
          return;
        default:
          c = axios.get(o, {
            params: {
              menuType: this.menuType,
              lastUpdatedAt: a,
              cart_id: this.cartStore.cart_id,
              rootId: this.rootId,
              startDate: this.startDate,
              endDate: this.endDate,
              status_ids: this.status_ids,
              subTaskGridShown: this.subTaskGridShown,
              masterTaskGridShown: this.masterTaskGridShown,
            },
          });
          break;
      }
      return new Promise((u, p) => {
        c.then((n) => {
          this.isLoadingGrid = false;
          let r = [];
          if (a !== void 0) {
            this.updateIsFinish(true);
            e.$emit('gridLoaded');
            h(document.getElementById('spinnerFiles'));
            n.data.items.forEach((s) => {
              s = this.manageJsonGridData(s, this.typeObject, true);
              if (s.project_names) {
                s.project_names = s.project_names.split(' | ').join(', ');
              }
              if (s.project_names_from_arbo) {
                s.project_names_from_arbo = s.project_names_from_arbo.split(' | ').join(', ');
              }
              r.push(s);
            });
            t < n.data.count && sessionStorage.getItem('actualPage') == this.typeObject
              ? (t++,
                this.getDataGrid(t, a).then((s) => {
                  r.push(...s);
                  u(r);
                }))
              : u(r);
          } else {
            this.pctLoading = Math.trunc((t * 100) / n.data.count);
            if (this.pctLoading >= 100 || isNaN(this.pctLoading)) {
              this.updateIsFinish(true);
              e.$emit('gridLoaded');
              h(document.getElementById('spinnerFiles'));
            }
            if (n.status == 200)
              if (i) {
                let s = n.data.cartQuantity;
                n.data.items.forEach((d) => {
                  d = this.manageJsonGridData(d, this.typeObject, true, n.data.cartQuantity);
                  if (d.project_names) {
                    d.project_names = d.project_names.split(' | ').join(', ');
                  }
                  if (d.project_names_from_arbo) {
                    d.project_names_from_arbo = d.project_names_from_arbo.split(' | ').join(', ');
                  }
                  this.contentData.push(d);
                });
                t < n.data.count && sessionStorage.getItem('actualPage') == this.typeObject
                  ? (t++, this.getDataGrid(t, a))
                  : (e.$emit('updateButtonsMode'), e.$emit('updateCalendar'));
              } else {
                this.contentData = n.data;
                e.$emit('updateButtonsMode');
                e.$emit('updateCalendar');
              }
            u(r);
          }
        }).catch((n) => {
          this.isLoadingGrid = false;
          console.error(n);
          this.updateIsFinish(true);
          h(document.getElementById('spinnerFiles'));
          this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.get'), 'e-toast-danger');
          p(n);
        });
      });
    },
    getDataAllowedValue() {
      axios
        .get('api/' + this.typeObject + '/allowedValues')
        .then((t) => {
          if (t.status == 200) {
            this.contenteValueListAllowed = t.data;
          }
        })
        .catch((t) => {
          console.error(t);
          this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.getAllowed'), 'e-toast-danger');
        });
    },
    updateIsFinish(t) {
      this.isFinish = t;
      this.pctLoading = 0;
    },
    openModalAdd() {
      if (document.getElementById('PceSpinner')) {
        l(document.getElementById('PceSpinner'));
      }
      let t = this;
      setTimeout(function () {
        t.showDialog = true;
      }, 200);
    },
  },
  mounted() {
    g({ target: document.getElementById('spinnerFiles') });
    this.getContentDataGrid();
    sessionStorage.setItem('actualPage', this.typeObject);
    e.$on('updateIsFinish', this.updateIsFinish);
    e.$on('openModalAdd', this.openModalAdd);
    e.$on('mode', this.changeModeValue);
    e.$on('changeMode', this.changeMode);
    e.$on('getDataGrid', this.getContentDataGrid);
    e.$on('addObjectGrid', this.addObjectDataGrid);
    e.$on('updateDataGrid', this.changeDataGrid);
    e.$on('updateGridDataFromEditableColumns', this.updateGridDataFromEditableColumns);
    e.$on('changeDeleted_at', this.changeDateDelete);
    e.$on('changeDeleted_at_masse', this.changeDateDeleteMasse);
    e.$on('deleteObjectsFromGrid', this.deleteObjectsFromGrid);
  },
  beforeUnmount() {
    this.contentDataGrid.length = 0;
    this.contentData.length = 0;
    sessionStorage.setItem('actualPage', '');
    e.$off('updateIsFinish', this.updateIsFinish);
    e.$off('openModalAdd', this.openModalAdd);
    e.$off('mode', this.changeModeValue);
    e.$off('changeMode', this.changeMode);
    e.$off('getDataGrid', this.getContentDataGrid);
    e.$off('addObjectGrid', this.addObjectDataGrid);
    e.$off('updateDataGrid', this.changeDataGrid);
    e.$off('updateGridDataFromEditableColumns', this.updateGridDataFromEditableColumns);
    e.$off('changeDeleted_at', this.changeDateDelete);
    e.$off('changeDeleted_at_masse', this.changeDateDeleteMasse);
    e.$off('deleteObjectsFromGrid', this.deleteObjectsFromGrid);
  },
};
export { b as d };
