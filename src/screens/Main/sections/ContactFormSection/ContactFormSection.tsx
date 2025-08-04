
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

type ContactFormSectionProps = {
  selectedServices: string[];
  removeService: (service: string) => void;
  serviceTagsMap: Record<string, string>;
};

export const ContactFormSection = ({ selectedServices, removeService, serviceTagsMap }: ContactFormSectionProps): JSX.Element => {
  // Form field data
  const formFields = [
    { id: "name", label: "ФИО", placeholder: "Ваше имя и фамилия" },
    {
      id: "company1",
      label: "Ваша компания",
      placeholder: "Название компании",
    },
    { id: "phone", label: "Телефон", placeholder: "+7 (999) 888 77-66" },
    {
      id: "company2",
      label: "Ваша компания",
      placeholder: "Название компании",
    },
    {
      id: "description",
      label: "Ваша компания",
      placeholder: "Опишите конфигурацию или задайте вопрос",
      isTextarea: true,
    },
  ];

  // Service options (оставлено для совместимости, но не используется)
  // const serviceOptions = Object.keys(serviceTagsMap);

  return (
    <section className="w-full bg-[#2e6af6]" id="contact-form">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-normal text-white [font-family:'Montserrat',Helvetica] mb-6 md:mb-10">
          Заявка/Расчет
        </h2>
        <div className="w-full max-w-[540px] flex flex-col gap-10 md:gap-14">
          <form className="flex flex-col gap-6 md:gap-8">
            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label
                  htmlFor={field.id}
                  className="opacity-80 [font-family:'Montserrat',Helvetica] font-semibold text-white text-xs md:text-sm lg:text-base leading-normal"
                >
                  {field.label}
                </label>
                {field.isTextarea ? (
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-full min-h-[80px] md:min-h-[100px] bg-white rounded-[5px] px-4 md:px-6 py-4 md:py-6 [font-family:'Montserrat',Helvetica] font-semibold text-[#8a929a] text-xs md:text-sm lg:text-base leading-normal border-0 resize-none"
                  />
                ) : (
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-full min-h-[56px] md:min-h-[70px] bg-white rounded-[5px] px-4 md:px-6 py-4 md:py-6 [font-family:'Montserrat',Helvetica] font-semibold text-[#8a929a] text-xs md:text-sm lg:text-base leading-normal border-0"
                  />
                )}
              </div>
            ))}
            <div>
              <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xs md:text-sm lg:text-base leading-normal mb-3">
                Услуги к заявке:
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 min-h-[40px]">
                {selectedServices.length === 0 ? (
                  <span className="text-white opacity-70">ничего не выбрано</span>
                ) : (
                  selectedServices.map((service) => (
                    <Badge
                      key={service}
                      variant="outline"
                      className="bg-white rounded-[5px] px-4 md:px-6 py-2 md:py-4 [font-family:'Montserrat',Helvetica] font-semibold text-main-blue text-xs md:text-sm lg:text-base leading-normal h-auto cursor-pointer border-0 flex items-center gap-2"
                    >
                      {serviceTagsMap[service] || service}
                      <button
                        type="button"
                        className="ml-2 text-main-blue hover:text-red-500 text-lg font-bold"
                        onClick={() => removeService(service)}
                        aria-label="Удалить услугу"
                      >
                        ×
                      </button>
                    </Badge>
                  ))
                )}
              </div>
            </div>
          </form>
          <Button className="w-full min-h-[56px] md:min-h-[72px] bg-white rounded-[5px] [font-family:'Montserrat',Helvetica] font-bold text-[#2e6af6] text-sm md:text-lg leading-normal mt-8 flex items-center justify-center gap-2 md:gap-4">
            Отправить
            <img
              className="w-6 h-6 md:w-8 md:h-8 rotate-180"
              alt="Arrow left"
              src="https://c.animaapp.com/mdvkwjd1qCbVGi/img/arrow-left.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
