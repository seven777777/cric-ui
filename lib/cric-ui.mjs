import { defineComponent as o, openBlock as r, createElementBlock as l, toDisplayString as u } from "vue";
const p = { class: "cric-button" }, f = o({
  name: "CButton"
}), m = /* @__PURE__ */ o({
  ...f,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (e, n) => (r(), l("button", p, u(e.text), 1));
  }
});
const i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, d] of e)
    n[a] = d;
  return n;
}, _ = /* @__PURE__ */ i(m, [["__scopeId", "data-v-e344ccc8"]]);
_.install = function(t) {
  return t.component(_.name, _), t;
};
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _
}, Symbol.toStringTag, { value: "Module" })), g = { class: "cric-icon" }, x = o({
  name: "CIcon"
}), v = /* @__PURE__ */ o({
  ...x,
  props: {
    text: { default: "icon-test" }
  },
  setup(t) {
    return (e, n) => (r(), l("span", g, u(e.text), 1));
  }
});
const c = /* @__PURE__ */ i(v, [["__scopeId", "data-v-9ec22a6d"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: c
}, Symbol.toStringTag, { value: "Module" })), O = { class: "cric-tag" }, j = o({
  name: "CTag"
}), h = /* @__PURE__ */ o({
  ...j,
  props: {
    text: { default: "标签" }
  },
  setup(t) {
    return (e, n) => (r(), l("span", O, u(e.text), 1));
  }
});
const s = /* @__PURE__ */ i(h, [["__scopeId", "data-v-c3db8f80"]]);
s.install = function(t) {
  return t.component(s.name, s), t;
};
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s
}, Symbol.toStringTag, { value: "Module" })), S = function(t) {
  const e = /* @__PURE__ */ Object.assign({ "./components/button/index.ts": b, "./components/icon/index.ts": y, "./components/tag/index.ts": C });
  Object.keys(e).forEach((n) => {
    const a = e[n];
    t.use(a.default);
  });
}, I = {
  install: S
};
export {
  I as default
};
