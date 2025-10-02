import { b as n } from './DrOYtW4t.js';
import { E as s } from '../assets/app-BjImoLrr.js';
import { g as d } from './D_eyCAsX.js';
import { c as l } from './BzXjulcJ.js';
import c from './JzGXi_4H.js';
const m = {
  components: {
    appModeButtons: n,
    colorValue: c,
  },
  mixins: [d, l],
  props: {
    contentData: {
      required: false,
      default: function () {
        return [];
      },
    },
    contentDataGrid: {
      required: false,
      default: function () {
        return [];
      },
    },
    mode: {
      required: false,
      default: 'default',
    },
  },
  data() {
    return { protectAgainstSyncfusion: false };
  },
  methods: {
    protectAgainstSyncfusionChange(e) {
      this.protectAgainstSyncfusion = e;
      if (this.$refs.tooltipDelete && this.$refs.tooltipDelete.ej2Instances) {
        this.$refs.tooltipDelete.ej2Instances.close();
      }
      if (this.$refs.tooltipRestore && this.$refs.tooltipRestore.ej2Instances) {
        this.$refs.tooltipRestore.ej2Instances.close();
      }
      if (this.$refs.tooltipForceDelete && this.$refs.tooltipForceDelete.ej2Instances) {
        this.$refs.tooltipForceDelete.ej2Instances.close();
      }
      if (this.$refs.tooltipOther && this.$refs.tooltipOther.ej2Instances) {
        this.$refs.tooltipOther.ej2Instances.close();
      }
    },
    deleted(e, i = false) {
      axios({
        method: 'delete',
        url: 'api/' + e + '/' + this.data.id,
        data: { force_delete: i },
      })
        .then((t) => {
          if (t.status == 204 || t.status == 200) {
            s.$emit('protectAgainstSyncfusion', true);
            this.$nextTick(() => {
              if (i) {
                s.$emit('deleteObjectsFromGrid', {
                  ids: [this.data.id],
                  type: e,
                });
              }
              s.$emit('reloadExtensionForUpload');
              if (e === 'projects') {
                s.$emit('refreshTree');
              }
              let o = {
                index: this.data.index,
                action: 'delete',
              };
              s.$emit('colorChange', o);
              let r = true;
              if (t.status == 200) {
                r = t.data.deleted_at;
              }
              let a = {
                id: this.data.id,
                date: r,
                typeObject: e,
              };
              s.$emit('changeDeleted_at', a);
              s.$emit('checkDeletePanel', {
                typeObject: e,
                refObject: this.data.id,
              });
              setTimeout(() => {
                s.$emit('protectAgainstSyncfusion', false);
              }, 300);
            });
          }
        })
        .catch((t) => {
          this.showCenterToast(
            this.trans.get('__JSON__.main.grid.toast.error.deleteObject', { object: e }),
            'e-toast-danger',
            '',
            20000,
          );
        });
    },
    massDeleted(e) {
      e.object;
      let i = false;
      if (e.force_delete) {
        i = e.force_delete;
      }
      let t = [];
      if (!this.$refs || !this.$refs.grid) return;
      t = this.$refs.grid.getSelectedRecords().map((r) => r.id);
      if (!Array.isArray(t) || !t.length) {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-info');
        return;
      }
      axios({
        method: 'delete',
        url: 'api/' + e.type + '/mass_delete',
        data: {
          ids: t,
          force_delete: i,
        },
      })
        .then((r) => {
          s.$emit('deleteObjectsFromGrid', {
            ids: t,
            type: e.type,
          });
        })
        .catch((r) => {
          this.$refs.grid.hideSpinner();
          console.error(r);
        });
    },
    restored(e) {
      let i = { type: e };
      axios
        .put('api/' + e + '/' + this.data.id + '/restore', i)
        .then((t) => {
          t.status == 200
            ? (s.$emit('protectAgainstSyncfusion', true),
              this.$nextTick(() => {
                s.$emit('reloadExtensionForUpload');
                if (e === 'projects') {
                  s.$emit('refreshTree');
                }
                let o = {
                  index: this.data.index,
                  action: 'restore',
                };
                s.$emit('colorChange', o);
                let r = {
                  id: this.data.id,
                  date: null,
                  typeObject: e,
                };
                s.$emit('changeDeleted_at', r);
                setTimeout(() => {
                  s.$emit('protectAgainstSyncfusion', false);
                }, 300);
              }))
            : this.showCenterToast(
                this.trans.get('__JSON__.main.grid.toast.error.restoreObject', { object: e }),
                'e-toast-danger',
              );
        })
        .catch((t) => {
          this.showCenterToast(
            this.trans.get('__JSON__.main.grid.toast.error.restoreObject', { object: e }),
            'e-toast-danger',
          );
        });
    },
    changeColorRow(e) {
      let i = this.$refs.grid.getRowByIndex(e.index);
      e.action == 'delete'
        ? (i.classList.add('soft-deleted'), i.classList.remove('rowActive'))
        : (i.classList.remove('soft-deleted'), i.classList.add('rowActive'));
    },
    changeColorModeAll() {
      if (this.$refs.grid != null) {
        this.$refs.grid.ej2Instances.refresh();
      }
    },
    deselectedRow() {
      if (this.$refs.grid != null) {
        this.$refs.grid.ej2Instances.selectionModule.clearSelection();
      }
    },
    addToNode(e) {
      if (Array.isArray(e) && e.length) {
        let i = {
          idNode: 'none',
          selection: e,
        };
        s.$emit('dropGridFromTree', i);
        this.$refs.grid.ej2Instances.selectionModule.clearSelection();
      } else this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-info');
    },
    addMassConfidentiality(e) {
      Array.isArray(e) && e.length
        ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
        : this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-info');
    },
  },
  mounted() {
    s.$on('protectAgainstSyncfusion', this.protectAgainstSyncfusionChange);
  },
  beforeUnmount() {
    s.$off('protectAgainstSyncfusion', this.protectAgainstSyncfusionChange);
  },
};
const $ = {
  data() {
    return { mode: 'default' };
  },
  methods: {
    changeDateMasse(e) {
      e.forEach((i) => {
        this.changeDate(i, true);
      });
      s.$emit('updateButtonsMode');
    },
    changeDate(e, i = false) {
      let t = e.date;
      t ? (t = new Date(t)) : (t = null);
      let o = this.contentData.find((r) => r.id == e.id);
      if (o) {
        o.deleted_at = t;
        if (!i) {
          s.$emit('updateButtonsMode');
        }
      }
    },
  },
};
export { $ as d, m as g };
