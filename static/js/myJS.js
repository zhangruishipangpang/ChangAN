var color = ['white', 'pink', 'red', 'rgb(216, 90, 90)', 'yellow', 'green', 'blue', 'crimson', 'orange'];
var i = 0;


$(document).ready(function () {

    sleep(0);
})

function sleep(count) {
    setTimeout(function () {
        changeColor();
        if (count < 300) {
            sleep(++count);
        }
    }, 800);

}
function changeColor() {
    if (i == color.length) {
        i = 0;
    }
    $('.changeColor').css('color', color[i++]);
}