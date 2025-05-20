
const form = document.querySelector("form");
const loading = document.getElementById("loading");

form.addEventListener("submit", function () {
    loading.style.display = "block";
});

function showModal(message) {
    document.getElementById('modal-msg').innerText = message;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("erro") === "1") {
        showModal("Usuário ou senha inválidos");
    }
};
