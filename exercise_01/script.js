// DOM Elements
const jokeButton = document.getElementById('jokeButton');
const setupElement = document.getElementById('setup');
const punchlineElement = document.getElementById('punchline');

// API URL
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

// Event Listeners
jokeButton.addEventListener('click', fetchJoke);

// Functions
async function fetchJoke() {
    // TODO Implement your solution here
    // Tips
    // 0. Access the JOKE_API_URL from your browser to understand the JSON response
    // 1. Use the fetch function to get the joke from the API
    // 2. Use the `await response.json()` to get the joke data
    // 3. Update the DOM with the joke data
} 