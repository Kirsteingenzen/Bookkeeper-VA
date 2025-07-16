// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle")
const themeIcon = document.getElementById("themeIcon")
const body = document.body

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", currentTheme)

// Update icon based on current theme
function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.className = "fas fa-sun"
  } else {
    themeIcon.className = "fas fa-moon"
  }
}

// Initialize icon
updateThemeIcon(currentTheme)

// Theme toggle event listener
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    typeWriter(typingElement, "I'm Kirstein Genzen Nojapa", 100)
  }
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backdropFilter = "blur(20px)"
  } else {
    navbar.style.backdropFilter = "blur(15px)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".service-card, .timeline-item, .skill-item, .contact-item")
  animateElements.forEach((el) => observer.observe(el))
})

// Contact form handling
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value
  const message = this.querySelector("textarea").value

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Create mailto link
  const mailtoLink = `mailto:genzennojapa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

  // Open email client
  window.location.href = mailtoLink

  // Reset form
  this.reset()

  // Show success message
  alert("Thank you for your message! Your email client should open now.")
})

// Add active class to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start) + "+"
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target + "+"
    }
  }
  updateCounter()
}

// Initialize counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll(".stat h4")
      counters.forEach((counter) => {
        const target = Number.parseInt(counter.textContent)
        animateCounter(counter, target)
      })
      statsObserver.unobserve(entry.target)
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".about-stats")
  if (statsSection) {
    statsObserver.observe(statsSection)
  }
})

// Profile card hover effect
document.addEventListener("DOMContentLoaded", () => {
  const profileCard = document.querySelector(".profile-card")
  if (profileCard) {
    profileCard.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    profileCard.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  }
})

// Update last modified date in sitemap
document.addEventListener("DOMContentLoaded", () => {
  const lastUpdatedElement = document.getElementById("lastUpdated")
  if (lastUpdatedElement) {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    lastUpdatedElement.textContent = currentDate
  }
})

// Sitemap link smooth scrolling
document.querySelectorAll('.sitemap a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
