import { Link } from "$/components/Link";
import { NAV } from "$/constants/navigation";

export const Nav = () => (
  <nav>
    <ul className="grid gap-4 grid-flow-col">
      <li>
        <Link href={NAV.PDRS_DETECT}>Pdrs Detect</Link>
      </li>
    </ul>
  </nav>
);
