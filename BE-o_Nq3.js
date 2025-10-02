import c from './JzGXi_4H.js';
import p from './CUvLZwvz.js';
import { g as f } from './D_eyCAsX.js';
import {
  _ as g,
  c as o,
  b as r,
  g as d,
  a as m,
  w as _,
  r as u,
  o as n,
  $ as h,
  n as y,
} from '../assets/app-BjImoLrr.js';
import { g as b } from './ZS-VIFna.js';
const K = {
  mixins: [f],
  components: {
    colorValue: c,
    polymorphismeColumn: p,
  },
  computed: {
    poisGridColumns() {
      return [
        {
          field: 'id',
          headerText: this.trans.get('__JSON__.model.value.id'),
          isPrimaryKey: true,
          type: 'number',
          filter: this.gridSettings.filterNumber,
          visible: true,
        },
        {
          field: 'designation',
          headerText: this.trans.get('__JSON__.model.value.designation'),
          isPrimaryKey: false,
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          visible: true,
        },
        {
          field: 'type_name',
          headerText: this.trans.get('__JSON__.model.value.type'),
          isPrimaryKey: false,
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: 'templateType',
          visible: true,
        },
        {
          field: 'object_name',
          headerText: this.trans.get('__JSON__.poi.value.object'),
          isPrimaryKey: false,
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          template: 'templateObject',
          visible: true,
        },
        {
          field: 'planning_name',
          headerText: this.trans.get('__JSON__.poi.value.planning'),
          isPrimaryKey: false,
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          template: 'templatePlanning',
          visible: true,
        },
        {
          field: 'primary_file_name',
          headerText: this.trans.get('__JSON__.poi.value.mainFile'),
          isPrimaryKey: false,
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          visible: true,
        },
      ];
    },
  },
};
const S = {
  mixins: [b],
  props: {
    data: { required: true },
    onlyEye: {
      required: false,
      default() {
        return false;
      },
    },
  },
  methods: {
    deletePoi() {
      if (this.can('delete', 'pois')) {
        this.deleted('pois');
      }
    },
    callGoToViewerPoi() {
      this.$emit('goToViewerPoiFromGrid', { data: this.data });
    },
  },
};
const v = { class: 'gridActions' };
const P = { class: 'd-flex' };
const T = {
  key: 0,
  class: 'me-2',
};
const x = { class: 'me-2' };
function C(e, t, i, N, k, s) {
  const l = u('ejs-tooltip');
  n();
  return o('div', v, [
    r('div', P, [
      i.onlyEye
        ? d('', true)
        : (n(),
          o('div', T, [
            m(
              l,
              {
                content: e.trans.get('__JSON__.model.action.delete'),
                position: 'TopCenter',
                animation: e.default_SF_Props.animationTooltip,
              },
              {
                default: _(() => [
                  r(
                    'span',
                    {
                      class: y([
                        'sf-icon-garbage-wf iconeGrid',
                        !i.data.has_use_cases && e.can('delete', 'pois') ? '' : 'e-disabled',
                      ]),
                      onClick: t[0] || (t[0] = (...a) => s.deletePoi && s.deletePoi(...a)),
                      style: h([{ cursor: 'pointer' }, i.data.has_informations ? '' : 'margin-right:18px']),
                    },
                    null,
                    6,
                  ),
                ]),
                _: 1,
              },
              8,
              ['content', 'animation'],
            ),
          ])),
      r('div', x, [
        m(
          l,
          {
            content: e.trans.get('__JSON__.model.action.goToViewer'),
            position: 'TopCenter',
            animation: e.default_SF_Props.animationTooltip,
          },
          {
            default: _(() => [
              i.data.has_informations
                ? (n(),
                  o('span', {
                    key: 0,
                    class: 'sf-icon-eye---05 iconeGrid',
                    onClick: t[1] || (t[1] = (...a) => s.callGoToViewerPoi && s.callGoToViewerPoi(...a)),
                    style: { cursor: 'pointer' },
                  }))
                : d('', true),
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
const j = g(S, [['render', C]]);
export { j as a, K as p };
