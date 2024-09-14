function updateTimer() {
    const eventDate = new Date('2024-08-31T04:00:00');
    const now = new Date();
    const timeDiff = now - eventDate;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const displaySeconds = Math.abs(seconds % 60); // Ensure positive display
    const displayMinutes = Math.abs(minutes % 60);
    const displayHours = Math.abs(hours % 24);

    const timerElement = document.getElementById('timer');
    timerElement.textContent = `${days}d ${displayHours}h ${displayMinutes}m ${displaySeconds}s`;

    // Update the meta description with days
    document.querySelector('meta[property="og:description"]').setAttribute("content", `It's been ${days} days since you left...`);

    // Keep the timer in a somber, unchanging tone
    timerElement.style.color = '#999999';
}

function updateTimer2() {
    const eventDate = new Date('2024-10-27T16:35:00');
    const now = new Date();
    const timeDiff = eventDate - now; // Calculate difference for future date

    if (timeDiff < 0) {
        document.getElementById('timer2').textContent = "The date has passed!";
        return;
    }

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const displaySeconds = Math.abs(seconds % 60);
    const displayMinutes = Math.abs(minutes % 60);
    const displayHours = Math.abs(hours % 24);

    const timerElement = document.getElementById('timer2');
    timerElement.textContent = `${days}d ${displayHours}h ${displayMinutes}m ${displaySeconds}s`;

    // Update the meta description with days
    document.querySelector('meta[property="og:description"]').setAttribute("content2", `${days} Days left until we can be together AGAIN!!!`);

    // Keep the timer in a cheerful tone
    timerElement.style.color = '#00FF00'; // Change to a cheerful color
}

setInterval(updateTimer, 1000);
setInterval(updateTimer2, 1000); // Corrected to updateTimer2
