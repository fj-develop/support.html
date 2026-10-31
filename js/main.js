document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === current || (href === "tallytick.html" && ["privacy-tallytick.html", "support-tallytick.html"].includes(current))) {
      a.classList.add("active");
      if (href === current) a.setAttribute("aria-current", "page");
    }
  });
});
