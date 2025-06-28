// Questions array (IMPORTANT PART)
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    answer: "HTML"
  },
  {
    question: "Who is the PM of India (2024)?",
    options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Manmohan Singh"],
    answer: "Narendra Modi"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan"
  },
  {
    question: "Who was the first woman to go into space?",
    options: ["Valentina Tereshkova", "Kalpana Chawla", "Sally Ride", "Sunita Williams"],
    answer: "Valentina Tereshkova"
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "In which year did India win its first Cricket World Cup?",
    options: ["1975", "1983", "1987", "1992"],
    answer: "1983"
  },
  {
    question: "Who is the author of the Indian National Anthem?",
    options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Femur", "Stapes", "Ulna", "Tibia"],
    answer: "Stapes"
  },
  {
    question: "Which country hosted the 2020 Summer Olympics?",
    options: ["China", "Brazil", "Japan", "France"],
    answer: "Japan"
  },
];

// Variables for tracking quiz
let currentQ = 0;
let score = 0;

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

// Load question on screen
function loadQuestion() {
  const current = questions[currentQ];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => checkAnswer(option));
    optionsEl.appendChild(btn);
  });
}

// Check answer on click
function checkAnswer(selected) {
  const correct = questions[currentQ].answer;
  if (selected === correct) {
    score++;
  }
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show final result
function showResult() {
  document.getElementById("quiz-box").classList.add("hide");
  resultBox.classList.remove("hide");
  
scoreText.textContent= score;
}
// Button click to move to next
nextBtn.addEventListener("click", () => {
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Initial load
loadQuestion();