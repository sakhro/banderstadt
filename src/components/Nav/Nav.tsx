"use client";
import { Link } from "$/components/Link";
import { ReactSVG } from "react-svg";
import { NAV } from "$/constants/navigation";

import packageJSON from "../../../package.json";

import styles from "./Nav.module.css";

export const Nav = () => (
  <nav>
    <ul className="grid gap-6 grid-flow-col">
      <li>
        <Link href={NAV.PDRS_DETECT}>Pdrs Detect</Link>
      </li>
      <li>
        <Link target="_blank" href={packageJSON.repository}>
          <ReactSVG src="/static/icons/github.svg" className={styles.icon} />
        </Link>
      </li>
    </ul>
  </nav>
);
