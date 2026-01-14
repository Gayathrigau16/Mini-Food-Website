document.getElementById("addToCart").addEventListener("click", function () {
  const portion = document.getElementById("portion").value;
  const raitas = Array.from(document.querySelectorAll(".raita-choice input:checked"))
    .map(input => input.value);

  alert(`Added to cart:\nPortion: ${portion}\nRaita: ${raitas.join(", ") || "None"}`);
});