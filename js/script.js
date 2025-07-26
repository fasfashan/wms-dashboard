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
// Donut chart
const donutChart = c3.generate({
  bindto: "#donutChart",
  data: {
    columns: [
      ["Ready", 942],
      ["On-Delivery", 117],
      ["Delivered", 266],
      ["Installed", 659],
    ],
    type: "donut",
  },
  donut: {
    title: "Status",
  },
  color: {
    pattern: ["#1E90FF", "#B26BD9", "#FFB64D", "#33CC99"],
  },
});

// Bar chart
const barChart = c3.generate({
  bindto: "#barChart",
  data: {
    x: "x",
    columns: [
      [
        "x",
        "Aceh",
        "Sumatera Utara",
        "Sumatera Barat",
        "Riau",
        "Kepulauan Riau",
        "Jambi",
      ],
      ["Ready", 200, 400, 150, 450, 300, 220],
      ["On-Delivery", 100, 150, 80, 200, 140, 160],
      ["Delivered", 120, 300, 130, 330, 200, 180],
      ["Installed", 180, 290, 110, 370, 240, 190],
    ],
    type: "bar",
    groups: [["Ready", "On-Delivery", "Delivered", "Installed"]],
  },
  axis: {
    x: {
      type: "category",
    },
  },
  color: {
    pattern: ["#1E90FF", "#B26BD9", "#FFB64D", "#33CC99"],
  },
});
// Sidebar
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtnSidebar = document.getElementById("toggleSidebar");

  // Toggle sidebar collapse/expand
  toggleBtnSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-collapsed");

    // Close all accordion items when collapsing sidebar
    if (sidebar.classList.contains("sidebar-collapsed")) {
      const accordionCollapses = document.querySelectorAll(
        ".accordion-collapse"
      );
      accordionCollapses.forEach((collapse) => {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    }
  });

  // Optional: Add keyboard shortcut (Ctrl + B)
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "b") {
      e.preventDefault();
      sidebar.classList.toggle("sidebar-collapsed");

      if (sidebar.classList.contains("sidebar-collapsed")) {
        const accordionCollapses = document.querySelectorAll(
          ".accordion-collapse"
        );
        accordionCollapses.forEach((collapse) => {
          const bsCollapse = bootstrap.Collapse.getInstance(collapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        });
      }
    }
  });
});
