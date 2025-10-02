import { r as n, s as l, w as a } from './ByjoIpeJ.js';
import '../assets/app-BjImoLrr.js';
/* empty css                    */
import './D_eyCAsX.js';
import './DF3-5v4V.js';
import './BKAIn2gq.js';
import './D6qTVqbk.js';
import './_g7TwrEi.js';
import './CuxdB7hV.js';
import './B5OkKPxd.js';
import './zC887B9y.js';
import './CIZo99Uw.js';
import './CstnyyMp.js';
import './DrOYtW4t.js';
import './BWJp0flw.js';
import './CKKuZvVl.js';
import './SUr2wc-1.js';
import './JzGXi_4H.js';
import './C5NBkq6J.js';
import './DEdfVzPD.js';
import './CeaU_JMC.js';
import './ZS-VIFna.js';
import './BzXjulcJ.js';
import './BCTXnxKj.js';
import './DvWiUwH6.js';
import './Nw-Fho2_.js';
import './BpLTBrfQ.js';
import './DZOApFs4.js';
import './CHw12MFN.js';
import './sKBcFuym.js';
import './H3zXViHv.js';
import './CUvLZwvz.js';
/* empty css        */
import './A0nBLeas.js';
import './BP7xgnSt.js';
import './TDtrdbi3.js';
import './C3YRlhOp.js';
/* empty css        */
import './B4PstBc0.js';
import './CLQ8a77M.js';
import './DzLe_4Zq.js';
import './DmX3Ojbe.js';
import './Brc4hCJ1.js';
import './DstRLUzo.js';
import './Bkrrmzy7.js';
import './nNzkQ-aO.js';
import './CbXSr5JG.js';
import './xWacEG2R.js';
import './TBQMNe9g.js';
import './B5KTBX2n.js';
import './DaYfaWMA.js';
import './DCpD_GCz.js';
import './n40XSbeV.js';
import './DZVEBx5W.js';
import './D9nDGEOM.js';
import './DA4v7aaJ.js';
import './BMaWf-ez.js';
import './wEjpbi8z.js';
import './WRQmD3F4.js';
import './CFn9I8-1.js';
import './D_HAulZl.js';
import './CVJE_o7E.js';
/* empty css        */
import './DW8VaA28.js';
import './bldII2NI.js';
import './Dh-oEpRI.js';
import './2cVHo3u0.js';
import './CAT-EROW.js';
import './BNlbYZgu.js';
import './CQdHcCda.js';
import './Sxq1Sr0a.js';
import './DvAJeiZU.js';
import './DYOpm8-c.js';
import './PMMXLX9y.js';
class Et {
  constructor() {
    this.supportCascades = false;
  }
  loadCubeData(p, t, m, r, e) {
    if (Array.isArray(p)) return;
    const o = t.getEngine().getCaps();
    const s = {
      supportedCompressionFormats: {
        etc1: !!o.etc1,
        s3tc: !!o.s3tc,
        pvrtc: !!o.pvrtc,
        etc2: !!o.etc2,
        astc: !!o.astc,
        bc7: !!o.bptc,
      },
    };
    n(p, s)
      .then((i) => {
        const c = i.fileInfo.images[0].levels.length > 1 && t.generateMipMaps;
        l(t, i);
        t.getEngine()._setCubeMapTextureParams(t, c);
        t.isReady = true;
        t.onLoadedObservable.notifyObservers(t);
        t.onLoadedObservable.clear();
        if (r) {
          r();
        }
      })
      .catch((i) => {
        a.Warn('Failed to transcode Basis file, transcoding may not be supported on this device');
        t.isReady = true;
        if (e) {
          e(i);
        }
      });
  }
  loadData(p, t, m) {
    const r = t.getEngine().getCaps();
    const e = {
      supportedCompressionFormats: {
        etc1: !!r.etc1,
        s3tc: !!r.s3tc,
        pvrtc: !!r.pvrtc,
        etc2: !!r.etc2,
        astc: !!r.astc,
        bc7: !!r.bptc,
      },
    };
    n(p, e)
      .then((o) => {
        const s = o.fileInfo.images[0].levels[0];
        const i = o.fileInfo.images[0].levels.length > 1 && t.generateMipMaps;
        m(o.fileInfo.images[0].levels[0].width, o.fileInfo.images[0].levels[0].height, i, o.format !== -1, () => {
          l(t, o);
        });
      })
      .catch((o) => {
        a.Warn('Failed to transcode Basis file, transcoding may not be supported on this device');
        a.Warn(`Failed to transcode Basis file: ${o}`);
        m(0, 0, false, false, () => {}, true);
      });
  }
}
export { Et as _BasisTextureLoader };
