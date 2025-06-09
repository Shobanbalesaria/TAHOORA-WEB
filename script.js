const body = document.body;

// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll reveal animations for sections
const revealElements = document.querySelectorAll('.hero, .bottles, #contact');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
const qaData = {
  start: {
    answer: "Welcome! Please choose a question below to know more about Tahoora.",
    options: [
      { id: "q1", text: "Why choose Tahoora?" },
      { id: "q2", text: "What flavors do you offer?" },
       { id: "q6", text: "What is the shelf life of your products?" },
      { id: "q5", text: "Do you take party or bulk orders?" },
      { id: "q8", text: "Can I get samples before ordering?" },
     
      { id: "q3", text: "Where are you located?" },
      { id: "q4", text: "How can I contact you?" },
      { id: "q7", text: "Can I visit your office?" },
      
    ]
  },

  q1: {
    answer: "Tahoora is a trusted soft drink brand by Janta Bottling, delivering fresh and quality beverages since 1995.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q2: {
    answer: "We offer Orange, Zeera Masala, Lime-Up, Lemon, Rediance, Big Ball, Blue Lagoon, and Limbu Soda flavors.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q3: {
    answer: "Our location is Navapur, Maharashtra.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q4: {
    answer: "You can call Sohel at 9423517100 or Suleman at 9423517111. WhatsApp is also available.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q5: {
    answer: "Yes, we accept party and bulk orders. Contact us for pricing and details.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q6: {
    answer: "Our drinks have a shelf life of 3 months from manufacturing date.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q7: {
    answer: "Yes, you can visit our office from 9 AM to 6 PM, Monday to Saturday.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  },

  q8: {
    answer: "Samples are available in packs of 24 bottles before bulk ordering.",
    options: [
      { id: "start", text: "Back to main questions" }
    ]
  }
};



const questionListDiv = document.getElementById("question-list");
const answerSection = document.getElementById("answer-section");
const nextOptionsDiv = document.getElementById("next-options");
const backButton = document.getElementById("back-button");

let historyStack = [];

function loadOptions(questionId) {
  if (questionId === "start") {
    // If going back to start, clear history and show main questions
    loadMainQuestions();
    return;
  }

  questionListDiv.style.display = "none";
  answerSection.style.display = "block";
  nextOptionsDiv.style.display = "block";
  backButton.style.display = historyStack.length > 0 ? "inline-block" : "none";

  const currentQA = qaData[questionId];

  answerSection.textContent = currentQA.answer;

  nextOptionsDiv.innerHTML = "";
  currentQA.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.addEventListener("click", () => {
      // Only push current question to history if next question is NOT 'start'
      if (opt.id !== "start") {
        historyStack.push(questionId);
      } else {
        // If going to start, clear history
        historyStack = [];
      }
      loadOptions(opt.id);
    });
    nextOptionsDiv.appendChild(btn);
  });
}

function loadMainQuestions() {
  questionListDiv.style.display = "block";
  answerSection.style.display = "none";
  nextOptionsDiv.style.display = "none";
  backButton.style.display = "none";
  historyStack = [];

  questionListDiv.innerHTML = "";
  qaData.start.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.addEventListener("click", () => {
      loadOptions(opt.id);
    });
    questionListDiv.appendChild(btn);
  });
}

backButton.addEventListener("click", () => {
  if (historyStack.length > 0) {
    const prevId = historyStack.pop();
    loadOptions(prevId);
  } else {
    loadMainQuestions();
  }
});

window.addEventListener("load", () => {
  loadMainQuestions();
});

  const toggle = document.getElementById('menuToggle');
  const dropdown = document.getElementById('dropdownNav');

  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
