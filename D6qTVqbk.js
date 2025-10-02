import {
  bs as p,
  ap as n,
  bO as g,
  fY as B,
  aZ as f,
  hh as k,
  hi as d,
  b6 as m,
  b5 as y,
  am as h,
  cw as v,
  bM as S,
  cH as j,
  hj as N,
  gd as w,
  h1 as x,
} from '../assets/app-BjImoLrr.js';
var D = 'e-icons';
var b = 'e-frame';
var o = 'e-check';
var E = 'e-checkbox-wrapper';
var c = 'e-stop';
var T = 'e-selectall-parent';
var F = 'e-input-group-icon e-back-icon e-icons';
var C = 'e-input-group-icon e-clear-icon e-icons';
var H = 'e-input-filter';
var W = 'e-filter-parent';
var R = 'e-ddl-device-filter';
var I = 'e-clear-icon';
var P = 'e-popup-full-page';
var q = 'e-ddl-device';
var L = 'e-input-focus';
var z = (function () {
  function i(e) {
    this.activeLi = [];
    this.activeEle = [];
    this.parent = e;
    this.removeEventListener();
    this.addEventListener();
  }
  i.prototype.getModuleName = function () {
    return 'CheckBoxSelection';
  };
  i.prototype.addEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.on('updatelist', this.listSelection, this);
      this.parent.on('listoption', this.listOption, this);
      this.parent.on('selectAll', this.setSelectAll, this);
      this.parent.on('checkSelectAll', this.checkSelectAll, this);
      this.parent.on('searchBox', this.setSearchBox, this);
      this.parent.on('blur', this.onBlurHandler, this);
      this.parent.on('targetElement', this.targetElement, this);
      this.parent.on('deviceSearchBox', this.setDeviceSearchBox, this);
      this.parent.on('inputFocus', this.getFocus, this);
      this.parent.on('reOrder', this.setReorder, this);
      this.parent.on('activeList', this.getActiveList, this);
      this.parent.on('selectAllText', this.setLocale, this);
      this.parent.on('filterBarPlaceholder', this.setPlaceholder, this);
      p.add(document, 'mousedown', this.onDocumentClick, this);
      this.parent.on('addItem', this.checboxCreate, this);
      this.parent.on('popupFullScreen', this.setPopupFullScreen, this);
    }
  };
  i.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off('updatelist', this.listSelection);
      this.parent.off('listoption', this.listOption);
      this.parent.off('selectAll', this.setSelectAll);
      this.parent.off('checkSelectAll', this.checkSelectAll);
      this.parent.off('searchBox', this.setSearchBox);
      this.parent.off('blur', this.onBlurHandler);
      this.parent.off('targetElement', this.targetElement);
      this.parent.off('deviceSearchBox', this.setDeviceSearchBox);
      this.parent.off('inputFocus', this.getFocus);
      this.parent.off('reOrder', this.setReorder);
      this.parent.off('activeList', this.getActiveList);
      this.parent.off('selectAllText', this.setLocale);
      this.parent.off('filterBarPlaceholder', this.setPlaceholder);
      this.parent.off('addItem', this.checboxCreate);
      this.parent.off('popupFullScreen', this.setPopupFullScreen);
    }
  };
  i.prototype.listOption = function (e) {
    var t = this;
    if (n(this.parent.listCurrentOptions.itemCreated))
      this.parent.listCurrentOptions.itemCreated = function (r) {
        t.checboxCreate(r);
      };
    else {
      var s = this.parent.listCurrentOptions.itemCreated;
      this.parent.listCurrentOptions.itemCreated = function (r) {
        t.checboxCreate(r);
        this.parent.listCurrentOptions.itemCreated.apply(t, [r]);
      };
    }
  };
  i.prototype.setPlaceholder = function (e) {
    g.setPlaceholder(e.filterBarPlaceholder, this.filterInput);
  };
  i.prototype.checboxCreate = function (e) {
    var t;
    n(e.item) ? (t = e) : (t = e.item);
    if (
      this.parent.enableGroupCheckBox ||
      (t.className !== 'e-list-group-item ' && t.className !== 'e-list-group-item')
    ) {
      var s = B(this.parent.createElement, true);
      var r = f('div.e-icons', t);
      t.insertBefore(s, t.childNodes[n(r) ? 0 : 1]);
      f('.e-frame', s);
      if (this.parent.enableGroupCheckBox) {
        this.parent.popupWrapper.classList.add('e-multiselect-group');
      }
      return t;
    } else return t;
  };
  i.prototype.setSelectAll = function () {
    this.parent.showSelectAll
      ? (n(this.checkAllParent) &&
          ((this.checkAllParent = this.parent.createElement('div', { className: 'e-selectall-parent' })),
          (this.selectAllSpan = this.parent.createElement('span', { className: 'e-all-text' })),
          (this.selectAllSpan.textContent = ''),
          this.checkAllParent.appendChild(this.selectAllSpan),
          this.setLocale(),
          this.checboxCreate(this.checkAllParent),
          this.parent.headerTemplate &&
            (n(this.parent.filterParent)
              ? k([this.checkAllParent], this.parent.popupWrapper)
              : k([this.checkAllParent], this.parent.filterParent)),
          this.parent.headerTemplate ||
            (n(this.parent.filterParent)
              ? d([this.checkAllParent], this.parent.popupWrapper)
              : this.parent.filterParent.parentNode.insertBefore(
                  this.checkAllParent,
                  this.parent.filterParent.nextSibling,
                )),
          p.add(this.checkAllParent, 'mousedown', this.clickHandler, this)),
        this.parent.list.classList.contains('e-nodata') ||
        (this.parent.listData &&
          this.parent.listData.length <= 1 &&
          !this.parent.enableVirtualization &&
          !this.parent.isDynamicDataChange) ||
        (this.parent.isDynamicDataChange && this.parent.listData && this.parent.listData.length <= 1)
          ? (this.checkAllParent.style.display = 'none')
          : (this.checkAllParent.style.display = 'block'),
        (this.parent.selectAllHeight = this.checkAllParent.getBoundingClientRect().height))
      : n(this.checkAllParent) ||
        (this.checkAllParent.parentElement.removeChild(this.checkAllParent), (this.checkAllParent = null));
  };
  i.prototype.destroy = function () {
    this.removeEventListener();
    p.remove(document, 'mousedown', this.onDocumentClick);
    this.checkAllParent = null;
    this.clearIconElement = null;
    this.filterInput = null;
    this.filterInputObj = null;
    this.checkWrapper = null;
    this.selectAllSpan = null;
  };
  i.prototype.listSelection = function (e) {
    var t;
    if (!n(e.e)) {
      e.li.querySelector('.e-checkbox-wrapper .e-frame');
      t = n(e.e.target)
        ? e.li.querySelector('.e-checkbox-wrapper').childNodes[1]
        : e.e.target.classList.contains('e-frame') &&
            (!this.parent.showSelectAll || (this.checkAllParent && !this.checkAllParent.contains(e.e.target)))
          ? e.e.target
          : e.li.querySelector('.e-checkbox-wrapper').childNodes[1];
    } else {
      var s = e.li.querySelector('.e-checkbox-wrapper');
      t = s ? s.childNodes[1] : e.li.lastElementChild.childNodes[1];
    }
    if (this.parent.itemTemplate || this.parent.enableGroupCheckBox) {
      t = e.li.firstElementChild.childNodes[1];
    }
    if (!n(t)) {
      this.checkWrapper = m(t, '.e-checkbox-wrapper');
    }
    if (!n(this.checkWrapper)) {
      var r = f('.e-frame', this.checkWrapper);
      var l = false;
      this.validateCheckNode(this.checkWrapper, r.classList.contains('e-check'), e.li, e.e, l);
    }
  };
  i.prototype.validateCheckNode = function (e, t, s, r, l) {
    this.changeState(e, t ? 'uncheck' : 'check', r, true, l);
  };
  i.prototype.clickHandler = function (e) {
    var t;
    e.currentTarget.classList.contains(this.checkAllParent.className) ||
    e.currentTarget.classList.value === this.checkAllParent.className
      ? (t = e.currentTarget.firstElementChild.lastElementChild)
      : (t = e.currentTarget);
    this.checkWrapper = m(t, '.e-checkbox-wrapper');
    var s = true;
    if (!n(this.checkWrapper)) {
      var r = f('.e-frame', this.checkWrapper);
      this.validateCheckNode(this.checkWrapper, r.classList.contains('e-check'), null, e, s);
    }
    e.preventDefault();
  };
  i.prototype.changeState = function (e, t, s, r, l) {
    var a = e.getElementsByClassName('e-frame')[0];
    t === 'check' && !e.getElementsByClassName('e-frame')[0].classList.contains('e-check')
      ? (e.getElementsByClassName('e-frame')[0].classList.remove('e-stop'),
        e.getElementsByClassName('e-frame')[0].classList.add('e-check'),
        l && (this.parent.selectAllItems(true, s), this.setLocale(true)))
      : t === 'uncheck' &&
          (e.getElementsByClassName('e-frame')[0].classList.contains('e-check') ||
            e.getElementsByClassName('e-frame')[0].classList.contains('e-stop'))
        ? (y([e.getElementsByClassName('e-frame')[0]], ['e-check', 'e-stop']),
          l && (this.parent.selectAllItems(false, s), this.setLocale()))
        : t === 'indeterminate' &&
          !e.getElementsByClassName('e-frame')[0].classList.contains('e-stop') &&
          (y([e.getElementsByClassName('e-frame')[0]], ['e-check']),
          e.getElementsByClassName('e-frame')[0].classList.add('e-stop'),
          l && (this.parent.selectAllItems(false, s), this.setLocale()));
  };
  i.prototype.setSearchBox = function (e) {
    if (n(this.parent.filterParent)) {
      this.parent.filterParent = this.parent.createElement('span', { className: 'e-filter-parent' });
      this.filterInput = this.parent.createElement('input', {
        attrs: { type: 'text' },
        className: 'e-input-filter',
      });
      this.parent.element.parentNode.insertBefore(this.filterInput, this.parent.element);
      var t = false;
      if (h.isDevice && this.parent.isDeviceFullScreen) {
        t = true;
        this.parent.mobFilter = false;
      }
      this.filterInputObj = g.createInput(
        {
          element: this.filterInput,
          buttons: t
            ? ['e-input-group-icon e-back-icon e-icons', 'e-input-group-icon e-clear-icon e-icons']
            : ['e-input-group-icon e-clear-icon e-icons'],
          properties: { placeholder: this.parent.filterBarPlaceholder },
        },
        this.parent.createElement,
      );
      if (!n(this.parent.cssClass)) {
        this.parent.cssClass.split(' ').indexOf('e-outline') !== -1
          ? v([this.filterInputObj.container], 'e-outline')
          : this.parent.cssClass.split(' ').indexOf('e-filled') !== -1 &&
            v([this.filterInputObj.container], 'e-filled');
      }
      k([this.filterInputObj.container], this.parent.filterParent);
      d([this.parent.filterParent], e.popupElement);
      S(this.filterInput, {
        'aria-disabled': 'false',
        role: 'combobox',
        autocomplete: 'off',
        autocapitalize: 'off',
        spellcheck: 'false',
        'aria-label': 'multiselect',
        'aria-expanded': 'true',
        'aria-controls': e.popupElement.id,
      });
      this.clearIconElement = this.filterInput.parentElement.querySelector('.e-clear-icon');
      if (!h.isDevice && this.clearIconElement) {
        p.add(this.clearIconElement, 'mousedown', this.clearText, this);
        this.clearIconElement.style.visibility = 'hidden';
      }
      p.add(this.filterInput, 'input', this.parent.onInput, this.parent);
      p.add(this.filterInput, 'keyup', this.parent.keyUp, this.parent);
      p.add(this.filterInput, 'keydown', this.parent.onKeyDown, this.parent);
      p.add(this.filterInput, 'blur', this.onBlurHandler, this);
      p.add(this.filterInput, 'paste', this.parent.pasteHandler, this.parent);
      this.parent.searchBoxHeight = this.filterInputObj.container.parentElement.getBoundingClientRect().height;
      return this.filterInputObj;
    }
  };
  i.prototype.clickOnBackIcon = function (e) {
    this.parent.hidePopup();
    y([document.body, this.parent.popupObj.element], 'e-popup-full-page');
    this.parent.inputElement.focus();
  };
  i.prototype.clearText = function (e) {
    this.parent.targetInputElement.value = '';
    if (this.parent.allowFiltering && this.parent.targetInputElement.value === '') {
      this.parent.search(null);
    }
    this.parent.refreshListItems(null);
    this.parent.refreshPopup();
    this.clearIconElement.style.visibility = 'hidden';
    this.filterInput.focus();
    if (
      !this.parent.enableVirtualization ||
      (this.parent.enableVirtualization &&
        (n(this.parent.value) || (this.parent.value && this.parent.value.length === 0)))
    ) {
      this.setReorder(e);
    }
    this.boundPreventListSelection = this.preventListSelection.bind(this);
    this.parent.popupWrapper.addEventListener('mouseup', this.boundPreventListSelection, true);
    e.preventDefault();
  };
  i.prototype.preventListSelection = function (e) {
    e.stopPropagation();
    this.parent.popupWrapper.removeEventListener('mouseup', this.boundPreventListSelection, true);
    this.boundPreventListSelection = null;
  };
  i.prototype.setDeviceSearchBox = function () {
    this.parent.popupObj.element.classList.add('e-ddl-device');
    this.parent.popupObj.element.classList.add('e-ddl-device-filter');
    this.parent.popupObj.position = {
      X: 0,
      Y: 0,
    };
    this.parent.popupObj.dataBind();
    this.setSearchBoxPosition();
    this.backIconElement = this.filterInputObj.container.querySelector('.e-back-icon');
    this.clearIconElement = this.filterInputObj.container.querySelector('.e-clear-icon');
    this.clearIconElement.style.visibility = 'hidden';
    p.add(this.backIconElement, 'click', this.clickOnBackIcon, this);
    p.add(this.clearIconElement, 'click', this.clearText, this);
  };
  i.prototype.setSearchBoxPosition = function () {
    var e = this.filterInput.parentElement.getBoundingClientRect().height;
    var t = 0;
    var s = 0;
    var r = 0;
    if (this.checkAllParent) {
      t = this.checkAllParent.getBoundingClientRect().height;
    }
    if (this.parent.header) {
      r = this.parent.header.getBoundingClientRect().height;
    }
    if (this.parent.footer) {
      s = this.parent.footer.getBoundingClientRect().height;
    }
    this.parent.popupObj.element.style.maxHeight = '100%';
    this.parent.popupObj.element.style.width = '100%';
    this.parent.list.style.maxHeight =
      window.innerHeight - this.filterInput.parentElement.getBoundingClientRect().height - t - r - s + 'px';
    this.parent.list.style.height =
      window.innerHeight - this.filterInput.parentElement.getBoundingClientRect().height - t - r - s + 'px';
    var l = this.filterInput.parentElement.querySelector('.e-clear-icon');
    j(this.filterInput);
    l.parentElement.insertBefore(this.filterInput, l);
  };
  i.prototype.setPopupFullScreen = function () {
    if (this.parent && this.parent.popupObj) {
      S(this.parent.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
      v([document.body, this.parent.popupObj.element], 'e-popup-full-page');
      this.parent.popupObj.element.style.maxHeight = '100%';
      this.parent.popupObj.element.style.width = '100%';
    }
  };
  i.prototype.targetElement = function () {
    if (!n(this.clearIconElement)) {
      this.parent.targetInputElement = this.filterInput;
      this.clearIconElement.style.visibility = this.parent.targetInputElement.value === '' ? 'hidden' : 'visible';
    }
    return this.parent.targetInputElement.value;
  };
  i.prototype.onBlurHandler = function (e) {
    if (!this.parent.element.classList.contains('e-listbox')) {
      var t = void 0;
      if (this.parent.keyAction) return;
      if (h.isIE) {
        t = !n(e) && e.target;
      }
      if (!h.isIE) {
        t = !n(e) && e.relatedTarget;
      }
      if (
        this.parent.popupObj &&
        document.body.contains(this.parent.popupObj.element) &&
        this.parent.popupObj.element.contains(t) &&
        !h.isIE &&
        this.filterInput
      ) {
        this.filterInput.focus();
        return;
      }
      if (this.parent.scrollFocusStatus && this.filterInput) {
        e.preventDefault();
        this.filterInput.focus();
        this.parent.scrollFocusStatus = false;
        return;
      }
      if (
        this.parent.popupObj &&
        document.body.contains(this.parent.popupObj.element) &&
        !this.parent.popupObj.element.classList.contains('e-popup-close')
      ) {
        this.parent.inputFocus = false;
        this.parent.updateValueState(e, this.parent.value, this.parent.tempValues);
        this.parent.dispatchEvent(this.parent.hiddenElement, 'change');
      }
      if (
        this.parent.popupObj &&
        document.body.contains(this.parent.popupObj.element) &&
        !this.parent.popupObj.element.classList.contains('e-popup-close')
      ) {
        this.parent.inputFocus = false;
        this.parent.overAllWrapper.classList.remove('e-input-focus');
        this.parent.trigger('blur');
        this.parent.focused = true;
      }
      if (
        this.parent.popupObj &&
        document.body.contains(this.parent.popupObj.element) &&
        !this.parent.popupObj.element.classList.contains('e-popup-close') &&
        !h.isDevice
      ) {
        this.parent.hidePopup();
      }
    }
  };
  i.prototype.onDocumentClick = function (e) {
    if (this.parent.getLocaleName() !== 'listbox') {
      var t = e.target;
      if (!n(this.parent.popupObj) && m(e.target, '[id="' + this.parent.popupObj.element.id + '"]')) {
        if (!(this.filterInput && this.filterInput.value !== '')) {
          e.preventDefault();
        }
      }
      !(!n(this.parent.popupObj) && m(e.target, '[id="' + this.parent.popupObj.element.id + '"]')) &&
      !n(this.parent.overAllWrapper) &&
      !this.parent.overAllWrapper.contains(e.target)
        ? (this.parent.overAllWrapper.classList.contains(N.focus) || this.parent.isPopupOpen()) &&
          ((this.parent.inputFocus = false),
          (this.parent.scrollFocusStatus = false),
          this.parent.hidePopup(),
          this.parent.onBlurHandler(e, true),
          (this.parent.focused = true))
        : (this.parent.scrollFocusStatus =
            (h.isIE || h.info.name === 'edge') && document.activeElement === this.filterInput);
      if (
        !n(this.parent.overAllWrapper) &&
        !this.parent.overAllWrapper.contains(e.target) &&
        this.parent.overAllWrapper.classList.contains('e-input-focus') &&
        !this.parent.isPopupOpen()
      ) {
        h.isIE ? this.parent.onBlurHandler() : this.parent.onBlurHandler(e);
      }
      if (this.filterInput === e.target) {
        this.filterInput.focus();
      }
    }
  };
  i.prototype.getFocus = function (e) {
    this.parent.overAllWrapper.classList.remove('e-input-focus');
    if (this.parent.keyAction && e.value !== 'clear' && e.value !== 'focus') {
      this.parent.keyAction = false;
      return;
    }
    if (e.value === 'focus') {
      this.filterInput.focus();
      this.parent.removeFocus();
      p.remove(this.parent.list, 'keydown', this.parent.onKeyDown);
    }
    if (e.value === 'clear') {
      this.filterInput.value = '';
      this.clearIconElement.style.visibility = 'hidden';
    }
  };
  i.prototype.checkSelectAll = function (e) {
    if (e.value === 'check') {
      this.changeState(this.checkAllParent, e.value, null, null, false);
      this.setLocale(true);
    }
    if (e.value === 'uncheck') {
      this.changeState(this.checkAllParent, e.value, null, null, false);
      this.setLocale();
    }
    if (e.value === 'indeterminate') {
      this.changeState(this.checkAllParent, e.value, null, null, false);
      this.setLocale();
    }
  };
  i.prototype.setLocale = function (e) {
    if (this.parent.selectAllText !== 'Select All' || this.parent.unSelectAllText !== 'Unselect All') {
      var t = e ? this.parent.unSelectAllText : this.parent.selectAllText;
      this.selectAllSpan.textContent = '';
      for (
        var s = w(t),
          r = e ? 'unSelectAllText' : 'selectAllText',
          l = 0,
          a = s({}, this.parent, r, null, !this.parent.isStringTemplate);
        l < a.length;
        l++
      ) {
        var A = a[l];
        this.selectAllSpan.textContent = a[l].textContent;
      }
    } else {
      var O = {
        selectAllText: 'Select All',
        unSelectAllText: 'Unselect All',
      };
      var u = new x(this.parent.getLocaleName(), {}, this.parent.locale);
      if (u.getConstant('selectAllText') === '') {
        u = new x('dropdowns', O, this.parent.locale);
      }
      if (!n(this.selectAllSpan)) {
        this.selectAllSpan.textContent = e ? u.getConstant('unSelectAllText') : u.getConstant('selectAllText');
      }
    }
  };
  i.prototype.getActiveList = function (e) {
    e.li.classList.contains('e-active') ? this.activeLi.push(e.li.cloneNode(true)) : this.activeLi.splice(e.index, 1);
  };
  i.prototype.setReorder = function (e) {
    if (this.parent.enableSelectionOrder && !n(this.parent.value)) {
      var t = this.parent.ulElement.querySelectorAll('li.e-active').length;
      var s = void 0;
      var r = this.parent.createElement('ul', { className: 'e-list-parent e-ul e-reorder' });
      if (this.parent.ulElement.querySelectorAll('li.e-active').length > 0) {
        var l = this.parent.ulElement.querySelectorAll('li.e-active');
        l.forEach(function (A) {
          r.appendChild(A);
        });
        s = this.parent.ulElement.querySelectorAll('li.e-active');
        v(s, 'e-reorder-hide');
        if (this.parent.enableVirtualization) {
          var a = this.parent.list.querySelector('.e-virtual-ddl-content');
          d([r], a);
        } else d([r], this.parent.list);
      }
      this.parent.focusAtFirstListItem();
    }
  };
  return i;
})();
export { z as C };
