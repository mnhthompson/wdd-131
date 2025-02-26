

export async function fetchQuestions() {
    const response = await fetch('questions.txt');
    const text = await response.text();
    const allQuestions = text.trim().split('\n').map(line => {
        const [question, optionsStr, answer] = line.split('|');
        const options = optionsStr.split(',');
        return { question, options, answer };
    });

    // Get the list of previously selected questions from localStorage
    const selectedQuestions = JSON.parse(localStorage.getItem('selectedQuestions')) || [];
    
    // Filter out already selected questions
    const availableQuestions = allQuestions.filter(q => !selectedQuestions.some(selected => selected.question === q.question));

    // If no questions are available, return an empty array
    if (availableQuestions.length === 0) {
        console.log("No more questions to select.");
        return [];
    }

    // Select 10 random questions from the available ones
    const selected = availableQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);

    // Update the selected questions in localStorage
    const updatedSelectedQuestions = [...selectedQuestions, ...selected];
    localStorage.setItem('selectedQuestions', JSON.stringify(updatedSelectedQuestions));

    return selected;
}