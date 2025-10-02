import {
  _ as p,
  k as S,
  E as n,
  s as w,
  i as f,
  D as u,
  c as g,
  g as c,
  f as b,
  w as h,
  a as k,
  r as C,
  o as r,
  b as m,
  n as _,
} from '../assets/app-BjImoLrr.js';
import { d as O } from './DF3-5v4V.js';
const D = {
  mixins: [O, S],
  props: {
    objetType: { required: true },
    mode: { required: true },
  },
  data() {
    return {
      modeHeader: this.mode,
      objectPermission: this.objetType,
      tabRowSelect: '',
      tabId: [],
      dialogElement: '',
      currentUser: JSON.parse(sessionStorage.getItem('user')),
      disconnectAfterDelete: false,
      forceDelete: false,
    };
  },
  methods: {
    massTrashDelete() {
      if (this.can('delete', this.objectPermission)) {
        if (!this.tabRowSelect.length) {
          this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-info');
        }
        this.dialogElement = u.confirm({
          title: this.trans.get('__JSON__.main.content.confirmation'),
          content: this.trans.get('__JSON__.main.grid.content.massForceDelete', { number: this.tabRowSelect.length }),
          okButton: {
            text: this.trans.get('__JSON__.main.modal.button.ok'),
            click: this.confirmedMassTrashDelete,
            cssClass: 'e-info',
          },
          cancelButton: {
            text: this.trans.get('__JSON__.main.modal.button.cancel'),
            click: this.cancelClick,
          },
          showCloseIcon: true,
          closeOnEscape: true,
          animationSettings: { effect: 'Zoom' },
        });
      }
    },
    confirmedMassTrashDelete() {
      this.dialogElement.hide();
      this.objectPermission == 'docsheets'
        ? this.$emit('massTrashDelete')
        : this.$emit('massDeleted', {
            type: this.objectPermission,
            force_delete: true,
          });
    },
    downloadUrl() {
      this.tabRowSelect.length
        ? this.tabRowSelect.some((e) => !this.canDownloadFile(e.extension))
          ? this.showCenterToast(this.trans.get('__JSON__.file.toast.error.downloadFile'), 'e-toast-danger')
          : this.downloadObjectWithJob(
              'api/files/downloadJob',
              'download.zip',
              this.trans.get('__JSON__.notification.content.downloadFiles'),
              {
                ids: this.tabRowSelect.map((e) => e.id),
                type: 'files',
                zipDocumentation: true,
              },
            )
        : this.showCenterToast(this.trans.get('__JSON__.file.toast.info.selectFiles'), 'e-toast-danger');
    },
    downloadDocsheet() {
      this.tabRowSelect.length
        ? this.tabRowSelect.some((e) => !e.can_be_downloaded)
          ? this.showCenterToast(this.trans.get('__JSON__.docsheet.toast.error.downloadDocsheet'), 'e-toast-danger')
          : this.downloadObjectWithJob(
              'api/docsheets/downloadJob',
              'docsheets.zip',
              this.trans.get('__JSON__.notification.content.downloadDocsheets'),
              {
                ids: this.tabRowSelect.map((e) => e.id),
                type: 'docsheets',
                zipDocumentation: true,
              },
            )
        : this.showCenterToast(this.trans.get('__JSON__.docsheet.toast.info.selectDocsheet'), 'e-toast-info');
    },
    dialogBtnClick: function (e) {
      this.action = e;
      let t = true;
      if (
        (e == 'delete' && !this.can('delete', this.objectPermission)) ||
        (e == 'restore' && !this.can('restore', this.objectPermission))
      ) {
        t = false;
      }
      if (t)
        if (!this.tabRowSelect)
          this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.selectRow'), 'e-toast-info');
        else {
          let o = this.tabRowSelect.filter(
            (s) =>
              (typeof s.deletable < 'u' && s.deletable === 0) ||
              (s.has_use_cases != 'undefined' && s.has_use_cases === 1),
          );
          if (this.objetType === 'stocks') {
            o.concat(this.tabRowSelect.filter((s) => s.assets_count === 0));
          }
          if (o.length > 0)
            this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.info.nodeletable'), 'e-toast-danger');
          else {
            let s =
              this.action === 'delete'
                ? this.trans.get('__JSON__.main.grid.content.delete', { number: this.tabRowSelect.length })
                : this.trans.get('__JSON__.main.grid.content.restore', { number: this.tabRowSelect.length });
            this.dialogElement = u.confirm({
              title: this.trans.get('__JSON__.main.content.confirmation'),
              content: s,
              okButton: {
                text: this.trans.get('__JSON__.main.modal.button.ok'),
                click: this.okClick,
                cssClass: 'e-info',
              },
              cancelButton: {
                text: this.trans.get('__JSON__.main.modal.button.cancel'),
                click: this.cancelClick,
              },
              showCloseIcon: true,
              closeOnEscape: true,
              animationSettings: { effect: 'Zoom' },
            });
          }
        }
    },
    okClick: function () {
      switch ((this.dialogElement.hide(), this.action)) {
        case 'trashDelete':
          if (this.can('delete', this.objectPermission)) {
            this.forceDelete = true;
            this.actionDeleteMasse();
          }
          break;
        case 'delete':
          if (this.can('delete', this.objectPermission)) {
            this.forceDelete = false;
            this.actionDeleteMasse();
          }
          break;
        case 'restore':
          if (this.can('restore', this.objectPermission)) {
            this.actionRestoreMasse();
          }
          break;
      }
    },
    cancelClick: function () {
      this.dialogElement.hide();
    },
    actionDeleteMasse() {
      if (this.objetType === 'pois') {
        this.confirmedMassTrashDelete();
        return;
      }
      this.tabId = [];
      let e = false;
      let t = false;
      if (this.tabRowSelect.length)
        for (let o in this.tabRowSelect) {
          let s = this.tabRowSelect[o];
          if (this.tabRowSelect[o].deleted_at == null)
            switch (this.objetType) {
              case 'docsheets':
                if (this.tabRowSelect[o].is_deletable) {
                  if (this.tabRowSelect[o].attachements_count) {
                    t = true;
                  }
                  this.tabId.push(this.tabRowSelect[o].id);
                } else {
                  this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.deleteRow'), 'e-toast-danger');
                  return;
                }
                break;
              case 'users':
                if (this.tabRowSelect[o].has_use_cases) {
                  this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.deleteRow'), 'e-toast-danger');
                  return;
                } else {
                  this.tabId.push(this.tabRowSelect[o].id);
                  if (this.tabRowSelect[o].id === this.currentUser.id) {
                    e = true;
                    this.disconnectAfterDelete = true;
                  }
                }
                break;
              case 'files':
                if (this.tabRowSelect[o].has_use_cases) {
                  this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.deleteRow'), 'e-toast-danger');
                  return;
                } else this.tabId.push(this.tabRowSelect[o].id);
                break;
              default:
                this.tabId.push(this.tabRowSelect[o].id);
                break;
            }
        }
      switch (true) {
        case e:
          this.dialogElement = u.confirm({
            title: this.trans.get('__JSON__.main.modal.content.confirmationDelete'),
            content: this.trans.get('__JSON__.user.content.currentUserDelete'),
            okButton: {
              text: this.trans.get('__JSON__.main.modal.button.yes'),
              click: this.deleteMasse,
              cssClass: 'e-info',
            },
            cancelButton: {
              text: this.trans.get('__JSON__.main.modal.button.no'),
              click: this.cancelClick,
            },
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' },
          });
          break;
        case t:
          this.dialogElement = u.confirm({
            title: this.trans.get('__JSON__.main.modal.content.confirmationDelete'),
            content: this.trans.get('__JSON__.docsheet.content.confirmationMassDeleteWithFiles'),
            okButton: {
              text: this.trans.get('__JSON__.main.modal.button.yes'),
              click: this.deleteMasse,
              cssClass: 'e-info',
            },
            cancelButton: {
              text: this.trans.get('__JSON__.main.modal.button.no'),
              click: this.cancelClick,
            },
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' },
          });
          break;
        default:
          {
            this.disconnectAfterDelete = false;
            this.deleteMasse();
          }
          break;
      }
    },
    deleteMasse() {
      if (!this.tabId.length) {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.unvalidRowDelete'), 'e-toast-danger');
        return;
      }
      w(document.getElementById('spinnerFiles'));
      axios({
        method: 'delete',
        url: 'api/' + this.objetType + '/mass_delete',
        data: { ids: this.tabId },
      })
        .then((e) => {
          f(document.getElementById('spinnerFiles'));
          if (e.status == 204 || e.status == 200) {
            let t = [];
            if (e.status == 200) {
              if (this.objetType === 'projects') {
                n.$emit('refreshTree');
              }
              e.data.deletedModels.forEach((o) => {
                t.push({
                  id: o.id,
                  date: o.deleted_at,
                  typeObject: this.objetType,
                });
              });
              if (e.data.notDeletedModels.length) {
                let o = '';
                for (let s = 0; s < e.data.notDeletedModels.length; s++) {
                  o += e.data.notDeletedModels[s].id;
                  if (s != e.data.notDeletedModels.length - 1) {
                    o += ', ';
                  }
                }
                this.showCenterToast(
                  this.trans.get('__JSON__.main.grid.toast.error.massDeleteUseCases', { ids: o }),
                  'e-toast-danger',
                  '',
                  20000,
                );
              }
              if (e.data.idsWithoutModel.length) {
                e.data.idsWithoutModel.forEach((o) => {
                  t.push({
                    id: o,
                    date: true,
                    typeObject: this.objetType,
                  });
                });
              }
            } else
              this.tabId.forEach((o) => {
                t.push({
                  id: o,
                  date: true,
                  typeObject: this.objetType,
                });
              });
            n.$emit('changeDeleted_at_masse', t);
            n.$emit('rowDeselected');
            this.dialogElement.hide();
            if (this.disconnectAfterDelete) {
              this.cleanSessionStorage();
              window.location.assign(this.mainStore.mixConfig.MIX_APP_URL);
            }
          }
        })
        .catch((e) => {
          console.error(e);
          f(document.getElementById('spinnerFiles'));
        });
    },
    actionRestoreMasse() {
      this.tabId = [];
      if (this.tabRowSelect.length)
        for (let e in this.tabRowSelect) {
          let t = this.tabRowSelect[e];
          if (this.tabRowSelect[e].deleted_at != null) this.tabId.push(this.tabRowSelect[e].id);
          else {
            this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.undeletedRow'), 'e-toast-danger');
            return;
          }
        }
      if (!this.tabId.length) {
        this.showCenterToast(this.trans.get('__JSON__.main.grid.toast.error.unvalidRowRestore'), 'e-toast-danger');
        return;
      }
      w(document.getElementById('spinnerFiles'));
      axios
        .put('api/' + this.objetType + '/mass_restore', { ids: this.tabId })
        .then((e) => {
          f(document.getElementById('spinnerFiles'));
          if (e.status == 200 || e.status == 204) {
            let t = [];
            if (this.object === 'projects') {
              n.$emit('refreshTree');
            }
            this.tabId.forEach((o) => {
              t.push({
                id: o,
                date: null,
                typeObject: this.objetType,
              });
            });
            n.$emit('changeDeleted_at_masse', t);
            n.$emit('rowDeselected');
            this.dialogElement.hide();
          }
        })
        .catch((e) => {
          f(document.getElementById('spinnerFiles'));
        });
    },
    getRowChecked(e) {
      this.tabRowSelect = e;
    },
    modeEventBus(e) {
      this.modeHeader = e;
    },
  },
  mounted() {
    n.$on('getRowChecked', this.getRowChecked);
    n.$on('mode', this.modeEventBus);
  },
  beforeUnmount() {
    n.$off('getRowChecked', this.getRowChecked);
    n.$off('mode', this.modeEventBus);
  },
};
const T = {
  key: 0,
  class: 'd-flex',
};
const j = {
  key: 1,
  class: 'd-flex',
};
function y(e, t, o, s, i, a) {
  const d = C('ejs-tooltip');
  r();
  return g('div', null, [
    i.modeHeader == 'default'
      ? (r(),
        g('div', T, [
          o.objetType != 'valueList'
            ? (r(),
              b(
                d,
                {
                  key: 0,
                  class: 'me-2 mt-2',
                  content: e.trans.get('__JSON__.model.action.massDelete'),
                  position: 'TopCenter',
                  animation: e.default_SF_Props.animationTooltip,
                },
                {
                  default: h(() => [
                    m(
                      'span',
                      {
                        class: _([
                          'sf-icon-garbage-wf iconeGrid',
                          { disabledIcon: !e.can('delete', i.objectPermission) },
                        ]),
                        onClick: t[0] || (t[0] = (l) => a.dialogBtnClick('delete')),
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
              ))
            : c('', true),
          o.objetType == 'files'
            ? (r(),
              b(
                d,
                {
                  key: 1,
                  class: 'me-2 mt-2',
                  content: e.trans.get('__JSON__.model.action.downloadZip'),
                  position: 'TopCenter',
                  animation: e.default_SF_Props.animationTooltip,
                },
                {
                  default: h(() => [
                    m(
                      'span',
                      {
                        class: _([
                          'sf-icon-document-download iconeGrid',
                          e.can('download files') ? '' : 'disabledIcon',
                        ]),
                        style: { cursor: 'pointer' },
                        onClick: t[1] || (t[1] = (...l) => a.downloadUrl && a.downloadUrl(...l)),
                      },
                      null,
                      2,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['content', 'animation'],
              ))
            : c('', true),
          o.objetType == 'docsheets'
            ? (r(),
              b(
                d,
                {
                  key: 2,
                  class: 'me-2 mt-2',
                  content: e.trans.get('__JSON__.model.action.downloadZip'),
                  position: 'TopCenter',
                  animation: e.default_SF_Props.animationTooltip,
                },
                {
                  default: h(() => [
                    m(
                      'span',
                      {
                        class: _([
                          'sf-icon-document-download iconeGrid',
                          e.can('download files') ? '' : 'disabledIcon',
                        ]),
                        style: { cursor: 'pointer' },
                        onClick: t[2] || (t[2] = (...l) => a.downloadDocsheet && a.downloadDocsheet(...l)),
                      },
                      null,
                      2,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['content', 'animation'],
              ))
            : c('', true),
        ]))
      : i.modeHeader == 'trash'
        ? (r(),
          g('div', j, [
            k(
              d,
              {
                class: 'me-2 mt-2',
                content: e.trans.get('__JSON__.model.action.restore'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: h(() => [
                  m(
                    'span',
                    {
                      class: _([
                        'sf-icon-recover-deleted-item-wf iconeGrid',
                        { disabledIcon: !e.can('restore', i.objectPermission) },
                      ]),
                      onClick: t[3] || (t[3] = (l) => a.dialogBtnClick('restore')),
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
            i.objectPermission == 'docsheets' ||
            i.objectPermission == 'files' ||
            i.objectPermission == 'events' ||
            i.objectPermission == 'tasks' ||
            i.objectPermission == 'items' ||
            i.objectPermission == 'tags'
              ? (r(),
                b(
                  d,
                  {
                    key: 0,
                    class: 'me-2 mt-2',
                    content: e.trans.get('__JSON__.model.action.forceDelete'),
                    position: 'TopCenter',
                    animation: e.default_SF_Props.animationTooltip,
                  },
                  {
                    default: h(() => [
                      m(
                        'span',
                        {
                          class: _([
                            'sf-icon-garbage-wf iconeGrid',
                            { disabledIcon: !e.can('delete', i.objectPermission) },
                          ]),
                          onClick: t[4] || (t[4] = (...l) => a.massTrashDelete && a.massTrashDelete(...l)),
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
                ))
              : c('', true),
          ]))
        : c('', true),
  ]);
}
const I = p(D, [
  ['render', y],
  ['__scopeId', 'data-v-80340120'],
]);
export { I as h };
