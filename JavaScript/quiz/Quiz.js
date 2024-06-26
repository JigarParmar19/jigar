let questions = [
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: ["script name='script.js'>", "script src='script.js'>", "script href='script.js'>", "script ref='script.js'>"],
      correct: 2
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
      correct: 3
    },
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      options: ["interface", "throws", "program", "short"],
      correct: 3
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
      correct: 3
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
      correct: 2
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: ["variable carName;", "var carName;", "v carName;", "string carName;"],
      correct: 2
    },
    {
      question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
      code: "<p id='demo'>This is a demonstration.</p>",
      options: ["document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementByName('demo').innerHTML = 'Hello World!';", "document.getElementByTagName('p').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';"],
      correct: 1
    },
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
      correct: 1
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "call function myFunction()", "myFunction()", "Call.myFunction()"],
      correct: 3
    },
    {
      question: "How can you add a comment in JavaScript?",
      options: ["'This is a comment", "<!--This is a comment-->", "//This is a comment", "*This is a comment*"],
      correct: 3
    },
    {
      question: "What will the following code return: Boolean(10 > 9)?",
      options: ["false", "true", "NaN", "undefined"],
      correct: 2
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["*", "x", "=", "-"],
      correct: 3
    },
    {
      question: "What is the correct JavaScript syntax to write 'Hello World'?",
      options: ["('Hello World')", "document.write('Hello World')", "response.write('Hello World')", "('Hello World').document.write"],
      correct: 2
    },
    {
      question: "Which method can be used to find the length of a string?",
      options: ["length()", "getLength()", "strlen()", "length"],
      correct: 4
    },
    {
      question: "Which built-in method sorts the elements of an array?",
      options: ["changeOrder(order)", "order()", "sort()", "arrange()"],
      correct: 3
    },
    {
      question: "Which of the following is a way to create an object in JavaScript?",
      options: ["var obj = {};", "var obj = ();", "var obj = [];", "var obj = <>;"],
      correct: 1
    },
    {
      question: "How do you round the number 7.25 to the nearest integer?",
      options: ["Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)", "round(7.25)"],
      correct: 2
    },
    {
      question: "How can you detect the client’s browser name?",
      options: ["navigator.appName", "browser.name", "client.navName", "window.browser"],
      correct: 1
    },
    { 
      question: "Which JavaScript method is used to access an HTML element by id?",
      options: ["getElementById()", "getElement(id)", "getElementByID()", "getIdElement()"],
      correct: 1
    }
  ];

function displayQuestion(questionObj, index) {
    let question = document.createElement("h2");
    question.innerHTML = `${index + 1}. ${questionObj.question}`;

    let div = document.createElement("div");
    div.appendChild(question);

    questionObj.options.forEach((option, idx) => {
        let button = document.createElement("button");
        button.innerHTML = option;
        button.addEventListener("click", () => {
            button.style.backgroundColor = (idx + 1 === questionObj.correct) ? "green" : "red";
        });
        div.appendChild(button);
    });

    document.getElementById("quiz").appendChild(div);
}

function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correct = parseInt(document.getElementById('correct').value);

    const newQuestion = {
        question: question,
        options: [option1, option2, option3, option4],
        correct: correct
    };

    questions.push(newQuestion);
    displayQuestion(newQuestion, questions.length - 1);
    document.getElementById('quizForm').reset();
}
questions.forEach((question, index) => {
    displayQuestion(question, index);
});