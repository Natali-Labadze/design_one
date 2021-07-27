let card = document.querySelectorAll(".card");
card.forEach(each => {
    each.addEventListener('click', () => {
        document.getElementById("modal_box").classList.add("show");
        document.getElementById("main_wrapper").classList.add("modal_open");
    })
})



function closeOneCard() {
    document.getElementById("modal_box").classList.remove("show");
    document.getElementById("main_wrapper").classList.remove("modal_open");
}