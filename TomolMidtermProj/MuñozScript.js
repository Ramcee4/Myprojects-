

// This is all the function I use in my Midterm Project


const textArray = ["College student", "Family oriented"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();


let currentIndex = 0; // Start with the first image

// Function to show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.image .slide'); 
    const totalSlides = slides.length; 

    
    if (index >= totalSlides) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = totalSlides - 1; 
    }

    
    slides.forEach(slide => slide.classList.remove('active'));

    
    slides[currentIndex].classList.add('active');
}

window.addEventListener('load', function () {
    const card = document.querySelector('.card');
    
   
    card.style.opacity = 0;  
    card.style.visibility = 'visible'; 

    
    setTimeout(function () {
        card.style.transition = 'opacity 1s ease-out';  
        card.style.opacity = 1;  
    }, 100);  
});


// Function to go to the next slide
function nextSlide() {
    currentIndex++; 
    showSlide(currentIndex); 
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex--; 
    showSlide(currentIndex); 
}

// Optional: Automatically change slides every 3 seconds
setInterval(() => {
    nextSlide(); 
}, 3000); // 3000 milliseconds = 3 seconds

// Initial setup when the page loads
document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentIndex); 
});


// Function to open social media links
function openLink(url) {
    window.open(url, '_blank');
}

function showHome() {
    // Hide the portfolio container with a fade-out transition
    let portfolio = document.getElementById('portfolioContainer');
    portfolio.style.opacity = 0;
    portfolio.style.visibility = 'hidden';
    
    // Show the home section with a fade-in transition
    let home = document.querySelector('.card');
    home.style.opacity = 0;
    home.style.visibility = 'visible';
    
    setTimeout(() => {
        portfolio.style.display = 'none'; 
        home.style.display = 'flex'; 
        fadeIn(home);
        
    }, 300); // Wait for 300ms before hiding the portfolio container completely
}

function showPortfolio() {
    // Hide the home section with a fade-out transition
    let home = document.querySelector('.card');
    home.style.opacity = 0;
    home.style.visibility = 'hidden';
    
    // Show the portfolio container with a fade-in transition
    let portfolio = document.getElementById('portfolioContainer');
    portfolio.style.opacity = 0;
    portfolio.style.visibility = 'visible';
    
    setTimeout(() => {
        home.style.display = 'none'; // Set display to 'none' after the fade-out completes
        portfolio.style.display = 'block'; // Show portfolio section
        fadeIn(portfolio);
         
    }, 300); // Wait for 300ms before hiding the home section completely
}

// Helper function for fade-in effect
function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;
    let interval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 20); // Faster fade-in transition
}

// This is all the funtion I use in the function integration

function temperatureConverter() {
    let tempc = parseFloat(prompt("Enter temperature in degree Celsius"));

    if (isNaN(tempc)) {
        alert("Invalid input. Enter a number.");
    } else {
        let tempf = ((tempc * 1.8) + 32).toFixed(2);
        alert(`The temperature ${tempc}°C in Fahrenheit is ${tempf}°F.`);
    }
}


function longerWord() {
    let word1 = prompt("Enter first word").trim();
    let word2 = prompt("Enter second word").trim();

    // Check if inputs are empty
    if (!word1 || !word2) {
        alert("Please enter valid words.");
        return;
    }

    if (word1.length > word2.length) {
        alert(`The word "${word1}" is longer than "${word2}".`);
    } else if (word1.length < word2.length) {
        alert(`The word "${word2}" is longer than "${word1}".`);
    } else {
        alert(`The words "${word1}" and "${word2}" have equal length.`);
    }
}

function basicOperators() {
    let ope = prompt("Choose an operator:\nM - Multiplication or *\nD - Division or /\nA - Addition or +\nS - Subtraction or -")
        .toUpperCase()
        .trim();
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let ans;
    switch (ope) {
        case "M":
        case "*":
            ans = num1 * num2;
            ope = "*";
            break;
        case "D":
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            ans = num1 / num2;
            ope = "/";
            break;
        case "A":
        case "+":
            ans = num1 + num2;
            ope = "+";
            break;
        case "S":
        case "-":
            ans = num1 - num2;
            ope = "-";
            break;
        default:
            alert("No matching operator. Enter a valid one.");
            return;
    }
    
    alert(`The answer for (${num1} ${ope} ${num2}) is ${ans}.`);
}

