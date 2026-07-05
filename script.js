function rainbowText(element) {
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let i = 0;
    setInterval(function() {
        document.getElementById(element).style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 100);
}


function goTo(page){
    window.location.href = page;
}


rainbowText("rainbow");

document.getElementById("gameLink").addEventListener("click", function() {
    goTo("game.html");
});

document.getElementById("homeLink").addEventListener("click", function() {
    goTo("index.html");
});
