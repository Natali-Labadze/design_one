function showOneCard() {
    document.getElementById("modal_box").classList.add("show");
    document.getElementById("main_wrapper").classList.add("modal_open");
    document.getElementById("cards_wrapper").classList.add("modal_open");



}


function closeOneCard() {
    document.getElementById("modal_box").classList.remove("show");
    document.getElementById("main_wrapper").classList.remove("modal_open");
    document.getElementById("cards_wrapper").classList.remove("modal_open");
}



// document.querySelector('#video_source').autoplay = false;

let first = true;
document.getElementById('vid').addEventListener('click', (e) => {
    if (first) {
        e.target.play();
    }
    first = false;
});