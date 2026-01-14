function submitMobile() {
  const mobileInput = document.getElementById("mobileNumber").value.trim();

  // Validate 10-digit number starting with 6–9
  const regex = /^[6-9]\d{9}$/;

  if (regex.test(mobileInput)) {
    // Redirect to another page
    window.location.href = "verify.html"; // Change this to your target page
  } 
  else {
    // Do nothing or show inline error if needed
    console.log("Invalid mobile number");
    alert("Invalid number")
  }
}

