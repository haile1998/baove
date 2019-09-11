let product_panel = document.querySelectorAll('.product-panel');

function showPanel2(panelIndex) {
    product_pnl.forEach( function(tabs) {
        tabs.style.display="none";
    });
    product_pnl[panelIndex].style.display = "block";
};

showPanel2(0);