// Create and append footer with current year
const footer = document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Issac Kwan Jan Ip ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);

// Skills injection
const skills = ["Java", "Python", "Git", "HTML/CSS", "React"];
// Matches the lowercase 'skills' id in the HTML
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement("li");
    skillItem.innerText = skills[i];
    skillsList.appendChild(skillItem);
}

// Lesson 8 Form Functionality
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a><span> ' + usersMessage + '</span>';

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.style.marginLeft = '10px';

    removeButton.addEventListener('click', function(event) {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

// Lesson 9 Fetch API
const githubUsername = "issac-ip";
const url = `https://api.github.com/users/${githubUsername}/repos`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(repositories => {
        console.log(repositories);
        
        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector("ul");

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        
        const projectSection = document.getElementById("Projects");
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Sorry, we could not load the projects at this time.";
        projectSection.appendChild(errorMessage);
    });