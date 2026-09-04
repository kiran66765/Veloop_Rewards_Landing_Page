// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const current = question.parentElement;
    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== current) item.classList.remove("active");
    });
    current.classList.toggle("active");
  });
});

// Testimonial carousel
const testimonials = [...document.querySelectorAll(".testimonial")];
const dots = [...document.querySelectorAll(".dot")];
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, i) => item.classList.toggle("active", i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

document.querySelector(".prev").addEventListener("click", () => showSlide(currentSlide - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(currentSlide + 1));
dots.forEach(dot => {
  dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide)));
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Demo links should not jump to the top
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", e => e.preventDefault());
});
