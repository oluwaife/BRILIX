const form = document.getElementById("contactForm");
const alertBox = document.getElementById("successAlert");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // built-in HTML5 check
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
  } else {
    form.classList.remove("was-validated");
    alertBox.classList.remove("d-none");
    form.reset();

    setTimeout(() => {
      alertBox.classList.add("d-none");
    }, 5000);
  }
});

//  PRICING
function filterPricing() {
  const input = document.getElementById("pricingSearch").value.toLowerCase();
  const cards = document.querySelectorAll(".pricing-card");

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    const wrapper = card.closest(".col-md-4") || card; // fallback if no column wrapper
    wrapper.style.display = text.includes(input) ? "block" : "none";
  });
}
