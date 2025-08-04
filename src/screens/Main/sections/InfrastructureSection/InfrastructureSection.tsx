import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface InfrastructureSectionProps {
  processSteps: ProcessStep[];
  featureBadges: string[];
}

export const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ processSteps, featureBadges }) => (
  <div className="w-full bg-[#f6f6f6] py-[70px]">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-[20px] mb-[20px]">
        <div className="relative w-[50px] h-[50px] bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/union.svg)]">
          <div className="relative w-[21px] h-[21px] top-[14px] left-[14px] bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/check.svg)]" />
        </div>
        <h2 className="font-['Montserrat',Helvetica] font-extrabold text-black text-[30px] leading-[30px]">
          Только надёжная инфраструктура
        </h2>
      </div>
      <p className="text-center font-['Montserrat',Helvetica] font-semibold text-[15px] leading-[19px] mb-[52px] max-w-[600px] mx-auto">
        <span className="text-[#8a929a]">
          После размещения серверов в нашем дата-центре вы получаете полную отказоустойчивость.{' '}
        </span>
        <span className="text-[#2e6af6]">SLA &gt; 99.9%</span>
        <span className="text-[#8a929a]">. Это нужно для гарантии бесперебойной работы ваших проектов 24/7.</span>
      </p>
      <div className="space-y-[20px]">
        <div className="flex gap-[20px]">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="flex-1 bg-white rounded-[10px] border-0 shadow-none"
            >
              <CardContent className="flex items-start gap-[30px] p-[30px]">
                <div className="w-[60px] h-[60px] bg-[#2e6af6] rounded-[30px] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Montserrat',Helvetica] font-extrabold text-[#f6f6f6] text-[18px] leading-[18px]">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-['Montserrat',Helvetica] font-semibold text-black text-[18px] leading-[18px]">
                    {step.title}
                  </h3>
                  <p className="font-['Montserrat',Helvetica] font-semibold text-[#8a929a] text-[15px] leading-[19px] whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="w-full bg-white rounded-[10px] border-0 shadow-none">
          <CardContent className="flex items-center px-[104px] py-[38px] gap-[96px]">
            <div className="relative w-[172px] h-[156px] flex-shrink-0">
              <div className="absolute w-[158px] h-[141px] top-0 left-[14px] rounded-[20.98px] border-[9.47px] border-solid border-[#cdd9f5]" />
              <div className="absolute w-[108px] h-[17px] top-[28px] left-[39px] bg-[#cdd9f5] rounded-[3.38px]" />
              <div className="absolute w-[82px] h-[17px] top-[94px] left-[39px] bg-[#cdd9f5] rounded-[3.38px]" />
              <div className="w-[17px] top-[94px] left-[130px] bg-[#0066ff] absolute h-[17px] rounded-[3.38px]" />
              <div className="w-[108px] top-[61px] left-[39px] bg-[#cdd9f5] absolute h-[17px] rounded-[3.38px]" />
              <div className="absolute w-[50px] h-[50px] top-[106px] left-0 bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/union.svg)]">
                <div className="relative w-[21px] h-[21px] top-[14px] left-[14px] bg-[url(https://c.animaapp.com/mdvkwjd1qCbVGi/img/check.svg)]" />
              </div>
            </div>
            <div className="flex flex-col gap-[30px] flex-1">
              <div className="flex items-start gap-[40px]">
                <div className="w-[60px] h-[60px] bg-[#2e6af6] rounded-[30px] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Montserrat',Helvetica] font-extrabold text-[#f6f6f6] text-[18px] leading-[18px]">
                    03
                  </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="font-['Montserrat',Helvetica] font-semibold text-black text-[18px] leading-[18px]">
                    Готово к использованию!
                  </h3>
                  <p className="font-['Montserrat',Helvetica] font-semibold text-[#8a929a] text-[15px] leading-[19px]">
                    Теперь вы можете использовать наш ЦОД на 100%
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-[15px]">
                {featureBadges.map((feature, index) => (
                  <Badge
                    key={index}
                    className="px-[22px] py-[11px] bg-[#d5e1fd] text-[#2e6af6] rounded-[100px] font-['Montserrat',Helvetica] font-semibold text-[13px] leading-[13px] h-auto"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);
