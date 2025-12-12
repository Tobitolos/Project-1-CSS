// When page loads, find all accordion buttons
window.onload = function() {
    // Get all buttons with class "accordion-button"
    var buttons = document.querySelectorAll('.accordion-button');
    
    // For each button, add click event
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            // Get the target div to show/hide
            var targetId = this.getAttribute('data-target');
            var targetDiv = document.querySelector(targetId);
            
            // Get the parent accordion
            var accordion = this.closest('.accordion');
            var allItems = accordion.querySelectorAll('.accordion-collapse');
            
            // Close all other items in this accordion
            for (var j = 0; j < allItems.length; j++) {
                if (allItems[j] !== targetDiv) {
                    allItems[j].classList.remove('show');
                    var otherButton = accordion.querySelector('[data-target="#' + allItems[j].id + '"]');
                    if (otherButton) {
                        otherButton.classList.add('collapsed');
                    }
                }
            }
            
            // Toggle current item
            if (targetDiv.classList.contains('show')) {
                targetDiv.classList.remove('show');
                this.classList.add('collapsed');
            } else {
                targetDiv.classList.add('show');
                this.classList.remove('collapsed');
            }
        };
    }
};
