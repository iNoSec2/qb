import { D as a, q as d } from './ByjoIpeJ.js';
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
class Pi {
  constructor() {
    this.supportCascades = true;
  }
  loadCubeData(t, o, s, p) {
    const m = o.getEngine();
    let i;
    let e = false;
    let n = 1000;
    if (Array.isArray(t))
      for (let r = 0; r < t.length; r++) {
        const l = t[r];
        i = a.GetDDSInfo(t[r]);
        o.width = i.width;
        o.height = i.height;
        e = (i.isRGB || i.isLuminance || i.mipmapCount > 1) && o.generateMipMaps;
        m._unpackFlipY(i.isCompressed);
        a.UploadDDSLevels(m, o, t[r], i, e, 6, -1, r);
        !i.isFourCC && i.mipmapCount === 1 ? m.generateMipMapsForCubemap(o) : (n = i.mipmapCount - 1);
      }
    else {
      const r = t;
      i = a.GetDDSInfo(t);
      o.width = i.width;
      o.height = i.height;
      if (s) {
        i.sphericalPolynomial = new d();
      }
      e = (i.isRGB || i.isLuminance || i.mipmapCount > 1) && o.generateMipMaps;
      m._unpackFlipY(i.isCompressed);
      a.UploadDDSLevels(m, o, t, i, e, 6);
      !i.isFourCC && i.mipmapCount === 1 ? m.generateMipMapsForCubemap(o, false) : (n = i.mipmapCount - 1);
    }
    m._setCubeMapTextureParams(o, e, n);
    o.isReady = true;
    o.onLoadedObservable.notifyObservers(o);
    o.onLoadedObservable.clear();
    if (p) {
      p({
        isDDS: true,
        width: o.width,
        info: i,
        data: t,
        texture: o,
      });
    }
  }
  loadData(t, o, s) {
    const p = a.GetDDSInfo(t);
    const m =
      (p.isRGB || p.isLuminance || p.mipmapCount > 1) &&
      o.generateMipMaps &&
      Math.max(p.width, p.height) >> (p.mipmapCount - 1) === 1;
    s(p.width, p.height, m, p.isFourCC, () => {
      a.UploadDDSLevels(o.getEngine(), o, t, p, m, 1);
    });
  }
}
export { Pi as _DDSTextureLoader };
