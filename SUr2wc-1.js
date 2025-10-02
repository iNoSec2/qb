import { i as n } from './BWJp0flw.js';
import { _ as c, h0 as d, c as l, g as p, a as m, w as u, r as h, o as a, b as f } from '../assets/app-BjImoLrr.js';
const g = {
  mixins: [n],
  props: {
    urlField: { required: true },
    data: { required: true },
    allowClickTooltip: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    let e = 'imageNomenclature' + UUID.generate();
    return {
      imageNomenclature: e,
      imageNomenclatureId: '#' + e,
      isTooltipVisible: false,
    };
  },
  computed: {
    templateTooltip() {
      let e = '<div class="imageTooltipContainer tooltip-content-' + this.imageNomenclature + '">';
      if (this.data.total_images_count > 1) {
        e += '<span class="badgeCountImageInCarousel">+' + (this.data.total_images_count - 1) + '</span>';
      }
      e += '<img class="imageTooltip" src="' + this.url + '" /></div>';
      return e;
    },
    url() {
      return this.data.hasOwnProperty(this.urlField) && this.data[this.urlField] && this.data[this.urlField] !== '0'
        ? this.data[this.urlField]
        : false;
    },
  },
  methods: {
    handleBeforeOpen() {
      if (this.allowClickTooltip) {
        this.isTooltipVisible = true;
        d(() => {
          document.addEventListener('click', this.handleTooltipClick);
        });
      }
    },
    handleBeforeClose() {
      if (this.allowClickTooltip) {
        this.isTooltipVisible = false;
        document.removeEventListener('click', this.handleTooltipClick);
      }
    },
    handleTooltipClick(e) {
      if (
        this.allowClickTooltip &&
        this.isTooltipVisible &&
        e.target.closest('.tooltip-content-' + this.imageNomenclature)
      ) {
        this.$emit('onClickTooltip');
        this.$refs.tooltip.close();
      }
    },
  },
};
const C = { class: 'p-1' };
const T = { key: 0 };
const _ = ['id', 'src'];
function k(e, i, B, N, o, t) {
  const s = h('ejs-tooltip');
  a();
  return l('div', C, [
    t.url && t.templateTooltip
      ? (a(),
        l('div', T, [
          m(
            s,
            {
              ref: 'tooltip',
              position: 'TopCenter',
              target: o.imageNomenclatureId,
              content: t.templateTooltip,
              windowCollision: true,
              animation: e.default_SF_Props.animationTooltip,
              onBeforeOpen: t.handleBeforeOpen,
              onBeforeClose: t.handleBeforeClose,
            },
            {
              default: u(() => [
                f(
                  'img',
                  {
                    id: o.imageNomenclature,
                    class: 'imageGrid',
                    src: t.url,
                    onError: i[0] || (i[0] = (...r) => e.replaceByDefault && e.replaceByDefault(...r)),
                  },
                  null,
                  40,
                  _,
                ),
              ]),
              _: 1,
            },
            8,
            ['target', 'content', 'animation', 'onBeforeOpen', 'onBeforeClose'],
          ),
        ]))
      : p('', true),
  ]);
}
const V = c(g, [['render', k]]);
export { V as s };
