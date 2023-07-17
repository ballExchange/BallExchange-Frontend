import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";

const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => {
  return (
    <Link external {...props}>
      {children}
    </Link>
  );
};

export default LinkExternal;
