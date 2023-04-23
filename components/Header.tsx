import Lemon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";

function Header() {
  const menus = [
    { name: "Posts", href: "/posts" },
    { name: "Public", href: "/public" },
  ];
  return (
    <header class="header">
      <div class="header-title">
        <Lemon size={35} />
        <div class="myfresh">
          <a href="/" class="menu-link">
            My Fresh
          </a>
        </div>
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
