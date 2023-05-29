import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

export const Link: ReactFCWithChildrenProp<IProps> = (props) => (
  <NextLink
    {...props}
    className={clsx(
      props.className,
      "text-primary hover:opacity-80 transition-opacity cursor-pointer"
    )}
  />
);
