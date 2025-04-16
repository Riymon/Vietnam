let user_input;

do {
    user_input = prompt("Please enter your name:");
} while (user_input === null || user_input.trim() === "");

displayUsername(user_input);

function displayUsername(user_input) {
    let name = document.getElementById('welcome');
    name.innerHTML = "Welcome " + user_input + " to the Land of Timeless Charm";
}
