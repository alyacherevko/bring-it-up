import MainSlider from "./modules/slider/slider-main";
import PlayVideo from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", container: ".page" });
  slider.render();

  const player = new PlayVideo(".showup .play", ".overlay");
  player.init();
});
