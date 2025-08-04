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
  selectedServicesCount?: number;
  onLeaveRequestClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ navItems, selectedServicesCount, onLeaveRequestClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm flex justify-between items-center px-[190px] py-[18px] w-full transition-shadow">
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
            <div className="relative">
              <Button
                className="w-[230px] h-[49px] bg-[#0066ff] rounded-[4.56px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[18px] leading-[18px] flex-shrink-0"
                onClick={onLeaveRequestClick}
                type="button"
              >
                Оставить заявку
              </Button>
              {typeof selectedServicesCount === 'number' && selectedServicesCount > 0 && (
                <span className="absolute -top-3 -right-3 flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white text-[16px] font-bold border-2 border-white shadow-md z-10">
                  {selectedServicesCount}
                </span>
              )}
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export { HeroSection };
