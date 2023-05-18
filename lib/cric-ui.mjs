import { defineComponent as _, openBlock as s, createElementBlock as a, toDisplayString as r } from "vue";
const l = { class: "cric-button" }, d = _({
  name: "CButton"
}), f = /* @__PURE__ */ _({
  ...d,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (n, e) => (s(), a("button", l, r(n.text), 1));
  }
});
const u = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [p, i] of n)
    e[p] = i;
  return e;
}, c = /* @__PURE__ */ u(f, [["__scopeId", "data-v-e344ccc8"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
const m = { class: "cric-tag" }, x = _({
  name: "CTag"
}), g = /* @__PURE__ */ _({
  ...x,
  props: {
    text: { default: "标签" }
  },
  setup(t) {
    return (n, e) => (s(), a("span", m, r(n.text), 1));
  }
});
const o = /* @__PURE__ */ u(g, [["__scopeId", "data-v-c3db8f80"]]);
o.install = function(t) {
  return t.component(o.name, o), t;
};
const v = [c, o], y = function(t) {
  v.forEach((n) => {
    t.use(n);
  });
}, h = {
  install: y
};
export {
  c as Button,
  o as CTage,
  h as default
};
