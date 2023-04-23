import Lemon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

function Header() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ];
  return (
    <div>
      <div>
        <Lemon />
        <div>
          <h2>My Fresh</h2>
        </div>
      </div>
      <ul>
        {menus.map((menu) => (
          <li>
            <a href={menu.href}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
