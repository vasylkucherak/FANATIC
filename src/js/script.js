//! Імпорт і налаштування скриптів

//? Базові скрипти ====================================================================================================================================
import isWebP from "./modules/_isWebP.js"; //? Перевірка підтримки webp зображень
import touchOrCursor from "./modules/_touchOrCursor.js"; //? Перевірка на touch або mouse івенти

document.addEventListener('DOMContentLoaded', function() {

    isWebP();

    touchOrCursor();
});