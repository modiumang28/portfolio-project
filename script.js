/* Smooth Scroll */

var anchorTags = document.querySelectorAll(".nav-menu a");
var targetClicked;
var instanceId;
for (let i = 0; i < anchorTags.length; i++) {
  anchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    targetClicked = document.getElementById(this.innerText.toLowerCase());
    instanceId = setInterval(scroll, 20);
  });
}
function scroll() {
  if (targetClicked.getBoundingClientRect().top <= 0) {
    clearInterval(instanceId);
    return;
  }
  window.scrollBy(0, 30);
}

/* Skill Bar */

var skillsContainer = document.querySelector("#container-skill");
var allSkills = document.querySelectorAll(".skill-individual>div");

window.addEventListener("scroll", checkScroll);

for (let skill of allSkills) {
  skill.style.width = 0 + "%";
}

function animateSkill(skill) {
  let skillWidth = skill.getAttribute("data-skill-width");
  let currWidth = 0;
  let instanceId = setInterval(function () {
    if (currWidth >= skillWidth) {
      clearInterval(instanceId);
      return;
    }
    currWidth += 1;
    skill.style.width = currWidth + "%";
  }, 5);
}

function checkScroll() {
  for (let skill of allSkills) {
    if (
      skill.style.width == "0%" &&
      skill.getBoundingClientRect().top <= window.innerHeight
    ) {
      animateSkill(skill);
    } else if (skill.getBoundingClientRect().top > window.innerHeight) {
      skill.style.width = 0 + "%";
    }
  }
}
