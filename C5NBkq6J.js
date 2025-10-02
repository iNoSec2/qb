import { a9 as c, gi as d, gj as f, gk as s, gl as u } from '../assets/app-BjImoLrr.js';
var m = (function () {
  function r(o) {
    this.control = o;
  }
  r.prototype.render = function (o, n) {
    this.annotation = o;
    var e = c('div', {
      id: this.control.element.id + 'Annotation' + n,
      styles: 'position:absolute;z-index:1',
      innerHTML: o.content,
    });
    return e;
  };
  r.prototype.processAnnotation = function (o, n, e) {
    var t = new d(0, 0);
    var i = this.render(o, n);
    i
      ? this.setElementStyle(t, i, e)
      : this.control.redraw && (f(i.id), this.control.isReact && this.control.clearTemplate());
  };
  r.prototype.setElementStyle = function (o, n, e) {
    var t = {
      cancel: false,
      name: s,
      content: n,
      location: o,
    };
    this.control.trigger(s, t);
    if (!t.cancel) {
      var i = this.Location(this.annotation.annotationRadius, this.annotation.annotationAngle);
      t.content.style.left = i.left + 'px';
      t.content.style.top = i.top + 'px';
      t.content.style.transform = 'translate(-50%, -50%)';
      t.content.setAttribute('aria-label', 'Annotation');
      e.appendChild(t.content);
      if (this.control.isReact) {
        this.control.renderReactTemplates();
      }
    }
  };
  r.prototype.Location = function (o, n) {
    var e;
    var t;
    var i = parseFloat(o);
    if (i === 0 && n === 0) {
      var a = this.control.progressRect;
      t = this.control.progressRect.x + this.control.progressRect.width / 2;
      e = this.control.progressRect.y + this.control.progressRect.height / 2;
    } else {
      var l = Math.PI / 180;
      n = n - 90;
      n = n * l;
      var p = Math.round(this.control.progressSize.width / 2.25);
      var h = Math.round(this.control.progressSize.height / 2.25);
      t = i * Math.cos(n) + p;
      e = i * Math.sin(n) + h;
    }
    return {
      top: e,
      left: t,
    };
  };
  return r;
})();
var g = (function () {
  var r = function (o, n) {
    r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            e[i] = t[i];
          }
      };
    return r(o, n);
  };
  return function (o, n) {
    r(o, n);
    function e() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : ((e.prototype = n.prototype), new e());
  };
})();
var y = (function (r) {
  g(o, r);
  function o(n, e) {
    var t = r(n) || this;
    t.animation = new u();
    t.progress = n;
    t.annotations = e;
    return t;
  }
  o.prototype.renderAnnotations = function (n) {
    var e = this;
    this.annotations = this.progress.annotations;
    var t = document.getElementById(this.progress.element.id + 'Annotation_collections');
    this.parentElement =
      t ||
      c('div', {
        id: this.progress.element.id + 'Annotation_collections',
        styles: 'position:absolute',
      });
    this.annotations.map(function (i, a) {
      e.processAnnotation(i, a, e.parentElement);
    });
    if (!t) {
      n.appendChild(this.parentElement);
    }
    if (this.progress.animation.enable && !this.progress.isIndeterminate) {
      this.animation.doAnnotationAnimation(this.progress.clipPath, this.progress);
    }
  };
  o.prototype.getModuleName = function () {
    return 'ProgressAnnotation';
  };
  o.prototype.destroy = function () {};
  return o;
})(m);
const _ = {
  methods: {
    checkIndexationServer() {
      axios.get('api/files/checkIndexationServer').then(({ data: r }) => {
        if (!r.indexationOn) {
          this.showCenterToast(this.trans.get('__JSON__.upload.toast.warning.indexationOff'), 'e-toast-warning');
        }
      });
    },
  },
};
export { y as P, _ as u };
