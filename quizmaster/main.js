

import { fetchQuestions } from './questions.js';

document.addEventListener("DOMContentLoaded", async () => {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const questions = await fetchQuestions();
    
function generateQuiz(questions) {
    const quizContainer = document.getElementById('quiz'); // Ensure it's defined

    quizContainer.innerHTML = `
        <div class="quiz-grid">
            ${questions.map((q, index) => `
                <div class="quiz-card">
                    <div class="question">${q.question}</div>
                    <div class="options">
                        ${q.options.map((option, optionIndex) => `
                            <label class="option-label">
                                <input type="radio" id="radio${index}_${optionIndex}" class="form__radio-input" name="question${index}" value="${option}" required>
                                <span class="form__radio-button"></span>
                                <span>${option}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
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