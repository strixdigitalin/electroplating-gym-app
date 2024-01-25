document.addEventListener("DOMContentLoaded", function() {
    var openModalBtn = document.getElementById("openModalBtn");
    var filterModal = document.getElementById("filterModal");
    var closeModalBtn = document.getElementById("closeModalBtn");

    openModalBtn.addEventListener("click", function() {
        filterModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function() {
        filterModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == filterModal) {
            filterModal.style.display = "none";
        }
    });

    // Update range values dynamically
    var range1 = document.getElementById("range1");
    var range1Value = document.getElementById("range1Value");
    range1.addEventListener("input", function() {
        range1Value.textContent = range1.value;
    });

    var range2 = document.getElementById("range2");
    var range2Value = document.getElementById("range2Value");
    range2.addEventListener("input", function() {
        range2Value.textContent = range2.value;
    });
});
