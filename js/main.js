document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo AOS animation
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Contact Form Simulation
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        alert(
          "✅ Message sent successfully! (Simulation - No backend yet)\n\nI'll get back to you soon!",
        );
        form.reset();
      } else {
        alert("Please fill in all fields correctly.");
      }
    });
  }

  // ── Typewriter Effect Nâng Cao ────────────────────────────────
  const nameElement = document.getElementById("typewriter-name");
  if (!nameElement) return; // bảo vệ nếu không tìm thấy element

  const texts = ["NHAT PHONG", "DATA ANALYST"];
  let textIndex = 0;
  let isDeleting = false;
  let charIndex = 0;

  function typeAdvanced() {
    const currentFull = texts[textIndex];

    if (isDeleting) {
      // Xóa chữ
      nameElement.textContent = currentFull.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Gõ chữ
      nameElement.textContent = currentFull.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 60 : 120; // xóa nhanh hơn gõ

    if (!isDeleting && charIndex === currentFull.length) {
      // Gõ xong → pause rồi bắt đầu xóa
      isDeleting = true;
      speed = 5000; // pause 5 giây trước khi xóa
    } else if (isDeleting && charIndex === 0) {
      // Xóa xong → chuyển sang text tiếp theo
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500; // pause nhỏ trước khi bắt đầu gõ text mới
    }

    setTimeout(typeAdvanced, speed);
  }

  // Bắt đầu hiệu ứng sau khi trang load xong một chút
  setTimeout(() => {
    typeAdvanced();
  }, 800);

  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.getElementById("loading-screen");
      const main = document.getElementById("main-content");

      loader.classList.add("fade-out");

      setTimeout(() => {
        loader.style.display = "none";
        main.classList.remove("hidden");

        // Khởi động AOS sau khi load xong
        AOS.init({
          duration: 800,
          once: true,
        });
      }, 200);
    }, 2000); // Đảm bảo loader hiển thị ít nhất 2.5 giây
  });
  lucide.createIcons();
});
