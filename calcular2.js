// Объявляем переменные
  const rangeInput = document.getElementById('range');
  const rangeValueSpan = document.getElementById('range-value');
  const currentLevelDisplay = document.querySelector('.current-level-display');

  const minusRangeBtn = document.getElementById('minus-range');
  const plusRangeBtn = document.getElementById('plus-range');

  // Функция для определения максимального уровня в зависимости от диапазона
  function getMaxLevel(rangeVal) {
    if (rangeVal >= 70) return 10;
    else if (rangeVal >= 60) return 8;
    else if (rangeVal >= 50) return 6;
    else if (rangeVal >= 40) return 4;
    else if (rangeVal >= 30) return 2;
    else return 1;
  }

  // Функция для отображения чисел, зависящих от текущего значения
  function getCustomNumber(value) {
    if (value >= 70) {
      return 90;
    } else if (value >= 60) {
      return 80;
    } else if (value >= 50) {
      return 70;
    } else if (value >= 40) {
      return 60;
    } else if (value >= 30) {
      return 50;
    } else if (value >= 20) {
      return 40;
    } else if (value >= 10) {
      return 20
    } else {
      return 1;
    }
  }

  // Общая функция обновления диапазона и связанных элементов
  function updateRange(val) {
    // Ограничение по границам
    const minVal = parseInt(rangeInput.min);
    const maxVal = parseInt(rangeInput.max);
    if (val < minVal) val = minVal;
    if (val > maxVal) val = maxVal;

    rangeInput.value = val;
    rangeValueSpan.textContent = val;
    // вместо прямого присваивания можно вызвать getCustomNumber
    currentLevelDisplay.textContent = getCustomNumber(val);

    // Обновляем уровни в секциях, если они превышают новый максимум
    document.querySelectorAll('.section').forEach(section => {
      const levelSpan = section.querySelector('.level-value');
      let currentLevel = parseInt(levelSpan.textContent);
      const maxLevel = getMaxLevel(val);
      if (currentLevel > maxLevel) {
        levelSpan.textContent = maxLevel;
      }
    });
  }

  // Обработчик для кнопки "-"
  minusRangeBtn.addEventListener('click', () => {
    let currentVal = parseInt(rangeInput.value);
    updateRange(currentVal - 10);
  });

  // Обработчик для кнопки "+"
  plusRangeBtn.addEventListener('click', () => {
    let currentVal = parseInt(rangeInput.value);
    updateRange(currentVal + 10);
  });

  // Обработчик для изменения слайдера
  rangeInput.addEventListener('input', () => {
    const val = +rangeInput.value;
    rangeValueSpan.textContent = val;
    // В этом месте вызываем getCustomNumber для отображения нужного числа
    currentLevelDisplay.textContent = getCustomNumber(val);
  });

  // Обработчики для стрелочек внутри секций
  document.querySelectorAll('.section').forEach(section => {
    const minusBtn = section.querySelector('.arrow.left');
    const plusBtn = section.querySelector('.arrow.right');
    const levelSpan = section.querySelector('.level-value');

    minusBtn.addEventListener('click', () => {
      let level = parseInt(levelSpan.textContent);
      if (level > 1) {
        level--;
        levelSpan.textContent = level;
      }
    });

    plusBtn.addEventListener('click', () => {
      let level = parseInt(levelSpan.textContent);
      const maxLevel = getMaxLevel(parseInt(rangeInput.value));
      if (level < maxLevel) {
        level++;
        levelSpan.textContent = level;
      }
    });
  });

  // Инициализация при загрузке страницы
// Изначально задаем отображение числа
  document.addEventListener('DOMContentLoaded', () => {
    const initialVal = parseInt(rangeInput.value);
    rangeValueSpan.textContent = initialVal;
    currentLevelDisplay.textContent = getCustomNumber(initialVal);
  });