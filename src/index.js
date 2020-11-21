
import menuItems from './menu.json';
import menuTemplate from './menu.hbs';

const menu = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuItems);
const page = document.querySelector('body');
const themeCheckbox = document.querySelector('.theme-switch__toggle');
themeCheckbox.addEventListener('click', themeCheckboxToggle);

menu.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuItems){
  return menuTemplate(menuItems);
}



function themeCheckboxToggle  () {
  
  page.classList.toggle('dark-theme');
  
};