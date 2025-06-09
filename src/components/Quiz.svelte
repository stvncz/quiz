<script>
  import Question from "./Question.svelte";
  import Loader from "./Loader.svelte";
  import { onMount } from "svelte";
  import { fetchQuestions, validateAnswers } from "../lib/api.js";

  let questions = [];
  let userAnswers = new Map(); //key: questionId, value: selectedAnswer
  let isLoading = true;
  let submitted = false;
  let score = 0;
  let error = "";
  let result = null;

  onMount(async () => {
    try {
      questions = await fetchQuestions();
    } catch (err) {
      error = "Erreur lors du chargement des questions.";
      console.error(error, err);
    } finally {
      isLoading = false;
    }
  });

  function handleAnswerSelected(event) {
    const { index, selectedAnswer } = event.detail;
    const question = questions[index];
    question.userAnswer = selectedAnswer;
    userAnswers.set(question.questionId || question.id, selectedAnswer);
  }

  async function submit() {
    submitted = true;
    const answers = Array.from(userAnswers.entries()).map(
      ([questionId, answer]) => ({
        questionId,
        answer,
      })
    );

    try {
      const validation = await validateAnswers(answers);
      result = validation;
      score = validation.score;

      questions = questions.map((q) => {
        const result = validation.results.find(
          (r) => r.questionId === q.questionId
        );
        return result ? { ...q, ...result } : q;
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      error = "Erreur lors de la validation des réponses.";
      console.error(error, err);
    }
  }
</script>

{#if isLoading}
  <Loader message="Chargement des questions..." />
{:else}
  {#if submitted && result}
    <div class="score mb-4 p-4 bg-gray-100 rounded">
      <p class="text-xl text-center font-semibold">
        Votre score: {result.score} / {questions.length}
      </p>
    </div>
  {/if}
  <form on:submit|preventDefault={submit} class="space-y-6">
    {#each questions as question, index}
      <Question
        {question}
        {index}
        {submitted}
        on:answerSelected={handleAnswerSelected}
      />
    {/each}

    <div class="flex justify-center mt-8">
      <button
        type="submit"
        disabled={submitted}
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed transition-all"
      >
        Soumettre
      </button>
    </div>
  </form>
{/if}