function knowMyBirthstone() {
    let month = prompt("Good Day! Please enter your birth month: ").trim().toLowerCase();
    let birthstone = "";

    switch (month) {
        case "january": 
            birthstone = "Garnet";
            break;
        case "february":
            birthstone = "Amethyst";
            break;
        case "march": 
            birthstone = "Aquamarine";
            break;
        case "april": 
            birthstone = "Diamond";
            break;
        case "may": 
            birthstone = "Emerald";
            break;
        case "june": 
            birthstone = "Alexandrite & Pearl";
            break;
        case "july": 
            birthstone = "Ruby";
            break;
        case "august":
            birthstone = "Peridot";
            break;
        case "september":
            birthstone = "Sapphire";
            break;
        case "october": 
            birthstone = "Opal & Tourmaline";
            break;
        case "november": 
            birthstone = "Topaz & Citrine";
            break;
        case "december":
            birthstone = "Turquoise, Tanzanite & Zircon";
            break;
        default:
            alert("Invalid Input. Please enter a valid month.");
            return;
    }
    
    alert(`Hi, Sweety! Your birthstone is ${birthstone}.`);
}

function computeAcceleration() {
    let finalVelocity = parseFloat(prompt("Please enter the Final Velocity: "));
    let initialVelocity = parseFloat(prompt("Please enter the Initial Velocity: "));
    let change = parseFloat(prompt("Please enter the change in time (seconds): "));

    if (isNaN(finalVelocity) || isNaN(initialVelocity) || isNaN(change) || change === 0) {
        alert("Invalid input. Please enter valid numbers, and time change must not be zero.");
        return;
    }

    let acceleration = ((finalVelocity - initialVelocity) / change).toFixed(2);
    alert(`The acceleration value is: ${acceleration} m/s²`);
}



document.addEventListener("DOMContentLoaded", function () {
    goToSection('home');
});

document.addEventListener("DOMContentLoaded", function () {
    const favoritesModal = document.getElementById("favoritesModal");
    const artExhibit = document.getElementById("art-exhibit");
    const favoritesButton = document.querySelector(".btn[onclick='showFavorites()']");
    const portfolioButton = document.querySelector(".btn[onclick='showPortfolio()']");
    const homeButton = document.querySelector(".btn[onclick='showHome()']");
    const portfolioContainer = document.getElementById("portfolioContainer");
    const profileCard = document.querySelector(".card");

    let clickCount = 0; // Track the number of clicks

    function toggleFavorites() {
        clickCount++; // Increase count on each click

        // Ensure art exhibit is visible every time the button is clicked
        if (artExhibit) {
            artExhibit.style.display = "flex"; // Show the exhibit
            artExhibit.style.animation = "none"; // Reset animation
            void artExhibit.offsetWidth; // Force reflow
            artExhibit.style.animation = "fadeIn 1s ease-in-out"; // Reapply animation
        }

        // Hide portfolioContainer and profileCard every time Favorites is clicked
        if (portfolioContainer) portfolioContainer.style.display = "none";
        if (profileCard) profileCard.style.display = "none";

        if (favoritesModal) favoritesModal.classList.add("active");
    }

    if (favoritesButton) favoritesButton.addEventListener("click", toggleFavorites);
    if (portfolioButton) portfolioButton.addEventListener("click", () => {
        artExhibit.style.display = "none"; // Hide when switching sections
    });
    if (homeButton) homeButton.addEventListener("click", () => {
        artExhibit.style.display = "none"; // Hide when switching sections
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Select all heart buttons
    let heartButtons = document.querySelectorAll(".heart1");

    heartButtons.forEach((heart) => {
        heart.addEventListener("click", function () {
            // Toggle the 'liked' class to change both background and heart color
            this.classList.toggle("liked");

            // Find the heart icon inside the button
            let heartIcon = this.querySelector(".tosmall");

            if (this.classList.contains("liked")) {
                this.style.background = "red"; // Change background to red
                heartIcon.style.filter = "brightness(0) invert(1)"; // Make heart icon white
            } else {
                this.style.background = "white"; // Reset background to white
                heartIcon.style.filter = "none"; // Reset heart icon color
            }
        });
    });
});




// Function to add comments
function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    
    if (commentText !== "") {
        let commentList = button.parentElement.parentElement.querySelector(".comments-list");
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment); // Add the comment to the list
        commentInput.value = ""; // Clear the input
    }
}






