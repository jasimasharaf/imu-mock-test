const userCodes = {
    1: "IMU1023",
    2: "IMU4587",
    3: "IMU7391"
};

const START_TIME = 1704067200000; // Fixed start time (Jan 1, 2024)

function getCurrentUser() {
    const now = Date.now();
    const oneMinute = 60000;
    const elapsed = now - START_TIME;
    const minutesPassed = Math.floor(elapsed / oneMinute);
    const userIndex = (minutesPassed % 3) + 1;
    return userIndex;
}

function verifyCode() {
    const code = document.getElementById('accessCode').value.toUpperCase().trim();
    const error = document.getElementById('error');
    const currentUser = getCurrentUser();
    
    if (!code) {
        error.textContent = 'Please enter an access code';
        error.style.display = 'block';
        return;
    }
    
    if (userCodes[currentUser] !== code) {
        error.textContent = 'Invalid access code for this user';
        error.style.display = 'block';
        return;
    }
    
    sessionStorage.setItem('accessGranted', 'true');
    document.getElementById('accessModal').classList.add('hidden');
    document.getElementById('home').classList.remove('blurred');
}

function updateUserDisplay() {
    const currentUser = getCurrentUser();
    document.getElementById('userNumber').textContent = `USER ${currentUser}`;
}

document.getElementById('accessCode').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyCode();
});

window.addEventListener('DOMContentLoaded', () => {
    updateUserDisplay();
    
    setInterval(updateUserDisplay, 1000);
    
    if (sessionStorage.getItem('accessGranted') === 'true') {
        document.getElementById('accessModal').classList.add('hidden');
        document.getElementById('home').classList.remove('blurred');
    }
});
