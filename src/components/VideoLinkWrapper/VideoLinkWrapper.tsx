import { Link } from "$/components/Link";

import styles from "./VideoLinkWrapper.module.css";

interface IProps {
  href: string;
  title?: string;
  subtitle?: string;
}

export const VideoLinkWrapper: ReactFCWithChildrenProp<IProps> = (props) => (
  <Link href={props.href} className="relative">
    <div
      className={`transition-colors absolute top-0 left-0 bottom-0 right-0 bg-black/[.0] hover:bg-black/[.6] z-[10] flex justify-center items-center ${styles.backdrop} flex-col p-6`}
    >
      {props.title && (
        <h1 className="hidden text-white text-2xl sm:text-4xl">
          {props.title}
        </h1>
      )}
      {props.subtitle && (
        <h2 className="hidden text-white text-base sm:text-xl mt-4">
          {props.subtitle}
        </h2>
      )}
    </div>
    {props.children}
  </Link>
);
