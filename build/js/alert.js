var c = (l, t, e) =>
  new Promise((n, o) => {
    var i = (r) => {
        try {
          s(e.next(r));
        } catch (a) {
          o(a);
        }
      },
      d = (r) => {
        try {
          s(e.throw(r));
        } catch (a) {
          o(a);
        }
      },
      s = (r) => (r.done ? n(r.value) : Promise.resolve(r.value).then(i, d));
    s((e = e.apply(l, t)).next());
  });
export default class u {
  constructor(t) {
    (this.alerts = []), (this.dataSource = t);
  }
  init() {
    return c(this, null, function* () {
      (this.alerts = yield this.dataSource.getData()),
        console.table(this.alerts),
        document
          .querySelector('main')
          .insertAdjacentHTML('afterbegin', this.renderHTMLElements());
    });
  }
  renderHTMLElements() {
    let t = '<section class="alert-list">';
    return (
      this.alerts.forEach((e) => {
        t += `<p style="background-color: ${e.background}; color: ${e.color};">${e.message}</p>`;
      }),
      (t += '</section>'),
      t
    );
  }
}
