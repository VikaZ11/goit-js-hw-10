import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createCardMarkup } from './js/createCardMarkup';
import { createListMarkup } from './js/createListMarkup';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const countryWrapperRef = document.querySelector('.country-info');
const listWrapperRef = document.querySelector('.country-list');
const inputRef = document.querySelector('#search-box');

function onSearchInput(event) {
  const userCountry = (event.target.value).trim().toLowerCase();
  if (!userCountry) {
    return;
  }
  fetchCountries(userCountry)
    .then(data => {
      listWrapperRef.innerHTML = '';
      countryWrapperRef.innerHTML = '';
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if ((data.length <= 10) & (data.length >= 2)) {
        for (let i = 0; i < data.length; i++) {
          const { name, flags: { svg } } = data[i];
          const markup = createListMarkup(name, svg);
          listWrapperRef.insertAdjacentHTML('beforeend', markup);
        }
      } else {
        const markup = createCardMarkup(data);
        countryWrapperRef.innerHTML = markup;
      }
    })
    .catch(error => {
      listWrapperRef.innerHTML = '';
      countryWrapperRef.innerHTML = '';
      Notify.failure('Oops, there is no country with that name');
      console.log(error.message);
    });
}

inputRef.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));
