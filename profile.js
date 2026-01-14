
  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.querySelector("button");
    const errorMsg = document.getElementById("errorMsg");

    saveButton.addEventListener("click", function () {
      const name = document.getElementById("name").value.trim();
      const place = document.getElementById("place").value.trim();
      const pincode = document.getElementById("pincode").value.trim();
      const mobile = document.getElementById("mobilenumber").value.trim();

      // Basic validation
      if (!name || !place || !pincode || !mobile) {
        errorMsg.textContent = "All fields are required.";
        errorMsg.style.color = "red";
        return;
      }

      if (!/^\d{6}$/.test(pincode)) {
        errorMsg.textContent = "Pin code must be 6 digits.";
        errorMsg.style.color = "red";
        return;
      }

      if (!/^\d{10}$/.test(mobile)) {
        errorMsg.textContent = "Mobile number must be 10 digits.";
        errorMsg.style.color = "red";
        return;
      }

      // If all validations pass
      errorMsg.textContent = "Profile saved successfully!";
      errorMsg.style.color = "green";

      // You can add logic here to actually save the data or send it to a server
    });
  });
