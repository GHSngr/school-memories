// Welcome Notification
/*document.addEventListener("DOMContentLoaded", function () {
  const userName = localStorage.getItem("userName") || prompt("Enter your name:");
  if (userName) {
    localStorage.setItem("userName", userName);
    alert(`👋 Welcome back, ${userName}! Enjoy your School Memories 🌟`);
  }
*/
  updateTime();
  setInterval(updateTime, 1000);
});

// Live Clock
function updateTime() {
  const timeEl = document.getElementById("time");
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleString();
  }
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load Theme from Storage
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Background Music Toggle
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");
  if (audio.paused) {
    audio.play();
    btn.textContent = "🔇 Mute Music";
  } else {
    audio.pause();
    btn.textContent = "🔊 Play Music";
  }
}

// Gallery Fullscreen View
function openFullscreen(img) {
  const fullscreen = document.getElementById("fullscreen");
  const fullscreenImg = document.getElementById("fullscreen-img");
  fullscreenImg.src = img.src;
  fullscreen.classList.add("active");
}

function closeFullscreen() {
  document.getElementById("fullscreen").classList.remove("active");
}

// Auto-scroll Chat to Bottom
function scrollChatToBottom() {
  const chatBox = document.getElementById("chat-box");
  if (chatBox) {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Add New Friend Name to Chat List (up to 10)
function addFriend(name) {
  const list = document.getElementById("friend-list");
  if (list.children.length < 10) {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  } else {
    alert("You can only add 10 friends to the chat list.");
  }
}
