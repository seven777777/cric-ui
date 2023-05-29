import {
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  withCtx
} from "./chunk-UFOEWOZZ.js";

// node_modules/cric-ui/lib/cric-ui.mjs
var C = { class: "title-box" };
var I = {
  key: 0,
  class: "pre-arrow-box"
};
var j = ["title"];
var k = defineComponent({
  name: "CArrowBtn"
});
var O = defineComponent({
  ...k,
  props: {
    status: { type: Boolean, default: false },
    title: { default: "请选择" },
    width: { default: "auto" },
    height: { default: "28px" },
    preIcon: { default: "" }
  },
  setup(t) {
    return (e, n) => {
      const s = resolveComponent("el-icon"), a = resolveComponent("ArrowDown");
      return openBlock(), createElementBlock("div", {
        class: "cric-arrow-btn",
        style: normalizeStyle({ width: e.width, height: e.height })
      }, [
        createBaseVNode("div", C, [
          e.$slots.preIcon || e.preIcon ? (openBlock(), createElementBlock("div", I, [
            renderSlot(e.$slots, "preIcon", {}, () => [
              e.preIcon ? (openBlock(), createBlock(s, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(e.preIcon)))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], true)
          ])) : createCommentVNode("", true),
          createBaseVNode("span", {
            class: "title",
            title: e.title
          }, toDisplayString(e.title), 9, j)
        ]),
        createVNode(s, {
          class: normalizeClass(["arrow", e.status ? "arrow_up_amt" : "arrow_down_amt"])
        }, {
          default: withCtx(() => [
            createVNode(a)
          ]),
          _: 1
        }, 8, ["class"])
      ], 4);
    };
  }
});
var v = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, a] of e)
    n[s] = a;
  return n;
};
var c = v(O, [["__scopeId", "data-v-6bf1c352"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
var S = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: c
}, Symbol.toStringTag, { value: "Module" }));
var x = { class: "cric-button" };
var A = defineComponent({
  name: "CButton"
});
var $ = defineComponent({
  ...A,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (e, n) => (openBlock(), createElementBlock("button", x, toDisplayString(e.text), 1));
  }
});
var r = v($, [["__scopeId", "data-v-20e14cc9"]]);
r.install = function(t) {
  return t.component(r.name, r), t;
};
var z = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: r
}, Symbol.toStringTag, { value: "Module" }));
var b = Object.assign({ "./components/ArrowBtn/index.ts": S, "./components/Button/index.ts": z });
var D = {};
var E = Object.keys(b).map((t) => {
  const e = b[t];
  return D[e.default.name] = e.default, e.default;
});
var N = function(t) {
  E.forEach((e) => {
    t.use(e);
  });
};
var M = {
  install: N
};
export {
  c as CArrowBtn,
  r as CButton,
  M as default
};
//# sourceMappingURL=cric-ui.js.map
