import { M as g } from './zC887B9y.js';
import { m as f, Z as y } from './CuxdB7hV.js';
import { i as C } from './BWJp0flw.js';
import { h as v } from './CKKuZvVl.js';
import {
  _ as w,
  p as S,
  s as M,
  i as c,
  c as r,
  a as d,
  w as m,
  r as n,
  o as l,
  b as i,
  f as b,
  g as I,
  d as T,
  v as N,
} from '../assets/app-BjImoLrr.js';
const k = {
  mixins: [C],
  components: {
    ZoneUploader: y,
    ModalSelectionAddDocumentation: f,
    modalGallery: g,
    headerTemplate: v,
  },
  props: {
    dataCreation: {
      required: false,
      default: null,
    },
    type: { required: true },
  },
  data() {
    return {
      width: '750px',
      height: '400px',
      modalButtonClose: [
        {
          click: this.closeModal,
          buttonModel: {
            content: this.trans.get('__JSON__.main.modal.button.close'),
            isPrimary: false,
          },
        },
        {
          click: this.createFile,
          buttonModel: {
            content: this.trans.get('__JSON__.main.modal.button.save'),
            isPrimary: true,
          },
        },
      ],
      promptHeader:
        this.type === 'DAWE'
          ? this.trans.get('__JSON__.viewer.drawe.createTitle')
          : this.trans.get('__JSON__.viewer.panorama.createTitle'),
      animationSettings: { effect: 'None' },
      title: this.dataCreation ? this.dataCreation.file.title : '',
      image: this.dataCreation ? this.dataCreation.link : false,
      idImage: this.dataCreation ? this.dataCreation.file.id : null,
      showModalGallery: false,
    };
  },
  methods: {
    closeModal() {
      this.$refs.modalEdition.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    createFile() {
      this.title.length && this.idImage
        ? (M(document.getElementById('spinnerModalCreation')),
          axios
            .post('api/interactive_file/createInteractiveFilesFromFiles', {
              ids: [this.idImage],
              type: this.type,
              titles: [this.title],
            })
            .then((e) => {
              c(document.getElementById('spinnerModalCreation'));
              e.data.success.length
                ? (this.showCenterToast(
                    this.trans.get('__JSON__.main.modal.toast.info.creationRunning'),
                    'e-toast-info',
                  ),
                  this.closeModal())
                : this.showCenterToast(
                    this.trans.get('__JSON__.main.modal.toast.error.creation'),
                    'e-toast-danger',
                    e.data.error[0].error,
                  );
            })
            .catch((e) => {
              c(document.getElementById('spinnerModalCreation'));
              this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.creation'), 'e-toast-danger');
            }))
        : this.showCenterToast(this.trans.get('__JSON__.viewer.toast.error.invalidInputCreation'), 'e-toast-warning');
    },
    fileSelection(e) {
      this.showModalGallery = false;
      if (Array.isArray(e) && e.length) {
        this.image = e[0].urlImage;
        this.idImage = e[0].id;
        if (this.title == '') {
          this.title = e[0].title;
        }
      }
    },
  },
  mounted() {
    S({ target: document.getElementById('spinnerModalCreation') });
  },
};
const B = { class: 'container mt-4' };
const F = { class: 'row' };
const x = { class: 'col-md-6' };
const E = { class: 'containerIconeTag' };
const J = {
  key: 0,
  class: 'divImgPanel img-fluid',
};
const O = ['src'];
const D = { class: 'col-md-6' };
const G = ['placeholder'];
function A(e, o, V, j, t, s) {
  const h = n('headerTemplate');
  const p = n('zone-uploader');
  const _ = n('modal-selection-add-documentation');
  const u = n('ejs-dialog');
  l();
  return r('div', null, [
    d(
      u,
      {
        ref: 'modalEdition',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: t.animationSettings,
        close: s.onModalClose,
        allowDragging: true,
        width: t.width,
        height: t.height,
        isModal: true,
        visible: true,
        buttons: t.modalButtonClose,
      },
      {
        headerTemplate: m(() => [d(h, { title: t.promptHeader }, null, 8, ['title'])]),
        templateContent: m(() => [
          i('div', null, [
            o[5] || (o[5] = i('div', { id: 'spinnerModalCreation' }, null, -1)),
            i('div', B, [
              i('div', F, [
                i('div', x, [
                  i('div', E, [
                    d(
                      p,
                      {
                        onFileSelected: s.fileSelection,
                        objectType: 'files',
                        typeFile: 'images',
                        'number-files-max': '1',
                        hasImage: t.image,
                        enabled: e.can('upload', 'files'),
                      },
                      {
                        dropZoneArea: m(() => [
                          t.image
                            ? (l(),
                              r(
                                'img',
                                {
                                  key: 1,
                                  src: t.image,
                                  class: 'img-fluid',
                                  style: {
                                    display: 'block',
                                    margin: '0 auto',
                                    cursor: 'pointer',
                                  },
                                  onError: o[1] || (o[1] = (...a) => e.replaceByDefault && e.replaceByDefault(...a)),
                                  onClick: o[2] || (o[2] = (a) => (t.showModalGallery = true)),
                                },
                                null,
                                40,
                                O,
                              ))
                            : (l(),
                              r('div', J, [
                                i('span', {
                                  class: 'iconeVidePanel sf-icon-picture_01',
                                  style: {
                                    color: '#191e2c',
                                    cursor: 'pointer',
                                  },
                                  onClick: o[0] || (o[0] = (a) => (t.showModalGallery = true)),
                                }),
                              ])),
                        ]),
                        _: 1,
                      },
                      8,
                      ['onFileSelected', 'hasImage', 'enabled'],
                    ),
                  ]),
                ]),
                i('div', D, [
                  T(
                    i(
                      'input',
                      {
                        class: 'e-input mb-0',
                        type: 'text',
                        'onUpdate:modelValue': o[3] || (o[3] = (a) => (t.title = a)),
                        placeholder: e.trans.get('__JSON__.file.value.title'),
                      },
                      null,
                      8,
                      G,
                    ),
                    [[N, t.title]],
                  ),
                ]),
              ]),
            ]),
          ]),
          t.showModalGallery
            ? (l(),
              b(
                _,
                {
                  key: 0,
                  onClose: o[4] || (o[4] = (a) => (t.showModalGallery = false)),
                  onFileSelected: s.fileSelection,
                  objectType: 'files',
                  typeFile: 'images',
                  'number-files-max': '1',
                },
                null,
                8,
                ['onFileSelected'],
              ))
            : I('', true),
        ]),
        _: 1,
      },
      8,
      ['animationSettings', 'close', 'width', 'height', 'buttons'],
    ),
  ]);
}
const U = w(k, [['render', A]]);
export { U as m };
