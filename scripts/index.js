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
      .image-container:hover{
    transform: translateY(-10px);
    }
    .image-container{
      display: flex;
      justify-content: right;
      align-items: center;
      display: flex;
      color: #e0e0e0;
      padding: 5px 70px;
      background-color: #1a1a1a;
      font-size: 15px;
      margin-top: 1vh;
      color: #a0a0a0;
      padding-right: 0vh;
      border-bottom-right-radius: 3vh;
      border-top-left-radius: 3vh;
      border-bottom: solid #a0a0a0 4px;
      box-shadow: 0px 0px 10px 0px;
      width: 117vh;
      height: 60vh;
      margin-right: 30vh;
      transition: transform 0.4 ease;
    }
    .right-div{
      display: flex;
      justify-content: right;
      align-items: center;
      color: #e0e0e0;
      background-color: #2a2a2a;
      padding: 5px 50px;
      font-size: 15px;
      border-top-left-radius: 30px;
      border-bottom-right-radius: 30px;
      border-right: solid #a0a0a0 4px;
      border-bottom: solid #a0a0a0 2px;
      box-shadow: 0px 0px 0px 0px;
      width: 50vh;
      height: 60vh;
      margin-left: 0.5vh;
      transition: transform 0.2s ease;
    }
    .shape-right:hover{
    transform: translateY(-10px);
    }
    .shape-center {
      display:inline-flex;
      align-items: center;
      width: 100vh;
      height: 10vh;
      color: #a0a0a0;
      border-radius: 0vh 0vh 10vh 10vh;
      background-color: #121212;
      margin-left: 40vh;
      margin-top: 0.9px;
      box-shadow: 0vh 0.5vh 0vh 0vh;
    }
    .shape-left {
      display: inline-flex;
      width: 12vh;
      height: 10vh;
      border-radius: 3vh 7vh 0vh 7vh;
      background-color: #121212;
      margin-left: 0.1vh;
      color: #C8102E;
      box-shadow: 1vh 0.5vh 0vh 0.5vh;
      animation: swingBottomToTop 2s ease-in-out;
      transition: transform 0.2s ease;
    }
    .shape-left:hover{
    transform: translateY(-10px);
    }
    .vietnam-man{
      margin-left: 40vh;
      margin-top: 13vh;
      width: 20vh;
      height: 25h;
      color: #C8102E;
      border-radius: 5vh 0vh 5vh 5vh;
      box-shadow: 0vh 0.5vh 0vh 0vh;
      animation: smallToStatic 2s ease-in-out;
      transition: transform 0.2s ease;
    }
    .vietnam-man:hover{
    transform: translateY(-10px);
    }
    .shape-right {
      display: inline-flex;
      width: 12vh;
      height: 10vh;
      border-radius: 7vh 3vh 7vh 0vh;
      background-color: #121212;
      margin-right: 0.1vh;
      color: #C8102E;
      box-shadow: 0.2vh 0.5vh 0vh 0.5vh;
      animation: swingBottomToTop 2s ease-in-out;
    }
    .read-more-bttn{
      background-color: #2a2a2a;
      border-bottom-right-radius: 3vh;
      border-top-left-radius: 3vh;
      color: #e0e0e0;
      border-right: solid #a0a0a0 1vh;
      border-bottom: solid #a0a0a0 0.5vh;
      font-family:'Times New Roman', Times, serif;
      padding: .5vh;
      font-size: 2vh;
      text-decoration: none;
    }
    .read-more-bttn :hover{
      color: #ffffff;
    }
    .right-sub-div {
      font-size: 15px;
    }
    .footer-div {
      margin-top: 2vh;
      background-color: #2a2a2a;
      width: auto;
      height: 25vh;
      border-radius: 5vh 5vh 0vh 0vh;
      display: grid;
      grid-template-columns: 0fr 2fr 0fr;
      grid-template-rows: auto;     
    }
    `;

