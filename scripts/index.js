document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    
    // Original theme CSS (empty as it's in your index.css)
    const originalTheme = ``;
    
    // Dark theme CSS
    const darkTheme = `
    *{
      margin: 0vh;
    }
    .header-text{
      background-color: #1a1a1a;
      margin: 0vh;
      color: #C8102E;
      border-bottom: solid #a0a0a0 0.5vh;
      box-shadow: 0vh 0.5vh 1vh;
      animation: slideLeftToRight 1s ease-in-out;
    }
    body{
      background-color: #121212;
    }
    .parent-container{
      background-color: #121212;
      padding: 5px 70px;
      color: #e0e0e0;
      display: flex;
      justify-content: right;
      align-items: center;
      margin-top: 3.5vh;
      animation: slideRightToLeft 1s ease-in-out;
    }
