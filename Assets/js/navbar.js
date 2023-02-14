var x = document.getElementById("nav");

function MyFunction() {
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar"
    }
}
