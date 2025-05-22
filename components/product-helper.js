function createServiceEntity(serviceId, name, description, price, duration, imageUrl) {
    const serviceContainer = document.createElement("div");
    serviceContainer.id = `${serviceId}`;
    serviceContainer.className = "service-card";

    const serviceImage = document.createElement("div");
    serviceImage.className = "service-image";
    serviceImage.style.backgroundImage = `url('${imageUrl}')`;

    const serviceContent = document.createElement("div");
    serviceContent.className = "service-content";

    const serviceName = document.createElement("h3");
    serviceName.className = "service-name";
    serviceName.textContent = name;

    const serviceMeta = document.createElement("div");
    serviceMeta.className = "service-meta";

    const servicePrice = document.createElement("span");
    servicePrice.className = "service-price";
    servicePrice.textContent = `${price} ₽`;

    const serviceDuration = document.createElement("span");
    serviceDuration.className = "service-duration";
    serviceDuration.innerHTML = `<i class="far fa-clock"></i> ${duration}`;

    const serviceDescription = document.createElement("p");
    serviceDescription.className = "service-description";
    serviceDescription.textContent = description;

    const serviceActions = document.createElement("div");
    serviceActions.className = "service-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "action-btn edit-btn";
    editBtn.innerHTML = '<i class="fas fa-edit"></i> Изменить';

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Удалить';

    // Собираем структуру
    serviceMeta.appendChild(servicePrice);
    serviceMeta.appendChild(serviceDuration);
    
    serviceActions.appendChild(editBtn);
    serviceActions.appendChild(deleteBtn);
    
    serviceContent.appendChild(serviceName);
    serviceContent.appendChild(serviceMeta);
    serviceContent.appendChild(serviceDescription);
    serviceContent.appendChild(serviceActions);
    
    serviceContainer.appendChild(serviceImage);
    serviceContainer.appendChild(serviceContent);

    return serviceContainer;
}