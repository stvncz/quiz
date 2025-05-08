export async function fetchQuestions() {
    try {
      const res = await fetch('https://opentdb.com/api.php?amount=3&type=multiple');
      if (!res.ok) throw new Error('Échec du chargement');
      const data = await res.json();
  
      // Transformation des données vers ton format : { question, choices[], answer }
      const formatted = data.results.map(q => {
        const allChoices = [...q.incorrect_answers, q.correct_answer];
        // Mélange les choix
        const shuffled = allChoices.sort(() => Math.random() - 0.5);
  
        return {
          question: q.question,
          choices: shuffled,
          answer: q.correct_answer
        };
      });
  
      return formatted;
    } catch (error) {
      console.error('Erreur dans fetchQuestions:', error);
      return [];
    }
  }
  