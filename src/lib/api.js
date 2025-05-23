const API_BASE = import.meta.env.VITE_API_BASE || "/api";

/**
 * Fetches quiz questions from the API.
 *
 * @async
 * @function fetchQuestions
 * @returns {Promise<Array<{question: string, choices: string[], questionId: number}>>}
 *   Resolves to an array of question objects, each containing the question text, an array of choices, and a question ID.
 *   Returns an empty array if an error occurs.
 */
export async function fetchQuestions() {
  try {
    const res = await fetch(`${API_BASE}/quiz`);
    if (!res.ok) throw new Error("Échec du chargement");
    const data = await res.json();

    // Transformation des données vers ton format : { question, choices[], answer }
    return data.quiz.map((item) => ({
      question: item.question,
      choices: item.choices,
      questionId: item.id,
    }));
  } catch (error) {
    console.error("Erreur dans fetchQuestions:", error);
    return [];
  }
}

/**
 * Validates the user's answers by sending them to the API.
 *
 * @async
 * @function validateAnswers
 * @param {Array<{questionId: number, answer: string}>} answers - Array of user's answers, each with a question ID and the selected answer.
 * @returns {Promise<{score: number, total: number, results: Array}>|null}
 *   Resolves to an object containing the score, total number of questions, and detailed results.
 *   Returns null if an error occurs.
 */
export async function validateAnswers(answers) {
  try {
    const res = await fetch(`${API_BASE}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });

    if (!res.ok) {
      throw new Error(`Erreur serveur : ${res.status}`);
    }

    const data = await res.json();
    return data; // { score, total, results }
  } catch (error) {
    console.error("Erreur dans validateAnswers:", error);
    return null;
  }
}
