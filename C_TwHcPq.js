import {
  _,
  c as i,
  g as w,
  b as l,
  a as d,
  w as r,
  r as u,
  o as c,
  b7 as v,
  b8 as b,
  aP as k,
  a2 as y,
  n as f,
  F as T,
  h as C,
} from '../assets/app-BjImoLrr.js';
import { d as x } from './DF3-5v4V.js';
const D = {
  mixins: [x],
  props: {
    data: { required: true },
    authorizeDownload: {
      required: false,
      default() {
        return false;
      },
    },
  },
  methods: {
    downloadImage() {
      this.canDownloadFile(this.data.extension)
        ? this.downloadObjectWithJob(
            'api/files/downloadJob',
            this.data.title + '.' + this.data.extension.toLowerCase(),
            this.trans.get('__JSON__.notification.content.downloadFile', { id: this.data.id }),
            {
              ids: [this.data.id],
              type: 'files',
              zipDocumentation: false,
            },
          )
        : this.showCenterToast(this.trans.get('__JSON__.file.toast.error.undownloadable'), 'e-toast-danger');
    },
  },
};
const j = {
  class: 'img-container',
  style: {
    display: 'flex',
    'justify-content': 'center',
    'align-content': 'center',
  },
};
const S = {
  key: 0,
  class: 'QB-absolute-button-container',
};
const z = ['src', 'alt'];
function E(e, a, t, m, s, n) {
  const h = u('ejs-button');
  c();
  return i('figure', j, [
    t.authorizeDownload && e.canDownloadFile(t.data.extension)
      ? (c(),
        i('div', S, [
          d(
            h,
            {
              class: 'e-control e-btn',
              onClick: n.downloadImage,
            },
            {
              default: r(() => [...(a[0] || (a[0] = [l('span', { class: 'sf-icon-document-download' }, null, -1)]))]),
              _: 1,
            },
            8,
            ['onClick'],
          ),
        ]))
      : w('', true),
    l(
      'img',
      {
        src: t.data.urlImage,
        alt: t.data.title,
        class: 'img-carousel',
      },
      null,
      8,
      z,
    ),
  ]);
}
const F = _(D, [
  ['render', E],
  ['__scopeId', 'data-v-1f719761'],
]);
const H = {
  components: {
    'e-carousel-item': b,
    'e-carousel-items': v,
    imageSyncfusionTemplate: F,
  },
  props: {
    dataImages: { required: true },
    authorizeDownload: {
      required: false,
      default() {
        return false;
      },
    },
    withThumbnails: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    return { activeImageId: null };
  },
  computed: {
    indicatorsTemplate() {
      return this.withThumbnails ? { indicatorsTemplate: 'indicatorsTemplate' } : {};
    },
  },
  methods: {
    getImageTooltip(e) {
      let a = e.title;
      if (e.comment) {
        a += '<br>' + e.comment;
      }
      return a;
    },
    updateActiveImage(e, a = null) {
      if (e) {
        const t = e.nextIndex;
        if (typeof e.nextIndex < 'u') {
          this.activeImageId = this.dataImages[e.nextIndex].id;
        }
      } else {
        const t = this.$refs.carousel.ej2Instances;
        const m = a !== null ? a : this.$refs.carousel.ej2Instances.selectedIndex;
        const s = this.dataImages[m];
        this.activeImageId = this.dataImages[m] ? this.dataImages[m].id : null;
      }
    },
    navigateToImage(e) {
      const a = this.$refs.carousel.ej2Instances;
      a.selectedIndex = e;
      this.updateActiveImage(e);
    },
  },
  mounted() {
    this.clickHandler = (e) => {
      if (e.target.matches('.button-close-modal') || !e.target.closest('.control-container')) {
        this.$emit('closeCarousel', false);
      }
    };
    this.keydownHandler = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.$emit('closeCarousel', false);
      }
    };
    document.addEventListener('click', this.clickHandler, false);
    document.addEventListener('keydown', this.keydownHandler, false);
    this.$nextTick(() => {
      this.updateActiveImage();
    });
  },
  unmounted() {
    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('keydown', this.keydownHandler);
  },
};
const L = { class: 'e-indicator-bars' };
const q = { class: 'e-indicator-bar e-template' };
const A = { class: 'indicator' };
const N = ['src', 'onClick'];
function P(e, a, t, m, s, n) {
  const h = u('image-syncfusion-template');
  const g = u('ejs-tooltip');
  const I = u('ejs-carousel');
  c();
  return i(
    'div',
    { class: f(t.withThumbnails ? 'control-container control-container-with-thumbnails' : 'control-container') },
    [
      d(
        I,
        y(
          {
            id: 'carousel',
            class: 'pt-2',
          },
          n.indicatorsTemplate,
          {
            ref: 'carousel',
            indicatorsType: 'Progress',
            animationEffect: 'Fade',
            dataSource: t.dataImages,
            itemTemplate: 'imageSyncfusionTemplate',
            autoPlay: false,
            onCreated: n.updateActiveImage,
            onSlideChanging: n.updateActiveImage,
          },
        ),
        k(
          {
            imageSyncfusionTemplate: r(({ data: o }) => [
              d(
                h,
                {
                  authorizeDownload: t.authorizeDownload,
                  data: o,
                },
                null,
                8,
                ['authorizeDownload', 'data'],
              ),
            ]),
            _: 2,
          },
          [
            t.withThumbnails
              ? {
                  name: 'indicatorsTemplate',
                  fn: r(() => [
                    l('div', L, [
                      (c(true),
                      i(
                        T,
                        null,
                        C(
                          t.dataImages,
                          (o, p) => (
                            c(),
                            i('div', q, [
                              l('div', A, [
                                d(
                                  g,
                                  {
                                    content: this.getImageTooltip(o),
                                    animation: e.default_SF_Props.animationTooltip,
                                  },
                                  {
                                    default: r(() => [
                                      l(
                                        'img',
                                        {
                                          src: o.thumbnail,
                                          alt: 'image',
                                          class: f(
                                            'carousel-thumbnail-image ' +
                                              (s.activeImageId === o.id ? 'carousel-thumbnail-image-selected' : ''),
                                          ),
                                          onClick: (B) => n.navigateToImage(p),
                                        },
                                        null,
                                        10,
                                        N,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ['content', 'animation'],
                                ),
                              ]),
                            ])
                          ),
                        ),
                        256,
                      )),
                    ]),
                  ]),
                  key: '0',
                }
              : void 0,
          ],
        ),
        1040,
        ['dataSource', 'onCreated', 'onSlideChanging'],
      ),
    ],
    2,
  );
}
const $ = _(H, [
  ['render', P],
  ['__scopeId', 'data-v-c955994b'],
]);
export { $ as M };
