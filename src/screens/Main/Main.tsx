import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { ContactFormSection } from "./sections/ContactFormSection";
import { InformationSection } from "./sections/InformationSection/InformationSection";
import { ServicesOverviewSection } from "./sections/ServicesOverview/ServicesOverviewSection";

export const Main = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Размещение сервера", href: "#server" },
    { label: "Дополнительные услуги", href: "#services" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  // Logo component
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

  // Contact information
  const contactInfo = {
    title: "Контактная информация",
    address: "📍 Адрес: г. Новосибирск, Академгородок, ул. Индустриальная, 12",
    phone: "📞 Телефон: +7 (383) 123-45-67",
    email: "📧 Email: info@truerack.ru",
    hours: "🕒 Режим работы: Пн–Пт с 10:00 до 19:00",
  };

  return (
    <div className="bg-[#f6f6f6] flex flex-row justify-center w-full min-w-full">
      <div className="bg-[#f6f6f6] w-[1920px] relative">
        {/* Header Navigation */}
        <header className="flex justify-between items-center px-[190px] py-[50px] w-full">
          <Logo />

          <NavigationMenu>
            <NavigationMenuList className="flex gap-[32px] items-center">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[20px] leading-[20px] whitespace-nowrap"
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

        {/* Main Content Sections */}
        <main className="flex flex-col w-full">
          <ServicesOverviewSection />
          <InformationSection />

          {/* Location Section */}
          <section className="flex flex-col items-center py-[32px]">
            <div className="flex items-center gap-[20px] mb-[20px]">
              <div className="relative w-[50px] h-[50px] flex-shrink-0">
                <div className="h-[50px] bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/union.svg)] bg-[100%_100%]">
                  <div className="relative w-[21px] h-[21px] top-[14px] left-[14px] bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/check.svg)] bg-[100%_100%]" />
                </div>
              </div>
              <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-black text-[40px] leading-[40px]">
                Мы находимся в Новосибирске
              </h2>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="flex flex-col items-center py-[64px] px-[190px]">
            <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-black text-[40px] leading-[40px] mb-[32px]">
              {contactInfo.title}
            </h2>

            <div className="flex w-full">
              <div className="w-1/2 flex items-center justify-center">
                <p className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[20px] leading-[26px] text-center">
                  {contactInfo.address}
                  <br />
                  {contactInfo.phone}
                  <br />
                  {contactInfo.email}
                  <br />
                  {contactInfo.hours}
                </p>
              </div>
              <div className="w-1/2 flex justify-center">
                <img
                  className="w-[616px] h-[602px] object-cover"
                  alt="Map of Novosibirsk location"
                  src="https://c.animaapp.com/mdvkwjd1qCbVGi/img/--------------2025-08-03---17-07-56-1.png"
                />
              </div>
            </div>
          </section>

          <ContactFormSection />
        </main>

        {/* Footer */}
        <footer className="flex justify-between items-center px-[190px] py-[32px]">
          <Logo />

          <NavigationMenu>
            <NavigationMenuList className="flex gap-[32px] items-center">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={`footer-${index}`}>
                  <NavigationMenuLink
                    href={item.href}
                    className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[20px] leading-[20px] whitespace-nowrap"
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
        </footer>
      </div>
    </div>
  );
};
