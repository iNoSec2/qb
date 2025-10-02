import {
  bs as b,
  gZ as A,
  ap as m,
  a5 as u,
  a4 as x,
  bN as V,
  aZ as L,
  am as q,
  e1 as P,
} from '../assets/app-BjImoLrr.js';
var y = function () {
  y =
    Object.assign ||
    function (o) {
      for (var r, e = 1, n = arguments.length; e < n; e++) {
        r = arguments[e];
        for (var i in r)
          if (Object.prototype.hasOwnProperty.call(r, i)) {
            o[i] = r[i];
          }
      }
      return o;
    };
  return y();
};
var F = function (o, r, e, n) {
  return new (e || (e = Promise))(function (i, t) {
    function p(s) {
      try {
        a(n.next(s));
      } catch (h) {
        t(h);
      }
    }
    function l(s) {
      try {
        a(n.throw(s));
      } catch (h) {
        t(h);
      }
    }
    function a(s) {
      s.done
        ? i(s.value)
        : new e(function (h) {
            h(s.value);
          }).then(p, l);
    }
    a((n = n.apply(o, r || [])).next());
  });
};
var T = function (o, r) {
  var e = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: [],
  };
  var n;
  var i;
  var t;
  var p;
  p = {
    next: l(0),
    throw: l(1),
    return: l(2),
  };
  if (typeof Symbol == 'function') {
    p[Symbol.iterator] = function () {
      return this;
    };
  }
  return p;
  function l(s) {
    return function (h) {
      return a([s, h]);
    };
  }
  function a(s) {
    if (n) throw new TypeError('Generator is already executing.');
    for (; e; )
      try {
        n = 1;
        if (
          i &&
          (t = s[0] & 2 ? i.return : s[0] ? i.throw || ((t = i.return) && t.call(i), 0) : i.next) &&
          !(t = t.call(i, s[1])).done
        )
          return t;
        switch (((i = 0), t && (s = [s[0] & 2, t.value]), s[0])) {
          case 0:
          case 1:
            t = s;
            break;
          case 4: {
            e.label++;
            return {
              value: s[1],
              done: false,
            };
          }
          case 5:
            {
              e.label++;
              i = s[1];
              s = [0];
            }
            continue;
          case 7:
            {
              s = e.ops.pop();
              e.trys.pop();
            }
            continue;
          default:
            {
              t = e.trys;
              if (!(t = t.length > 0 && t[t.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                e = 0;
                continue;
              }
            }
            if (s[0] === 3 && (!t || (s[1] > t[0] && s[1] < t[3]))) {
              e.label = s[1];
              break;
            }
            if (s[0] === 6 && e.label < t[1]) {
              e.label = t[1];
              t = s;
              break;
            }
            if (t && e.label < t[2]) {
              e.label = t[2];
              e.ops.push(s);
              break;
            }
            {
              if (t[2]) {
                e.ops.pop();
              }
              e.trys.pop();
            }
            continue;
        }
        s = r.call(o, e);
      } catch (h) {
        s = [6, h];
        i = 0;
      } finally {
        n = t = 0;
      }
    if (s[0] & 5) throw s[1];
    return {
      value: s[0] ? s[1] : void 0,
      done: true,
    };
  }
};
var D = (function () {
  function o(r) {
    var e = this;
    this.sentinelInfo = {
      up: {
        check: function (n, i) {
          var t = n.top - e.containerElementRect.top;
          i.entered = t >= 0;
          return t + (e.parent.listItemHeight * e.parent.virtualItemCount) / 2 >= 0;
        },
        axis: 'Y',
      },
      down: {
        check: function (n, i) {
          var t = n.bottom;
          i.entered = n.bottom <= e.containerElementRect.bottom;
          return (
            n.bottom - (e.parent.listItemHeight * e.parent.virtualItemCount) / 2 <=
            (e.parent.listItemHeight * e.parent.virtualItemCount) / 2
          );
        },
        axis: 'Y',
      },
    };
    this.parent = r;
    this.removeEventListener();
    this.addEventListener();
  }
  o.prototype.addEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.on('observe', this.observe, this);
      this.parent.on('setGeneratedData', this.setGeneratedData, this);
      this.parent.on('dataProcessAsync', this.dataProcessAsync, this);
      this.parent.on('setCurrentViewDataAsync', this.setCurrentViewDataAsync, this);
      this.parent.on('bindScrollEvent', this.bindScrollEvent, this);
    }
  };
  o.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off('observe', this.observe);
      this.parent.off('setGeneratedData', this.setGeneratedData);
      this.parent.off('dataProcessAsync', this.dataProcessAsync);
      this.parent.off('setCurrentViewDataAsync', this.setCurrentViewDataAsync);
      this.parent.off('bindScrollEvent', this.bindScrollEvent);
    }
  };
  o.prototype.bindScrollEvent = function (r) {
    var e = this;
    this.component = r.component;
    this.observe(function (n) {
      return e.scrollListener(n);
    });
  };
  o.prototype.observe = function (r) {
    this.containerElementRect = this.parent.popupContentElement.getBoundingClientRect();
    b.add(this.parent.popupContentElement, 'wheel mousedown', this.popupScrollHandler, this);
    this.touchModule = new A(this.parent.popupContentElement, { scroll: this.popupScrollHandler.bind(this) });
    b.add(this.parent.popupContentElement, 'scroll', this.virtualScrollHandler(r), this);
  };
  o.prototype.getModuleName = function () {
    return 'VirtualScroll';
  };
  o.prototype.popupScrollHandler = function () {
    this.parent.isMouseScrollAction = true;
    this.parent.isPreventScrollAction = false;
  };
  o.prototype.getPageQuery = function (r, e, n) {
    if (n !== 0 && !this.parent.allowFiltering && this.component !== 'autocomplete') {
      r = r.skip(e);
    }
    return r;
  };
  o.prototype.setGeneratedData = function (r, e) {
    for (
      var n = 0,
        i = this.parent.listData.length + this.parent.virtualItemStartIndex,
        t = this.parent.virtualItemStartIndex;
      t < i;
      t++
    ) {
      var p = this.parent.generatedDataObject[t];
      if (!this.parent.generatedDataObject[t] && e !== null && this.parent.listData.slice(n, n + 1).length > 0) {
        var l = this.parent.listData.slice(n, n + 1);
        if (l.length > 0) {
          this.parent.generatedDataObject[t] = l;
        }
      }
      n++;
    }
  };
  o.prototype.generateAndExecuteQueryAsync = function (r, e, n, i) {
    if (e === void 0) {
      e = 0;
    }
    if (n === void 0) {
      n = 0;
    }
    if (i === void 0) {
      i = false;
    }
    var t = this.parent.dataSource;
    if (!i)
      if (m(this.parent.query)) r = this.getPageQuery(r, e, n);
      else {
        var p = this.removeSkipAndTakeEvents(this.parent.query.clone());
        r = this.getPageQuery(p, e, n);
      }
    var l = this.parent.isCustomFilter;
    if (this.component === 'combobox') {
      var a = 0;
      this.parent.dataSource instanceof u
        ? (a = this.parent.remoteDataCount)
        : this.parent.dataSource && this.parent.dataSource.length > 0 && (a = this.parent.dataSource.length);
      if (a > 0) {
        this.parent.isCustomFilter =
          a === this.parent.totalItemCount && this.parent.queryString !== this.parent.typedString
            ? true
            : this.parent.isCustomFilter;
      }
    }
    this.parent.resetList(this.parent.dataSource, this.parent.fields, r);
    this.parent.isCustomFilter = this.parent.isCustomFilter;
  };
  o.prototype.removeSkipAndTakeEvents = function (r) {
    r.queries = r.queries.filter(function (e) {
      return e.fn !== 'onSkip' && e.fn !== 'onTake';
    });
    return r;
  };
  o.prototype.setCurrentViewDataAsync = function (r) {
    var e = [];
    var n = false;
    var i = true;
    if (m(this.component)) {
      this.component = r.component;
    }
    var t = this.parent.viewPortInfo.endIndex;
    if (
      this.component === 'multiselect' &&
      this.parent.mode === 'CheckBox' &&
      this.parent.value &&
      Array.isArray(this.parent.value) &&
      this.parent.value.length > 0 &&
      this.parent.enableSelectionOrder &&
      this.parent.targetElement().trim() === ''
    ) {
      if (this.parent.viewPortInfo.startIndex < this.parent.value.length) {
        t = this.parent.viewPortInfo.endIndex - this.parent.value.length;
        if (this.parent.viewPortInfo.startIndex === 0) {
          var p = this.parent.list.querySelector('.e-list-parent:not(.e-reorder)');
          if (p) {
            this.parent.list.querySelector('.e-virtual-ddl-content').removeChild(p);
          }
          this.parent.updateVirtualReOrderList(true);
          if (
            this.parent.value.length < this.parent.itemCount &&
            this.parent.value.length !== this.parent.totalItemCount
          ) {
            var l = this.parent.list.querySelector('.e-list-parent:not(.e-reorder)');
            if (l) {
              this.parent.list.querySelector('.e-virtual-ddl-content').removeChild(l);
            }
            var a = this.parent.getForQuery(this.parent.value).clone();
            a = a
              .skip(0)
              .take(this.parent.itemCount - (this.parent.value.length - this.parent.viewPortInfo.startIndex));
            this.parent.appendUncheckList = true;
            this.parent.setCurrentView = false;
            this.parent.resetList(this.parent.dataSource, this.parent.fields, a);
            i = false;
            this.parent.appendUncheckList = this.parent.dataSource instanceof u ? this.parent.appendUncheckList : false;
            i = false;
          } else {
            var s = this.parent.list.querySelector('.e-list-parent:not(.e-reorder)');
            if (s) {
              this.parent.list.querySelector('.e-virtual-ddl-content').removeChild(s);
            }
          }
          i = false;
        } else if (this.parent.viewPortInfo.startIndex !== 0) {
          if (this.parent.dataSource instanceof u) {
            this.parent.setCurrentView = false;
          }
          this.parent.updateVirtualReOrderList(true);
          var p = this.parent.list.querySelector('.e-list-parent:not(.e-reorder)');
          if (p) {
            this.parent.list.querySelector('.e-virtual-ddl-content').removeChild(p);
          }
          i = false;
        }
        if (
          this.parent.viewPortInfo.startIndex !== 0 &&
          this.parent.viewPortInfo.startIndex - this.parent.value.length !== this.parent.itemCount &&
          this.parent.viewPortInfo.startIndex + this.parent.itemCount > this.parent.value.length
        ) {
          var a = this.parent.getForQuery(this.parent.value).clone();
          a = a.skip(0).take(this.parent.itemCount - (this.parent.value.length - this.parent.viewPortInfo.startIndex));
          this.parent.appendUncheckList = true;
          this.parent.setCurrentView = false;
          var p = this.parent.list.querySelector('.e-list-parent:not(.e-reorder)');
          if (p) {
            this.parent.list.querySelector('.e-virtual-ddl-content').removeChild(p);
          }
          this.parent.resetList(this.parent.dataSource, this.parent.fields, a);
          i = false;
          this.parent.appendUncheckList = this.parent.dataSource instanceof u ? this.parent.appendUncheckList : false;
        }
      } else {
        var h = this.parent.list.querySelectorAll('.e-reorder')[0];
        if (
          this.parent.list.querySelector('.e-virtual-ddl-content') &&
          this.parent.list.querySelectorAll('.e-reorder')[0]
        ) {
          this.parent.list
            .querySelector('.e-virtual-ddl-content')
            .removeChild(this.parent.list.querySelectorAll('.e-reorder')[0]);
        }
        var a = this.parent.getForQuery(this.parent.value).clone();
        var f =
          this.parent.viewPortInfo.startIndex - this.parent.value.length >= 0
            ? this.parent.viewPortInfo.startIndex - this.parent.value.length
            : 0;
        a = a.skip(f);
        this.parent.setCurrentView = false;
        this.parent.resetList(this.parent.dataSource, this.parent.fields, a);
        i = false;
      }
      this.parent.totalItemsCount();
    }
    if (i)
      for (var d = this.parent.viewPortInfo.startIndex; d < t; d++) {
        var v = d;
        if (this.component === 'multiselect' && this.parent.mode === 'CheckBox') {
          var p = this.parent.list.querySelector('.e-list-parent.e-reorder');
          if (p) {
            this.parent.list.querySelector('.e-virtual-ddl-content').removeChild(p);
          }
        }
        var c = this.parent.generatedDataObject[d];
        if (this.component === 'multiselect' && this.parent.hideSelectedItem) {
          if (this.parent.generatedDataObject[d]) {
            var I = V(this.parent.fields.value, this.parent.generatedDataObject[d][0]);
            if (
              this.parent.value &&
              I !== null &&
              Array.isArray(this.parent.value) &&
              this.parent.value.length > 0 &&
              this.parent.value.indexOf(I) < 0
            ) {
              var a = this.parent.getForQuery(this.parent.value).clone();
              this.parent.viewPortInfo.endIndex === this.parent.totalItemCount + this.parent.value.length &&
              this.parent.hideSelectedItem
                ? (a = a.skip(this.parent.totalItemCount - this.parent.itemCount))
                : (a = a.skip(this.parent.viewPortInfo.startIndex));
              this.parent.setCurrentView = false;
              this.parent.isPreventScrollAction = true;
              this.parent.resetList(this.parent.dataSource, this.parent.fields, a);
              n = true;
              break;
            } else if (this.parent.value === null || (this.parent.value && this.parent.value.length === 0)) {
              e.push(this.parent.generatedDataObject[d][0]);
            }
          }
          if (d === t - 1 && e.length !== this.parent.itemCount && this.parent.hideSelectedItem) {
            var a =
              this.parent.value && this.parent.value.length > 0
                ? this.parent.getForQuery(this.parent.value).clone()
                : new x();
            this.parent.value &&
            this.parent.viewPortInfo.endIndex === this.parent.totalItemCount + this.parent.value.length &&
            this.parent.hideSelectedItem
              ? (a = a.skip(this.parent.totalItemCount - this.parent.itemCount))
              : (a = a.skip(this.parent.viewPortInfo.startIndex));
            this.parent.setCurrentView = false;
            this.parent.resetList(this.parent.dataSource, this.parent.fields, a);
            n = true;
          }
        } else if (this.parent.generatedDataObject[d]) {
          e.push(this.parent.generatedDataObject[d][0]);
        }
        this.parent.setCurrentView = false;
      }
    if (!n && i) {
      if (
        this.component === 'multiselect' &&
        this.parent.allowCustomValue &&
        this.parent.viewPortInfo.startIndex === 0 &&
        this.parent.virtualCustomData
      ) {
        e.splice(0, 0, this.parent.virtualCustomData);
      }
      var g = [];
      if (
        this.component === 'multiselect' &&
        this.parent.allowCustomValue &&
        this.parent.viewPortInfo.endIndex === this.parent.totalItemCount &&
        this.parent.virtualCustomSelectData &&
        this.parent.virtualCustomSelectData.length > 0
      ) {
        g = e.concat(this.parent.virtualCustomSelectData);
        e = g;
      }
      this.parent.renderItems(
        e,
        this.parent.fields,
        this.component === 'multiselect' && this.parent.mode === 'CheckBox',
      );
      this.parent.updateSelectionList();
    }
    if (this.component === 'multiselect') {
      this.parent.updatevirtualizationList();
      this.parent.checkMaxSelection();
    }
    this.parent.getSkeletonCount();
    this.parent.skeletonCount =
      this.parent.totalItemCount !== 0 &&
      this.parent.totalItemCount < this.parent.itemCount * 2 &&
      (!(this.parent.dataSource instanceof u) ||
        (this.parent.dataSource instanceof u && this.parent.totalItemCount <= this.parent.itemCount))
        ? 0
        : this.parent.skeletonCount;
    var S = this.parent.list.getElementsByClassName('e-virtual-ddl')[0];
    var C =
      this.component !== 'multiselect' ||
      (this.component === 'multiselect' && !(this.parent.dataSource instanceof u)) ||
      (this.parent.dataSource instanceof u && !n);
    if (S && C) S.style = this.parent.GetVirtualTrackHeight();
    else if (!S && this.parent.skeletonCount > 0 && this.parent.popupWrapper) {
      var k = this.parent.createElement('div', {
        id: this.parent.element.id + '_popup',
        className: 'e-virtual-ddl',
        styles: this.parent.GetVirtualTrackHeight(),
      });
      this.parent.popupWrapper.querySelector('.e-dropdownbase').appendChild(k);
    }
    if (
      this.component !== 'multiselect' ||
      (this.component === 'multiselect' && !(this.parent.dataSource instanceof u)) ||
      (this.parent.dataSource instanceof u && (!n || this.parent.viewPortInfo.startIndex === 0))
    ) {
      this.parent.UpdateSkeleton();
    }
    this.parent.liCollections = this.parent.list.querySelectorAll('.e-list-item');
    var w = this.parent.list.getElementsByClassName('e-virtual-ddl-content')[0];
    if (w && C) {
      w.style = this.parent.getTransformValues();
    }
    if (this.parent.fields.groupBy) {
      this.parent.scrollStop();
    }
    if (
      this.parent.keyCode === 40 &&
      this.parent.isScrollChanged &&
      this.parent.hideSelectedItem &&
      !m(this.parent.currentFocuedListElement)
    ) {
      var E = this.parent.getElementByValue(this.parent.currentFocuedListElement.getAttribute('data-value'));
      this.parent.addListFocus(E);
      this.parent.isScrollChanged = false;
    }
  };
  o.prototype.generateQueryAndSetQueryIndexAsync = function (r, e) {
    var n = false;
    var i = 0;
    var t = 0;
    var p = this.parent.viewPortInfo.endIndex;
    if (!e && this.parent.viewPortInfo.endIndex !== 0)
      for (var l = this.parent.viewPortInfo.startIndex; l <= this.parent.viewPortInfo.endIndex; l++)
        if (!(l in this.parent.generatedDataObject)) {
          n ? (t = l === this.parent.viewPortInfo.endIndex ? l : l + 1) : ((n = true), (i = t = l));
        }
    if (n && !(this.parent.totalItemCount === i && this.parent.totalItemCount === t)) {
      this.parent.virtualItemStartIndex = i;
      this.parent.virtualItemEndIndex = t;
      this.parent.setCurrentView = true;
      this.generateAndExecuteQueryAsync(r, i, t);
      if (
        this.component === 'multiselect' &&
        this.parent.hideSelectedItem &&
        this.parent.value &&
        Array.isArray(this.parent.value) &&
        this.parent.value.length > 0
      ) {
        this.parent.totalItemsCount();
      }
      if (this.component === 'multiselect' && this.parent.virtualItemStartIndex === this.parent.virtualItemEndIndex) {
        this.parent.virtualItemStartIndex = this.parent.viewPortInfo.startIndex;
        this.parent.virtualItemEndIndex = this.parent.viewPortInfo.endIndex;
      }
    }
    if (!(this.parent.dataSource instanceof u) || (this.parent.dataSource instanceof u && !this.parent.isRequesting)) {
      this.setCurrentViewDataAsync();
    }
  };
  o.prototype.dataProcessAsync = function (r) {
    this.parent.selectedValueInfo = null;
    this.parent.virtualItemStartIndex = this.parent.viewPortInfo.startIndex;
    this.parent.virtualItemEndIndex = this.parent.viewPortInfo.endIndex;
    this.generateQueryAndSetQueryIndexAsync(new x(), r);
  };
  o.prototype.virtualScrollRefreshAsync = function () {
    return F(this, void 0, void 0, function () {
      return T(this, function (r) {
        switch (r.label) {
          case 0: {
            this.parent.isCustomFilter =
              (!(
                this.parent.isTyped ||
                (this.component === 'combobox' &&
                  this.parent.allowFiltering &&
                  this.parent.queryString !== this.parent.typedString) ||
                (!m(this.parent.filterInput) &&
                  !m(this.parent.filterInput.value) &&
                  this.parent.filterInput.value !== '' &&
                  this.component !== 'combobox')
              ) &&
                !(this.component === 'autocomplete' && this.parent.value != null)) ||
              this.parent.isCustomFilter;
            if (this.parent.allowFiltering || this.component === 'autocomplete') {
              !m(this.parent.typedString) &&
              !(this.component === 'combobox' && !m(this.parent.typedString) && this.parent.allowFiltering)
                ? (this.parent.viewPortInfo.endIndex >= this.parent.dataCount &&
                    (this.parent.viewPortInfo.endIndex = this.parent.dataCount),
                  this.parent.viewPortInfo.startIndex >= this.parent.dataCount &&
                    (this.parent.viewPortInfo.startIndex = this.parent.dataCount - this.parent.itemCount))
                : (this.parent.getSkeletonCount(true),
                  this.component === 'combobox' &&
                    (this.parent.skeletonCount =
                      this.parent.totalItemCount !== 0 &&
                      this.parent.totalItemCount < this.parent.itemCount * 2 &&
                      (!(this.parent.dataSource instanceof u) ||
                        (this.parent.dataSource instanceof u && this.parent.totalItemCount <= this.parent.itemCount))
                        ? 0
                        : this.parent.skeletonCount));
            }
            return [4, this.dataProcessAsync()];
          }
          case 1: {
            r.sent();
            if (
              this.parent.keyboardEvent != null &&
              (!(this.parent.dataSource instanceof u) ||
                (this.parent.dataSource instanceof u && !this.parent.isRequesting))
            ) {
              this.parent.handleVirtualKeyboardActions(this.parent.keyboardEvent, this.parent.pageCount);
            }
            if (!this.parent.customFilterQuery) {
              this.parent.isCustomFilter = false;
            }
            return [2];
          }
        }
      });
    });
  };
  o.prototype.scrollListener = function (r) {
    var e = this;
    if (!this.parent.isPreventScrollAction && !this.parent.isVirtualTrackHeight) {
      this.parent.preventSetCurrentData = false;
      var n = r.sentinel;
      var i = this.parent.previousStartIndex;
      this.parent.viewPortInfo = this.getInfoFromView(r.direction, r.sentinel, r.offset, false);
      this.parent.isUpwardScrolling = false;
      this.parent.previousStartIndex !== this.parent.previousStartIndex && !this.parent.isKeyBoardAction
        ? ((this.parent.isScrollActionTriggered = false),
          (this.parent.currentPageNumber = this.parent.viewPortInfo.currentPageNumber),
          (this.parent.virtualListInfo = y({}, this.parent.viewPortInfo)),
          (this.parent.isPreventKeyAction = true),
          (this.parent.isVirtualScrolling = true),
          setTimeout(function () {
            e.parent.pageCount = e.parent.getPageCount();
            e.parent.isRequesting = false;
            e.virtualScrollRefreshAsync().then(function () {
              if (e.parent.popupObj) {
                e.parent.list = e.parent.popupObj.element.querySelector('.e-content') || L('.e-content');
                e.parent.updateSelectionList();
                e.parent.liCollections = e.parent.getItems();
              }
              e.parent.isKeyBoardAction = false;
              e.parent.isVirtualScrolling = false;
              e.parent.isPreventKeyAction = false;
            });
          }, 5))
        : this.parent.isScrollActionTriggered &&
          ((this.parent.isPreventKeyAction = false),
          (this.parent.isScrollActionTriggered = false),
          (this.parent.list.getElementsByClassName('e-virtual-ddl-content')[0].style =
            this.parent.getTransformValues()));
      this.parent.previousInfo = this.parent.viewPortInfo;
    }
  };
  o.prototype.getInfoFromView = function (r, e, n, i) {
    var t = {
      direction: r,
      sentinelInfo: e,
      offsets: n,
      startIndex: this.parent.previousStartIndex,
      endIndex: this.parent.previousEndIndex,
    };
    var p = this.parent.popupContentElement ? this.parent.popupContentElement.getBoundingClientRect().height : 0;
    var l = this.parent.listItemHeight;
    var a = n.top / this.parent.listItemHeight;
    var s = p / this.parent.listItemHeight;
    var h = a + s;
    var f = this.parent.virtualItemCount / 4;
    var d = this.parent.totalItemCount;
    if (t.direction === 'down') {
      var v = Math.round(h) - Math.round(f);
      if (
        m(t.startIndex) ||
        (h > t.startIndex + Math.round(this.parent.virtualItemCount / 2 + f) &&
          t.endIndex !== this.parent.totalItemCount)
      ) {
        t.startIndex = v >= 0 ? Math.round(v) : 0;
        t.startIndex = t.startIndex > a ? Math.floor(a) : t.startIndex;
        var c = t.startIndex + this.parent.virtualItemCount;
        t.startIndex = c < h ? Math.ceil(h) - this.parent.virtualItemCount : t.startIndex;
        t.endIndex = c < this.parent.totalItemCount ? c : this.parent.totalItemCount;
        t.startIndex =
          c >= this.parent.totalItemCount
            ? t.endIndex - this.parent.virtualItemCount > 0
              ? t.endIndex - this.parent.virtualItemCount
              : 0
            : t.startIndex;
        t.currentPageNumber = Math.ceil(t.endIndex / this.parent.virtualItemCount);
      }
    } else if (
      t.direction === 'up' &&
      ((t.startIndex && t.endIndex) || Math.ceil(a) > this.parent.previousStartIndex)
    ) {
      var I = Math.round(
        (t.startIndex * this.parent.listItemHeight + f * this.parent.listItemHeight) / this.parent.listItemHeight,
      );
      if (a < I || Math.ceil(a) > this.parent.previousStartIndex) {
        var g = f > s ? f : s + s / 4;
        var c = Math.round(a + g);
        t.endIndex = c < this.parent.totalItemCount ? c : this.parent.totalItemCount;
        var v = t.endIndex - this.parent.virtualItemCount;
        t.startIndex = v > 0 ? v : 0;
        t.endIndex = v < 0 ? this.parent.virtualItemCount : t.endIndex;
        t.currentPageNumber = Math.ceil(t.startIndex / this.parent.virtualItemCount);
      }
    }
    i
      ? (this.parent.scrollPreStartIndex = t.startIndex)
      : ((this.parent.previousStartIndex = t.startIndex),
        (this.parent.startIndex = t.startIndex),
        (this.parent.previousEndIndex = t.endIndex));
    return t;
  };
  o.prototype.virtualScrollHandler = function (r) {
    var e = this;
    var n = q.info.name === 'chrome' ? 200 : 100;
    var i = 0;
    var t = P(r, n);
    var p = P(r, 50);
    return function (l) {
      var a = l.target.scrollTop;
      var s = l.target.scrollLeft;
      var h = i < l.target.scrollTop && !e.parent.isUpwardScrolling ? 'down' : 'up';
      i = l.target.scrollTop;
      var f = e.sentinelInfo[h];
      var d = e.parent.scrollPreStartIndex;
      var v = {
        top: l.target.scrollTop,
        left: l.target.scrollLeft,
      };
      if (
        e.parent.list &&
        e.parent.list.querySelectorAll('.e-virtual-list').length > 0 &&
        (e.getInfoFromView(h, e.sentinelInfo[h], v, true),
        e.parent.scrollPreStartIndex !== e.parent.scrollPreStartIndex && !e.parent.isPreventScrollAction)
      ) {
        e.parent.isScrollActionTriggered = true;
        var c = e.parent.list.querySelector('.e-virtual-ddl-content');
        c.style.transform = 'translate(0px,' + l.target.scrollTop + 'px)';
      }
      var I = t;
      if (e.sentinelInfo[h].axis === 'X') {
        I = p;
      }
      I({
        direction: h,
        sentinel: e.sentinelInfo[h],
        offset: {
          top: l.target.scrollTop,
          left: l.target.scrollLeft,
        },
        focusElement: document.activeElement,
      });
    };
  };
  o.prototype.destroy = function () {
    this.removeEventListener();
  };
  return o;
})();
const H = {
  methods: {
    filterCombobox(o, r, e) {
      let n = new x();
      n = o.text !== '' ? n.where(e, 'contains', o.text, true) : n;
      o.updateData(r, n);
    },
    getTextWidth(o, r) {
      let n = (this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement('canvas'))).getContext(
        '2d',
      );
      n.font = r;
      return n.measureText(o).width;
    },
  },
  provide: { combobox: [D] },
};
export { H as c };
