const session = JSON.parse(localStorage.getItem("meviplastSession") || "null");
const expectedRole = document.body.dataset.role;

if (!session || session.role !== expectedRole) {
  window.location.replace("login.html");
}

const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".sidebar-toggle");
const logout = document.querySelector("#logout");
const toast = document.querySelector("#toast");

document.querySelectorAll("[data-user-name]").forEach((element) => {
  element.textContent = session?.username || "usuario";
});

document.querySelectorAll("[data-role-name]").forEach((element) => {
  element.textContent = session?.role || expectedRole;
});

document.querySelectorAll("[data-today]").forEach((element) => {
  element.textContent = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date());
});

toggle?.addEventListener("click", () => sidebar.classList.toggle("open"));

logout?.addEventListener("click", () => {
  localStorage.removeItem("meviplastSession");
  window.location.href = "login.html";
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelectorAll("[data-demo-action]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`${button.dataset.demoAction}. Funcionalidad demostrativa sin backend.`);
  });
});

