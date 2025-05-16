const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

export async function fetchQuestions() {
    try {
      const res = await fetch(`${API_BASE}/api/quiz`);
      if (!res.ok) throw new Error('Échec du chargement');
      const data = await res.json();
  
      // Transformation des données vers ton format : { question, choices[], answer }
      return data.quiz.map(item => ({
        question: item.question,
        choices: item.choices,
        id: item.id
       }));
    } catch (error) {
      console.error('Erreur dans fetchQuestions:', error);
      return [];
    }
  }
  