import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface AdditionalService {
  name: string;
  spec: string;
  price: string;
}

interface AdditionalServicesSectionProps {
  additionalServices: AdditionalService[];
  addService: (service: string) => void;
  selectedServices: string[];
  serviceTagsMap: Record<string, string>;
}

export const AdditionalServicesSection: React.FC<AdditionalServicesSectionProps> = ({
  additionalServices,
  addService,
  selectedServices,
  serviceTagsMap,
}) => (
  <div className="relative w-full">
    <h2 className="text-center font-['Montserrat',Helvetica] font-extrabold text-black text-[30px] leading-[30px] pt-[68px] pb-[82px]">
      Прочие услуги
    </h2>
    <div className="container mx-auto px-4 pb-[90px]">
      <div className="space-y-[15px]">
        {additionalServices.map((service, index) => (
          <Card
            key={index}
            className="w-full h-[120px] bg-mainwhite rounded-[10px] border-0 shadow-none"
          >
            <CardContent className="flex justify-between items-center px-[72px] py-6 h-full">
              {/* 1. Название: ширина увеличена на 50px до 290px */}
              <div className="w-[290px] flex-shrink-0 font-['Montserrat',Helvetica] font-semibold text-main-black text-[20px] leading-[20px]">
                {service.name}
              </div>

              {/* 2. Спецификация: резервируем место */}
              <div className="flex items-center gap-4 min-w-[200px]">
                {service.spec && (
                  <Badge className="px-[18px] py-[11px] bg-main-blue rounded-[5px] font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[15px] text-mainwhite">
                    {service.spec}
                  </Badge>
                )}
              </div>

              {/* 3. Цена: фиксированная ширина + text-left */}
              <div className="w-[180px] flex-shrink-0 text-left font-['Montserrat',Helvetica] font-medium text-main-black text-[18px] leading-[18px]">
                {service.price}
              </div>

              {/* 4. Кнопка */}
              <button
                type="button"
                className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center border-0 bg-transparent focus:outline-none"
                onClick={() => addService(service.name)}
                disabled={selectedServices.includes(service.name)}
                aria-label="Добавить услугу"
                style={{ padding: 0 }}
              >
                <img
                  src="https://c.animaapp.com/mdvkwjd1qCbVGi/img/button.svg"
                  alt="Добавить услугу"
                  className="w-16 h-16"
                  draggable={false}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
