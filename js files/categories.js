//add arrow icon in top_sidebar
function openSidebar() {
    var element = document.getElementById("sidebar_menu_box");
    element.classList.toggle("unhide");
    var sidebarEl = document.getElementById("sidebar");
    sidebarEl.classList.toggle("unhide");
    var productItem = document.getElementById("product_item");
    productItem.classList.toggle("hide");
    document.getElementById("down_arrow").classList.toggle("hide_arrow");
    document.getElementById("up_arrow").classList.toggle("unhide_arrow");
    document.getElementById("submits").classList.toggle("change_font");
    document.getElementById("top_sidebar").classList.toggle("change_padding");

}



// input in up-sidebar menu_dropdown item and product item


var inputTitle = document.querySelector('.sidebar_span');

// queryselectorAlls ar agiqvams
var inputLi = document.querySelectorAll('.dropdown_item');
inputLi.forEach(function(el) {
    el.addEventListener("click", function() {

        const clickEl = el.parentElement.previousElementSibling.innerText;

        document.getElementById("submits").innerHTML = clickEl;
    });
})

var inputs = document.querySelectorAll('.dropdown_item');
inputs.forEach(function(element) {
    element.addEventListener("click", function() {
        const clickElementText = element.innerText;
        document.getElementById("submit").innerHTML = clickElementText;

    });
})