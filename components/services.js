document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок редактирования
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceId = serviceCard.getAttribute('data-id');
            const serviceName = serviceCard.querySelector('.service-name').textContent;
            
            // Переход на страницу редактирования с передачей ID
            window.location.href = `edit-service.html?id=${serviceId}&name=${encodeURIComponent(serviceName)}`;
        });
    });

    // Обработчики для кнопок удаления
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceId = serviceCard.getAttribute('data-id');
            const serviceName = serviceCard.querySelector('.service-name').textContent;
            
            if (confirm(`Вы уверены, что хотите удалить услугу "${serviceName}"?`)) {
                // Здесь будет запрос на удаление услуги
                fetch(`/api/services/${serviceId}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        serviceCard.style.opacity = '0';
                        setTimeout(() => {
                            serviceCard.remove();
                            showNotification(`Услуга "${serviceName}" успешно удалена`, 'success');
                        }, 300);
                    } else {
                        throw new Error('Ошибка удаления');
                    }
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    showNotification('Не удалось удалить услугу', 'error');
                });
            }
        });
    });

    // Функция для показа уведомлений
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
});