// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "salmon";
  });
  document.getElementById("hoverBox").addEventListener("mouseleave", () => {
    hoverBox.style.backgroundColor = "lightblue";
  });
  
  document.getElementById("keyInput").addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  let secretBtn = document.getElementById("secretBtn");
  secretBtn.addEventListener("dblclick", () => {
    alert("Double-click secret revealed! 🔐");
  });
  
  // 2. Interactive Elements
  document.getElementById("changeColorBtn").addEventListener("click", function () {
    this.style.backgroundColor = this.style.backgroundColor === "gold" ? "lightgreen" : "gold";
  });
  
  let currentImage = 1;
  document.getElementById("nextImg").addEventListener("click", () => {
    currentImage = (currentImage % 3) + 1; // assuming 3 images
    document.getElementById("galleryImg").src = `image${currentImage}.jpg`;
  });
  
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((content) => content.classList.add("hidden"));
      document.getElementById(tab.dataset.target).classList.remove("hidden");
    });
  });
  
  // 3. Form Validation
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
  
    let errors = [];
    if (!/\S+@\S+\.\S+/.test(email)) errors.push("Invalid email.");
    if (password.length < 8) errors.push("Password must be at least 8 characters.");
  
    feedback.textContent = errors.length > 0 ? errors.join(" ") : "Form submitted successfully!";
  });
  