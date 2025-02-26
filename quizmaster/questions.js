

export async function fetchQuestions() {
    const response = await fetch('questions.txt');
    const text = await response.text();
    const allQuestions = text.trim().split('\n').map(line => {
        const [question, optionsStr, answer] = line.split('|');
        const options = optionsStr.split(',');
        return { question, options, answer };
    });
    
    // Select 10 random questions
    return allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
}