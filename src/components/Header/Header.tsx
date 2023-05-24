import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="flex px-4 py-2 items-center">
      <div className="flex-none mr-4">
        <Logo />
      </div>
      <h1 className="flex-1">BANDERSTADT</h1>
    </header>
  );
};
