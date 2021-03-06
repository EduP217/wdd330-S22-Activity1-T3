import ExternalServices from './ExternalServices.js';
import ProductList from './productList.js';
import { getParams, loadHeaderFooter } from './utils.js';

loadHeaderFooter();

const category = getParams('category');

document.getElementById('product-category').innerHTML = category;
const data = new ExternalServices();
const listElement = document.querySelector('.product-list');
const list = new ProductList(category, data, listElement);
list.init();

document.querySelector('#sorting').addEventListener('change', (event) => {
  const value = event.target.value;
  if (value === 'sortByPrice') {
    list.sortByPrice();
  } else if (value === 'sortByName') {
    list.init();
  }
});
