const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'chunks/CUvLZwvz.js',
      'assets/app-BjImoLrr.js',
      'css/CMUvL9X7.css',
      'css/CQE2eH-I.css',
      'css/DBcRuDqZ.css',
      'chunks/JzGXi_4H.js',
      'chunks/H3zXViHv.js',
      'css/BdVarn6W.css',
    ]),
) => i.map((i) => d[i]);
import { aN as e } from '../assets/app-BjImoLrr.js';
import r from './JzGXi_4H.js';
import s from './CUvLZwvz.js';
import { g as a } from './D_eyCAsX.js';
import l from './H3zXViHv.js';
const p = {
  components: {
    polymorphismeColumn: s,
    agentsTemplate: l,
    colorValue: r,
  },
  mixins: [a],
  methods: {
    tasksGridColumns(t) {
      let i = [
        {
          field: 'id',
          headerText: this.trans.get('__JSON__.model.value.id'),
          isPrimaryKey: true,
          filter: this.gridSettings.filterNumber,
          type: 'number',
          visible: true,
        },
        {
          field: 'code',
          headerText: this.trans.get('__JSON__.model.value.code'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          visible: true,
        },
        {
          field: 'designation',
          headerText: this.trans.get('__JSON__.model.value.designation'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          visible: true,
        },
      ];
      if (
        !this.object ||
        (this.object.api_prefix !== 'events' &&
          this.object.api_prefix !== 'docsheets' &&
          this.object.api_prefix !== 'files' &&
          this.object.api_prefix !== 'tasks' &&
          this.object.api_prefix !== 'locations')
      ) {
        i.push({
          field: 'object_name',
          headerText: this.trans.get('__JSON__.task.value.object'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'object',
              })
            : 'templateObject',
          visible: true,
        });
      }
      i = i.concat([
        {
          field: 'tag_name',
          headerText: this.trans.get('__JSON__.task.value.tag'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'tag',
              })
            : 'templateTag',
          visible: false,
        },
        {
          field: 'location_name',
          headerText: this.trans.get('__JSON__.task.value.location'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'location',
              })
            : 'templateLocation',
          visible: false,
        },
        {
          field: 'type_name',
          headerText: this.trans.get('__JSON__.task.value.type'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./JzGXi_4H.js'), __vite__mapDeps([5, 1, 2, 3])), {
                colorObjectName: 'type',
              })
            : 'templateType',
          visible: true,
        },
        {
          field: 'verbose_frequency',
          headerText: this.trans.get('__JSON__.model.value.frequency'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          textAlign: 'Left',
          visible: true,
        },
        {
          field: 'stop',
          headerText: this.trans.get('__JSON__.model.value.stop'),
          type: 'boolean',
          displayAsCheckBox: true,
          filter: this.gridSettings.filterCheck,
          textAlign: 'Center',
          visible: true,
        },
        {
          field: 'signal_trigger_signal_name',
          headerText: this.trans.get('__JSON__.task.value.signal'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'signal_trigger_signal',
              })
            : 'templateSignalTrigger',
        },
        {
          field: 'status_name',
          headerText: this.trans.get('__JSON__.task.value.status'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./JzGXi_4H.js'), __vite__mapDeps([5, 1, 2, 3])), {
                colorObjectName: 'status',
              })
            : 'templateStatus',
          visible: true,
        },
        {
          field: 'priority_name',
          headerText: this.trans.get('__JSON__.task.value.priority'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./JzGXi_4H.js'), __vite__mapDeps([5, 1, 2, 3])), {
                colorObjectName: 'priority',
              })
            : 'templatePriority',
          visible: true,
        },
        {
          field: 'conformity_name',
          headerText: this.trans.get('__JSON__.task.value.conformity'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./JzGXi_4H.js'), __vite__mapDeps([5, 1, 2, 3])), {
                colorObjectName: 'conformity',
              })
            : 'templateConformity',
          visible: true,
        },
        {
          field: 'typology_name',
          headerText: this.trans.get('__JSON__.task.value.typology'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./JzGXi_4H.js'), __vite__mapDeps([5, 1, 2, 3])), {
                colorObjectName: 'typology',
              })
            : 'templateTypology',
          visible: true,
        },
        {
          field: 'maintenance_level_name',
          headerText: this.trans.get('__JSON__.task.value.maintenance_level'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./JzGXi_4H.js'), __vite__mapDeps([5, 1, 2, 3])), {
                colorObjectName: 'maintenance_level',
              })
            : 'templateMaintenanceLevel',
          visible: true,
        },
        {
          field: 'speciality_names',
          headerText: this.trans.get('__JSON__.model.value.speciality'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          width: this.gridSettings.extraLargeWidth,
          visible: true,
        },
        {
          field: 'certification_names',
          headerText: this.trans.get('__JSON__.model.value.certification'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          width: this.gridSettings.extraLargeWidth,
          visible: true,
        },
        {
          field: 'is_recurrent',
          headerText: this.trans.get('__JSON__.task.value.taskMaster'),
          displayAsCheckBox: true,
          type: 'boolean',
          filter: this.gridSettings.filterCheck,
          visible: false,
        },
        {
          field: 'responsible_name',
          headerText: this.trans.get('__JSON__.task.value.responsible'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'responsible',
              })
            : 'templateResponsible',
          visible: true,
        },
        {
          field: 'agent_names',
          headerText: this.trans.get('__JSON__.task.value.agents'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./H3zXViHv.js'), __vite__mapDeps([6, 1, 2, 3, 7])), {
                codeName: 'listAgentCodes',
                designationName: 'listAgentDesignations',
                iconName: 'listIcons',
                background: 'listAgent_color',
              })
            : 'templateAgents',
          visible: true,
        },
        {
          field: 'instruction_name',
          headerText: this.trans.get('__JSON__.task.value.instruction'),
          type: 'string',
          filter: this.gridSettings.filterWithoutCheckbox,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'instruction',
              })
            : 'templateInstruction',
          visible: true,
        },
        {
          field: 'instruction_id',
          headerText: this.trans.get('__JSON__.task.value.instruction_id'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          visible: false,
        },
        {
          field: 'maintenance_plan_name',
          headerText: this.trans.get('__JSON__.task.value.maintenancePlan'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'maintenance_plan',
              })
            : 'templateMaintenancePlan',
          visible: true,
        },
        {
          field: 'planning_name',
          headerText: this.trans.get('__JSON__.model.value.planning'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          template: t
            ? this.getSubGridTemplate(true, () => e(() => import('./CUvLZwvz.js'), __vite__mapDeps([0, 1, 2, 3, 4])), {
                polymorph: 'planning',
              })
            : 'templatePlanning',
          visible: true,
        },
        {
          field: 'project_names',
          headerText: this.trans.get('__JSON__.file.value.project'),
          type: 'string',
          visible: true,
          filter: this.gridSettings.filterExcel,
        },
        {
          field: 'start_date',
          headerText: this.trans.get('__JSON__.task.value.startDate'),
          type: 'date',
          format: this.gridSettings.dateformat,
          visible: true,
          filter: this.gridSettings.filterSettings,
        },
        {
          field: 'estimated_end_date',
          headerText: this.trans.get('__JSON__.task.value.estEndDate'),
          type: 'date',
          format: this.gridSettings.dateformat,
          visible: true,
          filter: this.gridSettings.filterSettings,
        },
        {
          field: 'real_end_date',
          headerText: this.trans.get('__JSON__.task.value.realEndDate'),
          type: 'date',
          format: this.gridSettings.dateformat,
          visible: true,
          filter: this.gridSettings.filterSettings,
        },
        {
          field: 'past_time',
          headerText: this.trans.get('__JSON__.task.value.pastTime'),
          type: 'string',
          filter: this.gridSettings.filterExcel,
          visible: true,
        },
        {
          field: 'is_all_day',
          headerText: this.trans.get('__JSON__.task.value.isAllDay'),
          type: 'boolean',
          filter: this.gridSettings.filterCheck,
          displayAsCheckBox: true,
          visible: true,
        },
        {
          field: 'days_late',
          headerText: this.trans.get('__JSON__.task.value.daysLate'),
          type: 'number',
          filter: this.gridSettings.filterSettings,
          visible: true,
        },
        {
          field: 'workload',
          headerText: this.trans.get('__JSON__.model.value.workload'),
          type: 'number',
          filter: this.gridSettings.filterSettings,
          visible: true,
        },
      ]);
      return i;
    },
  },
};
export { p as t };
