import { g as u } from './ZS-VIFna.js';
import {
  _ as p,
  c as a,
  b as s,
  g as c,
  a as l,
  w as r,
  r as _,
  F as h,
  o as d,
  n as m,
} from '../assets/app-BjImoLrr.js';
import { d as b } from './DF3-5v4V.js';
import { v as w } from './A0nBLeas.js';
const g = {
  mixins: [u, b, w],
  props: { data: { required: true } },
  data: function () {
    return {
      files: 'files',
      enable: '',
      deletedDisabed: '',
      restore: '',
      objectPermission: 'files',
    };
  },
  computed: {
    classDelete: function () {
      this.data.has_use_cases == true
        ? (this.deletedDisabed = true)
        : this.data.deleted_at == null
          ? (this.enable = true)
          : (this.restore = true);
    },
    checkEye() {
      return this.fileIsViewable(this.data);
    },
  },
  mounted() {
    this.classDelete;
    this.classDelete;
  },
  methods: {
    downloadUrl() {
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
    actionDelete() {
      if (this.can('delete', this.objectPermission)) {
        this.deleted(this.files);
      }
    },
    trashDelete() {
      this.$emit('trashDelete', this.data.id);
    },
    actionRestore() {
      if (this.can('restore', this.objectPermission)) {
        this.restored(this.files);
      }
    },
    goToViewer() {
      this.fileGoToViewer(this.data);
    },
  },
};
const D = { class: 'gridActions' };
const y = { class: 'd-flex' };
const T = {
  key: 0,
  class: 'row-disabled me-2',
};
const C = { class: 'me-2' };
const S = { class: 'me-2' };
const k = {
  key: 3,
  class: 'me-2',
};
const F = {
  key: 4,
  class: 'me-2',
};
function P(e, o, f, v, j, t) {
  const n = _('ejs-tooltip');
  d();
  return a('div', D, [
    s('div', y, [
      e.deletedDisabed
        ? (d(),
          a('div', T, [
            l(
              n,
              {
                content: e.trans.get('__JSON__.model.action.delete'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: r(() => [
                  s(
                    'span',
                    {
                      class: m(['sf-icon-garbage-wf', { disabledIcon: !e.can('delete', e.objectPermission) }]),
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
          ]))
        : c('', true),
      e.enable
        ? (d(),
          a(
            'div',
            {
              key: 1,
              onClick: o[0] || (o[0] = (...i) => t.actionDelete && t.actionDelete(...i)),
              class: 'me-2',
              style: { cursor: 'pointer' },
            },
            [
              l(
                n,
                {
                  content: e.trans.get('__JSON__.model.action.delete'),
                  position: 'TopCenter',
                  animation: e.default_SF_Props.animationTooltip,
                },
                {
                  default: r(() => [
                    s(
                      'span',
                      {
                        class: m(['sf-icon-garbage-wf', { disabledIcon: !e.can('delete', e.objectPermission) }]),
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
          ))
        : c('', true),
      e.restore
        ? (d(),
          a(
            h,
            { key: 2 },
            [
              s('div', C, [
                l(
                  n,
                  {
                    content: e.trans.get('__JSON__.model.action.restore'),
                    position: 'TopCenter',
                    animation: e.default_SF_Props.animationTooltip,
                    openDelay: e.protectAgainstSyncfusion ? 50000 : 0,
                  },
                  {
                    default: r(() => [
                      s(
                        'span',
                        {
                          class: m([
                            'sf-icon-recover-deleted-item-wf iconeGrid',
                            { disabledIcon: !e.can('delete', e.objectPermission) },
                          ]),
                          style: { cursor: 'pointer' },
                          onClick: o[1] || (o[1] = (...i) => t.actionRestore && t.actionRestore(...i)),
                        },
                        null,
                        2,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['content', 'animation', 'openDelay'],
                ),
              ]),
              s('div', S, [
                l(
                  n,
                  {
                    ref: 'tooltipForceDelete',
                    content: e.trans.get('__JSON__.model.action.forceDelete'),
                    animation: e.default_SF_Props.animationTooltip,
                    openDelay: e.protectAgainstSyncfusion ? 50000 : 0,
                  },
                  {
                    default: r(() => [
                      s(
                        'span',
                        {
                          class: m([
                            'sf-icon-garbage-wf iconeGrid',
                            { disabledIcon: !e.can('delete', e.objectPermission) },
                          ]),
                          onClick: o[2] || (o[2] = (...i) => t.trashDelete && t.trashDelete(...i)),
                          style: { cursor: 'pointer' },
                        },
                        null,
                        2,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ['content', 'animation', 'openDelay'],
                ),
              ]),
            ],
            64,
          ))
        : c('', true),
      e.restore
        ? c('', true)
        : (d(),
          a('div', k, [
            l(
              n,
              {
                content: e.trans.get('__JSON__.model.action.download'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: r(() => [
                  s(
                    'span',
                    {
                      class: m([
                        'sf-icon-document-download',
                        e.canDownloadFile(f.data.extension) ? '' : 'disabledIcon',
                      ]),
                      onClick: o[3] || (o[3] = (...i) => t.downloadUrl && t.downloadUrl(...i)),
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
          ])),
      t.checkEye && !e.restore
        ? (d(),
          a('div', F, [
            l(
              n,
              {
                content: e.trans.get('__JSON__.model.action.goToViewer'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: r(() => [
                  s('span', {
                    class: 'sf-icon-eye---05',
                    onClick: o[4] || (o[4] = (...i) => t.goToViewer && t.goToViewer(...i)),
                    style: { cursor: 'pointer' },
                  }),
                ]),
                _: 1,
              },
              8,
              ['content', 'animation'],
            ),
          ]))
        : c('', true),
    ]),
  ]);
}
const I = p(g, [['render', P]]);
export { I as a };
