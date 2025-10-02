import { s as c, i as n } from '../assets/app-BjImoLrr.js';
const h = {
  data() {
    return {
      showModalAddPattern: false,
      patternType: null,
      codePattern: null,
      selectedObject: [],
    };
  },
  methods: {
    closeModalPattern() {
      this.patternType = null;
      this.showModalAddPattern = false;
      this.codePattern = null;
      this.selectedObject = [];
    },
    async checkIfPatternExistWithCodes(a, s, o) {
      return new Promise((t, e) => {
        c(document.getElementById(o));
        axios
          .get('api/patterns/' + a + '/checkIfExist', { params: { codes: s } })
          .then((r) => {
            n(document.getElementById(o));
            t(r.data);
          })
          .catch((r) => {
            n(document.getElementById(o));
            e(false);
          });
      });
    },
    async createPatternFrom(a, s, o, t = null) {
      try {
        await this.checkIfPatternExistWithCodes(a, [s.code], o);
        this.patternType = a;
        this.showModalAddPattern = true;
        this.codePattern = s.code;
        if (typeof t == 'function') {
          t();
        }
      } catch {}
    },
    async massCreatePatternsFrom(a, s, o, t = null) {
      let e = s.map((r) => r.code);
      try {
        await this.checkIfPatternExistWithCodes(a, e, o);
        this.showModalAddPattern = true;
        this.patternType = a;
        this.selectedObject = s;
        if (typeof t == 'function') {
          t();
        }
      } catch {}
    },
    massAddPatterns(a, s, o, t) {
      c(document.getElementById(t));
      axios
        .post('api/patterns/' + o + '/massCreateFrom', {
          data: a,
          autolink: s,
        })
        .then((e) => {
          n(document.getElementById(t));
          if (e.data.errors.length) {
            e.data.errors.forEach((r) => {
              this.showCenterToast(r, 'e-toast-warning');
            });
          }
          if (e.data.success.length) {
            e.data.success.forEach((r) => {
              this.showCenterToast(r, 'e-toast-success');
            });
          }
          this.closeModalPattern();
        })
        .catch((e) => {
          n(document.getElementById(t));
          this.showCenterToast(this.trans.get('__JSON__.task.toast.error.update'), 'e-toast-danger');
          this.closeModalPattern();
        });
    },
  },
};
export { h as c };
