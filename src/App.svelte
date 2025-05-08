<script>
  import Quiz from "./components/Quiz.svelte";
  import DarkModeToggle from "./components/DarkModeToggle.svelte";

  let isDarkMode = false;

  function toggleDarkMode(value) {
    isDarkMode = value;
    document.body.classList.toggle('dark', isDarkMode);
  }
</script>

<main class="bg-white dark:bg-dark-bg text-black dark:text-dark-text">
  <div class="text-center">
    <h1 class="text-3xl font-bold text-center">Quiz du jour</h1>
    <DarkModeToggle {isDarkMode} {toggleDarkMode} />
  </div>

  <div class="max-w-2xl mx-auto px-4 py-8">
    <Quiz />
  </div>
</main>

<style>
  body {
    transition: background-color 0.3s, color 0.3s;
  }

  .bg-dark {
    background-color: #121212;
  }

  .text-dark {
    color: #eaeaea;
  }
</style>