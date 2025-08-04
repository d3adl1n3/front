import React from "react";

export const Header = () => (
  <header className="w-full bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Логотип и навигация будут вынесены в отдельные компоненты */}
      <div>Логотип</div>
      <nav className="text-[26px]">Навигация</nav>
    </div>
  </header>
);
