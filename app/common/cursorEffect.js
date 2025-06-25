export default function mouseEffect() {
  const cursorInner = document.querySelector(".cursor-inner");
  const cursorOuter = document.querySelector(".cursor-outer");

  if (!cursorInner || !cursorOuter) return;

  let x = 0,
    y = 0;
  let isHovering = false;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    cursorInner.style.transform = `translate(${x}px, ${y}px)`;
    if (!isHovering) {
      cursorOuter.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  const handleHover = (entering) => {
    const method = entering ? "add" : "remove";
    cursorInner.classList[method]("cursor-hover");
    cursorOuter.classList[method]("cursor-hover");
    isHovering = entering;
  };

  // const hoverTargets = [
  //   ...document.querySelectorAll(".cursor-pointer"),
  //   ...document.querySelectorAll("a"),
  //   ...document.querySelectorAll("button"),
  //   ,
  // ];

  // hoverTargets.forEach((el) => {
  //   el.addEventListener("mouseenter", () => handleHover(true));
  //   el.addEventListener("mouseleave", () => handleHover(false));
  // });

  cursorInner.style.visibility = "visible";
  cursorOuter.style.visibility = "visible";
}
