// Небольшой скрипт для учебной формы заявки.
document.addEventListener("DOMContentLoaded", function () {
    const tariffSelect = document.getElementById("tariff");
    const orderForm = document.getElementById("order-form");
    const formMessage = document.getElementById("form-message");

    // Если пользователь пришёл из каталога, выбираем нужный тариф автоматически.
    const params = new URLSearchParams(window.location.search);
    const selectedTariff = params.get("tariff");

    if (tariffSelect && selectedTariff) {
        tariffSelect.value = selectedTariff;
    }

    // Показываем подтверждение, но не отправляем форму на настоящий сервер.
    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (formMessage) {
                formMessage.textContent = "Заявка заполнена. Это учебная форма, данные не отправлены на сервер.";
            }
        });
    }
});
