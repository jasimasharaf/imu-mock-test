const userCodes = {
    1: "IMU1023",
    2: "IMU4587",
    3: "IMU7391"
};

function getCurrentUser() {
    const lastLogin = JSON.parse(localStorage.getItem('lastLogin') || '{"user": 1, "time": 0}');
    const now = Date.now();
    const oneMinute = 60000;
    
    if (now - lastLogin.time >= oneMinute) {
        const nextUser = (lastLogin.user % 3) + 1;
        return nextUser;
    }
    
    return lastLogin.user;
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
    
    localStorage.setItem('lastLogin', JSON.stringify({
        user: currentUser,
        time: Date.now()
    }));
    
    sessionStorage.setItem('accessGranted', 'true');
    document.getElementById('accessModal').classList.add('hidden');
    document.getElementById('home').classList.remove('blurred');
}

document.getElementById('accessCode').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyCode();
});

window.addEventListener('DOMContentLoaded', () => {
    const currentUser = getCurrentUser();
    document.getElementById('userNumber').textContent = `USER ${currentUser}`;
    
    if (sessionStorage.getItem('accessGranted') === 'true') {
        document.getElementById('accessModal').classList.add('hidden');
        document.getElementById('home').classList.remove('blurred');
    }
});
