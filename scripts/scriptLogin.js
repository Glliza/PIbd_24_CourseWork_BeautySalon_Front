document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Получаем значения полей
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        
        // Сбрасываем сообщения об ошибках
        resetErrorMessages();
        
        // Валидация
        let isValid = true;
        
        if (!email) {
            showError("email-error", "Введите email");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError("email-error", "Введите корректный email");
            isValid = false;
        }
        
        if (!password) {
            showError("password-error", "Введите пароль");
            isValid = false;
        }
        
        if (!isValid) return;
        
        const loginData = {
            email,
            password
        };

        console.log("Данные для входа:", loginData);

        try {
            // Здесь будет запрос к API
            // const response = await fetch('/api/login', { 
            //     method: 'POST', 
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(loginData) 
            // });
            
            // if (!response.ok) {
            //     throw new Error('Ошибка авторизации');
            // }
            
            alert("Вы успешно вошли в систему!");
            // window.location.href = "MainMenu.html";
        } catch (err) {
            console.error("Ошибка авторизации:", err);
            alert("Неверные данные или ошибка сети");
        }
    });
    
    function showError(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
    }
    
    function resetErrorMessages() {
        const errorElements = document.querySelectorAll(".error-message");
        errorElements.forEach(element => {
            element.textContent = "";
        });
    }
});