// ── ACCESS CODE SYSTEM WITH 1-MINUTE COOLDOWN ──────────────────
const ACCESS_CODES = ["IMU9846", "IMU350", "IMU456"];
const COOLDOWN_TIME = 60000; // 1 minute in milliseconds
const STORAGE_KEY_INDEX = "imu_code_index";
const STORAGE_KEY_LAST_ACCESS = "imu_last_access_time";

function initAccessControl() {
  const isAuthorized = localStorage.getItem("isAuthorized");
  
  if (isAuthorized === "true") {
    // User already authorized - show main content directly
    hideModal();
  } else {
    // Check if system is in cooldown
    if (isInCooldown()) {
      showCooldownMessage();
    } else {
      showModal();
    }
  }
}

function isInCooldown() {
  const lastAccessTime = localStorage.getItem(STORAGE_KEY_LAST_ACCESS);
  if (!lastAccessTime) return false;
  
  const timePassed = Date.now() - parseInt(lastAccessTime);
  return timePassed < COOLDOWN_TIME;
}

function getRemainingCooldownTime() {
  const lastAccessTime = localStorage.getItem(STORAGE_KEY_LAST_ACCESS);
  if (!lastAccessTime) return 0;
  
  const timePassed = Date.now() - parseInt(lastAccessTime);
  const remaining = COOLDOWN_TIME - timePassed;
  return remaining > 0 ? remaining : 0;
}

function showCooldownMessage() {
  const modal = document.getElementById("accessModal");
  
  modal.classList.remove("hidden");
  document.getElementById("home").classList.add("blurred");
  
  // Hide normal modal content
  document.getElementById("normalModalContent").classList.add("hidden");
  
  // Show cooldown message
  const cooldownDiv = document.getElementById("cooldownMessage");
  cooldownDiv.classList.remove("hidden");
  
  // Start countdown
  updateCooldownTimer();
}

function updateCooldownTimer() {
  const remaining = getRemainingCooldownTime();
  
  if (remaining <= 0) {
    // Cooldown finished - show normal modal
    document.getElementById("cooldownMessage").classList.add("hidden");
    document.getElementById("normalModalContent").classList.remove("hidden");
    document.getElementById("accessCodeInput").focus();
    return;
  }
  
  const seconds = Math.ceil(remaining / 1000);
  const timerElement = document.getElementById("cooldownTimer");
  timerElement.textContent = seconds;
  
  // Update every second
  setTimeout(updateCooldownTimer, 1000);
}

function getCurrentCodeIndex() {
  const index = localStorage.getItem(STORAGE_KEY_INDEX);
  return index ? parseInt(index) : 0;
}

function setNextCodeIndex() {
  const currentIndex = getCurrentCodeIndex();
  const nextIndex = (currentIndex + 1) % ACCESS_CODES.length;
  localStorage.setItem(STORAGE_KEY_INDEX, nextIndex);
}

function showModal() {
  document.getElementById("accessModal").classList.remove("hidden");
  document.getElementById("home").classList.add("blurred");
  document.getElementById("normalModalContent").classList.remove("hidden");
  document.getElementById("cooldownMessage").classList.add("hidden");
  
  // Show current user number
  const currentIndex = getCurrentCodeIndex();
  const userNumber = currentIndex + 1;
  document.getElementById("userNumber").textContent = userNumber;
  
  // Focus on input field
  setTimeout(() => {
    document.getElementById("accessCodeInput").focus();
  }, 300);
}

function hideModal() {
  document.getElementById("accessModal").classList.add("hidden");
  document.getElementById("home").classList.remove("blurred");
}

function verifyAccessCode(inputCode) {
  const currentIndex = getCurrentCodeIndex();
  const validCode = ACCESS_CODES[currentIndex];
  
  if (inputCode.toUpperCase() === validCode) {
    // Grant permanent access to this user
    localStorage.setItem("isAuthorized", "true");
    
    // Set last access time for cooldown
    localStorage.setItem(STORAGE_KEY_LAST_ACCESS, Date.now().toString());
    
    // Move to next code for next user
    setNextCodeIndex();
    
    // Show success message
    showSuccessMessage();
    
    // Hide modal after short delay
    setTimeout(() => {
      hideModal();
    }, 1500);
    
    return true;
  }
  return false;
}

function showSuccessMessage() {
  const modal = document.querySelector(".modal-box");
  const successMsg = document.createElement("div");
  successMsg.className = "success-message";
  successMsg.innerHTML = "✅ Access unlocked successfully!";
  modal.appendChild(successMsg);
  
  // Remove success message after animation
  setTimeout(() => {
    successMsg.remove();
  }, 2000);
}

function resetAccess() {
  if (confirm("Are you sure you want to reset access? You will need to enter the code again.")) {
    localStorage.removeItem("isAuthorized");
    location.reload();
  }
}

// Event listeners for access code
document.addEventListener("DOMContentLoaded", () => {
  initAccessControl();
  
  const submitBtn = document.getElementById("submitCodeBtn");
  const codeInput = document.getElementById("accessCodeInput");
  const errorMsg = document.getElementById("errorMsg");
  
  if (submitBtn && codeInput && errorMsg) {
    submitBtn.addEventListener("click", () => {
      const code = codeInput.value.trim();
      
      if (code === "") {
        errorMsg.textContent = "Please enter a code";
        errorMsg.classList.remove("hidden");
        return;
      }
      
      if (verifyAccessCode(code)) {
        errorMsg.classList.add("hidden");
        codeInput.value = "";
      } else {
        errorMsg.textContent = "Invalid Code. Please try again.";
        errorMsg.classList.remove("hidden");
        codeInput.value = "";
        codeInput.focus();
        
        // Shake animation
        codeInput.classList.add("shake");
        setTimeout(() => {
          codeInput.classList.remove("shake");
        }, 500);
      }
    });
    
    // Allow Enter key to submit
    codeInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        submitBtn.click();
      }
    });
    
    // Clear error on input
    codeInput.addEventListener("input", () => {
      errorMsg.classList.add("hidden");
    });
  }
});
