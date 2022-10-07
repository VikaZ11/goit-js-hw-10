export function createCardMarkup([
  {
    name,
    capital,
    population,
    flags: { svg },
    languages,
  },
]) {
  return /*html*/ `<div class='country-info-card'>
  <div class="country-header">
   <img src="${svg}" alt="Country flag" width="50px" />
      <h2 class="country-name">${name}</h2></div>
      <ul class="country-info-list list">
        <li class="country-info-item">
          <p>Capital: ${capital}</p>
        </li>
        <li class="country-info-item">
          <p>Population: ${population}</p>
        </li>
        <li class="country-info-item">
          <p>Languages: ${languages[0].name}</p>
        </li>
      </ul></div>`;
}
