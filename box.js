let button = document.getElementById("theBoxes");
let button1 = document.getElementById("color")

button.addEventListener("click", myFunction);
var oldvalue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById('number').value;
    let backgroundcolor = document.getElementById('color').value;
    console.log(backgroundcolor);
    n = parseInt(oldvalue) + parseInt(n);

    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;
        oldvalue = document.getElementById('box').lastElementChild.innerHTML;
        console.log(oldvalue);
        box.style.backgroundColor = backgroundcolor;

    }
}