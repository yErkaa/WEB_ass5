// scripts/showTime.js

// Show current time
function showTime() {
    const timeElement = document.getElementById('timeDisplay');
    timeElement.textContent = new Date().toLocaleTimeString();
}

document.getElementById('timeBtn').addEventListener('click', showTime);
