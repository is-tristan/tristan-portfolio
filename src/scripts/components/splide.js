import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";

export default function InitSplide() {
	const splide = new Splide("#slider", {
		type: "loop",
		perPage: 1,
		perMove: 1,
		autoplay: false,
		pagination: false,
		arrows: false,
	});

	splide.mount();
}
