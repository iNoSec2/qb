const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'chunks/DEdfVzPD.js',
      'assets/app-BjImoLrr.js',
      'css/CMUvL9X7.css',
      'css/CQE2eH-I.css',
      'chunks/D_eyCAsX.js',
      'chunks/DF3-5v4V.js',
      'chunks/BKAIn2gq.js',
      'chunks/D6qTVqbk.js',
      'chunks/CKKuZvVl.js',
      'chunks/ZS-VIFna.js',
      'chunks/DrOYtW4t.js',
      'chunks/BzXjulcJ.js',
      'chunks/JzGXi_4H.js',
      'chunks/BCTXnxKj.js',
      'chunks/DvWiUwH6.js',
      'chunks/Nw-Fho2_.js',
      'chunks/BpLTBrfQ.js',
      'chunks/DZOApFs4.js',
      'chunks/CHw12MFN.js',
      'chunks/sKBcFuym.js',
      'chunks/H3zXViHv.js',
      'css/BdVarn6W.css',
      'chunks/CUvLZwvz.js',
      'css/DBcRuDqZ.css',
      'chunks/SUr2wc-1.js',
      'chunks/BWJp0flw.js',
      'css/DzaC9e0n.css',
      'chunks/A0nBLeas.js',
    ]),
) => i.map((i) => d[i]);
import { g as M } from './ZS-VIFna.js';
import {
  _ as b,
  aL as j,
  E as S,
  aM as U,
  c as p,
  b as r,
  f as w,
  g as _,
  a as h,
  r as u,
  n as m,
  aN as R,
  o as d,
  w as f,
  i as v,
  s as C,
  p as P,
  aP as O,
  h as y,
  a3 as N,
  a2 as q,
  g_ as x,
  F as E,
} from '../assets/app-BjImoLrr.js';
import { d as F } from './BCTXnxKj.js';
import B from './H3zXViHv.js';
import G from './CUvLZwvz.js';
import { s as L } from './SUr2wc-1.js';
import { d as I } from './DF3-5v4V.js';
import { v as A } from './A0nBLeas.js';
const J = {
  props: {
    gridRef: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    return { selectedData: [] };
  },
  computed: {
    gridRefComputed() {
      return this.gridRef ? this.gridRef : this.$refs.grid;
    },
  },
};
const $ = {
  mixins: [J],
  components: { dialogAddDocreview: F },
  data() {
    return {
      showModalSelectDocreviews: false,
      showModalCreateDocreview: false,
      projectIdLinked: 'all',
    };
  },
  methods: {
    checkDocreviewForEvent(e, t) {
      if (!e.length) {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-info');
        return;
      }
      if (!this.checkIfEventsDocumentationInSelection(e)) {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectOnlyDocsheetsEvents'), 'e-toast-info');
        return;
      }
      const i = this.checkIfUniqueProjectId(e);
      if (i === 'errorId') {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.notUniqueProject'), 'e-toast-danger');
        this.projectIdLinked = 'all';
        return;
      }
      if (i === 'errorNull') {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.nullProject'), 'e-toast-danger');
        this.projectIdLinked = 'all';
        return;
      }
      switch (((this.selectedData = e), (this.projectIdLinked = i), t)) {
        case 'addDocreviewToSelection':
          this.showModalSelectDocreviews = true;
          break;
      }
    },
    selectedDocreview(e) {
      this.showModalSelectDocreviews = false;
      if (e && e.length && this.selectedData.length) {
        this.gridRefComputed.showSpinner();
        axios
          .post('api/events/docreviews', {
            docreview_ids: e.map((t) => t.id),
            object_ids: this.selectedData.map((t) => t.id),
          })
          .then((t) => {
            this.gridRefComputed.hideSpinner();
            this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.success.update'), 'e-toast-success');
          })
          .catch((t) => {
            this.gridRefComputed.hideSpinner();
            console.error(t);
          });
      }
    },
    checkIfEventsDocumentationInSelection(e) {
      let t = true;
      e.map(function (i, n) {
        if (i.object_api_prefix !== 'docsheets') {
          t = false;
        }
      });
      return t;
    },
    checkIfUniqueProjectId(e) {
      const t = e.map((a) => a.project_ids);
      const i = t.find((a) => a !== null) ?? null;
      return t.every((a) => a === i) ? i || 'errorNull' : 'errorId';
    },
  },
};
const V = {
  components: {
    ModalDynamicGrid: j(
      U(() =>
        R(
          () => import('./DEdfVzPD.js'),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          ]),
        ),
      ),
    ),
  },
  mixins: [$],
  props: {
    isMainGrid: {
      required: false,
      default() {
        return true;
      },
    },
    toolbarItems: {
      required: false,
      default() {
        return [];
      },
    },
    uuid: {
      required: false,
      default() {
        return null;
      },
    },
  },
  methods: {
    callClose() {
      if (this.uuid) {
        S.$emit('closeCentralRightPanel', {
          type: 'workPanel',
          uuid: this.uuid,
        });
      }
    },
    refreshDynamicGrid() {
      this.$emit('refreshDynamicGrid');
    },
    onSelect(e) {
      let t = this.gridRefComputed.getSelectedRecords();
      switch (e.item.id) {
        case 'addDocreviewToSelection':
          this.checkDocreviewForEvent(t, e.item.id);
          break;
      }
    },
  },
};
function z(e, t, i, n, a, o) {
  const c = u('ejs-splitbutton');
  const l = u('modal-dynamic-grid');
  const D = u('dialog-add-docreview');
  d();
  return p('div', null, [
    r(
      'nav',
      {
        class: m([
          'navbar navbar-expand-lg navbar-light bg-light ps-0 navBarGrid',
          i.isMainGrid ? 'mt-3 mb-3' : 'mt-1 mb-2',
        ]),
      },
      [
        h(
          c,
          {
            items: i.toolbarItems,
            select: o.onSelect,
            class: 'sf-icon-menu-interface-wf mr',
            disabled: i.toolbarItems.length === 0,
          },
          null,
          8,
          ['items', 'select', 'disabled'],
        ),
        t[4] ||
          (t[4] = r(
            'div',
            { class: 'collapse navbar-collapse' },
            [r('ul', { class: 'navbar-nav me-auto mt-1 mt-lg-0' })],
            -1,
          )),
        r('span', {
          onClick: t[0] || (t[0] = (...g) => o.refreshDynamicGrid && o.refreshDynamicGrid(...g)),
          class: 'sf-icon-sync---02 ms-2',
          style: { cursor: 'pointer' },
        }),
        i.uuid
          ? (d(),
            p('span', {
              key: 0,
              onClick: t[1] || (t[1] = (...g) => o.callClose && o.callClose(...g)),
              class: 'sf-icon-cross-close ms-2',
              style: { cursor: 'pointer' },
            }))
          : _('', true),
      ],
      2,
    ),
    e.showModalSelectDocreviews
      ? (d(),
        w(
          l,
          {
            key: 0,
            onClose: t[2] || (t[2] = (g) => (e.showModalSelectDocreviews = false)),
            onSelectData: e.selectedDocreview,
            gridUrl: 'api/dynamicRequests/docreviews/label/modal',
            supplementaryParamsUrl: { project_id: e.projectIdLinked },
            numberMax: 1,
            header: e.trans.get('__JSON__.docreview.content.select'),
            promptWidth: '800px',
          },
          null,
          8,
          ['onSelectData', 'supplementaryParamsUrl', 'header'],
        ))
      : _('', true),
    e.showModalCreateDocreview
      ? (d(),
        w(
          D,
          {
            key: 1,
            onClose: t[3] || (t[3] = (g) => (e.showModalCreateDocreview = false)),
            onSelectedDocreview: e.selectedDocreview,
            fromEvents: true,
            projectIdLinked: e.projectIdLinked,
            openRightPanelAfter: false,
          },
          null,
          8,
          ['onSelectedDocreview', 'projectIdLinked'],
        ))
      : _('', true),
  ]);
}
const H = b(V, [['render', z]]);
const K = {
  mixins: [I, A],
  props: {
    isEditable: { required: true },
    objectPermission: { required: true },
    code: { required: false },
    uuid: { required: true },
    data: { required: true },
  },
  computed: {
    canBeUnlinked() {
      return this.data.documentationIsUnlinkable !== void 0 ? this.data.documentationIsUnlinkable : true;
    },
    canBeViewed() {
      return (
        (this.data.api_prefix === 'docsheets' &&
          this.data.can_be_viewed &&
          !(!this.can('show', 'bim') && this.data.type_code === 'BIM_Model')) ||
        (this.data.api_prefix === 'files' && this.fileIsViewable(this.data))
      );
    },
    canBeDownloaded() {
      return (
        (this.data.api_prefix === 'docsheets' && this.data.can_be_downloaded) ||
        (this.data.api_prefix === 'files' && this.canDownloadFile(this.data.extension))
      );
    },
  },
  methods: {
    download() {
      if (this.canBeDownloaded) {
        let e = 'documentation.zip';
        if (this.data.api_prefix === 'files') {
          e = this.data.designation + '.' + this.data.extension.toLowerCase();
        }
        this.downloadObject(
          'api/documentation/download',
          e,
          this.trans.get('__JSON__.notification.content.downloadDocumentation', { id: this.data.id }),
          {
            zip: false,
            data: [this.data],
          },
        );
      }
    },
    callUnlink() {
      if (this.canBeUnlinked && this.isEditable && this.can('update', this.objectPermission)) {
        this.$emit('unlinkDocumentation', {
          data: [this.data],
          uuid: this.uuid,
        });
      }
    },
    goToDocsheet() {
      this.canBeViewed
        ? axios
            .get('api/interactive_file/docsheet/' + this.data.id + '/first_interactive_file')
            .then((e) => {
              e.data.error
                ? this.showCenterToast(e.data.error, 'e-toast-danger')
                : this.fileGoToViewer(
                    {
                      id: e.data.id,
                      extension: e.data.extension,
                      page: this.data.page,
                    },
                    true,
                    this.uuid,
                    this.code,
                  );
            })
            .catch((e) => {
              this.showCenterToast(this.trans.get('__JSON__.docsheet.toast.error.interactiveFile'), 'e-toast-danger');
            })
        : this.showCenterToast(
            this.trans.get('__JSON__.docsheet.toast.error.unviewable'),
            'e-toast-info',
            this.trans.get('__JSON__.docsheet.toast.error.viewCondition'),
          );
    },
    goToViewer() {
      if (this.canBeViewed)
        switch (this.data.api_prefix) {
          case 'files':
            this.fileGoToViewer(
              {
                id: this.data.id,
                extension: this.data.extension,
              },
              false,
              this.uuid,
              this.code,
            );
            break;
          case 'docsheets':
            this.goToDocsheet();
            break;
        }
    },
  },
};
const W = { class: 'gridActions' };
const Z = { class: 'd-flex' };
const Q = {
  class: 'me-2',
  style: { 'margin-top': '1px' },
};
function X(e, t, i, n, a, o) {
  const c = u('ejs-tooltip');
  d();
  return p('div', W, [
    r('div', Z, [
      r(
        'div',
        {
          class: m(['me-2', o.canBeDownloaded ? '' : 'disabledIcon']),
          onClick: t[0] || (t[0] = (...l) => o.download && o.download(...l)),
          style: { cursor: 'pointer' },
        },
        [
          h(
            c,
            {
              content: e.trans.get('__JSON__.model.action.download'),
              position: 'TopCenter',
              animation: e.default_SF_Props.animationTooltip,
            },
            {
              default: f(() => [
                r(
                  'span',
                  {
                    class: m(['sf-icon-document-download iconeGrid', e.can('download files') ? '' : 'disabledIcon']),
                  },
                  null,
                  2,
                ),
              ]),
              _: 1,
            },
            8,
            ['content', 'animation'],
          ),
        ],
        2,
      ),
      h(
        c,
        {
          content: e.trans.get('__JSON__.model.action.unlink'),
          position: 'TopCenter',
          animation: e.default_SF_Props.animationTooltip,
        },
        {
          default: f(() => [
            r(
              'span',
              {
                class: m([
                  'sf-icon-unlink_01 iconeGrid me-2',
                  this.canBeUnlinked && i.isEditable && e.can('update', i.objectPermission) ? '' : 'e-disabled',
                ]),
                onClick: t[1] || (t[1] = (...l) => o.callUnlink && o.callUnlink(...l)),
                style: { cursor: 'pointer' },
              },
              null,
              2,
            ),
          ]),
          _: 1,
        },
        8,
        ['content', 'animation'],
      ),
      r('div', Q, [
        h(
          c,
          {
            content: e.trans.get('__JSON__.model.action.goToViewer'),
            position: 'TopCenter',
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: f(() => [
              r(
                'span',
                {
                  class: m(['sf-icon-eye---05 iconeGrid', o.canBeViewed ? '' : 'disabledIcon']),
                  onClick: t[2] || (t[2] = (...l) => o.goToViewer && o.goToViewer(...l)),
                  style: { cursor: 'pointer' },
                },
                null,
                2,
              ),
            ]),
            _: 1,
          },
          8,
          ['content', 'animation'],
        ),
      ]),
    ]),
  ]);
}
const Y = b(K, [['render', X]]);
const ee = {
  props: {
    objectPermission: { required: true },
    isEditable: { required: true },
    uuid: { required: true },
  },
  methods: {
    callMassUnlink() {
      if (this.can('update', this.objectPermission) && this.isEditable) {
        this.$emit('massUnlinkDocumentation', { uuid: this.uuid });
      }
    },
    callMassDownloadUrl() {
      this.$emit('downloadMassDocumentation', { uuid: this.uuid });
    },
  },
};
const te = { class: 'd-flex mt-2' };
const ie = { class: 'me-2' };
function ne(e, t, i, n, a, o) {
  const c = u('ejs-tooltip');
  d();
  return p('div', te, [
    h(
      c,
      {
        class: 'me-2',
        content: e.trans.get('__JSON__.model.action.downloadZip'),
        animation: e.default_SF_Props.animationTooltip,
      },
      {
        default: f(() => [
          r(
            'span',
            {
              class: m(['sf-icon-document-download iconeGrid', e.can('download files') ? '' : 'disabledIcon']),
              onClick: t[0] || (t[0] = (...l) => o.callMassDownloadUrl && o.callMassDownloadUrl(...l)),
              style: { cursor: 'pointer' },
            },
            null,
            2,
          ),
        ]),
        _: 1,
      },
      8,
      ['content', 'animation'],
    ),
    r('div', ie, [
      h(
        c,
        {
          class: 'me-2',
          content: e.trans.get('__JSON__.model.action.unlink'),
          animation: e.default_SF_Props.animationTooltip,
        },
        {
          default: f(() => [
            r(
              'span',
              {
                class: m([
                  'sf-icon-unlink_01 iconeGrid',
                  e.can('update', i.objectPermission) && i.isEditable ? '' : 'e-disabled',
                ]),
                onClick: t[1] || (t[1] = (...l) => o.callMassUnlink && o.callMassUnlink(...l)),
                style: { cursor: 'pointer' },
              },
              null,
              2,
            ),
          ]),
          _: 1,
        },
        8,
        ['content', 'animation'],
      ),
    ]),
  ]);
}
const se = b(ee, [['render', ne]]);
const oe = {
  mixins: [I],
  data() {
    return {
      runningUnlink: 0,
      spinnerId: 'spinnerDocumentation' + this.uuid,
    };
  },
  methods: {
    unlink(e) {
      if (e.uuid === this.uuid) {
        this.runningUnlink = 0;
        let t = e.data.filter((n) => n.api_prefix === 'files').map((n) => n.id);
        let i = e.data.filter((n) => n.api_prefix === 'docsheets').map((n) => n.id);
        if (t.length) {
          C(document.getElementById(this.spinnerId));
          this.runningUnlink++;
          axios
            .post('api/' + this.modelApi + '/' + this.modelId + '/unlink', { fileIds: t })
            .then((n) => {
              this.endUnlink();
            })
            .catch((n) => {
              this.endUnlink();
              this.showCenterToast(this.trans.get('__JSON__.documentation.toast.error.unlink'), 'e-toast-danger');
            });
        }
        if (i.length) {
          C(document.getElementById(this.spinnerId));
          this.runningUnlink++;
          axios
            .post('api/' + this.modelApi + '/' + this.modelId + '/unlinkDocsheets', { docsheetIds: i })
            .then((n) => {
              this.endUnlink();
            })
            .catch((n) => {
              this.endUnlink();
              this.showCenterToast(this.trans.get('__JSON__.documentation.toast.error.unlink'), 'e-toast-danger');
            });
        }
      }
    },
    endUnlink() {
      if (this.runningUnlink > 0) {
        this.runningUnlink--;
        if (this.runningUnlink === 0) {
          v(document.getElementById(this.spinnerId));
          this.getData();
          S.$emit('reloadRightPanel', {
            refObject: this.modelId,
            typeObject: this.modelApi,
          });
        }
      }
    },
    downloadMassDocumentation(e) {
      if (e.uuid == this.uuid) {
        let t = this.$refs.grid.getSelectedRecords();
        t.length
          ? t.some(
              (i) =>
                (i.api_prefix === 'docsheets' && !i.can_be_downloaded) ||
                (i.api_prefix === 'files' && !this.canDownloadFile(i.extension)),
            )
            ? this.showCenterToast(
                this.trans.get('__JSON__.documentation.toast.error.downloadDocumentation'),
                'e-toast-danger',
              )
            : this.downloadObject(
                'api/documentation/download',
                'documentation.zip',
                this.trans.get('__JSON__.notification.content.downloadDocumentation'),
                {
                  zip: true,
                  data: t,
                },
              )
          : this.showCenterToast(
              this.trans.get('__JSON__.documentation.toast.info.selectDocumentation'),
              'e-toast-info',
            );
      }
    },
    massUnlink(e) {
      if (e.uuid == this.uuid) {
        let t = this.$refs.grid.getSelectedRecords();
        if (t.length) {
          this.unlink({
            data: t,
            uuid: e.uuid,
          });
        }
      }
    },
  },
};
const ae = {
  mixins: [M, oe],
  components: {
    DynamicGridtoolbar: H,
    agentsTemplate: B,
    polymorphismeColumn: G,
    simpleImage: L,
    documentationActions: Y,
    documentationHeaderActions: se,
  },
  props: {
    dynamicRequestId: { required: false },
    gridUrl: { required: false },
    supplementaryParamsUrl: {
      required: false,
      default() {
        return {};
      },
    },
    gridDatas: { required: false },
    refresh: { required: false },
    uuid: { required: false },
    showToolbar: {
      required: false,
      default() {
        return true;
      },
    },
    numberMaxSelecting: {
      required: false,
      default() {
        return null;
      },
    },
    fromModal: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      isLoading: false,
      hasCheckbox: false,
      listColumns: [],
      listTemplates: [],
      toolbarItems: [],
      dataSource: void 0,
    };
  },
  mounted() {
    P({ target: this.$refs.spinner });
    this.loadDynamicData();
    this.manageListeners(true);
  },
  beforeUnmount() {
    this.manageListeners(false);
  },
  watch: {
    dynamicRequestId() {
      this.loadDynamicData();
    },
    gridUrl() {
      this.loadDynamicData();
    },
    gridDatas() {
      this.loadDynamicData();
    },
    refresh() {
      this.loadDynamicData();
    },
  },
  methods: {
    refreshDynamicGrid() {
      this.loadDynamicData();
    },
    dynamicBindingComponent(e, t) {
      let i = e;
      switch (t) {
        case 'documentationActions':
          i.uuid = this.uuid;
          break;
        case 'documentationHeaderActions':
          i.uuid = this.uuid;
          break;
      }
      return i;
    },
    dynamicEventComponent(e, t) {
      let i = {};
      e = e ?? [];
      e.forEach((n) => {
        if (typeof this[n.functionName] == 'function') {
          i[n.eventName] = this[n.functionName];
        }
      });
      return i;
    },
    loadDynamicData() {
      if (!this.isLoading) {
        this.startLoading();
        this.hasCheckbox = false;
        this.dynamicRequestId
          ? this.loadFromDynamicRequest(this.dynamicRequestId)
          : this.gridUrl
            ? this.loadFromUrl(this.gridUrl)
            : this.gridDatas
              ? this.loadFromObject(this.gridDatas)
              : this.stopLoading(true);
      }
    },
    loadFromDynamicRequest(e) {
      if (e) {
        this.loadFromUrl('api/dynamicRequests/' + e);
      }
    },
    loadFromUrl(e) {
      if (e) {
        axios
          .get(e, { params: this.supplementaryParamsUrl ?? {} })
          .then((t) => {
            this.loadFromObject(t.data);
          })
          .catch((t) => {
            console.error(t);
            this.stopLoading(true);
          });
      }
    },
    loadFromObject(e) {
      if (e) {
        let t = e.grid.columns ?? [];
        this.hasCheckbox = !!t.find((i) => i.type === 'checkbox');
        this.listColumns = t;
        this.toolbarItems = e.grid.toolbar ?? [];
        this.listTemplates = e.grid.templates ?? [];
        this.$nextTick(() => {
          this.$refs.grid.autoFitColumns();
          setTimeout(() => {
            this.dataSource = e.dataSource ?? [];
            this.$nextTick(() => {
              this.stopLoading(false);
            });
          }, 50);
        });
      } else this.stopLoading(true);
    },
    startLoading() {
      this.isLoading = true;
      C(this.$refs.spinner);
      this.$refs.grid.showMaskRow();
    },
    stopLoading(e = true) {
      this.isLoading = false;
      v(this.$refs.spinner);
      if (e) {
        this.listColumns = [];
        this.listTemplates = [];
        this.toolbarItems = [];
        this.$nextTick(() => {
          this.dataSource = void 0;
        });
        this.$refs.grid.removeMaskRow();
      }
    },
    recordDoubleClickOverride(e) {
      if (e.rowData && e.rowData.api_prefix && e.rowData.id && !e.rowData.deleted_at) {
        S.$emit('showPanel', {
          panelDroite: true,
          refObjet: e.rowData.id,
          typeObject: e.rowData.api_prefix,
        });
      }
    },
    updateGridData(e) {
      let t = this.listColumns.find((i) => i.isPrimaryKey);
      if (t) {
        let i = t.field;
        if (e.api_prefix && e[t.field]) {
          let n = this.dataSource.findIndex((a) => a[t.field] === e.id && a.api_prefix == e.api_prefix);
          if (n != -1) {
            this.dataSource.splice(n, 1, e);
            this.dataSource = [...this.dataSource];
          }
        }
      }
    },
    manageListeners(e) {
      let t = '$off';
      if (e) {
        t = '$on';
      }
      [
        {
          name: 'updateDataGrid',
          function: this.updateGridData,
        },
      ].forEach((n) => {
        S[t](n.name, n.function);
      });
    },
    rowSelectingCheck(e) {
      this.rowSelecting(e);
      if (
        this.numberMaxSelecting > 0 &&
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length + 1 > this.numberMaxSelecting
      ) {
        this.numberMaxSelecting == 1 &&
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length !== this.dataSource.length
          ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
          : ((e.cancel = true),
            this.showCenterToast(
              this.trans.get('__JSON__.dynamicColumn.toast.error.maxSelection', { number: this.numberMaxSelecting }),
              'e-toast-danger',
            ));
      }
    },
    callGridFunction(e, t = void 0) {
      return t === void 0 ? this.$refs.grid[e]() : this.$refs.grid[e](...t);
    },
  },
};
const re = { class: 'row' };
const le = { class: 'col-md-12' };
const de = { ref: 'spinner' };
const ce = { class: 'wrapperGrid' };
function ue(e, t, i, n, a, o) {
  const c = u('dynamic-gridtoolbar');
  const l = u('e-column');
  const D = u('e-columns');
  const g = u('ejs-grid');
  d();
  return p('div', re, [
    r('div', le, [
      r('div', de, null, 512),
      i.showToolbar
        ? (d(),
          w(
            c,
            {
              key: 0,
              gridRef: e.$refs.grid,
              toolbarItems: a.toolbarItems,
              isMainGrid: false,
              uuid: i.uuid,
              onRefreshDynamicGrid: o.refreshDynamicGrid,
            },
            null,
            8,
            ['gridRef', 'toolbarItems', 'uuid', 'onRefreshDynamicGrid'],
          ))
        : _('', true),
      r(
        'div',
        { class: m(i.fromModal ? 'containerDynamicModal' : 'containerDynamicGridCentralPanel') },
        [
          r('div', ce, [
            h(
              g,
              {
                dataSource: a.dataSource,
                enablePersistence: false,
                loadingIndicator: { indicatorType: 'Shimmer' },
                ref: e.gridSettings.ref,
                actionBegin: e.actionBegin,
                allowExcelExport: e.gridSettings.allowExcelExport,
                allowFiltering: e.gridSettings.allowFiltering,
                allowPaging: e.gridSettings.allowPaging,
                allowReordering: e.gridSettings.allowReordering,
                allowResizing: e.gridSettings.allowResizing,
                allowRowDragAndDrop: e.gridSettings.allowRowDragAndDrop,
                allowSelection: a.hasCheckbox,
                allowSorting: e.gridSettings.allowSorting,
                clipMode: e.gridSettings.clipMode,
                enableHover: e.gridSettings.enableHover,
                filterSettings: e.gridSettings.filterSettings,
                height: e.gridSettings.height,
                pageSettings: e.gridSettings.pageSettings,
                recordDoubleClick: o.recordDoubleClickOverride,
                rowHeight: e.gridSettings.rowHeight,
                rowDropSettings: e.gridSettings.rowDropSettings,
                rowSelecting: o.rowSelectingCheck,
                rowSelected: e.rowSelected,
                rowDeselected: e.rowDeselected,
                searchSettings: e.gridSettings.searchSettings,
                selectionSettings: a.hasCheckbox ? e.gridSettings.selectionSettings : void 0,
                showColumnChooser: e.gridSettings.showColumnChooser,
                toolbar: e.gridSettings.toolbar,
                toolbarClick: e.toolbarClick,
              },
              O(
                {
                  default: f(() => [
                    h(D, null, {
                      default: f(() => [
                        h(l, {
                          field: 'placeholder',
                          visible: false,
                          showInColumnChooser: false,
                        }),
                        (d(true),
                        p(
                          E,
                          null,
                          y(
                            a.listColumns,
                            (s, k) => (
                              d(),
                              w(
                                l,
                                {
                                  key: k,
                                  field: s.field,
                                  type: s.type,
                                  headerText: s.headerText ?? '',
                                  template: s.template ?? void 0,
                                  headerTemplate: s.headerTemplate ?? void 0,
                                  displayAsCheckBox: s.displayAsCheckBox ?? false,
                                  filter: s.filter ?? void 0,
                                  format: s.format ?? void 0,
                                  sortComparer: s.type === 'string' ? e.sortComparerNaturalOrder : void 0,
                                  isPrimaryKey: s.isPrimaryKey ?? false,
                                  lockColumn: s.lockColumn ?? false,
                                  showInColumnChooser: s.showInColumnChooser ?? true,
                                  textAlign: s.textAlign ?? 'Left',
                                  visible: s.visible ?? true,
                                  width: s.width ?? void 0,
                                  clipMode: s.clipMode ?? void 0,
                                  allowEditing: s.allowEditing,
                                  allowFiltering: s.allowFiltering,
                                  allowResizing: s.allowResizing,
                                  allowSorting: s.allowSorting,
                                  autoFit: true,
                                },
                                null,
                                8,
                                [
                                  'field',
                                  'type',
                                  'headerText',
                                  'template',
                                  'headerTemplate',
                                  'displayAsCheckBox',
                                  'filter',
                                  'format',
                                  'sortComparer',
                                  'isPrimaryKey',
                                  'lockColumn',
                                  'showInColumnChooser',
                                  'textAlign',
                                  'visible',
                                  'width',
                                  'clipMode',
                                  'allowEditing',
                                  'allowFiltering',
                                  'allowResizing',
                                  'allowSorting',
                                ],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 2,
                },
                [
                  y(a.listTemplates, (s, k) => ({
                    name: s.slotName,
                    fn: f(({ data: T }) => [
                      (d(),
                      w(
                        N(s.componentName),
                        q(
                          { key: k },
                          o.dynamicBindingComponent(s.propsData, s.componentName),
                          x(o.dynamicEventComponent(s.eventsData, s.componentName)),
                          { data: T },
                        ),
                        null,
                        16,
                        ['data'],
                      )),
                    ]),
                  })),
                ],
              ),
              1032,
              [
                'dataSource',
                'actionBegin',
                'allowExcelExport',
                'allowFiltering',
                'allowPaging',
                'allowReordering',
                'allowResizing',
                'allowRowDragAndDrop',
                'allowSelection',
                'allowSorting',
                'clipMode',
                'enableHover',
                'filterSettings',
                'height',
                'pageSettings',
                'recordDoubleClick',
                'rowHeight',
                'rowDropSettings',
                'rowSelecting',
                'rowSelected',
                'rowDeselected',
                'searchSettings',
                'selectionSettings',
                'showColumnChooser',
                'toolbar',
                'toolbarClick',
              ],
            ),
          ]),
        ],
        2,
      ),
    ]),
  ]);
}
const be = b(ae, [
  ['render', ue],
  ['__scopeId', 'data-v-f0fe30a3'],
]);
export { be as D, Y as a, oe as d, $ as e, se as h };
