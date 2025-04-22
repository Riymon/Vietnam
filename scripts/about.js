     document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
        
        // Original theme CSS (empty as it's in your index.css)
        const originalTheme = ``;

    const darkTheme = `
    * {
        margin: 0vh;
        font-family: 'Times New Roman', Times, serif;
    }
    .header-text {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #2a2a2a;
        margin: 0vh;
        color: #C8102E;
        text-align: center;
        border-radius: 0vh 0vh 3vh 3vh;
        border-bottom: solid #a0a0a0 0.5vh;
        box-shadow: 0vh 0.5vh 1vh;
        animation: slideLeftToRight 1.5s ease-in-out;
    }
    .header-text h2 {
        display: inline-block;
        align-items: space-between;
        background-color: #121212;
        margin-left: 80vh;
        border-bottom-right-radius: 3vh;
        border-top-left-radius: 3vh;
        color: #a0a0a0;
        border-right: solid #a0a0a0 1vh;
        border-bottom: solid #a0a0a0 0.5vh;
        padding: .5vh 7vh .5vh 7vh;
        font-size: 2vh;
    }
    .header-text h2:hover {
        background-color: #2a2a2a;
        border-color: #C8102E;
        color: #FFCD00;
    }
    body {
        background-color: #121212;
    }
    .background-cover-div {
        display: flex;
        align-items: center;
        margin-top: 1vh;
        border-bottom: solid #a0a0a0 .5vh;
    }
    .img-bcg {
        border-radius: 2vh 0vh 2vh 0vh;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        height: 70vh;
        background-color: #1a1a1a;
        animation: slideRightToLeft 1s ease-in-out;
    }
    .left-content {
        margin-left: 4vh;
        color: #a0a0a0;
        width: 90vh;
        height: 50vh;
        background-color: #2a2a2a;
        border-radius: 7vh 0vh 7vh 0vh;
        padding: 2.5vh 10vh;
        border: solid #a0a0a0 0.5vh;
        box-shadow: 0px 0px 10px 0px;
    }
    .left-content:hover {
    color: #FFCD00;
    }
    .right-content {
        width: 90vh;
        margin-left: 10vh;
        margin-right: 4vh;
        height: 50vh;
        color: #a0a0a0;
        background-color: #2a2a2a;
        border-radius: 7vh 0vh 7vh 0vh;
        border: solid #a0a0a0 0.5vh;
        padding: 2.5vh 10vh;
        box-shadow: 0px 0px 10px 0px;
    }
    .right-content h3 {
        text-align: center;
        color: #C8102E;
    }
    .right-content:hover {
        color: #FFCD00;
    }
    .href {
        background-color: #121212;
        border-bottom-right-radius: 3vh;
        border-top-left-radius: 3vh;
        color: #a0a0a0;
        border-right: solid #a0a0a0 1vh;
        border-bottom: solid #a0a0a0 0.5vh;
        padding: .5vh 7vh .5vh 7vh;
        font-size: 2vh;
        margin-left: 25vh;
        text-decoration: none;
    }   
    .href:hover {
        color: #FFCD00;
         border-right: solid #C8102E 1vh;
        border-bottom: solid #C8102E 0.5vh;
    }
    body h1 {
        text-align: center;
        color: #FFCD00;
    }
    .shape-center {
        display: inline-flex;
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
        transition: transform 0.2s ease;
    }
    .shape-left:hover {
        transform: translateY(-10px);
    }
    .building-img {
        margin-left: 40vh;
        margin-top: 13vh;
        width: 18vh;
        height: 23vh;
        color: #C8102E;
        border-radius: 5vh 0vh 5vh 5vh;
        box-shadow: 0vh 0.5vh 0vh 0vh;
        animation: bottomToCenterGrow 3s ease-in-out;
        transition: transform 0.2s ease;
    }
    .building-img:hover {
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
        transition: transform 0.2s ease;
    }
    .shape-right:hover {
        transform: translateY(-10px);
    }
    .footer-div {
        margin-top: 2vh;
        background-color: #2a2a2a;
        width: auto;
        height: 23vh;
        border-radius: 5vh 5vh 0vh 0vh;
        display: grid;
        grid-template-columns: 0fr 2fr 0fr;
        grid-template-rows: auto;     
    }

    /* Keep all your original animations */
    @keyframes slideLeftToRight {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
    }
    @keyframes slideRightToLeft {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    @keyframes bottomToCenterGrow {
        from { transform: translateY(100%) scale(15); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
    }
    `;
    
    let isDarkMode = false;

    // Toggle between themes
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            styleElement.textContent = darkTheme;
            themeToggle.textContent = '☀️ Light Mode';
            document.body.classList.add('dark-mode');
        } else {
            styleElement.textContent = originalTheme;
            themeToggle.textContent = '🌙 Dark Mode';
            document.body.classList.remove('dark-mode');
        }
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        themeToggle.click(); 
    }
});
    
    let user_input;

    do {
        user_input = prompt("Please enter your name:");
    } while (user_input === null || user_input.trim() === "");

    displayUsername(user_input);
    setInterval(updateVietnamTime, 1000);


    function displayUsername(user_input) {
        let name = document.getElementById('welcome');
        name.innerHTML = "Welcome " + user_input + " to the Land of Timeless Charm";
    }

    function updateVietnamTime() {
        const vietnamDateTime = new Date().toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        const timeElement = document.getElementById("date-time");
        timeElement.innerHTML = `Vietnam Time: ${vietnamDateTime}`;
    }


    