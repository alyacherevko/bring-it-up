import Slider from "./modules/slider";
import PlayVideo from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(".page", ".next");
  slider.render();

  const player = new PlayVideo(".showup .play", ".overlay");
  player.init();
});
