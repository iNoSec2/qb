import { g as m } from './ZS-VIFna.js';
import {
  _ as f,
  c as i,
  b as o,
  g as l,
  a as d,
  w as c,
  r as h,
  F as b,
  o as a,
  n as u,
} from '../assets/app-BjImoLrr.js';
const _ = {
  mixins: [m],
  props: {
    objetType: { required: true },
    data: { required: true },
  },
  data: function () {
    return {
      enable: null,
      deletedDisabed: null,
      restore: null,
      objectPermission: this.objetType,
      objectCanForceDelete: [
        'events',
        'tasks',
        'patterns',
        'items',
        'tags',
        'connections',
        'instructions',
        'sharedRequests',
      ],
    };
  },
  computed: {
    classDelete: function () {
      this.data.has_use_cases == true ||
      this.data.assets_treeview + this.data.assets_stock + this.data.assets_repair + this.data.assets_deco ||
      (this.data.isDeletable !== void 0 && !this.data.isDeletable) ||
      (this.data.deletable !== void 0 && !this.data.deletable) ||
      this.data.has_use_cases > 0
        ? (this.deletedDisabed = true)
        : this.data.deleted_at == null
          ? (this.enable = true)
          : (this.restore = true);
    },
  },
  mounted() {
    this.classDelete;
  },
  methods: {
    actionDelete() {
      if (this.can('delete', this.objectPermission)) {
        this.deleted(this.objetType);
      }
    },
    actionRestore() {
      if (this.can('restore', this.objectPermission)) {
        this.restored(this.objetType);
      }
    },
    trashDelete() {
      if (this.can('delete', this.objectPermission)) {
        this.deleted(this.objetType, true);
      }
    },
  },
};
const D = { class: 'gridActions' };
const y = { class: 'd-flex' };
const g = {
  key: 0,
  class: 'me-2 row-disabled',
};
const j = {
  key: 1,
  class: 'me-2',
};
const T = { class: 'me-2' };
const C = {
  key: 0,
  class: 'me-2',
};
function k(e, t, p, P, S, s) {
  const r = h('ejs-tooltip');
  a();
  return i('div', D, [
    o('div', y, [
      e.deletedDisabed
        ? (a(),
          i('div', g, [
            d(
              r,
              {
                content: e.trans.get('__JSON__.model.action.delete'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: c(() => [
                  ...(t[3] || (t[3] = [o('span', { class: 'sf-icon-garbage-wf iconeGrid' }, null, -1)])),
                ]),
                _: 1,
              },
              8,
              ['content', 'animation'],
            ),
          ]))
        : l('', true),
      e.enable
        ? (a(),
          i('div', j, [
            d(
              r,
              {
                ref: 'tooltipDelete',
                content: e.trans.get('__JSON__.model.action.delete'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
                openDelay: e.protectAgainstSyncfusion ? 50000 : 0,
              },
              {
                default: c(() => [
                  o(
                    'span',
                    {
                      onClick: t[0] || (t[0] = (...n) => s.actionDelete && s.actionDelete(...n)),
                      class: u([
                        'sf-icon-garbage-wf iconeGrid',
                        {
                          disabledIcon:
                            !e.can('delete', e.objectPermission) ||
                            (p.objetType === 'stocks' && p.data.assets_count > 0),
                        },
                      ]),
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
          ]))
        : l('', true),
      e.restore
        ? (a(),
          i(
            b,
            { key: 2 },
            [
              o('div', T, [
                d(
                  r,
                  {
                    ref: 'tooltipRestore',
                    content: e.trans.get('__JSON__.model.action.restore'),
                    position: 'TopCenter',
                    animation: e.default_SF_Props.animationTooltip,
                    openDelay: e.protectAgainstSyncfusion ? 50000 : 0,
                  },
                  {
                    default: c(() => [
                      o(
                        'span',
                        {
                          onClick: t[1] || (t[1] = (...n) => s.actionRestore && s.actionRestore(...n)),
                          class: u([
                            'sf-icon-recover-deleted-item-wf iconeGrid',
                            { disabledIcon: !e.can('restore', e.objectPermission) },
                          ]),
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
              e.objectCanForceDelete.includes(e.objectPermission)
                ? (a(),
                  i('div', C, [
                    d(
                      r,
                      {
                        ref: 'tooltipForceDelete',
                        content: e.trans.get('__JSON__.model.action.forceDelete'),
                        position: 'TopCenter',
                        animation: e.default_SF_Props.animationTooltip,
                        openDelay: e.protectAgainstSyncfusion ? 50000 : 0,
                      },
                      {
                        default: c(() => [
                          o(
                            'span',
                            {
                              class: u([
                                'sf-icon-garbage-wf iconeGrid',
                                { disabledIcon: !e.can('delete', e.objectPermission) },
                              ]),
                              style: { cursor: 'pointer' },
                              onClick: t[2] || (t[2] = (...n) => s.trashDelete && s.trashDelete(...n)),
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
                  ]))
                : l('', true),
            ],
            64,
          ))
        : l('', true),
    ]),
  ]);
}
const w = f(_, [['render', k]]);
export { w as a };
