import { Image } from "../Image";

import logoImg from "../../../public/static/images/logo.png";

export const Logo = () => {
  return <Image src={logoImg} alt="Logo" width={32} height={32} />;
};
