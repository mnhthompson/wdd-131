export async function fetchQuestions() {
    const response = await fetch('questions.txt');
    const text = await response.text();
    return text.trim().split('\n').map(line => {
        const [question, optionsStr, answer] = line.split('|');
        const options = optionsStr.split(',');
        return { question, options, answer };
    });
}