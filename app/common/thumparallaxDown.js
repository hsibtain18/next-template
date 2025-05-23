const thumparallaxDown = () => {
    var imageDown = document.getElementsByClassName("thumparallax-down");
    debugger
    if (imageDown) {
      new simpleParallax(imageDown, {
        orientation: "down",
        delay: 1,
        scale: 1.1,
      });
    }
}

export default thumparallaxDown;