function submitContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    alert("Obrigado por entrar em contato, " + name + ". Responderemos em breve!");

    return false; // Simulação de envio, para evitar o envio real
}
