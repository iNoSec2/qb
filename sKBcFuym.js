import { E as r } from '../assets/app-BjImoLrr.js';
const n = {
  props: {
    openRightPanelAfter: {
      required: false,
      default() {
        return true;
      },
    },
  },
  methods: {
    openNewObject(e, t) {
      if (this.openRightPanelAfter) {
        r.$emit('showPanel', {
          panelDroite: true,
          refObjet: e,
          typeObject: t,
        });
      }
    },
  },
};
export { n as o };
