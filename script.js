function validateForm(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const statusMsg = document.getElementById('formStatus');

    if (!email.includes('@') || !email.includes('.')) {
        statusMsg.style.color = 'red';
        statusMsg.textContent = 'Пожалуйста, введите корректный email (пример: name@mail.ru)';
        return false;
    }

    statusMsg.style.color = 'green';
    statusMsg.textContent = 'Сообщение успешно отправлено!';
    
    document.getElementById('contactForm').reset();
    return false;
}