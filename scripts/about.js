
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


    