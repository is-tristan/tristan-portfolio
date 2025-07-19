import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";

export default function initSplide() {

    const splide = new Splide('.splide', {
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: false,
        pagination: false,
    });

    splide.mount();
}