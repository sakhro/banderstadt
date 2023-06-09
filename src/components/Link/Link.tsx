/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import clsx from "clsx";
import React from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";

const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  href?: NextLinkProps["href"];
}

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
  const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } =
    props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      legacyBehavior
    >
      <a ref={ref} {...other} href={to as string} />
    </NextLink>
  );
});

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const {
      activeClassName = "active",
      as: linkAs,
      className: classNameProps,
      href,
      noLinkStyle,
      ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
      [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternal =
      typeof href === "string" &&
      (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

    if (isExternal) {
      if (noLinkStyle) {
        return (
          <Anchor className={className} href={href} ref={ref} {...other} />
        );
      }

      return <MuiLink className={className} href={href} ref={ref} {...other} />;
    }

    if (noLinkStyle) {
      return (
        <NextLinkComposed
          className={className}
          ref={ref}
          to={href}
          {...other}
        />
      );
    }

    return (
      <MuiLink
        component={NextLinkComposed}
        linkAs={linkAs}
        className={className}
        ref={ref}
        to={href}
        {...other}
      />
    );
  }
);
