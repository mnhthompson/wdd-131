

import { fetchQuestions } from './questions.js';

document.addEventListener("DOMContentLoaded", async () => {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const questions = await fetchQuestions();
    



    function generateQuiz() {
        let quizHTML = '';
        
        for (let i = 0; i < questions.length; i += 3) {
            quizHTML += `<section class="quiz-grid">`;
            
            for (let j = i; j < i + 3 && j < questions.length; j++) {
                quizHTML += `
                    <article class="quiz-card2">
                        <div class="question">${questions[j].question}</div>
                        ${questions[j].options.map((option, optionIndex) => `
                            <div class="quiz-card">
                                <div class="form__radio-group">
                                    <label>
                                        <input type="radio" id="radio${j}_${optionIndex}" class="form__radio-input" name="question${j}" value="${option}">
                                        <span class="form__radio-button"></span>
                                        <span>${option}</span>
                                    </label>
                                </div>
                            </div>
                        `).join('')}
                    </article>
                `;
            }
    
            quizHTML += `</section>`; // Close the row
        }
    
        quizContainer.innerHTML = quizHTML;
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