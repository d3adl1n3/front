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
            <CardContent className="flex items-center justify-between px-[40px] py-[32px] h-full">
              <div className="w-[180px] font-['Montserrat',Helvetica] font-semibold text-main-black text-[24px] leading-[24px] pl-[20px]">
                {unit.name}
              </div>
              <div className="flex items-center justify-center flex-1 px-[24px]">
                {!unit.hideSpecs && (
                  <div className="flex items-start gap-[20px]">
                    <Badge className="px-[18px] py-[11px] bg-main-blue rounded-[5px] font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[15px] text-mainwhite">
                      {unit.power}
                    </Badge>
                    <Badge className="px-[18px] py-[11px] bg-[#2d69f633] text-main-blue rounded-[5px] font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[15px]">
                      {unit.bandwidth}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="w-[150px] text-center font-['Montserrat',Helvetica] font-medium text-main-black text-[18px] leading-[18px] px-[18px]">
                {unit.price || "от 5000₽/мес"}
              </div>
              <div className="w-[52px] flex justify-center">
                <Button
                  className="w-[52px] h-[52px] p-0 rounded-full bg-transparent border-0"
                  variant="ghost"
                >
                  <img
                    className="w-[52px] h-[52px]"
                    alt="Button"
                    src="https://c.animaapp.com/mdvkwjd1qCbVGi/img/button.svg"
                  />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);
