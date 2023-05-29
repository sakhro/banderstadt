import clsx from "clsx";

import styles from "./Skeleton.module.css";

export const Skeleton = () => (
  <div
    className={clsx(
      styles.skeleton,
      "min-w-[1024px] w-full h-72 md:h-[576px] rounded-2xl"
    )}
  />
);
