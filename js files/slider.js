var x = 1; //initializes counter
function changePicture() {
    if (x == 1) { //if the counter is at 1
        document.getElementById("imgToChange").src = "./images/card_02.png";
        document.getElementById("slide_img_1").classList.add("active");
        document.getElementById("slide_img_4").classList.remove("active");
        x++; //increments the counter to 2
    } else if (x == 2) { //if this is the 2nd click
        document.getElementById("imgToChange").src = "./images/card_03.png";
        document.getElementById("slide_img_2").classList.add("active");
        document.getElementById("slide_img_1").classList.remove("active");
        x++; //increments counter to 3
    } else if (x == 3) { //if the counter is 3
        document.getElementById("imgToChange").src = "./images/card_04.png";
        document.getElementById("slide_img_3").classList.add("active");
        document.getElementById("slide_img_2").classList.remove("active");
        x++;
    } else if (x == 4) { //if the counter is 4
        document.getElementById("imgToChange").src = "./images/card_07.png";
        document.getElementById("slide_img_4").classList.add("active");
        document.getElementById("slide_img_3").classList.remove("active");
        x = 1;
    }

}


//menu dropdown

var submenus = document.querySelectorAll(".hassubmenu");

for (var i = 0; i < submenus.length; i++) {
    submenus[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var subm = this.closest('ul').querySelector('.show');
        if (subm && subm !== this) subm.classList.remove("show");
        this.classList.toggle("show");
    });
}



// added based on a comment, this will also hide any menu when clicked anywhere else
document.addEventListener("click", function() {
    var subm = document.querySelector('#saidbar_menu.show');
    if (subm) subm.classList.remove("show");
});