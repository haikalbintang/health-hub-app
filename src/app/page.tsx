import SliderImage from "@/features/landing-page/SliderImage";
import DiscoverContent from "@/features/landing-page/DiscoverContent";
import SliderImage3 from "@/features/landing-page/SliderImage3";
import Hero from "@/features/landing-page/Hero";

import food1 from "@/components/images/food1.jpg";
import food2 from "@/components/images/food2.jpg";
import food3 from "@/components/images/food3.jpg";
import food4 from "@/components/images/food4.jpg";

import foodImage1 from "@/components/slidersv3/1.png";
import foodImage2 from "@/components/slidersv3/2.png";
import foodImage3 from "@/components/slidersv3/3.png";
import foodImage4 from "@/components/slidersv3/4.png";
import foodImage5 from "@/components/slidersv3/5.png";
import foodImage6 from "@/components/slidersv3/6.png";
import SliderImage2 from "@/features/landing-page/SliderImage2";

export default function Home() {
  const foodImages: string[] = [food1.src, food2.src, food3.src, food4.src];
  const foodImagesv2: string[] = [
    foodImage2.src,
    foodImage1.src,
    foodImage3.src,
    foodImage4.src,
    foodImage5.src,
    foodImage6.src,
  ];

  return (
    <main>
      <SliderImage />

      <DiscoverContent />

      <SliderImage2 />

      <SliderImage3 images={foodImagesv2} />

      <Hero />
    </main>
  );
}
