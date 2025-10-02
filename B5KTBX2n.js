import { _ as d, E as o, c as r, a as c, r as u, o as l } from '../assets/app-BjImoLrr.js';
const _ = {
  props: {
    data: { required: true },
    uuid: { required: true },
    enabled: {
      required: false,
      default() {
        return true;
      },
    },
  },
  methods: {
    toggleInstructionTask(t) {
      if (this.can('create tasks from instructions') && this.enabled) {
        o.$emit('toggleInstructionTask', {
          uuid: this.uuid,
          instruction_id: this.data.id,
          asset_id: this.data.asset_id,
          task_running: t.checked,
        });
      }
    },
  },
};
const m = {
  style: {
    display: 'flex',
    'justify-content': 'center',
  },
};
function k(t, n, e, h, f, s) {
  const a = u('ejs-switch');
  l();
  return r('div', m, [
    c(
      a,
      {
        checked: e.data.task_running,
        modelValue: e.data.task_running,
        'onUpdate:modelValue': n[0] || (n[0] = (i) => (e.data.task_running = i)),
        disabled: !t.can('create tasks from instructions') || !e.enabled,
        onChange: s.toggleInstructionTask,
      },
      null,
      8,
      ['checked', 'modelValue', 'disabled', 'onChange'],
    ),
  ]);
}
const b = d(_, [['render', k]]);
export { b as m };
