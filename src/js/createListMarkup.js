export function createListMarkup(name, svg) {
  return /*html*/ `<li class="country-list-card">
        <div class="country-header">
          <img src="${svg}" alt="Country flag" width="50px" />
          <h2 class="country-name-list">${name}</h2>
        </div>
      </li>`;
}
