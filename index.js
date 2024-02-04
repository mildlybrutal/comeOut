const picAnimation = document.querySelector(".picture");

const button = document.querySelector("#no");
const yesButton = document.querySelector("#yes");
button.addEventListener('mouseover', () => {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

yesButton.addEventListener('click',function(){
    showAlert();
})

function showAlert(){
    alert("Thanks!");
}
