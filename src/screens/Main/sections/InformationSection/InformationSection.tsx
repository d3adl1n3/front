import React from "react";

import { ServerUnitsSection } from "../ServerUnitsSection/ServerUnitsSection";
import { InfrastructureSection } from "../InfrastructureSection/InfrastructureSection";
import { AdditionalServicesSection } from "../AdditionalServicesSection/AdditionalServicesSection";

export const InformationSection = (): JSX.Element => {
  // Server unit data for the first section
  const serverUnits = [
    { id: 1, name: "1 U", power: "250 Вт", bandwidth: "300 мбит/с", price: "от 5000₽/мес" },
    { id: 2, name: "2 U", power: "350 Вт", bandwidth: "300 мбит/с", price: "от 7000₽/мес" },
    { id: 3, name: "3 U", power: "400 Вт", bandwidth: "300 мбит/с", price: "от 9000₽/мес" },
    { id: 4, name: "4 U", power: "450 Вт", bandwidth: "300 мбит/с", price: "от 11000₽/мес" },
    { id: 5, name: "5 U", power: "500 Вт", bandwidth: "300 мбит/с", price: "от 13000₽/мес" },
    { id: 6, name: "6 U", power: "600 Вт", bandwidth: "300 мбит/с", price: "от 15000₽/мес" },
    { id: 7, name: "42 U / Full rack", price: "Цена договорная", hideSpecs: true },
    {
      id: 8,
      name: "Другие конфигурации",
      price: "Цена договорная",
      hideSpecs: true,
    },
  ];

  // Additional services data
  const additionalServices = [
    { name: "Розетка питания", spec: "300 ВА", price: "от 500 ₽/мес" },
    { name: "Дополнительные мощности", spec: "100 ВА", price: "от 800 ₽/мес" },
    { name: "Аренда ячейки", spec: "", price: "2 000 ₽/мес" },
    { name: "Гарантированная полоса", spec: "1 Гбит/с", price: "46 000 ₽/мес" },
    { name: "Гарантированная полоса", spec: "10 Гбит/с", price: "350 000 ₽/мес" },
    { name: "Гарантированная полоса", spec: "100 Мбит/с", price: "4 600 ₽/мес" },
    { name: "Локальный порт", spec: "1 Гбит/с", price: "1 000 ₽/мес" },
    { name: "Локальный порт", spec: "10 Гбит/с", price: "2 000 ₽/мес" },
    { name: "Локальный порт с резервированием", spec: "2 × 1 Гбит/с (MC-LAG)", price: "500 ₽/мес" },
    { name: "Локальный порт с резервированием", spec: "2 × 10 Гбит/с (MC-LAG)", price: "2 000 ₽/мес" },
    { name: "Организация VLAN", spec: "", price: "500 ₽/мес" },
    { name: "Резервированное подключение", spec: "1 Гбит/с (MC-LAG)", price: "500 ₽/мес" },
    { name: "Резервированное подключение", spec: "10 Гбит/с (MC-LAG)", price: "2 000 ₽/мес" },
  ];

  // Process steps data
  const processSteps = [
    {
      number: "01",
      title: "Размещение в TrueRack ЦОД",
      description: "Оставьте заявку и получите\nиндивидуальный расчет",
    },
    {
      number: "02",
      title: "Перенос оборудования",
      description:
        "Наши сотрудники выполнят весь перенос и настройку оборудования",
    },
  ];

  // Feature badges data
  const featureBadges = [
    "Доступ к серверу за 10 минут",
    "Помощь с настройкой",
    "Возможность прямого подключения, если ваш офис рядом",
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <ServerUnitsSection serverUnits={serverUnits} />
      <InfrastructureSection processSteps={processSteps} featureBadges={featureBadges} />
      <AdditionalServicesSection additionalServices={additionalServices} />
    </section>
  );
};
