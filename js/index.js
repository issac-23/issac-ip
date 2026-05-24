// Create and append footer with current year
const footer = document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Issac Kwan Jan Ip ${thisYear}`;
footer.appendChild(copyright);
document.body.appendChild(footer);

const skills = ["Java", "Python", "Git", "HTML/CSS", "React"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement("li");
    skillItem.innerText = skills[i];
    skillsList.appendChild(skillItem);
}