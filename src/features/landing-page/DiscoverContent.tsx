import { Button } from "@/components/ui/button";

import SectionDiv from "@/components/SectionDiv";
import SectionTitle from "@/components/SectionTitle";
import { discoverContentMenus } from "@/data/data";
import DiscoverContentMenu from "@/features/landing-page/DiscoverContentMenu";

export default function DiscoverContent() {
  return (
    <section>
      <SectionDiv>Discover</SectionDiv>
      <SectionTitle>Our Engagement</SectionTitle>

      <ul className="flex flex-wrap justify-center items-center gap-10 p-10">
        {discoverContentMenus.map((menu) => (
          <li key={menu.id}>
            <DiscoverContentMenu menu={menu} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <Button className="bg-red-500 text-xl font-bold">Learn More</Button>
      </div>
    </section>
  );
}
