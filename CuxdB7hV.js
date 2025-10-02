import { M as N } from './B5OkKPxd.js';
import {
  _ as I,
  k as Z,
  s as S,
  i as b,
  p as U,
  c as m,
  b as r,
  d as y,
  a_ as A,
  a as u,
  r as d,
  o as c,
  X as F,
  g as h,
  t as g,
  w as _,
  f as w,
  e as C,
  n as x,
} from '../assets/app-BjImoLrr.js';
import { m as E, M as j } from './zC887B9y.js';
import { P as B, u as O } from './C5NBkq6J.js';
import { g as G } from './D_eyCAsX.js';
import { h as J } from './CKKuZvVl.js';
import z from './DEdfVzPD.js';
let M = 'id-' + UUID.generate();
const q = {
  mixins: [Z, E, O, G],
  provide: { progressbar: [B] },
  props: {
    preUploadFunction: {
      required: false,
      default() {
        return function () {
          document.getElementById('spinnerModalSelectionAddDocumentation')
            ? S(document.getElementById('spinnerModalSelectionAddDocumentation'))
            : S(document.getElementById(M));
        };
      },
    },
    postUploadFunction: {
      required: false,
      default() {
        return function () {
          document.getElementById('spinnerModalSelectionAddDocumentation')
            ? b(document.getElementById('spinnerModalSelectionAddDocumentation'))
            : b(document.getElementById(M));
        };
      },
    },
    enabled: {
      required: false,
      default() {
        return false;
      },
    },
    hasImage: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    let t = 'id-' + UUID.generate();
    return {
      droppableId: t,
      spinnerZoneUploaderId: M,
      uploadZoneId: 'id-' + UUID.generate(),
      dropElement: '#' + t,
      maxSize: 100000000000000,
      directory: false,
      uploaderButtons: { browse: null },
      allowedExtension: [],
      uploadStarted: false,
      waitingForMediable: false,
      nbrChunk: 0,
      chunkDone: 0,
      chunckSuccess: false,
      isComplete: false,
      blockQuitting: true,
    };
  },
  mounted() {
    U({ target: document.getElementById(this.spinnerZoneUploaderId) });
    this.getAllowedAndDeniedExtension();
    if (this.enabled && this.can('upload files')) {
      this.checkIndexationServer();
    }
  },
  computed: {
    path() {
      return {
        saveUrl: this.objectType !== 'updateZip' ? 'api/files/upload' : 'api/environments/uploadZip',
        removeUrl: 'api/files/remove',
        chunkSize: 5048576,
        retryCount: 5,
        retryAfterDelay: 3000,
        sequentialUpload: true,
      };
    },
    pctDone() {
      return this.nbrChunk != 0 ? Math.round((100 * this.chunkDone) / this.nbrChunk) : 0;
    },
    pctDoneText() {
      return this.pctDone + '%';
    },
  },
  methods: {
    getAllowedAndDeniedExtension() {
      S(document.getElementById(this.spinnerZoneUploaderId));
      axios.get('api/value_lists/extensions').then((t) => {
        b(document.getElementById(this.spinnerZoneUploaderId));
        this.allowedExtension = t.data.allowed.values.map((n) => n.code);
      });
    },
    browse() {
      this.directory = false;
      this.$nextTick(() => {
        $('#' + this.uploadZoneId + ' > .e-upload > .e-file-select-wrap > button').click();
      });
    },
    browseFolder() {
      this.directory = true;
      this.$nextTick(() => {
        $('#' + this.uploadZoneId + ' > .e-upload > .e-file-select-wrap > button').click();
      });
    },
    resetFiles() {
      this.$refs.uploadZone.clearAll();
      this.uploadStarted = false;
      this.waitingForMediable = false;
      this.nbrChunk = 0;
      this.chunkDone = 0;
      this.chunckSuccess = false;
      this.directory = false;
      this.isComplete = false;
    },
    calcChunk(t) {
      let n = t.size;
      let e = Math.ceil(t.size / this.path.chunkSize);
      e = e > 1 ? e : 1;
      return e;
    },
    onSelect(t) {
      if (!this.enabled || !this.can('upload', 'files') || this.hasImage) return;
      let n = t.filesData;
      if (n.length) {
        let e = n.map((o) => o.type.toLowerCase());
        if (e.filter((o) => !this.allowedExtension.includes(o)).length) {
          this.showCenterToast(this.trans.get('__JSON__.upload.toast.error.onlyAllowedFile'), 'e-toast-danger');
          this.resetFiles();
          return;
        }
        let i = Math.min(this.mainStore.mixConfig.MIX_APP_MAX_FILES_QUICK_UPLOAD, this.numberFilesMax);
        if (n.length > i) {
          this.showCenterToast(
            this.trans.get('__JSON__.upload.toast.error.maxNumberFiles', { number: i }),
            'e-toast-danger',
          );
          this.resetFiles();
          return;
        }
        switch (this.typeFile) {
          case 'images':
            if (e.filter((p) => !['jpg', 'jpeg', 'png', 'bmp', 'gif', 'heic', 'heif'].includes(p)).length) {
              this.showCenterToast(this.trans.get('__JSON__.upload.toast.error.notImages'), 'e-toast-danger');
              this.resetFiles();
              return;
            }
            break;
          case 'updateZip':
            if (e.filter((p) => !['zip'].includes(p)).length) {
              this.showCenterToast(this.trans.get('__JSON__.upload.toast.error.notZip'), 'e-toast-danger');
              this.resetFiles();
              return;
            }
            break;
        }
        let s = 0;
        n.forEach((o) => {
          s += o.size;
          o.meta = {};
          o.extension = o.type;
          o.meta.relativePath = o.name;
          o.name = o.rawFile.name;
          o.title = o.name.split('/');
          o.meta.type = o.type;
          o.meta.path = o.name;
          o.meta.batchId = this.batch_uuid;
          o.humanSize = this.$refs.uploadZone.bytesToSize(o.size);
          o.meta.reportLink = UUID.generate();
          o.excluded = false;
          o.meta.status = 'allowed';
          o.meta.shownStatus = this.trans.get('__JSON__.file.content.allowed');
          o.deniedExtension = false;
          o.meta.allowedExtension = true;
          this.nbrChunk += this.calcChunk(o);
        });
        this.mainStore.updateIsDoingQuickUpload(true);
        S(document.getElementById(this.spinnerZoneUploaderId));
        axios.get('api/files/freespace').then(({ data: o }) => {
          b(document.getElementById(this.spinnerZoneUploaderId));
          o.space < s
            ? (this.mainStore.updateIsDoingQuickUpload(false),
              this.showCenterToast(this.trans.get('__JSON__.upload.toast.error.notEnoughSpace'), 'e-toast-danger'))
            : this.launchUpload(n);
        });
      }
    },
    launchUpload(t) {
      this.preUploadFunction();
      if (this.objectType === 'updateZip') {
        this.uploadStarted = true;
        this.$refs.uploadZone.upload(t);
      } else {
        let e = {
          batchId: UUID.generate(),
          filesnumber: t.length,
          autoUnzip: false,
          dataSource: JSON.stringify(t),
        };
        axios.post('api/batches/createBatch', e).then(({ data: l }) => {
          this.batch_uuid = l.batch.uuid;
          this.uploadStarted = true;
          this.$refs.uploadZone.upload(t);
        });
      }
    },
    onFileUpload: function (t) {
      t.currentRequest.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    },
    onChunkSuccess(t) {
      this.chunkDone++;
      this.chunckSuccess = true;
      if (this.chunkDone >= this.nbrChunk) {
        this.onComplete();
      }
    },
    onSuccess(t) {
      if (t.operation === 'upload' && t.name === 'success') {
        let n = t.file;
        if (!this.chunckSuccess) {
          this.chunkDone++;
        }
        this.chunckSuccess = false;
        if (this.objectType !== 'updateZip') {
          let e = {
            uploadFileFinished: true,
            name: t.file.rawFile.name,
            uuid_name: UUID.generate() + '.' + t.file.type,
            origin_path: t.file.name,
            title: t.file.rawFile.name,
            batch_id: this.batch_uuid,
            lastModified: t.file.rawFile.lastModified,
            reportLink: t.file.meta.reportLink,
            hash_md5: null,
            extension: t.file.type,
            autoUnzip: false,
            importFromQBv1: false,
            importFromQBv2: false,
          };
          axios.post('api/files/upload', e).catch((l) => {
            console.error(l);
            this.mainStore.updateIsDoingQuickUpload(false);
          });
        }
      }
      if (this.chunkDone >= this.nbrChunk) {
        this.onComplete();
      }
    },
    onComplete(t) {
      if (!this.isComplete) {
        this.isComplete = true;
        if (this.objectType === 'updateZip') this.$emit('fileSelected', true);
        else {
          let n = {
            batch_id: this.batch_uuid,
            importFromQBv1: false,
            importFromQBv2: false,
          };
          axios.post('api/files/endUpload', n).catch((l) => {
            this.mainStore.updateIsDoingQuickUpload(false);
          });
          this.waitingForMediable = true;
          let e = this;
          this.echoListener = Echo.channel('channel-quickUpload.' + this.batch_uuid).listen(
            '\\Quickbrain\\Events\\QuickUploadNotifications',
            function (l) {
              e.postUploadFunction();
              let i = l.notification.error;
              let s = l.notification.success;
              let o = l.notification.duplicate;
              let a = l.notification.total;
              switch (true) {
                case l.notification.error > 0 && !(s.length > 0 || l.notification.duplicate.length > 0):
                  e.showCenterToast(e.trans.get('__JSON__.upload.toast.error.quickUpload'), 'e-toast-danger');
                  break;
                case l.notification.error > 0 && s.length > 0:
                  {
                    e.showCenterToast(
                      e.trans.get('__JSON__.upload.toast.error.quickUploadWithSuccess'),
                      'e-toast-danger',
                    );
                    e.$emit('fileSelected', s.push(...l.notification.duplicate));
                  }
                  break;
                case !(l.notification.error > 0) && s.length > 0 && s.length == l.notification.total:
                  {
                    e.showCenterToast(
                      e.trans.get('__JSON__.upload.toast.success.uploadContent', { number: l.notification.total }),
                      'e-toast-success',
                    );
                    e.$emit('fileSelected', s);
                  }
                  break;
                case !(l.notification.error > 0) &&
                  l.notification.duplicate.length > 0 &&
                  l.notification.duplicate.length + s.length == l.notification.total:
                  {
                    e.showCenterToast(
                      e.trans.get('__JSON__.upload.toast.warning.uploadSuccessWithDuplicate', {
                        number: l.notification.total,
                      }),
                      'e-toast-warning',
                    );
                    s.push(...l.notification.duplicate);
                    e.$emit('fileSelected', s);
                  }
                  break;
                case l.notification.error + s.length != l.notification.total:
                  e.showCenterToast(e.trans.get('__JSON__.upload.toast.error.quickUpload'), 'e-toast-danger');
                  break;
              }
              e.resetFiles();
              e.mainStore.updateIsDoingQuickUpload(false);
            },
          );
        }
      }
    },
  },
  beforeUnmount() {
    if (this.echoListener) {
      this.echoListener.stopListening('\\Quickbrain\\Events\\QuickUploadNotifications');
    }
  },
};
const Q = { style: { height: '100%' } };
const L = ['id'];
const P = ['id'];
const V = { class: 'dropareaModal col-12' };
const R = { class: 'droparea uploader-custom-drop-browse' };
const W = { class: 'btn-xs' };
const X = ['id'];
function H(t, n, e, l, i, s) {
  const o = d('e-progressbar-annotation');
  const a = d('e-progressbar-annotations');
  const p = d('ejs-progressbar');
  const k = d('ejs-uploader');
  c();
  return m('div', Q, [
    r(
      'div',
      {
        style: { height: '100%' },
        id: i.droppableId,
      },
      [
        r('div', { id: i.spinnerZoneUploaderId }, null, 8, P),
        A(
          t.$slots,
          'dropZoneArea',
          {},
          () => [
            y(
              r(
                'div',
                V,
                [
                  r('div', R, [
                    r('div', W, g(t.trans.get('__JSON__.upload.content.dropFile')), 1),
                    r(
                      'div',
                      {
                        class: 'pt-2 pb-2 btn-xs clickableText',
                        onClick: n[0] || (n[0] = (...f) => s.browse && s.browse(...f)),
                      },
                      g(t.trans.get('__JSON__.upload.content.clickToBrowse')),
                      1,
                    ),
                    t.numberFilesMax > 1
                      ? (c(),
                        m(
                          'div',
                          {
                            key: 0,
                            class: 'btn-xs clickableText',
                            onClick: n[1] || (n[1] = (...f) => s.browseFolder && s.browseFolder(...f)),
                          },
                          g(t.trans.get('__JSON__.upload.content.clickToBrowseFolder')),
                          1,
                        ))
                      : h('', true),
                  ]),
                ],
                512,
              ),
              [[F, !i.uploadStarted && !i.waitingForMediable && t.can('upload', 'files')]],
            ),
            y(
              r(
                'div',
                null,
                [
                  u(
                    p,
                    {
                      type: 'Linear',
                      height: '20',
                      width: '100%',
                      trackThickness: '26',
                      progressThickness: '26',
                      value: s.pctDone,
                    },
                    {
                      default: _(() => [
                        u(a, null, {
                          default: _(() => [u(o, { content: s.pctDoneText }, null, 8, ['content'])]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ['value'],
                  ),
                ],
                512,
              ),
              [[F, i.uploadStarted && !i.waitingForMediable && t.can('upload', 'files')]],
            ),
            y(r('div', null, g(t.trans.get('__JSON__.upload.content.waitingForMediable')), 513), [
              [F, i.waitingForMediable && t.can('upload', 'files')],
            ]),
          ],
          true,
        ),
      ],
      8,
      L,
    ),
    y(
      r(
        'div',
        { id: i.uploadZoneId },
        [
          u(
            k,
            {
              ref: 'uploadZone',
              class: 'bg-primary',
              name: 'UploadFiles',
              directoryUpload: i.directory,
              maxFileSize: i.maxSize,
              dropArea: i.dropElement,
              asyncSettings: s.path,
              autoUpload: false,
              actionComplete: s.onComplete,
              chunkSuccess: s.onChunkSuccess,
              chunkUploading: s.onFileUpload,
              uploading: s.onFileUpload,
              selected: s.onSelect,
              success: s.onSuccess,
            },
            null,
            8,
            [
              'directoryUpload',
              'maxFileSize',
              'dropArea',
              'asyncSettings',
              'actionComplete',
              'chunkSuccess',
              'chunkUploading',
              'uploading',
              'selected',
              'success',
            ],
          ),
        ],
        8,
        X,
      ),
      [[F, false]],
    ),
  ]);
}
const K = I(q, [
  ['render', H],
  ['__scopeId', 'data-v-b569dce7'],
]);
const Y = {
  components: {
    ModalDynamicGrid: z,
    Modal_gallery: j,
    zoneUploader: K,
    ModalAddFiles: N,
    headerTemplate: J,
  },
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
    withDocsheets: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      width: '300px',
      animationSettings: { effect: 'None' },
      showGridModal: false,
      showGalleryModal: false,
      showDocsheetModal: false,
      gridChoice: false,
      galleryChoice: false,
      uploadChoice: false,
    };
  },
  watch: {
    typeFile: {
      immediate: true,
      handler(t) {
        switch (t) {
          case 'gallery':
            {
              this.gridChoice = false;
              this.galleryChoice = true;
              this.uploadChoice = false;
              this.$nextTick(() => {
                this.showGalleryModal = true;
              });
            }
            break;
          case 'updateZip':
            {
              this.gridChoice = false;
              this.galleryChoice = false;
              this.uploadChoice = true;
            }
            break;
          case 'images':
          case 'all':
          default:
            {
              this.gridChoice = true;
              this.galleryChoice = true;
              this.uploadChoice = true;
            }
            break;
        }
      },
    },
  },
  mounted() {
    U({ target: document.getElementById('spinnerModalSelectionAddDocumentation') });
  },
  methods: {
    closeGallery(t) {
      this.showGalleryModal = false;
      t ? this.modalClose() : this.typeFile === 'gallery' && this.modalClose();
    },
    openDocsheetModal() {
      this.showDocsheetModal = true;
    },
    openGridModal() {
      this.showGridModal = true;
    },
    openGalleryModal() {
      this.showGalleryModal = true;
    },
    fileSelection(t) {
      this.showGalleryModal = false;
      this.showGridModal = false;
      this.$emit('fileSelected', t);
    },
    docsheetSelection(t) {
      this.showDocsheetModal = false;
      this.$emit('docsheetSelected', t);
      this.modalClose();
    },
    modalClose() {
      this.$emit('close');
    },
  },
};
const ee = { class: 'container' };
const te = {
  key: 0,
  class: 'row',
};
const oe = {
  key: 2,
  class: 'row mt-2',
};
function se(t, n, e, l, i, s) {
  const o = d('header-template');
  const a = d('ejs-button');
  const p = d('zone-uploader');
  const k = d('modal-add-files');
  const f = d('modal_gallery');
  const D = d('modal-dynamic-grid');
  const v = d('ejs-dialog');
  c();
  return m('div', null, [
    u(
      v,
      {
        ref: 'modalSelectionAddDocumentation',
        header: 'headerTemplate',
        content: 'templateContent',
        close: s.modalClose,
        animationSettings: i.animationSettings,
        isModal: true,
        showCloseIcon: true,
        allowDragging: true,
        width: i.width,
      },
      {
        headerTemplate: _(() => [
          u(
            o,
            {
              title: e.withDocsheets
                ? t.trans.get('__JSON__.documentation.selection.header')
                : t.trans.get('__JSON__.documentation.selection.headerFile'),
            },
            null,
            8,
            ['title'],
          ),
        ]),
        templateContent: _(() => [
          r('div', null, [
            r('div', ee, [
              n[2] || (n[2] = r('div', { id: 'spinnerModalSelectionAddDocumentation' }, null, -1)),
              i.gridChoice
                ? (c(),
                  m('div', te, [
                    u(
                      a,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-table',
                        cssClass: 'e-flat',
                        onClick: s.openGridModal,
                      },
                      {
                        default: _(() => [C(g(t.trans.get('__JSON__.documentation.selection.fileFromGrid')), 1)]),
                        _: 1,
                      },
                      8,
                      ['onClick'],
                    ),
                  ]))
                : h('', true),
              i.galleryChoice
                ? (c(),
                  m(
                    'div',
                    {
                      key: 1,
                      class: x(['row', { 'mt-2': i.gridChoice }]),
                    },
                    [
                      u(
                        a,
                        {
                          iconCss: 'e-btn-sb-icon sf-icon-view-small-icons',
                          cssClass: 'e-flat',
                          onClick: s.openGalleryModal,
                        },
                        {
                          default: _(() => [C(g(t.trans.get('__JSON__.documentation.selection.fileFromGallery')), 1)]),
                          _: 1,
                        },
                        8,
                        ['onClick'],
                      ),
                    ],
                    2,
                  ))
                : h('', true),
              e.withDocsheets
                ? (c(),
                  m('div', oe, [
                    u(
                      a,
                      {
                        iconCss: 'e-btn-sb-icon sf-icon-table',
                        cssClass: 'e-flat',
                        onClick: s.openDocsheetModal,
                      },
                      {
                        default: _(() => [C(g(t.trans.get('__JSON__.documentation.selection.docsheetFromGrid')), 1)]),
                        _: 1,
                      },
                      8,
                      ['onClick'],
                    ),
                  ]))
                : h('', true),
              i.uploadChoice
                ? (c(),
                  m(
                    'div',
                    {
                      key: 3,
                      class: x(['row', { 'mt-2': i.gridChoice || i.galleryChoice }]),
                      style: { display: 'block' },
                    },
                    [
                      u(
                        p,
                        {
                          onFileSelected: s.fileSelection,
                          extensionFileSelected: e.extensionFileSelected,
                          objectType: e.objectType,
                          typeFile: e.typeFile,
                          numberFilesMax: e.numberFilesMax,
                          enabled: t.can('upload', 'files'),
                        },
                        null,
                        8,
                        [
                          'onFileSelected',
                          'extensionFileSelected',
                          'objectType',
                          'typeFile',
                          'numberFilesMax',
                          'enabled',
                        ],
                      ),
                    ],
                    2,
                  ))
                : h('', true),
            ]),
          ]),
          i.showGridModal
            ? (c(),
              w(
                k,
                {
                  key: 0,
                  onClose: n[0] || (n[0] = (T) => (i.showGridModal = false)),
                  onFileSelected: s.fileSelection,
                  extensionFileSelected: e.extensionFileSelected,
                  idFilesSelected: e.idFilesSelected,
                  objectType: e.objectType,
                  typeFile: e.typeFile,
                  numberFilesMax: e.numberFilesMax,
                },
                null,
                8,
                [
                  'onFileSelected',
                  'extensionFileSelected',
                  'idFilesSelected',
                  'objectType',
                  'typeFile',
                  'numberFilesMax',
                ],
              ))
            : h('', true),
          i.showGalleryModal
            ? (c(),
              w(
                f,
                {
                  key: 1,
                  onClose: s.closeGallery,
                  onFileSelected: s.fileSelection,
                  extensionFileSelected: e.extensionFileSelected,
                  idFilesSelected: e.idFilesSelected,
                  objectType: e.objectType,
                  typeFile: e.typeFile,
                  numberFilesMax: e.numberFilesMax,
                },
                null,
                8,
                [
                  'onClose',
                  'onFileSelected',
                  'extensionFileSelected',
                  'idFilesSelected',
                  'objectType',
                  'typeFile',
                  'numberFilesMax',
                ],
              ))
            : h('', true),
          i.showDocsheetModal
            ? (c(),
              w(
                D,
                {
                  key: 2,
                  onClose: n[1] || (n[1] = (T) => (i.showDocsheetModal = false)),
                  onSelectData: s.docsheetSelection,
                  gridUrl: 'api/dynamicRequests/docsheets/label/modal',
                  supplementaryParamsUrl: { objectType: e.objectType },
                  header: t.trans.get('__JSON__.docsheet.content.selectDocsheet'),
                  promptWidth: '800px',
                },
                null,
                8,
                ['onSelectData', 'supplementaryParamsUrl', 'header'],
              ))
            : h('', true),
        ]),
        _: 1,
      },
      8,
      ['close', 'animationSettings', 'width'],
    ),
  ]);
}
const ue = I(Y, [['render', se]]);
export { K as Z, ue as m };
