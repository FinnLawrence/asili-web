$(document).ready(function() {
    homepage.animate(5000, 3000, true);
});

var homepage = {
    containerElement: "#homepage",
    classes: ["frame-1", "frame-2", "frame-3", "frame-4"],
    animate: function(initialDelay, animationDelay, loop) {
        var numStates = this.classes.length;
        
        var i = 0;
        
        function advanceState() {
            // Remove classes
            $(homepage.containerElement).removeClass(homepage.classes.join(" "));
            
            // Add current class
            $(homepage.containerElement).addClass(homepage.classes[i]);
            
            i++;
            
            if (loop && i >= numStates) {
                // Reset the loop
                i = 0;
            }
            
            if (i < numStates) {
                setTimeout(advanceState, animationDelay);
            }
        }
        
        setTimeout(advanceState, initialDelay);
    }
}