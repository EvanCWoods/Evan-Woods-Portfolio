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
    const projectImage = document.getElementById("project-img");
    // Options to loop through containing all project information
    const projectInfo = [
        cocktailTranslator = {
            title: "Cocktail Translator",
            description: "The basic concept of this application is to allow the user to search for a cocktail and be provided with an ingredient list and directions. The user can then search for a language to translate the recipe to share with their ESL friends or family. This application utilizes the Cocktail DB API and the Fast Translate API from the Rapid API marketplace.",
            githubLink: "https://github.com/EvanCWoods/group-3-cocktails-in-any-language",
            websiteLink: "https://evancwoods.github.io/group-3-cocktails-in-any-language/",
            projectImage: "./Assets/project-images/cocktail.png"
        },
        codingQuiz = {
            title: "Coding Quiz",
            description: "A coding quiz to test your abilities on a set of questions that are randomly displayed, with time penalties for wrong answers and points for correct asnweres. Users can save their high scores in local storage and play again to try to beat it.",
            githubLink: "https://github.com/EvanCWoods/bootcamp-week4-homework",
            websiteLink: "https://evancwoods.github.io/bootcamp-week4-homework//Develop/index.html",
            projectImage: "./Assets/project-images/quiz.png"
        },
        dayScheduler = {
            title: "Day Scheduler",
            description: "The page is a work day scheduler consisting of time slots from 9asm to 5pm, which allows users to write and store events in each time slot. The saved events will persist through page reloads using local storage.",
            githubLink: "https://github.com/EvanCWoods/bootcamp-week5-homewrok",
            websiteLink: "https://evancwoods.github.io/bootcamp-week5-homewrok/Develop/index.html",
            projectImage: "./Assets/project-images/schedule.png"
        },
        mineSweeper = {
            title: "MineSweeper",
            description: "A clone of the  once popular game 'Mine Sweeper', this uses JavaScript to dynamically render the game and set the values under the tiles, and deal with game over events. This project still has room for growth in its code but is functional",
            githubLink: "https://github.com/EvanCWoods/mineSweeper",
            websiteLink: "https://evancwoods.github.io/mineSweeper/",
            projectImage: "./Assets/project-images/mine.png"
        },
        turtleGraphics = {
            title: "Turtle Graphics",
            description: "A demonstration of the 'Turtle' visual library in python, this project creates a random number of firework like objects in randomly selected screen regions, each with a randomly selected color. This project can be tuned to other metrics but is currently only a demonstration of familiarity with the turtle library",
            githubLink: "https://github.com/EvanCWoods/Turtle-Visuals",
            websiteLink: "",
            projectImage: "./Assets/project-images/turtle.png"
        },
        timeSeries = {
            title: "Mushroom Classifier",
            description: "A machine learning application that uses TensorFlow, Keras and other scientific libraries to classify mushrooms as either poisionous or not based on a set of visual charachteristics. This project achieves an accuracy of over 98% on unseen testing data and the model can be saved to be used in a website in the future.",
            githubLink: "https://github.com/EvanCWoods/Mushroom-Classifier",
            websiteLink: "",
            projectImage: "./Assets/project-images/mushroom.png"
        }
    ];
    for (let i=0; i<projectInfo.length; i++) {
        if (projectInfo[i].title == project) {
            projectTitle.textContent = projectInfo[i].title;
            projectDescription.textContent = projectInfo[i].description;
            projectCode.href = projectInfo[i].githubLink;
            projectImage.src = projectInfo[i].projectImage;
            projectWebsite.style.display = "inline-block";
            projectWebsite.style.width = "20%";
            if (projectInfo[i].websiteLink == "") {
                projectWebsite.style.display = "none"
            } else {
                projectWebsite.href = projectInfo[i].websiteLink;
            }
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



// Add Event listener for see projects button to scroll to them
const  seeProjectsButton = document.getElementById("see-projects-button");
seeProjectsButton.addEventListener("click", () => {
    const projects = document.getElementById("projects-list");
    projects.scrollIntoView({
        behavior: "smooth"
    });
});