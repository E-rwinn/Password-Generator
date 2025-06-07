const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

    const stats = analyzePassword(passwordBox.value);
    console.log("Password Analysis:");
    console.log(`Length: ${stats.length}`);
    console.log(`Contains Uppercase: ${stats.hasUpperCase}`);
    console.log(`Contains Lowercase: ${stats.hasLowerCase}`);
    console.log(`Contains Numbers: ${stats.hasNumber}`);
    console.log(`Contains Symbols: ${stats.hasSymbol}`);

passwordBox.addEventListener("input", () => {
    setTimeout(logPasswordStats, 2000);
});

setTimeout(() => {
    estimateEntropy(passwordBox.value);
}, 3000);

console.log("🔐 Password-related utilities loaded.");
