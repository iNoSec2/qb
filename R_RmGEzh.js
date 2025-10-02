import { B as n, E as l } from './ByjoIpeJ.js';
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
class Mt {
  constructor() {
    this.supportCascades = false;
  }
  loadCubeData() {
    throw '.hdr not supported in Cube.';
  }
  loadData(p, o, s) {
    const a = new Uint8Array(p.buffer, p.byteOffset, p.byteLength);
    const r = n(a);
    const m = l(a, r);
    const e = r.width * r.height;
    const i = new Float32Array(e * 4);
    for (let t = 0; t < e; t += 1) {
      i[t * 4] = m[t * 3];
      i[t * 4 + 1] = m[t * 3 + 1];
      i[t * 4 + 2] = m[t * 3 + 2];
      i[t * 4 + 3] = 1;
    }
    s(r.width, r.height, o.generateMipMaps, false, () => {
      const t = o.getEngine();
      o.type = 1;
      o.format = 5;
      o._gammaSpace = false;
      t._uploadDataToTextureDirectly(o, i);
    });
  }
}
export { Mt as _HDRTextureLoader };
