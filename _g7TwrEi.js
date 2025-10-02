import {
  by as Yt,
  bt as H,
  ap as p,
  bK as Qe,
  hA as Yi,
  hB as Xi,
  bl as Qi,
  bm as Zi,
  cY as pi,
  cZ as tr,
  cW as er,
  d0 as ir,
  bn as rr,
  bk as nr,
  bo as sr,
  bh as fi,
  dv as or,
  bH as ar,
  d$ as hr,
  bq as Ze,
  b6 as it,
  d2 as ne,
  d3 as lr,
  bs as Xt,
  b5 as Mt,
  cw as Qt,
  e6 as gi,
  d7 as mi,
  hC as Wn,
  hD as Un,
  e8 as _n,
  hE as qn,
  b4 as Bt,
  d9 as Kn,
  hF as Jn,
  bg as ur,
  ba as cr,
  b9 as yi,
  an as Vt,
  du as dr,
  eU as pr,
  fG as vi,
  fF as fr,
  hG as $n,
  f7 as gr,
  bd as mr,
  be as yr,
  bu as Hi,
  bv as Te,
  dX as Yn,
  hH as Xn,
  d4 as Qn,
  d5 as Zn,
  d6 as Oi,
  ci as ts,
  ac as wi,
  a9 as es,
  bz as is,
  e2 as rs,
  hI as ns,
  hJ as ss,
  bW as vr,
  ds as Wi,
  hK as wr,
  f8 as br,
  aQ as os,
  a4 as as,
  f$ as hs,
  hL as ls,
  g1 as Sr,
  g2 as us,
  a5 as ut,
  g5 as cs,
  dM as ds,
  f_ as ps,
  cj as wt,
  ge as _e,
  hM as fs,
  gd as bi,
  bN as Rt,
  hN as gs,
  g9 as ms,
  ga as ys,
  gb as vs,
  cH as ws,
  g7 as bs,
  dY as Ss,
  dZ as Cr,
  hO as Cs,
  bG as Pr,
  ce as Ps,
  dG as xr,
  eD as Rr,
  d8 as Ir,
  hP as xs,
  ew as Br,
  dT as Rs,
  dC as Is,
  dU as Bs,
  hQ as Ls,
  dF as Os,
  hR as As,
  dN as Ds,
  aY as Be,
  aW as we,
  hS as Lr,
  hT as Or,
  hU as Si,
  hV as Ci,
  hW as se,
  aU as gt,
  hX as Ai,
  aR as $,
  aT as ee,
  da as Ts,
  eb as Ar,
  hY as Dr,
  aX as Se,
  hZ as at,
  h_ as Ie,
  h$ as Tr,
  i0 as Fr,
  i1 as Er,
  bC as Fs,
  i2 as Mr,
  i3 as Vr,
  i4 as kr,
  i5 as Di,
  i6 as Nr,
  i7 as zr,
  i8 as Ft,
  i9 as ti,
  ia as Ti,
  ib as jr,
  ic as Gr,
  id as Hr,
  ie as Es,
  ig as Wr,
  ih as Ur,
  ii as Pi,
  ij as _r,
  ik as qr,
  il as Kr,
  im as Jr,
  io as qe,
} from '../assets/app-BjImoLrr.js';
import {
  b as ei,
  S as $r,
  v as Yr,
  c as Ms,
  d as Vs,
  E as Ke,
  P as Je,
  e as Fi,
  a as Xr,
  R as mn,
  f as ks,
  F as Ns,
  T as zs,
  h as js,
} from './D_eyCAsX.js';
var xi = (function () {
  function r(t, e, i, n) {
    var s = this;
    this.sortRequired = true;
    this.groupSortFocus = false;
    this.groupTextFocus = false;
    this.groupCancelFocus = false;
    this.preventFocusOnGroup = false;
    this.isAppliedGroup = false;
    this.isAppliedUnGroup = false;
    this.isAppliedCaptionRowBorder = false;
    this.reorderingColumns = [];
    this.visualElement = es('div', {
      className: 'e-cloneproperties e-dragclone e-gdclone',
      attrs: { action: 'grouping' },
    });
    this.helper = function (o) {
      var a = s.parent;
      var h = o.sender.target;
      var l = o.sender.target.classList.contains('e-groupheadercell')
        ? o.sender.target
        : H(o.sender.target, 'e-groupheadercell');
      return !l || (!o.sender.target.classList.contains('e-drag') && s.groupSettings.allowReordering)
        ? false
        : ((s.column = s.parent.getColumnByField(l.firstElementChild.getAttribute('data-mappingname'))),
          (s.visualElement.textContent = l.textContent),
          vi(
            s.visualElement,
            'width: ' +
              (l.offsetWidth + 2) +
              `px;
            height: ` +
              (l.offsetHeight + 2) +
              'px; line-height: 23px;',
          ),
          s.visualElement.setAttribute('data-mappinguid', s.column.uid),
          s.parent.element.appendChild(s.visualElement),
          s.visualElement);
    };
    this.dragStart = function (o) {
      s.parent.element.classList.add('e-ungroupdrag');
    };
    this.drag = function (o) {
      if (s.groupSettings.allowReordering) {
        s.animateDropper(o);
      }
      var a = o.target;
      var h = s.parent.element.querySelector('.e-cloneproperties');
      s.parent.trigger(pi, {
        target: o.target,
        draggableType: 'headercell',
        column: s.column,
      });
      if (!s.groupSettings.allowReordering) {
        Yt(h, ['e-defaultcur'], ['e-notallowedcur']);
        if (!(H(o.target, Te) || H(o.target, 'e-headercell'))) {
          Yt(h, ['e-notallowedcur'], ['e-defaultcur']);
        }
      }
    };
    this.dragStop = function (o) {
      s.parent.element.classList.remove('e-ungroupdrag');
      var a = !(H(o.target, Te) || H(o.target, 'e-gridheader'));
      if (s.groupSettings.allowReordering && a) {
        Bt(o.helper);
        if (H(o.target, 'e-groupdroparea')) s.rearrangeGroup();
        else if (!H(o.target, 'e-grid')) {
          var h = s.parent.getColumnByUid(o.helper.getAttribute('data-mappinguid')).field;
          if (
            s.groupSettings.columns.indexOf(s.parent.getColumnByUid(o.helper.getAttribute('data-mappinguid')).field) !==
            -1
          ) {
            s.ungroupColumn(s.parent.getColumnByUid(o.helper.getAttribute('data-mappinguid')).field);
          }
        }
        return;
      } else if (a) {
        Bt(o.helper);
        return;
      }
    };
    this.animateDropper = function (o) {
      var a = s.parent.element.querySelector('.e-cloneproperties').getAttribute('data-mappinguid');
      var h = s.parent.getColumnByUid(a).field;
      var l = H(o.target, 'e-groupdroparea');
      var u = H(o.target, 'e-group-animator');
      var d = [].slice.call(s.element.getElementsByClassName('e-groupheadercell')).map(function (b) {
        return b.querySelector('div').getAttribute('data-mappingname');
      });
      var c = JSON.parse(JSON.stringify(d));
      if (u || l) {
        if (u) {
          var f = u.querySelector('div[data-mappingname]').getAttribute('data-mappingname');
          var g = +u.getAttribute('data-index');
          if (f !== s.parent.getColumnByUid(a).field) {
            var y = c.indexOf(s.parent.getColumnByUid(a).field);
            if (y !== -1) {
              c.splice(y, 1);
            }
            var m = g !== -1 && y === g;
            c.splice(g + (m ? 1 : 0), 0, s.parent.getColumnByUid(a).field);
          }
        } else if (l && c.indexOf(s.parent.getColumnByUid(a).field) === -1) {
          c.push(s.parent.getColumnByUid(a).field);
        }
        s.element.innerHTML = '';
        if (c.length && !s.element.classList.contains('e-grouped')) {
          s.element.classList.add('e-grouped');
        }
        s.reorderingColumns = c;
        for (var w = 0; w < c.length; w++) s.addColToGroupDrop(c[parseInt(w.toString(), 10)]);
      } else {
        s.addLabel();
        s.removeColFromGroupDrop(s.parent.getColumnByUid(a).field);
      }
    };
    this.drop = function (o) {
      var a = s.parent;
      var h = s.parent.getColumnByUid(o.droppedElement.getAttribute('data-mappinguid'));
      s.element.classList.remove('e-hover');
      Bt(o.droppedElement);
      s.aria.setDropTarget(s.parent.element.querySelector('.e-groupdroparea'), false);
      s.aria.setGrabbed(s.parent.getHeaderTable().querySelector('[aria-grabbed=true]'), false);
      if (
        p(h) ||
        h.allowGrouping === false ||
        H(s.parent.getColumnHeaderByUid(h.uid), 'e-grid').getAttribute('id') !== s.parent.element.getAttribute('id')
      ) {
        s.parent.log('action_disabled_column', {
          moduleName: s.getModuleName(),
          columnName: h ? h.headerText : void 0,
        });
        return;
      }
      s.groupColumn(h.field);
    };
    this.contentRefresh = true;
    this.aria = new is();
    this.parent = t;
    this.groupSettings = e;
    this.serviceLocator = n;
    this.sortedColumns = i;
    this.focus = n.getService('focus');
    this.addEventListener();
    this.groupGenerator = new rs(this.parent);
  }
  r.prototype.addLabel = function () {
    if (!this.element.getElementsByClassName('e-group-animator').length) {
      var t = this.l10n.getConstant('GroupDropArea');
      this.element.innerHTML = t;
      this.element.classList.remove('e-grouped');
    }
  };
  r.prototype.rearrangeGroup = function () {
    this.sortRequired = false;
    this.updateModel();
  };
  r.prototype.columnDrag = function (t) {
    if (this.groupSettings.allowReordering && t.column.allowGrouping) {
      this.animateDropper(t);
    }
    var e = this.parent.element.querySelector('.e-cloneproperties');
    if (!this.parent.allowReordering) {
      Yt(e, ['e-defaultcur'], ['e-notallowedcur']);
    }
    if (
      !(
        t.column.allowGrouping &&
        (H(t.target, 'e-groupdroparea') ||
          (H(t.target, 'e-headercell') &&
            H(t.target, 'e-headercell').isEqualNode(this.parent.getColumnHeaderByField(t.column.field))))
      ) &&
      !(this.parent.allowReordering && H(t.target, 'e-headercell'))
    ) {
      Yt(e, ['e-notallowedcur'], ['e-defaultcur']);
    }
    t.target.classList.contains('e-groupdroparea')
      ? this.element.classList.add('e-hover')
      : this.element.classList.remove('e-hover');
  };
  r.prototype.columnDragStart = function (t) {
    if (!t.target.classList.contains('e-stackedheadercell')) {
      var e = this.parent.element.querySelector('.e-groupdroparea');
      this.aria.setDropTarget(e, t.column.allowGrouping);
      var i = t.target.classList.contains('e-headercell') ? t.target : H(t.target, 'e-headercell');
      this.aria.setGrabbed(i, true, !t.column.allowGrouping);
    }
  };
  r.prototype.columnDrop = function (t) {
    var e = this.parent;
    if (t.droppedElement.getAttribute('action') === 'grouping') {
      var i = this.parent.getColumnByUid(t.droppedElement.getAttribute('data-mappinguid'));
      if (
        p(i) ||
        i.allowGrouping === false ||
        H(this.parent.getColumnHeaderByUid(i.uid), 'e-grid').getAttribute('id') !==
          this.parent.element.getAttribute('id')
      )
        return;
      this.ungroupColumn(i.field);
    }
  };
  r.prototype.addEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.on(Qe, this.enableAfterRender, this);
      this.parent.on(Yi, this.onActionComplete, this);
      this.parent.on(Xi, this.onActionComplete, this);
      this.parent.on(Qi, this.onPropertyChanged, this);
      this.parent.on(Zi, this.clickHandler, this);
      this.parent.on(pi, this.columnDrag, this);
      this.parent.on(tr, this.columnDragStart, this);
      this.parent.on(er, this.columnDrop, this);
      this.parent.on(ir, this.columnDrop, this);
      this.parent.on(rr, this.refreshSortIcons, this);
      this.parent.on(nr, this.refreshSortIcons, this);
      this.parent.on(sr, this.keyPressHandler, this);
      this.parent.on(fi, this.initialEnd, this);
      this.parent.on(or, this.initialEnd, this);
      this.parent.on(ar, this.render, this);
      this.parent.on(hr, this.onGroupAggregates, this);
      this.parent.on(Ze, this.destroy, this);
      this.parent.on('group-expand-collapse', this.updateExpand, this);
      this.parent.on('persist-data-changed', this.initialEnd, this);
    }
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off(ar, this.render);
      this.parent.off(Qe, this.enableAfterRender);
      this.parent.off(Yi, this.onActionComplete);
      this.parent.off(Xi, this.onActionComplete);
      this.parent.off(Qi, this.onPropertyChanged);
      this.parent.off(Zi, this.clickHandler);
      this.parent.off(pi, this.columnDrag);
      this.parent.off(tr, this.columnDragStart);
      this.parent.off(ir, this.columnDrop);
      this.parent.off(er, this.columnDrop);
      this.parent.off(rr, this.refreshSortIcons);
      this.parent.off(nr, this.refreshSortIcons);
      this.parent.off(sr, this.keyPressHandler);
      this.parent.off(hr, this.onGroupAggregates);
      this.parent.off(Ze, this.destroy);
      this.parent.off('group-expand-collapse', this.updateExpand);
    }
  };
  r.prototype.initialEnd = function () {
    var t = this.parent;
    this.parent.off(fi, this.initialEnd);
    this.parent.off(or, this.initialEnd);
    if (this.parent.getColumns().length && this.groupSettings.columns.length) {
      this.contentRefresh = false;
      for (var e = 0, i = this.parent.groupSettings.columns; e < i.length; e++) {
        var n = i[e];
        this.preventFocusOnGroup = true;
        this.groupColumn(i[e]);
        this.preventFocusOnGroup = false;
      }
      this.contentRefresh = true;
    }
  };
  r.prototype.keyPressHandler = function (t) {
    var e = this.parent;
    if (t.target && H(t.target, 'e-groupheadercell') && (t.action === 'tab' || t.action === 'shiftTab')) {
      var i = this.getFocusableGroupedItems();
      if ((t.action === 'tab' && t.target === i[i.length - 1]) || (t.action === 'shiftTab' && t.target === i[0]))
        return;
      for (var n = 0; n < i.length; n++)
        if (t.target === i[parseInt(n.toString(), 10)]) {
          t.preventDefault();
          var s = t.action === 'tab' ? n + 1 : n - 1;
          i[parseInt(s.toString(), 10)].focus();
          return;
        }
    }
    var o = /(Mac)/i.test(navigator.platform);
    if (o && t.metaKey) {
      t.action === 'downArrow' ? (t.action = 'ctrlDownArrow') : t.action === 'upArrow' && (t.action = 'ctrlUpArrow');
    }
    if (
      !(
        (t.action !== 'ctrlSpace' &&
          (!this.groupSettings.columns.length ||
            ['altDownArrow', 'altUpArrow', 'ctrlDownArrow', 'ctrlUpArrow', 'enter'].indexOf(t.action) === -1)) ||
        (this.parent.groupSettings.enableLazyLoading &&
          this.groupSettings.columns.length &&
          (t.action === 'ctrlUpArrow' || t.action === 'ctrlDownArrow'))
      )
    )
      switch (t.action) {
        case 'altDownArrow':
        case 'altUpArrow':
          var a = this.parent.allowSelection ? this.parent.getSelectedRowIndexes() : [];
          if (a.length) {
            t.preventDefault();
            for (
              var h = this.parent.getContentTable().querySelector(ne).children,
                l = this.parent.getDataRows()[a[a.length - 1]],
                u = void 0,
                n = l.rowIndex;
              n >= 0;
              n--
            )
              if (
                !h[parseInt(n.toString(), 10)].classList.contains(lr) &&
                !h[parseInt(n.toString(), 10)].classList.contains('e-detailrow')
              ) {
                u = h[parseInt(n.toString(), 10)];
                break;
              }
            this.expandCollapseRows(
              u.querySelector(t.action === 'altUpArrow' ? '.e-recordplusexpand' : '.e-recordpluscollapse'),
            );
          }
          break;
        case 'ctrlDownArrow':
          {
            t.preventDefault();
            this.expandAll();
          }
          break;
        case 'ctrlUpArrow':
          {
            t.preventDefault();
            this.collapseAll();
          }
          break;
        case 'enter':
          if (t.target.classList.contains('e-groupsort')) {
            this.groupSortFocus = true;
            t.preventDefault();
            this.applySortFromTarget(t.target);
            break;
          } else if (t.target.classList.contains('e-ungroupbutton')) {
            this.groupCancelFocus = true;
            t.preventDefault();
            this.unGroupFromTarget(t.target);
            break;
          }
          if (
            this.parent.isEdit ||
            it(t.target, '#' + this.parent.element.id + '_searchbar') !== null ||
            H(t.target, 'e-pager') ||
            H(t.target, 'e-toolbar')
          )
            return;
          var d = this.focus.getFocusedElement();
          if (d && (d.classList.contains('e-icon-grightarrow') || d.classList.contains('e-icon-gdownarrow'))) {
            d = d.parentElement;
          }
          var c = d && d.parentElement ? d.parentElement.querySelector('[class^="e-record"]') : null;
          if (!c) break;
          if (
            d.children.length &&
            (d.children[0].classList.contains('e-icon-grightarrow') ||
              d.children[0].classList.contains('e-icon-gdownarrow'))
          ) {
            t.preventDefault();
            this.expandCollapseRows(c);
          }
          break;
        case 'ctrlSpace':
          var f = this.parent.focusModule.currentInfo.element;
          if (
            this.parent.focusModule.currentInfo.element &&
            this.parent.focusModule.currentInfo.element.classList.contains('e-headercell')
          ) {
            t.preventDefault();
            var g = this.parent.getColumnByUid(
              this.parent.focusModule.currentInfo.element.firstElementChild.getAttribute('data-mappinguid'),
            );
            g.field && this.parent.groupSettings.columns.indexOf(g.field) < 0
              ? this.groupColumn(g.field)
              : this.ungroupColumn(g.field);
          }
          break;
      }
  };
  r.prototype.getFocusableGroupedItems = function () {
    var t = [];
    if (this.groupSettings.columns.length)
      for (var e = this.element.querySelectorAll('.e-groupheadercell'), i = 0; i < e.length; i++) {
        t.push(e[parseInt(i.toString(), 10)].querySelector('.e-grouptext'));
        t.push(e[parseInt(i.toString(), 10)].querySelector('.e-groupsort'));
        t.push(e[parseInt(i.toString(), 10)].querySelector('.e-ungroupbutton'));
      }
    return t;
  };
  r.prototype.wireEvent = function () {
    Xt.add(this.element, 'focusin', this.onFocusIn, this);
    Xt.add(this.element, 'focusout', this.onFocusOut, this);
    Xt.add(this.parent.element, 'auxclick', this.auxilaryclickHandler, this);
  };
  r.prototype.unWireEvent = function () {
    Xt.remove(this.element, 'focusin', this.onFocusIn);
    Xt.remove(this.element, 'focusout', this.onFocusOut);
    Xt.remove(this.parent.element, 'auxclick', this.auxilaryclickHandler);
  };
  r.prototype.onFocusIn = function (t) {
    if (this.parent.focusModule.currentInfo && this.parent.focusModule.currentInfo.element) {
      Mt(
        [this.parent.focusModule.currentInfo.element, this.parent.focusModule.currentInfo.elementToFocus],
        ['e-focused', 'e-focus'],
      );
      this.parent.focusModule.currentInfo.element.tabIndex = -1;
    }
    this.addOrRemoveFocus(t);
  };
  r.prototype.onFocusOut = function (t) {
    this.addOrRemoveFocus(t);
  };
  r.prototype.addOrRemoveFocus = function (t) {
    if (
      t.target.classList.contains('e-groupdroparea') ||
      t.target.classList.contains('e-grouptext') ||
      t.target.classList.contains('e-groupsort') ||
      t.target.classList.contains('e-ungroupbutton')
    ) {
      var e = t.target.classList.contains('e-grouptext') ? t.target.parentElement.parentElement : t.target;
      t.type === 'focusin'
        ? ((this.parent.focusModule.currentInfo.element = t.target),
          (this.parent.focusModule.currentInfo.elementToFocus = t.target),
          Qt([e], ['e-focused', 'e-focus']),
          (t.target.tabIndex = 0))
        : (Mt([e], ['e-focused', 'e-focus']), (t.target.tabIndex = -1));
    }
  };
  r.prototype.clickHandler = function (t) {
    if (t.target.classList.contains('e-grouptext')) {
      this.groupTextFocus = true;
    }
    if (t.target.classList.contains('e-groupsort')) {
      this.groupSortFocus = true;
    }
    if (t.target.classList.contains('e-ungroupbutton')) {
      this.groupCancelFocus = true;
    }
    if (t.target.classList.contains('e-icon-grightarrow') || t.target.classList.contains('e-icon-gdownarrow')) {
      t.preventDefault();
    }
    var e = H(t.target, 'e-recordplusexpand') || H(t.target, 'e-recordpluscollapse');
    if (
      e &&
      (e.children[0].classList.contains('e-icon-gdownarrow') || e.children[0].classList.contains('e-icon-grightarrow'))
    ) {
      this.expandCollapseRows(t.target);
    }
    this.applySortFromTarget(t.target);
    this.unGroupFromTarget(t.target);
    this.toogleGroupFromHeader(t.target);
  };
  r.prototype.auxilaryclickHandler = function (t) {
    if (
      t.target.classList.contains('e-icon-grightarrow') ||
      (t.target.classList.contains('e-icon-gdownarrow') && t.button === 1)
    ) {
      t.preventDefault();
    }
  };
  r.prototype.unGroupFromTarget = function (t) {
    if (t.classList.contains('e-ungroupbutton')) {
      this.ungroupColumn(t.parentElement.getAttribute('data-mappingname'));
    }
  };
  r.prototype.toogleGroupFromHeader = function (t) {
    if (this.groupSettings.showToggleButton) {
      t.classList.contains('e-grptogglebtn')
        ? t.classList.contains('e-toggleungroup')
          ? this.ungroupColumn(this.parent.getColumnByUid(t.parentElement.getAttribute('data-mappinguid')).field)
          : this.groupColumn(this.parent.getColumnByUid(t.parentElement.getAttribute('data-mappinguid')).field)
        : t.classList.contains('e-toggleungroup') &&
          this.ungroupColumn(t.parentElement.getAttribute('data-mappingname'));
    }
  };
  r.prototype.applySortFromTarget = function (t) {
    var e = this.parent;
    var i = it(t, '.e-groupheadercell');
    if (
      this.parent.allowSorting &&
      i &&
      !t.classList.contains('e-ungroupbutton') &&
      !t.classList.contains('e-toggleungroup')
    ) {
      var n = i.firstElementChild.getAttribute('data-mappingname');
      this.parent.getColumnHeaderByField(n).getElementsByClassName('e-ascending').length
        ? this.parent.sortColumn(n, 'Descending', true)
        : this.parent.sortColumn(n, 'Ascending', true);
    }
  };
  r.prototype.expandCollapseRows = function (t) {
    var e = H(t, 'e-recordplusexpand') || H(t, 'e-recordpluscollapse');
    if (e) {
      var i = [].slice.call(this.parent.getContentTable().querySelector(ne).children);
      if (this.parent.editSettings.showAddNewRow) {
        i[0].classList.contains('e-addedrow') ? i.shift() : i[i.length - 1].classList.contains('e-addedrow') && i.pop();
      }
      var n = void 0;
      var s = void 0;
      var o = void 0;
      var a = this.parent;
      var h = e.parentElement.getElementsByClassName('e-indentcell').length;
      var l = e.parentElement.getAttribute('data-uid');
      var u = this.parent.getRowObjectFromUID(l);
      var d = false;
      e.classList.contains('e-recordpluscollapse')
        ? (Qt([e], 'e-recordplusexpand'),
          Mt([e], 'e-recordpluscollapse'),
          (e.firstElementChild.className = 'e-icons e-gdiagonaldown e-icon-gdownarrow'),
          e.firstElementChild.setAttribute('title', this.l10n.getConstant('Expanded')),
          (d = true),
          (u.isExpand = true),
          gi(this.parent) && this.updateVirtualRows(this.parent, t, d, o, s),
          this.parent.groupSettings.enableLazyLoading &&
            ((this.parent.filterSettings.columns.length ||
              this.parent.sortSettings.columns.length ||
              this.parent.searchSettings.key.length) &&
              this.parent.getContent().firstElementChild.scrollTop === 0 &&
              (this.parent.contentModule.isTop = true),
            (this.parent.enableVirtualization ? this.parent.lazyLoadRender : this.parent.contentModule).captionExpand(
              e.parentElement,
            )))
        : ((n = true),
          (u.isExpand = false),
          Mt([e], 'e-recordplusexpand'),
          Qt([e], 'e-recordpluscollapse'),
          (e.firstElementChild.className = 'e-icons e-gnextforward e-icon-grightarrow'),
          e.firstElementChild.setAttribute('title', this.l10n.getConstant('Collapsed')),
          gi(this.parent) && this.updateVirtualRows(this.parent, t, !n, o, s),
          this.parent.groupSettings.enableLazyLoading &&
            (this.parent.enableVirtualization ? this.parent.lazyLoadRender : this.parent.contentModule).captionCollapse(
              e.parentElement,
            ));
      this.aria.setExpand(e, d);
      if (!gi(this.parent) && !this.parent.groupSettings.enableLazyLoading) {
        for (
          var c = this.parent.getRowsObject(),
            f = c.indexOf(u),
            g = {},
            y =
              this.parent.enableInfiniteScrolling &&
              this.parent.infiniteScrollSettings &&
              this.parent.infiniteScrollSettings.enableCache &&
              c.length !== i.length
                ? Array.from(i).indexOf(e.parentElement)
                : void 0,
            m = f;
          m < c.length &&
          !(
            m > f &&
            c[parseInt(m.toString(), 10)].indent === e.parentElement.getElementsByClassName('e-indentcell').length
          );
          m++
        ) {
          if (c[parseInt(m.toString(), 10)].isDetailRow) {
            var w = c[m - 1].isExpand && c[m - 1].visible;
            y && y > 0 && y < i.length
              ? (i[parseInt(y.toString(), 10)].style.display = w ? '' : 'none')
              : p(y) && (i[parseInt(m.toString(), 10)].style.display = w ? '' : 'none');
          } else if (g[c[parseInt(m.toString(), 10)].parentUid] === false) {
            c[parseInt(m.toString(), 10)].visible = false;
            y && y > 0 && y < i.length
              ? (i[parseInt(y.toString(), 10)].style.display = 'none')
              : p(y) && (i[parseInt(m.toString(), 10)].style.display = 'none');
          } else {
            if (
              !(
                c[parseInt(m.toString(), 10)].isDataRow ||
                c[parseInt(m.toString(), 10)].isCaptionRow ||
                c[parseInt(m.toString(), 10)].isDetailRow ||
                c[parseInt(m.toString(), 10)].isAggregateRow
              )
            ) {
              var w = c[parseInt(m.toString(), 10)].cells.some(function (v) {
                return v.isDataCell && v.visible;
              });
              if (w === c[parseInt(m.toString(), 10)].visible) continue;
            }
            c[parseInt(m.toString(), 10)].visible = true;
            y && y > 0 && y < i.length
              ? ((i[parseInt(y.toString(), 10)].style.display = ''),
                i[parseInt(y.toString(), 10)].classList.remove('e-hide'))
              : p(y) &&
                ((i[parseInt(m.toString(), 10)].style.display = ''),
                i[parseInt(m.toString(), 10)].classList.remove('e-hide'));
          }
          if (c[parseInt(m.toString(), 10)].isCaptionRow) {
            g[c[parseInt(m.toString(), 10)].uid] =
              c[parseInt(m.toString(), 10)].isExpand && c[parseInt(m.toString(), 10)].visible;
          }
          if (!p(y)) {
            y++;
          }
        }
        this.lastCaptionRowBorder();
        this.parent.notify(mi, { rows: this.parent.getRowsObject() });
      }
      if (!this.parent.enableInfiniteScrolling || !this.parent.groupSettings.enableLazyLoading) {
        this.parent.notify(Wn, {
          isCollapse: n,
          parentUid: l,
        });
      }
    }
  };
  r.prototype.lastCaptionRowBorder = function () {
    var t = this.parent.getContentTable();
    var e = this.parent.getContent().clientHeight;
    if (
      ((!this.parent.enableVirtualization && !this.parent.enableInfiniteScrolling) ||
        this.parent.groupSettings.enableLazyLoading) &&
      (t.scrollHeight < this.parent.getContent().clientHeight || this.isAppliedCaptionRowBorder)
    ) {
      if (this.isAppliedCaptionRowBorder || t.querySelector('.e-lastrowcell')) {
        for (var i = t.querySelectorAll('.e-lastrowcell'), n = 0, s = i.length; n < s; n++)
          Mt([i[parseInt(n.toString(), 10)]], 'e-lastrowcell');
        this.isAppliedCaptionRowBorder = false;
      }
      var o = this.parent.getContentTable().querySelector(ne).children;
      var a = this.parent.getContentTable().querySelector(ne).children[
        this.parent.getContentTable().querySelector(ne).children.length - 1
      ];
      if (
        this.parent.getContentTable().querySelector(ne).children[
          this.parent.getContentTable().querySelector(ne).children.length - 1
        ].style.display !== 'none' &&
        !this.parent
          .getContentTable()
          .querySelector(ne)
          .children[
            this.parent.getContentTable().querySelector(ne).children.length - 1
          ].classList.contains('e-groupcaptionrow')
      )
        if (t.scrollHeight < this.parent.getContent().clientHeight) {
          Qt(t.querySelectorAll('tr:last-child td'), 'e-lastrowcell');
          this.isAppliedCaptionRowBorder = true;
        } else
          for (var n = this.parent.getContentTable().querySelector(ne).children.length - 1, s = 0; n > s; n--)
            if (
              this.parent.getContentTable().querySelector(ne).children[parseInt(n.toString(), 10)].style.display !==
                'none' &&
              this.parent
                .getContentTable()
                .querySelector(ne)
                .children[parseInt(n.toString(), 10)].classList.contains('e-groupcaptionrow') &&
              this.parent
                .getContentTable()
                .querySelector(ne)
                .children[parseInt(n.toString(), 10)].querySelector('.e-recordpluscollapse')
            ) {
              Qt(
                this.parent.getContentTable().querySelector(ne).children[parseInt(n.toString(), 10)].childNodes,
                'e-lastrowcell',
              );
              this.isAppliedCaptionRowBorder = true;
              break;
            }
    }
  };
  r.prototype.updateVirtualRows = function (t, e, i, n, s) {
    var o = t.getRowObjectFromUID(e.closest('tr').getAttribute('data-uid'));
    o.isExpand = i;
    Un(t);
    this.parent.notify(_n, {});
    n = t.getDataModule().generateQuery(false);
    var a = {
      requestType: 'virtualscroll',
      rowObject: o,
    };
    if (t.contentModule) {
      a.virtualInfo = t.contentModule.prevInfo;
    }
    s = t.getDataModule().getData(a, n.requiresCount());
    s.then(function (h) {
      return t.renderModule.dataManagerSuccess(h, a);
    });
  };
  r.prototype.expandCollapse = function (t) {
    if (this.parent.groupSettings.columns.length) {
      if (!t) {
        this.parent.notify(qn, t);
      }
      for (
        var e = this.parent.getContentTable().querySelector(ne).children,
          i = this.parent.getRowsObject(),
          n,
          s = 0,
          o = e.length;
        s < o;
        s++
      ) {
        e[parseInt(s.toString(), 10)].querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse').length
          ? ((n = e[parseInt(s.toString(), 10)].querySelector(t ? '.e-recordpluscollapse' : '.e-recordplusexpand')),
            n &&
              (t
                ? ((n.className = 'e-recordplusexpand'),
                  (n.firstElementChild.className = 'e-icons e-gdiagonaldown e-icon-gdownarrow'),
                  n.setAttribute('aria-expanded', 'true'),
                  n.firstElementChild.setAttribute('title', this.l10n.getConstant('Expanded')))
                : ((n.className = 'e-recordpluscollapse'),
                  (n.firstElementChild.className = 'e-icons e-gnextforward e-icon-grightarrow'),
                  n.setAttribute('aria-expanded', 'false'),
                  n.firstElementChild.setAttribute('title', this.l10n.getConstant('Collapsed')))),
            e[parseInt(s.toString(), 10)].firstElementChild.classList.contains('e-recordplusexpand') ||
              e[parseInt(s.toString(), 10)].firstElementChild.classList.contains('e-recordpluscollapse') ||
              (e[parseInt(s.toString(), 10)].style.display = t ? '' : 'none'))
          : (e[parseInt(s.toString(), 10)].style.display = t ? '' : 'none');
        if (i[parseInt(s.toString(), 10)].isCaptionRow) {
          i[parseInt(s.toString(), 10)].isExpand = !!t;
        }
      }
      this.parent.updateVisibleExpandCollapseRows();
      this.lastCaptionRowBorder();
      this.parent.notify(mi, { rows: this.parent.getRowsObject() });
    }
  };
  r.prototype.expandAll = function () {
    this.expandCollapse(true);
  };
  r.prototype.collapseAll = function () {
    this.expandCollapse(false);
  };
  r.prototype.render = function () {
    this.l10n = this.serviceLocator.getService('localization');
    this.renderGroupDropArea();
    this.initDragAndDrop();
    this.refreshToggleBtn();
    this.wireEvent();
  };
  r.prototype.renderGroupDropArea = function () {
    var t = this.parent.element.querySelector('.e-groupdroparea');
    if (t) {
      Bt(t);
    }
    this.element = this.parent.createElement('div', {
      className: 'e-groupdroparea',
      attrs: { tabindex: '-1' },
    });
    if (this.groupSettings.allowReordering) {
      this.element.classList.add('e-group-animate');
    }
    this.updateGroupDropArea();
    this.parent.element.insertBefore(this.element, this.parent.element.firstChild);
    if (!this.groupSettings.showDropArea || this.parent.rowRenderingMode === 'Vertical') {
      this.element.style.display = 'none';
    }
  };
  r.prototype.updateGroupDropArea = function (t) {
    if (this.groupSettings.showDropArea && !this.groupSettings.columns.length) {
      var e = this.l10n.getConstant('GroupDropArea');
      this.element.innerHTML = e;
      this.element.classList.remove('e-grouped');
    } else {
      if (
        (this.element.innerHTML === this.l10n.getConstant('GroupDropArea') &&
          (this.groupSettings.columns.length === 1 || (!this.isAppliedGroup && !this.isAppliedUnGroup))) ||
        t
      ) {
        this.element.innerHTML = '';
      }
      this.element.classList.add('e-grouped');
    }
  };
  r.prototype.initDragAndDrop = function () {
    this.initializeGHeaderDrop();
    this.initializeGHeaderDrag();
  };
  r.prototype.initializeGHeaderDrag = function () {
    new Kn(this.element, {
      dragTarget: this.groupSettings.allowReordering ? '.e-drag' : '.e-groupheadercell',
      distance: this.groupSettings.allowReordering ? -10 : 5,
      helper: this.helper,
      dragStart: this.dragStart,
      drag: this.drag,
      dragStop: this.dragStop,
    });
  };
  r.prototype.initializeGHeaderDrop = function () {
    new Jn(this.element, {
      accept: '.e-dragclone',
      drop: this.drop,
    });
  };
  r.prototype.groupColumn = function (t) {
    var e = this.parent;
    var i = this.parent.getColumnByField(t);
    if (p(i) || i.allowGrouping === false || (this.contentRefresh && this.groupSettings.columns.indexOf(t) > -1)) {
      this.parent.log('action_disabled_column', {
        moduleName: this.getModuleName(),
        columnName: i.headerText,
      });
      return;
    }
    if (ur(this.parent)) {
      this.parent.notify(cr, {
        instance: this,
        handler: this.groupColumn,
        arg1: t,
      });
      return;
    }
    i.visible = this.parent.groupSettings.showGroupedColumn;
    this.colName = t;
    this.isAppliedGroup = true;
    this.contentRefresh ? this.updateModel() : this.addColToGroupDrop(t);
    this.updateGroupDropArea();
    this.isAppliedGroup = false;
  };
  r.prototype.ungroupColumn = function (t) {
    var e = this.parent;
    var i = this.parent.enableColumnVirtualization
      ? this.parent.columns.filter(function (a) {
          return a.field === t;
        })[0]
      : this.parent.getColumnByField(t);
    if (!(p(i) || i.allowGrouping === false || this.groupSettings.columns.indexOf(t) < 0)) {
      if (ur(this.parent)) {
        this.parent.notify(cr, {
          instance: this,
          handler: this.ungroupColumn,
          arg1: t,
        });
        return;
      }
      i.visible = true;
      this.colName = i.field;
      var n = JSON.parse(JSON.stringify(this.groupSettings.columns));
      n.splice(n.indexOf(this.colName), 1);
      if (this.sortedColumns.indexOf(t) < 0) {
        for (var s = 0, o = this.parent.sortSettings.columns.length; s < o; s++)
          if (t === this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field) {
            this.parent.sortSettings.columns.splice(s, 1);
            break;
          }
      }
      if (this.groupSettings.allowReordering) {
        this.reorderingColumns = n;
      }
      this.groupSettings.columns = n;
      if (this.parent.allowGrouping) {
        this.isAppliedUnGroup = true;
        this.parent.dataBind();
      }
    }
  };
  r.prototype.updateModel = function () {
    var t = JSON.parse(JSON.stringify(this.groupSettings.columns));
    t = this.reorderingColumns.length ? JSON.parse(JSON.stringify(this.reorderingColumns)) : t;
    if (this.sortRequired) {
      if (t.indexOf(this.colName) === -1) {
        t.push(this.colName);
      }
      this.groupAddSortingQuery(this.colName);
    }
    this.sortRequired = true;
    this.parent.groupSettings.columns = t;
    this.parent.dataBind();
  };
  r.prototype.onActionComplete = function (t) {
    t.requestType === 'grouping' ? this.addColToGroupDrop(this.colName) : this.removeColFromGroupDrop(this.colName);
    if (this.groupSettings.showDropArea && this.parent.height === '100%') {
      this.parent.scrollModule.refresh();
    }
    var e =
      this.groupSettings.columns.indexOf(this.colName) > -1
        ? {
            columnName: this.colName,
            requestType: 'grouping',
            type: yi,
          }
        : {
            requestType: 'ungrouping',
            type: yi,
          };
    this.parent.trigger(yi, Vt(t, e));
    this.colName = null;
  };
  r.prototype.groupAddSortingQuery = function (t) {
    for (
      var e = 0;
      e < this.parent.sortSettings.columns.length &&
      this.parent.sortSettings.columns[parseInt(e.toString(), 10)].field !== t;

    )
      e++;
    this.parent.sortSettings.columns.length === e
      ? this.parent.sortSettings.columns.push({
          field: t,
          direction: 'Ascending',
          isFromGroup: true,
        })
      : this.parent.allowSorting ||
        (this.parent.sortSettings.columns[parseInt(e.toString(), 10)].direction = 'Ascending');
  };
  r.prototype.createElement = function (t) {
    var e = this.parent;
    var i = 'Ascending';
    var n = this.parent.createElement('div', { className: 'e-grid-icon e-group-animator' });
    var s = this.parent.createElement('div', { className: 'e-grid-icon e-groupheadercell' });
    var o = this.parent.createElement('div', { attrs: { 'data-mappingname': t } });
    if (dr(t)) {
      o.setAttribute('ej-complexname', pr(t));
    }
    var a = this.parent.getColumnByField(t);
    var h = this.parent.getColumnHeaderByUid(a.uid);
    if (this.groupSettings.allowReordering) {
      o.appendChild(
        this.parent.createElement('span', {
          className: 'e-drag e-icons e-icon-drag',
          innerHTML: '&nbsp;',
          attrs: {
            title: 'Drag',
            tabindex: '-1',
            'aria-label': this.l10n.getConstant('GroupedDrag'),
            role: 'button',
          },
        }),
      );
    }
    o.appendChild(
      this.parent.createElement('span', {
        className: 'e-grouptext',
        innerHTML: a.headerText,
        attrs: { tabindex: '-1' },
      }),
    );
    if (this.groupSettings.showToggleButton) {
      o.appendChild(
        this.parent.createElement('span', {
          className: 'e-togglegroupbutton e-icons e-icon-ungroup e-toggleungroup',
          innerHTML: '&nbsp;',
          attrs: {
            tabindex: '-1',
            'aria-label': this.l10n.getConstant('UnGroupAria'),
          },
        }),
      );
    }
    if (h.querySelectorAll('.e-ascending,.e-descending').length) {
      i = h.querySelector('.e-ascending') ? 'Ascending' : 'Descending';
    }
    o.appendChild(
      this.parent.createElement('span', {
        className: 'e-groupsort e-icons ' + ('e-' + i.toLowerCase() + ' e-icon-' + i.toLowerCase()),
        innerHTML: '&nbsp;',
        attrs: {
          tabindex: '-1',
          'aria-label': this.l10n.getConstant('GroupedSortIcon') + a.headerText,
          role: 'button',
        },
      }),
    );
    var l = this.parent.createElement('span', {
      className: 'e-ungroupbutton e-icons e-icon-hide',
      innerHTML: '&nbsp;',
      attrs: {
        title: this.l10n.getConstant('UnGroup'),
        tabindex: '-1',
        'aria-label': this.l10n.getConstant('UnGroupIcon') + a.headerText,
        role: 'button',
      },
    });
    vi(l, this.groupSettings.showUngroupButton ? '' : 'display: none;');
    o.appendChild(l);
    s.appendChild(o);
    if (this.groupSettings.allowReordering) {
      n.appendChild(s);
      n.appendChild(this.createSeparator());
      s = n;
    }
    return s;
  };
  r.prototype.addColToGroupDrop = function (t) {
    var e = dr(t)
      ? this.parent.element.querySelector('.e-groupdroparea div[ej-complexname=' + fr(pr(t)) + ']')
      : this.parent.element.querySelector('.e-groupdroparea div[data-mappingname=' + fr(t) + ']');
    if (!(this.groupSettings.allowReordering && e)) {
      var i = this.parent.getColumnByField(t);
      if (!p(i)) {
        var n = this.createElement(t);
        if (this.groupSettings.allowReordering) {
          var s = this.element.getElementsByClassName('e-group-animator').length;
          n.setAttribute('data-index', this.element.getElementsByClassName('e-group-animator').length.toString());
        }
        this.element.appendChild(n);
        var o = this.parent.focusModule;
        this.parent.focusModule.setActive(true);
        var a = [0, 0];
        if (this.parent.focusModule.active.matrix.matrix[a[0]][a[1]] === 0) {
          a = $n(this.parent.focusModule.active.matrix.matrix, a, true);
        }
        this.parent.focusModule.active.matrix.current = a;
        this.parent.editSettings.showAddNewRow
          ? this.parent.notify(gr, {})
          : this.parent.isInitialLoad && !this.preventFocusOnGroup && this.parent.focusModule.focus();
      }
    }
  };
  r.prototype.createSeparator = function () {
    var t = this.parent.createElement('span', {
      className: 'e-nextgroup e-icons e-icon-next',
      innerHTML: '&nbsp;',
      attrs: {
        tabindex: '-1',
        'aria-label': this.l10n.getConstant('GroupSeperator'),
        role: 'button',
      },
    });
    vi(t, this.groupSettings.showUngroupButton ? '' : 'display: none;');
    return t;
  };
  r.prototype.refreshToggleBtn = function (t) {
    if (this.groupSettings.showToggleButton) {
      for (
        var e = [].slice.call(this.parent.getHeaderTable().getElementsByClassName('e-headercelldiv')),
          i = 0,
          n = e.length;
        i < n;
        i++
      )
        if (
          !(
            e[parseInt(i.toString(), 10)].classList.contains('e-emptycell') ||
            e[parseInt(i.toString(), 10)].classList.contains('e-headerchkcelldiv')
          )
        ) {
          var s = this.parent.getColumnByUid(e[parseInt(i.toString(), 10)].getAttribute('data-mappinguid'));
          if (!this.parent.showColumnMenu || (this.parent.showColumnMenu && !s.showColumnMenu)) {
            if (e[parseInt(i.toString(), 10)].getElementsByClassName('e-grptogglebtn').length) {
              Bt(e[parseInt(i.toString(), 10)].querySelectorAll('.e-grptogglebtn')[0]);
            }
            if (!t) {
              e[parseInt(i.toString(), 10)].appendChild(
                this.parent.createElement('span', {
                  className:
                    'e-grptogglebtn e-icons ' +
                    (this.groupSettings.columns.indexOf(s.field) > -1
                      ? 'e-toggleungroup e-icon-ungroup'
                      : 'e-togglegroup e-icon-group'),
                  attrs: {
                    tabindex: '-1',
                    'aria-label': p(this.l10n)
                      ? this.parent.localeObj.getConstant('GroupButton')
                      : this.l10n.getConstant('GroupButton'),
                  },
                }),
              );
            }
          }
        }
    }
  };
  r.prototype.removeColFromGroupDrop = function (t) {
    if (!p(this.getGHeaderCell(t))) {
      var e = this.getGHeaderCell(t);
      if (this.groupSettings.allowReordering) {
        var i = H(e, 'e-group-animator');
        Bt(i);
      } else Bt(e);
      this.updateGroupDropArea();
      if (this.parent.editSettings.showAddNewRow) {
        this.parent.notify(gr, {});
      }
    }
    this.isAppliedUnGroup = false;
  };
  r.prototype.onPropertyChanged = function (t) {
    if (t.module === this.getModuleName())
      for (var e = 0, i = Object.keys(t.properties); e < i.length; e++) {
        var n = i[e];
        switch (i[e]) {
          case 'columns':
            var s = void 0;
            if (this.contentRefresh) {
              if (this.isAppliedUnGroup)
                s = {
                  columnName: this.colName,
                  requestType: 'ungrouping',
                  type: yr,
                };
              else {
                if (!this.isAppliedGroup) {
                  this.updateGroupDropArea(true);
                  for (var o = 0; o < this.parent.sortSettings.columns.length; o++)
                    if (this.parent.sortSettings.columns[parseInt(o.toString(), 10)].isFromGroup) {
                      this.parent.sortSettings.columns.splice(o, 1);
                      o--;
                    }
                  for (var a = 0; a < this.groupSettings.columns.length; a++) {
                    this.colName = this.groupSettings.columns[parseInt(a.toString(), 10)];
                    var h = this.parent.getColumnByField(this.colName);
                    h.visible = this.parent.groupSettings.showGroupedColumn;
                    this.groupAddSortingQuery(this.colName);
                    if (a < this.groupSettings.columns.length - 1) {
                      this.addColToGroupDrop(this.groupSettings.columns[parseInt(a.toString(), 10)]);
                    }
                  }
                }
                s = {
                  columnName: this.colName,
                  requestType: t.properties['' + i[e]].length ? 'grouping' : 'ungrouping',
                  type: yr,
                  preventFocusOnGroup: false,
                };
              }
              if (!this.groupSettings.showGroupedColumn)
                for (var l = t.oldProperties['' + i[e]], a = 0; a < l.length; a++)
                  if (t.properties['' + i[e]].indexOf(l[parseInt(a.toString(), 10)]) === -1) {
                    this.parent.getColumnByField(l[parseInt(a.toString(), 10)]).visible = true;
                  }
              this.parent.notify(mr, s);
            }
            break;
          case 'showDropArea':
            {
              this.updateGroupDropArea();
              this.groupSettings.showDropArea
                ? ((this.element.style.display = ''), this.parent.headerModule.refreshUI())
                : (this.element.style.display = 'none');
              if (this.parent.height === '100%') {
                this.parent.scrollModule.refresh();
              }
            }
            break;
          case 'showGroupedColumn':
            {
              this.updateGroupedColumn(this.groupSettings.showGroupedColumn);
              this.parent.notify(mr, { requestType: 'refresh' });
            }
            break;
          case 'showUngroupButton':
            this.updateButtonVisibility(this.groupSettings.showUngroupButton, 'e-ungroupbutton');
            break;
          case 'showToggleButton':
            {
              this.updateButtonVisibility(this.groupSettings.showToggleButton, 'e-togglegroupbutton ');
              this.parent.refreshHeader();
            }
            break;
          case 'enableLazyLoading':
            this.parent.freezeRefresh();
            break;
        }
      }
  };
  r.prototype.updateGroupedColumn = function (t) {
    for (var e = 0; e < this.groupSettings.columns.length; e++)
      this.parent.getColumnByField(this.groupSettings.columns[parseInt(e.toString(), 10)]).visible = t;
  };
  r.prototype.updateButtonVisibility = function (t, e) {
    for (var i = [].slice.call(this.element.getElementsByClassName(e)), n = 0; n < i.length; n++)
      i[parseInt(n.toString(), 10)].style.display = t ? '' : 'none';
  };
  r.prototype.enableAfterRender = function (t) {
    if (t.module === this.getModuleName() && t.enable) {
      this.render();
    }
  };
  r.prototype.destroy = function () {
    var t = this.parent.element;
    if (
      !(
        !this.parent.element ||
        (!this.parent.element.querySelector('.' + Hi) && !this.parent.element.querySelector('.' + Te))
      )
    ) {
      if ((this.parent.isDestroyed || !this.parent.allowGrouping) && !this.parent.refreshing) {
        this.clearGrouping();
      }
      this.unWireEvent();
      this.removeEventListener();
      this.refreshToggleBtn(true);
      if (this.element.parentNode) {
        Bt(this.element);
      }
    }
  };
  r.prototype.clearGrouping = function () {
    var t = JSON.parse(JSON.stringify(this.groupSettings.columns));
    this.contentRefresh = false;
    for (var e = 0, i = t.length; e < i; e++) {
      if (e === i - 1) {
        this.contentRefresh = true;
      }
      this.ungroupColumn(t[parseInt(e.toString(), 10)]);
    }
    this.contentRefresh = true;
  };
  r.prototype.getModuleName = function () {
    return 'group';
  };
  r.prototype.refreshSortIcons = function () {
    var t = this.parent;
    var e;
    var i = this.parent.sortSettings.columns;
    var n = this.parent.getColumns().map(function (a) {
      return a.field;
    });
    this.refreshToggleBtn();
    for (var s = 0, o = this.parent.sortSettings.columns.length; s < o; s++)
      if (n.indexOf(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field) !== -1) {
        e = this.parent.getColumnHeaderByField(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field);
        !this.parent.allowSorting &&
        (this.sortedColumns.indexOf(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field) > -1 ||
          this.groupSettings.columns.indexOf(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field) > -1)
          ? (Yt(e.querySelector('.e-sortfilterdiv'), ['e-ascending', 'e-icon-ascending'], []),
            this.parent.sortSettings.columns.length > 1 &&
              e.querySelector('.e-headercelldiv').appendChild(
                this.parent.createElement('span', {
                  className: 'e-sortnumber',
                  innerHTML: (s + 1).toString(),
                }),
              ))
          : this.getGHeaderCell(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field) &&
            this.getGHeaderCell(
              this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field,
            ).getElementsByClassName('e-groupsort').length &&
            (this.parent.sortSettings.columns[parseInt(s.toString(), 10)].direction === 'Ascending'
              ? Yt(
                  this.getGHeaderCell(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field).querySelector(
                    '.e-groupsort',
                  ),
                  ['e-ascending', 'e-icon-ascending'],
                  ['e-descending', 'e-icon-descending'],
                )
              : Yt(
                  this.getGHeaderCell(this.parent.sortSettings.columns[parseInt(s.toString(), 10)].field).querySelector(
                    '.e-groupsort',
                  ),
                  ['e-descending', 'e-icon-descending'],
                  ['e-ascending', 'e-icon-ascending'],
                ));
      }
  };
  r.prototype.getGHeaderCell = function (t) {
    return this.element && this.element.querySelector('[data-mappingname="' + t + '"]')
      ? this.element.querySelector('[data-mappingname="' + t + '"]').parentElement
      : null;
  };
  r.prototype.onGroupAggregates = function (t) {
    if (this.parent.groupSettings.enableLazyLoading) {
      if (this.parent.editSettings.mode !== 'Batch') {
        this.updateLazyLoadGroupAggregates(t);
      }
      return;
    }
    var e = this.iterateGroupAggregates(t);
    var i = this.groupGenerator.generateRows(e, {});
    var n = this.parent.getRowsObject().filter(function (u) {
      return !u.isDataRow;
    });
    var s = i.filter(function (u) {
      return !u.isDataRow;
    });
    if (this.parent.isReact || this.parent.isVue) {
      this.parent.destroyTemplate(['groupFooterTemplate', 'groupCaptionTemplate', 'footerTemplate']);
    }
    for (var o = 0; o < s.length; o++) {
      var a = s[parseInt(o.toString(), 10)];
      var h = s[parseInt(o.toString(), 10)].cells.filter(function (u) {
        return u.isDataCell;
      });
      var l = {
        cells: h,
        data: s[parseInt(o.toString(), 10)].data,
        dataUid: n[parseInt(o.toString(), 10)] ? n[parseInt(o.toString(), 10)].uid : '',
      };
      this.parent.notify(Yn, l);
    }
  };
  r.prototype.updateLazyLoadGroupAggregates = function (t, e) {
    var i = this;
    var n = this.getGroupAggregateTemplates(true);
    var s = this.getGroupAggregateTemplates(false);
    if (!(!n.length && !s.length))
      for (
        var o = this.parent,
          a = o.getDataModule().isRemote(),
          h = t[0],
          l = t.row,
          u = o.groupSettings.columns,
          d = o.contentModule,
          c = d.getGroupCache(),
          f = c[o.pageSettings.currentPage],
          g = e || [],
          y = function (v) {
            var x = u[parseInt(v.toString(), 10)];
            var P = h['' + u[parseInt(v.toString(), 10)]];
            var B = m.getGroupCaptionRowObject(l, u.length - v);
            if (a && g.length) {
              if (v !== 0) {
                var R = u[v - 1];
                var L = h['' + u[v - 1]];
                g = g.find(function (K) {
                  return K.key === h['' + u[v - 1]];
                }).items;
              }
              m.updateLazyLoadGroupAggregatesRow(g, h['' + u[parseInt(v.toString(), 10)]], B, f, n, s);
            } else {
              var O = o.renderModule.data.generateQuery();
              if (v !== 0) {
                var T = f.filter(function (K) {
                  return K.isCaptionRow && K.parentUid === B.parentUid;
                });
                var M = T.indexOf(B);
                var F = o.groupSettings.columns.slice(0, v).reverse();
                var V = F.map(function (K) {
                  return h['' + K];
                });
                var z = ns(F, V, d);
                var tt = ss(z);
                var J = {
                  level: v,
                  skip: M,
                  take: 1,
                  where: tt,
                };
                O.lazyLoad.push({
                  key: 'onDemandGroupInfo',
                  value: J,
                });
              }
              o.renderModule.data
                .getData({}, O)
                .then(function (K) {
                  a
                    ? i.updateLazyLoadGroupAggregates(t, K.result)
                    : i.updateLazyLoadGroupAggregatesRow(K.result, h['' + u[parseInt(v.toString(), 10)]], B, f, n, s);
                  if (v === u.length - 1 || a) {
                    i.destroyRefreshGroupCaptionFooterTemplate();
                  }
                })
                .catch(function (K) {
                  return o.renderModule.dataManagerFailure(K, { requestType: 'grouping' });
                });
              if (a) return 'break';
            }
          },
          m = this,
          w = 0;
        w < u.length;
        w++
      ) {
        var b = y(w);
        if (b === 'break') break;
      }
  };
  r.prototype.destroyRefreshGroupCaptionFooterTemplate = function () {
    var t = this.parent;
    if (this.parent.isAngular || this.parent.isReact || this.parent.isVue) {
      this.parent.destroyTemplate(['groupCaptionTemplate', 'groupFooterTemplate']);
    }
    this.parent.refreshGroupCaptionFooterTemplate();
    this.parent.removeMaskRow();
    this.parent.hideSpinner();
  };
  r.prototype.updateLazyLoadGroupAggregatesRow = function (t, e, i, n, s, o) {
    var a = t.find(function (l) {
      return l.key === e;
    });
    if (s.length) {
      this.updateLazyLoadGroupAggregatesCell(a, i, s);
    }
    if (o.length) {
      var h = n.find(function (l) {
        return l.isAggregateRow && l.parentUid === i.uid;
      });
      this.updateLazyLoadGroupAggregatesCell(a, h, o);
    }
  };
  r.prototype.updateLazyLoadGroupAggregatesCell = function (t, e, i) {
    var n = e.data;
    var s = t.aggregates;
    if (e.isCaptionRow) {
      n.aggregates = t.aggregates;
    }
    for (var o = 0; o < i.length; o++) {
      var a = i[parseInt(o.toString(), 10)];
      var h = i[parseInt(o.toString(), 10)].field + ' - ' + i[parseInt(o.toString(), 10)].type;
      var l = n[i[parseInt(o.toString(), 10)].field];
      l['' + h] = t.aggregates['' + h];
      l[Xn(i[parseInt(o.toString(), 10)].type)] = t.aggregates['' + h];
      if (l[i[parseInt(o.toString(), 10)].type]) {
        l[i[parseInt(o.toString(), 10)].type] = t.aggregates['' + h];
      }
    }
  };
  r.prototype.getGroupCaptionRowObject = function (t, e) {
    for (var i = this.parent, n = t.getAttribute('data-uid'), s = i.getRowObjectFromUID(n), o = 0; o < e; o++)
      s = i.getRowObjectFromUID(s.parentUid);
    return s;
  };
  r.prototype.getGroupAggregateTemplates = function (t) {
    for (var e = [], i = this.parent.aggregates, n = 0; n < i.length; n++)
      for (var s = i[parseInt(n.toString(), 10)], o = 0; o < s.columns.length; o++)
        if (
          (t && s.columns[parseInt(o.toString(), 10)].groupCaptionTemplate) ||
          (!t && s.columns[parseInt(o.toString(), 10)].groupFooterTemplate)
        ) {
          var a = {};
          var h = s.columns[parseInt(o.toString(), 10)].type.toString();
          a = {
            type: h.toLowerCase(),
            field: s.columns[parseInt(o.toString(), 10)].field,
          };
          e.push(a);
        }
    return e;
  };
  r.prototype.groupedRowReorder = function (t, e) {
    var i = this.parent.getRowElementByUID(t.uid);
    var n = this.parent.getRowElementByUID(e.uid);
    var s = {
      rows: [i],
      target: n,
      fromIndex: t.index,
      dropIndex: e.index,
    };
    if (!p(t) && !p(e) && t.parentUid !== e.parentUid) {
      n
        ? (n.style.display === 'none' && (i.style.display = 'none'),
          s.fromIndex > s.dropIndex
            ? this.parent.getContentTable().querySelector(ne).insertBefore(i, n)
            : this.parent.getContentTable().querySelector(ne).insertBefore(i, n.nextSibling))
        : Bt(i);
      this.groupReorderHandler(t, e);
      var o = [].slice.call(this.parent.getContentTable().getElementsByClassName(lr));
      Qn(this.parent, s, o, e);
      this.parent.enableVirtualization
        ? Zn(this.parent)
        : Oi(
            this.parent,
            this.parent.getRowsObject().filter(function (a) {
              return a.isDataRow;
            }),
            o,
          );
      this.parent.notify(mi, { rows: this.parent.getRowsObject() });
    }
  };
  r.prototype.groupReorderHandler = function (t, e) {
    for (
      var i = this.parent,
        n = t.data,
        s = e.data,
        o = i.groupModule.getGroupAggregateTemplates(false),
        a = i.getRowObjectFromUID(e.parentUid),
        h = i.getRowObjectFromUID(t.parentUid),
        l = [a],
        u = [h],
        d = i.groupSettings.columns,
        c = 0;
      c < d.length;
      c++
    ) {
      n[d[parseInt(c.toString(), 10)]] = s[d[parseInt(c.toString(), 10)]];
      if (c > 0) {
        l.push(i.getRowObjectFromUID(l[c - 1].parentUid));
        u.push(i.getRowObjectFromUID(u[c - 1].parentUid));
      }
    }
    t.parentUid = e.parentUid;
    t.visible = e.visible;
    t.parentGid = e.parentGid;
    if (t.changes !== n) {
      t.changes = n;
    }
    var f = this.iterateGroupAggregates([
      {
        dragRowObjects: u,
        dropRowObjects: l,
      },
    ]);
    var g = f.filter(function (P) {
      return (
        P.key === u[u.length - 1].data.key ||
        (P.key instanceof Date && P.key.toString() === u[u.length - 1].data.key.toString())
      );
    });
    var y = f.filter(function (P) {
      return (
        P.key === l[l.length - 1].data.key ||
        (P.key instanceof Date && P.key.toString() === l[l.length - 1].data.key.toString())
      );
    });
    f = [];
    if (!p(g[0])) {
      f.push(g[0]);
    }
    if (!p(y[0])) {
      f.push(y[0]);
    }
    for (var m = i.currentViewData, w = 0; w < m.length; w++)
      (p(g[0]) && m[parseInt(w.toString(), 10)].key === u[u.length - 1].data.key) ||
      (p(y[0]) && m[parseInt(w.toString(), 10)].key === l[l.length - 1].data.key)
        ? (m.splice(w, 1), w--)
        : !p(g[0]) && m[parseInt(w.toString(), 10)].key === g[0].key
          ? (m[parseInt(w.toString(), 10)] = g[0])
          : !p(y[0]) && m[parseInt(w.toString(), 10)].key === y[0].key && (m[parseInt(w.toString(), 10)] = y[0]);
    for (var b = this.groupGenerator.generateRows(f, {}), v = [], x = [], w = 0; w < u.length; w++)
      v.push.apply(v, this.getGroupParentFooterAggregateRowObject(u[parseInt(w.toString(), 10)].uid));
    for (var w = 0; w < l.length; w++)
      x.push.apply(x, this.getGroupParentFooterAggregateRowObject(l[parseInt(w.toString(), 10)].uid));
    u.push.apply(u, v);
    l.push.apply(l, x);
    this.updatedRowObjChange(u, b, o, true);
    this.updatedRowObjChange(l, b, o);
    this.groupReorderRefreshHandler(u);
    this.groupReorderRefreshHandler(l);
  };
  r.prototype.updatedRowObjChange = function (t, e, i, n) {
    var s = this.parent;
    var o = this.parent.getRowsObject();
    var a = {};
    var h = [];
    if (this.parent.enableVirtualization) {
      a = this.parent.contentModule.vgenerator.cache;
      h = this.parent.vcRows;
    }
    for (var l = 0; l < t.length; l++) {
      for (var u = false, d = t[parseInt(l.toString(), 10)], c = 0; c < e.length; c++) {
        var f = e[parseInt(c.toString(), 10)];
        if (
          !p(e[parseInt(c.toString(), 10)]) &&
          !p(d.data.key) &&
          !p(e[parseInt(c.toString(), 10)].data.key) &&
          (d.data.key === e[parseInt(c.toString(), 10)].data.key ||
            (d.data.key instanceof Date && d.data.key.toString() === e[parseInt(c.toString(), 10)].data.key.toString()))
        ) {
          var g = true;
          var y = t[parseInt((l + 1).toString(), 10)];
          if (n && t[parseInt((l + 1).toString(), 10)] && !t[parseInt((l + 1).toString(), 10)].isAggregateRow) {
            var m = t[parseInt((l + 1).toString(), 10)].data.key.toString();
            var w = t[parseInt((l + 1).toString(), 10)].data.field;
            var b = e[parseInt(c.toString(), 10)].data.items.records
              ? e[parseInt(c.toString(), 10)].data.items.records
              : e[parseInt(c.toString(), 10)].data.items;
            if (
              b &&
              b.length &&
              b[0]['' + t[parseInt((l + 1).toString(), 10)].data.field] &&
              b[0]['' + t[parseInt((l + 1).toString(), 10)].data.field].toString() !== m
            ) {
              g = false;
            }
          }
          if (!g && n) continue;
          var v = o.indexOf(d);
          if (v !== -1) {
            o[parseInt(v.toString(), 10)].data = e[parseInt(c.toString(), 10)].data;
            o[parseInt(v.toString(), 10)].gSummary = e[parseInt(c.toString(), 10)].gSummary;
          }
          if (this.parent.enableVirtualization) {
            var x = h.indexOf(d);
            if (x !== -1) {
              h[parseInt(x.toString(), 10)].data = e[parseInt(c.toString(), 10)].data;
              h[parseInt(x.toString(), 10)].gSummary = e[parseInt(c.toString(), 10)].gSummary;
            }
          }
          d.data = e[parseInt(c.toString(), 10)].data;
          d.gSummary = ['gSummary'];
          e.splice(c, 1);
          c--;
          u = true;
          break;
        } else if (d.isAggregateRow && e[parseInt(c.toString(), 10)].isAggregateRow) {
          for (var P = 0; P < i.length; P++)
            if (
              this.evaluateGroupAggregateValueChange(d, e[parseInt(c.toString(), 10)], i[parseInt(P.toString(), 10)])
            ) {
              var v = o.indexOf(d);
              if (v !== -1) {
                o[parseInt(v.toString(), 10)].data = e[parseInt(c.toString(), 10)].data;
                o[parseInt(v.toString(), 10)].gSummary = e[parseInt(c.toString(), 10)].gSummary;
              }
              if (this.parent.enableVirtualization) {
                var x = h.indexOf(d);
                if (x !== -1) {
                  h[parseInt(x.toString(), 10)].data = e[parseInt(c.toString(), 10)].data;
                  h[parseInt(x.toString(), 10)].gSummary = e[parseInt(c.toString(), 10)].gSummary;
                }
              }
              d.data = e[parseInt(c.toString(), 10)].data;
              d.gSummary = e[parseInt(c.toString(), 10)].gSummary;
              u = true;
              break;
            }
          if (u) break;
        }
      }
      if (!u) {
        var B = this.parent.getRowElementByUID(d.uid);
        if (!p(B)) {
          Bt(B);
        }
        o.splice(o.indexOf(d), 1);
        if (this.parent.enableVirtualization) {
          h.splice(h.indexOf(d), 1);
          for (var R = 1; R <= Object.keys(a).length; R++) {
            var L = a[parseInt(R.toString(), 10)].indexOf(d);
            if (L !== -1) {
              a[parseInt(R.toString(), 10)].splice([parseInt(L.toString(), 10)], 1);
            }
          }
        }
        if (this.parent.enableInfiniteScrolling && this.parent.infiniteScrollSettings.enableCache) {
          this.parent.infiniteScrollModule.resetInfiniteCache(o);
        }
      }
    }
  };
  r.prototype.groupReorderRefreshHandler = function (t) {
    for (var e = this.parent, i = new ts(e.serviceLocator, null, e), n = e.getColumns(), s = 0; s < t.length; s++) {
      var o = t[parseInt(s.toString(), 10)];
      if (!p(t[parseInt(s.toString(), 10)].uid) && !p(e.getRowElementByUID(t[parseInt(s.toString(), 10)].uid))) {
        i.refresh(t[parseInt(s.toString(), 10)], n, false);
      }
    }
  };
  r.prototype.getGroupParentFooterAggregateRowObject = function (t) {
    for (
      var e =
          this.parent.enableInfiniteScrolling &&
          this.parent.infiniteScrollSettings.enableCache &&
          this.parent.groupSettings.columns.length
            ? this.parent.contentModule.rows
            : this.parent.getRowsObject(),
        i = [],
        n = 0;
      n < e.length;
      n++
    ) {
      var s = e[parseInt(n.toString(), 10)];
      if (e[parseInt(n.toString(), 10)].parentUid === t && e[parseInt(n.toString(), 10)].isAggregateRow) {
        i.push(e[parseInt(n.toString(), 10)]);
      }
    }
    return i;
  };
  r.prototype.evaluateGroupAggregateValueChange = function (t, e, i) {
    var n = false;
    if (
      t.data[i.field].field === e.data[i.field].field &&
      t.data[i.field].key === e.data[i.field].key &&
      t.data[i.field].hasOwnProperty(i.field + ' - ' + i.type) &&
      e.data[i.field].hasOwnProperty(i.field + ' - ' + i.type)
    ) {
      n = true;
    }
    return n;
  };
  r.prototype.gettingVirtualData = function (t, e, i) {
    for (
      var n = [],
        s = function (h) {
          if (e.indexOf(t[parseInt(h.toString(), 10)].data) === -1) {
            n.push(t[parseInt(h.toString(), 10)].data);
          }
          if (t[parseInt(h.toString(), 10)].data.field === o.parent.groupSettings.columns[0]) {
            var l = t[parseInt(h.toString(), 10)].data.items;
            if (!p(l.records)) {
              l = l.records;
            }
            for (
              var u = function (c) {
                  if (
                    i &&
                    e.findIndex(function (f) {
                      return f[i.toString()] === l[parseInt(c.toString(), 10)][i.toString()];
                    }) === -1
                  ) {
                    n.push(l[parseInt(c.toString(), 10)]);
                  }
                },
                d = 0;
              d < l.length;
              d++
            )
              u(d);
          }
        },
        o = this,
        a = 0;
      a < t.length;
      a++
    )
      s(a);
    return n;
  };
  r.prototype.iterateGroupAggregates = function (t) {
    var e = this;
    var i = t instanceof Array ? t : [];
    var n = this.parent.getRowsObject();
    var s = this.parent.getCurrentViewRecords().slice();
    var o = this.parent.getPrimaryKeyFieldNames()[0];
    var a = t && t.length ? t[0] && t[0].dragRowObjects : null;
    var h = t && t.length ? t[0] && t[0].dropRowObjects : null;
    var l = null;
    var u = null;
    if (
      this.parent.enableVirtualization &&
      this.parent.allowGrouping &&
      this.parent.groupSettings.columns.length &&
      (!p(a) || !p(h))
    ) {
      if (a) {
        s.push.apply(s, this.gettingVirtualData(a, s, this.parent.getPrimaryKeyFieldNames()[0]));
      }
      if (h) {
        s.push.apply(s, this.gettingVirtualData(h, s, this.parent.getPrimaryKeyFieldNames()[0]));
      }
    }
    var d =
      this.parent.enableInfiniteScrolling &&
      this.parent.allowGrouping &&
      t.length &&
      this.parent.groupSettings.columns.length &&
      !p(a) &&
      !p(h);
    if (d) {
      s = [];
      l = h[h.length - 1].data.key;
      u = a[a.length - 1].data.key;
      this.parent.getRowsObject().map(function (nt) {
        var vt = nt.data[e.parent.groupSettings.columns[0]];
        if (
          nt.isDataRow &&
          (nt.data[e.parent.groupSettings.columns[0]] === l ||
            nt.data[e.parent.groupSettings.columns[0]] === u ||
            (nt.data[e.parent.groupSettings.columns[0]] instanceof Date &&
              (nt.data[e.parent.groupSettings.columns[0]].toString() === l.toString() ||
                nt.data[e.parent.groupSettings.columns[0]].toString() === u.toString())))
        ) {
          s.push(nt.data);
        }
      });
    }
    var c = [];
    var f = n.map(function (nt) {
      if (nt.edit === 'delete') {
        c.push(nt.data);
      }
      return nt.changes instanceof Object ? nt.changes : nt.data;
    });
    f = i.length === 0 ? f : i;
    var g = s.map(function (nt) {
      var vt = wi.getObject(this.parent.getPrimaryKeyFieldNames()[0], nt);
      var Le;
      var ge = f.some(function (re) {
        Le = re;
        return vt === wi.getObject(this.parent.getPrimaryKeyFieldNames()[0], re);
      });
      return ge ? Le : nt;
    });
    var y = t;
    if (!(t.type && t.type === 'cancel') && c.length > 0)
      for (var m = 0; m < c.length; m++) {
        var w = g.indexOf(c[parseInt(m.toString(), 10)]);
        g.splice(w, 1);
      }
    for (var b = [], v = this.parent.aggregates, x = 0; x < v.length; x++)
      for (var P = v[parseInt(x.toString(), 10)], B = 0; B < P.columns.length; B++)
        for (
          var R = {},
            L = P.columns[parseInt(B.toString(), 10)].type.toString(),
            O = L.split(',').map(function (nt) {
              return nt.trim();
            }),
            T = 0,
            M = O;
          T < M.length;
          T++
        ) {
          var F = M[T];
          R = {
            type: M[T].toLowerCase(),
            field: P.columns[parseInt(B.toString(), 10)].field,
          };
          b.push(R);
        }
    for (var V, z, tt = this.parent.groupSettings.columns, J = 0; J < tt.length; J++) {
      z = V || g;
      V = wi.group(z, tt[parseInt(J.toString(), 10)], b, null, null);
    }
    if (d) {
      var K = this.parent.currentViewData[this.parent.currentViewData.length - 1].key;
      if (
        (this.parent.currentViewData[this.parent.currentViewData.length - 1].key instanceof Date &&
          (this.parent.currentViewData[this.parent.currentViewData.length - 1].key.toString() === l.toString() ||
            this.parent.currentViewData[this.parent.currentViewData.length - 1].key.toString() === u.toString())) ||
        this.parent.currentViewData[this.parent.currentViewData.length - 1].key === l ||
        this.parent.currentViewData[this.parent.currentViewData.length - 1].key === u
      ) {
        for (var At = [], m = 0; m < V.length; m++) At.push(V[parseInt(m.toString(), 10)]);
        var de = [];
        var pe = function (nt) {
          for (var vt = 0; vt < At.length; vt++)
            de.push(
              new vr('field', '==', At[parseInt(vt.toString(), 10)].field).and(
                e.parent.renderModule.getPredicate('key', 'equal', At[parseInt(vt.toString(), 10)].key),
              ),
            );
          nt.where(vr.or(de));
        };
        var fe = this.parent.getDataModule().generateQuery(true);
        pe(fe);
        var ui = this.parent.getDataModule().dataManager.executeLocal(fe);
        this.parent.renderModule.updateGroupInfo(V, ui);
      }
    }
    return V;
  };
  r.prototype.updateExpand = function (t) {
    for (var e = t.uid, i = t.isExpand, n = this.parent.getRowsObject(), s = 0; s < n.length; s++) {
      var o = n[parseInt(s.toString(), 10)];
      if (o.uid === e || p(e)) {
        o.isExpand = i;
        for (
          var a = function (u) {
              var d = n[parseInt(u.toString(), 10)];
              var c = void 0;
              if (d.parentUid !== o.uid) {
                c = n.filter(function (f) {
                  return f.uid === d.parentUid;
                })[0];
              }
              d.parentUid === o.uid
                ? (d.visible = o.isExpand)
                : !p(c) &&
                  d.parentUid === c.uid &&
                  (c.isExpand && c.visible === true
                    ? (d.visible = true)
                    : c.isExpand && c.visible === false && (d.visible = false));
              if (p(e)) return 'break';
            },
            h = s + 1;
          h < n.length;
          h++
        ) {
          var l = a(h);
          if (l === 'break') break;
        }
      }
    }
    this.parent.notify(fi, {
      rows: n,
      args: {
        isFrozen: false,
        rows: n,
      },
    });
  };
  return r;
})();
var Qr = (function () {
  function r(t) {
    this.bufferBlob = new Blob(['']);
    this.bufferText = '';
    this.init(t);
    $r.isMicrosoftBrowser = !!navigator.msSaveBlob;
  }
  Object.defineProperty(r.prototype, 'buffer', {
    get: function () {
      this.flush();
      return this.bufferBlob;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'encoding', {
    get: function () {
      return this.enc;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.init = function (t) {
    t == null ? ((this.enc = new ei(false)), (this.enc.type = 'Utf8')) : ((this.enc = t), this.setBomByte());
  };
  r.prototype.setBomByte = function () {
    if (this.encoding.includeBom)
      switch (this.encoding.type) {
        case 'Unicode':
          {
            var t = new ArrayBuffer(2);
            var e = new Uint8Array(t);
          }
          {
            e[0] = 255;
            e[1] = 254;
            this.bufferBlob = new Blob([t]);
          }
          break;
        case 'Utf8':
          {
            var i = new ArrayBuffer(3);
            var n = new Uint8Array(i);
          }
          {
            n[0] = 239;
            n[1] = 187;
            n[2] = 191;
            this.bufferBlob = new Blob([i]);
          }
          break;
        default:
          this.bufferBlob = new Blob(['']);
          break;
      }
  };
  r.prototype.save = function (t) {
    if (this.bufferText !== '') {
      this.flush();
    }
    $r.save(t, this.buffer);
  };
  r.prototype.write = function (t) {
    if (this.encoding === void 0) throw new Error('Object Disposed Exception: current writer is disposed');
    Yr(t, 'string');
    this.bufferText += t;
    if (this.bufferText.length >= 10240) {
      this.flush();
    }
  };
  r.prototype.flush = function () {
    if (!(this.bufferText === void 0 || this.bufferText === null || this.bufferText.length === 0)) {
      var t = this.encoding.getBytes(this.bufferText, 0, this.bufferText.length);
      this.bufferText = '';
      this.bufferBlob = new Blob([this.bufferBlob, t]);
    }
  };
  r.prototype.writeLine = function (t) {
    if (this.encoding === void 0) throw new Error('Object Disposed Exception: current writer is disposed');
    Yr(t, 'string');
    this.bufferText =
      this.bufferText +
      t +
      `\r
`;
    if (this.bufferText.length >= 10240) {
      this.flush();
    }
  };
  r.prototype.destroy = function () {
    this.bufferBlob = void 0;
    this.bufferText = void 0;
    if (this.enc instanceof ei) {
      this.enc.destroy();
    }
    this.enc = void 0;
  };
  return r;
})();
function Gs(r) {
  return Object.prototype.toString.call(r) === '[object String]' ? '$s' + r : '$o' + r.toString();
}
var X = (function () {
  function r(t) {
    this.table = {};
    this.nElements = 0;
    this.toStr = t || Gs;
  }
  r.prototype.getValue = function (t) {
    var e = this.table['$' + this.toStr(t)];
    if (!(typeof this.table['$' + this.toStr(t)] > 'u')) return this.table['$' + this.toStr(t)].value;
  };
  r.prototype.setValue = function (t, e) {
    var i;
    var n = '$' + this.toStr(t);
    this.table[n];
    this.nElements++;
    i = void 0;
    this.table[n] = {
      key: t,
      value: e,
    };
    return i;
  };
  r.prototype.remove = function (t) {
    var e = '$' + this.toStr(t);
    var i = this.table[e];
    delete this.table[e];
    this.nElements--;
    return this.table[e].value;
  };
  r.prototype.keys = function () {
    for (var t = [], e = Object.keys(this.table), i = 0; i < e.length; i++) {
      var n = this.table[e[i]];
      t.push(this.table[e[i]].key);
    }
    return t;
  };
  r.prototype.values = function () {
    for (var t = [], e = Object.keys(this.table), i = 0; i < e.length; i++) {
      var n = this.table[e[i]];
      t.push(this.table[e[i]].value);
    }
    return t;
  };
  r.prototype.containsKey = function (t) {
    var e = true;
    typeof this.getValue(t) > 'u' ? (e = true) : (e = false);
    return !e;
  };
  r.prototype.clear = function () {
    this.table = {};
    this.nElements = 0;
  };
  r.prototype.size = function () {
    return this.nElements;
  };
  return r;
})();
var k = (function () {
  function r(t) {
    this.stringStartMark = '/';
    this.internalValue = '';
    this.isSaving6 = false;
    this.position6 = -1;
    this.internalValue = this.normalizeValue(t);
  }
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status6;
    },
    set: function (t) {
      this.status6 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving6;
    },
    set: function (t) {
      this.isSaving6 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index6;
    },
    set: function (t) {
      this.index6 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position6;
    },
    set: function (t) {
      this.position6 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'value', {
    get: function () {
      return this.internalValue;
    },
    set: function (t) {
      var e = t;
      t !== null && t.length > 0 ? ((e = t), (this.internalValue = this.normalizeValue(e))) : (this.internalValue = e);
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.save = function (t) {
    t.write(this.toString());
  };
  r.prototype.toString = function () {
    return this.stringStartMark + this.escapeString(this.value);
  };
  r.prototype.clone = function (t) {
    var e = new r();
    e.value = this.internalValue;
    return e;
  };
  r.prototype.escapeString = function (t) {
    for (var e = '', i = 0, n = t.length; i < n; i++) {
      var s = t[i];
      r.delimiters.indexOf(t[i]);
      e = e + t[i];
    }
    return e;
  };
  r.prototype.normalizeValue = function (t, e) {
    return t;
  };
  r.delimiters = '()<>[]{}/%}';
  r.replacements = [
    ' ',
    '\t',
    `
`,
    '\r',
  ];
  return r;
})();
var S = (function () {
  function r() {
    this.forTest = 'test';
    this.forTest = r.obj;
  }
  r.obj = 'obj';
  r.endObj = 'endobj';
  r.r = 'R';
  r.whiteSpace = ' ';
  r.slash = '/';
  r.newLine = `\r
`;
  r.stream = 'stream';
  r.endStream = 'endstream';
  r.xref = 'xref';
  r.f = 'f';
  r.n = 'n';
  r.trailer = 'trailer';
  r.startxref = 'startxref';
  r.eof = '%%EOF';
  r.header = '%PDF-1.5';
  r.beginText = 'BT';
  r.endText = 'ET';
  r.beginPath = 'm';
  r.appendLineSegment = 'l';
  r.stroke = 'S';
  r.fill = 'f';
  r.fillEvenOdd = 'f*';
  r.fillStroke = 'B';
  r.fillStrokeEvenOdd = 'B*';
  r.appendbeziercurve = 'c';
  r.appendRectangle = 're';
  r.saveState = 'q';
  r.restoreState = 'Q';
  r.paintXObject = 'Do';
  r.modifyCtm = 'cm';
  r.modifyTM = 'Tm';
  r.setLineWidth = 'w';
  r.setLineCapStyle = 'J';
  r.setLineJoinStyle = 'j';
  r.setDashPattern = 'd';
  r.setFlatnessTolerance = 'i';
  r.closePath = 'h';
  r.closeStrokePath = 's';
  r.closeFillStrokePath = 'b';
  r.setCharacterSpace = 'Tc';
  r.setWordSpace = 'Tw';
  r.setHorizontalScaling = 'Tz';
  r.setTextLeading = 'TL';
  r.setFont = 'Tf';
  r.setRenderingMode = 'Tr';
  r.setTextRise = 'Ts';
  r.setTextScaling = 'Tz';
  r.setCoords = 'Td';
  r.goToNextLine = 'T*';
  r.setText = 'Tj';
  r.setTextWithFormatting = 'TJ';
  r.setTextOnNewLine = "'";
  r.selectcolorspaceforstroking = 'CS';
  r.selectcolorspacefornonstroking = 'cs';
  r.setrbgcolorforstroking = 'RG';
  r.setrbgcolorfornonstroking = 'rg';
  r.setcmykcolorforstroking = 'K';
  r.setcmykcolorfornonstroking = 'k';
  r.setgraycolorforstroking = 'G';
  r.setgraycolorfornonstroking = 'g';
  r.clipPath = 'W';
  r.clipPathEvenOdd = 'W*';
  r.endPath = 'n';
  r.setGraphicsState = 'gs';
  r.comment = '%';
  r.evenOdd = '*';
  r.setMiterLimit = 'M';
  r.setColorAndPattern = 'scn';
  r.setColorAndPatternStroking = 'SCN';
  return r;
})();
var rt = (function () {
  function r() {
    this.pages = 'Pages';
    this.kids = 'Kids';
    this.count = 'Count';
    this.resources = 'Resources';
    this.type = 'Type';
    this.size = 'Size';
    this.mediaBox = 'MediaBox';
    this.parent = 'Parent';
    this.root = 'Root';
    this.decodeParms = 'DecodeParms';
    this.filter = 'Filter';
    this.font = 'Font';
    this.type1 = 'Type1';
    this.baseFont = 'BaseFont';
    this.encoding = 'Encoding';
    this.subtype = 'Subtype';
    this.contents = 'Contents';
    this.procset = 'ProcSet';
    this.colorSpace = 'ColorSpace';
    this.extGState = 'ExtGState';
    this.pattern = 'Pattern';
    this.xObject = 'XObject';
    this.length = 'Length';
    this.width = 'Width';
    this.height = 'Height';
    this.bitsPerComponent = 'BitsPerComponent';
    this.image = 'Image';
    this.dctdecode = 'DCTDecode';
    this.columns = 'Columns';
    this.blackIs1 = 'BlackIs1';
    this.k = 'K';
    this.s = 'S';
    this.predictor = 'Predictor';
    this.deviceRgb = 'DeviceRGB';
    this.next = 'Next';
    this.action = 'Action';
    this.link = 'Link';
    this.a = 'A';
    this.annot = 'Annot';
    this.p = 'P';
    this.c = 'C';
    this.rect = 'Rect';
    this.uri = 'URI';
    this.annots = 'Annots';
    this.ca = 'ca';
    this.CA = 'CA';
    this.xyz = 'XYZ';
    this.fit = 'Fit';
    this.dest = 'Dest';
    this.BM = 'BM';
    this.flatedecode = 'FlateDecode';
    this.rotate = 'Rotate';
    this.bBox = 'BBox';
    this.form = 'Form';
    this.w = 'W';
    this.cIDFontType2 = 'CIDFontType2';
    this.cIDToGIDMap = 'CIDToGIDMap';
    this.cIDFontType0C = 'CIDFontType0C';
    this.identity = 'Identity';
    this.dw = 'DW';
    this.fontDescriptor = 'FontDescriptor';
    this.cIDSystemInfo = 'CIDSystemInfo';
    this.cIDFontType0 = 'CIDFontType0';
    this.fontName = 'FontName';
    this.flags = 'Flags';
    this.fontBBox = 'FontBBox';
    this.missingWidth = 'MissingWidth';
    this.stemV = 'StemV';
    this.italicAngle = 'ItalicAngle';
    this.capHeight = 'CapHeight';
    this.ascent = 'Ascent';
    this.descent = 'Descent';
    this.leading = 'Leading';
    this.avgWidth = 'AvgWidth';
    this.fontFile2 = 'FontFile2';
    this.fontFile3 = 'FontFile3';
    this.maxWidth = 'MaxWidth';
    this.xHeight = 'XHeight';
    this.stemH = 'StemH';
    this.registry = 'Registry';
    this.ordering = 'Ordering';
    this.supplement = 'Supplement';
    this.type0 = 'Type0';
    this.identityH = 'Identity-H';
    this.toUnicode = 'ToUnicode';
    this.descendantFonts = 'DescendantFonts';
    this.background = 'Background';
    this.shading = 'Shading';
    this.matrix = 'Matrix';
    this.antiAlias = 'AntiAlias';
    this.function = 'Function';
    this.extend = 'Extend';
    this.shadingType = 'ShadingType';
    this.coords = 'Coords';
    this.domain = 'Domain';
    this.range = 'Range';
    this.functionType = 'FunctionType';
    this.bitsPerSample = 'BitsPerSample';
    this.patternType = 'PatternType';
    this.paintType = 'PaintType';
    this.tilingType = 'TilingType';
    this.xStep = 'XStep';
    this.yStep = 'YStep';
    this.viewerPreferences = 'ViewerPreferences';
    this.centerWindow = 'CenterWindow';
    this.displayTitle = 'DisplayTitle';
    this.fitWindow = 'FitWindow';
    this.hideMenuBar = 'HideMenubar';
    this.hideToolBar = 'HideToolbar';
    this.hideWindowUI = 'HideWindowUI';
    this.pageMode = 'PageMode';
    this.pageLayout = 'PageLayout';
    this.duplex = 'Duplex';
    this.printScaling = 'PrintScaling';
  }
  return r;
})();
var q = (function () {
  function r(t) {
    this.position7 = -1;
    this.primitiveItems = new X();
    this.prefix = '<<';
    this.suffix = '>>';
    this.resources = [];
    this.object = null;
    this.archive = true;
    this.isResource = false;
    if (typeof t > 'u') {
      this.primitiveItems = new X();
      this.encrypt = true;
      this.dictionaryProperties = new rt();
    } else {
      this.primitiveItems = new X();
      for (var e = t.items.keys(), i = t.items.values(), n = 0; n < t.items.size(); n++)
        this.primitiveItems.setValue(e[n], i[n]);
      this.status = t.status;
      this.freezeChanges(this);
      this.encrypt = true;
      this.dictionaryProperties = new rt();
    }
  }
  Object.defineProperty(r.prototype, 'items', {
    get: function () {
      return this.primitiveItems;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status7;
    },
    set: function (t) {
      this.status7 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving7;
    },
    set: function (t) {
      this.isSaving7 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index7;
    },
    set: function (t) {
      this.index7 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      return this.object;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position7;
    },
    set: function (t) {
      this.position7 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'Count', {
    get: function () {
      return this.primitiveItems.size();
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'Dictionary', {
    get: function () {
      return this;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getArchive = function () {
    return this.archive;
  };
  r.prototype.setArchive = function (t) {
    this.archive = t;
  };
  r.prototype.setEncrypt = function (t) {
    this.encrypt = t;
    this.modify();
  };
  r.prototype.getEncrypt = function () {
    return this.encrypt;
  };
  r.prototype.freezeChanges = function (t) {
    this.bChanged = false;
  };
  r.prototype.clone = function (t) {
    var e = new r();
    return e;
  };
  r.prototype.modify = function () {
    this.bChanged = true;
  };
  r.prototype.remove = function (t) {
    typeof t != 'string' ? (this.primitiveItems.remove(t.value), this.modify()) : this.remove(new k(t));
  };
  r.prototype.containsKey = function (t) {
    var e = false;
    e = this.primitiveItems.containsKey(t.toString());
    return e;
  };
  r.prototype.onBeginSave = function () {
    this.beginSave.sender.beginSave();
  };
  r.prototype.onFontDictionaryBeginSave = function () {
    this.fontDictionaryBeginSave.sender.fontDictionaryBeginSave();
  };
  r.prototype.onDescendantFontBeginSave = function () {
    this.descendantFontBeginSave.sender.descendantFontBeginSave();
  };
  r.prototype.onTemplateBeginSave = function () {
    this.pageBeginDrawTemplate.sender.pageBeginSave();
  };
  r.prototype.onBeginAnnotationSave = function () {
    this.annotationBeginSave.sender.beginSave();
  };
  r.prototype.onSectionBeginSave = function (t) {
    var e = this.sectionBeginSave;
    this.sectionBeginSave.sender.beginSave(this.sectionBeginSave.state, t);
  };
  r.prototype.save = function (t, e) {
    typeof e > 'u'
      ? this.save(t, true)
      : (t.write(this.prefix),
        typeof this.beginSave < 'u' && this.onBeginSave(),
        typeof this.descendantFontBeginSave < 'u' && this.onDescendantFontBeginSave(),
        typeof this.fontDictionaryBeginSave < 'u' && this.onFontDictionaryBeginSave(),
        typeof this.annotationBeginSave < 'u' && this.onBeginAnnotationSave(),
        typeof this.sectionBeginSave < 'u' && this.onSectionBeginSave(t),
        typeof this.pageBeginDrawTemplate < 'u' && this.onTemplateBeginSave(),
        this.Count > 0 && this.saveItems(t),
        t.write(this.suffix),
        t.write(S.newLine));
  };
  r.prototype.saveItems = function (t) {
    t.write(S.newLine);
    for (var e = this.primitiveItems.keys(), i = this.primitiveItems.values(), n = 0; n < e.length; n++) {
      var s = e[n];
      var o = new k(e[n]);
      o.save(t);
      t.write(S.whiteSpace);
      var a = i[n];
      i[n].save(t);
      t.write(S.newLine);
    }
  };
  return r;
})();
var Hs = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var Ws = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var Us = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var _s = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var qs = (function () {
  function r(t, e) {
    this.sender = t;
    this.state = e;
  }
  return r;
})();
var Ks = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var E = (function () {
  function r(t) {
    this.position5 = -1;
    this.value = t;
  }
  Object.defineProperty(r.prototype, 'intValue', {
    get: function () {
      return this.value;
    },
    set: function (t) {
      this.value = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isInteger', {
    get: function () {
      return this.integer;
    },
    set: function (t) {
      this.integer = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status5;
    },
    set: function (t) {
      this.status5 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving5;
    },
    set: function (t) {
      this.isSaving5 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index5;
    },
    set: function (t) {
      this.index5 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position5;
    },
    set: function (t) {
      this.position5 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      var t = null;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.save = function (t) {
    t.write(this.intValue.toString());
  };
  r.prototype.clone = function (t) {
    var e = new r(this.value);
    return e;
  };
  r.floatToString = function (t) {
    var e = t.toFixed(2);
    if (e === '0.00') {
      e = '.00';
    }
    return e;
  };
  r.min = function (t, e, i) {
    var n = Math.min(t, e);
    return Math.min(i, n);
  };
  return r;
})();
var Z = (function () {
  function r(t) {
    this.startMark = '[';
    this.endMark = ']';
    this.position9 = -1;
    this.clonedObject9 = null;
    this.isFont = false;
    if (typeof t > 'u') this.internalElements = [];
    else if (typeof t < 'u' && !(t instanceof r))
      for (var e = t, i = 0; i < e.length; i++) {
        var n = new E(e[i]);
        this.add(n);
      }
    else {
      var s = t;
      this.internalElements = [];
      for (var i = 0; i < t.elements.length; i++) this.internalElements.push(t.elements[i]);
    }
  }
  r.prototype.items = function (t) {
    return this.internalElements[t];
  };
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.internalElements.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status9;
    },
    set: function (t) {
      this.status9 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving9;
    },
    set: function (t) {
      this.isSaving9 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      return this.clonedObject9;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position9;
    },
    set: function (t) {
      this.position9 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index9;
    },
    set: function (t) {
      this.index9 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'CrossTable', {
    get: function () {
      return this.pdfCrossTable;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'elements', {
    get: function () {
      return this.internalElements;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    if (typeof this.internalElements > 'u') {
      this.internalElements = [];
    }
    this.internalElements.push(t);
    this.markedChange();
  };
  r.prototype.markedChange = function () {
    this.bChanged = true;
  };
  r.prototype.contains = function (t) {
    for (var e = false, i = 0; i < this.internalElements.length; i++) {
      var n = this.internalElements[i];
      var s = t;
      if (
        this.internalElements[i] != null &&
        typeof this.internalElements[i] < 'u' &&
        t != null &&
        typeof t < 'u' &&
        this.internalElements[i].value === t.value
      )
        return true;
    }
    return e;
  };
  r.prototype.getItems = function (t) {
    return this.internalElements[t];
  };
  r.prototype.save = function (t) {
    t.write(this.startMark);
    for (var e = 0, i = this.count; e < i; e++) {
      this.getItems(e).save(t);
      if (e + 1 !== i) {
        t.write(S.whiteSpace);
      }
    }
    t.write(this.endMark);
  };
  r.prototype.clone = function (t) {
    this.clonedObject9 = null;
    for (var e = new r(), i = 0; i < this.internalElements.length; i++) {
      var n = this.internalElements[i];
      e.add(this.internalElements[i].clone(t));
    }
    e.pdfCrossTable = t;
    this.clonedObject9 = e;
    return e;
  };
  r.fromRectangle = function (t) {
    var e = [t.x, t.y, t.width, t.height];
    var i = new r(e);
    return i;
  };
  r.prototype.insert = function (t, e) {
    if (t < this.internalElements.length && t > 0) {
      for (var i = [], n = 0; n < t; n++) i.push(this.internalElements[n]);
      i.push(e);
      for (var n = t; n < this.internalElements.length; n++) i.push(this.internalElements[n]);
      this.internalElements = i;
    } else this.internalElements.push(e);
    this.markChanged();
  };
  r.prototype.indexOf = function (t) {
    return this.internalElements.indexOf(t);
  };
  r.prototype.remove = function (t) {
    var e = this.internalElements.indexOf(t);
    this.internalElements[e] = null;
    this.markChanged();
  };
  r.prototype.removeAt = function (t) {
    if (this.internalElements.length > t) {
      for (var e = [], i = 0; i < t; i++) e.push(this.internalElements[i]);
      for (var i = t + 1; i < this.internalElements.length; i++) e.push(this.internalElements[i]);
      this.internalElements = e;
    }
    this.markChanged();
  };
  r.prototype.clear = function () {
    this.internalElements = [];
    this.markChanged();
  };
  r.prototype.markChanged = function () {
    this.bChanged = true;
  };
  return r;
})();
var Js = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Pt = (function (r) {
  Js(t, r);
  function t(e, i) {
    var n = r(e) || this;
    n.dicPrefix = 'stream';
    n.dicSuffix = 'endstream';
    n.clonedObject2 = null;
    n.bCompress = true;
    typeof e < 'u' || typeof i < 'u'
      ? ((n.dataStream2 = []), (n.dataStream2 = i), (n.bCompress2 = false))
      : ((n.dataStream2 = []), (n.bCompress2 = true));
    return n;
  }
  Object.defineProperty(t.prototype, 'internalStream', {
    get: function () {
      return this.dataStream2;
    },
    set: function (e) {
      this.dataStream2 = [];
      this.dataStream2 = e;
      this.modify();
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'compress', {
    get: function () {
      return this.bCompress;
    },
    set: function (e) {
      this.bCompress = e;
      this.modify();
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'data', {
    get: function () {
      return this.dataStream2;
    },
    set: function (e) {
      this.dataStream2 = [];
      this.dataStream2 = e;
      this.modify();
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.clearStream = function () {
    this.internalStream = [];
    if (this.items.containsKey(this.dictionaryProperties.filter)) {
      this.remove(this.dictionaryProperties.filter);
    }
    this.bCompress = true;
    this.modify();
  };
  t.prototype.write = function (e) {
    if (e == null) throw new Error('ArgumentNullException:text');
    if (e.length <= 0) throw new Error('ArgumentException: Can not write an empty string, text');
    this.dataStream2.push(e);
    this.modify();
  };
  t.prototype.writeBytes = function (e) {
    if (e === null) throw new Error('ArgumentNullException:data');
    if (e.length <= 0) throw new Error('ArgumentException: Can not write an empty bytes, data');
    for (var i = '', n = 0; n < e.length; n++) i += String.fromCharCode(e[n]);
    this.dataStream2.push(i);
    this.modify();
  };
  t.prototype.onCmapBeginSave = function () {
    this.cmapBeginSave.sender.cmapBeginSave();
  };
  t.prototype.onFontProgramBeginSave = function () {
    this.fontProgramBeginSave.sender.fontProgramBeginSave();
  };
  t.prototype.compressContent = function (e, i) {
    if (this.bCompress) {
      for (var n = [], s = 0; s < e.length; s++) n.push(e.charCodeAt(s));
      var o = new Uint8Array(n);
      var a = new Ms();
      a.write(o, 0, o.length);
      a.close();
      e = a.getCompressedString;
      this.addFilter(this.dictionaryProperties.flatedecode);
    }
    return e;
  };
  t.prototype.addFilter = function (e) {
    var i = this.items.getValue(this.dictionaryProperties.filter);
    if (i instanceof _) {
      var n = i;
      i = i.object;
    }
    var s = i;
    var o = i;
    if (o != null) {
      s = new Z();
      s.insert(0, o);
      this.items.setValue(this.dictionaryProperties.filter, s);
    }
    o = new k(e);
    s == null ? this.items.setValue(this.dictionaryProperties.filter, o) : s.insert(0, o);
  };
  t.prototype.save = function (e) {
    if (typeof this.cmapBeginSave < 'u') {
      this.onCmapBeginSave();
    }
    if (typeof this.fontProgramBeginSave < 'u') {
      this.onFontProgramBeginSave();
    }
    for (var i = '', n = 0; n < this.data.length; n++) i = i + this.data[n];
    if (i.length > 1 && !this.isResource) {
      i =
        `q\r
` +
        i +
        `Q\r
`;
    }
    i = this.compressContent(i, e);
    var s = i.length;
    this.items.setValue(this.dictionaryProperties.length, new E(i.length));
    r.prototype.save(e, false);
    e.write(this.dicPrefix);
    e.write(S.newLine);
    if (i.length > 0) {
      e.write(i);
    }
    e.write(S.newLine);
    e.write(this.dicSuffix);
    e.write(S.newLine);
  };
  t.bytesToString = function (e) {
    for (var i = '', n = 0; n < e.length; n++) i = i + String.fromCharCode(e[n]);
    return i;
  };
  return t;
})(q);
var $s = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var Ys = (function () {
  function r(t) {
    this.sender = t;
  }
  return r;
})();
var Ne;
(function (r) {
  (function (e) {
    e[(e.None = 0)] = 'None';
    e[(e.Ascii = 1)] = 'Ascii';
    e[(e.Unicode = 2)] = 'Unicode';
  })(r.ForceEncoding || (r.ForceEncoding = {}));
  var t;
  (function (e) {
    e[(e.StringValue = 0)] = 'StringValue';
    e[(e.ByteBuffer = 1)] = 'ByteBuffer';
  })(t || (t = {}));
})(Ne || (Ne = {}));
var dt = (function () {
  function r(t) {
    this.bHex = false;
    this.position1 = -1;
    this.clonedObject1 = null;
    this.bDecrypted = false;
    this.isParentDecrypted = false;
    this.isPacked = false;
    this.isFormField = false;
    this.isColorSpace = false;
    this.isHexString = true;
    if (typeof t > 'u') this.bHex = false;
    else if (!(t.length > 0 && t[0] === '0xfeff')) {
      this.stringValue = t;
      this.data = [];
      for (var e = 0; e < t.length; ++e) this.data.push(t.charCodeAt(e));
    }
  }
  Object.defineProperty(r.prototype, 'hex', {
    get: function () {
      return this.bHex;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'value', {
    get: function () {
      return this.stringValue;
    },
    set: function (t) {
      this.stringValue = t;
      this.data = null;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status1;
    },
    set: function (t) {
      this.status1 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving1;
    },
    set: function (t) {
      this.isSaving1 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index1;
    },
    set: function (t) {
      this.index1 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      return this.clonedObject1;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position1;
    },
    set: function (t) {
      this.position1 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'CrossTable', {
    get: function () {
      return this.crossTable;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'converted', {
    get: function () {
      return this.bConverted;
    },
    set: function (t) {
      this.bConverted = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'encode', {
    get: function () {
      return this.bForceEncoding;
    },
    set: function (t) {
      this.bForceEncoding = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.bytesToHex = function (t) {
    if (t == null) return '';
    var e = '';
    return '';
  };
  r.prototype.save = function (t) {
    if (t === null) throw new Error('ArgumentNullException : writer');
    this.encode !== void 0 && this.encode === Ne.ForceEncoding.Ascii
      ? t.write(this.pdfEncode())
      : t.write(r.stringMark[0] + this.value + r.stringMark[1]);
  };
  r.prototype.pdfEncode = function () {
    var t = '';
    if (this.encode !== void 0 && this.encode === Ne.ForceEncoding.Ascii) {
      for (var e = this.escapeSymbols(this.value), i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
      t = r.stringMark[0] + t + r.stringMark[1];
    } else t = this.value;
    return t;
  };
  r.prototype.escapeSymbols = function (t) {
    for (var e = [], i = 0; i < t.length; i++) {
      var n = t.charCodeAt(i);
      switch (n) {
        case 40:
        case 41:
          {
            e.push(92);
            e.push(n);
          }
          break;
        case 13:
          {
            e.push(92);
            e.push(114);
          }
          break;
        case 92:
          {
            e.push(92);
            e.push(n);
          }
          break;
        default:
          e.push(n);
          break;
      }
    }
    return e;
  };
  r.prototype.clone = function (t) {
    if (this.clonedObject1 !== null && this.clonedObject1.CrossTable === t) return this.clonedObject1;
    this.clonedObject1 = null;
    var e = new r(this.stringValue);
    e.bHex = this.bHex;
    e.crossTable = t;
    e.isColorSpace = this.isColorSpace;
    this.clonedObject1 = e;
    return e;
  };
  r.toUnicodeArray = function (t, e) {
    if (t == null) throw new Error('Argument Null Exception : value');
    for (var i = [], n = 0; n < t.length; n++) {
      var s = t.charCodeAt(n);
      i.push((s / 256) >>> 0);
      i.push(s & 255);
    }
    return i;
  };
  r.byteToString = function (t) {
    if (t == null) throw new Error('Argument Null Exception : stream');
    for (var e = '', i = 0; i < t.length; ++i) e += String.fromCharCode(t[i]);
    return e;
  };
  r.stringMark = '()';
  r.hexStringMark = '<>';
  r.hexFormatPattern = '{0:X2}';
  return r;
})();
var Ei = (function () {
  function r(t, e) {
    this.index3 = -1;
    this.position3 = -1;
    this.objNumber = 0;
    this.genNumber = 0;
    typeof t == 'number' && typeof e == 'number'
      ? ((this.objNumber = t), (this.genNumber = e))
      : ((this.objNumber = Number(t)), (this.genNumber = Number(e)));
  }
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status3;
    },
    set: function (t) {
      this.status3 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving3;
    },
    set: function (t) {
      this.isSaving3 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index3;
    },
    set: function (t) {
      this.index3 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position3;
    },
    set: function (t) {
      this.position3 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      var t = null;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.save = function (t) {
    t.write(this.toString());
  };
  r.prototype.toString = function () {
    return this.objNumber.toString() + ' ' + this.genNumber.toString() + ' R';
  };
  r.prototype.clone = function (t) {
    return null;
  };
  return r;
})();
var _ = (function () {
  function r(t, e) {
    this.index4 = -1;
    this.position4 = -1;
    this.objectIndex = -1;
    this.dictionaryProperties = new rt();
    this.initialize(t);
  }
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.status4;
    },
    set: function (t) {
      this.status4 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.isSaving4;
    },
    set: function (t) {
      this.isSaving4 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index4;
    },
    set: function (t) {
      this.index4 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.position4;
    },
    set: function (t) {
      this.position4 = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'object', {
    get: function () {
      return this.primitiveObject;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'reference', {
    get: function () {
      return this.pdfReference;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'index', {
    get: function () {
      return this.objectIndex;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.primitiveObject;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function (t) {
    if (
      t instanceof Z ||
      t instanceof q ||
      t instanceof k ||
      t instanceof E ||
      t instanceof Pt ||
      t instanceof Ei ||
      t instanceof dt
    )
      this.primitiveObject = t;
    else {
      var e = t;
      this.initialize(t.element);
    }
  };
  r.prototype.save = function (t) {
    t.position;
    var e = t.document.crossTable;
    this.object.isSaving = true;
    var i = null;
    i = t.document.crossTable.getReference(this.object);
    i.save(t);
  };
  r.prototype.clone = function (t) {
    return null;
  };
  return r;
})();
var Xs = (function () {
  function r() {
    this.action = null;
    this.dictionaryProperties = new rt();
    this.initialize();
  }
  Object.defineProperty(r.prototype, 'next', {
    get: function () {
      return this.action;
    },
    set: function (t) {
      this.action = t;
      this.dictionary.items.setValue(this.dictionaryProperties.next, new _(this.action));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'dictionary', {
    get: function () {
      if (typeof this.pdfDictionary > 'u') {
        this.pdfDictionary = new q();
      }
      return this.pdfDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function () {
    this.dictionary.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.action));
  };
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.dictionary;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Qs = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Zs = (function (r) {
  Qs(t, r);
  function t(e) {
    var i = r() || this;
    i.uniformResourceIdentifier = '';
    return i;
  }
  Object.defineProperty(t.prototype, 'uri', {
    get: function () {
      return this.uniformResourceIdentifier;
    },
    set: function (e) {
      this.uniformResourceIdentifier = e;
      this.dictionary.items.setValue(this.dictionaryProperties.uri, new dt(this.uniformResourceIdentifier));
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.initialize = function () {
    r.prototype.initialize();
    this.dictionary.items.setValue(this.dictionaryProperties.s, new k(this.dictionaryProperties.uri));
  };
  return t;
})(Xs);
var Zr;
(function (r) {
  r[(r.Left = 0)] = 'Left';
  r[(r.Center = 1)] = 'Center';
  r[(r.Right = 2)] = 'Right';
})(Zr || (Zr = {}));
var Ot;
(function (r) {
  r[(r.Top = 0)] = 'Top';
  r[(r.Middle = 1)] = 'Middle';
  r[(r.Bottom = 2)] = 'Bottom';
})(Ot || (Ot = {}));
var U;
(function (r) {
  r[(r.Left = 0)] = 'Left';
  r[(r.Center = 1)] = 'Center';
  r[(r.Right = 2)] = 'Right';
  r[(r.Justify = 3)] = 'Justify';
})(U || (U = {}));
var Wt;
(function (r) {
  r[(r.Fill = 0)] = 'Fill';
  r[(r.Stroke = 1)] = 'Stroke';
  r[(r.FillStroke = 2)] = 'FillStroke';
  r[(r.None = 3)] = 'None';
  r[(r.ClipFlag = 4)] = 'ClipFlag';
  r[(r.ClipFill = 4)] = 'ClipFill';
  r[(r.ClipStroke = 5)] = 'ClipStroke';
  r[(r.ClipFillStroke = 6)] = 'ClipFillStroke';
  r[(r.Clip = 7)] = 'Clip';
})(Wt || (Wt = {}));
var tn;
(function (r) {
  r[(r.Miter = 0)] = 'Miter';
  r[(r.Round = 1)] = 'Round';
  r[(r.Bevel = 2)] = 'Bevel';
})(tn || (tn = {}));
var Ce;
(function (r) {
  r[(r.Flat = 0)] = 'Flat';
  r[(r.Round = 1)] = 'Round';
  r[(r.Square = 2)] = 'Square';
})(Ce || (Ce = {}));
var lt;
(function (r) {
  r[(r.Solid = 0)] = 'Solid';
  r[(r.Dash = 1)] = 'Dash';
  r[(r.Dot = 2)] = 'Dot';
  r[(r.DashDot = 3)] = 'DashDot';
  r[(r.DashDotDot = 4)] = 'DashDotDot';
  r[(r.Custom = 5)] = 'Custom';
})(lt || (lt = {}));
var oe;
(function (r) {
  r[(r.Winding = 0)] = 'Winding';
  r[(r.Alternate = 1)] = 'Alternate';
})(oe || (oe = {}));
var Q;
(function (r) {
  r[(r.Rgb = 0)] = 'Rgb';
  r[(r.Cmyk = 1)] = 'Cmyk';
  r[(r.GrayScale = 2)] = 'GrayScale';
  r[(r.Indexed = 3)] = 'Indexed';
})(Q || (Q = {}));
var ii;
(function (r) {
  r[(r.Normal = 0)] = 'Normal';
  r[(r.Multiply = 1)] = 'Multiply';
  r[(r.Screen = 2)] = 'Screen';
  r[(r.Overlay = 3)] = 'Overlay';
  r[(r.Darken = 4)] = 'Darken';
  r[(r.Lighten = 5)] = 'Lighten';
  r[(r.ColorDodge = 6)] = 'ColorDodge';
  r[(r.ColorBurn = 7)] = 'ColorBurn';
  r[(r.HardLight = 8)] = 'HardLight';
  r[(r.SoftLight = 9)] = 'SoftLight';
  r[(r.Difference = 10)] = 'Difference';
  r[(r.Exclusion = 11)] = 'Exclusion';
  r[(r.Hue = 12)] = 'Hue';
  r[(r.Saturation = 13)] = 'Saturation';
  r[(r.Color = 14)] = 'Color';
  r[(r.Luminosity = 15)] = 'Luminosity';
})(ii || (ii = {}));
var Pe;
(function (r) {
  r[(r.Centimeter = 0)] = 'Centimeter';
  r[(r.Pica = 1)] = 'Pica';
  r[(r.Pixel = 2)] = 'Pixel';
  r[(r.Point = 3)] = 'Point';
  r[(r.Inch = 4)] = 'Inch';
  r[(r.Document = 5)] = 'Document';
  r[(r.Millimeter = 6)] = 'Millimeter';
})(Pe || (Pe = {}));
var en;
(function (r) {
  r[(r.Fit = 0)] = 'Fit';
  r[(r.Center = 1)] = 'Center';
  r[(r.Stretch = 2)] = 'Stretch';
  r[(r.Tile = 3)] = 'Tile';
})(en || (en = {}));
var Lt;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.LeftToRight = 1)] = 'LeftToRight';
  r[(r.RightToLeft = 2)] = 'RightToLeft';
})(Lt || (Lt = {}));
var j = (function () {
  function r(t, e, i, n) {
    typeof t > 'u'
      ? typeof e < 'u' && typeof i < 'u' && typeof n < 'u'
        ? this.assignRGB(e, i, n)
        : (this.filled = false)
      : t instanceof r
        ? ((this.redColor = t.r),
          (this.greenColor = t.g),
          (this.blueColor = t.b),
          (this.grayColor = t.gray),
          (this.alpha = t.alpha),
          (this.filled = this.alpha !== 0))
        : typeof t == 'number' && typeof e > 'u' && typeof i > 'u' && typeof n > 'u'
          ? (t < 0 && (t = 0),
            t > 1 && (t = 1),
            (this.redColor = t * r.maxColourChannelValue),
            (this.greenColor = t * r.maxColourChannelValue),
            (this.blueColor = t * r.maxColourChannelValue),
            (this.cyanColor = t),
            (this.magentaColor = t),
            (this.yellowColor = t),
            (this.blackColor = t),
            (this.grayColor = t),
            (this.alpha = r.maxColourChannelValue),
            (this.filled = true))
          : typeof n > 'u'
            ? this.assignRGB(t, e, i)
            : this.assignRGB(e, i, n, t);
  }
  r.prototype.assignRGB = function (t, e, i, n) {
    if (typeof t > 'u' || typeof e > 'u' || typeof i > 'u') this.filled = false;
    else {
      this.cyanColor = 0;
      this.magentaColor = 0;
      this.yellowColor = 0;
      this.blackColor = 0;
      this.grayColor = 0;
      this.redColor = t;
      this.greenColor = e;
      this.blueColor = i;
      if (typeof n > 'u') this.a = r.maxColourChannelValue;
      else {
        this.a = n;
        var s = n >= 0 && n <= 1;
        var o = s ? n : n / 255;
        var a = 1 - o;
        this.redColor = Math.max(0, Math.min(255, Math.round(t * o + r.maxColourChannelValue * a)));
        this.greenColor = Math.max(0, Math.min(255, Math.round(e * o + r.maxColourChannelValue * a)));
        this.blueColor = Math.max(0, Math.min(255, Math.round(i * o + r.maxColourChannelValue * a)));
      }
      this.filled = true;
      this.assignCMYK(t, e, i);
    }
  };
  r.prototype.assignCMYK = function (t, e, i) {
    var n = t / r.maxColourChannelValue;
    var s = e / r.maxColourChannelValue;
    var o = i / r.maxColourChannelValue;
    var a = E.min(1 - n, 1 - s, 1 - o);
    var h = a === 1 ? 0 : (1 - n - a) / (1 - a);
    var l = a === 1 ? 0 : (1 - s - a) / (1 - a);
    var u = a === 1 ? 0 : (1 - o - a) / (1 - a);
    this.blackColor = a;
    this.cyanColor = h;
    this.magentaColor = l;
    this.yellowColor = u;
  };
  Object.defineProperty(r.prototype, 'r', {
    get: function () {
      return this.redColor;
    },
    set: function (t) {
      this.redColor = t;
      this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'red', {
    get: function () {
      return this.r / r.maxColourChannelValue;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'b', {
    get: function () {
      return this.blueColor;
    },
    set: function (t) {
      this.blueColor = t;
      this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'blue', {
    get: function () {
      return this.b / r.maxColourChannelValue;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'c', {
    get: function () {
      return this.cyanColor;
    },
    set: function (t) {
      t < 0 ? (this.cyanColor = 0) : t > 1 ? (this.cyanColor = 1) : (this.cyanColor = t);
      this.assignRGB(this.cyanColor, this.magentaColor, this.yellowColor, this.blackColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'k', {
    get: function () {
      return this.blackColor;
    },
    set: function (t) {
      t < 0 ? (this.blackColor = 0) : t > 1 ? (this.blackColor = 1) : (this.blackColor = t);
      this.assignRGB(this.cyanColor, this.magentaColor, this.yellowColor, this.blackColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'm', {
    get: function () {
      return this.magentaColor;
    },
    set: function (t) {
      t < 0 ? (this.magentaColor = 0) : t > 1 ? (this.magentaColor = 1) : (this.magentaColor = t);
      this.assignRGB(this.cyanColor, this.magentaColor, this.yellowColor, this.blackColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'y', {
    get: function () {
      return this.yellowColor;
    },
    set: function (t) {
      t < 0 ? (this.yellowColor = 0) : t > 1 ? (this.yellowColor = 1) : (this.yellowColor = t);
      this.assignRGB(this.cyanColor, this.magentaColor, this.yellowColor, this.blackColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'g', {
    get: function () {
      return this.greenColor;
    },
    set: function (t) {
      this.greenColor = t;
      this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'green', {
    get: function () {
      return this.g / r.maxColourChannelValue;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'gray', {
    get: function () {
      return (this.redColor + this.greenColor + this.blueColor) / (r.maxColourChannelValue * 3);
    },
    set: function (t) {
      t < 0 ? (this.grayColor = 0) : t > 1 ? (this.grayColor = 1) : (this.grayColor = t);
      this.r = this.grayColor * r.maxColourChannelValue;
      this.g = this.grayColor * r.maxColourChannelValue;
      this.b = this.grayColor * r.maxColourChannelValue;
      this.assignCMYK(this.redColor, this.greenColor, this.blueColor);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isEmpty', {
    get: function () {
      return !this.filled;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'a', {
    get: function () {
      return this.alpha;
    },
    set: function (t) {
      t < 0 ? (this.alpha = 0) : (this.alpha = t);
      this.filled = true;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.toString = function (t, e) {
    if (this.isEmpty) return '';
    var i = '';
    switch (t) {
      case Q.Rgb:
        i = this.rgbToString(e);
        break;
      case Q.GrayScale:
        i = this.grayScaleToString(e);
        break;
      case Q.Cmyk:
        i = this.cmykToString(e);
        break;
    }
    return i;
  };
  r.prototype.grayScaleToString = function (t) {
    var e = this.gray;
    var i = '';
    var n = null;
    n = t
      ? r.grayStringsSroke.containsKey(this.gray)
        ? r.grayStringsSroke.getValue(this.gray)
        : null
      : r.grayStringsFill.containsKey(this.gray)
        ? r.grayStringsFill.getValue(this.gray)
        : null;
    n == null
      ? t && ((i = this.gray.toString() + ' G'), r.grayStringsSroke.setValue(this.gray, i))
      : (i = n.toString());
    return i + S.newLine;
  };
  r.prototype.rgbToString = function (t) {
    var e = this.r;
    var i = this.g;
    var n = this.b;
    var s = (this.r << 16) + (this.g << 8) + this.b;
    if (t) {
      s += 16777216;
    }
    var o = '';
    var a = null;
    if (r.rgbStrings.containsKey(s)) {
      a = r.rgbStrings.getValue(s);
    }
    if (a == null) {
      var h = this.r / r.maxColourChannelValue;
      var l = this.g / r.maxColourChannelValue;
      var u = this.b / r.maxColourChannelValue;
      t
        ? (o = h.toString() + ' ' + l.toString() + ' ' + u.toString() + ' RG')
        : (o = h.toString() + ' ' + l.toString() + ' ' + u.toString() + ' rg');
      r.rgbStrings.setValue(s, o);
    } else o = a.toString();
    return o + S.newLine;
  };
  r.prototype.cmykToString = function (t) {
    var e = this.c;
    var i = this.m;
    var n = this.y;
    var s = this.b;
    var o = '';
    o = this.c.toString() + ' ' + this.m.toString() + ' ' + this.y.toString() + ' ' + this.b.toString() + ' K';
    return o + S.newLine;
  };
  r.prototype.toArray = function (t) {
    var e = new Z();
    switch (t) {
      case Q.Rgb:
        {
          e.add(new E(this.red));
          e.add(new E(this.green));
          e.add(new E(this.blue));
        }
        break;
    }
    return e;
  };
  r.rgbStrings = new X();
  r.grayStringsSroke = new X();
  r.grayStringsFill = new X();
  r.maxColourChannelValue = 255;
  return r;
})();
var D = (function () {
  function r(t, e) {
    typeof t > 'u'
      ? ((this.x = 0), (this.y = 0))
      : (t !== null ? (this.x = t) : (this.x = 0), e !== null ? (this.y = e) : (this.y = 0));
  }
  return r;
})();
var C = (function () {
  function r(t, e) {
    typeof e > 'u'
      ? ((this.height = 0), (this.width = 0))
      : (e !== null ? (this.height = e) : (this.height = 0), t !== null ? (this.width = t) : (this.width = 0));
  }
  return r;
})();
var I = (function () {
  function r(t, e, i, n) {
    if (typeof t == typeof t && typeof t > 'u') {
      this.x = 0;
      this.y = 0;
      this.height = 0;
      this.width = 0;
    } else if (t instanceof D && e instanceof C && typeof i > 'u') {
      var s = t;
      this.x = t.x;
      this.y = t.y;
      var o = e;
      this.height = e.height;
      this.width = e.width;
    } else {
      var a = t;
      var h = e;
      var l = i;
      var u = n;
      this.x = t;
      this.y = e;
      this.height = n;
      this.width = i;
    }
  }
  return r;
})();
var Mi = (function () {
  function r(t, e, i, n) {
    this.left = t;
    this.top = e;
    this.right = i;
    this.bottom = n;
  }
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.right - this.left;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.bottom - this.top;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'topLeft', {
    get: function () {
      return new D(this.left, this.top);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return new C(this.width, this.height);
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.toString = function () {
    return this.topLeft + 'x' + this.size;
  };
  return r;
})();
var zt = (function () {
  function r() {}
  r.prototype.clone = function () {
    return this;
  };
  return r;
})();
var to = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var st = (function (r) {
  to(t, r);
  function t(e) {
    var i = r() || this;
    i.pdfColor = e;
    return i;
  }
  Object.defineProperty(t.prototype, 'color', {
    get: function () {
      return this.pdfColor;
    },
    set: function (e) {
      this.pdfColor = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.monitorChanges = function (e, i, n, s, o) {
    if (i == null) throw new Error('ArgumentNullException:streamWriter');
    var a = false;
    return e == null
      ? ((a = true), i.setColorAndSpace(this.pdfColor, o, false), a)
      : ((a = true), i.setColorAndSpace(this.pdfColor, o, false), a);
  };
  t.prototype.resetChanges = function (e) {
    e.setColorAndSpace(new j(0, 0, 0), Q.Rgb, false);
  };
  return t;
})(zt);
var N;
(function (r) {
  r[(r.Regular = 0)] = 'Regular';
  r[(r.Bold = 1)] = 'Bold';
  r[(r.Italic = 2)] = 'Italic';
  r[(r.Underline = 4)] = 'Underline';
  r[(r.Strikeout = 8)] = 'Strikeout';
})(N || (N = {}));
var Y;
(function (r) {
  r[(r.Helvetica = 0)] = 'Helvetica';
  r[(r.Courier = 1)] = 'Courier';
  r[(r.TimesRoman = 2)] = 'TimesRoman';
  r[(r.Symbol = 3)] = 'Symbol';
  r[(r.ZapfDingbats = 4)] = 'ZapfDingbats';
})(Y || (Y = {}));
var rn;
(function (r) {
  r[(r.Standard = 0)] = 'Standard';
  r[(r.TrueType = 1)] = 'TrueType';
  r[(r.TrueTypeEmbedded = 2)] = 'TrueTypeEmbedded';
})(rn || (rn = {}));
var Dt;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.Word = 1)] = 'Word';
  r[(r.WordOnly = 2)] = 'WordOnly';
  r[(r.Character = 3)] = 'Character';
})(Dt || (Dt = {}));
var ie;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.SuperScript = 1)] = 'SuperScript';
  r[(r.SubScript = 2)] = 'SubScript';
})(ie || (ie = {}));
var Vi;
(function (r) {
  r[(r.Unknown = 0)] = 'Unknown';
  r[(r.StandardEncoding = 1)] = 'StandardEncoding';
  r[(r.MacRomanEncoding = 2)] = 'MacRomanEncoding';
  r[(r.MacExpertEncoding = 3)] = 'MacExpertEncoding';
  r[(r.WinAnsiEncoding = 4)] = 'WinAnsiEncoding';
  r[(r.PdfDocEncoding = 5)] = 'PdfDocEncoding';
  r[(r.IdentityH = 6)] = 'IdentityH';
})(Vi || (Vi = {}));
var Fe;
(function (r) {
  r[(r.Apple = 0)] = 'Apple';
  r[(r.Microsoft = 4)] = 'Microsoft';
  r[(r.Trimmed = 6)] = 'Trimmed';
})(Fe || (Fe = {}));
var bt;
(function (r) {
  r[(r.Unknown = 0)] = 'Unknown';
  r[(r.Symbol = 1)] = 'Symbol';
  r[(r.Unicode = 2)] = 'Unicode';
  r[(r.Macintosh = 3)] = 'Macintosh';
})(bt || (bt = {}));
var ae;
(function (r) {
  r[(r.AppleUnicode = 0)] = 'AppleUnicode';
  r[(r.Macintosh = 1)] = 'Macintosh';
  r[(r.Iso = 2)] = 'Iso';
  r[(r.Microsoft = 3)] = 'Microsoft';
})(ae || (ae = {}));
var ri;
(function (r) {
  r[(r.Undefined = 0)] = 'Undefined';
  r[(r.Unicode = 1)] = 'Unicode';
})(ri || (ri = {}));
var ki;
(function (r) {
  r[(r.Roman = 0)] = 'Roman';
  r[(r.Japanese = 1)] = 'Japanese';
  r[(r.Chinese = 2)] = 'Chinese';
})(ki || (ki = {}));
var he;
(function (r) {
  r[(r.FixedPitch = 1)] = 'FixedPitch';
  r[(r.Serif = 2)] = 'Serif';
  r[(r.Symbolic = 4)] = 'Symbolic';
  r[(r.Script = 8)] = 'Script';
  r[(r.Nonsymbolic = 32)] = 'Nonsymbolic';
  r[(r.Italic = 64)] = 'Italic';
  r[(r.ForceBold = 262144)] = 'ForceBold';
})(he || (he = {}));
var le;
(function (r) {
  r[(r.Arg1And2AreWords = 1)] = 'Arg1And2AreWords';
  r[(r.ArgsAreXyValues = 2)] = 'ArgsAreXyValues';
  r[(r.RoundXyToGrid = 4)] = 'RoundXyToGrid';
  r[(r.WeHaveScale = 8)] = 'WeHaveScale';
  r[(r.Reserved = 16)] = 'Reserved';
  r[(r.MoreComponents = 32)] = 'MoreComponents';
  r[(r.WeHaveAnXyScale = 64)] = 'WeHaveAnXyScale';
  r[(r.WeHaveTwoByTwo = 128)] = 'WeHaveTwoByTwo';
  r[(r.WeHaveInstructions = 256)] = 'WeHaveInstructions';
  r[(r.UseMyMetrics = 512)] = 'UseMyMetrics';
})(le || (le = {}));
var Ct = (function () {
  function r(t, e) {
    this.scalingFactor = 100;
    this.wordWrapType = Dt.Word;
    this.internalLineLimit = true;
    this.wordWrapType = Dt.Word;
    if (typeof t < 'u' && typeof t != 'string') {
      this.textAlignment = t;
    }
    if (typeof e < 'u') {
      this.verticalAlignment = e;
    }
  }
  Object.defineProperty(r.prototype, 'alignment', {
    get: function () {
      return this.textAlignment;
    },
    set: function (t) {
      this.textAlignment = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'textDirection', {
    get: function () {
      return this.direction;
    },
    set: function (t) {
      this.direction = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineAlignment', {
    get: function () {
      return typeof this.verticalAlignment > 'u' || this.verticalAlignment == null ? Ot.Top : this.verticalAlignment;
    },
    set: function (t) {
      this.verticalAlignment = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rightToLeft', {
    get: function () {
      return typeof this.isRightToLeft > 'u' || this.isRightToLeft == null ? false : this.isRightToLeft;
    },
    set: function (t) {
      this.isRightToLeft = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'characterSpacing', {
    get: function () {
      return typeof this.internalCharacterSpacing > 'u' || this.internalCharacterSpacing == null
        ? 0
        : this.internalCharacterSpacing;
    },
    set: function (t) {
      this.internalCharacterSpacing = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'wordSpacing', {
    get: function () {
      return typeof this.internalWordSpacing > 'u' || this.internalWordSpacing == null ? 0 : this.internalWordSpacing;
    },
    set: function (t) {
      this.internalWordSpacing = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineSpacing', {
    get: function () {
      return typeof this.leading > 'u' || this.leading == null ? 0 : this.leading;
    },
    set: function (t) {
      this.leading = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clipPath', {
    get: function () {
      return typeof this.clip > 'u' || this.clip == null ? false : this.clip;
    },
    set: function (t) {
      this.clip = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'subSuperScript', {
    get: function () {
      return typeof this.pdfSubSuperScript > 'u' || this.pdfSubSuperScript == null ? ie.None : this.pdfSubSuperScript;
    },
    set: function (t) {
      this.pdfSubSuperScript = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'paragraphIndent', {
    get: function () {
      return typeof this.internalParagraphIndent > 'u' || this.internalParagraphIndent == null
        ? 0
        : this.internalParagraphIndent;
    },
    set: function (t) {
      this.internalParagraphIndent = t;
      this.firstLineIndent = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineLimit', {
    get: function () {
      return this.internalLineLimit;
    },
    set: function (t) {
      this.internalLineLimit = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'measureTrailingSpaces', {
    get: function () {
      return typeof this.trailingSpaces > 'u' || this.trailingSpaces == null ? false : this.trailingSpaces;
    },
    set: function (t) {
      this.trailingSpaces = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'noClip', {
    get: function () {
      return typeof this.isNoClip > 'u' || this.isNoClip == null ? false : this.isNoClip;
    },
    set: function (t) {
      this.isNoClip = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'wordWrap', {
    get: function () {
      return this.wordWrapType;
    },
    set: function (t) {
      this.wordWrapType = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'horizontalScalingFactor', {
    get: function () {
      return this.scalingFactor;
    },
    set: function (t) {
      if (t <= 0)
        throw new Error('ArgumentOutOfRangeException:The scaling factor cant be less of equal to zero, ScalingFactor');
      this.scalingFactor = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'firstLineIndent', {
    get: function () {
      return typeof this.initialLineIndent > 'u' || this.initialLineIndent == null ? 0 : this.initialLineIndent;
    },
    set: function (t) {
      this.initialLineIndent = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.clone = function () {
    var t = this;
    return t;
  };
  return r;
})();
var mt = (function () {
  function r(t) {
    this.currentPosition = 0;
    if (t == null) throw new Error('ArgumentNullException:text');
    this.text = t;
  }
  Object.defineProperty(r.prototype, 'length', {
    get: function () {
      return this.text.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'end', {
    get: function () {
      return this.currentPosition === this.text.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.currentPosition;
    },
    set: function (t) {
      this.currentPosition = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.getCharsCount = function (t, e) {
    if (typeof e == 'string') {
      if (t == null) throw new Error('ArgumentNullException:wholeText');
      for (var i = 0, n = 0; (n = t.indexOf(e, n)), n !== -1; ) {
        i++;
        n++;
      }
      return i;
    } else {
      if (t == null) throw new Error('ArgumentNullException:text');
      if (e == null) throw new Error('ArgumentNullException:symbols');
      for (var s = 0, o = 0, a = t.length; o < a; o++) {
        var h = t[o];
        if (this.contains(e, t[o])) {
          s++;
        }
      }
      return s;
    }
  };
  r.prototype.readLine = function () {
    for (var t = this.currentPosition; t < this.length; ) {
      var e = this.text[t];
      switch (this.text[t]) {
        case '\r':
        case `
`: {
          var i = this.text.substr(this.currentPosition, t - this.currentPosition);
          this.currentPosition = t + 1;
          if (
            this.text[t] === '\r' &&
            this.currentPosition < this.length &&
            this.text[this.currentPosition] ===
              `
`
          ) {
            this.currentPosition++;
          }
          return i;
        }
      }
      t++;
    }
    if (t > this.currentPosition) {
      var n = this.text.substr(this.currentPosition, t - this.currentPosition);
      this.currentPosition = t;
      return n;
    }
    return null;
  };
  r.prototype.peekLine = function () {
    var t = this.currentPosition;
    var e = this.readLine();
    this.currentPosition = this.currentPosition;
    return e;
  };
  r.prototype.readWord = function () {
    for (var t = this.currentPosition; t < this.length; ) {
      var e = this.text[t];
      switch (this.text[t]) {
        case '\r':
        case `
`:
          var i = this.text.substr(this.currentPosition, t - this.currentPosition);
          {
            this.currentPosition = t + 1;
            if (
              this.text[t] === '\r' &&
              this.currentPosition < this.length &&
              this.text[this.currentPosition] ===
                `
`
            ) {
              this.currentPosition++;
            }
            return i;
          }
        case ' ':
        case '\t': {
          if (t === this.currentPosition) {
            t++;
          }
          var n = this.text.substr(this.currentPosition, t - this.currentPosition);
          this.currentPosition = t;
          return n;
        }
      }
      t++;
    }
    if (t > this.currentPosition) {
      var s = this.text.substr(this.currentPosition, t - this.currentPosition);
      this.currentPosition = t;
      return s;
    }
    return null;
  };
  r.prototype.peekWord = function () {
    var t = this.currentPosition;
    var e = this.readWord();
    this.currentPosition = this.currentPosition;
    return e;
  };
  r.prototype.read = function (t) {
    if (typeof t > 'u') {
      var e = '0';
      if (!this.end) {
        e = this.text[this.currentPosition];
        this.currentPosition++;
      }
      return e;
    } else {
      for (var i = 0, n = ''; !this.end && i < t; ) {
        var e = this.read();
        n = n + e;
        i++;
      }
      return n;
    }
  };
  r.prototype.peek = function () {
    var t = '0';
    if (!this.end) {
      t = this.text[this.currentPosition];
    }
    return t;
  };
  r.prototype.close = function () {
    this.text = null;
  };
  r.prototype.readToEnd = function () {
    var t;
    this.currentPosition === 0
      ? (t = this.text)
      : (t = this.text.substr(this.currentPosition, this.length - this.currentPosition));
    this.currentPosition = this.length;
    return t;
  };
  r.contains = function (t, e) {
    for (var i = false, n = 0; n < t.length; n++)
      if (t[n] === e) {
        i = true;
        break;
      }
    return i;
  };
  r.whiteSpace = ' ';
  r.tab = '\t';
  r.spaces = [r.whiteSpace, r.tab];
  r.whiteSpacePattern = '^[ \t]+$';
  return r;
})();
var Kt = (function () {
  function r() {
    this.isOverloadWithPosition = false;
  }
  r.prototype.layout = function (t, e, i, n, s, o, a) {
    if (n instanceof I) {
      this.initialize(t, e, i, n, s);
      this.isOverloadWithPosition = o;
      this.clientSize = a;
      var h = this.doLayout();
      this.clear();
      return h;
    } else {
      this.initialize(t, e, i, n);
      this.isOverloadWithPosition = s;
      this.clientSize = o;
      var h = this.doLayout();
      this.clear();
      return h;
    }
  };
  r.prototype.initialize = function (t, e, i, n, s) {
    if (typeof s == 'number') {
      if (t == null) throw new Error('ArgumentNullException:text');
      if (e == null) throw new Error('ArgumentNullException:font');
      this.text = t;
      this.font = e;
      this.format = i;
      this.size = new C(n.width, n.height);
      this.rectangle = n;
      this.pageHeight = s;
      this.reader = new mt(t);
    } else this.initialize(t, e, i, new I(new D(0, 0), n), 0);
  };
  r.prototype.clear = function () {
    this.font = null;
    this.format = null;
    this.reader.close();
    this.reader = null;
    this.text = null;
  };
  r.prototype.doLayout = function () {
    for (
      var t = new Ri(), e = new Ri(), i = [], n = this.reader.peekLine(), s = this.getLineIndent(true);
      n != null;

    ) {
      e = this.layoutLine(n, s);
      if (e !== null || typeof e < 'u') {
        var o = 0;
        var a = this.copyToResult(t, e, i, o);
        var h = a.success;
        o = a.numInserted;
        if (!a.success) {
          this.reader.read(o);
          break;
        }
      }
      this.reader.readLine();
      n = this.reader.peekLine();
      s = this.getLineIndent(false);
    }
    this.finalizeResult(t, i);
    return t;
  };
  r.prototype.getLineIndent = function (t) {
    var e = 0;
    if (this.format != null) {
      e = t ? this.format.firstLineIndent : this.format.paragraphIndent;
      e = this.size.width > 0 ? Math.min(this.size.width, e) : e;
    }
    return e;
  };
  r.prototype.getLineHeight = function () {
    var t = this.font.height;
    if (this.format != null && this.format.lineSpacing !== 0) {
      t = this.format.lineSpacing + this.font.height;
    }
    return t;
  };
  r.prototype.getLineWidth = function (t) {
    var e = this.font.getLineWidth(t, this.format);
    return e;
  };
  r.prototype.layoutLine = function (t, e) {
    var i = new Ri();
    i.layoutLineHeight = this.getLineHeight();
    var n = [];
    var s = this.size.width;
    var o = this.getLineWidth(t) + e;
    var a = pt.FirstParagraphLine;
    var h = true;
    if (s <= 0 || Math.round(o) <= Math.round(s)) this.addToLineResult(i, n, t, o, pt.NewLineBreak | a);
    else {
      var l = '';
      var u = '';
      o = e;
      var d = e;
      var c = new mt(t);
      var f = c.peekWord();
      for (
        f.length !== c.length && f === ' ' && ((u = u + f), (l = l + f), (c.position += 1), (f = c.peekWord()));
        f != null;

      ) {
        u = u + f;
        var g = this.getLineWidth(u.toString()) + d;
        if (u.toString() === ' ') {
          u = '';
          g = 0;
        }
        if (g > s) {
          if (this.getWrapType() === Dt.None) break;
          if (u.length === f.length)
            if (this.getWrapType() === Dt.WordOnly) {
              i.textRemainder = t.substring(c.position);
              break;
            } else if (u.length === 1) {
              l = l + f;
              break;
            } else {
              h = false;
              u = '';
              f = c.peek().toString();
              continue;
            }
          else {
            this.getLineWidth(f.toString()) > s
              ? (this.format.wordWrap = Dt.Character)
              : typeof this.format < 'u' && this.format !== null && (this.format.wordWrap = Dt.Word);
            if (this.getWrapType() !== Dt.Character || !h) {
              var y = l.toString();
              if (y !== ' ') {
                this.addToLineResult(i, n, y, o, pt.LayoutBreak | a);
              }
              if (this.isOverloadWithPosition) {
                s = this.clientSize.width;
              }
              u = '';
              l = '';
              o = 0;
              d = 0;
              g = 0;
              a = pt.None;
              f = h ? f : c.peekWord();
              h = true;
            } else {
              h = false;
              u = '';
              u = u + l.toString();
              f = c.peek().toString();
            }
            continue;
          }
        }
        l = l + f;
        o = g;
        h ? (c.readWord(), (f = c.peekWord())) : (c.read(), (f = c.peek().toString()));
      }
      if (l.length > 0) {
        var y = l.toString();
        this.addToLineResult(i, n, y, o, pt.NewLineBreak | pt.LastParagraphLine);
      }
      c.close();
    }
    i.layoutLines = [];
    for (var m = 0; m < n.length; m++) i.layoutLines.push(n[m]);
    n = [];
    return i;
  };
  r.prototype.addToLineResult = function (t, e, i, n, s) {
    var o = new eo();
    o.text = i;
    o.width = n;
    o.lineType = s;
    e.push(o);
    var a = t.actualSize;
    a.height += this.getLineHeight();
    a.width = Math.max(a.width, n);
    t.size = a;
  };
  r.prototype.copyToResult = function (t, e, i, n) {
    var s = true;
    var o = this.format != null && !this.format.lineLimit;
    var a = t.actualSize.height;
    var h = this.size.height;
    if (this.pageHeight > 0 && h + this.rectangle.y > this.pageHeight) {
      h = this.rectangle.y - this.pageHeight;
      h = Math.max(h, -h);
    }
    n = 0;
    if (e.lines != null)
      for (var l = 0, u = e.lines.length; l < u; l++) {
        var d = a + e.lineHeight;
        if (d <= h || h <= 0 || o) {
          var c = e.lines[l];
          n += c.text.length;
          c = this.trimLine(c, i.length === 0);
          i.push(c);
          var f = t.actualSize;
          f.width = Math.max(f.width, c.width);
          t.size = f;
          a = d;
        } else {
          s = false;
          break;
        }
      }
    if (a != t.size.height) {
      var g = t.actualSize;
      g.height = a;
      t.size = g;
    }
    return {
      success: s,
      numInserted: n,
    };
  };
  r.prototype.finalizeResult = function (t, e) {
    t.layoutLines = [];
    for (var i = 0; i < e.length; i++) t.layoutLines.push(e[i]);
    t.layoutLineHeight = this.getLineHeight();
    if (!this.reader.end) {
      t.textRemainder = this.reader.readToEnd();
    }
    e = [];
  };
  r.prototype.trimLine = function (t, e) {
    var i = t.text;
    var n = t.width;
    t.lineType & pt.FirstParagraphLine;
    var s = this.format == null || !this.format.rightToLeft;
    mt.spaces;
    i = i.trim();
    if (i.length !== t.text.length) {
      n = this.getLineWidth(i);
      if ((t.lineType & pt.FirstParagraphLine) > 0) {
        n += this.getLineIndent(e);
      }
    }
    t.text = i;
    t.width = n;
    return t;
  };
  r.prototype.getWrapType = function () {
    var t = this.format != null ? this.format.wordWrap : Dt.Word;
    return t;
  };
  return r;
})();
var Ri = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'remainder', {
    get: function () {
      return this.textRemainder;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'actualSize', {
    get: function () {
      if (typeof this.size > 'u') {
        this.size = new C(0, 0);
      }
      return this.size;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lines', {
    get: function () {
      return this.layoutLines;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineHeight', {
    get: function () {
      return this.layoutLineHeight;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'empty', {
    get: function () {
      return this.layoutLines == null || this.layoutLines.length === 0;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineCount', {
    get: function () {
      var t = this.empty ? 0 : this.layoutLines.length;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var eo = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'lineType', {
    get: function () {
      return this.type;
    },
    set: function (t) {
      this.type = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'text', {
    get: function () {
      return this.content;
    },
    set: function (t) {
      this.content = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.lineWidth;
    },
    set: function (t) {
      this.lineWidth = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var pt;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.NewLineBreak = 1)] = 'NewLineBreak';
  r[(r.LayoutBreak = 2)] = 'LayoutBreak';
  r[(r.FirstParagraphLine = 4)] = 'FirstParagraphLine';
  r[(r.LastParagraphLine = 8)] = 'LastParagraphLine';
})(pt || (pt = {}));
var It = (function () {
  function r(t, e) {
    this.fontStyle = N.Regular;
    typeof t == 'number' && typeof e > 'u' ? (this.fontSize = t) : ((this.fontSize = t), this.setStyle(e));
  }
  Object.defineProperty(r.prototype, 'name', {
    get: function () {
      return this.metrics.name;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.fontSize;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.metrics.getHeight(null);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'style', {
    get: function () {
      return this.fontStyle;
    },
    set: function (t) {
      this.fontStyle = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bold', {
    get: function () {
      return (this.style & N.Bold) > 0;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'italic', {
    get: function () {
      return (this.style & N.Italic) > 0;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'strikeout', {
    get: function () {
      return (this.style & N.Strikeout) > 0;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'underline', {
    get: function () {
      return (this.style & N.Underline) > 0;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'metrics', {
    get: function () {
      return this.fontMetrics;
    },
    set: function (t) {
      this.fontMetrics = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.pdfFontInternals;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.measureString = function (t, e, i, n, s) {
    if (typeof t == 'string' && typeof e > 'u') return this.measureString(t, null);
    if (typeof t == 'string' && (e instanceof Ct || e == null) && typeof i > 'u' && typeof n > 'u') {
      var o = e;
      var a = 0;
      var h = 0;
      return this.measureString(t, e, 0, 0);
    } else if (typeof t == 'string' && (e instanceof Ct || e == null) && typeof i == 'number' && typeof n == 'number') {
      var o = e;
      return this.measureString(t, 0, e, i, n);
    } else if (
      typeof t == 'string' &&
      typeof e == 'number' &&
      (i instanceof Ct || i == null) &&
      typeof n == 'number' &&
      typeof s == 'number'
    ) {
      var l = new C(e, 0);
      var u = i;
      return this.measureString(t, l, i, n, s);
    } else {
      if (t == null) throw Error('ArgumentNullException("text")');
      var o = e;
      var u = i;
      var d = new Kt();
      var c = d.layout(t, this, i, e, false, new C(0, 0));
      n = t.length;
      s = c.empty ? 0 : c.lines.length;
      return c.actualSize;
    }
  };
  r.prototype.equalsTo = function (t) {
    var e = this.equalsToFont(t);
    return e;
  };
  r.prototype.getInternals = function () {
    return this.pdfFontInternals;
  };
  r.prototype.setInternals = function (t) {
    if (t == null) throw new Error('ArgumentNullException:internals');
    this.pdfFontInternals = t;
  };
  r.prototype.setStyle = function (t) {
    this.fontStyle = t;
  };
  r.prototype.applyFormatSettings = function (t, e, i) {
    var n = i;
    if (
      e != null &&
      i > 0 &&
      (e.characterSpacing !== 0 && (n += (t.length - 1) * e.characterSpacing), e.wordSpacing !== 0)
    ) {
      var s = mt.spaces;
      var o = mt.getCharsCount(t, mt.spaces);
      n += o * e.wordSpacing;
    }
    return n;
  };
  r.charSizeMultiplier = 0.001;
  r.syncObject = new Object();
  return r;
})();
var nn = (function () {
  function r(t) {
    this.streamWriter = t;
  }
  Object.defineProperty(r.prototype, 'document', {
    get: function () {
      return this.pdfDocument;
    },
    set: function (t) {
      this.pdfDocument = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.streamWriter.buffer.size;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'length', {
    get: function () {
      return this.streamWriter.buffer.size;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'stream', {
    get: function () {
      return this.streamWriter;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.write = function (t) {
    var e = t;
    this.streamWriter.write(t);
  };
  return r;
})();
var io = (function () {
  function r() {
    this.buffer = new ro();
  }
  r.prototype.write = function (t) {
    this.buffer.write(t);
  };
  r.prototype.destroy = function () {
    if (this.buffer) {
      this.buffer.destroy();
      this.buffer = void 0;
    }
  };
  return r;
})();
var ro = (function () {
  function r() {
    this.buffer = [];
  }
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.buffer.length;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.write = function (t) {
    for (var e = 0; e < t.length; e++) this.buffer.push(t.charCodeAt(e) & 255);
  };
  r.prototype.destroy = function () {
    if (this.buffer) {
      this.buffer = [];
      this.buffer = void 0;
    }
  };
  return r;
})();
var ze;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.Registered = 1)] = 'Registered';
})(ze || (ze = {}));
var no = (function () {
  function r() {
    this.objectCollections = [];
    this.mainObjectCollection = new X();
    this.primitiveObjectCollection = new X();
  }
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.objectCollections.length;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.items = function (t) {
    return this.objectCollections[t];
  };
  Object.defineProperty(r.prototype, 'outIsNew', {
    get: function () {
      return this.isNew;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    var e = new so(t);
    this.objectCollections.push(e);
    if (!this.primitiveObjectCollection.containsKey(t)) {
      this.primitiveObjectCollection.setValue(t, this.objectCollections.length - 1);
    }
    t.position = this.index = this.objectCollections.length - 1;
    t.status = ze.Registered;
  };
  r.prototype.lookFor = function (t) {
    var e = -1;
    if (t.position !== -1) return t.position;
    if (this.primitiveObjectCollection.containsKey(t) && this.count === this.primitiveObjectCollection.size())
      e = this.primitiveObjectCollection.getValue(t);
    else
      for (var i = this.count - 1; i >= 0; i--) {
        var n = this.objectCollections[i];
        if (this.objectCollections[i].object === t) {
          e = i;
          break;
        }
      }
    return e;
  };
  r.prototype.getReference = function (t, e) {
    this.index = this.lookFor(t);
    var i;
    this.isNew = false;
    var n = this.objectCollections[this.index];
    i = this.objectCollections[this.index].reference;
    var s = {
      reference: i,
      wasNew: e,
    };
    return s;
  };
  r.prototype.trySetReference = function (t, e, i) {
    var n = true;
    this.index = this.lookFor(t);
    var s = this.objectCollections[this.index];
    this.objectCollections[this.index].setReference(e);
    return n;
  };
  r.prototype.destroy = function () {
    for (var t = 0, e = this.objectCollections; t < e.length; t++) {
      var i = e[t];
      if (e[t] !== void 0) {
        e[t].pdfObject.position = -1;
        e[t].pdfObject.isSaving = void 0;
        e[t].pdfObject.objectCollectionIndex = void 0;
        e[t].pdfObject.position = void 0;
      }
    }
    this.objectCollections = [];
    this.mainObjectCollection = new X();
    this.primitiveObjectCollection = new X();
  };
  return r;
})();
var so = (function () {
  function r(t, e) {
    this.pdfObject = t;
    this.pdfReference = e;
  }
  Object.defineProperty(r.prototype, 'object', {
    get: function () {
      return this.pdfObject;
    },
    set: function (t) {
      this.pdfObject = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'reference', {
    get: function () {
      return this.pdfReference;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setReference = function (t) {
    this.pdfReference = t;
  };
  return r;
})();
var oo = (function () {
  function r(t) {
    this.isStreamCopied = false;
    if (t instanceof Jt) {
      this.document = t;
    }
  }
  Object.defineProperty(r.prototype, 'pdfObjects', {
    get: function () {
      return this.objects;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'crossTable', {
    get: function () {
      return this.pdfCrossTable;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'currentSavingObj', {
    get: function () {
      return this.currentSavingObject;
    },
    set: function (t) {
      this.currentSavingObject = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'catalog', {
    get: function () {
      return this.pdfCatalog;
    },
    set: function (t) {
      this.pdfCatalog = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'viewerPreferences', {
    get: function () {
      return this.pdfCatalog.viewerPreferences;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setMainObjectCollection = function (t) {
    this.objects = t;
  };
  r.prototype.setCrossTable = function (t) {
    this.pdfCrossTable = t;
  };
  r.prototype.setCatalog = function (t) {
    this.pdfCatalog = t;
  };
  r.prototype.save = function (t) {
    var e = this;
    var i = new ei(true);
    var n = new Qr(i);
    if (typeof t > 'u') {
      var s = new ei(true);
      var o = new Qr(s);
      return new Promise(function (a, h) {
        var l = {};
        l.blobData = new Blob([e.document.docSave(o, true)], { type: 'application/pdf' });
        a(l);
      });
    } else this.document.docSave(n, t, true);
  };
  r.prototype.clone = function () {
    return this.document;
  };
  r.prototype._save = function () {
    return this.document._docSave();
  };
  return r;
})();
var je;
(function (r) {
  r[(r.Free = 0)] = 'Free';
  r[(r.Normal = 1)] = 'Normal';
  r[(r.Packed = 2)] = 'Packed';
})(je || (je = {}));
var Ut = (function () {
  function r(t) {
    this.currentPosition = -1;
    this.value = t;
  }
  Object.defineProperty(r.prototype, 'status', {
    get: function () {
      return this.objectStatus;
    },
    set: function (t) {
      this.objectStatus = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isSaving', {
    get: function () {
      return this.saving;
    },
    set: function (t) {
      this.saving = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollectionIndex', {
    get: function () {
      return this.index;
    },
    set: function (t) {
      this.index = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.currentPosition;
    },
    set: function (t) {
      this.currentPosition = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clonedObject', {
    get: function () {
      var t = null;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.save = function (t) {
    t.write(this.boolToStr(this.value));
  };
  r.prototype.clone = function (t) {
    var e = new r(this.value);
    return e;
  };
  r.prototype.boolToStr = function (t) {
    return t ? 'true' : 'false';
  };
  return r;
})();
var ao = (function () {
  function r(t) {
    this._dictionaryProperties = new rt();
    this._centerWindow = false;
    this._fitWindow = false;
    this._displayTitle = false;
    this._splitWindow = false;
    this._hideMenuBar = false;
    this._hideToolBar = false;
    this._hideWindowUI = false;
    this._pageMode = Gt.UseNone;
    this._pageLayout = Ht.SinglePage;
    this._dictionary = new q();
    this._duplex = ue.None;
    this._catalog = t;
  }
  Object.defineProperty(r.prototype, 'centerWindow', {
    get: function () {
      return this._centerWindow;
    },
    set: function (t) {
      this._centerWindow = t;
      this._dictionary.items.setValue(this._dictionaryProperties.centerWindow, new Ut(this._centerWindow));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'displayTitle', {
    get: function () {
      return this._displayTitle;
    },
    set: function (t) {
      this._displayTitle = t;
      this._dictionary.items.setValue(this._dictionaryProperties.displayTitle, new Ut(this._displayTitle));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'fitWindow', {
    get: function () {
      return this._fitWindow;
    },
    set: function (t) {
      this._fitWindow = t;
      this._dictionary.items.setValue(this._dictionaryProperties.fitWindow, new Ut(this._fitWindow));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'hideMenuBar', {
    get: function () {
      return this._hideMenuBar;
    },
    set: function (t) {
      this._hideMenuBar = t;
      this._dictionary.items.setValue(this._dictionaryProperties.hideMenuBar, new Ut(this._hideMenuBar));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'hideToolBar', {
    get: function () {
      return this._hideToolBar;
    },
    set: function (t) {
      this._hideToolBar = t;
      this._dictionary.items.setValue(this._dictionaryProperties.hideToolBar, new Ut(this._hideToolBar));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'hideWindowUI', {
    get: function () {
      return this._hideWindowUI;
    },
    set: function (t) {
      this._hideWindowUI = t;
      this._dictionary.items.setValue(this._dictionaryProperties.hideWindowUI, new Ut(this._hideWindowUI));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pageMode', {
    get: function () {
      return this._pageMode;
    },
    set: function (t) {
      this._pageMode = t;
      this._catalog.items.setValue(this._dictionaryProperties.pageMode, new k(this._mapPageMode(this._pageMode)));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'duplex', {
    get: function () {
      return this._duplex;
    },
    set: function (t) {
      this._duplex = t;
      this._catalog.items.setValue(this._dictionaryProperties.duplex, new k(this._mapDuplexMode(this._duplex)));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pageLayout', {
    get: function () {
      return this._pageLayout;
    },
    set: function (t) {
      this._pageLayout = t;
      this._catalog.items.setValue(this._dictionaryProperties.pageLayout, new k(this._mapPageLayout(this._pageLayout)));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pageScaling', {
    get: function () {
      return this._pageScaling;
    },
    set: function (t) {
      this._pageScaling = t;
      this._pageScaling === ni.AppDefault && this._dictionary.items.containsKey(this._dictionaryProperties.printScaling)
        ? this._dictionary.items.remove(this._dictionaryProperties.printScaling)
        : this._pageScaling === ni.None &&
          this._dictionary.items.setValue(this._dictionaryProperties.printScaling, new k('None'));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this._dictionary;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype._mapDuplexMode = function (t) {
    switch (t) {
      case ue.Simplex:
        return 'Simplex';
      case ue.DuplexFlipShortEdge:
        return 'DuplexFlipShortEdge';
      case ue.DuplexFlipLongEdge:
        return 'DuplexFlipLongEdge';
      case ue.None:
        return 'None';
    }
  };
  r.prototype._mapPageMode = function (t) {
    switch (t) {
      case Gt.UseNone:
        return 'UseNone';
      case Gt.UseOutlines:
        return 'UseOutlines';
      case Gt.UseThumbs:
        return 'UseThumbs';
      case Gt.FullScreen:
        return 'FullScreen';
      case Gt.UseOC:
        return 'UseOC';
      case Gt.UseAttachments:
        return 'UseAttachments';
    }
  };
  r.prototype._mapPageLayout = function (t) {
    switch (t) {
      case Ht.SinglePage:
        return 'SinglePage';
      case Ht.OneColumn:
        return 'OneColumn';
      case Ht.TwoColumnLeft:
        return 'TwoColumnLeft';
      case Ht.TwoColumnRight:
        return 'TwoColumnRight';
      case Ht.TwoPageLeft:
        return 'TwoPageLeft';
      case Ht.TwoPageRight:
        return 'TwoPageRight';
    }
  };
  return r;
})();
var Gt;
(function (r) {
  r[(r.UseNone = 0)] = 'UseNone';
  r[(r.UseOutlines = 1)] = 'UseOutlines';
  r[(r.UseThumbs = 2)] = 'UseThumbs';
  r[(r.FullScreen = 3)] = 'FullScreen';
  r[(r.UseOC = 4)] = 'UseOC';
  r[(r.UseAttachments = 5)] = 'UseAttachments';
})(Gt || (Gt = {}));
var Ht;
(function (r) {
  r[(r.SinglePage = 0)] = 'SinglePage';
  r[(r.OneColumn = 1)] = 'OneColumn';
  r[(r.TwoColumnLeft = 2)] = 'TwoColumnLeft';
  r[(r.TwoColumnRight = 3)] = 'TwoColumnRight';
  r[(r.TwoPageLeft = 4)] = 'TwoPageLeft';
  r[(r.TwoPageRight = 5)] = 'TwoPageRight';
})(Ht || (Ht = {}));
var ue;
(function (r) {
  r[(r.Simplex = 0)] = 'Simplex';
  r[(r.DuplexFlipShortEdge = 1)] = 'DuplexFlipShortEdge';
  r[(r.DuplexFlipLongEdge = 2)] = 'DuplexFlipLongEdge';
  r[(r.None = 3)] = 'None';
})(ue || (ue = {}));
var ni;
(function (r) {
  r[(r.AppDefault = 0)] = 'AppDefault';
  r[(r.None = 1)] = 'None';
})(ni || (ni = {}));
var ho = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var yn = (function (r) {
  ho(t, r);
  function t() {
    var e = r() || this;
    e.sections = null;
    e.tempDictionaryProperties = new rt();
    e.items.setValue(new rt().type, new k('Catalog'));
    return e;
  }
  Object.defineProperty(t.prototype, 'pages', {
    get: function () {
      return this.sections;
    },
    set: function (e) {
      e.element;
      this.sections = e;
      this.items.setValue(this.tempDictionaryProperties.pages, new _(e));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'viewerPreferences', {
    get: function () {
      if (this._viewerPreferences === null || typeof this._viewerPreferences > 'u') {
        this._viewerPreferences = new ao(this);
        this.items.setValue(this.tempDictionaryProperties.viewerPreferences, new _(this._viewerPreferences.element));
      }
      return this._viewerPreferences;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(q);
var vn = (function () {
  function r() {
    this.objects = new X();
    this.maxGenNumIndex = 0;
    this.objectCount = 0;
    this.dictionaryProperties = new rt();
  }
  Object.defineProperty(r.prototype, 'isMerging', {
    get: function () {
      return this.merging;
    },
    set: function (t) {
      this.merging = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'trailer', {
    get: function () {
      if (this.internalTrailer == null) {
        this.internalTrailer = new Pt();
      }
      return this.internalTrailer;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'document', {
    get: function () {
      return this.pdfDocument;
    },
    set: function (t) {
      this.pdfDocument = t;
      this.items = this.pdfDocument.pdfObjects;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pdfObjects', {
    get: function () {
      return this.items;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'objectCollection', {
    get: function () {
      return this.pdfDocument.pdfObjects;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.objectCount;
    },
    set: function (t) {
      this.objectCount = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'nextObjNumber', {
    get: function () {
      this.count = this.count + 1;
      return this.count;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.save = function (t, e) {
    this._saveProcess(t);
    if (typeof e > 'u') return t.stream.buffer;
    t.stream.save(e);
  };
  r.prototype._saveProcess = function (t) {
    this.saveHead(t);
    this.mappedReferences = null;
    this.objects.clear();
    this.markTrailerReferences();
    this.saveObjects(t);
    var e = this.count;
    var i = t.position;
    this.registerObject(0, new Ei(0, -1), true);
    var n = 0;
    t.write(S.xref);
    t.write(S.newLine);
    this.saveSections(t);
    this.saveTrailer(t, this.count, 0);
    this.saveTheEndess(t, t.position);
    this.count = this.count;
    for (var s = 0; s < this.objectCollection.count; ++s) {
      var o = this.objectCollection.items(s);
      o.object.isSaving = false;
    }
  };
  r.prototype._save = function (t) {
    this._saveProcess(t);
    return new Uint8Array(t.stream.buffer.buffer);
  };
  r.prototype.saveTheEndess = function (t, e) {
    t.write(S.newLine + S.startxref + S.newLine);
    t.write(e.toString() + S.newLine);
    t.write(S.eof + S.newLine);
  };
  r.prototype.saveTrailer = function (t, e, i) {
    t.write(S.trailer + S.newLine);
    var n = this.trailer;
    n.items.setValue(this.dictionaryProperties.size, new E(this.objectCount + 1));
    n = new q(n);
    n.setEncrypt(false);
    n.save(t);
  };
  r.prototype.saveSections = function (t) {
    var e = 0;
    var i = 0;
    do {
      i = this.prepareSubsection(e);
      this.saveSubsection(t, e, i);
      e += i;
    } while (i !== 0);
  };
  r.prototype.saveSubsection = function (t, e, i) {
    if (!(i <= 0 || e >= this.count)) {
      t.write(e + ' ' + (i + 1) + S.newLine);
      for (var n = e; n <= e + i; ++n) {
        var s = this.objects.getValue(n);
        var o = '';
        s.type === je.Free
          ? (o = this.getItem(s.offset, 65535, true))
          : (o = this.getItem(s.offset, s.generation, false));
        t.write(o);
      }
    }
  };
  r.prototype.getItem = function (t, e, i) {
    var n = '';
    var s = 10 - t.toString().length;
    if (e <= 0) {
      e = 0;
    }
    for (var o = 5 - e.toString().length <= 0 ? 0 : 5 - e.toString().length, a = 0; a < s; a++) n = n + '0';
    n = n + t.toString() + ' ';
    for (var a = 0; a < o; a++) n = n + '0';
    n = n + e.toString() + ' ';
    n = n + (i ? S.f : S.n) + S.newLine;
    return n;
  };
  r.prototype.prepareSubsection = function (t) {
    for (var e = 0, i, n = this.count, s = 0; s < this.document.pdfObjects.count; s++) {
      var o = this.document.pdfObjects.items(s).reference;
      var a = this.document.pdfObjects.items(s).reference.toString();
      a.split(' ');
    }
    if (t >= n) return e;
    for (i = t; i < n; ++i) break;
    for (t = i; i < n; ++i) ++e;
    return e;
  };
  r.prototype.markTrailerReferences = function () {
    this.trailer.items.keys();
    this.trailer.items.values();
  };
  r.prototype.saveHead = function (t) {
    var e = this.generateFileVersion(t.document);
    t.write('%PDF-' + e);
    t.write(S.newLine);
  };
  r.prototype.generateFileVersion = function (t) {
    var e = 4;
    var i = '1.4';
    return '1.4';
  };
  r.prototype.getReference = function (t, e) {
    if (typeof e > 'u') {
      var i = false;
      return this.getReference(t, i);
    } else return this.getSubReference(t, e);
  };
  r.prototype.getSubReference = function (t, e) {
    var i = false;
    var n;
    var s = null;
    if (this.items.count > 0 && t.objectCollectionIndex > 0 && this.items.count > t.objectCollectionIndex - 1) {
      var o = this.document.pdfObjects.getReference(t, n);
      s = o.reference;
      n = o.wasNew;
    }
    s == null ? (t.status === ze.Registered ? (n = false) : (n = true)) : (n = false);
    if (s == null) {
      var a = this.nextObjNumber;
      s = new Ei(this.nextObjNumber, 0);
      var h = void 0;
      if (n) {
        this.document.pdfObjects.add(t);
        this.document.pdfObjects.trySetReference(t, s, h);
        var l = this.document.pdfObjects.count - 1;
        var u = this.document.pdfObjects.objectCollections[l].reference.objNumber;
        var d = this.document.pdfObjects.objectCollections[this.document.pdfObjects.count - 1];
        this.document.pdfObjects.mainObjectCollection.setValue(
          this.document.pdfObjects.objectCollections[l].reference.objNumber,
          this.document.pdfObjects.objectCollections[this.document.pdfObjects.count - 1],
        );
        t.position = -1;
      } else this.document.pdfObjects.trySetReference(t, s, h);
      t.objectCollectionIndex = s.objNumber;
      t.status = ze.None;
      i = true;
    }
    if (!i) {
      this.bForceNew;
    }
    return s;
  };
  r.prototype.saveObjects = function (t) {
    for (var e = this.objectCollection, i = 0; i < e.count; ++i) {
      var n = e.items(i);
      var s = n.object;
      s.isSaving = true;
      this.saveIndirectObject(s, t);
    }
  };
  r.prototype.saveIndirectObject = function (t, e) {
    var i = this.getReference(t);
    if (t instanceof yn) {
      this.trailer.items.setValue(this.dictionaryProperties.root, i);
    }
    this.pdfDocument.currentSavingObj = i;
    t.getArchive();
    this.registerObject(e.position, i);
    this.doSaveObject(t, i, e);
  };
  r.prototype.doSaveObject = function (t, e, i) {
    i.write(e.objNumber.toString());
    i.write(S.whiteSpace);
    i.write(e.genNumber.toString());
    i.write(S.whiteSpace);
    i.write(S.obj);
    i.write(S.newLine);
    t.save(i);
    i.write(S.endObj);
    i.write(S.newLine);
  };
  r.prototype.registerObject = function (t, e, i) {
    typeof i == 'boolean'
      ? (this.objects.setValue(e.objNumber, new sn(t, e, i)),
        (this.maxGenNumIndex = Math.max(this.maxGenNumIndex, e.genNumber)))
      : typeof i > 'u' &&
        (this.objects.setValue(e.objNumber, new sn(t, e)),
        (this.maxGenNumIndex = Math.max(this.maxGenNumIndex, e.genNumber)));
  };
  r.dereference = function (t) {
    var e = t;
    if (t != null) {
      t = t.object;
    }
    return t;
  };
  return r;
})();
var sn = (function () {
  function r(t, e, i) {
    var n = t;
    this.offsetNumber = t;
    var s = e;
    this.generation = e.genNumber;
    this.object = e.objNumber;
    typeof i > 'u' ? (this.type = je.Normal) : (this.type = je.Free);
  }
  Object.defineProperty(r.prototype, 'objectNumber', {
    get: function () {
      return this.object;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'offset', {
    get: function () {
      var t;
      t = this.offsetNumber;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var lo = (function () {
  function r() {}
  r.letter = new C(612, 792);
  r.note = new C(540, 720);
  r.legal = new C(612, 1008);
  r.a0 = new C(2380, 3368);
  r.a1 = new C(1684, 2380);
  r.a2 = new C(1190, 1684);
  r.a3 = new C(842, 1190);
  r.a4 = new C(595, 842);
  r.a5 = new C(421, 595);
  r.a6 = new C(297, 421);
  r.a7 = new C(210, 297);
  r.a8 = new C(148, 210);
  r.a9 = new C(105, 148);
  r.a10 = new C(74, 105);
  r.b0 = new C(2836, 4008);
  r.b1 = new C(2004, 2836);
  r.b2 = new C(1418, 2004);
  r.b3 = new C(1002, 1418);
  r.b4 = new C(709, 1002);
  r.b5 = new C(501, 709);
  r.archE = new C(2592, 3456);
  r.archD = new C(1728, 2592);
  r.archC = new C(1296, 1728);
  r.archB = new C(864, 1296);
  r.archA = new C(648, 864);
  r.flsa = new C(612, 936);
  r.halfLetter = new C(396, 612);
  r.letter11x17 = new C(792, 1224);
  r.ledger = new C(1224, 792);
  return r;
})();
var Zt;
(function (r) {
  r[(r.Portrait = 0)] = 'Portrait';
  r[(r.Landscape = 1)] = 'Landscape';
})(Zt || (Zt = {}));
var Ni;
(function (r) {
  r[(r.RotateAngle0 = 0)] = 'RotateAngle0';
  r[(r.RotateAngle90 = 1)] = 'RotateAngle90';
  r[(r.RotateAngle180 = 2)] = 'RotateAngle180';
  r[(r.RotateAngle270 = 3)] = 'RotateAngle270';
})(Ni || (Ni = {}));
var Et;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.Numeric = 1)] = 'Numeric';
  r[(r.LowerLatin = 2)] = 'LowerLatin';
  r[(r.LowerRoman = 3)] = 'LowerRoman';
  r[(r.UpperLatin = 4)] = 'UpperLatin';
  r[(r.UpperRoman = 5)] = 'UpperRoman';
})(Et || (Et = {}));
var et;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.Bottom = 1)] = 'Bottom';
  r[(r.Top = 2)] = 'Top';
  r[(r.Left = 3)] = 'Left';
  r[(r.Right = 4)] = 'Right';
  r[(r.Fill = 5)] = 'Fill';
})(et || (et = {}));
var G;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.TopLeft = 1)] = 'TopLeft';
  r[(r.TopCenter = 2)] = 'TopCenter';
  r[(r.TopRight = 3)] = 'TopRight';
  r[(r.MiddleLeft = 4)] = 'MiddleLeft';
  r[(r.MiddleCenter = 5)] = 'MiddleCenter';
  r[(r.MiddleRight = 6)] = 'MiddleRight';
  r[(r.BottomLeft = 7)] = 'BottomLeft';
  r[(r.BottomCenter = 8)] = 'BottomCenter';
  r[(r.BottomRight = 9)] = 'BottomRight';
})(G || (G = {}));
var W;
(function (r) {
  r[(r.None = 0)] = 'None';
  r[(r.Top = 1)] = 'Top';
  r[(r.Bottom = 2)] = 'Bottom';
  r[(r.Left = 3)] = 'Left';
  r[(r.Right = 4)] = 'Right';
})(W || (W = {}));
var uo = (function () {
  function r() {
    this.pdfMargin = 40;
    this.setMargins(this.pdfMargin);
  }
  Object.defineProperty(r.prototype, 'left', {
    get: function () {
      return this.leftMargin;
    },
    set: function (t) {
      this.leftMargin = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'top', {
    get: function () {
      return this.topMargin;
    },
    set: function (t) {
      this.topMargin = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'right', {
    get: function () {
      return this.rightMargin;
    },
    set: function (t) {
      this.rightMargin = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bottom', {
    get: function () {
      return this.bottomMargin;
    },
    set: function (t) {
      this.bottomMargin = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'all', {
    set: function (t) {
      this.setMargins(t);
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setMargins = function (t, e, i, n) {
    typeof e > 'u'
      ? (this.leftMargin = this.topMargin = this.rightMargin = this.bottomMargin = t)
      : typeof i > 'u'
        ? ((this.leftMargin = this.rightMargin = t), (this.bottomMargin = this.topMargin = e))
        : ((this.leftMargin = t), (this.topMargin = e), (this.rightMargin = i), (this.bottomMargin = n));
  };
  r.prototype.clone = function () {
    return this;
  };
  return r;
})();
var wn = (function () {
  function r(t) {
    this.pageMargins = new uo();
    this.pageSize = lo.a4;
    this.rotateAngle = Ni.RotateAngle0;
    this.pageOrientation = Zt.Portrait;
    this.pageOrigin = new D(0, 0);
    this.isRotation = false;
    if (typeof t == 'number') {
      this.pageMargins.setMargins(t);
    }
  }
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.pageSize;
    },
    set: function (t) {
      this.setSize(t);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'orientation', {
    get: function () {
      return this.pageOrientation;
    },
    set: function (t) {
      if (this.pageOrientation !== t) {
        this.pageOrientation = t;
        this.updateSize(t);
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'margins', {
    get: function () {
      return this.pageMargins;
    },
    set: function (t) {
      this.pageMargins = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.pageSize.width;
    },
    set: function (t) {
      this.pageSize.width = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.pageSize.height;
    },
    set: function (t) {
      this.pageSize.height = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'origin', {
    get: function () {
      return this.pageOrigin;
    },
    set: function (t) {
      this.pageOrigin = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rotate', {
    get: function () {
      return this.rotateAngle;
    },
    set: function (t) {
      this.rotateAngle = t;
      this.isRotation = true;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.updateSize = function (t) {
    var e = Math.min(this.pageSize.width, this.pageSize.height);
    var i = Math.max(this.pageSize.width, this.pageSize.height);
    switch (t) {
      case Zt.Portrait:
        this.pageSize = new C(e, i);
        break;
      case Zt.Landscape:
        this.pageSize = new C(i, e);
        break;
    }
  };
  r.prototype.clone = function () {
    var t = this;
    t.pageMargins = this.pageMargins.clone();
    return t;
  };
  r.prototype.getActualSize = function () {
    var t = this.width - (this.margins.left + this.margins.right);
    var e = this.height - (this.margins.top + this.margins.bottom);
    var i = new C(t, e);
    return i;
  };
  r.prototype.setSize = function (t) {
    var e = Math.min(t.width, t.height);
    var i = Math.max(t.width, t.height);
    this.orientation === Zt.Portrait ? (this.pageSize = new C(e, i)) : (this.pageSize = new C(i, e));
  };
  return r;
})();
var on = (function () {
  function r(t) {
    if (t == null) throw new Error('ArgumentNullException:stream');
    this.stream = t;
  }
  r.prototype.clear = function () {
    this.stream.clearStream();
  };
  r.prototype.setGraphicsState = function (t) {
    t instanceof k
      ? (this.stream.write(t.toString()), this.stream.write(S.whiteSpace), this.writeOperator(S.setGraphicsState))
      : (this.stream.write(S.slash),
        this.stream.write(t),
        this.stream.write(S.whiteSpace),
        this.writeOperator(S.setGraphicsState));
  };
  r.prototype.executeObject = function (t) {
    this.stream.write(t.toString());
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.paintXObject);
    this.stream.write(S.newLine);
  };
  r.prototype.closePath = function () {
    this.writeOperator(S.closePath);
  };
  r.prototype.clipPath = function (t) {
    this.stream.write(S.clipPath);
    if (t) {
      this.stream.write(S.evenOdd);
    }
    this.stream.write(S.whiteSpace);
    this.stream.write(S.endPath);
    this.stream.write(S.newLine);
  };
  r.prototype.closeFillStrokePath = function (t) {
    this.stream.write(S.closeFillStrokePath);
    t ? (this.stream.write(S.evenOdd), this.stream.write(S.newLine)) : this.stream.write(S.newLine);
  };
  r.prototype.fillStrokePath = function (t) {
    this.stream.write(S.fillStroke);
    t ? (this.stream.write(S.evenOdd), this.stream.write(S.newLine)) : this.stream.write(S.newLine);
  };
  r.prototype.fillPath = function (t) {
    this.stream.write(S.fill);
    t ? (this.stream.write(S.evenOdd), this.stream.write(S.newLine)) : this.stream.write(S.newLine);
  };
  r.prototype.endPath = function () {
    this.writeOperator(S.n);
  };
  r.prototype.closeFillPath = function (t) {
    this.writeOperator(S.closePath);
    this.stream.write(S.fill);
    t ? (this.stream.write(S.evenOdd), this.stream.write(S.newLine)) : this.stream.write(S.newLine);
  };
  r.prototype.closeStrokePath = function () {
    this.writeOperator(S.closeStrokePath);
  };
  r.prototype.setTextScaling = function (t) {
    this.stream.write(E.floatToString(t));
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setTextScaling);
  };
  r.prototype.strokePath = function () {
    this.writeOperator(S.stroke);
  };
  r.prototype.restoreGraphicsState = function () {
    this.writeOperator(S.restoreState);
  };
  r.prototype.saveGraphicsState = function () {
    this.writeOperator(S.saveState);
  };
  r.prototype.startNextLine = function (t, e) {
    typeof t > 'u'
      ? this.writeOperator(S.goToNextLine)
      : t instanceof D
        ? (this.writePoint(t), this.writeOperator(S.setCoords))
        : (this.writePoint(t, e), this.writeOperator(S.setCoords));
  };
  r.prototype.showText = function (t) {
    this.checkTextParam(t);
    this.writeText(t);
    this.writeOperator(S.setText);
  };
  r.prototype.setLeading = function (t) {
    this.stream.write(E.floatToString(t));
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setTextLeading);
  };
  r.prototype.beginPath = function (t, e) {
    this.writePoint(t, e);
    this.writeOperator(S.beginPath);
  };
  r.prototype.beginText = function () {
    this.writeOperator(S.beginText);
  };
  r.prototype.endText = function () {
    this.writeOperator(S.endText);
  };
  r.prototype.appendRectangle = function (t, e, i, n) {
    t instanceof I
      ? this.appendRectangle(t.x, t.y, t.width, t.height)
      : (this.writePoint(t, e), this.writePoint(i, n), this.writeOperator(S.appendRectangle));
  };
  r.prototype.appendLineSegment = function (t, e) {
    t instanceof D
      ? this.appendLineSegment(t.x, t.y)
      : (this.writePoint(t, e), this.writeOperator(S.appendLineSegment));
  };
  r.prototype.setTextRenderingMode = function (t) {
    this.stream.write(t.toString());
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setRenderingMode);
  };
  r.prototype.setCharacterSpacing = function (t) {
    this.stream.write(E.floatToString(t));
    this.stream.write(S.whiteSpace);
    this.stream.write(S.setCharacterSpace);
    this.stream.write(S.newLine);
  };
  r.prototype.setWordSpacing = function (t) {
    this.stream.write(E.floatToString(t));
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setWordSpace);
  };
  r.prototype.showNextLineText = function (t, e) {
    t instanceof dt
      ? (this.checkTextParam(t), this.writeText(t), this.writeOperator(S.setTextOnNewLine))
      : (this.checkTextParam(t), this.writeText(t, e), this.writeOperator(S.setTextOnNewLine));
  };
  r.prototype.setColorSpace = function (t, e) {
    if (t instanceof k && typeof e == 'boolean') {
      var i = t;
      var n = e;
      var s = e ? S.selectcolorspaceforstroking : S.selectcolorspacefornonstroking;
      this.stream.write(t.toString());
      this.stream.write(S.whiteSpace);
      this.stream.write(s);
      this.stream.write(S.newLine);
    } else {
      var i = t;
      var n = e;
      this.setColorSpace(new k(t), e);
    }
  };
  r.prototype.modifyCtm = function (t) {
    if (t == null) throw new Error('ArgumentNullException:matrix');
    this.stream.write(t.toString());
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.modifyCtm);
  };
  r.prototype.setFont = function (t, e, i) {
    if (typeof e == 'string') this.setFont(t, new k(e), i);
    else {
      if (t == null) throw new Error('ArgumentNullException:font');
      this.stream.write(e.toString());
      this.stream.write(S.whiteSpace);
      this.stream.write(E.floatToString(i));
      this.stream.write(S.whiteSpace);
      this.writeOperator(S.setFont);
    }
  };
  r.prototype.writeOperator = function (t) {
    this.stream.write(t);
    this.stream.write(S.newLine);
  };
  r.prototype.checkTextParam = function (t) {
    if (t == null) throw new Error('ArgumentNullException:text');
    if (typeof t == 'string' && t === '')
      throw new Error('ArgumentException:The text can not be an empty string, text');
  };
  r.prototype.writeText = function (t, e) {
    if (t instanceof dt && typeof e > 'u') this.stream.write(t.pdfEncode());
    else {
      var i = void 0;
      var n = void 0;
      e ? ((i = '<'), (n = '>')) : ((i = '('), (n = ')'));
      this.stream.write(i);
      this.stream.write(t);
      this.stream.write(n);
    }
  };
  r.prototype.writePoint = function (t, e) {
    if (t instanceof D && typeof e > 'u') this.writePoint(t.x, t.y);
    else {
      var i = t;
      this.stream.write(E.floatToString(t));
      this.stream.write(S.whiteSpace);
      e = this.updateY(e);
      this.stream.write(E.floatToString(e));
      this.stream.write(S.whiteSpace);
    }
  };
  r.prototype.updateY = function (t) {
    return -t;
  };
  r.prototype.write = function (t) {
    var e = '';
    e += t;
    e += S.newLine;
    this.writeOperator(e);
  };
  r.prototype.writeComment = function (t) {
    if (t != null && t.length > 0) {
      var e = '';
      e += S.comment;
      e += S.whiteSpace;
      e += t;
      this.writeOperator(e);
    } else throw new Error('Invalid comment');
  };
  r.prototype.setColorAndSpace = function (t, e, i) {
    if (!t.isEmpty) {
      this.stream.write(t.toString(e, i));
      this.stream.write(S.newLine);
    }
  };
  r.prototype.setLineDashPattern = function (t, e) {
    this.setLineDashPatternHelper(t, e);
  };
  r.prototype.setLineDashPatternHelper = function (t, e) {
    var i = '[';
    if (t.length > 1)
      for (var n = 0; n < t.length; n++) n === t.length - 1 ? (i += t[n].toString()) : (i += t[n].toString() + ' ');
    i += '] ';
    i += e.toString();
    i += ' ' + S.setDashPattern;
    this.stream.write(i);
    this.stream.write(S.newLine);
  };
  r.prototype.setMiterLimit = function (t) {
    this.stream.write(E.floatToString(t));
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setMiterLimit);
  };
  r.prototype.setLineWidth = function (t) {
    this.stream.write(E.floatToString(t));
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setLineWidth);
  };
  r.prototype.setLineCap = function (t) {
    this.stream.write(t.toString());
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setLineCapStyle);
  };
  r.prototype.setLineJoin = function (t) {
    this.stream.write(t.toString());
    this.stream.write(S.whiteSpace);
    this.writeOperator(S.setLineJoinStyle);
  };
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.stream.position;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'length', {
    get: function () {
      var t = 0;
      if (this.stream.data.length !== 0 && this.stream.data.length !== -1)
        for (var e = 0; e < this.stream.data.length; e++) t += this.stream.data[e].length;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'document', {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.appendBezierSegment = function (t, e, i, n, s, o) {
    t instanceof D && e instanceof D && i instanceof D
      ? (this.writePoint(t.x, t.y), this.writePoint(e.x, e.y), this.writePoint(i.x, i.y))
      : (this.writePoint(t, e), this.writePoint(i, n), this.writePoint(s, o));
    this.writeOperator(S.appendbeziercurve);
  };
  r.prototype.setColourWithPattern = function (t, e, i) {
    if (t != null) {
      var n = t.length;
      var s = 0;
      for (s = 0; s < t.length; ++s) {
        this.stream.write(t[s].toString());
        this.stream.write(S.whiteSpace);
      }
    }
    if (e != null) {
      this.stream.write(e.toString());
      this.stream.write(S.whiteSpace);
    }
    i ? this.writeOperator(S.setColorAndPatternStroking) : this.writeOperator(S.setColorAndPattern);
  };
  return r;
})();
var ct = (function () {
  function r(t, e) {
    this.pdfColor = new j(0, 0, 0);
    this.dashOffsetValue = 0;
    this.penDashPattern = [0];
    this.pdfDashStyle = lt.Solid;
    this.pdfLineCap = 0;
    this.pdfLineJoin = 0;
    this.penWidth = 1;
    this.internalMiterLimit = 0;
    this.colorSpace = Q.Rgb;
    t instanceof zt ? this.setBrush(t) : t instanceof j && (this.color = t);
    if (typeof e == 'number') {
      this.width = e;
    }
  }
  Object.defineProperty(r.prototype, 'color', {
    get: function () {
      return this.pdfColor;
    },
    set: function (t) {
      this.pdfColor = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'dashOffset', {
    get: function () {
      return typeof this.dashOffsetValue > 'u' || this.dashOffsetValue == null ? 0 : this.dashOffsetValue;
    },
    set: function (t) {
      this.dashOffsetValue = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'dashPattern', {
    get: function () {
      return this.penDashPattern;
    },
    set: function (t) {
      this.penDashPattern = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'dashStyle', {
    get: function () {
      return this.pdfDashStyle;
    },
    set: function (t) {
      if (this.pdfDashStyle !== t)
        switch (((this.pdfDashStyle = t), this.pdfDashStyle)) {
          case lt.Custom:
            break;
          case lt.Dash:
            this.penDashPattern = [3, 1];
            break;
          case lt.Dot:
            this.penDashPattern = [1, 1];
            break;
          case lt.DashDot:
            this.penDashPattern = [3, 1, 1, 1];
            break;
          case lt.DashDotDot:
            this.penDashPattern = [3, 1, 1, 1, 1, 1];
            break;
          case lt.Solid:
            break;
          default:
            {
              this.pdfDashStyle = lt.Solid;
              this.penDashPattern = [0];
            }
            break;
        }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineCap', {
    get: function () {
      return this.pdfLineCap;
    },
    set: function (t) {
      this.pdfLineCap = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'lineJoin', {
    get: function () {
      return this.pdfLineJoin;
    },
    set: function (t) {
      this.pdfLineJoin = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'miterLimit', {
    get: function () {
      return this.internalMiterLimit;
    },
    set: function (t) {
      this.internalMiterLimit = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.penWidth;
    },
    set: function (t) {
      this.penWidth = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.clone = function () {
    var t = this;
    return t;
  };
  r.prototype.setBrush = function (t) {
    var e = t;
    if (t != null && t instanceof st) {
      this.color = t.color;
      this.pdfBrush = t;
    }
    this.color = t.color;
    this.pdfBrush = t;
  };
  r.prototype.monitorChanges = function (t, e, i, n, s, o) {
    var a = false;
    n = true;
    if (t == null) {
      a = true;
    }
    a = this.dashControl(t, n, e);
    e.setLineWidth(this.width);
    e.setLineJoin(this.lineJoin);
    e.setLineCap(this.lineCap);
    var h = this.miterLimit;
    if (this.miterLimit > 0) {
      e.setMiterLimit(this.miterLimit);
      a = true;
    }
    this.pdfBrush;
    e.setColorAndSpace(this.color, s, true);
    a = true;
    return a;
  };
  r.prototype.dashControl = function (t, e, i) {
    e = true;
    var n = this.width;
    var s = this.getPattern();
    i.setLineDashPattern(s, this.dashOffset * this.width);
    return e;
  };
  r.prototype.getPattern = function () {
    for (var t = this.dashPattern, e = 0; e < t.length; ++e) t[e] *= this.width;
    return t;
  };
  return r;
})();
var jt = (function () {
  function r(t) {
    this.radDegFactor = 180 / Math.PI;
    typeof t > 'u'
      ? (this.transformationMatrix = new zi(1, 0, 0, 1, 0, 0))
      : (this.transformationMatrix = new zi(1, 0, 0, -1, 0, 0));
  }
  Object.defineProperty(r.prototype, 'matrix', {
    get: function () {
      return this.transformationMatrix;
    },
    set: function (t) {
      this.transformationMatrix = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.translate = function (t, e) {
    this.transformationMatrix.translate(t, e);
  };
  r.prototype.scale = function (t, e) {
    this.transformationMatrix.elements[0] = t;
    this.transformationMatrix.elements[3] = e;
  };
  r.prototype.rotate = function (t) {
    t = (t * Math.PI) / 180;
    this.transformationMatrix.elements[0] = Math.cos(t);
    this.transformationMatrix.elements[1] = Math.sin(t);
    this.transformationMatrix.elements[2] = -Math.sin(t);
    this.transformationMatrix.elements[3] = Math.cos(t);
  };
  r.prototype.toString = function () {
    for (var t = '', e = ' ', i = 0, n = this.transformationMatrix.elements.length; i < n; i++) {
      this.matrix.elements[i];
      t += E.floatToString(this.transformationMatrix.elements[i]);
      t += e;
    }
    return t;
  };
  r.prototype.multiply = function (t) {
    this.transformationMatrix.multiply(t.matrix);
  };
  r.degreesToRadians = function (t) {
    return this.degRadFactor * t;
  };
  r.prototype.radiansToDegrees = function (t) {
    return this.radDegFactor * t;
  };
  r.prototype.clone = function () {
    return this;
  };
  r.degRadFactor = Math.PI / 180;
  return r;
})();
var zi = (function () {
  function r(t, e, i, n, s, o) {
    typeof t > 'u'
      ? (this.metrixElements = [])
      : typeof t == 'number'
        ? ((this.metrixElements = []),
          this.metrixElements.push(t),
          this.metrixElements.push(e),
          this.metrixElements.push(i),
          this.metrixElements.push(n),
          this.metrixElements.push(s),
          this.metrixElements.push(o))
        : (this.metrixElements = t);
  }
  Object.defineProperty(r.prototype, 'elements', {
    get: function () {
      return this.metrixElements;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'offsetX', {
    get: function () {
      return this.metrixElements[4];
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'offsetY', {
    get: function () {
      return this.metrixElements[5];
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.translate = function (t, e) {
    this.metrixElements[4] = t;
    this.metrixElements[5] = e;
  };
  r.prototype.transform = function (t) {
    var e = t.x;
    var i = t.y;
    var n = t.x * this.elements[0] + t.y * this.elements[2] + this.offsetX;
    var s = t.x * this.elements[1] + t.y * this.elements[3] + this.offsetY;
    return new D(n, s);
  };
  r.prototype.multiply = function (t) {
    var e = [];
    e.push(this.elements[0] * t.elements[0] + this.elements[1] * t.elements[2]);
    e[1] = this.elements[0] * t.elements[1] + this.elements[1] * t.elements[3];
    e[2] = this.elements[2] * t.elements[0] + this.elements[3] * t.elements[2];
    e[3] = this.elements[2] * t.elements[1] + this.elements[3] * t.elements[3];
    e[4] = this.offsetX * t.elements[0] + this.offsetY * t.elements[2] + t.offsetX;
    e[5] = this.offsetX * t.elements[1] + this.offsetY * t.elements[3] + t.offsetY;
    for (var i = 0; i < e.length; i++) this.elements[i] = e[i];
  };
  r.prototype.dispose = function () {
    this.metrixElements = null;
  };
  r.prototype.clone = function () {
    var t = new r(this.metrixElements);
    return t;
  };
  return r;
})();
var co = (function () {
  function r() {
    this.pdf = 'PDF';
    this.text = 'Text';
    this.imageB = 'ImageB';
    this.imageC = 'ImageC';
    this.imageI = 'ImageI';
  }
  return r;
})();
var We = (function () {
  function r() {
    this.mKeys = [];
    this.mValues = [];
  }
  r.prototype.size = function () {
    return this.mKeys.length;
  };
  r.prototype.add = function (t, e) {
    if (t == null || e === void 0 || e === null) throw new ReferenceError('Provided key or value is not valid.');
    var i = this.mKeys.indexOf(t);
    if (i < 0) {
      this.mKeys.push(t);
      this.mValues.push(e);
      return 1;
    }
    throw new RangeError('An item with the same key has already been added.');
  };
  r.prototype.keys = function () {
    return this.mKeys;
  };
  r.prototype.values = function () {
    return this.mValues;
  };
  r.prototype.getValue = function (t) {
    if (t == null) throw new ReferenceError('Provided key is not valid.');
    var e = this.mKeys.indexOf(t);
    if (e < 0) throw new RangeError('No item with the specified key has been added.');
    return this.mValues[e];
  };
  r.prototype.setValue = function (t, e) {
    if (t == null) throw new ReferenceError('Provided key is not valid.');
    var i = this.mKeys.indexOf(t);
    i < 0 ? (this.mKeys.push(t), this.mValues.push(e)) : (this.mValues[i] = e);
  };
  r.prototype.remove = function (t) {
    if (t == null) throw new ReferenceError('Provided key is not valid.');
    var e = this.mKeys.indexOf(t);
    if (e < 0) throw new RangeError('No item with the specified key has been added.');
    this.mKeys.splice(e, 1);
    this.mValues.splice(e, 1);
    return true;
  };
  r.prototype.containsKey = function (t) {
    if (t == null) throw new ReferenceError('Provided key is not valid.');
    var e = this.mKeys.indexOf(t);
    return !(e < 0);
  };
  r.prototype.clear = function () {
    this.mKeys = [];
    this.mValues = [];
  };
  return r;
})();
var ji = (function () {
  function r(t, e, i) {
    this.dictionary = new q();
    this.dictionaryProperties = new rt();
    this.dictionary.items.setValue(this.dictionaryProperties.CA, new E(t));
    this.dictionary.items.setValue(this.dictionaryProperties.ca, new E(e));
    this.dictionary.items.setValue(this.dictionaryProperties.BM, new k(i.toString()));
  }
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.dictionary;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var po = (function () {
  function r() {
    this.automaticFieldsInformation = [];
  }
  Object.defineProperty(r.prototype, 'automaticFields', {
    get: function () {
      return this.automaticFieldsInformation;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    return this.automaticFields.push(t);
  };
  return r;
})();
var fo = (function () {
  function r() {}
  r.prototype.drawHelper = function (t, e, i) {
    var n = e !== 0 || i !== 0;
    var s = null;
    if (n) {
      s = t.save();
      t.translateTransform(e, i);
    }
    this.drawInternal(t);
    if (n) {
      t.restore(s);
    }
  };
  return r;
})();
var go = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Ui = (function (r) {
  go(t, r);
  function t() {
    var e = r() || this;
    e.internalBounds = new I(0, 0, 0, 0);
    e.internalTemplateSize = new C(0, 0);
    return e;
  }
  Object.defineProperty(t.prototype, 'bounds', {
    get: function () {
      return this.internalBounds;
    },
    set: function (e) {
      this.internalBounds = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'size', {
    get: function () {
      return new C(this.bounds.width, this.bounds.height);
    },
    set: function (e) {
      this.bounds.width = e.width;
      this.bounds.height = e.height;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'location', {
    get: function () {
      return new D(this.bounds.x, this.bounds.y);
    },
    set: function (e) {
      this.bounds.x = e.x;
      this.bounds.y = e.y;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'font', {
    get: function () {
      return this.internalFont;
    },
    set: function (e) {
      this.internalFont = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'brush', {
    get: function () {
      return this.internalBrush;
    },
    set: function (e) {
      this.internalBrush = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'pen', {
    get: function () {
      return this.internalPen;
    },
    set: function (e) {
      this.internalPen = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'stringFormat', {
    get: function () {
      return this.internalStringFormat;
    },
    set: function (e) {
      this.internalStringFormat = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.performDrawHelper = function (e, i, n, s) {
    if (this.bounds.height === 0 || this.bounds.width === 0) {
      var o = this.getValue(e);
      this.internalTemplateSize = this.getFont().measureString(o, this.size, this.stringFormat);
    }
  };
  t.prototype.draw = function (e, i, n) {
    if (typeof i > 'u') {
      var s = new D(0, 0);
      this.draw(e, s);
    } else if (i instanceof D) this.draw(e, i.x, i.y);
    else {
      this.drawHelper(e, i, n);
      var o = new bn(this, new D(i, n));
      e.automaticFields.add(o);
    }
  };
  t.prototype.getSize = function () {
    return this.bounds.height === 0 || this.bounds.width === 0 ? this.internalTemplateSize : this.size;
  };
  t.prototype.drawInternal = function (e) {};
  t.prototype.getBrush = function () {
    return typeof this.internalBrush > 'u' || this.internalBrush == null ? new st(new j(0, 0, 0)) : this.internalBrush;
  };
  t.prototype.getFont = function () {
    return typeof this.internalFont > 'u' || this.internalFont == null ? Jt.defaultFont : this.internalFont;
  };
  t.prototype.getPageFromGraphics = function (e) {
    if (typeof e.page < 'u' && e.page !== null) {
      var i = e.page;
      return e.page;
    } else {
      var i = e.currentPage;
      return e.currentPage;
    }
  };
  return t;
})(fo);
var bn = (function () {
  function r(t, e, i, n) {
    this.pageNumberFieldLocation = new D();
    this.pageNumberField = null;
    this.scaleX = 1;
    this.scaleY = 1;
    typeof e > 'u' && t instanceof r
      ? ((this.pageNumberField = t.field),
        (this.pageNumberFieldLocation = t.location),
        (this.scaleX = t.scalingX),
        (this.scaleY = t.scalingY))
      : typeof i > 'u' && e instanceof D && t instanceof Ui
        ? ((this.pageNumberField = t), (this.pageNumberFieldLocation = e))
        : ((this.pageNumberField = t), (this.pageNumberFieldLocation = e), (this.scaleX = i), (this.scaleY = n));
  }
  Object.defineProperty(r.prototype, 'location', {
    get: function () {
      return this.pageNumberFieldLocation;
    },
    set: function (t) {
      this.pageNumberFieldLocation = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'field', {
    get: function () {
      return this.pageNumberField;
    },
    set: function (t) {
      this.pageNumberField = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'scalingX', {
    get: function () {
      return this.scaleX;
    },
    set: function (t) {
      this.scaleX = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'scalingY', {
    get: function () {
      return this.scaleY;
    },
    set: function (t) {
      this.scaleY = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Ee = (function () {
  function r(t) {
    this.mPosition = 0;
    this.buffer = new Uint8Array(t);
    this.dataView = new DataView(this.buffer.buffer);
  }
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      return this.mPosition;
    },
    set: function (t) {
      this.mPosition = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.read = function (t, e, i) {
    for (var n = e; n < i; n++) {
      var s = this.position;
      t.buffer[n] = this.readByte(this.position);
      this.position++;
    }
  };
  r.prototype.getBuffer = function (t) {
    return this.buffer[t];
  };
  r.prototype.writeFromBase64String = function (t) {
    var e = this.encodedString(t);
    this.buffer = e;
  };
  r.prototype.encodedString = function (t) {
    var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var i;
    var n;
    var s;
    var o;
    var a;
    var h;
    var l;
    var u = 0;
    var d = 0;
    t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    var c = (t.length * 3) / 4;
    if (t.charAt(t.length - 1) === '=') {
      c--;
    }
    for (var f = new Uint8Array(c | 0); u < t.length; ) {
      o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(t.charAt(u++));
      a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(t.charAt(u++));
      h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(t.charAt(u++));
      l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(t.charAt(u++));
      i = (o << 2) | (a >> 4);
      n = ((a & 15) << 4) | (h >> 2);
      s = ((h & 3) << 6) | l;
      f[d++] = i;
      f[d++] = n;
      f[d++] = s;
    }
    return f;
  };
  r.prototype.readByte = function (t) {
    return this.buffer[t];
  };
  Object.defineProperty(r.prototype, 'internalBuffer', {
    get: function () {
      return this.buffer;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.buffer.byteLength;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.readNextTwoBytes = function (t) {
    var e = t.readByte(this.position);
    this.position++;
    e <<= 8;
    e |= t.readByte(this.position);
    this.position++;
    return e;
  };
  return r;
})();
var xe;
(function (r) {
  r[(r.Unknown = 0)] = 'Unknown';
  r[(r.Bmp = 1)] = 'Bmp';
  r[(r.Emf = 2)] = 'Emf';
  r[(r.Gif = 3)] = 'Gif';
  r[(r.Jpeg = 4)] = 'Jpeg';
  r[(r.Png = 5)] = 'Png';
  r[(r.Wmf = 6)] = 'Wmf';
  r[(r.Icon = 7)] = 'Icon';
})(xe || (xe = {}));
var mo = (function () {
  function r(t) {
    this.sof1Marker = 193;
    this.sof2Marker = 194;
    this.sof3Marker = 195;
    this.sof5Marker = 197;
    this.sof6Marker = 198;
    this.sof7Marker = 199;
    this.sof9Marker = 201;
    this.sof10Marker = 202;
    this.sof11Marker = 203;
    this.sof13Marker = 205;
    this.sof14Marker = 206;
    this.sof15Marker = 207;
    this.mFormat = xe.Unknown;
    this.mbitsPerComponent = 8;
    this.dictionaryProperties = new rt();
    this.mStream = t;
    this.initialize();
  }
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.mHeight;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.mWidth;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bitsPerComponent', {
    get: function () {
      return this.mbitsPerComponent;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.mImageData.count;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'imageData', {
    get: function () {
      return this.mImageData;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'imageDataAsNumberArray', {
    get: function () {
      return this.mImageData.internalBuffer.buffer;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function () {
    if (this.mFormat === xe.Unknown && this.checkIfJpeg()) {
      this.mFormat = xe.Jpeg;
      this.parseJpegImage();
    } else throw new TypeError('Only the JPEG format is supported');
    this.reset();
    this.mImageData = new Ee(this.mStream.count);
    this.mStream.read(this.mImageData, 0, this.mImageData.count);
  };
  r.prototype.reset = function () {
    this.mStream.position = 0;
  };
  r.prototype.parseJpegImage = function () {
    this.reset();
    var t = new Ee(this.mStream.count);
    this.mStream.read(t, 0, t.count);
    for (var e = 4, i = false, n = t.getBuffer(e) * 256 + t.getBuffer(e + 1); e < t.count; ) {
      e += n;
      if (e < t.count)
        if (t.getBuffer(e + 1) === 192) {
          this.mHeight = t.getBuffer(e + 5) * 256 + t.getBuffer(e + 6);
          this.mWidth = t.getBuffer(e + 7) * 256 + t.getBuffer(e + 8);
          return;
        } else {
          e += 2;
          n = t.getBuffer(e) * 256 + t.getBuffer(e + 1);
        }
      else {
        i = true;
        break;
      }
    }
    if (i) {
      this.mStream.position = 0;
      this.skip(this.mStream, 2);
      this.readExceededJPGImage(this.mStream);
    }
  };
  Object.defineProperty(r.prototype, 'format', {
    get: function () {
      return this.mFormat;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.checkIfJpeg = function () {
    this.reset();
    for (var t = 0; t < r.mJpegHeader.length; t++) {
      if (r.mJpegHeader[t] !== this.mStream.readByte(t)) return false;
      this.mStream.position++;
    }
    return true;
  };
  r.prototype.getImageDictionary = function () {
    if (this.mFormat === xe.Jpeg) {
      this.imageData.internalBuffer.length;
      this.imageStream = new Pt();
      this.imageStream.isResource = true;
      for (var t = '', e = '', i = 0; i < this.imageDataAsNumberArray.byteLength; i++)
        t += String.fromCharCode(null, this.mStream.readByte(i));
      for (var i = 0; i < t.length; i++)
        if (i % 2 !== 0) {
          e += t[i];
        }
      this.imageStream.data = [e];
      this.imageStream.compress = false;
      this.imageStream.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.xObject));
      this.imageStream.items.setValue(this.dictionaryProperties.subtype, new k(this.dictionaryProperties.image));
      this.imageStream.items.setValue(this.dictionaryProperties.width, new E(this.width));
      this.imageStream.items.setValue(this.dictionaryProperties.height, new E(this.height));
      this.imageStream.items.setValue(this.dictionaryProperties.bitsPerComponent, new E(this.bitsPerComponent));
      this.imageStream.items.setValue(this.dictionaryProperties.filter, new k(this.dictionaryProperties.dctdecode));
      this.imageStream.items.setValue(this.dictionaryProperties.colorSpace, new k(this.getColorSpace()));
      this.imageStream.items.setValue(this.dictionaryProperties.decodeParms, this.getDecodeParams());
      return this.imageStream;
    } else return this.imageStream;
  };
  r.prototype.getColorSpace = function () {
    return this.dictionaryProperties.deviceRgb;
  };
  r.prototype.getDecodeParams = function () {
    var t = new q();
    t.items.setValue(this.dictionaryProperties.columns, new E(this.width));
    t.items.setValue(this.dictionaryProperties.blackIs1, new Ut(true));
    t.items.setValue(this.dictionaryProperties.k, new E(-1));
    t.items.setValue(this.dictionaryProperties.predictor, new E(15));
    t.items.setValue(this.dictionaryProperties.bitsPerComponent, new E(this.bitsPerComponent));
    return t;
  };
  r.prototype.readExceededJPGImage = function (t) {
    this.mStream = t;
    for (var e = true; e; ) {
      var i = this.getMarker(t);
      switch (i) {
        case this.sof1Marker:
        case this.sof2Marker:
        case this.sof3Marker:
        case this.sof5Marker:
        case this.sof6Marker:
        case this.sof7Marker:
        case this.sof9Marker:
        case this.sof10Marker:
        case this.sof11Marker:
        case this.sof13Marker:
        case this.sof14Marker:
        case this.sof15Marker:
          {
            t.position += 3;
            this.mHeight = this.mStream.readNextTwoBytes(t);
            this.mWidth = this.mStream.readNextTwoBytes(t);
            e = false;
          }
          break;
        default:
          this.skipStream(t);
          break;
      }
    }
  };
  r.prototype.skip = function (t, e) {
    this.mStream = t;
    var i = new Ee(e);
    this.mStream.read(i, 0, i.count);
  };
  r.prototype.getMarker = function (t) {
    var e = 32;
    for (e = t.readByte(this.mStream.position), t.position++; e !== 255; ) {
      e = t.readByte(this.mStream.position);
      t.position++;
    }
    do {
      e = t.readByte(this.mStream.position);
      t.position++;
    } while (e === 255);
    return e;
  };
  r.prototype.skipStream = function (t) {
    var e = this.mStream.readNextTwoBytes(t) - 2;
    if (e > 0) {
      t.position += e;
    }
  };
  r.mPngHeader = [137, 80, 78, 71, 13, 10, 26, 10];
  r.mJpegHeader = [255, 216];
  r.GIF_HEADER = 'G,I,F,8';
  r.BMP_HEADER = 'B,M';
  return r;
})();
var $e = (function () {
  function r(t) {
    this.updateProportionsHelper(t);
  }
  r.prototype.convertUnits = function (t, e, i) {
    return this.convertFromPixels(this.convertToPixels(t, e), i);
  };
  r.prototype.convertToPixels = function (t, e) {
    var i = e;
    var n = t * this.proportions[e];
    return n;
  };
  r.prototype.convertFromPixels = function (t, e) {
    var i = e;
    var n = t / this.proportions[e];
    return n;
  };
  r.prototype.updateProportionsHelper = function (t) {
    this.proportions = [t / 2.54, t / 6, 1, t / 72, t, t / 300, t / 25.4];
  };
  r.horizontalResolution = 96;
  r.verticalResolution = 96;
  return r;
})();
var Me = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.imageWidth;
    },
    set: function (t) {
      this.imageWidth = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.imageHeight;
    },
    set: function (t) {
      this.imageHeight = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    set: function (t) {
      this.width = t.width;
      this.height = t.height;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'physicalDimension', {
    get: function () {
      this.imagePhysicalDimension = this.getPointSize(
        this.width,
        this.height,
        this.horizontalResolution,
        this.verticalResolution,
      );
      return new C(this.width, this.height);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.imageStream;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getPointSize = function (t, e, i, n) {
    if (typeof i > 'u') {
      var s = 96;
      var o = 96;
      var a = this.getPointSize(t, e, 96, 96);
      return a;
    } else {
      var h = new $e(i);
      var l = new $e(n);
      var u = h.convertUnits(t, Pe.Pixel, Pe.Point);
      var d = l.convertUnits(e, Pe.Pixel, Pe.Point);
      var a = new C(u, d);
      return a;
    }
  };
  return r;
})();
var yo = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var _t = (function (r) {
  yo(t, r);
  function t(e) {
    var i = r() || this;
    i.imageStatus = true;
    i.dictionaryProperties = new rt();
    i.loadImage(e);
    return i;
  }
  t.prototype.loadImage = function (e) {
    this.initializeAsync(e);
  };
  t.prototype.initializeAsync = function (e) {
    var i = new Ee(e.length);
    i.writeFromBase64String(e);
    this.decoder = new mo(i);
    this.height = this.decoder.height;
    this.width = this.decoder.width;
    this.bitsPerComponent = this.decoder.bitsPerComponent;
  };
  t.prototype.save = function () {
    this.imageStatus = true;
    this.imageStream = this.decoder.getImageDictionary();
  };
  return t;
})(Me);
var an = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'empty', {
    get: function () {
      var t = this.offset === this.length && this.length === this.checksum && this.checksum === 0;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var vo = (function () {
  function r() {}
  return r;
})();
var wo = (function () {
  function r() {}
  return r;
})();
var bo = (function () {
  function r() {}
  return r;
})();
var hn = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'isItalic', {
    get: function () {
      return (this.macStyle & 2) !== 0;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isBold', {
    get: function () {
      return (this.macStyle & 1) !== 0;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var So = (function () {
  function r() {}
  return r;
})();
var Co = (function () {
  function r() {}
  return r;
})();
var Po = (function () {
  function r() {}
  return r;
})();
var xo = (function () {
  function r() {}
  return r;
})();
var Ro = (function () {
  function r() {}
  return r;
})();
var Io = (function () {
  function r() {}
  return r;
})();
var De = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'empty', {
    get: function () {
      var t = this.index === this.width && this.width === this.charCode && this.charCode === 0;
      return t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.compareTo = function (t) {
    var e = t;
    return this.index - t.index;
  };
  return r;
})();
var Bo = (function () {
  function r() {}
  return r;
})();
var Lo = (function () {
  function r() {}
  return r;
})();
var Oo = (function () {
  function r() {}
  return r;
})();
var Ao = (function () {
  function r() {}
  return r;
})();
var Do = (function () {
  function r() {}
  return r;
})();
var ln = (function () {
  function r(t) {
    this.int32Size = 4;
    this.int16Size = 2;
    this.int64Size = 8;
    this.bufferLength = t;
    this.buffer = [];
  }
  Object.defineProperty(r.prototype, 'data', {
    get: function () {
      if (this.buffer.length < this.bufferLength)
        for (var t = this.bufferLength - this.buffer.length, e = 0; e < t; e++) this.buffer.push(0);
      return this.buffer;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'position', {
    get: function () {
      if (this.internalPosition === void 0 || this.internalPosition === null) {
        this.internalPosition = 0;
      }
      return this.internalPosition;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.writeShort = function (t) {
    var e = [(t & 65280) >> 8, t & 255];
    this.flush(e);
  };
  r.prototype.writeInt = function (t) {
    var e = [(t & 4278190080) >> 24, (t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
    this.flush(e);
  };
  r.prototype.writeUInt = function (t) {
    var e = [(t & 4278190080) >> 24, (t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
    this.flush(e);
  };
  r.prototype.writeString = function (t) {
    if (t == null) throw new Error('Argument Null Exception : value');
    for (var e = [], i = 0; i < t.length; i++) e.push(t.charCodeAt(i));
    this.flush(e);
  };
  r.prototype.writeBytes = function (t) {
    this.flush(t);
  };
  r.prototype.flush = function (t) {
    if (t === null) throw new Error('Argument Null Exception : buff');
    for (var e = this.position, i = 0; i < t.length; i++) {
      this.buffer[e] = t[i];
      e++;
    }
    this.internalPosition += t.length;
  };
  return r;
})();
var To = (function () {
  function r(t) {
    this.int32Size = 4;
    this.isTtcFont = false;
    this.isMacTtf = false;
    this.metricsName = '';
    this.isMacTTF = false;
    this.missedGlyphs = 0;
    this.tableNames = ['cvt ', 'fpgm', 'glyf', 'head', 'hhea', 'hmtx', 'loca', 'maxp', 'prep'];
    this.entrySelectors = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
    this._isOpenTypeFont = false;
    this.fontData = t;
    this.initialize();
  }
  Object.defineProperty(r.prototype, 'macintosh', {
    get: function () {
      if (this.macintoshDictionary === null || this.macintoshDictionary === void 0) {
        this.macintoshDictionary = new X();
      }
      return this.macintoshDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'microsoft', {
    get: function () {
      if (this.microsoftDictionary === null || this.microsoftDictionary === void 0) {
        this.microsoftDictionary = new X();
      }
      return this.microsoftDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'macintoshGlyphs', {
    get: function () {
      if (this.internalMacintoshGlyphs === null || this.internalMacintoshGlyphs === void 0) {
        this.internalMacintoshGlyphs = new X();
      }
      return this.internalMacintoshGlyphs;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'microsoftGlyphs', {
    get: function () {
      if (this.internalMicrosoftGlyphs === null || this.internalMicrosoftGlyphs === void 0) {
        this.internalMicrosoftGlyphs = new X();
      }
      return this.internalMicrosoftGlyphs;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function () {
    if (this.metrics === void 0) {
      this.metrics = new hn();
    }
    this.readFontDictionary();
    var t = this.readNameTable();
    var e = this.readHeadTable();
    this.initializeFontName(t);
    this.metrics.macStyle = e.macStyle;
  };
  r.prototype.readFontDictionary = function () {
    this.offset = 0;
    this.checkPreambula();
    var t = this.readInt16(this.offset);
    this.readInt16(this.offset);
    this.readInt16(this.offset);
    this.readInt16(this.offset);
    if (this.tableDirectory === void 0) {
      this.tableDirectory = new X();
    }
    for (var e = 0; e < t; ++e) {
      var i = new an();
      var n = this.readString(this.int32Size);
      i.checksum = this.readInt32(this.offset);
      i.offset = this.readInt32(this.offset);
      i.length = this.readInt32(this.offset);
      this.tableDirectory.setValue(n, i);
    }
    this.lowestPosition = this.offset;
    if (!this.isTtcFont) {
      this.fixOffsets();
    }
  };
  r.prototype.fixOffsets = function () {
    for (var t = Number.MAX_VALUE, e = this.tableDirectory.keys(), i = 0; i < e.length; i++) {
      var n = this.tableDirectory.getValue(e[i]);
      var s = n.offset;
      if (t > n.offset && ((t = n.offset), t <= this.lowestPosition)) break;
    }
    var o = t - this.lowestPosition;
    if (o !== 0) {
      for (var a = new X(), i = 0; i < e.length; i++) {
        var n = this.tableDirectory.getValue(e[i]);
        n.offset -= o;
        a.setValue(e[i], n);
      }
      this.tableDirectory = a;
    }
  };
  r.prototype.checkPreambula = function () {
    var t = this.readInt32(this.offset);
    this.isMacTtf = t === 1953658213;
    if (t !== 65536 && t !== 1953658213 && t !== 1330926671) {
      this.isTtcFont = true;
      this.offset = 0;
      var e = this.readString(4);
      if (e !== 'ttcf') throw new Error('Can not read TTF font data');
      this.offset += 4;
      var i = this.readInt32(this.offset);
      if (i < 0) throw new Error('Can not read TTF font data');
      this.offset = this.readInt32(this.offset);
      t = this.readInt32(this.offset);
    }
    if (t === 1330926671) {
      this._isOpenTypeFont = true;
    }
    return t;
  };
  r.prototype.readNameTable = function () {
    var t = this.getTable('name');
    this.offset = t.offset;
    var e = new vo();
    e.formatSelector = this.readUInt16(this.offset);
    e.recordsCount = this.readUInt16(this.offset);
    e.offset = this.readUInt16(this.offset);
    e.nameRecords = [];
    for (var i = 12, n = this.offset, s = 0; s < e.recordsCount; s++) {
      this.offset = n;
      var o = new wo();
      o.platformID = this.readUInt16(this.offset);
      o.encodingID = this.readUInt16(this.offset);
      o.languageID = this.readUInt16(this.offset);
      o.nameID = this.readUInt16(this.offset);
      o.length = this.readUInt16(this.offset);
      o.offset = this.readUInt16(this.offset);
      this.offset = t.offset + e.offset + o.offset;
      var a = o.platformID === 0 || o.platformID === 3;
      o.name = this.readString(o.length, a);
      e.nameRecords[s] = o;
      n += i;
    }
    return e;
  };
  r.prototype.readHeadTable = function () {
    var t = this.getTable('head');
    this.offset = t.offset;
    var e = new bo();
    e.version = this.readFixed(this.offset);
    e.fontRevision = this.readFixed(this.offset);
    e.checkSumAdjustment = this.readUInt32(this.offset);
    e.magicNumber = this.readUInt32(this.offset);
    e.flags = this.readUInt16(this.offset);
    e.unitsPerEm = this.readUInt16(this.offset);
    e.created = this.readInt64(this.offset);
    e.modified = this.readInt64(this.offset);
    e.xMin = this.readInt16(this.offset);
    e.yMin = this.readInt16(this.offset);
    e.xMax = this.readInt16(this.offset);
    e.yMax = this.readInt16(this.offset);
    e.macStyle = this.readUInt16(this.offset);
    e.lowestReadableSize = this.readUInt16(this.offset);
    e.fontDirectionHint = this.readInt16(this.offset);
    e.indexToLocalFormat = this.readInt16(this.offset);
    e.glyphDataFormat = this.readInt16(this.offset);
    return e;
  };
  r.prototype.readHorizontalHeaderTable = function () {
    var t = this.getTable('hhea');
    this.offset = t.offset;
    var e = new So();
    e.version = this.readFixed(this.offset);
    e.ascender = this.readInt16(this.offset);
    e.descender = this.readInt16(this.offset);
    e.lineGap = this.readInt16(this.offset);
    e.advanceWidthMax = this.readUInt16(this.offset);
    e.minLeftSideBearing = this.readInt16(this.offset);
    e.minRightSideBearing = this.readInt16(this.offset);
    e.xMaxExtent = this.readInt16(this.offset);
    e.caretSlopeRise = this.readInt16(this.offset);
    e.caretSlopeRun = this.readInt16(this.offset);
    this.offset += 10;
    e.metricDataFormat = this.readInt16(this.offset);
    e.numberOfHMetrics = this.readUInt16(this.offset);
    return e;
  };
  r.prototype.readOS2Table = function () {
    var t = this.getTable('OS/2');
    this.offset = t.offset;
    var e = new Co();
    e.version = this.readUInt16(this.offset);
    e.xAvgCharWidth = this.readInt16(this.offset);
    e.usWeightClass = this.readUInt16(this.offset);
    e.usWidthClass = this.readUInt16(this.offset);
    e.fsType = this.readInt16(this.offset);
    e.ySubscriptXSize = this.readInt16(this.offset);
    e.ySubscriptYSize = this.readInt16(this.offset);
    e.ySubscriptXOffset = this.readInt16(this.offset);
    e.ySubscriptYOffset = this.readInt16(this.offset);
    e.ySuperscriptXSize = this.readInt16(this.offset);
    e.ySuperscriptYSize = this.readInt16(this.offset);
    e.ySuperscriptXOffset = this.readInt16(this.offset);
    e.ySuperscriptYOffset = this.readInt16(this.offset);
    e.yStrikeoutSize = this.readInt16(this.offset);
    e.yStrikeoutPosition = this.readInt16(this.offset);
    e.sFamilyClass = this.readInt16(this.offset);
    e.panose = this.readBytes(10);
    e.ulUnicodeRange1 = this.readUInt32(this.offset);
    e.ulUnicodeRange2 = this.readUInt32(this.offset);
    e.ulUnicodeRange3 = this.readUInt32(this.offset);
    e.ulUnicodeRange4 = this.readUInt32(this.offset);
    e.vendorIdentifier = this.readBytes(4);
    e.fsSelection = this.readUInt16(this.offset);
    e.usFirstCharIndex = this.readUInt16(this.offset);
    e.usLastCharIndex = this.readUInt16(this.offset);
    e.sTypoAscender = this.readInt16(this.offset);
    e.sTypoDescender = this.readInt16(this.offset);
    e.sTypoLineGap = this.readInt16(this.offset);
    e.usWinAscent = this.readUInt16(this.offset);
    e.usWinDescent = this.readUInt16(this.offset);
    e.ulCodePageRange1 = this.readUInt32(this.offset);
    e.ulCodePageRange2 = this.readUInt32(this.offset);
    e.version > 1
      ? ((e.sxHeight = this.readInt16(this.offset)),
        (e.sCapHeight = this.readInt16(this.offset)),
        (e.usDefaultChar = this.readUInt16(this.offset)),
        (e.usBreakChar = this.readUInt16(this.offset)),
        (e.usMaxContext = this.readUInt16(this.offset)))
      : ((e.sxHeight = 0), (e.sCapHeight = 0), (e.usDefaultChar = 0), (e.usBreakChar = 0), (e.usMaxContext = 0));
    return e;
  };
  r.prototype.readPostTable = function () {
    var t = this.getTable('post');
    this.offset = t.offset;
    var e = new Po();
    e.formatType = this.readFixed(this.offset);
    e.italicAngle = this.readFixed(this.offset);
    e.underlinePosition = this.readInt16(this.offset);
    e.underlineThickness = this.readInt16(this.offset);
    e.isFixedPitch = this.readUInt32(this.offset);
    e.minType42 = this.readUInt32(this.offset);
    e.maxType42 = this.readUInt32(this.offset);
    e.minType1 = this.readUInt32(this.offset);
    e.maxType1 = this.readUInt32(this.offset);
    return e;
  };
  r.prototype.readWidthTable = function (t, e) {
    var i = this.getTable('hmtx');
    this.offset = i.offset;
    for (var n = [], s = 0; s < t; s++) {
      var o = new xo();
      o.advanceWidth = this.readUInt16(this.offset);
      o.lsb = this.readInt16(this.offset);
      var a = (o.advanceWidth * 1000) / e;
      n.push(Math.floor(a));
    }
    return n;
  };
  r.prototype.readCmapTable = function () {
    var t = this.getTable('cmap');
    this.offset = t.offset;
    var e = new Io();
    e.version = this.readUInt16(this.offset);
    e.tablesCount = this.readUInt16(this.offset);
    for (var i = this.offset, n = [], s = 0; s < e.tablesCount; s++) {
      this.offset = i;
      var o = new Ro();
      o.platformID = this.readUInt16(this.offset);
      o.encodingID = this.readUInt16(this.offset);
      o.offset = this.readUInt32(this.offset);
      i = this.offset;
      this.readCmapSubTable(o);
      n[s] = o;
    }
    return n;
  };
  r.prototype.readCmapSubTable = function (t) {
    var e = this.getTable('cmap');
    this.offset = e.offset + t.offset;
    var i = this.readUInt16(this.offset);
    var n = this.getCmapEncoding(t.platformID, t.encodingID);
    n === bt.Macintosh ? ae.Macintosh : ae.Microsoft;
    if (n !== bt.Unknown)
      switch (i) {
        case Fe.Apple:
          this.readAppleCmapTable(t, n);
          break;
        case Fe.Microsoft:
          this.readMicrosoftCmapTable(t, n);
          break;
        case Fe.Trimmed:
          this.readTrimmedCmapTable(t, n);
          break;
      }
  };
  r.prototype.readAppleCmapTable = function (t, e) {
    var i = this.getTable('cmap');
    this.offset = i.offset + t.offset;
    var n = new Lo();
    n.format = this.readUInt16(this.offset);
    n.length = this.readUInt16(this.offset);
    n.version = this.readUInt16(this.offset);
    if (this.maxMacIndex === null || this.maxMacIndex === void 0) {
      this.maxMacIndex = 0;
    }
    for (var s = 0; s < 256; ++s) {
      var o = new De();
      o.index = this.readByte(this.offset);
      o.width = this.getWidth(o.index);
      o.charCode = s;
      this.macintosh.setValue(s, o);
      this.addGlyph(o, e);
      this.maxMacIndex = Math.max(s, this.maxMacIndex);
    }
  };
  r.prototype.readMicrosoftCmapTable = function (t, e) {
    var i = this.getTable('cmap');
    this.offset = i.offset + t.offset;
    var n = e === bt.Unicode ? this.microsoft : this.macintosh;
    var s = new Oo();
    s.format = this.readUInt16(this.offset);
    s.length = this.readUInt16(this.offset);
    s.version = this.readUInt16(this.offset);
    s.segCountX2 = this.readUInt16(this.offset);
    s.searchRange = this.readUInt16(this.offset);
    s.entrySelector = this.readUInt16(this.offset);
    s.rangeShift = this.readUInt16(this.offset);
    var o = s.segCountX2 / 2;
    s.endCount = this.readUshortArray(o);
    s.reservedPad = this.readUInt16(this.offset);
    s.startCount = this.readUshortArray(o);
    s.idDelta = this.readUshortArray(o);
    s.idRangeOffset = this.readUshortArray(o);
    var a = s.length / 2 - 8 - o * 4;
    s.glyphID = this.readUshortArray(a);
    for (var h = 0, l = 0, u = 0; u < o; u++)
      for (var d = s.startCount[u]; d <= s.endCount[u] && d !== 65535; d++) {
        if (s.idRangeOffset[u] === 0) h = (d + s.idDelta[u]) & 65535;
        else {
          l = u + s.idRangeOffset[u] / 2 - o + d - s.startCount[u];
          if (l >= s.glyphID.length) continue;
          h = (s.glyphID[l] + s.idDelta[u]) & 65535;
        }
        var c = new De();
        c.index = h;
        c.width = this.getWidth(c.index);
        var f = e === bt.Symbol && (d & 65280) === 61440 ? d & 255 : d;
        c.charCode = f;
        n.setValue(f, c);
        this.addGlyph(c, e);
      }
  };
  r.prototype.readTrimmedCmapTable = function (t, e) {
    var i = this.getTable('cmap');
    this.offset = i.offset + t.offset;
    var n = new Ao();
    n.format = this.readUInt16(this.offset);
    n.length = this.readUInt16(this.offset);
    n.version = this.readUInt16(this.offset);
    n.firstCode = this.readUInt16(this.offset);
    n.entryCount = this.readUInt16(this.offset);
    for (var s = 0; s < n.entryCount; ++s) {
      var o = new De();
      o.index = this.readUInt16(this.offset);
      o.width = this.getWidth(o.index);
      o.charCode = s + n.firstCode;
      this.macintosh.setValue(s, o);
      this.addGlyph(o, e);
      this.maxMacIndex = Math.max(s, this.maxMacIndex);
    }
  };
  r.prototype.initializeFontName = function (t) {
    for (var e = 0; e < t.recordsCount; e++) {
      var i = t.nameRecords[e];
      t.nameRecords[e].nameID === 1
        ? (this.metrics.fontFamily = t.nameRecords[e].name)
        : t.nameRecords[e].nameID === 6 && (this.metrics.postScriptName = t.nameRecords[e].name);
      if (
        this.metrics.fontFamily !== null &&
        this.metrics.fontFamily !== void 0 &&
        this.metrics.postScriptName !== null &&
        this.metrics.postScriptName !== void 0
      )
        break;
    }
  };
  r.prototype.getTable = function (t) {
    var e = new an();
    var i;
    if (this.tableDirectory.containsKey(t)) {
      i = this.tableDirectory.getValue(t);
    }
    if (i != null) {
      e = i;
    }
    return e;
  };
  r.prototype.getWidth = function (t) {
    t = t < this.width.length ? t : this.width.length - 1;
    return this.width[t];
  };
  r.prototype.getCmapEncoding = function (t, e) {
    var i = bt.Unknown;
    t == ae.Microsoft && e == ri.Undefined
      ? (i = bt.Symbol)
      : t == ae.Microsoft && e == ri.Unicode
        ? (i = bt.Unicode)
        : t == ae.Macintosh && e == ki.Roman && (i = bt.Macintosh);
    return i;
  };
  r.prototype.addGlyph = function (t, e) {
    var i = null;
    switch (e) {
      case bt.Unicode:
        i = this.microsoftGlyphs;
        break;
      case bt.Macintosh:
      case bt.Symbol:
        i = this.macintoshGlyphs;
        break;
    }
    i.setValue(t.index, t);
  };
  r.prototype.initializeMetrics = function (t, e, i, n, s, o) {
    this.initializeFontName(t);
    for (var a = false, h = 0; h < o.length; h++) {
      var l = o[h];
      var u = this.getCmapEncoding(o[h].platformID, o[h].encodingID);
      if (u === bt.Symbol) {
        a = true;
        break;
      }
    }
    this.metrics.isSymbol = a;
    this.metrics.macStyle = e.macStyle;
    this.metrics.isFixedPitch = s.isFixedPitch !== 0;
    this.metrics.italicAngle = s.italicAngle;
    var d = 1000 / e.unitsPerEm;
    this.metrics.winAscent = n.sTypoAscender * d;
    this.metrics.macAscent = i.ascender * d;
    this.metrics.capHeight = n.sCapHeight !== 0 ? n.sCapHeight : 0.7 * e.unitsPerEm * d;
    this.metrics.winDescent = n.sTypoDescender * d;
    this.metrics.macDescent = i.descender * d;
    this.metrics.leading = (n.sTypoAscender - n.sTypoDescender + n.sTypoLineGap) * d;
    this.metrics.lineGap = Math.ceil(i.lineGap * d);
    var c = e.xMin * d;
    var f = Math.ceil(this.metrics.macAscent + this.metrics.lineGap);
    var g = e.xMax * d;
    var y = this.metrics.macDescent;
    this.metrics.fontBox = new Mi(c, f, g, this.metrics.macDescent);
    this.metrics.stemV = 80;
    this.metrics.widthTable = this.updateWidth();
    this.metrics.contains = this.tableDirectory.containsKey('CFF ');
    this.metrics.subScriptSizeFactor = e.unitsPerEm / n.ySubscriptYSize;
    this.metrics.superscriptSizeFactor = e.unitsPerEm / n.ySuperscriptYSize;
  };
  r.prototype.updateWidth = function () {
    var t = 256;
    var e = [];
    if (this.metrics.isSymbol)
      for (var i = 0; i < 256; i++) {
        var n = this.getGlyph(String.fromCharCode(i));
        e[i] = n.empty ? 0 : n.width;
      }
    else
      for (var s = [], o = '?', a = ' ', i = 0; i < 256; i++) {
        s[0] = i;
        var h = this.getString(s, 0, s.length);
        var l = h.length > 0 ? h[0] : o;
        var n = this.getGlyph(l);
        n.empty ? ((n = this.getGlyph(a)), (e[i] = n.empty ? 0 : n.width)) : (e[i] = n.width);
      }
    return e;
  };
  r.prototype.getDefaultGlyph = function () {
    var t = this.getGlyph(mt.whiteSpace);
    return t;
  };
  r.prototype.getString = function (t, e, i) {
    for (var n = '', s = 0; s < i; s++) n += String.fromCharCode(t[s + e]);
    return n;
  };
  r.prototype.readLocaTable = function (t) {
    var e = this.getTable('loca');
    this.offset = e.offset;
    var i = new Bo();
    var n = null;
    if (t) {
      var s = e.length / 2;
      n = [];
      for (var o = 0; o < s; o++) n[o] = this.readUInt16(this.offset) * 2;
    } else {
      var s = e.length / 4;
      n = [];
      for (var o = 0; o < s; o++) n[o] = this.readUInt32(this.offset);
    }
    i.offsets = n;
    return i;
  };
  r.prototype.updateGlyphChars = function (t, e) {
    if (!t.containsKey(0)) {
      t.setValue(0, 0);
    }
    for (var i = new X(), n = t.keys(), s = 0; s < n.length; s++) i.setValue(n[s], t.getValue(n[s]));
    for (var s = 0; s < n.length; s++) {
      var o = n[s];
      this.processCompositeGlyph(t, n[s], e);
    }
  };
  r.prototype.processCompositeGlyph = function (t, e, i) {
    if (e < i.offsets.length - 1) {
      var n = i.offsets[e];
      if (i.offsets[e] !== i.offsets[e + 1]) {
        var s = this.getTable('glyf');
        this.offset = s.offset + i.offsets[e];
        var o = new Do();
        o.numberOfContours = this.readInt16(this.offset);
        o.xMin = this.readInt16(this.offset);
        o.yMin = this.readInt16(this.offset);
        o.xMax = this.readInt16(this.offset);
        o.yMax = this.readInt16(this.offset);
        if (o.numberOfContours < 0)
          for (var a = 0, h = true; h; ) {
            var l = this.readUInt16(this.offset);
            var u = this.readUInt16(this.offset);
            if (!t.containsKey(u)) {
              t.setValue(u, 0);
            }
            if ((l & le.MoreComponents) === 0) break;
            a = (l & le.Arg1And2AreWords) !== 0 ? 4 : 2;
            (l & le.WeHaveScale) !== 0
              ? (a += 2)
              : (l & le.WeHaveAnXyScale) !== 0
                ? (a += 4)
                : (l & le.WeHaveTwoByTwo) !== 0 && (a += 8);
            this.offset += a;
          }
      }
    }
  };
  r.prototype.generateGlyphTable = function (t, e, i, n) {
    i = [];
    var s = t.keys();
    s.sort(function (m, w) {
      return m - w;
    });
    for (var o = 0, a = 0; a < s.length; a++) {
      var h = s[a];
      if (e.offsets.length > 0) {
        o += e.offsets[s[a] + 1] - e.offsets[s[a]];
      }
    }
    var l = this.align(o);
    n = [];
    for (var a = 0; a < l; a++) n.push(0);
    for (var u = 0, d = 0, c = this.getTable('glyf'), a = 0; a < e.offsets.length; a++) {
      i.push(u);
      if (d < s.length && s[d] === a) {
        ++d;
        i[a] = u;
        var f = e.offsets[a];
        var g = e.offsets[a + 1] - e.offsets[a];
        if (g > 0) {
          this.offset = c.offset + e.offsets[a];
          var y = this.read(n, u, g);
          n = y.buffer;
          u += g;
        }
      }
    }
    return {
      glyphTableSize: o,
      newLocaTable: i,
      newGlyphTable: n,
    };
  };
  r.prototype.updateLocaTable = function (t, e, i) {
    if (t === null) throw new Error('Argument Null Exception : newLocaTable');
    for (var n = e ? t.length * 2 : t.length * 4, s = this.align(n), o = new ln(s), a = 0; a < t.length; a++) {
      var h = t[a];
      e ? ((h /= 2), o.writeShort(h)) : o.writeInt(h);
    }
    return {
      newLocaUpdated: o.data,
      newLocaSize: n,
    };
  };
  r.prototype.align = function (t) {
    return (t + 3) & -4;
  };
  r.prototype.getFontProgram = function (t, e, i, n) {
    if (t === null) throw new Error('Argument Null Exception : newLocaTableOut');
    if (e === null) throw new Error('Argument Null Exception : newGlyphTable');
    this.tableNames;
    var s = this.getFontProgramLength(t, e, 0);
    var o = s.fontProgramLength;
    var a = s.numTables;
    var h = new ln(s.fontProgramLength);
    h.writeInt(65536);
    h.writeShort(s.numTables);
    var l = this.entrySelectors[s.numTables];
    h.writeShort((1 << (this.entrySelectors[s.numTables] & 31)) * 16);
    h.writeShort(this.entrySelectors[s.numTables]);
    h.writeShort((s.numTables - (1 << (this.entrySelectors[s.numTables] & 31))) * 16);
    this.writeCheckSums(h, s.numTables, t, e, i, n);
    this.writeGlyphs(h, t, e);
    return h.data;
  };
  r.prototype.getFontProgramLength = function (t, e, i) {
    if (t === null) throw new Error('Argument Null Exception : newLocaTableOut');
    if (e === null) throw new Error('Argument Null Exception : newGlyphTable');
    i = 2;
    for (var n = this.tableNames, s = 0, o = 0; o < n.length; o++) {
      var a = n[o];
      if (n[o] !== 'glyf' && n[o] !== 'loca') {
        var h = this.getTable(n[o]);
        if (!h.empty) {
          ++i;
          s += this.align(h.length);
        }
      }
    }
    s += t.length;
    s += e.length;
    var l = i * 16 + 12;
    s += l;
    return {
      fontProgramLength: s,
      numTables: i,
    };
  };
  r.prototype.writeCheckSums = function (t, e, i, n, s, o) {
    if (t === null) throw new Error('Argument Null Exception : writer');
    if (i === null) throw new Error('Argument Null Exception : newLocaTableOut');
    if (n === null) throw new Error('Argument Null Exception : newGlyphTable');
    for (var a = this.tableNames, h = e * 16 + 12, l = 0, u = 0; u < a.length; u++) {
      var d = a[u];
      var c = this.getTable(a[u]);
      if (!c.empty) {
        t.writeString(a[u]);
        if (a[u] === 'glyf') {
          var f = this.calculateCheckSum(n);
          t.writeInt(f);
          l = s;
        } else if (a[u] === 'loca') {
          var f = this.calculateCheckSum(i);
          t.writeInt(f);
          l = o;
        } else {
          t.writeInt(c.checksum);
          l = c.length;
        }
        t.writeUInt(h);
        t.writeUInt(l);
        h += this.align(l);
      }
    }
  };
  r.prototype.calculateCheckSum = function (t) {
    if (t === null) throw new Error('Argument Null Exception : bytes');
    for (var e = 0, i = 0, n = 0, s = 0, o = 0, a = 0; a < (t.length + 1) / 4; a++) {
      o += t[e++] & 255;
      s += t[e++] & 255;
      n += t[e++] & 255;
      i += t[e++] & 255;
    }
    var h = i;
    h += n << 8;
    h += s << 16;
    h += o << 24;
    return h;
  };
  r.prototype.writeGlyphs = function (t, e, i) {
    if (t === null) throw new Error('Argument Null Exception : writer');
    if (e === null) throw new Error('Argument Null Exception : newLocaTableOut');
    if (i === null) throw new Error('Argument Null Exception : newGlyphTable');
    for (var n = this.tableNames, s = 0; s < n.length; s++) {
      var o = n[s];
      var a = this.getTable(n[s]);
      if (!a.empty)
        if (n[s] === 'glyf') t.writeBytes(i);
        else if (n[s] === 'loca') t.writeBytes(e);
        else {
          for (var h = this.align(a.length), l = [], u = 0; u < h; u++) l.push(0);
          this.offset = a.offset;
          var d = this.read(l, 0, a.length);
          t.writeBytes(d.buffer);
        }
    }
  };
  r.prototype.setOffset = function (t) {
    this.offset = t;
  };
  r.prototype.createInternals = function () {
    this.metrics = new hn();
    var t = this.readNameTable();
    var e = this.readHeadTable();
    this.bIsLocaShort = e.indexToLocalFormat === 0;
    var i = this.readHorizontalHeaderTable();
    var n = this.readOS2Table();
    var s = this.readPostTable();
    this.width = this.readWidthTable(i.numberOfHMetrics, e.unitsPerEm);
    var o = this.readCmapTable();
    this.initializeMetrics(t, e, i, n, s, o);
  };
  r.prototype.getGlyph = function (t) {
    if (typeof t == 'number') {
      var e = null;
      !this.metrics.isSymbol && this.microsoftGlyphs != null
        ? this.microsoftGlyphs.containsKey(t) && (e = this.microsoftGlyphs.getValue(t))
        : this.metrics.isSymbol &&
          this.macintoshGlyphs != null &&
          this.macintoshGlyphs.containsKey(t) &&
          (e = this.macintoshGlyphs.getValue(t));
      var i = e ?? this.getDefaultGlyph();
      return i;
    } else {
      var n = null;
      var s = t.charCodeAt(0);
      !this.metrics.isSymbol && this.microsoft !== null
        ? this.microsoft.containsKey(s)
          ? ((n = this.microsoft.getValue(s)), s !== mt.whiteSpace.charCodeAt(0) && (this.isFontPresent = true))
          : s !== mt.whiteSpace.charCodeAt(0) && (this.isFontPresent = false)
        : ((this.metrics.isSymbol && this.macintosh !== null) || this.isMacTTF) &&
          (this.maxMacIndex !== 0 ? (s %= this.maxMacIndex + 1) : (s = (s & 65280) === 61440 ? s & 255 : s),
          this.macintosh.containsKey(s) && ((n = this.macintosh.getValue(s)), (this.isFontPresent = true)));
      if (t === mt.whiteSpace && n === null) {
        n = new De();
      }
      var i = n !== null ? n : this.getDefaultGlyph();
      return i;
    }
  };
  r.prototype.getGlyphChars = function (t) {
    if (t == null) throw new Error('Argument Null Exception : chars');
    for (var e = new X(), i = t.keys(), n = 0; n < i.length; n++) {
      var s = i[n];
      var o = this.getGlyph(i[n]);
      if (!o.empty) {
        e.setValue(o.index, i[n].charCodeAt(0));
      }
    }
    return e;
  };
  r.prototype.getAllGlyphs = function () {
    for (var t = [], e = new De(), i = 0, n = 0; n < this.width.length; n++) {
      var s = this.width[n];
      e.index = i;
      e.width = this.width[n];
      t.push(e);
      i++;
    }
    return t;
  };
  r.prototype.readFontProgram = function (t) {
    var e = this.getGlyphChars(t);
    var i = this.readLocaTable(this.bIsLocaShort);
    if (e.size() < t.size()) {
      this.missedGlyphs = t.size() - e.size();
    }
    this.updateGlyphChars(e, i);
    var n = this.generateGlyphTable(e, i, null, null);
    var s = n.glyphTableSize;
    var o = n.newLocaTable;
    var a = n.newGlyphTable;
    var h = this.updateLocaTable(n.newLocaTable, this.bIsLocaShort, null);
    var l = h.newLocaSize;
    var u = h.newLocaUpdated;
    var d = this.getFontProgram(h.newLocaUpdated, n.newGlyphTable, n.glyphTableSize, h.newLocaSize);
    return d;
  };
  r.prototype._readCompactFontFormatTable = function () {
    var t = this.getTable('CFF ');
    var e = t.length;
    var i = t.offset;
    var n = new Array(t.length);
    this.setOffset(t.offset);
    var s = this.read(n, 0, t.length);
    return s.buffer;
  };
  r.prototype.convertString = function (t) {
    if (t === null) throw new Error('Argument Null Exception : text');
    for (var e = '', i = 0; i < t.length; i++) {
      var n = t[i];
      var s = this.getGlyph(t[i]);
      if (!s.empty) {
        e += String.fromCharCode(s.index);
      }
    }
    return e;
  };
  r.prototype.getCharWidth = function (t) {
    var e = this.getGlyph(t);
    e = e.empty ? this.getDefaultGlyph() : e;
    var i = e.empty ? 0 : e.width;
    return i;
  };
  r.prototype.readString = function (t, e) {
    if (e === void 0) return this.readString(t, false);
    var i = '';
    if (e)
      for (var n = 0; n < t; n++) {
        if (n % 2 !== 0) {
          i += String.fromCharCode(this.fontData[this.offset]);
        }
        this.offset += 1;
      }
    else
      for (var n = 0; n < t; n++) {
        i += String.fromCharCode(this.fontData[this.offset]);
        this.offset += 1;
      }
    return i;
  };
  r.prototype.readFixed = function (t) {
    var e = this.readInt16(t);
    var i = this.readInt16(t + 2);
    var n = i / 16384;
    return e + n;
  };
  r.prototype.readInt32 = function (t) {
    var e = this.fontData[t + 3];
    var i = this.fontData[t + 2];
    var n = this.fontData[t + 1];
    var s = this.fontData[t];
    this.offset += 4;
    return this.fontData[t + 3] + (this.fontData[t + 2] << 8) + (this.fontData[t + 1] << 16) + (this.fontData[t] << 24);
  };
  r.prototype.readUInt32 = function (t) {
    var e = this.fontData[t + 3];
    var i = this.fontData[t + 2];
    var n = this.fontData[t + 1];
    var s = this.fontData[t];
    this.offset += 4;
    return this.fontData[t + 3] | (this.fontData[t + 2] << 8) | (this.fontData[t + 1] << 16) | (this.fontData[t] << 24);
  };
  r.prototype.readInt16 = function (t) {
    var e = (this.fontData[t] << 8) + this.fontData[t + 1];
    e = e & 32768 ? e - 65536 : e;
    this.offset += 2;
    return e;
  };
  r.prototype.readInt64 = function (t) {
    var e = this.readInt32(t + 4);
    var i = this.readInt32(t) * 4294967296 + e;
    if (e < 0) {
      i += 4294967296;
    }
    return i;
  };
  r.prototype.readUInt16 = function (t) {
    var e = (this.fontData[t] << 8) | this.fontData[t + 1];
    this.offset += 2;
    return e;
  };
  r.prototype.readUshortArray = function (t) {
    for (var e = [], i = 0; i < t; i++) e[i] = this.readUInt16(this.offset);
    return e;
  };
  r.prototype.readBytes = function (t) {
    for (var e = [], i = 0; i < t; i++) {
      e.push(this.fontData[this.offset]);
      this.offset += 1;
    }
    return e;
  };
  r.prototype.readByte = function (t) {
    var e = this.fontData[t];
    this.offset += 1;
    return this.fontData[t];
  };
  r.prototype.read = function (t, e, i) {
    if (t === null) throw new Error('Argument Null Exception : buffer');
    var n = 0;
    var s = 0;
    do {
      for (var o = 0; o < i - n && this.offset + o < this.fontData.length; o++)
        t[e + o] = this.fontData[this.offset + o];
      s = i - n;
      this.offset += s;
      n += s;
    } while (n < i);
    return {
      buffer: t,
      written: n,
    };
  };
  return r;
})();
var Fo = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var be = (function () {
  function r() {
    this.lineGap = 0;
  }
  r.prototype.getAscent = function (t) {
    var e = this.ascent * 0.001 * this.getSize(t);
    return e;
  };
  r.prototype.getDescent = function (t) {
    var e = this.descent * 0.001 * this.getSize(t);
    return e;
  };
  r.prototype.getLineGap = function (t) {
    var e = this.lineGap * 0.001 * this.getSize(t);
    return e;
  };
  r.prototype.getHeight = function (t) {
    var e;
    this.getDescent(t) < 0
      ? (e = this.getAscent(t) - this.getDescent(t) + this.getLineGap(t))
      : (e = this.getAscent(t) + this.getDescent(t) + this.getLineGap(t));
    return e;
  };
  r.prototype.getSize = function (t) {
    var e = this.size;
    if (t != null)
      switch (t.subSuperScript) {
        case ie.SubScript:
          e /= this.subScriptSizeFactor;
          break;
        case ie.SuperScript:
          e /= this.superscriptSizeFactor;
          break;
      }
    return e;
  };
  r.prototype.clone = function () {
    var t = this;
    t.widthTable = Sn.clone();
    return t;
  };
  Object.defineProperty(r.prototype, 'widthTable', {
    get: function () {
      return this.internalWidthTable;
    },
    set: function (t) {
      this.internalWidthTable = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Sn = (function () {
  function r() {}
  r.clone = function () {
    return null;
  };
  return r;
})();
var ft = (function (r) {
  Fo(t, r);
  function t(e) {
    var i = r() || this;
    if (e == null) throw new Error('ArgumentNullException:widths');
    i.widths = e;
    return i;
  }
  t.prototype.items = function (e) {
    if (e < 0 || e >= this.widths.length)
      throw new Error('ArgumentOutOfRangeException:index, The character is not supported by the font.');
    var i = this.widths[e];
    return this.widths[e];
  };
  Object.defineProperty(t.prototype, 'length', {
    get: function () {
      return this.widths.length;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.clone = function () {
    var e = this;
    e.widths = this.widths;
    return e;
  };
  t.prototype.toArray = function () {
    var e = new Z(this.widths);
    return e;
  };
  return t;
})(Sn);
var Gi = (function () {
  function r(t, e) {
    this.nameString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.dictionaryProperties = new rt();
    this.isCompress = false;
    this.isEmbedFont = false;
    this.cmapPrefix =
      `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap` +
      S.newLine +
      `/CIDSystemInfo << /Registry (Adobe)/Ordering (UCS)/Supplement 0>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange` +
      S.newLine;
    this.cmapEndCodespaceRange = 'endcodespacerange' + S.newLine;
    this.cmapBeginRange = 'beginbfrange' + S.newLine;
    this.cmapEndRange = 'endbfrange' + S.newLine;
    this.cmapSuffix =
      `endbfrange
endcmap
CMapName currentdict /CMap defineresource pop
end end` + S.newLine;
    if (t == null) throw new Error('ArgumentNullException:base64String');
    this.fontSize = e;
    this.fontString = t;
    this.Initialize();
  }
  r.prototype.getCharWidth = function (t) {
    var e = this.ttfReader.getCharWidth(t);
    return e;
  };
  r.prototype.getLineWidth = function (t) {
    for (var e = 0, i = 0, n = t.length; i < n; i++) {
      var s = t[i];
      var o = this.getCharWidth(t[i]);
      e += o;
    }
    return e;
  };
  r.prototype.Initialize = function () {
    var t = new Ee(this.fontString.length);
    t.writeFromBase64String(this.fontString);
    this.fontData = t.internalBuffer;
    this.ttfReader = new To(this.fontData);
    this.ttfMetrics = this.ttfReader.metrics;
  };
  r.prototype.createInternals = function () {
    this.fontDictionary = new q();
    this.fontProgram = new Pt();
    this.cmap = new Pt();
    this.descendantFont = new q();
    this.metrics = new be();
    this.ttfReader.createInternals();
    this.ttfMetrics = this.ttfReader.metrics;
    this.initializeMetrics();
    this.subsetName = this.getFontName();
    this.createDescendantFont();
    this.createCmap();
    this.createFontDictionary();
    this.createFontProgram();
  };
  r.prototype.getInternals = function () {
    return this.fontDictionary;
  };
  r.prototype.initializeMetrics = function () {
    var t = this.ttfReader.metrics;
    this.metrics.ascent = this.ttfReader.metrics.macAscent;
    this.metrics.descent = this.ttfReader.metrics.macDescent;
    this.metrics.height =
      this.ttfReader.metrics.macAscent - this.ttfReader.metrics.macDescent + this.ttfReader.metrics.lineGap;
    this.metrics.name = this.ttfReader.metrics.fontFamily;
    this.metrics.postScriptName = this.ttfReader.metrics.postScriptName;
    this.metrics.size = this.fontSize;
    this.metrics.widthTable = new ft(this.ttfReader.metrics.widthTable);
    this.metrics.lineGap = this.ttfReader.metrics.lineGap;
    this.metrics.subScriptSizeFactor = this.ttfReader.metrics.subScriptSizeFactor;
    this.metrics.superscriptSizeFactor = this.ttfReader.metrics.superscriptSizeFactor;
    this.metrics.isBold = this.ttfReader.metrics.isBold;
  };
  r.prototype.getFontName = function () {
    for (var t = '', e, i = 0; i < 6; i++) {
      var n = Math.floor(Math.random() * 26) + 0;
      t += this.nameString[n];
    }
    t += '+';
    t += this.ttfReader.metrics.postScriptName;
    e = t.toString();
    e = this.formatName(e);
    return e;
  };
  r.prototype.formatName = function (t) {
    var e = t.replace('(', '#28');
    e = e.replace(')', '#29');
    e = e.replace('[', '#5B');
    e = e.replace(']', '#5D');
    e = e.replace('<', '#3C');
    e = e.replace('>', '#3E');
    e = e.replace('{', '#7B');
    e = e.replace('}', '#7D');
    e = e.replace('/', '#2F');
    e = e.replace('%', '#25');
    return e.replace(' ', '#20');
  };
  r.prototype.createDescendantFont = function () {
    this.descendantFont.isResource = true;
    this.descendantFont.descendantFontBeginSave = new Ws(this);
    this.descendantFont.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.font));
    this.ttfReader && this.ttfReader._isOpenTypeFont
      ? this.descendantFont.items.setValue(
          this.dictionaryProperties.subtype,
          new k(this.dictionaryProperties.cIDFontType0),
        )
      : this.descendantFont.items.setValue(
          this.dictionaryProperties.subtype,
          new k(this.dictionaryProperties.cIDFontType2),
        );
    this.descendantFont.items.setValue(this.dictionaryProperties.baseFont, new k(this.subsetName));
    this.descendantFont.items.setValue(
      this.dictionaryProperties.cIDToGIDMap,
      new k(this.dictionaryProperties.identity),
    );
    this.descendantFont.items.setValue(this.dictionaryProperties.dw, new E(1000));
    this.fontDescriptor = this.createFontDescriptor();
    this.descendantFont.items.setValue(this.dictionaryProperties.fontDescriptor, new _(this.fontDescriptor));
    var t = this.createSystemInfo();
    this.descendantFont.items.setValue(this.dictionaryProperties.cIDSystemInfo, t);
  };
  r.prototype.createFontDescriptor = function () {
    var t = new q();
    var e = this.ttfReader.metrics;
    t.isResource = true;
    t.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.fontDescriptor));
    t.items.setValue(this.dictionaryProperties.fontName, new k(this.subsetName));
    t.items.setValue(this.dictionaryProperties.flags, new E(this.getDescriptorFlags()));
    t.items.setValue(this.dictionaryProperties.fontBBox, Z.fromRectangle(this.getBoundBox()));
    t.items.setValue(this.dictionaryProperties.missingWidth, new E(this.ttfReader.metrics.widthTable[32]));
    t.items.setValue(this.dictionaryProperties.stemV, new E(this.ttfReader.metrics.stemV));
    t.items.setValue(this.dictionaryProperties.italicAngle, new E(this.ttfReader.metrics.italicAngle));
    t.items.setValue(this.dictionaryProperties.capHeight, new E(this.ttfReader.metrics.capHeight));
    t.items.setValue(this.dictionaryProperties.ascent, new E(this.ttfReader.metrics.winAscent));
    t.items.setValue(this.dictionaryProperties.descent, new E(this.ttfReader.metrics.winDescent));
    t.items.setValue(this.dictionaryProperties.leading, new E(this.ttfReader.metrics.leading));
    t.items.setValue(this.dictionaryProperties.avgWidth, new E(this.ttfReader.metrics.widthTable[32]));
    this.ttfReader.metrics.contains
      ? (t.items.setValue(this.dictionaryProperties.fontFile3, new _(this.fontProgram)),
        this.fontProgram.items.setValue(
          this.dictionaryProperties.subtype,
          new k(this.dictionaryProperties.cIDFontType0C),
        ))
      : t.items.setValue(this.dictionaryProperties.fontFile2, new _(this.fontProgram));
    t.items.setValue(this.dictionaryProperties.maxWidth, new E(this.ttfReader.metrics.widthTable[32]));
    t.items.setValue(this.dictionaryProperties.xHeight, new E(0));
    t.items.setValue(this.dictionaryProperties.stemH, new E(0));
    return t;
  };
  r.prototype.createCmap = function () {
    this.cmap.cmapBeginSave = new $s(this);
  };
  r.prototype.createFontDictionary = function () {
    this.fontDictionary.isResource = true;
    this.fontDictionary.fontDictionaryBeginSave = new Us(this);
    this.fontDictionary.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.font));
    this.fontDictionary.items.setValue(this.dictionaryProperties.baseFont, new k(this.subsetName));
    this.fontDictionary.items.setValue(this.dictionaryProperties.subtype, new k(this.dictionaryProperties.type0));
    this.fontDictionary.items.setValue(this.dictionaryProperties.encoding, new k(this.dictionaryProperties.identityH));
    var t = new Z();
    var e = new _(this.descendantFont);
    t.isFont = true;
    t.add(e);
    this.fontDictionary.items.setValue(this.dictionaryProperties.descendantFonts, t);
  };
  r.prototype.createFontProgram = function () {
    this.fontProgram.fontProgramBeginSave = new Ys(this);
  };
  r.prototype.createSystemInfo = function () {
    var t = new q();
    t.items.setValue(this.dictionaryProperties.registry, new dt('Adobe'));
    t.items.setValue(this.dictionaryProperties.ordering, new dt(this.dictionaryProperties.identity));
    t.items.setValue(this.dictionaryProperties.supplement, new E(0));
    return t;
  };
  r.prototype.descendantFontBeginSave = function () {
    if (this.usedChars !== null && this.usedChars !== void 0 && this.usedChars.size() > 0) {
      var t = this.getDescendantWidth();
      if (t !== null) {
        this.descendantFont.items.setValue(this.dictionaryProperties.w, t);
      }
    }
  };
  r.prototype.cmapBeginSave = function () {
    this.generateCmap();
  };
  r.prototype.fontDictionaryBeginSave = function () {
    if (
      this.usedChars !== null &&
      this.usedChars !== void 0 &&
      this.usedChars.size() > 0 &&
      !this.fontDictionary.containsKey(this.dictionaryProperties.toUnicode)
    ) {
      this.fontDictionary.items.setValue(this.dictionaryProperties.toUnicode, new _(this.cmap));
    }
  };
  r.prototype.fontProgramBeginSave = function () {
    this.isCompress = true;
    this.generateFontProgram();
  };
  r.prototype.getDescendantWidth = function () {
    var t = new Z();
    if (this.usedChars !== null && this.usedChars !== void 0 && this.usedChars.size() > 0) {
      for (var e = [], i = this.usedChars.keys(), n = 0; n < i.length; n++) {
        var s = i[n];
        var o = this.ttfReader.getGlyph(i[n]);
        if (!o.empty) {
          e.push(o);
        }
      }
      e.sort(function (d, c) {
        return d.index - c.index;
      });
      for (var a = 0, h = 0, l = false, u = new Z(), n = 0; n < e.length; n++) {
        var o = e[n];
        if (!l) {
          l = true;
          a = e[n].index;
          h = e[n].index - 1;
        }
        if ((h + 1 !== e[n].index || n + 1 === e.length) && e.length > 1) {
          t.add(new E(a));
          if (n !== 0) {
            t.add(u);
          }
          a = e[n].index;
          u = new Z();
        }
        u.add(new E(e[n].width));
        if (n + 1 === e.length) {
          t.add(new E(a));
          t.add(u);
        }
        h = e[n].index;
      }
    }
    return t;
  };
  r.prototype.generateCmap = function () {
    if (this.usedChars !== null && this.usedChars !== void 0 && this.usedChars.size() > 0) {
      var t = this.ttfReader.getGlyphChars(this.usedChars);
      if (t.size() > 0) {
        var e = t.keys().sort();
        var i = e[0];
        var n = e[e.length - 1];
        var s = this.toHexString(e[0], false) + this.toHexString(e[e.length - 1], false) + S.newLine;
        var o = '';
        o += this.cmapPrefix;
        o += s;
        o += this.cmapEndCodespaceRange;
        for (var a = 0, h = 0; h < e.length; h++) {
          if (a === 0) {
            if (h !== 0) {
              o += this.cmapEndRange;
            }
            a = Math.min(100, e.length - h);
            o += a;
            o += S.whiteSpace;
            o += this.cmapBeginRange;
          }
          a -= 1;
          var l = e[h];
          o +=
            this.toHexString(e[h], true) +
            this.toHexString(e[h], true) +
            this.toHexString(t.getValue(e[h]), true) +
            `
`;
        }
        o += this.cmapSuffix;
        this.cmap.clearStream();
        this.cmap.isResource = true;
        this.cmap.write(o);
      }
    }
  };
  r.prototype.generateFontProgram = function () {
    this.usedChars = this.usedChars === null || this.usedChars === void 0 ? new X() : this.usedChars;
    this.ttfReader.setOffset(0);
    if (this.ttfReader.metrics.contains && this.ttfReader._isOpenTypeFont) {
      var t = this.ttfReader._readCompactFontFormatTable();
      this.fontProgram.clearStream();
      this.fontProgram.isResource = true;
      this.fontProgram.writeBytes(t);
    } else {
      var e = this.ttfReader.readFontProgram(this.usedChars);
      this.fontProgram.clearStream();
      this.fontProgram.isResource = true;
      this.fontProgram.writeBytes(e);
    }
  };
  r.prototype.getDescriptorFlags = function () {
    var t = 0;
    var e = this.ttfReader.metrics;
    if (this.ttfReader.metrics.isFixedPitch) {
      t |= he.FixedPitch;
    }
    this.ttfReader.metrics.isSymbol ? (t |= he.Symbolic) : (t |= he.Nonsymbolic);
    if (this.ttfReader.metrics.isItalic) {
      t |= he.Italic;
    }
    if (this.ttfReader.metrics.isBold) {
      t |= he.ForceBold;
    }
    return t;
  };
  r.prototype.getBoundBox = function () {
    var t = this.ttfReader.metrics.fontBox;
    var e = Math.abs(this.ttfReader.metrics.fontBox.right - this.ttfReader.metrics.fontBox.left);
    var i = Math.abs(this.ttfReader.metrics.fontBox.top - this.ttfReader.metrics.fontBox.bottom);
    var n = new I(this.ttfReader.metrics.fontBox.left, this.ttfReader.metrics.fontBox.bottom, e, i);
    return n;
  };
  r.prototype.toHexString = function (t, e) {
    var i = t.toString(16);
    if (e) {
      i = i.toUpperCase();
    }
    return '<0000'.substring(0, 5 - i.length) + i + '>';
  };
  r.prototype.setSymbols = function (t) {
    if (t === null) throw new Error('Argument Null Exception : text');
    if (this.usedChars === null || this.usedChars === void 0) {
      this.usedChars = new X();
    }
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      this.usedChars.setValue(t[e], '\0');
    }
    if (this.isEmbedFont === false) {
      this.getDescendantWidth();
    }
  };
  return r;
})();
var un = (function () {
  function r() {
    this.arabicCharTable = [
      ['ء', 'ﺀ'],
      ['آ', 'ﺁ', 'ﺂ'],
      ['أ', 'ﺃ', 'ﺄ'],
      ['ؤ', 'ﺅ', 'ﺆ'],
      ['إ', 'ﺇ', 'ﺈ'],
      ['ئ', 'ﺉ', 'ﺊ', 'ﺋ', 'ﺌ'],
      ['ا', 'ﺍ', 'ﺎ'],
      ['ب', 'ﺏ', 'ﺐ', 'ﺑ', 'ﺒ'],
      ['ة', 'ﺓ', 'ﺔ'],
      ['ت', 'ﺕ', 'ﺖ', 'ﺗ', 'ﺘ'],
      ['ث', 'ﺙ', 'ﺚ', 'ﺛ', 'ﺜ'],
      ['ج', 'ﺝ', 'ﺞ', 'ﺟ', 'ﺠ'],
      ['ح', 'ﺡ', 'ﺢ', 'ﺣ', 'ﺤ'],
      ['خ', 'ﺥ', 'ﺦ', 'ﺧ', 'ﺨ'],
      ['د', 'ﺩ', 'ﺪ'],
      ['ذ', 'ﺫ', 'ﺬ'],
      ['ر', 'ﺭ', 'ﺮ'],
      ['ز', 'ﺯ', 'ﺰ'],
      ['س', 'ﺱ', 'ﺲ', 'ﺳ', 'ﺴ'],
      ['ش', 'ﺵ', 'ﺶ', 'ﺷ', 'ﺸ'],
      ['ص', 'ﺹ', 'ﺺ', 'ﺻ', 'ﺼ'],
      ['ض', 'ﺽ', 'ﺾ', 'ﺿ', 'ﻀ'],
      ['ط', 'ﻁ', 'ﻂ', 'ﻃ', 'ﻄ'],
      ['ظ', 'ﻅ', 'ﻆ', 'ﻇ', 'ﻈ'],
      ['ع', 'ﻉ', 'ﻊ', 'ﻋ', 'ﻌ'],
      ['غ', 'ﻍ', 'ﻎ', 'ﻏ', 'ﻐ'],
      ['ـ', 'ـ', 'ـ', 'ـ', 'ـ'],
      ['ف', 'ﻑ', 'ﻒ', 'ﻓ', 'ﻔ'],
      ['ق', 'ﻕ', 'ﻖ', 'ﻗ', 'ﻘ'],
      ['ك', 'ﻙ', 'ﻚ', 'ﻛ', 'ﻜ'],
      ['ل', 'ﻝ', 'ﻞ', 'ﻟ', 'ﻠ'],
      ['م', 'ﻡ', 'ﻢ', 'ﻣ', 'ﻤ'],
      ['ن', 'ﻥ', 'ﻦ', 'ﻧ', 'ﻨ'],
      ['ه', 'ﻩ', 'ﻪ', 'ﻫ', 'ﻬ'],
      ['و', 'ﻭ', 'ﻮ'],
      ['ى', 'ﻯ', 'ﻰ', 'ﯨ', 'ﯩ'],
      ['ي', 'ﻱ', 'ﻲ', 'ﻳ', 'ﻴ'],
      ['ٱ', 'ﭐ', 'ﭑ'],
      ['ٹ', 'ﭦ', 'ﭧ', 'ﭨ', 'ﭩ'],
      ['ٺ', 'ﭞ', 'ﭟ', 'ﭠ', 'ﭡ'],
      ['ٻ', 'ﭒ', 'ﭓ', 'ﭔ', 'ﭕ'],
      ['پ', 'ﭖ', 'ﭗ', 'ﭘ', 'ﭙ'],
      ['ٿ', 'ﭢ', 'ﭣ', 'ﭤ', 'ﭥ'],
      ['ڀ', 'ﭚ', 'ﭛ', 'ﭜ', 'ﭝ'],
      ['ڃ', 'ﭶ', 'ﭷ', 'ﭸ', 'ﭹ'],
      ['ڄ', 'ﭲ', 'ﭳ', 'ﭴ', 'ﭵ'],
      ['چ', 'ﭺ', 'ﭻ', 'ﭼ', 'ﭽ'],
      ['ڇ', 'ﭾ', 'ﭿ', 'ﮀ', 'ﮁ'],
      ['ڈ', 'ﮈ', 'ﮉ'],
      ['ڌ', 'ﮄ', 'ﮅ'],
      ['ڍ', 'ﮂ', 'ﮃ'],
      ['ڎ', 'ﮆ', 'ﮇ'],
      ['ڑ', 'ﮌ', 'ﮍ'],
      ['ژ', 'ﮊ', 'ﮋ'],
      ['ڤ', 'ﭪ', 'ﭫ', 'ﭬ', 'ﭭ'],
      ['ڦ', 'ﭮ', 'ﭯ', 'ﭰ', 'ﭱ'],
      ['ک', 'ﮎ', 'ﮏ', 'ﮐ', 'ﮑ'],
      ['ڭ', 'ﯓ', 'ﯔ', 'ﯕ', 'ﯖ'],
      ['گ', 'ﮒ', 'ﮓ', 'ﮔ', 'ﮕ'],
      ['ڱ', 'ﮚ', 'ﮛ', 'ﮜ', 'ﮝ'],
      ['ڳ', 'ﮖ', 'ﮗ', 'ﮘ', 'ﮙ'],
      ['ں', 'ﮞ', 'ﮟ'],
      ['ڻ', 'ﮠ', 'ﮡ', 'ﮢ', 'ﮣ'],
      ['ھ', 'ﮪ', 'ﮫ', 'ﮬ', 'ﮭ'],
      ['ۀ', 'ﮤ', 'ﮥ'],
      ['ہ', 'ﮦ', 'ﮧ', 'ﮨ', 'ﮩ'],
      ['ۅ', 'ﯠ', 'ﯡ'],
      ['ۆ', 'ﯙ', 'ﯚ'],
      ['ۇ', 'ﯗ', 'ﯘ'],
      ['ۈ', 'ﯛ', 'ﯜ'],
      ['ۉ', 'ﯢ', 'ﯣ'],
      ['ۋ', 'ﯞ', 'ﯟ'],
      ['ی', 'ﯼ', 'ﯽ', 'ﯾ', 'ﯿ'],
      ['ې', 'ﯤ', 'ﯥ', 'ﯦ', 'ﯧ'],
      ['ے', 'ﮮ', 'ﮯ'],
      ['ۓ', 'ﮰ', 'ﮱ'],
    ];
    this.alef = 'ا';
    this.alefHamza = 'أ';
    this.alefHamzaBelow = 'إ';
    this.alefMadda = 'آ';
    this.lam = 'ل';
    this.hamza = 'ء';
    this.zeroWidthJoiner = '‍';
    this.hamzaAbove = 'ٔ';
    this.hamzaBelow = 'ٕ';
    this.wawHamza = 'ؤ';
    this.yehHamza = 'ئ';
    this.waw = 'و';
    this.alefMaksura = 'ى';
    this.yeh = 'ي';
    this.farsiYeh = 'ی';
    this.shadda = 'ّ';
    this.madda = 'ٓ';
    this.lwa = 'ﻻ';
    this.lwawh = 'ﻷ';
    this.lwawhb = 'ﻹ';
    this.lwawm = 'ﻵ';
    this.bwhb = 'ۓ';
    this.fathatan = 'ً';
    this.superScriptalef = 'ٰ';
    this.vowel = 1;
    this.arabicMapTable = new X();
    for (var t = 0; t < this.arabicCharTable.length; t++)
      this.arabicMapTable.setValue(this.arabicCharTable[t][0], this.arabicCharTable[t]);
  }
  r.prototype.getCharacterShape = function (t, e) {
    if (t >= this.hamza && t <= this.bwhb) {
      var i = [];
      if (this.arabicMapTable.getValue(t)) {
        i = this.arabicMapTable.getValue(t);
        return i[e + 1];
      }
    } else if (t >= this.lwawm && t <= this.lwa) return t;
    return t;
  };
  r.prototype.shape = function (t, e) {
    for (var i = '', n = '', s = 0; s < t.length; s++) {
      var o = t[s];
      if (t[s] >= '\u0600' && t[s] <= 'ۿ') n = n + t[s];
      else {
        if (n.length > 0) {
          var a = this.doShape(n.toString(), 0);
          i = i + a;
          n = '';
        }
        i = i + t[s];
      }
    }
    if (n.length > 0) {
      var a = this.doShape(n.toString(), 0);
      i = i + a;
    }
    return i.toString();
  };
  r.prototype.doShape = function (t, e) {
    for (var i = '', n = 0, s = 0, o = 0, a = '', h = new Ii(), l = new Ii(); o < t.length; ) {
      a = t[o++];
      n = this.ligature(a, l);
      if (n === 0) {
        var u = this.getShapeCount(a);
        s = u === 1 ? 0 : 2;
        if (h.Shapes > 2) {
          s += 1;
        }
        s = s % l.Shapes;
        l.Value = this.getCharacterShape(l.Value, s);
        i = this.append(i, h, e);
        h = l;
        l = new Ii();
        l.Value = a;
        l.Shapes = u;
        l.Ligature++;
      }
    }
    s = h.Shapes > 2 ? 1 : 0;
    s = s % l.Shapes;
    l.Value = this.getCharacterShape(l.Value, s);
    i = this.append(i, h, e);
    i = this.append(i, l, e);
    return i.toString();
  };
  r.prototype.append = function (t, e, i) {
    if (e.Value !== '') {
      t = t + e.Value;
      e.Ligature -= 1;
      if (e.Type !== '') {
        if ((i & this.vowel) === 0) {
          t = t + e.Type;
        }
        e.Ligature -= 1;
      }
      if (e.vowel !== '') {
        if ((i & this.vowel) === 0) {
          t = t + e.vowel;
        }
        e.Ligature -= 1;
      }
    }
    return t;
  };
  r.prototype.ligature = function (t, e) {
    if (e.Value !== '') {
      var i = 0;
      if ((t >= this.fathatan && t <= this.hamzaBelow) || t === this.superScriptalef) {
        i = 1;
        if (e.vowel !== '' && t !== this.shadda) {
          i = 2;
        }
        if (t === this.shadda)
          if (e.Type == null) e.Type = this.shadda;
          else return 0;
        else
          t === this.hamzaBelow
            ? e.Value === this.alef
              ? ((e.Value = this.alefHamzaBelow), (i = 2))
              : t === this.lwa
                ? ((e.Value = this.lwawhb), (i = 2))
                : (e.Type = this.hamzaBelow)
            : t === this.hamzaAbove
              ? e.Value === this.alef
                ? ((e.Value = this.alefHamza), (i = 2))
                : e.Value === this.lwa
                  ? ((e.Value = this.lwawh), (i = 2))
                  : e.Value === this.waw
                    ? ((e.Value = this.wawHamza), (i = 2))
                    : e.Value === this.yeh || e.Value === this.alefMaksura || e.Value === this.farsiYeh
                      ? ((e.Value = this.yehHamza), (i = 2))
                      : (e.Type = this.hamzaAbove)
              : t === this.madda
                ? e.Value === this.alef && ((e.Value = this.alefMadda), (i = 2))
                : (e.vowel = t);
        if (i === 1) {
          e.Ligature++;
        }
        return i;
      }
      return e.vowel !== ''
        ? 0
        : (e.Value === this.lam &&
            (t === this.alef
              ? ((e.Value = this.lwa), (e.Shapes = 2), (i = 3))
              : t === this.alefHamza
                ? ((e.Value = this.lwawh), (e.Shapes = 2), (i = 3))
                : t === this.alefHamzaBelow
                  ? ((e.Value = this.lwawhb), (e.Shapes = 2), (i = 3))
                  : t === this.alefMadda && ((e.Value = this.lwawm), (e.Shapes = 2), (i = 3))),
          i);
    } else return 0;
  };
  r.prototype.getShapeCount = function (t) {
    if (
      t >= this.hamza &&
      t <= this.bwhb &&
      !((t >= this.fathatan && t <= this.hamzaBelow) || t === this.superScriptalef)
    ) {
      var e = [];
      if (this.arabicMapTable.getValue(t)) {
        e = this.arabicMapTable.getValue(t);
        return e.length - 1;
      }
    } else if (t === this.zeroWidthJoiner) return 4;
    return 1;
  };
  return r;
})();
var Ii = (function () {
  function r() {
    this.shapeValue = '';
    this.shapeType = '';
    this.shapeVowel = '';
    this.shapeLigature = 0;
    this.shapeShapes = 1;
  }
  Object.defineProperty(r.prototype, 'Value', {
    get: function () {
      return this.shapeValue;
    },
    set: function (t) {
      this.shapeValue = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'Type', {
    get: function () {
      return this.shapeType;
    },
    set: function (t) {
      this.shapeType = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'vowel', {
    get: function () {
      return this.shapeVowel;
    },
    set: function (t) {
      this.shapeVowel = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'Ligature', {
    get: function () {
      return this.shapeLigature;
    },
    set: function (t) {
      this.shapeLigature = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'Shapes', {
    get: function () {
      return this.shapeShapes;
    },
    set: function (t) {
      this.shapeShapes = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Eo = (function () {
  function r() {
    this.indexes = [];
    this.indexLevels = [];
    this.mirroringShapeCharacters = new X();
    this.update();
  }
  r.prototype.doMirrorShaping = function (t) {
    for (var e = [], i = 0; i < t.length; i++)
      (this.indexLevels[i] & 1) === 1 && this.mirroringShapeCharacters.containsKey(t[i].charCodeAt(0))
        ? (e[i] = String.fromCharCode(this.mirroringShapeCharacters.getValue(t[i].charCodeAt(0))))
        : (e[i] = t[i].toString());
    for (var n = '', s = 0; s < e.length; s++) n = n + e[s];
    return n;
  };
  r.prototype.getLogicalToVisualString = function (t, e) {
    var i = new Mo();
    this.indexLevels = i.getVisualOrder(t, e);
    this.setDefaultIndexLevel();
    this.doOrder(0, this.indexLevels.length - 1);
    for (var n = this.doMirrorShaping(t), s = '', o = 0; o < this.indexes.length; o++) {
      var a = this.indexes[o];
      s += n[this.indexes[o]];
    }
    return s.toString();
  };
  r.prototype.setDefaultIndexLevel = function () {
    for (var t = 0; t < this.indexLevels.length; t++) this.indexes[t] = t;
  };
  r.prototype.doOrder = function (t, e) {
    for (var i = this.indexLevels[t], n = i, s = i, o = i, a = t + 1; a <= e; ++a) {
      var h = this.indexLevels[a];
      this.indexLevels[a] > i ? (i = this.indexLevels[a]) : this.indexLevels[a] < n && (n = this.indexLevels[a]);
      s &= this.indexLevels[a];
      o |= this.indexLevels[a];
    }
    if ((o & 1) !== 0) {
      if ((s & 1) === 1) {
        this.reArrange(t, e + 1);
        return;
      }
      for (n |= 1; i >= n; ) {
        for (var l = t; ; ) {
          for (; l <= e && !(this.indexLevels[l] >= i); ) l += 1;
          if (l > e) break;
          for (var u = l + 1; u <= e && !(this.indexLevels[u] < i); ) u += 1;
          this.reArrange(l, u);
          l = u + 1;
        }
        i -= 1;
      }
    }
  };
  r.prototype.reArrange = function (t, e) {
    var i = (t + e) / 2;
    for (--e; t < i; ++t, --e) {
      var n = this.indexes[t];
      this.indexes[t] = this.indexes[e];
      this.indexes[e] = this.indexes[t];
    }
  };
  r.prototype.update = function () {
    this.mirroringShapeCharacters.setValue(40, 41);
    this.mirroringShapeCharacters.setValue(41, 40);
    this.mirroringShapeCharacters.setValue(60, 62);
    this.mirroringShapeCharacters.setValue(62, 60);
    this.mirroringShapeCharacters.setValue(91, 93);
    this.mirroringShapeCharacters.setValue(93, 91);
    this.mirroringShapeCharacters.setValue(123, 125);
    this.mirroringShapeCharacters.setValue(125, 123);
    this.mirroringShapeCharacters.setValue(171, 187);
    this.mirroringShapeCharacters.setValue(187, 171);
    this.mirroringShapeCharacters.setValue(8249, 8250);
    this.mirroringShapeCharacters.setValue(8250, 8249);
    this.mirroringShapeCharacters.setValue(8261, 8262);
    this.mirroringShapeCharacters.setValue(8262, 8261);
    this.mirroringShapeCharacters.setValue(8317, 8318);
    this.mirroringShapeCharacters.setValue(8318, 8317);
    this.mirroringShapeCharacters.setValue(8333, 8334);
    this.mirroringShapeCharacters.setValue(8334, 8333);
    this.mirroringShapeCharacters.setValue(8712, 8715);
    this.mirroringShapeCharacters.setValue(8713, 8716);
    this.mirroringShapeCharacters.setValue(8714, 8717);
    this.mirroringShapeCharacters.setValue(8715, 8712);
    this.mirroringShapeCharacters.setValue(8716, 8713);
    this.mirroringShapeCharacters.setValue(8717, 8714);
    this.mirroringShapeCharacters.setValue(8725, 10741);
    this.mirroringShapeCharacters.setValue(8764, 8765);
    this.mirroringShapeCharacters.setValue(8765, 8764);
    this.mirroringShapeCharacters.setValue(8771, 8909);
    this.mirroringShapeCharacters.setValue(8786, 8787);
    this.mirroringShapeCharacters.setValue(8787, 8786);
    this.mirroringShapeCharacters.setValue(8788, 8789);
    this.mirroringShapeCharacters.setValue(8789, 8788);
    this.mirroringShapeCharacters.setValue(8804, 8805);
    this.mirroringShapeCharacters.setValue(8805, 8804);
    this.mirroringShapeCharacters.setValue(8806, 8807);
    this.mirroringShapeCharacters.setValue(8807, 8806);
    this.mirroringShapeCharacters.setValue(8808, 8809);
    this.mirroringShapeCharacters.setValue(8809, 8808);
    this.mirroringShapeCharacters.setValue(8810, 8811);
    this.mirroringShapeCharacters.setValue(8811, 8810);
    this.mirroringShapeCharacters.setValue(8814, 8815);
    this.mirroringShapeCharacters.setValue(8815, 8814);
    this.mirroringShapeCharacters.setValue(8816, 8817);
    this.mirroringShapeCharacters.setValue(8817, 8816);
    this.mirroringShapeCharacters.setValue(8818, 8819);
    this.mirroringShapeCharacters.setValue(8819, 8818);
    this.mirroringShapeCharacters.setValue(8820, 8821);
    this.mirroringShapeCharacters.setValue(8821, 8820);
    this.mirroringShapeCharacters.setValue(8822, 8823);
    this.mirroringShapeCharacters.setValue(8823, 8822);
    this.mirroringShapeCharacters.setValue(8824, 8825);
    this.mirroringShapeCharacters.setValue(8825, 8824);
    this.mirroringShapeCharacters.setValue(8826, 8827);
    this.mirroringShapeCharacters.setValue(8827, 8826);
    this.mirroringShapeCharacters.setValue(8828, 8829);
    this.mirroringShapeCharacters.setValue(8829, 8828);
    this.mirroringShapeCharacters.setValue(8830, 8831);
    this.mirroringShapeCharacters.setValue(8831, 8830);
    this.mirroringShapeCharacters.setValue(8832, 8833);
    this.mirroringShapeCharacters.setValue(8833, 8832);
    this.mirroringShapeCharacters.setValue(8834, 8835);
    this.mirroringShapeCharacters.setValue(8835, 8834);
    this.mirroringShapeCharacters.setValue(8836, 8837);
    this.mirroringShapeCharacters.setValue(8837, 8836);
    this.mirroringShapeCharacters.setValue(8838, 8839);
    this.mirroringShapeCharacters.setValue(8839, 8838);
    this.mirroringShapeCharacters.setValue(8840, 8841);
    this.mirroringShapeCharacters.setValue(8841, 8840);
    this.mirroringShapeCharacters.setValue(8842, 8843);
    this.mirroringShapeCharacters.setValue(8843, 8842);
    this.mirroringShapeCharacters.setValue(8847, 8848);
    this.mirroringShapeCharacters.setValue(8848, 8847);
    this.mirroringShapeCharacters.setValue(8849, 8850);
    this.mirroringShapeCharacters.setValue(8850, 8849);
    this.mirroringShapeCharacters.setValue(8856, 10680);
    this.mirroringShapeCharacters.setValue(8866, 8867);
    this.mirroringShapeCharacters.setValue(8867, 8866);
    this.mirroringShapeCharacters.setValue(8870, 10974);
    this.mirroringShapeCharacters.setValue(8872, 10980);
    this.mirroringShapeCharacters.setValue(8873, 10979);
    this.mirroringShapeCharacters.setValue(8875, 10981);
    this.mirroringShapeCharacters.setValue(8880, 8881);
    this.mirroringShapeCharacters.setValue(8881, 8880);
    this.mirroringShapeCharacters.setValue(8882, 8883);
    this.mirroringShapeCharacters.setValue(8883, 8882);
    this.mirroringShapeCharacters.setValue(8884, 8885);
    this.mirroringShapeCharacters.setValue(8885, 8884);
    this.mirroringShapeCharacters.setValue(8886, 8887);
    this.mirroringShapeCharacters.setValue(8887, 8886);
    this.mirroringShapeCharacters.setValue(8905, 8906);
    this.mirroringShapeCharacters.setValue(8906, 8905);
    this.mirroringShapeCharacters.setValue(8907, 8908);
    this.mirroringShapeCharacters.setValue(8908, 8907);
    this.mirroringShapeCharacters.setValue(8909, 8771);
    this.mirroringShapeCharacters.setValue(8912, 8913);
    this.mirroringShapeCharacters.setValue(8913, 8912);
    this.mirroringShapeCharacters.setValue(8918, 8919);
    this.mirroringShapeCharacters.setValue(8919, 8918);
    this.mirroringShapeCharacters.setValue(8920, 8921);
    this.mirroringShapeCharacters.setValue(8921, 8920);
    this.mirroringShapeCharacters.setValue(8922, 8923);
    this.mirroringShapeCharacters.setValue(8923, 8922);
    this.mirroringShapeCharacters.setValue(8924, 8925);
    this.mirroringShapeCharacters.setValue(8925, 8924);
    this.mirroringShapeCharacters.setValue(8926, 8927);
    this.mirroringShapeCharacters.setValue(8927, 8926);
    this.mirroringShapeCharacters.setValue(8928, 8929);
    this.mirroringShapeCharacters.setValue(8929, 8928);
    this.mirroringShapeCharacters.setValue(8930, 8931);
    this.mirroringShapeCharacters.setValue(8931, 8930);
    this.mirroringShapeCharacters.setValue(8932, 8933);
    this.mirroringShapeCharacters.setValue(8933, 8932);
    this.mirroringShapeCharacters.setValue(8934, 8935);
    this.mirroringShapeCharacters.setValue(8935, 8934);
    this.mirroringShapeCharacters.setValue(8936, 8937);
    this.mirroringShapeCharacters.setValue(8937, 8936);
    this.mirroringShapeCharacters.setValue(8938, 8939);
    this.mirroringShapeCharacters.setValue(8939, 8938);
    this.mirroringShapeCharacters.setValue(8940, 8941);
    this.mirroringShapeCharacters.setValue(8941, 8940);
    this.mirroringShapeCharacters.setValue(8944, 8945);
    this.mirroringShapeCharacters.setValue(8945, 8944);
    this.mirroringShapeCharacters.setValue(8946, 8954);
    this.mirroringShapeCharacters.setValue(8947, 8955);
    this.mirroringShapeCharacters.setValue(8948, 8956);
    this.mirroringShapeCharacters.setValue(8950, 8957);
    this.mirroringShapeCharacters.setValue(8951, 8958);
    this.mirroringShapeCharacters.setValue(8954, 8946);
    this.mirroringShapeCharacters.setValue(8955, 8947);
    this.mirroringShapeCharacters.setValue(8956, 8948);
    this.mirroringShapeCharacters.setValue(8957, 8950);
    this.mirroringShapeCharacters.setValue(8958, 8951);
    this.mirroringShapeCharacters.setValue(8968, 8969);
    this.mirroringShapeCharacters.setValue(8969, 8968);
    this.mirroringShapeCharacters.setValue(8970, 8971);
    this.mirroringShapeCharacters.setValue(8971, 8970);
    this.mirroringShapeCharacters.setValue(9001, 9002);
    this.mirroringShapeCharacters.setValue(9002, 9001);
    this.mirroringShapeCharacters.setValue(10088, 10089);
    this.mirroringShapeCharacters.setValue(10089, 10088);
    this.mirroringShapeCharacters.setValue(10090, 10091);
    this.mirroringShapeCharacters.setValue(10091, 10090);
    this.mirroringShapeCharacters.setValue(10092, 10093);
    this.mirroringShapeCharacters.setValue(10093, 10092);
    this.mirroringShapeCharacters.setValue(10094, 10095);
    this.mirroringShapeCharacters.setValue(10095, 10094);
    this.mirroringShapeCharacters.setValue(10096, 10097);
    this.mirroringShapeCharacters.setValue(10097, 10096);
    this.mirroringShapeCharacters.setValue(10098, 10099);
    this.mirroringShapeCharacters.setValue(10099, 10098);
    this.mirroringShapeCharacters.setValue(10100, 10101);
    this.mirroringShapeCharacters.setValue(10101, 10100);
    this.mirroringShapeCharacters.setValue(10197, 10198);
    this.mirroringShapeCharacters.setValue(10198, 10197);
    this.mirroringShapeCharacters.setValue(10205, 10206);
    this.mirroringShapeCharacters.setValue(10206, 10205);
    this.mirroringShapeCharacters.setValue(10210, 10211);
    this.mirroringShapeCharacters.setValue(10211, 10210);
    this.mirroringShapeCharacters.setValue(10212, 10213);
    this.mirroringShapeCharacters.setValue(10213, 10212);
    this.mirroringShapeCharacters.setValue(10214, 10215);
    this.mirroringShapeCharacters.setValue(10215, 10214);
    this.mirroringShapeCharacters.setValue(10216, 10217);
    this.mirroringShapeCharacters.setValue(10217, 10216);
    this.mirroringShapeCharacters.setValue(10218, 10219);
    this.mirroringShapeCharacters.setValue(10219, 10218);
    this.mirroringShapeCharacters.setValue(10627, 10628);
    this.mirroringShapeCharacters.setValue(10628, 10627);
    this.mirroringShapeCharacters.setValue(10629, 10630);
    this.mirroringShapeCharacters.setValue(10630, 10629);
    this.mirroringShapeCharacters.setValue(10631, 10632);
    this.mirroringShapeCharacters.setValue(10632, 10631);
    this.mirroringShapeCharacters.setValue(10633, 10634);
    this.mirroringShapeCharacters.setValue(10634, 10633);
    this.mirroringShapeCharacters.setValue(10635, 10636);
    this.mirroringShapeCharacters.setValue(10636, 10635);
    this.mirroringShapeCharacters.setValue(10637, 10640);
    this.mirroringShapeCharacters.setValue(10638, 10639);
    this.mirroringShapeCharacters.setValue(10639, 10638);
    this.mirroringShapeCharacters.setValue(10640, 10637);
    this.mirroringShapeCharacters.setValue(10641, 10642);
    this.mirroringShapeCharacters.setValue(10642, 10641);
    this.mirroringShapeCharacters.setValue(10643, 10644);
    this.mirroringShapeCharacters.setValue(10644, 10643);
    this.mirroringShapeCharacters.setValue(10645, 10646);
    this.mirroringShapeCharacters.setValue(10646, 10645);
    this.mirroringShapeCharacters.setValue(10647, 10648);
    this.mirroringShapeCharacters.setValue(10648, 10647);
    this.mirroringShapeCharacters.setValue(10680, 8856);
    this.mirroringShapeCharacters.setValue(10688, 10689);
    this.mirroringShapeCharacters.setValue(10689, 10688);
    this.mirroringShapeCharacters.setValue(10692, 10693);
    this.mirroringShapeCharacters.setValue(10693, 10692);
    this.mirroringShapeCharacters.setValue(10703, 10704);
    this.mirroringShapeCharacters.setValue(10704, 10703);
    this.mirroringShapeCharacters.setValue(10705, 10706);
    this.mirroringShapeCharacters.setValue(10706, 10705);
    this.mirroringShapeCharacters.setValue(10708, 10709);
    this.mirroringShapeCharacters.setValue(10709, 10708);
    this.mirroringShapeCharacters.setValue(10712, 10713);
    this.mirroringShapeCharacters.setValue(10713, 10712);
    this.mirroringShapeCharacters.setValue(10714, 10715);
    this.mirroringShapeCharacters.setValue(10715, 10714);
    this.mirroringShapeCharacters.setValue(10741, 8725);
    this.mirroringShapeCharacters.setValue(10744, 10745);
    this.mirroringShapeCharacters.setValue(10745, 10744);
    this.mirroringShapeCharacters.setValue(10748, 10749);
    this.mirroringShapeCharacters.setValue(10749, 10748);
    this.mirroringShapeCharacters.setValue(10795, 10796);
    this.mirroringShapeCharacters.setValue(10796, 10795);
    this.mirroringShapeCharacters.setValue(10797, 10796);
    this.mirroringShapeCharacters.setValue(10798, 10797);
    this.mirroringShapeCharacters.setValue(10804, 10805);
    this.mirroringShapeCharacters.setValue(10805, 10804);
    this.mirroringShapeCharacters.setValue(10812, 10813);
    this.mirroringShapeCharacters.setValue(10813, 10812);
    this.mirroringShapeCharacters.setValue(10852, 10853);
    this.mirroringShapeCharacters.setValue(10853, 10852);
    this.mirroringShapeCharacters.setValue(10873, 10874);
    this.mirroringShapeCharacters.setValue(10874, 10873);
    this.mirroringShapeCharacters.setValue(10877, 10878);
    this.mirroringShapeCharacters.setValue(10878, 10877);
    this.mirroringShapeCharacters.setValue(10879, 10880);
    this.mirroringShapeCharacters.setValue(10880, 10879);
    this.mirroringShapeCharacters.setValue(10881, 10882);
    this.mirroringShapeCharacters.setValue(10882, 10881);
    this.mirroringShapeCharacters.setValue(10883, 10884);
    this.mirroringShapeCharacters.setValue(10884, 10883);
    this.mirroringShapeCharacters.setValue(10891, 10892);
    this.mirroringShapeCharacters.setValue(10892, 10891);
    this.mirroringShapeCharacters.setValue(10897, 10898);
    this.mirroringShapeCharacters.setValue(10898, 10897);
    this.mirroringShapeCharacters.setValue(10899, 10900);
    this.mirroringShapeCharacters.setValue(10900, 10899);
    this.mirroringShapeCharacters.setValue(10901, 10902);
    this.mirroringShapeCharacters.setValue(10902, 10901);
    this.mirroringShapeCharacters.setValue(10903, 10904);
    this.mirroringShapeCharacters.setValue(10904, 10903);
    this.mirroringShapeCharacters.setValue(10905, 10906);
    this.mirroringShapeCharacters.setValue(10906, 10905);
    this.mirroringShapeCharacters.setValue(10907, 10908);
    this.mirroringShapeCharacters.setValue(10908, 10907);
    this.mirroringShapeCharacters.setValue(10913, 10914);
    this.mirroringShapeCharacters.setValue(10914, 10913);
    this.mirroringShapeCharacters.setValue(10918, 10919);
    this.mirroringShapeCharacters.setValue(10919, 10918);
    this.mirroringShapeCharacters.setValue(10920, 10921);
    this.mirroringShapeCharacters.setValue(10921, 10920);
    this.mirroringShapeCharacters.setValue(10922, 10923);
    this.mirroringShapeCharacters.setValue(10923, 10922);
    this.mirroringShapeCharacters.setValue(10924, 10925);
    this.mirroringShapeCharacters.setValue(10925, 10924);
    this.mirroringShapeCharacters.setValue(10927, 10928);
    this.mirroringShapeCharacters.setValue(10928, 10927);
    this.mirroringShapeCharacters.setValue(10931, 10932);
    this.mirroringShapeCharacters.setValue(10932, 10931);
    this.mirroringShapeCharacters.setValue(10939, 10940);
    this.mirroringShapeCharacters.setValue(10940, 10939);
    this.mirroringShapeCharacters.setValue(10941, 10942);
    this.mirroringShapeCharacters.setValue(10942, 10941);
    this.mirroringShapeCharacters.setValue(10943, 10944);
    this.mirroringShapeCharacters.setValue(10944, 10943);
    this.mirroringShapeCharacters.setValue(10945, 10946);
    this.mirroringShapeCharacters.setValue(10946, 10945);
    this.mirroringShapeCharacters.setValue(10947, 10948);
    this.mirroringShapeCharacters.setValue(10948, 10947);
    this.mirroringShapeCharacters.setValue(10949, 10950);
    this.mirroringShapeCharacters.setValue(10950, 10949);
    this.mirroringShapeCharacters.setValue(10957, 10958);
    this.mirroringShapeCharacters.setValue(10958, 10957);
    this.mirroringShapeCharacters.setValue(10959, 10960);
    this.mirroringShapeCharacters.setValue(10960, 10959);
    this.mirroringShapeCharacters.setValue(10961, 10962);
    this.mirroringShapeCharacters.setValue(10962, 10961);
    this.mirroringShapeCharacters.setValue(10963, 10964);
    this.mirroringShapeCharacters.setValue(10964, 10963);
    this.mirroringShapeCharacters.setValue(10965, 10966);
    this.mirroringShapeCharacters.setValue(10966, 10965);
    this.mirroringShapeCharacters.setValue(10974, 8870);
    this.mirroringShapeCharacters.setValue(10979, 8873);
    this.mirroringShapeCharacters.setValue(10980, 8872);
    this.mirroringShapeCharacters.setValue(10981, 8875);
    this.mirroringShapeCharacters.setValue(10988, 10989);
    this.mirroringShapeCharacters.setValue(10989, 10988);
    this.mirroringShapeCharacters.setValue(10999, 11000);
    this.mirroringShapeCharacters.setValue(11000, 10999);
    this.mirroringShapeCharacters.setValue(11001, 11002);
    this.mirroringShapeCharacters.setValue(11002, 11001);
    this.mirroringShapeCharacters.setValue(12296, 12297);
    this.mirroringShapeCharacters.setValue(12297, 12296);
    this.mirroringShapeCharacters.setValue(12298, 12299);
    this.mirroringShapeCharacters.setValue(12299, 12298);
    this.mirroringShapeCharacters.setValue(12300, 12301);
    this.mirroringShapeCharacters.setValue(12301, 12300);
    this.mirroringShapeCharacters.setValue(12302, 12303);
    this.mirroringShapeCharacters.setValue(12303, 12302);
    this.mirroringShapeCharacters.setValue(12304, 12305);
    this.mirroringShapeCharacters.setValue(12305, 12304);
    this.mirroringShapeCharacters.setValue(12308, 12309);
    this.mirroringShapeCharacters.setValue(12309, 12308);
    this.mirroringShapeCharacters.setValue(12310, 12311);
    this.mirroringShapeCharacters.setValue(12311, 12310);
    this.mirroringShapeCharacters.setValue(12312, 12313);
    this.mirroringShapeCharacters.setValue(12313, 12312);
    this.mirroringShapeCharacters.setValue(12314, 12315);
    this.mirroringShapeCharacters.setValue(12315, 12314);
    this.mirroringShapeCharacters.setValue(65288, 65289);
    this.mirroringShapeCharacters.setValue(65289, 65288);
    this.mirroringShapeCharacters.setValue(65308, 65310);
    this.mirroringShapeCharacters.setValue(65310, 65308);
    this.mirroringShapeCharacters.setValue(65339, 65341);
    this.mirroringShapeCharacters.setValue(65341, 65339);
    this.mirroringShapeCharacters.setValue(65371, 65373);
    this.mirroringShapeCharacters.setValue(65373, 65371);
    this.mirroringShapeCharacters.setValue(65375, 65376);
    this.mirroringShapeCharacters.setValue(65376, 65375);
    this.mirroringShapeCharacters.setValue(65378, 65379);
    this.mirroringShapeCharacters.setValue(65379, 65378);
  };
  return r;
})();
var Mo = (function () {
  function r() {
    this.types = [];
    this.textOrder = -1;
    this.rtlCharacterTypes = new Array(65536);
    this.L = 0;
    this.LRE = 1;
    this.LRO = 2;
    this.R = 3;
    this.AL = 4;
    this.RLE = 5;
    this.RLO = 6;
    this.PDF = 7;
    this.EN = 8;
    this.ES = 9;
    this.ET = 10;
    this.AN = 11;
    this.CS = 12;
    this.NSM = 13;
    this.BN = 14;
    this.B = 15;
    this.S = 16;
    this.WS = 17;
    this.ON = 18;
    this.charTypes = [
      this.L,
      this.EN,
      this.BN,
      this.ES,
      this.ES,
      this.S,
      this.ET,
      this.ET,
      this.B,
      this.AN,
      this.AN,
      this.S,
      this.CS,
      this.CS,
      this.WS,
      this.NSM,
      this.NSM,
      this.B,
      this.BN,
      27,
      this.BN,
      28,
      30,
      this.B,
      31,
      31,
      this.S,
      32,
      32,
      this.WS,
      33,
      34,
      this.ON,
      35,
      37,
      this.ET,
      38,
      42,
      this.ON,
      43,
      43,
      this.ET,
      44,
      44,
      this.CS,
      45,
      45,
      this.ET,
      46,
      46,
      this.CS,
      47,
      47,
      this.CS,
      48,
      57,
      this.EN,
      58,
      58,
      this.CS,
      59,
      64,
      this.ON,
      65,
      90,
      this.L,
      91,
      96,
      this.ON,
      97,
      122,
      this.L,
      123,
      126,
      this.ON,
      127,
      132,
      this.BN,
      133,
      133,
      this.B,
      134,
      159,
      this.BN,
      160,
      160,
      this.CS,
      161,
      161,
      this.ON,
      162,
      165,
      this.ET,
      166,
      169,
      this.ON,
      170,
      170,
      this.L,
      171,
      175,
      this.ON,
      176,
      177,
      this.ET,
      178,
      179,
      this.EN,
      180,
      180,
      this.ON,
      181,
      181,
      this.L,
      182,
      184,
      this.ON,
      185,
      185,
      this.EN,
      186,
      186,
      this.L,
      187,
      191,
      this.ON,
      192,
      214,
      this.L,
      215,
      215,
      this.ON,
      216,
      246,
      this.L,
      247,
      247,
      this.ON,
      248,
      696,
      this.L,
      697,
      698,
      this.ON,
      699,
      705,
      this.L,
      706,
      719,
      this.ON,
      720,
      721,
      this.L,
      722,
      735,
      this.ON,
      736,
      740,
      this.L,
      741,
      749,
      this.ON,
      750,
      750,
      this.L,
      751,
      767,
      this.ON,
      768,
      855,
      this.NSM,
      856,
      860,
      this.L,
      861,
      879,
      this.NSM,
      880,
      883,
      this.L,
      884,
      885,
      this.ON,
      886,
      893,
      this.L,
      894,
      894,
      this.ON,
      895,
      899,
      this.L,
      900,
      901,
      this.ON,
      902,
      902,
      this.L,
      903,
      903,
      this.ON,
      904,
      1013,
      this.L,
      1014,
      1014,
      this.ON,
      1015,
      1154,
      this.L,
      1155,
      1158,
      this.NSM,
      1159,
      1159,
      this.L,
      1160,
      1161,
      this.NSM,
      1162,
      1417,
      this.L,
      1418,
      1418,
      this.ON,
      1419,
      1424,
      this.L,
      1425,
      1441,
      this.NSM,
      1442,
      1442,
      this.L,
      1443,
      1465,
      this.NSM,
      1466,
      1466,
      this.L,
      1467,
      1469,
      this.NSM,
      1470,
      1470,
      this.R,
      1471,
      1471,
      this.NSM,
      1472,
      1472,
      this.R,
      1473,
      1474,
      this.NSM,
      1475,
      1475,
      this.R,
      1476,
      1476,
      this.NSM,
      1477,
      1487,
      this.L,
      1488,
      1514,
      this.R,
      1515,
      1519,
      this.L,
      1520,
      1524,
      this.R,
      1525,
      1535,
      this.L,
      1536,
      1539,
      this.AL,
      1540,
      1547,
      this.L,
      1548,
      1548,
      this.CS,
      1549,
      1549,
      this.AL,
      1550,
      1551,
      this.ON,
      1552,
      1557,
      this.NSM,
      1558,
      1562,
      this.L,
      1563,
      1563,
      this.AL,
      1564,
      1566,
      this.L,
      1567,
      1567,
      this.AL,
      1568,
      1568,
      this.L,
      1569,
      1594,
      this.AL,
      1595,
      1599,
      this.L,
      1600,
      1610,
      this.AL,
      1611,
      1624,
      this.NSM,
      1625,
      1631,
      this.L,
      1632,
      1641,
      this.AN,
      1642,
      1642,
      this.ET,
      1643,
      1644,
      this.AN,
      1645,
      1647,
      this.AL,
      1648,
      1648,
      this.NSM,
      1649,
      1749,
      this.AL,
      1750,
      1756,
      this.NSM,
      1757,
      1757,
      this.AL,
      1758,
      1764,
      this.NSM,
      1765,
      1766,
      this.AL,
      1767,
      1768,
      this.NSM,
      1769,
      1769,
      this.ON,
      1770,
      1773,
      this.NSM,
      1774,
      1775,
      this.AL,
      1776,
      1785,
      this.EN,
      1786,
      1805,
      this.AL,
      1806,
      1806,
      this.L,
      1807,
      1807,
      this.BN,
      1808,
      1808,
      this.AL,
      1809,
      1809,
      this.NSM,
      1810,
      1839,
      this.AL,
      1840,
      1866,
      this.NSM,
      1867,
      1868,
      this.L,
      1869,
      1871,
      this.AL,
      1872,
      1919,
      this.L,
      1920,
      1957,
      this.AL,
      1958,
      1968,
      this.NSM,
      1969,
      1969,
      this.AL,
      1970,
      2304,
      this.L,
      2305,
      2306,
      this.NSM,
      2307,
      2363,
      this.L,
      2364,
      2364,
      this.NSM,
      2365,
      2368,
      this.L,
      2369,
      2376,
      this.NSM,
      2377,
      2380,
      this.L,
      2381,
      2381,
      this.NSM,
      2382,
      2384,
      this.L,
      2385,
      2388,
      this.NSM,
      2389,
      2401,
      this.L,
      2402,
      2403,
      this.NSM,
      2404,
      2432,
      this.L,
      2433,
      2433,
      this.NSM,
      2434,
      2491,
      this.L,
      2492,
      2492,
      this.NSM,
      2493,
      2496,
      this.L,
      2497,
      2500,
      this.NSM,
      2501,
      2508,
      this.L,
      2509,
      2509,
      this.NSM,
      2510,
      2529,
      this.L,
      2530,
      2531,
      this.NSM,
      2532,
      2545,
      this.L,
      2546,
      2547,
      this.ET,
      2548,
      2560,
      this.L,
      2561,
      2562,
      this.NSM,
      2563,
      2619,
      this.L,
      2620,
      2620,
      this.NSM,
      2621,
      2624,
      this.L,
      2625,
      2626,
      this.NSM,
      2627,
      2630,
      this.L,
      2631,
      2632,
      this.NSM,
      2633,
      2634,
      this.L,
      2635,
      2637,
      this.NSM,
      2638,
      2671,
      this.L,
      2672,
      2673,
      this.NSM,
      2674,
      2688,
      this.L,
      2689,
      2690,
      this.NSM,
      2691,
      2747,
      this.L,
      2748,
      2748,
      this.NSM,
      2749,
      2752,
      this.L,
      2753,
      2757,
      this.NSM,
      2758,
      2758,
      this.L,
      2759,
      2760,
      this.NSM,
      2761,
      2764,
      this.L,
      2765,
      2765,
      this.NSM,
      2766,
      2785,
      this.L,
      2786,
      2787,
      this.NSM,
      2788,
      2800,
      this.L,
      2801,
      2801,
      this.ET,
      2802,
      2816,
      this.L,
      2817,
      2817,
      this.NSM,
      2818,
      2875,
      this.L,
      2876,
      2876,
      this.NSM,
      2877,
      2878,
      this.L,
      2879,
      2879,
      this.NSM,
      2880,
      2880,
      this.L,
      2881,
      2883,
      this.NSM,
      2884,
      2892,
      this.L,
      2893,
      2893,
      this.NSM,
      2894,
      2901,
      this.L,
      2902,
      2902,
      this.NSM,
      2903,
      2945,
      this.L,
      2946,
      2946,
      this.NSM,
      2947,
      3007,
      this.L,
      3008,
      3008,
      this.NSM,
      3009,
      3020,
      this.L,
      3021,
      3021,
      this.NSM,
      3022,
      3058,
      this.L,
      3059,
      3064,
      this.ON,
      3065,
      3065,
      this.ET,
      3066,
      3066,
      this.ON,
      3067,
      3133,
      this.L,
      3134,
      3136,
      this.NSM,
      3137,
      3141,
      this.L,
      3142,
      3144,
      this.NSM,
      3145,
      3145,
      this.L,
      3146,
      3149,
      this.NSM,
      3150,
      3156,
      this.L,
      3157,
      3158,
      this.NSM,
      3159,
      3259,
      this.L,
      3260,
      3260,
      this.NSM,
      3261,
      3275,
      this.L,
      3276,
      3277,
      this.NSM,
      3278,
      3392,
      this.L,
      3393,
      3395,
      this.NSM,
      3396,
      3404,
      this.L,
      3405,
      3405,
      this.NSM,
      3406,
      3529,
      this.L,
      3530,
      3530,
      this.NSM,
      3531,
      3537,
      this.L,
      3538,
      3540,
      this.NSM,
      3541,
      3541,
      this.L,
      3542,
      3542,
      this.NSM,
      3543,
      3632,
      this.L,
      3633,
      3633,
      this.NSM,
      3634,
      3635,
      this.L,
      3636,
      3642,
      this.NSM,
      3643,
      3646,
      this.L,
      3647,
      3647,
      this.ET,
      3648,
      3654,
      this.L,
      3655,
      3662,
      this.NSM,
      3663,
      3760,
      this.L,
      3761,
      3761,
      this.NSM,
      3762,
      3763,
      this.L,
      3764,
      3769,
      this.NSM,
      3770,
      3770,
      this.L,
      3771,
      3772,
      this.NSM,
      3773,
      3783,
      this.L,
      3784,
      3789,
      this.NSM,
      3790,
      3863,
      this.L,
      3864,
      3865,
      this.NSM,
      3866,
      3892,
      this.L,
      3893,
      3893,
      this.NSM,
      3894,
      3894,
      this.L,
      3895,
      3895,
      this.NSM,
      3896,
      3896,
      this.L,
      3897,
      3897,
      this.NSM,
      3898,
      3901,
      this.ON,
      3902,
      3952,
      this.L,
      3953,
      3966,
      this.NSM,
      3967,
      3967,
      this.L,
      3968,
      3972,
      this.NSM,
      3973,
      3973,
      this.L,
      3974,
      3975,
      this.NSM,
      3976,
      3983,
      this.L,
      3984,
      3991,
      this.NSM,
      3992,
      3992,
      this.L,
      3993,
      4028,
      this.NSM,
      4029,
      4037,
      this.L,
      4038,
      4038,
      this.NSM,
      4039,
      4140,
      this.L,
      4141,
      4144,
      this.NSM,
      4145,
      4145,
      this.L,
      4146,
      4146,
      this.NSM,
      4147,
      4149,
      this.L,
      4150,
      4151,
      this.NSM,
      4152,
      4152,
      this.L,
      4153,
      4153,
      this.NSM,
      4154,
      4183,
      this.L,
      4184,
      4185,
      this.NSM,
      4186,
      5759,
      this.L,
      5760,
      5760,
      this.WS,
      5761,
      5786,
      this.L,
      5787,
      5788,
      this.ON,
      5789,
      5905,
      this.L,
      5906,
      5908,
      this.NSM,
      5909,
      5937,
      this.L,
      5938,
      5940,
      this.NSM,
      5941,
      5969,
      this.L,
      5970,
      5971,
      this.NSM,
      5972,
      6001,
      this.L,
      6002,
      6003,
      this.NSM,
      6004,
      6070,
      this.L,
      6071,
      6077,
      this.NSM,
      6078,
      6085,
      this.L,
      6086,
      6086,
      this.NSM,
      6087,
      6088,
      this.L,
      6089,
      6099,
      this.NSM,
      6100,
      6106,
      this.L,
      6107,
      6107,
      this.ET,
      6108,
      6108,
      this.L,
      6109,
      6109,
      this.NSM,
      6110,
      6127,
      this.L,
      6128,
      6137,
      this.ON,
      6138,
      6143,
      this.L,
      6144,
      6154,
      this.ON,
      6155,
      6157,
      this.NSM,
      6158,
      6158,
      this.WS,
      6159,
      6312,
      this.L,
      6313,
      6313,
      this.NSM,
      6314,
      6431,
      this.L,
      6432,
      6434,
      this.NSM,
      6435,
      6438,
      this.L,
      6439,
      6443,
      this.NSM,
      6444,
      6449,
      this.L,
      6450,
      6450,
      this.NSM,
      6451,
      6456,
      this.L,
      6457,
      6459,
      this.NSM,
      6460,
      6463,
      this.L,
      6464,
      6464,
      this.ON,
      6465,
      6467,
      this.L,
      6468,
      6469,
      this.ON,
      6470,
      6623,
      this.L,
      6624,
      6655,
      this.ON,
      6656,
      8124,
      this.L,
      8125,
      8125,
      this.ON,
      8126,
      8126,
      this.L,
      8127,
      8129,
      this.ON,
      8130,
      8140,
      this.L,
      8141,
      8143,
      this.ON,
      8144,
      8156,
      this.L,
      8157,
      8159,
      this.ON,
      8160,
      8172,
      this.L,
      8173,
      8175,
      this.ON,
      8176,
      8188,
      this.L,
      8189,
      8190,
      this.ON,
      8191,
      8191,
      this.L,
      8192,
      8202,
      this.WS,
      8203,
      8205,
      this.BN,
      8206,
      8206,
      this.L,
      8207,
      8207,
      this.R,
      8208,
      8231,
      this.ON,
      8232,
      8232,
      this.WS,
      8233,
      8233,
      this.B,
      8234,
      8234,
      this.LRE,
      8235,
      8235,
      this.RLE,
      8236,
      8236,
      this.PDF,
      8237,
      8237,
      this.LRO,
      8238,
      8238,
      this.RLO,
      8239,
      8239,
      this.WS,
      8240,
      8244,
      this.ET,
      8245,
      8276,
      this.ON,
      8277,
      8278,
      this.L,
      8279,
      8279,
      this.ON,
      8280,
      8286,
      this.L,
      8287,
      8287,
      this.WS,
      8288,
      8291,
      this.BN,
      8292,
      8297,
      this.L,
      8298,
      8303,
      this.BN,
      8304,
      8304,
      this.EN,
      8305,
      8307,
      this.L,
      8308,
      8313,
      this.EN,
      8314,
      8315,
      this.ET,
      8316,
      8318,
      this.ON,
      8319,
      8319,
      this.L,
      8320,
      8329,
      this.EN,
      8330,
      8331,
      this.ET,
      8332,
      8334,
      this.ON,
      8335,
      8351,
      this.L,
      8352,
      8369,
      this.ET,
      8370,
      8399,
      this.L,
      8400,
      8426,
      this.NSM,
      8427,
      8447,
      this.L,
      8448,
      8449,
      this.ON,
      8450,
      8450,
      this.L,
      8451,
      8454,
      this.ON,
      8455,
      8455,
      this.L,
      8456,
      8457,
      this.ON,
      8458,
      8467,
      this.L,
      8468,
      8468,
      this.ON,
      8469,
      8469,
      this.L,
      8470,
      8472,
      this.ON,
      8473,
      8477,
      this.L,
      8478,
      8483,
      this.ON,
      8484,
      8484,
      this.L,
      8485,
      8485,
      this.ON,
      8486,
      8486,
      this.L,
      8487,
      8487,
      this.ON,
      8488,
      8488,
      this.L,
      8489,
      8489,
      this.ON,
      8490,
      8493,
      this.L,
      8494,
      8494,
      this.ET,
      8495,
      8497,
      this.L,
      8498,
      8498,
      this.ON,
      8499,
      8505,
      this.L,
      8506,
      8507,
      this.ON,
      8508,
      8511,
      this.L,
      8512,
      8516,
      this.ON,
      8517,
      8521,
      this.L,
      8522,
      8523,
      this.ON,
      8524,
      8530,
      this.L,
      8531,
      8543,
      this.ON,
      8544,
      8591,
      this.L,
      8592,
      8721,
      this.ON,
      8722,
      8723,
      this.ET,
      8724,
      9013,
      this.ON,
      9014,
      9082,
      this.L,
      9083,
      9108,
      this.ON,
      9109,
      9109,
      this.L,
      9110,
      9168,
      this.ON,
      9169,
      9215,
      this.L,
      9216,
      9254,
      this.ON,
      9255,
      9279,
      this.L,
      9280,
      9290,
      this.ON,
      9291,
      9311,
      this.L,
      9312,
      9371,
      this.EN,
      9372,
      9449,
      this.L,
      9450,
      9450,
      this.EN,
      9451,
      9751,
      this.ON,
      9752,
      9752,
      this.L,
      9753,
      9853,
      this.ON,
      9854,
      9855,
      this.L,
      9856,
      9873,
      this.ON,
      9874,
      9887,
      this.L,
      9888,
      9889,
      this.ON,
      9890,
      9984,
      this.L,
      9985,
      9988,
      this.ON,
      9989,
      9989,
      this.L,
      9990,
      9993,
      this.ON,
      9994,
      9995,
      this.L,
      9996,
      10023,
      this.ON,
      10024,
      10024,
      this.L,
      10025,
      10059,
      this.ON,
      10060,
      10060,
      this.L,
      10061,
      10061,
      this.ON,
      10062,
      10062,
      this.L,
      10063,
      10066,
      this.ON,
      10067,
      10069,
      this.L,
      10070,
      10070,
      this.ON,
      10071,
      10071,
      this.L,
      10072,
      10078,
      this.ON,
      10079,
      10080,
      this.L,
      10081,
      10132,
      this.ON,
      10133,
      10135,
      this.L,
      10136,
      10159,
      this.ON,
      10160,
      10160,
      this.L,
      10161,
      10174,
      this.ON,
      10175,
      10191,
      this.L,
      10192,
      10219,
      this.ON,
      10220,
      10223,
      this.L,
      10224,
      11021,
      this.ON,
      11022,
      11903,
      this.L,
      11904,
      11929,
      this.ON,
      11930,
      11930,
      this.L,
      11931,
      12019,
      this.ON,
      12020,
      12031,
      this.L,
      12032,
      12245,
      this.ON,
      12246,
      12271,
      this.L,
      12272,
      12283,
      this.ON,
      12284,
      12287,
      this.L,
      12288,
      12288,
      this.WS,
      12289,
      12292,
      this.ON,
      12293,
      12295,
      this.L,
      12296,
      12320,
      this.ON,
      12321,
      12329,
      this.L,
      12330,
      12335,
      this.NSM,
      12336,
      12336,
      this.ON,
      12337,
      12341,
      this.L,
      12342,
      12343,
      this.ON,
      12344,
      12348,
      this.L,
      12349,
      12351,
      this.ON,
      12352,
      12440,
      this.L,
      12441,
      12442,
      this.NSM,
      12443,
      12444,
      this.ON,
      12445,
      12447,
      this.L,
      12448,
      12448,
      this.ON,
      12449,
      12538,
      this.L,
      12539,
      12539,
      this.ON,
      12540,
      12828,
      this.L,
      12829,
      12830,
      this.ON,
      12831,
      12879,
      this.L,
      12880,
      12895,
      this.ON,
      12896,
      12923,
      this.L,
      12924,
      12925,
      this.ON,
      12926,
      12976,
      this.L,
      12977,
      12991,
      this.ON,
      12992,
      13003,
      this.L,
      13004,
      13007,
      this.ON,
      13008,
      13174,
      this.L,
      13175,
      13178,
      this.ON,
      13179,
      13277,
      this.L,
      13278,
      13279,
      this.ON,
      13280,
      13310,
      this.L,
      13311,
      13311,
      this.ON,
      13312,
      19903,
      this.L,
      19904,
      19967,
      this.ON,
      19968,
      42127,
      this.L,
      42128,
      42182,
      this.ON,
      42183,
      64284,
      this.L,
      64285,
      64285,
      this.R,
      64286,
      64286,
      this.NSM,
      64287,
      64296,
      this.R,
      64297,
      64297,
      this.ET,
      64298,
      64310,
      this.R,
      64311,
      64311,
      this.L,
      64312,
      64316,
      this.R,
      64317,
      64317,
      this.L,
      64318,
      64318,
      this.R,
      64319,
      64319,
      this.L,
      64320,
      64321,
      this.R,
      64322,
      64322,
      this.L,
      64323,
      64324,
      this.R,
      64325,
      64325,
      this.L,
      64326,
      64335,
      this.R,
      64336,
      64433,
      this.AL,
      64434,
      64466,
      this.L,
      64467,
      64829,
      this.AL,
      64830,
      64831,
      this.ON,
      64832,
      64847,
      this.L,
      64848,
      64911,
      this.AL,
      64912,
      64913,
      this.L,
      64914,
      64967,
      this.AL,
      64968,
      65007,
      this.L,
      65008,
      65020,
      this.AL,
      65021,
      65021,
      this.ON,
      65022,
      65023,
      this.L,
      65024,
      65039,
      this.NSM,
      65040,
      65055,
      this.L,
      65056,
      65059,
      this.NSM,
      65060,
      65071,
      this.L,
      65072,
      65103,
      this.ON,
      65104,
      65104,
      this.CS,
      65105,
      65105,
      this.ON,
      65106,
      65106,
      this.CS,
      65107,
      65107,
      this.L,
      65108,
      65108,
      this.ON,
      65109,
      65109,
      this.CS,
      65110,
      65118,
      this.ON,
      65119,
      65119,
      this.ET,
      65120,
      65121,
      this.ON,
      65122,
      65123,
      this.ET,
      65124,
      65126,
      this.ON,
      65127,
      65127,
      this.L,
      65128,
      65128,
      this.ON,
      65129,
      65130,
      this.ET,
      65131,
      65131,
      this.ON,
      65132,
      65135,
      this.L,
      65136,
      65140,
      this.AL,
      65141,
      65141,
      this.L,
      65142,
      65276,
      this.AL,
      65277,
      65278,
      this.L,
      65279,
      65279,
      this.BN,
      65280,
      65280,
      this.L,
      65281,
      65282,
      this.ON,
      65283,
      65285,
      this.ET,
      65286,
      65290,
      this.ON,
      65291,
      65291,
      this.ET,
      65292,
      65292,
      this.CS,
      65293,
      65293,
      this.ET,
      65294,
      65294,
      this.CS,
      65295,
      65295,
      this.ES,
      65296,
      65305,
      this.EN,
      65306,
      65306,
      this.CS,
      65307,
      65312,
      this.ON,
      65313,
      65338,
      this.L,
      65339,
      65344,
      this.ON,
      65345,
      65370,
      this.L,
      65371,
      65381,
      this.ON,
      65382,
      65503,
      this.L,
      65504,
      65505,
      this.ET,
      65506,
      65508,
      this.ON,
      65509,
      65510,
      this.ET,
      65511,
      65511,
      this.L,
      65512,
      65518,
      this.ON,
      65519,
      65528,
      this.L,
      65529,
      65531,
      this.BN,
      65532,
      65533,
      this.ON,
      65534,
      65535,
      this.L,
    ];
    for (var t = 0; t < this.charTypes.length; ++t)
      for (var e = this.charTypes[t], i = this.charTypes[++t], n = this.charTypes[++t]; e <= i; )
        this.rtlCharacterTypes[e++] = n;
  }
  r.prototype.getVisualOrder = function (t, e) {
    this.types = this.getCharacterCode(t);
    this.textOrder = e ? this.LRE : this.L;
    this.doVisualOrder();
    for (var i = [], n = 0; n < this.levels.length; n++) i[n] = this.levels[n];
    return i;
  };
  r.prototype.getCharacterCode = function (t) {
    for (var e = [], i = 0; i < t.length; i++) e[i] = this.rtlCharacterTypes[t[i].charCodeAt(0)];
    return e;
  };
  r.prototype.setDefaultLevels = function () {
    for (var t = 0; t < this.length; t++) this.levels[t] = this.textOrder;
  };
  r.prototype.setLevels = function () {
    this.setDefaultLevels();
    for (var t = 0; t < this.length; ++t) {
      var e = this.levels[t];
      if ((e & 128) !== 0) {
        e &= 127;
        this.result[t] = (e & 1) === 0 ? this.L : this.R;
      }
      this.levels[t] = e;
    }
  };
  r.prototype.updateLevels = function (t, e, i) {
    if ((e & 1) === 0)
      for (var n = t; n < i; ++n)
        this.result[n] === this.R ? (this.levels[n] += 1) : this.result[n] !== this.L && (this.levels[n] += 2);
    else
      for (var n = t; n < i; ++n)
        if (this.result[n] !== this.R) {
          this.levels[n] += 1;
        }
  };
  r.prototype.doVisualOrder = function () {
    this.length = this.types.length;
    this.result = this.types;
    this.levels = [];
    this.setLevels();
    this.length = this.getEmbeddedCharactersLength();
    for (var t = this.textOrder, e = 0; e < this.length; ) {
      for (
        var i = this.levels[e], n = (Math.max(t, i) & 1) === 0 ? this.L : this.R, s = e + 1;
        s < this.length && this.levels[s] === i;

      )
        ++s;
      var o = s < this.length ? this.levels[s] : this.textOrder;
      var a = (Math.max(o, i) & 1) === 0 ? this.L : this.R;
      this.checkNSM(e, s, i, n, a);
      this.updateLevels(e, i, s);
      t = i;
      e = s;
    }
    this.checkEmbeddedCharacters(this.length);
  };
  r.prototype.getEmbeddedCharactersLength = function () {
    for (var t = 0, e = 0; e < this.length; ++e)
      if (
        !(
          this.types[e] === this.LRE ||
          this.types[e] === this.RLE ||
          this.types[e] === this.LRO ||
          this.types[e] === this.RLO ||
          this.types[e] === this.PDF ||
          this.types[e] === this.BN
        )
      ) {
        this.result[t] = this.result[e];
        this.levels[t] = this.levels[e];
        t++;
      }
    return t;
  };
  r.prototype.checkEmbeddedCharacters = function (t) {
    for (var e = this.types.length - 1; e >= 0; --e)
      this.types[e] === this.LRE ||
      this.types[e] === this.RLE ||
      this.types[e] === this.LRO ||
      this.types[e] === this.RLO ||
      this.types[e] === this.PDF ||
      this.types[e] === this.BN
        ? ((this.result[e] = this.types[e]), (this.levels[e] = -1))
        : ((t -= 1), (this.result[e] = this.result[t]), (this.levels[e] = this.levels[t]));
    for (var e = 0; e < this.types.length; e++)
      if (this.levels[e] === -1) {
        e === 0 ? (this.levels[e] = this.textOrder) : (this.levels[e] = this.levels[e - 1]);
      }
  };
  r.prototype.checkNSM = function (t, e, i, n, s) {
    for (var o = n, a = t; a < e; ++a) this.result[a] === this.NSM ? (this.result[a] = o) : (o = this.result[a]);
    this.checkEuropeanDigits(t, e, i, n, s);
  };
  r.prototype.checkEuropeanDigits = function (t, e, i, n, s) {
    for (var o = t; o < e; ++o)
      if (this.result[o] === this.EN) {
        for (var a = o - 1; a >= t; --a)
          if (this.result[a] === this.L || this.result[a] === this.R || this.result[a] === this.AL) {
            if (this.result[a] === this.AL) {
              this.result[o] = this.AN;
            }
            break;
          }
      }
    this.checkArabicCharacters(t, e, i, n, s);
  };
  r.prototype.checkArabicCharacters = function (t, e, i, n, s) {
    for (var o = t; o < e; ++o)
      if (this.result[o] === this.AL) {
        this.result[o] = this.R;
      }
    this.checkEuropeanNumberSeparator(t, e, i, n, s);
  };
  r.prototype.checkEuropeanNumberSeparator = function (t, e, i, n, s) {
    for (var o = t + 1; o < e - 1; ++o)
      if (this.result[o] === this.ES || this.result[o] === this.CS) {
        var a = this.result[o - 1];
        var h = this.result[o + 1];
        this.result[o - 1] === this.EN && this.result[o + 1] === this.EN
          ? (this.result[o] = this.EN)
          : this.result[o] === this.CS &&
            this.result[o - 1] === this.AN &&
            this.result[o + 1] === this.AN &&
            (this.result[o] = this.AN);
      }
    this.checkEuropeanNumberTerminator(t, e, i, n, s);
  };
  r.prototype.checkEuropeanNumberTerminator = function (t, e, i, n, s) {
    for (var o = t; o < e; ++o)
      if (this.result[o] === this.ET) {
        var a = o;
        var h = [];
        h.push(this.ET);
        var l = this.getLength(o, e, h);
        var u = o === t ? n : this.result[o - 1];
        if (u !== this.EN) {
          u = l === e ? s : this.result[l];
        }
        if (u === this.EN) for (var d = o; d < l; ++d) this.result[d] = this.EN;
        o = l;
      }
    this.checkOtherNeutrals(t, e, i, n, s);
  };
  r.prototype.checkOtherNeutrals = function (t, e, i, n, s) {
    for (var o = t; o < e; ++o)
      if (this.result[o] === this.ES || this.result[o] === this.ET || this.result[o] === this.CS) {
        this.result[o] = this.ON;
      }
    this.checkOtherCharacters(t, e, i, n, s);
  };
  r.prototype.checkOtherCharacters = function (t, e, i, n, s) {
    for (var o = t; o < e; ++o)
      if (this.result[o] === this.EN) {
        for (var a = n, h = o - 1; h >= t; --h)
          if (this.result[h] === this.L || this.result[h] === this.R) {
            a = this.result[h];
            break;
          }
        if (a === this.L) {
          this.result[o] = this.L;
        }
      }
    this.checkCommanCharacters(t, e, i, n, s);
  };
  r.prototype.getLength = function (t, e, i) {
    for (--t; ++t < e; ) {
      for (var n = this.result[t], s = 0; s < i.length; ++s)
        if (n === i[s]) {
          t = this.getLength(++t, e, i);
        }
      return t;
    }
    return e;
  };
  r.prototype.checkCommanCharacters = function (t, e, i, n, s) {
    for (var o = t; o < e; ++o)
      if (
        this.result[o] === this.WS ||
        this.result[o] === this.ON ||
        this.result[o] === this.B ||
        this.result[o] === this.S
      ) {
        var a = o;
        var h = [this.B, this.S, this.WS, this.ON];
        var l = this.getLength(o, e, h);
        var u = 0;
        var d = 0;
        var c = 0;
        o === t ? (u = n) : ((u = this.result[o - 1]), u === this.AN ? (u = this.R) : u === this.EN && (u = this.R));
        l === e ? (d = s) : ((d = this.result[l]), d === this.AN ? (d = this.R) : d === this.EN && (d = this.R));
        u === d ? (c = u) : (c = (i & 1) === 0 ? this.L : this.R);
        for (var f = o; f < l; ++f) this.result[f] = c;
        o = l;
      }
  };
  return r;
})();
var Cn = (function () {
  function r() {
    this.openBracket = '(';
    this.closeBracket = ')';
  }
  r.prototype.layout = function (t, e, i, n, s) {
    if (t == null) throw new Error('ArgumentNullException : line');
    if (e == null) throw new Error('ArgumentNullException : font');
    var o = [];
    e.Unicode ? (o = this.customLayout(t, i, s, e, n)) : ((o = []), (o[0] = t));
    return o;
  };
  r.prototype.splitLayout = function (t, e, i, n, s) {
    if (t == null) throw new Error('ArgumentNullException : line');
    if (e == null) throw new Error('ArgumentNullException : font');
    var o = [];
    o = this.customSplitLayout(t, e, i, n, s);
    return o;
  };
  r.prototype.getGlyphIndex = function (t, e, i, n, s) {
    var o = true;
    var a = false;
    if (t == null) throw new Error('ArgumentNullException : line');
    if (e == null) throw new Error('ArgumentNullException : font');
    n = null;
    if (t.length === 0)
      return {
        success: a,
        glyphs: n,
      };
    var h = new un();
    var l = h.shape(t, 0);
    var u = e.fontInternal;
    var d = e.fontInternal.ttfReader;
    n = new Uint16Array(l.length);
    for (var c = 0, f = 0, g = l.length; f < g; f++) {
      var y = l[f];
      var m = e.fontInternal.ttfReader.getGlyph(l[f]);
      if (m !== null && typeof m < 'u') {
        n[c++] = m.index;
      }
    }
    return {
      success: o,
      glyphs: n,
    };
  };
  r.prototype.customLayout = function (t, e, i, n, s) {
    if (s === null || typeof s > 'u') {
      if (t == null) throw new Error('ArgumentNullException : line');
      var o = null;
      if (i !== null && typeof i < 'u' && i.textDirection !== Lt.None) {
        var a = new Eo();
        o = a.getLogicalToVisualString(t, e);
      }
      return o;
    } else {
      if (t == null) throw new Error('ArgumentNullException : line');
      if (n == null) throw new Error('ArgumentNullException : font');
      var h = null;
      if (i !== null && typeof i < 'u' && i.textDirection !== Lt.None) {
        var l = new un();
        var u = l.shape(t, 0);
        h = this.customLayout(u, e, i);
      }
      var o = [];
      if (s) {
        for (var d = h.split(''), c = d.length, f = 0; f < c; f++) d[f] = this.addChars(n, d[f]);
        o = d;
      } else {
        o = [];
        o[0] = this.addChars(n, h);
      }
      return o;
    }
  };
  r.prototype.addChars = function (t, e) {
    var i = e;
    if (t == null) throw new Error('ArgumentNullException : font');
    if (e == null) throw new Error('ArgumentNullException : line');
    var n = e;
    var s = t.fontInternal;
    var o = t.fontInternal.ttfReader;
    t.setSymbols(n);
    n = t.fontInternal.ttfReader.convertString(n);
    var a = dt.toUnicodeArray(n, false);
    n = dt.byteToString(a);
    return n;
  };
  r.prototype.customSplitLayout = function (t, e, i, n, s) {
    if (t == null) throw new Error('ArgumentNullException : line');
    if (e == null) throw new Error('ArgumentNullException : font');
    var o = this.customLayout(t, i, s);
    var a = o.split('');
    return a;
  };
  return r;
})();
var qt;
(function (r) {
  r[(r.Paginate = 0)] = 'Paginate';
  r[(r.OnePage = 1)] = 'OnePage';
})(qt || (qt = {}));
var te;
(function (r) {
  r[(r.FitPage = 0)] = 'FitPage';
  r[(r.FitElement = 1)] = 'FitElement';
  r[(r.FitColumnsToPage = 2)] = 'FitColumnsToPage';
})(te || (te = {}));
var xt;
(function (r) {
  r[(r.Start = 0)] = 'Start';
  r[(r.Line = 1)] = 'Line';
  r[(r.Bezier3 = 3)] = 'Bezier3';
  r[(r.Bezier = 3)] = 'Bezier';
  r[(r.PathTypeMask = 7)] = 'PathTypeMask';
  r[(r.DashMode = 16)] = 'DashMode';
  r[(r.PathMarker = 32)] = 'PathMarker';
  r[(r.CloseSubpath = 128)] = 'CloseSubpath';
})(xt || (xt = {}));
var Vo = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Re = (function (r) {
  Vo(t, r);
  function t(e) {
    var i = r() || this;
    i.mbackground = new j(255, 255, 255);
    i.mbStroking = false;
    i.mfunction = null;
    i.dictionaryProperties = new rt();
    i.mpatternDictionary = new q();
    i.mpatternDictionary.items.setValue(i.dictionaryProperties.type, new k(i.dictionaryProperties.pattern));
    i.mpatternDictionary.items.setValue(i.dictionaryProperties.patternType, new E(2));
    i.shading = e;
    i.colorSpace = Q.Rgb;
    return i;
  }
  Object.defineProperty(t.prototype, 'background', {
    get: function () {
      return this.mbackground;
    },
    set: function (e) {
      this.mbackground = e;
      var i = this.shading;
      e.isEmpty
        ? this.shading.remove(this.dictionaryProperties.background)
        : this.shading.items.setValue(this.dictionaryProperties.background, e.toArray(this.colorSpace));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'antiAlias', {
    get: function () {
      var e = this.shading;
      var i = this.shading.items.getValue(this.dictionaryProperties.antiAlias);
      return i.value;
    },
    set: function (e) {
      var i = this.shading;
      var n = this.shading.items.getValue(this.dictionaryProperties.antiAlias);
      n == null && typeof n > 'u'
        ? ((n = new Ut(e)), this.shading.items.setValue(this.dictionaryProperties.antiAlias, n))
        : (n.value = e);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'function', {
    get: function () {
      return this.mfunction;
    },
    set: function (e) {
      this.mfunction = e;
      e != null && typeof e < 'u'
        ? this.shading.items.setValue(this.dictionaryProperties.function, new _(this.mfunction))
        : this.shading.remove(this.dictionaryProperties.function);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'bBox', {
    get: function () {
      var e = this.shading;
      var i = this.shading.items.getValue(this.dictionaryProperties.bBox);
      return i;
    },
    set: function (e) {
      var i = this.shading;
      e == null && typeof e > 'u'
        ? this.shading.remove(this.dictionaryProperties.bBox)
        : this.shading.items.setValue(this.dictionaryProperties.bBox, e);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'colorSpace', {
    get: function () {
      return this.mcolorSpace;
    },
    set: function (e) {
      var i = this.shading.items.getValue(this.dictionaryProperties.colorSpace);
      if (e !== this.mcolorSpace || i == null) {
        this.mcolorSpace = e;
        var n = this.colorSpaceToDeviceName(e);
        this.shading.items.setValue(this.dictionaryProperties.colorSpace, new k(n));
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'stroking', {
    get: function () {
      return this.mbStroking;
    },
    set: function (e) {
      this.mbStroking = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'patternDictionary', {
    get: function () {
      if (this.mpatternDictionary == null) {
        this.mpatternDictionary = new q();
      }
      return this.mpatternDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'shading', {
    get: function () {
      return this.mshading;
    },
    set: function (e) {
      if (e == null) throw new Error('ArgumentNullException : Shading');
      if (e !== this.mshading) {
        this.mshading = e;
        this.patternDictionary.items.setValue(this.dictionaryProperties.shading, new _(this.mshading));
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'matrix', {
    get: function () {
      return this.mmatrix;
    },
    set: function (e) {
      if (e == null) throw new Error('ArgumentNullException : Matrix');
      if (e !== this.mmatrix) {
        this.mmatrix = e.clone();
        var i = new Z(this.mmatrix.matrix.elements);
        this.mpatternDictionary.items.setValue(this.dictionaryProperties.matrix, i);
      }
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.monitorChanges = function (e, i, n, s, o) {
    var a = false;
    if (e instanceof t) {
      if (this.colorSpace !== o) {
        this.colorSpace = o;
        this.resetFunction();
      }
      i.setColorSpace('Pattern', this.mbStroking);
      var h = n.getResources();
      var l = h.getName(this);
      i.setColourWithPattern(null, l, this.mbStroking);
      a = true;
    }
    return a;
  };
  t.prototype.resetChanges = function (e) {};
  t.prototype.colorSpaceToDeviceName = function (e) {
    var i;
    switch (e) {
      case Q.Rgb:
        i = 'DeviceRGB';
        break;
    }
    return 'DeviceRGB';
  };
  t.prototype.resetPatternDictionary = function (e) {
    this.mpatternDictionary = e;
  };
  t.prototype.cloneAntiAliasingValue = function (e) {
    if (e == null) throw new Error('ArgumentNullException : brush');
    var i = this.shading;
    var n = this.shading.items.getValue(this.dictionaryProperties.antiAlias);
    if (n != null) {
      e.shading.items.setValue(this.dictionaryProperties.antiAlias, new Ut(n.value));
    }
  };
  t.prototype.cloneBackgroundValue = function (e) {
    var i = this.background;
    if (!this.background.isEmpty) {
      e.background = this.background;
    }
  };
  Object.defineProperty(t.prototype, 'element', {
    get: function () {
      return this.patternDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(zt);
var Ge = (function () {
  function r(t, e) {
    this.dictionaryProperties = new rt();
    this.writeTransformation = true;
    if (!(typeof t > 'u'))
      if (t instanceof C && typeof e > 'u') {
        this.content = new Pt();
        var i = new C(t.width, t.height);
        this.setSize(i);
        this.initialize();
      } else {
        this.content = new Pt();
        this.setSize(new C(t, e));
        this.initialize();
      }
  }
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.templateSize;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.size.width;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.size.height;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'graphics', {
    get: function () {
      if (this.pdfGraphics == null || typeof this.pdfGraphics > 'u') {
        var t = new qi(this);
        var e = new _i(this.size, t, this.content);
        this.pdfGraphics = e;
        this.pdfGraphics.initializeCoordinates();
      }
      return this.pdfGraphics;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getResources = function () {
    if (this.resources == null) {
      this.resources = new Ve();
      this.content.items.setValue(this.dictionaryProperties.resources, this.resources);
    }
    return this.resources;
  };
  r.prototype.initialize = function () {
    this.addType();
    this.addSubType();
  };
  r.prototype.addType = function () {
    var t = new k(this.dictionaryProperties.xObject);
    this.content.items.setValue(this.dictionaryProperties.type, t);
  };
  r.prototype.addSubType = function () {
    var t = new k(this.dictionaryProperties.form);
    this.content.items.setValue(this.dictionaryProperties.subtype, t);
  };
  r.prototype.reset = function (t) {
    typeof t > 'u'
      ? (this.resources != null && ((this.resources = null), this.content.remove(this.dictionaryProperties.resources)),
        this.graphics != null && this.graphics.reset(this.size))
      : (this.setSize(t), this.reset());
  };
  r.prototype.setSize = function (t) {
    var e = new I(new D(0, 0), t);
    var i = Z.fromRectangle(e);
    this.content.items.setValue(this.dictionaryProperties.bBox, i);
    this.templateSize = t;
  };
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.content;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var ko = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Ve = (function (r) {
  ko(t, r);
  function t(e) {
    var i = r(e) || this;
    i.properties = new q();
    return i;
  }
  Object.defineProperty(t.prototype, 'names', {
    get: function () {
      return this.getNames();
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'document', {
    get: function () {
      return this.pdfDocument;
    },
    set: function (e) {
      this.pdfDocument = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getName = function (e) {
    var i = e.element;
    var n = null;
    if (this.names.containsKey(e.element)) {
      n = this.names.getValue(e.element);
    }
    if (n == null) {
      var s = this.generateName();
      n = new k(s);
      this.names.setValue(e.element, n);
      e instanceof It
        ? this.add(e, n)
        : e instanceof Ge
          ? this.add(e, n)
          : e instanceof Re || e instanceof ce
            ? this.add(e, n)
            : e instanceof ji
              ? this.add(e, n)
              : (e instanceof Me || e instanceof _t) && this.add(e, n);
    }
    return n;
  };
  t.prototype.getNames = function () {
    if (this.pdfNames == null) {
      this.pdfNames = new We();
    }
    var e = this.items.getValue(this.dictionaryProperties.font);
    if (e != null) {
      vn.dereference(e);
    }
    return this.pdfNames;
  };
  t.prototype.requireProcedureSet = function (e) {
    if (e == null) throw new Error('ArgumentNullException:procedureSetName');
    var i = this.items.getValue(this.dictionaryProperties.procset);
    if (i == null) {
      i = new Z();
      this.items.setValue(this.dictionaryProperties.procset, i);
    }
    var n = new k(e);
    if (!i.contains(n)) {
      i.add(n);
    }
  };
  t.prototype.removeFont = function (e) {
    for (var i = null, n = this.pdfNames.keys(), s = 0; s < this.pdfNames.size(); s++)
      if (this.pdfNames.getValue(n[s]) === new k(e)) {
        i = n[s];
        break;
      }
    if (i != null) {
      this.pdfNames.remove(i);
    }
  };
  t.prototype.generateName = function () {
    var e = No.getNewGuidString();
    return e;
  };
  t.prototype.add = function (e, i) {
    if (e instanceof It) {
      var n = null;
      var s = this.items.getValue(this.dictionaryProperties.font);
      if (s != null) {
        var o = s;
        n = s;
        n = s;
      } else {
        n = new q();
        this.items.setValue(this.dictionaryProperties.font, n);
      }
      n.items.setValue(i.value, new _(e.element));
    } else if (e instanceof Ge) {
      var a = void 0;
      a = this.items.getValue(this.dictionaryProperties.xObject);
      if (a == null) {
        a = new q();
        this.items.setValue(this.dictionaryProperties.xObject, a);
      }
      a.items.setValue(i.value, new _(e.element));
    } else if (e instanceof zt) {
      if (e instanceof Re || e instanceof ce) {
        var h = e.element;
        if (e.element != null) {
          var l = this.items.getValue(this.dictionaryProperties.pattern);
          if (l == null) {
            l = new q();
            this.items.setValue(this.dictionaryProperties.pattern, l);
          }
          l.items.setValue(i.value, new _(e.element));
        }
      }
    } else if (e instanceof ji) {
      var h = e.element;
      var u = null;
      u = this.items.getValue(this.dictionaryProperties.extGState);
      if (u == null) {
        u = new q();
        this.items.setValue(this.dictionaryProperties.extGState, u);
      }
      u.items.setValue(i.value, new _(e.element));
    } else {
      var a = this.Dictionary.items.getValue(this.dictionaryProperties.xObject);
      var d = void 0;
      if (typeof this.pdfDocument < 'u') {
        d = this.pdfDocument.sections.element.items
          .getValue(this.dictionaryProperties.resources)
          .items.getValue(this.dictionaryProperties.xObject);
      }
      this.Dictionary.items.values();
      var c = false;
      var f = void 0;
      if (typeof this.pdfDocument < 'u' && (typeof d === void 0 || d == null)) {
        d = new q();
        this.pdfDocument.sections.element.items
          .getValue(this.dictionaryProperties.resources)
          .items.setValue(this.dictionaryProperties.xObject, d);
      } else if (typeof this.pdfDocument < 'u')
        for (var g = d.items.values(), y = 0; y < g.length; y++)
          if (typeof g[y] < 'u' && typeof g[y].element < 'u' && g[y].element.data[0] === e.element.data[0]) {
            f = g[y];
            c = true;
          }
      if (a == null) {
        a = new q();
        this.Dictionary.items.setValue(this.dictionaryProperties.xObject, a);
      }
      if (c && typeof f < 'u') a.items.setValue(i.value, f);
      else {
        var o = new _(e.element);
        a.items.setValue(i.value, o);
        if (typeof this.pdfDocument < 'u') {
          d.items.setValue(i.value, o);
        }
      }
    }
  };
  return t;
})(q);
var No = (function () {
  function r() {}
  r.getNewGuidString = function () {
    return 'aaaaaaaa-aaaa-4aaa-baaa-aaaaaaaaaaaa'.replace(/[ab]/g, function (t) {
      var e = (Math.random() * 16) | 0;
      var i = t === 'a' ? e : (e & 3) | 8;
      return i.toString(16);
    });
  };
  return r;
})();
var zo = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var ce = (function (r) {
  zo(t, r);
  function t(e, i) {
    var n = r() || this;
    n.mStroking = false;
    n.mLocation = new D(0, 0);
    n.mDictionaryProperties = new rt();
    var s = null;
    e instanceof Mi ? (s = e) : e instanceof C && (s = new Mi(0, 0, e.width, e.height));
    if (i !== null && i instanceof Nt) {
      n.mPage = i;
    }
    n.brushStream = new Pt();
    n.mResources = new Ve();
    n.brushStream.items.setValue(n.mDictionaryProperties.resources, n.mResources);
    n.setBox(s);
    n.setObligatoryFields();
    if (i !== null && i instanceof Nt) {
      n.mPage = i;
      n.graphics.colorSpace = i.document.colorSpace;
    }
    return n;
  }
  t.prototype.initialize = function (e, i, n, s) {
    this.mPage = i;
    this.mLocation = n;
    this.mTransformationMatrix = s;
    this.tempBrushStream = this.brushStream;
    this.brushStream = new Pt();
    var o = new Ve();
    this.brushStream.items.setValue(this.mDictionaryProperties.resources, o);
    this.setBox(e);
    this.setObligatoryFields();
    return this;
  };
  Object.defineProperty(t.prototype, 'location', {
    get: function () {
      return this.mLocation;
    },
    set: function (e) {
      this.mLocation = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.setObligatoryFields = function () {
    this.brushStream.items.setValue(this.mDictionaryProperties.patternType, new E(1));
    this.brushStream.items.setValue(this.mDictionaryProperties.paintType, new E(1));
    this.brushStream.items.setValue(this.mDictionaryProperties.tilingType, new E(1));
    this.brushStream.items.setValue(this.mDictionaryProperties.xStep, new E(this.mBox.right - this.mBox.left));
    this.brushStream.items.setValue(this.mDictionaryProperties.yStep, new E(this.mBox.bottom - this.mBox.top));
    if (this.mPage != null && this.mLocation != null)
      if (this.mTransformationMatrix == null && typeof this.mTransformationMatrix > 'u') {
        var e = (this.mPage.size.height % this.rectangle.size.height) - this.mLocation.y;
        this.brushStream.items.setValue(this.mDictionaryProperties.matrix, new Z([1, 0, 0, 1, this.mLocation.x, e]));
      } else {
        var e = 0;
        var i = this.mTransformationMatrix.matrix.elements;
        this.mPage.size.height > this.rectangle.size.height
          ? (e = this.mTransformationMatrix.matrix.offsetY - (this.mPage.size.height % this.rectangle.size.height))
          : (e = (this.mPage.size.height % this.rectangle.size.height) + this.mTransformationMatrix.matrix.offsetY);
        this.brushStream.items.setValue(
          this.mDictionaryProperties.matrix,
          new Z([
            this.mTransformationMatrix.matrix.elements[0],
            this.mTransformationMatrix.matrix.elements[1],
            this.mTransformationMatrix.matrix.elements[2],
            this.mTransformationMatrix.matrix.elements[3],
            this.mTransformationMatrix.matrix.elements[4],
            e,
          ]),
        );
      }
  };
  t.prototype.setBox = function (e) {
    this.mBox = e;
    var i = new I(this.mBox.left, this.mBox.top, this.mBox.right, this.mBox.bottom);
    this.brushStream.items.setValue(this.mDictionaryProperties.bBox, Z.fromRectangle(i));
  };
  Object.defineProperty(t.prototype, 'rectangle', {
    get: function () {
      return this.mBox;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'size', {
    get: function () {
      return this.mBox.size;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'graphics', {
    get: function () {
      if (this.mGraphics == null && typeof this.mGraphics > 'u') {
        var e = new qi(this);
        var i = new _i(this.size, e, this.brushStream);
        this.mGraphics = i;
        this.mResources = this.getResources();
        this.mGraphics.initializeCoordinates();
      }
      return this.mGraphics;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getResources = function () {
    return this.mResources;
  };
  Object.defineProperty(t.prototype, 'stroking', {
    get: function () {
      return this.mStroking;
    },
    set: function (e) {
      this.mStroking = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.clone = function () {
    var e = this.initialize(this.rectangle, this.mPage, this.location, this.mTransformationMatrix);
    if (this.mTransformationMatrix != null && this.mTransformationMatrix.matrix != null) {
      e.brushStream.items.setValue(
        this.mDictionaryProperties.matrix,
        new Z(this.mTransformationMatrix.matrix.elements),
      );
    }
    e.brushStream.data = this.tempBrushStream.data;
    e.mResources = new Ve(this.mResources);
    e.brushStream.items.setValue(this.mDictionaryProperties.resources, e.mResources);
    return e;
  };
  t.prototype.monitorChanges = function (e, i, n, s, o) {
    var a = false;
    if (e !== this) {
      i.setColorSpace('Pattern', this.mStroking);
      var h = n.getResources();
      var l = h.getName(this);
      i.setColourWithPattern(null, l, this.mStroking);
      a = true;
    } else if (e instanceof t) {
      i.setColorSpace('Pattern', this.mStroking);
      var u = n.getResources();
      var d = u.getName(this);
      i.setColourWithPattern(null, d, this.mStroking);
      a = true;
    }
    return a;
  };
  t.prototype.resetChanges = function (e) {};
  Object.defineProperty(t.prototype, 'element', {
    get: function () {
      return this.brushStream;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(zt);
var _i = (function () {
  function r(t, e, i) {
    this.currentColorSpace = Q.Rgb;
    this.previousTextRenderingMode = Wt.Fill;
    this.previousCharacterSpacing = 0;
    this.previousWordSpacing = 0;
    this.previousTextScaling = 100;
    this.procedureSets = new co();
    this.isNormalRender = true;
    this.isUseFontSize = false;
    this.isItalic = false;
    this.isEmfTextScaled = false;
    this.isEmf = false;
    this.isEmfPlus = false;
    this.isBaselineFormat = true;
    this.emfScalingFactor = new C(0, 0);
    this.colorSpaceChanged = false;
    this.dictionaryProperties = new rt();
    this.isOverloadWithPosition = false;
    this.isPointOverload = false;
    this.currentColorSpaces = ['RGB', 'CMYK', 'GrayScale', 'Indexed'];
    this.isImageOptimized = false;
    this.graphicsState = [];
    this.istransparencySet = false;
    this.internalAutomaticFields = null;
    this.startCutIndex = -1;
    this.getResources = e;
    this.canvasSize = t;
    i instanceof on ? (this.pdfStreamWriter = i) : (this.pdfStreamWriter = new on(i));
    this.initialize();
  }
  Object.defineProperty(r.prototype, 'stringLayoutResult', {
    get: function () {
      return this.pdfStringLayoutResult;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.canvasSize;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'mediaBoxUpperRightBound', {
    get: function () {
      if (typeof this.internalMediaBoxUpperRightBound > 'u') {
        this.internalMediaBoxUpperRightBound = 0;
      }
      return this.internalMediaBoxUpperRightBound;
    },
    set: function (t) {
      this.internalMediaBoxUpperRightBound = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'clientSize', {
    get: function () {
      return new C(this.clipBounds.width, this.clipBounds.height);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'colorSpace', {
    get: function () {
      return this.currentColorSpace;
    },
    set: function (t) {
      this.currentColorSpace = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'streamWriter', {
    get: function () {
      return this.pdfStreamWriter;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'matrix', {
    get: function () {
      if (this.transformationMatrix == null) {
        this.transformationMatrix = new jt();
      }
      return this.transformationMatrix;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'layer', {
    get: function () {
      return this.pageLayer;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'page', {
    get: function () {
      return this.pageLayer.page;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'automaticFields', {
    get: function () {
      if (this.internalAutomaticFields == null || typeof this.internalAutomaticFields > 'u') {
        this.internalAutomaticFields = new po();
      }
      return this.internalAutomaticFields;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function () {
    this.bStateSaved = false;
    this.currentPen = null;
    this.currentBrush = null;
    this.currentFont = null;
    this.currentColorSpace = Q.Rgb;
    this.bCSInitialized = false;
    this.transformationMatrix = null;
    this.previousTextRenderingMode = -1;
    this.previousCharacterSpacing = -1;
    this.previousWordSpacing = -1;
    this.previousTextScaling = -100;
    this.currentStringFormat = null;
    this.clipBounds = new I(new D(0, 0), this.size);
    this.getResources.getResources().requireProcedureSet(this.procedureSets.pdf);
  };
  r.prototype.drawPdfTemplate = function (t, e, i) {
    if (typeof i > 'u') {
      if (t == null) throw Error('ArgumentNullException-template');
      this.drawPdfTemplate(t, e, t.size);
    } else {
      if (t == null) throw Error('ArgumentNullException-template');
      var n = t.width > 0 ? i.width / t.width : 1;
      var s = t.height > 0 ? i.height / t.height : 1;
      var o = !(n === 1 && s === 1);
      var a = this.save();
      var h = new jt();
      if (this.pageLayer != null) {
        this.getTranslateTransform(e.x, e.y + i.height, h);
      }
      if (o) {
        this.getScaleTransform(n, s, h);
      }
      this.pdfStreamWriter.modifyCtm(h);
      var l = this.getResources.getResources();
      var u = l.getName(t);
      this.pdfStreamWriter.executeObject(u);
      this.restore(a);
      var d = t.graphics;
      if (t.graphics != null)
        for (var c = 0; c < t.graphics.automaticFields.automaticFields.length; c++) {
          var f = t.graphics.automaticFields.automaticFields[c];
          var g = new D(
            t.graphics.automaticFields.automaticFields[c].location.x + e.x,
            t.graphics.automaticFields.automaticFields[c].location.y + e.y,
          );
          var y = t.size.width == 0 ? 0 : i.width / t.size.width;
          var m = t.size.height == 0 ? 0 : i.height / t.size.height;
          this.automaticFields.add(new bn(t.graphics.automaticFields.automaticFields[c].field, g, y, m));
          this.page.dictionary.modify();
        }
      this.getResources.getResources().requireProcedureSet(this.procedureSets.imageB);
      this.getResources.getResources().requireProcedureSet(this.procedureSets.imageC);
      this.getResources.getResources().requireProcedureSet(this.procedureSets.imageI);
      this.getResources.getResources().requireProcedureSet(this.procedureSets.text);
    }
  };
  r.prototype.drawString = function (t, e, i, n, s, o, a, h, l) {
    if (
      typeof t == 'string' &&
      e instanceof It &&
      (i instanceof ct || i === null) &&
      (n instanceof zt || n === null) &&
      typeof s == 'number' &&
      typeof o == 'number' &&
      (a instanceof Ct || a === null) &&
      typeof h > 'u'
    ) {
      this.isOverloadWithPosition = true;
      this.drawString(t, e, i, n, s, o, this.clientSize.width - s, 0, a);
    } else {
      var u = i;
      var d = n;
      var c = s;
      var f = o;
      var g = a;
      var y = h;
      var m = l;
      var w = new Kt();
      var b = w.layout(t, e, l, new C(g, y), this.isOverloadWithPosition, this.clientSize);
      if (!b.empty) {
        var v = this.checkCorrectLayoutRectangle(b.actualSize, c, f, l);
        if (g <= 0) {
          c = v.x;
          g = v.width;
        }
        if (y <= 0) {
          f = v.y;
          y = v.height;
        }
        this.drawStringLayoutResult(b, e, i, n, new I(c, f, g, y), l);
        this.isEmfTextScaled = false;
        this.emfScalingFactor = new C(0, 0);
      }
      this.getResources.getResources().requireProcedureSet(this.procedureSets.text);
      this.isNormalRender = true;
      this.pdfStringLayoutResult = b;
      this.isUseFontSize = false;
    }
  };
  r.prototype.drawLine = function (t, e, i, n, s) {
    if (e instanceof D) {
      var o = e;
      var a = i;
      this.drawLine(t, e.x, e.y, i.x, i.y);
    } else {
      var o = e;
      var a = i;
      var h = n;
      var l = s;
      this.stateControl(t, null, null);
      var u = this.streamWriter;
      this.streamWriter.beginPath(e, i);
      this.streamWriter.appendLineSegment(n, s);
      this.streamWriter.strokePath();
      this.getResources.getResources().requireProcedureSet(this.procedureSets.pdf);
    }
  };
  r.prototype.drawRectangle = function (t, e, i, n, s, o) {
    if (t instanceof ct && typeof e == 'number') {
      var a = i;
      this.drawRectangle(t, null, e, i, n, s);
    } else if (t instanceof zt && typeof e == 'number') {
      var a = i;
      this.drawRectangle(null, t, e, i, n, s);
    } else {
      var a = i;
      var h = n;
      var l = s;
      var u = o;
      if (e instanceof ce) {
        this.bCSInitialized = false;
        var d = this.matrix.matrix.offsetX + i;
        var c = void 0;
        this.layer != null && this.layer.page != null
          ? (c = this.layer.page.size.height - this.matrix.matrix.offsetY + n)
          : (c = this.clientSize.height - this.matrix.matrix.offsetY + n);
        e.location = new D(d, c);
        e.graphics.colorSpace = this.colorSpace;
      } else if (e instanceof Re) {
        e.colorSpace = this.colorSpace;
      }
      if (e instanceof st && e.color.isEmpty) {
        e = null;
      }
      var f = t;
      var g = e;
      this.stateControl(t, e, null);
      this.streamWriter.appendRectangle(i, n, s, o);
      this.drawPathHelper(t, e, false);
    }
  };
  r.prototype.drawRoundedRectangle = function (t, e, i, n, s, o, a) {
    if (t === null) throw new Error('pen');
    if (e === null) throw new Error('brush');
    if (a === 0) this.drawRectangle(t, e, i, n, s, o);
    else {
      var h = [i, n, s, o];
      var l = a * 2;
      var u = [l, l];
      var d = [h[0], h[1], u[0], u[1]];
      this._pathPoints = [];
      this._pathTypes = [];
      var c = true;
      c = this._addArc(d[0], d[1], d[2], d[3], 180, 90, c);
      d[0] = h[0] + h[2] - l;
      c = this._addArc(d[0], d[1], d[2], d[3], 270, 90, c);
      d[1] = h[1] + h[3] - l;
      c = this._addArc(d[0], d[1], d[2], d[3], 0, 90, c);
      d[0] = h[0];
      c = this._addArc(d[0], d[1], d[2], d[3], 90, 90, c);
      var f = this._pathPoints.length - 1;
      var g = this._pathTypes[f];
      g = g | xt.CloseSubpath;
      this._pathTypes[f] = g;
      this._drawPath(t, e, this._pathPoints, this._pathTypes, oe.Alternate);
      this._pathPoints = [];
      this._pathTypes = [];
    }
  };
  r.prototype._addArc = function (t, e, i, n, s, o, a) {
    for (var h = this._getBezierArcPoints(t, e, t + i, e + n, s, o), l = 0; l < h.length; l = l + 8) {
      var u = [h[l], h[l + 1], h[l + 2], h[l + 3], h[l + 4], h[l + 5], h[l + 6], h[l + 7]];
      a = this._addArcPoints(u, xt.Bezier3, a);
    }
    return a;
  };
  r.prototype._addArcPoints = function (t, e, i) {
    for (var n = 0; n < t.length; n++) {
      var s = new D(t[n], t[n + 1]);
      n === 0
        ? this._pathPoints.length === 0 || i
          ? (this._addPoint(s, xt.Start), (i = false))
          : (s.x !== this._getLastPoint().x || s.y !== this._getLastPoint().y) && this._addPoint(s, xt.Line)
        : this._addPoint(s, e);
      n++;
    }
    return i;
  };
  r.prototype._getLastPoint = function () {
    var t = new D(0, 0);
    var e = this._pathPoints.length;
    if (this._pathPoints.length > 0) {
      t.x = this._pathPoints[this._pathPoints.length - 1].x;
      t.y = this._pathPoints[this._pathPoints.length - 1].y;
    }
    return t;
  };
  r.prototype._addPoint = function (t, e) {
    this._pathPoints.push(t);
    this._pathTypes.push(e);
  };
  r.prototype._getBezierArcPoints = function (t, e, i, n, s, o) {
    if (t > i) {
      var a = void 0;
      a = t;
      t = i;
      i = a;
    }
    if (n > e) {
      var a = void 0;
      a = e;
      e = n;
      n = a;
    }
    var h;
    var l;
    Math.abs(o) <= 90 ? ((h = o), (l = 1)) : ((l = Math.ceil(Math.abs(o) / 90)), (h = o / l));
    for (
      var u = (t + i) / 2,
        d = (e + n) / 2,
        c = (i - t) / 2,
        f = (n - e) / 2,
        g = h * (Math.PI / 360),
        y = Math.abs((1.3333333333333333 * (1 - Math.cos(g))) / Math.sin(g)),
        m = [],
        w = 0;
      w < l;
      w++
    ) {
      var b = (s + w * h) * (Math.PI / 180);
      var v = (s + (w + 1) * h) * (Math.PI / 180);
      var x = Math.cos(b);
      var P = Math.cos(v);
      var B = Math.sin(b);
      var R = Math.sin(v);
      h > 0
        ? m.push(
            u + c * x,
            d - f * B,
            u + c * (x - y * B),
            d - f * (B + y * x),
            u + c * (P + y * R),
            d - f * (R - y * P),
            u + c * P,
            d - f * R,
          )
        : m.push(
            u + c * x,
            d - f * B,
            u + c * (x + y * B),
            d - f * (B - y * x),
            u + c * (P - y * R),
            d - f * (R + y * P),
            u + c * P,
            d - f * R,
          );
    }
    return m;
  };
  r.prototype.drawPathHelper = function (t, e, i, n) {
    if (typeof i == 'boolean') {
      var s = i;
      this.drawPathHelper(t, e, oe.Winding, i);
    } else {
      var s = i;
      var o = t != null;
      var a = e != null;
      var h = i === oe.Alternate;
      o && a
        ? this.streamWriter.fillStrokePath(h)
        : !o && !a
          ? this.streamWriter.endPath()
          : o
            ? this.streamWriter.strokePath()
            : this.streamWriter.fillPath(h);
    }
  };
  r.prototype.drawImage = function (t, e, i, n, s) {
    if (typeof e == 'number' && typeof i == 'number' && typeof n > 'u') {
      var o = t.physicalDimension;
      this.drawImage(t, e, i, t.physicalDimension.width, t.physicalDimension.height);
    } else {
      var a = e;
      var h = i;
      var l = s;
      t.save();
      var u = new jt();
      this.getTranslateTransform(e, i + s, u);
      this.getScaleTransform(n, s, u);
      this.pdfStreamWriter.write('q');
      this.pdfStreamWriter.modifyCtm(u);
      var d = this.getResources.getResources();
      if (typeof this.pageLayer < 'u' && this.page != null) {
        d.document = this.page.document;
      }
      var c = d.getName(t);
      if (typeof this.pageLayer < 'u') {
        this.page.setResources(d);
      }
      this.pdfStreamWriter.executeObject(c);
      this.pdfStreamWriter.write(S.restoreState);
      this.pdfStreamWriter.write(S.newLine);
      var f = this.getResources.getResources();
      f.requireProcedureSet(this.procedureSets.imageB);
      f.requireProcedureSet(this.procedureSets.imageC);
      f.requireProcedureSet(this.procedureSets.imageI);
      f.requireProcedureSet(this.procedureSets.text);
    }
  };
  r.prototype.getLineBounds = function (t, e, i, n, s) {
    var o;
    if (!e.empty && t < e.lineCount && t >= 0) {
      var a = e.lines[t];
      var h = this.getTextVerticalAlignShift(e.actualSize.height, n.height, s);
      var l = h + n.y + e.lineHeight * t;
      var u = e.lines[t].width;
      var d = this.getHorizontalAlignShift(e.lines[t].width, n.width, s);
      var c = this.getLineIndent(e.lines[t], s, n, t === 0);
      d += this.rightToLeft(s) ? 0 : c;
      var f = n.x + d;
      var g = this.shouldJustify(e.lines[t], n.width, s) ? n.width - c : e.lines[t].width - c;
      var y = e.lineHeight;
      o = new I(f, l, g, e.lineHeight);
    } else o = new I(0, 0, 0, 0);
    return o;
  };
  r.prototype.checkCorrectLayoutRectangle = function (t, e, i, n) {
    var s = new I(e, i, t.width, t.width);
    if (n != null) {
      switch (n.alignment) {
        case U.Center:
          s.x -= s.width / 2;
          break;
        case U.Right:
          s.x -= s.width;
          break;
      }
      switch (n.lineAlignment) {
        case Ot.Middle:
          s.y -= s.height / 2;
          break;
        case Ot.Bottom:
          s.y -= s.height;
          break;
      }
    }
    return s;
  };
  r.prototype.setLayer = function (t) {
    this.pageLayer = t;
    var e = t.page;
    if (e != null && typeof e < 'u') {
      e.beginSave = this.pageSave;
    }
  };
  r.prototype.pageSave = function (t) {
    if (t.graphics.automaticFields != null)
      for (var e = 0; e < t.graphics.automaticFields.automaticFields.length; e++) {
        var i = t.graphics.automaticFields.automaticFields[e];
        t.graphics.automaticFields.automaticFields[e].field.performDraw(
          t.graphics,
          t.graphics.automaticFields.automaticFields[e].location,
          t.graphics.automaticFields.automaticFields[e].scalingX,
          t.graphics.automaticFields.automaticFields[e].scalingY,
        );
      }
  };
  r.prototype.drawStringLayoutResult = function (t, e, i, n, s, o) {
    if (t.empty) throw new Error('ArgumentNullException:result');
    this.applyStringSettings(e, i, n, o, s);
    var a = o != null ? o.horizontalScalingFactor : 100;
    if (a !== this.previousTextScaling && !this.isEmfTextScaled) {
      this.pdfStreamWriter.setTextScaling(a);
      this.previousTextScaling = a;
    }
    var h = o == null || o.lineSpacing === 0 ? e.height : o.lineSpacing + e.height;
    var l = o != null && o.subSuperScript === ie.SubScript;
    var u = 0;
    u = l ? h - (e.height + e.metrics.getDescent(o)) : h - e.metrics.getAscent(o);
    this.shift = u;
    this.pdfStreamWriter.startNextLine(s.x, s.y - u);
    this.pdfStreamWriter.setLeading(+h);
    for (var d = 0, c = '', f = 0; f < t.lines.length; f++) {
      d += t.lineHeight;
      if (s.y + d > this.clientSize.height) {
        this.startCutIndex = f;
        break;
      }
    }
    for (var g = this.startCutIndex; g < t.lines.length && g >= 0; g++) c += t.lines[g].text;
    var y = new I(s.x, s.y, s.width, s.height);
    this.drawLayoutResult(t, e, o, s);
    this.underlineStrikeoutText(i, n, t, e, y, o);
    this.isEmfPlus = false;
    this.isUseFontSize = false;
    if (this.startCutIndex !== -1) {
      var m = this.getNextPage();
      m.graphics.drawString(c, e, i, n, s.x, 0, s.width, 0, o);
    }
  };
  r.prototype.getNextPage = function () {
    var t = this.currentPage.section;
    var e = null;
    var i = t.indexOf(this.currentPage);
    i === t.count - 1 ? (e = t.add()) : (e = t.getPages()[i + 1]);
    return e;
  };
  r.prototype.setClip = function (t, e) {
    typeof e > 'u'
      ? this.setClip(t, oe.Winding)
      : (this.pdfStreamWriter.appendRectangle(t), this.pdfStreamWriter.clipPath(e === oe.Alternate));
  };
  r.prototype.applyStringSettings = function (t, e, i, n, s) {
    i instanceof ce
      ? ((this.bCSInitialized = false), (i.graphics.colorSpace = this.colorSpace))
      : i instanceof Re && ((this.bCSInitialized = false), (i.colorSpace = this.colorSpace));
    var o = this.getTextRenderingMode(e, i, n);
    this.stateControl(e, i, t, n);
    this.pdfStreamWriter.beginText();
    if (o !== this.previousTextRenderingMode) {
      this.pdfStreamWriter.setTextRenderingMode(o);
      this.previousTextRenderingMode = o;
    }
    var a = n != null ? n.characterSpacing : 0;
    if (a !== this.previousCharacterSpacing && !this.isEmfTextScaled) {
      this.pdfStreamWriter.setCharacterSpacing(a);
      this.previousCharacterSpacing = a;
    }
    var h = n != null ? n.wordSpacing : 0;
    if (h !== this.previousWordSpacing) {
      this.pdfStreamWriter.setWordSpacing(h);
      this.previousWordSpacing = h;
    }
  };
  r.prototype.getTextVerticalAlignShift = function (t, e, i) {
    var n = 0;
    if (e >= 0 && i != null && i.lineAlignment !== Ot.Top)
      switch (i.lineAlignment) {
        case Ot.Middle:
          n = (e - t) / 2;
          break;
        case Ot.Bottom:
          n = e - t;
          break;
      }
    return n;
  };
  r.prototype.drawLayoutResult = function (t, e, i, n) {
    var s = this.getTextVerticalAlignShift(t.actualSize.height, n.height, i);
    if (s !== 0) {
      this.pdfStreamWriter.startNextLine(0, s);
    }
    var o = e;
    var a = e != null && e.isUnicode;
    e?.isEmbedFont;
    for (var h = t.lines, l = 0, u = h.length; l < u && l !== this.startCutIndex; l++) {
      var d = h[l];
      h[l].text;
      var c = h[l].width;
      var f = this.getHorizontalAlignShift(h[l].width, n.width, i);
      var g = this.getLineIndent(h[l], i, n, l === 0);
      f += this.rightToLeft(i) ? 0 : g;
      if (f !== 0 && !this.isEmfTextScaled) {
        this.pdfStreamWriter.startNextLine(f, 0);
      }
      a ? this.drawUnicodeLine(h[l], n, e, i) : this.drawAsciiLine(h[l], n, e, i);
      if (f !== 0 && !this.isEmfTextScaled) {
        this.pdfStreamWriter.startNextLine(-f, 0);
      }
      this.isOverloadWithPosition && h.length > 1
        ? (this.pdfStreamWriter.startNextLine(-n.x, 0),
          (n.x = 0),
          (n.width = this.clientSize.width),
          (this.isOverloadWithPosition = false),
          (this.isPointOverload = true))
        : this.isOverloadWithPosition && (this.isOverloadWithPosition = false);
    }
    this.getResources.getResources().requireProcedureSet(this.procedureSets.text);
    if (s !== 0) {
      this.pdfStreamWriter.startNextLine(0, -(s - t.lineHeight));
    }
    this.pdfStreamWriter.endText();
  };
  r.prototype.drawAsciiLine = function (t, e, i, n) {
    this.justifyLine(t, e.width, n);
    var s = '';
    if (t.text.indexOf('(') !== -1 || t.text.indexOf(')') !== -1)
      for (var o = 0; o < t.text.length; o++)
        t.text[o] === '(' ? (s += '\\(') : t.text[o] === ')' ? (s += '\\)') : (s += t.text[o]);
    if (s === '') {
      s = t.text;
    }
    var a = '(' + s + ')';
    this.pdfStreamWriter.showNextLineText(new dt(a));
  };
  r.prototype.drawUnicodeLine = function (t, e, i, n) {
    var s = t.text;
    t.width;
    var o = n !== null && typeof n < 'u' && n.rightToLeft;
    var a = n !== null && typeof n < 'u' && (n.wordSpacing !== 0 || n.alignment === U.Justify);
    var h = i;
    var l = this.justifyLine(t, e.width, n);
    var u = new Cn();
    if (o || (n !== null && typeof n < 'u' && n.textDirection !== Lt.None)) {
      var d = null;
      var c = n !== null && typeof n < 'u' && n.alignment === U.Right;
      n !== null && typeof n < 'u' && n.textDirection !== Lt.None
        ? (d = u.layout(t.text, i, n.textDirection === Lt.RightToLeft, a, n))
        : (d = u.layout(t.text, i, c, a, n));
      var f = null;
      d.length > 1
        ? n !== null && typeof n < 'u' && n.textDirection !== Lt.None
          ? (f = u.splitLayout(t.text, i, n.textDirection === Lt.RightToLeft, a, n))
          : (f = u.splitLayout(t.text, i, c, a, n))
        : (f = [t.text]);
      this.drawUnicodeBlocks(d, f, i, n, l);
    } else if (a) {
      var g = this.breakUnicodeLine(t.text, i, null);
      var d = g.tokens;
      var f = g.words;
      this.drawUnicodeBlocks(g.tokens, g.words, i, n, l);
    } else {
      var y = this.convertToUnicode(t.text, i);
      var m = this.getUnicodeString(y);
      this.streamWriter.showNextLineText(m);
    }
  };
  r.prototype.drawUnicodeBlocks = function (t, e, i, n, s) {
    if (t == null) throw new Error('Argument Null Exception : blocks');
    if (e == null) throw new Error('Argument Null Exception : words');
    if (i == null) throw new Error('Argument Null Exception : font');
    this.streamWriter.startNextLine();
    var o = 0;
    var a = 0;
    var h = 0;
    var l = 0;
    try {
      if (n !== null && typeof n < 'u') {
        h = n.firstLineIndent;
        l = n.paragraphIndent;
        n.firstLineIndent = 0;
        n.paragraphIndent = 0;
      }
      var u = i.getCharWidth(mt.whiteSpace, n) + s;
      var d = n != null ? n.characterSpacing : 0;
      var c = n !== null && typeof n < 'u' && s === 0 ? n.wordSpacing : 0;
      u += d + c;
      for (var f = 0; f < t.length; f++) {
        var g = t[f];
        var y = e[f];
        var m = 0;
        if (o !== 0) {
          this.streamWriter.startNextLine(o, 0);
        }
        if (e[f].length > 0) {
          m += i.measureString(e[f], n).width;
          m += d;
          var w = this.getUnicodeString(t[f]);
          this.streamWriter.showText(w);
        }
        if (f !== t.length - 1) {
          o = m + u;
          a += o;
        }
      }
      if (a > 0) {
        this.streamWriter.startNextLine(-a, 0);
      }
    } finally {
      if (n !== null && typeof n < 'u') {
        n.firstLineIndent = h;
        n.paragraphIndent = l;
      }
    }
  };
  r.prototype.breakUnicodeLine = function (t, e, i) {
    if (t === null) throw new Error('Argument Null Exception : line');
    i = t.split(null);
    for (var n = [], s = 0; s < i.length; s++) {
      var o = i[s];
      var a = this.convertToUnicode(i[s], e);
      n[s] = a;
    }
    return {
      tokens: n,
      words: i,
    };
  };
  r.prototype.getUnicodeString = function (t) {
    if (t === null) throw new Error('Argument Null Exception : token');
    var e = new dt(t);
    e.converted = true;
    e.encode = Ne.ForceEncoding.Ascii;
    return e;
  };
  r.prototype.convertToUnicode = function (t, e) {
    var i = null;
    if (t == null) throw new Error('Argument Null Exception : text');
    if (e == null) throw new Error('Argument Null Exception : ttfFont');
    if (e.fontInternal instanceof Gi) {
      var n = e.fontInternal.ttfReader;
      e.setSymbols(t);
      i = e.fontInternal.ttfReader.convertString(t);
      var s = dt.toUnicodeArray(i, false);
      i = dt.byteToString(s);
    }
    return i;
  };
  r.prototype.justifyLine = function (t, e, i) {
    var n = t.text;
    var s = t.width;
    var o = this.shouldJustify(t, e, i);
    var a = i != null && i.wordSpacing !== 0;
    var h = mt.spaces;
    var l = mt.getCharsCount(t.text, mt.spaces);
    var u = 0;
    if (o) {
      if (a) {
        s -= l * i.wordSpacing;
      }
      var d = e - s;
      u = d / l;
      this.pdfStreamWriter.setWordSpacing(u);
    } else a ? this.pdfStreamWriter.setWordSpacing(i.wordSpacing) : this.pdfStreamWriter.setWordSpacing(0);
    return u;
  };
  r.prototype.reset = function (t) {
    this.canvasSize = t;
    this.streamWriter.clear();
    this.initialize();
    this.initializeCoordinates();
  };
  r.prototype.shouldJustify = function (t, e, i) {
    var n = t.text;
    var s = t.width;
    var o = i != null && i.alignment === U.Justify;
    var a = e >= 0 && t.width < e;
    var h = mt.spaces;
    var l = mt.getCharsCount(t.text, mt.spaces);
    var u = l > 0 && t.text[0] !== mt.whiteSpace;
    var d = (t.lineType & pt.LayoutBreak) > 0 || (i && i.wordWrap === Dt.None);
    var c = o && a && u && d;
    return c;
  };
  r.prototype.underlineStrikeoutText = function (t, e, i, n, s, o) {
    if (n.underline || n.strikeout) {
      var a = this.createUnderlineStikeoutPen(t, e, n, o);
      if (a != null) {
        var h = this.getTextVerticalAlignShift(i.actualSize.height, s.height, o);
        var l = 0;
        l = s.y + h + n.metrics.getAscent(o) + 1.5 * a.width;
        for (
          var u = s.y + h + n.metrics.getHeight(o) / 2 + 1.5 * a.width, d = i.lines, c = 0, f = i.lineCount;
          c < f;
          c++
        ) {
          var g = d[c];
          d[c].text;
          var y = d[c].width;
          var m = this.getHorizontalAlignShift(d[c].width, s.width, o);
          var w = this.getLineIndent(d[c], o, s, c === 0);
          m += this.rightToLeft(o) ? 0 : w;
          var b = s.x + m;
          var v = this.shouldJustify(d[c], s.width, o) ? b + s.width - w : b + d[c].width - w;
          if (n.underline) {
            var x = l;
            this.drawLine(a, b, l, v, l);
            l += i.lineHeight;
          }
          if (n.strikeout) {
            var x = u;
            this.drawLine(a, b, u, v, u);
            u += i.lineHeight;
          }
          if (this.isPointOverload && d.length > 1) {
            s.x = 0;
            s.width = this.clientSize.width;
          }
        }
        this.isPointOverload = false;
      }
    }
  };
  r.prototype.createUnderlineStikeoutPen = function (t, e, i, n) {
    var s = i.metrics.getSize(n) / 20;
    var o = null;
    t != null ? (o = new ct(t.color, s)) : e != null && (o = new ct(e, s));
    return o;
  };
  r.prototype.getTextRenderingMode = function (t, e, i) {
    var n = Wt.None;
    t != null && e != null ? (n = Wt.FillStroke) : t != null ? (n = Wt.Stroke) : (n = Wt.Fill);
    if (i != null && i.clipPath) {
      n |= Wt.ClipFlag;
    }
    return n;
  };
  r.prototype.getLineIndent = function (t, e, i, n) {
    var s = 0;
    var o = (t.lineType & pt.FirstParagraphLine) > 0;
    if (e != null && o) {
      s = n ? e.firstLineIndent : e.paragraphIndent;
      s = i.width > 0 ? Math.min(i.width, s) : s;
    }
    return s;
  };
  r.prototype.getHorizontalAlignShift = function (t, e, i) {
    var n = 0;
    if (e >= 0 && i != null && i.alignment !== U.Left)
      switch (i.alignment) {
        case U.Center:
          n = (e - t) / 2;
          break;
        case U.Right:
          n = e - t;
          break;
      }
    return n;
  };
  r.prototype.rightToLeft = function (t) {
    var e = t !== null && typeof t < 'u' && t.rightToLeft;
    if (t !== null && typeof t < 'u' && t.textDirection !== Lt.None && typeof t.textDirection < 'u') {
      e = true;
    }
    return e;
  };
  r.prototype.stateControl = function (t, e, i, n) {
    if (typeof n > 'u') this.stateControl(t, e, i, null);
    else {
      if (e instanceof Re) {
        this.bCSInitialized = false;
        e.colorSpace = this.colorSpace;
      }
      if (e instanceof ce) {
        this.bCSInitialized = false;
        e.graphics.colorSpace = this.colorSpace;
      }
      var s = false;
      e !== null
        ? (typeof this.pageLayer < 'u' &&
            this.pageLayer != null &&
            this.colorSpaceChanged === false &&
            ((this.lastDocumentCS = this.pageLayer.page.document.colorSpace),
            (this.lastGraphicsCS = this.pageLayer.page.graphics.colorSpace),
            (this.colorSpace = this.pageLayer.page.document.colorSpace),
            (this.currentColorSpace = this.pageLayer.page.document.colorSpace),
            (this.colorSpaceChanged = true)),
          this.initCurrentColorSpace(this.currentColorSpace))
        : t != null &&
          (typeof this.pageLayer < 'u' &&
            this.pageLayer != null &&
            ((this.colorSpace = this.pageLayer.page.document.colorSpace),
            (this.currentColorSpace = this.pageLayer.page.document.colorSpace)),
          this.initCurrentColorSpace(this.currentColorSpace));
      this.penControl(t, s);
      this.brushControl(e, s);
      this.fontControl(i, n, s);
    }
  };
  r.prototype.initCurrentColorSpace = function (t) {
    this.getResources.getResources();
    if (!this.bCSInitialized) {
      this.currentColorSpace != Q.GrayScale
        ? (this.pdfStreamWriter.setColorSpace('Device' + this.currentColorSpaces[this.currentColorSpace], true),
          this.pdfStreamWriter.setColorSpace('Device' + this.currentColorSpaces[this.currentColorSpace], false),
          (this.bCSInitialized = true))
        : (this.pdfStreamWriter.setColorSpace('DeviceGray', true),
          this.pdfStreamWriter.setColorSpace('DeviceGray', false),
          (this.bCSInitialized = true));
    }
  };
  r.prototype.penControl = function (t, e) {
    if (t != null) {
      this.currentPen = t;
      t.monitorChanges(
        this.currentPen,
        this.pdfStreamWriter,
        this.getResources,
        e,
        this.colorSpace,
        this.matrix.clone(),
      );
      this.currentPen = t.clone();
    }
  };
  r.prototype.brushControl = function (t, e) {
    if (t != null && typeof t < 'u') {
      var i = t.clone();
      var n = i;
      if (n !== null && typeof n < 'u' && !(t instanceof st) && !(t instanceof ce)) {
        var s = n.matrix;
        var o = this.matrix.clone();
        if (n.matrix != null) {
          n.matrix.multiply(o);
          o = n.matrix;
        }
        n.matrix = o;
      }
      this.currentBrush = n;
      i.monitorChanges(this.currentBrush, this.pdfStreamWriter, this.getResources, e, this.colorSpace);
      this.currentBrush = t;
      t = null;
    }
  };
  r.prototype.fontControl = function (t, e, i) {
    if (t != null) {
      var n = e != null ? e.subSuperScript : ie.None;
      var s = this.currentStringFormat != null ? this.currentStringFormat.subSuperScript : ie.None;
      if (i || t !== this.currentFont || n !== s) {
        var o = this.getResources.getResources();
        this.currentFont = t;
        this.currentStringFormat = e;
        var a = t.metrics.getSize(e);
        this.isEmfTextScaled = false;
        var h = o.getName(t);
        this.pdfStreamWriter.setFont(t, h, a);
      }
    }
  };
  r.prototype.setTransparency = function (t, e, i) {
    if (typeof e > 'u') {
      this.istransparencySet = true;
      this.setTransparency(t, t, ii.Normal);
    } else if (typeof e == 'number' && typeof i > 'u') this.setTransparency(t, e, ii.Normal);
    else {
      if (this.trasparencies == null) {
        this.trasparencies = new We();
      }
      var n = null;
      var s = new Go(t, e, i);
      if (this.trasparencies.containsKey(s)) {
        n = this.trasparencies.getValue(s);
      }
      if (n == null) {
        n = new ji(t, e, i);
        this.trasparencies.setValue(s, n);
      }
      var o = this.getResources.getResources();
      var a = o.getName(n);
      var h = this.streamWriter;
      this.streamWriter.setGraphicsState(a);
    }
  };
  r.prototype.clipTranslateMargins = function (t, e, i, n, s, o) {
    if (t instanceof I && typeof e > 'u') {
      this.clipBounds = t;
      this.pdfStreamWriter.writeComment('Clip margins.');
      this.pdfStreamWriter.appendRectangle(t);
      this.pdfStreamWriter.closePath();
      this.pdfStreamWriter.clipPath(false);
      this.pdfStreamWriter.writeComment('Translate co-ordinate system.');
      this.translateTransform(t.x, t.y);
    } else if (typeof t == 'number') {
      var a = new I(i, n, this.size.width - i - s, this.size.height - n - o);
      this.clipBounds = a;
      this.pdfStreamWriter.writeComment('Clip margins.');
      this.pdfStreamWriter.appendRectangle(a);
      this.pdfStreamWriter.closePath();
      this.pdfStreamWriter.clipPath(false);
      this.pdfStreamWriter.writeComment('Translate co-ordinate system.');
      this.translateTransform(t, e);
    }
  };
  r.prototype.updateY = function (t) {
    return -t;
  };
  r.prototype.translateTransform = function (t, e) {
    var i = new jt();
    this.getTranslateTransform(t, e, i);
    this.pdfStreamWriter.modifyCtm(i);
    this.matrix.multiply(i);
  };
  r.prototype.getTranslateTransform = function (t, e, i) {
    i.translate(t, this.updateY(e));
    return i;
  };
  r.prototype.scaleTransform = function (t, e) {
    var i = new jt();
    this.getScaleTransform(t, e, i);
    this.pdfStreamWriter.modifyCtm(i);
    this.matrix.multiply(i);
  };
  r.prototype.getScaleTransform = function (t, e, i) {
    if (i == null) {
      i = new jt();
    }
    i.scale(t, e);
    return i;
  };
  r.prototype.rotateTransform = function (t) {
    var e = new jt();
    this.getRotateTransform(t, e);
    this.pdfStreamWriter.modifyCtm(e);
    this.matrix.multiply(e);
  };
  r.prototype.initializeCoordinates = function () {
    this.pdfStreamWriter.writeComment('Change co-ordinate system to left/top.');
    if (this.mediaBoxUpperRightBound !== -this.size.height && this.cropBox == null) {
      this.mediaBoxUpperRightBound === this.size.height || this.mediaBoxUpperRightBound === 0
        ? this.translateTransform(0, this.updateY(this.size.height))
        : this.translateTransform(0, this.updateY(this.mediaBoxUpperRightBound));
    }
  };
  r.prototype.getRotateTransform = function (t, e) {
    if (e == null || typeof e > 'u') {
      e = new jt();
    }
    e.rotate(this.updateY(t));
    return e;
  };
  r.prototype.save = function () {
    var t = new jo(this, this.matrix.clone());
    t.brush = this.currentBrush;
    t.pen = this.currentPen;
    t.font = this.currentFont;
    t.colorSpace = this.currentColorSpace;
    t.characterSpacing = this.previousCharacterSpacing;
    t.wordSpacing = this.previousWordSpacing;
    t.textScaling = this.previousTextScaling;
    t.textRenderingMode = this.previousTextRenderingMode;
    this.graphicsState.push(t);
    this.pdfStreamWriter.saveGraphicsState();
    return t;
  };
  r.prototype.restore = function (t) {
    if (typeof t > 'u')
      if (this.graphicsState.length > 0) {
        this.doRestoreState();
      } else if (this.graphicsState.indexOf(t) !== -1)
        for (; this.graphicsState.length !== 0; ) {
          var e = this.doRestoreState();
          if (e === t) break;
        }
  };
  r.prototype.doRestoreState = function () {
    var t = this.graphicsState.pop();
    this.transformationMatrix = t.matrix;
    this.currentBrush = t.brush;
    this.currentPen = t.pen;
    this.currentFont = t.font;
    this.currentColorSpace = t.colorSpace;
    this.previousCharacterSpacing = t.characterSpacing;
    this.previousWordSpacing = t.wordSpacing;
    this.previousTextScaling = t.textScaling;
    this.previousTextRenderingMode = t.textRenderingMode;
    this.pdfStreamWriter.restoreGraphicsState();
    return t;
  };
  r.prototype.drawPath = function (t, e, i) {
    this._drawPath(t, e, i.pathPoints, i.pathTypes, i.fillMode);
  };
  r.prototype._drawPath = function (t, e, i, n, s) {
    e instanceof ce
      ? ((this.bCSInitialized = false), (e.graphics.colorSpace = this.colorSpace))
      : e instanceof Re && ((this.bCSInitialized = false), (e.colorSpace = this.colorSpace));
    this.stateControl(t, e, null);
    this.buildUpPath(i, n);
    this.drawPathHelper(t, e, s, false);
  };
  r.prototype.drawArc = function (t, e, i, n, s, o, a) {
    e instanceof I
      ? this.drawArc(t, e.x, e.y, e.width, e.height, i, n)
      : a !== 0 &&
        (this.stateControl(t, null, null),
        this.constructArcPath(e, i, e + n, i + s, o, a),
        this.drawPathHelper(t, null, false));
  };
  r.prototype.buildUpPath = function (t, e) {
    for (var i = t.length, n = 0; n < i; ++n) {
      var s = 0;
      var o = t[n];
      switch (e[n] & r.pathTypesValuesMask) {
        case xt.Start:
          this.pdfStreamWriter.beginPath(t[n].x, t[n].y);
          break;
        case xt.Bezier3:
          {
            var a = new D(0, 0);
            var h = new D(0, 0);
            var l = this.getBezierPoints(t, e, n, a, h);
          }
          {
            this.pdfStreamWriter.appendBezierSegment(t[n], l.p2, l.p3);
            n = l.i;
          }
          break;
        case xt.Line:
          this.pdfStreamWriter.appendLineSegment(t[n]);
          break;
        default:
          throw new Error('ArithmeticException - Incorrect path formation.');
      }
      s = e[n];
      this.checkFlags(s);
    }
  };
  r.prototype.getBezierPoints = function (t, e, i, n, s) {
    ++i;
    if ((e[i] & r.pathTypesValuesMask) === xt.Bezier3) {
      n = t[i];
      ++i;
      if ((e[i] & r.pathTypesValuesMask) === xt.Bezier3) s = t[i];
      else throw new Error('ArgumentException : errorMsg');
    } else throw new Error('ArgumentException : errorMsg');
    return {
      i,
      p2: n,
      p3: s,
    };
  };
  r.prototype.checkFlags = function (t) {
    if ((t & xt.CloseSubpath) === xt.CloseSubpath) {
      this.pdfStreamWriter.closePath();
    }
  };
  r.prototype.constructArcPath = function (t, e, i, n, s, o) {
    var a = this.getBezierArc(t, e, i, n, s, o);
    if (a.length !== 0) {
      var h = [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]];
      this.pdfStreamWriter.beginPath(h[0], h[1]);
      var l = 0;
      for (l = 0; l < a.length; l = l + 8) {
        h = [a[l], a[l + 1], a[l + 2], a[l + 3], a[l + 4], a[l + 5], a[l + 6], a[l + 7]];
        this.pdfStreamWriter.appendBezierSegment(h[2], h[3], h[4], h[5], h[6], h[7]);
      }
    }
  };
  r.prototype.getBezierArc = function (t, e, i, n, s, o) {
    if (t > i) {
      var a = void 0;
      a = t;
      t = i;
      i = a;
    }
    if (n > e) {
      var a = void 0;
      a = e;
      e = n;
      n = a;
    }
    var h;
    var l;
    Math.abs(o) <= 90 ? ((h = o), (l = 1)) : ((l = Math.ceil(Math.abs(o) / 90)), (h = o / l));
    for (
      var u = (t + i) / 2,
        d = (e + n) / 2,
        c = (i - t) / 2,
        f = (n - e) / 2,
        g = h * (Math.PI / 360),
        y = Math.abs((1.3333333333333333 * (1 - Math.cos(g))) / Math.sin(g)),
        m = [],
        w = 0;
      w < l;
      w++
    ) {
      var b = (s + w * h) * (Math.PI / 180);
      var v = (s + (w + 1) * h) * (Math.PI / 180);
      var x = Math.cos(b);
      var P = Math.cos(v);
      var B = Math.sin(b);
      var R = Math.sin(v);
      h > 0
        ? m.push(
            u + c * x,
            d - f * B,
            u + c * (x - y * B),
            d - f * (B + y * x),
            u + c * (P + y * R),
            d - f * (R - y * P),
            u + c * P,
            d - f * R,
          )
        : m.push(
            u + c * x,
            d - f * B,
            u + c * (x + y * B),
            d - f * (B - y * x),
            u + c * (P - y * R),
            d - f * (R + y * P),
            u + c * P,
            d - f * R,
          );
    }
    return m;
  };
  r.pathTypesValuesMask = 15;
  r.transparencyObject = false;
  return r;
})();
var qi = (function () {
  function r(t) {
    this.sender = t;
  }
  r.prototype.getResources = function () {
    return this.sender.getResources();
  };
  return r;
})();
var jo = (function () {
  function r(t, e) {
    this.internalTextRenderingMode = Wt.Fill;
    this.internalCharacterSpacing = 0;
    this.internalWordSpacing = 0;
    this.internalTextScaling = 100;
    this.pdfColorSpace = Q.Rgb;
    if (typeof t < 'u') {
      this.pdfGraphics = t;
      var i = [];
      t.matrix.matrix.elements.forEach(function (n) {
        i.push(n);
      });
      this.transformationMatrix = new jt();
      this.transformationMatrix.matrix = new zi(i);
    }
  }
  Object.defineProperty(r.prototype, 'graphics', {
    get: function () {
      return this.pdfGraphics;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'matrix', {
    get: function () {
      return this.transformationMatrix;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'characterSpacing', {
    get: function () {
      return this.internalCharacterSpacing;
    },
    set: function (t) {
      this.internalCharacterSpacing = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'wordSpacing', {
    get: function () {
      return this.internalWordSpacing;
    },
    set: function (t) {
      this.internalWordSpacing = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'textScaling', {
    get: function () {
      return this.internalTextScaling;
    },
    set: function (t) {
      this.internalTextScaling = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pen', {
    get: function () {
      return this.pdfPen;
    },
    set: function (t) {
      this.pdfPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'brush', {
    get: function () {
      return this.pdfBrush;
    },
    set: function (t) {
      this.pdfBrush = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'font', {
    get: function () {
      return this.pdfFont;
    },
    set: function (t) {
      this.pdfFont = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'colorSpace', {
    get: function () {
      return this.pdfColorSpace;
    },
    set: function (t) {
      this.pdfColorSpace = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'textRenderingMode', {
    get: function () {
      return this.internalTextRenderingMode;
    },
    set: function (t) {
      this.internalTextRenderingMode = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Go = (function () {
  function r(t, e, i) {
    this.alphaPen = t;
    this.alphaBrush = e;
    this.blendMode = i;
  }
  return r;
})();
var si = (function () {
  function r(t, e) {
    this.pdfColorSpace = Q.Rgb;
    this.isVisible = true;
    this.sublayer = false;
    this.contentLength = 0;
    this.dictionaryProperties = new rt();
    if (t === null) throw new Error('ArgumentNullException:page');
    this.pdfPage = t;
    this.clipPageTemplates = true;
    if (typeof e > 'u') this.content = new Pt();
    else if (e instanceof Pt || e === null) {
      if (e === null) throw new Error('ArgumentNullException:stream');
      this.content = e;
    } else {
      this.content = new Pt();
      this.clipPageTemplates = e;
    }
  }
  Object.defineProperty(r.prototype, 'colorSpace', {
    get: function () {
      return this.pdfColorSpace;
    },
    set: function (t) {
      this.pdfColorSpace = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'page', {
    get: function () {
      return this.pdfPage;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'layerId', {
    get: function () {
      return this.layerid;
    },
    set: function (t) {
      this.layerid = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'name', {
    get: function () {
      return this.layerName;
    },
    set: function (t) {
      this.layerName = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'visible', {
    get: function () {
      return this.isVisible;
    },
    set: function (t) {
      this.isVisible = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'graphics', {
    get: function () {
      if (this.pdfGraphics == null) {
        this.initializeGraphics(this.page);
      }
      return this.pdfGraphics;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'layers', {
    get: function () {
      return this.layer == null
        ? ((this.layer = new Pn(this.page)), (this.layer.sublayer = true), this.layer)
        : this.layer;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function () {
    var t = new r(this.pdfPage);
    t.name = '';
    return t;
  };
  r.prototype.sign = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  };
  r.prototype.initializeGraphics = function (t) {
    var e = t;
    var i = new qi(this.page);
    this.pdfGraphics = new _i(t.size, i, this.content);
    this.pdfGraphics.mediaBoxUpperRightBound = 0;
    if (t != null) {
      var n = t.section.parent;
      if (t.section.parent != null) {
        this.pdfGraphics.colorSpace = t.section.parent.document.colorSpace;
        this.colorSpace = t.section.parent.document.colorSpace;
      }
    }
    var s = this.sign(t.origin.y) === this.sign(t.origin.x);
    if ((t.origin.x >= 0 && t.origin.y >= 0) || !s) {
      this.pdfGraphics.initializeCoordinates();
    }
    var o = t.section.getActualBounds(t, true);
    var a = t.section.pageSettings.margins;
    this.clipPageTemplates
      ? t.origin.x >= 0 && t.origin.y >= 0 && this.pdfGraphics.clipTranslateMargins(o)
      : this.graphics.clipTranslateMargins(
          o.x,
          o.y,
          t.section.pageSettings.margins.left,
          t.section.pageSettings.margins.top,
          t.section.pageSettings.margins.right,
          t.section.pageSettings.margins.bottom,
        );
    this.pdfGraphics.setLayer(this);
  };
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.content;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Ho = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      if (typeof this.collection > 'u') {
        this.collection = [];
      }
      return this.collection.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'list', {
    get: function () {
      if (typeof this.collection > 'u') {
        this.collection = [];
      }
      return this.collection;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Wo = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Pn = (function (r) {
  Wo(t, r);
  function t(e) {
    var i = r() || this;
    i.parentLayerCount = 0;
    i.sublayer = false;
    i.optionalContent = new q();
    if (e instanceof xn) {
      i.page = e;
      var n = e;
      i.parseLayers(e);
    }
    return i;
  }
  t.prototype.items = function (e, i) {
    if (typeof e == 'number' && typeof i > 'u') {
      var n = this.list[e];
      return this.list[e];
    } else {
      if (i == null) throw new Error('ArgumentNullException: layer');
      if (i.page !== this.page) throw new Error('ArgumentException: The layer belongs to another page');
    }
  };
  t.prototype.add = function (e, i) {
    if (typeof e > 'u') {
      var n = new si(this.page);
      n.name = '';
      this.add(n);
      return n;
    } else if (e instanceof si) {
      var s = this.list.push(e);
      this.addLayer(s, e);
      return s;
    } else return 0;
  };
  t.prototype.addLayer = function (e, i) {
    var n = new _(i);
    this.page.contents.add(n);
  };
  t.prototype.insert = function (e, i) {
    for (var n = [], s = this.list.length, o = e; o < s; o++) n.push(this.list.pop());
    this.list.push(i);
    for (var o = 0; o < n.length; o++) this.list.push(n[o]);
    this.insertLayer(e, i);
  };
  t.prototype.insertLayer = function (e, i) {
    if (i == null) throw new Error('ArgumentNullException:layer');
    var n = new _(i);
    this.page.contents.insert(e, n);
  };
  t.prototype.parseLayers = function (e) {
    var i = this.page.contents;
    this.page.getResources();
    e.crossTable;
    var n = new Pt();
    var s = new Pt();
    var o = 'q';
    var a = 'Q';
    var h = [];
    h.push('q');
    n.data = h;
    i.insert(0, new _(n));
    h = [];
    h.push('Q');
    s.data = h;
    i.insert(i.count, new _(s));
  };
  t.prototype.indexOf = function (e) {
    if (e == null) throw new Error('ArgumentNullException: layer');
    var i = this.list.indexOf(e);
    return i;
  };
  return t;
})(Ho);
var xn = (function () {
  function r(t) {
    this.defLayerIndex = -1;
    this.modified = false;
    this.dictionaryProperties = new rt();
    this.pageDictionary = t;
  }
  Object.defineProperty(r.prototype, 'section', {
    get: function () {
      return this.pdfSection;
    },
    set: function (t) {
      this.pdfSection = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'dictionary', {
    get: function () {
      return this.pageDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.pageDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'defaultLayer', {
    get: function () {
      var t = this.layers;
      var e = this.defaultLayerIndex;
      var i = this.layers.items(this.defaultLayerIndex);
      return i;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'defaultLayerIndex', {
    get: function () {
      if (this.layerCollection.count === 0 || this.defLayerIndex === -1) {
        var t = this.layerCollection.add();
        this.defLayerIndex = this.layerCollection.indexOf(t);
      }
      return this.defLayerIndex;
    },
    set: function (t) {
      if (t < 0 || t > this.layers.count - 1)
        throw new Error('ArgumentOutOfRangeException : value, Index can not be less 0 and greater Layers.Count - 1');
      this.defLayerIndex = t;
      this.modified = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'layers', {
    get: function () {
      if (this.layerCollection == null || typeof this.layerCollection > 'u') {
        this.layerCollection = new Pn(this);
      }
      return this.layerCollection;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getResources = function () {
    if (this.resources == null) {
      this.resources = new Ve();
      this.dictionary.items.setValue(this.dictionaryProperties.resources, this.resources);
    }
    return this.resources;
  };
  Object.defineProperty(r.prototype, 'contents', {
    get: function () {
      var t = this.pageDictionary.items.getValue(this.dictionaryProperties.contents);
      var e = t;
      if (e == null) {
        e = new Z();
        this.pageDictionary.items.setValue(this.dictionaryProperties.contents, e);
      }
      return e;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setResources = function (t) {
    this.resources = t;
    this.dictionary.items.setValue(this.dictionaryProperties.resources, this.resources);
    this.modified = true;
  };
  return r;
})();
var Uo = (function () {
  function r(t) {
    this.alreadyExistsAnnotationError = 'This annotatation had been already added to page';
    this.missingAnnotationException = 'Annotation is not contained in collection.';
    this.dictionaryProperties = new rt();
    this.internalAnnotations = new Z();
    this.lists = [];
    if (typeof t < 'u') {
      this.page = t;
    }
  }
  Object.defineProperty(r.prototype, 'annotations', {
    get: function () {
      return this.internalAnnotations;
    },
    set: function (t) {
      this.internalAnnotations = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    this.doAdd(t);
  };
  r.prototype.doAdd = function (t) {
    if (typeof t.destination < 'u') {
      var e = new Kt();
      var i = e.layout(t.text, t.font, t.stringFormat, new C(t.bounds.width, 0), false, new C(0, 0));
      var n = t.bounds.y;
      if (i.lines.length === 1) {
        var s = t.font.measureString(i.lines[0].text);
        t.bounds = new I(new D(t.bounds.x, n), s);
        t.text = i.lines[0].text;
        this.page.graphics.drawString(
          t.text,
          t.font,
          null,
          t.brush,
          t.bounds.x,
          t.bounds.y,
          t.bounds.width,
          t.bounds.height,
          null,
        );
        t.setPage(this.page);
        this.setColor(t);
        this.internalAnnotations.add(new _(t));
        this.lists.push(t);
      } else
        for (var o = 0; o < i.lines.length; o++) {
          var s = t.font.measureString(i.lines[o].text);
          if (o === 0) {
            t.bounds = new I(t.bounds.x, n, s.width, s.height);
            t.text = i.lines[o].text;
            this.page.graphics.drawString(t.text, t.font, null, t.brush, t.bounds.x, n, s.width, s.height, null);
            t.setPage(this.page);
            this.setColor(t);
            this.internalAnnotations.add(new _(t));
            this.lists.push(t);
            n += t.bounds.height;
          } else {
            var a = t.clone();
            a.bounds = new I(new D(t.bounds.x, n), s);
            a.text = i.lines[o].text;
            this.page.graphics.drawString(
              a.text,
              a.font,
              null,
              a.brush,
              a.bounds.x,
              a.bounds.y,
              a.bounds.width,
              a.bounds.height,
              null,
            );
            a.setPage(this.page);
            this.setColor(a);
            this.internalAnnotations.add(new _(a));
            this.lists.push(a);
            n += a.bounds.height;
          }
        }
    } else {
      t.setPage(this.page);
      this.internalAnnotations.add(new _(t));
      return this.lists.push(t);
    }
  };
  r.prototype.setColor = function (t) {
    var e = Q.Rgb;
    var i = t.color.toArray(Q.Rgb);
    t.dictionary.items.setValue(this.dictionaryProperties.c, i);
  };
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.internalAnnotations;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var _o = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Nt = (function (r) {
  _o(t, r);
  function t() {
    var e = r(new q()) || this;
    e.annotationCollection = null;
    e.beginSave = null;
    e.initialize();
    return e;
  }
  Object.defineProperty(t.prototype, 'document', {
    get: function () {
      return this.section !== null && this.section.parent !== null ? this.section.parent.document : null;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'graphics', {
    get: function () {
      var e = this.defaultLayer.graphics;
      e.currentPage = this;
      return e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'crossTable', {
    get: function () {
      if (this.section === null) throw new Error('PdfDocumentException : Page is not created');
      return this.section.parent === null
        ? this.section.parentDocument.crossTable
        : this.section.parent.document.crossTable;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'size', {
    get: function () {
      return this.section.pageSettings.size;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'origin', {
    get: function () {
      return this.section.pageSettings.origin;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'annotations', {
    get: function () {
      if (this.annotationCollection == null) {
        this.annotationCollection = new Uo(this);
        this.dictionary.items.setValue(this.dictionaryProperties.annots, this.annotationCollection.element);
        this.annotationCollection.annotations = this.dictionary.items.getValue(this.dictionaryProperties.annots);
      }
      return this.annotationCollection;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.initialize = function () {
    this.dictionary.items.setValue(this.dictionaryProperties.type, new k('Page'));
    this.dictionary.pageBeginDrawTemplate = new Ks(this);
  };
  t.prototype.setSection = function (e) {
    this.section = e;
    this.dictionary.items.setValue(this.dictionaryProperties.parent, new _(e));
  };
  t.prototype.resetProgress = function () {
    this.isProgressOn = false;
  };
  t.prototype.getClientSize = function () {
    var e = this.section.getActualBounds(this, true);
    return new C(e.width, e.height);
  };
  t.prototype.pageBeginSave = function () {
    var e = this.document;
    if (typeof this.document !== void 0 && this.document != null) {
      this.drawPageTemplates(this.document);
    }
    if (this.beginSave != null && typeof this.beginSave < 'u') {
      this.beginSave(this);
    }
  };
  t.prototype.drawPageTemplates = function (e) {
    var i = this.section.containsTemplates(e, this, false);
    if (i) {
      var n = new si(this, false);
      this.layers.insert(0, n);
      this.section.drawTemplates(this, n, e, false);
      if (n.graphics !== null && typeof n.graphics < 'u')
        for (var s = 0; s < n.graphics.automaticFields.automaticFields.length; s++) {
          var o = n.graphics.automaticFields.automaticFields[s];
          n.graphics.automaticFields.automaticFields[s].field.performDraw(
            n.graphics,
            n.graphics.automaticFields.automaticFields[s].location,
            n.graphics.automaticFields.automaticFields[s].scalingX,
            n.graphics.automaticFields.automaticFields[s].scalingY,
          );
        }
    }
    var a = this.section.containsTemplates(e, this, true);
    if (a) {
      var h = new si(this, false);
      this.layers.add(h);
      this.section.drawTemplates(this, h, e, true);
    }
  };
  return t;
})(xn);
var cn = (function () {
  function r(t) {
    typeof t < 'u' ? (this.pdfPage = t) : (this.pdfPage = null);
  }
  Object.defineProperty(r.prototype, 'page', {
    get: function () {
      return this.pdfPage;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var qo = (function () {
  function r(t) {
    this.pdfSection = null;
    if (t == null) throw Error('ArgumentNullException("section")');
    this.section = t;
  }
  Object.defineProperty(r.prototype, 'section', {
    get: function () {
      return this.pdfSection;
    },
    set: function (t) {
      this.pdfSection = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.contains = function (t) {
    return this.section.contains(t);
  };
  r.prototype.remove = function (t) {
    this.section.remove(t);
  };
  r.prototype.add = function () {
    return this.section.add();
  };
  return r;
})();
var Rn = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'left', {
    get: function () {
      return this.leftTemplate;
    },
    set: function (t) {
      this.leftTemplate = this.checkElement(t, W.Left);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'top', {
    get: function () {
      return this.topTemplate;
    },
    set: function (t) {
      this.topTemplate = this.checkElement(t, W.Top);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'right', {
    get: function () {
      return this.rightTemplate;
    },
    set: function (t) {
      this.rightTemplate = this.checkElement(t, W.Right);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bottom', {
    get: function () {
      return this.bottomTemplate;
    },
    set: function (t) {
      this.bottomTemplate = this.checkElement(t, W.Bottom);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'EvenLeft', {
    get: function () {
      return this.evenLeft;
    },
    set: function (t) {
      this.evenLeft = this.checkElement(t, W.Left);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'EvenTop', {
    get: function () {
      return this.evenTop;
    },
    set: function (t) {
      this.evenTop = this.checkElement(t, W.Top);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'EvenRight', {
    get: function () {
      return this.evenRight;
    },
    set: function (t) {
      this.evenRight = this.checkElement(t, W.Right);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'EvenBottom', {
    get: function () {
      return this.evenBottom;
    },
    set: function (t) {
      this.evenBottom = this.checkElement(t, W.Bottom);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'OddLeft', {
    get: function () {
      return this.oddLeft;
    },
    set: function (t) {
      this.oddLeft = this.checkElement(t, W.Left);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'OddTop', {
    get: function () {
      return this.oddTop;
    },
    set: function (t) {
      this.oddTop = this.checkElement(t, W.Top);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'OddRight', {
    get: function () {
      return this.oddRight;
    },
    set: function (t) {
      this.oddRight = this.checkElement(t, W.Right);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'OddBottom', {
    get: function () {
      return this.oddBottom;
    },
    set: function (t) {
      this.oddBottom = this.checkElement(t, W.Bottom);
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getLeft = function (t) {
    if (t == null) throw new Error('ArgumentNullException:page');
    var e = null;
    var i = this.isEven(t);
    i ? (e = this.EvenLeft != null ? this.EvenLeft : this.left) : (e = this.OddLeft != null ? this.OddLeft : this.left);
    return e;
  };
  r.prototype.getTop = function (t) {
    if (t == null) throw new Error('ArgumentNullException:page');
    var e = null;
    var i = this.isEven(t);
    i ? (e = this.EvenTop != null ? this.EvenTop : this.top) : (e = this.OddTop != null ? this.OddTop : this.top);
    return e;
  };
  r.prototype.getRight = function (t) {
    if (t == null) throw new Error('ArgumentNullException:page');
    var e = null;
    var i = this.isEven(t);
    i
      ? (e = this.EvenRight != null ? this.EvenRight : this.right)
      : (e = this.OddRight != null ? this.OddRight : this.right);
    return e;
  };
  r.prototype.getBottom = function (t) {
    if (t == null) throw new Error('ArgumentNullException:page');
    var e = null;
    var i = this.isEven(t);
    i
      ? (e = this.EvenBottom != null ? this.EvenBottom : this.bottom)
      : (e = this.OddBottom != null ? this.OddBottom : this.bottom);
    return e;
  };
  r.prototype.isEven = function (t) {
    var e = t.section.document.pages;
    var i = 0;
    t.section.document.pages.pageCollectionIndex.containsKey(t)
      ? (i = t.section.document.pages.pageCollectionIndex.getValue(t) + 1)
      : (i = t.section.document.pages.indexOf(t) + 1);
    var n = i % 2 === 0;
    return n;
  };
  r.prototype.checkElement = function (t, e) {
    if (t != null) {
      if (typeof t.type < 'u' && t.type !== W.None)
        throw new Error('NotSupportedException:Can not reassign the template element. Please, create new one.');
      t.type = e;
    }
    return t;
  };
  return r;
})();
var Ko = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Jo = (function (r) {
  Ko(t, r);
  function t() {
    var e = r() || this;
    e.leftValue = e.topValue = e.rightValue = e.bottomValue = e.stampValue = true;
    return e;
  }
  Object.defineProperty(t.prototype, 'applyDocumentLeftTemplate', {
    get: function () {
      return this.leftValue;
    },
    set: function (e) {
      this.leftValue = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'applyDocumentTopTemplate', {
    get: function () {
      return this.topValue;
    },
    set: function (e) {
      this.topValue = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'applyDocumentRightTemplate', {
    get: function () {
      return this.rightValue;
    },
    set: function (e) {
      this.rightValue = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'applyDocumentBottomTemplate', {
    get: function () {
      return this.bottomValue;
    },
    set: function (e) {
      this.bottomValue = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'applyDocumentStamps', {
    get: function () {
      return this.stampValue;
    },
    set: function (e) {
      this.stampValue = e;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Rn);
var $o = (function () {
  function r(t, e) {
    this.pageAdded = new cn();
    this.pdfPages = [];
    this.dictionaryProperties = new rt();
    this.pdfDocument = t;
    typeof e > 'u'
      ? ((this.settings = t.pageSettings.clone()), (this.initialSettings = this.settings.clone()))
      : ((this.settings = e.clone()), (this.initialSettings = this.settings.clone()));
    this.initialize();
  }
  Object.defineProperty(r.prototype, 'parent', {
    get: function () {
      return this.sectionCollection;
    },
    set: function (t) {
      this.sectionCollection = t;
      this.section.items.setValue(this.dictionaryProperties.parent, new _(t));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'parentDocument', {
    get: function () {
      return this.pdfDocument;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pageSettings', {
    get: function () {
      return this.settings;
    },
    set: function (t) {
      if (t != null) this.settings = t;
      else throw Error('Value can not be null.');
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.section;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.pagesReferences.count;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'template', {
    get: function () {
      if (this.pageTemplate == null) {
        this.pageTemplate = new Jo();
      }
      return this.pageTemplate;
    },
    set: function (t) {
      this.pageTemplate = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'document', {
    get: function () {
      return this.sectionCollection.document;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pages', {
    get: function () {
      if (this.pagesCollection == null || typeof this.pagesCollection > 'u') {
        this.pagesCollection = new qo(this);
      }
      return this.pagesCollection;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getPages = function () {
    return this.pdfPages;
  };
  r.prototype.pointToNativePdf = function (t, e) {
    var i = this.getActualBounds(t, true);
    e.x += i.x;
    e.y = this.pageSettings.height - e.y;
    return e;
  };
  r.prototype.setPageSettings = function (t) {
    this.settings = t;
    this.state.orientation = t.orientation;
    this.state.rotate = t.rotate;
    this.state.size = t.size;
    this.state.origin = t.origin;
  };
  r.prototype.initialize = function () {
    this.pagesReferences = new Z();
    this.section = new q();
    this.state = new Yo(this.pdfDocument);
    this.section.sectionBeginSave = new qs(this, this.state);
    this.pageCount = new E(0);
    this.section.items.setValue(this.dictionaryProperties.count, this.pageCount);
    this.section.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.pages));
    this.section.items.setValue(this.dictionaryProperties.kids, this.pagesReferences);
  };
  r.prototype.containsTemplates = function (t, e, i) {
    var n = this.getDocumentTemplates(t, e, i);
    var s = this.getSectionTemplates(e, i);
    return n.length > 0 || s.length > 0;
  };
  r.prototype.getDocumentTemplates = function (t, e, i) {
    var n = [];
    if (
      this.template.applyDocumentTopTemplate &&
      t.template.getTop(e) != null &&
      (!(t.template.getTop(e).foreground || i) || (t.template.getTop(e).foreground && i))
    ) {
      n.push(t.template.getTop(e));
    }
    if (
      this.template.applyDocumentBottomTemplate &&
      t.template.getBottom(e) != null &&
      (!(t.template.getBottom(e).foreground || i) || (t.template.getBottom(e).foreground && i))
    ) {
      n.push(t.template.getBottom(e));
    }
    if (
      this.template.applyDocumentLeftTemplate &&
      t.template.getLeft(e) != null &&
      (!(t.template.getLeft(e).foreground || i) || (t.template.getLeft(e).foreground && i))
    ) {
      n.push(t.template.getLeft(e));
    }
    if (
      this.template.applyDocumentRightTemplate &&
      t.template.getRight(e) != null &&
      (!(t.template.getRight(e).foreground || i) || (t.template.getRight(e).foreground && i))
    ) {
      n.push(t.template.getRight(e));
    }
    return n;
  };
  r.prototype.getSectionTemplates = function (t, e) {
    var i = [];
    if (this.template.getTop(t) != null) {
      var n = this.template.getTop(t);
      if (!(n.foreground || e) || (n.foreground && e)) {
        i.push(n);
      }
    }
    if (this.template.getBottom(t) != null) {
      var n = this.template.getBottom(t);
      if (!(n.foreground || e) || (n.foreground && e)) {
        i.push(n);
      }
    }
    if (this.template.getLeft(t) != null) {
      var n = this.template.getLeft(t);
      if (!(n.foreground || e) || (n.foreground && e)) {
        i.push(n);
      }
    }
    if (this.template.getRight(t) != null) {
      var n = this.template.getRight(t);
      if (!(n.foreground || e) || (n.foreground && e)) {
        i.push(n);
      }
    }
    return i;
  };
  r.prototype.add = function (t) {
    if (typeof t > 'u') {
      var e = new Nt();
      this.add(e);
      return e;
    } else {
      var i = this.checkPresence(t);
      this.pdfPages.push(t);
      this.pagesReferences.add(i);
      t.setSection(this);
      t.resetProgress();
      this.pageAddedMethod(t);
    }
  };
  r.prototype.checkPresence = function (t) {
    for (var e = new _(t), i = false, n = this.parent, s = 0; s < n.section.length; s++) {
      var o = n.section[s];
      i = i || n.section[s].contains(t);
    }
    return e;
  };
  r.prototype.contains = function (t) {
    var e = this.indexOf(t);
    return 0 <= e;
  };
  r.prototype.indexOf = function (t) {
    for (var e = 0; e < this.pdfPages.length; e++) if (this.pdfPages[e] === t) return this.pdfPages.indexOf(t);
    var i = new _(t);
    return this.pagesReferences.indexOf(i);
  };
  r.prototype.pageAddedMethod = function (t) {
    var e = new cn(t);
    this.onPageAdded(e);
    var i = this.parent;
    this.parent.document.pages.onPageAdded(e);
    this.pageCount.intValue = this.count;
  };
  r.prototype.onPageAdded = function (t) {};
  r.prototype.getActualBounds = function (t, e, i) {
    if (t instanceof Nt && typeof e == 'boolean') {
      var n = void 0;
      var s = this.parent.document;
      n = this.getActualBounds(this.parent.document, t, e);
      return n;
    } else {
      t = t;
      e = e;
      i = i;
      var o = new I(0, 0, 0, 0);
      o.height = i ? this.pageSettings.size.height : this.pageSettings.getActualSize().height;
      o.width = i ? this.pageSettings.size.width : this.pageSettings.getActualSize().width;
      var a = this.getLeftIndentWidth(t, e, i);
      var h = this.getTopIndentHeight(t, e, i);
      var l = this.getRightIndentWidth(t, e, i);
      var u = this.getBottomIndentHeight(t, e, i);
      o.x += a;
      o.y += h;
      o.width -= a + l;
      o.height -= h + u;
      return o;
    }
  };
  r.prototype.getLeftIndentWidth = function (t, e, i) {
    if (t == null) throw new Error('ArgumentNullException:document');
    if (e == null) throw new Error('ArgumentNullException:page');
    var n = i ? this.pageSettings.margins.left : 0;
    var s = this.template.getLeft(e) != null ? this.template.getLeft(e).width : 0;
    var o = t.template.getLeft(e) != null ? t.template.getLeft(e).width : 0;
    n += this.template.applyDocumentLeftTemplate ? Math.max(s, o) : s;
    return n;
  };
  r.prototype.getTopIndentHeight = function (t, e, i) {
    if (t == null) throw new Error('ArgumentNullException:document');
    if (e == null) throw new Error('ArgumentNullException:page');
    var n = i ? this.pageSettings.margins.top : 0;
    var s = this.template.getTop(e) != null ? this.template.getTop(e).height : 0;
    var o = t.template.getTop(e) != null ? t.template.getTop(e).height : 0;
    n += this.template.applyDocumentTopTemplate ? Math.max(s, o) : s;
    return n;
  };
  r.prototype.getRightIndentWidth = function (t, e, i) {
    if (t == null) throw new Error('ArgumentNullException:document');
    if (e == null) throw new Error('ArgumentNullException:page');
    var n = i ? this.pageSettings.margins.right : 0;
    var s = this.template.getRight(e) != null ? this.template.getRight(e).width : 0;
    var o = t.template.getRight(e) != null ? t.template.getRight(e).width : 0;
    n += this.template.applyDocumentRightTemplate ? Math.max(s, o) : s;
    return n;
  };
  r.prototype.getBottomIndentHeight = function (t, e, i) {
    if (t == null) throw new Error('ArgumentNullException:document');
    if (e == null) throw new Error('ArgumentNullException:page');
    var n = i ? this.pageSettings.margins.bottom : 0;
    var s = this.template.getBottom(e) != null ? this.template.getBottom(e).height : 0;
    var o = t.template.getBottom(e) != null ? t.template.getBottom(e).height : 0;
    n += this.template.applyDocumentBottomTemplate ? Math.max(s, o) : s;
    return n;
  };
  r.prototype.remove = function (t) {
    if (t == null) throw Error('ArgumentNullException("page")');
    var e = this.pdfPages.indexOf(t);
    this.pagesReferences.removeAt(e);
    for (var i = [], n = 0; n < e; n++) i.push(this.pdfPages[n]);
    for (var n = e + 1; n < this.pdfPages.length; n++) i.push(this.pdfPages[n]);
    this.pdfPages = i;
  };
  r.prototype.applyPageSettings = function (t, e, i) {
    var n = new I(i.origin, i.size);
    t.items.setValue(this.dictionaryProperties.mediaBox, Z.fromRectangle(n));
    var s = 0;
    s = In.rotateFactor * i.rotate;
    var o = new E(s);
    t.items.setValue(this.dictionaryProperties.rotate, o);
  };
  r.prototype.beginSave = function (t, e) {
    var i = e.document;
    this.applyPageSettings(this.section, e.document.pageSettings, t);
  };
  r.prototype.drawTemplates = function (t, e, i, n) {
    var s = this.getDocumentTemplates(i, t, n);
    var o = this.getSectionTemplates(t, n);
    this.drawTemplatesHelper(e, i, s);
    this.drawTemplatesHelper(e, i, o);
  };
  r.prototype.drawTemplatesHelper = function (t, e, i) {
    if (i != null && i.length > 0)
      for (var n = i.length, s = 0; s < n; s++) {
        var o = i[s];
        i[s].draw(t, e);
      }
  };
  return r;
})();
var Yo = (function () {
  function r(t) {
    this.pageOrientation = t.pageSettings.orientation;
    this.pageRotate = t.pageSettings.rotate;
    this.pageSize = t.pageSettings.size;
    this.pageOrigin = t.pageSettings.origin;
  }
  Object.defineProperty(r.prototype, 'orientation', {
    get: function () {
      return this.pageOrientation;
    },
    set: function (t) {
      this.pageOrientation = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rotate', {
    get: function () {
      return this.pageRotate;
    },
    set: function (t) {
      this.pageRotate = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.pageSize;
    },
    set: function (t) {
      this.pageSize = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'origin', {
    get: function () {
      return this.pageOrigin;
    },
    set: function (t) {
      this.pageOrigin = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var In = (function () {
  function r(t) {
    this.sections = [];
    this.dictionaryProperties = new rt();
    this.pdfDocument = t.clone();
    this.initialize();
  }
  Object.defineProperty(r.prototype, 'section', {
    get: function () {
      return this.sections;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'document', {
    get: function () {
      return this.pdfDocument;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.sections.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.pages;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function () {
    this.sectionCount = new E(0);
    this.sectionCollection = new Z();
    this.pages = new q();
    this.pages.beginSave = new Hs(this);
    this.pages.items.setValue(this.dictionaryProperties.type, new k('Pages'));
    this.pages.items.setValue(this.dictionaryProperties.kids, this.sectionCollection);
    this.pages.items.setValue(this.dictionaryProperties.count, this.sectionCount);
    this.pages.items.setValue(this.dictionaryProperties.resources, new q());
    this.setPageSettings(this.pages, this.pdfDocument.pageSettings);
  };
  r.prototype.pdfSectionCollection = function (t) {
    if (t < 0 || t >= this.count) throw new Error('IndexOutOfRangeException()');
    return this.sections[t];
  };
  r.prototype.setPageSettings = function (t, e) {
    var i = new I(new D(), e.size);
    t.items.setValue(this.dictionaryProperties.mediaBox, Z.fromRectangle(i));
  };
  r.prototype.add = function (t) {
    if (typeof t > 'u') {
      var e = new $o(this.pdfDocument);
      this.add(e);
      return e;
    } else {
      var i = this.checkSection(t);
      this.sections.push(t);
      t.parent = this;
      this.sectionCollection.add(i);
      return this.sections.indexOf(t);
    }
  };
  r.prototype.checkSection = function (t) {
    var e = new _(t);
    this.sectionCollection.contains(e);
    return e;
  };
  r.prototype.countPages = function () {
    var t = 0;
    this.sections.forEach(function (e) {
      return (t += e.count);
    });
    return t;
  };
  r.prototype.beginSave = function () {
    this.sectionCount.intValue = this.countPages();
  };
  r.rotateFactor = 90;
  return r;
})();
var Xo = (function () {
  function r(t) {
    this.pdfPageCollectionIndex = new X();
    this.document = t;
  }
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.countPages();
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'pageCollectionIndex', {
    get: function () {
      return this.pdfPageCollectionIndex;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    if (typeof t > 'u') {
      var e = new Nt();
      this.add(e);
      return e;
    } else {
      var i = this.getLastSection();
      i.add(t);
    }
  };
  r.prototype.getLastSection = function () {
    var t = this.document.sections;
    if (t.section.length === 0) {
      t.add();
    }
    var e = t.section[t.section.length - 1];
    return t.section[t.section.length - 1];
  };
  r.prototype.onPageAdded = function (t) {};
  r.prototype.countPages = function () {
    for (var t = this.document.sections, e = 0, i = 0; i < t.section.length; i++) e += t.section[i].count;
    return e;
  };
  r.prototype.getPageByIndex = function (t) {
    return this.getPage(t);
  };
  r.prototype.getPage = function (t) {
    if (t < 0 || t >= this.count) throw Error('ArgumentOutOfRangeException("index", "Value can not be less 0")');
    for (var e = null, i = 0, n = 0, s = 0, o = this.document.sections.count, a = 0; a < o; a++) {
      var h = this.document.sections.section[a];
      n = this.document.sections.section[a].count;
      s = t - i;
      if (t >= i && s < n) {
        e = this.document.sections.section[a].getPages()[s];
        break;
      }
      i += n;
    }
    return e;
  };
  r.prototype.indexOf = function (t) {
    var e = -1;
    if (t == null) throw new Error('ArgumentNullException: page');
    for (var i = 0, n = 0, s = this.document.sections.count; n < s; n++) {
      var o = this.document.sections.pdfSectionCollection(n);
      e = o.indexOf(t);
      if (e >= 0) {
        e += i;
        break;
      } else e = -1;
      i += o.count;
    }
    return e;
  };
  r.prototype.remove = function (t) {
    if (t == null) throw Error('ArgumentNullException("page")');
    for (var e = null, i = 0, n = this.document.sections.count; i < n; i++) {
      e = this.document.sections.pdfSectionCollection(i);
      if (e.pages.contains(t)) {
        e.pages.remove(t);
        break;
      }
    }
    return e;
  };
  return r;
})();
var dn = (function () {
  function r() {
    this.referenceObjects = [];
    this.pdfFontCollection = new X();
  }
  r.prototype.search = function (t) {
    var e = null;
    var i = this.getGroup(t);
    i == null ? (i = this.createNewGroup()) : i.length > 0 && (e = i[0]);
    i.push(t);
    return e;
  };
  r.prototype.createNewGroup = function () {
    var t = [];
    this.referenceObjects.push(t);
    return t;
  };
  r.prototype.getGroup = function (t) {
    var e = null;
    if (t !== null)
      for (var i = this.referenceObjects.length, n = 0; n < i; n++) {
        if (this.referenceObjects.length > 0) {
          var s = this.referenceObjects[n];
          if (this.referenceObjects[n].length > 0) {
            var o = this.referenceObjects[n][0];
            if (t.equalsTo(this.referenceObjects[n][0])) {
              e = this.referenceObjects[n];
              break;
            }
          } else this.removeGroup(this.referenceObjects[n]);
        }
        i = this.referenceObjects.length;
      }
    return e;
  };
  r.prototype.removeGroup = function (t) {
    if (t !== null) {
      var e = this.referenceObjects.indexOf(t);
      this.referenceObjects.slice(e, e + 1);
    }
  };
  r.prototype.destroy = function () {
    this.pdfFontCollection = void 0;
    this.referenceObjects = void 0;
  };
  return r;
})();
var Qo = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Jt = (function (r) {
  Qo(t, r);
  function t(e) {
    var i = r() || this;
    i.defaultMargin = 40;
    i.streamWriter = null;
    i.document = i;
    var n = false;
    typeof e > 'u' ? ((t.cacheCollection = new dn()), (n = false)) : (n = e);
    var s = new no();
    i.setMainObjectCollection(s);
    var o = new vn();
    o.isMerging = n;
    o.document = i;
    i.setCrossTable(o);
    var a = new yn();
    i.setCatalog(a);
    s.add(a);
    a.position = -1;
    i.sectionCollection = new In(i);
    i.documentPageCollection = new Xo(i);
    a.pages = i.sectionCollection;
    return i;
  }
  Object.defineProperty(t, 'defaultFont', {
    get: function () {
      if (this.defaultStandardFont == null) {
        this.defaultStandardFont = new St(Y.Helvetica, 8);
      }
      return this.defaultStandardFont;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'sections', {
    get: function () {
      return this.sectionCollection;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'pageSettings', {
    get: function () {
      if (this.settings == null) {
        this.settings = new wn(this.defaultMargin);
      }
      return this.settings;
    },
    set: function (e) {
      this.settings = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'pages', {
    get: function () {
      return this.documentPageCollection;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t, 'cache', {
    get: function () {
      return typeof t.cacheCollection > 'u' || t.cacheCollection == null ? new dn() : t.cacheCollection;
    },
    set: function (e) {
      this.cacheCollection = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t, 'enableCache', {
    get: function () {
      return this.isCacheEnabled;
    },
    set: function (e) {
      this.isCacheEnabled = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'colorSpace', {
    get: function () {
      return this.pdfColorSpace === Q.Rgb || this.pdfColorSpace === Q.Cmyk || this.pdfColorSpace === Q.GrayScale
        ? this.pdfColorSpace
        : Q.Rgb;
    },
    set: function (e) {
      e === Q.Rgb || e === Q.Cmyk || e === Q.GrayScale ? (this.pdfColorSpace = e) : (this.pdfColorSpace = Q.Rgb);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'template', {
    get: function () {
      if (this.pageTemplate == null) {
        this.pageTemplate = new Rn();
      }
      return this.pageTemplate;
    },
    set: function (e) {
      this.pageTemplate = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.docSave = function (e, i, n) {
    this.checkPagesPresence();
    if (e === null) throw new Error('ArgumentNullException : stream');
    this.streamWriter = e;
    var s = new nn(e);
    s.document = this;
    if (typeof i == 'boolean' && typeof n > 'u') return this.crossTable.save(s);
    this.crossTable.save(s, i);
  };
  t.prototype._docSave = function () {
    var e = new io();
    this.checkPagesPresence();
    if (e === null) throw new Error('ArgumentNullException : stream');
    this.streamWriter = e;
    var i = new nn(e);
    i.document = this;
    return this.crossTable._save(i);
  };
  t.prototype.checkPagesPresence = function () {
    if (this.pages.count === 0) {
      this.pages.add();
    }
  };
  t.prototype.destroy = function () {
    this.catalog = void 0;
    this.colorSpace = void 0;
    this.currentSavingObj = void 0;
    this.documentPageCollection = void 0;
    this.isStreamCopied = void 0;
    this.pageSettings = void 0;
    this.pageTemplate = void 0;
    this.pdfColorSpace = void 0;
    this.sectionCollection = void 0;
    t.cache.destroy();
    this.crossTable.pdfObjects.destroy();
    t.cache = void 0;
    if (this.streamWriter) {
      this.streamWriter.destroy();
    }
  };
  t.defaultStandardFont = null;
  t.isCacheEnabled = true;
  return t;
})(oo);
var Zo = (function () {
  function r() {}
  r.getMetrics = function (t, e, i) {
    var n = null;
    switch (t) {
      case Y.Helvetica:
        n = this.getHelveticaMetrics(t, e, i);
        break;
      case Y.Courier:
        n = this.getCourierMetrics(t, e, i);
        break;
      case Y.TimesRoman:
        n = this.getTimesMetrics(t, e, i);
        break;
      case Y.Symbol:
        n = this.getSymbolMetrics(t, e, i);
        break;
      case Y.ZapfDingbats:
        n = this.getZapfDingbatsMetrics(t, e, i);
        break;
      default:
        n = this.getHelveticaMetrics(Y.Helvetica, e, i);
        break;
    }
    n.name = t.toString();
    n.subScriptSizeFactor = this.subSuperScriptFactor;
    n.superscriptSizeFactor = this.subSuperScriptFactor;
    return n;
  };
  r.getHelveticaMetrics = function (t, e, i) {
    var n = new be();
    (e & N.Bold) > 0 && (e & N.Italic) > 0
      ? ((n.ascent = this.helveticaBoldItalicAscent),
        (n.descent = this.helveticaBoldItalicDescent),
        (n.postScriptName = this.helveticaBoldItalicName),
        (n.size = i),
        (n.widthTable = new ft(this.arialBoldWidth)),
        (n.height = n.ascent - n.descent))
      : (e & N.Bold) > 0
        ? ((n.ascent = this.helveticaBoldAscent),
          (n.descent = this.helveticaBoldDescent),
          (n.postScriptName = this.helveticaBoldName),
          (n.size = i),
          (n.widthTable = new ft(this.arialBoldWidth)),
          (n.height = n.ascent - n.descent))
        : (e & N.Italic) > 0
          ? ((n.ascent = this.helveticaItalicAscent),
            (n.descent = this.helveticaItalicDescent),
            (n.postScriptName = this.helveticaItalicName),
            (n.size = i),
            (n.widthTable = new ft(this.arialWidth)),
            (n.height = n.ascent - n.descent))
          : ((n.ascent = this.helveticaAscent),
            (n.descent = this.helveticaDescent),
            (n.postScriptName = this.helveticaName),
            (n.size = i),
            (n.widthTable = new ft(this.arialWidth)),
            (n.height = n.ascent - n.descent));
    return n;
  };
  r.getCourierMetrics = function (t, e, i) {
    var n = new be();
    (e & N.Bold) > 0 && (e & N.Italic) > 0
      ? ((n.ascent = this.courierBoldItalicAscent),
        (n.descent = this.courierBoldItalicDescent),
        (n.postScriptName = this.courierBoldItalicName),
        (n.size = i),
        (n.widthTable = new ft(this.fixedWidth)),
        (n.height = n.ascent - n.descent))
      : (e & N.Bold) > 0
        ? ((n.ascent = this.courierBoldAscent),
          (n.descent = this.courierBoldDescent),
          (n.postScriptName = this.courierBoldName),
          (n.size = i),
          (n.widthTable = new ft(this.fixedWidth)),
          (n.height = n.ascent - n.descent))
        : (e & N.Italic) > 0
          ? ((n.ascent = this.courierItalicAscent),
            (n.descent = this.courierItalicDescent),
            (n.postScriptName = this.courierItalicName),
            (n.size = i),
            (n.widthTable = new ft(this.fixedWidth)),
            (n.height = n.ascent - n.descent))
          : ((n.ascent = this.courierAscent),
            (n.descent = this.courierDescent),
            (n.postScriptName = this.courierName),
            (n.size = i),
            (n.widthTable = new ft(this.fixedWidth)),
            (n.height = n.ascent - n.descent));
    return n;
  };
  r.getTimesMetrics = function (t, e, i) {
    var n = new be();
    (e & N.Bold) > 0 && (e & N.Italic) > 0
      ? ((n.ascent = this.timesBoldItalicAscent),
        (n.descent = this.timesBoldItalicDescent),
        (n.postScriptName = this.timesBoldItalicName),
        (n.size = i),
        (n.widthTable = new ft(this.timesRomanBoldItalicWidths)),
        (n.height = n.ascent - n.descent))
      : (e & N.Bold) > 0
        ? ((n.ascent = this.timesBoldAscent),
          (n.descent = this.timesBoldDescent),
          (n.postScriptName = this.timesBoldName),
          (n.size = i),
          (n.widthTable = new ft(this.timesRomanBoldWidth)),
          (n.height = n.ascent - n.descent))
        : (e & N.Italic) > 0
          ? ((n.ascent = this.timesItalicAscent),
            (n.descent = this.timesItalicDescent),
            (n.postScriptName = this.timesItalicName),
            (n.size = i),
            (n.widthTable = new ft(this.timesRomanItalicWidth)),
            (n.height = n.ascent - n.descent))
          : ((n.ascent = this.timesAscent),
            (n.descent = this.timesDescent),
            (n.postScriptName = this.timesName),
            (n.size = i),
            (n.widthTable = new ft(this.timesRomanWidth)),
            (n.height = n.ascent - n.descent));
    return n;
  };
  r.getSymbolMetrics = function (t, e, i) {
    var n = new be();
    n.ascent = this.symbolAscent;
    n.descent = this.symbolDescent;
    n.postScriptName = this.symbolName;
    n.size = i;
    n.widthTable = new ft(this.symbolWidth);
    n.height = n.ascent - n.descent;
    return n;
  };
  r.getZapfDingbatsMetrics = function (t, e, i) {
    var n = new be();
    n.ascent = this.zapfDingbatsAscent;
    n.descent = this.zapfDingbatsDescent;
    n.postScriptName = this.zapfDingbatsName;
    n.size = i;
    n.widthTable = new ft(this.zapfDingbatsWidth);
    n.height = n.ascent - n.descent;
    return n;
  };
  r.subSuperScriptFactor = 1.52;
  r.helveticaAscent = 931;
  r.helveticaDescent = -225;
  r.helveticaName = 'Helvetica';
  r.helveticaBoldAscent = 962;
  r.helveticaBoldDescent = -228;
  r.helveticaBoldName = 'Helvetica-Bold';
  r.helveticaItalicAscent = 931;
  r.helveticaItalicDescent = -225;
  r.helveticaItalicName = 'Helvetica-Oblique';
  r.helveticaBoldItalicAscent = 962;
  r.helveticaBoldItalicDescent = -228;
  r.helveticaBoldItalicName = 'Helvetica-BoldOblique';
  r.courierAscent = 805;
  r.courierDescent = -250;
  r.courierName = 'Courier';
  r.courierBoldAscent = 801;
  r.courierBoldDescent = -250;
  r.courierBoldName = 'Courier-Bold';
  r.courierItalicAscent = 805;
  r.courierItalicDescent = -250;
  r.courierItalicName = 'Courier-Oblique';
  r.courierBoldItalicAscent = 801;
  r.courierBoldItalicDescent = -250;
  r.courierBoldItalicName = 'Courier-BoldOblique';
  r.timesAscent = 898;
  r.timesDescent = -218;
  r.timesName = 'Times-Roman';
  r.timesBoldAscent = 935;
  r.timesBoldDescent = -218;
  r.timesBoldName = 'Times-Bold';
  r.timesItalicAscent = 883;
  r.timesItalicDescent = -217;
  r.timesItalicName = 'Times-Italic';
  r.timesBoldItalicAscent = 921;
  r.timesBoldItalicDescent = -218;
  r.timesBoldItalicName = 'Times-BoldItalic';
  r.symbolAscent = 1010;
  r.symbolDescent = -293;
  r.symbolName = 'Symbol';
  r.zapfDingbatsAscent = 820;
  r.zapfDingbatsDescent = -143;
  r.zapfDingbatsName = 'ZapfDingbats';
  r.arialWidth = [
    278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556,
    556, 556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833,
    722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556,
    556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334,
    260, 334, 584, 0, 556, 0, 222, 556, 333, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0, 611, 0, 0, 222, 222, 333,
    333, 350, 556, 1000, 333, 1000, 500, 333, 944, 0, 500, 667, 0, 333, 556, 556, 556, 556, 260, 556, 333, 737, 370,
    556, 584, 0, 737, 333, 400, 584, 333, 333, 333, 556, 537, 278, 333, 333, 365, 556, 834, 834, 834, 611, 667, 667,
    667, 667, 667, 667, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778,
    722, 722, 722, 722, 667, 667, 611, 556, 556, 556, 556, 556, 556, 889, 500, 556, 556, 556, 556, 278, 278, 278, 278,
    556, 556, 556, 556, 556, 556, 556, 584, 611, 556, 556, 556, 556, 500, 556, 500,
  ];
  r.arialBoldWidth = [
    278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556,
    556, 556, 556, 333, 333, 584, 584, 584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833,
    722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333, 278, 333, 584, 556, 333, 556, 611, 556, 611,
    556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556, 500, 389,
    280, 389, 584, 0, 556, 0, 278, 556, 500, 1000, 556, 556, 333, 1000, 667, 333, 1000, 0, 611, 0, 0, 278, 278, 500,
    500, 350, 556, 1000, 333, 1000, 556, 333, 944, 0, 500, 667, 0, 333, 556, 556, 556, 556, 280, 556, 333, 737, 370,
    556, 584, 0, 737, 333, 400, 584, 333, 333, 333, 611, 556, 278, 333, 333, 365, 556, 834, 834, 834, 611, 722, 722,
    722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 278, 278, 278, 278, 722, 722, 778, 778, 778, 778, 778, 584, 778,
    722, 722, 722, 722, 667, 667, 611, 556, 556, 556, 556, 556, 556, 889, 556, 556, 556, 556, 556, 278, 278, 278, 278,
    611, 611, 611, 611, 611, 611, 611, 584, 611, 611, 611, 611, 611, 556, 611, 556,
  ];
  r.fixedWidth = [
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
    600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600,
  ];
  r.timesRomanWidth = [
    250, 333, 408, 500, 500, 833, 778, 180, 333, 333, 500, 564, 250, 333, 250, 278, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 278, 278, 564, 564, 564, 444, 921, 722, 667, 667, 722, 611, 556, 722, 722, 333, 389, 722, 611, 889,
    722, 722, 556, 722, 667, 556, 611, 722, 722, 944, 722, 722, 611, 333, 278, 333, 469, 500, 333, 444, 500, 444, 500,
    444, 333, 500, 500, 278, 278, 500, 278, 778, 500, 500, 500, 500, 333, 389, 278, 500, 500, 722, 500, 500, 444, 480,
    200, 480, 541, 0, 500, 0, 333, 500, 444, 1000, 500, 500, 333, 1000, 556, 333, 889, 0, 611, 0, 0, 333, 333, 444, 444,
    350, 500, 1000, 333, 980, 389, 333, 722, 0, 444, 722, 0, 333, 500, 500, 500, 500, 200, 500, 333, 760, 276, 500, 564,
    0, 760, 333, 400, 564, 300, 300, 333, 500, 453, 250, 333, 300, 310, 500, 750, 750, 750, 444, 722, 722, 722, 722,
    722, 722, 889, 667, 611, 611, 611, 611, 333, 333, 333, 333, 722, 722, 722, 722, 722, 722, 722, 564, 722, 722, 722,
    722, 722, 722, 556, 500, 444, 444, 444, 444, 444, 444, 667, 444, 444, 444, 444, 444, 278, 278, 278, 278, 500, 500,
    500, 500, 500, 500, 500, 564, 500, 500, 500, 500, 500, 500, 500, 500,
  ];
  r.timesRomanBoldWidth = [
    250, 333, 555, 500, 500, 1000, 833, 278, 333, 333, 500, 570, 250, 333, 250, 278, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 333, 333, 570, 570, 570, 500, 930, 722, 667, 722, 722, 667, 611, 778, 778, 389, 500, 778, 667, 944,
    722, 778, 611, 778, 722, 556, 667, 722, 722, 1000, 722, 722, 667, 333, 278, 333, 581, 500, 333, 500, 556, 444, 556,
    444, 333, 500, 556, 278, 333, 556, 278, 833, 556, 500, 556, 556, 444, 389, 333, 556, 500, 722, 500, 500, 444, 394,
    220, 394, 520, 0, 500, 0, 333, 500, 500, 1000, 500, 500, 333, 1000, 556, 333, 1000, 0, 667, 0, 0, 333, 333, 500,
    500, 350, 500, 1000, 333, 1000, 389, 333, 722, 0, 444, 722, 0, 333, 500, 500, 500, 500, 220, 500, 333, 747, 300,
    500, 570, 0, 747, 333, 400, 570, 300, 300, 333, 556, 540, 250, 333, 300, 330, 500, 750, 750, 750, 500, 722, 722,
    722, 722, 722, 722, 1000, 722, 667, 667, 667, 667, 389, 389, 389, 389, 722, 722, 778, 778, 778, 778, 778, 570, 778,
    722, 722, 722, 722, 722, 611, 556, 500, 500, 500, 500, 500, 500, 722, 444, 444, 444, 444, 444, 278, 278, 278, 278,
    500, 556, 500, 500, 500, 500, 500, 570, 500, 556, 556, 556, 556, 500, 556, 500,
  ];
  r.timesRomanItalicWidth = [
    250, 333, 420, 500, 500, 833, 778, 214, 333, 333, 500, 675, 250, 333, 250, 278, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 333, 333, 675, 675, 675, 500, 920, 611, 611, 667, 722, 611, 611, 722, 722, 333, 444, 667, 556, 833,
    667, 722, 611, 722, 611, 500, 556, 722, 611, 833, 611, 556, 556, 389, 278, 389, 422, 500, 333, 500, 500, 444, 500,
    444, 278, 500, 500, 278, 278, 444, 278, 722, 500, 500, 500, 500, 389, 389, 278, 500, 444, 667, 444, 444, 389, 400,
    275, 400, 541, 0, 500, 0, 333, 500, 556, 889, 500, 500, 333, 1000, 500, 333, 944, 0, 556, 0, 0, 333, 333, 556, 556,
    350, 500, 889, 333, 980, 389, 333, 667, 0, 389, 556, 0, 389, 500, 500, 500, 500, 275, 500, 333, 760, 276, 500, 675,
    0, 760, 333, 400, 675, 300, 300, 333, 500, 523, 250, 333, 300, 310, 500, 750, 750, 750, 500, 611, 611, 611, 611,
    611, 611, 889, 667, 611, 611, 611, 611, 333, 333, 333, 333, 722, 667, 722, 722, 722, 722, 722, 675, 722, 722, 722,
    722, 722, 556, 611, 500, 500, 500, 500, 500, 500, 500, 667, 444, 444, 444, 444, 444, 278, 278, 278, 278, 500, 500,
    500, 500, 500, 500, 500, 675, 500, 500, 500, 500, 500, 444, 500, 444,
  ];
  r.timesRomanBoldItalicWidths = [
    250, 389, 555, 500, 500, 833, 778, 278, 333, 333, 500, 570, 250, 333, 250, 278, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 333, 333, 570, 570, 570, 500, 832, 667, 667, 667, 722, 667, 667, 722, 778, 389, 500, 667, 611, 889,
    722, 722, 611, 722, 667, 556, 611, 722, 667, 889, 667, 611, 611, 333, 278, 333, 570, 500, 333, 500, 500, 444, 500,
    444, 333, 500, 556, 278, 278, 500, 278, 778, 556, 500, 500, 500, 389, 389, 278, 556, 444, 667, 500, 444, 389, 348,
    220, 348, 570, 0, 500, 0, 333, 500, 500, 1000, 500, 500, 333, 1000, 556, 333, 944, 0, 611, 0, 0, 333, 333, 500, 500,
    350, 500, 1000, 333, 1000, 389, 333, 722, 0, 389, 611, 0, 389, 500, 500, 500, 500, 220, 500, 333, 747, 266, 500,
    606, 0, 747, 333, 400, 570, 300, 300, 333, 576, 500, 250, 333, 300, 300, 500, 750, 750, 750, 500, 667, 667, 667,
    667, 667, 667, 944, 667, 667, 667, 667, 667, 389, 389, 389, 389, 722, 722, 722, 722, 722, 722, 722, 570, 722, 722,
    722, 722, 722, 611, 611, 500, 500, 500, 500, 500, 500, 500, 722, 444, 444, 444, 444, 444, 278, 278, 278, 278, 500,
    556, 500, 500, 500, 500, 500, 570, 500, 556, 556, 556, 556, 444, 500, 444,
  ];
  r.symbolWidth = [
    250, 333, 713, 500, 549, 833, 778, 439, 333, 333, 500, 549, 250, 549, 250, 278, 500, 500, 500, 500, 500, 500, 500,
    500, 500, 500, 278, 278, 549, 549, 549, 444, 549, 722, 667, 722, 612, 611, 763, 603, 722, 333, 631, 722, 686, 889,
    722, 722, 768, 741, 556, 592, 611, 690, 439, 768, 645, 795, 611, 333, 863, 333, 658, 500, 500, 631, 549, 549, 494,
    439, 521, 411, 603, 329, 603, 549, 549, 576, 521, 549, 549, 521, 549, 603, 439, 576, 713, 686, 493, 686, 494, 480,
    200, 480, 549, 750, 620, 247, 549, 167, 713, 500, 753, 753, 753, 753, 1042, 987, 603, 987, 603, 400, 549, 411, 549,
    549, 713, 494, 460, 549, 549, 549, 549, 1000, 603, 1000, 658, 823, 686, 795, 987, 768, 768, 823, 768, 768, 713, 713,
    713, 713, 713, 713, 713, 768, 713, 790, 790, 890, 823, 549, 250, 713, 603, 603, 1042, 987, 603, 987, 603, 494, 329,
    790, 790, 786, 713, 384, 384, 384, 384, 384, 384, 494, 494, 494, 494, 329, 274, 686, 686, 686, 384, 384, 384, 384,
    384, 384, 494, 494, 494, -1,
  ];
  r.zapfDingbatsWidth = [
    278, 974, 961, 974, 980, 719, 789, 790, 791, 690, 960, 939, 549, 855, 911, 933, 911, 945, 974, 755, 846, 762, 761,
    571, 677, 763, 760, 759, 754, 494, 552, 537, 577, 692, 786, 788, 788, 790, 793, 794, 816, 823, 789, 841, 823, 833,
    816, 831, 923, 744, 723, 749, 790, 792, 695, 776, 768, 792, 759, 707, 708, 682, 701, 826, 815, 789, 789, 707, 687,
    696, 689, 786, 787, 713, 791, 785, 791, 873, 761, 762, 762, 759, 759, 892, 892, 788, 784, 438, 138, 277, 415, 392,
    392, 668, 668, 390, 390, 317, 317, 276, 276, 509, 509, 410, 410, 234, 234, 334, 334, 732, 544, 544, 910, 667, 760,
    760, 776, 595, 694, 626, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788,
    788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 788, 894,
    838, 1016, 458, 748, 924, 748, 918, 927, 928, 928, 834, 873, 828, 924, 924, 917, 930, 931, 463, 883, 836, 836, 867,
    867, 696, 696, 874, 874, 760, 946, 771, 865, 771, 888, 967, 888, 831, 873, 927, 970, 918,
  ];
  return r;
})();
var ta = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var St = (function (r) {
  ta(t, r);
  function t(e, i, n) {
    var s = r(i, typeof n > 'u' ? (e instanceof t ? e.style : N.Regular) : n) || this;
    s.dictionaryProperties = new rt();
    s.encodings = [
      'Unknown',
      'StandardEncoding',
      'MacRomanEncoding',
      'MacExpertEncoding',
      'WinAnsiEncoding',
      'PDFDocEncoding',
      'IdentityH',
    ];
    typeof e > 'u'
      ? (s.pdfFontFamily = Y.Helvetica)
      : e instanceof t
        ? (s.pdfFontFamily = e.fontFamily)
        : (s.pdfFontFamily = e);
    s.checkStyle();
    s.initializeInternals();
    return s;
  }
  Object.defineProperty(t.prototype, 'fontFamily', {
    get: function () {
      return this.pdfFontFamily;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.checkStyle = function () {
    if (this.fontFamily === Y.Symbol || this.fontFamily === Y.ZapfDingbats) {
      var e = this.style;
      e &= ~(N.Bold | N.Italic);
      this.setStyle(e);
    }
  };
  t.prototype.getLineWidth = function (e, i) {
    if (e == null) throw new Error('ArgumentNullException:line');
    var n = 0;
    this.name;
    e = t.convert(e);
    for (var s = 0, o = e.length; s < o; s++) {
      var a = e[s];
      var h = this.getCharWidthInternal(e[s], i);
      n += h;
    }
    var l = this.metrics.getSize(i);
    n *= 0.001 * l;
    n = this.applyFormatSettings(e, i, n);
    return n;
  };
  t.prototype.equalsToFont = function (e) {
    var i = false;
    var n = e;
    if (e != null) {
      var s = this.fontFamily === e.fontFamily;
      var o = ~(N.Underline | N.Strikeout);
      var a = (this.style & o) === (e.style & o);
      i = s && a;
    }
    return i;
  };
  t.prototype.initializeInternals = function () {
    Jt.cache.search(this);
    var e = null;
    var i = Zo.getMetrics(this.pdfFontFamily, this.style, this.size);
    this.metrics = i;
    e = this.createInternals();
    this.setInternals(e);
  };
  t.prototype.createInternals = function () {
    var e = new q();
    e.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.font));
    e.items.setValue(this.dictionaryProperties.subtype, new k(this.dictionaryProperties.type1));
    e.items.setValue(this.dictionaryProperties.baseFont, new k(this.metrics.postScriptName));
    if (this.fontFamily !== Y.Symbol && this.fontFamily !== Y.ZapfDingbats) {
      var i = this.encodings[Vi.WinAnsiEncoding];
      e.items.setValue(this.dictionaryProperties.encoding, new k(this.encodings[Vi.WinAnsiEncoding]));
    }
    return e;
  };
  t.prototype.getCharWidthInternal = function (e, i) {
    var n = 0;
    var s = 0;
    s = e.charCodeAt(0);
    if (this.name === '0' || this.name === '1' || this.name === '2' || this.name === '3' || this.name === '4') {
      s = s - t.charOffset;
    }
    s = s >= 0 && s !== 128 ? s : 0;
    var o = this.metrics;
    var a = this.metrics.widthTable;
    n = this.metrics.widthTable.items(s);
    return n;
  };
  t.convert = function (e) {
    return e;
  };
  t.charOffset = 32;
  return t;
})(It);
var ea = (function () {
  function r(t) {
    this.dictionaryProperties = new rt();
    this.pdfColor = new j(255, 255, 255);
    this.rectangle = new I(0, 0, 0, 0);
    this.pdfPage = null;
    this.textBrush = new st(new j(0, 0, 0));
    this.textFont = new St(Y.TimesRoman, 10);
    this.format = new Ct(U.Left);
    this.content = '';
    this.pdfDictionary = new q();
    this.internalColor = new j();
    this.darkness = 1;
    typeof t > 'u' ? this.initialize() : (this.initialize(), (this.bounds = t));
  }
  Object.defineProperty(r.prototype, 'color', {
    get: function () {
      return this.pdfColor;
    },
    set: function (t) {
      this.pdfColor = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'innerColor', {
    get: function () {
      return this.internalColor;
    },
    set: function (t) {
      this.internalColor = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bounds', {
    get: function () {
      return this.rectangle;
    },
    set: function (t) {
      this.rectangle = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'page', {
    get: function () {
      return this.pdfPage;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'font', {
    get: function () {
      return this.textFont;
    },
    set: function (t) {
      this.textFont = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'stringFormat', {
    get: function () {
      return this.format;
    },
    set: function (t) {
      this.format = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'brush', {
    get: function () {
      return this.textBrush;
    },
    set: function (t) {
      this.textBrush = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'text', {
    get: function () {
      return this.content;
    },
    set: function (t) {
      this.content = t;
      this.dictionary.items.setValue(this.dictionaryProperties.contents, new dt(this.content));
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'dictionary', {
    get: function () {
      return this.pdfDictionary;
    },
    set: function (t) {
      this.pdfDictionary = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.initialize = function () {
    this.pdfDictionary.annotationBeginSave = new _s(this);
    this.pdfDictionary.items.setValue(this.dictionaryProperties.type, new k(this.dictionaryProperties.annot));
  };
  r.prototype.setPage = function (t) {
    this.pdfPage = t;
    this.pdfDictionary.items.setValue(this.dictionaryProperties.p, new _(this.pdfPage));
  };
  r.prototype.beginSave = function () {
    this.save();
  };
  r.prototype.save = function () {
    var t = new I(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
    var e = this.pdfPage.section;
    var i = t.height;
    var n = this.pdfPage.section.pointToNativePdf(this.page, new D(t.x, t.y));
    t.x = n.x;
    t.width = n.x + t.width;
    t.y = n.y - this.page.document.pageSettings.margins.top;
    t.height = t.y - t.height;
    this.pdfDictionary.items.setValue(this.dictionaryProperties.rect, Z.fromRectangle(t));
    this.dictionary.items.setValue(this.dictionaryProperties.ca, new E(this.darkness));
  };
  Object.defineProperty(r.prototype, 'element', {
    get: function () {
      return this.pdfDictionary;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var ia = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var ra = (function (r) {
  ia(t, r);
  function t(e) {
    return r(e) || this;
  }
  t.prototype.initialize = function () {
    r.prototype.initialize();
    this.dictionary.items.setValue(this.dictionaryProperties.subtype, new k(this.dictionaryProperties.link));
  };
  return t;
})(ea);
var na = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var sa = (function (r) {
  na(t, r);
  function t(e) {
    var i = r(e) || this;
    i.pdfAction = null;
    return i;
  }
  t.prototype.getSetAction = function (e) {
    if (typeof e > 'u') return this.pdfAction;
    this.pdfAction = e;
  };
  return t;
})(ra);
var Bn = (function () {
  function r(t) {
    this.layoutElement = t;
  }
  Object.defineProperty(r.prototype, 'elements', {
    get: function () {
      return this.layoutElement;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getElement = function () {
    return this.layoutElement;
  };
  r.prototype.layout = function (t) {
    return this.layoutInternal(t);
  };
  r.prototype.Layouter = function (t) {
    return this.layoutInternal(t);
  };
  r.prototype.getNextPage = function (t) {
    var e = t.section;
    var i = e.add();
    return i;
  };
  r.prototype.getPaginateBounds = function (t) {
    if (t == null) throw new Error('ArgumentNullException : param');
    var e = t.format.usePaginateBounds
      ? t.format.paginateBounds
      : new I(t.bounds.x, 0, t.bounds.width, t.bounds.height);
    return e;
  };
  return r;
})();
var kt = (function () {
  function r(t) {
    if (!(typeof t > 'u')) {
      this.break = t.break;
      this.layout = t.layout;
      this.paginateBounds = t.paginateBounds;
      this.boundsSet = t.usePaginateBounds;
    }
  }
  Object.defineProperty(r.prototype, 'layout', {
    get: function () {
      return this.layoutType;
    },
    set: function (t) {
      this.layoutType = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'break', {
    get: function () {
      return this.breakType;
    },
    set: function (t) {
      this.breakType = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'paginateBounds', {
    get: function () {
      if (typeof this.layoutPaginateBounds > 'u' && this.layoutPaginateBounds == null) {
        this.layoutPaginateBounds = new I(0, 0, 0, 0);
      }
      return this.layoutPaginateBounds;
    },
    set: function (t) {
      this.layoutPaginateBounds = t;
      this.boundsSet = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'usePaginateBounds', {
    get: function () {
      return this.boundsSet;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var oi = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'page', {
    get: function () {
      return this.pdfPage;
    },
    set: function (t) {
      this.pdfPage = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bounds', {
    get: function () {
      return new I(this.layoutBounds.x, this.layoutBounds.y, this.layoutBounds.width, this.layoutBounds.height);
    },
    set: function (t) {
      this.layoutBounds = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'format', {
    get: function () {
      return this.layoutFormat;
    },
    set: function (t) {
      this.layoutFormat = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Ln = (function () {
  function r(t, e) {
    this.pdfPage = t;
    this.layoutBounds = e;
  }
  Object.defineProperty(r.prototype, 'page', {
    get: function () {
      return this.pdfPage;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bounds', {
    get: function () {
      return this.layoutBounds;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var yt = (function () {
  function r() {
    var t = new ct(new j(0, 0, 0));
    t.dashStyle = lt.Solid;
    var e = new ct(new j(0, 0, 0));
    e.dashStyle = lt.Solid;
    var i = new ct(new j(0, 0, 0));
    i.dashStyle = lt.Solid;
    var n = new ct(new j(0, 0, 0));
    n.dashStyle = lt.Solid;
    this.leftPen = t;
    this.rightPen = e;
    this.topPen = i;
    this.bottomPen = n;
  }
  Object.defineProperty(r.prototype, 'left', {
    get: function () {
      return this.leftPen;
    },
    set: function (t) {
      this.leftPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'right', {
    get: function () {
      return this.rightPen;
    },
    set: function (t) {
      this.rightPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'top', {
    get: function () {
      return this.topPen;
    },
    set: function (t) {
      this.topPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bottom', {
    get: function () {
      return this.bottomPen;
    },
    set: function (t) {
      this.bottomPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'all', {
    set: function (t) {
      this.leftPen = this.rightPen = this.topPen = this.bottomPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isAll', {
    get: function () {
      return this.leftPen === this.rightPen && this.leftPen === this.topPen && this.leftPen === this.bottomPen;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r, 'default', {
    get: function () {
      return new r();
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var He = (function () {
  function r(t, e, i, n) {
    this.hasLeftPad = false;
    this.hasRightPad = false;
    this.hasTopPad = false;
    this.hasBottomPad = false;
    typeof t > 'u'
      ? (this.bottomPad = this.topPad = this.leftPad = this.rightPad = 0.5)
      : ((this.leftPad = t),
        (this.rightPad = e),
        (this.topPad = i),
        (this.bottomPad = n),
        (this.hasLeftPad = true),
        (this.hasRightPad = true),
        (this.hasTopPad = true),
        (this.hasBottomPad = true));
  }
  Object.defineProperty(r.prototype, 'left', {
    get: function () {
      return this.leftPad;
    },
    set: function (t) {
      this.leftPad = t;
      this.hasLeftPad = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'right', {
    get: function () {
      return this.rightPad;
    },
    set: function (t) {
      this.rightPad = t;
      this.hasRightPad = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'top', {
    get: function () {
      return this.topPad;
    },
    set: function (t) {
      this.topPad = t;
      this.hasTopPad = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bottom', {
    get: function () {
      return this.bottomPad;
    },
    set: function (t) {
      this.bottomPad = t;
      this.hasBottomPad = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'all', {
    set: function (t) {
      this.leftPad = this.rightPad = this.topPad = this.bottomPad = t;
      this.hasLeftPad = true;
      this.hasRightPad = true;
      this.hasTopPad = true;
      this.hasBottomPad = true;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var On = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'raiseBeginPageLayout', {
    get: function () {
      return typeof this.beginPageLayout < 'u';
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'raiseEndPageLayout', {
    get: function () {
      return typeof this.endPageLayout < 'u';
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.onBeginPageLayout = function (t) {
    if (this.beginPageLayout) {
      this.beginPageLayout(this, t);
    }
  };
  r.prototype.onEndPageLayout = function (t) {
    if (this.endPageLayout) {
      this.endPageLayout(this, t);
    }
  };
  r.prototype.drawHelper = function (t, e, i, n) {
    if (e instanceof D && typeof e.width > 'u' && typeof i > 'u') return this.drawHelper(t, e.x, e.y);
    if (typeof e == 'number' && typeof i == 'number' && typeof n > 'u') return this.drawHelper(t, e, i, null);
    if (e instanceof I && typeof e.width < 'u' && typeof i > 'u') return this.drawHelper(t, e, null);
    if (e instanceof D && typeof e.width > 'u' && i instanceof kt) return this.drawHelper(t, e.x, e.y, i);
    if (typeof e == 'number' && typeof i == 'number' && (n instanceof kt || n == null)) {
      var s = t.graphics.clientSize.width - e;
      var o = new I(e, i, s, 0);
      return this.drawHelper(t, o, n);
    } else {
      if (e instanceof I && typeof e.width < 'u' && typeof i == 'boolean') {
        this.bEmbedFonts = i;
        return this.drawHelper(t, e, null);
      }
      var a = new oi();
      var h = e;
      var l = i;
      a.page = t;
      a.bounds = e;
      if (a != null) {
        var u = a.bounds.x;
        var d = a.bounds.y;
        if (a.bounds.x === 0) {
          u = yt.default.right.width / 2;
        }
        if (a.bounds.y === 0) {
          d = yt.default.top.width / 2;
        }
        var c = new I(u, d, a.bounds.width, a.bounds.height);
        a.bounds = c;
      }
      a.format = i ?? new kt();
      var f = this.layout(a);
      return f;
    }
  };
  return r;
})();
var An = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var oa = (function (r) {
  An(t, r);
  function t(e) {
    return r(e) || this;
  }
  Object.defineProperty(t.prototype, 'element', {
    get: function () {
      return r.prototype.getElement();
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.layoutInternal = function (e) {
    this.format =
      this.element.stringFormat !== null && typeof this.element.stringFormat < 'u' ? this.element.stringFormat : null;
    var i = e.page;
    var n = e.bounds;
    var s = this.element.value;
    var o = null;
    var a = new pn();
    for (a.page = e.page, a.remainder = this.element.value; ; ) {
      a = this.layoutOnPage(this.element.value, e.page, e.bounds, e);
      o = this.getLayoutResult(a);
      break;
    }
    return o;
  };
  t.prototype.getLayoutResult = function (e) {
    var i = new aa(e.page, e.bounds, e.remainder, e.lastLineBounds);
    return i;
  };
  t.prototype.layoutOnPage = function (e, i, n, s) {
    var o = new pn();
    o.remainder = e;
    o.page = i;
    n = this.checkCorrectBounds(i, n);
    var a = new Kt();
    var h = a.layout(e, this.element.font, this.format, n, i.getClientSize().height, false, new C(0, 0));
    var l = h.remainder == null;
    var u = s.format.break === te.FitElement;
    if (!u) {
      h.empty;
    }
    var d = i.graphics;
    var c = this.element.getBrush();
    if (this.element instanceof ke) {
      c.color = new j(0, 0, 255);
      if (
        !this.element._isLastElement &&
        this.element.stringFormat &&
        this.element.stringFormat.alignment === U.Justify
      ) {
        h.layoutLines[0].type = pt.LayoutBreak | pt.FirstParagraphLine;
      }
    }
    if (
      this.element &&
      this.element instanceof Dn &&
      !this.element._isLastElement &&
      this.element.stringFormat &&
      this.element.stringFormat.alignment === U.Justify
    ) {
      h.layoutLines[0].type = pt.LayoutBreak | pt.FirstParagraphLine;
    }
    i.graphics.drawStringLayoutResult(h, this.element.font, this.element.pen, c, n, this.format);
    h.lines[h.lineCount - 1];
    o.lastLineBounds = i.graphics.getLineBounds(h.lineCount - 1, h, this.element.font, n, this.format);
    o.bounds = this.getTextPageBounds(i, n, h);
    o.remainder = h.remainder;
    o.end = l;
    return o;
  };
  t.prototype.checkCorrectBounds = function (e, i) {
    var n = e.graphics.clientSize;
    i.height = i.height > 0 ? i.height : e.graphics.clientSize.height - i.y;
    return i;
  };
  t.prototype.getTextPageBounds = function (e, i, n) {
    var s = n.actualSize;
    var o = i.x;
    var a = i.y;
    var h = i.width > 0 ? i.width : n.actualSize.width;
    var l = n.actualSize.height;
    var u = e.graphics.checkCorrectLayoutRectangle(n.actualSize, i.x, i.y, this.format);
    o = u.x;
    var d = e.graphics.getTextVerticalAlignShift(n.actualSize.height, i.height, this.format);
    a += d;
    var c = new I(o, a, h, n.actualSize.height);
    return c;
  };
  return t;
})(Bn);
var pn = (function () {
  function r() {}
  return r;
})();
var aa = (function (r) {
  An(t, r);
  function t(e, i, n, s) {
    var o = r(e, i) || this;
    o.remainderText = n;
    o.lastLineTextBounds = s;
    return o;
  }
  Object.defineProperty(t.prototype, 'remainder', {
    get: function () {
      return this.remainderText;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'lastLineBounds', {
    get: function () {
      return this.lastLineTextBounds;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Ln);
var ha = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Dn = (function (r) {
  ha(t, r);
  function t(e, i, n, s, o) {
    var a = r() || this;
    a.content = '';
    a.elementValue = '';
    a.hasPointOverload = false;
    a._isLastElement = false;
    a.isPdfTextElement = false;
    if (!(typeof e > 'u')) {
      typeof e == 'string' && typeof i > 'u'
        ? ((a.content = e), (a.elementValue = e))
        : typeof e == 'string' && i instanceof It && typeof n > 'u'
          ? ((a.content = e), (a.elementValue = e), (a.pdfFont = i))
          : typeof e == 'string' && i instanceof It && n instanceof ct && typeof s > 'u'
            ? ((a.content = e), (a.elementValue = e), (a.pdfFont = i), (a.pdfPen = n))
            : typeof e == 'string' && i instanceof It && n instanceof zt && typeof s > 'u'
              ? ((a.content = e), (a.elementValue = e), (a.pdfFont = i), (a.pdfBrush = n))
              : ((a.content = e),
                (a.elementValue = e),
                (a.pdfFont = i),
                (a.pdfPen = n),
                (a.pdfBrush = s),
                (a.format = o));
    }
    return a;
  }
  Object.defineProperty(t.prototype, 'text', {
    get: function () {
      return this.content;
    },
    set: function (e) {
      this.elementValue = e;
      this.content = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'value', {
    get: function () {
      return this.elementValue;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'pen', {
    get: function () {
      return this.pdfPen;
    },
    set: function (e) {
      this.pdfPen = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'brush', {
    get: function () {
      return this.pdfBrush;
    },
    set: function (e) {
      this.pdfBrush = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'font', {
    get: function () {
      return this.pdfFont;
    },
    set: function (e) {
      this.pdfFont = e;
      this.pdfFont instanceof St && this.content != null
        ? (this.elementValue = St.convert(this.content))
        : (this.elementValue = this.content);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'stringFormat', {
    get: function () {
      return this.format;
    },
    set: function (e) {
      this.format = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getBrush = function () {
    return this.pdfBrush == null || typeof this.pdfBrush > 'u' ? new st(new j(0, 0, 0)) : this.pdfBrush;
  };
  t.prototype.layout = function (e) {
    var i = new oa(this);
    var n = i.layout(e);
    return n;
  };
  t.prototype.drawText = function (e, i, n, s) {
    if (i instanceof D && typeof i.width > 'u' && typeof n > 'u') {
      this.hasPointOverload = true;
      return this.drawText(e, i.x, i.y);
    }
    if (typeof i == 'number' && typeof n == 'number' && typeof s > 'u') {
      this.hasPointOverload = true;
      return this.drawText(e, i, n, null);
    }
    if (i instanceof I && typeof i.width < 'u' && typeof n > 'u') return this.drawText(e, i, null);
    if (i instanceof D && typeof i.width > 'u' && n instanceof kt) {
      this.hasPointOverload = true;
      return this.drawText(e, i.x, i.y, n);
    }
    if (typeof i == 'number' && typeof n == 'number' && (s instanceof kt || s == null)) {
      this.hasPointOverload = true;
      var o = e.graphics.clientSize.width - i;
      var a = new I(i, n, o, 0);
      return this.drawText(e, a, s);
    } else {
      if (i instanceof I && typeof i.width < 'u' && typeof n == 'boolean') return this.drawText(e, i, null);
      var h = new Kt();
      if (this.hasPointOverload) {
        var l = h.layout(
          this.value,
          this.font,
          this.stringFormat,
          new C(e.graphics.clientSize.width - i.x, 0),
          true,
          e.graphics.clientSize,
        );
        var u = void 0;
        var d = new oi();
        var c = i;
        var f = n;
        d.page = e;
        d.bounds = i;
        d.format = n ?? new kt();
        if (l.lines.length > 1) {
          this.text = l.layoutLines[0].text;
          if (d.bounds.y <= d.page.graphics.clientSize.height) {
            var g = new D(d.bounds.x, d.bounds.y);
            u = this.layout(d);
            for (
              var y = new I(0, u.bounds.y + l.lineHeight, e.graphics.clientSize.width, l.lineHeight), m = 1;
              m < l.lines.length;
              m++
            ) {
              d.page = u.page;
              d.bounds = new I(new D(y.x, y.y), new C(y.width, y.height));
              this.text = l.layoutLines[m].text;
              if (y.y + l.lineHeight > u.page.graphics.clientSize.height) {
                d.page = d.page.graphics.getNextPage();
                g.y > u.page.graphics.clientSize.height - u.bounds.height
                  ? (y = new I(0, u.bounds.height, u.page.graphics.clientSize.width, l.lineHeight))
                  : (y = new I(0, 0, u.page.graphics.clientSize.width, l.lineHeight));
                d.bounds = y;
              }
              if (m === l.lines.length - 1) {
                this._isLastElement = true;
              }
              u = this.layout(d);
              if (m !== l.lines.length - 1)
                y = new I(0, u.bounds.y + l.lineHeight, u.page.graphics.clientSize.width, l.lineHeight);
              else {
                var w = this.font.measureString(this.text, this.format).width;
                u = this.calculateResultBounds(
                  u,
                  this.font.measureString(this.text, this.format).width,
                  u.page.graphics.clientSize.width,
                  0,
                );
              }
            }
          }
          return u;
        } else {
          var b = this.font.measureString(this.text, this.format);
          if (d.bounds.y <= d.page.graphics.clientSize.height) {
            u = this.layout(d);
            u = this.calculateResultBounds(u, b.width, u.page.graphics.clientSize.width, 0);
          }
          return u;
        }
      } else {
        var u = h.layout(this.value, this.font, this.stringFormat, new C(i.width, 0), false, e.graphics.clientSize);
        var v = void 0;
        var d = new oi();
        var c = i;
        var f = n;
        d.page = e;
        d.bounds = i;
        d.format = n ?? new kt();
        if (u.lines.length > 1) {
          this.text = u.layoutLines[0].text;
          if (d.bounds.y <= d.page.graphics.clientSize.height) {
            var g = new D(d.bounds.x, d.bounds.y);
            v = this.layout(d);
            for (var y = new I(i.x, v.bounds.y + u.lineHeight, i.width, u.lineHeight), m = 1; m < u.lines.length; m++) {
              d.page = v.page;
              d.bounds = new I(y.x, y.y, y.width, y.height);
              this.text = u.layoutLines[m].text;
              if (y.y + u.lineHeight > v.page.graphics.clientSize.height) {
                d.page = d.page.graphics.getNextPage();
                g.y > v.page.graphics.clientSize.height - v.bounds.height
                  ? (y = new I(i.x, u.lineHeight, i.width, u.lineHeight))
                  : (y = new I(i.x, 0, i.width, u.lineHeight));
                d.bounds = y;
              }
              v = this.layout(d);
              if (m !== u.lines.length - 1) y = new I(i.x, v.bounds.y + u.lineHeight, i.width, u.lineHeight);
              else {
                var w = this.font.measureString(this.text, this.format).width;
                v = this.calculateResultBounds(v, this.font.measureString(this.text, this.format).width, i.width, i.x);
              }
            }
          }
          return v;
        } else {
          var b = this.font.measureString(this.text, this.format);
          if (d.bounds.y <= d.page.graphics.clientSize.height) {
            v = this.layout(d);
            v = this.calculateResultBounds(v, b.width, i.width, i.x);
          }
          return v;
        }
      }
    }
  };
  t.prototype.calculateResultBounds = function (e, i, n, s) {
    this.stringFormat != null && typeof this.stringFormat < 'u' && this.stringFormat.alignment === U.Center
      ? ((e.bounds.x = s + (n - i) / 2), (e.bounds.width = i))
      : this.stringFormat != null && typeof this.stringFormat < 'u' && this.stringFormat.alignment === U.Right
        ? ((e.bounds.x = s + (n - i)), (e.bounds.width = i))
        : this.stringFormat != null && typeof this.stringFormat < 'u' && this.stringFormat.alignment === U.Justify
          ? ((e.bounds.x = s), (e.bounds.width = n))
          : ((e.bounds.width = s), (e.bounds.width = i));
    return e;
  };
  return t;
})(On);
var la = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Ye = (function (r) {
  la(t, r);
  function t(e, i) {
    var n = r(e) || this;
    if (typeof i < 'u') {
      n.uri = i;
    }
    return n;
  }
  Object.defineProperty(t.prototype, 'uriAction', {
    get: function () {
      if (typeof this.pdfUriAction > 'u') {
        this.pdfUriAction = new Zs();
      }
      return this.pdfUriAction;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'uri', {
    get: function () {
      return this.uriAction.uri;
    },
    set: function (e) {
      if (this.uriAction.uri !== e) {
        this.uriAction.uri = e;
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'action', {
    get: function () {
      return this.getSetAction();
    },
    set: function (e) {
      this.getSetAction(e);
      this.uriAction.next = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.initialize = function () {
    r.prototype.initialize();
    this.dictionary.items.setValue(this.dictionaryProperties.subtype, new k(this.dictionaryProperties.link));
    this.uriAction.element;
    this.dictionary.items.setValue(this.dictionaryProperties.a, this.uriAction.element);
  };
  return t;
})(sa);
var ua = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var ke = (function (r) {
  ua(t, r);
  function t() {
    var e = r() || this;
    e.uniformResourceLocator = '';
    e.uriAnnotation = null;
    e.recalculateBounds = false;
    e.defaultBorder = new Z();
    for (var i = 0; i < 3; i++) e.defaultBorder.add(new E(0));
    return e;
  }
  Object.defineProperty(t.prototype, 'url', {
    get: function () {
      return this.uniformResourceLocator;
    },
    set: function (e) {
      if (e.length === 0) throw new Error('ArgumentException : Url - string can not be empty');
      this.uniformResourceLocator = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.draw = function (e, i) {
    if (e instanceof Nt) {
      var n = new Kt();
      var s = this.font.style;
      if (i instanceof D) {
        this.recalculateBounds = true;
        this.font.style = N.Underline;
        var o = n.layout(
          this.value,
          this.font,
          this.stringFormat,
          new C(e.graphics.clientSize.width - i.x, 0),
          true,
          e.graphics.clientSize,
        );
        if (o.lines.length === 1) {
          var a = this.font.measureString(this.value);
          var h = new I(i, a);
          h = this.calculateBounds(h, a.width, e.graphics.clientSize.width, i.x);
          this.uriAnnotation = new Ye(h, this.url);
          this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
          e.annotations.add(this.uriAnnotation);
          var l = this.drawText(e, i);
          this.font.style = this.font.style;
          return l;
        } else {
          var l = this.drawMultipleLineWithPoint(o, e, i);
          this.font.style = this.font.style;
          return l;
        }
      } else {
        var o = n.layout(this.value, this.font, this.stringFormat, new C(i.width, 0), false, new C(0, 0));
        this.font.style = N.Underline;
        if (o.lines.length === 1) {
          var a = this.font.measureString(this.value);
          var h = new I(new D(i.x, i.y), a);
          h = this.calculateBounds(h, a.width, i.width, i.x);
          this.uriAnnotation = new Ye(h, this.url);
          this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
          e.annotations.add(this.uriAnnotation);
          var u = this.drawText(e, i);
          this.font.style = this.font.style;
          return u;
        } else {
          var u = this.drawMultipleLineWithBounds(o, e, i);
          this.font.style = this.font.style;
          return u;
        }
      }
    } else {
      var d = new Nt();
      d = e.page;
      return this.draw(d, i);
    }
  };
  t.prototype.drawMultipleLineWithPoint = function (e, i, n) {
    for (var s, o = 0; o < e.layoutLines.length; o++) {
      var a = this.font.measureString(e.lines[o].text);
      if (o === e.layoutLines.length - 1 && this.stringFormat && this.stringFormat.alignment === U.Justify) {
        this._isLastElement = true;
      }
      var h = new I(n, a);
      if (o !== 0) {
        h.x = 0;
      }
      this.text = e.lines[o].text;
      if (h.y + a.height > i.graphics.clientSize.height)
        if (o !== 0) {
          i = i.graphics.getNextPage();
          h = new I(0, 0, i.graphics.clientSize.width, a.height);
          n.y = 0;
        } else break;
      h = this.calculateBounds(h, a.width, i.graphics.clientSize.width, h.x);
      this.uriAnnotation = new Ye(h, this.url);
      this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
      i.annotations.add(this.uriAnnotation);
      o !== 0 ? (s = this.drawText(i, new D(0, h.y))) : (s = this.drawText(i, h.x, h.y));
      n.y += a.height;
    }
    return s;
  };
  t.prototype.drawMultipleLineWithBounds = function (e, i, n) {
    for (var s, o = 0; o < e.layoutLines.length; o++) {
      var a = this.font.measureString(e.lines[o].text);
      var h = new I(new D(n.x, n.y), a);
      h = this.calculateBounds(h, a.width, n.width, n.x);
      this.text = e.lines[o].text;
      if (n.y + a.height > i.graphics.clientSize.height)
        if (o !== 0) {
          i = i.graphics.getNextPage();
          n = new I(n.x, 0, n.width, a.height);
          h.y = 0;
        } else break;
      this.uriAnnotation = new Ye(h, this.url);
      this.uriAnnotation.dictionary.items.setValue('Border', this.defaultBorder);
      i.annotations.add(this.uriAnnotation);
      s = this.drawText(i, n);
      n.y += a.height;
    }
    return s;
  };
  t.prototype.calculateBounds = function (e, i, n, s) {
    this.stringFormat != null && typeof this.stringFormat < 'u' && this.stringFormat.alignment === U.Center
      ? ((e.x = s + (n - i) / 2), (e.width = i))
      : this.stringFormat != null && typeof this.stringFormat < 'u' && this.stringFormat.alignment === U.Right
        ? ((e.x = s + (n - i)), (e.width = i))
        : this.stringFormat != null && typeof this.stringFormat < 'u' && this.stringFormat.alignment === U.Justify
          ? ((e.x = s), (e.width = n))
          : ((e.width = s), (e.width = i));
    return e;
  };
  return t;
})(Dn);
var Tn = (function () {
  function r() {}
  r.convert = function (t, e) {
    var i = '';
    switch (e) {
      case Et.None:
        i = '';
        break;
      case Et.Numeric:
        i = t.toString();
        break;
      case Et.LowerLatin:
        i = this.arabicToLetter(t).toLowerCase();
        break;
      case Et.LowerRoman:
        i = this.arabicToRoman(t).toLowerCase();
        break;
      case Et.UpperLatin:
        i = this.arabicToLetter(t);
        break;
      case Et.UpperRoman:
        i = this.arabicToRoman(t);
        break;
    }
    return i;
  };
  r.arabicToRoman = function (t) {
    var e = '';
    var i = this.generateNumber(t, 1000, 'M');
    e += i.returnValue;
    t = i.intArabic;
    var n = this.generateNumber(t, 900, 'CM');
    e += n.returnValue;
    t = n.intArabic;
    var s = this.generateNumber(t, 500, 'D');
    e += s.returnValue;
    t = s.intArabic;
    var o = this.generateNumber(t, 400, 'CD');
    e += o.returnValue;
    t = o.intArabic;
    var a = this.generateNumber(t, 100, 'C');
    e += a.returnValue;
    t = a.intArabic;
    var h = this.generateNumber(t, 90, 'XC');
    e += h.returnValue;
    t = h.intArabic;
    var l = this.generateNumber(t, 50, 'L');
    e += l.returnValue;
    t = l.intArabic;
    var u = this.generateNumber(t, 40, 'XL');
    e += u.returnValue;
    t = u.intArabic;
    var d = this.generateNumber(t, 10, 'X');
    e += d.returnValue;
    t = d.intArabic;
    var c = this.generateNumber(t, 9, 'IX');
    e += c.returnValue;
    t = c.intArabic;
    var f = this.generateNumber(t, 5, 'V');
    e += f.returnValue;
    t = f.intArabic;
    var g = this.generateNumber(t, 4, 'IV');
    e += g.returnValue;
    t = g.intArabic;
    var y = this.generateNumber(t, 1, 'I');
    e += y.returnValue;
    t = y.intArabic;
    return e.toString();
  };
  r.arabicToLetter = function (t) {
    for (var e = this.convertToLetter(t), i = ''; e.length > 0; ) {
      var n = e.pop();
      i = this.appendChar(i, n);
    }
    return i.toString();
  };
  r.generateNumber = function (t, e, i) {
    for (var n = ''; t >= e; ) {
      t -= e;
      n += i;
    }
    return {
      returnValue: n.toString(),
      intArabic: t,
    };
  };
  r.convertToLetter = function (t) {
    if (t <= 0) throw Error('ArgumentOutOfRangeException-arabic, Value can not be less 0');
    for (var e = []; t > this.letterLimit; ) {
      var i = t % this.letterLimit;
      i === 0 ? ((t = t / this.letterLimit - 1), (i = this.letterLimit)) : (t /= this.letterLimit);
      e.push(i);
    }
    e.push(t);
    return e;
  };
  r.appendChar = function (t, e) {
    var i = String.fromCharCode(r.acsiiStartIndex + e);
    t += i;
    return t;
  };
  r.letterLimit = 26;
  r.acsiiStartIndex = 64;
  return r;
})();
var Fn = (function () {
  function r(t, e) {
    this.pdfTemplate = null;
    this.content = '';
    if (!(typeof t > 'u')) {
      this.template = t;
      this.value = e;
    }
  }
  Object.defineProperty(r.prototype, 'template', {
    get: function () {
      return this.pdfTemplate;
    },
    set: function (t) {
      this.pdfTemplate = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'value', {
    get: function () {
      return this.content;
    },
    set: function (t) {
      this.content = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var ca = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var En = (function (r) {
  ca(t, r);
  function t() {
    var e = r() || this;
    e.list = new We();
    return e;
  }
  t.prototype.performDraw = function (e, i, n, s) {
    r.prototype.performDrawHelper(e, i, n, s);
    var o = this.getValue(e);
    var a = new Ge(this.getSize());
    this.list.setValue(e, new Fn(a, o));
    a.graphics;
    var h = this.getSize();
    a.graphics.drawString(o, this.getFont(), this.pen, this.getBrush(), 0, 0, h.width, h.height, this.stringFormat);
    var l = new D(i.x + this.location.x, i.y + this.location.y);
    e.drawPdfTemplate(a, l, new C(a.width * n, a.height * s));
  };
  return t;
})(Ui);
var da = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var pa = (function (r) {
  da(t, r);
  function t(e, i) {
    var n = r() || this;
    n.internalNumberStyle = Et.Numeric;
    typeof i > 'u' ? (n.font = e) : i instanceof zt ? ((n.font = e), (n.brush = i)) : ((n.font = e), (n.bounds = i));
    return n;
  }
  Object.defineProperty(t.prototype, 'numberStyle', {
    get: function () {
      return this.internalNumberStyle;
    },
    set: function (e) {
      this.internalNumberStyle = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getValue = function (e) {
    var i = null;
    var n = this.getPageFromGraphics(e);
    i = this.internalGetValue(n);
    return i;
  };
  t.prototype.internalGetValue = function (e) {
    var i = e.document;
    var n = e.document.pages.indexOf(e) + 1;
    return Tn.convert(n, this.numberStyle);
  };
  return t;
})(En);
var fa = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Xe = (function (r) {
  fa(t, r);
  function t(e, i, n) {
    for (var s = [], o = 3; o < arguments.length; o++) s[o - 3] = arguments[o];
    var a = r() || this;
    a.internalAutomaticFields = null;
    a.internalText = '';
    a.font = e;
    a.brush = i;
    a.text = n;
    a.automaticFields = s;
    return a;
  }
  Object.defineProperty(t.prototype, 'text', {
    get: function () {
      return this.internalText;
    },
    set: function (e) {
      this.internalText = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'automaticFields', {
    get: function () {
      return this.internalAutomaticFields;
    },
    set: function (e) {
      this.internalAutomaticFields = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getValue = function (e) {
    var i = this.text.toString();
    if (typeof this.automaticFields < 'u' && this.automaticFields != null && this.automaticFields.length > 0)
      for (var n = 0; n < this.automaticFields.length; n++) {
        var s = this.automaticFields[n];
        i = i.replace('{' + n + '}', this.automaticFields[n].getValue(e));
      }
    return i;
  };
  return t;
})(En);
var ga = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var ma = (function (r) {
  ga(t, r);
  function t() {
    var e = r() || this;
    e.list = new We();
    e.painterGraphics = [];
    return e;
  }
  t.prototype.performDraw = function (e, i, n, s) {
    r.prototype.performDrawHelper(e, i, n, s);
    var o = this.getPageFromGraphics(e);
    var a = o.document;
    var h = this.getValue(e);
    if (this.list.containsKey(o.document)) {
      var l = this.list.getValue(o.document);
      var u = new D(i.x + this.location.x, i.y + this.location.y);
      e.drawPdfTemplate(l.template, u, new C(l.template.width * n, l.template.height * s));
      this.painterGraphics.push(e);
    } else {
      var d = this.getSize();
      var c = new Ge(d);
      this.list.setValue(o.document, new Fn(c, h));
      c.graphics.drawString(h, this.getFont(), this.pen, this.getBrush(), 0, 0, d.width, d.height, this.stringFormat);
      var u = new D(i.x + this.location.x, i.y + this.location.y);
      e.drawPdfTemplate(c, u, new C(c.width * n, c.height * s));
      this.painterGraphics.push(e);
    }
  };
  return t;
})(Ui);
var ya = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var fn = (function (r) {
  ya(t, r);
  function t(e, i) {
    var n = r() || this;
    n.internalNumberStyle = Et.Numeric;
    typeof i > 'u' ? (n.font = e) : i instanceof zt ? ((n.font = e), (n.brush = i)) : ((n.font = e), (n.bounds = i));
    return n;
  }
  Object.defineProperty(t.prototype, 'numberStyle', {
    get: function () {
      return this.internalNumberStyle;
    },
    set: function (e) {
      this.internalNumberStyle = e;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getValue = function (e) {
    var i = null;
    var n = this.getPageFromGraphics(e);
    var s = n.section.parent.document;
    var o = n.section.parent.document.pages.count;
    i = Tn.convert(n.section.parent.document.pages.count, this.numberStyle);
    return i;
  };
  return t;
})(ma);
var ai;
(function (r) {
  r[(r.Overlap = 0)] = 'Overlap';
  r[(r.Inside = 1)] = 'Inside';
})(ai || (ai = {}));
var Mn = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Vn = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'backgroundBrush', {
    get: function () {
      return this.gridBackgroundBrush;
    },
    set: function (t) {
      this.gridBackgroundBrush = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'textBrush', {
    get: function () {
      return this.gridTextBrush;
    },
    set: function (t) {
      this.gridTextBrush = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'textPen', {
    get: function () {
      return this.gridTextPen;
    },
    set: function (t) {
      this.gridTextPen = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'font', {
    get: function () {
      return this.gridFont;
    },
    set: function (t) {
      this.gridFont = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'backgroundImage', {
    get: function () {
      return this.gridBackgroundImage;
    },
    set: function (t) {
      this.gridBackgroundImage = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var va = (function (r) {
  Mn(t, r);
  function t() {
    var e = r() || this;
    e.gridBorderOverlapStyle = ai.Overlap;
    e.bAllowHorizontalOverflow = false;
    e.gridHorizontalOverflowType = hi.LastPage;
    return e;
  }
  Object.defineProperty(t.prototype, 'cellSpacing', {
    get: function () {
      if (typeof this.gridCellSpacing > 'u') {
        this.gridCellSpacing = 0;
      }
      return this.gridCellSpacing;
    },
    set: function (e) {
      this.gridCellSpacing = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'horizontalOverflowType', {
    get: function () {
      return this.gridHorizontalOverflowType;
    },
    set: function (e) {
      this.gridHorizontalOverflowType = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'allowHorizontalOverflow', {
    get: function () {
      return this.bAllowHorizontalOverflow;
    },
    set: function (e) {
      this.bAllowHorizontalOverflow = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'cellPadding', {
    get: function () {
      if (typeof this.gridCellPadding > 'u') {
        this.gridCellPadding = new He();
      }
      return this.gridCellPadding;
    },
    set: function (e) {
      typeof this.gridCellPadding > 'u'
        ? ((this.gridCellPadding = new He()), (this.gridCellPadding = e))
        : (this.gridCellPadding = e);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'borderOverlapStyle', {
    get: function () {
      return this.gridBorderOverlapStyle;
    },
    set: function (e) {
      this.gridBorderOverlapStyle = e;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Vn);
var wa = (function (r) {
  Mn(t, r);
  function t() {
    var e = r() || this;
    e.gridCellBorders = yt.default;
    return e;
  }
  Object.defineProperty(t.prototype, 'stringFormat', {
    get: function () {
      return this.format;
    },
    set: function (e) {
      this.format = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'borders', {
    get: function () {
      return this.gridCellBorders;
    },
    set: function (e) {
      this.gridCellBorders = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'cellPadding', {
    get: function () {
      return this.gridCellPadding;
    },
    set: function (e) {
      if (this.gridCellPadding == null || typeof this.gridCellPadding > 'u') {
        this.gridCellPadding = new He();
      }
      this.gridCellPadding = e;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Vn);
var ba = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'backgroundBrush', {
    get: function () {
      return this.gridRowBackgroundBrush;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setBackgroundBrush = function (t) {
    this.gridRowBackgroundBrush = t;
    if (typeof this.parent < 'u')
      for (var e = 0; e < this.parent.cells.count; e++) this.parent.cells.getCell(e).style.backgroundBrush = t;
  };
  Object.defineProperty(r.prototype, 'textBrush', {
    get: function () {
      return this.gridRowTextBrush;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setTextBrush = function (t) {
    this.gridRowTextBrush = t;
    if (typeof this.parent < 'u')
      for (var e = 0; e < this.parent.cells.count; e++) this.parent.cells.getCell(e).style.textBrush = t;
  };
  Object.defineProperty(r.prototype, 'textPen', {
    get: function () {
      return this.gridRowTextPen;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setTextPen = function (t) {
    this.gridRowTextPen = t;
    if (typeof this.parent < 'u')
      for (var e = 0; e < this.parent.cells.count; e++) this.parent.cells.getCell(e).style.textPen = t;
  };
  Object.defineProperty(r.prototype, 'font', {
    get: function () {
      return this.gridRowFont;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setFont = function (t) {
    this.gridRowFont = t;
    if (typeof this.parent < 'u')
      for (var e = 0; e < this.parent.cells.count; e++) this.parent.cells.getCell(e).style.font = t;
  };
  Object.defineProperty(r.prototype, 'border', {
    get: function () {
      if (typeof this.gridRowBorder > 'u') {
        this.setBorder(new yt());
      }
      return this.gridRowBorder;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setBorder = function (t) {
    this.gridRowBorder = t;
    if (typeof this.parent < 'u')
      for (var e = 0; e < this.parent.cells.count; e++) this.parent.cells.getCell(e).style.borders = t;
  };
  r.prototype.setParent = function (t) {
    this.parent = t;
  };
  Object.defineProperty(r.prototype, 'backgroundImage', {
    get: function () {
      return this.gridRowBackgroundImage;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.setBackgroundImage = function (t) {
    this.gridRowBackgroundImage = t;
  };
  return r;
})();
var hi;
(function (r) {
  r[(r.NextPage = 0)] = 'NextPage';
  r[(r.LastPage = 1)] = 'LastPage';
})(hi || (hi = {}));
var li = (function () {
  function r(t) {
    this.cellWidth = 0;
    this.cellHeight = 0;
    this.tempval = 0;
    this.fontSpilt = false;
    this.finsh = true;
    this.rowSpanRemainingHeight = 0;
    this.hasRowSpan = false;
    this.hasColSpan = false;
    this.isFinish = true;
    this.present = false;
    this.gridRowSpan = 1;
    this.colSpan = 1;
    if (typeof t < 'u') {
      this.gridRow = t;
    }
  }
  Object.defineProperty(r.prototype, 'isCellMergeContinue', {
    get: function () {
      return this.internalIsCellMergeContinue;
    },
    set: function (t) {
      this.internalIsCellMergeContinue = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isRowMergeContinue', {
    get: function () {
      return this.internalIsRowMergeContinue;
    },
    set: function (t) {
      this.internalIsRowMergeContinue = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isCellMergeStart', {
    get: function () {
      return this.internalIsCellMergeStart;
    },
    set: function (t) {
      this.internalIsCellMergeStart = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'isRowMergeStart', {
    get: function () {
      return this.internalIsRowMergeStart;
    },
    set: function (t) {
      this.internalIsRowMergeStart = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'remainingString', {
    get: function () {
      return this.remaining;
    },
    set: function (t) {
      this.remaining = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'FinishedDrawingCell', {
    get: function () {
      return this.isFinish;
    },
    set: function (t) {
      this.isFinish = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'stringFormat', {
    get: function () {
      if (this.format == null) {
        this.format = new Ct();
      }
      return this.format;
    },
    set: function (t) {
      this.format = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'row', {
    get: function () {
      return this.gridRow;
    },
    set: function (t) {
      this.gridRow = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'value', {
    get: function () {
      return this.objectValue;
    },
    set: function (t) {
      this.objectValue = t;
      if (this.objectValue instanceof ht) {
        this.row.grid.isSingleGrid = false;
        var e = this.objectValue;
        e.ParentCell = this;
        this.objectValue.isChildGrid = true;
        for (var i = this.row.grid.rows.count, n = 0; n < i; n++)
          for (var s = this.row.grid.rows.getRow(n), o = s.cells.count, a = 0; a < o; a++) {
            var h = s.cells.getCell(a);
            h.parent = this;
          }
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rowSpan', {
    get: function () {
      return this.gridRowSpan;
    },
    set: function (t) {
      if (t < 1) throw new Error('ArgumentException : Invalid span specified, must be greater than or equal to 1');
      this.gridRowSpan = t;
      this.row.rowSpanExists = true;
      this.row.grid.hasRowSpanSpan = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'style', {
    get: function () {
      if (this.cellStyle == null) {
        this.cellStyle = new wa();
      }
      return this.cellStyle;
    },
    set: function (t) {
      this.cellStyle = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      if (this.cellHeight === 0) {
        this.cellHeight = this.measureHeight();
      }
      return this.cellHeight;
    },
    set: function (t) {
      this.cellHeight = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'columnSpan', {
    get: function () {
      return this.colSpan;
    },
    set: function (t) {
      if (t < 1) throw Error('Invalid span specified, must be greater than or equal to 1');
      this.colSpan = t;
      this.row.columnSpanExists = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      if (this.cellWidth === 0 || this.row.grid.isComplete) {
        this.cellWidth = this.measureWidth();
      }
      return Math.round(this.cellWidth);
    },
    set: function (t) {
      this.cellWidth = t;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.measureWidth = function () {
    var t = 0;
    var e = new Kt();
    if (typeof this.objectValue == 'string') {
      var i = e.layout(
        this.objectValue,
        this.getTextFont(),
        this.stringFormat,
        new C(Number.MAX_VALUE, Number.MAX_VALUE),
        false,
        new C(0, 0),
      );
      t += i.actualSize.width;
      t += (this.style.borders.left.width + this.style.borders.right.width) * 2;
    } else if (this.objectValue instanceof ht) t = this.objectValue.size.width;
    else if (this.objectValue instanceof Me || this.objectValue instanceof _t) t += this.objectValue.width;
    else if (this.objectValue instanceof ke) {
      var n = this.objectValue;
      var s = e.layout(
        this.objectValue.text,
        this.objectValue.font,
        this.objectValue.stringFormat,
        new C(0, 0),
        false,
        new C(0, 0),
      );
      t += s.actualSize.width;
      t += (this.style.borders.left.width + this.style.borders.right.width) * 2;
    }
    this.objectValue instanceof ht
      ? this.style.cellPadding != null || typeof this.style.cellPadding < 'u'
        ? (typeof this.style.cellPadding.left < 'u' &&
            this.style.cellPadding.hasLeftPad &&
            (t += this.style.cellPadding.left),
          typeof this.style.cellPadding.right < 'u' &&
            this.style.cellPadding.hasRightPad &&
            (t += this.style.cellPadding.right))
        : (typeof this.row.grid.style.cellPadding.left < 'u' &&
            this.row.grid.style.cellPadding.hasLeftPad &&
            (t += this.row.grid.style.cellPadding.left),
          typeof this.row.grid.style.cellPadding.right < 'u' &&
            this.row.grid.style.cellPadding.hasRightPad &&
            (t += this.row.grid.style.cellPadding.right))
      : this.style.cellPadding != null
        ? (t += this.style.cellPadding.left + this.style.cellPadding.right)
        : (t += this.row.grid.style.cellPadding.left + this.row.grid.style.cellPadding.right);
    t += this.row.grid.style.cellSpacing;
    return t;
  };
  r.prototype.drawCellBackground = function (t, e) {
    var i = this.getBackgroundBrush();
    if (i != null) {
      t.save();
      t.drawRectangle(i, e.x, e.y, e.width, e.height);
      t.restore();
    }
    if (this.style.backgroundImage != null) {
      this.getBackgroundImage();
      t.drawImage(this.style.backgroundImage, e.x, e.y, e.width, e.height);
    }
  };
  r.prototype.adjustContentLayoutArea = function (t) {
    var e = new I(t.x, t.y, t.width, t.height);
    if (!(this.objectValue instanceof ht)) {
      typeof this.style.cellPadding > 'u' || this.style.cellPadding == null
        ? ((e.x += this.gridRow.grid.style.cellPadding.left),
          (e.y += this.gridRow.grid.style.cellPadding.top),
          (e.width -= this.gridRow.grid.style.cellPadding.right + this.gridRow.grid.style.cellPadding.left),
          (e.height -= this.gridRow.grid.style.cellPadding.bottom + this.gridRow.grid.style.cellPadding.top))
        : ((e.x += this.style.cellPadding.left),
          (e.y += this.style.cellPadding.top),
          (e.width -= this.style.cellPadding.right + this.style.cellPadding.left),
          (e.height -= this.style.cellPadding.bottom + this.style.cellPadding.top),
          this.rowSpan === 1 && (e.width -= this.style.borders.left.width));
      typeof this.style.borders > 'u' || this.style.borders == null
        ? ((e.x += this.gridRow.style.border.left.width),
          (e.y += this.gridRow.style.border.top.width),
          (e.width -= this.gridRow.style.border.left.width + this.gridRow.style.border.right.width),
          (e.height -= this.gridRow.style.border.top.width + this.gridRow.style.border.bottom.width))
        : ((e.x += this.style.borders.left.width),
          (e.y += this.style.borders.top.width),
          (e.width -= this.style.borders.left.width + this.style.borders.right.width),
          (e.height -= this.style.borders.top.width + this.style.borders.bottom.width),
          this.rowSpan === 1 && (e.width -= this.style.borders.left.width));
    } else {
      if (this.style.cellPadding == null || typeof this.style.cellPadding > 'u')
        if (this.gridRow.grid.style.cellPadding !== null && typeof this.gridRow.grid.style.cellPadding < 'u') {
          var i = this.gridRow.grid.style.cellPadding.hasLeftPad;
          var n = this.gridRow.grid.style.cellPadding.hasTopPad;
          var s = this.gridRow.grid.style.cellPadding.hasRightPad;
          var o = this.gridRow.grid.style.cellPadding.hasBottomPad;
          if (
            this.gridRow.grid.style.cellPadding.hasLeftPad ||
            this.gridRow.grid.style.cellPadding.hasTopPad ||
            this.gridRow.grid.style.cellPadding.hasRightPad ||
            this.gridRow.grid.style.cellPadding.hasBottomPad
          ) {
            if (
              typeof this.gridRow.grid.style.cellPadding.left < 'u' &&
              this.gridRow.grid.style.cellPadding.hasLeftPad
            ) {
              e.x += this.gridRow.grid.style.cellPadding.left + this.cellStyle.borders.left.width;
              e.width -= this.gridRow.grid.style.cellPadding.left;
            }
            if (typeof this.gridRow.grid.style.cellPadding.top < 'u' && this.gridRow.grid.style.cellPadding.hasTopPad) {
              e.y += this.gridRow.grid.style.cellPadding.top + this.cellStyle.borders.top.width;
              e.height -= this.gridRow.grid.style.cellPadding.top;
            }
            if (
              typeof this.gridRow.grid.style.cellPadding.right < 'u' &&
              this.gridRow.grid.style.cellPadding.hasRightPad
            ) {
              e.width -= this.gridRow.grid.style.cellPadding.right;
            }
            if (
              typeof this.gridRow.grid.style.cellPadding.bottom < 'u' &&
              this.gridRow.grid.style.cellPadding.hasBottomPad
            ) {
              e.height -= this.gridRow.grid.style.cellPadding.bottom;
            }
          } else {
            var a = this.getStringFormat();
            if (a.alignment === null || typeof a.alignment > 'u') {
              e.x += this.row.grid.style.cellPadding.left;
              e.y += this.row.grid.style.cellPadding.top;
            }
          }
        } else {
          var a = this.getStringFormat();
          if (a.alignment === null || typeof a.alignment > 'u') {
            e.x += this.row.grid.style.cellPadding.left;
            e.y += this.row.grid.style.cellPadding.top;
          }
        }
      else {
        if (typeof this.style.cellPadding.left < 'u' && this.style.cellPadding.hasLeftPad) {
          e.x += this.style.cellPadding.left + this.cellStyle.borders.left.width;
          e.width -= this.style.cellPadding.left;
        }
        if (typeof this.style.cellPadding.top < 'u' && this.style.cellPadding.hasTopPad) {
          e.y += this.style.cellPadding.top + this.cellStyle.borders.top.width;
          e.height -= this.style.cellPadding.top;
        }
        if (typeof this.style.cellPadding.right < 'u' && this.style.cellPadding.hasRightPad) {
          e.width -= this.style.cellPadding.right;
        }
        if (typeof this.style.cellPadding.bottom < 'u' && this.style.cellPadding.hasBottomPad) {
          e.height -= this.style.cellPadding.bottom;
        }
      }
      e.width -= this.cellStyle.borders.left.width + this.cellStyle.borders.right.width;
      e.height -= this.cellStyle.borders.top.width + this.cellStyle.borders.bottom.width;
    }
    return e;
  };
  r.prototype.draw = function (t, e, i) {
    var n = null;
    if (this.internalIsCellMergeContinue || this.internalIsRowMergeContinue)
      if (this.internalIsCellMergeContinue && this.row.grid.style.allowHorizontalOverflow) {
        if (
          (this.row.rowOverflowIndex > 0 && this.row.cells.indexOf(this) != this.row.rowOverflowIndex + 1) ||
          (this.row.rowOverflowIndex == 0 && this.internalIsCellMergeContinue)
        )
          return n;
      } else return n;
    e = this.adjustOuterLayoutArea(e, t);
    this.drawCellBackground(t, e);
    var s = this.getTextPen();
    var o = this.getTextBrush();
    if (typeof s > 'u' && typeof o > 'u') {
      o = new st(new j(0, 0, 0));
    }
    var a = this.getTextFont();
    var h = this.getStringFormat();
    var l = e;
    if (l.height >= t.clientSize.height && this.row.grid.allowRowBreakAcrossPages) {
      l.height -= l.y;
      if (typeof this._rowHeight < 'u' && this._rowHeight !== null && l.height > this._rowHeight) {
        l.height = this._rowHeight;
      }
    }
    l = this.adjustContentLayoutArea(l);
    if (typeof this.objectValue == 'string' || typeof this.remaining == 'string') {
      var u = void 0;
      var d = void 0;
      l.height < a.height ? (d = new I(l.x, l.y, l.width, a.height)) : (d = l);
      if (l.height < a.height && this.row.grid.isChildGrid && this.row.grid.ParentCell != null) {
        var c =
          d.height -
          this.row.grid.ParentCell.row.grid.style.cellPadding.bottom -
          this.row.grid.style.cellPadding.bottom;
        if (this.row.grid.splitChildRowIndex != -1) {
          this.fontSpilt = true;
          this.row.rowFontSplit = true;
        }
        if (c > 0 && c < a.height) {
          d.height = c;
        }
      }
      if (this.gridRow.grid.style.cellSpacing != 0) {
        d.width -= this.gridRow.grid.style.cellSpacing;
        e.width -= this.gridRow.grid.style.cellSpacing;
      }
      this.isFinish
        ? ((u = this.remaining === '' ? this.remaining : this.objectValue),
          t.drawString(u, a, s, o, d.x, d.y, d.width, d.height, h),
          this.row.grid.splitChildRowIndex != -1 &&
            !this.row.grid.isChildGrid &&
            typeof this.remaining > 'u' &&
            (this.remaining = ''))
        : ((typeof this.remaining > 'u' || this.remaining === null) && (this.remaining = ''),
          this.row.repeatFlag && t.drawString(this.remaining, a, s, o, d.x, d.y, d.width, d.height, h),
          (this.isFinish = true));
      n = t.stringLayoutResult;
    } else if (this.objectValue instanceof ht) {
      var f = this.objectValue;
      f.isChildGrid = true;
      f.ParentCell = this;
      var g = void 0;
      g = l;
      if (this.gridRow.grid.style.cellSpacing != 0) {
        e.width -= this.gridRow.grid.style.cellSpacing;
      }
      var y = new Nn(f);
      var m = new zn();
      this.row.grid.LayoutFormat != null ? (m = this.row.grid.LayoutFormat) : (m.layout = qt.Paginate);
      var w = new oi();
      if (t.layer != null) {
        w.page = t.page;
        w.bounds = g;
        w.format = m;
        f.setSpan();
        f.checkSpan();
        var b = y.Layouter(w);
        this.value = f;
        if (this.row.grid.splitChildRowIndex !== -1) {
          this.height = this.row.rowBreakHeightValue;
        }
        if (w.page != b.page) {
          if (this.row.rowBreakHeightValue !== null && typeof this.row.rowBreakHeightValue < 'u') {
            b.bounds.height = this.row.rowBreakHeightValue;
          }
          this.row.rowBreakHeight == 0
            ? (this.row.NestedGridLayoutResult = b)
            : (this.row.rowBreakHeight = this.row.rowBreakHeightValue);
        }
      }
    } else if (this.objectValue instanceof Me || this.objectValue instanceof _t) {
      var v = new I(l.x, l.y, l.width, l.height);
      var x = this.objectValue;
      if (this.objectValue.width <= l.width) {
        v.width = this.objectValue.width;
      }
      if (this.objectValue.height <= l.height) {
        v.height = this.objectValue.height;
      }
      t.drawImage(this.objectValue, v.x, v.y, v.width, v.height);
    } else
      this.objectValue instanceof ke
        ? this.objectValue.draw(t.currentPage, l)
        : typeof this.objectValue > 'u' &&
          ((this.objectValue = ''),
          t.drawString(this.objectValue, a, s, o, l.x, l.y, l.width, l.height, h),
          this.style.cellPadding != null &&
            this.style.cellPadding.bottom == 0 &&
            this.style.cellPadding.left == 0 &&
            this.style.cellPadding.right == 0 &&
            this.style.cellPadding.top == 0 &&
            (e.width -= this.style.borders.left.width + this.style.borders.right.width),
          this.gridRow.grid.style.cellSpacing != 0 && (e.width -= this.gridRow.grid.style.cellSpacing));
    if (this.style.borders != null) {
      this.fontSpilt
        ? this.row.grid.ParentCell.row.grid.splitChildRowIndex != -1 &&
          ((this.row.rowFontSplit = false), this.drawCellBorders(t, e))
        : this.drawCellBorders(t, e);
    }
    return n;
  };
  r.prototype.drawCellBorders = function (t, e) {
    if (this.row.grid.style.borderOverlapStyle === ai.Inside) {
      e.x += this.style.borders.left.width;
      e.y += this.style.borders.top.width;
      e.width -= this.style.borders.right.width;
      e.height -= this.style.borders.bottom.width;
    }
    var i = new D(e.x, e.y + e.height);
    var n = new D(e.x, e.y);
    var s = this.cellStyle.borders.left;
    if (this.cellStyle.borders.left.dashStyle === lt.Solid) {
      s.lineCap = Ce.Square;
    }
    if (s.width !== 0) {
      t.drawLine(s, i, n);
    }
    i = new D(e.x + e.width, e.y);
    n = new D(e.x + e.width, e.y + e.height);
    s = this.cellStyle.borders.right;
    if (e.x + e.width > t.clientSize.width - s.width / 2) {
      i = new D(t.clientSize.width - s.width / 2, e.y);
      n = new D(t.clientSize.width - s.width / 2, e.y + e.height);
    }
    if (this.cellStyle.borders.right.dashStyle === lt.Solid) {
      s.lineCap = Ce.Square;
    }
    if (s.width !== 0) {
      t.drawLine(s, i, n);
    }
    i = new D(e.x, e.y);
    n = new D(e.x + e.width, e.y);
    s = this.cellStyle.borders.top;
    if (this.cellStyle.borders.top.dashStyle === lt.Solid) {
      s.lineCap = Ce.Square;
    }
    if (s.width !== 0) {
      t.drawLine(s, i, n);
    }
    i = new D(e.x + e.width, e.y + e.height);
    n = new D(e.x, e.y + e.height);
    s = this.cellStyle.borders.bottom;
    if (e.y + e.height > t.clientSize.height - s.width / 2) {
      i = new D(e.x + e.width, t.clientSize.height - s.width / 2);
      n = new D(e.x, t.clientSize.height - s.width / 2);
    }
    if (this.cellStyle.borders.bottom.dashStyle === lt.Solid) {
      s.lineCap = Ce.Square;
    }
    if (s.width !== 0) {
      t.drawLine(s, i, n);
    }
  };
  r.prototype.adjustOuterLayoutArea = function (t, e) {
    var i = false;
    var n = this.row.grid.style.cellSpacing;
    if (this.row.grid.style.cellSpacing > 0) {
      t = new I(
        t.x + this.row.grid.style.cellSpacing,
        t.y + this.row.grid.style.cellSpacing,
        t.width - this.row.grid.style.cellSpacing,
        t.height - this.row.grid.style.cellSpacing,
      );
    }
    var s = this.row.cells.indexOf(this);
    if (
      this.columnSpan > 1 ||
      (this.row.rowOverflowIndex > 0 && s == this.row.rowOverflowIndex + 1 && this.isCellMergeContinue)
    ) {
      var o = this.columnSpan;
      if (o == 1 && this.isCellMergeContinue)
        for (var a = s + 1; a < this.row.grid.columns.count && this.row.cells.getCell(a).isCellMergeContinue; a++) o++;
      for (var h = 0, l = s; l < s + o; l++) {
        if (this.row.grid.style.allowHorizontalOverflow) {
          var u = void 0;
          var d = this.row.grid.size.width < e.clientSize.width ? this.row.grid.size.width : e.clientSize.width;
          this.row.grid.size.width > e.clientSize.width
            ? (u = t.x + h + this.row.grid.columns.getColumn(l).width)
            : (u = h + this.row.grid.columns.getColumn(l).width);
          if (u > d) break;
        }
        h += this.row.grid.columns.getColumn(l).width;
      }
      h -= this.row.grid.style.cellSpacing;
      t.width = h;
    }
    if (this.rowSpan > 1 || this.row.rowSpanExists) {
      var o = this.rowSpan;
      var c = this.row.grid.rows.rowCollection.indexOf(this.row);
      if (c == -1) {
        c = this.row.grid.headers.indexOf(this.row);
        if (c != -1) {
          i = true;
        }
      }
      for (var f = 0, l = c; l < c + this.rowSpan; l++) {
        f += i ? this.row.grid.headers.getHeader(l).height : this.row.grid.rows.getRow(l).height;
        var g = this.row.grid.rows.getRow(l);
        this.row.grid.rows.rowCollection.indexOf(g);
      }
      this.row.cells.indexOf(this);
      f -= this.row.grid.style.cellSpacing;
      t.height = f;
      if (!this.row.rowMergeComplete) {
        t.height = f;
      }
    }
    return t;
  };
  r.prototype.getTextFont = function () {
    return typeof this.style.font < 'u' && this.style.font != null
      ? this.style.font
      : typeof this.row.style.font < 'u' && this.row.style.font != null
        ? this.row.style.font
        : typeof this.row.grid.style.font < 'u' && this.row.grid.style.font != null
          ? this.row.grid.style.font
          : Jt.defaultFont;
  };
  r.prototype.getTextBrush = function () {
    return typeof this.style.textBrush < 'u' && this.style.textBrush != null
      ? this.style.textBrush
      : typeof this.row.style.textBrush < 'u' && this.row.style.textBrush != null
        ? this.row.style.textBrush
        : this.row.grid.style.textBrush;
  };
  r.prototype.getTextPen = function () {
    return typeof this.style.textPen < 'u' && this.style.textPen != null
      ? this.style.textPen
      : typeof this.row.style.textPen < 'u' && this.row.style.textPen != null
        ? this.row.style.textPen
        : this.row.grid.style.textPen;
  };
  r.prototype.getBackgroundBrush = function () {
    return typeof this.style.backgroundBrush < 'u' && this.style.backgroundBrush != null
      ? this.style.backgroundBrush
      : typeof this.row.style.backgroundBrush < 'u' && this.row.style.backgroundBrush != null
        ? this.row.style.backgroundBrush
        : this.row.grid.style.backgroundBrush;
  };
  r.prototype.getBackgroundImage = function () {
    return typeof this.style.backgroundImage < 'u' && this.style.backgroundImage != null
      ? this.style.backgroundImage
      : typeof this.row.style.backgroundImage < 'u' && this.row.style.backgroundImage != null
        ? this.row.style.backgroundImage
        : this.row.grid.style.backgroundImage;
  };
  r.prototype.getStringFormat = function () {
    return typeof this.style.stringFormat < 'u' && this.style.stringFormat != null
      ? this.style.stringFormat
      : this.stringFormat;
  };
  r.prototype.measureHeight = function () {
    var t = this.calculateWidth();
    this.style.cellPadding == null || typeof this.style.cellPadding > 'u'
      ? (t -= this.gridRow.grid.style.cellPadding.right + this.gridRow.grid.style.cellPadding.left)
      : ((t -= this.style.cellPadding.right + this.style.cellPadding.left),
        (t -= this.style.borders.left.width + this.style.borders.right.width));
    var e = 0;
    var i = new Kt();
    if (typeof this.objectValue == 'string' || typeof this.remaining == 'string') {
      var n = this.objectValue;
      if (!this.isFinish) {
        n =
          this.remaining === null || this.remaining === '' || typeof this.remaining > 'u'
            ? this.objectValue
            : this.remaining;
      }
      var s = null;
      var o = this.row.cells.indexOf(this);
      if (this.gridRow.grid.style.cellSpacing != 0) {
        t -= this.gridRow.grid.style.cellSpacing * 2;
      }
      if (!this.row.cells.getCell(o).hasColSpan && !this.row.cells.getCell(o).hasRowSpan) {
        this.gridRow.grid.isChildGrid
          ? (t < 0
              ? ((this.tempval = t),
                this.style.cellPadding == null || typeof this.style.cellPadding > 'u'
                  ? (this.tempval +=
                      this.gridRow.grid.style.cellPadding.right + this.gridRow.grid.style.cellPadding.left)
                  : ((this.tempval += this.style.cellPadding.right + this.style.cellPadding.left),
                    (this.tempval += this.style.borders.left.width + this.style.borders.right.width)))
              : (this.tempval = t),
            (s = i.layout(n, this.getTextFont(), this.stringFormat, new C(this.tempval, 0), false, new C(0, 0))),
            (e += s.actualSize.height))
          : ((s = i.layout(n, this.getTextFont(), this.stringFormat, new C(t, 0), false, new C(0, 0))),
            (e += s.actualSize.height));
      }
      e += (this.style.borders.top.width + this.style.borders.bottom.width) * 2;
    } else if (this.objectValue instanceof ht) {
      var o = this.row.cells.indexOf(this);
      var a = 0;
      this.style.cellPadding != null || typeof this.style.cellPadding < 'u'
        ? ((a = this.calculateWidth()),
          typeof this.style.cellPadding.left < 'u' &&
            this.style.cellPadding.hasLeftPad &&
            (a -= this.style.cellPadding.left),
          typeof this.style.cellPadding.right < 'u' &&
            this.style.cellPadding.hasRightPad &&
            (a -= this.style.cellPadding.right))
        : this.row.grid.style.cellPadding != null || typeof this.row.grid.style.cellPadding < 'u'
          ? ((a = this.calculateWidth()),
            typeof this.row.grid.style.cellPadding.left < 'u' &&
              this.row.grid.style.cellPadding.hasLeftPad &&
              (a -= this.row.grid.style.cellPadding.left),
            typeof this.row.grid.style.cellPadding.right < 'u' &&
              this.row.grid.style.cellPadding.hasRightPad &&
              (a -= this.row.grid.style.cellPadding.right))
          : (a = this.calculateWidth());
      this.objectValue.tempWidth = a;
      !this.row.cells.getCell(o).hasColSpan && !this.row.cells.getCell(o).hasRowSpan
        ? (e = this.objectValue.size.height)
        : (e += (this.style.borders.top.width + this.style.borders.bottom.width) * 2);
      if (this.gridRow.grid.style.cellSpacing !== 0) {
        t -= this.gridRow.grid.style.cellSpacing * 2;
      }
      if (this.style.cellPadding != null || typeof this.style.cellPadding < 'u') {
        if (typeof this.row.grid.style.cellPadding.top < 'u' && this.row.grid.style.cellPadding.hasTopPad) {
          e += this.row.grid.style.cellPadding.top;
        }
        if (this.row.grid.style.cellPadding.hasBottomPad && typeof this.row.grid.style.cellPadding.bottom < 'u') {
          e += this.row.grid.style.cellPadding.bottom;
        }
      }
      e += this.objectValue.style.cellSpacing;
    } else if (this.objectValue instanceof Me || this.objectValue instanceof _t) e += this.objectValue.height;
    else if (this.objectValue instanceof ke) {
      var h = this.objectValue;
      var s = i.layout(
        this.objectValue.text,
        this.objectValue.font,
        this.objectValue.stringFormat,
        new C(t, 0),
        false,
        new C(0, 0),
      );
      e += s.actualSize.height;
      e += (this.style.borders.top.width + this.style.borders.bottom.width) * 2;
    } else if (typeof this.objectValue > 'u') {
      this.style.cellPadding == null || typeof this.style.cellPadding > 'u'
        ? (t -= this.gridRow.grid.style.cellPadding.right + this.gridRow.grid.style.cellPadding.left)
        : ((t -= this.style.cellPadding.right + this.style.cellPadding.left),
          (t -= this.style.borders.left.width + this.style.borders.right.width));
      e += (this.style.borders.top.width + this.style.borders.bottom.width) * 2;
    }
    this.objectValue instanceof ht
      ? this.style.cellPadding == null || typeof this.style.cellPadding > 'u'
        ? (typeof this.row.grid.style.cellPadding.top < 'u' &&
            this.row.grid.style.cellPadding.hasTopPad &&
            (e += this.row.grid.style.cellPadding.top),
          typeof this.row.grid.style.cellPadding.bottom < 'u' &&
            this.row.grid.style.cellPadding.hasBottomPad &&
            (e += this.row.grid.style.cellPadding.bottom))
        : (typeof this.style.cellPadding.top < 'u' &&
            this.style.cellPadding.hasTopPad &&
            (e += this.style.cellPadding.top),
          typeof this.style.cellPadding.bottom < 'u' &&
            this.style.cellPadding.hasBottomPad &&
            (e += this.style.cellPadding.bottom))
      : this.style.cellPadding == null || typeof this.style.cellPadding > 'u'
        ? (e += this.row.grid.style.cellPadding.top + this.row.grid.style.cellPadding.bottom)
        : (e += this.style.cellPadding.top + this.style.cellPadding.bottom);
    e += this.row.grid.style.cellSpacing;
    return e;
  };
  r.prototype.calculateWidth = function () {
    var t = this.row.cells.indexOf(this);
    this.row.grid.rows.rowCollection.indexOf(this.row);
    var e = this.columnSpan;
    var i = 0;
    if (this.columnSpan === 1)
      for (var n = 0; n < this.columnSpan; n++) i += this.row.grid.columns.getColumn(t + n).width;
    else if (this.columnSpan > 1)
      for (var n = 0; n < this.columnSpan; n++) {
        i += this.row.grid.columns.getColumn(t + n).width;
        if (n + 1 < this.columnSpan) {
          this.row.cells.getCell(t + n + 1).hasColSpan = true;
        }
      }
    if (
      this.parent != null &&
      this.parent.row.width > 0 &&
      this.row.grid.isChildGrid &&
      this.parent != null &&
      this.row.width > this.parent.row.width
    ) {
      i = 0;
      for (var s = 0; s < this.parent.columnSpan; s++) i += this.parent.row.grid.columns.getColumn(s).width;
      i = i / this.row.cells.count;
    }
    return i;
  };
  return r;
})();
var Sa = (function () {
  function r(t) {
    this.cells = [];
    this.gridRow = t;
  }
  r.prototype.getCell = function (t) {
    if (t < 0 || t >= this.count) throw new Error('IndexOutOfRangeException');
    return this.cells[t];
  };
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.cells.length;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    if (typeof t > 'u') {
      var e = new li();
      this.add(e);
      return t;
    } else {
      t.row = this.gridRow;
      this.cells.push(t);
    }
  };
  r.prototype.indexOf = function (t) {
    return this.cells.indexOf(t);
  };
  return r;
})();
var Ca = (function () {
  function r(t) {
    this.columnWidth = 0;
    this.grid = t;
  }
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.columnWidth;
    },
    set: function (t) {
      this.isCustomWidth = true;
      this.columnWidth = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'format', {
    get: function () {
      if (this.stringFormat == null) {
        this.stringFormat = new Ct();
      }
      return this.stringFormat;
    },
    set: function (t) {
      this.stringFormat = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Pa = (function () {
  function r(t) {
    this.internalColumns = [];
    this.columnWidth = 0;
    this.grid = t;
    this.internalColumns = [];
  }
  r.prototype.add = function (t) {
    for (var e = 0; e < t; e++) {
      this.internalColumns.push(new Ca(this.grid));
      for (var i = 0; i < this.grid.rows.count; i++) {
        var n = this.grid.rows.getRow(i);
        var s = new li();
        s.value = '';
        n.cells.add(s);
      }
    }
  };
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.internalColumns.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      if (this.columnWidth === 0) {
        this.columnWidth = this.measureColumnsWidth();
      }
      if (
        this.grid.initialWidth !== 0 &&
        this.columnWidth !== this.grid.initialWidth &&
        !this.grid.style.allowHorizontalOverflow
      ) {
        this.columnWidth = this.grid.initialWidth;
        this.grid.isPageWidth = true;
      }
      return this.columnWidth;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'columns', {
    get: function () {
      return this.internalColumns;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.getColumn = function (t) {
    if (t >= 0 && t <= this.columns.length) return this.columns[t];
    throw Error('can not get the column from the index: ' + t);
  };
  r.prototype.measureColumnsWidth = function () {
    var t = 0;
    this.grid.measureColumnsWidth();
    for (var e = 0, i = this.internalColumns.length; e < i; e++) t += this.internalColumns[e].width;
    return t;
  };
  r.prototype.getDefaultWidths = function (t) {
    for (var e = [], i = this.count, n = 0; n < this.count; n++)
      this.grid.isPageWidth && t >= 0 && !this.internalColumns[n].isCustomWidth
        ? (this.internalColumns[n].width = 0)
        : ((e[n] = this.internalColumns[n].width),
          this.internalColumns[n].width > 0 && this.internalColumns[n].isCustomWidth
            ? ((t -= this.internalColumns[n].width), i--)
            : (e[n] = 0));
    for (var n = 0; n < this.count; n++) {
      var s = t / i;
      if (e[n] <= 0) {
        e[n] = s;
      }
    }
    return e;
  };
  return r;
})();
var kn = (function () {
  function r(t) {
    this.gridRowOverflowIndex = 0;
    this.rowHeight = 0;
    this.rowWidth = 0;
    this.isrowFinish = false;
    this.isRowSpanRowHeightSet = false;
    this.noOfPageCount = 0;
    this.isRowHeightSet = false;
    this.isPageBreakRowSpanApplied = false;
    this.isRowMergeComplete = true;
    this.repeatFlag = false;
    this.rowFontSplit = false;
    this.isHeaderRow = false;
    this.pdfGrid = t;
  }
  Object.defineProperty(r.prototype, 'rowSpanExists', {
    get: function () {
      return this.bRowSpanExists;
    },
    set: function (t) {
      this.bRowSpanExists = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'cells', {
    get: function () {
      if (this.gridCells == null) {
        this.gridCells = new Sa(this);
      }
      return this.gridCells;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'grid', {
    get: function () {
      return this.pdfGrid;
    },
    set: function (t) {
      this.pdfGrid = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'style', {
    get: function () {
      if (typeof this.rowStyle > 'u') {
        this.rowStyle = new ba();
        this.rowStyle.setParent(this);
      }
      return this.rowStyle;
    },
    set: function (t) {
      this.rowStyle = t;
      for (var e = 0; e < this.cells.count; e++) {
        this.cells.getCell(e).style.borders = t.border;
        if (typeof t.font < 'u') {
          this.cells.getCell(e).style.font = t.font;
        }
        if (typeof t.backgroundBrush < 'u') {
          this.cells.getCell(e).style.backgroundBrush = t.backgroundBrush;
        }
        if (typeof t.backgroundImage < 'u') {
          this.cells.getCell(e).style.backgroundImage = t.backgroundImage;
        }
        if (typeof t.textBrush < 'u') {
          this.cells.getCell(e).style.textBrush = t.textBrush;
        }
        if (typeof t.textPen < 'u') {
          this.cells.getCell(e).style.textPen = t.textPen;
        }
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rowBreakHeight', {
    get: function () {
      if (typeof this.gridRowBreakHeight > 'u') {
        this.gridRowBreakHeight = 0;
      }
      return this.gridRowBreakHeight;
    },
    set: function (t) {
      this.gridRowBreakHeight = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rowOverflowIndex', {
    get: function () {
      return this.gridRowOverflowIndex;
    },
    set: function (t) {
      this.gridRowOverflowIndex = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      if (!this.isRowHeightSet) {
        this.rowHeight = this.measureHeight();
      }
      return this.rowHeight;
    },
    set: function (t) {
      this.rowHeight = t;
      this.isRowHeightSet = true;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      if (this.rowWidth === 0 || typeof this.rowWidth > 'u') {
        this.rowWidth = this.measureWidth();
      }
      return this.rowWidth;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'NestedGridLayoutResult', {
    get: function () {
      return this.gridResult;
    },
    set: function (t) {
      this.gridResult = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'columnSpanExists', {
    get: function () {
      return this.bColumnSpanExists;
    },
    set: function (t) {
      this.bColumnSpanExists = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rowMergeComplete', {
    get: function () {
      return this.isRowMergeComplete;
    },
    set: function (t) {
      this.isRowMergeComplete = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rowIndex', {
    get: function () {
      return this.grid.rows.rowCollection.indexOf(this);
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.measureHeight = function () {
    var t = 0;
    var e;
    var i = 0;
    this.cells.getCell(0).rowSpan > 1 ? (e = 0) : (e = this.cells.getCell(0).height);
    for (var n = 0; n < this.cells.count; n++) {
      var s = this.cells.getCell(n);
      if (s.rowSpanRemainingHeight > t) {
        t = s.rowSpanRemainingHeight;
      }
      this.rowMergeComplete = false;
      if (s.rowSpan > 1) {
        for (
          var o = n,
            a = this.isHeaderRow ? this.grid.headers.indexOf(this) : this.grid.rows.rowCollection.indexOf(this),
            h = 0;
          h < s.rowSpan;
          h++
        )
          if (h + 1 < s.rowSpan) {
            (this.isHeaderRow
              ? this.grid.headers.getHeader(a + h + 1)
              : this.grid.rows.getRow(a + h + 1)
            ).cells.getCell(o).hasRowSpan = true;
          }
        if (i < s.height) {
          i = s.height;
        }
        continue;
      }
      e = Math.max(e, s.height);
    }
    if (i > e) {
      e = i;
    }
    e === 0 ? (e = i) : t > 0 && (e += t);
    return e;
  };
  r.prototype.measureWidth = function () {
    for (var t = 0, e = 0; e < this.grid.columns.count; e++) {
      var i = this.grid.columns.getColumn(e);
      t += i.width;
    }
    return t;
  };
  return r;
})();
var xa = (function () {
  function r(t) {
    this.rows = [];
    this.grid = t;
  }
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.rows.length;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'rowCollection', {
    get: function () {
      return this.rows;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.addRow = function (t) {
    if (typeof t > 'u') {
      var e = new kn(this.grid);
      this.addRow(e);
      return e;
    } else {
      t.style.setBackgroundBrush(this.grid.style.backgroundBrush);
      t.style.setFont(this.grid.style.font);
      t.style.setTextBrush(this.grid.style.textBrush);
      t.style.setTextPen(this.grid.style.textPen);
      if (t.cells.count === 0) for (var i = 0; i < this.grid.columns.count; i++) t.cells.add(new li());
      this.rows.push(t);
    }
  };
  r.prototype.getRow = function (t) {
    return this.rows[t];
  };
  return r;
})();
var Ra = (function () {
  function r(t) {
    this.rows = [];
    this.grid = t;
    this.rows = [];
  }
  r.prototype.getHeader = function (t) {
    return this.rows[t];
  };
  Object.defineProperty(r.prototype, 'count', {
    get: function () {
      return this.rows.length;
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.add = function (t) {
    if (typeof t == 'number') {
      for (var e = void 0, i = 0; i < t; i++) {
        e = new kn(this.grid);
        e.isHeaderRow = true;
        for (var n = 0; n < this.grid.columns.count; n++) e.cells.add(new li());
        this.rows.push(e);
      }
      return this.rows;
    } else this.rows.push(t);
  };
  r.prototype.indexOf = function (t) {
    return this.rows.indexOf(t);
  };
  return r;
})();
var Ia = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var ht = (function (r) {
  Ia(t, r);
  function t() {
    var e = r() || this;
    e.gridSize = new C(0, 0);
    e.isGridSplit = false;
    e.isRearranged = false;
    e.pageBounds = new I();
    e.listOfNavigatePages = [];
    e.parentCellIndex = 0;
    e.tempWidth = 0;
    e.breakRow = true;
    e.splitChildRowIndex = -1;
    e.hasRowSpanSpan = false;
    e.hasColumnSpan = false;
    e.isSingleGrid = true;
    return e;
  }
  Object.defineProperty(t.prototype, 'raiseBeginCellDraw', {
    get: function () {
      return typeof this.beginCellDraw < 'u' && typeof this.beginCellDraw !== null;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'raiseEndCellDraw', {
    get: function () {
      return typeof this.endCellDraw < 'u' && typeof this.endCellDraw !== null;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'repeatHeader', {
    get: function () {
      if (this.bRepeatHeader == null || typeof this.bRepeatHeader > 'u') {
        this.bRepeatHeader = false;
      }
      return this.bRepeatHeader;
    },
    set: function (e) {
      this.bRepeatHeader = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'allowRowBreakAcrossPages', {
    get: function () {
      return this.breakRow;
    },
    set: function (e) {
      this.breakRow = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'columns', {
    get: function () {
      if (this.gridColumns == null || typeof this.gridColumns > 'u') {
        this.gridColumns = new Pa(this);
      }
      return this.gridColumns;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'rows', {
    get: function () {
      if (this.gridRows == null) {
        this.gridRows = new xa(this);
      }
      return this.gridRows;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'headers', {
    get: function () {
      if (this.gridHeaders == null || typeof this.gridHeaders > 'u') {
        this.gridHeaders = new Ra(this);
      }
      return this.gridHeaders;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'initialWidth', {
    get: function () {
      return this.gridInitialWidth;
    },
    set: function (e) {
      this.gridInitialWidth = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'style', {
    get: function () {
      if (this.gridStyle == null) {
        this.gridStyle = new va();
      }
      return this.gridStyle;
    },
    set: function (e) {
      if (this.gridStyle == null) {
        this.gridStyle = e;
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'isPageWidth', {
    get: function () {
      return this.ispageWidth;
    },
    set: function (e) {
      this.ispageWidth = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'isChildGrid', {
    get: function () {
      return this.ischildGrid;
    },
    set: function (e) {
      this.ischildGrid = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'size', {
    get: function () {
      if ((this.gridSize.width === 0 || typeof this.gridSize.width > 'u') && this.gridSize.height === 0) {
        this.gridSize = this.measure();
      }
      return this.gridSize;
    },
    set: function (e) {
      this.gridSize = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'ParentCell', {
    get: function () {
      return this.parentCell;
    },
    set: function (e) {
      this.parentCell = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'LayoutFormat', {
    get: function () {
      return this.layoutFormat;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.draw = function (e, i, n, s) {
    if (i instanceof D && typeof i.width > 'u' && typeof n > 'u') return this.drawHelper(e, i.x, i.y);
    if (typeof i == 'number' && typeof n == 'number' && typeof s > 'u') return this.drawHelper(e, i, n, null);
    if (i instanceof I && typeof i.width < 'u' && typeof n > 'u') return this.drawHelper(e, i, null);
    if (i instanceof D && typeof i.width > 'u' && n instanceof kt) return this.drawHelper(e, i.x, i.y, n);
    if (typeof i == 'number' && typeof n == 'number' && (s instanceof kt || s == null)) {
      var o = e.graphics.clientSize.width - i;
      var a = new I(i, n, o, 0);
      return this.drawHelper(e, a, s);
    } else
      return i instanceof I && typeof i.width < 'u' && typeof n == 'boolean'
        ? this.drawHelper(e, i, null)
        : this.drawHelper(e, i, n);
  };
  t.prototype.measure = function () {
    for (var e = 0, i = this.columns.width, n = 0; n < this.headers.count; n++) {
      var s = this.headers.getHeader(n);
      e += s.height;
    }
    for (var n = 0; n < this.rows.count; n++) {
      var s = this.rows.getRow(n);
      e += s.height;
    }
    return new C(i, e);
  };
  t.prototype.onBeginCellDraw = function (e) {
    if (this.raiseBeginCellDraw) {
      this.beginCellDraw(this, e);
    }
  };
  t.prototype.onEndCellDraw = function (e) {
    if (this.raiseEndCellDraw) {
      this.endCellDraw(this, e);
    }
  };
  t.prototype.layout = function (e) {
    var i = e.bounds.width;
    var n = e.bounds.height;
    var s = false;
    if (typeof e.bounds.width > 'u' || e.bounds.width === 0) {
      i = e.page.getClientSize().width - e.bounds.x;
      s = true;
    }
    if (typeof e.bounds.height > 'u' || e.bounds.height === 0) {
      n = e.page.getClientSize().height;
      s = true;
    }
    if (s) {
      e.bounds = new I(e.bounds.x, e.bounds.y, i, n);
    }
    if (this.rows.count !== 0) {
      var o = this.rows.getRow(0).cells.getCell(0).style;
      if (
        this.rows.getRow(0).cells.getCell(0).style.borders != null &&
        ((this.rows.getRow(0).cells.getCell(0).style.borders.left != null &&
          this.rows.getRow(0).cells.getCell(0).style.borders.left.width !== 1) ||
          (this.rows.getRow(0).cells.getCell(0).style.borders.top != null &&
            this.rows.getRow(0).cells.getCell(0).style.borders.top.width !== 1))
      ) {
        var a = this.rows.getRow(0).cells.getCell(0).style.borders.left.width / 2;
        var h = this.rows.getRow(0).cells.getCell(0).style.borders.top.width / 2;
        if (e.bounds.x === yt.default.right.width / 2 && e.bounds.y === yt.default.right.width / 2) {
          var l = new I(a, h, this.gridSize.width, this.gridSize.height);
          e.bounds = l;
        }
      }
    }
    this.setSpan();
    this.checkSpan();
    this.layoutFormat = e.format;
    this._gridLocation = e.bounds;
    var u = new Nn(this);
    var d = u.Layouter(e);
    return d;
  };
  t.prototype.setSpan = function () {
    for (var e = 1, i = 1, n = 0, s = 0, o = 0, a = this.headers.count, h = 0; h < a; h++) {
      var l = this.headers.getHeader(h);
      o = 0;
      for (var u = l.cells.count, d = 0; d < u; d++) {
        var c = l.cells.getCell(d);
        o = Math.max(o, c.rowSpan);
        if (!c.isCellMergeContinue && !c.isRowMergeContinue && (c.columnSpan > 1 || c.rowSpan > 1)) {
          if (c.columnSpan + d > l.cells.count)
            throw new Error('Invalid span specified at row ' + d.toString() + ' column ' + h.toString());
          if (c.rowSpan + h > this.headers.count)
            throw new Error('Invalid span specified at Header ' + d.toString() + ' column ' + h.toString());
          if (c.columnSpan > 1 && c.rowSpan > 1) {
            for (
              e = c.columnSpan, i = c.rowSpan, n = d, s = h, c.isCellMergeStart = true, c.isRowMergeStart = true;
              e > 1;

            ) {
              n++;
              l.cells.getCell(n).isCellMergeContinue = true;
              l.cells.getCell(n).isRowMergeContinue = true;
              l.cells.getCell(n).rowSpan = i;
              e--;
            }
            for (n = d, e = c.columnSpan; i > 1; ) {
              for (
                s++,
                  this.headers.getHeader(s).cells.getCell(d).isRowMergeContinue = true,
                  this.headers.getHeader(s).cells.getCell(n).isRowMergeContinue = true,
                  i--;
                e > 1;

              ) {
                n++;
                this.headers.getHeader(s).cells.getCell(n).isCellMergeContinue = true;
                this.headers.getHeader(s).cells.getCell(n).isRowMergeContinue = true;
                e--;
              }
              e = c.columnSpan;
              n = d;
            }
          } else if (c.columnSpan > 1 && c.rowSpan === 1)
            for (e = c.columnSpan, n = d, c.isCellMergeStart = true; e > 1; ) {
              n++;
              l.cells.getCell(n).isCellMergeContinue = true;
              e--;
            }
          else if (c.columnSpan === 1 && c.rowSpan > 1)
            for (i = c.rowSpan, s = h; i > 1; ) {
              s++;
              this.headers.getHeader(s).cells.getCell(d).isRowMergeContinue = true;
              i--;
            }
        }
      }
      l.maximumRowSpan = o;
    }
  };
  t.prototype.checkSpan = function () {
    var e;
    var i = 1;
    var n = 0;
    var s;
    var o = 0;
    e = i = 1;
    s = o = 0;
    if (this.hasRowSpanSpan || this.hasColumnSpan)
      for (var a = this.rows.count, h = 0; h < a; h++) {
        var l = this.rows.getRow(h);
        n = 0;
        for (var u = l.cells.count, d = 0; d < u; d++) {
          var c = l.cells.getCell(d);
          n = Math.max(n, c.rowSpan);
          if (!c.isCellMergeContinue && !c.isRowMergeContinue && (c.columnSpan > 1 || c.rowSpan > 1)) {
            if (c.columnSpan + d > l.cells.count)
              throw new Error('Invalid span specified at row  ' + d.toString() + ' column ' + h.toString());
            if (c.rowSpan + h > this.rows.count)
              throw new Error('Invalid span specified at row  ' + d.toString() + ' column ' + h.toString());
            if (c.columnSpan > 1 && c.rowSpan > 1) {
              for (
                e = c.columnSpan, i = c.rowSpan, s = d, o = h, c.isCellMergeStart = true, c.isRowMergeStart = true;
                e > 1;

              ) {
                s++;
                l.cells.getCell(s).isCellMergeContinue = true;
                l.cells.getCell(s).isRowMergeContinue = true;
                e--;
              }
              for (s = d, e = c.columnSpan; i > 1; ) {
                for (
                  o++,
                    this.rows.getRow(o).cells.getCell(d).isRowMergeContinue = true,
                    this.rows.getRow(o).cells.getCell(s).isRowMergeContinue = true,
                    i--;
                  e > 1;

                ) {
                  s++;
                  this.rows.getRow(o).cells.getCell(s).isCellMergeContinue = true;
                  this.rows.getRow(o).cells.getCell(s).isRowMergeContinue = true;
                  e--;
                }
                e = c.columnSpan;
                s = d;
              }
            } else if (c.columnSpan > 1 && c.rowSpan === 1)
              for (e = c.columnSpan, s = d, c.isCellMergeStart = true; e > 1; ) {
                s++;
                l.cells.getCell(s).isCellMergeContinue = true;
                e--;
              }
            else if (c.columnSpan === 1 && c.rowSpan > 1)
              for (i = c.rowSpan, o = h; i > 1; ) {
                o++;
                this.rows.getRow(o).cells.getCell(d).isRowMergeContinue = true;
                i--;
              }
          }
        }
        l.maximumRowSpan = n;
      }
  };
  t.prototype.measureColumnsWidth = function (e) {
    if (typeof e < 'u') {
      this.isPageWidth = false;
      for (var i = this.columns.getDefaultWidths(e.width - e.x), n = 0, s = this.columns.count; n < s; n++) {
        this.columns.getColumn(n).columnWidth = i[n];
        this.tempWidth = i[n];
      }
      if (
        this.ParentCell != null &&
        this.style.allowHorizontalOverflow == false &&
        this.ParentCell.row.grid.style.allowHorizontalOverflow == false
      ) {
        var o = 0;
        var a = 0;
        var h = this.columns.count;
        var l = 0;
        if (this.ParentCell.style.cellPadding != null || typeof this.ParentCell.style.cellPadding < 'u') {
          if (typeof this.ParentCell.style.cellPadding.left < 'u' && this.ParentCell.style.cellPadding.hasLeftPad) {
            o += this.ParentCell.style.cellPadding.left;
          }
          if (typeof this.ParentCell.style.cellPadding.right < 'u' && this.ParentCell.style.cellPadding.hasRightPad) {
            o += this.ParentCell.style.cellPadding.right;
          }
        }
        for (var n = 0; n < this.ParentCell.columnSpan; n++)
          a += this.ParentCell.row.grid.columns.getColumn(this.parentCellIndex + n).width;
        for (var u = 0; u < this.columns.count; u++)
          if (this.gridColumns.getColumn(u).width > 0 && this.gridColumns.getColumn(u).isCustomWidth) {
            a -= this.gridColumns.getColumn(u).width;
            h--;
          }
        if (
          this.ParentCell.row.grid.style.cellPadding != null ||
          typeof this.ParentCell.row.grid.style.cellPadding < 'u'
        ) {
          if (
            typeof this.ParentCell.row.grid.style.cellPadding.top < 'u' &&
            this.ParentCell.row.grid.style.cellPadding.hasTopPad
          ) {
            o += this.ParentCell.row.grid.style.cellPadding.top;
          }
          if (
            typeof this.ParentCell.row.grid.style.cellPadding.bottom < 'u' &&
            this.ParentCell.row.grid.style.cellPadding.hasBottomPad
          ) {
            o += this.ParentCell.row.grid.style.cellPadding.bottom;
          }
        }
        if (this.ParentCell.row.grid.style.cellSpacing != 0) {
          a -= this.ParentCell.row.grid.style.cellSpacing * 2;
        }
        if (a > o && ((l = (a - o) / h), (this.tempWidth = l), this.ParentCell != null))
          for (var u = 0; u < this.columns.count; u++)
            if (!this.columns.getColumn(u).isCustomWidth) {
              this.columns.getColumn(u).columnWidth = l;
            }
      }
    } else {
      for (var i = [this.columns.count], d = 0; d < this.columns.count; d++) i[d] = 0;
      var c = 0;
      if (
        (typeof this.isChildGrid > 'u' && typeof this._gridLocation < 'u') ||
        (this.isChildGrid === null && typeof this._gridLocation < 'u')
      ) {
        this.initialWidth = this._gridLocation.width;
      }
      if (this.headers.count > 0)
        for (var f = this.headers.getHeader(0).cells.count, g = this.headers.count, n = 0; n < f; n++) {
          c = 0;
          for (var u = 0; u < g; u++) {
            var y = Math.min(this.initialWidth, this.headers.getHeader(u).cells.getCell(n).width);
            c = Math.max(c, y);
          }
          i[n] = c;
        }
      c = 0;
      for (var n = 0, m = this.columns.count; n < m; n++) {
        for (var u = 0, g = this.rows.count; u < g; u++)
          if (
            (this.rows.getRow(u).cells.getCell(n).columnSpan == 1 &&
              !this.rows.getRow(u).cells.getCell(n).isCellMergeContinue) ||
            this.rows.getRow(u).cells.getCell(n).value != null
          ) {
            if (
              this.rows.getRow(u).cells.getCell(n).value != null &&
              !this.rows.getRow(u).grid.style.allowHorizontalOverflow
            ) {
              this.rows.getRow(u).grid.style.cellPadding.right +
                this.rows.getRow(u).grid.style.cellPadding.left +
                this.rows.getRow(u).cells.getCell(n).style.borders.left.width / 2;
            }
            var y = 0;
            y =
              this.initialWidth > 0
                ? Math.min(this.initialWidth, this.rows.getRow(u).cells.getCell(n).width)
                : this.rows.getRow(u).cells.getCell(n).width;
            c = Math.max(i[n], Math.max(c, y));
            c = Math.max(this.columns.getColumn(n).width, c);
          }
        if (this.rows.count != 0) {
          i[n] = c;
        }
        c = 0;
      }
      for (var n = 0, w = this.rows.count; n < w; n++)
        for (var u = 0, b = this.columns.count; u < b; u++)
          if (this.rows.getRow(n).cells.getCell(u).columnSpan > 1)
            for (var v = i[u], x = 1; x < this.rows.getRow(n).cells.getCell(u).columnSpan; x++) v += i[u + x];
      for (var n = 0, s = this.columns.count; n < s; n++)
        this.columns.getColumn(n).width <= 0
          ? (this.columns.getColumn(n).columnWidth = i[n])
          : this.columns.getColumn(n).width > 0 &&
            !this.columns.getColumn(n).isCustomWidth &&
            (this.columns.getColumn(n).columnWidth = i[n]);
      var o = 0;
      var P = 0;
      var B = this.columns.count;
      var R = 0;
      P = this.tempWidth;
      for (var u = 0; u < this.columns.count; u++)
        if (this.gridColumns.getColumn(u).width > 0 && this.gridColumns.getColumn(u).isCustomWidth) {
          P -= this.gridColumns.getColumn(u).width;
          B--;
        }
      if (P > 0 && this.ParentCell.row.grid.style.cellSpacing != 0) {
        P -= this.ParentCell.row.grid.style.cellSpacing * 2;
      }
      if (P > 0 && ((R = P / B), this.ParentCell != null))
        for (var u = 0; u < this.columns.count; u++)
          if (!this.columns.getColumn(u).isCustomWidth) {
            this.columns.getColumn(u).columnWidth = R;
          }
    }
  };
  return t;
})(On);
var $t = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Nn = (function (r) {
  $t(t, r);
  function t(e) {
    var i = r(e) || this;
    i.gridInitialWidth = 0;
    i.gridSize = new C(0, 0);
    i.parentCellIndex = 0;
    i.tempWidth = 0;
    i.childheight = 0;
    i.isChildGrid = false;
    i.hasRowSpanSpan = false;
    i.isRearranged = false;
    i.pageBounds = new I();
    i.listOfNavigatePages = [];
    i.flag = true;
    i.columnRanges = [];
    i.currentLocation = new D(0, 0);
    i.breakRow = true;
    i.slr = null;
    i.remainderText = null;
    i.isPaginate = false;
    i.isOverloadWithPosition = false;
    return i;
  }
  Object.defineProperty(t.prototype, 'Grid', {
    get: function () {
      return this.elements;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getFormat = function (e) {
    var i = e;
    return e;
  };
  t.prototype.layoutInternal = function (e) {
    var i = this.getFormat(e.format);
    this.gridLayoutFormat = this.getFormat(e.format);
    this.currentPage = e.page;
    if (this.currentPage !== null) {
      this.currentPage.getClientSize().height;
      this.currentPage.getClientSize().width;
      this.currentPageBounds = this.currentPage.getClientSize();
    } else throw Error('Can not set page as null');
    this.currentGraphics = this.currentPage.graphics;
    var n = 0;
    n = this.currentGraphics.page.section.indexOf(this.currentGraphics.page);
    this.listOfNavigatePages.push(n);
    i != null && i.break === te.FitColumnsToPage
      ? (this.currentBounds = new I(
          new D(e.bounds.x, e.bounds.y),
          new C(this.Grid.columns.width, this.currentGraphics.clientSize.height),
        ))
      : (this.currentBounds = new I(new D(e.bounds.x, e.bounds.y), this.currentGraphics.clientSize));
    if (this.Grid.rows.count !== 0)
      this.currentBounds.width =
        e.bounds.width > 0
          ? e.bounds.width
          : this.currentBounds.width - this.Grid.rows.getRow(0).cells.getCell(0).style.borders.left.width / 2;
    else if (this.Grid.headers.count !== 0) this.currentBounds.width = e.bounds.width;
    else throw Error('Please add row or header into grid');
    this.startLocation = new D(e.bounds.x, e.bounds.y);
    if (e.bounds.height > 0 && !this.Grid.isChildGrid) {
      this.currentBounds.height = e.bounds.height;
    }
    if (!this.Grid.isChildGrid) {
      this.hType = this.Grid.style.horizontalOverflowType;
    }
    this.Grid.style.allowHorizontalOverflow
      ? (this.Grid.measureColumnsWidth(), this.determineColumnDrawRanges())
      : ((this.columnRanges = []),
        typeof this.Grid.isChildGrid < 'u' && typeof this.Grid.isChildGrid
          ? this.Grid.measureColumnsWidth(this.currentBounds)
          : this.Grid.measureColumnsWidth(
              new I(
                this.currentBounds.x,
                this.currentBounds.y,
                this.currentBounds.x + this.currentBounds.width,
                this.currentBounds.height,
              ),
            ),
        this.columnRanges.push([0, this.Grid.columns.count - 1]));
    if (this.Grid.hasRowSpanSpan)
      for (var s = 0; s < this.Grid.rows.count; s++)
        if (this.Grid.rows.getRow(s).height !== -1 && !this.Grid.rows.getRow(s).isRowHeightSet) {
          this.Grid.rows.getRow(s).isRowHeightSet = true;
        }
    var o = this.layoutOnPage(e);
    return o;
  };
  t.prototype.determineColumnDrawRanges = function () {
    for (
      var e = 0, i = 0, n = 0, s = this.currentGraphics.clientSize.width - this.currentBounds.x, o = 0;
      o < this.Grid.columns.count;
      o++
    ) {
      n += this.Grid.columns.getColumn(o).width;
      if (n >= s) {
        for (var a = 0, h = e; h <= o && ((a += this.Grid.columns.getColumn(h).width), !(a > s)); h++) i = h;
        this.columnRanges.push([e, i]);
        e = i + 1;
        i = e;
        n = i <= o ? this.Grid.columns.getColumn(o).width : 0;
      }
    }
    this.columnRanges.push([e, this.Grid.columns.count - 1]);
  };
  t.prototype.layoutOnPage = function (e) {
    this.pageBounds.x = e.bounds.x;
    this.pageBounds.y = e.bounds.y;
    this.pageBounds.height = e.bounds.height;
    for (
      var i = this.getFormat(e.format), n = null, s = null, o = new We(), a = e.page, h = [], l = 0;
      l < this.columnRanges.length;
      l++
    ) {
      var u = this.columnRanges[l];
      this.cellStartIndex = this.columnRanges[l][0];
      this.cellEndIndex = this.columnRanges[l][1];
      var d = this.raiseBeforePageLayout(this.currentPage, this.currentBounds, this.currentRowIndex);
      this.currentBounds = d.currentBounds;
      this.currentRowIndex = d.currentRowIndex;
      for (var c = void 0, f = 0; f < this.Grid.headers.count; f++) {
        var g = this.Grid.headers.getHeader(f);
        var y = this.currentBounds.y;
        this.isHeader = true;
        if (a != this.currentPage)
          for (var m = this.cellStartIndex; m <= this.cellEndIndex; m++)
            if (g.cells.getCell(m).isCellMergeContinue) {
              g.cells.getCell(m).isCellMergeContinue = false;
              g.cells.getCell(m).value = '';
            }
        var w = this.drawRow(g);
        this.currentBounds.y === this.currentBounds.y
          ? ((c = true), t.repeatRowIndex === -1 && (t.repeatRowIndex = f))
          : (c = false);
        if (!w.isFinish && a !== null && i.layout !== qt.OnePage && c) {
          this.startLocation.x = this.currentBounds.x;
          this.currentPage = this.getNextPageformat(i);
          this.startLocation.y = this.currentBounds.y;
          if (
            typeof i.paginateBounds < 'u' &&
            i.paginateBounds.x === 0 &&
            i.paginateBounds.y === 0 &&
            i.paginateBounds.width === 0 &&
            i.paginateBounds.height === 0
          ) {
            this.currentBounds.x += this.startLocation.x;
          }
          this.drawRow(g);
        }
        this.isHeader = false;
      }
      var b = 0;
      this.Grid.rows.count;
      var v = void 0;
      var x = true;
      h = [];
      for (var P = 0; P < this.Grid.rows.count; P++) {
        var g = this.Grid.rows.getRow(P);
        b++;
        this.currentRowIndex = b - 1;
        var B = this.currentBounds.y;
        a = this.currentPage;
        t.repeatRowIndex = -1;
        if (x && g.grid.isChildGrid) {
          x = false;
        }
        var R = null;
        if (this.Grid.splitChildRowIndex == -1) {
          R = this.drawRow(g);
          g.isrowFinish = true;
        } else if (g.grid.ParentCell.row.grid.isGridSplit && this.Grid.splitChildRowIndex <= g.rowIndex) {
          R = this.drawRow(g);
          g.isrowFinish = true;
        } else {
          if (g.isrowFinish) continue;
          break;
        }
        for (
          h.push(R.bounds.width),
            B === this.currentBounds.y
              ? ((v = true), (t.repeatRowIndex = this.Grid.rows.rowCollection.indexOf(g)))
              : ((v = false), (t.repeatRowIndex = -1));
          !R.isFinish && a != null;

        ) {
          var L = this.getLayoutResult();
          n = this.raisePageLayouted(L);
          if (n.cancel || v) break;
          if (this.Grid.allowRowBreakAcrossPages) {
            this.currentPage = this.getNextPageformat(i);
            B = this.currentBounds.y;
            var O = new D(yt.default.right.width / 2, yt.default.top.width / 2);
            if (
              i.paginateBounds.x === 0 &&
              i.paginateBounds.y === 0 &&
              i.paginateBounds.width === 0 &&
              i.paginateBounds.height === 0 &&
              this.startLocation.x === O.x &&
              this.startLocation.y === O.y
            ) {
              this.currentBounds.x += this.startLocation.x;
              this.currentBounds.y += this.startLocation.y;
            }
            if (this.isPaginate) {
              this.startLocation.y = this.currentBounds.y;
              this.isPaginate = false;
            }
            if (
              this.Grid.isChildGrid &&
              g.grid.ParentCell != null &&
              this.Grid.ParentCell.row.grid.style.cellPadding != null &&
              g.rowBreakHeight + this.Grid.ParentCell.row.grid.style.cellPadding.top < this.currentBounds.height
            ) {
              this.currentBounds.y = this.Grid.ParentCell.row.grid.style.cellPadding.top;
            }
            if (g.grid.ParentCell != null) {
              g.grid.ParentCell.row.isRowBreaksNextPage = true;
              g.grid.ParentCell.row.rowBreakHeightValue =
                g.rowBreakHeight +
                this.Grid.ParentCell.row.grid.style.cellPadding.top +
                this.Grid.ParentCell.row.grid.style.cellPadding.bottom;
              for (var T = g.rowIndex + 1; T < g.grid.rows.count; T++)
                g.grid.ParentCell.row.rowBreakHeightValue += g.grid.rows.getRow(T).height;
            }
            if (g.grid.isChildGrid) {
              g.isrowFinish = false;
              g.grid.splitChildRowIndex = g.rowIndex;
              g.grid.ParentCell.row.grid.splitChildRowIndex = g.grid.ParentCell.row.rowIndex;
              if (g.grid.ParentCell.row.grid.isGridSplit) {
                g.grid.ParentCell.row.noOfPageCount += 1;
                g.grid.ParentCell.row.grid.isGridSplit = false;
              }
              break;
            }
            if (g.noOfPageCount < 1) {
              if (g.grid.splitChildRowIndex != -1) {
                g.grid.isGridSplit = true;
              }
              if (
                g.style.border != null &&
                ((g.style.border.left != null && g.style.border.left.width !== 1) ||
                  (g.style.border.top != null && g.style.border.top.width !== 1))
              ) {
                var M = g.style.border.left.width / 2;
                var F = g.style.border.top.width / 2;
                if (
                  this.currentBounds.x === yt.default.right.width / 2 &&
                  this.currentBounds.y === yt.default.right.width / 2
                ) {
                  var V = new I(M, F, this.currentBounds.width, this.currentBounds.height);
                  this.currentBounds = V;
                }
              }
              if (this.Grid.repeatHeader)
                for (var z = 0; z < this.Grid.headers.count; z++) {
                  var tt = this.Grid.headers.getHeader(z);
                  this.drawRow(tt);
                }
              R = this.drawRow(g);
              if (g.noOfPageCount >= 1) {
                g.rowBreakHeightValue;
                for (var J = 0; J < g.noOfPageCount; J++) {
                  var K = this.getLayoutResult();
                  n = this.raisePageLayouted(K);
                  this.currentPage = this.getNextPageformat(i);
                  B = this.currentBounds.y;
                  if (g.grid.splitChildRowIndex != -1) {
                    g.grid.isGridSplit = true;
                  }
                  this.currentBounds.y = 0.5;
                  if (this.Grid.repeatHeader)
                    for (var At = 0; At < this.Grid.headers.count; At++) {
                      var de = this.Grid.headers.getHeader(At);
                      this.drawRow(de);
                    }
                  this.drawRow(g);
                }
              }
              g.grid.splitChildRowIndex = -1;
              g.grid.isGridSplit = false;
              R.isFinish = this.checkIsFisished(g);
              for (var pe = 0; pe < g.cells.count; pe++)
                if (g.cells.getCell(pe).value instanceof ht) {
                  g.cells.getCell(pe).value.splitChildRowIndex = -1;
                }
            }
          }
        }
        if (!R.isFinish && a !== null && i.layout !== qt.OnePage && v) {
          this.startLocation.x = this.currentBounds.x;
          this.currentPage = this.getNextPageformat(i);
          if (this.raiseBeforePageLayout(this.currentPage, this.currentBounds, this.currentRowIndex).returnValue) break;
          if (
            e.format !== null &&
            !e.format.usePaginateBounds &&
            e.bounds !== null &&
            e.bounds.height > 0 &&
            !this.Grid.isChildGrid
          ) {
            this.currentBounds.height = e.bounds.height;
          }
          typeof e.format < 'u' &&
          e.format != null &&
          typeof e.format.usePaginateBounds < 'u' &&
          !e.format.usePaginateBounds &&
          !(
            e.format.paginateBounds.x === 0 &&
            e.format.paginateBounds.y === 0 &&
            e.format.paginateBounds.width === 0 &&
            e.format.paginateBounds.height === 0
          ) &&
          e.format.paginateBounds.y === 0
            ? (this.currentBounds.y = yt.default.top.width / 2)
            : ((this.currentBounds.y = i == null ? 0 : i.paginateBounds.y),
              i != null &&
                (i.paginateBounds.x !== 0 ||
                  i.paginateBounds.y !== 0 ||
                  i.paginateBounds.height !== 0 ||
                  i.paginateBounds.width !== 0) &&
                ((this.currentBounds.x = i.paginateBounds.x),
                (this.currentBounds.width = i.paginateBounds.width),
                (this.currentBounds.height = i.paginateBounds.height)));
          if (
            typeof e.format < 'u' &&
            e.format !== null &&
            typeof e.format.usePaginateBounds < 'u' &&
            !e.format.usePaginateBounds &&
            e.bounds !== null &&
            e.bounds.y > 0 &&
            !this.Grid.isChildGrid
          ) {
            this.currentBounds.y = e.bounds.y;
          }
          this.startLocation.y = this.currentBounds.y;
          if (
            i.paginateBounds.x === i.paginateBounds.y &&
            i.paginateBounds.y === i.paginateBounds.height &&
            i.paginateBounds.height === i.paginateBounds.width &&
            i.paginateBounds.width === 0
          ) {
            this.currentBounds.x += this.startLocation.x;
          }
          if (this.currentBounds.x === yt.default.left.width / 2) {
            this.currentBounds.y += this.startLocation.x;
          }
          if (this.Grid.repeatHeader)
            for (var fe = 0; fe < this.Grid.headers.count; fe++) {
              var de = this.Grid.headers.getHeader(fe);
              this.drawRow(de);
            }
          this.drawRow(g);
          if (this.currentPage !== null && !o.containsKey(this.currentPage)) {
            o.add(this.currentPage, this.columnRanges[l]);
          }
        }
        if (g.NestedGridLayoutResult != null) {
          this.currentPage = g.NestedGridLayoutResult.page;
          this.currentGraphics = this.currentPage.graphics;
          this.startLocation = new D(g.NestedGridLayoutResult.bounds.x, g.NestedGridLayoutResult.bounds.y);
          var ui = this.ReCalculateHeight(g, g.NestedGridLayoutResult.bounds.height);
          this.currentBounds.y = ui;
          if (a != this.currentPage) {
            for (
              var nt = this.currentPage.section, vt = nt.indexOf(a) + 1, Le = nt.indexOf(this.currentPage), ge = vt;
              ge < Le + 1;
              ge++
            ) {
              var re = nt.getPages()[ge].graphics;
              var Oe = new D(i.paginateBounds.x, i.paginateBounds.y);
              var me =
                ge == Le ? g.NestedGridLayoutResult.bounds.height - e.bounds.y : this.currentBounds.height - Oe.y;
              if (me <= nt.getPages()[ge].graphics.clientSize.height) {
                me += e.bounds.y;
              }
              Oe.y = i == null ? 0.5 : i.paginateBounds.y;
              for (var ot = 0; ot < g.cells.count; ot++) {
                var Tt = g.cells.getCell(ot);
                var Ae = 0;
                var ci = 0;
                var ye = void 0;
                if (Tt.value instanceof ht) {
                  if (!ye) {
                    ye = Tt;
                  }
                  for (var di = 0; di < Tt.value.columns.count; di++) ci += Tt.value.columns.getColumn(di).columnWidth;
                } else ci = Tt.width;
                if (Tt.columnSpan > 1) for (; ot < Tt.columnSpan; ot++) Ae += g.grid.columns.getColumn(ot).width;
                else Ae = Math.max(ci, g.grid.columns.getColumn(ot).width);
                var ve = void 0;
                ye && ye.style && ye.style.cellPadding
                  ? (ve = ye.style.cellPadding.bottom)
                  : (ve = this.Grid.style.cellPadding.bottom);
                if (typeof ve == 'number' && me + ve < nt.getPages()[ge].graphics.clientSize.height) {
                  me += ve;
                  this.currentBounds.y += ve;
                }
                Tt.drawCellBorders(nt.getPages()[ge].graphics, new I(Oe, new C(Ae, me)));
                var Ki = this.Grid.rows.getRow(this.Grid.rows.count - 1).width;
                if (Ae !== this.Grid.rows.getRow(this.Grid.rows.count - 1).width) {
                  Tt.drawCellBorders(
                    nt.getPages()[ge].graphics,
                    new I(Oe, new C(this.Grid.rows.getRow(this.Grid.rows.count - 1).width, me)),
                  );
                }
                Oe.x += Ae;
                ot += Tt.columnSpan - 1;
              }
            }
            a = this.currentPage;
          }
        }
      }
      var Ji = false;
      var Ue = 0;
      if (h.length > 0) {
        Ue = h[0];
      }
      for (var $i = [[1, 2]], ot = 0; ot < this.Grid.rows.count; ot++)
        if (this.cellEndIndex != -1 && this.Grid.rows.getRow(ot).cells.getCell(this.cellEndIndex).value instanceof ht) {
          var Hn = this.Grid.rows.getRow(ot).cells.getCell(this.cellEndIndex).value;
          this.rowLayoutBoundsWidth = this.Grid.rows
            .getRow(ot)
            .cells.getCell(this.cellEndIndex).value.rowLayoutBoundsWidth;
          Ji = true;
        }
      if (!Ji && h.length > 0) {
        for (var ot = 0; ot < b - 1; ot++)
          if (Ue < h[ot]) {
            Ue = h[ot];
          }
        this.rowLayoutBoundsWidth = Ue;
      } else this.rowLayoutBoundsWidth = $i[0][1];
      if (
        this.columnRanges.indexOf(this.columnRanges[l]) < this.columnRanges.length - 1 &&
        a != null &&
        i.layout != qt.OnePage
      ) {
        this.Grid.isChildGrid;
        if ($i[0][0] != 0) {
          var nt = this.currentPage.section;
          this.currentPage.section.indexOf(this.currentPage);
          this.currentGraphics = this.currentPage.graphics;
          this.currentBounds = new I(new D(0, 0), this.currentPage.getClientSize());
          this.currentGraphics.page.section.indexOf(this.currentGraphics.page);
        } else this.currentPage = this.getNextPageformat(i);
      }
      if (this.columnRanges.length - 1 !== l && this.columnRanges.length > 1 && i.layout !== qt.OnePage) {
        this.currentPage = this.getNextPageformat(i);
        if (
          i.paginateBounds.x === i.paginateBounds.y &&
          i.paginateBounds.y === i.paginateBounds.height &&
          i.paginateBounds.height === i.paginateBounds.width &&
          i.paginateBounds.width === 0
        ) {
          this.currentBounds.x += this.startLocation.x;
          this.currentBounds.y += this.startLocation.y;
        }
      }
    }
    s = this.getLayoutResult();
    if (this.Grid.style.allowHorizontalOverflow && this.Grid.style.horizontalOverflowType == hi.NextPage) {
      this.reArrangePages(o);
    }
    this.raisePageLayouted(s);
    return s;
  };
  t.prototype.checkIsFisished = function (e) {
    for (var i = true, n = 0; n < e.cells.count; n++)
      if (!e.cells.getCell(n).FinishedDrawingCell) {
        i = false;
      }
    return i;
  };
  t.prototype.getNextPageformat = function (e) {
    var i = this.currentPage.section;
    var n = null;
    var s = i.indexOf(this.currentPage);
    this.flag = false;
    s === i.count - 1 ? (n = i.add()) : (n = i.getPages()[s + 1]);
    this.currentGraphics = n.graphics;
    var o = this.currentGraphics.page.section.indexOf(this.currentGraphics.page);
    if (this.listOfNavigatePages.indexOf(o) === -1) {
      this.listOfNavigatePages.push(o);
    }
    this.currentBounds = new I(new D(0, 0), n.getClientSize());
    if (
      typeof e < 'u' &&
      e != null &&
      e.usePaginateBounds &&
      typeof e.paginateBounds < 'u' &&
      e.paginateBounds != null &&
      e.paginateBounds.x !== e.paginateBounds.y &&
      e.paginateBounds.y !== e.paginateBounds.height &&
      e.paginateBounds.height !== e.paginateBounds.width &&
      e.paginateBounds.width !== 0
    ) {
      this.currentBounds.x = e.paginateBounds.x;
      this.currentBounds.y = e.paginateBounds.y;
      this.currentBounds.height = e.paginateBounds.height;
    }
    return n;
  };
  t.prototype.CheckIfDefaultFormat = function (e) {
    var i = new Ct();
    return (
      e.alignment === i.alignment &&
      e.characterSpacing === i.characterSpacing &&
      e.clipPath === i.clipPath &&
      e.firstLineIndent === i.firstLineIndent &&
      e.horizontalScalingFactor === i.horizontalScalingFactor &&
      e.lineAlignment === i.lineAlignment &&
      e.lineLimit === i.lineLimit &&
      e.lineSpacing === i.lineSpacing &&
      e.measureTrailingSpaces === i.measureTrailingSpaces &&
      e.noClip === i.noClip &&
      e.paragraphIndent === i.paragraphIndent &&
      e.rightToLeft === i.rightToLeft &&
      e.subSuperScript === i.subSuperScript &&
      e.wordSpacing === i.wordSpacing &&
      e.wordWrap === i.wordWrap
    );
  };
  t.prototype.RaiseBeforeCellDraw = function (e, i, n, s, o, a) {
    var h = null;
    if (this.Grid.raiseBeginCellDraw) {
      h = new La(e, i, n, s, o, a);
      this.Grid.onBeginCellDraw(h);
      a = h.style;
    }
    return a;
  };
  t.prototype.raiseAfterCellDraw = function (e, i, n, s, o, a) {
    var h = null;
    if (this.Grid.raiseEndCellDraw) {
      h = new Oa(e, i, n, s, o, a);
      this.Grid.onEndCellDraw(h);
    }
  };
  t.prototype.reArrangePages = function (e) {
    var i = this.currentPage.document;
    var n = [];
    var s = e.keys();
    e.values();
    for (var o = 0; o < s.length; o++) {
      var a = s[o];
      a.section = null;
      n.push(a);
      this.currentPage.document.pages.remove(a);
    }
    for (var o = 0; o < e.size(); o++)
      for (var h = o, l = e.size() / this.columnRanges.length; h < e.size(); h += l) {
        var a = n[h];
        if (typeof n[h] < 'u' && this.currentPage.document.pages.indexOf(n[h]) === -1) {
          this.currentPage.document.pages.add(n[h]);
        }
      }
  };
  t.prototype.getLayoutResult = function () {
    if (this.Grid.isChildGrid && this.Grid.allowRowBreakAcrossPages)
      for (var e = 0; e < this.Grid.rows.count; e++) {
        var i = this.Grid.rows.getRow(e);
        if (i.rowBreakHeight > 0 && i.repeatFlag) {
          this.startLocation.y = this.currentPage.origin.y;
        }
      }
    var n;
    if (!this.isChanged) {
      n = new I(this.startLocation, new C(this.currentBounds.width, this.currentBounds.y - this.startLocation.y));
    }
    return new Ba(this.currentPage, n);
  };
  t.prototype.ReCalculateHeight = function (e, i) {
    for (var n = 0, s = this.cellStartIndex; s <= this.cellEndIndex; s++)
      if (
        !(
          e.cells.getCell(s).remainingString === null ||
          e.cells.getCell(s).remainingString === '' ||
          typeof e.cells.getCell(s).remainingString > 'u'
        )
      ) {
        n = Math.max(n, e.cells.getCell(s).measureHeight());
      }
    return Math.max(i, n);
  };
  t.prototype.raiseBeforePageLayout = function (e, i, n) {
    var s = false;
    if (this.Grid.raiseBeginPageLayout) {
      var o = new Ta(i, e, n);
      this.Grid.onBeginPageLayout(o);
      s = typeof o.cancel > 'u' ? false : o.cancel;
      i = o.bounds;
      n = o.startRowIndex;
    }
    return {
      returnValue: s,
      currentBounds: i,
      currentRowIndex: n,
    };
  };
  t.prototype.raisePageLayouted = function (e) {
    var i = new Fa(e);
    if (this.Grid.raiseEndPageLayout) {
      this.Grid.onEndPageLayout(i);
    }
    return i;
  };
  t.prototype.drawRow = function (e, i, n) {
    if (typeof i > 'u') {
      var s = new Ea();
      var o = 0;
      var a = new C(0, 0);
      var h = false;
      var l = true;
      if (e.rowSpanExists) {
        var u = 0;
        var d = this.Grid.rows.rowCollection.indexOf(e);
        if (d === -1) {
          d = this.Grid.headers.indexOf(e);
          if (d !== -1) {
            h = true;
          }
        }
        for (var c = 0; c < e.cells.count; c++) {
          var f = e.cells.getCell(c);
          u = Math.max(u, f.rowSpan);
        }
        for (var c = d; c < d + u; c++)
          o += h ? this.Grid.headers.getHeader(c).height : this.Grid.rows.getRow(c).height;
        if (
          (o > this.currentBounds.height || o + this.currentBounds.y > this.currentBounds.height) &&
          e.rowSpanExists &&
          (this.Grid.LayoutFormat.break === te.FitElement || !this.Grid.allowRowBreakAcrossPages)
        ) {
          l = false;
        }
        if ((o > this.currentBounds.height || o + this.currentBounds.y > this.currentBounds.height) && l) {
          o = 0;
          e.isPageBreakRowSpanApplied = true;
          for (var c = 0; c < e.cells.count; c++) {
            var f = e.cells.getCell(c);
            u = f.rowSpan;
            for (var g = d; g < d + u; g++) {
              o += h ? this.Grid.headers.getHeader(g).height : this.Grid.rows.getRow(g).height;
              var y = this.Grid.LayoutFormat;
              var m = this.currentPageBounds.height;
              if (
                this.Grid.LayoutFormat.usePaginateBounds &&
                this.Grid.LayoutFormat.paginateBounds &&
                this.Grid.LayoutFormat.paginateBounds.height > 0
              ) {
                var w = this.Grid.LayoutFormat.paginateBounds.y + this.Grid.LayoutFormat.paginateBounds.height;
                if (!this.Grid.isChildGrid && this.Grid.listOfNavigatePages.length === 1) {
                  w += this.Grid._gridLocation.y;
                }
                if (w < m) {
                  m = w;
                  this.currentPageBounds.height = m;
                  this.currentBounds.height = m;
                }
              }
              if (this.currentBounds.y + o > m) {
                o -= h ? this.Grid.headers.getHeader(g).height : this.Grid.rows.getRow(g).height;
                for (var b = 0; b < this.Grid.rows.getRow(d).cells.count; b++) {
                  var v = g - d;
                  if (!h && this.Grid.rows.getRow(d).cells.getCell(b).rowSpan === u && v !== 0) {
                    var x = this.Grid.rows.getRow(d).cells.getCell(b);
                    var P = this.Grid.rows.getRow(g).cells.getCell(b);
                    x.rowSpan = v === 0 ? 1 : v;
                    this.Grid.rows.getRow(d).maximumRowSpan = v === 0 ? 1 : v;
                    P.rowSpan = u - v;
                    if (this.Grid.rows.getRow(g).maximumRowSpan < u - v) {
                      this.Grid.rows.getRow(g).maximumRowSpan = u - v;
                    }
                    var B = x.value;
                    P.stringFormat = x.stringFormat;
                    P.style = x.style;
                    P.style.backgroundImage = null;
                    P.columnSpan = x.columnSpan;
                    x.value instanceof ht &&
                    this.currentBounds.y +
                      x.value.size.height +
                      this.Grid.rows.getRow(g).height +
                      x.value.style.cellPadding.top +
                      x.value.style.cellPadding.bottom >=
                      this.currentBounds.height
                      ? (P.value = x.value)
                      : x.value instanceof ht || (P.value = x.value);
                    if (g > 0) {
                      this.Grid.rows.getRow(g - 1).rowSpanExists = true;
                    }
                    P.isRowMergeContinue = false;
                    P.isRowMergeStart = true;
                  } else if (h && this.Grid.headers.getHeader(d).cells.getCell(b).rowSpan === u) {
                    var R = this.Grid.headers.getHeader(d).cells.getCell(b);
                    var L = this.Grid.headers.getHeader(g).cells.getCell(b);
                    R.rowSpan = v === 0 ? 1 : v;
                    L.rowSpan = u - v;
                    L.stringFormat = R.stringFormat;
                    L.style = R.style;
                    L.columnSpan = R.columnSpan;
                    L.value = R.value;
                    this.Grid.headers.getHeader(g - 1).rowSpanExists = false;
                    L.isRowMergeContinue = false;
                    L.isRowMergeStart = true;
                  }
                }
                break;
              }
            }
            o = 0;
          }
        }
      }
      var O = e.rowBreakHeight > 0 ? e.rowBreakHeight : e.height;
      if (
        typeof this.Grid.isChildGrid < 'u' &&
        this.Grid.isChildGrid &&
        typeof this.Grid.ParentCell < 'u' &&
        this.Grid.ParentCell != null
      )
        this.currentBounds.y + this.Grid.ParentCell.row.grid.style.cellPadding.bottom + O >
          this.currentPageBounds.height ||
        this.currentBounds.y + this.Grid.ParentCell.row.grid.style.cellPadding.bottom + O > this.currentBounds.height ||
        this.currentBounds.y + this.Grid.ParentCell.row.grid.style.cellPadding.bottom + o >
          this.currentPageBounds.height
          ? (typeof this.Grid.ParentCell.row.grid.LayoutFormat < 'u' &&
              this.Grid.ParentCell.row.grid.LayoutFormat.break === te.FitPage &&
              ((t.repeatRowIndex = this.Grid.rows.rowCollection.indexOf(e)),
              (this.Grid.splitChildRowIndex = this.Grid.rows.rowCollection.indexOf(e))),
            t.repeatRowIndex > -1 &&
              t.repeatRowIndex === e.rowIndex &&
              this.Grid.allowRowBreakAcrossPages &&
              ((s.isFinish = true),
              (s.bounds = this.currentBounds),
              this.drawRowWithBreak(s, e, O),
              (e.repeatFlag = true),
              (e.repeatRowNumber = t.repeatRowIndex)))
          : ((s.isFinish = true),
            e.grid.ParentCell.row.rowBreakHeightValue > 0
              ? (e.repeatFlag = true)
              : ((e.repeatFlag = false), (O = e.height)),
            this.Grid.isChildGrid &&
              e.rowBreakHeight > 0 &&
              this.Grid.ParentCell.row.grid.style.cellPadding != null &&
              (O += this.Grid.ParentCell.row.grid.style.cellPadding.bottom),
            this.drawRow(e, s, O));
      else if (O > this.currentPageBounds.height)
        if (this.Grid.allowRowBreakAcrossPages) {
          s.isFinish = true;
          this.drawRowWithBreak(s, e, O);
          e.isrowFinish = true;
          e.repeatFlag = true;
          if (e.grid.splitChildRowIndex !== -1) {
            s.isFinish = false;
          }
        } else if (
          this.currentBounds.y + O > this.currentPageBounds.height ||
          this.currentBounds.y + O > this.currentBounds.height + this.startLocation.y ||
          this.currentBounds.y + o > this.currentPageBounds.height
        ) {
          var T = false;
          this.Grid.allowRowBreakAcrossPages && !this.Grid.repeatHeader && !e.isRowHeightSet && !e.rowMergeComplete
            ? (this.Grid.LayoutFormat !== null && this.Grid.LayoutFormat.paginateBounds.height > 0
                ? (T = this.isFitToCell(
                    this.currentBounds.height + this.startLocation.y - this.currentBounds.y,
                    this.Grid,
                    e,
                  ))
                : (T = this.isFitToCell(this.currentPageBounds.height - this.currentBounds.y, this.Grid, e)),
              T && (this.isPaginate = true))
            : this.Grid.allowRowBreakAcrossPages &&
              this.Grid.LayoutFormat != null &&
              this.Grid.LayoutFormat.layout == qt.Paginate &&
              this.Grid.LayoutFormat.break != te.FitElement &&
              e.isRowHeightSet &&
              this.currentBounds.y + n > this.currentPageBounds.height &&
              ((T = this.isFitToCell(this.currentPageBounds.height - this.currentBounds.y, this.Grid, e)),
              T ||
                (T = !(
                  this.slr !== null &&
                  this.slr.actualSize.height == 0 &&
                  this.slr.remainder != null &&
                  this.slr.remainder.length > 0 &&
                  this.remainderText == this.slr.remainder
                )),
              T && this.slr != null && this.slr.lineCount > 1 && (T = false),
              (this.remainderText = null));
          (t.repeatRowIndex > -1 && t.repeatRowIndex === e.rowIndex) || T
            ? this.Grid.allowRowBreakAcrossPages
              ? ((s.isFinish = true),
                this.drawRowWithBreak(s, e, O),
                (e.repeatFlag = true),
                (e.repeatRowNumber = t.repeatRowIndex),
                e.grid.splitChildRowIndex !== -1 && (s.isFinish = false))
              : ((s.isFinish = false), this.drawRow(e, s, O))
            : (s.isFinish = false);
        } else {
          s.isFinish = true;
          this.drawRow(e, s, O);
          e.repeatFlag = false;
        }
      return s;
    } else {
      var M = false;
      var F = new D(this.currentBounds.x, this.currentBounds.y);
      i.bounds = new I(F, new C(0, 0));
      n = this.ReCalculateHeight(e, n);
      for (var c = this.cellStartIndex; c <= this.cellEndIndex; c++) {
        var V = c > this.cellEndIndex + 1 && e.cells.getCell(c).columnSpan > 1;
        if (!V)
          for (var b = 1; b < e.cells.getCell(c).columnSpan; b++) e.cells.getCell(c + b).isCellMergeContinue = true;
        var a = new C(this.Grid.columns.getColumn(c).width, n);
        if (
          !this.CheckIfDefaultFormat(this.Grid.columns.getColumn(c).format) &&
          this.CheckIfDefaultFormat(e.cells.getCell(c).stringFormat)
        ) {
          e.cells.getCell(c).stringFormat = this.Grid.columns.getColumn(c).format;
        }
        var z = e.cells.getCell(c).style;
        var tt =
          typeof e.cells.getCell(c).value == 'string' && e.cells.getCell(c).value !== null
            ? e.cells.getCell(c).value
            : '';
        e.cells.getCell(c).style = this.RaiseBeforeCellDraw(
          this.currentGraphics,
          this.currentRowIndex,
          c,
          new I(F, a),
          tt,
          e.cells.getCell(c).style,
        );
        if (!M) {
          if (e.cells.getCell(c).value instanceof ht) {
            var J = e.cells.getCell(c).value;
            J.parentCellIndex = c;
          }
          var K = e.cells.getCell(c).draw(this.currentGraphics, new I(F, a), V);
          if (
            e.grid.style.allowHorizontalOverflow &&
            (e.cells.getCell(c).columnSpan > this.cellEndIndex ||
              c + e.cells.getCell(c).columnSpan > this.cellEndIndex + 1) &&
            this.cellEndIndex < e.cells.count - 1
          ) {
            e.rowOverflowIndex = this.cellEndIndex;
          }
          if (
            e.grid.style.allowHorizontalOverflow &&
            e.rowOverflowIndex > 0 &&
            (e.cells.getCell(c).columnSpan > this.cellEndIndex ||
              c + e.cells.getCell(c).columnSpan > this.cellEndIndex + 1) &&
            e.cells.getCell(c).columnSpan - this.cellEndIndex + c - 1 > 0
          ) {
            e.cells.getCell(e.rowOverflowIndex + 1).value = K !== null && K.remainder !== void 0 ? K.remainder : '';
            e.cells.getCell(e.rowOverflowIndex + 1).stringFormat = e.cells.getCell(c).stringFormat;
            e.cells.getCell(e.rowOverflowIndex + 1).style = e.cells.getCell(c).style;
            e.cells.getCell(e.rowOverflowIndex + 1).columnSpan =
              e.cells.getCell(c).columnSpan - this.cellEndIndex + c - 1;
          }
        }
        tt =
          typeof e.cells.getCell(c).value == 'string' && e.cells.getCell(c).value !== null
            ? e.cells.getCell(c).value
            : '';
        if (!V) {
          this.raiseAfterCellDraw(
            this.currentGraphics,
            this.currentRowIndex,
            c,
            new I(F, a),
            tt,
            e.cells.getCell(c).style,
          );
        }
        if (e.cells.getCell(c).value instanceof ht) {
          var J = e.cells.getCell(c).value;
          this.Grid.columns.getColumn(c).width >= this.currentGraphics.clientSize.width
            ? ((F.x = e.cells.getCell(c).value.rowLayoutBoundsWidth),
              (F.x += e.cells.getCell(c).value.style.cellSpacing))
            : (F.x += this.Grid.columns.getColumn(c).width);
        } else F.x += this.Grid.columns.getColumn(c).width;
      }
      if (!e.rowMergeComplete || e.isRowHeightSet) {
        this.currentBounds.y += n;
      }
      i.bounds = new I(new D(i.bounds.x, i.bounds.y), new C(F.x, F.y));
    }
  };
  t.prototype.isFitToCell = function (e, i, n) {
    for (var s = false, o = new Kt(), a = 0; a < n.cells.count; a++) {
      var h = n.cells.getCell(a);
      if (typeof h.value < 'u' && h.value !== null && typeof h.value == 'string') {
        var l = null;
        typeof h.style.font < 'u' && h.style.font != null
          ? (l = h.style.font)
          : typeof h.row.style.font < 'u' && h.row.style.font != null
            ? (l = h.row.style.font)
            : typeof h.row.grid.style.font < 'u' && h.row.grid.style.font != null
              ? (l = h.row.grid.style.font)
              : (l = Jt.defaultFont);
        this.remainderText = h.value;
        var u = h.width;
        var d = i.columns.getColumn(a);
        if (d.isCustomWidth && h.width > d.width) {
          u = d.width;
        }
        this.slr = o.layout(h.value, l, h.stringFormat, new C(u, e), false, this.currentPageBounds);
        var c = this.slr.actualSize.height;
        if (h.value !== '' && c === 0) {
          s = false;
          break;
        }
        if (
          h.style !== null &&
          h.style.borders !== null &&
          h.style.borders.top !== null &&
          h.style.borders.bottom !== null
        ) {
          c += (h.style.borders.top.width + h.style.borders.bottom.width) * 2;
        }
        if (this.slr.lineCount > 1 && h.stringFormat != null && h.stringFormat.lineSpacing != 0) {
          c += (this.slr.lineCount - 1) * h.style.stringFormat.lineSpacing;
        }
        h.style.cellPadding;
        c += i.style.cellPadding.top + i.style.cellPadding.bottom;
        c += i.style.cellSpacing;
        if (e > c || (typeof this.slr.remainder < 'u' && this.slr.remainder !== null)) {
          s = true;
          break;
        }
      }
    }
    return s;
  };
  t.prototype.drawRowWithBreak = function (e, i, n) {
    var s = new D(this.currentBounds.x, this.currentBounds.y);
    if (i.grid.isChildGrid && i.grid.allowRowBreakAcrossPages && this.startLocation.x !== this.currentBounds.x) {
      s.x = this.startLocation.x;
    }
    e.bounds = new I(s, new C(0, 0));
    this.gridHeight = i.rowBreakHeight > 0 ? this.currentPageBounds.height : 0;
    if (
      i.grid.style.cellPadding.top + this.currentBounds.y + i.grid.style.cellPadding.bottom <
      this.currentPageBounds.height
    ) {
      i.rowBreakHeight = this.currentBounds.y + n - this.currentPageBounds.height;
    }
    for (var o = 0; o < i.cells.count; o++) {
      var a = i.cells.getCell(o);
      var h = a.measureHeight();
      if (h === n && a.value instanceof ht) {
        i.rowBreakHeight = 0;
      }
    }
    for (var o = this.cellStartIndex; o <= this.cellEndIndex; o++) {
      var l = this.Grid.columns.getColumn(o).width;
      var u = i.cells.getCell(o).columnSpan + o > this.cellEndIndex + 1 && i.cells.getCell(o).columnSpan > 1;
      if (!u)
        for (var d = 1; d < i.cells.getCell(o).columnSpan; d++) {
          i.cells.getCell(o + d).isCellMergeContinue = true;
          l += this.Grid.columns.getColumn(o + d).width;
        }
      var c = new C(l, this.gridHeight > 0 ? this.gridHeight : this.currentPageBounds.height);
      var f = i.cells.getCell(o).style;
      i.cells.getCell(o).style = i.cells.getCell(o).style;
      var g = false;
      var y = null;
      if (!g) {
        i.cells.getCell(o)._rowHeight = i.height;
        y = i.cells.getCell(o).draw(this.currentGraphics, new I(s, c), u);
      }
      if (i.rowBreakHeight > 0 && y != null && typeof y.remainder < 'u') {
        i.cells.getCell(o).FinishedDrawingCell = false;
        i.cells.getCell(o).remainingString = y.remainder == null ? ' ' : y.remainder;
        i.rowBreakHeight = n - y.actualSize.height;
      }
      e.isFinish = e.isFinish ? i.cells.getCell(o).FinishedDrawingCell : e.isFinish;
      if (i.cells.getCell(o).value instanceof ht) {
        var m = i.cells.getCell(o).value;
        this.rowBreakPageHeightCellIndex = o;
        this.Grid.columns.getColumn(o).width >= this.currentGraphics.clientSize.width
          ? ((s.x = this.rowLayoutBoundsWidth), (s.x += i.cells.getCell(o).value.style.cellSpacing))
          : (s.x += this.Grid.columns.getColumn(o).width);
      } else s.x += this.Grid.columns.getColumn(o).width;
    }
    this.currentBounds.y += this.gridHeight > 0 ? this.gridHeight : n;
    e.bounds = new I(new D(e.bounds.x, e.bounds.y), new C(s.x, s.y));
  };
  t.repeatRowIndex = -1;
  return t;
})(Bn);
var Ba = (function (r) {
  $t(t, r);
  function t(e, i) {
    return r(e, i) || this;
  }
  return t;
})(Ln);
var zn = (function (r) {
  $t(t, r);
  function t(e) {
    return r(e) || this;
  }
  return t;
})(kt);
var jn = (function () {
  function r(t, e, i, n, s) {
    this.gridRowIndex = e;
    this.gridCellIndex = i;
    this.internalValue = s;
    this.gridBounds = n;
    this.pdfGraphics = t;
  }
  Object.defineProperty(r.prototype, 'rowIndex', {
    get: function () {
      return this.gridRowIndex;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'cellIndex', {
    get: function () {
      return this.gridCellIndex;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'value', {
    get: function () {
      return this.internalValue;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bounds', {
    get: function () {
      return this.gridBounds;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'graphics', {
    get: function () {
      return this.pdfGraphics;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var La = (function (r) {
  $t(t, r);
  function t(e, i, n, s, o, a) {
    var h = r(e, i, n, s, o) || this;
    h.style = a;
    return h;
  }
  Object.defineProperty(t.prototype, 'skip', {
    get: function () {
      return this.bSkip;
    },
    set: function (e) {
      this.bSkip = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'style', {
    get: function () {
      return this.cellStyle;
    },
    set: function (e) {
      this.cellStyle = e;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(jn);
var Oa = (function (r) {
  $t(t, r);
  function t(e, i, n, s, o, a) {
    var h = r(e, i, n, s, o) || this;
    h.cellStyle = a;
    return h;
  }
  Object.defineProperty(t.prototype, 'style', {
    get: function () {
      return this.cellStyle;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(jn);
var Gn = (function () {
  function r() {}
  Object.defineProperty(r.prototype, 'cancel', {
    get: function () {
      return this.isCancel;
    },
    set: function (t) {
      this.isCancel = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Aa = (function (r) {
  $t(t, r);
  function t(e, i) {
    var n = r() || this;
    n.bounds = e;
    n.pdfPage = i;
    return n;
  }
  Object.defineProperty(t.prototype, 'bounds', {
    get: function () {
      return this.cellBounds;
    },
    set: function (e) {
      this.cellBounds = e;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'page', {
    get: function () {
      return this.pdfPage;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Gn);
var Da = (function (r) {
  $t(t, r);
  function t(e) {
    var i = r() || this;
    i.layoutResult = e;
    return i;
  }
  Object.defineProperty(t.prototype, 'result', {
    get: function () {
      return this.layoutResult;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(t.prototype, 'nextPage', {
    get: function () {
      return this.nextPdfPage;
    },
    set: function (e) {
      this.nextPdfPage = e;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Gn);
var Ta = (function (r) {
  $t(t, r);
  function t(e, i, n) {
    var s = r(e, i) || this;
    s.startRow = n;
    return s;
  }
  Object.defineProperty(t.prototype, 'startRowIndex', {
    get: function () {
      return this.startRow;
    },
    enumerable: true,
    configurable: true,
  });
  return t;
})(Aa);
var Fa = (function (r) {
  $t(t, r);
  function t(e) {
    return r(e) || this;
  }
  return t;
})(Da);
var Ea = (function () {
  function r() {
    this.layoutedBounds = new I(0, 0, 0, 0);
  }
  Object.defineProperty(r.prototype, 'isFinish', {
    get: function () {
      return this.bIsFinished;
    },
    set: function (t) {
      this.bIsFinished = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bounds', {
    get: function () {
      return this.layoutedBounds;
    },
    set: function (t) {
      this.layoutedBounds = t;
    },
    enumerable: true,
    configurable: true,
  });
  return r;
})();
var Ma = (function () {
  var r = function (t, e) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (i, n) {
          i.__proto__ = n;
        }) ||
      function (i, n) {
        for (var s in n)
          if (n.hasOwnProperty(s)) {
            i[s] = n[s];
          }
      };
    return r(t, e);
  };
  return function (t, e) {
    r(t, e);
    function i() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
  };
})();
var Bi = (function (r) {
  Ma(t, r);
  function t(e, i, n) {
    var s = r(i) || this;
    s.isEmbedFont = false;
    s.isUnicode = true;
    n !== void 0 ? s.createFontInternal(e, n) : s.createFontInternal(e, N.Regular);
    return s;
  }
  t.prototype.equalsToFont = function (e) {
    var i = false;
    return i;
  };
  t.prototype.getLineWidth = function (e, i) {
    var n = 0;
    if (i !== null && typeof i < 'u' && i.textDirection !== Lt.None) {
      var s = this.getUnicodeLineWidth(e, n, i);
      n = s.width;
    } else n = this.fontInternal.getLineWidth(e);
    var o = this.metrics.getSize(i);
    n *= 0.001 * o;
    n = this.applyFormatSettings(e, i, n);
    return n;
  };
  t.prototype.getCharWidth = function (e, i) {
    var n = this.fontInternal.getCharWidth(e);
    var s = this.metrics.getSize(i);
    n *= 0.001 * s;
    return n;
  };
  t.prototype.createFontInternal = function (e, i) {
    this.fontInternal = new Gi(e, this.size);
    this.calculateStyle(i);
    this.initializeInternals();
  };
  t.prototype.calculateStyle = function (e) {
    var i = this.fontInternal.ttfMetrics.macStyle;
    if ((e & N.Underline) !== 0) {
      i |= N.Underline;
    }
    if ((e & N.Strikeout) !== 0) {
      i |= N.Strikeout;
    }
    this.setStyle(i);
  };
  t.prototype.initializeInternals = function () {
    var e = null;
    if (Jt.enableCache) {
      e = Jt.cache.search(this);
    }
    var i = null;
    if (e != null) {
      i = e.getInternals();
      var n = e.metrics;
      n = n.clone();
      n.size = this.size;
      this.metrics = n;
      this.fontInternal = e.fontInternal;
    } else if (e == null) {
      if (this.fontInternal instanceof Gi) {
        this.fontInternal.isEmbed = this.isEmbedFont;
      }
      this.fontInternal.createInternals();
      i = this.fontInternal.getInternals();
      this.metrics = this.fontInternal.metrics;
    }
    this.metrics.isUnicodeFont = true;
    this.setInternals(i);
  };
  t.prototype.setSymbols = function (e) {
    var i = this.fontInternal;
    this.fontInternal?.setSymbols(e);
  };
  Object.defineProperty(t.prototype, 'Unicode', {
    get: function () {
      return this.isUnicode;
    },
    enumerable: true,
    configurable: true,
  });
  t.prototype.getUnicodeLineWidth = function (e, i, n) {
    i = 0;
    var s = null;
    var o = new Cn();
    var a = o.getGlyphIndex(e, this, n.textDirection === Lt.RightToLeft, s, true);
    var h = a.success;
    s = a.glyphs;
    if (a.success && s !== null)
      for (var l = this.fontInternal.ttfReader, u = 0, d = s.length; u < d; u++) {
        var c = s[u];
        var f = l.getGlyph(s[u]);
        if (f !== null && typeof f < 'u') {
          i += f.width;
        }
      }
    return {
      success: a.success,
      width: i,
    };
  };
  return t;
})(It);
var Li = (function () {
  function r(t, e, i, n, s) {
    t instanceof I && typeof e > 'u'
      ? this.InitiateBounds(t.x, t.y, t.width, t.height, null)
      : t instanceof I && e instanceof Nt && typeof i > 'u'
        ? this.InitiateBounds(t.x, t.y, t.width, t.height, e)
        : t instanceof D && e instanceof C && typeof i > 'u'
          ? this.InitiateBounds(t.x, t.y, e.width, e.height, null)
          : t instanceof D && e instanceof C && i instanceof Nt && typeof n > 'u'
            ? this.InitiateBounds(t.x, t.y, e.width, e.height, i)
            : t instanceof C && typeof e > 'u'
              ? this.InitiateBounds(0, 0, t.width, t.height, null)
              : typeof t == 'number' && typeof e == 'number' && typeof i > 'u'
                ? this.InitiateBounds(0, 0, t, e, null)
                : typeof t == 'number' && typeof e == 'number' && i instanceof Nt && typeof n > 'u'
                  ? this.InitiateBounds(0, 0, t, e, i)
                  : typeof t == 'number' &&
                      typeof e == 'number' &&
                      typeof i == 'number' &&
                      typeof n == 'number' &&
                      typeof s > 'u'
                    ? this.InitiateBounds(t, e, i, n, null)
                    : this.InitiateBounds(t, e, i, n, null);
  }
  Object.defineProperty(r.prototype, 'dock', {
    get: function () {
      return this.dockStyle;
    },
    set: function (t) {
      this.dockStyle = t;
      this.resetAlignment();
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'alignment', {
    get: function () {
      return this.alignmentStyle;
    },
    set: function (t) {
      this.setAlignment(t);
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'foreground', {
    get: function () {
      return this.isForeground;
    },
    set: function (t) {
      this.isForeground = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'background', {
    get: function () {
      return !this.isForeground;
    },
    set: function (t) {
      this.isForeground = !t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'location', {
    get: function () {
      return this.currentLocation;
    },
    set: function (t) {
      if (this.type === W.None) {
        this.currentLocation = t;
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'x', {
    get: function () {
      var t = typeof this.currentLocation < 'u' ? this.currentLocation.x : 0;
      return t;
    },
    set: function (t) {
      if (this.type === W.None) {
        this.currentLocation.x = t;
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'y', {
    get: function () {
      var t = typeof this.currentLocation < 'u' ? this.currentLocation.y : 0;
      return t;
    },
    set: function (t) {
      if (this.type === W.None) {
        this.currentLocation.y = t;
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'size', {
    get: function () {
      return this.template.size;
    },
    set: function (t) {
      if (this.type === W.None) {
        this.template.reset(t);
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'width', {
    get: function () {
      return this.template.width;
    },
    set: function (t) {
      if (this.template.width !== t && this.type === W.None) {
        var e = this.template.size;
        e.width = t;
        this.template.reset(e);
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'height', {
    get: function () {
      return this.template.height;
    },
    set: function (t) {
      if (this.template.height !== t && this.type === W.None) {
        var e = this.template.size;
        e.height = t;
        this.template.reset(e);
      }
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'graphics', {
    get: function () {
      return this.template.graphics;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'template', {
    get: function () {
      return this.pdfTemplate;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'type', {
    get: function () {
      return this.templateType;
    },
    set: function (t) {
      this.updateDocking(t);
      this.templateType = t;
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(r.prototype, 'bounds', {
    get: function () {
      return new I(new D(this.x, this.y), this.size);
    },
    set: function (t) {
      if (this.type === W.None) {
        this.location = new D(t.x, t.y);
        this.size = new C(t.width, t.height);
      }
    },
    enumerable: true,
    configurable: true,
  });
  r.prototype.InitiateBounds = function (t, e, i, n, s) {
    this.x = t;
    this.y = e;
    this.pdfTemplate = new Ge(i, n);
  };
  r.prototype.updateDocking = function (t) {
    if (t !== W.None) {
      switch (t) {
        case W.Top:
          this.dock = et.Top;
          break;
        case W.Bottom:
          this.dock = et.Bottom;
          break;
        case W.Left:
          this.dock = et.Left;
          break;
        case W.Right:
          this.dock = et.Right;
          break;
      }
      this.resetAlignment();
    }
  };
  r.prototype.resetAlignment = function () {
    this.alignment = G.None;
  };
  r.prototype.setAlignment = function (t) {
    if (this.dock === et.None) this.alignmentStyle = t;
    else {
      var e = false;
      switch (this.dock) {
        case et.Left:
          e = t === G.TopLeft || t === G.MiddleLeft || t === G.BottomLeft || t === G.None;
          break;
        case et.Top:
          e = t === G.TopLeft || t === G.TopCenter || t === G.TopRight || t === G.None;
          break;
        case et.Right:
          e = t === G.TopRight || t === G.MiddleRight || t === G.BottomRight || t === G.None;
          break;
        case et.Bottom:
          e = t === G.BottomLeft || t === G.BottomCenter || t === G.BottomRight || t === G.None;
          break;
        case et.Fill:
          e = t === G.MiddleCenter || t === G.None;
          break;
      }
      if (e) {
        this.alignmentStyle = t;
      }
    }
  };
  r.prototype.draw = function (t, e) {
    var i = t.page;
    var n = this.calculateBounds(t.page, e);
    t.graphics.drawPdfTemplate(this.template, new D(n.x, n.y), new C(n.width, n.height));
  };
  r.prototype.calculateBounds = function (t, e) {
    var i = this.bounds;
    this.alignmentStyle !== G.None
      ? (i = this.getAlignmentBounds(t, e))
      : this.dockStyle !== et.None && (i = this.getDockBounds(t, e));
    return i;
  };
  r.prototype.getAlignmentBounds = function (t, e) {
    var i = this.bounds;
    this.type === W.None ? (i = this.getSimpleAlignmentBounds(t, e)) : (i = this.getTemplateAlignmentBounds(t, e));
    return i;
  };
  r.prototype.getSimpleAlignmentBounds = function (t, e) {
    var i = this.bounds;
    var n = t.section;
    var s = t.section.getActualBounds(e, t, false);
    var o = this.x;
    var a = this.y;
    switch (this.alignmentStyle) {
      case G.TopLeft:
        {
          o = 0;
          a = 0;
        }
        break;
      case G.TopCenter:
        {
          o = (s.width - this.width) / 2;
          a = 0;
        }
        break;
      case G.TopRight:
        {
          o = s.width - this.width;
          a = 0;
        }
        break;
      case G.MiddleLeft:
        {
          o = 0;
          a = (s.height - this.height) / 2;
        }
        break;
      case G.MiddleCenter:
        {
          o = (s.width - this.width) / 2;
          a = (s.height - this.height) / 2;
        }
        break;
      case G.MiddleRight:
        {
          o = s.width - this.width;
          a = (s.height - this.height) / 2;
        }
        break;
      case G.BottomLeft:
        {
          o = 0;
          a = s.height - this.height;
        }
        break;
      case G.BottomCenter:
        {
          o = (s.width - this.width) / 2;
          a = s.height - this.height;
        }
        break;
      case G.BottomRight:
        {
          o = s.width - this.width;
          a = s.height - this.height;
        }
        break;
    }
    i.x = o;
    i.y = a;
    return i;
  };
  r.prototype.getTemplateAlignmentBounds = function (t, e) {
    var i = this.bounds;
    var n = t.section;
    var s = t.section.getActualBounds(e, t, false);
    var o = this.x;
    var a = this.y;
    switch (this.alignmentStyle) {
      case G.TopLeft:
        this.type === W.Left
          ? ((o = this.convertSign(s.x)), (a = 0))
          : this.type === W.Top && ((o = this.convertSign(s.x)), (a = this.convertSign(s.y)));
        break;
      case G.TopCenter:
        {
          o = (s.width - this.width) / 2;
          a = this.convertSign(s.y);
        }
        break;
      case G.TopRight:
        this.type === W.Right
          ? ((o = s.width + t.section.getRightIndentWidth(e, t, false) - this.width), (a = 0))
          : this.type === W.Top &&
            ((o = s.width + t.section.getRightIndentWidth(e, t, false) - this.width), (a = this.convertSign(s.y)));
        break;
      case G.MiddleLeft:
        {
          o = this.convertSign(s.x);
          a = (s.height - this.height) / 2;
        }
        break;
      case G.MiddleCenter:
        {
          o = (s.width - this.width) / 2;
          a = (s.height - this.height) / 2;
        }
        break;
      case G.MiddleRight:
        {
          o = s.width + t.section.getRightIndentWidth(e, t, false) - this.width;
          a = (s.height - this.height) / 2;
        }
        break;
      case G.BottomLeft:
        this.type === W.Left
          ? ((o = this.convertSign(s.x)), (a = s.height - this.height))
          : this.type === W.Bottom &&
            ((o = this.convertSign(s.x)), (a = s.height + t.section.getBottomIndentHeight(e, t, false) - this.height));
        break;
      case G.BottomCenter:
        {
          o = (s.width - this.width) / 2;
          a = s.height + t.section.getBottomIndentHeight(e, t, false) - this.height;
        }
        break;
      case G.BottomRight:
        this.type === W.Right
          ? ((o = s.width + t.section.getRightIndentWidth(e, t, false) - this.width), (a = s.height - this.height))
          : this.type === W.Bottom &&
            ((o = s.width + t.section.getRightIndentWidth(e, t, false) - this.width),
            (a = s.height + t.section.getBottomIndentHeight(e, t, false) - this.height));
        break;
    }
    i.x = o;
    i.y = a;
    return i;
  };
  r.prototype.getDockBounds = function (t, e) {
    var i = this.bounds;
    this.type === W.None ? (i = this.getSimpleDockBounds(t, e)) : (i = this.getTemplateDockBounds(t, e));
    return i;
  };
  r.prototype.getSimpleDockBounds = function (t, e) {
    var i = this.bounds;
    var n = t.section;
    var s = t.section.getActualBounds(e, t, false);
    var o = this.x;
    var a = this.y;
    var h = this.width;
    var l = this.height;
    switch (this.dockStyle) {
      case et.Left:
        {
          o = 0;
          a = 0;
          h = this.width;
          l = s.height;
        }
        break;
      case et.Top:
        {
          o = 0;
          a = 0;
          h = s.width;
          l = this.height;
        }
        break;
      case et.Right:
        {
          o = s.width - this.width;
          a = 0;
          h = this.width;
          l = s.height;
        }
        break;
      case et.Bottom:
        {
          o = 0;
          a = s.height - this.height;
          h = s.width;
          l = this.height;
        }
        break;
      case et.Fill:
        {
          o = 0;
          o = 0;
          h = s.width;
          l = s.height;
        }
        break;
    }
    i = new I(o, a, h, l);
    return i;
  };
  r.prototype.getTemplateDockBounds = function (t, e) {
    var i = this.bounds;
    var n = t.section;
    var s = t.section.getActualBounds(e, t, false);
    var o = t.section.pageSettings.getActualSize();
    var a = this.x;
    var h = this.y;
    var l = this.width;
    var u = this.height;
    switch (this.dockStyle) {
      case et.Left:
        {
          a = this.convertSign(s.x);
          h = 0;
          l = this.width;
          u = s.height;
        }
        break;
      case et.Top:
        {
          a = this.convertSign(s.x);
          h = this.convertSign(s.y);
          l = o.width;
          u = this.height;
          if (s.height < 0) {
            h = o.height - s.y;
          }
        }
        break;
      case et.Right:
        {
          a = s.width + t.section.getRightIndentWidth(e, t, false) - this.width;
          h = 0;
          l = this.width;
          u = s.height;
        }
        break;
      case et.Bottom:
        {
          a = this.convertSign(s.x);
          h = s.height + t.section.getBottomIndentHeight(e, t, false) - this.height;
          l = o.width;
          u = this.height;
          if (s.height < 0) {
            h -= o.height;
          }
        }
        break;
      case et.Fill:
        {
          a = 0;
          a = 0;
          l = s.width;
          u = s.height;
        }
        break;
    }
    i = new I(a, h, l, u);
    return i;
  };
  r.prototype.convertSign = function (t) {
    return t !== 0 || (t === 0 && 1 / t === -Infinity) ? -t : t;
  };
  return r;
})();
var gn = (function () {
  function r(t) {
    this.hideColumnInclude = false;
    this.currentViewData = false;
    this.customDataSource = false;
    this.isGrouping = false;
    this.headerOnPages = [];
    this.drawPosition = {
      xPosition: 0,
      yPosition: 0,
    };
    this.parent = t;
    this.helper = new Ke(t);
    this.gridPool = {};
  }
  r.prototype.getModuleName = function () {
    return 'PdfExport';
  };
  r.prototype.init = function (t) {
    this.exportValueFormatter = new Vs(t.locale);
    this.pdfDocument = void 0;
    this.hideColumnInclude = false;
    this.currentViewData = false;
    this.parent = t;
    this.isGrouping = false;
    this.isExporting = true;
    t.id = Wi('main-grid');
    this.gridPool[t.id] = false;
    this.pdfPageSettings = new wn();
  };
  r.prototype.exportWithData = function (t, e, i, n, s, o, a) {
    var h = this;
    this.init(t);
    p(e) ? (this.pdfDocument = new Jt()) : (this.pdfDocument = e);
    this.processExport(t, n, s, o)
      .then(function () {
        h.isExporting = false;
        t.trigger(wr, h.isBlob ? { promise: h.blobPromise } : { gridInstance: h.parent });
        h.parent.log('exporting_complete', h.getModuleName());
        i(h.pdfDocument);
      })
      .catch(function (l) {
        a(h.pdfDocument);
        h.parent.trigger(br, l);
      });
  };
  r.prototype.Map = function (t, e, i, n, s) {
    var o = this;
    this.data = new os(this.parent);
    this.isBlob = s;
    this.gridPool = {};
    var a = e && e.query ? e.query : new as();
    if ((t.childGrid || t.detailTemplate) && !(!p(e) && e.hierarchyExportMode === 'None')) {
      t.expandedRows = hs(t).expandedRows;
    }
    var h = {
      requestType: 'beforePdfExport',
      cancel: false,
      headerPageNumbers: [],
      gridDrawPosition: {
        xPosition: 0,
        yPosition: 0,
      },
      generateQuery: false,
    };
    var l = 'gridObject';
    h.gridObject = t;
    var u = 'cancel';
    var d = 'generateQuery';
    var c = 'headerPageNumbers';
    var f = 'gridDrawPosition';
    t.trigger(ls, h);
    if (h.cancel === true)
      return new Promise(function (m, w) {
        return m();
      });
    if (Sr(e)) {
      us(e, t);
    }
    if (h.generateQuery) {
      a = Ke.getQuery(t, this.data);
    }
    this.headerOnPages = h.headerPageNumbers;
    this.drawPosition = h.gridDrawPosition;
    this.parent.log('exporting_begin', this.getModuleName());
    if (!p(e) && !p(e.dataSource)) {
      e.dataSource = e.dataSource instanceof ut ? e.dataSource : new ut(e.dataSource);
      if (p(a.isCountRequired) || t.aggregates) {
        a.isCountRequired = true;
      }
      return new Promise(function (m, w) {
        e.dataSource.executeQuery(a).then(function (b) {
          o.exportWithData(t, n, m, b, e, i, w);
        });
      });
    }
    if (
      !p(e) &&
      e.exportType === 'CurrentPage' &&
      !(
        this.parent.groupSettings.enableLazyLoading &&
        this.parent.groupSettings.columns.length &&
        !this.parent.getDataModule().isRemote()
      )
    )
      return new Promise(function (m, w) {
        o.exportWithData(t, n, m, o.parent.getCurrentViewRecords(), e, i, w);
      });
    var g = [];
    var y = Ke.getQuery(t, this.data);
    if (
      this.parent.groupSettings.enableLazyLoading &&
      this.parent.groupSettings.columns.length &&
      !this.parent.getDataModule().isRemote()
    ) {
      if (p(e)) {
        e = { hierarchyExportMode: 'All' };
      }
      e.hierarchyExportMode = e.hierarchyExportMode === 'None' ? 'None' : 'All';
      if (e.hierarchyExportMode === 'All') {
        y.lazyLoad = [];
      }
    }
    g.push(this.data.getData({}, y));
    g.push(this.helper.getColumnData(t));
    return new Promise(function (m, w) {
      Promise.all(g).then(function (b) {
        o.init(t);
        p(n) ? (o.pdfDocument = new Jt()) : (o.pdfDocument = n.document);
        o.processExport(t, b[0], e, i, n)
          .then(function (v) {
            o.isExporting = false;
            t.trigger(wr, o.isBlob ? { promise: o.blobPromise } : { gridInstance: o.parent });
            o.parent.log('exporting_complete', o.getModuleName());
            e && e.multipleExport && e.multipleExport.type === 'AppendToPage' ? m(v) : m(o.pdfDocument);
          })
          .catch(function (v) {
            w(o.pdfDocument);
            o.parent.trigger(br, v);
          });
      });
    });
  };
  r.prototype.processExport = function (t, e, i, n, s) {
    var o = this;
    var a =
      s && i && i.multipleExport && i.multipleExport.type === 'AppendToPage' ? null : this.pdfDocument.sections.add();
    var h;
    this.processSectionExportProperties(a, i);
    var l = s && i && i.multipleExport && i.multipleExport.type === 'AppendToPage' ? s.result.page : a.pages.add();
    return new Promise(function (u, d) {
      h = o.processGridExport(t, e, i);
      o.globalResolve = u;
      o.gridPool[t.id] = true;
      o.helper.checkAndExport(o.gridPool, o.globalResolve);
    }).then(function () {
      var u = o.drawPosition.xPosition;
      var d;
      s && i && i.multipleExport && i.multipleExport.type === 'AppendToPage'
        ? ((d = s.result.bounds.y + s.result.bounds.height),
          i.multipleExport.blankSpace && (d = s.result.bounds.y + s.result.bounds.height + i.multipleExport.blankSpace))
        : (d = o.drawPosition.yPosition);
      var c;
      if (n) {
        var f = new zn();
        f.layout = qt.Paginate;
        f.break = te.FitPage;
        f.paginateBounds = new I(0, 0, l.getClientSize().width, l.getClientSize().height);
        c = h.draw(l, o.drawPosition.xPosition, d, f);
      } else c = h.draw(l, o.drawPosition.xPosition, d);
      o.drawHeader(i);
      if (!n) {
        o.isBlob
          ? (o.blobPromise = o.pdfDocument.save())
          : !p(i) && i.fileName
            ? o.pdfDocument.save(i.fileName)
            : o.pdfDocument.save('Export.pdf');
        o.pdfDocument.destroy();
        delete t.expandedRows;
      }
      return i && i.multipleExport && i.multipleExport.type === 'AppendToPage'
        ? {
            document: o.pdfDocument,
            result: c,
          }
        : o.pdfDocument;
    });
  };
  r.prototype.processSectionExportProperties = function (t, e) {
    if (!p(t) && !p(e) && (!p(e.pageOrientation) || !p(e.pageSize))) {
      this.pdfPageSettings.orientation = e.pageOrientation === 'Landscape' ? Zt.Landscape : Zt.Portrait;
      this.pdfPageSettings.size = this.getPageSize(e.pageSize);
      t.setPageSettings(this.pdfPageSettings);
    }
    return t;
  };
  r.prototype.processGridExport = function (t, e, i) {
    var n = true;
    if (!p(i)) {
      this.gridTheme = i.theme;
      n = p(i.allowHorizontalOverflow) ? true : i.allowHorizontalOverflow;
    }
    var s = new Ke(t, this.helper.getForeignKeyData());
    var o = this.processExportProperties(i, e.result);
    var a = Sr(i) ? cs(i.columns, t.enableColumnVirtualization) : s.getGridExportColumns(t.columns);
    a = a.filter(function (P) {
      return p(P.commands);
    });
    var h = false;
    if (t.groupSettings.columns.length) {
      h = true;
    }
    if ((t.childGrid || t.detailTemplate) && !p(i)) {
      t.hierarchyPrintMode = i.hierarchyExportMode || 'Expanded';
    }
    var l = new ht();
    var u = this.getHeaderThemeStyle();
    var d = u.border;
    var c = u.font;
    var f = u.brush;
    var g = s.getHeaders(a, this.hideColumnInclude);
    var y = g.columns;
    l = this.processGridHeaders(t.groupSettings.columns.length, l, g.rows, g.columns, d, u.font, u.brush, t, n, a);
    this.setColumnProperties(g.columns, l, s, t, n);
    var m = this.getSummaryCaptionThemeStyle();
    if (!p(o) && o.length) {
      h
        ? (p(m.border) || (d = m.border),
          this.processGroupedRecords(l, o, g.columns, t, d, 0, m.font, m.brush, m.backgroundBrush, e, i, s, 0))
        : this.processRecord(d, g.columns, t, o, l, 0, i, s, 0);
      if (!p(e.aggregates)) {
        var w = new ds(t);
        var b = void 0;
        var v = w.getColumns();
        v = v.filter(function (P) {
          return p(P.commands) && P.type !== 'checkbox';
        });
        if (t.aggregates.length && this.parent !== t) {
          t.aggregateModule.prepareSummaryInfo();
        }
        this.customDataSource
          ? (b = w.generateRows(o, e.aggregates, null, null, v))
          : this.currentViewData
            ? (b = w.generateRows(this.parent.getCurrentViewRecords(), e.aggregates))
            : h
              ? (b = w.generateRows(o.records, e.aggregates))
              : (b = w.generateRows(e.result, e.aggregates, null, null, v));
        this.processAggregates(b, l, d, m.font, m.brush, m.backgroundBrush, false, null, null, null, !h);
      }
    } else {
      var x = l.rows.addRow();
      x.style.setBorder(d);
    }
    return l;
  };
  r.prototype.getSummaryCaptionThemeStyle = function () {
    if (!p(this.gridTheme) && !p(this.gridTheme.caption)) {
      var t = p(this.gridTheme.caption.fontSize) ? 9.75 : this.gridTheme.caption.fontSize;
      var e = p(this.gridTheme.caption.fontName) ? Y.Helvetica : this.getFontFamily(this.gridTheme.caption.fontName);
      var i = this.getFontStyle(this.gridTheme.caption);
      var n = new j(0, 0, 0);
      if (!p(this.gridTheme.caption.fontColor)) {
        var s = this.hexToRgb(this.gridTheme.caption.fontColor);
        n = new j(s.r, s.g, s.b);
      }
      var o = this.gridTheme.caption.border ? this.getBorderStyle(this.gridTheme.caption.border) : null;
      var a = new St(e, t, i);
      if (!p(this.gridTheme.caption.font)) {
        a = this.gridTheme.caption.font;
      }
      return {
        font: a,
        brush: new st(n),
        backgroundBrush: new st(new j(246, 246, 246)),
        border: o,
      };
    } else
      return {
        font: new St(Y.Helvetica, 9.75),
        brush: new st(new j(0, 0, 0)),
        backgroundBrush: new st(new j(246, 246, 246)),
      };
  };
  r.prototype.getGridPdfFont = function (t) {
    var e = 'fontFamily';
    var i = 'fontSize';
    var n = 'fontStyle';
    var s = 'isTrueType';
    var o = 0;
    if (t.header && t.header.font) {
      var a = t.header.font.fontFamily;
      var h = t.header.font.fontSize;
      var l = t.header.font.fontStyle;
      o = p(N['' + t.header.font.fontStyle]) ? 0 : N['' + t.header.font.fontStyle];
      if (t.header.font.isTrueType) t.header.font = new Bi(t.header.font.fontFamily, t.header.font.fontSize, o);
      else {
        var u = p(t.header.font.fontFamily) ? Y.Helvetica : this.getFontFamily(t.header.font.fontFamily);
        t.header.font = new St(u, t.header.font.fontSize, o);
      }
    }
    if (t.caption && t.caption.font) {
      var d = t.caption.font.fontFamily;
      var c = t.caption.font.fontSize;
      var f = t.caption.font.fontStyle;
      o = p(N['' + t.caption.font.fontStyle]) ? 0 : N['' + t.caption.font.fontStyle];
      if (t.caption.font.isTrueType) t.caption.font = new Bi(t.caption.font.fontFamily, t.caption.font.fontSize, o);
      else {
        var g = p(t.caption.font.fontFamily) ? Y.Helvetica : this.getFontFamily(t.caption.font.fontFamily);
        t.caption.font = new St(g, t.caption.font.fontSize, o);
      }
    }
    if (t.record && t.record.font) {
      var y = t.record.font.fontFamily;
      var m = t.record.font.fontSize;
      var w = t.record.font.fontStyle;
      o = p(N['' + t.record.font.fontStyle]) ? 0 : N['' + t.record.font.fontStyle];
      if (t.record.font.isTrueType) t.record.font = new Bi(t.record.font.fontFamily, t.record.font.fontSize, o);
      else {
        var b = p(t.record.font.fontFamily) ? Y.Helvetica : this.getFontFamily(t.record.font.fontFamily);
        t.record.font = new St(b, t.record.font.fontSize, o);
      }
    }
  };
  r.prototype.getHeaderThemeStyle = function () {
    var t = new yt();
    if (!p(this.gridTheme) && !p(this.gridTheme.header)) {
      var e = p(this.gridTheme.header.fontName) ? Y.Helvetica : this.getFontFamily(this.gridTheme.header.fontName);
      var i = this.getFontStyle(this.gridTheme.header);
      var n = p(this.gridTheme.header.fontSize) ? 10.5 : this.gridTheme.header.fontSize;
      var s = new j();
      if (!p(this.gridTheme.header.fontColor)) {
        var o = this.hexToRgb(this.gridTheme.header.fontColor);
        s = new j(o.r, o.g, o.b);
      }
      var a = new St(e, n, i);
      if (!p(this.gridTheme.header.font)) {
        a = this.gridTheme.header.font;
      }
      return {
        border: this.getBorderStyle(this.gridTheme.header.border),
        font: a,
        brush: new st(s),
      };
    } else {
      t.all = new ct(new j(234, 234, 234));
      return {
        border: t,
        font: new St(Y.Helvetica, 10.5),
        brush: new st(new j(102, 102, 102)),
      };
    }
  };
  r.prototype.processGroupedRecords = function (t, e, i, n, s, o, a, h, l, u, d, c, f) {
    for (
      var g = this,
        y = o,
        m = function (P) {
          var B = t.rows.addRow();
          var R = n.getColumnByField(P.field);
          var L = {
            value: P.key,
            column: R,
            style: void 0,
            isForeignKey: R.isForeignColumn(),
          };
          var O =
            n.getColumnByField(P.field).headerText +
            ': ' +
            (R.enableGroupByFormat ? P.key : w.exportValueFormatter.formatCellValue(L)) +
            ' - ' +
            P.count +
            (e.count > 1 ? ' items' : ' item');
          var T = {
            captionText: O,
            type: 'PDF',
            data: P,
            style: void 0,
          };
          w.parent.trigger(bs, T, function (M) {
            B.cells.getCell(y).value = M.captionText;
            B.cells.getCell(y).style.stringFormat = new Ct(U.Left);
            B.style.setBorder(s);
            B.style.setFont(a);
            B.style.setTextBrush(h);
            B.style.setBackgroundBrush(l);
            if (!p(M.style)) {
              g.processCellStyle(B.cells.getCell(y), M);
            }
            var F;
            var V = new Ss(n);
            p(P.items.records) ? (F = V.generateRows(P.items, P)) : (F = V.generateRows(P.items.records, P));
            if (!p(F) && F.length === 0) {
              B.cells.getCell(y + 1).columnSpan = t.columns.count - (y + 1);
            }
            if (!p(e.childLevels) && e.childLevels > 0) {
              g.processAggregates(F, t, s, a, h, l, true, B, y, null, null, n);
              g.processGroupedRecords(t, P.items, i, n, s, y + 1, a, h, l, u, d, c, f);
              f = g.rowIndex;
              var z = new Cr(n);
              F = z.generateRows(P.items.records, P);
              g.processAggregates(F, t, s, a, h, l, false);
            } else {
              g.processAggregates(F, t, s, a, h, l, true, B, y, null, null, n);
              f = g.processRecord(s, i, n, P.items, t, y + 1, d, c, f);
              var z = new Cr(n);
              F = z.generateRows(P.items, P);
              var tt = true;
              g.processAggregates(F, t, s, a, h, l, false, null, null, tt, null, n);
            }
          });
        },
        w = this,
        b = 0,
        v = e;
      b < v.length;
      b++
    ) {
      var x = v[b];
      m(v[b]);
    }
  };
  r.prototype.processGridHeaders = function (t, e, i, n, s, o, a, h, l, u) {
    for (var d = this, c = n.length + t, f = ps(u), g = u, y = 0, m = [], w = 0; w < i.length; w++)
      m[parseInt(w.toString(), 10)] = 0;
    if (h.groupSettings.columns.length) {
      y = h.groupSettings.columns.length - 1;
      c = c - 1;
    }
    e.columns.add(c);
    e.style.cellPadding = new He(5.76, 5.76, 0.5, 0.5);
    e.headers.add(i.length);
    var b = function (x, P, B, R, L) {
      var O = e.headers.getHeader(x);
      var T = O.cells.getCell(P);
      var M = i[parseInt(x.toString(), 10)].cells[h.groupSettings.columns.length ? P : m[parseInt(x.toString(), 10)]];
      m[parseInt(x.toString(), 10)] = m[parseInt(x.toString(), 10)] + 1;
      if (!p(B.headerTextAlign)) {
        T.style.stringFormat = d.getHorizontalAlignment(B.headerTextAlign);
      }
      if (R > 0) {
        T.rowSpan = R;
        T.style.stringFormat = d.getVerticalAlignment('Bottom', T.style.stringFormat, B.textAlign);
      }
      if (L > 0) {
        T.columnSpan = L;
      }
      O.style.setBorder(s);
      O.style.setFont(o);
      O.style.setTextBrush(a);
      T.value = B.headerText;
      if (
        !p(i[parseInt(x.toString(), 10)].cells[h.groupSettings.columns.length ? P : m[parseInt(x.toString(), 10)]]) &&
        (i[parseInt(x.toString(), 10)].cells[h.groupSettings.columns.length ? P : m[parseInt(x.toString(), 10)]]
          .cellType === wt.HeaderIndent ||
          i[parseInt(x.toString(), 10)].cells[h.groupSettings.columns.length ? P : m[parseInt(x.toString(), 10)]]
            .cellType === wt.DetailHeader)
      ) {
        T.value = '';
        T.width = 20;
      }
      var F = {
        cell: T,
        gridCell:
          i[parseInt(x.toString(), 10)].cells[h.groupSettings.columns.length ? P : m[parseInt(x.toString(), 10)]],
        style: T.style,
      };
      d.parent.trigger(Cs, F);
      var V = F;
      var z = F.style.borders;
      var tt = F.style.font;
      var J = F.style.textBrush;
      if (!p(F.style.borders)) {
        O.style.setBorder(F.style.borders);
      }
      if (!p(F.style.font)) {
        O.style.setFont(F.style.font);
      }
      if (!p(F.style.textBrush)) {
        O.style.setTextBrush(F.style.textBrush);
      }
      if (!p(F.style.verticalAlignment)) {
        T.style.stringFormat = d.getVerticalAlignment(F.style.verticalAlignment, T.style.stringFormat);
      }
      if (!p(F.image)) {
        T.value = new _t(F.image.base64);
      }
      if (!p(F.hyperLink)) {
        T.value = d.setHyperLink(F);
      }
    };
    var v = function (x, P, B, R, L, O) {
      for (var T = 0, M = 0; M < x.length; M++) {
        if (O) {
          T = T + B + (M === 0 ? 0 : -1);
          R = T;
          B = 0;
        }
        if (!O && !x[parseInt(M.toString(), 10)].visible) {
          R = R - 1;
        }
        if (x[parseInt(M.toString(), 10)].columns && x[parseInt(M.toString(), 10)].columns.length) {
          var F = v(x[parseInt(M.toString(), 10)].columns, P - 1, 0, M + R, L + 1, false);
          b(L, M + R + y, x[parseInt(M.toString(), 10)], 0, F);
          B = B + F;
          R = R + F - 1;
        } else if (x[parseInt(M.toString(), 10)].visible || d.hideColumnInclude) {
          B++;
          b(L, M + R + y, x[parseInt(M.toString(), 10)], P, 0);
        }
      }
      return B;
    };
    v(g, f, 0, 0, 0, true);
    if (e.columns.count >= 6 && l) {
      e.style.allowHorizontalOverflow = true;
    }
    return e;
  };
  r.prototype.processExportProperties = function (t, e) {
    if (p(t)) {
      this.currentViewData = false;
      this.customDataSource = false;
    } else {
      if (!p(t.theme)) {
        this.gridTheme = t.theme;
      }
      var i = this.pdfPageSettings.size;
      this.drawHeader(t);
      if (!p(t.footer)) {
        var n = t.footer;
        var s = new D(0, this.pdfPageSettings.size.width - 80 - t.footer.fromBottom * 0.75);
        var o = new C(this.pdfPageSettings.size.width - 80, t.footer.height * 0.75);
        var a = new I(s, o);
        this.pdfDocument.template.bottom = this.drawPageTemplate(new Li(a), t.footer);
      }
      if (!p(t.includeHiddenColumn) && !this.isGrouping) {
        this.hideColumnInclude = t.includeHiddenColumn;
      }
      p(t.dataSource)
        ? p(t.exportType)
          ? ((this.currentViewData = false), (this.customDataSource = false))
          : t.exportType === 'CurrentPage'
            ? ((e =
                this.parent.groupSettings &&
                this.parent.groupSettings.enableLazyLoading &&
                this.parent.groupSettings.columns.length &&
                !this.parent.getDataModule().isRemote()
                  ? e
                  : this.parent.currentViewData),
              (this.currentViewData = true),
              (this.customDataSource = false))
            : ((this.currentViewData = false), (this.customDataSource = false))
        : ((this.customDataSource = true), (this.currentViewData = false));
    }
    return e;
  };
  r.prototype.drawHeader = function (t) {
    var e = this;
    var i = this.pdfPageSettings.size;
    if (!p(t) && !p(t.header)) {
      var n = t.header;
      var s = new D(0, t.header.fromTop);
      var o = new C(this.pdfPageSettings.size.width - 80, t.header.height * 0.75);
      var a = new I(s, o);
      if (!this.headerOnPages.length) this.pdfDocument.template.top = this.drawPageTemplate(new Li(a), t.header);
      else {
        var h = this.drawPageTemplate(new Li(a), t.header);
        this.headerOnPages.filter(function (l) {
          if (l - 1 >= 0 && l - 1 <= e.pdfDocument.pages.count - 1) {
            e.pdfDocument.pages.getPageByIndex(l - 1).graphics.drawPdfTemplate(h.template, new D(0, 0));
          }
        });
      }
    }
  };
  r.prototype.drawPageTemplate = function (t, e) {
    for (var i = 0, n = e.contents; i < n.length; i++) {
      var s = n[i];
      switch ((this.processContentValidation(n[i]), n[i].type)) {
        case 'Text':
          if (n[i].value === '' || n[i].value === void 0 || n[i].value === null || typeof n[i].value != 'string')
            throw new Error('please enter the valid input value in text content...');
          this.drawText(t, n[i]);
          break;
        case 'PageNumber':
          this.drawPageNumber(t, n[i]);
          break;
        case 'Image':
          if (n[i].src === void 0 || n[i].src === null || n[i].src === '')
            throw new Error('please enter the valid base64 string in image content...');
          this.drawImage(t, n[i]);
          break;
        case 'Line':
          this.drawLine(t, n[i]);
          break;
        default:
          throw new Error('Please set valid content type...');
      }
    }
    return t;
  };
  r.prototype.processContentValidation = function (t) {
    if (t.type === void 0 || t.type === null) throw new Error('please set valid content type...');
    if (t.type === 'Line') {
      if (t.points === void 0 || t.points === null)
        throw new Error('please enter valid points in ' + t.type + ' content...');
      if (t.points.x1 === void 0 || t.points.x1 === null || typeof t.points.x1 != 'number')
        throw new Error('please enter valid x1 co-ordinate in ' + t.type + ' points...');
      if (t.points.y1 === void 0 || t.points.y1 === null || typeof t.points.y1 != 'number')
        throw new Error('please enter valid y1 co-ordinate in ' + t.type + ' points...');
      if (t.points.x2 === void 0 || t.points.x2 === null || typeof t.points.x2 != 'number')
        throw new Error('please enter valid x2 co-ordinate in ' + t.type + ' points...');
      if (t.points.y2 === void 0 || t.points.y2 === null || typeof t.points.y2 != 'number')
        throw new Error('please enter valid y2 co-ordinate in ' + t.type + ' points...');
    } else {
      if (t.position === void 0 || t.position === null)
        throw new Error('please enter valid position in ' + t.type + ' content...');
      if (t.position.x === void 0 || t.position.x === null || typeof t.position.x != 'number')
        throw new Error('please enter valid x co-ordinate in ' + t.type + ' position...');
      if (t.position.y === void 0 || t.position.y === null || typeof t.position.y != 'number')
        throw new Error('please enter valid y co-ordinate in ' + t.type + ' position...');
    }
  };
  r.prototype.drawText = function (t, e) {
    var i = this.getFont(e);
    var n = this.getBrushFromContent(e);
    var s = null;
    if (!p(e.style.textPenColor)) {
      var o = this.hexToRgb(e.style.textPenColor);
      s = new ct(new j(o.r, o.g, o.b));
    }
    if (n == null && s == null) {
      n = new st(new j(0, 0, 0));
    }
    var a = e.value.toString();
    var h = e.position.x * 0.75;
    var l = e.position.y * 0.75;
    var u = new Ct();
    if (!p(e.style.stringFormat)) {
      u.alignment = e.style.stringFormat.alignment;
    }
    var d = this.setContentFormat(e, u);
    d !== null && !p(d.format) && !p(d.size)
      ? t.graphics.drawString(a, i, s, n, h, l, d.size.width, d.size.height, d.format)
      : t.graphics.drawString(a, i, s, n, h, l, u);
  };
  r.prototype.drawPageNumber = function (t, e) {
    var i = this.getFont(e);
    var n = null;
    if (p(e.style.textBrushColor)) n = new st(new j(0, 0, 0));
    else {
      var s = this.hexToRgb(e.style.textBrushColor);
      n = new st(new j(s.r, s.g, s.b));
    }
    var o = new pa(i, n);
    o.numberStyle = this.getPageNumberStyle(e.pageNumberType);
    var a;
    var h;
    if (p(e.format)) {
      h = '{0}';
      a = new Xe(i, n, h, o);
    } else {
      var l = '$total';
      var u = '$current';
      if (e.format.indexOf('$total') !== -1 && e.format.indexOf('$current') !== -1) {
        var d = new fn(i);
        d.numberStyle = this.getPageNumberStyle(e.pageNumberType);
        e.format.indexOf('$total') > e.format.indexOf('$current')
          ? ((h = e.format.replace('$current', '0')), (h = h.replace('$total', '1')))
          : ((h = e.format.replace('$current', '1')), (h = h.replace('$total', '0')));
        a = new Xe(i, n, h, o, d);
      } else if (e.format.indexOf('$current') !== -1 && e.format.indexOf('$total') === -1) {
        h = e.format.replace('$current', '0');
        a = new Xe(i, n, h, o);
      } else {
        var d = new fn(i);
        h = e.format.replace('$total', '0');
        a = new Xe(i, n, h, d);
      }
    }
    var c = e.position.x * 0.75;
    var f = e.position.y * 0.75;
    var g = this.setContentFormat(e, a.stringFormat);
    if (g !== null && !p(g.format) && !p(g.size)) {
      a.stringFormat = g.format;
      a.bounds = new I(c, f, g.size.width, g.size.height);
    }
    a.draw(t.graphics, c, f);
  };
  r.prototype.drawImage = function (t, e) {
    var i = e.position.x * 0.75;
    var n = e.position.y * 0.75;
    var s = p(e.size) ? void 0 : e.size.width * 0.75;
    var o = p(e.size) ? void 0 : e.size.height * 0.75;
    var a = new _t(e.src);
    p(s) ? t.graphics.drawImage(a, i, n) : t.graphics.drawImage(a, i, n, s, o);
  };
  r.prototype.drawLine = function (t, e) {
    var i = e.points.x1 * 0.75;
    var n = e.points.y1 * 0.75;
    var s = e.points.x2 * 0.75;
    var o = e.points.y2 * 0.75;
    var a = this.getPenFromContent(e);
    if (!p(e.style) && e.style !== null) {
      if (!p(e.style.penSize) && e.style.penSize !== null && typeof e.style.penSize == 'number') {
        a.width = e.style.penSize * 0.75;
      }
      a.dashStyle = this.getDashStyle(e.style.dashStyle);
    }
    t.graphics.drawLine(a, i, n, s, o);
  };
  r.prototype.processAggregates = function (t, e, i, n, s, o, a, h, l, u, d, c) {
    for (var f = 0, g = t; f < g.length; f++) {
      var y = g[f];
      var m = -1;
      var w = 0;
      var b = true;
      var v = [];
      var x = d ? 0 : 1;
      var P = void 0;
      if (p(h)) {
        P = e.rows.addRow();
        P.style.setBorder(i);
        P.style.setFont(n);
        P.style.setTextBrush(s);
        P.style.setBackgroundBrush(o);
      }
      for (
        var B = this.parent.allowRowDragAndDrop && p(this.parent.rowDropSettings.targetID), R = 0;
        R < e.columns.count + x;
        R++
      ) {
        var L = g[f].cells[parseInt(w.toString(), 10)];
        if (L.cellType === wt.DetailFooterIntent) {
          R--;
          w++;
          continue;
        }
        if (B && L.cellType === wt.Indent) {
          B = false;
          R--;
          w++;
          continue;
        }
        if (!this.hideColumnInclude) {
          for (; L.visible === void 0; )
            if (L.cellType !== wt.DetailFooterIntent) {
              p(h) || p(h.cells.getCell(R).value)
                ? v.push('')
                : (v.push(h.cells.getCell(R).value), (b = false), a || (R += 1));
              R += 1;
              w = w + 1;
              L = g[f].cells[parseInt(w.toString(), 10)];
            }
          for (; !p(L.visible) && !L.visible; ) {
            w = w + 1;
            L = g[f].cells[parseInt(w.toString(), 10)];
          }
        }
        if (L.isDataCell) {
          var O = {};
          var T = !p(L.column.footerTemplate);
          var M = !p(L.column.groupFooterTemplate);
          var F = !p(L.column.groupCaptionTemplate);
          if (T || F || M) {
            var V = this.getTemplateFunction(O, R, m, L);
            O = V.templateFunction;
            m = V.leastCaptionSummaryIndex;
            var z = void 0;
            var tt = g[f].data[L.column.field ? L.column.field : L.column.columnName];
            (this.parent.isReact || this.parent.isVue || this.parent.isVue3 || this.parent.isAngular) &&
            !(
              typeof L.column.footerTemplate == 'string' ||
              typeof L.column.groupFooterTemplate == 'string' ||
              typeof L.column.groupCaptionTemplate == 'string'
            )
              ? ((z = g[f].data[L.column.field ? L.column.field : L.column.columnName][L.column.type]),
                (z = p(z) ? '' : z))
              : ((z = O[_e(wt, L.cellType)](
                  g[f].data[L.column.field ? L.column.field : L.column.columnName],
                  this.parent,
                )),
                (z = this.parent.isVue3 && !p(z[1]) ? z[1].textContent : p(z[0]) ? '' : z[0].textContent));
            b = false;
            var J = {
              row: g[f],
              type: T ? 'Footer' : M ? 'GroupFooter' : 'GroupCaption',
              style: p(h) ? P.cells : h.cells,
              cell: L,
              value: z,
            };
            this.parent.trigger(fs, J);
            v.push(J.value);
          } else {
            var V = this.getSummaryWithoutTemplate(g[f].data[L.column.field]);
            if (!p(V)) {
              v.push(V);
            }
          }
        } else v.push('');
        if (
          b &&
          v[parseInt(R.toString(), 10)] !== '' &&
          !p(v[parseInt(R.toString(), 10)]) &&
          v[parseInt(R.toString(), 10)] !== null
        ) {
          b = false;
        }
        w += 1;
      }
      if (!d)
        if (!a) v.splice(0, 1);
        else
          for (var R = c.groupSettings.columns.length; R < v.length - 1; R++) {
            v[parseInt(R.toString(), 10)] = v[R + 1];
            v[R + 1] = v[R + 2] ? v[R + 2] : '';
          }
      if (!b)
        if (a)
          for (var R = 0; R < e.columns.count; R++) {
            h.cells.getCell(R).value = v[parseInt(R.toString(), 10)].toString();
            R === l && m !== -1 && m !== 1
              ? (h.cells.getCell(R).columnSpan = m - 1 - l)
              : R === l && m === -1 && (h.cells.getCell(R).columnSpan = e.columns.count - l);
          }
        else
          for (var R = 0; R < e.columns.count; R++) P.cells.getCell(R).value = v[parseInt(R.toString(), 10)].toString();
    }
  };
  r.prototype.getTemplateFunction = function (t, e, i, n) {
    !p(n.column.footerTemplate) && n.cellType === wt.Summary
      ? (t[_e(wt, wt.Summary)] = bi(n.column.footerTemplate))
      : p(n.column.groupCaptionTemplate)
        ? (t[_e(wt, wt.GroupSummary)] = bi(n.column.groupFooterTemplate))
        : (i === -1 && (i = e), (t[_e(wt, wt.CaptionSummary)] = bi(n.column.groupCaptionTemplate)));
    return {
      templateFunction: t,
      leastCaptionSummaryIndex: i,
    };
  };
  r.prototype.getSummaryWithoutTemplate = function (t) {
    if (p(t.Sum))
      if (p(t.Average))
        if (p(t.Max))
          if (p(t.Min))
            if (p(t.Count))
              if (p(t.TrueCount))
                if (p(t.FalseCount)) {
                  if (!p(t.Custom)) return t.Custom;
                } else return t.FalseCount;
              else return t.TrueCount;
            else return t.Count;
          else return t.Min;
        else return t.Max;
      else return t.Average;
    else return t.Sum;
  };
  r.prototype.setColumnProperties = function (t, e, i, n, s) {
    for (var o = n.groupSettings.columns.length ? n.groupSettings.columns.length - 1 : 0, a = 0; a < o; a++)
      e.columns.getColumn(a).width = 20;
    for (var a = 0; a < t.length; a++) {
      if (!p(t[parseInt(a.toString(), 10)].textAlign)) {
        e.columns.getColumn(a + o).format = this.getHorizontalAlignment(t[parseInt(a.toString(), 10)].textAlign);
      }
      if (e.style.allowHorizontalOverflow && !p(t[parseInt(a.toString(), 10)].width) && s) {
        e.columns.getColumn(a + o).width =
          typeof t[parseInt(a.toString(), 10)].width == 'number'
            ? t[parseInt(a.toString(), 10)].width * 0.75
            : i.getConvertedWidth(t[parseInt(a.toString(), 10)].width) * 0.75;
      }
    }
  };
  r.prototype.setRecordThemeStyle = function (t, e) {
    if (!p(this.gridTheme) && !p(this.gridTheme.record)) {
      var i = p(this.gridTheme.record.fontName) ? Y.Helvetica : this.getFontFamily(this.gridTheme.record.fontName);
      var n = p(this.gridTheme.record.fontSize) ? 9.75 : this.gridTheme.record.fontSize;
      var s = this.getFontStyle(this.gridTheme.record);
      var o = new St(i, n, s);
      if (!p(this.gridTheme.record.font)) {
        o = this.gridTheme.record.font;
      }
      t.style.setFont(o);
      var a = new j();
      if (!p(this.gridTheme.record.fontColor)) {
        var h = this.hexToRgb(this.gridTheme.record.fontColor);
        a = new j(h.r, h.g, h.b);
      }
      t.style.setTextBrush(new st(a));
    } else t.style.setTextBrush(new st(new j(0, 0, 0)));
    var l =
      this.gridTheme && this.gridTheme.record && this.gridTheme.record.border
        ? this.getBorderStyle(this.gridTheme.record.border)
        : e;
    t.style.setBorder(l);
    return t;
  };
  r.prototype.processRecord = function (t, e, i, n, s, o, a, h, l) {
    for (var u = h.getGridRowModel(e, n, i, l), d = 0, c = u; d < c.length; d++) {
      var f = c[d];
      l++;
      this.rowIndex = l;
      for (var g = this.setRecordThemeStyle(s.rows.addRow(), t), y = c[d].cells.length, m = 0; m < y; m++) {
        var w = c[d].cells[parseInt(m.toString(), 10)];
        if (c[d].cells[parseInt(m.toString(), 10)].cellType === wt.Data) {
          var b = c[d].cells[parseInt(m.toString(), 10)].column;
          var v = c[d].cells[parseInt(m.toString(), 10)].column.field;
          var x = p(c[d].cells[parseInt(m.toString(), 10)].column.field)
            ? ''
            : c[d].cells[parseInt(m.toString(), 10)].column.valueAccessor(
                c[d].cells[parseInt(m.toString(), 10)].column.field,
                c[d].data,
                c[d].cells[parseInt(m.toString(), 10)].column,
              );
          var P = p(x) ? '' : x;
          var B = void 0;
          if (
            c[d].cells[parseInt(m.toString(), 10)].column.isForeignColumn &&
            c[d].cells[parseInt(m.toString(), 10)].column.isForeignColumn()
          ) {
            B = h.getFData(P, c[d].cells[parseInt(m.toString(), 10)].column);
            P = Rt(c[d].cells[parseInt(m.toString(), 10)].column.foreignKeyValue, B);
          }
          var R = c[d].data;
          var L = g.cells.getCell(m);
          var O = {
            data: c[d].data,
            value: P,
            column: c[d].cells[parseInt(m.toString(), 10)].column,
            style: void 0,
            colSpan: 1,
            cell: L,
          };
          O.value =
            O.column.type === 'boolean' && typeof O.value == 'string'
              ? O.value
              : this.exportValueFormatter.formatCellValue(O);
          this.parent.trigger(gs, O);
          if (!p(O.image)) {
            O.value = new _t(O.image.base64);
            O.value.height = O.image.height || O.value.height;
            O.value.width = O.image.width || O.value.width;
          }
          L.value = O.value;
          if (!p(O.hyperLink)) {
            L.value = this.setHyperLink(O);
          }
          if (!p(O.style)) {
            this.processCellStyle(L, O);
          }
          if (O.colSpan > 1) {
            if (m + 1 + O.colSpan > g.cells.count) {
              O.colSpan = g.cells.count - (m + 1);
            }
            L.columnSpan = O.colSpan;
            for (var T = 1; T < L.columnSpan; T++) {
              var M = g.cells.getCell(m + T);
              M.value = '';
            }
            m += O.colSpan - 1;
          }
        }
      }
      if (c[d].isExpand) {
        var F = this.setRecordThemeStyle(s.rows.addRow(), t);
        var V = this.parent.childGrid || this.parent.detailTemplate ? 0 : o;
        var L = F.cells.getCell(V);
        L.columnSpan = F.cells.count - V;
        L.style.cellPadding = new He(10, 10, 10, 10);
        if (this.parent.childGrid) {
          i.isPrinting = true;
          var z = !p(a) && a.exportType ? a.exportType : 'AllPages';
          var tt = this.helper.createChildGrid(i, c[d], z, this.gridPool);
          var J = tt.childGrid;
          var K = tt.element;
          J.actionFailure = h.failureHandler(this.gridPool, J, this.globalResolve);
          var At = Vt(a, {
            columns: null,
            dataSource: null,
            query: null,
          });
          var O = {
            childGrid: J,
            row: c[d],
            cell: L,
            exportProperties: At,
          };
          this.parent.trigger(ms, O);
          J.beforeDataBound = this.childGridCell(L, J, At);
          J.appendTo(tt.element);
        } else if (this.parent.detailTemplate) {
          var O = {
            parentRow: c[d],
            row: F,
            value: {},
            action: 'pdfexport',
            gridInstance: i,
          };
          this.parent.trigger(ys, O);
          L.value = this.processDetailTemplate(O);
        }
      }
      this.parent.notify(vs, {
        type: 'pdf',
        rowObj: c[d],
      });
    }
    return l;
  };
  r.prototype.processDetailTemplate = function (t) {
    var e = this;
    if (t.value.columnHeader || t.value.rows) {
      var i = new ht();
      var n = this.getHeaderThemeStyle();
      var s = n.border;
      var o = n.font;
      var a = n.brush;
      var h = function (y, m, w) {
        if (w) {
          m.style.setBorder(n.border);
          m.style.setFont(n.font);
          m.style.setTextBrush(n.brush);
        }
        for (var b = 0; b < y.cells.length; b++) {
          var v = y.cells[parseInt(b.toString(), 10)];
          var x = m.cells.getCell(
            y.cells[parseInt(b.toString(), 10)].index ? y.cells[parseInt(b.toString(), 10)].index : b,
          );
          if (y.cells[parseInt(b.toString(), 10)].rowSpan > 0) {
            x.rowSpan = y.cells[parseInt(b.toString(), 10)].rowSpan;
          }
          if (y.cells[parseInt(b.toString(), 10)].colSpan > 0) {
            x.columnSpan = y.cells[parseInt(b.toString(), 10)].colSpan;
          }
          x.value = y.cells[parseInt(b.toString(), 10)].value;
          if (!p(y.cells[parseInt(b.toString(), 10)].image)) {
            x.value = new _t(y.cells[parseInt(b.toString(), 10)].image.base64);
            x.value.height = y.cells[parseInt(b.toString(), 10)].image.height;
            x.value.width = y.cells[parseInt(b.toString(), 10)].image.width;
          }
          if (!p(y.cells[parseInt(b.toString(), 10)].hyperLink)) {
            x.value = e.setHyperLink(y.cells[parseInt(b.toString(), 10)]);
          }
          if (!p(y.cells[parseInt(b.toString(), 10)].style)) {
            var P = {
              style: {
                backgroundColor: y.cells[parseInt(b.toString(), 10)].style.backColor,
                textAlignment: y.cells[parseInt(b.toString(), 10)].style.pdfTextAlignment,
                verticalAlignment: y.cells[parseInt(b.toString(), 10)].style.pdfVerticalAlignment,
                textBrushColor: y.cells[parseInt(b.toString(), 10)].style.fontColor,
                textPenColor: y.cells[parseInt(b.toString(), 10)].style.pdfTextPenColor,
                fontFamily: y.cells[parseInt(b.toString(), 10)].style.pdfFontFamily,
                fontSize: y.cells[parseInt(b.toString(), 10)].style.fontSize,
                bold: y.cells[parseInt(b.toString(), 10)].style.bold,
                italic: y.cells[parseInt(b.toString(), 10)].style.italic,
                underline: y.cells[parseInt(b.toString(), 10)].style.underline,
                strikeout: y.cells[parseInt(b.toString(), 10)].style.strikeThrough,
                border: y.cells[parseInt(b.toString(), 10)].style.pdfBorder,
                paragraphIndent: y.cells[parseInt(b.toString(), 10)].style.pdfParagraphIndent,
                cellPadding: y.cells[parseInt(b.toString(), 10)].style.pdfCellPadding,
              },
            };
            e.processCellStyle(x, P);
          }
        }
      };
      t.value.columnCount
        ? i.columns.add(t.value.columnCount)
        : t.value.columnHeader && t.value.columnHeader.length
          ? i.columns.add(t.value.columnHeader[0].cells.length)
          : t.value.rows && t.value.rows.length && i.columns.add(t.value.rows[0].cells.length);
      if (t.value.columnHeader) {
        i.headers.add(t.value.columnHeader.length);
        for (var l = 0; l < t.value.columnHeader.length; l++) {
          var u = i.headers.getHeader(parseInt(l.toString(), 10));
          h(t.value.columnHeader[parseInt(l.toString(), 10)], u, true);
        }
      }
      if (t.value.rows)
        for (var d = 0, c = t.value.rows; d < c.length; d++) {
          var f = c[d];
          var g = this.setRecordThemeStyle(i.rows.addRow(), n.border);
          h(c[d], g, false);
        }
      return i;
    } else {
      if (t.value.image) return new _t(t.value.image.base64);
      if (t.value.text) return t.value.text;
      if (t.value.hyperLink) return this.setHyperLink(t.value);
    }
    return '';
  };
  r.prototype.setHyperLink = function (t) {
    var e = new ke();
    e.url = t.hyperLink.target;
    e.text = t.hyperLink.displayText || t.hyperLink.target;
    e.font = new St(Y.Helvetica, 9.75);
    e.brush = new st(new j(51, 102, 187));
    return e;
  };
  r.prototype.childGridCell = function (t, e, i) {
    var n = this;
    return function (s) {
      e.beforeDataBound = null;
      s.cancel = true;
      t.value = n.processGridExport(e, s, i);
      e.destroy();
      ws(e.element);
      n.gridPool[e.id] = true;
      n.helper.checkAndExport(n.gridPool, n.globalResolve);
      return t;
    };
  };
  r.prototype.processCellStyle = function (t, e) {
    if (!p(e.style.backgroundColor)) {
      var i = this.hexToRgb(e.style.backgroundColor);
      t.style.backgroundBrush = new st(new j(i.r, i.g, i.b));
    }
    if (!p(e.style.textAlignment)) {
      t.style.stringFormat = this.getHorizontalAlignment(e.style.textAlignment);
    }
    if (!p(e.style.cellPadding)) {
      t.style.cellPadding = e.style.cellPadding;
    }
    if (!p(e.style.verticalAlignment)) {
      t.style.stringFormat = this.getVerticalAlignment(e.style.verticalAlignment, t.style.stringFormat);
    }
    if (!p(e.style.textBrushColor)) {
      var n = this.hexToRgb(e.style.textBrushColor);
      t.style.textBrush = new st(new j(n.r, n.g, n.b));
    }
    if (!p(e.style.textPenColor)) {
      var s = this.hexToRgb(e.style.textPenColor);
      t.style.textPen = new ct(new j(s.r, s.g, s.b));
    }
    if (
      !p(e.style.fontFamily) ||
      !p(e.style.fontSize) ||
      !p(e.style.bold) ||
      !p(e.style.italic) ||
      !p(e.style.underline) ||
      !p(e.style.strikeout)
    ) {
      t.style.font = this.getFont(e);
    }
    if (!p(e.style.border)) {
      var o = new yt();
      var a = e.style.border.width;
      var h =
        !p(e.style.border.width) && typeof e.style.border.width == 'number' ? e.style.border.width * 0.75 : void 0;
      var l = new j(196, 196, 196);
      if (!p(e.style.border.color)) {
        var u = this.hexToRgb(e.style.border.color);
        l = new j(u.r, u.g, u.b);
      }
      var d = new ct(l, h);
      if (!p(e.style.border.dashStyle)) {
        d.dashStyle = this.getDashStyle(e.style.border.dashStyle);
      }
      o.all = d;
      t.style.borders = o;
    }
    if (!p(e.style.paragraphIndent)) {
      t.style.stringFormat = new Ct();
      t.style.stringFormat.paragraphIndent = e.style.paragraphIndent;
    }
  };
  r.prototype.getHorizontalAlignment = function (t, e) {
    switch ((e === void 0 && (e = new Ct()), t)) {
      case 'Right':
        e.alignment = U.Right;
        break;
      case 'Center':
        e.alignment = U.Center;
        break;
      case 'Justify':
        e.alignment = U.Justify;
        break;
      case 'Left':
        e.alignment = U.Left;
        break;
    }
    return e;
  };
  r.prototype.getVerticalAlignment = function (t, e, i) {
    switch ((e === void 0 && ((e = new Ct()), (e = this.getHorizontalAlignment(i, e))), t)) {
      case 'Bottom':
        e.lineAlignment = Ot.Bottom;
        break;
      case 'Middle':
        e.lineAlignment = Ot.Middle;
        break;
      case 'Top':
        e.lineAlignment = Ot.Top;
        break;
    }
    return e;
  };
  r.prototype.getFontFamily = function (t) {
    switch (t) {
      case 'TimesRoman':
        return 2;
      case 'Courier':
        return 1;
      case 'Symbol':
        return 3;
      case 'ZapfDingbats':
        return 4;
      default:
        return 0;
    }
  };
  r.prototype.getFont = function (t) {
    if (t.font) return t.font;
    var e = p(t.style.fontSize) ? 9.75 : t.style.fontSize * 0.75;
    var i = p(t.style.fontFamily) ? Y.TimesRoman : this.getFontFamily(t.style.fontFamily);
    var n = N.Regular;
    if (!p(t.style.bold) && t.style.bold) {
      n |= N.Bold;
    }
    if (!p(t.style.italic) && t.style.italic) {
      n |= N.Italic;
    }
    if (!p(t.style.underline) && t.style.underline) {
      n |= N.Underline;
    }
    if (!p(t.style.strikeout) && t.style.strikeout) {
      n |= N.Strikeout;
    }
    return new St(i, e, n);
  };
  r.prototype.getPageNumberStyle = function (t) {
    switch (t) {
      case 'LowerLatin':
        return 2;
      case 'LowerRoman':
        return 3;
      case 'UpperLatin':
        return 4;
      case 'UpperRoman':
        return 5;
      default:
        return 1;
    }
  };
  r.prototype.setContentFormat = function (t, e) {
    if (!p(t.size)) {
      var i = t.size.width * 0.75;
      var n = t.size.height * 0.75;
      e = new Ct(U.Left, Ot.Middle);
      if (!p(t.style.hAlign))
        switch (t.style.hAlign) {
          case 'Right':
            e.alignment = U.Right;
            break;
          case 'Center':
            e.alignment = U.Center;
            break;
          case 'Justify':
            e.alignment = U.Justify;
            break;
          default:
            e.alignment = U.Left;
        }
      if (!p(t.style.vAlign)) {
        e = this.getVerticalAlignment(t.style.vAlign, e);
      }
      return {
        format: e,
        size: new C(i, n),
      };
    }
    return null;
  };
  r.prototype.getPageSize = function (t) {
    switch (t) {
      case 'Letter':
        return new C(612, 792);
      case 'Note':
        return new C(540, 720);
      case 'Legal':
        return new C(612, 1008);
      case 'A0':
        return new C(2380, 3368);
      case 'A1':
        return new C(1684, 2380);
      case 'A2':
        return new C(1190, 1684);
      case 'A3':
        return new C(842, 1190);
      case 'A5':
        return new C(421, 595);
      case 'A6':
        return new C(297, 421);
      case 'A7':
        return new C(210, 297);
      case 'A8':
        return new C(148, 210);
      case 'A9':
        return new C(105, 148);
      case 'B0':
        return new C(2836, 4008);
      case 'B1':
        return new C(2004, 2836);
      case 'B2':
        return new C(1418, 2004);
      case 'B3':
        return new C(1002, 1418);
      case 'B4':
        return new C(709, 1002);
      case 'B5':
        return new C(501, 709);
      case 'Archa':
        return new C(648, 864);
      case 'Archb':
        return new C(864, 1296);
      case 'Archc':
        return new C(1296, 1728);
      case 'Archd':
        return new C(1728, 2592);
      case 'Arche':
        return new C(2592, 3456);
      case 'Flsa':
        return new C(612, 936);
      case 'HalfLetter':
        return new C(396, 612);
      case 'Letter11x17':
        return new C(792, 1224);
      case 'Ledger':
        return new C(1224, 792);
      default:
        return new C(595, 842);
    }
  };
  r.prototype.getDashStyle = function (t) {
    switch (t) {
      case 'Dash':
        return 1;
      case 'Dot':
        return 2;
      case 'DashDot':
        return 3;
      case 'DashDotDot':
        return 4;
      default:
        return 0;
    }
  };
  r.prototype.getPenFromContent = function (t) {
    var e = new ct(new j(0, 0, 0));
    if (!p(t.style) && t.style !== null && !p(t.style.penColor)) {
      var i = this.hexToRgb(t.style.penColor);
      e = new ct(new j(i.r, i.g, i.b));
    }
    return e;
  };
  r.prototype.getBrushFromContent = function (t) {
    var e = null;
    if (!p(t.style.textBrushColor)) {
      var i = this.hexToRgb(t.style.textBrushColor);
      e = new st(new j(i.r, i.g, i.b));
    }
    return e;
  };
  r.prototype.hexToRgb = function (t) {
    if (t === null || t === '' || t.length !== 7) throw new Error('please set valid hex value for color...');
    t = t.substring(1);
    var e = parseInt(t, 16);
    var i = (e >> 16) & 255;
    var n = (e >> 8) & 255;
    var s = e & 255;
    return {
      r: i,
      g: n,
      b: s,
    };
  };
  r.prototype.getFontStyle = function (t) {
    var e = N.Regular;
    if (!p(t) && t.bold) {
      e |= N.Bold;
    }
    if (!p(t) && t.italic) {
      e |= N.Italic;
    }
    if (!p(t) && t.underline) {
      e |= N.Underline;
    }
    if (!p(t) && t.strikeout) {
      e |= N.Strikeout;
    }
    return e;
  };
  r.prototype.getBorderStyle = function (t) {
    var e = new yt();
    if (p(t)) e.all = new ct(new j(234, 234, 234));
    else {
      var i = t.width;
      var n = !p(t.width) && typeof t.width == 'number' ? t.width * 0.75 : void 0;
      var s = new j(196, 196, 196);
      if (!p(t.color)) {
        var o = this.hexToRgb(t.color);
        s = new j(o.r, o.g, o.b);
      }
      var a = new ct(s, n);
      if (!p(t.dashStyle)) {
        a.dashStyle = this.getDashStyle(t.dashStyle);
      }
      e.all = a;
    }
    return e;
  };
  r.prototype.destroy = function () {};
  return r;
})();
var A = {
  header: '.' + Hi,
  content: '.' + Te,
  edit: '.e-inline-edit',
  batchEdit: '.e-editedbatchcell',
  editIcon: 'e-edit',
  pager: '.e-gridpager',
  delete: 'e-delete',
  save: 'e-save',
  cancel: 'e-cancel',
  copy: 'e-copy',
  pdf: 'e-pdfexport',
  group: 'e-icon-group',
  ungroup: 'e-icon-ungroup',
  csv: 'e-csvexport',
  excel: 'e-excelexport',
  fPage: 'e-icon-first',
  nPage: 'e-icon-next',
  lPage: 'e-icon-last',
  pPage: 'e-icon-prev',
  ascending: 'e-icon-ascending',
  descending: 'e-icon-descending',
  groupHeader: 'e-groupdroparea',
  touchPop: 'e-gridpopup',
  autofit: 'e-icon-autofit',
  autofitall: 'e-icon-autofitall',
  chart: 'e-grid-chart-icon',
  barChart: 'e-grid-bar-chart-icon',
  bar: 'e-grid-bar-icon',
  stackingBar: 'e-grid-stacking-bar-icon',
  stackingBar100: 'e-grid-stacking-bar-100-icon',
  pie: 'e-grid-pie-icon',
  columnChart: 'e-grid-column-chart-icon',
  column: 'e-grid-column-icon',
  stackingColumn: 'e-grid-stacking-column-icon',
  stackingColumn100: 'e-grid-stacking-column-100-icon',
  lineChart: 'e-grid-line-chart-icon',
  line: 'e-grid-line-icon',
  stackingLine: 'e-grid-stacking-line-icon',
  stackingLine100: 'e-grid-stacking-line-100-icon',
  areaChart: 'e-grid-area-chart-icon',
  area: 'e-grid-area-icon',
  stackingArea: 'e-grid-stacking-area-icon',
  stackingArea100: 'e-grid-stacking-area-100-icon',
  scatter: 'e-grid-scatter-icon',
};
var za = (function () {
  function r(t, e) {
    this.defaultItems = {};
    this.disableItems = [];
    this.hiddenItems = [];
    this.barChartList = ['Bar', 'StackingBar', 'StackingBar100'];
    this.pieChartList = ['Pie'];
    this.columnChartList = ['Column', 'StackingColumn', 'StackingColumn100'];
    this.lineChartList = ['Line', 'StackingLine', 'StackingLine100'];
    this.areaChartList = ['Area', 'StackingArea', 'StackingArea100'];
    this.scatterChartList = ['Scatter'];
    this.chartList = this.barChartList.concat(
      this.pieChartList,
      this.columnChartList,
      this.lineChartList,
      this.areaChartList,
      this.scatterChartList,
    );
    this.localeText = this.setLocaleKey();
    this.parent = t;
    this.gridID = t.element.id;
    this.serviceLocator = e;
    this.addEventListener();
  }
  r.prototype.addEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.on(Qe, this.enableAfterRenderMenu, this);
      this.parent.on(Pr, this.render, this);
      this.parent.on(Ze, this.destroy, this);
    }
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off(Pr, this.render);
      this.parent.off(Qe, this.enableAfterRenderMenu);
      this.parent.off(Ze, this.destroy);
      Xt.remove(this.element, 'keydown', this.keyDownHandler.bind(this));
    }
  };
  r.prototype.keyDownHandler = function (t) {
    if (t.code === 'Tab' || t.which === 9) {
      this.contextMenu.close();
    }
    if (t.code === 'Escape') {
      this.contextMenu.close();
      this.parent.notify(Ps, {});
    }
  };
  r.prototype.render = function () {
    this.parent.element.classList.add('e-noselect');
    this.l10n = this.serviceLocator.getService('localization');
    this.element = this.parent.createElement('ul', { id: this.gridID + '_cmenu' });
    Xt.add(this.element, 'keydown', this.keyDownHandler.bind(this));
    this.parent.element.appendChild(this.element);
    var t = '#' + this.gridID;
    this.contextMenu = new xr({
      items: this.getMenuItems(),
      enableRtl: this.parent.enableRtl,
      enablePersistence: this.parent.enablePersistence,
      locale: this.parent.locale,
      target: t,
      select: this.contextMenuItemClick.bind(this),
      beforeOpen: this.contextMenuBeforeOpen.bind(this),
      onOpen: this.contextMenuOpen.bind(this),
      onClose: this.contextMenuOnClose.bind(this),
      beforeClose: this.contextMenuBeforeClose.bind(this),
      cssClass: this.parent.cssClass ? 'e-grid-menu ' + this.parent.cssClass : 'e-grid-menu',
    });
    this.contextMenu.appendTo(this.element);
  };
  r.prototype.enableAfterRenderMenu = function (t) {
    if (t.module === this.getModuleName() && t.enable) {
      if (this.contextMenu) {
        this.contextMenu.destroy();
        Bt(this.element);
        this.parent.element.classList.remove('e-noselect');
      }
      this.render();
    }
  };
  r.prototype.getMenuItems = function () {
    for (
      var t = [], e = [], i = [], n = [], s, o = [], a = [], h = [], l, u = 0, d = this.parent.contextMenuItems;
      u < d.length;
      u++
    ) {
      var c = d[u];
      typeof d[u] == 'string' && this.getDefaultItems().indexOf(d[u]) !== -1
        ? this.barChartList.indexOf(d[u]) !== -1
          ? n.push(this.buildDefaultItems(d[u]))
          : this.pieChartList.indexOf(d[u]) !== -1
            ? (s = this.buildDefaultItems(d[u]))
            : this.columnChartList.indexOf(d[u]) !== -1
              ? o.push(this.buildDefaultItems(d[u]))
              : this.lineChartList.indexOf(d[u]) !== -1
                ? a.push(this.buildDefaultItems(d[u]))
                : this.areaChartList.indexOf(d[u]) !== -1
                  ? h.push(this.buildDefaultItems(d[u]))
                  : this.scatterChartList.indexOf(d[u]) !== -1
                    ? (l = this.buildDefaultItems(d[u]))
                    : d[u].toLocaleLowerCase().indexOf('export') !== -1
                      ? e.push(this.buildDefaultItems(d[u]))
                      : t.push(this.buildDefaultItems(d[u]))
        : typeof d[u] != 'string' && t.push(d[u]);
    }
    if (a.length > 0) {
      var f = this.buildDefaultItems('LineChart');
      f.items = a;
      i.push(f);
    }
    if (h.length > 0) {
      var g = this.buildDefaultItems('AreaChart');
      g.items = h;
      i.push(g);
    }
    if (o.length > 0) {
      var y = this.buildDefaultItems('ColumnChart');
      y.items = o;
      i.push(y);
    }
    if (n.length > 0) {
      var m = this.buildDefaultItems('BarChart');
      m.items = n;
      i.push(m);
    }
    if (l) {
      i.push(l);
    }
    if (s) {
      i.push(s);
    }
    if (i.length > 0) {
      var w = this.buildDefaultItems('Chart');
      w.items = i;
      t.push(w);
    }
    if (e.length > 0) {
      var b = this.buildDefaultItems('export');
      b.items = e;
      t.push(b);
    }
    return t;
  };
  r.prototype.getLastPage = function () {
    var t = Math.floor(this.parent.pageSettings.totalRecordsCount / this.parent.pageSettings.pageSize);
    if (this.parent.pageSettings.totalRecordsCount % this.parent.pageSettings.pageSize) {
      t += 1;
    }
    return t;
  };
  r.prototype.contextMenuOpen = function () {
    this.isOpen = true;
  };
  r.prototype.contextMenuItemClick = function (t) {
    var e = this.getKeyFromId(t.item.id);
    switch (e) {
      case 'AutoFitAll':
        this.parent.autoFitColumns([]);
        break;
      case 'AutoFit':
        this.parent.autoFitColumns(this.targetColumn.field);
        break;
      case 'Group':
        this.parent.groupColumn(this.targetColumn.field);
        break;
      case 'Ungroup':
        this.parent.ungroupColumn(this.targetColumn.field);
        break;
      case 'Edit':
        if (this.parent.editModule) {
          this.parent.editSettings.mode === 'Batch'
            ? this.row &&
              this.cell &&
              !isNaN(parseInt(this.cell.getAttribute(Rr), 10) - 1) &&
              this.parent.editModule.editCell(
                parseInt(this.row.getAttribute(Ir), 10) - 1,
                this.parent.getColumns()[parseInt(this.cell.getAttribute(Rr), 10) - 1].field,
              )
            : (this.parent.editModule.endEdit(), this.parent.editModule.startEdit(this.row));
        }
        break;
      case 'Delete':
        if (this.parent.editModule) {
          if (this.parent.editSettings.mode !== 'Batch') {
            this.parent.editModule.endEdit();
          }
          this.parent.getSelectedRecords().length === 1
            ? (this.parent.isCheckBoxSelection || (this.parent.isFocusFirstCell = true),
              this.parent.editModule.deleteRow(this.row))
            : this.parent.deleteRecord();
        }
        break;
      case 'Save':
        if (this.parent.editModule) {
          if (this.parent.isEdit && this.parent.editSettings.mode !== 'Batch') {
            this.parent.isFocusFirstCell = true;
          }
          this.parent.editModule.endEdit();
        }
        break;
      case 'Cancel':
        if (this.parent.editModule) {
          if (this.parent.isEdit) {
            this.parent.isFocusFirstCell = true;
          }
          this.parent.editModule.closeEdit();
        }
        break;
      case 'Copy':
        this.parent.copy();
        break;
      case 'PdfExport':
        this.parent.pdfExport();
        break;
      case 'ExcelExport':
        this.parent.excelExport();
        break;
      case 'CsvExport':
        this.parent.csvExport();
        break;
      case 'SortAscending':
        {
          this.isOpen = false;
          this.parent.sortColumn(this.targetColumn.field, 'Ascending');
        }
        break;
      case 'SortDescending':
        {
          this.isOpen = false;
          this.parent.sortColumn(this.targetColumn.field, 'Descending');
        }
        break;
      case 'FirstPage':
        this.parent.goToPage(1);
        break;
      case 'PrevPage':
        this.parent.goToPage(this.parent.pageSettings.currentPage - 1);
        break;
      case 'LastPage':
        this.parent.goToPage(this.getLastPage());
        break;
      case 'NextPage':
        this.parent.goToPage(this.parent.pageSettings.currentPage + 1);
        break;
      case 'Bar':
      case 'StackingBar':
      case 'StackingBar100':
      case 'Pie':
      case 'Column':
      case 'StackingColumn':
      case 'StackingColumn100':
      case 'Line':
      case 'StackingLine':
      case 'StackingLine100':
      case 'Area':
      case 'StackingArea':
      case 'StackingArea100':
      case 'Scatter':
        {
          t.records = this.parent.getSelectedRecords();
          t.gridInstance = this.parent;
          t.chartType = e;
        }
        break;
    }
    t.column = this.targetColumn;
    t.rowInfo = this.targetRowdata;
    this.parent.trigger(xs, t);
  };
  r.prototype.contextMenuOnClose = function (t) {
    var e = 'parentObj';
    if (t.items.length > 0 && t.items[0].parentObj instanceof xr) {
      this.updateItemStatus();
    }
    this.parent.notify(Br, { isOpen: false });
  };
  r.prototype.getLocaleText = function (t) {
    return this.l10n.getConstant(this.localeText['' + t]);
  };
  r.prototype.updateItemStatus = function () {
    this.contextMenu.showItems(this.hiddenItems);
    this.contextMenu.enableItems(this.disableItems);
    this.hiddenItems = [];
    this.disableItems = [];
    this.isOpen = false;
  };
  r.prototype.contextMenuBeforeOpen = function (t) {
    var e = it(t.event.target, '.e-grid');
    if (t.event && e && e !== this.parent.element) t.cancel = true;
    else if (
      (t.event &&
        (it(t.event.target, '.' + A.groupHeader) ||
          it(t.event.target, '.' + A.touchPop) ||
          it(t.event.target, '.e-summarycell') ||
          it(t.event.target, '.e-groupcaption') ||
          it(t.event.target, '.e-filterbarcell'))) ||
      (this.parent.editSettings.showAddNewRow &&
        it(t.event.target, '.e-addedrow') &&
        this.parent.element.querySelector('.e-editedrow'))
    )
      t.cancel = true;
    else {
      this.targetColumn = this.getColumn(t.event);
      if (H(t.event.target, 'e-grid')) {
        this.targetRowdata = this.parent.getRowInfo(t.event.target);
      }
      if (p(t.parentItem) && this.targetColumn && this.targetRowdata.cell) {
        this.parent.notify(Br, { isOpen: true });
        this.selectRow(
          t.event,
          !(
            this.targetRowdata.cell.classList.contains('e-selectionbackground') &&
            this.parent.selectionSettings.type === 'Multiple'
          ),
        );
      }
      for (var i = [], n = [], s = 0, o = t.items; s < o.length; s++) {
        var a = o[s];
        var h = this.getKeyFromId(o[s].id);
        var l = this.defaultItems['' + h];
        if (this.getDefaultItems().indexOf(h) !== -1) {
          if (this.ensureDisabledStatus(h)) {
            this.disableItems.push(o[s].text);
          }
          if (t.event && (this.ensureTarget(t.event.target, A.edit) || this.ensureTarget(t.event.target, A.batchEdit)))
            if (h !== 'Save' && h !== 'Cancel') {
              this.hiddenItems.push(o[s].text);
            } else {
              if (
                this.parent.editModule &&
                this.parent.editSettings.mode === 'Batch' &&
                (it(t.event.target, '.e-gridform') ||
                  this.parent.editModule.getBatchChanges()[Rs].length ||
                  this.parent.editModule.getBatchChanges()[Is].length ||
                  this.parent.editModule.getBatchChanges()[Bs].length) &&
                (h === 'Save' || h === 'Cancel')
              )
                continue;
              if (
                p(t.parentItem) &&
                t.event &&
                !p(this.defaultItems['' + h]) &&
                !this.ensureTarget(t.event.target, this.defaultItems['' + h].target)
              ) {
                this.hiddenItems.push(o[s].text);
              }
            }
        } else
          o[s].target && t.event && !this.ensureTarget(t.event.target, o[s].target)
            ? o[s].separator
              ? i.push(o[s].id)
              : this.hiddenItems.push(o[s].text)
            : this.ensureTarget(t.event.target, o[s].target) && o[s].separator && n.push(o[s].id);
      }
      if (n.length > 0) {
        this.contextMenu.showItems(n, true);
      }
      this.contextMenu.enableItems(this.disableItems, false);
      this.contextMenu.hideItems(this.hiddenItems);
      if (i.length > 0) {
        this.contextMenu.hideItems(i, true);
      }
      this.eventArgs = t.event;
      t.column = this.targetColumn;
      t.rowInfo = this.targetRowdata;
      this.parent.trigger(Ls, t);
      if (t.cancel || (this.hiddenItems.length === t.items.length && !t.parentItem)) {
        this.updateItemStatus();
        t.cancel = true;
      }
    }
    Os(this.parent.element, this.contextMenu.element.parentElement);
  };
  r.prototype.contextMenuBeforeClose = function (t) {
    t.column = this.targetColumn;
    t.rowInfo = this.targetRowdata;
    this.parent.trigger(As, t);
  };
  r.prototype.ensureTarget = function (t, e) {
    var i = t;
    this.ensureFrozenHeader(t) && (e === A.header || e === A.content)
      ? (i = it(t, e === A.header ? 'thead' : ne))
      : e === A.content || e === A.header
        ? (i = H(it(t, '.' + Ds), e.substr(1, e.length)))
        : (i = it(t, e));
    return i && H(i, 'e-grid') === this.parent.element;
  };
  r.prototype.ensureFrozenHeader = function (t) {
    return !!(this.parent.frozenRows && it(t, A.header));
  };
  r.prototype.ensureDisabledStatus = function (t) {
    var e = false;
    switch (t) {
      case 'AutoFitAll':
      case 'AutoFit':
        e =
          !(this.parent.ensureModuleInjected(mn) && !this.parent.isEdit) ||
          (this.targetColumn && !this.targetColumn.field && t === 'AutoFit');
        break;
      case 'Group':
        if (
          !this.parent.allowGrouping ||
          (this.parent.ensureModuleInjected(xi) &&
            this.targetColumn &&
            this.parent.groupSettings.columns.indexOf(this.targetColumn.field) >= 0) ||
          (this.targetColumn && !this.targetColumn.field)
        ) {
          e = true;
        }
        break;
      case 'Ungroup':
        if (
          !this.parent.allowGrouping ||
          !this.parent.ensureModuleInjected(xi) ||
          (this.parent.ensureModuleInjected(xi) &&
            this.targetColumn &&
            this.parent.groupSettings.columns.indexOf(this.targetColumn.field) < 0)
        ) {
          e = true;
        }
        break;
      case 'Edit':
      case 'Delete':
      case 'Save':
      case 'Cancel':
        if (!this.parent.editModule || this.parent.getDataRows().length === 0) {
          e = true;
        }
        break;
      case 'Copy':
        if (
          (this.parent.getSelectedRowIndexes().length === 0 && this.parent.getSelectedRowCellIndexes().length === 0) ||
          this.parent.getCurrentViewRecords().length === 0
        ) {
          e = true;
        }
        break;
      case 'export':
        if (
          !(this.parent.allowExcelExport && this.parent.ensureModuleInjected(Xr)) &&
          !(this.parent.allowPdfExport && this.parent.ensureModuleInjected(gn))
        ) {
          e = true;
        }
        break;
      case 'PdfExport':
        if (!this.parent.allowPdfExport || !this.parent.ensureModuleInjected(gn)) {
          e = true;
        }
        break;
      case 'ExcelExport':
      case 'CsvExport':
        if (!this.parent.allowExcelExport || !this.parent.ensureModuleInjected(Xr)) {
          e = true;
        }
        break;
      case 'SortAscending':
      case 'SortDescending':
        if (
          !this.parent.allowSorting ||
          !this.parent.ensureModuleInjected(Fi) ||
          (this.targetColumn && !this.targetColumn.field)
        )
          e = true;
        else if (
          this.parent.ensureModuleInjected(Fi) &&
          this.parent.sortSettings.columns.length > 0 &&
          this.targetColumn
        )
          for (var i = this.parent.sortSettings.columns, n = 0; n < i.length; n++)
            if (
              i[parseInt(n.toString(), 10)].field === this.targetColumn.field &&
              i[parseInt(n.toString(), 10)].direction.toLowerCase() ===
                t.toLowerCase().replace('sort', '').toLocaleLowerCase()
            ) {
              e = true;
            }
        break;
      case 'FirstPage':
      case 'PrevPage':
        if (
          !this.parent.allowPaging ||
          !this.parent.ensureModuleInjected(Je) ||
          this.parent.getCurrentViewRecords().length === 0 ||
          (this.parent.ensureModuleInjected(Je) && this.parent.pageSettings.currentPage === 1)
        ) {
          e = true;
        }
        break;
      case 'LastPage':
      case 'NextPage':
        if (
          !this.parent.allowPaging ||
          !this.parent.ensureModuleInjected(Je) ||
          this.parent.getCurrentViewRecords().length === 0 ||
          (this.parent.ensureModuleInjected(Je) && this.parent.pageSettings.currentPage === this.getLastPage())
        ) {
          e = true;
        }
        break;
      case 'Chart':
        e = !this.parent.getSelectedRecords().length;
        break;
    }
    return e;
  };
  r.prototype.getContextMenu = function () {
    return this.element;
  };
  r.prototype.destroy = function () {
    var t = this.parent.element;
    if (
      !(
        !this.parent.element ||
        (!this.parent.element.querySelector('.' + Hi) && !this.parent.element.querySelector('.' + Te))
      )
    ) {
      if (this.contextMenu) {
        this.contextMenu.select = null;
        this.contextMenu.beforeOpen = null;
        this.contextMenu.onOpen = null;
        this.contextMenu.onClose = null;
      }
      this.removeEventListener();
      this.contextMenu.destroy();
      if (this.element.parentNode) {
        Bt(this.element);
      }
      this.parent.element.classList.remove('e-noselect');
    }
  };
  r.prototype.getModuleName = function () {
    return 'contextMenu';
  };
  r.prototype.generateID = function (t) {
    return this.gridID + '_cmenu_' + t;
  };
  r.prototype.getKeyFromId = function (t) {
    return t.replace(this.gridID + '_cmenu_', '');
  };
  r.prototype.buildDefaultItems = function (t) {
    var e;
    switch (t) {
      case 'AutoFitAll':
        e = {
          target: A.header,
          iconCss: A.autofitall,
        };
        break;
      case 'AutoFit':
        e = {
          target: A.header,
          iconCss: A.autofit,
        };
        break;
      case 'Group':
        e = {
          target: A.header,
          iconCss: A.group,
        };
        break;
      case 'Ungroup':
        e = {
          target: A.header,
          iconCss: A.ungroup,
        };
        break;
      case 'Edit':
        e = {
          target: A.content,
          iconCss: A.editIcon,
        };
        break;
      case 'Delete':
        e = {
          target: A.content,
          iconCss: A.delete,
        };
        break;
      case 'Save':
        e = {
          target: A.edit,
          iconCss: A.save,
        };
        break;
      case 'Cancel':
        e = {
          target: A.edit,
          iconCss: A.cancel,
        };
        break;
      case 'Copy':
        e = {
          target: A.content,
          iconCss: A.copy,
        };
        break;
      case 'export':
        e = { target: A.content };
        break;
      case 'PdfExport':
        e = {
          target: A.content,
          iconCss: A.pdf,
        };
        break;
      case 'ExcelExport':
        e = {
          target: A.content,
          iconCss: A.excel,
        };
        break;
      case 'CsvExport':
        e = {
          target: A.content,
          iconCss: A.csv,
        };
        break;
      case 'SortAscending':
        e = {
          target: A.header,
          iconCss: A.ascending,
        };
        break;
      case 'SortDescending':
        e = {
          target: A.header,
          iconCss: A.descending,
        };
        break;
      case 'FirstPage':
        e = {
          target: A.pager,
          iconCss: A.fPage,
        };
        break;
      case 'PrevPage':
        e = {
          target: A.pager,
          iconCss: A.pPage,
        };
        break;
      case 'LastPage':
        e = {
          target: A.pager,
          iconCss: A.lPage,
        };
        break;
      case 'NextPage':
        e = {
          target: A.pager,
          iconCss: A.nPage,
        };
        break;
      case 'Chart':
        e = {
          target: A.content,
          iconCss: A.chart,
        };
        break;
      case 'BarChart':
        e = {
          target: A.content,
          iconCss: A.barChart,
        };
        break;
      case 'Bar':
        e = {
          target: A.content,
          iconCss: A.bar,
        };
        break;
      case 'StackingBar':
        e = {
          target: A.content,
          iconCss: A.stackingBar,
        };
        break;
      case 'StackingBar100':
        e = {
          target: A.content,
          iconCss: A.stackingBar100,
        };
        break;
      case 'Pie':
        e = {
          target: A.content,
          iconCss: A.pie,
        };
        break;
      case 'ColumnChart':
        e = {
          target: A.content,
          iconCss: A.columnChart,
        };
        break;
      case 'Column':
        e = {
          target: A.content,
          iconCss: A.column,
        };
        break;
      case 'StackingColumn':
        e = {
          target: A.content,
          iconCss: A.stackingColumn,
        };
        break;
      case 'StackingColumn100':
        e = {
          target: A.content,
          iconCss: A.stackingColumn100,
        };
        break;
      case 'LineChart':
        e = {
          target: A.content,
          iconCss: A.lineChart,
        };
        break;
      case 'Line':
        e = {
          target: A.content,
          iconCss: A.line,
        };
        break;
      case 'StackingLine':
        e = {
          target: A.content,
          iconCss: A.stackingLine,
        };
        break;
      case 'StackingLine100':
        e = {
          target: A.content,
          iconCss: A.stackingLine100,
        };
        break;
      case 'AreaChart':
        e = {
          target: A.content,
          iconCss: A.areaChart,
        };
        break;
      case 'Area':
        e = {
          target: A.content,
          iconCss: A.area,
        };
        break;
      case 'StackingArea':
        e = {
          target: A.content,
          iconCss: A.stackingArea,
        };
        break;
      case 'StackingArea100':
        e = {
          target: A.content,
          iconCss: A.stackingArea100,
        };
        break;
      case 'Scatter':
        e = {
          target: A.content,
          iconCss: A.scatter,
        };
        break;
    }
    this.defaultItems['' + t] = {
      text: this.getLocaleText(t),
      id: this.generateID(t),
      target: e.target,
      iconCss: e.iconCss ? 'e-icons ' + e.iconCss : '',
    };
    return this.defaultItems['' + t];
  };
  r.prototype.getDefaultItems = function () {
    return [
      'AutoFitAll',
      'AutoFit',
      'Group',
      'Ungroup',
      'Edit',
      'Delete',
      'Save',
      'Cancel',
      'Copy',
      'export',
      'PdfExport',
      'ExcelExport',
      'CsvExport',
      'SortAscending',
      'SortDescending',
      'FirstPage',
      'PrevPage',
      'LastPage',
      'NextPage',
      'Chart',
      'BarChart',
      'ColumnChart',
      'LineChart',
      'AreaChart',
    ].concat(this.chartList);
  };
  r.prototype.setLocaleKey = function () {
    var t = {
      AutoFitAll: 'autoFitAll',
      AutoFit: 'autoFit',
      Copy: 'Copy',
      Group: 'Group',
      Ungroup: 'Ungroup',
      Edit: 'EditRecord',
      Delete: 'DeleteRecord',
      Save: 'Save',
      Cancel: 'CancelButton',
      PdfExport: 'Pdfexport',
      ExcelExport: 'Excelexport',
      CsvExport: 'Csvexport',
      export: 'Export',
      SortAscending: 'SortAscending',
      SortDescending: 'SortDescending',
      FirstPage: 'FirstPage',
      LastPage: 'LastPage',
      PrevPage: 'PreviousPage',
      NextPage: 'NextPage',
      Chart: 'Chart',
      BarChart: 'BarChart',
      Bar: 'Bar',
      StackingBar: 'StackingBar',
      StackingBar100: 'StackingBar100',
      Pie: 'Pie',
      ColumnChart: 'ColumnChart',
      Column: 'Column',
      StackingColumn: 'StackingColumn',
      StackingColumn100: 'StackingColumn100',
      LineChart: 'LineChart',
      Line: 'Line',
      StackingLine: 'StackingLine',
      StackingLine100: 'StackingLine100',
      AreaChart: 'AreaChart',
      Area: 'Area',
      StackingArea: 'StackingArea',
      StackingArea100: 'StackingArea100',
      Scatter: 'Scatter',
    };
    return t;
  };
  r.prototype.getColumn = function (t) {
    var e = it(t.target, 'th.e-headercell');
    if (e) {
      var i = e.querySelector('.e-headercelldiv, .e-stackedheadercelldiv').getAttribute('data-mappinguid');
      return this.parent.getColumnByUid(i);
    } else {
      var n = this.parent.getRowInfo(t.target).column;
      return this.parent.getRowInfo(t.target).column || null;
    }
  };
  r.prototype.selectRow = function (t, e) {
    this.cell = t.target;
    this.row = it(t.target, 'tr.e-row') || this.row;
    if (this.row && e && !H(t.target, 'e-gridpager')) {
      this.parent.selectRow(parseInt(this.row.getAttribute(Ir), 10) - 1);
    }
  };
  return r;
})();
var ja = (function () {
  function r(t) {
    Be.Inject(mn);
    this.parent = t;
  }
  r.prototype.autoFitColumns = function (t) {
    this.parent.grid.autoFitColumns(t);
  };
  r.prototype.getModuleName = function () {
    return 'resize';
  };
  r.prototype.destroy = function () {
    if (!this.parent.isDestroyed) {
      this.parent.grid.resizeModule.destroy();
    }
  };
  return r;
})();
var Ga = (function () {
  function r(t) {
    this.canDrop = true;
    this.isDraggedWithChild = false;
    this.modifiedRecords = 'modifiedRecords';
    this.selectedRecords = 'selectedRecords';
    this.selectedRows = 'selectedRows';
    this.hasDropItem = true;
    this.isaddtoBottom = false;
    Be.Inject(ks);
    this.parent = t;
    this.addEventListener();
  }
  r.prototype.getChildrecordsByParentID = function (t) {
    var e;
    this.parent.dataSource instanceof ut && we(this.parent)
      ? (e = this.parent.grid.dataSource.dataSource.json)
      : (e = this.parent.grid.dataSource);
    var i = e.filter(function (n) {
      return n.uniqueID === t;
    });
    return i;
  };
  r.prototype.addEventListener = function () {
    this.parent.on(Lr, this.Rowdraging, this);
    this.parent.on(Or, this.rowDropped, this);
    this.parent.on(Si, this.rowsAdded, this);
    this.parent.on(Ci, this.rowsRemoved, this);
  };
  r.prototype.reorderRows = function (t, e, i) {
    var n = this.parent;
    if (!(t[0] === e || ['above', 'below', 'child'].indexOf(i) === -1)) {
      var s = 'action';
      var o = 'dropPosition';
      if (t[0] !== e && ['above', 'below', 'child'].indexOf(i) !== -1) {
        if (i === 'above') {
          this.dropPosition = 'topSegment';
        }
        if (i === 'below') {
          this.dropPosition = 'bottomSegment';
        }
        if (i === 'child') {
          this.dropPosition = 'middleSegment';
        }
        this.parent.dropPosition = this.dropPosition;
        for (var a = [], h = 0; h < t.length; h++) {
          var l = this.parent.getRowByIndex(t[parseInt(h.toString(), 10)]).rowIndex;
          a[parseInt(h.toString(), 10)] =
            this.parent.getCurrentViewRecords()[
              parseInt(this.parent.getRowByIndex(t[parseInt(h.toString(), 10)]).rowIndex.toString(), 10)
            ];
        }
        var u = true;
        var d = {
          data: a,
          dropIndex: e,
        };
        if (!se(this.parent)) {
          this.dropRows(d, u);
        }
        if (n.isLocalData) {
          n.flatData = this.orderToIndex(n.flatData);
        }
        if (this.parent.action === 'outdenting') {
          if (!p(a[0].parentItem)) {
            a[0].level = a[0].parentItem.level + 1;
          }
        }
        this.parent.grid.refresh();
        if (this.parent.enableImmutableMode && this.dropPosition === 'middleSegment') {
          var l = this.parent.allowRowDragAndDrop
            ? this.parent.treeColumnIndex + 1
            : this.parent.action === 'indenting'
              ? this.parent.treeColumnIndex
              : void 0;
          var c = this.parent.getRows()[t[0]];
          var f = d.data[0];
          var g = [];
          var y = [];
          g.push(d.data[0]);
          y.push(this.parent.getRows()[t[0]]);
          var m = 'parentUniqueID';
          var w = gt(this.parent, d.data[0].parentUniqueID);
          var b = this.parent.getRows()[parseInt(e.toString(), 10)];
          g.push(w);
          y.push(this.parent.getRows()[parseInt(e.toString(), 10)]);
          this.updateRowAndCellElements(g, y, l);
        }
        if (this.parent.enableImmutableMode && this.parent.action === 'outdenting') {
          var l = this.parent.allowRowDragAndDrop
            ? this.parent.treeColumnIndex + 1
            : this.parent.action === 'outdenting'
              ? this.parent.treeColumnIndex
              : void 0;
          var v = d.data[0];
          var c = this.parent.getRows()[t[0]];
          var g = [];
          var y = [];
          g.push(d.data[0]);
          y.push(this.parent.getRows()[t[0]]);
          this.updateRowAndCellElements(g, y, l);
        }
      }
    }
  };
  r.prototype.updateRowAndCellElements = function (t, e, i) {
    for (var n = 0; n < t.length; n++) {
      this.parent.renderModule.cellRender({
        data: t[parseInt(n.toString(), 10)],
        cell: e[parseInt(n.toString(), 10)].cells[parseInt(i.toString(), 10)],
        column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
        requestType: 'rowDragAndDrop',
      });
      if (this.parent.action === 'indenting' || this.parent.action === 'outdenting') {
        this.parent.renderModule.RowModifier({
          data: t[parseInt(n.toString(), 10)],
          row: e[parseInt(n.toString(), 10)],
        });
      }
    }
  };
  r.prototype.indentOutdentAction = function (t, e) {
    var i = this.parent;
    var n = 'action';
    var s = 'dropIndex';
    var o = -1;
    if (!(p(t) && this.parent.selectedRowIndex === -1)) {
      this.parent.enableVirtualization && this.parent.selectedRowIndex !== -1
        ? (o = this.parent.getSelectedRows()[0].rowIndex)
        : this.parent.selectedRowIndex !== -1 && (o = this.parent.selectedRowIndex);
      this.selectedItem = p(t) ? i.getCurrentViewRecords()[parseInt(o.toString(), 10)] : t;
      var a = this.parent.getPrimaryKeyFieldNames()[0];
      var h = this.parent.grid.getRowIndexByPrimaryKey(
        this.selectedItem['' + this.parent.getPrimaryKeyFieldNames()[0]],
      );
      this.selectedRow = this.parent[this.selectedRows] =
        o !== -1 ? this.parent.getSelectedRows()[0] : this.parent.grid.getRowByIndex(h);
      this.selectedRecord = this.parent[this.selectedRecords] =
        o !== -1 ? i.getCurrentViewRecords()[parseInt(o.toString(), 10)] : this.selectedItem;
      if (e === 'indent') {
        var l = i.getCurrentViewRecords()[this.selectedRow.rowIndex - 1];
        var u = void 0;
        if (
          this.selectedRow.rowIndex === 0 ||
          this.selectedRow.rowIndex === -1 ||
          i.getCurrentViewRecords()[this.selectedRow.rowIndex].level -
            i.getCurrentViewRecords()[this.selectedRow.rowIndex - 1].level ===
            1
        )
          return;
        if (i.getCurrentViewRecords()[this.selectedRow.rowIndex - 1].level > this.selectedRecord.level)
          for (var d = 0; d < i.getCurrentViewRecords().length; d++)
            if (
              i.getCurrentViewRecords()[parseInt(d.toString(), 10)].taskData ===
              i.getCurrentViewRecords()[this.selectedRow.rowIndex - 1].parentItem.taskData
            ) {
              u = d;
              if (i.enableVirtualization) {
                u = parseInt(i.getRows()[parseInt(d.toString(), 10)].getAttribute('aria-rowindex'), 10) - 1;
              }
            } else u = this.selectedRow.rowIndex - 1;
        if (
          this.parent.enableVirtualization &&
          this.selectedRecord &&
          !(i.getCurrentViewRecords()[this.selectedRow.rowIndex - 1].level > this.selectedRecord.level)
        ) {
          u = parseInt(this.selectedRow.getAttribute('aria-rowindex'), 10) - 2;
        }
        i.action = 'indenting';
        i.dropIndex = u;
        this.eventTrigger('indenting', u);
      } else if (e === 'outdent') {
        var c = this.selectedRow.rowIndex === -1 || this.selectedRow.rowIndex === 0;
        var f = i.getCurrentViewRecords()[this.selectedRow.rowIndex].level === 0;
        if (c || f) return;
        var g = this.selectedRecord.parentItem;
        var y = i.getCurrentViewRecords();
        var u = y.findIndex(function (b) {
          return b.uniqueID === this.selectedRecord.parentItem.uniqueID;
        });
        if (u === -1) return;
        if (this.parent.enableVirtualization && this.selectedRecord) {
          var m = this.parent.getRows()[parseInt(u.toString(), 10)].getAttribute('aria-rowindex');
          u = parseInt(m, 10) - 1;
        }
        i.action = 'outdenting';
        i.dropIndex = u;
        this.eventTrigger('outdenting', u);
      }
    }
  };
  r.prototype.eventTrigger = function (t, e) {
    var i = this;
    var n = {
      action: t,
      cancel: false,
      data: [this.parent[this.selectedRecords]],
      row: this.parent[this.selectedRows],
    };
    this.parent.trigger(Ai, n, function (s) {
      if (!s.cancel) {
        s.action === 'indenting'
          ? i.parent.enableVirtualization
            ? i.reorderRows([parseInt(i.selectedRow.getAttribute('aria-rowindex'), 10) - 1], e, 'child')
            : i.reorderRows([i.selectedRow.rowIndex], e, 'child')
          : s.action === 'outdenting' &&
            (i.parent.enableVirtualization
              ? i.reorderRows([parseInt(i.selectedRow.getAttribute('aria-rowindex'), 10) - 1], e, 'below')
              : i.reorderRows([i.selectedRow.rowIndex], e, 'below'));
      }
    });
  };
  r.prototype.orderToIndex = function (t) {
    for (var e = 0; e < t.length; e++) {
      t[parseInt(e.toString(), 10)].index = e;
      if (!p(t[parseInt(e.toString(), 10)].parentItem)) {
        var i = Rt('uniqueIDCollection.' + t[parseInt(e.toString(), 10)].parentUniqueID, this.parent);
        t[parseInt(e.toString(), 10)].parentItem.index = i.index;
      }
    }
    return t;
  };
  r.prototype.rowsAdded = function (t) {
    for (var e, i = t.records, n = t.records.length - 1; n > -1; n--) {
      e = i[parseInt(n.toString(), 10)];
      if (e.parentUniqueID) {
        var s = i.filter(function (m) {
          return m.uniqueID === e.parentUniqueID;
        });
        if (s.length) {
          var o = s[0].childRecords.indexOf(e);
          var a = s[0];
          if (o !== -1) {
            if (p(this.parent.idMapping)) {
              a.childRecords.splice(o, 1);
              if (!a.childRecords.length) {
                a.hasChildRecords = false;
                a.hasFilteredChildRecords = false;
              }
            }
            this.isDraggedWithChild = true;
          }
        }
      }
    }
    if (p(this.parent.dataSource) || !this.parent.dataSource.length) {
      for (var h = this.parent, l, u = t.records, d = t.records.length, n = d - 1; n > -1; n--) {
        l = u[parseInt(n.toString(), 10)];
        if (!n && l.hasChildRecords) {
          l.taskData[this.parent.parentIdMapping] = null;
        }
        var c = 0;
        if (!p(h.parentIdMapping)) {
          h.childMapping = null;
        }
        if (!p(l.taskData) && !p(h.childMapping) && !Object.prototype.hasOwnProperty.call(l.taskData, h.childMapping)) {
          l.taskData[h.childMapping] = [];
        }
        if (
          !p(l[h.childMapping]) &&
          Object.prototype.hasOwnProperty.call(l, h.childMapping) &&
          l[h.childMapping].length &&
          !this.isDraggedWithChild &&
          !p(h.parentIdMapping)
        )
          for (var f = l[h.childMapping], g = 0; g < f.length; g++)
            if (u.indexOf(f[parseInt(g.toString(), 10)]) === -1) {
              u.splice(g, 0, f[parseInt(g.toString(), 10)]);
              f[parseInt(g.toString(), 10)].taskData = Vt({}, f[parseInt(g.toString(), 10)]);
              n += 1;
            }
        if (
          Object.prototype.hasOwnProperty.call(l, h.parentIdMapping) &&
          l[h.parentIdMapping] !== null &&
          !this.isDraggedWithChild
        ) {
          l.taskData[h.parentIdMapping] = null;
          delete l.parentItem;
          delete l.parentUniqueID;
        }
        if (p(h.dataSource)) {
          h.dataSource = [];
        }
        h.dataSource.splice(0, 0, l.taskData);
      }
      h.setProperties({ dataSource: h.dataSource }, false);
    } else {
      for (var n = 0; n < i.length; n++)
        $('uniqueIDCollection.' + i[parseInt(n.toString(), 10)].uniqueID, i[parseInt(n.toString(), 10)], this.parent);
      var y = {
        data: t.records,
        dropIndex: t.toIndex,
      };
      this.parent.dataSource instanceof ut
        ? ((this.treeGridData = this.parent.dataSource.dataSource.json),
          (this.treeData = this.parent.dataSource.dataSource.json))
        : ((this.treeGridData = this.parent.grid.dataSource), (this.treeData = this.parent.dataSource));
      if (p(this.dropPosition)) {
        this.dropPosition = 'bottomSegment';
        y.dropIndex =
          this.parent.getCurrentViewRecords().length > 1 ? this.parent.getCurrentViewRecords().length - 1 : y.dropIndex;
        y.data = y.data.map(function (m) {
          return m.hasChildRecords && p(m.parentItem)
            ? ((m.level = 0), m)
            : (delete m.parentItem, delete m.parentUniqueID, (m.level = 0), m);
        });
      }
      this.dropRows(y);
    }
  };
  r.prototype.rowsRemoved = function (t) {
    for (var e = 0; e < t.records.length; e++) {
      this.draggedRecord = t.records[parseInt(e.toString(), 10)];
      if (
        this.draggedRecord.hasChildRecords ||
        (this.draggedRecord.parentItem &&
          this.parent.grid.dataSource.indexOf(this.getChildrecordsByParentID(this.draggedRecord.parentUniqueID)[0]) !==
            -1) ||
        this.draggedRecord.level === 0
      ) {
        this.deleteDragRow();
      }
    }
  };
  r.prototype.refreshGridDataSource = function () {
    var t = this.draggedRecord;
    var e = this.droppedRecord;
    var i = this.parent;
    var n;
    var s;
    this.parent.dataSource instanceof ut && we(this.parent)
      ? (n = this.parent.dataSource.dataSource.json)
      : (n = this.parent.dataSource);
    if (n && !p(this.droppedRecord) && !this.droppedRecord.parentItem && !p(this.droppedRecord.taskData)) {
      for (var o = Object.keys(n), a = 0; a < o.length; a++)
        if (n[parseInt(a.toString(), 10)][this.parent.childMapping])
          if (
            n[parseInt(a.toString(), 10)][this.parent.childMapping] ===
            this.droppedRecord.taskData[this.parent.childMapping]
          ) {
            s = a;
          } else {
            var h = this.parent.getPrimaryKeyFieldNames()[0];
            if (
              n[parseInt(a.toString(), 10)]['' + this.parent.getPrimaryKeyFieldNames()[0]] ===
              this.droppedRecord.taskData['' + this.parent.getPrimaryKeyFieldNames()[0]]
            ) {
              s = a;
            }
          }
      if (!this.parent.idMapping) {
        var l = this.dropPosition === 'topSegment' ? 0 : 1;
        if (this.dropPosition === 'topSegment' || this.dropPosition === 'bottomSegment') {
          n.splice(s + l, 0, t.taskData);
        }
      }
    } else if (
      !this.parent.parentIdMapping &&
      !p(this.droppedRecord) &&
      this.droppedRecord.parentItem &&
      (this.dropPosition === 'topSegment' || this.dropPosition === 'bottomSegment')
    )
      for (
        var u = this.getChildrecordsByParentID(this.droppedRecord.parentUniqueID)[0], d = u.childRecords, a = 0;
        a < d.length;
        a++
      )
        this.droppedRecord.parentItem.taskData[this.parent.childMapping][parseInt(a.toString(), 10)] =
          d[parseInt(a.toString(), 10)].taskData;
    if (this.parent.parentIdMapping) {
      t.parentItem
        ? this.dropPosition === 'topSegment' || this.dropPosition === 'bottomSegment'
          ? ((t[this.parent.parentIdMapping] = this.droppedRecord[this.parent.parentIdMapping]),
            (t.taskData[this.parent.parentIdMapping] = this.droppedRecord[this.parent.parentIdMapping]))
          : ((t[this.parent.parentIdMapping] = this.droppedRecord[this.parent.idMapping]),
            (t.taskData[this.parent.parentIdMapping] = this.droppedRecord[this.parent.idMapping]))
        : ((t.taskData[this.parent.parentIdMapping] = null), (t[this.parent.parentIdMapping] = null));
    }
  };
  r.prototype.removeFirstrowBorder = function (t) {
    var e = this.dropPosition === 'bottomSegment';
    if (this.parent.element.getElementsByClassName('e-firstrow-border').length > 0 && t && (t.rowIndex !== 0 || e)) {
      this.parent.element.getElementsByClassName('e-firstrow-border')[0].remove();
    }
  };
  r.prototype.removeLastrowBorder = function (t) {
    if (t) {
      var e =
        t.classList.contains('e-emptyrow') ||
        t.classList.contains('e-columnheader') ||
        t.classList.contains('e-detailrow');
      if (!e) {
        var i = this.parent.enableVirtualization
          ? this.parent.getRows()[this.parent.getCurrentViewRecords().length - 1]
          : this.parent.getRowByIndex(this.parent.getCurrentViewRecords().length - 1);
        var n = i.getAttribute('data-uid') !== t.getAttribute('data-uid');
        var s = n || this.dropPosition === 'topSegment';
        var o = this.parent.element.getElementsByClassName('e-lastrow-border')[0];
        if (this.parent.element.getElementsByClassName('e-lastrow-border')[0] && s) {
          this.parent.element.getElementsByClassName('e-lastrow-border')[0].remove();
        }
      }
    }
  };
  r.prototype.updateIcon = function (t, e, i) {
    var n = i.target ? it(i.target, 'tr') : null;
    this.dropPosition = void 0;
    var s = 0;
    this.removeFirstrowBorder(n);
    this.removeLastrowBorder(n);
    for (var o = 0; o < i.rows.length; o++)
      if (
        (!p(n) && n.getAttribute('data-uid') === i.rows[parseInt(o.toString(), 10)].getAttribute('data-uid')) ||
        !H(i.target, 'e-gridcontent')
      ) {
        this.dropPosition = 'Invalid';
        this.addErrorElem();
        if (p(this.parent.rowDropSettings.targetID)) {
          this.removetopOrBottomBorder();
          this.removeChildBorder();
        }
      }
    var a = this.parent;
    var h = 0;
    var l = 0;
    var u =
      this.parent.toolbar && this.parent.toolbar.length
        ? document.getElementById(this.parent.element.id + '_gridcontrol_toolbarItems').offsetHeight
        : 0;
    var d = this.getOffset(this.parent.element);
    var c = this.parent.getHeaderContent().offsetHeight + d.top + u;
    var f = this.parent.getContent().firstElementChild.scrollTop;
    if (!p(n)) {
      s = n.offsetTop - this.parent.getContent().firstElementChild.scrollTop;
    }
    this.parent.enableVirtualization ? (h = n.getBoundingClientRect().top) : (h = s + c + 0);
    var g = t[0].offsetHeight !== 0 && p(n) ? h + t[0].offsetHeight : h + n.offsetHeight;
    var y = g - h;
    var m = y / 3;
    var w = h + m;
    var b = w + m;
    var v = b + m;
    var x = ee('originalEvent.event', i);
    var P = ee('originalEvent.event', i);
    var B = x.type === 'mousemove' ? x.pageY : !p(P) && !p(P.changedTouches) ? P.changedTouches[0].pageY : null;
    if (this.parent.enableVirtualization) {
      B = x.type === 'mousemove' ? x.clientY : !p(P) && !p(P.changedTouches) ? P.changedTouches[0].clientY : null;
    }
    var R = B <= w;
    var L = B > w && B <= b;
    var O = B > b && B <= v;
    var T = true;
    if (R || L || O) {
      if (R && this.dropPosition !== 'Invalid') {
        this.removeChildBorder();
        this.dropPosition = 'topSegment';
        this.removetopOrBottomBorder();
        this.addFirstrowBorder(n);
        this.removeErrorElem();
        this.removeLastrowBorder(n);
      }
      if (L && this.dropPosition !== 'Invalid') {
        this.removetopOrBottomBorder();
        this.dropPosition = 'middleSegment';
        this.addLastRowborder(n);
        this.addFirstrowBorder(n);
      }
      if (O && this.dropPosition !== 'Invalid') {
        this.removeErrorElem();
        this.removetopOrBottomBorder();
        this.removeChildBorder();
        this.dropPosition = 'bottomSegment';
        this.addLastRowborder(n);
        this.removeFirstrowBorder(n);
      }
      if ((R || O) && this.dropPosition !== 'Invalid') {
        T = this.updateBorderStatus(t, e);
        this.topOrBottomBorder(i.target, T);
      } else if (L && this.dropPosition !== 'Invalid') {
        var M = [];
        var F = it(i.target, 'tr');
        M = [].slice.call(F.querySelectorAll('.e-rowcell,.e-rowdragdrop,.e-detailrowcollapse'));
        T = this.updateBorderStatus(t, e);
        if (M.length > 0 && T) {
          this.addRemoveClasses(M, true, 'e-childborder');
        }
      }
    }
    return this.dropPosition;
  };
  r.prototype.updateBorderStatus = function (t, e) {
    var i = this;
    var n = true;
    var s = this.parent.grid.getRows();
    var o = [];
    var a = false;
    if (!p(this.parent.detailTemplate)) {
      s = this.parent.getDataRows();
      a = true;
    }
    var h = this.parent.treeColumnIndex;
    var l = this.parent.allowRowDragAndDrop
      ? a
        ? this.parent.treeColumnIndex + 2
        : this.parent.treeColumnIndex + 1
      : a
        ? this.parent.treeColumnIndex + 1
        : this.parent.treeColumnIndex;
    if (!p(this.parent.rowDropSettings.targetID)) {
      l = this.parent.treeColumnIndex;
    }
    var u = t;
    var d = [s['' + e]];
    if (this.dropPosition === 'topSegment') {
      t.filter(function (c) {
        if (p(c) || p(c.cells) || p(d[0]) || p(d[0].cells)) return true;
        var f = /index(\d+)|level(\d+)/g;
        var g = c?.cells['' + l].className.match(f);
        var y = d[0].cells['' + l].className.match(f);
        if (p(y) || p(y) || p(g)) return true;
        var m = +g[1].match(/\d+/)[0];
        var w = +y[1].match(/\d+/)[0];
        var b = false;
        if (m !== 0 && m !== w) return true;
        for (var v = 0; v < s.length; v++) {
          if (s[parseInt(v.toString(), 10)] === t[0]) {
            b = true;
          }
          if (b && s[parseInt(v.toString(), 10)] !== t[0]) {
            var x = s[parseInt(v.toString(), 10)].cells['' + l].className.match(f);
            var P = +x[1].match(/\d+/)[0];
            if (P !== m && P > m) o.push(s[parseInt(v.toString(), 10)]);
            else break;
          }
        }
        if (
          m === w &&
          ((o.length > 0 && parseInt(t[0].getAttribute('aria-rowindex'), 10) - 1 === e - (o.length + 1)) ||
            (o.length === 0 && parseInt(t[0].getAttribute('aria-rowindex'), 10) - 1 === e - 1))
        ) {
          n = false;
        }
        return true;
      });
      n =
        !p(t) &&
        o.length === 0 &&
        !p(t[0].getAttribute('aria-rowindex')) &&
        parseInt(t[0].getAttribute('aria-rowindex'), 10) - 1 === e - 1 &&
        p(t[0])
          ? false
          : n;
    }
    if (this.dropPosition === 'bottomSegment') {
      d.filter(function (c) {
        if (p(c) || p(c.cells) || p(t[0]) || p(t[0].cells)) return true;
        var f = /index(\d+)|level(\d+)/g;
        var g = c?.cells['' + l].className.match(f);
        var y = t[0].cells['' + l].className.match(f);
        if (p(y) || p(g)) return true;
        var m = +g[1].match(/\d+/)[0];
        var w = +y[1].match(/\d+/)[0];
        var b = false;
        if (m !== 0 && m !== w) return true;
        for (var v = 0; v < s.length; v++) {
          if (s[parseInt(v.toString(), 10)] === d[0]) {
            b = true;
          }
          if (b && s[parseInt(v.toString(), 10)] !== d[0]) {
            var x = s[parseInt(v.toString(), 10)].cells['' + l].className.match(f);
            var P = +x[1].match(/\d+/)[0];
            if (P !== m && P > m) o.push(s[parseInt(v.toString(), 10)]);
            else break;
          }
        }
        if (
          !p(t) &&
          m === w &&
          ((o.length > 0 &&
            !p(t[0].getAttribute('aria-rowindex')) &&
            parseInt(t[0].getAttribute('aria-rowindex'), 10) - 1 === e + (o.length + 1)) ||
            (o.length === 0 &&
              !p(t[0].getAttribute('aria-rowindex')) &&
              parseInt(t[0].getAttribute('aria-rowindex'), 10) - 1 === e + 1))
        ) {
          n = false;
        }
        return true;
      });
      n =
        !p(t) &&
        o.length === 0 &&
        !p(t[0].getAttribute('aria-rowindex')) &&
        parseInt(t[0].getAttribute('aria-rowindex'), 10) - 1 === e + 1 &&
        p(t[0])
          ? false
          : n;
    }
    if (this.dropPosition === 'middleSegment') {
      d.filter(function (c) {
        if (p(c) || p(c.cells) || p(t[0]) || p(t[0].cells)) return true;
        for (var f = 0; f < t.length; f++) {
          var g = /index(\d+)|level(\d+)/g;
          var y = d[0].rowIndex;
          var m = t[parseInt(f.toString(), 10)].cells['' + l].className.match(g);
          if (!m) return true;
          var w = parseInt(
            m
              .find(function (b) {
                return b.includes('index');
              })
              .match(/\d+/)[0] || '0',
            10,
          );
          if (a) {
            y = y / 2;
          }
          if (w === y && !i.parent.rowDropSettings.targetID) n = false;
          else {
            n = true;
            break;
          }
        }
        if (!n) {
          i.dropPosition = 'Invalid';
          i.addErrorElem();
        }
        return n;
      });
    }
    this.canDrop = n;
    return n;
  };
  r.prototype.removeChildBorder = function () {
    var t = [];
    t = [].slice.call(this.parent.element.querySelectorAll('.e-childborder'));
    if (t.length > 0) {
      this.addRemoveClasses(t, false, 'e-childborder');
    }
  };
  r.prototype.addFirstrowBorder = function (t) {
    var e = this.parent.element;
    var i = this.parent;
    if (t && t.rowIndex === 0 && !t.classList.contains('e-emptyrow')) {
      var n = this.parent.createElement('div', { className: 'e-firstrow-border' });
      var s = this.parent.getHeaderContent();
      var o = 0;
      if (this.parent.toolbar) {
        o = this.parent.toolbarModule.getToolbar().offsetHeight;
      }
      var a = !p(this.parent.rowDropSettings.targetID);
      if (a) {
        n.style.top = this.parent.grid.element.getElementsByClassName('e-gridheader')[0].offsetHeight + o + 'px';
      }
      n.style.width = a
        ? this.parent.element.offsetWidth + 'px'
        : this.parent.element.offsetWidth - this.getScrollWidth() + 'px';
      if (!s.querySelectorAll('.e-firstrow-border').length) {
        s.appendChild(n);
      }
    }
  };
  r.prototype.addLastRowborder = function (t) {
    if (t) {
      var e =
        t &&
        (t.classList.contains('e-emptyrow') ||
          t.classList.contains('e-columnheader') ||
          t.classList.contains('e-detailrow'));
      if (
        !e &&
        t &&
        !e &&
        this.parent.getRows()[this.parent.getCurrentViewRecords().length - 1].getAttribute('data-uid') ===
          t.getAttribute('data-uid')
      ) {
        var i = this.parent.createElement('div', { className: 'e-lastrow-border' });
        var n = this.parent.getContent();
        i.style.width = this.parent.element.offsetWidth - this.getScrollWidth() + 'px';
        if (!n.querySelectorAll('.e-lastrow-border').length) {
          n.classList.add('e-treegrid-relative');
          n.appendChild(i);
          i.style.bottom = this.getScrollWidth() + 'px';
        }
      }
    }
  };
  r.prototype.getScrollWidth = function () {
    var t = this.parent.getContent().firstElementChild;
    return this.parent.getContent().firstElementChild.scrollWidth >
      this.parent.getContent().firstElementChild.offsetWidth
      ? Ts.getScrollBarWidth()
      : 0;
  };
  r.prototype.addErrorElem = function () {
    var t = document.getElementsByClassName('e-cloneproperties')[0];
    var e = document.getElementsByClassName('e-cloneproperties')[0].querySelectorAll('.e-errorelem').length;
    var i = 'sanitize';
    if (
      !document.getElementsByClassName('e-cloneproperties')[0].querySelectorAll('.e-errorelem').length &&
      !this.parent.rowDropSettings.targetID
    ) {
      var n = document.createElement('div');
      n.classList.add('e-errorcontainer', 'e-icons', 'e-errorelem');
      var s = document.getElementsByClassName('e-cloneproperties')[0].querySelector('.e-rowcell');
      var o = document.getElementsByClassName('e-cloneproperties')[0].querySelector('.errorValue');
      var a = s.innerHTML;
      if (o) {
        a = this.parent.sanitize(o.innerHTML);
        o.parentNode.removeChild(o);
      }
      s.innerHTML = '';
      var h = document.createElement('span');
      h.className = 'errorValue';
      h.style.paddingLeft = '16px';
      h.innerHTML = this.parent.sanitize(a);
      s.appendChild(n);
      s.appendChild(h);
      var l = document.querySelector('.e-dropitemscount');
      if (this.hasDropItem && l) {
        var u = parseInt(l.style.left, 10) + n.offsetWidth + 16;
        var d = this.parent.enableRtl ? 0 : u;
        l.style.left = d + 'px';
        this.hasDropItem = false;
      }
    }
  };
  r.prototype.removeErrorElem = function () {
    var t = document.querySelector('.e-errorelem');
    var e = document.querySelector('.errorValue');
    var i = document.querySelector('.e-dropitemscount');
    if (t) {
      if (i) {
        var n = parseInt(i.style.left, 10) - t.offsetWidth - 16;
        Ar(e, { paddingLeft: '0px' });
        if (!this.parent.enableRtl) {
          Ar(i, { left: n + 'px' });
        }
      }
      t.remove();
    }
    this.hasDropItem = true;
  };
  r.prototype.topOrBottomBorder = function (t, e) {
    if (e === void 0) {
      e = true;
    }
    var i = it(t, 'tr');
    var n = i ? Array.from(i.querySelectorAll('.e-rowcell, .e-rowdragdrop, .e-detailrowcollapse')) : [];
    if (n.length) {
      var s = e
        ? this.addRemoveClasses.bind(this, n, true)
        : this.addRemoveClasses.bind(this, n, false, 'e-dragborder');
      if (this.dropPosition === 'topSegment') {
        s('e-droptop');
        var o = this.parent.element.querySelector('.e-lastrow-dragborder');
        if (o) {
          o.remove();
        }
      }
      if (this.dropPosition === 'bottomSegment') {
        s('e-dropbottom');
      }
    }
  };
  r.prototype.removetopOrBottomBorder = function () {
    var t = [];
    t = [].slice.call(this.parent.element.querySelectorAll('.e-dropbottom, .e-droptop'));
    if (this.parent.rowDropSettings.targetID) {
      t = [].slice.call(document.querySelectorAll('.e-dropbottom, .e-droptop'));
    }
    if (t.length) {
      this.addRemoveClasses(t, false, 'e-dropbottom');
      this.addRemoveClasses(t, false, 'e-droptop');
    }
  };
  r.prototype.addRemoveClasses = function (t, e, i) {
    for (var n = 0, s = t.length; n < s; n++)
      e ? t[parseInt(n.toString(), 10)].classList.add(i) : t[parseInt(n.toString(), 10)].classList.remove(i);
  };
  r.prototype.getOffset = function (t) {
    var e = t.getBoundingClientRect();
    var i = document.body;
    var n = document.documentElement;
    var s = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var o = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
    var a = document.documentElement.clientTop || document.body.clientTop || 0;
    var h = document.documentElement.clientLeft || document.body.clientLeft || 0;
    var l = e.top + s - a;
    var u = e.left + o - h;
    return {
      top: Math.round(l),
      left: Math.round(u),
    };
  };
  r.prototype.Rowdraging = function (t) {
    var e = this.parent;
    var i = this.parent.element.querySelector('.e-cloneproperties');
    if (i) {
      i.style.cursor = '';
      var n = t.target ? it(t.target, 'tr') : null;
      var s = -1;
      p(this.parent.detailTemplate) ? (s = n ? n.rowIndex : -1) : (s = n ? this.parent.getDataRows().indexOf(n) : -1);
      if (s === -1) {
        this.canDrop = false;
        this.addErrorElem();
        this.removetopOrBottomBorder();
        this.removeChildBorder();
        return;
      }
      var o = Array.isArray(t.data) ? t.data : [t.data];
      var a = this.parent.getCurrentViewRecords()[parseInt(s.toString(), 10)];
      if (this.parent.rowDropSettings.targetID) {
        var h = H(t.target, 'e-treegrid');
        if (h && h.id === this.parent.rowDropSettings.targetID) {
          var l = h.ej2_instances[0];
          a = h.ej2_instances[0].getCurrentViewRecords()[parseInt(s.toString(), 10)];
        }
      }
      this.removeErrorElem();
      this.canDrop = true;
      this.ensuredropPosition(o, a);
      if (!this.parent.rowDropSettings.targetID && this.canDrop && !p(t.rows[0])) {
        this.parent.rowDragAndDropModule.updateIcon(t.rows, s, t);
      }
      if (this.parent.rowDropSettings.targetID) {
        var h = H(t.target, 'e-treegrid');
        if (h && h.id === this.parent.rowDropSettings.targetID) {
          var l = h.ej2_instances[0];
          h.ej2_instances[0].rowDragAndDropModule.updateIcon(t.rows, s, t);
          this.dropPosition = h.ej2_instances[0].rowDragAndDropModule.dropPosition;
        }
      }
      if (t.target && it(t.target, '#' + this.parent.rowDropSettings.targetID)) {
        var h = H(t.target, 'e-treegrid');
        if (!h) {
          i.style.cursor = 'default';
        }
      }
    }
  };
  r.prototype.rowDropped = function (t) {
    var e = this.parent;
    var i = 'parentItem';
    if (e.rowDropSettings.targetID) {
      if (
        ((t.target && it(t.target, '#' + e.rowDropSettings.targetID)) ||
          (H(t.target, 'e-treegrid') && H(t.target, 'e-treegrid').id === e.rowDropSettings.targetID) ||
          (t.target && document.getElementById(e.rowDropSettings.targetID))) &&
        ((this.parent.element.querySelector('.e-errorelem') || !this.canDrop) && (this.dropPosition = 'Invalid'),
        $('dropPosition', this.dropPosition, t),
        e.trigger(Dr, t),
        !t.cancel && e.rowDropSettings.targetID)
      ) {
        if (this.dropPosition === 'Invalid' && !this.canDrop) return;
        this.dragDropGrid(t);
        if (e.isLocalData) {
          e.flatData = this.orderToIndex(e.flatData);
        }
      }
    } else if (
      (H(t.target, 'e-content') || this.dropPosition === 'Invalid' || !this.canDrop) &&
      ((this.parent.element.querySelector('.e-errorelem') || !this.canDrop) && (this.dropPosition = 'Invalid'),
      $('dropPosition', this.dropPosition, t),
      e.trigger(Dr, t),
      !t.cancel)
    ) {
      if (!se(this.parent) && this.dropPosition === 'Invalid' && !this.canDrop) return;
      if (!se(this.parent)) {
        this.dropRows(t);
      }
      if (e.isLocalData) {
        e.flatData = this.orderToIndex(e.flatData);
      }
      e.grid.refresh();
      this.removeRowBorders();
    }
    this.removetopOrBottomBorder();
    this.removeChildBorder();
    this.removeRowBorders();
    if (this.parent.enableImmutableMode && !this.parent.allowPaging && !p(t.data[0].parentItem)) {
      var n = this.parent.treeColumnIndex;
      n = n + 1;
      var s = this.parent.getPrimaryKeyFieldNames()[0];
      var o = this.parent.grid.getRowIndexByPrimaryKey(t.data[0]['' + this.parent.getPrimaryKeyFieldNames()[0]]);
      var a = this.parent.getRows()[parseInt(o.toString(), 10)];
      var h = t.data[0];
      if (this.dropPosition === 'middleSegment') {
        var l = [];
        var u = [];
        l.push(h);
        u.push(this.parent.getRows()[parseInt(o.toString(), 10)]);
        var d = 'parentUniqueID';
        h = gt(this.parent, t.data[0].parentUniqueID);
        o = this.parent.grid.getRowIndexByPrimaryKey(h['' + this.parent.getPrimaryKeyFieldNames()[0]]);
        var c = this.parent.getRows()[parseInt(o.toString(), 10)];
        l.push(h);
        u.push(this.parent.getRows()[parseInt(o.toString(), 10)]);
        for (var f = 0; f < l.length; f++)
          this.parent.renderModule.cellRender({
            data: l[parseInt(f.toString(), 10)],
            cell: u[parseInt(f.toString(), 10)].cells[parseInt(n.toString(), 10)],
            column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
            requestType: 'rowDragAndDrop',
          });
        var g = this.parent.getRows()[parseInt(o.toString(), 10)].getElementsByClassName('e-treegridcollapse')[0];
        if (!p(this.parent.getRows()[parseInt(o.toString(), 10)].getElementsByClassName('e-treegridcollapse')[0])) {
          Mt(
            [this.parent.getRows()[parseInt(o.toString(), 10)].getElementsByClassName('e-treegridcollapse')[0]],
            'e-treegridcollapse',
          );
          Qt(
            [this.parent.getRows()[parseInt(o.toString(), 10)].getElementsByClassName('e-treegridcollapse')[0]],
            'e-treegridexpand',
          );
        }
      } else
        this.parent.renderModule.cellRender({
          data: h,
          cell: this.parent.getRows()[parseInt(o.toString(), 10)].cells[parseInt(n.toString(), 10)],
          column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
          requestType: 'rowDragAndDrop',
        });
    }
  };
  r.prototype.removeRowBorders = function () {
    var t = this;
    ['e-firstrow-border', 'e-lastrow-border'].forEach(function (e) {
      var i = t.parent.element.getElementsByClassName(e)[0];
      if (t.parent.element.getElementsByClassName(e)[0]) {
        t.parent.element.getElementsByClassName(e)[0].remove();
      }
    });
  };
  r.prototype.dragDropGrid = function (t) {
    var e = this.parent;
    var i = it(t.target, 'tr');
    var n = isNaN(this.getTargetIdx(i)) ? 0 : this.getTargetIdx(i);
    var s = H(t.target, 'e-treegrid');
    var o;
    if (s && s.id === this.parent.rowDropSettings.targetID && !Se(this.parent) && !se(this.parent)) {
      o = s.ej2_instances[0];
      for (var a = this.parent.getSelectedRecords(), h = [], l = 0; l < a.length; l++)
        h[parseInt(l.toString(), 10)] = a[parseInt(l.toString(), 10)].index;
      var u = o.dataSource;
      if (
        this.parent.idMapping !== null &&
        (p(this.dropPosition) || this.dropPosition === 'bottomSegment' || this.dropPosition === 'Invalid') &&
        !o.dataSource.length
      ) {
        for (var d = [], l = 0; l < a.length; l++)
          if (a[parseInt(l.toString(), 10)].hasChildRecords) {
            d.push(a[parseInt(l.toString(), 10)]);
            for (var c = at(a[parseInt(l.toString(), 10)]), f = 0; f < c.length; f++)
              d.push(c[parseInt(f.toString(), 10)]);
          }
        if (d.length) {
          a = d;
        }
      }
      this.parent.notify(Ci, {
        indexes: h,
        records: a,
      });
      o.notify(Si, {
        toIndex: n,
        records: a,
      });
      var g = o.rowDragAndDropModule.treeGridData;
      if (!p(o.rowDragAndDropModule.treeGridData)) {
        for (var l = 0; l < o.rowDragAndDropModule.treeGridData.length; l++) {
          o.rowDragAndDropModule.treeGridData[parseInt(l.toString(), 10)].index = l;
          if (!p(o.rowDragAndDropModule.treeGridData[parseInt(l.toString(), 10)].parentItem)) {
            var y = Rt(
              'uniqueIDCollection.' +
                o.rowDragAndDropModule.treeGridData[parseInt(l.toString(), 10)].parentUniqueID +
                '.index',
              o,
            );
            o.rowDragAndDropModule.treeGridData[parseInt(l.toString(), 10)].parentItem.index = y;
          }
        }
      }
      this.parent.grid.refresh();
      o.grid.refresh();
      if (o.grid.dataSource.length > 1) {
        o.grid.refresh();
        if (!p(o.getHeaderContent().querySelector('.e-firstrow-border'))) {
          o.getHeaderContent().querySelector('.e-firstrow-border').remove();
        }
        if (!p(o.getContent().querySelector('.e-lastrow-border'))) {
          o.getContent().querySelector('.e-lastrow-border').remove();
        }
      }
    }
    if (se(this.parent)) {
      o = s.ej2_instances[0];
      this.parent.grid.refresh();
      o.grid.refresh();
    }
  };
  r.prototype.getTargetIdx = function (t) {
    return t ? parseInt(t.getAttribute('aria-rowindex'), 10) - 1 : 0;
  };
  r.prototype.getParentData = function (t, e) {
    var i = t.parentItem;
    var n = -1;
    this.parent.enableVirtualization && this.parent.selectedRowIndex !== -1
      ? (n = this.parent.getSelectedRows()[0].rowIndex)
      : this.parent.selectedRowIndex !== -1 && (n = this.parent.selectedRowIndex);
    if (this.dropPosition === 'bottomSegment') {
      var s = this.parent.getPrimaryKeyFieldNames()[0];
      var o =
        n === -1
          ? this.parent.grid.getRowIndexByPrimaryKey(e[0]['' + this.parent.getPrimaryKeyFieldNames()[0]])
          : this.parent.getSelectedRowIndexes()[0];
      var a = this.parent.getCurrentViewRecords()[parseInt(o.toString(), 10)];
      this.droppedRecord = gt(
        this.parent,
        this.parent.getCurrentViewRecords()[parseInt(o.toString(), 10)].parentItem.uniqueID,
      );
    }
    if (this.dropPosition === 'middleSegment') {
      var h = this.parent.getCurrentViewRecords()[parseInt(n.toString(), 10)].level;
      this.parent.getCurrentViewRecords()[parseInt(n.toString(), 10)].level === t.parentItem.level
        ? (this.droppedRecord = gt(this.parent, t.parentItem.uniqueID))
        : this.getParentData(t.parentItem);
    }
  };
  r.prototype.dropRows = function (t, e) {
    if (this.dropPosition !== 'Invalid' && !Se(this.parent)) {
      var i = this.parent;
      var n;
      var s = void 0;
      if (p(t.dropIndex)) {
        var o = this.parent.getPrimaryKeyFieldNames()[0];
        var a =
          this.parent.selectedRowIndex === -1
            ? this.parent.grid.getRowIndexByPrimaryKey(t.data[0]['' + this.parent.getPrimaryKeyFieldNames()[0]]) - 1
            : this.parent.getSelectedRowIndexes()[0] - 1;
        var h = this.parent.getCurrentViewRecords()[parseInt(a.toString(), 10)];
        this.getParentData(this.parent.getCurrentViewRecords()[parseInt(a.toString(), 10)], t.data);
      } else {
        t.dropIndex = t.dropIndex === t.fromIndex ? this.getTargetIdx(t.target.parentElement) : t.dropIndex;
        if (this.parent.enableVirtualization) {
          var l = this.parent.getRowByIndex(t.dropIndex).rowIndex;
          this.droppedRecord =
            this.parent.getCurrentViewRecords()[
              parseInt(this.parent.getRowByIndex(t.dropIndex).rowIndex.toString(), 10)
            ];
        } else if (p(this.parent.rowDropSettings.targetID))
          this.droppedRecord = this.parent.getCurrentViewRecords()[t.dropIndex];
        else {
          var u = this.parent.grid.getRowsObject();
          this.droppedRecord = u.length > 0 ? u[t.dropIndex].data : void 0;
        }
      }
      var d = [];
      s = this.droppedRecord;
      t.data[0] ? (d = t.data) : d.push(t.data);
      this.parent[this.modifiedRecords].push(t.data[0], s);
      var c = 0;
      var f = this.parent.rowDropSettings.targetID;
      this.isMultipleGrid = this.parent.rowDropSettings.targetID;
      this.parent.rowDropSettings.targetID
        ? (this.isaddtoBottom = this.parent.rowDropSettings.targetID && this.isDraggedWithChild)
        : this.ensuredropPosition(d, s);
      var g = d.length;
      if (!p(this.parent.idMapping)) {
        d.reverse();
      }
      for (
        var y = function (b) {
            n = d[parseInt(b.toString(), 10)];
            m.draggedRecord = n;
            if (!m.draggedRecord.hasChildRecords)
              for (var v = 0, x = d; v < x.length; v++) {
                var P = x[v];
                if (!p(x[v].childRecords) && x[v].childRecords.indexOf(m.draggedRecord) !== -1) {
                  m.draggedRecord = void 0;
                }
              }
            if (!p(m.draggedRecord)) {
              if (m.dropPosition !== 'Invalid' && !p(m.droppedRecord)) {
                if (!this.parent.rowDropSettings.targetID || e) {
                  m.deleteDragRow();
                }
                if (m.draggedRecord === m.droppedRecord) {
                  var B = m.getTargetIdx(t.target.offsetParent.parentElement);
                  if (isNaN(B)) {
                    B = m.getTargetIdx(t.target.parentElement);
                  }
                  t.dropIndex = B;
                  s = m.droppedRecord = m.parent.getCurrentViewRecords()[t.dropIndex];
                }
                if (s.parentItem || m.dropPosition === 'middleSegment') {
                  var R = this.parent.parentData;
                  var L = R.indexOf(m.draggedRecord);
                  if (L !== -1) {
                    R.splice(L, 1);
                  }
                }
                var O = m.treeGridData.indexOf(s);
                m.dropAtTop(O);
                if (m.dropPosition === 'bottomSegment') {
                  s.hasChildRecords
                    ? ((c = m.getChildCount(s, 0)),
                      m.parent.parentIdMapping && m.treeData.splice(O + c + 1, 0, m.draggedRecord.taskData),
                      m.treeGridData.splice(O + c + 1, 0, m.draggedRecord))
                    : (m.parent.parentIdMapping && m.treeData.splice(O + 1, 0, m.draggedRecord.taskData),
                      m.treeGridData.splice(O + 1, 0, m.draggedRecord));
                  if (p(s.parentItem)) {
                    delete n.parentItem;
                    delete n.parentUniqueID;
                    n.level = 0;
                    if (m.parent.parentIdMapping) {
                      n[m.parent.parentIdMapping] = null;
                    }
                  }
                  if (s.parentItem) {
                    var T = m.getChildrecordsByParentID(s.parentUniqueID);
                    var M = T[0].childRecords;
                    var F = M.indexOf(s) + 1;
                    M.splice(F, 0, n);
                    n.parentItem = s.parentItem;
                    n.parentUniqueID = s.parentUniqueID;
                    n.level = s.level;
                    if (m.parent.parentIdMapping) {
                      n[m.parent.parentIdMapping] = s[m.parent.parentIdMapping];
                      n.parentItem = s.parentItem;
                      n.level = s.level;
                    }
                  }
                  if (n.hasChildRecords) {
                    var V = 1;
                    m.updateChildRecordLevel(n, 1);
                    m.updateChildRecord(n, O + c + 1);
                  }
                }
                m.dropMiddle(O);
              }
              if (p(n.parentItem)) {
                var R = this.parent.parentData;
                var L = R.indexOf(m.droppedRecord);
                var z = 0;
                R.filter(function (K) {
                  if (n.uniqueID === K.uniqueID) {
                    z++;
                  }
                });
                m.dropPosition === 'bottomSegment' && z === 0
                  ? R.splice(L + 1, 0, n)
                  : m.dropPosition === 'topSegment' && z === 0 && R.splice(L, 0, n);
              }
              this.parent.rowDragAndDropModule.refreshGridDataSource();
            }
          },
          m = this,
          w = 0;
        w < d.length;
        w++
      )
        y(w);
    }
  };
  r.prototype.dropMiddle = function (t) {
    var e = this.parent;
    var i = at(this.droppedRecord);
    var n = p(i) || i.length === 0 ? t + 1 : i.length + t + 1;
    if (this.dropPosition === 'middleSegment') {
      this.parent.parentIdMapping
        ? (this.treeData.splice(n, 0, this.draggedRecord.taskData), this.treeGridData.splice(n, 0, this.draggedRecord))
        : this.treeGridData.splice(n, 0, this.draggedRecord);
      this.recordLevel();
      if (this.draggedRecord.hasChildRecords) {
        this.updateChildRecord(this.draggedRecord, n);
      }
    }
  };
  r.prototype.dropAtTop = function (t) {
    var e = this.parent;
    if (this.dropPosition === 'topSegment') {
      if (this.parent.parentIdMapping) {
        this.treeData.splice(t, 0, this.draggedRecord.taskData);
      }
      var i = this.treeGridData[parseInt(t.toString(), 10)];
      this.draggedRecord.parentItem = this.treeGridData[parseInt(t.toString(), 10)].parentItem;
      this.draggedRecord.parentUniqueID = this.treeGridData[parseInt(t.toString(), 10)].parentUniqueID;
      this.draggedRecord.level = this.treeGridData[parseInt(t.toString(), 10)].level;
      this.treeGridData.splice(parseInt(t.toString(), 10), 0, this.draggedRecord);
      if (this.draggedRecord.hasChildRecords) {
        var n = 1;
        this.updateChildRecord(this.draggedRecord, t);
        this.updateChildRecordLevel(this.draggedRecord, 1);
      }
      if (this.droppedRecord.parentItem) {
        var s = this.getChildrecordsByParentID(this.droppedRecord.parentUniqueID);
        var o = s[0].childRecords;
        var a = o.indexOf(this.droppedRecord);
        o.splice(a, 0, this.draggedRecord);
      }
    }
  };
  r.prototype.recordLevel = function () {
    var t = this.parent;
    var e = this.draggedRecord;
    var i = this.droppedRecord;
    var n = this.parent.childMapping;
    if (!i.hasChildRecords) {
      i.hasChildRecords = true;
      i.hasFilteredChildRecords = true;
      if (p(i.childRecords) || i.childRecords.length === 0) {
        i.childRecords = [];
        if (!this.parent.parentIdMapping && p(i.taskData['' + this.parent.childMapping])) {
          i.taskData['' + this.parent.childMapping] = [];
        }
      }
    }
    if (this.dropPosition === 'middleSegment') {
      var s = Vt({}, i);
      delete s.childRecords;
      e.parentItem = s;
      e.parentUniqueID = i.uniqueID;
      i.childRecords.splice(i.childRecords.length, 0, e);
      $('uniqueIDCollection.' + e.uniqueID, e, this.parent);
      var o = 'isSelfReference';
      if (this.parent.isSelfReference) {
        i[this.parent.childMapping] = [];
        i[this.parent.childMapping].splice(i[this.parent.childMapping].length, 0, e);
      }
      if (!p(e) && !this.parent.parentIdMapping && !p(i.taskData['' + this.parent.childMapping])) {
        i.taskData[this.parent.childMapping].splice(i.childRecords.length, 0, e.taskData);
      }
      if (!e.hasChildRecords) e.level = i.level + 1;
      else {
        var a = 1;
        e.level = i.level + 1;
        this.updateChildRecordLevel(e, 1);
      }
      i.expanded = true;
    }
  };
  r.prototype.deleteDragRow = function () {
    this.parent.dataSource instanceof ut && we(this.parent)
      ? ((this.treeGridData = this.parent.grid.dataSource.dataSource.json),
        (this.treeData = this.parent.dataSource.dataSource.json))
      : ((this.treeGridData = this.parent.grid.dataSource), (this.treeData = this.parent.dataSource));
    var t = gt(this.parent, this.draggedRecord.uniqueID);
    if (!p(t.childRecords) && t.childRecords.length) {
      t.hasChildRecords = true;
    }
    this.removeRecords(t);
  };
  r.prototype.updateChildRecord = function (t, e) {
    var i;
    var n = this.parent;
    var s = 0;
    if (!t.hasChildRecords) return 0;
    s = t.childRecords.length;
    for (var o = 0; o < s; o++) {
      this.isMultipleGrid
        ? (i = t.childRecords[parseInt(o.toString(), 10)])
        : (i = Rt('uniqueIDCollection.' + t.childRecords[parseInt(o.toString(), 10)].uniqueID, this.parent));
      e++;
      this.parent.flatData.splice(e, 0, i);
      $('uniqueIDCollection.' + i.uniqueID, i, this.parent);
      if (this.parent.parentIdMapping) {
        this.treeData.splice(e, 0, i.taskData);
      }
      if (i.hasChildRecords) {
        e = this.updateChildRecord(i, e);
      }
    }
    return e;
  };
  r.prototype.updateChildRecordLevel = function (t, e) {
    var i = 0;
    var n;
    e++;
    if (!t.hasChildRecords) return 0;
    i = t.childRecords.length;
    for (var s = 0; s < i; s++) {
      this.isMultipleGrid
        ? (n = t.childRecords[parseInt(s.toString(), 10)])
        : (n = Rt('uniqueIDCollection.' + t.childRecords[parseInt(s.toString(), 10)].uniqueID, this.parent));
      var o = void 0;
      if (t.parentItem) {
        o = gt(this.parent, t.parentItem.uniqueID);
      }
      if (p(o) && !p(t.parentItem)) {
        o = t.parentItem;
      }
      n.level = t.parentItem ? o.level + e : t.level + 1;
      if (n.hasChildRecords) {
        e--;
        e = this.updateChildRecordLevel(n, e);
      }
    }
    return e;
  };
  r.prototype.removeRecords = function (t) {
    var e = this;
    var i = this.parent;
    var n;
    this.parent.dataSource instanceof ut && we(this.parent)
      ? (n = this.parent.dataSource.dataSource.json)
      : (n = this.parent.dataSource);
    var s = t;
    var o = !p(this.parent.parentIdMapping);
    var a = this.getChildrecordsByParentID(t.parentUniqueID)[0];
    if (t) {
      if (t.parentItem) {
        var h = a ? a.childRecords : [];
        var l = 0;
        if (h && h.length > 0) {
          l = h.indexOf(t);
          a.childRecords.splice(l, 1);
          if (!this.parent.parentIdMapping || this.parent.enableImmutableMode) {
            Ie(
              {
                value: t,
                action: 'delete',
              },
              this.parent,
              o,
              t.index,
              t.index,
            );
          }
        }
      }
      if (this.parent.parentIdMapping) {
        if (t.hasChildRecords && t.childRecords.length > 0) {
          this.removeChildItem(t);
        }
        var u = n;
        var d = n.findIndex(function (b) {
          return b[e.parent.idMapping] === t.taskData[e.parent.idMapping];
        });
        var c = this.treeGridData.findIndex(function (b) {
          return b[e.parent.idMapping] === t.taskData[e.parent.idMapping];
        });
        if (d !== -1 && !p(d)) {
          n.splice(d, 1);
        }
        if (c !== -1 && !p(c)) {
          this.treeGridData.splice(c, 1);
        }
      }
      var f = this.treeGridData.indexOf(t);
      if (!this.parent.parentIdMapping) {
        var g = this.parent.parentData.indexOf(t);
        if (g !== -1) {
          this.parent.parentData.splice(g, 1);
          n.splice(g, 1);
        }
      }
      if (f === -1 && !this.parent.parentIdMapping)
        for (var y = this.parent.getPrimaryKeyFieldNames()[0], m = 0; m < this.treeGridData.length; m++)
          if (this.treeGridData[parseInt(m.toString(), 10)]['' + y] === t['' + y]) {
            f = m;
          }
      if (!this.parent.parentIdMapping) {
        var w = this.getChildCount(t, 0);
        this.treeGridData.splice(f, w + 1);
      }
      if (t.parentItem && a && a.childRecords && !a.childRecords.length) {
        a.expanded = false;
        a.hasChildRecords = false;
        a.hasFilteredChildRecords = false;
      }
      if (this.parent[this.modifiedRecords].indexOf(a) === -1 && !p(a)) {
        this.parent[this.modifiedRecords].push(a);
      }
      if (!p(a)) {
        this.updateModifiedRecords(a);
      }
    }
  };
  r.prototype.updateModifiedRecords = function (t) {
    var e = gt(this.parent, t.parentUniqueID);
    if (!p(e)) {
      this.parent[this.modifiedRecords].push(e);
      this.updateModifiedRecords(e);
    }
  };
  r.prototype.removeChildItem = function (t) {
    var e;
    var i;
    var n;
    var s;
    this.parent.dataSource instanceof ut && we(this.parent)
      ? (s = this.parent.dataSource.dataSource.json)
      : (s = this.parent.dataSource);
    for (var o = 0; o < t.childRecords.length; o++) {
      e = t.childRecords[parseInt(o.toString(), 10)];
      if (!p(e.childRecords) && e.childRecords.length) {
        e.hasChildRecords = true;
      }
      var a = void 0;
      this.parent.dataSource instanceof ut && we(this.parent)
        ? (a = this.parent.dataSource.dataSource.json)
        : (a = this.parent.dataSource);
      for (var h = 0; h < a.length; h++)
        if (a[parseInt(h.toString(), 10)][this.parent.idMapping] === e.taskData[this.parent.idMapping]) {
          i = h;
        }
      for (var l = 0; l < this.treeGridData.length; l++)
        if (
          this.treeGridData[parseInt(l.toString(), 10)][this.parent.idMapping] === e.taskData[this.parent.idMapping]
        ) {
          n = l;
          break;
        }
      if (i !== -1 && !p(i)) {
        s.splice(i, 1);
      }
      if (n !== -1 && !p(n)) {
        this.treeGridData.splice(n, 1);
      }
      if (e.hasChildRecords) {
        this.removeChildItem(e);
      }
    }
  };
  r.prototype.getChildCount = function (t, e) {
    var i;
    if (!t.hasChildRecords) return 0;
    for (var n = 0; n < t.childRecords.length; n++) {
      i = t.childRecords[parseInt(n.toString(), 10)];
      e++;
      if (i.hasChildRecords) {
        e = this.getChildCount(i, e);
      }
    }
    return e;
  };
  r.prototype.ensuredropPosition = function (t, e) {
    var i = this;
    t.filter(function (n) {
      if (n.hasChildRecords && !p(n.childRecords)) {
        var s = n.childRecords.indexOf(e);
        if (s === -1) i.ensuredropPosition(n.childRecords, e);
        else {
          i.dropPosition = 'Invalid';
          i.addErrorElem();
          i.canDrop = false;
          if (p(i.parent.rowDropSettings.targetID)) {
            i.removetopOrBottomBorder();
            i.removeChildBorder();
          }
          return;
        }
      }
    });
  };
  r.prototype.isDuplicateData = function (t) {
    var e = this.parent.getPrimaryKeyFieldNames();
    return e.length === 0
      ? false
      : this.parent.flatData.some(function (i) {
          return e.every(function (n) {
            return i[n] === t[n];
          });
        });
  };
  r.prototype.destroy = function () {
    this.removeEventListener();
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off(Lr, this.Rowdraging);
      this.parent.off(Or, this.rowDropped);
      this.parent.off(Si, this.rowsAdded);
      this.parent.off(Ci, this.rowsRemoved);
    }
  };
  r.prototype.getModuleName = function () {
    return 'rowDragAndDrop';
  };
  return r;
})();
var Ha = (function () {
  function r(t) {
    Be.Inject(Ns);
    this.parent = t;
    this.isHierarchyFilter = false;
    this.filteredResult = [];
    this.flatFilteredData = [];
    this.filteredParentRecs = [];
    this.addEventListener();
  }
  r.prototype.getModuleName = function () {
    return 'filter';
  };
  r.prototype.destroy = function () {
    this.removeEventListener();
  };
  r.prototype.addEventListener = function () {
    this.parent.on('updateFilterRecs', this.updatedFilteredRecord, this);
    this.parent.on('clearFilters', this.clearFilterLevel, this);
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off('updateFilterRecs', this.updatedFilteredRecord);
      this.parent.off('clearFilters', this.clearFilterLevel);
    }
  };
  r.prototype.updatedFilteredRecord = function (t) {
    $('uniqueIDFilterCollection', {}, this.parent);
    this.flatFilteredData = t.data;
    this.filteredParentRecs = [];
    this.filteredResult = [];
    this.isHierarchyFilter = false;
    for (
      var e =
          this.parent.grid.searchSettings.key === ''
            ? this.parent.filterSettings.hierarchyMode
            : this.parent.searchSettings.hierarchyMode,
        i = 0;
      i < this.flatFilteredData.length;
      i++
    ) {
      var n = this.flatFilteredData[parseInt(i.toString(), 10)];
      this.addParentRecord(this.flatFilteredData[parseInt(i.toString(), 10)]);
      if (
        (e === 'Child' || e === 'None') &&
        (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== '')
      ) {
        this.isHierarchyFilter = true;
      }
      var s = ee('childRecords', this.flatFilteredData[parseInt(i.toString(), 10)]);
      if (!p(s) && s.length) {
        $(
          'hasFilteredChildRecords',
          this.checkChildExsist(this.flatFilteredData[parseInt(i.toString(), 10)]),
          this.flatFilteredData[parseInt(i.toString(), 10)],
        );
      }
      var o = ee('parentItem', this.flatFilteredData[parseInt(i.toString(), 10)]);
      if (!p(o)) {
        var a = gt(this.parent, this.flatFilteredData[parseInt(i.toString(), 10)].parentItem.uniqueID, true);
        $('hasFilteredChildRecords', true, a);
        if (a && a.parentItem) {
          this.updateParentFilteredRecord(a);
        }
      }
    }
    if (this.flatFilteredData.length > 0 && this.isHierarchyFilter) {
      this.updateFilterLevel();
    }
    this.parent.notify('updateAction', { result: this.filteredResult });
  };
  r.prototype.updateParentFilteredRecord = function (t) {
    var e = gt(this.parent, t.parentItem.uniqueID, true);
    var i = Rt('uniqueIDFilterCollection', this.parent);
    if (e && Object.prototype.hasOwnProperty.call(i, e.uniqueID)) {
      $('hasFilteredChildRecords', true, e);
    }
    if (e && e.parentItem) {
      this.updateParentFilteredRecord(e);
    }
  };
  r.prototype.addParentRecord = function (t) {
    var e = gt(this.parent, t.parentUniqueID);
    var i =
      this.parent.grid.searchSettings.key === ''
        ? this.parent.filterSettings.hierarchyMode
        : this.parent.searchSettings.hierarchyMode;
    if (
      i === 'None' &&
      (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== '')
    )
      if (p(e)) {
        if (this.flatFilteredData.indexOf(t) !== -1) {
          if (this.filteredResult.indexOf(t) === -1) {
            this.filteredResult.push(t);
            $('uniqueIDFilterCollection.' + t.uniqueID, t, this.parent);
            t.hasFilteredChildRecords = true;
          }
          return;
        }
      } else {
        this.addParentRecord(e);
        this.flatFilteredData.indexOf(e) !== -1 || this.filteredResult.indexOf(e) !== -1
          ? this.filteredResult.indexOf(t) === -1 &&
            (this.filteredResult.push(t), $('uniqueIDFilterCollection.' + t.uniqueID, t, this.parent))
          : this.filteredResult.indexOf(t) === -1 &&
            this.flatFilteredData.indexOf(t) !== -1 &&
            (this.filteredResult.push(t), $('uniqueIDFilterCollection.' + t.uniqueID, t, this.parent));
      }
    else {
      if (!p(e)) {
        var n =
          this.parent.grid.searchSettings.key === ''
            ? this.parent.filterSettings.hierarchyMode
            : this.parent.searchSettings.hierarchyMode;
        n === 'Child' &&
        (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== '')
          ? this.flatFilteredData.indexOf(e) !== -1 && this.addParentRecord(e)
          : this.addParentRecord(e);
      }
      if (this.filteredResult.indexOf(t) === -1) {
        this.filteredResult.push(t);
        $('uniqueIDFilterCollection.' + t.uniqueID, t, this.parent);
      }
    }
  };
  r.prototype.checkChildExsist = function (t) {
    for (var e = ee('childRecords', t), i = false, n = 0; n < e.length; n++) {
      var s = e[parseInt(n.toString(), 10)].childRecords;
      var o =
        this.parent.grid.searchSettings.key === ''
          ? this.parent.filterSettings.hierarchyMode
          : this.parent.searchSettings.hierarchyMode;
      if (
        (o === 'Child' || o === 'Both') &&
        (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== '')
      ) {
        var a = Rt('uniqueIDFilterCollection', this.parent);
        if (!Object.prototype.hasOwnProperty.call(a, e[parseInt(n.toString(), 10)].uniqueID)) {
          this.filteredResult.push(e[parseInt(n.toString(), 10)]);
          $(
            'uniqueIDFilterCollection.' + e[parseInt(n.toString(), 10)].uniqueID,
            e[parseInt(n.toString(), 10)],
            this.parent,
          );
          i = true;
        }
      }
      if (
        o === 'None' &&
        (this.parent.grid.filterSettings.columns.length !== 0 || this.parent.grid.searchSettings.key !== '') &&
        this.flatFilteredData.indexOf(e[parseInt(n.toString(), 10)]) !== -1
      ) {
        i = true;
        break;
      }
      if (!p(e[parseInt(n.toString(), 10)].childRecords) && e[parseInt(n.toString(), 10)].childRecords.length) {
        i = this.checkChildExsist(e[parseInt(n.toString(), 10)]);
      }
      if ((o === 'Child' || o === 'Both') && e.length) {
        i = true;
      }
    }
    return i;
  };
  r.prototype.updateFilterLevel = function () {
    for (var t = this.filteredResult, e = this.filteredResult.length, i = 0; i < e; i++) {
      var n = gt(this.parent, t[parseInt(i.toString(), 10)].parentUniqueID);
      var s = t.indexOf(n) !== -1;
      if (s) {
        var o = gt(this.parent, t[parseInt(i.toString(), 10)].parentUniqueID, true);
        t[parseInt(i.toString(), 10)].filterLevel = o.filterLevel + 1;
      } else {
        t[parseInt(i.toString(), 10)].filterLevel = 0;
        this.filteredParentRecs.push(t[parseInt(i.toString(), 10)]);
      }
    }
  };
  r.prototype.clearFilterLevel = function (t) {
    var e = 0;
    var i = t.flatData;
    var n = t.flatData.length;
    var s;
    for (e; e < t.flatData.length; e++) {
      s = t.flatData[parseInt(e.toString(), 10)];
      var o = s.filterLevel;
      if (s.filterLevel || s.filterLevel === 0 || !p(s.hasFilteredChildRecords)) {
        s.hasFilteredChildRecords = null;
        s.filterLevel = null;
      }
    }
    this.filteredResult = [];
    this.parent.notify('updateResults', {
      result: t.flatData,
      count: t.flatData.length,
    });
  };
  return r;
})();
var Wa = (function () {
  function r(t) {
    Be.Inject(zs);
    this.parent = t;
    this.addEventListener();
  }
  r.prototype.getModuleName = function () {
    return 'toolbar';
  };
  r.prototype.addEventListener = function () {
    this.parent.on(Tr, this.refreshToolbar, this);
    this.parent.on(Fr, this.refreshToolbar, this);
    this.parent.on(Er, this.toolbarClickHandler, this);
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off(Tr, this.refreshToolbar);
      this.parent.off(Fr, this.refreshToolbar);
      this.parent.off(Er, this.toolbarClickHandler);
    }
  };
  r.prototype.refreshToolbar = function (t) {
    var e = this.parent.grid.toolbarModule.getToolbar();
    if (!p(e)) {
      var i = this.parent;
      var n = void 0;
      var s = void 0;
      var o = this.parent.element.id + '_gridcontrol_indent';
      var a = this.parent.element.id + '_gridcontrol_outdent';
      var h = e.querySelector('#' + o);
      var l = e.querySelector('#' + a);
      var u = t.row;
      var d = this.parent.getSelectedRows()[0];
      if (!p(u[0])) {
        u = u[0];
      }
      u =
        !p(this.parent.getSelectedRows()[0]) && this.parent.getSelectedRows()[0].rowIndex !== u.rowIndex
          ? this.parent.getSelectedRows()[0]
          : u;
      if (h !== null && l !== null) {
        n = h.parentElement;
        s = l.parentElement;
        if (u.rowIndex === 0 || this.parent.getSelectedRowIndexes().length > 1) {
          n.classList.add('e-hidden');
          s.classList.add('e-hidden');
        } else if (
          t.name !== 'rowDeselected' ||
          (!p(this.parent.getSelectedRows()[0]) && this.parent.grid.isCheckBoxSelection)
        ) {
          var c = this.parent.getCurrentViewRecords()[u.rowIndex];
          if (!p(this.parent.getCurrentViewRecords()[u.rowIndex])) {
            this.parent.getCurrentViewRecords()[u.rowIndex].level >
            this.parent.getCurrentViewRecords()[u.rowIndex - 1].level
              ? n.classList.add('e-hidden')
              : n.classList.remove('e-hidden');
            if (
              this.parent.getCurrentViewRecords()[u.rowIndex].level ===
              this.parent.getCurrentViewRecords()[u.rowIndex - 1].level
            ) {
              n.classList.remove('e-hidden');
            }
            if (this.parent.getCurrentViewRecords()[u.rowIndex].level === 0) {
              s.classList.add('e-hidden');
            }
            if (this.parent.getCurrentViewRecords()[u.rowIndex].level !== 0) {
              s.classList.remove('e-hidden');
            }
          }
        }
        if (
          t.name === 'rowDeselected' &&
          p(this.parent.getSelectedRows()[0]) &&
          !this.parent.grid.isCheckBoxSelection
        ) {
          if (this.parent.toolbar.includes('Indent')) {
            n.classList.add('e-hidden');
          }
          if (this.parent.toolbar.includes('Outdent')) {
            s.classList.add('e-hidden');
          }
        }
      }
    }
  };
  r.prototype.toolbarClickHandler = function (t) {
    var e = this.parent;
    var i = 'indentOutdentAction';
    if (
      this.parent.editSettings.mode === 'Cell' &&
      this.parent.grid.editSettings.mode === 'Batch' &&
      t.item.id === this.parent.grid.element.id + '_update'
    ) {
      t.cancel = true;
      this.parent.grid.editModule.saveCell();
    }
    if (t.item.id === this.parent.grid.element.id + '_expandall') {
      this.parent.expandAll();
    }
    if (t.item.id === this.parent.grid.element.id + '_collapseall') {
      this.parent.collapseAll();
    }
    if (
      t.item.id === this.parent.grid.element.id + '_indent' &&
      this.parent.getSelectedRecords().length &&
      !p(this.parent.rowDragAndDropModule)
    ) {
      this.parent.rowDragAndDropModule.indentOutdentAction(null, 'indent');
    }
    if (
      t.item.id === this.parent.grid.element.id + '_outdent' &&
      this.parent.getSelectedRecords().length &&
      !p(this.parent.rowDragAndDropModule)
    ) {
      this.parent.rowDragAndDropModule.indentOutdentAction(null, 'outdent');
    }
  };
  r.prototype.getToolbar = function () {
    return this.parent.grid.toolbarModule.getToolbar();
  };
  r.prototype.enableItems = function (t, e) {
    this.parent.grid.toolbarModule.enableItems(t, e);
  };
  r.prototype.destroy = function () {
    this.removeEventListener();
  };
  return r;
})();
var Ua = (function () {
  function r(t) {
    Be.Inject(Fi);
    this.parent = t;
    this.taskIds = [];
    this.flatSortedData = [];
    this.storedIndex = -1;
    this.isSelfReference = !p(this.parent.parentIdMapping);
    this.addEventListener();
  }
  r.prototype.getModuleName = function () {
    return 'sort';
  };
  r.prototype.addEventListener = function () {
    this.parent.on('updateModel', this.updateModel, this);
    this.parent.on('createSort', this.createdSortedRecords, this);
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off('updateModel', this.updateModel);
      this.parent.off('createSort', this.createdSortedRecords);
    }
  };
  r.prototype.createdSortedRecords = function (t) {
    var e = t.modifiedData;
    var i = t.srtQry;
    this.iterateSort(t.modifiedData, t.srtQry);
    this.storedIndex = -1;
    t.modifiedData = this.flatSortedData;
    this.flatSortedData = [];
  };
  r.prototype.iterateSort = function (t, e) {
    var i = this.parent.query;
    var n = [];
    if (!p(this.parent.query)) {
      n = this.parent.query.queries.filter(function (l) {
        return l.fn === 'onWhere';
      });
    }
    for (var s = 0; s < t.length; s++) {
      n.length > 0 || this.parent.grid.filterSettings.columns.length > 0 || this.parent.grid.searchSettings.key !== ''
        ? p(gt(this.parent, t[parseInt(s.toString(), 10)].uniqueID, true)) ||
          (this.storedIndex++, (this.flatSortedData[this.storedIndex] = t[parseInt(s.toString(), 10)]))
        : (this.storedIndex++, (this.flatSortedData[this.storedIndex] = t[parseInt(s.toString(), 10)]));
      if (t[parseInt(s.toString(), 10)].hasChildRecords) {
        var o = new ut(t[parseInt(s.toString(), 10)].childRecords).executeLocal(e);
        if (
          this.parent.allowRowDragAndDrop &&
          t[parseInt(s.toString(), 10)].childRecords.indexOf(this.parent.rowDragAndDropModule.draggedRecord) !== -1 &&
          this.parent.rowDragAndDropModule.dropPosition !== 'middleSegment'
        ) {
          var a = o.indexOf(this.parent.rowDragAndDropModule.draggedRecord);
          o.splice(a, 1);
          var h = o.indexOf(this.parent.rowDragAndDropModule.droppedRecord);
          this.parent.rowDragAndDropModule.dropPosition === 'topSegment'
            ? o.splice(h, 0, this.parent.rowDragAndDropModule.draggedRecord)
            : this.parent.rowDragAndDropModule.dropPosition === 'bottomSegment' &&
              o.splice(h + 1, 0, this.parent.rowDragAndDropModule.draggedRecord);
        }
        this.iterateSort(o, e);
      }
    }
  };
  r.prototype.sortColumn = function (t, e, i) {
    this.parent.grid.sortColumn(t, e, i);
  };
  r.prototype.removeSortColumn = function (t) {
    this.parent.grid.removeSortColumn(t);
  };
  r.prototype.updateModel = function () {
    this.parent.setProperties({ sortSettings: Fs(this.parent.grid.sortSettings) }, true);
  };
  r.prototype.clearSorting = function () {
    this.parent.grid.clearSorting();
    this.updateModel();
  };
  r.prototype.destroy = function () {
    this.removeEventListener();
  };
  return r;
})();
var Va = (function () {
  function r(t) {
    this.batchChildCount = 0;
    this.addedRecords = 'addedRecords';
    this.deletedRecords = 'deletedRecords';
    this.batchAddedRecords = [];
    this.batchDeletedRecords = [];
    this.batchAddRowRecord = [];
    this.parent = t;
    this.isSelfReference = !p(t.parentIdMapping);
    this.batchRecords = [];
    this.currentViewRecords = [];
    this.isAdd = false;
    this.addEventListener();
  }
  r.prototype.addEventListener = function () {
    this.parent.on(Mr, this.cellSaved, this);
    this.parent.on(Vr, this.batchAdd, this);
    this.parent.on(kr, this.beforeBatchAdd, this);
    this.parent.on(Di, this.batchSave, this);
    this.parent.on(Nr, this.beforeBatchDelete, this);
    this.parent.on(zr, this.beforeBatchSave, this);
    this.parent.on('batchPageAction', this.batchPageAction, this);
    this.parent.on('batchCancelAction', this.batchCancelAction, this);
    this.parent.grid.on('immutable-batch-cancel', this.immutableBatchAction, this);
    this.parent.grid.on('next-cell-index', this.nextCellIndex, this);
    this.parent.grid.on('cellfocused', this.onCellFocused, this);
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off(Mr, this.cellSaved);
      this.parent.off(Vr, this.batchAdd);
      this.parent.off(Di, this.batchSave);
      this.parent.off(kr, this.beforeBatchAdd);
      this.parent.off(Nr, this.beforeBatchDelete);
      this.parent.off(zr, this.beforeBatchSave);
      this.parent.off('batchPageAction', this.batchPageAction);
      this.parent.off('batchCancelAction', this.batchCancelAction);
      this.parent.grid.off('immutable-batch-cancel', this.immutableBatchAction);
      this.parent.grid.off('next-cell-index', this.nextCellIndex);
      this.parent.grid.off('cellfocused', this.onCellFocused);
    }
  };
  r.prototype.destroy = function () {
    this.removeEventListener();
  };
  r.prototype.getBatchRecords = function () {
    return this.batchRecords;
  };
  r.prototype.getAddRowIndex = function () {
    return this.addRowIndex;
  };
  r.prototype.getSelectedIndex = function () {
    return this.selectedIndex;
  };
  r.prototype.getBatchChildCount = function () {
    return this.batchChildCount;
  };
  r.prototype.batchPageAction = function () {
    var t = this;
    var e =
      this.parent.grid.dataSource instanceof ut
        ? this.parent.grid.dataSource.dataSource.json
        : this.parent.grid.dataSource;
    var i = this.parent.grid.getPrimaryKeyFieldNames()[0];
    var n;
    if (!p(this.batchAddedRecords) && this.batchAddedRecords.length)
      for (
        var s = function (a) {
            n = e.findIndex(function (h) {
              return (
                h['' + this.parent.grid.getPrimaryKeyFieldNames()[0]] ===
                t.batchAddedRecords[parseInt(a.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]
              );
            });
            e.splice(n, 1);
          },
          o = 0;
        o < this.batchAddedRecords.length;
        o++
      )
        s(o);
    this.batchAddedRecords =
      this.batchRecords =
      this.batchAddRowRecord =
      this.batchDeletedRecords =
      this.currentViewRecords =
        [];
  };
  r.prototype.cellSaved = function (t) {
    var e = t.column.index;
    if (t.column.index === this.parent.treeColumnIndex) {
      this.parent.renderModule.cellRender({
        data: t.rowData,
        cell: t.cell,
        column: this.parent.grid.getColumnByIndex(t.column.index),
      });
    }
    if (
      this.isAdd &&
      this.parent.editSettings.mode === 'Batch' &&
      this.parent.editSettings.newRowPosition !== 'Bottom'
    ) {
      var i =
        this.parent.grid.dataSource instanceof ut
          ? this.parent.grid.dataSource.dataSource.json
          : this.parent.grid.dataSource;
      var n = void 0;
      var s = 'level';
      var o = this.parent.grid.getPrimaryKeyFieldNames()[0];
      var a = void 0;
      var h = void 0;
      var l = 'parentItem';
      var u = 'uniqueID';
      var d = this.selectedIndex > -1 ? this.batchRecords[parseInt(this.addRowIndex.toString(), 10)].parentItem : null;
      var c = void 0;
      var f = void 0;
      var g = void 0;
      var y =
        this.parent.editSettings.newRowPosition === 'Top' || this.selectedIndex === -1
          ? 0
          : this.parent.editSettings.newRowPosition === 'Above'
            ? this.addRowIndex
            : this.addRowIndex + 1;
      y = this.getActualRowObjectIndex(y);
      if (this.newBatchRowAdded) {
        if (this.batchRecords.length) {
          c = this.batchRecords[this.addRowIndex][this.parent.idMapping];
          g = this.batchRecords[this.addRowIndex][this.parent.parentIdMapping];
          if (this.batchRecords[parseInt(this.addRowIndex.toString(), 10)].parentItem) {
            f = this.batchRecords[parseInt(this.addRowIndex.toString(), 10)].parentItem.uniqueID;
          }
        }
        this.batchAddedRecords = Ft(this.batchAddedRecords);
        this.batchAddRowRecord = Ft(this.batchAddRowRecord);
        this.batchAddRowRecord.push(this.batchRecords[this.addRowIndex]);
        n = this.parent.grid.getRowsObject()[parseInt(y.toString(), 10)].changes;
        if (
          !p(n) &&
          ((n.uniqueID = Wi(this.parent.element.id + '_data_')),
          $('uniqueIDCollection.' + n.uniqueID, n, this.parent),
          !Object.prototype.hasOwnProperty.call(n, 'level'))
        ) {
          this.batchIndex = this.selectedIndex === -1 ? 0 : this.batchIndex;
          if (this.parent.editSettings.newRowPosition === 'Child') {
            n.primaryParent = d;
            if (this.selectedIndex > -1) {
              n.parentItem = Vt({}, this.batchRecords[this.addRowIndex]);
              n.parentUniqueID = n.parentItem.uniqueID;
              delete n.parentItem.childRecords;
              delete n.parentItem[this.parent.childMapping];
              n.level = n.parentItem.level + 1;
              n.index = this.batchIndex;
              var m = at(this.batchRecords[this.addRowIndex]).length;
              var w = at(this.batchRecords[this.addRowIndex])[at(this.batchRecords[this.addRowIndex]).length - 1];
              w = p(w) ? this.batchRecords[this.addRowIndex] : w;
              a = i
                .map(function (b) {
                  return b['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
                })
                .indexOf(w['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]);
              if (this.isSelfReference) {
                n[this.parent.parentIdMapping] = c;
              }
              ti(
                this.parent.grid.getPrimaryKeyFieldNames()[0],
                n.parentItem,
                'add',
                this.parent,
                this.isSelfReference,
                n,
              );
            }
          } else if (
            (this.parent.editSettings.newRowPosition === 'Above' ||
              this.parent.editSettings.newRowPosition === 'Below') &&
            !p(this.batchRecords[this.addRowIndex])
          ) {
            n.level = this.batchRecords[parseInt(this.addRowIndex.toString(), 10)].level;
            if (n.level && this.selectedIndex > -1) {
              n.parentItem = d;
              n.parentUniqueID = f;
              delete n.parentItem.childRecords;
              delete n.parentItem[this.parent.childMapping];
            }
            n.index = this.parent.editSettings.newRowPosition === 'Below' ? this.batchIndex : this.batchIndex - 1;
            if (this.parent.editSettings.newRowPosition === 'Below' && this.selectedIndex > -1) {
              var m = at(this.batchRecords[this.addRowIndex]).length;
              var w = at(this.batchRecords[this.addRowIndex])[at(this.batchRecords[this.addRowIndex]).length - 1];
              w = p(w) ? this.batchRecords[this.addRowIndex] : w;
              a = i
                .map(function (x) {
                  return x['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
                })
                .indexOf(w['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]);
            }
            if (this.parent.editSettings.newRowPosition === 'Above' && this.selectedIndex > -1) {
              var w = this.batchRecords[this.addRowIndex];
              a = i
                .map(function (v) {
                  return v['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
                })
                .indexOf(this.batchRecords[this.addRowIndex]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]);
            }
            if (this.isSelfReference) {
              n[this.parent.parentIdMapping] = g;
            }
          }
          n.index = n.index === -1 ? 0 : n.index;
          n.hasChildRecords = false;
          n.childRecords = [];
          this.batchRecords.splice(n.index, 0, n);
          this.currentViewRecords.splice(n.index, 0, n);
          a ? (h = a) : (h = n.index);
          if (this.parent.editSettings.newRowPosition !== 'Above') {
            h = n.index === 0 ? h : h + 1;
          }
          i.splice(h, 0, n);
          this.batchAddedRecords.push(n);
        }
        this.parent.grid.getRowsObject()[parseInt(y.toString(), 10)].data = n;
        this.newBatchRowAdded = false;
      }
    }
  };
  r.prototype.beforeBatchAdd = function (t) {
    var e = 'isTabLastRow';
    if (this.parent.editSettings.mode === 'Cell' && this.parent.editModule.isTabLastRow) {
      t.cancel = true;
      this.parent.editModule.isTabLastRow = false;
      return;
    }
    this.parent.editModule.isAddedRowByMethod &&
    !p(this.parent.editModule.addRowIndex) &&
    !this.parent.editModule.isAddedRowByContextMenu &&
    (this.parent.grid.selectedRowIndex === -1 || this.parent.editModule.batchEditModule.isAdd)
      ? ((this.selectedIndex = this.parent.editModule.selectedIndex),
        (this.addRowIndex = this.parent.editModule.addRowIndex),
        (this.addRowRecord = this.batchRecords.length
          ? this.batchRecords[this.selectedIndex]
          : this.parent.getCurrentViewRecords()[this.selectedIndex]))
      : ((this.selectedIndex = this.parent.grid.selectedRowIndex),
        (this.addRowIndex = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0),
        (this.parent.editModule.addRowIndex =
          this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0),
        (this.addRowRecord = this.parent.getSelectedRecords()[0]));
  };
  r.prototype.batchAdd = function (t) {
    if (this.parent.editSettings.newRowPosition !== 'Bottom') {
      this.isAdd = true;
      this.newBatchRowAdded = true;
      var e = 0;
      if (!this.batchRecords.length) {
        this.batchAddedRecords = [];
        this.batchRecords = Ft(this.parent.grid.getCurrentViewRecords());
        this.currentViewRecords = Ft(this.parent.grid.getCurrentViewRecords());
      }
      if (this.parent.editModule.isAddedRowByMethod && !p(this.parent.editModule.addRowIndex)) {
        Yt(this.parent.grid.getDataRows()[0], ['e-batchrow'], []);
      }
      if (this.parent.editSettings.newRowPosition !== 'Top') {
        var i = this.parent.grid.getCurrentViewRecords();
        if (
          this.parent.editSettings.mode === 'Batch' &&
          (this.parent.getBatchChanges()[this.addedRecords].length > 1 ||
            this.parent.getBatchChanges()[this.deletedRecords].length)
        ) {
          i = this.batchRecords;
        }
        this.updateChildCount(i);
        this.parent.notify(Ti, {});
        this.batchChildCount = 0;
      }
      this.updateRowIndex();
      var n = Rt('focusModule', this.parent.grid);
      var s = this.parent.getContentTable();
      this.parent.getBatchChanges()[this.deletedRecords].length && this.parent.editSettings.newRowPosition === 'Above'
        ? ((e = t.row.rowIndex), (n.getContent().matrix.matrix = this.matrix))
        : (e = s.getElementsByClassName('e-batchrow')[0].rowIndex);
      n.getContent().matrix.current = [e, n.getContent().matrix.current[1]];
      if (
        this.parent.editModule.isAddedRowByMethod &&
        !p(this.parent.editModule.addRowIndex) &&
        !this.parent.editModule.isAddedRowByContextMenu
      ) {
        var o = this.parent.getBatchChanges().addedRecords;
        var a =
          parseInt(
            this.parent
              .getContentTable()
              .getElementsByClassName('e-insertedrow')
              [this.parent.getBatchChanges().addedRecords.length - 1].getAttribute('aria-rowindex'),
            10,
          ) - 1;
        this.batchRecords.splice(
          a,
          0,
          this.parent.getBatchChanges().addedRecords[this.parent.getBatchChanges().addedRecords.length - 1],
        );
      }
    }
  };
  r.prototype.beforeBatchDelete = function (t) {
    if (!this.batchRecords.length) {
      this.batchRecords = Ft(this.parent.grid.getCurrentViewRecords());
      this.currentViewRecords = Ft(this.parent.grid.getCurrentViewRecords());
    }
    var e = Rt('focusModule', this.parent.grid);
    this.matrix = e.getContent().matrix.matrix;
    var i = [];
    var n = [];
    var s = this.parent.grid.getPrimaryKeyFieldNames()[0];
    var o;
    var a;
    var h;
    var l = Array.isArray(t.row) ? t.row[0] : t.row;
    !p(l) && this.parent.getSelectedRows().indexOf(l) === -1
      ? ((o = t.rowData), (a = at(o)), (h = l.getAttribute('data-uid')))
      : ((o = this.parent.grid.getSelectedRecords()[this.parent.grid.getSelectedRecords().length - 1]),
        (a = at(o)),
        (h = this.parent.getSelectedRows()[0].getAttribute('data-uid')));
    var u = parseInt(this.parent.grid.getRowElementByUID(h).getAttribute('aria-rowindex'), 10) - 1;
    if (a.length)
      for (var d = u + a.length, c = u + 1, f = c; f <= d; f++) {
        i.push(this.parent.grid.getDataRows()[parseInt(f.toString(), 10)]);
        if (this.parent.frozenRows || this.parent.frozenColumns || this.parent.getFrozenColumns()) {
          i.push(this.parent.grid.getHeaderContent()[parseInt(f.toString(), 10)]);
        }
      }
    if (!p(o.parentItem)) {
      var g = gt(this.parent, o.parentItem.uniqueID);
      if (!p(g) && g.hasChildRecords) {
        var y = g.childRecords.indexOf(o);
        g.childRecords.splice(y, 1);
      }
      this.batchDeletedRecords = Ft(this.batchDeletedRecords);
      this.batchDeletedRecords.push(o);
    }
    a.push(o);
    n = a;
    for (
      var m = function (b) {
          var v = w.batchRecords.findIndex(function (x) {
            return (
              x['' + this.parent.grid.getPrimaryKeyFieldNames()[0]] ===
              n[parseInt(b.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]
            );
          });
          if (v !== -1) {
            w.batchRecords.splice(v, 1);
          }
        },
        w = this,
        f = 0;
      f < n.length;
      f++
    )
      m(f);
    for (var f = 0; f < i.length; f++)
      if (!p(i[parseInt(f.toString(), 10)])) {
        this.parent.grid.selectionModule.selectedRecords.push(i[parseInt(f.toString(), 10)]);
      }
  };
  r.prototype.updateRowIndex = function () {
    for (var t = this.parent.grid.getDataRows(), e = 0; e < t.length; e++)
      t[parseInt(e.toString(), 10)].setAttribute('aria-rowindex', (e + 1).toString());
  };
  r.prototype.updateChildCount = function (t) {
    for (
      var e = this.parent.grid.getPrimaryKeyFieldNames()[0],
        i = this.parent.getBatchChanges().addedRecords || [],
        n = this.parent.editSettings.newRowPosition === 'Child' ? 'primaryParent' : 'parentItem',
        s = 0;
      s < i.length;
      s++
    )
      if (!p(i[parseInt(s.toString(), 10)]['' + n])) {
        if (i[parseInt(s.toString(), 10)]['' + n]['' + e] === t[parseInt(this.addRowIndex.toString(), 10)]['' + e]) {
          this.batchChildCount = this.batchChildCount + 1;
        }
      }
  };
  r.prototype.beforeBatchSave = function (t) {
    var e = 'changedRecords';
    var i = 'deletedRecords';
    var n = t.batchChanges.changedRecords;
    if (t.batchChanges.changedRecords.length)
      for (var s = void 0, o = 0; o < t.batchChanges.changedRecords.length; o++)
        Ie(
          {
            value: t.batchChanges.changedRecords[parseInt(o.toString(), 10)],
            action: 'edit',
          },
          this.parent,
          this.isSelfReference,
          this.addRowIndex,
          this.selectedIndex,
          s,
        );
    if (t.batchChanges.deletedRecords.length)
      for (var a = t.batchChanges.deletedRecords, h = a, o = 0; o < h.length; o++) {
        this.deleteUniqueID(h[parseInt(o.toString(), 10)].uniqueID);
        for (var l = at(h[parseInt(o.toString(), 10)]), u = 0; u < l.length; u++)
          this.deleteUniqueID(l[parseInt(u.toString(), 10)].uniqueID);
        t.batchChanges.deletedRecords = t.batchChanges.deletedRecords.concat(l);
      }
    this.isAdd = false;
  };
  r.prototype.deleteUniqueID = function (t) {
    var e = 'uniqueIDFilterCollection';
    delete this.parent.uniqueIDFilterCollection['' + t];
    var i = 'uniqueIDCollection';
    delete this.parent.uniqueIDCollection['' + t];
  };
  r.prototype.batchCancelAction = function () {
    var t = this;
    var e = 'targetElement';
    var i;
    var n = 'parentItem';
    var s = 'index';
    var o = this.parent.grid.getCurrentViewRecords();
    var a = 'childRecords';
    var h =
      this.parent.grid.dataSource instanceof ut
        ? this.parent.grid.dataSource.dataSource.json
        : this.parent.grid.dataSource;
    var l = this.parent.grid.getPrimaryKeyFieldNames()[0];
    if (!p(this.batchAddedRecords))
      for (
        var u = function (y) {
            i = h.findIndex(function (b) {
              return (
                b['' + this.parent.grid.getPrimaryKeyFieldNames()[0]] ===
                t.batchAddedRecords[parseInt(y.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]
              );
            });
            if (i !== -1) {
              h.splice(i, 1);
            }
            if (
              d.parent.editSettings.newRowPosition === 'Child' &&
              ((i = o
                .map(function (b) {
                  return b['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
                })
                .indexOf(
                  d.batchAddedRecords[parseInt(y.toString(), 10)].parentItem
                    ? d.batchAddedRecords[parseInt(y.toString(), 10)].parentItem[
                        '' + this.parent.grid.getPrimaryKeyFieldNames()[0]
                      ]
                    : d.batchAddedRecords[parseInt(y.toString(), 10)][
                        '' + this.parent.grid.getPrimaryKeyFieldNames()[0]
                      ],
                )),
              !p(o[parseInt(i.toString(), 10)]))
            )
              for (var m = o[parseInt(i.toString(), 10)].childRecords, w = 0; m && w < m.length; w++)
                if (
                  m[parseInt(w.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]] ===
                  d.batchAddedRecords[parseInt(y.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]
                ) {
                  m.splice(w, 1);
                }
          },
          d = this,
          c = 0;
        c < this.batchAddedRecords.length;
        c++
      )
        u(c);
    if (!p(this.parent.targetElement)) {
      var f = this.parent.targetElement.closest('tr');
      this.parent.collapseRow(f);
      this.parent.targetElement = null;
    }
    if (!p(this.batchDeletedRecords)) {
      for (var c = 0; c < this.batchDeletedRecords.length; c++)
        if (!p(this.batchDeletedRecords[parseInt(c.toString(), 10)].parentItem)) {
          i = o
            .map(function (m) {
              return m['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
            })
            .indexOf(
              this.batchDeletedRecords[parseInt(c.toString(), 10)].parentItem[
                '' + this.parent.grid.getPrimaryKeyFieldNames()[0]
              ],
            );
          var g =
            this.batchDeletedRecords[parseInt(c.toString(), 10)].index === 0
              ? this.batchDeletedRecords[parseInt(c.toString(), 10)].index
              : this.batchDeletedRecords[parseInt(c.toString(), 10)].index - 1;
          if (!p(o[parseInt(i.toString(), 10)])) {
            o[parseInt(i.toString(), 10)].childRecords.splice(
              g,
              0,
              this.batchDeletedRecords[parseInt(c.toString(), 10)],
            );
          }
        }
    }
    this.batchAddedRecords = this.batchRecords = this.batchAddRowRecord = this.currentViewRecords = [];
    this.batchRecords = Ft(this.parent.grid.getCurrentViewRecords());
    this.batchIndex = 0;
    this.currentViewRecords = Ft(this.parent.grid.getCurrentViewRecords());
    this.batchDeletedRecords = [];
    this.parent.grid.renderModule.refresh();
  };
  r.prototype.batchSave = function (t) {
    if (this.parent.editSettings.mode === 'Batch') {
      var e = void 0;
      var i = Object.hasOwnProperty.call(t, 'updatedRecords') ? t.updatedRecords : this.parent.getBatchChanges();
      var n = 'deletedRecords';
      var s = 'addedRecords';
      var o = 'index';
      var a = 'uniqueID';
      var h =
        this.parent.grid.dataSource instanceof ut
          ? this.parent.grid.dataSource.dataSource.json
          : this.parent.grid.dataSource;
      var l = this.parent.grid.getCurrentViewRecords();
      var u = this.parent.grid.getPrimaryKeyFieldNames()[0];
      var d = 'level';
      var c = i.addedRecords;
      var f = 'parentItem';
      var g = void 0;
      var y = void 0;
      var m = void 0;
      var w;
      var b = 'childRecords';
      if (i.addedRecords.length > 1 && this.parent.editSettings.newRowPosition !== 'Bottom') {
        i.addedRecords.reverse();
      }
      if (this.parent.editSettings.newRowPosition !== 'Bottom' && !Object.hasOwnProperty.call(t, 'updatedRecords')) {
        h.splice(h.length - i.addedRecords.length, i.addedRecords.length);
        if (
          this.parent.editModule.isAddedRowByMethod &&
          i.addedRecords.length &&
          !p(this.parent.editModule.addRowIndex) &&
          !this.parent.editModule.isAddedRowByContextMenu
        ) {
          i.addedRecords.reverse();
          for (var v = 0; v < i.addedRecords.length; v++) {
            var x =
              parseInt(
                this.parent
                  .getContentTable()
                  .getElementsByClassName('e-insertedrow')
                  [parseInt(v.toString(), 10)].getAttribute('aria-rowindex'),
                10,
              ) - 1;
            h.splice(x, 0, i.addedRecords[parseInt(v.toString(), 10)]);
          }
        }
        if (!this.parent.allowPaging && h.length !== l.length)
          if (l.length > i.addedRecords.length) {
            l.splice(l.length - i.addedRecords.length, i.addedRecords.length);
          } else {
            var P = Ft(h);
            if (P.length) {
              var B = P.map(function (z) {
                return z['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
              }).indexOf(l[0]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]);
              var R = B + this.parent.grid.pageSettings.pageSize;
              l = P.splice(B, R);
            }
          }
      }
      for (
        this.batchAddRowRecord.length === 0 && this.batchAddRowRecord.push(this.parent.flatData[t.index]),
          this.parent.editModule.isAddedRowByContextMenu && i.addedRecords.reverse(),
          e = 0;
        e < i.addedRecords.length;
        e++
      ) {
        var L = Vt({}, i.addedRecords[parseInt(e.toString(), 10)]);
        delete L.parentItem;
        delete L.uniqueID;
        delete L.index;
        delete L.level;
        delete L.hasChildRecords;
        delete L.childRecords;
        delete L.parentUniqueID;
        if (!p(L.primaryParent)) {
          delete L.primaryParent;
        }
        if (i.addedRecords.length > 1 && this.parent.editModule.isAddedRowByContextMenu) {
          var O = this.parent.editSettings.newRowPosition;
          this.parent.editSettings.newRowPosition = this.parent.editModule.previousNewRowPosition;
          this.parent.editModule.previousNewRowPosition = this.parent.editSettings.newRowPosition;
        }
        i.addedRecords[parseInt(e.toString(), 10)].taskData = L;
        w = this.batchAddRowRecord[parseInt(e.toString(), 10)];
        if (p(w)) {
          w = this.batchAddRowRecord[e - 1];
        }
        if (this.isSelfReference) {
          if (!p(i.addedRecords[parseInt(e.toString(), 10)].parentItem)) {
            ti(
              this.parent.grid.getPrimaryKeyFieldNames()[0],
              i.addedRecords[parseInt(e.toString(), 10)].parentItem,
              'add',
              this.parent,
              this.isSelfReference,
              i.addedRecords[parseInt(e.toString(), 10)],
            );
          }
        }
        if (!p(w)) {
          y = w.index;
        }
        if (p(i.addedRecords[parseInt(e.toString(), 10)].index)) {
          y = 0;
        }
        if (
          this.parent.editSettings.newRowPosition !== 'Top' &&
          this.parent.editSettings.newRowPosition !== 'Bottom' &&
          p(i.addedRecords[parseInt(e.toString(), 10)].parentItem) &&
          this.selectedIndex === -1
        ) {
          g = -1;
          w = null;
        }
        Ie(
          {
            value: i.addedRecords[parseInt(e.toString(), 10)],
            action: 'add',
          },
          this.parent,
          this.isSelfReference,
          y,
          g,
          m,
          w,
        );
        g = null;
        if (
          this.parent.editSettings.newRowPosition === 'Child' &&
          !p(i.addedRecords[parseInt(e.toString(), 10)].parentItem) &&
          (p(this.parent.editModule.addRowIndex) || this.isSelfReference)
        ) {
          var T = l
            .map(function (z) {
              return z['' + this.parent.grid.getPrimaryKeyFieldNames()[0]];
            })
            .indexOf(
              i.addedRecords[parseInt(e.toString(), 10)].parentItem['' + this.parent.grid.getPrimaryKeyFieldNames()[0]],
            );
          var M = l[parseInt(T.toString(), 10)].childRecords;
          if (
            !p(y) &&
            l[parseInt(T.toString(), 10)].childRecords.some(function (z) {
              return z.uniqueID === w.uniqueID;
            })
          )
            for (var F = 0; F < l[parseInt(T.toString(), 10)].childRecords.length; F++)
              if (
                l[parseInt(T.toString(), 10)].childRecords[parseInt(F.toString(), 10)][
                  '' + this.parent.grid.getPrimaryKeyFieldNames()[0]
                ] === i.addedRecords[parseInt(e.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]]
              ) {
                l[parseInt(T.toString(), 10)].childRecords.splice(F, 1);
              }
        }
      }
      if (i.deletedRecords.length)
        for (e = 0; e < i.deletedRecords.length; e++)
          Ie(
            {
              value: i.deletedRecords[parseInt(e.toString(), 10)],
              action: 'delete',
            },
            this.parent,
            this.isSelfReference,
            y,
            g,
            m,
            w,
          );
      this.parent.parentData = [];
      for (var V = 0; V < h.length; V++) {
        h[parseInt(V.toString(), 10)].index = V;
        $('uniqueIDCollection.' + h[parseInt(V.toString(), 10)].uniqueID + '.index', V, this.parent);
        if (!h[parseInt(V.toString(), 10)].level) {
          this.parent.parentData.push(h[parseInt(V.toString(), 10)]);
        }
      }
    }
    this.batchAddRowRecord =
      this.batchAddedRecords =
      this.batchRecords =
      this.batchDeletedRecords =
      this.currentViewRecords =
        [];
    if (this.parent.editModule.isAddedRowByContextMenu) {
      this.parent.editModule.isAddedRowByContextMenu = false;
    }
  };
  r.prototype.getActualRowObjectIndex = function (t) {
    var e = this.parent.grid.getDataRows();
    if (
      (this.parent.editSettings.newRowPosition === 'Below' || this.parent.editSettings.newRowPosition === 'Child') &&
      this.selectedIndex > -1
    ) {
      if (!p(this.batchRecords[this.addRowIndex]) && this.batchRecords[this.addRowIndex].expanded)
        if (
          this.parent.getBatchChanges()[this.addedRecords].length > 1 ||
          this.parent.getBatchChanges()[this.deletedRecords].length
        ) {
          t += at(this.batchRecords[this.addRowIndex]).length;
          if (this.parent.editSettings.newRowPosition !== 'Child') {
            var i = this.getBatchChildCount();
            t = t + i;
          }
        } else t += at(this.batchRecords[this.addRowIndex]).length;
      if (t >= e.length) {
        t = e.length - 1;
      }
      this.updateChildCount(this.parent.grid.getCurrentViewRecords());
      if (this.batchChildCount) {
        t += this.batchChildCount;
      }
      this.batchChildCount = 0;
    }
    return t;
  };
  r.prototype.immutableBatchAction = function (t) {
    t.args.cancel = true;
    var e = this.parent.grid.getBatchChanges();
    var i = [];
    var n = 'index';
    if (Object.keys(e).length) {
      i = e.addedRecords;
    }
    for (var s = 0; s < i.length; s++) t.rows.splice(i[parseInt(s.toString(), 10)].index, 1);
  };
  r.prototype.nextCellIndex = function (t) {
    var e = 'index';
    var i = 'rowIndex';
    var n = this.parent.getBatchChanges();
    var s = n.deletedRecords;
    this.parent.getSelectedRows().length
      ? this.isAdd && n.deletedRecords.length > 0
        ? (t.index = this.parent.getSelectedRecords()[0].index)
        : (t.index = this.parent.getSelectedRows()[0].rowIndex)
      : (t.index = this.batchIndex);
  };
  r.prototype.onCellFocused = function (t) {
    if (
      this.parent.editSettings.mode === 'Cell' &&
      this.parent.grid.isEdit &&
      t.keyArgs &&
      t.keyArgs.action === 'shiftEnter'
    ) {
      t.keyArgs.preventDefault();
      this.parent.endEdit();
      return;
    }
  };
  return r;
})();
var _a = (function () {
  function r(t) {
    this.addedRecords = 'addedRecords';
    this.deletedRecords = 'deletedRecords';
    this.prevAriaRowIndex = '-1';
    this.isAddedRowByMethod = false;
    this.isAddedRowByContextMenu = false;
    this.isIndexUndefined = false;
    Be.Inject(js);
    this.parent = t;
    this.isSelfReference = !p(t.parentIdMapping);
    this.previousNewRowPosition = null;
    this.internalProperties = {};
    this.batchEditModule = new Va(this.parent);
    this.addEventListener();
  }
  r.prototype.getModuleName = function () {
    return 'edit';
  };
  r.prototype.addEventListener = function () {
    this.parent.on(jr, this.crudAction, this);
    this.parent.on(Gr, this.beginEdit, this);
    this.parent.on(Ti, this.beginAdd, this);
    this.parent.on(Hr, this.recordDoubleClick, this);
    this.parent.on(Es, this.cellSave, this);
    this.parent.on(Wr, this.batchCancel, this);
    this.parent.grid.on(Ur, this.keyPressed, this);
    this.parent.grid.on('batchedit-form', this.lastCellTab, this);
    this.parent.grid.on('content-ready', this.contentready, this);
    this.parent.on(Pi, this.cellEdit, this);
    this.parent.on('actionBegin', this.editActionEvents, this);
    this.parent.on('actionComplete', this.editActionEvents, this);
    this.parent.grid.on(_r, this.recordDoubleClick, this);
    this.parent.grid.on('dblclick', this.gridDblClick, this);
    this.parent.grid.on('recordAdded', this.customCellSave, this);
    this.parent.on('savePreviousRowPosition', this.savePreviousRowPosition, this);
    this.parent.grid.on(qr, this.beforeStartEdit, this);
    this.parent.grid.on(Kr, this.beforeBatchCancel, this);
    this.parent.grid.on('reset-edit-props', this.resetIsOnBatch, this);
    this.parent.grid.on('get-row-position', this.getRowPosition, this);
  };
  r.prototype.gridDblClick = function (t) {
    this.doubleClickTarget = t.target;
    if (t.target.classList.contains('e-frame') && this.parent.getCurrentViewRecords().length === 0) {
      this.doubleClickTarget = null;
    }
    if (t.target.classList.contains('e-treegridcollapse') || t.target.classList.contains('e-treegridexpand')) {
      var e = H(t.target, 'e-row');
      var i = e && parseInt(e.getAttribute('aria-rowindex'), 10) - 1;
      if (!p(i) && i >= 0 && this.parent.allowPaging) {
        this.parent.grid.getDataRows()[i].dataset.uid = this.parent.grid.contentModule.getRows()[i].uid;
      }
    }
  };
  r.prototype.getRowPosition = function (t) {
    t.newRowPosition = this.parent.editSettings.newRowPosition;
    t.addRowIndex = this.addRowIndex;
    t.dataRowIndex = +this.prevAriaRowIndex;
  };
  r.prototype.beforeStartEdit = function (t) {
    if (this.parent.editSettings.mode === 'Cell') {
      this.parent.trigger(Ai, t);
    }
  };
  r.prototype.beforeBatchCancel = function (t) {
    if (this.parent.editSettings.mode === 'Cell') {
      t.requestType = 'cancel';
      this.parent.trigger(Jr, t);
    }
  };
  r.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off(jr, this.crudAction);
      this.parent.off(Gr, this.beginEdit);
      this.parent.off(Ti, this.beginAdd);
      this.parent.off(Hr, this.recordDoubleClick);
      this.parent.off(Wr, this.batchCancel);
      this.parent.grid.off(Ur, this.keyPressed);
      this.parent.grid.off('batchedit-form', this.lastCellTab);
      this.parent.grid.off('content-ready', this.contentready);
      this.parent.off(Pi, this.cellEdit);
      this.parent.off('actionBegin', this.editActionEvents);
      this.parent.off('actionComplete', this.editActionEvents);
      this.parent.grid.off('recordAdded', this.customCellSave);
      this.parent.grid.off(_r, this.recordDoubleClick);
      this.parent.off('savePreviousRowPosition', this.savePreviousRowPosition);
      this.parent.grid.off(qr, this.beforeStartEdit);
      this.parent.grid.off(Kr, this.beforeBatchCancel);
      this.parent.grid.off('dblclick', this.gridDblClick);
      this.parent.grid.off('reset-edit-props', this.resetIsOnBatch);
      this.parent.grid.off('get-row-position', this.getRowPosition);
    }
  };
  r.prototype.destroy = function () {
    this.removeEventListener();
  };
  r.prototype.applyFormValidation = function (t) {
    this.parent.grid.editModule.applyFormValidation(t);
  };
  r.prototype.editActionEvents = function (t) {
    var e = ee('editAction', t);
    var i = ee('name', e);
    var n = this.parent;
    var s = !p(this.parent.dataSource) && this.parent.dataSource.adaptor;
    if (
      !p(s) &&
      (Se(this.parent) || s instanceof qe) &&
      e.requestType === 'save' &&
      e.action === 'add' &&
      (this.parent.editSettings.newRowPosition === 'Child' ||
        this.parent.editSettings.newRowPosition === 'Below' ||
        this.parent.editSettings.newRowPosition === 'Above')
    ) {
      if (i === 'actionBegin') {
        var o = p(e.row) || !Object.keys(e.row).length ? this.selectedIndex : e.row.rowIndex - 1;
        var a =
          !p(o) && o !== -1
            ? this.parent.getCurrentViewRecords()[parseInt(o.toString(), 10)][this.parent.getPrimaryKeyFieldNames()[0]]
            : -1;
        this.parent.grid.query.addParams('relationalKey', a);
      } else if (i === 'actionComplete')
        for (var h = this.parent.grid.query.params.length, l = 0; l < h; l++)
          if (this.parent.grid.query.params[parseInt(l.toString(), 10)].key === 'relationalKey') {
            this.parent.grid.query.params.splice(l);
          }
    }
    if (this.parent.enableInfiniteScrolling && i === 'actionComplete') {
      this.infiniteAddAction(e);
    }
    if (this.parent.editSettings.mode === 'Batch' && e.requestType === 'paging') {
      this.parent.notify('batchPageAction', {});
    }
  };
  r.prototype.infiniteAddAction = function (t) {
    if ((t.requestType === 'save' && t.action === 'add') || t.requestType === 'delete') {
      if (
        this.parent.editSettings.newRowPosition !== 'Top' &&
        this.selectedIndex !== -1 &&
        t.requestType === 'save' &&
        t.action === 'add'
      ) {
        var e = this.parent.grid.getRowsObject();
        var i = e.splice(0, 1)[0];
        var n = this.addRowIndex;
        var s = this.parent.getCurrentViewRecords();
        if (
          this.parent.editSettings.newRowPosition === 'Below' ||
          this.parent.editSettings.newRowPosition === 'Child'
        ) {
          n += at(s[n + 1]).length;
        }
        n = this.parent.editSettings.newRowPosition === 'Below' ? n + 1 : n;
        e.splice(n, 0, e.splice(0, 1)[0]);
        var o = s.splice(0, 1)[0];
        s.splice(n, 0, s.splice(0, 1)[0]);
        this.updateInfiniteCurrentViewData(s.splice(0, 1)[0], this.addRowIndex);
      }
      var a = this.parent.grid.getRows();
      var h = this.parent.grid.getRowsObject();
      var l = this.parent.infiniteScrollSettings.enableCache;
      if (!this.parent.infiniteScrollSettings.enableCache) {
        Oi(this.parent.grid, this.parent.grid.getRowsObject(), this.parent.grid.getRows(), 0);
        this.updateIndex(this.parent.grid.dataSource, this.parent.getRows(), this.parent.getCurrentViewRecords());
      }
      if (!this.parent.infiniteScrollSettings.enableCache && this.parent.getFrozenColumns() > 0) {
        Oi(this.parent.grid, h, a, 0);
        this.updateIndex(this.parent.grid.dataSource, a, this.parent.getCurrentViewRecords());
      }
    }
  };
  r.prototype.updateInfiniteCurrentViewData = function (t, e) {
    var i = this;
    var n = 'infiniteCurrentViewData';
    var s = 'updateCurrentViewData';
    var o = Math.ceil(e / this.parent.grid.pageSettings.pageSize);
    var a = o > 0 ? o : 1;
    var h = e - (a - 1) * this.parent.pageSettings.pageSize;
    var l = this.parent.grid.infiniteScrollModule.infiniteCurrentViewData;
    this.parent.grid.infiniteScrollModule.infiniteCurrentViewData[1].splice(0, 1);
    var u = this.parent.grid.infiniteScrollModule.infiniteCurrentViewData[parseInt(a.toString(), 10)];
    if (!p(this.addRowRecord)) {
      u.filter(function (d, c) {
        if (d.uniqueID === i.addRowRecord.uniqueID) {
          h = c;
        }
      });
      if (
        (this.addRowRecord.hasChildRecords &&
          this.addRowRecord.childRecords.length &&
          this.parent.editSettings.newRowPosition === 'Below') ||
        this.parent.editSettings.newRowPosition === 'Child'
      ) {
        h += at(this.addRowRecord).length;
      }
    }
    if (h >= this.parent.pageSettings.pageSize) {
      a += 1;
      u = this.parent.grid.infiniteScrollModule.infiniteCurrentViewData[parseInt(a.toString(), 10)];
      h = h - this.parent.pageSettings.pageSize >= 0 ? h - this.parent.pageSettings.pageSize : 0;
    }
    h = this.parent.editSettings.newRowPosition === 'Below' ? h + 1 : h;
    u.splice(h, 0, t);
    this.parent.grid.infiniteScrollModule.updateCurrentViewData();
  };
  r.prototype.recordDoubleClick = function (t) {
    var e = t.target;
    if (
      !p(t.target.closest('td.e-rowcell')) &&
      !(!this.parent.grid.editSettings.allowEditing || this.parent.grid.isEdit)
    ) {
      var i = this.parent.grid.getColumnByIndex(+t.target.closest('td.e-rowcell').getAttribute('aria-colindex') - 1);
      if (
        this.parent.editSettings.mode === 'Cell' &&
        !this.isOnBatch &&
        i &&
        !i.isPrimaryKey &&
        this.parent.editSettings.allowEditing &&
        i.allowEditing &&
        !(t.target.classList.contains('e-treegridexpand') || t.target.classList.contains('e-treegridcollapse')) &&
        this.parent.editSettings.allowEditOnDblClick
      ) {
        this.isOnBatch = true;
        this.parent.grid.setProperties({ selectedRowIndex: t.rowIndex }, true);
        if (this.parent.enableVirtualization) {
          var n = H(t.target, 'e-row');
          this.prevAriaRowIndex = n.getAttribute('aria-rowindex');
          n.setAttribute('aria-rowindex', n.rowIndex + 1 + '');
        }
        this.updateGridEditMode('Batch');
      } else if (this.parent.editSettings.mode === 'Cell' && (!i.allowEditing || i.isPrimaryKey)) {
        this.isOnBatch = true;
        this.updateGridEditMode('Batch');
      }
    }
  };
  r.prototype.updateGridEditMode = function (t) {
    this.parent.grid.setProperties({ editSettings: { mode: t } }, true);
    var e = ee('updateEditObj', this.parent.grid.editModule);
    e.apply(this.parent.grid.editModule);
    this.parent.grid.isEdit = false;
  };
  r.prototype.resetIsOnBatch = function () {
    if (this.parent.enableVirtualization && this.parent.editSettings.mode === 'Cell') {
      this.isOnBatch = false;
      this.updateGridEditMode('Normal');
    }
  };
  r.prototype.keyPressed = function (t) {
    if (this.isOnBatch || t.action === 'tab' || t.action === 'shiftTab') {
      this.keyPress = t.action;
    }
    if (t.action === 'f2') {
      this.recordDoubleClick(t);
    }
    if (t.action === 'escape') {
      this.closeEdit();
    }
  };
  r.prototype.deleteUniqueID = function (t) {
    var e = 'uniqueIDFilterCollection';
    delete this.parent.uniqueIDFilterCollection['' + t];
    var i = 'uniqueIDCollection';
    delete this.parent.uniqueIDCollection['' + t];
  };
  r.prototype.cellEdit = function (t) {
    var e = this;
    var i = 'promise';
    var n = t.promise;
    delete t.promise;
    if (this.parent.enableVirtualization && !p(this.prevAriaRowIndex) && this.prevAriaRowIndex !== '-1') {
      t.row.setAttribute('aria-rowindex', this.prevAriaRowIndex);
      this.prevAriaRowIndex = void 0;
    }
    if (this.keyPress !== 'enter') {
      this.parent.trigger(Pi, t, function (s) {
        !s.cancel && e.parent.editSettings.mode === 'Cell'
          ? e.enableToolbarItems('edit')
          : s.cancel &&
            e.parent.editSettings.mode === 'Cell' &&
            ((e.isOnBatch = false), e.updateGridEditMode('Normal'));
        if (!p(t.promise)) {
          t.promise.resolve(s);
        }
      });
    }
    if (
      this.doubleClickTarget &&
      (this.doubleClickTarget.classList.contains('e-treegridexpand') ||
        this.doubleClickTarget.classList.contains('e-treegridcollapse') ||
        this.doubleClickTarget.classList.contains('e-summarycell'))
    ) {
      t.cancel = true;
      this.doubleClickTarget = null;
      return;
    }
    if (this.parent.editSettings.mode === 'Cell') {
      this.keyPress === 'tab' || this.keyPress === 'shiftTab'
        ? (this.keyPress = null)
        : this.keyPress === 'enter' &&
          ((t.cancel = true), (this.keyPress = null), $('isEditCollapse', false, this.parent));
      if (!t.columnObject.allowEditing) {
        t.cancel = true;
      }
    }
    if (this.parent.enableVirtualization) {
      this.parent.grid.contentModule.editedRowIndex = this.parent.grid.editModule.editModule.index;
    }
  };
  r.prototype.enableToolbarItems = function (t) {
    if (!p(this.parent.grid.toolbarModule)) {
      var e = this.parent.element.id + '_gridcontrol_';
      this.parent.grid.toolbarModule.enableItems([e + 'add', e + 'edit', e + 'delete'], t === 'save');
      this.parent.grid.toolbarModule.enableItems([e + 'update', e + 'cancel'], t === 'edit');
    }
  };
  r.prototype.batchCancel = function () {
    if (this.parent.editSettings.mode === 'Cell') {
      var t = Rt('editModule.cellDetails', this.parent.grid.editModule);
      if (!p(this.editedRowIndex)) {
        t.rowIndex = this.editedRowIndex;
      }
      var e = this.parent.getCellFromIndex(t.rowIndex, this.parent.treeColumnIndex);
      this.parent.renderModule.cellRender({
        data: t.rowData,
        cell: e,
        column: this.parent.grid.getColumns()[this.parent.treeColumnIndex],
      });
      this.updateGridEditMode('Normal');
      this.isOnBatch = false;
    }
    if (this.parent.editSettings.mode === 'Batch') {
      this.parent.notify('batchCancelAction', {});
    }
  };
  r.prototype.customCellSave = function (t) {
    if (se(this.parent) && this.parent.editSettings.mode === 'Cell' && t.action === 'edit') {
      this.updateCell(t, t.rowIndex);
      this.afterCellSave(t, t.row);
    }
  };
  r.prototype.cellSave = function (t) {
    var e = this;
    if (this.parent.editSettings.mode === 'Cell' && this.parent.element.querySelector('form')) {
      t.cancel = true;
      var i = 'editModule';
      $('isEditCollapse', true, this.parent);
      t.rowData[t.columnName] = t.value;
      var n;
      p(t.cell) ? (n = this.parent.grid.editModule.editModule.form.parentElement.parentNode) : (n = t.cell.parentNode);
      var s;
      var o = this.parent.getPrimaryKeyFieldNames();
      if (p(n))
        this.parent.grid.getCurrentViewRecords().filter(function (f, g) {
          if (f[o[0]] === t.rowData[o[0]]) {
            s = g;
            return;
          }
        });
      else {
        var a = this.parent.getFrozenLeftColumnsCount() > 0 || this.parent.getFrozenRightColumnsCount() > 0;
        a
          ? this.parent.getRows().indexOf(n) !== -1
            ? (s = this.parent.getRows().indexOf(n))
            : (s = this.parent.getRows().indexOf(n))
          : (s =
              this.parent.getRows().indexOf(n) === -1 && this.parent.getFrozenColumns() > 0
                ? this.parent.grid.getRows().indexOf(n)
                : this.parent.getRows().indexOf(n));
      }
      var h = {};
      Vt(h, t);
      h.cancel = false;
      h.type = 'save';
      n = this.parent.grid.getRows()[n.rowIndex];
      this.parent.trigger(Ai, h);
      if (n.rowIndex === this.parent.getCurrentViewRecords().length - 1 && this.keyPress === 'tab') {
        this.isTabLastRow = true;
      }
      if (!Se(this.parent) && !(this.parent.dataSource instanceof ut && this.parent.dataSource.adaptor instanceof qe))
        if (se(this.parent)) {
          var l = 'eventPromise';
          var u = {
            requestType: 'save',
            data: t.rowData,
            action: 'edit',
            row: n,
            rowIndex: s,
            rowData: t.rowData,
            columnName: t.columnName,
            filterChoiceCount: null,
            excelSearchOperator: null,
          };
          this.parent.grid.getDataModule().eventPromise(u, this.parent.grid.query);
        } else {
          this.updateCell(t, s);
          $('isEdit', false, this.parent.grid);
          this.afterCellSave(t, n);
        }
      else if (
        Se(this.parent) ||
        (this.parent.dataSource instanceof ut && this.parent.dataSource.adaptor instanceof qe)
      ) {
        var d = this.parent.grid.query;
        if (this.parent.isGantt && this.parent.loadChildOnDemand) {
          this.updateCell(t, s);
          $('isEdit', false, this.parent.grid);
          this.afterCellSave(t, n);
        } else {
          var c = null;
          c = this.parent.grid.dataSource.update(
            o[0],
            t.rowData,
            this.parent.grid.query.fromTable,
            this.parent.grid.query,
            t.previousValue,
          );
          c.then(function (f) {
            if (!p(f)) {
              t.rowData[t.columnName] = f[t.columnName];
            }
            e.updateCell(t, s);
            $('isEdit', false, e.parent.grid);
            e.afterCellSave(t, n);
          });
        }
      }
    }
    if (this.parent.enableVirtualization) {
      this.parent.grid.contentModule.virtualData = {};
    }
  };
  r.prototype.afterCellSave = function (t, e) {
    if (this.parent.grid.aggregateModule) {
      this.parent.grid.aggregateModule.refresh(t.rowData);
    }
    this.parent.grid.editModule.destroyWidgets([this.parent.grid.getColumnByField(t.columnName)]);
    this.parent.grid.editModule.formObj.destroy();
    if (this.keyPress !== 'tab' && this.keyPress !== 'shiftTab') {
      this.updateGridEditMode('Normal');
      this.isOnBatch = false;
    }
    this.enableToolbarItems('save');
    Mt([e], ['e-editedrow', 'e-batchrow']);
    Mt(e.querySelectorAll('.e-rowcell'), ['e-editedbatchcell', 'e-updatedtd']);
    if (this.parent.isCellSaveFocus !== false) {
      this.parent.grid.focusModule.restoreFocus();
    }
    Ie(
      {
        value: t.rowData,
        action: 'edit',
      },
      this.parent,
      this.isSelfReference,
      this.addRowIndex,
      this.selectedIndex,
      t.columnName,
    );
    if (e.rowIndex === this.parent.getCurrentViewRecords().length - 1 && this.keyPress === 'enter') {
      this.keyPress = null;
    }
    var i = {
      type: 'save',
      column: this.parent.getColumnByField(t.columnName),
      data: t.rowData,
      previousData: t.previousValue,
      row: e,
      target: t.cell,
    };
    if (
      this.parent.aggregates.map(function (n) {
        return n.showChildSummary === true;
      }).length
    ) {
      this.parent.grid.refresh();
    }
    this.parent.trigger(Jr, i);
  };
  r.prototype.lastCellTab = function () {
    if (
      !this.parent.grid.isEdit &&
      this.isOnBatch &&
      this.keyPress === 'tab' &&
      this.parent.editSettings.mode === 'Cell'
    ) {
      this.parent.editSettings.allowNextRowEdit
        ? this.enableToolbarItems('edit')
        : (this.updateGridEditMode('Normal'), (this.isOnBatch = false), (this.keyPress = null));
    }
  };
  r.prototype.updateCell = function (t, e) {
    this.parent.grid.editModule.updateCell(e, t.columnName, t.rowData[t.columnName]);
    this.parent.grid.getRowsObject()[parseInt(e.toString(), 10)].data = t.rowData;
  };
  r.prototype.crudAction = function (t, e) {
    Ie(t, this.parent, this.isSelfReference, this.addRowIndex, this.selectedIndex, e, this.addRowRecord);
    this.parent.parentData = [];
    for (
      var i =
          this.parent.grid.dataSource instanceof ut
            ? this.parent.grid.dataSource.dataSource.json
            : this.parent.grid.dataSource,
        n = 0;
      n < i.length;
      n++
    ) {
      i[parseInt(n.toString(), 10)].index = n;
      var s = this.parent.grid.getPrimaryKeyFieldNames()[0];
      if (
        t.value['' + this.parent.grid.getPrimaryKeyFieldNames()[0]] ===
          i[parseInt(n.toString(), 10)]['' + this.parent.grid.getPrimaryKeyFieldNames()[0]] &&
        t.action === 'add'
      ) {
        i[parseInt(n.toString(), 10)].level = this.internalProperties.level;
        i[parseInt(n.toString(), 10)].taskData = this.internalProperties.taskData;
        i[parseInt(n.toString(), 10)].uniqueID = this.internalProperties.uniqueID;
        if (!p(this.internalProperties.parentItem)) {
          i[parseInt(n.toString(), 10)].parentItem = this.internalProperties.parentItem;
          i[parseInt(n.toString(), 10)].parentUniqueID = this.internalProperties.parentUniqueID;
        }
        i[parseInt(n.toString(), 10)].childRecords = this.internalProperties.childRecords;
      }
      $('uniqueIDCollection.' + i[parseInt(n.toString(), 10)].uniqueID + '.index', n, this.parent);
      var o = this.parent.dataSource.adaptor;
      if (Se(this.parent) || this.parent.dataSource.adaptor instanceof qe) {
        $('uniqueIDCollection.' + i[parseInt(n.toString(), 10)].uniqueID, i[parseInt(n.toString(), 10)], this.parent);
      }
      if (!i[parseInt(n.toString(), 10)].level) {
        this.parent.parentData.push(i[parseInt(n.toString(), 10)]);
      }
    }
    if (!this.parent.enableInfiniteScrolling) {
      if (t.action === 'add' && this.previousNewRowPosition != null) {
        this.parent.setProperties({ editSettings: { newRowPosition: this.previousNewRowPosition } }, true);
        this.previousNewRowPosition = null;
      }
    }
  };
  r.prototype.updateIndex = function (t, e, i) {
    for (var n = 0; n < this.parent.getDataRows().length; n++) {
      var s = i[parseInt(n.toString(), 10)];
      if (!p(s)) {
        var o = Rt('uniqueIDCollection.' + s.uniqueID + '.index', this.parent);
        s.index = o;
        if (!p(s.parentItem)) {
          var a = Rt('uniqueIDCollection.' + s.parentItem.uniqueID + '.index', this.parent);
          s.parentItem.index = a;
        }
      }
    }
    var h = -1;
    var l = this.parent.treeColumnIndex;
    if (this.parent.getFrozenColumns() > 0) {
      for (var u = e[0].querySelectorAll('.e-rowcell'), d = 0; d < u.length; d++)
        if (u[parseInt(d.toString(), 10)].classList.contains('e-gridrowindex0level0')) {
          l = d;
          break;
        }
    }
    for (var c = 0; c < this.parent.getRows().length; c++) {
      if (!e[parseInt(c.toString(), 10)].classList.contains('e-detailrow')) {
        h++;
      }
      var f = i[parseInt(h.toString(), 10)];
      if (!p(i[parseInt(h.toString(), 10)])) {
        var o = i[parseInt(h.toString(), 10)].index;
        var g = i[parseInt(h.toString(), 10)].level;
        var y = e[parseInt(c.toString(), 10)];
        if (!p(i[parseInt(h.toString(), 10)].parentItem)) {
          o = Rt('uniqueIDCollection.' + i[parseInt(h.toString(), 10)].parentItem.uniqueID + '.index', this.parent);
        }
        var m = e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)];
        if (!p(e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)])) {
          for (var d = 0; d < e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)].classList.length; d++) {
            var w =
              e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)].classList[parseInt(d.toString(), 10)];
            var b = /e-gridrowindex/i;
            var v = /e-griddetailrowindex/i;
            var x =
              e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)].classList[
                parseInt(d.toString(), 10)
              ].match(b);
            var P =
              e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)].classList[
                parseInt(d.toString(), 10)
              ].match(v);
            if (x != null) {
              Mt(
                [e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)]],
                e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)].classList[parseInt(d.toString(), 10)],
              );
            }
            if (P != null) {
              Mt(
                [e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)]],
                e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)].classList[parseInt(d.toString(), 10)],
              );
            }
          }
          e[parseInt(c.toString(), 10)].classList.contains('e-detailrow')
            ? Qt(
                [e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)]],
                'e-griddetailrowindex' + o + 'level' + i[parseInt(h.toString(), 10)].level,
              )
            : Qt(
                [e[parseInt(c.toString(), 10)].cells[parseInt(l.toString(), 10)]],
                'e-gridrowindex' + o + 'level' + i[parseInt(h.toString(), 10)].level,
              );
        }
      }
    }
  };
  r.prototype.beginAdd = function () {
    var t;
    var e = this.addRowIndex;
    var i = this.parent.grid.getCurrentViewRecords();
    if (this.parent.editSettings.mode === 'Batch') {
      e = this.batchEditModule.getAddRowIndex();
      this.selectedIndex = this.batchEditModule.getSelectedIndex();
      if (
        this.parent.getBatchChanges()[this.addedRecords].length > 1 ||
        this.parent.getBatchChanges()[this.deletedRecords].length
      ) {
        i = this.batchEditModule.getBatchRecords();
      }
    }
    var n = this.parent.grid.getDataRows();
    var s = n.length ? +n[0].getAttribute('aria-rowindex') - 1 : 0;
    var o = n.length ? +n[n.length - 1].getAttribute('aria-rowindex') - 1 : 0;
    var a = this.selectedIndex >= s && this.selectedIndex <= o;
    var h = this.parent.enableVirtualization && this.addRowIndex > -1 && this.prevAriaRowIndex !== '-1';
    if (this.parent.editSettings.mode !== 'Dialog') {
      if (this.parent.editSettings.newRowPosition === 'Above') t = 'before';
      else if (
        (this.parent.editSettings.newRowPosition === 'Below' || this.parent.editSettings.newRowPosition === 'Child') &&
        (this.selectedIndex > -1 || h) &&
        a &&
        ((t = 'after'), !p(i[parseInt(e.toString(), 10)]) && i[parseInt(e.toString(), 10)].expanded)
      )
        if (
          this.parent.editSettings.mode === 'Batch' &&
          (this.parent.getBatchChanges()[this.addedRecords].length > 1 ||
            this.parent.getBatchChanges()[this.deletedRecords].length)
        ) {
          e += at(i[parseInt(e.toString(), 10)]).length;
          if (this.parent.editSettings.newRowPosition !== 'Child') {
            var l = this.batchEditModule.getBatchChildCount();
            e = e + l;
          }
        } else if (!this.parent.enableVirtualization) {
          e += at(i[parseInt(e.toString(), 10)]).length;
        }
      if (
        (this.selectedIndex > -1 || h) &&
        a &&
        (e ||
          this.parent.editSettings.newRowPosition === 'Child' ||
          this.parent.editSettings.newRowPosition === 'Below')
      ) {
        if (e >= n.length - 1) {
          e = n.length - 2;
        }
        var u = 'rows';
        var d = this.parent.grid.contentModule.rows[0];
        var c = document.activeElement;
        n[e + 1]['' + t](n[0]);
        $('batchIndex', e + 1, this.batchEditModule);
        var f = this.parent.editSettings.newRowPosition === 'Above' ? e : e + 1;
        if (this.parent.editSettings.mode === 'Batch') {
          this.parent.grid.contentModule.rows.splice(0, 1);
          this.parent.grid.contentModule.rows.splice(f, 0, this.parent.grid.contentModule.rows[0]);
        }
        if (this.parent.editSettings.mode === 'Row' || this.parent.editSettings.mode === 'Cell') {
          for (var g = this.parent.grid.getContentTable().querySelectorAll('.e-griderror'), y = 0; y < g.length; y++)
            g[parseInt(y.toString(), 10)].remove();
          $('errorRules', [], this.parent.grid.editModule.formObj);
        }
        if (h) {
          this.prevAriaRowIndex = '-1';
        }
        if (!this.parent.enableVirtualization || this.parent.enableVirtualization) {
          this.isScrollByFocus = true;
          document.activeElement.focus();
        }
        if (this.parent.enableVirtualization && !Object.keys(this.parent.grid.contentModule.emptyRowData).length) {
          this.parent.grid.contentModule.createEmptyRowdata();
        }
      }
    }
    if (
      this.parent.editSettings.mode === 'Batch' &&
      !p(this.addRowIndex) &&
      this.addRowIndex !== -1 &&
      this.isAddedRowByMethod &&
      !this.isAddedRowByContextMenu
    ) {
      e = this.batchEditModule.getAddRowIndex();
      this.selectedIndex = this.batchEditModule.getSelectedIndex();
      var m = this.parent.getBatchChanges().addedRecords;
      var w = void 0;
      if (this.parent.getBatchChanges().addedRecords.length)
        for (var y = 0; y < this.parent.getBatchChanges().addedRecords.length; y++)
          if (p(this.parent.getBatchChanges().addedRecords[parseInt(y.toString(), 10)].uniqueID)) {
            w = this.parent.getBatchChanges().addedRecords[parseInt(y.toString(), 10)];
          }
      var b = {
        action: 'add',
        data: w,
        index: e,
        seletedRow: 0,
      };
      this.beginAddEdit(b);
      this.batchEditModule.batchAddRowRecord.push(this.batchEditModule.addRowRecord);
      this.batchEditModule.batchAddedRecords.push(b.data);
    }
  };
  r.prototype.beginEdit = function (t) {
    if (t.requestType === 'refresh' && this.isOnBatch) {
      t.cancel = true;
      return;
    }
    if (this.parent.editSettings.mode === 'Cell' && t.requestType === 'beginEdit') {
      t.cancel = true;
      return;
    }
    if (
      this.doubleClickTarget &&
      t.requestType !== 'delete' &&
      (this.doubleClickTarget.classList.contains('e-treegridexpand') ||
        this.doubleClickTarget.classList.contains('e-treegridcollapse') ||
        this.doubleClickTarget.classList.contains('e-frame'))
    ) {
      t.cancel = true;
      this.doubleClickTarget = null;
      return;
    }
    if (t.requestType === 'delete') {
      var e = t.data;
      if (p(t.data[0].uniqueID))
        for (
          var i = this.parent.getPrimaryKeyFieldNames(),
            n = function (c) {
              s.parent.flatData.filter(function (f) {
                if (f['' + i[0]] === t.data[parseInt(c.toString(), 10)][i[0]]) {
                  e[parseInt(c.toString(), 10)] = f;
                }
              });
            },
            s = this,
            o = 0;
          o < e.length;
          o++
        )
          n(o);
      for (var o = 0; o < e.length; o++) {
        this.deleteUniqueID(e[parseInt(o.toString(), 10)].uniqueID);
        for (var a = at(e[parseInt(o.toString(), 10)]), h = 0; h < a.length; h++)
          this.deleteUniqueID(a[parseInt(h.toString(), 10)].uniqueID);
        t.data = t.data.concat(a);
      }
    }
    if (
      t.requestType === 'add' ||
      (this.isAddedRowByMethod && (this.parent.enableVirtualization || this.parent.enableInfiniteScrolling))
    ) {
      if (
        (!(this.parent.grid.selectedRowIndex === -1 && this.isAddedRowByMethod) &&
          t.index === this.parent.grid.selectedRowIndex) ||
        t.index === 0
      ) {
        this.selectedIndex = this.parent.grid.selectedRowIndex;
      }
      if (this.parent.enableVirtualization) {
        var l = '.e-row[aria-rowindex="' + (this.selectedIndex + 1) + '"]';
        var u = void 0;
        this.selectedIndex > -1 &&
        this.parent.editSettings.newRowPosition !== 'Top' &&
        this.parent.editSettings.newRowPosition !== 'Bottom'
          ? ((this.prevAriaRowIndex = this.selectedIndex.toString()),
            (u = this.parent.getContent().querySelector(l)),
            (this.addRowIndex = u ? u.rowIndex : 0))
          : this.prevAriaRowIndex && this.prevAriaRowIndex !== '-1'
            ? ((l = '.e-row[aria-rowindex="' + (this.prevAriaRowIndex + 1) + '"]'),
              (u = this.parent.getContent().querySelector(l)),
              (this.addRowIndex = u ? u.rowIndex : 0))
            : (this.addRowIndex = 0);
      } else
        this.isAddedRowByMethod && (this.parent.enableVirtualization || this.parent.enableInfiniteScrolling)
          ? t.index !== 0
            ? (this.addRowIndex = t.index)
            : (this.addRowIndex = this.parent.grid.selectedRowIndex)
          : (this.addRowIndex = this.parent.grid.selectedRowIndex > -1 ? this.parent.grid.selectedRowIndex : 0);
      var d = this.parent.getSelectedRecords()[0];
      (this.isAddedRowByMethod || (this.isAddedRowByContextMenu && this.parent.grid.selectedRowIndex !== -1)) &&
      (this.parent.enableVirtualization || this.parent.enableInfiniteScrolling)
        ? ((this.addRowRecord = this.parent.flatData[this.parent.grid.selectedRowIndex]),
          this.parent.enableVirtualization &&
            this.isAddedRowByContextMenu &&
            (this.addRowRecord = this.parent.getCurrentViewRecords()[this.addRowIndex]))
        : p(this.parent.getSelectedRecords()[0]) || (this.addRowRecord = this.parent.getSelectedRecords()[0]);
    }
    if (this.isAddedRowByMethod && t.index !== 0) {
      this.addRowRecord = this.parent.flatData[t.index];
      this.addRowIndex = t.index;
    }
    if (
      this.parent.editSettings.newRowPosition === 'Child' &&
      (this.isIndexUndefined || this.isAddedRowByMethod) &&
      !p(this.parent.getSelectedRecords()[0])
    ) {
      this.addRowRecord = this.parent.getSelectedRecords()[0];
      this.isIndexUndefined = false;
    }
    if (
      p(this.addRowRecord) &&
      this.parent.getCurrentViewRecords().length > this.addRowIndex &&
      t.requestType === 'save' &&
      this.parent.getSelectedRecords().length !== 0
    ) {
      this.addRowRecord = this.parent.getCurrentViewRecords()[this.addRowIndex];
    }
    this.isAddedRowByMethod = false;
    t = this.beginAddEdit(t);
  };
  r.prototype.savePreviousRowPosition = function () {
    if (this.previousNewRowPosition === null) {
      this.previousNewRowPosition = this.parent.editSettings.newRowPosition;
    }
  };
  r.prototype.beginAddEdit = function (t) {
    var e = t.data;
    if (t.action === 'add') {
      var i = this.parent.grid.getPrimaryKeyFieldNames()[0];
      var n = null;
      e.taskData = p(e.taskData) ? Vt({}, t.data) : e.taskData;
      var s = void 0;
      this.parent.enableVirtualization && t.index !== 0
        ? (s = this.parent.flatData)
        : this.parent.editSettings.mode === 'Batch' && this.isAddedRowByMethod && !p(this.addRowIndex)
          ? (s = this.batchEditModule.batchRecords)
          : (s = this.parent.grid.getCurrentViewRecords());
      if (this.parent.enableVirtualization && t.index !== 0) {
        this.addRowIndex = this.parent.flatData.indexOf(this.addRowRecord);
        this.selectedIndex = this.addRowIndex;
      }
      var o = this.addRowIndex;
      e.uniqueID = Wi(this.parent.element.id + '_data_');
      $('uniqueIDCollection.' + e.uniqueID, e, this.parent);
      var a = 0;
      var h = void 0;
      var l = void 0;
      var u = void 0;
      var d = void 0;
      var c = this.parent.enableVirtualization && this.addRowIndex > -1 && this.prevAriaRowIndex !== '-1';
      var f = this.parent.getRows();
      var g = f.length ? s.indexOf(s[0]) : 0;
      var y = f.length ? +f[f.length - 1].getAttribute('aria-rowindex') - 1 : 0;
      var m =
        this.parent.enableVirtualization && t.index !== 0 ? true : this.selectedIndex >= g && this.selectedIndex <= y;
      if (s.length && !p(o)) {
        h = s[this.addRowIndex][this.parent.idMapping];
        d = s[this.addRowIndex][this.parent.parentIdMapping];
        if (s[this.addRowIndex].parentItem) {
          l = s[this.addRowIndex].parentItem.uniqueID;
        }
        u = s[this.addRowIndex].parentItem;
      }
      if (this.parent.editSettings.newRowPosition !== 'Top' && s.length && !p(o)) {
        a = s[this.addRowIndex].level;
        if (this.parent.editSettings.newRowPosition === 'Above') {
          n = 'before';
          o = s[this.addRowIndex].index;
        } else if (this.parent.editSettings.newRowPosition === 'Below') {
          n = 'after';
          var w = at(s[this.addRowIndex]).length;
          var b = s[this.addRowIndex].index;
          o =
            at(s[this.addRowIndex]).length > 0
              ? s[this.addRowIndex].index + at(s[this.addRowIndex]).length
              : s[this.addRowIndex].index;
        } else if (this.parent.editSettings.newRowPosition === 'Child') {
          n = 'after';
          if ((this.selectedIndex > -1 || c) && m) {
            e.parentItem = Vt({}, s[this.addRowIndex]);
            e.parentUniqueID = e.parentItem.uniqueID;
            delete e.parentItem.childRecords;
            delete e.parentItem[this.parent.childMapping];
          }
          var v = at(s[this.addRowIndex]).length;
          var x = s[this.addRowIndex].index;
          if (this.selectedIndex >= 0) {
            e.level = a + 1;
          }
          o =
            at(s[this.addRowIndex]).length > 0
              ? s[this.addRowIndex].index + at(s[this.addRowIndex]).length
              : s[this.addRowIndex].index;
          if (this.isSelfReference) {
            !this.parent.isLocalData && this.parent.editModule.selectedIndex === -1
              ? (e.taskData[this.parent.parentIdMapping] = e[this.parent.parentIdMapping] = null)
              : (e.taskData[this.parent.parentIdMapping] = e[this.parent.parentIdMapping] = h);
            if (!p(e.parentItem)) {
              ti(
                this.parent.grid.getPrimaryKeyFieldNames()[0],
                e.parentItem,
                'add',
                this.parent,
                this.isSelfReference,
                e,
              );
            }
          }
        }
        if (
          this.parent.editSettings.newRowPosition === 'Above' ||
          this.parent.editSettings.newRowPosition === 'Below'
        ) {
          if ((this.selectedIndex > -1 || c) && a && m) {
            e.parentUniqueID = l;
            e.parentItem = Vt({}, u);
            delete e.parentItem.childRecords;
            delete e.parentItem[this.parent.childMapping];
          }
          e.level = a;
          if (this.isSelfReference) {
            e.taskData[this.parent.parentIdMapping] = e[this.parent.parentIdMapping] = d;
            if (!p(e.parentItem)) {
              ti(
                this.parent.grid.getPrimaryKeyFieldNames()[0],
                e.parentItem,
                'add',
                this.parent,
                this.isSelfReference,
                e,
              );
            }
          }
        }
        if (n != null && (this.selectedIndex > -1 || c) && m) {
          t.index = n === 'before' ? o : o + 1;
        }
        if (this.parent.editSettings.newRowPosition === 'Bottom') {
          a = 0;
          var P =
            this.parent.grid.dataSource instanceof ut
              ? this.parent.grid.dataSource.dataSource.json
              : this.parent.grid.dataSource;
          t.index = P.length;
        }
      }
      if (p(e.level)) {
        e.level = a;
      }
      e.hasChildRecords = false;
      e.childRecords = [];
      e.index = 0;
    }
    if (t.action === 'add') {
      this.internalProperties = {
        level: e.level,
        parentItem: e.parentItem,
        uniqueID: e.uniqueID,
        taskData: e.taskData,
        parentUniqueID: p(e.parentItem) ? void 0 : e.parentItem.uniqueID,
        childRecords: e.childRecords,
      };
    }
    if (t.requestType === 'delete') {
      var B = t.data;
      var R = this.parent.getPrimaryKeyFieldNames();
      if (!p(R) && R.length > 0)
        for (
          var L = function (M) {
              var F = t.data[parseInt(M.toString(), 10)].parentItem;
              if (t.data[parseInt(M.toString(), 10)].parentItem) {
                var V = gt(O.parent, t.data[parseInt(M.toString(), 10)].parentItem.uniqueID);
                if (!p(V) && V.hasChildRecords) {
                  var z = V.childRecords.findIndex(function (tt) {
                    return t.data[parseInt(M.toString(), 10)][R[0]] === tt[R[0]];
                  });
                  V.childRecords.splice(z, 1);
                }
              }
            },
            O = this,
            T = 0;
          T < t.data.length;
          T++
        )
          L(T);
    }
    return t;
  };
  r.prototype.addRecord = function (t, e, i) {
    if (
      this.parent.editSettings.newRowPosition === this.previousNewRowPosition ||
      this.previousNewRowPosition === null
    ) {
      this.previousNewRowPosition = this.parent.editSettings.newRowPosition;
    }
    if (p(e)) {
      this.isIndexUndefined = true;
    }
    if (!this.isSelfReference && !p(t) && Object.hasOwnProperty.call(t, this.parent.childMapping)) {
      var n = [];
      var s = this.parent.editSettings.mode;
      var o = this.parent.grid.editSettings.mode;
      n.push(t);
      this.parent.setProperties({ editSettings: { mode: 'Batch' } }, true);
      this.parent.grid.setProperties({ editSettings: { mode: 'Batch' } }, true);
      if (!p(i)) {
        this.parent.setProperties({ editSettings: { newRowPosition: i } }, true);
      }
      var a = {
        addedRecords: n,
        changedRecords: [],
        deletedRecords: [],
      };
      this.parent.notify(Di, {
        updatedRecords: a,
        index: e,
      });
      this.parent.setProperties({ editSettings: { mode: this.parent.editSettings.mode } }, true);
      this.parent.grid.setProperties({ editSettings: { mode: this.parent.grid.editSettings.mode } }, true);
      this.parent.refresh();
    } else
      t
        ? (e > -1
            ? ((this.selectedIndex = e), (this.addRowIndex = e))
            : ((this.selectedIndex = this.parent.selectedRowIndex), (this.addRowIndex = this.parent.selectedRowIndex)),
          i && this.parent.setProperties({ editSettings: { newRowPosition: i } }, true),
          this.parent.grid.editModule.addRecord(t, e))
        : this.parent.grid.editModule.addRecord(t, e);
  };
  r.prototype.editFormValidate = function () {
    return this.parent.grid.editModule.editFormValidate();
  };
  r.prototype.destroyForm = function () {
    this.parent.grid.editModule.destroyForm();
  };
  r.prototype.contentready = function (t) {
    if (
      !p(t.args.requestType) &&
      (t.args.requestType.toString() === 'delete' ||
        t.args.requestType.toString() === 'save' ||
        (this.parent.editSettings.mode === 'Batch' && t.args.requestType.toString() === 'batchsave'))
    ) {
      this.updateIndex(this.parent.grid.dataSource, this.parent.getRows(), this.parent.getCurrentViewRecords());
      if (
        (this.parent.frozenRows || this.parent.getFrozenColumns() || this.parent.frozenColumns) &&
        this.parent.grid.dataSource.length === this.parent.getDataRows().length
      ) {
        this.updateIndex(this.parent.grid.dataSource, this.parent.getDataRows(), this.parent.getCurrentViewRecords());
      }
    }
  };
  r.prototype.editCell = function (t, e) {
    if (this.parent.editSettings.mode === 'Cell' || this.parent.editSettings.mode === 'Batch') {
      if (this.parent.editSettings.mode !== 'Batch') {
        this.isOnBatch = true;
        this.updateGridEditMode('Batch');
      }
      this.parent.grid.editModule.editCell(t, e);
    }
  };
  r.prototype.closeEdit = function () {
    if (
      this.parent.enableVirtualization &&
      this.parent.grid.editSettings.mode === 'Batch' &&
      this.parent.grid.pageSettings.currentPage > 1
    ) {
      this.editedRowIndex = this.parent.grid.editModule.editModule.cellDetails.rowIndex;
      this.parent.grid.editModule.editModule.cellDetails.rowIndex =
        parseInt(
          this.parent
            .getRows()
            [this.parent.grid.editModule.editModule.cellDetails.rowIndex].getAttribute('aria-rowIndex'),
          10,
        ) - 1;
    }
    this.parent.grid.editModule.closeEdit();
  };
  return r;
})();
export { za as C, _a as E, Ha as F, xi as G, gn as P, ja as R, Ua as S, Wa as T, Ga as a };
