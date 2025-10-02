import { nh as h, E as d } from '../assets/app-BjImoLrr.js';
const y = {
  mixins: [h],
  data() {
    return {
      tableName: 'Grids',
      primaryKeysGrids: {
        docsheets: 'docsheets',
        files: 'files',
        tags: 'tags',
        nodes: 'nodes',
        tasksMaintenance: 'tasksMaintenance',
        tasksDocumentation: 'tasksDocumentation',
        items: 'items',
        assets: 'assets',
      },
      gridsInIndexedDb: ['docsheets', 'files', 'tags', 'nodes', 'tasks', 'items', 'assets'],
    };
  },
  computed: {
    primaryKeyIndexedDb() {
      let e = this.typeObject;
      if (this.menuType) {
        e = e + this.menuType;
      }
      return e;
    },
  },
  methods: {
    getContentDataGrid(e = null) {
      if (!(e && e !== this.typeObject)) {
        this.cartStore.cart_id && this.cartStore.cart_type && this.typeObject === this.cartStore.cart_type
          ? this.getDataGrid(1)
          : (this.cartStore.removeCartData(),
            window.indexedDB &&
            window.mix_config.INDEXEDDB_GRIDS &&
            window.mix_config.INDEXEDDB_GRIDS[this.typeObject] &&
            this.gridsInIndexedDb.includes(this.typeObject) &&
            this.primaryKeysGrids[this.primaryKeyIndexedDb]
              ? this.getDataGridFromIndexedDb()
              : this.getDataGrid(1));
      }
    },
    getDataGridFromIndexedDb() {
      this.getDataByKeyIndexedDb(this.tableName, this.primaryKeysGrids[this.primaryKeyIndexedDb]).then(async (e) => {
        let a = null;
        let n = await axios.get('api/getTimeServer');
        if (e) {
          a = e.last_updated_at;
        }
        this.getDataGrid(1, a)
          .then((r) => {
            let t = [];
            if (e && Array.isArray(e.data)) {
              t = e.data;
            }
            a
              ? r.forEach((s) => {
                  let i = t.findIndex((o) => o.id === s.id);
                  i > -1 ? t.splice(i, 1, s) : t.push(s);
                })
              : (t = r);
            this.typeObject === 'nodes'
              ? t.sort((s, i) => (s._lft < i._lft ? -1 : s._lft > i._lft ? 1 : 0))
              : t.sort((s, i) => (s.id < i.id ? 1 : s.id > i.id ? -1 : 0));
            this.contentData = [...new Set(t)];
            d.$emit('updateButtonsMode');
            this.upsertDataIndexedDb(
              this.tableName,
              {
                data: t,
                last_updated_at: n?.data?.lastUpdatedAt,
              },
              this.primaryKeysGrids[this.primaryKeyIndexedDb],
            );
          })
          .catch((r) => {
            this.contentData = [];
            d.$emit('updateButtonsMode');
          });
      });
    },
  },
};
export { y as g };
