document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    var currentUrl = window.location.href;

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('current-page');
        }
    });
});

document.getElementById('quizButton').addEventListener('click', function() {
    document.getElementById("quizResults").innerHTML = "";
    document.getElementById("totalMarks").innerHTML = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("quizMessage").innerHTML = "";
    document.getElementsByClassName("results-container")[0].style.display = "none";

    alert('Quiz will start now! Please enter the number relevant to the answer.');

    var score = 0;
    const questions = [
        {
            question: "What is CreateMe?\n1. AI-based website builder\n2. Social media platform\n3. Online store",
            answer: "1"
        },
        {
            question: "What does CreateMe use to help you build a website quickly and efficiently?\n1. Human designers\n2. Artificial Intelligence\n3. Pre-made templates",
            answer: "2"
        },
        {
            question: "What is the primary purpose of an AI-based website builder?\n1. Entertainment\n2. Automation\n3. Education",
            answer: "2"
        },
        {
            question: "How many thumbnail images does the gallery page of CreateMe contain?\n1. 3\n2. 5\n3. 7",
            answer: "2"
        },
        {
            question: "How can you claim the reward after completing the quiz?\n1. Immediately\n2. Next purchase\n3. No reward",
            answer: "2"
        },
        {
            question: "When was the CreateMe website launched for the first time?\n1. 2005\n2. 2009\n3. 2019",
            answer: "3"
        },
        {
            question: "Who is the founder of CreateMe?\n1. Johnny Brown\n2. Jane Copper\n3. Calvin Parker",
            answer: "1"
        },
        {
            question: "What is the name of the company which owns CreateMe?\n1. Chambers & Company\n2. Nora Norton Inc.\n3. Apple Macintosh",
            answer: "2"
        },
        {
            question: "Where is the main branch of Nora Norton Inc. situated?\n1. California, USA\n2. Beijing, China\n3. New York, USA",
            answer: "1"
        },
        {
            question: "What year did Nora Norton Inc. get the ownership of CreateMe?\n1. 2020\n2. 2022\n3. 2024",
            answer: "3"
        }
    ];

    function simpleShuffle(array) {
        for (let i = 0; i < array.length; i++) {
            const randomQuestion = Math.floor(Math.random() * array.length);
            const temp = array[i];
            array[i] = array[randomQuestion];
            array[randomQuestion] = temp;
        }
    }

    simpleShuffle(questions);
    const selectedQuestions = questions.slice(0, 5);

    selectedQuestions.forEach((questionObj) => {
        let userInput;
        do {
            userInput = prompt(questionObj.question);
            if (userInput == null || userInput.trim() == "" || (userInput != "1" && userInput != "2" && userInput != "3")) {
                alert("Please enter a valid answer.");
            }
        } while (userInput == null || userInput.trim() == "" || (userInput != "1" && userInput != "2" && userInput != "3"));

        if (questionObj.answer == userInput.trim()) {
            score += 2;
        } else {
            score -= 1;
        }
    });

    document.getElementById("quizResults").innerHTML = "Quiz Results:";
    document.getElementById("totalMarks").innerHTML = "Total Marks: 10";
    document.getElementById("results").innerHTML = "Calculating...";

    setTimeout(function() {
        if (score > 0) {
            document.getElementById("results").innerHTML = "Marks Scored: " + score;
            document.getElementById("quizMessage").innerHTML = "You have earned " + score + " points, please claim the points in your next purchase.";
        } else {
            document.getElementById("results").innerHTML = "Marks Scored: 0";
            document.getElementById("quizMessage").innerHTML = "You have earned 0 points. Come back on your next purchase.";
        }

        document.getElementsByClassName("results-container")[0].style.display = "block";

        alert("Thank you so much for participating in the quiz!");

    
        setTimeout(function() {
            location.reload();
        }, 120000);

    }, 2000);
});
