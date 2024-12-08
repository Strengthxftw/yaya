// Function to show the birthday message, hide the button, play music, and create hearts
function showMessage() {
    const message = document.getElementById('birthdayMessage');
    const button = document.getElementById('birthdayButton');
    const birthdayImage = document.getElementById('birthdayImage');  // Get the image element
    const musicContainer = document.getElementById('backgroundMusic');  // Get the audio element
    const heartContainer = document.getElementById('heart-container');  // Get the heart container

    // Hide the button
    button.style.display = 'none';

    // Show the birthday message with animation
    message.classList.remove('hidden');
    message.classList.add('show');

    // Show the image after the message appears
    birthdayImage.style.display = 'block';

    // Show and play the music
    musicContainer.classList.remove('hidden');
    musicContainer.play();  // Start playing the music

    // Create falling hearts
    createHearts();
}

// Function to create falling hearts
function createHearts() {
    const heartContainer = document.getElementById('heart-container');
    for (let i = 0; i < 30; i++) {  // Create 30 hearts falling
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';  // Use the heart emoji

        // Randomize the horizontal position of the heart (between 0% and 100%)
        const leftPosition = Math.random() * 100; 
        heart.style.left = `${leftPosition}%`;

        // Randomize the animation delay for each heart to make them fall at different times
        heart.style.animationDelay = `${Math.random() * 5}s`;

        // Randomize the size of each heart to make them appear different
        const size = Math.random() * 2 + 1;  // Size between 1 and 3
        heart.style.fontSize = `${size}rem`;

        // Randomize the speed of the falling hearts (by changing the duration of the animation)
        const duration = Math.random() * 3 + 4;  // Duration between 4 and 7 seconds
        heart.style.animationDuration = `${duration}s`;

        // Append the heart to the heart container
        heartContainer.appendChild(heart);

        // Remove the heart after its animation ends
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);  // Hearts will disappear after the duration of their animation
    }
}

// Adding event listener to trigger the showMessage function when the button is clicked
document.getElementById('birthdayButton').addEventListener('click', showMessage);
