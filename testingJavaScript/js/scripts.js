function getTriBase() {
    var triBase = window.prompt("Please, input the base of the triangle");
    document.getElementById("triBase").innerHTML += "<br>" + "The base of the trangle is " + triBase;
    return triBase;
}

function getTriHeight() {
    var triHeight = window.prompt("Please, input the height of the triangle");
    document.getElementById("triHeight").innerHTML += "<br>" + "The height of the trangle is " + triHeight;
    return triHeight;
}

var b = getTriBase();
var h = getTriHeight();

function calcArea() {
    //var b = parseInt(getTriBase());
    //var h = parseInt(getTriHeight());
    var A = 0.5 * b * h;
    document.getElementById("triArea").innerHTML = "The area of the triangle is " + A;
}
