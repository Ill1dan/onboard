var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("last");

first.addEventListener("click", function () {
    one.style.left = "150%";
    two.style.left = "50%";
    three.style.left = "-50%";
    setTimeout(() => {
        three.style.scale = "1";
    }, 500);
});

second.addEventListener("click", function () {
    one.style.left = "200%";
    two.style.left = "150%";
    three.style.left = "50%";
    setTimeout(() => {
        one.style.scale = "0";
        two.style.scale = "0";
    },500);
})
third.addEventListener("click", function () {
    three.style.scale = "0";
    one.style.left = "50%";
    two.style.left = "-50%";
    setTimeout(() => {
        three.style.left = "-100%";
        one.style.scale = "1";
        two.style.scale = "1";
    }, 1000);

});

var btn = document.getElementById("btn");
var count = 0;
const root = document.querySelector(':root');
var bulb = document.getElementById("bulb");

btn.addEventListener("click", function () {
    if (count == 0) {
        root.style.setProperty('--clr-bg', '#282c38');
        root.style.setProperty('--clr-font1', '#fff');
        root.style.setProperty('--clr-primary', '#172a46');
        root.style.setProperty('--clr-font3', '#282c38');

        one.style.boxShadow = "none";
        two.style.boxShadow = "none";
        three.style.boxShadow = "none";

        bulb.classList.remove("fa-solid");
        bulb.classList.add("fa-regular");

        count += 1
    }else{
        root.style.setProperty('--clr-bg', '#eceef7');
        root.style.setProperty('--clr-font1', '#282c38');
        root.style.setProperty('--clr-primary', '#f8f9fd');
        root.style.setProperty('--clr-font3', '#fff');

        one.style.boxShadow = "0.125rem 0.125rem 1rem rgba(214, 219, 235, 0.7),0.125rem 0.125rem 1.25rem rgba(214, 219, 235, 0.6)";
        two.style.boxShadow = "0.125rem 0.125rem 1rem rgba(214, 219, 235, 0.7), 0.125rem 0.125rem 1.25rem rgba(214, 219, 235, 0.6)";
        three.style.boxShadow = "0.125rem 0.125rem 1rem rgba(214, 219, 235, 0.7),0.125rem 0.125rem 1.25rem rgba(214, 219, 235, 0.6)";

        bulb.classList.remove("fa-regular");
        bulb.classList.add("fa-solid");

        count -=1
    }

});