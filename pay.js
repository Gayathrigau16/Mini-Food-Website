let quantity = 5;
const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const payBtn = document.getElementById("payBtn");

increaseBtn.addEventListener("click", () => {
  quantity++;
  updateQuantity();
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
});

payBtn.addEventListener("click", () => {
  payBtn.innerHTML = `<span class="spinner"></span> Processing...`;
  payBtn.disabled = true;

  setTimeout(() => {
    alert(`Order placed for ${quantity} Kings Burgers`);
    payBtn.innerHTML = "Proceed to Pay";
    payBtn.disabled = false;
  }, 2000);
});

function updateQuantity() {
  quantityDisplay.textContent = quantity;
}