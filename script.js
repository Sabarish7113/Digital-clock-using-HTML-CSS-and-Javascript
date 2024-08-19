function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.innerHTML = `
        <span class="hour">${hours}</span>:
        <span class="minute">${minutes}</span>:
        <span class="second">${seconds}</span>
    `;
}

setInterval(updateClock, 1000);
updateClock(); // initial call to display clock immediately
