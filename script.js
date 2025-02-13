document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector(".hearts-container");
    const changeMessageBtn = document.getElementById("changeMessageBtn");
    const messageElement = document.getElementById("message");

    // Messages array
    const messages = [
        "To My  Special Someone, I don’t know if you realize just how amazing you are, but I see it in every little thing you do. Your kindness, your laughter, and just the way you light up a room—it all makes the world a little better. I don’t need Valentine’s Day as an excuse to appreciate you, but today, I just want to say… you’re special to me. More than you know. Happy Valentine’s Day! Jakes💖",
       
    ];

    window.onload = () => changeMessage();

    let currentMessageIndex = 0;

    // Function to update the message
    function changeMessage() {
        // Update message content based on currentMessageIndex
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messageElement.textContent = messages[currentMessageIndex];
    }

    // Event listener for button click
    changeMessageBtn.addEventListener("click", changeMessage);

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
