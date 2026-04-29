const validCodes = ["IMU1023","IMU4587","IMU7391","IMU2648","IMU9852","IMU3417","IMU6729","IMU1508","IMU8934","IMU5276","IMU7812","IMU4690","IMU2385","IMU9047","IMU6153","IMU8724","IMU1936","IMU5468","IMU7205","IMU3819","IMU6542","IMU9183","IMU2370","IMU8456","IMU1093","IMU7628","IMU4951","IMU8307","IMU2169","IMU5784","IMU9325","IMU6841","IMU3578","IMU7490","IMU1206","IMU8653","IMU2947","IMU5318","IMU9780","IMU6432","IMU1827","IMU7593","IMU4068","IMU9135","IMU2480","IMU6751","IMU8342","IMU5907","IMU7216","IMU3694","IMU8475","IMU1309","IMU6823","IMU9541","IMU2786","IMU5034","IMU7912","IMU8640","IMU3157","IMU6298","IMU4721","IMU9086","IMU1532","IMU7849","IMU2657","IMU6390","IMU8124","IMU5473","IMU3908","IMU7265","IMU9814","IMU2347","IMU6589","IMU4172","IMU8035","IMU5691","IMU7428","IMU1963","IMU8750","IMU3204","IMU6847","IMU9512","IMU2703","IMU8369","IMU1458","IMU7926","IMU5081","IMU6237","IMU8794","IMU3410","IMU7643","IMU2985","IMU9102","IMU5376","IMU6829","IMU1437","IMU8590","IMU4261","IMU7058","IMU3189"];

function verifyCode() {
    const input = document.getElementById('accessCode').value.toUpperCase().trim();
    const error = document.getElementById('error');
    
    if (!input) {
        error.textContent = 'Please enter an access code';
        error.style.display = 'block';
        return;
    }
    
    const usedCodes = JSON.parse(localStorage.getItem('usedCodes') || '[]');
    
    if (usedCodes.includes(input)) {
        error.textContent = 'This access code has already been used';
        error.style.display = 'block';
        return;
    }
    
    if (!validCodes.includes(input)) {
        error.textContent = 'Invalid access code';
        error.style.display = 'block';
        return;
    }
    
    usedCodes.push(input);
    localStorage.setItem('usedCodes', JSON.stringify(usedCodes));
    sessionStorage.setItem('accessGranted', 'true');
    window.location.href = 'index.html';
}

document.getElementById('accessCode').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verifyCode();
});
