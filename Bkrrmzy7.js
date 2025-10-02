import { M as m } from './zC887B9y.js';
import {
  _ as g,
  E as u,
  b3 as f,
  c as r,
  a as h,
  f as b,
  g as y,
  r as c,
  o,
  F as p,
  h as _,
  b as T,
  t as w,
} from '../assets/app-BjImoLrr.js';
import { T as S, I as k, C as R, H as C, Q as x, a as F } from './CLQ8a77M.js';
const E = {
  components: { Modal_gallery: m },
  provide: {
    richtexteditor: [S, k, R, C, x, F],
  },
  props: {
    contentText: { required: true },
    heightValue: { default: '340' },
    getDataWysiwyg: { required: true },
    type: { required: true },
    enabled: { default: true },
  },
  data() {
    return {
      showGalleryModal: false,
      imageSettings: { saveFormat: 'Base64' },
      range: null,
      keyboardKey: {},
    };
  },
  computed: {
    quickToolbarSettings() {
      return {
        enable: this.enabled,
        showOnRightClick: false,
        actionOnScroll: 'hide',
        table: [
          'TableHeader',
          'TableRows',
          'TableColumns',
          'BackgroundColor',
          '-',
          'TableRemove',
          'Alignments',
          'TableCellVerticalAlign',
          'Styles',
          '-',
          'TableCell',
        ],
      };
    },
    toolbarSettings() {
      switch (this.type) {
        case 'pce':
          return {
            type: 'MultiRow',
            enableFloating: false,
            items: [
              'FontName',
              'FontSize',
              'FontColor',
              'BackgroundColor',
              '|',
              'Bold',
              'Italic',
              'Underline',
              '|',
              'Formats',
              'Alignments',
              'OrderedList',
              'UnorderedList',
              '|',
              'createTable',
              '|',
              'Image',
              {
                tooltipText: this.trans.get('__JSON__.viewer.docModule.gallery'),
                undo: true,
                click: this.onImageGalleryClick.bind(this),
                template:
                  '<button class="e-tbar-btn e-btn" tabindex="-1" id="galleryDocModule"  style="width:100%"><span class="e-tbar-btn-text sf-icon-view-small-icons" style="font-weight: 500;"></span></button>',
              },
              '|',
              'Undo',
              'Redo',
            ],
          };
        case 'events':
          return {
            type: 'MultiRow',
            enableFloating: false,
            items: [
              'FontName',
              'FontSize',
              'FontColor',
              'BackgroundColor',
              '|',
              'Bold',
              'Italic',
              'Underline',
              '|',
              'Formats',
              'Alignments',
              'OrderedList',
              'UnorderedList',
              '|',
              'createTable',
              '|',
              'Undo',
              'Redo',
            ],
          };
        default:
          return {
            type: 'MultiRow',
            enableFloating: false,
            items: [
              'FontName',
              'FontSize',
              'FontColor',
              'BackgroundColor',
              '|',
              'Bold',
              'Italic',
              'Underline',
              '|',
              'Formats',
              'Alignments',
              'OrderedList',
              'UnorderedList',
              '|',
              'createTable',
              '|',
              'Undo',
              'Redo',
            ],
          };
      }
    },
    iframeSettings() {
      switch (this.type) {
        case 'pce':
          return {
            enable: false,
            attributes: null,
            resources: {
              styles: ['css/homepce.css'],
              scripts: [],
            },
          };
        default:
          return {
            enable: false,
            attributes: null,
            resources: {
              styles: [],
              scripts: [],
            },
          };
      }
    },
  },
  watch: {
    getDataWysiwyg() {
      if (this.getDataWysiwyg) {
        this.getTextFromWysig();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.resizeRTE();
    });
    u.$on('needResizing', this.resizeRTE);
  },
  methods: {
    resizeRTE() {
      if (this.$refs.defaultRTE) {
        this.$refs.defaultRTE.refreshUI();
      }
    },
    keyDownEvent(e) {
      this.enabled
        ? (this.$refs.defaultRTE.ej2Instances.keyboardModule.keyConfigs = this.keyboardKey)
        : (e.ctrlKey || e.shiftKey || e.altKey) &&
          ((this.$refs.defaultRTE.ej2Instances.keyboardModule.keyConfigs = { copy: 'ctrl+c' }),
          e.preventDefault(),
          e.stopPropagation(),
          e.stopImmediatePropagation());
    },
    onCreateRichTextEditor() {
      $('#wysig_toolbar_wrapper').css('height', '');
      if (this.$refs.defaultRTE.ej2Instances.keyboardModule) {
        this.keyboardKey = this.$refs.defaultRTE.ej2Instances.keyboardModule.keyConfigs;
      }
      $('#wysig_rte-edit-view').on('keydown', this.keyDownEvent);
    },
    imageSelected(e) {
      this.showGalleryModal = false;
      if (e.length) {
        axios
          .get('api/files/' + e[0].id + '/getBase64')
          .then((a) => {
            let t = a.data.base64;
            new f().setRange(document, this.range);
            this.$refs.defaultRTE.executeCommand('insertImage', {
              url: a.data.base64,
              cssClass: 'rte-img',
            });
            this.range = null;
          })
          .catch((a) => {
            console.error(a);
          });
      }
    },
    closeModalGallery() {
      this.range = null;
      this.showGalleryModal = false;
    },
    onImageGalleryClick() {
      this.range = this.$refs.defaultRTE.getRange();
      this.showGalleryModal = true;
    },
    getTextFromWysig() {
      let e = this.$refs.defaultRTE.getHtml();
      if (!e) {
        e = '';
      }
      this.$emit('wysiwyg', e);
    },
  },
  beforeUnmount() {
    u.$off('needResizing', this.resizeRTE);
  },
};
const M = {
  id: 'defaultRTE',
  class: 'row mt-2',
};
function I(e, a, t, i, n, s) {
  const d = c('ejs-richtexteditor');
  const l = c('modal_gallery');
  o();
  return r('div', M, [
    h(
      d,
      {
        id: 'wysig',
        ref: 'defaultRTE',
        toolbarSettings: s.toolbarSettings,
        height: t.heightValue,
        iframeSettings: s.iframeSettings,
        insertImageSettings: n.imageSettings,
        quickToolbarSettings: s.quickToolbarSettings,
        enabled: t.enabled,
        created: s.onCreateRichTextEditor,
        value: t.contentText,
      },
      null,
      8,
      [
        'toolbarSettings',
        'height',
        'iframeSettings',
        'insertImageSettings',
        'quickToolbarSettings',
        'enabled',
        'created',
        'value',
      ],
    ),
    n.showGalleryModal
      ? (o(),
        b(
          l,
          {
            key: 0,
            onClose: s.closeModalGallery,
            onFileSelected: s.imageSelected,
            extensionFileSelected: [],
            idFilesSelected: [],
            objectType: 'pceHomePage',
            typeFile: 'images',
            numberFilesMax: 1,
          },
          null,
          8,
          ['onClose', 'onFileSelected'],
        ))
      : y('', true),
  ]);
}
const L = g(E, [['render', I]]);
const O = {
  props: {
    optionsJson: { required: true },
    showEdit: { required: true },
  },
  computed: {
    listOptions() {
      return JSON.parse(this.optionsJson);
    },
  },
  methods: {
    updateOptions(e) {
      let a = [...this.listOptions];
      let t = a.find((i) => i.name == e);
      t.value = !t.value;
      this.$emit('updatedOptions', JSON.stringify(a));
    },
  },
};
const v = { class: 'row col-md-12' };
const B = { class: 'col-md-4' };
const N = {
  class: 'text_descriptif col-md-4 col-lg-4 col-xs-6',
  style: { 'min-width': '75px' },
};
function U(e, a, t, i, n, s) {
  const d = c('ejs-checkbox');
  o();
  return r('div', v, [
    (o(true),
    r(
      p,
      null,
      _(
        s.listOptions,
        (l) => (
          o(),
          r('div', B, [
            h(
              d,
              {
                cssClass: 'e-small e-primary mt-4',
                class: 'mt-4',
                checked: l.value,
                onChange: (j) => s.updateOptions(l.name),
                disabled: t.showEdit === false,
              },
              null,
              8,
              ['checked', 'onChange', 'disabled'],
            ),
            T('span', N, w(e.trans.get('__JSON__.pce.options.' + l.name)), 1),
          ])
        ),
      ),
      256,
    )),
  ]);
}
const H = g(O, [['render', U]]);
export { H as O, L as w };
