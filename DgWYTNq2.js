import { L as b } from './ByjoIpeJ.js';
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
function O(r) {
  return r
    .split(' ')
    .filter((a) => a !== '')
    .map((a) => parseFloat(a));
}
function x(r, a, s) {
  for (; s.length !== a; ) {
    const t = O(r.lines[r.index++]);
    s.push(...t);
  }
}
function V(r, a, s) {
  let t = 0;
  let e = 0;
  let o = 0;
  let p = 0;
  let c = 0;
  let f = 0;
  for (let l = 0; l < r.numberOfHorizontalAngles - 1; l++)
    if (s < r.horizontalAngles[l + 1] || l === r.numberOfHorizontalAngles - 2) {
      e = l;
      o = r.horizontalAngles[l];
      p = r.horizontalAngles[l + 1];
      break;
    }
  for (let l = 0; l < r.numberOfVerticalAngles - 1; l++)
    if (a < r.verticalAngles[l + 1] || l === r.numberOfVerticalAngles - 2) {
      t = l;
      c = r.verticalAngles[l];
      f = r.verticalAngles[l + 1];
      break;
    }
  const m = p - o;
  const h = f - c;
  if (h === 0) return 0;
  const d = m === 0 ? 0 : (s - o) / m;
  const g = (a - c) / h;
  const u = m === 0 ? e : e + 1;
  const i = b(r.candelaValues[e][t], r.candelaValues[u][t], d);
  const n = b(r.candelaValues[e][t + 1], r.candelaValues[u][t + 1], d);
  return b(i, n, g);
}
function z(r) {
  const t = {
    lines: new TextDecoder('utf-8').decode(r).split(`
`),
    index: 0,
  };
  const e = {
    version: t.lines[0],
    candelaValues: [],
    horizontalAngles: [],
    verticalAngles: [],
    numberOfHorizontalAngles: 0,
    numberOfVerticalAngles: 0,
  };
  for (t.index = 1; t.lines.length > 0 && !t.lines[t.index].includes('TILT='); ) t.index++;
  t.lines[t.index].includes('INCLUDE');
  t.index++;
  const o = O(t.lines[t.index++]);
  e.numberOfLights = o[0];
  e.lumensPerLamp = o[1];
  e.candelaMultiplier = o[2];
  e.numberOfVerticalAngles = o[3];
  e.numberOfHorizontalAngles = o[4];
  e.photometricType = o[5];
  e.unitsType = o[6];
  e.width = o[7];
  e.length = o[8];
  e.height = o[9];
  const p = O(t.lines[t.index++]);
  e.ballastFactor = p[0];
  e.fileGenerationType = p[1];
  e.inputWatts = p[2];
  for (let i = 0; i < e.numberOfHorizontalAngles; i++) e.candelaValues[i] = [];
  x(t, e.numberOfVerticalAngles, e.verticalAngles);
  x(t, e.numberOfHorizontalAngles, e.horizontalAngles);
  for (let i = 0; i < e.numberOfHorizontalAngles; i++) x(t, e.numberOfVerticalAngles, e.candelaValues[i]);
  let c = -1;
  for (let i = 0; i < e.numberOfHorizontalAngles; i++)
    for (let n = 0; n < e.numberOfVerticalAngles; n++) {
      e.candelaValues[i][n] *= e.candelaValues[i][n] * e.candelaMultiplier * e.ballastFactor * e.fileGenerationType;
      c = Math.max(c, e.candelaValues[i][n]);
    }
  if (c > 0)
    for (let i = 0; i < e.numberOfHorizontalAngles; i++)
      for (let n = 0; n < e.numberOfVerticalAngles; n++) e.candelaValues[i][n] /= c;
  const f = 180;
  const m = 360;
  const h = 64800;
  const d = new Float32Array(64800);
  const g = e.horizontalAngles[0];
  const u = e.horizontalAngles[e.numberOfHorizontalAngles - 1];
  for (let i = 0; i < 64800; i++) {
    let n = i % 360;
    const A = Math.floor(i / 360);
    if (
      e.horizontalAngles[e.numberOfHorizontalAngles - 1] - e.horizontalAngles[0] !== 0 &&
      (n < e.horizontalAngles[0] || n >= e.horizontalAngles[e.numberOfHorizontalAngles - 1])
    ) {
      n %= e.horizontalAngles[e.numberOfHorizontalAngles - 1] * 2;
      if (n > e.horizontalAngles[e.numberOfHorizontalAngles - 1]) {
        n = e.horizontalAngles[e.numberOfHorizontalAngles - 1] * 2 - n;
      }
    }
    d[A + n * 180] = V(e, A, n);
  }
  return {
    width: 180,
    height: 1,
    data: d,
  };
}
class Re {
  constructor() {
    this.supportCascades = false;
  }
  loadCubeData() {
    throw '.ies not supported in Cube.';
  }
  loadData(a, s, t) {
    const e = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    const o = z(e);
    t(o.width, o.height, s.useMipMaps, false, () => {
      const p = s.getEngine();
      s.type = 1;
      s.format = 6;
      s._gammaSpace = false;
      p._uploadDataToTextureDirectly(s, o.data);
    });
  }
}
export { Re as _IESTextureLoader };
