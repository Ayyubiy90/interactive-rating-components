document.addEventListener("DOMContentLoaded", () => {
  const ratingCard = document.getElementById("rating-card");
  const thankYouCard = document.getElementById("thank-you-card");
  const submitButton = document.getElementById("submit-btn");
  const ratingButtons = document.querySelectorAll(".rating-btn");
  const ratingResult = document.getElementById("rating-result");

  let selectedRating = 0;

  // Add click event listeners to rating buttons
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'selected' class from all buttons
      ratingButtons.forEach((btn) => btn.classList.remove("selected"));

      // Add 'selected' class to clicked button
      button.classList.add("selected");

      // Update selectedRating
      selectedRating = button.dataset.rating;
    });
  });

  // Add click event listener to submit button
  submitButton.addEventListener("click", () => {
    if (selectedRating > 0) {
      // Update rating result text
      ratingResult.textContent = selectedRating;

      // Hide rating card and show thank you card
      ratingCard.classList.add("hidden");
      thankYouCard.classList.remove("hidden");
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
