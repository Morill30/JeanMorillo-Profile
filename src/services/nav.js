function checkedX() {
  var x = document.getElementById("chk").checked;

  if (x == true) {
    document.getElementById("nav-menu").style.right = "0";
  } else {
    document.getElementById("nav-menu").style.right = "-100%";
  }
}

//Test the button

console.log("test1");

function something() {
  console.log("test2");
  document.getElementById("myBtn").style.color = "red";
}

// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   var uluru = { lat: 40.396314, lng: -66.095171 };
//   // The map, centered at Uluru
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 16,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({ position: uluru, map: map });
// }

// initMap();

// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;

//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();

//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;

//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {

//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }

//     lastScrollTop = st;
// }
