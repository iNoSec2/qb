const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'chunks/BxIu9x40.js',
      'assets/app-BjImoLrr.js',
      'css/CMUvL9X7.css',
      'css/CQE2eH-I.css',
      'chunks/zC887B9y.js',
      'chunks/CIZo99Uw.js',
      'chunks/CstnyyMp.js',
      'chunks/DrOYtW4t.js',
      'chunks/BWJp0flw.js',
      'chunks/D6qTVqbk.js',
      'css/B0XDC8dX.css',
      'chunks/CKKuZvVl.js',
      'chunks/DvWiUwH6.js',
      'chunks/D9nDGEOM.js',
      'chunks/B5OkKPxd.js',
      'chunks/D_eyCAsX.js',
      'chunks/DF3-5v4V.js',
      'chunks/BKAIn2gq.js',
      'chunks/SUr2wc-1.js',
      'css/DzaC9e0n.css',
      'chunks/JzGXi_4H.js',
      'chunks/C3YRlhOp.js',
      'chunks/A0nBLeas.js',
      'chunks/CUvLZwvz.js',
      'css/DBcRuDqZ.css',
      'css/6so2YfkR.css',
      'chunks/DEdfVzPD.js',
      'chunks/CeaU_JMC.js',
      'chunks/ZS-VIFna.js',
      'chunks/BzXjulcJ.js',
      'chunks/BCTXnxKj.js',
      'chunks/Nw-Fho2_.js',
      'chunks/BpLTBrfQ.js',
      'chunks/DZOApFs4.js',
      'chunks/CHw12MFN.js',
      'chunks/sKBcFuym.js',
      'chunks/H3zXViHv.js',
      'css/BdVarn6W.css',
      'css/wB8ZolIl.css',
      'chunks/CLQ8a77M.js',
      'chunks/DzLe_4Zq.js',
      'chunks/DmX3Ojbe.js',
      'chunks/Brc4hCJ1.js',
      'css/CO12GkGL.css',
    ]),
) => i.map((i) => d[i]);
import {
  gm as F,
  ap as h,
  am as R,
  an as T,
  a9 as Z,
  gn as ee,
  cH as v,
  go as A,
  gp as K,
  b3 as te,
  gq as U,
  gr as L,
  gs as k,
  gt as B,
  gu as H,
  gv as q,
  gw as J,
  gx as ie,
  gy as ne,
  gz as V,
  gA as ae,
  gB as se,
  gC as re,
  cw as E,
  gD as oe,
  gE as le,
  gF as pe,
  gG as de,
  gH as ue,
  gI as he,
  gJ as ce,
  gK as ge,
  gL as P,
  gM as fe,
  gN as me,
  gO as ve,
  gP as ye,
  gQ as Ce,
  gR as be,
  b5 as Se,
  b6 as _e,
  gS as z,
  gT as W,
  gU as Te,
  gV as Ie,
  gW as Oe,
  gX as we,
  gY as xe,
  s as Q,
  i as w,
  E as I,
  _ as X,
  p as Me,
  c as N,
  a as u,
  w as g,
  r as m,
  o as O,
  b as y,
  e as x,
  t as M,
  aL as De,
  aM as Ee,
  aN as Pe,
  g as G,
  f as Re,
} from '../assets/app-BjImoLrr.js';
import { v as Ne } from './A0nBLeas.js';
import { T as je, I as Fe, C as Ae, H as Ue, Q as Le, a as ke } from './CLQ8a77M.js';
import { g as Be } from './D_eyCAsX.js';
import { s as He } from './DzLe_4Zq.js';
import qe from './JzGXi_4H.js';
import { s as Je } from './SUr2wc-1.js';
import { e as Ve } from './DmX3Ojbe.js';
import { h as Y } from './CKKuZvVl.js';
import { c as ze } from './DvWiUwH6.js';
var We = (function () {
  function i(e, t) {
    this.parent = e;
    this.pasteModel = t;
    this.addEventListener();
  }
  i.prototype.addEventListener = function () {
    this.parent.observer.on(F, this.destroy, this);
  };
  i.prototype.removeEventListener = function () {
    this.parent.observer.off(F, this.destroy);
  };
  i.prototype.updatePasteCleanupModel = function (e) {
    this.pasteModel = e;
  };
  i.prototype.extractFileFromClipboard = function (e) {
    if (!e || !e.args || !e.args.clipboardData || e.args.clipboardData.items.length === 0) return null;
    var t = e.args.clipboardData.items;
    var n = e.args.clipboardData.items[0].getAsFile();
    return n !== null ? n : h(e.args.clipboardData.items[1]) ? null : e.args.clipboardData.items[1].getAsFile();
  };
  i.prototype.splitBreakLine = function (e) {
    for (
      var t =
          R.userAgent.indexOf('Firefox') !== -1
            ? e.split(/\r\n\r\n|\n\n/g)
            : e.split(`\r
\r
`),
        n = '',
        a = this.getHtmlNode(true),
        s = this.getHtmlNode(false),
        o = this.pasteModel.enterKey === 'BR',
        r = 0;
      r < t.length;
      r++
    ) {
      var p = t[r];
      var l = this.normalizeSpacesForHtml(t[r]);
      var d = l.replace(/\r\n|\n/g, '<br>');
      r === 0
        ? o && (r !== t.length - 1 || d.endsWith('<br>'))
          ? r !== t.length - 1
            ? (n += d + s + s)
            : (n += d + s)
          : (n += d)
        : o
          ? d.endsWith('<br>') || (d === '' && r === t.length - 1)
            ? (n += d + s)
            : r === t.length - 1
              ? (n += d)
              : (n += d + s + s)
          : (d.trim() === '' && (n += '<br>'), (n += a + d + s));
    }
    return n;
  };
  i.prototype.getHtmlNode = function (e) {
    return this.pasteModel.enterKey === 'P'
      ? e
        ? '<p>'
        : '</p>'
      : this.pasteModel.enterKey === 'DIV'
        ? e
          ? '<div>'
          : '</div>'
        : e
          ? ''
          : '<br>';
  };
  i.prototype.normalizeSpacesForHtml = function (e) {
    var t = '';
    if (e === '') return e;
    for (var n = e.split(' '), a = 0; a < n.length; a++) {
      var s = n[a];
      n[a] === ''
        ? (t += '&nbsp;')
        : n[a] === '\t'
          ? (t += '&nbsp;&nbsp;&nbsp;&nbsp;')
          : (a > 0 && a < n.length && (t += ' '), (t += n[a]));
    }
    t = t.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    t = t.replace(/&nbsp;&nbsp;/g, '&nbsp; ');
    return t;
  };
  i.prototype.base64ToFile = function (e, t) {
    for (
      var n = e.split(','),
        a = n[0].match(/:(.*?);/)[1],
        s = a.split('/')[1],
        o = atob(n[1]),
        r = o.length,
        p = new Uint8Array(r);
      r--;

    )
      p[r] = o.charCodeAt(r);
    if (R.isIE || navigator.appVersion.indexOf('Edge') > -1) {
      var l = new Blob([p], { type: s });
      T(l, { name: t + '.' + (h(s) ? '' : s) });
      return l;
    } else return new File([p], t + '.' + (h(s) ? '' : s), { type: s });
  };
  i.prototype.setImageOpacity = function (e) {
    e.style.opacity = '0.5';
  };
  i.prototype.createPopupElement = function () {
    var e = Z('div');
    this.pasteModel.rootContainer.appendChild(e);
    return e;
  };
  i.prototype.getBlob = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t].getAttribute('src');
      if (!h(n) && n.split(',')[0].indexOf('base64') >= 0) {
        var a = URL.createObjectURL(ee(n));
        e[t].setAttribute('src', a);
      }
    }
  };
  i.prototype.cleanAppleClass = function (e) {
    for (var t = e.querySelectorAll('br.Apple-interchange-newline'), n = 0; n < t.length; n++) v(t[n]);
    return e;
  };
  i.prototype.cleanupDeniedTagsAndAttributes = function (e, t) {
    if (this.pasteModel.pasteCleanupSettings.deniedTags !== null) {
      e = this.deniedTags(e);
    }
    t
      ? (e = this.deniedAttributes(e, t))
      : this.pasteModel.pasteCleanupSettings.deniedAttrs !== null && (e = this.deniedAttributes(e, t));
    return e;
  };
  i.prototype.deniedTags = function (e) {
    var t = h(this.pasteModel.pasteCleanupSettings.deniedTags)
      ? []
      : this.pasteModel.pasteCleanupSettings.deniedTags.slice();
    t = this.attributesfilter(t);
    t = this.tagGrouping(t);
    for (var n = 0; n < t.length; n++)
      for (var a = e.querySelectorAll(t[n]), s = a.length - 1; s >= 0; s--) {
        for (var o = a[s], r = o.parentNode; o.firstChild; ) r.insertBefore(o.firstChild, o);
        r.removeChild(o);
      }
    return e;
  };
  i.prototype.attributesfilter = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (e[t].split('[').length > 1) {
        for (var a = e[t].split('[')[1].split(']')[0].split(','), s = [], o = [], r = 0; r < a.length; r++) {
          var p = a[r];
          a[r].indexOf('!') < 0 ? s.push(a[r].trim()) : o.push(a[r].split('!')[1].trim());
        }
        var l = s.length > 1 ? s.join('][') : s.join();
        var d = o.length > 1 ? o.join('][') : o.join();
        if (d.length > 0) {
          var f = l !== '' ? e[t].split('[')[0] + '[' + l + ']' : e[t].split('[')[0];
          e[t] = f + ':not([' + d + '])';
        } else e[t] = e[t].split('[')[0] + '[' + l + ']';
      }
    }
    return e;
  };
  i.prototype.tagGrouping = function (e) {
    for (
      var t = e.slice(),
        n = Object.keys(A),
        a = n.map(function (d) {
          return A['' + d];
        }),
        s = [],
        o = 0;
      o < t.length;
      o++
    ) {
      var r = t[o];
      var p = n.indexOf(r);
      if (r.split('[').length > 1) {
        r = r.split('[')[0].trim();
      }
      if (n.indexOf(t[o]) > -1)
        for (var l = 0; l < a[p].length; l++)
          if (t.indexOf(a[p][l]) < 0 && s.indexOf(a[p][l]) < 0) {
            s.push(a[p][l]);
          }
    }
    return (e = e.concat(s));
  };
  i.prototype.deniedAttributes = function (e, t) {
    var n = h(this.pasteModel.pasteCleanupSettings.deniedAttrs)
      ? []
      : this.pasteModel.pasteCleanupSettings.deniedAttrs.slice();
    if (t) {
      n.push('style');
    }
    for (var a = 0; a < n.length; a++)
      for (var s = n[a], o = e.querySelectorAll('[' + s + ']'), r = 0; r < o.length; r++) o[r].removeAttribute(s);
    return e;
  };
  i.prototype.allowedStyle = function (e) {
    var t = h(this.pasteModel.pasteCleanupSettings.allowedStyleProps)
      ? []
      : this.pasteModel.pasteCleanupSettings.allowedStyleProps.slice();
    t.push('list-style-type', 'list-style');
    for (var n = e.querySelectorAll('[style]'), a = 0; a < n.length; a++) {
      for (var s = n[a], o = '', r = [], p = s.getAttribute('style').split(';'), l = 0; l < p.length; l++)
        if (t.indexOf(p[l].split(':')[0].trim()) >= 0) {
          r.push(p[l]);
        }
      s.removeAttribute('style');
      o = r.join(';').trim() === '' ? r.join(';') : r.join(';') + ';';
      if (o) {
        s.style.cssText += o;
      }
    }
    return e;
  };
  i.prototype.setImageClassAndProps = function (e) {
    for (var t = e.getElementsByTagName('img'), n = 0, a = t.length; n < a; n++) {
      if (t[n].getAttribute('src') !== null) {
        t[n].className += ' pasteContent_Img';
      }
      this.setImageProperties(t[n]);
    }
    this.addTempClass(e);
  };
  i.prototype.setImageProperties = function (e) {
    if (this.pasteModel.insertImageSettings.width !== 'auto') {
      e.setAttribute('width', this.pasteModel.insertImageSettings.width);
    }
    if (this.pasteModel.insertImageSettings.minWidth !== '0' && this.pasteModel.insertImageSettings.minWidth !== 0) {
      e.style.minWidth = this.pasteModel.insertImageSettings.minWidth.toString();
    }
    if (this.pasteModel.insertImageSettings.maxWidth !== null) {
      e.style.maxWidth = this.pasteModel.getInsertImgMaxWidth().toString();
    }
    if (this.pasteModel.insertImageSettings.height !== 'auto') {
      e.setAttribute('height', this.pasteModel.insertImageSettings.height);
    }
    if (this.pasteModel.insertImageSettings.minHeight !== '0' && this.pasteModel.insertImageSettings.minHeight !== 0) {
      e.style.minHeight = this.pasteModel.insertImageSettings.minHeight.toString();
    }
    if (this.pasteModel.insertImageSettings.maxHeight !== null) {
      e.style.maxHeight = this.pasteModel.insertImageSettings.maxHeight.toString();
    }
  };
  i.prototype.addTempClass = function (e) {
    for (var t = e.children, n = 0; n < t.length; n++) t[n].classList.add('pasteContent_RTE');
  };
  i.prototype.hasPictureElement = function (e) {
    return e.getElementsByTagName('picture').length > 0;
  };
  i.prototype.processPictureElement = function (e) {
    for (var t = e.querySelectorAll('picture'), n = this.pasteModel.getDocument().baseURI, a = 0; a < t.length; a++) {
      var s = t[a].querySelector('img');
      var o = t[a].querySelectorAll('source');
      if (s && s.getAttribute('src'))
        for (
          var r = s.getAttribute('src'), p = r.indexOf('http') > -1 ? new URL(r) : new URL(r, n), l = 0;
          l < o.length;
          l++
        ) {
          var d = o[l].getAttribute('srcset');
          if (d && d.indexOf('http') === -1) {
            var f = p.origin + d;
            o[l].setAttribute('srcset', f);
          }
        }
    }
  };
  i.prototype.hasContentToPaste = function (e) {
    var t = e.textContent !== '' && e.textContent.replace(/\u200B/g, '').trim() !== '';
    var n = e.getElementsByTagName('img').length > 0;
    var a = e.getElementsByTagName('table').length > 0;
    return t || n || a;
  };
  i.prototype.collectBase64ImageFiles = function (e) {
    var t = [];
    if (!h(e.querySelector('img'))) {
      for (var n = e.querySelectorAll('img'), a = [], s = [], o = [], r = 0; r < n.length; r++) {
        var p = n[r].getAttribute('src');
        if (p && p.split(',')[0].indexOf('base64') >= 0) {
          a.push(p);
          s.push(K('rte_image'));
          o.push(n[r]);
        }
      }
      for (var l = [], d = void 0, r = 0; r < a.length; r++) {
        l.push(this.base64ToFile(a[r], s[r]));
        d = {
          name: l[r].name,
          rawFile: l[r],
          size: l[r].size,
          type: l[r].type,
          status: '',
          validationMessages: {
            minSize: '',
            maxSize: '',
          },
          statusCode: '1',
        };
        t.push(d);
      }
    }
    return t;
  };
  i.prototype.addTableClass = function (e, t) {
    for (var n = e.querySelectorAll('table'), a = 0; a < n.length; a++) {
      var s = n[a];
      var o = n[a].parentElement;
      var r = n[a].parentElement && n[a].parentElement.nodeName === 'FIGURE';
      var p = n[a].classList.length > 0 && n[a].classList.contains('e-rte-custom-table');
      if (!p) {
        this.pasteModel.pasteCleanupSettings.keepFormat && t && !r
          ? n[a].classList.add('e-rte-paste-' + t + '-table')
          : n[a].classList.contains('e-rte-table') || n[a].classList.add('e-rte-table');
        var l = n[a].nextSibling;
        var d = h(n[a].nextElementSibling) && n[a].nextSibling && n[a].nextSibling.textContent.trim() === '';
        if (d) {
          v(n[a].nextSibling);
        }
      }
    }
    return e;
  };
  i.prototype.removeTempClass = function () {
    for (var e = this.pasteModel.getEditPanel().querySelectorAll('.pasteContent_RTE'), t = 0; t < e.length; t++) {
      e[t].classList.remove('pasteContent_RTE');
      if (e[t].getAttribute('class') === '') {
        e[t].removeAttribute('class');
      }
    }
  };
  i.prototype.cropImageHandler = function (e) {
    var t = e.querySelectorAll('.e-img-cropped');
    t.length > 0 ? this.processCroppedImages(t) : this.handleBlobOrUpload();
  };
  i.prototype.processCroppedImages = function (e) {
    for (
      var t = this,
        n = function (o) {
          var r = e[o];
          var p = e[o].getAttribute('src');
          if (p && p.split(',')[0].indexOf('base64') >= 0) {
            var l = a.pasteModel.getCropImageData()[o];
            var d = new Image();
            d.src = p;
            d.onload = function () {
              var f = a.pasteModel.getCropImageData()[o].goalWidth / d.naturalWidth;
              var b = a.pasteModel.getCropImageData()[o].goalHeight / d.naturalHeight;
              var D = a.pasteModel.getCropImageData()[o].cropLength / f;
              var S = a.pasteModel.getCropImageData()[o].cropTop / b;
              var C =
                (a.pasteModel.getCropImageData()[o].goalWidth -
                  a.pasteModel.getCropImageData()[o].cropLength -
                  a.pasteModel.getCropImageData()[o].cropR) /
                f;
              var c =
                (a.pasteModel.getCropImageData()[o].goalHeight -
                  a.pasteModel.getCropImageData()[o].cropTop -
                  a.pasteModel.getCropImageData()[o].cropB) /
                b;
              var _ = document.createElement('canvas');
              _.width = C;
              _.height = c;
              var j = _.getContext('2d');
              if (j) {
                j.drawImage(d, D, S, C, c, 0, 0, C, c);
                e[o].setAttribute('src', _.toDataURL('image/png'));
                e[o].classList.remove('e-img-cropped');
                t.pasteModel.imageUpload();
                if (t.pasteModel.iframeSettings.enable) {
                  t.pasteModel.updateValue();
                }
              }
            };
          }
        },
        a = this,
        s = 0;
      s < e.length;
      s++
    )
      n(s);
  };
  i.prototype.handleBlobOrUpload = function () {
    var e = this;
    var t = this.pasteModel.getEditPanel();
    var n = t.querySelectorAll('img');
    var a =
      n.length > 0 &&
      n[0].src.startsWith('blob') &&
      !h(this.pasteModel.insertImageSettings.saveUrl) &&
      !h(this.pasteModel.insertImageSettings.path);
    a
      ? (this.convertBlobToBase64(t),
        (this.iframeUploadTime = setTimeout(function () {
          e.pasteModel.imageUpload();
          if (e.pasteModel.iframeSettings.enable) {
            e.pasteModel.updateValue();
          }
        }, 20)))
      : (this.pasteModel.imageUpload(),
        this.pasteModel.iframeSettings.enable && !this.pasteModel.enableXhtml && this.pasteModel.updateValue());
  };
  i.prototype.convertBlobToBase64 = function (e) {
    for (
      var t = e.querySelectorAll('img'),
        n = function (s) {
          var o = t[s].getAttribute('src');
          if (o && o.startsWith('blob')) {
            var r = new Image();
            var p = function () {
              var l = document.createElement('canvas');
              var d = l.getContext('2d');
              l.width = r.width;
              l.height = r.height;
              d.drawImage(r, 0, 0);
              var f = l.toDataURL('image/png');
              t[s].src = f;
              r.removeEventListener('load', p);
            };
            r.src = o;
            r.addEventListener('load', p);
          }
        },
        a = 0;
      a < t.length;
      a++
    )
      n(a);
  };
  i.prototype.destroy = function () {
    if (this.iframeUploadTime) {
      clearTimeout(this.iframeUploadTime);
      this.iframeUploadTime = null;
    }
    this.removeEventListener();
  };
  return i;
})();
var Ge = (function () {
  function i(e, t) {
    this.isNotFromHtml = false;
    this.containsHtml = false;
    this.cropImageData = [];
    this.plainTextContent = '';
    this.parent = e;
    this.locator = t;
    this.renderFactory = this.locator.getService('rendererFactory');
    this.i10n = t.getService('rteLocale');
    this.dialogRenderObj = t.getService('dialogRenderObject');
    this.addEventListener();
    this.isDestroyed = false;
  }
  i.prototype.addEventListener = function () {
    this.nodeSelectionObj = new te(this.parent.inputElement);
    if (!this.parent.isDestroyed) {
      this.parent.on(U, this.pasteClean, this);
      this.parent.on(L, this.bindOnEnd, this);
      this.parent.on(k, this.setCssClass, this);
      this.parent.on(B, this.destroy, this);
      this.parent.on(H, this.docClick, this);
      this.parent.on(q, this.updatePasteCleanupProperty, this);
    }
  };
  i.prototype.destroy = function () {
    if (!this.isDestroyed) {
      if (this.fireFoxUploadTime) {
        clearTimeout(this.fireFoxUploadTime);
        this.fireFoxUploadTime = null;
      }
      if (this.refreshPopupTime) {
        clearTimeout(this.refreshPopupTime);
        this.refreshPopupTime = null;
      }
      if (this.popupCloseTime) {
        clearTimeout(this.popupCloseTime);
        this.popupCloseTime = null;
      }
      if (this.failureTime) {
        clearTimeout(this.failureTime);
        this.failureTime = null;
      }
      this.removeEventListener();
      if (this.popupObj && !this.popupObj.isDestroyed) {
        this.popupObj.destroy();
        this.popupObj = null;
      }
      if (this.uploadObj && !this.uploadObj.isDestroyed) {
        this.uploadObj.destroy();
        this.uploadObj = null;
      }
      if (this.keepRadioButton && !this.keepRadioButton.isDestroyed) {
        this.keepRadioButton.destroy();
        this.keepRadioButton = null;
      }
      if (this.cleanRadioButton && !this.cleanRadioButton.isDestroyed) {
        this.cleanRadioButton.destroy();
        this.cleanRadioButton = null;
      }
      if (this.plainTextRadioButton && !this.plainTextRadioButton.isDestroyed) {
        this.plainTextRadioButton.destroy();
        this.plainTextRadioButton = null;
      }
      this.isDestroyed = true;
      this.plainTextContent = '';
    }
  };
  i.prototype.removeEventListener = function () {
    this.parent.off(U, this.pasteClean);
    this.parent.off(k, this.setCssClass);
    this.parent.off(B, this.destroy);
    this.parent.off(H, this.docClick);
    this.parent.off(L, this.bindOnEnd);
    this.parent.off(q, this.updatePasteCleanupProperty);
  };
  i.prototype.bindOnEnd = function () {
    if (
      this.parent.editorMode === 'HTML' &&
      this.parent.formatter &&
      this.parent.formatter.editorManager &&
      this.parent.contentModule
    ) {
      var e = this.getPasteCleanupModel();
      this.parent.formatter.editorManager.pasteObj = this.pasteObj = new We(this.parent.formatter.editorManager, e);
    }
  };
  i.prototype.getPasteCleanupModel = function () {
    var e = this;
    var t = {
      rteElement: this.parent.element,
      enterKey: this.parent.enterKey,
      rootContainer: this.parent.rootContainer,
      enableXhtml: this.parent.enableXhtml,
      iframeSettings: this.parent.iframeSettings,
      pasteCleanupSettings: this.parent.pasteCleanupSettings,
      insertImageSettings: this.parent.insertImageSettings,
      getInsertImgMaxWidth: function () {
        return e.parent.getInsertImgMaxWidth();
      },
      getDocument: function () {
        return e.contentModule ? e.contentModule.getDocument() : e.parent.contentModule.getDocument();
      },
      getEditPanel: function () {
        return e.contentModule ? e.contentModule.getEditPanel() : e.parent.contentModule.getEditPanel();
      },
      updateValue: function () {
        e.parent.updateValue();
      },
      imageUpload: function () {
        e.imgUploading(e.parent.inputElement);
      },
      getCropImageData: function () {
        return e.getCropImageData();
      },
    };
    return t;
  };
  i.prototype.updatePasteCleanupProperty = function () {
    var e = this.getPasteCleanupModel();
    if (!h(this.pasteObj)) {
      this.pasteObj.updatePasteCleanupModel(e);
    }
  };
  i.prototype.pasteClean = function (e) {
    var t = {
      requestType: 'Paste',
      editorMode: this.parent.editorMode,
      event: e,
    };
    var n = null;
    var a;
    var s = this.parent.insertImageSettings.allowedTypes;
    if (e.args && !h(e.args.clipboardData)) {
      n = e.args.clipboardData.getData('text/html');
      if (e.args.clipboardData.getData('text/plain')) {
        this.plainTextContent = e.args.clipboardData.getData('text/plain');
      }
    }
    if (e.args && n !== null && this.parent.editorMode === 'HTML') {
      var o = this.processHtmlPaste(e, n, t, this.parent.insertImageSettings.allowedTypes, a);
      if (!o) return;
    }
  };
  i.prototype.processHtmlPaste = function (e, t, n, a, s) {
    var o = t;
    var r = true;
    if (t.length === 0) {
      var p = this.handleEmptyHtmlValue(e, t, n, a, s);
      o = p.value;
      r = p.shouldContinue;
      if (!r) return false;
    } else if (t.length > 0) {
      o = this.handleNonEmptyHtmlValue(e, t, n);
    }
    if (o !== null && o !== '') {
      o = o.replace(/<base[^>]*>/g, '');
    }
    this.prepareAndInsertContent(e, o, n);
    return true;
  };
  i.prototype.handleEmptyHtmlValue = function (e, t, n, a, s) {
    var o = new RegExp(/<\/[a-z][\s\S]*>/i);
    var r = e.args.clipboardData.getData('text/plain');
    this.parent.trigger(J, { value: r });
    this.isNotFromHtml = r !== '';
    r = r.replace(/</g, '&lt;');
    r = r.replace(/>/g, '&gt;');
    this.containsHtml = o.test(r);
    this.plainTextContent = r;
    var p = this.pasteObj.extractFileFromClipboard(e);
    if (p) {
      var l = p.name;
      var d = p.name.substring(p.name.lastIndexOf('.'));
      if (this.isInvalidImageType(d, a)) {
        e.args.preventDefault();
        return {
          value: r,
          shouldContinue: false,
        };
      }
    }
    var f = this.processPasteWithImage(e, p, r, n, s, o);
    return f;
  };
  i.prototype.isInvalidImageType = function (e, t) {
    return t.every(function (n) {
      return n.toLowerCase() !== e;
    });
  };
  i.prototype.processPasteWithImage = function (e, t, n, a, s, o) {
    var r = this;
    var p = n;
    this.parent.notify(ie, {
      file: t,
      args: e.args,
      text: p,
      callBack: function (d) {
        s = d;
        typeof s == 'object'
          ? r.parent.formatter.editorManager.execCommand(
              'Images',
              'Image',
              e.args,
              r.imageFormatting.bind(r, a),
              'pasteCleanup',
              s,
              'pasteCleanupModule',
            )
          : (p = s);
      },
    });
    if (!o.test(p)) {
      var l = this.parent.createElement('div');
      l.innerHTML = this.pasteObj.splitBreakLine(p);
      p = l.innerHTML;
    }
    return {
      value: p,
      shouldContinue: true,
    };
  };
  i.prototype.handleNonEmptyHtmlValue = function (e, t, n) {
    var a = this;
    var s = t;
    this.parent.trigger(J, { value: s });
    this.parent.formatter.editorManager.observer.notify(ne, {
      args: e.args,
      text: e.text,
      allowedStylePropertiesArray: this.parent.pasteCleanupSettings.allowedStyleProps,
      callBack: function (o, r, p) {
        n.pasteTableSource = p;
        s = o.trim();
        a.cropImageData = r;
      },
    });
    return s;
  };
  i.prototype.prepareAndInsertContent = function (e, t, n) {
    this.contentModule = this.renderFactory.getRenderer(V.Content);
    var a = this.contentModule.getDocument();
    var s = this.nodeSelectionObj.getRange(a);
    this.saveSelection = this.nodeSelectionObj.save(s, a);
    var o = this.parent.createElement('div');
    o.innerHTML = t;
    this.processUnsupportedImages(o);
    var r = o.innerHTML;
    var p = o.textContent !== '' || !h(o.querySelector('img')) || !h(o.querySelector('table'));
    var l = o.innerHTML;
    this.parent.notify(ae, {
      value: o.innerHTML,
      callBack: function (d) {
        l = d;
      },
    });
    l = se(l, this.parent.element);
    this.handlePasteBasedOnSettings(e, l, n, p);
  };
  i.prototype.processUnsupportedImages = function (e) {
    for (var t = e.querySelectorAll('.e-rte-image-unsupported'), n = 0; n < t.length; n++) {
      t[n].setAttribute('alt', this.i10n.getConstant('unsupportedImage'));
      t[n].classList.remove('e-rte-image-unsupported');
    }
  };
  i.prototype.handlePasteBasedOnSettings = function (e, t, n, a) {
    this.parent.pasteCleanupSettings.prompt && !e.isPlainPaste
      ? a && (e.args.preventDefault(), this.pasteDialog(t, n))
      : this.parent.pasteCleanupSettings.plainText
        ? (e.args.preventDefault(), this.plainFormatting(t, n))
        : this.parent.pasteCleanupSettings.keepFormat || e.isPlainPaste
          ? (e.args.preventDefault(), this.formatting(t, false, n))
          : (e.args.preventDefault(), this.formatting(t, true, n));
  };
  i.prototype.imgUploading = function (e) {
    var t = e.querySelectorAll('.pasteContent_Img');
    this.parent.insertImageSettings.saveUrl && t.length > 0
      ? this.processImagesWithSaveUrl(t)
      : this.parent.insertImageSettings.saveFormat === 'Blob' && this.pasteObj.getBlob(t);
    this.cleanupImageClasses(e, t);
  };
  i.prototype.processImagesWithSaveUrl = function (e) {
    for (var t = [], n = [], a = [], s = 0; s < e.length; s++) {
      var o = e[s].getAttribute('src');
      if (!h(o) && o.split(',')[0].indexOf('base64') >= 0) {
        t.push(o);
        n.push(K('rte_image'));
        a.push(e[s]);
      }
    }
    for (var r = [], s = 0; s < t.length; s++) r.push(this.pasteObj.base64ToFile(t[s], n[s]));
    for (var s = 0; s < r.length; s++) this.uploadMethod(r[s], a[s]);
    if (h(this.parent.insertImageSettings.path) && this.parent.insertImageSettings.saveFormat === 'Blob') {
      this.pasteObj.getBlob(e);
    }
  };
  i.prototype.cleanupImageClasses = function (e, t) {
    for (var n = e.querySelectorAll('.pasteContent_Img'), a = 0; a < n.length; a++) {
      n[a].classList.remove('pasteContent_Img');
      if (n[a].getAttribute('class').trim() === '') {
        t[a].removeAttribute('class');
      }
    }
  };
  i.prototype.toolbarEnableDisable = function (e) {
    if (!this.parent.inlineMode.enable) {
      this.parent.toolbarModule.baseToolbar.toolbarObj.disable(e);
    }
  };
  i.prototype.uploadMethod = function (e, t) {
    this.pasteObj.setImageOpacity(t);
    var n = this.pasteObj.createPopupElement();
    this.createPopupObject(n, t, e);
    this.createUploader(t);
    this.initializeUpload(e);
    this.hideFileSelectWrapper();
  };
  i.prototype.createPopupObject = function (e, t, n) {
    var a = this;
    var s = this.parent.createElement('input', {
      id: this.parent.getID() + '_upload',
      attrs: {
        type: 'File',
        name: 'UploadFiles',
      },
    });
    this.popupObj = new re(e, {
      relateTo: t,
      height: '85px',
      width: '300px',
      content: s,
      viewPortElement: this.parent.inputElement,
      enableRtl: this.parent.enableRtl,
      zIndex: 10001,
      close: function () {
        a.parent.isBlur = false;
        a.popupObj.destroy();
        v(a.popupObj.element);
      },
    });
    this.configurePopupStyles();
    this.schedulePopupRefresh(t, n);
  };
  i.prototype.configurePopupStyles = function () {
    this.popupObj.element.style.display = 'none';
    E([this.popupObj.element], [we, xe]);
    if (!h(this.parent.cssClass)) {
      E([this.popupObj.element], this.parent.cssClass.replace(/\s+/g, ' ').trim().split(' '));
    }
  };
  i.prototype.schedulePopupRefresh = function (e, t) {
    var n = this;
    var a = t.size > 1000000 ? 300 : 100;
    this.refreshPopupTime = setTimeout(function () {
      n.refreshPopup(e, n.popupObj);
    }, a);
  };
  i.prototype.createUploader = function (e) {
    var t = this;
    this.uploadObj = new oe({
      asyncSettings: {
        saveUrl: this.parent.insertImageSettings.saveUrl,
        removeUrl: this.parent.insertImageSettings.removeUrl,
      },
      cssClass: le,
      dropArea: this.parent.inputElement,
      allowedExtensions: this.parent.insertImageSettings.allowedTypes.toString(),
      success: function (n) {
        t.popupClose(t.popupObj, t.uploadObj, e, n);
      },
      uploading: function (n) {
        return t.handleUploading(n, e);
      },
      beforeUpload: function (n) {
        return t.handleBeforeUpload(n);
      },
      failure: function (n) {
        return t.handleFailure(n, e);
      },
      canceling: function () {
        return t.handleCanceling(e);
      },
      selected: function (n) {
        n.cancel = true;
      },
      removing: function () {
        return t.handleRemoving(e);
      },
    });
    this.uploadObj.appendTo(this.popupObj.element.childNodes[0]);
  };
  i.prototype.handleUploading = function (e, t) {
    var n = this;
    if (!this.parent.isServerRendered) {
      this.parent.trigger(pe, e, function (a) {
        a.cancel
          ? (h(t) || v(t), h(n.popupObj.element) || v(n.popupObj.element))
          : (n.parent.inputElement.contentEditable = 'false');
      });
    }
  };
  i.prototype.handleBeforeUpload = function (e) {
    this.parent.trigger(de, e);
    this.toolbarEnableDisable(true);
  };
  i.prototype.handleFailure = function (e, t) {
    var n = this;
    this.failureTime = setTimeout(function () {
      n.uploadFailure(t, n.uploadObj, n.popupObj, e);
    }, 900);
  };
  i.prototype.handleCanceling = function (e) {
    this.parent.inputElement.contentEditable = 'true';
    if (e.nextSibling && e.nextSibling.textContent === ' ') {
      v(e.nextSibling);
    }
    v(e);
    this.popupObj.close();
  };
  i.prototype.handleRemoving = function (e) {
    this.parent.inputElement.contentEditable = 'true';
    if (e.nextSibling && e.nextSibling.textContent === ' ') {
      v(e.nextSibling);
    }
    v(e);
    this.popupObj.close();
  };
  i.prototype.initializeUpload = function (e) {
    var t = [
      {
        name: e.name,
        rawFile: e,
        size: e.size,
        type: e.type,
        status: 'Ready to Upload',
        validationMessages: {
          minSize: '',
          maxSize: '',
        },
        statusCode: '1',
      },
    ];
    this.uploadObj.createFileList(t);
    this.uploadObj.upload(t);
  };
  i.prototype.hideFileSelectWrapper = function () {
    var e = this.popupObj.element.getElementsByClassName('e-file-select-wrap')[0];
    if (this.popupObj.element.getElementsByClassName('e-file-select-wrap')[0]) {
      this.popupObj.element.getElementsByClassName('e-file-select-wrap')[0].style.display = 'none';
    }
    var t = this.popupObj.element.querySelector('.e-rte-dialog-upload .e-file-select-wrap');
    if (t) {
      v(t);
    }
  };
  i.prototype.uploadFailure = function (e, t, n, a) {
    if (!(this.parent && this.parent.isDestroyed)) {
      this.parent.inputElement.contentEditable = 'true';
      v(e);
      this.cleanupPopup(n);
      this.parent.trigger(ue, a);
      this.cleanupUploader(t);
    }
  };
  i.prototype.cleanupPopup = function (e) {
    if (e) {
      this.parent.isBlur = false;
      e.destroy();
      if (!h(e.element)) {
        v(e.element);
      }
    }
  };
  i.prototype.cleanupUploader = function (e) {
    if (e && !e.isDestroyed && e.element) {
      e.destroy();
    }
  };
  i.prototype.popupClose = function (e, t, n, a) {
    this.parent.inputElement.contentEditable = 'true';
    this.prepareEventArgs(a, n);
    this.handleUploadStatus(a, n);
    this.scheduleCleanup(e, t, n);
  };
  i.prototype.prepareEventArgs = function (e, t) {
    e.element = t;
    e.detectImageSource = he.Pasted;
  };
  i.prototype.handleUploadStatus = function (e, t) {
    var n = e.file;
    e.file.statusCode === '2'
      ? this.handleSuccessfulUpload(e, t)
      : e.file.statusCode === '5' && this.handleImageRemoval(e);
  };
  i.prototype.handleSuccessfulUpload = function (e, t) {
    var n = this;
    this.parent.trigger(ce, e, function (a) {
      if (!h(n.parent.insertImageSettings.path)) {
        var s = n.parent.insertImageSettings.path + a.file.name;
        n.updateImageSource(t, s, a.file.name);
      }
    });
  };
  i.prototype.updateImageSource = function (e, t, n) {
    if (!this.parent.inputElement.contains(e) && e.id) {
      var a = this.parent.inputElement.querySelectorAll('#' + e.id);
      this.updateDetachedImages(a, t, n);
    } else {
      e.src = t;
      e.setAttribute('alt', n);
    }
  };
  i.prototype.updateDetachedImages = function (e, t, n) {
    for (var a = 0; a < e.length; a++) {
      var s = e[a];
      if (s && s.style && s.style.opacity === '0.5') {
        s.src = t;
        s.setAttribute('alt', n);
      }
    }
  };
  i.prototype.handleImageRemoval = function (e) {
    this.parent.trigger(ge, e, function (t) {
      if (!h(t.element.src)) {
        t.element.src = '';
      }
    });
  };
  i.prototype.scheduleCleanup = function (e, t, n) {
    var a = this;
    this.popupCloseTime = setTimeout(function () {
      a.cleanupPopup(e);
      a.resetImageOpacity(n);
      a.toolbarEnableDisable(false);
      a.cleanupUploader(t);
    }, 1500);
  };
  i.prototype.resetImageOpacity = function (e) {
    !this.parent.inputElement.contains(e) && (e.id || e.alt)
      ? this.resetDetachedImageOpacity(e)
      : (e.style.opacity = '1');
  };
  i.prototype.resetDetachedImageOpacity = function (e) {
    var t = e.id ? '#' + e.id : '[alt="' + e.alt + '"]';
    if (t)
      for (var n = this.parent.inputElement.querySelectorAll(t), a = 0; a < n.length; a++) {
        var s = n[a];
        if (n[a] && n[a].style && n[a].style.opacity === '0.5') {
          n[a].style.opacity = '1';
        }
      }
  };
  i.prototype.refreshPopup = function (e, t) {
    var n = this.calculateImagePosition(e);
    var a = this.parent.element.offsetTop + this.parent.element.offsetHeight;
    n > a ? this.positionPopupAtTop(t) : this.positionPopupAtImage(t, e);
  };
  i.prototype.calculateImagePosition = function (e) {
    return this.parent.iframeSettings.enable ? this.parent.element.offsetTop + e.offsetTop : e.offsetTop;
  };
  i.prototype.positionPopupAtTop = function (e) {
    e.offsetY = this.parent.iframeSettings.enable ? -30 : -65;
    e.element.style.display = 'block';
  };
  i.prototype.positionPopupAtImage = function (e, t) {
    if (e) {
      e.refreshPosition(t);
      e.element.style.display = 'block';
    }
  };
  i.prototype.imageFormatting = function (e, t) {
    var n = t.elements[0];
    if (!h(t.elements[0].getAttribute('src'))) {
      t.elements[0].classList.add('pasteContent_Img');
    }
    var a = this.parent.createElement('span');
    a.appendChild(t.elements[0]);
    var s = a.innerHTML;
    this.contentModule = this.renderFactory.getRenderer(V.Content);
    var o = this.contentModule.getDocument();
    var r = this.nodeSelectionObj.getRange(o);
    this.saveSelection = this.nodeSelectionObj.save(r, o);
    var p = this.parent.pasteCleanupSettings;
    this.parent.pasteCleanupSettings.prompt
      ? this.pasteDialog(a.innerHTML, e)
      : this.parent.pasteCleanupSettings.plainText
        ? this.plainFormatting(a.innerHTML, e)
        : this.parent.pasteCleanupSettings.keepFormat
          ? this.formatting(a.innerHTML, false, e)
          : this.formatting(a.innerHTML, true, e);
  };
  i.prototype.radioRender = function () {
    this.keepRadioButton = new P({
      label: this.i10n.getConstant('keepFormat'),
      name: 'pasteOption',
      checked: true,
    });
    this.keepRadioButton.isStringTemplate = true;
    var e = this.parent.element.querySelector('#keepFormating');
    this.keepRadioButton.appendTo(e);
    this.cleanRadioButton = new P({
      label: this.i10n.getConstant('cleanFormat'),
      name: 'pasteOption',
    });
    this.cleanRadioButton.isStringTemplate = true;
    var t = this.parent.element.querySelector('#cleanFormat');
    this.cleanRadioButton.appendTo(t);
    this.plainTextRadioButton = new P({
      label: this.i10n.getConstant('plainText'),
      name: 'pasteOption',
    });
    this.plainTextRadioButton.isStringTemplate = true;
    var n = this.parent.element.querySelector('#plainTextFormat');
    this.plainTextRadioButton.appendTo(n);
  };
  i.prototype.selectFormatting = function (e, t, n, a) {
    n ? this.formatting(e, false, t) : a ? this.formatting(e, true, t) : this.plainFormatting(e, t);
  };
  i.prototype.pasteDialog = function (e, t) {
    this.dialogObj = this.dialogRenderObj.render(this.getDialogModel(e, t));
    var n = this.parent.element.querySelector('#' + this.parent.getID() + '_pasteCleanupDialog');
    if (n && n.innerHTML !== '') {
      this.destroyDialog(n);
    }
    if (!n) {
      n = this.parent.createElement('div', { id: this.parent.getID() + '_pasteCleanupDialog' });
      this.parent.rootContainer.appendChild(n);
    }
    this.dialogObj.appendTo(n);
    this.radioRender();
    this.dialogObj.show();
    this.setCssClass({ cssClass: this.parent.getCssClass() });
  };
  i.prototype.getDialogModel = function (e, t) {
    return {
      buttons: [this.getOkButton(e, t), this.getCancelButton()],
      header: this.i10n.getConstant('pasteFormat'),
      content: this.getDialogContent(),
      target: this.parent.element,
      width: '300px',
      height: '265px',
      cssClass: fe,
      isModal: R.isDevice,
      visible: false,
    };
  };
  i.prototype.getOkButton = function (e, t) {
    var n = this;
    return {
      click: function () {
        if (!n.dialogObj.isDestroyed) {
          var a = !!n.parent.element.querySelector('#keepFormating').checked;
          var s = !!n.parent.element.querySelector('#cleanFormat').checked;
          n.closeDialog();
          n.selectFormatting(e, t, a, s);
        }
      },
      buttonModel: {
        isPrimary: true,
        cssClass: 'e-flat ' + me,
        content: this.i10n.getConstant('pasteDialogOk'),
      },
    };
  };
  i.prototype.getCancelButton = function () {
    var e = this;
    return {
      click: function () {
        if (!e.dialogObj.isDestroyed) {
          e.closeDialog();
        }
      },
      buttonModel: {
        cssClass: 'e-flat ' + ve,
        content: this.i10n.getConstant('pasteDialogCancel'),
      },
    };
  };
  i.prototype.closeDialog = function () {
    this.dialogObj.hide();
    var e = this.dialogObj;
    this.dialogRenderObj.close(this.dialogObj);
    this.dialogObj.destroy();
  };
  i.prototype.getDialogContent = function () {
    return (
      this.i10n.getConstant('pasteFormatContent') +
      `<br/><div>
            <div class="e-rte-radio-keep-format">
                <input type="radio" class="` +
      ye +
      `" id="keepFormating"/>
            </div>
            <div class="e-rte-radio-remove-format">
                <input type="radio" class="` +
      Ce +
      `" id="cleanFormat"/>
            </div>
            <div class="e-rte-radio-plain-format">
                <input type="radio" class="` +
      be +
      `" id="plainTextFormat"/>
            </div>
        </div>`
    );
  };
  i.prototype.updateCss = function (e, t) {
    if (e && t.cssClass) {
      h(t.oldCssClass)
        ? e.setProperties({ cssClass: (e.cssClass + ' ' + t.cssClass).trim() })
        : e.setProperties({ cssClass: (e.cssClass.replace(t.oldCssClass, '').trim() + ' ' + t.cssClass).trim() });
    }
  };
  i.prototype.setCssClass = function (e) {
    if (this.popupObj && e.cssClass) {
      if (e.oldCssClass) {
        Se([this.popupObj.element], e.oldCssClass);
      }
      E([this.popupObj.element], e.cssClass);
    }
    this.updateCss(this.dialogObj, e);
    this.updateCss(this.uploadObj, e);
    this.updateCss(this.plainTextRadioButton, e);
    this.updateCss(this.cleanRadioButton, e);
    this.updateCss(this.keepRadioButton, e);
  };
  i.prototype.destroyDialog = function (e) {
    var t = this.parent.element.querySelector('.e-rte-dialog-minheight');
    for (t && v(t); e.firstChild; ) v(e.firstChild);
  };
  i.prototype.docClick = function (e) {
    var t = e.args.target;
    if (
      e.args.target &&
      e.args.target.classList &&
      this.dialogObj &&
      !_e(e.args.target, "[id='" + this.dialogObj.element.id + "']") &&
      !e.args.target.classList.contains('e-toolbar-item')
    ) {
      this.dialogObj.hide();
    }
  };
  i.prototype.formatting = function (e, t, n) {
    var a = this.parent.createElement('div', {
      className: 'pasteContent',
      styles: 'display:inline;',
    });
    if (this.isNotFromHtml && this.containsHtml) {
      e = this.pasteObj.splitBreakLine(e);
    }
    a.innerHTML = e;
    a = this.pasteObj.cleanAppleClass(a);
    a = this.pasteObj.cleanupDeniedTagsAndAttributes(a, t);
    if (this.parent.pasteCleanupSettings.allowedStyleProps !== null) {
      a = this.pasteObj.allowedStyle(a);
    }
    this.saveSelection.restore();
    var s = a.innerHTML;
    if (this.parent.enableHtmlSanitizer) {
      s = a.innerHTML.split('&').join('&amp;');
    }
    a.innerHTML = z(s, this.parent);
    this.pasteObj.setImageClassAndProps(a);
    if (this.pasteObj.hasPictureElement(a)) {
      this.pasteObj.processPictureElement(a);
    }
    if (this.pasteObj.hasContentToPaste(a)) {
      this.handlePastedImagesAndEvents(a, e, n);
    }
  };
  i.prototype.handlePastedImagesAndEvents = function (e, t, n) {
    var a = this.parent.createElement('div');
    a.innerHTML = t;
    var s = this.pasteObj.collectBase64ImageFiles(a);
    this.parent.trigger(
      W,
      {
        value: e.innerHTML,
        filesData: s,
      },
      function (o) {
        t = o.value;
      },
    );
    e.innerHTML = this.parent.addAnchorAriaLabel(t);
    e = this.pasteObj.addTableClass(e, n.pasteTableSource);
    this.execPasteCommand(e, n);
    this.parent.notify(Te, {});
    Ie(this.parent.contentModule.getDocument(), this.parent.inputElement);
    this.pasteObj.removeTempClass();
    this.parent.notify(Oe, {});
    this.pasteObj.cropImageHandler(this.parent.inputElement);
  };
  i.prototype.execPasteCommand = function (e, t) {
    var n = this;
    this.parent.formatter.editorManager.execCommand(
      'inserthtml',
      'pasteCleanup',
      t,
      function (a) {
        T(
          t,
          {
            elements: a.elements,
            imageElements: a.imgElem,
          },
          true,
        );
        n.parent.formatter.onSuccess(n.parent, t);
      },
      e,
      null,
      null,
      this.parent.enterKey,
    );
  };
  i.prototype.getCropImageData = function () {
    return this.cropImageData;
  };
  i.prototype.plainFormatting = function (e, t) {
    var n = this;
    var a = this.parent.createElement('div', { className: 'pasteContent' });
    this.plainTextContent = this.plainTextContent.replace(/</g, '&lt;');
    this.plainTextContent = this.plainTextContent.replace(/>/g, '&gt;');
    var s = z(this.plainTextContent, this.parent);
    var o = this.pasteObj.splitBreakLine(s);
    a.innerHTML = o;
    a.textContent.trim() !== ''
      ? (this.saveSelection.restore(),
        this.parent.trigger(
          W,
          {
            value: a.innerHTML,
            filesData: null,
          },
          function (r) {
            e = r.value;
          },
        ),
        (a.innerHTML = e),
        this.parent.formatter.editorManager.execCommand(
          'inserthtml',
          'pasteCleanup',
          t,
          function (r) {
            T(
              t,
              {
                elements: r.elements,
                imageElements: r.imgElem,
              },
              true,
            );
            n.parent.formatter.onSuccess(n.parent, t);
          },
          a,
          null,
          null,
          this.parent.enterKey,
        ),
        this.pasteObj.removeTempClass())
      : (this.saveSelection.restore(), T(t, { elements: [] }, true), this.parent.formatter.onSuccess(this.parent, t));
  };
  i.prototype.getModuleName = function () {
    return 'pasteCleanup';
  };
  return i;
})();
const ht = {
  mixins: [Ne],
  provide: {
    richtexteditor: [je, Fe, Ae, Ue, Ge, Le, ke],
  },
  props: {
    contentText: { required: true },
    heightValue: { default: '340' },
  },
  methods: {
    showInvalidToast(i) {
      this.showCenterToast(this.trans.get('__JSON__.viewer.toast.error.invalidLink', { name: i }), 'e-toast-danger');
    },
    manageClickLink(i) {
      if (i.attributes && i.attributes.href) {
        let e = i.attributes.href.value;
        if (i.attributes.href.value.charAt(0) === '#') {
          let t = i.attributes.href.value.substring(1);
          let n = $('a[name="' + t + '"]');
          if (n.length == 0) {
            n = $(i.attributes.href.value);
          }
          n.length > 0
            ? n[0].scrollIntoView()
            : this.showInvalidToast(this.trans.get('__JSON__.viewer.toast.error.invalidReference'));
        } else this.checkOriginPath(i.attributes.href.value);
      } else if (!(i.attributes && i.attributes.name)) {
        let e = i.innerHTML;
        this.checkOriginPath(i.innerHTML);
      }
    },
    checkOriginPath(i) {
      if (this.spinnerId) {
        Q(document.getElementById(this.spinnerId));
      }
      axios
        .post('api/interactive_file/checkFileOriginPath', { origin_path: i })
        .then((e) => {
          w(document.getElementById(this.spinnerId));
          let t = e.data.file;
          if (e.data.file)
            if (this.fileIsViewable(e.data.file)) {
              let n = this.dataViewer && this.dataViewer.uuid ? this.dataViewer.uuid : null;
              this.fileGoToViewer(e.data.file, false, n);
              if (typeof this.toggleTableOfContent == 'function') {
                this.toggleTableOfContent(false);
              }
            } else
              I.$emit('showPanel', {
                panelDroite: true,
                refObjet: e.data.file.id,
                typeObject: 'files',
              });
          else this.showInvalidToast(i);
        })
        .catch((e) => {
          console.error(e);
          this.showInvalidToast(i);
          w(document.getElementById(this.spinnerId));
        });
    },
  },
};
if (!Array.prototype.find) {
  Array.prototype.find = function (i) {
    if (this === null) throw new TypeError('Array.prototype.find called on null or undefined');
    if (typeof i != 'function') throw new TypeError('predicate must be a function');
    for (var e = Object(this), t = e.length >>> 0, n = arguments[1], a, s = 0; s < t; s++) {
      a = e[s];
      if (i.call(n, a, s, e)) return a;
    }
  };
}
if (window && typeof window.CustomEvent != 'function') {
  let i = function (e, t) {
    t = t || {
      bubbles: false,
      cancelable: false,
      detail: void 0,
    };
    var n = document.createEvent('CustomEvent');
    n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
    return n;
  };
  if (typeof window.Event < 'u') {
    i.prototype = window.Event.prototype;
  }
  window.CustomEvent = i;
}
const Ke = {
  mixins: [Be],
  components: {
    supplierNomenclature: He,
    colorValue: qe,
    editableColumnTemplate: Ve,
    simpleImage: Je,
    headerTemplate: Y,
  },
  props: {
    idItemsSelected: {
      required: false,
      default: function () {
        return [];
      },
    },
    objectType: { required: true },
    numberItemsMax: {
      required: false,
      default: 9999,
    },
    supplementaryData: {
      required: false,
      default() {
        return {};
      },
    },
    showSystematicReplacement: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalSelectionItems'),
      listItems: [],
      animationSettings: { effect: 'None' },
      promptWidth: '1300px',
      promptHeight: '700px',
      toolbar: [
        'Search',
        'ColumnChooser',
        {
          id: 'excelExport',
          prefixIcon: 'sf-icon--excel-export-',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.excelExport'),
        },
        {
          id: 'csvExport',
          prefixIcon: 'sf-icon-csv-export',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.csvExport'),
        },
        {
          id: 'resetFilter',
          prefixIcon: 'sf-icon-filter-05-wf',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.resetFilter'),
        },
        {
          id: 'autofitColumns',
          prefixIcon: 'sf-icon-arrow-expand',
          tooltipText: translate.get('__JSON__.main.grid.toolbar.autofitColumns'),
        },
        {
          id: 'selectionToolbarModalSelectionItem',
          text: translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }),
          disabled: true,
        },
      ],
      selectionModuleGrid: { persistSelectedData: [] },
    };
  },
  computed: {
    showParent() {
      return !!(this.listItems.filter((i) => i.parent).length && this.supplementaryData.type === 'docmod');
    },
    showQuantity() {
      return (
        this.supplementaryData.type === 'docmod' ||
        this.supplementaryData.type === 'nomenclatures' ||
        this.supplementaryData.type === 'instructions'
      );
    },
    showNomenclatureDatas() {
      return this.supplementaryData.type === 'nomenclatures';
    },
  },
  methods: {
    inputChangedQuantity(i) {
      if (i.fullData.quantity < 0) {
        i.fullData.quantity = 0;
        i.newEditedData = 0;
      }
      if (i.fullData.maxQuantity && i.fullData.quantity > i.fullData.maxQuantity) {
        i.fullData.quantity = i.fullData.maxQuantity;
        i.newEditedData = i.fullData.quantity;
      }
      if (i.fullData.quantity > 0) {
        let e = this.$refs.grid.getRowIndexByPrimaryKey(i.fullData.uniqueId);
        if (e != -1) {
          setTimeout(() => {
            this.$refs.grid.selectRows([e]);
          }, 1);
        }
      }
      this.updateItems(i);
    },
    recordDoubleClickOverride(i) {
      if (i.target && i.target.tagName === 'INPUT') {
        i.cancel = true;
        return;
      }
      if (i.column.field !== 'image') {
        this.recordDoubleClick(i);
      }
    },
    closeModal() {
      this.$refs.modalAddItem.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    rowSelectingCheck(i) {
      this.rowSelecting(i);
      if (this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length + 1 > this.numberItemsMax) {
        this.numberItemsMax == 1 &&
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length !== this.listItems.length
          ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
          : ((i.cancel = true),
            this.showCenterToast(
              this.trans.get('__JSON__.items.toast.error.maxSelection', { number: this.numberItemsMax }),
              'e-toast-danger',
            ));
      }
    },
    selectItem() {
      let i = this.$refs.grid.getSelectedRecords();
      i.length
        ? this.$emit('itemSelected', i)
        : this.showCenterToast(this.trans.get('__JSON__.nomenclatures.toast.error.selectItem'), 'e-toast-info');
    },
    updateItems(i) {
      let e = this.listItems.find((n) => n.id === i.fullData.id && n.api_prefix === i.fullData.api_prefix);
      let t = this.listItems.findIndex((n) => n.id === i.fullData.id && n.api_prefix === i.fullData.api_prefix);
      if (e && t != -1) {
        e[i.editedData] = i.newEditedData;
        this.listItems.splice(t, 1, e);
        this.$refs.grid.refresh();
      }
    },
  },
  watch: {
    'selectionModuleGrid.persistSelectedData': {
      deep: true,
      handler(i) {
        let e = this.$refs.grid.$el.querySelector('#selectionToolbarModalSelectionItem');
        if (e && e.firstElementChild) {
          let t = e.firstElementChild;
          i
            ? (t.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: i.length }))
            : (t.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }));
        }
      },
    },
  },
  mounted() {
    Me({ target: document.getElementById('spinnerModalSelectionItem') });
    if (this.$refs.grid) {
      let i = this.$refs.grid.$el.querySelector('#selectionToolbarModalSelectionItem');
      if (i && i.firstElementChild) {
        let e = i.firstElementChild;
        i.firstElementChild.style.color = 'black';
        i.firstElementChild.style['font-size'] = '12px';
        this.selectionModuleGrid = this.$refs.grid.ej2Instances.selectionModule;
      }
    }
    Q(document.getElementById('spinnerModalSelectionItem'));
    axios
      .get('api/items/modalSelection', { params: { supplementaryData: this.supplementaryData } })
      .then((i) => {
        w(document.getElementById('spinnerModalSelectionItem'));
        i.data.items.forEach((e) => {
          e.uniqueId = UUID.generate();
          let t = '';
          if (e.manufacturerReference) {
            t = e.manufacturerReference;
          }
          if (e.listReferences) {
            if (t !== '') {
              t += ' | ';
            }
            t += e.listReferences.split('%!').join(' | ');
          }
          let n = '';
          if (e.manufacturerDesignation) {
            n = e.manufacturerDesignation;
          }
          if (e.listSuppliers) {
            if (n !== '') {
              n += ' | ';
            }
            n += e.listSuppliers.split('%!').join(' | ');
          }
          if (!e.quantity) {
            e.quantity = 0;
          }
          e.referenceNames = t;
          e.supplierNames = n;
          e.nomenclatureComment = null;
          e.nomenclatureMonitored = false;
          if (!this.idItemsSelected.includes(e.id)) {
            this.listItems.push(e);
          }
        });
        this.listItems = [...this.listItems];
      })
      .catch((i) => {
        console.error(i);
        w(document.getElementById('spinnerModalSelectionItem'));
        this.showCenterToast(this.trans.get('__JSON__.items.toast.error.get'), 'e-toast-danger');
      });
  },
};
const Qe = { class: 'e-footer-content mt-4' };
function Xe(i, e, t, n, a, s) {
  const o = m('headerTemplate');
  const r = m('e-column');
  const p = m('e-columns');
  const l = m('supplierNomenclature');
  const d = m('colorValue');
  const f = m('editableColumnTemplate');
  const b = m('simple-image');
  const D = m('ejs-grid');
  const S = m('ejs-button');
  const C = m('ejs-dialog');
  O();
  return N('div', null, [
    u(
      C,
      {
        ref: 'modalAddItem',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: a.animationSettings,
        showCloseIcon: true,
        close: s.onModalClose,
        width: a.promptWidth,
        height: a.promptHeight,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: g(() => [
          u(o, { title: i.trans.get('__JSON__.items.content.selectItem') }, null, 8, ['title']),
        ]),
        templateContent: g(() => [
          y('div', null, [
            e[0] || (e[0] = y('div', { id: 'spinnerModalSelectionItem' }, null, -1)),
            y('div', null, [
              u(
                D,
                {
                  dataSource: a.listItems,
                  id: 'modalSelectionItemGrid',
                  enablePersistence: false,
                  created: i.onGridCreate,
                  rowSelecting: s.rowSelectingCheck,
                  ref: i.gridSettings.ref,
                  actionBegin: i.actionBegin,
                  actionComplete: i.actionComplete,
                  allowExcelExport: i.gridSettings.allowExcelExport,
                  allowFiltering: i.gridSettings.allowFiltering,
                  allowPaging: i.gridSettings.allowPaging,
                  allowReordering: i.gridSettings.allowReordering,
                  allowResizing: i.gridSettings.allowResizing,
                  allowRowDragAndDrop: false,
                  allowSelection: i.gridSettings.allowSelection,
                  allowSorting: i.gridSettings.allowSorting,
                  clipMode: i.gridSettings.clipMode,
                  dataBound: i.dataBound,
                  enableHover: i.gridSettings.enableHover,
                  filterSettings: i.gridSettings.filterSettings,
                  height: i.gridSettings.height,
                  pageSettings: i.gridSettings.pageSettingsModal,
                  rowDragStart: i.rowDragStart,
                  rowDropSettings: i.gridSettings.rowDropSettings,
                  rowHeight: i.gridSettings.rowHeight,
                  searchSettings: i.gridSettings.searchSettings,
                  selectionSettings: i.gridSettings.selectionSettingsCheckBoxOnly,
                  showColumnChooser: i.gridSettings.showColumnChooser,
                  toolbar: a.toolbar,
                  toolbarClick: i.toolbarClick,
                },
                {
                  templateSupplierReference: g(({ data: c }) => [
                    u(
                      l,
                      {
                        manufacturer: 'manufacturerReference',
                        list: 'listReferences',
                        data: c,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateSupplierDesignation: g(({ data: c }) => [
                    u(
                      l,
                      {
                        manufacturer: 'manufacturerDesignation',
                        list: 'listSuppliers',
                        data: c,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateStorageUnit: g(({ data: c }) => [
                    u(
                      d,
                      {
                        colorObjectName: 'storage_unit',
                        data: c,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateSupplyUnit: g(({ data: c }) => [
                    u(
                      d,
                      {
                        colorObjectName: 'supply_unit',
                        data: c,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  templateQuantity: g(({ data: c }) => [
                    u(
                      f,
                      {
                        isEditablePermission: true,
                        type: c.item_type === 2 ? 'float' : 'integer',
                        inputChanged: s.inputChangedQuantity,
                        editedData: 'quantity',
                        updateGrid: false,
                        data: c,
                      },
                      null,
                      8,
                      ['type', 'inputChanged', 'data'],
                    ),
                  ]),
                  templateSystematicReplacement: g(({ data: c }) => [
                    u(
                      f,
                      {
                        isEditablePermission: true,
                        type: 'boolean',
                        inputChanged: s.updateItems,
                        editedData: 'systematic_replacement',
                        updateGrid: false,
                        data: c,
                      },
                      null,
                      8,
                      ['inputChanged', 'data'],
                    ),
                  ]),
                  templateNomenclatureComment: g(({ data: c }) => [
                    u(
                      f,
                      {
                        type: 'text',
                        inputChanged: s.updateItems,
                        editedData: 'nomenclatureComment',
                        isEditablePermission: true,
                        updateGrid: true,
                        data: c,
                      },
                      null,
                      8,
                      ['inputChanged', 'data'],
                    ),
                  ]),
                  templateNomenclatureMonitored: g(({ data: c }) => [
                    u(
                      f,
                      {
                        type: 'boolean',
                        inputChanged: s.updateItems,
                        editedData: 'nomenclatureMonitored',
                        isEditablePermission: c.item_type !== 2,
                        updateGrid: true,
                        data: c,
                      },
                      null,
                      8,
                      ['inputChanged', 'isEditablePermission', 'data'],
                    ),
                  ]),
                  templateImage: g(({ data: c }) => [
                    u(
                      b,
                      {
                        'url-field': 'urlImage',
                        data: c,
                      },
                      null,
                      8,
                      ['data'],
                    ),
                  ]),
                  default: g(() => [
                    u(p, null, {
                      default: g(() => [
                        u(r, {
                          type: 'checkbox',
                          textAlign: 'Center',
                          allowResizing: false,
                          allowReordering: false,
                          allowFiltering: false,
                          showInColumnChooser: false,
                          field: 'checkbox',
                          allowEditing: false,
                        }),
                        u(r, {
                          field: 'uniqueId',
                          isPrimaryKey: true,
                          type: 'number',
                          allowEditing: false,
                          visible: false,
                          showInColumnChooser: false,
                        }),
                        u(
                          r,
                          {
                            field: 'id',
                            headerText: i.trans.get('__JSON__.model.value.id'),
                            type: 'number',
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        u(
                          r,
                          {
                            allowResizing: false,
                            allowEditing: false,
                            allowFiltering: false,
                            allowSorting: false,
                            template: 'templateImage',
                            editTemplate: 'templateImage',
                            headerText: i.trans.get('__JSON__.nomenclatures.value.image'),
                            width: '102',
                            field: 'image',
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        u(
                          r,
                          {
                            field: 'parent',
                            headerText: i.trans.get('__JSON__.model.value.parent'),
                            filter: i.gridSettings.filterWithoutCheckbox,
                            visible: s.showParent,
                            showInColumnChooser: false,
                            allowEditing: false,
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'visible', 'sortComparer'],
                        ),
                        u(
                          r,
                          {
                            field: 'code',
                            headerText: i.trans.get('__JSON__.model.value.code'),
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            filter: i.gridSettings.filterWithoutCheckbox,
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        u(
                          r,
                          {
                            field: 'designation',
                            headerText: i.trans.get('__JSON__.model.value.designation'),
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            filter: i.gridSettings.filterWithoutCheckbox,
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        u(
                          r,
                          {
                            field: 'item_type_name',
                            headerText: i.trans.get('__JSON__.model.value.type'),
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            filter: i.gridSettings.filterExcel,
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        u(
                          r,
                          {
                            field: 'quantity',
                            headerText: i.trans.get('__JSON__.nomenclatures.value.quantity'),
                            type: 'number',
                            template: 'templateQuantity',
                            visible: s.showQuantity,
                            showInColumnChooser: false,
                          },
                          null,
                          8,
                          ['headerText', 'visible'],
                        ),
                        u(
                          r,
                          {
                            field: 'systematic_replacement',
                            headerText: i.trans.get('__JSON__.preReservations.value.systematic_replacement'),
                            type: 'number',
                            template: 'templateSystematicReplacement',
                            visible: t.showSystematicReplacement,
                            showInColumnChooser: false,
                          },
                          null,
                          8,
                          ['headerText', 'visible'],
                        ),
                        u(
                          r,
                          {
                            field: 'nomenclatureComment',
                            headerText: i.trans.get('__JSON__.model.value.comment'),
                            type: 'string',
                            template: 'templateNomenclatureComment',
                            visible: s.showNomenclatureDatas,
                            showInColumnChooser: false,
                          },
                          null,
                          8,
                          ['headerText', 'visible'],
                        ),
                        u(
                          r,
                          {
                            field: 'nomenclatureMonitored',
                            headerText: i.trans.get('__JSON__.nomenclatures.value.will_be_monitored'),
                            type: 'boolean',
                            template: 'templateNomenclatureMonitored',
                            visible: s.showNomenclatureDatas,
                            showInColumnChooser: false,
                          },
                          null,
                          8,
                          ['headerText', 'visible'],
                        ),
                        u(
                          r,
                          {
                            field: 'storage_unit_name',
                            headerText: i.trans.get('__JSON__.items.content.storage_unit'),
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            filter: i.gridSettings.filterExcel,
                            template: 'templateStorageUnit',
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        u(
                          r,
                          {
                            field: 'supply_unit_name',
                            headerText: i.trans.get('__JSON__.items.content.supply_unit'),
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            filter: i.gridSettings.filterExcel,
                            template: 'templateSupplyUnit',
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        u(
                          r,
                          {
                            field: 'description',
                            headerText: i.trans.get('__JSON__.model.value.description'),
                            filter: i.gridSettings.filterExcel,
                            allowEditing: false,
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                          },
                          null,
                          8,
                          ['headerText', 'filter', 'sortComparer'],
                        ),
                        u(
                          r,
                          {
                            field: 'referenceNames',
                            filter: i.gridSettings.filterExcel,
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            headerText: i.trans.get('__JSON__.items.value.ref_supplier'),
                            template: 'templateSupplierReference',
                            width: i.gridSettings.extraLargeWidth,
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['filter', 'sortComparer', 'headerText', 'width'],
                        ),
                        u(
                          r,
                          {
                            field: 'supplierNames',
                            filter: i.gridSettings.filterExcel,
                            type: 'string',
                            sortComparer: i.sortComparerNaturalOrder,
                            headerText: i.trans.get('__JSON__.items.value.supplier'),
                            template: 'templateSupplierDesignation',
                            width: i.gridSettings.extraLargeWidth,
                            allowEditing: false,
                          },
                          null,
                          8,
                          ['filter', 'sortComparer', 'headerText', 'width'],
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                [
                  'dataSource',
                  'created',
                  'rowSelecting',
                  'actionBegin',
                  'actionComplete',
                  'allowExcelExport',
                  'allowFiltering',
                  'allowPaging',
                  'allowReordering',
                  'allowResizing',
                  'allowSelection',
                  'allowSorting',
                  'clipMode',
                  'dataBound',
                  'enableHover',
                  'filterSettings',
                  'height',
                  'pageSettings',
                  'rowDragStart',
                  'rowDropSettings',
                  'rowHeight',
                  'searchSettings',
                  'selectionSettings',
                  'showColumnChooser',
                  'toolbar',
                  'toolbarClick',
                ],
              ),
            ]),
            y('div', Qe, [
              y('span', null, [
                u(
                  S,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: s.closeModal,
                  },
                  {
                    default: g(() => [x(M(i.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                u(
                  S,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: s.selectItem,
                  },
                  {
                    default: g(() => [x(M(i.trans.get('__JSON__.main.modal.button.select')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ['animationSettings', 'close', 'width', 'height'],
    ),
  ]);
}
const ct = X(Ke, [['render', Xe]]);
const $e = {
  mixins: [ze],
  components: {
    DocModuleEditor: De(
      Ee(() =>
        Pe(
          () => import('./BxIu9x40.js'),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
          ]),
        ),
      ),
    ),
    headerTemplate: Y,
  },
  props: { file: { required: true } },
  data() {
    let i = UUID.generate();
    return {
      htmlInput: '',
      fields: {
        text: 'content',
        value: 'index',
      },
      htmlText: [],
      animationSettings: { effect: 'None' },
      promptWidth: '1000px',
      pdfHeight: '580px',
      placeholder: this.trans.get('__JSON__.viewer.docModule.modal.selectIndex'),
      pagesInText: '',
      pages: [],
      fileContent: null,
      hasReturn: false,
      dataViewer: {
        id: this.file.id,
        extension: 'DOCMOD',
        uuid: i,
      },
    };
  },
  mounted() {
    axios
      .get('api/interactive_file/' + this.dataViewer.id + '/json')
      .then((i) => {
        this.fileContent = i.data.content;
        this.hasReturn = true;
      })
      .catch((i) => {
        console.error(i);
        this.hasReturn = true;
        this.showCenterToast(this.trans.get('__JSON__.viewer.toast.error.interactiveFileJson'), 'e-toast-danger');
      });
    I.$on('currentListOfIndexes', this.currentIndexDocModule);
  },
  watch: {
    pagesInText: {
      handler() {
        this.managePageSelection(this.pagesInText);
      },
    },
  },
  methods: {
    select(i) {
      I.$emit('goToSelectedIndex', i.itemData.index);
    },
    currentIndexDocModule(i) {
      let e = [];
      i.forEach((t) => {
        if (t.content.length > 1) {
          e.push(t);
        }
      });
      this.htmlText = e;
    },
    onIndexClicked(i) {
      this.$emit('onIndexClicked', i);
    },
    closeModal() {
      this.$refs.modalSelectionPages.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    selectPage() {
      this.$emit('pagesSelected', this.pages);
    },
  },
  beforeUnmount() {
    I.$off('currentListOfIndexes', this.currentIndexDocModule);
  },
};
const Ye = { style: { height: '630px' } };
const Ze = {
  key: 0,
  class: 'e-input-group data fcol',
  style: { 'min-width': '150px' },
};
const et = { class: 'e-footer-content' };
function tt(i, e, t, n, a, s) {
  const o = m('headerTemplate');
  const r = m('ejs-combobox');
  const p = m('DocModuleEditor');
  const l = m('ejs-button');
  const d = m('ejs-dialog');
  O();
  return N('div', null, [
    u(
      d,
      {
        ref: 'modalSelectionPages',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: a.animationSettings,
        showCloseIcon: true,
        close: s.onModalClose,
        width: a.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: g(() => [
          u(o, { title: i.trans.get('__JSON__.viewer.docModule.modal.selectIndex') }, null, 8, ['title']),
        ]),
        templateContent: g(() => [
          y('div', Ye, [
            a.fileContent
              ? (O(),
                N('div', Ze, [
                  a.htmlText.length > 0
                    ? (O(),
                      Re(
                        r,
                        {
                          key: 0,
                          ref: 'indexFilter',
                          id: 'combobox',
                          dataSource: a.htmlText,
                          width: '300px',
                          fields: a.fields,
                          modelValue: a.htmlInput,
                          'onUpdate:modelValue': e[0] || (e[0] = (f) => (a.htmlInput = f)),
                          placeholder: a.placeholder,
                          select: s.select,
                        },
                        null,
                        8,
                        ['dataSource', 'fields', 'modelValue', 'placeholder', 'select'],
                      ))
                    : G('', true),
                  u(
                    p,
                    {
                      ref: 'docModuleEditMod',
                      contentText: a.fileContent,
                      dataViewer: a.dataViewer,
                      getContent: false,
                      enabled: false,
                      highlightIndex: true,
                      'height-value': 500,
                      onOnIndexClicked: s.onIndexClicked,
                    },
                    null,
                    8,
                    ['contentText', 'dataViewer', 'onOnIndexClicked'],
                  ),
                ]))
              : G('', true),
            y('div', et, [
              y('span', null, [
                u(
                  l,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: s.closeModal,
                  },
                  {
                    default: g(() => [x(M(i.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                u(
                  l,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: s.selectPage,
                  },
                  {
                    default: g(() => [x(M(i.trans.get('__JSON__.main.modal.button.select')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      },
      8,
      ['animationSettings', 'close', 'width'],
    ),
  ]);
}
const gt = X($e, [
  ['render', tt],
  ['__scopeId', 'data-v-41e854b5'],
]);
export { ct as M, gt as a, ht as r };
