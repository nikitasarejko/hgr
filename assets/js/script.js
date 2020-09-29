runScripts = function () {

  // TEAM GRID MODAL
  const teamModal = () => {

    const teamMembers = document.querySelectorAll('.team-grid__item')
    const bodyTag = document.querySelector('body')

    teamMembers.forEach(teamMember => {

      const bioToggle = teamMember.querySelector('h3.toggle')
      const closeIcon = teamMember.querySelector('.team-grid__close')
      const bio = teamMember.querySelector('.team-grid__bio')
      const staggerIn = gsap.timeline()
      const staggerOut = gsap.timeline()

      bioToggle.addEventListener('click', function () {
        bio.classList.add('box-open')
        bodyTag.classList.add('modal-open')

        staggerIn
          .to('.modal-overlay', {
            height: '100vh',
            duration: 0.5
          }, 0)
          .to('.modal-overlay', {
            opacity: 0.8,
            duration: 0.5,
            delay: 0.5
          }, 0)
          .to('img.portrait-small', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: "power4.out"
          }, 0)
          .to('div.team-grid__bio__content', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
          }, 1)
      })

      closeIcon.addEventListener('click', function () {
        bio.classList.remove('box-open')
        bodyTag.classList.remove('modal-open')

        staggerOut
          .to('.modal-overlay', {
            opacity: 0
          })
          .to('.modal-overlay', {
            height: 0
          })
          .to('img.portrait-small', {
            opacity: 0,
            y: '100%',
            duration: 0.5,
            ease: "power4.out"
          })
          .to('div.team-grid__bio__content', {
            opacity: 0,
            y: '100%',
            duration: 0.5,
            ease: "power4.out"
          })
      })

    })

  }

  teamModal();

  // TEAM LIST FRONT PAGE
  $(document).ready(function () {
    $(".team__left__name").click(function () {
      $(".team__left__name.current").removeClass("current");
      $(".team__right__image.visible").removeClass("visible in");
      $(".team__left__bio.visible").removeClass("visible");
      $(this).addClass("current");
      $(".team__left__bio").eq($(this).index() - 1).addClass("visible");
      $(".team__right__image").eq($(this).index()).addClass("visible in");
      console.log($(this.index));
    });
  });

  // FADE IN ANIMATION
  const images = document.querySelectorAll(".anim");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.1) {
          entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards cubic-bezier(0.23, 1, 0.32, 1)`;
        }
      });
    }, {
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
    }, {
      threshold: [0, 0.1, 1],
    }
  );

  portraits.forEach((portrait) => {
    imageObserver.observe(portrait);
  });

  referenzen.forEach((referenz) => {
    imageObserver.observe(referenz);
  });

  // MOBILE NAVIGATION
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

  // SMALL MENU TOGGLE
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
  transitions: [{
    name: "fade",
    beforeEnter({
      current,
      next,
      trigger
    }) {
      const headerLinks = document.querySelectorAll("nav a");
      const href = next.url.path;
      const mobileNav = document.querySelector('.menu-mobile__links')
      const burgerIcon = document.querySelector('.menu-mobile__burger')
      const navLinks = document.querySelectorAll(".menu-mobile__links li");

      if (mobileNav.classList.contains('nav-active')) {
        mobileNav.classList.remove('nav-active')
      }

      if (burgerIcon.classList.contains('toggle')) {
        burgerIcon.classList.remove('toggle')
      }

      navLinks.forEach((link) => {
        link.style.animation = "";
      });

      headerLinks.forEach((link) => {
        if (link.getAttribute("href") === href) {
          link.classList.add("selected");
        } else {
          link.classList.remove("selected");
        }
      });

      runScripts();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    afterEnter({
      current,
      next,
      trigger
    }) {

      return new Promise(resolve => {
        resolve()
        runScripts()
      })
    }
  }],
});