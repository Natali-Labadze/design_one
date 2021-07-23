// scroll to top
function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}


// hide or appear search button on scroll on desktop version
function searchButtonAppear() {
    document.getElementById("search_input_hide").classList.toggle("show");

}

// hide or appear search button on tablet and mobile versions
function searchButtonAppearMobile() {
    document.getElementById("search_group_mobile").classList.toggle("show_search_input");
    document.getElementById("search_btn_mobile").classList.toggle("search_input_unhide");
    document.getElementById("search_close_icon").classList.toggle("search_input_hide");
    document.getElementById("base_categories").classList.toggle("search_input_show");



}

function AppearSearch() {
    // when click closebutton, close overlay menu
    closeNav();
    searchButtonAppearMobile();

}




// header sticky

window.onscroll = function() { stickyFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");


    } else {
        header.classList.remove("sticky");

    }
}



// menu dropdown on footer_menu

//menu dropdown

var footerMenu = document.querySelectorAll(".hasFooterMenu");

for (var i = 0; i < footerMenu.length; i++) {
    footerMenu[i].addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        var last = this.closest('ul').querySelector('.showFooter');
        if (last && last !== this) last.classList.remove("showFooter");
        this.classList.toggle("showFooter");
    });
}


// overlay  for mobile and tablet version

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.transition = "all 0.6s";

}

function closeNav() {
    // when click closebutton, close overlay menu
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.transition = "all 0.6s";


}



// overlay dropdown menu
var overlayMenu = document.querySelectorAll(".hasOverlayMenu");


for (var i = 0; i < overlayMenu.length; i++) {
    overlayMenu[i].addEventListener("click", function(e) {
        // e.preventDefault();
        // e.stopPropagation();
        var showDrop = this.closest('li').querySelector('.showDropdown');
        if (showDrop && showDrop !== this) showDrop.classList.remove("showDropdown");
        this.classList.toggle("showDropdown");

    });


}


function unhideDropdown() {
    const collections = document.querySelectorAll('.overlay_col');

    for (let i = 0; i < collections.length; i++) {
        collections[i].remove();
    }
    const overlayHide = document.getElementById("unhide")
    overlayHide.classList.add("unhide");


}


function unhideSecondDropdown() {
    const collectionSecond = document.querySelectorAll('.overlay_li');

    for (let i = 0; i < collectionSecond.length; i++) {
        collectionSecond[i].remove();
    }
    const overlayHideSecond = document.getElementById("unhide_second")
    overlayHideSecond.classList.add("unhide_second");


}

function unhideThirdDropdown() {
    const collectiontThird = document.querySelectorAll('.overlay_li');

    for (let i = 0; i < collectiontThird.length; i++) {
        collectiontThird[i].remove();
    }

    const overlayHideThird = document.getElementById("unhide_third")
    overlayHideThird.classList.add("unhide_third");

}


function unhideFourthDropdown() {
    const collectiontFourth = document.querySelectorAll('.overlay_li');

    for (let i = 0; i < collectiontFourth.length; i++) {
        collectiontFourth[i].remove();
    }

    const overlayHideFourth = document.getElementById("unhide_fourth")
    overlayHideFourth.classList.add("unhide_fourth");

}

function unhideFifthDropdown() {
    const collectiontFifth = document.querySelectorAll('.overlay_li');

    for (let i = 0; i < collectiontFifth.length; i++) {
        collectiontFifth[i].remove();
    }

    const overlayHideFifth = document.getElementById("unhide_fifth")
    overlayHideFifth.classList.add("unhide_fifth");

}

function unhideSixthDropdown() {
    const collectiontSixth = document.querySelectorAll('.overlay_li');

    for (let i = 0; i < collectiontSixth.length; i++) {
        collectiontSixth[i].remove();
    }

    const overlayHideSixth = document.getElementById("unhide_sixth")
    overlayHideSixth.classList.add("unhide_sixth");

}




// when click languages, add class active


var activeLanguage = document.getElementsByClassName("language_list")[0];
activeLanguage.addEventListener("click", myFunction);

function myFunction(e) {

    var elems = document.querySelector(".active");
    if (elems != null) {
        elems.classList.remove("active");
    }
    e.target.className = "active";
}


// when click on production button , language will be none
function languageMenu() {
    document.getElementById("overlay_language").style.display = "none";

}