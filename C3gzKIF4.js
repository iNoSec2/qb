import { K as e, F as s, H as n } from './ByjoIpeJ.js';
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
function g(a) {
  switch (a) {
    case 35916:
      return 33776;
    case 35918:
      return 33778;
    case 35919:
      return 33779;
    case 37493:
      return 37492;
    case 37497:
      return 37496;
    case 37495:
      return 37494;
    case 37840:
      return 37808;
    case 36493:
      return 36492;
  }
  return null;
}
class Er {
  constructor() {
    this.supportCascades = false;
  }
  loadCubeData(p, r, t, m) {
    if (Array.isArray(p)) return;
    r._invertVScale = !r.invertY;
    const i = r.getEngine();
    const o = new e(p, 6);
    const l = o.numberOfMipmapLevels > 1 && r.generateMipMaps;
    i._unpackFlipY(true);
    o.uploadLevels(r, r.generateMipMaps);
    r.width = o.pixelWidth;
    r.height = o.pixelHeight;
    i._setCubeMapTextureParams(r, l, o.numberOfMipmapLevels - 1);
    r.isReady = true;
    r.onLoadedObservable.notifyObservers(r);
    r.onLoadedObservable.clear();
    if (m) {
      m();
    }
  }
  loadData(p, r, t, m) {
    if (e.IsValid(p)) {
      r._invertVScale = !r.invertY;
      const i = new e(p, 1);
      const o = g(i.glInternalFormat);
      o
        ? ((r.format = o),
          (r._useSRGBBuffer = r.getEngine()._getUseSRGBBuffer(true, r.generateMipMaps)),
          (r._gammaSpace = true))
        : (r.format = i.glInternalFormat);
      t(
        i.pixelWidth,
        i.pixelHeight,
        r.generateMipMaps,
        true,
        () => {
          i.uploadLevels(r, r.generateMipMaps);
        },
        i.isInvalid,
      );
    } else
      s.IsValid(p)
        ? new s(r.getEngine())._uploadAsync(p, r, m).then(
            () => {
              t(r.width, r.height, r.generateMipMaps, true, () => {}, false);
            },
            (o) => {
              n.Warn(`Failed to load KTX2 texture data: ${o.message}`);
              t(0, 0, false, false, () => {}, true);
            },
          )
        : (n.Error('texture missing KTX identifier'), t(0, 0, false, false, () => {}, true));
  }
}
export { Er as _KTXTextureLoader };
