// makes nested div
document.getElementById("enterBtn").addEventListener("click", function() {
    var parentSquare = document.querySelector(".box");
    var newSquare = document.createElement("div");
    newSquare.classList.add("nested-square");
    // puts next div generated inside if there an existing square
    var existingSquares = document.querySelectorAll(".nested-square");
    if (existingSquares.length > 0) {
        var lastSquare = existingSquares[existingSquares.length - 1];
        lastSquare.appendChild(newSquare);
    } else {
        parentSquare.appendChild(newSquare);
    }
});
