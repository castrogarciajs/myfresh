import Lemon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

function Header() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ];
  return (
    <header class="header">
      <div class="header-title">
        <Lemon />
        <div class="myfresh">My Fresh</div>
      </div>
      <ul class="menu">
        {menus.map((menu) => (
          <li>
            <a href={menu.href} class="menu-link">
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
