import { defineComponent as n, openBlock as a, createElementBlock as r, toDisplayString as l } from "vue";
const f = { class: "cric-button" }, m = n({
  name: "CButton"
}), b = /* @__PURE__ */ n({
  ...m,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (e, o) => (a(), r("button", f, l(e.text), 1));
  }
});
const u = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [i, p] of e)
    o[i] = p;
  return o;
}, _ = /* @__PURE__ */ u(b, [["__scopeId", "data-v-e344ccc8"]]);
_.install = function(t) {
  return t.component(_.name, _), t;
};
const g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _
}, Symbol.toStringTag, { value: "Module" })), x = { class: "cric-icon" }, v = n({
  name: "CIcon"
}), y = /* @__PURE__ */ n({
  ...v,
  props: {
    text: { default: "icon-test" }
  },
  setup(t) {
    return (e, o) => (a(), r("span", x, l(e.text), 1));
  }
});
const c = /* @__PURE__ */ u(y, [["__scopeId", "data-v-9ec22a6d"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
const j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: c
}, Symbol.toStringTag, { value: "Module" })), O = { class: "cric-tag" }, h = n({
  name: "CTag"
}), C = /* @__PURE__ */ n({
  ...h,
  props: {
    text: { default: "标签" }
  },
  setup(t) {
    return (e, o) => (a(), r("span", O, l(e.text), 1));
  }
});
const s = /* @__PURE__ */ u(C, [["__scopeId", "data-v-c3db8f80"]]);
s.install = function(t) {
  return t.component(s.name, s), t;
};
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s
}, Symbol.toStringTag, { value: "Module" })), d = /* @__PURE__ */ Object.assign({ "./components/button/index.ts": g, "./components/icon/index.ts": j, "./components/tag/index.ts": S }), $ = {}, I = Object.keys(d).map((t) => {
  const e = d[t];
  return $[e.default.name] = e.default, e.default;
}), T = function(t) {
  I.forEach((e) => {
    t.use(e);
  });
}, B = {
  install: T
};
export {
  _ as CButton,
  c as CIcon,
  s as CTag,
  B as default
};
