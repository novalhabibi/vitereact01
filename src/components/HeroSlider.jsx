import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const slides = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg'
];

export default function HeroSlider() {
  const [sliderRef] = useKeenSlider({ loop: true, duration: 1000 });

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((src, idx) => (
        <div className="keen-slider__slide" key={idx}>
          <img src={src} alt={`Slide ${idx}`} className="w-full h-[300px] object-cover" />
        </div>
      ))}
    </div>
  );
}