import React from "react";

export function Header() {
  const siteTitle = "Reactの基礎を学ぼう";

  return (
    <header>
      <nav>
        <hi>{siteTitle}</hi>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
