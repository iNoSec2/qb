import {
  hk as $,
  hl as C,
  hm as M,
  hn as tt,
  ho as O,
  aa as A,
  hp as et,
  hq as ot,
  bs as w,
  as as v,
  hr as it,
  ah as st,
  b4 as rt,
  hs as S,
  ht as z,
  ap as T,
  hu as P,
  ag as X,
  hv as nt,
  am as F,
  hw as L,
  a9 as at,
  _ as q,
  k as J,
  c as G,
  t as V,
  o as B,
  hx as lt,
  hy as ht,
  hz as mt,
  E as U,
  a as R,
  f as ct,
  g as ut,
  b as _,
  r as k,
  w as Y,
  d as W,
  v as j,
} from '../assets/app-BjImoLrr.js';
import { d as dt } from './Brc4hCJ1.js';
var pt = (function () {
  function m(t) {
    this.iconRectOverFill = 'transparent';
    this.iconRectSelectionFill = 'transparent';
    this.zoomCompleteEvtCollection = [];
    this.isZoomed = false;
    this.chart = t;
    this.elementId = t.element.id;
    this.chart.svgRenderer = new $(this.elementId);
  }
  m.prototype.createPanButton = function (t, e) {
    var o = this.chart.svgRenderer;
    var i = this.chart.zoomModule.isPanning
      ? this.chart.themeStyle.toolkitSelectionColor
      : this.chart.themeStyle.toolkitFill;
    var s = 'M5,3h2.3L7.275,5.875h1.4L8.65,3H11L8,0L5,3z M3,11V8.7l2.875,0.025v-1.4L3,7.35V5L0,8L3,';
    s += '11z M11,13H8.7l0.025-2.875h-1.4L7.35,13H5l3,3L11,13z M13,5v2.3l-2.875-0.025v1.4L13,8.65V11l3-3L13,5z';
    this.elementOpacity = !this.chart.zoomModule.isZoomed && this.chart.zoomSettings.showToolbar ? '0.2' : '1';
    t.setAttribute('opacity', this.chart.theme === 'Fluent2HighContrast' ? '1' : this.elementOpacity);
    t.id = this.elementId + '_Zooming_Pan';
    t.setAttribute(
      'role',
      this.chart.zoomSettings.accessibility.accessibilityRole
        ? this.chart.zoomSettings.accessibility.accessibilityRole
        : 'button',
    );
    t.setAttribute(
      'tabindex',
      this.chart.zoomSettings.accessibility.focusable ? String(this.chart.zoomSettings.accessibility.tabIndex) : '-1',
    );
    t.setAttribute(
      'aria-label',
      this.chart.zoomSettings.accessibility.accessibilityDescription
        ? this.chart.zoomSettings.accessibility.accessibilityDescription
        : this.chart.getLocalizedLabel('Pan'),
    );
    this.panElements = t;
    t.appendChild(
      this.chart.svgRenderer.drawRectangle(
        new C(
          this.elementId + '_Zooming_Pan_1',
          'transparent',
          {},
          1,
          this.chart.themeStyle.toolkitIconRect,
          this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
          this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
        ),
      ),
    );
    t.appendChild(
      this.chart.svgRenderer.drawPath(
        new M(
          this.elementId + '_Zooming_Pan_2',
          this.chart.theme === 'Fluent2HighContrast' && this.elementOpacity === '0.2' ? '#3FF23F' : i,
          null,
          null,
          1,
          null,
          s,
        ),
      ),
    );
    e.appendChild(t);
    this.wireEvents(t, this.pan);
  };
  m.prototype.createZoomButton = function (t, e) {
    var o = this.chart.svgRenderer;
    var i =
      this.chart.zoomModule.isPanning || (!this.chart.zoomModule.isZoomed && this.chart.zoomSettings.showToolbar)
        ? this.chart.themeStyle.toolkitFill
        : this.chart.themeStyle.toolkitSelectionColor;
    this.elementOpacity =
      !this.chart.zoomModule.isPanning && !this.chart.zoomModule.isZoomed && this.chart.zoomSettings.showToolbar
        ? '0.2'
        : '1';
    var s = this.chart.zoomModule.isPanning ? 'transparent' : this.chart.themeStyle.toolkitIconRectSelectionFill;
    var r = 'M0.001,14.629L1.372,16l4.571-4.571v-0.685l0.228-0.274c1.051,0.868,2.423,1.417,3.885,1.417c3.291,0,';
    r +=
      '5.943-2.651,5.943-5.943S13.395,0,10.103,0S4.16,2.651,4.16,5.943c0,1.508,0.503,2.834,1.417,3.885l-0.274,0.228H4.571';
    r = r + 'L0.001,14.629L0.001,14.629z M5.943,5.943c0-2.285,1.828-4.114,4.114-4.114s4.114,1.828,4.114,';
    t.id = this.elementId + '_Zooming_Zoom';
    t.setAttribute(
      'role',
      this.chart.zoomSettings.accessibility.accessibilityRole
        ? this.chart.zoomSettings.accessibility.accessibilityRole
        : 'button',
    );
    t.setAttribute(
      'tabindex',
      this.chart.zoomSettings.accessibility.focusable ? String(this.chart.zoomSettings.accessibility.tabIndex) : '-1',
    );
    t.setAttribute(
      'aria-label',
      this.chart.zoomSettings.accessibility.accessibilityDescription
        ? this.chart.zoomSettings.accessibility.accessibilityDescription
        : this.chart.getLocalizedLabel('Zoom'),
    );
    t.setAttribute('opacity', this.elementOpacity);
    this.zoomElements = t;
    this.selectedID = this.chart.zoomModule.isPanning
      ? this.chart.element.id + '_Zooming_Pan_1'
      : this.elementId + '_Zooming_Zoom_1';
    t.appendChild(
      this.chart.svgRenderer.drawRectangle(
        new C(
          this.elementId + '_Zooming_Zoom_1',
          s,
          {},
          1,
          this.chart.themeStyle.toolkitIconRect,
          this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
          this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
        ),
      ),
    );
    t.appendChild(
      this.chart.svgRenderer.drawPath(
        new M(
          this.elementId + '_Zooming_Zoom_3',
          i,
          null,
          null,
          1,
          null,
          r + '4.114s-1.828,4.114-4.114,4.114S5.943,8.229,5.943,5.943z',
        ),
      ),
    );
    e.appendChild(t);
    this.wireEvents(t, this.zoom);
  };
  m.prototype.createZoomInButton = function (t, e, o) {
    var i = this.chart.svgRenderer;
    var s = this.chart.themeStyle.toolkitFill;
    var r = 'M10.103,0C6.812,0,4.16,2.651,4.16,5.943c0,1.509,0.503,2.834,1.417,3.885l-0.274,0.229H4.571L0,';
    r += '14.628l0,0L1.372,16l4.571-4.572v-0.685l0.228-0.275c1.052,0.868,2.423,1.417,3.885,1.417c3.291,0,5.943-2.651,';
    r += '5.943-5.943C16,2.651,13.395,0,10.103,0z M10.058,10.058c-2.286,0-4.114-1.828-4.114-4.114c0-2.286,1.828-4.114,';
    t.id = this.elementId + '_Zooming_ZoomIn';
    t.setAttribute(
      'role',
      this.chart.zoomSettings.accessibility.accessibilityRole
        ? this.chart.zoomSettings.accessibility.accessibilityRole
        : 'button',
    );
    t.setAttribute(
      'tabindex',
      this.chart.zoomSettings.accessibility.focusable ? String(this.chart.zoomSettings.accessibility.tabIndex) : '-1',
    );
    t.setAttribute(
      'aria-label',
      this.chart.zoomSettings.accessibility.accessibilityDescription
        ? this.chart.zoomSettings.accessibility.accessibilityDescription
        : this.chart.getLocalizedLabel('ZoomIn'),
    );
    var n = '12.749,5.466 10.749,5.466 10.749,3.466 9.749,3.466 9.749,5.466 7.749,5.466 7.749,6.466';
    t.appendChild(
      this.chart.svgRenderer.drawRectangle(
        new C(
          this.elementId + '_Zooming_ZoomIn_1',
          'transparent',
          {},
          1,
          this.chart.themeStyle.toolkitIconRect,
          this.chart.theme.indexOf('Fluent2') > -1 ? 4 : this.chart.theme.indexOf('Bootstrap5') > -1 ? 2 : 0,
          this.chart.theme.indexOf('Fluent2') > -1 ? 4 : this.chart.theme.indexOf('Bootstrap5') > -1 ? 2 : 0,
        ),
      ),
    );
    t.appendChild(
      this.chart.svgRenderer.drawPath(
        new M(
          this.elementId + '_Zooming_ZoomIn_2',
          this.chart.themeStyle.toolkitFill,
          null,
          null,
          1,
          null,
          r + '4.114-4.114c2.286,0,4.114,1.828,4.114,4.114C14.172,8.229,12.344,10.058,10.058,10.058z',
        ),
      ),
    );
    t.appendChild(
      this.chart.svgRenderer.drawPolygon(
        new tt(
          this.elementId + '_Zooming_ZoomIn_3',
          '12.749,5.466 10.749,5.466 10.749,3.466 9.749,3.466 9.749,5.466 7.749,5.466 7.749,6.466 9.749,6.466 9.749,8.466 10.749,8.466 10.749,6.466 12.749,6.466',
          this.chart.themeStyle.toolkitFill,
        ),
      ),
    );
    this.zoomInElements = t;
    this.elementOpacity =
      o.zoomModule.isPanning || (!o.zoomModule.isZoomed && !o.zoomSettings.showToolbar && !this.enableZoomButton)
        ? '0.2'
        : '1';
    t.setAttribute('opacity', this.elementOpacity);
    e.appendChild(t);
    this.wireEvents(t, this.zoomIn);
  };
  m.prototype.createZoomOutButton = function (t, e, o) {
    var i = this.chart.svgRenderer;
    var s = this.chart.themeStyle.toolkitFill;
    var r = 'M0,14.622L1.378,16l4.533-4.533v-0.711l0.266-0.266c1.022,0.889,2.4,1.422,3.866,';
    r += '1.422c3.289,0,5.955-2.666,5.955-5.955S13.333,0,10.044,0S4.089,2.667,4.134,5.911c0,1.466,0.533,2.844,';
    r +=
      '1.422,3.866l-0.266,0.266H4.578L0,14.622L0,14.622z M5.911,5.911c0-2.311,1.822-4.133,4.133-4.133s4.133,1.822,4.133,';
    t.id = this.elementId + '_Zooming_ZoomOut';
    t.setAttribute(
      'role',
      this.chart.zoomSettings.accessibility.accessibilityRole
        ? this.chart.zoomSettings.accessibility.accessibilityRole
        : 'button',
    );
    t.setAttribute(
      'tabindex',
      this.chart.zoomSettings.accessibility.focusable ? String(this.chart.zoomSettings.accessibility.tabIndex) : '-1',
    );
    t.setAttribute(
      'aria-label',
      this.chart.zoomSettings.accessibility.accessibilityDescription
        ? this.chart.zoomSettings.accessibility.accessibilityDescription
        : this.chart.getLocalizedLabel('ZoomOut'),
    );
    t.appendChild(
      this.chart.svgRenderer.drawRectangle(
        new C(
          this.elementId + '_Zooming_ZoomOut_1',
          'transparent',
          {},
          1,
          this.chart.themeStyle.toolkitIconRect,
          this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
          this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
        ),
      ),
    );
    t.appendChild(
      this.chart.svgRenderer.drawPath(
        new M(
          this.elementId + '_Zooming_ZoomOut_2',
          (o.theme === 'Fluent2HighContrast' && !o.zoomModule.isZoomed) ||
          (o.theme === 'Fluent2HighContrast' && o.zoomModule.isPanning)
            ? '#3FF23F'
            : this.chart.themeStyle.toolkitFill,
          null,
          null,
          1,
          null,
          r + '4.133s-1.866,4.133-4.133,4.133S5.911,8.222,5.911,5.911z M12.567,6.466h-5v-1h5V6.466z',
        ),
      ),
    );
    this.zoomOutElements = t;
    this.elementOpacity =
      o.zoomModule.isPanning || (!o.zoomModule.isZoomed && o.zoomSettings.showToolbar && !this.enableZoomButton)
        ? '0.2'
        : '1';
    t.setAttribute('opacity', o.theme === 'Fluent2HighContrast' ? '1' : this.elementOpacity);
    e.appendChild(t);
    this.wireEvents(t, this.zoomOut);
  };
  m.prototype.createResetButton = function (t, e, o, i) {
    var s = this.chart.svgRenderer;
    var r = this.chart.themeStyle.toolkitFill;
    var n;
    var a = 'M12.364,8h-2.182l2.909,3.25L16,8h-2.182c0-3.575-2.618-6.5-5.818-6.5c-1.128,0-2.218,0.366-3.091,';
    a += '1.016l1.055,1.178C6.581,3.328,7.272,3.125,8,3.125C10.4,3.125,12.363,5.319,12.364,8L12.364,8z M11.091,';
    a +=
      '13.484l-1.055-1.178C9.419,12.672,8.728,12.875,8,12.875c-2.4,0-4.364-2.194-4.364-4.875h2.182L2.909,4.75L0,8h2.182c0,';
    t.id = this.elementId + '_Zooming_Reset';
    t.setAttribute(
      'role',
      this.chart.zoomSettings.accessibility.accessibilityRole
        ? this.chart.zoomSettings.accessibility.accessibilityRole
        : 'button',
    );
    t.setAttribute(
      'tabindex',
      this.chart.zoomSettings.accessibility.focusable ? String(this.chart.zoomSettings.accessibility.tabIndex) : '-1',
    );
    t.setAttribute(
      'aria-label',
      this.chart.zoomSettings.accessibility.accessibilityDescription
        ? this.chart.zoomSettings.accessibility.accessibilityDescription
        : this.chart.getLocalizedLabel('Reset'),
    );
    this.elementOpacity = !o.zoomModule.isZoomed && o.zoomSettings.showToolbar ? '0.2' : '1';
    t.setAttribute('opacity', o.theme === 'Fluent2HighContrast' ? '1' : this.elementOpacity);
    i
      ? ((n = O(
          this.chart.getLocalizedLabel('ResetZoom'),
          { size: '12px' },
          {
            size: '12px',
            fontStyle: 'Normal',
            fontWeight: '400',
            fontFamily: 'Segoe UI',
          },
        )),
        t.appendChild(
          this.chart.svgRenderer.drawRectangle(
            new C(this.elementId + '_Zooming_Reset_1', 'transparent', {}, 1, new A(0, 0, n.width, n.height)),
          ),
        ),
        et(
          o.renderer,
          new ot(
            this.elementId + '_Zooming_Reset_2',
            0 + n.width / 2,
            0 + (n.height * 3) / 4,
            'middle',
            this.chart.getLocalizedLabel('ResetZoom'),
            'rotate(0,0,0)',
            'auto',
          ),
          { size: '12px' },
          this.chart.theme === 'Material3Dark' ||
            this.chart.theme === 'Fluent2Dark' ||
            this.chart.theme === 'Fluent2HighContrast'
            ? 'White'
            : 'black',
          t,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          o.enableCanvas,
          null,
          {
            size: '12px',
            fontStyle: 'Normal',
            fontWeight: '400',
            fontFamily: 'Segoe UI',
          },
        ))
      : (t.appendChild(
          this.chart.svgRenderer.drawRectangle(
            new C(
              this.elementId + '_Zooming_Reset_1',
              'transparent',
              {},
              1,
              this.chart.themeStyle.toolkitIconRect,
              this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
              this.chart.theme.indexOf('Fluent2') > -1 || this.chart.theme.indexOf('Bootstrap5') > -1 ? 4 : 0,
            ),
          ),
        ),
        t.appendChild(
          this.chart.svgRenderer.drawPath(
            new M(
              this.elementId + '_Zooming_Reset_2',
              o.theme === 'Fluent2HighContrast' && this.elementOpacity === '0.2'
                ? '#3FF23F'
                : this.chart.themeStyle.toolkitFill,
              null,
              null,
              1,
              null,
              a + '3.575,2.618,6.5,5.818,6.5C9.128,14.5,10.219,14.134,11.091,13.484L11.091,13.484z',
            ),
          ),
        ));
    e.appendChild(t);
    this.wireEvents(t, this.reset);
  };
  m.prototype.wireEvents = function (t, e) {
    w.add(t, 'mousedown touchstart', e, this);
    w.add(t, 'mouseover', this.showTooltip, this);
    w.add(t, 'mouseout', this.removeTooltip, this);
    w.add(this.chart.element, 'mousemove', this.mouseMoveHandler, this);
    w.add(this.chart.zoomModule.toolkitElements, 'mousedown', this.mouseDownHandler, this);
    window.addEventListener('mouseup', this.mouseUpHandler.bind(this), true);
  };
  m.prototype.mouseMoveHandler = function (t) {
    if (this.chart.zoomSettings.toolbarPosition.draggable) {
      this.isDragging
        ? this.performDragAndDrop(t)
        : this.chart.zoomModule.toolkitElements.setAttribute(
            'cursor',
            t.target.id.indexOf('Zooming_Rect') > -1 ? 'grab' : 'none',
          );
    }
  };
  m.prototype.mouseDownHandler = function (t) {
    if (
      this.chart.zoomSettings.toolbarPosition.draggable &&
      !this.isDragging &&
      t.target.id.indexOf('Zooming_Rect') > -1
    ) {
      this.isDragging = true;
      this.chart.zoomModule.toolkitElements.setAttribute('cursor', 'grabbing');
    }
  };
  m.prototype.mouseUpHandler = function (t) {
    if (this.isDragging) {
      this.isDragging = false;
      this.chart.zoomModule.toolkitElements.setAttribute(
        'cursor',
        t.target.id.indexOf('Zooming_Rect') > -1 ? 'grab' : 'none',
      );
    }
  };
  m.prototype.performDragAndDrop = function (t) {
    var e = this.chart.zoomModule.toolkitElements.getBoundingClientRect().width;
    var o = this.chart.zoomModule.toolkitElements.getBoundingClientRect().height;
    var i = 2;
    var s = t.type.indexOf('touch') > -1 ? t.changedTouches[0].clientX : this.chart.mouseX;
    var r = t.type.indexOf('touch') > -1 ? t.changedTouches[0].clientY : this.chart.mouseY;
    var n = Math.max(
      this.chart.border.width + 2,
      Math.min(
        s - this.chart.zoomModule.toolkitElements.getBoundingClientRect().width / 2,
        this.chart.availableSize.width -
          this.chart.zoomModule.toolkitElements.getBoundingClientRect().width -
          this.chart.border.width -
          2,
      ),
    );
    var a = Math.max(
      this.chart.border.width + 2,
      Math.min(
        r - this.chart.zoomModule.toolkitElements.getBoundingClientRect().height / 2,
        this.chart.availableSize.height -
          this.chart.zoomModule.toolkitElements.getBoundingClientRect().height -
          this.chart.border.width -
          2,
      ),
    );
    if (s < this.chart.availableSize.width && r < this.chart.availableSize.height) {
      this.chart.zoomModule.toolkitElements.setAttribute('transform', 'translate(' + n + ',' + a + ')');
      this.dragHorizontalRatio = n / this.chart.availableSize.width;
      this.dragVerticalRatio = a / this.chart.availableSize.height;
    }
  };
  m.prototype.showTooltip = function (t) {
    var e = t.currentTarget.id.split('_Zooming_')[1];
    var o =
      t.layerX -
      (O(
        t.currentTarget.id.split('_Zooming_')[1],
        { size: '10px' },
        {
          size: '10px',
          fontStyle: 'Normal',
          fontWeight: '400',
          fontFamily: 'Segoe UI',
        },
      ).width +
        5);
    var i = v(t.currentTarget.id + '_1');
    var s = v(t.currentTarget.id + '_2');
    var r = v(t.currentTarget.id + '_3');
    t.currentTarget.getAttribute('opacity') === '1'
      ? t.currentTarget.setAttribute('cursor', 'pointer')
      : t.currentTarget.setAttribute('cursor', 'auto');
    if (i) {
      this.hoveredID = i.id;
      i.setAttribute(
        'fill',
        this.chart.theme === 'Fluent2HighContrast' && t.currentTarget.childNodes[1].getAttribute('fill') === '#3FF23F'
          ? 'transparent'
          : this.chart.themeStyle.toolkitIconRectOverFill,
      );
    }
    if (s) {
      s.setAttribute(
        'fill',
        this.chart.theme === 'Fluent2HighContrast' && t.currentTarget.childNodes[1].getAttribute('fill') === '#3FF23F'
          ? '#3FF23F'
          : this.chart.themeStyle.toolkitSelectionColor,
      );
    }
    if (r) {
      r.setAttribute(
        'fill',
        this.chart.theme === 'Fluent2HighContrast' && t.currentTarget.childNodes[1].getAttribute('fill') === '#3FF23F'
          ? '#3FF23F'
          : this.chart.themeStyle.toolkitSelectionColor,
      );
    }
    if (!this.chart.isTouch && !this.isDragging) {
      it(
        'EJ2_Chart_ZoomTip',
        this.chart.getLocalizedLabel(t.currentTarget.id.split('_Zooming_')[1]),
        t.layerY + 10,
        o,
        '10px',
        this.chart.element.id,
      );
    }
  };
  m.prototype.removeTooltip = function () {
    if (this.hoveredID && v(this.hoveredID)) {
      var t = this.chart.zoomModule.isPanning
        ? this.hoveredID.indexOf('_Pan_') > -1
          ? this.chart.themeStyle.toolkitIconRectSelectionFill
          : 'transparent'
        : this.hoveredID.indexOf('_Zoom_') > -1 &&
            this.elementOpacity !== '0.2' &&
            this.chart.theme !== 'Fluent2HighContrast'
          ? this.chart.themeStyle.toolkitIconRectSelectionFill
          : 'transparent';
      v(this.hoveredID).setAttribute('fill', t);
    }
    var e = this.hoveredID ? v(this.hoveredID.replace('_1', '_2')) : null;
    var o = this.hoveredID ? v(this.hoveredID.replace('_1', '_3')) : null;
    if (e) {
      var i = this.chart.zoomModule.isPanning
        ? this.hoveredID.indexOf('_Pan_') > -1
          ? this.chart.themeStyle.toolkitSelectionColor
          : this.elementOpacity === '0.2' &&
              this.chart.theme === 'Fluent2HighContrast' &&
              v(this.hoveredID).nextElementSibling.getAttribute('fill') === '#3FF23F'
            ? '#3FF23F'
            : this.elementOpacity === '1' && this.chart.theme === 'Tailwind3'
              ? '#212529'
              : this.chart.themeStyle.toolkitFill
        : this.hoveredID.indexOf('_Zoom_') > -1
          ? this.chart.themeStyle.toolkitSelectionColor
          : this.chart.theme === 'Fluent2HighContrast' &&
              v(this.hoveredID).nextElementSibling.getAttribute('fill') === '#3FF23F'
            ? '#3FF23F'
            : this.chart.theme === 'Tailwind3Dark' && this.chart.zoomModule.isDevice
              ? 'black'
              : this.chart.themeStyle.toolkitFill;
      e.setAttribute('fill', i);
    }
    if (o) {
      var i =
        this.chart.zoomModule.isPanning || (!this.chart.isZoomed && this.chart.zoomSettings.showToolbar)
          ? this.chart.theme === 'Fluent2HighContrast' &&
            v(this.hoveredID).nextElementSibling.getAttribute('fill') === '#3FF23F' &&
            this.elementOpacity === '1'
            ? '#3FF23F'
            : this.elementOpacity === '1' && this.chart.theme === 'Tailwind3'
              ? '#212529'
              : this.chart.themeStyle.toolkitFill
          : this.hoveredID.indexOf('_Zoom_') > -1
            ? this.chart.themeStyle.toolkitSelectionColor
            : this.chart.theme === 'Fluent2HighContrast' &&
                v(this.hoveredID).nextElementSibling.getAttribute('fill') === '#3FF23F'
              ? '#3FF23F'
              : this.chart.themeStyle.toolkitFill;
      o.setAttribute('fill', i);
    }
    st('EJ2_Chart_ZoomTip');
  };
  m.prototype.reset = function (t) {
    var e = this;
    if (!this.chart.zoomModule.isZoomed) return false;
    var o = this.chart;
    this.enableZoomButton = false;
    o.redraw = o.enableCanvas ? o.redraw : o.zoomSettings.enableAnimation;
    !o.zoomModule.isDevice && o.zoomModule.toolkitElements
      ? rt(o.zoomModule.toolkitElements)
      : t.type === 'touchstart' && t.stopPropagation();
    var i;
    this.removeTooltip();
    o.svgObject.setAttribute('cursor', 'auto');
    var s = [];
    this.zoomCompleteEvtCollection = [];
    for (var r = 0, n = o.axisCollections; r < n.length; r++) {
      var a = n[r];
      i = {
        cancel: false,
        name: S,
        axis: a,
        previousZoomFactor: a.zoomFactor,
        previousZoomPosition: a.zoomPosition,
        currentZoomFactor: 1,
        currentZoomPosition: 0,
        previousVisibleRange: a.visibleRange,
        currentVisibleRange: null,
      };
      a.zoomFactor = 1;
      a.zoomPosition = 0;
      if (a.zoomingScrollBar) {
        a.zoomingScrollBar.isScrollUI = false;
      }
      if (!i.cancel) {
        a.zoomFactor = i.currentZoomFactor;
        a.zoomPosition = i.currentZoomPosition;
        this.zoomCompleteEvtCollection.push(i);
      }
      s.push({
        zoomFactor: a.zoomFactor,
        zoomPosition: a.zoomFactor,
        axisName: a.name,
        axisRange: a.visibleRange,
      });
      if (o.zoomModule.isDevice && !this.chart.isBlazor) {
        o.trigger(S, i);
      }
    }
    var c = {
      cancel: false,
      axisCollection: s,
      name: z,
    };
    return !c.cancel && this.chart.isBlazor
      ? (this.chart.trigger(z, c, function () {
          e.setDefferedZoom(o);
        }),
        false)
      : this.setDefferedZoom(o);
  };
  m.prototype.setDefferedZoom = function (t) {
    t.disableTrackTooltip = false;
    var e = t.duration;
    t.duration = 600;
    t.zoomModule.isZoomed = t.zoomModule.isPanning = t.isChartDrag = t.delayRedraw = false;
    t.zoomModule.touchMoveList = t.zoomModule.touchStartList = [];
    t.zoomModule.pinchTarget = null;
    t.zoomRedraw = t.zoomSettings.enableAnimation;
    if (t.redraw) {
      var o = v(t.element.id + '_Zooming_KitCollection');
      if (o) {
        o.remove();
      }
      if (t.tooltipModule) {
        if (v(t.element.id + '_tooltip')) {
          v(t.element.id + '_tooltip').remove();
        }
        for (var i = 0, s = t.visibleSeries; i < s.length; i++) {
          var r = s[i];
          if (
            !T(s[i]) &&
            (s[i].marker.visible || t.tooltip.shared || s[i].type === 'Scatter' || s[i].type === 'Bubble')
          ) {
            t.markerRender.removeHighlightedMarker(s[i], null, true);
          }
        }
      }
    } else t.removeSvg();
    t.refreshAxis();
    t.refreshBound();
    this.elementOpacity = '1';
    t.duration = t.duration;
    t.redraw = false;
    return false;
  };
  m.prototype.zoomIn = function () {
    this.zoomInOutCalculation(1, this.chart, this.chart.axisCollections, this.chart.zoomSettings.mode);
    return false;
  };
  m.prototype.zoomOut = function () {
    this.enableZoomButton = false;
    this.zoomInOutCalculation(-1, this.chart, this.chart.axisCollections, this.chart.zoomSettings.mode);
    return false;
  };
  m.prototype.zoom = function () {
    this.chart.zoomModule.isPanning = false;
    this.elementOpacity = '1';
    this.chart.svgObject.setAttribute('cursor', 'auto');
    if (this.zoomInElements) {
      this.zoomInElements.setAttribute('opacity', this.elementOpacity);
    }
    this.elementOpacity = !this.chart.zoomModule.isZoomed && this.chart.zoomSettings.showToolbar ? '0.2' : '1';
    if (this.zoomOutElements) {
      this.zoomOutElements.setAttribute('opacity', this.elementOpacity);
    }
    this.applySelection(this.zoomElements.childNodes, this.chart.themeStyle.toolkitSelectionColor);
    if (this.chart.theme === 'Fluent2HighContrast') {
      if (this.zoomInElements) {
        this.applySelection(this.zoomInElements.childNodes, this.chart.themeStyle.toolkitFill);
      }
      if (this.zoomOutElements) {
        this.applySelection(this.zoomOutElements.childNodes, this.chart.themeStyle.toolkitFill);
      }
    }
    if (this.panElements) {
      this.applySelection(this.panElements.childNodes, this.chart.theme === 'Tailwind3Dark' ? '#FFFFFF' : '#737373');
    }
    if (v(this.selectedID)) {
      v(this.selectedID).setAttribute('fill', 'transparent');
    }
    this.selectedID = this.chart.element.id + '_Zooming_Zoom_1';
    v(this.selectedID).setAttribute('fill', this.chart.themeStyle.toolkitIconRectSelectionFill);
    return false;
  };
  m.prototype.pan = function () {
    if (!this.chart.zoomModule.isZoomed) return false;
    this.chart.zoomModule.isPanning = true;
    this.chart.svgObject.setAttribute('cursor', 'pointer');
    this.elementOpacity = '0.2';
    if (this.zoomInElements) {
      this.zoomInElements.setAttribute('opacity', this.elementOpacity);
    }
    if (this.zoomOutElements) {
      this.zoomOutElements.setAttribute('opacity', this.elementOpacity);
    }
    if (this.chart.theme === 'Fluent2HighContrast') {
      var t = v(this.chart.element.id + '_Zooming_ZoomOut');
      if (t) {
        t.setAttribute('opacity', '1');
      }
      var e = v(this.chart.element.id + '_Zooming_ZoomIn');
      if (e) {
        e.setAttribute('opacity', '1');
      }
      var o = v(this.chart.element.id + '_Zooming_ZoomOut_2');
      if (o) {
        o.setAttribute('fill', '#3FF23F');
      }
      var i = v(this.chart.element.id + '_Zooming_ZoomIn_2');
      if (i) {
        i.setAttribute('fill', '#3FF23F');
      }
      var s = v(this.chart.element.id + '_Zooming_ZoomIn_3');
      if (s) {
        s.setAttribute('fill', '#3FF23F');
      }
    }
    if (this.panElements) {
      this.applySelection(this.panElements.childNodes, this.chart.themeStyle.toolkitSelectionColor);
    }
    if (this.zoomElements) {
      this.applySelection(this.zoomElements.childNodes, this.chart.theme === 'Tailwind3Dark' ? '#FFFFFF' : '#737373');
    }
    if (v(this.selectedID)) {
      v(this.selectedID).setAttribute('fill', 'transparent');
    }
    this.selectedID = this.chart.element.id + '_Zooming_Pan_1';
    v(this.selectedID).setAttribute('fill', this.chart.themeStyle.toolkitIconRectSelectionFill);
    return false;
  };
  m.prototype.zoomInOutCalculation = function (t, e, o, i) {
    var s = this;
    this.isZoomed = true;
    if (e.zoomSettings.showToolbar) {
      this.elementOpacity = this.zoomInElements.getAttribute('opacity');
    }
    if (!e.zoomModule.isPanning && this.elementOpacity !== '0.2') {
      if (e.zoomSettings.showToolbar && !e.isZoomed) {
        e.zoomModule.isZoomed = true;
      }
      var r = void 0;
      var n = void 0;
      var a = void 0;
      e.disableTrackTooltip = true;
      e.delayRedraw = true;
      var c = void 0;
      this.zoomCompleteEvtCollection = [];
      for (var p = [], u = 0, l = o; u < l.length; u++) {
        var h = l[u];
        c = {
          cancel: false,
          name: S,
          axis: h,
          previousZoomFactor: h.zoomFactor,
          previousZoomPosition: h.zoomPosition,
          currentZoomFactor: h.zoomFactor,
          currentZoomPosition: h.zoomPosition,
          previousVisibleRange: h.visibleRange,
          currentVisibleRange: null,
        };
        if ((h.orientation === 'Horizontal' && i !== 'Y') || (h.orientation === 'Vertical' && i !== 'X')) {
          a = Math.max(Math.max(1 / P(h.zoomFactor, 0, 1), 1) + 0.25 * t, 1);
          r = a === 1 ? 1 : P(1 / a, 0, 1);
          n = a === 1 ? 0 : h.zoomPosition + (h.zoomFactor - r) * 0.5;
          if (h.zoomPosition !== n || h.zoomFactor !== r) {
            r = n + r > 1 ? 1 - n : r;
          }
          c.currentZoomFactor = r;
          c.currentZoomPosition = n;
          if (!c.cancel) {
            h.zoomFactor = c.currentZoomFactor;
            h.zoomPosition = c.currentZoomPosition;
            this.zoomCompleteEvtCollection.push(c);
          }
          p.push({
            zoomFactor: h.zoomFactor,
            zoomPosition: h.zoomFactor,
            axisName: h.name,
            axisRange: h.visibleRange,
          });
        }
      }
      var f = {
        cancel: false,
        axisCollection: p,
        name: z,
      };
      this.chart.trigger(z, f, function () {
        if (f.cancel) {
          var d = new K(e);
          d.zoomCancel(o, s.zoomCompleteEvtCollection);
        }
      });
    }
  };
  m.prototype.applySelection = function (t, e) {
    for (var o = 1, i = t.length; o < i; o++) t[o].setAttribute('fill', e);
  };
  return m;
})();
var K = (function () {
  function m(t) {
    this.zoomCompleteEvtCollection = [];
    this.startPanning = false;
    this.chart = t;
    this.isPointer = F.isPointer;
    this.browserName = F.info.name;
    this.wheelEvent =
      this.browserName === 'mozilla' ? (this.isPointer ? 'mousewheel' : 'DOMMouseScroll') : 'mousewheel';
    this.cancelEvent = this.isPointer ? 'pointerleave' : 'mouseleave';
    this.addEventListener();
    this.isDevice = F.isDevice;
    var e = t.zoomSettings;
    this.toolkit = new pt(t);
    this.zooming = t.zoomSettings;
    this.elementId = t.element.id;
    this.zoomingRect = new A(0, 0, 0, 0);
    this.zoomAxes = [];
    this.zoomkitOpacity = 1;
    this.isIOS = F.isIos || F.isIos7;
    this.isZoomed = this.performedUI =
      this.zooming.enablePan ||
      (this.chart.primaryXAxis.zoomFactor < 1 && this.chart.primaryXAxis.zoomPosition > 0) ||
      (this.chart.primaryYAxis.zoomFactor < 1 && this.chart.primaryYAxis.zoomPosition > 0) ||
      this.isAxisZoomed(this.chart.axes);
    if (t.zoomSettings.enableScrollbar) {
      t.scrollElement = at('div', { id: t.element.id + '_scrollElement' });
    }
  }
  m.prototype.renderZooming = function (t, e, o) {
    this.calculateZoomAxesRange(e);
    this.zooming.enableSelectionZooming &&
    (!o || (e.isDoubleTap && this.touchStartList.length === 1)) &&
    (!this.isPanning || e.isDoubleTap)
      ? ((this.isPanning = this.isDevice ? true : this.isPanning),
        (this.performedUI = true),
        this.drawZoomingRectangle(e))
      : this.isPanning &&
        e.isChartDrag &&
        (!o || (o && this.touchStartList.length === 1)) &&
        ((this.pinchTarget = o ? t.target : null), this.doPan(e, e.axisCollections));
  };
  m.prototype.drawZoomingRectangle = function (t) {
    var e = t.chartAxisLayoutPanel.seriesClipRect;
    var o = new X(t.previousMouseMoveX, t.previousMouseMoveY);
    var i = new X(t.mouseX, t.mouseY);
    var s = (this.zoomingRect = nt(o, i, t.chartAxisLayoutPanel.seriesClipRect));
    if (s.width > 0 && s.height > 0) {
      this.isZoomed = true;
      t.disableTrackTooltip = true;
      t.svgObject.setAttribute('cursor', 'crosshair');
      this.zooming.mode === 'X'
        ? ((s.height = t.chartAxisLayoutPanel.seriesClipRect.height), (s.y = t.chartAxisLayoutPanel.seriesClipRect.y))
        : this.zooming.mode === 'Y' &&
          ((s.width = t.chartAxisLayoutPanel.seriesClipRect.width), (s.x = t.chartAxisLayoutPanel.seriesClipRect.x));
      if (t.tooltipModule) {
        t.tooltipModule.removeTooltip(0);
        for (var r = 0, n = t.visibleSeries; r < n.length; r++) {
          var a = n[r];
          if (!T(n[r]) && (n[r].marker.visible || t.tooltip.shared)) {
            t.markerRender.removeHighlightedMarker(n[r], null, true);
          }
        }
      }
      if (t.crosshairModule) {
        t.crosshairModule.removeCrosshair(0);
      }
      var c = t.svgObject;
      if (this.chart.enableCanvas) {
        var p = document.getElementById(this.chart.element.id + '_Secondary_Element');
        c = this.chart.svgRenderer.createSvg({
          id: this.chart.element.id + '_zoomRect_svg',
          width: this.chart.availableSize.width,
          height: this.chart.availableSize.height,
        });
        c.style.cssText = 'position: absolute; display:block; pointer-events: none';
        p.appendChild(c);
      }
      c.appendChild(
        t.svgRenderer.drawRectangle(
          new C(
            this.elementId + '_ZoomArea',
            t.themeStyle.selectionRectFill,
            {
              color: t.themeStyle.selectionRectStroke,
              width: 1,
            },
            1,
            s,
            0,
            0,
            '',
            '3',
          ),
        ),
      );
    }
  };
  m.prototype.doPan = function (t, e, o, i) {
    var s = this;
    if (o === void 0) {
      o = 0;
    }
    if (i === void 0) {
      i = 0;
    }
    if (t.startMove && t.crosshair.enable) return null;
    var r;
    var n;
    this.isZoomed = true;
    this.startPanning = true;
    this.offset = t.delayRedraw ? this.offset : t.chartAxisLayoutPanel.seriesClipRect;
    t.delayRedraw = true;
    this.zoomCompleteEvtCollection = [];
    t.disableTrackTooltip = true;
    for (var a, c = [], p = 0, u = e; p < u.length; p++) {
      var l = u[p];
      a = {
        cancel: false,
        name: S,
        axis: l,
        previousZoomFactor: l.zoomFactor,
        previousZoomPosition: l.zoomPosition,
        currentZoomFactor: l.zoomFactor,
        currentZoomPosition: l.zoomPosition,
        previousVisibleRange: l.visibleRange,
        currentVisibleRange: null,
      };
      r = Math.max(1 / P(l.zoomFactor, 0, 1), 1);
      l.orientation === 'Horizontal'
        ? ((n = (o !== 0 ? o : t.previousMouseMoveX - t.mouseX) / l.rect.width / r),
          (a.currentZoomPosition = P(l.zoomPosition + n, 0, 1 - l.zoomFactor)))
        : ((n = (i !== 0 ? i : t.previousMouseMoveY - t.mouseY) / l.rect.height / r),
          (a.currentZoomPosition = P(l.zoomPosition - n, 0, 1 - l.zoomFactor)));
      if (!a.cancel) {
        l.zoomFactor = a.currentZoomFactor;
        l.zoomPosition = a.currentZoomPosition;
        this.zoomCompleteEvtCollection.push(a);
      }
      c.push({
        zoomFactor: l.zoomFactor,
        zoomPosition: l.zoomFactor,
        axisName: l.name,
        axisRange: l.visibleRange,
      });
    }
    if (t.tooltipModule) {
      var h = v(t.element.id + '_tooltip');
      if (h) {
        h.remove();
      }
      for (var f = 0, d = t.visibleSeries; f < d.length; f++) {
        var b = d[f];
        if (
          !T(d[f]) &&
          (d[f].marker.visible || t.tooltip.shared || d[f].type === 'Scatter' || d[f].type === 'Bubble')
        ) {
          t.markerRender.removeHighlightedMarker(d[f], null, true);
        }
      }
    }
    var g = {
      cancel: false,
      axisCollection: c,
      name: z,
    };
    !g.cancel && this.chart.isBlazor
      ? this.chart.trigger(z, g, function () {
          g.cancel ? s.zoomCancel(e, s.zoomCompleteEvtCollection) : s.performDefferedZoom(t);
        })
      : this.chart.trigger(z, g, function () {
          g.cancel
            ? s.zoomCancel(e, s.zoomCompleteEvtCollection)
            : (s.performDefferedZoom(t), s.redrawOnZooming(t, false));
        });
  };
  m.prototype.performDefferedZoom = function (t) {
    var e;
    var o;
    if (this.zooming.enableDeferredZooming) {
      switch (((e = t.mouseX - t.mouseDownX), (o = t.mouseY - t.mouseDownY), this.zooming.mode)) {
        case 'X':
          o = 0;
          break;
        case 'Y':
          e = 0;
          break;
      }
      this.setTransform(e, o, null, null, t, false);
      this.refreshAxis(t.chartAxisLayoutPanel, t, t.axisCollections);
      if (t.enableCanvas) {
        this.performZoomRedraw(t);
      }
    } else this.performZoomRedraw(t);
    t.previousMouseMoveX = t.mouseX;
    t.previousMouseMoveY = t.mouseY;
  };
  m.prototype.performZoomRedraw = function (t) {
    var e = this.zoomingRect;
    t.animateSeries = false;
    if (this.isZoomed) {
      if (this.zoomingRect.width > 0 && this.zoomingRect.height > 0) {
        this.performedUI = true;
        t.svgObject.setAttribute('cursor', 'auto');
        this.doZoom(t, t.axisCollections, t.chartAxisLayoutPanel.seriesClipRect);
        t.isDoubleTap = false;
      } else if (t.disableTrackTooltip) {
        t.disableTrackTooltip = false;
        t.delayRedraw = false;
        if (t.enableCanvas) t.createChartSvg();
        else {
          var o = v(t.element.id + '_ZoomArea');
          if (o) {
            o.remove();
          }
          var i = v(t.element.id + '_Zooming_KitCollection');
          if (i) {
            i.remove();
          }
          if (t.tooltipModule) {
            if (v(t.element.id + '_tooltip')) {
              v(t.element.id + '_tooltip').remove();
            }
            for (var s = 0, r = t.visibleSeries; s < r.length; s++) {
              var n = r[s];
              if (
                !T(r[s]) &&
                (r[s].marker.visible || t.tooltip.shared || r[s].type === 'Scatter' || r[s].type === 'Bubble')
              ) {
                t.markerRender.removeHighlightedMarker(r[s], null, true);
              }
            }
          }
        }
        var a = t.duration;
        if (!(this.isPanning && (t.isChartDrag || this.startPanning)) && !t.enableCanvas) {
          t.duration = 600;
          t.redraw = this.zooming.enableAnimation;
          t.zoomRedraw = this.zooming.enableAnimation;
        }
        var c = [];
        if (
          t.highlightModule &&
          (t.legendSettings.enableHighlight || t.highlightMode !== 'None') &&
          t.highlightModule.highlightDataIndexes
        ) {
          c = t.highlightModule.highlightDataIndexes;
        }
        t.refreshAxis();
        t.refreshBound();
        if (t.highlightModule && (t.legendSettings.enableHighlight || t.highlightMode !== 'None') && c) {
          t.highlightModule.highlightDataIndexes = c;
        }
        if (!this.isZoomed) {
          t.zoomRedraw = this.zooming.enableAnimation;
        }
        this.startPanning = false;
        t.redraw = false;
        t.duration = t.duration;
        if (this.toolkit.isZoomed) {
          t.zoomRedraw = false;
          this.toolkit.isZoomed = false;
        }
      }
    }
  };
  m.prototype.refreshAxis = function (t, e, o) {
    var i = e.zoomSettings.mode;
    t.measureAxis(new A(e.initialClipRect.x, e.initialClipRect.y, e.initialClipRect.width, e.initialClipRect.height));
    o.map(function (s, r) {
      if (s.orientation === 'Horizontal' && e.zoomSettings.mode !== 'Y') {
        t.drawXAxisLabels(s, r, null, s.placeNextToAxisLine ? s.updatedRect : s.rect);
      }
      if (s.orientation === 'Vertical' && e.zoomSettings.mode !== 'X') {
        t.drawYAxisLabels(s, r, null, s.placeNextToAxisLine ? s.updatedRect : s.rect);
      }
    });
  };
  m.prototype.doZoom = function (t, e, o) {
    var i = this;
    var s = this.zoomingRect;
    var r = this.zooming.mode;
    var n;
    this.isPanning = t.zoomSettings.enablePan || this.isPanning;
    var a = [];
    this.zoomCompleteEvtCollection = [];
    for (var c = 0, p = e; c < p.length; c++) {
      var u = p[c];
      n = {
        cancel: false,
        name: S,
        axis: u,
        previousZoomFactor: u.zoomFactor,
        previousZoomPosition: u.zoomPosition,
        currentZoomFactor: u.zoomFactor,
        currentZoomPosition: u.zoomPosition,
        previousVisibleRange: u.visibleRange,
        currentVisibleRange: null,
      };
      u.orientation === 'Horizontal'
        ? this.zooming.mode !== 'Y' &&
          ((n.currentZoomPosition += Math.abs((this.zoomingRect.x - o.x) / o.width) * u.zoomFactor),
          (n.currentZoomFactor *= this.zoomingRect.width / o.width))
        : this.zooming.mode !== 'X' &&
          ((n.currentZoomPosition +=
            (1 - Math.abs((this.zoomingRect.height + (this.zoomingRect.y - o.y)) / o.height)) * u.zoomFactor),
          (n.currentZoomFactor *= this.zoomingRect.height / o.height));
      if (parseFloat(n.currentZoomFactor.toFixed(3)) <= 0.001) {
        n.currentZoomFactor = n.previousZoomFactor;
        n.currentZoomPosition = n.previousZoomPosition;
      }
      if (!n.cancel) {
        u.zoomFactor = n.currentZoomFactor;
        u.zoomPosition = n.currentZoomPosition;
        t.zoomRedraw = this.zooming.enableAnimation;
        this.zoomCompleteEvtCollection.push(n);
      }
      a.push({
        zoomFactor: u.zoomFactor,
        zoomPosition: u.zoomFactor,
        axisName: u.name,
        axisRange: u.visibleRange,
      });
    }
    var l = {
      cancel: false,
      axisCollection: a,
      name: z,
    };
    !l.cancel && this.chart.isBlazor
      ? this.chart.trigger(z, l, function () {
          l.cancel
            ? i.zoomCancel(e, i.zoomCompleteEvtCollection)
            : ((i.zoomingRect = new A(0, 0, 0, 0)), i.performZoomRedraw(t));
        })
      : this.chart.trigger(z, l, function () {
          l.cancel
            ? i.zoomCancel(e, i.zoomCompleteEvtCollection)
            : ((i.zoomingRect = new A(0, 0, 0, 0)), i.redrawOnZooming(t));
        });
  };
  m.prototype.redrawOnZooming = function (t, e, o) {
    if (e === void 0) {
      e = true;
    }
    if (o === void 0) {
      o = false;
    }
    var i = o ? this.toolkit.zoomCompleteEvtCollection : this.zoomCompleteEvtCollection;
    if (e) {
      this.performZoomRedraw(t);
    }
    for (var s, r = 0; r < i.length; r++)
      if (!i[r].cancel) {
        s = {
          cancel: false,
          name: S,
          axis: t.axisCollections[r],
          previousZoomFactor: i[r].previousZoomFactor,
          previousZoomPosition: i[r].previousZoomPosition,
          currentZoomFactor: t.axisCollections[r].zoomFactor,
          currentZoomPosition: t.axisCollections[r].zoomPosition,
          currentVisibleRange: t.axisCollections[r].visibleRange,
          previousVisibleRange: i[r].previousVisibleRange,
        };
        t.trigger(S, s);
      }
  };
  m.prototype.performMouseWheelZooming = function (t, e, o, i, s) {
    var r = this;
    var n =
      this.browserName === 'mozilla' && !this.isPointer ? (-t.detail / 3 > 0 ? 1 : -1) : t.wheelDelta > 0 ? 1 : -1;
    var a = this.zooming.mode;
    var c = 0.5;
    var p;
    var u;
    var l;
    this.isZoomed = true;
    this.calculateZoomAxesRange(i);
    i.disableTrackTooltip = true;
    this.performedUI = true;
    this.isPanning = i.zoomSettings.enablePan || this.isPanning;
    this.zoomCompleteEvtCollection = [];
    for (var h, f = [], d = 0, b = s; d < b.length; d++) {
      var g = b[d];
      h = {
        cancel: false,
        name: S,
        axis: g,
        previousZoomFactor: g.zoomFactor,
        previousZoomPosition: g.zoomPosition,
        currentZoomFactor: g.zoomFactor,
        currentZoomPosition: g.zoomPosition,
        currentVisibleRange: null,
        previousVisibleRange: g.visibleRange,
      };
      if (
        (g.orientation === 'Vertical' && this.zooming.mode !== 'X') ||
        (g.orientation === 'Horizontal' && this.zooming.mode !== 'Y')
      ) {
        p = Math.max(Math.max(1 / P(g.zoomFactor, 0, 1), 1) + 0.25 * n, 1);
        p = p > 50000000000 ? 50000000000 : p;
        if (p >= 1) {
          c = g.orientation === 'Horizontal' ? e / g.rect.width : 1 - o / g.rect.height;
          c = c > 1 ? 1 : c < 0 ? 0 : c;
          u = p === 1 ? 1 : P((n > 0 ? 0.9 : 1.1) / p, 0, 1);
          l = p === 1 ? 0 : g.zoomPosition + (g.zoomFactor - u) * c;
          if (g.zoomPosition !== l || g.zoomFactor !== u) {
            u = l + u > 1 ? 1 - l : u;
          }
          parseFloat(h.currentZoomFactor.toFixed(3)) <= 0.001
            ? ((h.currentZoomFactor = h.previousZoomFactor), (h.currentZoomPosition = h.previousZoomPosition))
            : ((h.currentZoomFactor = u), (h.currentZoomPosition = l));
        }
        if (h.currentZoomFactor === h.previousZoomFactor && h.currentZoomPosition === h.previousZoomPosition) {
          i.disableTrackTooltip = false;
        }
        if (!h.cancel) {
          g.zoomFactor = h.currentZoomFactor;
          g.zoomPosition = h.currentZoomPosition;
          i.zoomRedraw = this.zooming.enableAnimation;
          this.zoomCompleteEvtCollection.push(h);
        }
      }
      f.push({
        zoomFactor: g.zoomFactor,
        zoomPosition: g.zoomFactor,
        axisName: g.name,
        axisRange: g.visibleRange,
      });
    }
    var Z = {
      cancel: false,
      axisCollection: f,
      name: z,
    };
    !Z.cancel && this.chart.isBlazor
      ? this.chart.trigger(z, Z, function () {
          Z.cancel ? r.zoomCancel(s, r.zoomCompleteEvtCollection) : r.performZoomRedraw(i);
        })
      : this.chart.trigger(z, Z, function () {
          Z.cancel ? r.zoomCancel(s, r.zoomCompleteEvtCollection) : r.redrawOnZooming(i);
        });
  };
  m.prototype.performPinchZooming = function (t, e) {
    if ((this.zoomingRect.width > 0 && this.zoomingRect.height > 0) || (e.startMove && e.crosshair.enable))
      return false;
    this.calculateZoomAxesRange(e);
    this.isZoomed = true;
    this.isPanning = true;
    this.performedUI = true;
    this.offset = e.delayRedraw ? this.offset : e.chartAxisLayoutPanel.seriesClipRect;
    e.delayRedraw = true;
    e.disableTrackTooltip = true;
    var o = e.element.getBoundingClientRect();
    var i = this.touchStartList;
    var s = this.touchMoveList;
    var r = this.touchStartList[0].pageX - o.left;
    var n = this.touchStartList[0].pageY - o.top;
    var a = this.touchMoveList[0].pageX - o.left;
    var c = this.touchMoveList[0].pageY - o.top;
    var p = this.touchStartList[1].pageX - o.left;
    var u = this.touchStartList[1].pageY - o.top;
    var l = this.touchMoveList[1].pageX - o.left;
    var h = this.touchMoveList[1].pageY - o.top;
    var f = Math.abs(a - l) / Math.abs(r - p);
    var d = Math.abs(c - h) / Math.abs(n - u);
    var b = (this.offset.x - a) / f + r;
    var g = (this.offset.y - c) / d + n;
    var Z = new A(b, g, this.offset.width / f, this.offset.height / d);
    var x = a - f * r;
    var y = c - d * n;
    if (!isNaN(f - f) && !isNaN(d - d))
      switch (this.zooming.mode) {
        case 'XY':
          this.setTransform(x, y, f, d, e, true);
          break;
        case 'X':
          this.setTransform(x, 0, f, 1, e, true);
          break;
        case 'Y':
          this.setTransform(0, y, 1, d, e, true);
          break;
      }
    if (!this.calculatePinchZoomFactor(e, Z)) {
      this.refreshAxis(e.chartAxisLayoutPanel, e, e.axisCollections);
      this.redrawOnZooming(e, false);
    }
    return true;
  };
  m.prototype.calculatePinchZoomFactor = function (t, e) {
    var o = this.zooming.mode;
    var i;
    var s;
    var r;
    var n;
    var a;
    var c;
    var p;
    var u;
    var l;
    var h = [];
    this.zoomCompleteEvtCollection = [];
    for (var f = 0; f < t.axisCollections.length; f++) {
      var d = t.axisCollections[f];
      if (
        (d.orientation === 'Horizontal' && this.zooming.mode !== 'Y') ||
        (d.orientation === 'Vertical' && this.zooming.mode !== 'X')
      ) {
        u = d.zoomFactor;
        l = d.zoomPosition;
        p = {
          cancel: false,
          name: S,
          axis: d,
          previousZoomFactor: d.zoomFactor,
          previousZoomPosition: d.zoomPosition,
          currentZoomFactor: u,
          currentZoomPosition: l,
          previousVisibleRange: d.visibleRange,
          currentVisibleRange: null,
        };
        d.orientation === 'Horizontal'
          ? ((a = e.x - this.offset.x),
            (c = d.rect.width / this.zoomAxes[f].delta),
            (r = a / c + this.zoomAxes[f].min),
            (a = e.x + e.width - this.offset.x),
            (n = a / c + this.zoomAxes[f].min))
          : ((a = e.y - this.offset.y),
            (c = d.rect.height / this.zoomAxes[f].delta),
            (r = (a * -1 + d.rect.height) / c + this.zoomAxes[f].min),
            (a = e.y + e.height - this.offset.y),
            (n = (a * -1 + d.rect.height) / c + this.zoomAxes[f].min));
        i = Math.min(r, n);
        s = Math.max(r, n);
        l = (i - this.zoomAxes[f].actualMin) / this.zoomAxes[f].actualDelta;
        u = (s - i) / this.zoomAxes[f].actualDelta;
        p.currentZoomPosition = l < 0 ? 0 : l;
        p.currentZoomFactor = u > 1 ? 1 : u < 0.03 ? 0.03 : u;
        if (!p.cancel) {
          d.zoomFactor = p.currentZoomFactor;
          d.zoomPosition = p.currentZoomPosition;
          t.zoomRedraw = this.zooming.enableAnimation;
          this.zoomCompleteEvtCollection.push(p);
        }
        h.push({
          zoomFactor: d.zoomFactor,
          zoomPosition: d.zoomFactor,
          axisName: d.name,
          axisRange: d.visibleRange,
        });
      }
    }
    var b = {
      cancel: false,
      axisCollection: h,
      name: z,
    };
    return !b.cancel && (this.chart.trigger(z, b), b.cancel)
      ? (this.zoomCancel(t.axisCollections, this.zoomCompleteEvtCollection), true)
      : false;
  };
  m.prototype.setTransform = function (t, e, o, i, s, r) {
    if (!s.enableCanvas) {
      s.seriesElements.setAttribute('clip-path', 'url(#' + this.elementId + '_ChartAreaClipRect_)');
    }
    if (s.indicatorElements) {
      s.indicatorElements.setAttribute('clip-path', 'url(#' + this.elementId + '_ChartAreaClipRect_)');
    }
    var n;
    var a;
    var c;
    var p;
    if (t !== null && e !== null)
      for (var u = 0, l = s.visibleSeries; u < l.length; u++) {
        var h = l[u];
        a = s.requireInvertedAxis ? l[u].yAxis.rect.x : l[u].xAxis.rect.x;
        c = s.requireInvertedAxis ? l[u].xAxis.rect.y : l[u].yAxis.rect.y;
        n = 'translate(' + (t + (r ? o * a : a)) + ',' + (e + (r ? i * c : c)) + ')';
        n = o || i ? n + ' scale(' + o + ' ' + i + ')' : n;
        if (l[u].visible) {
          l[u].category === 'Indicator'
            ? l[u].seriesElement.parentNode.setAttribute('transform', n)
            : s.enableCanvas || l[u].seriesElement.setAttribute('transform', n);
          p = v(s.element.id + '_Series_' + l[u].index + '_DataLabelCollections');
          if (l[u].errorBarElement) {
            l[u].errorBarElement.setAttribute('transform', n);
          }
          if (l[u].symbolElement) {
            l[u].symbolElement.setAttribute('transform', n);
          }
          if (l[u].textElement) {
            l[u].textElement.setAttribute('visibility', 'hidden');
            l[u].shapeElement.setAttribute('visibility', 'hidden');
          }
          if (p) {
            p.style.visibility = 'hidden';
          }
        }
      }
  };
  m.prototype.calculateZoomAxesRange = function (t) {
    for (var e, o, i = 0; i < t.axisCollections.length; i++) {
      var s = t.axisCollections[i];
      o = t.axisCollections[i].visibleRange;
      this.zoomAxes[i]
        ? t.delayRedraw || ((this.zoomAxes[i].min = o.min), (this.zoomAxes[i].delta = o.delta))
        : ((e = {
            actualMin: t.axisCollections[i].actualRange.min,
            actualDelta: t.axisCollections[i].actualRange.delta,
            min: o.min,
            delta: o.delta,
          }),
          (this.zoomAxes[i] = e));
    }
  };
  m.prototype.showZoomingToolkit = function (t) {
    var e = this.zooming.toolbarItems;
    var o = t.chartAxisLayoutPanel.seriesClipRect;
    var i = 10;
    var s = t.svgRenderer;
    var r = this.isDevice ? (e.length === 0 ? 0 : 1) : e.length;
    var n = this.isDevice
      ? O(
          'Reset Zoom',
          { size: '12px' },
          {
            size: '12px',
            fontStyle: 'Normal',
            fontWeight: '400',
            fontFamily: 'Segoe UI',
          },
        ).width
      : 16;
    var a = this.isDevice
      ? O(
          'Reset Zoom',
          { size: '12px' },
          {
            size: '12px',
            fontStyle: 'Normal',
            fontWeight: '400',
            fontFamily: 'Segoe UI',
          },
        ).height
      : t.theme.indexOf('Fluent2') > -1 || t.theme.indexOf('Bootstrap5') > -1
        ? 18
        : 22;
    var c = r * n + (r + 1) * 10 + (r - 1) * 10;
    var p = this.zooming.toolbarPosition;
    var u;
    var l;
    switch (this.zooming.toolbarPosition.horizontalAlignment) {
      case 'Far':
        u = t.chartAxisLayoutPanel.seriesClipRect.x + t.chartAxisLayoutPanel.seriesClipRect.width - c - 10;
        break;
      case 'Near':
        u = t.chartAxisLayoutPanel.seriesClipRect.x + 10;
        break;
      case 'Center':
        u = t.chartAxisLayoutPanel.seriesClipRect.width / 2 - c / 2 + t.chartAxisLayoutPanel.seriesClipRect.x;
        break;
    }
    switch (((u += this.zooming.toolbarPosition.x), this.zooming.toolbarPosition.verticalAlignment)) {
      case 'Bottom':
        l = t.chartAxisLayoutPanel.seriesClipRect.height - t.chartAxisLayoutPanel.seriesClipRect.y + a + 10;
        break;
      case 'Top':
        l = t.chartAxisLayoutPanel.seriesClipRect.y + 10;
        break;
      case 'Middle':
        l = t.chartAxisLayoutPanel.seriesClipRect.height / 2 - a / 2 + t.chartAxisLayoutPanel.seriesClipRect.y;
        break;
    }
    var h = 2;
    l += this.zooming.toolbarPosition.y;
    u =
      this.toolkit.dragHorizontalRatio != null
        ? Math.min(
            Math.max(this.chart.border.width + 2, this.toolkit.dragHorizontalRatio * this.chart.availableSize.width),
            this.chart.availableSize.width - c - this.chart.border.width - 2,
          )
        : u;
    l =
      this.toolkit.dragVerticalRatio != null
        ? Math.min(
            Math.max(this.chart.border.width + 2, this.toolkit.dragVerticalRatio * this.chart.availableSize.height),
            this.chart.availableSize.height - a - this.chart.border.width - 2,
          )
        : l;
    var f = 10;
    var d = this.toolkit;
    var b;
    var g = '<filter id="chart_shadow" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/>';
    g += '<feOffset dx="-3" dy="4" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="1"/>';
    g += '</feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
    if (r === 0 || v(this.elementId + '_Zooming_KitCollection')) return false;
    var Z = t.svgRenderer.createDefs();
    e = this.isDevice ? ['Reset'] : e;
    Z.innerHTML = g;
    this.toolkitElements = t.svgRenderer.createGroup({
      id: this.elementId + '_Zooming_KitCollection',
      transform: 'translate(' + u + ',' + l + ')',
    });
    this.toolkitElements.appendChild(Z);
    var x =
      this.chart.theme === 'Tailwind3'
        ? '#F9FAFB'
        : this.chart.theme === 'Fluent'
          ? '#F3F2F1'
          : this.chart.theme === 'Material3'
            ? '#FFFFFF'
            : this.chart.theme === 'Material3Dark'
              ? '#1C1B1F'
              : this.chart.theme === 'Fluent2'
                ? '#F5F5F5'
                : this.chart.theme === 'Fluent2Dark'
                  ? '#141414'
                  : t.theme === 'Fluent2HighContrast'
                    ? '#000000'
                    : t.theme === 'Bootstrap5'
                      ? '#E9ECEF'
                      : t.theme === 'Bootstrap5Dark'
                        ? '#343A40'
                        : t.theme === 'Tailwind3Dark' && !this.isDevice
                          ? '#1D2432'
                          : this.chart.theme === 'Tailwind'
                            ? '#F3F4F6'
                            : '#fafafa';
    this.toolkitElements.appendChild(
      t.svgRenderer.drawRectangle(
        new C(
          this.elementId + '_Zooming_Rect',
          x,
          {
            color: 'transparent',
            width: 1,
          },
          1,
          new A(0, 0, c, a + 20),
          this.chart.theme.indexOf('Bootstrap5') > -1 ? 1 : 4,
          this.chart.theme.indexOf('Bootstrap5') > -1 ? 1 : 4,
        ),
      ),
    );
    var y = t.svgRenderer.drawRectangle(
      new C(
        this.elementId + '_Zooming_Rect',
        x,
        {
          color: 'transparent',
          width: 1,
        },
        0.1,
        new A(0, 0, c, a + 20),
        4,
        4,
      ),
    );
    this.chart.theme === 'Tailwind' || this.chart.theme === 'TailwindDark' || this.chart.theme === 'Tailwind3Dark'
      ? y.setAttribute('box-shadow', '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)')
      : this.chart.theme === 'Material3' ||
          this.chart.theme === 'Material3Dark' ||
          this.chart.theme === 'Fluent2' ||
          this.chart.theme === 'Fluent2Dark' ||
          this.chart.theme.indexOf('Bootstrap5') > -1
        ? (y.setAttribute(
            'filter',
            'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))',
          ),
          y.setAttribute(
            'fill',
            this.chart.theme === 'Material3'
              ? '#FFFFFF'
              : this.chart.theme === 'Fluent2'
                ? '#F5F5F5'
                : this.chart.theme === 'Bootstrap5'
                  ? '#E9ECEF'
                  : this.chart.theme === 'Bootstrap5Dark'
                    ? '#343A40'
                    : '#1C1B1F',
          ),
          y.setAttribute('rx', this.chart.theme.indexOf('Bootstrap5') > -1 ? '1px' : '4px'),
          y.setAttribute('ry', this.chart.theme.indexOf('Bootstrap5') > -1 ? '1px' : '4px'),
          y.setAttribute('opacity', '1'))
        : (t.theme === 'Tailwind3' && y.setAttribute('fill', '#F9FAFB'),
          y.setAttribute('filter', 'url(#chart_shadow)'));
    this.toolkitElements.appendChild(y);
    for (var H, N = false, D = 1; D <= r; D++) {
      switch (
        ((H = e[D - 1]),
        (b = t.svgRenderer.createGroup({
          transform:
            'translate(' +
            f +
            ',' +
            (this.isDevice ? 10 : t.theme.indexOf('Fluent2') > -1 || t.theme.indexOf('Bootstrap5') > -1 ? 11 : 13) +
            ')',
        })),
        H)
      ) {
        case 'Pan':
          {
            this.toolkit.createPanButton(b, this.toolkitElements);
            N = true;
          }
          break;
        case 'Zoom':
          this.toolkit.createZoomButton(b, this.toolkitElements);
          break;
        case 'ZoomIn':
          this.toolkit.createZoomInButton(b, this.toolkitElements, t);
          break;
        case 'ZoomOut':
          this.toolkit.createZoomOutButton(b, this.toolkitElements, t);
          break;
        case 'Reset':
          this.toolkit.createResetButton(b, this.toolkitElements, t, this.isDevice);
          break;
      }
      f += n + 20;
    }
    this.toolkitElements.setAttribute('opacity', this.isDevice ? '1' : '' + this.zoomkitOpacity);
    this.toolkitElements.setAttribute('cursor', 'auto');
    if (t.enableCanvas) {
      var I = document.createElement('div');
      I.id = t.element.id + '_zoom';
      I.style.cssText = 'position:absolute; z-index:1';
      var Q = t.availableSize.height / 2;
      var E = t.svgRenderer.createSvg({
        id: t.element.id + '_zoomkit_svg',
        width: t.availableSize.width,
        height: Q,
      });
      E.style.position = 'absolute';
      E.appendChild(this.toolkitElements);
      I.appendChild(E);
      document.getElementById(this.elementId + '_Secondary_Element').appendChild(I);
    } else t.svgObject.appendChild(this.toolkitElements);
    if (!this.isDevice) {
      w.add(this.toolkitElements, 'mousemove touchstart', this.zoomToolkitMove, this);
      w.add(this.toolkitElements, 'mouseleave touchend', this.zoomToolkitLeave, this);
      if (this.isPanning && N) {
        this.toolkit.pan();
      }
    }
    return true;
  };
  m.prototype.applyZoomToolkit = function (t, e) {
    var o = this.isAxisZoomed(e);
    o
      ? (this.showZoomingToolkit(t), (this.isZoomed = true))
      : t.zoomSettings.showToolbar
        ? ((this.isZoomed = o), this.showZoomingToolkit(t))
        : (this.toolkit.removeTooltip(),
          (this.isPanning = false),
          (this.isZoomed = false),
          (t.isZoomed = false),
          t.svgObject.setAttribute('cursor', 'auto'));
  };
  m.prototype.zoomCancel = function (t, e) {
    for (var o = 0, i = e; o < i.length; o++)
      for (var s = i[o], r = 0, n = t; r < n.length; r++) {
        var a = n[r];
        if (a.name === s.axis.name) {
          a.zoomFactor = s.previousZoomFactor;
          a.zoomPosition = s.previousZoomPosition;
          a.visibleRange = s.previousVisibleRange;
          break;
        }
      }
  };
  m.prototype.isAxisZoomed = function (t) {
    for (var e = false, o = 0, i = t; o < i.length; o++) {
      var s = i[o];
      e = e || i[o].zoomFactor !== 1 || i[o].zoomPosition !== 0;
    }
    return e;
  };
  m.prototype.zoomToolkitMove = function () {
    var t = this.toolkitElements;
    this.zoomkitOpacity = 1;
    this.toolkitElements.setAttribute('opacity', '' + this.zoomkitOpacity);
    return false;
  };
  m.prototype.zoomToolkitLeave = function () {
    var t = this.toolkitElements;
    this.zoomkitOpacity = 1;
    this.toolkitElements.setAttribute('opacity', '' + this.zoomkitOpacity);
    return false;
  };
  m.prototype.addEventListener = function () {
    if (!this.chart.isDestroyed) {
      w.add(this.chart.element, this.wheelEvent, this.chartMouseWheel, this);
      this.chart.on(F.touchMoveEvent, this.mouseMoveHandler, this);
      this.chart.on(F.touchStartEvent, this.mouseDownHandler, this);
      this.chart.on(F.touchEndEvent, this.mouseUpHandler, this);
      this.chart.on(this.cancelEvent, this.mouseCancelHandler, this);
    }
  };
  m.prototype.removeEventListener = function () {
    w.remove(this.chart.element, this.wheelEvent, this.chartMouseWheel);
    if (!this.chart.isDestroyed) {
      this.chart.off(F.touchMoveEvent, this.mouseMoveHandler);
      this.chart.off(F.touchStartEvent, this.mouseDownHandler);
      this.chart.off(F.touchEndEvent, this.mouseUpHandler);
      this.chart.off(this.cancelEvent, this.mouseCancelHandler);
    }
  };
  m.prototype.chartMouseWheel = function (t) {
    var e = this.chart;
    var o = this.chart.element.getBoundingClientRect();
    var i = v(this.chart.svgId).getBoundingClientRect();
    var s = t.clientX - o.left - Math.max(i.left - o.left, 0);
    var r = t.clientY - o.top - Math.max(i.top - o.top, 0);
    if (this.zooming.enableMouseWheelZooming && L(s, r, this.chart.chartAxisLayoutPanel.seriesClipRect)) {
      t.preventDefault();
      this.performMouseWheelZooming(t, s, r, this.chart, this.chart.axisCollections);
    }
    return false;
  };
  m.prototype.mouseMoveHandler = function (t) {
    var e = this.chart;
    var o = null;
    if (t.type === 'touchmove') {
      if (
        t.preventDefault &&
        this.isIOS &&
        (this.isPanning ||
          this.chart.isDoubleTap ||
          (this.zooming.enablePinchZooming && this.touchStartList.length > 1))
      ) {
        t.preventDefault();
      }
      o = t.touches;
    }
    if (this.chart.isChartDrag) {
      if (this.chart.isTouch) {
        this.touchMoveList = this.addTouchPointer(this.touchMoveList, t, o);
        if (this.zooming.enablePinchZooming && this.touchMoveList.length > 1 && this.touchStartList.length > 1) {
          this.performPinchZooming(t, this.chart);
        }
      }
      this.renderZooming(t, this.chart, this.chart.isTouch);
    }
  };
  m.prototype.mouseDownHandler = function (t) {
    var e = this.chart;
    var o = null;
    var i;
    if (t.type === 'touchstart') {
      o = t.touches;
    }
    i = t.target;
    if (
      i.id.indexOf(e.element.id + '_Zooming_') === -1 &&
      (e.zoomSettings.enablePinchZooming || e.zoomSettings.enableSelectionZooming || this.chart.zoomModule.isPanning) &&
      L(e.previousMouseMoveX, e.previousMouseMoveY, e.chartAxisLayoutPanel.seriesClipRect)
    ) {
      e.isChartDrag = true;
    }
    if (e.isTouch) {
      this.touchStartList = this.addTouchPointer(this.touchStartList, t, o);
    }
  };
  m.prototype.mouseUpHandler = function (t) {
    var e = this.chart;
    var o =
      t.target.id.indexOf(e.element.id + '_ZoomOut_') === -1 || t.target.id.indexOf(e.element.id + '_ZoomIn_') === -1;
    if (e.isChartDrag || o) {
      this.redrawOnZooming(e, true, true);
    }
    if (e.isTouch) {
      if (
        e.isDoubleTap &&
        L(e.mouseX, e.mouseY, e.chartAxisLayoutPanel.seriesClipRect) &&
        this.touchStartList.length === 1 &&
        this.isZoomed
      ) {
        this.toolkit.reset(t);
      }
      this.touchStartList = [];
      e.isDoubleTap = false;
    }
  };
  m.prototype.mouseCancelHandler = function () {
    if (this.isZoomed) {
      this.performZoomRedraw(this.chart);
    }
    this.pinchTarget = null;
    this.touchStartList = [];
    this.touchMoveList = [];
  };
  m.prototype.addTouchPointer = function (t, e, o) {
    if (o) {
      t = [];
      for (var i = 0, s = o.length; i < s; i++)
        t.push({
          pageX: o[i].clientX,
          pageY: o[i].clientY,
          pointerId: null,
        });
    } else {
      t = t || [];
      if (t.length === 0)
        t.push({
          pageX: e.clientX,
          pageY: e.clientY,
          pointerId: e.pointerId,
        });
      else
        for (var i = 0, r = t.length; i < r; i++)
          t[i].pointerId === e.pointerId
            ? (t[i] = {
                pageX: e.clientX,
                pageY: e.clientY,
                pointerId: e.pointerId,
              })
            : t.push({
                pageX: e.clientX,
                pageY: e.clientY,
                pointerId: e.pointerId,
              });
    }
    return t;
  };
  m.prototype.getModuleName = function () {
    return 'Zoom';
  };
  m.prototype.destroy = function () {
    this.removeEventListener();
  };
  return m;
})();
const gt = {
  mixins: [J],
  props: { data: { required: true } },
};
const ft = { class: 'chartTooltip' };
function vt(m, t, e, o, i, s) {
  B();
  return G('div', ft, V(m.userDateFormat(e.data.xValue)) + ' : ' + V(e.data.y), 1);
}
const bt = q(gt, [['render', vt]]);
const zt = {
  components: { tooltipChart: bt },
  mixins: [J, dt],
  props: {
    dataSource: { required: true },
    xName: { required: true },
    yName: { required: true },
    title: { required: true },
    primaryYAxisTitle: { required: true },
    primaryYAxisType: { required: true },
    height: { required: true },
    width: {
      required: false,
      default() {
        return '100%';
      },
    },
  },
  data() {
    return {
      marker: {
        visible: true,
        height: 7,
        width: 7,
        shape: 'Circle',
        isFilled: true,
      },
      showChart: true,
      signalParameterId: UUID.generate(),
      zoom: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
      },
      chartWidth: this.width,
      primaryYAxis: {
        valueType: this.primaryYAxisType,
        rangePadding: 'Additional',
        edgeLabelPlacement: 'Shift',
        title: this.primaryYAxisTitle,
        minimum: null,
        maximum: null,
      },
      primaryXAxis: {
        valueType: 'DateTime',
        rangePadding: 'Additional',
        edgeLabelPlacement: 'Hide',
        labelFormat: this.userDateTimeFormatSyncfusion(),
        labelIntersectAction: 'Hide',
        labelRotation: '-45',
        intervalType: 'Auto',
        minimum: null,
        maximum: null,
      },
      minimumYValue: null,
      maximumYValue: null,
    };
  },
  methods: {
    resizeChart() {
      if (this.chartWidth === '100%') {
        this.chartWidth = '99%';
        this.$nextTick(() => {
          this.chartWidth = '100%';
        });
      }
    },
    reloadChart() {
      this.primaryXAxis.minimum || this.primaryXAxis.maximum
        ? (this.primaryXAxis.rangePadding = 'None')
        : (this.primaryXAxis.rangePadding = 'Additional');
      this.primaryYAxis.minimum || this.primaryYAxis.maximum
        ? (this.primaryYAxis.rangePadding = 'None')
        : (this.primaryYAxis.rangePadding = 'Additional');
      this.showChart = false;
      this.$nextTick(() => {
        this.showChart = true;
      });
    },
  },
  watch: {
    minimumYValue() {
      if (!isNaN(this.minimumYValue)) {
        this.primaryYAxis.minimum = parseFloat(this.minimumYValue);
      }
      if (isNaN(this.primaryYAxis.minimum)) {
        this.primaryYAxis.minimum = null;
      }
      this.reloadChart();
    },
    maximumYValue() {
      if (!isNaN(this.maximumYValue)) {
        this.primaryYAxis.maximum = parseFloat(this.maximumYValue);
      }
      if (isNaN(this.primaryYAxis.maximum)) {
        this.primaryYAxis.maximum = null;
      }
      this.reloadChart();
    },
    'primaryXAxis.minimum': {
      handler() {
        this.reloadChart();
      },
    },
    'primaryXAxis.maximum': {
      handler() {
        this.reloadChart();
      },
    },
  },
  mounted() {
    U.$on('needResizing', this.resizeChart);
  },
  beforeUnmount() {
    U.$off('needResizing', this.resizeChart);
  },
  provide: {
    chart: [lt, ht, mt, K],
  },
};
const yt = ['id'];
const Ft = { class: 'e-input-group-removed data col-md-6 col-xs-6' };
const Zt = ['placeholder'];
const Ct = { class: 'e-input-group-removed data col-md-6 col-xs-6' };
const St = ['placeholder'];
function wt(m, t, e, o, i, s) {
  const r = k('ejs-dropdownbutton');
  const n = k('e-series');
  const a = k('e-series-collection');
  const c = k('tooltip-chart');
  const p = k('ejs-chart');
  const u = k('ejs-datetimepicker');
  B();
  return G('div', null, [
    R(
      r,
      {
        target: '#' + i.signalParameterId,
        iconCss: 'sf-icon-settings-01',
        style: {
          'box-shadow': 'none',
          position: 'absolute',
          'background-color': 'white',
          'z-index': '1',
        },
        iconPosition: 'Top',
      },
      null,
      8,
      ['target'],
    ),
    i.showChart
      ? (B(),
        ct(
          p,
          {
            key: 0,
            ref: 'lineChart',
            title: e.title,
            primaryXAxis: i.primaryXAxis,
            primaryYAxis: i.primaryYAxis,
            enableAnimation: false,
            width: i.chartWidth,
            height: e.height,
            tooltip: 'templateTooltip',
            zoomSettings: i.zoom,
          },
          {
            templateTooltip: Y(({ data: l }) => [R(c, { data: l }, null, 8, ['data'])]),
            default: Y(() => [
              R(a, null, {
                default: Y(() => [
                  R(
                    n,
                    {
                      type: 'Line',
                      dataSource: e.dataSource,
                      xName: e.xName,
                      yName: e.yName,
                      marker: i.marker,
                    },
                    null,
                    8,
                    ['dataSource', 'xName', 'yName', 'marker'],
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          },
          8,
          ['title', 'primaryXAxis', 'primaryYAxis', 'width', 'height', 'zoomSettings'],
        ))
      : ut('', true),
    _(
      'div',
      {
        id: i.signalParameterId,
        class: 'chartParameters row',
      },
      [
        R(
          u,
          {
            modelValue: i.primaryXAxis.minimum,
            'onUpdate:modelValue': t[0] || (t[0] = (l) => (i.primaryXAxis.minimum = l)),
            placeholder: m.trans.get('__JSON__.records.content.selectMinDate'),
            enableMask: true,
            maskPlaceholder: m.maskPlaceholderValue,
            timeFormat: m.userTimeFormatSyncfusion(),
            step: '5',
            onCleared: t[1] || (t[1] = (l) => (i.primaryXAxis.minimum = null)),
            format: m.userDateTimeFormatSyncfusion(),
          },
          null,
          8,
          ['modelValue', 'placeholder', 'maskPlaceholder', 'timeFormat', 'format'],
        ),
        R(
          u,
          {
            modelValue: i.primaryXAxis.maximum,
            'onUpdate:modelValue': t[2] || (t[2] = (l) => (i.primaryXAxis.maximum = l)),
            placeholder: m.trans.get('__JSON__.records.content.selectMaxDate'),
            enableMask: true,
            maskPlaceholder: m.maskPlaceholderValue,
            timeFormat: m.userTimeFormatSyncfusion(),
            step: '5',
            onCleared: t[3] || (t[3] = (l) => (i.primaryXAxis.maximum = null)),
            format: m.userDateTimeFormatSyncfusion(),
          },
          null,
          8,
          ['modelValue', 'placeholder', 'maskPlaceholder', 'timeFormat', 'format'],
        ),
        _('div', Ft, [
          W(
            _(
              'input',
              {
                class: 'e-input mb-0',
                type: 'number',
                'onUpdate:modelValue': t[4] || (t[4] = (l) => (i.minimumYValue = l)),
                placeholder: m.trans.get('__JSON__.signals.content.minimumValue', { label: this.primaryYAxisTitle }),
              },
              null,
              8,
              Zt,
            ),
            [[j, i.minimumYValue, void 0, { lazy: true }]],
          ),
        ]),
        _('div', Ct, [
          W(
            _(
              'input',
              {
                class: 'e-input mb-0',
                type: 'number',
                'onUpdate:modelValue': t[5] || (t[5] = (l) => (i.maximumYValue = l)),
                placeholder: m.trans.get('__JSON__.signals.content.maximumValue', { label: this.primaryYAxisTitle }),
              },
              null,
              8,
              St,
            ),
            [[j, i.maximumYValue, void 0, { lazy: true }]],
          ),
        ]),
      ],
      8,
      yt,
    ),
  ]);
}
const Rt = q(zt, [['render', wt]]);
export { Rt as l };
