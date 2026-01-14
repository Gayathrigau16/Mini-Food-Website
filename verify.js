
    // Auto-focus to next box
    document.querySelectorAll('.otp-box').forEach((input, index, inputs) => {
      input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });

    // Validate OTP and redirect
    function getOTP(method) {
      const otpInputs = document.querySelectorAll('.otp-box');
      let otp = '';

      otpInputs.forEach(input => {
        otp += input.value;
      });

      if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
        alert('Please enter a valid 6-digit OTP.');
        return;
      }

      console.log(`OTP entered via ${method}:`, otp);

      // ✅ Redirect to next page
      window.location.href = 'home.html'; // Change to your actual next page
    }


