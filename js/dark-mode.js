var spider = document.getElementById("logo");
var btn = document.getElementById("dark");
var icon = document.getElementById("icon");

btn.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.src = "assets/img/icon/sun_icon.svg";
        spider.src = "assets/img/icon/spider-solid-white.svg";
    } else {
        icon.src = "assets/img/icon/moon_icon.svg";
        spider.src = "assets/img/icon/spider-solid.svg";
    }
}