import clsx from "clsx";
import { forwardRef } from "react";

interface IProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const Paper: ReactFCWithChildrenProp<IProps> = forwardRef<
  HTMLElement,
  IProps
>((props, ref) => (
  <section
    ref={ref}
    {...props}
    className={clsx(
      "bg-white/10 rounded-3xl overflow-hidden p-4 transition-colors",
      props.className
    )}
  />
));
