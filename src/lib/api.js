export async function fetchQuestions() {
    try {
      const res = await fetch('https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=5');
      if (!res.ok) throw new Error('Échec du chargement');
      const data = await res.json();

       // Simule un délai de 2 secondes
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      // Transformation des données vers ton format : { question, choices[], answer }
      return data.quizzes.map((item, index) => ({
        question: item.question,
        choices: [...item.badAnswers, item.answer],
        answer: item.answer
      }));
    } catch (error) {
      console.error('Erreur dans fetchQuestions:', error);
      return [];
    }
  }
  