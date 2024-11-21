// Функция для проверки, виден ли элемент
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate'); // Находим все элементы с классом "animate"
  
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect(); // Получаем размеры и позицию элемента относительно окна
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
      if (isVisible) {
        element.classList.add('visible'); // Добавляем класс "visible", чтобы элемент появился
      } else {
        element.classList.remove('visible'); // Убираем класс, если элемент ушел из видимости
      }
    });
  }
  
  // События: запуск при загрузке страницы и при прокрутке
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
console.log("Sript running")  
