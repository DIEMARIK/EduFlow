// auth.js
document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();

            if (confirm("Вы уверены, что хотите выйти?")) {
                localStorage.removeItem("eduflowCurrentUser");
                window.location.href = "index.html";
            }
        });
    }
});