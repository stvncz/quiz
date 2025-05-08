<script>
    export let isDarkMode = false;
    export let toggleDarkMode;
  </script>
  
  <div class="toggle-container">
    <!-- Lune -->
    <span class="icon moon" class:active={isDarkMode}>
      <!-- SVG Lune -->
    </span>
  
    <!-- Le Toggle -->
    <label class="switch">
      <input type="checkbox" checked={isDarkMode} on:change={() => toggleDarkMode(!isDarkMode)} />
      <span class="slider"></span>
    </label>
  
    <!-- Soleil -->
    <span class="icon sun" class:active={!isDarkMode}>
      <!-- SVG Soleil -->
    </span>
  </div>
  
  <style>
    .toggle-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60px;
      position: relative;
    }
  
    .icon {
      transition: all 0.3s ease;
      font-size: 24px;
      position: absolute;
      top: 0;
    }
  
    .icon.moon {
      transform: translateY(0);
    }
  
    .icon.sun {
      transform: rotate(0);
    }
  
    .icon.active.moon {
      transform: translateY(-15px);
    }
  
    .icon.active.sun {
      transform: rotate(180deg);
    }
  
    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
    }
  
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 50px;
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 12px;
      width: 12px;
      border-radius: 50px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
    }
  
    input:checked + .slider {
      background-color: #2196F3;
    }
  
    input:checked + .slider:before {
      transform: translateX(20px);
    }
  </style>
  