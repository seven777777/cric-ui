import { defineComponent as l, resolveComponent as i, openBlock as o, createElementBlock as _, normalizeStyle as w, createElementVNode as u, renderSlot as y, createBlock as d, withCtx as p, resolveDynamicComponent as g, createCommentVNode as f, toDisplayString as h, createVNode as m, normalizeClass as B } from "vue";
const C = { class: "title-box" }, I = {
  key: 0,
  class: "pre-arrow-box"
}, j = ["title"], k = l({
  name: "CArrowBtn"
}), O = /* @__PURE__ */ l({
  ...k,
  props: {
    status: { type: Boolean, default: !1 },
    title: { default: "请选择" },
    width: { default: "auto" },
    height: { default: "28px" },
    preIcon: { default: "" }
  },
  setup(t) {
    return (e, n) => {
      const s = i("el-icon"), a = i("ArrowDown");
      return o(), _("div", {
        class: "cric-arrow-btn",
        style: w({ width: e.width, height: e.height })
      }, [
        u("div", C, [
          e.$slots.preIcon || e.preIcon ? (o(), _("div", I, [
            y(e.$slots, "preIcon", {}, () => [
              e.preIcon ? (o(), d(s, { key: 0 }, {
                default: p(() => [
                  (o(), d(g(e.preIcon)))
                ]),
                _: 1
              })) : f("", !0)
            ], !0)
          ])) : f("", !0),
          u("span", {
            class: "title",
            title: e.title
          }, h(e.title), 9, j)
        ]),
        m(s, {
          class: B(["arrow", e.status ? "arrow_up_amt" : "arrow_down_amt"])
        }, {
          default: p(() => [
            m(a)
          ]),
          _: 1
        }, 8, ["class"])
      ], 4);
    };
  }
});
const v = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, a] of e)
    n[s] = a;
  return n;
}, c = /* @__PURE__ */ v(O, [["__scopeId", "data-v-6bf1c352"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: c
}, Symbol.toStringTag, { value: "Module" })), x = { class: "cric-button" }, A = l({
  name: "CButton"
}), $ = /* @__PURE__ */ l({
  ...A,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (e, n) => (o(), _("button", x, h(e.text), 1));
  }
});
const r = /* @__PURE__ */ v($, [["__scopeId", "data-v-20e14cc9"]]);
r.install = function(t) {
  return t.component(r.name, r), t;
};
const z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r
}, Symbol.toStringTag, { value: "Module" })), b = /* @__PURE__ */ Object.assign({ "./components/ArrowBtn/index.ts": S, "./components/Button/index.ts": z }), D = {}, E = Object.keys(b).map((t) => {
  const e = b[t];
  return D[e.default.name] = e.default, e.default;
}), N = function(t) {
  E.forEach((e) => {
    t.use(e);
  });
}, M = {
  install: N
};
export {
  c as CArrowBtn,
  r as CButton,
  M as default
};
