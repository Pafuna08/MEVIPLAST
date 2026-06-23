const users = {
  admin: { password: "admin123", role: "Administrador", target: "dashboard-admin.html" },
  supervisor: { password: "super123", role: "Supervisor", target: "dashboard-supervisor.html" },
  operario: { password: "oper123", role: "Operario", target: "dashboard-operario.html" }
};

const form = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const status = document.querySelector("#login-status");
const toggle = document.querySelector("#toggle-password");

function error(input, message) {
  const field = input.closest(".field");
  field.classList.add("invalid");
  field.querySelector("small").textContent = message;
}

function clear(input) {
  const field = input.closest(".field");
  field.classList.remove("invalid");
  field.querySelector("small").textContent = "";
}

toggle.addEventListener("click", () => {
  const visible = password.type === "text";
  password.type = visible ? "password" : "text";
  toggle.textContent = visible ? "Ver" : "Ocultar";
  toggle.setAttribute("aria-label", visible ? "Mostrar contraseña" : "Ocultar contraseña");
});

document.querySelectorAll("[data-user]").forEach((button) => {
  button.addEventListener("click", () => {
    username.value = button.dataset.user;
    password.value = button.dataset.password;
    status.textContent = "";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clear(username);
  clear(password);
  status.textContent = "";

  const userKey = username.value.trim().toLowerCase();
  const record = users[userKey];
  let valid = true;

  if (!userKey) {
    error(username, "El usuario es obligatorio.");
    valid = false;
  }
  if (!password.value) {
    error(password, "La contraseña es obligatoria.");
    valid = false;
  }
  if (!valid) return;

  if (!record || record.password !== password.value) {
    status.textContent = "Usuario o contraseña incorrectos.";
    return;
  }

  localStorage.setItem("meviplastSession", JSON.stringify({
    username: userKey,
    role: record.role,
    loginAt: new Date().toISOString()
  }));
  window.location.href = record.target;
});

