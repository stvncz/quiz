<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let question; // { questionId, question, choices, userAnswer, correctAnswer, isCorrect }
  export let index; 
  export let submitted = false; // Boolean indicating if the quiz has been submitted

  let selectedAnswer = ""; // The answer selected by the user
  const dispatch = createEventDispatcher();

  onMount(() => {
    if (question.userAnswer) {
      selectedAnswer = question.userAnswer;
    }
  });

  function handleSelect(event) {
    selectedAnswer = event.target.value;
    dispatch("answerSelected", {
      index,
      selectedAnswer
    });
  }

  // Decodes HTML entities (quotes, apostrophes, etc.)
  function decodeHtml(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  function isCorrectChoice(choice) {
    return submitted && choice === question.correctAnswer;
  }

  function isIncorrectChoice(choice) {
    return submitted && choice === selectedAnswer && choice !== question.correctAnswer;
  }
</script>

<div
  class="question p-4 my-4 bg-white-50 dark:bg-zinc-500 rounded shadow-md text-gray-700 dark:text-zinc-200"
>
  <h2 class="text-2xl font-semibold">{decodeHtml(question.question)}</h2>

  <div class="choices mt-4">
    {#each question.choices as choice}
      <label
        class="block mb-2 rounded transition-all cursor-pointer"
        class:text-green-600={isCorrectChoice(choice)}
        class:text-red-600={isIncorrectChoice(choice)}
        class:font-bold={isCorrectChoice(choice) || isIncorrectChoice(choice)}
        class:border-green-500={isCorrectChoice(choice)}
        class:border-red-500={isIncorrectChoice(choice)}
        class:border-gray-300={!submitted}
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
