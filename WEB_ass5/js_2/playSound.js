function playSound() {
    const audio = new Audio('sounds/sound.mp3'); // Замените на путь к вашему звуковому файлу
    audio.play()
}

document.getElementById('playSoundBtn').addEventListener('click', playSound);
document.getElementById('playSoundBtnn').addEventListener('click', playSound);