import { _ as o, g as e, r as s } from '../assets/app-BjImoLrr.js';
const i = {
  components: {},
  name: 'gridLogs',
  methods: {
    previousGrid() {
      if (this.actionLogsStore.gridLogsIndex - 1 >= 0) {
        let t = this.actionLogsStore.gridLogsIndex - 1;
        this.actionLogsStore.updateGridLogsIndex(t);
        this.updateRoute();
      }
    },
    nextGrid() {
      if (this.actionLogsStore.gridLogs.length > this.actionLogsStore.gridLogsIndex + 1) {
        let t = this.actionLogsStore.gridLogsIndex + 1;
        this.actionLogsStore.updateGridLogsIndex(t);
        this.updateRoute();
      }
    },
    updateRoute() {
      this.$nextTick(() => {
        let t = this.actionLogsStore.gridLogs[this.actionLogsStore.gridLogsIndex];
        this.$router.push(this.actionLogsStore.gridLogs[this.actionLogsStore.gridLogsIndex]);
      });
    },
  },
};
function r(t, n, d, g, a, c) {
  s('ejs-tooltip');
  return e('', true);
}
const h = o(i, [['render', r]]);
export { h as G };
