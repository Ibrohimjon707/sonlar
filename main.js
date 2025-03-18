// let button = document.querySelector("button");
// let input = document.querySelector("input");

// button.addEventListener("click", () => {
//   if (input.value === "") {
//     alert("inputga nimadir yoz");
//   } else {
//     alert(`salom ${input.value}`);
//   }
// });
let numberinput = document.querySelector(".number-input"),
    sendbutton = document.querySelector(".send"),
    minus = document.querySelector(".minus"),
    plus = document.querySelector(".plus"),
    counter = document.querySelector(".counter"),
    colorinput = document.querySelector("#color");

let son = 0;

function setText() {
    counter.innerHTML = son;
}

setText();

sendbutton.addEventListener("click", function() {
    if (numberinput.value === "") {
        alert("Iltimos, inputga son kiriting!");
    } else {
        son = Number(numberinput.value);
        setText();
    }
});

plus.addEventListener("click", function() {
    son++;
    setText();
});

minus.addEventListener("click", function() {
    son--;
    setText();
});

colorinput.addEventListener("change", function() {
    counter.style.color = colorinput.value;
});
