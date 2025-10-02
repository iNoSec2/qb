import { h1 as F, am as g, bN as H, h2 as N, h3 as Y } from '../assets/app-BjImoLrr.js';
var V = 'ArrowLeft';
var O = 'ArrowRight';
var I = 'ArrowUp';
var b = 'ArrowDown';
var E = 'Tab';
var v = 'shiftTab';
var P = 'End';
var w = 'Home';
var x = (function () {
  function n(t) {
    this.mask = '';
    this.defaultConstant = {
      day: 'day',
      month: 'month',
      year: 'year',
      hour: 'hour',
      minute: 'minute',
      second: 'second',
      dayOfTheWeek: 'day of the week',
    };
    this.hiddenMask = '';
    this.validCharacters = 'dMyhmHfasz';
    this.isDayPart = false;
    this.isMonthPart = false;
    this.isYearPart = false;
    this.isHourPart = false;
    this.isMinutePart = false;
    this.isSecondsPart = false;
    this.isMilliSecondsPart = false;
    this.monthCharacter = '';
    this.periodCharacter = '';
    this.isHiddenMask = false;
    this.isComplete = false;
    this.isNavigate = false;
    this.navigated = false;
    this.isBlur = false;
    this.formatRegex =
      /EEEEE|EEEE|EEE|EE|E|cccc|ccc|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yyy|yy|y|HH|H|hh|h|mm|m|fff|ff|f|aa|a|ss|s|zzzz|zzz|zz|z|'[^']*'|'[^']*'/g;
    this.isDeletion = false;
    this.isShortYear = false;
    this.isDeleteKey = false;
    this.isDateZero = false;
    this.isMonthZero = false;
    this.isYearZero = false;
    this.isLeadingZero = false;
    this.dayTypeCount = 0;
    this.monthTypeCount = 0;
    this.hourTypeCount = 0;
    this.minuteTypeCount = 0;
    this.secondTypeCount = 0;
    this.parent = t;
    this.dateformat = this.getCulturedFormat();
    this.maskDateValue = this.parent.value != null ? new Date(+this.parent.value) : new Date();
    this.maskDateValue.setMonth(0);
    this.maskDateValue.setHours(0);
    this.maskDateValue.setMinutes(0);
    this.maskDateValue.setSeconds(0);
    this.previousDate = new Date(
      this.maskDateValue.getFullYear(),
      this.maskDateValue.getMonth(),
      this.maskDateValue.getDate(),
      this.maskDateValue.getHours(),
      this.maskDateValue.getMinutes(),
      this.maskDateValue.getSeconds(),
    );
    this.removeEventListener();
    this.addEventListener();
  }
  n.prototype.getModuleName = function () {
    return 'MaskedDateTime';
  };
  n.prototype.addEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.on('createMask', this.createMask, this);
      this.parent.on('setMaskSelection', this.validCharacterCheck, this);
      this.parent.on('inputHandler', this.maskInputHandler, this);
      this.parent.on('keyDownHandler', this.maskKeydownHandler, this);
      this.parent.on('clearHandler', this.clearHandler, this);
      this.parent.on('maskPasteInputHandler', this.maskPasteInputHandler, this);
    }
  };
  n.prototype.removeEventListener = function () {
    if (!this.parent.isDestroyed) {
      this.parent.off('createMask', this.createMask);
      this.parent.off('setMaskSelection', this.validCharacterCheck);
      this.parent.off('inputHandler', this.maskInputHandler);
      this.parent.off('keyDownHandler', this.maskKeydownHandler);
      this.parent.off('clearHandler', this.clearHandler);
      this.parent.off('maskPasteInputHandler', this.maskPasteInputHandler);
    }
  };
  n.prototype.createMask = function (t) {
    this.isDayPart =
      this.isMonthPart =
      this.isYearPart =
      this.isHourPart =
      this.isMinutePart =
      this.isSecondsPart =
        false;
    this.dateformat = this.getCulturedFormat();
    if (this.parent.maskPlaceholder.day) {
      this.defaultConstant.day = this.parent.maskPlaceholder.day;
    }
    if (this.parent.maskPlaceholder.month) {
      this.defaultConstant.month = this.parent.maskPlaceholder.month;
    }
    if (this.parent.maskPlaceholder.year) {
      this.defaultConstant.year = this.parent.maskPlaceholder.year;
    }
    if (this.parent.maskPlaceholder.hour) {
      this.defaultConstant.hour = this.parent.maskPlaceholder.hour;
    }
    if (this.parent.maskPlaceholder.minute) {
      this.defaultConstant.minute = this.parent.maskPlaceholder.minute;
    }
    if (this.parent.maskPlaceholder.second) {
      this.defaultConstant.second = this.parent.maskPlaceholder.second;
    }
    if (this.parent.maskPlaceholder.dayOfTheWeek) {
      this.defaultConstant.dayOfTheWeek = this.parent.maskPlaceholder.dayOfTheWeek.toString();
    }
    this.getCUltureMaskFormat();
    var s = this.dateformat.replace(this.formatRegex, this.formatCheck());
    this.isHiddenMask = true;
    this.hiddenMask = this.dateformat.replace(this.formatRegex, this.formatCheck());
    this.isHiddenMask = false;
    this.previousHiddenMask = this.hiddenMask;
    this.mask = this.previousValue = s;
    this.parent.maskedDateValue = this.mask;
    if (this.parent.value) {
      this.navigated = true;
      this.isBlur = t.isBlur;
      this.setDynamicValue();
    }
  };
  n.prototype.getCUltureMaskFormat = function () {
    this.l10n = new F(this.parent.moduleName, this.defaultConstant, this.parent.locale);
    this.objectString = Object.keys(this.defaultConstant);
    for (var t = 0; t < this.objectString.length; t++)
      this.defaultConstant[this.objectString[t].toString()] = this.l10n.getConstant(this.objectString[t].toString());
  };
  n.prototype.validCharacterCheck = function () {
    var t = this.parent.inputElement.selectionStart;
    if (
      this.parent.moduleName !== 'timepicker' &&
      t === this.hiddenMask.length &&
      this.mask === this.parent.inputElement.value
    ) {
      t = 0;
    }
    for (var s = t, i = t - 1; s < this.hiddenMask.length || i >= 0; s++, i--) {
      if (s < this.hiddenMask.length && this.validCharacters.indexOf(this.hiddenMask[s]) !== -1) {
        this.setSelection(this.hiddenMask[s]);
        return;
      }
      if (i >= 0 && this.validCharacters.indexOf(this.hiddenMask[i]) !== -1) {
        this.setSelection(this.hiddenMask[i]);
        return;
      }
    }
  };
  n.prototype.setDynamicValue = function () {
    this.maskDateValue = new Date(+this.parent.value);
    this.isDayPart =
      this.isMonthPart =
      this.isYearPart =
      this.isHourPart =
      this.isMinutePart =
      this.isSecondsPart =
        true;
    this.updateValue();
    if (!this.isBlur) {
      this.validCharacterCheck();
    }
  };
  n.prototype.setSelection = function (t) {
    for (var s = -1, i = 0, e = 0; e < this.hiddenMask.length; e++)
      if (this.hiddenMask[e] === t) {
        i = e + 1;
        if (s === -1) {
          s = e;
        }
      }
    if (s < 0) {
      s = 0;
    }
    this.parent.inputElement.setSelectionRange(s, i);
  };
  n.prototype.maskKeydownHandler = function (t) {
    if (t.e.key === 'Backspace') {
      var s = this.parent.inputElement.selectionStart;
      var i = '';
      switch (
        (this.validCharacters.indexOf(this.hiddenMask[this.parent.inputElement.selectionStart]) !== -1 &&
          (i = this.hiddenMask[this.parent.inputElement.selectionStart]),
        i)
      ) {
        case 'd':
          this.dayTypeCount = Math.max(this.dayTypeCount - 1, 0);
          break;
        case 'M':
          this.monthTypeCount = Math.max(this.monthTypeCount - 1, 0);
          break;
        case 'H':
        case 'h':
          this.hourTypeCount = Math.max(this.hourTypeCount - 1, 0);
          break;
        case 'm':
          this.minuteTypeCount = Math.max(this.minuteTypeCount - 1, 0);
          break;
        case 's':
          this.secondTypeCount = Math.max(this.secondTypeCount - 1, 0);
          break;
      }
      return;
    }
    this.dayTypeCount = this.monthTypeCount = this.hourTypeCount = this.minuteTypeCount = this.secondTypeCount = 0;
    if (t.e.key === 'Delete') {
      this.isDeleteKey = true;
      return;
    }
    if (
      !t.e.altKey &&
      !t.e.ctrlKey &&
      (t.e.key === 'ArrowLeft' ||
        t.e.key === 'ArrowRight' ||
        t.e.key === 'shiftTab' ||
        t.e.key === 'Tab' ||
        t.e.action === 'shiftTab' ||
        t.e.key === 'End' ||
        t.e.key === 'Home')
    ) {
      var s = this.parent.inputElement.selectionStart;
      var e = this.parent.inputElement.selectionEnd;
      var a = this.parent.inputElement.value.length;
      if (
        this.parent.inputElement.selectionStart === 0 &&
        this.parent.inputElement.selectionEnd === this.parent.inputElement.value.length &&
        (t.e.key === 'Tab' || t.e.action === 'shiftTab')
      ) {
        var u = t.e.action === 'shiftTab' ? this.parent.inputElement.selectionEnd : 0;
        this.parent.inputElement.selectionStart = this.parent.inputElement.selectionEnd = u;
      }
      if (t.e.key === 'End' || t.e.key === 'Home') {
        var r = t.e.key === 'End' ? this.parent.inputElement.value.length : 0;
        this.parent.inputElement.selectionStart = this.parent.inputElement.selectionEnd = r;
      }
      this.navigateSelection(t.e.key === 'ArrowLeft' || t.e.action === 'shiftTab' || t.e.key === 'End');
    }
    if (!t.e.altKey && !t.e.ctrlKey && (t.e.key === 'ArrowUp' || t.e.key === 'ArrowDown')) {
      var s = this.parent.inputElement.selectionStart;
      var i = '';
      if (this.validCharacters.indexOf(this.hiddenMask[s]) !== -1) {
        i = this.hiddenMask[s];
      }
      this.dateAlteration(t.e.key === 'ArrowDown');
      var o = this.dateformat.replace(this.formatRegex, this.formatCheck());
      this.isHiddenMask = true;
      this.hiddenMask = this.dateformat.replace(this.formatRegex, this.formatCheck());
      this.isHiddenMask = false;
      this.previousHiddenMask = this.hiddenMask;
      this.previousValue = o;
      this.parent.inputElement.value = o;
      for (var d = 0; d < this.hiddenMask.length; d++)
        if (i === this.hiddenMask[d]) {
          s = d;
          break;
        }
      this.parent.inputElement.selectionStart = s;
      this.validCharacterCheck();
    }
  };
  n.prototype.isPersist = function () {
    var t = this.parent.isFocused || this.navigated;
    return t;
  };
  n.prototype.differenceCheck = function () {
    var t = this.parent.inputElement.selectionStart;
    var s = this.parent.inputElement.value;
    var i = this.previousValue.substring(
      0,
      this.parent.inputElement.selectionStart + this.previousValue.length - this.parent.inputElement.value.length,
    );
    var e = this.parent.inputElement.value.substring(0, this.parent.inputElement.selectionStart);
    var a = new Date(+this.maskDateValue);
    var u = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate();
    if (
      i.indexOf(e) === 0 &&
      (e.length === 0 || this.previousHiddenMask[e.length - 1] !== this.previousHiddenMask[e.length])
    ) {
      for (var r = e.length; r < i.length; r++)
        if (this.previousHiddenMask[r] !== '' && this.validCharacters.indexOf(this.previousHiddenMask[r]) >= 0) {
          this.isDeletion = this.handleDeletion(this.previousHiddenMask[r], false);
        }
      if (this.isDeletion) return;
    }
    switch (this.previousHiddenMask[this.parent.inputElement.selectionStart - 1]) {
      case 'd': {
        var o =
          (this.isDayPart && a.getDate().toString().length < 2 && !this.isPersist() ? a.getDate() * 10 : 0) +
          parseInt(e[this.parent.inputElement.selectionStart - 1], 10);
        this.isDateZero = e[this.parent.inputElement.selectionStart - 1] === '0';
        this.parent.isFocused = this.parent.isFocused ? false : this.parent.isFocused;
        this.navigated = this.navigated ? false : this.navigated;
        if (isNaN(o)) return;
        for (var r = 0; o > u; r++) o = parseInt(o.toString().slice(1), 10);
        if (o >= 1) {
          a.setDate(o);
          this.isNavigate = o.toString().length === 2;
          this.previousDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
          if (a.getMonth() !== this.maskDateValue.getMonth()) return;
          this.isDayPart = true;
          var d = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate();
          this.dayTypeCount += this.dayTypeCount === 0 && parseInt(o + '0', 10) > d ? 2 : 1;
        } else {
          this.isDayPart = false;
          if (!(this.dayTypeCount === 1 && this.isDateZero)) {
            this.dayTypeCount += this.isDateZero ? 1 : 0;
          }
        }
        break;
      }
      case 'M': {
        var h = void 0;
        a.getMonth().toString().length < 2 && !this.isPersist()
          ? (h =
              (this.isMonthPart ? (a.getMonth() + 1) * 10 : 0) +
              parseInt(e[this.parent.inputElement.selectionStart - 1], 10))
          : (h = parseInt(e[this.parent.inputElement.selectionStart - 1], 10));
        this.parent.isFocused = this.parent.isFocused ? false : this.parent.isFocused;
        this.navigated = this.navigated ? false : this.navigated;
        this.isMonthZero = e[this.parent.inputElement.selectionStart - 1] === '0';
        if (isNaN(h)) {
          var k = this.getCulturedValue('months[stand-alone].wide');
          var m = Object.keys(k);
          for (
            this.monthCharacter += e[this.parent.inputElement.selectionStart - 1].toLowerCase();
            this.monthCharacter.length > 0;

          ) {
            for (var r = 1, f = 0, y = m; f < y.length; f++) {
              y[f];
              if (k[r].toLowerCase().indexOf(this.monthCharacter) === 0) {
                a.setMonth(r - 1);
                this.isMonthPart = true;
                this.maskDateValue = a;
                return;
              }
              r++;
            }
            this.monthCharacter = this.monthCharacter.substring(1, this.monthCharacter.length);
          }
        } else {
          for (; h > 12; ) h = parseInt(h.toString().slice(1), 10);
          if (h >= 1) {
            a.setMonth(h - 1);
            h >= 10 || h === 1
              ? this.isLeadingZero && h === 1
                ? ((this.isNavigate = h.toString().length === 1), (this.isLeadingZero = false))
                : (this.isNavigate = h.toString().length === 2)
              : (this.isNavigate = h.toString().length === 1);
            if (a.getMonth() !== h - 1) {
              a.setDate(1);
              a.setMonth(h - 1);
            }
            if (this.isDayPart) {
              var M = new Date(this.previousDate.getFullYear(), this.previousDate.getMonth() + 1, 0).getDate();
              var D = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate();
              if (this.previousDate.getDate() === M && D <= M) {
                a.setDate(D);
              }
            }
            this.previousDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
            this.isMonthPart = true;
            this.monthTypeCount = this.monthTypeCount + 1;
            this.isLeadingZero = false;
          } else {
            a.setMonth(0);
            this.isLeadingZero = true;
            this.isMonthPart = false;
            if (!(this.monthTypeCount === 1 && this.isMonthZero)) {
              this.monthTypeCount += this.isMonthZero ? 1 : 0;
            }
          }
        }
        break;
      }
      case 'y': {
        var l =
          (this.isYearPart && a.getFullYear().toString().length < 4 && !this.isShortYear ? a.getFullYear() * 10 : 0) +
          parseInt(e[this.parent.inputElement.selectionStart - 1], 10);
        var C = (this.dateformat.match(/y/g) || []).length;
        C = C !== 2 ? 4 : C;
        this.isShortYear = false;
        this.isYearZero = e[this.parent.inputElement.selectionStart - 1] === '0';
        if (isNaN(l)) return;
        for (; l > 9999; ) l = parseInt(l.toString().slice(1), 10);
        l < 1
          ? (this.isYearPart = false)
          : (a.setFullYear(l),
            l.toString().length === C && (this.isNavigate = true),
            (this.previousDate = new Date(a.getFullYear(), a.getMonth(), a.getDate())),
            (this.isYearPart = true));
        break;
      }
      case 'h':
        {
          this.hour =
            (this.isHourPart && (a.getHours() % 12 || 12).toString().length < 2 && !this.isPersist()
              ? (a.getHours() % 12 || 12) * 10
              : 0) + parseInt(e[this.parent.inputElement.selectionStart - 1], 10);
          this.parent.isFocused = this.parent.isFocused ? false : this.parent.isFocused;
          this.navigated = this.navigated ? false : this.navigated;
          if (isNaN(this.hour)) return;
        }
        for (; this.hour > 12; ) this.hour = parseInt(this.hour.toString().slice(1), 10);
        {
          a.setHours(Math.floor(a.getHours() / 12) * 12 + (this.hour % 12));
          this.isNavigate = this.hour.toString().length === 2;
          this.isHourPart = true;
          this.hourTypeCount =
            this.hourTypeCount === 0 && this.hour && parseInt(this.hour + '0', 10) > 12 ? 2 : this.hourTypeCount + 1;
        }
        break;
      case 'H':
        {
          this.hour =
            (this.isHourPart && a.getHours().toString().length < 2 && !this.isPersist() ? a.getHours() * 10 : 0) +
            parseInt(e[this.parent.inputElement.selectionStart - 1], 10);
          this.parent.isFocused = this.parent.isFocused ? false : this.parent.isFocused;
          this.navigated = this.navigated ? false : this.navigated;
          if (isNaN(this.hour)) return;
        }
        for (var r = 0; this.hour > 23; r++) this.hour = parseInt(this.hour.toString().slice(1), 10);
        {
          a.setHours(this.hour);
          this.isNavigate = this.hour.toString().length === 2;
          this.isHourPart = true;
          this.hourTypeCount =
            this.hourTypeCount === 0 && this.hour && parseInt(this.hour + '0', 10) > 23 ? 2 : this.hourTypeCount + 1;
        }
        break;
      case 'm': {
        var p =
          (this.isMinutePart && a.getMinutes().toString().length < 2 && !this.isPersist() ? a.getMinutes() * 10 : 0) +
          parseInt(e[this.parent.inputElement.selectionStart - 1], 10);
        this.parent.isFocused = this.parent.isFocused ? false : this.parent.isFocused;
        this.navigated = this.navigated ? false : this.navigated;
        if (isNaN(p)) return;
        for (var r = 0; p > 59; r++) p = parseInt(p.toString().slice(1), 10);
        a.setMinutes(p);
        this.isNavigate = p.toString().length === 2;
        this.isMinutePart = true;
        this.minuteTypeCount = this.minuteTypeCount === 0 && parseInt(p + '0', 10) > 59 ? 2 : this.minuteTypeCount + 1;
        break;
      }
      case 's': {
        var c =
          (this.isSecondsPart && a.getSeconds().toString().length < 2 && !this.isPersist() ? a.getSeconds() * 10 : 0) +
          parseInt(e[this.parent.inputElement.selectionStart - 1], 10);
        this.parent.isFocused = this.parent.isFocused ? false : this.parent.isFocused;
        this.navigated = this.navigated ? false : this.navigated;
        if (isNaN(c)) return;
        for (var r = 0; c > 59; r++) c = parseInt(c.toString().slice(1), 10);
        a.setSeconds(c);
        this.isNavigate = c.toString().length === 2;
        this.isSecondsPart = true;
        this.secondTypeCount = this.secondTypeCount === 0 && parseInt(c + '0', 10) > 59 ? 2 : this.secondTypeCount + 1;
        break;
      }
      case 'a': {
        this.periodCharacter += e[this.parent.inputElement.selectionStart - 1].toLowerCase();
        for (
          var S = this.getCulturedValue('dayPeriods.format.wide'), T = Object.keys(S), r = 0;
          this.periodCharacter.length > 0;
          r++
        ) {
          if (
            (S[T[0]].toLowerCase().indexOf(this.periodCharacter) === 0 && a.getHours() >= 12) ||
            (S[T[1]].toLowerCase().indexOf(this.periodCharacter) === 0 && a.getHours() < 12)
          ) {
            a.setHours((a.getHours() + 12) % 24);
            this.maskDateValue = a;
          }
          this.periodCharacter = this.periodCharacter.substring(1, this.periodCharacter.length);
        }
        break;
      }
    }
    this.maskDateValue = a;
  };
  n.prototype.formatCheck = function () {
    var t = this;
    function s(i) {
      var e;
      var a = t.getCulturedValue('days[stand-alone].abbreviated');
      var u = Object.keys(a);
      var r = t.getCulturedValue('days[stand-alone].wide');
      var o = Object.keys(r);
      var d = t.getCulturedValue('days[stand-alone].narrow');
      var h = Object.keys(d);
      var M = t.getCulturedValue('months[stand-alone].abbreviated');
      var D = t.getCulturedValue('months[stand-alone].wide');
      var k = t.getCulturedValue('dayPeriods.format.wide');
      var m;
      var f;
      switch (i) {
        case 'ddd':
        case 'dddd':
        case 'd':
          {
            e = t.isDayPart ? t.maskDateValue.getDate().toString() : t.defaultConstant.day.toString();
            e = t.zeroCheck(t.isDateZero, t.isDayPart, e);
            if (t.dayTypeCount === 2) {
              t.isNavigate = true;
              t.dayTypeCount = 0;
            }
          }
          break;
        case 'dd':
          {
            e = t.isDayPart ? t.roundOff(t.maskDateValue.getDate(), 2) : t.defaultConstant.day.toString();
            e = t.zeroCheck(t.isDateZero, t.isDayPart, e);
            if (t.dayTypeCount === 2) {
              t.isNavigate = true;
              t.dayTypeCount = 0;
            }
          }
          break;
        case 'E':
        case 'EE':
        case 'EEE':
        case 'ccc':
          e =
            t.isDayPart && t.isMonthPart && t.isYearPart
              ? a[u[t.maskDateValue.getDay()]].toString()
              : t.defaultConstant.dayOfTheWeek.toString();
          break;
        case 'EEEE':
        case 'cccc':
          e =
            t.isDayPart && t.isMonthPart && t.isYearPart
              ? r[o[t.maskDateValue.getDay()]].toString()
              : t.defaultConstant.dayOfTheWeek.toString();
          break;
        case 'EEEEE':
          e =
            t.isDayPart && t.isMonthPart && t.isYearPart
              ? d[h[t.maskDateValue.getDay()]].toString()
              : t.defaultConstant.dayOfTheWeek.toString();
          break;
        case 'M':
          {
            e = t.isMonthPart ? (t.maskDateValue.getMonth() + 1).toString() : t.defaultConstant.month.toString();
            e = t.zeroCheck(t.isMonthZero, t.isMonthPart, e);
            if (t.monthTypeCount === 2) {
              t.isNavigate = true;
              t.monthTypeCount = 0;
            }
          }
          break;
        case 'MM':
          {
            e = t.isMonthPart ? t.roundOff(t.maskDateValue.getMonth() + 1, 2) : t.defaultConstant.month.toString();
            e = t.zeroCheck(t.isMonthZero, t.isMonthPart, e);
            if (t.monthTypeCount === 2) {
              t.isNavigate = true;
              t.monthTypeCount = 0;
            }
          }
          break;
        case 'MMM':
          e = t.isMonthPart ? M[t.maskDateValue.getMonth() + 1] : t.defaultConstant.month.toString();
          break;
        case 'MMMM':
          e = t.isMonthPart ? D[t.maskDateValue.getMonth() + 1] : t.defaultConstant.month.toString();
          break;
        case 'yy':
          {
            e = t.isYearPart ? t.roundOff(t.maskDateValue.getFullYear() % 100, 2) : t.defaultConstant.year.toString();
            e = t.zeroCheck(t.isYearZero, t.isYearPart, e);
          }
          break;
        case 'y':
        case 'yyy':
        case 'yyyy':
          {
            e = t.isYearPart ? t.roundOff(t.maskDateValue.getFullYear(), 4) : t.defaultConstant.year.toString();
            e = t.zeroCheck(t.isYearZero, t.isYearPart, e);
          }
          break;
        case 'h':
          {
            e = t.isHourPart ? (t.maskDateValue.getHours() % 12 || 12).toString() : t.defaultConstant.hour.toString();
            if (t.hourTypeCount === 2) {
              t.isNavigate = true;
              t.hourTypeCount = 0;
            }
          }
          break;
        case 'hh':
          {
            e = t.isHourPart ? t.roundOff(t.maskDateValue.getHours() % 12 || 12, 2) : t.defaultConstant.hour.toString();
            if (t.hourTypeCount === 2) {
              t.isNavigate = true;
              t.hourTypeCount = 0;
            }
          }
          break;
        case 'H':
          {
            e = t.isHourPart ? t.maskDateValue.getHours().toString() : t.defaultConstant.hour.toString();
            if (t.hourTypeCount === 2) {
              t.isNavigate = true;
              t.hourTypeCount = 0;
            }
          }
          break;
        case 'HH':
          {
            e = t.isHourPart ? t.roundOff(t.maskDateValue.getHours(), 2) : t.defaultConstant.hour.toString();
            if (t.hourTypeCount === 2) {
              t.isNavigate = true;
              t.hourTypeCount = 0;
            }
          }
          break;
        case 'm':
          {
            e = t.isMinutePart ? t.maskDateValue.getMinutes().toString() : t.defaultConstant.minute.toString();
            if (t.minuteTypeCount === 2) {
              t.isNavigate = true;
              t.minuteTypeCount = 0;
            }
          }
          break;
        case 'mm':
          {
            e = t.isMinutePart ? t.roundOff(t.maskDateValue.getMinutes(), 2) : t.defaultConstant.minute.toString();
            if (t.minuteTypeCount === 2) {
              t.isNavigate = true;
              t.minuteTypeCount = 0;
            }
          }
          break;
        case 's':
          {
            e = t.isSecondsPart ? t.maskDateValue.getSeconds().toString() : t.defaultConstant.second.toString();
            if (t.secondTypeCount === 2) {
              t.isNavigate = true;
              t.secondTypeCount = 0;
            }
          }
          break;
        case 'ss':
          {
            e = t.isSecondsPart ? t.roundOff(t.maskDateValue.getSeconds(), 2) : t.defaultConstant.second.toString();
            if (t.secondTypeCount === 2) {
              t.isNavigate = true;
              t.secondTypeCount = 0;
            }
          }
          break;
        case 'f':
          e = Math.floor(t.maskDateValue.getMilliseconds() / 100).toString();
          break;
        case 'ff':
          {
            m = t.maskDateValue.getMilliseconds();
            if (t.maskDateValue.getMilliseconds() > 99) {
              m = Math.floor(t.maskDateValue.getMilliseconds() / 10);
            }
            e = t.roundOff(m, 2);
          }
          break;
        case 'fff':
          e = t.roundOff(t.maskDateValue.getMilliseconds(), 3);
          break;
        case 'a':
        case 'aa':
          e = t.maskDateValue.getHours() < 12 ? k.am : k.pm;
          break;
        case 'z':
        case 'zz':
        case 'zzz':
        case 'zzzz':
          {
            f = {
              format: i,
              type: 'dateTime',
              skeleton: 'yMd',
              calendar: t.parent.calendarMode,
            };
            e = t.parent.globalize.formatDate(t.maskDateValue, f);
          }
          break;
      }
      e = e !== void 0 ? e : i.slice(1, i.length - 1);
      if (t.isHiddenMask) {
        for (var y = '', l = 0; l < e.length; l++) y += i[0];
        return y;
      } else return e;
    }
    return s;
  };
  n.prototype.isValidDate = function (t) {
    var s = new Date(t);
    return !isNaN(s.getTime());
  };
  n.prototype.maskPasteInputHandler = function () {
    if (this.isValidDate(this.parent.inputElement.value)) {
      this.maskDateValue = new Date(this.parent.inputElement.value);
      this.isDayPart =
        this.isMonthPart =
        this.isYearPart =
        this.isHourPart =
        this.isMinutePart =
        this.isSecondsPart =
          true;
      this.updateValue();
      if (!this.isBlur) {
        this.validCharacterCheck();
      }
      return;
    } else this.maskInputHandler();
  };
  n.prototype.maskInputHandler = function () {
    var t = this.parent.inputElement.selectionStart;
    var s = '';
    if (this.validCharacters.indexOf(this.hiddenMask[t]) !== -1) {
      s = this.hiddenMask[t];
    }
    this.differenceCheck();
    var i = this.dateformat.replace(this.formatRegex, this.formatCheck());
    this.isHiddenMask = true;
    this.hiddenMask = this.dateformat.replace(this.formatRegex, this.formatCheck());
    this.isDateZero = this.isMonthZero = this.isYearZero = false;
    this.isHiddenMask = false;
    this.previousHiddenMask = this.hiddenMask;
    this.previousValue = i;
    this.parent.inputElement.value = i;
    for (var e = 0; e < this.hiddenMask.length; e++)
      if (s === this.hiddenMask[e]) {
        t = e;
        break;
      }
    var a;
    if (g.isDevice && (g.isIos || g.isIos7)) {
      var u = this.findScrollableParent(this.parent.inputElement);
      a = u ? u.getBoundingClientRect().top : window.scrollY;
    }
    this.parent.inputElement.selectionStart = t;
    this.validCharacterCheck();
    if ((this.isNavigate || this.isDeletion) && !this.isDeleteKey) {
      var r = !this.isNavigate;
      this.isNavigate = this.isDeletion = false;
      this.navigateSelection(r);
      if (g.isDevice && (g.isIos || g.isIos7)) {
        setTimeout(function () {
          window.scrollTo(0, a);
        }, 0);
      }
    }
    if (this.isDeleteKey) {
      this.isDeletion = false;
    }
    this.isDeleteKey = false;
  };
  n.prototype.findScrollableParent = function (t) {
    for (; t; ) {
      if (this.isScrollable(t)) return t;
      t = t.parentElement;
    }
    return null;
  };
  n.prototype.isScrollable = function (t) {
    var s = window.getComputedStyle(t).overflowY;
    return (
      t.scrollHeight > t.clientHeight &&
      (window.getComputedStyle(t).overflowY === 'auto' || window.getComputedStyle(t).overflowY === 'scroll')
    );
  };
  n.prototype.navigateSelection = function (t) {
    var s = this.parent.inputElement.selectionStart;
    var i = this.parent.inputElement.selectionEnd;
    var e = t ? this.parent.inputElement.selectionStart - 1 : this.parent.inputElement.selectionEnd;
    for (this.navigated = true; e < this.hiddenMask.length && e >= 0; ) {
      if (this.validCharacters.indexOf(this.hiddenMask[e]) >= 0) {
        this.setSelection(this.hiddenMask[e]);
        break;
      }
      e = e + (t ? -1 : 1);
    }
  };
  n.prototype.roundOff = function (t, s) {
    for (var i = t.toString(), e = s - i.length, a = '', u = 0; u < e; u++) a += '0';
    return a + i;
  };
  n.prototype.zeroCheck = function (t, s, i) {
    var e = i;
    if (t && !s) {
      e = '0';
    }
    return e;
  };
  n.prototype.handleDeletion = function (t, s) {
    switch (t) {
      case 'd':
        this.isDayPart = s;
        break;
      case 'M':
        {
          this.isMonthPart = s;
          if (!s) {
            this.maskDateValue.setMonth(0);
            this.monthCharacter = '';
          }
        }
        break;
      case 'y':
        this.isYearPart = s;
        break;
      case 'H':
      case 'h':
        {
          this.isHourPart = s;
          if (!s) {
            this.periodCharacter = '';
          }
        }
        break;
      case 'm':
        this.isMinutePart = s;
        break;
      case 's':
        this.isSecondsPart = s;
        break;
      default:
        return false;
    }
    return true;
  };
  n.prototype.dateAlteration = function (t) {
    var s = this.parent.inputElement.selectionStart;
    var i = '';
    if (this.validCharacters.indexOf(this.hiddenMask[this.parent.inputElement.selectionStart]) !== -1)
      i = this.hiddenMask[this.parent.inputElement.selectionStart];
    else return;
    var e = new Date(
      this.maskDateValue.getFullYear(),
      this.maskDateValue.getMonth(),
      this.maskDateValue.getDate(),
      this.maskDateValue.getHours(),
      this.maskDateValue.getMinutes(),
      this.maskDateValue.getSeconds(),
    );
    this.previousDate = new Date(
      this.maskDateValue.getFullYear(),
      this.maskDateValue.getMonth(),
      this.maskDateValue.getDate(),
      this.maskDateValue.getHours(),
      this.maskDateValue.getMinutes(),
      this.maskDateValue.getSeconds(),
    );
    var a = t ? -1 : 1;
    switch (i) {
      case 'd':
        e.setDate(e.getDate() + a);
        break;
      case 'M': {
        var u = e.getMonth() + a;
        e.setDate(1);
        e.setMonth(u);
        if (this.isDayPart) {
          var r = new Date(this.previousDate.getFullYear(), this.previousDate.getMonth() + 1, 0).getDate();
          var o = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
          this.previousDate.getDate() === r && o <= r ? e.setDate(o) : e.setDate(this.previousDate.getDate());
        } else e.setDate(this.previousDate.getDate());
        this.previousDate = new Date(e.getFullYear(), e.getMonth(), e.getDate());
        break;
      }
      case 'y':
        e.setFullYear(e.getFullYear() + a);
        break;
      case 'H':
      case 'h':
        e.setHours(e.getHours() + a);
        break;
      case 'm':
        e.setMinutes(e.getMinutes() + a);
        break;
      case 's':
        e.setSeconds(e.getSeconds() + a);
        break;
      case 'a':
        e.setHours((e.getHours() + 12) % 24);
        break;
    }
    this.maskDateValue = e.getFullYear() > 0 ? e : this.maskDateValue;
    if (this.validCharacters.indexOf(this.hiddenMask[this.parent.inputElement.selectionStart]) !== -1) {
      this.handleDeletion(this.hiddenMask[this.parent.inputElement.selectionStart], true);
    }
  };
  n.prototype.getCulturedValue = function (t) {
    var s = this.parent.locale;
    var i;
    this.parent.locale === 'en' || this.parent.locale === 'en-US'
      ? (i = H(t, N()))
      : (i = H('main.' + this.parent.locale + ('.dates.calendars.gregorian.' + t), Y));
    return i;
  };
  n.prototype.getCulturedFormat = function () {
    var t = this.getCulturedValue('dateTimeFormats[availableFormats].yMd').toString();
    if (this.parent.moduleName === 'datepicker') {
      t = this.getCulturedValue('dateTimeFormats[availableFormats].yMd').toString();
      if (this.parent.format && this.parent.formatString) {
        t = this.parent.formatString;
      }
    }
    if (this.parent.moduleName === 'datetimepicker') {
      t = this.getCulturedValue('dateTimeFormats[availableFormats].yMd').toString();
      if (this.parent.dateTimeFormat) {
        t = this.parent.dateTimeFormat;
      }
    }
    if (this.parent.moduleName === 'timepicker') {
      t = this.parent.cldrTimeFormat();
    }
    return t;
  };
  n.prototype.clearHandler = function () {
    this.isDayPart =
      this.isMonthPart =
      this.isYearPart =
      this.isHourPart =
      this.isMinutePart =
      this.isSecondsPart =
        false;
    this.updateValue();
    if (
      this.parent.inputElement &&
      this.parent.inputElement.value === this.parent.maskedDateValue &&
      this.parent.inputWrapper &&
      this.parent.inputWrapper.clearButton &&
      !this.parent.inputWrapper.clearButton.classList.contains('e-clear-icon-hide')
    ) {
      this.parent.inputWrapper.clearButton.classList.add('e-clear-icon-hide');
    }
  };
  n.prototype.updateValue = function () {
    this.monthCharacter = this.periodCharacter = '';
    var t = this.dateformat.replace(this.formatRegex, this.formatCheck());
    this.isHiddenMask = true;
    this.hiddenMask = this.dateformat.replace(this.formatRegex, this.formatCheck());
    this.isHiddenMask = false;
    this.previousHiddenMask = this.hiddenMask;
    this.previousValue = t;
    this.parent.updateInputValue(t);
    if (this.parent.strictMode && (this.dayTypeCount !== 0 || this.monthTypeCount !== 0)) {
      this.isLeadingZero = false;
    }
    this.dayTypeCount = 0;
    this.monthTypeCount = 0;
  };
  n.prototype.destroy = function () {
    this.removeEventListener();
  };
  return n;
})();
export { x as M };
