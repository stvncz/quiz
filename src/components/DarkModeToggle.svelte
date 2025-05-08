<script>
  export let isDarkMode = false;
  export let toggleDarkMode;
</script>

<!-- DarkModeToggle.svelte -->
<div class="flex items-center gap-2">
  <!-- Soleil -->
  <span
    class="transition-transform duration-300 text-white-400 dark:text-white text-gray-700"
    class:rotate-[180deg]={!isDarkMode}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      fill="currentColor"
    >
      <path
        d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"
      />
    </svg>
  </span>

  <!-- Toggle -->
  <label class="relative inline-block w-10 h-5">
    <input
      type="checkbox"
      class="opacity-0 w-0 h-0 peer"
      checked={isDarkMode}
      on:change={() => toggleDarkMode(!isDarkMode)}
    />
    <span
      class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-full transition-colors duration-300 peer-checked:bg-blue-500"
    ></span>
    <span
      class="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"
    ></span>
  </label>

  <!-- Lune -->
  <span
    class="transition-transform duration-300 text-black dark:text-white-400 text-gray-700"
    class:translate-y-[-2px]={isDarkMode}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      fill="currentColor"
    >
      <path
        d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"
      />
    </svg>
  </span>
</div>
