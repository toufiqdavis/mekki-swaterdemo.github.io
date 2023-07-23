// Nav  bar search and hamburger initialization

document.getElementById("search-icon").addEventListener("click", function () {
  document.getElementById("popupSearch").style.display = "flex";
});

document.getElementById("menu-icon").addEventListener("click", function () {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("active");
});

//   Hero section
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 900, // Set the swiper slide speed (in milliseconds)
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable:true,
        },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
     
    });


//adding a funtion for search 
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}
//close function
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}
