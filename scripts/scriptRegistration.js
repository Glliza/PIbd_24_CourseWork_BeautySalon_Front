document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Получаем значения полей
        const fio = document.getElementById("fio").value.trim();
        const birthDate = document.getElementById("birthDate").value;
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        
        // Сбрасываем сообщения об ошибках
        resetErrorMessages();
        
        // Валидация
        let isValid = true;
        
        if (!fio) {
            showError("fio-error", "Введите ФИО");
            isValid = false;
        }
        
        if (!birthDate) {
            showError("birthDate-error", "Введите дату рождения");
            isValid = false;
        }
        
        if (!phone) {
            showError("phone-error", "Введите номер телефона");
            isValid = false;
        } else if (!/^\+7\d{10}$/.test(phone)) {
            showError("phone-error", "Номер должен начинаться с +7 и содержать 11 цифр");
            isValid = false;
        }
        
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
        } else if (password.length < 6) {
            showError("password-error", "Пароль должен содержать минимум 6 символов");
            isValid = false;
        }
        
        if (!isValid) return;
        
        const userData = {
            fio,
            birthDate,
            phone,
            email,
            password
        };

        console.log("Данные пользователя:", userData);

        try {
            // Здесь будет запрос к API
            // const response = await fetch('/api/register', { 
            //     method: 'POST', 
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(userData) 
            // });
            
            alert("Вы успешно зарегистрировались!");
            // window.location.href = "MainMenu.html";
        } catch (err) {
            console.error("Ошибка регистрации:", err);
            alert("Не удалось отправить данные. Попробуйте позже.");
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