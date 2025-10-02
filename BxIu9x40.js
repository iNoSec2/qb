const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['chunks/V-EUEiXi.js', 'assets/app-BjImoLrr.js', 'css/CMUvL9X7.css', 'css/CQE2eH-I.css']),
) => i.map((i) => d[i]);
import {
  _ as R,
  r as p,
  c as B,
  o as _,
  a as b,
  w as y,
  b as w,
  E as C,
  t as P,
  d as J,
  v as G,
  e as N,
  k as K,
  p as U,
  s as D,
  i as v,
  f as M,
  g as k,
  n as Y,
  D as X,
  aL as Z,
  aM as ee,
  aN as te,
  b3 as V,
} from '../assets/app-BjImoLrr.js';
import { m as ie, M as ne } from './zC887B9y.js';
import { c as oe } from './DvWiUwH6.js';
import { h as H } from './CKKuZvVl.js';
import { M as le, a as se, r as re } from './B4PstBc0.js';
import { g as ae } from './D9nDGEOM.js';
import { M as de } from './B5OkKPxd.js';
import { V as ce } from './C3YRlhOp.js';
import { g as ue, s as he } from './D_eyCAsX.js';
import ge from './DEdfVzPD.js';
/* empty css                    */
import './CIZo99Uw.js';
import './CstnyyMp.js';
import './DrOYtW4t.js';
import './BWJp0flw.js';
import './D6qTVqbk.js';
import './A0nBLeas.js';
import './CLQ8a77M.js';
import './DzLe_4Zq.js';
import './JzGXi_4H.js';
import './SUr2wc-1.js';
import './DmX3Ojbe.js';
import './Brc4hCJ1.js';
import './BKAIn2gq.js';
import './CUvLZwvz.js';
/* empty css        */
import './DF3-5v4V.js';
import './CeaU_JMC.js';
import './ZS-VIFna.js';
import './BzXjulcJ.js';
import './BCTXnxKj.js';
import './Nw-Fho2_.js';
import './BpLTBrfQ.js';
import './DZOApFs4.js';
import './CHw12MFN.js';
import './sKBcFuym.js';
import './H3zXViHv.js';
const fe = {
  mixins: [oe],
  components: { headerTemplate: H },
  props: {
    code: { required: true },
    dataViewerUuid: { required: true },
    target: { default: true },
    listLinked: { required: true },
  },
  data() {
    return {
      comboboxLinkId: 'comboboxLink' + this.dataViewerUuid,
      modalButtonClose: [
        {
          click: this.closeModal,
          buttonModel: {
            content: 'Close',
            isPrimary: false,
          },
        },
      ],
      animationSettings: { effect: 'None' },
      showCloseIcon: false,
      promptWidth: '400px',
      fields: {
        text: 'title',
        iconCss: 'iconCss',
        value: 'uniqueId',
      },
      fileLinkId: null,
    };
  },
  methods: {
    comboxBox() {
      return this.getSyncfusionInstance(this.comboboxLinkId, 'filtering');
    },
    onModalClose() {
      this.$emit('close');
    },
    closeModal() {
      this.$refs.modalSelectLink.hide();
    },
    filtering(o) {
      this.filterCombobox(o, this.listLinked, 'title');
    },
    selectFileForCentralPanels(o) {
      if (o.itemData) {
        o.itemData.searchForPano
          ? this.centralPanelsStore.addingCentralPanels({
              centralPanelType: 'fileViewer',
              centralPanelData: {
                comeFromUuid: this.dataViewerUuid,
                getOnlyFile: false,
                fileId: o.itemData.id,
                hotSpotPanoId: o.itemData.searchForPano,
              },
            })
          : this.centralPanelsStore.addingCentralPanels({
              centralPanelType: 'fileViewer',
              centralPanelData: {
                comeFromUuid: this.dataViewerUuid,
                getOnlyFile: false,
                fileId: o.itemData.id,
                tag: this.code,
              },
            });
      }
      this.closeModal();
    },
  },
};
function pe(o, e, i, t, n, l) {
  const s = p('headerTemplate');
  const r = p('ejs-combobox');
  const a = p('ejs-dialog');
  _();
  return B('div', null, [
    b(
      a,
      {
        ref: 'modalSelectLink',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: n.animationSettings,
        showCloseIcon: n.showCloseIcon,
        target: i.target,
        close: l.onModalClose,
        width: n.promptWidth,
        allowDragging: true,
        isModal: true,
        visible: true,
        buttons: n.modalButtonClose,
      },
      {
        headerTemplate: y(() => [
          b(s, { title: o.trans.get('__JSON__.viewer.pdf.main.fileSelect') }, null, 8, ['title']),
        ]),
        templateContent: y(() => [
          w('div', null, [
            b(
              r,
              {
                id: n.comboboxLinkId,
                dataSource: i.listLinked,
                modelValue: n.fileLinkId,
                'onUpdate:modelValue': e[0] || (e[0] = (c) => (n.fileLinkId = c)),
                ref: 'comboboxLink',
                fields: n.fields,
                placeholder: o.trans.get('__JSON__.viewer.pdf.main.searchLink'),
                onSelect: l.selectFileForCentralPanels,
                onFiltering: l.filtering,
                autofill: true,
                allowFiltering: true,
                allowCustom: false,
                popupWidth: 'fit-content',
              },
              null,
              8,
              ['id', 'dataSource', 'modelValue', 'fields', 'placeholder', 'onSelect', 'onFiltering'],
            ),
          ]),
        ]),
        _: 1,
      },
      8,
      ['animationSettings', 'showCloseIcon', 'target', 'close', 'width', 'buttons'],
    ),
  ]);
}
const me = R(fe, [
  ['render', pe],
  ['__scopeId', 'data-v-5fb880cd'],
]);
class q {
  constructor(e) {
    this.tribute = e;
    this.tribute.events = this;
  }
  static keys() {
    return [
      {
        key: 9,
        value: 'TAB',
      },
      {
        key: 8,
        value: 'DELETE',
      },
      {
        key: 13,
        value: 'ENTER',
      },
      {
        key: 27,
        value: 'ESCAPE',
      },
      {
        key: 32,
        value: 'SPACE',
      },
      {
        key: 38,
        value: 'UP',
      },
      {
        key: 40,
        value: 'DOWN',
      },
    ];
  }
  bind(e) {
    e.boundKeydown = this.keydown.bind(e, this);
    e.boundKeyup = this.keyup.bind(e, this);
    e.boundInput = this.input.bind(e, this);
    e.addEventListener('keydown', e.boundKeydown, false);
    e.addEventListener('keyup', e.boundKeyup, false);
    e.addEventListener('input', e.boundInput, false);
  }
  unbind(e) {
    e.removeEventListener('keydown', e.boundKeydown, false);
    e.removeEventListener('keyup', e.boundKeyup, false);
    e.removeEventListener('input', e.boundInput, false);
    delete e.boundKeydown;
    delete e.boundKeyup;
    delete e.boundInput;
  }
  keydown(e, i) {
    if (e.shouldDeactivate(i)) {
      e.tribute.isActive = false;
      e.tribute.hideMenu();
    }
    let t = this;
    e.commandEvent = false;
    q.keys().forEach((n) => {
      if (n.key === i.keyCode) {
        e.commandEvent = true;
        e.callbacks()[n.value.toLowerCase()](i, t);
      }
    });
  }
  input(e, i) {
    e.inputEvent = true;
    e.keyup(e, i);
  }
  click(e, i) {
    let t = e.tribute;
    if (e.tribute.menu && e.tribute.menu.contains(i.target)) {
      let n = i.target;
      for (i.preventDefault(), i.stopPropagation(); n.nodeName.toLowerCase() !== 'li'; ) {
        n = n.parentNode;
        if (!n || n === e.tribute.menu) throw new Error('cannot find the <li> container for the click');
      }
      e.tribute.selectItemAtIndex(n.getAttribute('data-index'), i);
      e.tribute.hideMenu();
    } else if (e.tribute.current.element && !e.tribute.current.externalTrigger) {
      e.tribute.current.externalTrigger = false;
      setTimeout(() => e.tribute.hideMenu());
    }
  }
  keyup(e, i) {
    if (e.inputEvent) {
      e.inputEvent = false;
    }
    e.updateSelection(this);
    if (i.keyCode !== 27) {
      if (!e.tribute.allowSpaces && e.tribute.hasTrailingSpace) {
        e.tribute.hasTrailingSpace = false;
        e.commandEvent = true;
        e.callbacks().space(i, this);
        return;
      }
      if (!e.tribute.isActive)
        if (e.tribute.autocompleteMode) e.callbacks().triggerChar(i, this, '');
        else {
          let t = e.getKeyCode(e, this, i);
          if (isNaN(t) || !t) return;
          let n = e.tribute.triggers().find((l) => l.charCodeAt(0) === t);
          if (typeof n < 'u') {
            e.callbacks().triggerChar(i, this, n);
          }
        }
      if (!(e.tribute.current.mentionText.length < e.tribute.current.collection.menuShowMinLength)) {
        if (
          ((e.tribute.current.trigger || e.tribute.autocompleteMode) && e.commandEvent === false) ||
          (e.tribute.isActive && i.keyCode === 8)
        ) {
          e.tribute.showMenuFor(this, true);
        }
      }
    }
  }
  shouldDeactivate(e) {
    if (!this.tribute.isActive) return false;
    if (this.tribute.current.mentionText.length === 0) {
      let i = false;
      q.keys().forEach((t) => {
        if (e.keyCode === t.key) {
          i = true;
        }
      });
      return !i;
    }
    return false;
  }
  getKeyCode(e, i, t) {
    let n = e.tribute;
    let l = e.tribute.range.getTriggerInfo(
      false,
      e.tribute.hasTrailingSpace,
      true,
      e.tribute.allowSpaces,
      e.tribute.autocompleteMode,
    );
    return l ? l.mentionTriggerChar.charCodeAt(0) : false;
  }
  updateSelection(e) {
    this.tribute.current.element = e;
    let i = this.tribute.range.getTriggerInfo(
      false,
      this.tribute.hasTrailingSpace,
      true,
      this.tribute.allowSpaces,
      this.tribute.autocompleteMode,
    );
    if (i) {
      this.tribute.current.selectedPath = i.mentionSelectedPath;
      this.tribute.current.mentionText = i.mentionText;
      this.tribute.current.selectedOffset = i.mentionSelectedOffset;
    }
  }
  callbacks() {
    return {
      triggerChar: (e, i, t) => {
        let n = this.tribute;
        this.tribute.current.trigger = t;
        let l = this.tribute.collection.find((s) => s.trigger === t);
        this.tribute.current.collection = l;
        if (
          this.tribute.current.mentionText.length >= this.tribute.current.collection.menuShowMinLength &&
          this.tribute.inputEvent
        ) {
          this.tribute.showMenuFor(i, true);
        }
      },
      enter: (e, i) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e.preventDefault();
          e.stopPropagation();
          setTimeout(() => {
            this.tribute.selectItemAtIndex(this.tribute.menuSelected, e);
            this.tribute.hideMenu();
          }, 0);
        }
      },
      escape: (e, i) => {
        if (this.tribute.isActive) {
          e.preventDefault();
          e.stopPropagation();
          this.tribute.isActive = false;
          this.tribute.hideMenu();
        }
      },
      tab: (e, i) => {
        this.callbacks().enter(e, i);
      },
      space: (e, i) => {
        if (this.tribute.isActive) {
          this.tribute.spaceSelectsMatch
            ? this.callbacks().enter(e, i)
            : this.tribute.allowSpaces ||
              (e.stopPropagation(),
              setTimeout(() => {
                this.tribute.hideMenu();
                this.tribute.isActive = false;
              }, 0));
        }
      },
      up: (e, i) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e.preventDefault();
          e.stopPropagation();
          let t = this.tribute.current.filteredItems.length;
          let n = this.tribute.menuSelected;
          this.tribute.current.filteredItems.length > this.tribute.menuSelected && this.tribute.menuSelected > 0
            ? (this.tribute.menuSelected--, this.setActiveLi())
            : this.tribute.menuSelected === 0 &&
              ((this.tribute.menuSelected = this.tribute.current.filteredItems.length - 1),
              this.setActiveLi(),
              (this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight));
        }
      },
      down: (e, i) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e.preventDefault();
          e.stopPropagation();
          let t = this.tribute.current.filteredItems.length - 1;
          let n = this.tribute.menuSelected;
          t > this.tribute.menuSelected
            ? (this.tribute.menuSelected++, this.setActiveLi())
            : t === this.tribute.menuSelected &&
              ((this.tribute.menuSelected = 0), this.setActiveLi(), (this.tribute.menu.scrollTop = 0));
        }
      },
      delete: (e, i) => {
        this.tribute.isActive && this.tribute.current.mentionText.length < 1
          ? this.tribute.hideMenu()
          : this.tribute.isActive && this.tribute.showMenuFor(i);
      },
    };
  }
  setActiveLi(e) {
    let i = this.tribute.menu.querySelectorAll('li');
    let t = i.length >>> 0;
    if (e) {
      this.tribute.menuSelected = parseInt(e);
    }
    for (let n = 0; n < t; n++) {
      let l = i[n];
      if (n === this.tribute.menuSelected) {
        i[n].classList.add(this.tribute.current.collection.selectClass);
        let s = i[n].getBoundingClientRect();
        let r = this.tribute.menu.getBoundingClientRect();
        if (s.bottom > r.bottom) {
          let a = s.bottom - r.bottom;
          this.tribute.menu.scrollTop += a;
        } else if (s.top < r.top) {
          let a = r.top - s.top;
          this.tribute.menu.scrollTop -= a;
        }
      } else i[n].classList.remove(this.tribute.current.collection.selectClass);
    }
  }
  getFullHeight(e, i) {
    let t = e.getBoundingClientRect().height;
    if (i) {
      let n = e.currentStyle || window.getComputedStyle(e);
      return e.getBoundingClientRect().height + parseFloat(n.marginTop) + parseFloat(n.marginBottom);
    }
    return e.getBoundingClientRect().height;
  }
}
class be extends q {
  keyup(e, i) {
    if (e.inputEvent) {
      e.inputEvent = false;
    }
    e.updateSelection(this);
    if (i.keyCode !== 27) {
      if (!e.tribute.allowSpaces && e.tribute.hasTrailingSpace) {
        e.tribute.hasTrailingSpace = false;
        e.commandEvent = true;
        e.callbacks().space(i, this);
        return;
      }
      if (e.tribute.autocompleteMode) e.callbacks().triggerChar(i, this, '');
      else {
        let t = e.getKeyCode(e, this, i);
        if (!t || t === '') return;
        let n = e.tribute;
        let l = e.tribute.range.getTriggerInfo(
          false,
          e.tribute.hasTrailingSpace,
          true,
          e.tribute.allowSpaces,
          e.tribute.autocompleteMode,
        );
        if (l.mentionTrigger) {
          e.callbacks().triggerChar(i, this, l.mentionTrigger);
        }
      }
      if (!(e.tribute.current.mentionText.length < e.tribute.current.collection.menuShowMinLength)) {
        if (
          ((e.tribute.current.trigger || e.tribute.autocompleteMode) && e.commandEvent === false) ||
          (e.tribute.isActive && i.keyCode === 8)
        ) {
          e.tribute.showMenuFor(this, true);
        }
      }
    }
  }
  getKeyCode(e, i, t) {
    let n = e.tribute;
    let l = e.tribute.range.getTriggerInfo(
      false,
      e.tribute.hasTrailingSpace,
      true,
      e.tribute.allowSpaces,
      e.tribute.autocompleteMode,
    );
    return l ? l.mentionTriggerChar : false;
  }
}
class Te {
  constructor(e) {
    this.tribute = e;
    this.tribute.range = this;
  }
  getDocument() {
    let e;
    if (this.tribute.current.collection) {
      e = this.tribute.current.collection.iframe;
    }
    return e ? e.contentWindow.document : document;
  }
  positionMenuAtCaret(e) {
    let i = this.tribute.current;
    let t;
    let n = this.getTriggerInfo(
      false,
      this.tribute.hasTrailingSpace,
      true,
      this.tribute.allowSpaces,
      this.tribute.autocompleteMode,
    );
    if (typeof n < 'u') {
      if (!this.tribute.positionMenu) {
        this.tribute.menu.style.cssText = 'display: block;';
        return;
      }
      this.isContentEditable(this.tribute.current.element)
        ? (t = this.getContentEditableCaretPosition(n.mentionPosition))
        : (t = this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element, n.mentionPosition));
      this.tribute.menu.style.cssText = `top: ${t.top}px;
                                     left: ${t.left}px;
                                     right: ${t.right}px;
                                     bottom: ${t.bottom}px;
                                     position: absolute;
                                     display: block;`;
      if (t.left === 'auto') {
        this.tribute.menu.style.left = 'auto';
      }
      if (t.top === 'auto') {
        this.tribute.menu.style.top = 'auto';
      }
      if (e) {
        this.scrollIntoView();
      }
      window.setTimeout(() => {
        let l = {
          width: this.tribute.menu.offsetWidth,
          height: this.tribute.menu.offsetHeight,
        };
        let s = this.isMenuOffScreen(t, l);
        let r = window.innerWidth > l.width && (s.left || s.right);
        let a = window.innerHeight > l.height && (s.top || s.bottom);
        if (r || a) {
          this.tribute.menu.style.cssText = 'display: none';
          this.positionMenuAtCaret(e);
        }
      }, 0);
    } else this.tribute.menu.style.cssText = 'display: none';
  }
  get menuContainerIsBody() {
    return this.tribute.menuContainer === document.body || !this.tribute.menuContainer;
  }
  selectElement(e, i, t) {
    let n;
    let l = e;
    if (i)
      for (var s = 0; s < i.length; s++) {
        l = l.childNodes[i[s]];
        if (l === void 0) return;
        for (; l.length < t; ) {
          t -= l.length;
          l = l.nextSibling;
        }
        if (l.childNodes.length === 0 && !l.length) {
          l = l.previousSibling;
        }
      }
    let r = this.getWindowSelection();
    n = this.getDocument().createRange();
    n.setStart(l, t);
    n.setEnd(l, t);
    n.collapse(true);
    try {
      r.removeAllRanges();
    } catch {}
    r.addRange(n);
    e.focus();
  }
  replaceTriggerText(e, i, t, n, l) {
    let s = this.getTriggerInfo(true, t, i, this.tribute.allowSpaces, this.tribute.autocompleteMode);
    if (s !== void 0) {
      let r = this.tribute.current;
      let a = new CustomEvent('tribute-replaced', {
        detail: {
          item: l,
          instance: this.tribute.current,
          context: s,
          event: n,
        },
      });
      if (this.isContentEditable(this.tribute.current.element)) {
        let c = typeof this.tribute.replaceTextSuffix == 'string' ? this.tribute.replaceTextSuffix : '\xA0';
        e += c;
        let d = s.mentionPosition + s.mentionText.length;
        if (!this.tribute.autocompleteMode) {
          d += s.mentionTriggerChar.length;
        }
        this.pasteHtml(e, s.mentionPosition, d);
      } else {
        let c = this.tribute.current.element;
        let d = typeof this.tribute.replaceTextSuffix == 'string' ? this.tribute.replaceTextSuffix : ' ';
        e += d;
        let h = s.mentionPosition;
        let u = s.mentionPosition + s.mentionText.length + d.length;
        if (!this.tribute.autocompleteMode) {
          u += s.mentionTriggerChar.length - 1;
        }
        c.value = c.value.substring(0, s.mentionPosition) + e + c.value.substring(u, c.value.length);
        c.selectionStart = s.mentionPosition + e.length;
        c.selectionEnd = s.mentionPosition + e.length;
      }
      this.tribute.current.element.dispatchEvent(new CustomEvent('input', { bubbles: true }));
      this.tribute.current.element.dispatchEvent(a);
    }
  }
  pasteHtml(e, i, t) {
    let n;
    let l;
    l = this.getWindowSelection();
    n = this.getDocument().createRange();
    n.setStart(l.anchorNode, i);
    n.setEnd(l.anchorNode, t);
    n.deleteContents();
    let s = this.getDocument().createElement('div');
    s.innerHTML = e;
    let r = this.getDocument().createDocumentFragment();
    let a;
    let c;
    for (; (a = s.firstChild); ) c = r.appendChild(a);
    n.insertNode(r);
    if (c) {
      n = n.cloneRange();
      n.setStartAfter(c);
      n.collapse(true);
      l.removeAllRanges();
      l.addRange(n);
    }
  }
  getWindowSelection() {
    return this.tribute.collection.iframe
      ? this.tribute.collection.iframe.contentWindow.getSelection()
      : window.getSelection();
  }
  getNodePositionInParent(e) {
    if (e.parentNode === null) return 0;
    for (var i = 0; i < e.parentNode.childNodes.length; i++) if (e.parentNode.childNodes[i] === e) return i;
  }
  getContentEditableSelectedPath(e) {
    let i = this.getWindowSelection();
    let t = i.anchorNode;
    let n = [];
    let l;
    if (t != null) {
      let s;
      let r = t.contentEditable;
      for (; t !== null && r !== 'true'; ) {
        s = this.getNodePositionInParent(t);
        n.push(s);
        t = t.parentNode;
        if (t !== null) {
          r = t.contentEditable;
        }
      }
      n.reverse();
      l = i.getRangeAt(0).startOffset;
      return {
        selected: t,
        path: n,
        offset: l,
      };
    }
  }
  getTextPrecedingCurrentSelection() {
    let e = this.tribute.current;
    let i = '';
    if (this.isContentEditable(this.tribute.current.element)) {
      let t = this.getWindowSelection().anchorNode;
      if (this.getWindowSelection().anchorNode != null) {
        let n = this.getWindowSelection().anchorNode.textContent;
        let l = this.getWindowSelection().getRangeAt(0).startOffset;
        if (
          this.getWindowSelection().anchorNode.textContent &&
          this.getWindowSelection().getRangeAt(0).startOffset >= 0
        ) {
          i = this.getWindowSelection().anchorNode.textContent.substring(
            0,
            this.getWindowSelection().getRangeAt(0).startOffset,
          );
        }
      }
    } else {
      let t = this.tribute.current.element;
      if (this.tribute.current.element) {
        let n = this.tribute.current.element.selectionStart;
        if (this.tribute.current.element.value && this.tribute.current.element.selectionStart >= 0) {
          i = this.tribute.current.element.value.substring(0, this.tribute.current.element.selectionStart);
        }
      }
    }
    return i;
  }
  getLastWordInText(e) {
    e = e.replace(/\u00A0/g, ' ');
    let i = e.split(/\s+/);
    let t = i.length - 1;
    return i[t].trim();
  }
  getTriggerInfo(e, i, t, n, l) {
    let s = this.tribute.current;
    let r;
    let a;
    let c;
    if (!this.isContentEditable(this.tribute.current.element)) r = this.tribute.current.element;
    else {
      let u = this.getContentEditableSelectedPath(this.tribute.current);
      if (u) {
        r = u.selected;
        a = u.path;
        c = u.offset;
      }
    }
    let d = this.getTextPrecedingCurrentSelection();
    let h = this.getLastWordInText(d);
    if (l)
      return {
        mentionPosition: d.length - h.length,
        mentionText: h,
        mentionSelectedElement: r,
        mentionSelectedPath: a,
        mentionSelectedOffset: c,
      };
    if (d != null) {
      let u = -1;
      let g;
      this.tribute.collection.forEach((T) => {
        let m = T.trigger;
        let f = T.requireLeadingSpace ? this.lastIndexWithLeadingSpace(d, T.trigger) : d.lastIndexOf(T.trigger);
        if (f > u) {
          u = f;
          g = T.trigger;
          t = T.requireLeadingSpace;
        }
      });
      if (u >= 0 && (u === 0 || !t || /[\xA0\s]/g.test(d.substring(u - 1, u)))) {
        let T = d.substring(u + g.length, d.length);
        g = d.substring(u, u + g.length);
        let m = T.substring(0, 1);
        let f = T.length > 0 && (m === ' ' || m === '\xA0');
        if (i) {
          T = T.trim();
        }
        let x = n ? /[^\S ]/g : /[\xA0\s]/g;
        this.tribute.hasTrailingSpace = x.test(T);
        if (!f && (e || !x.test(T)))
          return {
            mentionPosition: u,
            mentionText: T,
            mentionSelectedElement: r,
            mentionSelectedPath: a,
            mentionSelectedOffset: c,
            mentionTriggerChar: g,
          };
      }
    }
  }
  lastIndexWithLeadingSpace(e, i) {
    let t = e.split('').reverse().join('');
    let n = -1;
    for (let l = 0, s = e.length; l < s; l++) {
      let r = l === e.length - 1;
      let a = /\s/.test(t[l + 1]);
      let c = true;
      for (let d = i.length - 1; d >= 0; d--)
        if (i[d] !== t[l - d]) {
          c = false;
          break;
        }
      if (c && (r || a)) {
        n = e.length - 1 - l;
        break;
      }
    }
    return n;
  }
  isContentEditable(e) {
    return e.nodeName !== 'INPUT' && e.nodeName !== 'TEXTAREA';
  }
  isMenuOffScreen(e, i) {
    let t = window.innerWidth;
    let n = window.innerHeight;
    let l = document.documentElement;
    let s = (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
    let r = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    let a = typeof e.top == 'number' ? e.top : r + window.innerHeight - e.bottom - i.height;
    let c = typeof e.right == 'number' ? e.right : e.left + i.width;
    let d = typeof e.bottom == 'number' ? e.bottom : e.top + i.height;
    let h = typeof e.left == 'number' ? e.left : s + window.innerWidth - e.right - i.width;
    return {
      top: a < Math.floor(r),
      right: c > Math.ceil(s + window.innerWidth),
      bottom: d > Math.ceil(r + window.innerHeight),
      left: h < Math.floor(s),
    };
  }
  getMenuDimensions() {
    let e = {
      width: null,
      height: null,
    };
    this.tribute.menu.style.cssText = `top: 0px;
                                 left: 0px;
                                 position: fixed;
                                 display: block;
                                 visibility; hidden;`;
    e.width = this.tribute.menu.offsetWidth;
    e.height = this.tribute.menu.offsetHeight;
    this.tribute.menu.style.cssText = 'display: none;';
    return e;
  }
  getTextAreaOrInputUnderlinePosition(e, i, t) {
    let n = [
      'direction',
      'boxSizing',
      'width',
      'height',
      'overflowX',
      'overflowY',
      'borderTopWidth',
      'borderRightWidth',
      'borderBottomWidth',
      'borderLeftWidth',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'fontStyle',
      'fontVariant',
      'fontWeight',
      'fontStretch',
      'fontSize',
      'fontSizeAdjust',
      'lineHeight',
      'fontFamily',
      'textAlign',
      'textTransform',
      'textIndent',
      'textDecoration',
      'letterSpacing',
      'wordSpacing',
    ];
    let l = window.mozInnerScreenX !== null;
    let s = this.getDocument().createElement('div');
    s.id = 'input-textarea-caret-position-mirror-div';
    this.getDocument().body.appendChild(s);
    let r = s.style;
    let a = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
    r.whiteSpace = 'pre-wrap';
    if (e.nodeName !== 'INPUT') {
      r.wordWrap = 'break-word';
    }
    r.position = 'absolute';
    r.visibility = 'hidden';
    n.forEach((A) => {
      r[A] = a[A];
    });
    l
      ? ((r.width = `${parseInt(a.width) - 2}px`), e.scrollHeight > parseInt(a.height) && (r.overflowY = 'scroll'))
      : (r.overflow = 'hidden');
    s.textContent = e.value.substring(0, i);
    if (e.nodeName === 'INPUT') {
      s.textContent = s.textContent.replace(/\s/g, '\xA0');
    }
    let c = this.getDocument().createElement('span');
    c.textContent = e.value.substring(i) || '.';
    s.appendChild(c);
    let d = e.getBoundingClientRect();
    let h = document.documentElement;
    let u = (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
    let g = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    let T = 0;
    let m = 0;
    if (this.menuContainerIsBody) {
      T = d.top;
      m = d.left;
    }
    let f = {
      top: T + g + c.offsetTop + parseInt(a.borderTopWidth) + parseInt(a.fontSize) - e.scrollTop,
      left: m + u + c.offsetLeft + parseInt(a.borderLeftWidth),
    };
    let x = window.innerWidth;
    let I = window.innerHeight;
    let E = this.getMenuDimensions();
    let L = this.isMenuOffScreen(f, E);
    if (L.right) {
      f.right = window.innerWidth - f.left;
      f.left = 'auto';
    }
    let j = this.tribute.menuContainer ? this.tribute.menuContainer.offsetHeight : this.getDocument().body.offsetHeight;
    if (L.bottom) {
      let A = this.tribute.menuContainer
        ? this.tribute.menuContainer.getBoundingClientRect()
        : this.getDocument().body.getBoundingClientRect();
      let W = j - (window.innerHeight - A.top);
      f.bottom = W + (window.innerHeight - d.top - c.offsetTop);
      f.top = 'auto';
    }
    L = this.isMenuOffScreen(f, E);
    if (L.left) {
      f.left = window.innerWidth > E.width ? u + window.innerWidth - E.width : u;
      delete f.right;
    }
    if (L.top) {
      f.top = window.innerHeight > E.height ? g + window.innerHeight - E.height : g;
      delete f.bottom;
    }
    this.getDocument().body.removeChild(s);
    return f;
  }
  getContentEditableCaretPosition(e) {
    let i;
    let t = this.getWindowSelection();
    i = this.getDocument().createRange();
    i.setStart(t.anchorNode, e);
    i.setEnd(t.anchorNode, e);
    i.collapse(false);
    let n = i.getBoundingClientRect();
    let l = document.documentElement;
    let s = (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
    let r = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    let a = n.left;
    let c = n.top;
    let d = {
      left: n.left + s,
      top: n.top + n.height + r,
    };
    let h = window.innerWidth;
    let u = window.innerHeight;
    let g = this.getMenuDimensions();
    let T = this.isMenuOffScreen(d, g);
    if (T.right) {
      d.left = 'auto';
      d.right = window.innerWidth - n.left - s;
    }
    let m = this.tribute.menuContainer ? this.tribute.menuContainer.offsetHeight : this.getDocument().body.offsetHeight;
    if (T.bottom) {
      let f = this.tribute.menuContainer
        ? this.tribute.menuContainer.getBoundingClientRect()
        : this.getDocument().body.getBoundingClientRect();
      let x = m - (window.innerHeight - f.top);
      d.top = 'auto';
      d.bottom = x + (window.innerHeight - n.top);
    }
    T = this.isMenuOffScreen(d, g);
    if (T.left) {
      d.left = window.innerWidth > g.width ? s + window.innerWidth - g.width : s;
      delete d.right;
    }
    if (T.top) {
      d.top = window.innerHeight > g.height ? r + window.innerHeight - g.height : r;
      delete d.bottom;
    }
    if (!this.menuContainerIsBody) {
      d.left = d.left ? d.left - this.tribute.menuContainer.offsetLeft : d.left;
      d.top = d.top ? d.top - this.tribute.menuContainer.offsetTop : d.top;
    }
    return d;
  }
  scrollIntoView(e) {
    let i = 20;
    let t;
    let n = 100;
    let l = this.menu;
    if (typeof l > 'u') return;
    for (; t === void 0 || t.height === 0; ) {
      t = l.getBoundingClientRect();
      if (t.height === 0 && ((l = l.childNodes[0]), l === void 0 || !l.getBoundingClientRect)) return;
    }
    let s = t.top;
    let r = t.top + t.height;
    if (t.top < 0) window.scrollTo(0, window.pageYOffset + t.top - 20);
    else if (r > window.innerHeight) {
      let a = window.pageYOffset + t.top - 20;
      if (a - window.pageYOffset > 100) {
        a = window.pageYOffset + 100;
      }
      let c = window.pageYOffset - (window.innerHeight - r);
      if (c > a) {
        c = a;
      }
      window.scrollTo(0, c);
    }
  }
}
class we extends Te {
  replaceTriggerText(e, i, t, n, l) {
    let s = this.getTriggerInfo(true, t, i, this.tribute.allowSpaces, this.tribute.autocompleteMode);
    if (s !== void 0) {
      let r = this.tribute.current;
      let a = new CustomEvent('tribute-replaced', {
        detail: {
          item: l,
          instance: this.tribute.current,
          context: s,
          event: n,
        },
      });
      if (this.isContentEditable(this.tribute.current.element)) {
        let c = typeof this.tribute.replaceTextSuffix == 'string' ? this.tribute.replaceTextSuffix : '\xA0';
        e += c;
        if (s.mentionTriggerChar.includes('-')) {
          let d = s.mentionPosition + s.mentionText.length;
          if (!this.tribute.autocompleteMode) {
            d += s.mentionTriggerChar.length;
          }
          this.pasteHtml(e, s.mentionPosition, d);
        } else
          C.$emit('replaceTextInDocmod' + this.tribute.uuid, {
            html: e,
            mentionText: s.mentionText,
            mentionTriggerChar: s.mentionTriggerChar,
            uuid: this.tribute.uuid,
          });
      } else {
        let c = this.tribute.current.element;
        let d = typeof this.tribute.replaceTextSuffix == 'string' ? this.tribute.replaceTextSuffix : ' ';
        e += d;
        let h = s.mentionPosition;
        let u = s.mentionPosition + s.mentionText.length + d.length;
        if (!this.tribute.autocompleteMode) {
          u += s.mentionTriggerChar.length - 1;
        }
        c.value = c.value.substring(0, s.mentionPosition) + e + c.value.substring(u, c.value.length);
        c.selectionStart = s.mentionPosition + e.length;
        c.selectionEnd = s.mentionPosition + e.length;
      }
      this.tribute.current.element.dispatchEvent(new CustomEvent('input', { bubbles: true }));
      this.tribute.current.element.dispatchEvent(a);
    }
  }
  getTriggerInfo(e, i, t, n, l) {
    let s = this.tribute.current;
    let r;
    let a;
    let c;
    if (!this.isContentEditable(this.tribute.current.element)) r = this.tribute.current.element;
    else {
      let u = this.getContentEditableSelectedPath(this.tribute.current);
      if (u) {
        r = u.selected;
        a = u.path;
        c = u.offset;
      }
    }
    let d = this.getTextPrecedingCurrentSelection();
    let h = this.getLastWordInText(d);
    if (l)
      return {
        mentionPosition: d.length - h.length,
        mentionText: h,
        mentionSelectedElement: r,
        mentionSelectedPath: a,
        mentionSelectedOffset: c,
      };
    if (d != null) {
      let u = -1;
      let g = null;
      let T = null;
      this.tribute.collection.forEach((m) => {
        let f = m.trigger;
        let x = m.requireLeadingSpace ? this.lastIndexWithLeadingSpace(d, m.trigger) : d.lastIndexOf(m.trigger);
        if (x > u) {
          u = x;
          g = m.trigger;
          T = m.trigger;
          t = m.requireLeadingSpace;
        }
      });
      if (u >= 0 && (u === 0 || !t || /[\xA0\s]/g.test(d.substring(u - 1, u)))) {
        let m = d.substring(u + g.length, d.length);
        g = d.substring(u, u + g.length);
        let f = m.substring(0, 1);
        let x = m.length > 0 && (f === ' ' || f === '\xA0');
        if (i) {
          m = m.trim();
        }
        let I = n ? /[^\S ]/g : /[\xA0\s]/g;
        this.tribute.hasTrailingSpace = I.test(m);
        if (!x && (e || !I.test(m)))
          return {
            mentionPosition: u,
            mentionText: m,
            mentionSelectedElement: r,
            mentionSelectedPath: a,
            mentionSelectedOffset: c,
            mentionTriggerChar: g,
            mentionTrigger: T,
          };
      }
    }
  }
}
class Se {
  constructor(e) {
    this.tribute = e;
    this.tribute.menuEvents = this;
    this.menu = this.tribute.menu;
  }
  bind(e) {
    this.menuClickEvent = this.tribute.events.click.bind(null, this);
    this.menuContainerScrollEvent = this.debounce(
      () => {
        if (this.tribute.isActive) {
          this.tribute.showMenuFor(this.tribute.current.element, false);
        }
      },
      300,
      false,
    );
    this.windowResizeEvent = this.debounce(
      () => {
        if (this.tribute.isActive) {
          this.tribute.range.positionMenuAtCaret(true);
        }
      },
      300,
      false,
    );
    this.tribute.range.getDocument().addEventListener('MSPointerDown', this.menuClickEvent, false);
    this.tribute.range.getDocument().addEventListener('mousedown', this.menuClickEvent, false);
    window.addEventListener('resize', this.windowResizeEvent);
    this.menuContainer
      ? this.menuContainer.addEventListener('scroll', this.menuContainerScrollEvent, false)
      : window.addEventListener('scroll', this.menuContainerScrollEvent);
  }
  unbind(e) {
    this.tribute.range.getDocument().removeEventListener('mousedown', this.menuClickEvent, false);
    this.tribute.range.getDocument().removeEventListener('MSPointerDown', this.menuClickEvent, false);
    window.removeEventListener('resize', this.windowResizeEvent);
    this.menuContainer
      ? this.menuContainer.removeEventListener('scroll', this.menuContainerScrollEvent, false)
      : window.removeEventListener('scroll', this.menuContainerScrollEvent);
  }
  debounce(e, i, t) {
    var n;
    return () => {
      var l = this;
      var s = arguments;
      var r = () => {
        n = null;
        if (!t) {
          e.apply(l, s);
        }
      };
      var a = t && !n;
      clearTimeout(n);
      n = setTimeout(r, i);
      if (a) {
        e.apply(l, s);
      }
    };
  }
}
class Ce {
  constructor(e) {
    this.tribute = e;
    this.tribute.search = this;
  }
  simpleFilter(e, i) {
    return i.filter((t) => this.test(e, t));
  }
  test(e, i) {
    return this.match(e, i) !== null;
  }
  match(e, i, t) {
    t = t || {};
    i.length;
    let n = t.pre || '';
    let l = t.post || '';
    let s = (t.caseSensitive && i) || i.toLowerCase();
    if (t.skip)
      return {
        rendered: i,
        score: 0,
      };
    e = (t.caseSensitive && e) || e.toLowerCase();
    let r = this.traverse(s, e, 0, 0, []);
    return r
      ? {
          rendered: this.render(i, r.cache, n, l),
          score: r.score,
        }
      : null;
  }
  traverse(e, i, t, n, l) {
    if (i.length === n)
      return {
        score: this.calculateScore(l),
        cache: l.slice(),
      };
    if (e.length === t || i.length - n > e.length - t) return;
    let s = i[n];
    let r = e.indexOf(i[n], t);
    let a;
    let c;
    for (; r > -1; ) {
      l.push(r);
      c = this.traverse(e, i, r + 1, n + 1, l);
      l.pop();
      if (!c) return a;
      if (!a || a.score < c.score) {
        a = c;
      }
      r = e.indexOf(i[n], r + 1);
    }
    return a;
  }
  calculateScore(e) {
    let i = 0;
    let t = 1;
    e.forEach((n, l) => {
      if (l > 0) {
        e[l - 1] + 1 === n ? (t += t + 1) : (t = 1);
      }
      i += t;
    });
    return i;
  }
  render(e, i, t, n) {
    var l = e.substring(0, i[0]);
    i.forEach((s, r) => {
      l += t + e[s] + n + e.substring(s + 1, i[r + 1] ? i[r + 1] : e.length);
    });
    return l;
  }
  filter(e, i, t) {
    t = t || {};
    return i
      .reduce((n, l, s, r) => {
        let a = l;
        if (t.extract) {
          a = t.extract(l);
          if (!a) {
            a = '';
          }
        }
        let c = this.match(e, a, t);
        if (c != null) {
          n[n.length] = {
            string: c.rendered,
            score: c.score,
            index: s,
            original: l,
          };
        }
        return n;
      }, [])
      .sort((n, l) => {
        let s = l.score - n.score;
        return s || n.index - l.index;
      });
  }
}
class O {
  constructor({
    uuid: e,
    values: i = null,
    iframe: t = null,
    selectClass: n = 'highlight',
    containerClass: l = 'tribute-container',
    itemClass: s = '',
    trigger: r = '@',
    autocompleteMode: a = false,
    selectTemplate: c = null,
    menuItemTemplate: d = null,
    lookup: h = 'key',
    fillAttr: u = 'value',
    collection: g = null,
    menuContainer: T = null,
    noMatchTemplate: m = null,
    requireLeadingSpace: f = true,
    allowSpaces: x = false,
    replaceTextSuffix: I = null,
    positionMenu: E = true,
    spaceSelectsMatch: L = false,
    searchOpts: j = {},
    menuItemLimit: A = null,
    menuShowMinLength: W = 0,
    postTributeAction: z = null,
    element: Q = null,
  }) {
    this.uuid = e;
    this.autocompleteMode = a;
    this.menuSelected = 0;
    this.current = {};
    this.element = Q;
    this.inputEvent = false;
    this.isActive = false;
    this.menuContainer = T;
    this.allowSpaces = x;
    this.replaceTextSuffix = I;
    this.positionMenu = E;
    this.hasTrailingSpace = false;
    this.overrideActive = false;
    this.spaceSelectsMatch = L;
    if (this.autocompleteMode) {
      r = '';
      x = false;
    }
    if (i)
      this.collection = [
        {
          trigger: r,
          iframe: t,
          selectClass: n,
          containerClass: l,
          itemClass: s,
          selectTemplate: (c || O.defaultSelectTemplate).bind(this),
          menuItemTemplate: (d || O.defaultMenuItemTemplate).bind(this),
          noMatchTemplate: ((S) =>
            typeof S == 'string'
              ? S.trim() === ''
                ? null
                : S
              : typeof S == 'function'
                ? S.bind(this)
                : m ||
                  function () {
                    return '<li>No Match Found!</li>';
                  }.bind(this))(m),
          lookup: h,
          fillAttr: u,
          values: i,
          requireLeadingSpace: f,
          searchOpts: j,
          menuItemLimit: A,
          menuShowMinLength: W,
        },
      ];
    else if (g) {
      if (this.autocompleteMode) {
        console.warn('Tribute in autocomplete mode does not work for collections');
      }
      this.collection = g.map((S) => ({
        trigger: S.trigger || r,
        postTributeAction: S.postTributeAction || z,
        iframe: S.iframe || t,
        selectClass: S.selectClass || n,
        containerClass: S.containerClass || l,
        itemClass: S.itemClass || s,
        selectTemplate: (S.selectTemplate || O.defaultSelectTemplate).bind(this),
        menuItemTemplate: (S.menuItemTemplate || O.defaultMenuItemTemplate).bind(this),
        noMatchTemplate: ((F) =>
          typeof F == 'string'
            ? F.trim() === ''
              ? null
              : F
            : typeof F == 'function'
              ? F.bind(this)
              : m ||
                function () {
                  return '<li>No Match Found!</li>';
                }.bind(this))(m),
        lookup: S.lookup || h,
        fillAttr: S.fillAttr || u,
        values: S.values,
        requireLeadingSpace: S.requireLeadingSpace,
        searchOpts: S.searchOpts || j,
        menuItemLimit: S.menuItemLimit || A,
        menuShowMinLength: S.menuShowMinLength || W,
      }));
    } else throw new Error('[Tribute] No collection specified.');
    new we(this);
    new be(this);
    new Se(this);
    new Ce(this);
  }
  get isActive() {
    return this._isActive;
  }
  set isActive(e) {
    if (this._isActive != e && ((this._isActive = e), this.current.element)) {
      let i = new CustomEvent(`tribute-active-${e}`);
      this.current.element.dispatchEvent(i);
    }
  }
  static defaultSelectTemplate(e) {
    return typeof e > 'u'
      ? `${this.current.collection.trigger}${this.current.mentionText}`
      : this.range.isContentEditable(this.current.element)
        ? '<span class="tribute-mention">' +
          (this.current.collection.trigger + e.original[this.current.collection.fillAttr]) +
          '</span>'
        : this.current.collection.trigger + e.original[this.current.collection.fillAttr];
  }
  static defaultMenuItemTemplate(e) {
    return e.string;
  }
  static inputTypes() {
    return ['TEXTAREA', 'INPUT'];
  }
  triggers() {
    return this.collection.map((e) => e.trigger);
  }
  attach(e) {
    if (!e) throw new Error('[Tribute] Must pass in a DOM node or NodeList.');
    if (typeof jQuery < 'u' && e instanceof jQuery) {
      e = e.get();
    }
    if (e.constructor === NodeList || e.constructor === HTMLCollection || e.constructor === Array) {
      let t = e.length;
      for (var i = 0; i < e.length; ++i) this._attach(e[i]);
    } else this._attach(e);
  }
  _attach(e) {
    if (e.hasAttribute('data-tribute')) {
      console.warn('Tribute was already bound to ' + e.nodeName);
    }
    this.ensureEditable(e);
    this.events.bind(e);
    e.setAttribute('data-tribute', true);
  }
  ensureEditable(e) {
    if (O.inputTypes().indexOf(e.nodeName) === -1)
      if (e.contentEditable) e.contentEditable = true;
      else throw new Error('[Tribute] Cannot bind to ' + e.nodeName);
  }
  createMenu(e) {
    let i = this.range.getDocument().createElement('div');
    let t = this.range.getDocument().createElement('ul');
    i.className = e;
    i.appendChild(t);
    return this.menuContainer ? this.menuContainer.appendChild(i) : this.range.getDocument().body.appendChild(i);
  }
  showMenuFor(e, i) {
    let t = this.current.collection;
    if (this.triggers().includes(this.current.trigger)) {
      let l = this.collection.filter((s) => s.trigger === this.current.trigger);
      if (l && l.length) {
        t = l[0];
      }
    }
    if (t && t.postTributeAction && this.current.mentionText === '') {
      C.$emit('tributePostAction' + this.uuid, t.postTributeAction);
      return;
    }
    if (this.isActive && this.current.element === e && this.current.mentionText === this.currentMentionTextSnapshot)
      return;
    this.currentMentionTextSnapshot = this.current.mentionText;
    if (!this.menu) {
      this.menu = this.createMenu(this.current.collection.containerClass);
      e.tributeMenu = this.menu;
      this.menuEvents.bind(this.menu);
    }
    this.isActive = true;
    this.menuSelected = 0;
    if (!this.current.mentionText) {
      this.current.mentionText = '';
    }
    const n = (l) => {
      if (!this.isActive) return;
      let s = this.search.filter(this.current.mentionText, l, {
        pre: this.current.collection.searchOpts.pre || '<span>',
        post: this.current.collection.searchOpts.post || '</span>',
        skip: this.current.collection.searchOpts.skip,
        extract: (c) => {
          if (typeof this.current.collection.lookup == 'string') return c[this.current.collection.lookup];
          if (typeof this.current.collection.lookup == 'function')
            return this.current.collection.lookup(c, this.current.mentionText);
          throw new Error('Invalid lookup attribute, lookup must be string or function.');
        },
      });
      if (this.current.collection.menuItemLimit) {
        s = s.slice(0, this.current.collection.menuItemLimit);
      }
      this.current.filteredItems = s;
      let r = this.menu.querySelector('ul');
      this.range.positionMenuAtCaret(i);
      if (!s.length) {
        let c = new CustomEvent('tribute-no-match', { detail: this.menu });
        this.current.element.dispatchEvent(c);
        (typeof this.current.collection.noMatchTemplate == 'function' && !this.current.collection.noMatchTemplate()) ||
        !this.current.collection.noMatchTemplate
          ? this.hideMenu()
          : typeof this.current.collection.noMatchTemplate == 'function'
            ? (r.innerHTML = this.current.collection.noMatchTemplate())
            : (r.innerHTML = this.current.collection.noMatchTemplate);
        return;
      }
      r.innerHTML = '';
      let a = this.range.getDocument().createDocumentFragment();
      s.forEach((c, d) => {
        let h = this.range.getDocument().createElement('li');
        h.setAttribute('data-index', d);
        h.className = this.current.collection.itemClass;
        h.addEventListener('mousemove', (u) => {
          let [g, T] = this._findLiTarget(u.target);
          if (u.movementY !== 0) {
            this.events.setActiveLi(T);
          }
        });
        if (this.menuSelected === d) {
          h.classList.add(this.current.collection.selectClass);
        }
        h.innerHTML = this.current.collection.menuItemTemplate(c);
        a.appendChild(h);
      });
      r.appendChild(a);
    };
    typeof this.current.collection.values == 'function'
      ? this.current.collection.values(this.current.mentionText, n)
      : n(this.current.collection.values);
  }
  _findLiTarget(e) {
    if (!e) return [];
    const i = e.getAttribute('data-index');
    return i ? [e, i] : this._findLiTarget(e.parentNode);
  }
  showMenuForCollection(e, i) {
    if (e !== document.activeElement) {
      this.placeCaretAtEnd(e);
    }
    this.current.collection = i;
    this.current.externalTrigger = true;
    this.current.element = e;
    this.showMenuFor(e);
  }
  placeCaretAtEnd(e) {
    e.focus();
    if (typeof window.getSelection < 'u' && typeof document.createRange < 'u') {
      var i = document.createRange();
      i.selectNodeContents(e);
      i.collapse(false);
      var t = window.getSelection();
      t.removeAllRanges();
      t.addRange(i);
    } else if (typeof document.body.createTextRange < 'u') {
      var n = document.body.createTextRange();
      n.moveToElementText(e);
      n.collapse(false);
      n.select();
    }
  }
  insertTextAtCursor(e) {
    var i;
    var t;
    i = window.getSelection();
    t = i.getRangeAt(0);
    t.deleteContents();
    var n = document.createTextNode(e);
    t.insertNode(n);
    t.selectNodeContents(n);
    t.collapse(false);
    i.removeAllRanges();
    i.addRange(t);
  }
  insertAtCaret(e, i) {
    var t = e.scrollTop;
    var n = e.selectionStart;
    var l = e.value.substring(0, n);
    var s = e.value.substring(e.selectionEnd, e.value.length);
    e.value = l + i + s;
    n = n + i.length;
    e.selectionStart = n;
    e.selectionEnd = n;
    e.focus();
    e.scrollTop = e.scrollTop;
  }
  hideMenu() {
    if (this.menu && !this.overrideActive) {
      this.menu.style.cssText = 'display: none;';
      this.isActive = false;
      this.menuSelected = 0;
      this.current = {};
    }
  }
  selectItemAtIndex(e, i) {
    e = parseInt(e);
    if (typeof e != 'number' || isNaN(e)) return;
    let t = this.current.filteredItems[e];
    let n = this.current.collection.selectTemplate(this.current.filteredItems[e]);
    if (n !== null) {
      this.replaceText(n, i, this.current.filteredItems[e]);
    }
  }
  replaceText(e, i, t) {
    if (this.current.trigger === '@' || this.current.trigger === '+') {
      let n = this.collection.filter((l) => l.trigger === e || l.trigger + '-' === e);
      if (n && n.length && n[0]) {
        n = n[0];
        if (n.trigger + '-' === e) {
          e = n.trigger + ' ';
        }
        n.postTributeAction
          ? setTimeout(() => {
              C.$emit('tributePostAction' + this.uuid, n.postTributeAction);
            }, 400)
          : setTimeout(() => {
              this.showMenuForCollection(this.element, n);
            }, 400);
      }
    }
    this.range.replaceTriggerText(e, true, true, i, t);
  }
  _append(e, i, t) {
    if (typeof e.values == 'function') throw new Error('Unable to append to values, as it is a function.');
    t ? (e.values = i) : (e.values = e.values.concat(i));
  }
  append(e, i, t) {
    let n = parseInt(e);
    if (typeof n != 'number') throw new Error('please provide an index for the collection to update.');
    let l = this.collection[n];
    this._append(this.collection[n], i, t);
  }
  appendCurrent(e, i) {
    if (this.isActive) this._append(this.current.collection, e, i);
    else throw new Error('No active state. Please use append instead and pass an index.');
  }
  detach(e) {
    if (!e) throw new Error('[Tribute] Must pass in a DOM node or NodeList.');
    if (typeof jQuery < 'u' && e instanceof jQuery) {
      e = e.get();
    }
    if (e.constructor === NodeList || e.constructor === HTMLCollection || e.constructor === Array) {
      let t = e.length;
      for (var i = 0; i < e.length; ++i) this._detach(e[i]);
    } else this._detach(e);
  }
  _detach(e) {
    this.events.unbind(e);
    if (e.tributeMenu) {
      this.menuEvents.unbind(e.tributeMenu);
    }
    setTimeout(() => {
      e.removeAttribute('data-tribute');
      this.isActive = false;
      if (e.tributeMenu) {
        e.tributeMenu.remove();
      }
    });
  }
}
const xe = {
  components: {
    Pdf: ce,
    headerTemplate: H,
  },
  props: { file: { required: true } },
  data() {
    let o = UUID.generate();
    return {
      animationSettings: { effect: 'None' },
      promptWidth: '1000px',
      pdfHeight: '580px',
      pagesInText: '',
      pages: [],
      settings: {
        isCentralPanel: false,
        isPopup: true,
      },
      dataViewer: {
        file: {
          id: this.file.id,
          title: this.file.title,
          has_textlayer: false,
          truePDF: this.file.extension === 'PDF',
          uuid: o,
        },
        uuid: o,
        link: null,
      },
    };
  },
  watch: {
    pagesInText: {
      handler() {
        this.managePageSelection(this.pagesInText);
      },
    },
  },
  methods: {
    dblClickPdf() {
      C.$emit('getPage', this.dataViewer.uuid);
    },
    managePageSelection(o) {
      o = o.replace(/[^0-9;]/g, '');
      this.pagesInText = o;
      let e = o.split(';');
      e = [...new Set(e)];
      e.sort((i, t) => (i < t ? -1 : i > t ? 1 : 0));
      this.pages = e;
    },
    closeModal() {
      this.$refs.modalSelectionPages.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    pageSelected(o) {
      this.pagesInText += ';' + o;
    },
    selectPage() {
      this.$emit('pagesSelected', this.pages);
    },
  },
};
const ve = { style: { height: '730px' } };
const _e = {
  class: 'text_descriptif col-md-4 col-lg-4 col-xs-6 mt-2',
  style: { 'min-width': '75px' },
};
const ye = {
  class: 'e-input-group-removed data col-md-7 col-xs-6',
  style: { 'min-width': '150px' },
};
const Me = ['placeholder'];
const Ee = { class: 'e-footer-content' };
function ke(o, e, i, t, n, l) {
  const s = p('headerTemplate');
  const r = p('pdf');
  const a = p('ejs-button');
  const c = p('ejs-dialog');
  _();
  return B('div', null, [
    b(
      c,
      {
        ref: 'modalSelectionPages',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: n.animationSettings,
        showCloseIcon: true,
        close: l.onModalClose,
        width: n.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: y(() => [
          b(s, { title: o.trans.get('__JSON__.viewer.pdf.main.pageSelect') }, null, 8, ['title']),
        ]),
        templateContent: y(() => [
          w('div', ve, [
            w('span', _e, P(o.trans.get('__JSON__.viewer.pdf.main.pagesSelected')), 1),
            w('div', ye, [
              J(
                w(
                  'input',
                  {
                    class: 'e-input mb-0',
                    type: 'text',
                    'onUpdate:modelValue': e[0] || (e[0] = (d) => (n.pagesInText = d)),
                    placeholder: o.trans.get('__JSON__.viewer.pdf.main.pageSelectText'),
                  },
                  null,
                  8,
                  Me,
                ),
                [[G, n.pagesInText]],
              ),
            ]),
            w(
              'div',
              {
                onDblclick: e[1] || (e[1] = (...d) => l.dblClickPdf && l.dblClickPdf(...d)),
                style: { height: '630px' },
                class: 'mt-2',
              },
              [
                b(
                  r,
                  {
                    dataViewer: n.dataViewer,
                    settings: n.settings,
                    height: n.pdfHeight,
                    onPageSelected: l.pageSelected,
                  },
                  null,
                  8,
                  ['dataViewer', 'settings', 'height', 'onPageSelected'],
                ),
              ],
              32,
            ),
            w('div', Ee, [
              w('span', null, [
                b(
                  a,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: l.closeModal,
                  },
                  {
                    default: y(() => [N(P(o.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                b(
                  a,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: l.selectPage,
                  },
                  {
                    default: y(() => [N(P(o.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const Ie = R(xe, [['render', ke]]);
const De = {
  components: { headerTemplate: H },
  props: {
    content: { required: true },
    showWarning: {
      required: false,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      animationSettings: { effect: 'None' },
      promptWidth: '400px',
      promptHeight: '165px',
      contentText: this.content,
      positionCenter: {
        X: 'Center',
        Y: 'Top',
      },
    };
  },
  mounted() {
    if (this.showWarning) {
      this.showWarningToast();
    }
  },
  methods: {
    showWarningToast() {
      this.showToastFromId(
        'modalEditContentToast',
        this.trans.get('__JSON__.viewer.docModule.toast.info.elementHasPages'),
        'e-toast-info',
      );
    },
    closeModal() {
      this.$refs.modalContentEdition.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    returnContent() {
      this.$emit('change', this.contentText);
    },
  },
};
const Pe = { class: 'mt-3 e-footer-content' };
function Le(o, e, i, t, n, l) {
  const s = p('headerTemplate');
  const r = p('ejs-toast');
  const a = p('ejs-button');
  const c = p('ejs-dialog');
  _();
  return B('div', null, [
    b(
      c,
      {
        ref: 'modalContentEdition',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: n.animationSettings,
        showCloseIcon: true,
        close: l.onModalClose,
        width: n.promptWidth,
        height: n.promptHeight,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: y(() => [
          b(s, { title: o.trans.get('__JSON__.viewer.docModule.action.changeContent') }, null, 8, ['title']),
        ]),
        templateContent: y(() => [
          w('div', null, [
            b(
              r,
              {
                id: 'modalEditContentToast',
                title: 'Success',
                position: n.positionCenter,
                cssClass: 'e-toast-info',
              },
              null,
              8,
              ['position'],
            ),
            J(
              w(
                'input',
                {
                  class: 'e-input mb-0',
                  type: 'text',
                  'onUpdate:modelValue': e[0] || (e[0] = (d) => (n.contentText = d)),
                },
                null,
                512,
              ),
              [[G, n.contentText, void 0, { lazy: true }]],
            ),
            w('div', Pe, [
              w('span', null, [
                b(
                  a,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: l.closeModal,
                  },
                  {
                    default: y(() => [N(P(o.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                b(
                  a,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: l.returnContent,
                  },
                  {
                    default: y(() => [N(P(o.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const Ae = R(De, [['render', Le]]);
const Oe = {
  mixins: [K, ie, ue],
  components: { headerTemplate: H },
  data() {
    return {
      gridNameForExport: this.trans.get('__JSON__.main.grid.export.gridName.modalAddTemplate'),
      listFiles: [],
      animationSettings: { effect: 'None' },
      promptWidth: '1000px',
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
          id: 'selectionToolbarModalSelectTemplate',
          text: translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }),
          disabled: true,
        },
      ],
      selectionModuleGrid: { persistSelectedData: [] },
    };
  },
  methods: {
    closeModal() {
      this.$refs.modalAddFile.hide();
    },
    onModalClose() {
      this.$emit('close');
    },
    rowSelectingCheck(o) {
      this.rowSelecting(o);
      if (this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length + 1 > this.numberFilesMax) {
        this.numberFilesMax == 1 &&
        this.$refs.grid.ej2Instances.selectionModule.persistSelectedData.length !== this.listFiles.length
          ? this.$refs.grid.ej2Instances.selectionModule.clearSelection()
          : ((o.cancel = true),
            this.showCenterToast(
              this.trans.get('__JSON__.documentation.selection.toast.error.maxSelectionFile', {
                number: this.numberFilesMax,
              }),
              'e-toast-danger',
            ));
      }
    },
    selectFiles() {
      let o = this.$refs.grid.getSelectedRecords();
      let e;
      if (o.length) {
        axios
          .get('api/interactive_file/' + o[0].id + '/json?getOnlyFile=false')
          .then((i) => {
            v(document.getElementById('spinnerModalSelectTemplate'));
            if (i.status == 200) {
              e = i.data.content;
              this.$emit('fileSelected', e);
            }
          })
          .catch((i) => {
            v(document.getElementById('spinnerModalSelectTemplate'));
            this.showCenterToast(this.trans.get('__JSON__.file.toast.error.get'), 'e-toast-danger');
          });
      }
    },
  },
  watch: {
    'selectionModuleGrid.persistSelectedData': {
      deep: true,
      handler(o) {
        let e = this.$refs.grid.$el.querySelector('#selectionToolbarModalSelectTemplate');
        if (e && e.firstElementChild) {
          let i = e.firstElementChild;
          o
            ? (i.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: o.length }))
            : (i.textContent = translate.get('__JSON__.main.grid.toolbar.numberSelected', { number: 0 }));
        }
      },
    },
  },
  mounted() {
    U({ target: document.getElementById('spinnerModalSelectTemplate') });
    if (this.$refs.grid) {
      let o = this.$refs.grid.$el.querySelector('#selectionToolbarModalSelectTemplate');
      if (o && o.firstElementChild) {
        let e = o.firstElementChild;
        o.firstElementChild.style.color = 'black';
        o.firstElementChild.style['font-size'] = '12px';
        this.selectionModuleGrid = this.$refs.grid.ej2Instances.selectionModule;
      }
    }
    D(document.getElementById('spinnerModalSelectTemplate'));
    axios
      .get('api/files/docmod/template')
      .then((o) => {
        v(document.getElementById('spinnerModalSelectTemplate'));
        if (o.status == 200) {
          o.data.forEach((e) => {
            switch (((e.humanSize = this.humanFileSize(e.size)), this.objectType)) {
              case 'docsheets':
                if (
                  !this.idFilesSelected.includes(e.id) &&
                  (e.extension === 'DAWE' ||
                    e.extension === 'JSON' ||
                    e.extension === 'GLTF' ||
                    e.extension === 'GLB' ||
                    e.extension === 'PDF' ||
                    !this.extensionFileSelected.includes(e.extension))
                ) {
                  this.listFiles.push(e);
                }
                break;
              default:
                if (!this.idFilesSelected.includes(e.id)) {
                  this.listFiles.push(e);
                }
                break;
            }
          });
          this.listFiles = [...this.listFiles];
        }
      })
      .catch((o) => {
        v(document.getElementById('spinnerModalSelectTemplate'));
        this.showCenterToast(this.trans.get('__JSON__.file.toast.error.get'), 'e-toast-danger');
      });
  },
};
const Ne = { class: 'e-footer-content mt-4' };
function Re(o, e, i, t, n, l) {
  const s = p('headerTemplate');
  const r = p('e-column');
  const a = p('e-columns');
  const c = p('ejs-grid');
  const d = p('ejs-button');
  const h = p('ejs-dialog');
  _();
  return B('div', null, [
    b(
      h,
      {
        ref: 'modalAddFile',
        header: 'headerTemplate',
        content: 'templateContent',
        animationSettings: n.animationSettings,
        showCloseIcon: true,
        close: l.onModalClose,
        width: n.promptWidth,
        allowDragging: true,
        isModal: true,
      },
      {
        headerTemplate: y(() => [
          b(s, { title: o.trans.get('__JSON__.docsheet.content.selectTemplate') }, null, 8, ['title']),
        ]),
        templateContent: y(() => [
          w('div', null, [
            e[0] || (e[0] = w('div', { id: 'spinnerModalSelectTemplate' }, null, -1)),
            w('div', null, [
              b(
                c,
                {
                  dataSource: n.listFiles,
                  id: 'modalSelectTemplate',
                  enablePersistence: false,
                  created: o.onGridCreate,
                  rowSelecting: l.rowSelectingCheck,
                  ref: o.gridSettings.ref,
                  actionBegin: o.actionBegin,
                  actionComplete: o.actionComplete,
                  allowExcelExport: o.gridSettings.allowExcelExport,
                  allowFiltering: o.gridSettings.allowFiltering,
                  allowPaging: o.gridSettings.allowPaging,
                  allowReordering: o.gridSettings.allowReordering,
                  allowResizing: o.gridSettings.allowResizing,
                  allowRowDragAndDrop: o.gridSettings.allowRowDragAndDrop,
                  allowSelection: o.gridSettings.allowSelection,
                  allowSorting: o.gridSettings.allowSorting,
                  clipMode: o.gridSettings.clipMode,
                  dataBound: o.dataBound,
                  enableHover: o.gridSettings.enableHover,
                  filterSettings: o.gridSettings.filterSettings,
                  height: o.gridSettings.height,
                  pageSettings: o.gridSettings.pageSettingsModal,
                  rowDragStart: o.rowDragStart,
                  rowDropSettings: o.gridSettings.rowDropSettings,
                  rowHeight: o.gridSettings.rowHeight,
                  searchSettings: o.gridSettings.searchSettings,
                  selectionSettings: o.gridSettings.selectionSettings,
                  showColumnChooser: o.gridSettings.showColumnChooser,
                  toolbar: n.toolbar,
                  toolbarClick: o.toolbarClick,
                },
                {
                  default: y(() => [
                    b(a, null, {
                      default: y(() => [
                        b(r, {
                          field: 'checkbox',
                          type: 'checkbox',
                          textAlign: 'Center',
                          allowResizing: false,
                          allowReordering: false,
                          allowFiltering: false,
                          showInColumnChooser: false,
                        }),
                        b(
                          r,
                          {
                            field: 'id',
                            headerText: o.trans.get('__JSON__.model.value.id'),
                            isPrimaryKey: true,
                            type: 'number',
                          },
                          null,
                          8,
                          ['headerText'],
                        ),
                        b(
                          r,
                          {
                            field: 'title',
                            headerText: o.trans.get('__JSON__.file.value.title'),
                            type: 'string',
                            sortComparer: o.sortComparerNaturalOrder,
                            filter: o.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        b(
                          r,
                          {
                            field: 'extension',
                            headerText: o.trans.get('__JSON__.file.value.extension'),
                            type: 'string',
                            sortComparer: o.sortComparerNaturalOrder,
                            filter: o.gridSettings.filterExcel,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        b(
                          r,
                          {
                            field: 'humanSize',
                            headerText: o.trans.get('__JSON__.file.value.size'),
                            type: 'string',
                            allowFiltering: false,
                            sortComparer: o.sortComparerSize,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer'],
                        ),
                        b(
                          r,
                          {
                            field: 'origin_path',
                            headerText: o.trans.get('__JSON__.file.value.originPath'),
                            type: 'string',
                            sortComparer: o.sortComparerNaturalOrder,
                            filter: o.gridSettings.filterWithoutCheckbox,
                          },
                          null,
                          8,
                          ['headerText', 'sortComparer', 'filter'],
                        ),
                        b(
                          r,
                          {
                            type: 'boolean',
                            displayAsCheckBox: 'true',
                            field: 'is_in_docsheet',
                            headerText: o.trans.get('__JSON__.file.value.isInDocsheet'),
                            filter: o.gridSettings.filterCheck,
                            textAlign: 'Center',
                          },
                          null,
                          8,
                          ['headerText', 'filter'],
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
                  'allowRowDragAndDrop',
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
            w('div', Ne, [
              w('span', null, [
                b(
                  d,
                  {
                    class: 'e-control e-btn sendButton',
                    onClick: l.closeModal,
                  },
                  {
                    default: y(() => [N(P(o.trans.get('__JSON__.main.modal.button.cancel')), 1)]),
                    _: 1,
                  },
                  8,
                  ['onClick'],
                ),
                b(
                  d,
                  {
                    cssClass: 'e-info',
                    class: 'e-control e-btn e-primary sendButton',
                    onClick: l.selectFiles,
                  },
                  {
                    default: y(() => [N(P(o.trans.get('__JSON__.main.modal.button.select')), 1)]),
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
const Fe = R(Oe, [['render', Re]]);
const Be = {
  props: { data: { required: true } },
  computed: {
    tooltipContent() {
      return '<div>' + this.data.name + '</div>';
    },
  },
  methods: {
    removeTooltip() {
      this.$refs.tooltipNode.ej2Instances.close();
    },
  },
  mounted() {
    C.$on('removeTooltipTreeView', this.removeTooltip);
  },
  beforeUnmount() {
    C.$off('removeTooltipTreeView', this.removeTooltip);
  },
};
function je(o, e, i, t, n, l) {
  const s = p('ejs-tooltip');
  _();
  return M(
    s,
    {
      ref: 'tooltipNode',
      openDelay: '400',
      animation: o.default_SF_Props.animationTooltip,
      content: l.tooltipContent,
    },
    {
      default: y(() => [w('span', null, P(i.data.name), 1)]),
      _: 1,
    },
    8,
    ['animation', 'content'],
  );
}
const We = R(Be, [['render', je]]);
const qe = {
  mixins: [ae, re],
  components: {
    ModalDynamicGrid: ge,
    nodeTemplate: We,
    ModalSelectionDocmods: se,
    ModalEditContent: Ae,
    ModalSelectionPages: Ie,
    subGridTemplate: he,
    ModalSelectionItems: le,
    ModalAddFiles: de,
    SelectInteractiveFiles: me,
    Modal_gallery: ne,
    ModalSelectTemplate: Fe,
  },
  props: {
    getContent: { required: true },
    enabled: { default: true },
    placeholder: {
      required: false,
      default() {
        return ' ';
      },
    },
    dataViewer: {
      required: false,
      default() {
        return null;
      },
    },
    poiData: {
      required: false,
      default() {
        return null;
      },
    },
    parseContent: {
      required: false,
      default() {
        return null;
      },
    },
    highlightIndex: { required: false },
    supplementaryData: {
      required: false,
      default() {
        return {
          type: 'docmod',
          for: 'files',
        };
      },
    },
    objectData: {
      required: false,
      default() {
        return null;
      },
    },
    firstPositionsIds: {
      required: false,
      default() {
        return null;
      },
    },
  },
  data() {
    let o = this;
    let e = 'id' + UUID.generate();
    let i = [
      { content: 'doc' },
      { content: 'file' },
      { content: 'index' },
      { content: 'linkto' },
      { content: 'mod' },
      { content: 'tag' },
      ,
      { content: 'location' },
      { content: 'item' },
      { content: 'video' },
    ];
    if (this.objectData !== null && this.objectData.type === 'Quickbrain\\Models\\Tag') {
      i.push({ content: 'asset' });
    }
    if (this.poiData) {
      i.push({ content: 'poi' });
    }
    return {
      uuid: UUID.generate(),
      idDocModule: e,
      idDocModuleEditor: 'docModuleEditor' + e,
      idDocModuleWithHashtag: '#' + e,
      spinnerDocModuleEditor: 'spinnerDocModuleEditor' + e,
      highlightIndexData: this.highlightIndex === void 0 ? this.enabled : this.highlightIndex,
      showGalleryModal: false,
      mention: null,
      showEditModal: null,
      showWarning: false,
      innerTextElement: null,
      menuItems: [
        {
          text: this.trans.get('__JSON__.viewer.docModule.action.copyTribute'),
          id: 'copyTribute',
        },
        {
          text: this.trans.get('__JSON__.viewer.docModule.action.replace'),
          id: 'replaceTribute',
        },
        {
          text: this.trans.get('__JSON__.viewer.docModule.action.changeContent'),
          id: 'changeContentTribute',
        },
      ],
      fileType: null,
      fileSelectionPage: null,
      docObject: null,
      showPageSelection: false,
      showGridFile: false,
      showSelectAsset: false,
      showSelectTemplate: false,
      showGridDocsheet: false,
      showGridItem: false,
      showGridTag: false,
      showGridLocation: false,
      fileSelectionDocmod: null,
      showDocmodSelection: false,
      blockQuickToolbarOpen: false,
      widthSidebar: '300px',
      fields: {
        dataSource: this.dataViewer ? (this.dataViewer.tableOfContent ?? []) : [],
        id: 'id',
        text: 'title',
        parentID: 'parentId',
        hasChildren: 'hasChildren',
      },
      imageSettings: { saveFormat: 'Base64' },
      pasteCleanupSettings: {
        allowedStyleProps: [
          'background',
          'background-color',
          'border',
          'border-bottom',
          'border-left',
          'border-radius',
          'border-right',
          'border-style',
          'border-top',
          'border-width',
          'class',
          'clear',
          'color',
          'cursor',
          'data-id',
          'data-api',
          'direction',
          'display',
          'float',
          'font',
          'font-family',
          'font-size',
          'font-weight',
          'font-style',
          'height',
          'left',
          'line-height',
          'margin',
          'margin-top',
          'margin-left',
          'margin-right',
          'margin-bottom',
          'max-height',
          'max-width',
          'min-height',
          'min-width',
          'overflow',
          'overflow-x',
          'overflow-y',
          'padding',
          'padding-bottom',
          'padding-left',
          'padding-right',
          'padding-top',
          'position',
          'right',
          'table-layout',
          'text-align',
          'text-decoration',
          'text-indent',
          'top',
          'vertical-align',
          'visibility',
          'white-space',
          'width',
        ],
      },
      range: null,
      tagCollection: {
        trigger: '@tag',
        postTributeAction: 'tags',
        selectTemplate: function (t) {
          return t && t.original
            ? '<span contenteditable="false" class="clickableTribute" data-api="tags" data-id="' +
                t.original.id +
                '" data-code="' +
                t.original.code.replace('"', '&quot;') +
                '" data-designation="' +
                t.original.designation.replace('"', '&quot;') +
                '" title="' +
                t.original.designation.replace('"', '&quot;') +
                '">' +
                t.original.code +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      locationCollection: {
        trigger: '@location',
        postTributeAction: 'locations',
        selectTemplate: function (t) {
          return t && t.original
            ? '<span contenteditable="false" class="clickableTribute" data-api="locations" data-id="' +
                t.original.id +
                '" data-code="' +
                t.original.code.replace('"', '&quot;') +
                '" data-designation="' +
                t.original.designation.replace('"', '&quot;') +
                '" title="' +
                t.original.designation.replace('"', '&quot;') +
                '">' +
                t.original.code +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      docCollection: {
        trigger: '@doc',
        postTributeAction: 'docsheets',
        selectTemplate: function (t) {
          if (t && t.original)
            if (t.original.pages)
              if (Array.isArray(t.original.pages) && t.original.pages.length) {
                let n = JSON.parse(JSON.stringify(t));
                let l = ' (' + o.trans.get('__JSON__.viewer.docModule.pages') + ' : ';
                let s = null;
                t.original.pages.forEach((r) => {
                  s ? (l += ' ; ') : (s = r);
                  n.original.pages = r;
                  l += this.selectTemplate(n);
                });
                l += ' )';
                n.original.pages = null;
                n.original.content = t.original.doc_key + l;
                return this.selectTemplate(n);
              } else
                return (
                  '<span contenteditable="false" class="clickableTribute" data-api="docsheets" data-id="' +
                  t.original.id +
                  '" data-code="' +
                  t.original.code.replace('"', '&quot;') +
                  '" data-designation="' +
                  t.original.designation.replace('"', '&quot;') +
                  '" data-version="' +
                  t.original.version +
                  '" data-page="' +
                  t.original.pages +
                  '">' +
                  t.original.pages +
                  '</span>'
                );
            else {
              let n = t.original.doc_key;
              if (t.original.content) {
                n = t.original.content;
              }
              return (
                '<span contenteditable="false" class="clickableTribute" data-api="docsheets" data-id="' +
                t.original.id +
                '" data-code="' +
                t.original.code.replace('"', '&quot;') +
                '" data-designation="' +
                t.original.designation.replace('"', '&quot;') +
                '" data-version="' +
                t.original.version +
                '">' +
                n +
                '</span>'
              );
            }
          else return '';
        },
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      moddocCollection: {
        trigger: '@mod',
        postTributeAction: 'mods',
        selectTemplate: function (t) {
          return t && t.original
            ? t.original.indexId && t.original.indexContent
              ? '<span contenteditable="false" class="clickableTribute" data-api="files" data-id="' +
                t.original.id +
                '" data-indexlink="' +
                t.original.indexId +
                '" data-title="' +
                t.original.title.replace('"', '&quot;') +
                '" >' +
                t.original.title +
                ' (' +
                t.original.indexContent +
                ')</span>'
              : '<span contenteditable="false" class="clickableTribute" data-api="files" data-id="' +
                t.original.id +
                '" data-title="' +
                t.original.title.replace('"', '&quot;') +
                '">' +
                t.original.title +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: [],
        menuItemLimit: 10,
        menuShowMinLength: 0,
      },
      fileCollection: {
        trigger: '@file',
        postTributeAction: 'files',
        selectTemplate: function (t) {
          if (t && t.original)
            if (t.original.pages)
              if (Array.isArray(t.original.pages) && t.original.pages.length) {
                let n = JSON.parse(JSON.stringify(t));
                let l = ' (' + o.trans.get('__JSON__.viewer.docModule.pages') + ' : ';
                let s = null;
                t.original.pages.forEach((r) => {
                  s ? (l += ' ; ') : (s = r);
                  n.original.pages = r;
                  l += this.selectTemplate(n);
                });
                l += ' )';
                n.original.pages = null;
                n.original.content = t.original.titleExt + l;
                return this.selectTemplate(n);
              } else
                return (
                  '<span contenteditable="false" class="clickableTribute" data-api="files" data-id="' +
                  t.original.id +
                  '" data-title="' +
                  t.original.titleExt.replace('"', '&quot;') +
                  '" data-page="' +
                  t.original.pages +
                  '">' +
                  t.original.pages +
                  '</span>'
                );
            else {
              let n = t.original.titleExt;
              if (t.original.content) {
                n = t.original.content;
              }
              return (
                '<span contenteditable="false" class="clickableTribute" data-api="files" data-id="' +
                t.original.id +
                '" data-title="' +
                t.original.titleExt.replace('"', '&quot;') +
                '">' +
                n +
                '</span>'
              );
            }
          else return '';
        },
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      indexCollection: {
        trigger: '@index-',
        postTributeAction: null,
        lookup: 'content',
        fillAttr: 'content',
        selectTemplate: function (t) {
          return t && t.original
            ? '<span contenteditable="false" class="tributeIndex" data-content="' +
                t.original.content.replace('"', '&quot;') +
                '" data-api="index" data-id="' +
                t.original.index +
                '">' +
                t.original.content +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: function (t, n) {
          n([
            {
              content: t,
              index: 'index' + UUID.generate().replaceAll('-', ''),
            },
          ]);
        },
        menuItemLimit: 1,
        menuShowMinLength: 1,
      },
      linkToCollection: {
        trigger: '@linkto-',
        postTributeAction: null,
        lookup: 'content',
        fillAttr: 'content',
        selectTemplate: function (t) {
          return t && t.original
            ? '<span contenteditable="false" class="clickableTribute" data-content="' +
                t.original.content.replace('"', '&quot;') +
                '" data-api="linkTo" data-id="' +
                t.original.index +
                '">' +
                t.original.content +
                '</span>'
            : ';';
        },
        requireLeadingSpace: false,
        values: function (t, n) {
          n(o.getCurrentListOfIndexes(false));
        },
        menuItemLimit: 10,
        menuShowMinLength: 0,
      },
      poiCollection: {
        trigger: '@poi-',
        postTributeAction: null,
        lookup: 'content',
        fillAttr: 'content',
        selectTemplate: function (t) {
          return t && t.original
            ? '<span contenteditable="false" class="clickableTribute" data-api="pois" data-id="' +
                t.original.id +
                '" data-content="' +
                t.original.content.replace('"', '&quot;') +
                '"data-objecttype="' +
                t.original.object_type_api +
                '"data-objectid="' +
                t.original.object_id +
                '"data-fileid="' +
                t.original.primary_id +
                '">' +
                t.original.content +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: [],
        menuItemLimit: 10,
        menuShowMinLength: 0,
      },
      assetCollection: {
        trigger: '@asset',
        postTributeAction: 'assets',
        selectTemplate: function (t) {
          return t && t.original
            ? '<span contenteditable="false" class="clickableTribute" data-api="assets" data-id="' +
                t.original.id +
                '" data-code="' +
                t.original.code.replace('"', '&quot;') +
                '" data-designation="' +
                t.original.designation.replace('"', '&quot;') +
                '">' +
                t.original.code +
                ' - ' +
                t.original.designation +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      itemCollection: {
        trigger: '@item',
        postTributeAction: 'items',
        selectTemplate: function (t) {
          return t && t.original && t.original.code
            ? t.original.quantity && t.original.quantity > 0
              ? '<span contenteditable="false" class="clickableTribute" data-api="items" data-id="' +
                t.original.id +
                '" data-code="' +
                t.original.code.replace('"', '&quot;') +
                '" data-designation="' +
                t.original.designation.replace('"', '&quot;') +
                '" data-quantity="' +
                t.original.quantity +
                '">' +
                t.original.code +
                ' - ' +
                t.original.designation +
                ' (' +
                t.original.quantity +
                ')</span>'
              : '<span contenteditable="false" class="clickableTribute" data-api="items" data-id="' +
                t.original.id +
                '" data-code="' +
                t.original.code.replace('"', '&quot;') +
                '" data-designation="' +
                t.original.designation.replace('"', '&quot;') +
                '">' +
                t.original.code +
                ' - ' +
                t.original.designation +
                '</span>'
            : '';
        },
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      videoCollection: {
        trigger: '@video',
        postTributeAction: 'video',
        requireLeadingSpace: false,
        values: [],
        menuShowMinLength: 0,
      },
      helpCollection: {
        trigger: '@',
        postTributeAction: null,
        lookup: 'content',
        fillAttr: 'content',
        values: i,
        selectTemplate: function (t) {
          return '@' + t.original.content + '-';
        },
        requireLeadingSpace: false,
        menuItemLimit: 10,
        menuShowMinLength: 0,
      },
      helpTemplateHashtagCollection: {
        trigger: '#',
        postTributeAction: null,
        lookup: 'content',
        fillAttr: 'content',
        values: [{ content: 'checkbox' }],
        selectTemplate: function (t) {
          let n = 'checkbox' + UUID.generate();
          switch (t.original.content) {
            case 'checkbox':
              return (
                '<span contenteditable="false" class="checkboxTributeParent" ><input id="' +
                n +
                '" type="checkbox" class="checkboxTribute"></span>'
              );
          }
        },
        requireLeadingSpace: false,
        menuItemLimit: 10,
        menuShowMinLength: 0,
      },
      hasBeenClicked: null,
      filesLinked: [],
      showPopupSelection: false,
      codeSelected: null,
      tribute: null,
      parsedText: null,
      dialogElement: null,
      elementToReplace: null,
      menuSelectionDone: null,
      keyboardKey: {},
    };
  },
  computed: {
    docModuleText() {
      return this.parsedText ? this.parsedText : this.contentText;
    },
    quickToolbarSettings() {
      return {
        enable: this.enabled,
        showOnRightClick: false,
        actionOnScroll: 'hide',
        table: [
          'TableHeader',
          'TableRows',
          'TableColumns',
          'BackgroundColor',
          '-',
          'TableRemove',
          'Alignments',
          'TableCellVerticalAlign',
          'Styles',
          '-',
          'TableCell',
        ],
      };
    },
    toolbarSettings() {
      if (this.enabled) {
        let o = [
          {
            tooltipText: this.trans.get('__JSON__.viewer.docModule.template'),
            undo: true,
            click: this.showTemplate.bind(this),
            template:
              '<button class="e-tbar-btn e-btn" tabindex="-1" id="helpDocModule"  style="width:100%">   <span class="e-btn-icon e-icons sf-icon-solutions---03" style="font-weight: 500;">   </span></button>',
          },
          '|',
          'FontName',
          'FontSize',
          'FontColor',
          'BackgroundColor',
          '|',
          'Bold',
          'Italic',
          'Underline',
          '|',
          'Formats',
          'Alignments',
          'OrderedList',
          'UnorderedList',
          'Indent',
          'Outdent',
          '|',
          'createTable',
          '|',
          'Image',
          {
            tooltipText: this.trans.get('__JSON__.viewer.docModule.gallery'),
            undo: true,
            click: this.onImageGalleryClick.bind(this),
            template:
              '<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="galleryDocModule"  style="width:100%">   <span class="e-btn-icon sf-icon-view-small-icons e-icons" style="font-weight: 500; font-size: 13px;">   </span></button>',
          },
          '|',
          'Undo',
          'Redo',
          'ClearFormat',
          '|',
          {
            tooltipText: this.trans.get('__JSON__.viewer.pdf.toolbar.print'),
            undo: false,
            click: this.printDocmod.bind(this),
            template:
              '<button class="e-tbar-btn e-btn" tabindex="-1" id="printDocmodButton"  style="width:100%">   <span class="e-btn-icon e-print e-icons" style="font-weight: 500; font-size: 14px">   </span></button>',
          },
          {
            tooltipText: this.trans.get('__JSON__.viewer.docModule.autolink'),
            undo: true,
            click: this.autolinkDocmod.bind(this),
            template:
              '<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="autolinkDocModule"  style="width:100%">   <span class="e-btn-icon sf-icon-text-highlight-color e-icons" style="font-weight: 500;">   </span></button>',
          },
          {
            tooltipText: this.trans.get('__JSON__.viewer.docModule.helpContent.help'),
            undo: true,
            click: this.showHelp.bind(this),
            template:
              '<button class="e-tbar-btn e-control e-btn e-lib e-icon-btn" tabindex="-1" id="helpDocModule"  style="width:100%">   <span class="e-btn-icon sf-icon-help e-icons" style="font-weight: 500;">   </span></button>',
          },
        ];
        if (this.isSuperAdmin) {
          o.push('SourceCode');
        }
        return {
          enableFloating: false,
          type: 'Expand',
          items: o,
        };
      } else {
        let o = [
          {
            tooltipText: this.trans.get('__JSON__.viewer.pdf.toolbar.print'),
            undo: false,
            click: this.printDocmod.bind(this),
            template:
              '<button class="e-tbar-btn e-btn" tabindex="-1" id="printDocmodButton"  style="width:100%">   <span class="e-btn-icon e-print e-icons" style="font-weight: 500; font-size: 14px">   </span></button>',
          },
        ];
        if (this.dataViewer.tableOfContent) {
          o.push({
            tooltipText: this.trans.get('__JSON__.viewer.docModule.toggleTableOfContent'),
            undo: false,
            click: this.toggleTableOfContent.bind(this),
            template:
              '<button class="e-tbar-btn e-btn" tabindex="-1" id="tableOfContentButton"  style="width:100%">   <span class="e-btn-icon e-icons sf-icon-black-list-wf" style="font-weight: 500; font-size: 14px">   </span></button>',
          });
        }
        return {
          type: 'Expand',
          enableFloating: false,
          items: o,
        };
      }
    },
    tributeMenuShown() {
      return false;
    },
  },
  watch: {
    getContent() {
      if (this.getContent) {
        this.getHtml();
      }
    },
    enabled() {
      this.highlightIndexData = this.enabled;
      this.manageEnabled(true);
    },
    contentText() {
      this.parsedText = null;
    },
    tributeMenuShown() {
      this.tributeMenuShown
        ? setTimeout(() => {
            $('.e-rte-image').css('pointer-events', 'none');
          }, 100)
        : setTimeout(() => {
            $('.e-rte-image').css('pointer-events', '');
          }, 100);
    },
  },
  methods: {
    printDocmod() {
      this.$refs.docModuleEditor.print();
    },
    getTreeInstance() {
      return this.getSyncfusionInstance('tableOfContent' + this.idDocModuleEditor, 'getTreeData');
    },
    getTreeviewData() {
      let o = this.getTreeInstance();
      return o ? o.getTreeData() : [];
    },
    selectNode(o) {
      let e = this;
      if (o.isInteracted) {
        let i = e.getTreeviewData().find((t) => t.id == o.nodeData.id);
        if (i.interactable && i.fileId) {
          D(document.getElementById(e.spinnerDocModuleEditor));
          axios
            .get('api/interactive_file/' + i.fileId + '/json')
            .then((t) => {
              v(document.getElementById(e.spinnerDocModuleEditor));
              this.parsedText = t.data.content;
            })
            .catch((t) => {
              console.error(t);
              v(document.getElementById(e.spinnerDocModuleEditor));
              this.showInvalidToast(this.trans.get('__JSON__.viewer.toast.error.invalidReference'));
            });
        }
      }
    },
    toggleTableOfContent(o = void 0) {
      if (this.dataViewer && this.dataViewer.tableOfContent) {
        o !== void 0
          ? o
            ? this.$refs.sidebarInstance.show()
            : this.$refs.sidebarInstance.hide()
          : this.$refs.sidebarInstance.toggle();
      }
    },
    onChange(o) {
      this.$emit('textContent', o.value);
    },
    actionBegin: function (o) {
      if (o.requestType === 'EnterAction') {
        o.cancel = true;
      }
    },
    beforeQuickToolbarOpen: function (o) {
      if (o.name === 'beforeQuickToolbarOpen' && this.blockQuickToolbarOpen) {
        o.cancel = true;
      }
    },
    beforeOpenMenu(o) {
      let e = o && o.event.target ? o.event.target : null;
      if (!e) {
        o.cancel = true;
        return;
      }
      for (; e.parentElement && !(e.classList && e.classList.contains('clickableTribute')); ) e = e.parentElement;
      this.enabled && e && e.classList && e.classList.contains('clickableTribute')
        ? ((this.elementToReplace = e),
          this.elementToReplace.parentElement &&
            this.elementToReplace.parentElement.classList.contains('clickableTribute') &&
            (this.elementToReplace = this.elementToReplace.parentElement),
          this.$refs.docmodContextMenu.enableItems(
            ['replaceTribute', 'changeContentTribute', 'copyTribute'],
            false,
            true,
          ),
          this.$refs.docmodContextMenu.enableItems(['copyTribute'], true, true),
          ['docsheets', 'files', 'tags', 'items', 'locations'].includes(this.elementToReplace.dataset.api) &&
            this.$refs.docmodContextMenu.enableItems(['replaceTribute'], true, true),
          ['items'].includes(this.elementToReplace.dataset.api) ||
            this.$refs.docmodContextMenu.enableItems(['changeContentTribute'], true, true),
          this.elementToReplace.classList.add('docModuleSelected'))
        : (o.cancel = true);
    },
    onCloseMenu() {
      if (!this.menuSelectionDone) {
        this.elementToReplace = null;
        this.menuSelectionDone = false;
      }
    },
    selectMenu(o) {
      switch (o.item.id) {
        case 'copyTribute':
          if (ClipboardItem.supports('text/html')) {
            let i = this.elementToReplace.outerHTML;
            const t = new ClipboardItem({
              'text/html': new Blob([this.elementToReplace.outerHTML], { type: 'text/html' }),
              'text/plain': new Blob([this.elementToReplace.outerHTML], { type: 'text/plain' }),
            });
            navigator.clipboard.write([t]);
          }
          break;
        case 'replaceTribute':
          if (this.enabled && this.elementToReplace) {
            this.menuSelectionDone = true;
            this.tributePostAction(this.elementToReplace.dataset.api);
          }
          break;
        case 'changeContentTribute':
          if (this.enabled && this.elementToReplace) {
            let i = false;
            if (this.elementToReplace.childNodes && this.elementToReplace.childNodes.length) {
              this.elementToReplace.childNodes.forEach((t) => {
                if (t && t.classList && t.classList.contains('clickableTribute')) {
                  i = true;
                }
              });
            }
            this.showWarning = i;
            this.menuSelectionDone = true;
            this.innerTextElement = this.elementToReplace.innerText;
            this.showEditModal = true;
          }
          break;
      }
    },
    closeContentEdition() {
      this.menuSelectionDone = false;
      if (this.elementToReplace && this.elementToReplace.classList) {
        this.elementToReplace.classList.remove('docModuleSelected');
      }
      this.elementToReplace = null;
      this.innerTextElement = null;
      this.showEditModal = false;
    },
    endContentEdition(o) {
      if (this.elementToReplace && o) {
        let e = document.getElementsByClassName('docModuleSelected');
        if (e && e.length) {
          this.elementToReplace = e[0];
          this.elementToReplace.innerText = o;
        }
      }
      this.closeContentEdition();
    },
    getCurrentListOfIndexes(o = false) {
      let e = this.$refs.docModuleEditor.getHtml();
      if (!e) {
        e = '';
      }
      let i = [...e.matchAll(/data-api=[\\]?"index[\\]?" data-id=[\\]?"([\s\S]*?)[\\]?"/gm)];
      let t = [];
      i.forEach((n) => {
        if (n.length >= 2) {
          let l = $("[data-api='index'][data-id='" + n[1] + "']")
            .text()
            .trim();
          if (l.length) {
            t.push({
              content: l,
              index: n[1],
            });
          }
        }
      });
      if (!t.length && o) {
        t = [{ index: null }];
      }
      return t;
    },
    endSelect() {
      this.showPopupSelection = false;
    },
    manageEnabled(o) {
      this.enabled
        ? ($('#' + this.idDocModuleEditor + '_rte-edit-view').attr('contenteditable', 'true'),
          o && this.getTributeData())
        : $('#' + this.idDocModuleEditor + '_rte-edit-view').attr('contenteditable', 'false');
    },
    clearFocus() {
      this.$refs.docModuleEditor.ej2Instances.pasteCleanupSettings.allowedStyleProps =
        this.pasteCleanupSettings.allowedStyleProps;
      this.manageEnabled(false);
    },
    resizeDocModule() {
      if (this.$refs.docModuleEditor) {
        this.$refs.docModuleEditor.refreshUI();
      }
    },
    manageClickTribute(o) {
      let e = this;
      if (o) {
        e.hasBeenClicked
          ? (e.hasBeenClicked.dblClick = true)
          : (e.hasBeenClicked = {
              api: o.dataset.api,
              id: o.dataset.id,
              code: o.dataset.code,
            });
        setTimeout(function () {
          if (e.hasBeenClicked && e.hasBeenClicked.api && e.hasBeenClicked.id) {
            let i = e.hasBeenClicked.id;
            let t = e.hasBeenClicked.api;
            let n = e.hasBeenClicked.code;
            let l = e.dataViewer && e.dataViewer.uuid ? e.dataViewer.uuid : null;
            if (e.hasBeenClicked.dblClick) {
              if (e.hasBeenClicked.api !== 'linkTo' && e.hasBeenClicked.api !== 'index') {
                let s = null;
                if (e.hasBeenClicked.api === 'files' || e.hasBeenClicked.api === 'docsheets') {
                  let r = null;
                  if (o.dataset.page) {
                    r = o.dataset.page;
                  }
                  s = {
                    goToTab: e.trans.get('__JSON__.main.panel.header.viewer'),
                    goToPage: r,
                  };
                }
                C.$emit('showPanel', {
                  panelDroite: true,
                  refObjet: e.hasBeenClicked.id,
                  typeObject: e.hasBeenClicked.api,
                  tabDatas: s,
                });
              }
            } else
              switch (e.hasBeenClicked.api) {
                case 'tags':
                  if (e.dataViewer && e.dataViewer.id) {
                    D(document.getElementById(e.spinnerDocModuleEditor));
                    axios
                      .get('api/interactive_file/linksById', {
                        params: {
                          tagId: e.hasBeenClicked.id,
                          fileId: e.dataViewer.id,
                        },
                      })
                      .then((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        e.filesLinked = s.data.files;
                        if (e.filesLinked.length) {
                          e.filesLinked.length === 1
                            ? e.filesLinked[0].searchForPano
                              ? e.centralPanelsStore.addingCentralPanels({
                                  centralPanelType: 'fileViewer',
                                  centralPanelData: {
                                    comeFromUuid: l,
                                    getOnlyFile: false,
                                    fileId: e.filesLinked[0].id,
                                    hotSpotPanoId: e.filesLinked[0].searchForPano,
                                  },
                                })
                              : e.centralPanelsStore.addingCentralPanels({
                                  centralPanelType: 'fileViewer',
                                  centralPanelData: {
                                    comeFromUuid: l,
                                    getOnlyFile: false,
                                    fileId: e.filesLinked[0].id,
                                    tag: e.hasBeenClicked.code,
                                  },
                                })
                            : ((e.codeSelected = e.hasBeenClicked.code), (e.showPopupSelection = true));
                        }
                      })
                      .catch((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        e.showCenterToast(
                          e.trans.get('__JSON__.viewer.toast.error.interactiveFileList'),
                          'e-toast-danger',
                        );
                      });
                  }
                  break;
                case 'docsheets':
                  {
                    D(document.getElementById(e.spinnerDocModuleEditor));
                    axios
                      .get('api/docsheets/' + e.hasBeenClicked.id + '/isViewable')
                      .then((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        if (s.data.is_viewable) {
                          let r = null;
                          if (o.dataset.page) {
                            r = o.dataset.page;
                          }
                          e.fileGoToViewer(
                            {
                              id: s.data.id_Media,
                              extension: s.data.mediaExtension,
                              page: r,
                            },
                            false,
                            l,
                          );
                        }
                      })
                      .catch((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        console.error(s);
                      });
                  }
                  break;
                case 'files':
                  {
                    D(document.getElementById(e.spinnerDocModuleEditor));
                    axios
                      .get('api/files/' + e.hasBeenClicked.id)
                      .then((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        if (s.status !== 204) {
                          let r = s.data.main.file;
                          if (e.fileIsViewable(r)) {
                            if (o.dataset.page) {
                              r.page = o.dataset.page;
                            }
                            if (o.dataset.indexlink) {
                              r.indexlink = o.dataset.indexlink;
                            }
                            e.fileGoToViewer(r, false, l);
                          }
                        }
                      })
                      .catch((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        console.error(s);
                      });
                  }
                  break;
                case 'linkTo':
                  e.goToIndexlink(e.hasBeenClicked.id);
                  break;
                case 'index':
                  e.$emit('onIndexClicked', {
                    modelId: e.hasBeenClicked.id,
                    modelContent: o.dataset.content,
                  });
                  break;
                case 'pois':
                  {
                    D(document.getElementById(e.spinnerDocModuleEditor));
                    axios
                      .get('api/files/' + o.dataset.fileid)
                      .then((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        let r = s.data.main.file;
                        if (e.fileIsViewable(s.data.main.file)) {
                          let a = {
                            id: e.hasBeenClicked.id,
                            object_id: o.dataset.objectid,
                            object_type: o.dataset.objecttype,
                          };
                          e.fileGoToPoiViewer(s.data.main.file, a, l);
                        }
                      })
                      .catch((s) => {
                        v(document.getElementById(e.spinnerDocModuleEditor));
                        console.error(s);
                      });
                  }
                  break;
              }
          }
          e.hasBeenClicked = null;
        }, 300);
      }
    },
    onCreateDocModule() {
      let o = this;
      U({ target: document.getElementById(this.spinnerDocModuleEditor) });
      if (this.dataViewer && this.dataViewer.id) {
        C.$on('goToIndexLink' + this.dataViewer.id, this.goToIndexlink);
      }
      let e = this.getCurrentListOfIndexes();
      C.$emit('currentListOfIndexes', e);
      C.$on('dropFromTreeview', this.dropFromTreeview);
      C.$on('needResizing', this.resizeDocModule);
      C.$on('tributePostAction' + this.uuid, this.tributePostAction);
      C.$on('replaceTextInDocmod' + this.uuid, this.replaceTextInDocmod);
      C.$on('goToSelectedIndex', this.goToIndexlink);
      $('#' + this.idDocModuleEditor + '_toolbar_wrapper').css('height', '');
      $('#' + this.idDocModuleEditor + '_rte-edit-view').on('click', function (i) {
        let t = i.target;
        for (
          t.classList.contains('checkboxTributeParent') && (t = t.firstChild);
          t &&
          !t.classList.contains('clickableTribute') &&
          !t.classList.contains('tributeIndex') &&
          !t.classList.contains('checkboxTribute') &&
          t.localName !== 'a' &&
          t.parentElement;

        )
          t = t.parentElement;
        if (t.classList.contains('clickableTribute') || t.classList.contains('tributeIndex')) {
          o.manageClickTribute(t);
        }
        if (t.classList.contains('checkboxTribute')) {
          o.blockQuickToolbarOpen = true;
          o.manageClickCheckbox(t);
          setTimeout(() => {
            o.blockQuickToolbarOpen = false;
          }, 300);
        }
        if (t.localName === 'a') {
          i.preventDefault();
          o.manageClickLink(t);
        }
      });
      this.manageEnabled(true);
      this.$nextTick(() => {
        this.resizeDocModule();
        if (this.dataViewer && this.dataViewer.indexlink) {
          this.goToIndexlink(this.dataViewer.indexlink);
        }
      });
    },
    manageClickCheckbox(o) {
      if (this.enabled) {
        o.checked ? o.removeAttribute('checked') : o.setAttribute('checked', true);
      }
    },
    goToIndexlink(o) {
      let e = $('[data-api="index"][data-id="' + o + '"]');
      if (e && e.length) {
        e[0].scrollIntoView();
      }
    },
    onIndexClicked(o) {
      let e;
      e = this.moddocCollection.selectTemplate({
        original: {
          id: this.fileSelectionDocmod.id,
          title: this.fileSelectionDocmod.title,
          indexId: o.modelId,
          indexContent: o.modelContent,
        },
      });
      this.replaceTextDocmod(e);
      this.endTributeMenu();
    },
    pagesSelected(o) {
      if (!o.length) {
        o = [1];
      }
      let e = null;
      this.showDocmodSelection
        ? (e = this.moddocCollection.selectTemplate({
            original: {
              id: this.fileSelectionDocmod.id,
              title: this.fileSelectionDocmod.title,
            },
          }))
        : this.showGridFile
          ? (e = this.fileCollection.selectTemplate({
              original: {
                id: this.fileSelectionPage.id,
                titleExt: this.fileSelectionPage.title + '.' + this.fileSelectionPage.extension,
                pages: o,
              },
            }))
          : this.showGridDocsheet &&
            this.docObject &&
            (e = this.docCollection.selectTemplate({
              original: {
                id: this.docObject.id,
                code: this.docObject.code,
                designation: this.docObject.designation,
                version: this.docObject.version,
                doc_key: this.docObject.code + ' - ' + this.docObject.designation + ' - ' + this.docObject.version,
                pages: o,
              },
            }));
      this.replaceTextDocmod(e);
      this.endTributeMenu();
    },
    endTributeWithResult(o) {
      let e = null;
      if (o && o.length) {
        let i = o[0];
        switch (true) {
          case this.showSelectTemplate:
            {
              this.showSelectTemplate = false;
              this.replaceTextWithTemplate(o);
            }
            break;
          case this.showGridFile:
            switch (this.fileType) {
              case 'all':
              case 'video':
                if (['PDF', 'DOC', 'DOCX', 'DOCM', 'PPT', 'PPTX'].includes(o[0].extension)) {
                  this.fileSelectionPage = o[0];
                  this.showPageSelection = true;
                  return;
                } else
                  e = this.fileCollection.selectTemplate({
                    original: {
                      id: o[0].id,
                      titleExt: o[0].title + '.' + o[0].extension,
                    },
                  });
                break;
              case 'docmod':
                {
                  this.fileSelectionDocmod = o[0];
                  this.showDocmodSelection = true;
                }
                return;
              default:
                return;
            }
            break;
          case this.showGridDocsheet:
            axios
              .get('api/docsheets/' + o[0].id + '/isViewable')
              .then((t) => {
                t.data.is_viewable && ['PDF', 'DOC', 'DOCX', 'DOCM', 'PPT', 'PPTX'].includes(t.data.mediaExtension)
                  ? ((this.docObject = o[0]),
                    (this.fileSelectionPage = {
                      id: t.data.id_Media,
                      title: t.data.mediaTitle,
                      extension: t.data.mediaExtension,
                    }),
                    (this.showPageSelection = true))
                  : ((e = this.docCollection.selectTemplate({
                      original: {
                        id: o[0].id,
                        code: o[0].code,
                        designation: o[0].designation,
                        version: o[0].version,
                        doc_key: o[0].code + ' - ' + o[0].designation + ' - ' + o[0].version,
                      },
                    })),
                    this.replaceTextDocmod(e),
                    this.endTributeMenu());
              })
              .catch((t) => {
                console.error(t);
              });
            return;
          case this.showGridTag:
            e = this.tagCollection.selectTemplate({
              original: {
                id: o[0].id,
                code: o[0].code,
                designation: o[0].designation,
              },
            });
            break;
          case this.showGridLocation:
            e = this.locationCollection.selectTemplate({
              original: {
                id: o[0].id,
                code: o[0].code,
                designation: o[0].designation,
              },
            });
            break;
          case this.showGridItem:
            e = this.itemCollection.selectTemplate({
              original: {
                id: o[0].id,
                code: o[0].code,
                designation: o[0].designation,
                quantity: o[0].quantity,
              },
            });
            break;
          case this.showSelectAsset:
            e = this.assetCollection.selectTemplate({
              original: {
                id: o[0].id,
                code: o[0].code,
                designation: o[0].designation,
              },
            });
            break;
        }
        this.replaceTextDocmod(e);
      }
      this.endTributeMenu();
    },
    replaceTextDocmod(o) {
      if (o)
        if (this.elementToReplace) {
          let e = $.parseHTML(o);
          if (e.length) {
            this.elementToReplace.replaceWith(e[0]);
            this.elementToReplace = null;
          }
        } else {
          new V().setRange(document, this.range);
          this.tribute.current.element = document.getElementById(this.idDocModuleEditor + '_rte-edit-view');
          if (this.tribute.current.trigger === '@' || this.tribute.current.trigger === '+') {
            let i = this.tribute.collection.filter((t) => t.trigger === o || t.trigger + '-' === o);
            if (i && i.length && i[0].postTributeAction) {
              if (i[0].trigger + '-' === o) {
                o = i[0].trigger + ' ';
              }
              setTimeout(() => {
                C.$emit('tributePostAction' + this.uuid, i[0].postTributeAction);
              }, 250);
            }
          }
          this.replaceTextInSelection(o);
        }
    },
    replaceTextInDocmod(o) {
      if (this.tribute && this.tribute.uuid === o.uuid) {
        if (o.mentionText.substring(0, 1) !== '@') {
          o.mentionText = o.mentionTriggerChar + o.mentionText;
        }
        this.mention = o.mentionText;
        this.replaceTextInSelection(o.html);
      }
    },
    replaceTextWithTemplate(o) {
      let e = document.getElementById(this.idDocModuleEditor + '_rte-edit-view');
      if (e) {
        e.innerHTML = o;
      }
    },
    replaceTextInSelection(o, e = false) {
      let i = window.getSelection();
      if (i) {
        let t = i.anchorNode;
        if (t) {
          t.normalize();
          let n = t.innerHTML;
          if (n) {
            n = n.replace(this.mention, o);
            t.innerHTML = n;
            this.mention = null;
            let l = null;
            let s = 0;
            let r = 0;
            t.childNodes.forEach((a) => {
              if (!l)
                switch ((r++, a.nodeName)) {
                  case '#text':
                    if (a.textContent.includes(o)) {
                      l = a;
                      s = a.textContent.indexOf(o) + o.length;
                    }
                    break;
                  case 'SPAN':
                    if (a.outerHTML == o) {
                      l = t;
                      s = r;
                    }
                    break;
                }
            });
            if (l) {
              let a = document.createRange();
              a.setStart(l, s);
              a.collapse(true);
              i.removeAllRanges();
              i.addRange(a);
            }
          } else {
            t.replaceWith(t);
            if (e) return;
            this.replaceTextInSelection(o, true);
          }
        }
      }
    },
    endTributeMenuWithReselection() {
      new V().setRange(document, this.range);
      this.endTributeMenu();
    },
    endTributeMenu() {
      this.showGridFile = false;
      this.showGridDocsheet = false;
      this.showPageSelection = false;
      this.showGridItem = false;
      this.showGridTag = false;
      this.showGridLocation = false;
      this.showDocmodSelection = false;
      this.showSelectTemplate = false;
      this.showSelectAsset = false;
      this.fileSelectionPage = null;
      this.docObject = null;
      this.elementToReplace = null;
      this.menuSelectionDone = null;
      this.tribute.overrideActive = false;
      this.$nextTick(() => {
        this.tribute.hideMenu();
      });
    },
    tributePostAction(o) {
      switch (((this.range = this.$refs.docModuleEditor.getRange()), o)) {
        case 'files':
          {
            this.mention = '@file';
            this.fileType = 'all';
            this.showGridFile = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'assets':
          {
            this.mention = '@asset';
            this.fileType = 'asset';
            this.showSelectAsset = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'docsheets':
          {
            this.mention = '@doc';
            this.showGridDocsheet = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'tags':
          {
            this.mention = '@tag';
            this.showGridTag = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'locations':
          {
            this.mention = '@location';
            this.showGridLocation = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'mods':
          {
            this.mention = '@mod';
            this.fileType = 'docmod';
            this.showGridFile = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'items':
          {
            this.mention = '@item';
            this.showGridItem = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'video':
          {
            this.mention = '@video';
            this.fileType = 'video';
            this.showGridFile = true;
            this.tribute.overrideActive = true;
          }
          break;
        case 'records':
          {
            this.mention = '+rec';
            this.tribute.overrideActive = true;
          }
          let e = this.recordTemplateCollection.selectTemplate({ original: { id: 'Test' } });
          {
            this.replaceTextDocmod(e);
            this.endTributeMenu();
          }
          break;
      }
    },
    getTributeData() {
      if (this.enabled) {
        D(document.getElementById(this.spinnerDocModuleEditor));
        let o = {
          objectPoiType: this.poiData ? this.poiData.object_type : null,
          objectPoiId: this.poiData ? this.poiData.object_id : null,
        };
        axios
          .post('api/interactive_file/dataDocModule', o)
          .then((e) => {
            v(document.getElementById(this.spinnerDocModuleEditor));
            let i = [
              this.docCollection,
              this.moddocCollection,
              this.fileCollection,
              this.indexCollection,
              this.linkToCollection,
              this.tagCollection,
              this.locationCollection,
              this.videoCollection,
              this.itemCollection,
            ];
            if (this.objectData !== null && this.objectData.type === 'Quickbrain\\Models\\Tag') {
              i.push(this.assetCollection);
            }
            if (this.poiData) {
              let t = [];
              e.data.poisData.forEach((n) => {
                switch (((n.content = n.code + ' - ' + n.designation), n.object_type)) {
                  case 'Quickbrain\\Models\\Event':
                  case 'events':
                    n.object_type_api = 'events';
                    break;
                  case 'Quickbrain\\Models\\Task':
                  case 'tasks':
                    n.object_type_api = 'tasks';
                    break;
                }
                if (n.primary_file && n.primary_file.length) {
                  n.primary_id = n.primary_file[0].id;
                }
                if (n.object_type_api && n.primary_id && n.informations && n.informations != '') {
                  t.push(n);
                }
              });
              this.poiCollection.values = t;
              i.push(this.poiCollection);
            }
            i.push(this.helpCollection);
            i.push(this.helpTemplateHashtagCollection);
            this.tribute = new O({
              collection: i,
              replaceTextSuffix: '',
              allowSpaces: true,
              uuid: this.uuid,
              element: this.$refs.docModuleEditor.ej2Instances.inputElement,
            });
            this.tribute.attach(this.$refs.docModuleEditor.ej2Instances.inputElement);
            this.manageEnabled(false);
          })
          .catch((e) => {
            v(document.getElementById(this.spinnerDocModuleEditor));
          });
      }
    },
    imageSelected(o) {
      this.showGalleryModal = false;
      if (o.length) {
        new V().setRange(document, this.range);
        this.$refs.docModuleEditor.executeCommand('insertImage', {
          url: o[0].urlImage,
          cssClass: 'rte-img',
        });
      }
    },
    closeModalGallery() {
      this.range = null;
      this.showGalleryModal = false;
    },
    onImageGalleryClick() {
      this.range = this.$refs.docModuleEditor.getRange();
      this.showGalleryModal = true;
    },
    autolinkDocmod() {
      D(document.getElementById(this.spinnerDocModuleEditor));
      let o = this.$refs.docModuleEditor.getHtml();
      axios
        .post('api/interactive_file/parseDocModule', {
          content: o,
          parseContent: this.parseContent,
        })
        .then((e) => {
          v(document.getElementById(this.spinnerDocModuleEditor));
          this.parsedText = e.data.content;
        })
        .catch((e) => {
          v(document.getElementById(this.spinnerDocModuleEditor));
        });
    },
    showHelp() {
      let o = this;
      this.dialogElement = X.alert({
        title: this.trans.get('__JSON__.viewer.docModule.helpContent.help'),
        content: function () {
          return {
            template: { _context: o.$ },
            data: {
              passDataToProps: false,
              componentToCreate: Z(ee(() => te(() => import('./V-EUEiXi.js'), __vite__mapDeps([0, 1, 2, 3])))),
              propsToPass: {},
            },
          };
        },
        okButton: {
          text: this.trans.get('__JSON__.main.modal.button.ok'),
          click: this.closePopup,
        },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' },
      });
    },
    showTemplate() {
      this.showSelectTemplate = true;
    },
    closePopup() {
      if (this.dialogElement) {
        this.dialogElement.hide();
      }
    },
    getHtml() {
      let o = this.$refs.docModuleEditor.getHtml();
      if (!o) {
        o = '';
      }
      this.$emit('returnHtml', o);
    },
    dropFromTreeview(o) {
      if (o.target && o.type && o.id && document.getElementById(this.idDocModule).contains(o.target) && this.enabled) {
        let i = null;
        switch (o.type) {
          case 'docsheets':
            axios.get('api/docsheets/' + o.id).then((t) => {
              if (t.data.main.docsheet) {
                i = this.docCollection.selectTemplate({ original: t.data.main.docsheet });
                if (i) {
                  this.$refs.docModuleEditor.executeCommand('insertHTML', i);
                }
              }
            });
            break;
          case 'files':
            axios.get('api/files/' + o.id).then((t) => {
              if (t.data.main.file) {
                t.data.main.file.extension === 'DOCMOD'
                  ? (i = this.moddocCollection.selectTemplate({ original: t.data.main.file }))
                  : (i = this.fileCollection.selectTemplate({ original: t.data.main.file }));
                if (i) {
                  this.$refs.docModuleEditor.executeCommand('insertHTML', i);
                }
              }
            });
            break;
          case 'tags':
            axios.get('api/tags/' + o.id).then((t) => {
              if (t.data.main.tag) {
                i = this.tagCollection.selectTemplate({ original: t.data.main.tag });
                if (i) {
                  this.$refs.docModuleEditor.executeCommand('insertHTML', i);
                }
              }
            });
            break;
          case 'locations':
            axios.get('api/locations/' + o.id).then((t) => {
              if (t.data.main.location) {
                i = this.locationCollection.selectTemplate({ original: t.data.main.location });
                if (i) {
                  this.$refs.docModuleEditor.executeCommand('insertHTML', i);
                }
              }
            });
            break;
        }
      }
    },
  },
  beforeUnmount() {
    $('#' + this.idDocModuleEditor + '_rte-edit-view').off('click');
    if (this.tribute) {
      this.tribute.detach(this.$refs.docModuleEditor.ej2Instances.inputElement);
    }
    if (this.dataViewer && this.dataViewer.id) {
      C.$off('goToIndexLink' + this.dataViewer.id, this.goToIndexlink);
    }
    C.$off('dropFromTreeview', this.dropFromTreeview);
    C.$off('needResizing', this.resizeDocModule);
    C.$off('tributePostAction' + this.uuid, this.tributePostAction);
    C.$off('replaceTextInDocmod' + this.uuid, this.replaceTextInDocmod);
    C.$off('goToSelectedIndex', this.goToIndexlink);
  },
};
const He = ['id'];
const Ve = ['id'];
const Je = { class: 'tableOfContentSidebar' };
const Ge = { class: 'tableOfContentContent' };
const Ue = ['id'];
function ze(o, e, i, t, n, l) {
  const s = p('ejs-treeview');
  const r = p('ejs-sidebar');
  const a = p('ejs-richtexteditor');
  const c = p('ejs-contextmenu');
  const d = p('modal_gallery');
  const h = p('select-interactive-files');
  const u = p('modal-add-files');
  const g = p('modal-dynamic-grid');
  const T = p('modal-select-template');
  const m = p('modal-selection-items');
  const f = p('modal-selection-pages');
  const x = p('modal-selection-docmods');
  const I = p('modal-edit-content');
  _();
  return B(
    'div',
    {
      class: Y(this.highlightIndexData ? 'editionMode' : 'viewerMode'),
      id: n.idDocModule,
      style: { width: '100%' },
    },
    [
      w('div', { id: n.spinnerDocModuleEditor }, null, 8, Ve),
      b(
        r,
        {
          width: n.widthSidebar,
          target: '#' + n.idDocModuleEditor + 'sidebarContainer',
          enableDock: false,
          enableGestures: false,
          isOpen: false,
          type: 'Push',
          ref: 'sidebarInstance',
          zIndex: 0,
        },
        {
          default: y(() => [
            w('div', Je, [
              w('div', Ge, [
                b(
                  s,
                  {
                    id: 'tableOfContent' + n.idDocModuleEditor,
                    ref: 'tableOfContent',
                    allowDragAndDrop: false,
                    allowEditing: false,
                    allowMultiSelection: false,
                    enableAutoResize: true,
                    enablePersistence: false,
                    fields: n.fields,
                    nodeSelected: l.selectNode,
                  },
                  null,
                  8,
                  ['id', 'fields', 'nodeSelected'],
                ),
              ]),
            ]),
          ]),
          _: 1,
        },
        8,
        ['width', 'target'],
      ),
      w(
        'div',
        { id: n.idDocModuleEditor + 'sidebarContainer' },
        [
          w('div', null, [
            b(
              a,
              {
                id: n.idDocModuleEditor,
                ref: 'docModuleEditor',
                change: l.onChange,
                actionBegin: l.actionBegin,
                beforeQuickToolbarOpen: l.beforeQuickToolbarOpen,
                created: l.onCreateDocModule,
                focus: l.clearFocus,
                readonly: !i.enabled,
                height: o.heightValue,
                insertImageSettings: n.imageSettings,
                pasteCleanupSettings: n.pasteCleanupSettings,
                placeholder: i.placeholder,
                quickToolbarSettings: l.quickToolbarSettings,
                toolbarSettings: l.toolbarSettings,
                value: l.docModuleText,
              },
              null,
              8,
              [
                'id',
                'change',
                'actionBegin',
                'beforeQuickToolbarOpen',
                'created',
                'focus',
                'readonly',
                'height',
                'insertImageSettings',
                'pasteCleanupSettings',
                'placeholder',
                'quickToolbarSettings',
                'toolbarSettings',
                'value',
              ],
            ),
          ]),
        ],
        8,
        Ue,
      ),
      b(
        c,
        {
          ref: 'docmodContextMenu',
          target: n.idDocModuleWithHashtag,
          beforeOpen: l.beforeOpenMenu,
          onClose: l.onCloseMenu,
          items: n.menuItems,
          select: l.selectMenu,
        },
        null,
        8,
        ['target', 'beforeOpen', 'onClose', 'items', 'select'],
      ),
      n.showGalleryModal
        ? (_(),
          M(
            d,
            {
              key: 0,
              onClose: l.closeModalGallery,
              onFileSelected: l.imageSelected,
              extensionFileSelected: [],
              idFilesSelected: [],
              objectType: 'docModule',
              typeFile: 'images',
              numberFilesMax: 1,
            },
            null,
            8,
            ['onClose', 'onFileSelected'],
          ))
        : k('', true),
      n.showPopupSelection
        ? (_(),
          M(
            h,
            {
              key: 1,
              onClose: l.endSelect,
              code: n.codeSelected,
              dataViewerUuid: i.dataViewer.uuid,
              target: n.idDocModuleWithHashtag,
              listLinked: n.filesLinked,
            },
            null,
            8,
            ['onClose', 'code', 'dataViewerUuid', 'target', 'listLinked'],
          ))
        : k('', true),
      n.showGridFile
        ? (_(),
          M(
            u,
            {
              key: 2,
              typeFile: n.fileType,
              objectType: 'docmod',
              numberFilesMax: 1,
              onFileSelected: l.endTributeWithResult,
              onClose: l.endTributeMenuWithReselection,
            },
            null,
            8,
            ['typeFile', 'onFileSelected', 'onClose'],
          ))
        : k('', true),
      n.showSelectAsset
        ? (_(),
          M(
            g,
            {
              key: 3,
              onClose: e[0] || (e[0] = (E) => (n.showSelectAsset = false)),
              onSelectData: l.endTributeWithResult,
              gridUrl: 'api/dynamicRequests/assets/label/modal',
              supplementaryParamsUrl: { eventable_id: i.objectData.id },
              numberMax: 1,
              header: o.trans.get('__JSON__.docsheet.content.selectAsset'),
              promptWidth: '1000px',
            },
            null,
            8,
            ['onSelectData', 'supplementaryParamsUrl', 'header'],
          ))
        : k('', true),
      n.showSelectTemplate
        ? (_(),
          M(
            T,
            {
              key: 4,
              typeFile: 'docmod',
              objectType: 'docmod',
              numberFilesMax: 1,
              onFileSelected: l.endTributeWithResult,
              onClose: e[1] || (e[1] = (E) => (n.showSelectTemplate = false)),
            },
            null,
            8,
            ['onFileSelected'],
          ))
        : k('', true),
      n.showGridDocsheet
        ? (_(),
          M(
            g,
            {
              key: 5,
              onClose: l.endTributeMenuWithReselection,
              onSelectData: l.endTributeWithResult,
              gridUrl: 'api/dynamicRequests/docsheets/label/modal',
              supplementaryParamsUrl: {
                objectType: 'docmod',
                firstIdInGrid: i.firstPositionsIds?.docsheets,
              },
              numberMax: 1,
              header: o.trans.get('__JSON__.docsheet.content.selectDocsheet'),
              promptWidth: '800px',
            },
            null,
            8,
            ['onClose', 'onSelectData', 'supplementaryParamsUrl', 'header'],
          ))
        : k('', true),
      n.showGridItem
        ? (_(),
          M(
            m,
            {
              key: 6,
              'object-type': 'docmod',
              'supplementary-data': i.supplementaryData,
              'number-items-max': 1,
              onItemSelected: l.endTributeWithResult,
              onClose: l.endTributeMenuWithReselection,
            },
            null,
            8,
            ['supplementary-data', 'onItemSelected', 'onClose'],
          ))
        : k('', true),
      n.showGridTag
        ? (_(),
          M(
            g,
            {
              key: 7,
              onClose: l.endTributeMenuWithReselection,
              onSelectData: l.endTributeWithResult,
              gridUrl: 'api/dynamicRequests/tags/label/modal',
              numberMax: 1,
              header: o.trans.get('__JSON__.tag.content.selectTag'),
              promptWidth: '800px',
            },
            null,
            8,
            ['onClose', 'onSelectData', 'header'],
          ))
        : k('', true),
      n.showGridLocation
        ? (_(),
          M(
            g,
            {
              key: 8,
              onClose: l.endTributeMenuWithReselection,
              onSelectData: l.endTributeWithResult,
              gridUrl: 'api/dynamicRequests/locations/label/modal',
              header: o.trans.get('__JSON__.location.content.selectLocation'),
              promptWidth: '800px',
            },
            null,
            8,
            ['onClose', 'onSelectData', 'header'],
          ))
        : k('', true),
      n.showPageSelection
        ? (_(),
          M(
            f,
            {
              key: 9,
              file: n.fileSelectionPage,
              onPagesSelected: l.pagesSelected,
              onClose: e[2] || (e[2] = (E) => (n.showPageSelection = false)),
            },
            null,
            8,
            ['file', 'onPagesSelected'],
          ))
        : k('', true),
      n.showDocmodSelection
        ? (_(),
          M(
            x,
            {
              key: 10,
              file: n.fileSelectionDocmod,
              onPagesSelected: l.pagesSelected,
              onOnIndexClicked: l.onIndexClicked,
              onClose: e[3] || (e[3] = (E) => (n.showDocmodSelection = false)),
            },
            null,
            8,
            ['file', 'onPagesSelected', 'onOnIndexClicked'],
          ))
        : k('', true),
      n.showEditModal
        ? (_(),
          M(
            I,
            {
              key: 11,
              content: n.innerTextElement,
              showWarning: n.showWarning,
              onClose: l.closeContentEdition,
              onChange: l.endContentEdition,
            },
            null,
            8,
            ['content', 'showWarning', 'onClose', 'onChange'],
          ))
        : k('', true),
    ],
    10,
    He,
  );
}
const Pt = R(qe, [['render', ze]]);
export { Pt as default };
