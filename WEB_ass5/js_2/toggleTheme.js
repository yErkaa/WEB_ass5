// Toggle day/night theme
function toggleTheme() {
    document.body.classList.toggle('night-theme');
    document.body.classList.toggle('day-theme'); // Для корректного отображения нужной темы
}

// Применяем переключатель темы к карточкам при загрузке и нажатии кнопки
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Установка начальной темы
document.body.classList.add('day-theme'); // Изначально светлая тема
