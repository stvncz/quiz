<script>
  import { createEventDispatcher } from "svelte";

  export let question; // Contains the question, choices, and the correct answer
  export let index;
  export let submitted; // Boolean indicating if the quiz has been submitted

  let selectedAnswer = ""; // The answer chosen by the user

  const dispatch = createEventDispatcher();

  // Function to handle selection change
  function handleSelect(event) {
    selectedAnswer = event.target.value;
    dispatch("answerSelected", { index, selectedAnswer });
  }

  // Decodes HTML entities (quotes, apostrophes, etc.)
  function decodeHtml(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }
</script>

<div
  class="question p-4 my-4 bg-white-50 dark:bg-zinc-500 rounded shadow-md text-gray-700 dark:text-zinc-200"
>
  <h2 class="text-2xl font-semibold">{decodeHtml(question.question)}</h2>

  <div class="choices mt-4">
    {#each question.choices as choice}
      <label
        class="block mb-2 rounded cursor-pointer"
        class:text-green-500={submitted && choice === question.answer}
        class:font-bold={(submitted && choice === question.answer) || submitted &&
          selectedAnswer === choice &&
          choice !== question.answer}
        class:text-red-500={submitted &&
          selectedAnswer === choice &&
          choice !== question.answer}
      >
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
</div>

<style>
  .question {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
