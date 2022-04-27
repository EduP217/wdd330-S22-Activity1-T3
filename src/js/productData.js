export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(this.convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    const product = products.find((item) => item.Id === id);
    return product;
  }
  convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Bad Response');
    }
  }
}
