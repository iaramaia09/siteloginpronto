let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("título").innerHTML = "bem vindo, " + usuario.login
function voltar() {
    window.location.href = "../index.html"
}