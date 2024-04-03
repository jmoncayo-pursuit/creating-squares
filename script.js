document.getElementById("enterBtn").addEventListener("click", function() {
    var parentSquare = document.querySelector(".box");
    var newSquare = document.createElement("div");
    newSquare.classList.add("nested-square");

    // sets random color
    var randomColor = generateRandomColor();
    newSquare.style.backgroundColor = randomColor;

    // appends the new square last created square or parent square if there are no existing squares
    var existingSquares = document.querySelectorAll(".nested-square");
    if (existingSquares.length > 0) {
        var lastSquare = existingSquares[existingSquares.length - 1];
        lastSquare.appendChild(newSquare);
    } else {
        parentSquare.appendChild(newSquare);
    }
});

//generates color
function generateRandomColor() {
    var randomHue = Math.floor(Math.random() * 360);
    var randomSaturation = Math.floor(Math.random() * 100);
    var randomLightness = Math.floor(Math.random() * 50) + 30; //keeps brighter
    return "hsl(" + randomHue + ", " + randomSaturation + "%, " + randomLightness + "%)";
}
