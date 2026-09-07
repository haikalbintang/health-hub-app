import NavbarWrapper from "@/components/Navbars/NavbarWrapper";
import SliderImage from "@/components/SliderImageS/SliderImage";
import DiscoverContent from "@/components/DiscoverContent";
// import SliderImagev2 from "@/components/SliderImagev2";
import SliderV3 from "@/components/SliderImageS/SliderImagev3";
import HeroPage from "@/components/For_HeroSection/HeroPage";
import Footer_vmhb from "@/components/Footers/Footer_vmhb";

import image1 from "../components/images/1.jpg";
import image2 from "../components/images/2.png";

import food1 from "../components/images/sliderImagesv2/food1.jpg";
import food2 from "../components/images/sliderImagesv2/food2.jpg";
import food3 from "../components/images/sliderImagesv2/food3.jpg";
import food4 from "../components/images/sliderImagesv2/food4.jpg";

import foodImage1 from "../components/images/slidersv3/1.png";
import foodImage2 from "../components/images/slidersv3/2.png";
import foodImage3 from "../components/images/slidersv3/3.png";
import foodImage4 from "../components/images/slidersv3/4.png";
import foodImage5 from "../components/images/slidersv3/5.png";
import foodImage6 from "../components/images/slidersv3/6.png";
import SliderImagev2_1 from "../components/SliderImageS/SliderImage_vmhb/SliderImagev2_1";

export default function Home() {
  const images: string[] = [image1.src, image2.src];
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
      <SliderImage images={images} maxHeight="500" />
      <DiscoverContent />
      {/* <SliderImagev2 foodImages={foodImages} /> */}
      <SliderImagev2_1 />
      <SliderV3 images={foodImagesv2} />
      <HeroPage />
    </main>
  );
}
