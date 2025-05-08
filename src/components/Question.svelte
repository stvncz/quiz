<script>
  import { createEventDispatcher } from 'svelte';

  export let question; // Contains the question, choices, and the correct answer
  export let index;
  export let submitted; // Boolean indicating if the quiz has been submitted

  let selectedAnswer = ""; // The answer chosen by the user

  const dispatch = createEventDispatcher();

  // Function to handle selection change
  function handleSelect(event) {
    selectedAnswer = event.target.value;
    dispatch('answerSelected', { index, selectedAnswer });
  }

  // Decodes HTML entities (quotes, apostrophes, etc.)
  function decodeHtml(str) {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }
</script>

<div class="question p-4 my-4 bg-white rounded shadow-md">
  <h2 class="text-2xl font-semibold">{decodeHtml(question.question)}</h2>

  <div class="choices mt-4">
    {#each question.choices as choice}
      <label class="block mb-2 rounded cursor-pointer transition-colors duration-300"
        class:bg-green-100={submitted && choice === question.answer}
        class:bg-red-100={submitted && selectedAnswer === choice && choice !== question.answer}>
        <input
          type="radio"
          name={`question${index}`}
          value={choice}
          bind:group={selectedAnswer}
          on:change={handleSelect}
          class="mr-2"
          disabled={submitted}
        />
        {decodeHtml(choice)}
      </label>
    {/each}
  </div>

  {#if submitted}
    <div class="feedback mt-4">
      {#if selectedAnswer === question.answer}
        <p class="text-green-600 font-semibold">✅ Correct answer!</p>
      {:else}
        <p class="text-red-600 font-semibold">
          ❌ Wrong answer.
        </p>
      {/if}
    </div>
  {/if}
</div>

<style>
  .question {
    max-width: 600px;
    margin: 0 auto;
  }
</style>