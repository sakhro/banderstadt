import { Link } from "$/components/Link";
import { Logo } from "$/components/Logo";
import { Nav } from "$/components/Nav";
import { NAV } from "$/constants/navigation";

export const Header = () => {
  return (
    <header className="flex px-4 py-2 items-center">
      <div className="flex items-center flex-1">
        <Link href={NAV.HOME} className="mr-4">
          <Logo />
        </Link>
        <h1 className="flex-1">BANDERSTADT</h1>
      </div>
      <div className="flex-none">
        <Nav />
      </div>
    </header>
  );
};
