var h = (c, t, n) =>
  new Promise((s, r) => {
    var d = (o) => {
        try {
          e(n.next(o));
        } catch (a) {
          r(a);
        }
      },
      i = (o) => {
        try {
          e(n.throw(o));
        } catch (a) {
          r(a);
        }
      },
      e = (o) => (o.done ? s(o.value) : Promise.resolve(o.value).then(d, i));
    e((n = n.apply(c, t)).next());
  });
export default class u {
  constructor(t) {
    (this.category = t), (this.path = `../json/${this.category}.json`);
  }
  getData() {
    return fetch(this.path)
      .then(this.convertToJson)
      .then((t) => t);
  }
  findProductById(t) {
    return h(this, null, function* () {
      const n = yield this.getData(),
        s = n.find((r) => r.Id === t);
      return s;
    });
  }
  convertToJson(t) {
    if (t.ok) return t.json();
    throw new Error('Bad Response');
  }
}
