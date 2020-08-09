runScripts = function () {

    const navSlide = () => {
        const burger = document.querySelector(".menu-mobile__burger");
        const nav = document.querySelector(".menu-mobile__links");
        const navLinks = document.querySelectorAll(".menu-mobile__links li");
      
        burger.addEventListener("click", function () {
          nav.classList.toggle("nav-active");
      
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinksFade 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards ${
                index / 7 + 0.25
              }s`;
            }
          });
      
          burger.classList.toggle("toggle");
        });
      };
      
      navSlide();
      
      $("h3.toggle").click(function () {
        $(this).html($(this).html() == "INFO" ? "X" : "INFO");
        $(this).siblings().nextAll(".team-grid__bio").toggleClass("hidden");
      });
      
      $(document).ready(function () {
        $(".team__left__name").click(function () {
          $(".team__left__name.current").removeClass("current");
          $(this).addClass("current");
          $(".team__right__image.visible").removeClass("visible in");
          $(".team__left__bio.visible").removeClass("visible");
          $(".team__right__image").eq($(this).index()).addClass("visible in");
          $(".team__left__bio").eq($(this).index()).addClass("visible");
        });
      });
      
      const images = document.querySelectorAll(".anim");
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.1) {
              entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards cubic-bezier(0.23, 1, 0.32, 1)`;
            } else {
              entry.target.style.animation = "none";
            }
          });
        },
        {
          threshold: [0, 0.1, 1],
        }
      );
      
      images.forEach((image) => {
        observer.observe(image);
      });
      
      const portraits = document.querySelectorAll("div.portraitwrapper");
      const referenzen = document.querySelectorAll(
        "div.referenzen-objekt-grid__image"
      );
      
      imageObserver = new IntersectionObserver(
        (imageEntries) => {
          imageEntries.forEach((imageEntry) => {
            if (imageEntry.intersectionRatio >= 0.1) {
              imageEntry.target.classList.add("in-view");
            } else {
              imageEntry.target.classList.remove("in-view");
            }
          });
        },
        {
          threshold: [0, 0.1, 1],
        }
      );
      
      portraits.forEach((portrait) => {
        imageObserver.observe(portrait);
      });
      
      referenzen.forEach((referenz) => {
        imageObserver.observe(referenz);
      });
      
      const headerTag = document.querySelector(".menu-fixed");
      
      const toggleHeader = function () {
        const pixels = window.pageYOffset;
      
        if (pixels > 400) {
          headerTag.classList.add("scrolled");
        } else {
          headerTag.classList.remove("scrolled");
        }
      };
      
      toggleHeader();
      
      document.addEventListener("scroll", function () {
        toggleHeader();
      });

}

runScripts();

barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: "fade",
      beforeEnter({ current, next, trigger }) {
        const headerLinks = document.querySelectorAll("nav a");
        const href = next.url.path;

        headerLinks.forEach((link) => {
          if (link.getAttribute("href") === href) {
            link.classList.add("selected");
          } else {
            link.classList.remove("selected");
          }
        });

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      afterEnter({ current, next, trigger }) {
        runScripts()
      }
    }
  ],
});

runScripts();
