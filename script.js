document.addEventListener("DOMContentLoaded", function () {
    // Login Form Validation
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            if (!email.includes("@") || password.length < 6) {
                alert("Invalid email or password");
            } else {
                alert("Login Successful");
            }
        });
    }

    // Theme Toggle
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "Toggle Dark Mode";
    themeToggle.classList.add("btn");
    document.body.prepend(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        themeToggle.innerText = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
    });

    // Appointment Booking
    const timeSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"];
    const timeslotSelect = document.getElementById("timeslot");
    timeSlots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        timeslotSelect.appendChild(option);
    });
});