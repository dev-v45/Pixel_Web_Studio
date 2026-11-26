
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) {
      return;
    }

    const status = document.getElementById("formStatus");

    status.textContent =
      "Your form is ready! Enquiry submission is not connected yet.";

    enquiryForm.reset();
  });
}
