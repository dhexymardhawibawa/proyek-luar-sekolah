document.addEventListener("DOMContentLoaded", function () {
  // Highlight active navigation link on scroll
  const sections = document.querySelectorAll("main, section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 50) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Button animation effect
  const button = document.querySelector("main button");
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });

  // Contact modal popup
  const contactBtn = document.querySelector("main button");
  contactBtn.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <h2>Contact Me</h2>
                    <p>Email: dhexy@example.com</p>
                    <p>Phone: +123 456 789</p>
                    <button id="closeModal">Close</button>
                </div>
            </div>
        `;
    document.body.appendChild(modal);

    document.getElementById("closeModal").addEventListener("click", () => {
      modal.remove();
    });
  });
});

document.getElementById("getInTouch").addEventListener("click", function () {
  window.location.href = "#contact";
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("formMessage").style.display = "block";
    setTimeout(() => {
      document.getElementById("formMessage").style.display = "none";
      document.getElementById("contactForm").reset();
    }, 3000);
  });