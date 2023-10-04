let current = 0;
const image = document.getElementById("diagram");

function changeImage(file) {

    if (file == current + 1) {
        image.src = file + ".png";
        current++;
    }
    
}