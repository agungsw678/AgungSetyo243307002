document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");

  function validateForm() {
    // ... (fungsi validasi seperti sebelumnya) ...
  }

  form.addEventListener("input", validateForm);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!submitBtn.disabled) {
      alert("Registrasi berhasil!");
      form.reset();
      submitBtn.disabled = true;
    }
  });

  // Login Form
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login berhasil!");
    // Tambahkan logika login di sini
  });
});
