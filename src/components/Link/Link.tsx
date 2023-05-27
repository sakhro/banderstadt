import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  className?: string;
}

export const Link: ReactFCWithChildrenProp<IProps> = (props) => (
  <NextLink
    {...props}
    className={clsx(
      props.className,
      "text-primary hover:opacity-80 transition-opacity"
    )}
  />
);
