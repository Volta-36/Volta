function readmore(){
    var readmore = document.getElementById('secondary-id');
    readmore.scrollIntoView({behavior: "smooth"});
}

function shikshadeepfb(){
    window.location.href = 'https://www.facebook.com/shikshadeephsschool';
}

function shikshadeepyt(){
    window.location.href = 'https://www.youtube.com/@shikshadeepcollege2421';
}

function programs(){
    var programs = document.getElementById('programs-id');
    programs.scrollIntoView({behavior: "smooth"});
}

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".offer-box");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#main-title");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#main-subtitle");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#main-btn");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#secondary-right-title");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#secondary-right-text");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#secondary-link");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});


document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".sports-box");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".programs-card");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".message-box");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".achievement-box");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var counters = document.querySelectorAll('.achievement-text-box-title');
    var duration = 3300; // Animation duration in milliseconds
    var animationStartedClass = 'animation-started'; // Class to mark elements for which animation has started

    function checkVisibility() {
        counters.forEach(function(counter) {
            var elementPosition = counter.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the bottom of the element is within the viewport and animation has not started yet
            if (elementPosition.bottom < windowHeight && !counter.classList.contains(animationStartedClass)) {
                startCountAnimation(counter);
            }
        });
    }

    function startCountAnimation(counter) {
        counter.classList.add(animationStartedClass); // Mark element as animation started
        var target = +counter.getAttribute('data-target');
        var count = 0;
        var increment = target / (duration / 16); // Update every 16ms for smoother animation (close to 60fps)

        var updateCount = function() {
            count += increment;
            counter.innerText = Math.ceil(count);

            if (count < target) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        }

        updateCount();
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".team-box");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll("#about-us-title");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".about-right");
    
    function checkVisibility() {
        animatedElements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            // Check if the element is within the viewport
            if (elementPosition.top < windowHeight) {
                element.classList.add("show"); // Apply the class to trigger the transition
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});


  