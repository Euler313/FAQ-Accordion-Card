let answers = Array.from(document.getElementsByClassName("answer"));
let questions = Array.from(document.getElementsByClassName("question"));
let arrows = Array.from(document.getElementsByClassName("arrow"));
answers.forEach(element => {
    element.remove();
});
for (let i = 0; i < answers.length; i++) {
    function clicking() {
        if (questions[i].style.fontWeight == "700") {
            answers[i].remove();
            questions[i].style.fontWeight = "300";
            arrows[i].classList.remove("reverse");
        } else {
            answers.forEach(element => {
                element.remove();
            });
            questions.forEach(element => {
                element.style.fontWeight = "300";
            });
            arrows.forEach(element => {
                element.classList.remove("reverse");
            });
            questions[i].style.fontWeight = "700";
            questions[i].style.color = "hsl(238, 29%, 16%)";
            questions[i].parentElement.appendChild(answers[i]);
            arrows[i].classList.add("reverse");
        };
    };
    questions[i].firstElementChild.onclick = function() {clicking()};
    arrows[i].onclick = function() {clicking()};
};