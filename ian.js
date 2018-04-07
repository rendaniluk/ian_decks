var x = document.getElementById("x");
console.log(x);
var changeColor = function () {
    var time = 0;
    function interval() {
        time++;
        if (time == 30) {
            time = 0;
        };
        console.log(time);

        if (time <= 10) {
            x.classList.remove('green');
            x.classList.remove('red');
            x.classList.add('blue');
        } else if (time > 10 && time < 20) {
            x.classList.remove('green');
            x.classList.add('red');
            x.classList.remove('blue');
        } else if (time > 20 && time < 30) {
            x.classList.add('green');
            x.classList.remove('red');
            x.classList.remove('blue');
        }
    }
    setInterval(interval, 1000, 10000);
}

changeColor();