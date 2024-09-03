function updateTimer() {
    const eventDate = new Date('2024-08-31T04:00:00');
    const now = new Date();
    const timeDiff = now - eventDate;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const displaySeconds = seconds % 60;
    const displayMinutes = minutes % 60;
    const displayHours = hours % 24;

    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${days}d ${displayHours}h ${displayMinutes}m ${displaySeconds}s`;

    // Update the meta description with days
    document.querySelector('meta[property="og:description"]').setAttribute("content", `It's been ${days} days since you left...`);

    // Keep the timer in a somber, unchanging tone
    timerElement.style.color = '#999999';
}

setInterval(updateTimer, 1000);
