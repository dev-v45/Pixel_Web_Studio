
// PIXELWEB STUDIO - SUPABASE CONNECTION

const SUPABASE_URL = "YOUR_PROJECT_URL";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const client = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) return;

    const status = document.getElementById("formStatus");
    const button = enquiryForm.querySelector(".submit-btn");

    button.disabled = true;
    button.textContent = "Sending...";

    const enquiry = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim() || null,
      business: document.getElementById("business").value.trim(),
      project: document.getElementById("project").value,
      message: document.getElementById("message").value.trim()
    };

    try {
      const { error } = await client
        .from("enquiries")
        .insert([enquiry]);

      if (error) throw error;

      status.textContent =
        "Thank you! Your enquiry has been received successfully.";

      enquiryForm.reset();

    } catch (error) {
      console.error("Enquiry submission failed:", error);

      status.textContent =
        "Sorry, we couldn't submit your enquiry. Please try again.";
    }

    button.disabled = false;
    button.innerHTML = 'Send my enquiry <span>↗</span>';
  });
}
