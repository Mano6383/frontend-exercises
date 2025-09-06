let button = document.getElementById('btn');
let body = document.getElementById("container");
button.addEventListener('click', function() {
    let newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    document.getElementById('color').textContent = newColor;
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}