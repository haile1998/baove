$('.open-menu-icon').on('click', function () {
    $('.main-nav-outer').addClass('open-menu');
});
$('.menu-close-icon').click(function () {
    $('.main-nav-outer').removeClass('open-menu');
});

// var colect_btn = document.querySelectorAll('.tab-button button');
let colect_pnl = document.querySelectorAll('.collection-panel');
let product_pnl = document.querySelectorAll('.product-panel')

function showPanel(panelIndex) {
    colect_pnl.forEach(function(tab) {
        tab.style.display="none";
    });
    colect_pnl[panelIndex].style.display = "block";
}

showPanel(0);

let product_pnl = document.querySelectorAll('.product-pnl');

function showPanel2(panelIndex) {
    product_pnl.forEach(function(tabs) {
        tabs.style.display="none";
    });
    product_pnl[panelIndex].style.display = "block";
};

showPanel2(0);