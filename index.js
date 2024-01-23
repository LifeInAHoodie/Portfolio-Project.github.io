var isExpanded = false;

function toggleImageSize() {
    var portraitImg = document.getElementById("portrait");
    isExpanded = !isExpanded;
    portraitImg.classList.toggle("expanded", isExpanded);
}