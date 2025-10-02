import { E as d } from '../assets/app-BjImoLrr.js';
const o = {
  computed: {
    isGridForCart() {
      return this.cartStore.cart_id;
    },
  },
  methods: {
    getDefaultItemSelection(t, e = true, r = false) {
      if (this.can('update', 'carts')) {
        t.push({
          text: e
            ? r
              ? this.trans.get('__JSON__.cart.content.addToCartElem')
              : this.trans.get('__JSON__.cart.content.addToCart')
            : this.trans.get('__JSON__.treeView.action.addToCart'),
          id: 'addToCart',
        });
      }
      return t;
    },
    checkAddToCart(t, e) {
      if (t && t.item && t.item.id === 'addToCart') {
        let r = e.map((a) => ({
          object_id: a.id,
          object_type: a.api_prefix,
        }));
        d.$emit('showCartSelector', r);
      }
    },
  },
};
export { o as c };
