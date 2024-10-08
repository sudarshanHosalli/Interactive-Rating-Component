const mainContainer = document.querySelector(".main");

mainContainer.innerHTML = `
<div class="rating-container">
<figure class="img-container">
        <img src="./images/icon-star.svg" alt="star" />
      </figure>

      <section class="text-container">
        <h1 class="heading">How did we do?</h1>
        <p class="para">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </section>

      <div class="btns-container">
        <div class="btns">
          <button class="btn">1</button>
          <button class="btn">2</button>
          <button class="btn">3</button>
          <button class="btn">4</button>
          <button class="btn">5</button>
        </div>
        <button class="submit-btn">Submit</button>
      </div>
</div>
`;

const buttons = document.querySelectorAll(".btn");
const ratingContainer = document.querySelector(".rating-container");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "hsl(213deg 19.05% 15.34%)";
      btn.style.color = "hsl(217, 12%, 63%)";
    });
    button.style.backgroundColor = "hsl(0, 0%, 100%)";
    button.style.color = "hsl(216, 12%, 8%)";
    localStorage.setItem("rating", button.textContent);
  });
});

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  const rating = localStorage.getItem("rating");

  console.log(rating === null);
  if (rating === null) {
    alert("Please select a rating before submitting.");
  } else {
    ratingContainer.className = "hideRatingContainer";
    renderThankYou(rating);
  }
});

function renderThankYou(rating) {
  mainContainer.innerHTML = `
      <section class="thank-you-section hide-thank-you-section">
        <figure>
          <img class="thank-you-img" src="./images/illustration-thank-you.svg" alt="thank-you" />
        </figure>

        <div class="tag" >
          <span>You selected ${rating} out of 5</span>
        </div>

        <div class="thank-you-text-container">
          <h1 class="heading">Thank you!</h1>
          <p class="para"> We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </div>
      </section>
`;
  localStorage.clear();
}
