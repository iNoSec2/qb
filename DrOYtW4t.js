import {
  _ as M,
  a5 as f,
  a4 as m,
  E as t,
  c as k,
  f as r,
  g as h,
  w as n,
  r as _,
  o as l,
  e as u,
  t as c,
} from '../assets/app-BjImoLrr.js';
const g = {
  props: {
    dataGrid: { required: true },
    mode: { default: 'default' },
  },
  mounted() {
    this.manageMode();
    t.$on('updateButtonsMode', this.manageMode);
  },
  beforeUnmount() {
    t.$off('updateButtonsMode', this.manageMode);
  },
  data() {
    let e = true;
    let a = false;
    let s = false;
    switch (this.mode) {
      case 'trash':
        {
          e = false;
          a = false;
          s = true;
        }
        break;
      case 'all':
        {
          e = false;
          a = true;
          s = false;
        }
        break;
    }
    return {
      defaut: e,
      all: a,
      trash: s,
      limitClick: false,
    };
  },
  methods: {
    manageMode() {
      switch (this.mode) {
        case 'default':
          this.defaultMode();
          break;
        case 'trash':
          this.trashMode();
          break;
        case 'all':
          this.allMode();
          break;
      }
    },
    changeModeToTrashed() {
      if (!this.limitClick) {
        let e = this;
        this.limitClick = true;
        setTimeout(function () {
          e.limitClick = false;
        }, 200);
        this.trashMode();
      }
    },
    changeModeToAll() {
      if (!this.limitClick) {
        let e = this;
        this.limitClick = true;
        setTimeout(function () {
          e.limitClick = false;
        }, 200);
        this.allMode();
      }
    },
    changeModeToDefault() {
      if (!this.limitClick) {
        let e = this;
        this.limitClick = true;
        setTimeout(function () {
          e.limitClick = false;
        }, 200);
        this.defaultMode();
      }
    },
    allMode() {
      this.defaut = false;
      this.all = true;
      this.trash = false;
      t.$emit('mode', 'all');
      t.$emit('changeMode', this.dataGrid);
    },
    trashMode() {
      this.defaut = false;
      this.all = false;
      this.trash = true;
      let e = new f(this.dataGrid).executeLocal(new m().where('deleted_at', 'notequal', null));
      t.$emit('mode', 'trash');
      t.$emit('changeMode', e);
    },
    defaultMode() {
      this.defaut = true;
      this.trash = false;
      this.all = false;
      let e = new f(this.dataGrid).executeLocal(new m().where('deleted_at', 'equal', null));
      t.$emit('mode', 'default');
      t.$emit('changeMode', e);
    },
  },
  watch: {
    mode: {
      handler(e) {
        this.manageMode();
      },
    },
    dataGrid: {
      handler(e) {
        this.manageMode();
      },
    },
  },
};
function C(e, a, s, w, i, d) {
  const o = _('ejs-button');
  l();
  return k('div', null, [
    i.defaut
      ? (l(),
        r(
          o,
          {
            key: 0,
            cssClass: 'e-success',
            onClick: d.changeModeToAll,
            style: { width: '150px' },
          },
          {
            default: n(() => [u(c(e.trans.get('__JSON__.main.grid.mode.default')), 1)]),
            _: 1,
          },
          8,
          ['onClick'],
        ))
      : h('', true),
    i.all
      ? (l(),
        r(
          o,
          {
            key: 1,
            cssClass: 'e-info',
            onClick: d.changeModeToTrashed,
            style: { width: '150px' },
          },
          {
            default: n(() => [u(c(e.trans.get('__JSON__.main.grid.mode.all')), 1)]),
            _: 1,
          },
          8,
          ['onClick'],
        ))
      : h('', true),
    i.trash
      ? (l(),
        r(
          o,
          {
            key: 2,
            cssClass: 'e-danger',
            onClick: d.changeModeToDefault,
            style: { width: '150px' },
          },
          {
            default: n(() => [u(c(e.trans.get('__JSON__.main.grid.mode.trash')), 1)]),
            _: 1,
          },
          8,
          ['onClick'],
        ))
      : h('', true),
  ]);
}
const T = M(g, [['render', C]]);
export { T as b };
