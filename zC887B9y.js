import {
  _ as y,
  E as h,
  p as F,
  a5 as u,
  a4 as m,
  s as S,
  i as p,
  c as M,
  a as s,
  w as o,
  r as i,
  o as w,
  b as r,
  e as _,
  t as g,
} from '../assets/app-BjImoLrr.js';
import x from './CIZo99Uw.js';
import { h as C } from './CKKuZvVl.js';
const G = {
  props: {
    idFilesSelected: {
      required: false,
      default: function () {
        return [];
      },
    },
    extensionFileSelected: {
      required: false,
      default: function () {
        return [];
      },
    },
    typeFile: { required: true },
    objectType: { required: true },
    numberFilesMax: {
      required: false,
      default: 9999,
    },
  },
  methods: {
    checkFilesSelected(t) {
      t.length <= this.numberFilesMax
        ? this.$emit('fileSelected', t)
        : this.showCenterToast(
            this.trans.get('__JSON__.documentation.selection.toast.error.maxSelectionFile', {
              number: this.numberFilesMax,
            }),
            'e-toast-danger',
          );
    },
  },
};
const k = {
  components: {
    appGallery: x,
    headerTemplate: C,
  },
  mixins: [G],
  data() {
    return {
      getFrom: this.objectType == 'poi' ? 'poiable' : 'panelRight',
      isModal: true,
      spinnerGalleryModalId: 'spinnerGalleryModalId' + UUID.generate(),
      visible: false,
      animationSettings: { effect: 'None' },
      width: '80%',
      height: '800px',
      position: {
        X: 'Center',
        Y: 'Top',
      },
      spinner: true,
      contentData: [],
      contentDataGrid: [],
    };
  },
  computed: {
    promptHeader() {
      return (
        this.trans.get('__JSON__.main.modal.content.gallerySelect') +
        ' ( ' +
        this.trans.get('__JSON__.main.grid.toolbar.numberSelected', {
          number: this.contentDataGrid.filter((t) => t.selected).length,
        }) +
        ' ) '
      );
    },
  },
  methods: {
    selectFiles() {
      let t = this.contentDataGrid.filter((n) => n.selected);
      this.checkFilesSelected(t);
    },
    closeModal() {
      this.$refs.modalAddFile.hide();
    },
    modalClose: function () {
      this.$emit('close');
    },
    fullClose: function () {
      this.$emit('close', true);
    },
    getDataGallery() {
      let t = null;
      switch (this.objectType) {
        case 'poi':
          t = 'poiable';
          break;
        case 'docModule':
          t = 'docModule';
          break;
        case 'docsheets':
          t = 'docsheets';
          break;
        default:
          t = 'pictures';
          break;
      }
      S(document.getElementById(this.spinnerGalleryModalId));
      axios
        .get('api/files/galleries/' + t)
        .then((n) => {
          p(document.getElementById(this.spinnerGalleryModalId));
          if (n.status === 200) {
            this.spinner = false;
            let a = n.data;
            switch (this.objectType) {
              case 'docsheets':
                a = a.filter(
                  (e) =>
                    !this.idFilesSelected.includes(e.id) &&
                    (e.extension === 'DAWE' ||
                      e.extension === 'JSON' ||
                      e.extension === 'GLB' ||
                      e.extension === 'GLTF' ||
                      e.extension === 'PDF' ||
                      !this.extensionFileSelected.includes(e.extension)),
                );
                break;
              default:
                a = a.filter((e) => !this.idFilesSelected.includes(e.id));
                break;
            }
            a.forEach((e) => {
              if (e.created_at) {
                e.created_at = new Date(e.created_at);
              }
              if (e.updated_at) {
                e.updated_at = new Date(e.updated_at);
              }
              if (e.deleted_at) {
                e.deleted_at = new Date(e.deleted_at);
              }
            });
            this.contentData = a;
            let d = new u(this.contentData).executeLocal(new m().where('deleted_at', 'equal', null));
            this.contentDataGrid = d;
          }
        })
        .catch((n) => {
          console.error(n);
          p(document.getElementById(this.spinnerGalleryModalId));
          this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.listImages'), 'e-toast-danger');
        });
    },
    changeDate(t) {
      if (t.typeObject === 'files') {
        let n = this.contentData.find((a) => a.id == t.id);
        if (n) {
          n.deleted_at = t.date;
        }
        this.contentDataGrid = new u(this.contentData).executeLocal(new m().where('deleted_at', 'equal', null));
      }
    },
  },
  mounted() {
    F({ target: document.getElementById(this.spinnerGalleryModalId) });
    this.getDataGallery();
    this.$refs.modalAddFile.show();
    h.$on('changeDeleted_at', this.changeDate);
  },
  beforeUnmount() {
    h.$off('changeDeleted_at', this.changeDate);
  },
};
const T = ['id'];
const I = { class: 'e-footer-content' };
function j(t, n, a, d, e, l) {
  const f = i('headerTemplate');
  const b = i('app-gallery');
  const c = i('ejs-button');
  const D = i('ejs-dialog');
  w();
  return M('div', null, [
    s(
      D,
      {
        ref: 'modalAddFile',
        header: 'headerTemplate',
        content: 'templateContent',
        close: l.modalClose,
        width: e.width,
        showCloseIcon: true,
        allowDragging: true,
        animationSettings: e.animationSettings,
        visible: e.visible,
        isModal: e.isModal,
      },
      {
        headerTemplate: o(() => [s(f, { title: l.promptHeader }, null, 8, ['title'])]),
        templateContent: o(() => [
          r('div', { id: e.spinnerGalleryModalId }, null, 8, T),
          s(
            b,
            {
              contentData: e.contentData,
              contentDataGrid: e.contentDataGrid,
              spinner: e.spinner,
              getFrom: e.getFrom,
              object: t.objectType,
              showButton: false,
              numberFilesMax: t.numberFilesMax,
              onQuickSelection: l.selectFiles,
              onClose: l.fullClose,
            },
            null,
            8,
            [
              'contentData',
              'contentDataGrid',
              'spinner',
              'getFrom',
              'object',
              'numberFilesMax',
              'onQuickSelection',
              'onClose',
            ],
          ),
          r('div', I, [
            r('span', null, [
              s(
                c,
                {
                  class: 'e-control e-btn sendButton',
                  onClick: l.closeModal,
                },
                {
                  default: o(() => [_(g(t.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                  _: 1,
                },
                8,
                ['onClick'],
              ),
              s(
                c,
                {
                  cssClass: 'e-info',
                  class: 'e-control e-btn e-primary sendButton',
                  onClick: l.selectFiles,
                  onClose: l.fullClose,
                },
                {
                  default: o(() => [_(g(t.trans.get('__JSON__.main.modal.button.select')), 1)]),
                  _: 1,
                },
                8,
                ['onClick', 'onClose'],
              ),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ['close', 'width', 'animationSettings', 'visible', 'isModal'],
    ),
  ]);
}
const O = y(k, [['render', j]]);
export { O as M, G as m };
