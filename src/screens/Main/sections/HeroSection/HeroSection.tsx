import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

// Логотип вынесен для переиспользования
const Logo = () => (
  <div className="flex items-center h-[49px] w-[170px] flex-shrink-0">
    <div className="w-[55px] h-[49px] rounded-[7.34px] border-[3.31px] border-solid border-[#cdd9f5] relative flex-shrink-0">
      <div className="absolute w-[38px] h-[6px] top-[6px] left-[5px] bg-[#cdd9f5] rounded-[1.18px]" />
      <div className="absolute w-[29px] h-[6px] top-[30px] left-[5px] bg-[#cdd9f5] rounded-[1.18px]" />
      <div className="absolute w-[6px] h-[6px] top-[30px] left-[37px] bg-[#0066ff] rounded-[1.18px]" />
      <div className="absolute w-[38px] h-[6px] top-[18px] left-[5px] bg-[#cdd9f5] rounded-[1.18px]" />
    </div>
    <div className="ml-[18px] [font-family:'Gilroy-Regular',Helvetica] font-normal text-[22.7px] leading-[22.7px] flex-shrink-0">
      <span className="text-[#0066ff]">True</span>
      <span className="text-black">
        Rack
        <br />
        Systems
      </span>
    </div>
  </div>
);

interface HeroSectionProps {
  navItems: { label: string; href: string }[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ navItems }) => {
  return (
    <header className="flex justify-between items-center px-[190px] py-[50px] w-full">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList className="flex gap-[36px] items-center">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[18px] leading-[18px] whitespace-nowrap"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <Button className="w-[230px] h-[49px] bg-[#0066ff] rounded-[4.56px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[18px] leading-[18px] flex-shrink-0">
              Оставить заявку
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
