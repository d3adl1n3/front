import { TrendingUpIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[580px] bg-cover bg-center bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/20250802-2001-abstract-liquid-elegance-simple-compose-01k1ndyn2e.png)]">
      <div className="absolute inset-0 bg-[#d5e1fd0d] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex items-center justify-between h-full">
        {/* Текстовая часть */}
        <div className="max-w-[770px]">
          {/* Иконка и заголовок */}
          <div className="flex items-center gap-4 mb-10">
            <Card className="w-10 h-10 flex items-center justify-center p-0 bg-[#0066ff] rounded-full border-none">
              <CardContent className="p-0 flex items-center justify-center h-full w-full">
                <TrendingUpIcon className="w-[18px] h-[18px] text-white" />
              </CardContent>
            </Card>
            <h2 className="font-['Montserrat',Helvetica] font-extrabold text-black text-[32px] md:text-[40px] leading-[40px] md:leading-[52px] whitespace-nowrap">
              Collocation услуги нового
            </h2>
          </div>

          {/* Подзаголовок */}
          <h3 className="font-['Montserrat',Helvetica] font-extrabold text-black text-[32px] md:text-[40px] leading-[40px] md:leading-[52px] mb-6">
            поколения. Размещение серверов
            <br className="hidden md:block" />
            в Новосибирске
          </h3>

          {/* Кнопка */}
          <Button className="w-full sm:w-[400px] h-[53px] px-[32px] sm:px-[58px] py-[17px] bg-[#0066ff] rounded-md text-[18px] sm:text-[18.6px] font-['Montserrat',Helvetica] font-bold text-[#edf7ff]">
            Оставить заявку
          </Button>
        </div>

        {/* Изображение сервера */}
        <div className="hidden md:block">
          <img
            className="w-[228px] h-[366px]"
            alt="Server illustration"
            src="https://c.animaapp.com/mdvkwjd1qCbVGi/img/img.svg"
          />
        </div>
      </div>
    </section>
  );
};
