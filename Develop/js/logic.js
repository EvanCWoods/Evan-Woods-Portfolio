// Add event listener to the project buttons
const projectButtons = document.getElementById("projects-list");
projectButtons.addEventListener("click", (event) => {
    const buttons = document.querySelectorAll("button");
    for (let i=0; i<buttons.length; i++) {
        if (buttons[i].classList.contains("project-button-click")) {
            buttons[i].classList.remove("project-button-click");
        }
    }
    const chosenProject = event.target.textContent;
    console.log(event.target);
    displayProject(chosenProject);
    event.target.classList.add("project-button-click");
});


// Function to handle displaying the correct project
const displayProject = (project) => {
    // Target DOM elements
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectCode = document.getElementById("project-code");
    const projectWebsite = document.getElementById("project-website");
    // Options to loop through containing all project information
    const projectInfo = [
        cocktailTranslator = {
            title: "Cocktail Translator",
            description: "The basic concept of this application is to allow the user to search for a cocktail and be provided with an ingredient list and directions. The user can then search for a language to translate the recipe to share with their ESL friends or family. This application utilizes the Cocktail DB API and the Fast Translate API from the Rapid API marketplace.",
            githubLink: "https://github.com/EvanCWoods/group-3-cocktails-in-any-language",
            websiteLink: "https://evancwoods.github.io/group-3-cocktails-in-any-language/"
        },
        codingQuiz = {
            title: "Coding Quiz",
            description: "A coding quiz to test your abilities on a set of questions that are randomly displayed, with time penalties for wrong answers and points for correct asnweres. Users can save their high scores in local storage and play again to try to beat it.",
            githubLink: "https://github.com/EvanCWoods/bootcamp-week4-homework",
            websiteLink: "https://evancwoods.github.io/bootcamp-week4-homework//Develop/index.html"
        },
        dayScheduler = {
            title: "Day Scheduler",
            description: "The page is a work day scheduler consisting of time slots from 9asm to 5pm, which allows users to write and store events in each time slot. The saved events will persist through page reloads using local storage.",
            githubLink: "https://github.com/EvanCWoods/bootcamp-week5-homewrok",
            websiteLink: "https://evancwoods.github.io/bootcamp-week5-homewrok/Develop/index.html"
        },
        mineSweeper = {
            title: "MineSweeper",
            description: "A clone of the  once popular game 'Mine Sweeper', this uses JavaScript to dynamically render the game and set the values under the tiles, and deal with game over events. This project still has room for growth in its code but is functional",
            githubLink: "https://github.com/EvanCWoods/mineSweeper",
            websiteLink: ""
        },
        turtleGraphics = {
            title: "Turtle Graphics",
            description: "A demonstration of the 'Turtle' visual library in python, this project creates a random number of firework like objects in randomly selected screen regions, each with a randomly selected color. This project can be tuned to other metrics but is currently only a demonstration of familiarity with the turtle library",
            githubLink: "https://github.com/EvanCWoods/Turtle-Visuals",
            websiteLink: ""
        },
        timeSeries = {
            title: "Time Series Forecasting",
            description: "Time Series forecasting of different data such as financial market data to demonstrate a familiarity with time series in TensorFlow and the ability to create complex models that can accurately predict future values that follow a linear time scale.",
            githubLink: "https://github.com/EvanCWoods/time-series",
            websiteLink: ""
        }
    ];
    for (let i=0; i<projectInfo.length; i++) {
        if (projectInfo[i].title == project) {
            projectTitle.textContent = projectInfo[i].title;
            projectDescription.textContent = projectInfo[i].description;
            projectCode.href = projectInfo[i].githubLink;
            projectWebsite.href = projectInfo[i].websiteLink;
        }
    };
}


// Add event listener to enquire button
const enquireButton = document.getElementById("enquire-button");
enquireButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("enquire");
    const enquireForm = document.getElementById("enquire-form-container");
    const header = document.getElementById("header");
    const main = document.getElementById("main");
    header.style.display = "none";
    main.style.display = "none";
    enquireForm.style.display = "flex";
});