import { _ as n, c as o, o as i, b as e, t, e as _ } from '../assets/app-BjImoLrr.js';
const d = {
  data() {
    return {};
  },
};
const r = { class: 'mt-1' };
function a(l, s, u, p, c, v) {
  i();
  return o('div', null, [
    e('div', null, t(l.trans.get('__JSON__.viewer.docModule.helpContent.explanation')), 1),
    e('div', r, [
      _(t(l.trans.get('__JSON__.viewer.docModule.helpContent.listTribute')) + ' ', 1),
      e('ul', null, [
        e('li', null, ' @doc : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.doc')), 1),
        e('li', null, ' @file : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.file')), 1),
        e('li', null, ' @index- : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.index')), 1),
        e('li', null, ' @item : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.item')), 1),
        e('li', null, ' @linkto- : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.linkto')), 1),
        e('li', null, ' @mod : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.mod')), 1),
        e('li', null, ' @tag : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.tag')), 1),
        e('li', null, ' @poi- : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.poi')), 1),
        e('li', null, ' @video : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.video')), 1),
        e('li', null, ' @asset : ' + t(l.trans.get('__JSON__.viewer.docModule.helpContent.asset')), 1),
      ]),
    ]),
    e('div', null, t(l.trans.get('__JSON__.viewer.docModule.helpContent.autolink')), 1),
  ]);
}
const N = n(d, [['render', a]]);
export { N as default };
