let fullNameInput = document.getElementById('fullName');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let button=document.getElementById('buttonMain')
function successSignUp() {
    let fullName = fullNameInput.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    let confirmPasswordValue = confirmPasswordInput.value;

    if (containsNumbers(fullName)) {
        alert('В имени не может быть цифр');
        return;
    }

    let arr = [fullName, emailValue, passwordValue, confirmPasswordValue];
    let jsonData = JSON.stringify(arr);
    localStorage.setItem("myData", jsonData);

    setTimeout(() => {
        window.location.href = "welcome.html";
    }, 8000);
}



function containsNumbers(inputString) {
    return /\d/.test(inputString);
}


fullNameInput.addEventListener('input', () => {
    if (containsNumbers(fullNameInput.value)) {
        alert('В имени не может быть цифр');
    }
});
let timeoutId

emailInput.addEventListener('input', () => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
        if (!emailInput.value.includes("@")) {
            alert('Где собачка?');
        }
    }, 5000)
})
passwordInput.addEventListener('input',()=>{
    clearTimeout(timeoutId)
    timeoutId=setTimeout(()=>{
        if(passwordInput.value.length<6){
            alert('В пароле дожно быть больше 6 символов')
        }
    },6000)
})
confirmPasswordInput.addEventListener("input",()=>{
    clearTimeout(timeoutId)
    timeoutId=setTimeout(()=>{
        if(passwordInput!==confirmPasswordInput){
            alert('Пароли не совпадают')
        }
    },5000)
})

button.addEventListener('click', () => {
    if (fullNameInput.value.trim() == "" || emailInput.value.trim() == "" || passwordInput.value.trim() == "" || confirmPasswordInput.value.trim() == "") {
        alert('Везде пусто');
    }
});