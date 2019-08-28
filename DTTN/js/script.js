$('.open-menu-icon').on('click', function () {
    $('.main-nav-outer').addClass('open-menu');
});
$('.menu-close-icon').click(function () {
    $('.main-nav-outer').removeClass('open-menu');
});

var colect_btn = document.querySelectorAll('.tab-button button');
var colect_pnl = document.querySelectorAll('.collection-panel');

function showPanel(panelIndex) {
    colect_pnl.forEach(function(tab) {
        tab.style.display="none";
    });
    colect_pnl[panelIndex].style.display = "block";
}

showPanel(0);

$('.search-icon').on('click',function (){
    $('.search-box-container').addClass('search-open');
});
$('.search-close').click(function() {
    $('.search-box-container').removeClass('search-open');
});