const toggleBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const userIdInput = document.getElementById("userId");

toggleBtn.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  toggleBtn.textContent = type === "password" ? "Show" : "Hide";
});

// Optional: Aktifkan tombol login saat semua field terisi
[userIdInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    loginBtn.disabled = !(userIdInput.value && passwordInput.value);
  });
});
