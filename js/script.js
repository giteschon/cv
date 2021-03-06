const MAX_SKILL = 10;
const SHOW_MORE = "more-text";

(function () {
    initTheme();
    initSkillsLevel();
   addActiveNavEvents();
})();



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reference: https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme(e) {
    if (e.target.checked) {
        setTheme('theme-light');
        document.getElementById("themeIcon").className = "fas fa-sun";
    } else {
        setTheme('theme-dark');
        document.getElementById("themeIcon").className = "fas fa-moon";
    }
}

function initTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme("theme-dark");
        document.getElementById("themeIcon").checked = true;
    }
    else {
        setTheme("theme-light");
        document.getElementById("themeIcon").checked = false;
    }
}

function initSkillsLevel() {
    let skillLevel = "SkillLevel";
    addSkill("java" + skillLevel, 5);
    addSkill("cSharp" + skillLevel, 5);
    addSkill("js" + skillLevel, 5);
    addSkill("ts" + skillLevel, 5);
    addSkill("html" + skillLevel, 5);
    addSkill("css" + skillLevel, 5);

}

function addActiveNavEvents() {
    let list = document.getElementById("menu").getElementsByTagName("li");   

    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function (event) {
            let el = event.target.parentNode;
            let siblings = el.parentNode.getElementsByTagName("li");
            console.log(siblings);
            for (let i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove("active");
            }
            el.classList.add("active");
        }
    };
}

function addSkill(id, level) {
    let el = document.getElementById(id);

    for (let i = 0; i < MAX_SKILL; i++) {
        let list = el.appendChild(document.createElement("div")).classList;
        list.add("skill-level");

        if (i < level) {
            list.add("checked");
        }
    }
}

function showMore(e) {
    let btn = e.srcElement;
    let list = btn.previousElementSibling.classList;

    if (list.contains(SHOW_MORE)) {
        list.remove(SHOW_MORE);
        console.log(btn);
        btn.innerHTML = "Show more";
    }
    else {
        list.add(SHOW_MORE);
        btn.innerHTML = "Show less";
    }
}

