import { addMonths } from "./node_modules/date-fns";
import renderMonth, { fixEventOverflow } from "./renderMonth";

let selectedMonth = Date.now();

document
  .querySelector("[data-next-month-btn]")
  .addEventListener("click", () => {
    selectedMonth = addMonths(selectedMonth, 1);
    renderMonth(selectedMonth);
  });

document
  .querySelector("[data-prev-month-btn]")
  .addEventListener("click", () => {
    selectedMonth = addMonths(selectedMonth, -1);
    renderMonth(selectedMonth);
  });

document.querySelector("[data-today-btn]").addEventListener("click", () => {
  selectedMonth = Date.now();
  renderMonth(selectedMonth);
});

let resizeTimeOut;
window.addEventListener("resize", () => {
  if (resizeTimeOut) clearTimeout(resizeTimeOut);
  resizeTimeOut = setTimeout(() => {
    document.querySelectorAll("[data-date-wrapper]").forEach(fixEventOverflow);
  }, 100);
});

renderMonth(selectedMonth);
