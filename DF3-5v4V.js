import { s as l, i as n, E as m } from '../assets/app-BjImoLrr.js';
const w = {
  data() {
    return { awaitingReturn: false };
  },
  methods: {
    canDownloadFile(e) {
      return (e === 'DAWE' && !this.can('download', 'drawe')) ||
        (e === 'PANO' && !this.can('download', 'pano')) ||
        (e === 'DOCMOD' && !this.can('download', 'docmod')) ||
        (e === 'BIM' && !this.can('download', 'xkt'))
        ? false
        : this.can('download files');
    },
    downloadObject(e, a, s, d = null, o = true, c = false) {
      if (c) {
        const t = document.createElement('a');
        t.href = e + '?token=' + sessionStorage.getItem('token');
        if (a) {
          let r = a.replace(/[:/*?"<>\\]/g, '_');
          t.setAttribute('download', r);
        }
        t.click();
      } else {
        if (this.awaitingReturn) {
          this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.downloadOnce'), 'e-toast-danger');
          return;
        }
        this.awaitingReturn = true;
        if (o) {
          l(document.getElementById('spinnerApp'));
        }
        axios
          .post(
            e,
            { dataForDownload: d },
            {
              responseType: 'blob',
              onDownloadProgress: function (t) {
                if (o) {
                  n(document.getElementById('spinnerApp'));
                }
                m.$emit('axiosDownloadProgress', {
                  notification: {
                    value: 'pct',
                    text: {
                      value: Math.round((t.loaded * 100) / t.total),
                      txt: [
                        {
                          type: 'brut',
                          txt: s,
                        },
                      ],
                    },
                  },
                });
              },
            },
          )
          .then((t) => {
            this.awaitingReturn = false;
            if (t.status === 200) {
              const r = window.URL.createObjectURL(new Blob([t.data]));
              const i = document.createElement('a');
              if (a.endsWith('.pano') && JSON.parse(sessionStorage.getItem('user')).roles[0].name !== 'super-admin') {
                a = a.replace('.pano', '.png');
              }
              let u = a.replace(/[:/*?"<>\\]/g, '_');
              i.href = r;
              i.setAttribute('download', u);
              i.click();
            } else
              this.showCenterToast(
                this.trans.get('__JSON__.main.modal.toast.error.download'),
                'e-toast-danger',
                t.status + ' - ' + t.statusText,
              );
            if (o) {
              n(document.getElementById('spinnerApp'));
            }
          })
          .catch((t) => {
            if (o) {
              n(document.getElementById('spinnerApp'));
            }
            this.awaitingReturn = false;
            this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.download'), 'e-toast-danger');
          });
      }
    },
    downloadObjectWithJob(e, a, s, d = null) {
      l(document.getElementById('spinnerApp'));
      axios
        .post(e, {
          filename: a,
          dataForDownload: d,
          nameDownload: s,
        })
        .then((o) => {
          n(document.getElementById('spinnerApp'));
        })
        .catch((o) => {
          n(document.getElementById('spinnerApp'));
          this.showCenterToast(this.trans.get('__JSON__.main.modal.toast.error.download'), 'e-toast-danger');
          console.error(o);
        });
    },
  },
};
export { w as d };
