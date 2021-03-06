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
    displayProject(chosenProject);
    event.target.classList.add("project-button-click");
});



// Function to handle displaying the correct project
const displayProject = (project) => {
    // Target DOM elements
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");
    const projectTechnologies = document.getElementById("project-technologies");
    const projectCode = document.getElementById("project-code");
    const projectWebsite = document.getElementById("project-website");
    // Options to loop through containing all project information
    const projectInfo = [
        cocktailTranslator = {
            title: "Cocktail Translator",
            description: "The basic concept of this application is to allow the user to search for a cocktail and be provided with an ingredient list and directions. The user can then search for a language to translate the recipe to share with their ESL friends or family. This application utilizes the Cocktail DB API and the Fast Translate API from the Rapid API marketplace.",
            technologies: ["JavaScript (fetch)", "HTML", "CSS"],
            githubLink: "https://github.com/EvanCWoods/group-3-cocktails-in-any-language",
            websiteLink: "https://evancwoods.github.io/group-3-cocktails-in-any-language/",
        },
        codingQuiz = {
            title: "Team Profile Generator",
            description: "This project allows users to create a webpage form the command line that displays team members, with different roles in the company.",
            technologies: ["JavaScript", "Node js", "fs (file system)"],
            githubLink: "https://github.com/EvanCWoods/Team-Profile-Generator",
            websiteLink: "",
        },
        dayScheduler = {
            title: "Day Scheduler",
            description: "The page is a work day scheduler consisting of time slots from 9asm to 5pm, which allows users to write and store events in each time slot. The saved events will persist through page reloads using local storage.",
            technologies: ["JavaScript", "HTML", "CSS"],
            githubLink: "https://github.com/EvanCWoods/bootcamp-week5-homewrok",
            websiteLink: "https://evancwoods.github.io/bootcamp-week5-homewrok/Develop/index.html",
        },
        mineSweeper = {
            title: "MineSweeper",
            description: "A clone of the  once popular game 'Mine Sweeper', this uses JavaScript to dynamically render the game and set the values under the tiles, and deal with game over events. This project still has room for growth in its code but is functional",
            technologies: ["JavaScript", "HTML", "CSS"],
            githubLink: "https://github.com/EvanCWoods/mineSweeper",
            websiteLink: "https://evancwoods.github.io/mineSweeper/",
        },
        turtleGraphics = {
            title: "Turtle Graphics",
            description: "A demonstration of the 'Turtle' visual library in python, this project creates a random number of firework like objects in randomly selected screen regions, each with a randomly selected color. This project can be tuned to other metrics but is currently only a demonstration of familiarity with the turtle library",
            technologies: ["Python", "Turtle"],
            githubLink: "https://github.com/EvanCWoods/Turtle-Visuals",
            websiteLink: "",
        },
        timeSeries = {
            title: "Mushroom Classifier",
            description: "A machine learning application that uses TensorFlow, Keras and other scientific libraries to classify mushrooms as either poisionous or not based on a set of visual charachteristics. This project achieves an accuracy of over 98% on unseen testing data and the model can be saved to be used in a website in the future.",
            technologies: ["Python", "Tensorflow", "Keras", "Matplotlib", "Pandas & NumPy"],
            githubLink: "https://github.com/EvanCWoods/Mushroom-Classifier",
            websiteLink: "",
        }
    ];
    for (let i=0; i<projectInfo.length; i++) {
        if (projectInfo[i].title == project) {
            projectTitle.textContent = projectInfo[i].title;
            projectTechnologies.innerHTML = "";
            for (let j=0; j<projectInfo[i].technologies.length; j++) {
                const techItem = document.createElement("li");
                techItem.className = "tech-item";
                techItem.textContent = projectInfo[i].technologies[j];
                projectTechnologies.appendChild(techItem);
            }
            projectDescription.textContent = projectInfo[i].description;
            projectCode.href = projectInfo[i].githubLink;
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


const fName = document.getElementById("enquiry-f-name");
const lName = document.getElementById("enquiry-l-name");
const email = document.getElementById("enquiry-email");
const explaination = document.getElementById("enquiry-explaination");


const submitEnquiry = document.getElementById("enquiry-submit");
submitEnquiry.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fName: fName.value,
            lName: lName.value,
            email: email.value,
            explaination: explaination.value
        })
    });
});
