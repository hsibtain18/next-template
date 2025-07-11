const fadeWhenScroll = (element) => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;
    if (element) {
      element.forEach((item) => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = Math.max(0, 1 - scrolled / 300);
      });
    }
  });
};

export default fadeWhenScroll;
