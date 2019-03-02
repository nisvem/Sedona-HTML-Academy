var button_search = document.querySelector(".search-hotels-btn");
var form = document.querySelector(".search-hotels-form");
var arrival_date = document.querySelector("#arrival-date");
var departure_date = document.querySelector("#departure-date");

form.classList.remove("modal-show");

button_search.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-show");
  form.classList.remove("modal-error");
  button_search.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if(!arrival_date.value || !departure_date.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    button_search.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
    button_search.classList.add("modal-error");
  }
});
