import React from "react";

export const Header = () => (
  <header className="w-full bg-white shadow-sm">
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between py-6 px-4 md:px-10 lg:px-20 xl:px-40">
      {/* Логотип и навигация будут вынесены в отдельные компоненты */}
      <div>Логотип</div>
      <nav>Навигация</nav>
    </div>
  </header>
);
