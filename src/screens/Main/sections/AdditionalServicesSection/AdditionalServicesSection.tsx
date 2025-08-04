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
}

export const AdditionalServicesSection: React.FC<AdditionalServicesSectionProps> = ({ additionalServices }) => (
  <div className="relative w-full">
    <h2 className="text-center font-['Montserrat',Helvetica] font-extrabold text-black text-[30px] leading-[30px] pt-[68px] pb-[82px]">
      Прочие услуги
    </h2>
    <div className="px-[190px] pb-[90px]">
      <div className="space-y-[15px]">
        {additionalServices.map((service, index) => (
          <Card
            key={index}
            className="w-full h-[120px] bg-mainwhite rounded-[10px] border-0 shadow-none"
          >
            <CardContent className="flex items-center justify-between px-[120px] py-[32px] h-full">
              <div className="w-[210px] font-['Montserrat',Helvetica] font-semibold text-main-black text-[24px] leading-[24px]">
                {service.name}
              </div>
              <div className="flex items-center justify-center flex-1 px-[24px]">
                {service.spec && (
                  <Badge className="px-[18px] py-[11px] bg-main-blue rounded-[5px] font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[15px] text-mainwhite">
                    {service.spec}
                  </Badge>
                )}
              </div>
              <div className="w-[150px] text-center font-['Montserrat',Helvetica] font-medium text-main-black text-[18px] leading-[18px] px-[18px]">
                {service.price}
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
