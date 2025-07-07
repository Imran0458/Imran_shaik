<script>
  const roles = ["Fullstack Developer", "Software Engineer"];
  let roleIndex = 0;
  let charIndex = 0;
  const developerSpan = document.getElementById("developer");

  function typeText() {
    if (charIndex <= roles[roleIndex].length) {
      developerSpan.textContent = roles[roleIndex].slice(0, charIndex++);
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 2000); // Pause before erasing
    }
  }

  function eraseText() {
    if (charIndex >= 0) {
      developerSpan.textContent = roles[roleIndex].slice(0, charIndex--);
      setTimeout(eraseText, 60);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeText, 400);
    }
  }

  document.addEventListener("DOMContentLoaded", typeText);
</script>
