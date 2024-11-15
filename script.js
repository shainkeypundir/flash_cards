const faqData = [
  {
    question: "What services does this website offer?",
    answer:
      "We offer a range of web development and design services, including website building, UI/UX design, and content management.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team by visiting the Contact Us page or by emailing support@example.com.",
  },
  {
    question: "What is the estimated turnaround time for a project?",
    answer:
      "Turnaround times vary depending on the project's scope. For most projects, we aim to complete within 2-4 weeks.",
  },
  {
    question: "Do you offer customized design options?",
    answer:
      "Yes, we provide fully customized design solutions tailored to each client's needs and preferences.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use a range of technologies, including HTML, CSS, JavaScript, React, and Node.js, to build modern and responsive websites.",
  },
  {
    question: "Is there a refund policy for services?",
    answer:
      "Yes, we offer a partial refund policy depending on the project stage. Please review our Terms of Service for more details.",
  },
  {
    question: "How can I track the progress of my project?",
    answer:
      "We keep clients updated regularly through project management tools and provide status reports at key milestones.",
  },
  {
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we offer maintenance services to ensure your website stays up-to-date and secure post-launch.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely! We can refresh and redesign your existing website to make it more modern, functional, and responsive.",
  },
  {
    question: "How can I get started with your services?",
    answer:
      "Simply fill out our inquiry form on the homepage or email us at inquiries@example.com. Our team will get in touch within 1-2 business days.",
  },
];

// taking all the btns through dom manipulation that are to be used

const showAnswer= document.querySelector(".show-btn");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const answer = document.querySelector(".answer");
const question = document.querySelector(".question-content");
const hideAnswer = document.querySelector(".hide-btn");


//  showing the answer
showAnswer.addEventListener("click", function displayanswer() {
  answer.classList.toggle("hidden");
  question.classList.toggle("hidden");
  const qaData = faqData[curr_index];
  answer.innerHTML = `<h2>${qaData.answer}</h2>`;
  showAnswer.classList.toggle("hidden");
  hideAnswer.classList.toggle("hidden");
});

// hiding the answer
hideAnswer.addEventListener("click", function displayanswer() {
  answer.classList.toggle("hidden");
  question.classList.toggle("hidden");
  const qaData = faqData[curr_index];
  answer.innerHTML = `<h2>${qaData.answer}</h2>`;
  showAnswer.classList.toggle("hidden");
  hideAnswer.classList.toggle("hidden");
});


let curr_index = 0;

question.innerHTML = `<h2>${faqData[curr_index].question}</h2>`;

nextBtn.addEventListener("click", function nextQuestion() {
  if (curr_index < faqData.length - 1) {
    curr_index++;
  } else {
    curr_index = 0;
  }

  const qaData = faqData[curr_index];
  question.innerHTML = `<h2>${qaData.question}</h2>`;
});

previousBtn.addEventListener("click", function nextQuestion() {
  if (curr_index > 0) {
    curr_index--;
  } else {
    curr_index = faqData.length - 1;
  }

  const qaData = faqData[curr_index];
  question.innerHTML = `<h2>${qaData.question}</h2>`;
});


