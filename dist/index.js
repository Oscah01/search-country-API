"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {



const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };
  

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('morocco');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEMsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQSxvQ0FBb0MsVUFBVTtBQUM5QyxzQ0FBc0MsWUFBWTtBQUNsRCxpREFBaUQ7QUFDakQ7QUFDQSxzQkFBc0I7QUFDdEIsa0RBQWtELHVCQUF1QjtBQUN6RSxpREFBaUQsd0JBQXdCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNvdW50cnknKTtcbmNvbnN0IGNvdW50cmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXMnKTtcblxuY29uc3QgcmVuZGVyQ291bnRyeSA9IGZ1bmN0aW9uIChkYXRhLCBjbGFzc05hbWUgPSAnJykge1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPGFydGljbGUgY2xhc3M9XCJjb3VudHJ5ICR7Y2xhc3NOYW1lfVwiPlxuICAgICAgPGltZyBjbGFzcz1cImNvdW50cnlfX2ltZ1wiIHNyYz1cIiR7ZGF0YS5mbGFnfVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fZGF0YVwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJjb3VudHJ5X19uYW1lXCI+JHtkYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgPGg0IGNsYXNzPVwiY291bnRyeV9fcmVnaW9uXCI+JHtkYXRhLnJlZ2lvbn08L2g0PlxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX3Jvd1wiPjxzcGFuPvCfkas8L3NwYW4+JHsoXG4gICAgICAgICAgK2RhdGEucG9wdWxhdGlvbiAvIDEwMDAwMDBcbiAgICAgICAgKS50b0ZpeGVkKDEpfSBwZW9wbGU8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiY291bnRyeV9fcm93XCI+PHNwYW4+8J+Xo++4jzwvc3Bhbj4ke2RhdGEubGFuZ3VhZ2VzWzBdLm5hbWV9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX3Jvd1wiPjxzcGFuPvCfkrA8L3NwYW4+JHtkYXRhLmN1cnJlbmNpZXNbMF0ubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICAgYDtcbiAgICBjb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgICBjb3VudHJpZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gIH07XG4gIFxuXG5jb25zdCBnZXRDb3VudHJ5RGF0YSA9IGZ1bmN0aW9uIChjb3VudHJ5KSB7XG4gICAgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjIvbmFtZS8ke2NvdW50cnl9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiByZW5kZXJDb3VudHJ5KGRhdGFbMF0pKTtcbn07XG5cbmdldENvdW50cnlEYXRhKCdtb3JvY2NvJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9