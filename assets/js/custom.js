document.addEventListener('DOMContentLoaded', () => {
    const navOpen = document.querySelector('.nav-open');
    const navLink = document.querySelectorAll('.nav-link');
    console.log(navLink)
    const navWrapper = document.querySelector('.nav-wrapper');
 
    navOpen.addEventListener('click', () => {
        navWrapper.classList.toggle('show');
    });
    navLink.forEach(navLink => {
      navLink.addEventListener('click', () => {
        navWrapper.classList.remove('show');
      });
    });
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navWrapper.contains(event.target);
        const isClickOnNavOpen = navOpen.contains(event.target);
        const isClickOnNavLinkOrItem = event.target.matches('.nav-link, .dropdown-item');
        if (!isClickInsideNav && !isClickOnNavOpen && !isClickOnNavLinkOrItem) {
            navWrapper.classList.remove('show');
        }
    });
    
});
// Accordion=======
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(accordion => {
    const headers = accordion.querySelectorAll(".accordion-header");

    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isVisible = content.style.display === "block";
        if (isVisible) return;
        const allContents = accordion.querySelectorAll(".accordion-content");
        allContents.forEach(otherContent => {
          otherContent.style.display = "none";
        });
        content.style.display = "block";
      });
    });
  });
});
// Slider button-active====
const carousel = document.querySelector('#carouselExampleCaptions');
const navLinks = document.querySelectorAll('.nav-link');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const allNavItems = [...navLinks, ...dropdownItems];
carousel.addEventListener('slid.bs.carousel', (event) => {
    const activeIndex = event.to;
    allNavItems.forEach(item => item.classList.remove('active'));
    allNavItems.forEach(item => {
        const slideTo = item.getAttribute('data-bs-slide-to');
        if (parseInt(slideTo) === activeIndex) {
            item.classList.add('active');
        }
    });
});
