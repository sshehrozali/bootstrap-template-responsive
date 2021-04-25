// Array for links id
let links = [
    "homeBtnNavLink", "featuresBtnNavLink", "pricingBtnNavLink", "contactusBtnNavLink"
]

// Home Btn
document.getElementById(links[0]).addEventListener("click", function() {

    for (var i = 0; i < links.length; i++) {
        if (i == 0) {
            var remvElement = document.getElementById(links[0]);
            remvElement.classList.remove("text-muted");
            continue;
        }

        else{
            var element = document.getElementById(links[i]);
            element.classList.add("text-muted");
        }
    }
})

// Features Btn
document.getElementById(links[1]).addEventListener("click", function() {

    for (var i = 0; i < links.length; i++) {
        if (i == 1) {
            var remvElement = document.getElementById(links[1]);
            remvElement.classList.remove("text-muted");
            continue;
        }

        else{
            var element = document.getElementById(links[i]);
            element.classList.add("text-muted");
        }
    }
})

// Pricing Btn
document.getElementById(links[2]).addEventListener("click", function() {

    for (var i = 0; i < links.length; i++) {
        if (i == 2) {
            var remvElement = document.getElementById(links[2]);
            remvElement.classList.remove("text-muted");
            continue;
        }

        else{
            var element = document.getElementById(links[i]);
            element.classList.add("text-muted");
        }
    }
})

// Contact Us Btn
document.getElementById(links[3]).addEventListener("click", function() {

    for (var i = 0; i < links.length; i++) {
        if (i == 3) {
            var remvElement = document.getElementById(links[3]);
            remvElement.classList.remove("text-muted");
            continue;
        }

        else{
            var element = document.getElementById(links[i]);
            element.classList.add("text-muted");
        }
    }
})