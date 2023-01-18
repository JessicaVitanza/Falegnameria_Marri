// hero parallax

window.addEventListener('scroll', () => {  
    let scrollTop = document.documentElement.scrollTop;        
    document.querySelector('.hero img').style.width = 100 + scrollTop / 10 + '%';
});




// section on scroll

const scrollElements = document.querySelectorAll(".box-intro");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.35)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



    // expanding card
    const panels = document.querySelectorAll('.panel')

    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active') 
        })
    })
        
    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
     }