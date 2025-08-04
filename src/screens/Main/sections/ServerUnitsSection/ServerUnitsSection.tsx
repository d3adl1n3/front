import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface ServerUnit {
  id: number;
  name: string;
  power?: string;
  bandwidth?: string;
  price: string;
  hideSpecs?: boolean;
}

interface ServerUnitsSectionProps {
  serverUnits: ServerUnit[];
}

export const ServerUnitsSection: React.FC<ServerUnitsSectionProps> = ({ serverUnits }) => (
  <div className="relative w-full">
    <h2 className="text-center font-['Montserrat',Helvetica] font-extrabold text-black text-[30px] leading-[30px] pt-[68px] pb-[82px]">
      Размещение сервера
    </h2>
    <div className="container mx-auto px-4 pb-[90px]">
      <div className="space-y-[15px]">
        {serverUnits.map((unit) => (
          <Card
            key={unit.id}
            className="w-full h-[120px] bg-mainwhite rounded-[10px] border-0 shadow-none"
          >
            <CardContent className="flex justify-between items-center px-[72px] py-6 h-full">

              {/* 1. Название: фиксированная ширина */}
              <div className="w-[240px] flex-shrink-0 font-['Montserrat',Helvetica] font-semibold text-main-black text-[24px] leading-[24px]">
                {unit.name}
              </div>

              {/* 2. Спецификации: резервируем место */}
              <div className="flex items-center gap-4 min-w-[200px]">
                {!unit.hideSpecs && (
                  <>
                    <Badge className="px-[18px] py-[11px] bg-main-blue rounded-[5px] font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[15px] text-mainwhite">
                      {unit.power}
                    </Badge>
                    <Badge className="px-[18px] py-[11px] bg-[#2d69f633] text-main-blue rounded-[5px] font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[15px]">
                      {unit.bandwidth}
                    </Badge>
                  </>
                )}
              </div>

              {/* 3. Цена: фиксированная ширина + text-left */}
              <div className="w-[180px] flex-shrink-0 text-left font-['Montserrat',Helvetica] font-medium text-main-black text-[18px] leading-[18px]">
                {unit.price}
              </div>

              {/* 4. Кнопка */}
              <Button
                variant="ghost"
                className="w-12 h-12 p-0 rounded-full flex-shrink-0"
              >
                <img
                  className="w-12 h-12"
                  alt="Button"
                  src="https://c.animaapp.com/mdvkwjd1qCbVGi/img/button.svg"
                />
              </Button>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
