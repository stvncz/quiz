<script>
  import Question from "./Question.svelte";
  import Loader from "./Loader.svelte";
  import { onMount } from "svelte";
  import { fetchQuestions } from "../lib/api.js";

  let questions = [];
  let isLoading = true;
  let submitted = false;
  let score = 0;

  onMount(async () => {
    questions = await fetchQuestions();
    isLoading = false;
  });

  function handleSubmit() {
    submitted = true;
    score = computeScore();
  }

  function handleAnswerSelected(event) {
    const { index, selectedAnswer } = event.detail;
    questions[index].selectedAnswer = selectedAnswer;
  }

  function computeScore() {
    return questions.reduce((acc, q) => {
      return q.selectedAnswer === q.answer ? acc + 1 : acc;
    }, 0);
  }
</script>

{#if isLoading}
  <Loader message="Chargement des questions..." />
{:else}
  {#each questions as question, index}
    <div class="mb-4">
      <Question 
        {question}
        {index}
        {submitted}
        on:answerSelected={handleAnswerSelected} />
    </div>
  {/each}

  {#if submitted}
    <div class="score mt-4 p-4 bg-gray-100 rounded">
      <p class="text-xl font-semibold">Votre score: {score} / {questions.length}</p>
    </div>
  {/if}
{/if}

<div class="flex justify-center mt-8">
  <button
    on:click={handleSubmit}
    class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
  >
    Soumettre
  </button>
</div>
