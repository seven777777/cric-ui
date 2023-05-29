import {
  createElementBlock,
  defineComponent,
  openBlock,
  toDisplayString
} from "./chunk-QH2LEIYP.js";

// node_modules/cric-ui/lib/cric-ui.mjs
var f = { class: "cric-button" };
var m = defineComponent({
  name: "CButton"
});
var b = defineComponent({
  ...m,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (e, o) => (openBlock(), createElementBlock("button", f, toDisplayString(e.text), 1));
  }
});
var u = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [i, p] of e)
    o[i] = p;
  return o;
};
var _ = u(b, [["__scopeId", "data-v-e344ccc8"]]);
_.install = function(t) {
  return t.component(_.name, _), t;
};
var g = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: _
}, Symbol.toStringTag, { value: "Module" }));
var x = { class: "cric-icon" };
var v = defineComponent({
  name: "CIcon"
});
var y = defineComponent({
  ...v,
  props: {
    text: { default: "icon-test" }
  },
  setup(t) {
    return (e, o) => (openBlock(), createElementBlock("span", x, toDisplayString(e.text), 1));
  }
});
var c = u(y, [["__scopeId", "data-v-9ec22a6d"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
var j = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: c
}, Symbol.toStringTag, { value: "Module" }));
var O = { class: "cric-tag" };
var h = defineComponent({
  name: "CTag"
});
var C = defineComponent({
  ...h,
  props: {
    text: { default: "标签" }
  },
  setup(t) {
    return (e, o) => (openBlock(), createElementBlock("span", O, toDisplayString(e.text), 1));
  }
});
var s = u(C, [["__scopeId", "data-v-c3db8f80"]]);
s.install = function(t) {
  return t.component(s.name, s), t;
};
var S = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: s
}, Symbol.toStringTag, { value: "Module" }));
var d = Object.assign({ "./components/button/index.ts": g, "./components/icon/index.ts": j, "./components/tag/index.ts": S });
var $ = {};
var I = Object.keys(d).map((t) => {
  const e = d[t];
  return $[e.default.name] = e.default, e.default;
});
var T = function(t) {
  I.forEach((e) => {
    t.use(e);
  });
};
var B = {
  install: T
};
export {
  _ as CButton,
  c as CIcon,
  s as CTag,
  B as default
};
//# sourceMappingURL=cric-ui.js.map
