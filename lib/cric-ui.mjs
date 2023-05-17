import { defineComponent as _, openBlock as s, createElementBlock as a, toDisplayString as r } from "vue";
const i = { class: "cric-button" }, l = _({
  name: "CButton"
}), f = /* @__PURE__ */ _({
  ...l,
  props: {
    text: { default: "cric-button" }
  },
  setup(t) {
    return (n, e) => (s(), a("button", i, r(n.text), 1));
  }
});
const u = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [d, p] of n)
    e[d] = p;
  return e;
}, o = /* @__PURE__ */ u(f, [["__scopeId", "data-v-2fde8413"]]);
o.install = function(t) {
  return t.component(o.name, o), t;
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
const c = /* @__PURE__ */ u(g, [["__scopeId", "data-v-c3db8f80"]]);
c.install = function(t) {
  return t.component(c.name, c), t;
};
const v = [o, c], y = function(t) {
  v.forEach((n) => {
    t.use(n);
  });
}, h = {
  install: y
};
export {
  o as Button,
  c as CTage,
  h as default
};
