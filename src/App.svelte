<script>
  import Quiz from "./components/Quiz.svelte";
  import DarkModeToggle from "./components/DarkModeToggle.svelte";

  let isDarkMode = false;

  function toggleDarkMode(value) {
    isDarkMode = value;
    document.body.classList.toggle("dark", isDarkMode);
  }
</script>

<main class="bg-white-50 dark:bg-zinc-800">
  <div class="max-w-2xl mx-auto px-4 pt-8">
    <h1 class="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-50">
      Quiz du jour
    </h1>
    <div class="flex justify-end mt-2">
      <DarkModeToggle {isDarkMode} {toggleDarkMode} />
    </div>
  </div>

  <div class="max-w-2xl mx-auto px-4 py-8">
    <Quiz />
  </div>
</main>
