const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

if (bookingForm && formMessage) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName =
            document.getElementById("customer-name").value.trim();

        const selectedService =
            document.getElementById("service-choice").value;

        if (!customerName || !selectedService) {
            formMessage.textContent =
                "Please complete all required fields.";
            return;
        }

        formMessage.textContent =
            Thanks, ${ customerName } !Your ${ selectedService } request has been prepared.;

        bookingForm.reset();
    });
}