
setInterval(updateVietnamTime, 1000);

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

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    
    const originalTheme = ``;

const darkTheme = `{
    margin: 0vh;
    font-family: 'Times New Roman', Times, serif;
}
.header-text {
    display: flex;
    align-items: center;
    justify-content: baseline;
    background-color: #1a1a1a;
    margin: 0vh;
    color: #FFCD00;
    text-align: center;
    border-radius: 0vh 0vh 3vh 3vh;
    border-bottom: solid #a0a0a0 0.5vh;
    box-shadow: 0vh 0.5vh 1vh;
    animation: slideLeftToRight 1.5s ease-in-out;
}
.header-text ul {
    list-style-type: none;
}
.header-text .inside-li {
    display: inline-block;
    align-items: space-between;
    background-color: #121212;
    margin-right: 5vh;
    border-bottom-right-radius: 3vh;
    border-top-left-radius: 3vh;
    color: #a0a0a0;
    border-right: solid #a0a0a0 1vh;
    border-bottom: solid #a0a0a0 0.5vh;
    padding: .5vh 6vh .5vh 6vh;
    font-size: 2vh;
    text-decoration: none;
}
.header-text .inside-li:hover{
    color: #FFCD00;
    border-right: solid #C8102E 1vh;
    border-bottom: solid #C8102E 0.5vh;
    background-color: #2a2a2a;
    border-color: #C8102E;
}
#date-time {
    margin-left: 20vh;
    color: #a0a0a0;
}
#date-time:hover{
    color: #FFCD00;
}
.theme-btn {
  position: absolute;
  top: .5vh;
  right: 5vh;
  transform: translateY(-50%);
  background-color: black;
  border-radius: 20px;
  border: none;
  padding: 3px 5px;
  margin-top: 1.9vh;
  color: #FFCD00;
  font-size: 14px;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.dark .theme-btn {
  color: #C8102E;
  background-color: rgba(0, 0, 0, 0.2);
}

.dark .theme-btn:hover {
  background-color: rgba(0, 0, 0, 0.3);
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
.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: auto;
    height: 70vh;
    margin-top: 2vh;
    background-color: #1a1a1a;
    animation: slideRightToLeft 1s ease-in-out;
}
#fd:hover {
    transform: translateY(-10px);
}
.child-content {
    margin-left: 4vh;
    width: 29vh;
    height: 70vh;
    color: #a0a0a0;
    background-color: #2a2a2a;
    border-radius: 7vh 0vh 7vh 0vh;
    border: solid #a0a0a0 0.5vh;
    padding: 2.5vh 8vh;
    box-shadow: 0px 0px 10px 0px;
    transition: transform 0.2s ease;
    font-size: 3vh;
}
.child-content h3 {
    text-align: center;
}
.child-content:hover {
    color: #FFCD00;
}
.food-img {
    border-radius: 0vh 7vh 0vh 7vh;
}
#food-header {
    text-align: center;
    font-size: 2.8vh;
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
.food-footer-img {
    margin-left: 40vh;
    margin-top: 13vh;
    width: 19vh;
    height: 23vh;
    color: #C8102E;
    border-radius: 5vh 0vh 5vh 5vh;
    box-shadow: 0vh 0.5vh 0vh 0vh;
    animation: bottomToCenterGrow 3s ease-in-out;
    transition: transform 0.2s ease;
}
.food-footer-img:hover {
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

/* Keep all animations unchanged */
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
