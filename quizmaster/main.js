

import { fetchQuestions } from './questions.js';

document.addEventListener("DOMContentLoaded", async () => {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const questions = await fetchQuestions();
    
    function generateQuiz() {
        quizContainer.innerHTML = questions.map((q, index) => `
            <div class="question">${q.question}</div>
            ${q.options.map((option, optionIndex) => `
                <div class="form__radio-group">
                    <label for="radio$${optionIndex}">
                        <input type="radio" id="radio$${optionIndex}" class="form__radio-input" name="question${index}" value="${option}">
                        <span class="form__radio-button"></span>
                        <span>${option}</span>
                    </label>
                </div>
            `).join('')}
        `).join('');
    }
    
    function showResults() {
        const answers = questions.map((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            return selected ? selected.value === q.answer : false;
        });
        
        const score = answers.filter(correct => correct).length;
        resultsContainer.textContent = `You got ${score} out of ${questions.length} correct!`;
    }
    
    submitButton.addEventListener("click", showResults);
    generateQuiz();
});