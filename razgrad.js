const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const btnText = document.querySelector(".buttonText");
const text1 = document.querySelector(".text");
const wrong = document.querySelector(".wrong");
const tryAgain = document.querySelector(".tryAgain");

function code() {
    const codeOption = Number(prompt("Enter a number"));
    
    if(codeOption == 1928) {
        btn.classList.remove("hidden");
        btn1.classList.remove("hidden");
        btnText.classList.remove("hidden");
        
    } else {
        wrong.classList.remove("hidden");
        tryAgain.classList.remove("hidden");
    }
}

code();

btn.addEventListener("click", function () {
    text1.classList.remove("hidden");
    btn.classList.add("hidden");
    btn1.classList.add("hidden");
    btnText.classList.add("hidden");
})